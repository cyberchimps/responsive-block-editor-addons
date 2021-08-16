<?php
/**
 * Init
 *
 * @since 1.0.0
 * @package RBEA Templates
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'RBEA_Block_Templates' ) ) :

	/**
	 * Admin
	 */
	class RBEA_Block_Templates {

		/**
		 * Instance
		 *
		 * @since 1.0.0
		 * @var (Object) RBEA_Block_Templates
		 */
		private static $instance = null;

		/**
		 * Get Instance
		 *
		 * @since 1.0.0
		 *
		 * @return object Class object.
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}

			return self::$instance;
		}

		/**
		 * Constructor.
		 *
		 * @since 1.0.0
		 */
		private function __construct() {
			require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . '/includes/layout/functions.php';
			require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . '/includes/layout/class-rbea-templates-image-importer.php';
			include_once( ABSPATH . 'wp-admin/includes/image.php' );

			add_action( 'wp_ajax_rbea_block_templates_import_block', array( $this, 'import_block' ) );
			add_filter( 'upload_mimes', array( $this, 'custom_upload_mimes' ) );
		}

		/**
		 * Add .json files as supported format in the uploader.
		 *
		 * @param array $mimes Already supported mime types.
		 */
		public function custom_upload_mimes( $mimes ) {

			// Allow JSON files.
			$mimes['json'] = 'application/json';

			return $mimes;
		}

		/**
		 * Import Block
		 */
		public function import_block( $content ) {

			$content = $this->get_content( $content );

			// Update content.
			wp_send_json_success( $content );
		}

		/**
		 * Download and Replace hotlink images
		 *
		 * @since 1.0.0
		 *
		 * @param  string $content Mixed post content.
		 * @return array           Hotlink image array.
		 */
		public function get_content( $content = '' ) {

			// Extract all links.
			preg_match_all( '#\bhttps?://[^,\s()<>]+(?:\([\w\d]+\)|([^,[:punct:]\s]|/))#', $content, $match );

			$all_links = array_unique( $match[0] );

			// Not have any link.
			if ( empty( $all_links ) ) {
				return $content;
			}

			$link_mapping = array();
			$image_links  = array();
			$other_links  = array();

			// Extract normal and image links.
			foreach ( $all_links as $key => $link ) {
				if ( rbea_block_templates_is_valid_image( $link ) ) {

					// Get all image links.
					// Avoid *-150x, *-300x and *-1024x images.
					if (
						false === strpos( $link, '-150x' ) &&
						false === strpos( $link, '-300x' ) &&
						false === strpos( $link, '-1024x' )
					) {
						$image_links[] = $link;
					}
				} else {

					// Collect other links.
					$other_links[] = $link;
				}
			}

			// Step 1: Download images.
			if ( ! empty( $image_links ) ) {
				foreach ( $image_links as $key => $image_url ) {
					// Download remote image.
					$image            = array(
						'url' => $image_url,
						'id'  => 0,
					);
					$downloaded_image = RBEA_Block_Templates_Image_Importer::get_instance()->import( $image );
					// Old and New image mapping links.
					$link_mapping[ $image_url ] = $downloaded_image['url'];
				}
			}

			// Step 3: Replace mapping links.
			foreach ( $link_mapping as $old_url => $new_url ) {
				$content = str_replace( $old_url, $new_url, $content );

				// Replace the slashed URLs if any exist.
				$old_url = str_replace( '/', '/\\', $old_url );
				$new_url = str_replace( '/', '/\\', $new_url );
				$content = str_replace( $old_url, $new_url, $content );
			}

			return $content;
		}

		/**
		 * Allowed tags for the batch update process.
		 *
		 * @param  array        $allowedposttags   Array of default allowable HTML tags.
		 * @param  string|array $context    The context for which to retrieve tags. Allowed values are 'post',
		 *                                  'strip', 'data', 'entities', or the name of a field filter such as
		 *                                  'pre_user_description'.
		 * @return array Array of allowed HTML tags and their allowed attributes.
		 */
		public function allowed_tags_and_attributes( $allowedposttags, $context ) {

			// Keep only for 'post' contenxt.
			if ( 'post' === $context ) {

				// <svg> tag and attributes.
				$allowedposttags['svg'] = array(
					'xmlns'   => true,
					'viewbox' => true,
				);

				// <path> tag and attributes.
				$allowedposttags['path'] = array(
					'd' => true,
				);
			}

			return $allowedposttags;
		}

		/**
		 * Get white label name
		 *
		 * @since 1.0.7
		 *
		 * @return string
		 */
		public function get_white_label() {
			if ( ! is_callable( 'RBEA_Ext_White_Label_Markup::get_whitelabel_string' ) ) {
				return '';
			}

			$name = RBEA_Ext_White_Label_Markup::get_whitelabel_string( 'rbea-sites', 'name' );

			if ( ! empty( $name ) ) {
				return $name;
			}

			return '';
		}
	}

	/**
	 * Kicking this off by calling 'get_instance()' method
	 */
	RBEA_Block_Templates::get_instance();

endif;
