const rbea_deactivated_blocks = rbea_deactivate_blocks.deactivated_blocks;
if ( rbea_deactivated_blocks.length ) {
	if ( typeof wp.blocks.unregisterBlockType !== 'undefined' ) {
        rbea_deactivated_blocks.map((current) => {
            if ( current.status === false ) {
                wp.blocks.unregisterBlockType( 'responsive-block-editor-addons/' +  current.key );
            }
        })
	}
}