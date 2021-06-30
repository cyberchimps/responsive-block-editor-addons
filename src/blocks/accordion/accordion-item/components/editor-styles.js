/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../../generateCSS";
import generateCSSUnit from "../../../../generateCSSUnit";
import { hexToRgba } from "../../../../utils";

function EditorStyles(props) {
  const {
    title,
    content,
    icon,
    iconActive,
    layout,
    headingTag,
    borderStyle,
    borderWidth,
    borderRadius,
    borderColor,
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
    titlePadding,
    contentPadding,
  } = props.attributes;

  var selectors = {};
  var tablet_selectors = {};
  var mobile_selectors = {};

  var boxShadowPositionCSS = boxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }
  selectors = {
    " ": {
      "box-shadow":
        boxShadowPositionCSS +
        " " +
        generateCSSUnit(boxShadowHOffset, "px") +
        " " +
        generateCSSUnit(boxShadowVOffset, "px") +
        " " +
        generateCSSUnit(boxShadowBlur, "px") +
        " " +
        generateCSSUnit(boxShadowSpread, "px") +
        " " +
        boxShadowColor,
      "border-color": borderColor,
      "border-style": borderStyle,
      "border-width": generateCSSUnit(borderWidth, "px"),
      "border-radius": generateCSSUnit(borderRadius, "px"),
      overflow: "hidden",
    },
    " .responsive-block-editor-addons-accordion-titles-button.responsive-block-editor-addons-accordion-titles": {
      "box-shadow":
        boxShadowPositionCSS == "inset"
          ? boxShadowPositionCSS +
            " " +
            generateCSSUnit(boxShadowHOffset, "px") +
            " " +
            generateCSSUnit(boxShadowVOffset, "px") +
            " " +
            generateCSSUnit(boxShadowBlur, "px") +
            " " +
            generateCSSUnit(boxShadowSpread, "px") +
            " " +
            boxShadowColor
          : "",
      padding: generateCSSUnit(titlePadding, "px"),
    },
    " .responsive-block-editor-addons-accordion-content span": {
      margin: "0",
      padding: generateCSSUnit(contentPadding, "px"),
    },
  };

  tablet_selectors = {};

  mobile_selectors = {};

  var styling_css = "";
  var id = `.responsive-block-editor-addons-accordion-item__outer-wrap.responsive-block-editor-addons-block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);

  styling_css += generateCSS(tablet_selectors, id, true, "tablet");

  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
