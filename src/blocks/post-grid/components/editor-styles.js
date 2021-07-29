/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";

function EditorStyles(props) {
  const {
    block_id,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowColor,
    boxShadowPosition,
    hoverboxShadowHOffset,
    hoverboxShadowVOffset,
    hoverboxShadowBlur,
    hoverboxShadowSpread,
    hoverboxShadowColor,
    hoverboxShadowPosition,
    imageBorderRadius,
    titleFontSize,
    titleFontSizeTablet,
    titleFontSizeMobile,
    titleColor,
    titleHoverColor,
    stackonMobile,
    blockBorderWidth,
    blockBorderColor,
    blockBorderStyle,
    blockBorderRadius,
    bgColor,
    rowGap,
    rowGapTablet,
    rowGapMobile,
    columnGap,
    columnGapTablet,
    columnGapMobile,
    equalHeight,
    imagePosition,
    textAlignment,
    contentPadding,
    contentPaddingMobile,
    contentPaddingTablet,
    layout,
    titleBottomSpacing,
    titleBottomSpacingMobile,
    titleBottomSpacingTablet,
    titleLineHeight,
    titleFontFamily,
    titleFontWeight,
    titleTextTransform,
    metaColor,
    metaLineHeight,
    metaFontFamily,
    metaFontWeight,
    metaTextTransform,
    metaFontSize,
    metaFontSizeMobile,
    metaFontSizeTablet,
    metaBottomSpacing,
    metaBottomSpacingMobile,
    metaBottomSpacingTablet,
    textColor,
    excerptFontFamily,
    excerptFontSize,
    excerptFontSizeMobile,
    excerptFontSizeTablet,
    excerptLineHeight,
    excerptFontWeight,
    excerptTextTransform,
    excerptBottomSpacing,
    excerptBottomSpacingMobile,
    excerptBottomSpacingTablet,
    readMoreLinkColor,
    readMoreHoverColor,
    continueFontSize,
    continueFontSizeMobile,
    continueFontSizeTablet,
    continueFontWeight,
    continueFontFamily,
    continueLineHeight,
    continueTextTransform,
    paginationAlignment,
    paginationSpacing,
    paginationLayout,
    paginationBorderColor,
    paginationActiveBorderColor,
    paginationBorderRadius,
    paginationBorderWidth,
    paginationBorderStyle,
    paginationTextColor,
    paginationTextActiveColor,
  } = props.attributes;

  var boxShadowPositionCSS = boxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }
  var hoverboxShadowPositionCSS = hoverboxShadowPosition;

  if ("outset" === hoverboxShadowPosition) {
    hoverboxShadowPositionCSS = "";
  }

  var blockContentPadding = "0";
  if ("content" === layout && contentPadding) {
    blockContentPadding = contentPadding;
  }
  var varContentPadding = "0";
  var varMobileContentPadding = "0";
  if ("boxed" === layout && (contentPadding || contentPaddingMobile)) {
    varContentPadding = contentPadding;
    varMobileContentPadding = contentPaddingMobile;
  }
  var varTabletContentPadding = "0";
  if ("boxed" === layout && (contentPadding || contentPaddingTablet)) {
    varContentPadding = contentPadding;
    varTabletContentPadding = contentPaddingTablet;
  }
  var gridTemplateColumns;
  if (false === stackonMobile) {
    gridTemplateColumns = "1fr 1fr";
  }

  var varcolumnGap;
  if (columnGap) {
    varcolumnGap = columnGap;
  }
  var varcolumnGapTablet;
  if (columnGapTablet) {
    varcolumnGapTablet = columnGapTablet;
  }
  var varcolumnGapMobile;
  if (columnGapMobile) {
    varcolumnGapMobile = columnGapMobile;
  }
  var varrowGap;
  if (rowGap) {
    varrowGap = rowGap;
  }
  var varrowGapTablet;
  if (rowGapTablet) {
    varrowGapTablet = rowGapTablet;
  }
  var varrowGapMobile;
  if (rowGapMobile) {
    varrowGapMobile = rowGapMobile;
  }
  var varequalHeight = "fit-content";
  if (equalHeight) {
    varequalHeight = "auto";
  }
  var varpaginationBorderColor = "transparent";
  var varpaginationActiveBorderColor = "transparent";
  if ("filled" === paginationLayout) {
    varpaginationBorderColor = paginationBorderColor;
    varpaginationActiveBorderColor = paginationActiveBorderColor;
  }


  var selectors = {
    " .responsive-block-editor-addons-post-grid-items": {
      "grid-column-gap": generateCSSUnit(varcolumnGap, "px"),
      "grid-row-gap": generateCSSUnit(varrowGap, "px"),
    },
    " article": {
      "background-color": bgColor,
      "border-style": blockBorderStyle,
      "border-color": blockBorderColor,
      "border-width": generateCSSUnit(blockBorderWidth, "px"),
      "border-radius": generateCSSUnit(blockBorderRadius, "px"),
      
      height: varequalHeight,
      "background-size": "cover",
      "box-shadow":
        generateCSSUnit(boxShadowHOffset, "px") +
        " " +
        generateCSSUnit(boxShadowVOffset, "px") +
        " " +
        generateCSSUnit(boxShadowBlur, "px") +
        " " +
        generateCSSUnit(boxShadowSpread, "px") +
        " " +
        boxShadowColor +
        " " +
        boxShadowPositionCSS,
    },
    " article:hover": {
      "box-shadow":
        generateCSSUnit(hoverboxShadowHOffset, "px") +
        " " +
        generateCSSUnit(hoverboxShadowVOffset, "px") +
        " " +
        generateCSSUnit(hoverboxShadowBlur, "px") +
        " " +
        generateCSSUnit(hoverboxShadowSpread, "px") +
        " " +
        hoverboxShadowColor +
        " " +
        hoverboxShadowPositionCSS,
    },
    " .is-list article": {
      "margin-bottom": generateCSSUnit(rowGap, "px"),
    },
    " .is-list article:last-child": {
      "margin-bottom": 0,
    },
    " .responsive-block-editor-addons-block-post-grid-image img": {
      "border-radius": generateCSSUnit(imageBorderRadius, "px"),
    },
    " .responsive-block-editor-addons-block-post-grid-text": {
      "text-align": textAlignment,
      padding: generateCSSUnit(blockContentPadding, "px"),
    },
    " .responsive-block-editor-addons-block-post-grid-title": {
      "font-size": generateCSSUnit(titleFontSize, "px"),
      "margin-bottom": generateCSSUnit(titleBottomSpacing, "px"),
    },
    " .responsive-block-editor-addons-block-post-grid-title a": {
      color: titleColor,
      "line-height": titleLineHeight,
      "font-family": titleFontFamily,
      "font-weight": titleFontWeight,
      "text-transform": titleTextTransform,
    },
    " .responsive-block-editor-addons-block-post-grid-title a:hover": {
      color: titleHoverColor,
    },
    " .responsive-block-editor-addons-block-post-grid-author a": {
      color: metaColor,
    },
    " .responsive-block-editor-addons-block-post-grid-byline": {
      color: metaColor,
      "font-family": metaFontFamily,
      "font-weight": metaFontWeight,
      "line-height": metaLineHeight,
      "text-transform": metaTextTransform,
      "font-size": generateCSSUnit(metaFontSize, "px"),
      "margin-bottom": generateCSSUnit(metaBottomSpacing, "px"),
    },
    " .responsive-block-editor-addons-block-post-grid-excerpt": {
      color: textColor,
      "font-family": excerptFontFamily,
      "font-weight": excerptFontWeight,
      "line-height": excerptLineHeight,
      "text-transform": excerptTextTransform,
      "font-size": generateCSSUnit(excerptFontSize, "px"),
    },
    " .responsive-block-editor-addons-block-post-grid-excerpt > div > p": {
      "margin-bottom": generateCSSUnit(excerptBottomSpacing, "px"),
    },
    " .responsive-block-editor-addons-block-post-grid-more-link.responsive-block-editor-addons-text-link": {
      color: readMoreLinkColor,
      "font-weight": continueFontWeight,
      "line-height": continueLineHeight,
      "text-transform": continueTextTransform,
      "font-size": generateCSSUnit(continueFontSize, "px"),
      "font-family": continueFontFamily,
    },
    " .responsive-block-editor-addons-block-post-grid-more-link:hover": {
      color: readMoreHoverColor,
      "text-decoration": "none",
    },
    " .responsive-block-editor-addons-post-pagination-wrap": {
      "text-align": paginationAlignment,
      "margin-top": generateCSSUnit(paginationSpacing, "px"),
    },
    " .responsive-block-editor-addons-post-pagination-wrap > *": {
      "background-color": varpaginationBorderColor,
      color: paginationTextColor,
      "border-color": paginationBorderColor,
      "border-style": paginationBorderStyle,
      "border-width": generateCSSUnit(paginationBorderWidth, "px"),
      "border-radius": generateCSSUnit(paginationBorderRadius, "px"),
      "margin-right": "10px",
      padding: "0.5em",
    },
    " .responsive-block-editor-addons-post-pagination-wrap > span": {
      "background-color": varpaginationActiveBorderColor,
      color: paginationTextActiveColor,
      "border-color": paginationActiveBorderColor,
      "border-style": paginationBorderStyle,
      "border-width": generateCSSUnit(paginationBorderWidth, "px"),
      "border-radius": generateCSSUnit(paginationBorderRadius, "px"),
    },
    " .responsive-block-editor-addons-post-pagination-wrap > *:last-child": {
      "margin-right": "0",
    },
    " .responsive-block-editor-addons-post-grid-items article": {
      padding: generateCSSUnit(varContentPadding, "px"),
    },
  };

  var mobile_selectors = {
    " .responsive-block-editor-addons-block-post-grid-title": {
      "font-size": generateCSSUnit(titleFontSizeMobile, "px"),
    },
    " .is-list article": {
      "grid-template-columns": gridTemplateColumns,
    },
    " .responsive-block-editor-addons-post-grid-items article": {
      padding: generateCSSUnit(varMobileContentPadding, "px"),
    },
    " .responsive-block-editor-addons-post-grid-items": {
      "grid-column-gap": generateCSSUnit(varcolumnGapMobile, "px"),
      "grid-row-gap": generateCSSUnit(varrowGapMobile, "px"),
    },
    " .responsive-block-editor-addons-block-post-grid-title": {
      "margin-bottom": generateCSSUnit(titleBottomSpacingMobile, "px"),
    },
    " .responsive-block-editor-addons-block-post-grid-byline": {
      "margin-bottom": generateCSSUnit(metaBottomSpacingMobile, "px"),
    },
    " .responsive-block-editor-addons-block-post-grid-excerpt > div > p": {
      "margin-bottom": generateCSSUnit(excerptBottomSpacingMobile, "px"),
    },
    " .is-list article:not(:last-child)": {
      "margin-bottom": generateCSSUnit(varrowGapMobile, "px"),
    },
    " article": {
      "margin-bottom": generateCSSUnit(varrowGapMobile, "px"),
    },
    " .responsive-block-editor-addons-block-post-grid-byline": {
      "font-size": generateCSSUnit(metaFontSizeMobile, "px"),
    },
    " .responsive-block-editor-addons-block-post-grid-excerpt": {
      "font-size": generateCSSUnit(excerptFontSizeMobile, "px"),
    },
    " .responsive-block-editor-addons-block-post-grid-more-link.responsive-block-editor-addons-text-link": {
      "font-size": generateCSSUnit(continueFontSizeMobile, "px"),
    },
  };

  var tablet_selectors = {
    " .responsive-block-editor-addons-block-post-grid-title": {
      "font-size": generateCSSUnit(titleFontSizeTablet, "px"),
    },
    " .responsive-block-editor-addons-post-grid-items article": {
      padding: generateCSSUnit(varTabletContentPadding, "px"),
    },
    " .responsive-block-editor-addons-post-grid-items": {
      "grid-column-gap": generateCSSUnit(varrowGapTablet, "px"),
      "grid-row-gap": generateCSSUnit(varrowGapTablet, "px"),
    },
    " .responsive-block-editor-addons-block-post-grid-title": {
      "margin-bottom": generateCSSUnit(titleBottomSpacingTablet, "px"),
    },
    " .responsive-block-editor-addons-block-post-grid-byline": {
      "margin-bottom": generateCSSUnit(metaBottomSpacingTablet, "px"),
    },
    " .responsive-block-editor-addons-block-post-grid-excerpt > div > p": {
      "margin-bottom": generateCSSUnit(excerptBottomSpacingTablet, "px"),
    },
    " .is-list article:not(:last-child)": {
      "margin-bottom": generateCSSUnit(varrowGapTablet, "px"),
    },
    " article": {
      "margin-bottom": generateCSSUnit(varrowGapTablet, "px"),
    },
    " .responsive-block-editor-addons-block-post-grid-byline": {
      "font-size": generateCSSUnit(metaFontSizeTablet, "px"),
    },
    " .responsive-block-editor-addons-block-post-grid-excerpt": {
      "font-size": generateCSSUnit(excerptFontSizeTablet, "px"),
    },
    " .responsive-block-editor-addons-block-post-grid-more-link.responsive-block-editor-addons-text-link": {
      "font-size": generateCSSUnit(continueFontSizeTablet, "px"),
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-post-grid.block-id-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
