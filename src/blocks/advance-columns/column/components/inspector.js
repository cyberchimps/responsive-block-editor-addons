/**
 * Inspector Controls
 */
import BoxShadowControl from "../../../../utils/components/box-shadow";
import BoxShadowControlHelper from "../../../../utils/components/box-shadow-helper";
import InspectorTab from "../../../../components/InspectorTab";
import InspectorTabs from "../../../../components/InspectorTabs";
import BlockBorderHelperControl from "../../../../settings-components/BlockBorderSettings";
import ColorBackgroundControl from "../../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import ImageBackgroundControl from "../../../../settings-components/BlockBackgroundSettings/ImageBackgroundSettings";
import GradientBackgroundControl from "../../../../settings-components/BlockBackgroundSettings/GradientBackgroundSettings";
import ResponsivePaddingControl from "../../../../settings-components/ResponsiveSpacingSettings/ResponsivePaddingControl";
import ResponsiveMarginControl from "../../../../settings-components/ResponsiveSpacingSettings/ResponsiveMarginControl";
import ImageHoverBackgroundSettings from "../../../../settings-components/BlockBackgroundSettings/ImageHoverBackgroundSettings"

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { ColorPalette, MediaUpload, InspectorControls } = wp.blockEditor;

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
        backgroundColorHover,
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
        opacity,
        blockBorderStyle,
        blockBorderWidth,
        blockBorderRadius,
        blockBorderColor,
        topMargin,
        bottomMargin,
        leftMargin,
        rightMargin,
        columnTopMargin,
        topMarginTablet,
        bottomMarginTablet,
        leftMarginTablet,
        rightMarginTablet,
        topMarginMobile,
        bottomMarginMobile,
        leftMarginMobile,
        rightMarginMobile,
        columnTopMarginTablet,
        columnTopMarginMobile,
        columnBottomMargin,
        columnBottomMarginTablet,
        columnBottomMarginMobile,
        columnLeftMargin,
        columnLeftMarginTablet,
        columnLeftMarginMobile,
        columnRightMargin,
        columnRightMarginTablet,
        columnRightMarginMobile,
        topPadding,
        bottomPadding,
        leftPadding,
        rightPadding,
        topPaddingTablet,
        bottomPaddingTablet,
        leftPaddingTablet,
        rightPaddingTablet,
        topPaddingMobile,
        bottomPaddingMobile,
        leftPaddingMobile,
        rightPaddingMobile,
        columnTopPadding,
        columnTopPaddingTablet,
        columnTopPaddingMobile,
        columnBottomPadding,
        columnBottomPaddingTablet,
        columnBottomPaddingMobile,
        columnLeftPadding,
        columnLeftPaddingTablet,
        columnLeftPaddingMobile,
        columnRightPadding,
        columnRightPaddingTablet,
        columnRightPaddingMobile,
        backgroundHoverImage,
        backgroundImageHoverPosition,
        backgroundImageHoverRepeat,
        backgroundImageHoverAttachment,
        backgroundImageHoverSize,
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
                step={0.01}
                onChange={(value) =>
                  setAttributes({ width: value !== undefined ? value : 50 })
                }
                allowReset
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
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
                <TabPanel
                  className="rbea-inspect-tabs rbea-inspect-tabs-col-2"
                  activeClass="active-tab"
                  tabs={[
                    {
                      name: "normal",
                      title: __("Normal", "responsive-block-editor-addons"),
                      className: "rbea-normal-tab",
                    },
                    {
                      name: "hover",
                      title: __("Hover", "responsive-block-editor-addons"),
                      className: "rbea-focus-tab",
                    },
                  ]}
                >
                  {(tabName) => {
                    let tabout;
                    if ("hover" == tabName.name) {
                      tabout = (
                        <Fragment>
                          <p className="responsive-block-editor-addons-setting-label">
                            {__("Background Color Hover", "responsive-block-editor-addons")}
                            <span className="components-base-control__label">
                              <span
                                className="component-color-indicator"
                                style={{
                                  backgroundColor: backgroundColorHover,
                                }}
                              ></span>
                            </span>
                          </p>
                          <ColorPalette
                            value={backgroundColorHover}
                            onChange={(value) =>
                              setAttributes({ backgroundColorHover: value })
                            }
                            allowReset
                          />
                        </Fragment>
                      );
                    } else {
                      tabout = (
                        <Fragment>
                          <ColorBackgroundControl {...this.props} />
                        </Fragment>
                      );
                    }
                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
              )}
              {"gradient" == backgroundType && (
                <GradientBackgroundControl
                  {...this.props}
                  showHoverGradient={true}
                />
              )}
              {"image" == backgroundType && (
                <TabPanel
                  className="rbea-inspect-tabs rbea-inspect-tabs-col-2"
                  activeClass="active-tab"
                  tabs={[
                    {
                      name: "normal",
                      title: __("Normal", "responsive-block-editor-addons"),
                      className: "rbea-normal-tab",
                    },
                    {
                      name: "hover",
                      title: __("Hover", "responsive-block-editor-addons"),
                      className: "rbea-focus-tab",
                    },
                  ]}
                >
                   {(tabName) => {
                    let tabout;
                    if ("hover" == tabName.name) {
                      tabout = (
                        <Fragment>
                          <ImageHoverBackgroundSettings
                            showSomeImageOptions={true}
                            showMoreImageOptions={true}
                            {...this.props}
                          />
                        </Fragment>
                      )
                    }else {
                      tabout = (
                        <Fragment>
                          <ImageBackgroundControl
                            showSomeImageOptions={true}
                            showMoreImageOptions={true}
                            showOverlayOptions={true}
                            {...this.props}
                          />
                        </Fragment>
                      );
                    }
                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
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
                      className: " responsive-tablet-tab  responsive-responsive-tabs",
              },
                  {
                      name: "mobile",
                          title: <Dashicon icon="smartphone" />,
                      className: " responsive-mobile-tab  responsive-responsive-tabs",
                  },
              ]}
              >
                  {(tab) => {
                      let tabout;

                      if ("mobile" === tab.name) {
                          tabout = (
                              <Fragment>
                              <p>{__("Padding Mobile", "responsive-block-editor-addons")}</p>
                                  <RangeControl
                                      label={__(
                                          "Top",
                                          "responsive-block-editor-addons"
                                        )}
                                      min={0}
                                      max={2000}
                                      allowReset={true}
                                      value={topPaddingMobile}
                                      onChange={(value) =>
                                      setAttributes({
                                          topPaddingMobile: value,
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
                                      value={bottomPaddingMobile}
                                      onChange={(value) =>
                                      setAttributes({
                                          bottomPaddingMobile: value,
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
                                      value={leftPaddingMobile}
                                      onChange={(value) =>
                                      setAttributes({
                                          leftPaddingMobile: value,
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
                              <p>{__("Padding Tablet", "responsive-block-editor-addons")}</p>
                                  <RangeControl
                                      label={__(
                                          "Top",
                                          "responsive-block-editor-addons"
                                    )}
                                      min={0}
                                      max={2000}
                          allowReset={true}
                                      value={topPaddingTablet}
                                      onChange={(value) =>
                                      setAttributes({
                                          topPaddingTablet: value,
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
                                      value={bottomPaddingTablet}
                                      onChange={(value) =>
                                      setAttributes({
                                          bottomPaddingTablet: value,
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
                                      value={leftPaddingTablet}
                                      onChange={(value) =>
                                      setAttributes({
                                          leftPaddingTablet: value,
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
                              <p>{__("Padding", "responsive-block-editor-addons")}</p>
                                  <RangeControl
                                      label={__(
                                          "Top",
                                          "responsive-block-editor-addons"
                                    )}
                                      min={0}
                                      max={2000}
                          allowReset={true}
                                      value={topPadding}
                                      onChange={(value) =>
                                      setAttributes({
                                          topPadding: value,
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
                                      value={bottomPadding}
                                      onChange={(value) =>
                                      setAttributes({
                                          bottomPadding: value,
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
                                      value={leftPadding}
                                      onChange={(value) =>
                                      setAttributes({
                                          leftPadding: value,
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
                      className: " responsive-tablet-tab  responsive-responsive-tabs",
              },
                  {
                      name: "mobile",
                          title: <Dashicon icon="smartphone" />,
                      className: " responsive-mobile-tab  responsive-responsive-tabs",
                  },
              ]}
              >
                  {(tab) => {
                      let tabout;

                      if ("mobile" === tab.name) {
                          tabout = (
                              <Fragment>
                              <p>{__("Margin Mobile", "responsive-block-editor-addons")}</p>
                                  <RangeControl
                                      label={__(
                                          "Top",
                                          "responsive-block-editor-addons"
                                        )}
                                      min={0}
                                      max={2000}
                                      allowReset={true}
                                      value={topMarginMobile}
                                      onChange={(value) =>
                                      setAttributes({
                                          topMarginMobile: value,
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
                                      value={bottomMarginMobile}
                                      onChange={(value) =>
                                      setAttributes({
                                          bottomMarginMobile: value,
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
                                      value={leftMarginMobile}
                                      onChange={(value) =>
                                      setAttributes({
                                          leftMarginMobile: value,
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
                              <p>{__("Margin Tablet", "responsive-block-editor-addons")}</p>
                                  <RangeControl
                                      label={__(
                                          "Top",
                                          "responsive-block-editor-addons"
                                    )}
                                      min={0}
                                      max={2000}
                          allowReset={true}
                                      value={topMarginTablet}
                                      onChange={(value) =>
                                      setAttributes({
                                          topMarginTablet: value,
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
                                      value={bottomMarginTablet}
                                      onChange={(value) =>
                                      setAttributes({
                                          bottomMarginTablet: value,
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
                                      value={leftMarginTablet}
                                      onChange={(value) =>
                                      setAttributes({
                                          leftMarginTablet: value,
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
                              <p>{__("Margin", "responsive-block-editor-addons")}</p>
                                  <RangeControl
                                      label={__(
                                          "Top",
                                          "responsive-block-editor-addons"
                                    )}
                                      min={0}
                                      max={2000}
                          allowReset={true}
                                      value={topMargin}
                                      onChange={(value) =>
                                      setAttributes({
                                          topMargin: value,
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
                                      value={bottomMargin}
                                      onChange={(value) =>
                                      setAttributes({
                                          bottomMargin: value,
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
                                      value={leftMargin}
                                      onChange={(value) =>
                                      setAttributes({
                                          leftMargin: value,
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
                values={{
                  radius: blockBorderRadius,
                  style: blockBorderStyle,
                  width: blockBorderWidth,
                  color: blockBorderColor,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />

              <BoxShadowControl
                setAttributes={setAttributes}
                label={__("Box Shadow", "responsive-block-editor-addons")}
                boxShadowColor={{ value: boxShadowColor, label: __("Color", "responsive-block-editor-addons") }}
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
                label={__("Hover Box Shadow", "responsive-block-editor-addons")}
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
