/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";

function EditorStyles(props) {
  const { block_id, address, zoom, height, pinned } = props.attributes;

  var selectors = {
    " .responsive-block-editor-addons-block-map-frame": {
      width: "100%",
      "min-height": height ? generateCSSUnit(height, "px") : `${400}px`,
    },
  };

  var mobile_selectors = {};

  var tablet_selectors = {};

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
