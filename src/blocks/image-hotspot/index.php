<?php
/**
 * Server-side rendering for the image hotspot block
 *
 * @since   1.4.0
 * @package Responsive Blocks
 */

/**
 * Add Frontend assets.
 *
 * @param Array $attributes Attributes.
 */
function responsive_block_editor_addons_image_hotspot_add_frontend_assets( $attributes ) {
	if ( has_block( 'responsive-block-editor-addons/image-hotspot' ) ) {

		if ( ! wp_script_is( 'popper', 'enqueued' ) ) {
			wp_enqueue_script( 'popper' );
		}

		if ( ! wp_script_is( 'tippy', 'enqueued' ) ) {
			wp_enqueue_script( 'tippy' );
		}

		wp_enqueue_script(//phpcs:ignore
			'responsive_block_editor_addons-image-hotspot-script-waypoints',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'dist/js/vendors/waypoints/lib/jquery.waypoints.min.js',
			array( 'jquery' ),
			RESPONSIVE_BLOCK_EDITOR_ADDONS_VER,
			true
		);
		wp_enqueue_script(//phpcs:ignore
			'responsive_block_editor_addons-image-hotspot-script-unescape',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'dist/js/vendors/lodash.unescape/unescape.min.js',
			array(),
			RESPONSIVE_BLOCK_EDITOR_ADDONS_VER,
			true
		);
		wp_enqueue_style(
			'responsive_block_editor_addons-image-hotspot-tippy',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'dist/js/vendors/tippy.js/themes.css',
			array(),
			filemtime( RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'dist/js/vendors/tippy.js/themes.css' )
		);
		wp_enqueue_style(
			'responsive_block_editor_addons-style-css-tippy-animation',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'dist/js/vendors/tippy.js/animations.css',
			array(),
			filemtime( RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'dist/js/vendors/tippy.js/animations.css' )
		);

	}
}

add_action( 'wp_enqueue_scripts', 'responsive_block_editor_addons_image_hotspot_add_frontend_assets' );
add_action( 'the_post', 'responsive_block_editor_addons_image_hotspot_add_frontend_assets' );
