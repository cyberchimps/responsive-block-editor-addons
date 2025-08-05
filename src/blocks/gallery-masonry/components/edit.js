/**
 * External dependencies
 */
import classnames from "classnames";
import filter from "lodash/filter";
import Masonry from "react-responsive-masonry";
import EditorStyles from "./editor-styles";

/**
 * Internal dependencies
 */
import { icon } from "./icon";
import Inspector from "./inspector";
import GalleryImage from "../../../utils/components/block-gallery/gallery-image";
import GalleryPlaceholder from "../../../utils/components/block-gallery/gallery-placeholder";
import { GalleryClasses } from "../../../utils/components/block-gallery/shared";

/**
 * WordPress dependencies
 */
import { __, sprintf } from "@wordpress/i18n";
import { Component, Fragment } from "@wordpress/element";
import { compose } from "@wordpress/compose";
import { withSelect } from "@wordpress/data";
import { withNotices } from "@wordpress/components";

const masonryOptions = {
  transitionDuration: 0,
  percentPosition: true,
};

class GalleryMasonryEdit extends Component {
  constructor() {
    super(...arguments);
    this.onSelectImage = this.onSelectImage.bind(this);
    this.onRemoveImage = this.onRemoveImage.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onMoveForward = this.onMoveForward.bind(this);
    this.onMoveBackward = this.onMoveBackward.bind(this);
    this.setImageAttributes = this.setImageAttributes.bind(this);

    this.state = {
      selectedImage: null,
      migrationDone: true,
      mediaData: {}, // Media ID -> Media Object
      selectedCategory: "All", // Currently active filter
    };
  }

  componentDidMount() {
    const { wideControlsEnabled, attributes, setAttributes, clientId } =
      this.props;

    if (wideControlsEnabled && !attributes.align) {
      setAttributes({ align: "" });
    }

    if (!this.state.migrationDone) {
      this.handleSizeMigration(attributes.gridSize);
      this.setState({ migrationDone: true });
    }

    setAttributes({ block_id: clientId });

    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      `responsive-block-editor-addons-advanced-gallery-masonry-style-${clientId}`
    );
    document.head.appendChild($style);

    const images = attributes.images;

    if (images && images.length > 0) {
      const sortedImages = [...images].sort((a, b) => a.order - b.order);
      if (!this.isSorted(images)) {
        setAttributes({ images: sortedImages });
      }

      const imageIds = images.map((img) => img.id);

      const fetchMediaData = async () => {
        const mediaResponses = await Promise.all(
          imageIds.map((id) =>
            wp
              .apiFetch({ path: `/wp/v2/media/${id}` })
              .then((media) => {
                return { id, media };
              })
              .catch(() => ({ id, media: null }))
          )
        );

        const mediaData = {};
        mediaResponses.forEach(({ id, media }) => {
          if (media) {
            mediaData[id] = media;
          }
        });

        this.setState({ mediaData });
      };

      fetchMediaData();
    }
  }

  isSorted(images) {
    for (let i = 1; i < images.length; i++) {
      if (images[i - 1].order > images[i].order) {
        return false;
      }
    }
    return true;
  }

  componentDidUpdate(prevProps) {
    // Force re-render when attributes change to show real-time updates
    if (
      prevProps.attributes.allTabLabel !== this.props.attributes.allTabLabel ||
      prevProps.attributes.enableCategoryFilter !== this.props.attributes.enableCategoryFilter ||
      prevProps.attributes.images !== this.props.attributes.images
    ) {
      // If images changed, refresh media data
      if (prevProps.attributes.images !== this.props.attributes.images) {
        this.refreshMediaData();
      }
      
      this.forceUpdate();
    }

    if (!this.props.isSelected && prevProps.isSelected) {
      this.setState({ selectedImage: null, captionSelected: false });
    }

    if (this.props.attributes.gutter <= 0) {
      this.props.setAttributes({
        radius: 0,
      });
    }
  }

  // Refresh media data when images change
  refreshMediaData() {
    const { images } = this.props.attributes;
    if (!images || images.length === 0) return;
    
    // Fetch category data for all images
    Promise.all(
      images.map((image) => {
        if (image.id) {
          return wp.apiFetch({ path: `/wp/v2/media/${image.id}` })
            .then((mediaResponse) => {
              return {
                id: image.id,
                rba_category: mediaResponse.rba_category || "uncategorized"
              };
            })
            .catch((error) => {
              return {
                id: image.id,
                rba_category: "uncategorized"
              };
            });
        }
        return Promise.resolve({
          id: image.id,
          rba_category: "uncategorized"
        });
      })
    ).then((mediaDataArray) => {
      const newMediaData = {};
      mediaDataArray.forEach((media) => {
        newMediaData[media.id] = media;
      });
      
      this.setState({ mediaData: newMediaData });
    });
  }

  handleSizeMigration(size) {
    if (size === "lrg") {
      this.setNumberOfColumns(2);
    } else if (size === "xlrg") {
      this.setNumberOfColumns(3);
    }
  }

  setNumberOfColumns(value) {
    this.setState({ columns: value });
    this.props.setAttributes({ columnsize: value });
  }

  onSelectImage(index) {
    return () => {
      if (this.state.selectedImage !== index) {
        this.setState({ selectedImage: index });
      }
    };
  }

  onMove(oldIndex, newIndex) {
    const images = [...this.props.attributes.images];
    const movedImage = images[oldIndex];
    images.splice(oldIndex, 1);
    images.splice(newIndex, 0, movedImage);
    const updatedImages = images.map((img, index) => ({
      ...img,
      order: index,
    }));
    this.setState({ selectedImage: newIndex });
    this.props.setAttributes({ images: updatedImages });
  }

  onMoveForward(oldIndex) {
    return () => {
      if (oldIndex < this.props.attributes.images.length - 1) {
        this.onMove(oldIndex, oldIndex + 1);
      }
    };
  }

  onMoveBackward(oldIndex) {
    return () => {
      if (oldIndex > 0) {
        this.onMove(oldIndex, oldIndex - 1);
      }
    };
  }

  onRemoveImage(index) {
    return () => {
      const images = filter(
        this.props.attributes.images,
        (_img, i) => index !== i
      ).map((img, newIndex) => ({
        ...img,
        order: newIndex,
      }));
      this.setState({ selectedImage: null });
      this.props.setAttributes({ images });
    };
  }

  setImageAttributes(index, attributes) {
    const { images } = this.props.attributes;
    if (!images[index]) return;
    const updatedImages = [
      ...images.slice(0, index),
      { ...images[index], ...attributes },
      ...images.slice(index + 1),
    ];
    this.props.setAttributes({ images: updatedImages });
  }

  getCategories() {
    const { mediaData } = this.state;
    const categories = new Set();
    Object.values(mediaData).forEach((media) => {
      if (media.rba_category) {
        media.rba_category
          .split(",")
          .map((c) => c.trim())
          .forEach((cat) => categories.add(cat));
      }
    });
    return ["All", ...Array.from(categories)];
  }

  render() {
    const { attributes, className, isSelected, noticeUI } = this.props;
    const {
      align,
      captions,
      gutter,
      gutterMobile,
      gutterTablet,
      images,
      linkTo,
      lightbox,
      columnsize,
      customHeight,
      customWidth,
      block_id,
      enableCategoryFilter,
      allTabLabel = "All",
    } = attributes;

    const hasImages = !!images.length;

    const innerClasses = classnames(...GalleryClasses(attributes), {
      [`align${align}`]: align,
      "has-gutter": gutter > 0,
      "has-lightbox": lightbox,
      [`link-type-${linkTo}`]: linkTo && !lightbox,
    });

    const masonryClasses = classnames({
      [`has-gutter-${gutter}`]: gutter > 0,
      "has-gutter-null": gutter === 0,
      [`has-gutter-mobile-${gutterMobile}`]: gutterMobile > 0,
      [`has-gutter-tablet-${gutterTablet}`]: gutterTablet > 0,
    });

    const masonryGalleryPlaceholder = !hasImages ? (
      <Fragment>
        {noticeUI}
        <GalleryPlaceholder
          {...this.props}
          label={__("Image", "responsive-block-editor-addons")}
          icon={icon}
          gutter={gutter}
        />
      </Fragment>
    ) : null;

    const appendClass = `block-${block_id}`;
    const outerClasses = classnames(className, appendClass);

    const sortedImages = [...images].sort((a, b) => a.order - b.order);
    const categories = this.getCategories();

    const filteredImages = sortedImages.filter((img) => {
      if (this.state.selectedCategory === "All") return true;
      const media = this.state.mediaData[img.id];
      if (!media || !media.rba_category) return false;
      return media.rba_category
        .split(",")
        .map((c) => c.trim())
        .includes(this.state.selectedCategory);
    });

    return (
      <Fragment>
        <style
          id={`responsive-block-editor-addons-advanced-gallery-masonry-style-${this.props.clientId}-inner`}
        >
          {EditorStyles(this.props)}
        </style>
        {isSelected && <Inspector {...this.props} />}
        {noticeUI}
        <div className={outerClasses}>
          {/* Only show category filters if enableCategoryFilter is true */}
          {enableCategoryFilter && categories.length > 1 && (
            <div className="category-filters" style={{ marginBottom: "1em" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => this.setState({ selectedCategory: cat })}
                  style={{
                    marginRight: "0.5em",
                    padding: "0.4em 0.8em",
                    backgroundColor:
                      this.state.selectedCategory === cat ? "#0073aa" : "#f3f4f5",
                    color: this.state.selectedCategory === cat ? "#fff" : "#000",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  {cat === "All" ? allTabLabel : cat}
                </button>
              ))}
            </div>
          )}

          <div className={innerClasses}>
            <Masonry className={masonryClasses} columnsCount={columnsize}>
              {filteredImages.map((img, index) => {
                const ariaLabel = sprintf(
                  __(
                    "image %1$d of %2$d in gallery",
                    "responsive-block-editor-addons"
                  ),
                  index + 1,
                  filteredImages.length
                );

                return (
                  <li
                    key={`img-${img.id}`}
                    className="responsive-block-editor-addons-gallery--item"
                  >
                    <GalleryImage
                      key={`img-${img.id}`}
                      caption={img.caption}
                      lightbox={lightbox}
                      url={img.url}
                      alt={img.alt}
                      id={img.id}
                      imgLink={img.imgLink}
                      linkTo={linkTo}
                      isFirstItem={index === 0}
                      isLastItem={index + 1 === filteredImages.length}
                      isSelected={
                        isSelected && this.state.selectedImage === index
                      }
                      onMoveBackward={this.onMoveBackward(index)}
                      onMoveForward={this.onMoveForward(index)}
                      onRemove={this.onRemoveImage(index)}
                      onSelect={this.onSelectImage(index)}
                      setAttributes={(attrs) =>
                        this.setImageAttributes(index, attrs)
                      }
                      aria-label={ariaLabel}
                      captions={captions}
                      supportsCaption={true}
                      customHeight={customHeight}
                      customWidth={customWidth}
                    />
                  </li>
                );
              })}
            </Masonry>
          </div>
          {masonryGalleryPlaceholder}
        </div>
      </Fragment>
    );
  }
}

export default compose([
  withSelect((select) => ({
    editorSidebarOpened: select("core/edit-post").isEditorSidebarOpened(),
    pluginSidebarOpened: select("core/edit-post").isPluginSidebarOpened(),
    publishSidebarOpened: select("core/edit-post").isPublishSidebarOpened(),
    wideControlsEnabled: select("core/editor").getEditorSettings().alignWide,
  })),
  withNotices,
])(GalleryMasonryEdit);
