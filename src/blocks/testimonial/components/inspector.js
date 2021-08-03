/**
 * Inspector Controls
 */

// Setup the block
import times from "lodash/times";
import BoxShadowControl from "../../../utils/components/box-shadow";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import BoxShadowControlHelper from "../../../utils/components/box-shadow-helper";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ImageSettingsControl from "../../../settings-components/Image Settings";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";


const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  MediaUpload,
  ColorPalette,
} = wp.editor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  ToggleControl,
  Button,
  BaseControl,
  TabPanel,
  Dashicon,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
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
    const fontWeightOptions = [
      {
        value: "",
        label: __("Default", "responsive-block-editor-addons"),
      },
      {
        value: 100,
        label: __("100", "responsive-block-editor-addons"),
      },
      {
        value: 200,
        label: __("200", "responsive-block-editor-addons"),
      },
      {
        value: 300,
        label: __("300", "responsive-block-editor-addons"),
      },
      {
        value: 400,
        label: __("400", "responsive-block-editor-addons"),
      },
      {
        value: 500,
        label: __("500", "responsive-block-editor-addons"),
      },
      {
        value: 600,
        label: __("600", "responsive-block-editor-addons"),
      },
      {
        value: 700,
        label: __("700", "responsive-block-editor-addons"),
      },
      {
        value: 800,
        label: __("800", "responsive-block-editor-addons"),
      },
      {
        value: 900,
        label: __("900", "responsive-block-editor-addons"),
      },
    ];

    const textTransformOptions = [
      {
        value: "",
        label: __("Default", "responsive-block-editor-addons"),
      },
      {
        value: "uppercase",
        label: __("Uppercase", "responsive-block-editor-addons"),
      },
      {
        value: "lowercase",
        label: __("Lowercase", "responsive-block-editor-addons"),
      },
      {
        value: "capitalize",
        label: __("Capitalize", "responsive-block-editor-addons"),
      },
    ];

    // Cite Alignment Options
    const citeAlignOptions = [
      {
        value: "left-aligned",
        label: __("Left Aligned", "responsive-block-editor-addons"),
      },
      {
        value: "center-aligned",
        label: __("Center Aligned", "responsive-block-editor-addons"),
      },
      {
        value: "right-aligned",
        label: __("Right Aligned", "responsive-block-editor-addons"),
      },
    ];
    const gutterOptions = [
      {
        value: "no",
        label: __("None", "responsive-block-editor-addons"),
        shortName: __("None", "responsive-block-editor-addons"),
      },
      {
        value: "small",
        /* translators: abbreviation for small size */
        label: __("S", "responsive-block-editor-addons"),
        tooltip: __("Small", "responsive-block-editor-addons"),
      },
      {
        value: "medium",
        /* translators: abbreviation for medium size */
        label: __("M", "responsive-block-editor-addons"),
        tooltip: __("Medium", "responsive-block-editor-addons"),
      },
      {
        value: "large",
        /* translators: abbreviation for large size */
        label: __("L", "responsive-block-editor-addons"),
        tooltip: __("Large", "responsive-block-editor-addons"),
      },
      {
        value: "huge",
        /* translators: abbreviation for largest size */
        label: __("XL", "responsive-block-editor-addons"),
        tooltip: __("Huge", "responsive-block-editor-addons"),
      },
    ];

    const imageShapeOptions = [
      {
        value: "default",
        label: __("Default", "responsive-block-editor-addons"),
        shortName: __("Default", "responsive-block-editor-addons"),
      },
      {
        value: "circle",
        label: __("Circle", "responsive-block-editor-addons"),
        shortName: __("Circle", "responsive-block-editor-addons"),
      },
      {
        value: "square",
        label: __("Square", "responsive-block-editor-addons"),
        shortName: __("Square", "responsive-block-editor-addons"),
      },
      {
        value: "blob",
        label: __("Blob", "responsive-block-editor-addons"),
        shortName: __("Blob", "responsive-block-editor-addons"),
      },
    ];

    // Setup the attributes
    const {
      attributes: {
        count,
        gutter,
        testimonialBlock,
        testimonialBackgroundColor,
        testimonialTextColor,
        testimonialTitleColor,
        testimonialNameColor,
        testimonialCiteAlign,
        blockBorderRadius,
        blockBorderColor,
        blockBorderWidth,
        blockBorderStyle,
        padding,
        paddingTablet,
        paddingMobile,
        boxShadowColor,
        boxShadowHOffset,
        boxShadowVOffset,
        boxShadowBlur,
        boxShadowSpread,
        boxShadowPosition,
        hoverboxShadowColor,
        hoverboxShadowHOffset,
        hoverboxShadowVOffset,
        hoverboxShadowBlur,
        hoverboxShadowSpread,
        hoverboxShadowPosition,
        backgroundImage,
        backgroundPosition,
        backgroundRepeat,
        backgroundSize,
        secondaryBackgroundColor,
        gradientDegree,
        bgGradient,
        opacity,
        titleFontSize,
        titleFontFamily,
        titleLineHeight,
        titleFontWeight,
        titleTextTransform,
        nameFontSize,
        nameFontFamily,
        nameLineHeight,
        nameFontWeight,
        nameTextTransform,
        contentFontFamily,
        contentFontSize,
        contentLineHeight,
        contentFontWeight,
        contentTextTransform,
        imageShape,
        imageSize,
        imageWidth,
        contentSpacing,
        titleSpacing,
        nameSpacing,
        imageSpacing,
      },
      setAttributes,
    } = this.props;

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RangeControl
                label={__(
                  "Number of Testimonials",
                  "responsive-block-editor-addons"
                )}
                value={count}
                onChange={(newCount) => {
                  let cloneTest_block = [...testimonialBlock];
                  if (cloneTest_block.length < newCount) {
                    const incAmount = Math.abs(
                      newCount - cloneTest_block.length
                    );

                    {
                      times(incAmount, (n) => {
                        cloneTest_block.push({
                          title: "Team Title " + newCount,
                          descriptions: "",
                        });
                      });
                    }
                    setAttributes({ testimonialBlock: cloneTest_block });
                  } else {
                    const incAmount = Math.abs(
                      newCount - cloneTest_block.length
                    );
                    let data_new = cloneTest_block;
                    for (var i = 0; i < incAmount; i++) {
                      data_new.pop();
                    }
                    setAttributes({ testimonialBlock: data_new });
                  }
                  setAttributes({ count: newCount });
                }}
                min={1}
                max={3}
                step={1}
              />
              {count > 1 && (
                <SelectControl
                  label={__("Gutter", "responsive-block-editor-addons")}
                  value={gutter}
                  options={gutterOptions}
                  onChange={(newGutter) => setAttributes({ gutter: newGutter })}
                />
              )}

              <SelectControl
                label={__("Cite Alignment", "responsive-block-editor-addons")}
                description={__(
                  "Left, center or right align the cite name and title.",
                  "responsive-block-editor-addons"
                )}
                options={citeAlignOptions}
                value={testimonialCiteAlign}
                onChange={(value) =>
                  this.props.setAttributes({
                    testimonialCiteAlign: value,
                  })
                }
              />
            </PanelBody>
            <PanelBody
              title={__("Image", "responsive-block-editor-addons")}
              initialOpen={false}
            >
                  <ImageSettingsControl {...this.props} />
      </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelColorSettings
              title={__(
                "Colors and Background",
                "responsive-block-editor-addons"
              )}
              initialOpen={false}
              colorSettings={[
                {
                  label: __("Text Color", "responsive-block-editor-addons"),
                  value: testimonialTextColor,
                  onChange: (colorValue) =>
                    setAttributes({ testimonialTextColor: colorValue }),
                },
                {
                  label: __("Name Color", "responsive-block-editor-addons"),
                  value: testimonialNameColor,
                  onChange: (colorValue) =>
                    setAttributes({ testimonialNameColor: colorValue }),
                },
                {
                  label: __(
                    "Title/Designation Color",
                    "responsive-block-editor-addons"
                  ),
                  value: testimonialTitleColor,
                  onChange: (colorValue) =>
                    setAttributes({ testimonialTitleColor: colorValue }),
                },
                {
                  label: __(
                    "Background Color",
                    "responsive-block-editor-addons"
                  ),
                  value: testimonialBackgroundColor,
                  onChange: (colorValue) =>
                    setAttributes({ testimonialBackgroundColor: colorValue }),
                },
              ]}
            >
              <ToggleControl
                label="Gradient Background"
                checked={bgGradient}
                onChange={() =>
                  this.props.setAttributes({
                    bgGradient: !bgGradient,
                  })
                }
              />
              {bgGradient && [
                <PanelColorSettings
                  title={__(
                    "Secondary Background Color",
                    "responsive-block-editor-addons"
                  )}
                  initialOpen={true}
                  colorSettings={[
                    {
                      label: __(
                        "Secondary Background Color",
                        "responsive-block-editor-addons"
                      ),
                      value: secondaryBackgroundColor,
                      onChange: (colorValue) =>
                        setAttributes({ secondaryBackgroundColor: colorValue }),
                    },
                  ]}
                ></PanelColorSettings>,
                <RangeControl
                  label={__(
                    "Gradient Degree",
                    "responsive-block-editor-addons"
                  )}
                  value={gradientDegree}
                  onChange={(value) =>
                    setAttributes({
                      gradientDegree: value !== undefined ? value : 100,
                    })
                  }
                  min={0}
                  max={360}
                />,
              ]}
              <RangeControl
                label={__(
                  "Background Color Opacity",
                  "responsive-block-editor-addons"
                )}
                value={opacity}
                onChange={(value) =>
                  this.props.setAttributes({
                    opacity: value !== undefined ? value : 1,
                  })
                }
                min={0}
                step={0.01}
                max={1}
                allowReset
              />
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
                    className="uagb-rm-btn"
                    onClick={this.onRemoveImage}
                    isLink
                    isDestructive
                  >
                    {__("Remove Image", "responsive-block-editor-addons")}
                  </Button>
                )}
              </BaseControl>
              <SelectControl
                label={__("Background Position")}
                value={backgroundPosition}
                onChange={(value) =>
                  setAttributes({ backgroundPosition: value })
                }
                options={[
                  { value: "left top", label: __("Left Top") },
                  { value: "left center", label: __("Left Center") },
                  { value: "left bottom", label: __("Left Bottom") },
                  { value: "right top", label: __("Right Top") },
                  { value: "right center", label: __("Right Center") },
                  { value: "right bottom", label: __("Right Bottom") },
                  { value: "center top", label: __("Center Top") },
                  { value: "center center", label: __("Center Center") },
                  { value: "center bottom", label: __("Center Bottom") },
                ]}
              />
              <SelectControl
                label={__("Background Repeat")}
                value={backgroundRepeat}
                onChange={(value) => setAttributes({ backgroundRepeat: value })}
                options={[
                  { value: "initial", label: __("Initial") },
                  { value: "repeat", label: __("Repeat") },
                  { value: "no-repeat", label: __("No-Repeat") },
                  { value: "round", label: __("Round") },
                  { value: "inherit", label: __("Inherit") },
                  { value: "space", label: __("Space") },
                  { value: "repeat-y", label: __("Repeat Y") },
                  { value: "repeat-x", label: __("Repeat X") },
                ]}
              />
              <SelectControl
                label={__("Background Size")}
                value={backgroundSize}
                onChange={(value) => setAttributes({ backgroundSize: value })}
                options={[
                  { value: "initial", label: __("Initial") },
                  { value: "cover", label: __("Cover") },
                  { value: "contain", label: __("Contain") },
                  { value: "auto", label: __("Auto") },
                  { value: "inherit", label: __("Inherit") },
                ]}
              />
            </PanelColorSettings>
            <PanelBody
              title={__("Typography", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <PanelBody
                title={__("Content", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <SelectControl
                  label={__("Font Family", "responsive-block-editor-addons")}
                  options={fontOptions}
                  value={contentFontFamily}
                  onChange={(value) => {
                    setAttributes({
                      contentFontFamily: value,
                    }),
                      loadGoogleFont(value);
                  }}
                />
                <RangeControl
                  label={__("Font Size", "responsive-block-editor-addons")}
                  value={contentFontSize}
                  onChange={(value) =>
                    this.props.setAttributes({
                      contentFontSize: value,
                    })
                  }
                  min={0}
                  max={100}
                  step={1}
                />
                <SelectControl
                  label={__("Font Weight", "responsive-block-editor-addons")}
                  options={fontWeightOptions}
                  value={contentFontWeight}
                  onChange={(value) =>
                    this.props.setAttributes({
                      contentFontWeight: value,
                    })
                  }
                />
                <RangeControl
                  label={__("Line Height", "responsive-block-editor-addons")}
                  value={contentLineHeight}
                  onChange={(value) =>
                    this.props.setAttributes({
                      contentLineHeight: value,
                    })
                  }
                  min={0}
                  max={100}
                  step={0.01}
                />
                <SelectControl
                  label={__("Text Transform", "responsive-block-editor-addons")}
                  options={textTransformOptions}
                  value={contentTextTransform}
                  onChange={(value) =>
                    this.props.setAttributes({
                      contentTextTransform: value,
                    })
                  }
                />
              </PanelBody>
              <PanelBody
                title={__("Name", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <SelectControl
                  label={__("Font Family", "responsive-block-editor-addons")}
                  options={fontOptions}
                  value={nameFontFamily}
                  onChange={(value) => {
                    setAttributes({
                      nameFontFamily: value,
                    }),
                      loadGoogleFont(value);
                  }}
                />
                <RangeControl
                  label={__("Font Size", "responsive-block-editor-addons")}
                  value={nameFontSize}
                  onChange={(value) =>
                    this.props.setAttributes({
                      nameFontSize: value,
                    })
                  }
                  min={0}
                  max={100}
                  step={1}
                />
                <SelectControl
                  label={__("Font Weight", "responsive-block-editor-addons")}
                  options={fontWeightOptions}
                  value={nameFontWeight}
                  onChange={(value) =>
                    this.props.setAttributes({
                      nameFontWeight: value,
                    })
                  }
                />
                <RangeControl
                  label={__("Line Height", "responsive-block-editor-addons")}
                  value={nameLineHeight}
                  onChange={(value) =>
                    this.props.setAttributes({
                      nameLineHeight: value,
                    })
                  }
                  min={0}
                  max={100}
                  step={0.01}
                />
                <SelectControl
                  label={__("Text Transform", "responsive-block-editor-addons")}
                  options={textTransformOptions}
                  value={nameTextTransform}
                  onChange={(value) =>
                    this.props.setAttributes({
                      nameTextTransform: value,
                    })
                  }
                />
              </PanelBody>
              <PanelBody
                title={__("Title", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <SelectControl
                  label={__("Font Family", "responsive-block-editor-addons")}
                  options={fontOptions}
                  value={titleFontFamily}
                  onChange={(value) => {
                    setAttributes({
                      titleFontFamily: value,
                    }),
                      loadGoogleFont(value);
                  }}
                />
                <RangeControl
                  label={__("Font Size", "responsive-block-editor-addons")}
                  value={titleFontSize}
                  onChange={(value) =>
                    this.props.setAttributes({
                      titleFontSize: value,
                    })
                  }
                  min={0}
                  max={100}
                  step={1}
                />
                <SelectControl
                  label={__("Font Weight", "responsive-block-editor-addons")}
                  options={fontWeightOptions}
                  value={titleFontWeight}
                  onChange={(value) =>
                    this.props.setAttributes({
                      titleFontWeight: value,
                    })
                  }
                />
                <RangeControl
                  label={__("Line Height", "responsive-block-editor-addons")}
                  value={titleLineHeight}
                  onChange={(value) =>
                    this.props.setAttributes({
                      titleLineHeight: value,
                    })
                  }
                  min={0}
                  max={100}
                  step={0.01}
                />
                <SelectControl
                  label={__("Text Transform", "responsive-block-editor-addons")}
                  options={textTransformOptions}
                  value={titleTextTransform}
                  onChange={(value) =>
                    this.props.setAttributes({
                      titleTextTransform: value,
                    })
                  }
                />
              </PanelBody>
            </PanelBody>

            <PanelBody
              title={__("Border", "responsive-block-editor-addons")}
              initialOpen={false}
            >
                <BlockBorderHelperControl
                    attrNameTemplate="block%s"
                    values={{ radius: blockBorderRadius, style: blockBorderStyle, width: blockBorderWidth, color: blockBorderColor }}
                    setAttributes={setAttributes}
                    {...this.props}
                />

              <BoxShadowControl
                setAttributes={setAttributes}
                label={__("Box Shadow", "responsive-block-editor-addons")}
                boxShadowColor={{ value: boxShadowColor, label: __("Color") }}
                boxShadowHOffset={{
                  value: boxShadowHOffset,
                  label: __("Horizontal", "responsive-block-editor-addons"),
                }}
                boxShadowVOffset={{
                  value: boxShadowVOffset,
                  label: __("Vertical", "responsive-block-editor-addons"),
                }}
                boxShadowBlur={{
                  value: boxShadowBlur,
                  label: __("Blur", "responsive-block-editor-addons"),
                }}
                boxShadowSpread={{
                  value: boxShadowSpread,
                  label: __("Spread", "responsive-block-editor-addons"),
                }}
                boxShadowPosition={{
                  value: boxShadowPosition,
                  label: __("Position", "responsive-block-editor-addons"),
                }}
              />
              <BoxShadowControlHelper
                setAttributes={setAttributes}
                label={__("Hover Box Shadow")}
                attrNameTemplate="hover%s"
                boxShadowColor={{ value: hoverboxShadowColor }}
                boxShadowHOffset={{ value: hoverboxShadowHOffset }}
                boxShadowVOffset={{ value: hoverboxShadowVOffset }}
                boxShadowBlur={{ value: hoverboxShadowBlur }}
                boxShadowSpread={{ value: hoverboxShadowSpread }}
                boxShadowPosition={{ value: hoverboxShadowPosition }}
              />
            </PanelBody>
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <TabPanel
                className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                activeClass="active-tab"
                tabs={[
                  {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className:
                      " responsive-desktop-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className:
                      " responsive-tablet-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className:
                      " responsive-mobile-tab  responsive-responsive-tabs",
                  },
                ]}
              >
                {(tab) => {
                  let tabout;

                  if ("mobile" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RangeControl
                          label={__(
                            "Padding Mobile",
                            "responsive-block-editor-addons"
                          )}
                          value={paddingMobile}
                          onChange={(value) =>
                            this.props.setAttributes({
                              paddingMobile: value,
                            })
                          }
                          min={0}
                          max={50}
                          step={1}
                        />
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RangeControl
                          label={__(
                            "Padding Tablet",
                            "responsive-block-editor-addons"
                          )}
                          value={paddingTablet}
                          onChange={(value) =>
                            this.props.setAttributes({
                              paddingTablet: value,
                            })
                          }
                          min={0}
                          max={50}
                          step={1}
                        />
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <RangeControl
                          label={__(
                            "Padding",
                            "responsive-block-editor-addons"
                          )}
                          value={padding}
                          onChange={(value) =>
                            this.props.setAttributes({
                              padding: value,
                            })
                          }
                          min={0}
                          max={50}
                          step={1}
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
              <RangeControl
                label={__("Content", "responsive-block-editor-addons")}
                value={contentSpacing}
                onChange={(value) =>
                  this.props.setAttributes({
                    contentSpacing: value !== undefined ? value : 8,
                  })
                }
                min={-50}
                max={100}
                step={1}
              />
              <RangeControl
                label={__("Name", "responsive-block-editor-addons")}
                value={nameSpacing}
                onChange={(value) =>
                  this.props.setAttributes({
                    nameSpacing: value !== undefined ? value : -5,
                  })
                }
                min={-50}
                max={100}
                step={1}
              />
              <RangeControl
                label={__("Image", "responsive-block-editor-addons")}
                value={imageSpacing}
                onChange={(value) =>
                  this.props.setAttributes({
                    imageSpacing: value,
                  })
                }
                min={-50}
                max={100}
                step={1}
              />
              <RangeControl
                label={__("Title", "responsive-block-editor-addons")}
                value={titleSpacing}
                onChange={(value) =>
                  this.props.setAttributes({
                    titleSpacing: value,
                  })
                }
                min={-50}
                max={100}
                step={1}
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"advance"}></InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
