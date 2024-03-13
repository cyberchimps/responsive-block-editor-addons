/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";

function EditorStyles(props) {
  const { 
    block_id,
    address,
    zoom,
    height,
    heightTablet,
    heightMobile,
    pinned,
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
  } = props.attributes;

  var selectors = {
    " ": {
      "opacity": hideWidget ? 0.2 : 1,
      "max-height": height ? generateCSSUnit(height, "px") : `${400}px`,
    },
      " .responsive-block-editor-addons-block-map-frame": {
      width: "100%",
      "height": height ? generateCSSUnit(height, "px") : `${400}px`,
    },
  };

  var mobile_selectors = {
      " ": {
          "opacity": hideWidgetMobile ? 0.2 : 1,
          "max-height": heightMobile ? generateCSSUnit(heightMobile, "px") : `${400}px`,
      },
      " .responsive-block-editor-addons-block-map-frame": {
          width: "100%",
          "height": heightMobile ? generateCSSUnit(heightMobile, "px") : `${400}px`,
      },
  };

  var tablet_selectors = {
      " ": {
          "opacity": hideWidgetTablet ? 0.2 : 1,
          "max-height": heightTablet ? generateCSSUnit(heightTablet, "px") : `${400}px`,
      },
      " .responsive-block-editor-addons-block-map-frame": {
          width: "100%",
          "height": heightTablet ? generateCSSUnit(heightTablet, "px") : `${400}px`,
      },
  };

  var outerElement = {
    ".responsive-block-editor-addons-block-googlemap-external-element": {
      width: "100%",
      height: height ? generateCSSUnit(height, "px") : `${400}px`,
      position: "absolute",
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-googlemap.block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");
  styling_css += generateCSS(outerElement, "");

  return styling_css;
}

export default EditorStyles;
