/**
 * Box-Shadow reusable component.
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

        setAttributes({ backgroundImage: null });
    }

    /*
     * Event to set Image as while adding.
     */
    onSelectImage(media) {
        const { setAttributes } = this.props;
        const { backgroundImage } = this.props.attributes;

        if (!media || !media.url) {
            setAttributes({ backgroundImage: null });
            return;
        }

        if (!media.type || "image" != media.type) {
            return;
        }

        setAttributes({ backgroundImage: media.url });
    }

    render() {
        const {
            attributes: {
                backgroundImage,
                backgroundImagePosition,
                backgroundAttachment,
                backgroundImageRepeat,
                backgroundImageSize,
                overlayType,
                backgroundImageColor,
                gradientOverlayColor1,
                gradientOverlayLocation1,
                gradientOverlayColor2,
                gradientOverlayLocation2,
                gradientOverlayType,
                gradientOverlayAngle,
                gradientOverlayPosition,
            },
            setAttributes,
        } = this.props;

        var advancedControls;
        advancedControls = (
            <Fragment>
                <BaseControl
                    className="editor-bg-image-control"
                    label={__("Background Image", "responsive-block-editor-addons")}
                >
                    <br/>
                    <br/>
                    <MediaUpload
                        title={__(
                            "Select Background Image",
                            "responsive-block-editor-addons"
                        )}
                        onSelect={this.onSelectImage}
                        allowedTypes={["image"]}
                        value={backgroundImage}
                        render={({ open }) => (
                            <Button isDefault onClick={open}>
                                {!backgroundImage
                                    ? __(
                                        "Select Background Image",
                                        "responsive-block-editor-addons"
                                    )
                                    : __("Replace image", "responsive-block-editor-addons")}
                            </Button>
                        )}
                    />
                    {backgroundImage && (
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


                { backgroundImage && (this.props.showSomeImageOptions == true || this.props.showMoreImageOptions == true) && (
                    <Fragment>
                        <SelectControl
                            label={__("Image Position")}
                            value={backgroundImagePosition}
                            onChange={(value) =>
                                setAttributes({ backgroundImagePosition: value })
                            }
                            options={[
                                { value: "top-left", label: __("Top Left") },
                                { value: "top center", label: __("Top Center") },
                                { value: "top right", label: __("Top Right") },
                                { value: "center left", label: __("Center Left") },
                                { value: "center center", label: __("Center Center") },
                                { value: "center right", label: __("Center Right") },
                                { value: "bottom left", label: __("Bottom Left") },
                                { value: "bottom center", label: __("Bottom Center") },
                                { value: "bottom right", label: __("Bottom Right") },
                            ]}
                        />
                        <SelectControl
                            label={__("Repeat")}
                            value={backgroundImageRepeat}
                            onChange={(value) =>
                                setAttributes({ backgroundImageRepeat: value })
                            }
                            options={[
                                { value: "no-repeat", label: __("No Repeat") },
                                { value: "repeat", label: __("Repeat") },
                                { value: "repeat-x", label: __("Repeat-x") },
                                { value: "repeat-y", label: __("Repeat-y") },
                            ]}
                        />
                        <SelectControl
                            label={__("Size")}
                            value={backgroundImageSize}
                            onChange={(value) =>
                                setAttributes({ backgroundImageSize: value })
                            }
                            options={[
                                { value: "auto", label: __("Auto") },
                                { value: "cover", label: __("Cover") },
                                { value: "contain", label: __("Contain") },
                            ]}
                        />
                    </Fragment>
                )}
                { backgroundImage && this.props.showMoreImageOptions == true && (
                    <Fragment>
                        <SelectControl
                            label={__("Attachment")}
                            value={backgroundAttachment}
                            onChange={(value) =>
                                setAttributes({ backgroundAttachment: value })
                            }
                            options={[
                                { value: "fixed", label: __("Fixed") },
                                { value: "scroll", label: __("Scroll") },
                            ]}
                        />
                        {this.props.showOverlayOptions && (
                            <Fragment>
                                <SelectControl
                                    label={__("Image Overlay Type")}
                                    value={overlayType}
                                    onChange={(value) => setAttributes({ overlayType: value })}
                                    options={[
                                        { value: "color", label: __("Color") },
                                        { value: "gradient", label: __("Gradient") },
                                    ]}
                                />
                                {overlayType == "color" && (
                                    <Fragment>
                                        <p className="responsive-setting-label">
                                            {__("Image Overlay Color")}
                                            <span className="components-base-control__label">
                                                <span
                                                    className="component-color-indicator"
                                                    style={{ backgroundColor: backgroundImageColor }}
                                                ></span>
                                            </span>
                                        </p>
                                        <ColorPalette
                                            value={backgroundImageColor}
                                            onChange={(colorValue) =>
                                                setAttributes({ backgroundImageColor: colorValue })
                                            }
                                            allowReset
                                        />
                                    </Fragment>
                                )}
                                {"gradient" == overlayType && (
                                    <Fragment>
                                        <p className="responsive-setting-label">
                                            {__("Color 1")}
                                            <span className="components-base-control__label">
                                                <span
                                                    className="component-color-indicator"
                                                    style={{ backgroundColor: gradientOverlayColor1 }}
                                                ></span>
                                            </span>
                                        </p>
                                        <ColorPalette
                                            value={gradientOverlayColor1}
                                            onChange={(colorValue) =>
                                                setAttributes({ gradientOverlayColor1: colorValue })
                                            }
                                            allowReset
                                        />
                                        <RangeControl
                                            label={__("Location 1")}
                                            value={gradientOverlayLocation1}
                                            onChange={(value) =>
                                                setAttributes({ gradientOverlayLocation1: value })
                                            }
                                            min={0}
                                            max={100}
                                            allowReset
                                        />
                                        <p className="responsive-setting-label">
                                            {__("Color 2")}
                                            <span className="components-base-control__label">
                                                <span
                                                    className="component-color-indicator"
                                                    style={{ backgroundColor: gradientOverlayColor2 }}
                                                ></span>
                                            </span>
                                        </p>
                                        <ColorPalette
                                            value={gradientOverlayColor2}
                                            onChange={(colorValue) =>
                                                setAttributes({ gradientOverlayColor2: colorValue })
                                            }
                                            allowReset
                                        />
                                        <RangeControl
                                            label={__("Location 2")}
                                            value={gradientOverlayLocation2}
                                            onChange={(value) =>
                                                setAttributes({ gradientOverlayLocation2: value })
                                            }
                                            min={0}
                                            max={100}
                                            allowReset
                                        />
                                        <SelectControl
                                            label={__("Type")}
                                            value={gradientOverlayType}
                                            onChange={(value) =>
                                                setAttributes({ gradientOverlayType: value })
                                            }
                                            options={[
                                                { value: "linear", label: __("Linear") },
                                                { value: "radial", label: __("Radial") },
                                            ]}
                                        />
                                        {"linear" == gradientOverlayType && (
                                            <RangeControl
                                                label={__("Angle")}
                                                value={gradientOverlayAngle}
                                                onChange={(value) =>
                                                    setAttributes({ gradientOverlayAngle: value })
                                                }
                                                min={0}
                                                max={360}
                                                allowReset
                                            />
                                        )}
                                        {"radial" == gradientOverlayType && (
                                            <SelectControl
                                                label={__("Type")}
                                                value={gradientOverlayPosition}
                                                onChange={(value) =>
                                                    setAttributes({ gradientOverlayPosition: value })
                                                }
                                                options={[
                                                    {
                                                        value: "center center",
                                                        label: __("Center Center"),
                                                    },
                                                    { value: "center left", label: __("Center Left") },
                                                    {
                                                        value: "center right",
                                                        label: __("Center Right"),
                                                    },
                                                    { value: "top center", label: __("Top Center") },
                                                    { value: "top left", label: __("Top Left") },
                                                    { value: "top right", label: __("Top Right") },
                                                    {
                                                        value: "bottom center",
                                                        label: __("Bottom Center"),
                                                    },
                                                    { value: "bottom left", label: __("Bottom Left") },
                                                    {
                                                        value: "bottom right",
                                                        label: __("Bottom Right"),
                                                    },
                                                ]}
                                            />
                                        )}
                                    </Fragment>
                                )}
                            </Fragment>
                        )}
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
