<?php
/**
 * Instagram index.php file
 *
 * @package category
 */

/**
 * Require instagram index.php file
 */
require_once plugin_dir_path( dirname( __FILE__ ) ) . 'src/blocks/instagram/index.php';

/**
 * Test for Instagram frontend function
 *
 * @return void
 */
class Instagram_Index_Test extends WP_UnitTestCase {
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
	 * Dummy user ID.
	 *
	 * @var int
	 */
	protected static $suffix;

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

		self::$suffix = 'test_api_token';

		self::$block_id = $factory->post->create(
			array(
				'post_author'  => self::$user_id,
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Test Block',
				'post_content' => '<!-- wp:responsive-block-editor-addons/instagram --><!-- /wp:responsive-block-editor-addons/instagram -->',
			)
		);
	}

	/**
	 * Delete dummy data after tests run.
	 */
	public static function wpTearDownAfterClass() {
		self::delete_user( self::$user_id );
	}

	/**
	 * Check if transient and options are set on activation
	 */
	public function test_transients() {
		$this->assertFalse( get_transient( 'rbea-instagram-api_' . self::$suffix ) );
		rbea_instagram_data_to_cache( 'test', self::$suffix );
		$activated_transient = rbea_instagram_data_from_cache( self::$suffix );
		$this->assertEquals( 'test', $activated_transient );
	}

	/**
	 * Test if the data is requested from correct api url, with correct method
	 */
	public function test_request_to_correct_url() {
		add_filter( 'pre_http_request', 'pre_http_request_halt_request', 1, 3 );

		$token = self::$suffix;

		try {
			rbea_instagram_fetch_data( "https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token={$token}" );
			$e_data = array();
		} catch ( Exception $e ) {
			$e_data = json_decode( $e->getMessage(), true );
		}

		$this->assertNotEmpty( $e_data );
		$this->assertEquals( 'https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=test_api_token', $e_data['url'] );
		$this->assertEquals( 'GET', $e_data['method'] );
	}

	/**
	 * Function to remove added filter.
	 *
	 * @return void  [desc].
	 */
	public function tearDown() {
		remove_filter( 'pre_http_request', 'pre_http_request_halt_request', 1 );
	}

	/**
	 * Test if the data is received when request is successful
	 */
	public function test_success_of_url() {

		add_filter( 'pre_http_request', 'pre_http_request_mock_success', 1 );

		$token = self::$suffix;

		$result = rbea_instagram_fetch_data( "https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token={$token}" );

		$expected = '{"instagram_posts": "first, second, third"}';

		$this->assertEquals(
			$expected,
			$result
		);

		remove_filter( 'pre_http_request', 'pre_http_request_mock_success', 1 );
	}

	/**
	 * Test conditions when api request is unsucessful
	 */
	public function test_failure_of_url() {
		$token = self::$suffix;

		foreach ( array( 'wp_error', 'not_found', 'empty_response' ) as $condition ) {
			add_filter( 'pre_http_request', 'pre_http_request_mock_' . $condition, 1 );
			$result = rbea_instagram_fetch_data( "https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token={$token}" );

			if ( 'not_found' === $condition ) {
				$this->assertEquals( '__test_not_found_body__', $result );
			} elseif ( 'empty_response' === $condition ) {
				$this->assertEquals( '', $result );
			} else {
				$this->assertFalse( $result );
			}

			remove_filter( 'pre_http_request', 'pre_http_request_mock_' . $condition, 1 );
		}
	}
}
