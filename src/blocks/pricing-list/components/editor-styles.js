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
    columns,
    rowGap,
    columnGap,
    contentAlign,
    topPadding,
    bottomPadding,
    leftPadding,
    rightPadding,
    seperatorStyle,
    seperatorWidth,
    seperatorThickness,
    seperatorColor,
    imagePosition,
    imageSize,
    imageWidth,
  } = props.attributes;

  var align = contentAlign;
  if ("left" === align) {
    align = "flex-start";
  } else if ("right" === align) {
    align = "flex-end";
  }

  var selectors = {
    " .responsive-block-editior-addons-pricing-list-item-wrap": {
      "margin-bottom": generateCSSUnit(rowGap, "px"),
      "padding-left": generateCSSUnit(columnGap / 2, "px"),
      "padding-right": generateCSSUnit(columnGap / 2, "px"),
    },
    " .responsive-block-editior-addons-pricing-list-item-wrap .responsive-block-editior-addons-pricing-list-item-content": {
      "padding-top": generateCSSUnit(topPadding, "px"),
      "padding-bottom": generateCSSUnit(bottomPadding, "px"),
      "padding-left": generateCSSUnit(leftPadding, "px"),
      "padding-right": generateCSSUnit(rightPadding, "px"),
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

  var mobile_selectors = {};

  var tablet_selectors = {};

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-pricing-list.block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
