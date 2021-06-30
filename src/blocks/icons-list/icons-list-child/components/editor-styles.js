/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../../generateCSS";
import generateCSSUnit from "../../../../generateCSSUnit";

function EditorStyles(props) {
  const {
    icon_color,
    label_color,
    icon_hover_color,
    label_hover_color,
    icon_bg_color,
    icon_bg_hover_color,
    icon_border_color,
    icon_border_hover_color,
    block_id,
  } = props.attributes;

  var selectors = {
    " .responsive-block-editor-addons-icon-list__content-wrap .responsive-block-editor-addons-icon-list__source-icon": {
      color: icon_color,
    },
    ":hover .responsive-block-editor-addons-icon-list__content-wrap .responsive-block-editor-addons-icon-list__source-icon": {
      color: icon_hover_color,
    },
    " .responsive-block-editor-addons-icon-list__content-wrap .responsive-block-editor-addons-icon-list__source-wrap": {
      "background-color": icon_bg_color,
      "border-color": icon_border_color,
    },
    ":hover .responsive-block-editor-addons-icon-list__content-wrap .responsive-block-editor-addons-icon-list__source-wrap": {
      "background-color": icon_bg_hover_color,
      "border-color": icon_border_hover_color,
    },
    " .responsive-block-editor-addons-icon-list__content-wrap .responsive-block-editor-addons-icon-list__source-icon svg": {
      fill: icon_color,
    },
    ":hover .responsive-block-editor-addons-icon-list__content-wrap .responsive-block-editor-addons-icon-list__source-icon svg": {
      fill: icon_hover_color,
    },
    " .responsive-block-editor-addons-icon-list__content-wrap .responsive-block-editor-addons-icon-list__label": {
      color: label_color,
    },
    ":hover .responsive-block-editor-addons-icon-list__content-wrap .responsive-block-editor-addons-icon-list__label": {
      color: label_hover_color,
    },
  };

  var mobile_selectors = {};

  var tablet_selectors = {};

  var styling_css = "";
  var id = `.responsive-block-editor-addons-icon-list-repeater.responsive-block-editor-addons-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
