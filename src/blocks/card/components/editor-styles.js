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
    contentAlignment,
    textColor,
    backgroundColor,
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
    titleSpace,
    titleSpaceMobile,
    titleSpaceTablet,
    subtitleSpace,
    subtitleSpaceMobile,
    subtitleSpaceTablet,
    contentSpace,
    contentSpaceMobile,
    contentSpaceTablet,
    ctaBackColor,
    ctaColor,
    opacity,
    backgroundType,
    backgroundImage,
    gradientDirection,
    colorLocation1,
    colorLocation2,
    backgroundColor1,
    backgroundColor2,
    imagePosition,
    imageRepeat,
    thumbsize,
    imageheight,
    blockzindex,
    blockmargin,
    blockmarginMobile,
    blockmarginTablet,
    icon_color,
    ctaHoverBackColor,
    ctaHoverColor,
    buttonopacity,
    ctaHpadding,
    ctaHpaddingTablet,
    ctaHpaddingMobile,
    ctaVpadding,
    ctaVpaddingTablet,
    ctaVpaddingMobile,
    vMargin,
    vMarginTablet,
    vMarginMobile,
    hMargin,
    hMarginTablet,
    hMarginMobile,
    ctaBorderWidth,
    ctaBorderRadius,
    ctaBorderStyle,
    buttonbackgroundType,
    buttongradientDirection,
    buttoncolorLocation1,
    buttoncolorLocation2,
    buttonbackgroundColor1,
    buttonbackgroundColor2,
    icon_hcolor,
    subLineHeight,
    subFontWeight,
    subFontSize,
    subFontSizeMobile,
    subFontSizeTablet,
    subFontFamily,
    headingFontFamily,
    headingLineHeight,
    headingFontWeight,
    headingFontSize,
    headingFontSizeMobile,
    headingFontSizeTablet,
    contentFontFamily,
    contentLineHeight,
    contentFontWeight,
    contentFontSize,
    contentFontSizeMobile,
    contentFontSizeTablet,
    contenttopSpace,
    contenttopSpaceMobile,
    contenttopSpaceTablet,
    blockbotmargin,
    blockbotmarginMobile,
    blockbotmarginTablet,
    blockleftmargin,
    blockleftmarginMobile,
    blockleftmarginTablet,
    blockrightmargin,
    blockrightmarginMobile,
    blockrightmarginTablet,
    backgroundImagePosition,
    backgroundImageRepeat,
    backgroundImageSize,
    backgroundImageOne,
    backgroundImageTwo,
    backgroundImageThree,
    backgroundImageFour,
    ctaBorderColor,
    ctaHoverBorderColor,
    buttonHopacity,
    ctaTextOpacity,
  } = props.attributes;

  var boxShadowPositionCSS = boxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }

  let imgopacity = opacity / 100;

  let butopacity = buttonopacity / 100;
  let butHOpacity = buttonHopacity / 100;
  let textOpacity = ctaTextOpacity / 100;

  let updatedButtonColor = "";
  let updatedButtonhColor = "";
  if (buttonbackgroundType == "color") {
    updatedButtonColor = ctaBackColor;
    updatedButtonhColor = ctaHoverBackColor;
  }

  var selectors = {
    " .responsive-block-editor-addons-card-button-inner .res-button": {
      color: ctaColor,
      opacity: textOpacity,
    },

    " .responsive-block-editor-addons-card-button-inner:hover .res-button": {
      color: ctaHoverColor,
    },

    " .responsive-block-editor-addons-card-button-inner .responsive-block-editor-addons-button__icon svg": {
      fill: icon_color,
    },

    " .responsive-block-editor-addons-card-button-inner:hover .responsive-block-editor-addons-button__icon svg": {
      fill: icon_hcolor,
    },

    " .wp-block-responsive-block-editor-addons-card-item__button-wrapper .responsive-block-editor-addons-card-button-inner": {
      "background-color": hexToRgba(
        updatedButtonColor || "#2091e1",
        butopacity || 0
      ),
    },

    " .responsive-block-editor-addons-card-button-inner:hover": {
      "background-color": hexToRgba(updatedButtonhColor || "#2091e1", butHOpacity),
      "border-color": ctaHoverBorderColor,
    },

    "": {
      "margin-bottom": generateCSSUnit(blockbotmargin, "px"),
      "margin-top": generateCSSUnit(blockmargin, "px"),
      "margin-left": generateCSSUnit(blockleftmargin, "px"),
      "margin-right": generateCSSUnit(blockrightmargin, "px"),
      "z-index": blockzindex,
    },

    " .wp-block-responsive-block-editor-addons-card-item": {
      "border-color": blockBorderColor,
      "border-style": blockBorderStyle,
      "border-width": generateCSSUnit(blockBorderWidth, "px"),
      "border-radius": generateCSSUnit(blockBorderRadius, "px"),
      color: textColor,
      "background-color":
        backgroundType == "color"
          ? `${hexToRgba(backgroundColor || "#fff", imgopacity || 0)}`
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

    " .responsive-block-editor-addons-card-background-image": {
      "background-image": backgroundImage
        ? `url(${backgroundImage})`
        : null,
      height: 100 + "%",
      "background-position": backgroundImagePosition,
      "background-repeat": backgroundImageRepeat,
      "background-size": backgroundImageSize,
    },

    " .responsive-block-editor-addons-card-avatar": {
      height: generateCSSUnit(imageheight, "px"),
    },

    " .responsive-block-editor-addons-card-avatar-img": {
      "background-position": imagePosition,
      "background-repeat": imageRepeat,
      "background-size": thumbsize,
    },

    " .responsive-block-editor-addons-card-avatar-img.responsive-block-editor-addons-card-avatar-img-0": {
      "background-image": `url(${backgroundImageOne})`,
      "display": backgroundImageOne ? 'block' : 'none',
    },

    " .responsive-block-editor-addons-card-avatar-img.responsive-block-editor-addons-card-avatar-img-dashicon-0": {
      "display": backgroundImageOne ? 'none' : 'flex',
    },

    " .responsive-block-editor-addons-card-avatar-img.responsive-block-editor-addons-card-avatar-img-1": {
      "background-image": `url(${backgroundImageTwo})`,
      "display": backgroundImageTwo ? 'block' : 'none',
    },

    " .responsive-block-editor-addons-card-avatar-img.responsive-block-editor-addons-card-avatar-img-dashicon-1": {
      "display": backgroundImageTwo ? 'none' : 'flex',
    },

    " .responsive-block-editor-addons-card-avatar-img.responsive-block-editor-addons-card-avatar-img-2": {
      "background-image": `url(${backgroundImageThree})`,
      "display": backgroundImageThree ? 'block' : 'none',
    },

    " .responsive-block-editor-addons-card-avatar-img.responsive-block-editor-addons-card-avatar-img-dashicon-2": {
      "display": backgroundImageThree ? 'none' : 'flex',
    },

    " .responsive-block-editor-addons-card-avatar-img.responsive-block-editor-addons-card-avatar-img-3": {
      "background-image": `url(${backgroundImageFour})`,
      "display": backgroundImageFour ? 'block' : 'none',
    },

    " .responsive-block-editor-addons-card-avatar-img.responsive-block-editor-addons-card-avatar-img-dashicon-3": {
      "display": backgroundImageFour ? 'none' : 'flex',
    },

    " .card-content-wrap": {
      "text-align": contentAlignment,
      "margin-bottom": generateCSSUnit(contentSpace, "px"),
      "margin-top": generateCSSUnit(contenttopSpace, "px"),
    },

    " .wp-block-responsive-block-editor-addons-card-item__title": {
      "margin-top": 0,
      "margin-bottom": generateCSSUnit(titleSpace, "px"),
      color: textColor,
      "line-height": headingLineHeight,
      "font-family": headingFontFamily,
      "font-weight": headingFontWeight,
      "font-size": generateCSSUnit(headingFontSize, "px"),
    },

    " .wp-block-responsive-block-editor-addons-card-item__subtitle": {
      "margin-top": 0,
      "margin-bottom": generateCSSUnit(subtitleSpace, "px"),
      color: textColor,
      "line-height": subLineHeight,
      "font-weight": subFontWeight,
      "font-family": subFontFamily,
      "font-size": generateCSSUnit(subFontSize, "px"),
    },

    " .wp-block-responsive-block-editor-addons-card-item__content": {
      "margin-top": 0,
      color: textColor,
      "line-height": contentLineHeight,
      "font-weight": contentFontWeight,
      "font-size": generateCSSUnit(contentFontSize, "px"),
      "font-family": contentFontFamily,
    },

    " .responsive-block-editor-addons-card-button-inner": {
      "padding-top": generateCSSUnit(ctaVpadding, "px"),
      "padding-bottom": generateCSSUnit(ctaVpadding, "px"),
      "padding-left": generateCSSUnit(ctaHpadding, "px"),
      "padding-right": generateCSSUnit(ctaHpadding, "px"),
      "margin-top": generateCSSUnit(vMargin, "px"),
      "margin-bottom": generateCSSUnit(vMargin, "px"),
      "margin-left": generateCSSUnit(hMargin, "px"),
      "margin-right": generateCSSUnit(hMargin, "px"),
      "border-style": ctaBorderStyle ? ctaBorderStyle : "none",
      "border-color": ctaBorderColor,
      "border-radius": ctaBorderRadius
        ? generateCSSUnit(ctaBorderRadius, "px")
        : "",
      "border-width": ctaBorderWidth
        ? generateCSSUnit(ctaBorderWidth, "px")
        : "0px",
      "background-image":
        buttonbackgroundType == "gradient"
          ? generateBackgroundImageEffect(
            buttonbackgroundColor1,
            buttonbackgroundColor2,
            buttongradientDirection,
            buttoncolorLocation1,
            buttoncolorLocation2
          )
          : undefined,
    },
  };

  var mobile_selectors = {
    " .responsive-block-editor-addons-card-button-inner": {
      "padding-top": generateCSSUnit(ctaVpaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(ctaVpaddingMobile, "px"),
      "padding-left": generateCSSUnit(ctaHpaddingMobile, "px"),
      "padding-right": generateCSSUnit(ctaHpaddingMobile, "px"),
      "margin-top": generateCSSUnit(vMarginMobile, "px"),
      "margin-bottom": generateCSSUnit(vMarginMobile, "px"),
      "margin-left": generateCSSUnit(hMarginMobile, "px"),
      "margin-right": generateCSSUnit(hMarginMobile, "px"),
    },
    "": {
      "margin-bottom": generateCSSUnit(blockbotmarginMobile, "px"),
      "margin-top": generateCSSUnit(blockmarginMobile, "px"),
      "margin-left": generateCSSUnit(blockleftmarginMobile, "px"),
      "margin-right": generateCSSUnit(blockrightmarginMobile, "px"),
    },
    " .card-content-wrap": {
      "margin-bottom": generateCSSUnit(contentSpaceMobile, "px"),
      "margin-top": generateCSSUnit(contenttopSpaceMobile, "px"),
    },

    " .wp-block-responsive-block-editor-addons-card-item__title": {
      "margin-bottom": generateCSSUnit(titleSpaceMobile, "px"),
      "font-size": generateCSSUnit(headingFontSizeMobile, "px"),
    },

    " .wp-block-responsive-block-editor-addons-card-item__subtitle": {
      "margin-bottom": generateCSSUnit(subtitleSpaceMobile, "px"),
      "font-size": generateCSSUnit(subFontSizeMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-card-item__content": {
      "font-size": generateCSSUnit(contentFontSizeMobile, "px"),
    }
  };

  var tablet_selectors = {
    " .responsive-block-editor-addons-card-button-inner": {
      "padding-top": generateCSSUnit(ctaVpaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(ctaVpaddingTablet, "px"),
      "padding-left": generateCSSUnit(ctaHpaddingTablet, "px"),
      "padding-right": generateCSSUnit(ctaHpaddingTablet, "px"),
      "margin-top": generateCSSUnit(vMarginTablet, "px"),
      "margin-bottom": generateCSSUnit(vMarginTablet, "px"),
      "margin-left": generateCSSUnit(hMarginTablet, "px"),
      "margin-right": generateCSSUnit(hMarginTablet, "px"),
    },
    "": {
      "margin-bottom": generateCSSUnit(blockbotmarginTablet, "px"),
      "margin-top": generateCSSUnit(blockmarginTablet, "px"),
      "margin-left": generateCSSUnit(blockleftmarginTablet, "px"),
      "margin-right": generateCSSUnit(blockrightmarginTablet, "px"),
    },
    " .card-content-wrap": {
      "margin-bottom": generateCSSUnit(contentSpaceTablet, "px"),
      "margin-top": generateCSSUnit(contenttopSpaceTablet, "px"),
    },

    " .wp-block-responsive-block-editor-addons-card-item__title": {
      "margin-bottom": generateCSSUnit(titleSpaceTablet, "px"),
      "font-size": generateCSSUnit(headingFontSizeTablet, "px"),
    },

    " .wp-block-responsive-block-editor-addons-card-item__subtitle": {
      "margin-bottom": generateCSSUnit(subtitleSpaceTablet, "px"),
      "font-size": generateCSSUnit(subFontSizeTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-card-item__content": {
      "font-size": generateCSSUnit(contentFontSizeTablet, "px"),
    }
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-card.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
