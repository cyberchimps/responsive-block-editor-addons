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
    imageWidthTablet,
    imageWidthMobile,
    contentSpacing,
    contentSpacingMobile,
    contentSpacingTablet,
    titleSpacing,
    titleSpacingMobile,
    titleSpacingTablet,
    nameSpacing,
    nameSpacingMobile,
    nameSpacingTablet,
    imageSpacing,
    imageSpacingMobile,
    imageSpacingTablet,
    testimonialTextColor,
    testimonialTitleColor,
    testimonialNameColor,
    testimonialImgURL,
    testimonialBackgroundColor,
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
    backgroundPosition,
    backgroundRepeat,
    backgroundSize,
    backgroundColor2,
    gradientDirection,
    bgGradient,
    backgroundImage,
    imageShape,
    colorLocation1,
    colorLocation2,
	contentFontSizeMobile,
	contentFontSizeTablet,
	nameFontSizeMobile,
	nameFontSizeTablet,
	titleFontSizeMobile,
	titleFontSizeTablet,
	borderStyle, //For compatibility with v1.3.2.
	borderWidth, //For compatibility with v1.3.2.
	borderRadius, //For compatibility with v1.3.2.
	borderColor, //For compatibility with v1.3.2.
	secondaryBackgroundColor, //For compatibility with v1.3.2.
  } = props.attributes;

  var boxShadowPositionCSS = boxShadowPosition;
  var hoverboxShadowPositionCSS = hoverboxShadowPosition;

  var bgimage = backgroundImage ? backgroundImage : "";
  var tempsecondaryBackgroundColor = bgGradient
    ? (secondaryBackgroundColor !== "empty" && backgroundColor2 === "" ? secondaryBackgroundColor : backgroundColor2)  // For compatibility with v1.3.2.
    : testimonialBackgroundColor;
  var bggradient =
    "linear-gradient(" +
    gradientDirection +
    "deg," +
    hexToRgba(testimonialBackgroundColor || "#ffffff", opacity || 0) +
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
      "border-style": borderStyle !== "empty" && blockBorderStyle === "none" ? borderStyle : blockBorderStyle,//For compatibility with v1.3.2
      "border-width": borderWidth !== 999 && blockBorderWidth === 1 ? generateCSSUnit(borderWidth, "px") : generateCSSUnit(blockBorderWidth, "px"),//For compatibility with v1.3.2
      "border-radius": borderRadius !== 999 && blockBorderRadius === 2 ? generateCSSUnit(borderRadius, "px") : generateCSSUnit(blockBorderRadius, "px"),//For compatibility with v1.3.2
      "border-color": borderColor !== "empty" && blockBorderColor === "" ? borderColor : blockBorderColor,//For compatibility with v1.3.2
    },
  };

  var mobile_selectors = {

    " .testimonial-box.responsive-block-editor-addons-block-testimonial": {
      padding: generateCSSUnit(paddingMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-testimonial:last-child": {
      "margin-bottom" : '0 !important',
    },
	  " .responsive-block-editor-addons-testimonial-details .responsive-block-editor-addons-testimonial-name": {
	  	"font-size": generateCSSUnit(nameFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(nameSpacingMobile, "px"),
	  },
	  " .responsive-block-editor-addons-testimonial-details .responsive-block-editor-addons-testimonial-title": {
	  	"font-size": generateCSSUnit(titleFontSizeMobile, "px"),
	  },
	  " .responsive-block-editor-addons-testimonial-text": {
	  	"font-size": generateCSSUnit(contentFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(contentSpacingMobile, "px"),
	  },
    " .responsive-block-editor-addons-testimonial-info": {
      "margin-bottom": generateCSSUnit(titleSpacingMobile, "px"),
    },
    " .responsive-block-editor-addons-testimonial-info .responsive-block-editor-addons-testimonial-inner-block .responsive-block-editor-addons-testimonial-avatar-wrap": {
      "padding-right": generateCSSUnit(imageSpacingMobile, "px"),
    },
      " .responsive-block-editor-addons-testimonial-info .responsive-block-editor-addons-testimonial-inner-block .responsive-block-editor-addons-testimonial-avatar-wrap .responsive-block-editor-addons-testimonial-image-wrap": {
          height: generateCSSUnit(imageWidthMobile, "px"),
          width: generateCSSUnit(imageWidthMobile, "px"),
      },
      " .change-image .responsive-block-editor-addons-testimonial-avatar": {
          height: generateCSSUnit(imageWidthMobile, "px"),
          width: generateCSSUnit(imageWidthMobile, "px"),
      },
  };

  var tablet_selectors = {
    " .testimonial-box.responsive-block-editor-addons-block-testimonial": {
      padding: generateCSSUnit(paddingTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-testimonial:last-child": {
      "margin-bottom" : `${generateCSSUnit(20, "px")} !important`,
    },
	  " .responsive-block-editor-addons-testimonial-details .responsive-block-editor-addons-testimonial-name": {
	  	"font-size": generateCSSUnit(nameFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(nameSpacingTablet, "px"),
	  },
	  " .responsive-block-editor-addons-testimonial-details .responsive-block-editor-addons-testimonial-title": {
	  	"font-size": generateCSSUnit(titleFontSizeTablet, "px"),
	  },
	  " .responsive-block-editor-addons-testimonial-text": {
	  	"font-size": generateCSSUnit(contentFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(contentSpacingTablet, "px"),
	  },
    " .responsive-block-editor-addons-testimonial-info": {
      "margin-bottom": generateCSSUnit(titleSpacingTablet, "px"),
    },
    " .responsive-block-editor-addons-testimonial-info .responsive-block-editor-addons-testimonial-inner-block .responsive-block-editor-addons-testimonial-avatar-wrap": {
      "padding-right": generateCSSUnit(imageSpacingTablet, "px"),
    },
      " .responsive-block-editor-addons-testimonial-info .responsive-block-editor-addons-testimonial-inner-block .responsive-block-editor-addons-testimonial-avatar-wrap .responsive-block-editor-addons-testimonial-image-wrap": {
          height: generateCSSUnit(imageWidthTablet, "px"),
          width: generateCSSUnit(imageWidthTablet, "px"),
      },
      " .change-image .responsive-block-editor-addons-testimonial-avatar": {
          height: generateCSSUnit(imageWidthTablet, "px"),
          width: generateCSSUnit(imageWidthTablet, "px"),
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
