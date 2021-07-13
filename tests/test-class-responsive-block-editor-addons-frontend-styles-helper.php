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

	/**
	 * Test for get filesystem
	 */
	public function test_get_filesystem() {
		global $wp_filesystem;
		$check_file = ABSPATH . '/wp-admin/includes/file.php';
		WP_Filesystem();
		$this->assertEquals( $wp_filesystem, self::$rbea_frontend_styles_helper->get_filesystem() );
		$this->assertTrue( isset( $check_file ) );
	}

	/**
	 * Test for get_block_css function
	 */
	public function test_get_block_css() {
		// Spacer block.
		$block    = array(
			'blockName'    => 'responsive-block-editor-addons/spacer',
			'attrs'        => array(
				'block_id' => '735a215f-6058-4e7c-9067-25354913a950',
			),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$expected = array(
			'desktop' => ' .responsive-block-editor-addons-spacer{height: 100px;}',
			'tablet'  => ' .responsive-block-editor-addons-spacer{height: 100px;}',
			'mobile'  => ' .responsive-block-editor-addons-spacer{height: 100px;}',
		);
		$result   = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );

		// Advanced Heading block.
		$block = array(
			'blockName'    => 'responsive-block-editor-addons/advanced-heading',
			'attrs'        => array(
				'block_id' => '9cfb800e-5acc-45aa-89e8-20553d7d9ad1',
			),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);

		$result = self::$rbea_frontend_styles_helper->get_block_css( $block );

		$expected = array(
			'desktop' => array(
				' .responsive-block-editor-addons-block-advanced-heading{text-align: center;}',
				' .responsive-heading-title-text{font-weight: 600;line-height: 1;letter-spacing: 0;margin-bottom: 15px;text-decoration: none;}',
				' .responsive-heading-seperator{border-top-style: solid;border-top-width: 3px;width: 20%;margin-bottom: 15px;}',
				' .responsive-heading-desc-text{font-weight: 400;line-height: 1;letter-spacing: 0;margin-bottom: 15px;text-decoration: none;}',
			),
			'tablet'  => array(
				' .responsive-block-editor-addons-block-advanced-heading{text-align: center;}',
				' .responsive-heading-title-text{margin-bottom: 15px;}',
				' .responsive-heading-seperator{margin-bottom: 15px;}',
				' .responsive-heading-desc-text{margin-bottom: 15px;}',
			),
			'mobile'  => array(
				' .responsive-block-editor-addons-block-advanced-heading{text-align: center;}',
				' .responsive-heading-title-text{margin-bottom: 15px;}',
				' .responsive-heading-seperator{margin-bottom: 15px;}',
				' .responsive-heading-desc-text{margin-bottom: 15px;}',
			),
		);
	}
}
