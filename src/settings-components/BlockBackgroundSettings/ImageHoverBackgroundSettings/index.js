/**
 * Image Background Hover reusable component.
 *
 */
const { __ } = wp.i18n;

const { ColorPalette, MediaUpload } = wp.blockEditor;

const { SelectControl, RangeControl, BaseControl, Button } = wp.components;

// Extend component
const { Component, Fragment } = wp.element;

class ImageBackgroundControl extends Component {
  constructor() {
    super(...arguments);
    this.onRemoveImage = this.onRemoveImage.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
  }
  /*
   * Event to set Image as null while removing.
   */
  onRemoveImage() {
    const { setAttributes } = this.props;

    setAttributes({ backgroundHoverImage: null });
  }

  /*
   * Event to set Image as while adding.
   */
  onSelectImage(media) {
    const { setAttributes } = this.props;
    const { backgroundHoverImage } = this.props.attributes;

    if (!media || !media.url) {
      setAttributes({ backgroundHoverImage: null });
      return;
    }

    if (!media.type || "image" != media.type) {
      return;
    }

    setAttributes({ backgroundHoverImage: media.url });
  }

  render() {
    const {
      attributes: {
        backgroundHoverImage,
        backgroundImageHoverPosition,
        backgroundImageHoverAttachment,
        backgroundImageHoverRepeat,
        backgroundImageHoverSize,
      },
      setAttributes,
    } = this.props;

    var advancedControls;
    advancedControls = (
      <Fragment>
        <BaseControl
          className="editor-bg-image-control"
          label={__("Background Image Hover", "responsive-block-editor-addons")}
        >
          <br />
          <br />
          <MediaUpload
            title={__(
              "Select Background Image",
              "responsive-block-editor-addons"
            )}
            onSelect={this.onSelectImage}
            allowedTypes={["image"]}
            value={backgroundHoverImage}
            render={({ open }) => (
              <Button isDefault onClick={open}>
                {!backgroundHoverImage
                  ? __(
                      "Select Background Image",
                      "responsive-block-editor-addons"
                    )
                  : __("Replace image", "responsive-block-editor-addons")}
              </Button>
            )}
          />
          {backgroundHoverImage && (
            <Button
              className="responsive-rm-btn"
              onClick={this.onRemoveImage}
              isLink
              isDestructive
            >
              {__("Remove Image", "responsive-block-editor-addons")}
            </Button>
          )}
        </BaseControl>

        {backgroundHoverImage &&
          (this.props.showSomeImageOptions == true ||
            this.props.showMoreImageOptions == true) && (
            <Fragment>
              <SelectControl
                label={__("Image Position Hover", "responsive-block-editor-addons")}
                value={backgroundImageHoverPosition}
                onChange={(value) =>
                  setAttributes({ backgroundImageHoverPosition: value })
                }
                options={[
                  {
                    value: "top-left",
                    label: __("Top Left", "responsive-block-editor-addons"),
                  },
                  {
                    value: "top center",
                    label: __("Top Center", "responsive-block-editor-addons"),
                  },
                  {
                    value: "top right",
                    label: __("Top Right", "responsive-block-editor-addons"),
                  },
                  {
                    value: "center left",
                    label: __("Center Left", "responsive-block-editor-addons"),
                  },
                  {
                    value: "center center",
                    label: __(
                      "Center Center",
                      "responsive-block-editor-addons"
                    ),
                  },
                  {
                    value: "center right",
                    label: __("Center Right", "responsive-block-editor-addons"),
                  },
                  {
                    value: "bottom left",
                    label: __("Bottom Left", "responsive-block-editor-addons"),
                  },
                  {
                    value: "bottom center",
                    label: __(
                      "Bottom Center",
                      "responsive-block-editor-addons"
                    ),
                  },
                  {
                    value: "bottom right",
                    label: __("Bottom Right", "responsive-block-editor-addons"),
                  },
                ]}
              />
              <SelectControl
                label={__("Repeat Hover", "responsive-block-editor-addons")}
                value={backgroundImageHoverRepeat}
                onChange={(value) =>
                  setAttributes({ backgroundImageHoverRepeat: value })
                }
                options={[
                  {
                    value: "no-repeat",
                    label: __("No Repeat", "responsive-block-editor-addons"),
                  },
                  {
                    value: "repeat",
                    label: __("Repeat", "responsive-block-editor-addons"),
                  },
                  {
                    value: "repeat-x",
                    label: __("Repeat-x", "responsive-block-editor-addons"),
                  },
                  {
                    value: "repeat-y",
                    label: __("Repeat-y", "responsive-block-editor-addons"),
                  },
                ]}
              />
              <SelectControl
                label={__("Size Hover", "responsive-block-editor-addons")}
                value={backgroundImageHoverSize}
                onChange={(value) =>
                  setAttributes({ backgroundImageHoverSize: value })
                }
                options={[
                  {
                    value: "auto",
                    label: __("Auto", "responsive-block-editor-addons"),
                  },
                  {
                    value: "cover",
                    label: __("Cover", "responsive-block-editor-addons"),
                  },
                  {
                    value: "contain",
                    label: __("Contain", "responsive-block-editor-addons"),
                  },
                ]}
              />
            </Fragment>
          )}
        {backgroundHoverImage && this.props.showMoreImageOptions == true && (
          <Fragment>
            <SelectControl
              label={__("Attachment Hover", "responsive-block-editor-addons")}
              value={backgroundImageHoverAttachment}
              onChange={(value) =>
                setAttributes({ backgroundImageHoverAttachment: value })
              }
              options={[
                {
                  value: "fixed",
                  label: __("Fixed", "responsive-block-editor-addons"),
                },
                {
                  value: "scroll",
                  label: __("Scroll", "responsive-block-editor-addons"),
                },
              ]}
            />
          </Fragment>
        )}
      </Fragment>
    );

    return (
      <div className="responsive-block-editor-addons-image-background-settings">
        {advancedControls}
      </div>
    );
  }
}

export default ImageBackgroundControl;
