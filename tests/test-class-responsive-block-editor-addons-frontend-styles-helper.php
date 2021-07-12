<?php
/**
 * RBEA Styles Helper test file
 *
 * @package category
 */

/**
 * Require frontend styles helper class
 */
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'classes/class-responsive-block-editor-addons-frontend-styles-helper.php';

/**
 * Test class for frontend styles helper
 */
class Responsive_Block_Editor_Addons_Frontend_Styles_Helper_Test extends WP_UnitTestCase {
	/**
	 * The Responsive_Block_Editor_Addons_Front_Styles_Helper class instance .
	 *
	 * @access public
	 * @var    string    $rbea_frontend_styles_helper class instance.
	 */
	public static $rbea_frontend_styles_helper;

	/**
	 * Setup class instance
	 *
	 * @param class WP_UnitTest_Factory $factory class instance.
	 */
	public static function wpSetUpBeforeClass( WP_UnitTest_Factory $factory ) {
		self::$rbea_frontend_styles_helper = new Responsive_Block_Editor_Addons_Frontend_Styles_Helper();
	}

	/**
	 * Test for Responsive_Block_Editor_Addons_Frontend_Styles_Helper class constructor
	 */
	public function test_responsive_block_editor_addons_frontend_styles_helper_constructor() {
		self::$rbea_frontend_styles_helper = new Responsive_Block_Editor_Addons_Frontend_Styles_Helper();
		$this->assertTrue( self::$rbea_frontend_styles_helper instanceof Responsive_Block_Editor_Addons_Frontend_Styles_Helper );
		$this->assertEquals( 100, has_action( 'wp_head', array( self::$rbea_frontend_styles_helper, 'responsive_block_editor_addons_description' ) ) );
		$this->assertEquals( 100, has_action( 'wp_head', array( self::$rbea_frontend_styles_helper, 'responsive_block_editor_addons_frontend_styles' ) ) );
	}

	/**
	 * Test for generated description
	 */
	public function test_responsive_block_editor_addons_description() {
		$expected_output = "\n<!-- This block is generated with the Responsive Blocks Library Plugin v" . substr( RESPONSIVE_BLOCK_EDITOR_ADDONS_VER, 0, -2 ) . ' (Responsive Gutenberg Blocks Library ' . RESPONSIVE_BLOCK_EDITOR_ADDONS_VER . ") - https://cyberchimps.com/blocks/ -->\n\n";
		$this->expectOutputString( $expected_output );
		self::$rbea_frontend_styles_helper->responsive_block_editor_addons_description();
	}

	/**
	 * Test for get_instance function
	 */
	public function test_get_instance() {
		$instance = self::$rbea_frontend_styles_helper->get_instance();
		$this->assertEquals( self::$rbea_frontend_styles_helper, $instance );
	}
}
