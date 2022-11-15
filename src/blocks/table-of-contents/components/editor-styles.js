/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";
import { hexToRgba } from "../../../utils";

function EditorStyles(props) {
  const {
    block_id,
    blockTopPadding,
    blockTopPaddingMobile,
    blockTopPaddingTablet,
    blockBottomPadding,
    blockBottomPaddingTablet,
    blockBottomPaddingMobile,
    blockRightPadding,
    blockRightPaddingMobile,
    blockRightPaddingTablet,
    blockLeftPadding,
    blockLeftPaddingTablet,
    blockLeftPaddingMobile,
    blockTopMargin,
    blockTopMarginMobile,
    blockTopMarginTablet,
    blockBottomMargin,
    blockBottomMarginTablet,
    blockBottomMarginMobile,
    blockRightMargin,
    blockRightMarginMobile,
    blockRightMarginTablet,
    blockLeftMargin,
    blockLeftMarginTablet,
    blockLeftMarginMobile,
    zIndex,
    headingFontFamily,
    headingFontWeight,
    headingFontSize,
    headingFontSizeTablet,
    headingFontSizeMobile,
    headingLineHeight,
    contentFontFamily,
    contentFontWeight,
    contentFontSize,
    contentFontSizeTablet,
    contentFontSizeMobile,
    contentLineHeight,
    align,
    headingColor,
    headingBgColor,
    headingColorHover,
    headingBgColorHover,
    bodyColor,
    bodyBgColor,
    bodyColorHover,
    bodyBgColorHover,
    headingTopPadding,
    headingTopPaddingMobile,
    headingTopPaddingTablet,
    headingBottomPadding,
    headingBottomPaddingTablet,
    headingBottomPaddingMobile,
    headingRightPadding,
    headingRightPaddingMobile,
    headingRightPaddingTablet,
    headingLeftPadding,
    headingLeftPaddingTablet,
    headingLeftPaddingMobile,
    headingTopMargin,
    headingTopMarginMobile,
    headingTopMarginTablet,
    headingBottomMargin,
    headingBottomMarginTablet,
    headingBottomMarginMobile,
    headingRightMargin,
    headingRightMarginMobile,
    headingRightMarginTablet,
    headingLeftMargin,
    headingLeftMarginTablet,
    headingLeftMarginMobile,
    contentTopPadding,
    contentTopPaddingMobile,
    contentTopPaddingTablet,
    contentBottomPadding,
    contentBottomPaddingTablet,
    contentBottomPaddingMobile,
    contentRightPadding,
    contentRightPaddingMobile,
    contentRightPaddingTablet,
    contentLeftPadding,
    contentLeftPaddingTablet,
    contentLeftPaddingMobile,
    contentTopMargin,
    contentTopMarginMobile,
    contentTopMarginTablet,
    contentBottomMargin,
    contentBottomMarginTablet,
    contentBottomMarginMobile,
    contentRightMargin,
    contentRightMarginMobile,
    contentRightMarginTablet,
    contentLeftMargin,
    contentLeftMarginTablet,
    contentLeftMarginMobile,
    blockWidth,
    blockBorderStyle,
    blockBorderWidth,
    blockBorderRadius,
    blockBorderColor,
    headingBorderStyle,
    headingBorderWidth,
    headingBorderRadius,
    headingBorderColor,
    bodyBorderStyle,
    bodyBorderWidth,
    bodyBorderRadius,
    bodyBorderColor,
    tableType,
    orderListType,
    headerLayout,
    backgroundColor,
    backgroundImage,
    backgroundType,
    backgroundPosition,
    backgroundRepeat,
    backgroundSize,
    backgroundVideo,
  } = props.attributes;

  let justifyContent = "flex-start";

  if (align === "center") {
    justifyContent = "center";
  } else if (align === "right") {
    justifyContent = "flex-end";
  }

  let updatedBackgroundImage = "";
  if(backgroundImage) {
    updatedBackgroundImage = `linear-gradient(${hexToRgba(
      "#fff",
      0
    )},${hexToRgba(
      "#fff",
      0
    )}),url(${backgroundImage})`;
  }
  if (backgroundType !== 'image'){
    updatedBackgroundImage = ''
  }

  let headingBgColorTemp = '#0984ff'
  if(headerLayout === 'outline'){
    headingBgColorTemp = '#fff';
  }else {
    headingBgColorTemp = '#0984ff'
  }

  var selectors = {
    " ": {
      "padding-top": generateCSSUnit(blockTopPadding, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPadding, "px"),
      "padding-left": generateCSSUnit(blockLeftPadding, "px"),
      "padding-right": generateCSSUnit(blockRightPadding, "px"),
      "margin-top": generateCSSUnit(blockTopMargin, "px"),
      "margin-bottom": generateCSSUnit(blockBottomMargin, "px"),
      "margin-left": generateCSSUnit(blockLeftMargin, "px"),
      "margin-right": generateCSSUnit(blockRightMargin, "px"),
      "z-index": zIndex,
      display: "flex",
      "background-color":
        backgroundType == "color"
          ? `${hexToRgba(backgroundColor || "#fff", 1)}`
          : undefined,
      "background-image": updatedBackgroundImage,
      "background-position": backgroundPosition,
      "background-repeat": backgroundRepeat,
      "background-size": backgroundSize
    },
    " .responsive-block-editor-addons-toc__title-wrap": {
      "justify-content": justifyContent,
      "font-family": headingFontFamily,
      "font-weight": headingFontWeight,
      "font-size": generateCSSUnit(headingFontSize, "px"),
      "line-height": headingLineHeight,
      color: headingColor,
      "background-color": headingBgColor,
      "padding-top": generateCSSUnit(headingTopPadding, "px"),
      "padding-bottom": generateCSSUnit(headingBottomPadding, "px"),
      "padding-left": generateCSSUnit(headingLeftPadding, "px"),
      "padding-right": generateCSSUnit(headingRightPadding, "px"),
      "margin-top": generateCSSUnit(headingTopMargin, "px"),
      "margin-bottom": generateCSSUnit(headingBottomMargin, "px"),
      "margin-left": generateCSSUnit(headingLeftMargin, "px"),
      "margin-right": generateCSSUnit(headingRightMargin, "px"),
      "border-color": headingBorderColor,
      "border-style": headingBorderStyle,
      "border-width": generateCSSUnit(headingBorderWidth, "px"),
      "border-radius": generateCSSUnit(headingBorderRadius, "px"),
    },
    " .responsive-block-editor-addons-toc__title-wrap:hover": {
      color: headingColorHover,
      "background-color": headingBgColorHover,
    },
    " .responsive-block-editor-addons-toc__list-wrap": {
      "font-family": contentFontFamily,
      "font-weight": contentFontWeight,
      "font-size": generateCSSUnit(contentFontSize, "px"),
      "line-height": contentLineHeight,
      "background-color": bodyBgColor,
      "padding-top": generateCSSUnit(contentTopPadding, "px"),
      "padding-bottom": generateCSSUnit(contentBottomPadding, "px"),
      "padding-left": generateCSSUnit(contentLeftPadding, "px"),
      "padding-right": generateCSSUnit(contentRightPadding, "px"),
      "margin-top": generateCSSUnit(contentTopMargin, "px"),
      "margin-bottom": generateCSSUnit(contentBottomMargin, "px"),
      "margin-left": generateCSSUnit(contentLeftMargin, "px"),
      "margin-right": generateCSSUnit(contentRightMargin, "px"),
      "border-color": bodyBorderColor,
      "border-style": bodyBorderStyle,
      "border-top-width": 0+'px',
      "border-left-width": generateCSSUnit(bodyBorderWidth, "px"),
      "border-right-width": generateCSSUnit(bodyBorderWidth, "px"),
      "border-bottom-width": generateCSSUnit(bodyBorderWidth, "px"),
      "border-radius": generateCSSUnit(bodyBorderRadius, "px"),
    },
    ' .responsive-block-editor-addons_table-of-contents-placeholder': {
      "font-family": contentFontFamily,
      "font-weight": contentFontWeight,
      "font-size": generateCSSUnit(contentFontSize, "px"),
      "line-height": contentLineHeight,
      "background-color": bodyBgColor,
      "padding-top": generateCSSUnit(contentTopPadding, "px"),
      "padding-bottom": generateCSSUnit(contentBottomPadding, "px"),
      "padding-left": generateCSSUnit(contentLeftPadding, "px"),
      "padding-right": generateCSSUnit(contentRightPadding, "px"),
      "margin-top": generateCSSUnit(contentTopMargin, "px"),
      "margin-bottom": generateCSSUnit(contentBottomMargin, "px"),
      "margin-left": generateCSSUnit(contentLeftMargin, "px"),
      "margin-right": generateCSSUnit(contentRightMargin, "px"),
      "border-color": bodyBorderColor,
      "border-style": bodyBorderStyle,
      "border-top-width": 0+'px',
      "border-left-width": generateCSSUnit(bodyBorderWidth, "px"),
      "border-right-width": generateCSSUnit(bodyBorderWidth, "px"),
      "border-bottom-width": generateCSSUnit(bodyBorderWidth, "px"),
      "border-radius": generateCSSUnit(bodyBorderRadius, "px"),
      color: bodyColor,
    },
    " .responsive-block-editor-addons-toc__list-wrap .responsive-block-editor-addons-toc__list li, .responsive-block-editor-addons-toc__list-wrap .responsive-block-editor-addons-toc__list li a": {
      color: bodyColor,
    },
    " .responsive-block-editor-addons-toc__list-wrap:hover": {
      "background-color": bodyBgColorHover,
    },
    " .responsive-block-editor-addons-toc__list-wrap .responsive-block-editor-addons-toc__list li:hover, .responsive-block-editor-addons-toc__list-wrap .responsive-block-editor-addons-toc__list li:hover a, .responsive-block-editor-addons-toc__list-wrap .responsive-block-editor-addons-toc__list li a:hover": {
      color: bodyColorHover,
    },
    " .responsive-block-editor-addons-toc__wrap": {
      "width": generateCSSUnit(blockWidth, "%"),
      "border-color": blockBorderColor,
      "border-style": blockBorderStyle,
      "border-width": generateCSSUnit(blockBorderWidth, "px"),
      "border-radius": generateCSSUnit(blockBorderRadius, "px"),
    }
  };

  var mobile_selectors = {
    " ": {
      "padding-top": generateCSSUnit(blockTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(blockLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingMobile, "px"),
      "margin-top": generateCSSUnit(blockTopMarginMobile, "px"),
      "margin-bottom": generateCSSUnit(blockBottomMarginMobile, "px"),
      "margin-left": generateCSSUnit(blockLeftMarginMobile, "px"),
      "margin-right": generateCSSUnit(blockRightMarginMobile, "px"),
    },
    " .responsive-block-editor-addons-toc__title-wrap": {
      "font-size": generateCSSUnit(headingFontSizeMobile, "px"),
      "padding-top": generateCSSUnit(headingTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(headingBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(headingLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(headingRightPaddingMobile, "px"),
      "margin-top": generateCSSUnit(headingTopMarginMobile, "px"),
      "margin-bottom": generateCSSUnit(headingBottomMarginMobile, "px"),
      "margin-left": generateCSSUnit(headingLeftMarginMobile, "px"),
      "margin-right": generateCSSUnit(headingRightMarginMobile, "px"),
    },
    " .responsive-block-editor-addons-toc__list-wrap": {
      "font-size": generateCSSUnit(contentFontSizeMobile, "px"),
      "padding-top": generateCSSUnit(contentTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(contentBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(contentLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(contentRightPaddingMobile, "px"),
      "margin-top": generateCSSUnit(contentTopMarginMobile, "px"),
      "margin-bottom": generateCSSUnit(contentBottomMarginMobile, "px"),
      "margin-left": generateCSSUnit(contentLeftMarginMobile, "px"),
      "margin-right": generateCSSUnit(contentRightMarginMobile, "px"),
    },
  };

  var tablet_selectors = {
    " ": {
      "padding-top": generateCSSUnit(blockTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(blockLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(blockRightPaddingTablet, "px"),
      "margin-top": generateCSSUnit(blockTopMarginTablet, "px"),
      "margin-bottom": generateCSSUnit(blockBottomMarginTablet, "px"),
      "margin-left": generateCSSUnit(blockLeftMarginTablet, "px"),
      "margin-right": generateCSSUnit(blockRightMarginTablet, "px"),
    },
    " .responsive-block-editor-addons-toc__title-wrap": {
      "font-size": generateCSSUnit(headingFontSizeTablet, "px"),
      "padding-top": generateCSSUnit(headingTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(headingBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(headingLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(headingRightPaddingTablet, "px"),
      "margin-top": generateCSSUnit(headingTopMarginTablet, "px"),
      "margin-bottom": generateCSSUnit(headingBottomMarginTablet, "px"),
      "margin-left": generateCSSUnit(headingLeftMarginTablet, "px"),
      "margin-right": generateCSSUnit(headingRightMarginTablet, "px"),
    },
    " .responsive-block-editor-addons-toc__list-wrap": {
      "font-size": generateCSSUnit(contentFontSizeTablet, "px"),
      "padding-top": generateCSSUnit(contentTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(contentBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(contentLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(contentRightPaddingTablet, "px"),
      "margin-top": generateCSSUnit(contentTopMarginTablet, "px"),
      "margin-bottom": generateCSSUnit(contentBottomMarginTablet, "px"),
      "margin-left": generateCSSUnit(contentLeftMarginTablet, "px"),
      "margin-right": generateCSSUnit(contentRightMarginTablet, "px"),
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-table-of-contents.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
