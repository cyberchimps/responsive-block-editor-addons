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
	$widget_blocks = get_option( 'widget_block' );
	if ( has_block( 'responsive-block-editor-addons/accordion' ) ) {
		wp_enqueue_script(
			'responsive_block_editor_addons-accordion-front-script',
			plugins_url( 'accordion.js', __FILE__ ),
			array(),
			RESPONSIVE_BLOCK_EDITOR_ADDONS_VER,
			true
		);
	} elseif ( ! empty( $widget_blocks ) ) {
		foreach ( $widget_blocks as $widget ) {
			if ( ! empty( $widget['content'] ) ) {
				wp_enqueue_script(
					'responsive_block_editor_addons-accordion-front-script',
					plugins_url( 'accordion.js', __FILE__ ),
					array(),
					RESPONSIVE_BLOCK_EDITOR_ADDONS_VER,
					true
				);
			}
		}
	}
}

add_action( 'wp_enqueue_scripts', 'responsive_block_editor_addons_accordion_add_frontend_assets' );
