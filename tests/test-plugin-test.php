<?php
/**
 * Class Responsive_Block_Editor_Addons Test file
 *
 * @author     CyberChimps <support@cyberchimps.com>
 */


/**
 * Test if plugin is loaded correctly
 */
class PluginTest extends WP_UnitTestCase {

	/**
	 * Test if WordPress site is loaded.
	 */
	function test_wordpress_is_properly_loaded() {
		$this->assertTrue( function_exists( 'do_action' ) );
		$this->assertTrue( function_exists( 'add_filter' ) );
		$this->assertTrue( function_exists( 'apply_filters' ) );
	}

	/**
	 * Test if plugin is properly loaded
	 */
	function test_plugin_is_properly_loaded() {
		// Test if activation and deactivation are working.
		$this->assertTrue( function_exists( 'activate_responsive_block_editor_addons' ) );
		$this->assertTrue( function_exists( 'deactivate_responsive_block_editor_addons' ) );
		$this->assertTrue( function_exists( 'register_activation_hook' ) );
		$this->assertTrue( function_exists( 'register_deactivation_hook' ) );
		$this->assertTrue( class_exists( 'Responsive_Block_Editor_Addons_Activator' ) );
		$this->assertTrue( class_exists( 'Responsive_Block_Editor_Addons_Deactivator' ) );
		$this->assertTrue( class_exists( 'Responsive_Block_Editor_Addons' ) );

		// Test if google fonts are loaded.
		$this->assertTrue( function_exists( 'responsive_block_editor_addons_add_google_fonts' ) );
		$this->assertTrue( function_exists( 'gather_google_fonts' ) );

		// Test if frontend styles are loaded.
		$this->assertTrue( class_exists( 'Responsive_Block_Editor_Addons_Frontend_Styles' ) );
		$this->assertTrue( class_exists( 'Responsive_Block_Editor_Addons_Frontend_Styles_Helper' ) );
	}
}
