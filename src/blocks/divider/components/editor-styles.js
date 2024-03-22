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
      "margin-top": generateCSSUnit(spacerHeight, "px"),
      "margin-bottom": generateCSSUnit(spacerHeight, "px"),
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
      "margin-top": generateCSSUnit(spacerHeightMobile, "px"),
      "margin-bottom": generateCSSUnit(spacerHeightMobile, "px"),
    },
  };

  var tablet_selectors = {
    "": {
      "opacity": hideWidgetTablet ? 0.2 : 1,
    },
    " .responsive-block-editor-addons-divider-inner .responsive-block-editor-addons-divider-content": {
      "margin-top": generateCSSUnit(spacerHeightTablet, "px"),
      "margin-bottom": generateCSSUnit(spacerHeightTablet, "px"),
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
