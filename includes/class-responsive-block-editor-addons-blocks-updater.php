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
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/accordion-block/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/accordion',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'advance-columns',
				'title'    => 'Advance Columns',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/advanced-column/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/advanced-columns/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'advanced-heading',
				'title'    => 'Advance Heading',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/advanced-heading/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/advanced-heading/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'advanced-text',
				'title'    => 'Advance Text',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/advanced-text/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/advanced-text/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'anchor',
				'title'    => 'Anchor Block',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/anchor-block/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/anchor/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'blockquote',
				'title'    => 'Blockquote',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/blockquote/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/block-quote/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'call-mail-button',
				'title'    => 'Call/Mail Button',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/call-mail-button/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/call-mail-button/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'responsive-block-editor-addons-cta',
				'title'    => 'Call To Action',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/call-to-action/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/call-to-action/',
				'category' => 'cro',
				'status'   => 1,
			),
			array(
				'key'      => 'card',
				'title'    => 'Card',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/card/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/card-block/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'contact-form-7-styler',
				'title'    => 'Contact Form 7 Styler',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/contact-form-7-styler/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/contact-form-7-styler/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'content-timeline',
				'title'    => 'Content Timeline',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/content-timeline/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/content-timeline/',
				'category' => 'timelines',
				'status'   => 1,
			),
			array(
				'key'      => 'count-down',
				'title'    => 'Countdown',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/count-down/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/countdown/',
				'category' => 'timelines',
				'status'   => 1,
			),
			array(
				'key'      => 'count-up',
				'title'    => 'Countup',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/count-up/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/count-up/',
				'category' => 'timelines',
				'status'   => 1,
			),
			array(
				'key'      => 'divider',
				'title'    => 'Divider',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/divider/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/divider/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'expand',
				'title'    => 'Expand/Show More',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/expand-show-more/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/expand/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'feature-grid',
				'title'    => 'Feature Grid',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/feature-grid/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/feature-grid/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'flipbox',
				'title'    => 'Flip Box',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/flip-box/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/flip-box/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'form',
				'title'    => 'Form',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/form/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/form/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'googlemap',
				'title'    => 'Google Map',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/google-map/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/google-map/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'icons-list',
				'title'    => 'Icon List',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/icon-list/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/icon-list/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'image',
				'title'    => 'Image',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/image-block/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/image-block/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'image-boxes-block',
				'title'    => 'Image Boxes',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/image-boxes/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/image-boxes/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'image-hotspot',
				'title'    => 'Image Hotspot',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/image-hotspot/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/image-hotspot/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'image-slider',
				'title'    => 'Image Slider',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/image-slider/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/image-slider/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'info-block',
				'title'    => 'Info Block',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/info-block/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/info-block/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'inline-notice',
				'title'    => 'Inline Notice Block',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/inline-notice-block/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/inline-notice/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'instagram',
				'title'    => 'Instagram Feed',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/instagram-feed/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/instagram-feed/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'gallery-masonry',
				'title'    => 'Image Gallery',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/masonry/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/masonry/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'buttons',
				'title'    => 'Multi Buttons',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/multi-buttons/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/multi-buttons/',
				'category' => 'cro',
				'status'   => 1,
			),
			array(
				'key'      => 'popup',
				'title'    => 'Popup',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/popup-block/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/popup/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'portfolio',
				'title'    => 'Portfolio',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/portfolio/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/portfolio/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'post-carousel',
				'title'    => 'Post Carousel',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/post-carousel/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/post-carousel/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'post-timeline',
				'title'    => 'Post Timeline',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/post-timeline/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/post-timeline/',
				'category' => 'timelines',
				'status'   => 1,
			),
			array(
				'key'      => 'pricing-list',
				'title'    => 'Pricing List',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/pricing-list/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/pricing-list/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'pricing-table',
				'title'    => 'Pricing Table',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/pricing-table/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/pricing-table/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'progress-bar',
				'title'    => 'Progress Bar',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/progress-bar/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/progress-bar/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'responsive-block-editor-addons-post-grid',
				'title'    => 'Post And Page Grid',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/post-and-page-grid/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/post-and-page-grid/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'section',
				'title'    => 'Section',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/section/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/section/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'shape-divider',
				'title'    => 'Shape Divider',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/shape-divider/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/shape-divider/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'social-icons',
				'title'    => 'Social Icons',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/social-share/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/social-share/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'spacer',
				'title'    => 'Spacer',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/spacer/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/spacer/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'table-of-contents',
				'title'    => 'Table Of Contents',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/table-of-contents/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/table-of-content/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'tabs',
				'title'    => 'Tabs',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/tabs/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/tabs/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'taxonomy-list',
				'title'    => 'Taxonomy List',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/taxonomy-list/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/taxonomy-list/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'team',
				'title'    => 'Team',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/team/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/team/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'testimonial',
				'title'    => 'Testimonial',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/testimonial/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/testimonial/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'testimonial-slider',
				'title'    => 'Testimonial Slider',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/testimonial-slider/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/testimonial-slider/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'video-popup',
				'title'    => 'Video Popup',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/video-popup/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/video-popup/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'wp-search',
				'title'    => 'WP Search',
				'docs'     => 'https://cyberchimps.com/docs/responsive-blocks/blocks/wp-search/',
				'demo'     => 'https://cyberchimps.com/responsive-blocks/wp-search/',
				'category' => 'content',
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
		} else {
			// If blocks exist in the database update the information
			update_option( 'rbea_blocks', $this->get_rbea_blocks() );
		}
	}
}
