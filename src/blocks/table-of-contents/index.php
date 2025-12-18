<?php
/**
 * Helper function to extract headings from post content for TOC block
 * 
 * Extracts headings from post content using WordPress parse_blocks()
 *
 * @param string $content The post content to extract headings from.
 * @return array The list of headings with level, content, and anchor.
 */
function responsive_block_editor_addons_extract_headings_from_content( $content ) {
	if ( empty( $content ) ) {
		return array();
	}

	$blocks   = parse_blocks( $content );
	$headings = array();

	$extract_from_blocks = function( $blocks ) use ( &$extract_from_blocks, &$headings ) {
		foreach ( $blocks as $block ) {
			// Core heading block
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
			// RBEA Advanced Heading block
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
			// Recursively check inner blocks
			if ( ! empty( $block['innerBlocks'] ) ) {
				$extract_from_blocks( $block['innerBlocks'] );
			}
		}
	};

	$extract_from_blocks( $blocks );
	return $headings;
}

/**
 * Adds data-headings attribute to TOC block wrapper
 */
function responsive_block_editor_addons_add_toc_headings_data( $block_content, $block ) {
	if ( 'responsive-block-editor-addons/table-of-contents' !== $block['blockName'] ) {
		return $block_content;
	}

	global $post;
	if ( ! isset( $post->ID ) || ! $post instanceof WP_Post ) {
		return $block_content;
	}

	// Extract headings from post content
	$headings = responsive_block_editor_addons_extract_headings_from_content( $post->post_content );

	// Filter by allowedAnchors if available
	$allowed = isset( $block['attrs']['allowedAnchors'] ) ? $block['attrs']['allowedAnchors'] : array( 'h1' => true, 'h2' => true, 'h3' => true, 'h4' => true, 'h5' => true, 'h6' => true );
	$filtered = array();
	foreach ( $headings as $h ) {
		if ( isset( $allowed[ 'h' . $h['level'] ] ) && $allowed[ 'h' . $h['level'] ] ) {
			$filtered[] = $h;
		}
	}

	// Add data-headings attribute to the wrapper
	if ( ! empty( $filtered ) ) {
		$headings_json = wp_json_encode( $filtered );
		$block_content = preg_replace(
			'/(<div[^>]*class="responsive-block-editor-addons-toc__wrap"[^>]*)/',
			'$1 data-headings="' . esc_attr( $headings_json ) . '"',
			$block_content,
			1
		);
	}

	return $block_content;
}
add_filter( 'render_block', 'responsive_block_editor_addons_add_toc_headings_data', 10, 2 );