/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../../generateCSS";
import generateCSSUnit from "../../../../generateCSSUnit";
import generateBackgroundImageEffect from "../../../../generateBackgroundImageEffect";
import { hexToRgba } from "../../../../utils";

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
    hoverboxShadowColor,
    hoverboxShadowHOffset,
    hoverboxShadowVOffset,
    hoverboxShadowBlur,
    hoverboxShadowSpread,
    hoverboxShadowPosition,
    icon_color,
    icon_hover_color,
    hbackground,
    iconSpace,
    inheritFromTheme,
    blockRightMargin,
    blockRightMarginTablet,
    blockRightMarginMobile,
    blockTopMargin,
    blockTopMarginTablet,
    blockTopMarginMobile,
    blockLeftMargin,
    blockLeftMarginTablet,
    blockLeftMarginMobile,
    blockBottomMargin,
    blockBottomMarginTablet,
    blockBottomMarginMobile,
    blockRightPadding,
    blockRightPaddingTablet,
    blockRightPaddingMobile,
    blockTopPadding,
    blockTopPaddingTablet,
    blockTopPaddingMobile,
    blockLeftPadding,
    blockLeftPaddingTablet,
    blockLeftPaddingMobile,
    blockBottomPadding,
    blockBottomPaddingTablet,
    blockBottomPaddingMobile,
    blockTopRadius,
		blockRightRadius,
		blockBottomRadius,
		blockLeftRadius,
    blockTopRadiusMobile,
		blockRightRadiusMobile,
		blockBottomRadiusMobile,
		blockLeftRadiusMobile,
		blockTopRadiusTablet,
		blockRightRadiusTablet,
		blockBottomRadiusTablet,
		blockLeftRadiusTablet,
    typographyOpacity,
    borderOpacity,
    buttonTextTransform,
    buttonFontStyle,
  } = props.attributes;

  let imgopacity = opacity / 100;

  let typographyOpacityControlValue = typographyOpacity / 100;

  let borderOpacityControlValue = borderOpacity / 100;

  var boxShadowPositionCSS = boxShadowPosition;
  var hoverboxShadowPositionCSS = hoverboxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }
  if ("outset" === hoverboxShadowPosition) {
    hoverboxShadowPositionCSS = "";
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
      color:  hColor ? hColor : color,
      "opacity": `${typographyOpacityControlValue}`,
    },
    " .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper .responsive-block-editor-addons-button__link, .edit-post-visual-editor.editor-styles-wrapper .wp-block-cover .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper .responsive-block-editor-addons-button__link": {
      color:  inheritFromTheme ? '' : color ? color : '#000',
      "opacity": `${typographyOpacityControlValue}`,
    },
    " .responsive-block-editor-addons-1.responsive-block-editor-addons-button__wrapper": {
        "margin-left": `${generateCSSUnit(blockLeftMargin, "px")} !important`,
        "margin-right": `${generateCSSUnit(blockRightMargin, "px")} !important`,
        "margin-top": `${generateCSSUnit(blockTopMargin, "px")} !important`,
        "margin-bottom": `${generateCSSUnit(blockBottomMargin, "px")} !important`,
    },
    " .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper": {
      "border-color": borderColor ? hexToRgba(borderColor, borderOpacityControlValue) : "#000",
      "border-top-left-radius": generateCSSUnit(blockTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadius, "px"),
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
      "padding-left": generateCSSUnit(blockLeftPadding, "px"),
      "padding-right": generateCSSUnit(blockRightPadding, "px"),
      "padding-top": generateCSSUnit(blockTopPadding, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPadding, "px"),
      "background-image": updatedBackgroundImage,
      "background-color": updatedBackgroundColor,
      "font-size": generateCSSUnit(buttonFontSize, "px"),
      "font-family": buttonFontFamily,
      "font-weight": buttonFontWeight,
      "line-height": buttonLineHeight,
      "opacity": imgopacity,
      color:  inheritFromTheme ? '' : color ? color : '#000',
      "font-size": `${generateCSSUnit(buttonFontSize, "px")} !important`,
      "text-transform": buttonTextTransform,
      "font-style": buttonFontStyle,
    },
    " .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper div": {
      color:  inheritFromTheme ? '' : color ? color : '#000',
    },
    " .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper:hover": {
      "border-color": borderHColor,
      "background-color": updatedBackgroundHColor,
      "box-shadow": hoverboxShadowColor !== ""
		  ? generateCSSUnit(hoverboxShadowHOffset, "px") +
        	" " +
        	generateCSSUnit(hoverboxShadowVOffset, "px") +
        	" " +
        	generateCSSUnit(hoverboxShadowBlur, "px") +
        	" " +
        	generateCSSUnit(hoverboxShadowSpread, "px") +
        	" " +
        	hoverboxShadowColor +
        	" " +
        	hoverboxShadowPositionCSS
		  : "",
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
          "margin-left": `${generateCSSUnit(blockLeftMarginMobile, "px")} !important`,
          "margin-right": `${generateCSSUnit(blockRightMarginMobile, "px")} !important`,
          "margin-top": `${generateCSSUnit(blockTopMarginMobile, "px")} !important`,
          "margin-bottom": `${generateCSSUnit(blockBottomMarginMobile, "px")} !important`,
      },
    " .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper": {
      "padding-top": generateCSSUnit(blockTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(blockLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingMobile, "px"),
      "border-top-left-radius": generateCSSUnit(blockTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusMobile, "px"),
    },
  };

  var tablet_selectors = {
    " .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper a": {
      "font-size": generateCSSUnit(buttonFontSizeTablet, "px") + "!important",
    },
      " .responsive-block-editor-addons-1.responsive-block-editor-addons-button__wrapper": {
          "margin-left": `${generateCSSUnit(blockLeftMarginTablet, "px")} !important`,
          "margin-right": `${generateCSSUnit(blockRightMarginTablet, "px")} !important`,
          "margin-top": `${generateCSSUnit(blockTopMarginTablet, "px")} !important`,
          "margin-bottom": `${generateCSSUnit(blockBottomMarginTablet, "px")} !important`,

      },
    " .responsive-block-editor-addons-buttons-repeater.responsive-block-editor-addons-button__wrapper": {
      "padding-top": generateCSSUnit(blockTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(blockLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingTablet, "px"),
      "border-top-left-radius": generateCSSUnit(blockTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusTablet, "px"),
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
