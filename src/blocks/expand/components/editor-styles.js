/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";

function EditorStyles(props) {
  const {
    block_id,
    expandAlignment,
    linkSpace,
    linkSpaceMobile,
    linkSpaceTablet,
    textSpace,
    textSpaceMobile,
    textSpaceTablet,
    titleSpace,
    titleSpaceMobile,
    titleSpaceTablet,
    titleFontFamily,
    titleFontSize,
    titleFontSizeMobile,
    titleFontSizeTablet,
    titleFontWeight,
    titleLineHeight,
    textFontFamily,
    textFontSize,
    textFontSizeMobile,
    textFontSizeTablet,
    textFontWeight,
    textLineHeight,
    linkFontFamily,
    linkFontSize,
    linkFontSizeMobile,
    linkFontSizeTablet,
    linkFontWeight,
    linkLineHeight,
    textColor,
    linkColor,
    titleColor,
  } = props.attributes;

  var selectors = {
    " .responsive-block-editor-addons-expand-block-content": {
      "text-align": expandAlignment,
    },

    " .responsive-block-editor-addons-expand-title": {
      "margin-bottom": generateCSSUnit(titleSpace, "px"),
      "font-family": titleFontFamily,
      "font-size": generateCSSUnit(titleFontSize, "px"),
      "font-weight": titleFontWeight,
      "line-height": titleLineHeight,
      "color": titleColor,
    },

    " .responsive-block-editor-addons-expand-less-text": {
      "margin-bottom": generateCSSUnit(textSpace, "px"),
      "font-family": textFontFamily,
      "font-size": generateCSSUnit(textFontSize, "px"),
      "font-weight": textFontWeight,
      "line-height": textLineHeight,
      "color": textColor,
    },

    " .responsive-block-editor-addons-expand-more-toggle-text": {
      "margin-bottom": generateCSSUnit(linkSpace, "px"),
      "font-family": linkFontFamily,
      "font-size": generateCSSUnit(linkFontSize, "px"),
      "font-weight": linkFontWeight,
      "line-height": linkLineHeight,
      "color": linkColor,
    },

    " .responsive-block-editor-addons-expand-more-text": {
      "margin-bottom": generateCSSUnit(textSpace, "px"),
      "font-family": textFontFamily,
      "font-size": generateCSSUnit(textFontSize, "px"),
      "font-weight": textFontWeight,
      "line-height": textLineHeight,
      "color": textColor,
    },

    " .responsive-block-editor-addons-expand-less-toggle-text": {
      "margin-bottom": generateCSSUnit(linkSpace, "px"),
      "font-family": linkFontFamily,
      "font-size": generateCSSUnit(linkFontSize, "px"),
      "font-weight": linkFontWeight,
      "line-height": linkLineHeight,
      "color": linkColor,
    },
  };

  var mobile_selectors = {
    " .responsive-block-editor-addons-expand-title": {
      "font-size": generateCSSUnit(titleFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(titleSpaceMobile, "px"),
    },
    " .responsive-block-editor-addons-expand-less-text": {
      "font-size": generateCSSUnit(textFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(textSpaceMobile, "px"),
    },
    " .responsive-block-editor-addons-expand-more-toggle-text": {
      "font-size": generateCSSUnit(linkFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(linkSpaceMobile, "px"),
    },
    " .responsive-block-editor-addons-expand-more-text": {
      "font-size": generateCSSUnit(textFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(textSpaceMobile, "px"),
    },
    " .responsive-block-editor-addons-expand-less-toggle-text": {
      "font-size": generateCSSUnit(linkFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(linkSpaceMobile, "px"),
    },
  };

  var tablet_selectors = {
    " .responsive-block-editor-addons-expand-title": {
      "font-size": generateCSSUnit(titleFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(titleSpaceTablet, "px"),
    },
    " .responsive-block-editor-addons-expand-less-text": {
      "font-size": generateCSSUnit(textFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(textSpaceTablet, "px"),
    },
    " .responsive-block-editor-addons-expand-more-toggle-text": {
      "font-size": generateCSSUnit(linkFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(linkSpaceTablet, "px"),
    },
    " .responsive-block-editor-addons-expand-more-text": {
      "font-size": generateCSSUnit(textFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(textSpaceTablet, "px"),
    },
    " .responsive-block-editor-addons-expand-less-toggle-text": {
      "font-size": generateCSSUnit(linkFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(linkSpaceTablet, "px"),
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-expand.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
