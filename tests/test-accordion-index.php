<?php
/**
 * Accordion index.php file
 *
 * @package category
 */

/**
 * Require accordion index.php file
 */
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'src/blocks/accordion/index.php';

/**
 * Accordion frontend assets funciton test
 *
 * @return void
 */
class Accordion_Index_Test extends WP_UnitTestCase {
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
				'post_content' => '<!-- wp:responsive-block-editor-addons/accordion --><!-- /wp:responsive-block-editor-addons/accordion -->',
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
		$this->assertGreaterThan( 0, has_action( 'wp_enqueue_scripts', 'responsive_block_editor_addons_accordion_add_frontend_assets' ) );
	}

	/**
	 * Testing add action
	 */
	public function test_add_action() {
		$this->assertTrue( add_action( 'wp_enqueue_scripts', 'responsive_block_editor_addons_accordion_add_frontend_assets' ) );
	}

	/**
	 * Testing if script from index.php is enqueued
	 */
	public function test_responsive_block_editor_addons_accordion_add_frontend_assets() {
		$this->assertFalse( wp_script_is( 'responsive_block_editor_addons-accordion-front-script' ) );
		responsive_block_editor_addons_accordion_add_frontend_assets();
		$this->assertFalse( has_block( 'responsive-block-editor-addons/accordion' ) );
		global $post;
		$post = get_post( self::$block_id );
		$this->assertTrue( has_block( 'responsive-block-editor-addons/accordion' ) );
		responsive_block_editor_addons_accordion_add_frontend_assets();
		$this->assertTrue( wp_script_is( 'responsive_block_editor_addons-accordion-front-script' ) );
	}
}


