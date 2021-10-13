import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";

function EditorStyles(props) {
  const { 
    block_id,
    blockOpacity,
    zIndex, 
    containerWidth,
    containerWidthTablet,
    containerWidthMobile,
    containerTopPadding,
    containerBottomPadding,
    containerLeftPadding,
    containerRightPadding,
    containerTopPaddingTablet,
    containerBottomPaddingTablet,
    containerLeftPaddingTablet,
    containerRightPaddingTablet,
    containerTopPaddingMobile,
    containerBottomPaddingMobile,
    containerLeftPaddingMobile,
    containerRightPaddingMobile,
    containerTopMargin,
    containerBottomMargin,
    containerLeftMargin,
    containerRightMargin,
    containerTopMarginTablet,
    containerBottomMarginTablet,
    containerLeftMarginTablet,
    containerRightMarginTablet,
    containerTopMarginMobile,
    containerBottomMarginMobile,
    containerLeftMarginMobile,
    containerRightMarginMobile,
    contentAlign,
  } = props.attributes;

  let blockOpacityModified = blockOpacity/100

  var selectors = {
    " ": {
      'opacity': blockOpacityModified,
      'z-index': zIndex,
      'max-width': generateCSSUnit(containerWidth, "px"),
      "margin-top": generateCSSUnit(containerTopMargin, "px"), 
		  "margin-bottom": generateCSSUnit(containerBottomMargin, "px"), 
		  "margin-right": generateCSSUnit(containerRightMargin, "px"), 
		  "margin-left": generateCSSUnit(containerLeftMargin, "px"), 
		  "padding-top": generateCSSUnit(containerTopPadding, "px"), 
		  "padding-right": generateCSSUnit(containerRightPadding, "px"), 
		  "padding-bottom": generateCSSUnit(containerBottomPadding, "px"), 
		  "padding-left": generateCSSUnit(containerLeftPadding, "px"), 
      "text-align": contentAlign,
    }
  };

  var mobile_selectors = {
    " ": {
      'max-width': generateCSSUnit(containerWidthMobile, "px"),
      "margin-top": generateCSSUnit(containerTopMarginMobile, "px"), 
		  "margin-bottom": generateCSSUnit(containerBottomMarginMobile, "px"), 
		  "margin-right": generateCSSUnit(containerRightMarginMobile, "px"), 
		  "margin-left": generateCSSUnit(containerLeftMarginMobile, "px"), 
		  "padding-top": generateCSSUnit(containerTopPaddingMobile, "px"), 
		  "padding-right": generateCSSUnit(containerRightPaddingMobile, "px"), 
		  "padding-bottom": generateCSSUnit(containerBottomPaddingMobile, "px"), 
		  "padding-left": generateCSSUnit(containerLeftPaddingMobile, "px"), 
    }
  };

  var tablet_selectors = {
    " ": {
      'max-width': generateCSSUnit(containerWidthTablet, "px"),
      "margin-top": generateCSSUnit(containerTopMarginTablet, "px"), 
		  "margin-bottom": generateCSSUnit(containerBottomMarginTablet, "px"), 
		  "margin-right": generateCSSUnit(containerRightMarginTablet, "px"), 
		  "margin-left": generateCSSUnit(containerLeftMarginTablet, "px"), 
		  "padding-top": generateCSSUnit(containerTopPaddingTablet, "px"), 
		  "padding-right": generateCSSUnit(containerRightPaddingTablet, "px"), 
		  "padding-bottom": generateCSSUnit(containerBottomPaddingTablet, "px"), 
		  "padding-left": generateCSSUnit(containerLeftPaddingTablet, "px"), 
    }
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-advanced-text.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
