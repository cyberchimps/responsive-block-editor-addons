/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";

function EditorStyles(props) {
  const {
    block_id,
    pricingList,
    priceColor,
    descColor,
    titleColor,
    titleFontFamily,
    titleFontSize,
    titleFontWeight,
    titleLineHeight,
    descriptionFontFamily,
    descriptionFontSize,
    descriptionFontWeight,
    descriptionLineHeight,
    priceFontFamily,
    priceFontSize,
    priceFontWeight,
    priceLineHeight,
    titleSpace,
    titleSpaceMobile,
    titleSpaceTablet,
    columns,
    rowGap,
    rowGapMobile,
    rowGapTablet,
    columnGap,
    columnGapMobile,
    columnGapTablet,
    contentAlign,
    blockTopPadding,
    blockBottomPadding,
    blockLeftPadding,
    blockRightPadding,
    blockTopPaddingMobile,
    blockBottomPaddingMobile,
    blockLeftPaddingMobile,
    blockRightPaddingMobile,
    blockTopPaddingTablet,
    blockBottomPaddingTablet,
    blockLeftPaddingTablet,
    blockRightPaddingTablet,
    seperatorStyle,
    seperatorWidth,
    seperatorThickness,
    seperatorColor,
    imagePosition,
    imageSize,
    imageWidth,
	titleFontSizeMobile,
	titleFontSizeTablet,
	descriptionFontSizeMobile,
	descriptionFontSizeTablet,
	priceFontSizeMobile,
	priceFontSizeTablet,
	topPadding, // For compatibility with v1.3.2.
	bottomPadding, // For compatibility with v1.3.2.
	leftPadding, // For compatibility with v1.3.2.
	rightPadding, // For compatibility with v1.3.2.
  hideWidget,
  hideWidgetTablet,
  hideWidgetMobile,
  } = props.attributes;

  var align = contentAlign;
  if ("left" === align) {
    align = "flex-start";
  } else if ("right" === align) {
    align = "flex-end";
  }

  var selectors = {
    " ": {
      "opacity": hideWidget? 0.2 : 1,
    },
    " .responsive-block-editior-addons-pricing-list-item-wrap": {
      "margin-bottom": generateCSSUnit(rowGap, "px"),
      "padding-left": generateCSSUnit(columnGap / 2, "px"),
      "padding-right": generateCSSUnit(columnGap / 2, "px"),
    },
    " .responsive-block-editior-addons-pricing-list-item-wrap .responsive-block-editior-addons-pricing-list-item-content": {
      "padding-top": topPadding !== 999 && blockTopPadding === 5 ? generateCSSUnit(topPadding, "px") : generateCSSUnit(blockTopPadding, "px"), // For compatibility with v1.3.2.
      "padding-bottom": bottomPadding !== 999 && blockBottomPadding === 5 ? generateCSSUnit(bottomPadding, "px") : generateCSSUnit(blockBottomPadding, "px"), // For compatibility with v1.3.2.
      "padding-left": leftPadding !== 999 && blockLeftPadding === 5 ? generateCSSUnit(leftPadding, "px") : generateCSSUnit(blockLeftPadding, "px"), // For compatibility with v1.3.2.
      "padding-right": rightPadding !== 999 && blockRightPadding === 5 ? generateCSSUnit(rightPadding, "px") : generateCSSUnit(blockRightPadding, "px"), // For compatibility with v1.3.2.
      "text-align": contentAlign,
    },
    " .responsive-block-editior-addons-pricing-list-item-image-wrap .responsive-block-editior-addons-pricing-list-item-image": {
      height: "auto",
      width: generateCSSUnit(imageWidth, "px"),
      "max-width": generateCSSUnit(imageWidth, "px"),
    },
    " .responsive-block-editior-addons-pricing-list-item-title": {
      color: titleColor,
      "line-height": titleLineHeight,
      "font-weight": titleFontWeight,
      "font-size": generateCSSUnit(titleFontSize, "px"),
      "font-family": titleFontFamily,
      "margin-bottom": generateCSSUnit(titleSpace, "px"),
    },
    " .responsive-block-editior-addons-pricing-list-item-description": {
      color: descColor,
      "line-height": descriptionLineHeight,
      "font-weight": descriptionFontWeight,
      "font-size": generateCSSUnit(descriptionFontSize, "px"),
      "font-family": descriptionFontFamily,
    },
    " .responsive-block-editior-addons-pricing-list-item-price-wrap": {
      color: priceColor,
      "line-height": priceLineHeight,
      "font-weight": priceFontWeight,
      "font-size": generateCSSUnit(priceFontSize, "px"),
      "font-family": priceFontFamily,
    },
    " .responsive-block-editior-addons-pricing-list-item-image-wrap responsive-block-editior-addons-pricing-list-item-image": {
      height: "auto",
      width: generateCSSUnit(imageWidth, "px"),
      "max-width": generateCSSUnit(imageWidth, "px"),
    },
    " .responsive-block-editior-addons-pricing-list-item-separator-wrap": {
      "justify-content": align,
    },
    " .responsive-block-editior-addons-pricing-list-item-separator": {
      "border-top-color": seperatorColor,
      "border-top-style": seperatorStyle,
      "border-top-width": generateCSSUnit(seperatorThickness, "px"),
      width: seperatorWidth + "%",
    },
  };

  var mobile_selectors = {
    " ": {
      "opacity": hideWidgetMobile? 0.2 : 1,
    },
    " .responsive-block-editior-addons-pricing-list-item-wrap": {
      "margin-bottom": generateCSSUnit(rowGapMobile, "px"),
      "padding-left": generateCSSUnit(columnGapMobile / 2, "px"),
      "padding-right": generateCSSUnit(columnGapMobile / 2, "px"),
    },
    " .responsive-block-editior-addons-pricing-list-item-wrap .responsive-block-editior-addons-pricing-list-item-content": {
      "padding-top": generateCSSUnit(blockTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(blockLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingMobile, "px"),
    },
    " .responsive-block-editior-addons-pricing-list-item-title": {
		"font-size": generateCSSUnit(titleFontSizeMobile, "px"),
		"margin-bottom": generateCSSUnit(titleSpaceMobile, "px"),
	},
	" .responsive-block-editior-addons-pricing-list-item-description": {
		"font-size": generateCSSUnit(descriptionFontSizeMobile, "px"),
	},
	" .responsive-block-editior-addons-pricing-list-item-price-wrap": {
		"font-size": generateCSSUnit(priceFontSizeMobile, "px"),
	}
  };

  var tablet_selectors = {
    " ": {
      "opacity": hideWidgetTablet? 0.2 : 1,
    },
    " .responsive-block-editior-addons-pricing-list-item-wrap": {
      "margin-bottom": generateCSSUnit(rowGapTablet, "px"),
      "padding-left": generateCSSUnit(columnGapTablet / 2, "px"),
      "padding-right": generateCSSUnit(columnGapTablet / 2, "px"),
    },
    " .responsive-block-editior-addons-pricing-list-item-wrap .responsive-block-editior-addons-pricing-list-item-content": {
      "padding-top": generateCSSUnit(blockTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(blockLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingTablet, "px"),
    },
    " .responsive-block-editior-addons-pricing-list-item-title": {
		"font-size": generateCSSUnit(titleFontSizeTablet, "px"),
		"margin-bottom": generateCSSUnit(titleSpaceTablet, "px"),
	},
	" .responsive-block-editior-addons-pricing-list-item-description": {
		"font-size": generateCSSUnit(descriptionFontSizeTablet, "px"),
	},
	" .responsive-block-editior-addons-pricing-list-item-price-wrap": {
		"font-size": generateCSSUnit(priceFontSizeTablet, "px"),
	}
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-pricing-list.block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
