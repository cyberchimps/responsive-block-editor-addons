/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";
import { hexToRgba } from "../../../utils/index.js";

function EditorStyles(props) {
  const {
    block_id,
    playButtonColor = "#ffffff",
    playButtonSize,
    vidwidth,
    vidwidthTablet,
    vidwidthMobile,
    vidheight,
    vidheightTablet,
    vidheightMobile,
    opacity,
    imgURL, // For compatibility with v1.3.2.
    butopacity,
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
    backgroundImage,
	vidBackgroundColor,
  hideWidget,
  hideWidgetTablet,
  hideWidgetMobile,
  blockTopMargin,
  blockBottomMargin,
  blockLeftMargin,
  blockRightMargin,
  blockTopMarginTablet,
  blockBottomMarginTablet,
  blockLeftMarginTablet,
  blockRightMarginTablet,
  blockTopMarginMobile,
  blockBottomMarginMobile,
  blockLeftMarginMobile,
  blockRightMarginMobile,
  blockTopPadding,
  blockTopPaddingMobile,
  blockTopPaddingTablet,
  blockBottomPadding,
  blockBottomPaddingMobile,
  blockBottomPaddingTablet,
  blockLeftPadding,
  blockLeftPaddingMobile,
  blockLeftPaddingTablet,
  blockRightPadding,
  blockRightPaddingMobile,
  blockRightPaddingTablet,
  } = props.attributes;

  var boxShadowPositionCSS = boxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }

  let imgopacity = opacity / 100;

  let playopacity = butopacity / 100;

  let bgImageWithOpacity = "";
  if(backgroundImage && !!backgroundImage.length) {
	bgImageWithOpacity = "linear-gradient( to bottom, " +
		hexToRgba(vidBackgroundColor, imgopacity) +
		", " +
		hexToRgba(vidBackgroundColor, imgopacity) +
		"), " + 
		"url(" +
		backgroundImage +
		")";
  }

  var selectors = {
    " ":{
      "opacity": hideWidget? 0.2 : 1,
      'padding-top': generateCSSUnit(blockTopPadding, "px"),
			'padding-right': generateCSSUnit(blockRightPadding, "px"),
			'padding-bottom': generateCSSUnit(blockBottomPadding, "px"),
			'padding-left': generateCSSUnit(blockLeftPadding, "px"),
			'margin-top': generateCSSUnit(blockTopMargin, "px"),
			'margin-right': generateCSSUnit(blockRightMargin, "px"),
			'margin-bottom': generateCSSUnit(blockBottomMargin, "px"),
			'margin-left': generateCSSUnit(blockLeftMargin, "px"),
    },
    " .responsive-block-editor-addons-video-popup__wrapper": {
      "background-image": (imgURL !== "empty" && !!imgURL.length) && backgroundImage === "" ? `url(${imgURL})` : bgImageWithOpacity, // For compatibility with v1.3.2.
      "background-color": hexToRgba(
        vidBackgroundColor || "#000000",
        imgopacity || 0
      ),
      "max-width": generateCSSUnit(vidwidth, "px"),
      height: generateCSSUnit(vidheight, "px"),
      "border-width": generateCSSUnit(blockBorderWidth, "px"),
      "border-color": blockBorderColor,
      "border-style": blockBorderStyle,
      "border-radius": generateCSSUnit(blockBorderRadius, "px"),
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

    " .responsive-block-editor-addons-video-popup__play-button svg": {
      width: generateCSSUnit(playButtonSize, "px"),
      height: generateCSSUnit(playButtonSize, "px"),
      fill: playButtonColor,
      opacity: playopacity,
    },
  };

  var mobile_selectors = {
    " ":{
      "opacity": hideWidgetMobile? 0.2 : 1,
      'padding-top': generateCSSUnit(blockTopPaddingMobile, "px"),
      'padding-right': generateCSSUnit(blockRightPaddingMobile, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPaddingMobile, "px"),
      'padding-left': generateCSSUnit(blockLeftPaddingMobile, "px"),
      'margin-top': generateCSSUnit(blockTopMarginMobile, "px"),
      'margin-right': generateCSSUnit(blockRightMarginMobile, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMarginMobile, "px"),
      'margin-left': generateCSSUnit(blockLeftMarginMobile, "px"),
    },
    " .responsive-block-editor-addons-video-popup__wrapper": {
      "max-width": generateCSSUnit(vidwidthMobile, "px"),
      height: generateCSSUnit(vidheightMobile, "px"),
    },
  };

  var tablet_selectors = {
    " ":{
      "opacity": hideWidgetTablet? 0.2 : 1,
      'padding-top': generateCSSUnit(blockTopPaddingTablet, "px"),
      'padding-right': generateCSSUnit(blockRightPaddingTablet, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPaddingTablet, "px"),
      'padding-left': generateCSSUnit(blockLeftPaddingTablet, "px"),
      'margin-top': generateCSSUnit(blockTopMarginTablet, "px"),
      'margin-right': generateCSSUnit(blockRightMarginTablet, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMarginTablet, "px"),
      'margin-left': generateCSSUnit(blockLeftMarginTablet, "px"),
    },
    " .responsive-block-editor-addons-video-popup__wrapper": {
      "max-width": generateCSSUnit(vidwidthTablet, "px"),
      height: generateCSSUnit(vidheightTablet, "px"),
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-video-popup.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
