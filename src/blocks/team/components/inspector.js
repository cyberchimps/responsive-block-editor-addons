/**
 * Inspector Controls
 */

import times from "lodash/times";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const { InspectorControls, PanelColorSettings, MediaUpload } = wp.editor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  TextControl,
  BaseControl,
  Button,
  ToggleControl,
  TabPanel,
  Dashicon,
} = wp.components;
import BoxShadowControl from "../../../utils/components/box-shadow";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";

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

    // Setup the attributes
    const {
      attributes: {
        count,
        gutter,
        teamBlock,
        imageSize,
        designationColor,
        descriptionColor,
        socialIconColor,
        titleFontSize,
        titleFontFamily,
        descriptionFontFamily,
        designationFontFamily,
        designationFontSize,
        descriptionFontSize,
        titleFontWeight,
        designationFontWeight,
        descriptionFontWeight,
        titleLineHeight,
        designationLineHeight,
        descriptionLineHeight,
        titleSpacing,
        designationSpacing,
        descriptionSpacing,
        socialIconSpacing,
        imageMarginTop,
        imageMarginBottom,
        titleColor,
        backgroundColor,
        borderColor,
        borderWidth,
        borderRadius,
        padding,
        imageShape,
        boxShadowColor,
        boxShadowHOffset,
        boxShadowVOffset,
        boxShadowBlur,
        boxShadowSpread,
        boxShadowPosition,
        opacity,
        secondaryBackgroundColor,
        gradientDegree,
        colorLocation1,
        colorLocation2,
        bgGradient,
        backgroundImage,
        backgroundPosition,
        backgroundRepeat,
        backgroundSize,
        backgroundAttachment,
        facebook,
        twitter,
        linkedin,
        instagram,
        email,
        youtube,
        pinterest,
        iconSize,
        imageWidth,
        imageWidthMobile,
        imageWidthTablet,
        showImage,
        showName,
        showDesignation,
        showDescription,
        showSocialIcons,
        stack,
      },
      setAttributes,
    } = this.props;

    // Update color values
    const onChangeDesignationColor = (value) =>
      setAttributes({ designationColor: value });
    const onChangeDescriptionColor = (value) =>
      setAttributes({ descriptionColor: value });
    const onChangeSocialIconColor = (value) =>
      setAttributes({ socialIconColor: value });
    const onChangetitleColor = (value) => setAttributes({ titleColor: value });
    const onChangeBackgroundColor = (value) =>
      setAttributes({ backgroundColor: value });
    const onChangeBorderColor = (value) =>
      setAttributes({ borderColor: value });
    const onChangeSecondaryBackgroundColor = (value) =>
      setAttributes({ secondaryBackgroundColor: value });

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
                  "Number of Team Member Boxes",
                  "responsive-block-editor-addons"
                )}
                value={count}
                onChange={(newCount) => {
                  let cloneTest_block = [...teamBlock];
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
                    setAttributes({ teamBlock: cloneTest_block });
                  } else {
                    const incAmount = Math.abs(
                      newCount - cloneTest_block.length
                    );
                    let data_new = cloneTest_block;
                    for (var i = 0; i < incAmount; i++) {
                      data_new.pop();
                    }
                    setAttributes({ teamBlock: data_new });
                  }
                  setAttributes({ count: newCount });
                }}
                min={1}
                max={4}
                step={1}
              />
              <SelectControl
                label={__("Stack on", "responsive-block-editor-addons")}
                value={stack}
                options={[
                  {
                    value: "none",
                    label: __("None", "responsive-block-editor-addons"),
                  },
                  {
                    value: "tablet",
                    label: __("Tablet", "responsive-block-editor-addons"),
                  },
                  {
                    value: "mobile",
                    label: __("Mobile", "responsive-block-editor-addons"),
                  },
                ]}
                onChange={(value) => setAttributes({ stack: value })}
                help={__(
                  "Note: Choose on what breakpoint the team cards will stack.",
                  "responsive-block-editor-addons"
                )}
              />
              {count > 1 && (
                <SelectControl
                  label={__("Gutter", "responsive-block-editor-addons")}
                  value={gutter}
                  options={gutterOptions}
                  onChange={(newGutter) => setAttributes({ gutter: newGutter })}
                />
              )}
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
              <RangeControl
                label={__("Border Width", "responsive-block-editor-addons")}
                value={borderWidth}
                onChange={(value) =>
                  this.props.setAttributes({
                    borderWidth: value,
                  })
                }
                min={0}
                max={50}
                step={1}
              />
              <RangeControl
                label={__("Border Radius", "responsive-block-editor-addons")}
                value={borderRadius}
                onChange={(value) =>
                  this.props.setAttributes({
                    borderRadius: value,
                  })
                }
                min={0}
                max={50}
                step={1}
              />
              <RangeControl
                label={__("Padding", "responsive-block-editor-addons")}
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
              <PanelColorSettings
                title={__(
                  "Column Background",
                  "responsive-block-editor-addons"
                )}
                initialOpen={false}
                colorSettings={[
                  {
                    value: backgroundColor,
                    onChange: onChangeBackgroundColor,
                    label: __(
                      "Background Color",
                      "responsive-block-editor-addons"
                    ),
                  },
                ]}
              >
                <RangeControl
                  label={__(
                    "Background Color Opacity",
                    "responsive-block-editor-addons"
                  )}
                  value={opacity}
                  onChange={(value) =>
                    this.props.setAttributes({
                      opacity: value !== undefined ? value : 50,
                    })
                  }
                  min={0}
                  max={100}
                  allowReset
                />
                <ToggleControl
                  label="Gradient Background"
                  checked={bgGradient}
                  onChange={() =>
                    this.props.setAttributes({
                      bgGradient: !bgGradient,
                    })
                  }
                />
                {bgGradient && (
                  <Fragment>
                    <PanelColorSettings
                      title={__(
                        "Primary Color",
                        "responsive-block-editor-addons"
                      )}
                      initialOpen={false}
                      colorSettings={[
                        {
                          value: backgroundColor,
                          onChange: onChangeBackgroundColor,
                          label: __(
                            "Primary Color",
                            "responsive-block-editor-addons"
                          ),
                        },
                      ]}
                    ></PanelColorSettings>
                    <PanelColorSettings
                      title={__(
                        "Secondary Color",
                        "responsive-block-editor-addons"
                      )}
                      initialOpen={false}
                      colorSettings={[
                        {
                          label: __(
                            "Secondary Color",
                            "responsive-block-editor-addons"
                          ),
                          value: secondaryBackgroundColor,
                          onChange: onChangeSecondaryBackgroundColor,
                        },
                      ]}
                    ></PanelColorSettings>
                    <RangeControl
                      label={__(
                        "Color Location 1",
                        "responsive-block-editor-addons"
                      )}
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
                      label={__(
                        "Color Location 2",
                        "responsive-block-editor-addons"
                      )}
                      value={colorLocation2}
                      min={0}
                      max={100}
                      onChange={(value) =>
                        setAttributes({
                          colorLocation2: value !== undefined ? value : 100,
                        })
                      }
                    />
                  </Fragment>
                )}
                {bgGradient && (
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
                  />
                )}
                <BaseControl
                  className="editor-bg-image-control"
                  label={__(
                    "Background Image",
                    "responsive-block-editor-addons"
                  )}
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
                          : __(
                              "Replace image",
                              "responsive-block-editor-addons"
                            )}
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
                  onChange={(newBackgroundPosition) =>
                    setAttributes({ backgroundPosition: newBackgroundPosition })
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
                  onChange={(newBackgroundRepeat) =>
                    setAttributes({ backgroundRepeat: newBackgroundRepeat })
                  }
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
                  value={backgroundAttachment}
                  onChange={(newBackgroundAttachment) =>
                    setAttributes({
                      backgroundAttachment: newBackgroundAttachment,
                    })
                  }
                  options={[
                    { value: "fixed", label: __("Fixed") },
                    { value: "scroll", label: __("Scroll") },
                  ]}
                />
                <SelectControl
                  label={__("Background Size")}
                  value={backgroundSize}
                  onChange={(newBackgroundSize) =>
                    setAttributes({ backgroundSize: newBackgroundSize })
                  }
                  options={[
                    { value: "initial", label: __("Initial") },
                    { value: "cover", label: __("Cover") },
                    { value: "contain", label: __("Contain") },
                    { value: "auto", label: __("Auto") },
                    { value: "inherit", label: __("Inherit") },
                  ]}
                />
              </PanelColorSettings>
            </PanelBody>

            <PanelBody
              title={__("Content", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ToggleControl
                label="Image"
                checked={showImage}
                onChange={() =>
                  this.props.setAttributes({
                    showImage: !showImage,
                  })
                }
              />
              <ToggleControl
                label="Name"
                checked={showName}
                onChange={() =>
                  this.props.setAttributes({
                    showName: !showName,
                  })
                }
              />
              <ToggleControl
                label="Designation"
                checked={showDesignation}
                onChange={() =>
                  this.props.setAttributes({
                    showDesignation: !showDesignation,
                  })
                }
              />
              <ToggleControl
                label="Description"
                checked={showDescription}
                onChange={() =>
                  this.props.setAttributes({
                    showDescription: !showDescription,
                  })
                }
              />
              <ToggleControl
                label="Social Icons"
                checked={showSocialIcons}
                onChange={() =>
                  this.props.setAttributes({
                    showSocialIcons: !showSocialIcons,
                  })
                }
              />
            </PanelBody>
            <PanelBody
              title={__("Image", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <SelectControl
                label={__("Image Shape", "responsive-block-editor-addons")}
                value={imageShape}
                options={imageShapeOptions}
                onChange={(newImageShape) =>
                  setAttributes({ imageShape: newImageShape })
                }
              />
              <SelectControl
                label={__("Image Size")}
                value={imageSize}
                onChange={(newImageSize) =>
                  setAttributes({ imageSize: newImageSize })
                }
                options={[
                  { value: "full", label: __("Full Size") },
                  { value: "thumbnail", label: __("Thumbnail") },
                  { value: "medium", label: __("Medium") },
                  { value: "large", label: __("Large") },
                ]}
              />
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
                            "Width (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={imageWidthMobile}
                          onChange={(value) =>
                            setAttributes({
                              imageWidthMobile: value,
                            })
                          }
                          min={0}
                          max={500}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RangeControl
                          label={__(
                            "Width (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={imageWidthTablet}
                          onChange={(value) =>
                            setAttributes({
                              imageWidthTablet: value,
                            })
                          }
                          min={0}
                          max={500}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <RangeControl
                          label={__(
                            "Width (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={imageWidth}
                          onChange={(value) =>
                            setAttributes({
                              imageWidth: value,
                            })
                          }
                          min={0}
                          max={500}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
            </PanelBody>
            <PanelBody
              title={__("Social", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <PanelBody
                title={__(
                  "Hide Social Icons",
                  "responsive-block-editor-addons"
                )}
                initialOpen={true}
              >
                <ToggleControl
                  label="Twitter"
                  checked={twitter}
                  onChange={() =>
                    this.props.setAttributes({
                      twitter: !twitter,
                    })
                  }
                />
                <ToggleControl
                  label="Facebook"
                  checked={facebook}
                  onChange={() =>
                    this.props.setAttributes({
                      facebook: !facebook,
                    })
                  }
                />
                <ToggleControl
                  label="Linkedin"
                  checked={linkedin}
                  onChange={() =>
                    this.props.setAttributes({
                      linkedin: !linkedin,
                    })
                  }
                />
                <ToggleControl
                  label="Instagram"
                  checked={instagram}
                  onChange={() =>
                    this.props.setAttributes({
                      instagram: !instagram,
                    })
                  }
                />
                <ToggleControl
                  label="Email"
                  checked={email}
                  onChange={() =>
                    this.props.setAttributes({
                      email: !email,
                    })
                  }
                />
                <ToggleControl
                  label="Youtube"
                  checked={youtube}
                  onChange={() =>
                    this.props.setAttributes({
                      youtube: !youtube,
                    })
                  }
                />
                <ToggleControl
                  label="Pinterest"
                  checked={pinterest}
                  onChange={() =>
                    this.props.setAttributes({
                      pinterest: !pinterest,
                    })
                  }
                />
              </PanelBody>
              <PanelColorSettings
                title={__("Colors", "responsive-block-editor-addons")}
                initialOpen={true}
                colorSettings={[
                  {
                    value: socialIconColor,
                    onChange: onChangeSocialIconColor,
                    label: __(
                      "Social Icon Color",
                      "responsive-block-editor-addons"
                    ),
                  },
                ]}
              ></PanelColorSettings>
              <RangeControl
                label={__("Icon Size", "responsive-block-editor-addons")}
                value={iconSize}
                onChange={(value) =>
                  this.props.setAttributes({
                    iconSize: value,
                  })
                }
                min={0}
                max={100}
                step={1}
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody
              title={__("Typography", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <PanelBody
                title={__("Title Typography", "responsive-block-editor-addons")}
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
                  max={50}
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
                  step={1}
                />
              </PanelBody>
              <PanelBody
                title={__(
                  "Designation Typography",
                  "responsive-block-editor-addons"
                )}
                initialOpen={false}
              >
                <SelectControl
                  label={__("Font Family", "responsive-block-editor-addons")}
                  options={fontOptions}
                  value={designationFontFamily}
                  onChange={(value) => {
                    setAttributes({
                      designationFontFamily: value,
                    }),
                      loadGoogleFont(value);
                  }}
                />
                <RangeControl
                  label={__("Font Size", "responsive-block-editor-addons")}
                  value={designationFontSize}
                  onChange={(value) =>
                    this.props.setAttributes({
                      designationFontSize: value,
                    })
                  }
                  min={0}
                  max={50}
                  step={1}
                />
                <SelectControl
                  label={__("Font Weight", "responsive-block-editor-addons")}
                  options={fontWeightOptions}
                  value={designationFontWeight}
                  onChange={(value) =>
                    this.props.setAttributes({
                      designationFontWeight: value,
                    })
                  }
                />
                <RangeControl
                  label={__("Line Height", "responsive-block-editor-addons")}
                  value={designationLineHeight}
                  onChange={(value) =>
                    this.props.setAttributes({
                      designationLineHeight: value,
                    })
                  }
                  min={0}
                  max={100}
                  step={1}
                />
              </PanelBody>
              <PanelBody
                title={__(
                  "Description Typography",
                  "responsive-block-editor-addons"
                )}
                initialOpen={false}
              >
                <SelectControl
                  label={__("Font Family", "responsive-block-editor-addons")}
                  options={fontOptions}
                  value={descriptionFontFamily}
                  onChange={(value) => {
                    setAttributes({
                      descriptionFontFamily: value,
                    }),
                      loadGoogleFont(value);
                  }}
                />
                <RangeControl
                  label={__("Font Size", "responsive-block-editor-addons")}
                  value={descriptionFontSize}
                  onChange={(value) =>
                    this.props.setAttributes({
                      descriptionFontSize: value,
                    })
                  }
                  min={0}
                  max={50}
                  step={1}
                />
                <SelectControl
                  label={__("Font Weight", "responsive-block-editor-addons")}
                  options={fontWeightOptions}
                  value={descriptionFontWeight}
                  onChange={(value) =>
                    this.props.setAttributes({
                      descriptionFontWeight: value,
                    })
                  }
                />
                <RangeControl
                  label={__("Line Height", "responsive-block-editor-addons")}
                  value={descriptionLineHeight}
                  onChange={(value) =>
                    this.props.setAttributes({
                      descriptionLineHeight: value,
                    })
                  }
                  min={0}
                  max={100}
                  step={1}
                />
              </PanelBody>
            </PanelBody>

            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RangeControl
                label={__(
                  "Title Bottom Spacing",
                  "responsive-block-editor-addons"
                )}
                value={titleSpacing}
                onChange={(value) =>
                  this.props.setAttributes({
                    titleSpacing: value,
                  })
                }
                min={0}
                max={50}
                step={1}
              />
              <RangeControl
                label={__(
                  "Designation Bottom Spacing",
                  "responsive-block-editor-addons"
                )}
                value={designationSpacing}
                onChange={(value) =>
                  this.props.setAttributes({
                    designationSpacing: value,
                  })
                }
                min={0}
                max={50}
                step={1}
              />
              <RangeControl
                label={__(
                  "Description Bottom Spacing",
                  "responsive-block-editor-addons"
                )}
                value={descriptionSpacing}
                onChange={(value) =>
                  this.props.setAttributes({
                    descriptionSpacing: value,
                  })
                }
                min={0}
                max={50}
                step={1}
              />
              <RangeControl
                label={__(
                  "Inter Social Icon Spacing",
                  "responsive-block-editor-addons"
                )}
                value={socialIconSpacing}
                onChange={(value) =>
                  this.props.setAttributes({
                    socialIconSpacing: value,
                  })
                }
                min={0}
                max={50}
                step={1}
              />
              <RangeControl
                label={__("Image Margin Top", "responsive-block-editor-addons")}
                value={imageMarginTop}
                onChange={(value) =>
                  this.props.setAttributes({
                    imageMarginTop: value,
                  })
                }
                min={0}
                max={200}
                step={1}
              />
              <RangeControl
                label={__(
                  "Image Margin Bottom",
                  "responsive-block-editor-addons"
                )}
                value={imageMarginBottom}
                onChange={(value) =>
                  this.props.setAttributes({
                    imageMarginBottom: value,
                  })
                }
                min={0}
                max={200}
                step={1}
              />
            </PanelBody>
            <PanelColorSettings
              title={__("Color Settings", "responsive-block-editor-addons")}
              initialOpen={false}
              colorSettings={[
                {
                  value: borderColor,
                  onChange: onChangeBorderColor,
                  label: __("Border Color", "responsive-block-editor-addons"),
                },
                {
                  value: titleColor,
                  onChange: onChangetitleColor,
                  label: __("Title Color", "responsive-block-editor-addons"),
                },
                {
                  value: designationColor,
                  onChange: onChangeDesignationColor,
                  label: __(
                    "Designation Color",
                    "responsive-block-editor-addons"
                  ),
                },
                {
                  value: descriptionColor,
                  onChange: onChangeDescriptionColor,
                  label: __(
                    "Description Color",
                    "responsive-block-editor-addons"
                  ),
                },
              ]}
            ></PanelColorSettings>
          </InspectorTab>
          <InspectorTab key={"advance"}></InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
