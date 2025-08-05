/**
 * WordPress dependencies
 */
import { RichText } from "@wordpress/block-editor";

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

  const shouldShowFilters = enableCategoryFilter && categories.length > 0;

  // Determine which category should be active by default
  const defaultActiveCategory = setDefaultCategory && defaultCategory ? defaultCategory : "All";

  return (
    <div className={outerClasses} data-rba-gallery-block>
      {shouldShowFilters && (
        <div className="gallery-filter-wrapper" style={{ marginBottom: "20px" }}>
          <button 
            className={`gallery-filter-button ${defaultActiveCategory === "All" || defaultActiveCategory === "all" ? "is-active" : ""}`}
            data-category="All"
            style={{
              marginRight: "10px",
              padding: "6px 12px",
              cursor: "pointer",
              border: "1px solid #ccc",
              borderRadius: "4px",
              backgroundColor: (defaultActiveCategory === "All" || defaultActiveCategory === "all") ? "#0073aa" : "#f2f2f2",
              color: (defaultActiveCategory === "All" || defaultActiveCategory === "all") ? "#fff" : "#000"
            }}
          >
            {allTabLabel}
          </button>
          {categories.map((cat) => (
            <button 
              key={cat}
              className={`gallery-filter-button ${defaultActiveCategory === cat ? "is-active" : ""}`}
              data-category={cat}
              style={{
                marginRight: "10px",
                padding: "6px 12px",
                cursor: "pointer",
                border: "1px solid #ccc",
                borderRadius: "4px",
                backgroundColor: defaultActiveCategory === cat ? "#0073aa" : "#f2f2f2",
                color: defaultActiveCategory === cat ? "#fff" : "#000"
              }}
            >
              {cat}
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