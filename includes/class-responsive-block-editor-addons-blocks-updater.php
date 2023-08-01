<?php
/**
 * List of RBEA Blocks
 *
 * @link       https://www.cyberchimps.com
 * @since      1.7.0
 *
 * @package    Responsive_Block_Editor_Addons
 * @subpackage Responsive_Block_Editor_Addons/includes
 */

/**
 * List of RBEA Blocks.
 *
 * This class defines all code necessary to display blocks on the getting started page.
 *
 * @since      1.7.0
 * @package    Responsive_Block_Editor_Addons
 * @subpackage Responsive_Block_Editor_Addons/includes
 * @author     CyberChimps <support@cyberchimps.com>
 */
class Responsive_Block_Editor_Addons_Blocks_Updater {

	/**
	 * Retrieves the RBEA Blocks
	 *
	 * List of all the RBEA Blocks
	 *
	 * @since    1.7.0
	 */
	public function get_rbea_blocks() {
		$blocks = array(
			array(
				'key'      => 'accordion',
				'title'    => 'Accordion Block',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/accordion-block/',
				'demo'     => 'https://cyberchimps.com/blocks/accordion/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'advance-columns',
				'title'    => 'Advance Columns',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/advanced-column/',
				'demo'     => 'https://cyberchimps.com/blocks/advanced-columns/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'advanced-heading',
				'title'    => 'Advance Heading',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/advanced-heading/',
				'demo'     => 'https://cyberchimps.com/blocks/advanced-heading/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'advanced-text',
				'title'    => 'Advance Text',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/advanced-text/',
				'demo'     => 'https://cyberchimps.com/blocks/advanced-text/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'anchor',
				'title'    => 'Anchor Block',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/anchor-block/',
				'demo'     => 'https://cyberchimps.com/blocks/anchor/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'blockquote',
				'title'    => 'Blockquote',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/blockquote/',
				'demo'     => 'https://cyberchimps.com/blocks/block-quote/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'call-mail-button',
				'title'    => 'Call/Mail Button',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/call-mail-button/',
				'demo'     => 'https://cyberchimps.com/blocks/call-mail-button/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'responsive-block-editor-addons-cta',
				'title'    => 'Call To Action',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/call-to-action',
				'demo'     => 'https://cyberchimps.com/blocks/call-to-action/',
				'category' => 'cro',
				'status'   => 1,
			),
			array(
				'key'      => 'card',
				'title'    => 'Card',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/card/',
				'demo'     => 'https://cyberchimps.com/blocks/card-block/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'content-timeline',
				'title'    => 'Content Timeline',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/content-timeline/',
				'demo'     => 'https://cyberchimps.com/blocks/content-timeline/',
				'category' => 'timelines',
				'status'   => 1,
			),
			array(
				'key'      => 'count-down',
				'title'    => 'Countdown',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/count-down/',
				'demo'     => 'https://cyberchimps.com/blocks/countdown/',
				'category' => 'timelines',
				'status'   => 1,
			),
			array(
				'key'      => 'count-up',
				'title'    => 'Countup',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/count-up/',
				'demo'     => 'https://cyberchimps.com/blocks/count-up/',
				'category' => 'timelines',
				'status'   => 1,
			),
			array(
				'key'      => 'divider',
				'title'    => 'Divider',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/divider/',
				'demo'     => 'https://cyberchimps.com/blocks/divider/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'expand',
				'title'    => 'Expand/Show More',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/expand-show-more/',
				'demo'     => 'https://cyberchimps.com/blocks/expand/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'feature-grid',
				'title'    => 'Feature Grid',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/feature-grid/',
				'demo'     => 'https://cyberchimps.com/blocks/feature-grid/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'flipbox',
				'title'    => 'Flip Box',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/flip-box/',
				'demo'     => 'https://cyberchimps.com/blocks/flip-box/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'googlemap',
				'title'    => 'Google Map',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/google-map/',
				'demo'     => 'https://cyberchimps.com/blocks/google-map/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'icon-list',
				'title'    => 'Icon List',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/icon-list/',
				'demo'     => 'https://cyberchimps.com/blocks/icon-list/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'image-boxes',
				'title'    => 'Image Boxes',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/image-boxes/',
				'demo'     => 'https://cyberchimps.com/blocks/image-boxes/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'image-hotspot',
				'title'    => 'Image Hotspot',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/image-hotspot',
				'demo'     => 'https://cyberchimps.com/blocks/image-hotspot/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'image-slider',
				'title'    => 'Image Slider',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/image-slider/',
				'demo'     => 'https://cyberchimps.com/blocks/image-slider/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'info-block',
				'title'    => 'Info Block',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/info-block/',
				'demo'     => 'https://cyberchimps.com/blocks/info-block/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'inline-notice',
				'title'    => 'Inline Notice Block',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/inline-notice-block/',
				'demo'     => 'https://cyberchimps.com/blocks/inline-notice/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'instagram',
				'title'    => 'Instagram Feed',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/instagram-feed/',
				'demo'     => 'https://cyberchimps.com/blocks/instagram-feed/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'gallery-masonry',
				'title'    => 'Masonry',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/masonry/',
				'demo'     => 'https://cyberchimps.com/blocks/masonry/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'buttons',
				'title'    => 'Multi Buttons',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/multi-buttons/',
				'demo'     => 'https://cyberchimps.com/blocks/multi-buttons/',
				'category' => 'cro',
				'status'   => 1,
			),
			array(
				'key'      => 'portfolio',
				'title'    => 'Portfolio',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/portfolio/',
				'demo'     => 'https://cyberchimps.com/blocks/portfolio/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'post-carousel',
				'title'    => 'Post Carousel',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/post-carousel/',
				'demo'     => 'https://cyberchimps.com/blocks/post-carousel/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'post-timeline',
				'title'    => 'Post Timeline',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/post-timeline/',
				'demo'     => 'https://cyberchimps.com/blocks/post-timeline/',
				'category' => 'timelines',
				'status'   => 1,
			),
			array(
				'key'      => 'pricing-list',
				'title'    => 'Pricing List',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/pricing-list/',
				'demo'     => 'https://cyberchimps.com/blocks/pricing-list/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'pricing-table',
				'title'    => 'Pricing Table',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/pricing-table/',
				'demo'     => 'https://cyberchimps.com/blocks/pricing-table/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'progress-bar',
				'title'    => 'Progress Bar',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/progress-bar/',
				'demo'     => 'https://cyberchimps.com/blocks/progress-bar/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'responsive-block-editor-addons-post-grid',
				'title'    => 'Post And Page Grid',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/post-and-page-grid/',
				'demo'     => 'https://cyberchimps.com/blocks/post-and-page-grid/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'section',
				'title'    => 'Section',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/section/',
				'demo'     => 'https://cyberchimps.com/blocks/section/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'shape-divider',
				'title'    => 'Shape Divider',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/shape-divider/',
				'demo'     => 'https://cyberchimps.com/blocks/shape-divider/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'social-share',
				'title'    => 'Social Share',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/social-share/',
				'demo'     => 'https://cyberchimps.com/blocks/social-share/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'spacer',
				'title'    => 'Spacer',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/spacer/',
				'demo'     => 'https://cyberchimps.com/blocks/spacer/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'table-of-contents',
				'title'    => 'Table Of Contents',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/table-of-contents/',
				'demo'     => 'https://cyberchimps.com/blocks/table-of-content/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'tabs',
				'title'    => 'Tabs',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/tabs/',
				'demo'     => 'https://cyberchimps.com/blocks/tabs/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'taxonomy-list',
				'title'    => 'Taxonomy List',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/taxonomy-list/',
				'demo'     => 'https://cyberchimps.com/blocks/taxonomy-list/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'team',
				'title'    => 'Team',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/team/',
				'demo'     => 'https://cyberchimps.com/blocks/team/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'testimonial',
				'title'    => 'Testimonial',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/testimonial/',
				'demo'     => 'https://cyberchimps.com/blocks/testimonial/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'testimonial-slider',
				'title'    => 'Testimonial Slider',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/testimonial-slider/',
				'demo'     => 'https://cyberchimps.com/blocks/testimonial-slider/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'video-popup',
				'title'    => 'Video Popup',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/video-popup/',
				'demo'     => 'https://cyberchimps.com/blocks/video-popup/',
				'category' => 'constructive',
				'status'   => 1,
			),
			array(
				'key'      => 'wp-search',
				'title'    => 'WP Search',
				'docs'     => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/wp-search/',
				'demo'     => 'https://cyberchimps.com/blocks/wp-search/',
				'category' => 'constructive',
				'status'   => 1,
			),
		);

		return $blocks;
	}

	/**
	 * Check if RBEA blocks exists in database.
	 *
	 * @since 1.7.0
	 */
	public function is_blocks_in_db() {

		$rbea_blocks = get_option( 'rbea_blocks' );

		if ( ! $rbea_blocks ) {
			return false;
		}
		return true;
	}

	/**
	 * Inserts the RBEA blocks into the database.
	 *
	 * @since 1.7.0
	 */
	public function insert_blocks_data() {

		if ( ! $this->is_blocks_in_db() ) {
			add_option( 'rbea_blocks', $this->get_rbea_blocks() );
		}

	}

}
