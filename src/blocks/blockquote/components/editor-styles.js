/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";
import { hexToRgba } from "../../../utils/index.js";
import generateBackgroundImageEffect from "../../../generateBackgroundImageEffect";

function EditorStyles(props) {
  const {
    block_id,
    quoteTextColor,
    quoteFontFamily,
    quoteFontSize,
    quoteFontWeight,
    quoteLineHeight,
    quoteAlign,
    quoteAlignMobile,
    quoteAlignTablet,
    quoteSize,
    quoteColor,
    quoteHposition,
    quoteVposition,
    quoteOpacity,
    blockLeftPadding,
    blockLeftPaddingMobile,
    blockLeftPaddingTablet,
    blockRightPadding,
    blockRightPaddingMobile,
    blockRightPaddingTablet,
    blockTopPadding,
    blockTopPaddingMobile,
    blockTopPaddingTablet,
    blockBottomPadding,
    blockBottomPaddingMobile,
    blockBottomPaddingTablet,
    blockLeftMargin,
    blockLeftMarginMobile,
    blockLeftMarginTablet,
    blockRightMargin,
    blockRightMarginMobile,
    blockRightMarginTablet,
    blockTopMargin,
    blockTopMarginMobile,
    blockTopMarginTablet,
    blockBottomMargin,
    blockBottomMarginMobile,
    blockBottomMarginTablet,
    backgroundColor,
    backgroundColor1,
    backgroundColor2,
    colorLocation1,
    colorLocation2,
    gradientDirection,
    backgroundType,
    opacity,
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
    hoverboxShadowColor,
    hoverboxShadowHOffset,
    hoverboxShadowVOffset,
    hoverboxShadowBlur,
    hoverboxShadowSpread,
    hoverboxShadowPosition,
    blockBorderStyle,
    blockBorderWidth,
    blockBorderRadius,
    blockTopRadius,
    blockRightRadius,
    blockBottomRadius,
    blockLeftRadius,
    blockTopRadiusTablet,
    blockRightRadiusTablet,
    blockBottomRadiusTablet,
    blockLeftRadiusTablet,
    blockTopRadiusMobile,
    blockRightRadiusMobile,
    blockBottomRadiusMobile,
    blockLeftRadiusMobile,
    blockBorderColor,
    textTopPadding,
    textTopPaddingMobile,
    textTopPaddingTablet,
    textBottomPadding,
    textBottomPaddingMobile,
    textBottomPaddingTablet,
    textLeftPadding,
    textLeftPaddingMobile,
    textLeftPaddingTablet,
    textRightPadding,
    textRightPaddingMobile,
    textRightPaddingTablet,
    quoteFontSizeMobile,
    quoteFontSizeTablet,
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
    borderColor, // For compatibility with v1.3.2.
    borderStyle, // For compatibility with v1.3.2.
    borderWidth, // For compatibility with v1.3.2.
    topPadding, // For compatibility with v1.3.2.
    bottomPadding, // For compatibility with v1.3.2.
    leftPadding, // For compatibility with v1.3.2.
    rightPadding, // For compatibility with v1.3.2.
    quoteTypographyColor,
    twColor,
    twBg, 
    twHColor, 
    twHBg,
    twTopPadding, 
    twRightPadding, 
    twBottomPadding, 
    twLeftPadding,
    twTopPaddingTablet, 
    twRightPaddingTablet, 
    twBottomPaddingTablet, 
    twLeftPaddingTablet,
    twTopPaddingMobile, 
    twRightPaddingMobile, 
    twBottomPaddingMobile, 
    twLeftPaddingMobile,
    twFontFamily, 
    twFontSize, 
    twFontSizeTablet, 
    twFontSizeMobile, 
    twFontWeight, 
    twLineHeight,
    twTextTransform,
    twTextDecoration,
    twIconTextSpacing,
    twTypographyColor,
    quoteTextTransform,
    quoteFontStyle,
    twFontStyle
  } = props.attributes;

  let quoteopacity = quoteOpacity / 100;
  let imgopacity = opacity / 100;
  var boxShadowPositionCSS = boxShadowPosition;
  var hoverboxShadowPositionCSS = hoverboxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }
  if ("outset" === hoverboxShadowPosition) {
    hoverboxShadowPositionCSS = "";
  }
  var selectors = {
    "": {
      'opacity': hideWidget ? 0.2 : 1,
      "background-color":
        backgroundType == "color"
          ? `${hexToRgba(backgroundColor || "#ffffff", imgopacity || 0)}`
          : undefined,
      color: quoteTypographyColor,
      "border-color": borderColor !== "empty" && blockBorderColor === "" ? borderColor : blockBorderColor, // For compatibility with v1.3.2.
      "border-style": borderStyle !== "empty" && blockBorderStyle === "none" ? borderStyle : blockBorderStyle, // For compatibility with v1.3.2.
      "border-width": borderWidth !== 999 && blockBorderWidth === 1 ? generateCSSUnit(borderWidth, "px") : generateCSSUnit(blockBorderWidth, "px"), // For compatibility with v1.3.2.
      "border-top-left-radius": generateCSSUnit(blockTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadius, "px"),
      "box-shadow":
        generateCSSUnit(boxShadowHOffset, "px") +
        " " +
        generateCSSUnit(boxShadowVOffset, "px") +
        " " +
        generateCSSUnit(boxShadowBlur, "px") +
        " " +
        generateCSSUnit(boxShadowSpread, "px") +
        " " +
        boxShadowColor +
        " " +
        boxShadowPositionCSS,
      "text-align": quoteAlign,
      "padding-left": leftPadding !== 999 && blockLeftPadding === 60 ? generateCSSUnit(leftPadding, "px") : generateCSSUnit(blockLeftPadding, "px"), // For compatibility with v1.3.2.
      "padding-right": rightPadding !== 999 && blockRightPadding === 60 ? generateCSSUnit(rightPadding, "px") : generateCSSUnit(blockRightPadding, "px"), // For compatibility with v1.3.2.
      "padding-top": topPadding !== 999 && blockTopPadding === 70 ? generateCSSUnit(topPadding, "px") : generateCSSUnit(blockTopPadding, "px"), // For compatibility with v1.3.2.
      "padding-bottom": bottomPadding !== 999 && blockBottomPadding === 70 ? generateCSSUnit(bottomPadding, "px") : generateCSSUnit(blockBottomPadding, "px"), // For compatibility with v1.3.2.
      "background-color":
        backgroundType == "color"
          ? `${hexToRgba(backgroundColor || "#ffffff", imgopacity || 0)}`
          : undefined,
      "background-image":
        backgroundType == "gradient"
          ? `linear-gradient(${gradientDirection}deg, ${hexToRgba(
            backgroundColor1 || "#fff",
            imgopacity || 0
          )} ${colorLocation1}%, ${hexToRgba(
            backgroundColor2 || "#fff",
            imgopacity || 0
          )} ${colorLocation2}%)`
          : undefined,
      "margin-top" : generateCSSUnit(blockTopMargin, "px"),
      "margin-right" : generateCSSUnit(blockRightMargin, "px"),
      "margin-bottom" : generateCSSUnit(blockBottomMargin, "px"),
      "margin-left" : generateCSSUnit(blockLeftMargin, "px"),
    },
    ":hover": {
      "box-shadow": hoverboxShadowColor !== '' ?
        generateCSSUnit(hoverboxShadowHOffset, "px") +
        " " +
        generateCSSUnit(hoverboxShadowVOffset, "px") +
        " " +
        generateCSSUnit(hoverboxShadowBlur, "px") +
        " " +
        generateCSSUnit(hoverboxShadowSpread, "px") +
        " " +
        hoverboxShadowColor +
        " " +
        hoverboxShadowPositionCSS : '',
    },
    " .responsive-block-editor-addons-section__video-wrap": {
      opacity: imgopacity,
    },
    " .responsive-block-editor-addons-section-background-image-wrap .responsive-block-editor-addons-section-background-image": {
      height: 100 + "%",
      opacity: imgopacity,
      "border-top-left-radius": generateCSSUnit(blockTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadius, "px"),
    },
    " .responsive-block-editor-addons-block-blockquote-item .responsive-block-editor-addons-block-blockquote-quote": {
      height: generateCSSUnit(quoteSize, "px"),
      width: generateCSSUnit(quoteSize, "px"),
      fill: quoteColor,
      left: generateCSSUnit(quoteHposition, "px"),
      top: generateCSSUnit(quoteVposition, "px"),
      opacity: quoteopacity,
    },
    " .responsive-block-editor-addons-block-blockquote-text": {
      "text-align": quoteAlign,
      "font-family": quoteFontFamily,
      "font-size": generateCSSUnit(quoteFontSize, "px"),
      "font-weight": quoteFontWeight,
      "line-height": quoteLineHeight,
      "text-transform": quoteTextTransform,
      "font-style": quoteFontStyle,
    },
    " .responsive-block-editor-addons-block-blockquote-item": {
      "padding-left": generateCSSUnit(textLeftPadding, "px"),
      "padding-right": generateCSSUnit(textRightPadding, "px"),
      "padding-top": generateCSSUnit(textTopPadding, "px"),
      "padding-bottom": generateCSSUnit(textBottomPadding, "px"),
    },
    // ==== Twitter Button Container ====
    " .rbea-bq__tweet-wrap": {
      display: "flex",
      "justify-content": "flex-end",
      "margin-top": "12px",
    },

    // ==== Twitter Button (Base, attributes-driven) ====
    " .rbea-bq__tweet": {
      display: "inline-flex",
      "align-items": "center",
      gap: generateCSSUnit(twIconTextSpacing, "px"),
      "text-decoration": "none",
      "line-height": "1",
      "border-radius": "999px",
      "border": "1px solid transparent",
      transition: "all .15s ease-in-out",
      "font-style": twFontStyle,
      color: twColor || twTypographyColor,
      background: twBg,
      "padding-top": generateCSSUnit(twTopPadding, "px"),
      "padding-right": generateCSSUnit(twRightPadding, "px"),
      "padding-bottom": generateCSSUnit(twBottomPadding, "px"),
      "padding-left": generateCSSUnit(twLeftPadding, "px"),
      "font-family": twFontFamily,
      "font-weight": twFontWeight,
      "line-height": twLineHeight,
      "font-size": generateCSSUnit(twFontSize, "px"),
      "text-transform": twTextTransform,
      "text-decoration": twTextDecoration,
    },
    " .rbea-bq__tweet *": {
      color: "inherit !important" // Make sure that theme does not override color,
    },
    " .rbea-bq__tweet-wrap .rbea-bq__tweet": {
      "margin-right": "0.7rem",
    },
    " .rbea-bq__tweet svg": {
      width: generateCSSUnit(twFontSize, "px"), 
      height: generateCSSUnit(twFontSize, "px")
    },
    // Hover (attributes-driven)
    " .rbea-bq__tweet:hover": {
      color: twHColor || (twColor || twTypographyColor),
      background: twHBg || twBg,
    },

    // Icon size stays consistent
    " .rbea-bq__tweet .dashicons": {
      "font-size": "16px",
      width: "16px",
      height: "16px",
    },

    // Variants (structural differences only; colors come from attributes)
    " .rbea-bq__tweet--bubble": {
      border: "1px solid currentColor",
    },
    " .rbea-bq__tweet--link": {
      background: "transparent",
      border: "none",
      "padding-top": generateCSSUnit("", "px"),
      "padding-right": generateCSSUnit("", "px"),
      "padding-bottom": generateCSSUnit("", "px"),
      "padding-left": generateCSSUnit("", "px"),
    },
    " .rbea-bq__tweet--link .dashicons": {
      position: "relative",
      top: "1px",
    },
  };
  var mobile_selectors = {
    "": {
      'opacity': hideWidgetMobile ? 0.2 : 1,
      "text-align": quoteAlignMobile,
      "padding-left": generateCSSUnit(blockLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingMobile, "px"),
      "padding-top": generateCSSUnit(blockTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingMobile, "px"),
      "margin-top" : generateCSSUnit(blockTopMarginMobile, "px"),
      "margin-right" : generateCSSUnit(blockRightMarginMobile, "px"),
      "margin-bottom" : generateCSSUnit(blockBottomMarginMobile, "px"),
      "margin-left" : generateCSSUnit(blockLeftMarginMobile, "px"),
      "border-top-left-radius": generateCSSUnit(blockTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusMobile, "px"),
    },
    " .responsive-block-editor-addons-block-blockquote-item": {
      "padding-left": generateCSSUnit(textLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(textRightPaddingMobile, "px"),
      "padding-top": generateCSSUnit(textTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(textBottomPaddingMobile, "px"),
    },
    " .responsive-block-editor-addons-block-blockquote-text": {
      "font-size": generateCSSUnit(quoteFontSizeMobile, "px"),
    },
    " .responsive-block-editor-addons-section-background-image-wrap .responsive-block-editor-addons-section-background-image": {
        "border-top-left-radius": generateCSSUnit(blockTopRadiusMobile, "px"),
        "border-top-right-radius": generateCSSUnit(blockRightRadiusMobile, "px"),
        "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusMobile, "px"),
        "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusMobile, "px"),
      },
    " .rbea-bq__tweet": {
        "padding-top": generateCSSUnit(twTopPaddingMobile, "px"),
        "padding-right": generateCSSUnit(twRightPaddingMobile, "px"),
        "padding-bottom": generateCSSUnit(twBottomPaddingMobile, "px"),
        "padding-left": generateCSSUnit(twLeftPaddingMobile, "px"),
        "font-size": generateCSSUnit(twFontSizeMobile, "px"),
      },
    " .rbea-bq__tweet svg": {
      width: generateCSSUnit(twFontSizeMobile, "px"), 
      height: generateCSSUnit(twFontSizeMobile, "px")
    },
  };

  var tablet_selectors = {
    "": {
      'opacity': hideWidgetTablet ? 0.2 : 1,
      "text-align": quoteAlignTablet,
      "padding-left": generateCSSUnit(blockLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingTablet, "px"),
      "padding-top": generateCSSUnit(blockTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingTablet, "px"),
      "margin-top" : generateCSSUnit(blockTopMarginTablet, "px"),
      "margin-right" : generateCSSUnit(blockRightMarginTablet, "px"),
      "margin-bottom" : generateCSSUnit(blockBottomMarginTablet, "px"),
      "margin-left" : generateCSSUnit(blockLeftMarginTablet, "px"),
      "border-top-left-radius": generateCSSUnit(blockTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusTablet, "px"),
    },
    " .responsive-block-editor-addons-block-blockquote-item": {
      "padding-left": generateCSSUnit(textLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(textRightPaddingTablet, "px"),
      "padding-top": generateCSSUnit(textTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(textBottomPaddingTablet, "px"),
    },
    " .responsive-block-editor-addons-block-blockquote-text": {
      "font-size": generateCSSUnit(quoteFontSizeTablet, "px"),
    },
    " .responsive-block-editor-addons-section-background-image-wrap .responsive-block-editor-addons-section-background-image": {
        "border-top-left-radius": generateCSSUnit(blockTopRadiusTablet, "px"),
        "border-top-right-radius": generateCSSUnit(blockRightRadiusTablet, "px"),
        "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusTablet, "px"),
        "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusTablet, "px"),
      },
    " .rbea-bq__tweet": {
        "padding-top": generateCSSUnit(twTopPaddingTablet, "px"),
        "padding-right": generateCSSUnit(twRightPaddingTablet, "px"),
        "padding-bottom": generateCSSUnit(twBottomPaddingTablet, "px"),
        "padding-left": generateCSSUnit(twLeftPaddingTablet, "px"),
        "font-size": generateCSSUnit(twFontSizeTablet, "px"),
      },
    " .rbea-bq__tweet svg": {
      width: generateCSSUnit(twFontSizeTablet, "px"), 
      height: generateCSSUnit(twFontSizeTablet, "px")
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-blockquote.block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
