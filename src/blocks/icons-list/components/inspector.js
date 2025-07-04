import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaBorderRadiusControl from "../../../settings-components/RbeaBorderRadiusControl";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaSupportControl from "../../../utils/components/rbea-support-control";
/**
* Inspector Controls
*/

// Setup the block
const { __ } = wp.i18n;
const { select } = wp.data;

const { Component, Fragment } = wp.element;

// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  AlignmentToolbar,
  BlockControls,
  InnerBlocks,
} = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  BaseControl,
  ToggleControl,
  TabPanel,
  Dashicon,
} = wp.components;

/**
* Create an Inspector Controls wrapper Component
*/
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
  }

  componentDidMount() {
    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-style-icon-list-" + this.props.clientId
    );
    document.head.appendChild($style);

    this.changeChildAttr(this.props.attributes.hideLabel);
  }

  changeChildAttr(value) {
    const { setAttributes } = this.props;
    const getChildBlocks = select("core/block-editor").getBlocks(
      this.props.clientId
    );

    getChildBlocks.forEach((iconChild, key) => {
      iconChild.attributes.hideLabel = value;
    });
    setAttributes({ hideLabel: value });
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        align,
        alignTablet,
        alignMobile,
        icon_count,
        icons,
        gap,
        inner_gap,
        icon_layout,
        iconPosition,
        size,
        sizeMobile,
        sizeTablet,
        hideLabel,
        borderRadius,
        blockTopRadius,
        blockRightRadius,
        blockBottomRadius,
        blockLeftRadius,
        blockTopRadiusTablet,
        blockRightRadiusTablet,
        blockBottomRadiusTablet,
        blockLeftRadiusTablet,
        blockTopRadiusMobile,
        blockRightRadiusMobile,
        blockBottomRadiusMobile,
        blockLeftRadiusMobile,
        blockIsRadiusControlConnected,
        blockIsRadiusValueUpdated,
        bgSize,
        bgSizeMobile,
        bgSizeTablet,
        border,
        fontSize,
        labelFontFamily,
        labelFontWeight,
        labelLineHeight,
        labelFontSize,
        labelFontSizeTablet,
        labelFontSizeMobile,
        labelFontColor,
        labelFontColorHover,
        iconColor,
        iconBorderColor,
        iconBackgroundColor,
        iconColorHover,
        iconBorderColorHover,
        iconBackgroundColorHover,
        isColorValueUpdated,
        hideWidget,
        hideWidgetTablet,
        hideWidgetMobile,
        z_index,
        z_indexMobile,
        z_indexTablet,
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
        blockTopMargin,
        blockTopMarginMobile,
        blockTopMarginTablet,
        blockBottomMargin,
        blockBottomMarginMobile,
        blockBottomMarginTablet,
        blockLeftMargin,
        blockLeftMarginMobile,
        blockLeftMarginTablet,
        blockRightMargin,
        blockRightMarginMobile,
        blockRightMarginTablet,
        blockIsPaddingControlConnected,
        blockIsMarginControlConnected,
        iconListUpdateColorFromParent,
      },
      setAttributes,
    } = this.props;

    const blockPaddingResetValues = {
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingTabletTop: 0,
      paddingTabletRight: 0,
      paddingTabletBottom: 0,
      paddingTabletLeft: 0,
      paddingMobileTop: 0,
      paddingMobileRight: 0,
      paddingMobileBottom: 0,
      paddingMobileLeft: 0,
    }
    const blockMarginResetValues = {
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginTabletTop: 0,
      marginTabletRight: 0,
      marginTabletBottom: 0,
      marginTabletLeft: 0,
      marginMobileTop: 0,
      marginMobileRight: 0,
      marginMobileBottom: 0,
      marginMobileLeft: 0,
    }

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

    const labelClass = hideLabel
      ? "responsive-block-editor-addons-icon-list__no-label"
      : "";


    // backward compatibility for border radius control

    if (!blockIsRadiusValueUpdated) {
      this.props.setAttributes(
        {
          blockTopRadius: borderRadius !== undefined ? borderRadius : blockTopRadius,
          blockBottomRadius: borderRadius !== undefined ? borderRadius : blockBottomRadius,
          blockLeftRadius: borderRadius !== undefined ? borderRadius : blockLeftRadius,
          blockRightRadius: borderRadius !== undefined ? borderRadius : blockRightRadius,
          blockTopRadiusTablet: borderRadius !== undefined ? borderRadius : blockTopRadiusTablet,
          blockBottomRadiusTablet: borderRadius !== undefined ? borderRadius : blockBottomRadiusTablet,
          blockRightRadiusTablet: borderRadius !== undefined ? borderRadius : blockRightRadiusTablet,
          blockLeftRadiusTablet: borderRadius !== undefined ? borderRadius : blockLeftRadiusTablet,
          blockTopRadiusMobile: borderRadius !== undefined ? borderRadius : blockTopRadiusMobile,
          blockBottomRadiusMobile: borderRadius !== undefined ? borderRadius : blockBottomRadiusMobile,
          blockLeftRadiusMobile: borderRadius !== undefined ? borderRadius : blockLeftRadiusMobile,
          blockRightRadiusMobile: borderRadius !== undefined ? borderRadius : blockRightRadiusMobile,
        }
      )
      this.props.setAttributes({ blockIsRadiusValueUpdated: true });
    }

    // backward compatibility for border radius control

    if (!blockIsRadiusValueUpdated) {
      this.props.setAttributes(
        {
          blockTopRadius: borderRadius !== undefined ? borderRadius : blockTopRadius,
          blockBottomRadius: borderRadius !== undefined ? borderRadius : blockBottomRadius,
          blockLeftRadius: borderRadius !== undefined ? borderRadius : blockLeftRadius,
          blockRightRadius: borderRadius !== undefined ? borderRadius : blockRightRadius,
          blockTopRadiusTablet: borderRadius !== undefined ? borderRadius : blockTopRadiusTablet,
          blockBottomRadiusTablet: borderRadius !== undefined ? borderRadius : blockBottomRadiusTablet,
          blockRightRadiusTablet: borderRadius !== undefined ? borderRadius : blockRightRadiusTablet,
          blockLeftRadiusTablet: borderRadius !== undefined ? borderRadius : blockLeftRadiusTablet,
          blockTopRadiusMobile: borderRadius !== undefined ? borderRadius : blockTopRadiusMobile,
          blockBottomRadiusMobile: borderRadius !== undefined ? borderRadius : blockBottomRadiusMobile,
          blockLeftRadiusMobile: borderRadius !== undefined ? borderRadius : blockLeftRadiusMobile,
          blockRightRadiusMobile: borderRadius !== undefined ? borderRadius : blockRightRadiusMobile,
        }
      )
      this.props.setAttributes({ blockIsRadiusValueUpdated: true });
    }

    return (
      <Fragment>
        <InspectorControls>
          <InspectorTabs>
            <InspectorTab key={"content"}>
              <PanelBody
                title={__("General", "responsive-block-editor-addons")}
                initialOpen={true}
              >
                <RbeaTabRadioControl
                  label={__("Layout", "responsive-block-editor-addons")}
                  value={icon_layout}
                  options={[
                    {
                      value: "horizontal",
                      label: __("Horizontal", "responsive-block-editor-addons"),
                    },
                    {
                      value: "vertical",
                      label: __("Vertical", "responsive-block-editor-addons"),
                    },
                  ]}
                  onChange={(value) => setAttributes({ icon_layout: value })}
                />

              <TabPanel
                className=" responsive-size-type-field-tabs responsive-size-type-field__common-tabs responsive-inline-margin"
                activeClass="active-tab"
                tabs={[
                  {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className:
                      " responsive-desktop-tab responsive-responsive-tabs",
                  },
                  {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className:
                      " responsive-tablet-tab responsive-responsive-tabs",
                  },
                  {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className:
                      " responsive-mobile-tab responsive-responsive-tabs",
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
                              "List Alignment Mobile",
                              "responsive-block-editor-addons"
                            )}
                          </p>
                          <div className="responsive-block-editor-addons-alignment-mobile">
                            <AlignmentToolbar
                              value={alignMobile}
                              onChange={(value) =>
                                setAttributes({
                                  alignMobile: value,
                                })
                              }
                              controls={["left", "center", "right"]}
                              isCollapsed={false}
                            />
                          </div>
                        </BaseControl>
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <BaseControl>
                          <p>
                            {__(
                              "List Alignment Tablet",
                              "responsive-block-editor-addons"
                            )}
                          </p>
                          <div className="responsive-block-editor-addons-alignment-tablet">
                            <AlignmentToolbar
                              value={alignTablet}
                              onChange={(value) =>
                                setAttributes({
                                  alignTablet: value,
                                })
                              }
                              controls={["left", "center", "right"]}
                              isCollapsed={false}
                            />
                          </div>
                        </BaseControl>
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <BaseControl>
                          <p>
                            {__("List Alignment", "responsive-block-editor-addons")}
                          </p>
                          <div className="responsive-block-editor-addons-alignment">
                            <AlignmentToolbar
                              value={align}
                              onChange={(value) =>
                                setAttributes({
                                  align: value,
                                })
                              }
                              controls={["left", "center", "right"]}
                              isCollapsed={false}
                            />
                          </div>
                        </BaseControl>
                      </Fragment>
                    );
                  }
                  return <div>{tabout}</div>;
                }}
              </TabPanel>

                <RbeaTabRadioControl
                  label={__("Icon Alignment", "responsive-block-editor-addons")}
                  value={iconPosition}
                  options={[
                    { value: "top", label: __("Top", "responsive-block-editor-addons") },
                    { value: "middle", label: __("Middle", "responsive-block-editor-addons") },
                  ]}
                  onChange={(value) => setAttributes({ iconPosition: value })}
                />
                <ToggleControl
                  label={__("Hide Labels", "responsive-block-editor-addons")}
                  checked={hideLabel}
                  onChange={(value) => this.changeChildAttr(value)}
                />
                <hr className="responsive-block-editor-addons-editor__separator" />
              </PanelBody>
              <RbeaSupportControl blockSlug={"icons-list"} />
            </InspectorTab>
            <InspectorTab key={"style"}>
        {!hideLabel && (
          <TypographyHelperControl
            title={"Label"}
            attrNameTemplate="label%s"
            values={{
              family: labelFontFamily,
              size: labelFontSize,
              sizeMobile: labelFontSizeMobile,
              sizeTablet: labelFontSizeTablet,
              weight: labelFontWeight,
              height: labelLineHeight,
            }}
            showLetterSpacing={false}
            showTextBottomSpacing={false}
            showTextDecoration={false}
            showTextTransform={false}
            showColorControl={false}
            setAttributes={setAttributes}
            {...this.props}
          />
        )}

            <PanelBody
              title={__("Icon", "responsive-block-editor-addons")}
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
                              <RbeaRangeControl
                                label={__(
                                  "Icon Size Mobile",
                                  "responsive-block-editor-addons"
                                )}
                                value={sizeMobile}
                                onChange={(value) =>
                                  setAttributes({
                                    sizeMobile: value !== undefined ? value : 16,
                                  })
                                }
                                min={0}
                                max={500}
                                allowReset
                              />
                            </Fragment>
                          );
                        } else if ("tablet" === tab.name) {
                          tabout = (
                            <Fragment>
                              <RbeaRangeControl
                                label={__(
                                  "Icon Size Tablet",
                                  "responsive-block-editor-addons"
                                )}
                                value={sizeTablet}
                                onChange={(value) =>
                                  setAttributes({
                                    sizeTablet: value !== undefined ? value : 16,
                                  })
                                }
                                min={0}
                                max={500}
                                allowReset
                              />
                            </Fragment>
                          );
                        } else {
                          tabout = (
                            <Fragment>
                              <RbeaRangeControl
                                label={__(
                                  "Icon Size",
                                  "responsive-block-editor-addons"
                                )}
                                value={size}
                                onChange={(value) =>
                                  setAttributes({
                                    size: value !== undefined ? value : 16,
                                  })
                                }
                                min={0}
                                max={500}
                                allowReset
                              />
                            </Fragment>
                          );
                        }

                      return <div>{tabout}</div>;
                    }}
                  </TabPanel>
                  <TabPanel
                    className=" responsive-size-type-field-tabs responsive-size-type-field__common-tabs responsive-inline-margin"
                    activeClass="active-tab"
                    tabs={[
                      {
                        name: "desktop",
                        title: <Dashicon icon="desktop" />,
                        className:
                          " responsive-desktop-tab responsive-responsive-tabs",
                      },
                      {
                        name: "tablet",
                        title: <Dashicon icon="tablet" />,
                        className:
                          " responsive-tablet-tab responsive-responsive-tabs",
                      },
                      {
                        name: "mobile",
                        title: <Dashicon icon="smartphone" />,
                        className:
                          " responsive-mobile-tab responsive-responsive-tabs",
                      },
                    ]}
                  >
                    {(tab) => {
                      let tabout;

                      if ("mobile" === tab.name) {
                        tabout = (
                          <Fragment>
                            <RbeaRangeControl
                              label={__(
                                "Icon Background Size Mobile",
                                "responsive-block-editor-addons"
                              )}
                              value={bgSizeMobile}
                              onChange={(value) =>
                                setAttributes({ bgSizeMobile: value })
                              }
                              help={__(
                                "Note: Background Size option is useful when one adds background color to the icons."
                              )}
                              min={0}
                              max={500}
                            />
                          </Fragment>
                        );
                      } else if ("tablet" === tab.name) {
                        tabout = (
                          <Fragment>
                            <RbeaRangeControl
                              label={__(
                                "Icon Background Size Tablet",
                                "responsive-block-editor-addons"
                              )}
                              value={bgSizeTablet}
                              onChange={(value) =>
                                setAttributes({ bgSizeTablet: value })
                              }
                              help={__(
                                "Note: Background Size option is useful when one adds background color to the icons.", "responsive-block-editor-addons"
                              )}
                              min={0}
                              max={500}
                            />
                          </Fragment>
                        );
                      } else {
                        tabout = (
                          <Fragment>
                            <RbeaRangeControl
                              label={__(
                                "Icon Background Size",
                                "responsive-block-editor-addons"
                              )}
                              value={bgSize}
                              onChange={(value) =>
                                setAttributes({ bgSize: value })
                              }
                              help={__(
                                "Note: Background Size option is useful when one adds background color to the icons."
                              )}
                              min={0}
                              max={500}
                            />
                          </Fragment>
                        );
                      }

                      return <div>{tabout}</div>;
                    }}
                  </TabPanel>
                  <RbeaRangeControl
                    label={__("Border", "responsive-block-editor-addons")}
                    value={border}
                    onChange={(value) => setAttributes({ border: value })}
                    help={__(
                      "Note: Border option is useful when one adds border color to the icons.", "responsive-block-editor-addons"
                    )}
                    min={0}
                    max={10}
                  />
                  <RbeaBorderRadiusControl
                    attrNameTemplate="block%s"
                    {...this.props}
                  />
            </PanelBody>
        
              <PanelBody
                title={__("Spacing", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <RbeaRangeControl
                  label={__(
                    "Gap between Items",
                    "responsive-block-editor-addons"
                  )}
                  value={gap}
                  onChange={(value) => setAttributes({ gap: value })}
                  help={__(
                    "Note: For better editing experience, the gap between items might look larger than applied. Viewing in frontend will show the actual results.", "responsive-block-editor-addons"
                  )}
                  min={0}
                  max={100}
                /> 
                {!hideLabel && (
                  <RbeaRangeControl
                    label={__("Gap between Icon and Label", "responsive-block-editor-addons")}
                    value={inner_gap}
                    onChange={(value) => setAttributes({ inner_gap: value })}
                    min={0}
                    max={100}
                  />
                )}
                <hr className="responsive-block-editor-addons-editor__separator" />
                <p className="responsive-block-editor-addons-container-spacing-title">Container</p>
                <ResponsiveNewMarginControl
                  attrNameTemplate="block%s"
                  resetValues={blockMarginResetValues}
                  {...this.props}
                />
                <ResponsiveNewPaddingControl
                  attrNameTemplate="block%s"
                  resetValues={blockPaddingResetValues}
                  {...this.props}
                />
              </PanelBody>
              <RbeaSupportControl blockSlug={"icons-list"} />
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
                        <RbeaRangeControl
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
                        <RbeaRangeControl
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
                        <RbeaRangeControl
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
            <RbeaSupportControl blockSlug={"icons-list"} />
            </InspectorTab>
          </InspectorTabs>
        </InspectorControls>
      </Fragment>
    );
  }
}
