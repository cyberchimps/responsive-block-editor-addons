<?php
/**
 * PHPUnit bootstrap file.
 *
 * @package Responsive_Gutenberg_Addons
 */

$_tests_dir = getenv( 'WP_TESTS_DIR' );

if ( ! $_tests_dir ) {
	$_tests_dir = rtrim( sys_get_temp_dir(), '/\\' ) . '/wordpress-tests-lib';
}

if ( ! file_exists( "{$_tests_dir}/includes/functions.php" ) ) {
	echo "Could not find {$_tests_dir}/includes/functions.php, have you run bin/install-wp-tests.sh ?" . PHP_EOL; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	exit( 1 );
}

// Give access to tests_add_filter() function.
require_once "{$_tests_dir}/includes/functions.php";

/**
 * Manually load the plugin being tested.
 */
function _manually_load_plugin() {
	require dirname( dirname( __FILE__ ) ) . '/responsive-block-editor-addons.php';
}

tests_add_filter( 'muplugins_loaded', '_manually_load_plugin' );

/*
* Load PHPUnit Polyfills for the WP testing suite.
* @see https://github.com/WordPress/wordpress-develop/pull/1563/
*/
define( 'WP_TESTS_PHPUNIT_POLYFILLS_PATH', dirname( dirname( __FILE__ ) ) . '/vendor/yoast/phpunit-polyfills/phpunitpolyfills-autoload.php' );

// Start up the WP testing environment.
require "{$_tests_dir}/includes/bootstrap.php";

/**
 * Function to check api url.
 *
 * @param object $preempt Preempt.
 * @param array  $args Array of arguments.
 * @param String $url url of api.
 * @throws \Exception Throws exception.
 * @return void [description].
 */
function pre_http_request_halt_request( $preempt, $args, $url ) {
	throw new \Exception(
		wp_json_encode(
			array(
				'url'     => $url,
				'method'  => $args['method'],
				'headers' => $args['headers'],
				'body'    => json_decode( $args['body'], true ),
				'preempt' => $preempt,
			)
		)
	);
}

/**
 * Function to check api success.
 *
 * @return array response and body.
 */
function pre_http_request_mock_success() {
	return array(
		'response' => array( 'code' => 200 ),
		'body'     => '{"instagram_posts": "first, second, third"}',
	);
}

/**
 * Function to check api error.
 *
 * @return array erro.
 */
function pre_http_request_mock_wp_error() {
	return new WP_Error( '__test_wp_error_message__' );
}

/**
 * Function to check api failure 404.
 *
 * @return array response code and body.
 */
function pre_http_request_mock_not_found() {
	return array(
		'response' => array( 'code' => 404 ),
		'body'     => '__test_not_found_body__',
	);
}

/**
 * Function to check api empty response.
 *
 * @return array response and body.
 */
function pre_http_request_mock_empty_response() {
	return array(
		'response' => array( 'code' => 200 ),
		'body'     => '',
	);
}
