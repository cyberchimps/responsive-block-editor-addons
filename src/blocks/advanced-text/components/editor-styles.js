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
    columnDividerHeight,
    columnDividerWidth,
    dividerColor,
    contentPadding,
    contentPaddingTablet,
    contentPaddingMobile,
    titleBottomMargin,
    titleBottomMarginTablet,
    titleBottomMarginMobile,
    subtitleBottomMargin,
    subtitleBottomMarginTablet,
    subtitleBottomMarginMobile,
    textBottomMargin,
    textBottomMarginTablet,
    textBottomMarginMobile,
    subtitleAlign,
    titleAlign,
    textAlign,
    textColor,
    titleColor,
    subtitleColor,
    titleFontFamily,
    titleFontSize,
    titleFontSizeMobile,
    titleFontSizeTablet,
    titleFontWeight,
    titleLineHeight,
    subtitleFontFamily,
    subtitleFontSize,
    subtitleFontSizeMobile,
    subtitleFontSizeTablet,
    subtitleFontWeight,
    subtitleLineHeight,
    textFontFamily,
    textFontSize,
    textFontSizeMobile,
    textFontSizeTablet,
    textFontWeight,
    textLineHeight,
    titleLeftMargin,
    titleLeftMarginTablet,
    titleLeftMarginMobile,
    titleRightMargin,
    titleRightMarginTablet,
    titleRightMarginMobile,
    subtitleLeftMargin,
    subtitleLeftMarginTablet,
    subtitleLeftMarginMobile,
    subtitleRightMargin,
    subtitleRightMarginTablet,
    subtitleRightMarginMobile,
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
    },
    " .responsive-block-editor-addons-text-container": {
      "padding": generateCSSUnit(contentPadding, "px"),
    },
    " .responsive-block-editor-addons-separator": {
      "height": generateCSSUnit(columnDividerHeight, "px"),
      "width": generateCSSUnit(columnDividerWidth, "px"),
      "background-color": dividerColor,
    },
    " .responsive-block-editor-addons-title": {
      "margin-bottom": generateCSSUnit(titleBottomMargin, "px"),
      "margin-left": titleAlign !== 'right' ? generateCSSUnit(titleLeftMargin, "px"):'',
      "margin-right": titleAlign !== 'left' ? generateCSSUnit(titleRightMargin, "px"):'',
      "text-align": titleAlign,
      "color": titleColor,
      "font-family": titleFontFamily,
      "font-size": generateCSSUnit(titleFontSize, "px"),
      "font-weight": titleFontWeight,
      "line-height": titleLineHeight,
    },
    " .responsive-block-editor-addons-subtitle": {
      "margin-bottom": generateCSSUnit(subtitleBottomMargin, "px"),
      "margin-left": subtitleAlign !== 'right'?generateCSSUnit(subtitleLeftMargin, "px"):'',
      "margin-right": subtitleAlign !== 'left'?generateCSSUnit(subtitleRightMargin, "px"):'',
      "text-align": subtitleAlign,
      "color": subtitleColor,
      "font-family": subtitleFontFamily,
      "font-size": generateCSSUnit(subtitleFontSize, "px"),
      "font-weight": subtitleFontWeight,
      "line-height": subtitleLineHeight,
    },
    " .responsive-block-editor-addons-text-content": {
      "margin-bottom": generateCSSUnit(textBottomMargin, "px"),
      "text-align": textAlign,
      "color": textColor,
      "font-family": textFontFamily,
      "font-size": generateCSSUnit(textFontSize, "px"),
      "font-weight": textFontWeight,
      "line-height": textLineHeight,
    },
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
    },
    " .responsive-block-editor-addons-text-container": {
      "padding": generateCSSUnit(contentPaddingMobile, "px"),
    },
    " .responsive-block-editor-addons-title": {
      "margin-bottom": generateCSSUnit(titleBottomMarginMobile, "px"),
      "margin-left": titleAlign !== 'right'?generateCSSUnit(titleLeftMarginMobile, "px"):'',
      "margin-right": titleAlign !== 'left'?generateCSSUnit(titleRightMarginMobile, "px"):'',
      "font-size": generateCSSUnit(titleFontSizeMobile, "px"),
    },
    " .responsive-block-editor-addons-subtitle": {
      "margin-bottom": generateCSSUnit(subtitleBottomMarginMobile, "px"),
      "margin-left": subtitleAlign !== 'right'?generateCSSUnit(subtitleLeftMarginMobile, "px"):'',
      "margin-right": subtitleAlign !== 'left'?generateCSSUnit(subtitleRightMarginMobile, "px"):'',
      "font-size": generateCSSUnit(subtitleFontSizeMobile, "px"),
    },
    " .responsive-block-editor-addons-text-content": {
      "margin-bottom": generateCSSUnit(textBottomMarginMobile, "px"),
      "font-size": generateCSSUnit(textFontSizeMobile, "px"),
    },
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
    },
    " .responsive-block-editor-addons-text-container": {
      "padding": generateCSSUnit(contentPaddingTablet, "px")
    },
    " .responsive-block-editor-addons-title": {
      "margin-bottom": generateCSSUnit(titleBottomMarginTablet, "px"),
      "margin-left": titleAlign !== 'right'?generateCSSUnit(titleLeftMarginTablet, "px"):'',
      "margin-right": titleAlign !== 'left'?generateCSSUnit(titleRightMarginTablet, "px"):'',
      "font-size": generateCSSUnit(titleFontSizeTablet, "px"),
    },
    " .responsive-block-editor-addons-subtitle": {
      "margin-bottom": generateCSSUnit(subtitleBottomMarginTablet, "px"),
      "margin-left": subtitleAlign !== 'right'?generateCSSUnit(subtitleLeftMarginTablet, "px"):'',
      "margin-right": subtitleAlign !== 'left'?generateCSSUnit(subtitleRightMarginTablet, "px"):'',
      "font-size": generateCSSUnit(subtitleFontSizeTablet, "px"),
    },
    " .responsive-block-editor-addons-text-content": {
      "margin-bottom": generateCSSUnit(textBottomMarginTablet, "px"),
      "font-size": generateCSSUnit(textFontSizeTablet, "px"),
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-advanced-text.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
