<?php
/**
 * Server-side rendering for the form block.
 *
 * @since   1.0.0
 * @package Responsive Blocks
 */

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
