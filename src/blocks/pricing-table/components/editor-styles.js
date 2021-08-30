/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";
import { hexToRgba } from "../../../utils";
import generateBackgroundImageEffect from "../../../generateBackgroundImageEffect";

function EditorStyles(props) {
  const {
    block_id,
    textColor,
    titleColor,
    prefixColor,
    priceColor,
    suffixColor,
    subpriceColor,
    featuresColor,
    itemBackgroundColor,
    blockBorderStyle,
    blockBorderWidth,
    blockBorderRadius,
    blockBorderColor,
    backgroundColor,
    backgroundColor1,
    backgroundColor2,
    colorLocation1,
    colorLocation2,
    gradientDirection,
    backgroundType,
    backgroundImage,
    opacity,
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
    buttonBoxShadowColor,
    buttonBoxShadowHOffset,
    buttonBoxShadowVOffset,
    buttonBoxShadowBlur,
    buttonBoxShadowSpread,
    buttonBoxShadowPosition,
    blockbackgroundColor,
    blockBackColorOpacity,
    columnBackColorOpacity,
    blockbackgroundColor1,
    blockbackgroundColor2,
    blockcolorLocation1,
    blockcolorLocation2,
    blockgradientDirection,
    blockbackgroundType,
    blockopacity,
    ctaColor,
    ctaBackColor,
    ctaHoverColor,
    ctaHoverBackColor,
    ctaBorderColor,
    ctaBorderRadius,
    ctaBorderWidth,
    ctaBorderStyle,
    ctaHpadding,
    ctaVpadding,
    buttonbackgroundType,
    buttongradientDirection,
    buttoncolorLocation1,
    buttoncolorLocation2,
    buttonbackgroundColor1,
    buttonbackgroundColor2,
    buttonHbackgroundType,
    buttonHgradientDirection,
    buttonHcolorLocation1,
    buttonHcolorLocation2,
    buttonHbackgroundColor1,
    buttonHbackgroundColor2,
    titleFontFamily,
    titleFontSize,
    titleFontWeight,
    titleLineHeight,
    amountFontFamily,
    amountFontSize,
    amountFontWeight,
    amountLineHeight,
    prefixFontFamily,
    prefixFontSize,
    prefixFontWeight,
    prefixLineHeight,
    suffixFontFamily,
    suffixFontSize,
    suffixFontWeight,
    suffixLineHeight,
    subpriceFontFamily,
    subpriceFontSize,
    subpriceFontWeight,
    subpriceLineHeight,
    subpriceTextTransform,
    featuresFontFamily,
    featuresFontSize,
    featuresFontWeight,
    featuresLineHeight,
    ctaFontFamily,
    ctaFontSize,
    ctaFontWeight,
    ctaLineHeight,
    blockTopPadding,
    blockBottomPadding,
    blockLeftPadding,
    blockRightPadding,
    columnTopPadding,
    columnBottomPadding,
    columnLeftPadding,
    columnRightPadding,
    blockTopPaddingMobile,
    blockBottomPaddingMobile,
    blockLeftPaddingMobile,
    blockRightPaddingMobile,
    columnTopPaddingMobile,
    columnBottomPaddingMobile,
    columnLeftPaddingMobile,
    columnRightPaddingMobile,
    blockTopPaddingTablet,
    blockBottomPaddingTablet,
    blockLeftPaddingTablet,
    blockRightPaddingTablet,
    columnTopPaddingTablet,
    columnBottomPaddingTablet,
    columnLeftPaddingTablet,
    columnRightPaddingTablet,
    titleSpace,
    priceSpace,
    subpriceSpace,
    buttonSpace,
    featuresSpace,
    titleSpaceMobile,
    priceSpaceMobile,
    subpriceSpaceMobile,
    buttonSpaceMobile,
    featuresSpaceMobile,
    titleSpaceTablet,
    priceSpaceTablet,
    subpriceSpaceTablet,
    buttonSpaceTablet,
    featuresSpaceTablet,
    blockAlign,
    ctaHoverBorderColor,
    ctaHpaddingTablet,
    ctaHpaddingMobile,
    ctaVpaddingTablet,
    ctaVpaddingMobile,
    titleFontSizeMobile,
    titleFontSizeTablet,
    prefixFontSizeMobile,
    prefixFontSizeTablet,
    amountFontSizeMobile,
    amountFontSizeTablet,
    suffixFontSizeMobile,
    suffixFontSizeTablet,
    subpriceFontSizeMobile,
    subpriceFontSizeTablet,
    featuresFontSizeMobile,
    featuresFontSizeTablet,
    ctaFontSizeMobile,
    ctaFontSizeTablet,
      imageWidth,
      imageWidthTablet,
      imageWidthMobile
  } = props.attributes;

  var boxShadowPositionCSS = boxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }
  var buttonBoxShadowPositionCSS = buttonBoxShadowPosition;

  if ("outset" === buttonBoxShadowPosition) {
    buttonBoxShadowPositionCSS = "";
  }

  let updatedButtonBgHColor = "";
  let updatedButtonBgHImage = "";
  if (buttonHbackgroundType === "color") {
    updatedButtonBgHColor = ctaHoverBackColor;
  } else if (buttonHbackgroundType == "gradient") {
    updatedButtonBgHImage = `linear-gradient(${buttonHgradientDirection}deg, ${buttonHbackgroundColor1} ${buttonHcolorLocation1}%, ${buttonHbackgroundColor2} ${buttonHcolorLocation2}%)`;
  }

  let updatedButtonBackgroundColor = "";
  let updatedButtonBackgroundImage = "";
  if (buttonbackgroundType == "color") {
    updatedButtonBackgroundColor = ctaBackColor;
  } else if (buttonbackgroundType == "gradient") {
    updatedButtonBackgroundImage = `linear-gradient(${buttongradientDirection}deg, ${buttonbackgroundColor1} ${buttoncolorLocation1}%, ${buttonbackgroundColor2} ${buttoncolorLocation2}%)`;
  }

  let imgopacity = opacity / 100;
  let blockimgopacity = blockopacity / 100;
  let columnbackcoloropacity = columnBackColorOpacity / 100;

  let alignStyle = "center";
  if ("left" == blockAlign) {
    alignStyle = "flex-start";
  }
  if ("right" == blockAlign) {
    alignStyle = "flex-end";
  }

  var selectors = {
    " .wp-block-responsive-block-editor-addons-pricing-table-item__button": {
      color: ctaColor + "!important",
      "background-color": updatedButtonBackgroundColor,
      "background-image": updatedButtonBackgroundImage,
      "margin-left": "left" == blockAlign ? 0 : "",
      "margin-right": "right" == blockAlign ? 0 : "",
      "margin-bottom": generateCSSUnit(buttonSpace, "px"),
      "padding-left": generateCSSUnit(ctaHpadding, "px"),
      "padding-right": generateCSSUnit(ctaHpadding, "px"),
      "padding-top": generateCSSUnit(ctaVpadding, "px"),
      "padding-bottom": generateCSSUnit(ctaVpadding, "px"),
      "border-color": ctaBorderColor,
      "border-radius": generateCSSUnit(ctaBorderRadius, "px"),
      "border-width": generateCSSUnit(ctaBorderWidth, "px"),
      "border-style": ctaBorderStyle,
      "line-height": ctaLineHeight,
      "font-weight": ctaFontWeight,
      "font-size": generateCSSUnit(ctaFontSize, "px"),
      "font-family": ctaFontFamily,
      "box-shadow":
        generateCSSUnit(buttonBoxShadowHOffset, "px") +
        " " +
        generateCSSUnit(buttonBoxShadowVOffset, "px") +
        " " +
        generateCSSUnit(buttonBoxShadowBlur, "px") +
        " " +
        generateCSSUnit(buttonBoxShadowSpread, "px") +
        " " +
        buttonBoxShadowColor +
        " " +
        buttonBoxShadowPositionCSS,
    },

    " .wp-block-responsive-block-editor-addons-pricing-table-item__button:hover": {
      color: ctaHoverColor + "!important",
      "background-color": updatedButtonBgHColor,
      "background-image": buttonHbackgroundType == 'color' ? 'none' : updatedButtonBgHImage,
      "border-color" : ctaHoverBorderColor,
    },

    " .wp-block-responsive-block-editor-addons-pricing-table-item.background-type-image": {
      "background-image": `linear-gradient(${hexToRgba(
        "#fff",
        1 - imgopacity || 0
      )},${hexToRgba("#fff", 1 - imgopacity || 0)}),url(${backgroundImage});`,
      "background-position": "center center",
      "background-attachment": "scroll",
      "background-repeat": "no-repeat",
      "background-size": "cover",
    },

    "": {
      "text-align": blockAlign,
      "padding-top": generateCSSUnit(blockTopPadding, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPadding, "px"),
      "padding-left": generateCSSUnit(blockLeftPadding, "px"),
      "padding-right": generateCSSUnit(blockRightPadding, "px"),
      "background-color":
        blockbackgroundType == "color"
          ? `${hexToRgba(blockbackgroundColor || "#fff", 0)}`
          : "",
      opacity: blockbackgroundType == "color" ? blockBackColorOpacity : 100,
      "background-image":
        blockbackgroundType == "gradient"
          ? generateBackgroundImageEffect(
              blockbackgroundColor1,
              blockbackgroundColor2,
              blockgradientDirection,
              blockcolorLocation1,
              blockcolorLocation2
            )
          : undefined,
    },

    " .responsive-block-editor-addons-pricing-table-background-image": {
      height: "100" + "%",
      opacity: blockimgopacity,
    },

    " .wp-block-responsive-block-editor-addons-pricing-table-item": {
      "padding-top": generateCSSUnit(columnTopPadding, "px"),
      "padding-bottom": generateCSSUnit(columnBottomPadding, "px"),
      "padding-left": generateCSSUnit(columnLeftPadding, "px"),
      "padding-right": generateCSSUnit(columnRightPadding, "px"),
      color: textColor,
      "background-color": itemBackgroundColor,
      "border-width": generateCSSUnit(blockBorderWidth, "px"),
      "border-color": blockBorderColor,
      "border-style": blockBorderStyle,
      "border-radius": generateCSSUnit(blockBorderRadius, "px"),
      "background-color":
        backgroundType == "color"
          ? `${hexToRgba(
              backgroundColor || "#fff",
              columnbackcoloropacity || 0
            )}`
          : "#eee",
      "background-image":
        backgroundType == "gradient"
          ? generateBackgroundImageEffect(
              `${hexToRgba(
                backgroundColor1 || "#fff",
                columnbackcoloropacity || 0
              )}`,
              `${hexToRgba(
                backgroundColor2 || "#fff",
                columnbackcoloropacity || 0
              )}`,
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

    " .responsive-block-editor-addons-remove-image": {
      position: "absolute",
      right: "15px",
      top: "45px",
    },

      " .responsive-block-editor-addons-pricing-image": {
      width: generateCSSUnit(imageWidth, "px"),
    },

    " .wp-block-responsive-block-editor-addons-pricing-table-item__title": {
      color: titleColor,
      "line-height": titleLineHeight,
      "font-weight": titleFontWeight,
      "font-size": generateCSSUnit(titleFontSize, "px"),
      "font-family": titleFontFamily,
      "margin-bottom": generateCSSUnit(titleSpace, "px"),
    },

    " .wp-block-responsive-block-editor-addons-pricing-table-item__price-wrapper": {
      "margin-bottom": generateCSSUnit(priceSpace, "px"),
      "justify-content": alignStyle,
    },

    " .wp-block-responsive-block-editor-addons-pricing-table-item__currency": {
      color: prefixColor,
      "line-height": prefixLineHeight,
      "font-weight": prefixFontWeight,
      "font-size": generateCSSUnit(prefixFontSize, "px"),
      "font-family": prefixFontFamily,
    },

    " .wp-block-responsive-block-editor-addons-pricing-table-item__amount": {
      color: priceColor,
      "line-height": amountLineHeight,
      "font-weight": amountFontWeight,
      "font-size": generateCSSUnit(amountFontSize, "px"),
      "font-family": amountFontFamily,
    },

    " .wp-block-responsive-block-editor-addons-pricing-table-item__price_suffix": {
      color: suffixColor,
      "line-height": suffixLineHeight,
      "font-weight": suffixFontWeight,
      "font-size": generateCSSUnit(suffixFontSize, "px"),
      "font-family": suffixFontFamily,
    },

    " .wp-block-responsive-block-editor-addons-pricing-table-item__sub_price": {
      color: subpriceColor,
      "line-height": subpriceLineHeight,
      "text-transform": subpriceTextTransform,
      "font-weight": subpriceFontWeight,
      "font-size": generateCSSUnit(subpriceFontSize, "px"),
      "font-family": subpriceFontFamily,
      "margin-bottom": generateCSSUnit(subpriceSpace, "px"),
    },

    " .wp-block-responsive-block-editor-addons-pricing-table-item__features": {
      color: featuresColor,
      "line-height": featuresLineHeight,
      "font-weight": featuresFontWeight,
      "font-size": generateCSSUnit(featuresFontSize, "px"),
      "font-family": featuresFontFamily,
      "margin-bottom": generateCSSUnit(featuresSpace, "px"),
    },
  };

  var mobile_selectors = {
    "": {
      "padding-top": generateCSSUnit(blockTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(blockLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item": {
      "padding-top": generateCSSUnit(columnTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(columnBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(columnLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(columnRightPaddingMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__price-wrapper": {
      "margin-bottom": generateCSSUnit(priceSpaceMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__title": {
      "font-size": generateCSSUnit(titleFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(titleSpaceMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__currency": {
      "font-size": generateCSSUnit(prefixFontSizeMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__amount": {
      "font-size": generateCSSUnit(amountFontSizeMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__price_suffix": {
      "font-size": generateCSSUnit(suffixFontSizeMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__sub_price": {
      "font-size": generateCSSUnit(subpriceFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(subpriceSpaceMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__features": {
      "font-size": generateCSSUnit(featuresFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(featuresSpaceMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__button": {
      "padding-left": generateCSSUnit(ctaHpaddingMobile, "px"),
      "padding-right": generateCSSUnit(ctaHpaddingMobile, "px"),
      "padding-top": generateCSSUnit(ctaVpaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(ctaVpaddingMobile, "px"),
      "font-size": generateCSSUnit(ctaFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(buttonSpaceMobile, "px"),
    },
      " .responsive-block-editor-addons-pricing-image": {
          width: generateCSSUnit(imageWidthMobile, "px"),
      },
  };

  var tablet_selectors = {
    "": {
      "padding-top": generateCSSUnit(blockTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(blockLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item": {
      "padding-top": generateCSSUnit(columnTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(columnBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(columnLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(columnRightPaddingTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__price-wrapper": {
      "margin-bottom": generateCSSUnit(priceSpaceTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__title": {
      "font-size": generateCSSUnit(titleFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(titleSpaceTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__currency": {
      "font-size": generateCSSUnit(prefixFontSizeTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__amount": {
      "font-size": generateCSSUnit(amountFontSizeTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__price_suffix": {
      "font-size": generateCSSUnit(suffixFontSizeTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__sub_price": {
      "font-size": generateCSSUnit(subpriceFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(subpriceSpaceTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__features": {
      "font-size": generateCSSUnit(featuresFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(featuresSpaceTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-pricing-table-item__button": {
      "padding-left": generateCSSUnit(ctaHpaddingTablet, "px"),
      "padding-right": generateCSSUnit(ctaHpaddingTablet, "px"),
      "padding-top": generateCSSUnit(ctaVpaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(ctaVpaddingTablet, "px"),
      "font-size": generateCSSUnit(ctaFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(buttonSpaceTablet, "px"),
    },
      " .responsive-block-editor-addons-pricing-image": {
          width: generateCSSUnit(imageWidthTablet, "px"),
      },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-pricing-table.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
