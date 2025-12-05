/**
 * WordPress dependencies
 */
import { RichText } from "@wordpress/block-editor";

const save = ({ attributes, className }) => {
  const {
    captions,
    captionStyle = "dark",
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
    enableResponsiveSupport,
  } = attributes;

  if (!images || images.length === 0) {
    return null;
  }

  const sortedImages = [...images].sort((a, b) => a.order - b.order);

  const appendClass = `responsive-block-editor-addons-block-gallery-masonry block-${block_id}`;
  let outerClasses = className ? `${className} ${appendClass}` : appendClass;
  
  // Add caption style class
  if (captions) {
    outerClasses += ` has-caption-style-${captionStyle}`;
  }

  // Get unique categories for filter buttons
  const categories = Array.from(
    new Set(
      sortedImages
        .map((image) => image.rba_category || "uncategorized")
        .filter((cat) => cat && cat !== "uncategorized")
    )
  ).sort(); // Sort alphabetically for consistent order

  // Build the complete HTML structure
  const shouldShowFilters = enableCategoryFilter;

  // Determine which category should be active by default
  const defaultActiveCategory = setDefaultCategory && defaultCategory ? defaultCategory : "All";

  return (
    <div className={`${outerClasses} ${lightbox ? 'has-lightbox' : ''}`} data-rba-gallery-block>
      {shouldShowFilters && (
        <div className={`gallery-filter-wrapper ${enableResponsiveSupport ? 'has-responsive-support' : ''}`}>
          {/* Desktop tabs */}
          <div className="rba-gf-tabs">
            <button 
              className={`gallery-filter-button ${defaultActiveCategory === "All" || defaultActiveCategory === "all" ? "is-active" : ""}`}
              data-category="All"
            >
              {allTabLabel}
            </button>
            {categories.map((cat) => (
              <button 
                key={cat}
                className={`gallery-filter-button ${defaultActiveCategory === cat ? "is-active" : ""}`}
                data-category={cat}
              >
                {cat}
              </button>
            ))}
          </div>
          
          {/* Mobile dropdown */}
          {enableResponsiveSupport && (
            <details className="rba-gf-dropdown">
              <summary className="gallery-filter-button rba-gf-toggle">
                {defaultActiveCategory === "All" || defaultActiveCategory === "all" ? allTabLabel : defaultActiveCategory}
              </summary>
              <ul className="rba-gf-menu">
                <li>
                  <button 
                    className={`gallery-filter-button dropdown-item ${defaultActiveCategory === "All" || defaultActiveCategory === "all" ? "is-active" : ""}`}
                    data-category="All"
                  >
                    {allTabLabel}
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat}>
                    <button 
                      className={`gallery-filter-button dropdown-item ${defaultActiveCategory === cat ? "is-active" : ""}`}
                      data-category={cat}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </details>
          )}
        </div>
      )}
      <div 
        className="rba-gallery-items"
        data-columnsize={columnsize}
      >
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

          const imgClass = image.id ? `wp-image-${image.id}` : "";
          const imageCategory = image.rba_category || "uncategorized";
          
          // Determine if this image should be visible by default
          const shouldShowByDefault = 
            defaultActiveCategory === "All" || 
            defaultActiveCategory === "all" || 
            defaultActiveCategory === imageCategory;
          
          const img = (
            <img
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
            <div
              key={image.id || image.url}
              className="responsive-block-editor-addons-gallery--item" 
              data-category={imageCategory}
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default save; 