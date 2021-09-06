<?php
/**
 * Taxonomy list index.php file
 *
 * @package category
 */

/**
 * Require taxonomy list index.php file
 */
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'src/blocks/taxonomy-list/index.php';

/**
 * Taxonomy list funcitons test
 *
 * @return void
 */
class Taxonomy_List_Index_Test extends WP_UnitTestCase {
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
				'post_content' => '<!-- wp:responsive-block-editor-addons/taxonomy-list --><!-- /wp:responsive-block-editor-addons/taxonomy-list -->',
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
		$this->assertTrue( add_action( 'init', 'responsive_block_editor_addons_register_taxonomy_list' ) );
	}

	/**
	 * Test render function when layout is grid
	 *
	 * @since 1.3.4
	 */
	public function test_get_render_taxonomy_list_grid_layout() {
		$attributes  = array(
			'block_id'               => '',
			'columns'                => 3,
			'columnsMobile'          => 1,
			'columnsTablet'          => 2,
			'layout'                 => 'grid',
			'postType'               => 'post',
			'showEmptyTaxonomy'      => false,
			'showPostCount'          => true,
			'taxonomyType'           => 'category',
			'categories'             => '',
			'order'                  => 'desc',
			'orderBy'                => 'date',
			'postsToShow'            => '8',
			'noTaxDisplaytext'       => __( 'Taxonomy Not Available.', 'responsive-block-editor-addons' ),
			'showEmptyTaxonomy'      => false,
			'titleTag'               => 'div',
			'alignment'              => 'center',
			'listStyle'              => 'disc',
			'listStyleColor'         => '#3b3b3b',
			'listStyleColorHover'    => '#3b3b3b',
			'bgColor'                => '#f5f5f5',
			'titleColor'             => '#3b3b3b',
			'countColor'             => '#777777',
			'listTextColor'          => '#3b3b3b',
			'listTextColorHover'     => '#3b3b3b',
			'rowGap'                 => 20,
			'columnGap'              => 20,
			'titleBottomSpace'       => 15,
			'rowGapMobile'           => 20,
			'columnGapMobile'        => 20,
			'titleBottomSpaceMobile' => 15,
			'rowGapTablet'           => 20,
			'columnGapTablet'        => 20,
			'titleBottomSpaceTablet' => 15,
			'contentPadding'         => 15,
			'contentPaddingMobile'   => 15,
			'contentPaddingTablet'   => 15,
			'listBottomMargin'       => 5,
			'listBottomMarginMobile' => 5,
			'listBottomMarginTablet' => 5,
			'listTopMargin'          => 5,
			'listTopMarginMobile'    => 5,
			'listTopMarginTablet'    => 5,
			'titleFontFamily'        => '',
			'titleFontSize'          => 16,
			'titleFontSizeMobile'    => 14,
			'titleFontSizeTablet'    => 16,
			'titleFontWeight'        => '',
			'titleLineHeight'        => '',
			'titleLineHeightMobile'  => '',
			'titleLineHeightTablet'  => '',
			'countFontFamily'        => '',
			'countFontSize'          => 16,
			'countFontSizeMobile'    => 14,
			'countFontSizeTablet'    => 16,
			'countFontWeight'        => '',
			'countLineHeight'        => '',
			'countLineHeightMobile'  => '',
			'countLineHeightTablet'  => '',
			'gridBorderStyle'        => 'solid',
			'gridBorderWidth'        => 1,
			'gridBorderRadius'       => 0,
			'gridBorderColor'        => '#e0e0e0',
			'boxShadow'              => 'none',
			'boxShadowColor'         => '',
			'boxShadowHOffset'       => '',
			'boxShadowVOffset'       => '',
			'boxShadowBlur'          => '',
			'boxShadowSpread'        => '',
			'boxShadowPosition'      => 'outset',
			'listFontFamily'         => '',
			'listFontSize'           => 16,
			'listFontSizeMobile'     => 14,
			'listFontSizeTablet'     => 16,
			'listFontWeight'         => '',
			'listLineHeight'         => '',
			'listLineHeightMobile'   => '',
			'listLineHeightTablet'   => '',
			'separatorStyle'         => 'solid',
			'separatorColor'         => '#b2b4b5',
			'separatorWidth'         => 1,
			'taxonomyAvailable'      => true,
		);
		$render_code = responsive_block_editor_addons_render_taxonomy_list( $attributes );
		$render_code = preg_replace( '/\s+/', '', $render_code );
		$expected    = '<divclass="responsive-block-editor-addons-block-taxonomy-listblock-"><divclass="responsive-block-editor-addons-block-grid"><divclass="responsive-block-editor-addons-block-box"><aclass="responsive-block-editor-addons-block-link"href="http://example.org/?cat=1"><divclass="responsive-block-editor-addons-block-title">Uncategorized</div><divclass="responsive-block-editor-addons-block-count">1Post</div></a></div></div></div>';
		$this->assertEquals( $expected, $render_code );
	}

	/**
	 * Test render function when layout is list
	 *
	 * @since 1.3.4
	 */
	public function test_get_render_taxonomy_list_list_layout() {
		$attributes  = array(
			'block_id'               => '',
			'columns'                => 3,
			'columnsMobile'          => 1,
			'columnsTablet'          => 2,
			'layout'                 => 'list',
			'postType'               => 'post',
			'showEmptyTaxonomy'      => false,
			'showPostCount'          => true,
			'taxonomyType'           => 'category',
			'categories'             => '',
			'order'                  => 'desc',
			'orderBy'                => 'date',
			'postsToShow'            => '8',
			'noTaxDisplaytext'       => __( 'Taxonomy Not Available.', 'responsive-block-editor-addons' ),
			'showEmptyTaxonomy'      => false,
			'titleTag'               => 'div',
			'alignment'              => 'center',
			'listStyle'              => 'disc',
			'listStyleColor'         => '#3b3b3b',
			'listStyleColorHover'    => '#3b3b3b',
			'bgColor'                => '#f5f5f5',
			'titleColor'             => '#3b3b3b',
			'countColor'             => '#777777',
			'listTextColor'          => '#3b3b3b',
			'listTextColorHover'     => '#3b3b3b',
			'rowGap'                 => 20,
			'columnGap'              => 20,
			'titleBottomSpace'       => 15,
			'rowGapMobile'           => 20,
			'columnGapMobile'        => 20,
			'titleBottomSpaceMobile' => 15,
			'rowGapTablet'           => 20,
			'columnGapTablet'        => 20,
			'titleBottomSpaceTablet' => 15,
			'contentPadding'         => 15,
			'contentPaddingMobile'   => 15,
			'contentPaddingTablet'   => 15,
			'listBottomMargin'       => 5,
			'listBottomMarginMobile' => 5,
			'listBottomMarginTablet' => 5,
			'listTopMargin'          => 5,
			'listTopMarginMobile'    => 5,
			'listTopMarginTablet'    => 5,
			'titleFontFamily'        => '',
			'titleFontSize'          => 16,
			'titleFontSizeMobile'    => 14,
			'titleFontSizeTablet'    => 16,
			'titleFontWeight'        => '',
			'titleLineHeight'        => '',
			'titleLineHeightMobile'  => '',
			'titleLineHeightTablet'  => '',
			'countFontFamily'        => '',
			'countFontSize'          => 16,
			'countFontSizeMobile'    => 14,
			'countFontSizeTablet'    => 16,
			'countFontWeight'        => '',
			'countLineHeight'        => '',
			'countLineHeightMobile'  => '',
			'countLineHeightTablet'  => '',
			'gridBorderStyle'        => 'solid',
			'gridBorderWidth'        => 1,
			'gridBorderRadius'       => 0,
			'gridBorderColor'        => '#e0e0e0',
			'boxShadow'              => 'none',
			'boxShadowColor'         => '',
			'boxShadowHOffset'       => '',
			'boxShadowVOffset'       => '',
			'boxShadowBlur'          => '',
			'boxShadowSpread'        => '',
			'boxShadowPosition'      => 'outset',
			'listFontFamily'         => '',
			'listFontSize'           => 16,
			'listFontSizeMobile'     => 14,
			'listFontSizeTablet'     => 16,
			'listFontWeight'         => '',
			'listLineHeight'         => '',
			'listLineHeightMobile'   => '',
			'listLineHeightTablet'   => '',
			'separatorStyle'         => 'solid',
			'separatorColor'         => '#b2b4b5',
			'separatorWidth'         => 1,
			'taxonomyAvailable'      => true,
		);
		$render_code = responsive_block_editor_addons_render_taxonomy_list( $attributes );
		$render_code = preg_replace( '/\s+/', '', $render_code );
		print_r( $render_code );
		$expected = '<divclass="responsive-block-editor-addons-block-taxonomy-listblock-"><divclass="responsive-block-editor-addons-block-list"><ulclass="responsive-block-editor-addons-block-list-wrap"><liclass="responsive-block-editor-addons-block-list-item"><divclass="responsive-block-editor-addons-block-link-wrap"><aclass="responsive-block-editor-addons-block-link"href="http://example.org/?cat=1"><divclass="responsive-block-editor-addons-block-link-name">Uncategorized</div></a><spanclass="responsive-block-editor-addons-block-list-count">(1)</span></div><divclass="responsive-block-editor-addons-block-separator-wrap"><divclass="responsive-block-editor-addons-block-separator"></div></div></li></ul></div></div>';
		$this->assertEquals( $expected, $render_code );
	}

}
