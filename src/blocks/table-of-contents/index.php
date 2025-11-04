<?php
/**
 * Server-side rendering for the Table of Contents block
 *
 * @since   1.0.0
 * @package Responsive Blocks
 */

/**
 * Extracts headings from post content
 *
 * @param string $content The post content to extract headings from.
 * @return array The list of headings.
 */
function responsive_block_editor_addons_extract_headings_from_content( $content ) {
	if ( empty( $content ) ) {
		return array();
	}

	// Create a document to load the post content into.
	$doc = new DOMDocument( '1.0', 'UTF-8' );

	// Enable user error handling for HTML parsing.
	libxml_use_internal_errors( true );

	// Parse the post content into an HTML document.
	$doc->loadHTML(
		'<html><head><meta charset="UTF-8"></head><body>' . $content . '</body></html>'
	);

	// We're done parsing, disable user error handling.
	libxml_use_internal_errors( false );

	if ( ! isset( $doc->documentElement ) || ! is_object( $doc->documentElement ) ) {
		return array();
	}

	// Remove template elements (they can contain headings we don't want).
	$templates = iterator_to_array(
		$doc->documentElement->getElementsByTagName( 'template' )
	);

	foreach ( $templates as $template ) {
		if ( $template->parentNode ) {
			$template->parentNode->removeChild( $template );
		}
	}

	$xpath = new DOMXPath( $doc );

	// Get all heading elements (h1-h6).
	$headings = iterator_to_array(
		$xpath->query( '//*[self::h1 or self::h2 or self::h3 or self::h4 or self::h5 or self::h6]' )
	);

	$heading_list = array();

	foreach ( $headings as $heading ) {
		// Get heading text content.
		$text_content = wp_strip_all_tags( $heading->textContent );

		// Skip empty headings.
		if ( empty( trim( $text_content ) ) ) {
			continue;
		}

		// Get heading level (h1 = 1, h2 = 2, etc.).
		$level = (int) substr( $heading->nodeName, 1 );

		// Create slug from heading text.
		$slug = responsive_block_editor_addons_slugify_heading( $text_content );

		$heading_list[] = array(
			'level'   => $level,
			'content' => $text_content,
			'anchor'  => $slug,
		);
	}

	return $heading_list;
}

/**
 * Creates a slug from heading text
 *
 * @param string $text The heading text.
 * @return string The slug.
 */
function responsive_block_editor_addons_slugify_heading( $text ) {
	// Remove control characters.
	$slug = preg_replace( '/[\x00-\x1F\x7F]*/u', '', $text );
	// Replace HTML entities with spaces.
	$slug = str_replace( array( '&amp;', '&nbsp;' ), ' ', $slug );
	// Remove all except alphabets, numbers, space, hyphen, underscore, and latin characters.
	$slug = preg_replace( '/[^a-zA-Z0-9\p{L} _-]/u', '', $slug );
	// Convert spaces to hyphens.
	$slug = preg_replace( '/\s+/', '-', $slug );
	// Replace multiple underscores with single hyphen.
	$slug = preg_replace( '/_+/', '-', $slug );
	// Replace multiple hyphens with single hyphen.
	$slug = preg_replace( '/-+/', '-', $slug );
	// Remove trailing hyphens and underscores.
	$slug = trim( $slug, '-_' );

	// If slug is empty, generate a unique one.
	if ( empty( $slug ) ) {
		$slug = 'toc_' . uniqid();
	}

	return mb_strtolower( $slug );
}

/**
 * Renders the Table of Contents block
 *
 * @param array   $attributes Block attributes.
 * @param string  $content    Block default content.
 * @param WP_Block $block      Block instance.
 * @return string Rendered block HTML.
 */
function responsive_block_editor_addons_render_table_of_contents( $attributes, $content, $block ) {
	global $post;

	if ( ! isset( $post->ID ) ) {
		return '';
	}

	// Get post content.
	$post_content = '';
	if ( $post instanceof WP_Post ) {
		$post_content = $post->post_content;
	}

	// Extract headings from post content.
	$headings = responsive_block_editor_addons_extract_headings_from_content( $post_content );

	// Filter headings based on allowedAnchors setting.
	$allowed_anchors = isset( $attributes['allowedAnchors'] ) ? $attributes['allowedAnchors'] : array(
		'h1' => true,
		'h2' => true,
		'h3' => true,
		'h4' => true,
		'h5' => true,
		'h6' => true,
	);

	$filtered_headings = array();
	foreach ( $headings as $heading ) {
		$level_key = 'h' . $heading['level'];
		if ( isset( $allowed_anchors[ $level_key ] ) && $allowed_anchors[ $level_key ] ) {
			$filtered_headings[] = $heading;
		}
	}

	// Get block attributes with defaults.
	$block_id       = isset( $attributes['block_id'] ) ? $attributes['block_id'] : 'not-set';
	$align          = isset( $attributes['align'] ) ? $attributes['align'] : 'left';
	$heading_title  = isset( $attributes['headingTitle'] ) ? $attributes['headingTitle'] : __( 'Table Of Contents', 'responsive-block-editor-addons' );
	$is_collapsible = isset( $attributes['isCollapsible'] ) ? $attributes['isCollapsible'] : false;
	$initial_collapse = isset( $attributes['initialCollapse'] ) ? $attributes['initialCollapse'] : false;
	$icon           = isset( $attributes['icon'] ) ? $attributes['icon'] : 'fa-angle-down';
	$t_columns      = isset( $attributes['tColumnsDesktop'] ) ? $attributes['tColumnsDesktop'] : 1;
	$table_type     = isset( $attributes['tableType'] ) ? $attributes['tableType'] : 'unordered';
	$order_list_type = isset( $attributes['orderListType'] ) ? $attributes['orderListType'] : 'number';
	$scroll_offset   = isset( $attributes['scrollOffset'] ) ? $attributes['scrollOffset'] : 30;
	$section_html_tag = isset( $attributes['sectionHtmlTag'] ) ? $attributes['sectionHtmlTag'] : 'div';
	$background_type = isset( $attributes['backgroundType'] ) ? $attributes['backgroundType'] : 'none';
	$background_video = isset( $attributes['backgroundVideo'] ) ? $attributes['backgroundVideo'] : null;

	// Build class names.
	$class_names = array(
		'responsive-block-editor-addons-toc__align-' . esc_attr( $align ),
		'responsive-block-editor-addons-toc__columns-' . esc_attr( $t_columns ),
		'responsive-block-editor-addons-block-table-of-contents',
		'block-' . esc_attr( $block_id ),
	);

	if ( $initial_collapse ) {
		$class_names[] = 'responsive-block-editor-addons-toc__collapse';
	}

	if ( isset( $attributes['className'] ) ) {
		$class_names[] = esc_attr( $attributes['className'] );
	}

	$wrapper_tag = 'div';
	if ( 'footer' === $section_html_tag ) {
		$wrapper_tag = 'footer';
	} elseif ( 'section' === $section_html_tag ) {
		$wrapper_tag = 'section';
	}

	// Encode headings as JSON for data attribute.
	$headings_json = wp_json_encode( $filtered_headings );

	ob_start();
	?>
	<<?php echo esc_attr( $wrapper_tag ); ?> class="<?php echo esc_attr( implode( ' ', $class_names ) ); ?>">
		<?php if ( 'video' === $background_type && $background_video && isset( $background_video['url'] ) ) : ?>
			<div class="responsive-block-editor-addons-toc__video-wrap">
				<video autoplay loop muted playsinline>
					<source src="<?php echo esc_url( $background_video['url'] ); ?>" type="video/mp4" />
				</video>
			</div>
		<?php endif; ?>
		<div 
			class="responsive-block-editor-addons-toc__wrap" 
			data-scroll-offset="<?php echo esc_attr( $scroll_offset ); ?>"
			data-table-type="<?php echo esc_attr( $table_type === 'ordered' ? 'ordered' : 'unordered' ); ?>"
			data-order-list-type="<?php echo esc_attr( $order_list_type ); ?>"
			data-allowed-anchors="<?php echo esc_attr( wp_json_encode( $allowed_anchors ) ); ?>"
			data-headings="<?php echo esc_attr( $headings_json ); ?>">
			<div class="responsive-block-editor-addons-toc__title-wrap">
				<div class="responsive-block-editor-addons-toc__title">
					<?php echo wp_kses_post( $heading_title ); ?>
				</div>
				<?php if ( $is_collapsible && $icon ) : ?>
					<span class="responsive-block-editor-addons-toc__collapsible-wrap">
						<span class="responsive-block-editor-addons-toc__collapsible-icon">
							<!-- Icon will be rendered by frontend.js -->
						</span>
					</span>
				<?php endif; ?>
			</div>
			<div class="responsive-block-editor-addons-toc__list-wrap">
				<!-- List will be built by frontend.js using data-headings -->
			</div>
		</div>
	</<?php echo esc_attr( $wrapper_tag ); ?>>
	<?php
	return ob_get_clean();
}

/**
 * Registers the Table of Contents block on server
 */
function responsive_block_editor_addons_register_table_of_contents() {
	/* Check if the register function exists */
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	/* Block attributes - we need to define all attributes here for PHP render */
	register_block_type(
		'responsive-block-editor-addons/table-of-contents',
		array(
			'render_callback' => 'responsive_block_editor_addons_render_table_of_contents',
		)
	);
}
add_action( 'init', 'responsive_block_editor_addons_register_table_of_contents' );

