<?php
/**
 * Server-side rendering for the gallery masonry block.
 *
 * @since   1.0.0
 * @package Responsive Blocks
 */

/**
 * Gallery masonry frontend assets funciton.
 *
 * @return void
 */
function responsive_block_editor_addons_gallery_masonry_add_frontend_assets() {
	if ( has_block( 'responsive-block-editor-addons/gallery-masonry' ) ) {
		wp_enqueue_script(
			'responsive_block_editor_addons-gallery-masonry-front-script',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'dist/responsive-block-editor-addons-masonry.js',
			array( 'jquery', 'masonry', 'imagesloaded' ),
			RESPONSIVE_BLOCK_EDITOR_ADDONS_VER,
			true
		);

		wp_enqueue_script(
			'responsive_block_editor_addons-gallery-masonry-lightbox',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'dist/responsive-block-editor-addons-lightbox.js',
			array(),
			RESPONSIVE_BLOCK_EDITOR_ADDONS_VER,
			true
		);
	}
}

add_action( 'wp_enqueue_scripts', 'responsive_block_editor_addons_gallery_masonry_add_frontend_assets' );
add_action( 'the_post', 'responsive_block_editor_addons_gallery_masonry_add_frontend_assets' );
