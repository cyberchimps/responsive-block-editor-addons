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
    imgURL,
    backgroundImage,
    ctaTitleLineHeight,
    ctaTitleFontWeight,
    ctaTextLineHeight,
    ctaTextFontWeight,
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
    bTopPadding,
    bTopPaddingMobile,
    bTopPaddingTablet,
    bBottomPadding,
    bBottomPaddingMobile,
    bBottomPaddingTablet,
    bLeftPadding,
    bLeftPaddingMobile,
    bLeftPaddingTablet,
    bRightPadding,
    bRightPaddingMobile,
    bRightPaddingTablet,
    backgroundImagePosition,
    backgroundImageRepeat,
    backgroundImageSize,
    ctaVpaddingMobile,
    ctaVpaddingTablet,
    ctaHpaddingMobile,
    ctaHpaddingTablet,
    ctaBorderRadius,
    ctaTextOpacity,
    buttonTextFontFamily,
    buttonTextFontSize,
    buttonTextFontSizeMobile,
    buttonTextFontSizeTablet,
    buttonTextLineHeight,
    buttonTextFontWeight,
    iconPosition,
  } = props.attributes;

  let updatedButtonBackgroundColor = "";
  let updatedButtonBackgroundhColor = "";
  if (buttonbackgroundType === "color") {
    updatedButtonBackgroundColor = ctaBackColor;
    updatedButtonBackgroundhColor = ctaHoverBackColor;
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
      "padding-top": generateCSSUnit(bTopPadding, "px"),
      "padding-bottom": generateCSSUnit(bBottomPadding, "px"),
      "padding-left": generateCSSUnit(bLeftPadding, "px"),
      "padding-right": generateCSSUnit(bRightPadding, "px"),
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
      "border-color": ctaBorderColor,
      "background-color": updatedButtonBackgroundColor,
      "border-width": ctaBorderWidth
        ? generateCSSUnit(ctaBorderWidth, "px")
        : "1px",
      "border-radius": generateCSSUnit(ctaBorderRadius, "px"),
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
    "": {
      "padding-top": generateCSSUnit(bTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(bBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(bLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(bRightPaddingMobile, "px"),
    },
    " .responsive-block-editor-addons-cta-title": {
      "font-size": generateCSSUnit(ctaTitleFontSizeMobile, "px"),
    },
    " .responsive-block-editor-addons-cta-button-wrapper": {
      "padding-top": generateCSSUnit(ctaVpaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(ctaVpaddingMobile, "px"),
      "padding-left": generateCSSUnit(ctaHpaddingMobile, "px"),
      "padding-right": generateCSSUnit(ctaHpaddingMobile, "px"),
    },
    " .responsive-block-editor-addons-cta-title": {
      "margin-bottom": generateCSSUnit(titleSpaceMobile, "px"),
    },
    " .responsive-block-editor-addons-cta-text": {
      "font-size": generateCSSUnit(ctaTextFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(subtitleSpaceMobile, "px"),
    },

    " .responsive-block-editor-addons-cta-button-wrapper": {
      "margin-bottom": generateCSSUnit(buttonSpaceMobile, "px"),
    },
    " .responsive-block-editor-addons-cta-button.rich-text": {
      "font-size": `${generateCSSUnit(buttonTextFontSizeMobile, "px")} !important`,
    },
    " h2.responsive-block-editor-addons-cta-title": {
      "margin-bottom": generateCSSUnit(titleSpaceMobile, "px"),
      "font-size": generateCSSUnit(ctaTitleFontSizeMobile, "px") + "!important",
    },
    " .responsive-block-editor-addons-cta-link-text": {
      "font-size": `${generateCSSUnit(buttonTextFontSizeMobile, "px")}`,
    },
  };

  var tablet_selectors = {
    "": {
      "padding-top": generateCSSUnit(bTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(bBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(bLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(bRightPaddingTablet, "px"),
    },
    " .responsive-block-editor-addons-cta-title": {
      "font-size": generateCSSUnit(ctaTitleFontSizeTablet, "px"),
    },
    " .responsive-block-editor-addons-cta-button-wrapper": {
      "padding-top": generateCSSUnit(ctaVpaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(ctaVpaddingTablet, "px"),
      "padding-left": generateCSSUnit(ctaHpaddingTablet, "px"),
      "padding-right": generateCSSUnit(ctaHpaddingTablet, "px"),
    },
    " .responsive-block-editor-addons-cta-title": {
      "margin-bottom": generateCSSUnit(titleSpaceTablet, "px"),
    },
    " .responsive-block-editor-addons-cta-text": {
      "font-size": generateCSSUnit(ctaTextFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(subtitleSpaceTablet, "px"),
    },

    " .responsive-block-editor-addons-cta-button-wrapper": {
      "margin-bottom": generateCSSUnit(buttonSpaceTablet, "px"),
    },
    " .responsive-block-editor-addons-cta-button.rich-text": {
      "font-size": generateCSSUnit(buttonTextFontSizeTablet, "px"),
    },
    " .responsive-block-editor-addons-cta-link-text": {
      "font-size": `${generateCSSUnit(buttonTextFontSizeTablet, "px")}`,
    },
    " h2.responsive-block-editor-addons-cta-title": {
      "margin-bottom": generateCSSUnit(titleSpaceTablet, "px"),
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
