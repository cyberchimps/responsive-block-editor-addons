<?php
/**
 * Image slider index.php file
 *
 * @package category
 */

/**
 * Require image-slider index.php file
 */
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'src/blocks/image-slider/index.php';

/**
 * Image Slider frontend assets funciton test
 *
 * @return void
 */
class Image_Slider_Index_Test extends WP_UnitTestCase {
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
				'post_content' => '<!-- wp:responsive-block-editor-addons/image-slider --><!-- /wp:responsive-block-editor-addons/image-slider -->',
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
	 * Testing if script from index.php is enqueued
	 */
	public function test_responsive_block_editor_addons_image_slider_add_frontend_assets() {
		$this->assertFalse( wp_script_is( 'responsive_block_editor_addons-image-slider-front-script' ) );
		$this->assertFalse( wp_script_is( 'responsive_block_editor_addons-image-slider-lightbox' ) );
		responsive_block_editor_addons_image_slider_add_frontend_assets();
		$this->assertFalse( has_block( 'responsive-block-editor-addons/image-slider' ) );
		global $post;
		$post = get_post( self::$block_id );
		$this->assertTrue( has_block( 'responsive-block-editor-addons/image-slider' ) );
		responsive_block_editor_addons_image_slider_add_frontend_assets();
		$this->assertTrue( wp_script_is( 'responsive_block_editor_addons-image-slider-front-script' ) );
		$this->assertTrue( wp_script_is( 'responsive_block_editor_addons-image-slider-lightbox' ) );
	}
}
