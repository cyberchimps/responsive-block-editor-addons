/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";

function EditorStyles(props) {
  const { 
    block_id, 
    columns, 
    imagesGap,
    borderRadius,
    instaTopPadding,
    instaBottomPadding,
    instaRightPadding,
    instaLeftPadding,
    instaTopPaddingMobile,
    instaBottomPaddingMobile,
    instaRightPaddingMobile,
    instaLeftPaddingMobile,
    instaTopPaddingTablet,
    instaBottomPaddingTablet,
    instaRightPaddingTablet,
    instaLeftPaddingTablet,
    instaTopMargin,
    instaBottomMargin,
    instaRightMargin,
    instaLeftMargin,
    instaTopMarginMobile,
    instaBottomMarginMobile,
    instaRightMarginMobile,
    instaLeftMarginMobile,
    instaTopMarginTablet,
    instaBottomMarginTablet,
    instaRightMarginTablet,
    instaLeftMarginTablet, 
    gridSize,
    columnsMobile,
    columnsTablet,
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
  } = props.attributes;

  var selectors = {
    " ": {
      "opacity": hideWidget? 0.2 : 1,
      "padding-top": generateCSSUnit(instaTopPadding, "px"),
      "padding-bottom": generateCSSUnit(instaBottomPadding, "px"),
      "padding-left": generateCSSUnit(instaLeftPadding, "px"),
      "padding-right": generateCSSUnit(instaRightPadding, "px"),
      "margin-top": generateCSSUnit(instaTopMargin, "px"),
      "margin-bottom": generateCSSUnit(instaBottomMargin, "px"),
      "margin-left": generateCSSUnit(instaLeftMargin, "px"),
      "margin-right": generateCSSUnit(instaRightMargin, "px"),
    },
    " .responsive-block-editor-addons-instagram-wrapper": {
      "width": generateCSSUnit(100, "%"),
    },
    " .responsive-block-editor-addons-intro-page": {
      border: "1px solid black",
      padding: "0 20px",
    },
    " .responsive-block-editor-addons-intro-page p > a": {
      color: "blue",
    },
    " .responsive-block-editor-addons-instagram-posts-container": {
      "grid-template-columns": `repeat(${columns}, 1fr)`,
      "grid-gap": generateCSSUnit(imagesGap, "px"),
    },
    " .responsive-block-editor-addons-instagram-image": {
      "border-radius": generateCSSUnit(borderRadius, "%"),
    },
  };

  var mobile_selectors = {
    " ": {
      "opacity": hideWidgetMobile? 0.2 : 1,
      "padding-top": generateCSSUnit(instaTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(instaBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(instaLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(instaRightPaddingMobile, "px"),
      "margin-top": generateCSSUnit(instaTopMarginMobile, "px"),
      "margin-bottom": generateCSSUnit(instaBottomMarginMobile, "px"),
      "margin-left": generateCSSUnit(instaLeftMarginMobile, "px"),
      "margin-right": generateCSSUnit(instaRightMarginMobile, "px"),
    },
    " .responsive-block-editor-addons-instagram-posts-container": {
      "grid-template-columns": `repeat(${columnsMobile}, 1fr)`,
    },
  };

  var tablet_selectors = {
    " ": {
      "opacity": hideWidgetTablet? 0.2 : 1,
      "padding-top": generateCSSUnit(instaTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(instaBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(instaLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(instaRightPaddingTablet, "px"),
      "margin-top": generateCSSUnit(instaTopMarginTablet, "px"),
      "margin-bottom": generateCSSUnit(instaBottomMarginTablet, "px"),
      "margin-left": generateCSSUnit(instaLeftMarginTablet, "px"),
      "margin-right": generateCSSUnit(instaRightMarginTablet, "px"),
    },
    " .responsive-block-editor-addons-instagram-posts-container": {
      "grid-template-columns": `repeat(${columnsTablet}, 1fr)`,
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-instagram.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
