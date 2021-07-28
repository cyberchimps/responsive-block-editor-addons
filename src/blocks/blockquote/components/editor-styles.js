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
    quoteFontSizeMobile,
    quoteFontSizeTablet,
    quoteFontWeight,
    quoteLineHeight,
    quoteAlign,
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
    blockBorderStyle,
    blockBorderWidth,
    blockBorderRadius,
    blockBorderColor,
    textSpacingTop,
    textSpacingTopMobile,
    textSpacingTopTablet,
    textSpacingBottom,
    textSpacingBottomMobile,
    textSpacingBottomTablet,
    textSpacingLeft,
    textSpacingLeftMobile,
    textSpacingLeftTablet,
    textSpacingRight,
    textSpacingRightMobile,
    textSpacingRightTablet,
  } = props.attributes;

  let quoteopacity = quoteOpacity / 100;
  let imgopacity = opacity / 100;
  var boxShadowPositionCSS = boxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }
  var selectors = {
    "": {
      "background-color":
        backgroundType == "color"
          ? `${hexToRgba(backgroundColor || "#ffffff", imgopacity || 0)}`
          : undefined,
      color: quoteTextColor,
      "border-color": blockBorderColor,
      "border-style": blockBorderStyle,
      "border-width": generateCSSUnit(blockBorderWidth, "px"),
      "border-radius": generateCSSUnit(blockBorderRadius, "px"),
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
      "padding-left": generateCSSUnit(blockLeftPadding, "px"),
      "padding-right": generateCSSUnit(blockRightPadding, "px"),
      "padding-top": generateCSSUnit(blockTopPadding, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPadding, "px"),
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
    },
    " .responsive-block-editor-addons-section__video-wrap": {
      opacity: imgopacity,
    },
    " .responsive-block-editor-addons-section-background-image-wrap .responsive-block-editor-addons-section-background-image": {
      height: 100 + "%",
      opacity: imgopacity,
      "border-radius": generateCSSUnit(blockBorderRadius, "px"),
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
    },
    " .responsive-block-editor-addons-block-blockquote-item": {
      "padding-left": generateCSSUnit(textSpacingLeft, "px"),
      "padding-right": generateCSSUnit(textSpacingRight, "px"),
      "padding-top": generateCSSUnit(textSpacingTop, "px"),
      "padding-bottom": generateCSSUnit(textSpacingBottom, "px"),
    },
  };

  var mobile_selectors = {
    " .responsive-block-editor-addons-block-blockquote-text": {
      "font-size": generateCSSUnit(quoteFontSizeMobile, "px"),
    },
    "": {
      "padding-left": generateCSSUnit(blockLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingMobile, "px"),
      "padding-top": generateCSSUnit(blockTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingMobile, "px"),
    },
    " .responsive-block-editor-addons-block-blockquote-item": {
      "padding-left": generateCSSUnit(textSpacingLeftMobile, "px"),
      "padding-right": generateCSSUnit(textSpacingRightMobile, "px"),
      "padding-top": generateCSSUnit(textSpacingTopMobile, "px"),
      "padding-bottom": generateCSSUnit(textSpacingBottomMobile, "px"),
    },
  };

  var tablet_selectors = {
    " .responsive-block-editor-addons-block-blockquote-text": {
      "font-size": generateCSSUnit(quoteFontSizeTablet, "px"),
    },
    "": {
      "padding-left": generateCSSUnit(blockLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingTablet, "px"),
      "padding-top": generateCSSUnit(blockTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingTablet, "px"),
    },
    " .responsive-block-editor-addons-block-blockquote-item": {
      "padding-left": generateCSSUnit(textSpacingLeftTablet, "px"),
      "padding-right": generateCSSUnit(textSpacingRightTablet, "px"),
      "padding-top": generateCSSUnit(textSpacingTopTablet, "px"),
      "padding-bottom": generateCSSUnit(textSpacingBottomTablet, "px"),
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
