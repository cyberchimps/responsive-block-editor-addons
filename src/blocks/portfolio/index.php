<?php
/**
 * Server-side rendering for the post grid block
 *
 * @since   1.0.0
 * @package Responsive Blocks
 */

/**
 * Renders the post grid block on server.
 *
 * @param string $attributes  Pass the block attributes.
 * @return string HTML content for the post grid.
 */
function responsive_block_editor_addons_render_block_core_latest_posts_portfolio( $attributes ) {

	/**
	* Global post object.
	* Used for excluding the current post from the grid.
	*
	* @var WP_Post
	*/
	global $post;
	$categories = isset( $attributes['categories'] ) ? $attributes['categories'] : '';

	/* Setup the query */
	$grid_query = array(
		'posts_per_page'      => $attributes['postsToShow'],
		'post_status'         => 'publish',
		'order'               => $attributes['order'],
		'orderby'             => $attributes['orderBy'],
		'offset'              => $attributes['offset'],
		'post_type'           => $attributes['postType'],
		'ignore_sticky_posts' => 1,
		'post__not_in'        => array( $post->ID ), // Exclude the current post from the grid.
		'paged'               => 1,
	);

	if ( get_query_var( 'paged' ) ) {

		$paged = get_query_var( 'paged' );

		$grid_query['offset'] = ( $paged - 1 ) * $attributes['postsToShow'];

	} elseif ( get_query_var( 'page' ) ) {

		$paged = get_query_var( 'page' );

		$grid_query['offset'] = ( $paged - 1 ) * $attributes['postsToShow'];

	} else {

		$paged = 1;

	}
	$grid_query['paged'] = $paged;

	if ( isset( $attributes['categories'] ) && '' !== $attributes['categories'] ) {
		$grid_query['tax_query'][] = array(
			'taxonomy' => ( isset( $attributes['taxonomyType'] ) ) ? $attributes['taxonomyType'] : 'category',
			'field'    => 'id',
			'terms'    => $attributes['categories'],
			'operator' => 'IN',
		);
	}

	$post_grid_markup = '';

	$grid_query = new WP_Query( $grid_query );

	/* Start the loop */
	if ( $grid_query->have_posts() ) {

		while ( $grid_query->have_posts() ) {
			$grid_query->the_post();

			/* Setup the post ID */
			$post_id = get_the_ID();

			/* Setup the featured image ID */
			$post_thumb_id = get_post_thumbnail_id( $post_id );

			/* Setup the post classes */
			$post_classes = 'responsive-block-editor-addons-portfolio-item';

			/* Add sticky class */
			if ( is_sticky( $post_id ) ) {
				$post_classes .= ' sticky';
			} else {
				$post_classes .= null;
			}

			/* Join classes together */
			$post_classes = join( ' ', get_post_class( $post_classes, $post_id ) );

			$post_thumb_size = 'full';

			if ( ! empty( $attributes['imageSize'] ) ) {
				$post_thumb_size = $attributes['imageSize'];
			}

			$wrapper_styles = '';

			/* Background styles. */
			if ( ! empty( $attributes['bgColor'] ) ) {
				$wrapper_styles .= 'background-image:' . ( 'background' === $attributes['imagePosition'] ? 'url(' . wp_get_attachment_image_url( $post_thumb_id, $post_thumb_size ) . ' )' : 'none' ) . ';';
			}

			/* Post Grid wrapper styles. */
			if ( ! empty( $wrapper_styles ) ) {
				$wrapper_style = $wrapper_styles;
			} else {
				$wrapper_style = null;
			}

			/* Start the markup for the post */
			$post_grid_markup .= sprintf(
				'<article id="post-%1$s" class="%2$s" style="' . safecss_filter_attr( $wrapper_style ) . '">',
				esc_attr( $post_id ),
				esc_attr( $post_classes )
			);

            /* Get the post title */
            $title = get_the_title( $post_id );

            if ( ! $title ) {
                $title = __( 'Untitled', 'responsive-block-editor-addons' );
            }

            if ( isset( $attributes['displayPostTitle'] ) && $attributes['displayPostTitle'] ) {

                if (isset($attributes['postTitleTag'])) {
                    $post_title_tag = $attributes['postTitleTag'];
                } else {
                    $post_title_tag = 'h2';
                }
            }

			/* Get the featured image */
			if ( isset( $attributes['displayPostImage'] ) && $attributes['displayPostImage'] && $post_thumb_id ) {

				if ( ! empty( $attributes['imagePosition'] && 'background' !== $attributes['imagePosition'] ) ) {
					/* Output the featured image */
					$post_grid_markup .= sprintf(
						'<a href="%1$s" rel="bookmark" aria-hidden="true" tabindex="-1"><div class="responsive-block-editor-addons-block-portfolio-image">%2$s</div>
                                <div class="responsive-block-editor-addons-block-portfolio-image-overlay"><%4$s class="responsive-block-editor-addons-block-post-grid-title-1">Hi %3$s</%4$s></div></a>',
						esc_url( get_permalink( $post_id ) ),
						wp_get_attachment_image( $post_thumb_id, $post_thumb_size ),
                        esc_html( $title ),
                        esc_attr( $post_title_tag )
					);
				}
			}


			/* Close the post */
			$post_grid_markup .= "</article>\n";
		}

		/* Restore original post data */
		wp_reset_postdata();

		/* Build the block classes */
		$class = "block-id-{$attributes['block_id']} responsive-block-editor-addons-block-portfolio featured{$attributes['postType']} align{$attributes['align']}";

		if ( isset( $attributes['className'] ) ) {
			$class .= ' ' . $attributes['className'];
		}

		/* Layout orientation class */
		$grid_class = 'responsive-block-editor-addons-portfolio-items';

		if ( isset( $attributes['postLayout'] ) && 'list' === $attributes['postLayout'] ) {
			$grid_class .= ' is-list';
		} else {
			$grid_class .= ' is-grid';
		}

		/* Grid columns class */
		if ( isset( $attributes['columns'] ) && 'grid' === $attributes['postLayout'] ) {
			$grid_class .= ' columns-' . $attributes['columns'];
		}

		/* Post grid section title */
		if ( isset( $attributes['displaySectionTitle'] ) && $attributes['displaySectionTitle'] && ! empty( $attributes['sectionTitle'] ) ) {
			if ( isset( $attributes['sectionTitleTag'] ) ) {
				$section_title_tag = $attributes['sectionTitleTag'];
			} else {
				$section_title_tag = 'h2';
			}

			$section_title = '<' . esc_attr( $section_title_tag ) . ' class="responsive-block-editor-addons-portfolio-section-title">' . esc_html( $attributes['sectionTitle'] ) . '</' . esc_attr( $section_title_tag ) . '>';
		} else {
			$section_title = null;
		}

		/* Post grid section tag */
		if ( isset( $attributes['sectionTag'] ) ) {
			$section_tag = $attributes['sectionTag'];
		} else {
			$section_tag = 'section';
		}

		$main_class = new Responsive_Block_Editor_Addons();

		$paginations_markup = '';

		if ( $attributes['postPagination'] ) {
			$paginations_markup = '<div class="responsive-block-editor-addons-post-pagination-wrap">' . $main_class->render_pagination( $grid_query, $attributes ) . '</div>';
		}

		/* Output the post markup */
		$block_content = sprintf(
			'<%1$s class="%2$s">%3$s<div class="%4$s">%5$s</div>%6$s</%1$s>',
			$section_tag,
			esc_attr( $class ),
			$section_title,
			esc_attr( $grid_class ),
			$post_grid_markup,
			$paginations_markup
		);
		return $block_content;
	}
}

/**
 * Registers the post grid block on server
 */
function responsive_block_editor_addons_register_block_core_latest_posts_portfolio() {

	/* Check if the register function exists */
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	/* Block attributes */
	register_block_type(
		'responsive-block-editor-addons/portfolio',
		array(
			'attributes'      => array(
				'categories'                  => array(
					'type' => 'string',
				),
				'tags'                        => array(
					'type' => 'string',
				),
				'textAlignment'               => array(
					'type'    => 'string',
					'default' => 'left',
				),
				'className'                   => array(
					'type' => 'string',
				),
				'postsToShow'                 => array(
					'type'    => 'number',
					'default' => 6,
				),
				'stackonMobile'               => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostDate'             => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'excludeCurrentPost'          => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostExcerpt'          => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostAuthor'           => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostImage'            => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostLink'             => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostTitle'            => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displaySectionTitle'         => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'postPagination'              => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'equalHeight'                 => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'postTitleTag'                => array(
					'type'    => 'string',
					'default' => 'h3',
				),
				'postLayout'                  => array(
					'type'    => 'string',
					'default' => 'grid',
				),
				'columns'                     => array(
					'type'    => 'number',
					'default' => 3,
				),
				'align'                       => array(
					'type'    => 'string',
					'default' => 'center',
				),
				'width'                       => array(
					'type'    => 'string',
					'default' => 'wide',
				),
				'order'                       => array(
					'type'    => 'string',
					'default' => 'desc',
				),
				'orderBy'                     => array(
					'type'    => 'string',
					'default' => 'date',
				),
				'readMoreText'                => array(
					'type'    => 'string',
					'default' => 'Read More »',
				),
				'offset'                      => array(
					'type'    => 'number',
					'default' => 0,
				),
				'excerptLength'               => array(
					'type'    => 'number',
					'default' => 55,
				),
				'postType'                    => array(
					'type'    => 'string',
					'default' => 'post',
				),
				'postTaxonomy'                => array(
					'type'    => 'string',
					'default' => 'category',
				),
				'taxonomyType'                => array(
					'type'    => 'string',
					'default' => 'category',
				),
				'paginationAlignment'         => array(
					'type'    => 'string',
					'default' => 'left',
				),
				'paginationLayout'            => array(
					'type'    => 'string',
					'default' => '',
				),
				'sectionTag'                  => array(
					'type'    => 'string',
					'default' => 'section',
				),
				'sectionTitle'                => array(
					'type' => 'string',
				),
				'sectionTitleTag'             => array(
					'type'    => 'string',
					'default' => 'h2',
				),
				'imageSize'                   => array(
					'type'    => 'string',
					'default' => 'full',
				),
				'url'                         => array(
					'type'      => 'string',
					'source'    => 'attribute',
					'selector'  => 'img',
					'attribute' => 'src',
				),
				'id'                          => array(
					'type'    => 'number',
					'default' => '',
				),
				'bgColor'                     => array(
					'type'    => 'string',
					'default' => '#e4e4e4',
				),
				'paginationBorderColor'       => array(
					'type'    => 'string',
					'default' => '#e4e4e4',
				),
				'paginationTextActiveColor'   => array(
					'type'    => 'string',
					'default' => '',
				),
				'paginationTextColor'         => array(
					'type'    => 'string',
					'default' => '',
				),
				'paginationActiveBorderColor' => array(
					'type'    => 'string',
					'default' => '',
				),
				'paginationBorderWidth'       => array(
					'type'    => 'number',
					'default' => '',
				),
				'paginationBorderRadius'      => array(
					'type'    => 'number',
					'default' => '',
				),
				'paginationSpacing'           => array(
					'type'    => 'number',
					'default' => '',
				),
				'imageBorderRadius'           => array(
					'type'    => 'number',
					'default' => '',
				),
				'textColor'                   => array(
					'type'    => 'string',
					'default' => '#444444',
				),
				'previousButtonText'          => array(
					'type'    => 'string',
					'default' => 'Previous',
				),
				'nextButtonText'              => array(
					'type'    => 'string',
					'default' => 'Next',
				),
				'imagePosition'               => array(
					'type'    => 'string',
					'default' => 'top',
				),
				'layout'                      => array(
					'type'    => 'string',
					'default' => 'boxed',
				),
				'metaColor'                   => array(
					'type'    => 'string',
					'default' => '#444444',
				),
				'readMoreLinkColor'           => array(
					'type'    => 'string',
					'default' => '#0066cc',
				),
				'readMoreHoverColor'          => array(
					'type'    => 'string',
					'default' => '#0558ab',
				),
				'titleColor'                  => array(
					'type'    => 'string',
					'default' => '#444444',
				),
				'titleHoverColor'             => array(
					'type'    => 'string',
					'default' => '#444444',
				),
				'contentPadding'              => array(
					'type'    => 'number',
					'default' => 0,
				),
				'contentPaddingMobile'        => array(
					'type'    => 'number',
					'default' => '',
				),
				'mobileContentPadding'        => array( // For compatibility with v1.3.2.
					'type'    => 'number',
					'default' => 999,
				),
				'contentPaddingTablet'        => array(
					'type'    => 'number',
					'default' => '',
				),
				'continueFontSize'            => array(
					'type'    => 'number',
					'default' => '',
				),
				'continueFontFamily'          => array(
					'type'    => 'string',
					'default' => '',
				),
				'continueFontWeight'          => array(
					'type'    => 'string',
					'default' => '',
				),
				'continueLineHeight'          => array(
					'type'    => 'number',
					'default' => '',
				),
				'continueFontSizeMobile'      => array(
					'type'    => 'number',
					'default' => '',
				),
				'continueFontSizeTablet'      => array(
					'type'    => 'number',
					'default' => '',
				),
				'continueTextTransform'       => array(
					'type'    => 'string',
					'default' => '',
				),
				'titleFontSize'               => array(
					'type'    => 'number',
					'default' => '',
				),
				'titleFontSizeMobile'         => array(
					'type'    => 'number',
					'default' => '',
				),
				'titleFontSizeTablet'         => array(
					'type'    => 'number',
					'default' => '',
				),
				'titleLineHeight'             => array(
					'type'    => 'number',
					'default' => '',
				),
				'titleFontWeight'             => array(
					'type'    => 'string',
					'default' => '',
				),
				'titleTextTransform'          => array(
					'type'    => 'string',
					'default' => '',
				),
				'metaFontSize'                => array(
					'type'    => 'number',
					'default' => '',
				),
				'metaFontSizeMobile'          => array(
					'type'    => 'number',
					'default' => '',
				),
				'metaFontSizeTablet'          => array(
					'type'    => 'number',
					'default' => '',
				),
				'metaLineHeight'              => array(
					'type'    => 'number',
					'default' => '',
				),
				'metaFontWeight'              => array(
					'type'    => 'string',
					'default' => '',
				),
				'metaTextTransform'           => array(
					'type'    => 'string',
					'default' => '',
				),
				'titleFontFamily'             => array(
					'type'    => 'string',
					'default' => '',
				),
				'metaFontFamily'              => array(
					'type'    => 'string',
					'default' => '',
				),
				'excerptFontFamily'           => array(
					'type'    => 'string',
					'default' => '',
				),
				'excerptFontSize'             => array(
					'type'    => 'number',
					'default' => '',
				),
				'excerptFontSizeMobile'       => array(
					'type'    => 'number',
					'default' => '',
				),
				'excerptFontSizeTablet'       => array(
					'type'    => 'number',
					'default' => '',
				),
				'excerptLineHeight'           => array(
					'type'    => 'number',
					'default' => '',
				),
				'excerptFontWeight'           => array(
					'type'    => 'string',
					'default' => '',
				),
				'excerptTextTransform'        => array(
					'type'    => 'string',
					'default' => '',
				),
				'excerptBottomSpacing'        => array(
					'type'    => 'number',
					'default' => '',
				),
				'excerptBottomSpacingMobile'  => array(
					'type'    => 'number',
					'default' => '',
				),
				'excerptBottomSpacingTablet'  => array(
					'type'    => 'number',
					'default' => '',
				),
				'metaBottomSpacing'           => array(
					'type'    => 'number',
					'default' => '',
				),
				'metaBottomSpacingMobile'     => array(
					'type'    => 'number',
					'default' => '',
				),
				'metaBottomSpacingTablet'     => array(
					'type'    => 'number',
					'default' => '',
				),
				'imageBottomSpacing'          => array(
					'type'    => 'number',
					'default' => '',
				),
				'imageBottomSpacingTablet'          => array(
					'type'    => 'number',
					'default' => '',
				),
				'imageBottomSpacingMobile'          => array(
					'type'    => 'number',
					'default' => '',
				),
				'titleBottomSpacing'          => array(
					'type'    => 'number',
					'default' => '',
				),
				'titleBottomSpacingMobile'    => array(
					'type'    => 'number',
					'default' => '',
				),
				'titleBottomSpacingTablet'    => array(
					'type'    => 'number',
					'default' => '',
				),
				'columnGap'                   => array(
					'type'    => 'number',
					'default' => 0,
				),
				'columnGapTablet'             => array(
					'type' => 'number',
				),
				'columnGapMobile'             => array(
					'type' => 'number',
				),
				'rowGap'                      => array(
					'type'    => 'number',
					'default' => '',
				),
				'rowGapTablet'                => array(
					'type'    => 'number',
					'default' => '',
				),
				'rowGapMobile'                => array(
					'type'    => 'number',
					'default' => '',
				),
				'blockBorderWidth'            => array(
					'type'    => 'number',
					'default' => '0',
				),
				'blockBorderRadius'           => array(
					'type'    => 'number',
					'default' => '0',
				),
				'blockBorderStyle'            => array(
					'type'    => 'string',
					'default' => 'none',
				),
				'blockBorderColor'            => array(
					'type'    => 'string',
					'default' => '#333',
				),
				'pageLimit'                   => array(
					'type'    => 'number',
					'default' => '10',
				),
				'taxonomyType'                => array(
					'type'    => 'string',
					'default' => 'category',
				),
				'block_id'                    => array(
					'type'    => 'string',
					'default' => '',
				),
				'boxShadowColor'              => array(
					'type'    => 'string',
					'default' => '',
				),
				'boxShadowHOffset'            => array(
					'type'    => 'number',
					'default' => '0',
				),
				'boxShadowVOffset'            => array(
					'type'    => 'number',
					'default' => '0',
				),
				'boxShadowBlur'               => array(
					'type'    => 'number',
					'default' => '0',
				),
				'boxShadowSpread'             => array(
					'type'    => 'number',
					'default' => '0',
				),
				'boxShadowPosition'           => array(
					'type'    => 'string',
					'default' => 'outset',
				),
				'hoverboxShadowColor'         => array(
					'type'    => 'string',
					'default' => '#cccccc',
				),
				'hoverboxShadowHOffset'       => array(
					'type'    => 'number',
					'default' => '0',
				),
				'hoverboxShadowVOffset'       => array(
					'type'    => 'number',
					'default' => '0',
				),
				'hoverboxShadowBlur'          => array(
					'type'    => 'number',
					'default' => '6',
				),
				'hoverboxShadowSpread'        => array(
					'type'    => 'number',
					'default' => '1',
				),
				'hoverboxShadowPosition'      => array(
					'type'    => 'string',
					'default' => 'outset',
				),
				'imageWidth'                  => array(
					'type' => 'number',
				),
				'imageWidthTablet'            => array(
					'type'    => 'number',
					'default' => '',
				),
				'imageWidthMobile'            => array(
					'type'    => 'number',
					'default' => '',
				),
				'imageHeight'                 => array(
					'type'    => 'number',
					'default' => '',
				),
				'imageHeightTablet'           => array(
					'type'    => 'number',
					'default' => '',
				),
				'imageHeightMobile'           => array(
					'type'    => 'number',
					'default' => '',
				),
			),
			'render_callback' => 'responsive_block_editor_addons_render_block_core_latest_posts_portfolio',
		)
	);
}
add_action( 'init', 'responsive_block_editor_addons_register_block_core_latest_posts_portfolio' );


/**
 * Create API fields for additional info
 */
function responsive_block_editor_addons_register_rest_fields_portfolio() {
	/* Add landscape featured image source */
	register_rest_field(
		array( 'post', 'page' ),
		'featured_image_src',
		array(
			'get_callback'    => 'responsive_block_editor_addons_get_image_src_landscape_portfolio',
			'update_callback' => null,
			'schema'          => null,
		)
	);

	/* Add square featured image source */
	register_rest_field(
		array( 'post', 'page' ),
		'featured_image_src_square',
		array(
			'get_callback'    => 'responsive_block_editor_addons_get_image_src_square_portfolio',
			'update_callback' => null,
			'schema'          => null,
		)
	);

	/* Add author info */
	register_rest_field(
		'post',
		'author_info',
		array(
			'get_callback'    => 'responsive_block_editor_addons_get_author_info_portfolio',
			'update_callback' => null,
			'schema'          => null,
		)
	);
	/* Add author info for courses, lesson */
	register_rest_field(
		array( 'page', 'post', 'course', 'lesson' ),
		'rbea_author_info',
		array(
			'get_callback'    => 'responsive_block_editor_addons_get_rbea_author_info_portfolio',
			'update_callback' => null,
			'schema'          => null,
		)
	);
	/* Add excerpt info for courses, lesson */
	register_rest_field(
		array( 'page', 'post', 'course', 'lesson' ),
		'rbea_excerpt_info',
		array(
			'get_callback'    => 'responsive_block_editor_addons_get_rbea_excerpt_info_portfolio',
			'update_callback' => null,
			'schema'          => null,
		)
	);
}
add_action( 'rest_api_init', 'responsive_block_editor_addons_register_rest_fields_portfolio' );


/**
 * Get landscape featured image source for the rest field
 *
 * @param String $object  The object type.
 * @param String $field_name  Name of the field to retrieve.
 * @param String $request  The current request object.
 */
function responsive_block_editor_addons_get_image_src_landscape_portfolio( $object, $field_name, $request ) {
	$feat_img_array = wp_get_attachment_image_src(
		$object['featured_media'],
		'responsive-block-editor-addons-block-portfolio-landscape',
		false
	);
	return $feat_img_array ? $feat_img_array[0] : '';
}

/**
 * Get square featured image source for the rest field
 *
 * @param String $object  The object type.
 * @param String $field_name  Name of the field to retrieve.
 * @param String $request  The current request object.
 */
function responsive_block_editor_addons_get_image_src_square_portfolio( $object, $field_name, $request ) {
	$feat_img_array = wp_get_attachment_image_src(
		$object['featured_media'],
		'responsive-block-editor-addons-block-portfolio-square',
		false
	);
	return $feat_img_array ? $feat_img_array[0] : '';
}

/**
 * Get author info for the rest field
 *
 * @param String $object  The object type.
 * @param String $field_name  Name of the field to retrieve.
 * @param String $request  The current request object.
 */
function responsive_block_editor_addons_get_author_info_portfolio( $object, $field_name, $request ) {
	/* Get the author name */
	$author_data['display_name'] = get_the_author_meta( 'display_name', $object['author'] );

	/* Get the author link */
	$author_data['author_link'] = get_author_posts_url( $object['author'] );

	/* Return the author data */
	return $author_data;
}

/**
 * Get author info for the rest field
 *
 * @param String $object  The object type.
 * @param String $field_name  Name of the field to retrieve.
 * @param String $request  The current request object.
 */
function responsive_block_editor_addons_get_rbea_author_info_portfolio( $object, $field_name, $request ) {
	/* Get the author name */

	$author = ( isset( $object['author'] ) ) ? $object['author'] : '';

	// Get the author name.
	$author_data['display_name'] = get_the_author_meta( 'display_name', $author );

	// Get the author link.
	$author_data['author_link'] = get_author_posts_url( $author );

	// Return the author data.
	return $author_data;
}

/**
 * Get excerpt info for the rest field
 *
 * @param String $object  The object type.
 * @param String $field_name  Name of the field to retrieve.
 * @param String $request  The current request object.
 */
function responsive_block_editor_addons_get_rbea_excerpt_info_portfolio( $object, $field_name, $request ) {
	$excerpt = wp_trim_excerpt( get_the_excerpt( $object['id'] ) );
	if ( ! $excerpt ) {
		$excerpt = null;
	}
	return $excerpt;
}

if ( ! function_exists( 'responsive_block_editor_addons_add_custom_orderby_params' ) ) {
	/**
	 * The callback to add `rand` as an option for orderby param in REST API.
	 * Hook to `rest_{$this->post_type}_collection_params` filter.
	 *
	 * @param array $query_params Accepted parameters.
	 * @return array
	 *
	 * @see https://felipeelia.dev/wordpress-rest-api-enable-random-order-of-posts-list/
	 * @see https://www.timrosswebdevelopment.com/wordpress-rest-api-post-order/
	 */
	function responsive_block_editor_addons_add_custom_orderby_params( $query_params ) {
		if ( ! in_array( 'rand', $query_params['orderby']['enum'] ) ) { // phpcs:ignore
			$query_params['orderby']['enum'][] = 'rand';
		}
		if ( ! in_array( 'menu_order', $query_params['orderby']['enum'] ) ) { // phpcs:ignore
			$query_params['orderby']['enum'][] = 'menu_order';
		}
		return $query_params;
	}
}

if ( ! function_exists( 'responsive_block_editor_addons_add_custom_orderby' ) ) {
	/**
	 * Add `rand` as an option for orderby param in REST API.
	 * Hook to `rest_{$this->post_type}_collection_params` filter.
	 *
	 * @return void
	 *
	 * @see https://felipeelia.dev/wordpress-rest-api-enable-random-order-of-posts-list/
	 * @see https://www.timrosswebdevelopment.com/wordpress-rest-api-post-order/
	 */
	function responsive_block_editor_addons_add_custom_orderby() {
		$post_types = get_post_types( array( 'public' => true ) );
		foreach ( $post_types as $post_type ) {
			add_filter( 'rest_' . $post_type . '_collection_params', 'responsive_block_editor_addons_add_custom_orderby_params' );
		}
	}

	add_action( 'rest_api_init', 'responsive_block_editor_addons_add_custom_orderby' );
}
