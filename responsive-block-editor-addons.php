<?php
/**
 * Plugin Name:     Responsive Block Editor Addons
 * Plugin URI:      cyberchimps.com
 * Description:     Responsive Blocks for Gutenberg
 * Author:          CyberChimps
 * Text Domain:     responsive-block-editor-addons
 * Domain Path:     /languages
 * Version:         1.5.0
 *
 * @package         Responsive_Block_Editor_Addons
 */

define( 'RESPONSIVE_BLOCK_EDITOR_ADDONS_URL', trailingslashit( plugin_dir_url( __FILE__ ) ) );
define( 'RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR', trailingslashit( plugin_dir_path( __FILE__ ) ) );
define( 'RESPONSIVE_BLOCK_EDITOR_ADDONS_VER', '1.5.0' );
define( 'RESPONSIVE_BLOCK_EDITOR_ADDONS_BASENAME', plugin_basename( __FILE__ ) );
define( 'THIRTY_DAYS_IN_SECONDS', 2592000 );

// Responsive Block Editor Addons plugin's main file.
require plugin_dir_path( __FILE__ ) . 'includes/class-responsive-block-editor-addons.php';

/**
 * The code that runs during plugin activation.
 */
function activate_responsive_block_editor_addons() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-responsive-block-editor-addons-activator.php';
	Responsive_Block_Editor_Addons_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 */
function deactivate_responsive_block_editor_addons() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-responsive-block-editor-addons-deactivator.php';
	Responsive_Block_Editor_Addons_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_responsive_block_editor_addons' );
register_deactivation_hook( __FILE__, 'deactivate_responsive_block_editor_addons' );

/**
 * Begins execution of the plugin.
 */
function run_responsive_block_editor_addons() {

	$plugin = new Responsive_Block_Editor_Addons();
}

run_responsive_block_editor_addons();

if ( ! function_exists( 'rbea_fs' ) ) {
	/**
	 * Helper function to access SDK.
	 */
	function rbea_fs() {
		global $rbeao_fs;

		if ( ! isset( $rbeao_fs ) ) {
			// Include Analytics SDK.
			require_once dirname( __FILE__ ) . '/analytics/start.php';

			$rbeao_fs = rbeas_dynamic_init(
				array(
					'id'              => '11',
					'slug'            => 'responsive-block-editor-addons',
					'product_name'    => 'Responsive Gutenberg Blocks Library',
					'module_type'     => 'plugin',
					'version'         => RESPONSIVE_BLOCK_EDITOR_ADDONS_VER,
					'plugin_basename' => 'responsive-block-editor-addons/responsive-block-editor-addons.php',
					'plugin_url'      => RESPONSIVE_BLOCK_EDITOR_ADDONS_URL,
				)
			);
		}

		return $rbeao_fs;
	}

	// Init Analytics.
	rbea_fs();
	// SDK initiated.
	do_action( 'rbea_fs_loaded' );
}
