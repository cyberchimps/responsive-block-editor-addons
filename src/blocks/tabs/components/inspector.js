/**
 * Dependencies
 */
import InspectorTabs from "../../../components/InspectorTabs";
import InspectorTab from "../../../components/InspectorTab";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ResponsiveMarginControl from "../../../settings-components/ResponsiveSpacingSettings/ResponsiveMarginControl";
import ResponsivePaddingControl from "../../../settings-components/ResponsiveSpacingSettings/ResponsivePaddingControl";
import ColorBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import GradientBackgroundControl from "../../../settings-components/BlockBackgroundSettings/GradientBackgroundSettings";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import BoxShadowControl from "../../../utils/components/box-shadow";


// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const {
  InspectorControls,
  BlockAlignmentToolbar,
  InspectorAdvancedControls,
  ColorPalette
} = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  BaseControl,
  TextControl,
  ToggleControl,
  SelectControl,
  RangeControl,
  TabPanel,
  Dashicon,
} = wp.components;

export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    const {
      attributes: {
        block_id,
        tabsStyleD,
        tabsStyleM,
        tabsStyleT,
        tabBorderColor,
        tabBorderWidth,
        tabBackgroundColor,
        tabTitleColor,
        tabTitleActiveColor,
        tabTitleFontFamily,
        tabTitleFontSize,
        tabTitleFontSizeMobile,
        tabTitleFontSizeTablet,
        tabTitleFontWeight,
        tabTitleLineHeight,
        tabContentColor,
        tabContentFontFamily,
        tabContentFontSize,
        tabContentFontSizeMobile,
        tabContentFontSizeTablet,
        tabContentFontWeight,
        tabContentLineHeight,
        alignTabs,
        z_index,
        z_indexMobile,
        z_indexTablet,
        tabsTopPadding,
        tabsBottomPadding,
        tabsLeftPadding,
        tabsRightPadding,
        tabsTopPaddingTablet,
        tabsBottomPaddingTablet,
        tabsLeftPaddingTablet,
        tabsRightPaddingTablet,
        tabsTopPaddingMobile,
        tabsBottomPaddingMobile,
        tabsLeftPaddingMobile,
        tabsRightPaddingMobile,
        tabsTopMargin,
        tabsBottomMargin,
        tabsLeftMargin,
        tabsRightMargin,
        tabsTopMarginTablet,
        tabsBottomMarginTablet,
        tabsLeftMarginTablet,
        tabsRightMarginTablet,
        tabsTopMarginMobile,
        tabsBottomMarginMobile,
        tabsLeftMarginMobile,
        tabsRightMarginMobile,
        backgroundType,
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
        backgroundHoverColor,
        opacity,
        animationName,
        animationDirection,
        animationRepeat,
        animationDuration,
        animationDelay,
        animationCurve,
        blockBorderStyle,
        blockBorderWidth,
        blockBorderRadius,
        blockBorderColor,
        boxShadowColor,
        boxShadowHOffset,
        boxShadowVOffset,
        boxShadowBlur,
        boxShadowSpread,
        boxShadowPosition,
        alignTabsVertical,
        hideWidget,
        hideWidgetTablet,
        hideWidgetMobile,
      },
      setAttributes,
      deviceType,
      className,
    } = this.props;

    const backgroundTypeOptions = [
      { value: "none", label: __("None", "responsive-block-editor-addons") },
      {
        value: "color",
        label: __("Classic", "responsive-block-editor-addons"),
      },
      {
        value: "gradient",
        label: __("Gradient", "responsive-block-editor-addons"),
      },
    ];

    const showAnimationDirections = (animation) => {
      let directionOptions =
        animation === "rotate"
          ? [
              { value: "Left", label: "DownLeft" },
              { value: "DownRight", label: "DownRight" },
              { value: "UpLeft", label: "UpLeft" },
              { value: "UpRight", label: "UpRight" },
            ]
          : animation === "slide" ||
            animation === "flip" ||
            animation === "fold"
          ? [
              { value: "Left", label: "Left" },
              { value: "Right", label: "Right" },
              { value: "Up", label: "Up" },
              { value: "Down", label: "Down" },
            ]
          : [
              { value: "Left", label: "Left" },
              { value: "Right", label: "Right" },
              { value: "Center", label: "Center" },
              { value: "Up", label: "Up" },
              { value: "Down", label: "Down" },
            ];
      return directionOptions;
    };

    return (
      <InspectorControls key="controls">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("Tabs", "responsive-block-editor-addons")}
              initialOpen={true}
            >
              <Fragment>
                <SelectControl
                  label={__("Position", "responsive-block-editor-addons")}
                  value={tabsStyleD}
                  onChange={(value) => setAttributes({ tabsStyleD: value })}
                  beforeIcon="editor-textcolor"
                  options={[
                    {
                      value: "hstyle3",
                      label: __("Horizontal", "responsive-block-editor-addons"),
                    },
                    {
                      value: "vstyle8",
                      label: __("Vertical", "responsive-block-editor-addons"),
                    },
                  ]}
                />
              </Fragment>
              <h2>{__("Alignment", "responsive-block-editor-addons")}</h2>
              {tabsStyleD === 'hstyle3' && <BlockAlignmentToolbar
                value={alignTabs}
                onChange={(value) =>
                  setAttributes({
                    alignTabs: value,
                  })
                }
                controls={["left", "center", "right"]}
                isCollapsed={false}
              />
              }
              {tabsStyleD === 'vstyle8' && <BlockAlignmentToolbar
                value={alignTabsVertical}
                onChange={(value) =>
                  setAttributes({
                    alignTabsVertical: value,
                  })
                }
                controls={["left", "right"]}
                isCollapsed={false}
              />
              }
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody
              title={__("Tabs", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RangeControl
                label={__("Border width", "responsive-block-editor-addons")}
                value={tabBorderWidth}
                min={0}
                max={500}
                onChange={(value) => setAttributes({ tabBorderWidth: value })}
              />
              <p className="responsive-setting-label">
                {__("Border Color", "responsive-block-editor-addons")}
              </p>
              <span className="components-base-control__label">
                <span
                  className="component-color-indicator"
                  style={{ backgroundColor: tabBorderColor }}
                ></span>
              </span>
              <ColorPalette
                value={tabBorderColor}
                onChange={(value) => setAttributes({ tabBorderColor: value })}
                allowReset
              />
              <p className="responsive-setting-label">
                {__("Background Color", "responsive-block-editor-addons")}
              </p>
              <span className="components-base-control__label">
                <span
                  className="component-color-indicator"
                  style={{ backgroundColor: tabBackgroundColor }}
                ></span>
              </span>
              <ColorPalette
                value={tabBackgroundColor}
                onChange={(value) =>
                  setAttributes({ tabBackgroundColor: value })
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
                <TabPanel
                  className="responsive-block-editor-addons-inspect-tabs responsive-block-editor-addons-inspect-tabs-col-2"
                  activeClass="active-tab"
                  tabs={[
                    {
                      name: "normal",
                      title: __("Normal", "responsive-block-editor-addons"),
                      className: "responsive-block-editor-addons-normal-tab",
                    },
                    {
                      name: "hover",
                      title: __("Hover", "responsive-block-editor-addons"),
                      className: "responsive-block-editor-addons-hover-tab",
                    },
                  ]}
                >
                  {(tabName) => {
                    let btn_color_tab;
                    if ("normal" === tabName.name) {
                      btn_color_tab = (
                        <Fragment>
                          <ColorBackgroundControl {...this.props} />
                        </Fragment>
                      );
                    } else {
                      btn_color_tab = (
                        <Fragment>
                          <p className="responsive-setting-label">
                            {__(
                              "Hover Background Color",
                              "responsive-block-editor-addons"
                            )}
                            <span className="components-base-control__label">
                              <span
                                className="component-color-indicator"
                                style={{
                                  backgroundColor: backgroundHoverColor,
                                }}
                              ></span>
                            </span>
                          </p>
                          <ColorPalette
                            value={backgroundHoverColor}
                            onChange={(colorValue) =>
                              setAttributes({
                                backgroundHoverColor: colorValue,
                              })
                            }
                            allowReset
                          />
                        </Fragment>
                      );
                    }
                    return <div>{btn_color_tab}</div>;
                  }}
                </TabPanel>
              )}
              {"gradient" == backgroundType && (
                <GradientBackgroundControl
                  {...this.props}
                  showHoverGradient={true}
                />
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
              title={__("Title", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <p className="responsive-setting-label">
                {__("Color", "responsive-block-editor-addons")}
              </p>
              <span className="components-base-control__label">
                <span
                  className="component-color-indicator"
                  style={{ backgroundColor: tabTitleColor }}
                ></span>
              </span>
              <ColorPalette
                value={tabTitleColor}
                onChange={(value) => setAttributes({ tabTitleColor: value })}
                allowReset
              />
              <p className="responsive-setting-label">
                {__("Active Color", "responsive-block-editor-addons")}
              </p>
              <span className="components-base-control__label">
                <span
                  className="component-color-indicator"
                  style={{ backgroundColor: tabTitleActiveColor }}
                ></span>
              </span>
              <ColorPalette
                value={tabTitleActiveColor}
                onChange={(value) =>
                  setAttributes({ tabTitleActiveColor: value })
                }
                allowReset
              />
              <hr className="responsive-block-editor-addons-editor__separator" />
              <TypographyHelperControl
                title={__("Typography", "responsive-block-editor-addons")}
                attrNameTemplate="tabTitle%s"
                values={{
                  family: tabTitleFontFamily,
                  size: tabTitleFontSize,
                  sizeMobile: tabTitleFontSizeMobile,
                  sizeTablet: tabTitleFontSizeTablet,
                  weight: tabTitleFontWeight,
                  height: tabTitleLineHeight,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
            </PanelBody>
            <PanelBody
              title={__("Content", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <p className="responsive-setting-label">
                {__("Color", "responsive-block-editor-addons")}
              </p>
              <span className="components-base-control__label">
                <span
                  className="component-color-indicator"
                  style={{ backgroundColor: tabContentColor }}
                ></span>
              </span>
              <ColorPalette
                value={tabContentColor}
                onChange={(value) => setAttributes({ tabContentColor: value })}
                allowReset
              />
              <hr className="responsive-block-editor-addons-editor__separator" />
              <TypographyHelperControl
                title={__("Typography", "responsive-block-editor-addons")}
                attrNameTemplate="tabContent%s"
                values={{
                  family: tabContentFontFamily,
                  size: tabContentFontSize,
                  sizeMobile: tabContentFontSizeMobile,
                  sizeTablet: tabContentFontSizeTablet,
                  weight: tabContentFontWeight,
                  height: tabContentLineHeight,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
            </PanelBody>
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
              title={__("Motion Effects", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <PanelBody
                title={__(
                  "Entrance Animation",
                  "responsive-block-editor-addons"
                )}
                initialOpen={false}
              >
                <SelectControl
                  label={__("Animation", "responsive-block-editor-addons")}
                  value={animationName}
                  onChange={(value) =>
                    setAttributes({ animationName: value })
                  }
                  options={[
                    { value: "none", label: __("None", "responsive-block-editor-addons") },
                    { value: "fade", label: __("Fade", "responsive-block-editor-addons") },
                    { value: "slide", label: __("Slide", "responsive-block-editor-addons") },
                    { value: "bounce", label: __("Bounce", "responsive-block-editor-addons") },
                    { value: "zoom", label: __("Zoom", "responsive-block-editor-addons") },
                    { value: "flip", label: __("Flip", "responsive-block-editor-addons") },
                    { value: "fold", label: __("Fold", "responsive-block-editor-addons") },
                    { value: "rotate", label: __("Rotate", "responsive-block-editor-addons") },
                  ]}
                />
                {animationName !== "none" && (
                  <Fragment>
                    <SelectControl
                      label={__("Direction", "responsive-block-editor-addons")}
                      value={animationDirection}
                      onChange={(value) =>
                        setAttributes({ animationDirection: value })
                      }
                      options={showAnimationDirections(animationName)}
                    />
                    <SelectControl
                      label={__("Repeat", "responsive-block-editor-addons")}
                      value={animationRepeat}
                      onChange={(value) =>
                        setAttributes({ animationRepeat: value })
                      }
                      options={[
                        { value: "once", label: __("Once", "responsive-block-editor-addons") },
                        { value: "loop", label: __("Loop", "responsive-block-editor-addons") },
                      ]}
                    />
                    <RangeControl
                      label={__("Duration", "responsive-block-editor-addons")}
                      value={animationDuration}
                      min={0}
                      max={2000}
                      allowReset={true}
                      onChange={(value) =>
                        setAttributes({ animationDuration: value })
                      }
                    />
                    <RangeControl
                      label={__("Delay", "responsive-block-editor-addons")}
                      value={animationDelay}
                      min={0}
                      max={3000}
                      allowReset={true}
                      onChange={(value) =>
                        setAttributes({ animationDelay: value })
                      }
                    />
                    <SelectControl
                      label={__("Curve", "responsive-block-editor-addons")}
                      value={animationCurve}
                      onChange={(value) =>
                        setAttributes({ animationCurve: value })
                      }
                      options={[
                        { value: "ease-in-out", label: "ease-in-out" },
                        { value: "ease", label: "ease" },
                        { value: "ease-in", label: "ease-in" },
                        { value: "ease-out", label: "ease-out" },
                        { value: "linear", label: "linear" },
                      ]}
                    />
                  </Fragment>
                )}
              </PanelBody>
            </PanelBody>
            <PanelBody
              title={__("Margin", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ResponsiveMarginControl
                attrNameTemplate="tabs%s"
                values={{
                  desktopTop: tabsTopMargin,
                  desktopBottom: tabsBottomMargin,
                  desktopLeft: tabsLeftMargin,
                  desktopRight: tabsRightMargin,

                  tabletTop: tabsTopMarginTablet,
                  tabletBottom: tabsBottomMarginTablet,
                  tabletLeft: tabsLeftMarginTablet,
                  tabletRight: tabsRightMarginTablet,

                  mobileTop: tabsTopMarginMobile,
                  mobileBottom: tabsBottomMarginMobile,
                  mobileLeft: tabsLeftMarginMobile,
                  mobileRight: tabsRightMarginMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
            </PanelBody>
            <PanelBody
              title={__("Padding", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ResponsivePaddingControl
                attrNameTemplate="tabs%s"
                values={{
                  desktopTop: tabsTopPadding,
                  desktopBottom: tabsBottomPadding,
                  desktopLeft: tabsLeftPadding,
                  desktopRight: tabsRightPadding,

                  tabletTop: tabsTopPaddingTablet,
                  tabletBottom: tabsBottomPaddingTablet,
                  tabletLeft: tabsLeftPaddingTablet,
                  tabletRight: tabsRightPaddingTablet,

                  mobileTop: tabsTopPaddingMobile,
                  mobileBottom: tabsBottomPaddingMobile,
                  mobileLeft: tabsLeftPaddingMobile,
                  mobileRight: tabsRightPaddingMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
            </PanelBody>
            {/* <InspectorAdvancedControls>
              <RangeControl
                label={__("Z-Index", "responsive-block-editor-addons")}
                value={tabsZindex}
                min={-10}
                max={500}
                allowReset={true}
                onChange={(value) => setAttributes({ tabsZindex: value })}
              />
            </InspectorAdvancedControls> */}
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
              <PanelBody title={__("Box Shadow", "responsive-block-editor-addons")}
								initialOpen={false}
							>
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
									boxShadowBlur={{ value: boxShadowBlur, label: __("Blur", "responsive-block-editor-addons") }}
									boxShadowSpread={{ value: boxShadowSpread, label: __("Spread", "responsive-block-editor-addons") }}
									boxShadowPosition={{
										value: boxShadowPosition,
										label: __("Position", "responsive-block-editor-addons"),
									}}
								/>
							</PanelBody>
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
