<?php
/**
 * Server-side rendering for the image slider block.
 *
 * @since   1.0.0
 * @package Responsive Blocks
 */

/**
 * Image Slider frontend assets funciton.
 *
 * @return void
 */
function responsive_block_editor_addons_image_slider_add_frontend_assets() {
	if ( has_block( 'responsive-block-editor-addons/image-slider' ) ) {
		wp_enqueue_script(
			'responsive_block_editor_addons-image-slider-front-script',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'dist/js/vendors/flickity.js',
			array(),
			RESPONSIVE_BLOCK_EDITOR_ADDONS_VER,
			true
		);

		wp_enqueue_script(
			'responsive_block_editor_addons-image-slider-lightbox',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'dist/responsive-block-editor-addons-lightbox.js',
			array(),
			RESPONSIVE_BLOCK_EDITOR_ADDONS_VER,
			true
		);
	}
}

add_action( 'wp_enqueue_scripts', 'responsive_block_editor_addons_image_slider_add_frontend_assets' );
add_action( 'the_post', 'responsive_block_editor_addons_image_slider_add_frontend_assets' );
