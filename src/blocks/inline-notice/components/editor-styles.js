/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";

function EditorStyles(props) {
  const {
    block_id,
    blockTopPadding,
    blockBottomPadding,
    blockLeftPadding,
    blockRightPadding,
    blockTopPaddingMobile,
    blockBottomPaddingMobile,
    blockLeftPaddingMobile,
    blockRightPaddingMobile,
    blockTopPaddingTablet,
    blockBottomPaddingTablet,
    blockLeftPaddingTablet,
    blockRightPaddingTablet,
    blockTopMargin,
    blockBottomMargin,
    blockLeftMargin,
    blockRightMargin,
    blockTopMarginMobile,
    blockBottomMarginMobile,
    blockLeftMarginMobile,
    blockRightMarginMobile,
    blockTopMarginTablet,
    blockBottomMarginTablet,
    blockLeftMarginTablet,
    blockRightMarginTablet,
    blockZIndex,
    contentBgColor,
    contentColor,
    contentFontFamily,
    contentFontSize,
    contentFontSizeMobile,
    contentFontSizeTablet,
    contentFontWeight,
    contentLetterSpacing,
    contentLineHeight,
    contentPaddingHorizontal,
    contentPaddingVertical,
    contentPaddingHorizontalMobile,
    contentPaddingVerticalMobile,
    contentPaddingHorizontalTablet,
    contentPaddingVerticalTablet,
    headingTag,
    layout,
    noticeAlignment,
    noticeBoxColor,
    noticeContent,
    noticeDismiss,
    noticeTitle,
    noticeType,
    titleColor,
    titleFontFamily,
    titleFontSize,
    titleFontSizeMobile,
    titleFontSizeTablet,
    titleFontWeight,
    titleLetterSpacing,
    titleLineHeight,
    titlePaddingHorizontal,
    titlePaddingVertical,
    titlePaddingHorizontalMobile,
    titlePaddingVerticalMobile,
    titlePaddingHorizontalTablet,
    titlePaddingVerticalTablet
  } = props.attributes;

  let noticeTypeColor;
  switch(noticeType) {
    case "warning": noticeTypeColor = '#ffd54f';
      break;
    case "info": noticeTypeColor = '#2091e1';
      break;
    case "error": noticeTypeColor = '#d9534f';
      break;
    case "notification": noticeTypeColor = '#40ba7b';
      break;
    default: noticeTypeColor = noticeBoxColor;
  }

  let borderValues = "modern" === layout ? `1px solid ${noticeTypeColor}` : "none";
  let borderLeft = "simple" === layout ? `5px solid ${noticeTypeColor}` : `1px solid ${noticeTypeColor}`;
  let noticeBgColor = "modern" === layout ? noticeTypeColor : "";
  let noticeAreaBorder = "simple" === layout ? `1px solid ${noticeTypeColor}` : "none";

  var selectors = {
    "": {
      "text-align": noticeAlignment,
      "padding": `${generateCSSUnit(blockTopPadding ,"px")} ${generateCSSUnit(blockRightPadding ,"px")} ${generateCSSUnit(blockBottomPadding ,"px")} ${generateCSSUnit(blockLeftPadding ,"px")}`,
      "margin": `${generateCSSUnit(blockTopMargin ,"px")} ${generateCSSUnit(blockRightMargin ,"px")} ${generateCSSUnit(blockBottomMargin ,"px")} ${generateCSSUnit(blockLeftMargin ,"px")}`,
      "z-index": blockZIndex,
    },
    " .responsive-block-editor-addons-block-inline-notice-title-area": {
      "background-color": noticeTypeColor,
      "border-left": noticeAreaBorder,
      "display": "flex",
      "align-items": "center",
      "justify-content": "space-between"
    },
    " .responsive-block-editor-addons-block-inline-notice-title": {
      "color": titleColor,
      "font-family": titleFontFamily,
      "font-size": generateCSSUnit(titleFontSize, "px"),
      "font-weight": titleFontWeight,
      "line-height": titleLineHeight,
      "letter-spacing": generateCSSUnit(titleLetterSpacing, "px"),
      "margin": 0,
      "padding": `${generateCSSUnit(titlePaddingVertical, "px")} ${generateCSSUnit(titlePaddingHorizontal, "px")}`
    },
    " .responsive-block-editor-addons-block-inline-notice-svg > svg": {
      "height": "17px",
      "width": "17px",
      "margin-right": "10px"
    },
    " .responsive-block-editor-addons-block-inline-notice-content-area": {
      "background-color": contentBgColor,
      "border-bottom": borderValues,
      "border-left": borderLeft,
      "border-right": borderValues
    },
    " .responsive-block-editor-addons-block-inline-notice-content": {
      "color": contentColor,
      "font-family": contentFontFamily,
      "font-size": generateCSSUnit(contentFontSize, "px"),
      "font-weight": contentFontWeight,
      "line-height": contentLineHeight,
      "letter-spacing": generateCSSUnit(contentLetterSpacing, "px"),
      "padding": `${generateCSSUnit(contentPaddingVertical, "px")} ${generateCSSUnit(contentPaddingHorizontal, "px")}`
    }
  };


  var mobile_selectors = {
    " ": {
      "padding": `${generateCSSUnit(blockTopPaddingMobile ,"px")} ${generateCSSUnit(blockRightPaddingMobile ,"px")} ${generateCSSUnit(blockBottomPaddingMobile ,"px")} ${generateCSSUnit(blockLeftPaddingMobile ,"px")}`,
      "margin": `${generateCSSUnit(blockTopMarginMobile ,"px")} ${generateCSSUnit(blockRightMarginMobile ,"px")} ${generateCSSUnit(blockBottomMarginMobile ,"px")} ${generateCSSUnit(blockLeftMarginMobile ,"px")}`,
    },
    " .responsive-block-editor-addons-block-inline-notice-title": {
      "font-size": `${generateCSSUnit(titleFontSizeMobile, "px")} !important`,
      "padding": `${generateCSSUnit(titlePaddingVerticalMobile, "px")} ${generateCSSUnit(titlePaddingHorizontalMobile, "px")}`
    },
    " .responsive-block-editor-addons-block-inline-notice-content": {
      "font-size": `${generateCSSUnit(contentFontSizeMobile, "px")} !important`,
      "padding": `${generateCSSUnit(contentPaddingVerticalMobile, "px")} ${generateCSSUnit(contentPaddingHorizontalMobile, "px")}`
    }
  };

  var tablet_selectors = {
    " ": {
      "padding": `${generateCSSUnit(blockTopPaddingTablet ,"px")} ${generateCSSUnit(blockRightPaddingTablet ,"px")} ${generateCSSUnit(blockBottomPaddingTablet ,"px")} ${generateCSSUnit(blockLeftPaddingTablet ,"px")}`,
      "margin": `${generateCSSUnit(blockTopMarginTablet ,"px")} ${generateCSSUnit(blockRightMarginTablet ,"px")} ${generateCSSUnit(blockBottomMarginTablet ,"px")} ${generateCSSUnit(blockLeftMarginTablet ,"px")}`,
    },
    " .responsive-block-editor-addons-block-inline-notice-title": {
      "font-size": `${generateCSSUnit(titleFontSizeTablet, "px")} !important`,
      "padding": `${generateCSSUnit(titlePaddingVerticalTablet, "px")} ${generateCSSUnit(titlePaddingHorizontalTablet, "px")}`
    },
    " .responsive-block-editor-addons-block-inline-notice-content": {
      "font-size": `${generateCSSUnit(contentFontSizeTablet, "px")} !important`,
      "padding": `${generateCSSUnit(contentPaddingVerticalTablet, "px")} ${generateCSSUnit(contentPaddingHorizontalTablet, "px")}`
    }
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-inline-notice.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
