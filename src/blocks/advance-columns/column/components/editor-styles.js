/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../../generateCSS";
import generateCSSUnit from "../../../../generateCSSUnit";
import { hexToRgba } from "../../../../utils/index.js";
import generateBackgroundImageEffect from "../../../../generateBackgroundImageEffect";

function EditorStyles(props) {
  const {
    //attributes here
    width,
    backgroundColor,
    backgroundColor1,
    backgroundColor2,
    colorLocation1,
    colorLocation2,
    gradientDirection,
    hoverbackgroundColor1,
    hoverbackgroundColor2,
    hovercolorLocation1,
    hovercolorLocation2,
    hovergradientDirection,
    backgroundType,
    backgroundImage,
    backgroundImagePosition,
    backgroundAttachment,
    backgroundImageRepeat,
    backgroundImageSize,
    overlayType,
    backgroundImageColor,
    gradientOverlayColor1,
    gradientOverlayLocation1,
    gradientOverlayColor2,
    gradientOverlayLocation2,
    gradientOverlayType,
    gradientOverlayAngle,
    gradientOverlayPosition,
    opacity,
    blockBorderStyle,
    blockBorderWidth,
    blockBorderRadius,
    blockBorderColor,
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
    block_id,
    topMargin,
    topMarginTablet,
    topMarginMobile,
    bottomMargin,
    bottomMarginTablet,
    bottomMarginMobile,
    leftMargin,
    leftMarginTablet,
    leftMarginMobile,
    rightMargin,
    rightMarginTablet,
    rightMarginMobile,
    topPadding,
    topPaddingTablet,
    topPaddingMobile,
    bottomPadding,
    bottomPaddingTablet,
    bottomPaddingMobile,
    leftPadding,
    leftPaddingTablet,
    leftPaddingMobile,
    rightPadding,
    rightPaddingTablet,
    rightPaddingMobile,
  } = props.attributes;

  var boxShadowPositionCSS = boxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }
  var hoverboxShadowPositionCSS = hoverboxShadowPosition;

  if ("outset" === hoverboxShadowPosition) {
    hoverboxShadowPositionCSS = "";
  }
  let imgopacity = opacity / 100;

  var blockBackground = "";
  if (backgroundType == "gradient") {
    blockBackground = generateBackgroundImageEffect(
      `${hexToRgba(backgroundColor1 || "#ffffff", imgopacity || 0)}`,
      `${hexToRgba(backgroundColor2 || "#ffffff", imgopacity || 0)}`,
      gradientDirection,
      colorLocation1,
      colorLocation2
    );
  }
  if (backgroundType == "image") {
    if (overlayType == "gradient" && gradientOverlayType == "linear") {
      blockBackground =
        generateBackgroundImageEffect(
          `${hexToRgba(gradientOverlayColor1 || "#fff", imgopacity || 0)}`,
          `${hexToRgba(gradientOverlayColor2 || "#fff", imgopacity || 0)}`,
          gradientOverlayAngle,
          gradientOverlayLocation1,
          gradientOverlayLocation2
        ) + `,url(${backgroundImage})`;
    } else if (overlayType == "gradient" && gradientOverlayType == "radial") {
      blockBackground = `radial-gradient( at ${gradientOverlayPosition}, ${hexToRgba(
        gradientOverlayColor1 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation1}%, ${hexToRgba(
        gradientOverlayColor2 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation2}%),url(${backgroundImage})`;
    } else {
      blockBackground = `linear-gradient(${hexToRgba(
        backgroundImageColor || "#fff",
        imgopacity || 0
      )},${hexToRgba(
        backgroundImageColor || "#fff",
        imgopacity || 0
      )}),url(${backgroundImage})`;
    }
  }
  var selectors = {
    ".block-editor-block-list__block": {
      width: generateCSSUnit(width, "%"),
    },
    " .responsive-block-editor-addons-block-column:hover": {
      "background-image":
        backgroundType == "gradient"
          ? generateBackgroundImageEffect(
            `${hexToRgba(
              hoverbackgroundColor1 || "#ffffff",
              imgopacity || 0
            )}`,
            `${hexToRgba(
              hoverbackgroundColor2 || "#ffffff",
              imgopacity || 0
            )}`,
            hovergradientDirection,
            hovercolorLocation1,
            hovercolorLocation2
          )
          : undefined,
      "box-shadow":
        generateCSSUnit(hoverboxShadowHOffset, "px") +
        " " +
        generateCSSUnit(hoverboxShadowVOffset, "px") +
        " " +
        generateCSSUnit(hoverboxShadowBlur, "px") +
        " " +
        generateCSSUnit(hoverboxShadowSpread, "px") +
        " " +
        hoverboxShadowColor +
        " " +
        hoverboxShadowPositionCSS,
    },
    " .responsive-block-editor-addons-block-column": {
      "padding-top": generateCSSUnit(topPadding, "px"),
      "padding-bottom": generateCSSUnit(bottomPadding, "px"),
      "padding-left": generateCSSUnit(leftPadding, "px"),
      "padding-right": generateCSSUnit(rightPadding, "px"),
      "margin-top": generateCSSUnit(topMargin, "px"),
      "margin-bottom": generateCSSUnit(bottomMargin, "px"),
      "margin-left": generateCSSUnit(leftMargin, "px"),
      "margin-right": generateCSSUnit(rightMargin, "px"),
      "border-color": blockBorderColor,
      "border-style": blockBorderStyle,
      "border-width": generateCSSUnit(blockBorderWidth, "px"),
      "border-radius": generateCSSUnit(blockBorderRadius, "px"),
      "background-color":
        backgroundType == "color"
          ? `${hexToRgba(backgroundColor || "#ffffff", imgopacity || 0)}`
          : undefined,
      "background-image": blockBackground,
      "background-position": backgroundImagePosition,
      "background-attachment": backgroundAttachment,
      "background-repeat": backgroundImageRepeat,
      "background-size": backgroundImageSize,
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
  };

  var mobile_selectors = {
    " .responsive-block-editor-addons-block-column": {
      "padding-top": generateCSSUnit(topPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(bottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(leftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(rightPaddingMobile, "px"),
      "margin-top": generateCSSUnit(topMarginMobile, "px"),
      "margin-bottom": generateCSSUnit(bottomMarginMobile, "px"),
      "margin-left": generateCSSUnit(leftMarginMobile, "px"),
      "margin-right": generateCSSUnit(rightMarginMobile, "px"),
    },
  };

  var tablet_selectors = {
    " .responsive-block-editor-addons-block-column": {
      "padding-top": generateCSSUnit(topPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(bottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(leftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(rightPaddingTablet, "px"),
      "margin-top": generateCSSUnit(topMarginTablet, "px"),
      "margin-bottom": generateCSSUnit(bottomMarginTablet, "px"),
      "margin-left": generateCSSUnit(leftMarginTablet, "px"),
      "margin-right": generateCSSUnit(rightMarginTablet, "px"),
    },
  };

  var styling_css = "";
  var id = `#block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
