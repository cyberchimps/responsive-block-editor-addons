/**
 * Inspector Controls
 */
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import BoxShadowControl from "../../../utils/components/box-shadow";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import renderSVG from "../../../renderIcon";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ColorBackgroundControl from "../../../settings-components/Block Background Settings/Color Background Settings";
import ImageBackgroundControl from "../../../settings-components/Block Background Settings/Image Background Settings";
import ResponsiveSpacingControl from "../../../settings-components/Responsive Spacing Settings";
import ResponsivePaddingControl from "../../../settings-components/Responsive Spacing Settings/Responsive Padding Control";
import GradientBackgroundControl from "../../../settings-components/Block Background Settings/Gradient Background Settings";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  MediaUpload,
  ColorPalette,
} = wp.blockEditor;

// Import Inspector components
const {
  Button,
  Icon,
  PanelBody,
  RangeControl,
  SelectControl,
  ToggleControl,
  TabPanel,
  Dashicon,
} = wp.components;

let svg_icons = Object.keys(ResponsiveBlocksIcon);

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    // Setup the attributes
    const {
      buttonBackgroundColor,
      buttonTextColor,
      buttonSize,
      buttonShape,
      buttonTarget,
      ctaTitleFontFamily,
      ctaTitleFontSize,
      ctaTitleFontSizeMobile,
      ctaTitleFontSizeTablet,
      ctaTextFontFamily,
      ctaTextFontSize,
      ctaTextFontSizeMobile,
      ctaTextFontSizeTablet,
      backgroundColor,
      ctaTextColor,
      dimRatio,
      backgroundImage,
      imgID,
      opacity,
      headingLineHeight,
      headingFontWeight,
      contentLineHeight,
      contentFontWeight,
      buttonvPadding,
      buttonhPadding,
      buttonborderWidth,
      buttonborderStyle,
      icon,
      iconPosition,
      hbuttonBackgroundColor,
      hbuttonTextColor,
      buttonborderColor,
      buttonborderHColor,
      resctaType,
      titleSpace,
      titleSpaceMobile,
      titleSpaceTablet,
      subtitleSpace,
      subtitleSpaceMobile,
      subtitleSpaceTablet,
      iconSpace,
      backgroundType,
      gradientDirection,
      colorLocation1,
      colorLocation2,
      backgroundColor1,
      backgroundColor2,
      buttonbackgroundType,
      buttongradientDirection,
      buttoncolorLocation1,
      buttoncolorLocation2,
      buttonbackgroundColor1,
      buttonbackgroundColor2,
      buttonSpace,
      buttonSpaceMobile,
      buttonSpaceTablet,
      borderRadius,
      boxShadowColor,
      boxShadowHOffset,
      boxShadowVOffset,
      boxShadowBlur,
      boxShadowSpread,
      boxShadowPosition,
      icon_color,
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
      backgroundImagePosition,
      backgroundImageRepeat,
      backgroundImageSize,
      buttonTextFontFamily,
      buttonTextFontSize,
      buttonTextFontSizeMobile,
      buttonTextFontSizeTablet,
      buttonTextLineHeight,
      buttonTextFontWeight,
    } = this.props.attributes;
    const { setAttributes } = this.props;

    // Button size values
    const buttonSizeOptions = [
      {
        value: "responsive-block-editor-addons-cta-button-size-small",
        label: __("Small"),
      },
      {
        value: "responsive-block-editor-addons-cta-button-size-medium",
        label: __("Medium"),
      },
      {
        value: "responsive-block-editor-addons-cta-button-size-large",
        label: __("Large"),
      },
      {
        value: "responsive-block-editor-addons-cta-button-size-extralarge",
        label: __("Extra Large"),
      },
    ];

    // Button shape
    const buttonShapeOptions = [
      {
        value: "responsive-block-editor-addons-cta-button-shape-square",
        label: __("Square"),
      },
      {
        value: "responsive-block-editor-addons-cta-button-shape-rounded",
        label: __("Rounded Square"),
      },
      {
        value: "responsive-block-editor-addons-cta-button-shape-circular",
        label: __("Circular"),
      },
    ];

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

    // Change the image
    const onSelectImage = (img) => {
      setAttributes({
        imgID: img.id,
        imgURL: img.url,
        imgAlt: img.alt,
      });
    };

    // Clear the image
    const onRemoveImage = () => {
      setAttributes({
        imgID: null,
        imgURL: null,
        imgAlt: null,
      });
    };

    // Update color values
    const onChangeBackgroundColor = (value) =>
      setAttributes({ backgroundColor: value });
    const onChangeTextColor = (value) => setAttributes({ ctaTextColor: value });
    const onChangeButtonColor = (value) =>
      setAttributes({ buttonBackgroundColor: value });
    const onChangeButtonTextColor = (value) =>
      setAttributes({ buttonTextColor: value });

    const onChangeBorderColor = (value) =>
      setAttributes({ buttonborderColor: value });
    const onChangeBorderHoverColor = (value) =>
      setAttributes({ buttonborderHColor: value });
    const onChangeButtonTexthColor = (value) =>
      setAttributes({ hbuttonTextColor: value });
    const onChangeButtonhColor = (value) =>
      setAttributes({ hbuttonBackgroundColor: value });

    // Background Type Options
    const backgroundTypeOptions = [
      { value: "none", label: __("None", "responsive-block-editor-addons") },
      { value: "color", label: __("Color", "responsive-block-editor-addons") },
      {
        value: "gradient",
        label: __("Gradient", "responsive-block-editor-addons"),
      },
      { value: "image", label: __("Image", "responsive-block-editor-addons") },
    ];

    // Background Type Options
    const buttonbackgroundTypeOptions = [
      { value: "none", label: __("None", "responsive-block-editor-addons") },
      { value: "color", label: __("Color", "responsive-block-editor-addons") },
      {
        value: "gradient",
        label: __("Gradient", "responsive-block-editor-addons"),
      },
    ];

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={true}
            >
              <RangeControl
                label={__("Border Radius", "responsive-block-editor-addons")}
                value={borderRadius}
                onChange={(value) =>
                  setAttributes({
                    borderRadius: value !== undefined ? value : 12,
                  })
                }
                min={0}
                max={50}
                allowReset
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
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody
              title={__("Typography Options", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <PanelBody
                title={__("Title Typography", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <SelectControl
                  label={__("Font Family", "responsive-block-editor-addons")}
                  options={fontOptions}
                  value={ctaTitleFontFamily}
                  onChange={(value) => {
                    setAttributes({
                      ctaTitleFontFamily: value,
                    }),
                      loadGoogleFont(value);
                  }}
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
                              "Font Size",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={500}
                            value={ctaTitleFontSizeMobile}
                            onChange={(value) =>
                              setAttributes({
                                ctaTitleFontSizeMobile: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <Fragment>
                          <RangeControl
                            label={__(
                              "Font Size",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={500}
                            value={ctaTitleFontSizeTablet}
                            onChange={(value) =>
                              setAttributes({
                                ctaTitleFontSizeTablet: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    } else {
                      tabout = (
                        <Fragment>
                          <RangeControl
                            label={__(
                              "Font Size",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={500}
                            value={ctaTitleFontSize}
                            onChange={(value) =>
                              setAttributes({
                                ctaTitleFontSize: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    }

                    return <div>{tabout}</div>;
                  }}
                </TabPanel>

                <SelectControl
                  label={__("Font Weight", "responsive-block-editor-addons")}
                  options={fontWeightOptions}
                  value={headingFontWeight}
                  onChange={(value) =>
                    this.props.setAttributes({
                      headingFontWeight: value,
                    })
                  }
                />
                <RangeControl
                  label={__("Line Height", "responsive-block-editor-addons")}
                  value={headingLineHeight}
                  onChange={(value) =>
                    this.props.setAttributes({
                      headingLineHeight: value,
                    })
                  }
                  min={0}
                  max={100}
                  step={1}
                />
              </PanelBody>
              {resctaType === "text" && (
                <PanelBody
                  title={__(
                    "CTA Text Typography",
                    "responsive-block-editor-addons"
                  )}
                  initialOpen={false}
                >
                  <SelectControl
                    label={__("Font Family", "responsive-block-editor-addons")}
                    options={fontOptions}
                    value={buttonTextFontFamily}
                    onChange={(value) => {
                      setAttributes({
                        buttonTextFontFamily: value,
                      }),
                        loadGoogleFont(value);
                    }}
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
                                "Font Size",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={500}
                              value={buttonTextFontSizeMobile}
                              onChange={(value) =>
                                setAttributes({
                                  buttonTextFontSizeMobile: value,
                                })
                              }
                            />
                          </Fragment>
                        );
                      } else if ("tablet" === tab.name) {
                        tabout = (
                          <Fragment>
                            <RangeControl
                              label={__(
                                "Font Size",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={500}
                              value={buttonTextFontSizeTablet}
                              onChange={(value) =>
                                setAttributes({
                                  buttonTextFontSizeTablet: value,
                                })
                              }
                            />
                          </Fragment>
                        );
                      } else {
                        tabout = (
                          <Fragment>
                            <RangeControl
                              label={__(
                                "Font Size",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={500}
                              value={buttonTextFontSize}
                              onChange={(value) =>
                                setAttributes({
                                  buttonTextFontSize: value,
                                })
                              }
                            />
                          </Fragment>
                        );
                      }

                      return <div>{tabout}</div>;
                    }}
                  </TabPanel>
                  <SelectControl
                    label={__("Font Weight", "responsive-block-editor-addons")}
                    options={[
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
                    ]}
                    value={buttonTextFontWeight}
                    onChange={(value) =>
                      this.props.setAttributes({
                        buttonTextFontWeight: value !== undefined ? value : 900,
                      })
                    }
                  />
                  <RangeControl
                    label={__("Line Height", "responsive-block-editor-addons")}
                    value={buttonTextLineHeight}
                    onChange={(value) =>
                      this.props.setAttributes({
                        buttonTextLineHeight: value,
                      })
                    }
                    min={0}
                    max={100}
                    step={1}
                  />
                </PanelBody>
              )}
              {resctaType === "button" && (
                <PanelBody
                  title={__(
                    "Button Typography",
                    "responsive-block-editor-addons"
                  )}
                  initialOpen={false}
                >
                  <SelectControl
                    label={__("Font Family", "responsive-block-editor-addons")}
                    options={fontOptions}
                    value={buttonTextFontFamily}
                    onChange={(value) => {
                      setAttributes({
                        buttonTextFontFamily: value,
                      }),
                        loadGoogleFont(value);
                    }}
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
                                "Font Size",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={500}
                              value={buttonTextFontSizeMobile}
                              onChange={(value) =>
                                setAttributes({
                                  buttonTextFontSizeMobile: value,
                                })
                              }
                            />
                          </Fragment>
                        );
                      } else if ("tablet" === tab.name) {
                        tabout = (
                          <Fragment>
                            <RangeControl
                              label={__(
                                "Font Size",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={500}
                              value={buttonTextFontSizeTablet}
                              onChange={(value) =>
                                setAttributes({
                                  buttonTextFontSizeTablet: value,
                                })
                              }
                            />
                          </Fragment>
                        );
                      } else {
                        tabout = (
                          <Fragment>
                            <RangeControl
                              label={__(
                                "Font Size",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={500}
                              value={buttonTextFontSize}
                              onChange={(value) =>
                                setAttributes({
                                  buttonTextFontSize: value,
                                })
                              }
                            />
                          </Fragment>
                        );
                      }

                      return <div>{tabout}</div>;
                    }}
                  </TabPanel>
                  <SelectControl
                    label={__("Font Weight", "responsive-block-editor-addons")}
                    options={[
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
                    ]}
                    value={buttonTextFontWeight}
                    onChange={(value) =>
                      this.props.setAttributes({
                        buttonTextFontWeight: value !== undefined ? value : 900,
                      })
                    }
                  />
                  <RangeControl
                    label={__("Line Height", "responsive-block-editor-addons")}
                    value={buttonTextLineHeight}
                    onChange={(value) =>
                      this.props.setAttributes({
                        buttonTextLineHeight: value,
                      })
                    }
                    min={0}
                    max={100}
                    step={1}
                  />
                </PanelBody>
              )}
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
                  value={ctaTextFontFamily}
                  onChange={(value) => {
                    setAttributes({
                      ctaTextFontFamily: value,
                    }),
                      loadGoogleFont(value);
                  }}
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
                              "Font Size",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={500}
                            value={ctaTextFontSizeMobile}
                            onChange={(value) =>
                              setAttributes({
                                ctaTextFontSizeMobile: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <Fragment>
                          <RangeControl
                            label={__(
                              "Font Size",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={500}
                            value={ctaTextFontSizeTablet}
                            onChange={(value) =>
                              setAttributes({
                                ctaTextFontSizeTablet: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    } else {
                      tabout = (
                        <Fragment>
                          <RangeControl
                            label={__(
                              "Font Size",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={500}
                            value={ctaTextFontSize}
                            onChange={(value) =>
                              setAttributes({
                                ctaTextFontSize: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    }

                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
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
                  step={1}
                />
              </PanelBody>
              <PanelColorSettings
                title={__("Text Color", "responsive-block-editor-addons")}
                initialOpen={false}
                colorSettings={[
                  {
                    value: ctaTextColor,
                    onChange: onChangeTextColor,
                    label: __("Text Color", "responsive-block-editor-addons"),
                  },
                ]}
              ></PanelColorSettings>
            </PanelBody>
            <PanelBody
              title={__("Background Options", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <SelectControl
                label={__("Background Type", "responsive-block-editor-addons")}
                value={backgroundType}
                onChange={(value) => setAttributes({ backgroundType: value })}
                options={backgroundTypeOptions}
              />
              {"image" == backgroundType && (
                <ImageBackgroundControl
                  {...this.props}
                  showSomeImageOptions={true}
                  showMoreImageOptions={false}
                  showOverlayOptions={false}
                />
              )}
              {backgroundImage && !!backgroundImage.length && (
                <RangeControl
                  label={__("Image Opacity", "responsive-block-editor-addons")}
                  value={dimRatio}
                  onChange={(value) =>
                    this.props.setAttributes({
                      dimRatio: value,
                    })
                  }
                  min={0}
                  max={100}
                  step={10}
                />
              )}

              {"color" == backgroundType && (
                <Fragment>
                  <ColorBackgroundControl {...this.props} />
                  <RangeControl
                    label={__("Opacity", "responsive-block-editor-addons")}
                    value={opacity}
                    onChange={(value) =>
                      setAttributes({
                        opacity: value !== undefined ? value : 100,
                      })
                    }
                    min={0}
                    max={100}
                    allowReset
                  />
                </Fragment>
              )}
              {"gradient" == backgroundType && (
                <Fragment>
                  <GradientBackgroundControl
                    {...this.props}
                    showHoverGradient={false}
                  />
                </Fragment>
              )}
            </PanelBody>
            <PanelBody
              title={__("Button Options", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ToggleControl
                label={__(
                  "Open link in new window",
                  "responsive-block-editor-addons"
                )}
                checked={buttonTarget}
                onChange={() =>
                  this.props.setAttributes({
                    buttonTarget: !buttonTarget,
                  })
                }
              />

              <SelectControl
                label={__("Button Size", "responsive-block-editor-addons")}
                value={buttonSize}
                options={buttonSizeOptions.map(({ value, label }) => ({
                  value,
                  label,
                }))}
                onChange={(value) => {
                  this.props.setAttributes({
                    buttonSize: value,
                  });
                }}
              />

              <SelectControl
                label={__("Button Shape", "responsive-block-editor-addons")}
                value={buttonShape}
                options={buttonShapeOptions.map(({ value, label }) => ({
                  value,
                  label,
                }))}
                onChange={(value) => {
                  this.props.setAttributes({
                    buttonShape: value,
                  });
                }}
              />

              <SelectControl
                label={__("Type")}
                value={resctaType}
                onChange={(value) => setAttributes({ resctaType: value })}
                options={[
                  {
                    value: "text",
                    label: __("Text", "responsive-block-editor-addons"),
                  },
                  {
                    value: "button",
                    label: __("Button", "responsive-block-editor-addons"),
                  },
                ]}
              />
              {resctaType === "button" && (
                <PanelBody
                  title={__("Border", "responsive-block-editor-addons")}
                  initialOpen={false}
                >
                  <SelectControl
                    label={__("Style", "responsive-block-editor-addons")}
                    value={buttonborderStyle}
                    options={[
                      { value: "none", label: __("None") },
                      { value: "solid", label: __("Solid") },
                      { value: "dotted", label: __("Dotted") },
                      { value: "dashed", label: __("Dashed") },
                      { value: "double", label: __("Double") },
                    ]}
                    onChange={(value) => {
                      setAttributes({ buttonborderStyle: value });
                    }}
                  />
                  {buttonborderStyle != "none" && (
                    <RangeControl
                      label={__("Thickness", "responsive-block-editor-addons")}
                      value={buttonborderWidth}
                      onChange={(value) => {
                        setAttributes({ buttonborderWidth: value });
                      }}
                      min={0}
                      max={20}
                    />
                  )}
                  <RangeControl
                    label={__(
                      "Vertical Padding",
                      "responsive-block-editor-addons"
                    )}
                    value={buttonvPadding}
                    onChange={(value) => {
                      setAttributes({ buttonvPadding: value });
                    }}
                    min={0}
                    max={200}
                  />
                  <RangeControl
                    label={__(
                      "Horizontal Padding",
                      "responsive-block-editor-addons"
                    )}
                    value={buttonhPadding}
                    onChange={(value) => {
                      setAttributes({ buttonhPadding: value });
                    }}
                    min={0}
                    max={200}
                  />
                </PanelBody>
              )}
              {resctaType === "button" && (
                <Fragment>
                  <PanelBody
                    title={__(
                      "Background Color Settings",
                      "responsive-block-editor-addons"
                    )}
                    initialOpen={false}
                  >
                    <Fragment>
                      <PanelBody
                        title={__(
                          "Color Options",
                          "responsive-block-editor-addons"
                        )}
                        initialOpen={false}
                      >
                        <SelectControl
                          label={__(
                            "Background Type",
                            "responsive-block-editor-addons"
                          )}
                          value={buttonbackgroundType}
                          onChange={(value) =>
                            setAttributes({ buttonbackgroundType: value })
                          }
                          options={buttonbackgroundTypeOptions}
                        />
                        {"color" == buttonbackgroundType && (
                          <Fragment>
                            <PanelColorSettings
                              title={__(
                                "Button Color",
                                "responsive-block-editor-addons"
                              )}
                              initialOpen={false}
                              colorSettings={[
                                {
                                  value: buttonBackgroundColor,
                                  onChange: onChangeButtonColor,
                                  label: __(
                                    "Button Color",
                                    "responsive-block-editor-addons"
                                  ),
                                },
                              ]}
                            ></PanelColorSettings>
                            <PanelColorSettings
                              title={__(
                                "Button Hover Color",
                                "responsive-block-editor-addons"
                              )}
                              initialOpen={false}
                              colorSettings={[
                                {
                                  value: hbuttonBackgroundColor,
                                  onChange: onChangeButtonhColor,
                                  label: __(
                                    "Button Hover Color",
                                    "responsive-block-editor-addons"
                                  ),
                                },
                              ]}
                            ></PanelColorSettings>
                          </Fragment>
                        )}
                        {"gradient" == buttonbackgroundType && (
                          <Fragment>
                            <p className="responsive-setting-label">
                              {__("Color 1", "responsive-block-editor-addons")}
                              <span className="components-base-control__label">
                                <span
                                  className="component-color-indicator"
                                  style={{
                                    backgroundColor: buttonbackgroundColor1,
                                  }}
                                ></span>
                              </span>
                            </p>
                            <ColorPalette
                              value={buttonbackgroundColor1}
                              onChange={(colorValue) =>
                                setAttributes({
                                  buttonbackgroundColor1: colorValue,
                                })
                              }
                              allowReset
                            />

                            <p className="responsive-setting-label">
                              {__("Color 2", "responsive-block-editor-addons")}
                              <span className="components-base-control__label">
                                <span
                                  className="component-color-indicator"
                                  style={{
                                    backgroundColor: buttonbackgroundColor2,
                                  }}
                                ></span>
                              </span>
                            </p>
                            <ColorPalette
                              value={buttonbackgroundColor2}
                              onChange={(colorValue) =>
                                setAttributes({
                                  buttonbackgroundColor2: colorValue,
                                })
                              }
                              allowReset
                            />
                            <RangeControl
                              label={__(
                                "Color Location 1",
                                "responsive-block-editor-addons"
                              )}
                              value={buttoncolorLocation1}
                              min={0}
                              max={100}
                              onChange={(value) =>
                                setAttributes({ buttoncolorLocation1: value })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Color Location 2",
                                "responsive-block-editor-addons"
                              )}
                              value={buttoncolorLocation2}
                              min={0}
                              max={100}
                              onChange={(value) =>
                                setAttributes({ buttoncolorLocation2: value })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Gradient Direction",
                                "responsive-block-editor-addons"
                              )}
                              value={buttongradientDirection}
                              min={0}
                              max={100}
                              onChange={(value) =>
                                setAttributes({
                                  buttongradientDirection: value,
                                })
                              }
                            />
                          </Fragment>
                        )}
                        <PanelColorSettings
                          title={__(
                            "Button Border Color",
                            "responsive-block-editor-addons"
                          )}
                          initialOpen={false}
                          colorSettings={[
                            {
                              value: buttonborderColor,
                              onChange: onChangeBorderColor,
                              label: __(
                                "Button Border Color",
                                "responsive-block-editor-addons"
                              ),
                            },
                          ]}
                        ></PanelColorSettings>
                        <PanelColorSettings
                          title={__(
                            "Button Border Hover Color",
                            "responsive-block-editor-addons"
                          )}
                          initialOpen={false}
                          colorSettings={[
                            {
                              value: buttonborderHColor,
                              onChange: onChangeBorderHoverColor,
                              label: __(
                                "Button Border Hover Color",
                                "responsive-block-editor-addons"
                              ),
                            },
                          ]}
                        ></PanelColorSettings>
                      </PanelBody>
                    </Fragment>
                  </PanelBody>
                </Fragment>
              )}
              <PanelColorSettings
                title={__(
                  "Button Text Color",
                  "responsive-block-editor-addons"
                )}
                initialOpen={false}
                colorSettings={[
                  {
                    value: buttonTextColor,
                    onChange: onChangeButtonTextColor,
                    label: __(
                      "Button Text Color",
                      "responsive-block-editor-addons"
                    ),
                  },
                ]}
              ></PanelColorSettings>
              <PanelColorSettings
                title={__(
                  "Button Text Hover Color",
                  "responsive-block-editor-addons"
                )}
                initialOpen={false}
                colorSettings={[
                  {
                    value: hbuttonTextColor,
                    onChange: onChangeButtonTexthColor,
                    label: __(
                      "Button Text Hover Color",
                      "responsive-block-editor-addons"
                    ),
                  },
                ]}
              ></PanelColorSettings>
            </PanelBody>
            {resctaType === "button" && (
              <PanelBody title={__("Icon Settings")} initialOpen={false}>
                <Fragment>
                  <p className="components-base-control__label">{__("Icon")}</p>
                  <FontIconPicker
                    icons={svg_icons}
                    renderFunc={renderSVG}
                    theme="default"
                    value={icon}
                    onChange={(value) => setAttributes({ icon: value })}
                    isMulti={false}
                    noSelectedPlaceholder={__("Select Icon")}
                  />
                  <p className="responsive-block-editor-addons-setting-label">
                    {__("Icon Color", "responsive-block-editor-addons")}
                    <span className="components-base-control__label">
                      <span
                        className="component-color-indicator"
                        style={{ backgroundColor: icon_color }}
                      ></span>
                    </span>
                  </p>
                  <ColorPalette
                    value={icon_color}
                    onChange={(value) => setAttributes({ icon_color: value })}
                    allowReset
                  />
                  <SelectControl
                    label={__("Icon Position")}
                    value={iconPosition}
                    onChange={(value) => setAttributes({ iconPosition: value })}
                    options={[
                      { value: "before", label: __("Before Text") },
                      { value: "after", label: __("After Text") },
                    ]}
                  />
                  <RangeControl
                    label={__("Icon Spacing", "responsive-block-editor-addons")}
                    value={iconSpace}
                    onChange={(value) =>
                      setAttributes({
                        iconSpace: value !== undefined ? value : 8,
                      })
                    }
                    min={-100}
                    max={100}
                    allowReset
                  />
                </Fragment>
              </PanelBody>
            )}
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <PanelBody
                title={__("Padding", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <ResponsivePaddingControl
                  attrNameTemplate="block%s"
                  values={{
                    desktopTop: blockTopPadding,
                    desktopBottom: blockBottomPadding,
                    desktopLeft: blockLeftPadding,
                    desktopRight: blockRightPadding,

                    tabletTop: blockTopPaddingTablet,
                    tabletBottom: blockBottomPaddingTablet,
                    tabletLeft: blockLeftPaddingTablet,
                    tabletRight: blockRightPaddingTablet,

                    mobileTop: blockTopPaddingMobile,
                    mobileBottom: blockBottomPaddingMobile,
                    mobileLeft: blockLeftPaddingMobile,
                    mobileRight: blockRightPaddingMobile,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
              </PanelBody>
              <PanelBody
                title={__("Margin", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <ResponsiveSpacingControl
                  title={"Title Bottom Margin"}
                  attrNameTemplate="titleSpace%s"
                  values={{
                    desktop: titleSpace,
                    tablet: titleSpaceTablet,
                    mobile: titleSpaceMobile,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
                <ResponsiveSpacingControl
                  title={"Description Bottom Margin"}
                  attrNameTemplate="subtitleSpace%s"
                  values={{
                    desktop: subtitleSpace,
                    tablet: subtitleSpaceTablet,
                    mobile: subtitleSpaceMobile,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
                <ResponsiveSpacingControl
                  title={"Button Bottom Margin"}
                  attrNameTemplate="buttonSpace%s"
                  values={{
                    desktop: buttonSpace,
                    tablet: buttonSpaceTablet,
                    mobile: buttonSpaceMobile,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
              </PanelBody>
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"advance"}></InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
