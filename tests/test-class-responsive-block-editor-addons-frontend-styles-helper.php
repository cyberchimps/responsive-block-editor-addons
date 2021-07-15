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
	 * The Responsive_Block_Editor_Addons_Front_Styles class instance .
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
		self::$rbea_frontend_styles_helper = new Responsive_Block_Editor_Addons_Frontend_Styles_Helper();
		self::$rbea_frontend_styles        = new Responsive_Block_Editor_Addons_Frontend_Styles();
	}

	/**
	 * Function to extract attributes
	 *
	 * @param [type] $block The block.
	 * @return [type]
	 */
	public static function extract_attributes( $block ) {
		$block     = (array) $block;
		$name      = $block['blockName'];
		$css       = array();
		$block_id  = '';
		$blockattr = array();
		if ( ! isset( $name ) ) {
			return '';
		}
		if ( isset( $block['attrs'] ) && is_array( $block['attrs'] ) ) {
			$blockattr = $block['attrs'];
			if ( isset( $blockattr['block_id'] ) ) {
				$block_id = $blockattr['block_id'];
			}
		}
		return array( $blockattr, $block_id );
	}

	/**
	 * Function to return css after checking css for inner blocks
	 *
	 * @param [type] $block The block.
	 * @param [type] $css The css.
	 * @return [type]
	 */
	public static function return_the_css( $block, $css ) {
		if ( isset( $block['innerBlocks'] ) ) {
			foreach ( $block['innerBlocks'] as $j => $inner_block ) {
				if ( 'core/block' === $inner_block['blockName'] ) {
					$id = ( isset( $inner_block['attrs']['ref'] ) ) ? $inner_block['attrs']['ref'] : 0;

					if ( $id ) {
						$content = get_post_field( 'post_content', $id );

						$reusable_blocks = $this->parse( $content );

						$css = $this->get_styles( $reusable_blocks );

					}
				} else {
					// Get CSS for the Block.
					$inner_block_css = $this->get_block_css( $inner_block );

					$css_desktop = ( isset( $css['desktop'] ) ? $css['desktop'] : '' );
					$css_tablet  = ( isset( $css['tablet'] ) ? $css['tablet'] : '' );
					$css_mobile  = ( isset( $css['mobile'] ) ? $css['mobile'] : '' );

					if ( isset( $inner_block_css['desktop'] ) ) {
						$css['desktop'] = $css_desktop . $inner_block_css['desktop'];
						$css['tablet']  = $css_tablet . $inner_block_css['tablet'];
						$css['mobile']  = $css_mobile . $inner_block_css['mobile'];
					}
				}
			}
		}
		return $css;
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
	 * Test for get_block_css function for spacer and advanced heading
	 */
	public function test_get_block_css_spacer() {
		// Spacer block.
		$block       = array(
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
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_spacer_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_block_css function for advanced heading
	 */
	public function test_get_block_css_advanced_heading() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/advanced-heading',
			'attrs'        => array(
				'block_id' => 'e065e0e4-4b4a-4fc4-af18-1e8190a36bf3',
			),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_advanced_heading_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_block_css function for divider block
	 */
	public function test_get_block_css_divider() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/divider',
			'attrs'        => array(
				'block_id' => '5c725a73-5157-4397-afcd-e304aa9a44b9',
			),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_divider_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for count up block get_block_css function
	 */
	public function test_get_block_css_count_up() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/count-up',
			'attrs'        => array(
				'block_id' => '8071d4b1-96df-449f-8270-b1462ea36150',
			),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_count_up_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_block_css function - video popup
	 */
	public function test_get_block_css_video_popup() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/video-popup',
			'attrs'        => array(
				'block_id'          => '12a87b95-c43f-4a69-be42-4318c207b8b9 ',
				'boxShadowPosition' => 'inset',
			),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_video_popup_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_block_css - card block
	 */
	public function test_get_block_css_card() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/card',
			'attrs'        => array(
				'block_id'          => 'b589776c-eff7-48d8-a290-ba6e5f99b494',
				'boxShadowPosition' => 'inset',
			),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_card_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_block_css googlemap
	 */
	public function test_get_block_css_googlemap() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/googlemap',
			'attrs'        => array(
				'block_id' => 'b7a70aa6-82f5-413c-bc48-3142749365',
			),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_googlemap_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_block_css function for image_boxes
	 */
	public function test_get_block_css_image_boxes() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/image-boxes-block',
			'attrs'        => array(
				'block_id' => 'cc4351ea-3af6-4d97-92d7-b6f1ac4e5862',
			),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_image_boxes_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_css_block function image_slider
	 */
	public function test_get_block_css_image_slider() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/image-slider',
			'attrs'        => array(
				'block_id' => 'c1e0fb9b-41dd-497c-93f5-391359ea96d2',
			),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_image_slider_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_css_block for info_block
	 */
	public function test_get_css_block_info_block() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/info-block',
			'attrs'        => array(
				'block_id' => 'c1e0fb9b-41dd-497c-93f5-391359ea96d2',
			),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_info_block_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_css_block for blockquote
	 */
	public function test_get_css_block_blockquote() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/blockquote',
			'attrs'        => array(
				'block_id' => 'bf2b07f4-86b1-4bf6-89e5-c669000f5bd8',
			),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_blockquote_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_css_block for call_to_action
	 */
	public function test_get_css_block_call_to_action() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/responsive-block-editor-addons-cta',
			'attrs'        => array(
				'block_id' => '339297a0-9322-498d-9607-94b9d3b4608b',
			),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_call_to_action_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_css_block for team
	 */
	public function test_get_css_block_team() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/team',
			'attrs'        => array(
				'block_id' => '3f908b8b-2cac-4077-8bf4-3eb98f2b35ef',
			),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_team_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_css_block for countdown
	 */
	public function test_get_css_block_countdown() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/count-down',
			'attrs'        => array(
				'block_id' => 'e4c4c84d-8a67-4fec-b9fa-1aaffff1c26c',
			),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_count_down_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_css_block for flipbox
	 */
	public function test_get_css_block_flipbox() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/flipbox',
			'attrs'        => array(
				'block_id' => '5f215a2e-787b-4366-9985-da94d63ab751',
			),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_flipbox_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_css_block for section
	 */
	public function test_get_css_block_section() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/section',
			'attrs'        => array(
				'block_id' => '5f215a2e-787b-4366-9985-da94d63ab751',
			),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_section_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_css_block for shape divider
	 */
	public function test_get_css_block_shape_divider() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/shape-divider',
			'attrs'        => array(
				'block_id' => '3f908b8b-2cac-4077-8bf4-3eb98f2b35ef',
			),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_shape_divider_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}
}
