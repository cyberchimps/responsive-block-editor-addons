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
    testimonialBlock,
    count,
    gutter,
    testimonialAlignment,
    titleFontFamily,
    titleFontSize,
    titleFontSizeMobile,
    titleFontSizeTablet,
    titleLineHeight,
    titleFontWeight,
    titleTextTransform,
    nameFontFamily,
    nameFontSize,
    nameFontSizeMobile,
    nameFontSizeTablet,
    nameLineHeight,
    nameFontWeight,
    nameTextTransform,
    contentFontFamily,
    contentFontSize,
    contentFontSizeMobile,
    contentFontSizeTablet,
    contentLineHeight,
    contentFontWeight,
    contentTextTransform,
    imageSize,
    imageWidth,
    contentSpacing,
    contentSpacingTablet,
    contentSpacingMobile,
    titleSpacing,
    nameSpacing,
    imageSpacing,
    testimonialTextColor,
    testimonialTitleColor,
    testimonialNameColor,
    testimonialImgURL,
    backgroundColor,
    testimonialFontSize,
    testimonialCiteAlign,
    blockBorderRadius,
    blockBorderColor,
    blockBorderWidth,
    blockBorderStyle,
    padding,
    paddingTablet,
    paddingMobile,
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
    opacity,
    backgroundImagePosition,
    backgroundImageRepeat,
    backgroundImageSize,
    backgroundColor2,
    gradientDirection,
    bgGradient,
    backgroundImage,
    colorLocation1,
    colorLocation2,
  } = props.attributes;

  var boxShadowPositionCSS = boxShadowPosition;
  var hoverboxShadowPositionCSS = hoverboxShadowPosition;

  var bgimage = backgroundImage ? backgroundImage : "";
  var tempsecondaryBackgroundColor = bgGradient
    ? backgroundColor2
    : backgroundColor;
  var bggradient =
    "linear-gradient(" +
    gradientDirection +
    "deg," +
    hexToRgba(backgroundColor || "#ffffff", opacity || 0) +
    colorLocation1 +
    "% ," +
    hexToRgba(tempsecondaryBackgroundColor || "#ffffff", opacity || 0) +
    colorLocation2 +
    "% ),url(" +
    bgimage +
    ")";

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }

  if ("outset" === hoverboxShadowPosition) {
    hoverboxShadowPositionCSS = "";
  }

  var selectors = {
    " .responsive-block-editor-addons-testimonial-text": {
      "text-align": testimonialAlignment,
      "font-family": contentFontFamily,
      "font-size": generateCSSUnit(contentFontSize, "px"),
      "line-height": contentLineHeight,
      "font-weight": contentFontWeight,
      "text-transform": contentTextTransform,
      "margin-bottom": generateCSSUnit(contentSpacing, "px"),
      color: testimonialTextColor,
    },
    " .responsive-block-editor-addons-testimonial-info": {
      "margin-bottom": generateCSSUnit(titleSpacing, "px"),
    },
    " .responsive-block-editor-addons-testimonial-info .responsive-block-editor-addons-testimonial-inner-block .responsive-block-editor-addons-testimonial-avatar-wrap": {
      "padding-right": generateCSSUnit(imageSpacing, "px"),
    },
    " .responsive-block-editor-addons-testimonial-info .responsive-block-editor-addons-testimonial-inner-block .responsive-block-editor-addons-testimonial-avatar-wrap .responsive-block-editor-addons-testimonial-image-wrap": {
      height: generateCSSUnit(imageWidth, "px"),
      width: generateCSSUnit(imageWidth, "px"),
    },
    " .change-image .responsive-block-editor-addons-testimonial-avatar": {
      height: generateCSSUnit(imageWidth, "px"),
      width: generateCSSUnit(imageWidth, "px"),
    },
    " .responsive-block-editor-addons-testimonial-details .responsive-block-editor-addons-testimonial-name": {
      color: testimonialNameColor,
      "font-family": nameFontFamily,
      "font-size": generateCSSUnit(nameFontSize, "px"),
      "line-height": nameLineHeight,
      "font-weight": nameFontWeight,
      "text-transform": nameTextTransform,
      "margin-bottom": generateCSSUnit(nameSpacing, "px"),
    },
    " .responsive-block-editor-addons-testimonial-details .responsive-block-editor-addons-testimonial-title": {
      color: testimonialTitleColor,
      "font-family": titleFontFamily,
      "font-size": generateCSSUnit(titleFontSize, "px"),
      "line-height": titleLineHeight,
      "font-weight": titleFontWeight,
      "text-transform": titleTextTransform,
    },
    " .testimonial-box.responsive-block-editor-addons-block-testimonial": {
      "box-shadow": `${boxShadowHOffset}px ${boxShadowVOffset}px ${boxShadowBlur}px ${boxShadowSpread}px ${boxShadowColor} ${boxShadowPositionCSS}`,
      padding: generateCSSUnit(padding, "px"),
    },
    " .responsive-block-editor-addons-block-testimonial:hover": {
      "box-shadow": `${hoverboxShadowHOffset}px ${hoverboxShadowVOffset}px ${hoverboxShadowBlur}px ${hoverboxShadowSpread}px ${hoverboxShadowColor} ${hoverboxShadowPositionCSS}`,
    },
    " .responsive-block-editor-addons-block-testimonial": {
      "background-image": bggradient,
      "background-size": backgroundImageSize,
      "background-repeat": backgroundImageRepeat,
      "background-position": backgroundImagePosition,
      color: testimonialTextColor,
      "border-style": blockBorderStyle,
      "border-width": generateCSSUnit(blockBorderWidth, "px"),
      "border-radius": generateCSSUnit(blockBorderRadius, "px"),
      "border-color": blockBorderColor,
    },
  };

  var mobile_selectors = {
    " .testimonial-box.responsive-block-editor-addons-block-testimonial": {
      padding: generateCSSUnit(paddingMobile, "px"),
    },
    " .responsive-block-editor-addons-testimonial-details .responsive-block-editor-addons-testimonial-name": {
      "font-size": generateCSSUnit(nameFontSizeMobile, "px"),
    },
    " .responsive-block-editor-addons-testimonial-details .responsive-block-editor-addons-testimonial-title": {
      "font-size": generateCSSUnit(titleFontSizeMobile, "px"),
    },
    " .responsive-block-editor-addons-testimonial-text": {
      "font-size": generateCSSUnit(contentFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(contentSpacingMobile, "px"),
    },
  };

  var tablet_selectors = {
    " .testimonial-box.responsive-block-editor-addons-block-testimonial": {
      padding: generateCSSUnit(paddingTablet, "px"),
    },
    " .responsive-block-editor-addons-testimonial-details .responsive-block-editor-addons-testimonial-name": {
      "font-size": generateCSSUnit(nameFontSizeTablet, "px"),
    },
    " .responsive-block-editor-addons-testimonial-details .responsive-block-editor-addons-testimonial-title": {
      "font-size": generateCSSUnit(titleFontSizeTablet, "px"),
    },
    " .responsive-block-editor-addons-testimonial-text": {
      "font-size": generateCSSUnit(contentFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(contentSpacingTablet, "px"),
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-testimonial.block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
