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
    backgroundColorHover,
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
    columnTopMargin,
    columnTopMarginTablet,
    columnTopMarginMobile,
    columnBottomMargin,
    columnBottomMarginTablet,
    columnBottomMarginMobile,
    columnLeftMargin,
    columnLeftMarginTablet,
    columnLeftMarginMobile,
    columnRightMargin,
    columnRightMarginTablet,
    columnRightMarginMobile,
    columnTopPadding,
	columnTopPaddingTablet,
	columnTopPaddingMobile,
	columnBottomPadding,
	columnBottomPaddingTablet,
	columnBottomPaddingMobile,
	columnLeftPadding,
	columnLeftPaddingTablet,
	columnLeftPaddingMobile,
	columnRightPadding,
	columnRightPaddingTablet,
	columnRightPaddingMobile,
	topMargin, //For compatibility with v1.3.2.
	topMarginTablet, //For compatibility with v1.3.2.
	topMarginMobile, //For compatibility with v1.3.2.
	bottomMargin, //For compatibility with v1.3.2.
	bottomMarginTablet, //For compatibility with v1.3.2.
	bottomMarginMobile, //For compatibility with v1.3.2.
	leftMargin, //For compatibility with v1.3.2.
	leftMarginTablet, //For compatibility with v1.3.2.
	leftMarginMobile, //For compatibility with v1.3.2.
	rightMargin, //For compatibility with v1.3.2.
	rightMarginTablet, //For compatibility with v1.3.2.
	rightMarginMobile, //For compatibility with v1.3.2.
	topPadding, //For compatibility with v1.3.2.
	topPaddingTablet, //For compatibility with v1.3.2.
	topPaddingMobile, //For compatibility with v1.3.2.
	bottomPadding, //For compatibility with v1.3.2.
	bottomPaddingTablet, //For compatibility with v1.3.2.
	bottomPaddingMobile, //For compatibility with v1.3.2.
	leftPadding, //For compatibility with v1.3.2.
	leftPaddingTablet, //For compatibility with v1.3.2.
	leftPaddingMobile, //For compatibility with v1.3.2.
	rightPadding, //For compatibility with v1.3.2.
	rightPaddingTablet, //For compatibility with v1.3.2.
	rightPaddingMobile, //For compatibility with v1.3.2.
	backgroundPosition, // For compatibility with v1.3.2.
	backgroundRepeat, // For compatibility with v1.3.2.
	backgroundSize, // For compatibility with v1.3.2.
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
      "background-color":
        backgroundType == "color"
          ? `${hexToRgba(backgroundColorHover || "#ffffff", imgopacity || 0)}`
          : undefined,
    },
    " .responsive-block-editor-addons-block-column": {
      "padding-top": topPadding !== 999 && !columnTopPadding ? generateCSSUnit(topPadding, "px") : generateCSSUnit(columnTopPadding, "px"), //For compatibility with v1.3.2.
      "padding-bottom": bottomPadding !== 999 && !columnBottomPadding ? generateCSSUnit(bottomPadding, "px") : generateCSSUnit(columnBottomPadding, "px"), //For compatibility with v1.3.2.
      "padding-left": leftPadding !== 999 && !columnLeftPadding ? generateCSSUnit(leftPadding, "px") : generateCSSUnit(columnLeftPadding, "px"), //For compatibility with v1.3.2.
      "padding-right": rightPadding !== 999 && !columnRightPadding ? generateCSSUnit(rightPadding, "px") : generateCSSUnit(columnRightPadding, "px"), //For compatibility with v1.3.2.
      "margin-top": topMargin !== 999 && !columnTopMargin ? generateCSSUnit(topMargin, "px") : generateCSSUnit(columnTopMargin, "px"), //For compatibility with v1.3.2.
      "margin-bottom": bottomMargin !== 999 && !columnBottomMargin ? generateCSSUnit(bottomMargin, "px") : generateCSSUnit(columnBottomMargin, "px"), //For compatibility with v1.3.2.
      "margin-left": leftMargin !== 999 && !columnLeftMargin ? generateCSSUnit(leftMargin, "px") : generateCSSUnit(columnLeftMargin, "px"), //For compatibility with v1.3.2.
      "margin-right": rightMargin !== 999 && !columnRightMargin ? generateCSSUnit(rightMargin, "px") : generateCSSUnit(columnRightMargin, "px"), //For compatibility with v1.3.2.
      "border-color": blockBorderColor,
      "border-style": blockBorderStyle,
      "border-width": generateCSSUnit(blockBorderWidth, "px"),
      "border-radius": generateCSSUnit(blockBorderRadius, "px"),
      "background-color":
        backgroundType == "color"
          ? `${hexToRgba(backgroundColor || "#ffffff", imgopacity || 0)}`
          : undefined,
      "background-image": blockBackground,
      "background-position": backgroundPosition !== "empty" && backgroundImagePosition === "center center" ? backgroundPosition : backgroundImagePosition, // For compatibility with v1.3.2.
      "background-attachment": backgroundAttachment,
      "background-repeat": backgroundRepeat !== "empty" && backgroundImageRepeat === "no-repeat" ? backgroundRepeat : backgroundImageRepeat, // For compatibility with v1.3.2.
      "background-size": backgroundSize !== "empty" && backgroundImageSize === "cover" ? backgroundSize : backgroundImageSize, // For compatibility with v1.3.2.
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
      "padding-top": topPaddingMobile !== 999 && !columnTopPaddingMobile ? generateCSSUnit(topPaddingMobile, "px") : generateCSSUnit(columnTopPaddingMobile, "px"), //For compatibility with v1.3.2.
      "padding-bottom": bottomPaddingMobile !== 999 && !columnBottomPaddingMobile ? generateCSSUnit(bottomPaddingMobile, "px") : generateCSSUnit(columnBottomPaddingMobile, "px"), //For compatibility with v1.3.2.
      "padding-left": leftPaddingMobile !== 999 && !columnLeftPaddingMobile ? generateCSSUnit(leftPaddingMobile, "px") : generateCSSUnit(columnLeftPaddingMobile, "px"), //For compatibility with v1.3.2.
      "padding-right": rightPaddingMobile !== 999 && !columnRightPaddingMobile ? generateCSSUnit(rightPaddingMobile) : generateCSSUnit(columnRightPaddingMobile, "px"), //For compatibility with v1.3.2.
      "margin-top": topMarginMobile !== 999 && !columnTopMarginMobile ? generateCSSUnit(topMarginMobile, "px") : generateCSSUnit(columnTopMarginMobile, "px"), //For compatibility with v1.3.2.
      "margin-bottom": bottomMarginMobile !== 999 && !columnBottomMarginMobile ? generateCSSUnit(bottomMarginMobile, "px") : generateCSSUnit(columnBottomMarginMobile, "px"), //For compatibility with v1.3.2.
      "margin-left": leftMarginMobile !== 999 && !columnLeftMarginMobile ? generateCSSUnit(leftMarginMobile, "px") : generateCSSUnit(columnLeftMarginMobile, "px"), //For compatibility with v1.3.2.
      "margin-right": rightMarginMobile !== 999 && !columnRightMarginMobile ? generateCSSUnit(rightMarginMobile, "px") : generateCSSUnit(columnRightMarginMobile, "px"), //For compatibility with v1.3.2.
    },
  };

  var tablet_selectors = {
    " .responsive-block-editor-addons-block-column": {
      "padding-top": topPaddingTablet !== 999 && !columnTopPaddingTablet ? generateCSSUnit(topPaddingTablet , "px" ) : generateCSSUnit(columnTopPaddingTablet, "px"), //For compatibility with v1.3.2.
      "padding-bottom": bottomPaddingTablet !== 999 && !columnBottomPaddingTablet ? generateCSSUnit(bottomPaddingTablet, "px") : generateCSSUnit(columnBottomPaddingTablet, "px"), //For compatibility with v1.3.2.
      "padding-left": leftPaddingTablet !== 999 && !columnLeftPaddingTablet ? generateCSSUnit(leftPaddingTablet, "px") : generateCSSUnit(columnLeftPaddingTablet, "px"), //For compatibility with v1.3.2.
      "padding-right": rightPaddingTablet !== 999 && !columnRightPaddingTablet ? generateCSSUnit(rightPaddingTablet, "px") : generateCSSUnit(columnRightPaddingTablet, "px"), //For compatibility with v1.3.2.
      "margin-top": topMarginTablet !== 999 && !columnTopMarginTablet ? generateCSSUnit(topMarginTablet, "px") : generateCSSUnit(columnTopMarginTablet, "px"), //For compatibility with v1.3.2.
      "margin-bottom": bottomMarginTablet !== 999 && !columnBottomMarginTablet ? generateCSSUnit(bottomMarginTablet, "px") : generateCSSUnit(columnBottomMarginTablet, "px"), //For compatibility with v1.3.2.
      "margin-left": leftMarginTablet !== 999 && !columnLeftMarginTablet ? generateCSSUnit(leftMarginTablet, "px") : generateCSSUnit(columnLeftMarginTablet, "px"), //For compatibility with v1.3.2.
      "margin-right": rightMarginTablet !== 999 && !columnRightPaddingTablet ? generateCSSUnit(rightMarginTablet, "px") : generateCSSUnit(columnRightMarginTablet, "px"), //For compatibility with v1.3.2.s
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
