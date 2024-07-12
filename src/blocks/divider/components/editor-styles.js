/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";

function EditorStyles(props) {
  const {
    block_id,
    spacerHeight,
    spacerHeightMobile,
    spacerHeightTablet,
    spacerDividerColor,
    spacerDividerHeight,
    spacerDividerWidth,
    spacerDividerStyle,
    spacerDividerAlignment,
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
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
    blockTopMargin,
    blockTopMarginMobile,
    blockTopMarginTablet,
    blockBottomMargin,
    blockBottomMarginMobile,
    blockBottomMarginTablet,
    blockLeftMargin,
    blockLeftMarginMobile,
    blockLeftMarginTablet,
    blockRightMargin,
    blockRightMarginMobile,
    blockRightMarginTablet,
  } = props.attributes;

  var selectors = {
    " ": {
      color: spacerDividerColor,
      "opacity": hideWidget ? 0.2 : 1,
    },
    " .responsive-block-editor-addons-spacer-handle": {
      color: spacerDividerColor,
    },
    " .responsive-block-editor-addons-divider-inner .responsive-block-editor-addons-divider-content": {
      "margin-top": generateCSSUnit(blockTopMargin, "px"),
      "margin-right": generateCSSUnit(blockRightMargin, "px"),
      "margin-bottom": generateCSSUnit(blockBottomMargin, "px"),
      "margin-left": generateCSSUnit(blockLeftMargin, "px"),
      "padding-top": generateCSSUnit(blockTopPadding, "px"),
      "padding-right": generateCSSUnit(blockRightPadding, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPadding, "px"),
      "padding-left": generateCSSUnit(blockLeftPadding, "px"),
    },
    " .responsive-block-editor-addons-divider-inner .responsive-block-editor-addons-divider-content .responsive-block-editor-addons-divider_hr": {
      height: generateCSSUnit(spacerDividerHeight, "px"),
      width: spacerDividerWidth + "%",
      "background-color": spacerDividerColor,
      "border-radius":
        spacerDividerStyle === "basic"
          ? 0
          : generateCSSUnit(spacerDividerHeight / 2, "px"),
      "margin-left": spacerDividerAlignment === "left" ? 0 : "auto",
      "margin-right": spacerDividerAlignment === "right" ? 0 : "auto",
    },
    " .responsive-block-editor-addons-divider-inner .responsive-block-editor-addons-divider-content .rgbl-divider__dots": {
      width: spacerDividerWidth + "%",
      "margin-left": spacerDividerAlignment === "left" ? 0 : "auto",
      "margin-right": spacerDividerAlignment === "right" ? 0 : "auto",
    },
    " .responsive-block-editor-addons-divider-inner .responsive-block-editor-addons-divider-content .rgbl-divider__dots .rgbl-divider__dot": {
      height: generateCSSUnit(spacerDividerHeight, "px"),
      "background-color": spacerDividerColor,
      "font-size": generateCSSUnit(spacerDividerHeight * 1.8, "px"),
      width: generateCSSUnit(spacerDividerHeight, "px"),
    },
  };

  var mobile_selectors = {
    "": {
      "opacity": hideWidgetMobile ? 0.2 : 1,
    },
    " .responsive-block-editor-addons-divider-inner .responsive-block-editor-addons-divider-content": {
      "margin-top": generateCSSUnit(blockTopMarginMobile, "px"),
      "margin-right": generateCSSUnit(blockRightMarginMobile, "px"),
      "margin-bottom": generateCSSUnit(blockBottomMarginMobile, "px"),
      "margin-left": generateCSSUnit(blockLeftMarginMobile, "px"),
      "padding-top": generateCSSUnit(blockTopPaddingMobile, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(blockLeftPaddingMobile, "px"),
    },
  };

  var tablet_selectors = {
    "": {
      "opacity": hideWidgetTablet ? 0.2 : 1,
    },
    " .responsive-block-editor-addons-divider-inner .responsive-block-editor-addons-divider-content": {
      "margin-top": generateCSSUnit(blockTopMarginTablet, "px"),
      "margin-right": generateCSSUnit(blockRightMarginTablet, "px"),
      "margin-bottom": generateCSSUnit(blockBottomMarginTablet, "px"),
      "margin-left": generateCSSUnit(blockLeftMarginTablet, "px"),
      "padding-top": generateCSSUnit(blockTopPaddingTablet, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(blockLeftPaddingTablet, "px"),
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-divider.block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
