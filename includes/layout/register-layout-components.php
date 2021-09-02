<?php
/**
 * Register layouts and sections for the Importer block.
 *
 * @package RBEA\Blocks
 */

namespace RBEA\Blocks\Layouts;

add_action( 'plugins_loaded', __NAMESPACE__ . '\register_components', 11 );
/**
 * Registers section and layout components.
 *
 * @since 1.3.4
 */
function register_components() {
	/**
	 * Scan Patterns directory and auto require all PHP files
	 */
	$pattern_file_paths = glob( dirname( __FILE__ ) . '/../patterns/*.php' );
	foreach ( $pattern_file_paths as $path ) {
		rbea_blocks_register_layout_component( require $path );
	}

	$pattern_file_paths = glob( dirname( __FILE__ ) . '/../patterns/sections/*.php' );
	foreach ( $pattern_file_paths as $path ) {
		$patterns = require $path;
		foreach ( $patterns as $pattern ) {
			rbea_blocks_register_layout_component( $pattern );
		}
	}
}
