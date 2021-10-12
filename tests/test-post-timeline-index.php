<?php
/**
 * Post Timeline index.php file
 *
 * @package category
 */

/**
 * Require post timeline index.php file
 */
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'src/blocks/post-timeline/index.php';

/**
 * Post Timeline funcitons test
 *
 * @return void
 */
class Post_Timeline_Index_Test extends WP_UnitTestCase {
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
				'post_content' => 'Test Content',
			)
		);

		self::$block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/post-timeline --><!-- /wp:responsive-block-editor-addons/post-timeline -->',
			)
		);
	}

	/**
	 * Delete fake data after tests run.
	 */
	public static function wpTearDownAfterClass() {
		wp_delete_post( self::$post_id, true );
		self::delete_user( self::$user_id );
	}

	/**
	 * Testing add action
	 */
	public function test_add_action() {
		$this->assertTrue( add_action( 'init', 'responsive_block_editor_addons_post_timeline_register_latest_posts' ) );
		$this->assertTrue( add_action( 'rest_api_init', 'responsive_block_editor_addons_post_timeline_register_rest_fields' ) );
		$this->assertTrue( add_action( 'rest_api_init', 'responsive_block_editor_addons_add_custom_orderby' ) );
	}

	/**
	 * Test render function for post timeline
	 *
	 * @since 1.3.4
	 */
	public function test_get_render_post_timeline() {
		$attributes = array(
			'categories'             => '',
			'className'              => '',
			'postsToShow'            => 6,
			'displayPostDate'        => true,
			'displayPostExcerpt'     => true,
			'displayPostAuthor'      => true,
			'displayPostImage'       => true,
			'displayPostLink'        => true,
			'displayPostTitle'       => true,
			'displaySectionTitle'    => false,
			'postTitleTag'           => 'h3',
			'postLayout'             => 'grid',
			'columns'                => 2,
			'align'                  => 'center',
			'timelinAlignment'       => 'center',
			'arrowlinAlignment'      => 'center',
			'width'                  => 'wide',
			'order'                  => 'desc',
			'orderBy'                => 'date',
			'readMoreText'           => 'Continue Reading',
			'offset'                 => 0,
			'excerptLength'          => 55,
			'postType'               => 'post',
			'sectionTag'             => 'section',
			'sectionTitle'           => '',
			'sectionTitleTag'        => 'h2',
			'imageSize'              => 'full',
			'url'                    => '',
			'source'                 => 'attribute',
			'selector'               => 'img',
			'attribute'              => 'src',
			'id'                     => '',
			'bgColor'                => '#e4e4e4',
			'textColor'              => '#333',
			'contentPadding'         => 20,
			'contentPaddingMobile'   => 20,
			'contentPaddingTablet'   => 20,
			'authorSpace'            => '',
			'authorSpaceTablet'      => '',
			'authorSpaceMobile'      => '',
			'excerptSpace'           => '',
			'excerptSpaceTablet'     => '',
			'excerptSpaceMobile'     => '',
			'blockSpace'             => '',
			'blockSpaceTablet'       => '',
			'blockSpaceMobile'       => '',
			'headingSpace'           => '',
			'headingSpaceTablet'     => '',
			'headingSpaceMobile'     => '',
			'headingColor'           => '#333',
			'authorColor'            => '#626e81',
			'continueColor'          => '#333',
			'dateFontFamily'         => '',
			'headingFontFamily'      => '',
			'authorFontFamily'       => '',
			'contentFontFamily'      => '',
			'continueFontFamily'     => '',
			'connectorColor'         => '#eeeeee',
			'dateFontSize'           => 16,
			'dateFontWeight'         => 400,
			'dateLineHeight'         => 1.75,
			'headingFontSize'        => 20,
			'headingFontWeight'      => 700,
			'headingLineHeight'      => 1.5,
			'authorFontSize'         => 14,
			'authorFontWeight'       => 400,
			'authorLineHeight'       => 1.5,
			'contentFontSize'        => 16,
			'contentFontWeight'      => 400,
			'contentLineHeight'      => 1.75,
			'continueFontSize'       => 16,
			'continueFontWeight'     => 700,
			'continueLineHeight'     => 1.75,
			'icon'                   => 'calendar-alt',
			'iconSize'               => 16,
			'bgSize'                 => 35,
			'borderWidth'            => 0,
			'connectorWidth'         => 3,
			'iconColor'              => '#333',
			'separatorBg'            => '#eee',
			'separatorBorder'        => '#eee',
			'separatorFillColor'     => '#61ce70',
			'iconFocus'              => '#fff',
			'iconBgFocus'            => '#61ce70',
			'borderFocus'            => '#5cb85c',
			'continuebgColor'        => '',
			'borderColor'            => '',
			'hColor'                 => '#333',
			'continuebghColor'       => '',
			'borderHColor'           => '',
			'target'                 => true,
			'borderRadius'           => 0,
			'verSpace'               => 0,
			'verSpaceTablet'         => 0,
			'verSpaceMobile'         => 0,
			'horSpace'               => 0,
			'horSpaceTablet'         => 0,
			'horSpaceMobile'         => 0,
			'stack'                  => 'mobile',
			'boxShadowColor'         => '',
			'boxShadowPosition'      => 'outset',
			'boxShadowHOffset'       => 0,
			'boxShadowVOffset'       => 0,
			'boxShadowBlur'          => 0,
			'boxShadowSpread'        => 0,
			'taxonomyType'           => 'category',
			'block_id'               => '',
			'dateFontSizeMobile'     => '',
			'dateFontSizeTablet'     => '',
			'headingFontSizeMobile'  => '',
			'headingFontSizeTablet'  => '',
			'authorFontSizeMobile'   => '',
			'authorFontSizeTablet'   => '',
			'contentFontSizeMobile'  => '',
			'contentFontSizeTablet'  => '',
			'continueFontSizeMobile' => '',
			'continueFontSizeTablet' => '',
		);
		global $post;
		$post        = get_post( self::$block_id );
		$render_code = responsive_block_editor_addons_post_timeline_render_latest_posts( $attributes );
		$render_code = preg_replace( '/\s+/', '', $render_code );
		$render_code = preg_replace( '/[0-9]+/', '', $render_code );
		$month       = gmdate( 'F' );
		$expected    = '<sectionclass="responsive-block-editor-addons-block-post-timelineblock-wp-block-responsive-block-editor-addons-post-timelinefeaturedpostaligncenterresponsive-block-editor-addons-timelineresponsive-block-editor-addons-block-post-timelineresponsive-block-editor-addons-timeline__arrow-centerresponsive-block-editor-addons-timeline__center-blockresponsive-block-editor-addons-timeline__responsive-mobile"><divclass="responsive-block-editor-addons-timeline__main"><divclass="responsive-block-editor-addons-timeline__days"><sectionclass="responsive-block-editor-addons-block-post-timelinepost-posttype-poststatus-publishformat-standardhentrycategory-uncategorized"><articleid="post-"class="responsive-block-editor-addons-timeline__fieldresponsive-block-editor-addons-timeline__field-wrap"><divclass="responsive-block-editor-addons-timeline__widgetresponsive-block-editor-addons-timeline__right"><divclass="responsive-block-editor-addons-timeline__markerresponsive-block-editor-addons-timeline__out-view-icon"><spanclass="responsive-block-editor-addons-timeline__icon-newresponsive-block-editor-addons-timeline__out-view-icon"><span><divclassName="responsive-block-editor-addons-ifb-icon-wrap"><spanclassName="responsive-block-editor-addons-ifb-icon"><svgxmlns="https://www.w.org//svg"viewBox=""><pathd="MHc-.--.--v-c-..--hVc-..--hc..vhVc-..--hc..vhc..vc.-.-zMhc..vc.-.-Hc-.--.--Vc-..--zmc-.-.---Hc-.-.-vc..hc.-.-v-zm-c-.-.---Hc-.-.-vc..hc.-.-v-zmc-.-.---h-c-.-.-vc..hc.-.-v-zm-c-.-.---h-c-.-.-vc..hc.-.-v-zmc-.-.---h-c-.-.-vc..hc.-.-v-zm-c-.-.---h-c-.-.-vc..hc.-.-v-z"></path></svg></span></div></span></span></div><divclass="responsive-block-editor-addons-timeline__day-newresponsive-block-editor-addons-timeline__day-right"><divclass="responsive-block-editor-addons-timeline__events-new"><divclass="responsive-block-editor-addons-timeline__events-inner-new"><divclass="responsive-block-editor-addons-timeline__date-hideresponsive-block-editor-addons-timeline__date-inner"><timedatetime="--T::+:"class="responsive-block-editor-addons-timeline__date-new"itemprop="datePublished">' . $month . ',</time></div><divclass="responsive-block-editor-addons-content"><hclass="responsive-block-editor-addons-block-post-timeline-title"><aclass="responsive-block-editor-addons-block-post-timeline-title-heading"href="http://example.org/?p="rel="bookmark">TestPost</a></h><divclass="responsive-block-editor-addons-block-post-timeline-byline"><divclass="responsive-block-editor-addons-block-post-timeline-author"itemprop="author"itemtype="https://schema.org/Person"><aclass="responsive-block-editor-addons-text-link"href="http://example.org/?author="itemprop="url"rel="author"><spanitemprop="name">User</span></a></div></div><divclass="responsive-block-editor-addons-block-post-timeline-excerpt"><divclass="responsive-block-editor-addons-timeline__post"><p>Postexcerpt</p></div><divclass="responsive-block-editor-addons-timeline__link_parent"><aclass="responsive-block-editor-addons-timeline__linkresponsive-block-editor-addons-block-post-timeline-more-linkresponsive-block-editor-addons-text-link"href="http://example.org/?p="rel="bookmark"target="_blank">ContinueReading<spanclass="screen-reader-text">TestPost</span></a></div></div><divclass="responsive-block-editor-addons-timeline__arrow"></div></div></div></div></div><divclass="responsive-block-editor-addons-timeline__date-newresponsive-block-editor-addons-timeline__date-outer"><timedatetime="--T::+:"class="responsive-block-editor-addons-timeline__date-new"itemprop="datePublished">' . $month . ',</time></div></div></article></section></div><divclass="responsive-block-editor-addons-timeline__line"><divclass="responsive-block-editor-addons-timeline__line__inner"></div></div></div></section>';
		$this->assertEquals( $expected, $render_code );
	}
}
