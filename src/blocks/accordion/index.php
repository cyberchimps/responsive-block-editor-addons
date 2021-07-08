<?php
/**
 * Server-side rendering for the accordion block.
 *
 * @since   1.0.0
 * @package Responsive Blocks
 */

/**
 * Accordion frontend assets funciton.
 *
 * @return void
 */
function responsive_block_editor_addons_accordion_add_frontend_assets() {
	if ( has_block( 'responsive-block-editor-addons/accordion' ) ) {
		wp_enqueue_script(
			'responsive_block_editor_addons-accordion-front-script',
			plugins_url( 'accordion.js', __FILE__ ),
			array(),
			RESPONSIVE_BLOCK_EDITOR_ADDONS_VER,
			true
		);
	}
}

add_action( 'wp_enqueue_scripts', 'responsive_block_editor_addons_accordion_add_frontend_assets' );
