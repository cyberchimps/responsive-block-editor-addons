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
    buttonBackgroundColor,
    buttonTextColor,
    ctaTitleFontFamily,
    ctaTitleFontSize,
    ctaTitleFontSizeMobile,
    ctaTitleFontSizeTablet,
    ctaTextFontFamily,
    ctaTextFontSize,
    ctaTextColor,
    imgURL,
    headingLineHeight,
    headingFontWeight,
    contentLineHeight,
    contentFontWeight,
    buttonvPadding,
    buttonhPadding,
    buttonborderWidth,
    buttonborderStyle,
    hbuttonBackgroundColor,
    hbuttonTextColor,
    buttonborderColor,
    buttonborderHColor,
    titleSpace,
    subtitleSpace,
    iconSpace,
    opacity,
    ctaBackgroundColor,
    backgroundType,
    gradientDirection,
    colorLocation1,
    colorLocation2,
    backgroundColor1,
    backgroundColor2,
    buttonbackgroundType,
    buttongradientDirection,
    buttoncolorLocation1,
    buttoncolorLocation2,
    buttonbackgroundColor1,
    buttonbackgroundColor2,
    buttonSpace,
    borderRadius,
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
    icon_color,
    topPadding,
    bottomPadding,
    leftPadding,
    rightPadding,
    imagePosition,
    imageRepeat,
    thumbsize,
  } = props.attributes;

  let updatedButtonBackgroundColor = "";
  let updatedButtonBackgroundhColor = "";
  if (buttonbackgroundType === "color") {
    updatedButtonBackgroundColor = buttonBackgroundColor;
    updatedButtonBackgroundhColor = hbuttonBackgroundColor;
  }

  var boxShadowPositionCSS = boxShadowPosition;
  let imgopacity = opacity / 100;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }

  var selectors = {
    " .responsive-block-editor-addons-cta-button-wrapper .responsive-block-editor-addons-cta-button": {
      "color": buttonTextColor,
    },

    " .responsive-block-editor-addons-cta-button-wrapper:hover .responsive-block-editor-addons-cta-button": {
      "color": hbuttonTextColor,
    },

    " .responsive-block-editor-addons-cta-link-text": {
      "color": buttonTextColor,
    },

    " .responsive-block-editor-addons-cta-link-text:hover": {
      "color": hbuttonTextColor,
    },

    " .responsive-block-editor-addons-cta-button-wrapper:hover": {
      "border-color": buttonborderHColor,
      "background-color": updatedButtonBackgroundhColor,
    },

    " .responsive-block-editor-addons-cta-button__icon svg": {
      "fill": icon_color,
    },

    "": {
      "background-color":
        backgroundType == "color"
          ? `${hexToRgba(ctaBackgroundColor || "#ffffff", imgopacity || 0)}`
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
      "border-radius": generateCSSUnit(borderRadius, "px"),
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
      "padding-top": generateCSSUnit(topPadding, "px"),
      "padding-bottom": generateCSSUnit(bottomPadding, "px"),
      "padding-left": generateCSSUnit(leftPadding, "px"),
      "padding-right": generateCSSUnit(rightPadding, "px"),
    },

    " .responsive-block-editor-addons-cta-image-wrap .responsive-block-editor-addons-cta-image": {
      "background-image": imgURL ? `url(${imgURL})` : null,
      "height": 100 + "%",
      "background-position": imagePosition,
      "background-repeat": imageRepeat,
      "background-size": thumbsize,
      "border-radius": generateCSSUnit(borderRadius, "px"),
    },

    " .responsive-block-editor-addons-cta-title": {
      "color": ctaTextColor,
      "line-height": headingLineHeight,
      "font-family": ctaTitleFontFamily,
      "font-weight": headingFontWeight,
      "margin-bottom": generateCSSUnit(titleSpace, "px"),
      "font-size": generateCSSUnit(ctaTitleFontSize, "px") + " !important",
    },

    " .responsive-block-editor-addons-cta-text": {
      "color": ctaTextColor,
      "font-size": generateCSSUnit(ctaTextFontSize, "px"),
      "font-family": ctaTextFontFamily,
      "line-height": contentLineHeight,
      "font-weight": contentFontWeight,
      "margin-bottom": generateCSSUnit(subtitleSpace, "px"),
    },

    " .responsive-block-editor-addons-cta-button-wrapper": {
      "padding-top": generateCSSUnit(buttonvPadding, "px"),
      "padding-bottom": generateCSSUnit(buttonvPadding, "px"),
      "padding-left": generateCSSUnit(buttonhPadding, "px"),
      "padding-right": generateCSSUnit(buttonhPadding, "px"),
      "border-style": buttonborderStyle ? buttonborderStyle : "solid",
      "border-color": buttonborderColor,
      "background-color": updatedButtonBackgroundColor,
      "border-width": buttonborderWidth
        ? generateCSSUnit(buttonborderWidth, "px")
        : "1px",
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
      "margin-bottom": generateCSSUnit(buttonSpace, "px"),
    },

    " .responsive-block-editor-addons-cta-button__icon": {
      "margin-right": generateCSSUnit(iconSpace, "px"),
      "margin-left": generateCSSUnit(iconSpace, "px"),
    },
  };

  var mobile_selectors = {
    " .responsive-block-editor-addons-cta-title": {
      "font-size": generateCSSUnit(ctaTitleFontSizeMobile, "px"),
    },
  };

  var tablet_selectors = {
    " .responsive-block-editor-addons-cta-title": {
      "font-size": generateCSSUnit(ctaTitleFontSizeTablet, "px"),
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-call-to-action.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
