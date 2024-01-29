<?php
/**
 * Plugin Name:     Responsive Blocks - WordPress Gutenberg Blocks
 * Plugin URI:      cyberchimps.com
 * Description:     Responsive Blocks for Gutenberg
 * Author:          CyberChimps
 * Text Domain:     responsive-block-editor-addons
 * Domain Path:     /languages
 * Version:         1.7.9
 *
 * @package         Responsive_Block_Editor_Addons
 */

define( 'RESPONSIVE_BLOCK_EDITOR_ADDONS_URL', trailingslashit( plugin_dir_url( __FILE__ ) ) );
define( 'RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR', trailingslashit( plugin_dir_path( __FILE__ ) ) );
define( 'RESPONSIVE_BLOCK_EDITOR_ADDONS_VER', '1.7.9' );
define( 'RESPONSIVE_BLOCK_EDITOR_ADDONS_BASENAME', plugin_basename( __FILE__ ) );
define( 'RESPONSIVE_BLOCK_EDITOR_ADDONS_THIRTY_DAYS_IN_SECONDS', 2592000 );

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