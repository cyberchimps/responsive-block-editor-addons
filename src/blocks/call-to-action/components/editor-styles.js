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
    ctaTextFontSizeMobile,
    ctaTextFontSizeTablet,
    ctaTextColor,
    backgroundImage,
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
    titleSpaceMobile,
    titleSpaceTablet,
    subtitleSpace,
    subtitleSpaceMobile,
    subtitleSpaceTablet,
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
    topPadding,
    topPaddingMobile,
    topPaddingTablet,
    bottomPadding,
    bottomPaddingMobile,
    bottomPaddingTablet,
    leftPadding,
    leftPaddingMobile,
    leftPaddingTablet,
    rightPadding,
    rightPaddingMobile,
    rightPaddingTablet,
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

  let ctaIconMargin = '';
  if (iconPosition === 'before') {
    ctaIconMargin = `auto ${generateCSSUnit(iconSpace, "px")} auto 0`
  }else if (iconPosition === 'after') {
    ctaIconMargin = `auto 0 auto ${generateCSSUnit(iconSpace, "px")}`
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
      "font-family": buttonTextFontFamily,
      "font-size": generateCSSUnit(buttonTextFontSize, "px"),
      "font-weight": buttonTextFontWeight,
      "line-height": buttonTextLineHeight,
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
      "background-image": backgroundImage ? `url(${backgroundImage})` : null,
      "height": 100 + "%",
      "background-position": backgroundImagePosition,
      "background-repeat": backgroundImageRepeat,
      "background-size": backgroundImageSize,
      "border-radius": generateCSSUnit(borderRadius, "px"),
    },

    " .responsive-block-editor-addons-cta-title": {
      "color": ctaTextColor,
      "line-height": headingLineHeight,
      "font-family": ctaTitleFontFamily,
      "font-weight": headingFontWeight,
      "margin-bottom": generateCSSUnit(titleSpace, "px"),
      "font-size": generateCSSUnit(ctaTitleFontSize, "px"),
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
      "padding-top": generateCSSUnit(topPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(bottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(leftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(rightPaddingMobile, "px"),
    },
    " .responsive-block-editor-addons-cta-text": {
      "margin-bottom": generateCSSUnit(subtitleSpaceMobile, "px"),
      "font-size": generateCSSUnit(ctaTextFontSizeMobile, "px") + "!important",
    },
    " .responsive-block-editor-addons-cta-button-wrapper": {
      "margin-bottom": generateCSSUnit(buttonSpaceMobile, "px"),
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
      "padding-top": generateCSSUnit(topPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(bottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(leftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(rightPaddingTablet, "px"),
    },
    " .responsive-block-editor-addons-cta-text": {
      "margin-bottom": generateCSSUnit(subtitleSpaceTablet, "px"),
      "font-size": generateCSSUnit(ctaTextFontSizeTablet, "px"),
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
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-call-to-action.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
