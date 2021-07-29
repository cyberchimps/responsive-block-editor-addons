/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";
import { hexToRgba } from "../../../utils/index.js";
import generateBackgroundImageEffect from "../../../generateBackgroundImageEffect";

function EditorStyles(props) {
  const {
    //attributes here
    columns,
    columnGap,
    contentWidth,
    width,
    widthType,
    stack,
    blockTopPadding,
    blockTopPaddingTablet,
    blockTopPaddingMobile,
    blockBottomPadding,
    blockBottomPaddingTablet,
    blockBottomPaddingMobile,
    blockLeftPadding,
    blockLeftPaddingTablet,
    blockLeftPaddingMobile,
    blockRightPadding,
    blockRightPaddingTablet,
    blockRightPaddingMobile,
    blockTopMargin,
    blockTopMarginTablet,
    blockTopMarginMobile,
    blockBottomMargin,
    blockBottomMarginTablet,
    blockBottomMarginMobile,
    blockLeftMargin,
    blockLeftMarginTablet,
    blockLeftMarginMobile,
    blockRightMargin,
    blockRightMarginTablet,
    blockRightMarginMobile,
    backgroundColor,
    backgroundColor1,
    backgroundColor2,
    colorLocation1,
    colorLocation2,
    gradientDirection,
    backgroundType,
    backgroundImage,
    opacity,
    blockBorderStyle,
    blockBorderWidth,
    blockBorderRadius,
    blockBorderColor,
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
    backgroundImagePosition,
    backgroundAttachment,
    backgroundImageRepeat,
    backgroundImageSize,
    overlayType,
    backgroundImageColor,
    gradientOverlayColor1,
    gradientOverlayLocation1,
    gradientOverlayColor2,
    gradientOverlayLocation2,
    gradientOverlayType,
    gradientOverlayAngle,
    gradientOverlayPosition,
    height,
    customHeight,
    blockAlign,
    verticalAlign,
    block_id,
    z_index,
    align,
  } = props.attributes;

  var boxShadowPositionCSS = boxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }
  let imgopacity = opacity / 100;
  let max_width = "100%";

  if ("custom" == contentWidth) {
    if ("" != width) {
      max_width = generateCSSUnit(width, widthType);
    }
  }

  let columnHeightStyle = "";
  if ("half" == height) columnHeightStyle = "50vh !important";
  if ("full" == height) columnHeightStyle = "100vh !important";
  if ("custom" == height) {
    columnHeightStyle = customHeight + "px !important";
  }

  var selectors = {
    " .background-type-image": {
      "background-image":
        backgroundType == "image"
          ? `linear-gradient(${hexToRgba(
            backgroundImageColor || "#fff",
            imgopacity || 0
          )},${hexToRgba(
            backgroundImageColor || "#fff",
            imgopacity || 0
          )}),url(${backgroundImage})`
          : "",
      "background-position": backgroundImagePosition,
      "background-attachment": backgroundAttachment,
      "background-repeat": backgroundImageRepeat,
      "background-size": backgroundImageSize,
      "z-index": z_index,
    },
    " .responsive-block-editor-addons-block-columns.overlay-type-color": {
      "background-color":
        backgroundType == "image"
          ? `${hexToRgba(backgroundImageColor || "#fff", imgopacity || 0)}`
          : "",
    },
    " .responsive-block-editor-addons-block-columns.overlay-type-gradient.linear": {
      "background-image": generateBackgroundImageEffect(
        `${hexToRgba(gradientOverlayColor1 || "#fff", imgopacity || 0)}`,
        `${hexToRgba(gradientOverlayColor2 || "#fff", imgopacity || 0)}`,
        gradientOverlayAngle,
        gradientOverlayLocation1,
        gradientOverlayLocation2
      ),
    },
    " .responsive-block-editor-addons-block-columns.overlay-type-gradient.radial": {
      "background-image": `radial-gradient( at ${gradientOverlayPosition}, ${hexToRgba(
        gradientOverlayColor1 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation1}%, ${hexToRgba(
        gradientOverlayColor2 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation2}%)`,
    },
    " .responsive-block-editor-addons-block-columns .responsive-block-editor-addons-block-column": {
      "min-height": columnHeightStyle,
      "align-items": verticalAlign,
    },
    " .responsive-block-editor-addons-block-columns": {
      "padding-top": generateCSSUnit(blockTopPadding, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPadding, "px"),
      "padding-left": generateCSSUnit(blockLeftPadding, "px"),
      "padding-right": generateCSSUnit(blockRightPadding, "px"),
      "margin-top": generateCSSUnit(blockTopMargin, "px"),
      "margin-bottom": generateCSSUnit(blockBottomMargin, "px"),
      "margin-left": generateCSSUnit(blockLeftMargin, "px"),
      "margin-right": generateCSSUnit(blockRightMargin, "px"),
      "text-align": blockAlign,
      "border-color": blockBorderColor,
      "border-style": blockBorderStyle,
      "border-width": generateCSSUnit(blockBorderWidth, "px"),
      "border-radius": generateCSSUnit(blockBorderRadius, "px"),
      "background-color":
        backgroundType == "color"
          ? `${hexToRgba(backgroundColor || "#ffffff", imgopacity || 0)}`
          : undefined,
      "background-image":
        backgroundType == "gradient"
          ? generateBackgroundImageEffect(
            backgroundColor1,
            backgroundColor2,
            gradientDirection,
            colorLocation1,
            colorLocation2
          )
          : undefined,
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
    },
    " .responsive-columns-inner-wrap": {
      "max-width": max_width,
    },
  };

  var mobile_selectors = {
    " .responsive-block-editor-addons-block-columns": {
      "padding-top": generateCSSUnit(blockTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(blockLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingMobile, "px"),
      "margin-top": generateCSSUnit(blockTopMarginMobile, "px"),
      "margin-bottom": generateCSSUnit(blockBottomMarginMobile, "px"),
      "margin-left": generateCSSUnit(blockLeftMarginMobile, "px"),
      "margin-right": generateCSSUnit(blockRightMarginMobile, "px"),
    },
  };

  var tablet_selectors = {
    " .responsive-block-editor-addons-block-columns": {
      "padding-top": generateCSSUnit(blockTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(blockLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingTablet, "px"),
      "margin-top": generateCSSUnit(blockTopMarginTablet, "px"),
      "margin-bottom": generateCSSUnit(blockBottomMarginTablet, "px"),
      "margin-left": generateCSSUnit(blockLeftMarginTablet, "px"),
      "margin-right": generateCSSUnit(blockRightMarginTablet, "px"),
    },
  };

  var styling_css = "";
  var id = `#block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
