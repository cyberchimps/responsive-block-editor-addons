/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";
import { hexToRgba } from "../../../utils/index.js";

function EditorStyles(props) {
  const {
    block_id,
    countUp,
    count,
    textColor,
    itemBackgroundColor,
    dateLineHeight,
    dateFontWeight,
    dateFontSize,
    dateFontSizeMobile,
    dateFontSizeTablet,
    dateFontFamily,
    headingLineHeight,
    headingFontFamily,
    headingFontSize,
	  headingFontWeight,
    titleFontWeight, //For compatibility with v1.3.2
    headingFontSizeMobile,
    headingFontSizeTablet,
    contentFontFamily,
    contentLineHeight,
    contentFontWeight,
    contentFontSize,
    contentFontSizeMobile,
    contentFontSizeTablet,
    blockBorderStyle,
    blockBorderWidth,
    blockBorderRadius,
    blockBorderColor,
    icon_color,
    opacity,
    iconsize,
    numColor,
    titleColor,
    titleSpace,
    numSpace,
    contentSpace,
    iconShapeColor,
    shapeBorderRadius,
    shapePadding,
    shapeBorder,
    contentSpacing,
    iconSpacing,
	contentSpacingTablet,
	contentSpacingMobile,
	iconSpacingTablet,
	iconSpacingMobile,
	titleSpaceTablet,
	titleSpaceMobile,
	numSpaceTablet,
	numSpaceMobile,
	contentSpaceTablet,
	contentSpaceMobile,
  } = props.attributes;

  let imgopacity = opacity / 100;

  var selectors = {
    ".responsive-count__inner .responsive-count-item__features li": {
      "line-height": contentLineHeight,
    },
    ".responsive-count__inner .responsive-block-editor-addons-count-up__source-wrap.res-countup-icon-design-shaped .responsive-block-editor-addons-count-up__source-icon": {
      "background-color": iconShapeColor,
      "border-radius": generateCSSUnit(shapeBorderRadius, "px"),
      padding: generateCSSUnit(shapePadding, "px"),
    },
    ".responsive-count__inner .responsive-block-editor-addons-count-up__source-wrap.res-countup-icon-design-outline .responsive-block-editor-addons-count-up__source-icon": {
      "border-color": iconShapeColor,
      "border-radius": generateCSSUnit(shapeBorderRadius, "px"),
      padding: generateCSSUnit(shapePadding, "px"),
      "border-width": generateCSSUnit(shapeBorder, "px"),
    },
    ".responsive-count__inner .responsive-block-editor-addons-count-up__source-icon svg": {
      width: generateCSSUnit(iconsize, "px"),
      height: generateCSSUnit(iconsize, "px"),
      fill: icon_color,
    },
    " .responsive-count-item": {
      "background-color": `${hexToRgba(
        itemBackgroundColor || "#ffffff",
        imgopacity || 0
      )}`,
      "border-width": generateCSSUnit(blockBorderWidth, "px"),
      "border-color": blockBorderColor,
      "border-style": blockBorderStyle,
      "border-radius": generateCSSUnit(blockBorderRadius, "px"),
    },
    " .responsive-block-editor-addons-count-up__source-wrap": {
      "margin-bottom": generateCSSUnit(iconSpacing, "px"),
    },
    " .responsive-count-item__title": {
      color: titleColor,
      "line-height": headingLineHeight,
      "font-size": generateCSSUnit(headingFontSize, "px"),
	    "font-weight": titleFontWeight !== "empty" && headingFontWeight === "900" ? titleFontWeight : headingFontWeight, //For compatibility with v1.3.2
      "font-family": headingFontFamily,
      "margin-bottom": generateCSSUnit(titleSpace, "px"),
    },
    ".responsive-count__inner .responsive-count-item__price-wrapper .responsive-count-item__amount": {
      color: numColor,
      "line-height": dateLineHeight,
      "font-weight": dateFontWeight,
      "font-size": generateCSSUnit(dateFontSize, "px"),
      "font-family": dateFontFamily,
      "margin-bottom": generateCSSUnit(numSpace, "px"),
    },
    " .responsive-count-item__features": {
      color: textColor,
      "line-height": contentLineHeight,
      "font-weight": contentFontWeight,
      "font-size": `${contentFontSize}px`,
      "font-family": contentFontFamily,
      "margin-bottom": `${contentSpace}px`,
    },
  };

  var mobile_selectors = {
    ".responsive-count__inner .responsive-count-item__title": {
      "font-size": `${headingFontSizeMobile}px`,
    },
    ".responsive-count__inner .responsive-count-item__price-wrapper .responsive-count-item__amount": {
      "font-size": `${generateCSSUnit(dateFontSizeMobile, "px")} !important`,
	  "margin-bottom": generateCSSUnit(numSpaceMobile, "px"),
    },
    " .responsive-count-item__features": {
      "font-size": `${generateCSSUnit(contentFontSizeMobile, "px")} !important`,
	  "margin-bottom": `${contentSpaceMobile}px`,
    },
	" .responsive-block-editor-addons-count-up__source-wrap": {
		"margin-bottom": generateCSSUnit(iconSpacingMobile, "px"),
	},
	" .responsive-count-item__title": {
		"margin-bottom": generateCSSUnit(titleSpaceMobile, "px"),
	}
  };

  var tablet_selectors = {
    ".responsive-count__inner .responsive-count-item__title": {
      "font-size": `${headingFontSizeTablet}px`,
    },
    ".responsive-count__inner .responsive-count-item__price-wrapper .responsive-count-item__amount": {
      "font-size": generateCSSUnit(dateFontSizeTablet, "px"),
	  "margin-bottom": generateCSSUnit(numSpaceTablet, "px"),
    },
    " .responsive-count-item__features": {
      "font-size": generateCSSUnit(contentFontSizeTablet, "px"),
	  "margin-bottom": `${contentSpaceTablet}px`,
    },
	" .responsive-block-editor-addons-count-up__source-wrap": {
		"margin-bottom": generateCSSUnit(iconSpacingTablet, "px"),
	},
	" .responsive-count-item__title": {
		"margin-bottom": generateCSSUnit(titleSpaceTablet, "px"),
	}
  };

  var paddingContent = {
    ".responsive-count": {
      "padding": `${contentSpacing}px !important`,
    },
  };

  var paddingContentMobile = {
	".responsive-count": {
		"padding": `${contentSpacingMobile}px !important`,
	},
  };

  var paddingContentTablet = {
	".responsive-count": {
		"padding": `${contentSpacingTablet}px !important`,
	},
  };
  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-count-up.block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");
  styling_css += generateCSS(paddingContent, "");
  styling_css += generateCSS(paddingContentTablet, "", true, "tablet");
  styling_css += generateCSS(paddingContentMobile, "", true, "mobile");

  return styling_css;
}

export default EditorStyles;
