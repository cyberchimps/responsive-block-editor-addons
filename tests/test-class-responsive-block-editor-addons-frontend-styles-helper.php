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
 * Require frontend styles class
 */
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'classes/class-responsive-block-editor-addons-frontend-styles.php';

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
	 * Dummy custom variable
	 *
	 * @var instance
	 */
	public static $icon_json;

	/**
	 * Created Dummy post id.
	 *
	 * @access public
	 * @var int
	 */
	public static $post_id;

	/**
	 * Dummy user ID.
	 *
	 * @var int
	 */
	protected static $user_id;

	/**
	 * Dummy block ID.
	 *
	 * @var int
	 */
	protected static $expand_block_id;

	/**
	 * Dummy block ID.
	 *
	 * @var int
	 */
	protected static $spacer_block_id;

	/**
	 * Dummy block ID.
	 *
	 * @var int
	 */
	protected static $count_up_block_id;

	/**
	 * Dummy block ID.
	 *
	 * @var int
	 */
	protected static $divider_block_id;

	/**
	 * Dummy block ID.
	 *
	 * @var int
	 */
	protected static $advanced_heading_block_id;

	/**
	 * Dummy block ID.
	 *
	 * @var int
	 */
	protected static $video_popup_block_id;

	/**
	 * Dummy block ID.
	 *
	 * @var int
	 */
	protected static $card_block_id;

	/**
	 * Dummy block ID.
	 *
	 * @var int
	 */
	protected static $googlemap_block_id;

	/**
	 * Dummy block ID.
	 *
	 * @var int
	 */
	protected static $image_slider_block_id;

	/**
	 * Dummy block ID.
	 *
	 * @var int
	 */
	protected static $blockquote_block_id;

	/**
	 * Dummy block ID.
	 *
	 * @var int
	 */
	protected static $team_block_id;

	/**
	 * Dummy block ID.
	 *
	 * @var int
	 */
	protected static $countdown_block_id;

	/**
	 * Dummy block ID.
	 *
	 * @var int
	 */
	protected static $flipbox_block_id;

	/**
	 * Dummy block ID.
	 *
	 * @var int
	 */
	protected static $section_block_id;

	/**
	 * Dummy block ID.
	 *
	 * @var int
	 */
	protected static $shape_divider_block_id;

	/**
	 * Dummy block ID
	 *
	 * @var int
	 */
	protected static $pricing_list_block_id;

	/**
	 * Dummy block ID
	 *
	 * @var int
	 */
	protected static $pricing_table_block_id;

	/**
	 * Dummy block ID
	 *
	 * @var int
	 */
	protected static $gallery_masonry_block_id;

	/**
	 * Dummy block ID
	 *
	 * @var int
	 */
	protected static $post_carousel_block_id;

	/**
	 * Dummy block ID
	 *
	 * @var int
	 */
	protected static $testimonial_block_id;

	/**
	 * Dummy block ID
	 *
	 * @var int
	 */
	protected static $testimonial_slider_block_id;

	/**
	 * Dummy block ID
	 *
	 * @var int
	 */
	protected static $table_of_contents_block_id;

	/**
	 * Dummy block ID
	 *
	 * @var int
	 */
	protected static $post_timeline_block_id;

	/**
	 * Dummy block ID
	 *
	 * @var int
	 */
	protected static $content_timeline_block_id;

	/**
	 * Setup class instance
	 *
	 * @param class WP_UnitTest_Factory $factory class instance.
	 */
	public static function wpSetUpBeforeClass( WP_UnitTest_Factory $factory ) {
		self::$rbea_frontend_styles_helper = new Responsive_Block_Editor_Addons_Frontend_Styles_Helper();
		self::$rbea_frontend_styles        = new Responsive_Block_Editor_Addons_Frontend_Styles();
		self::$user_id                     = $factory->user->create(
			array(
				'role' => 'editor',
			)
		);

		self::$post_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'post',
				'post_status'  => 'publish',
				'post_title'   => 'Test Post',
				'post_content' => '',
			)
		);

		self::$expand_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/expand --><!-- /wp:responsive-block-editor-addons/expand -->',
			)
		);

		self::$spacer_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/spacer --><!-- /wp:responsive-block-editor-addons/spacer -->',
			)
		);

		self::$count_up_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/count-up --><!-- /wp:responsive-block-editor-addons/count-up -->',
			)
		);

		self::$divider_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/divider --><!-- /wp:responsive-block-editor-addons/divider -->',
			)
		);

		self::$advanced_heading_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/advanced-heading --><!-- /wp:responsive-block-editor-addons/advanced-heading -->',
			)
		);

		self::$video_popup_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/video-popup --><!-- /wp:responsive-block-editor-addons/ -->',
			)
		);

		self::$card_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/card --><!-- /wp:responsive-block-editor-addons/card -->',
			)
		);

		self::$googlemap_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/googlemap --><!-- /wp:responsive-block-editor-addons/googlemap -->',
			)
		);

		self::$image_slider_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/image-slider --><!-- /wp:responsive-block-editor-addons/image-slider -->',
			)
		);

		self::$blockquote_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/blockquote --><!-- /wp:responsive-block-editor-addons/blockquote -->',
			)
		);

		self::$team_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/team --><!-- /wp:responsive-block-editor-addons/team -->',
			)
		);

		self::$countdown_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/count-down --><!-- /wp:responsive-block-editor-addons/count-down -->',
			)
		);

		self::$flipbox_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/flipbox --><!-- /wp:responsive-block-editor-addons/flipbox -->',
			)
		);

		self::$shape_divider_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/shape-divider --><!-- /wp:responsive-block-editor-addons/shape-divider -->',
			)
		);

		self::$section_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/section --><!-- /wp:responsive-block-editor-addons/section -->',
			)
		);

		self::$pricing_list_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/pricing-list --><!-- /wp:responsive-block-editor-addons/pricing-list -->',
			)
		);

		self::$pricing_table_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/pricing-table --><!-- /wp:responsive-block-editor-addons/pricing-table -->',
			)
		);

		self::$gallery_masonry_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/gallery-masonry --><!-- /wp:responsive-block-editor-addons/gallery-masonry -->',
			)
		);

		self::$post_carousel_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/post-carousel --><!-- /wp:responsive-block-editor-addons/post-carousel -->',
			)
		);

		self::$testimonial_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/testimonial --><!-- /wp:responsive-block-editor-addons/testimonial -->',
			)
		);

		self::$testimonial_slider_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/testimonial-slider --><!-- /wp:responsive-block-editor-addons/testimonial-slider -->',
			)
		);

		self::$table_of_contents_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/table-of-contents --><!-- /wp:responsive-block-editor-addons/table-of-contents -->',
			)
		);

		self::$post_timeline_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/post-timeline --><!-- /wp:responsive-block-editor-addons/post-timeline-->',
			)
		);

		self::$content_timeline_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/content-timeline --><!-- /wp:responsive-block-editor-addons/content-timeline-->',
			)
		);
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
					$inner_block_css = self::$rbea_frontend_styles_helper->get_block_css( $inner_block );

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
	 * Mock function for backend_load_font_awesome_icons
	 */
	public function backend_load_font_awesome_icons() {
		$json_file = plugin_dir_path( __FILE__ ) . '../src/ResponsiveBlocksIcon.json';
		if ( ! file_exists( $json_file ) ) {
			return array();
		}
		// Function has already run.
		if ( null !== self::$icon_json ) {
			return self::$icon_json;
		}
		$str             = self::$rbea_frontend_styles_helper->get_instance()->get_filesystem()->get_contents( $json_file );
		self::$icon_json = json_decode( $str, true );
		return self::$icon_json;
	}

	/**
	 * Mock function for render_svg_html.
	 *
	 * @param [type] $icon The icons.
	 * @return [type]
	 */
	public static function render_svg_html( $icon ) {
		$icon = str_replace( 'far', '', $icon );
		$icon = str_replace( 'fas', '', $icon );
		$icon = str_replace( 'fab', '', $icon );
		$icon = str_replace( 'fa-', '', $icon );
		$icon = str_replace( 'fa', '', $icon );
		$icon = sanitize_text_field( esc_attr( $icon ) );
		$json = self::$rbea_frontend_styles_helper->backend_load_font_awesome_icons();
		$path = isset( $json[ $icon ]['svg']['brands'] ) ? $json[ $icon ]['svg']['brands']['path'] : $json[ $icon ]['svg']['solid']['path'];
		$view = isset( $json[ $icon ]['svg']['brands'] ) ? $json[ $icon ]['svg']['brands']['viewBox'] : $json[ $icon ]['svg']['solid']['viewBox'];
		if ( $view ) {
			$view = implode( ' ', $view );
		}
		return '<svg xmlns="https://www.w3.org/2000/svg" viewBox="' . esc_html( $view ) . '" ><path d="' . esc_html( $path ) . '"></path></svg>';
	}

	/**
	 * Mock function for get_styles
	 *
	 * @param [type] $blocks array of block.
	 * @return [type]
	 */
	public function get_styles( $blocks ) {
		$desktop         = '';
		$tablet          = '';
		$mobile          = '';
		$tab_styling_css = '';
		$mob_styling_css = '';
		$css             = array();
		foreach ( $blocks as $i => $block ) {

			if ( is_array( $block ) ) {
				if ( '' === $block['blockName'] ) {
					continue;
				}
				if ( 'core/block' === $block['blockName'] ) {
					$id = ( isset( $block['attrs']['ref'] ) ) ? $block['attrs']['ref'] : 0;

					if ( $id ) {
						$content = get_post_field( 'post_content', $id );

						$reusable_blocks = $this->parse( $content );

						$css = self::$rbea_frontend_styles_helper->get_styles( $reusable_blocks );

					}
				} else {

					$css = self::$rbea_frontend_styles_helper->get_block_css( $block );

					// Get CSS for the Block.
					if ( isset( $css['desktop'] ) ) {
						$desktop .= $css['desktop'];
						$tablet  .= $css['tablet'];
						$mobile  .= $css['mobile'];
					}
				}
			}
		}

		if ( ! empty( $tablet ) ) {
			$tab_styling_css .= '@media only screen and (max-width: 976px) {';
			$tab_styling_css .= $tablet;
			$tab_styling_css .= '}';
		}

		if ( ! empty( $mobile ) ) {
			$mob_styling_css .= '@media only screen and (max-width: 767px) {';
			$mob_styling_css .= $mobile;
			$mob_styling_css .= '}';
		}

		$css = $desktop . $tab_styling_css . $mob_styling_css;
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
	 * Test for get_block_css function for spacer
	 */
	public function test_get_block_css_spacer() {
		// Spacer block.
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_spacer_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/spacer',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$spacer_block_id ) ),
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
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_advanced_heading_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/advanced-heading',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$advanced_heading_block_id ) ),
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
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_advanced_heading_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/divider',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$divider_block_id ) ),
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
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_count_up_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/count-up',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$count_up_block_id ) ),
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
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_video_popup_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/video-popup',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$video_popup_block_id ) ),
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
	 * Test for get_block_css function - video popup with image url
	 */
	public function test_get_block_css_video_popup_image_url() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_video_popup_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/video-popup',
			'attrs'        => array_merge(
				$attributes,
				array(
					'block_id' => self::$video_popup_block_id,
					'imgURL'   => 'url-to-image.png',
				)
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
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_card_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/card',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$card_block_id ) ),
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
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_googlemap_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/googlemap',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$googlemap_block_id ) ),
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
	 * Test for get_block_css function for image_boxes background gradient
	 */
	public function test_get_block_css_image_boxes_bg_gradient() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/image-boxes-block',
			'attrs'        => array(
				'block_id'        => 'cc4351ea-3af6-4d97-92d7-b6f1ac4e5862',
				'bgGradient'      => true,
				'hoverBgGradient' => true,
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
	 * Test for get_block_css function for image_boxes with gutter_small
	 */
	public function test_get_block_css_image_boxes_gutter_small() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/image-boxes-block',
			'attrs'        => array(
				'block_id' => 'cc4351ea-3af6-4d97-92d7-b6f1ac4e5862',
				'count'    => 2,
				'gutter'   => 'small',
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
	 * Test for get_block_css function for image_boxes with gutter_medium
	 */
	public function test_get_block_css_image_boxes_gutter_medium() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/image-boxes-block',
			'attrs'        => array(
				'block_id' => 'cc4351ea-3af6-4d97-92d7-b6f1ac4e5862',
				'count'    => 2,
				'gutter'   => 'medium',
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
	 * Test for get_block_css function for image_boxes with gutter_large
	 */
	public function test_get_block_css_image_boxes_gutter_large() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/image-boxes-block',
			'attrs'        => array(
				'block_id' => 'cc4351ea-3af6-4d97-92d7-b6f1ac4e5862',
				'count'    => 2,
				'gutter'   => 'large',
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
	 * Test for get_block_css function for image_boxes with gutter_huge
	 */
	public function test_get_block_css_image_boxes_gutter_huge() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/image-boxes-block',
			'attrs'        => array(
				'block_id' => 'cc4351ea-3af6-4d97-92d7-b6f1ac4e5862',
				'count'    => 2,
				'gutter'   => 'huge',
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
	 * Test for get_block_css function for image_boxes with gutter_none
	 */
	public function test_get_block_css_image_boxes_gutter_none() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/image-boxes-block',
			'attrs'        => array(
				'block_id' => 'cc4351ea-3af6-4d97-92d7-b6f1ac4e5862',
				'count'    => 2,
				'gutter'   => '',
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
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_image_slider_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/image-slider',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$image_slider_block_id ) ),
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
	public function test_get_block_css_info_block() {
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
	 * Test for get_css_block for info_block background Type - solid
	 */
	public function test_get_block_css_info_block_background_type_solid() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/info-block',
			'attrs'        => array(
				'block_id'       => 'c1e0fb9b-41dd-497c-93f5-391359ea96d2',
				'backgroundType' => 'solid',
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
	 * Test for get_css_block for info_block background Type - none
	 */
	public function test_get_block_css_info_block_background_type_none() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/info-block',
			'attrs'        => array(
				'block_id'       => 'c1e0fb9b-41dd-497c-93f5-391359ea96d2',
				'backgroundType' => 'none',
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
	 * Test for get_css_block for info_block background Type - outline
	 */
	public function test_get_block_css_info_block_background_type_outline() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/info-block',
			'attrs'        => array(
				'block_id'       => 'c1e0fb9b-41dd-497c-93f5-391359ea96d2',
				'backgroundType' => 'outline',
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
	public function test_get_block_css_blockquote() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_blockquote_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/blockquote',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$blockquote_block_id ) ),
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
	 * Test for get_css_block for blockquote background type - color
	 */
	public function test_get_block_css_blockquote_background_type_color() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_blockquote_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/blockquote',
			'attrs'        => array_merge(
				$attributes,
				array(
					'block_id'       => self::$blockquote_block_id,
					'backgroundType' => 'color',
				)
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
	 * Test for get_css_block for blockquote background type - gradient
	 */
	public function test_get_block_css_blockquote_background_type_gradient() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_blockquote_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/blockquote',
			'attrs'        => array_merge(
				$attributes,
				array(
					'block_id'       => self::$blockquote_block_id,
					'backgroundType' => 'gradient',
				)
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
	public function test_get_block_css_call_to_action() {
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
	 * Test for get_css_block for call_to_action no background type
	 */
	public function test_get_block_css_call_to_action_background_type_none() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/responsive-block-editor-addons-cta',
			'attrs'        => array(
				'block_id'       => '339297a0-9322-498d-9607-94b9d3b4608b',
				'backgroundType' => '',
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
	 * Test for get_css_block for call_to_action background type - gradient
	 */
	public function test_get_block_css_call_to_action_background_type_gradient() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/responsive-block-editor-addons-cta',
			'attrs'        => array(
				'block_id'       => '339297a0-9322-498d-9607-94b9d3b4608b',
				'backgroundType' => 'gradient',
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
	 * Test for get_css_block for call_to_action button background type - gradient
	 */
	public function test_get_block_css_call_to_action_button_background_type_gradient() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/responsive-block-editor-addons-cta',
			'attrs'        => array(
				'block_id'             => '339297a0-9322-498d-9607-94b9d3b4608b',
				'buttonBackgroundType' => 'gradient',
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
	 * Test for get_css_block for call_to_action icon position - left
	 */
	public function test_get_block_css_call_to_action_icon_position_before() {
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/responsive-block-editor-addons-cta',
			'attrs'        => array(
				'block_id'     => '339297a0-9322-498d-9607-94b9d3b4608b',
				'iconPosition' => 'before',
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
	public function test_get_block_css_team() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_team_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/team',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$team_block_id ) ),
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
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_css_block for countdown
	 */
	public function test_get_block_css_countdown() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_count_down_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/count-down',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$countdown_block_id ) ),
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
	public function test_get_block_css_flipbox() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_flipbox_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/flipbox',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$flipbox_block_id ) ),
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
	public function test_get_block_css_section() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_section_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/section',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$section_block_id ) ),
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
	public function test_get_block_css_shape_divider() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_shape_divider_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/shape-divider',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$shape_divider_block_id ) ),
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

	/**
	 * Test for get_css_block for shape divider background Type-color
	 */
	public function test_get_block_css_shape_divider_background_type_color() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_shape_divider_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/shape-divider',
			'attrs'        => array_merge(
				$attributes,
				array(
					'block_id'       => self::$shape_divider_block_id,
					'backgroundType' => 'color',
				)
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

	/**
	 * Test for get_css_block for shape divider background Type-gradient
	 */
	public function test_get_block_css_shape_divider_background_type_gradient() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_shape_divider_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/shape-divider',
			'attrs'        => array_merge(
				$attributes,
				array(
					'block_id'       => self::$shape_divider_block_id,
					'backgroundType' => 'gradient',
				)
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

	/**
	 * Test for get_css_block for shape divider with basic space divider style
	 */
	public function test_get_block_css_shape_divider_space_divider_basic() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_shape_divider_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/shape-divider',
			'attrs'        => array_merge(
				$attributes,
				array(
					'block_id'           => self::$shape_divider_block_id,
					'spacerDividerStyle' => 'basic',
				)
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

	/**
	 * Test for get_css_block for expand
	 */
	public function test_get_block_css_expand() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_expand_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/expand',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$expand_block_id ) ),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_expand_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_css_block for pricing_list
	 */
	public function test_get_block_css_pricing_list() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_pricing_list_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/pricing-list',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$pricing_list_block_id ) ),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_pricing_list_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_css_block for pricing_table
	 */
	public function test_get_block_css_pricing_table() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_pricing_table_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/pricing-table',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$pricing_table_block_id ) ),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_pricing_table_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_block_css for gallery_masonry
	 */
	public function test_get_block_css_gallery_masonry() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_gallery_masonry_block_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/gallery-masonry',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$gallery_masonry_block_id ) ),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_gallery_masonry_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_block_css for testimonial
	 */
	public function test_get_block_css_testimonial() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_testimonial_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/testimonial',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$testimonial_block_id ) ),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_testimonial_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_block_css for testimonial_slider
	 */
	public function test_get_block_css_testimonial_slider() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_testimonial_slider_block_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/testimonial-slider',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$testimonial_slider_block_id ) ),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_testimonial_slider_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_block_css for post_timeline
	 */
	public function test_get_block_css_post_timeline() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_post_timeline_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/post-timeline',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$post_timeline_block_id ) ),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_post_timeline_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_block_css for content_timeline
	 */
	public function test_get_block_css_content_timeline() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_content_timeline_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/content-timeline',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$content_timeline_block_id ) ),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_content_timeline_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_block_css for table_of_contents
	 */
	public function test_get_block_css_table_of_contents() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_table_of_contents_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/table-of-contents',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$table_of_contents_block_id ) ),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_table_of_contents_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_block_css for post_carousel
	 */
	public function test_get_block_css_post_carousel() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_post_carousel_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/post-carousel',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$post_carousel_block_id ) ),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_post_carousel_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_block_css for icons list with child block
	 */
	public function test_get_block_css_icons_list() {
		$inner_block = array(
			'blockName'    => 'responsive-block-editor-addons/icons-list-child',
			'attrs'        => array(
				'block_id' => '5f215a2e-787b-4366-9985-da94d63ab751',
			),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/icons-list',
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
		$css         = self::$rbea_frontend_styles->get_responsive_block_icon_list_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_block_css for icons list with child block - align right
	 */
	public function test_get_block_css_icons_list_align_right() {
		$inner_block = array(
			'blockName'    => 'responsive-block-editor-addons/icons-list-child',
			'attrs'        => array(
				'block_id' => '5f215a2e-787b-4366-9985-da94d63ab751',
				'align'    => 'right',
			),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/icons-list',
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
		$css         = self::$rbea_frontend_styles->get_responsive_block_icon_list_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_styles function
	 */
	public function test_get_styles() {
		$attributes = self::$rbea_frontend_styles->get_responsive_block_advanced_heading_default_attributes();
		$blocks     = array(
			array(
				'blockName'    => 'responsive-block-editor-addons/advanced-heading',
				'attrs'        => array_merge( $attributes, array( 'block_id' => self::$advanced_heading_block_id ) ),
				'inner_blocks' => array(),
				'innerHTML'    => ' ',
				'innerContent' => array(),
			),
		);
		$expected   = self::get_styles( $blocks );
		$result     = self::$rbea_frontend_styles_helper->get_styles( $blocks );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for parse function
	 */
	public function test_parse() {
		$expected = array(
			array(
				'blockName'    => '',
				'attrs'        => array(),
				'innerBlocks'  => array(),
				'innerHTML'    => 6,
				'innerContent' => array( 6 ),
			),
		);
		$result   = self::$rbea_frontend_styles_helper->parse( self::$post_id );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for backend_load_font_awesome_icons function
	 */
	public function test_backend_load_font_awesome_icons() {
		$expected = self::backend_load_font_awesome_icons();
		$result   = self::$rbea_frontend_styles_helper->backend_load_font_awesome_icons();
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for responsive_block_editor_addons_frontend_styles function
	 */
	public function test_responsive_block_editor_addons_frontend_styles() {
		$expected_string = "<style id='rbea-frontend-styles'></style>";
		$this->expectOutputString( $expected_string );
		self::$rbea_frontend_styles_helper->responsive_block_editor_addons_frontend_styles();
	}

	/**
	 * Test for render_svg_html function
	 */
	public function test_render_svg_html() {
		$expected = self::render_svg_html( 'fa fa-star' );
		$result   = self::$rbea_frontend_styles_helper->render_svg_html( 'fa fa-star' );
		$this->assertEquals( $expected, $result );
	}
}
