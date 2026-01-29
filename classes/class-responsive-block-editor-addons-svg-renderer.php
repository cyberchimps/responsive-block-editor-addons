<?php
/**
 * SVG Renderer Class
 *
 * Handles dynamic SVG icon rendering from JSON data to bypass WordPress unfiltered_html restrictions.
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class Responsive_Block_Editor_Addons_SVG_Renderer
 */
class Responsive_Block_Editor_Addons_SVG_Renderer {

	/**
	 * Cached icon data from JSON file.
	 *
	 * @var array|null
	 */
	private static $icon_data = null;

	/**
	 * Normalize icon name by removing Font Awesome prefixes.
	 *
	 * @param string $icon_name The icon name with possible prefixes.
	 * @return string Normalized icon name.
	 */
	private static function normalize_icon_name( $icon_name ) {
		if ( empty( $icon_name ) ) {
			return '';
		}

		// Remove Font Awesome prefixes.
		$icon_name = str_replace( 'far ', '', $icon_name );
		$icon_name = str_replace( 'fas ', '', $icon_name );
		$icon_name = str_replace( 'fab ', '', $icon_name );
		$icon_name = str_replace( 'fa-', '', $icon_name );
		$icon_name = str_replace( 'fa ', '', $icon_name );

		return trim( $icon_name );
	}

	/**
	 * Load icon data from JSON file.
	 *
	 * @return array Icon data array.
	 */
	private static function get_icon_data() {
		if ( null !== self::$icon_data ) {
			return self::$icon_data;
		}

		$json_file = RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/ResponsiveBlocksIcon.json';

		if ( ! file_exists( $json_file ) ) {
			self::$icon_data = array();
			return self::$icon_data;
		}

		$json_content = file_get_contents( $json_file );
		if ( false === $json_content ) {
			self::$icon_data = array();
			return self::$icon_data;
		}

		$decoded = json_decode( $json_content, true );
		if ( json_last_error() !== JSON_ERROR_NONE ) {
			self::$icon_data = array();
			return self::$icon_data;
		}

		self::$icon_data = is_array( $decoded ) ? $decoded : array();
		
		// Merge blockquote-specific icons (only add icons that don't already exist to preserve main icons)
		$blockquote_json = RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/blockquote/ResponsiveBlocksQuoteIcon.json';
		if ( file_exists( $blockquote_json ) ) {
			$blockquote_content = file_get_contents( $blockquote_json );
			if ( false !== $blockquote_content ) {
				$blockquote_decoded = json_decode( $blockquote_content, true );
				if ( json_last_error() === JSON_ERROR_NONE && is_array( $blockquote_decoded ) ) {
					// Only add blockquote icons that don't conflict with existing icons
					foreach ( $blockquote_decoded as $icon_key => $icon_data ) {
						if ( ! isset( self::$icon_data[ $icon_key ] ) ) {
							self::$icon_data[ $icon_key ] = $icon_data;
						}
					}
				}
			}
		}
		
		return self::$icon_data;
	}

	/**
	 * Detect icon style (brands or solid) from icon data.
	 *
	 * @param string $icon_name Normalized icon name.
	 * @param array  $icon_data Icon data from JSON.
	 * @return string Style name ('brands' or 'solid').
	 */
	private static function detect_style( $icon_name, $icon_data ) {
		if ( ! isset( $icon_data['svg'] ) ) {
			return 'solid';
		}

		// Check if brands style exists.
		if ( isset( $icon_data['svg']['brands'] ) ) {
			return 'brands';
		}

		// Default to solid.
		if ( isset( $icon_data['svg']['solid'] ) ) {
			return 'solid';
		}

		// Fallback: check styles array.
		if ( isset( $icon_data['styles'] ) && is_array( $icon_data['styles'] ) ) {
			if ( in_array( 'brands', $icon_data['styles'], true ) ) {
				return 'brands';
			}
		}

		return 'solid';
	}

	/**
	 * Render SVG icon from icon name.
	 *
	 * @param string $icon_name Icon name (may include prefixes like "fa-angle-down").
	 * @param string $fill      Fill color (default: 'currentColor').
	 * @return string SVG markup or empty string if icon not found.
	 */
	public static function render( $icon_name, $fill = 'currentColor' ) {
		if ( empty( $icon_name ) ) {
			return '';
		}

		// Normalize icon name.
		$normalized_name = self::normalize_icon_name( $icon_name );

		if ( empty( $normalized_name ) ) {
			return '';
		}

		// Load icon data.
		$all_icons = self::get_icon_data();

		if ( empty( $all_icons ) || ! isset( $all_icons[ $normalized_name ] ) ) {
			return '';
		}

		$icon_data = $all_icons[ $normalized_name ];

		// Detect style (brands or solid).
		$style = self::detect_style( $normalized_name, $icon_data );

		// Get SVG data for the detected style.
		if ( ! isset( $icon_data['svg'][ $style ] ) ) {
			return '';
		}

		$svg_data = $icon_data['svg'][ $style ];

		// Get viewBox.
		if ( ! isset( $svg_data['viewBox'] ) || ! is_array( $svg_data['viewBox'] ) ) {
			return '';
		}

		$viewbox = implode( ' ', $svg_data['viewBox'] );

		// Get path.
		if ( ! isset( $svg_data['path'] ) ) {
			return '';
		}

		$path = $svg_data['path'];

		// Build SVG markup.
		$svg = '<svg viewBox="' . esc_attr( $viewbox ) . '" fill="' . esc_attr( $fill ) . '" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">';
		$svg .= '<path d="' . esc_attr( $path ) . '"></path>';
		$svg .= '</svg>';

		return $svg;
	}
}



