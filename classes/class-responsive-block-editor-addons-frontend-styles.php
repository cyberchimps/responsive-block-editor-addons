<?php
/**
 * RBEA Styles.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'Responsive_Block_Editor_Addons_Frontend_Styles' ) ) {

	/**
	 * Class Responsive_Block_Editor_Addons_Frontend_Styles.
	 */
	final class Responsive_Block_Editor_Addons_Frontend_Styles {

		/**
		 * Get Advanced Heading CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_advanced_heading_css( $attr, $id ) {
			$defaults = self::get_responsive_block_advanced_heading_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$selectors        = array(
				''                                => array(
					'text-align' => $attr['headingAlignment'],
				),
				' .responsive-heading-title-text' => array(
					'color'           => $attr['headingTitleColor'],
					'font-family'     => $attr['headingTitleFontFamily'],
					'font-size'       => self::get_css_value( $attr['headingTitleFontSize'], 'px' ),
					'font-weight'     => $attr['headingTitleFontWeight'],
					'line-height'     => $attr['headingTitleLineHeight'],
					'letter-spacing'  => self::get_css_value( $attr['headingTitleLetterSpacing'], 'px' ),
					'margin-bottom'   => self::get_css_value( $attr['headSpacing'], 'px' ),
					'text-decoration' => $attr['textDecoration'],
				),
				' .responsive-heading-seperator'  => array(
					'border-top-style' => $attr['seperatorStyle'],
					'border-color'     => $attr['separatorColor'],
					'border-top-width' => self::get_css_value( $attr['separatorHeight'], 'px' ),
					'width'            => self::get_css_value( $attr['separatorWidth'], $attr['separatorWidthType'] ),
					'margin-bottom'    => self::get_css_value( $attr['separatorSpacing'], 'px' ),
				),
				' .responsive-heading-desc-text'  => array(
					'color'           => $attr['subHeadingTitleColor'],
					'font-family'     => $attr['subHeadingTitleFontFamily'],
					'font-size'       => self::get_css_value( $attr['subHeadingTitleFontSize'], 'px' ),
					'font-weight'     => $attr['subHeadingTitleFontWeight'],
					'line-height'     => $attr['subHeadingTitleLineHeight'],
					'letter-spacing'  => self::get_css_value( $attr['subHeadingTitleLetterSpacing'], 'px' ),
					'margin-bottom'   => self::get_css_value( $attr['subheadSpacing'], 'px' ),
					'text-decoration' => $attr['textDecorationSubHeading'],
				),
			);
			$mobile_selectors = array(
				''                                => array(
					'text-align' => $attr['headingAlignmentMobile'],
				),
				' .responsive-heading-title-text' => array(
					'font-size'     => self::get_css_value( $attr['headingTitleFontSizeMobile'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['headSpacingMobile'], 'px' ),
				),
				' .responsive-heading-seperator'  => array(
					'margin-bottom' => self::get_css_value( $attr['separatorSpacingMobile'], 'px' ),
				),
				' .responsive-heading-desc-text'  => array(
					'font-size'     => self::get_css_value( $attr['subHeadingTitleFontSizeMobile'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['subheadSpacingMobile'], 'px' ),
				),
			);

			$tablet_selectors = array(
				''                                => array(
					'text-align' => $attr['headingAlignmentTablet'],
				),
				' .responsive-heading-title-text' => array(
					'font-size'     => self::get_css_value( $attr['headingTitleFontSizeTablet'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['headSpacingTablet'], 'px' ),
				),
				' .responsive-heading-seperator'  => array(
					'margin-bottom' => self::get_css_value( $attr['separatorSpacingTablet'], 'px' ),
				),
				' .responsive-heading-desc-text'  => array(
					'font-size'     => self::get_css_value( $attr['subHeadingTitleFontSizeTablet'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['subheadSpacingTablet'], 'px' ),
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-block-advanced-heading.block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			return $css;
		}


		 /*
		  Get Advanced Columns CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_advanced_columns_css( $attr, $id ) {
			$defaults = self::get_responsive_block_advanced_columns_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$imgopacity        = $attr['opacity'] / 100;
			$columnHeightStyle = '';
			if ( 'half' == $attr['height'] ) {
				$columnHeightStyle = '50vh !important';
			}
			if ( 'full' == $attr['height'] ) {
				$columnHeightStyle = '100vh !important';
			}
			if ( 'custom' == $attr['height'] ) {
				$columnHeightStyle = $attr['customHeight'] . 'px !important';
			}

			$boxShadowPositionCSS = $attr['boxShadowPosition'];

			if ( 'outset' === $attr['boxShadowPosition'] ) {
				$boxShadowPositionCSS = '';
			}
			$max_width = '100%';

			if ( 'custom' == $attr['contentWidth'] ) {
				if ( '' != $attr['width'] ) {
					$max_width = self::get_css_value( $attr['width'], $attr['widthType'] );
				}
			}

			$backgroundTypeImageStyles = array();
			if ( $attr['backgroundType'] == 'image' && $attr['backgroundImage'] ) {
				$backgroundTypeImageStyles = array(
					'background-image'      => 'linear-gradient(' . self::hexToRgb( $attr['backgroundImageColor'] ? $attr['backgroundImageColor'] : '#fff', $imgopacity ) . ',' . self::hexToRgb( $attr['backgroundImageColor'] ? $attr['backgroundImageColor'] : '#fff', $imgopacity ) . '),url(' . $attr['backgroundImage'] . ')',
					'background-position'   => $attr['backgroundImagePosition'],
					'background-attachment' => $attr['backgroundAttachment'],
					'background-repeat'     => $attr['backgroundImageRepeat'],
					'background-size'       => $attr['backgroundImageSize'],
				);
			}
			$selectors = array(
				''                                => array(
					'z-index' => $attr['z_index'],
				),
				' .responsive-columns-wrap'       => array(
					'text-align'       => $attr['blockAlign'],
					'border-style'     => $attr['blockBorderStyle'],
					'border-color'     => $attr['blockBorderColor'],
					'border-radius'    => self::get_css_value( $attr['blockBorderRadius'], 'px' ) . ' !important',
					'border-width'     => self::get_css_value( $attr['blockBorderWidth'], 'px' ),
					'background-color' => $attr['backgroundType'] == 'color' ? self::hexToRgb( $attr['backgroundColor'], $imgopacity ) : '',
					'background-image' => $attr['backgroundType'] == 'gradient' ? self::generateBackgroundImageEffect(
						self::hexToRgb( $attr['backgroundColor1'], $imgopacity ),
						self::hexToRgb( $attr['backgroundColor2'], $imgopacity ),
						$attr['gradientDirection'],
						$attr['colorLocation1'],
						$attr['colorLocation2']
					) : '',
					'box-shadow'       => self::get_css_value( $attr['boxShadowHOffset'], 'px' ) . ' ' . self::get_css_value( $attr['boxShadowVOffset'], 'px' ) . ' ' . self::get_css_value( $attr['boxShadowBlur'], 'px' ) . ' ' . self::get_css_value( $attr['boxShadowSpread'], 'px' ) . ' ' . $attr['boxShadowColor'] . ' ' . $boxShadowPositionCSS,
				),
				' .responsive-columns-inner-wrap' => array(
					'max-width' => $max_width,
				),
				'.background-type-image'          => $backgroundTypeImageStyles,
				' .responsive-block-editor-addons-block-columns.overlay-type-color' => array(
					'background-color' => $attr['backgroundType'] == 'image' ? self::hexToRgb( $attr['backgroundImageColor'], $imgopacity ) : '',
				),
				' .responsive-block-editor-addons-block-columns.overlay-type-gradient.linear' => array(
					'background-image' => self::generateBackgroundImageEffect(
						self::hexToRgb( $attr['gradientOverlayColor1'], $imgopacity ),
						self::hexToRgb( $attr['gradientOverlayColor2'], $imgopacity ),
						$attr['gradientOverlayAngle'],
						$attr['gradientOverlayLocation1'],
						$attr['gradientOverlayLocation2']
					),
				),
				' .responsive-block-editor-addons-block-columns.overlay-type-gradient.radial' => array(
					'background-image' => 'radial-gradient( at ' . $attr['gradientOverlayPosition'] . ',' . self::hexToRgb( $attr['gradientOverlayColor1'] ? $attr['gradientOverlayColor1'] : '#fff', $imgopacity ) .
						' ' . $attr['gradientOverlayLocation1'] . '%,' . self::hexToRgb( $attr['gradientOverlayColor2'] ? $attr['gradientOverlayColor2'] : '#fff', $imgopacity ) .
						' ' . $attr['gradientOverlayLocation2'] . '%)',
				),
				' .responsive-block-editor-addons-block-column' => array(
					'min-height'  => $columnHeightStyle,
					'align-items' => $attr['verticalAlign'],
				),
				' .responsive-block-editor-addons-block-columns' => array(
					'padding-top'    => self::get_css_value( $attr['blockTopPadding'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['blockBottomPadding'], 'px' ),
					'padding-left'   => self::get_css_value( $attr['blockLeftPadding'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['blockRightPadding'], 'px' ),
					'margin-top'     => self::get_css_value( $attr['blockTopMargin'], 'px' ),
					'margin-bottom'  => self::get_css_value( $attr['blockBottomMargin'], 'px' ),
					'margin-left'    => self::get_css_value( $attr['blockLeftMargin'], 'px' ),
					'margin-right'   => self::get_css_value( $attr['blockRightMargin'], 'px' ),
				),

			);
			$mobile_selectors = array(
				' .responsive-block-editor-addons-block-columns' => array(
					'padding-top'    => self::get_css_value( $attr['blockTopPaddingMobile'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['blockBottomPaddingMobile'], 'px' ),
					'padding-left'   => self::get_css_value( $attr['blockLeftPaddingMobile'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['blockRightPaddingMobile'], 'px' ),
					'margin-top'     => self::get_css_value( $attr['blockTopMarginMobile'], 'px' ),
					'margin-bottom'  => self::get_css_value( $attr['blockBottomMarginMobile'], 'px' ),
					'margin-left'    => self::get_css_value( $attr['blockLeftMarginMobile'], 'px' ),
					'margin-right'   => self::get_css_value( $attr['blockRightMarginMobile'], 'px' ),
				),

			);

			$tablet_selectors = array(
				' .responsive-block-editor-addons-block-columns' => array(
					'padding-top'    => self::get_css_value( $attr['blockTopPaddingTablet'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['blockBottomPaddingTablet'], 'px' ),
					'padding-left'   => self::get_css_value( $attr['blockLeftPaddingTablet'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['blockRightPaddingTablet'], 'px' ),
					'margin-top'     => self::get_css_value( $attr['blockTopMarginTablet'], 'px' ),
					'margin-bottom'  => self::get_css_value( $attr['blockBottomMarginTablet'], 'px' ),
					'margin-left'    => self::get_css_value( $attr['blockLeftMarginTablet'], 'px' ),
					'margin-right'   => self::get_css_value( $attr['blockRightMarginTablet'], 'px' ),
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);
			$id                 = '.responsive-block-editor-addons-advanced-column-outer-wrap.block-' . $id;
			$css                = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			return $css;
		}

		 /*
		  Get Advanced Columns CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_post_carousel_css( $attr, $id ) {
			$defaults = self::get_responsive_block_post_carousel_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$slickButtonStyles = array(
				'border-color'  => $attr['arrowDotsColor'],
				'border-radius' => self::get_css_value( $attr['arrowBorderRadius'], 'px' ),
				'border-width'  => self::get_css_value( $attr['arrowBorderSize'], 'px' ),
			);
			$imgopacity        = $attr['opacity'] / 100;

			$pcBackgroundImageGradient = '';
			$pcColor                   = '';
			if ( $attr['buttonbackgroundType'] == 'gradient' ) {
				$pcBackgroundImageGradient = 'linear-gradient(' . $attr['buttongradientDirection'] . 'deg, ' . $attr['buttonbackgroundColor1'] . ' ' . $attr['buttoncolorLocation1'] . '%, ' . $attr['buttonbackgroundColor2'] . ' ' . $attr['buttoncolorLocation2'] . '%)';
			} elseif ( $attr['buttonbackgroundType'] == 'color' ) {
				$pcBackgroundImageGradient = '';
				$pcColor                   = $attr['ctaBackColor'];
			}

			$selectors = array(
				' .responsive-post-slick-carousel-' . $id . ' .slick-prev.slick-arrow' => $slickButtonStyles,
				' .responsive-post-slick-carousel-' . $id . ' .slick-next.slick-arrow' => $slickButtonStyles,
				' .responsive-post-slick-carousel-' . $id . ' .slick-slide>div:first-child' => array(
					'margin-left'  => self::get_css_value( ( $attr['columnGap'] / 2 ), 'px' ),
					'margin-right' => self::get_css_value( ( $attr['columnGap'] / 2 ), 'px' ),
				),
				' .responsive-block-editor-addons-block-post-carousel-title' => array(
					'font-family'   => $attr['titleFontFamily'],
					'font-size'     => self::get_css_value( $attr['titleFontSize'], 'px' ),
					'font-weight'   => $attr['titleFontWeight'],
					'line-height'   => $attr['titleLineHeight'],
					'margin-bottom' => self::get_css_value( $attr['titleSpace'], 'px' ),
					'margin-top'    => self::get_css_value( $attr['imageSpace'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-carousel-title a' => array(
					'color' => $attr['titleColor'],
				),
				' .responsive-block-editor-addons-block-post-carousel-byline' => array(
					'color'         => $attr['metaColor'],
					'font-family'   => $attr['metaFontFamily'],
					'font-size'     => self::get_css_value( $attr['metaFontSize'], 'px' ),
					'font-weight'   => $attr['metaFontWeight'],
					'line-height'   => $attr['metaLineHeight'],
					'margin-bottom' => self::get_css_value( $attr['dateSpace'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-carousel-excerpt' => array(
					'text-align'    => $attr['blockAlign'],
					'color'         => $attr['contentColor'],
					'font-family'   => $attr['excerptFontFamily'],
					'font-size'     => self::get_css_value( $attr['excerptFontSize'], 'px' ),
					'font-weight'   => $attr['excerptFontWeight'],
					'line-height'   => $attr['excerptLineHeight'],
					'margin-bottom' => self::get_css_value( $attr['excerptSpace'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-carousel-excerpt p' => array(
					'margin-bottom' => self::get_css_value( $attr['excerptSpace'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-carousel-date' => array(
					'color' => $attr['metaColor'],
				),
				' .responsive-block-editor-addons-block-post-carousel-author a' => array(
					'color' => $attr['metaColor'],
				),
				' .responsive-block-editor-addons-block-post-carousel-taxonomy a' => array(
					'color' => $attr['metaColor'],
				),
				' .responsive-block-editor-addons-block-post-carousel-more-link-wrapper' => array(
					'font-family'   => $attr['ctaFontFamily'],
					'font-size'     => self::get_css_value( $attr['ctaFontSize'], 'px' ),
					'font-weight'   => $attr['ctaFontWeight'],
					'line-height'   => $attr['ctaLineHeight'],
					'margin-bottom' => self::get_css_value( $attr['ctaSpace'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-carousel-more-link.responsive-block-editor-addons-text-link' => array(
					'color'            => $attr['ctaColor'],
					'background-color' => $pcColor,
					'background-image' => $pcBackgroundImageGradient,
					'border-color'     => $attr['ctaBorderColor'],
					'border-style'     => $attr['ctaBorderStyle'],
					'border-radius'    => self::get_css_value( $attr['ctaBorderRadius'], 'px' ),
					'border-width'     => self::get_css_value( $attr['ctaBorderWidth'], 'px' ),
					'padding-left'     => self::get_css_value( $attr['ctaHpadding'], 'px' ),
					'padding-right'    => self::get_css_value( $attr['ctaHpadding'], 'px' ),
					'padding-top'      => self::get_css_value( $attr['ctaVpadding'], 'px' ),
					'padding-bottom'   => self::get_css_value( $attr['ctaVpadding'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-carousel-more-link:hover' => array(
					'color'            => $attr['ctaHoverColor'],
					'background-color' => $attr['ctaHoverBackColor'],
					'border-color'     => $attr['ctaHoverBorderColor'],
				),
				' .slick-slide'                   => array(
					'margin-bottom' => self::get_css_value( $attr['rowGap'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-carousel-text-wrap' => array(
					'text-align' => $attr['blockAlign'],
					'padding'    => self::get_css_value( $attr['contentPadding'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-carousel-header' => array(
					'text-align' => $attr['blockAlign'],
				),
				' .responsive-block-editor-addons-post-carousel-inner' => array(
					'background-color' => $attr['bgColor'],
				),
				' .responsive-block-editor-addons-block-post-carousel-image-background img' => array(
					'opacity' => $imgopacity,
				),
				' ul.slick-dots li button:before' => array(
					'color' => $attr['arrowDotsColor'],
				),
				' ul.slick-dots li.slick-active button:before' => array(
					'color' => $attr['arrowDotsColor'],
				),

			);
			$mobile_selectors = array(
				' .responsive-block-editor-addons-block-post-carousel-text-wrap' => array(
					'padding' => self::get_css_value( $attr['contentPaddingMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-carousel-title' => array(
					'font-size' => self::get_css_value( $attr['titleFontSizeMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-carousel-more-link.responsive-block-editor-addons-text-link' => array(
					'padding-left'   => self::get_css_value( $attr['ctaHpaddingMobile'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['ctaHpaddingMobile'], 'px' ),
					'padding-top'    => self::get_css_value( $attr['ctaVpaddingMobile'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['ctaVpaddingMobile'], 'px' ),
				),
				' .responsive-post-slick-carousel-' . $id . ' .slick-prev.slick-arrow' => $slickButtonStyles,
				' .responsive-post-slick-carousel-' . $id . ' .slick-next.slick-arrow' => $slickButtonStyles,
				' .responsive-post-slick-carousel-' . $id . ' .slick-slide>div:first-child' => array(
					'margin-left'  => self::get_css_value( ( $attr['columnGapMobile'] / 2 ), 'px' ),
					'margin-right' => self::get_css_value( ( $attr['columnGapMobile'] / 2 ), 'px' ),
				),
				' .responsive-block-editor-addons-block-post-carousel-title' => array(
					'font-family'   => $attr['titleFontFamily'],
					'font-size'     => self::get_css_value( $attr['titleFontSize'], 'px' ),
					'font-weight'   => $attr['titleFontWeight'],
					'line-height'   => $attr['titleLineHeight'],
					'margin-bottom' => self::get_css_value( $attr['titleSpace'], 'px' ),
					'margin-top'    => self::get_css_value( $attr['imageSpace'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-carousel-title a' => array(
					'color' => $attr['titleColor'],
				),
				' .responsive-block-editor-addons-block-post-carousel-byline' => array(
					'color'         => $attr['metaColor'],
					'font-family'   => $attr['metaFontFamily'],
					'font-size'     => self::get_css_value( $attr['metaFontSize'], 'px' ),
					'font-weight'   => $attr['metaFontWeight'],
					'line-height'   => $attr['metaLineHeight'],
					'margin-bottom' => self::get_css_value( $attr['dateSpace'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-carousel-excerpt' => array(
					'text-align'    => $attr['blockAlign'],
					'color'         => $attr['contentColor'],
					'font-family'   => $attr['excerptFontFamily'],
					'font-size'     => self::get_css_value( $attr['excerptFontSize'], 'px' ),
					'font-weight'   => $attr['excerptFontWeight'],
					'line-height'   => $attr['excerptLineHeight'],
					'margin-bottom' => self::get_css_value( $attr['excerptSpace'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-carousel-excerpt p' => array(
					'margin-bottom' => self::get_css_value( $attr['excerptSpace'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-carousel-date' => array(
					'color' => $attr['metaColor'],
				),
				' .responsive-block-editor-addons-block-post-carousel-author a' => array(
					'color' => $attr['metaColor'],
				),
				' .responsive-block-editor-addons-block-post-carousel-taxonomy a' => array(
					'color' => $attr['metaColor'],
				),
				' .responsive-block-editor-addons-block-post-carousel-more-link-wrapper' => array(
					'font-family'   => $attr['ctaFontFamily'],
					'font-size'     => self::get_css_value( $attr['ctaFontSize'], 'px' ),
					'font-weight'   => $attr['ctaFontWeight'],
					'line-height'   => $attr['ctaLineHeight'],
					'margin-bottom' => self::get_css_value( $attr['ctaSpace'], 'px' ),
					'margin-top'    => '0px',
				),
				' .responsive-block-editor-addons-block-post-carousel-more-link.responsive-block-editor-addons-text-link' => array(
					'color'            => $attr['ctaColor'],
					'background-color' => $attr['ctaBackColor'],
					'border-color'     => $attr['ctaBorderColor'],
					'border-style'     => $attr['ctaBorderStyle'],
					'border-radius'    => self::get_css_value( $attr['ctaBorderRadius'], 'px' ),
					'border-width'     => self::get_css_value( $attr['ctaBorderWidth'], 'px' ),
					'padding-left'     => self::get_css_value( $attr['ctaHpadding'], 'px' ),
					'padding-right'    => self::get_css_value( $attr['ctaHpadding'], 'px' ),
					'padding-top'      => self::get_css_value( $attr['ctaVpadding'], 'px' ),
					'padding-bottom'   => self::get_css_value( $attr['ctaVpadding'], 'px' ),
					'display'          => 'inline-block',
				),
				' .responsive-block-editor-addons-block-post-carousel-more-link:hover' => array(
					'color'            => $attr['ctaHoverColor'],
					'background-color' => $attr['ctaHoverBackColor'],
					'border-color'     => $attr['ctaHoverBorderColor'],
				),
				' .slick-slide'                   => array(
					'margin-bottom' => self::get_css_value( $attr['rowGap'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-carousel-text-wrap' => array(
					'text-align' => $attr['blockAlign'],
					'padding'    => self::get_css_value( $attr['contentPadding'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-carousel-header' => array(
					'text-align' => $attr['blockAlign'],
				),
				' .responsive-block-editor-addons-post-carousel-inner' => array(
					'background-color' => $attr['bgColor'],
				),
				' .responsive-block-editor-addons-block-post-carousel-image-background img' => array(
					'opacity' => $imgopacity,
				),
				' ul.slick-dots li button:before' => array(
					'color' => $attr['arrowDotsColor'],
				),
				' ul.slick-dots li.slick-active button:before' => array(
					'color' => $attr['arrowDotsColor'],
				),
				' .responsive-block-editor-addons-block-post-carousel-title' => array(
					'font-size' => self::get_css_value( $attr['titleFontSizeMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-carousel-byline' => array(
					'font-size' => self::get_css_value( $attr['metaFontSizeMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-carousel-excerpt' => array(
					'font-size' => self::get_css_value( $attr['excerptFontSizeMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-carousel-more-link-wrapper' => array(
					'font-size' => self::get_css_value( $attr['ctaFontSizeMobile'], 'px' ),
				),
			);

			$tablet_selectors = array(
				' .responsive-block-editor-addons-block-post-carousel-text-wrap' => array(
					'padding' => self::get_css_value( $attr['contentPaddingTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-carousel-title' => array(
					'font-size' => self::get_css_value( $attr['titleFontSizeTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-carousel-more-link.responsive-block-editor-addons-text-link' => array(
					'padding-left'   => self::get_css_value( $attr['ctaHpaddingTablet'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['ctaHpaddingTablet'], 'px' ),
					'padding-top'    => self::get_css_value( $attr['ctaVpaddingTablet'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['ctaVpaddingTablet'], 'px' ),
				),
				' .responsive-post-slick-carousel-' . $id . ' .slick-prev.slick-arrow' => $slickButtonStyles,
				' .responsive-post-slick-carousel-' . $id . ' .slick-next.slick-arrow' => $slickButtonStyles,
				' .responsive-post-slick-carousel-' . $id . ' .slick-slide>div:first-child' => array(
					'margin-left'  => self::get_css_value( ( $attr['columnGapTablet'] / 2 ), 'px' ),
					'margin-right' => self::get_css_value( ( $attr['columnGapTablet'] / 2 ), 'px' ),
				),
				' .responsive-block-editor-addons-block-post-carousel-title' => array(
					'font-size' => self::get_css_value( $attr['titleFontSizeTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-carousel-byline' => array(
					'font-size' => self::get_css_value( $attr['metaFontSizeTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-carousel-excerpt' => array(
					'font-size' => self::get_css_value( $attr['excerptFontSizeTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-carousel-more-link-wrapper' => array(
					'font-size' => self::get_css_value( $attr['ctaFontSizeTablet'], 'px' ),
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);
			$id                 = '.responsive-block-editor-addons-block-post-carousel.block-' . $id;
			$css                = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			return $css;
		}

		/**
		 * Get Post Grid CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_post_grid_css( $attr, $id ) {
			$defaults = self::get_responsive_block_post_grid_block_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$boxShadowPositionCSS = $attr['boxShadowPosition'];

			if ( 'outset' === $attr['boxShadowPosition'] ) {
				$boxShadowPositionCSS = '';
			}
			$hoverboxShadowPositionCSS = $attr['hoverboxShadowPosition'];

			if ( 'outset' === $attr['hoverboxShadowPosition'] ) {
				$hoverboxShadowPositionCSS = '';
			}

			$mobile_selectors = array();
			$tablet_selectors = array();

			$displayLink = 'none';
			if ( $attr['displayPostLink'] ) {
				$displayLink = 'block';
			}

			$boxedcontentPadding = 0;
			$contentPadding      = 0;
			if ( 'content' === $attr['layout'] ) {
				$contentPadding      = $attr['contentPadding'];
				$boxedcontentPadding = 0;
			}
			if ( 'boxed' === $attr['layout'] ) {
				$boxedcontentPadding = $attr['contentPadding'];
			}

			$linkStyles = array();
			$linkStyles = array(
				'display'        => $displayLink,
				'color'          => $attr['readMoreLinkColor'],
				'font-size'      => self::get_css_value( $attr['continueFontSize'], 'px' ),
				'font-weight'    => $attr['continueFontWeight'],
				'line-height'    => $attr['continueLineHeight'],
				'text-transform' => $attr['continueTextTransform'],
				'font-family'    => $attr['continueFontFamily'],
			);

			$columnGap = '';
			if ( $attr['columnGap'] ) {
				$columnGap = $attr['columnGap'];
			}
			$columnGapTablet = '';
			if ( $attr['columnGapTablet'] ) {
				$columnGapTablet = $attr['columnGapTablet'];
			}
			$columnGapMobile = '';
			if ( $attr['columnGapMobile'] ) {
				$columnGapMobile = $attr['columnGapMobile'];
			}
			$rowGap = '';
			if ( $attr['rowGap'] ) {
				$rowGap = $attr['rowGap'];
			}
			$rowGapTablet = '';
			if ( $attr['columnGapTablet'] ) {
				$rowGapTablet = $attr['rowGapTablet'];
			}
			$rowGapMobile = '';
			if ( $attr['rowGapMobile'] ) {
				$rowGapMobile = $attr['rowGapMobile'];
			}
			$equalHeight = 'fit-content';
			if ( $attr['equalHeight'] ) {
				$equalHeight = 'auto';
			}
			$paginationBackground       = 'transparent';
			$paginationBackgroundActive = 'transparent';
			if ( 'filled' === $attr['paginationLayout'] ) {
				$paginationBackground       = $attr['paginationBorderColor'];
				$paginationBackgroundActive = $attr['paginationActiveBorderColor'];
			}

			$selectors = array(
				' .responsive-block-editor-addons-post-grid-items' => array(
					'grid-column-gap' => self::get_css_value( $columnGap, 'px' ),
					'grid-row-gap'    => self::get_css_value( $rowGap, 'px' ),
				),
				' article'                     => array(
					'background-color' => $attr['bgColor'] . ' !important',
					'border-style'     => $attr['blockBorderStyle'],
					'border-color'     => $attr['blockBorderColor'],
					'border-radius'    => self::get_css_value( $attr['blockBorderRadius'], 'px' ) . ' !important',
					'border-width'     => self::get_css_value( $attr['blockBorderWidth'], 'px' ),
					'height'           => $equalHeight,
					'box-shadow'       => self::get_css_value( $attr['boxShadowHOffset'], 'px' ) . ' ' . self::get_css_value( $attr['boxShadowVOffset'], 'px' ) . ' ' . self::get_css_value( $attr['boxShadowBlur'], 'px' ) . ' ' . self::get_css_value( $attr['boxShadowSpread'], 'px' ) . ' ' . $attr['boxShadowColor'] . ' ' . $boxShadowPositionCSS,
					'padding'          => self::get_css_value( $boxedcontentPadding, 'px' ),

				),
				' article:hover'               => array(
					'box-shadow' => self::get_css_value( $attr['hoverboxShadowHOffset'], 'px' ) . ' ' . self::get_css_value( $attr['hoverboxShadowVOffset'], 'px' ) . ' ' . self::get_css_value( $attr['hoverboxShadowBlur'], 'px' ) . ' ' . self::get_css_value( $attr['hoverboxShadowSpread'], 'px' ) . ' ' . $attr['hoverboxShadowColor'] . ' ' . $hoverboxShadowPositionCSS,
				),
				' .responsive-block-editor-addons-post-grid-items article' => array(
					'padding' => self::get_css_value( $boxedcontentPadding, 'px' ),
				),
				' .responsive-block-editor-addons-block-post-grid-text' => array(
					'padding'    => self::get_css_value( $contentPadding, 'px' ),
					'text-align' => $attr['textAlignment'],
				),
				' header .responsive-block-editor-addons-block-post-grid-title' => array(
					'font-family'    => $attr['titleFontFamily'],
					'font-size'      => self::get_css_value( $attr['titleFontSize'], 'px' ),
					'font-weight'    => $attr['titleFontWeight'],
					'line-height'    => $attr['titleLineHeight'],
					'text-transform' => $attr['titleTextTransform'],
					'margin-bottom'  => self::get_css_value( $attr['titleBottomSpacing'], 'px' ),
				),
				' header .responsive-block-editor-addons-block-post-grid-title a' => array(
					'color' => $attr['titleColor'],
				),
				' header .responsive-block-editor-addons-block-post-grid-title a:hover' => array(
					'color' => $attr['titleHoverColor'],
				),
				' .responsive-block-editor-addons-block-post-grid-byline' => array(
					'color'          => $attr['metaColor'],
					'font-family'    => $attr['metaFontFamily'],
					'font-size'      => self::get_css_value( $attr['metaFontSize'], 'px' ),
					'font-weight'    => $attr['metaFontWeight'],
					'line-height'    => $attr['metaLineHeight'],
					'text-transform' => $attr['metaTextTransform'],
					'margin-bottom'  => self::get_css_value( $attr['metaBottomSpacing'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-grid-text .responsive-block-editor-addons-block-post-grid-excerpt' => array(
					'color'          => $attr['textColor'],
					'font-family'    => $attr['excerptFontFamily'],
					'font-size'      => self::get_css_value( $attr['excerptFontSize'], 'px' ),
					'font-weight'    => $attr['excerptFontWeight'],
					'line-height'    => $attr['excerptLineHeight'],
					'text-transform' => $attr['excerptTextTransform'],
					'margin-bottom'  => self::get_css_value( $attr['excerptBottomSpacing'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-grid-more-link' => $linkStyles,
				' .responsive-block-editor-addons-block-post-grid-more-link:hover' => array(
					'color'           => $attr['readMoreHoverColor'],
					'text-decoration' => 'none',
				),
				' .read-more a'                => $linkStyles,
				' .responsive-block-editor-addons-post-grid-item' => array(
					'margin-bottom' => 0,
				),
				' .is-list .responsive-block-editor-addons-post-grid-item:not(:last-child)' => array(
					'margin-bottom' => self::get_css_value( $attr['rowGap'], 'px' ),
				),
				' .is-list article:last-child' => array(
					'margin-bottom' => 0,
				),
				' .responsive-block-editor-addons-block-post-grid-image img' => array(
					'border-radius' => self::get_css_value( $attr['imageBorderRadius'], 'px' ),
				),
				' .responsive-block-editor-addons-post-pagination-wrap > *' => array(
					'border-width'     => self::get_css_value( $attr['paginationBorderWidth'], 'px' ),
					'border-color'     => $attr['paginationBorderColor'],
					'border-style'     => $attr['paginationBorderStyle'],
					'background-color' => $paginationBackground,
					'border-radius'    => self::get_css_value( $attr['paginationBorderRadius'], 'px' ),
					'color'            => $attr['paginationTextColor'] . ' !important',
					'margin-right'     => '10px',
					'padding'          => '0.5em',
				),
				' .responsive-block-editor-addons-post-pagination-wrap > *:last-child' => array(
					'margin-right' => '0',
				),
				' .responsive-block-editor-addons-post-pagination-wrap > span' => array(
					'border-width'     => self::get_css_value( $attr['paginationBorderWidth'], 'px' ),
					'border-color'     => $attr['paginationActiveBorderColor'],
					'border-style'     => $attr['paginationBorderStyle'],
					'background-color' => $paginationBackgroundActive,
					'color'            => $attr['paginationTextActiveColor'] . ' !important',
				),
				' .responsive-block-editor-addons-post-pagination-wrap' => array(
					'text-align' => $attr['paginationAlignment'],
				),

			);

			$gridTemplateColumns = '1fr 1fr';
			if ( $attr['stackonMobile'] ) {
				$gridTemplateColumns = '1fr';
			}
			$mobileContentPadding = '0';
			if ( 'boxed' === $attr['layout'] && $attr['contentPaddingMobile'] ) {
				$mobileContentPadding = $attr['contentPaddingMobile'];
			}
			$tabletContentPadding = '0';
			if ( 'boxed' === $attr['layout'] && $attr['contentPaddingTablet'] ) {
				$tabletContentPadding = $attr['contentPaddingTablet'];
			}
			$mobile_selectors = array(
				' header .responsive-block-editor-addons-block-post-grid-title' => array(
					'font-size' => self::get_css_value( $attr['titleFontSizeMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-post-grid-item' => array(
					'margin-bottom' => self::get_css_value( $attr['rowGapMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-post-grid-items article' => array(
					'padding'    => self::get_css_value( $mobileContentPadding, 'px' ),
					'text-align' => $attr['textAlignment'],
				),
				' .is-list article' => array(
					'grid-template-columns' => $gridTemplateColumns,
				),
				' .responsive-block-editor-addons-post-grid-items' => array(
					'grid-column-gap' => self::get_css_value( $columnGapMobile, 'px' ),
					'grid-row-gap'    => self::get_css_value( $rowGapMobile, 'px' ),
				),
				' header .responsive-block-editor-addons-block-post-grid-title' => array(
					'margin-bottom' => self::get_css_value( $attr['titleBottomSpacingMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-grid-byline' => array(
					'margin-bottom' => self::get_css_value( $attr['metaBottomSpacingMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-grid-text .responsive-block-editor-addons-block-post-grid-excerpt' => array(
					'margin-bottom' => self::get_css_value( $attr['excerptBottomSpacingMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-grid-byline' => array(
					'font-size' => self::get_css_value( $attr['metaFontSizeMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-grid-text .responsive-block-editor-addons-block-post-grid-excerpt' => array(
					'font-size' => self::get_css_value( $attr['excerptFontSizeMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-grid-more-link' => array(
					'font-size' => self::get_css_value( $attr['continueFontSizeMobile'], 'px' ),
				),
			);

			$tablet_selectors = array(
				' header .responsive-block-editor-addons-block-post-grid-title' => array(
					'font-size' => self::get_css_value( $attr['titleFontSizeTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-post-grid-item' => array(
					'margin-bottom' => self::get_css_value( $attr['rowGapTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-post-grid-items' => array(
					'grid-column-gap' => self::get_css_value( $columnGapTablet, 'px' ),
					'grid-row-gap'    => self::get_css_value( $rowGapTablet, 'px' ),
				),
				' .responsive-block-editor-addons-post-grid-items article' => array(
					'padding' => self::get_css_value( $tabletContentPadding, 'px' ),
				),
				' header .responsive-block-editor-addons-block-post-grid-title' => array(
					'margin-bottom' => self::get_css_value( $attr['titleBottomSpacingTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-grid-byline' => array(
					'margin-bottom' => self::get_css_value( $attr['metaBottomSpacingTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-grid-text .responsive-block-editor-addons-block-post-grid-excerpt' => array(
					'margin-bottom' => self::get_css_value( $attr['excerptBottomSpacingTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-grid-byline' => array(
					'font-size' => self::get_css_value( $attr['metaFontSizeTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-grid-text .responsive-block-editor-addons-block-post-grid-excerpt' => array(
					'font-size' => self::get_css_value( $attr['excerptFontSizeTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-grid-more-link' => array(
					'font-size' => self::get_css_value( $attr['continueFontSizeTablet'], 'px' ),
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id              = '.responsive-block-editor-addons-block-post-grid.block-id-' . $id;
			$css             = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			$css['desktop'] .= '.page-template-gutenberg-fullwidth ' . $id . ' .responsive-block-editor-addons-post-grid-items article {padding:' . ( $attr['layout'] === 'boxed' ? $attr['contentPadding'] ? $attr['contentPadding'] : '0' : '0' ) . 'px;}
    ';
			return $css;
		}

		public static function get_responsive_block_count_up_css( $attr, $id ) {
			$defaults = self::get_responsive_block_count_up_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$imgopacity = $attr['opacity'] / 100;

			$selectors        = array(
				'.responsive-count__inner .responsive-count-item__features li' => array(
					'line-height' => $attr['contentLineHeight'],
				),
				'.responsive-count__inner .responsive-block-editor-addons-count-up__source-wrap.res-countup-icon-design-shaped .responsive-block-editor-addons-count-up__source-icon' => array(
					'background-color' => $attr['iconShapeColor'],
					'border-radius'    => self::get_css_value( $attr['shapeBorderRadius'], 'px' ),
					'padding'          => self::get_css_value( $attr['shapePadding'], 'px' ),
				),
				'.responsive-count__inner .responsive-block-editor-addons-count-up__source-wrap.res-countup-icon-design-outline .responsive-block-editor-addons-count-up__source-icon' => array(
					'border-color'  => $attr['iconShapeColor'],
					'border-radius' => self::get_css_value( $attr['shapeBorderRadius'], 'px' ),
					'padding'       => self::get_css_value( $attr['shapePadding'], 'px' ),
					'border-width'  => self::get_css_value( $attr['shapeBorder'], 'px' ),
				),
				'.responsive-count__inner .responsive-block-editor-addons-count-up__source-icon svg' => array(
					'width'  => self::get_css_value( $attr['iconsize'], 'px' ),
					'height' => self::get_css_value( $attr['iconsize'], 'px' ),
					'fill'   => $attr['icon_color'],
				),
				' .responsive-count-item'           => array(
					'background-color' => self::hexToRgb( $attr['itemBackgroundColor'], $imgopacity ),
					'border-width'     => self::get_css_value( $attr['blockBorderWidth'], 'px' ),
					'border-color'     => $attr['blockBorderColor'],
					'border-style'     => $attr['blockBorderStyle'],
					'border-radius'    => self::get_css_value( $attr['blockBorderRadius'], 'px' ),
				),
				' .responsive-block-editor-addons-count-up__source-wrap' => array(
					'margin-bottom' => self::get_css_value( $attr['iconSpacing'], 'px' ),
				),
				' .responsive-count-item__title'    => array(
					'color'         => $attr['titleColor'],
					'line-height'   => $attr['headingLineHeight'],
					'font-size'     => self::get_css_value( $attr['headingFontSize'], 'px' ),
					'font-family'   => $attr['headingFontFamily'],
					'font-weight'   => $attr['headingFontWeight'],
					'margin-bottom' => self::get_css_value( $attr['titleSpace'], 'px' ),
				),
				'.responsive-count__inner .responsive-count-item__price-wrapper .responsive-count-item__amount' => array(
					'color'         => $attr['numColor'],
					'line-height'   => $attr['dateLineHeight'],
					'font-weight'   => $attr['dateFontWeight'],
					'font-size'     => self::get_css_value( $attr['dateFontSize'], 'px' ),
					'font-family'   => $attr['dateFontFamily'],
					'margin-bottom' => self::get_css_value( $attr['numSpace'], 'px' ),
				),
				' .responsive-count-item__features' => array(
					'color'         => $attr['textColor'],
					'line-height'   => $attr['contentLineHeight'],
					'font-weight'   => $attr['contentFontWeight'],
					'font-size'     => self::get_css_value( $attr['contentFontSize'], 'px' ),
					'font-family'   => $attr['contentFontFamily'],
					'margin-bottom' => self::get_css_value( $attr['contentSpace'], 'px' ),
				),
			);
			$mobile_selectors = array(
				'.responsive-count__inner .responsive-count-item__title' => array(
					'font-size' => self::get_css_value( $attr['headingFontSizeMobile'], 'px' ),
				),
				'.responsive-count__inner .responsive-count-item__price-wrapper .responsive-count-item__amount' => array(
					'font-size' => self::get_css_value( $attr['dateFontSizeMobile'], 'px' ),
				),
				' .responsive-count-item__features' => array(
					'font-size' => self::get_css_value( $attr['contentFontSizeMobile'], 'px' ),
				),
			);

			$tablet_selectors = array(
				'.responsive-count__inner .responsive-count-item__title' => array(
					'font-size' => self::get_css_value( $attr['headingFontSizeTablet'], 'px' ),
				),
				'.responsive-count__inner .responsive-count-item__price-wrapper .responsive-count-item__amount' => array(
					'font-size' => self::get_css_value( $attr['dateFontSizeTablet'], 'px' ),
				),
				' .responsive-count-item__features' => array(
					'font-size' => self::get_css_value( $attr['contentFontSizeTablet'], 'px' ),
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id              = '.responsive-block-editor-addons-block-count-up.block-' . $id;
			$css             = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			$css['desktop'] .= '
            .responsive-count {
               padding:' . $attr['contentPadding'] . 'px;
            }
            ';
			$css['tablet']  .= '
            .responsive-count {
               padding:' . $attr['contentPaddingTablet'] . 'px;
            }
            ';
			$css['mobile']  .= '
            .responsive-count {
               padding:' . $attr['contentPaddingMobile'] . 'px;
            }
            ';

			return $css;
		}

		public static function get_responsive_block_blockquote_css( $attr, $id ) {
			$defaults = self::get_responsive_block_blockquote_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$quoteopacity         = $attr['quoteOpacity'] / 100;
			$imgopacity           = $attr['opacity'] / 100;
			$boxShadowPositionCSS = $attr['boxShadowPosition'];

			if ( 'outset' === $attr['boxShadowPosition'] ) {
				$boxShadowPositionCSS = '';
			}

			$selectors = array(
				' ' => array(
					'background-color' =>
					$attr['backgroundType'] == 'color'
					  ? self::hexToRgb( $attr['backgroundColor'], $imgopacity ) : '',
					'color'            => $attr['quoteTextColor'],
					'border-color'     => $attr['blockBorderColor'],
					'border-style'     => $attr['blockBorderStyle'],
					'border-width'     => self::get_css_value( $attr['blockBorderWidth'], 'px' ),
					'border-radius'    => self::get_css_value( $attr['blockBorderRadius'], 'px' ),
					'box-shadow'       =>
					self::get_css_value( $attr['boxShadowHOffset'], 'px' ) .
					' ' .
					self::get_css_value( $attr['boxShadowVOffset'], 'px' ) .
					' ' .
					self::get_css_value( $attr['boxShadowBlur'], 'px' ) .
					' ' .
					self::get_css_value( $attr['boxShadowSpread'], 'px' ) .
					' ' .
					$attr['boxShadowColor'] .
					' ' .
					$boxShadowPositionCSS,
					'position'         => 'relative',
					'text-align'       => $attr['quoteAlign'],
					'padding-left'     => self::get_css_value( $attr['blockLeftPadding'], 'px' ),
					'padding-right'    => self::get_css_value( $attr['blockRightPadding'], 'px' ),
					'padding-top'      => self::get_css_value( $attr['blockTopPadding'], 'px' ),
					'padding-bottom'   => self::get_css_value( $attr['blockBottomPadding'], 'px' ),
					'background-color' =>
					  $attr['backgroundType'] == 'color'
						? self::hexToRgb( $attr['backgroundColor'], $imgopacity )
						: null,
					'background-image' =>
					  $attr['backgroundType'] == 'gradient'
						? 'linear-gradient(' .
						  $attr['gradientDirection'] .
						  'deg,' .
						  self::hexToRgb( $attr['backgroundColor1'] ? $attr['backgroundColor1'] : '#ffffff', $imgopacity ) .
						  ',' .
						  self::hexToRgb( $attr['backgroundColor2'] ? $attr['backgroundColor2'] : '#ffffff', $imgopacity ) .
						  ')'
						: null,
				),
				' .responsive-block-editor-addons-section__video-wrap' => array(
					'opacity' => $imgopacity,
				),
				' .responsive-block-editor-addons-section-background-image-wrap .responsive-block-editor-addons-section-background-image' => array(
					'height'        => 100 . '%',
					'opacity'       => $imgopacity,
					'border-radius' => self::get_css_value( $attr['blockBorderRadius'], 'px' ),
				),
				' .responsive-block-editor-addons-block-blockquote-item .responsive-block-editor-addons-block-blockquote-quote' => array(
					'height'  => self::get_css_value( $attr['quoteSize'], 'px' ),
					'width'   => self::get_css_value( $attr['quoteSize'], 'px' ),
					'fill'    => $attr['quoteColor'],
					'left'    => self::get_css_value( $attr['quoteHposition'], 'px' ),
					'top'     => self::get_css_value( $attr['quoteVposition'], 'px' ),
					'opacity' => $quoteopacity,
				),
				' .responsive-block-editor-addons-block-blockquote-text' => array(
					'text-align'  => $attr['quoteAlign'],
					'font-family' => $attr['quoteFontFamily'],
					'font-size'   => self::get_css_value( $attr['quoteFontSize'], 'px' ),
					'font-weight' => $attr['quoteFontWeight'],
					'line-height' => $attr['quoteLineHeight'],
				),
				' .responsive-block-editor-addons-block-blockquote-item' => array(
					'padding-left'   => self::get_css_value( $attr['textSpacingLeft'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['textSpacingRight'], 'px' ),
					'padding-top'    => self::get_css_value( $attr['textSpacingTop'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['textSpacingBottom'], 'px' ),
				),

			);
			$mobile_selectors = array(
				' .responsive-block-editor-addons-block-blockquote-text' => array(
					'font-size' => self::get_css_value( $attr['quoteFontSizeMobile'], 'px' ),
				),
				' ' => array(
					'padding-left'   => self::get_css_value( $attr['blockLeftPaddingMobile'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['blockRightPaddingMobile'], 'px' ),
					'padding-top'    => self::get_css_value( $attr['blockTopPaddingMobile'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['blockBottomPaddingMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-blockquote-item' => array(
					'padding-left'   => self::get_css_value( $attr['textSpacingLeftMobile'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['textSpacingRightMobile'], 'px' ),
					'padding-top'    => self::get_css_value( $attr['textSpacingTopMobile'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['textSpacingBottomMobile'], 'px' ),
				),
			);

			$tablet_selectors = array(
				' .responsive-block-editor-addons-block-blockquote-text' => array(
					'font-size' => self::get_css_value( $attr['quoteFontSizeTablet'], 'px' ),
				),
				' ' => array(
					'padding-left'   => self::get_css_value( $attr['blockLeftPaddingTablet'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['blockRightPaddingTablet'], 'px' ),
					'padding-top'    => self::get_css_value( $attr['blockTopPaddingTablet'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['blockBottomPaddingTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-blockquote-item' => array(
					'padding-left'   => self::get_css_value( $attr['textSpacingLeftTablet'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['textSpacingRightTablet'], 'px' ),
					'padding-top'    => self::get_css_value( $attr['textSpacingTopTablet'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['textSpacingBottomTablet'], 'px' ),
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-block-blockquote.block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );

			return $css;
		}

		/**
		 * Get Divider CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_divider_css( $attr, $id ) {
			$defaults = self::get_responsive_block_divider_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$selectors        = array(
				' ' => array(
					'color' => $attr['spacerDividerColor'],
				),
				' .responsive-block-editor-addons-spacer-handle' => array(
					'color' => $attr['spacerDividerColor'],
				),
				' .responsive-block-editor-addons-divider-inner .responsive-block-editor-addons-divider-content' => array(
					'margin-top'    => self::get_css_value( $attr['spacerHeight'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['spacerHeight'], 'px' ),
				),
				' .responsive-block-editor-addons-divider-inner .responsive-block-editor-addons-divider-content .responsive-block-editor-addons-divider_hr' => array(
					'height'           => self::get_css_value( $attr['spacerDividerHeight'], 'px' ),
					'width'            => $attr['spacerDividerWidth'] . '%',
					'background-color' => $attr['spacerDividerColor'],
					'border-radius'    =>
					  $attr['spacerDividerStyle'] === 'basic'
						? 0
						: self::get_css_value( $attr['spacerDividerHeight'] / 2, 'px' ),
					'margin-left'      => $attr['spacerDividerAlignment'] === 'left' ? 0 : 'auto',
					'margin-right'     => $attr['spacerDividerAlignment'] === 'right' ? 0 : 'auto',
				),
				' .responsive-block-editor-addons-divider-inner .responsive-block-editor-addons-divider-content .rgbl-divider__dots' => array(
					'width'        => $attr['spacerDividerWidth'] . '%',
					'margin-left'  => $attr['spacerDividerAlignment'] === 'left' ? 0 : 'auto',
					'margin-right' => $attr['spacerDividerAlignment'] === 'right' ? 0 : 'auto',
				),
				' .responsive-block-editor-addons-divider-inner .responsive-block-editor-addons-divider-content .rgbl-divider__dots .rgbl-divider__dot' => array(
					'height'           => self::get_css_value( $attr['spacerDividerHeight'], 'px' ),
					'background-color' => $attr['spacerDividerColor'],
					'font-size'        => self::get_css_value( $attr['spacerDividerHeight'] * 1.8, 'px' ),
					'width'            => self::get_css_value( $attr['spacerDividerHeight'], 'px' ),
				),
			);
			$mobile_selectors = array(
				' .responsive-block-editor-addons-divider-inner .responsive-block-editor-addons-divider-content' => array(
					'margin-top'    => self::get_css_value( $attr['spacerHeightMobile'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['spacerHeightMobile'], 'px' ),
				),
			);

			$tablet_selectors = array(
				' .responsive-block-editor-addons-divider-inner .responsive-block-editor-addons-divider-content' => array(
					'margin-top'    => self::get_css_value( $attr['spacerHeightTablet'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['spacerHeightTablet'], 'px' ),
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-block-divider.block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			return $css;
		}

		/**
		 * Get Defaults for post grid block
		 *
		 * @return array
		 */

		public static function get_responsive_block_post_grid_block_default_attributes() {
			return array(
				'textAlignment'               => 'left',
				'postsToShow'                 => 6,
				'stackonMobile'               => true,
				'displayPostDate'             => true,
				'excludeCurrentPost'          => true,
				'displayPostExcerpt'          => true,
				'displayPostAuthor'           => true,
				'displayPostImage'            => true,
				'displayPostLink'             => true,
				'displayPostTitle'            => true,
				'displaySectionTitle'         => false,
				'postPagination'              => false,
				'equalHeight'                 => true,
				'postTitleTag'                => 'h3',
				'postLayout'                  => 'grid',
				'columns'                     => 2,
				'align'                       => 'center',
				'width'                       => 'wide',
				'orderBy'                     => 'date',
				'order'                       => 'desc',
				'readMoreText'                => 'Read More »',
				'offset'                      => 0,
				'excerptLength'               => 55,
				'postType'                    => 'post',
				'postTaxonomy'                => 'category',
				'taxonomyType'                => 'category',
				'paginationAlignment'         => 'left',
				'paginationLayout'            => '',
				'sectionTag'                  => 'section',
				'sectionTitle'                => '',
				'sectionTitleTag'             => 'h2',
				'imageSize'                   => 'full',
				'id'                          => '',
				'bgColor'                     => '#e4e4e4',
				'paginationBorderStyle'       => '',
				'paginationBorderColor'       => '#e4e4e4',
				'paginationTextActiveColor'   => '',
				'paginationTextColor'         => '',
				'paginationActiveBorderColor' => '',
				'paginationBorderWidth'       => '',
				'paginationBorderRadius'      => '',
				'paginationSpacing'           => '',
				'imageBorderRadius'           => '',
				'textColor'                   => '#444444',
				'previousButtonText'          => 'Previous',
				'nextButtonText'              => 'Next',
				'imagePosition'               => 'top',
				'layout'                      => 'boxed',
				'metaColor'                   => '#444444',
				'readMoreLinkColor'           => '#0066cc',
				'readMoreHoverColor'          => '#0558ab',
				'titleColor'                  => '#444444',
				'titleHoverColor'             => '#444444',
				'contentPadding'              => 30,
				'contentPaddingMobile'        => 10,
				'contentPaddingTablet'        => 10,
				'continueFontSize'            => '',
				'continueFontSizeMobile'      => '',
				'continueFontSizeTablet'      => '',
				'continueLineHeight'          => '',
				'continueFontFamily'          => '',
				'continueFontWeight'          => '',
				'continueTextTransform'       => '',
				'titleFontSize'               => '',
				'titleFontSizeMobile'         => '',
				'titleFontSizeTablet'         => '',
				'titleLineHeight'             => '',
				'titleFontWeight'             => '',
				'titleTextTransform'          => '',
				'metaFontSize'                => '',
				'metaFontSizeMobile'          => '',
				'metaFontSizeTablet'          => '',
				'metaLineHeight'              => '',
				'metaFontWeight'              => '',
				'metaTextTransform'           => '',
				'titleFontFamily'             => '',
				'metaFontFamily'              => '',
				'excerptFontFamily'           => '',
				'excerptFontSize'             => '',
				'excerptFontSizeMobile'       => '',
				'excerptFontSizeTablet'       => '',
				'excerptLineHeight'           => '',
				'excerptFontWeight'           => '',
				'excerptTextTransform'        => '',
				'excerptBottomSpacing'        => '',
				'excerptBottomSpacingMobile'  => '',
				'excerptBottomSpacingTablet'  => '',
				'metaBottomSpacing'           => '',
				'metaBottomSpacingMobile'     => '',
				'metaBottomSpacingTablet'     => '',
				'titleBottomSpacing'          => '',
				'titleBottomSpacingMobile'    => '',
				'titleBottomSpacingTablet'    => '',
				'columnGap'                   => 20,
				'rowGap'                      => '',
				'rowGapMobile'                => '',
				'rowGapTablet'                => '',
				'blockBorderWidth'            => '0',
				'blockBorderRadius'           => '0',
				'blockBorderStyle'            => 'none',
				'blockBorderColor'            => '#333',
				'pageLimit'                   => '10',
				'taxonomyType'                => 'category',
				'postGridBlockId'             => '',
				'boxShadowColor'              => '',
				'boxShadowHOffset'            => '0',
				'boxShadowVOffset'            => '0',
				'boxShadowBlur'               => '0',
				'boxShadowSpread'             => '0',
				'boxShadowPosition'           => 'outset',
				'hoverboxShadowColor'         => '#cccccc',
				'hoverboxShadowHOffset'       => 0,
				'hoverboxShadowVOffset'       => 0,
				'hoverboxShadowBlur'          => 6,
				'hoverboxShadowSpread'        => 1,
				'hoverboxShadowPosition'      => 'outset',
				'columnGapTablet'             => 20,
				'columnGapMobile'             => 20,
			);
		}

		/**
		 * Get Defaults for post carousel block
		 *
		 * @return array
		 */
		public static function get_responsive_block_post_carousel_default_attributes() {
			return array(
				'blockAlign'              => 'left',
				'columns'                 => 2,
				'tcolumns'                => 1,
				'mcolumns'                => 1,
				'block_id'                => 1,
				'autoplaySpeed'           => 2000,
				'autoplay'                => true,
				'infiniteLoop'            => true,
				'pauseOnHover'            => true,
				'transitionSpeed'         => 500,
				'arrowSize'               => 20,
				'arrowDots'               => 'arrows_dots',
				'arrowBorderSize'         => 1,
				'arrowBorderRadius'       => 0,
				'postsToShow'             => 6,
				'displayPostDate'         => true,
				'displayPostExcerpt'      => true,
				'displayPostAuthor'       => true,
				'displayPostImage'        => true,
				'displayPostLink'         => true,
				'displayPostTitle'        => true,
				'displayPostComment'      => true,
				'displayPostTaxonomy'     => true,
				'buttonTarget'            => false,
				'equalHeight'             => true,
				'categories'              => '',
				'className'               => '',
				'postTitleTag'            => 'h3',
				'align'                   => 'center',
				'order'                   => 'desc',
				'orderBy'                 => 'date',
				'readMoreText'            => 'Continue Reading',
				'offset'                  => 0,
				'excerptLength'           => 20,
				'postType'                => 'post',
				'sectionTag'              => 'section',
				'sectionTitle'            => '',
				'sectionTitleTag'         => 'h2',
				'imageSize'               => 'full',
				'ctaHoverColor'           => '#ffffff',
				'bgColor'                 => '#ffffff',
				'ctaColor'                => '#ffffff',
				'ctaBackColor'            => '#333333',
				'titleColor'              => '#333333',
				'contentColor'            => '#333333',
				'metaColor'               => '#333333',
				'arrowDotsColor'          => '#333333',
				'ctaHoverBackColor'       => '#444444',
				'ctaBorderColor'          => '',
				'ctaHoverBorderColor'     => '',
				'ctaBorderStyle'          => 'none',
				'ctaBorderRadius'         => 0,
				'ctaBorderWidth'          => 2,
				'ctaHpadding'             => 20,
				'ctaVpadding'             => 15,
				'contentPadding'          => 20,
				'contentPaddingTablet'    => 20,
				'contentPaddingMobile'    => 20,
				'rowGap'                  => 20,
				'columnGap'               => 20,
				'columnGapTablet'         => 20,
				'columnGapMobile'         => 20,
				'imageSpace'              => null,
				'titleSpace'              => null,
				'dateSpace'               => 20,
				'excerptSpace'            => 20,
				'ctaSpace'                => 20,
				'titleFontSize'           => 20,
				'titleFontSizeMobile'     => 20,
				'titleFontSizeTablet'     => 20,
				'titleFontWeight'         => 100,
				'titleLineHeight'         => 1,
				'metaFontSize'            => 16,
				'metaFontSizeMobile'      => 16,
				'metaFontSizeTablet'      => 16,
				'metaFontWeight'          => 100,
				'metaLineHeight'          => 1,
				'excerptFontSize'         => 16,
				'excerptFontSizeMobile'   => 16,
				'excerptFontSizeTablet'   => 16,
				'excerptFontWeight'       => 100,
				'excerptLineHeight'       => 1,
				'ctaFontSize'             => 16,
				'ctaFontSizeMobile'       => 16,
				'ctaFontSizeTablet'       => 16,
				'ctaFontWeight'           => 100,
				'ctaLineHeight'           => 1,
				'opacity'                 => 50,
				'imagePosition'           => 'background',
				'titleFontFamily'         => '',
				'metaFontFamily'          => '',
				'excerptFontFamily'       => '',
				'ctaFontFamily'           => '',
				'ctaHpaddingTablet'       => 20,
				'ctaHpaddingMobile'       => 20,
				'ctaVpaddingTablet'       => 15,
				'ctaVpaddingMobile'       => 15,
				'buttoncolorLocation1'    => 0,
				'buttoncolorLocation2'    => 100,
				'buttongradientDirection' => 90,
				'buttonbackgroundColor1'  => '',
				'buttonbackgroundColor2'  => '#fff',
				'buttonbackgroundType'    => '',
			);
		}

		/**
		 * Get Accordian Block CSS
		 * *
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_accordian_css( $attr, $id ) {
			$defaults = self::get_responsive_block_accordian_block_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$icon_color        = $attr['iconColor'];
			$icon_active_color = $attr['iconActiveColor'];
			if ( ! $attr['iconColor'] ) {
				$icon_color = $attr['titleTextColor'];
			}
			if ( ! $attr['iconActiveColor'] ) {
				$icon_active_color = $attr['titleTextActiveColor'];
			}

			$contentOpacity                 = $attr['titleBackgroundColorOpacity'] / 100;
			$contentBackgroundColorsOpacity = $attr['contentBackgroundColorOpacity'] / 100;

			$temptitleSecondaryBackgroundColor = $attr['titleBgGradient'] ? $attr['titleSecondaryBackgroundColor'] : $attr['titleBackgroundColor'];
			$titleGradient                     = '';
			if ( $attr['titleBgGradient'] ) {
				$titleGradient = 'linear-gradient(' .
					$attr['titleGradientDegree'] .
					'deg,' .
					self::hexToRgb( $attr['titleBackgroundColor'] ? $attr['titleBackgroundColor'] : '#ffffff', $contentOpacity ) .
					',' .
					self::hexToRgb( $temptitleSecondaryBackgroundColor ? $temptitleSecondaryBackgroundColor : '#ffffff', $contentOpacity ) .
					')';
			}

			$tempActiveSecondaryBackgroundColor = $attr['contentBgGradient'] ? $attr['contentSecondaryBackgroundColor'] : $attr['contentBackgroundColor'];
			$contentGradient                    = 'linear-gradient(' .
				$attr['contentGradientDegree'] .
				'deg,' .
				self::hexToRgb( $attr['contentBackgroundColor'] ? $attr['contentBackgroundColor'] : '#ffffff', $contentBackgroundColorsOpacity ) .
				',' .
				self::hexToRgb( $tempActiveSecondaryBackgroundColor ? $tempActiveSecondaryBackgroundColor : '#ffffff', $contentBackgroundColorsOpacity ) .
				')';

			$selectors = array(
				' ' => array(
					'margin-top'    => self::get_css_value( ( $attr['marginV'] ), 'px' ),
					'margin-bottom' => self::get_css_value( ( $attr['marginV'] ), 'px' ),
					'margin-left'   => self::get_css_value( ( $attr['marginH'] ), 'px' ),
					'margin-right'  => self::get_css_value( ( $attr['marginH'] ), 'px' ),
				),
				' .responsive-block-editor-addons-icon svg' => array(
					'width'        => self::get_css_value( ( $attr['iconSize'] ), $attr['iconSizeType'] ),
					'height'       => self::get_css_value( ( $attr['iconSize'] ), $attr['iconSizeType'] ),
					'font-size'    => self::get_css_value( ( $attr['iconSize'] ), $attr['iconSizeType'] ),
					'fill'         => $icon_color,
					'margin-right' => '10px',
				),
				' .responsive-block-editor-addons-icon-active svg' => array(
					'width'        => self::get_css_value( ( $attr['iconSize'] ), $attr['iconSizeType'] ),
					'height'       => self::get_css_value( ( $attr['iconSize'] ), $attr['iconSizeType'] ),
					'font-size'    => self::get_css_value( ( $attr['iconSize'] ), $attr['iconSizeType'] ),
					'fill'         => $icon_active_color,
					'margin-right' => '10px',
				),
				' .responsive-block-editor-addons-accordion-item__outer-wrap' => array(
					'margin-bottom' => self::get_css_value( ( $attr['rowsGap'] ), 'px' ),
				),
				' .responsive-block-editor-addons-accordion__wrap.responsive-block-editor-addons-buttons-layout-wrap' => array(
					'grid-column-gap' => self::get_css_value( ( $attr['columnsGap'] ), 'px' ),
					'grid-row-gap'    => self::get_css_value( ( $attr['rowsGap'] ), 'px' ),
				),
				' .responsive-block-editor-addons-accordion-item' => array(
					'border-color'  => $attr['blockBorderColor'],
					'border-style'  => $attr['blockBorderStyle'],
					'border-radius' => self::get_css_value( $attr['blockBorderRadius'], 'px' ),
					'border-width'  => self::get_css_value( $attr['blockBorderWidth'], 'px' ),
				),
				' .responsive-block-editor-addons-accordion-titles-button' => array(
					'padding-top'    => self::get_css_value( ( $attr['vtitlePaddingDesktop'] ), $attr['titlePaddingTypeDesktop'] ),
					'padding-bottom' => self::get_css_value( ( $attr['titleBottomPaddingDesktop'] ), $attr['titlePaddingTypeDesktop'] ),
					'padding-right'  => self::get_css_value( ( $attr['htitlePaddingDesktop'] ), $attr['titlePaddingTypeDesktop'] ),
					'padding-left'   => self::get_css_value( ( $attr['titleLeftPaddingDesktop'] ), $attr['titlePaddingTypeDesktop'] ),
				),
				' .responsive-block-editor-addons-accordion-content span' => array(
					'margin-top'    => self::get_css_value( ( $attr['vcontentPaddingDesktop'] ), $attr['contentPaddingTypeDesktop'] ),
					'margin-bottom' => self::get_css_value( ( $attr['vcontentPaddingDesktop'] ), $attr['contentPaddingTypeDesktop'] ),
					'margin-right'  => self::get_css_value( ( $attr['hcontentPaddingDesktop'] ), $attr['contentPaddingTypeDesktop'] ),
					'margin-left'   => self::get_css_value( ( $attr['hcontentPaddingDesktop'] ), $attr['contentPaddingTypeDesktop'] ),
				),
				' .responsive-block-editor-addons-accordion-item .responsive-block-editor-addons-accordion-titles-button.responsive-block-editor-addons-accordion-titles' => array(
					'flex-direction' => $attr['iconAlign'],
				),
				' .responsive-block-editor-addons-accordion-titles-button' => array(
					'background-image' => $titleGradient,
				),
				' .responsive-block-editor-addons-accordion-titles-button .responsive-block-editor-addons-title' => array(
					'font-family' => $attr['titleFontFamily'],
					'font-size'   => self::get_css_value( $attr['titleFontSize'], 'px' ),
					'font-weight' => $attr['titleFontWeight'],
					'line-height' => $attr['titleLineHeight'],
				),
				' .responsive-block-editor-addons-accordion-item .responsive-block-editor-addons-accordion-content' => array(
					'background-image' => $contentGradient,
					'font-family'      => $attr['contentFontFamily'],
					'font-size'        => self::get_css_value( $attr['contentFontSize'], 'px' ),
					'font-weight'      => $attr['contentFontWeight'],
					'line-height'      => $attr['contentLineHeight'],
					'color'            => $attr['contentTextColor'],
				),
				' .responsive-block-editor-addons-accordion-titles-button.responsive-block-editor-addons-accordion-titles' => array(
					'color'            => $attr['titleTextColor'],
					'background-color' => self::hexToRgb( $attr['titleBackgroundColor'] ? $attr['titleBackgroundColor'] : '#fff', $contentOpacity ),
				),
				' .responsive-block-editor-addons-accordion-item-active .responsive-block-editor-addons-accordion-titles-button.responsive-block-editor-addons-accordion-titles' => array(
					'color'            => $attr['titleActiveTextColor'],
					'background-color' => $attr['titleActiveBackgroundColor'],
				),

			);
			$mobile_selectors = array(
				' ' => array(
					'margin-top'    => self::get_css_value( ( $attr['marginVMobile'] ), 'px' ),
					'margin-bottom' => self::get_css_value( ( $attr['marginVMobile'] ), 'px' ),
					'margin-left'   => self::get_css_value( ( $attr['marginHMobile'] ), 'px' ),
					'margin-right'  => self::get_css_value( ( $attr['marginHMobile'] ), 'px' ),
				),
				' .responsive-block-editor-addons-accordion-titles-button' => array(
					'padding-top'    => self::get_css_value( ( $attr['vtitlePaddingMobile'] ), $attr['titlePaddingTypeDesktop'] ),
					'padding-bottom' => self::get_css_value( ( $attr['titleBottomPaddingMobile'] ), $attr['titlePaddingTypeDesktop'] ),
					'padding-right'  => self::get_css_value( ( $attr['htitlePaddingMobile'] ), $attr['titlePaddingTypeDesktop'] ),
					'padding-left'   => self::get_css_value( ( $attr['titleLeftPaddingMobile'] ), $attr['titlePaddingTypeDesktop'] ),
				),
				' .responsive-block-editor-addons-accordion-item__outer-wrap' => array(
					'margin-bottom' => self::get_css_value( ( $attr['rowsGapMobile'] ), 'px' ),
				),
				' .responsive-block-editor-addons-accordion__wrap.responsive-block-editor-addons-buttons-layout-wrap' => array(
					'grid-column-gap' => self::get_css_value( ( $attr['columnsGapMobile'] ), 'px' ),
					'grid-row-gap'    => self::get_css_value( ( $attr['rowsGapMobile'] ), 'px' ),
				),
				' .responsive-block-editor-addons-accordion-content span' => array(
					'margin-top'    => self::get_css_value( ( $attr['vcontentPaddingMobile'] ), $attr['contentPaddingTypeDesktop'] ),
					'margin-bottom' => self::get_css_value( ( $attr['vcontentPaddingMobile'] ), $attr['contentPaddingTypeDesktop'] ),
					'margin-right'  => self::get_css_value( ( $attr['hcontentPaddingMobile'] ), $attr['contentPaddingTypeDesktop'] ),
					'margin-left'   => self::get_css_value( ( $attr['hcontentPaddingMobile'] ), $attr['contentPaddingTypeDesktop'] ),
				),
				' .responsive-block-editor-addons-icon svg' => array(
					'width'     => self::get_css_value( ( $attr['iconSizeMobile'] ), $attr['iconSizeType'] ),
					'height'    => self::get_css_value( ( $attr['iconSizeMobile'] ), $attr['iconSizeType'] ),
					'font-size' => self::get_css_value( ( $attr['iconSizeMobile'] ), $attr['iconSizeType'] ),
				),
				' .responsive-block-editor-addons-icon-active svg' => array(
					'width'     => self::get_css_value( ( $attr['iconSizeMobile'] ), $attr['iconSizeType'] ),
					'height'    => self::get_css_value( ( $attr['iconSizeMobile'] ), $attr['iconSizeType'] ),
					'font-size' => self::get_css_value( ( $attr['iconSizeMobile'] ), $attr['iconSizeType'] ),
				),
				' .responsive-block-editor-addons-accordion-titles-button .responsive-block-editor-addons-title' => array(
					'font-size' => self::get_css_value( $attr['titleFontSizeMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-accordion-item .responsive-block-editor-addons-accordion-content' => array(
					'font-size' => self::get_css_value( $attr['contentFontSizeMobile'], 'px' ),
				),

			);

			$tablet_selectors = array(
				' ' => array(
					'margin-top'    => self::get_css_value( ( $attr['marginVTablet'] ), 'px' ),
					'margin-bottom' => self::get_css_value( ( $attr['marginVTablet'] ), 'px' ),
					'margin-left'   => self::get_css_value( ( $attr['marginHTablet'] ), 'px' ),
					'margin-right'  => self::get_css_value( ( $attr['marginHTablet'] ), 'px' ),
				),
				' .responsive-block-editor-addons-accordion-titles-button' => array(
					'padding-top'    => self::get_css_value( ( $attr['vtitlePaddingTablet'] ), $attr['titlePaddingTypeDesktop'] ),
					'padding-bottom' => self::get_css_value( ( $attr['titleBottomPaddingTablet'] ), $attr['titlePaddingTypeDesktop'] ),
					'padding-right'  => self::get_css_value( ( $attr['htitlePaddingTablet'] ), $attr['titlePaddingTypeDesktop'] ),
					'padding-left'   => self::get_css_value( ( $attr['titleLeftPaddingTablet'] ), $attr['titlePaddingTypeDesktop'] ),
				),
				' .responsive-block-editor-addons-accordion-item__outer-wrap' => array(
					'margin-bottom' => self::get_css_value( ( $attr['rowsGapTablet'] ), 'px' ),
				),
				' .responsive-block-editor-addons-accordion__wrap.responsive-block-editor-addons-buttons-layout-wrap' => array(
					'grid-column-gap' => self::get_css_value( ( $attr['columnsGapTablet'] ), 'px' ),
					'grid-row-gap'    => self::get_css_value( ( $attr['rowsGapTablet'] ), 'px' ),
				),
				' .responsive-block-editor-addons-accordion-content span' => array(
					'margin-top'    => self::get_css_value( ( $attr['vcontentPaddingTablet'] ), $attr['contentPaddingTypeDesktop'] ),
					'margin-bottom' => self::get_css_value( ( $attr['vcontentPaddingTablet'] ), $attr['contentPaddingTypeDesktop'] ),
					'margin-right'  => self::get_css_value( ( $attr['hcontentPaddingTablet'] ), $attr['contentPaddingTypeDesktop'] ),
					'margin-left'   => self::get_css_value( ( $attr['hcontentPaddingTablet'] ), $attr['contentPaddingTypeDesktop'] ),
				),
				' .responsive-block-editor-addons-icon svg' => array(
					'width'     => self::get_css_value( ( $attr['iconSizeTablet'] ), $attr['iconSizeType'] ),
					'height'    => self::get_css_value( ( $attr['iconSizeTablet'] ), $attr['iconSizeType'] ),
					'font-size' => self::get_css_value( ( $attr['iconSizeTablet'] ), $attr['iconSizeType'] ),
				),
				' .responsive-block-editor-addons-icon-active svg' => array(
					'width'     => self::get_css_value( ( $attr['iconSizeTablet'] ), $attr['iconSizeType'] ),
					'height'    => self::get_css_value( ( $attr['iconSizeTablet'] ), $attr['iconSizeType'] ),
					'font-size' => self::get_css_value( ( $attr['iconSizeTablet'] ), $attr['iconSizeType'] ),
				),
			);

			if ( 'accordion' === $attr['layout'] && true === $attr['inactiveOtherItems'] ) {
				$selectors = array_merge(
					$selectors,
					array(
						' .responsive-block-editor-addons-accordion-item__outer-wrap .responsive-block-editor-addons-accordion-content' => array(
							'display' => 'none',
						),
					)
				);
			}
			if ( 'accordion' === $attr['layout'] && false === $attr['inactiveOtherItems'] ) {
				$selectors = array_merge(
					$selectors,
					array(
						' .responsive-block-editor-addons-accordion-item__outer-wrap .responsive-block-editor-addons-accordion-item .responsive-block-editor-addons-accordion-titles-button .responsive-block-editor-addons-icon-active' => array(
							'display' => 'inline-block',
						),
						' .responsive-block-editor-addons-accordion-item__outer-wrap .responsive-block-editor-addons-accordion-item .responsive-block-editor-addons-accordion-titles-button .responsive-block-editor-addons-icon' => array(
							'display' => 'none',
						),
					)
				);
			}
			if ( 'accordion' === $attr['layout'] && true === $attr['expandFirstItem'] ) {
				$selectors = array_merge(
					$selectors,
					array(
						'  > div:first-child > .responsive-block-editor-addons-accordion-item__outer-wrap .responsive-block-editor-addons-accordion-content' => array(
							'display' => 'block',
						),
						'  > div:first-child > .responsive-block-editor-addons-accordion-item__outer-wrap .responsive-block-editor-addons-accordion-item .responsive-block-editor-addons-accordion-titles-button .responsive-block-editor-addons-icon-active' => array(
							'display' => 'inline-block',
						),
						'  > div:first-child > .responsive-block-editor-addons-accordion-item__outer-wrap .responsive-block-editor-addons-accordion-item .responsive-block-editor-addons-accordion-titles-button .responsive-block-editor-addons-icon' => array(
							'display' => 'none',
						),
					)
				);
			}
			if ( 'grid' === $attr['layout'] ) {
				$selectors = array_merge(
					$selectors,
					array(
						'  .responsive-block-editor-addons-accordion-item__outer-wrap' => array(
							'text-align' => $attr['align'],
						),
						'   .responsive-block-editor-addons-accordion__wrap.responsive-block-editor-addons-buttons-layout-wrap' => array(
							'grid-template-columns' => 'repeat(' . $attr['columns'] . ', 1fr)',
							'display'               => 'grid',
						),
						'  > div:first-child > .responsive-block-editor-addons-accordion-item__outer-wrap .responsive-block-editor-addons-accordion-item .responsive-block-editor-addons-accordion-titles-button .responsive-block-editor-addons-icon' => array(
							'display' => 'none',
						),
					)
				);
			}

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-accordion__outer-wrap.responsive-block-editor-addons-block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			return $css;
		}

		/**
		 * Get Defaults for Accordian block
		 *
		 * @return array
		 */
		public static function get_responsive_block_accordian_block_default_attributes() {
			return array(
				'block_id'                        => '',
				'layout'                          => 'accordion',
				'inactiveOtherItems'              => true,
				'expandFirstItem'                 => false,
				'enableSchemaSupport'             => false,
				'align'                           => 'left',
				'rowsGap'                         => 10,
				'rowsGapTablet'                   => 10,
				'rowsGapMobile'                   => 10,
				'columnsGap'                      => 10,
				'columnsGapTablet'                => 10,
				'columnsGapMobile'                => 10,
				'boxPaddingTypeMobile'            => 'px',
				'boxPaddingTypeTablet'            => 'px',
				'boxPaddingTypeDesktop'           => 'px',
				'vBoxPaddingMobile'               => 10,
				'hBoxPaddingMobile'               => 10,
				'vBoxPaddingTablet'               => 10,
				'hBoxPaddingTablet'               => 10,
				'vBoxPaddingDesktop'              => 10,
				'hBoxPaddingDesktop'              => 10,
				'titleTextColor'                  => '#313131',
				'titleTextActiveColor'            => '#656565',
				'titlePaddingTypeDesktop'         => 'px',
				'vtitlePaddingMobile'             => 10,
				'vtitlePaddingTablet'             => 10,
				'vtitlePaddingDesktop'            => 10,
				'htitlePaddingMobile'             => 10,
				'htitlePaddingTablet'             => 10,
				'htitlePaddingDesktop'            => 10,
				'contentTextColor'                => '#313131',
				'contentPaddingTypeDesktop'       => 'px',
				'vcontentPaddingMobile'           => 10,
				'vcontentPaddingTablet'           => 10,
				'vcontentPaddingDesktop'          => 10,
				'hcontentPaddingMobile'           => 10,
				'hcontentPaddingTablet'           => 10,
				'hcontentPaddingDesktop'          => 10,
				'titleActiveTextColor'            => '',
				'titleActiveBackgroundColor'      => '',
				'iconColor'                       => '',
				'iconActiveColor'                 => '',
				'titleFontWeight'                 => '',
				'titleFontSize'                   => '',
				'titleFontSizeMobile'             => '',
				'titleFontSizeTablet'             => '',
				'titleLineHeight'                 => '',
				'titleFontFamily'                 => '',
				'contentFontFamily'               => '',
				'contentFontWeight'               => '',
				'contentFontSize'                 => '',
				'contentFontSizeMobile'           => '',
				'contentFontSizeTablet'           => '',
				'contentLineHeight'               => '',
				'icon'                            => 'fas fa-plus',
				'iconActive'                      => 'fas fa-minus',
				'iconAlign'                       => 'row',
				'iconSize'                        => 12,
				'iconSizeTablet'                  => 12,
				'iconSizeMobile'                  => 12,
				'iconSizeType'                    => 'px',
				'columns'                         => 2,
				'schema'                          => '',
				'enableToggle'                    => true,
				'equalHeight'                     => true,
				'titleLeftPaddingTablet'          => 10,
				'titleBottomPaddingTablet'        => 10,
				'titleLeftPaddingDesktop'         => 10,
				'titleBottomPaddingDesktop'       => 10,
				'titleLeftPaddingMobile'          => 10,
				'titleBottomPaddingMobile'        => 10,
				'headingTag'                      => 'span',
				'titleBackgroundColorOpacity'     => 100,
				'marginV'                         => '',
				'marginVTablet'                   => '',
				'marginVMobile'                   => '',
				'marginH'                         => '',
				'marginHTablet'                   => '',
				'marginHMobile'                   => '',
				'titleSecondaryBackgroundColor'   => '',
				'titleGradientDegree'             => 100,
				'titleBgGradient'                 => false,
				'titleBackgroundColor'            => '#ffffff',
				'contentSecondaryBackgroundColor' => '',
				'contentGradientDegree'           => 100,
				'contentBgGradient'               => false,
				'contentBackgroundColor'          => '#eeeeee',
				'contentBackgroundColorOpacity'   => 100,
				'blockBorderStyle'                => 'solid',
				'blockBorderColor'                => '',
				'blockBorderRadius'               => 2,
				'blockBorderWidth'                => 1,
			);
		}

		/**
		 * Get Accordian Child Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_accordian_child_css( $attr, $id ) {
			$defaults         = self::get_responsive_block_accordian_child_block_default_attributes();
			$attr             = array_merge( $defaults, (array) $attr );
			$mobile_selectors = array();
			$tablet_selectors = array();

			$boxShadowPositionCSS = $attr['boxShadowPosition'];

			if ( 'outset' === $attr['boxShadowPosition'] ) {
				$boxShadowPositionCSS = '';
			}
			$selectors = array(
				' ' => array(
					'border-color'  => $attr['blockBorderColor'],
					'border-style'  => $attr['blockBorderStyle'],
					'border-width'  => self::get_css_value( $attr['blockBorderWidth'], 'px' ),
					'border-radius' => self::get_css_value( $attr['blockBorderRadius'], 'px' ),
					'box-shadow'    =>
						self::get_css_value( $attr['boxShadowHOffset'], 'px' ) .
						' ' .
						self::get_css_value( $attr['boxShadowVOffset'], 'px' ) .
						' ' .
						self::get_css_value( $attr['boxShadowBlur'], 'px' ) .
						' ' .
						self::get_css_value( $attr['boxShadowSpread'], 'px' ) .
						' ' .
						$attr['boxShadowColor'] .
						' ' .
						$boxShadowPositionCSS,
					'overflow'      => 'hidden',

				),
				' .responsive-block-editor-addons-accordion-titles-button.responsive-block-editor-addons-accordion-titles' => array(
					'box-shadow' => $boxShadowPositionCSS == 'inset' ?
						$boxShadowPositionCSS .
						' ' .
						self::get_css_value( $attr['boxShadowHOffset'], 'px' ) .
						' ' .
						self::get_css_value( $attr['boxShadowVOffset'], 'px' ) .
						' ' .
						self::get_css_value( $attr['boxShadowBlur'], 'px' ) .
						' ' .
						self::get_css_value( $attr['boxShadowSpread'], 'px' ) .
						' ' .
						$attr['boxShadowColor'] : '',
					'padding'    => self::get_css_value( $attr['titlePadding'], 'px' ),
				),
				' .responsive-block-editor-addons-accordion-content span' => array(
					'margin'  => '0',
					'padding' => self::get_css_value( $attr['contentPadding'], 'px' ),
				),
			);
			$mobile_selectors = array(
				' .responsive-block-editor-addons-accordion-titles-button.responsive-block-editor-addons-accordion-titles' => array(
					'padding' => self::get_css_value( $attr['titlePaddingMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-accordion-content span' => array(
					'padding' => self::get_css_value( $attr['contentPaddingMobile'], 'px' ),
				),
			);

			$tablet_selectors = array(
				' .responsive-block-editor-addons-accordion-titles-button.responsive-block-editor-addons-accordion-titles' => array(
					'padding' => self::get_css_value( $attr['titlePaddingTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-accordion-content span' => array(
					'padding' => self::get_css_value( $attr['contentPaddingTablet'], 'px' ),
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-accordion-item__outer-wrap.responsive-block-editor-addons-block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			return $css;
		}

		/**
		 * Get Defaults for Accordian Child block
		 *
		 * @return array
		 */
		public static function get_responsive_block_accordian_child_block_default_attributes() {
			return array(
				'block_id'             => '',
				'title'                => 'What is Accordion?',
				'content'              => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
				'icon'                 => 'fas fa-plus',
				'iconActive'           => 'fas fa-minus',
				'layout'               => 'accordion',
				'headingTag'           => 'span',
				'blockBorderStyle'     => 'solid',
				'blockBorderColor'     => '',
				'blockBorderWidth'     => 1,
				'blockBorderRadius'    => 2,
				'boxShadowColor'       => '#fff',
				'boxShadowHOffset'     => 9,
				'boxShadowVOffset'     => 9,
				'boxShadowBlur'        => 9,
				'boxShadowSpread'      => 9,
				'boxShadowPosition'    => 'outset',
				'titlePadding'         => 10,
				'titlePaddingTablet'   => 10,
				'titlePaddingMobile'   => 10,
				'contentPadding'       => 10,
				'contentPaddingTablet' => 10,
				'contentPaddingMobile' => 10,
			);
		}

		/**
		 * Get Defaults for advanced heading block
		 *
		 * @return array
		 */
		public static function get_responsive_block_advanced_heading_default_attributes() {
			return array(
				'block_id'                      => '',
				'headingTitle'                  => '',
				'headingDesc'                   => '',
				'seperatorStyle'                => 'solid',
				'separatorWidthType'            => '%',
				'separatorColor'                => '',
				'headingTitleColor'             => '',
				'subHeadingTitleColor'          => '',
				'headingTitleFontFamily'        => '',
				'subHeadingTitleFontFamily'     => '',
				'headingTitleFontSize'          => '',
				'subHeadingTitleFontSize'       => '',
				'headingTitleFontSizeTablet'    => '',
				'subHeadingTitleFontSizeTablet' => '',
				'headingTitleFontSizeMobile'    => '',
				'subHeadingTitleFontSizeMobile' => '',
				'headingTitleFontWeight'        => '600',
				'subHeadingTitleFontWeight'     => '400',
				'headingTag'                    => 'h2',
				'headingAlignment'              => 'center',
				'headingAlignmentTablet'        => 'center',
				'headingAlignmentMobile'        => 'center',
				'showHeading'                   => true,
				'showSubHeading'                => true,
				'showSeparator'                 => true,
				'separatorHeight'               => 3,
				'separatorWidth'                => 20,
				'headSpacing'                   => 15,
				'subheadSpacing'                => 15,
				'separatorSpacing'              => 15,
				'headSpacingTablet'             => 15,
				'subheadSpacingTablet'          => 15,
				'separatorSpacingTablet'        => 15,
				'headSpacingMobile'             => 15,
				'subheadSpacingMobile'          => 15,
				'separatorSpacingMobile'        => 15,
				'headingTitleLineHeight'        => 1,
				'subHeadingTitleLineHeight'     => 1,
				'headingTitleLetterSpacing'     => 0,
				'subHeadingTitleLetterSpacing'  => 0,
				'level'                         => 2,
				'textDecoration'                => 'none',
				'textDecorationSubHeading'      => 'none',
			);
		}

		/**
		 * Get Advanced column child Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_advanced_column_child_css( $attr, $id ) {
			$defaults = self::get_responsive_block_advanced_column_child_block_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$imgopacity           = $attr['opacity'] / 100 == 0 ? '0.0' : $attr['opacity'] / 100;
			$columnWidth          = $attr['width'] . '%';
			$boxShadowPositionCSS = $attr['boxShadowPosition'];

			if ( 'outset' === $attr['boxShadowPosition'] ) {
				$boxShadowPositionCSS = '';
			}
			$hoverboxShadowPositionCSS = $attr['hoverboxShadowPosition'];

			if ( 'outset' === $attr['hoverboxShadowPosition'] ) {
				$hoverboxShadowPositionCSS = '';
			}

			$backgroundTypeImageStyles = array();
			if ( $attr['backgroundType'] == 'image' && $attr['backgroundImage'] ) {

				if ( $attr['overlayType'] == 'gradient' && $attr['gradientOverlayType'] == 'linear' ) {
					$backgroundTypeImageStyles = array(
						'background-image' => self::generateBackgroundImageEffect(
							self::hexToRgb( $attr['gradientOverlayColor1'], $imgopacity ),
							self::hexToRgb( $attr['gradientOverlayColor2'], $imgopacity ),
							$attr['gradientOverlayAngle'],
							$attr['gradientOverlayLocation1'],
							$attr['gradientOverlayLocation2']
						) . ',url(' . $attr['backgroundImage'] . ')',
					);
				} elseif ( $attr['overlayType'] == 'gradient' && $attr['gradientOverlayType'] == 'radial' ) {
					$backgroundTypeImageStyles = array(
						'background-image' => 'radial-gradient( at ' . $attr['gradientOverlayPosition'] . ','
							. self::hexToRgb( $attr['gradientOverlayColor1'], $imgopacity ) .
							' ' . $attr['gradientOverlayLocation1'] . '%,' . self::hexToRgb( $attr['gradientOverlayColor2'] ? $attr['gradientOverlayColor2'] : '#fff', $imgopacity ) .
							' ' . $attr['gradientOverlayLocation2'] . '%),url(' . $attr['backgroundImage'] . ')',
					);
				} else {
					$backgroundTypeImageStyles = array(
						'background-image' => 'linear-gradient(' . self::hexToRgb( $attr['backgroundImageColor'] ? $attr['backgroundImageColor'] : '#fff', $imgopacity ) . ',' . self::hexToRgb( $attr['backgroundImageColor'] ? $attr['backgroundImageColor'] : '#fff', $imgopacity ) . '),url(' . $attr['backgroundImage'] . ')',
					);

				}
				$backgroundTypeImageStyles = array_merge(
					$backgroundTypeImageStyles,
					array(
						'background-position'   => $attr['backgroundImagePosition'],
						'background-attachment' => $attr['backgroundAttachment'],
						'background-repeat'     => $attr['backgroundImageRepeat'],
						'background-size'       => $attr['backgroundImageSize'],
					)
				);
			}
			$selectors = array(
				'' => array(
					'width' => $columnWidth,
				),
				' .responsive-block-editor-addons-block-column' => array_merge(
					array(
						'padding-left'     => self::get_css_value( $attr['blockLeftPadding'], 'px' ),
						'padding-right'    => self::get_css_value( $attr['blockRightPadding'], 'px' ),
						'padding-top'      => self::get_css_value( $attr['blockTopPadding'], 'px' ),
						'padding-bottom'   => self::get_css_value( $attr['blockBottomPadding'], 'px' ),
						'margin-left'      => self::get_css_value( $attr['blockLeftMargin'], 'px' ),
						'margin-right'     => self::get_css_value( $attr['blockRightMargin'], 'px' ),
						'margin-top'       => self::get_css_value( $attr['blockTopMargin'], 'px' ),
						'margin-bottom'    => self::get_css_value( $attr['blockBottomMargin'], 'px' ),
						'box-shadow'       => self::get_css_value( $attr['boxShadowHOffset'], 'px' ) . ' ' . self::get_css_value( $attr['boxShadowVOffset'], 'px' ) . ' ' . self::get_css_value( $attr['boxShadowBlur'], 'px' ) . ' ' . self::get_css_value( $attr['boxShadowSpread'], 'px' ) . ' ' . $attr['boxShadowColor'] . ' ' . $boxShadowPositionCSS,
						'background-color' => $attr['backgroundType'] == 'color' ? self::hexToRgb( $attr['backgroundColor'] ? $attr['backgroundColor'] : '#fff', $imgopacity ) : '',
						'background-image' => $attr['backgroundType'] == 'gradient' ? self::generateBackgroundImageEffect(
							self::hexToRgb( $attr['backgroundColor1'], $imgopacity ),
							self::hexToRgb( $attr['backgroundColor2'], $imgopacity ),
							$attr['gradientDirection'],
							$attr['colorLocation1'],
							$attr['colorLocation2']
						) : '',
						'border-style'     => $attr['blockBorderStyle'],
						'border-color'     => $attr['blockBorderColor'],
						'border-radius'    => self::get_css_value( $attr['blockBorderRadius'], 'px' ) . ' !important',
						'border-width'     => self::get_css_value( $attr['blockBorderWidth'], 'px' ),

					),
					$backgroundTypeImageStyles
				),
				' .responsive-block-editor-addons-block-column:hover' => array(
					'box-shadow'       => self::get_css_value( $attr['hoverboxShadowHOffset'], 'px' ) . ' ' . self::get_css_value( $attr['hoverboxShadowVOffset'], 'px' ) . ' ' . self::get_css_value( $attr['hoverboxShadowBlur'], 'px' ) . ' ' . self::get_css_value( $attr['hoverboxShadowSpread'], 'px' ) . ' ' . $attr['hoverboxShadowColor'] . ' ' . $hoverboxShadowPositionCSS,
					'background-image' => $attr['backgroundType'] == 'gradient' ? self::generateBackgroundImageEffect(
						self::hexToRgb( $attr['hoverbackgroundColor1'], $imgopacity ),
						self::hexToRgb( $attr['hoverbackgroundColor2'], $imgopacity ),
						$attr['hovergradientDirection'],
						$attr['hovercolorLocation1'],
						$attr['hovercolorLocation2']
					) : '',
				),

			);
			$mobile_selectors = array(
				' .responsive-block-editor-addons-block-column' => array(
					'padding-left'   => self::get_css_value( $attr['blockLeftPaddingMobile'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['blockRightPaddingMobile'], 'px' ),
					'padding-top'    => self::get_css_value( $attr['blockTopPaddingMobile'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['blockBottomPaddingMobile'], 'px' ),
					'margin-left'    => self::get_css_value( $attr['blockLeftMarginMobile'], 'px' ),
					'margin-right'   => self::get_css_value( $attr['blockRightMarginMobile'], 'px' ),
					'margin-top'     => self::get_css_value( $attr['blockTopMarginMobile'], 'px' ),
					'margin-bottom'  => self::get_css_value( $attr['blockBottomMarginMobile'], 'px' ),

				),
			);

			$tablet_selectors = array(
				' .responsive-block-editor-addons-block-column' => array(
					'padding-left'   => self::get_css_value( $attr['blockLeftPaddingTablet'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['blockRightPaddingTablet'], 'px' ),
					'padding-top'    => self::get_css_value( $attr['blockTopPaddingTablet'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['blockBottomPaddingTablet'], 'px' ),
					'margin-left'    => self::get_css_value( $attr['blockLeftMarginTablet'], 'px' ),
					'margin-right'   => self::get_css_value( $attr['blockRightMarginTablet'], 'px' ),
					'margin-top'     => self::get_css_value( $attr['blockTopMarginTablet'], 'px' ),
					'margin-bottom'  => self::get_css_value( $attr['blockBottomMarginTablet'], 'px' ),

				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-advanced-column-child.block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );

			return $css;
		}

		/**
		 * Get Defaults for advanced column child block
		 *
		 * @return array
		 */
		public static function get_responsive_block_advanced_column_child_block_default_attributes() {
			return array(
				'width'                    => 50,
				'blockTopPadding'          => '',
				'blockBottomPadding'       => '',
				'blockLeftPadding'         => '',
				'blockRightPadding'        => '',
				'blockLeftMargin'          => '',
				'blockRightMargin'         => '',
				'blockTopMargin'           => '',
				'blockBottomMargin'        => '',
				'blockTopPaddingTablet'    => '',
				'blockBottomPaddingTablet' => '',
				'blockLeftPaddingTablet'   => '',
				'blockRightPaddingTablet'  => '',
				'blockLeftMarginTablet'    => '',
				'blockRightMarginTablet'   => '',
				'blockTopMarginTablet'     => '',
				'blockBottomMarginTablet'  => '',
				'blockTopPaddingMobile'    => '',
				'blockBottomPaddingMobile' => '',
				'blockLeftPaddingMobile'   => '',
				'blockRightPaddingMobile'  => '',
				'blockLeftMarginMobile'    => '',
				'blockRightMarginMobile'   => '',
				'blockTopMarginMobile'     => '',
				'blockBottomMarginMobile'  => '',
				'block_id'                 => '',
				'blockBorderStyle'         => 'none',
				'blockBorderWidth'         => 1,
				'blockBorderRadius'        => '',
				'blockBorderColor'         => '',
				'boxShadowColor'           => '',
				'boxShadowHOffset'         => 0,
				'boxShadowVOffset'         => 0,
				'boxShadowBlur'            => 0,
				'boxShadowSpread'          => 0,
				'boxShadowPosition'        => 'outset',
				'hoverboxShadowColor'      => '#cccccc',
				'hoverboxShadowHOffset'    => 0,
				'hoverboxShadowVOffset'    => 0,
				'hoverboxShadowBlur'       => 6,
				'hoverboxShadowSpread'     => 1,
				'hoverboxShadowPosition'   => 'outset',
				'opacity'                  => 20,
				'colorLocation1'           => 0,
				'colorLocation2'           => 100,
				'gradientDirection'        => 90,
				'hovercolorLocation1'      => 0,
				'hovercolorLocation2'      => 100,
				'hovergradientDirection'   => 90,
				'backgroundImage'          => '',
				'backgroundImagePosition'  => 'center center',
				'backgroundImageSize'      => 'cover',
				'backgroundImageRepeat'    => 'no-repeat',
				'backgroundAttachment'     => 'scroll',
				'backgroundImageColor'     => '',
				'overlayType'              => 'color',
				'gradientOverlayColor1'    => '',
				'gradientOverlayColor2'    => '',
				'gradientOverlayType'      => 'linear',
				'gradientOverlayLocation1' => 0,
				'gradientOverlayLocation2' => 100,
				'gradientOverlayAngle'     => 0,
				'gradientOverlayPosition'  => 'center center',
				'backgroundType'           => '',
				'backgroundColor'          => '',
				'backgroundColor1'         => '',
				'backgroundColor2'         => '#fff',
				'hoverbackgroundColor1'    => '',
				'hoverbackgroundColor2'    => '#fff',
			);
		}

		/**
		 * Get Buttons Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_buttons_css( $attr, $id ) {
			$defaults = self::get_responsive_block_buttons_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$selectors        = array();
			$mobile_selectors = array();

			$tablet_selectors = array();

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-block-buttons.block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			return $css;
		}

		/**
		 * Get Defaults for buttons block
		 *
		 * @return array
		 */
		public static function get_responsive_block_buttons_default_attributes() {
			return array();
		}

		/**
		 * Get Buttons Child Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_buttons_child_css( $attr, $id ) {
			$defaults = self::get_responsive_block_buttons_child_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$imgopacity = $attr['ctaTextOpacity'] / 100;

			$boxShadowPositionCSS = $attr['boxShadowPosition'];

			if ( 'outset' === $attr['boxShadowPosition'] ) {
				$boxShadowPositionCSS = '';
			}

			$iconSpaceRight = '';
			if ( $attr['iconPosition'] === 'before' ) {
				$iconSpaceRight = $attr['iconSpace'];
			}
			$iconSpaceLeft = '';
			if ( $attr['iconPosition'] === 'after' ) {
				$iconSpaceLeft = $attr['iconSpace'];
			}

			$updatedvMarginTablet = '';
			if ( isset( $attr['vMarginTablet'] ) ) {
				$updatedvMarginTablet = $attr['vMarginTablet'];
			}

			$updatedvMarginMobile = '';
			if ( isset( $attr['vMarginMobile'] ) ) {
				$updatedvMarginMobile = $attr['vMarginMobile'];
			}

			$updatedhMarginTablet = '';
			if ( isset( $attr['hMarginTablet'] ) ) {
				$updatedhMarginTablet = $attr['hMarginTablet'];
			}

			$updatedhMarginMobile = '';
			if ( isset( $attr['hMarginMobile'] ) ) {
				$updatedhMarginMobile = $attr['hMarginMobile'];
			}

			$updatedvPaddingTablet = '';
			if ( isset( $attr['ctaVpaddingTablet'] ) ) {
				$updatedvPaddingTablet = $attr['ctaVpaddingTablet'];
			}

			$updatedvPaddingMobile = '';
			if ( isset( $attr['ctaVpaddingMobile'] ) ) {
				$updatedvPaddingMobile = $attr['ctaVpaddingMobile'];
			}

			$updatedhPaddingTablet = '';
			if ( isset( $attr['ctaHpaddingTablet'] ) ) {
				$updatedhPaddingTablet = $attr['ctaHpaddingTablet'];
			}

			$updatedhPaddingMobile = '';
			if ( isset( $attr['ctaHpaddingMobile'] ) ) {
				$updatedhPaddingMobile = $attr['ctaHpaddingMobile'];
			}

			$updatedBackgroundColor  = '';
			$updatedBackgroundHColor = '';
			$updatedBackgroundImage  = '';
			if ( $attr['buttonbackgroundType'] === 'color' && ! $attr['inheritFromTheme'] ) {
				$updatedBackgroundColor  = $attr['ctaBackColor'];
				$updatedBackgroundHColor = $attr['ctaHoverBackColor'];
			}

			$updatedBorderColor  = '';
			$updatedBorderHColor = '';
			if ( $attr['ctaBorderColor'] && ! $attr['inheritFromTheme'] ) {
				$updatedBorderColor = $attr['ctaBorderColor'];
			}
			if ( $attr['ctaHoverBorderColor'] && ! $attr['inheritFromTheme'] ) {
				$updatedBorderHColor = $attr['ctaHoverBorderColor'];
			}

			$updatedTextColor  = '';
			$updatedTextHColor = '';
			if ( $attr['ctaColor'] && ! $attr['inheritFromTheme'] ) {
				$updatedTextColor = $attr['ctaColor'];
			}
			if ( $attr['ctaHoverColor'] && ! $attr['inheritFromTheme'] ) {
				$updatedTextHColor = $attr['ctaHoverColor'];
			}

			if ( $attr['buttonbackgroundType'] == 'gradient' ) {
				$updatedBackgroundImage = self::generateBackgroundImageEffect(
					$attr['buttonbackgroundColor1'],
					$attr['buttonbackgroundColor2'],
					$attr['buttongradientDirection'],
					$attr['buttoncolorLocation1'],
					$attr['buttoncolorLocation2']
				);
			}

			$selectors        = array(
				' .responsive-block-editor-addons-button__wrapper .responsive-block-editor-addons-button__icon svg' => array(
					'color'  => $attr['icon_color'],
					'width'  => self::get_css_value( $attr['iconsize'], 'px' ),
					'height' => self::get_css_value( $attr['iconsize'], 'px' ),
				),
				' .responsive-block-editor-addons-button__wrapper div:hover .responsive-block-editor-addons-button__icon svg' => array(
					'color' => $attr['icon_hover_color'],
				),
				' .responsive-block-editor-addons-button__wrapper .responsive-block-editor-addons-button__link_child, .edit-post-visual-editor.editor-styles-wrapper .responsive-block-editor-addons-button__wrapper .responsive-block-editor-addons-button__link_child' => array(
					'color' => $updatedTextColor,
				),
				' .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper:hover .responsive-block-editor-addons-button__link_child, .edit-post-visual-editor.editor-styles-wrapper .wp-block-cover .responsive-block-editor-addons-buttons-child .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper:hover .responsive-block-editor-addons-button__link_child' => array(
					'color' => $updatedTextHColor,
				),
				' .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper' => array(
					'border-color'     => $updatedBorderColor,
					'border-radius'    => self::get_css_value( $attr['ctaBorderRadius'], 'px' ),
					'border-style'     => $attr['ctaBorderStyle'],
					'border-width'     => self::get_css_value( $attr['ctaBorderWidth'], 'px' ),
					'box-shadow'       =>
					self::get_css_value( $attr['boxShadowHOffset'], 'px' ) .
					' ' .
					self::get_css_value( $attr['boxShadowVOffset'], 'px' ) .
					' ' .
					self::get_css_value( $attr['boxShadowBlur'], 'px' ) .
					' ' .
					self::get_css_value( $attr['boxShadowSpread'], 'px' ) .
					' ' .
					$attr['boxShadowColor'] .
					' ' .
					$boxShadowPositionCSS,
					'padding-left'     => self::get_css_value( $attr['ctaHpadding'], 'px' ),
					'padding-right'    => self::get_css_value( $attr['ctaHpadding'], 'px' ),
					'background-image' => $updatedBackgroundImage,
					'padding-top'      => self::get_css_value( $attr['ctaVpadding'], 'px' ),
					'padding-bottom'   => self::get_css_value( $attr['ctaVpadding'], 'px' ),
					'margin-left'      => self::get_css_value( $attr['hMargin'], 'px' ),
					'margin-right'     => self::get_css_value( $attr['hMargin'], 'px' ),
					'margin-top'       => self::get_css_value( $attr['vMargin'], 'px' ),
					'margin-bottom'    => self::get_css_value( $attr['vMargin'], 'px' ),
					'background-color' => $updatedBackgroundColor,
				),
				' .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper a' => array(
					'font-size'   => self::get_css_value( $attr['buttonFontSize'], 'px' ),
					'font-family' => $attr['buttonFontFamily'],
					'font-weight' => $attr['buttonFontWeight'],
					'line-height' => $attr['buttonLineHeight'],
					'opacity'     => $imgopacity,
					'font-size'   => self::get_css_value( $attr['buttonFontSize'], 'px' ) . '!important',
				),
				' .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper:hover' => array(
					'border-color'     => $updatedBorderHColor,
					'background-color' => $updatedBackgroundHColor,
				),
				' .responsive-block-editor-addons-button__icon' => array(
					'margin-left'  => $iconSpaceLeft . 'px',
					'margin-right' => $iconSpaceRight . 'px',
				),
			);
			$mobile_selectors = array(
				' .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper a' => array(
					'font-size' => self::get_css_value( $attr['buttonFontSizeMobile'], 'px' ) . '!important',
				),
				' .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper' => array(
					'margin-top'     => self::get_css_value( $updatedvMarginMobile, 'px' ),
					'margin-bottom'  => self::get_css_value( $updatedvMarginMobile, 'px' ),
					'margin-left'    => self::get_css_value( $updatedhMarginMobile, 'px' ),
					'margin-right'   => self::get_css_value( $updatedhMarginMobile, 'px' ),
					'padding-top'    => self::get_css_value( $updatedvPaddingMobile, 'px' ),
					'padding-bottom' => self::get_css_value( $updatedvPaddingMobile, 'px' ),
					'padding-left'   => self::get_css_value( $updatedhPaddingMobile, 'px' ),
					'padding-right'  => self::get_css_value( $updatedhPaddingMobile, 'px' ),
				),
			);

			$tablet_selectors = array(
				' .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper a' => array(
					'font-size' => self::get_css_value( $attr['buttonFontSizeTablet'], 'px' ) . '!important',
				),
				' .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper' => array(
					'margin-top'     => self::get_css_value( $updatedvMarginTablet, 'px' ),
					'margin-bottom'  => self::get_css_value( $updatedvMarginTablet, 'px' ),
					'margin-left'    => self::get_css_value( $updatedhMarginTablet, 'px' ),
					'margin-right'   => self::get_css_value( $updatedhMarginTablet, 'px' ),
					'padding-top'    => self::get_css_value( $updatedvPaddingTablet, 'px' ),
					'padding-bottom' => self::get_css_value( $updatedvPaddingTablet, 'px' ),
					'padding-left'   => self::get_css_value( $updatedhPaddingTablet, 'px' ),
					'padding-right'  => self::get_css_value( $updatedhPaddingTablet, 'px' ),
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-buttons-child.block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			return $css;
		}

		/**
		 * Get Defaults for buttons block
		 *
		 * @return array
		 */
		public static function get_responsive_block_buttons_child_default_attributes() {
			return array(
				'buttonAlignment'         => 'center',
				'fontFamily'              => 'Default',
				'fontWeight'              => '',
				'fontSubset'              => '',
				'label'                   => '#Click Here',
				'link'                    => '',
				'target'                  => '_blank',
				'iconsize'                => 16,
				'counterId'               => 1,
				'ctaVpadding'             => 10,
				'ctaHpadding'             => 14,
				'ctaVpaddingTablet'       => 10,
				'ctaHpaddingTablet'       => 14,
				'ctaVpaddingMobile'       => 10,
				'ctaHpaddingMobile'       => 14,
				'vMargin'                 => 10,
				'vMarginTablet'           => 10,
				'vMarginMobile'           => 10,
				'hMargin'                 => 14,
				'hMarginTablet'           => 10,
				'hMarginMobile'           => 5,
				'ctaBorderWidth'          => 1,
				'ctaBorderRadius'         => 2,
				'ctaBorderStyle'          => 'solid',
				'ctaBorderColor'          => '',
				'ctaHoverBorderColor'     => '',
				'ctaColor'                => '',
				'ctaBackColor'            => '',
				'ctaHoverColor'           => '',
				'sizeType'                => 'px',
				'sizeMobile'              => '',
				'sizeTablet'              => '',
				'lineHeight'              => '',
				'lineHeightType'          => 'em',
				'lineHeightMobile'        => '',
				'lineHeightTablet'        => '',
				'opensInNewTab'           => '',
				'buttoncolorLocation1'    => 0,
				'buttoncolorLocation2'    => 100,
				'buttongradientDirection' => 90,
				'buttonbackgroundColor1'  => '',
				'buttonbackgroundColor2'  => '',
				'ctaTextOpacity'          => 100,
				'icon'                    => '',
				'iconPosition'            => 'after',
				'buttonFontFamily'        => '',
				'buttonFontSize'          => '',
				'buttonFontSizeTablet'    => '',
				'buttonFontSizeMobile'    => '',
				'buttonLineHeight'        => '',
				'boxShadowColor'          => '',
				'boxShadowHOffset'        => 0,
				'boxShadowVOffset'        => 0,
				'boxShadowBlur'           => '',
				'boxShadowSpread'         => '',
				'boxShadowPosition'       => 'outset',
				'icon_color'              => '#3a3a3a',
				'icon_hover_color'        => '',
				'ctaHoverBackColor'       => '',
				'iconSpace'               => 8,
				'buttonFontWeight'        => '400',
				'inheritFromTheme'        => false,
				'hoverEffect'             => '',
				'buttonbackgroundType'    => 'none',
			);
		}

		/**
		 * Get Call to action Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_call_to_action_css( $attr, $id ) {
			$defaults = self::get_responsive_block_call_to_action_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$imgopacity           = $attr['opacity'] / 100;
			$boxShadowPositionCSS = $attr['boxShadowPosition'];

			if ( 'outset' === $attr['boxShadowPosition'] ) {
				$boxShadowPositionCSS = '';
			}

			$updatedButtonBackgroundColor   = '';
			$updatedButtonBackgroundhColor  = '';
			$updated_background_color       = '';
			$updated_background_type        = '';
			$updated_button_background_type = '';

			if ( $attr['buttonbackgroundType'] === 'color' ) {
				$updatedButtonBackgroundColor  = $attr['ctaBackColor'];
				$updatedButtonBackgroundhColor = $attr['ctaHoverBackColor'];
			}

			if ( $attr['backgroundType'] === 'color' ) {
				$updated_background_color = self::hexToRgb( $attr['backgroundColor'], $imgopacity );
			} else {
				$updated_background_color = '#ffffff';
			}

			if ( $attr['backgroundType'] === 'gradient' ) {
				$updated_background_type = self::generateBackgroundImageEffect( $attr['backgroundColor1'], $attr['backgroundColor2'], $attr['gradientDirection'], $attr['colorLocation1'], $attr['colorLocation2'] );
			}

			if ( $attr['buttonbackgroundType'] === 'gradient' ) {
				$updated_button_background_type = self::generateBackgroundImageEffect( $attr['buttonbackgroundColor1'], $attr['buttonbackgroundColor2'], $attr['buttongradientDirection'], $attr['buttoncolorLocation1'], $attr['buttoncolorLocation2'] );

			}
			$buttonTextOpacity = $attr['ctaTextOpacity'] / 100;

			$ctaIconMargin = '';
			if ( $attr['iconPosition'] === 'before' ) {
				$ctaIconMargin = 'auto ' . self::get_css_value( $attr['iconSpace'], 'px' ) . ' auto 0';
			} elseif ( $attr['iconPosition'] === 'after' ) {
				$ctaIconMargin = 'auto 0 auto ' . self::get_css_value( $attr['iconSpace'], 'px' );
			}

			$selectors = array(
				' .responsive-block-editor-addons-cta-button-wrapper .responsive-block-editor-addons-cta-button' => array(
					'color'   => $attr['ctaColor'],
					'opacity' => $buttonTextOpacity,
				),

				' .responsive-block-editor-addons-cta-button-wrapper:hover .responsive-block-editor-addons-cta-button' => array(
					'color' => $attr['ctaHoverColor'],
				),

				' .responsive-block-editor-addons-cta-button-wrapper:hover' => array(
					'border-color'     => $attr['ctaHoverBorderColor'],
					'background-color' => $updatedButtonBackgroundhColor,
				),

				' .responsive-block-editor-addons-cta-link-text' => array(
					'color'       => $attr['ctaColor'],
					'font-family' => $attr['buttonTextFontFamily'],
					'font-size'   => self::get_css_value( $attr['buttonTextFontSize'], 'px' ),
					'font-weight' => $attr['buttonTextFontWeight'],
					'line-height' => $attr['buttonTextLineHeight'],
				),

				' .responsive-block-editor-addons-cta-link-text:hover' => array(
					'color' => $attr['ctaHoverColor'],
				),

				' .responsive-block-editor-addons-cta-button__icon svg' => array(
					'fill' => $attr['icon_color'],
				),

				' .responsive-block-editor-addons-cta-title' => array(
					'font-size'     => self::get_css_value( $attr['ctaTitleFontSize'], 'px' ),
					'color'         => $attr['ctaTextColor'],
					'line-height'   => $attr['ctaTitleLineHeight'],
					'font-family'   => $attr['ctaTitleFontFamily'],
					'font-weight'   => $attr['ctaTitleFontWeight'],
					'margin-bottom' => self::get_css_value( $attr['titleSpace'], 'px' ),
				),

				'' => array(
					'background-color' => $updated_background_color,
					'background-image' => $updated_background_type,
					'border-radius'    => self::get_css_value( $attr['borderRadius'], 'px' ),
					'box-shadow'       =>
						self::get_css_value( $attr['boxShadowHOffset'], 'px' ) .
						' ' .
						self::get_css_value( $attr['boxShadowVOffset'], 'px' ) .
						' ' .
						self::get_css_value( $attr['boxShadowBlur'], 'px' ) .
						' ' .
						self::get_css_value( $attr['boxShadowSpread'], 'px' ) .
						' ' .
						$attr['boxShadowColor'] .
						' ' .
						$boxShadowPositionCSS,
					'padding-top'      => self::get_css_value( $attr['bTopPadding'], 'px' ),
					'padding-bottom'   => self::get_css_value( $attr['bBottomPadding'], 'px' ),
					'padding-left'     => self::get_css_value( $attr['bLeftPadding'], 'px' ),
					'padding-right'    => self::get_css_value( $attr['bRightPadding'], 'px' ),
				),

				' .responsive-block-editor-addons-cta-image' => array(
					'background-image'    => $attr['backgroundImage'] ? 'url(' . $attr['backgroundImage'] . ')' : null,
					'height'              => 100 . '%',
					'background-position' => $attr['backgroundImagePosition'],
					'background-repeat'   => $attr['backgroundImageRepeat'],
					'background-size'     => $attr['backgroundImageSize'],
					'border-radius'       => self::get_css_value( $attr['borderRadius'], 'px' ),
				),

				' .responsive-block-editor-addons-cta-text' => array(
					'color'         => $attr['ctaTextColor'],
					'font-size'     => self::get_css_value( $attr['ctaTextFontSize'], 'px' ),
					'font-family'   => $attr['ctaTextFontFamily'],
					'line-height'   => $attr['ctaTextLineHeight'],
					'font-weight'   => $attr['ctaTextFontWeight'],
					'margin-bottom' => self::get_css_value( $attr['subtitleSpace'], 'px' ),
				),

				' .responsive-block-editor-addons-cta-button-wrapper' => array(
					'color'            => $attr['ctaColor'],
					'background-color' => $attr['ctaBackColor'],
					'padding-top'      => self::get_css_value( $attr['ctaVpadding'], 'px' ),
					'padding-bottom'   => self::get_css_value( $attr['ctaVpadding'], 'px' ),
					'padding-left'     => self::get_css_value( $attr['ctaHpadding'], 'px' ),
					'padding-right'    => self::get_css_value( $attr['ctaHpadding'], 'px' ),
					'border-style'     => $attr['ctaBorderStyle'] ? $attr['ctaBorderStyle'] : 'solid',
					'border-width'     => $attr['ctaBorderWidth'] ? self::get_css_value( $attr['ctaBorderWidth'], 'px' ) : '1px',
					'background-image' => $updated_button_background_type,
					'margin-bottom'    => self::get_css_value( $attr['buttonSpace'], 'px' ),
					'border-color'     => $attr['ctaBorderColor'],
					'background-color' => $updatedButtonBackgroundColor,
					'border-radius'    => self::get_css_value( $attr['ctaBorderRadius'], 'px' ),
				),

				' .responsive-block-editor-addons-cta-button__icon' => array(
					'margin' => $ctaIconMargin,
				),
				' .responsive-block-editor-addons-cta-button' => array(
					'font-family' => $attr['buttonTextFontFamily'],
					'font-size'   => self::get_css_value( $attr['buttonTextFontSize'], 'px' ),
					'font-weight' => $attr['buttonTextFontWeight'],
					'line-height' => $attr['buttonTextLineHeight'],
				),

			);
			$mobile_selectors = array(
				'' => array(
					$boxShadowPositionCSS,
					'padding-top'    => self::get_css_value( $attr['bTopPaddingMobile'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['bBottomPaddingMobile'], 'px' ),
					'padding-left'   => self::get_css_value( $attr['bLeftPaddingMobile'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['bRightPaddingMobile'], 'px' ),
				),
				' h2.responsive-block-editor-addons-cta-title' => array(
					'font-size' => self::get_css_value( $attr['ctaTitleFontSizeMobile'], 'px' ),
				),
				'' => array(
					$boxShadowPositionCSS,
					'padding-top'    => self::get_css_value( $attr['topPaddingMobile'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['bottomPaddingMobile'], 'px' ),
					'padding-left'   => self::get_css_value( $attr['leftPaddingMobile'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['rightPaddingMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-cta-title' => array(
					'margin-bottom' => self::get_css_value( $attr['titleSpaceMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-cta-text' => array(
					'margin-bottom' => self::get_css_value( $attr['subtitleSpaceMobile'], 'px' ),
					'font-size'     => self::get_css_value( $attr['ctaTextFontSizeMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-cta-button-wrapper' => array(
					'margin-bottom'  => self::get_css_value( $attr['buttonSpaceMobile'], 'px' ),
					'padding-top'    => self::get_css_value( $attr['ctaVpaddingMobile'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['ctaVpaddingMobile'], 'px' ),
					'padding-left'   => self::get_css_value( $attr['ctaHpaddingMobile'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['ctaHpaddingMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-cta-button' => array(
					'font-size' => self::get_css_value( $attr['buttonTextFontSizeMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-cta-link-text' => array(
					'font-size' => self::get_css_value( $attr['buttonTextFontSizeMobile'], 'px' ),
				),
			);

			$tablet_selectors = array(
				'' => array(
					'padding-top'    => self::get_css_value( $attr['bTopPaddingTablet'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['bBottomPaddingTablet'], 'px' ),
					'padding-left'   => self::get_css_value( $attr['bLeftPaddingTablet'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['bRightPaddingTablet'], 'px' ),
				),
				' h2.responsive-block-editor-addons-cta-title' => array(
					'font-size' => self::get_css_value( $attr['ctaTitleFontSizeTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-cta-title' => array(
					'margin-bottom' => self::get_css_value( $attr['titleSpaceTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-cta-button-wrapper' => array(
					'padding-top'    => self::get_css_value( $attr['ctaVpaddingTablet'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['ctaVpaddingTablet'], 'px' ),
					'padding-left'   => self::get_css_value( $attr['ctaHpaddingTablet'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['ctaHpaddingTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-cta-title' => array(
					'margin-bottom' => self::get_css_value( $attr['titleSpaceTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-cta-text' => array(
					'font-size'     => self::get_css_value( $attr['ctaTextFontSizeTablet'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['subtitleSpaceTablet'], 'px' ),
				),

				' .responsive-block-editor-addons-cta-button-wrapper' => array(
					'margin-bottom' => self::get_css_value( $attr['buttonSpaceTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-cta-button' => array(
					'font-size' => self::get_css_value( $attr['buttonTextFontSizeTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-cta-link-text' => array(
					'font-size' => self::get_css_value( $attr['buttonTextFontSizeTablet'], 'px' ),
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-block-call-to-action.block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );

			return $css;
		}

		/**
		 * Get Defaults for Call to action block
		 *
		 * @return array
		 */
		public static function get_responsive_block_call_to_action_default_attributes() {
			return array(
				'block_id'                 => '',
				'buttonText'               => '',
				'buttonUrl'                => '',
				'ctaTextOpacity'           => 100,
				'buttonAlignment'          => 'center',
				'ctaBackColor'             => '#2091e1',
				'ctaColor'                 => '#fff',
				'buttonSize'               => 'responsive-block-editor-addons-cta-button-size-medium',
				'buttonShape'              => 'responsive-block-editor-addons-cta-button-shape-rounded',
				'buttonTarget'             => false,
				'ctaTitle'                 => '',
				'ctaTitleFontFamily'       => '',
				'ctaTextFontFamily'        => '',
				'ctaTitleFontSize'         => '22',
				'ctaTitleFontSizeMobile'   => '22',
				'ctaTitleFontSizeTablet'   => '22',
				'ctaTextFontSize'          => '16',
				'ctaTextFontSizeMobile'    => '16',
				'ctaTextFontSizeTablet'    => '16',
				'ctaText'                  => '',
				'ctaWidth'                 => '',
				'backgroundColor'          => '#f2f2f2',
				'ctaTextColor'             => '',
				'backgroundImage'          => '',
				'imgID'                    => '',
				'imgAlt'                   => '',
				'dimRatio'                 => 50,
				'opacity'                  => 100,
				'ctaTitleLineHeight'       => 1.8,
				'ctaTitleFontWeight'       => '400',
				'ctaTextLineHeight'        => 1.75,
				'ctaTextFontWeight'        => '400',
				'ctaVpadding'              => 10,
				'ctaHpadding'              => 14,
				'ctaVpaddingMobile'        => 10,
				'ctaHpaddingMobile'        => 14,
				'ctaVpaddingTablet'        => 10,
				'ctaHpaddingTablet'        => 14,
				'ctaBorderWidth'           => 1,
				'ctaBorderStyle'           => 'solid',
				'icon'                     => '',
				'iconPosition'             => 'after',
				'counterId'                => 1,
				'ctaHoverBackColor'        => '',
				'ctaHoverColor'            => '#e6f2ff',
				'ctaBorderColor'           => '',
				'ctaHoverBorderColor'      => '',
				'resctaType'               => 'button',
				'ctalinkText'              => '',
				'titleSpace'               => 25,
				'titleSpaceMobile'         => 25,
				'titleSpaceTablet'         => 25,
				'subtitleSpace'            => 28,
				'subtitleSpaceMobile'      => 28,
				'subtitleSpaceTablet'      => 28,
				'iconSpace'                => 8,
				'colorLocation1'           => 0,
				'colorLocation2'           => 100,
				'gradientDirection'        => 90,
				'backgroundColor1'         => '',
				'backgroundColor2'         => '',
				'backgroundType'           => 'color',
				'buttoncolorLocation1'     => 0,
				'buttoncolorLocation2'     => 100,
				'buttongradientDirection'  => 90,
				'buttonbackgroundColor1'   => '',
				'buttonbackgroundColor2'   => '',
				'buttonbackgroundType'     => 'color',
				'boxShadowColor'           => '',
				'boxShadowHOffset'         => 0,
				'boxShadowVOffset'         => 0,
				'boxShadowBlur'            => '',
				'boxShadowSpread'          => '',
				'boxShadowPosition'        => 'outset',
				'icon_color'               => '#3a3a3a',
				'bTopPadding'              => 20,
				'bTopPaddingMobile'        => 20,
				'bTopPaddingTablet'        => 20,
				'bBottomPadding'           => 20,
				'bBottomPaddingMobile'     => 20,
				'bBottomPaddingTablet'     => 20,
				'bLeftPadding'             => 20,
				'bLeftPaddingMobile'       => 20,
				'bLeftPaddingTablet'       => 20,
				'bRightPadding'            => 20,
				'bRightPaddingMobile'      => 20,
				'bRightPaddingTablet'      => 20,
				'backgroundImagePosition'  => 'center center',
				'backgroundImageRepeat'    => 'no-repeat',
				'backgroundImageSize'      => 'cover',
				'buttonSpace'              => 28,
				'buttonSpaceMobile'        => 28,
				'buttonSpaceTablet'        => 28,
				'borderRadius'             => 12,
				'ctaBorderRadius'          => 0,
				'buttonTextFontFamily'     => '',
				'buttonTextFontSize'       => 18,
				'buttonTextFontSizeMobile' => 18,
				'buttonTextFontSizeTablet' => 18,
				'buttonTextLineHeight'     => 1,
				'buttonTextFontWeight'     => '400',
			);
		}

		/**
		 * Get Card Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_card_css( $attr, $id ) {
			$defaults = self::get_responsive_block_card_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$imgopacity  = $attr['opacity'] / 100;
			$butopacity  = $attr['buttonopacity'] / 100;
			$butHOpacity = $attr['buttonHopacity'] / 100;
			$textOpacity = $attr['ctaTextOpacity'] / 100;

			$updated_button_color            = '';
			$updated_buttonh_color           = '';
			$updated_background_color        = '';
			$updated_background_type         = '';
			$updated_button_background_color = '';
			$box_shadow_position_css         = $attr['boxShadowPosition'];
			$background_image_url_check      = $attr['backgroundImage'] ? $attr['backgroundImage'] : null;

			if ( 'outset' === $attr['boxShadowPosition'] ) {
				$box_shadow_position_css = '';
			}

			if ( $attr['buttonbackgroundType'] === 'color' ) {
				$updated_button_color  = self::hexToRgb( $attr['ctaBackColor'] ? $attr['ctaBackColor'] : '#2091e1', $butopacity );
				$updated_buttonh_color = self::hexToRgb( $attr['ctaHoverBackColor'] ? $attr['ctaHoverBackColor'] : '#0071a1', $butHOpacity );
			}

			if ( $attr['backgroundType'] === 'color' ) {
				$updated_background_color = self::hexToRgb( $attr['backgroundColor'] ? $attr['backgroundColor'] : '#fff', $imgopacity );
			} else {
				$updated_background_color = '#fff';
			}

			if ( $attr['backgroundType'] === 'gradient' ) {
				$updated_background_type = self::generateBackgroundImageEffect( $attr['backgroundColor1'], $attr['backgroundColor2'], $attr['gradientDirection'], $attr['colorLocation1'], $attr['colorLocation2'] );
			}

			if ( $attr['buttonbackgroundType'] === 'gradient' ) {
				$updated_button_background_color = self::generateBackgroundImageEffect( $attr['buttonbackgroundColor1'], $attr['buttonbackgroundColor2'], $attr['buttongradientDirection'], $attr['buttoncolorLocation1'], $attr['buttoncolorLocation2'] );
			}

			$selectors = array(
				' .responsive-block-editor-addons-card-button-inner .res-button' => array(
					'color'   => $attr['ctaColor'],
					'opacity' => $textOpacity,
				),

				' .responsive-block-editor-addons-card-button-inner:hover .res-button' => array(
					'color' => $attr['ctaHoverColor'],
				),

				' .responsive-block-editor-addons-card-button-inner .responsive-block-editor-addons-button__icon svg' => array(
					'fill' => $attr['icon_color'],
				),

				' .responsive-block-editor-addons-card-button-inner:hover .responsive-block-editor-addons-button__icon svg' => array(
					'fill' => $attr['icon_hcolor'],
				),

				' .wp-block-responsive-block-editor-addons-card-item__button-wrapper .responsive-block-editor-addons-card-button-inner' => array(
					'background-color' => $updated_button_color,
				),

				' .responsive-block-editor-addons-card-button-inner:hover' => array(
					'background-color' => $updated_buttonh_color,
					'border-color'     => $attr['ctaHoverBorderColor'],
				),

				''                    => array(
					'margin-bottom' => self::get_css_value( $attr['blockbotmargin'], 'px' ),
					'margin-top'    => self::get_css_value( $attr['blockmargin'], 'px' ),
					'margin-left'   => self::get_css_value( $attr['blockleftmargin'], 'px' ),
					'margin-right'  => self::get_css_value( $attr['blockrightmargin'], 'px' ),
					'z-index'       => $attr['blockzindex'],
				),

				' .wp-block-responsive-block-editor-addons-card-item' => array(
					'border-color'     => $attr['blockBorderColor'],
					'border-style'     => $attr['blockBorderStyle'],
					'border-width'     => self::get_css_value( $attr['blockBorderWidth'], 'px' ),
					'border-radius'    => self::get_css_value( $attr['blockBorderRadius'], 'px' ),
					'background-color' => $updated_background_color,
					'background-image' => $updated_background_type,
					'box-shadow'       => self::get_css_value( $attr['boxShadowHOffset'], 'px' ) .
						' ' .
						self::get_css_value( $attr['boxShadowVOffset'], 'px' ) .
						' ' .
						self::get_css_value( $attr['boxShadowBlur'], 'px' ) .
						' ' .
						self::get_css_value( $attr['boxShadowSpread'], 'px' ) .
						' ' .
						$attr['boxShadowColor'] .
						' ' .
						$box_shadow_position_css,
				),

				' .responsive-block-editor-addons-card-background-image' => array(
					'background-image'    => 'url(' . $background_image_url_check . ')',
					'height'              => 100 . '%',
					'background-position' => $attr['backgroundImagePosition'],
					'background-repeat'   => $attr['backgroundImageRepeat'],
					'background-size'     => $attr['backgroundImageSize'],
				),

				' .responsive-block-editor-addons-card-avatar' => array(
					'height' => self::get_css_value( $attr['imageheight'], 'px' ),
				),

				' .responsive-block-editor-addons-card-avatar-img' => array(
					'background-position' => $attr['imagePosition'],
					'background-repeat'   => $attr['imageRepeat'],
					'background-size'     => $attr['thumbsize'],
				),

				' .responsive-block-editor-addons-card-avatar-img.responsive-block-editor-addons-card-avatar-img-0' => array(
					'background-image' => 'url(' . $attr['backgroundImageOne'] . ')',
					'display'          => $attr['backgroundImageOne'] ? 'block' : 'none',
				),

				' .responsive-block-editor-addons-card-avatar-img.responsive-block-editor-addons-card-avatar-img-1' => array(
					'background-image' => 'url(' . $attr['backgroundImageTwo'] . ')',
					'display'          => $attr['backgroundImageTwo'] ? 'block' : 'none',
				),

				' .responsive-block-editor-addons-card-avatar-img.responsive-block-editor-addons-card-avatar-img-2' => array(
					'background-image' => 'url(' . $attr['backgroundImageThree'] . ')',
					'display'          => $attr['backgroundImageThree'] ? 'block' : 'none',
				),

				' .responsive-block-editor-addons-card-avatar-img.responsive-block-editor-addons-card-avatar-img-3' => array(
					'background-image' => 'url(' . $attr['backgroundImageFour'] . ')',
					'display'          => $attr['backgroundImageFour'] ? 'block' : 'none',
				),

				' .card-content-wrap' => array(
					'text-align'    => $attr['contentAlignment'],
					'margin-bottom' => self::get_css_value( $attr['contentSpace'], 'px' ),
					'margin-top'    => self::get_css_value( $attr['contenttopSpace'], 'px' ),
				),

				' .wp-block-responsive-block-editor-addons-card-item__title' => array(
					'margin-top'    => 0,
					'margin-bottom' => self::get_css_value( $attr['titleSpace'], 'px' ),
					'color'         => $attr['textColor'],
					'line-height'   => $attr['headingLineHeight'],
					'font-family'   => $attr['headingFontFamily'],
					'font-weight'   => $attr['headingFontWeight'],
					'font-size'     => self::get_css_value( $attr['headingFontSize'], 'px' ),
				),

				' .wp-block-responsive-block-editor-addons-card-item__subtitle' => array(
					'margin-top'    => 0,
					'margin-bottom' => self::get_css_value( $attr['subtitleSpace'], 'px' ),
					'color'         => $attr['textColor'],
					'line-height'   => $attr['subLineHeight'],
					'font-weight'   => $attr['subFontWeight'],
					'font-family'   => $attr['subFontFamily'],
					'font-size'     => self::get_css_value( $attr['subFontSize'], 'px' ),
				),

				' .wp-block-responsive-block-editor-addons-card-item__content' => array(
					'margin-top'  => 0,
					'color'       => $attr['textColor'],
					'line-height' => $attr['contentLineHeight'],
					'font-weight' => $attr['contentFontWeight'],
					'font-size'   => self::get_css_value( $attr['contentFontSize'], 'px' ),
					'font-family' => $attr['contentFontFamily'],
				),

				' .responsive-block-editor-addons-card-button-inner' => array(
					'padding-top'      => self::get_css_value( $attr['ctaVpadding'], 'px' ),
					'padding-bottom'   => self::get_css_value( $attr['ctaVpadding'], 'px' ),
					'padding-left'     => self::get_css_value( $attr['ctaHpadding'], 'px' ),
					'padding-right'    => self::get_css_value( $attr['ctaHpadding'], 'px' ),
					'margin-top'       => self::get_css_value( $attr['vMargin'], 'px' ),
					'margin-bottom'    => self::get_css_value( $attr['vMargin'], 'px' ),
					'margin-left'      => self::get_css_value( $attr['hMargin'], 'px' ),
					'margin-right'     => self::get_css_value( $attr['hMargin'], 'px' ),
					'border-style'     => $attr['ctaBorderStyle'],
					'border-radius'    => self::get_css_value( $attr['ctaBorderRadius'], 'px' ),
					'border-width'     => self::get_css_value( $attr['ctaBorderWidth'], 'px' ),
					'background-image' => $updated_button_background_color,
					'border-color'     => $attr['ctaBorderColor'],
				),

			);

			$mobile_selectors = array(
				' .responsive-block-editor-addons-card-button-inner' => array(
					'padding-top'    => self::get_css_value( $attr['ctaVpaddingMobile'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['ctaVpaddingMobile'], 'px' ),
					'padding-left'   => self::get_css_value( $attr['ctaHpaddingMobile'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['ctaHpaddingMobile'], 'px' ),
					'margin-top'     => self::get_css_value( $attr['vMarginMobile'], 'px' ),
					'margin-bottom'  => self::get_css_value( $attr['vMarginMobile'], 'px' ),
					'margin-left'    => self::get_css_value( $attr['hMarginMobile'], 'px' ),
					'margin-right'   => self::get_css_value( $attr['hMarginMobile'], 'px' ),
				),
				''                    => array(
					'margin-bottom' => self::get_css_value( $attr['blockbotmarginMobile'], 'px' ),
					'margin-top'    => self::get_css_value( $attr['blockmarginMobile'], 'px' ),
					'margin-left'   => self::get_css_value( $attr['blockleftmarginMobile'], 'px' ),
					'margin-right'  => self::get_css_value( $attr['blockrightmarginMobile'], 'px' ),
				),
				' .card-content-wrap' => array(
					'margin-bottom' => self::get_css_value( $attr['contentSpaceMobile'], 'px' ),
					'margin-top'    => self::get_css_value( $attr['contenttopSpaceMobile'], 'px' ),
				),

				' .wp-block-responsive-block-editor-addons-card-item__title' => array(
					'margin-bottom' => self::get_css_value( $attr['titleSpaceMobile'], 'px' ),
					'font-size'     => self::get_css_value( $attr['headingFontSizeMobile'], 'px' ),
				),

				' .wp-block-responsive-block-editor-addons-card-item__subtitle' => array(
					'margin-bottom' => self::get_css_value( $attr['subtitleSpaceMobile'], 'px' ),
					'font-size'     => self::get_css_value( $attr['subFontSizeMobile'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-card-item__content' => array(
					'font-size' => self::get_css_value( $attr['contentFontSizeMobile'], 'px' ),
				),
			);

			$tablet_selectors = array(
				' .responsive-block-editor-addons-card-button-inner' => array(
					'padding-top'    => self::get_css_value( $attr['ctaVpaddingTablet'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['ctaVpaddingTablet'], 'px' ),
					'padding-left'   => self::get_css_value( $attr['ctaHpaddingTablet'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['ctaHpaddingTablet'], 'px' ),
					'margin-top'     => self::get_css_value( $attr['vMarginTablet'], 'px' ),
					'margin-bottom'  => self::get_css_value( $attr['vMarginTablet'], 'px' ),
					'margin-left'    => self::get_css_value( $attr['hMarginTablet'], 'px' ),
					'margin-right'   => self::get_css_value( $attr['hMarginTablet'], 'px' ),
				),
				''                    => array(
					'margin-bottom' => self::get_css_value( $attr['blockbotmarginTablet'], 'px' ),
					'margin-top'    => self::get_css_value( $attr['blockmarginTablet'], 'px' ),
					'margin-left'   => self::get_css_value( $attr['blockleftmarginTablet'], 'px' ),
					'margin-right'  => self::get_css_value( $attr['blockrightmarginTablet'], 'px' ),
				),
				' .card-content-wrap' => array(
					'margin-bottom' => self::get_css_value( $attr['contentSpaceTablet'], 'px' ),
					'margin-top'    => self::get_css_value( $attr['contenttopSpaceTablet'], 'px' ),
				),

				' .wp-block-responsive-block-editor-addons-card-item__title' => array(
					'margin-bottom' => self::get_css_value( $attr['titleSpaceTablet'], 'px' ),
					'font-size'     => self::get_css_value( $attr['headingFontSizeTablet'], 'px' ),
				),

				' .wp-block-responsive-block-editor-addons-card-item__subtitle' => array(
					'margin-bottom' => self::get_css_value( $attr['subtitleSpaceTablet'], 'px' ),
					'font-size'     => self::get_css_value( $attr['subFontSizeTablet'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-card-item__content' => array(
					'font-size' => self::get_css_value( $attr['contentFontSizeTablet'], 'px' ),
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-block-card.block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );

			return $css;
		}

		/**
		 * Get Defaults for card block
		 *
		 * @return array
		 */
		public static function get_responsive_block_card_default_attributes() {
			return array(
				'block_id'                => '',
				'cardsArray'              => '',
				'count'                   => '',
				'gutter'                  => 'medium',
				'stack'                   => 'mobile',
				'contentAlign'            => 'center',
				'textColor'               => '',
				'backgroundColor'         => '',
				'ctaBackColor'            => '#2091e1',
				'ctaColor'                => '#fff',
				'boxShadowColor'          => '',
				'boxShadowHOffset'        => 0,
				'boxShadowVOffset'        => 0,
				'boxShadowBlur'           => 0,
				'boxShadowSpread'         => 0,
				'boxShadowPosition'       => 'outset',
				'titleSpace'              => 8,
				'titleSpaceMobile'        => 8,
				'titleSpaceTablet'        => 8,
				'subtitleSpace'           => 16,
				'subtitleSpaceMobile'     => 16,
				'subtitleSpaceTablet'     => 16,
				'contentSpace'            => 16,
				'contentSpaceMobile'      => 16,
				'contentSpaceTablet'      => 16,
				'buttonSpace'             => 20,
				'blockBorderWidth'        => 0,
				'blockBorderRadius'       => 12,
				'opacity'                 => 100,
				'resshowImage'            => true,
				'colorLocation1'          => 0,
				'colorLocation2'          => 100,
				'gradientDirection'       => 90,
				'backgroundImage'         => '',
				'backgroundColor'         => '',
				'backgroundColor1'        => '',
				'backgroundColor2'        => '#fff',
				'backgroundType'          => 'none',
				'imageopacity'            => 20,
				'imageSize'               => 'full',
				'imagePosition'           => 'center center',
				'imageRepeat'             => 'no-repeat',
				'thumbsize'               => 'cover',
				'imageheight'             => 200,
				'blockmargin'             => 2,
				'blockmarginMobile'       => 2,
				'blockmarginTablet'       => 2,
				'blockzindex'             => 1,
				'icon'                    => '',
				'iconPosition'            => 'after',
				'icon_color'              => '#3a3a3a',
				'counterId'               => 1,
				'ctaHoverBackColor'       => '',
				'ctaHoverColor'           => '#e6f2ff',
				'buttonopacity'           => 100,
				'ctaVpadding'             => 10,
				'ctaHpadding'             => 14,
				'vMargin'                 => 10,
				'hMargin'                 => 0,
				'ctaBorderWidth'          => 1,
				'ctaBorderRadius'         => 2,
				'ctaBorderStyle'          => 'none',
				'buttonSize'              => 'responsive-block-editor-addons-button-size-medium',
				'buttoncolorLocation1'    => 0,
				'buttoncolorLocation2'    => 100,
				'buttongradientDirection' => 90,
				'buttonbackgroundColor1'  => '',
				'buttonbackgroundColor2'  => '#fff',
				'buttonbackgroundType'    => 'none',
				'icon_hcolor'             => '#3a3a3a',
				'headingFontFamily'       => '',
				'subFontFamily'           => '',
				'contentFontFamily'       => '',
				'subLineHeight'           => 1,
				'subFontWeight'           => 400,
				'subFontSize'             => 16,
				'subFontSizeMobile'       => 16,
				'subFontSizeTablet'       => 16,
				'headingLineHeight'       => 1,
				'headingFontWeight'       => 900,
				'headingFontSize'         => 20,
				'headingFontSizeMobile'   => 20,
				'headingFontSizeTablet'   => 20,
				'contentLineHeight'       => 2,
				'contentFontSize'         => 16,
				'contentFontSizeMobile'   => 16,
				'contentFontSizeTablet'   => 16,
				'contentFontWeight'       => 400,
				'blockbotmargin'          => 2,
				'blockbotmarginMobile'    => 2,
				'blockbotmarginTablet'    => 2,
				'blockleftmargin'         => 0,
				'blockleftmarginMobile'   => 0,
				'blockleftmarginTablet'   => 0,
				'blockrightmargin'        => 0,
				'blockrightmarginMobile'  => 0,
				'blockrightmarginTablet'  => 0,
				'contenttopSpace'         => 16,
				'contenttopSpaceMobile'   => 16,
				'contenttopSpaceTablet'   => 16,
				'bgimageSize'             => 'full',
				'backgroundImagePosition' => 'center center',
				'backgroundImageRepeat'   => 'no-repeat',
				'backgroundImageSize'     => 'cover',
				'borderStyle'             => 'none',
				'buttonTarget'            => 'false',
				'contentAlignment'        => 'left',
				'borderColor'             => '',
				'backgroundImageOne'      => '',
				'backgroundImageTwo'      => '',
				'backgroundImageThree'    => '',
				'backgroundImageFour'     => '',
				'ctaBorderColor'          => '',
				'ctaHoverBorderColor'     => '',
				'buttonHopacity'          => 100,
				'ctaTextOpacity'          => 100,
				'ctaHpaddingTablet'       => 14,
				'ctaHpaddingMobile'       => 14,
				'ctaVpaddingTablet'       => 10,
				'ctaVpaddingMobile'       => 10,
				'vMarginTablet'           => 10,
				'vMarginMobile'           => 10,
				'hMarginTablet'           => 0,
				'hMarginMobile'           => 0,
			);
		}

		/**
		 * Get Content timeline Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_content_timeline_css( $attr, $id ) {
			$defaults = self::get_responsive_block_content_timeline_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$border_with_color = '13px solid' . $attr['backgroundColor'];

			$imgopacity = $attr['opacity'] / 100;

			$selectors = array(
				' .responsive-timeline__left .responsive-timeline__day-left .responsive-timeline__arrow:after' => array(
					'border-right' => $border_with_color,
				),

				' .responsive-timeline__right .responsive-timeline__day-right .responsive-timeline__arrow:after' => array(
					'border-left' => $border_with_color,
				),

				' .responsive-timeline__line'             => array(
					'background-color' => $attr['separatorColor'],
				),

				' .responsive-timeline__line__inner'      => array(
					'background-color' => $attr['separatorFillColor'],
				),

				' .responsive-timeline__main .responsive-block-editor-addons-ifb-icon' => array(
					'color' => $attr['iconColor'],
				),

				' .responsive-timeline__main .responsive-block-editor-addons-ifb-icon svg' => array(
					'fill' => $attr['iconColor'],
				),

				' .responsive-timeline__marker'           => array(
					'background-color' => $attr['separatorBg'],
					'border-color'     => $attr['separatorBorder'],
				),

				' .responsive-timeline__main .responsive-timeline__marker.responsive-timeline__in-view-icon' => array(
					'background'   => $attr['iconBgFocus'],
					'border-color' => $attr['borderFocus'],
					'color'        => $attr['iconFocus'],
				),

				' .responsive-timeline__main .responsive-timeline__marker.responsive-timeline__in-view-icon svg' => array(
					'fill' => $attr['iconFocus'],
				),

				' .responsive-timeline__main .responsive-timeline__marker.responsive-timeline__in-view-icon .responsive-timeline__icon-new' => array(
					'color' => $attr['iconFocus'],
				),

				' .responsive-timeline__left-block .responsive-timeline__line' => array(
					'left' => $attr['connectorBgsize'] / 2 . 'px',
				),

				' .responsive-timeline__rightt-block .responsive-timeline__line' => array(
					'right' => $attr['connectorBgsize'] / 2 . 'px',
				),

				' .responsive-timeline__field.responsive-timeline__field-wrap' => array(
					'margin-bottom' => self::get_css_value( $attr['verticalSpace'], 'px' ),
				),

				' .responsive-timeline__marker.out-view-responsive-timeline__icon, .responsive-timeline__marker.in-view-responsive-timeline__icon' => array(
					'margin-left'  => self::get_css_value( $attr['horizontalSpace'], 'px' ),
					'margin-right' => self::get_css_value( $attr['horizontalSpace'], 'px' ),
					'min-width'    => self::get_css_value( $attr['connectorBgsize'], 'px' ),
					'min-height'   => self::get_css_value( $attr['connectorBgsize'], 'px' ),
					'border-width' => self::get_css_value( $attr['borderwidth'], 'px' ),
				),

				' .responsive-block-editor-addons-ifb-icon' => array(
					'width'  => self::get_css_value( $attr['iconSize'], 'px' ),
					'height' => self::get_css_value( $attr['iconSize'], 'px' ),
				),

				' .responsive-timeline__events-inner-new' => array(
					'border-radius'    => self::get_css_value( $attr['itemBorderRadius'], 'px' ),
					'border-width'     => self::get_css_value( $attr['itemBorderWidth'], 'px' ),
					'border-style'     => $attr['itemBorderStyle'],
					'border-color'     => $attr['itemBorderColor'],
					'padding'          => self::get_css_value( $attr['itemPadding'], 'px' ),
					'background-color' => self::hexToRgb( $attr['backgroundColor'], $imgopacity ),
				),

				' .responsive-timeline__inner-date-new'   => array(
					'color'       => $attr['dateColor'],
					'line-height' => $attr['dateLineHeight'],
					'font-weight' => $attr['dateFontWeight'],
					'font-size'   => self::get_css_value( $attr['dateFontSize'], 'px' ),
					'font-family' => $attr['dateFontFamily'],
				),

				' .responsive-timeline__heading'          => array(
					'color'         => $attr['headingColor'],
					'line-height'   => $attr['headingLineHeight'],
					'font-weight'   => $attr['headingFontWeight'],
					'font-size'     => self::get_css_value( $attr['headingFontSize'], 'px' ),
					'font-family'   => $attr['headingFontFamily'],
					'margin-bottom' => self::get_css_value( $attr['headingBottomMargin'], 'px' ),
				),

				' .responsive-timeline-desc-content'      => array(
					'color'       => $attr['contentColor'],
					'line-height' => $attr['contentLineHeight'],
					'font-weight' => $attr['contentFontWeight'],
					'font-size'   => self::get_css_value( $attr['contentFontSize'], 'px' ),
					'font-family' => $attr['contentFontFamily'],
				),

				' .responsive-timeline__date-new'         => array(
					'color'       => $attr['dateColor'],
					'line-height' => $attr['dateLineHeight'],
					'font-weight' => $attr['dateFontWeight'],
					'font-size'   => self::get_css_value( $attr['dateFontSize'], 'px' ),
					'font-family' => $attr['dateFontFamily'],
				),

				' .responsive-timeline__line'             => array(
					'background-color' => $attr['separatorColor'],
					'width'            => self::get_css_value( $attr['separatorwidth'], 'px' ),
					'margin-left'      => $attr['timelinAlignment'] !== 'center' ? self::get_css_value( $attr['horizontalSpace'], 'px' ) : '',
					'margin-right'     => $attr['timelinAlignment'] !== 'center' ? self::get_css_value( $attr['horizontalSpace'], 'px' ) : '',
				),

			);

			$mobile_selectors = array(
				' .responsive-timeline__center-block.responsive-timeline__responsive-mobile .responsive-timeline__line' => array(
					'left'  => $attr['connectorBgsize'] / 2 . 'px',
					'right' => $attr['connectorBgsize'] / 2 . 'px',
				),

				' .responsive-timeline__left-block.responsive-timeline__responsive-mobile .responsive-timeline__line' => array(
					'left' => $attr['connectorBgsize'] / 2 . 'px',
				),

				' .responsive-timeline__right-block.responsive-timeline__responsive-mobile .responsive-timeline__line' => array(
					'right' => $attr['connectorBgsize'] / 2 . 'px',
				),
				' .responsive-timeline__field.responsive-timeline__field-wrap' => array(
					'margin-bottom' => self::get_css_value( $attr['verticalSpaceMobile'], 'px' ),
				),

				' .responsive-timeline__marker.out-view-responsive-timeline__icon, .responsive-timeline__marker.in-view-responsive-timeline__icon' => array(
					'margin-left'  => self::get_css_value( $attr['horizontalSpaceMobile'], 'px' ),
					'margin-right' => self::get_css_value( $attr['horizontalSpaceMobile'], 'px' ),
				),
				' .responsive-timeline__date-new'    => array(
					'font-size' => self::get_css_value( $attr['dateFontSizeMobile'], 'px' ),
				),
				' .responsive-timeline-desc-content' => array(
					'font-size' => self::get_css_value( $attr['contentFontSizeMobile'], 'px' ),
				),
				' .responsive-timeline__heading'     => array(
					'font-size'     => self::get_css_value( $attr['headingFontSizeMobile'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['headingBottomMarginMobile'], 'px' ),
				),
			);

			$tablet_selectors = array(
				' .responsive-timeline__center-block.responsive-timeline__responsive-tablet .responsive-timeline__line' => array(
					'left'  => $attr['connectorBgsize'] / 2 . 'px',
					'right' => $attr['connectorBgsize'] / 2 . 'px',
				),

				' .responsive-timeline__left-block.responsive-timeline__responsive-tablet .responsive-timeline__line' => array(
					'left' => $attr['connectorBgsize'] / 2 . 'px',
				),

				' .responsive-timeline__right-block.responsive-timeline__responsive-tablet .responsive-timeline__line' => array(
					'right' => $attr['connectorBgsize'] / 2 . 'px',
				),
				' .responsive-timeline__field.responsive-timeline__field-wrap' => array(
					'margin-bottom' => self::get_css_value( $attr['verticalSpaceTablet'], 'px' ),
				),

				' .responsive-timeline__marker.out-view-responsive-timeline__icon, .responsive-timeline__marker.in-view-responsive-timeline__icon' => array(
					'margin-left'  => self::get_css_value( $attr['horizontalSpaceTablet'], 'px' ),
					'margin-right' => self::get_css_value( $attr['horizontalSpaceTablet'], 'px' ),
				),
				' .responsive-timeline__date-new'    => array(
					'font-size' => self::get_css_value( $attr['dateFontSizeTablet'], 'px' ),
				),
				' .responsive-timeline-desc-content' => array(
					'font-size' => self::get_css_value( $attr['contentFontSizeTablet'], 'px' ),
				),
				' .responsive-timeline__heading'     => array(
					'font-size' => self::get_css_value( $attr['headingFontSizeTablet'], 'px' ),
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-block-content-timeline.block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			return $css;
		}

		/**
		 * Get Defaults for content timeline block
		 *
		 * @return array
		 */
		public static function get_responsive_block_content_timeline_default_attributes() {
			return array(
				'block_id'                  => '',
				'timelinAlignment'          => 'center',
				'timelineItems'             => '',
				'dateFormat'                => 'F j, Y',
				'headingTag'                => 'h4',
				't_date'                    => '',
				'displayPostDate'           => true,
				'count'                     => 5,
				'dateBottomspace'           => 5,
				'itemBorderStyle'           => 'none',
				'itemBorderColor'           => '',
				'itemBorderWidth'           => 1,
				'itemBorderRadius'          => 2,
				'itemPadding'               => 20,
				'horizontalSpace'           => 0,
				'horizontalSpaceMobile'     => 0,
				'horizontalSpaceTablet'     => 0,
				'verticalSpace'             => 15,
				'verticalSpaceMobile'       => 15,
				'verticalSpaceTablet'       => 15,
				'headingBottomMargin'       => 15,
				'headingBottomMarginMobile' => 15,
				'headingBottomMarginTablet' => 15,
				'dateLineHeight'            => 1,
				'contentFontFamily'         => '',
				'headingFontFamily'         => '',
				'dateFontFamily'            => '',
				'dateFontWeight'            => '400',
				'dateFontSize'              => 16,
				'headingLineHeight'         => 1,
				'headingFontWeight'         => '400',
				'headingFontSize'           => 20,
				'dateColor'                 => '',
				'headingColor'              => '',
				'contentColor'              => '',
				'backgroundColor'           => '#eee',
				'counterId'                 => 1,
				'contentLineHeight'         => 2,
				'contentFontSize'           => 16,
				'contentFontWeight'         => '400',
				'opacity'                   => 100,
				'separatorColor'            => '#eee',
				'iconColor'                 => '#333',
				'separatorBg'               => '#eee',
				'separatorBorder'           => '#eee',
				'separatorFillColor'        => '#61ce70',
				'iconFocus'                 => '#fff',
				'iconBgFocus'               => '#61ce70',
				'borderFocus'               => '#5cb85c',
				'separatorwidth'            => 3,
				'borderwidth'               => 0,
				'connectorBgsize'           => 35,
				'iconSize'                  => 20,
				'icon'                      => 'fa fa-calendar-alt',
				'stack'                     => 'mobile',
				'arrowlinAlignment'         => 'center',
				'dateFontSizeMobile'        => 16,
				'dateFontSizeTablet'        => 16,
				'headingFontSizeMobile'     => 20,
				'headingFontSizeTablet'     => 20,
				'contentFontSizeMobile'     => 16,
				'contentFontSizeTablet'     => 16,
			);
		}

		/**
		 * Get Expand Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_expand_css( $attr, $id ) {
			$defaults = self::get_responsive_block_expand_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$selectors = array(
				' .responsive-block-editor-addons-expand-block-content' => array(
					'text-align' => $attr['expandAlignment'],
				),

				' .responsive-block-editor-addons-expand-title' => array(
					'margin-bottom' => self::get_css_value( $attr['titleSpace'], 'px' ),
					'font-family'   => $attr['titleFontFamily'],
					'font-size'     => self::get_css_value( $attr['titleFontSize'], 'px' ),
					'font-weight'   => $attr['titleFontWeight'],
					'line-height'   => $attr['titleLineHeight'],
					'color'         => $attr['titleColor'],
				),

				' .responsive-block-editor-addons-expand-less-text' => array(
					'margin-bottom' => self::get_css_value( $attr['textSpace'], 'px' ),
					'font-family'   => $attr['textFontFamily'],
					'font-size'     => self::get_css_value( $attr['textFontSize'], 'px' ),
					'font-weight'   => $attr['textFontWeight'],
					'line-height'   => $attr['textLineHeight'],
					'color'         => $attr['textColor'],
				),

				' .responsive-block-editor-addons-expand-more-text' => array(
					'display'       => 'none',
					'margin-bottom' => self::get_css_value( $attr['textSpace'], 'px' ),
					'font-family'   => $attr['textFontFamily'],
					'font-size'     => self::get_css_value( $attr['textFontSize'], 'px' ),
					'font-weight'   => $attr['textFontWeight'],
					'line-height'   => $attr['textLineHeight'],
					'color'         => $attr['textColor'],
				),

				' .responsive-block-editor-addons-expand-more-toggle-text' => array(
					'margin-bottom' => self::get_css_value( $attr['linkSpace'], 'px' ),
					'font-family'   => $attr['linkFontFamily'],
					'font-size'     => self::get_css_value( $attr['linkFontSize'], 'px' ),
					'font-weight'   => $attr['linkFontWeight'],
					'line-height'   => $attr['linkLineHeight'],
					'color'         => $attr['linkColor'],
				),

				' .responsive-block-editor-addons-expand-less-toggle-text' => array(
					'display'       => 'none',
					'margin-bottom' => self::get_css_value( $attr['linkSpace'], 'px' ),
					'font-family'   => $attr['linkFontFamily'],
					'font-size'     => self::get_css_value( $attr['linkFontSize'], 'px' ),
					'font-weight'   => $attr['linkFontWeight'],
					'line-height'   => $attr['linkLineHeight'],
					'color'         => $attr['linkColor'],
				),
			);

			$mobile_selectors = array(
				' .responsive-block-editor-addons-expand-title' => array(
					'font-size'     => self::get_css_value( $attr['titleFontSizeMobile'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['titleSpaceMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-expand-less-text' => array(
					'font-size'     => self::get_css_value( $attr['textFontSizeMobile'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['textSpaceMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-expand-more-text' => array(
					'font-size'     => self::get_css_value( $attr['textFontSizeMobile'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['textSpaceMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-expand-more-toggle-text' => array(
					'font-size'     => self::get_css_value( $attr['linkFontSizeMobile'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['linkSpaceMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-expand-less-toggle-text' => array(
					'font-size'     => self::get_css_value( $attr['linkFontSizeMobile'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['linkSpaceMobile'], 'px' ),
				),
			);

			$tablet_selectors = array(
				' .responsive-block-editor-addons-expand-title' => array(
					'font-size'     => self::get_css_value( $attr['titleFontSizeTablet'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['titleSpaceTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-expand-less-text' => array(
					'font-size'     => self::get_css_value( $attr['textFontSizeTablet'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['textSpaceTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-expand-more-text' => array(
					'font-size'     => self::get_css_value( $attr['textFontSizeTablet'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['textSpaceTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-expand-more-toggle-text' => array(
					'font-size'     => self::get_css_value( $attr['linkFontSizeTablet'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['linkSpaceTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-expand-less-toggle-text' => array(
					'font-size'     => self::get_css_value( $attr['linkFontSizeTablet'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['linkSpaceTablet'], 'px' ),
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-block-expand.block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			return $css;
		}

		/**
		 * Get Defaults for expand block
		 *
		 * @return array
		 */
		public static function get_responsive_block_expand_default_attributes() {
			return array(
				'block_id'            => '',
				'blockTitle'          => 'Title for this block',
				'expandLessText'      => 'Some short text that can be expanded to show more details.',
				'expandMoreText'      => 'Some short text that can be expanded to show more details. Description for this block. Use this space for describing your block. Any text will do. Description for this block. You can use this space for describing your block.',
				'moreLabel'           => 'Show more',
				'lessLabel'           => 'Show less',
				'showTitle'           => true,
				'expandAlignment'     => '',
				'textColor'           => '',
				'linkColor'           => '',
				'titleColor'          => '',
				'titleSpace'          => 28,
				'titleSpaceMobile'    => 28,
				'titleSpaceTablet'    => 28,
				'textSpace'           => 20,
				'textSpaceMobile'     => 20,
				'textSpaceTablet'     => 20,
				'linkSpace'           => 18,
				'linkSpaceMobile'     => 18,
				'linkSpaceTablet'     => 18,
				'titleFontFamily'     => '',
				'textFontFamily'      => '',
				'linkFontFamily'      => '',
				'titleFontSize'       => 20,
				'titleFontSizeMobile' => 20,
				'titleFontSizeTablet' => 20,
				'titleFontWeight'     => 400,
				'titleLineHeight'     => 1,
				'textFontSize'        => 16,
				'textFontSizeMobile'  => 16,
				'textFontSizeTablet'  => 16,
				'textFontWeight'      => 400,
				'textLineHeight'      => 2,
				'linkFontSize'        => 16,
				'linkFontSizeMobile'  => 16,
				'linkFontSizeTablet'  => 16,
				'linkFontWeight'      => 400,
				'linkLineHeight'      => 1,
			);
		}

		/**
		 * Get Flipbox Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_flipbox_css( $attr, $id ) {
			$defaults = self::get_responsive_block_flipbox_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$boxShadowPositionCSS = $attr['boxShadowPosition'];

			if ( 'outset' === $attr['boxShadowPosition'] ) {
				$boxShadowPositionCSS = '';
			}

			$flipStyle     = 'rotateY(0deg)';
			$flipStyleBack = '';
			$flipClass     = '';

			if ( $attr['colorButtonSelected'] == 'back_selected' ) {
				$flipClass = 'backSelected';
				if ( $attr['flipStyleSelected'] == 'LTR' ) {
					$flipStyle     = 'rotateY(180deg)';
					$flipStyleBack = 'rotateY(180deg)';
				}
				if ( $attr['flipStyleSelected'] == 'RTL' ) {
					$flipStyle     = 'rotateY(-180deg)';
					$flipStyleBack = 'rotateY(-180deg)';
				}
				if ( $attr['flipStyleSelected'] == 'BTT' ) {
					$flipStyle     = 'rotateX(180deg)';
					$flipStyleBack = 'rotateX(180deg)';
				}
				if ( $attr['flipStyleSelected'] == 'TTB' ) {
					$flipStyle     = 'rotateX(-180deg)';
					$flipStyleBack = 'rotateX(-180deg)';
				}
			} else {
				$flipClass = 'frontSelected';
				if ( $attr['flipStyleSelected'] == 'LTR' ) {
					$flipStyle     = 'rotateY(0deg)';
					$flipStyleBack = 'rotateY(180deg)';
				}
				if ( $attr['flipStyleSelected'] == 'RTL' ) {
					$flipStyle     = 'rotateY(0deg)';
					$flipStyleBack = 'rotateY(-180deg)';
				}
				if ( $attr['flipStyleSelected'] == 'BTT' ) {
					$flipStyle     = 'rotateX(0deg)';
					$flipStyleBack = 'rotateX(180deg)';
				}
				if ( $attr['flipStyleSelected'] == 'TTB' ) {
					$flipStyle     = 'rotateX(0deg)';
					$flipStyleBack = 'rotateX(-180deg)';
				}
			};

			$transitionSpeedSec = $attr['transitionSpeed'] / 10;

			$flipboxTransition =
			  $attr['transitionSpeed'] < 10
				? 'transform 0.' . $attr['transitionSpeed'] . 's'
				: 'transform ' . $transitionSpeedSec . 's';

			$coloropacity     = $attr['colorOpacity'] / 100;
			$backcoloropacity = $attr['backColorOpacity'] / 100;
			$imageopacity     = $attr['imageOpacity'] / 100;
			$backimageopacity = $attr['backImageOpacity'] / 100;

			$backgroundFront = '';
			$backgroundBack  = '';

			if ( $attr['backgroundImage'] ) {
				$backgroundFront = 'linear-gradient(' .

				self::hexToRgb( $attr['frontBackgroundColor'], $coloropacity ) .

				',' .

				self::hexToRgb( $attr['frontBackgroundColor'], $coloropacity ) .

				'),url(' .

				$attr['backgroundImage'] .

				')';
			}
			if ( $attr['backBackgroundImage'] ) {
				$backgroundBack = 'linear-gradient(' .

				self::hexToRgb( $attr['backBackgroundColor'], $backcoloropacity ) .

				',' .

				self::hexToRgb( $attr['backBackgroundColor'], $backcoloropacity ) .

				'),url(' .

				$attr['backBackgroundImage'] .

				')';
			}

			$backgroundImageGradient = '';
			$btnColor                = $attr['ctaBackColor'];
			$btnOpacity              = $attr['buttonopacity'];
			if ( $attr['buttonbackgroundType'] == 'gradient' ) {
				$backgroundImageGradient = 'linear-gradient(' . $attr['buttongradientDirection'] . 'deg, ' . $attr['buttonbackgroundColor1'] . ' ' . $attr['buttoncolorLocation1'] . '%, ' . $attr['buttonbackgroundColor2'] . ' ' . $attr['buttoncolorLocation2'] . '%)';
			} elseif ( $attr['buttonbackgroundType'] == 'color' ) {
				$btnColor   = $attr['ctaBackColor'];
				$btnOpacity = $attr['buttonopacity'];
			};

			$backgroundHoverImageGradient = '';
			$btnHColor                    = $attr['ctaHoverBackColor'];
			$btnHOpacity                  = $attr['buttonHopacity'];
			if ( $attr['buttonHbackgroundType'] == 'gradient' ) {
				$backgroundHoverImageGradient = 'linear-gradient(' . $attr['buttonHgradientDirection'] . 'deg, ' . $attr['buttonHbackgroundColor1'] . ' ' . $attr['buttonHcolorLocation1'] . '%, ' . $attr['buttonHbackgroundColor2'] . ' ' . $attr['buttonHcolorLocation2'] . '%)';
			} elseif ( $attr['buttonHbackgroundType'] == 'color' ) {
				$btnHColor   = $attr['ctaHoverBackColor'];
				$btnHOpacity = $attr['buttonHopacity'];
			}

			$selectors = array(
				' '               => array(
					'margin-bottom' => self::get_css_value( $attr['bottomMargin'], 'px' ),
					'margin-top'    => self::get_css_value( $attr['topMargin'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-flip-box' => array(
					'height' => self::get_css_value( $attr['height'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-flip-box .flip-box-inner' => array(
					'transition' => $flipboxTransition,
				),
				' .wp-block-responsive-block-editor-addons-flip-box .flip-box-front' => array(
					'background-image'      => $backgroundFront,
					'background-position'   => $attr['backgroundPosition'],
					'background-attachment' => $attr['backgroundAttachment'],
					'background-repeat'     => $attr['backgroundRepeat'],
					'background-size'       => $attr['backgroundSize'],
					'background-color'      => self::hexToRgb( $attr['frontBackgroundColor'], $coloropacity ),
					'color'                 => $attr['frontTextColor'],
					'border-color'          => $attr['blockBorderColor'],
					'border-style'          => $attr['blockBorderStyle'],
					'border-width'          => self::get_css_value( $attr['blockBorderWidth'], 'px' ),
					'border-radius'         => self::get_css_value( $attr['blockBorderRadius'], 'px' ),
					'box-shadow'            =>
					self::get_css_value( $attr['boxShadowHOffset'], 'px' ) .
					' ' .
					self::get_css_value( $attr['boxShadowVOffset'], 'px' ) .
					' ' .
					self::get_css_value( $attr['boxShadowBlur'], 'px' ) .
					' ' .
					self::get_css_value( $attr['boxShadowSpread'], 'px' ) .
					' ' .
					$attr['boxShadowColor'] .
					' ' .
					$boxShadowPositionCSS,
					'height'                => self::get_css_value( $attr['height'], 'px' ),
					'padding-top'           => self::get_css_value( $attr['frontTopPadding'], 'px' ),
					'padding-bottom'        => self::get_css_value( $attr['frontBottomPadding'], 'px' ),
					'padding-left'          => self::get_css_value( $attr['frontLeftPadding'], 'px' ),
					'padding-right'         => self::get_css_value( $attr['frontRightPadding'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-flip-box__title' => array(
					'color' => $attr['frontTextColor'],
				),
				' .wp-block-responsive-block-editor-addons-flip-box__subtitle' => array(
					'color' => $attr['frontTextColor'],
				),
				' .flip-box-back' => array(
					'background-image'      => $backgroundBack,
					'background-position'   => $attr['backBackgroundPosition'],
					'background-attachment' => $attr['backBackgroundAttachment'],
					'background-repeat'     => $attr['backBackgroundRepeat'],
					'background-size'       => $attr['backBackgroundSize'],
					'background-color'      => self::hexToRgb( $attr['backBackgroundColor'], $backcoloropacity ),
					'color'                 => $attr['backTextColor'],
					'transform'             => $flipStyleBack,
					'border-color'          => $attr['blockBorderColor'],
					'border-style'          => $attr['blockBorderStyle'],
					'border-width'          => self::get_css_value( $attr['blockBorderWidth'], 'px' ),
					'border-radius'         => self::get_css_value( $attr['blockBorderRadius'], 'px' ),
					'box-shadow'            =>
					  self::get_css_value( $attr['boxShadowHOffset'], 'px' ) .
					  ' ' .
					  self::get_css_value( $attr['boxShadowVOffset'], 'px' ) .
					  ' ' .
					  self::get_css_value( $attr['boxShadowBlur'], 'px' ) .
					  ' ' .
					  self::get_css_value( $attr['boxShadowSpread'], 'px' ) .
					  ' ' .
					  $attr['boxShadowColor'] .
					  ' ' .
					  $boxShadowPositionCSS,
					'height'                => self::get_css_value( $attr['height'], 'px' ),
					'padding-top'           => self::get_css_value( $attr['backTopPadding'], 'px' ),
					'padding-bottom'        => self::get_css_value( $attr['backBottomPadding'], 'px' ),
					'padding-left'          => self::get_css_value( $attr['backLeftPadding'], 'px' ),
					'padding-right'         => self::get_css_value( $attr['backRightPadding'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-flip-box__backtitle' => array(
					'color' => $attr['backTextColor'],
				),
				' .wp-block-responsive-block-editor-addons-flip-box__backsubtitle' => array(
					'color' => $attr['backTextColor'],
				),
				' .wp-block-responsive-block-editor-addons-flip-box-dashicon-fronticon-wrap' => array(
					'font-size' => self::get_css_value( $attr['iconSize'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-flip-box-dashicon-fronticon-wrap svg' => array(
					'font-size' => self::get_css_value( $attr['iconSize'], 'px' ),
					'fill'      => $attr['iconColor'],
					'height'    => self::get_css_value( $attr['iconSize'], 'px' ),
					'width'     => self::get_css_value( $attr['iconSize'], 'px' ),
				),
				' .dashicons'     => array(
					'width'  => 'auto !important',
					'height' => 'auto !important',
				),
				' .wp-block-responsive-block-editor-addons-flip-box-dashicon-backicon-wrap' => array(
					'font-size' => self::get_css_value( $attr['backIconSize'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-flip-box-dashicon-backicon-wrap svg' => array(
					'font-size' => self::get_css_value( $attr['backIconSize'], 'px' ),
					'fill'      => $attr['backIconColor'],
					'height'    => self::get_css_value( $attr['backIconSize'], 'px' ),
					'width'     => self::get_css_value( $attr['backIconSize'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-flipbox-item__button.wp-block-button__link' => array(
					'border-style'     => $attr['ctaBorderStyle'],
					'border-width'     => self::get_css_value( $attr['ctaBorderWidth'], 'px' ),
					'border-radius'    => self::get_css_value( $attr['ctaBorderRadius'], 'px' ),
					'border-color'     => $attr['ctaBorderColor'],
					'padding-left'     => self::get_css_value( $attr['ctaHpadding'], 'px' ),
					'padding-right'    => self::get_css_value( $attr['ctaHpadding'], 'px' ),
					'padding-top'      => self::get_css_value( $attr['ctaVpadding'], 'px' ),
					'padding-bottom'   => self::get_css_value( $attr['ctaVpadding'], 'px' ),
					'background-image' => $backgroundImageGradient,
					'background-color' => $btnColor . '!important',
					'opacity'          => $btnOpacity / 100,
					'color'            => $attr['ctaColor'] . '!important',
				),
				' .wp-block-responsive-block-editor-addons-flipbox-item__button.wp-block-button__link:hover' => array(
					'background-image' => $backgroundHoverImageGradient,
					'border-color'     => $attr['ctaHoverBorderColor'],
					'background-color' => $btnHColor . '!important',
					'opacity'          => $btnHOpacity / 100,
					'color'            => $attr['ctaHoverColor'] . '!important',
				),
				' .has-medium-gutter.has-2-columns > *:not(.block-editor-inner-blocks)' => array(
					'max-width' => 'calc(100% / 2 - ' . $attr['flipBoxGutterGap'] . 'px)',
				),
				' .has-medium-gutter.has-3-columns > *:not(.block-editor-inner-blocks)' => array(
					'max-width' => 'calc(100% / 3 - ' . $attr['flipBoxGutterGap'] . 'px)',
				),
				' .has-medium-gutter.has-4-columns > *:not(.block-editor-inner-blocks)' => array(
					'max-width' => 'calc(100% / 4 - ' . $attr['flipBoxGutterGap'] . 'px)',
				),

			);
			$mobile_selectors = array(
				' .wp-block-responsive-block-editor-addons-flipbox-item__button.wp-block-button__link' => array(
					'padding-left'   => self::get_css_value( $attr['ctaHpaddingMobile'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['ctaHpaddingMobile'], 'px' ),
					'padding-top'    => self::get_css_value( $attr['ctaVpaddingMobile'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['ctaVpaddingMobile'], 'px' ),
				),
				' '               => array(
					'margin-bottom' => self::get_css_value( $attr['bottomMarginMobile'], 'px' ),
					'margin-top'    => self::get_css_value( $attr['topMarginMobile'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-flip-box .flip-box-front' => array(
					'padding-top'    => self::get_css_value( $attr['frontTopPaddingMobile'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['frontBottomPaddingMobile'], 'px' ),
					'padding-left'   => self::get_css_value( $attr['frontLeftPaddingMobile'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['frontRightPaddingMobile'], 'px' ),
				),
				' .flip-box-back' => array(
					'padding-top'    => self::get_css_value( $attr['backTopPaddingMobile'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['backBottomPaddingMobile'], 'px' ),
					'padding-left'   => self::get_css_value( $attr['backLeftPaddingMobile'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['backRightPaddingMobile'], 'px' ),
				),
				' .has-medium-gutter.responsive-flipbox-columns__stack-mobile > *:not(.block-editor-inner-blocks)' => array(
					'min-width' => '100%',
					'max-width' => '100%',
				),
			);

			$tablet_selectors = array(
				' .has-medium-gutter.responsive-flipbox-columns__stack-tablet > *:not(.block-editor-inner-blocks)' => array(
					'min-width' => '100%',
					'max-width' => '100%',
				),
				' .wp-block-responsive-block-editor-addons-flipbox-item__button.wp-block-button__link' => array(
					'padding-left'   => self::get_css_value( $attr['ctaHpaddingTablet'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['ctaHpaddingTablet'], 'px' ),
					'padding-top'    => self::get_css_value( $attr['ctaVpaddingTablet'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['ctaVpaddingTablet'], 'px' ),
				),
				' '               => array(
					'margin-bottom' => self::get_css_value( $attr['bottomMarginTablet'], 'px' ),
					'margin-top'    => self::get_css_value( $attr['topMarginTablet'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-flip-box .flip-box-front' => array(
					'padding-top'    => self::get_css_value( $attr['frontTopPaddingTablet'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['frontBottomPaddingTablet'], 'px' ),
					'padding-left'   => self::get_css_value( $attr['frontLeftPaddingTablet'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['frontRightPaddingTablet'], 'px' ),
				),
				' .flip-box-back' => array(
					'padding-top'    => self::get_css_value( $attr['backTopPaddingTablet'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['backBottomPaddingTablet'], 'px' ),
					'padding-left'   => self::get_css_value( $attr['backLeftPaddingTablet'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['backRightPaddingTablet'], 'px' ),
				),
				' .has-medium-gutter.responsive-flipbox-columns__stack-tablet > *:not(.block-editor-inner-blocks)' => array(
					'min-width' => '100%',
					'max-width' => '100%',
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-block-flipbox.block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			return $css;
		}

		/**
		 * Get Defaults for flipbox block
		 *
		 * @return array
		 */
		public static function get_responsive_block_flipbox_default_attributes() {
			return array(
				'block_id'                 => '',
				'flipboxArray'             => '',
				'count'                    => '',
				'height'                   => 420,
				'iconSize'                 => 50,
				'backIconSize'             => 50,
				'transitionSpeed'          => 8,
				'backgroundImage'          => '',
				'backgroundPosition'       => 'center center',
				'backgroundAttachment'     => 'scroll',
				'backgroundRepeat'         => 'no-repeat',
				'backgroundSize'           => 'cover',
				'backBackgroundImage'      => '',
				'backBackgroundPosition'   => 'center center',
				'backBackgroundAttachment' => 'scroll',
				'backBackgroundRepeat'     => 'no-repeat',
				'backBackgroundSize'       => 'cover',
				'colorOpacity'             => 30,
				'backColorOpacity'         => 30,
				'imageOpacity'             => 30,
				'backImageOpacity'         => 30,
				'buttonbackgroundType'     => 'none',
				'buttoncolorLocation1'     => 0,
				'buttoncolorLocation2'     => 100,
				'buttongradientDirection'  => 90,
				'buttonbackgroundColor1'   => '#333',
				'buttonbackgroundColor2'   => '',
				'ctaHoverColor'            => '#fff',
				'ctaHoverBackColor'        => '#333',
				'buttonopacity'            => 100,
				'buttonHopacity'           => 100,
				'buttonHbackgroundType'    => 'none',
				'buttonHcolorLocation1'    => 0,
				'buttonHcolorLocation2'    => 100,
				'buttonHgradientDirection' => 90,
				'buttonHbackgroundColor1'  => '#333',
				'buttonHbackgroundColor2'  => '',
				'buttonBorderRadius'       => 0,
				'ctaHpadding'              => 20,
				'ctaVpadding'              => 10,
				'iconSelected'             => 'editor-textcolor',
				'flipStyleSelected'        => 'LTR',
				'align'                    => 'wide',
				'gutter'                   => 'medium',
				'contentAlign'             => 'center',
				'frontTextColor'           => '',
				'frontBackgroundColor'     => '#fff',
				'backTextColor'            => '',
				'backBackgroundColor'      => '#fff',
				'ctaBackColor'             => '#333',
				'ctaColor'                 => '',
				'iconColor'                => '',
				'backIconColor'            => '',
				'blockBorderStyle'         => 'none',
				'blockBorderWidth'         => 2,
				'blockBorderRadius'        => '',
				'blockBorderColor'         => '',
				'boxShadowColor'           => '',
				'boxShadowHOffset'         => 0,
				'boxShadowVOffset'         => 0,
				'boxShadowBlur'            => 0,
				'boxShadowSpread'          => 0,
				'boxShadowPosition'        => 'outset',
				'showFrontIcon'            => true,
				'showFrontTitle'           => true,
				'showFrontSubtitle'        => true,
				'showBackIcon'             => true,
				'showBackTitle'            => true,
				'showBackSubtitle'         => true,
				'showBackButton'           => true,
				'colorButtonSelected'      => '',
				'topMargin'                => 0,
				'bottomMargin'             => 0,
				'frontTopPadding'          => 0,
				'frontBottomPadding'       => 0,
				'frontLeftPadding'         => 0,
				'frontRightPadding'        => 0,
				'backTopPadding'           => 0,
				'backBottomPadding'        => 0,
				'backLeftPadding'          => 0,
				'backRightPadding'         => 0,
				'topMarginMobile'          => 0,
				'bottomMarginMobile'       => 0,
				'frontTopPaddingMobile'    => 0,
				'frontBottomPaddingMobile' => 0,
				'frontLeftPaddingMobile'   => 0,
				'frontRightPaddingMobile'  => 0,
				'backTopPaddingMobile'     => 0,
				'backBottomPaddingMobile'  => 0,
				'backLeftPaddingMobile'    => 0,
				'backRightPaddingMobile'   => 0,
				'topMarginTablet'          => 0,
				'bottomMarginTablet'       => 0,
				'frontTopPaddingTablet'    => 0,
				'frontBottomPaddingTablet' => 0,
				'frontLeftPaddingTablet'   => 0,
				'frontRightPaddingTablet'  => 0,
				'backTopPaddingTablet'     => 0,
				'backBottomPaddingTablet'  => 0,
				'backLeftPaddingTablet'    => 0,
				'backRightPaddingTablet'   => 0,
				'ctaBorderWidth'           => 0,
				'ctaBorderStyle'           => '',
				'ctaBorderRadius'          => 0,
				'ctaBorderColor'           => '#0066cc',
				'ctaHoverBorderColor'      => '#0066cc',
				'ctaVpaddingTablet'        => 10,
				'ctaVpaddingMobile'        => 10,
				'ctaHpaddingTablet'        => 20,
				'ctaHpaddingMobile'        => 20,
				'topPadding'               => 0,
				'bottomPadding'            => 0,
				'leftPadding'              => 0,
				'rightPadding'             => 0,
				'backtopPadding'           => 0,
				'backbottomPadding'        => 0,
				'backleftPadding'          => 0,
				'backrightPadding'         => 0,
				'flipBoxGutterGap'         => 10,
				'stack'                    => 'mobile',
			);
		}

		/**
		 * Get Gallery Masonry Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_gallery_masonry_css( $attr, $id ) {
			return array();
		}

		/**
		 * Get Defaults for gallery masonry block
		 *
		 * @return array
		 */
		public static function get_responsive_block_gallery_masonry_block_default_attributes() {
			return array();
		}

		/**
		 * Get Googlemap Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_googlemap_css( $attr, $id ) {
			$defaults = self::get_responsive_block_googlemap_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$selectors        = array(
				' iframe' => array(
					'width'      => '100%',
					'min-height' => $attr['height'] ? self::get_css_value( $attr['height'], 'px' ) : 400 + 'px',
				),
			);
			$mobile_selectors = array();

			$tablet_selectors = array();

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-block-googlemap.block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );

			return $css;
		}

		/**
		 * Get Defaults for googlemap block
		 *
		 * @return array
		 */
		public static function get_responsive_block_googlemap_default_attributes() {
			return array(
				'address' => '',
				'apiKey'  => '',
				'zoom'    => 12,
				'height'  => 400,
				'pinned'  => false,
			);
		}

		/**
		 * Get Icon List Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_icon_list_css( $attr, $id ) {
			$defaults = self::get_responsive_block_icon_list_block_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$editor_gap = 0;
			if ( '' !== $attr['gap'] ) {
				$editor_gap = $attr['gap'];
			}

			$alignment = 'center';
			if ( $attr['align'] == 'left' ) {
				$alignment = 'flex-start';
			}
			if ( $attr['align'] == 'right' ) {
				$alignment = 'flex-end';
			}

			$selectors        = array(
				' .responsive-block-editor-addons-icon-list__source-icon svg' => array(
					'width'  => self::get_css_value( $attr['size'], $attr['fontSizeType'] ),
					'height' => self::get_css_value( $attr['size'], $attr['fontSizeType'] ),
				),
				'.responsive-block-editor-addons-icon-list__layout-horizontal .wp-block-responsive-block-editor-addons-icons-list-child' => array(
					'margin-left'  => self::get_css_value( $editor_gap / 2, 'px' ),
					'margin-right' => self::get_css_value( $editor_gap / 2, 'px' ),
				),
				'.responsive-block-editor-addons-icon-list__layout-horizontal .wp-block-responsive-block-editor-addons-icons-list-child:first-child' => array(
					'margin-left' => '0',
				),
				'.responsive-block-editor-addons-icon-list__layout-horizontal .wp-block-responsive-block-editor-addons-icons-list-child:nth-last-child(2)' => array(
					'margin-right' => '0',
				),
				'.responsive-block-editor-addons-icon-list__layout-vertical .responsive-block-editor-addons-icon-list__content-wrap' => array(
					'margin-bottom' => self::get_css_value( $editor_gap, 'px' ),
				),
				'.responsive-block-editor-addons-icon-list__layout-vertical .wp-block-responsive-block-editor-addons-icons-list-child:last-child .responsive-block-editor-addons-icon-list__content-wrap' => array(
					'margin-bottom' => '0px',
				),
				' .responsive-block-editor-addons-icon-list__source-wrap' => array(
					'padding'       => self::get_css_value( $attr['bgSize'], 'px' ),
					'border-radius' => self::get_css_value( $attr['borderRadius'], 'px' ),
					'border-width'  => self::get_css_value( $attr['border'], 'px' ),
					'margin-right'  => $attr['hideLabel'] ? '0px' : self::get_css_value( $attr['inner_gap'], 'px' ),
				),
				' .responsive-block-editor-addons-icon-list__source-icon' => array(
					'width'     => self::get_css_value( $attr['size'], $attr['fontSizeType'] ),
					'height'    => self::get_css_value( $attr['size'], $attr['fontSizeType'] ),
					'font-size' => self::get_css_value( $attr['size'], $attr['fontSizeType'] ),
				),
				' .responsive-block-editor-addons-icon-list__source-image' => array(
					'width'  => self::get_css_value( $attr['size'], $attr['fontSizeType'] ),
					'height' => self::get_css_value( $attr['size'], $attr['fontSizeType'] ),
				),
				' .responsive-block-editor-addons-icon-list__label-wrap' => array(
					'text-align' => $attr['align'],
				),
				' .responsive-block-editor-addons-icon-list__wrap' => array(
					'align-items'     => $alignment,
					'justify-content' => $alignment,
				),
				'.responsive-block-editor-addons-icon-list__layout-horizontal .block-editor-block-list__layout' => array(
					'justify-content'  => $alignment,
					'-webkit-box-pack' => $alignment,
					'-ms-flex-pack'    => $alignment,
				),
				' .responsive-block-editor-addons-icon-list__label' => array(
					'font-family' => $attr['labelFontFamily'],
					'font-weight' => $attr['labelFontWeight'],
					'line-height' => $attr['labelLineHeight'],
					'font-size'   => self::get_css_value( $attr['labelFontSize'], 'px' ),
				),
			);
			$mobile_selectors = array(
				' .responsive-block-editor-addons-icon-list__label' => array(
					'font-size' => self::get_css_value( $attr['labelFontSizeMobile'], 'px' ),
				),
			);

			$tablet_selectors = array(
				' .responsive-block-editor-addons-icon-list__label' => array(
					'font-size' => self::get_css_value( $attr['labelFontSizeTablet'], 'px' ),
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-icon-list__outer-wrap.responsive-block-editor-addons-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			return $css;
		}

		/**
		 * Get Defaults for icon list block
		 *
		 * @return array
		 */
		public static function get_responsive_block_icon_list_block_default_attributes() {

			return array(
				'align'               => 'left',
				'icon_count'          => 1,
				'icons'               => array(),
				'gap'                 => 10,
				'inner_gap'           => 15,
				'iconPosition'        => 'middle',
				'size'                => 16,
				'bgSize'              => 0,
				'border'              => 0,
				'borderRadius'        => 0,
				'hideLabel'           => false,
				'labelFontFamily'     => '',
				'labelFontWeight'     => '',
				'labelFontSize'       => '',
				'labelFontSizeTablet' => '',
				'labelFontSizeMobile' => '',
				'labelLineHeight'     => 1,
				'icon_layout'         => 'vertical',
				'fontSizeType'        => 'px',
				'block_id'            => 1,
			);
		}

		/**
		 * Get Icon List Child Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_icon_list_child_css( $attr, $id ) {

			$defaults = self::get_responsive_block_icon_list_child_block_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$selectors = array(
				' .responsive-block-editor-addons-icon-list__content-wrap .responsive-block-editor-addons-icon-list__source-icon' => array(
					'color' => $attr['icon_color'],
				),
				' .responsive-block-editor-addons-icon-list__content-wrap .responsive-block-editor-addons-icon-list__source-icon:hover' => array(
					'color' => $attr['icon_hover_color'],
				),
				' .responsive-block-editor-addons-icon-list__content-wrap .responsive-block-editor-addons-icon-list__source-wrap' => array(
					'background-color' => $attr['icon_bg_color'],
					'border-color'     => $attr['icon_border_color'],
				),
				':hover .responsive-block-editor-addons-icon-list__content-wrap .responsive-block-editor-addons-icon-list__source-wrap' => array(
					'background-color' => $attr['icon_bg_hover_color'],
					'border-color'     => $attr['icon_border_hover_color'],
				),
				' .responsive-block-editor-addons-icon-list__content-wrap .responsive-block-editor-addons-icon-list__source-icon svg' => array(
					'fill' => $attr['icon_color'],
				),
				':hover .responsive-block-editor-addons-icon-list__content-wrap .responsive-block-editor-addons-icon-list__source-icon svg' => array(
					'fill' => $attr['icon_hover_color'],
				),
				' .responsive-block-editor-addons-icon-list__content-wrap .responsive-block-editor-addons-icon-list__label' => array(
					'color' => $attr['label_color'],
				),
				':hover .responsive-block-editor-addons-icon-list__content-wrap .responsive-block-editor-addons-icon-list__label' => array(
					'color' => $attr['label_hover_color'],
				),

			);
			$mobile_selectors = array();

			$tablet_selectors = array();

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-icon-list-repeater.responsive-block-editor-addons-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			return $css;
		}

		/**
		 * Get Defaults for icon list child block
		 *
		 * @return array
		 */
		public static function get_responsive_block_icon_list_child_block_default_attributes() {
			return array(
				'label'                   => '#Label',
				'image_icon'              => 'icon',
				'icon'                    => 'fab fa-arrow-circle-right',
				'hideLabel'               => false,
				'image'                   => '',
				'icon_color'              => '#3a3a3a',
				'label_color'             => '',
				'icon_hover_color'        => '',
				'label_hover_color'       => '',
				'icon_bg_color'           => '',
				'icon_bg_hover_color'     => '',
				'icon_border_color'       => '',
				'icon_border_hover_color' => '',
				'link'                    => '#',
				'target'                  => false,
				'disableLink'             => true,
				'block_id'                => 1,
				'source_type'             => 'icon',
			);
		}

		/**
		 * Get Image Box Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_image_boxes_css( $attr, $id ) {
			$defaults = self::get_responsive_block_image_boxes_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$imgopacity      = $attr['opacity'] / 100;
			$hoverImgopacity = $attr['hoverOpacity'] / 100;

			$tempsecondaryBackgroundColor      = $attr['bgGradient']
			? $attr['secondaryBackgroundColor']
			: $attr['itemBackgroundColor'];
			$tempHoverSecondaryBackgroundColor = $attr['hoverBgGradient']
			? $attr['hoverSecondaryBackgroundColor']
			: $attr['itemHoverBackgroundColor'];

			$hoverGradient =
			'linear-gradient(' .
			$attr['hoverGradientDegree'] .
			'deg,' .
			self::hexToRgb( $attr['itemHoverBackgroundColor'], $hoverImgopacity ) .
			',' .
			self::hexToRgb(
				$tempHoverSecondaryBackgroundColor,
				$hoverImgopacity
			) .
			')';

			$boxShadowPositionCSS = $attr['boxShadowPosition'];

			if ( 'outset' === $attr['boxShadowPosition'] ) {
				$boxShadowPositionCSS = '';
			}

			$backgroundImageFirst  = '';
			$backgroundImageSecond = '';
			$backgroundImageThird  = '';
			$backgroundImageFourth = '';

			$backgroundImageFirst = 'linear-gradient(' . $attr['gradientDegree'] . 'deg, ' .

			self::hexToRgb( $attr['itemBackgroundColor'], $imgopacity ) .

			',' .

			self::hexToRgb( $tempsecondaryBackgroundColor, $imgopacity ) .

			'),url(' .

			$attr['backgroundImageOne'] .

			')';

			$backgroundImageSecond = 'linear-gradient(' . $attr['gradientDegree'] . 'deg, ' .

			self::hexToRgb( $attr['itemBackgroundColor'], $imgopacity ) .

			',' .

			self::hexToRgb( $tempsecondaryBackgroundColor, $imgopacity ) .

			'),url(' .

			$attr['backgroundImageTwo'] .

			')';

			$backgroundImageThird = 'linear-gradient(' . $attr['gradientDegree'] . 'deg, ' .

			self::hexToRgb( $attr['itemBackgroundColor'], $imgopacity ) .

			',' .

			self::hexToRgb( $tempsecondaryBackgroundColor, $imgopacity ) .

			'),url(' .

			$attr['backgroundImageThree'] .

			')';

			$backgroundImageFourth = 'linear-gradient(' . $attr['gradientDegree'] . 'deg, ' .

			self::hexToRgb( $attr['itemBackgroundColor'], $imgopacity ) .

			',' .

			self::hexToRgb( $tempsecondaryBackgroundColor, $imgopacity ) .

			'),url(' .

			$attr['backgroundImageFour'] .

			')';

			$gutterMarginIb = '';
			if ( $attr['count'] > 1 ) {
				if ( $attr['gutter'] === 'small' ) {
					$gutterMarginIb = '20px';
				} elseif ( $attr['gutter'] === 'medium' ) {
					$gutterMarginIb = '30px';
				} elseif ( $attr['gutter'] === 'large' ) {
					$gutterMarginIb = '40px';
				} elseif ( $attr['gutter'] === 'huge' ) {
					$gutterMarginIb = '50px';
				} else {
					$gutterMarginIb = '';
				}
			}

			$selectors = array(
				' '                => array(
					'text-align'          => $attr['contentAlign'],
					'border-color'        => $attr['blockBorderColor'],
					'border-style'        => $attr['blockBorderStyle'],
					'border-width'        => self::get_css_value( $attr['blockBorderWidth'], 'px' ),
					'border-radius'       => self::get_css_value( $attr['blockBorderRadius'], 'px' ),
					'justify-content'     => $attr['verticalAlignment'] . '!important',
					'background-color'    => self::hexToRgb( $attr['itemBackgroundColor'], $imgopacity ),
					'background-size'     => $attr['backgroundSize'],
					'background-repeat'   => $attr['backgroundRepeat'],
					'background-position' => $attr['backgroundPosition'],
					'padding-left'        => self::get_css_value( $attr['boxPaddingLeft'], 'px' ),
					'padding-right'       => self::get_css_value( $attr['boxPaddingRight'], 'px' ),
					'padding-bottom'      => self::get_css_value( $attr['boxPaddingBottom'], 'px' ),
					'padding-top'         => self::get_css_value( $attr['boxPaddingTop'], 'px' ),
					'height'              => self::get_css_value( $attr['boxHeight'], 'px' ),
					'box-shadow'          =>
					self::get_css_value( $attr['boxShadowHOffset'], 'px' ) .
						' ' .
						self::get_css_value( $attr['boxShadowVOffset'], 'px' ) .
						' ' .
						self::get_css_value( $attr['boxShadowBlur'], 'px' ) .
						' ' .
						self::get_css_value( $attr['boxShadowSpread'], 'px' ) .
						' ' .
						$attr['boxShadowColor'] .
						' ' .
						$boxShadowPositionCSS,
				),

				':hover .responsive-block-editor-addons-add-image' => array(
					'background-image' => $hoverGradient,
					'border-radius'    => self::get_css_value( $attr['blockBorderRadius'], 'px' ),
				),

				':hover'           => array(
					'transform' => 'scale(' . $attr['imageHoverEffect'] . ')',
				),

				' .responsive-block-editor-addons-imagebox-image' => array(
					'width'     => $attr['imageSize'],
					'max-width' => 100 . '%',
				),
				' .wp-block-responsive-block-editor-addons-image-boxes-block-item__title' => array(
					'font-family'   => $attr['titleFontFamily'],
					'font-weight'   => $attr['titleFontWeight'],
					'font-size'     => self::get_css_value( $attr['titleFontSize'], 'px' ),
					'line-height'   => $attr['titleLineHeight'],
					'color'         => $attr['titleColor'],
					'margin-top'    => self::get_css_value( $attr['titleSpacing'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['titleSpacing'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-image-boxes-block-item__description' => array(
					'font-family'   => $attr['descriptionFontFamily'],
					'font-size'     => self::get_css_value( $attr['descriptionFontSize'], 'px' ),
					'font-weight'   => $attr['descriptionFontWeight'],
					'line-height'   => $attr['descriptionLineHeight'],
					'color'         => $attr['descriptionColor'],
					'margin-top'    => self::get_css_value( $attr['descriptionSpacing'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['descriptionSpacing'], 'px' ),
				),
				' .imagebox-arrow' => array(
					'color'     => $attr['arrowColor'],
					'font-size' => self::get_css_value( $attr['arrowSize'], 'px' ),
				),
				'.responsive-block-editor-addons-block-image-boxes-0' => array(
					'background-image' => $backgroundImageFirst,
				),
				'.responsive-block-editor-addons-block-image-boxes-1' => array(
					'background-image' => $backgroundImageSecond,
				),
				'.responsive-block-editor-addons-block-image-boxes-2' => array(
					'background-image' => $backgroundImageThird,
				),
				'.responsive-block-editor-addons-block-image-boxes-3' => array(
					'background-image' => $backgroundImageFourth,
				),
			);
			$mobile_selectors = array(
				' .wp-block-responsive-block-editor-addons-image-boxes-block-item__title' => array(
					'font-size'     => self::get_css_value( $attr['titleFontSizeMobile'], 'px' ),
					'margin-top'    => self::get_css_value( $attr['titleSpacingMobile'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['titleSpacingMobile'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-image-boxes-block-item__description' => array(
					'margin-top'    => self::get_css_value( $attr['descriptionSpacingMobile'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['descriptionSpacingMobile'], 'px' ),
					'font-size'     => self::get_css_value( $attr['descriptionFontSizeMobile'], 'px' ),
				),
			);

			$tablet_selectors = array(
				' .wp-block-responsive-block-editor-addons-image-boxes-block-item__title' => array(
					'font-size'     => self::get_css_value( $attr['titleFontSizeTablet'], 'px' ),
					'margin-top'    => self::get_css_value( $attr['titleSpacingTablet'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['titleSpacingTablet'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-image-boxes-block-item__title' => array(
					'font-size'     => self::get_css_value( $attr['titleFontSize'], 'px' ) . '!important',
					'margin-top'    => self::get_css_value( $attr['titleSpacingTablet'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['titleSpacingTablet'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-image-boxes-block-item__description' => array(
					'margin-top'    => self::get_css_value( $attr['descriptionSpacingTablet'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['descriptionSpacingTablet'], 'px' ),
					'font-size'     => self::get_css_value( $attr['descriptionFontSizeTablet'], 'px' ),
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id             = '.responsive-block-editor-addons-block-image-boxes.block-' . $id;
			$css            = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			$css['mobile'] .= '
                .wp-block-responsive-block-editor-addons-image-boxes-block__inner a {
                    margin-bottom: ' . $gutterMarginIb . '!important;
                }
            ';

			return $css;
		}

		/**
		 * Get Defaults for image box block
		 *
		 * @return array
		 */
		public static function get_responsive_block_image_boxes_default_attributes() {
			return array(
				'block_id'                      => '',
				'imageboxesBlock'               => '',
				'counterId'                     => 1,
				'count'                         => '',
				'titleHeadingTag'               => 'h3',
				'gutter'                        => 'medium',
				'contentAlign'                  => 'center',
				'textColor'                     => '',
				'itemBackgroundColor'           => '#fff',
				'hoverTextColor'                => '',
				'verticalAlignment'             => 'center',
				'itemHoverBackgroundColor'      => '#fff',
				'hoverBorderColor'              => '',
				'titleSpacing'                  => '',
				'titleSpacingTablet'            => '',
				'titleSpacingMobile'            => '',
				'descriptionSpacing'            => '',
				'descriptionSpacingTablet'      => '',
				'descriptionSpacingMobile'      => '',
				'boxRadius'                     => '',
				'blockBorderRadius'             => '',
				'blockBorderStyle'              => 'none',
				'blockBorderWidth'              => 2,
				'blockBorderColor'              => '',
				'boxPaddingLeft'                => 15,
				'boxPaddingRight'               => 15,
				'boxPaddingBottom'              => 15,
				'boxPaddingTop'                 => 15,
				'boxHeight'                     => '',
				'hasArrow'                      => '',
				'hasArrow'                      => '',
				'arrowColor'                    => '',
				'arrowSize'                     => '',
				'boxShadowColor'                => '#fff',
				'boxShadowHOffset'              => 9,
				'boxShadowVOffset'              => 9,
				'boxShadowBlur'                 => 9,
				'opacity'                       => 70,
				'hoverOpacity'                  => 70,
				'boxShadowSpread'               => 9,
				'boxShadowPosition'             => 'outset',
				'backgroundPosition'            => '',
				'backgroundSize'                => '',
				'backgroundRepeat'              => '',
				'imageHoverEffect'              => '',
				'bggradient'                    => '',
				'secondaryBackgroundColor'      => '',
				'hoverSecondaryBackgroundColor' => '',
				'gradientDegree'                => 180,
				'bgGradient'                    => false,
				'hoverGradientDegree'           => 180,
				'hoverBgGradient'               => false,
				'titleFontFamily'               => '',
				'descriptionFontFamily'         => '',
				'titleFontSize'                 => '',
				'titleFontSizeMobile'           => '',
				'titleFontSizeTablet'           => '',
				'titleFontWeight'               => '',
				'imageSize'                     => 'full',
				'titleLineHeight'               => '',
				'titleColor'                    => '',
				'descriptionFontSize'           => '',
				'descriptionFontSizeMobile'     => '',
				'descriptionFontSizeTablet'     => '',
				'descriptionFontWeight'         => '',
				'descriptionLineHeight'         => '',
				'descriptionColor'              => '',
				'backgroundImageOne'            => '',
				'backgroundImageTwo'            => '',
				'backgroundImageThree'          => '',
				'backgroundImageFour'           => '',
			);
		}

		/**
		 * Get Image Slider Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_image_slider_css( $attr, $id ) {
			$defaults = self::get_responsive_block_image_slider_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$imgopacity = $attr['iconBackgroundOpacity'] / 100;

			$selectors = array(
				' .flickity-button .flickity-button-icon' => array(
					'fill' => $attr['iconColor'],
				),

				' .flickity-button'                       => array(
					'background-color' => self::hexToRgb( $attr['iconBackgroundColor'] ? $attr['iconBackgroundColor'] : '#ffffff', $imgopacity ),
					'border-radius'    => $attr['iconBackgroundRadius'] . '%',
				),

				' .responsive-block-editor-addons-gallery--item figure' => array(
					'height' => ( $attr['height'] - ( $attr['borderWidth'] ? $attr['borderWidth'] * 2 : 0 ) ) . 'px',
				),

				' .has-carousel-lrg .responsive-block-editor-addons-gallery--item' => array(
					'width' => self::get_css_value( $attr['width'], 'px' ),
				),

				' .responsive-block-editor-addons-gallery--item' => array(
					'margin-left'   => $attr['gutter'] > 0 && ! ( $attr['responsiveHeight'] ) ? $attr['gutter'] . 'px' : null,
					'margin-right'  => $attr['gutter'] > 0 && ! ( $attr['responsiveHeight'] ) ? $attr['gutter'] . 'px' : null,
					'border-width'  => self::get_css_value( $attr['blockBorderWidth'], 'px' ),
					'border-style'  => $attr['blockBorderStyle'],
					'border-color'  => $attr['blockBorderColor'],
					'border-radius' => self::get_css_value( $attr['blockBorderRadius'], 'px' ),
				),
			);

			$mobile_selectors = array();

			$tablet_selectors = array();

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-block-image-slider.block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			return $css;
		}

		/**
		 * Get Defaults for image slider block
		 *
		 * @return array
		 */
		public static function get_responsive_block_image_slider_default_attributes() {
			return array(
				'block_id'              => '',
				'gutter'                => 5,
				'gutterMobile'          => 5,
				'gridSize'              => 'lrg',
				'height'                => 400,
				'width'                 => '',
				'customWidth'           => false,
				'pageDots'              => false,
				'prevNextButtons'       => true,
				'autoPlay'              => false,
				'autoPlaySpeed'         => 3000,
				'draggable'             => true,
				'alignCells'            => false,
				'pauseHover'            => false,
				'freeScroll'            => false,
				'isSmallImage'          => false,
				'thumbnails'            => false,
				'responsiveHeight'      => false,
				'blockBorderWidth'      => '',
				'iconBackgroundRadius'  => 20,
				'iconBackgroundOpacity' => 90,
				'iconBackgroundColor'   => '',
				'blockBorderColor'      => '',
				'iconColor'             => '',
				'blockBorderStyle'      => '',
				'counterId'             => '',
				'blockBorderRadius'     => '',
			);
		}

		/**
		 * Get Info Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_info_block_css( $attr, $id ) {
			$defaults = self::get_responsive_block_info_block_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$imageBoxShadowPositionCSS = $attr['imageBoxShadowPosition'];
			if ( 'outset' === $attr['imageBoxShadowPosition'] ) {
				$imageBoxShadowPositionCSS = '';
			}

			$boxShadowPositionCSS = $attr['boxShadowPosition'];
			if ( 'outset' === $attr['boxShadowPosition'] ) {
				$boxShadowPositionCSS = '';
			}

			$newopacity = $attr['opacity'] / 100;

			$imgopacity = $attr['imageopacity'] / 100;

			$backgroundImageGradient = '';
			$buttonColor             = '';
			if ( $attr['buttonbackgroundType'] == 'gradient' ) {
				$backgroundImageGradient = 'linear-gradient(' . $attr['buttongradientDirection'] . 'deg, ' . $attr['buttonbackgroundColor1'] . ' ' . $attr['buttoncolorLocation1'] . '%, ' . $attr['buttonbackgroundColor2'] . ' ' . $attr['buttoncolorLocation2'] . '%)';
			} elseif ( $attr['buttonbackgroundType'] == 'color' ) {
				$backgroundImageGradient = '';
				$buttonColor             = $attr['ctaBackColor'];
			}

			$selectors = array(
				' '                                        => array(
					'border-width'     => self::get_css_value( $attr['blockBorderWidth'], 'px' ),
					'background-color' => self::hexToRgb( $attr['backgroundColor'], $newopacity ),
					'padding'          => self::get_css_value( $attr['contentPadding'], 'px' ),
					'border-color'     => $attr['blockBorderColor'],
					'border-style'     => $attr['blockBorderStyle'],
					'border-radius'    => self::get_css_value( $attr['blockBorderRadius'], 'px' ),
					'box-shadow'       =>
						self::get_css_value( $attr['boxShadowHOffset'], 'px' ) .
						' ' .
						self::get_css_value( $attr['boxShadowVOffset'], 'px' ) .
						' ' .
						self::get_css_value( $attr['boxShadowBlur'], 'px' ) .
						' ' .
						self::get_css_value( $attr['boxShadowSpread'], 'px' ) .
						' ' .
						$attr['boxShadowColor'] .
						' ' .
						$boxShadowPositionCSS,
				),

				' .responsive-block-editor-addons-ifb-image-icon-content.responsive-block-editor-addons-ifb-imgicon-wrap' => array(
					'margin-bottom' => self::get_css_value( $attr['iconBottomMargin'], 'px' ),
					'margin-top'    => self::get_css_value( $attr['iconTopMargin'], 'px' ),
					'margin-left'   => self::get_css_value( $attr['iconLeftMargin'], 'px' ),
					'margin-right'  => self::get_css_value( $attr['iconRightMargin'], 'px' ),
				),

				' .responsive-block-editor-addons-ifb-icon' => array(
					'width'  => self::get_css_value( $attr['resIconSize'], 'px' ),
					'height' => self::get_css_value( $attr['resIconSize'], 'px' ),
				),

				' .responsive-block-editor-addons-ifb-image-content > img' => array(
					'border-color'  => $attr['resImageBorderColor'],
					'border-radius' => self::get_css_value( $attr['resImageBorderRadius'], 'px' ),
					'border-width'  => self::get_css_value( $attr['resImageBorderWidth'], 'px' ),
					'border-style'  => $attr['resImageBorderStyle'],
					'box-shadow'    =>
					  self::get_css_value( $attr['imageBoxShadowHOffset'], 'px' ) .
					  ' ' .
					  self::get_css_value( $attr['imageBoxShadowVOffset'], 'px' ) .
					  ' ' .
					  self::get_css_value( $attr['imageBoxShadowBlur'], 'px' ) .
					  ' ' .
					  self::get_css_value( $attr['imageBoxShadowSpread'], 'px' ) .
					  ' ' .
					  $attr['imageBoxShadowColor'] .
					  ' ' .
					  $imageBoxShadowPositionCSS,
					'opacity'       => $imgopacity,
				),

				' .responsive-block-editor-addons-ifb-separator' => array(
					'border-width'     => self::get_css_value( $attr['resseperatorThickness'], 'px' ),
					'border-color'     => $attr['resseperatorColor'],
					'border-top-style' => $attr['resseperatorStyle'],
					'width'            => self::get_css_value( $attr['resseperatorWidth'], $attr['resseparatorWidthType'] ),
					'margin-bottom'    => self::get_css_value( $attr['sepSpace'], 'px' ),
				),

				' .responsive-block-editor-addons-ifb-cta-button' => array(
					'background-color' => $buttonColor,
					'background-image' => $backgroundImageGradient,
					'border-color'     => $attr['ctaBorderColor'],
				),

				' .responsive-block-editor-addons-ifb-cta-button .responsive-block-editor-addons-inline-editing' => array(
					'color' => $attr['ctaColor'],
				),

				' .responsive-block-editor-addons-ifb-cta-button:hover' => array(
					'background-color' => $attr['ctaHoverBackColor'],
					'border-color'     => $attr['ctaHoverBorderColor'],
				),

				' .responsive-block-editor-addons-ifb-cta-button:hover .responsive-block-editor-addons-inline-editing' => array(
					'color' => $attr['ctaHoverColor'],
				),

				' .responsive-block-editor-addons-ifb-icon svg' => array(
					'fill' => $attr['icon_color'],
				),

				' .responsive-block-editor-addons-ifb-icon:hover svg' => array(
					'fill' => $attr['icon_hcolor'],
				),

				' .responsive-block-editor-addons-infobox__content-wrap' => array(
					'text-align' => ( $attr['imgiconPosition'] == 'above-title' || $attr['imgiconPosition'] == 'below-title' ) ? $attr['resheadingAlign'] : '',
				),

				' .responsive-block-editor-addons-infobox__content-wrap .responsive-block-editor-addons-ifb-title' => array(
					'font-size' => self::get_css_value( $attr['resheadFontSize'], 'px !important' ),
				),

				' .responsive-block-editor-addons-infobox__content-wrap .responsive-block-editor-addons-ifb-desc' => array(
					'font-size' => self::get_css_value( $attr['ressubHeadFontSize'], 'px !important' ),
				),

				' .responsive-block-editor-addons-ifb-image-content img' => array(
					'width'     => self::get_css_value( $attr['imageWidth'], 'px' ),
					'max-width' => self::get_css_value( $attr['imageWidth'], 'px' ),
				),

				' .responsive-block-editor-addons-cta-image' => array(
					'background-image'      => 'url(' . $attr['backgroundImage'] . ')',
					'background-position'   => $attr['backgroundImagePosition'],
					'background-repeat'     => $attr['backgroundImageRepeat'],
					'background-size'       => $attr['backgroundImageSize'],
					'background-attachment' => $attr['backgroundAttachment'],
				),

				' .responsive-block-editor-addons-ifb-title-prefix' => array(
					'color'         => $attr['resprefixColor'],
					'font-size'     => self::get_css_value( $attr['resprefixFontSize'], 'px' ),
					'font-weight'   => $attr['resprefixFontWeight'],
					'line-height'   => $attr['resprefixLineHeight'],
					'margin-bottom' => self::get_css_value( $attr['resprefixSpace'], 'px' ),
				),

				' .responsive-block-editor-addons-ifb-title' => array(
					'color'         => $attr['resheadingColor'],
					'font-family'   => $attr['resheadFontFamily'],
					'font-weight'   => $attr['resheadFontWeight'],
					'line-height'   => $attr['resheadLineHeight'],
					'margin-bottom' => self::get_css_value( $attr['resheadSpace'], 'px' ),
				),

				' .responsive-block-editor-addons-ifb-desc' => array(
					'color'         => $attr['ressubheadingColor'],
					'font-family'   => $attr['ressubHeadFontFamily'],
					'font-weight'   => $attr['ressubHeadFontWeight'],
					'line-height'   => $attr['ressubHeadLineHeight'],
					'margin-bottom' => self::get_css_value( $attr['ressubHeadSpace'], 'px' ),
				),

				' .responsive-block-editor-addons-infobox-cta-link' => array(
					'color'          => $attr['resctaLinkColor'],
					'padding-top'    => self::get_css_value( $attr['ctaVpadding'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['ctaVpadding'], 'px' ),
					'padding-left'   => self::get_css_value( $attr['ctaHpadding'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['ctaHpadding'], 'px' ),
					'font-size'      => self::get_css_value( $attr['ctaTextFontSize'], 'px' ),
					'font-weight'    => $attr['ctaTextFontWeight'],
					'font-family'    => $attr['ctaTextFontFamily'],
					'line-height'    => $attr['ctaTextLineHeight'],
				),

				' .responsive-block-editor-addons-inline-editing ' => array(
					'color'     => $attr['resctaLinkColor'],
					'font-size' => self::get_css_value( $attr['resctaFontSize'], 'px' ),
				),

				' .responsive-block-editor-addons-infobox-cta-link.responsive-block-editor-addons-ifb-cta-button' => array(
					'border-width'   => self::get_css_value( $attr['ctaBorderWidth'], 'px' ),
					'border-style'   => $attr['ctaBorderStyle'],
					'border-radius'  => self::get_css_value( $attr['ctaBorderRadius'], 'px' ),
					'padding-top'    => self::get_css_value( $attr['ctaVpadding'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['ctaVpadding'], 'px' ),
					'padding-left'   => self::get_css_value( $attr['ctaHpadding'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['ctaHpadding'], 'px' ),
					'font-size'      => self::get_css_value( $attr['resctaFontSize'], 'px' ),
					'font-weight'    => $attr['resctaFontWeight'],
				),

				' .responsive-block-editor-addons-ifb-cta' => array(
					'margin-bottom' => self::get_css_value( $attr['ctaBottomMargin'], 'px' ),
				),
			);

			$mobile_selectors = array(
				' ' => array(
					'padding' => self::get_css_value( $attr['contentPaddingMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-infobox__content-wrap.responsive-block-editor-addons-infobox-stacked-mobile .responsive-block-editor-addons-ifb-content' => array(
					'text-align' => $attr['alignment'],
				),
				' .responsive-block-editor-addons-infobox__content-wrap.responsive-block-editor-addons-infobox-stacked-mobile .responsive-block-editor-addons-ifb-icon-wrap' => array(
					'text-align' => $attr['alignment'],
				),
				' .responsive-block-editor-addons-infobox__content-wrap.responsive-block-editor-addons-infobox-stacked-mobile .responsive-block-editor-addons-ifb-imgicon-wrap' => array(
					'text-align' => $attr['alignment'],
				),

				' .responsive-block-editor-addons-infobox__content-wrap .responsive-block-editor-addons-ifb-title' => array(
					'font-size' => self::get_css_value( $attr['resheadFontSizeMobile'], 'px !important' ),
				),

				' .responsive-block-editor-addons-infobox__content-wrap .responsive-block-editor-addons-ifb-desc' => array(
					'font-size' => self::get_css_value( $attr['ressubHeadFontSizeMobile'], 'px !important' ),
				),

				' .responsive-block-editor-addons-ifb-image-content img' => array(
					'width'     => self::get_css_value( $attr['imageWidthMobile'], 'px' ),
					'max-width' => self::get_css_value( $attr['imageWidthMobile'], 'px' ),
				),

				' .responsive-block-editor-addons-infobox-cta-link.responsive-block-editor-addons-ifb-cta-button' => array(
					'padding-top'    => self::get_css_value( $attr['ctaVpaddingMobile'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['ctaVpaddingMobile'], 'px' ),
					'padding-left'   => self::get_css_value( $attr['ctaHpaddingMobile'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['ctaHpaddingMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-ifb-separator' => array(
					'margin-bottom' => self::get_css_value( $attr['sepSpaceMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-ifb-title-prefix' => array(
					'margin-bottom' => self::get_css_value( $attr['resprefixSpaceMobile'], 'px' ),
				),

				' .responsive-block-editor-addons-ifb-title' => array(
					'margin-bottom' => self::get_css_value( $attr['resheadSpaceMobile'], 'px' ),
				),

				' .responsive-block-editor-addons-ifb-desc' => array(
					'margin-bottom' => self::get_css_value( $attr['ressubHeadSpaceMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-infobox-cta-link' => array(
					'font-size' => self::get_css_value( $attr['ctaTextFontSizeMobile'], 'px' ),
				),
			);

			$tablet_selectors = array(
				' ' => array(
					'padding' => self::get_css_value( $attr['contentPaddingTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-infobox__content-wrap.responsive-block-editor-addons-infobox-stacked-tablet .responsive-block-editor-addons-ifb-content' => array(
					'text-align' => $attr['alignment'],
				),

				' .responsive-block-editor-addons-infobox__content-wrap.responsive-block-editor-addons-infobox-stacked-tablet .responsive-block-editor-addons-ifb-icon-wrap' => array(
					'text-align' => $attr['alignment'],
				),

				' .responsive-block-editor-addons-infobox__content-wrap.responsive-block-editor-addons-infobox-stacked-tablet .responsive-block-editor-addons-ifb-imgicon-wrap' => array(
					'text-align' => $attr['alignment'],
				),

				' .responsive-block-editor-addons-infobox__content-wrap .responsive-block-editor-addons-ifb-title' => array(
					'font-size' => self::get_css_value( $attr['resheadFontSizeTablet'], 'px !important' ),
				),

				' .responsive-block-editor-addons-infobox__content-wrap .responsive-block-editor-addons-ifb-desc' => array(
					'font-size' => self::get_css_value( $attr['ressubHeadFontSizeTablet'], 'px !important' ),
				),

				' .responsive-block-editor-addons-ifb-image-content img' => array(
					'width'     => self::get_css_value( $attr['imageWidthTablet'], 'px' ),
					'max-width' => self::get_css_value( $attr['imageWidthTablet'], 'px' ),
				),

				' .responsive-block-editor-addons-infobox-cta-link.responsive-block-editor-addons-ifb-cta-button' => array(
					'padding-top'    => self::get_css_value( $attr['ctaVpaddingTablet'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['ctaVpaddingTablet'], 'px' ),
					'padding-left'   => self::get_css_value( $attr['ctaHpaddingTablet'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['ctaHpaddingTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-ifb-separator' => array(
					'margin-bottom' => self::get_css_value( $attr['sepSpaceTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-ifb-title-prefix' => array(
					'margin-bottom' => self::get_css_value( $attr['resprefixSpaceTablet'], 'px' ),
				),

				' .responsive-block-editor-addons-ifb-title' => array(
					'margin-bottom' => self::get_css_value( $attr['resheadSpaceTablet'], 'px' ),
				),

				' .responsive-block-editor-addons-ifb-desc' => array(
					'margin-bottom' => self::get_css_value( $attr['ressubHeadSpaceTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-infobox-cta-link' => array(
					'font-size' => self::get_css_value( $attr['ctaTextFontSizeTablet'], 'px' ),
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-block-info-block.block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			return $css;
		}

		/**
		 * Get Defaults for info block
		 *
		 * @return array
		 */
		public static function get_responsive_block_info_block_default_attributes() {
			return array(
				'block_id'                 => '',
				'inheritFromTheme'         => false,
				'resprefixTitle'           => 'Prefix',
				'classMigrate'             => false,
				'resinfoBlockTitle'        => 'Info Box',
				'resDescHeading'           => 'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
				'resheadingAlign'          => 'center',
				'alignment'                => 'center',
				'resheadingColor'          => '',
				'ressubheadingColor'       => '',
				'resprefixColor'           => '',
				'icon'                     => 'fa fa-star',
				'imgiconPosition'          => 'above-title',
				'resIconSize'              => 40,
				'iconColor'                => '#333',
				'resprefixFontSize'        => '',
				'resprefixFontWeight'      => '',
				'resprefixLineHeight'      => '',
				'resheadingTag'            => 'h3',
				'resheadFontFamily'        => '',
				'ressubHeadFontFamily'     => '',
				'resheadFontSize'          => '',
				'resheadFontSizeMobile'    => '',
				'resheadFontSizeTablet'    => '',
				'resheadFontWeight'        => '700',
				'resheadLineHeight'        => '',
				'ressubHeadFontSize'       => '',
				'ressubHeadFontSizeTablet' => '',
				'ressubHeadFontSizeMobile' => '',
				'ressubHeadFontWeight'     => '100',
				'ressubHeadLineHeight'     => '',
				'resheadSpace'             => 10,
				'resheadSpaceMobile'       => 10,
				'resheadSpaceTablet'       => 10,
				'ressubHeadSpace'          => 10,
				'ressubHeadSpaceMobile'    => 10,
				'ressubHeadSpaceTablet'    => 10,
				'resseperatorSpace'        => 10,
				'source_type'              => 'icon',
				'ressourceAlign'           => 'top',
				'buttonTarget'             => false,
				'ctaIcon'                  => '',
				'resseperatorPosition'     => 'after_title',
				'resseperatorStyle'        => 'solid',
				'resseperatorColor'        => '',
				'resseperatorWidth'        => 30,
				'resseparatorWidthType'    => '%',
				'resseperatorThickness'    => 2,
				'resctaType'               => 'none',
				'resctaText'               => 'Read More',
				'resctaLink'               => '#',
				'resctaLinkColor'          => '#333',
				'resctaFontSize'           => '',
				'resctaFontWeight'         => '',
				'ctaColor'                 => '#333',
				'ctaBackColor'             => 'transparent',
				'ctaBorderColor'           => '#333',
				'ctaBorderStyle'           => 'solid',
				'ctaVpadding'              => 10,
				'ctaHpadding'              => 14,
				'ctaBorderWidth'           => 1,
				'ctaBorderRadius'          => 0,
				'resprefixSpace'           => 5,
				'resprefixSpaceMobile'     => 5,
				'resprefixSpaceTablet'     => 5,
				'iconLeftMargin'           => 0,
				'iconRightMargin'          => 0,
				'iconTopMargin'            => 5,
				'iconBottomMargin'         => 5,
				'iconImage'                => '',
				'imageSize'                => 'thumbnail',
				'imageWidth'               => 120,
				'imageWidthTablet'         => '',
				'imageWidthMobile'         => '',
				'imageWidthType'           => true,
				'stack'                    => 'tablet',
				'resshowPrefix'            => true,
				'resshowTitle'             => true,
				'resshowDesc'              => true,
				'blockBorderStyle'         => 'none',
				'blockBorderWidth'         => 1,
				'blockBorderRadius'        => '',
				'blockBorderColor'         => '',
				'boxShadowColor'           => '',
				'boxShadowHOffset'         => 0,
				'boxShadowVOffset'         => 0,
				'boxShadowBlur'            => '',
				'boxShadowSpread'          => '',
				'boxShadowPosition'        => 'outset',
				'imageBoxShadowColor'      => '',
				'imageBoxShadowHOffset'    => 0,
				'imageBoxShadowVOffset'    => 0,
				'imageBoxShadowBlur'       => '',
				'imageBoxShadowSpread'     => '',
				'imageBoxShadowPosition'   => 'outset',
				'counterId'                => 1,
				'backgroundColor'          => '#ffffff',
				'contentPadding'           => 0,
				'contentPaddingMobile'     => 0,
				'contentPaddingTablet'     => 0,
				'opacity'                  => 100,
				'imageopacity'             => 100,
				'backgroundImage'          => '',
				'imgID'                    => '',
				'imgAlt'                   => '',
				'dimRatio'                 => 50,
				'ctaHoverColor'            => '#333',
				'ctaHoverBackColor'        => 'transparent',
				'ctaHoverBorderColor'      => '#333',
				'backgroundImagePosition'  => 'center center',
				'backgroundImageRepeat'    => 'no-repeat',
				'backgroundImageSize'      => 'cover',
				'backgroundAttachment'     => 'scroll',
				'sepSpace'                 => 10,
				'sepSpaceMobile'           => 10,
				'sepSpaceTablet'           => 10,
				'icon_color'               => '#3a3a3a',
				'icon_hcolor'              => '#3a3a3a',
				'resImageBorderColor'      => '#333',
				'resImageBorderStyle'      => 'none',
				'resImageBorderRadius'     => 0,
				'resImageBorderWidth'      => 2,
				'ctaHpaddingTablet'        => 14,
				'ctaHpaddingMobile'        => 14,
				'ctaVpaddingTablet'        => 10,
				'ctaVpaddingMobile'        => 10,
				'buttoncolorLocation1'     => 0,
				'buttoncolorLocation2'     => 100,
				'buttongradientDirection'  => 90,
				'buttonbackgroundColor1'   => '',
				'buttonbackgroundColor2'   => '#fff',
				'buttonbackgroundType'     => '',
				'ctaTextFontFamily'        => '',
				'ctaTextFontSize'          => '',
				'ctaTextFontSizeMobile'    => '',
				'ctaTextFontSizeTablet'    => '',
				'ctaTextFontWeight'        => '',
				'ctaTextLineHeight'        => '',
				'ctaBottomMargin'          => 10,
			);
		}

		/**
		 * Get Post timeline Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_post_timeline_css( $attr, $id ) {
			$defaults = self::get_responsive_block_post_timeline_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			if ( 'outset' === $attr['boxShadowPosition'] ) {
				$boxShadowPositionCSS = '';
			}

			$selectors = array(
				' .responsive-block-editor-addons-timeline__icon-new svg' => array(
					'width'  => self::get_css_value( $attr['iconSize'], 'px' ),
					'height' => self::get_css_value( $attr['iconSize'], 'px' ),
					'fill'   => $attr['iconColor'],
				),
				' .responsive-block-editor-addons-timeline__marker' => array(
					'border'           => self::get_css_value( $attr['borderWidth'], 'px solid' ),
					'border-color'     => $attr['separatorBorder'],
					'background-color' => $attr['separatorBg'],
					'min-width'        => self::get_css_value( $attr['bgSize'], 'px' ),
					'min-height'       => self::get_css_value( $attr['bgSize'], 'px' ),
				),
				' .responsive-block-editor-addons-timeline__line' => array(
					'background-color' => $attr['connectorColor'],
					'width'            => self::get_css_value( $attr['connectorWidth'], 'px' ),
				),
				' .responsive-block-editor-addons-timeline__link_parent' => array(
					'background-color' => $attr['continuebgColor'],
					'border'           => '1px solid ' . $attr['borderColor'] . '',
					'box-shadow'       =>
					self::get_css_value(
						$attr['boxShadowHOffset'],
						'px'
					) .
					' ' .
					self::get_css_value(
						$attr['boxShadowVOffset'],
						'px'
					) .
					' ' .
					self::get_css_value(
						$attr['boxShadowBlur'],
						'px'
					) .
					' ' .
					self::get_css_value(
						$attr['boxShadowSpread'],
						'px'
					) .
					' ' .
					$attr['boxShadowColor'] .
					' ' .
					$boxShadowPositionCSS,
				),
				' .responsive-block-editor-addons-timeline__link_parent:hover' => array(
					'background-color' => $attr['continuebghColor'],
					'border'           => '1px solid ' . $attr['borderHColor'] . '',
				),
				' .responsive-block-editor-addons-timeline__link_parent .responsive-block-editor-addons-timeline__link' => array(
					'color'       => $attr['continueColor'] . '!important',
					'line-height' => $attr['continueLineHeight'],
					'font-weight' => $attr['continueFontWeight'],
					'font-size'   => self::get_css_value( $attr['continueFontSize'], 'px' ),
					'font-family' => $attr['continueFontFamily'],
				),
				' .responsive-block-editor-addons-timeline__link_parent:hover .responsive-block-editor-addons-timeline__link' => array(
					'color' => $attr['hColor'] . '!important',
				),
				' .responsive-block-editor-addons-timeline__center-block .responsive-block-editor-addons-timeline__marker' => array(
					'margin-left'  => self::get_css_value( $attr['horSpace'], 'px' ),
					'margin-right' => self::get_css_value( $attr['horSpace'], 'px' ),
				),
				' .responsive-block-editor-addons-timeline__left-block .responsive-block-editor-addons-timeline__day-new' => array(
					'margin-left' => self::get_css_value( $attr['horSpace'], 'px' ),
				),
				' .responsive-block-editor-addons-timeline__right-block .responsive-block-editor-addons-timeline__day-new' => array(
					'margin-left' => self::get_css_value( $attr['horSpace'], 'px' ),
				),
				' .responsive-block-editor-addons-timeline__field.responsive-block-editor-addons-timeline__field-wrap' => array(
					'margin-bottom' => self::get_css_value( $attr['verSpace'], 'px' ),
				),
				' .responsive-block-editor-addons-timeline__left-block .responsive-block-editor-addons-timeline__line' => array(
					'left' => 'calc(' . $attr['bgSize'] . '/2)px',
				),
				' .responsive-block-editor-addons-timeline__right-block .responsive-block-editor-addons-timeline__line' => array(
					'right' => 'calc(' . $attr['bgSize'] . '/2)px',
				),
				' .responsive-block-editor-addons-timeline__main .responsive-block-editor-addons-timeline__post p' => array(
					'line-height' => $attr['contentLineHeight'],
				),
				' .responsive-block-editor-addons-timeline__events-new' => array(
					'margin-bottom' => self::get_css_value( $attr['blockSpace'], 'px' ),
				),
				' .responsive-block-editor-addons-timeline__events-new .responsive-block-editor-addons-timeline__events-inner-new' => array(
					'background-color' => $attr['bgColor']
					? $attr['bgColor'] : '#e4e4e4',
					'border-radius'    => self::get_css_value( $attr['borderRadius'], 'px' ),
				),
				' .responsive-block-editor-addons-timeline__date-hide.responsive-block-editor-addons-timeline__date-inner .responsive-block-editor-addons-timeline__date-new' => array(
					'line-height' => $attr['dateLineHeight'],
					'font-weight' => $attr['dateFontWeight'],
					'font-size'   => self::get_css_value( $attr['dateFontSize'], 'px' ),
					'font-family' => $attr['dateFontFamily'],
				),
				' .responsive-block-editor-addons-content' => array(
					'padding' => self::get_css_value( $attr['contentPadding'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-timeline-title' => array(
					'margin-bottom' => self::get_css_value( $attr['headingSpace'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-timeline-title .responsive-block-editor-addons-block-post-timeline-title-heading' => array(
					'color'       => $attr['headingColor']
					? $attr['headingColor'] . '!important'
					: '#333',
					'line-height' => $attr['headingLineHeight'],
					'font-weight' => $attr['headingFontWeight'],
					'font-size'   => self::get_css_value( $attr['headingFontSize'], 'px' ),
					'font-family' => $attr['headingFontFamily'],
				),
				' .responsive-block-editor-addons-block-post-timeline-byline' => array(
					'margin-bottom' => self::get_css_value( $attr['authorSpace'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-timeline-author .responsive-block-editor-addons-text-link' => array(
					'color'       => $attr['authorColor']
					? $attr['authorColor'] . '!important'
					: '#626e81',
					'line-height' => $attr['authorLineHeight'],
					'font-weight' => $attr['authorFontWeight'],
					'font-size'   => self::get_css_value( $attr['authorFontSize'], 'px' ),
					'font-family' => $attr['authorFontFamily'],
				),
				' .responsive-block-editor-addons-block-post-timeline-excerpt .responsive-block-editor-addons-timeline__post' => array(
					'color'         => $attr['textColor']
					? $attr['textColor'] . '!important'
					: '#333',
					'font-weight'   => $attr['contentFontWeight'],
					'font-size'     => self::get_css_value( $attr['contentFontSize'], 'px' ),
					'font-family'   => $attr['contentFontFamily'],
					'margin-bottom' => self::get_css_value( $attr['excerptSpace'], 'px' ),
				),
				' .responsive-block-editor-addons-timeline__date-new.responsive-block-editor-addons-timeline__date-outer' => array(
					'line-height' => $attr['dateLineHeight'],
					'font-weight' => $attr['dateFontWeight'],
					'font-size'   => self::get_css_value( $attr['dateFontSize'], 'px' ),
					'font-family' => $attr['dateFontFamily'],
				),
				' .responsive-block-editor-addons-timeline__main .responsive-block-editor-addons-timeline__line__inner' => array(
					'background-color' => $attr['separatorFillColor'],
				),
				' .responsive-block-editor-addons-timeline__main .responsive-block-editor-addons-timeline__marker.responsive-block-editor-addons-timeline__in-view-icon' => array(
					'background'   => $attr['iconBgFocus'],
					'border-color' => $attr['borderFocus'],
					'color'        => $attr['iconFocus'],
				),
				' .responsive-block-editor-addons-timeline__main .responsive-block-editor-addons-timeline__marker.responsive-block-editor-addons-timeline__in-view-icon svg' => array(
					'fill' => $attr['iconFocus'],
				),

				' .responsive-block-editor-addons-timeline__main .responsive-block-editor-addons-timeline__marker.responsive-block-editor-addons-timeline__in-view-icon .responsive-block-editor-addons-timeline__icon-new' => array(
					'color' => $attr['iconFocus'],
				),
			);

			$mobile_selectors = array(
				' .responsive-block-editor-addons-timeline__center-block.responsive-block-editor-addons-timeline__responsive-mobile .responsive-block-editor-addons-timeline__line' => array(
					'left'  => 'calc(' . $attr['bgSize'] . '/2)px',
					'right' => 'calc(' . $attr['bgSize'] . '/2)px',
				),
				' .responsive-block-editor-addons-timeline__left-block.responsive-block-editor-addons-timeline__responsive-mobile .responsive-block-editor-addons-timeline__line' => array(
					'left' => 'calc(' . $attr['bgSize'] . '/2)px',
				),
				' .responsive-block-editor-addons-timeline__right-block.responsive-block-editor-addons-timeline__responsive-mobile .responsive-block-editor-addons-timeline__line' => array(
					'right' => 'calc(' . $attr['bgSize'] . '/2)px',
				),
				' .responsive-block-editor-addons-timeline__link_parent .responsive-block-editor-addons-timeline__link' => array(
					'font-size' => self::get_css_value( $attr['continueFontSizeMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-timeline__date-hide.responsive-block-editor-addons-timeline__date-inner .responsive-block-editor-addons-timeline__date-new' => array(
					'font-size' => self::get_css_value( $attr['dateFontSizeMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-timeline-title .responsive-block-editor-addons-block-post-timeline-title-heading' => array(
					'font-size' => self::get_css_value( $attr['headingFontSizeMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-timeline-author .responsive-block-editor-addons-text-link' => array(
					'font-size' => self::get_css_value( $attr['authorFontSizeMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-timeline-excerpt .responsive-block-editor-addons-timeline__post' => array(
					'font-size' => self::get_css_value( $attr['contentFontSizeMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-timeline__date-new.responsive-block-editor-addons-timeline__date-outer' => array(
					'font-size' => self::get_css_value( $attr['dateFontSizeMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-content' => array(
					'padding' => self::get_css_value( $attr['contentPaddingMobile'], 'px' ),
				),
			);

			$tablet_selectors = array(
				' .responsive-block-editor-addons-timeline__center-block.responsive-block-editor-addons-timeline__responsive-tablet .responsive-block-editor-addons-timeline__line' => array(
					'left'  => 'calc(' . $attr['bgSize'] . '/2)px',
					'right' => 'calc(' . $attr['bgSize'] . '/2)px',
				),
				' .responsive-block-editor-addons-timeline__left-block.responsive-block-editor-addons-timeline__responsive-tablet .responsive-block-editor-addons-timeline__line' => array(
					'left' => 'calc(' . $attr['bgSize'] . '/2)px',
				),
				' .responsive-block-editor-addons-timeline__right-block.responsive-block-editor-addons-timeline__responsive-tablet .responsive-block-editor-addons-timeline__line' => array(
					'right' => 'calc(' . $attr['bgSize'] . '/2)px',
				),
				' .responsive-block-editor-addons-timeline__link_parent .responsive-block-editor-addons-timeline__link' => array(
					'font-size' => self::get_css_value( $attr['continueFontSizeTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-timeline__date-hide.responsive-block-editor-addons-timeline__date-inner .responsive-block-editor-addons-timeline__date-new' => array(
					'font-size' => self::get_css_value( $attr['dateFontSizeTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-timeline-title .responsive-block-editor-addons-block-post-timeline-title-heading' => array(
					'font-size' => self::get_css_value( $attr['headingFontSizeTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-timeline-author .responsive-block-editor-addons-text-link' => array(
					'font-size' => self::get_css_value( $attr['authorFontSizeTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-post-timeline-excerpt .responsive-block-editor-addons-timeline__post' => array(
					'font-size' => self::get_css_value( $attr['contentFontSizeTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-timeline__date-new.responsive-block-editor-addons-timeline__date-outer' => array(
					'font-size' => self::get_css_value( $attr['dateFontSizeTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-content' => array(
					'padding' => self::get_css_value( $attr['contentPaddingTablet'], 'px' ),
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-block-post-timeline.block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			return $css;
		}

		/**
		 * Get Defaults for post timeline block
		 *
		 * @return array
		 */
		public static function get_responsive_block_post_timeline_default_attributes() {
			return array(
				'categories'             => '',
				'className'              => '',
				'postsToShow'            => 6,
				'displayPostDate'        => true,
				'displayPostExcerpt'     => true,
				'displayPostAuthor'      => true,
				'displayPostImage'       => true,
				'displayPostLink'        => true,
				'displayPostTitle'       => true,
				'displaySectionTitle'    => false,
				'postTitleTag'           => 'h3',
				'postLayout'             => 'grid',
				'columns'                => 2,
				'align'                  => 'center',
				'timelinAlignment'       => 'center',
				'arrowlinAlignment'      => 'center',
				'width'                  => 'wide',
				'order'                  => 'desc',
				'orderBy'                => 'date',
				'readMoreText'           => 'Continue Reading',
				'offset'                 => 0,
				'excerptLength'          => 55,
				'postType'               => 'post',
				'sectionTag'             => 'section',
				'sectionTitle'           => '',
				'sectionTitleTag'        => 'h2',
				'imageSize'              => 'full',
				'url'                    => '',
				'source'                 => 'attribute',
				'selector'               => 'img',
				'attribute'              => 'src',
				'id'                     => '',
				'bgColor'                => '#e4e4e4',
				'textColor'              => '#333',
				'contentPadding'         => 20,
				'contentPaddingMobile'   => 20,
				'contentPaddingTablet'   => 20,
				'authorSpace'            => '',
				'excerptSpace'           => '',
				'blockSpace'             => '',
				'headingSpace'           => '',
				'headingColor'           => '#333',
				'authorColor'            => '#626e81',
				'continueColor'          => '#333',
				'dateFontFamily'         => '',
				'headingFontFamily'      => '',
				'authorFontFamily'       => '',
				'contentFontFamily'      => '',
				'continueFontFamily'     => '',
				'connectorColor'         => '#eeeeee',
				'dateFontSize'           => 16,
				'dateFontSizeMobile'     => 16,
				'dateFontSizeTablet'     => 16,
				'dateFontWeight'         => 400,
				'dateLineHeight'         => 1.75,
				'headingFontSize'        => 20,
				'headingFontSizeMobile'  => 20,
				'headingFontSizeTablet'  => 20,
				'headingFontWeight'      => 700,
				'headingLineHeight'      => 1.5,
				'authorFontSize'         => 14,
				'authorFontSizeMobile'   => 14,
				'authorFontSizeTablet'   => 14,
				'authorFontWeight'       => 400,
				'authorLineHeight'       => 1.5,
				'contentFontSize'        => 16,
				'contentFontSizeMobile'  => 16,
				'contentFontSizeTablet'  => 16,
				'contentFontWeight'      => 400,
				'contentLineHeight'      => 1.75,
				'continueFontSize'       => 16,
				'continueFontSizeMobile' => 16,
				'continueFontSizeTablet' => 16,
				'continueFontWeight'     => 700,
				'continueLineHeight'     => 1.75,
				'icon'                   => 'calendar-alt',
				'iconSize'               => 16,
				'bgSize'                 => 35,
				'borderWidth'            => 0,
				'connectorWidth'         => 3,
				'iconColor'              => '#333',
				'separatorBg'            => '#eee',
				'separatorBorder'        => '#eee',
				'separatorFillColor'     => '#61ce70',
				'iconFocus'              => '#fff',
				'iconBgFocus'            => '#61ce70',
				'borderFocus'            => '#5cb85c',
				'continuebgColor'        => '',
				'borderColor'            => '',
				'hColor'                 => '#333',
				'continuebghColor'       => '',
				'borderHColor'           => '',
				'target'                 => true,
				'borderRadius'           => 0,
				'verSpace'               => 0,
				'horSpace'               => 0,
				'stack'                  => 'mobile',
				'boxShadowColor'         => '',
				'boxShadowPosition'      => 'outset',
				'boxShadowHOffset'       => 0,
				'boxShadowVOffset'       => 0,
				'boxShadowBlur'          => 0,
				'boxShadowSpread'        => 0,
				'taxonomyType'           => 'category',
				'block_id'               => '',
			);
		}

		/**
		 * Get Pricing list Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_pricing_list_css( $attr, $id ) {
			$defaults = self::get_responsive_block_pricing_list_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

				$align = $attr['contentAlign'];
			if ( 'left' === $align ) {
				$align = 'flex-start';
			} elseif ( 'right' === $align ) {
				$align = 'flex-end';
			}
				$selectors        = array(
					' .responsive-block-editior-addons-pricing-list-item-wrap' => array(
						'margin-bottom' => self::get_css_value( $attr['rowGap'], 'px' ),
						'padding-left'  => self::get_css_value( $attr['columnGap'] / 2, 'px' ),
						'padding-right' => self::get_css_value( $attr['columnGap'] / 2, 'px' ),
					),
					' .responsive-block-editior-addons-pricing-list-item-wrap .responsive-block-editior-addons-pricing-list-item-content' => array(
						'padding-top'    => self::get_css_value( $attr['blockTopPadding'], 'px' ),
						'padding-bottom' => self::get_css_value( $attr['blockBottomPadding'], 'px' ),
						'padding-left'   => self::get_css_value( $attr['blockLeftPadding'], 'px' ),
						'padding-right'  => self::get_css_value( $attr['blockRightPadding'], 'px' ),
						'text-align'     => $attr['contentAlign'],
					),
					' .responsive-block-editior-addons-pricing-list-item-image-wrap .responsive-block-editior-addons-pricing-list-item-image' => array(
						'height'    => 'auto',
						'width'     => self::get_css_value( $attr['imageWidth'], 'px' ),
						'max-width' => self::get_css_value( $attr['imageWidth'], 'px' ),
					),
					' .responsive-block-editior-addons-pricing-list-item-title' => array(
						'color'         => $attr['titleColor'],
						'line-height'   => $attr['titleLineHeight'],
						'font-weight'   => $attr['titleFontWeight'],
						'font-size'     => self::get_css_value( $attr['titleFontSize'], 'px' ),
						'font-family'   => $attr['titleFontFamily'],
						'margin-bottom' => self::get_css_value( $attr['titleSpace'], 'px' ),
					),
					' .responsive-block-editior-addons-pricing-list-item-description' => array(
						'color'       => $attr['descColor'],
						'line-height' => $attr['descriptionLineHeight'],
						'font-weight' => $attr['descriptionFontWeight'],
						'font-size'   => self::get_css_value( $attr['descriptionFontSize'], 'px' ),
						'font-family' => $attr['descriptionFontFamily'],
					),
					' .responsive-block-editior-addons-pricing-list-item-price-wrap' => array(
						'color'       => $attr['priceColor'],
						'line-height' => $attr['priceLineHeight'],
						'font-weight' => $attr['priceFontWeight'],
						'font-size'   => self::get_css_value( $attr['priceFontSize'], 'px' ),
						'font-family' => $attr['priceFontFamily'],
					),
					' .responsive-block-editior-addons-pricing-list-item-image-wrap responsive-block-editior-addons-pricing-list-item-image' => array(
						'height'    => 'auto',
						'width'     => self::get_css_value( $attr['imageWidth'], 'px' ),
						'max-width' => self::get_css_value( $attr['imageWidth'], 'px' ),
					),
					' .responsive-block-editior-addons-pricing-list-item-separator-wrap' => array(
						'justify-content' => $align,
					),
					' .responsive-block-editior-addons-pricing-list-item-separator' => array(
						'border-top-color' => $attr['seperatorColor'],
						'border-top-style' => $attr['seperatorStyle'],
						'border-top-width' => self::get_css_value( $attr['seperatorThickness'], 'px' ),
						'width'            => $attr['seperatorWidth'] . '%',
					),
				);
				$mobile_selectors = array(
					' .responsive-block-editior-addons-pricing-list-item-wrap' => array(
						'margin-bottom' => self::get_css_value( $attr['rowGapMobile'], 'px' ),
						'padding-left'  => self::get_css_value( $attr['columnGapMobile'] / 2, 'px' ),
						'padding-right' => self::get_css_value( $attr['columnGapMobile'] / 2, 'px' ),
					),
					' .responsive-block-editior-addons-pricing-list-item-wrap .responsive-block-editior-addons-pricing-list-item-content' => array(
						'padding-top'    => self::get_css_value( $attr['blockTopPaddingMobile'], 'px' ),
						'padding-bottom' => self::get_css_value( $attr['blockBottomPaddingMobile'], 'px' ),
						'padding-left'   => self::get_css_value( $attr['blockLeftPaddingMobile'], 'px' ),
						'padding-right'  => self::get_css_value( $attr['blockRightPaddingMobile'], 'px' ),
					),
					' .responsive-block-editior-addons-pricing-list-item-title' => array(
						'margin-bottom' => self::get_css_value( $attr['titleSpaceMobile'], 'px' ),
						'font-size'     => self::get_css_value( $attr['titleFontSizeMobile'], 'px' ),
					),
					' .responsive-block-editior-addons-pricing-list-item-description' => array(
						'font-size' => self::get_css_value( $attr['descriptionFontSizeMobile'], 'px' ),
					),
					' .responsive-block-editior-addons-pricing-list-item-price-wrap' => array(
						'font-size' => self::get_css_value( $attr['priceFontSizeMobile'], 'px' ),
					),
				);

				$tablet_selectors = array(
					' .responsive-block-editior-addons-pricing-list-item-wrap' => array(
						'margin-bottom' => self::get_css_value( $attr['rowGapTablet'], 'px' ),
						'padding-left'  => self::get_css_value( $attr['columnGapTablet'] / 2, 'px' ),
						'padding-right' => self::get_css_value( $attr['columnGapTablet'] / 2, 'px' ),
					),
					' .responsive-block-editior-addons-pricing-list-item-wrap .responsive-block-editior-addons-pricing-list-item-content' => array(
						'padding-top'    => self::get_css_value( $attr['blockTopPaddingTablet'], 'px' ),
						'padding-bottom' => self::get_css_value( $attr['blockBottomPaddingTablet'], 'px' ),
						'padding-left'   => self::get_css_value( $attr['blockLeftPaddingTablet'], 'px' ),
						'padding-right'  => self::get_css_value( $attr['blockRightPaddingTablet'], 'px' ),
					),
					' .responsive-block-editior-addons-pricing-list-item-title' => array(
						'margin-bottom' => self::get_css_value( $attr['titleSpaceTablet'], 'px' ),
						'font-size'     => self::get_css_value( $attr['titleFontSizeTablet'], 'px' ),
					),
					' .responsive-block-editior-addons-pricing-list-item-description' => array(
						'font-size' => self::get_css_value( $attr['descriptionFontSizeTablet'], 'px' ),
					),
					' .responsive-block-editior-addons-pricing-list-item-price-wrap' => array(
						'font-size' => self::get_css_value( $attr['priceFontSizeTablet'], 'px' ),
					),
				);

				$combined_selectors = array(
					'desktop' => $selectors,
					'tablet'  => $tablet_selectors,
					'mobile'  => $mobile_selectors,
				);

				$id  = '.responsive-block-editor-addons-block-pricing-list.block-' . $id;
				$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
				return $css;
		}

		/**
		 * Get Defaults for pricing list block
		 *
		 * @return array
		 */
		public static function get_responsive_block_pricing_list_default_attributes() {
			return array(
				'block_id'                  => '',
				'pricingList'               => '',
				'topPadding'                => 5,
				'bottomPadding'             => 5,
				'leftPadding'               => 5,
				'rightPadding'              => 5,
				'rowGap'                    => 10,
				'columnGap'                 => 10,
				'titleSpace'                => 10,
				'blockTopPaddingMobile'     => 5,
				'blockBottomPaddingMobile'  => 5,
				'blockLeftPaddingMobile'    => 5,
				'blockRightPaddingMobile'   => 5,
				'rowGapMobile'              => 10,
				'columnGapMobile'           => 10,
				'titleSpaceMobile'          => 10,
				'blockTopPaddingTablet'     => 5,
				'blockBottomPaddingTablet'  => 5,
				'blockLeftPaddingTablet'    => 5,
				'blockRightPaddingTablet'   => 5,
				'rowGapTablet'              => 10,
				'columnGapTablet'           => 10,
				'titleSpaceTablet'          => 10,
				'titleFontFamily'           => '',
				'descriptionFontFamily'     => '',
				'priceFontFamily'           => '',
				'titleFontSize'             => '',
				'titleFontWeight'           => '',
				'titleLineHeight'           => '',
				'descriptionFontSize'       => '',
				'descriptionFontWeight'     => '',
				'descriptionLineHeight'     => '',
				'priceFontSize'             => '',
				'priceFontWeight'           => '',
				'priceLineHeight'           => '',
				'seperatorStyle'            => 'dashed',
				'seperatorWidth'            => 100,
				'seperatorThickness'        => 1,
				'seperatorColor'            => '',
				'titleColor'                => '',
				'descColor'                 => '',
				'priceColor'                => '',
				'columns'                   => 2,
				'count'                     => '',
				'contentAlign'              => 'left',
				'imagePosition'             => 'top',
				'imageAlignment'            => 'middle',
				'imageSize'                 => 'medium',
				'imageWidth'                => '',
				'titleFontSizeMobile'       => '',
				'titleFontSizeTablet'       => '',
				'descriptionFontSizeMobile' => '',
				'descriptionFontSizeTablet' => '',
				'priceFontSizeMobile'       => '',
				'priceFontSizeTablet'       => '',
			);
		}

		/**
		 * Get Pricing table Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_pricing_table_css( $attr, $id ) {
			$defaults = self::get_responsive_block_pricing_table_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$boxShadowPositionCSS = $attr['boxShadowPosition'];
			if ( 'outset' === $attr['boxShadowPosition'] ) {
				$boxShadowPositionCSS = '';
			}

			$buttonBoxShadowPositionCSS = $attr['buttonBoxShadowPosition'];
			if ( 'outset' === $attr['buttonBoxShadowPosition'] ) {
				$buttonBoxShadowPositionCSS = '';
			}

			$imgopacity             = $attr['opacity'] / 100;
			$blockimgopacity        = $attr['blockopacity'] / 100;
			$blockbackcoloropacity  = $attr['blockBackColorOpacity'] / 100;
			$columnbackcoloropacity = $attr['columnBackColorOpacity'] / 100;

			$alignStyle = 'center';
			if ( 'left' == $attr['blockAlign'] ) {
				$alignStyle = 'flex-start';
			}
			if ( 'right' == $attr['blockAlign'] ) {
				$alignStyle = 'flex-end';
			}

			$updatedButtonBgHColor = '';
			$updatedButtonBgHImage = '';
			if ( $attr['buttonHbackgroundType'] === 'color' ) {
				$updatedButtonBgHColor = $attr['ctaHoverBackColor'];
			} elseif ( $attr['buttonHbackgroundType'] == 'gradient' ) {
				$updatedButtonBgHImage = 'linear-gradient(' . $attr['buttonHgradientDirection'] . 'deg, ' . $attr['buttonHbackgroundColor1'] . ' ' . $attr['buttonHcolorLocation1'] . '% , ' . $attr['buttonHbackgroundColor2'] . ' ' . $attr['buttonHcolorLocation2'] . '%)';
			}

			$updatedButtonBackgroundColor = '';
			$updatedButtonBackgroundImage = '';
			if ( $attr['buttonbackgroundType'] == 'color' ) {
				$updatedButtonBackgroundColor = $attr['ctaBackColor'];
			} elseif ( $attr['buttonbackgroundType'] == 'gradient' ) {
				$updatedButtonBackgroundImage = 'linear-gradient(' . $attr['buttongradientDirection'] . 'deg, ' . $attr['buttonbackgroundColor1'] . ' ' . $attr['buttoncolorLocation1'] . '%, ' . $attr['buttonbackgroundColor2'] . ' ' . $attr['buttoncolorLocation2'] . '%)';
			}

			$selectors = array(
				' .wp-block-responsive-block-editor-addons-pricing-table-item__button' => array(
					'color'            => $attr['ctaColor'] . '!important',
					'display'          => 'block',
					'background-color' => $updatedButtonBackgroundColor,
					'background-image' => $updatedButtonBackgroundImage,
					'margin-left'      => 'left' == $attr['blockAlign'] ? 0 : '',
					'margin-right'     => 'right' == $attr['blockAlign'] ? 0 : '',
					'margin-bottom'    => self::get_css_value( $attr['buttonSpace'], 'px' ),
					'padding-left'     => self::get_css_value( $attr['ctaHpadding'], 'px' ),
					'padding-right'    => self::get_css_value( $attr['ctaHpadding'], 'px' ),
					'padding-top'      => self::get_css_value( $attr['ctaVpadding'], 'px' ),
					'padding-bottom'   => self::get_css_value( $attr['ctaVpadding'], 'px' ),
					'border-color'     => $attr['ctaBorderColor'],
					'border-radius'    => self::get_css_value( $attr['ctaBorderRadius'], 'px' ),
					'border-width'     => self::get_css_value( $attr['ctaBorderWidth'], 'px' ),
					'border-style'     => $attr['ctaBorderStyle'],
					'line-height'      => $attr['ctaLineHeight'],
					'font-weight'      => $attr['ctaFontWeight'],
					'font-size'        => self::get_css_value( $attr['ctaFontSize'], 'px' ),
					'font-family'      => $attr['ctaFontFamily'],
					'box-shadow'       =>
						self::get_css_value( $attr['buttonBoxShadowHOffset'], 'px' ) .
						' ' .
						self::get_css_value( $attr['buttonBoxShadowVOffset'], 'px' ) .
						' ' .
						self::get_css_value( $attr['buttonBoxShadowBlur'], 'px' ) .
						' ' .
						self::get_css_value( $attr['buttonBoxShadowSpread'], 'px' ) .
						' ' .
						$attr['buttonBoxShadowColor'] .
						' ' .
						$buttonBoxShadowPositionCSS,
				),

				' .wp-block-responsive-block-editor-addons-pricing-table-item__button:hover' => array(
					'color'            => $attr['ctaHoverColor'] . '!important',
					'background-color' => $updatedButtonBgHColor,
					'background-image' => $updatedButtonBgHImage,
					'border-color'     => $attr['ctaHoverBorderColor'],
				),

				' .wp-block-responsive-block-editor-addons-pricing-table-item.background-type-image' => array(
					'background-image'      => 'linear-gradient(' .
					self::hexToRgb( '#fff', 1 - $imgopacity ) .
					',' .
					self::hexToRgb( '#fff', 1 - $imgopacity ) .
					'),' .
					'url(' . $attr['backgroundImage'] . ')',
					'background-position'   => 'center center',
					'background-attachment' => 'scroll',
					'background-repeat'     => 'no-repeat',
					'background-size'       => 'cover',
				),

				'' => array(
					'text-align'       => $attr['blockAlign'],
					'padding-top'      => self::get_css_value( $attr['blockTopPadding'], 'px' ),
					'padding-bottom'   => self::get_css_value( $attr['blockBottomPadding'], 'px' ),
					'padding-left'     => self::get_css_value( $attr['blockLeftPadding'], 'px' ),
					'padding-right'    => self::get_css_value( $attr['blockRightPadding'], 'px' ),
					'background-color' => $attr['blockbackgroundType'] == 'color' ? self::hexToRgb( $attr['blockbackgroundColor'], 0 ) : '',
					'opacity'          => $attr['blockbackgroundType'] == 'color' ? $attr['blockBackColorOpacity'] : 100,
					'background-image' =>
						$attr['blockbackgroundType'] == 'gradient'
						? self::generateBackgroundImageEffect(
							$attr['blockbackgroundColor1'],
							$attr['blockbackgroundColor2'],
							$attr['blockgradientDirection'],
							$attr['blockcolorLocation1'],
							$attr['blockcolorLocation2']
						)
						: null,
				),

				' .responsive-block-editor-addons-pricing-table-background-image' => array(
					'height'  => '100' . '%',
					'opacity' => $blockimgopacity,
				),

				' .wp-block-responsive-block-editor-addons-pricing-table-item' => array(
					'padding-top'      => self::get_css_value( $attr['columnTopPadding'], 'px' ),
					'padding-bottom'   => self::get_css_value( $attr['columnBottomPadding'], 'px' ),
					'padding-left'     => self::get_css_value( $attr['columnLeftPadding'], 'px' ),
					'padding-right'    => self::get_css_value( $attr['columnRightPadding'], 'px' ),
					'color'            => $attr['textColor'],
					'background-color' => $attr['itemBackgroundColor'],
					'border-width'     => self::get_css_value( $attr['blockBorderWidth'], 'px' ),
					'border-color'     => $attr['blockBorderColor'],
					'border-style'     => $attr['blockBorderStyle'],
					'border-radius'    => self::get_css_value( $attr['blockBorderRadius'], 'px' ),
					'background-color' =>
						$attr['backgroundType'] == 'color'
						? self::hexToRgb( $attr['backgroundColor'], $columnbackcoloropacity )
						: '#eee',
					'background-image' =>
						$attr['backgroundType'] == 'gradient'
						? self::generateBackgroundImageEffect(
							self::hexToRgb(
								$attr['backgroundColor1'],
								$columnbackcoloropacity
							),
							self::hexToRgb(
								$attr['backgroundColor2'],
								$columnbackcoloropacity
							),
							$attr['gradientDirection'],
							$attr['colorLocation1'],
							$attr['colorLocation2']
						)
						: null,
					'box-shadow'       =>
						self::get_css_value( $attr['boxShadowHOffset'], 'px' ) .
						' ' .
						self::get_css_value( $attr['boxShadowVOffset'], 'px' ) .
						' ' .
						self::get_css_value( $attr['boxShadowBlur'], 'px' ) .
						' ' .
						self::get_css_value( $attr['boxShadowSpread'], 'px' ) .
						' ' .
						$attr['boxShadowColor'] .
						' ' .
						$boxShadowPositionCSS,
				),

				' .wp-block-responsive-block-editor-addons-pricing-table-item__title' => array(
					'color'         => $attr['titleColor'],
					'line-height'   => $attr['titleLineHeight'],
					'font-weight'   => $attr['titleFontWeight'],
					'font-size'     => self::get_css_value( $attr['titleFontSize'], 'px' ),
					'font-family'   => $attr['titleFontFamily'],
					'margin-bottom' => self::get_css_value( $attr['titleSpace'], 'px' ),
				),

				' .wp-block-responsive-block-editor-addons-pricing-table-item__price-wrapper' => array(
					'margin-bottom'   => self::get_css_value( $attr['priceSpace'], 'px' ),
					'justify-content' => $alignStyle,
				),

				' .wp-block-responsive-block-editor-addons-pricing-table-item__currency' => array(
					'color'       => $attr['prefixColor'],
					'line-height' => $attr['prefixLineHeight'],
					'font-weight' => $attr['prefixFontWeight'],
					'font-size'   => self::get_css_value( $attr['prefixFontSize'], 'px' ),
					'font-family' => $attr['prefixFontFamily'],
				),

				' .wp-block-responsive-block-editor-addons-pricing-table-item__amount' => array(
					'color'       => $attr['priceColor'],
					'line-height' => $attr['amountLineHeight'],
					'font-weight' => $attr['amountFontWeight'],
					'font-size'   => self::get_css_value( $attr['amountFontSize'], 'px' ),
					'font-family' => $attr['amountFontFamily'],
				),

				' .wp-block-responsive-block-editor-addons-pricing-table-item__price_suffix' => array(
					'color'       => $attr['suffixColor'],
					'line-height' => $attr['suffixLineHeight'],
					'font-weight' => $attr['suffixFontWeight'],
					'font-size'   => self::get_css_value( $attr['suffixFontSize'], 'px' ),
					'font-family' => $attr['suffixFontFamily'],
				),

				' .wp-block-responsive-block-editor-addons-pricing-table-item__sub_price' => array(
					'color'          => $attr['subpriceColor'],
					'line-height'    => $attr['subpriceLineHeight'],
					'text-transform' => $attr['subpriceTextTransform'],
					'font-weight'    => $attr['subpriceFontWeight'],
					'font-size'      => self::get_css_value( $attr['subpriceFontSize'], 'px' ),
					'font-family'    => $attr['subpriceFontFamily'],
					'margin-bottom'  => self::get_css_value( $attr['subpriceSpace'], 'px' ),
				),

				' .wp-block-responsive-block-editor-addons-pricing-table-item__features' => array(
					'color'         => $attr['featuresColor'],
					'line-height'   => $attr['featuresLineHeight'],
					'font-weight'   => $attr['featuresFontWeight'],
					'font-size'     => self::get_css_value( $attr['featuresFontSize'], 'px' ),
					'font-family'   => $attr['featuresFontFamily'],
					'margin-bottom' => self::get_css_value( $attr['featuresSpace'], 'px' ),
				),

			);

			$mobile_selectors = array(
				'' => array(
					'padding-top'    => self::get_css_value( $attr['blockTopPaddingMobile'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['blockBottomPaddingMobile'], 'px' ),
					'padding-left'   => self::get_css_value( $attr['blockLeftPaddingMobile'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['blockRightPaddingMobile'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-pricing-table-item__button' => array(
					'padding-left'   => self::get_css_value( $attr['ctaHpaddingMobile'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['ctaHpaddingMobile'], 'px' ),
					'padding-top'    => self::get_css_value( $attr['ctaVpaddingMobile'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['ctaVpaddingMobile'], 'px' ),
					'font-size'      => self::get_css_value( $attr['ctaFontSizeMobile'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-pricing-table-item' => array(
					'padding-top'    => self::get_css_value( $attr['columnTopPaddingMobile'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['columnBottomPaddingMobile'], 'px' ),
					'padding-left'   => self::get_css_value( $attr['columnLeftPaddingMobile'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['columnRightPaddingMobile'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-pricing-table-item__title' => array(
					'font-size' => self::get_css_value( $attr['titleFontSizeMobile'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-pricing-table-item__currency' => array(
					'font-size' => self::get_css_value( $attr['prefixFontSizeMobile'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-pricing-table-item__amount' => array(
					'font-size' => self::get_css_value( $attr['amountFontSizeMobile'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-pricing-table-item__price_suffix' => array(
					'font-size' => self::get_css_value( $attr['suffixFontSizeMobile'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-pricing-table-item__sub_price' => array(
					'font-size' => self::get_css_value( $attr['subpriceFontSizeMobile'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-pricing-table-item__features' => array(
					'font-size' => self::get_css_value( $attr['featuresFontSizeMobile'], 'px' ),
				),
			);

			$tablet_selectors = array(
				'' => array(
					'padding-top'    => self::get_css_value( $attr['blockTopPaddingTablet'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['blockBottomPaddingTablet'], 'px' ),
					'padding-left'   => self::get_css_value( $attr['blockLeftPaddingTablet'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['blockRightPaddingTablet'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-pricing-table-item__button' => array(
					'padding-left'   => self::get_css_value( $attr['ctaHpaddingTablet'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['ctaHpaddingTablet'], 'px' ),
					'padding-top'    => self::get_css_value( $attr['ctaVpaddingTablet'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['ctaVpaddingTablet'], 'px' ),
					'font-size'      => self::get_css_value( $attr['ctaFontSizeTablet'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-pricing-table-item' => array(
					'padding-top'    => self::get_css_value( $attr['columnTopPaddingTablet'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['columnBottomPaddingTablet'], 'px' ),
					'padding-left'   => self::get_css_value( $attr['columnLeftPaddingTablet'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['columnRightPaddingTablet'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-pricing-table-item__title' => array(
					'font-size' => self::get_css_value( $attr['titleFontSizeTablet'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-pricing-table-item__currency' => array(
					'font-size' => self::get_css_value( $attr['prefixFontSizeTablet'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-pricing-table-item__amount' => array(
					'font-size' => self::get_css_value( $attr['amountFontSizeTablet'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-pricing-table-item__price_suffix' => array(
					'font-size' => self::get_css_value( $attr['suffixFontSizeTablet'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-pricing-table-item__sub_price' => array(
					'font-size' => self::get_css_value( $attr['subpriceFontSizeTablet'], 'px' ),
				),
				' .wp-block-responsive-block-editor-addons-pricing-table-item__features' => array(
					'font-size' => self::get_css_value( $attr['featuresFontSizeTablet'], 'px' ),
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-block-pricing-table.block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			return $css;
		}

		/**
		 * Get Defaults for pricing table block
		 *
		 * @return array
		 */
		public static function get_responsive_block_pricing_table_default_attributes() {
			return array(
				'block_id'                  => '',
				'pricingTable'              => '',
				'blockId'                   => '',
				'count'                     => 2,
				'gutter'                    => 'medium',
				'contentAlign'              => 'center',
				'textColor'                 => '',
				'titleColor'                => '',
				'prefixColor'               => '',
				'priceColor'                => '',
				'suffixColor'               => '',
				'subpriceColor'             => '',
				'featuresColor'             => '',
				'itemBackgroundColor'       => '',
				'blockBorderStyle'          => 'none',
				'blockBorderWidth'          => 1,
				'blockBorderRadius'         => 0,
				'blockBorderColor'          => '',
				'sectionTag'                => 'section',
				'opacity'                   => 30,
				'blockBackColorOpacity'     => 100,
				'columnBackColorOpacity'    => 100,
				'colorLocation1'            => 0,
				'colorLocation2'            => 100,
				'gradientDirection'         => 90,
				'backgroundImage'           => '',
				'backgroundColor'           => '',
				'backgroundColor1'          => '',
				'backgroundColor2'          => '#fff',
				'backgroundType'            => 'none',
				'blockopacity'              => '30',
				'blockcolorLocation1'       => 0,
				'blockcolorLocation2'       => 100,
				'blockgradientDirection'    => 90,
				'blockbackgroundImage'      => '',
				'blockbackgroundColor'      => '',
				'blockbackgroundColor1'     => '',
				'blockbackgroundColor2'     => '#fff',
				'blockbackgroundType'       => 'none',
				'boxShadowColor'            => '',
				'boxShadowHOffset'          => 0,
				'boxShadowVOffset'          => 0,
				'boxShadowBlur'             => 0,
				'boxShadowSpread'           => 0,
				'boxShadowPosition'         => 'outset',
				'buttonBoxShadowColor'      => '',
				'buttonBoxShadowHOffset'    => 0,
				'buttonBoxShadowVOffset'    => 0,
				'buttonBoxShadowBlur'       => 0,
				'buttonBoxShadowSpread'     => 0,
				'buttonBoxShadowPosition'   => 'outset',
				'ctaColor'                  => '#ffffff',
				'ctaBackColor'              => '#3f46ae',
				'ctaHoverColor'             => '#ffffff',
				'ctaHoverBackColor'         => '#3f46ae',
				'ctaBorderColor'            => '#333',
				'ctaBorderStyle'            => 'none',
				'ctaBorderRadius'           => 0,
				'ctaBorderWidth'            => 2,
				'ctaHpadding'               => 30,
				'ctaVpadding'               => 15,
				'buttonbackgroundType'      => 'color',
				'buttoncolorLocation1'      => 0,
				'buttoncolorLocation2'      => 100,
				'buttongradientDirection'   => 90,
				'buttonbackgroundColor1'    => '',
				'buttonbackgroundColor2'    => '#fff',
				'buttonHbackgroundType'     => 'color',
				'buttonHcolorLocation1'     => 0,
				'buttonHcolorLocation2'     => 100,
				'buttonHgradientDirection'  => 90,
				'buttonHbackgroundColor1'   => '',
				'buttonHbackgroundColor2'   => '#fff',
				'titleFontFamily'           => '',
				'amountFontFamily'          => '',
				'prefixFontFamily'          => '',
				'suffixFontFamily'          => '',
				'subpriceFontFamily'        => '',
				'featuresFontFamily'        => '',
				'ctaFontFamily'             => '',
				'titleFontSize'             => '',
				'titleFontSizeMobile'       => '',
				'titleFontSizeTablet'       => '',
				'titleFontWeight'           => '',
				'titleLineHeight'           => '',
				'amountFontSize'            => '',
				'amountFontSizeMobile'      => '',
				'amountFontSizeTablet'      => '',
				'amountFontWeight'          => '',
				'amountLineHeight'          => '',
				'subpriceFontSize'          => '',
				'subpriceFontSizeMobile'    => '',
				'subpriceFontSizeTablet'    => '',
				'subpriceFontWeight'        => '',
				'subpriceLineHeight'        => '',
				'subpriceTextTransform'     => 'uppercase',
				'prefixFontSize'            => '',
				'prefixFontSizeMobile'      => '',
				'prefixFontSizeTablet'      => '',
				'prefixFontWeight'          => '',
				'prefixLineHeight'          => '',
				'suffixFontSize'            => '',
				'suffixFontSizeMobile'      => '',
				'suffixFontSizeTablet'      => '',
				'suffixFontWeight'          => '',
				'suffixLineHeight'          => '',
				'featuresFontSize'          => '',
				'featuresFontSizeMobile'    => '',
				'featuresFontSizeTablet'    => '',
				'featuresFontWeight'        => '',
				'featuresLineHeight'        => '',
				'ctaFontSize'               => '',
				'ctaFontSizeMobile'         => '',
				'ctaFontSizeTablet'         => '',
				'ctaFontWeight'             => '',
				'ctaLineHeight'             => '',
				'blockTopPadding'           => 0,
				'blockBottomPadding'        => 0,
				'blockLeftPadding'          => 0,
				'blockRightPadding'         => 0,
				'blockTopPaddingTablet'     => 0,
				'blockBottomPaddingTablet'  => 0,
				'blockLeftPaddingTablet'    => 0,
				'blockRightPaddingTablet'   => 0,
				'blockTopPaddingMobile'     => 0,
				'blockBottomPaddingMobile'  => 0,
				'blockLeftPaddingMobile'    => 0,
				'blockRightPaddingMobile'   => 0,
				'columnTopPadding'          => 64,
				'columnBottomPadding'       => 64,
				'columnLeftPadding'         => 24,
				'columnRightPadding'        => 24,
				'showImage'                 => true,
				'showTitle'                 => true,
				'showPrefix'                => true,
				'showPrice'                 => true,
				'showSuffix'                => true,
				'showSubprice'              => true,
				'showFeatures'              => true,
				'showButton'                => true,
				'buttonTarget'              => false,
				'titleSpace'                => '',
				'priceSpace'                => '',
				'subpriceSpace'             => 0,
				'buttonSpace'               => '',
				'featuresSpace'             => '',
				'blockAlign'                => 'center',
				'imageWidth'                => '',
				'imageSize'                 => 'full',
				'imageShape'                => '',
				'ctaHpaddingTablet'         => 30,
				'ctaHpaddingMobile'         => 30,
				'ctaVpaddingTablet'         => 15,
				'ctaVpaddingMobile'         => 15,
				'ctaHoverBorderColor'       => '#333',
				'columnTopPaddingTablet'    => 64,
				'columnBottomPaddingTablet' => 64,
				'columnLeftPaddingTablet'   => 24,
				'columnRightPaddingTablet'  => 24,
				'columnTopPaddingMobile'    => 64,
				'columnBottomPaddingMobile' => 64,
				'columnLeftPaddingMobile'   => 24,
				'columnRightPaddingMobile'  => 24,
			);
		}

		/**
		 * Get Section Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_section_css( $attr, $id ) {
			$defaults = self::get_responsive_block_section_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$boxShadowPositionCSS = $attr['boxShadowPosition'];

			if ( 'outset' === $attr['boxShadowPosition'] ) {
				$boxShadowPositionCSS = '';
			}
			$imgopacity = $attr['opacity'] / 100;

			$backgroundImageEffect  = '';
			$updatedBackgroundImage = '';

			$colorType = '';
			if ( $attr['overlayType'] == 'color' ) {
				$colorType = self::hexToRgb(
					$attr['backgroundImageColor'],
					$imgopacity
				);

				if ( $attr['backgroundImage'] ) {
					$updatedBackgroundImage = 'linear-gradient(' .
					self::hexToRgb( $attr['backgroundImageColor'], $imgopacity ) .
					',' .
					self::hexToRgb( $attr['backgroundImageColor'], $imgopacity ) .
					'),url(' .
					$attr['backgroundImage'] .
					')';
				}
				$backgroundImageEffect = '';
			} else {
				if ( $attr['gradientOverlayType'] == 'linear' ) {
					$backgroundImageEffect = 'linear-gradient(' .
					$attr['gradientOverlayAngle'] .
					'deg,' .
					self::hexToRgb( $attr['gradientOverlayColor1'], $imgopacity ) .
					$attr['gradientOverlayLocation1'] .
					'% ,' .
					self::hexToRgb( $attr['gradientOverlayColor2'], $imgopacity ) .
					$attr['gradientOverlayLocation2'] .
					'% ),url(' .
					$attr['backgroundImage'] .
					')';
				}
				if ( $attr['gradientOverlayType'] == 'radial' ) {
					$backgroundImageEffect = 'radial-gradient(' .
					'at ' . $attr['gradientOverlayPosition'] . ', ' .
					self::hexToRgb( $attr['gradientOverlayColor1'], $imgopacity ) .
					$attr['gradientOverlayLocation1'] .
					'% ,' .
					self::hexToRgb( $attr['gradientOverlayColor2'], $imgopacity ) .
					$attr['gradientOverlayLocation2'] .
					'% ),url(' .
					$attr['backgroundImage'] .
					')';
				}
			}

			$selectors        = array(
				' > .responsive-block-editor-addons-block-section' => array(
					'margin-top'       => self::get_css_value( $attr['blockTopMargin'], 'px' ),
					'margin-bottom'    => self::get_css_value( $attr['blockBottomMargin'], 'px' ),
					'margin-left'      => self::get_css_value( $attr['blockLeftMargin'], 'px' ),
					'margin-right'     => self::get_css_value( $attr['blockRightMargin'], 'px' ),
					'padding-top'      => self::get_css_value( $attr['blockTopPadding'], 'px' ),
					'padding-bottom'   => self::get_css_value( $attr['blockBottomPadding'], 'px' ),
					'padding-left'     => self::get_css_value( $attr['blockLeftPadding'], 'px' ),
					'padding-right'    => self::get_css_value( $attr['blockRightPadding'], 'px' ),
					'background-color' => $colorType,
					'background-image' => $backgroundImageEffect,
				),
				' > .responsive-section-wrap > .responsive-section-inner-wrap' => array(
					'max-width' => $attr['align'] == 'full' ? self::get_css_value( $attr['innerWidth'], 'px' ) : '',
					'z-index'   => $attr['z_index'],
				),
				' .background-type-video'     => array(
					'background-color' => self::hexToRgb(
						$attr['backgroundColor'],
						$imgopacity
					),
				),
				' > .responsive-section-wrap' => array(
					'background-image'      => $updatedBackgroundImage,
					'background-position'   => $attr['backgroundImagePosition'],
					'background-attachment' => $attr['backgroundAttachment'],
					'background-repeat'     => $attr['backgroundImageRepeat'],
					'background-size'       => $attr['backgroundImageSize'],
					'border-radius'         => self::get_css_value( $attr['blockBorderRadius'], 'px' ),
					'z-index'               => $attr['z_index'],
					'max-width'             => $attr['align'] != 'full' ? self::get_css_value( $attr['width'], 'px' ) : '',
					'margin-left'           => $attr['align'] != 'full' ? 'auto' : '',
					'margin-right'          => $attr['align'] != 'full' ? 'auto' : '',
				),
				' > .responsive-section-wrap.responsive-block-editor-addons-block-section' => array(
					'border-width'     => self::get_css_value( $attr['blockBorderWidth'], 'px' ),
					'border-color'     => $attr['blockBorderColor'],
					'border-style'     => $attr['blockBorderStyle'],
					'border-radius'    => self::get_css_value( $attr['blockBorderRadius'], 'px' ),
					'background-color' =>
					  $attr['backgroundType'] == 'color'
						? self::hexToRgb( $attr['backgroundColor'], $imgopacity )
						: '',
					'background-image' =>
					  $attr['backgroundType'] == 'gradient'
						? self::generateBackgroundImageEffect(
							self::hexToRgb( $attr['backgroundColor1'], $imgopacity ),
							self::hexToRgb( $attr['backgroundColor2'], $imgopacity ),
							$attr['gradientDirection'],
							$attr['colorLocation1'],
							$attr['colorLocation2']
						)
						: '',
					'box-shadow'       =>
					  self::get_css_value( $attr['boxShadowHOffset'], 'px' ) .
					  ' ' .
					  self::get_css_value( $attr['boxShadowVOffset'], 'px' ) .
					  ' ' .
					  self::get_css_value( $attr['boxShadowBlur'], 'px' ) .
					  ' ' .
					  self::get_css_value( $attr['boxShadowSpread'], 'px' ) .
					  ' ' .
					  $attr['boxShadowColor'] .
					  ' ' .
					  $boxShadowPositionCSS,
				),
			);
			$mobile_selectors = array(
				' > .responsive-block-editor-addons-block-section' => array(
					'margin-top'     => self::get_css_value( $attr['blockTopMarginMobile'], 'px' ),
					'margin-bottom'  => self::get_css_value( $attr['blockBottomMarginMobile'], 'px' ),
					'margin-left'    => self::get_css_value( $attr['blockLeftMarginMobile'], 'px' ),
					'margin-right'   => self::get_css_value( $attr['blockRightMarginMobile'], 'px' ),
					'padding-top'    => self::get_css_value( $attr['blockTopPaddingMobile'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['blockBottomPaddingMobile'], 'px' ),
					'padding-left'   => self::get_css_value( $attr['blockLeftPaddingMobile'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['blockRightPaddingMobile'], 'px' ),
				),
				' > .responsive-section-wrap > .responsive-section-inner-wrap' => array(
					'max-width' =>
						$attr['align'] == 'full' ? self::get_css_value( $attr['innerWidthMobile'], 'px' ) : '',
				),
			);

			$tablet_selectors = array(
				' > .responsive-block-editor-addons-block-section' => array(
					'margin-top'     => self::get_css_value( $attr['blockTopMarginTablet'], 'px' ),
					'margin-bottom'  => self::get_css_value( $attr['blockBottomMarginTablet'], 'px' ),
					'margin-left'    => self::get_css_value( $attr['blockLeftMarginTablet'], 'px' ),
					'margin-right'   => self::get_css_value( $attr['blockRightMarginTablet'], 'px' ),
					'padding-top'    => self::get_css_value( $attr['blockTopPaddingTablet'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['blockBottomPaddingTablet'], 'px' ),
					'padding-left'   => self::get_css_value( $attr['blockLeftPaddingTablet'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['blockRightPaddingTablet'], 'px' ),
				),
				' > .responsive-section-wrap > .responsive-section-inner-wrap' => array(
					'max-width' =>
						$attr['align'] == 'full' ? self::get_css_value( $attr['innerWidthTablet'], 'px' ) : '',
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id              = '.responsive-block-editor-addons-block-section-outer-wrap.block-' . $id;
			$css             = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			$css['desktop'] .= '
            .responsive-block-editor-addons-section__video-wrap {
                border-radius:' . $attr['blockBorderRadius'] . 'px;
              }
            .page.page-template-gutenberg-fullwidth .alignfull' . $id . ' > .responsive-section-wrap > .responsive-section-inner-wrap{
                max-width:' . ( $attr['align'] == 'full' ? self::get_css_value( $attr['innerWidth'], 'px' ) : ' ' ) . ' ;}

                .page.page-template-gutenberg-fullwidth .alignfull ' . $id . '{
                max-width:' . ( $attr['align'] != 'full' ? self::get_css_value( $attr['width'], 'px' ) . ' !important' : ' ' ) . ' ;
                margin-left:' . ( $attr['align'] != 'full' ? 'auto' : ' ' ) . ' ;
                margin-right:' . ( $attr['align'] != 'full' ? 'auto' : ' ' ) . ' ;
                }
            ';
			$css['tablet']  .= '
            .page.page-template-gutenberg-fullwidth .alignfull' . $id . ' > .responsive-section-wrap > .responsive-section-inner-wrap{
                max-width:' . ( $attr['align'] == 'full' ? self::get_css_value( $attr['innerWidthTablet'], 'px' ) : ' ' ) . ' ;}
            ';
			$css['mobile']  .= '
            .page.page-template-gutenberg-fullwidth .alignfull' . $id . ' > .responsive-section-wrap > .responsive-section-inner-wrap{
                max-width:' . ( $attr['align'] == 'full' ? self::get_css_value( $attr['innerWidthMobile'], 'px' ) : ' ' ) . ' ;}
            ';

			return $css;
		}

		/**
		 * Get Defaults for section block
		 *
		 * @return array
		 */
		public static function get_responsive_block_section_default_attributes() {
			return array(
				'block_id'                 => '',
				'blockId'                  => '',
				'align'                    => '',
				'width'                    => 900,
				'innerWidth'               => 1140,
				'innerWidthTablet'         => 1140,
				'innerWidthMobile'         => 1140,
				'innerWidthType'           => 'px',
				'themeWidth'               => false,
				'blockTopPadding'          => 10,
				'blockTopPaddingMobile'    => 10,
				'blockTopPaddingTablet'    => 10,
				'blockBottomPadding'       => 10,
				'blockBottomPaddingMobile' => 10,
				'blockBottomPaddingTablet' => 10,
				'blockLeftPadding'         => 10,
				'blockLeftPaddingMobile'   => 10,
				'blockLeftPaddingTablet'   => 10,
				'blockRightPadding'        => 10,
				'blockRightPaddingMobile'  => 10,
				'blockRightPaddingTablet'  => 10,
				'blockTopMargin'           => 0,
				'blockBottomMargin'        => 0,
				'blockLeftMargin'          => 0,
				'blockRightMargin'         => 0,
				'blockTopMarginTablet'     => 0,
				'blockBottomMarginTablet'  => 0,
				'blockLeftMarginTablet'    => 0,
				'blockRightMarginTablet'   => 0,
				'blockTopMarginMobile'     => 0,
				'blockBottomMarginMobile'  => 0,
				'blockLeftMarginMobile'    => 0,
				'blockRightMarginMobile'   => 0,
				'blockBorderStyle'         => 'none',
				'blockBorderWidth'         => 1,
				'blockBorderRadius'        => 0,
				'blockBorderColor'         => '#000',
				'sectionTag'               => 'section',
				'opacity'                  => 20,
				'colorLocation1'           => 0,
				'colorLocation2'           => 100,
				'gradientDirection'        => 90,
				'backgroundImage'          => '',
				'backgroundImagePosition'  => 'center-center',
				'backgroundImageSize'      => 'cover',
				'backgroundImageRepeat'    => 'no-repeat',
				'backgroundAttachment'     => 'scroll',
				'backgroundImageColor'     => '#fff',
				'overlayType'              => 'color',
				'gradientOverlayColor1'    => '#fff',
				'gradientOverlayColor2'    => '#fff',
				'gradientOverlayType'      => 'linear',
				'gradientOverlayLocation1' => 0,
				'gradientOverlayLocation2' => 100,
				'gradientOverlayAngle'     => 0,
				'gradientOverlayPosition'  => 'center center',
				'backgroundVideo'          => '',
				'backgroundColor'          => '#fff',
				'backgroundColor1'         => '#fff',
				'backgroundColor2'         => '#fff',
				'backgroundType'           => 'none',
				'boxShadowColor'           => '#fff',
				'boxShadowHOffset'         => 0,
				'boxShadowVOffset'         => 0,
				'boxShadowBlur'            => 0,
				'boxShadowSpread'          => 0,
				'boxShadowPosition'        => 'outset',
				'z_index'                  => 1,
			);
		}

		/**
		 * Get Shape divider Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_shape_divider_css( $attr, $id ) {
			$defaults = self::get_responsive_block_shape_divider_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$updatedBackgroundColor = null;
			if ( $attr['backgroundType'] === 'color' && $attr['backgroundColor'] !== null ) {
				$updatedBackgroundColor = $attr['backgroundColor'];
			}

			$updatedBackgroundImage = null;
			if ( $attr['backgroundType'] === 'gradient' ) {
				$updatedBackgroundImage = self::generateBackgroundImageEffect( $attr['backgroundColor1'], $attr['backgroundColor2'], $attr['gradientDirection'], $attr['colorLocation1'], $attr['colorLocation2'] );
			}

			$selectors = array(
				'' => array(
					'background-color' => $updatedBackgroundColor,
					'background-image' => $updatedBackgroundImage,
					'color'            => $attr['customColor'],
				),

				' .wp-block-responsive-block-editor-addons-shape-divider__svg-wrapper' => array(
					'min-height' => self::get_css_value( $attr['shapeHeight'], 'px' ),
				),

				' .wp-block-responsive-block-editor-addons-shape-divider__alt-wrapper' => array(
					'min-height' => self::get_css_value( $attr['backgroundHeight'], 'px' ),
				),
			);
			$mobile_selectors = array();

			$tablet_selectors = array();

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-block-shape-divider.block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );

			return $css;
		}

		/**
		 * Get Defaults for shape divider block
		 *
		 * @return array
		 */
		public static function get_responsive_block_shape_divider_default_attributes() {
			return array(
				'block_id'               => '',
				'align'                  => 'full',
				'height'                 => 100,
				'heightTablet'           => '',
				'heightMobile'           => '',
				'shapeHeight'            => 100,
				'shapeHeightTablet'      => '',
				'backgroundHeight'       => 50,
				'backgroundHeightTablet' => '',
				'backgroundHeightMobile' => '',
				'syncHeight'             => true,
				'syncHeightAlt'          => true,
				'verticalFlip'           => false,
				'horizontalFlip'         => false,
				'color'                  => '',
				'customColor'            => '',
				'backgroundColor'        => '#fff',
				'customBackgroundColor'  => '#fff',
				'noBottomMargin'         => true,
				'noTopMargin'            => true,
				'justAdded'              => true,
				'colorLocation1'         => 0,
				'colorLocation2'         => 100,
				'gradientDirection'      => 90,
				'backgroundColor1'       => '#fff',
				'backgroundColor2'       => '#fff',
				'backgroundType'         => 'none',
			);
		}

		/**
		 * Get Spacer Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_spacer_css( $attr, $id ) {
			$defaults = self::get_responsive_block_spacer_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$selectors = array(
				' .responsive-block-editor-addons-spacer' => array(
					'height' => self::get_css_value( $attr['height'], 'px' ),
				),
			);

			$mobile_selectors = array(
				' .responsive-block-editor-addons-spacer' => array(
					'height' => self::get_css_value( $attr['heightMobile'], 'px' ),
				),
			);

			$tablet_selectors = array(
				' .responsive-block-editor-addons-spacer' => array(
					'height' => self::get_css_value( $attr['heightTablet'], 'px' ),
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '';
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			return $css;
		}

		/**
		 * Get Defaults for spacer block
		 *
		 * @return array
		 */
		public static function get_responsive_block_spacer_default_attributes() {
			return array(
				'height'       => 100,
				'heightTablet' => 100,
				'heightMobile' => 100,
			);
		}

		/**
		 * Get Team Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_team_css( $attr, $id ) {
			$defaults = self::get_responsive_block_team_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$bgopacity = $attr['opacity'] / 100;

			$tempsecondaryBackgroundColor = $attr['bgGradient'] ? $attr['backgroundColor2'] : $attr['backgroundColor'];

			$bggradient = 'linear-gradient(' .
			$attr['gradientDirection'] .
			'deg,' .
			self::hexToRgb( $attr['backgroundColor'] ? $attr['backgroundColor'] : '#ffffff', $bgopacity ? $bgopacity : 0 ) .
			$attr['colorLocation1'] .
			'% ,' .
			self::hexToRgb( $tempsecondaryBackgroundColor ? $tempsecondaryBackgroundColor : '#ffffff', $bgopacity ? $bgopacity : 0 ) .
			$attr['colorLocation2'] .
			'% )';

			if ( $attr['backgroundImage'] ) {
				$bggradient = 'linear-gradient(' .
				$attr['gradientDirection'] .
				'deg,' .
				self::hexToRgb( $attr['backgroundColor'] ? $attr['backgroundColor'] : '#ffffff', $bgopacity ? $bgopacity : 0 ) .
				$attr['colorLocation1'] .
				'% ,' .
				self::hexToRgb( $tempsecondaryBackgroundColor ? $tempsecondaryBackgroundColor : '#ffffff', $bgopacity ? $bgopacity : 0 ) .
				$attr['colorLocation2'] .
				'% ),url(' .
				$attr['backgroundImage'] .
				')';
			}

			$boxShadowPositionCSS = $attr['boxShadowPosition'];

			if ( 'outset' === $attr['boxShadowPosition'] ) {
				$boxShadowPositionCSS = '';
			}

			$gutterMargin = '';
			if ( $attr['count'] > 1 ) {
				if ( $attr['gutter'] === 'small' ) {
					$gutterMargin = '20px';
				} elseif ( $attr['gutter'] === 'medium' ) {
					$gutterMargin = '30px';
				} elseif ( $attr['gutter'] === 'large' ) {
					$gutterMargin = '40px';
				} elseif ( $attr['gutter'] === 'huge' ) {
					$gutterMargin = '50px';
				} else {
					$gutterMargin = '';
				}
			}

			$selectors = array(
				' .responsive-block-editor-addons-team-avatar-wrapper' => array(
					'text-align' => $attr['alignment'],
					'text-align' => '-webkit-' . $attr['alignment'],
				),

				' .responsive-block-editor-addons-team-avatar' => array(
					'width'         => self::get_css_value( $attr['imageWidth'], 'px' ),
					'height'        => self::get_css_value( $attr['imageWidth'], 'px' ),
					'margin-top'    => self::get_css_value( $attr['imageMarginTop'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['imageMarginBottom'], 'px' ),
					'text-align'    => 'justify',
				),

				' .responsive-block-editor-addons-team-name'   => array(
					'color'         => $attr['titleColor'],
					'font-family'   => $attr['titleFontFamily'],
					'font-size'     => self::get_css_value( $attr['titleFontSize'], 'px' ),
					'font-weight'   => $attr['titleFontWeight'],
					'line-height'   => $attr['titleLineHeight'],
					'margin-bottom' => self::get_css_value( $attr['titleSpacing'], 'px' ),
				),

				' .responsive-block-editor-addons-team-designation' => array(
					'color'         => $attr['designationColor'],
					'font-family'   => $attr['designationFontFamily'],
					'font-size'     => self::get_css_value( $attr['designationFontSize'], 'px' ),
					'font-weight'   => $attr['designationFontWeight'],
					'line-height'   => $attr['designationLineHeight'],
					'margin-bottom' => self::get_css_value( $attr['designationSpacing'], 'px' ),
				),

				' .responsive-block-editor-addons-team-description' => array(
					'color'         => $attr['descriptionColor'],
					'font-family'   => $attr['descriptionFontFamily'],
					'font-size'     => self::get_css_value( $attr['descriptionFontSize'], 'px' ),
					'font-weight'   => $attr['descriptionFontWeight'],
					'line-height'   => $attr['descriptionLineHeight'],
					'margin-bottom' => self::get_css_value( $attr['descriptionSpacing'], 'px' ),
				),

				' .responsive-block-editor-addons-team-social-icons a' => array(
					'margin-left'  => self::get_css_value( $attr['socialIconSpacing'], 'px' ),
					'margin-right' => self::get_css_value( $attr['socialIconSpacing'], 'px' ),
				),

				' .responsive-block-editor-addons-team-social-icons .dashicons.dashicons-twitter' => array(
					'color'           => $attr['socialIconColor'],
					'font-size'       => self::get_css_value( $attr['iconSize'], 'px' ),
					'text-decoration' => 'none',
					'height'          => self::get_css_value( $attr['iconSize'], 'px' ),
					'width'           => self::get_css_value( $attr['iconSize'], 'px' ),
				),

				' .responsive-block-editor-addons-team-social-icons .dashicons.dashicons-facebook' => array(
					'color'           => $attr['socialIconColor'],
					'font-size'       => self::get_css_value( $attr['iconSize'], 'px' ),
					'text-decoration' => 'none',
					'height'          => self::get_css_value( $attr['iconSize'], 'px' ),
					'width'           => self::get_css_value( $attr['iconSize'], 'px' ),
				),

				' .responsive-block-editor-addons-team-social-icons .dashicons.dashicons-linkedin' => array(
					'color'           => $attr['socialIconColor'],
					'font-size'       => self::get_css_value( $attr['iconSize'], 'px' ),
					'text-decoration' => 'none',
					'height'          => self::get_css_value( $attr['iconSize'], 'px' ),
					'width'           => self::get_css_value( $attr['iconSize'], 'px' ),
				),

				' .responsive-block-editor-addons-team-social-icons .dashicons.dashicons-instagram' => array(
					'color'           => $attr['socialIconColor'],
					'font-size'       => self::get_css_value( $attr['iconSize'], 'px' ),
					'text-decoration' => 'none',
					'height'          => self::get_css_value( $attr['iconSize'], 'px' ),
					'width'           => self::get_css_value( $attr['iconSize'], 'px' ),
				),

				' .responsive-block-editor-addons-team-social-icons .dashicons.dashicons-email' => array(
					'color'           => $attr['socialIconColor'],
					'font-size'       => self::get_css_value( $attr['iconSize'], 'px' ),
					'text-decoration' => 'none',
					'height'          => self::get_css_value( $attr['iconSize'], 'px' ),
					'width'           => self::get_css_value( $attr['iconSize'], 'px' ),
				),

				' .responsive-block-editor-addons-team-social-icons .dashicons.dashicons-youtube' => array(
					'color'           => $attr['socialIconColor'],
					'font-size'       => self::get_css_value( $attr['iconSize'], 'px' ),
					'text-decoration' => 'none',
					'height'          => self::get_css_value( $attr['iconSize'], 'px' ),
					'width'           => self::get_css_value( $attr['iconSize'], 'px' ),
				),

				' .responsive-block-editor-addons-team-social-icons .dashicons.dashicons-pinterest' => array(
					'color'           => $attr['socialIconColor'],
					'font-size'       => self::get_css_value( $attr['iconSize'], 'px' ),
					'text-decoration' => 'none',
					'height'          => self::get_css_value( $attr['iconSize'], 'px' ),
					'width'           => self::get_css_value( $attr['iconSize'], 'px' ),
				),

				' .wp-block-responsive-block-editor-addons-team' => array(
					'background-image'      => $bggradient,
					'background-size'       => $attr['backgroundImageSize'],
					'background-repeat'     => $attr['backgroundImageRepeat'],
					'background-position'   => $attr['backgroundImagePosition'],
					'background-attachment' => $attr['backgroundAttachment'],
					'border-width'          => self::get_css_value( $attr['borderWidth'], 'px' ),
					'border-color'          => $attr['borderColor'],
					'border-radius'         => self::get_css_value( $attr['borderRadius'], 'px' ),
					'padding'               => self::get_css_value( $attr['padding'], 'px' ),
					'text-align'            => $attr['alignment'],
					'box-shadow'            =>
						self::get_css_value( $attr['boxShadowHOffset'], 'px' ) .
						' ' .
						self::get_css_value( $attr['boxShadowVOffset'], 'px' ) .
						' ' .
						self::get_css_value( $attr['boxShadowBlur'], 'px' ) .
						' ' .
						self::get_css_value( $attr['boxShadowSpread'], 'px' ) .
						' ' .
						$attr['boxShadowColor'] .
						' ' .
						$boxShadowPositionCSS,
				),
			);

			$mobile_selectors = array(
				' .responsive-block-editor-addons-team-avatar' => array(
					'margin-top'    => self::get_css_value( $attr['imageMarginTopMobile'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['imageMarginBottomMobile'], 'px' ),
					'width'         => self::get_css_value( $attr['imageWidthMobile'], 'px' ),
					'max-width'     => self::get_css_value( $attr['imageWidthMobile'], 'px' ),
					'height'        => self::get_css_value( $attr['imageWidthMobile'], 'px' ),
				),

				' .wp-block-responsive-block-editor-addons-team' => array(
					'margin-bottom' => $gutterMargin,
				),
				' .responsive-block-editor-addons-team-name'   => array(
					'margin-bottom' => self::get_css_value( $attr['titleSpacingMobile'], 'px' ),
					'font-size'     => self::get_css_value( $attr['titleFontSizeMobile'], 'px' ),
				),

				' .responsive-block-editor-addons-team-designation' => array(
					'margin-bottom' => self::get_css_value( $attr['designationSpacingMobile'], 'px' ),
					'font-size'     => self::get_css_value( $attr['designationFontSizeMobile'], 'px' ),
				),

				' .responsive-block-editor-addons-team-description' => array(
					'margin-bottom' => self::get_css_value( $attr['descriptionSpacingMobile'], 'px' ),
					'font-size'     => self::get_css_value( $attr['descriptionFontSizeMobile'], 'px' ),
				),

				' .responsive-block-editor-addons-team-social-icons a' => array(
					'margin-left'  => self::get_css_value( $attr['socialIconSpacingMobile'], 'px' ),
					'margin-right' => self::get_css_value( $attr['socialIconSpacingMobile'], 'px' ),
				),
				'.has-columns.has-responsive-columns.responsive-team-block-columns__stack-mobile > *:not(.block-editor-inner-blocks)' => array(
					'max-width' => '100%',
					'min-width' => '100%',
				),
			);

			$tablet_selectors = array(
				' .wp-block-responsive-block-editor-addons-team' => array(
					'margin-bottom' => $gutterMargin,
				),
				' .responsive-block-editor-addons-team-avatar' => array(
					'width'         => self::get_css_value( $attr['imageWidthTablet'], 'px' ),
					'max-width'     => self::get_css_value( $attr['imageWidthTablet'], 'px' ),
					'height'        => self::get_css_value( $attr['imageWidthTablet'], 'px' ),
					'margin-top'    => self::get_css_value( $attr['imageMarginTopTablet'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['imageMarginBottomTablet'], 'px' ),
					'width'         => self::get_css_value( $attr['imageWidthTablet'], 'px' ),
					'max-width'     => self::get_css_value( $attr['imageWidthTablet'], 'px' ),
					'height'        => self::get_css_value( $attr['imageWidthTablet'], 'px' ),
				),
				'.has-columns.has-responsive-columns.responsive-team-block-columns__stack-tablet > *:not(.block-editor-inner-blocks)' => array(
					'max-width' => '100%',
					'min-width' => '100%',
				),

				' .responsive-block-editor-addons-team-name'   => array(
					'margin-bottom' => self::get_css_value( $attr['titleSpacingTablet'], 'px' ),
					'font-size'     => self::get_css_value( $attr['titleFontSizeTablet'], 'px' ),
				),

				' .responsive-block-editor-addons-team-designation' => array(
					'margin-bottom' => self::get_css_value( $attr['designationSpacingTablet'], 'px' ),
					'font-size'     => self::get_css_value( $attr['designationFontSizeTablet'], 'px' ),
				),

				' .responsive-block-editor-addons-team-description' => array(
					'margin-bottom' => self::get_css_value( $attr['descriptionSpacingTablet'], 'px' ),
					'font-size'     => self::get_css_value( $attr['descriptionFontSizeTablet'], 'px' ),
				),

				' .responsive-block-editor-addons-team-social-icons a' => array(
					'margin-left'  => self::get_css_value( $attr['socialIconSpacingTablet'], 'px' ),
					'margin-right' => self::get_css_value( $attr['socialIconSpacingTablet'], 'px' ),
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.wp-block-responsive-block-editor-addons-team-wrapper.block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );

			return $css;
		}

		/**
		 * Get Defaults for team block
		 *
		 * @return array
		 */
		public static function get_responsive_block_team_default_attributes() {
			return array(
				'block_id'                   => '',
				'teamBlock'                  => 'teamBlock',
				'teamImgURL'                 => '',
				'counterId'                  => '1',
				'count'                      => 2,
				'gutter'                     => 'medium',
				'designationColor'           => '',
				'descriptionColor'           => '',
				'socialIconColor'            => '#0066CC',
				'titleColor'                 => '',
				'titleFontWeight'            => '',
				'designationFontWeight'      => '',
				'descriptionFontWeight'      => '',
				'titleLineHeight'            => '',
				'designationLineHeight'      => '',
				'descriptionLineHeight'      => '',
				'imageSize'                  => 'full',
				'titleFontFamily'            => '',
				'designationFontFamily'      => '',
				'descriptionFontFamily'      => '',
				'titleFontSize'              => 23,
				'designationFontSize'        => 15,
				'descriptionFontSize'        => 15,
				'socialIconFontSize'         => 23,
				'imageMarginTop'             => '',
				'imageMarginBottom'          => '',
				'imageMarginTopMobile'       => '',
				'imageMarginBottomMobile'    => '',
				'imageMarginTopTablet'       => '',
				'imageMarginBottomTablet'    => '',
				'iconSize'                   => '',
				'titleSpacing'               => '',
				'designationSpacing'         => '',
				'descriptionSpacing'         => '',
				'socialIconSpacing'          => '',
				'titleSpacingMobile'         => '',
				'designationSpacingMobile'   => '',
				'descriptionSpacingMobile'   => '',
				'socialIconSpacingMobile'    => '',
				'titleSpacingTablet'         => '',
				'designationSpacingTablet'   => '',
				'descriptionSpacingTablet'   => '',
				'socialIconSpacingTablet'    => '',
				'imageStyle'                 => '0%',
				'imageWidth'                 => 120,
				'imageWidthMobile'           => 120,
				'imageWidthTablet'           => 120,
				'backgroundColor'            => '',
				'borderColor'                => '',
				'borderWidth'                => 2,
				'borderRadius'               => 2,
				'padding'                    => 2,
				'alignment'                  => 'center',
				'imageShape'                 => '',
				'boxShadowColor'             => '',
				'boxShadowHOffset'           => 0,
				'boxShadowVOffset'           => 0,
				'boxShadowBlur'              => 0,
				'boxShadowSpread'            => 0,
				'boxShadowPosition'          => 'outset',
				'opacity'                    => 50,
				'backgroundColor2'           => '',
				'gradientDirection'          => 100,
				'colorLocation1'             => 0,
				'colorLocation2'             => 100,
				'bgGradient'                 => '',
				'backgroundImage'            => '',
				'backgroundImagePosition'    => 'center center',
				'backgroundImageRepeat'      => 'no-repeat',
				'backgroundImageSize'        => 'cover',
				'backgroundAttachment'       => 'scroll',
				'showImage'                  => true,
				'showName'                   => true,
				'showDesignation'            => true,
				'showDescription'            => true,
				'showSocialIcons'            => true,
				'facebook'                   => '',
				'twitter'                    => '',
				'linkedin'                   => '',
				'instagram'                  => '',
				'email'                      => '',
				'youtube'                    => '',
				'pinterest'                  => '',
				'titleFontSizeMobile'        => 23,
				'titleFontSizeTablet'        => 23,
				'designationFontSizeMobile'  => 15,
				'designationFontSizeDesktop' => 15,
				'descriptionFontSizeMobile'  => 15,
				'descriptionFontSizeDesktop' => 15,
				'stack'                      => 'mobile',
			);
		}

		/**
		 * Get testimonial Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_testimonial_css( $attr, $id ) {
			$defaults = self::get_responsive_block_testimonial_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$boxShadowPositionCSS      = $attr['boxShadowPosition'];
			$hoverboxShadowPositionCSS = $attr['hoverboxShadowPosition'];

			$bgimage                      = $attr['backgroundImage'] ? $attr['backgroundImage'] : '';
			$tempsecondaryBackgroundColor = $attr['bgGradient']
			? $attr['backgroundColor2']
			: $attr['backgroundColor'];
			$bggradient                   =
			'linear-gradient(' .
			$attr['gradientDirection'] .
			'deg,' .
			self::hexToRgb( $attr['backgroundColor'], $attr['opacity'] ) .
			$attr['colorLocation1'] .
			'% ,' .
			self::hexToRgb( $tempsecondaryBackgroundColor, $attr['opacity'] ) .
			$attr['colorLocation2'] .
			'% ),url(' .
			$bgimage .
			')';

			if ( 'outset' === $attr['boxShadowPosition'] ) {
				$boxShadowPositionCSS = '';
			}

			if ( 'outset' === $attr['hoverboxShadowPosition'] ) {
				$hoverboxShadowPositionCSS = '';
			}

			$selectors = array(
				' .responsive-block-editor-addons-testimonial-text' => array(
					'text-align'     => $attr['testimonialAlignment'],
					'font-family'    => $attr['contentFontFamily'],
					'font-size'      => self::get_css_value( $attr['contentFontSize'], 'px' ),
					'line-height'    => $attr['contentLineHeight'],
					'font-weight'    => $attr['contentFontWeight'],
					'text-transform' => $attr['contentTextTransform'],
					'margin-bottom'  => self::get_css_value( $attr['contentSpacing'], 'px' ),
					'color'          => $attr['testimonialTextColor'],
				),
				' .responsive-block-editor-addons-testimonial-info' => array(
					'margin-bottom' => self::get_css_value( $attr['titleSpacing'], 'px' ),
				),
				' .responsive-block-editor-addons-testimonial-info .responsive-block-editor-addons-testimonial-inner-block .responsive-block-editor-addons-testimonial-avatar-wrap' => array(
					'padding-right' => self::get_css_value( $attr['imageSpacing'], 'px' ),
				),
				' .responsive-block-editor-addons-testimonial-info .responsive-block-editor-addons-testimonial-inner-block .responsive-block-editor-addons-testimonial-avatar-wrap .responsive-block-editor-addons-testimonial-image-wrap' => array(
					'height' => self::get_css_value( $attr['imageWidth'], 'px' ),
					'width'  => self::get_css_value( $attr['imageWidth'], 'px' ),
				),
				' .responsive-block-editor-addons-testimonial-avatar' => array(
					'height' => self::get_css_value( $attr['imageWidth'], 'px' ),
					'width'  => self::get_css_value( $attr['imageWidth'], 'px' ),
				),
				' .responsive-block-editor-addons-testimonial-details .responsive-block-editor-addons-testimonial-name' => array(
					'color'          => $attr['testimonialNameColor'],
					'font-family'    => $attr['nameFontFamily'],
					'font-size'      => self::get_css_value( $attr['nameFontSize'], 'px' ),
					'line-height'    => $attr['nameLineHeight'],
					'font-weight'    => $attr['nameFontWeight'],
					'text-transform' => $attr['nameTextTransform'],
					'margin-bottom'  => self::get_css_value( $attr['nameSpacing'], 'px' ),
				),
				' .responsive-block-editor-addons-testimonial-details .responsive-block-editor-addons-testimonial-title' => array(
					'color'          => $attr['testimonialTitleColor'],
					'font-family'    => $attr['titleFontFamily'],
					'font-size'      => self::get_css_value( $attr['titleFontSize'], 'px' ),
					'line-height'    => $attr['titleLineHeight'],
					'font-weight'    => $attr['titleFontWeight'],
					'text-transform' => $attr['titleTextTransform'],
				),
				' .testimonial-box.responsive-block-editor-addons-block-testimonial' => array(
					'box-shadow' =>
					self::get_css_value( $attr['boxShadowHOffset'], 'px' ) .
					' ' .
					self::get_css_value( $attr['boxShadowVOffset'], 'px' ) .
					' ' .
					self::get_css_value( $attr['boxShadowBlur'], 'px' ) .
					' ' .
					self::get_css_value( $attr['boxShadowSpread'], 'px' ) .
					' ' .
					$attr['boxShadowColor'] .
					' ' .
					$boxShadowPositionCSS,
					'padding'    => self::get_css_value( $attr['padding'], 'px' ),
				),
				' .responsive-block-editor-addons-block-testimonial:hover' => array(
					'box-shadow' =>
					self::get_css_value( $attr['hoverboxShadowHOffset'], 'px' ) .
					' ' .
					self::get_css_value( $attr['hoverboxShadowVOffset'], 'px' ) .
					' ' .
					self::get_css_value( $attr['hoverboxShadowBlur'], 'px' ) .
					' ' .
					self::get_css_value( $attr['hoverboxShadowSpread'], 'px' ) .
					' ' .
					$attr['hoverboxShadowColor'] .
					' ' .
					$hoverboxShadowPositionCSS,
				),
				' .responsive-block-editor-addons-block-testimonial' => array(
					'background-image'    => $bggradient,
					'background-size'     => $attr['backgroundImageSize'],
					'background-repeat'   => $attr['backgroundImageRepeat'],
					'background-position' => $attr['backgroundImagePosition'],
					'color'               => $attr['testimonialTextColor'],
					'border-style'        => $attr['blockBorderStyle'],
					'border-width'        => self::get_css_value( $attr['blockBorderWidth'], 'px' ),
					'border-radius'       => self::get_css_value( $attr['blockBorderRadius'], 'px' ),
					'border-color'        => $attr['blockBorderColor'],
				),

			);

			$mobile_selectors = array(
				' .testimonial-box.responsive-block-editor-addons-block-testimonial' => array(
					'padding' => self::get_css_value( $attr['paddingMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-testimonial-text' => array(
					'font-size'     => self::get_css_value( $attr['contentFontSizeMobile'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['contentSpacingMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-testimonial-details .responsive-block-editor-addons-testimonial-name' => array(
					'font-size' => self::get_css_value( $attr['nameFontSizeMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-testimonial-details .responsive-block-editor-addons-testimonial-title' => array(
					'font-size' => self::get_css_value( $attr['titleFontSizeMobile'], 'px' ),
				),
			);

			$tablet_selectors = array(
				' .testimonial-box.responsive-block-editor-addons-block-testimonial' => array(
					'padding' => self::get_css_value( $attr['paddingTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-testimonial-text' => array(
					'font-size'     => self::get_css_value( $attr['contentFontSizeTablet'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['contentSpacingTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-testimonial-details .responsive-block-editor-addons-testimonial-name' => array(
					'font-size' => self::get_css_value( $attr['nameFontSizeTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-testimonial-details .responsive-block-editor-addons-testimonial-title' => array(
					'font-size' => self::get_css_value( $attr['titleFontSizeTablet'], 'px' ),
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-block-testimonial.block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			return $css;
		}

		/**
		 * Get Defaults for testimonial block
		 *
		 * @return array
		 */
		public static function get_responsive_block_testimonial_default_attributes() {
			return array(
				'block_id'                => '',
				'testimonialBlock'        => '',
				'counterId'               => '',
				'count'                   => '',
				'gutter'                  => 'medium',
				'testimonialAlignment'    => '',
				'backgroundColor'         => '#f2f2f2',
				'testimonialTextColor'    => '',
				'testimonialNameColor'    => '',
				'testimonialTitleColor'   => '',
				'titleFontSize'           => '',
				'titleFontSizeMobile'     => '',
				'titleFontSizeTablet'     => '',
				'titleLineHeight'         => '',
				'titleFontWeight'         => '',
				'titleTextTransform'      => '',
				'nameFontSize'            => '',
				'nameFontSizeMobile'      => '',
				'nameFontSizeTablet'      => '',
				'nameLineHeight'          => '',
				'imageWidth'              => '',
				'nameFontFamily'          => '',
				'titleFontFamily'         => '',
				'contentFontFamily'       => '',
				'nameFontWeight'          => '',
				'nameTextTransform'       => '',
				'contentFontSize'         => '',
				'contentFontSizeMobile'   => '',
				'contentFontSizeTablet'   => '',
				'contentLineHeight'       => 1.6,
				'contentFontWeight'       => '',
				'contentTextTransform'    => '',
				'testimonialCiteAlign'    => 'left-aligned',
				'backgroundColor'         => '#f2f2f2',
				'borderStyle'             => 'none',
				'borderWidth'             => '',
				'borderColor'             => '',
				'borderRadius'            => 2,
				'padding'                 => 20,
				'paddingTablet'           => 20,
				'paddingMobile'           => 20,
				'contentSpacing'          => 8,
				'contentSpacingMobile'    => 8,
				'contentSpacingTablet'    => 8,
				'titleSpacing'            => '',
				'nameSpacing'             => -5,
				'imageSpacing'            => '',
				'alignment'               => 'center',
				'imageShape'              => '',
				'imageSize'               => 'full',
				'boxShadowColor'          => '#fff',
				'boxShadowHOffset'        => 0,
				'boxShadowVOffset'        => 0,
				'boxShadowBlur'           => 0,
				'boxShadowSpread'         => 0,
				'boxShadowPosition'       => 'outset',
				'hoverboxShadowColor'     => '#ccc',
				'hoverboxShadowHOffset'   => 0,
				'hoverboxShadowVOffset'   => 0,
				'hoverboxShadowBlur'      => 6,
				'hoverboxShadowSpread'    => 1,
				'hoverboxShadowPosition'  => 'outset',
				'opacity'                 => 0.7,
				'gradientDegree'          => 180,
				'bgGradient'              => false,
				'backgroundImage'         => '',
				'backgroundImagePosition' => '',
				'backgroundImageSize'     => '',
				'backgroundImageRepeat'   => '',
				'imageHoverEffect'        => '',
				'bggradient'              => '',
				'backgroundColor2'        => '',
				'colorLocation1'          => 0,
				'colorLocation2'          => 100,
			);
		}

		/**
		 * Get Testimonial Slider Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_testimonial_slider_css( $attr, $id ) {
			$defaults = self::get_responsive_block_testimonial_slider_block_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$updatedBackgroundImage = '';
			$backgroundImageEffect  = '';
			$imgopacity             = $attr['backgroundOpacity'] / 100;
			if ( $attr['backgroundImage'] ) {
				$updatedBackgroundImage = 'linear-gradient(' . self::hexToRgb( $attr['backgroundImageColor'] ? $attr['backgroundImageColor'] : '#fff', $imgopacity ) . ',' . self::hexToRgb( $attr['backgroundImageColor'] ? $attr['backgroundImageColor'] : '#fff', $imgopacity ) . '),url(' . $attr['backgroundImage'] . ')';
				if ( $attr['gradientOverlayType'] === 'linear' ) {
					$backgroundImageEffect = self::generateBackgroundImageEffect(
						self::hexToRgb( $attr['gradientOverlayColor1'], $imgopacity ),
						self::hexToRgb( $attr['gradientOverlayColor2'], $imgopacity ),
						$attr['gradientOverlayAngle'],
						$attr['gradientOverlayLocation1'],
						$attr['gradientOverlayLocation2']
					);
				} else {
					$backgroundImageEffect = 'radial-gradient( at ' . $attr['gradientOverlayPosition'] . ',' . self::hexToRgb( $attr['gradientOverlayColor1'] ? $attr['gradientOverlayColor1'] : '#fff', $imgopacity ) .
					' ' . $attr['gradientOverlayLocation1'] . '%,' . self::hexToRgb( $attr['gradientOverlayColor2'] ? $attr['gradientOverlayColor2'] : '#fff', $imgopacity ) .
					' ' . $attr['gradientOverlayLocation2'] . '%)';
				}
			}

			$mobile_selectors = array();
			$tablet_selectors = array();

			$position    = str_replace( '-', ' ', $attr['backgroundImagePosition'] );
			$backopacity = $attr['backgroundOpacity'] ? ( 100 - $attr['backgroundOpacity'] ) / 100 : 0.5;
			$imageUrl    = $attr['backgroundImage'] ? $attr['backgroundImage'] : null;

			$selectors = array(
				' '                   => array(
					'padding' => self::get_css_value( $attr['blockPadding'], 'px' ),
				),
				' .responsive-block-editor-addons-testimonial__wrap .responsive-block-editor-addons-tm__content' => array(
					'border-width'  => self::get_css_value( $attr['blockBorderWidth'], 'px' ),
					'border-color'  => $attr['blockBorderColor'],
					'border-style'  => $attr['blockBorderStyle'],
					'border-radius' => self::get_css_value( $attr['blockBorderRadius'], 'px' ),
					'padding'       => self::get_css_value( $attr['contentPadding'], 'px' ),
					'text-align'    => $attr['headingAlign'],
				),
				' button.slick-arrow' => array(
					'border-width'  => self::get_css_value( $attr['arrowBorderWidth'], 'px' ),
					'border-color'  => $attr['arrowBorderColor'],
					'border-radius' => self::get_css_value( $attr['arrowBorderRadius'], 'px' ),
					'border-style'  => $attr['arrowBorderStyle'],
				),
				' ul.slick-dots li button:before, ul.slick-dots li.slick-active button:before' => array(
					'color' => $attr['arrowColor'],
				),
				' .slick-arrow svg'   => array(
					'fill'   => $attr['arrowColor'],
					'width'  => self::get_css_value( $attr['arrowSize'], 'px' ),
					'height' => self::get_css_value( $attr['arrowSize'], 'px' ),
				),
				' .responsive-block-editor-addons-tm__image img' => array(
					'width'     => self::get_css_value( $attr['imageWidth'], 'px' ),
					'max-width' => self::get_css_value( $attr['imageWidth'], 'px' ),
				),
				' .responsive-block-editor-addons-testimonial__wrap.responsive-block-editor-addons-tm__bg-type-color .responsive-block-editor-addons-tm__content' => array(
					'background-color' => $attr['backgroundColor'],
				),
				' .responsive-block-editor-addons-testimonial__wrap.responsive-block-editor-addons-tm__bg-type-image .responsive-block-editor-addons-tm__content' => array(
					'background-image'      => $updatedBackgroundImage,
					'background-position'   => $attr['backgroundImagePosition'],
					'background-repeat'     => $attr['backgroundImageRepeat'],
					'background-size'       => $attr['backgroundImageSize'],
					'background-attachment' => $attr['backgroundAttachment'],
				),
				' .responsive-block-editor-addons-testimonial__wrap.responsive-block-editor-addons-tm__bg-type-image .responsive-block-editor-addons-tm__overlay' => array(
					'background-color' => $attr['overlayType'] == 'color' ? self::hexToRgb( $attr['backgroundColor'], $imgopacity ) : '',
					'background-image' => $backgroundImageEffect,
				),
				' .responsive-block-editor-addons-testimonial__wrap' => array(
					'padding-left'  => self::get_css_value( $attr['columnGap'] / 2, 'px' ),
					'padding-right' => self::get_css_value( $attr['columnGap'] / 2, 'px' ),
					'margin-bottom' => self::get_css_value( $attr['rowGap'], 'px' ),
				),
				' .responsive-block-editor-addons-testimonial__wrap .responsive-block-editor-addons-tm__image-content' => array(
					'padding-left'   => self::get_css_value( $attr['imgHrPadding'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['imgHrPadding'], 'px' ),
					'padding-top'    => self::get_css_value( $attr['imgVrPadding'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['imgVrPadding'], 'px' ),
				),
				' .responsive-block-editor-addons-tm__content.skin-type-bubble .responsive-block-editor-addons-tm__desc' => array(
					'padding' => self::get_css_value( $attr['bubblePadding'], 'px' ),
				),
				' .responsive-block-editor-addons-tm__content.skin-type-bubble .responsive-block-editor-addons-testinomial-text-wrap:before' => array(
					'border-top' => '10px solid ' . $attr['bubbleColor'],
				),
				' .responsive-block-editor-addons-tm__content.skin-type-bubble .responsive-block-editor-addons-testinomial-text-wrap' => array(
					'background-color' => $attr['bubbleColor'],
					'border-radius'    => self::get_css_value( $attr['bubbleBorderRadius'], 'px' ),
				),
				' .responsive-block-editor-addons-tm__author-name' => array(
					'margin-bottom' => self::get_css_value( $attr['nameSpace'], 'px' ),
				),
				' .responsive-block-editor-addons-tm__desc' => array(
					'margin-bottom' => self::get_css_value( $attr['descSpace'], 'px' ),
				),
			);

			$mobile_selectors = array(
				' ' => array(
					'padding' => self::get_css_value( $attr['blockPaddingMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-testimonial__wrap .responsive-block-editor-addons-tm__content' => array(
					'padding'    => self::get_css_value( $attr['contentPaddingMobile'], 'px' ),
					'text-align' => $attr['headingAlignMobile'],
				),
				' .responsive-block-editor-addons-testimonial__wrap' => array(
					'padding-left'  => self::get_css_value( $attr['columnGapMobile'] / 2, 'px' ),
					'padding-right' => self::get_css_value( $attr['columnGapMobile'] / 2, 'px' ),
					'margin-bottom' => self::get_css_value( $attr['rowGapMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-testimonial__wrap .responsive-block-editor-addons-tm__image-content' => array(
					'padding-left'   => self::get_css_value( $attr['imgHrPaddingMobile'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['imgHrPaddingMobile'], 'px' ),
					'padding-top'    => self::get_css_value( $attr['imgVrPaddingMobile'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['imgVrPaddingMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-tm__author-name' => array(
					'margin-bottom' => self::get_css_value( $attr['nameSpaceMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-tm__desc' => array(
					'margin-bottom' => self::get_css_value( $attr['descSpaceMobile'], 'px' ),
				),
			);

			$tablet_selectors = array(
				' ' => array(
					'padding' => self::get_css_value( $attr['blockPaddingTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-testimonial__wrap .responsive-block-editor-addons-tm__content' => array(
					'padding'    => self::get_css_value( $attr['contentPaddingTablet'], 'px' ),
					'text-align' => $attr['headingAlignTablet'],
				),
				' .responsive-block-editor-addons-testimonial__wrap' => array(
					'padding-left'  => self::get_css_value( $attr['columnGapTablet'] / 2, 'px' ),
					'padding-right' => self::get_css_value( $attr['columnGapTablet'] / 2, 'px' ),
					'margin-bottom' => self::get_css_value( $attr['rowGapTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-testimonial__wrap .responsive-block-editor-addons-tm__image-content' => array(
					'padding-left'   => self::get_css_value( $attr['imgHrPaddingTablet'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['imgHrPaddingTablet'], 'px' ),
					'padding-top'    => self::get_css_value( $attr['imgVrPaddingTablet'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['imgVrPaddingTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-tm__author-name' => array(
					'margin-bottom' => self::get_css_value( $attr['nameSpaceTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-tm__desc' => array(
					'margin-bottom' => self::get_css_value( $attr['descSpaceTablet'], 'px' ),
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-testomonial__outer-wrap.responsive-block-editor-addons-block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			return $css;
		}

		/**
		 * Get Defaults for testimonial slider block
		 *
		 * @return array
		 */
		public static function get_responsive_block_testimonial_slider_block_default_attributes() {
			return array(
				'test_item_count'          => 3,
				'classMigrate'             => false,
				'test_block'               => array(),
				'skin'                     => 'default',
				'bubblePadding'            => 20,
				'bubbleBorderRadius'       => 0,
				'bubbleColor'              => 'center',
				'headingAlign'             => 'center',
				'headingAlignMobile'       => 'center',
				'headingAlignTablet'       => 'center',
				'descColor'                => '#333',
				'companyColor'             => '#888888',
				'authorColor'              => '#333',
				'iconimgStyle'             => 'circle',
				'imagePosition'            => 'bottom',
				'imageAlignment'           => 'top',
				'nameFontSizeType'         => 'px',
				'nameFontSize'             => '',
				'nameFontSizeTablet'       => '',
				'nameFontSizeMobile'       => '',
				'nameFontFamily'           => 'Default',
				'nameFontWeight'           => '',
				'nameFontSubset'           => '',
				'nameLineHeightType'       => 'em',
				'nameLineHeight'           => '',
				'nameLineHeightTablet'     => '',
				'nameLineHeightMobile'     => '',
				'nameLoadGoogleFonts'      => false,
				'companyFontSizeType'      => 'px',
				'companyFontSize'          => '',
				'companyFontSizeTablet'    => '',
				'companyFontSizeMobile'    => '',
				'companyFontFamily'        => 'Default',
				'companyFontWeight'        => '',
				'companyFontSubset'        => '',
				'companyLineHeightType'    => 'em',
				'companyLineHeight'        => '',
				'companyLineHeightTablet'  => '',
				'companyLineHeightMobile'  => '',
				'companyLoadGoogleFonts'   => false,
				'descFontSizeType'         => 'px',
				'descFontSize'             => '',
				'descFontSizeTablet'       => '',
				'descFontSizeMobile'       => '',
				'descFontFamily'           => 'Default',
				'descFontWeight'           => '',
				'descFontSubset'           => '',
				'descLineHeightType'       => 'em',
				'descLineHeight'           => '',
				'descLineHeightTablet'     => '',
				'descLineHeightMobile'     => '',
				'descLoadGoogleFonts'      => false,
				'nameSpace'                => 5,
				'descSpace'                => 15,
				'nameSpaceMobile'          => 5,
				'descSpaceTablet'          => 15,
				'nameSpaceMobile'          => 5,
				'descSpaceTablet'          => 15,
				'block_id'                 => 'not_set',
				'authorSpace'              => 5,
				'imgVrPadding'             => 10,
				'imgHrPadding'             => 10,
				'imgVrPaddingMobile'       => 10,
				'imgHrPaddingMobile'       => 10,
				'imgVrPaddingTablet'       => 10,
				'imgHrPaddingTablet'       => 10,
				'imgTopPadding'            => 10,
				'imgBottomPadding'         => 10,
				'iconImage'                => array(
					'url' => '',
					'alt' => 'InfoBox placeholder img',
				),
				'imageSize'                => 'thumbnail',
				'imageWidth'               => 60,
				'columns'                  => 1,
				'tcolumns'                 => 1,
				'mcolumns'                 => 1,
				'pauseOnHover'             => true,
				'infiniteLoop'             => true,
				'transitionSpeed'          => 500,
				'autoplay'                 => true,
				'autoplaySpeed'            => 2000,
				'arrowDots'                => 'arrows_dots',
				'arrowSize'                => 20,
				'arrowBorderSize'          => 1,
				'arrowBorderRadius'        => 0,
				'arrowBorderColor'         => '',
				'arrowBorderStyle'         => '',
				'rowGap'                   => 10,
				'columnGap'                => 10,
				'contentPadding'           => 5,
				'rowGapMobile'             => 10,
				'columnGapMobile'          => 10,
				'contentPaddingMobile'     => 5,
				'rowGapTablet'             => 10,
				'columnGapTablet'          => 10,
				'contentPaddingTablet'     => 5,
				'backgroundType'           => '',
				'backgroundImage'          => '',
				'backgroundImagePosition'  => 'center-center',
				'backgroundImageSize'      => 'cover',
				'backgroundAttachment'     => 'scroll',
				'backgroundImageRepeat'    => 'no-repeat',
				'overlayType'              => 'color',
				'gradientOverlayColor1'    => '',
				'gradientOverlayLocation1' => 0,
				'gradientOverlayColor2'    => '',
				'gradientOverlayLocation2' => 100,
				'gradientOverlayType'      => 'linear',
				'gradientOverlayAngle'     => 0,
				'gradientOverlayPosition'  => 'center center',
				'backgroundColor'          => '',
				'backgroundImageColor'     => '',
				'blockBorderStyle'         => 'none',
				'blockBorderWidth'         => 1,
				'blockBorderRadius'        => '',
				'blockBorderColor'         => '',
				'backgroundOpacity'        => 50,
				'arrowColor'               => '#333',
				'stack'                    => 'tablet',
				'blockPadding'             => 45,
				'blockPaddingMobile'       => 45,
				'blockPaddingTablet'       => 45,
			);
		}

		/**
		 * Get Video Popup Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_video_popup_css( $attr, $id ) {
			$defaults = self::get_responsive_block_video_popup_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$boxShadowPositionCSS = $attr['boxShadowPosition'];
			if ( 'outset' === $attr['boxShadowPosition'] ) {
				$boxShadowPositionCSS = '';
			}

			$imgopacity  = $attr['opacity'] / 100;
			$playopacity = $attr['butopacity'] / 100;

			$updatedImgUrl = '';
			if ( $attr['backgroundImage'] ) {
				$updatedImgUrl = $attr['backgroundImage'];
			}

			$selectors = array(
				' .responsive-block-editor-addons-video-popup__wrapper' => array(
					'background-image' => 'url(' . $updatedImgUrl . ')',
					'background-color' => self::hexToRgb( $attr['vidBackgroundColor'], $imgopacity ),
					'max-width'        => self::get_css_value( $attr['vidwidth'], 'px' ),
					'height'           => self::get_css_value( $attr['vidheight'], 'px' ),
					'border-width'     => self::get_css_value( $attr['blockBorderWidth'], 'px' ),
					'border-color'     => $attr['blockBorderColor'],
					'border-style'     => $attr['blockBorderStyle'],
					'border-radius'    => self::get_css_value( $attr['blockBorderRadius'], 'px' ),
					'box-shadow'       =>
					self::get_css_value( $attr['boxShadowHOffset'], 'px' ) .
					' ' .
					self::get_css_value( $attr['boxShadowVOffset'], 'px' ) .
					' ' .
					self::get_css_value( $attr['boxShadowBlur'], 'px' ) .
					' ' .
					self::get_css_value( $attr['boxShadowSpread'], 'px' ) .
					' ' .
					$attr['boxShadowColor'] .
					' ' .
					$boxShadowPositionCSS,
				),

				' .responsive-block-editor-addons-video-popup__play-button svg' => array(
					'width'   => self::get_css_value( $attr['playButtonSize'], 'px' ),
					'height'  => self::get_css_value( $attr['playButtonSize'], 'px' ),
					'fill'    => $attr['playButtonColor'],
					'opacity' => $playopacity,
				),
			);

			$mobile_selectors = array(
				' .responsive-block-editor-addons-video-popup__wrapper' => array(
					'max-width' => self::get_css_value( $attr['vidwidthMobile'], 'px' ),
					'height'    => self::get_css_value( $attr['vidheightMobile'], 'px' ),
				),
			);

			$tablet_selectors = array(
				' .responsive-block-editor-addons-video-popup__wrapper' => array(
					'max-width' => self::get_css_value( $attr['vidwidthTablet'], 'px' ),
					'height'    => self::get_css_value( $attr['vidheightTablet'], 'px' ),
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-block-video-popup.block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			return $css;
		}

		/**
		 * Get Defaults for video popup block
		 *
		 * @return array
		 */
		public static function get_responsive_block_video_popup_default_attributes() {
			return array(
				'block_id'               => '',
				'align'                  => '',
				'videoLink'              => '',
				'videoID'                => '',
				'borderRadius'           => '',
				'shadow'                 => '',
				'playButtonType'         => 'normal',
				'playButtonColor'        => '',
				'playButtonSize'         => 30,
				'vidwidth'               => '',
				'vidwidthTablet'         => '',
				'vidwidthMobile'         => '',
				'vidheight'              => '',
				'vidheightTablet'        => '',
				'vidheightMobile'        => '',
				'vidBackgroundColor'     => '',
				'opacity'                => 50,
				'backgroundImage'        => '',
				'imgID'                  => '',
				'imgAlt'                 => '',
				'counterId'              => 1,
				'butopacity'             => 100,
				'blockBorderStyle'       => 'none',
				'blockBorderWidth'       => 1,
				'blockBorderRadius'      => '',
				'blockBorderColor'       => '',
				'boxShadowColor'         => '',
				'boxShadowHOffset'       => 0,
				'boxShadowVOffset'       => 0,
				'boxShadowBlur'          => '',
				'boxShadowSpread'        => '',
				'boxShadowPosition'      => 'outset',
				'previewBackgroundColor' => '#000000',
				'hoverEffect'            => '',
			);
		}

		/**
		 * Get Defaults for advanced column block
		 *
		 * @return array
		 */
		public static function get_responsive_block_advanced_columns_default_attributes() {
			return array(
				'columnGap'                => 'default',
				'widthType'                => 'px',
				'contentWidth'             => 'theme',
				'stack'                    => 'mobile',
				'columns'                  => 2,
				'width'                    => 900,
				'blockTopPadding'          => 10,
				'blockBottomPadding'       => 10,
				'blockLeftPadding'         => 10,
				'blockRightPadding'        => 10,
				'blockTopPaddingTablet'    => '',
				'blockBottomPaddingTablet' => '',
				'blockLeftPaddingTablet'   => '',
				'blockRightPaddingTablet'  => '',
				'blockTopPaddingMobile'    => '',
				'blockBottomPaddingMobile' => '',
				'blockLeftPaddingMobile'   => '',
				'blockRightPaddingMobile'  => '',
				'blockTopMargin'           => 0,
				'blockBottomMargin'        => 0,
				'blockLeftMargin'          => 0,
				'blockRightMargin'         => 0,
				'blockTopMarginTablet'     => '',
				'blockBottomMarginTablet'  => '',
				'blockLeftMarginTablet'    => '',
				'blockRightMarginTablet'   => '',
				'blockTopMarginMobile'     => '',
				'blockBottomMarginMobile'  => '',
				'blockLeftMarginMobile'    => '',
				'blockRightMarginMobile'   => '',
				'blockBorderStyle'         => 'none',
				'blockBorderWidth'         => 1,
				'blockBorderRadius'        => '',
				'blockBorderColor'         => '',
				'boxShadowColor'           => '',
				'boxShadowHOffset'         => 0,
				'boxShadowVOffset'         => 0,
				'boxShadowBlur'            => 0,
				'boxShadowSpread'          => 0,
				'boxShadowPosition'        => 'outset',
				'opacity'                  => 20,
				'colorLocation1'           => 0,
				'colorLocation2'           => 100,
				'gradientDirection'        => 90,
				'backgroundType'           => '',
				'backgroundColor'          => '',
				'backgroundColor1'         => '',
				'backgroundColor2'         => '#fff',
				'backgroundImage'          => '',
				'backgroundImagePosition'  => 'center-center',
				'backgroundImageSize'      => 'cover',
				'backgroundImageRepeat'    => 'no-repeat',
				'backgroundAttachment'     => 'scroll',
				'backgroundImageColor'     => '',
				'overlayType'              => 'color',
				'gradientOverlayColor1'    => '',
				'gradientOverlayColor2'    => '',
				'gradientOverlayType'      => 'linear',
				'gradientOverlayLocation1' => 0,
				'gradientOverlayLocation2' => 100,
				'gradientOverlayAngle'     => 0,
				'gradientOverlayPosition'  => 'center center',
				'blockAlign'               => 'left',
				'verticalAlign'            => 'flex-start',
				'blockId'                  => '',
				'height'                   => 'normal',
				'customHeight'             => 50,
				'z_index'                  => 1,

			);
		}

		/**
		 * Get Defaults for count up block
		 *
		 * @return array
		 */
		public static function get_responsive_block_count_up_default_attributes() {
			return array(
				'block_id'              => '',
				'countUp'               => '',
				'count'                 => '',
				'gutter'                => 'medium',
				'contentAlign'          => 'center',
				'textColor'             => '',
				'itemBackgroundColor'   => '',
				'contentFontFamily'     => '',
				'headingFontFamily'     => '',
				'dateFontFamily'        => '',
				'dateLineHeight'        => 1,
				'dateFontWeight'        => '400',
				'dateFontSize'          => 40,
				'dateFontSizeMobile'    => 40,
				'dateFontSizeTablet'    => 40,
				'headingLineHeight'     => 1.8,
				'headingFontWeight'     => '900',
				'headingFontSize'       => 16,
				'headingFontSizeTablet' => '',
				'headingFontSizeMobile' => '',
				'blockBorderRadius'     => '',
				'blockBorderColor'      => '',
				'numColor'              => '',
				'titleColor'            => '',
				'titleSpacing'          => '',
				'numberSpacing'         => '',
				'descriptionSpacing'    => '',
				'contentLineHeight'     => 1.75,
				'contentFontWeight'     => '400',
				'contentFontSize'       => 16,
				'contentFontSizeMobile' => 16,
				'contentFontSizeTablet' => 16,
				'icon'                  => 'welcome-add-page',
				'resshowIcon'           => false,
				'resshowTitle'          => true,
				'resshowDesc'           => true,
				'blockBorderStyle'      => 'none',
				'blockBorderWidth'      => 1,
				'opacity'               => 10,
				'icon_color'            => '#3a3a3a',
				'iconsize'              => 16,
				'resshowNum'            => true,
				'titleSpace'            => 20,
				'contentSpace'          => 30,
				'numSpace'              => 20,
				'iconStyle'             => 'none',
				'shapeBorderRadius'     => 100,
				'shapePadding'          => 20,
				'shapeBorder'           => 2,
				'iconShapeColor'        => '#add5ef',
				'contentPadding'        => 0,
				'contentPaddingTablet'  => 0,
				'contentPaddingMobile'  => 0,
				'contentSpacing'        => 0,
				'iconSpacing'           => 16,
			);
		}

		/**
		 * Get Defaults for blockquote block
		 *
		 * @return array
		 */
		public static function get_responsive_block_blockquote_default_attributes() {
			return array(
				'block_id'                => '',
				'quoteContent'            => '',
				'quoteBackgroundColor'    => '',
				'quoteTextColor'          => '',
				'quoteFontFamily'         => '',
				'quoteFontSize'           => 18,
				'quoteFontSizeMobile'     => 18,
				'quoteFontSizeTablet'     => 18,
				'quoteFontWeight'         => '400',
				'quoteLineHeight'         => 1,
				'quoteSize'               => 70,
				'quoteColor'              => '',
				'blockBorderStyle'        => 'none',
				'blockBorderWidth'        => 1,
				'blockBorderRadius'       => 0,
				'blockBorderColor'        => '',
				'blockLeftPadding'        => 60,
				'blockLeftPaddingMobile'  => 60,
				'blockLeftPaddingTablet'  => 60,
				'blockRightPadding'       => 60,
				'blockRightPaddingMobile' => 60,
				'blockRightPaddingTablet' => 60,
				'topPadding'              => 70,
				'topPaddingMobile'        => 70,
				'topPaddingTablet'        => 70,
				'bottomPadding'           => 70,
				'bottomPaddingMobile'     => 70,
				'bottomPaddingTablet'     => 70,
				'quoteHposition'          => 30,
				'quoteVposition'          => 20,
				'quoteAlign'              => 'left-aligned',
				'quoteOpacity'            => 100,
				'showQuote'               => true,
				'opacity'                 => 100,
				'colorLocation1'          => 0,
				'colorLocation2'          => 100,
				'gradientDirection'       => 90,
				'backgroundImage'         => '',
				'backgroundVideo'         => '',
				'backgroundColor'         => '',
				'backgroundColor1'        => '',
				'backgroundColor2'        => '',
				'backgroundType'          => 'none',
				'icon'                    => 'round-fat',
				'boxShadowColor'          => '#fff',
				'boxShadowHOffset'        => 0,
				'boxShadowVOffset'        => 0,
				'boxShadowBlur'           => 20,
				'boxShadowSpread'         => 20,
				'boxShadowPosition'       => 'outset',
				'textSpacingTop'          => 60,
				'textSpacingTopMobile'    => 30,
				'textSpacingTopTablet'    => 30,
				'textSpacingBottom'       => 0,
				'textSpacingBottomMobile' => 0,
				'textSpacingBottomTablet' => 0,
				'textSpacingLeft'         => 70,
				'textSpacingLeftMobile'   => 35,
				'textSpacingLeftTablet'   => 35,
				'textSpacingRight'        => 70,
				'textSpacingRightMobile'  => 35,
				'textSpacingRightTablet'  => 35,

			);
		}
		/**
		 * Get Defaults for divider block
		 *
		 * @return array
		 */
		public static function get_responsive_block_divider_default_attributes() {
			return array(
				'block_id'               => '',
				'spacerHeight'           => 30,
				'spacerHeightMobile'     => 30,
				'spacerHeightTablet'     => 30,
				'spacerDivider'          => false,
				'spacerDividerStyle'     => 'solid',
				'spacerDividerColor'     => '#000',
				'spacerDividerHeight'    => 7,
				'spacerDividerWidth'     => 60,
				'spacerDividerAlignment' => 'center',
			);
		}

		/**
		 * Get Count Down Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_count_down_css( $attr, $id ) {
			$defaults = self::get_responsive_block_count_down_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$boxShadowPositionCSS = $attr['boxShadowPosition'];
			if ( 'outset' === $attr['boxShadowPosition'] ) {
				$boxShadowPositionCSS = '';
			}

			$displayLabels = $attr['showDigitLabels'] ? 'block' : 'none';

			$displayDays    = $attr['showDaysBox'] ? 'block' : 'none';
			$displayHours   = $attr['showHoursBox'] ? 'block' : 'none';
			$displayMinutes = $attr['showMinutesBox'] ? 'block' : 'none';
			$displaySeconds = $attr['showSecondsBox'] ? 'block' : 'none';

			$flexColumn = $attr['stackOnMobile'] ? 'column' : 'row';

			$selectors = array(
				' .responsive-block-editor-addons-countdown-box-stylings' => array(
					'height'           => self::get_css_value( $attr['boxHeight'], 'px' ),
					'width'            => self::get_css_value( $attr['boxWidth'], 'px' ),
					'margin'           => self::get_css_value( $attr['boxMargin'], 'px' ),
					'padding'          => $attr['boxTopPadding'] . 'px ' . $attr['boxRightPadding'] . 'px ' . $attr['boxBottomPadding'] . 'px ' . $attr['boxLeftPadding'] . 'px',
					'border'           => $attr['boxBorderSize'] . 'px ' . $attr['boxBorderStyle'] . ' ' . $attr['boxBorderColor'],
					'border-radius'    => $attr['borderRadiusTopLeft'] . 'px ' . $attr['borderRadiusTopRight'] . 'px ' . $attr['borderRadiusBottomRight'] . 'px ' . $attr['borderRadiusBottomLeft'] . 'px',
					'background-color' => $attr['boxBackgroundColor'],
					'box-shadow'       => $attr['boxShadowHOffset'] . 'px ' . $attr['boxShadowVOffset'] . 'px ' . $attr['boxShadowBlur'] . 'px ' . $attr['boxShadowSpread'] . 'px ' . $attr['boxShadowColor'] . ' ' . $boxShadowPositionCSS,
				),
				' .responsive-block-editor-addons-countdown-digits' => array(
					'font-family'     => $attr['digitFontFamily'],
					'font-size'       => self::get_css_value( $attr['digitFontSize'], 'px' ),
					'font-weight'     => $attr['digitFontWeight'],
					'letter-spacing'  => self::get_css_value( $attr['digitLetterSpacing'], 'px' ),
					'line-height'     => $attr['digitLineHeight'],
					'color'           => $attr['digitColor'],
					'display'         => $attr['displayInline'] ? 'flex' : 'block',
					'flex'            => $attr['displayInline'] ? 1 : null,
					'justify-content' => $attr['displayInline'] ? 'center' : null,
				),
				' .responsive-block-editor-addons-countdown-label' => array(
					'font-family'     => $attr['labelFontFamily'],
					'font-size'       => self::get_css_value( $attr['labelFontSize'], 'px' ),
					'font-weight'     => $attr['labelFontWeight'],
					'line-height'     => $attr['labelLineHeight'],
					'padding-left'    => self::get_css_value( $attr['labelLeftPadding'], 'px' ),
					'letter-spacing'  => self::get_css_value( $attr['labelLetterSpacing'], 'px' ),
					'color'           => $attr['labelColor'],
					'display'         => $attr['displayInline'] ? 'flex' : 'block',
					'flex'            => $attr['displayInline'] ? 1 : null,
					'justify-content' => $attr['displayInline'] ? 'flex-start' : null,
					'display'         => $displayLabels,
				),
				' .responsive-block-editor-addons-countdown-box-margins' => array(
					'margin-top'      => self::get_css_value( $attr['boxItemMarginTop'], 'px' ),
					'margin-right'    => self::get_css_value( $attr['boxItemMarginRight'], 'px' ),
					'margin-bottom'   => self::get_css_value( $attr['boxItemMarginBottom'], 'px' ),
					'margin-left'     => self::get_css_value( $attr['boxItemMarginLeft'], 'px' ),
					'text-align'      => $attr['boxItemTextAlign'],
					'display'         => $attr['displayInline'] ? 'flex' : null,
					'justify-content' => $attr['displayInline'] ? 'center' : null,
					'align-items'     => $attr['displayInline'] ? 'center' : null,
				),
				'.responsive-block-editor-addons-countdown-wrapper' => array(
					'margin-top'     => self::get_css_value( $attr['containerMarginTop'], 'px' ),
					'margin-right'   => self::get_css_value( $attr['containerMarginRight'], 'px' ),
					'margin-bottom'  => self::get_css_value( $attr['containerMarginBottom'], 'px' ),
					'margin-left'    => self::get_css_value( $attr['containerMarginLeft'], 'px' ),
					'padding-top'    => self::get_css_value( $attr['containerTopPadding'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['containerRightPadding'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['containerBottomPadding'], 'px' ),
					'padding-left'   => self::get_css_value( $attr['containerLeftPadding'], 'px' ),
				),
				' .responsive-block-editor-addons-countdown-container .responsive-block-editor-addons-countdown-items' => array(
					'justify-content' => $attr['justifyItems'],
					'margin'          => 0,
				),
				' .responsive-block-editor-addons-countdown-get-date' => array(
					'display' => 'none',
				),
				' .responsive-block-editor-addons-countdown-item.responsive-block-editor-addons-countdown-item-days' => array(
					'display' => $displayDays,
				),
				' .responsive-block-editor-addons-countdown-item.responsive-block-editor-addons-countdown-item-hours' => array(
					'display' => $displayHours,
				),
				' .responsive-block-editor-addons-countdown-item.responsive-block-editor-addons-countdown-item-minutes' => array(
					'display' => $displayMinutes,
				),
				' .responsive-block-editor-addons-countdown-item.responsive-block-editor-addons-countdown-item-seconds' => array(
					'display' => $displaySeconds,
				),
			);

			$mobile_selectors = array(
				' .responsive-block-editor-addons-countdown-box-stylings' => array(
					'height'           => self::get_css_value( $attr['boxHeightMobile'], 'px' ),
					'width'            => self::get_css_value( $attr['boxWidthMobile'], 'px' ),
					'margin'           => self::get_css_value( $attr['boxMarginMobile'], 'px' ),
					'padding'          => $attr['boxTopPaddingMobile'] . 'px ' . $attr['boxRightPaddingMobile'] . 'px ' . $attr['boxBottomPaddingMobile'] . 'px ' . $attr['boxLeftPaddingMobile'] . 'px',
					'border'           => $attr['boxBorderSize'] . 'px ' . $attr['boxBorderStyle'] . ' ' . $attr['boxBorderColor'],
					'border-radius'    => $attr['borderRadiusTopLeft'] . 'px ' . $attr['borderRadiusTopRight'] . 'px ' . $attr['borderRadiusBottomRight'] . 'px ' . $attr['borderRadiusBottomLeft'] . 'px',
					'background-color' => $attr['boxBackgroundColor'],
					'box-shadow'       => $attr['boxShadowHOffset'] . 'px ' . $attr['boxShadowVOffset'] . 'px ' . $attr['boxShadowBlur'] . 'px ' . $attr['boxShadowSpread'] . 'px ' . $attr['boxShadowColor'] . ' ' . $boxShadowPositionCSS,
				),
				' .responsive-block-editor-addons-countdown-digits' => array(
					'font-family'     => $attr['digitFontFamily'],
					'font-size'       => self::get_css_value( $attr['digitFontSizeMobile'], 'px' ),
					'font-weight'     => $attr['digitFontWeight'],
					'letter-spacing'  => self::get_css_value( $attr['digitLetterSpacing'], 'px' ),
					'line-height'     => $attr['digitLineHeight'],
					'color'           => $attr['digitColor'],
					'display'         => $attr['displayInline'] ? 'flex' : 'block',
					'flex'            => $attr['displayInline'] ? 1 : null,
					'justify-content' => $attr['displayInline'] ? 'center' : null,
				),
				' .responsive-block-editor-addons-countdown-label' => array(
					'font-family'     => $attr['labelFontFamily'],
					'font-size'       => self::get_css_value( $attr['labelFontSizeMobile'], 'px' ),
					'font-weight'     => $attr['labelFontWeight'],
					'line-height'     => $attr['labelLineHeight'],
					'padding-left'    => self::get_css_value( $attr['labelLeftPadding'], 'px' ),
					'letter-spacing'  => self::get_css_value( $attr['labelLetterSpacing'], 'px' ),
					'color'           => $attr['labelColor'],
					'display'         => $attr['displayInline'] ? 'flex' : 'block',
					'flex'            => $attr['displayInline'] ? 1 : null,
					'justify-content' => $attr['displayInline'] ? 'flex-start' : null,
					'display'         => $displayLabels,
				),
				' .responsive-block-editor-addons-countdown-box-margins' => array(
					'margin-top'    => self::get_css_value( $attr['boxItemMarginTopMobile'], 'px' ),
					'margin-right'  => self::get_css_value( $attr['boxItemMarginRightMobile'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['boxItemMarginBottomMobile'], 'px' ),
					'margin-left'   => self::get_css_value( $attr['boxItemMarginLeftMobile'], 'px' ),
				),
				'.responsive-block-editor-addons-countdown-wrapper' => array(
					'margin-top'     => self::get_css_value( $attr['containerMarginTopMobile'], 'px' ),
					'margin-right'   => self::get_css_value( $attr['containerMarginRightMobile'], 'px' ),
					'margin-bottom'  => self::get_css_value( $attr['containerMarginBottomMobile'], 'px' ),
					'margin-left'    => self::get_css_value( $attr['containerMarginLeftMobile'], 'px' ),
					'padding-top'    => self::get_css_value( $attr['containerTopPaddingMobile'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['containerRightPaddingMobile'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['containerBottomPaddingMobile'], 'px' ),
					'padding-left'   => self::get_css_value( $attr['containerLeftPaddingMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-countdown-container .responsive-block-editor-addons-countdown-items' => array(
					'flex-direction' => $flexColumn,
					'align-items'    => 'center',
				),
			);

			$tablet_selectors = array(
				' .responsive-block-editor-addons-countdown-box-stylings' => array(
					'height'           => self::get_css_value( $attr['boxHeightTablet'], 'px' ),
					'width'            => self::get_css_value( $attr['boxWidthTablet'], 'px' ),
					'margin'           => self::get_css_value( $attr['boxMarginTablet'], 'px' ),
					'padding'          => $attr['boxTopPaddingTablet'] . 'px ' . $attr['boxRightPaddingTablet'] . 'px ' . $attr['boxBottomPaddingTablet'] . 'px ' . $attr['boxLeftPaddingTablet'] . 'px',
					'border'           => $attr['boxBorderSize'] . 'px ' . $attr['boxBorderStyle'] . ' ' . $attr['boxBorderColor'],
					'border-radius'    => $attr['borderRadiusTopLeft'] . 'px ' . $attr['borderRadiusTopRight'] . 'px ' . $attr['borderRadiusBottomRight'] . 'px ' . $attr['borderRadiusBottomLeft'] . 'px',
					'background-color' => $attr['boxBackgroundColor'],
					'box-shadow'       => $attr['boxShadowHOffset'] . 'px ' . $attr['boxShadowVOffset'] . 'px ' . $attr['boxShadowBlur'] . 'px ' . $attr['boxShadowSpread'] . 'px ' . $attr['boxShadowColor'] . ' ' . $boxShadowPositionCSS,
				),

				' .responsive-block-editor-addons-countdown-digits' => array(
					'font-family'     => $attr['digitFontFamily'],
					'font-size'       => self::get_css_value( $attr['digitFontSizeTablet'], 'px' ),
					'font-weight'     => $attr['digitFontWeight'],
					'letter-spacing'  => self::get_css_value( $attr['digitLetterSpacing'], 'px' ),
					'line-height'     => $attr['digitLineHeight'],
					'color'           => $attr['digitColor'],
					'display'         => $attr['displayInline'] ? 'flex' : 'block',
					'flex'            => $attr['displayInline'] ? 1 : null,
					'justify-content' => $attr['displayInline'] ? 'center' : null,
				),

				' .responsive-block-editor-addons-countdown-label' => array(
					'font-family'     => $attr['labelFontFamily'],
					'font-size'       => self::get_css_value( $attr['labelFontSizeTablet'], 'px' ),
					'font-weight'     => $attr['labelFontWeight'],
					'line-height'     => $attr['labelLineHeight'],
					'padding-left'    => self::get_css_value( $attr['labelLeftPadding'], 'px' ),
					'letter-spacing'  => self::get_css_value( $attr['labelLetterSpacing'], 'px' ),
					'color'           => $attr['labelColor'],
					'display'         => $attr['displayInline'] ? 'flex' : 'block',
					'flex'            => $attr['displayInline'] ? 1 : null,
					'justify-content' => $attr['displayInline'] ? 'flex-start' : null,
					'display'         => $displayLabels,
				),
				' .responsive-block-editor-addons-countdown-box-margins' => array(
					'margin-top'    => self::get_css_value( $attr['boxItemMarginTopTablet'], 'px' ),
					'margin-right'  => self::get_css_value( $attr['boxItemMarginRightTablet'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['boxItemMarginBottomTablet'], 'px' ),
					'margin-left'   => self::get_css_value( $attr['boxItemMarginLeftTablet'], 'px' ),
				),
				'.responsive-block-editor-addons-countdown-wrapper' => array(
					'margin-top'     => self::get_css_value( $attr['containerMarginTopTablet'], 'px' ),
					'margin-right'   => self::get_css_value( $attr['containerMarginRightTablet'], 'px' ),
					'margin-bottom'  => self::get_css_value( $attr['containerMarginBottomTablet'], 'px' ),
					'margin-left'    => self::get_css_value( $attr['containerMarginLeftTablet'], 'px' ),
					'padding-top'    => self::get_css_value( $attr['containerTopPaddingTablet'], 'px' ),
					'padding-right'  => self::get_css_value( $attr['containerRightPaddingTablet'], 'px' ),
					'padding-bottom' => self::get_css_value( $attr['containerBottomPaddingTablet'], 'px' ),
					'padding-left'   => self::get_css_value( $attr['containerLeftPaddingTablet'], 'px' ),
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-block-count-down.block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			return $css;
		}
		 /**
		  * Get Defaults for count down block
		  *
		  * @return array
		  */
		public static function get_responsive_block_count_down_default_attributes() {
			return array(
				'block_id'                     => '',
				'date'                         => '',
				'days'                         => '0',
				'hours'                        => '0',
				'minutes'                      => '0',
				'seconds'                      => '0',
				'digitDaysLabel'               => 'Days',
				'digitHoursLabel'              => 'Hours',
				'digitMinutesLabel'            => 'Minutes',
				'digitSecondsLabel'            => 'Seconds',
				'showDigitLabels'              => true,
				'showDaysBox'                  => true,
				'showHoursBox'                 => true,
				'showMinutesBox'               => true,
				'showSecondsBox'               => true,
				'digitFontFamily'              => '',
				'digitFontSize'                => 48,
				'digitFontSizeMobile'          => 14,
				'digitFontSizeTablet'          => 28,
				'digitFontWeight'              => '500',
				'digitLetterSpacing'           => 1,
				'digitLineHeight'              => 2,
				'digitColor'                   => '#fff',
				'labelFontFamily'              => '',
				'labelFontSize'                => 14,
				'labelFontSizeMobile'          => 12,
				'labelFontSizeTablet'          => 14,
				'labelColor'                   => '#fff',
				'labelLineHeight'              => 2,
				'labelFontWeight'              => '500',
				'labelLeftPadding'             => 0,
				'labelLetterSpacing'           => 1,
				'boxItemMarginTop'             => 0,
				'boxItemMarginRight'           => 0,
				'boxItemMarginBottom'          => 0,
				'boxItemMarginLeft'            => 0,
				'boxItemMarginTopTablet'       => 0,
				'boxItemMarginRightTablet'     => 0,
				'boxItemMarginBottomTablet'    => 0,
				'boxItemMarginLeftTablet'      => 0,
				'boxItemMarginTopMobile'       => 0,
				'boxItemMarginRightMobile'     => 0,
				'boxItemMarginBottomMobile'    => 0,
				'boxItemMarginLeftMobile'      => 0,
				'boxItemTextAlign'             => 'center',
				'boxHeight'                    => '',
				'boxWidth'                     => 140,
				'boxMargin'                    => 10,
				'boxHeightMobile'              => '',
				'boxWidthMobile'               => 80,
				'boxMarginMobile'              => 8,
				'boxHeightTablet'              => '',
				'boxWidthTablet'               => 140,
				'boxMarginTablet'              => 10,
				'boxTopPadding'                => 0,
				'boxRightPadding'              => 0,
				'boxBottomPadding'             => 10,
				'boxLeftPadding'               => 0,
				'boxTopPaddingMobile'          => 0,
				'boxRightPaddingMobile'        => 0,
				'boxBottomPaddingMobile'       => 10,
				'boxLeftPaddingMobile'         => 0,
				'boxTopPaddingTablet'          => 0,
				'boxRightPaddingTablet'        => 0,
				'boxBottomPaddingTablet'       => 10,
				'boxLeftPaddingTablet'         => 0,
				'showBoxBorder'                => true,
				'boxBorderColor'               => '000',
				'boxBorderSize'                => 0,
				'boxBorderStyle'               => 'solid',
				'borderRadiusTopLeft'          => 0,
				'borderRadiusTopRight'         => 0,
				'borderRadiusBottomRight'      => 0,
				'borderRadiusBottomLeft'       => 0,
				'showBoxShadow'                => true,
				'boxShadowHOffset'             => 0,
				'boxShadowVOffset'             => 0,
				'boxShadowBlur'                => 0,
				'boxShadowPosition'            => 'outset',
				'boxShadowSpread'              => 0,
				'boxShadowColor'               => '#000',
				'boxBackgroundColor'           => '#6EC1E4',
				'containerMarginTop'           => 0,
				'containerMarginRight'         => 0,
				'containerMarginBottom'        => 0,
				'containerMarginLeft'          => 0,
				'containerTopPadding'          => 0,
				'containerRightPadding'        => 0,
				'containerBottomPadding'       => 0,
				'containerLeftPadding'         => 0,
				'containerMarginTopTablet'     => 0,
				'containerMarginRightTablet'   => 0,
				'containerMarginBottomTablet'  => 0,
				'containerMarginLeftTablet'    => 0,
				'containerTopPaddingTablet'    => 0,
				'containerRightPaddingTablet'  => 0,
				'containerBottomPaddingTablet' => 0,
				'containerLeftPaddingTablet'   => 0,
				'containerMarginTopMobile'     => 0,
				'containerMarginRightMobile'   => 0,
				'containerMarginBottomMobile'  => 0,
				'containerMarginLeftMobile'    => 0,
				'containerTopPaddingMobile'    => 0,
				'containerRightPaddingMobile'  => 0,
				'containerBottomPaddingMobile' => 0,
				'containerLeftPaddingMobile'   => 0,
				'justifyItems'                 => 'center',
				'displayInline'                => false,
				'stackOnMobile'                => false,
			);
		}

		/**
		 * Get Taxonomy List CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_taxonomy_list_css( $attr, $id ) {
			$defaults = self::get_responsive_block_taxonomy_list_block_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$borderGrid        = 'none' !== $attr['gridBorderStyle'] ? self::get_css_value( $attr['gridBorderWidth'], 'px' ) . ' ' . $attr['gridBorderStyle'] . ' ' . $attr['gridBorderColor'] : 'none';
			$borderRadiusGrid  = 'none' !== $attr['gridBorderStyle'] ? self::get_css_value( $attr['gridBorderRadius'], 'px' ) : 0;
			$borderBottomColor = 'none' !== $attr['separatorStyle'] ? $attr['separatorColor'] : '';
			$borderBottomWidth = 'none' !== $attr['separatorStyle'] ? $attr['separatorWidth'] : 0;
			$boxShadow         = 'none' !== $attr['boxShadow'] ? self::get_css_value( $attr['boxShadowHOffset'], 'px' ) . ' ' . self::get_css_value( $attr['boxShadowVOffset'], 'px' ) . ' ' . self::get_css_value( $attr['boxShadowBlur'], 'px' ) . ' ' . self::get_css_value( $attr['boxShadowSpread'], 'px' ) . ' ' . $attr['boxShadowColor'] . ' ' . $attr['boxShadowPosition'] : 'none';

			$selectors = array(
				' .responsive-block-editor-addons-block-grid' => array(
					'display'               => 'grid',
					'grid-template-columns' => 'repeat(' . $attr['columns'] . ', 1fr)',
					'grid-column-gap'       => self::get_css_value( $attr['columnGap'], 'px' ),
					'grid-row-gap'          => self::get_css_value( $attr['rowGap'], 'px' ),
				),
				' .responsive-block-editor-addons-block-box' => array(
					'border'           => $borderGrid,
					'border-radius'    => $borderRadiusGrid,
					'padding'          => self::get_css_value( $attr['contentPadding'], 'px' ),
					'background-color' => $attr['bgColor'],
					'text-align'       => $attr['alignment'],
					'box-shadow'       => $boxShadow,
				),
				' .responsive-block-editor-addons-block-title' => array(
					'color'         => $attr['titleColor'],
					'margin-bottom' => self::get_css_value( $attr['titleBottomSpace'], 'px' ),
					'margin-top'    => 0,
					'font-family'   => $attr['titleFontFamily'],
					'font-size'     => self::get_css_value( $attr['titleFontSize'], 'px' ),
					'font-weight'   => $attr['titleFontWeight'],
					'line-height'   => $attr['titleLineHeight'],
				),
				' .responsive-block-editor-addons-block-count' => array(
					'color'       => $attr['countColor'],
					'font-family' => $attr['countFontFamily'],
					'font-size'   => self::get_css_value( $attr['countFontSize'], 'px' ),
					'font-weight' => $attr['countFontWeight'],
					'line-height' => $attr['countLineHeight'],
				),
				' .responsive-block-editor-addons-block-list-item' => array(
					'list-style'  => $attr['listStyle'],
					'color'       => $attr['listStyleColor'],
					'font-family' => $attr['listFontFamily'],
					'font-size'   => self::get_css_value( $attr['listFontSize'], 'px' ),
					'font-weight' => $attr['listFontWeight'],
					'line-height' => self::get_css_value( $attr['listLineHeight'], 'px' ),
				),
				' .responsive-block-editor-addons-block-list-item:hover' => array(
					'color' => $attr['listStyleColorHover'],
				),
				' .responsive-block-editor-addons-block-link-name' => array(
					'color'   => $attr['listTextColor'],
					'display' => 'inline',
				),
				' .responsive-block-editor-addons-block-link-name:hover' => array(
					'color' => $attr['listTextColorHover'],
				),
				' .responsive-block-editor-addons-block-link-wrap' => array(
					'margin-bottom' => self::get_css_value( $attr['listBottomMargin'], 'px' ),
					'margin-top'    => self::get_css_value( $attr['listBottomMargin'], 'px' ),
				),
				' .responsive-block-editor-addons-block-separator' => array(
					'border-bottom-style' => $attr['separatorStyle'],
					'border-bottom-width' => self::get_css_value( $borderBottomWidth, 'px' ),
					'border-bottom-color' => $borderBottomColor,
				),
			);

			$mobile_selectors = array(
				' .responsive-block-editor-addons-block-grid' => array(
					'display'               => 'grid',
					'grid-template-columns' => 'repeat(' . $attr['columnsMobile'] . ', 1fr)',
					'grid-column-gap'       => self::get_css_value( $attr['columnGapMobile'], 'px' ),
					'grid-row-gap'          => self::get_css_value( $attr['rowGapMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-box' => array(
					'padding' => self::get_css_value( $attr['contentPaddingMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-title' => array(
					'font-size'     => self::get_css_value( $attr['titleFontSizeMobile'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['titleBottomSpaceMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-count' => array(
					'font-size' => self::get_css_value( $attr['countFontSizeMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-list-item' => array(
					'font-size' => self::get_css_value( $attr['listFontSizeMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-link-wrap' => array(
					'margin-bottom' => self::get_css_value( $attr['listBottomMarginMobile'], 'px' ),
					'margin-top'    => self::get_css_value( $attr['listBottomMarginMobile'], 'px' ),
				),
			);

			$tablet_selectors = array(
				' .responsive-block-editor-addons-block-grid' => array(
					'display'               => 'grid',
					'grid-template-columns' => 'repeat(' . $attr['columnsTablet'] . ', 1fr)',
					'grid-column-gap'       => self::get_css_value( $attr['columnGapTablet'], 'px' ),
					'grid-row-gap'          => self::get_css_value( $attr['rowGapTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-box' => array(
					'padding' => self::get_css_value( $attr['contentPaddingTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-title' => array(
					'font-size'     => self::get_css_value( $attr['titleFontSizeTablet'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['titleBottomSpaceTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-count' => array(
					'font-size' => self::get_css_value( $attr['countFontSizeTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-list-item' => array(
					'font-size' => self::get_css_value( $attr['listFontSizeTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-link-wrap' => array(
					'margin-bottom' => self::get_css_value( $attr['listBottomMarginTablet'], 'px' ),
					'margin-top'    => self::get_css_value( $attr['listBottomMarginTablet'], 'px' ),
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-block-taxonomy-list.block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			return $css;
		}

		/**
		 * Get Defaults for Taxnomy List block
		 *
		 * @return array
		 */
		public static function get_responsive_block_taxonomy_list_block_default_attributes() {
			return array(
				'block_id'               => '',
				'columns'                => 3,
				'columnsMobile'          => 1,
				'columnsTablet'          => 2,
				'layout'                 => 'grid',
				'postType'               => 'post',
				'showEmptyTaxonomy'      => false,
				'showPostCount'          => true,
				'taxonomyType'           => 'category',
				'categories'             => '',
				'order'                  => 'desc',
				'orderBy'                => 'date',
				'postsToShow'            => '8',
				'noTaxDisplaytext'       => __( 'Taxonomy Not Available.', 'responsive-block-editor-addons' ),
				'showEmptyTaxonomy'      => false,
				'titleTag'               => 'div',
				'alignment'              => 'center',
				'listStyle'              => 'disc',
				'listStyleColor'         => '#3b3b3b',
				'listStyleColorHover'    => '#3b3b3b',
				'bgColor'                => '#f5f5f5',
				'titleColor'             => '#3b3b3b',
				'countColor'             => '#777777',
				'listTextColor'          => '#3b3b3b',
				'listTextColorHover'     => '#3b3b3b',
				'rowGap'                 => 20,
				'columnGap'              => 20,
				'titleBottomSpace'       => 15,
				'rowGapMobile'           => 20,
				'columnGapMobile'        => 20,
				'titleBottomSpaceMobile' => 15,
				'rowGapTablet'           => 20,
				'columnGapTablet'        => 20,
				'titleBottomSpaceTablet' => 15,
				'contentPadding'         => 15,
				'contentPaddingMobile'   => 15,
				'contentPaddingTablet'   => 15,
				'listBottomMargin'       => 10,
				'listBottomMarginMobile' => 10,
				'listBottomMarginTablet' => 10,
				'titleFontFamily'        => '',
				'titleFontSize'          => 16,
				'titleFontSizeMobile'    => 14,
				'titleFontSizeTablet'    => 16,
				'titleFontWeight'        => 200,
				'titleLineHeight'        => 0,
				'titleLineHeightMobile'  => 0,
				'titleLineHeightTablet'  => 0,
				'countFontFamily'        => '',
				'countFontSize'          => 16,
				'countFontSizeMobile'    => 14,
				'countFontSizeTablet'    => 16,
				'countFontWeight'        => 200,
				'countLineHeight'        => 0,
				'countLineHeightMobile'  => 0,
				'countLineHeightTablet'  => 0,
				'gridBorderStyle'        => 'solid',
				'gridBorderWidth'        => 1,
				'gridBorderRadius'       => 0,
				'gridBorderColor'        => '#e0e0e0',
				'boxShadow'              => 'none',
				'boxShadowColor'         => '',
				'boxShadowHOffset'       => 0,
				'boxShadowVOffset'       => 0,
				'boxShadowBlur'          => 0,
				'boxShadowSpread'        => 0,
				'boxShadowPosition'      => '',
				'listFontFamily'         => '',
				'listFontSize'           => 14,
				'listFontSizeMobile'     => 14,
				'listFontSizeTablet'     => 14,
				'listFontWeight'         => 200,
				'listLineHeight'         => 0,
				'listLineHeightMobile'   => 0,
				'listLineHeightTablet'   => 0,
				'separatorStyle'         => 'solid',
				'separatorColor'         => '#b2b4b5',
				'separatorWidth'         => 1,
			);
		}

		/**
		 * Get How-To Schema Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_how_to_css( $attr, $id ) {
			$defaults = self::get_responsive_block_how_to_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$border    = 'none' !== $attr['borderStyle'] ? self::get_css_value( $attr['borderWidth'], 'px' ) . ' ' . $attr['borderStyle'] . ' ' . $attr['borderColor'] : '';
			$borderRad = 'none' !== $attr['borderStyle'] ? self::get_css_value( $attr['borderRadius'], 'px' ) : '';

			$selectors = array(
				'' => array(
					'text-align' => $attr['overallAlignment'],
					'padding'    => self::get_css_value( 10, 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-main-heading' => array(
					'color'          => $attr['mainHeadingColor'],
					'font-family'    => $attr['mainHeadingFontFamily'],
					'font-size'      => self::get_css_value( $attr['mainHeadingFontSize'], 'px' ),
					'font-weight'    => $attr['mainHeadingFontWeight'],
					'margin-bottom'  => self::get_css_value( $attr['rowGap'], 'px' ),
					'letter-spacing' => self::get_css_value( $attr['mainHeadingLetterSpacing'], 'px' ),
					'line-height'    => $attr['mainHeadingLineHeight'],
				),
				' .responsive-block-editor-addons-block-how-to-sub-heading-time' => array(
					'color'          => $attr['secondaryHeadingColor'],
					'display'        => 'inline',
					'letter-spacing' => self::get_css_value( $attr['subHeadingLetterSpacing'], 'px' ),
					'line-height'    => $attr['subHeadingLineHeight'],
					'font-family'    => $attr['subHeadingFontFamily'],
					'font-size'      => self::get_css_value( $attr['subHeadingFontSize'], 'px' ),
					'font-weight'    => $attr['subHeadingFontWeight'],
					'margin-right'   => self::get_css_value( $attr['timeMargin'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-time-value' => array(
					'color'          => $attr['descriptionColor'],
					'letter-spacing' => self::get_css_value( $attr['descriptionLetterSpacing'], 'px' ),
					'line-height'    => $attr['descriptionLineHeight'],
					'font-family'    => $attr['descriptionFontFamily'],
					'font-size'      => self::get_css_value( $attr['descriptionFontSize'], 'px' ),
					'font-weight'    => $attr['descriptionFontWeight'],
				),
				' .responsive-block-editor-addons-block-how-to-sub-heading-cost' => array(
					'color'          => $attr['secondaryHeadingColor'],
					'display'        => 'inline',
					'letter-spacing' => self::get_css_value( $attr['subHeadingLetterSpacing'], 'px' ),
					'line-height'    => $attr['subHeadingLineHeight'],
					'font-family'    => $attr['subHeadingFontFamily'],
					'font-size'      => self::get_css_value( $attr['subHeadingFontSize'], 'px' ),
					'font-weight'    => $attr['subHeadingFontWeight'],
					'margin-right'   => self::get_css_value( $attr['costMargin'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-cost-value' => array(
					'color'          => $attr['descriptionColor'],
					'display'        => 'inline',
					'letter-spacing' => self::get_css_value( $attr['descriptionLetterSpacing'], 'px' ),
					'line-height'    => $attr['descriptionLineHeight'],
					'font-family'    => $attr['descriptionFontFamily'],
					'font-size'      => self::get_css_value( $attr['descriptionFontSize'], 'px' ),
					'font-weight'    => $attr['descriptionFontWeight'],
				),
				' .responsive-block-editor-addons-block-how-to-sub-heading-tools' => array(
					'color'          => $attr['secondaryHeadingColor'],
					'letter-spacing' => self::get_css_value( $attr['subHeadingLetterSpacing'], 'px' ),
					'line-height'    => $attr['subHeadingLineHeight'],
					'font-family'    => $attr['subHeadingFontFamily'],
					'font-size'      => self::get_css_value( $attr['subHeadingFontSize'], 'px' ),
					'font-weight'    => $attr['subHeadingFontWeight'],
				),
				' .responsive-block-editor-addons-block-how-to-tools-list-item' => array(
					'color'          => $attr['descriptionColor'],
					'letter-spacing' => self::get_css_value( $attr['descriptionLetterSpacing'], 'px' ),
					'font-family'    => $attr['descriptionFontFamily'],
					'font-size'      => self::get_css_value( $attr['descriptionFontSize'], 'px' ),
					'font-weight'    => $attr['descriptionFontWeight'],
					'list-style'     => $attr['toolsListStyle'],
				),
				' .responsive-block-editor-addons-block-how-to-sub-heading-materials' => array(
					'color'          => $attr['secondaryHeadingColor'],
					'letter-spacing' => self::get_css_value( $attr['subHeadingLetterSpacing'], 'px' ),
					'line-height'    => $attr['subHeadingLineHeight'],
					'font-family'    => $attr['subHeadingFontFamily'],
					'font-size'      => self::get_css_value( $attr['subHeadingFontSize'], 'px' ),
					'font-weight'    => $attr['subHeadingFontWeight'],
				),
				' .responsive-block-editor-addons-block-how-to-materials-list-item' => array(
					'color'          => $attr['descriptionColor'],
					'letter-spacing' => self::get_css_value( $attr['descriptionLetterSpacing'], 'px' ),
					'font-family'    => $attr['descriptionFontFamily'],
					'font-size'      => self::get_css_value( $attr['descriptionFontSize'], 'px' ),
					'font-weight'    => $attr['descriptionFontWeight'],
					'list-style'     => $attr['materialsListStyle'],
				),
				' .responsive-block-editor-addons-block-how-to-sub-heading-steps' => array(
					'color'          => $attr['secondaryHeadingColor'],
					'display'        => 'inline',
					'letter-spacing' => self::get_css_value( $attr['subHeadingLetterSpacing'], 'px' ),
					'line-height'    => $attr['subHeadingLineHeight'],
					'font-family'    => $attr['subHeadingFontFamily'],
					'font-size'      => self::get_css_value( $attr['subHeadingFontSize'], 'px' ),
					'font-weight'    => $attr['subHeadingFontWeight'],
				),
				' .responsive-block-editor-addons-block-how-to-time-area' => array(
					'margin-top' => self::get_css_value( $attr['rowGap'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-cost-area' => array(
					'margin-top' => self::get_css_value( $attr['rowGap'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-tools-area' => array(
					'margin-top' => self::get_css_value( $attr['rowGap'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-materials-area' => array(
					'margin-top' => self::get_css_value( $attr['rowGap'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-steps-area' => array(
					'margin-top' => self::get_css_value( $attr['rowGap'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-main-image' => array(
					'border'        => $border,
					'border-radius' => $borderRad,
				),
				' .responsive-block-editor-addons-block-how-to-steps .wp-block-responsive-block-editor-addons-info-block' => array(
					'margin-top' => self::get_css_value( $attr['stepsMargin'], 'px' ),
				),
			);

			$mobile_selectors = array(
				' .responsive-block-editor-addons-block-how-to-main-heading' => array(
					'line-height'   => $attr['mainHeadingLineHeight'],
					'font-size'     => self::get_css_value( $attr['mainHeadingFontSizeMobile'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['rowGapMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-sub-heading-time' => array(
					'line-height'  => $attr['subHeadingLineHeight'],
					'font-weight'  => self::get_css_value( $attr['subHeadingFontSizeMobile'], 'px' ),
					'margin-right' => self::get_css_value( $attr['timeMarginMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-sub-heading-cost' => array(
					'line-height'  => $attr['subHeadingLineHeight'],
					'font-weight'  => self::get_css_value( $attr['subHeadingFontSizeMobile'], 'px' ),
					'margin-right' => self::get_css_value( $attr['costMarginMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-sub-heading-tools' => array(
					'line-height' => $attr['subHeadingLineHeight'],
					'font-weight' => self::get_css_value( $attr['subHeadingFontSizeMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-sub-heading-materials' => array(
					'line-height' => $attr['subHeadingLineHeight'],
					'font-weight' => self::get_css_value( $attr['subHeadingFontSizeMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-sub-heading-steps' => array(
					'line-height' => $attr['subHeadingLineHeight'],
					'font-weight' => self::get_css_value( $attr['subHeadingFontSizeMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-time-value' => array(
					'line-height' => $attr['descriptionLineHeight'],
					'font-size'   => self::get_css_value( $attr['descriptionFontSizeMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-cost-value' => array(
					'line-height' => $attr['descriptionLineHeight'],
					'font-size'   => self::get_css_value( $attr['descriptionFontSizeMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-tools-list-item' => array(
					'line-height' => $attr['descriptionLineHeight'],
					'font-size'   => self::get_css_value( $attr['descriptionFontSizeMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-materials-list-item' => array(
					'line-height' => $attr['descriptionLineHeight'],
					'font-size'   => self::get_css_value( $attr['descriptionFontSizeMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-time-area' => array(
					'margin-top' => self::get_css_value( $attr['rowGapMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-cost-area' => array(
					'margin-top' => self::get_css_value( $attr['rowGapMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-tools-area' => array(
					'margin-top' => self::get_css_value( $attr['rowGapMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-materials-area' => array(
					'margin-top' => self::get_css_value( $attr['rowGapMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-steps-area' => array(
					'margin-top' => self::get_css_value( $attr['rowGapMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-steps .wp-block-responsive-block-editor-addons-info-block' => array(
					'margin-top' => self::get_css_value( $attr['stepsMarginMobile'], 'px' ),
				),

			);

			$tablet_selectors = array(
				' .responsive-block-editor-addons-block-how-to-main-heading' => array(
					'line-height'   => $attr['mainHeadingLineHeight'],
					'font-size'     => self::get_css_value( $attr['mainHeadingFontSizeTablet'], 'px' ),
					'margin-bottom' => self::get_css_value( $attr['rowGapTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-sub-heading-time' => array(
					'line-height'  => $attr['subHeadingLineHeight'],
					'font-weight'  => self::get_css_value( $attr['subHeadingFontSizeTablet'], 'px' ),
					'margin-right' => self::get_css_value( $attr['timeMarginTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-sub-heading-cost' => array(
					'line-height'  => $attr['subHeadingLineHeight'],
					'font-weight'  => self::get_css_value( $attr['subHeadingFontSizeTablet'], 'px' ),
					'margin-right' => self::get_css_value( $attr['costMarginTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-sub-heading-tools' => array(
					'line-height' => $attr['subHeadingLineHeight'],
					'font-weight' => self::get_css_value( $attr['subHeadingFontSizeTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-sub-heading-materials' => array(
					'line-height' => $attr['subHeadingLineHeight'],
					'font-weight' => self::get_css_value( $attr['subHeadingFontSizeTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-sub-heading-steps' => array(
					'line-height' => $attr['subHeadingLineHeight'],
					'font-weight' => self::get_css_value( $attr['subHeadingFontSizeTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-time-value' => array(
					'line-height' => $attr['descriptionLineHeight'],
					'font-size'   => self::get_css_value( $attr['descriptionFontSizeTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-cost-value' => array(
					'line-height' => $attr['descriptionLineHeight'],
					'font-size'   => self::get_css_value( $attr['descriptionFontSizeTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-tools-list-item' => array(
					'line-height' => $attr['descriptionLineHeight'],
					'font-size'   => self::get_css_value( $attr['descriptionFontSizeTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-materials-list-item' => array(
					'line-height' => $attr['descriptionLineHeight'],
					'font-size'   => self::get_css_value( $attr['descriptionFontSizeTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-time-area' => array(
					'margin-top' => self::get_css_value( $attr['rowGapTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-cost-area' => array(
					'margin-top' => self::get_css_value( $attr['rowGapTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-tools-area' => array(
					'margin-top' => self::get_css_value( $attr['rowGapTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-materials-area' => array(
					'margin-top' => self::get_css_value( $attr['rowGapTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-steps-area' => array(
					'margin-top' => self::get_css_value( $attr['rowGapTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-how-to-steps .wp-block-responsive-block-editor-addons-info-block' => array(
					'margin-top' => self::get_css_value( $attr['stepsMarginTablet'], 'px' ),
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-block-how-to.block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			return $css;
		}
		 /**
		  * Get Defaults for how to block
		  *
		  * @return array
		  */
		public static function get_responsive_block_how_to_default_attributes() {
			return array(
				'block_id'                    => '',
				'overallAlignment'            => 'left',
				'mainHeadingColor'            => '',
				'secondaryHeadingColor'       => '',
				'descriptionColor'            => '',
				'mainHeadingFontFamily'       => '',
				'mainHeadingFontSize'         => 12,
				'mainHeadingFontSizeMobile'   => 12,
				'mainHeadingFontSizeTablet'   => 14,
				'mainHeadingFontWeight'       => '',
				'mainHeadingLineHeight'       => 0,
				'mainHeadingLineHeightMobile' => 0,
				'mainHeadingLineHeightTablet' => 0,
				'mainHeadingLetterSpacing'    => 0,
				'subHeadingFontFamily'        => '',
				'subHeadingFontSize'          => 12,
				'subHeadingFontSizeMobile'    => 12,
				'subHeadingFontSizeTablet'    => 14,
				'subHeadingFontWeight'        => '',
				'subHeadingLineHeight'        => 0,
				'subHeadingLineHeightMobile'  => 0,
				'subHeadingLineHeightTablet'  => 0,
				'subHeadingLetterSpacing'     => 0,
				'descriptionFontFamily'       => '',
				'descriptionFontSize'         => 12,
				'descriptionFontSizeMobile'   => 12,
				'descriptionFontSizeTablet'   => 14,
				'descriptionFontWeight'       => '',
				'descriptionLineHeight'       => 0,
				'descriptionLineHeightMobile' => 0,
				'descriptionLineHeightTablet' => 0,
				'descriptionLetterSpacing'    => 0,
				'timeMargin'                  => 10,
				'costMargin'                  => 10,
				'rowGap'                      => 10,
				'timeMarginMobile'            => 10,
				'costMarginMobile'            => 10,
				'rowGapMobile'                => 10,
				'timeMarginTablet'            => 10,
				'costMarginTablet'            => 10,
				'rowGapTablet'                => 10,
				'toolsListStyle'              => 'none',
				'materialsListStyle'          => 'none',
				'borderStyle'                 => 'none',
				'borderRadius'                => 0,
				'borderWidth'                 => 1,
				'borderColor'                 => '',
				'stepsMargin'                 => 10,
				'stepsMarginMobile'           => 10,
				'stepsMarginTablet'           => 10,
			);
		}

		/**
		 * Get Inline Notice Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_inline_notice_css( $attr, $id ) {
			$defaults = self::get_responsive_block_inline_notice_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$notice = $attr['noticeType'];
			switch ( $notice ) {
				case 'warning':
					$noticeTypeColor = '#ffd54f';
					break;
				case 'info':
					$alignmentnoticeTypeColor = '#2091e1';
					break;
				case 'error':
					$noticeTypeColor = '#d9534f';
					break;
				case 'notification':
					$noticeTypeColor = '#40ba7b';
					break;
				default:
					$noticeTypeColor = $attr['noticeBoxColor'];
			}

			$noticeAreaBorder = $attr['layout'] === 'simple' ? '1px solid ' . $noticeTypeColor : 'none';
			$modernBorder     = '1px solid' . ' ' . $noticeTypeColor;
			$borderValues     = $attr['layout'] === 'modern' ? $modernBorder : 'none';
			$borderLeft       = $attr['layout'] === 'simple' ? '5px solid ' . $noticeTypeColor : $modernBorder;
			$noticeBgColor    = $attr['layout'] === 'modern' ? $noticeTypeColor : '';

			$desktopDisplay = $attr['blockHideDesktop'] ? 'none' : 'block';
			$mobileDisplay  = $attr['blockHideMobile'] ? 'none' : 'block';
			$tabletDisplay  = $attr['blockHideTablet'] ? 'none' : 'block';

			$selectors = array(
				' ' => array(
					'text-align' => $attr['noticeAlignment'],
					'padding'    => '' . self::get_css_value( $attr['blockTopPadding'], 'px' ) . ' ' . self::get_css_value( $attr['blockRightPadding'], 'px' ) . ' ' . self::get_css_value( $attr['blockBottomPadding'], 'px' ) . ' ' . self::get_css_value( $attr['blockLeftPadding'], 'px' ) . ' !important',
					'margin'     => '' . self::get_css_value( $attr['blockTopMargin'], 'px' ) . ' ' . self::get_css_value( $attr['blockRightMargin'], 'px' ) . ' ' . self::get_css_value( $attr['blockBottomMargin'], 'px' ) . ' ' . self::get_css_value( $attr['blockLeftMargin'], 'px' ) . ' !important',
					'z-index'    => $attr['blockZIndex'],
				),
				' .responsive-block-editor-addons-block-inline-notice-title-area' => array(
					'background-color' => $noticeTypeColor,
					'border-left'      => $noticeAreaBorder,
					'display'          => 'flex',
					'align-items'      => 'center',
					'justify-content'  => 'space-between',
				),
				' .responsive-block-editor-addons-block-inline-notice-title' => array(
					'color'          => $attr['titleColor'],
					'font-family'    => $attr['titleFontFamily'],
					'font-size'      => self::get_css_value( $attr['titleFontSize'], 'px' ),
					'font-weight'    => $attr['titleFontWeight'],
					'line-height'    => $attr['titleLineHeight'],
					'letter-spacing' => self::get_css_value( $attr['titleLetterSpacing'], 'px' ),
					'margin'         => 0,
					'padding'        => '' . self::get_css_value( $attr['titlePaddingVertical'], 'px' ) . ' ' . self::get_css_value( $attr['titlePaddingHorizontal'], 'px' ),
				),
				' .responsive-block-editor-addons-block-inline-notice-svg > svg' => array(
					'height'       => '17px',
					'width'        => '17px',
					'margin-right' => '10px',
				),
				' .responsive-block-editor-addons-block-inline-notice-content-area' => array(
					'background-color' => $attr['contentBgColor'],
					'border-bottom'    => $borderValues,
					'border-left'      => $borderLeft,
					'border-right'     => $borderValues,
				),
				' .responsive-block-editor-addons-block-inline-notice-content' => array(
					'color'          => $attr['contentColor'],
					'font-family'    => $attr['contentFontFamily'],
					'font-size'      => self::get_css_value( $attr['contentFontSize'], 'px' ),
					'font-weight'    => $attr['contentFontWeight'],
					'line-height'    => $attr['contentLineHeight'],
					'letter-spacing' => self::get_css_value( $attr['contentLetterSpacing'], 'px' ),
					'padding'        => '' . self::get_css_value( $attr['contentPaddingVertical'], 'px' ) . ' ' . self::get_css_value( $attr['contentPaddingHorizontal'], 'px' ),
				),
			);

			$mobile_selectors = array(
				' ' => array(
					'padding' => '' . self::get_css_value( $attr['blockTopPaddingMobile'], 'px' ) . ' ' . self::get_css_value( $attr['blockRightPaddingMobile'], 'px' ) . ' ' . self::get_css_value( $attr['blockBottomPaddingMobile'], 'px' ) . ' ' . self::get_css_value( $attr['blockLeftPaddingMobile'], 'px' ) . ' !important',
					'margin'  => '' . self::get_css_value( $attr['blockTopMarginMobile'], 'px' ) . ' ' . self::get_css_value( $attr['blockRightMarginMobile'], 'px' ) . ' ' . self::get_css_value( $attr['blockLeftBottomMobile'], 'px' ) . ' ' . self::get_css_value( $attr['blockLeftMarginMobile'], 'px' ) . ' !important',
				),
				' .responsive-block-editor-addons-block-inline-notice-title' => array(
					'font-size' => self::get_css_value( $attr['titleFontSizeMobile'], 'px' ),
					'padding'   => '' . self::get_css_value( $attr['titlePaddingVerticalMobile'], 'px' ) . ' ' . self::get_css_value( $attr['titlePaddingHorizontalMobile'], 'px' ),
				),
				' .responsive-block-editor-addons-block-inline-notice-content' => array(
					'font-size' => self::get_css_value( $attr['contentFontSizeMobile'], 'px' ),
					'padding'   => '' . self::get_css_value( $attr['contentPaddingVerticalMobile'], 'px' ) . ' ' . self::get_css_value( $attr['contentPaddingHorizontalMobile'], 'px' ),
				),
			);

			$tablet_selectors = array(
				' ' => array(
					'padding' => '' . self::get_css_value( $attr['blockTopPaddingTablet'], 'px' ) . ' ' . self::get_css_value( $attr['blockRightPaddingTablet'], 'px' ) . ' ' . self::get_css_value( $attr['blockBottomPaddingTablet'], 'px' ) . ' ' . self::get_css_value( $attr['blockLeftPaddingTablet'], 'px' ) . ' !important',
					'margin'  => '' . self::get_css_value( $attr['blockTopMarginTablet'], 'px' ) . ' ' . self::get_css_value( $attr['blockRightMarginTablet'], 'px' ) . ' ' . self::get_css_value( $attr['blockBottomMarginTablet'], 'px' ) . ' ' . self::get_css_value( $attr['blockLeftMarginTablet'], 'px' ) . ' !important',
				),
				' .responsive-block-editor-addons-block-inline-notice-title' => array(
					'font-size' => self::get_css_value( $attr['titleFontSizeTablet'], 'px' ),
					'padding'   => '' . self::get_css_value( $attr['titlePaddingVerticalTablet'], 'px' ) . ' ' . self::get_css_value( $attr['titlePaddingHorizontalTablet'], 'px' ),
				),
				' .responsive-block-editor-addons-block-inline-notice-content' => array(
					'font-size' => self::get_css_value( $attr['contentFontSizeTablet'], 'px' ),
					'padding'   => '' . self::get_css_value( $attr['contentPaddingVerticalTablet'], 'px' ) . ' ' . self::get_css_value( $attr['contentPaddingHorizontalTablet'], 'px' ),
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-block-inline-notice.block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			return $css;
		}
		 /**
		  * Get Defaults for inline notice block
		  *
		  * @return array
		  */
		public static function get_responsive_block_inline_notice_default_attributes() {
			return array(
				'block_id'                       => '',
				'blockTopPadding'                => 20,
				'blockBottomPadding'             => 20,
				'blockLeftPadding'               => 20,
				'blockRightPadding'              => 20,
				'blockTopPaddingMobile'          => 20,
				'blockBottomPaddingMobile'       => 20,
				'blockLeftPaddingMobile'         => 20,
				'blockRightPaddingMobile'        => 20,
				'blockTopPaddingTablet'          => 20,
				'blockBottomPaddingTablet'       => 20,
				'blockLeftPaddingTablet'         => 20,
				'blockRightPaddingTablet'        => 20,
				'blockTopMargin'                 => 20,
				'blockBottomMargin'              => 20,
				'blockLeftMargin'                => 20,
				'blockRightMargin'               => 20,
				'blockTopMarginMobile'           => 20,
				'blockBottomMarginMobile'        => 20,
				'blockLeftMarginMobile'          => 20,
				'blockRightMarginMobile'         => 20,
				'blockTopMarginTablet'           => 20,
				'blockBottomMarginTablet'        => 20,
				'blockLeftMarginTablet'          => 20,
				'blockRightMarginTablet'         => 20,
				'blockZIndex'                    => 0,
				'cookies'                        => false,
				'cookie_id'                      => '',
				'close_cookies_days'             => 1,
				'contentBgColor'                 => '',
				'contentColor'                   => '',
				'contentFontFamily'              => '',
				'contentFontSize'                => 16,
				'contentFontSizeMobile'          => 16,
				'contentFontSizeTablet'          => 16,
				'contentFontWeight'              => '600',
				'contentLineHeight'              => 1,
				'contentLetterSpacing'           => 0,
				'contentPaddingVertical'         => 20,
				'contentPaddingHorizontal'       => 20,
				'contentPaddingVerticalMobile'   => 2,
				'contentPaddingHorizontalMobile' => 2,
				'contentPaddingVerticalTablet'   => 5,
				'contentPaddingHorizontalTablet' => 5,
				'headingTag'                     => 'h4',
				'layout'                         => 'modern',
				'noticeAlignment'                => 'left',
				'noticeBoxColor'                 => '#FFD54F',
				'noticeContent'                  => '',
				'noticeDismiss'                  => '',
				'noticeType'                     => 'default',
				'noticeTitle'                    => '',
				'titleColor'                     => '',
				'titleFontFamily'                => '',
				'titleFontSize'                  => 20,
				'titleFontSizeMobile'            => 20,
				'titleFontSizeTablet'            => 20,
				'titleFontWeight'                => '600',
				'titleLineHeight'                => 1,
				'titleLetterSpacing'             => 0,
				'titlePaddingVertical'           => 15,
				'titlePaddingHorizontal'         => 15,
				'titlePaddingVerticalMobile'     => 2,
				'titlePaddingHorizontalMobile'   => 2,
				'titlePaddingVerticalTablet'     => 5,
				'titlePaddingHorizontalTablet'   => 5,
			);
		}

		/**
		 * Get WP Search Block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_wp_search_css( $attr, $id ) {
			$defaults = self::get_responsive_block_wp_search_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$width = 'px' === $attr['inputWidthType'] ? self::get_css_value( $attr['inputWidth'], 'px' ) : $attr['inputWidth'] . '%';

			$bgColor = 'minimal' === $attr['layout'] ? $attr['inputBackgroundColor'] : '';

			$boxShadowPositionCSS = $attr['boxShadowPosition'];
			if ( 'outset' === $attr['boxShadowPosition'] ) {
				$boxShadowPositionCSS = '';
			}
			$boxShadow = self::get_css_value( $attr['boxShadowHOffset'], 'px' ) . ' ' . self::get_css_value( $attr['boxShadowVOffset'], 'px' ) . ' ' . self::get_css_value( $attr['boxShadowBlur'], 'px' ) . ' ' . self::get_css_value( $attr['boxShadowSpread'], 'px' ) . ' ' . $attr['boxShadowColor'] . ' ' . $boxShadowPositionCSS;

			$buttonSize = 0 === $attr['buttonWidth'] ? 'button' === $attr['buttonType'] ? 50 : 110 : $attr['buttonWidth'];

			$icon_color = '' === $attr['iconColor'] ? 'classic' === $attr['layout'] ? '#ffffff' : '#1e1e1e' : $attr['iconColor'];

			$input_box_padding     = self::get_css_value( $attr['inputTopPadding'], 'px' ) . ' ' . self::get_css_value( $attr['inputRightPadding'], 'px' ) . ' ' . self::get_css_value( $attr['inputBottomPadding'], 'px' ) . ' ' . self::get_css_value( $attr['inputLeftPadding'], 'px' );
			$button_padding        = 'classic' === $attr['layout'] ? $input_box_padding : 0;
			$icon_and_text_padding = 'minimal' === $attr['layout'] ? $input_box_padding : 0;

			$input_box_padding_mobile     = self::get_css_value( $attr['inputTopPaddingMobile'], 'px' ) . ' ' . self::get_css_value( $attr['inputRightPaddingMobile'], 'px' ) . ' ' . self::get_css_value( $attr['inputBottomPaddingMobile'], 'px' ) . ' ' . self::get_css_value( $attr['inputLeftPaddingMobile'], 'px' );
			$button_padding_mobile        = 'classic' === $attr['layout'] ? $input_box_padding_mobile : 0;
			$icon_and_text_padding_mobile = 'minimal' === $attr['layout'] ? $input_box_padding_mobile : 0;

			$input_box_padding_tablet     = self::get_css_value( $attr['inputTopPaddingTablet'], 'px' ) . ' ' . self::get_css_value( $attr['inputRightPaddingTablet'], 'px' ) . ' ' . self::get_css_value( $attr['inputBottomPaddingTablet'], 'px' ) . ' ' . self::get_css_value( $attr['inputLeftPaddingTablet'], 'px' );
			$button_padding_tablet        = 'classic' === $attr['layout'] ? $input_box_padding_tablet : 0;
			$icon_and_text_padding_tablet = 'minimal' === $attr['layout'] ? $input_box_padding_tablet : 0;

			$border = `0 ${blockBorderStyle} ${blockBorderColor}`;
	if ( $blockBorderStyle !== '' ) {
		$border = self::get_css_value( $attr['blockBorderWidth'], 'px' ) . ' ' . $attr['blockBorderStyle'] . ' ' . $attr['blockBorderColor'];
	}
			$inputBorderTop    = $border;
			$inputBorderBottom = $border;
			$inputBorderLeft   = 'classic' === $attr['layout'] ? $border : 0;
			$inputBorderRight  = 'classic' === $attr['layout'] ? 0 : $border;

			$iconBorderTop    = 'minimal' === $attr['layout'] ? $border : 0;
			$iconBorderBottom = 'minimal' === $attr['layout'] ? $border : 0;
			$iconBorderLeft   = 'minimal' === $attr['layout'] ? $border : 0;
			$iconBorderRight  = 0;

			$borderRadius       = self::get_css_value( $attr['blockBorderRadius'], 'px' );
			$inputBorderRadius  = 'classic' === $attr['layout'] ? $borderRadius . ' 0 0 ' . $borderRadius : '0  ' . $borderRadius . ' ' . $borderRadius . ' 0';
			$iconBorderRadius   = 'minimal' === $attr['layout'] ? $borderRadius . ' 0 0 ' . $borderRadius : 0;
			$buttonBorderRadius = '0  ' . $borderRadius . ' ' . $borderRadius . ' 0';

			$mobile_selectors = array();
			$tablet_selectors = array();

			$selectors = array(
				' ' => array(
					'width' => $width,
				),
				' .responsive-block-editor-addons-search-form__input' => array(
					'border-top'       => $inputBorderTop . ' !important',
					'border-right'     => $inputBorderRight . ' !important',
					'border-bottom'    => $inputBorderBottom . ' !important',
					'border-left'      => $inputBorderLeft . ' !important',
					'border-radius'    => $inputBorderRadius,
					'color'            => $attr['inputTextColor'],
					'background-color' => $attr['inputBackgroundColor'],
					'font-size'        => self::get_css_value( $attr['inputFontSize'], 'px' ),
					'font-family'      => $attr['inputFontFamily'],
					'font-weight'      => $attr['inputFontWeight'],
					'line-height'      => $attr['inputLineHeight'],
					'padding'          => $input_box_padding,
				),
				' .responsive-block-editor-addons-search-form__input::placeholder' => array(
					'color'   => $attr['inputTextColor'],
					'opacity' => 0.6,
				),
				' .responsive-block-editor-addons-search-submit' => array(
					'border-top'       => $border . ' !important',
					'border-bottom'    => $border . ' !important',
					'border-left'      => 0 . ' !important',
					'border-right'     => $border . ' !important',
					'border-radius'    => $buttonBorderRadius,
					'padding'          => $button_padding,
					'display'          => 'flex',
					'align-items'      => 'center',
					'justify-content'  => 'center',
					'width'            => self::get_css_value( $buttonSize, 'px' ),
					'background-color' => $attr['buttonBackgroundColor'],
				),
				' .responsive-block-editor-addons-search-submit:hover' => array(
					'background-color' => $attr['buttonBackgroundHoverColor'],
				),
				' .responsive-block-editor-addons-search-icon-wrap' => array(
					'border-top'       => $iconBorderTop . ' !important',
					'border-bottom'    => $iconBorderBottom . ' !important',
					'border-left'      => $iconBorderLeft . ' !important',
					'border-right'     => $iconBorderRight . ' !important',
					'border-radius'    => $iconBorderRadius,
					'display'          => 'flex',
					'align-items'      => 'center',
					'justify-content'  => 'center',
					'background-color' => $bgColor,
					'width'            => 'fit-content',
					'padding'          => $icon_and_text_padding,
				),
				' .responsive-block-editor-addons-search-icon-wrap svg' => array(
					'width'  => self::get_css_value( $attr['iconSize'], 'px' ),
					'height' => self::get_css_value( $attr['iconSize'], 'px' ),
					'fill'   => $icon_color,
				),
				' .responsive-block-editor-addons-search-icon-wrap svg:hover' => array(
					'fill' => $attr['iconHoverColor'],
				),
				' .responsive-block-editor-addons-search-button-text' => array(
					'color'       => $attr['buttonTextColor'],
					'font-family' => $attr['buttonFontFamily'],
					'font-size'   => self::get_css_value( $attr['buttonFontSize'], 'px' ),
					'font-weight' => $attr['buttonFontWeight'],
					'line-height' => $attr['buttonLineHeight'],
					'padding'     => $icon_and_text_padding,
				),
				' .responsive-block-editor-addons-search-button-text:hover' => array(
					'color' => $attr['buttonTextHoverColor'],
				),
			);

			if ( 'inset' === $attr['boxShadowPosition'] ) {
				$selectors[' .responsive-block-editor-addons-search-form__input']['box-shadow'] = $boxShadow;
			} else {
				$selectors[' ']['box-shadow'] = $boxShadow;
			}

			$mobile_selectors = array(
				' .responsive-block-editor-addons-search-form__input' => array(
					'font-size' => self::get_css_value( $attr['inputFontSizeMobile'], 'px' ),
					'padding'   => $input_box_padding_mobile,
				),
				' .responsive-block-editor-addons-search-icon-wrap' => array(
					'padding' => $icon_and_text_padding_mobile,
				),
				' .responsive-block-editor-addons-search-button-text' => array(
					'font-size' => self::get_css_value( $attr['buttonFontSizeMobile'], 'px' ),
					'padding'   => $icon_and_text_padding_mobile,
				),
				' .responsive-block-editor-addons-search-submit' => array(
					'padding' => $button_padding_mobile,
				),
			);

			$tablet_selectors = array(
				' .responsive-block-editor-addons-search-form__input' => array(
					'font-size' => self::get_css_value( $attr['inputFontSizeTablet'], 'px' ),
					'padding'   => $input_box_padding_tablet,
				),
				' .responsive-block-editor-addons-search-icon-wrap' => array(
					'padding' => $icon_and_text_padding_tablet,
				),
				' .responsive-block-editor-addons-search-button-text' => array(
					'font-size' => self::get_css_value( $attr['buttonFontSizeTablet'], 'px' ),
					'padding'   => $icon_and_text_padding_tablet,
				),
				' .responsive-block-editor-addons-search-submit' => array(
					'padding' => $button_padding_tablet,
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-block-wp-search.block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			return $css;
}
		 /**
		  * Get Defaults for wp search block
		  *
		  * @return array
		  */
public static function get_responsive_block_wp_search_default_attributes() {
	return array(
		'layout'                     => 'classic',
		'inputWidth'                 => 100,
		'inputWidthType'             => '%',
		'inputTextColor'             => '',
		'inputBackgroundColor'       => '#eceeef',
		'blockBorderColor'           => '',
		'blockBorderRadius'          => 1,
		'blockBorderStyle'           => 'none',
		'blockBorderWidth'           => 0,
		'inputTopPadding'            => 15,
		'inputRightPadding'          => 15,
		'inputRightPadding'          => 15,
		'inputRightPadding'          => 15,
		'inputBottomPadding'         => 15,
		'inputLeftPadding'           => 15,
		'inputTopPaddingMobile'      => 15,
		'inputRightPaddingMobile'    => 15,
		'inputBottomPaddingMobile'   => 15,
		'inputLeftPaddingMobile'     => 15,
		'inputTopPaddingTablet'      => 15,
		'inputRightPaddingTablet'    => 15,
		'inputBottomPaddingTablet'   => 15,
		'inputLeftPaddingTablet'     => 15,
		'inputFontFamily'            => '',
		'inputFontSize'              => 16,
		'inputFontSizeMobile'        => 16,
		'inputFontSizeTablet'        => 16,
		'inputFontWeight'            => '100',
		'inputLineHeight'            => 1,
		'boxShadowColor'             => '',
		'boxShadowHOffset'           => 0,
		'boxShadowVOffset'           => 0,
		'boxShadowBlur'              => '',
		'boxShadowSpread'            => '',
		'boxShadowPosition'          => 'outset',
		'iconSize'                   => 16,
		'iconColor'                  => '',
		'iconHoverColor'             => '',
		'buttonType'                 => 'button',
		'buttonWidth'                => 0,
		'buttonBackgroundColor'      => '#ff6f61',
		'buttonBackgroundHoverColor' => '',
		'buttonTextColor'            => '#313131',
		'buttonTextHoverColor'       => '',
		'buttonFontFamily'           => '',
		'buttonFontSize'             => 16,
		'buttonFontSizeMobile'       => 16,
		'buttonFontSizeTablet'       => 16,
		'buttonFontWeight'           => '100',
		'buttonLineHeight'           => 1,
	);
}

/**
 * Get Call/Mail Button CSS
 *
 * @param array  $attr The block attributes.
 * @param string $id The selector ID.
 * @return array Styles.
 */
public static function get_responsive_block_call_mail_button_css( $attr, $id ) {
	$defaults = self::get_responsive_block_call_mail_button_default_attributes();
	$attr     = array_merge( $defaults, (array) $attr );

	$mobile_selectors = array();
	$tablet_selectors = array();

	$button_width_css = 'fit-content';

	$button_width_css        = 'fixed' === $attr['buttonWidthType'] ? 'fit-content' : ( 'flexible' === $attr['buttonWidthType'] ? self::get_css_value( $attr['buttonWidth'], 'px' ) : self::get_css_value( 100, '%' ) );
	$button_width_css_mobile = 'fixed' === $attr['buttonWidthType'] ? 'fit-content' : ( 'flexible' === $attr['buttonWidthType'] ? self::get_css_value( $attr['buttonWidthMobile'], 'px' ) : self::get_css_value( 100, '%' ) );
	$button_width_css_tablet = 'fixed' === $attr['buttonWidthType'] ? 'fit-content' : ( 'flexible' === $attr['buttonWidthType'] ? self::get_css_value( $attr['buttonWidthTablet'], 'px' ) : self::get_css_value( 100, '%' ) );

	$button_border           = '1px solid ' . $attr['buttonColor'];
	$button_border_hover     = '1px solid ' . $attr['buttonColorHover'];
	$button_border_radius    = true === $attr['buttonRounded'] ? self::get_css_value( $attr['buttonRadius'], 'px' ) : 0;
	$text_color              = true === $attr['buttonTransparent'] ? $attr['buttonColor'] : $attr['buttonTextColor'];
	$button_background       = $attr['buttonTransparent'] ? '' : $attr['buttonColor'];
	$text_color_hover        = $attr['buttonTransparent'] ? $attr['buttonColorHover'] : $attr['buttonTextColorHover'];
	$button_background_hover = $attr['buttonTransparent'] ? '' : $attr['buttonColorHover'];

	$selectors = array(
		' ' => array(
			'margin'  => self::get_css_value( $attr['blockTopMargin'], 'px' ) . ' ' . self::get_css_value( $attr['blockRightMargin'], 'px' ) . ' ' . self::get_css_value( $attr['blockBottomMargin'], 'px' ) . ' ' . self::get_css_value( $attr['blockLeftMargin'], 'px' ) . ' !important',
			'padding' => self::get_css_value( $attr['blockTopPadding'], 'px' ) . ' ' . self::get_css_value( $attr['blockRightPadding'], 'px' ) . ' ' . self::get_css_value( $attr['blockBottomPadding'], 'px' ) . ' ' . self::get_css_value( $attr['blockLeftPadding'], 'px' ) . ' !important',
		),
		' .responsive-block-editor-addons-call-mail-button-button-container' => array(
			'width'            => $button_width_css,
			'border'           => $button_border,
			'background-color' => $button_background,
			'border-radius'    => $button_border_radius,
		),
		' .responsive-block-editor-addons-call-mail-button-text' => array(
			'color'       => $text_color,
			'font-family' => $attr['textFontFamily'],
			'font-size'   => self::get_css_value( $attr['textFontSize'], 'px' ) . ' !important',
			'font-weight' => $attr['textFontWeight'],
			'line-height' => $attr['textLineHeight'],
		),
		' .responsive-block-editor-addons-call-mail-button-icon' => array(
			'fill' => $text_color,
		),
		' .responsive-block-editor-addons-call-mail-button-icon svg' => array(
			'height' => self::get_css_value( $attr['iconSize'], 'px' ) . ' !important',
			'width'  => self::get_css_value( $attr['iconSize'], 'px' ) . ' !important',
		),
		' .responsive-block-editor-addons-call-mail-button-button-container:hover' => array(
			'border'           => $button_border_hover,
			'background-color' => $button_background_hover,
		),
		' .responsive-block-editor-addons-call-mail-button-text:hover' => array(
			'color' => $text_color_hover,
		),
		' .responsive-block-editor-addons-call-mail-button-icon:hover' => array(
			'fill' => $text_color_hover,
		),
		' .responsive-block-editor-addons-call-mail-button-icon-iconPosition-left' => array(
			'margin-right' => self::get_css_value( $attr['iconTextGap'], 'px' ),
		),
		' .responsive-block-editor-addons-call-mail-button-icon-iconPosition-right' => array(
			'margin-left' => self::get_css_value( $attr['iconTextGap'], 'px' ),
		),
	);

	$mobile_selectors = array(
		' .responsive-block-editor-addons-call-mail-button-button-container' => array(
			'width' => $button_width_css_mobile,
		),
		' .responsive-block-editor-addons-call-mail-button-text' => array(
			'font-size' => self::get_css_value( $attr['textFontSizeMobile'], 'px' ) . ' !important',
		),
		' .responsive-block-editor-addons-call-mail-button-icon svg' => array(
			'height' => self::get_css_value( $attr['iconSizeMobile'], 'px' ) . ' !important',
			'width'  => self::get_css_value( $attr['iconSizeMobile'], 'px' ) . ' !important',
		),
		' ' => array(
			'margin'  => self::get_css_value( $attr['blockTopMarginMobile'], 'px' ) . ' ' . self::get_css_value( $attr['blockRightMarginMobile'], 'px' ) . ' ' . self::get_css_value( $attr['blockBottomMarginMobile'], 'px' ) . ' ' . self::get_css_value( $attr['blockLeftMarginMobile'], 'px' ) . ' !important',
			'padding' => self::get_css_value( $attr['blockTopPaddingMobile'], 'px' ) . ' ' . self::get_css_value( $attr['blockRightPaddingMobile'], 'px' ) . ' ' . self::get_css_value( $attr['blockBottomPaddingMobile'], 'px' ) . ' ' . self::get_css_value( $attr['blockLeftPaddingMobile'], 'px' ) . ' !important',
		),
		' .responsive-block-editor-addons-call-mail-button-icon-iconPosition-left' => array(
			'margin-right' => self::get_css_value( $attr['iconTextGapMobile'], 'px' ),
		),
		' .responsive-block-editor-addons-call-mail-button-icon-iconPosition-right' => array(
			'margin-left' => self::get_css_value( $attr['iconTextGapMobile'], 'px' ),
		),
	);

	$tablet_selectors = array(
		' .responsive-block-editor-addons-call-mail-button-button-container' => array(
			'width' => $button_width_css_tablet,
		),
		' .responsive-block-editor-addons-call-mail-button-text' => array(
			'font-size' => self::get_css_value( $attr['textFontSizeTablet'], 'px' ) . ' !important',
		),
		' .responsive-block-editor-addons-call-mail-button-icon svg' => array(
			'height' => self::get_css_value( $attr['iconSizeTablet'], 'px' ) . ' !important',
			'width'  => self::get_css_value( $attr['iconSizeTablet'], 'px' ) . ' !important',
		),
		' ' => array(
			'margin'  => self::get_css_value( $attr['blockTopMarginTablet'], 'px' ) . ' ' . self::get_css_value( $attr['blockRightMarginTablet'], 'px' ) . ' ' . self::get_css_value( $attr['blockBottomMarginTablet'], 'px' ) . ' ' . self::get_css_value( $attr['blockLeftMarginTablet'], 'px' ) . ' !important',
			'padding' => self::get_css_value( $attr['blockTopPaddingTablet'], 'px' ) . ' ' . self::get_css_value( $attr['blockRightPaddingTablet'], 'px' ) . ' ' . self::get_css_value( $attr['blockBottomPaddingTablet'], 'px' ) . ' ' . self::get_css_value( $attr['blockLeftPaddingTablet'], 'px' ) . ' !important',
		),
		' .responsive-block-editor-addons-call-mail-button-icon-iconPosition-left' => array(
			'margin-right' => self::get_css_value( $attr['iconTextGapTablet'], 'px' ),
		),
		' .responsive-block-editor-addons-call-mail-button-icon-iconPosition-right' => array(
			'margin-left' => self::get_css_value( $attr['iconTextGapTablet'], 'px' ),
		),
	);

	$combined_selectors = array(
		'desktop' => $selectors,
		'tablet'  => $tablet_selectors,
		'mobile'  => $mobile_selectors,
	);

	$id  = '.responsive-block-editor-addons-block-call-mail-button.block-' . $id;
	$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
	return $css;
}
		 /**
		  * Get Defaults for inline notice block
		  *
		  * @return array
		  */
public static function get_responsive_block_call_mail_button_default_attributes() {
	return array(
		'block_id'                 => '',
		'buttonWidthType'          => 'fixed',
		'buttonWidth'              => 200,
		'buttonWidthMobile'        => 200,
		'buttonWidthTablet'        => 200,
		'iconSize'                 => '',
		'iconSizeMobile'           => '',
		'iconSizeTablet'           => '',
		'buttonColor'              => '#4aac38',
		'buttonTextColor'          => '#ffffff',
		'buttonColorHover'         => '',
		'buttonTextColorHover'     => '#ffffff',
		'buttonRounded'            => false,
		'buttonTransparent'        => false,
		'buttonRadius'             => 0,
		'textFontFamily'           => '',
		'textFontSize'             => '',
		'textFontSizeMobile'       => '',
		'textFontSizeTablet'       => '',
		'textFontWeight'           => '100',
		'textLineHeight'           => 1,
		'blockTopMargin'           => 10,
		'blockBottomMargin'        => 10,
		'blockLeftMargin'          => 10,
		'blockRightMargin'         => 10,
		'blockTopMarginMobile'     => 10,
		'blockBottomMarginMobile'  => 10,
		'blockLeftMarginMobile'    => 10,
		'blockRightMarginMobile'   => 10,
		'blockTopMarginTablet'     => 10,
		'blockBottomMarginTablet'  => 10,
		'blockLeftMarginTablet'    => 10,
		'blockRightMarginTablet'   => 10,
		'blockTopPadding'          => 10,
		'blockBottomPadding'       => 10,
		'blockLeftPadding'         => 10,
		'blockRightPadding'        => 10,
		'blockTopPaddingMobile'    => 10,
		'blockBottomPaddingMobile' => 10,
		'blockLeftPaddingMobile'   => 10,
		'blockRightPaddingMobile'  => 10,
		'blockTopPaddingTablet'    => 10,
		'blockBottomPaddingTablet' => 10,
		'blockLeftPaddingTablet'   => 10,
		'blockRightPaddingTablet'  => 10,
		'iconTextGap'              => 5,
		'iconTextGapMobile'        => 3,
		'iconTextGapTablet'        => 5,
	);
}

		/**
		 * Get Tabs CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
public static function get_responsive_block_tabs_css( $attr, $id ) {
	$defaults = self::get_responsive_block_tabs_default_attributes();
	$attr     = array_merge( $defaults, (array) $attr );

	$mobile_selectors = array();
	$tablet_selectors = array();

	$imgopacity = $attr['opacity'] / 100 == 0 ? '0.0' : $attr['opacity'] / 100;

	if ( $attr['tabsStyleD'] === 'hstyle3' ) {
		$activeTabBorderBottom = '0px';
		$activeTabBorderRight  = self::get_css_value( $attr['tabBorderWidth'], 'px' );
	} elseif ( $attr['tabsStyleD'] === 'vstyle8' ) {
		$activeTabBorderBottom = self::get_css_value( $attr['tabBorderWidth'], 'px' );
		$activeTabBorderRight  = '0px';
	}

	$boxShadowPositionCSS = $attr['boxShadowPosition'];
	if ( 'outset' === $attr['boxShadowPosition'] ) {
		$boxShadowPositionCSS = '';
	}

	$selectors        = array(
		' '      => array(
			'padding-top'               => self::get_css_value( $attr['tabsTopPadding'], 'px' ) . '!important',
			'padding-bottom'            => self::get_css_value( $attr['tabsBottomPadding'], 'px' ) . '!important',
			'padding-left'              => self::get_css_value( $attr['tabsLeftPadding'], 'px' ) . '!important',
			'padding-right'             => self::get_css_value( $attr['tabsRightPadding'], 'px' ) . '!important',
			'margin-top'                => self::get_css_value( $attr['tabsTopMargin'], 'px' ) . '!important',
			'margin-bottom'             => self::get_css_value( $attr['tabsBottomMargin'], 'px' ) . '!important',
			'margin-left'               => self::get_css_value( $attr['tabsLeftMargin'], 'px' ) . '!important',
			'margin-right'              => self::get_css_value( $attr['tabsRightMargin'], 'px' ) . '!important',
			'z-index'                   => $attr['tabsZindex'],
			'background-color'          => $attr['backgroundType'] == 'color' ? self::hexToRgb( $attr['backgroundColor'] ? $attr['backgroundColor'] : '#fff', $imgopacity ) : '',
			'background-image'          => $attr['backgroundType'] == 'gradient' ? self::generateBackgroundImageEffect(
				self::hexToRgb( $attr['backgroundColor1'], $imgopacity ),
				self::hexToRgb( $attr['backgroundColor2'], $imgopacity ),
				$attr['gradientDirection'],
				$attr['colorLocation1'],
				$attr['colorLocation2']
			) : '',
			'border-style'              => $attr['blockBorderStyle'],
			'border-radius'             => self::get_css_value( $attr['blockBorderRadius'], 'px' ),
			'border-width'              => self::get_css_value( $attr['blockBorderWidth'], 'px' ),
			'border-color'              => $attr['blockBorderColor'],
			'animation-name'            => $attr['animationName'] . '' . $attr['animationDirection'],
			'animation-timing-function' => $attr['animationCurve'],
			'animation-duration'        => $attr['animationDuration'] . 'ms',
			'animation-delay'           => $attr['animationDelay'] . 'ms',
			'animation-iteration-count' => $attr['animationRepeat'] === 'once' ? 1 : 'infinite',
			'box-shadow'                => $attr['boxShadowHOffset'] . 'px ' . $attr['boxShadowVOffset'] . 'px ' . $attr['boxShadowBlur'] . 'px ' . $attr['boxShadowSpread'] . 'px ' . $attr['boxShadowColor'] . ' ' . $boxShadowPositionCSS,
		),
		':hover' => array(
			'background-color' => $attr['backgroundType'] == 'color' ? self::hexToRgb( $attr['backgroundHoverColor'] ? $attr['backgroundHoverColor'] : '#fff', $imgopacity ) : '',
			'background-image' => $attr['backgroundType'] == 'gradient' ? self::generateBackgroundImageEffect(
				self::hexToRgb( $attr['hoverbackgroundColor1'], $imgopacity ),
				self::hexToRgb( $attr['hoverbackgroundColor2'], $imgopacity ),
				$attr['hovergradientDirection'],
				$attr['hovercolorLocation1'],
				$attr['hovercolorLocation2']
			) : '',
		),
		' > .responsive-block-editor-addons-tabs__panel .responsive-block-editor-addons-tab.responsive-block-editor-addons-tabs__active' => array(
			'background' => $attr['tabBackgroundColor'],
		),
		' > .responsive-block-editor-addons-tabs__body-wrap ' => array(
			'background' => $attr['tabBackgroundColor'],
		),
		'.responsive-block-editor-addons-tabs__wrap > .responsive-block-editor-addons-tabs__panel .responsive-block-editor-addons-tab' => array(
			'border-style'        => $attr['tabBorderWidth'] > 0 ? 'solid' : 'none',
			'border-top-width'    => self::get_css_value( $attr['tabBorderWidth'], 'px' ),
			'border-left-width'   => self::get_css_value( $attr['tabBorderWidth'], 'px' ),
			'border-bottom-width' => $activeTabBorderBottom,
			'border-right-width'  => $activeTabBorderRight,
			'border-color'        => 'transparent',
			'text-align'          => $attr['tabsStyleD'] === 'vstyle8' ? 'center' : 'left',
		),
		'.responsive-block-editor-addons-tabs__wrap > .responsive-block-editor-addons-tabs__panel .responsive-block-editor-addons-tab.responsive-block-editor-addons-tabs__active' => array(
			'border-style'        => $attr['tabBorderWidth'] > 0 ? 'solid' : 'none',
			'border-top-width'    => self::get_css_value( $attr['tabBorderWidth'], 'px' ),
			'border-left-width'   => self::get_css_value( $attr['tabBorderWidth'], 'px' ),
			'border-bottom-width' => $activeTabBorderBottom,
			'border-right-width'  => $activeTabBorderRight,
			'border-color'        => $attr['tabBorderColor'],
			'z-index'             => '10',
			'margin-bottom'       => $attr['tabsStyleD'] === 'hstyle3' ? '-2px' : '',
			'margin-right'        => $attr['tabsStyleD'] === 'vstyle8' ? '-2px' : '',
		),
		'.responsive-block-editor-addons-tabs__wrap > .responsive-block-editor-addons-tabs__body-wrap' => array(
			'border-width' => self::get_css_value( $attr['tabBorderWidth'], 'px' ),
			'border-color' => $attr['tabBorderColor'],
		),
		'  .responsive-block-editor-addons-tabs__panel .responsive-block-editor-addons-tab span' => array(
			'color'       => $attr['tabTitleColor'],
			'font-family' => $attr['tabTitleFontFamily'],
			'font-weight' => $attr['tabTitleFontWeight'],
			'font-size'   => self::get_css_value( $attr['tabTitleFontSize'], 'px' ),
			'line-height' => self::get_css_value( $attr['tabTitleLineHeight'], 'px' ),
		),
		'  .responsive-block-editor-addons-tabs__panel .responsive-block-editor-addons-tab.responsive-block-editor-addons-tabs__active span' => array(
			'color' => $attr['tabTitleActiveColor'],
		),
		' > .responsive-block-editor-addons-tabs__body-wrap .wp-block-responsive-block-editor-addons-tabs-child p' => array(
			'color'       => $attr['tabContentColor'],
			'font-family' => $attr['tabContentFontFamily'],
			'font-weight' => $attr['tabContentFontWeight'],
			'font-size'   => self::get_css_value( $attr['tabContentFontSize'], 'px' ),
			'line-height' => self::get_css_value( $attr['tabContentLineHeight'], 'px' ),
		),
	);
	$mobile_selectors = array(
		' ' => array(
			'padding-top'    => self::get_css_value( $attr['tabsTopPaddingMobile'], 'px' ) . '!important',
			'padding-bottom' => self::get_css_value( $attr['tabsBottomPaddingMobile'], 'px' ) . '!important',
			'padding-left'   => self::get_css_value( $attr['tabsLeftPaddingMobile'], 'px' ) . '!important',
			'padding-right'  => self::get_css_value( $attr['tabsRightPaddingMobile'], 'px' ) . '!important',
			'margin-top'     => self::get_css_value( $attr['tabsTopMarginMobile'], 'px' ) . '!important',
			'margin-bottom'  => self::get_css_value( $attr['tabsBottomMarginMobile'], 'px' ) . '!important',
			'margin-left'    => self::get_css_value( $attr['tabsLeftMarginMobile'], 'px' ) . '!important',
			'margin-right'   => self::get_css_value( $attr['tabsRightMarginMobile'], 'px' ) . '!important',
		),
		' > .responsive-block-editor-addons-tabs__panel .responsive-block-editor-addons-tab span' => array(
			'font-size' => self::get_css_value( $attr['tabTitleFontSizeMobile'], 'px' ),
		),
		' > .responsive-block-editor-addons-tabs__body-wrap .wp-block-responsive-block-editor-addons-tabs-child p' => array(
			'font-size' => self::get_css_value( $attr['tabContentFontSizeMobile'], 'px' ),
		),
	);

	$tablet_selectors = array(
		' ' => array(
			'padding-top'    => self::get_css_value( $attr['tabsTopPaddingTablet'], 'px' ) . '!important',
			'padding-bottom' => self::get_css_value( $attr['tabsBottomPaddingTablet'], 'px' ) . '!important',
			'padding-left'   => self::get_css_value( $attr['tabsLeftPaddingTablet'], 'px' ) . '!important',
			'padding-right'  => self::get_css_value( $attr['tabsRightPaddingTablet'], 'px' ) . '!important',
			'margin-top'     => self::get_css_value( $attr['tabsTopMarginTablet'], 'px' ) . '!important',
			'margin-bottom'  => self::get_css_value( $attr['tabsBottomMarginTablet'], 'px' ) . '!important',
			'margin-left'    => self::get_css_value( $attr['tabsLeftMarginTablet'], 'px' ) . '!important',
			'margin-right'   => self::get_css_value( $attr['tabsRightMarginTablet'], 'px' ) . '!important',
		),
		' > .responsive-block-editor-addons-tabs__panel .responsive-block-editor-addons-tab span' => array(
			'font-size' => self::get_css_value( $attr['tabTitleFontSizeTablet'], 'px' ),
		),
		' > .responsive-block-editor-addons-tabs__body-wrap .wp-block-responsive-block-editor-addons-tabs-child p' => array(
			'font-size' => self::get_css_value( $attr['tabContentFontSizeTablet'], 'px' ),
		),
	);

	$combined_selectors = array(
		'desktop' => $selectors,
		'tablet'  => $tablet_selectors,
		'mobile'  => $mobile_selectors,
	);

	$id  = '.responsive-block-editor-addons-block-tabs.block-' . $id;
	$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
	return $css;
}

		/**
		 * Get Defaults for tabs block
		 *
		 * @return array
		 */
public static function get_responsive_block_tabs_default_attributes() {
	return array(
		'block_id'                 => '',
		'tabHeaderOptions'         => '',
		'activeTab'                => 0,
		'tabActiveFrontend'        => 0,
		'alignTabs'                => 'left',
		'tabsStyleD'               => 'hstyle3',
		'tabsStyleT'               => 'hstyle3',
		'tabsStyleM'               => 'hstyle3',
		'tabBorderWidth'           => 1,
		'tabBorderColor'           => '#e0e0e0',
		'tabBackgroundColor'       => '',
		'tabTitleColor'            => '#007cba',
		'tabTitleActiveColor'      => '#000',
		'tabTitleFontFamily'       => 'Default',
		'tabTitleFontSize'         => '',
		'tabTitleFontSizeMobile'   => '',
		'tabTitleFontSizeTablet'   => '',
		'tabTitleFontWeight'       => '',
		'tabTitleLineHeight'       => '',
		'tabContentColor'          => '000',
		'tabContentFontFamily'     => '',
		'tabContentFontSize'       => '',
		'tabContentFontSizeMobile' => '',
		'tabContentFontSizeTablet' => '',
		'tabContentFontWeight'     => '',
		'tabContentLineHeight'     => '',
		'alignTabs'                => '',
		'tabsZindex'               => 0,
		'tabsTopPadding'           => 0,
		'tabsBottomPadding'        => 0,
		'tabsLeftPadding'          => 0,
		'tabsRightPadding'         => 0,
		'tabsTopPaddingTablet'     => 0,
		'tabsBottomPaddingTablet'  => 0,
		'tabsLeftPaddingTablet'    => 0,
		'tabsRightPaddingTablet'   => 0,
		'tabsTopPaddingMobile'     => 0,
		'tabsBottomPaddingMobile'  => 0,
		'tabsLeftPaddingMobile'    => 0,
		'tabsRightPaddingMobile'   => 0,
		'tabsTopMargin'            => 0,
		'tabsBottomMargin'         => 0,
		'tabsLeftMargin'           => 0,
		'tabsRightMargin'          => 0,
		'tabsTopMarginTablet'      => 0,
		'tabsBottomMarginTablet'   => 0,
		'tabsLeftMarginTablet'     => 0,
		'tabsRightMarginTablet'    => 0,
		'tabsTopMarginMobile'      => 0,
		'tabsBottomMarginMobile'   => 0,
		'tabsLeftMarginMobile'     => 0,
		'tabsRightMarginMobile'    => 0,
		'backgroundType'           => '',
		'backgroundColor'          => '',
		'backgroundColor1'         => '',
		'backgroundColor2'         => '',
		'colorLocation1'           => 0,
		'colorLocation2'           => 100,
		'gradientDirection'        => 90,
		'hoverbackgroundColor1'    => '',
		'hoverbackgroundColor2'    => '',
		'hovercolorLocation1'      => 0,
		'hovercolorLocation2'      => 100,
		'hovergradientDirection'   => 90,
		'backgroundHoverColor'     => '',
		'opacity'                  => 20,
		'animationName'            => 'none',
		'animationDirection'       => '',
		'animationRepeat'          => 'once',
		'animationDuration'        => 1000,
		'animationDelay'           => 0,
		'animationCurve'           => '',
		'blockBorderStyle'         => 'none',
		'blockBorderWidth'         => 1,
		'blockBorderRadius'        => 0,
		'blockBorderColor'         => '',
		'boxShadowHOffset'         => 0,
		'boxShadowVOffset'         => 0,
		'boxShadowBlur'            => 0,
		'boxShadowPosition'        => 'outset',
		'boxShadowSpread'          => 0,
		'boxShadowColor'           => '#000',
	);
}


		/**
		 * Get Tabs Child CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
public static function get_responsive_block_tabs_child_css( $attr, $id ) {
	$defaults = self::get_responsive_block_tabs_child_default_attributes();
	$attr     = array_merge( $defaults, (array) $attr );

	$mobile_selectors = array();
	$tablet_selectors = array();

	$selectors        = array();
	$mobile_selectors = array();

	$tablet_selectors = array();

	$combined_selectors = array(
		'desktop' => $selectors,
		'tablet'  => $tablet_selectors,
		'mobile'  => $mobile_selectors,
	);

	$id  = '.responsive-block-editor-addons-block-tabs-child.block-' . $id;
	$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
	return $css;
}

		/**
		 * Get Defaults for tabs child block
		 *
		 * @return array
		 */
public static function get_responsive_block_tabs_child_default_attributes() {
	return array();
}

/**
 * Get Social Share Block CSS
 *
 * @param array  $attr The block attributes.
 * @param string $id The selector ID.
 * @return array Styles.
 */
public static function get_responsive_block_social_share_css( $attr, $id ) {
	$defaults = self::get_responsive_block_social_share_default_attributes();
	$attr     = array_merge( $defaults, (array) $attr );

	$mobile_selectors = array();
	$tablet_selectors = array();

	$iconShapeRadius = '';
	if ( $attr['iconShape'] === 'square' ) {
		$iconShapeRadius = '0%';
	} elseif ( $attr['iconShape'] === 'rounded' ) {
		$iconShapeRadius = '10%';
	} elseif ( $attr['iconShape'] === 'circle' ) {
		$iconShapeRadius = '100%';
	}

	$boxShadowPositionCSS = $attr['boxShadowPosition'];

	if ( 'outset' === $attr['boxShadowPosition'] ) {
		$boxShadowPositionCSS = '';
	}

	$newopacity = $attr['opacity'] / 100;

	$selectors = array(
		' '                                               => array(
			'margin-top'       => self::get_css_value( $attr['blockTopMargin'], 'px' ) . '!important',
			'margin-bottom'    => self::get_css_value( $attr['blockBottomMargin'], 'px' ) . '!important',
			'margin-left'      => self::get_css_value( $attr['blockLeftMargin'], 'px' ) . '!important',
			'margin-right'     => self::get_css_value( $attr['blockRightMargin'], 'px' ) . '!important',
			'padding-top'      => self::get_css_value( $attr['blockTopPadding'], 'px' ) . '!important',
			'padding-bottom'   => self::get_css_value( $attr['blockBottomPadding'], 'px' ) . '!important',
			'padding-left'     => self::get_css_value( $attr['blockLeftPadding'], 'px' ) . '!important',
			'padding-right'    => self::get_css_value( $attr['blockRightPadding'], 'px' ) . '!important',
			'z-index'          => $attr['socialZindex'],
			'background-color' => self::hexToRgb( $attr['backgroundColor'], $newopacity ),
		),
		' .responsive-block-editor-addons-share-icon'     => array(
			'border-radius'    => $iconShapeRadius,
			'fill'             => $attr['iconColorType'] === 'custom' ? $attr['iconPrimaryColor'] : '',
			'background-color' => $attr['iconColorType'] === 'custom' && $attr['skin'] === 'flat' ? $attr['iconSecondaryColor'] : '',
			'border'           => $attr['iconColorType'] === 'custom' && ( $attr['skin'] === 'framed' || $attr['skin'] === 'boxed' ) ? '1px solid ' . $attr['iconSecondaryColor'] : '',
			'display'          => 'flex',
			'justify-content'  => 'center',
			'height'           => self::get_css_value( $attr['iconContainerHeight'], 'px' ),
			'width'            => $attr['skin'] !== 'boxed' ? self::get_css_value( $attr['iconContainerSize'], 'px' ) : '100%',
		),
		' .responsive-block-editor-addons-share-icon > a:first-child' => array(
			'padding'          => $attr['skin'] === 'boxed' || $attr['skin'] === 'minimal' ? '0 10px 0 10px' : '',
			'background-color' => ( $attr['skin'] === 'boxed' || $attr['skin'] === 'minimal' ) ? $attr['iconSecondaryColor'] : '',
		),
		' .responsive-block-editor-addons-share-icon > a:last-child' => array(
			'padding' => ( $attr['skin'] === 'boxed' || $attr['skin'] === 'minimal' ) ? '0 10px 0 0' : '',
		),
		' .responsive-block-editor-addons-share-icon-svg svg' => array(
			'height' => self::get_css_value( $attr['iconSize'], 'px' ),
			'width'  => self::get_css_value( $attr['iconSize'], 'px' ),
			'fill'   => $attr['iconColorType'] === 'custom' ? $attr['iconPrimaryColor'] : '',
		),
		' .responsive-block-editor-addons-share-icons-container' => array(
			'display'               => 'inline-grid',
			'grid-template-columns' =>
			  $attr['iconColumns'] !== 'auto' ? 'repeat(' . $attr['iconColumns'] . ' , auto)' : '',
			'grid-auto-flow'        =>
			$attr['iconColumns'] !== 'auto' ? '' : 'column',
			'grid-column-gap'       => self::get_css_value( $attr['iconColumnsGap'], 'px' ),
			'grid-row-gap'          => self::get_css_value( $attr['iconRowsGap'], 'px' ),
			'border-color'          => $attr['blockBorderColor'],
			'border-style'          => $attr['blockBorderStyle'],
			'border-width'          => self::get_css_value( $attr['blockBorderWidth'], 'px' ),
			'border-radius'         => self::get_css_value( $attr['blockBorderRadius'], 'px' ),
			'box-shadow'            =>
			self::get_css_value( $attr['boxShadowHOffset'], 'px' ) .
			' ' .
			self::get_css_value( $attr['boxShadowVOffset'], 'px' ) .
			' ' .
			self::get_css_value( $attr['boxShadowBlur'], 'px' ) .
			' ' .
			self::get_css_value( $attr['boxShadowSpread'], 'px' ) .
			' ' .
			$attr['boxShadowColor'] .
			' ' .
			$boxShadowPositionCSS,
		),
		' .responsive-block-editor-addons-share-icon-label' => array(
			'font-size'   => self::get_css_value( $attr['labelFontSize'], 'px' ),
			'font-family' => $attr['labelFontFamily'],
			'font-weight' => $attr['labelFontWeight'],
			'line-height' => $attr['labelLineHeight'],
			'margin-left' => self::get_css_value( $attr['iconLabelGap'], 'px' ),
			'color'       => $attr['labelColor'],
		),
		' .responsive-block-editor-addons-icon-facebook, .responsive-block-editor-addons-icon-facebook-f, .responsive-block-editor-addons-icon-facebook-square, .responsive-block-editor-addons-icon-facebook-messenger' => array(
			'fill' => '#3b5998',
		),
		' .responsive-block-editor-addons-icon-twitter, .responsive-block-editor-addons-icon-twitter-square' => array(
			'fill' => '#00aced',
		),
		' .responsive-block-editor-addons-icon-linkedin, .responsive-block-editor-addons-icon-linkedin-in' => array(
			'fill' => '#007bb6',
		),
		' .responsive-block-editor-addons-icon-youtube, .responsive-block-editor-addons-icon-youtube-square' => array(
			'fill' => '#bb0000',
		),
		' .responsive-block-editor-addons-icon-pinterest, .responsive-block-editor-addons-icon-pinterest-p, .responsive-block-editor-addons-icon-pinterest-square' => array(
			'fill' => '#bb0000',
		),
		' .responsive-block-editor-addons-icon-instagram' => array(
			'fill' => '#e95950',
		),
		' .responsive-block-editor-addons-icon-snapchat, .responsive-block-editor-addons-icon-snapchat-ghost,  .responsive-block-editor-addons-icon-snapchat-square' => array(
			'fill' => '#fffc00',
		),
		' .responsive-block-editor-addons-icon-tumblr, .responsive-block-editor-addons-icon-tumblr-square' => array(
			'fill' => '#32506d',
		),
		' .responsive-block-editor-addons-icon-vimeo, .responsive-block-editor-addons-icon-vimeo-v, .responsive-block-editor-addons-icon-vimeo-square' => array(
			'fill' => '#aad450',
		),
		' .responsive-block-editor-addons-icon-quora'     => array(
			'fill' => '#a82400',
		),
		' .responsive-block-editor-addons-icon-google-plus, .responsive-block-editor-addons-icon-google-plus-g, .responsive-block-editor-addons-icon-google-plus-square' => array(
			'fill' => '#dd4b39',
		),
		' .responsive-block-editor-addons-icon-reddit, .responsive-block-editor-addons-icon-reddit-alien, .responsive-block-editor-addons-icon-reddit-square' => array(
			'fill' => '#FF5700',
		),
		' .responsive-block-editor-addons-icon-skype'     => array(
			'fill' => '#00aff0',
		),
		' .responsive-block-editor-addons-icon-telegram, .responsive-block-editor-addons-icon-telegram-plane' => array(
			'fill' => '#0088cc',
		),
		' .responsive-block-editor-addons-icon-whatsapp, .responsive-block-editor-addons-icon-whatsapp-square' => array(
			'fill' => '#34B7F1',
		),
		' .responsive-block-editor-addons-icon-envelope'  => array(
			'fill' => '#BB001B',
		),
	);

	$mobile_selectors = array(
		' ' => array(
			'margin-top'     => self::get_css_value( $attr['blockTopMarginMobile'], 'px' ) . '!important',
			'margin-bottom'  => self::get_css_value( $attr['blockBottomMarginMobile'], 'px' ) . '!important',
			'margin-left'    => self::get_css_value( $attr['blockLeftMarginMobile'], 'px' ) . '!important',
			'margin-right'   => self::get_css_value( $attr['blockRightMarginMobile'], 'px' ) . '!important',
			'padding-top'    => self::get_css_value( $attr['blockTopPaddingMobile'], 'px' ) . '!important',
			'padding-bottom' => self::get_css_value( $attr['blockBottomPaddingMobile'], 'px' ) . '!important',
			'padding-left'   => self::get_css_value( $attr['blockLeftPaddingMobile'], 'px' ) . '!important',
			'padding-right'  => self::get_css_value( $attr['blockRightPaddingMobile'], 'px' ) . '!important',
		),
		' .responsive-block-editor-addons-share-icon-label' => array(
			'font-size' => self::get_css_value( $attr['labelFontSizeMobile'], 'px' ),
		),
	);

	$tablet_selectors = array(
		' ' => array(
			'margin-top'     => self::get_css_value( $attr['blockTopMarginTablet'], 'px' ) . '!important',
			'margin-bottom'  => self::get_css_value( $attr['blockBottomMarginTablet'], 'px' ) . '!important',
			'margin-left'    => self::get_css_value( $attr['blockLeftMarginTablet'], 'px' ) . '!important',
			'margin-right'   => self::get_css_value( $attr['blockRightMarginTablet'], 'px' ) . '!important',
			'padding-top'    => self::get_css_value( $attr['blockTopPaddingTablet'], 'px' ) . '!important',
			'padding-bottom' => self::get_css_value( $attr['blockBottomPaddingTablet'], 'px' ) . '!important',
			'padding-left'   => self::get_css_value( $attr['blockLeftPaddingTablet'], 'px' ) . '!important',
			'padding-right'  => self::get_css_value( $attr['blockRightPaddingTablet'], 'px' ) . '!important',
		),
		' .responsive-block-editor-addons-share-icon-label' => array(
			'font-size' => self::get_css_value( $attr['labelFontSizeTablet'], 'px' ),
		),
	);

	$combined_selectors = array(
		'desktop' => $selectors,
		'tablet'  => $tablet_selectors,
		'mobile'  => $mobile_selectors,
	);

	$id  = '.responsive-block-editor-addons-block-social-share.block-' . $id;
	$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
	return $css;
}
		 /**
		  * Get Defaults for social share block
		  *
		  * @return array
		  */
public static function get_responsive_block_social_share_default_attributes() {
	return array(
		'block_id'                 => '',
		'socialMediaIcons'         => '',
		'iconShape'                => 'square',
		'iconColorType'            => 'official',
		'iconPrimaryColor'         => '#0112ff',
		'iconSecondaryColor'       => '#e4f3ff',
		'showIconLabel'            => true,
		'iconSize'                 => 30,
		'iconColumns'              => 'auto',
		'iconColumnsGap'           => 15,
		'iconRowsGap'              => 10,
		'iconsAlign'               => 'left',
		'iconContainerHeight'      => 50,
		'iconContainerSize'        => 103,
		'socialZindex'             => 0,
		'blockTopPadding'          => 0,
		'blockBottomPadding'       => 0,
		'blockLeftPadding'         => 0,
		'blockRightPadding'        => 0,
		'blockTopPaddingTablet'    => 0,
		'blockBottomPaddingTablet' => 0,
		'blockLeftPaddingTablet'   => 0,
		'blockRightPaddingTablet'  => 0,
		'blockTopPaddingMobile'    => 0,
		'blockBottomPaddingMobile' => 0,
		'blockLeftPaddingMobile'   => 0,
		'blockRightPaddingMobile'  => 0,
		'blockTopMargin'           => 0,
		'blockBottomMargin'        => 0,
		'blockLeftMargin'          => 0,
		'blockRightMargin'         => 0,
		'blockTopMarginMobile'     => 0,
		'blockBottomMarginMobile'  => 0,
		'blockLeftMarginMobile'    => 0,
		'blockRightMarginMobile'   => 0,
		'blockTopMarginTablet'     => 0,
		'blockBottomMarginTablet'  => 0,
		'blockLeftMarginTablet'    => 0,
		'blockRightMarginTablet'   => 0,
		'labelFontFamily'          => 'Default',
		'labelFontSize'            => 16,
		'labelFontSizeMobile'      => 16,
		'labelFontSizeTablet'      => 16,
		'labelFontWeight'          => '500',
		'labelLineHeight'          => 1,
		'iconLabelGap'             => 5,
		'labelColor'               => '#333',
		'viewOption'               => 'icontext',
		'skin'                     => 'default',
		'blockBorderStyle'         => 'none',
		'blockBorderWidth'         => 2,
		'blockBorderRadius'        => '',
		'blockBorderColor'         => '',
		'boxShadowColor'           => '',
		'boxShadowHOffset'         => 0,
		'boxShadowVOffset'         => 0,
		'boxShadowBlur'            => 0,
		'boxShadowSpread'          => 0,
		'boxShadowPosition'        => 'outset',
		'backgroundColor'          => '#fff',
		'opacity'                  => 100,
	);
}

		/**
		 * Get Progress Bar block CSS
		 *
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array Styles.
		 */
		public static function get_responsive_block_progress_bar_css( $attr, $id ) {
			$defaults = self::get_responsive_block_progress_bar_default_attributes();
			$attr     = array_merge( $defaults, (array) $attr );

			$mobile_selectors = array();
			$tablet_selectors = array();

			$circle_radius_val      = 0;
			$stroke_dash_array_val  = 0;
			$stroke_dash_offset_val = 0;

			error_log( 'Circle Radius:' . $attr['circularProgressBarSize'] );

			if ( $attr['circularProgressBarSize'] ) {
				$circle_radius_val      = ( $attr['circularProgressBarSize'] / 2 ) - 10;
				$stroke_dash_array_val  = ( $circle_radius_val * 6.27 ) + 3;
				$stroke_dash_offset_val = ( $circle_radius_val * 6.27 ) + 3;
			}

			$horizontal_track_color = '';
			if ( $attr['gradientTrack'] ) {
				$horizontal_track_color =
					'linear-gradient( to bottom, ' .
					$attr['horizontalProgressBarPrimaryTrackColor'] .
					', ' .
					$attr['horizontalProgressBarSecondaryTrackColor'] .
					')';
			} else {
				$horizontal_track_color =
					'linear-gradient( to bottom, ' .
					$attr['horizontalProgressBarPrimaryTrackColor'] .
					', ' .
					$attr['horizontalProgressBarPrimaryTrackColor'] .
					')';
			}

			$track_stripe_color = 'linear-gradient(45deg, ' .
				$attr['horizontalProgressBarStripeColor'] . ' 25%,' .
				' rgba(0, 0, 0, 0) 25%,' .
				' rgba(0, 0, 0, 0) 50%,' .
				$attr['horizontalProgressBarStripeColor'] . ' 50%,' .
				$attr['horizontalProgressBarStripeColor'] . ' 75%,' .
				' rgba(0, 0, 0, 0) 75%,' .
				' rgba(0, 0, 0, 0) 25%)';

			$stripe_animation_duration_val = 0;
			if ( $attr['stripedHorizontalProgressBarAnimationTime'] ) {
				$stripe_animation_duration_val = $attr['stripedHorizontalProgressBarAnimationTime'] * 0.1;
			}

			$semi_circular_background_track_colors = '';
			if ( $attr['semiCircularProgressBarBackgroundColor'] && $attr['semiCircularProgressBarTrackColor'] ) {
				$semi_circular_background_track_colors =
					$attr['semiCircularProgressBarBackgroundColor'] .
					$attr['semiCircularProgressBarBackgroundColor'] .
					$attr['semiCircularProgressBarTrackColor'] .
					$attr['semiCircularProgressBarTrackColor'];
			}

			$selectors = array(
				' .responsive-horizontal-progress-bar'             => array(
					'height'           => self::get_css_value( $attr['horizontalProgressBarSize'], 'px' ),
					'background-color' => $attr['horizontalProgressBarBackgroundColor'],
					'border-radius'    => self::get_css_value( $attr['horizontalProgressBarBorderRadius'], 'px' ),
					'border-style'     => $attr['horizontalProgressBarBorderStyle'],
					'border-width'     => self::get_css_value( $attr['horizontalProgressBarBorderWidth'], 'px' ),
					'border-color'     => $attr['horizontalProgressBarBorderColor'],
				),
				' .responsive-horizontal-progress-bar-progress'    => array(
					'width'            => $attr['progressBarValue'] . '%',
					'background-image' => $horizontal_track_color,
				),
				' .responsive-striped-horizontal-progress-bar-progress' => array(
					'width'            => $attr['progressBarValue'] . '%',
					'background-image' => $horizontal_track_color,
				),
				' .responsive-semi-circular-progress'              => array(
					'width'  => self::get_css_value( $attr['semiCircularProgressBarSize'], 'px' ),
					'height' => self::get_css_value( ( $attr['semiCircularProgressBarSize'] / 2 ), 'px' ),
				),
				' .responsive-semi-circular-progress::after'       => array(
					'width'        => self::get_css_value( $attr['semiCircularProgressBarSize'], 'px' ),
					'height'       => self::get_css_value( $attr['semiCircularProgressBarSize'], 'px' ),
					'transform'    => 'rotate(calc(1deg * (-45 + ' . $attr['progressBarValue'] . ' * 1.8)))',
					'border-width' => self::get_css_value( $attr['semiCircularProgressBarWidth'], 'px' ),
					'border-color' => $semi_circular_background_track_colors,
				),
				' .responsive-circular-progress-bar-circle'        => array(
					'width'  => self::get_css_value( $attr['circularProgressBarSize'], 'px' ),
					'height' => self::get_css_value( $attr['circularProgressBarSize'], 'px' ),
				),
				' .responsive-circular-progress-bar-circle circle:nth-child(2)' => array(
					'stroke-dasharray'  => $stroke_dash_array_val,
					'stroke-dashoffset' => $stroke_dash_offset_val,
					'stroke'            => $attr['circularProgressBarTrackColor'],
				),
				' .responsive-circular-progress-bar-container:nth-child(1) .responsive-circular-progress-bar-circle circle:nth-child(2)' => array(
					'stroke-dashoffset' => 'calc(' . $stroke_dash_offset_val . ' - (' . $stroke_dash_offset_val . ' * ' . $attr['progressBarValue'] . ') / 100)',
				),
				' .responsive-circular-progress-bar-circle circle' => array(
					'stroke-width'   => self::get_css_value( $attr['circularProgressBarWidth'], 'px' ),
					'stroke'         => $attr['circularProgressBarBackgroundColor'],
					'stroke-linecap' => $attr['circularProgressBarTrackStyle'],
				),
				' .responsive-striped-horizontal-progress-bar-inner-span::after' => array(
					'background-image' => $track_stripe_color,
				),
				' .responsive-horizontal-progress-bar-top-title'   => array(
					'color'          => $attr['horizontalProgressBarTopTitleValueColor'],
					'font-family'    => $attr['topTitleValueFontFamily'],
					'font-size'      => self::get_css_value( $attr['topTitleValueFontSize'], 'px' ),
					'font-weight'    => $attr['topTitleValueFontWeight'],
					'line-height'    => $attr['topTitleValueLineHeight'],
					'letter-spacing' => self::get_css_value( $attr['topTitleValueLetterSpacing'], 'px' ),
					'text-transform' => $attr['topTitleValueTextTransform'],
				),
				' .responsive-horizontal-progress-bar-top-value'   => array(
					'color'          => $attr['horizontalProgressBarTopTitleValueColor'],
					'font-family'    => $attr['topTitleValueFontFamily'],
					'font-size'      => self::get_css_value( $attr['topTitleValueFontSize'], 'px' ),
					'font-weight'    => $attr['topTitleValueFontWeight'],
					'line-height'    => $attr['topTitleValueLineHeight'],
					'letter-spacing' => self::get_css_value( $attr['topTitleValueLetterSpacing'], 'px' ),
					'text-transform' => $attr['topTitleValueTextTransform'],
				),
				' .responsive-horizontal-progress-bar-inner-title' => array(
					'color'          => $attr['horizontalProgressBarInnerTitleValueColor'],
					'font-family'    => $attr['innerTitleValueFontFamily'],
					'font-size'      => self::get_css_value( $attr['innerTitleValueFontSize'], 'px' ),
					'font-weight'    => $attr['innerTitleValueFontWeight'],
					'line-height'    => $attr['innerTitleValueLineHeight'],
					'letter-spacing' => self::get_css_value( $attr['innerTitleValueLetterSpacing'], 'px' ),
					'text-transform' => $attr['innerTitleValueTextTransform'],
				),
				' .responsive-horizontal-progress-bar-inner-value' => array(
					'color'          => $attr['horizontalProgressBarInnerTitleValueColor'],
					'font-family'    => $attr['innerTitleValueFontFamily'],
					'font-size'      => self::get_css_value( $attr['innerTitleValueFontSize'], 'px' ),
					'font-weight'    => $attr['innerTitleValueFontWeight'],
					'line-height'    => $attr['innerTitleValueLineHeight'],
					'letter-spacing' => self::get_css_value( $attr['innerTitleValueLetterSpacing'], 'px' ),
					'text-transform' => $attr['innerTitleValueTextTransform'],
				),
				' .responsive-horizontal-progress-bar-bottom-title' => array(
					'color'          => $attr['horizontalProgressBarBottomTitleValueColor'],
					'font-family'    => $attr['bottomTitleValueFontFamily'],
					'font-size'      => self::get_css_value( $attr['bottomTitleValueFontSize'], 'px' ),
					'font-weight'    => $attr['bottomTitleValueFontWeight'],
					'line-height'    => $attr['bottomTitleValueLineHeight'],
					'letter-spacing' => self::get_css_value( $attr['bottomTitleValueLetterSpacing'], 'px' ),
					'text-transform' => $attr['bottomTitleValueTextTransform'],
				),
				' .responsive-horizontal-progress-bar-bottom-value' => array(
					'color'          => $attr['horizontalProgressBarBottomTitleValueColor'],
					'font-family'    => $attr['bottomTitleValueFontFamily'],
					'font-size'      => self::get_css_value( $attr['bottomTitleValueFontSize'], 'px' ),
					'font-weight'    => $attr['bottomTitleValueFontWeight'],
					'line-height'    => $attr['bottomTitleValueLineHeight'],
					'letter-spacing' => self::get_css_value( $attr['bottomTitleValueLetterSpacing'], 'px' ),
					'text-transform' => $attr['bottomTitleValueTextTransform'],
				),
				' .responsive-circular-progress-bar-top-title'     => array(
					'color'          => $attr['circularProgressBarTopTitleValueColor'],
					'font-family'    => $attr['circularTopTitleValueFontFamily'],
					'font-size'      => self::get_css_value( $attr['circularTopTitleValueFontSize'], 'px' ),
					'line-height'    => $attr['circularTopTitleValueLineHeight'],
					'font-weight'    => $attr['circularTopTitleValueFontWeight'],
					'letter-spacing' => self::get_css_value( $attr['circularTopTitleValueLetterSpacing'], 'px' ),
					'text-transform' => $attr['circularTopTitleValueTextTransform'],
				),
				' .responsive-circular-progress-bar-top-value'     => array(
					'color'          => $attr['circularProgressBarTopTitleValueColor'],
					'font-family'    => $attr['circularTopTitleValueFontFamily'],
					'font-size'      => self::get_css_value( $attr['circularTopTitleValueFontSize'], 'px' ),
					'line-height'    => $attr['circularTopTitleValueLineHeight'],
					'font-weight'    => $attr['circularTopTitleValueFontWeight'],
					'letter-spacing' => self::get_css_value( $attr['circularTopTitleValueLetterSpacing'], 'px' ),
					'text-transform' => $attr['circularTopTitleValueTextTransform'],
				),
				' .responsive-circular-progress-bar-progress'      => array(
					'color'          => $attr['circularProgressBarInnerValueColor'],
					'font-family'    => $attr['circularInnerValueFontFamily'],
					'font-size'      => self::get_css_value( $attr['circularInnerValueFontSize'], 'px' ),
					'line-height'    => $attr['circularInnerValueLineHeight'],
					'font-weight'    => $attr['circularInnerValueFontWeight'],
					'letter-spacing' => self::get_css_value( $attr['circularInnerValueLetterSpacing'], 'px' ),
				),
				' .responsive-circular-progress-bar-bottom-title'  => array(
					'color'          => $attr['circularProgressBarBottomTitleValueColor'],
					'font-family'    => $attr['circularBottomTitleValueFontFamily'],
					'font-size'      => self::get_css_value( $attr['circularBottomTitleValueFontSize'], 'px' ),
					'line-height'    => $attr['circularBottomTitleValueLineHeight'],
					'font-weight'    => $attr['circularBottomTitleValueFontWeight'],
					'letter-spacing' => self::get_css_value( $attr['circularBottomTitleValueLetterSpacing'], 'px' ),
					'text-transform' => $attr['circularBottomTitleValueTextTransform'],
				),
				' .responsive-circular-progress-bar-bottom-value'  => array(
					'color'          => $attr['circularProgressBarBottomTitleValueColor'],
					'font-family'    => $attr['circularBottomTitleValueFontFamily'],
					'font-size'      => self::get_css_value( $attr['circularBottomTitleValueFontSize'], 'px' ),
					'line-height'    => $attr['circularBottomTitleValueLineHeight'],
					'font-weight'    => $attr['circularBottomTitleValueFontWeight'],
					'letter-spacing' => self::get_css_value( $attr['circularBottomTitleValueLetterSpacing'], 'px' ),
					'text-transform' => $attr['circularBottomTitleValueTextTransform'],
				),
				' .responsive-semi-circular-progress-bar-top-title' => array(
					'color'          => $attr['semiCircularProgressBarTopTitleValueColor'],
					'font-family'    => $attr['semiCircularTopTitleValueFontFamily'],
					'font-size'      => self::get_css_value( $attr['semiCircularTopTitleValueFontSize'], 'px' ),
					'line-height'    => $attr['semiCircularTopTitleValueLineHeight'],
					'font-weight'    => $attr['semiCircularTopTitleValueFontWeight'],
					'letter-spacing' => self::get_css_value( $attr['semiCircularTopTitleValueLetterSpacing'], 'px' ),
					'text-transform' => $attr['semiCircularTopTitleValueTextTransform'],
				),
				' .responsive-semi-circular-progress-bar-top-value' => array(
					'color'          => $attr['semiCircularProgressBarTopTitleValueColor'],
					'font-family'    => $attr['semiCircularTopTitleValueFontFamily'],
					'font-size'      => self::get_css_value( $attr['semiCircularTopTitleValueFontSize'], 'px' ),
					'line-height'    => $attr['semiCircularTopTitleValueLineHeight'],
					'font-weight'    => $attr['semiCircularTopTitleValueFontWeight'],
					'letter-spacing' => self::get_css_value( $attr['semiCircularTopTitleValueLetterSpacing'], 'px' ),
					'text-transform' => $attr['semiCircularTopTitleValueTextTransform'],
				),
				' .responsive-semi-circular-progress-bar-value'    => array(
					'color'          => $attr['semiCircularProgressBarInnerValueColor'],
					'font-family'    => $attr['semiCircularInnerValueFontFamily'],
					'font-size'      => self::get_css_value( $attr['semiCircularInnerValueFontSize'], 'px' ),
					'line-height'    => $attr['semiCircularInnerValueLineHeight'],
					'font-weight'    => $attr['semiCircularInnerValueFontWeight'],
					'letter-spacing' => self::get_css_value( $attr['semiCircularInnerValueLetterSpacing'], 'px' ),
				),
				' .responsive-semi-circular-progress-bar-bottom-title' => array(
					'color'          => $attr['semiCircularProgressBarBottomTitleValueColor'],
					'font-family'    => $attr['semiCircularBottomTitleValueFontFamily'],
					'font-size'      => self::get_css_value( $attr['semiCircularBottomTitleValueFontSize'], 'px' ),
					'line-height'    => $attr['semiCircularBottomTitleValueLineHeight'],
					'font-weight'    => $attr['semiCircularBottomTitleValueFontWeight'],
					'letter-spacing' => self::get_css_value( $attr['semiCircularBottomTitleValueLetterSpacing'], 'px' ),
					'text-transform' => $attr['semiCircularBottomTitleValueTextTransform'],
				),
				' .responsive-semi-circular-progress-bar-bottom-value' => array(
					'color'          => $attr['semiCircularProgressBarBottomTitleValueColor'],
					'font-family'    => $attr['semiCircularBottomTitleValueFontFamily'],
					'font-size'      => self::get_css_value( $attr['semiCircularBottomTitleValueFontSize'], 'px' ),
					'line-height'    => $attr['semiCircularBottomTitleValueLineHeight'],
					'font-weight'    => $attr['semiCircularBottomTitleValueFontWeight'],
					'letter-spacing' => self::get_css_value( $attr['semiCircularBottomTitleValueLetterSpacing'], 'px' ),
					'text-transform' => $attr['semiCircularBottomTitleValueTextTransform'],
				),
				' .stripe-movement-effect::after'                  => array(
					'animation-duration' => $stripe_animation_duration_val . 's',
				),
			);

			$mobile_selectors = array(
				' .responsive-horizontal-progress-bar-top-title'   => array(
					'font-size' => self::get_css_value( $attr['topTitleValueFontSizeMobile'], 'px' ),
				),
				' .responsive-horizontal-progress-bar-top-value'   => array(
					'font-size' => self::get_css_value( $attr['topTitleValueFontSizeMobile'], 'px' ),
				),
				' .responsive-horizontal-progress-bar-inner-title' => array(
					'font-size' => self::get_css_value( $attr['innerTitleValueFontSizeMobile'], 'px' ),
				),
				' .responsive-horizontal-progress-bar-inner-value' => array(
					'font-size' => self::get_css_value( $attr['innerTitleValueFontSizeMobile'], 'px' ),
				),
				' .responsive-horizontal-progress-bar-bottom-title' => array(
					'font-size' => self::get_css_value( $attr['bottomTitleValueFontSizeMobile'], 'px' ),
				),
				' .responsive-horizontal-progress-bar-bottom-value' => array(
					'font-size' => self::get_css_value( $attr['bottomTitleValueFontSizeMobile'], 'px' ),
				),
				' .responsive-circular-progress-bar-top-title'     => array(
					'font-size' => self::get_css_value( $attr['circularTopTitleValueFontSizeMobile'], 'px' ),
				),
				' .responsive-circular-progress-bar-top-value'     => array(
					'font-size' => self::get_css_value( $attr['circularTopTitleValueFontSizeMobile'], 'px' ),
				),
				' .responsive-circular-progress-bar-progress'      => array(
					'font-size' => self::get_css_value( $attr['circularInnerValueFontSizeMobile'], 'px' ),
				),
				' .responsive-circular-progress-bar-bottom-title'  => array(
					'font-size' => self::get_css_value( $attr['circularBottomTitleValueFontSizeMobile'], 'px' ),
				),
				' .responsive-circular-progress-bar-bottom-value'  => array(
					'font-size' => self::get_css_value( $attr['circularBottomTitleValueFontSizeMobile'], 'px' ),
				),
				' .responsive-semi-circular-progress-bar-top-title' => array(
					'font-size' => self::get_css_value( $attr['semiCircularTopTitleValueFontSizeMobile'], 'px' ),
				),
				' .responsive-semi-circular-progress-bar-top-value' => array(
					'font-size' => self::get_css_value( $attr['semiCircularTopTitleValueFontSizeMobile'], 'px' ),
				),
				' .responsive-semi-circular-progress-bar-value'    => array(
					'font-size' => self::get_css_value( $attr['semiCircularInnerValueFontSizeMobile'], 'px' ),
				),
				' .responsive-semi-circular-progress-bar-bottom-title' => array(
					'font-size' => self::get_css_value( $attr['semiCircularBottomTitleValueFontSizeMobile'], 'px' ),
				),
				' .responsive-semi-circular-progress-bar-bottom-value' => array(
					'font-size' => self::get_css_value( $attr['semiCircularBottomTitleValueFontSizeMobile'], 'px' ),
				),
			);

			$tablet_selectors = array(
				' .responsive-horizontal-progress-bar-top-title'   => array(
					'font-size' => self::get_css_value( $attr['topTitleValueFontSizeTablet'], 'px' ),
				),
				' .responsive-horizontal-progress-bar-top-value'   => array(
					'font-size' => self::get_css_value( $attr['topTitleValueFontSizeTablet'], 'px' ),
				),
				' .responsive-horizontal-progress-bar-inner-title' => array(
					'font-size' => self::get_css_value( $attr['innerTitleValueFontSizeTablet'], 'px' ),
				),
				' .responsive-horizontal-progress-bar-inner-value' => array(
					'font-size' => self::get_css_value( $attr['innerTitleValueFontSizeTablet'], 'px' ),
				),
				' .responsive-horizontal-progress-bar-bottom-title' => array(
					'font-size' => self::get_css_value( $attr['bottomTitleValueFontSizeTablet'], 'px' ),
				),
				' .responsive-horizontal-progress-bar-bottom-value' => array(
					'font-size' => self::get_css_value( $attr['bottomTitleValueFontSizeTablet'], 'px' ),
				),
				' .responsive-circular-progress-bar-top-title'     => array(
					'font-size' => self::get_css_value( $attr['circularTopTitleValueFontSizeTablet'], 'px' ),
				),
				' .responsive-circular-progress-bar-top-value'     => array(
					'font-size' => self::get_css_value( $attr['circularTopTitleValueFontSizeTablet'], 'px' ),
				),
				' .responsive-circular-progress-bar-progress'      => array(
					'font-size' => self::get_css_value( $attr['circularInnerValueFontSizeTablet'], 'px' ),
				),
				' .responsive-circular-progress-bar-bottom-title'  => array(
					'font-size' => self::get_css_value( $attr['circularBottomTitleValueFontSizeTablet'], 'px' ),
				),
				' .responsive-circular-progress-bar-bottom-value'  => array(
					'font-size' => self::get_css_value( $attr['circularBottomTitleValueFontSizeTablet'], 'px' ),
				),
				' .responsive-semi-circular-progress-bar-top-title' => array(
					'font-size' => self::get_css_value( $attr['semiCircularTopTitleValueFontSizeTablet'], 'px' ),
				),
				' .responsive-semi-circular-progress-bar-top-value' => array(
					'font-size' => self::get_css_value( $attr['semiCircularTopTitleValueFontSizeTablet'], 'px' ),
				),
				' .responsive-semi-circular-progress-bar-value'    => array(
					'font-size' => self::get_css_value( $attr['semiCircularInnerValueFontSizeTablet'], 'px' ),
				),
				' .responsive-semi-circular-progress-bar-bottom-title' => array(
					'font-size' => self::get_css_value( $attr['semiCircularBottomTitleValueFontSizeTablet'], 'px' ),
				),
				' .responsive-semi-circular-progress-bar-bottom-value' => array(
					'font-size' => self::get_css_value( $attr['semiCircularBottomTitleValueFontSizeTablet'], 'px' ),
				),
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $tablet_selectors,
				'mobile'  => $mobile_selectors,
			);

			$id  = '.responsive-block-editor-addons-block-progress-bar.block-' . $id;
			$css = Responsive_Block_Editor_Addons_Frontend_Styles_Helper::responsive_block_editor_addons_generate_all_css( $combined_selectors, $id );
			return $css;
		}

		/**
		 * Get Defaults for Progress Bar block
		 *
		 * @return array
		 */
		public static function get_responsive_block_progress_bar_default_attributes() {
			return array(
				'block_id'                                     => '',
				'progressBarStyle'                             => 'horizontal',
				'progressBarColorType'                         => 'default',
				'horizontalProgressBarStyle'                   => 'plain',
				'circularProgressBarStyle'                     => 'circle',
				'progressBarTopTitle'                          => '',
				'progressBarTopTitleEnable'                    => true,
				'progressBarTopValueEnable'                    => true,
				'progressBarValue'                             => 50,
				'progressBarInnerTitle'                        => '',
				'progressBarInnerTitleEnable'                  => false,
				'progressBarInnerValueEnable'                  => true,
				'progressBarBottomTitle'                       => '',
				'progressBarBottomTitleEnable'                 => false,
				'progressBarBottomValueEnable'                 => false,
				'circularProgressBarTopTitle'                  => '',
				'circularProgressBarBottomTitle'               => '',
				'circularProgressBarValueEnable'               => true,
				'circularProgressBarTopTitleEnable'            => true,
				'circularProgressBarTopValueEnable'            => false,
				'circularProgressBarBottomTitleEnable'         => true,
				'circularProgressBarBottomValueEnable'         => false,
				'semiCircularProgressBarValueEnable'           => true,
				'semiCircularProgressBarTopTitle'              => '',
				'semiCircularProgressBarBottomTitle'           => '',
				'semiCircularProgressBarTopTitleEnable'        => true,
				'semiCircularProgressBarTopValueEnable'        => false,
				'semiCircularProgressBarBottomTitleEnable'     => true,
				'semiCircularProgressBarBottomValueEnable'     => false,
				'horizontalProgressBarSize'                    => 25,
				'semiCircularProgressBarSize'                  => 200,
				'circularProgressBarSize'                      => 150,
				'circularProgressBarWidth'                     => 10,
				'semiCircularProgressBarWidth'                 => 10,
				'horizontalProgressBarBackgroundColor'         => '#d9d9d9',
				'horizontalProgressBarPrimaryTrackColor'       => '#80bfff',
				'gradientTrack'                                => true,
				'horizontalProgressBarSecondaryTrackColor'     => '#1a8cff',
				'horizontalProgressBarStripeColor'             => '#fff',
				'horizontalProgressBarTopTitleValueColor'      => '#333333',
				'horizontalProgressBarInnerTitleValueColor'    => '#333333',
				'horizontalProgressBarBottomTitleValueColor'   => '#333333',
				'horizontalProgressBarBorderRadius'            => 5,
				'horizontalProgressBarBorderStyle'             => 'solid',
				'horizontalProgressBarBorderWidth'             => 0,
				'horizontalProgressBarBorderColor'             => '#333333',
				'topTitleValueFontFamily'                      => '',
				'topTitleValueFontSize'                        => '',
				'topTitleValueFontSizeMobile'                  => '',
				'topTitleValueFontSizeTablet'                  => '',
				'topTitleValueFontWeight'                      => '400',
				'topTitleValueLineHeight'                      => 1,
				'topTitleValueLetterSpacing'                   => 0,
				'topTitleValueTextTransform'                   => '',
				'innerTitleValueFontFamily'                    => '',
				'innerTitleValueFontSize'                      => '',
				'innerTitleValueFontSizeMobile'                => '',
				'innerTitleValueFontSizeTablet'                => '',
				'innerTitleValueFontWeight'                    => '400',
				'innerTitleValueLineHeight'                    => 1,
				'innerTitleValueLetterSpacing'                 => 0,
				'innerTitleValueTextTransform'                 => '',
				'bottomTitleValueFontFamily'                   => '',
				'bottomTitleValueFontSize'                     => '',
				'bottomTitleValueFontSizeMobile'               => '',
				'bottomTitleValueFontSizeTablet'               => '',
				'bottomTitleValueFontWeight'                   => '400',
				'bottomTitleValueLineHeight'                   => 1,
				'bottomTitleValueLetterSpacing'                => 0,
				'bottomTitleValueTextTransform'                => '',
				'stripedHorizontalProgressBarAnimationTime'    => 20,
				'circularProgressBarBackgroundColor'           => '#d9d9d9',
				'circularProgressBarTrackColor'                => '#6665ae',
				'circularProgressBarTopTitleValueColor'        => '#333333',
				'circularProgressBarInnerValueColor'           => '#333333',
				'circularProgressBarBottomTitleValueColor'     => '#333333',
				'semiCircularProgressBarTopTitleValueColor'    => '#333333',
				'semiCircularProgressBarInnerValueColor'       => '#333333',
				'semiCircularProgressBarBottomTitleValueColor' => '#333333',
				'circularProgressBarTrackStyle'                => 'square',
				'circularTopTitleValueFontFamily'              => '',
				'circularTopTitleValueFontSize'                => '',
				'circularTopTitleValueFontSizeMobile'          => '',
				'circularTopTitleValueFontSizeTablet'          => '',
				'circularTopTitleValueFontWeight'              => '400',
				'circularTopTitleValueLineHeight'              => 1,
				'circularTopTitleValueLetterSpacing'           => 0,
				'circularTopTitleValueTextTransform'           => '',
				'circularBottomTitleValueFontFamily'           => '',
				'circularBottomTitleValueFontSize'             => '',
				'circularBottomTitleValueFontSizeMobile'       => '',
				'circularBottomTitleValueFontSizeTablet'       => '',
				'circularBottomTitleValueFontWeight'           => '400',
				'circularBottomTitleValueLineHeight'           => 1,
				'circularBottomTitleValueLetterSpacing'        => 0,
				'circularBottomTitleValueTextTransform'        => '',
				'circularInnerValueFontFamily'                 => '',
				'circularInnerValueFontSize'                   => '',
				'circularInnerValueFontSizeMobile'             => '',
				'circularInnerValueFontSizeTablet'             => '',
				'circularInnerValueFontWeight'                 => '400',
				'circularInnerValueLineHeight'                 => 1,
				'circularInnerValueLetterSpacing'              => 0,
				'semiCircularTopTitleValueFontFamily'          => '',
				'semiCircularTopTitleValueFontSize'            => '',
				'semiCircularTopTitleValueFontSizeMobile'      => '',
				'semiCircularTopTitleValueFontSizeTablet'      => '',
				'semiCircularTopTitleValueFontWeight'          => '400',
				'semiCircularTopTitleValueLineHeight'          => 1,
				'semiCircularTopTitleValueLetterSpacing'       => 0,
				'semiCircularTopTitleValueTextTransform'       => '',
				'semiCircularBottomTitleValueFontFamily'       => '',
				'semiCircularBottomTitleValueFontSize'         => '',
				'semiCircularBottomTitleValueFontSizeMobile'   => '',
				'semiCircularBottomTitleValueFontSizeTablet'   => '',
				'semiCircularBottomTitleValueFontWeight'       => '400',
				'semiCircularBottomTitleValueLineHeight'       => 1,
				'semiCircularBottomTitleValueLetterSpacing'    => 0,
				'semiCircularBottomTitleValueTextTransform'    => '',
				'semiCircularInnerValueFontFamily'             => '',
				'semiCircularInnerValueFontSize'               => '',
				'semiCircularInnerValueFontSizeMobile'         => '',
				'semiCircularInnerValueFontSizeTablet'         => '',
				'semiCircularInnerValueFontWeight'             => '400',
				'semiCircularInnerValueLineHeight'             => 1,
				'semiCircularInnerValueLetterSpacing'          => 0,
				'semiCircularProgressBarBackgroundColor'       => '#d9d9d9',
				'semiCircularProgressBarTrackColor'            => '#1a8cff',
			);
		}

		/**
		 * Generate gradient effect
		 *
		 * @param string $color1  primary color.
		 * @param string $color2  secondary color.
		 * @param string $gradientDirection  gradient direction.
		 * @param string $colorLocation1  primary color location.
		 * @param string $colorLocation2  secondary color location.
		 */
public static function generateBackgroundImageEffect(
					$color1,
					$color2,
					$gradientDirection,
					$colorLocation1,
					$colorLocation2
				) {
	$css =
		'linear-gradient(' .
		$gradientDirection .
		'deg, ' .
		$color1 .
		' ' .
		$colorLocation1 .
		'%,' .
		$color2 .
		' ' .
		$colorLocation2 .
		'%)';

	return $css;
}

		/**
		 * Get rgb value from hex value
		 *
		 * @param string $hex  color value.
		 * @param string $alpha  opacity.
		 */
public static function hexToRgb( $hex, $alpha = false ) {
	$hex      = str_replace( '#', '', $hex );
	$length   = strlen( $hex );
	$rgb['r'] = hexdec( $length == 6 ? substr( $hex, 0, 2 ) : ( $length == 3 ? str_repeat( substr( $hex, 0, 1 ), 2 ) : 0 ) );
	$rgb['g'] = hexdec( $length == 6 ? substr( $hex, 2, 2 ) : ( $length == 3 ? str_repeat( substr( $hex, 1, 1 ), 2 ) : 0 ) );
	$rgb['b'] = hexdec( $length == 6 ? substr( $hex, 4, 2 ) : ( $length == 3 ? str_repeat( substr( $hex, 2, 1 ), 2 ) : 0 ) );
	if ( $alpha ) {
		$rgb['a'] = $alpha;
	} else {
		$rgb['a'] = '0.0';
	}
	return implode( array_keys( $rgb ) ) . '(' . implode( ', ', $rgb ) . ')';
}

		/**
		 * Get CSS value
		 *
		 * @param string $value  CSS value.
		 * @param string $unit  CSS unit.
		 */
public static function get_css_value( $value = '', $unit = '' ) {

	if ( '' == $value ) { // phpcs:ignore WordPress.PHP.StrictComparisons.LooseComparison
		return $value;
	}
	$css_val = '';

	if ( 0 == $value ) {
		$css_val = 0;
	}

	if ( ! empty( $value ) ) {
		$css_val = esc_attr( $value ) . $unit;
	}

	return $css_val;
}
	}
}
