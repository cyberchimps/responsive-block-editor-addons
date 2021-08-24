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
    ctaBackColor,
    ctaColor,
    ctaTitleFontFamily,
    ctaTitleFontSize,
    ctaTitleFontSizeMobile,
    ctaTitleFontSizeTablet,
    ctaTextFontFamily,
    ctaTextFontSize,
    ctaTextFontSizeMobile,
    ctaTextFontSizeTablet,
    ctaTextColor,
    backgroundImage,
    ctaTitleFontWeight,
    ctaTitleLineHeight,
    ctaTextFontWeight,
    ctaTextLineHeight,
    ctaVpadding,
    ctaHpadding,
    ctaBorderWidth,
    ctaBorderStyle,
    ctaHoverBackColor,
    ctaHoverColor,
    ctaBorderColor,
    ctaHoverBorderColor,
    titleSpace,
    titleSpaceMobile,
    titleSpaceTablet,
    subtitleSpace,
    subtitleSpaceMobile,
    subtitleSpaceTablet,
    iconSpace,
    opacity,
    backgroundColor,
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
    buttonSpaceMobile,
    buttonSpaceTablet,
    borderRadius,
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
    icon_color,
    blockTopPadding,
    blockTopPaddingMobile,
    blockTopPaddingTablet,
    blockBottomPadding,
    blockBottomPaddingMobile,
    blockBottomPaddingTablet,
    blockLeftPadding,
    blockLeftPaddingMobile,
    blockLeftPaddingTablet,
    blockRightPadding,
    blockRightPaddingMobile,
    blockRightPaddingTablet,
    backgroundImagePosition,
    backgroundImageRepeat,
    backgroundImageSize,
    buttonTextFontFamily,
    buttonTextFontSize,
    buttonTextFontSizeMobile,
    buttonTextFontSizeTablet,
    buttonTextLineHeight,
    buttonTextFontWeight,
    iconPosition,
    ctaBorderRadius,
    ctaHpaddingTablet,
    ctaHpaddingMobile,
    ctaVpaddingTablet,
    ctaVpaddingMobile,
    ctaTextOpacity,
    buttonHbackgroundType,
  } = props.attributes;

  let updatedButtonBackgroundColor = "";
  let updatedButtonBackgroundhColor = "";
  let updatedButtonBackgroundImage = '';
  if (buttonbackgroundType === "color") {
    updatedButtonBackgroundColor = ctaBackColor;
  }
  if (buttonHbackgroundType == "color") {
    updatedButtonBackgroundhColor = ctaHoverBackColor;
  } else {
    updatedButtonBackgroundhColor = '';
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

  var boxShadowPositionCSS = boxShadowPosition;
  let imgopacity = opacity / 100;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }

  let ctaIconMargin = '';
  if (iconPosition === 'before') {
    ctaIconMargin = `auto ${generateCSSUnit(iconSpace, "px")} auto 0`
  }else if (iconPosition === 'after') {
    ctaIconMargin = `auto 0 auto ${generateCSSUnit(iconSpace, "px")}`
  }

  var selectors = {
    " .responsive-block-editor-addons-cta-button-wrapper .responsive-block-editor-addons-cta-button": {
      "color": ctaColor,
      "opacity": ctaTextOpacity / 100,
    },

    " .responsive-block-editor-addons-cta-button-wrapper:hover .responsive-block-editor-addons-cta-button": {
      "color": ctaHoverColor,
    },

    " .responsive-block-editor-addons-cta-link-text": {
      "color": ctaColor,
      "font-family": buttonTextFontFamily,
      "font-size": generateCSSUnit(buttonTextFontSize, "px"),
      "font-weight": buttonTextFontWeight,
      "line-height": buttonTextLineHeight,
    },

    " .responsive-block-editor-addons-cta-link-text:hover": {
      "color": ctaHoverColor,
    },

    " .responsive-block-editor-addons-cta-button-wrapper:hover": {
      "border-color": ctaHoverBorderColor,
      "background-color": updatedButtonBackgroundhColor,
      "background-image": buttonHbackgroundType == 'color' ? 'none' : updatedButtonBackgroundImage,
    },

    " .responsive-block-editor-addons-cta-button__icon svg": {
      "fill": icon_color,
    },

    "": {
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
      "padding-top": generateCSSUnit(blockTopPadding, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPadding, "px"),
      "padding-left": generateCSSUnit(blockLeftPadding, "px"),
      "padding-right": generateCSSUnit(blockRightPadding, "px"),
    },

    " .responsive-block-editor-addons-cta-image-wrap .responsive-block-editor-addons-cta-image": {
      "background-image": backgroundImage ? `url(${backgroundImage})` : null,
      "height": 100 + "%",
      "background-position": backgroundImagePosition,
      "background-repeat": backgroundImageRepeat,
      "background-size": backgroundImageSize,
      "border-radius": generateCSSUnit(borderRadius, "px"),
    },

    " .responsive-block-editor-addons-cta-title": {
      "color": ctaTextColor,
      "line-height": ctaTitleLineHeight,
      "font-family": ctaTitleFontFamily,
      "font-weight": ctaTitleFontWeight,
      "margin-bottom": generateCSSUnit(titleSpace, "px"),
      "font-size": generateCSSUnit(ctaTitleFontSize, "px"),
    },

    " .responsive-block-editor-addons-cta-text": {
      "color": ctaTextColor,
      "font-size": generateCSSUnit(ctaTextFontSize, "px"),
      "font-family": ctaTextFontFamily,
      "line-height": ctaTextLineHeight,
      "font-weight": ctaTextFontWeight,
      "margin-bottom": generateCSSUnit(subtitleSpace, "px"),
    },

    " .responsive-block-editor-addons-cta-button-wrapper": {
      "padding-top": generateCSSUnit(ctaVpadding, "px"),
      "padding-bottom": generateCSSUnit(ctaVpadding, "px"),
      "padding-left": generateCSSUnit(ctaHpadding, "px"),
      "padding-right": generateCSSUnit(ctaHpadding, "px"),
      "border-style": ctaBorderStyle ? ctaBorderStyle : "solid",
      "border-radius": generateCSSUnit(ctaBorderRadius, "px"),
      "border-color": ctaBorderColor,
      "background-color": updatedButtonBackgroundColor,
      "border-width": ctaBorderWidth
        ? generateCSSUnit(ctaBorderWidth, "px")
        : "1px",
      "background-image": updatedButtonBackgroundImage,
      "margin-bottom": generateCSSUnit(buttonSpace, "px"),
    },

    " .responsive-block-editor-addons-cta-button__icon": {
      "margin":  ctaIconMargin,
    },

    " .responsive-block-editor-addons-cta-button.rich-text": {
      "font-family": buttonTextFontFamily,
      "font-size": generateCSSUnit(buttonTextFontSize, "px"),
      "font-weight": buttonTextFontWeight,
      "line-height": buttonTextLineHeight,
    }
  };

  var mobile_selectors = {
    " h2.responsive-block-editor-addons-cta-title": {
      "margin-bottom": generateCSSUnit(titleSpaceMobile, "px"),
      "font-size": generateCSSUnit(ctaTitleFontSizeMobile, "px") + "!important",
    },
    "": {
      "padding-top": generateCSSUnit(blockTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(blockLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingMobile, "px"),
    },
    " .responsive-block-editor-addons-cta-text": {
      "margin-bottom": generateCSSUnit(subtitleSpaceMobile, "px"),
      "font-size": generateCSSUnit(ctaTextFontSizeMobile, "px") + "!important",
    },
    " .responsive-block-editor-addons-cta-button-wrapper": {
      "margin-bottom": generateCSSUnit(buttonSpaceMobile, "px"),
      "padding-top": generateCSSUnit(ctaVpaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(ctaVpaddingMobile, "px"),
      "padding-left": generateCSSUnit(ctaHpaddingMobile, "px"),
      "padding-right": generateCSSUnit(ctaHpaddingMobile, "px"),
    },
    " .responsive-block-editor-addons-cta-button.rich-text": {
      "font-size": `${generateCSSUnit(buttonTextFontSizeMobile, "px")}`,
    },
    " .responsive-block-editor-addons-cta-link-text": {
      "font-size": `${generateCSSUnit(buttonTextFontSizeMobile, "px")}`,
    },
  };

  var tablet_selectors = {
    " h2.responsive-block-editor-addons-cta-title": {
      "margin-bottom": generateCSSUnit(titleSpaceTablet, "px"),
      "font-size": generateCSSUnit(ctaTitleFontSizeTablet, "px"),
    },
    "": {
      "padding-top": generateCSSUnit(blockTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(blockLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingTablet, "px"),
    },
    " .responsive-block-editor-addons-cta-text": {
      "margin-bottom": generateCSSUnit(subtitleSpaceTablet, "px"),
      "font-size": generateCSSUnit(ctaTextFontSizeTablet, "px"),
    },
    " .responsive-block-editor-addons-cta-button-wrapper": {
      "margin-bottom": generateCSSUnit(buttonSpaceTablet, "px"),
      "padding-top": generateCSSUnit(ctaVpaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(ctaVpaddingTablet, "px"),
      "padding-left": generateCSSUnit(ctaHpaddingTablet, "px"),
      "padding-right": generateCSSUnit(ctaHpaddingTablet, "px"),
    },
    " .responsive-block-editor-addons-cta-button.rich-text": {
      "font-size": generateCSSUnit(buttonTextFontSizeTablet, "px"),
    },
    " .responsive-block-editor-addons-cta-link-text": {
      "font-size": `${generateCSSUnit(buttonTextFontSizeTablet, "px")}`,
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
