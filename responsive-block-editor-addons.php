<?php
/**
 * Plugin Name:     Responsive Blocks - WordPress Gutenberg Blocks
 * Plugin URI:      cyberchimps.com
 * Description:     Responsive Blocks offers 50+ Gutenberg blocks so you can design beautiful pages without writing a single line of code.
 * Author:          CyberChimps
 * Author URI:		https://cyberchimps.com/responsive-blocks/
 * Text Domain:     responsive-block-editor-addons
 * Domain Path:     /languages
 * Version:         2.1.9
 *
 * @package         Responsive_Block_Editor_Addons
 */

define( 'RESPONSIVE_BLOCK_EDITOR_ADDONS_URL', trailingslashit( plugin_dir_url( __FILE__ ) ) );
define( 'RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR', trailingslashit( plugin_dir_path( __FILE__ ) ) );
define( 'RESPONSIVE_BLOCK_EDITOR_ADDONS_VER', '2.1.9' );
define( 'RESPONSIVE_BLOCK_EDITOR_ADDONS_BASENAME', plugin_basename( __FILE__ ) );
define( 'RESPONSIVE_BLOCK_EDITOR_ADDONS_SEVEN_DAYS_IN_SECONDS', 604800 );

// Responsive Block Editor Addons plugin's main file.
require plugin_dir_path( __FILE__ ) . 'includes/class-responsive-block-editor-addons.php';

// Responsive Block Editor Addons plugin's helper file.
require plugin_dir_path( __FILE__ ) . 'helper/class-responsive-block-editor-addons-helper.php';

// Responsive Block Editor Addons SVG renderer class.
require plugin_dir_path( __FILE__ ) . 'classes/class-responsive-block-editor-addons-svg-renderer.php';

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

add_filter('attachment_fields_to_edit', 'rba_add_custom_category_field', 10, 2);
function rba_add_custom_category_field($form_fields, $post)
{
	$category = get_post_meta($post->ID, '_rba_category', true);

	$form_fields['rba_category'] = [
		'label' => 'RBA Category',
		'input' => 'text',
		'value' => $category,
		'helps' => 'Add categories like Cat1, Cat2',
	];

	return $form_fields;
}


add_filter('attachment_fields_to_save', 'rba_save_custom_category_field', 10, 2);
function rba_save_custom_category_field($post, $attachment)
{
	if (isset($attachment['rba_category'])) {
		update_post_meta($post['ID'], '_rba_category', sanitize_text_field($attachment['rba_category']));
	}

	return $post;
}

add_filter('rest_prepare_attachment', function ($response, $post) {
	$response->data['rba_category'] = get_post_meta($post->ID, '_rba_category', true);
	return $response;
}, 10, 2);

run_responsive_block_editor_addons();