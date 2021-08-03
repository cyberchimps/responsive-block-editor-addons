/**
 * Inspector Controls
 */
import BoxShadowControl from "../../../../utils/components/box-shadow";
import BoxShadowControlHelper from "../../../../utils/components/box-shadow-helper";
import InspectorTab from "../../../../components/InspectorTab";
import InspectorTabs from "../../../../components/InspectorTabs";
import BlockBorderHelperControl from "../../../../settings-components/BlockBorderSettings";


// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { ColorPalette, MediaUpload } = wp.blockEditor;

// Import block components
const { InspectorControls } = wp.editor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  ButtonGroup,
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
    // Setup the attributes
    const {
      attributes: {
        width,
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

        columnGap,
        contentWidth,
        widthType,
        stack,
        backgroundColor,
        backgroundColor1,
        backgroundColor2,
        colorLocation1,
        colorLocation2,
        gradientDirection,
        hoverbackgroundColor1,
        hoverbackgroundColor2,
        hovercolorLocation1,
        hovercolorLocation2,
        hovergradientDirection,
        backgroundType,
        backgroundImage,
        backgroundPosition,
        backgroundAttachment,
        backgroundRepeat,
        backgroundSize,
        overlayType,
        backgroundImageColor,
        gradientOverlayColor1,
        gradientOverlayLocation1,
        gradientOverlayColor2,
        gradientOverlayLocation2,
        gradientOverlayType,
        gradientOverlayAngle,
        gradientOverlayPosition,
        opacity,
        blockBorderStyle,
        blockBorderWidth,
        blockBorderRadius,
        blockBorderColor,
        topMargin,
        topMarginTablet,
        topMarginMobile,
        bottomMargin,
        bottomMarginTablet,
        bottomMarginMobile,
        leftMargin,
        leftMarginTablet,
        leftMarginMobile,
        rightMargin,
        rightMarginTablet,
        rightMarginMobile,
        topPadding,
        topPaddingTablet,
        topPaddingMobile,
        bottomPadding,
        bottomPaddingTablet,
        bottomPaddingMobile,
        leftPadding,
        leftPaddingTablet,
        leftPaddingMobile,
        rightPadding,
        rightPaddingTablet,
        rightPaddingMobile,
      },
      setAttributes,
    } = this.props;

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
    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("Layout", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RangeControl
                label={__("Content Width(%)", "responsive-block-editor-addons")}
                value={width}
                min={0}
                max={100}
                onChange={(value) =>
                  setAttributes({ width: value !== undefined ? value : 50 })
                }
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
                <TabPanel
                  className="responsive-block-editor-addons-inspect-tabs responsive-block-editor-addons-inspect-tabs-col-2"
                  activeClass="active-tab"
                  tabs={[
                    {
                      name: "normal",
                      title: __("Normal"),
                      className: "responsive-block-editor-addons-normal-tab",
                    },
                    {
                      name: "hover",
                      title: __("Hover"),
                      className: "responsive-block-editor-addons-hover-tab",
                    },
                  ]}
                >
                  {(tabName) => {
                    let btn_color_tab;
                    if ("normal" === tabName.name) {
                      btn_color_tab = (
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
                                colorLocation2:
                                  value !== undefined ? value : 100,
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
                                gradientDirection:
                                  value !== undefined ? value : 90,
                              })
                            }
                          />
                        </Fragment>
                      );
                    } else {
                      btn_color_tab = (
                        <Fragment>
                          <p className="responsive-setting-label">
                            {__("Color 1", "responsive-block-editor-addons")}
                            <span className="components-base-control__label">
                              <span
                                className="component-color-indicator"
                                style={{
                                  backgroundColor: hoverbackgroundColor1,
                                }}
                              ></span>
                            </span>
                          </p>
                          <ColorPalette
                            value={hoverbackgroundColor1}
                            onChange={(colorValue) =>
                              setAttributes({
                                hoverbackgroundColor1: colorValue,
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
                                  backgroundColor: hoverbackgroundColor2,
                                }}
                              ></span>
                            </span>
                          </p>
                          <ColorPalette
                            value={hoverbackgroundColor2}
                            onChange={(colorValue) =>
                              setAttributes({
                                hoverbackgroundColor2: colorValue,
                              })
                            }
                            allowReset
                          />
                          <RangeControl
                            label={__(
                              "Color Location 1",
                              "responsive-block-editor-addons"
                            )}
                            value={hovercolorLocation1}
                            min={0}
                            max={100}
                            onChange={(value) =>
                              setAttributes({
                                hovercolorLocation1:
                                  value !== undefined ? value : 0,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Color Location 2",
                              "responsive-block-editor-addons"
                            )}
                            value={hovercolorLocation2}
                            min={0}
                            max={100}
                            onChange={(value) =>
                              setAttributes({
                                hovercolorLocation2:
                                  value !== undefined ? value : 100,
                              })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Gradient Direction",
                              "responsive-block-editor-addons"
                            )}
                            value={hovergradientDirection}
                            min={0}
                            max={100}
                            onChange={(value) =>
                              setAttributes({
                                hovergradientDirection:
                                  value !== undefined ? value : 90,
                              })
                            }
                          />
                        </Fragment>
                      );
                    }
                    return <div>{btn_color_tab}</div>;
                  }}
                </TabPanel>
              )}
              {"image" == backgroundType && (
                <Fragment>
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
                        className="rbea-rm-btn"
                        onClick={this.onRemoveImage}
                        isLink
                        isDestructive
                      >
                        {__("Remove Image", "responsive-block-editor-addons")}
                      </Button>
                    )}
                  </BaseControl>
                  {backgroundImage && (
                    <Fragment>
                      <SelectControl
                        label={__("Image Position")}
                        value={backgroundPosition}
                        onChange={(value) =>
                          setAttributes({ backgroundPosition: value })
                        }
                        options={[
                          { value: "top-left", label: __("Top Left") },
                          { value: "top center", label: __("Top Center") },
                          { value: "top right", label: __("Top Right") },
                          { value: "center left", label: __("Center Left") },
                          {
                            value: "center center",
                            label: __("Center Center"),
                          },
                          { value: "center right", label: __("Center Right") },
                          { value: "bottom left", label: __("Bottom Left") },
                          {
                            value: "bottom center",
                            label: __("Bottom Center"),
                          },
                          { value: "bottom right", label: __("Bottom Right") },
                        ]}
                      />
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
                      <SelectControl
                        label={__("Repeat")}
                        value={backgroundRepeat}
                        onChange={(value) =>
                          setAttributes({ backgroundRepeat: value })
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
                        value={backgroundSize}
                        onChange={(value) =>
                          setAttributes({ backgroundSize: value })
                        }
                        options={[
                          { value: "auto", label: __("Auto") },
                          { value: "cover", label: __("Cover") },
                          { value: "contain", label: __("Contain") },
                        ]}
                      />
                      <SelectControl
                        label={__("Image Overlay Type")}
                        value={overlayType}
                        onChange={(value) =>
                          setAttributes({ overlayType: value })
                        }
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
                                style={{
                                  backgroundColor: backgroundImageColor,
                                }}
                              ></span>
                            </span>
                          </p>
                          <ColorPalette
                            value={backgroundImageColor}
                            onChange={(colorValue) =>
                              setAttributes({
                                backgroundImageColor: colorValue,
                              })
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
                                style={{
                                  backgroundColor: gradientOverlayColor1,
                                }}
                              ></span>
                            </span>
                          </p>
                          <ColorPalette
                            value={gradientOverlayColor1}
                            onChange={(colorValue) =>
                              setAttributes({
                                gradientOverlayColor1: colorValue,
                              })
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
                                style={{
                                  backgroundColor: gradientOverlayColor2,
                                }}
                              ></span>
                            </span>
                          </p>
                          <ColorPalette
                            value={gradientOverlayColor2}
                            onChange={(colorValue) =>
                              setAttributes({
                                gradientOverlayColor2: colorValue,
                              })
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
                                setAttributes({
                                  gradientOverlayPosition: value,
                                })
                              }
                              options={[
                                {
                                  value: "center center",
                                  label: __("Center Center"),
                                },
                                {
                                  value: "center left",
                                  label: __("Center Left"),
                                },
                                {
                                  value: "center right",
                                  label: __("Center Right"),
                                },
                                {
                                  value: "top center",
                                  label: __("Top Center"),
                                },
                                { value: "top left", label: __("Top Left") },
                                { value: "top right", label: __("Top Right") },
                                {
                                  value: "bottom center",
                                  label: __("Bottom Center"),
                                },
                                {
                                  value: "bottom left",
                                  label: __("Bottom Left"),
                                },
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
          </InspectorTab>
          <InspectorTab key={"style"}>
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
                            "Top Padding Mobile",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={topPaddingMobile}
                          onChange={(value) =>
                            setAttributes({
                              topPaddingMobile: value,
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
                            "Top Padding Tablet",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={topPaddingTablet}
                          onChange={(value) =>
                            setAttributes({
                              topPaddingTablet: value,
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
                            "Top Padding",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={topPadding}
                          onChange={(value) =>
                            setAttributes({
                              topPadding: value,
                            })
                          }
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
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
                            "Bottom Padding Mobile",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={bottomPaddingMobile}
                          onChange={(value) =>
                            setAttributes({
                              bottomPaddingMobile: value,
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
                            "Bottom Padding Tablet",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={bottomPaddingTablet}
                          onChange={(value) =>
                            setAttributes({
                              bottomPaddingTablet: value,
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
                            "Bottom Padding",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={bottomPadding}
                          onChange={(value) =>
                            setAttributes({
                              bottomPadding: value,
                            })
                          }
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
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
                            "Left Padding Mobile",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={leftPaddingMobile}
                          onChange={(value) =>
                            setAttributes({
                              leftPaddingMobile: value,
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
                            "Left Padding Tablet",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={leftPaddingTablet}
                          onChange={(value) =>
                            setAttributes({
                              leftPaddingTablet: value,
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
                            "Left Padding",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={leftPadding}
                          onChange={(value) =>
                            setAttributes({
                              leftPadding: value,
                            })
                          }
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
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
                            "Right Padding Mobile",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={rightPaddingMobile}
                          onChange={(value) =>
                            setAttributes({
                              rightPaddingMobile: value,
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
                            "Right Padding Tablet",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={rightPaddingTablet}
                          onChange={(value) =>
                            setAttributes({
                              rightPaddingTablet: value,
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
                            "Right Padding",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={rightPadding}
                          onChange={(value) =>
                            setAttributes({
                              rightPadding: value,
                            })
                          }
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
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
                            "Top Margin Mobile",
                            "responsive-block-editor-addons"
                          )}
                          min={-2000}
                          max={2000}
                          value={topMarginMobile}
                          onChange={(value) =>
                            setAttributes({
                              topMarginMobile: value,
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
                            "Top Margin Tablet",
                            "responsive-block-editor-addons"
                          )}
                          min={-2000}
                          max={2000}
                          value={topMarginTablet}
                          onChange={(value) =>
                            setAttributes({
                              topMarginTablet: value,
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
                            "Top Margin",
                            "responsive-block-editor-addons"
                          )}
                          min={-2000}
                          max={2000}
                          value={topMargin}
                          onChange={(value) =>
                            setAttributes({
                              topMargin: value,
                            })
                          }
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
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
                            "Bottom Margin Mobile",
                            "responsive-block-editor-addons"
                          )}
                          min={-2000}
                          max={2000}
                          value={bottomMarginMobile}
                          onChange={(value) =>
                            setAttributes({
                              bottomMarginMobile: value,
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
                            "Bottom Margin Tablet",
                            "responsive-block-editor-addons"
                          )}
                          min={-2000}
                          max={2000}
                          value={bottomMarginTablet}
                          onChange={(value) =>
                            setAttributes({
                              bottomMarginTablet: value,
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
                            "Bottom Margin",
                            "responsive-block-editor-addons"
                          )}
                          min={-2000}
                          max={2000}
                          value={bottomMargin}
                          onChange={(value) =>
                            setAttributes({
                              bottomMargin: value,
                            })
                          }
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
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
                            "Left Margin Mobile",
                            "responsive-block-editor-addons"
                          )}
                          min={-2000}
                          max={2000}
                          value={leftMarginMobile}
                          onChange={(value) =>
                            setAttributes({
                              leftMarginMobile: value,
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
                            "Left Margin Tablet",
                            "responsive-block-editor-addons"
                          )}
                          min={-2000}
                          max={2000}
                          value={leftMarginTablet}
                          onChange={(value) =>
                            setAttributes({
                              leftMarginTablet: value,
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
                            "Left Margin",
                            "responsive-block-editor-addons"
                          )}
                          min={-2000}
                          max={2000}
                          value={leftMargin}
                          onChange={(value) =>
                            setAttributes({
                              leftMargin: value,
                            })
                          }
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
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
                            "Right Margin Mobile",
                            "responsive-block-editor-addons"
                          )}
                          min={-2000}
                          max={2000}
                          value={rightMarginMobile}
                          onChange={(value) =>
                            setAttributes({
                              rightMarginMobile: value,
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
                            "Right Margin Tablet",
                            "responsive-block-editor-addons"
                          )}
                          min={-2000}
                          max={2000}
                          value={rightMarginTablet}
                          onChange={(value) =>
                            setAttributes({
                              rightMarginTablet: value,
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
                            "Right Margin",
                            "responsive-block-editor-addons"
                          )}
                          min={-2000}
                          max={2000}
                          value={rightMargin}
                          onChange={(value) =>
                            setAttributes({
                              rightMargin: value,
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
            <PanelBody
              title={__("Border", "responsive-block-editor-addons")}
              initialOpen={false}
            >
                <BlockBorderHelperControl
                    attrNameTemplate="block%s"
                    values = {{radius: blockBorderRadius, style: blockBorderStyle, width: blockBorderWidth, color: blockBorderColor}}
                    setAttributes={ setAttributes }
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
                boxShadowColor={{ value: hoverboxShadowColor }}
                boxShadowHOffset={{ value: hoverboxShadowHOffset }}
                boxShadowVOffset={{ value: hoverboxShadowVOffset }}
                boxShadowBlur={{ value: hoverboxShadowBlur }}
                boxShadowSpread={{ value: hoverboxShadowSpread }}
                boxShadowPosition={{ value: hoverboxShadowPosition }}
                label={__("Hover Box Shadow")}
                attrNameTemplate="hover%s"
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"advance"}></InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
