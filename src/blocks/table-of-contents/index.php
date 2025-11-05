<?php
/**
 * Server-side rendering for the Table of Contents block
 *
 * @since   1.0.0
 * @package Responsive Blocks
 */

/**
 * Extracts headings from post content using WordPress parse_blocks()
 *
 * @param string $content The post content to extract headings from.
 * @return array The list of headings.
 */
function responsive_block_editor_addons_extract_headings_from_content( $content ) {
	if ( empty( $content ) ) {
		return array();
	}

	$blocks   = parse_blocks( $content );
	$headings = array();

	$extract_from_blocks = function( $blocks ) use ( &$extract_from_blocks, &$headings ) {
		foreach ( $blocks as $block ) {
			if ( 'core/heading' === $block['blockName'] ) {
				$level   = isset( $block['attrs']['level'] ) ? $block['attrs']['level'] : 2;
				$content = wp_strip_all_tags( $block['innerHTML'] );
				if ( ! empty( trim( $content ) ) ) {
					$headings[] = array(
						'level'   => $level,
						'content' => $content,
						'anchor'  => sanitize_title( $content ) ?: 'toc-' . uniqid(),
					);
				}
			}
			if ( 'responsive-block-editor-addons/advanced-heading' === $block['blockName'] ) {
				$level   = isset( $block['attrs']['headingLevel'] ) ? $block['attrs']['headingLevel'] : 2;
				$content = isset( $block['attrs']['headingTitle'] ) ? wp_strip_all_tags( $block['attrs']['headingTitle'] ) : wp_strip_all_tags( $block['innerHTML'] );
				if ( ! empty( trim( $content ) ) ) {
					$headings[] = array(
						'level'   => $level,
						'content' => $content,
						'anchor'  => sanitize_title( $content ) ?: 'toc-' . uniqid(),
					);
				}
			}
			if ( ! empty( $block['innerBlocks'] ) ) {
				$extract_from_blocks( $block['innerBlocks'] );
			}
		}
	};

	$extract_from_blocks( $blocks );
	return $headings;
}

/**
 * Renders the TOC list HTML from headings array
 *
 * @param array $headings Array of headings.
 * @param array $attributes Block attributes.
 * @return string Rendered list HTML.
 */
function responsive_block_editor_addons_render_toc_list( $headings, $attributes ) {
	if ( empty( $headings ) ) {
		return '<p class="responsive-block-editor-addons_table-of-contents-placeholder">' . esc_html__( 'Add a header to begin generating the table of contents', 'responsive-block-editor-addons' ) . '</p>';
	}

	$table_type = isset( $attributes['tableType'] ) && 'ordered' === $attributes['tableType'] ? 'ol' : 'ul';
	$order_list_type = isset( $attributes['orderListType'] ) ? esc_attr( $attributes['orderListType'] ) : 'number';
	$list_class = 'responsive-block-editor-addons-toc__list rbea-' . $order_list_type;

	$html = '<' . $table_type . ' class="' . $list_class . '">';
	$last_level = 0;
	$current_level = 0;

	foreach ( $headings as $i => $heading ) {
		$level = $heading['level'];
		$anchor = $heading['anchor'];
		$content = esc_html( $heading['content'] );

		// Add number prefix if not present
		if ( ! preg_match( '/^\d+-/', $anchor ) ) {
			$anchor = ( $i + 1 ) . '-' . $anchor;
		}

		if ( $i === 0 ) {
			$current_level = $level;
		}

		// Close lists when going up levels
		if ( $level < $current_level ) {
			$html .= str_repeat( '</li></ul>', $current_level - $level );
			$current_level = $level;
		}

		// Open nested list when going down levels
		if ( $level > $current_level ) {
			$html .= str_repeat( '<ul class="child-list rbea-' . $order_list_type . '">', $level - $current_level );
			$current_level = $level;
		}

		$html .= '<li><a href="#' . esc_attr( $anchor ) . '">' . $content . '</a></li>';
		$last_level = $level;
	}

	// Close remaining nested lists
	if ( $current_level > 0 ) {
		$html .= str_repeat( '</li></ul>', $current_level );
	}

	$html .= '</' . $table_type . '>';
	return $html;
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

	if ( ! isset( $post->ID ) || ! $post instanceof WP_Post ) {
		return '';
	}

	// Extract headings from post content (not from editor context)
	$headings = responsive_block_editor_addons_extract_headings_from_content( $post->post_content );

	// Filter by allowedAnchors
	$allowed = isset( $attributes['allowedAnchors'] ) ? $attributes['allowedAnchors'] : array( 'h1' => true, 'h2' => true, 'h3' => true, 'h4' => true, 'h5' => true, 'h6' => true );
	$filtered = array();
	foreach ( $headings as $h ) {
		if ( isset( $allowed[ 'h' . $h['level'] ] ) && $allowed[ 'h' . $h['level'] ] ) {
			$filtered[] = $h;
		}
	}

	// Get block attributes
	$block_id = isset( $attributes['block_id'] ) ? $attributes['block_id'] : 'not-set';
	$align = isset( $attributes['align'] ) ? $attributes['align'] : 'left';
	$heading_title = isset( $attributes['headingTitle'] ) ? $attributes['headingTitle'] : __( 'Table Of Contents', 'responsive-block-editor-addons' );
	$is_collapsible = isset( $attributes['isCollapsible'] ) ? $attributes['isCollapsible'] : false;
	$initial_collapse = isset( $attributes['initialCollapse'] ) ? $attributes['initialCollapse'] : false;
	$icon = isset( $attributes['icon'] ) ? $attributes['icon'] : 'fa-angle-down';
	$t_columns = isset( $attributes['tColumnsDesktop'] ) ? $attributes['tColumnsDesktop'] : 1;
	$scroll_offset = isset( $attributes['scrollOffset'] ) ? $attributes['scrollOffset'] : 30;
	$section_html_tag = isset( $attributes['sectionHtmlTag'] ) ? $attributes['sectionHtmlTag'] : 'div';
	$background_type = isset( $attributes['backgroundType'] ) ? $attributes['backgroundType'] : 'none';
	$background_video = isset( $attributes['backgroundVideo'] ) ? $attributes['backgroundVideo'] : null;

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
			data-scroll-offset="<?php echo esc_attr( $scroll_offset ); ?>">
			<div class="responsive-block-editor-addons-toc__title-wrap">
				<div class="responsive-block-editor-addons-toc__title">
					<?php echo wp_kses_post( $heading_title ); ?>
				</div>
				<?php if ( $is_collapsible && $icon ) : ?>
					<span class="responsive-block-editor-addons-toc__collapsible-wrap">
						<span class="responsive-block-editor-addons-toc__collapsible-icon">
							<!-- Icon rendered by frontend.js -->
						</span>
					</span>
				<?php endif; ?>
			</div>
			<div class="responsive-block-editor-addons-toc__list-wrap">
				<?php echo wp_kses_post( responsive_block_editor_addons_render_toc_list( $filtered, $attributes ) ); ?>
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
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type(
		'responsive-block-editor-addons/table-of-contents',
		array(
			'render_callback' => 'responsive_block_editor_addons_render_table_of_contents',
		)
	);
}
add_action( 'init', 'responsive_block_editor_addons_register_table_of_contents' );

