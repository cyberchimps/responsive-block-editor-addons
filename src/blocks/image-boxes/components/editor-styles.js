/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";
import { hexToRgba } from "../../../utils/index.js";

function EditorStyles(props) {
  const {
    block_id,
    imageboxesBlock,
    count,
    gutter,
    contentAlign,
    itemBackgroundColor,
    itemHoverBackgroundColor,
    opacity,
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
    boxPaddingRight,
    boxPaddingLeft,
    boxPaddingTop,
    boxPaddingBottom,
    boxHeight,
    backgroundPosition,
    backgroundRepeat,
    backgroundSize,
    secondaryBackgroundColor,
    hoverSecondaryBackgroundColor,
    bgGradient,
    hoverGradientDegree,
    hoverBgGradient,
    imageHoverEffect,
    hoverOpacity,
    titleFontFamily,
    titleFontSize,
    titleFontSizeMobile,
    titleFontSizeTablet,
    titleFontWeight,
    titleLineHeight,
    titleColor,
    descriptionFontFamily,
    descriptionFontSize,
    descriptionFontWeight,
    descriptionLineHeight,
    descriptionColor,
    imageSize,
    verticalAlignment,
    titleSpacing,
    titleSpacingMobile,
    titleSpacingTablet,
    descriptionSpacing,
    descriptionSpacingMobile,
    descriptionSpacingTablet,
    arrowColor,
    arrowSize,
    backgroundImageOne,
    backgroundImageTwo,
    backgroundImageThree,
    backgroundImageFour,
    gradientDegree,
    blockBorderRadius,
    blockBorderColor,
    blockBorderStyle,
    blockBorderWidth,
	descriptionFontSizeMobile,
	descriptionFontSizeTablet,
	boxRadius,//For compatibility with v1.3.2
  } = props.attributes;

  let imgopacity = opacity / 100;
  let hoverImgopacity = hoverOpacity / 100;

  var tempsecondaryBackgroundColor = bgGradient
    ? secondaryBackgroundColor
    : itemBackgroundColor;
  var tempHoverSecondaryBackgroundColor = hoverBgGradient
    ? hoverSecondaryBackgroundColor
    : itemHoverBackgroundColor;

  var boxShadowPositionCSS = boxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }

  var hoverGradient =
    "linear-gradient(" +
    hoverGradientDegree +
    "deg," +
    hexToRgba(itemHoverBackgroundColor || "#ffffff", hoverImgopacity || 0) +
    "," +
    hexToRgba(
      tempHoverSecondaryBackgroundColor || "#ffffff",
      hoverImgopacity || 0
    ) +
    ")";

    let backgroundImageFirst = `linear-gradient( 
    ${gradientDegree}deg,
    ${hexToRgba(
      itemBackgroundColor || "#ffffff",
      imgopacity || 0
    )},
    ${hexToRgba(
      tempsecondaryBackgroundColor || "#ffffff",
      imgopacity || 0
    )}),url(${backgroundImageOne})`

    let backgroundImageSecond = `linear-gradient( 
      ${gradientDegree}deg,
      ${hexToRgba(
        itemBackgroundColor || "#ffffff",
        imgopacity || 0
      )},
      ${hexToRgba(
        tempsecondaryBackgroundColor || "#ffffff",
        imgopacity || 0
      )}),url(${backgroundImageTwo})`

    let backgroundImageThird = `linear-gradient( 
      ${gradientDegree}deg,
      ${hexToRgba(
        itemBackgroundColor || "#ffffff",
        imgopacity || 0
      )},
      ${hexToRgba(
        tempsecondaryBackgroundColor || "#ffffff",
        imgopacity || 0
      )}),url(${backgroundImageThree})`

    let backgroundImageFourth = `linear-gradient( 
      ${gradientDegree}deg,
      ${hexToRgba(
        itemBackgroundColor || "#ffffff",
        imgopacity || 0
      )},
      ${hexToRgba(
        tempsecondaryBackgroundColor || "#ffffff",
        imgopacity || 0
      )}),url(${backgroundImageFour})`

    let gutterMargin = ""
    if( count > 1){
      if(gutter === "small"){
        gutterMargin = '20px'
      }else if (gutter === "medium"){
        gutterMargin = '30px'
      }else if (gutter === "large"){
        gutterMargin = '40px'
      }else if (gutter === "huge"){
        gutterMargin = '50px'
      }else {
        gutterMargin = '';
      }
    }

  var selectors = {
    " ": {
      "background-color": itemBackgroundColor,
      "text-align": contentAlign,
      "border-style": blockBorderStyle,
      "border-color": blockBorderColor,
      "border-width": generateCSSUnit(blockBorderWidth, "px"),
      "border-radius": boxRadius !== 999 && blockBorderRadius === '' ? generateCSSUnit(boxRadius, "px") : generateCSSUnit(blockBorderRadius, "px"), // For compatibility with v1.3.2.
      "justify-content": verticalAlignment + "!important",
      "background-color": `${hexToRgba(
        itemBackgroundColor || "#fff",
        imgopacity || 0
      )}`,
      "background-size": backgroundSize,
      "background-repeat": backgroundRepeat,
      "background-position": backgroundPosition,
      "padding-left": generateCSSUnit(boxPaddingLeft, "px"),
      "padding-right": generateCSSUnit(boxPaddingRight, "px"),
      "padding-bottom": generateCSSUnit(boxPaddingBottom, "px"),
      "padding-top": generateCSSUnit(boxPaddingTop, "px"),
      height: generateCSSUnit(boxHeight, "px"),
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

    ".responsive-block-editor-addons-block-image-boxes-0": {
      "background-image": backgroundImageFirst,
    },
    ".responsive-block-editor-addons-block-image-boxes-1": {
        "background-image": backgroundImageSecond,
    },
    ".responsive-block-editor-addons-block-image-boxes-2": {
        "background-image": backgroundImageThird,
    },
    ".responsive-block-editor-addons-block-image-boxes-3": {
        "background-image": backgroundImageFourth,
    },

    ":hover .responsive-block-editor-addons-add-image": {
      "background-image": hoverGradient,
      "border-radius": boxRadius !== 999 && blockBorderRadius === '' ? generateCSSUnit(boxRadius, "px") : generateCSSUnit(blockBorderRadius, "px"), //For compatibility with v1.3.2.
    },

    ":hover": {
      "transform": `scale(${imageHoverEffect})`,
    },

    " .responsive-block-editor-addons-imagebox-image": {
      width: imageSize,
      "max-width": 100 + "%",
    },
    " .wp-block-responsive-block-editor-addons-image-boxes-block-item__title": {
      "font-family": titleFontFamily,
      "font-weight": titleFontWeight,
      "font-size": generateCSSUnit(titleFontSize, "px"),
      "line-height": titleLineHeight,
      color: titleColor,
      "margin-bottom": generateCSSUnit(titleSpacing, "px"),
    },
    " .wp-block-responsive-block-editor-addons-image-boxes-block-item__description": {
      "font-family": descriptionFontFamily,
      "font-size": generateCSSUnit(descriptionFontSize, "px"),
      "font-weight": descriptionFontWeight,
      "line-height": descriptionLineHeight,
      color: descriptionColor,
      "margin-bottom": generateCSSUnit(descriptionSpacing, "px"),
    },
    " .imagebox-arrow": {
      color: arrowColor,
      "font-size": generateCSSUnit(arrowSize, "px"),
    },
  };

  var mobile_selectors = {
    " .wp-block-responsive-block-editor-addons-image-boxes-block-item__title": {
      "font-size": generateCSSUnit(titleFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(titleSpacingMobile, "px"),
    },
	" .wp-block-responsive-block-editor-addons-image-boxes-block-item__description": {
		"font-size": generateCSSUnit(descriptionFontSizeMobile, "px"),
    "margin-bottom": generateCSSUnit(descriptionSpacingMobile, "px"),
	},
  };

  var tablet_selectors = {
    " .wp-block-responsive-block-editor-addons-image-boxes-block-item__title": {
      "font-size": generateCSSUnit(titleFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(titleSpacingTablet, "px"),
    },
	" .wp-block-responsive-block-editor-addons-image-boxes-block-item__description": {
		"font-size": generateCSSUnit(descriptionFontSizeTablet, "px"),
    	"margin-bottom": generateCSSUnit(descriptionSpacingTablet, "px"),
	},
  };

  var externalStyles = {
      ".wp-block-responsive-block-editor-addons-image-boxes-block-item-wrapper": {
        "margin-bottom": `${gutterMargin}!important`,
      },
  }

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-image-boxes.block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");
  styling_css += generateCSS(externalStyles, "", true, "mobile");

  return styling_css;
}

export default EditorStyles;
