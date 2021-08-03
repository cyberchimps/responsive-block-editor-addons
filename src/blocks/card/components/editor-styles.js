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
    borderStyle,
    borderWidth,
    borderRadius,
    borderColor,
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
    titleSpace,
    subtitleSpace,
    contentSpace,
    buttonColor,
    buttonTextColor,
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
    icon_color,
    buttonhColor,
    buttonhTextColor,
    butopacity,
    vPadding,
    hPadding,
    vMargin,
    hMargin,
    butborderWidth,
    butborderRadius,
    butborderStyle,
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
    subFontFamily,
    headingFontFamily,
    headingLineHeight,
    headingFontWeight,
    headingFontSize,
    contentFontFamily,
    contentLineHeight,
    contentFontWeight,
    contentFontSize,
    contenttopSpace,
    blockbotmargin,
    blockleftmargin,
    blockrightmargin,
    bgimagePosition,
    bgimageRepeat,
    bgthumbsize,
    backgroundImageOne,
    backgroundImageTwo,
    backgroundImageThree,
    backgroundImageFour,
    backgroundImagePosition,
    backgroundImageSize,
    backgroundImageRepeat,
  } = props.attributes;

  var boxShadowPositionCSS = boxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }

  let imgopacity = opacity / 100;

  let buttonopacity = butopacity / 100;

  let updatedButtonColor = "";
  let updatedButtonhColor = "";
  if (buttonbackgroundType == "color") {
    updatedButtonColor = buttonColor;
    updatedButtonhColor = buttonhColor;
  }

  var selectors = {
    " .responsive-block-editor-addons-card-button-inner .res-button": {
      color: buttonTextColor,
    },

    " .responsive-block-editor-addons-card-button-inner:hover .res-button": {
      color: buttonhTextColor,
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
        buttonopacity || 0
      ),
    },

    " .responsive-block-editor-addons-card-button-inner:hover": {
      "background-color": updatedButtonhColor,
    },

    "": {
      "margin-bottom": generateCSSUnit(blockbotmargin, "px"),
      "margin-top": generateCSSUnit(blockmargin, "px"),
      "margin-left": generateCSSUnit(blockleftmargin, "px"),
      "margin-right": generateCSSUnit(blockrightmargin, "px"),
      "z-index": blockzindex,
    },

    " .wp-block-responsive-block-editor-addons-card-item": {
      "border-color": borderColor,
      "border-style": borderStyle,
      "border-width": generateCSSUnit(borderWidth, "px"),
      "border-radius": generateCSSUnit(borderRadius, "px"),
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
        "display": backgroundImageOne? 'block' : 'none',
    },
    
    " .responsive-block-editor-addons-card-avatar-img.responsive-block-editor-addons-card-avatar-img-dashicon-0": {
        "display": backgroundImageOne? 'none' : 'flex',
    },

    " .responsive-block-editor-addons-card-avatar-img.responsive-block-editor-addons-card-avatar-img-1": {
        "background-image": `url(${backgroundImageTwo})`,
        "display": backgroundImageTwo? 'block' : 'none',
    },

    " .responsive-block-editor-addons-card-avatar-img.responsive-block-editor-addons-card-avatar-img-dashicon-1": {
      "display": backgroundImageTwo? 'none' : 'flex',
    },

    " .responsive-block-editor-addons-card-avatar-img.responsive-block-editor-addons-card-avatar-img-2": {
        "background-image": `url(${backgroundImageThree})`,
        "display": backgroundImageThree? 'block' : 'none',
    },

    " .responsive-block-editor-addons-card-avatar-img.responsive-block-editor-addons-card-avatar-img-dashicon-2": {
      "display": backgroundImageThree? 'none' : 'flex',
    },

    " .responsive-block-editor-addons-card-avatar-img.responsive-block-editor-addons-card-avatar-img-3": {
         "background-image": `url(${backgroundImageFour})`,
         "display": backgroundImageFour? 'block' : 'none',
    },

    " .responsive-block-editor-addons-card-avatar-img.responsive-block-editor-addons-card-avatar-img-dashicon-3": {
      "display": backgroundImageFour? 'none' : 'flex',
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
      "padding-top": generateCSSUnit(vPadding, "px"),
      "padding-bottom": generateCSSUnit(vPadding, "px"),
      "padding-left": generateCSSUnit(hPadding, "px"),
      "padding-right": generateCSSUnit(hPadding, "px"),
      "margin-top": generateCSSUnit(vMargin, "px"),
      "margin-bottom": generateCSSUnit(vMargin, "px"),
      "margin-left": generateCSSUnit(hMargin, "px"),
      "margin-right": generateCSSUnit(hMargin, "px"),
      "border-style": butborderStyle ? butborderStyle : "none",
      "border-radius": butborderRadius
        ? generateCSSUnit(butborderRadius, "px")
        : "",
      "border-width": butborderWidth
        ? generateCSSUnit(butborderWidth, "px")
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

  var mobile_selectors = {};

  var tablet_selectors = {};

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-card.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
