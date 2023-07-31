// const rbea_deactivated_blocks = rbea_deactivate_blocks.deactivated_blocks;
// if ( rbea_deactivated_blocks.length ) {
// 	if ( typeof wp.blocks.unregisterBlockType !== 'undefined' ) {
// 		for ( const index in rbea_deactivated_blocks ) {
// 			// wp.blocks.unregisterBlockType( rbea_deactivated_blocks[ index ] );
//             // console.log
// 		}
// 	}
// }
wp.blocks.unregisterBlockType( 'responsive-block-editor-addons/advanced-heading' )