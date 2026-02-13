<?php
/**
 * Server-side rendering for the form block.
 *
 * @since   1.0.0
 * @package Responsive Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Form frontend assets funciton.
 *
 * @return void
 */
function responsive_block_editor_addons_form_add_frontend_assets( $post_id = null ) {
	if ( empty( $post_id ) ) {
		$post_id = get_the_ID();
	}
	if ( has_block( 'responsive-block-editor-addons/form', $post_id ) ) {
		wp_enqueue_script(
			'responsive_block_editor_addons-form-front-script',
			plugins_url( 'form.js', __FILE__ ),
			array(),
			RESPONSIVE_BLOCK_EDITOR_ADDONS_VER,
			true
		);

		wp_localize_script(
			'responsive_block_editor_addons-form-front-script',
			'rbea_form_block',
			array(
				'ajax'       => admin_url( 'admin-ajax.php' ),
				'siteurl'    => site_url(),
				'adminEmail' => get_bloginfo( 'admin_email' ),
				'siteName'   => get_bloginfo( 'name' ),
			)
		);
	}
}

add_action( 'wp_enqueue_scripts', 'responsive_block_editor_addons_form_add_frontend_assets' );
add_action( 'responsive_block_editor_addons_enqueue_scripts', 'responsive_block_editor_addons_form_add_frontend_assets' );

/**
 * Add data-post-id attribute to form elements.
 *
 * @param string $block_content The block content.
 * @param array  $block         The block data.
 * @return string Modified block content.
 * 
 */
function responsive_block_editor_addons_form_add_post_id_attribute( $block_content, $block ) {
	// Only process our form block.
	if ( 'responsive-block-editor-addons/form' !== $block['blockName'] ) {
		return $block_content;
	}

	$post_id = get_the_ID();
	
	// If not in a post context (e.g., template part), try to get from global post.
	if ( ! $post_id ) {
		global $post;
		if ( isset( $post->ID ) ) {
			$post_id = $post->ID;
		}
	}

	// If still no post_id, set to 0 (will trigger fallback search).
	if ( ! $post_id ) {
		$post_id = 0;
	}

	// Add data-post-id attribute to the form element.
	if ( false !== strpos( $block_content, '<form' ) ) {
		$block_content = preg_replace(
			'/(<form[^>]*class="[^"]*responsive-block-editor-addons-form__form[^"]*"[^>]*)/',
			'$1 data-post-id="' . esc_attr( $post_id ) . '"',
			$block_content,
			1
		);
	}

	return $block_content;
}
add_filter( 'render_block', 'responsive_block_editor_addons_form_add_post_id_attribute', 10, 2 );
