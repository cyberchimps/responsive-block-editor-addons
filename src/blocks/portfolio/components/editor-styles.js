/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";

function EditorStyles(props) {
  const {
    block_id,
    rowGap,
    columnGap,
    blockBorderWidth,
    blockBorderColor,
    blockBorderStyle,
    blockBorderRadius,
    overlayBackgroundColor,
    overlayTextColor,
    overlayOpacity,
    overlayTextLineHeight,
    overlayTextFontFamily,
    overlayTextFontWeight,
    overlayTextTextTransform,
    overlayTextFontSize,
    overlayTextAlign,
    overlayTextVerticalAlign,
    horizontalSpacing,
    verticalSpacing,
    itemRatio,
    contentPadding,
    contentPaddingMobile,
    mobileContentPadding, 
    contentPaddingTablet,
    layout,
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


  var varContentPadding = "0";
  var varMobileContentPadding = "0";
  if ("boxed" === layout && (contentPadding || contentPaddingMobile || mobileContentPadding)) { 
    varContentPadding = contentPadding;
    varMobileContentPadding = mobileContentPadding !== 999 && contentPaddingMobile === 10 ? mobileContentPadding : contentPaddingMobile; //For compatibility with v1.3.2
  }
  var varTabletContentPadding = "0";
  if ("boxed" === layout && (contentPadding || contentPaddingTablet)) {
    varContentPadding = contentPadding;
    varTabletContentPadding = contentPaddingTablet;
  }


  var varcolumnGap;
  if (columnGap) {
    varcolumnGap = columnGap;
  }
  var varrowGap;
  if (rowGap) {
    varrowGap = rowGap;
  }

  let opacity = overlayOpacity / 100;

  var selectors = {
    "": {
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
    " .responsive-block-editor-addons-portfolio-items": {
        "grid-column-gap": generateCSSUnit(varcolumnGap, "px"),
        "grid-row-gap": generateCSSUnit(varrowGap, "px"),
    },
    " .is-list article": {
      "margin-bottom": generateCSSUnit(varrowGap, "px"),
    },
    " article": {
      "border-radius": generateCSSUnit(blockBorderRadius, "px"),
    },
    " .responsive-block-editor-addons-portfolio-items a": {
      "padding-bottom": "calc( "+itemRatio+" * 100% )",
  },
    " .responsive-block-editor-addons-block-portfolio-image": {
      "border-style": blockBorderStyle,
      "border-color": blockBorderColor,
      "border-width": generateCSSUnit(blockBorderWidth, "px"),
      "border-radius": generateCSSUnit(blockBorderRadius, "px"),
    },
    " .responsive-block-editor-addons-block-portfolio-image-overlay": {
      "text-align": overlayTextAlign,
      "justify-content": overlayTextVerticalAlign,
      "background-color": overlayBackgroundColor,
      "border-style": blockBorderStyle,
      "border-color": blockBorderColor,
      "border-width": generateCSSUnit(blockBorderWidth, "px"),
      "border-radius": generateCSSUnit(blockBorderRadius, "px"),
    },
    " .responsive-block-editor-addons-block-portfolio-image-overlay *": {
      "color": overlayTextColor,
      "line-height": overlayTextLineHeight,
      "font-family": overlayTextFontFamily,
      "font-size": generateCSSUnit(overlayTextFontSize, "px"),
      "font-weight": overlayTextFontWeight,
      "text-transform": overlayTextTextTransform,
      "margin-left": generateCSSUnit(horizontalSpacing, "px"),
      "margin-right": generateCSSUnit(horizontalSpacing, "px"),
      "margin-top": generateCSSUnit(verticalSpacing, "px"),
      "margin-bottom": generateCSSUnit(verticalSpacing, "px"),
    },
    " .responsive-block-editor-addons-block-portfolio-image-overlay:hover": {
      "opacity": opacity,
    },
    " .is-list article:last-child": {
      "margin-bottom": 0,
    },
    " .responsive-block-editor-addons-portfolio-items article": {
      padding: generateCSSUnit(varContentPadding, "px"),
    },
  };

  var mobile_selectors = {
    "": {
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
  };

  var tablet_selectors = {
    "": {
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
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-portfolio.block-id-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
