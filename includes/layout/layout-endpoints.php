<?php
/**
 * REST API Endpoints for Sections and Layouts.
 *
 * @package RBEA\Blocks
 */

namespace RBEA\Blocks\Layouts;

use \WP_REST_Response;
use \WP_REST_Server;

require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . '/includes/layout/class-rbea-block-templates.php';

const RBEA_API_NAMESPACE = 'rbeablocks/v1';

const LAYOUTS_ROUTE       = 'layouts';
const SINGLE_LAYOUT_ROUTE = 'layouts/([A-Za-z])\w+/';

const SECTIONS_ROUTE       = 'sections';
const SINGLE_SECTION_ROUTE = 'sections/([A-Za-z])\w+/';

const FAVORITE_LAYOUTS_ROUTE = 'layouts/favorites';
const ALL_LAYOUTS_ROUTE      = 'layouts/all';

const IMPORT_CONTENT = 'import';

add_action( 'rest_api_init', __NAMESPACE__ . '\register_layout_endpoints' );
/**
 * Create custom endpoints for block settings
 */
function register_layout_endpoints() {

	/**
	 * Register the favorites GET endpoint.
	 *
	 * Note: Keep this route before the other routes
	 * otherwise they may override this one.
	 */
	register_rest_route(
		RBEA_API_NAMESPACE,
		FAVORITE_LAYOUTS_ROUTE,
		array(
			'methods'             => WP_REST_Server::READABLE,
			'callback'            => function () {
				return new WP_REST_Response( (array) get_user_meta( get_current_user_id(), 'rbea_blocks_favorite_layouts', true ) );
			},
			'permission_callback' => function () {
				return current_user_can( 'edit_posts' );
			},
		)
	);

	/**
	 * Register the layouts GET endpoint
	 * that combines all sections, layouts,
	 * and additional layouts.
	 */
	register_rest_route(
		RBEA_API_NAMESPACE,
		ALL_LAYOUTS_ROUTE,
		array(
			'methods'             => WP_REST_Server::READABLE,
			'callback'            => function ( \WP_REST_Request $request ) {

				$layouts            = rbea_blocks_get_layouts();
				$sections           = rbea_blocks_get_sections();
				$additional_layouts = apply_filters( 'rbea_blocks_additional_layout_components', array() );
				$all_layouts        = array_merge( $layouts, $sections, $additional_layouts );
				$request_params     = $request->get_params();

				// Return all layouts if filtering was not requested. "allowed" is the only filter currently supported.
				if ( empty( $request_params['filter'] ) || 'allowed' !== $request_params['filter'] ) {
					return new WP_REST_Response( $all_layouts );
				}

				/**
				 * Filters the list of sections and layouts allowed to show in the layouts library.
				 *
				 * @since 2.5.0
				 *
				 * @param array $all_layouts Array of unique layout keys allowed. Defaults to all layouts.
				 */
				$allowed_layouts = (array) apply_filters( 'rbea_blocks_allowed_layout_components', array_keys( $all_layouts ) );

				if ( empty( $allowed_layouts ) ) {
					return new WP_REST_Response( array() );
				}

				$filtered_layouts = array();

				foreach ( $all_layouts as $key => $layout ) {
					if ( in_array( $key, $allowed_layouts, true ) ) {
						$filtered_layouts[ $key ] = $layout;
					}
				}

				return new WP_REST_Response( $filtered_layouts );
			},
			'permission_callback' => function () {
				return current_user_can( 'edit_posts' );
			},
		)
	);

	/**
	 * Register the layouts GET endpoint.
	 * Returns all registered layouts.
	 */
	register_rest_route(
		RBEA_API_NAMESPACE,
		LAYOUTS_ROUTE,
		array(
			'methods'             => WP_REST_Server::READABLE,
			'callback'            => function () {
				return new WP_REST_Response( (array) rbea_blocks_get_layouts() );
			},
			'permission_callback' => function () {
				return current_user_can( 'edit_posts' );
			},
		)
	);

	/**
	 * Register the single layout GET endpoint.
	 * Returns a single requested layout.
	 */
	register_rest_route(
		RBEA_API_NAMESPACE,
		SINGLE_LAYOUT_ROUTE,
		array(
			'methods'             => WP_REST_Server::READABLE,
			'callback'            => function ( $request ) {
				$route      = $request->get_route();
				$layout_key = substr( strrchr( $route, '/' ), 1 );
				$layouts    = rbea_blocks_get_layouts();
				if ( isset( $layouts[ $layout_key ] ) ) {
					return new WP_REST_Response( $layouts[ $layout_key ] );
				}

				return new WP_REST_Response( esc_html__( 'Layout not found.', 'responsive-block-editor-addons' ) );
			},
			'permission_callback' => function () {
				return current_user_can( 'edit_posts' );
			},
		)
	);

	/**
	 * Register the favorites update endpoint.
	 */
	register_rest_route(
		RBEA_API_NAMESPACE,
		FAVORITE_LAYOUTS_ROUTE,
		array(
			'methods'             => 'PATCH',
			'callback'            => function ( $request ) {

				$body      = json_decode( $request->get_body(), true );
				$new       = sanitize_key( $body['rbea_blocks_favorite_key'] );
				$favorites = (array) get_user_meta( get_current_user_id(), 'rbea_blocks_favorite_layouts', true );

				if ( in_array( $new, $favorites, true ) ) {
					return new WP_REST_Response( $favorites );
				}

				if ( empty( $favorites[0] ) ) {
					$favorites = array( $new );
				} else {
					$favorites[] = $new;
				}

				update_user_meta( get_current_user_id(), 'rbea_blocks_favorite_layouts', array_values( $favorites ) );

				return new WP_REST_Response( (array) get_user_meta( get_current_user_id(), 'rbea_blocks_favorite_layouts', true ) );
			},
			'permission_callback' => function () {
				return current_user_can( 'edit_posts' );
			},
		)
	);

	/**
	 * Register the favorites delete endpoint.
	 */
	register_rest_route(
		RBEA_API_NAMESPACE,
		FAVORITE_LAYOUTS_ROUTE,
		array(
			'methods'             => 'DELETE',
			'callback'            => function ( $request ) {

				$body      = json_decode( $request->get_body(), true );
				$delete_id = sanitize_key( $body['rbea_blocks_favorite_key'] );
				$favorites = (array) get_user_meta( get_current_user_id(), 'rbea_blocks_favorite_layouts', true );

				if ( ! in_array( $delete_id, $favorites, true ) ) {
					return new WP_REST_Response( $favorites );
				}

				$position = array_search( $delete_id, $favorites, true );

				unset( $favorites[ $position ] );

				update_user_meta( get_current_user_id(), 'rbea_blocks_favorite_layouts', array_values( $favorites ) );

				return new WP_REST_Response( (array) get_user_meta( get_current_user_id(), 'rbea_blocks_favorite_layouts', true ) );
			},
			'permission_callback' => function () {
				return current_user_can( 'edit_posts' );
			},
		)
	);

	/**
	 * Register the sections GET endpoint.
	 * Returns all registered sections.
	 */
	register_rest_route(
		RBEA_API_NAMESPACE,
		SECTIONS_ROUTE,
		array(
			'methods'             => WP_REST_Server::READABLE,
			'callback'            => function () {
				return new WP_REST_Response( (array) rbea_blocks_get_sections() );
			},
			'permission_callback' => function () {
				return current_user_can( 'edit_posts' );
			},
		)
	);

	/**
	 * Register the layouts GET endpoint.
	 * Returns content with local image links to downloaded images.
	 */
	register_rest_route(
		RBEA_API_NAMESPACE,
		IMPORT_CONTENT,
		array(
			'methods'             => 'PATCH',
			'callback'            => function ( $request ) {
				$body      = json_decode( $request->get_body(), true );
				$content       = $body['pattern_content'];

				$modified_content = do_action( 'wp_ajax_rbea_block_templates_import_block', $content );
				return new WP_REST_Response( $modified_content );
			},
			'permission_callback' => function () {
				return current_user_can( 'edit_posts' );
			},
		)
	);
}
