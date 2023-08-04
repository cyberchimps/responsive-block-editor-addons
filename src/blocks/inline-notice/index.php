<?php
/**
 * Server-side rendering for the inline notice block
 *
 * @since   1.0.0
 * @package Responsive Blocks
 */

/**
 * Add Frontend assets.
 *
 * @param Array $attributes Attributes.
 */
function responsive_block_editor_addons_inline_notice_add_frontend_assets( $attributes ) {
	if ( has_block( 'responsive-block-editor-addons/inline-notice' ) ) {
		wp_enqueue_script(//phpcs:ignore
			'responsive_block_editor_addons-inline-notice-cookies-script',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'dist/js/vendors/js_cookie.js',
			array(),
			RESPONSIVE_BLOCK_EDITOR_ADDONS_VER
		);
	}
}
add_action( 'wp_enqueue_scripts', 'responsive_block_editor_addons_inline_notice_add_frontend_assets' );
add_action( 'the_post', 'responsive_block_editor_addons_inline_notice_add_frontend_assets' );
