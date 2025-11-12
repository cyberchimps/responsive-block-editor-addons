/**
 * Returns Dynamic Generated CSS
 */
import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";

const mapAlign = (a) => {
  if (!a) return undefined;
  if (a === "start") return "left";
  if (a === "end") return "right";
  return a;
};

function EditorStyles(props) {
  const {
    block_id,
    columnsize,
    radius,
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
    filterTabAlignment,
    filterTabAlignmentTablet,
    filterTabAlignmentMobile,
    filterTabTypographyFontStyle,
  } = props.attributes;
  const isOn = responsive_globals?.is_responsive_conditions_on ?? 1;

  var selectors = {
    " ": {
      "opacity": hideWidget && isOn ? 0.2 : 1,
      'padding-top': generateCSSUnit(blockTopPadding, "px"),
      'padding-right': generateCSSUnit(blockRightPadding, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPadding, "px"),
      'padding-left': generateCSSUnit(blockLeftPadding, "px"),
      'margin-top': generateCSSUnit(blockTopMargin, "px"),
      'margin-right': generateCSSUnit(blockRightMargin, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMargin, "px"),
      'margin-left': generateCSSUnit(blockLeftMargin, "px"),
      '--filter-tab-hover-background-color': filterTabHoverBackgroundColor || "#0073aa",
      '--filter-tab-hover-text-color': filterTabHoverTextColor || "#fff",
    },
    " .rba-gallery-items": {
      'display': 'grid',
      'grid-template-columns': `repeat(${columnsize || 3}, 1fr)`,
    },
    " .responsive-block-editor-addons-gallery--figure img": {
      'border-radius': radius && radius > 0 ? generateCSSUnit(radius, "px") : undefined,
    },
    " .rba-filter-tabs, .gallery-filter-wrapper, .category-filters": {
      'font-family': filterTabTypographyFontFamily && filterTabTypographyFontFamily !== "Default" ? filterTabTypographyFontFamily : undefined,
      'font-size': filterTabTypographyFontSize ? generateCSSUnit(filterTabTypographyFontSize, 'px') : '14px',
      'font-weight': filterTabTypographyFontWeight || 'normal',
      'line-height': filterTabTypographyLineHeight || 'normal',
      'letter-spacing': filterTabTypographyLetterSpacing ? generateCSSUnit(filterTabTypographyLetterSpacing, 'px') : 'normal',
      'text-transform': filterTabTypographyTextTransform || 'none',
      'text-decoration': filterTabTypographyTextDecoration || 'none',
      'margin-bottom': filterTabBottomSpacing ? generateCSSUnit(filterTabBottomSpacing, 'px') : '20px',
      'text-align': mapAlign(filterTabAlignment),
    },
    " .rba-gf-tabs .gallery-filter-button, .gallery-filter-button.dropdown-item": {
      'font-family': filterTabTypographyFontFamily && filterTabTypographyFontFamily !== "Default" ? filterTabTypographyFontFamily : undefined,
      'font-size': filterTabTypographyFontSize ? generateCSSUnit(filterTabTypographyFontSize, 'px') : '14px',
      'font-weight': filterTabTypographyFontWeight || 'normal',
      'font-style': filterTabTypographyFontStyle || 'normal',
      'line-height': filterTabTypographyLineHeight || 'normal',
      'letter-spacing': filterTabTypographyLetterSpacing ? generateCSSUnit(filterTabTypographyLetterSpacing, 'px') : 'normal',
      'text-transform': filterTabTypographyTextTransform || 'none',
      'text-decoration': filterTabTypographyTextDecoration || 'none',
      'padding-top': filterTabTopPadding !== undefined && filterTabTopPadding !== '' ? generateCSSUnit(filterTabTopPadding, 'px') : '6px',
      'padding-right': filterTabRightPadding !== undefined && filterTabRightPadding !== '' ? generateCSSUnit(filterTabRightPadding, 'px') : '12px',
      'padding-bottom': filterTabBottomPadding !== undefined && filterTabBottomPadding !== '' ? generateCSSUnit(filterTabBottomPadding, 'px') : '6px',
      'padding-left': filterTabLeftPadding !== undefined && filterTabLeftPadding !== '' ? generateCSSUnit(filterTabLeftPadding, 'px') : '12px',
      'margin-right': filterTabSpacingBetween !== undefined && filterTabSpacingBetween !== '' ? generateCSSUnit(filterTabSpacingBetween, 'px') : '10px',
      'margin-bottom': '8px',
      'background-color': filterTabBackgroundColor || '#f2f2f2',
      'color': filterTabTextColor || '#000',
      'border-radius': '4px',
      'cursor': 'pointer',
      'border-top': filterTabBorderStyle !== "none" ? `${filterTabTopBorderwidth !== undefined && filterTabTopBorderwidth !== '' ? filterTabTopBorderwidth : 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
      'border-right': filterTabBorderStyle !== "none" ? `${filterTabRightBorderwidth !== undefined && filterTabRightBorderwidth !== '' ? filterTabRightBorderwidth : 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
      'border-bottom': filterTabBorderStyle !== "none" ? `${filterTabBottomBorderwidth !== undefined && filterTabBottomBorderwidth !== '' ? filterTabBottomBorderwidth : 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
      'border-left': filterTabBorderStyle !== "none" ? `${filterTabLeftBorderwidth !== undefined && filterTabLeftBorderwidth !== '' ? filterTabLeftBorderwidth : 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
    },
    " .rba-filter-tabs .gallery-filter-button.is-active, .rba-filter-tabs .gallery-filter-button:hover, .gallery-filter-wrapper button:hover, .category-filters button:hover": {
      'background-color': filterTabHoverBackgroundColor || '#0073aa',
      'color': filterTabHoverTextColor || '#fff',
    }
  };

  var mobile_selectors = {
    " ": {
      "opacity": hideWidgetMobile && isOn ? 0.2 : 1,
      'padding-top': generateCSSUnit(blockTopPaddingMobile, "px"),
      'padding-right': generateCSSUnit(blockRightPaddingMobile, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPaddingMobile, "px"),
      'padding-left': generateCSSUnit(blockLeftPaddingMobile, "px"),
      'margin-top': generateCSSUnit(blockTopMarginMobile, "px"),
      'margin-right': generateCSSUnit(blockRightMarginMobile, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMarginMobile, "px"),
      'margin-left': generateCSSUnit(blockLeftMarginMobile, "px"),
    },
    " .rba-filter-tabs, .gallery-filter-wrapper, .category-filters": {
      'font-size': filterTabTypographyFontSizeMobile ? generateCSSUnit(filterTabTypographyFontSizeMobile, 'px') : undefined,
      'margin-bottom': filterTabBottomSpacingMobile ? generateCSSUnit(filterTabBottomSpacingMobile, 'px') : undefined,
      'text-align': mapAlign(filterTabAlignmentMobile),
    },
    " .rba-filter-tabs .gallery-filter-button, .gallery-filter-button.dropdown-item": {
      'font-size': filterTabTypographyFontSizeMobile ? generateCSSUnit(filterTabTypographyFontSizeMobile, 'px') : undefined,
      'padding-top': filterTabTopPaddingMobile !== undefined && filterTabTopPaddingMobile !== '' ? generateCSSUnit(filterTabTopPaddingMobile, 'px') : undefined,
      'padding-right': filterTabRightPaddingMobile !== undefined && filterTabRightPaddingMobile !== '' ? generateCSSUnit(filterTabRightPaddingMobile, 'px') : undefined,
      'padding-bottom': filterTabBottomPaddingMobile !== undefined && filterTabBottomPaddingMobile !== '' ? generateCSSUnit(filterTabBottomPaddingMobile, 'px') : undefined,
      'padding-left': filterTabLeftPaddingMobile !== undefined && filterTabLeftPaddingMobile !== '' ? generateCSSUnit(filterTabLeftPaddingMobile, 'px') : undefined,
      'margin-right': filterTabSpacingBetweenMobile !== undefined && filterTabSpacingBetweenMobile !== '' ? generateCSSUnit(filterTabSpacingBetweenMobile, 'px') : undefined,
      'border-top': filterTabBorderStyle !== "none" ? `${filterTabTopBorderwidthMobile !== undefined && filterTabTopBorderwidthMobile !== '' ? filterTabTopBorderwidthMobile : 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
      'border-right': filterTabBorderStyle !== "none" ? `${filterTabRightBorderwidthMobile !== undefined && filterTabRightBorderwidthMobile !== '' ? filterTabRightBorderwidthMobile : 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
      'border-bottom': filterTabBorderStyle !== "none" ? `${filterTabBottomBorderwidthMobile !== undefined && filterTabBottomBorderwidthMobile !== '' ? filterTabBottomBorderwidthMobile : 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
      'border-left': filterTabBorderStyle !== "none" ? `${filterTabLeftBorderwidthMobile !== undefined && filterTabLeftBorderwidthMobile !== '' ? filterTabLeftBorderwidthMobile : 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
    },
  };

  var tablet_selectors = {
    " ": {
      "opacity": hideWidgetTablet && isOn ? 0.2 : 1,
      'padding-top': generateCSSUnit(blockTopPaddingTablet, "px"),
      'padding-right': generateCSSUnit(blockRightPaddingTablet, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPaddingTablet, "px"),
      'padding-left': generateCSSUnit(blockLeftPaddingTablet, "px"),
      'margin-top': generateCSSUnit(blockTopMarginTablet, "px"),
      'margin-right': generateCSSUnit(blockRightMarginTablet, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMarginTablet, "px"),
      'margin-left': generateCSSUnit(blockLeftMarginTablet, "px"),
    },
    " .rba-filter-tabs, .gallery-filter-wrapper, .category-filters": {
      'font-size': filterTabTypographyFontSizeTablet ? generateCSSUnit(filterTabTypographyFontSizeTablet, 'px') : undefined,
      'margin-bottom': filterTabBottomSpacingTablet ? generateCSSUnit(filterTabBottomSpacingTablet, 'px') : undefined,
      'text-align': mapAlign(filterTabAlignmentTablet),
    },
    " .rba-gf-tabs .gallery-filter-button, .gallery-filter-button.dropdown-item": {
      'font-size': filterTabTypographyFontSizeTablet ? generateCSSUnit(filterTabTypographyFontSizeTablet, 'px') : undefined,
      'padding-top': filterTabTopPaddingTablet !== undefined && filterTabTopPaddingTablet !== '' ? generateCSSUnit(filterTabTopPaddingTablet, 'px') : undefined,
      'padding-right': filterTabRightPaddingTablet !== undefined && filterTabRightPaddingTablet !== '' ? generateCSSUnit(filterTabRightPaddingTablet, 'px') : undefined,
      'padding-bottom': filterTabBottomPaddingTablet !== undefined && filterTabBottomPaddingTablet !== '' ? generateCSSUnit(filterTabBottomPaddingTablet, 'px') : undefined,
      'padding-left': filterTabLeftPaddingTablet !== undefined && filterTabLeftPaddingTablet !== '' ? generateCSSUnit(filterTabLeftPaddingTablet, 'px') : undefined,
      'margin-right': filterTabSpacingBetweenTablet !== undefined && filterTabSpacingBetweenTablet !== '' ? generateCSSUnit(filterTabSpacingBetweenTablet, 'px') : undefined,
      'border-top': filterTabBorderStyle !== "none" ? `${filterTabTopBorderwidthTablet !== undefined && filterTabTopBorderwidthTablet !== '' ? filterTabTopBorderwidthTablet : 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
      'border-right': filterTabBorderStyle !== "none" ? `${filterTabRightBorderwidthTablet !== undefined && filterTabRightBorderwidthTablet !== '' ? filterTabRightBorderwidthTablet : 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
      'border-bottom': filterTabBorderStyle !== "none" ? `${filterTabBottomBorderwidthTablet !== undefined && filterTabBottomBorderwidthTablet !== '' ? filterTabBottomBorderwidthTablet : 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
      'border-left': filterTabBorderStyle !== "none" ? `${filterTabLeftBorderwidthTablet !== undefined && filterTabLeftBorderwidthTablet !== '' ? filterTabLeftBorderwidthTablet : 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
    },
  };

  var styling_css = "";
  var idSel = `.wp-block-responsive-block-editor-addons-gallery-masonry.block-${block_id}`;

  styling_css = generateCSS(selectors, idSel);
  styling_css += generateCSS(tablet_selectors, idSel, true, "tablet");
  styling_css += generateCSS(mobile_selectors, idSel, true, "mobile");

  return styling_css;
}

export default EditorStyles;