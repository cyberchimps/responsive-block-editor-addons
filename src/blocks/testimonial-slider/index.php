<?php
/**
 * Server-side rendering for the testimonial slider block.
 *
 * @since   1.0.0
 * @package Responsive Blocks
 */

/**
 * Add Frontend assets.
 *
 * @param Array $attributes Attributes.
 */
function responsive_block_editor_addons_testimonial_carousel_add_frontend_assets( $attributes ) {
	if ( has_block( 'responsive-block-editor-addons/testimonial-slider' ) ) {
		wp_enqueue_script(
			'test-slick-js',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'dist/js/vendors/slick.min.js',
			array( 'jquery' ),
			RESPONSIVE_BLOCK_EDITOR_ADDONS_VER,
			true
		);

		$selector = '.responsive-testimonial-slick-carousel';
		$js       = 'jQuery( document ).ready( function( $ ) { if( $( "' . $selector . '" ).length > 0 ){ $( "' . $selector . '" ).slick( ); } } );';
		wp_add_inline_script( 'test-slick-js-testimonial-carousel', $js );
	}
}
add_action( 'wp_enqueue_scripts', 'responsive_block_editor_addons_testimonial_carousel_add_frontend_assets' );
add_action( 'the_post', 'responsive_block_editor_addons_testimonial_carousel_add_frontend_assets' );

/**
 * Generate Testimonical Carousel script dynamically
 */
function testimonial_carousel_generate_script() {
	global $post;
	$this_post = $post;

	if ( ! is_object( $this_post ) ) {
		return;
	}

	if ( ! isset( $this_post->ID ) ) {
		return;
	}

	if ( has_blocks( $this_post->ID ) && isset( $this_post->post_content ) ) {

		$blocks = responsive_parse_gutenberg_blocks_testimonial_carousel( $this_post->post_content );

		if ( ! is_array( $blocks ) || empty( $blocks ) ) {
			return;
		}

		get_responsive_testimonial_carousel_scripts( $blocks );
	}
}

add_action( 'wp_enqueue_scripts', 'testimonial_carousel_generate_script' );

/**
 * Parse hutenberg blocks
 *
 * @param string $content Post Content.
 * @return array[]
 */
function responsive_parse_gutenberg_blocks_testimonial_carousel( $content ) {
	global $wp_version;

	return ( version_compare( $wp_version, '5', '>=' ) ) ? parse_blocks( $content ) : gutenberg_parse_blocks( $content );

}

/**
 * Get post Carousel block js
 *
 * @param WP_Block_Type $blocks Block.
 */
function get_responsive_testimonial_carousel_scripts( $blocks ) {
	global $responsive_post_carousel_js;
	foreach ( $blocks as $i => $block ) {
		if ( is_array( $block ) ) {
			if ( 'core/block' === $block['blockName'] ) {
				$id = ( isset( $block['attrs']['ref'] ) ) ? $block['attrs']['ref'] : 0;

				if ( $id ) {
					$content = get_post_field( 'post_content', $id );

					$reusable_blocks = responsive_parse_gutenberg_blocks_testimonial_carousel( $content );

					get_responsive_testimonial_carousel_scripts( $reusable_blocks );
				}
			} else {
				// Get JS for the Block.
				$responsive_post_carousel_js .= get_responsive_testimonial_carousel_block_js( $block );
			}
		}
	}

	if ( ! empty( $responsive_post_carousel_js ) ) {
		wp_add_inline_script( 'test-slick-js', $responsive_post_carousel_js );
	}
}

/**
 * Get post Carousel block js
 *
 * @param WP_Block_Type $block Block.
 * @return string
 */
function get_responsive_testimonial_carousel_block_js( $block ) {
    // @codingStandardsIgnoreStart

    global $responsive_post_carousel_js;

    $block = ( array ) $block;

    $name = $block['blockName'];

    if( ! isset( $name ) ) {
        return '';
    }

    if ( isset( $block['attrs'] ) && is_array( $block['attrs'] ) ) {
        $blockattr = $block['attrs'];
        if ( isset( $blockattr['block_id'] ) ) {
            $block_id = $blockattr['block_id'];
        }
    }

    switch ( $name ) {
        case 'responsive-block-editor-addons/testimonial-slider':
            $responsive_post_carousel_js .= get_responsive_testimonial_js( $blockattr, $blockattr['block_id'] );
            break;

        default:
            // Nothing to do here.
            break;
    }

    if ( isset( $block['innerBlocks'] ) ) {

        foreach ( $block['innerBlocks'] as $j => $inner_block ) {

            if ( 'core/block' == $inner_block['blockName'] ) {
                $id = ( isset( $inner_block['attrs']['ref'] ) ) ? $inner_block['attrs']['ref'] : 0;

                if ( $id ) {
                    $content = get_post_field( 'post_content', $id );

                    $reusable_blocks = responsive_parse_gutenberg_blocks_testimonial_carousel( $content );

                    get_responsive_testimonial_carousel_scripts( $reusable_blocks );
                }
            } else {
                // Get JS for the Block.
                $responsive_post_carousel_js .= get_responsive_testimonial_carousel_block_js( $inner_block );
            }
        }
    }
}
/**
 * Get post Js
 *
 * @since 1.0.3
 * @param array  $attr The block attributes.
 * @param string $id The selector ID.
 * @return string $js
 */
function get_responsive_testimonial_js( $attr, $id ) { 			// @codingStandardsIgnoreStart.

    $defaults = get_responsive_testimonial_carousel_default_attributes();

    $attr = array_merge( $defaults, (array) $attr );
    $dots = ( "dots" == $attr['arrowDots'] || "arrows_dots" == $attr['arrowDots'] ) ? true : false;
    $arrows = ( "arrows" == $attr['arrowDots'] || "arrows_dots" == $attr['arrowDots'] ) ? true : false;

    $slick_options = apply_filters( 'responsive_posts_slick_options',[
        'slidesToShow'   => $attr['columns'],
        'slidesToScroll' => 1,
        'autoplaySpeed'  =>  $attr['autoplaySpeed'],
        'autoplay'       => $attr['autoplay'],
        'infinite'       => $attr['infiniteLoop'],
        'pauseOnHover'   => $attr['pauseOnHover'],
        'speed'          => $attr['transitionSpeed'],
        'arrows'         => $arrows,
        'dots'           => $dots,
        'rtl'            => false,
        'prevArrow'		 => '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" tabindex="0" role="button" style=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" height ="'.$attr["arrowSize"].'" width = "'.$attr["arrowSize"].'" fill ="'.$attr["arrowColor"].'"  ><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg></button>',
        'nextArrow'		 => '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" tabindex="0" role="button" style=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" height ="'.$attr["arrowSize"].'" width = "'.$attr["arrowSize"].'" fill ="'.$attr["arrowColor"].'" ><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></button>',
        'responsive'		=> [
            [
                'breakpoint' => 1024,
                'settings' => [
                    'slidesToShow'   => $attr['tcolumns'],
                    'slidesToScroll' => 1,
                ],
            ],
            [
                'breakpoint' => 767,
                'settings' => [
                    'slidesToShow'   => $attr['mcolumns'],
                    'slidesToScroll' => 1,
                ],
            ]
        ]
    ] );

    $settings = json_encode($slick_options);
    $selector =	'.responsive-testimonial-slick-carousel.responsive-block-editor-addons-block-'.$id;
    $js = 'jQuery( document ).ready( function( $ ) { if( $( "' . $selector . '" ).length > 0 ){ $( "' . $selector . '" ).not(".slick-initialized").slick( '. $settings .'); } } );';

    return $js;
    // @codingStandardsIgnoreEnd.
}
/**
 * Get Defaults for post slick carousel
 *
 * @since 1.0.3
 * @return array
 */
function get_responsive_testimonial_carousel_default_attributes() {
	return array(
		'blockAlign'           => 'left',
		'columns'              => 1,
		'autoplaySpeed'        => 2000,
		'autoplay'             => true,
		'infiniteLoop'         => true,
		'pauseOnHover'         => true,
		'transitionSpeed'      => 500,
		'tcolumns'             => 1,
		'mcolumns'             => 1,
		'arrowSize'            => 20,
		'arrowDots'            => 'arrows_dots',
		'arrowColor'           => '#333',
		'arrowBorderWidth'     => 1,
		'arrowBorderRadius'    => 0,
		'postsToShow'          => 6,
		'displayPostDate'      => true,
		'displayPostExcerpt'   => true,
		'displayPostAuthor'    => true,
		'displayPostImage'     => false,
		'displayPostLink'      => true,
		'displayPostTitle'     => true,
		'postTitleTag'         => 'h3',
		'align'                => 'center',
		'order'                => 'desc',
		'orderBy'              => 'date',
		'readMoreText'         => 'Continue Reading',
		'offset'               => 0,
		'excerptLength'        => 20,
		'postType'             => 'post',
		'sectionTag'           => 'section',
		'sectionTitleTag'      => 'h2',
		'imageSize'            => 'full',
		'bgColor'              => '#ffffff',
		'contentPadding'       => 20,
		'contentPaddingMobile' => 20,
		'blockPadding'         => 45,
	);
}

