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
		
		// Set default value for auto block recovery if it doesn't exist.
		if ( false === get_option( 'rbea_auto_block_recovery' ) ) {
			update_option( 'rbea_auto_block_recovery', '1' );
		}

		// Initialize last-changed timestamp option for global inherit-from-theme toggle if it doesn't exist.
		if ( false === get_option( 'rbea_global_inherit_from_theme_last_changed', false ) ) {
			add_option( 'rbea_global_inherit_from_theme_last_changed', '', '', 'no' );
		}

		// Set default value for content width if it doesn't exist.
		if ( false === get_option( 'rbea_default_content_width' ) ) {
			update_option( 'rbea_default_content_width', 1340 );
		}

		// Set default value for container padding if it doesn't exist.
		if ( false === get_option( 'rbea_default_container_padding' ) ) {
			update_option( 'rbea_default_container_padding', 10 );
		}

		// Set default value for container gap if it doesn't exist.
		if ( false === get_option( 'rbea_default_container_gap' ) ) {
			update_option( 'rbea_default_container_gap', 20 );
		}

		// Set default value for template library button visibility if it doesn't exist.
		if ( false === get_option( 'rbea_template_library_button_on' ) ) {
			update_option( 'rbea_template_library_button_on', '1' );
		}
	}
}
