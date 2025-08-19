/**
 * WordPress dependencies
 */
import { RichText } from "@wordpress/block-editor";
import { getFontFamily } from "../../../utils/font";

const save = ({ attributes, className }) => {
  const {
    captions,
    gutter,
    gutterMobile,
    gutterTablet,
    linkTo,
    lightbox,
    rel,
    target,
    columnsize,
    customHeight,
    customWidth,
    images,
    block_id,
    enableCategoryFilter,

    allTabLabel = "All",
    setDefaultCategory,
    defaultCategory,
    filterTabAlignment,
    filterTabAlignmentTablet,
    filterTabAlignmentMobile,
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
  } = attributes;

  if (!images || images.length === 0) {
    return null;
  }

  const sortedImages = [...images].sort((a, b) => a.order - b.order);

  const appendClass = `block-${block_id}`;
  const outerClasses = className ? `${className} ${appendClass}` : appendClass;

  // Get unique categories for filter buttons
  const categories = Array.from(
    new Set(
      sortedImages
        .map((image) => image.rba_category || "uncategorized")
        .filter((cat) => cat && cat !== "uncategorized")
    )
  );

  // Build the complete HTML structure
  const masonryStyles = {
    display: "grid",
    gridTemplateColumns: `repeat(${columnsize}, 1fr)`,
    gap: `${gutter}px`,
  };

  const buttonStyles = {
    marginRight: "0.5em",
    padding: "0.4em 0.8em",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const shouldShowFilters = enableCategoryFilter;

  // Determine which category should be active by default
  const defaultActiveCategory = setDefaultCategory && defaultCategory ? defaultCategory : "All";

  // Map alignment values from WordPress toolbar to CSS values
  const getAlignmentValue = (alignment) => {
    if (!alignment) return "left";
    switch (alignment) {
      case "start":
        return "left";
      case "center":
        return "center";
      case "end":
        return "right";
      default:
        return alignment;
    }
  };

  const desktopAlignment = getAlignmentValue(filterTabAlignment);
  const tabletAlignment = getAlignmentValue(filterTabAlignmentTablet);
  const mobileAlignment = getAlignmentValue(filterTabAlignmentMobile);

  return (
    <div className={outerClasses} data-rba-gallery-block>
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <style>
              .wp-block-responsive-block-editor-addons-gallery-masonry.block-${block_id} .gallery-filter-button:hover {
                background-color: ${filterTabHoverBackgroundColor || "#0073aa"} !important;
                color: ${filterTabHoverTextColor || "#fff"} !important;
              }
            </style>
          `
        }}
      />
      {shouldShowFilters && (
        <div 
          className={`gallery-filter-wrapper filter-tab-alignment-${desktopAlignment}`}
          style={{ 
            marginBottom: filterTabBottomSpacing !== undefined ? `${filterTabBottomSpacing}px` : "20px",
            textAlign: desktopAlignment,
            fontFamily: filterTabTypographyFontFamily && filterTabTypographyFontFamily !== "Default" ? getFontFamily(filterTabTypographyFontFamily) : undefined,
            fontSize: filterTabTypographyFontSize ? `${filterTabTypographyFontSize}px` : undefined,
            fontWeight: filterTabTypographyFontWeight || undefined,
            lineHeight: filterTabTypographyLineHeight || undefined,
            letterSpacing: filterTabTypographyLetterSpacing ? `${filterTabTypographyLetterSpacing}px` : undefined,
            textTransform: filterTabTypographyTextTransform || undefined,
            textDecoration: filterTabTypographyTextDecoration || undefined,
            '--filter-tab-bottom-spacing-tablet': filterTabBottomSpacingTablet !== undefined ? `${filterTabBottomSpacingTablet}px` : undefined,
            '--filter-tab-bottom-spacing-mobile': filterTabBottomSpacingMobile !== undefined ? `${filterTabBottomSpacingMobile}px` : undefined,
            '--filter-tab-padding-top-tablet': filterTabTopPaddingTablet !== undefined ? `${filterTabTopPaddingTablet}px` : undefined,
            '--filter-tab-padding-right-tablet': filterTabRightPaddingTablet !== undefined ? `${filterTabRightPaddingTablet}px` : undefined,
            '--filter-tab-padding-bottom-tablet': filterTabBottomPaddingTablet !== undefined ? `${filterTabBottomPaddingTablet}px` : undefined,
            '--filter-tab-padding-left-tablet': filterTabLeftPaddingTablet !== undefined ? `${filterTabLeftPaddingTablet}px` : undefined,
            '--filter-tab-padding-top-mobile': filterTabTopPaddingMobile !== undefined ? `${filterTabTopPaddingMobile}px` : undefined,
            '--filter-tab-padding-right-mobile': filterTabRightPaddingMobile !== undefined ? `${filterTabRightPaddingMobile}px` : undefined,
            '--filter-tab-padding-bottom-mobile': filterTabBottomPaddingMobile !== undefined ? `${filterTabBottomPaddingMobile}px` : undefined,
            '--filter-tab-padding-left-mobile': filterTabLeftPaddingMobile !== undefined ? `${filterTabLeftPaddingMobile}px` : undefined,
            '--filter-tab-spacing-between-tablet': filterTabSpacingBetweenTablet !== undefined ? `${filterTabSpacingBetweenTablet}px` : undefined,
            '--filter-tab-spacing-between-mobile': filterTabSpacingBetweenMobile !== undefined ? `${filterTabSpacingBetweenMobile}px` : undefined,
            '--filter-tab-font-size-tablet': filterTabTypographyFontSizeTablet ? `${filterTabTypographyFontSizeTablet}px` : undefined,
            '--filter-tab-font-size-mobile': filterTabTypographyFontSizeMobile ? `${filterTabTypographyFontSizeMobile}px` : undefined,
            '--filter-tab-border-style': filterTabBorderStyle || undefined,
            '--filter-tab-border-color': filterTabBorderColor || undefined,
            '--filter-tab-border-top-width-tablet': filterTabTopBorderwidthTablet !== undefined ? `${filterTabTopBorderwidthTablet}px` : undefined,
            '--filter-tab-border-right-width-tablet': filterTabRightBorderwidthTablet !== undefined ? `${filterTabRightBorderwidthTablet}px` : undefined,
            '--filter-tab-border-bottom-width-tablet': filterTabBottomBorderwidthTablet !== undefined ? `${filterTabBottomBorderwidthTablet}px` : undefined,
            '--filter-tab-border-left-width-tablet': filterTabLeftBorderwidthTablet !== undefined ? `${filterTabLeftBorderwidthTablet}px` : undefined,
            '--filter-tab-border-top-width-mobile': filterTabTopBorderwidthMobile !== undefined ? `${filterTabTopBorderwidthMobile}px` : undefined,
            '--filter-tab-border-right-width-mobile': filterTabRightBorderwidthMobile !== undefined ? `${filterTabRightBorderwidthMobile}px` : undefined,
            '--filter-tab-border-bottom-width-mobile': filterTabBottomBorderwidthMobile !== undefined ? `${filterTabBottomBorderwidthMobile}px` : undefined,
            '--filter-tab-border-left-width-mobile': filterTabLeftBorderwidthMobile !== undefined ? `${filterTabLeftBorderwidthMobile}px` : undefined,
          }}
          data-tab-alignment={desktopAlignment}
          data-tab-alignment-tablet={tabletAlignment}
          data-tab-alignment-mobile={mobileAlignment}
        >
                    {categories.map((cat) => (
            <button 
              key={cat}
              className={`gallery-filter-button ${defaultActiveCategory === cat ? "is-active" : ""}`}
              data-category={cat}
              style={{
                marginRight: filterTabSpacingBetween !== undefined ? `${filterTabSpacingBetween}px` : "10px",
                marginBottom: "8px",
                padding: `${filterTabTopPadding !== undefined ? filterTabTopPadding : 6}px ${filterTabRightPadding !== undefined ? filterTabRightPadding : 12}px ${filterTabBottomPadding !== undefined ? filterTabBottomPadding : 6}px ${filterTabLeftPadding !== undefined ? filterTabLeftPadding : 12}px`,
                cursor: "pointer",
                borderTop: filterTabBorderStyle !== "none" ? `${filterTabTopBorderwidth !== undefined ? filterTabTopBorderwidth : 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
                borderRight: filterTabBorderStyle !== "none" ? `${filterTabRightBorderwidth !== undefined ? filterTabRightBorderwidth : 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
                borderBottom: filterTabBorderStyle !== "none" ? `${filterTabBottomBorderwidth !== undefined ? filterTabBottomBorderwidth : 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
                borderLeft: filterTabBorderStyle !== "none" ? `${filterTabLeftBorderwidth !== undefined ? filterTabLeftBorderwidth : 1}px ${filterTabBorderStyle || "solid"} ${filterTabBorderColor || "#ccc"}` : "none",
                borderRadius: "4px",
                backgroundColor: defaultActiveCategory === cat ? (filterTabHoverBackgroundColor || "#0073aa") : (filterTabBackgroundColor || "#f2f2f2"),
                color: defaultActiveCategory === cat ? (filterTabHoverTextColor || "#fff") : (filterTabTextColor || "#000"),
                fontFamily: filterTabTypographyFontFamily && filterTabTypographyFontFamily !== "Default" ? getFontFamily(filterTabTypographyFontFamily) : undefined,
                fontSize: filterTabTypographyFontSize ? `${filterTabTypographyFontSize}px` : undefined,
                fontWeight: filterTabTypographyFontWeight || undefined,
                lineHeight: filterTabTypographyLineHeight || undefined,
                letterSpacing: filterTabTypographyLetterSpacing ? `${filterTabTypographyLetterSpacing}px` : undefined,
                textTransform: filterTabTypographyTextTransform || undefined,
                textDecoration: filterTabTypographyTextDecoration || undefined,
              }}
            >
              {cat === "All" ? allTabLabel : cat}
            </button>
          ))}
        

      </div>
    )}
      <div className="rba-gallery-items" style={masonryStyles}>
        {sortedImages.map((image) => {
          let href = "";

          switch (linkTo) {
            case "media":
              href = image.url;
              break;
            case "attachment":
              href = image.link;
              break;
          }

          if (image.imgLink) {
            href = image.imgLink;
          }

          if (lightbox) {
            href = "";
          }

          const imgStyle = {
            width: customWidth || "auto",
            height: customHeight || "auto",
          };
          const imgClass = image.id ? `wp-image-${image.id}` : "";
          const imageCategory = image.rba_category || "uncategorized";
          
          // Determine if this image should be visible by default
          const shouldShowByDefault = 
            defaultActiveCategory === "All" || 
            defaultActiveCategory === "all" || 
            defaultActiveCategory === imageCategory;
          
          const img = (
            <img
              style={imgStyle}
              src={image.url}
              alt={image.alt || ""}
              data-id={image.id || ""}
              data-category={imageCategory}
              className={imgClass}
            />
          );

          const imageContent = href && linkTo === "custom" 
            ? <a href={href} target={target || ""} rel={rel || ""}>{img}</a>
            : img;

          return (
            <li 
              key={image.id || image.url}
              className="responsive-block-editor-addons-gallery--item" 
              data-category={imageCategory}
              style={{ display: shouldShowByDefault ? "" : "none" }}
            >
              <figure className="responsive-block-editor-addons-gallery--figure">
                {imageContent}
                {captions && image.caption && image.caption.length > 0 && (
                  <RichText.Content
                    tagName="figcaption"
                    className="responsive-block-editor-addons-gallery--caption"
                    value={image.caption}
                  />
                )}
              </figure>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default save; 