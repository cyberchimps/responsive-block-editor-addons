import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import BoxShadowControlHelper from "../../../utils/components/box-shadow-helper";
import TypographyHelperControl from "../../../settings-components/TypographySettings";

const {Component, Fragment} = wp.element;
const {
  PanelBody,
  PanelRow,
  TabPanel,
  Dashicon,
  BaseControl,
  ToggleControl,
  TextControl,
  Button,
  RangeControl,
  SelectControl,
  ColorPalette,
  AlignmentMatrixControl,
} = wp.components;
const {InspectorControls, MediaUpload, AlignmentToolbar} = wp.blockEditor;
const {__} = wp.i18n;

import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";

export default class Inspector extends Component {
  render() {
    const {attributes, setAttributes} = this.props;
    const {
      imageUrl,
      altText,
      imageAlignment,
      imageAlignmentTablet,
      imageAlignmentMobile,
      caption,
      captionimageAlignment,
      captionimageAlignmentTablet,
      captionimageAlignmentMobile,
      captionFontFamily,
      captionFontSize,
      captionFontSizeMobile,
      captionFontSizeTablet,
      captionFontWeight,
      captionLineHeight,
      captionLetterSpacing,
      captionTextTransform,
      captionColor,
      imageBorderColor,
      imageBorderRadius,
      imageBorderStyle,
      imageBorderWidth,
      imageboxShadowColor,
      imageboxShadowHOffset,
      imageboxShadowVOffset,
      imageboxShadowBlur,
      imageboxShadowSpread,
      imageboxshadowSeprateHover,
      imageboxShadowPosition,
      imageboxShadowHoverColor,
      imageboxShadowHoverHOffset,
      imageboxShadowHoverVOffset,
      imageboxShadowHoverBlur,
      imageboxShadowHoverSpread,
      imageboxShadowHoverPosition,
      imagetopmargin,
      imagebottommargin,
      imageleftmargin,
      imagerightmargin,
      imagetopmarginTablet,
      imagebottommarginTablet,
      imageleftmarginTablet,
      imagerightmarginTablet,
      imagetopmarginMobile,
      imagebottommarginMobile,
      imageleftmarginMobile,
      imagerightmarginMobile,
      captiontopmargin,
      captionbottommargin,
      captionleftmargin,
      captionrightmargin,
      captiontopmarginTablet,
      captionbottommarginTablet,
      captionleftmarginTablet,
      captionrightmarginTablet,
      captiontopmarginMobile,
      captionbottommarginMobile,
      captionleftmarginMobile,
      captionrightmarginMobile,
      MaskShape,
      MaskSize,
      MaskPosition,
      MaskRepeat,
      imageObjectFit,
      imageOnHoverImage,
      imageWidth,
      imageHeight,
      imageWidthTablet,
      imageHeightTablet,
      imageWidthMobile,
      imageHeightMobile,
      Layoverswitch,
      LayoverContentPosition,
      layoverimageBorderColor,
      layoverimageBorderRadius,
      layoverimageBorderStyle,
      layoverimageBorderWidth,
      layoverInputDistance,
      layoverBackgroundcolor,
      layoverOpacity,
      layoverHoverOpacity,
      layoverHeadingTag,
      layoverHeadingFontFamily,
      layoverHeadingFontSize,
      layoverHeadingFontSizeMobile,
      layoverHeadingFontSizeTablet,
      layoverHeadingFontWeight,
      layoverHeadingLineHeight,
      layoverHeadingLetterSpacing,
      layoverHeadingTextTransform,
      layoverHeadingColor,
      layoverHeadingtopmargin,
      layoverHeadingbottommargin,
      layoverHeadingleftmargin,
      layoverHeadingrightmargin,
      layoverHeadingtopmarginTablet,
      layoverHeadingbottommarginTablet,
      layoverHeadingleftmarginTablet,
      layoverHeadingrightmarginTablet,
      layoverHeadingtopmarginMobile,
      layoverHeadingbottommarginMobile,
      layoverHeadingleftmarginMobile,
      layoverHeadingrightmarginMobile,
      hideWidget,
      hideWidgetTablet,
      hideWidgetMobile,
      z_index,
      z_indexMobile,
      z_indexTablet,
    } = attributes;
    const handleChangeImage = () => {
      // Check if the WordPress media library is available
      if (wp && wp.media) {
        // Create a media frame
        const mediaFrame = wp.media({
          title: "Select or Upload Image",
          button: {
            text: "Use this image",
          },
          multiple: false,
        });

        // When an image is selected, run a callback
        mediaFrame.on("select", () => {
          const attachment = mediaFrame
            .state()
            .get("selection")
            .first()
            .toJSON();

          // Update the state with the selected image URL
          setAttributes({imageUrl: attachment.url, sourceType: "wordpress"});
        });

        // Open the media frame
        mediaFrame.open();
      } else {
        console.error("WordPress media library not available.");
      }
    };
    var HoverBoxShadowControls;
    HoverBoxShadowControls = (
      <Fragment>
        <p className="responsive-block-editor-addons-setting-label">
          {__("Color", "responsive-block-editor-addons")}
          <span className="components-base-control__label">
            <span
              className="component-color-indicator"
              style={{backgroundColor: imageboxShadowHoverColor}}
            ></span>
          </span>
        </p>
        <ColorPalette
          value={imageboxShadowHoverColor}
          onChange={(colorValue) =>
            setAttributes({
              imageboxShadowHoverColor:
                colorValue !== undefined ? colorValue : "",
            })
          }
          allowReset
        />

        <h2>{__("Horizontal", "responsive-block-editor-addons")}</h2>
        <RangeControl
          value={imageboxShadowHoverHOffset}
          onChange={(value) =>
            setAttributes({
              imageboxShadowHoverHOffset: value !== undefined ? value : 0,
            })
          }
          min={-100}
          max={100}
          allowReset
        />
        <h2>{__("Vertical", "responsive-block-editor-addons")}</h2>
        <RangeControl
          value={imageboxShadowHoverVOffset}
          onChange={(value) =>
            setAttributes({
              imageboxShadowHoverVOffset: value !== undefined ? value : 0,
            })
          }
          min={-100}
          max={100}
          allowReset
        />
        <h2>{__("Blur", "responsive-block-editor-addons")}</h2>
        <RangeControl
          value={imageboxShadowHoverBlur}
          onChange={(value) =>
            setAttributes({
              imageboxShadowHoverBlur: value !== undefined ? value : 0,
            })
          }
          min={0}
          max={100}
          allowReset
        />
        <h2>{__("Spread", "responsive-block-editor-addons")}</h2>
        <RangeControl
          value={imageboxShadowHoverSpread}
          onChange={(value) =>
            setAttributes({
              imageboxShadowHoverSpread: value !== undefined ? value : 0,
            })
          }
          min={0}
          max={100}
          allowReset
        />
        <SelectControl
          label={__("Position", "responsive-block-editor-addons")}
          value={imageboxShadowHoverPosition}
          onChange={(value) =>
            setAttributes({imageboxShadowHoverPosition: value})
          }
          options={[
            {
              value: "inset",
              label: __("Inset", "responsive-block-editor-addons"),
            },
            {
              value: "outset",
              label: __("Outset", "responsive-block-editor-addons"),
            },
          ]}
        />
      </Fragment>
    );
    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody title="Image" initialOpen={true}>
              <div>
                {attributes.imageUrl && (
                  <div style={{textAlign: "center"}}>
                    <img src={attributes.imageUrl} alt="Image" />
                    {/* Adjust the styles as needed */}
                  </div>
                )}
                <PanelRow>
                  <Button isPrimary onClick={handleChangeImage}>
                    {" "}
                    {attributes.imageUrl !== ""
                      ? "Change Image"
                      : "Add Image"}{" "}
                  </Button>
                </PanelRow>
              </div>

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
                        <BaseControl>
                          <p>
                            {__(
                              "Alignment Mobile",
                              "responsive-block-editor-addons"
                            )}
                          </p>
                          <AlignmentToolbar
                            value={imageAlignmentMobile}
                            onChange={(value) =>
                              setAttributes({
                                imageAlignmentMobile: value,
                              })
                            }
                            controls={["start", "center", "end"]}
                            isCollapsed={false}
                          />
                        </BaseControl>
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <BaseControl>
                          <p>
                            {__(
                              "Alignment Tablet",
                              "responsive-block-editor-addons"
                            )}
                          </p>
                          <AlignmentToolbar
                            value={imageAlignmentTablet}
                            onChange={(value) =>
                              setAttributes({
                                imageAlignmentTablet: value,
                              })
                            }
                            controls={["start", "center", "end"]}
                            isCollapsed={false}
                          />
                        </BaseControl>
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <BaseControl>
                          <p>
                            {__("Alignment", "responsive-block-editor-addons")}
                          </p>
                          <AlignmentToolbar
                            value={imageAlignment}
                            onChange={(value) =>
                              setAttributes({
                                imageAlignment: value,
                              })
                            }
                            controls={["start", "center", "end"]}
                            isCollapsed={false}
                          />
                        </BaseControl>
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
              {
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
                          <BaseControl>
                            <p>
                              {__(
                                "Image Dimensions Mobile",
                                "responsive-block-editor-addons"
                              )}
                            </p>
                            <RangeControl
                              label={__(
                                "Width",
                                "responsive-block-editor-addons"
                              )}
                              min={-500}
                              max={2000}
                              allowReset={true}
                              value={imageWidthMobile}
                              onChange={(value) =>
                                setAttributes({
                                  imageWidthMobile: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Height",
                                "responsive-block-editor-addons"
                              )}
                              min={-500}
                              max={2000}
                              allowReset={true}
                              value={imageHeightMobile}
                              onChange={(value) =>
                                setAttributes({
                                  imageHeightMobile: value,
                                })
                              }
                            />
                          </BaseControl>
                        </Fragment>
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <Fragment>
                          <BaseControl>
                            <p>
                              {__(
                                "Image Dimensions Tablet",
                                "responsive-block-editor-addons"
                              )}
                            </p>
                            <RangeControl
                              label={__(
                                "Width",
                                "responsive-block-editor-addons"
                              )}
                              min={-500}
                              max={2000}
                              allowReset={true}
                              value={imageWidthTablet}
                              onChange={(value) =>
                                setAttributes({
                                  imageWidthTablet: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Height",
                                "responsive-block-editor-addons"
                              )}
                              min={-500}
                              max={2000}
                              allowReset={true}
                              value={imageHeightTablet}
                              onChange={(value) =>
                                setAttributes({
                                  imageHeightTablet: value,
                                })
                              }
                            />
                          </BaseControl>
                        </Fragment>
                      );
                    } else {
                      tabout = (
                        <Fragment>
                          <BaseControl>
                            <p>
                              {__(
                                "Image Dimensions",
                                "responsive-block-editor-addons"
                              )}
                            </p>
                            <RangeControl
                              label={__(
                                "Width",
                                "responsive-block-editor-addons"
                              )}
                              min={-500}
                              max={2000}
                              allowReset={true}
                              value={imageWidth}
                              onChange={(value) =>
                                setAttributes({
                                  imageWidth: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Height",
                                "responsive-block-editor-addons"
                              )}
                              min={-500}
                              max={2000}
                              allowReset={true}
                              value={imageHeight}
                              onChange={(value) =>
                                setAttributes({
                                  imageHeight: value,
                                })
                              }
                            />
                          </BaseControl>
                        </Fragment>
                      );
                    }

                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
              }
              <PanelRow>
                <TextControl
                  label="Alt Text"
                  value={altText}
                  onChange={(newAltText) =>
                    setAttributes({altText: newAltText})
                  }
                />
              </PanelRow>
              <SelectControl
                label={__("Object Fit", "responsive-block-editor-addons")}
                value={imageObjectFit}
                onChange={(value) => setAttributes({imageObjectFit: value})}
                options={[
                  {
                    value: "default",
                    label: __("Default", "responsive-block-editor-addons"),
                  },
                  {
                    value: "fill",
                    label: __("Fill", "responsive-block-editor-addons"),
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
              <SelectControl
                label={__("On Hover Image", "responsive-block-editor-addons")}
                value={imageOnHoverImage}
                onChange={(value) => setAttributes({imageOnHoverImage: value})}
                options={[
                  {
                    value: "static",
                    label: __("Static", "responsive-block-editor-addons"),
                  },
                  {
                    value: "zoomin",
                    label: __("Zoom In", "responsive-block-editor-addons"),
                  },
                  {
                    value: "slide",
                    label: __("Slide", "responsive-block-editor-addons"),
                  },
                  {
                    value: "grayscale",
                    label: __("Gray Scale", "responsive-block-editor-addons"),
                  },
                  {
                    value: "blur",
                    label: __("Blur", "responsive-block-editor-addons"),
                  },
                ]}
              />

              {!Layoverswitch && (
                <>
                  <ToggleControl
                    className="enable-caption-class"
                    label={__(
                      "Enable Caption",
                      "responsive-block-editor-addons"
                    )}
                    checked={caption}
                    onChange={() =>
                      this.props.setAttributes({
                        caption: !caption,
                      })
                    }
                  />
                </>
              )}
              {caption && !Layoverswitch && (
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
                          <BaseControl>
                            <p>
                              {__(
                                "Alignment Mobile",
                                "responsive-block-editor-addons"
                              )}
                            </p>
                            <AlignmentToolbar
                              value={captionimageAlignmentMobile}
                              onChange={(value) =>
                                setAttributes({
                                  captionimageAlignmentMobile: value,
                                })
                              }
                              controls={["start", "center", "end"]}
                              isCollapsed={false}
                            />
                          </BaseControl>
                        </Fragment>
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <Fragment>
                          <BaseControl>
                            <p>
                              {__(
                                "Alignment Tablet",
                                "responsive-block-editor-addons"
                              )}
                            </p>
                            <AlignmentToolbar
                              value={captionimageAlignmentTablet}
                              onChange={(value) =>
                                setAttributes({
                                  captionimageAlignmentTablet: value,
                                })
                              }
                              controls={["start", "center", "end"]}
                              isCollapsed={false}
                            />
                          </BaseControl>
                        </Fragment>
                      );
                    } else {
                      tabout = (
                        <Fragment>
                          <BaseControl>
                            <p>
                              {__(
                                "Alignment",
                                "responsive-block-editor-addons"
                              )}
                            </p>
                            <AlignmentToolbar
                              value={captionimageAlignment}
                              onChange={(value) =>
                                setAttributes({
                                  captionimageAlignment: value,
                                })
                              }
                              controls={["start", "center", "end"]}
                              isCollapsed={false}
                            />
                          </BaseControl>
                        </Fragment>
                      );
                    }

                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
              )}
            </PanelBody>
            <PanelBody title="Layover" initialOpen={false}>
              <>
                <ToggleControl
                  label={__("Layover", "responsive-block-editor-addons")}
                  checked={Layoverswitch}
                  onChange={() =>
                    this.props.setAttributes({
                      Layoverswitch: !Layoverswitch,
                    })
                  }
                />
                <SelectControl
                  label={__(
                    "Content Position",
                    "responsive-block-editor-addons"
                  )}
                  value={LayoverContentPosition}
                  onChange={(value) =>
                    setAttributes({LayoverContentPosition: value})
                  }
                  options={[
                    {
                      value: "centertop",
                      label: __("Center Top", "responsive-block-editor-addons"),
                    },
                    {
                      value: "centercenter",
                      label: __(
                        "Center Center",
                        "responsive-block-editor-addons"
                      ),
                    },
                    {
                      value: "centerbottom",
                      label: __(
                        "Center Bottom",
                        "responsive-block-editor-addons"
                      ),
                    },
                    {
                      value: "lefttop",
                      label: __("Left Top", "responsive-block-editor-addons"),
                    },
                    {
                      value: "leftcenter",
                      label: __(
                        "Left Center",
                        "responsive-block-editor-addons"
                      ),
                    },
                    {
                      value: "leftbottom",
                      label: __(
                        "Left Bottom",
                        "responsive-block-editor-addons"
                      ),
                    },
                    {
                      value: "righttop",
                      label: __("Right Top", "responsive-block-editor-addons"),
                    },
                    {
                      value: "rightcenter",
                      label: __(
                        "Right Center",
                        "responsive-block-editor-addons"
                      ),
                    },
                    {
                      value: "rightbottom",
                      label: __(
                        "Right Bottom",
                        "responsive-block-editor-addons"
                      ),
                    },
                  ]}
                />
                <BlockBorderHelperControl
                  attrNameTemplate="layoverimage%s"
                  values={{
                    radius: layoverimageBorderRadius,
                    style: layoverimageBorderStyle,
                    width: layoverimageBorderWidth,
                    color: layoverimageBorderColor,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
                <RangeControl
                  label={__(
                    "Border Distance From EDGE",
                    "responsive-block-editor-addons"
                  )}
                  value={layoverInputDistance}
                  onChange={(value) =>
                    setAttributes({
                      layoverInputDistance: value,
                    })
                  }
                  min={-100}
                  max={100}
                  allowReset
                />
              </>
            </PanelBody>
            <PanelBody title="Masks" initialOpen={false}>
              <SelectControl
                label={__("Mask Shape", "responsive-block-editor-addons")}
                value={MaskShape}
                onChange={(value) => setAttributes({MaskShape: value})}
                options={[
                  {
                    value: "none",
                    label: __("None", "responsive-block-editor-addons"),
                  },
                  {
                    value:
                      "/wp-content/plugins/responsive-block-editor-addons/src/utils/masks/circle.svg",
                    label: __("Circle", "responsive-block-editor-addons"),
                  },
                  {
                    value:
                      "/wp-content/plugins/responsive-block-editor-addons/src/utils/masks/diamond.svg",
                    label: __("Diamond", "responsive-block-editor-addons"),
                  },
                  {
                    value:
                      "/wp-content/plugins/responsive-block-editor-addons/src/utils/masks/hexagon.svg",
                    label: __("Hexagon", "responsive-block-editor-addons"),
                  },
                  {
                    value:
                      "/wp-content/plugins/responsive-block-editor-addons/src/utils/masks/rounded.svg",
                    label: __("Rounded", "responsive-block-editor-addons"),
                  },
                  {
                    value:
                      "/wp-content/plugins/responsive-block-editor-addons/src/utils/masks/blob1.svg",
                    label: __("Blob 1", "responsive-block-editor-addons"),
                  },
                  {
                    value:
                      "/wp-content/plugins/responsive-block-editor-addons/src/utils/masks/blob2.svg",
                    label: __("Blob 2", "responsive-block-editor-addons"),
                  },
                  {
                    value:
                      "/wp-content/plugins/responsive-block-editor-addons/src/utils/masks/blob3.svg",
                    label: __("Blob 3", "responsive-block-editor-addons"),
                  },
                  {
                    value:
                      "/wp-content/plugins/responsive-block-editor-addons/src/utils/masks/blob4.svg",
                    label: __("Blob 4", "responsive-block-editor-addons"),
                  },
                ]}
              />
              {MaskShape !== "none" && (
                <>
                  <SelectControl
                    label={__("Mask Size", "responsive-block-editor-addons")}
                    value={MaskSize}
                    onChange={(value) => setAttributes({MaskSize: value})}
                    options={[
                      {
                        value: "auto",
                        label: __("Auto", "responsive-block-editor-addons"),
                      },
                      {
                        value: "contain",
                        label: __("Contain", "responsive-block-editor-addons"),
                      },
                      {
                        value: "cover",
                        label: __("Cover", "responsive-block-editor-addons"),
                      },
                    ]}
                  />
                  <SelectControl
                    label={__(
                      "Mask Position",
                      "responsive-block-editor-addons"
                    )}
                    value={MaskPosition}
                    onChange={(value) => setAttributes({MaskPosition: value})}
                    options={[
                      {
                        value: "center top",
                        label: __(
                          "Center Top",
                          "responsive-block-editor-addons"
                        ),
                      },
                      {
                        value: "center center",
                        label: __(
                          "Center Center",
                          "responsive-block-editor-addons"
                        ),
                      },
                      {
                        value: "center bottom",
                        label: __(
                          "Center Bottom",
                          "responsive-block-editor-addons"
                        ),
                      },
                      {
                        value: "left top",
                        label: __("Left Top", "responsive-block-editor-addons"),
                      },
                      {
                        value: "left center",
                        label: __(
                          "Left Center",
                          "responsive-block-editor-addons"
                        ),
                      },
                      {
                        value: "left bottom",
                        label: __(
                          "Left Bottom",
                          "responsive-block-editor-addons"
                        ),
                      },
                      {
                        value: "right top",
                        label: __(
                          "Right Top",
                          "responsive-block-editor-addons"
                        ),
                      },
                      {
                        value: "right center",
                        label: __(
                          "Right Center",
                          "responsive-block-editor-addons"
                        ),
                      },
                      {
                        value: "right bottom",
                        label: __(
                          "Right Bottom",
                          "responsive-block-editor-addons"
                        ),
                      },
                    ]}
                  />
                  <SelectControl
                    label={__("Mask Repeat", "responsive-block-editor-addons")}
                    value={MaskRepeat}
                    onChange={(value) => setAttributes({MaskRepeat: value})}
                    options={[
                      {
                        value: "no-repeat",
                        label: __(
                          "No Repeat",
                          "responsive-block-editor-addons"
                        ),
                      },
                      {
                        value: "repeat",
                        label: __("Repeat", "responsive-block-editor-addons"),
                      },
                      {
                        value: "repeat-x",
                        label: __("Repeat-X", "responsive-block-editor-addons"),
                      },
                      {
                        value: "repeat-y",
                        label: __("Repeat-Y", "responsive-block-editor-addons"),
                      },
                    ]}
                  />
                </>
              )}
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody title="Image" initialOpen={true}>
              <BlockBorderHelperControl
                attrNameTemplate="image%s"
                values={{
                  radius: imageBorderRadius,
                  style: imageBorderStyle,
                  width: imageBorderWidth,
                  color: imageBorderColor,
                }}
                setAttributes={setAttributes}
                {...this.props}
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
                        <p>
                          {__(
                            "Margin Mobile",
                            "responsive-block-editor-addons"
                          )}
                        </p>
                        <RangeControl
                          label={__("Top", "responsive-block-editor-addons")}
                          min={0}
                          max={2000}
                          allowReset={true}
                          value={imagetopmarginMobile}
                          onChange={(value) =>
                            setAttributes({
                              imagetopmarginMobile: value,
                            })
                          }
                        />
                        <RangeControl
                          label={__("Bottom", "responsive-block-editor-addons")}
                          min={0}
                          max={2000}
                          allowReset={true}
                          value={imagebottommarginMobile}
                          onChange={(value) =>
                            setAttributes({
                              imagebottommarginMobile: value,
                            })
                          }
                        />
                        <RangeControl
                          label={__("Left", "responsive-block-editor-addons")}
                          min={0}
                          max={2000}
                          allowReset={true}
                          value={imageleftmarginMobile}
                          onChange={(value) =>
                            setAttributes({
                              imageleftmarginMobile: value,
                            })
                          }
                        />
                        <RangeControl
                          label={__("Right", "responsive-block-editor-addons")}
                          min={0}
                          max={2000}
                          allowReset={true}
                          value={imagerightmarginMobile}
                          onChange={(value) =>
                            setAttributes({
                              imagerightmarginMobile: value,
                            })
                          }
                        />
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <p>
                          {__(
                            "Margin Tablet",
                            "responsive-block-editor-addons"
                          )}
                        </p>
                        <RangeControl
                          label={__("Top", "responsive-block-editor-addons")}
                          min={0}
                          max={2000}
                          allowReset={true}
                          value={imagetopmarginTablet}
                          onChange={(value) =>
                            setAttributes({
                              imagetopmarginTablet: value,
                            })
                          }
                        />
                        <RangeControl
                          label={__("Bottom", "responsive-block-editor-addons")}
                          min={0}
                          max={2000}
                          allowReset={true}
                          value={imagebottommarginTablet}
                          onChange={(value) =>
                            setAttributes({
                              imagebottommarginTablet: value,
                            })
                          }
                        />
                        <RangeControl
                          label={__("Left", "responsive-block-editor-addons")}
                          min={0}
                          max={2000}
                          allowReset={true}
                          value={imageleftmarginTablet}
                          onChange={(value) =>
                            setAttributes({
                              imageleftmarginTablet: value,
                            })
                          }
                        />
                        <RangeControl
                          label={__("Right", "responsive-block-editor-addons")}
                          min={0}
                          max={2000}
                          allowReset={true}
                          value={imagerightmarginTablet}
                          onChange={(value) =>
                            setAttributes({
                              imagerightmarginTablet: value,
                            })
                          }
                        />
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <p>{__("Margin", "responsive-block-editor-addons")}</p>
                        <RangeControl
                          label={__("Top", "responsive-block-editor-addons")}
                          min={0}
                          max={2000}
                          allowReset={true}
                          value={imagetopmargin}
                          onChange={(value) =>
                            setAttributes({
                              imagetopmargin: value,
                            })
                          }
                        />
                        <RangeControl
                          label={__("Bottom", "responsive-block-editor-addons")}
                          min={0}
                          max={2000}
                          allowReset={true}
                          value={imagebottommargin}
                          onChange={(value) =>
                            setAttributes({
                              imagebottommargin: value,
                            })
                          }
                        />
                        <RangeControl
                          label={__("Left", "responsive-block-editor-addons")}
                          min={0}
                          max={2000}
                          allowReset={true}
                          value={imageleftmargin}
                          onChange={(value) =>
                            setAttributes({
                              imageleftmargin: value,
                            })
                          }
                        />
                        <RangeControl
                          label={__("Right", "responsive-block-editor-addons")}
                          min={0}
                          max={2000}
                          allowReset={true}
                          value={imagerightmargin}
                          onChange={(value) =>
                            setAttributes({
                              imagerightmargin: value,
                            })
                          }
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
              <BoxShadowControlHelper
                setAttributes={setAttributes}
                boxShadowColor={{value: imageboxShadowColor}}
                boxShadowHOffset={{value: imageboxShadowHOffset}}
                boxShadowVOffset={{value: imageboxShadowVOffset}}
                boxShadowBlur={{value: imageboxShadowBlur}}
                boxShadowSpread={{value: imageboxShadowSpread}}
                boxShadowPosition={{value: imageboxShadowPosition}}
                label={__("Box Shadow", "responsive-block-editor-addons")}
                attrNameTemplate="image%s"
              />
              <ToggleControl
                label={__(
                  "Seprate Box Shadow Hover",
                  "responsive-block-editor-addons"
                )}
                checked={imageboxshadowSeprateHover}
                onChange={() =>
                  this.props.setAttributes({
                    imageboxshadowSeprateHover: !imageboxshadowSeprateHover,
                  })
                }
              />
              {imageboxshadowSeprateHover && HoverBoxShadowControls}
            </PanelBody>
            {Layoverswitch && (
              <>
                <PanelBody title="Overlay" initialOpen={false}>
                  <Fragment>
                    <p className="responsive-block-editor-addons-setting-label">
                      {__("Background", "responsive-block-editor-addons")}
                      <span className="components-base-control__label">
                        <span
                          className="component-color-indicator"
                          style={{backgroundColor: layoverBackgroundcolor}}
                        ></span>
                      </span>
                    </p>
                    <ColorPalette
                      value={layoverBackgroundcolor}
                      onChange={(colorValue) =>
                        setAttributes({
                          layoverBackgroundcolor:
                            colorValue !== undefined ? colorValue : "",
                        })
                      }
                      allowReset
                    />
                    <RangeControl
                      label={__(
                        "Overlay Opacity",
                        "responsive-block-editor-addons"
                      )}
                      value={layoverOpacity}
                      onChange={(value) =>
                        setAttributes({
                          layoverOpacity: value,
                        })
                      }
                      min={0}
                      max={100}
                      allowReset
                    />
                    <RangeControl
                      label={__(
                        "Overlay Hover Opacity",
                        "responsive-block-editor-addons"
                      )}
                      value={layoverHoverOpacity}
                      onChange={(value) =>
                        setAttributes({
                          layoverHoverOpacity: value,
                        })
                      }
                      min={0}
                      max={100}
                      allowReset
                    />
                    
                  </Fragment>
                </PanelBody>
                <PanelBody title="Heading" initialOpen={false}>
                  <SelectControl
                    label={__("Heading Tag", "responsive-block-editor-addons")}
                    value={layoverHeadingTag}
                    onChange={(value) =>
                      setAttributes({layoverHeadingTag: value})
                    }
                    options={[
                      {
                        value: "h1",
                        label: __("H1", "responsive-block-editor-addons"),
                      },
                      {
                        value: "h2",
                        label: __("H2", "responsive-block-editor-addons"),
                      },
                      {
                        value: "h3",
                        label: __("H3", "responsive-block-editor-addons"),
                      },
                      {
                        value: "h4",
                        label: __("H4", "responsive-block-editor-addons"),
                      },
                      {
                        value: "h5",
                        label: __("H5", "responsive-block-editor-addons"),
                      },
                      {
                        value: "h6",
                        label: __("H6", "responsive-block-editor-addons"),
                      },
                    ]}
                  />
                  <TypographyHelperControl
                    title={__("Typography", "responsive-block-editor-addons")}
                    attrNameTemplate="layoverHeading%s"
                    values={{
                      family: layoverHeadingFontFamily,
                      size: layoverHeadingFontSize,
                      sizeMobile: layoverHeadingFontSizeMobile,
                      sizeTablet: layoverHeadingFontSizeTablet,
                      weight: layoverHeadingFontWeight,
                      height: layoverHeadingLineHeight,
                      spacing: layoverHeadingLetterSpacing,
                      transform: layoverHeadingTextTransform,
                    }}
                    showLetterSpacing={true}
                    showTextTransform={true}
                    setAttributes={setAttributes}
                    {...this.props}
                  />
                  <ColorPalette
                    value={layoverHeadingColor}
                    onChange={(colorValue) =>
                      setAttributes({
                        layoverHeadingColor:
                          colorValue !== undefined ? colorValue : "",
                      })
                    }
                    allowReset
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
                            <p>
                              {__(
                                "Margin Mobile",
                                "responsive-block-editor-addons"
                              )}
                            </p>
                            <RangeControl
                              label={__(
                                "Top",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset={true}
                              value={layoverHeadingtopmarginMobile}
                              onChange={(value) =>
                                setAttributes({
                                  layoverHeadingtopmarginMobile: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Bottom",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset={true}
                              value={layoverHeadingbottommarginMobile}
                              onChange={(value) =>
                                setAttributes({
                                  layoverHeadingbottommarginMobile: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Left",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset={true}
                              value={layoverHeadingleftmarginMobile}
                              onChange={(value) =>
                                setAttributes({
                                  layoverHeadingleftmarginMobile: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Right",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset={true}
                              value={layoverHeadingrightmarginMobile}
                              onChange={(value) =>
                                setAttributes({
                                  layoverHeadingrightmarginMobile: value,
                                })
                              }
                            />
                          </Fragment>
                        );
                      } else if ("tablet" === tab.name) {
                        tabout = (
                          <Fragment>
                            <p>
                              {__(
                                "Margin Tablet",
                                "responsive-block-editor-addons"
                              )}
                            </p>
                            <RangeControl
                              label={__(
                                "Top",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset={true}
                              value={layoverHeadingtopmarginTablet}
                              onChange={(value) =>
                                setAttributes({
                                  layoverHeadingtopmarginTablet: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Bottom",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset={true}
                              value={layoverHeadingbottommarginTablet}
                              onChange={(value) =>
                                setAttributes({
                                  layoverHeadingbottommarginTablet: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Left",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset={true}
                              value={layoverHeadingleftmarginTablet}
                              onChange={(value) =>
                                setAttributes({
                                  layoverHeadingleftmarginTablet: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Right",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset={true}
                              value={layoverHeadingrightmarginTablet}
                              onChange={(value) =>
                                setAttributes({
                                  layoverHeadingrightmarginTablet: value,
                                })
                              }
                            />
                          </Fragment>
                        );
                      } else {
                        tabout = (
                          <Fragment>
                            <p>
                              {__("Margin", "responsive-block-editor-addons")}
                            </p>
                            <RangeControl
                              label={__(
                                "Top",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset={true}
                              value={layoverHeadingtopmargin}
                              onChange={(value) =>
                                setAttributes({
                                  layoverHeadingtopmargin: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Bottom",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset={true}
                              value={layoverHeadingbottommargin}
                              onChange={(value) =>
                                setAttributes({
                                  layoverHeadingbottommargin: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Left",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset={true}
                              value={layoverHeadingleftmargin}
                              onChange={(value) =>
                                setAttributes({
                                  layoverHeadingleftmargin: value,
                                })
                              }
                            />
                            <RangeControl
                              label={__(
                                "Right",
                                "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={2000}
                              allowReset={true}
                              value={layoverHeadingrightmargin}
                              onChange={(value) =>
                                setAttributes({
                                  layoverHeadingrightmargin: value,
                                })
                              }
                            />
                          </Fragment>
                        );
                      }

                      return <div>{tabout}</div>;
                    }}
                  </TabPanel>
                </PanelBody>
              </>
            )}
            {(caption || Layoverswitch) && (
              <PanelBody title="Caption" initialOpen={true}>
                <TypographyHelperControl
                  title={__("Typography", "responsive-block-editor-addons")}
                  attrNameTemplate="caption%s"
                  values={{
                    family: captionFontFamily,
                    size: captionFontSize,
                    sizeMobile: captionFontSizeMobile,
                    sizeTablet: captionFontSizeTablet,
                    weight: captionFontWeight,
                    height: captionLineHeight,
                    spacing: captionLetterSpacing,
                    transform: captionTextTransform,
                  }}
                  showLetterSpacing={true}
                  showTextTransform={true}
                  setAttributes={setAttributes}
                  {...this.props}
                />
                <ColorPalette
                  value={captionColor}
                  onChange={(colorValue) =>
                    setAttributes({
                      captionColor: colorValue !== undefined ? colorValue : "",
                    })
                  }
                  allowReset
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
                          <p>
                            {__(
                              "Margin Mobile",
                              "responsive-block-editor-addons"
                            )}
                          </p>
                          <RangeControl
                            label={__("Top", "responsive-block-editor-addons")}
                            min={0}
                            max={2000}
                            allowReset={true}
                            value={captiontopmarginMobile}
                            onChange={(value) =>
                              setAttributes({
                                captiontopmarginMobile: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Bottom",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset={true}
                            value={captionbottommarginMobile}
                            onChange={(value) =>
                              setAttributes({
                                captionbottommarginMobile: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__("Left", "responsive-block-editor-addons")}
                            min={0}
                            max={2000}
                            allowReset={true}
                            value={captionleftmarginMobile}
                            onChange={(value) =>
                              setAttributes({
                                captionleftmarginMobile: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Right",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset={true}
                            value={captionrightmarginMobile}
                            onChange={(value) =>
                              setAttributes({
                                captionrightmarginMobile: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <Fragment>
                          <p>
                            {__(
                              "Margin Tablet",
                              "responsive-block-editor-addons"
                            )}
                          </p>
                          <RangeControl
                            label={__("Top", "responsive-block-editor-addons")}
                            min={0}
                            max={2000}
                            allowReset={true}
                            value={captiontopmarginTablet}
                            onChange={(value) =>
                              setAttributes({
                                captiontopmarginTablet: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Bottom",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset={true}
                            value={captionbottommarginTablet}
                            onChange={(value) =>
                              setAttributes({
                                captionbottommarginTablet: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__("Left", "responsive-block-editor-addons")}
                            min={0}
                            max={2000}
                            allowReset={true}
                            value={captionleftmarginTablet}
                            onChange={(value) =>
                              setAttributes({
                                captionleftmarginTablet: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Right",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset={true}
                            value={captionrightmarginTablet}
                            onChange={(value) =>
                              setAttributes({
                                captionrightmarginTablet: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    } else {
                      tabout = (
                        <Fragment>
                          <p>
                            {__("Margin", "responsive-block-editor-addons")}
                          </p>
                          <RangeControl
                            label={__("Top", "responsive-block-editor-addons")}
                            min={0}
                            max={2000}
                            allowReset={true}
                            value={captiontopmargin}
                            onChange={(value) =>
                              setAttributes({
                                captiontopmargin: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Bottom",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset={true}
                            value={captionbottommargin}
                            onChange={(value) =>
                              setAttributes({
                                captionbottommargin: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__("Left", "responsive-block-editor-addons")}
                            min={0}
                            max={2000}
                            allowReset={true}
                            value={captionleftmargin}
                            onChange={(value) =>
                              setAttributes({
                                captionleftmargin: value,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Right",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={2000}
                            allowReset={true}
                            value={captionrightmargin}
                            onChange={(value) =>
                              setAttributes({
                                captionrightmargin: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    }

                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
              </PanelBody>
            )}
          </InspectorTab>
          <InspectorTab key={"advance"}>
            <PanelBody
            title={__("Responsive Conditions", "responsive-block-editor-addons")}
            initialOpen={false}
            >
              <ToggleControl
                label={__(
                "Hide on Desktop",
                "responsive-block-editor-addons"
                )}
                checked={hideWidget}
                onChange={(value) =>
                setAttributes({ hideWidget: !hideWidget })
                }
              />
              <ToggleControl
                label={__(
                "Hide on Tablet",
                "responsive-block-editor-addons"
                )}
                checked={hideWidgetTablet}
                onChange={(value) =>
                setAttributes({ hideWidgetTablet: !hideWidgetTablet })
                }
              />
              <ToggleControl
                label={__(
                "Hide on Mobile",
                "responsive-block-editor-addons"
                )}
                checked={hideWidgetMobile}
                onChange={(value) =>
                setAttributes({ hideWidgetMobile: !hideWidgetMobile })
                }
              />
            </PanelBody>
            <PanelBody
              title={__("Z Index", "responsive-block-editor-addons")}
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
                        <RangeControl
                        label={__("z-index (Mobile)", "responsive-block-editor-addons")}
                        min={-1}
                        max={99999}
                        allowReset={true}
                        resetFallbackValue={1}
                        value={z_indexMobile}
                        onChange={(value) =>
                          setAttributes({ z_indexMobile: value !== undefined ? value : 1 })
                        }
                      />
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <RangeControl
                        label={__("z-index (Tablet)", "responsive-block-editor-addons")}
                        min={-1}
                        max={99999}
                        allowReset={true}
                        resetFallbackValue={1}
                        value={z_indexTablet}
                        onChange={(value) =>
                          setAttributes({ z_indexTablet: value !== undefined ? value : 1 })
                        }
                      />
                      );
                    } else {
                      tabout = (
                        <RangeControl
                        label={__("z-index ", "responsive-block-editor-addons")}
                        min={-1}
                        max={99999}
                        allowReset={true}
                        resetFallbackValue={1}
                        value={z_index}
                        onChange={(value) =>
                          setAttributes({ z_index: value !== undefined ? value : 1 })
                        }
                      />
                      );
                    }

                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
            </PanelBody>
          </InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
