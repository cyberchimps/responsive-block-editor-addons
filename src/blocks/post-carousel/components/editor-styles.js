/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";

function EditorStyles(props) {
  const {
    block_id,
    displayPostExcerpt,
    displayPostDate,
    displayPostLink,
    displayPostComment,
    displayPostTaxonomy,
    excerptLength,
    columns,
    pauseOnHover,
    infiniteLoop,
    transitionSpeed,
    autoplay,
    autoplaySpeed,
    arrowDots,
    arrowSize,
    arrowBorderSize,
    arrowBorderRadius,
    blockAlign,
    titleColor,
    contentColor,
    metaColor,
    dateColor,
    arrowDotsColor,
    ctaColor,
    ctaBackColor,
    ctaHoverColor,
    ctaHoverBackColor,
    ctaBorderColor,
    ctaHoverBorderColor,
    ctaBorderRadius,
    ctaBorderWidth,
    ctaBorderStyle,
    ctaHpadding,
    ctaVpadding,
    contentPadding,
    rowGap,
    columnGap,
    imageSpace,
    titleSpace,
    dateSpace,
    excerptSpace,
    ctaSpace,
    titleFontFamily,
    titleFontSize,
    titleFontSizeMobile,
    titleFontSizeTablet,
    titleFontWeight,
    titleLineHeight,
    metaFontFamily,
    metaFontSize,
    metaFontWeight,
    metaLineHeight,
    excerptFontFamily,
    excerptFontSize,
    excerptFontWeight,
    excerptLineHeight,
    ctaFontFamily,
    ctaFontSize,
    ctaFontWeight,
    ctaLineHeight,
    imagePosition,
    opacity,
    readMoreText,
    equalHeight,
    buttonTarget,
    contentPaddingMobile,
    bgColor,
  } = props.attributes;

  var slickButtonStyles = {
    "border-color": arrowDotsColor,
    "border-width": generateCSSUnit(arrowBorderSize, "px"),
    "border-radius": generateCSSUnit(arrowBorderRadius, "px"),
  };

  var selectors = {
    " .responsive-block-editor-addons-block-post-carousel-title": {
      "margin-top": generateCSSUnit(imageSpace, "px"),
      "margin-bottom": generateCSSUnit(titleSpace, "px"),
      "font-size": generateCSSUnit(titleFontSize, "px"),
    },
    " .responsive-block-editor-addons-block-post-carousel-title a": {
      color: titleColor,
      "line-height": titleLineHeight,
      "font-family": titleFontFamily,
      "font-weight": titleFontWeight,
    },
    " .responsive-block-editor-addons-block-post-carousel-byline": {
      color: metaColor,
      "font-family": metaFontFamily,
      "font-weight": metaFontWeight,
      "line-height": metaLineHeight,
      "font-size": generateCSSUnit(metaFontSize, "px"),
      "margin-bottom": generateCSSUnit(dateSpace, "px"),
    },
    " .responsive-block-editor-addons-block-post-carousel-date": {
      color: metaColor,
    },
    " .responsive-block-editor-addons-block-post-carousel-author a": {
      color: metaColor,
    },
    " .responsive-block-editor-addons-block-post-carousel-taxonomy a": {
      color: metaColor,
    },
    " .responsive-block-editor-addons-block-post-carousel-excerpt": {
      color: contentColor,
      "text-align": blockAlign,
      "font-family": excerptFontFamily,
      "font-weight": excerptFontWeight,
      "line-height": excerptLineHeight,
      "font-size": generateCSSUnit(excerptFontSize, "px"),
    },
    " .responsive-block-editor-addons-block-post-carousel-excerpt-inner": {
      "margin-bottom": generateCSSUnit(excerptSpace, "px"),
    },
    " .responsive-block-editor-addons-block-post-carousel-excerpt-inner p": {
      "margin-bottom": "0px",
    },
    " .responsive-block-editor-addons-block-post-carousel-more-link": {
      color: ctaColor,
      "background-color": ctaBackColor,
      "border-color": ctaBorderColor,
      "border-style": ctaBorderStyle,
      "border-radius": generateCSSUnit(ctaBorderRadius, "px"),
      "border-width": generateCSSUnit(ctaBorderWidth, "px"),
      "padding-left": generateCSSUnit(ctaHpadding, "px"),
      "padding-right": generateCSSUnit(ctaHpadding, "px"),
      "padding-top": generateCSSUnit(ctaVpadding, "px"),
      "padding-bottom": generateCSSUnit(ctaVpadding, "px"),
      "display": "inline-block",
    },
    " .responsive-block-editor-addons-block-post-carousel-more-link:hover": {
      color: ctaHoverColor,
      "background-color": ctaHoverBackColor,
      "border-color": ctaHoverBorderColor,
    },
    " .responsive-block-editor-addons-block-post-carousel-more-link-wrapper": {
      "margin-bottom": generateCSSUnit(ctaSpace, "px"),
      "font-family": ctaFontFamily,
      "font-weight": ctaFontWeight,
      "line-height": ctaLineHeight,
      "font-size": generateCSSUnit(ctaFontSize, "px"),
    },
    " .responsive-block-editor-addons-post-grid-items article": {
      "padding-left": generateCSSUnit(ctaHpadding, "px"),
      "padding-right": generateCSSUnit(ctaHpadding, "px"),
      "padding-top": generateCSSUnit(ctaVpadding, "px"),
      "padding-bottom": generateCSSUnit(ctaVpadding, "px"),
      "border-radius": generateCSSUnit(ctaBorderRadius, "px"),
      "border-width": generateCSSUnit(ctaBorderWidth, "px"),
      "border-style": ctaBorderStyle,
    },
    " .responsive-block-editor-addons-block-post-carousel-text-wrap": {
      padding: generateCSSUnit(contentPadding, "px"),
      "margin-bottom": generateCSSUnit(rowGap, "px"),
      "text-align": blockAlign,
    },
    " .responsive-block-editor-addons-block-post-carousel-header": {
      "margin-bottom": generateCSSUnit(rowGap, "px"),
      "text-align": blockAlign,
    },
    " .responsive-block-editor-addons-post-carousel-inner": {
      "margin-bottom": generateCSSUnit(rowGap, "px"),
      "background-color": bgColor,
    },
    " .responsive-post-slick-carousel ul.slick-dots li button:before": {
      color: arrowDotsColor,
    },
    " .responsive-post-slick-carousel .slick-arrow .dashicon": {
      color: arrowDotsColor,
    },
    " .responsive-post-slick-carousel .slick-next.slick-arrow": slickButtonStyles,
    " .responsive-post-slick-carousel .slick-prev.slick-arrow": slickButtonStyles,

    " .responsive-post-slick-carousel .slick-slide>div:first-child": {
      "margin-left": generateCSSUnit(columnGap / 2, "px"),
      "margin-right": generateCSSUnit(columnGap / 2, "px"),
    },
  };

  var mobile_selectors = {
    " .responsive-block-editor-addons-block-post-carousel-title": {
      "font-size": generateCSSUnit(titleFontSizeMobile, "px"),
    },
    " .responsive-block-editor-addons-block-post-carousel-text-wrap": {
      padding: generateCSSUnit(contentPaddingMobile, "px"),
    },
  };

  var tablet_selectors = {
    " .responsive-block-editor-addons-block-post-carousel-title": {
      "font-size": generateCSSUnit(titleFontSizeTablet, "px"),
    },
    " .responsive-block-editor-addons-block-post-carousel-text-wrap": {
      padding: generateCSSUnit(contentPadding, "px"),
    },
  };
  var extra_styles = {
    ".editor-styles-wrapper .responsive-block-editor-addons-block-post-carousel-excerpt p": {
      "line-height": excerptLineHeight,
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-post-carousel.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");
  styling_css += generateCSS(extra_styles, "");

  return styling_css;
}

export default EditorStyles;
