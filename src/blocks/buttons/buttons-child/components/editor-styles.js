/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../../generateCSS";
import generateCSSUnit from "../../../../generateCSSUnit";
import generateBackgroundImageEffect from "../../../../generateBackgroundImageEffect";

function EditorStyles(props) {
  const {
    block_id,
    iconsize,
    ctaHpadding,
    ctaHpaddingTablet,
    ctaHpaddingMobile,
    ctaVpadding,
    ctaVpaddingTablet,
    ctaVpaddingMobile,
    vMargin,
    hMargin,
    vMarginTablet,
    hMarginTablet,
    vMarginMobile,
    hMarginMobile,
    ctaBorderWidth,
    ctaBorderRadius,
    ctaBorderStyle,
    ctaBorderColor,
    ctaHoverBorderColor,
    ctaColor,
    ctaHoverColor,
    ctaBackColor,
    buttonbackgroundColor1,
    buttonbackgroundColor2,
    buttoncolorLocation1,
    buttoncolorLocation2,
    buttongradientDirection,
    buttonbackgroundType,
    ctaTextOpacity,
    iconPosition,
    buttonFontFamily,
    buttonFontSize,
    buttonFontSizeTablet,
    buttonFontSizeMobile,
    buttonLineHeight,
    buttonFontWeight,
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
    icon_color,
    icon_hover_color,
    ctaHoverBackColor,
    iconSpace,
    inheritFromTheme,
  } = props.attributes;

  let imgopacity = ctaTextOpacity / 100;

  var boxShadowPositionCSS = boxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }

  let iconSpaceRight = "";
  if (iconPosition === "before") {
    iconSpaceRight = iconSpace;
  }
  let iconSpaceLeft = "";
  if (iconPosition === "after") {
    iconSpaceLeft = iconSpace;
  }

  let updatedvMarginTablet = "";
  if (vMarginTablet != null) {
    updatedvMarginTablet = vMarginTablet;
  }

  let updatedvMarginMobile = "";
  if (vMarginMobile != null) {
    updatedvMarginMobile = vMarginMobile;
  }

  let updatedhMarginTablet = "";
  if (hMarginTablet != null) {
    updatedhMarginTablet = hMarginTablet;
  }

  let updatedhMarginMobile = "";
  if (hMarginMobile != null) {
    updatedhMarginMobile = hMarginMobile;
  }

  let updatedvPaddingTablet = "";
  if (ctaVpaddingTablet != null) {
    updatedvPaddingTablet = ctaVpaddingTablet;
  }

  let updatedvPaddingMobile = "";
  if (ctaVpaddingMobile != null) {
    updatedvPaddingMobile = ctaVpaddingMobile;
  }

  let updatedhPaddingTablet = "";
  if (ctaHpaddingTablet != null) {
    updatedhPaddingTablet = ctaHpaddingTablet;
  }

  let updatedhPaddingMobile = "";
  if (ctaHpaddingMobile != null) {
    updatedhPaddingMobile = ctaHpaddingMobile;
  }

  let updatedBackgroundColor = "";
  let updatedBackgroundHColor = "";
  let updatedBackgroundImage = "";
  if (buttonbackgroundType === "color") {
    updatedBackgroundColor = ctaBackColor;
    updatedBackgroundHColor = ctaHoverBackColor;
  }
  if (buttonbackgroundType == "gradient") {
    updatedBackgroundImage = generateBackgroundImageEffect(
      buttonbackgroundColor1,
      buttonbackgroundColor2,
      buttongradientDirection,
      buttoncolorLocation1,
      buttoncolorLocation2
    );
  }

  var selectors = {
    " .responsive-block-editor-addons-button__wrapper .responsive-block-editor-addons-button__icon svg": {
      color: icon_color,
      width: generateCSSUnit(iconsize, "px"),
      height: generateCSSUnit(iconsize, "px"),
    },
    " .responsive-block-editor-addons-button__wrapper div:hover .responsive-block-editor-addons-button__icon svg": {
      color: icon_hover_color,
    },
    " .responsive-block-editor-addons-button__wrapper .responsive-block-editor-addons-button__link, .edit-post-visual-editor.editor-styles-wrapper .responsive-block-editor-addons-button__wrapper .responsive-block-editor-addons-button__link": {
      color: ctaColor,
    },
    " .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper:hover .responsive-block-editor-addons-button__link, .edit-post-visual-editor.editor-styles-wrapper .wp-block-cover .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper:hover .responsive-block-editor-addons-button__link": {
      color: ctaHoverColor,
    },
    " .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper": {
      "border-color": ctaBorderColor,
      "border-radius": generateCSSUnit(ctaBorderRadius, "px"),
      "border-style": ctaBorderStyle,
      "border-width": generateCSSUnit(ctaBorderWidth, "px"),
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
      "padding-left": generateCSSUnit(ctaHpadding, "px"),
      "padding-right": generateCSSUnit(ctaHpadding, "px"),
      "background-image": updatedBackgroundImage,
      "padding-top": generateCSSUnit(ctaVpadding, "px"),
      "padding-bottom": generateCSSUnit(ctaVpadding, "px"),
      "margin-left": `${generateCSSUnit(hMargin, "px")} !important`,
      "margin-right": `${generateCSSUnit(hMargin, "px")} !important`,
      "margin-top": `${generateCSSUnit(vMargin, "px")} !important`,
      "margin-bottom": `${generateCSSUnit(vMargin, "px")} !important`,
      "background-color": updatedBackgroundColor,
    },
    " .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper a": {
      "font-size": generateCSSUnit(buttonFontSize, "px"),
      "font-family": buttonFontFamily,
      "font-weight": buttonFontWeight,
      "line-height": buttonLineHeight,
      opacity: imgopacity,
      "font-size": `${generateCSSUnit(buttonFontSize, "px")} !important`,
    },
    " .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper:hover": {
      "border-color": ctaHoverBorderColor,
      "background-color": updatedBackgroundHColor,
    },
    " .responsive-block-editor-addons-button__icon": {
      "margin-left": iconSpaceLeft + "px",
      "margin-right": iconSpaceRight + "px",
    },
  };

  var mobile_selectors = {
    " .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper a": {
      "font-size": generateCSSUnit(buttonFontSizeMobile, "px") + "!important",
    },
    " .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper": {
      "margin-top": generateCSSUnit(updatedvMarginMobile, "px") + "!important",
      "margin-bottom":
        generateCSSUnit(updatedvMarginMobile, "px") + "!important",
      "margin-left": generateCSSUnit(updatedhMarginMobile, "px") + "!important",
      "margin-right":
        generateCSSUnit(updatedhMarginMobile, "px") + "!important",
      "padding-top": generateCSSUnit(updatedvPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(updatedvPaddingMobile, "px"),
      "padding-left": generateCSSUnit(updatedhPaddingMobile, "px"),
      "padding-right": generateCSSUnit(updatedhPaddingMobile, "px"),
    },
  };

  var tablet_selectors = {
    " .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper a": {
      "font-size": generateCSSUnit(buttonFontSizeTablet, "px") + "!important",
    },
    " .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper": {
      "margin-top": generateCSSUnit(updatedvMarginTablet, "px") + "!important",
      "margin-bottom":
        generateCSSUnit(updatedvMarginTablet, "px") + "!important",
      "margin-left": generateCSSUnit(updatedhMarginTablet, "px") + "!important",
      "margin-right":
        generateCSSUnit(updatedhMarginTablet, "px") + "!important",
      "padding-top": generateCSSUnit(updatedvPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(updatedvPaddingTablet, "px"),
      "padding-left": generateCSSUnit(updatedhPaddingTablet, "px"),
      "padding-right": generateCSSUnit(updatedhPaddingTablet, "px"),
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-buttons-child.block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
