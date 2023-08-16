import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import TypographyHelperControl from "../../../settings-components/TypographySettings";

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

    const labelClass = hideLabel
      ? "responsive-block-editor-addons-icon-list__no-label"
      : "";

    return (
      <Fragment>
        <InspectorControls>
          <InspectorTabs>
            <InspectorTab key={"content"}>
              <PanelBody
                title={__("General", "responsive-block-editor-addons")}
                initialOpen={true}
              >
                <SelectControl
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

                <ToggleControl
                  label={__("Hide Labels", "responsive-block-editor-addons")}
                  checked={hideLabel}
                  onChange={(value) => this.changeChildAttr(value)}
                />
                <hr className="responsive-block-editor-addons-editor__separator" />
                <RangeControl
                  label={__(
                    "Gap between Items",
                    "responsive-block-editor-addons"
                  )}
                  value={gap}
                  onChange={(value) => setAttributes({ gap: value })}
                  help={__(
                    "Note: For better editing experience, the gap between items might look larger than applied.  Viewing in frontend will show the actual results.", "responsive-block-editor-addons"
                  )}
                  min={0}
                  max={100}
                />
                {!hideLabel && (
                  <RangeControl
                    label={__("Gap between Icon and Label", "responsive-block-editor-addons")}
                    value={inner_gap}
                    onChange={(value) => setAttributes({ inner_gap: value })}
                    min={0}
                    max={100}
                  />
                )}
                <hr className="responsive-block-editor-addons-editor__separator" />
                <SelectControl
                  label={__("Icon Alignment", "responsive-block-editor-addons")}
                  value={iconPosition}
                  options={[
                    { value: "top", label: __("Top", "responsive-block-editor-addons") },
                    { value: "middle", label: __("Middle", "responsive-block-editor-addons") },
                  ]}
                  onChange={(value) => setAttributes({ iconPosition: value })}
                />
                <hr className="responsive-block-editor-addons-editor__separator" />
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
                          <RangeControl
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
                          <RangeControl
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
                <hr className="responsive-block-editor-addons-editor__separator" />
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
                              "Background Size Mobile",
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
                          <RangeControl
                            label={__(
                              "Background Size Tablet",
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
                          <RangeControl
                            label={__(
                              "Background Size",
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
                <RangeControl
                  label={__("Border", "responsive-block-editor-addons")}
                  value={border}
                  onChange={(value) => setAttributes({ border: value })}
                  help={__(
                    "Note: Border option is useful when one adds border color to the icons.", "responsive-block-editor-addons"
                  )}
                  min={0}
                  max={10}
                />
                <RangeControl
                  label={__("Border Radius", "responsive-block-editor-addons")}
                  value={borderRadius}
                  onChange={(value) => setAttributes({ borderRadius: value })}
                  help={__(
                    "Note: Border Radius option is useful when one adds background color to the icons.", "responsive-block-editor-addons"
                  )}
                  min={0}
                  max={500}
                />
              </PanelBody>
            </InspectorTab>
            <InspectorTab key={"style"}>
				{!hideLabel && (
					<TypographyHelperControl
						title={__("Label Typography", "responsive-block-editor-addons")}
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
						showTextTransform={false}
						setAttributes={setAttributes}
						{...this.props}
					/>
				)}
            </InspectorTab>
            <InspectorTab key={"advance"}></InspectorTab>
          </InspectorTabs>
        </InspectorControls>
      </Fragment>
    );
  }
}
