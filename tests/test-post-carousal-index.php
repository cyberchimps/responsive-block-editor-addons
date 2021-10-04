<?php
/**
 * Post Carousal index.php file
 *
 * @package category
 */

/**
 * Require post carousal index.php file
 */
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'src/blocks/post-grid/index.php';

/**
 * Post Carousal frontend assets funciton test
 *
 * @return void
 */
class Post_Carousal_Index_Test extends WP_UnitTestCase {
	/**
	 * Created fake post id.
	 *
	 * @access public
	 * @var int
	 */
	public static $post_id;

	/**
	 * Fake block ID.
	 *
	 * @var int
	 */
	protected static $block_id;

	/**
	 * Fake user ID.
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
				'post_content' => '<!-- wp:responsive-block-editor-addons/post-carousel --><!-- /wp:responsive-block-editor-addons/post-carousel -->',
			)
		);
	}

	/**
	 * Mock function for returning post carousel js
	 *
	 * @since 1.0.3
	 * @param array  $attr The block attributes.
	 * @param string $id The selector ID.
	 * @return string $js
	 */
	public static function get_responsive_testimonial_js( $attr, $id ) {
		$defaults = get_responsive_post_carousel_default_attributes();

		$attr = array_merge( $defaults, (array) $attr );

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
				'prevArrow'      => '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" tabindex="0" role="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" height ="' . $attr['arrowSize'] . '" width = "' . $attr['arrowSize'] . '" fill ="' . $attr['arrowDotsColor'] . '"  ><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg></button>',
				'nextArrow'      => '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" tabindex="0" role="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" height ="' . $attr['arrowSize'] . '" width = "' . $attr['arrowSize'] . '" fill ="' . $attr['arrowDotsColor'] . '" ><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></button>',
				'responsive'     => array(
					array(
						'breakpoint' => 976,
						'settings'   => array(
							'slidesToShow'   => $attr['columnsTablet'],
							'slidesToScroll' => 1,
						),
					),
					array(
						'breakpoint' => 767,
						'settings'   => array(
							'slidesToShow'   => $attr['columnsMobile'],
							'slidesToScroll' => 1,
						),
					),
				),
			)
		);

		$settings = wp_json_encode( $slick_options );

		$selector = '.responsive-post-slick-carousel-' . $id;
		$js       = 'jQuery( document ).ready( function( $ ) { if( $( "' . $selector . '" ).length > 0 ){ $( "' . $selector . '" ).not(".slick-initialized").slick( ' . $settings . '); } } );';

		return $js;
	}

	/**
	 * Delete fake data after tests run.
	 */
	public static function wpTearDownAfterClass() {
		wp_delete_post( self::$post_id, true );
		self::delete_user( self::$user_id );
	}

	/**
	 * Testing if wp_enqueue_scripts action exists
	 */
	public function test_wp_enqueue_scripts_exists() {
		$this->assertGreaterThan( 0, has_action( 'wp_enqueue_scripts', 'responsive_block_editor_addons_post_carousel_add_frontend_assets' ) );
	}

	/**
	 * Testing if the_post action exists
	 */
	public function test_the_post_exists() {
		$this->assertGreaterThan( 0, has_action( 'the_post', 'responsive_block_editor_addons_post_carousel_add_frontend_assets' ) );
	}

	/**
	 * Testing add action
	 */
	public function test_add_action() {
		$this->assertTrue( add_action( 'wp_enqueue_scripts', 'responsive_block_editor_addons_post_carousel_add_frontend_assets' ) );
		$this->assertTrue( add_action( 'the_post', 'responsive_block_editor_addons_post_carousel_add_frontend_assets' ) );
		$this->assertTrue( add_action( 'the_post', 'post_carousel_generate_script' ) );
	}

	/**
	 * Testing if script from index.php is enqueued
	 */
	public function test_responsive_block_editor_addons_post_carousel_add_frontend_assets() {
		$attributes = get_responsive_post_carousel_default_attributes();
		$this->assertFalse( wp_script_is( 'responsive_block_editor_addons-slick-js' ) );
		$this->assertFalse( wp_script_is( 'responsive_block_editor_addons-slick-js-post-carousel' ) );
		responsive_block_editor_addons_post_carousel_add_frontend_assets( $attributes );
		$this->assertFalse( has_block( 'responsive-block-editor-addons/post-carousel' ) );
		global $post;
		$post = get_post( self::$block_id );
		$this->assertTrue( has_block( 'responsive-block-editor-addons/post-carousel' ) );
		responsive_block_editor_addons_post_carousel_add_frontend_assets( $attributes );
		$this->assertTrue( wp_script_is( 'responsive_block_editor_addons-slick-js' ) );
	}

	/**
	 * Test for responsive testimonial js function
	 */
	public function test_get_responsive_post_carousel_js() {
		$attributes = get_responsive_post_carousel_default_attributes();
		$expected   = self::get_responsive_testimonial_js( $attributes, self::$block_id );
		$result     = get_responsive_post_js( $attributes, self::$block_id );
		$this->assertSame( $expected, $result );
	}
	/**
	 * Test for default attributes
	 */
	public function test_get_responsive_post_carousel_default_attributes() {
		$expected = array(
			'blockAlign'            => 'left',
			'columns'               => 2,
			'autoplaySpeed'         => 2000,
			'autoplay'              => true,
			'infiniteLoop'          => true,
			'pauseOnHover'          => true,
			'transitionSpeed'       => 500,
			'tcolumns'              => 1,
			'mcolumns'              => 1,
			'arrowSize'             => 20,
			'arrowDots'             => 'arrows_dots',
			'arrowDotsColor'        => '#333',
			'arrowBorderSize'       => 1,
			'arrowBorderRadius'     => 0,
			'postsToShow'           => 6,
			'displayPostDate'       => true,
			'displayPostExcerpt'    => true,
			'displayPostAuthor'     => true,
			'displayPostImage'      => false,
			'displayPostLink'       => true,
			'displayPostTitle'      => true,
			'postTitleTag'          => 'h3',
			'align'                 => 'center',
			'order'                 => 'desc',
			'orderBy'               => 'date',
			'readMoreText'          => 'Continue Reading',
			'offset'                => 0,
			'excerptLength'         => 20,
			'postType'              => 'post',
			'sectionTag'            => 'section',
			'sectionTitleTag'       => 'h2',
			'imageSize'             => 'full',
			'bgColor'               => '#ffffff',
			'contentPadding'        => 20,
			'contentPaddingMobile'  => 20,
			'contentPaddingTablet'  => 20,
			'columnsTablet'         => '',
			'columnsMobile'         => '',
			'metaFontSizeMobile'    => '',
			'metaFontSizeTablet'    => '',
			'excerptFontSizeMobile' => '',
			'excerptFontSizeTablet' => '',
			'ctaFontSizeMobile'     => '',
			'ctaFontSizeTablet'     => '',
		);
		$result   = get_responsive_post_carousel_default_attributes();
		$this->assertEquals( $expected, $result );
	}

	/**
	 * Test render function for post carousel
	 *
	 * @since 1.3.4
	 */
	public function test_get_render_post_carousel() {
		$attributes = array(
			'blockAlign'              => 'left',
			'columns'                 => 2,
			'tcolumns'                => 1,
			'mcolumns'                => 1,
			'block_id'                => 1,
			'autoplaySpeed'           => 2000,
			'autoplay'                => true,
			'infiniteLoop'            => true,
			'pauseOnHover'            => true,
			'transitionSpeed'         => 500,
			'arrowSize'               => 20,
			'arrowDots'               => 'arrows_dots',
			'arrowBorderSize'         => 1,
			'arrowBorderRadius'       => 0,
			'postsToShow'             => 6,
			'displayPostDate'         => true,
			'displayPostExcerpt'      => true,
			'displayPostAuthor'       => true,
			'displayPostImage'        => true,
			'displayPostLink'         => true,
			'displayPostTitle'        => true,
			'displayPostComment'      => true,
			'displayPostTaxonomy'     => true,
			'buttonTarget'            => false,
			'equalHeight'             => true,
			'categories'              => '',
			'className'               => '',
			'postTitleTag'            => 'h3',
			'align'                   => 'center',
			'order'                   => 'desc',
			'orderBy'                 => 'date',
			'readMoreText'            => 'Continue Reading',
			'offset'                  => 0,
			'excerptLength'           => 20,
			'postType'                => 'post',
			'sectionTag'              => 'section',
			'sectionTitle'            => '',
			'sectionTitleTag'         => 'h2',
			'imageSize'               => 'full',
			'ctaHoverColor'           => '#ffffff',
			'bgColor'                 => '#ffffff',
			'ctaColor'                => '#ffffff',
			'ctaBackColor'            => '#333333',
			'titleColor'              => '#333333',
			'contentColor'            => '#333333',
			'metaColor'               => '#333333',
			'arrowDotsColor'          => '#333333',
			'ctaHoverBackColor'       => '#444444',
			'ctaBorderColor'          => '',
			'ctaHoverBorderColor'     => '',
			'ctaBorderStyle'          => 'none',
			'ctaBorderRadius'         => 0,
			'ctaBorderWidth'          => 2,
			'ctaHpadding'             => 20,
			'ctaVpadding'             => 15,
			'contentPadding'          => 20,
			'contentPaddingMobile'    => 20,
			'contentPaddingTablet'    => 20,
			'rowGap'                  => 20,
			'columnGap'               => 20,
			'columnGapMobile'         => 20,
			'columnGapTablet'         => 20,
			'imageSpace'              => null,
			'titleSpace'              => null,
			'dateSpace'               => 20,
			'excerptSpace'            => 20,
			'ctaSpace'                => 20,
			'titleFontSize'           => 20,
			'titleFontSizeMobile'     => 20,
			'titleFontSizeTablet'     => 20,
			'titleFontWeight'         => 100,
			'titleLineHeight'         => 1,
			'metaFontSize'            => 16,
			'metaFontWeight'          => 100,
			'metaLineHeight'          => 1,
			'excerptFontSize'         => 16,
			'excerptFontWeight'       => 100,
			'excerptLineHeight'       => 1,
			'ctaFontSize'             => 16,
			'ctaFontWeight'           => 100,
			'ctaLineHeight'           => 1,
			'opacity'                 => 50,
			'imagePosition'           => 'background',
			'titleFontFamily'         => '',
			'metaFontFamily'          => '',
			'excerptFontFamily'       => '',
			'ctaFontFamily'           => '',
			'metaFontSizeMobile'      => '',
			'metaFontSizeTablet'      => '',
			'excerptFontSizeMobile'   => '',
			'excerptFontSizeTablet'   => '',
			'ctaFontSizeMobile'       => '',
			'ctaFontSizeTablet'       => '',
			'buttoncolorLocation1'    => 0,
			'buttoncolorLocation2'    => 100,
			'buttongradientDirection' => 90,
			'buttonbackgroundColor1'  => '',
			'buttonbackgroundColor2'  => '#fff',
			'buttonbackgroundType'    => 'color',
			'ctaHpaddingTablet'       => 20,
			'ctaHpaddingMobile'       => 20,
			'ctaVpaddingTablet'       => 15,
			'ctaVpaddingMobile'       => 15,
			'buttonHbackgroundType'   => 'none',
			'columnsTablet'           => '',
			'columnsMobile'           => '',
		);
		global $post;
		$post        = get_post( self::$block_id );
		$render_code = responsive_block_editor_addons_render_block_core_latest_posts2( $attributes );
		$render_code = preg_replace( '/\s+/', '', $render_code );
		$render_code = preg_replace( '/[0-9]+/', '', $render_code );
		$month       = gmdate( 'F' );
		$expected    = '<sectionclass="responsive-block-editor-addons-block-post-carouselblock-responsive-post-gridresponsive-post__image-position-backgroundfeaturedpostaligncenter"data-carouselid=""><divclass="responsive-post-slick-carousel-responsive-post_carousel-equal-height-is-carouselcolumns-"data-slick={"slidesToShow":,"slidesToScroll":,"autoplaySpeed":,"autoplay":true,"infinite":true,"pauseOnHover":true,"speed":,"arrows":true,"dots":true,"rtl":false,"responsive":[{"breakpoint":,"settings":{"slidesToShow":"","slidesToScroll":}},{"breakpoint":,"settings":{"slidesToShow":"","slidesToScroll":}}]}><articleid="post-"class="responsive-block-editor-addons-post-carousel-itempost-posttype-poststatus-publishformat-standardhentrycategory-uncategorized"><divclass="responsive-block-editor-addons-post-carousel-inner"><divclass="responsive-block-editor-addons-block-post-carousel-text-wrap"><headerclass="responsive-block-editor-addons-block-post-carousel-header"><hclass="responsive-block-editor-addons-block-post-carousel-title"><ahref="http://example.org/?p="rel="bookmark">TestPost</a></h><divclass="responsive-block-editor-addons-block-post-carousel-byline"><divclass="responsive-block-editor-addons-block-post-carousel-author"itemprop="author"itemtype="https://schema.org/Person"><aclass="responsive-block-editor-addons-text-link"href="http://example.org/?author="itemprop="url"rel="author"><spanitemprop="name">User</span></a></div><timedatetime="--T::+:"class="responsive-block-editor-addons-block-post-carousel-date"itemprop="datePublished">' . $month . ',</time><pclass="responsive-block-editor-addons-block-post-carousel-comments">comments</p><divclass="responsive-block-editor-addons-block-post-carousel-taxonomy"><ahref="http://example.org/?cat="rel="category">Uncategorized</a></p></div></header><divclass="responsive-block-editor-addons-block-post-carousel-excerpt"><p>Postexcerpt</p><pclass="responsive-block-editor-addons-block-post-carousel-more-link-wrapper"><aclass="responsive-block-editor-addons-block-post-carousel-more-linkresponsive-block-editor-addons-text-link"href="http://example.org/?p="target=""rel="bookmark">ContinueReading<spanclass="screen-reader-text">TestPost</span></a></p></div></div></div></article></div></section>';
		$this->assertEquals( $expected, $render_code );
	}
}
