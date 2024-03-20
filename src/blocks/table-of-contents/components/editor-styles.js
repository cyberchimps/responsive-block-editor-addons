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
    headingBorderTopWidth,
    headingBorderBottomWidth,
    headingBorderLeftWidth,
    headingBorderRightWidth,
    headingBorderTopWidthMobile,
    headingBorderBottomWidthMobile,
    headingBorderLeftWidthMobile,
    headingBorderRightWidthMobile,
    headingBorderTopWidthTablet,
    headingBorderBottomWidthTablet,
    headingBorderLeftWidthTablet,
    headingBorderRightWidthTablet,
    blockBorderRadius,
    headingBorderTopLeftRadius,
    headingBorderTopRightRadius,
    headingBorderBottomLeftRadius,
    headingBorderBottomRightRadius,
    headingBorderTopLeftRadiusMobile,
    headingBorderTopRightRadiusMobile,
    headingBorderBottomLeftRadiusMobile,
    headingBorderBottomRightRadiusMobile,
    headingBorderTopLeftRadiusTablet,
    headingBorderTopRightRadiusTablet,
    headingBorderBottomLeftRadiusTablet,
    headingBorderBottomRightRadiusTablet,
    blockBorderColor,
    headingBorderStyle,
    headingBorderWidth,
    headingBorderRadius,
    headingBorderColor,
    bodyBorderStyle,
    bodyBorderWidth,
    //Body border width
    bodyBorderTopWidth,
    bodyBorderLeftWidth,
    bodyBorderRightWidth,
    bodyBorderBottomWidth,
    bodyBorderTopWidthTablet,
    bodyBorderLeftWidthTablet,
    bodyBorderRightWidthTablet,
    bodyBorderBottomWidthTablet,
    bodyBorderTopWidthMobile,
    bodyBorderLeftWidthMobile,
    bodyBorderRightWidthMobile,
    bodyBorderBottomWidthMobile,
    //body Border radius
    bodyBorderTopLeftRadiusMobile,
    bodyBorderTopRightRadiusMobile,
    bodyBorderBottomLeftRadiusMobile,
    bodyBorderBottomRightRadiusMobile,
    bodyBorderTopLeftRadiusTablet,
    bodyBorderTopRightRadiusTablet,
    bodyBorderBottomLeftRadiusTablet,
    bodyBorderBottomRightRadiusTablet,
    bodyBorderTopLeftRadius,
    bodyBorderTopRightRadius,
    bodyBorderBottomLeftRadius,
    bodyBorderBottomRightRadius,
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
    icon_color,
    size,
    sizeMobile,
    sizeTablet,
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
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
      "z-index": zIndex,
		  "opacity": hideWidget? 0.2 : 1,
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
      //Border Width
      "border-top-width": generateCSSUnit(headingBorderTopWidth, "px"),
      "border-left-width": generateCSSUnit(headingBorderLeftWidth, "px"),
      "border-right-width": generateCSSUnit(headingBorderRightWidth, "px"),
      "border-bottom-width": generateCSSUnit(headingBorderBottomWidth, "px"),
      //border-radius
      "border-top-left-radius": generateCSSUnit(headingBorderTopLeftRadius, "px"),
      "border-top-right-radius": generateCSSUnit(headingBorderTopRightRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(headingBorderBottomLeftRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(headingBorderBottomRightRadius, "px"),

      // "border-radius": generateCSSUnit(headingBorderRadius, "px"),

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
      "border-top-width": generateCSSUnit(bodyBorderTopWidth, "px"),
      "border-left-width": generateCSSUnit(bodyBorderLeftWidth, "px"),
      "border-right-width": generateCSSUnit(bodyBorderRightWidth, "px"),
      "border-bottom-width": generateCSSUnit(bodyBorderBottomWidth, "px"),
      "border-radius": generateCSSUnit(bodyBorderRadius, "px"),
      // border-radius
      "border-top-left-radius": generateCSSUnit(bodyBorderTopLeftRadius, "px"),
      "border-top-right-radius": generateCSSUnit(bodyBorderTopRightRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(bodyBorderBottomLeftRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(bodyBorderBottomRightRadius, "px"),
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

      "border-width": generateCSSUnit(blockBorderWidth, "px"),
      "border-radius": generateCSSUnit(blockBorderRadius, "px"),

      "padding-top": generateCSSUnit(blockTopPadding, "px"),
      "padding-bottom": generateCSSUnit(blockBottomPadding, "px"),
      "padding-left": generateCSSUnit(blockLeftPadding, "px"),
      "padding-right": generateCSSUnit(blockRightPadding, "px"),
      "margin-top": generateCSSUnit(blockTopMargin, "px"),
      "margin-bottom": generateCSSUnit(blockBottomMargin, "px"),
      "margin-left": generateCSSUnit(blockLeftMargin, "px"),
      "margin-right": generateCSSUnit(blockRightMargin, "px"),
    },
    " .responsive-block-editor-addons-toc__collapsible-wrap .responsive-block-editor-addons-toc__collapsible-icon": {
      color: icon_color,
    },
    " .responsive-block-editor-addons-toc__collapsible-wrap .responsive-block-editor-addons-toc__collapsible-icon svg": {
      fill: icon_color,
    },
    " .responsive-block-editor-addons-toc__collapsible-icon svg": {
      width: generateCSSUnit(size, "px"),
      height: generateCSSUnit(size, "px"),
    },
    " .responsive-block-editor-addons-toc__collapsible-icon": {
      width: generateCSSUnit(size, "px"),
      height: generateCSSUnit(size, "px"),
    },
  };

  var mobile_selectors = {
    " ": {
      "opacity": hideWidgetMobile ? 0.2 : 1,
    },
    " .responsive-block-editor-addons-toc__wrap": {
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
       //Border Width
       "border-top-width": generateCSSUnit(headingBorderTopWidthMobile, "px"),
       "border-left-width": generateCSSUnit(headingBorderLeftWidthMobile, "px"),
       "border-right-width": generateCSSUnit(headingBorderRightWidthMobile, "px"),
       "border-bottom-width": generateCSSUnit(headingBorderBottomWidthMobile, "px"),
       //border-radius
       "border-top-left-radius": generateCSSUnit(headingBorderTopLeftRadiusMobile, "px"),
       "border-top-right-radius": generateCSSUnit(headingBorderTopRightRadiusMobile, "px"),
       "border-bottom-left-radius": generateCSSUnit(headingBorderBottomLeftRadiusMobile, "px"),
       "border-bottom-right-radius": generateCSSUnit(headingBorderBottomRightRadiusMobile, "px"),

      //Border Width
      "border-top-width": generateCSSUnit(headingBorderTopWidthMobile, "px"),
      "border-left-width": generateCSSUnit(headingBorderLeftWidthMobile, "px"),
      "border-right-width": generateCSSUnit(headingBorderRightWidthMobile, "px"),
      "border-bottom-width": generateCSSUnit(headingBorderBottomWidthMobile, "px"),
      //border-radius
      "border-top-left-radius": generateCSSUnit(headingBorderTopLeftRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(headingBorderTopRightRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(headingBorderBottomLeftRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(headingBorderBottomRightRadiusMobile, "px"),
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
       //Body Border Width
       "border-top-width": generateCSSUnit(bodyBorderTopWidthMobile, "px"),
       "border-left-width": generateCSSUnit(bodyBorderLeftWidthMobile, "px"),
       "border-right-width": generateCSSUnit(bodyBorderRightWidthMobile, "px"),
       "border-bottom-width": generateCSSUnit(bodyBorderBottomWidthMobile, "px"),
 
       // border-radius
       "border-top-left-radius": generateCSSUnit(bodyBorderTopLeftRadiusMobile, "px"),
       "border-top-right-radius": generateCSSUnit(bodyBorderTopRightRadiusMobile, "px"),
       "border-bottom-left-radius": generateCSSUnit(bodyBorderBottomLeftRadiusMobile, "px"),
       "border-bottom-right-radius": generateCSSUnit(bodyBorderBottomRightRadiusMobile, "px"),

      //Body Border Width
      "border-top-width": generateCSSUnit(bodyBorderTopWidthMobile, "px"),
      "border-left-width": generateCSSUnit(bodyBorderLeftWidthMobile, "px"),
      "border-right-width": generateCSSUnit(bodyBorderRightWidthMobile, "px"),
      "border-bottom-width": generateCSSUnit(bodyBorderBottomWidthMobile, "px"),

      // border-radius
      "border-top-left-radius": generateCSSUnit(bodyBorderTopLeftRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(bodyBorderTopRightRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(bodyBorderBottomLeftRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(bodyBorderBottomRightRadiusMobile, "px"),
    },
    " .responsive-block-editor-addons-toc__collapsible-icon": {
      "width": sizeMobile ? generateCSSUnit(sizeMobile, "px") : generateCSSUnit(size, "px"),
      "height": sizeMobile ? generateCSSUnit(sizeMobile, "px") : generateCSSUnit(size, "px"),
    },
      " .responsive-block-editor-addons-toc__collapsible-icon svg": {
      "width": sizeMobile ? generateCSSUnit(sizeMobile, "px") : generateCSSUnit(size, "px"),
      "height": sizeMobile ? generateCSSUnit(sizeMobile, "px") : generateCSSUnit(size, "px"),
      },
  };

  var tablet_selectors = {
    " ": {
      "opacity": hideWidgetTablet ? 0.2 : 1,
    },
    " .responsive-block-editor-addons-toc__wrap": {
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
      //Border Width
      "border-top-width": generateCSSUnit(headingBorderTopWidthTablet, "px"),
      "border-left-width": generateCSSUnit(headingBorderLeftWidthTablet, "px"),
      "border-right-width": generateCSSUnit(headingBorderRightWidthTablet, "px"),
      "border-bottom-width": generateCSSUnit(headingBorderBottomWidthTablet, "px"),
      //border-radius
      "border-top-left-radius": generateCSSUnit(headingBorderTopLeftRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(headingBorderTopRightRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(headingBorderBottomLeftRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(headingBorderBottomRightRadiusTablet, "px"),
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
      //BORDER WIDTH
      "border-top-width": generateCSSUnit(bodyBorderTopWidthTablet, "px"),
      "border-left-width": generateCSSUnit(bodyBorderLeftWidthTablet, "px"),
      "border-right-width": generateCSSUnit(bodyBorderRightWidthTablet, "px"),
      "border-bottom-width": generateCSSUnit(bodyBorderBottomWidthTablet, "px"),
      // border-radius
      "border-top-left-radius": generateCSSUnit(bodyBorderTopLeftRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(bodyBorderTopRightRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(bodyBorderBottomLeftRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(bodyBorderBottomRightRadiusTablet, "px"),
    },
    " .responsive-block-editor-addons-toc__collapsible-icon": {
      "width": sizeTablet ? generateCSSUnit(sizeTablet, "px") : generateCSSUnit(size, "px"),
      "height": sizeTablet ? generateCSSUnit(sizeTablet, "px") : generateCSSUnit(size, "px"),
    },
      " .responsive-block-editor-addons-toc__collapsible-icon svg": {
      "width": sizeTablet ? generateCSSUnit(sizeTablet, "px") : generateCSSUnit(size, "px"),
      "height": sizeTablet ? generateCSSUnit(sizeTablet, "px") : generateCSSUnit(size, "px"),
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