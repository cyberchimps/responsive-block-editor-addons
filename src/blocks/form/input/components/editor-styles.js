/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../../generateCSS";
import generateCSSUnit from "../../../../generateCSSUnit";

function EditorStyles(props) {
  const {
    formInputWidth,
    formInputLabelColor,
    formInputInline,
    block_id,
  } = props.attributes;

  let inlineList = ''
  if ( formInputInline ) {
    inlineList = {
      "display": "flex",
      "flex-direction": "row",
      "flex-wrap": "wrap",
      "gap": "8px",
    }
  }

  var selectors = {
    "": {
    },
    " .responsive-block-editor-addons-form-input__label": {
      "color": formInputLabelColor,
    },
    " .responsive-block-editor-addons-form-input__input": {
      "width": generateCSSUnit(formInputWidth, "%"),
    },
    " .responsive-block-editor-addons-form-input-checkbox-wrapper": {
      ...inlineList
    },
  };

  var mobile_selectors = {
    "": {
    },
  };

  var tablet_selectors = {
    "": {
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-form-input.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
