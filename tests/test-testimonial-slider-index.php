<?php
/**
 * Testimonial Slider index.php file
 *
 * @package category
 */

/**
 * Require testimonial slider index.php file
 */
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'src/blocks/testimonial-slider/index.php';

/**
 * Accordion frontend assets funciton test
 *
 * @return void
 */
class Testimonial_Slider_Index_Test extends WP_UnitTestCase {
	/**
	 * Created Dummy post id.
	 *
	 * @access public
	 * @var int
	 */
	public static $post_id;

	/**
	 * Dummy block ID.
	 *
	 * @var int
	 */
	protected static $block_id;

	/**
	 * Dummy user ID.
	 *
	 * @var int
	 */
	protected static $user_id;

	/**
	 * Set up function.
	 *
	 * @param class WP_UnitTest_Factory $factory class instance.
	 */
	public static function wpSetUpBeforeClass( WP_UnitTest_Factory $factory ) {
		self::$user_id = $factory->user->create(
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

		self::$block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/testimonial-slider --><!-- /wp:responsive-block-editor-addons/testimonial-slider -->',
			)
		);
	}

	/**
	 * Mock function for returning testimonial js
	 *
	 * @since 1.0.3
	 * @param array  $attr The block attributes.
	 * @param string $id The selector ID.
	 * @return string $js
	 */
	public static function get_responsive_testimonial_js( $attr, $id ) {
		$defaults = get_responsive_testimonial_carousel_default_attributes();

		$attr   = array_merge( $defaults, (array) $attr );
		$dots   = ( 'dots' === $attr['arrowDots'] || 'arrows_dots' === $attr['arrowDots'] ) ? true : false;
		$arrows = ( 'arrows' === $attr['arrowDots'] || 'arrows_dots' === $attr['arrowDots'] ) ? true : false;

		$slick_options = apply_filters(
			'responsive_posts_slick_options',
			array(
				'slidesToShow'   => $attr['columns'],
				'slidesToScroll' => 1,
				'autoplaySpeed'  => $attr['autoplaySpeed'],
				'autoplay'       => $attr['autoplay'],
				'infinite'       => $attr['infiniteLoop'],
				'pauseOnHover'   => $attr['pauseOnHover'],
				'speed'          => $attr['transitionSpeed'],
				'arrows'         => $arrows,
				'dots'           => $dots,
				'rtl'            => false,
				'prevArrow'      => '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" tabindex="0" role="button" style=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" height ="' . $attr['arrowSize'] . '" width = "' . $attr['arrowSize'] . '" fill ="' . $attr['arrowColor'] . '"  ><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg></button>',
				'nextArrow'      => '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" tabindex="0" role="button" style=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" height ="' . $attr['arrowSize'] . '" width = "' . $attr['arrowSize'] . '" fill ="' . $attr['arrowColor'] . '" ><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></button>',
				'responsive'     => array(
					array(
						'breakpoint' => 1024,
						'settings'   => array(
							'slidesToShow'   => $attr['tcolumns'],
							'slidesToScroll' => 1,
						),
					),
					array(
						'breakpoint' => 767,
						'settings'   => array(
							'slidesToShow'   => $attr['mcolumns'],
							'slidesToScroll' => 1,
						),
					),
				),
			)
		);

		$settings = json_encode( $slick_options );
		$selector = '.responsive-testimonial-slick-carousel.responsive-block-editor-addons-block-' . $id;
		$js       = 'jQuery( document ).ready( function( $ ) { if( $( "' . $selector . '" ).length > 0 ){ $( "' . $selector . '" ).not(".slick-initialized").slick( ' . $settings . '); } } );';
		return $js;
	}

	/**
	 * Delete dummy data after tests run.
	 */
	public static function wpTearDownAfterClass() {
		wp_delete_post( self::$post_id, true );
		self::delete_user( self::$user_id );
	}

	/**
	 * Testing if action exists
	 */
	public function test_action_wp_enqueue_scripts_exists() {
		$this->assertGreaterThan( 0, has_action( 'wp_enqueue_scripts', 'responsive_block_editor_addons_testimonial_carousel_add_frontend_assets' ) );
	}

	/**
	 * Testing add action
	 */
	public function test_add_action_wp_enqueue_scripts() {
		$this->assertTrue( add_action( 'wp_enqueue_scripts', 'responsive_block_editor_addons_testimonial_carousel_add_frontend_assets' ) );
	}

	/**
	 * Testing if action exists
	 */
	public function test_action_the_post_exists() {
		$this->assertGreaterThan( 0, has_action( 'the_post', 'responsive_block_editor_addons_testimonial_carousel_add_frontend_assets' ) );
	}

	/**
	 * Testing add action
	 */
	public function test_add_action_the_post() {
		$this->assertTrue( add_action( 'the_post', 'responsive_block_editor_addons_testimonial_carousel_add_frontend_assets' ) );
	}

	/**
	 * Testing if script from index.php is enqueued
	 */
	public function test_responsive_block_editor_addons_testimonial_carousel_add_frontend_assets() {
		$this->assertFalse( wp_script_is( 'test-slick-js' ) );
		$this->assertFalse( wp_script_is( 'test-slick-js-testimonial-carousel' ) );
		responsive_block_editor_addons_testimonial_carousel_add_frontend_assets( get_responsive_testimonial_carousel_default_attributes() );
		$this->assertFalse( has_block( 'responsive-block-editor-addons/testimonial-slider' ) );
		global $post;
		$post = get_post( self::$block_id );
		$this->assertTrue( has_block( 'responsive-block-editor-addons/testimonial-slider' ) );
		responsive_block_editor_addons_testimonial_carousel_add_frontend_assets( get_responsive_testimonial_carousel_default_attributes() );
		$this->assertTrue( wp_script_is( 'test-slick-js' ) );
	}

	/**
	 * Test for responsive parse gutenberg blocks testimonial carousel function
	 */
	public function test_responsive_parse_gutenberg_blocks_testimonial_carousel() {
		$expected = array();
		$result   = responsive_parse_gutenberg_blocks_testimonial_carousel( '' );
		$this->assertSame( $expected, $result );
	}

	/**
	 * Test for get responsive testimonial carousel block js function - no name - should return empty string
	 */
	public function test_get_responsive_testimonial_carousel_block_js_no_name() {
		$block  = array(
			'blockName' => null,
		);
		$result = get_responsive_testimonial_carousel_block_js( $block );
		$this->assertEmpty( $result );
	}

	/**
	 * Test for get responsive testimonial carousel block js function - wrong name - should return null
	 */
	public function test_get_responsive_testimonial_carousel_block_js_wrong_name() {
		global $responsive_post_carousel_js;
		$block  = array(
			'blockName'    => 'responsive-block-editor-addons/testimonial',
			'attrs'        => array(
				'classMigrate' => 1,
				'block_id'     => self::$block_id,
			),
			'innerBlocks'  => array(),
			'innerHTML'    => '<div class="responsive-block-editor-addons-testomonial__outer-wrap responsive-block-editor-addons-slick-carousel responsive-block-editor-addons-tm__arrow-outside responsive-block-editor-addons-block-' . self::$block_id . '"><div class="is-carousel responsive-block-editor-addons-tm__columns-1 responsive-block-editor-addons-tm__items responsive-testimonial-slick-carousel responsive-block-editor-addons-block-' . self::$block_id . '"><div class="responsive-block-editor-addons-testimonial__wrap  responsive-block-editor-addons-tm__imgicon-style-circle responsive-block-editor-addons-tm__image-position-bottom responsive-block-editor-addons-tm__bg-type-undefined "><div class="responsive-block-editor-addons-tm__content skin-type-default center-aligned"><div class="responsive-block-editor-addons-tm__overlay"></div><div class="responsive-block-editor-addons-tm__text-wrap"><div class="responsive-block-editor-addons-testinomial-text-wrap"><div class="responsive-block-editor-addons-tm__desc" style="color:#333;margin-bottom:15px;font-family:Default">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div></div><div class="responsive-block-editor-addons-tm__meta"><div class="responsive-block-editor-addons-tm__meta-inner"><div class="responsive-block-editor-addons-testimonial-details"><span class="responsive-block-editor-addons-tm__author-name" style="color:#333;margin-bottom:5px;font-family:Default">John Doe </span><span class="responsive-block-editor-addons-tm__company" style="color:#888888;font-family:Default">Company1</span></div></div></div></div></div></div><div class="responsive-block-editor-addons-testimonial__wrap  responsive-block-editor-addons-tm__imgicon-style-circle responsive-block-editor-addons-tm__image-position-bottom responsive-block-editor-addons-tm__bg-type-undefined "><div class="responsive-block-editor-addons-tm__content skin-type-default center-aligned"><div class="responsive-block-editor-addons-tm__overlay"></div><div class="responsive-block-editor-addons-tm__text-wrap"><div class="responsive-block-editor-addons-testinomial-text-wrap"><div class="responsive-block-editor-addons-tm__desc" style="color:#333;margin-bottom:15px;font-family:Default">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div></div><div class="responsive-block-editor-addons-tm__meta"><div class="responsive-block-editor-addons-tm__meta-inner"><div class="responsive-block-editor-addons-testimonial-details"><span class="responsive-block-editor-addons-tm__author-name" style="color:#333;margin-bottom:5px;font-family:Default">John Doe </span><span class="responsive-block-editor-addons-tm__company" style="color:#888888;font-family:Default">Company2</span></div></div></div></div></div></div><div class="responsive-block-editor-addons-testimonial__wrap  responsive-block-editor-addons-tm__imgicon-style-circle responsive-block-editor-addons-tm__image-position-bottom responsive-block-editor-addons-tm__bg-type-undefined "><div class="responsive-block-editor-addons-tm__content skin-type-default center-aligned"><div class="responsive-block-editor-addons-tm__overlay"></div><div class="responsive-block-editor-addons-tm__text-wrap"><div class="responsive-block-editor-addons-testinomial-text-wrap"><div class="responsive-block-editor-addons-tm__desc" style="color:#333;margin-bottom:15px;font-family:Default">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div></div><div class="responsive-block-editor-addons-tm__meta"><div class="responsive-block-editor-addons-tm__meta-inner"><div class="responsive-block-editor-addons-testimonial-details"><span class="responsive-block-editor-addons-tm__author-name" style="color:#333;margin-bottom:5px;font-family:Default">John Doe </span><span class="responsive-block-editor-addons-tm__company" style="color:#888888;font-family:Default">Company3</span></div></div></div></div></div></div></div></div>',
			'innerContent' => array(
				'<div class="responsive-block-editor-addons-testomonial__outer-wrap responsive-block-editor-addons-slick-carousel responsive-block-editor-addons-tm__arrow-outside responsive-block-editor-addons-block-' . self::$block_id . '"><div class="is-carousel responsive-block-editor-addons-tm__columns-1 responsive-block-editor-addons-tm__items responsive-testimonial-slick-carousel responsive-block-editor-addons-block-' . self::$block_id . '"><div class="responsive-block-editor-addons-testimonial__wrap  responsive-block-editor-addons-tm__imgicon-style-circle responsive-block-editor-addons-tm__image-position-bottom responsive-block-editor-addons-tm__bg-type-undefined "><div class="responsive-block-editor-addons-tm__content skin-type-default center-aligned"><div class="responsive-block-editor-addons-tm__overlay"></div><div class="responsive-block-editor-addons-tm__text-wrap"><div class="responsive-block-editor-addons-testinomial-text-wrap"><div class="responsive-block-editor-addons-tm__desc" style="color:#333;margin-bottom:15px;font-family:Default">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div></div><div class="responsive-block-editor-addons-tm__meta"><div class="responsive-block-editor-addons-tm__meta-inner"><div class="responsive-block-editor-addons-testimonial-details"><span class="responsive-block-editor-addons-tm__author-name" style="color:#333;margin-bottom:5px;font-family:Default">John Doe </span><span class="responsive-block-editor-addons-tm__company" style="color:#888888;font-family:Default">Company1</span></div></div></div></div></div></div><div class="responsive-block-editor-addons-testimonial__wrap  responsive-block-editor-addons-tm__imgicon-style-circle responsive-block-editor-addons-tm__image-position-bottom responsive-block-editor-addons-tm__bg-type-undefined "><div class="responsive-block-editor-addons-tm__content skin-type-default center-aligned"><div class="responsive-block-editor-addons-tm__overlay"></div><div class="responsive-block-editor-addons-tm__text-wrap"><div class="responsive-block-editor-addons-testinomial-text-wrap"><div class="responsive-block-editor-addons-tm__desc" style="color:#333;margin-bottom:15px;font-family:Default">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div></div><div class="responsive-block-editor-addons-tm__meta"><div class="responsive-block-editor-addons-tm__meta-inner"><div class="responsive-block-editor-addons-testimonial-details"><span class="responsive-block-editor-addons-tm__author-name" style="color:#333;margin-bottom:5px;font-family:Default">John Doe </span><span class="responsive-block-editor-addons-tm__company" style="color:#888888;font-family:Default">Company2</span></div></div></div></div></div></div><div class="responsive-block-editor-addons-testimonial__wrap  responsive-block-editor-addons-tm__imgicon-style-circle responsive-block-editor-addons-tm__image-position-bottom responsive-block-editor-addons-tm__bg-type-undefined "><div class="responsive-block-editor-addons-tm__content skin-type-default center-aligned"><div class="responsive-block-editor-addons-tm__overlay"></div><div class="responsive-block-editor-addons-tm__text-wrap"><div class="responsive-block-editor-addons-testinomial-text-wrap"><div class="responsive-block-editor-addons-tm__desc" style="color:#333;margin-bottom:15px;font-family:Default">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div></div><div class="responsive-block-editor-addons-tm__meta"><div class="responsive-block-editor-addons-tm__meta-inner"><div class="responsive-block-editor-addons-testimonial-details"><span class="responsive-block-editor-addons-tm__author-name" style="color:#333;margin-bottom:5px;font-family:Default">John Doe </span><span class="responsive-block-editor-addons-tm__company" style="color:#888888;font-family:Default">Company3</span></div></div></div></div></div></div></div></div>',
			),
		);
		$result = get_responsive_testimonial_carousel_block_js( $block );
		$this->assertNull( $result );
		$this->assertEmpty( $responsive_post_carousel_js );
	}

	/**
	 * Test for get responsive testimonial carousel block js function
	 */
	public function test_get_responsive_testimonial_carousel_block_js() {
		global $responsive_post_carousel_js;
		$block = array(
			'blockName'    => 'responsive-block-editor-addons/testimonial-slider',
			'attrs'        => array(
				'classMigrate' => 1,
				'block_id'     => self::$block_id,
			),
			'innerBlocks'  => array(),
			'innerHTML'    => '<div class="responsive-block-editor-addons-testomonial__outer-wrap responsive-block-editor-addons-slick-carousel responsive-block-editor-addons-tm__arrow-outside responsive-block-editor-addons-block-' . self::$block_id . '"><div class="is-carousel responsive-block-editor-addons-tm__columns-1 responsive-block-editor-addons-tm__items responsive-testimonial-slick-carousel responsive-block-editor-addons-block-' . self::$block_id . '"><div class="responsive-block-editor-addons-testimonial__wrap  responsive-block-editor-addons-tm__imgicon-style-circle responsive-block-editor-addons-tm__image-position-bottom responsive-block-editor-addons-tm__bg-type-undefined "><div class="responsive-block-editor-addons-tm__content skin-type-default center-aligned"><div class="responsive-block-editor-addons-tm__overlay"></div><div class="responsive-block-editor-addons-tm__text-wrap"><div class="responsive-block-editor-addons-testinomial-text-wrap"><div class="responsive-block-editor-addons-tm__desc" style="color:#333;margin-bottom:15px;font-family:Default">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div></div><div class="responsive-block-editor-addons-tm__meta"><div class="responsive-block-editor-addons-tm__meta-inner"><div class="responsive-block-editor-addons-testimonial-details"><span class="responsive-block-editor-addons-tm__author-name" style="color:#333;margin-bottom:5px;font-family:Default">John Doe </span><span class="responsive-block-editor-addons-tm__company" style="color:#888888;font-family:Default">Company1</span></div></div></div></div></div></div><div class="responsive-block-editor-addons-testimonial__wrap  responsive-block-editor-addons-tm__imgicon-style-circle responsive-block-editor-addons-tm__image-position-bottom responsive-block-editor-addons-tm__bg-type-undefined "><div class="responsive-block-editor-addons-tm__content skin-type-default center-aligned"><div class="responsive-block-editor-addons-tm__overlay"></div><div class="responsive-block-editor-addons-tm__text-wrap"><div class="responsive-block-editor-addons-testinomial-text-wrap"><div class="responsive-block-editor-addons-tm__desc" style="color:#333;margin-bottom:15px;font-family:Default">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div></div><div class="responsive-block-editor-addons-tm__meta"><div class="responsive-block-editor-addons-tm__meta-inner"><div class="responsive-block-editor-addons-testimonial-details"><span class="responsive-block-editor-addons-tm__author-name" style="color:#333;margin-bottom:5px;font-family:Default">John Doe </span><span class="responsive-block-editor-addons-tm__company" style="color:#888888;font-family:Default">Company2</span></div></div></div></div></div></div><div class="responsive-block-editor-addons-testimonial__wrap  responsive-block-editor-addons-tm__imgicon-style-circle responsive-block-editor-addons-tm__image-position-bottom responsive-block-editor-addons-tm__bg-type-undefined "><div class="responsive-block-editor-addons-tm__content skin-type-default center-aligned"><div class="responsive-block-editor-addons-tm__overlay"></div><div class="responsive-block-editor-addons-tm__text-wrap"><div class="responsive-block-editor-addons-testinomial-text-wrap"><div class="responsive-block-editor-addons-tm__desc" style="color:#333;margin-bottom:15px;font-family:Default">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div></div><div class="responsive-block-editor-addons-tm__meta"><div class="responsive-block-editor-addons-tm__meta-inner"><div class="responsive-block-editor-addons-testimonial-details"><span class="responsive-block-editor-addons-tm__author-name" style="color:#333;margin-bottom:5px;font-family:Default">John Doe </span><span class="responsive-block-editor-addons-tm__company" style="color:#888888;font-family:Default">Company3</span></div></div></div></div></div></div></div></div>',
			'innerContent' => array(
				'<div class="responsive-block-editor-addons-testomonial__outer-wrap responsive-block-editor-addons-slick-carousel responsive-block-editor-addons-tm__arrow-outside responsive-block-editor-addons-block-' . self::$block_id . '"><div class="is-carousel responsive-block-editor-addons-tm__columns-1 responsive-block-editor-addons-tm__items responsive-testimonial-slick-carousel responsive-block-editor-addons-block-' . self::$block_id . '"><div class="responsive-block-editor-addons-testimonial__wrap  responsive-block-editor-addons-tm__imgicon-style-circle responsive-block-editor-addons-tm__image-position-bottom responsive-block-editor-addons-tm__bg-type-undefined "><div class="responsive-block-editor-addons-tm__content skin-type-default center-aligned"><div class="responsive-block-editor-addons-tm__overlay"></div><div class="responsive-block-editor-addons-tm__text-wrap"><div class="responsive-block-editor-addons-testinomial-text-wrap"><div class="responsive-block-editor-addons-tm__desc" style="color:#333;margin-bottom:15px;font-family:Default">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div></div><div class="responsive-block-editor-addons-tm__meta"><div class="responsive-block-editor-addons-tm__meta-inner"><div class="responsive-block-editor-addons-testimonial-details"><span class="responsive-block-editor-addons-tm__author-name" style="color:#333;margin-bottom:5px;font-family:Default">John Doe </span><span class="responsive-block-editor-addons-tm__company" style="color:#888888;font-family:Default">Company1</span></div></div></div></div></div></div><div class="responsive-block-editor-addons-testimonial__wrap  responsive-block-editor-addons-tm__imgicon-style-circle responsive-block-editor-addons-tm__image-position-bottom responsive-block-editor-addons-tm__bg-type-undefined "><div class="responsive-block-editor-addons-tm__content skin-type-default center-aligned"><div class="responsive-block-editor-addons-tm__overlay"></div><div class="responsive-block-editor-addons-tm__text-wrap"><div class="responsive-block-editor-addons-testinomial-text-wrap"><div class="responsive-block-editor-addons-tm__desc" style="color:#333;margin-bottom:15px;font-family:Default">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div></div><div class="responsive-block-editor-addons-tm__meta"><div class="responsive-block-editor-addons-tm__meta-inner"><div class="responsive-block-editor-addons-testimonial-details"><span class="responsive-block-editor-addons-tm__author-name" style="color:#333;margin-bottom:5px;font-family:Default">John Doe </span><span class="responsive-block-editor-addons-tm__company" style="color:#888888;font-family:Default">Company2</span></div></div></div></div></div></div><div class="responsive-block-editor-addons-testimonial__wrap  responsive-block-editor-addons-tm__imgicon-style-circle responsive-block-editor-addons-tm__image-position-bottom responsive-block-editor-addons-tm__bg-type-undefined "><div class="responsive-block-editor-addons-tm__content skin-type-default center-aligned"><div class="responsive-block-editor-addons-tm__overlay"></div><div class="responsive-block-editor-addons-tm__text-wrap"><div class="responsive-block-editor-addons-testinomial-text-wrap"><div class="responsive-block-editor-addons-tm__desc" style="color:#333;margin-bottom:15px;font-family:Default">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div></div><div class="responsive-block-editor-addons-tm__meta"><div class="responsive-block-editor-addons-tm__meta-inner"><div class="responsive-block-editor-addons-testimonial-details"><span class="responsive-block-editor-addons-tm__author-name" style="color:#333;margin-bottom:5px;font-family:Default">John Doe </span><span class="responsive-block-editor-addons-tm__company" style="color:#888888;font-family:Default">Company3</span></div></div></div></div></div></div></div></div>',
			),
		);
		get_responsive_testimonial_carousel_block_js( $block );
		$this->assertNotEmpty( $responsive_post_carousel_js );
	}

	/**
	 * Test for get responsive testimonial carousel scripts function
	 */
	public function test_get_responsive_testimonial_carousel_scripts() {
		global $responsive_post_carousel_js;
		$block = array(
			array(
				'blockName'    => 'responsive-block-editor-addons/testimonial-slider',
				'attrs'        => array(
					'classMigrate' => 1,
					'block_id'     => self::$block_id,
				),
				'innerBlocks'  => array(),
				'innerHTML'    => '<div class="responsive-block-editor-addons-testomonial__outer-wrap responsive-block-editor-addons-slick-carousel responsive-block-editor-addons-tm__arrow-outside responsive-block-editor-addons-block-' . self::$block_id . '"><div class="is-carousel responsive-block-editor-addons-tm__columns-1 responsive-block-editor-addons-tm__items responsive-testimonial-slick-carousel responsive-block-editor-addons-block-' . self::$block_id . '"><div class="responsive-block-editor-addons-testimonial__wrap  responsive-block-editor-addons-tm__imgicon-style-circle responsive-block-editor-addons-tm__image-position-bottom responsive-block-editor-addons-tm__bg-type-undefined "><div class="responsive-block-editor-addons-tm__content skin-type-default center-aligned"><div class="responsive-block-editor-addons-tm__overlay"></div><div class="responsive-block-editor-addons-tm__text-wrap"><div class="responsive-block-editor-addons-testinomial-text-wrap"><div class="responsive-block-editor-addons-tm__desc" style="color:#333;margin-bottom:15px;font-family:Default">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div></div><div class="responsive-block-editor-addons-tm__meta"><div class="responsive-block-editor-addons-tm__meta-inner"><div class="responsive-block-editor-addons-testimonial-details"><span class="responsive-block-editor-addons-tm__author-name" style="color:#333;margin-bottom:5px;font-family:Default">John Doe </span><span class="responsive-block-editor-addons-tm__company" style="color:#888888;font-family:Default">Company1</span></div></div></div></div></div></div><div class="responsive-block-editor-addons-testimonial__wrap  responsive-block-editor-addons-tm__imgicon-style-circle responsive-block-editor-addons-tm__image-position-bottom responsive-block-editor-addons-tm__bg-type-undefined "><div class="responsive-block-editor-addons-tm__content skin-type-default center-aligned"><div class="responsive-block-editor-addons-tm__overlay"></div><div class="responsive-block-editor-addons-tm__text-wrap"><div class="responsive-block-editor-addons-testinomial-text-wrap"><div class="responsive-block-editor-addons-tm__desc" style="color:#333;margin-bottom:15px;font-family:Default">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div></div><div class="responsive-block-editor-addons-tm__meta"><div class="responsive-block-editor-addons-tm__meta-inner"><div class="responsive-block-editor-addons-testimonial-details"><span class="responsive-block-editor-addons-tm__author-name" style="color:#333;margin-bottom:5px;font-family:Default">John Doe </span><span class="responsive-block-editor-addons-tm__company" style="color:#888888;font-family:Default">Company2</span></div></div></div></div></div></div><div class="responsive-block-editor-addons-testimonial__wrap  responsive-block-editor-addons-tm__imgicon-style-circle responsive-block-editor-addons-tm__image-position-bottom responsive-block-editor-addons-tm__bg-type-undefined "><div class="responsive-block-editor-addons-tm__content skin-type-default center-aligned"><div class="responsive-block-editor-addons-tm__overlay"></div><div class="responsive-block-editor-addons-tm__text-wrap"><div class="responsive-block-editor-addons-testinomial-text-wrap"><div class="responsive-block-editor-addons-tm__desc" style="color:#333;margin-bottom:15px;font-family:Default">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div></div><div class="responsive-block-editor-addons-tm__meta"><div class="responsive-block-editor-addons-tm__meta-inner"><div class="responsive-block-editor-addons-testimonial-details"><span class="responsive-block-editor-addons-tm__author-name" style="color:#333;margin-bottom:5px;font-family:Default">John Doe </span><span class="responsive-block-editor-addons-tm__company" style="color:#888888;font-family:Default">Company3</span></div></div></div></div></div></div></div></div>',
				'innerContent' => array(
					'<div class="responsive-block-editor-addons-testomonial__outer-wrap responsive-block-editor-addons-slick-carousel responsive-block-editor-addons-tm__arrow-outside responsive-block-editor-addons-block-' . self::$block_id . '"><div class="is-carousel responsive-block-editor-addons-tm__columns-1 responsive-block-editor-addons-tm__items responsive-testimonial-slick-carousel responsive-block-editor-addons-block-' . self::$block_id . '"><div class="responsive-block-editor-addons-testimonial__wrap  responsive-block-editor-addons-tm__imgicon-style-circle responsive-block-editor-addons-tm__image-position-bottom responsive-block-editor-addons-tm__bg-type-undefined "><div class="responsive-block-editor-addons-tm__content skin-type-default center-aligned"><div class="responsive-block-editor-addons-tm__overlay"></div><div class="responsive-block-editor-addons-tm__text-wrap"><div class="responsive-block-editor-addons-testinomial-text-wrap"><div class="responsive-block-editor-addons-tm__desc" style="color:#333;margin-bottom:15px;font-family:Default">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div></div><div class="responsive-block-editor-addons-tm__meta"><div class="responsive-block-editor-addons-tm__meta-inner"><div class="responsive-block-editor-addons-testimonial-details"><span class="responsive-block-editor-addons-tm__author-name" style="color:#333;margin-bottom:5px;font-family:Default">John Doe </span><span class="responsive-block-editor-addons-tm__company" style="color:#888888;font-family:Default">Company1</span></div></div></div></div></div></div><div class="responsive-block-editor-addons-testimonial__wrap  responsive-block-editor-addons-tm__imgicon-style-circle responsive-block-editor-addons-tm__image-position-bottom responsive-block-editor-addons-tm__bg-type-undefined "><div class="responsive-block-editor-addons-tm__content skin-type-default center-aligned"><div class="responsive-block-editor-addons-tm__overlay"></div><div class="responsive-block-editor-addons-tm__text-wrap"><div class="responsive-block-editor-addons-testinomial-text-wrap"><div class="responsive-block-editor-addons-tm__desc" style="color:#333;margin-bottom:15px;font-family:Default">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div></div><div class="responsive-block-editor-addons-tm__meta"><div class="responsive-block-editor-addons-tm__meta-inner"><div class="responsive-block-editor-addons-testimonial-details"><span class="responsive-block-editor-addons-tm__author-name" style="color:#333;margin-bottom:5px;font-family:Default">John Doe </span><span class="responsive-block-editor-addons-tm__company" style="color:#888888;font-family:Default">Company2</span></div></div></div></div></div></div><div class="responsive-block-editor-addons-testimonial__wrap  responsive-block-editor-addons-tm__imgicon-style-circle responsive-block-editor-addons-tm__image-position-bottom responsive-block-editor-addons-tm__bg-type-undefined "><div class="responsive-block-editor-addons-tm__content skin-type-default center-aligned"><div class="responsive-block-editor-addons-tm__overlay"></div><div class="responsive-block-editor-addons-tm__text-wrap"><div class="responsive-block-editor-addons-testinomial-text-wrap"><div class="responsive-block-editor-addons-tm__desc" style="color:#333;margin-bottom:15px;font-family:Default">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div></div><div class="responsive-block-editor-addons-tm__meta"><div class="responsive-block-editor-addons-tm__meta-inner"><div class="responsive-block-editor-addons-testimonial-details"><span class="responsive-block-editor-addons-tm__author-name" style="color:#333;margin-bottom:5px;font-family:Default">John Doe </span><span class="responsive-block-editor-addons-tm__company" style="color:#888888;font-family:Default">Company3</span></div></div></div></div></div></div></div></div>',
				),
			),
			array(
				'blockName'    => '',
				'attrs'        => array(),
				'innerBlocks'  => array(),
				'innerHTML'    => '',
				'innerContent' => array(),
			),
			array(
				'blockName'    => '',
				'attrs'        => array(),
				'innerBlocks'  => array(),
				'innerHTML'    => '<p></p>',
				'innerContent' => array(
					'<p></p>',
				),
			),
		);
		get_responsive_testimonial_carousel_scripts( $block );
		$this->assertNotEmpty( $responsive_post_carousel_js );
	}

	/**
	 * Test for responsive testimonial js function
	 */
	public function test_get_responsive_testimonial_js() {
		$attributes = get_responsive_testimonial_carousel_default_attributes();
		$expected   = self::get_responsive_testimonial_js( $attributes, self::$block_id );
		$result     = get_responsive_testimonial_js( $attributes, self::$block_id );
		$this->assertSame( $expected, $result );
	}

	/**
	 * Test for default attributes
	 */
	public function test_get_responsive_testimonial_carousel_default_attributes() {
		$expected = array(
			'blockAlign'           => 'left',
			'columns'              => 1,
			'autoplaySpeed'        => 2000,
			'autoplay'             => true,
			'infiniteLoop'         => true,
			'pauseOnHover'         => true,
			'transitionSpeed'      => 500,
			'tcolumns'             => 1,
			'mcolumns'             => 1,
			'arrowSize'            => 20,
			'arrowDots'            => 'arrows_dots',
			'arrowColor'           => '#333',
			'arrowBorderSize'      => 1,
			'arrowBorderRadius'    => 0,
			'postsToShow'          => 6,
			'displayPostDate'      => true,
			'displayPostExcerpt'   => true,
			'displayPostAuthor'    => true,
			'displayPostImage'     => false,
			'displayPostLink'      => true,
			'displayPostTitle'     => true,
			'postTitleTag'         => 'h3',
			'align'                => 'center',
			'order'                => 'desc',
			'orderBy'              => 'date',
			'readMoreText'         => 'Continue Reading',
			'offset'               => 0,
			'excerptLength'        => 20,
			'postType'             => 'post',
			'sectionTag'           => 'section',
			'sectionTitleTag'      => 'h2',
			'imageSize'            => 'full',
			'bgColor'              => '#ffffff',
			'contentPadding'       => 20,
			'contentPaddingMobile' => 20,
			'blockPadding'         => 45,
		);
		$result   = get_responsive_testimonial_carousel_default_attributes();
		$this->assertEquals( $expected, $result );
	}
}


