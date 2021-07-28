/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";

function EditorStyles(props) {
  const {
    align,
    gap,
    inner_gap,
    size,
    border,
    bgSize,
    borderRadius,
    fontSizeType,
    block_id,
    labelFontFamily,
    labelFontWeight,
    labelFontSize,
    labelLineHeight,
    labelFontSizeTablet,
    labelFontSizeMobile,
    hideLabel,
  } = props.attributes;

  var editor_gap = undefined !== typeof gap && "" !== gap ? gap + 0 : 0;

  var alignment =
    align == "left" ? "flex-start" : align == "right" ? "flex-end" : "center";

  var selectors = {
    " .responsive-block-editor-addons-icon-list__source-icon svg": {
      width: generateCSSUnit(size, fontSizeType),
      height: generateCSSUnit(size, fontSizeType),
    },
    ".responsive-block-editor-addons-icon-list__layout-horizontal .wp-block-responsive-block-editor-addons-icons-list-child": {
      "margin-left": `${generateCSSUnit(editor_gap / 2, fontSizeType)}!important`,
      "margin-right": `${generateCSSUnit(editor_gap / 2, fontSizeType)}!important`,
    },
    ".responsive-block-editor-addons-icon-list__layout-vertical .responsive-block-editor-addons-icon-list__content-wrap": {
      "margin-bottom": generateCSSUnit(editor_gap, fontSizeType),
    },
    " .responsive-block-editor-addons-icon-list__source-wrap": {
      padding: generateCSSUnit(bgSize, "px"),
      "border-radius": generateCSSUnit(borderRadius, "px"),
      "border-width": generateCSSUnit(border, "px"),
      "margin-right": hideLabel ? '0px' : generateCSSUnit(inner_gap, "px"),
    },
    " .responsive-block-editor-addons-icon-list__source-icon": {
      width: generateCSSUnit(size, fontSizeType),
      height: generateCSSUnit(size, fontSizeType),
      "font-size": generateCSSUnit(size, fontSizeType),
    },
    " .responsive-block-editor-addons-icon-list__source-image": {
      width: generateCSSUnit(size, fontSizeType),
      height: generateCSSUnit(size, fontSizeType),
    },
    " .responsive-block-editor-addons-icon-list__label-wrap": {
      "text-align": align,
    },
    " .responsive-block-editor-addons-icon-list__wrap .block-editor-inner-blocks": {
      "text-align": align,
    },
    ".responsive-block-editor-addons-icon-list__layout-horizontal .block-editor-block-list__layout ": {
      "justify-content": alignment,
      "-webkit-box-pack": alignment,
      "-ms-flex-pack": alignment,
    },
    ".responsive-block-editor-addons-icon-list__layout-horizontal .wp-block[data-type='responsive-block-editor-addons/icons-list-child']:first-child .wp-block-responsive-block-editor-addons-icons-list-child": {
      "margin-left": "0",
    },
    ".responsive-block-editor-addons-icon-list__layout-horizontal .wp-block[data-type='responsive-block-editor-addons/icons-list-child']:last-child .wp-block-responsive-block-editor-addons-icons-list-child": {
      "margin-right": "0",
    },
    " .responsive-block-editor-addons-icon-list__label": {
      "font-family": labelFontFamily,
      "font-size": generateCSSUnit(labelFontSize, "px"),
      "font-weight": labelFontWeight,
      "line-height": labelLineHeight,
    },
  };

  var mobile_selectors = {
    " .responsive-block-editor-addons-icon-list__label": {
      "font-size": generateCSSUnit(labelFontSizeMobile, "px"),
    },
  };

  var tablet_selectors = {
    " .responsive-block-editor-addons-icon-list__label": {
      "font-size": generateCSSUnit(labelFontSizeTablet, "px"),
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-icon-list__outer-wrap.responsive-block-editor-addons-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
