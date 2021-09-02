<?php
/**
 * Importer block related functions.
 *
 * @since 1.3.4
 * @package RBEA Templates
 */

if ( ! function_exists( 'rbea_block_templates_get_filesystem' ) ) :
	/**
	 * Get an instance of WP_Filesystem_Direct.
	 *
	 * @since 1.3.4
	 * @return object A WP_Filesystem_Direct instance.
	 */
	function rbea_block_templates_get_filesystem() {
		global $wp_filesystem;

		require_once ABSPATH . '/wp-admin/includes/file.php';

		WP_Filesystem();

		return $wp_filesystem;
	}
endif;

if ( ! function_exists( 'rbea_block_templates_is_valid_image' ) ) :
	/**
	 * Check for the valid image
	 *
	 * @param string $link  The Image link.
	 *
	 * @since 1.3.4
	 * @return boolean
	 */
	function rbea_block_templates_is_valid_image( $link = '' ) {
		return preg_match( '/^((https?:\/\/)|(www\.))([a-z0-9-].?)+(:[0-9]+)?\/[\w\-]+\.(jpg|png|gif|jpeg)\/?$/i', $link );
	}
endif;
