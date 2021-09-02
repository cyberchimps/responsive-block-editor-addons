<?php
/**
 * Functions to handle remote links and download images
 *
 * @since 1.3.4
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
		 * @since 1.3.4
		 * @var (Object) RBEA_Block_Templates
		 */
		private static $instance = null;

		/**
		 * Get Instance
		 *
		 * @since 1.3.4
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
		 * @since 1.3.4
		 */
		private function __construct() {
			require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . '/includes/layout/functions.php';
			require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . '/includes/layout/class-rbea-block-templates-image-importer.php';
			include_once ABSPATH . 'wp-admin/includes/image.php';

			add_action( 'wp_ajax_rbea_block_templates_import_block', array( $this, 'import_block' ) );
		}

		/**
		 * Import Block
		 *
		 * @param String $content content of the pattern.
		 */
		public function import_block( $content ) {

			$content = $this->get_content( $content );

			// Update content.
			wp_send_json_success( $content );
		}

		/**
		 * Download and Replace remote images links to local links
		 *
		 * @since 1.3.4
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

			// Download images.
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

			// Replace mapping links.
			foreach ( $link_mapping as $old_url => $new_url ) {
				$content = str_replace( $old_url, $new_url, $content );

				// Replace the slashed URLs if any exist.
				$old_url = str_replace( '/', '/\\', $old_url );
				$new_url = str_replace( '/', '/\\', $new_url );
				$content = str_replace( $old_url, $new_url, $content );
			}

			return $content;
		}
	}

	/**
	 * Calling get_instance() method
	 */
	RBEA_Block_Templates::get_instance();

endif;
