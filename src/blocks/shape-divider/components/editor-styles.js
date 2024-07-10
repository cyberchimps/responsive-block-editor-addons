/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";
import generateBackgroundImageEffect from "../../../generateBackgroundImageEffect";

function EditorStyles(props) {
  const {
    color,
  } = props;
  const {
    block_id,
    backgroundColor,
    backgroundColor1,
    backgroundColor2,
    colorLocation1,
    colorLocation2,
    gradientDirection,
    backgroundType,
    align,
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
    blockTopMargin,
		blockBottomMargin,
		blockLeftMargin,
		blockRightMargin,
		blockTopMarginTablet,
		blockBottomMarginTablet,
		blockLeftMarginTablet,
		blockRightMarginTablet,
		blockTopMarginMobile,
		blockBottomMarginMobile,
		blockLeftMarginMobile,
		blockRightMarginMobile,
		blockTopPadding,
		blockTopPaddingMobile,
		blockTopPaddingTablet,
		blockBottomPadding,
		blockBottomPaddingMobile,
		blockBottomPaddingTablet,
		blockLeftPadding,
		blockLeftPaddingMobile,
		blockLeftPaddingTablet,
		blockRightPadding,
		blockRightPaddingMobile,
		blockRightPaddingTablet,
  } = props.attributes;

  var selectors = {
    "": {
		  "opacity": hideWidget? 0.2 : 1,
      color: props.color.color,
      "background-color": backgroundType == "color" ? backgroundColor : null,
      "background-image":
        backgroundType == "gradient"
          ? generateBackgroundImageEffect(
              backgroundColor1,
              backgroundColor2,
              gradientDirection,
              colorLocation1,
              colorLocation2
            )
          : undefined,
      'padding-top': generateCSSUnit(blockTopPadding, "px"),
      'padding-right': generateCSSUnit(blockRightPadding, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPadding, "px"),
      'padding-left': generateCSSUnit(blockLeftPadding, "px"),
      'margin-top': generateCSSUnit(blockTopMargin, "px"),
      'margin-right': generateCSSUnit(blockRightMargin, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMargin, "px"),
      'margin-left': generateCSSUnit(blockLeftMargin, "px"),
    },
    " .wp-block-responsive-block-editor-addons-shape-divider__svg-wrapper svg": {
      fill: color.color
    }
  };

  var mobile_selectors = {
		"": {
		  "opacity": hideWidgetMobile? 0.2 : 1,
      'padding-top': generateCSSUnit(blockTopPaddingMobile, "px"),
			'padding-right': generateCSSUnit(blockRightPaddingMobile, "px"),
			'padding-bottom': generateCSSUnit(blockBottomPaddingMobile, "px"),
			'padding-left': generateCSSUnit(blockLeftPaddingMobile, "px"),
			'margin-top': generateCSSUnit(blockTopMarginMobile, "px"),
			'margin-right': generateCSSUnit(blockRightMarginMobile, "px"),
			'margin-bottom': generateCSSUnit(blockBottomMarginMobile, "px"),
			'margin-left': generateCSSUnit(blockLeftMarginMobile, "px"),
		},
  };

  var tablet_selectors = {
		"": {
		  "opacity": hideWidgetTablet? 0.2 : 1,
      'padding-top': generateCSSUnit(blockTopPaddingTablet, "px"),
			'padding-right': generateCSSUnit(blockRightPaddingTablet, "px"),
			'padding-bottom': generateCSSUnit(blockBottomPaddingTablet, "px"),
			'padding-left': generateCSSUnit(blockLeftPaddingTablet, "px"),
			'margin-top': generateCSSUnit(blockTopMarginTablet, "px"),
			'margin-right': generateCSSUnit(blockRightMarginTablet, "px"),
			'margin-bottom': generateCSSUnit(blockBottomMarginTablet, "px"),
			'margin-left': generateCSSUnit(blockLeftMarginTablet, "px"),
		},
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-shape-divider.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
