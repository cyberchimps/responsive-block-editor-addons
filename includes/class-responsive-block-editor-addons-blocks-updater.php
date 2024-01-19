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
				'docs'     => 'https://cyberchimps.com/blocks/docs/accordion-block/',
				'demo'     => 'https://cyberchimps.com/blocks/accordion/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'advance-columns',
				'title'    => 'Advance Columns',
				'docs'     => 'https://cyberchimps.com/blocks/docs/advanced-column/',
				'demo'     => 'https://cyberchimps.com/blocks/advanced-columns/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'advanced-heading',
				'title'    => 'Advance Heading',
				'docs'     => 'https://cyberchimps.com/blocks/docs/advanced-heading/',
				'demo'     => 'https://cyberchimps.com/blocks/advanced-heading/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'advanced-text',
				'title'    => 'Advance Text',
				'docs'     => 'https://cyberchimps.com/blocks/docs/advanced-text/',
				'demo'     => 'https://cyberchimps.com/blocks/advanced-text/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'anchor',
				'title'    => 'Anchor Block',
				'docs'     => 'https://cyberchimps.com/blocks/docs/anchor-block/',
				'demo'     => 'https://cyberchimps.com/blocks/anchor/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'blockquote',
				'title'    => 'Blockquote',
				'docs'     => 'https://cyberchimps.com/blocks/docs/blockquote/',
				'demo'     => 'https://cyberchimps.com/blocks/block-quote/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'call-mail-button',
				'title'    => 'Call/Mail Button',
				'docs'     => 'https://cyberchimps.com/blocks/docs/call-mail-button/',
				'demo'     => 'https://cyberchimps.com/blocks/call-mail-button/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'responsive-block-editor-addons-cta',
				'title'    => 'Call To Action',
				'docs'     => 'https://cyberchimps.com/blocks/docs/call-to-action/',
				'demo'     => 'https://cyberchimps.com/blocks/call-to-action/',
				'category' => 'cro',
				'status'   => 1,
			),
			array(
				'key'      => 'card',
				'title'    => 'Card',
				'docs'     => 'https://cyberchimps.com/blocks/docs/card/',
				'demo'     => 'https://cyberchimps.com/blocks/card-block/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'contact-form-7-styler',
				'title'    => 'Contact Form 7 Styler',
				'docs'     => 'https://cyberchimps.com/blocks/docs/contact-form-7-styler/',
				'demo'     => 'https://cyberchimps.com/blocks/contact-form-7-styler/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'content-timeline',
				'title'    => 'Content Timeline',
				'docs'     => 'https://cyberchimps.com/blocks/docs/content-timeline/',
				'demo'     => 'https://cyberchimps.com/blocks/content-timeline/',
				'category' => 'timelines',
				'status'   => 1,
			),
			array(
				'key'      => 'count-down',
				'title'    => 'Countdown',
				'docs'     => 'https://cyberchimps.com/blocks/docs/count-down/',
				'demo'     => 'https://cyberchimps.com/blocks/countdown/',
				'category' => 'timelines',
				'status'   => 1,
			),
			array(
				'key'      => 'count-up',
				'title'    => 'Countup',
				'docs'     => 'https://cyberchimps.com/blocks/docs/count-up/',
				'demo'     => 'https://cyberchimps.com/blocks/count-up/',
				'category' => 'timelines',
				'status'   => 1,
			),
			array(
				'key'      => 'divider',
				'title'    => 'Divider',
				'docs'     => 'https://cyberchimps.com/blocks/docs/divider/',
				'demo'     => 'https://cyberchimps.com/blocks/divider/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'expand',
				'title'    => 'Expand/Show More',
				'docs'     => 'https://cyberchimps.com/blocks/docs/expand-show-more/',
				'demo'     => 'https://cyberchimps.com/blocks/expand/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'feature-grid',
				'title'    => 'Feature Grid',
				'docs'     => 'https://cyberchimps.com/blocks/docs/feature-grid/',
				'demo'     => 'https://cyberchimps.com/blocks/feature-grid/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'flipbox',
				'title'    => 'Flip Box',
				'docs'     => 'https://cyberchimps.com/blocks/docs/flip-box/',
				'demo'     => 'https://cyberchimps.com/blocks/flip-box/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'form',
				'title'    => 'Form',
				'docs'     => 'https://cyberchimps.com/blocks/docs/form/',
				'demo'     => 'https://cyberchimps.com/blocks/form/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'googlemap',
				'title'    => 'Google Map',
				'docs'     => 'https://cyberchimps.com/blocks/docs/google-map/',
				'demo'     => 'https://cyberchimps.com/blocks/google-map/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'icons-list',
				'title'    => 'Icon List',
				'docs'     => 'https://cyberchimps.com/blocks/docs/icon-list/',
				'demo'     => 'https://cyberchimps.com/blocks/icon-list/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'image',
				'title'    => 'Image',
				'docs'     => 'https://cyberchimps.com/blocks/docs/image-block/',
				'demo'     => 'https://cyberchimps.com/blocks/image-block/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'image-boxes-block',
				'title'    => 'Image Boxes',
				'docs'     => 'https://cyberchimps.com/blocks/docs/image-boxes/',
				'demo'     => 'https://cyberchimps.com/blocks/image-boxes/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'image-hotspot',
				'title'    => 'Image Hotspot',
				'docs'     => 'https://cyberchimps.com/blocks/docs/image-hotspot/',
				'demo'     => 'https://cyberchimps.com/blocks/image-hotspot/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'image-slider',
				'title'    => 'Image Slider',
				'docs'     => 'https://cyberchimps.com/blocks/docs/image-slider/',
				'demo'     => 'https://cyberchimps.com/blocks/image-slider/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'info-block',
				'title'    => 'Info Block',
				'docs'     => 'https://cyberchimps.com/blocks/docs/info-block/',
				'demo'     => 'https://cyberchimps.com/blocks/info-block/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'inline-notice',
				'title'    => 'Inline Notice Block',
				'docs'     => 'https://cyberchimps.com/blocks/docs/inline-notice-block/',
				'demo'     => 'https://cyberchimps.com/blocks/inline-notice/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'instagram',
				'title'    => 'Instagram Feed',
				'docs'     => 'https://cyberchimps.com/blocks/docs/instagram-feed/',
				'demo'     => 'https://cyberchimps.com/blocks/instagram-feed/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'gallery-masonry',
				'title'    => 'Masonry',
				'docs'     => 'https://cyberchimps.com/blocks/docs/masonry/',
				'demo'     => 'https://cyberchimps.com/blocks/masonry/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'buttons',
				'title'    => 'Multi Buttons',
				'docs'     => 'https://cyberchimps.com/blocks/docs/multi-buttons/',
				'demo'     => 'https://cyberchimps.com/blocks/multi-buttons/',
				'category' => 'cro',
				'status'   => 1,
			),
			array(
				'key'      => 'popup',
				'title'    => 'Popup',
				'docs'     => 'https://cyberchimps.com/blocks/docs/popup-block/',
				'demo'     => 'https://cyberchimps.com/blocks/popup/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'portfolio',
				'title'    => 'Portfolio',
				'docs'     => 'https://cyberchimps.com/blocks/docs/portfolio/',
				'demo'     => 'https://cyberchimps.com/blocks/portfolio/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'post-carousel',
				'title'    => 'Post Carousel',
				'docs'     => 'https://cyberchimps.com/blocks/docs/post-carousel/',
				'demo'     => 'https://cyberchimps.com/blocks/post-carousel/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'post-timeline',
				'title'    => 'Post Timeline',
				'docs'     => 'https://cyberchimps.com/blocks/docs/post-timeline/',
				'demo'     => 'https://cyberchimps.com/blocks/post-timeline/',
				'category' => 'timelines',
				'status'   => 1,
			),
			array(
				'key'      => 'pricing-list',
				'title'    => 'Pricing List',
				'docs'     => 'https://cyberchimps.com/blocks/docs/pricing-list/',
				'demo'     => 'https://cyberchimps.com/blocks/pricing-list/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'pricing-table',
				'title'    => 'Pricing Table',
				'docs'     => 'https://cyberchimps.com/blocks/docs/pricing-table/',
				'demo'     => 'https://cyberchimps.com/blocks/pricing-table/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'progress-bar',
				'title'    => 'Progress Bar',
				'docs'     => 'https://cyberchimps.com/blocks/docs/progress-bar/',
				'demo'     => 'https://cyberchimps.com/blocks/progress-bar/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'responsive-block-editor-addons-post-grid',
				'title'    => 'Post And Page Grid',
				'docs'     => 'https://cyberchimps.com/blocks/docs/post-and-page-grid/',
				'demo'     => 'https://cyberchimps.com/blocks/post-and-page-grid/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'section',
				'title'    => 'Section',
				'docs'     => 'https://cyberchimps.com/blocks/docs/section/',
				'demo'     => 'https://cyberchimps.com/blocks/section/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'shape-divider',
				'title'    => 'Shape Divider',
				'docs'     => 'https://cyberchimps.com/blocks/docs/shape-divider/',
				'demo'     => 'https://cyberchimps.com/blocks/shape-divider/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'social-share',
				'title'    => 'Social Share',
				'docs'     => 'https://cyberchimps.com/blocks/docs/social-share/',
				'demo'     => 'https://cyberchimps.com/blocks/social-share/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'spacer',
				'title'    => 'Spacer',
				'docs'     => 'https://cyberchimps.com/blocks/docs/spacer/',
				'demo'     => 'https://cyberchimps.com/blocks/spacer/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'table-of-contents',
				'title'    => 'Table Of Contents',
				'docs'     => 'https://cyberchimps.com/blocks/docs/table-of-contents/',
				'demo'     => 'https://cyberchimps.com/blocks/table-of-content/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'tabs',
				'title'    => 'Tabs',
				'docs'     => 'https://cyberchimps.com/blocks/docs/tabs/',
				'demo'     => 'https://cyberchimps.com/blocks/tabs/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'taxonomy-list',
				'title'    => 'Taxonomy List',
				'docs'     => 'https://cyberchimps.com/blocks/docs/taxonomy-list/',
				'demo'     => 'https://cyberchimps.com/blocks/taxonomy-list/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'team',
				'title'    => 'Team',
				'docs'     => 'https://cyberchimps.com/blocks/docs/team/',
				'demo'     => 'https://cyberchimps.com/blocks/team/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'testimonial',
				'title'    => 'Testimonial',
				'docs'     => 'https://cyberchimps.com/blocks/docs/testimonial/',
				'demo'     => 'https://cyberchimps.com/blocks/testimonial/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'testimonial-slider',
				'title'    => 'Testimonial Slider',
				'docs'     => 'https://cyberchimps.com/blocks/docs/testimonial-slider/',
				'demo'     => 'https://cyberchimps.com/blocks/testimonial-slider/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'video-popup',
				'title'    => 'Video Popup',
				'docs'     => 'https://cyberchimps.com/blocks/docs/video-popup/',
				'demo'     => 'https://cyberchimps.com/blocks/video-popup/',
				'category' => 'content',
				'status'   => 1,
			),
			array(
				'key'      => 'wp-search',
				'title'    => 'WP Search',
				'docs'     => 'https://cyberchimps.com/blocks/docs/wp-search/',
				'demo'     => 'https://cyberchimps.com/blocks/wp-search/',
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
		update_option( 'rbea_blocks', $this->get_rbea_blocks() );
		return true;
	}

	/**
	 * Inserts the RBEA blocks into the database.
	 * @since 1.7.0
	 */
	public function insert_blocks_data() {

		if ( ! $this->is_blocks_in_db() ) {
			add_option( 'rbea_blocks', $this->get_rbea_blocks() );
		}

	}

}
