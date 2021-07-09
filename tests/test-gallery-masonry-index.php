<?php
/**
 * Gallery masonry index.php file
 *
 * @package category
 */

/**
 * Require gallery masonry index.php file
 */
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'src/blocks/gallery-masonry/index.php';

/**
 * Gallery masonry frontend assets funciton test
 *
 * @return void
 */
class Gallery_Masonry_Index_Test extends WP_UnitTestCase {
	/**
	 * Created dummy post id.
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
				'post_content' => '<!-- wp:responsive-block-editor-addons/gallery-masonry --><!-- /wp:responsive-block-editor-addons/gallery-masonry -->',
			)
		);
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
		$this->assertGreaterThan( 0, has_action( 'wp_enqueue_scripts', 'responsive_block_editor_addons_gallery_masonry_add_frontend_assets' ) );
	}

	/**
	 * Testing if the_post action exists
	 */
	public function test_the_post_exists() {
		$this->assertGreaterThan( 0, has_action( 'the_post', 'responsive_block_editor_addons_gallery_masonry_add_frontend_assets' ) );
	}

	/**
	 * Testing if script from index.php is enqueued
	 */
	public function test_responsive_block_editor_addons_gallery_masonry_add_frontend_assets() {
		$this->assertFalse( wp_script_is( 'responsive_block_editor_addons-gallery-masonry-front-script' ) );
		$this->assertFalse( wp_script_is( 'responsive_block_editor_addons-gallery-masonry-front-script' ) );
		responsive_block_editor_addons_gallery_masonry_add_frontend_assets();
		$this->assertFalse( has_block( 'responsive-block-editor-addons/gallery-masonry' ) );
		global $post;
		$post = get_post( self::$block_id );
		$this->assertTrue( has_block( 'responsive-block-editor-addons/gallery-masonry' ) );
		responsive_block_editor_addons_gallery_masonry_add_frontend_assets();
		$this->assertTrue( wp_script_is( 'responsive_block_editor_addons-gallery-masonry-front-script' ) );
		$this->assertTrue( wp_script_is( 'responsive_block_editor_addons-gallery-masonry-lightbox' ) );
	}
}


