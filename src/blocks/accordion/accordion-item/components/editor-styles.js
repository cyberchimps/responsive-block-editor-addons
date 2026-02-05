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
    blockBorderStyle,
    blockBorderWidth,
    blockBorderRadius,
    blockBorderColor,
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
    hoverboxShadowColor,
    hoverboxShadowHOffset,
    hoverboxShadowVOffset,
    hoverboxShadowBlur,
    hoverboxShadowSpread,
    hoverboxShadowPosition,
    titlePadding,
    titlePaddingMobile,
    titlePaddingTablet,
    contentPadding,
    contentPaddingMobile,
    contentPaddingTablet,
    borderColor,//For compatibility with v1.3.2
    borderStyle,//For compatibility with v1.3.2
    borderWidth,//For compatibility with v1.3.2
    borderRadius,//For compatibility with v1.3.2
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
  } = props.attributes;

  var selectors = {};
  var tablet_selectors = {};
  var mobile_selectors = {};

  const isOn = responsive_globals?.is_responsive_conditions_on ?? 1;

  var boxShadowPositionCSS = boxShadowPosition;
  var hoverboxShadowPositionCSS = hoverboxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }
  if ("outset" === hoverboxShadowPosition) {
    hoverboxShadowPositionCSS = "";
  }
  selectors = {
    " ": {
      "opacity": hideWidget && isOn ? 0.2 : 1,
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
      "overflow": "hidden",
    },
    ":hover": {
      "box-shadow": hoverboxShadowColor !== '' ?
        hoverboxShadowPositionCSS +
        " " +
        generateCSSUnit(hoverboxShadowHOffset, "px") +
        " " +
        generateCSSUnit(hoverboxShadowVOffset, "px") +
        " " +
        generateCSSUnit(hoverboxShadowBlur, "px") +
        " " +
        generateCSSUnit(hoverboxShadowSpread, "px") +
        " " +
        hoverboxShadowColor : '',
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
    " .responsive-block-editor-addons-accordion-titles-button.responsive-block-editor-addons-accordion-titles:hover": {
      "box-shadow": hoverboxShadowColor !== '' ?
        ( hoverboxShadowPositionCSS == "inset"
          ? hoverboxShadowPositionCSS +
            " " +
            generateCSSUnit(hoverboxShadowHOffset, "px") +
            " " +
            generateCSSUnit(hoverboxShadowVOffset, "px") +
            " " +
            generateCSSUnit(hoverboxShadowBlur, "px") +
            " " +
            generateCSSUnit(hoverboxShadowSpread, "px") +
            " " +
            hoverboxShadowColor
          : "" ) : '',
    },
    " .responsive-block-editor-addons-accordion-content span": {
      margin: "0",
    },
  };

  tablet_selectors = {
    " ": {
      "opacity": hideWidgetTablet && isOn ? 0.2 : 1,
    },
    " .responsive-block-editor-addons-accordion-titles-button.responsive-block-editor-addons-accordion-titles": {
      padding: generateCSSUnit(titlePaddingTablet, "px"),
    },
  };

  mobile_selectors = {
    " ": {
      "opacity": hideWidgetMobile && isOn ? 0.2 : 1,
    },
    " .responsive-block-editor-addons-accordion-titles-button.responsive-block-editor-addons-accordion-titles": {
      padding: generateCSSUnit(titlePaddingMobile, "px"),
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-accordion-item__outer-wrap.responsive-block-editor-addons-block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);

  styling_css += generateCSS(tablet_selectors, id, true, "tablet");

  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
