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
    titleLineHeight,
    titleFontWeight,
    titleTextTransform,
    nameFontFamily,
    nameFontSize,
    nameLineHeight,
    nameFontWeight,
    nameTextTransform,
    contentFontFamily,
    contentFontSize,
    contentLineHeight,
    contentFontWeight,
    contentTextTransform,
    imageSize,
    imageWidth,
    contentSpacing,
    titleSpacing,
    nameSpacing,
    imageSpacing,
    testimonialTextColor,
    testimonialTitleColor,
    testimonialNameColor,
    testimonialImgURL,
    testimonialBackgroundColor,
    testimonialFontSize,
    testimonialCiteAlign,
    borderRadius,
    borderColor,
    borderWidth,
    borderStyle,
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
    backgroundPosition,
    backgroundRepeat,
    backgroundSize,
    secondaryBackgroundColor,
    gradientDegree,
    bgGradient,
    backgroundImage,
    imageShape,
  } = props.attributes;

  var boxShadowPositionCSS = boxShadowPosition;
  var hoverboxShadowPositionCSS = hoverboxShadowPosition;

  var bgimage = backgroundImage ? backgroundImage : "";
  var tempsecondaryBackgroundColor = bgGradient
    ? secondaryBackgroundColor
    : testimonialBackgroundColor;
  var bggradient =
    "linear-gradient(" +
    gradientDegree +
    "deg," +
    hexToRgba(testimonialBackgroundColor || "#ffffff", opacity || 0) +
    "," +
    hexToRgba(tempsecondaryBackgroundColor || "#ffffff", opacity || 0) +
    "),url(" +
    bgimage +
    ")";

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }

  if ("outset" === hoverboxShadowPosition) {
    hoverboxShadowPositionCSS = "";
  }

  var selectors = {
    " .wp-block-responsive-block-editor-addons-testimonial:last-child": {
      "margin-bottom" : '0 !important',
    },
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
      "background-size": backgroundSize,
      "background-repeat": backgroundRepeat,
      "background-position": backgroundPosition,
      color: testimonialTextColor,
      "border-style": borderStyle,
      "border-width": generateCSSUnit(borderWidth, "px"),
      "border-radius": generateCSSUnit(borderRadius, "px"),
      "border-color": borderColor,
    },
  };

  var mobile_selectors = {
    
    " .testimonial-box.responsive-block-editor-addons-block-testimonial": {
      padding: generateCSSUnit(paddingMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-testimonial:last-child": {
      "margin-bottom" : '0 !important',
    },
  };

  var tablet_selectors = {
    " .testimonial-box.responsive-block-editor-addons-block-testimonial": {
      padding: generateCSSUnit(paddingTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-testimonial:last-child": {
      "margin-bottom" : `${generateCSSUnit(20, "px")} !important`,
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
