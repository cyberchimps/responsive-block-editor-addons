<?php
/**
 * RBEA Styles Helper.
 *
 * @package category
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'Responsive_Block_Editor_Addons_Frontend_Styles_Helper' ) ) {

	/**
	 * Class Responsive_Block_Editor_Addons_Frontend_Styles_Helper.
	 */
	final class Responsive_Block_Editor_Addons_Frontend_Styles_Helper {


		/**
		 * Member Variable
		 *
		 * @var instance
		 */
		private static $instance;

		/**
		 * Custom variable
		 *
		 * @var instance
		 */
		public static $icon_json;

		/**
		 * Get an instance of WP_Filesystem_Direct.
		 *
		 * @return object A WP_Filesystem_Direct instance.
		 */
		public function get_filesystem() {
			global $wp_filesystem;

			require_once ABSPATH . '/wp-admin/includes/file.php';

			WP_Filesystem();

			return $wp_filesystem;
		}

		/**
		 *  Initiator
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}

			return self::$instance;
		}

		/**
		 * Constructor
		 */
		public function __construct() {
			add_action( 'wp_head', array( $this, 'responsive_block_editor_addons_description' ), 100 );
			add_action( 'wp_head', array( $this, 'responsive_block_editor_addons_frontend_styles' ), 100 );
		}

		/**
		 * Generate description and print in header.
		 */
		public function responsive_block_editor_addons_description() {
			echo "\n<!-- This block is generated with the Responsive Blocks Library Plugin v" . substr( RESPONSIVE_BLOCK_EDITOR_ADDONS_VER, 0, -2 ) . ' (Responsive Gutenberg Blocks Library ' . RESPONSIVE_BLOCK_EDITOR_ADDONS_VER . ") - https://cyberchimps.com/blocks/ -->\n\n";//phpcs:ignore
		}

		/**
		 * Generate stylesheet and print in header.
		 */
		public function responsive_block_editor_addons_frontend_styles() {
			global $post;
			$blocks = array();
			if ( is_object( $post ) ) {
				$blocks = parse_blocks( $post->post_content );
			}

			$css = $this->get_styles( $blocks );
			echo "<style id='rbea-frontend-styles'>$css</style>"; //phpcs:ignore
		}

		/**
		 * Parse function.
		 *
		 * @param [type] $content The content.
		 * @return [type]
		 */
		public function parse( $content ) {

			global $wp_version;

			return ( version_compare( $wp_version, '5', '>=' ) ) ? parse_blocks( $content ) : gutenberg_parse_blocks( $content );
		}

		/**
		 * Get styles function.
		 *
		 * @param [type] $blocks The blocks.
		 * @return [type]
		 */
		public function get_styles( $blocks ) {
			$desktop         = '';
			$tablet          = '';
			$mobile          = '';
			$tab_styling_css = '';
			$mob_styling_css = '';
			$css             = array();
			foreach ( $blocks as $i => $block ) {

				if ( is_array( $block ) ) {
					if ( '' === $block['blockName'] ) {
						continue;
					}
					if ( 'core/block' === $block['blockName'] ) {
						$id = ( isset( $block['attrs']['ref'] ) ) ? $block['attrs']['ref'] : 0;

						if ( $id ) {
							$content = get_post_field( 'post_content', $id );

							$reusable_blocks = $this->parse( $content );

							$css = $this->get_styles( $reusable_blocks );

						}
					} else {

						$css = $this->get_block_css( $block );

						// Get CSS for the Block.
						if ( isset( $css['desktop'] ) ) {
							$desktop .= $css['desktop'];
							$tablet  .= $css['tablet'];
							$mobile  .= $css['mobile'];
						}
					}
				}
			}

			if ( ! empty( $tablet ) ) {
				$tab_styling_css .= '@media only screen and (max-width: 976px) {';
				$tab_styling_css .= $tablet;
				$tab_styling_css .= '}';
			}

			if ( ! empty( $mobile ) ) {
				$mob_styling_css .= '@media only screen and (max-width: 767px) {';
				$mob_styling_css .= $mobile;
				$mob_styling_css .= '}';
			}

			$css = $desktop . $tab_styling_css . $mob_styling_css;
			return $css;
		}

		/**
		 * Function to load backend font awesome icons.
		 *
		 * @return [type]
		 */
		public static function backend_load_font_awesome_icons() {

			$json_file = plugin_dir_path( __FILE__ ) . '../src/ResponsiveBlocksIcon.json';

			if ( ! file_exists( $json_file ) ) {
				return array();
			}

			// Function has already run.
			if ( null !== self::$icon_json ) {
				return self::$icon_json;
			}

			$str             = self::get_instance()->get_filesystem()->get_contents( $json_file );
			self::$icon_json = json_decode( $str, true );
			return self::$icon_json;
		}

		/**
		 * Function to render svg html.
		 *
		 * @param [type] $icon The icons.
		 * @return [type]
		 */
		public static function render_svg_html( $icon ) {
			$icon = str_replace( 'far', '', $icon );
			$icon = str_replace( 'fas', '', $icon );
			$icon = str_replace( 'fab', '', $icon );
			$icon = str_replace( 'fa-', '', $icon );
			$icon = str_replace( 'fa', '', $icon );
			$icon = sanitize_text_field( esc_attr( $icon ) );

			$json = self::backend_load_font_awesome_icons();
			$path = isset( $json[ $icon ]['svg']['brands'] ) ? $json[ $icon ]['svg']['brands']['path'] : $json[ $icon ]['svg']['solid']['path'];
			$view = isset( $json[ $icon ]['svg']['brands'] ) ? $json[ $icon ]['svg']['brands']['viewBox'] : $json[ $icon ]['svg']['solid']['viewBox'];
			if ( $view ) {
				$view = implode( ' ', $view );
			}
			return '<svg xmlns="https://www.w3.org/2000/svg" viewBox="' . esc_html( $view ) . '" ><path d="' . esc_html( $path ) . '"></path></svg>';
		}

		/**
		 * Get block css.
		 *
		 * @param [type] $block The block.
		 * @return [type]
		 */
		public function get_block_css( $block ) {
			$block = (array) $block;

			$name      = $block['blockName'];
			$css       = array();
			$block_id  = '';
			$blockattr = array();
			if ( ! isset( $name ) ) {
				return '';
			}

			if ( isset( $block['attrs'] ) && is_array( $block['attrs'] ) ) {
				$blockattr = $block['attrs'];
				if ( isset( $blockattr['block_id'] ) ) {
					$block_id = $blockattr['block_id'];
				}
			}

			switch ( $name ) {
				case 'responsive-block-editor-addons/post-carousel':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_post_carousel_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/responsive-block-editor-addons-post-grid':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_post_grid_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/advanced-heading':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_advanced_heading_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/count-up':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_count_up_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/blockquote':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_blockquote_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/divider':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_divider_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/accordion':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_accordian_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/accordion-item':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_accordian_child_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/advance-columns':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_advanced_columns_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/column':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_advanced_column_child_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/buttons':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_buttons_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/buttons-child':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_buttons_child_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/responsive-block-editor-addons-cta':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_call_to_action_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/card':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_card_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/content-timeline':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_content_timeline_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/expand':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_expand_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/flipbox':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_flipbox_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/gallery-masonry':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_gallery_masonry_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/googlemap':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_googlemap_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/icons-list':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_icon_list_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/icons-list-child':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_icon_list_child_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/image-boxes-block':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_image_boxes_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/image-slider':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_image_slider_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/info-block':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_info_block_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/post-timeline':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_post_timeline_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/pricing-list':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_pricing_list_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/pricing-table':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_pricing_table_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/section':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_section_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/shape-divider':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_shape_divider_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/spacer':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_spacer_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/team':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_team_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/testimonial':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_testimonial_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/testimonial-slider':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_testimonial_slider_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/video-popup':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_video_popup_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/count-down':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_count_down_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/table-of-contents':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_table_of_contents_css( $blockattr, $block_id );
					Responsive_Block_Editor_Addons::$table_of_contents_flag = true;
					break;
				case 'responsive-block-editor-addons/how-to':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_how_to_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/inline-notice':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_inline_notice_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/call-mail-button':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_call_mail_button_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/progress-bar':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_progress_bar_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/social-share':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_social_share_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/tabs':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_tabs_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/tabs-child':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_tabs_child_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/taxonomy-list':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_taxonomy_list_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/wp-search':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_wp_search_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/instagram':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_instagram_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/advanced-text':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_advanced_text_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/image-hotspot':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_image_hotspot_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/feature-grid':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_feature_grid_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/portfolio':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_portfolio_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/contact-form-7-styler':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_contact_form_7_styler_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/image':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_image_css($blockattr,$block_id);
					break;
				case 'responsive-block-editor-addons/popup':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_popup_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/form':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_form_css( $blockattr, $block_id );
					break;
				case 'responsive-block-editor-addons/form-input':
					$css += Responsive_Block_Editor_Addons_Frontend_Styles::get_responsive_block_form_input_css( $blockattr, $block_id );
					break;
				default:
					// Nothing to do here.
					break;
			}
			if ( isset( $block['innerBlocks'] ) ) {
				foreach ( $block['innerBlocks'] as $j => $inner_block ) {
					if ( 'core/block' === $inner_block['blockName'] ) {
						$id = ( isset( $inner_block['attrs']['ref'] ) ) ? $inner_block['attrs']['ref'] : 0;

						if ( $id ) {
							$content = get_post_field( 'post_content', $id );

							$reusable_blocks = $this->parse( $content );

							$css = $this->get_styles( $reusable_blocks );

						}
					} else {
						// Get CSS for the Block.
						$inner_block_css = $this->get_block_css( $inner_block );

						$css_desktop = ( isset( $css['desktop'] ) ? $css['desktop'] : '' );
						$css_tablet  = ( isset( $css['tablet'] ) ? $css['tablet'] : '' );
						$css_mobile  = ( isset( $css['mobile'] ) ? $css['mobile'] : '' );

						if ( isset( $inner_block_css['desktop'] ) ) {
							$css['desktop'] = $css_desktop . $inner_block_css['desktop'];
							$css['tablet']  = $css_tablet . $inner_block_css['tablet'];
							$css['mobile']  = $css_mobile . $inner_block_css['mobile'];
						}
					}
				}
			}

			return $css;

		}
		/**
		 * Parse CSS into correct CSS syntax.
		 *
		 * @param array  $combined_selectors The combined selector array.
		 * @param string $id The selector ID.
		 */
		public static function responsive_block_editor_addons_generate_all_css( $combined_selectors, $id ) {

			return array(
				'desktop' => self::responsive_block_editor_addons_generate_css( $combined_selectors['desktop'], $id ),
				'tablet'  => self::responsive_block_editor_addons_generate_css( $combined_selectors['tablet'], $id ),
				'mobile'  => self::responsive_block_editor_addons_generate_css( $combined_selectors['mobile'], $id ),
			);
		}

		/**
		 * Parse CSS into correct CSS syntax.
		 *
		 * @param array  $selectors The block selectors.
		 * @param string $id The selector ID.
		 */
		public static function responsive_block_editor_addons_generate_css( $selectors, $id ) {
			$styling_css = '';

			if ( empty( $selectors ) ) {
				return '';
			}

			foreach ( $selectors as $key => $value ) {

				$css = '';
				foreach ( $value as $j => $val ) {

					if ( 'font-family' === $j && 'Default' === $val ) {
						continue;
					}

					if ( ! empty( $val ) || 0 === $val ) {
						if ( 'font-family' === $j ) {
							$css .= $j . ': "' . $val . '";';
						} else {
							$css .= $j . ': ' . $val . ';';
						}
					}
				}

				if ( ! empty( $css ) ) {
					$styling_css .= $id;
					$styling_css .= $key . '{';
					$styling_css .= $css . '}';
				}
			}

			return $styling_css;
		}
	}

	Responsive_Block_Editor_Addons_Frontend_Styles_Helper::get_instance();
}

