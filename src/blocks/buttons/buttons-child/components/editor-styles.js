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
    vPadding,
    vPaddingTablet,
    vPaddingMobile,
    hPadding,
    hPaddingTablet,
    hPaddingMobile,
    vMargin,
    hMargin,
    vMarginTablet,
    hMarginTablet,
    vMarginMobile,
    hMarginMobile,
    borderWidth,
    borderRadius,
    borderStyle,
    borderColor,
    borderHColor,
    color,
    background,
    hColor,
    backgroundColor1,
    backgroundColor2,
    colorLocation1,
    colorLocation2,
    gradientDirection,
    backgroundType,
    opacity,
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
    hbackground,
    iconSpace,
    inheritFromTheme,
  } = props.attributes;

  let imgopacity = opacity / 100;

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
  if (vPaddingTablet != null) {
    updatedvPaddingTablet = vPaddingTablet;
  }

  let updatedvPaddingMobile = "";
  if (vPaddingMobile != null) {
    updatedvPaddingMobile = vPaddingMobile;
  }

  let updatedhPaddingTablet = "";
  if (hPaddingTablet != null) {
    updatedhPaddingTablet = hPaddingTablet;
  }

  let updatedhPaddingMobile = "";
  if (hPaddingMobile != null) {
    updatedhPaddingMobile = hPaddingMobile;
  }

  let updatedBackgroundColor = "";
  let updatedBackgroundHColor = "";
  let updatedBackgroundImage = "";
  if (backgroundType === "color") {
    updatedBackgroundColor = background;
    updatedBackgroundHColor = hbackground;
  }
  if (backgroundType == "gradient") {
    updatedBackgroundImage = generateBackgroundImageEffect(
      backgroundColor1,
      backgroundColor2,
      gradientDirection,
      colorLocation1,
      colorLocation2
    );
  }

  var selectors = {
    " .responsive-block-editor-addons-button__wrapper .responsive-block-editor-addons-button__icon svg": {
      color: icon_color+ '!important',
      width: generateCSSUnit(iconsize, "px"),
      height: generateCSSUnit(iconsize, "px"),
    },
    " .responsive-block-editor-addons-button__wrapper .responsive-block-editor-addons-button__icon svg path": {
      color: icon_color+ '!important',
    },
    " .responsive-block-editor-addons-button__wrapper a:hover .responsive-block-editor-addons-button__icon svg": {
      color: icon_hover_color+ '!important',
    },
    " .responsive-block-editor-addons-button__wrapper a:hover .responsive-block-editor-addons-button__icon svg path": {
      color: icon_hover_color+ '!important',
    },
    " .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper:hover .responsive-block-editor-addons-button__link, .edit-post-visual-editor.editor-styles-wrapper .wp-block-cover .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper:hover .responsive-block-editor-addons-button__link": {
      color: hColor ? hColor : '#000',
    },
    " .responsive-block-editor-addons-1.responsive-block-editor-addons-button__wrapper": {
        "margin-left": `${generateCSSUnit(hMargin, "px")} !important`,
        "margin-right": `${generateCSSUnit(hMargin, "px")} !important`,
        "margin-top": `${generateCSSUnit(vMargin, "px")} !important`,
        "margin-bottom": `${generateCSSUnit(vMargin, "px")} !important`,
    },
    " .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper": {
      "border-color": borderColor ? borderColor: "#000",
      "border-radius": generateCSSUnit(borderRadius, "px"),
      "border-style": borderStyle,
      "border-width": generateCSSUnit(borderWidth, "px"),
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
      "padding-left": generateCSSUnit(hPadding, "px"),
      "padding-right": generateCSSUnit(hPadding, "px"),
      "background-image": updatedBackgroundImage,
      "padding-top": generateCSSUnit(vPadding, "px"),
      "padding-bottom": generateCSSUnit(vPadding, "px"),
      "background-color": updatedBackgroundColor,
      "font-size": generateCSSUnit(buttonFontSize, "px"),
      "font-family": buttonFontFamily,
      "font-weight": buttonFontWeight,
      "line-height": buttonLineHeight,
      "opacity": imgopacity,
      color:  inheritFromTheme ? '' : color ? color : '#000',
      "font-size": `${generateCSSUnit(buttonFontSize, "px")} !important`,
    },
    " .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper div": {
      color:  inheritFromTheme ? '' : color ? color : '#000',
    },
    " .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper:hover": {
      "border-color": borderHColor,
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
      " .responsive-block-editor-addons-1.responsive-block-editor-addons-button__wrapper": {
          "margin-top": generateCSSUnit(updatedvMarginMobile, "px") + "!important",
          "margin-bottom":
              generateCSSUnit(updatedvMarginMobile, "px") + "!important",
          "margin-left": generateCSSUnit(updatedhMarginMobile, "px") + "!important",
          "margin-right":
              generateCSSUnit(updatedhMarginMobile, "px") + "!important",
      },
    " .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper": {
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
      " .responsive-block-editor-addons-1.responsive-block-editor-addons-button__wrapper": {
          "margin-top": generateCSSUnit(updatedvMarginTablet, "px") + "!important",
          "margin-bottom":
              generateCSSUnit(updatedvMarginTablet, "px") + "!important",
          "margin-left": generateCSSUnit(updatedhMarginTablet, "px") + "!important",
          "margin-right":
              generateCSSUnit(updatedhMarginTablet, "px") + "!important",

      },
    " .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper": {
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
