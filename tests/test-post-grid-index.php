<?php
/**
 * Post Grid index.php file
 *
 * @package category
 */

/**
 * Require post grid index.php file
 */
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'src/blocks/post-grid/index.php';

/**
 * Post Grid funcitons test
 *
 * @return void
 */
class Post_Grid_Index_Test extends WP_UnitTestCase {
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
				'post_content' => '<!-- wp:responsive-block-editor-addons/responsive-block-editor-addons-post-grid --><!-- /wp:responsive-block-editor-addons/responsive-block-editor-addons-post-grid -->',
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
		$this->assertTrue( add_action( 'init', 'responsive_block_editor_addons_register_block_core_latest_posts' ) );
	}

	/**
	 * Test render function for post grid
	 *
	 * @since 1.3.4
	 */
	public function test_get_render_post_grid() {
		$attributes = array(
			'textAlignment'               => 'left',
			'postsToShow'                 => 6,
			'stackonMobile'               => true,
			'displayPostDate'             => true,
			'excludeCurrentPost'          => true,
			'displayPostExcerpt'          => true,
			'displayPostAuthor'           => true,
			'displayPostImage'            => true,
			'displayPostLink'             => true,
			'displayPostTitle'            => true,
			'displaySectionTitle'         => false,
			'postPagination'              => false,
			'equalHeight'                 => true,
			'postTitleTag'                => 'h3',
			'postLayout'                  => 'grid',
			'columns'                     => 2,
			'align'                       => 'center',
			'width'                       => 'wide',
			'orderBy'                     => 'date',
			'order'                       => 'desc',
			'readMoreText'                => 'Read More »',
			'offset'                      => 0,
			'excerptLength'               => 55,
			'postType'                    => 'post',
			'postTaxonomy'                => 'category',
			'taxonomyType'                => 'category',
			'paginationAlignment'         => 'left',
			'paginationLayout'            => '',
			'sectionTag'                  => 'section',
			'sectionTitle'                => '',
			'sectionTitleTag'             => 'h2',
			'imageSize'                   => 'full',
			'id'                          => '',
			'bgColor'                     => '#e4e4e4',
			'paginationBorderColor'       => '#e4e4e4',
			'paginationTextActiveColor'   => '',
			'paginationTextColor'         => '',
			'paginationActiveBorderColor' => '',
			'paginationBorderWidth'       => '',
			'paginationBorderRadius'      => '',
			'paginationSpacing'           => '',
			'imageBorderRadius'           => '',
			'textColor'                   => '#444444',
			'previousButtonText'          => 'Previous',
			'nextButtonText'              => 'Next',
			'imagePosition'               => 'top',
			'layout'                      => 'boxed',
			'metaColor'                   => '#444444',
			'readMoreLinkColor'           => '#0066cc',
			'readMoreHoverColor'          => '#0558ab',
			'titleColor'                  => '#444444',
			'titleHoverColor'             => '#444444',
			'contentPadding'              => 30,
			'contentPaddingMobile'        => 10,
			'mobileContentPadding'        => 999, // For compatibility with v1.3.2.
			'contentPaddingTablet'        => 30,
			'continueFontSize'            => '',
			'continueLineHeight'          => '',
			'continueFontWeight'          => '',
			'continueTextTransform'       => '',
			'continueFontFamily'          => '',
			'titleFontSize'               => '',
			'titleFontSizeMobile'         => '',
			'titleFontSizeTablet'         => '',
			'titleLineHeight'             => '',
			'titleFontWeight'             => '',
			'titleTextTransform'          => '',
			'metaFontSize'                => '',
			'metaLineHeight'              => '',
			'metaFontWeight'              => '',
			'metaTextTransform'           => '',
			'titleFontFamily'             => '',
			'metaFontFamily'              => '',
			'excerptFontFamily'           => '',
			'excerptFontSize'             => '',
			'excerptLineHeight'           => '',
			'excerptFontWeight'           => '',
			'excerptTextTransform'        => '',
			'excerptBottomSpacing'        => '',
			'metaBottomSpacing'           => '',
			'titleBottomSpacing'          => '',
			'columnGap'                   => 20,
			'excerptBottomSpacingMobile'  => '',
			'metaBottomSpacingMobile'     => '',
			'titleBottomSpacingMobile'    => '',
			'excerptBottomSpacingTablet'  => '',
			'metaBottomSpacingTablet'     => '',
			'titleBottomSpacingTablet'    => '',
			'rowGap'                      => 0,
			'rowGapMobile'                => 0,
			'rowGapTablet'                => 0,
			'blockBorderWidth'            => '0',
			'blockBorderRadius'           => '0',
			'blockBorderStyle'            => 'none',
			'blockBorderColor'            => '#333',
			'pageLimit'                   => '10',
			'taxonomyType'                => 'category',
			'postGridBlockId'             => '',
			'boxShadowColor'              => '',
			'boxShadowHOffset'            => '0',
			'boxShadowVOffset'            => '0',
			'boxShadowBlur'               => '0',
			'boxShadowSpread'             => '0',
			'boxShadowPosition'           => 'outset',
			'hoverboxShadowColor'         => '#cccccc',
			'hoverboxShadowHOffset'       => 0,
			'hoverboxShadowVOffset'       => 0,
			'hoverboxShadowBlur'          => 6,
			'hoverboxShadowSpread'        => 1,
			'hoverboxShadowPosition'      => 'outset',
			'columnGapTablet'             => 20,
			'columnGapMobile'             => 20,
			'continueFontSizeMobile'      => '',
			'continueFontSizeTablet'      => '',
			'metaFontSizeMobile'          => '',
			'metaFontSizeTablet'          => '',
			'excerptFontSizeMobile'       => '',
			'excerptFontSizeTablet'       => '',
			'block_id'                    => '',
		);
		global $post;
		$post        = get_post( self::$block_id );
		$render_code = responsive_block_editor_addons_render_block_core_latest_posts( $attributes );
		$render_code = preg_replace( '/\s+/', '', $render_code );
		$render_code = preg_replace( '/[0-9]+/', '', $render_code );
		$expected    = '<sectionclass="block-id-responsive-block-editor-addons-block-post-gridfeaturedpostaligncenter"><divclass="responsive-block-editor-addons-post-grid-itemsis-gridcolumns-"><articleid="post-"class="responsive-block-editor-addons-post-grid-itempost-posttype-poststatus-publishformat-standardhentrycategory-uncategorized"style="background-image:none"><divclass="responsive-block-editor-addons-block-post-grid-text"><headerclass="responsive-block-editor-addons-block-post-grid-header"><hclass="responsive-block-editor-addons-block-post-grid-title"><ahref="http://example.org/?p="rel="bookmark">TestPost</a></h><divclass="responsive-block-editor-addons-block-post-grid-byline"><divclass="responsive-block-editor-addons-block-post-grid-author"itemprop="author"itemtype="https://schema.org/Person"><aclass="responsive-block-editor-addons-text-link"href="http://example.org/?author="itemprop="url"rel="author"><spanitemprop="name">User</span></a></div><timedatetime="--T::+:"class="responsive-block-editor-addons-block-post-grid-date"itemprop="datePublished">September,</time></div></header><divclass="responsive-block-editor-addons-block-post-grid-excerpt"><p>Postexcerpt</p></div><p><aclass="responsive-block-editor-addons-block-post-grid-more-linkresponsive-block-editor-addons-text-link"href="http://example.org/?p="rel="bookmark">ReadMore»<spanclass="screen-reader-text">TestPost</span></a></p></div></article></div></section>';
		$this->assertEquals( $expected, $render_code );
	}

}
