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
    imageTopRadius,
    imageRightRadius,
    imageBottomRadius,
    imageLeftRadius,
    imageTopRadiusTablet,
    imageRightRadiusTablet,
    imageBottomRadiusTablet,
    imageLeftRadiusTablet,
    imageTopRadiusMobile,
    imageRightRadiusMobile,
    imageBottomRadiusMobile,
    imageLeftRadiusMobile,
    titleFontSize,
    titleColor,
    titleHoverColor,
    stackonMobile,
    blockBorderWidth,
    blockBorderColor,
    blockBorderStyle,
    blockBorderRadius,
    blockTopRadius,
    blockRightRadius,
    blockBottomRadius,
    blockLeftRadius,
    blockTopRadiusTablet,
    blockRightRadiusTablet,
    blockBottomRadiusTablet,
    blockLeftRadiusTablet,
    blockTopRadiusMobile,
    blockRightRadiusMobile,
    blockBottomRadiusMobile,
    blockLeftRadiusMobile,
    bgColor,
    rowGap,
    columnGap,
    columnGapTablet,
    columnGapMobile,
    equalHeight,
    imagePosition,
    textAlignment,
    contentPadding,
    contentPaddingMobile,
    mobileContentPadding, //For compatibility with v1.3.2
    contentPaddingTablet,
    layout,
      imageBottomSpacing,
      imageBottomSpacingTablet,
      imageBottomSpacingMobile,
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
    metaBottomSpacing,
    metaBottomSpacingMobile,
    metaBottomSpacingTablet,
    textColor,
    excerptFontFamily,
    excerptFontSize,
    excerptLineHeight,
    excerptFontWeight,
    excerptTextTransform,
    excerptBottomSpacing,
    excerptBottomSpacingMobile,
    excerptBottomSpacingTablet,
    readMoreLinkColor,
    readMoreHoverColor,
    continueFontSize,
    continueFontWeight,
    continueLineHeight,
    continueTextTransform,
    paginationAlignment,
    paginationSpacing,
    paginationLayout,
    paginationBorderColor,
    paginationActiveBorderColor,
    paginationBorderRadius,
    paginationTopRadius,
    paginationRightRadius,
    paginationBottomRadius,
    paginationLeftRadius,
    paginationTopRadiusTablet,
    paginationRightRadiusTablet,
    paginationBottomRadiusTablet,
    paginationLeftRadiusTablet,
    paginationTopRadiusMobile,
    paginationRightRadiusMobile,
    paginationBottomRadiusMobile,
    paginationLeftRadiusMobile,
    paginationBorderWidth,
    paginationTextColor,
    paginationTextActiveColor,
    rowGapTablet,
    rowGapMobile,
    excerptFontSizeMobile,
    excerptFontSizeTablet,
    metaFontSizeMobile,
    metaFontSizeTablet,
    titleFontSizeMobile,
    titleFontSizeTablet,
    continueFontFamily,
    continueFontSizeMobile,
    continueFontSizeTablet,
    imageWidth,
    imageWidthTablet,
    imageWidthMobile,
    imageHeight,
    imageHeightTablet,
    imageHeightMobile,
    postLayout,
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
    z_index,
    z_indexTablet,
    z_indexMobile,
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
    excerptTypographyColor,
    metaTypographyColor,
    excerptFontStyle,
    metaFontStyle,
    titleFontStyle,
    continueFontStyle,
    excerptTextDecoration,
    metaTextDecoration,
    titleTextDecoration,
    continueTextDecoration,
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
  if ("boxed" === layout && (contentPadding || contentPaddingMobile || mobileContentPadding)) { //For compatibility with v1.3.2
    varContentPadding = contentPadding;
    varMobileContentPadding = mobileContentPadding !== 999 && contentPaddingMobile === 10 ? mobileContentPadding : contentPaddingMobile; //For compatibility with v1.3.2
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
  const isOn = responsive_globals?.is_responsive_conditions_on ?? 1;

  var selectors = {
    " ": {
      "opacity": hideWidget && isOn ? 0.2 : 1,
      "z-index": z_index,
      'padding-top': generateCSSUnit(blockTopPadding, "px"),
      'padding-right': generateCSSUnit(blockRightPadding, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPadding, "px"),
      'padding-left': generateCSSUnit(blockLeftPadding, "px"),
      'margin-top': generateCSSUnit(blockTopMargin, "px"),
      'margin-right': generateCSSUnit(blockRightMargin, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMargin, "px"),
      'margin-left': generateCSSUnit(blockLeftMargin, "px"),
    },
    " .responsive-block-editor-addons-post-grid-items": {
        "grid-column-gap": generateCSSUnit(varcolumnGap, "px"),
        "grid-row-gap": generateCSSUnit(varrowGap, "px"),
    },
    " article": {
      "background-color": bgColor,
      "border-style": blockBorderStyle,
      "border-color": blockBorderColor,
      "border-width": generateCSSUnit(blockBorderWidth, "px"),
      "border-top-left-radius": generateCSSUnit(blockTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadius, "px"),

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
      "box-shadow": hoverboxShadowColor !== '' ?
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
        hoverboxShadowPositionCSS : '',
    },
    " .is-list article": {
      "margin-bottom": generateCSSUnit(varrowGap, "px"),
    },
    " .is-list article:last-child": {
      "margin-bottom": 0,
    },
    " .responsive-block-editor-addons-block-post-grid-image": {
      "width": "fit-content",
    },
    " .responsive-block-editor-addons-block-post-grid-image a": {
      "display": "block",
      "width" : postLayout==='list' ? generateCSSUnit(imageWidth, "px") : undefined,
      "height" : postLayout==='list' ? generateCSSUnit(imageHeight, "px") : undefined,
    },
    " .responsive-block-editor-addons-block-post-grid-image img": {
      "border-top-left-radius": generateCSSUnit(imageTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(imageRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(imageBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(imageLeftRadius, "px"),
      "object-fit": "cover",
      "height": "100%",
        "margin-bottom": generateCSSUnit(imageBottomSpacing, "px"),
    },
    " .responsive-block-editor-addons-block-post-grid-text": {
      "text-align": textAlignment,
      "padding": generateCSSUnit(blockContentPadding, "px"),
      "display": "block",
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
      "text-decoration": titleTextDecoration,
      "font-style": titleFontStyle,
    },
    " .responsive-block-editor-addons-block-post-grid-title a:hover": {
      color: titleHoverColor,
    },
    " .responsive-block-editor-addons-block-post-grid-author a": {
      color: metaTypographyColor,
      "text-decoration": metaTextDecoration,
    },
    " .responsive-block-editor-addons-block-post-grid-byline time": {
      "text-decoration": metaTextDecoration,
    },
    " .responsive-block-editor-addons-block-post-grid-byline": {
      color: metaTypographyColor,
      "font-family": metaFontFamily,
      "font-weight": metaFontWeight,
      "line-height": metaLineHeight,
      "text-transform": metaTextTransform,
      "text-decoration": metaTextDecoration,
      "font-style": metaFontStyle,
      "font-size": generateCSSUnit(metaFontSize, "px"),
      "margin-bottom": generateCSSUnit(metaBottomSpacing, "px"),
    },
    " .responsive-block-editor-addons-block-post-grid-excerpt": {
      color: excerptTypographyColor,
      "font-family": excerptFontFamily,
      "font-weight": excerptFontWeight,
      "line-height": excerptLineHeight,
      "text-transform": excerptTextTransform,
      "text-decoration": excerptTextDecoration,
      "font-style": excerptFontStyle,
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
      "text-decoration": continueTextDecoration,
      "font-style": continueFontStyle,
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
      "border-style": "solid",
      "border-width": generateCSSUnit(paginationBorderWidth, "px"),
      "border-top-left-radius": generateCSSUnit(paginationTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(paginationRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(paginationBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(paginationLeftRadius, "px"),
      "margin-right": "10px",
      padding: "0.5em",
    },
    " .responsive-block-editor-addons-post-pagination-wrap > span": {
      "background-color": varpaginationActiveBorderColor,
      color: paginationTextActiveColor,
      "border-color": paginationActiveBorderColor,
      "border-style": "solid",
      "border-width": generateCSSUnit(paginationBorderWidth, "px"),
      "border-top-left-radius": generateCSSUnit(paginationTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(paginationRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(paginationBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(paginationLeftRadius, "px"),
    },
    " .responsive-block-editor-addons-post-pagination-wrap > *:last-child": {
      "margin-right": "0",
    },
    " .responsive-block-editor-addons-post-grid-items article": {
      padding: generateCSSUnit(varContentPadding, "px"),
    },
  };

  var mobile_selectors = {
    " ": {
      "opacity": hideWidgetMobile && isOn ? 0.2 : 1,
      "z-index": z_indexMobile,
      'padding-top': generateCSSUnit(blockTopPaddingMobile, "px"),
      'padding-right': generateCSSUnit(blockRightPaddingMobile, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPaddingMobile, "px"),
      'padding-left': generateCSSUnit(blockLeftPaddingMobile, "px"),
      'margin-top': generateCSSUnit(blockTopMarginMobile, "px"),
      'margin-right': generateCSSUnit(blockRightMarginMobile, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMarginMobile, "px"),
      'margin-left': generateCSSUnit(blockLeftMarginMobile, "px"),
  },
      " .responsive-block-editor-addons-block-post-grid-image img": {
          "margin-bottom": generateCSSUnit(imageBottomSpacingMobile, "px"),
          "border-top-left-radius": generateCSSUnit(imageTopRadiusMobile, "px"),
          "border-top-right-radius": generateCSSUnit(imageRightRadiusMobile, "px"),
          "border-bottom-right-radius": generateCSSUnit(imageBottomRadiusMobile, "px"),
          "border-bottom-left-radius": generateCSSUnit(imageLeftRadiusMobile, "px"),
      },
      " .responsive-block-editor-addons-block-post-grid-title": {
      "font-size": generateCSSUnit(titleFontSizeMobile, "px"),
	  "margin-bottom": generateCSSUnit(titleBottomSpacingMobile, "px") + " !important",
    },
    " .is-list article": {
      "grid-template-columns": gridTemplateColumns,
    },
    " .responsive-block-editor-addons-post-pagination-wrap > *": {
      "border-top-left-radius": generateCSSUnit(paginationTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(paginationRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(paginationBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(paginationLeftRadiusMobile, "px"),
    },
    " .responsive-block-editor-addons-post-pagination-wrap > span": {
      "border-top-left-radius": generateCSSUnit(paginationTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(paginationRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(paginationBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(paginationLeftRadiusMobile, "px"),
    },
    " .responsive-block-editor-addons-post-grid-items article": {
      padding: generateCSSUnit(varMobileContentPadding, "px"),
    },
    " .responsive-block-editor-addons-post-grid-items": {
      "grid-column-gap": generateCSSUnit(varcolumnGapMobile, "px"),
      "grid-row-gap": generateCSSUnit(varrowGapMobile, "px"),
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
      "border-top-left-radius": generateCSSUnit(blockTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusMobile, "px"),
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
  " .responsive-block-editor-addons-block-post-grid-image a": {
    "width" : postLayout==='list' ? generateCSSUnit(imageWidthMobile, "px"): undefined,
    "height" : postLayout==='list' ? generateCSSUnit(imageHeightMobile, "px"): undefined,
  },
  };

  var tablet_selectors = {
    " ": {
      "opacity": hideWidgetTablet && isOn ? 0.2 : 1,
      "z-index": z_indexTablet,
      'padding-top': generateCSSUnit(blockTopPaddingTablet, "px"),
      'padding-right': generateCSSUnit(blockRightPaddingTablet, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPaddingTablet, "px"),
      'padding-left': generateCSSUnit(blockLeftPaddingTablet, "px"),
      'margin-top': generateCSSUnit(blockTopMarginTablet, "px"),
      'margin-right': generateCSSUnit(blockRightMarginTablet, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMarginTablet, "px"),
      'margin-left': generateCSSUnit(blockLeftMarginTablet, "px"),
    },
      " .responsive-block-editor-addons-block-post-grid-image img": {
          "margin-bottom": generateCSSUnit(imageBottomSpacingTablet, "px"),
          "border-top-left-radius": generateCSSUnit(imageTopRadiusTablet, "px"),
          "border-top-right-radius": generateCSSUnit(imageRightRadiusTablet, "px"),
          "border-bottom-right-radius": generateCSSUnit(imageBottomRadiusTablet, "px"),
          "border-bottom-left-radius": generateCSSUnit(imageLeftRadiusTablet, "px"),
      },
      " .responsive-block-editor-addons-block-post-grid-title": {
      "font-size": generateCSSUnit(titleFontSizeTablet, "px"),
	  "margin-bottom": generateCSSUnit(titleBottomSpacingTablet, "px") + " !important",
    },
    " .responsive-block-editor-addons-post-pagination-wrap > *": {
      "border-top-left-radius": generateCSSUnit(paginationTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(paginationRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(paginationBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(paginationLeftRadiusTablet, "px"),
    },
    " .responsive-block-editor-addons-post-pagination-wrap > span": {
      "border-top-left-radius": generateCSSUnit(paginationTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(paginationRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(paginationBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(paginationLeftRadiusTablet, "px"),
    },
    " .responsive-block-editor-addons-post-grid-items article": {
      padding: generateCSSUnit(varTabletContentPadding, "px"),
    },
    " .responsive-block-editor-addons-post-grid-items": {
      "grid-column-gap": generateCSSUnit(varcolumnGapTablet, "px"),
      "grid-row-gap": generateCSSUnit(varrowGapTablet, "px"),
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
      "border-top-left-radius": generateCSSUnit(blockTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusTablet, "px"),
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
  " .responsive-block-editor-addons-block-post-grid-image a": {
    "width" : postLayout==='list' ? generateCSSUnit(imageWidthTablet, "px"): undefined,
    "height" : postLayout==='list' ? generateCSSUnit(imageHeightTablet, "px"): undefined,
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
