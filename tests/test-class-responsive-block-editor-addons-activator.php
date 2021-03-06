<?php
/**
 * Unit test case for plugin activation.
 *
 * @package    Responsive_Block_Editor_Addons
 * @subpackage Responsive_Block_Editor_Addons/includes
 * @author     CyberChimps <support@cyberchimps.com>
 */

/**
 * Require activator class
 */
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-responsive-block-editor-addons-activator.php';

/**
 * Activator class test
 */
class Responsive_Block_Editor_Addons_Activator_Test extends WP_UnitTestCase {
	/**
	 * The Responsive_Block_Editor_Addons_Activator class instance .
	 *
	 * @access public
	 * @var    string    $rbea_activator class instance.
	 */
	public static $rbea_activator;

	/**
	 * Setup instance
	 *
	 * @param class WP_UnitTest_Factory $factory class instance.
	 */
	public static function wpSetUpBeforeClass( WP_UnitTest_Factory $factory ) {
		self::$rbea_activator = new Responsive_Block_Editor_Addons_Activator();
	}

	/**
	 * Check if transient and options are set on activation
	 */
	public function test_check_activator() {
		$this->assertFalse( get_transient( 'responsive_block_editor_addons_activation_redirect' ) );
		$this->assertFalse( get_transient( 'responsive_block_editor_addons_review_pending' ) );
		self::$rbea_activator->activate();
		$activator_transient = get_transient( 'responsive_block_editor_addons_activation_redirect' );
		$this->assertEquals( true, $activator_transient );
		$activator_option = get_option( 'responsive_block_editor_addons_review_pending' );
		$this->assertEquals( '0', $activator_option );
	}
}
