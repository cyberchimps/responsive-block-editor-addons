<?php
/**
 * Portfolio index.php file
 *
 * @package category
 */

/**
 * Require portfolio index.php file
 */
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'src/blocks/portfolio/index.php';

/**
 * Portfolio funcitons test
 *
 * @return void
 */
class Portfolio_Index_Test extends WP_UnitTestCase {
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
				'post_content' => '<!-- wp:responsive-block-editor-addons/responsive-block-editor-addons-portfolio --><!-- /wp:responsive-block-editor-addons/responsive-block-editor-addons-portfolio -->',
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
	 * Test render function for portfolio
	 *
	 * @since 1.3.4
	 */
	public function test_get_render_portfolio() {
		$attributes = array(
			'textAlignment'               => 'left',
			'postsToShow'					=> 6,
			'offset'                      => 0,
			'itemRatio'                 => 0.66,
			'overlayOpacity'                 => 100,
			'horizontalSpacing'				=> 10,
			'verticalSpacing'				=> 15,
			'overlayTextAlign'		=> 'center',
			'overlayTextVerticalAlign'		=> 'center',
			'overlayTextFontSize'               => '',
			'overlayTextLineHeight'             => '',
			'overlayTextFontWeight'             => '',
			'overlayTextTextTransform'          => '',
			'overlayTextFontFamily'          => '',
			'overlayBackgroundColor'		=> '#ff6f61',
			'overlayTextColor'		=> '#ffffff',
			'stackonMobile'               => true,
			'displayPostTitle'            => true,
			'displaySectionTitle'         => false,
			'postTitleTag'                => 'h3',
			'postLayout'                  => 'grid',
			'columns'                     => 3,
			'align'                       => 'center',
			'width'                       => 'wide',
			'orderBy'                     => 'date',
			'order'                       => 'desc',
			'postType'                    => 'post',
			'postTaxonomy'                => 'category',
			'taxonomyType'                => 'category',
			'sectionTag'                  => 'section',
			'sectionTitle'                => '',
			'sectionTitleTag'             => 'h2',
			'imageSize'                   => 'full',
			'id'                          => '',
			'bgColor'                     => '#e4e4e4',
			'layout'                      => 'boxed',
			'contentPadding'              => 0,
			'contentPaddingMobile'        => '',
			'mobileContentPadding'        => 999, 
			'contentPaddingTablet'        => '',
			'columnGap'                   => 0,
			'rowGap'                      => 0,
			'blockBorderWidth'            => '0',
			'blockBorderRadius'           => '0',
			'blockBorderStyle'            => 'none',
			'blockBorderColor'            => '#333',
			'taxonomyType'                => 'category',
		);
		global $post;
		$post        = get_post( self::$block_id );
		$render_code = responsive_block_editor_addons_render_block_core_latest_posts_portfolio( $attributes );
		$render_code = preg_replace( '/\s+/', '', $render_code );
		$render_code = preg_replace( '/[0-9]+/', '', $render_code );
		$month       = gmdate( 'F' );
		$expected    = '<sectionclass="block-id-responsive-block-editor-addons-block-portfoliofeaturedpostaligncenter"><divclass="responsive-block-editor-addons-portfolio-itemsis-gridcolumns-"><articleid="post-"class="responsive-block-editor-addons-portfolio-itempost-posttype-poststatus-publishformat-standardhentrycategory-uncategorized"style="background-image:none"><divclass="responsive-block-editor-addons-block-portfolio-text"><headerclass="responsive-block-editor-addons-block-portfolio-header"><hclass="responsive-block-editor-addons-block-portfolio-title"><ahref="http://example.org/?p="rel="bookmark">TestPost</a></h><divclass="responsive-block-editor-addons-block-portfolio-byline"><divclass="responsive-block-editor-addons-block-portfolio-author"itemprop="author"itemtype="https://schema.org/Person"><aclass="responsive-block-editor-addons-text-link"href="http://example.org/?author="itemprop="url"rel="author"><spanitemprop="name">User</span></a></div><timedatetime="--T::+:"class="responsive-block-editor-addons-block-portfolio-date"itemprop="datePublished">' . $month . ',</time></div></header><divclass="responsive-block-editor-addons-block-portfolio-excerpt"><p>Postexcerpt</p></div><p><aclass="responsive-block-editor-addons-block-portfolio-more-linkresponsive-block-editor-addons-text-link"href="http://example.org/?p="rel="bookmark">ReadMore»<spanclass="screen-reader-text">TestPost</span></a></p></div></article></div></section>';
		$this->assertEquals( $expected, $render_code );
	}
}
