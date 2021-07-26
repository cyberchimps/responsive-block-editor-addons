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
    width,
    themeWidth,
    innerWidthType,
    innerWidth,
    innerWidthTablet,
    innerWidthMobile,
    topPadding,
    bottomPadding,
    leftPadding,
    rightPadding,
    topPaddingMobile,
    bottomPaddingMobile,
    leftPaddingMobile,
    rightPaddingMobile,
    topPaddingTablet,
    bottomPaddingTablet,
    leftPaddingTablet,
    rightPaddingTablet,
    mobilePaddingType,
    tabletPaddingType,
    desktopPaddingType,
    topMargin,
    bottomMargin,
    leftMargin,
    rightMargin,
    topMarginMobile,
    bottomMarginMobile,
    leftMarginMobile,
    rightMarginMobile,
    topMarginTablet,
    bottomMarginTablet,
    leftMarginTablet,
    rightMarginTablet,
    blockBorderStyle,
    blockBorderWidth,
    blockBorderRadius,
    blockBorderColor,
    sectionTag,
    backgroundColor,
    backgroundColor1,
    backgroundColor2,
    colorLocation1,
    colorLocation2,
    gradientDirection,
    backgroundType,
    backgroundImage,
    backgroundPosition,
    backgroundAttachment,
    backgroundRepeat,
    backgroundSize,
    backgroundSizeTablet,
    backgroundSizeMobile,
    overlayType,
    backgroundImageColor,
    gradientOverlayColor1,
    gradientOverlayLocation1,
    gradientOverlayColor2,
    gradientOverlayLocation2,
    gradientOverlayType,
    gradientOverlayAngle,
    gradientOverlayPosition,
    backgroundVideo,
    opacity,
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
    backgroundPositionTablet,
    backgroundPositionMobile,
    z_index,
    align,
  } = props.attributes;

  var boxShadowPositionCSS = boxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }
  let imgopacity = opacity / 100;

  let updatedBackgroundImage = "";
  let backgroundImageEffect = "";
  let colorType = "";
  if (overlayType === "color") {
    let colorType = `${hexToRgba(
      backgroundImageColor || "#fff",
      imgopacity || 0
    )}`;

    if(backgroundImage) {
      updatedBackgroundImage = `linear-gradient(${hexToRgba(
        backgroundImageColor || "#fff",
        imgopacity || 0
      )},${hexToRgba(
        backgroundImageColor || "#fff",
        imgopacity || 0
      )}),url(${backgroundImage})`;
    }
    backgroundImageEffect = "";
  }else {
    if (gradientOverlayType === "linear") {
      backgroundImageEffect = `linear-gradient(${gradientOverlayAngle}deg, ${hexToRgba(
        gradientOverlayColor1 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation1}%, ${hexToRgba(
        gradientOverlayColor2 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation2}%),url(${backgroundImage})`;
    }
    if (gradientOverlayType === "radial") {
      backgroundImageEffect = `radial-gradient( at ${gradientOverlayPosition}, ${hexToRgba(
        gradientOverlayColor1 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation1}%, ${hexToRgba(
        gradientOverlayColor2 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation2}%),url(${backgroundImage})`;
    }
  }


  var selectors = {
    " > .responsive-block-editor-addons-block-section": {
      "margin-top": generateCSSUnit(topMargin, "px"),
      "margin-bottom": generateCSSUnit(bottomMargin, "px"),
      "margin-left": generateCSSUnit(leftMargin, "px"),
      "margin-right": generateCSSUnit(rightMargin, "px"),
      "padding-top": generateCSSUnit(topPadding, "px"),
      "padding-bottom": generateCSSUnit(bottomPadding, "px"),
      "padding-left": generateCSSUnit(leftPadding, "px"),
      "padding-right": generateCSSUnit(rightPadding, "px"),
      "background-color": colorType,
      "background-image": backgroundImageEffect,
    },
    " > .responsive-section-wrap > .responsive-section-inner-wrap": {
      "max-width":
        align == "full" ? generateCSSUnit(innerWidth, "px") : "",
      "z-index": z_index,
    },
    " .background-type-video": {
      "background-color": `${hexToRgba(
        backgroundColor || "#fff",
        imgopacity || 0
      )}`,
    },
    " > .responsive-section-wrap": {
      "background-image": updatedBackgroundImage,
      "background-position": backgroundPosition,
      "background-attachment": backgroundAttachment,
      "background-repeat": backgroundRepeat,
      "background-size": backgroundSize,
      "border-radius": generateCSSUnit(blockBorderRadius, "px"),
      "z-index": z_index,
      "max-width": align != "full" ? generateCSSUnit(width, "px") : "",
      "margin-left": align != "full" ? "auto" : "",
      "margin-right": align != "full" ? "auto" : "",
    },
    " > .responsive-section-wrap.responsive-block-editor-addons-block-section": {
      "border-width": generateCSSUnit(blockBorderWidth, "px"),
      "border-color": blockBorderColor,
      "border-style": blockBorderStyle,
      "border-radius": generateCSSUnit(blockBorderRadius, "px"),
      "background-color":
        backgroundType == "color"
          ? `${hexToRgba(backgroundColor || "#fff", imgopacity || 0)}`
          : undefined,
      "background-image":
        backgroundType == "gradient"
          ? generateBackgroundImageEffect(
              `${hexToRgba(backgroundColor1 || "#fff", imgopacity || 0)}`,
              `${hexToRgba(backgroundColor2 || "#fff", imgopacity || 0)}`,
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
  };

  var mobile_selectors = {
    " > .responsive-block-editor-addons-block-section": {
      "margin-top": generateCSSUnit(topMarginMobile, "px"),
      "margin-bottom": generateCSSUnit(bottomMarginMobile, "px"),
      "margin-left": generateCSSUnit(leftMarginMobile, "px"),
      "margin-right": generateCSSUnit(rightMarginMobile, "px"),
      "padding-top": generateCSSUnit(topPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(bottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(leftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(rightPaddingMobile, "px"),
    },
    " > .responsive-section-wrap > .responsive-section-inner-wrap": {
      "max-width":
        align == "full" ? generateCSSUnit(innerWidthMobile, "px") : "",
    },
    " > .responsive-section-wrap": {
      "background-position": backgroundPositionMobile,
      "background-size": backgroundSizeMobile === '' ? backgroundSize : backgroundSizeMobile,
    }
  };

  var tablet_selectors = {
    " > .responsive-block-editor-addons-block-section": {
      "margin-top": generateCSSUnit(topMarginTablet, "px"),
      "margin-bottom": generateCSSUnit(bottomMarginTablet, "px"),
      "margin-left": generateCSSUnit(leftMarginTablet, "px"),
      "margin-right": generateCSSUnit(rightMarginTablet, "px"),
      "padding-top": generateCSSUnit(topPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(bottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(leftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(rightPaddingTablet, "px"),
    },
    " .responsive-section-inner-wrap": {
      "max-width":
        align == "full" ? generateCSSUnit(innerWidthTablet, "px") : "",
    },
    " > .responsive-section-wrap": {
      "background-position": backgroundPositionTablet,
      "background-size": backgroundSizeTablet === '' ? backgroundSize : backgroundSizeTablet,
    }
  };

  var outerElement = {
    ".responsive-block-editor-addons-section__video-wrap": {
      "border-radius": generateCSSUnit(blockBorderRadius, "px"),
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-section-outer-wrap.block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");
  styling_css += generateCSS(outerElement, "");

  return styling_css;
}

export default EditorStyles;
