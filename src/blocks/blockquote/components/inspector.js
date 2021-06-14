/**
 * Inspector Controls
 */
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import renderSVG from "../renderQuoteIcon";
import ResponsiveBlocksQuoteIcon from "../ResponsiveBlocksQuoteIcon.json";
import BoxShadowControl from "../../../utils/components/box-shadow";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";

let svg_icons = Object.keys(ResponsiveBlocksQuoteIcon);
// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  ColorPalette,
  MediaUpload,
} = wp.editor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  ToggleControl,
  BaseControl,
  Button,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.onRemoveVideo = this.onRemoveVideo.bind(this);
    this.onRemoveImage = this.onRemoveImage.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
    this.onSelectVideo = this.onSelectVideo.bind(this);
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
  /*
   * Event to set Video as null while removing.
   */
  onRemoveVideo() {
    const { setAttributes } = this.props;

    setAttributes({ backgroundVideo: null });
  }

  /*
   * Event to set Video while adding.
   */
  onSelectVideo(media) {
    const { setAttributes } = this.props;

    if (!media || !media.url) {
      setAttributes({ backgroundVideo: null });
      return;
    }
    if (!media.type || "video" != media.type) {
      return;
    }
    setAttributes({ backgroundVideo: media });
  }

  render() {
    // Background Type Options
    const backgroundTypeOptions = [
      { value: "none", label: __("None", "responsive-block-editor-addons") },
      { value: "color", label: __("Color", "responsive-block-editor-addons") },
      {
        value: "gradient",
        label: __("Gradient", "responsive-block-editor-addons"),
      },
      { value: "image", label: __("Image", "responsive-block-editor-addons") },
      { value: "video", label: __("Video", "responsive-block-editor-addons") },
    ];
    // Cite Alignment Options
    const citeAlignOptions = [
      {
        value: "left",
        label: __("Left", "responsive-block-editor-addons"),
      },
      {
        value: "center",
        label: __("Center", "responsive-block-editor-addons"),
      },
      {
        value: "right",
        label: __("Right", "responsive-block-editor-addons"),
      },
    ];

    // Setup the attributes
    const {
      attributes: {
        quoteBackgroundColor,
        quoteTextColor,
        quoteFontFamily,
        quoteFontSize,
        quoteFontWeight,
        quoteLineHeight,
        quoteAlign,
        quoteSize,
        quoteColor,
        quoteHposition,
        quoteVposition,
        quoteOpacity,
        showQuote,
        leftPadding,
        rightPadding,
        topPadding,
        bottomPadding,
        borderStyle,
        borderWidth,
        blockBorderRadius,
        borderColor,
        backgroundColor,
        backgroundColor1,
        backgroundColor2,
        colorLocation1,
        colorLocation2,
        gradientDirection,
        backgroundType,
        backgroundImage,
        backgroundVideo,
        opacity,
        icon,
        boxShadowColor,
        boxShadowHOffset,
        boxShadowVOffset,
        boxShadowBlur,
        boxShadowSpread,
        boxShadowPosition,
      },
      setAttributes,
    } = this.props;

    // Font Weight Options
    const fontWeightOptions = [
      {
        value: "100",
        label: __("100", "responsive-block-editor-addons"),
      },
      {
        value: "200",
        label: __("200", "responsive-block-editor-addons"),
      },
      {
        value: "300",
        label: __("300", "responsive-block-editor-addons"),
      },
      {
        value: "400",
        label: __("400", "responsive-block-editor-addons"),
      },
      {
        value: "500",
        label: __("500", "responsive-block-editor-addons"),
      },
      {
        value: "600",
        label: __("600", "responsive-block-editor-addons"),
      },
      {
        value: "700",
        label: __("700", "responsive-block-editor-addons"),
      },
      {
        value: "800",
        label: __("800", "responsive-block-editor-addons"),
      },
      {
        value: "900",
        label: __("900", "responsive-block-editor-addons"),
      },
    ];

    // Update color values
    const onChangeBackgroundColor = (value) =>
      setAttributes({ quoteBackgroundColor: value });
    const onChangeTextColor = (value) =>
      setAttributes({ quoteTextColor: value });

    return (
      <InspectorControls key="inspector">
        <PanelBody
          title={__("General", "responsive-block-editor-addons")}
          initialOpen={false}
        >
          <SelectControl
            label={__("Font Family", "responsive-block-editor-addons")}
            options={fontOptions}
            value={quoteFontFamily}
            onChange={(value) => {
              setAttributes({
                quoteFontFamily: value,
              }),
                loadGoogleFont(value);
            }}
          />
          <RangeControl
            label={__("Font Size", "responsive-block-editor-addons")}
            value={quoteFontSize}
            onChange={(value) =>
              this.props.setAttributes({
                quoteFontSize: value,
              })
            }
            min={10}
            max={100}
            step={1}
          />
          <SelectControl
            label={__("Font Weight", "responsive-block-editor-addons")}
            options={fontWeightOptions}
            value={quoteFontWeight}
            onChange={(value) =>
              this.props.setAttributes({
                quoteFontWeight: value,
              })
            }
          />
          <RangeControl
            label={__("Line Height", "responsive-block-editor-addons")}
            value={quoteLineHeight}
            onChange={(value) =>
              this.props.setAttributes({
                quoteLineHeight: value,
              })
            }
            min={0}
            max={100}
            step={1}
          />
          <SelectControl
            label={__("Alignment", "responsive-block-editor-addons")}
            description={__(
              "Left or right align the cite name and title.",
              "responsive-block-editor-addons"
            )}
            options={citeAlignOptions}
            value={quoteAlign}
            onChange={(value) =>
              this.props.setAttributes({
                quoteAlign: value,
              })
            }
          />
        </PanelBody>
        <PanelBody
          title={__("Quotation Mark", "responsive-block-editor-addons")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Show Quotation Mark", "responsive-block-editor-addons")}
            checked={showQuote}
            onChange={() =>
              this.props.setAttributes({
                showQuote: !showQuote,
              })
            }
          />
          <Fragment>
            <p className="components-base-control__label">{__("Icon")}</p>
            <FontIconPicker
              icons={svg_icons}
              renderFunc={renderSVG}
              theme="default"
              value={icon}
              onChange={(value) => this.props.setAttributes({ icon: value })}
              isMulti={false}
              noSelectedPlaceholder={__("Select Icon")}
            />
          </Fragment>
          <RangeControl
            label={__("Size", "responsive-block-editor-addons")}
            value={quoteSize}
            onChange={(value) =>
              this.props.setAttributes({
                quoteSize: value,
              })
            }
            min={0}
            max={400}
            step={1}
          />
          <p>
            {__("Quote Color")}
            <span className="components-base-control__label">
              <span
                className="component-color-indicator"
                style={{ backgroundColor: quoteColor }}
              ></span>
            </span>
          </p>

          <ColorPalette
            title={__("Color", "responsive-block-editor-addons")}
            value={quoteColor}
            onChange={(colorValue) => setAttributes({ quoteColor: colorValue })}
            allowReset
          />
          <RangeControl
            label={__("Horizontal Position", "responsive-block-editor-addons")}
            value={quoteHposition}
            onChange={(value) =>
              this.props.setAttributes({
                quoteHposition: value !== undefined ? value : 30,
              })
            }
            min={0}
            max={400}
            step={1}
            allowReset
          />
          <RangeControl
            label={__("Vertical Position", "responsive-block-editor-addons")}
            value={quoteVposition}
            onChange={(value) =>
              this.props.setAttributes({
                quoteVposition: value !== undefined ? value : 20,
              })
            }
            min={0}
            max={400}
            step={1}
            allowReset
          />
          <RangeControl
            label={__("Opacity", "responsive-block-editor-addons")}
            value={quoteOpacity}
            onChange={(value) =>
              this.props.setAttributes({
                quoteOpacity: value !== undefined ? value : 100,
              })
            }
            min={0}
            max={100}
            allowReset
          />
        </PanelBody>
        <PanelBody
          title={__("Background", "responsive-block-editor-addons")}
          initialOpen={false}
        >
          <SelectControl
            label={__("Background Type", "responsive-block-editor-addons")}
            value={backgroundType}
            onChange={(value) => setAttributes({ backgroundType: value })}
            options={backgroundTypeOptions}
          />
          {"color" == backgroundType && (
            <Fragment>
              <p className="responsive-setting-label">
                {__("Background Color", "responsive-block-editor-addons")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{ backgroundColor: backgroundColor }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={backgroundColor}
                onChange={(colorValue) =>
                  setAttributes({ backgroundColor: colorValue })
                }
                allowReset
              />
            </Fragment>
          )}
          {"gradient" == backgroundType && (
            <Fragment>
              <p className="responsive-setting-label">
                {__("Color 1", "responsive-block-editor-addons")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{ backgroundColor: backgroundColor1 }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={backgroundColor1}
                onChange={(colorValue) =>
                  setAttributes({ backgroundColor1: colorValue })
                }
                allowReset
              />

              <p className="responsive-setting-label">
                {__("Color 2", "responsive-block-editor-addons")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{ backgroundColor: backgroundColor2 }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={backgroundColor2}
                onChange={(colorValue) =>
                  setAttributes({ backgroundColor2: colorValue })
                }
                allowReset
              />
              <RangeControl
                label={__("Color Location 1", "responsive-block-editor-addons")}
                value={colorLocation1}
                min={0}
                max={100}
                onChange={(value) =>
                  setAttributes({
                    colorLocation1: value !== undefined ? value : 0,
                  })
                }
              />
              <RangeControl
                label={__("Color Location 2", "responsive-block-editor-addons")}
                value={colorLocation2}
                min={0}
                max={100}
                onChange={(value) =>
                  setAttributes({
                    colorLocation2: value !== undefined ? value : 100,
                  })
                }
              />
              <RangeControl
                label={__(
                  "Gradient Direction",
                  "responsive-block-editor-addons"
                )}
                value={gradientDirection}
                min={0}
                max={100}
                onChange={(value) =>
                  setAttributes({
                    gradientDirection: value !== undefined ? value : 90,
                  })
                }
              />
            </Fragment>
          )}
          {"image" == backgroundType && (
            <Fragment>
              <BaseControl
                className="editor-bg-image-control"
                label={__("Background Image", "responsive-block-editor-addons")}
              >
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
                    className="rbea-rm-btn"
                    onClick={this.onRemoveImage}
                    isLink
                    isDestructive
                  >
                    {__("Remove Image", "responsive-block-editor-addons")}
                  </Button>
                )}
              </BaseControl>
            </Fragment>
          )}
          {"video" == backgroundType && (
            <BaseControl
              className="editor-bg-video-control"
              label={__("Background Video")}
            >
              <MediaUpload
                title={__("Select Background Video")}
                onSelect={this.onSelectVideo}
                allowedTypes={["video"]}
                value={backgroundVideo}
                render={({ open }) => (
                  <Button isDefault onClick={open}>
                    {!backgroundVideo
                      ? __("Select Background Video")
                      : __("Replace Video")}
                  </Button>
                )}
              />
              {backgroundVideo && (
                <Button onClick={this.onRemoveVideo} isLink isDestructive>
                  {__("Remove Video")}
                </Button>
              )}
            </BaseControl>
          )}
          <RangeControl
            label={__("Opacity", "responsive-block-editor-addons")}
            value={opacity}
            onChange={(value) =>
              setAttributes({ opacity: value !== undefined ? value : 20 })
            }
            min={0}
            max={100}
            allowReset
          />
        </PanelBody>
        <PanelBody title={__("Border Settings")} initialOpen={false}>
          <SelectControl
            label={__("Border Style")}
            value={borderStyle}
            onChange={(value) => setAttributes({ borderStyle: value })}
            options={[
              { value: "none", label: __("None") },
              { value: "solid", label: __("Solid") },
              { value: "dotted", label: __("Dotted") },
              { value: "dashed", label: __("Dashed") },
              { value: "double", label: __("Double") },
              { value: "groove", label: __("Groove") },
              { value: "inset", label: __("Inset") },
              { value: "outset", label: __("Outset") },
              { value: "ridge", label: __("Ridge") },
            ]}
          />
          {"none" != borderStyle && (
            <Fragment>
              <RangeControl
                label={__("Border Width")}
                value={borderWidth}
                onChange={(value) => setAttributes({ borderWidth: value })}
                min={0}
                max={50}
                allowReset
              />
              <Fragment>
                <p>
                  {__("Border Color")}
                  <span className="components-base-control__label">
                    <span
                      className="component-color-indicator"
                      style={{ backgroundColor: borderColor }}
                    ></span>
                  </span>
                </p>
                <ColorPalette
                  value={borderColor}
                  onChange={(colorValue) =>
                    setAttributes({ borderColor: colorValue })
                  }
                  allowReset
                />
              </Fragment>
            </Fragment>
          )}
          <RangeControl
            label={__("Border Radius")}
            value={blockBorderRadius}
            onChange={(value) =>
              setAttributes({
                blockBorderRadius: value !== undefined ? value : 0,
              })
            }
            min={0}
            max={50}
            allowReset
          />
          <BoxShadowControl
            setAttributes={setAttributes}
            label={__("Box Shadow")}
            boxShadowColor={{ value: boxShadowColor, label: __("Color") }}
            boxShadowHOffset={{
              value: boxShadowHOffset,
              label: __("Horizontal"),
            }}
            boxShadowVOffset={{
              value: boxShadowVOffset,
              label: __("Vertical"),
            }}
            boxShadowBlur={{ value: boxShadowBlur, label: __("Blur") }}
            boxShadowSpread={{ value: boxShadowSpread, label: __("Spread") }}
            boxShadowPosition={{
              value: boxShadowPosition,
              label: __("Position"),
            }}
          />
        </PanelBody>

        <PanelBody
          title={__("Spacing", "responsive-block-editor-addons")}
          initialOpen={false}
        >
          <RangeControl
            label={__("Top Padding", "responsive-block-editor-addons")}
            value={topPadding}
            onChange={(value) =>
              this.props.setAttributes({
                topPadding: value !== undefined ? value : 70,
              })
            }
            min={0}
            max={100}
            step={1}
            allowReset
          />
          <RangeControl
            label={__("Bottom Padding", "responsive-block-editor-addons")}
            value={bottomPadding}
            onChange={(value) =>
              this.props.setAttributes({
                bottomPadding: value !== undefined ? value : 70,
              })
            }
            min={0}
            max={100}
            step={1}
            allowReset
          />
          <RangeControl
            label={__("Left Padding", "responsive-block-editor-addons")}
            value={leftPadding}
            onChange={(value) =>
              this.props.setAttributes({
                leftPadding: value !== undefined ? value : 60,
              })
            }
            min={0}
            max={100}
            step={1}
            allowReset
          />
          <RangeControl
            label={__("Right Padding", "responsive-block-editor-addons")}
            value={rightPadding}
            onChange={(value) =>
              this.props.setAttributes({
                rightPadding: value !== undefined ? value : 60,
              })
            }
            min={0}
            max={100}
            step={1}
            allowReset
          />
        </PanelBody>

        <PanelColorSettings
          title={__("Color Settings", "responsive-block-editor-addons")}
          initialOpen={false}
          colorSettings={[
            {
              value: quoteTextColor,
              onChange: onChangeTextColor,
              label: __("Text Color", "responsive-block-editor-addons"),
            },
          ]}
        ></PanelColorSettings>
      </InspectorControls>
    );
  }
}
