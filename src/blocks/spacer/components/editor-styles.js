/**
 * Returns Dynamic Generated CSS
 */
import generateCSS from "../../../generateCSS";
import { hexToRgba } from "../../../utils";

function EditorStyles(props) {
  const {
    block_id,
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
  } = props.attributes;

  var selectors = {
    " ": {
      "background-color": hideWidget? `${hexToRgba("#aaa",0.2)}` : "transparent",
    },
  };

  var mobile_selectors = {
    " ": {
      "background-color": hideWidgetMobile? `${hexToRgba("#aaa",0.2)}` : "transparent",
    },
  };

  var tablet_selectors = {
    " ": {
      "background-color": hideWidgetTablet? `${hexToRgba("#aaa",0.2)}` : "transparent",
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-spacer.block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
