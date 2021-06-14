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
    quoteSize,
    quoteColor,
    quoteHposition,
    quoteVposition,
    quoteOpacity,
    leftPadding,
    rightPadding,
    topPadding,
    bottomPadding,
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
    borderStyle,
    borderWidth,
    blockBorderRadius,
    borderColor,
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
      "border-color": borderColor,
      "border-style": borderStyle,
      "border-width": generateCSSUnit(borderWidth, "px"),
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
      "padding-left": generateCSSUnit(leftPadding, "px"),
      "padding-right": generateCSSUnit(rightPadding, "px"),
      "padding-top": generateCSSUnit(topPadding, "px"),
      "padding-bottom": generateCSSUnit(bottomPadding, "px"),
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
  };

  var mobile_selectors = {};

  var tablet_selectors = {};

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-blockquote.block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
