/**
 * Returns Dynamic Generated CSS
 */
import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";
import { getFontFamily } from "../../../utils/font";

function EditorStyles(props) {
  const {
    block_id,
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
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
    filterTabTypographyFontFamily,
    filterTabTypographyFontSize,
    filterTabTypographyFontSizeTablet,
    filterTabTypographyFontSizeMobile,
    filterTabTypographyFontWeight,
    filterTabTypographyLineHeight,
    filterTabTypographyLetterSpacing,
    filterTabTypographyTextTransform,
    filterTabTypographyTextDecoration,
    filterTabTopPadding,
    filterTabRightPadding,
    filterTabBottomPadding,
    filterTabLeftPadding,
    filterTabTopPaddingTablet,
    filterTabRightPaddingTablet,
    filterTabBottomPaddingTablet,
    filterTabLeftPaddingTablet,
    filterTabTopPaddingMobile,
    filterTabRightPaddingMobile,
    filterTabBottomPaddingMobile,
    filterTabLeftPaddingMobile,
    filterTabIsPaddingControlConnected,
    filterTabSpacingBetween,
    filterTabSpacingBetweenTablet,
    filterTabSpacingBetweenMobile,
    filterTabBottomSpacing,
    filterTabBottomSpacingTablet,
    filterTabBottomSpacingMobile,
    filterTabTextColor,
    filterTabBackgroundColor,
    filterTabHoverTextColor,
    filterTabHoverBackgroundColor,
    filterTabBorderStyle,
    filterTabTopBorderwidth,
    filterTabRightBorderwidth,
    filterTabBottomBorderwidth,
    filterTabLeftBorderwidth,
    filterTabTopBorderwidthTablet,
    filterTabRightBorderwidthTablet,
    filterTabBottomBorderwidthTablet,
    filterTabLeftBorderwidthTablet,
    filterTabTopBorderwidthMobile,
    filterTabRightBorderwidthMobile,
    filterTabBottomBorderwidthMobile,
    filterTabLeftBorderwidthMobile,
    filterTabIsBorderwidthControlConnected,
    filterTabBorderColor,
  } = props.attributes;

  var selectors = {
    " ": {
      "opacity": hideWidget? 0.2 : 1,
      'padding-top': generateCSSUnit(blockTopPadding, "px"),
      'padding-right': generateCSSUnit(blockRightPadding, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPadding, "px"),
      'padding-left': generateCSSUnit(blockLeftPadding, "px"),
      'margin-top': generateCSSUnit(blockTopMargin, "px"),
      'margin-right': generateCSSUnit(blockRightMargin, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMargin, "px"),
      'margin-left': generateCSSUnit(blockLeftMargin, "px"),
    },
    " .gallery-filter-wrapper, .category-filters": {
      'font-family': filterTabTypographyFontFamily && filterTabTypographyFontFamily !== "Default" ? getFontFamily(filterTabTypographyFontFamily) : undefined,
      'font-size': filterTabTypographyFontSize ? generateCSSUnit(filterTabTypographyFontSize, 'px') : '14px',
      'font-weight': filterTabTypographyFontWeight || 'normal',
      'line-height': filterTabTypographyLineHeight || 'normal',
      'letter-spacing': filterTabTypographyLetterSpacing ? generateCSSUnit(filterTabTypographyLetterSpacing, 'px') : 'normal',
      'text-transform': filterTabTypographyTextTransform || 'none',
      'text-decoration': filterTabTypographyTextDecoration || 'none',
      'margin-bottom': filterTabBottomSpacing ? generateCSSUnit(filterTabBottomSpacing, 'px') : '20px',
    },
    " .gallery-filter-wrapper button, .category-filters button": {
      'font-family': filterTabTypographyFontFamily && filterTabTypographyFontFamily !== "Default" ? getFontFamily(filterTabTypographyFontFamily) : undefined,
      'font-size': filterTabTypographyFontSize ? generateCSSUnit(filterTabTypographyFontSize, 'px') : '14px',
      'font-weight': filterTabTypographyFontWeight || 'normal',
      'line-height': filterTabTypographyLineHeight || 'normal',
      'letter-spacing': filterTabTypographyLetterSpacing ? generateCSSUnit(filterTabTypographyLetterSpacing, 'px') : 'normal',
      'text-transform': filterTabTypographyTextTransform || 'none',
      'text-decoration': filterTabTypographyTextDecoration || 'none',
      'padding-top': filterTabTopPadding ? generateCSSUnit(filterTabTopPadding, 'px') : '6px',
      'padding-right': filterTabRightPadding ? generateCSSUnit(filterTabRightPadding, 'px') : '12px',
      'padding-bottom': filterTabBottomPadding ? generateCSSUnit(filterTabBottomPadding, 'px') : '6px',
      'padding-left': filterTabLeftPadding ? generateCSSUnit(filterTabLeftPadding, 'px') : '12px',
      'margin-right': filterTabSpacingBetween ? generateCSSUnit(filterTabSpacingBetween, 'px') : '10px',
      'margin-bottom': '8px',
      'background-color': filterTabBackgroundColor || '#f2f2f2',
      'color': filterTabTextColor || '#000',
      'border-radius': '4px',
      'cursor': 'pointer',
      'border-top': filterTabBorderStyle !== "none" ? `${filterTabTopBorderwidth || 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
      'border-right': filterTabBorderStyle !== "none" ? `${filterTabRightBorderwidth || 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
      'border-bottom': filterTabBorderStyle !== "none" ? `${filterTabBottomBorderwidth || 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
      'border-left': filterTabBorderStyle !== "none" ? `${filterTabLeftBorderwidth || 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
    },
    " .gallery-filter-wrapper button:hover, .category-filters button:hover": {
      'background-color': filterTabHoverBackgroundColor || '#0073aa',
      'color': filterTabHoverTextColor || '#fff',
      'border-top': filterTabBorderStyle !== "none" ? `${filterTabTopBorderwidth || 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
      'border-right': filterTabBorderStyle !== "none" ? `${filterTabRightBorderwidth || 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
      'border-bottom': filterTabBorderStyle !== "none" ? `${filterTabBottomBorderwidth || 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
      'border-left': filterTabBorderStyle !== "none" ? `${filterTabLeftBorderwidth || 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
    }
  };

  var mobile_selectors = {
    " ": {
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
    " .gallery-filter-wrapper, .category-filters": {
      'font-size': filterTabTypographyFontSizeMobile ? generateCSSUnit(filterTabTypographyFontSizeMobile, 'px') : undefined,
      'margin-bottom': filterTabBottomSpacingMobile ? generateCSSUnit(filterTabBottomSpacingMobile, 'px') : undefined,
    },
    " .gallery-filter-wrapper button, .category-filters button": {
      'font-size': filterTabTypographyFontSizeMobile ? generateCSSUnit(filterTabTypographyFontSizeMobile, 'px') : undefined,
      'padding-top': filterTabTopPaddingMobile ? generateCSSUnit(filterTabTopPaddingMobile, 'px') : undefined,
      'padding-right': filterTabRightPaddingMobile ? generateCSSUnit(filterTabRightPaddingMobile, 'px') : undefined,
      'padding-bottom': filterTabBottomPaddingMobile ? generateCSSUnit(filterTabBottomPaddingMobile, 'px') : undefined,
      'padding-left': filterTabLeftPaddingMobile ? generateCSSUnit(filterTabLeftPaddingMobile, 'px') : undefined,
      'margin-right': filterTabSpacingBetweenMobile ? generateCSSUnit(filterTabSpacingBetweenMobile, 'px') : undefined,
    },
    " .gallery-filter-wrapper button:hover, .category-filters button:hover": {
      'border-top': filterTabBorderStyle !== "none" ? `${filterTabTopBorderwidthMobile || 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
      'border-right': filterTabBorderStyle !== "none" ? `${filterTabRightBorderwidthMobile || 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
      'border-bottom': filterTabBorderStyle !== "none" ? `${filterTabBottomBorderwidthMobile || 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
      'border-left': filterTabBorderStyle !== "none" ? `${filterTabLeftBorderwidthMobile || 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
    }
  };

  var tablet_selectors = {
    " ": {
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
    " .gallery-filter-wrapper, .category-filters": {
      'font-size': filterTabTypographyFontSizeTablet ? generateCSSUnit(filterTabTypographyFontSizeTablet, 'px') : undefined,
      'margin-bottom': filterTabBottomSpacingTablet ? generateCSSUnit(filterTabBottomSpacingTablet, 'px') : undefined,
    },
    " .gallery-filter-wrapper button, .category-filters button": {
      'font-size': filterTabTypographyFontSizeTablet ? generateCSSUnit(filterTabTypographyFontSizeTablet, 'px') : undefined,
      'padding-top': filterTabTopPaddingTablet ? generateCSSUnit(filterTabTopPaddingTablet, 'px') : undefined,
      'padding-right': filterTabRightPaddingTablet ? generateCSSUnit(filterTabRightPaddingTablet, 'px') : undefined,
      'padding-bottom': filterTabBottomPaddingTablet ? generateCSSUnit(filterTabBottomPaddingTablet, 'px') : undefined,
      'padding-left': filterTabLeftPaddingTablet ? generateCSSUnit(filterTabLeftPaddingTablet, 'px') : undefined,
      'margin-right': filterTabSpacingBetweenTablet ? generateCSSUnit(filterTabSpacingBetweenTablet, 'px') : undefined,
    },
    " .gallery-filter-wrapper button:hover, .category-filters button:hover": {
      'border-top': filterTabBorderStyle !== "none" ? `${filterTabTopBorderwidthTablet || 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
      'border-right': filterTabBorderStyle !== "none" ? `${filterTabRightBorderwidthTablet || 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
      'border-bottom': filterTabBorderStyle !== "none" ? `${filterTabBottomBorderwidthTablet || 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
      'border-left': filterTabBorderStyle !== "none" ? `${filterTabLeftBorderwidthTablet || 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
    }
  };

  var styling_css = "";
  var id = `.wp-block-responsive-block-editor-addons-gallery-masonry.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
