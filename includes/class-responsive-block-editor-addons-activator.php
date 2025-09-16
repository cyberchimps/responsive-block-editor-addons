<?php
/**
 * Fired during plugin activation
 *
 * @link       https://www.cyberchimps.com
 * @since      1.0.0
 *
 * @package    Responsive_Block_Editor_Addons
 * @subpackage Responsive_Block_Editor_Addons/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    Responsive_Block_Editor_Addons
 * @subpackage Responsive_Block_Editor_Addons/includes
 * @author     CyberChimps <support@cyberchimps.com>
 */
class Responsive_Block_Editor_Addons_Activator {

	/**
	 * Short Description.
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function activate() {
		set_transient( 'responsive_block_editor_addons_activation_redirect', true, MINUTE_IN_SECONDS );
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'includes/class-responsive-block-editor-addons-blocks-updater.php';
		$rbea_blocks = Responsive_Block_Editor_Addons_Blocks_Updater::get_instance();
		$rbea_blocks->insert_blocks_data();
	}
}
