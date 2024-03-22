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
    blockBorderStyle,
    blockBorderWidth,
    blockBorderRadius,
    blockBorderColor,
    borderStyle, //For compatibility with v1.3.2.
    borderColor, //For compatibility with v1.3.2.
    borderWidth, //For compatibility with v1.3.2.
    borderRadius, //For compatibility with v1.3.2.
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
    buttonColor, //For compatibility with v1.3.2.
    buttonTextColor, //For compatibility with v1.3.2.
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
    buttonhColor, //For compatibility with v1.3.2.
    ctaHoverColor,
    buttonhTextColor, //For compatibility with v1.3.2.
    buttonopacity,
    butopacity, //For compatibility with v1.3.2.
    ctaVpadding,
    ctaHpadding,
    vPadding, //For compatibility with v1.3.2.
    hPadding, //For compatibility with v1.3.2.
    vMargin,
    hMargin,
    ctaBorderWidth,
    ctaBorderRadius,
    ctaBorderStyle,
    butborderWidth, //For compatibility with v1.3.2.
    butborderRadius, //For compatibility with v1.3.2.
    butborderStyle, //For compatibility with v1.3.2.
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
    blockbotmargin,
    blockbotmarginMobile,
    blockbotmarginTablet,
    blockleftmargin,
    blockleftmarginMobile,
    blockleftmarginTablet,
    blockrightmargin,
    blockrightmarginMobile,
    blockrightmarginTablet,
    bgimagePosition, //For compatibility with v1.3.2.
    bgimageRepeat, //For compatibility with v1.3.2.
    bgthumbsize, //For compatibility with v1.3.2.
    backgroundImageOne,
    backgroundImageTwo,
    backgroundImageThree,
    backgroundImageFour,
    backgroundImagePosition,
    backgroundImageSize,
    backgroundImageRepeat,
    headingFontSizeMobile,
    headingFontSizeTablet,
    subFontSizeMobile,
    subFontSizeTablet,
    contentFontSizeMobile,
    contentFontSizeTablet,
    buttonHopacity,
    ctaBorderColor,
    ctaHoverBorderColor,
    ctaTextOpacity,
    ctaHpaddingTablet,
    ctaHpaddingMobile,
    ctaVpaddingTablet,
    ctaVpaddingMobile,
    vMarginTablet,
    vMarginMobile,
    hMarginTablet,
    hMarginMobile,
    backgroundColor,
    itemBackgroundColor, //For compatibility with v1.3.2.
    buttonHbackgroundType,
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
  } = props.attributes;

  var boxShadowPositionCSS = boxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }

  let imgopacity = opacity / 100;

  let but_opacity = butopacity !== 999 && buttonopacity === 100 ? butopacity / 100 : buttonopacity / 100; //For compatibility with v1.3.2.
  let buthopacity = buttonHopacity / 100;
  let textOpacity = ctaTextOpacity / 100;

  let updatedButtonColor = "";
  let updatedButtonhColor = "";
  let updatedButtonBackgroundImage = "";
  if (buttonbackgroundType == "color") {
    updatedButtonColor = buttonColor !== 'empty' && !ctaBackColor ? buttonColor : ctaBackColor; //For compatibility with v1.3.2.
  }
  if (buttonHbackgroundType == "color") {
    updatedButtonhColor = buttonhColor !== 'empty' && '' === ctaHoverBackColor ? buttonhColor : ctaHoverBackColor;
  } else {
    updatedButtonhColor = '';
  }

  if ( 'gradient' === buttonbackgroundType) {
    updatedButtonBackgroundImage = generateBackgroundImageEffect(
      buttonbackgroundColor1,
      buttonbackgroundColor2,
      buttongradientDirection,
      buttoncolorLocation1,
      buttoncolorLocation2
    )
  }

  var selectors = {
    " .responsive-block-editor-addons-card-button-inner .res-button": {
      color: buttonTextColor !== 'empty' && '#fff' === ctaColor ? buttonTextColor : ctaColor, //For compatibility with v1.3.2.
      opacity: textOpacity,
    },

    " .responsive-block-editor-addons-card-button-inner:hover .res-button": {
      color: buttonhTextColor !== 'empty' && ctaHoverColor === '#e6f2ff' ? buttonhTextColor : ctaHoverColor, //For compatibility with v1.3.2.
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
        but_opacity || 0
      ),
    },

    " .responsive-block-editor-addons-card-button-inner:hover": {
      "background-color": hexToRgba(
        updatedButtonhColor || "none",
        buthopacity || 0
      ),
      "border-color": ctaHoverBorderColor,
      "background-image": buttonHbackgroundType == 'color' ? 'none' : updatedButtonBackgroundImage,
    },

    "": {
      "opacity": hideWidget ? 0.2 : 1,
      "margin-bottom": generateCSSUnit(blockbotmargin, "px"),
      "margin-top": generateCSSUnit(blockmargin, "px"),
      "margin-left": generateCSSUnit(blockleftmargin, "px"),
      "margin-right": generateCSSUnit(blockrightmargin, "px"),
      "z-index": blockzindex,
    },

    " .wp-block-responsive-block-editor-addons-card-item": {
      "border-color": borderColor!== "empty" && blockBorderColor === "" ? borderColor : blockBorderColor, //For compatibility with v1.3.2.
      "border-style": borderStyle !== "empty" && blockBorderStyle === "none" ? borderStyle : blockBorderStyle, //For compatibility with v1.3.2.
      "border-width": borderWidth !== 999 && blockBorderWidth === 0 ? generateCSSUnit( borderWidth, "px" ) : generateCSSUnit(blockBorderWidth, "px"), //For compatibility with v1.3.2.
      "border-radius": borderRadius !== 999 && blockBorderRadius === 12 ? generateCSSUnit(borderRadius, "px") : generateCSSUnit(blockBorderRadius, "px"), //For compatibility with v1.3.2.
      color: textColor,
      "background-color":
        backgroundType == "color"
          ? itemBackgroundColor !== 'empty' && backgroundColor === '' ? `${hexToRgba(itemBackgroundColor || "#fff", imgopacity || 0)}` : `${hexToRgba(backgroundColor || "#fff", imgopacity || 0)}`  //For compatibility with v1.3.2.
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
      "background-position": bgimagePosition !== "empty" && backgroundImagePosition === "center center" ? bgimagePosition : backgroundImagePosition, //For compatibility with v1.3.2.
      "background-repeat": bgimageRepeat !== "empty" && backgroundImageRepeat === "no-repeat" ? bgimageRepeat : backgroundImageRepeat, //For compatibility with v1.3.2.
      "background-size": bgthumbsize !== "empty" && backgroundImageSize === "cover" ? bgthumbsize : backgroundImageSize, //For compatibility with v1.3.2.
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
        "margin-bottom": generateCSSUnit(contentSpace, "px"),
        color: textColor,
      "line-height": contentLineHeight,
      "font-weight": contentFontWeight,
      "font-size": generateCSSUnit(contentFontSize, "px"),
      "font-family": contentFontFamily,
    },

    " .responsive-block-editor-addons-card-button-inner": {
      "padding-top": vPadding !== 999 && ctaVpadding === 10 ? generateCSSUnit(vPadding, "px") : generateCSSUnit(ctaVpadding, "px"), //For compatibility with v1.3.2.
      "padding-bottom": vPadding !== 999 && ctaVpadding === 10 ? generateCSSUnit(vPadding, "px") : generateCSSUnit(ctaVpadding, "px"), //For compatibility with v1.3.2.
      "padding-left": hPadding !== 999 && ctaHpadding === 14 ? generateCSSUnit(hPadding, "px") : generateCSSUnit(ctaHpadding, "px"), //For compatibility with v1.3.2.
      "padding-right": hPadding !== 999 && ctaHpadding === 14 ? generateCSSUnit(hPadding, "px") : generateCSSUnit(ctaHpadding, "px"), //For compatibility with v1.3.2.
      "margin-top": generateCSSUnit(vMargin, "px"),
      "margin-bottom": generateCSSUnit(vMargin, "px"),
      "margin-left": generateCSSUnit(hMargin, "px"),
      "margin-right": generateCSSUnit(hMargin, "px"),
      "border-style": butborderStyle !== "empty" && ctaBorderStyle === "none" ? butborderStyle : ctaBorderStyle ? ctaBorderStyle : "none", //For compatibility with v1.3.2.
      "border-color": ctaBorderColor,
      "border-radius": butborderRadius !== 999 && ctaBorderRadius === 2 ? bgenerateCSSUnit(butborderRadius, "px") : ctaBorderRadius //For compatibility with v1.3.2.
        ? generateCSSUnit(ctaBorderRadius, "px")
        : "",
      "border-width": butborderWidth !== 999 && ctaBorderWidth === 1 ? generateCSSUnit(butborderWidth, "px") : ctaBorderWidth //For compatibility with v1.3.2.
        ? generateCSSUnit(ctaBorderWidth, "px")
        : "0px",
      "background-image": updatedButtonBackgroundImage,
    },
  };

  var mobile_selectors = {
    "": {
      "opacity": hideWidgetMobile ? 0.2 : 1,
      "margin-bottom": generateCSSUnit(blockbotmarginMobile, "px"),
      "margin-top": generateCSSUnit(blockmarginMobile, "px"),
      "margin-left": generateCSSUnit(blockleftmarginMobile, "px"),
      "margin-right": generateCSSUnit(blockrightmarginMobile, "px"),
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
        "margin-bottom": generateCSSUnit(contentSpaceMobile, "px"),
    },
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
  };

  var tablet_selectors = {
    "": {
      "opacity": hideWidgetTablet ? 0.2 : 1,
      "margin-bottom": generateCSSUnit(blockbotmarginTablet, "px"),
      "margin-top": generateCSSUnit(blockmarginTablet, "px"),
      "margin-left": generateCSSUnit(blockleftmarginTablet, "px"),
      "margin-right": generateCSSUnit(blockrightmarginTablet, "px"),
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
        "margin-bottom": generateCSSUnit(contentSpaceTablet, "px"),
    },
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
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-card.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
