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
	protected static $post_grid_block_id;

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
	 * Dummy block ID
	 *
	 * @var int
	 */
	protected static $advanced_columns_block_id;

	/**
	 * Dummy block ID
	 *
	 * @var int
	 */
	protected static $advanced_columns_child_block_id;

	/**
	 * Dummy block ID
	 *
	 * @var int
	 */
	protected static $icons_list_block_id;

	/**
	 * Dummy block ID
	 *
	 * @var int
	 */
	protected static $icons_list_child_block_id;

	/**
	 * Dummy block ID
	 *
	 * @var int
	 */
	protected static $buttons_block_id;

	/**
	 * Dummy block ID
	 *
	 * @var int
	 */
	protected static $buttons_child_block_id_one;

	/**
	 * Dummy block ID
	 *
	 * @var int
	 */
	protected static $buttons_child_block_id_two;

	/**
	 * Dummy block ID
	 *
	 * @var int
	 */
	protected static $accordion_block_id;

	/**
	 * Dummy block ID
	 *
	 * @var int
	 */
	protected static $accordion_child_block_id_one;

	/**
	 * Dummy block ID
	 *
	 * @var int
	 */
	protected static $accordion_child_block_id_two;

	/**
	 * Dummy block ID
	 *
	 * @var int
	 */
	protected static $core_block_id;

	/**
	 * Dummy block ID
	 *
	 * @var int
	 */
	protected static $call_mail_button_block_id;

	/**
	 * Dummy block ID
	 *
	 * @var int
	 */
	protected static $wp_search_block_id;

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

		self::$post_grid_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/responsive-block-editor-addons-post-grid --><!-- /wp:responsive-block-editor-addons/responsive-block-editor-addons-post-grid -->',
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

		self::$advanced_columns_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/advance-columns --><!-- /wp:responsive-block-editor-addons/advance-columns-->',
			)
		);

		self::$advanced_columns_child_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/column --><!-- /wp:responsive-block-editor-addons/columns-->',
			)
		);

		self::$icons_list_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/icons-list --><!-- /wp:responsive-block-editor-addons/icons-list-->',
			)
		);

		self::$icons_list_child_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/icons-list-child --><!-- /wp:responsive-block-editor-addons/icons-list-child-->',
			)
		);

		self::$buttons_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/buttons --><!-- /wp:responsive-block-editor-addons/buttons-->',
			)
		);

		self::$buttons_child_block_id_one = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/buttons-child --><!-- /wp:responsive-block-editor-addons/buttons-child-->',
			)
		);

		self::$buttons_child_block_id_two = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/buttons-child --><!-- /wp:responsive-block-editor-addons/buttons-child-->',
			)
		);

		self::$accordion_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/accordion --><!-- /wp:responsive-block-editor-addons/accordion-->',
			)
		);

		self::$accordion_child_block_id_one = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/accordion-item --><!-- /wp:responsive-block-editor-addons/accordion-item-->',
			)
		);

		self::$accordion_child_block_id_two = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/accordion-item --><!-- /wp:responsive-block-editor-addons/accordion-item-->',
			)
		);

		self::$core_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:core/block --><!-- wp:core/block-->',
			)
		);

		self::$call_mail_button_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/call-mail-button --><!-- wp:responsive-block-editor-addons/call-mail-button>',
			)
		);

		self::$wp_search_block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/wp-search --><!-- wp:responsive-block-editor-addons/wp-search>',
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

						$reusable_blocks = self::$rbea_frontend_styles_helper->parse( $content );

						$css = self::$rbea_frontend_styles_helper->get_styles( $reusable_blocks );

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

						$reusable_blocks = self::$rbea_frontend_styles_helper->parse( $content );

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
				'block_id'                 => 'c1e0fb9b-41dd-497c-93f5-391359ea96d2',
				'backgroundType'           => 'solid',
				'iconBackgroundColor'      => '#aabbcc',
				'iconBackgroundHoverColor' => '#12dd3a',
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
	 * Test for get_css_block for pricing_list - right align
	 */
	public function test_get_block_css_pricing_list_right_align() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_pricing_list_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/pricing-list',
			'attrs'        => array_merge(
				$attributes,
				array(
					'block_id'     => self::$pricing_list_block_id,
					'contentAlign' => 'right',
				)
			),
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
	 * Test for get_css_block for pricing_table - left blockAlign
	 */
	public function test_get_block_css_pricing_table_left_blockAlign() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_pricing_table_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/pricing-table',
			'attrs'        => array_merge(
				$attributes,
				array(
					'block_id'   => self::$pricing_table_block_id,
					'blockAlign' => 'left',
				)
			),
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
	 * Test for get_css_block for pricing_table - right blockAlign
	 */
	public function test_get_block_css_pricing_table_right_blockAlign() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_pricing_table_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/pricing-table',
			'attrs'        => array_merge(
				$attributes,
				array(
					'block_id'   => self::$pricing_table_block_id,
					'blockAlign' => 'right',
				)
			),
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
	 * Test for get_block_css for post_carousel - gradient background
	 */
	public function test_get_block_css_post_carousel_gradient_background() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_post_carousel_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/post-carousel',
			'attrs'        => array_merge(
				$attributes,
				array(
					'block_id'                => self::$post_carousel_block_id,
					'buttonGradientDirection' => 60,
					'buttonBackgroundColor1'  => '#222abc',
					'buttonBackgroundColor2'  => '#111fed',
					'buttonColorLocation1'    => '30',
					'buttonColorLocation2'    => '44',
				)
			),
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
	 * Test for get_block_css for post_grid
	 */
	public function test_get_block_css_post_grid() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_post_grid_block_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/responsive-block-editor-addons-post-grid',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$post_grid_block_id ) ),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_post_grid_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_block_css for advanced columns
	 */
	public function test_get_block_css_advanced_columns() {
		$child_attributes = self::$rbea_frontend_styles->get_responsive_block_advanced_column_child_block_default_attributes();
		$attributes       = self::$rbea_frontend_styles->get_responsive_block_advanced_columns_default_attributes();
		$child_block      = array(
			'blockName'    => 'responsive-block-editor-addons/column',
			'attrs'        => array_merge( $child_attributes, array( 'block_id' => self::$advanced_columns_child_block_id ) ),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block            = array(
			'blockName'    => 'responsive-block-editor-addons/advance-columns',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$advanced_columns_block_id ) ),
			'innerBlocks'  => array(
				$child_block,
			),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs      = self::extract_attributes( $block );
		$css              = self::$rbea_frontend_styles->get_responsive_block_advanced_columns_css( $block_attrs[0], $block_attrs[1] );
		$expected         = self::return_the_css( $block, $css );
		$result           = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_block_css for advanced columns - height half
	 */
	public function test_get_block_css_advanced_columns_height_half() {
		$child_attributes = self::$rbea_frontend_styles->get_responsive_block_advanced_column_child_block_default_attributes();
		$attributes       = self::$rbea_frontend_styles->get_responsive_block_advanced_columns_default_attributes();
		$child_block      = array(
			'blockName'    => 'responsive-block-editor-addons/column',
			'attrs'        => array_merge( $child_attributes, array( 'block_id' => self::$advanced_columns_child_block_id ) ),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block            = array(
			'blockName'    => 'responsive-block-editor-addons/advance-columns',
			'attrs'        => array_merge(
				$attributes,
				array(
					'block_id' => self::$advanced_columns_block_id,
					'height'   => 'half',
				)
			),
			'innerBlocks'  => array(
				$child_block,
			),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs      = self::extract_attributes( $block );
		$css              = self::$rbea_frontend_styles->get_responsive_block_advanced_columns_css( $block_attrs[0], $block_attrs[1] );
		$expected         = self::return_the_css( $block, $css );
		$result           = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_block_css for advanced columns - height full
	 */
	public function test_get_block_css_advanced_columns_height_full() {
		$child_attributes = self::$rbea_frontend_styles->get_responsive_block_advanced_column_child_block_default_attributes();
		$attributes       = self::$rbea_frontend_styles->get_responsive_block_advanced_columns_default_attributes();
		$child_block      = array(
			'blockName'    => 'responsive-block-editor-addons/column',
			'attrs'        => array_merge(
				$child_attributes,
				array(
					'block_id' => self::$advanced_columns_child_block_id,
				)
			),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block            = array(
			'blockName'    => 'responsive-block-editor-addons/advance-columns',
			'attrs'        => array_merge(
				$attributes,
				array(
					'block_id' => self::$advanced_columns_block_id,
					'height'   => 'full',
				)
			),
			'innerBlocks'  => array(
				$child_block,
			),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs      = self::extract_attributes( $block );
		$css              = self::$rbea_frontend_styles->get_responsive_block_advanced_columns_css( $block_attrs[0], $block_attrs[1] );
		$expected         = self::return_the_css( $block, $css );
		$result           = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_block_css for advanced columns - height custom and width custom
	 */
	public function test_get_block_css_advanced_columns_height_width_custom() {
		$child_attributes = self::$rbea_frontend_styles->get_responsive_block_advanced_column_child_block_default_attributes();
		$attributes       = self::$rbea_frontend_styles->get_responsive_block_advanced_columns_default_attributes();
		$child_block      = array(
			'blockName'    => 'responsive-block-editor-addons/column',
			'attrs'        => array_merge(
				$child_attributes,
				array(
					'block_id' => self::$advanced_columns_child_block_id,
				)
			),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block            = array(
			'blockName'    => 'responsive-block-editor-addons/advance-columns',
			'attrs'        => array_merge(
				$attributes,
				array(
					'block_id'     => self::$advanced_columns_block_id,
					'height'       => 'custom',
					'customHeight' => 50,
					'contentWidth' => 'custom',
					'width'        => 50,
					'widthType'    => 'px',
				)
			),
			'innerBlocks'  => array(
				$child_block,
			),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs      = self::extract_attributes( $block );
		$css              = self::$rbea_frontend_styles->get_responsive_block_advanced_columns_css( $block_attrs[0], $block_attrs[1] );
		$expected         = self::return_the_css( $block, $css );
		$result           = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_block_css for advanced columns - background image
	 */
	public function test_get_block_css_advanced_columns_background_image() {
		$child_attributes = self::$rbea_frontend_styles->get_responsive_block_advanced_column_child_block_default_attributes();
		$attributes       = self::$rbea_frontend_styles->get_responsive_block_advanced_columns_default_attributes();
		$child_block      = array(
			'blockName'    => 'responsive-block-editor-addons/column',
			'attrs'        => array_merge( $child_attributes, array( 'block_id' => self::$advanced_columns_child_block_id ) ),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block            = array(
			'blockName'    => 'responsive-block-editor-addons/advance-columns',
			'attrs'        => array_merge(
				$attributes,
				array(
					'block_id'                => self::$advanced_columns_block_id,
					'backgroundType'          => 'image',
					'backgroundImage'         => 'some_url',
					'backgroundAttachment'    => 'scroll',
					'backgroundImageRepeat'   => 'no-repeat',
					'backgroundImagePosition' => 'center center',
					'backgroundImageSize'     => 'cover',
					'opacity'                 => 8,
					'backgroundImageColor'    => '#222abc',
				)
			),
			'innerBlocks'  => array(
				$child_block,
			),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs      = self::extract_attributes( $block );
		$css              = self::$rbea_frontend_styles->get_responsive_block_advanced_columns_css( $block_attrs[0], $block_attrs[1] );
		$expected         = self::return_the_css( $block, $css );
		$result           = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_block_css for advanced columns - background gradient
	 */
	public function test_get_block_css_advanced_columns_background_gradient() {
		$child_attributes = self::$rbea_frontend_styles->get_responsive_block_advanced_column_child_block_default_attributes();
		$attributes       = self::$rbea_frontend_styles->get_responsive_block_advanced_columns_default_attributes();
		$child_block      = array(
			'blockName'    => 'responsive-block-editor-addons/column',
			'attrs'        => array_merge( $child_attributes, array( 'block_id' => self::$advanced_columns_child_block_id ) ),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block            = array(
			'blockName'    => 'responsive-block-editor-addons/advance-columns',
			'attrs'        => array_merge(
				$attributes,
				array(
					'block_id'          => self::$advanced_columns_block_id,
					'backgroundColor1'  => 'rgb(16, 101, 156, 0.2)',
					'backgroundColor2'  => 'rgb(51, 51, 51, 0.2)',
					'gradientDirection' => 60,
					'colorLocation1'    => 20,
					'colorLocation2'    => 40,
					'opacity'           => 7,
				)
			),
			'innerBlocks'  => array(
				$child_block,
			),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs      = self::extract_attributes( $block );
		$css              = self::$rbea_frontend_styles->get_responsive_block_advanced_columns_css( $block_attrs[0], $block_attrs[1] );
		$expected         = self::return_the_css( $block, $css );
		$result           = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_block_css for icons list
	 */
	public function test_get_block_css_icons_list() {
		$child_attributes = self::$rbea_frontend_styles->get_responsive_block_icon_list_child_block_default_attributes();
		$attributes       = self::$rbea_frontend_styles->get_responsive_block_icon_list_block_default_attributes();
		$child_block      = array(
			'blockName'    => 'responsive-block-editor-addons/icons-list-child',
			'attrs'        => array_merge( $child_attributes, array( 'block_id' => self::$icons_list_child_block_id ) ),
			'innerBlocks'  => array(),
			'innerHTML'    => '
			<div class="wp-block-responsive-block-editor-addons-icons-list-child responsive-block-editor-addons-icon-list-repeater responsive-block-editor-addons-icon-list__wrapper responsive-block-editor-addons-' . self::$icons_list_child_block_id . '"><div class="responsive-block-editor-addons-icon-' . self::$icons_list_child_block_id . ' responsive-block-editor-addons-icon-list__content-wrap"><span class="responsive-block-editor-addons-icon-list__source-wrap"><span class="responsive-block-editor-addons-icon-list__source-icon"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512"><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path></svg></span></span><div class="responsive-block-editor-addons-icon-list__label-wrap"><div class="responsive-block-editor-addons-icon-list__label">#Label</div></div></div></div>',
			'innerContent' => array(
				'<div class="wp-block-responsive-block-editor-addons-icons-list-child responsive-block-editor-addons-icon-list-repeater responsive-block-editor-addons-icon-list__wrapper responsive-block-editor-addons-' . self::$icons_list_child_block_id . '"><div class="responsive-block-editor-addons-icon-' . self::$icons_list_child_block_id . ' responsive-block-editor-addons-icon-list__content-wrap"><span class="responsive-block-editor-addons-icon-list__source-wrap"><span class="responsive-block-editor-addons-icon-list__source-icon"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512"><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path></svg></span></span><div class="responsive-block-editor-addons-icon-list__label-wrap"><div class="responsive-block-editor-addons-icon-list__label">#Label</div></div></div></div>',
			),
		);
		$block            = array(
			'blockName'    => 'responsive-block-editor-addons/icons-list',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$icons_list_block_id ) ),
			'innerBlocks'  => array(
				$child_block,
			),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs      = self::extract_attributes( $block );
		$css              = self::$rbea_frontend_styles->get_responsive_block_icon_list_css( $block_attrs[0], $block_attrs[1] );
		$expected         = self::return_the_css( $block, $css );
		$result           = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_block_css for icons list - right align
	 */
	public function test_get_block_css_icons_list_right_align() {
		$child_attributes = self::$rbea_frontend_styles->get_responsive_block_icon_list_child_block_default_attributes();
		$attributes       = self::$rbea_frontend_styles->get_responsive_block_icon_list_block_default_attributes();
		$child_block      = array(
			'blockName'    => 'responsive-block-editor-addons/icons-list-child',
			'attrs'        => array_merge(
				$child_attributes,
				array(
					'block_id' => self::$icons_list_child_block_id,
				)
			),
			'innerBlocks'  => array(),
			'innerHTML'    => '
			<div class="wp-block-responsive-block-editor-addons-icons-list-child responsive-block-editor-addons-icon-list-repeater responsive-block-editor-addons-icon-list__wrapper responsive-block-editor-addons-' . self::$icons_list_child_block_id . '"><div class="responsive-block-editor-addons-icon-' . self::$icons_list_child_block_id . ' responsive-block-editor-addons-icon-list__content-wrap"><span class="responsive-block-editor-addons-icon-list__source-wrap"><span class="responsive-block-editor-addons-icon-list__source-icon"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512"><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path></svg></span></span><div class="responsive-block-editor-addons-icon-list__label-wrap"><div class="responsive-block-editor-addons-icon-list__label">#Label</div></div></div></div>',
			'innerContent' => array(
				'<div class="wp-block-responsive-block-editor-addons-icons-list-child responsive-block-editor-addons-icon-list-repeater responsive-block-editor-addons-icon-list__wrapper responsive-block-editor-addons-' . self::$icons_list_child_block_id . '"><div class="responsive-block-editor-addons-icon-' . self::$icons_list_child_block_id . ' responsive-block-editor-addons-icon-list__content-wrap"><span class="responsive-block-editor-addons-icon-list__source-wrap"><span class="responsive-block-editor-addons-icon-list__source-icon"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512"><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path></svg></span></span><div class="responsive-block-editor-addons-icon-list__label-wrap"><div class="responsive-block-editor-addons-icon-list__label">#Label</div></div></div></div>',
			),
		);
		$block            = array(
			'blockName'    => 'responsive-block-editor-addons/icons-list',
			'attrs'        => array_merge(
				$attributes,
				array(
					'block_id' => self::$icons_list_block_id,
					'align'    => 'right',
				)
			),
			'innerBlocks'  => array(
				$child_block,
			),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs      = self::extract_attributes( $block );
		$css              = self::$rbea_frontend_styles->get_responsive_block_icon_list_css( $block_attrs[0], $block_attrs[1] );
		$expected         = self::return_the_css( $block, $css );
		$result           = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_block_css for buttons
	 */
	public function test_get_block_css_buttons() {
		$child_attributes = self::$rbea_frontend_styles->get_responsive_block_buttons_child_default_attributes();
		$attributes       = self::$rbea_frontend_styles->get_responsive_block_buttons_default_attributes();
		$child_block_one  = array(
			'blockName'    => 'responsive-block-editor-addons/buttons-child',
			'attrs'        => array_merge( $child_attributes, array( 'block_id' => self::$buttons_child_block_id_one ) ),
			'innerBlocks'  => array(),
			'innerHTML'    => '<div class="wp-block-responsive-block-editor-addons-buttons-child responsive-block-editor-addons-undefined responsive-block-editor-addons-buttons-child block-' . self::$buttons_child_block_id_one . ' responsive-block-editor-addons-block-button responsive-block-editor-addons-buttons__outer-wrap"><div class="responsive-block-editor-addons-1 responsive-block-editor-addons-button__wrapper responsive-block-editor-addons-button__effect-undefined"><div class="responsive-block-editor-addons-buttons-repeater responsive-block-editor-addons-button__wrapper"><a class="responsive-block-editor-addons-button__link_child not-inherited-from-theme" href="#" rel="noopener noreferrer" target="_blank">#Click Here</a></div></div></div>',
			'innerContent' => array(
				'<div class="wp-block-responsive-block-editor-addons-buttons-child responsive-block-editor-addons-undefined responsive-block-editor-addons-buttons-child block-' . self::$buttons_child_block_id_one . ' responsive-block-editor-addons-block-button responsive-block-editor-addons-buttons__outer-wrap"><div class="responsive-block-editor-addons-1 responsive-block-editor-addons-button__wrapper responsive-block-editor-addons-button__effect-undefined"><div class="responsive-block-editor-addons-buttons-repeater responsive-block-editor-addons-button__wrapper"><a class="responsive-block-editor-addons-button__link_child not-inherited-from-theme" href="#" rel="noopener noreferrer" target="_blank">#Click Here</a></div></div></div>',
			),
		);
		$child_block_two  = array(
			'blockName'    => 'responsive-block-editor-addons/buttons-child',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$buttons_child_block_id_two ) ),
			'innerBlocks'  => array(),
			'innerHTML'    => '<div class="wp-block-responsive-block-editor-addons-buttons-child responsive-block-editor-addons-undefined responsive-block-editor-addons-buttons-child block-' . self::$buttons_child_block_id_two . ' responsive-block-editor-addons-block-button responsive-block-editor-addons-buttons__outer-wrap"><div class="responsive-block-editor-addons-1 responsive-block-editor-addons-button__wrapper responsive-block-editor-addons-button__effect-undefined"><div class="responsive-block-editor-addons-buttons-repeater responsive-block-editor-addons-button__wrapper"><a class="responsive-block-editor-addons-button__link_child not-inherited-from-theme" href="#" rel="noopener noreferrer" target="_blank">#Click Here</a></div></div></div>',
			'innerContent' => array(
				'<div class="wp-block-responsive-block-editor-addons-buttons-child responsive-block-editor-addons-undefined responsive-block-editor-addons-buttons-child block-' . self::$buttons_child_block_id_two . ' responsive-block-editor-addons-block-button responsive-block-editor-addons-buttons__outer-wrap"><div class="responsive-block-editor-addons-1 responsive-block-editor-addons-button__wrapper responsive-block-editor-addons-button__effect-undefined"><div class="responsive-block-editor-addons-buttons-repeater responsive-block-editor-addons-button__wrapper"><a class="responsive-block-editor-addons-button__link_child not-inherited-from-theme" href="#" rel="noopener noreferrer" target="_blank">#Click Here</a></div></div></div>',
			),
		);
		$block            = array(
			'blockName'    => 'responsive-block-editor-addons/buttons',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$buttons_block_id ) ),
			'innerBlocks'  => array(
				$child_block_one,
				$child_block_two,
			),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs      = self::extract_attributes( $block );
		$css              = self::$rbea_frontend_styles->get_responsive_block_buttons_css( $block_attrs[0], $block_attrs[1] );
		$expected         = self::return_the_css( $block, $css );
		$result           = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_block_css for accordion
	 */
	public function test_get_block_css_accordion() {
		$child_attributes = self::$rbea_frontend_styles->get_responsive_block_accordian_child_block_default_attributes();
		$attributes       = self::$rbea_frontend_styles->get_responsive_block_accordian_block_default_attributes();
		$schema           = '{"@context":"https://schema.org","@type":"AccordionPage","mainEntity":[{"@type":"Title","name":"What is Accordion?","acceptedContent":{"@type":"Content","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},{"@type":"Title","name":"What is Accordion?","acceptedContent":{"@type":"Content","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}}]}';
		$child_block_one  = array(
			'blockName'    => 'responsive-block-editor-addons/accordion-item',
			'attrs'        => array_merge( $child_attributes, array( 'block_id' => self::$accordion_child_block_id_one ) ),
			'innerBlocks'  => array(),
			'innerHTML'    => '<div class="wp-block-responsive-block-editor-addons-accordion-item responsive-block-editor-addons-accordion-item__outer-wrap responsive-block-editor-addons-block-' . self::$accordion_child_block_id_one . '"><div class="responsive-block-editor-addons-accordion-item__wrapper"><div class="responsive-block-editor-addons-accordion-item" role="tab"><div class="responsive-block-editor-addons-accordion-titles-button responsive-block-editor-addons-accordion-titles"><span class="responsive-block-editor-addons-icon responsive-block-editor-addons-accordion-icon-wrap"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 448 512"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg></span><span class="responsive-block-editor-addons-icon-active responsive-block-editor-addons-accordion-icon-wrap"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg></span><span class="responsive-block-editor-addons-title">What is Accordion?</span></div><div class="responsive-block-editor-addons-accordion-content"><span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></span></div></div></div></div>',
			'innerContent' => array(
				'<div class="wp-block-responsive-block-editor-addons-accordion-item responsive-block-editor-addons-accordion-item__outer-wrap responsive-block-editor-addons-block-' . self::$accordion_child_block_id_one . '"><div class="responsive-block-editor-addons-accordion-item__wrapper"><div class="responsive-block-editor-addons-accordion-item" role="tab"><div class="responsive-block-editor-addons-accordion-titles-button responsive-block-editor-addons-accordion-titles"><span class="responsive-block-editor-addons-icon responsive-block-editor-addons-accordion-icon-wrap"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 448 512"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg></span><span class="responsive-block-editor-addons-icon-active responsive-block-editor-addons-accordion-icon-wrap"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg></span><span class="responsive-block-editor-addons-title">What is Accordion?</span></div><div class="responsive-block-editor-addons-accordion-content"><span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></span></div></div></div></div>',
			),
		);
		$child_block_two  = array(
			'blockName'    => 'responsive-block-editor-addons/accordion-item',
			'attrs'        => array_merge(
				$attributes,
				array(
					'block_id' => self::$accordion_child_block_id_two,
					'schema'   => $schema,
				)
			),
			'innerBlocks'  => array(),
			'innerHTML'    => '<div class="wp-block-responsive-block-editor-addons-accordion-item responsive-block-editor-addons-accordion-item__outer-wrap responsive-block-editor-addons-block-' . self::$accordion_child_block_id_one . '"><div class="responsive-block-editor-addons-accordion-item__wrapper"><div class="responsive-block-editor-addons-accordion-item" role="tab"><div class="responsive-block-editor-addons-accordion-titles-button responsive-block-editor-addons-accordion-titles"><span class="responsive-block-editor-addons-icon responsive-block-editor-addons-accordion-icon-wrap"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 448 512"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg></span><span class="responsive-block-editor-addons-icon-active responsive-block-editor-addons-accordion-icon-wrap"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg></span><span class="responsive-block-editor-addons-title">What is Accordion?</span></div><div class="responsive-block-editor-addons-accordion-content"><span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></span></div></div></div></div>',
			'innerContent' => array(
				'<div class="wp-block-responsive-block-editor-addons-accordion-item responsive-block-editor-addons-accordion-item__outer-wrap responsive-block-editor-addons-block-' . self::$accordion_child_block_id_one . '"><div class="responsive-block-editor-addons-accordion-item__wrapper"><div class="responsive-block-editor-addons-accordion-item" role="tab"><div class="responsive-block-editor-addons-accordion-titles-button responsive-block-editor-addons-accordion-titles"><span class="responsive-block-editor-addons-icon responsive-block-editor-addons-accordion-icon-wrap"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 448 512"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg></span><span class="responsive-block-editor-addons-icon-active responsive-block-editor-addons-accordion-icon-wrap"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg></span><span class="responsive-block-editor-addons-title">What is Accordion?</span></div><div class="responsive-block-editor-addons-accordion-content"><span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></span></div></div></div></div>',
			),
		);
		$block            = array(
			'blockName'    => 'responsive-block-editor-addons/accordion',
			'attrs'        => array_merge(
				$attributes,
				array(
					'block_id' => self::$accordion_block_id,
					'schema'   => $schema,
				)
			),
			'innerBlocks'  => array(
				$child_block_one,
				$child_block_two,
			),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs      = self::extract_attributes( $block );
		$css              = self::$rbea_frontend_styles->get_responsive_block_accordian_css( $block_attrs[0], $block_attrs[1] );
		$expected         = self::return_the_css( $block, $css );
		$result           = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_block_css call-mail-button block
	 */
	public function test_get_block_css_call_mail_button_block() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_call_mail_button_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/call-mail-button',
			'attrs'        => array_merge(
				$attributes,
				array(
					'block_id' => self::$call_mail_button_block_id,
				)
			),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_call_mail_button_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_block_css wp search block
	 */
	public function test_get_block_wp_search_block() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_wp_search_default_attributes();
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/wp-search',
			'attrs'        => array_merge(
				$attributes,
				array(
					'block_id' => self::$wp_search_block_id,
				)
			),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$block_attrs = self::extract_attributes( $block );
		$css         = self::$rbea_frontend_styles->get_responsive_block_wp_search_css( $block_attrs[0], $block_attrs[1] );
		$expected    = self::return_the_css( $block, $css );
		$result      = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test get_block_css core/block as inner block
	 */
	public function test_get_block_css_inner_core_block() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_section_default_attributes();
		$inner_block = array(
			'blockName'    => 'core/block',
			'attrs'        => array( 'block_id' => self::$core_block_id ),
			'innerBlocks'  => array(),
			'innerHTML'    => '',
			'innerContent' => array(
				'',
			),
		);
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/section',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$section_block_id ) ),
			'innerBlocks'  => array(
				$inner_block,
			),
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
	 * Test get_block_css core/block as inner block - with ref
	 */
	public function test_get_block_css_inner_core_block_with_ref() {
		$attributes  = self::$rbea_frontend_styles->get_responsive_block_section_default_attributes();
		$inner_block = array(
			'blockName'    => 'core/block',
			'attrs'        => array(
				'block_id' => self::$core_block_id,
				'ref'      => 10,
			),
			'innerBlocks'  => array(),
			'innerHTML'    => '',
			'innerContent' => array(
				'',
			),
		);
		$block       = array(
			'blockName'    => 'responsive-block-editor-addons/section',
			'attrs'        => array_merge( $attributes, array( 'block_id' => self::$section_block_id ) ),
			'innerBlocks'  => array(
				$inner_block,
			),
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
	 * Test get_block_css core/block as inner block - default case
	 */
	public function test_get_block_css_default_case() {
		$block  = array(
			'blockName'    => 'responsive-block-editor-addons/sections',
			'attrs'        => array( 'block_id' => 2 ),
			'innerBlocks'  => array(),
			'innerHTML'    => ' ',
			'innerContent' => array(
				' ',
			),
		);
		$result = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertEmpty( $result );
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
	 * Test for get_styles function with empty block name
	 */
	public function test_get_styles_empty_block_name() {
		$attributes = self::$rbea_frontend_styles->get_responsive_block_advanced_heading_default_attributes();
		$blocks     = array(
			array(
				'blockName'    => '',
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
	 * Test for get_styles function for core block
	 */
	public function test_get_styles_core_block() {
		$blocks   = array(
			array(
				'blockName'    => 'core/block',
				'attrs'        => array( 'ref' => 10 ),
				'inner_blocks' => array(),
				'innerHTML'    => 'hello',
				'innerContent' => array(
					array(
						'hello',
					),
				),
			),
		);
		$expected = self::get_styles( $blocks );
		$result   = self::$rbea_frontend_styles_helper->get_styles( $blocks );
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test for get_styles function for core block-no ref
	 */
	public function test_get_styles_core_block_no_ref() {
		$blocks   = array(
			array(
				'blockName'    => 'core/block',
				'attrs'        => array(),
				'inner_blocks' => array(),
				'innerHTML'    => 'hello',
				'innerContent' => array(
					array(
						'hello',
					),
				),
			),
		);
		$expected = self::get_styles( $blocks );
		$result   = self::$rbea_frontend_styles_helper->get_styles( $blocks );
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
	 * Test for get block css function without any name
	 */
	public function test_get_block_css_no_name() {
		$block  = array(
			'blockName'    => null,
			'attrs'        => array(),
			'innerHTML'    => '',
			'innerContent' => '',
		);
		$result = self::$rbea_frontend_styles_helper->get_block_css( $block );
		$this->assertSame( '', $result );
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
