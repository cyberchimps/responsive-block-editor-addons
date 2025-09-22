import { select, dispatch, subscribe } from '@wordpress/data';
import { createBlock, parse, serialize } from '@wordpress/blocks';
import isInvalid from './isInvalid';

// Flag to Detect if At Least One Block was Recovered.
let recoveryDone = false;

// Create Recovery CSS to Hide All Erroneous Blocks.
const createRecoveryCSS = () => {
	const recoveryCSS = document.createElement( 'style' );
	recoveryCSS.setAttribute( 'id', 'rbea-recovery-styles' );
	recoveryCSS.innerHTML = '.has-warning[data-type^="responsive-block-editor-addons/"] { opacity: 0 !important; }';
	document.body.appendChild( recoveryCSS );
};

// Destroy the Recovery CSS to Restore the Editor to its Original State.
const destroyRecoveryCSS = () => {
	const recoveryCSS = document.getElementById( 'rbea-recovery-styles' );
	if ( recoveryCSS ) {
		document.body.removeChild( recoveryCSS );
	}
};

// Create Replacement Blocks Based on the Fixed Variant.
const recoverBlocks = ( allBlocks ) =>
	allBlocks.map( ( block ) => {
		const curBlock = block;

		// Handle nested blocks
		if ( curBlock.innerBlocks && curBlock.innerBlocks.length ) {
			const newInnerBlocks = recoverBlocks( curBlock.innerBlocks );
			if ( newInnerBlocks.some( ( innerBlock ) => innerBlock.recovered ) ) {
				curBlock.innerBlocks = newInnerBlocks;
				curBlock.replacedClientId = curBlock.clientId;
				curBlock.recovered = true;
			}
		}

		// Handle current block
		if ( isInvalid( curBlock ) ) {
			recoveryDone = true;
			const newBlock = recoverBlock( curBlock );
			newBlock.replacedClientId = curBlock.clientId;
			newBlock.recovered = true;
			return newBlock;
		}

		return curBlock;
	} );

// Recover Current Block.
const recoverBlock = ( { name, attributes, innerBlocks } ) => createBlock( name, attributes, innerBlocks );

// Start with the Automatic Block Recovery Process.
const autoBlockRecovery = () => {
	createRecoveryCSS();
	setTimeout( () => {
		const unsubscribe = subscribe( () => {
			if ( select( 'core' ).getEntityRecords( 'postType', 'wp_block' ) !== null ) {
				unsubscribe();
				const recoveredBlocks = recoverBlocks( select( 'core/block-editor' ).getBlocks() );
				recoveredBlocks.forEach( ( block ) => {
					if ( block.recovered && block.replacedClientId ) {
						dispatch( 'core/block-editor' ).replaceBlock( block.replacedClientId, block );
					}
				} );
				if ( recoveryDone ) {
					console.log(
						'%cResponsive Block Editor Addons: Auto Block Recovery - All blocks on this page have been recovered!',
						'border-radius: 6px; width: 100%; margin: 16px 0; padding: 16px; background-color: #007CBA; color: #fff; font-weight: bold; text-shadow: 2px 2px 2px #0063A1;'
					);
				}
				destroyRecoveryCSS();
			}
		} );
	}, 0 );
};

export default autoBlockRecovery;