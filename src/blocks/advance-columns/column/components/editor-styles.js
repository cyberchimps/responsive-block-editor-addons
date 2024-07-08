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
    backgroundHoverImage,
    backgroundImageHoverPosition,
    backgroundImageHoverRepeat,
    backgroundImageHoverAttachment,
    backgroundImageHoverSize,
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
  let blockBackgroundHover = "";
  if (backgroundType == "gradient") {
    blockBackground = generateBackgroundImageEffect(
      `${hexToRgba(backgroundColor1 || "#ffffff", imgopacity || 0)}`,
      `${hexToRgba(backgroundColor2 || "#ffffff", imgopacity || 0)}`,
      gradientDirection,
      colorLocation1,
      colorLocation2
    );

    blockBackgroundHover = generateBackgroundImageEffect(
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
      
      blockBackgroundHover =
      backgroundHoverImage ?  generateBackgroundImageEffect(
          `${hexToRgba(gradientOverlayColor1 || "#fff", imgopacity || 0)}`,
          `${hexToRgba(gradientOverlayColor2 || "#fff", imgopacity || 0)}`,
          gradientOverlayAngle,
          gradientOverlayLocation1,
          gradientOverlayLocation2
        ) + `,url(${backgroundHoverImage})` : undefined;

    } else if (overlayType == "gradient" && gradientOverlayType == "radial") {
      blockBackground = `radial-gradient( at ${gradientOverlayPosition}, ${hexToRgba(
        gradientOverlayColor1 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation1}%, ${hexToRgba(
        gradientOverlayColor2 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation2}%),url(${backgroundImage})`;

      blockBackgroundHover = backgroundHoverImage ? `radial-gradient( at ${gradientOverlayPosition}, ${hexToRgba(
        gradientOverlayColor1 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation1}%, ${hexToRgba(
        gradientOverlayColor2 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation2}%),url(${backgroundHoverImage})` : undefined;

    } else {
      blockBackground = `linear-gradient(${hexToRgba(
        backgroundImageColor || "#fff",
        imgopacity || 0
      )},${hexToRgba(
        backgroundImageColor || "#fff",
        imgopacity || 0
      )}),url(${backgroundImage})`;

      blockBackgroundHover = backgroundHoverImage ? `linear-gradient(${hexToRgba(
        backgroundImageColor || "#fff",
        imgopacity || 0
      )},${hexToRgba(
        backgroundImageColor || "#fff",
        imgopacity || 0
      )}),url(${backgroundHoverImage})` : undefined;
    }
  }
  var selectors = {
    ".block-editor-block-list__block": {
      width: generateCSSUnit(width, "%"),
    },
    " .responsive-block-editor-addons-block-column:hover": {
      "background-image": blockBackgroundHover,
      "box-shadow":
	  	hoverboxShadowColor !== ""
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
      "background-color":
        backgroundType == "color" && ' ' !== backgroundColorHover
          ? `${hexToRgba(backgroundColorHover || "#ffffff", imgopacity || 0)}`
          : undefined,
      "background-position": backgroundImageHoverPosition,
      "background-attachment": backgroundImageHoverAttachment,
      "background-repeat": backgroundImageHoverRepeat,
      "background-size": backgroundImageHoverSize,
    },
    " .responsive-block-editor-addons-block-column": {
      "padding-top": generateCSSUnit(columnTopPadding, "px"),
      "padding-right": generateCSSUnit(columnRightPadding, "px"),
      "padding-bottom": generateCSSUnit(columnBottomPadding, "px"),
      "padding-left": generateCSSUnit(columnLeftPadding, "px"),
      "margin-top": generateCSSUnit(columnTopMargin, "px"),
      "margin-right": generateCSSUnit(columnRightMargin, "px"),
      "margin-bottom":generateCSSUnit(columnBottomMargin, "px"),
      "margin-left": generateCSSUnit(columnLeftMargin, "px"),
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
      "padding-top": generateCSSUnit(columnTopPaddingMobile, "px"),
      "padding-right": generateCSSUnit(columnRightPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(columnBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(columnLeftPaddingMobile, "px"),
      "margin-top": generateCSSUnit(columnTopMarginMobile, "px"),
      "margin-right": generateCSSUnit(columnRightMarginMobile, "px"),
      "margin-bottom":generateCSSUnit(columnBottomMarginMobile, "px"),
      "margin-left": generateCSSUnit(columnLeftMarginMobile, "px"),
    },
  };

  var tablet_selectors = {
    " .responsive-block-editor-addons-block-column": {
      "padding-top": generateCSSUnit(columnTopPaddingTablet, "px"),
      "padding-right": generateCSSUnit(columnRightPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(columnBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(columnLeftPaddingTablet, "px"),
      "margin-top": generateCSSUnit(columnTopMarginTablet, "px"),
      "margin-right": generateCSSUnit(columnRightMarginTablet, "px"),
      "margin-bottom":generateCSSUnit(columnBottomMarginTablet, "px"),
      "margin-left": generateCSSUnit(columnLeftMarginTablet, "px"),
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
