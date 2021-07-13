<?php
/**
 * Unit test case for plugin deactivation.
 *
 * @package    Responsive_Block_Editor_Addons
 * @subpackage Responsive_Block_Editor_Addons/includes
 * @author     CyberChimps <support@cyberchimps.com>
 */

/**
 * Require deactivator class
 */
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-responsive-block-editor-addons-deactivator.php';

/**
 * Class test for deactivator
 */
class Responsive_Block_Editor_Addons_Deactivator_Test extends WP_UnitTestCase {
	/**
	 * The Responsive_Block_Editor_Addons_Deactivator class instance .
	 *
	 * @access public
	 * @var    string    $rbea_activator class instance.
	 */
	public static $rbea_deactivator;

	/**
	 * Setup class instance
	 *
	 * @param class WP_UnitTest_Factory $factory class instance.
	 */
	public static function wpSetUpBeforeClass( WP_UnitTest_Factory $factory ) {
		self::$rbea_deactivator = new Responsive_Block_Editor_Addons_Deactivator();
	}

	/**
	 * Dummy test function
	 */
	public function test_dummy_deactivator() {
		$this->assertTrue( true );
	}
}
