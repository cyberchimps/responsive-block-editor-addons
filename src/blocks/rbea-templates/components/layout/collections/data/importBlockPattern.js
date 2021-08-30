const { rawHandler } = wp.blocks;

export function importBlockPattern( blockPattern, clientId ) {
	
	wp.data.dispatch( 'core/block-editor' ).replaceBlocks(
		clientId,
		rawHandler( {
			HTML: blockPattern,
			mode: 'BLOCKS',
		} )
	);
}