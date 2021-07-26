<?php
/**
 * Class Responsive_Block_Editor_Addons Test file
 *
 * @package    Responsive_Block_Editor_Addons
 * @subpackage Responsive_Block_Editor_Addons/includes
 * @author     CyberChimps <support@cyberchimps.com>
 */

/**
 * Require activator class
 */
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-responsive-block-editor-addons.php';

/**
 * Class Responsive_Block_Editor_Addons Test
 */
class Responsive_Block_Editor_Addons_Test extends WP_UnitTestCase {
	/**
	 * The Responsive_Block_Editor_Addons class instance .
	 *
	 * @access public
	 * @var    string    $rbea class instance.
	 */
	public static $rbea;

	/**
	 * Setup class instance
	 *
	 * @param class WP_UnitTest_Factory $factory class instance.
	 */
	public static function wpSetUpBeforeClass( WP_UnitTest_Factory $factory ) {
		self::$rbea = new Responsive_Block_Editor_Addons();
	}

	/**
	 * Test for Responsive_Block_Editor_Addons class construtor
	 */
	public function test_responsive_block_editor_addons_constructor() {
		self::$rbea = new Responsive_Block_Editor_Addons();
		$this->assertTrue( self::$rbea instanceof Responsive_Block_Editor_Addons );
		// Check for filter.
		$this->assertTrue( has_filter( 'block_categories_all' ) );
		$this->assertTrue( has_action( 'plugins_loaded' ) );
		$this->assertTrue( has_action( 'init' ) );
		$this->assertTrue( has_action( 'block_categories_all' ) );
		$this->assertTrue( has_action( 'enqueue_block_editor_assets' ) );
		$this->assertTrue( has_action( 'enqueue_block_assets' ) );
		$this->assertTrue( has_action( 'admin_enqueue_scripts' ) );
		$this->assertTrue( has_action( 'admin_init' ) );
		$this->assertTrue( has_action( 'wp_ajax_responsive_block_editor_post_pagination' ) );
		$this->assertTrue( has_action( 'wp_enqueue_scripts' ) );
	}

	/**
	 * Test for plugin name
	 */
	public function test_get_plugin_name() {
		$value = self::$rbea->get_plugin_name();
		$this->assertEquals( 'responsive-block-editor-addons', $value );
	}

	/**
	 * Test for plugin version
	 */
	public function test_get_plugin_version() {
		$value = self::$rbea->get_plugin_version();
		$this->assertEquals( '1.3.0', $value );
	}

	/**
	 * Testing assets for admin are enqueued
	 */
	public function test_responsive_block_editor_addons_admin_enqueue_styles() {
		$this->assertFalse( wp_script_is( 'responsive-block-editor-addons-admin-jsfile' ) );
		$this->assertFalse( wp_style_is( 'responsive-block-editor-addons-admin' ) );
		self::$rbea->responsive_block_editor_addons_admin_enqueue_styles();
		$this->assertTrue( wp_script_is( 'responsive-block-editor-addons-admin-jsfile' ) );
		$this->assertTrue( wp_style_is( 'responsive-block-editor-addons-admin' ) );
	}

	/**
	 * Testing assets for dashicons are enqueued
	 */
	public function test_load_dashicons_front_end() {
		$this->assertFalse( wp_style_is( 'dashicons' ) );
		self::$rbea->load_dashicons_front_end();
		$this->assertTrue( wp_style_is( 'dashicons' ) );
	}

	/**
	 * Testing if included files are required
	 */
	public function test_responsive_block_editor_addons_loader() {
		$check_files = array(
			RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/post-grid/index.php',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/post-carousel/index.php',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/gallery-masonry/index.php',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/accordion/index.php',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/post-timeline/index.php',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/image-slider/index.php',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/testimonial-slider/index.php',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/utils/fonts.php',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'classes/class-responsive-block-editor-addons-frontend-styles-helper.php',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'classes/class-responsive-block-editor-addons-frontend-styles.php',
		);

		$this->assertTrue( ! empty( array_intersect( $check_files, get_included_files() ) ) );
	}

	/**
	 * Test for block categories
	 */
	public function test_responsive_block_editor_addons_add_custom_block_category() {
		$categories          = array( 'fiction', 'non fiction' );
		$expected_categories = array_merge(
			$categories,
			array(
				array(
					'slug'  => 'responsive_block_editor_addons',
					'title' => __( 'Responsive Gutenberg Blocks', 'responsive-block-editor-addons' ),
				),
			)
		);
		$merged_categories   = self::$rbea->responsive_block_editor_addons_add_custom_block_category( $categories );
		$this->assertEquals( $expected_categories, $merged_categories );
	}
}
