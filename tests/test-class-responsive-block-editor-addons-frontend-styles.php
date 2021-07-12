<?php
/**
 * RBEA Styles test file
 *
 * @package category
 */

/**
 * Require frontend styles helper class
 */
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'classes/class-responsive-block-editor-addons-frontend-styles.php';

/**
 * Frontend styles test class
 */
class Responsive_Block_Editor_Addons_Frontend_Styles_Test extends WP_UnitTestCase {
	/**
	 * The Responsive_Block_Editor_Addons_Front_Styles_Helper class instance .
	 *
	 * @access public
	 * @var    string    $rbea_frontend_styles class instance.
	 */
	public static $rbea_frontend_styles;

	/**
	 * Setup class instance
	 *
	 * @param class WP_UnitTest_Factory $factory class instance.
	 */
	public static function wpSetUpBeforeClass( WP_UnitTest_Factory $factory ) {
		self::$rbea_frontend_styles = new Responsive_Block_Editor_Addons_Frontend_Styles();
	}

	/**
	 * Test for Responsive_Block_Editor_Addons_Frontend_Styles_Helper class constructor
	 */
	public function test_responsive_block_editor_addons_frontend_styles_constructor() {
		self::$rbea_frontend_styles = new Responsive_Block_Editor_Addons_Frontend_Styles();
		$this->assertTrue( self::$rbea_frontend_styles instanceof Responsive_Block_Editor_Addons_Frontend_Styles );
	}

	/**
	 * Test get_css_value function
	 */
	public function test_get_css_value() {
		$value = self::$rbea_frontend_styles->get_css_value( '' );
		$this->assertEquals( '', '' );
		$value = self::$rbea_frontend_styles->get_css_value( 0 );
		$this->assertEquals( 0, $value );
		$value = self::$rbea_frontend_styles->get_css_value( 0, 'px' );
		$this->assertEquals( 0, $value );
		$value = self::$rbea_frontend_styles->get_css_value( 10, 'px' );
		$this->assertEquals( '10px', $value );
	}

	/**
	 * Test generate background effect
	 */
	public function test_generate_background_image_effect() {
		$gradient = self::$rbea_frontend_styles->generate_background_image_effect( 'rgb(16, 101, 156, 0.2)', 'rgb(51, 51, 51, 0.2)', 50, 60, 90 );
		$this->assertEquals( 'linear-gradient(50deg, rgb(16, 101, 156, 0.2) 60%,rgb(51, 51, 51, 0.2) 90%)', $gradient );
	}

	/**
	 * Test for hex to rgba
	 */
	public function test_hex_to_rgb() {
		$rgb            = self::$rbea_frontend_styles->hex_to_rgb( '#123456' );
		$expected_value = 'rgba(' . hexdec( '12' ) . ', ' . hexdec( '34' ) . ', ' . hexdec( '56' ) . ', 0.0)';
		$this->assertEquals( $expected_value, $rgb );
		$rgb            = self::$rbea_frontend_styles->hex_to_rgb( '#12abff', false );
		$expected_value = 'rgba(' . hexdec( '12' ) . ', ' . hexdec( 'ab' ) . ', ' . hexdec( 'ff' ) . ', 0.0)';
		$this->assertEquals( $expected_value, $rgb );
		$rgb            = self::$rbea_frontend_styles->hex_to_rgb( '#ab4653', 0.7 );
		$expected_value = 'rgba(' . hexdec( 'ab' ) . ', ' . hexdec( '46' ) . ', ' . hexdec( '53' ) . ', 0.7)';
		$this->assertEquals( $expected_value, $rgb );
	}

	/**
	 * Test for Responsive_Block_Editor_Addons_Frontend_Styles helper functions
	 */
	public function test_responsive_block_editor_addons_frontend_styles_helpers() {
		$this->assertTrue( method_exists( 'Responsive_Block_Editor_Addons_Frontend_Styles', 'hex_to_rgb' ) );
		$this->assertTrue( method_exists( 'Responsive_Block_Editor_Addons_Frontend_Styles', 'get_css_value' ) );
		$this->assertTrue( method_exists( 'Responsive_Block_Editor_Addons_Frontend_Styles', 'generate_background_image_effect' ) );
	}

	/**
	 * Test the values for default attributes for call to action block
	 */
	public function test_responsive_block_advanced_heading_default_attributes() {
		$expected_values = array(
			'block_id'                      => '',
			'headingTitle'                  => '',
			'headingDesc'                   => '',
			'seperatorStyle'                => 'solid',
			'separatorWidthType'            => '%',
			'separatorColor'                => '',
			'headingTitleColor'             => '',
			'subHeadingTitleColor'          => '',
			'headingTitleFontFamily'        => '',
			'subHeadingTitleFontFamily'     => '',
			'headingTitleFontSize'          => '',
			'subHeadingTitleFontSize'       => '',
			'headingTitleFontSizeTablet'    => '',
			'subHeadingTitleFontSizeTablet' => '',
			'headingTitleFontSizeMobile'    => '',
			'subHeadingTitleFontSizeMobile' => '',
			'headingTitleFontWeight'        => '600',
			'subHeadingTitleFontWeight'     => '400',
			'headingTag'                    => 'h2',
			'headingAlignment'              => 'center',
			'headingAlignmentTablet'        => 'center',
			'headingAlignmentMobile'        => 'center',
			'showHeading'                   => true,
			'showSubHeading'                => true,
			'showSeparator'                 => true,
			'separatorHeight'               => 3,
			'separatorWidth'                => 20,
			'headSpacing'                   => 15,
			'subheadSpacing'                => 15,
			'separatorSpacing'              => 15,
			'headSpacingTablet'             => 15,
			'subheadSpacingTablet'          => 15,
			'separatorSpacingTablet'        => 15,
			'headSpacingMobile'             => 15,
			'subheadSpacingMobile'          => 15,
			'separatorSpacingMobile'        => 15,
			'headingTitleLineHeight'        => 1,
			'subHeadingTitleLineHeight'     => 1,
			'headingTitleLetterSpacing'     => 0,
			'subHeadingTitleLetterSpacing'  => 0,
			'level'                         => 2,
			'textDecoration'                => 'none',
			'textDecorationSubHeading'      => 'none',
		);
		$values          = self::$rbea_frontend_styles->get_responsive_block_advanced_heading_default_attributes();
		$this->assertEmpty( array_diff_assoc( $expected_values, $values ) );
	}

	/**
	 * Test the values for default attributes for expand block
	 */
	public function test_responsive_block_expand_default_attributes() {
		$expected_values = array(
			'block_id'        => '',
			'blockTitle'      => 'Title for this block',
			'expandLessText'  => 'Some short text that can be expanded to show more details.',
			'expandMoreText'  => 'Some short text that can be expanded to show more details. Description for this block. Use this space for describing your block. Any text will do. Description for this block. You can use this space for describing your block.',
			'moreLabel'       => 'Show more',
			'lessLabel'       => 'Show less',
			'showTitle'       => true,
			'expandAlignment' => '',
			'textColor'       => '',
			'linkColor'       => '',
			'titleColor'      => '',
			'titleSpace'      => 28,
			'textSpace'       => 20,
			'linkSpace'       => 18,
			'titleFontFamily' => '',
			'textFontFamily'  => '',
			'linkFontFamily'  => '',
			'titleFontSize'   => 20,
			'titleFontWeight' => 400,
			'titleLineHeight' => 1,
			'textFontSize'    => 16,
			'textFontWeight'  => 400,
			'textLineHeight'  => 2,
			'linkFontSize'    => 16,
			'linkFontWeight'  => 400,
			'linkLineHeight'  => 1,
		);
		$values          = self::$rbea_frontend_styles->get_responsive_block_expand_default_attributes();
		$this->assertEmpty( array_diff_assoc( $expected_values, $values ) );
	}
}
