/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";
import { hexToRgba } from "../../../utils/index.js";

function EditorStyles(props) {
  const {
    block_id,
    gutter,
    responsiveHeight,
    blockBorderWidth,
    blockBorderColor,
    blockBorderStyle,
      blockBorderRadius,
    iconColor,
    iconBackgroundRadius,
    iconBackgroundColor,
    iconBackgroundOpacity,
    width,
	borderWidth, // For compatibility with v1.3.2.
	borderStyle, // For compatibility with v1.3.2.
	borderColor, // For compatibility with v1.3.2.
  hideWidget,
  hideWidgetTablet,
  hideWidgetMobile,
  } = props.attributes;

  let imgopacity = iconBackgroundOpacity / 100;

  var selectors = {
    " ": {
      "opacity": hideWidget ? 0.2 : 1,
    },
    " .flickity-button .flickity-button-icon": {
      fill: iconColor,
    },

    " .flickity-button": {
      "background-color": hexToRgba(
        iconBackgroundColor || "#ffffff",
        imgopacity || 0
      ),
      "border-radius": iconBackgroundRadius + "%",
    },

    " .has-carousel-lrg .responsive-block-editor-addons-gallery--item": {
      width: generateCSSUnit(width, "px"),
    },

    " .responsive-block-editor-addons-gallery--item": {
      "margin-left":
        gutter > 0 && !responsiveHeight ? gutter + "px" : undefined,
      "margin-right":
        gutter > 0 && !responsiveHeight ? gutter + "px" : undefined,
      "border-width": borderWidth !== 999 && blockBorderWidth === "" ? generateCSSUnit(borderWidth, "px") : generateCSSUnit(blockBorderWidth, "px"), // For compatibility with v1.3.2.
      "border-radius": generateCSSUnit(blockBorderRadius, "px"),
      "border-style": borderStyle !== "empty" && blockBorderStyle === "" ? borderStyle : blockBorderStyle, // For compatibility with v1.3.2.
      "border-color": borderColor !== "empty" && blockBorderColor === "" ? borderColor : blockBorderColor, // For compatibility with v1.3.2.
    },
  };

  var mobile_selectors = {
    " ": {
      "opacity": hideWidgetMobile ? 0.2 : 1,
    },
  };

  var tablet_selectors = {
    " ": {
      "opacity": hideWidgetTablet ? 0.2 : 1,
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-image-slider.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
