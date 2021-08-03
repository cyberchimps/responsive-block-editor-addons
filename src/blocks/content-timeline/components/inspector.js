/**
 * Inspector Controls
 */

import times from "lodash/times";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import icons from "./../../../utils/components/icons";
import renderSVG from "../../../renderIcon";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ResponsiveSpacingControl from "../../../settings-components/Responsive Spacing Settings";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { dateI18n, __experimentalGetSettings } = wp.date;

// Import block components
const { InspectorControls, PanelColorSettings, ColorPalette } = wp.editor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  ToggleControl,
  TextControl,
  TabPanel,
  Icon,
} = wp.components;
let svg_icons = Object.keys(ResponsiveBlocksIcon);
/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.getIfbIcon = this.getIfbIcon.bind(this);
  }
  getIfbIcon(value) {
    this.props.setAttributes({ icon: value });
  }

  saveDate(value, index) {
    const { attributes, setAttributes } = this.props;
    const { t_date } = attributes;

    const newItems = t_date.map((item, thisIndex) => {
      if (index === thisIndex) {
        item = { ...item, ...value };
      }

      return item;
    });

    setAttributes({
      t_date: newItems,
    });
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        count,
        displayPostDate,
        timelineItems,
        t_date,
        timelinAlignment,
        dateFormat,
        dateBottomspace,
        dateColor,
        backgroundColor,
        headingColor,
        contentColor,
        dateFontFamily,
        headingFontFamily,
        contentFontFamily,
        dateLineHeight,
        dateFontWeight,
        dateFontSize,
        headingLineHeight,
        headingFontWeight,
        headingFontSize,
        contentLineHeight,
        contentFontWeight,
        contentFontSize,
        headingTag,
        itemBorderRadius,
        itemPadding,
        horizontalSpace,
        verticalSpace,
        horizontalSpaceMobile,
        verticalSpaceMobile,
        horizontalSpaceTablet,
        verticalSpaceTablet,
        itemBorderWidth,
        itemBorderStyle,
        itemBorderColor,
        opacity,
        separatorColor,
        iconColor,
        separatorBg,
        separatorBorder,
        separatorFillColor,
        iconFocus,
        iconBgFocus,
        borderFocus,
        iconSize,
        connectorBgsize,
        borderwidth,
        separatorwidth,
        icon,
        headingBottomMargin,
        headingBottomMarginMobile,
        headingBottomMarginTablet,
        stack,
        arrowlinAlignment,
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
    // Heading Tag Options
    const headingTagOptions = [
      {
        value: "h1",
        label: __("h1", "responsive-block-editor-addons"),
      },
      {
        value: "h2",
        label: __("h2", "responsive-block-editor-addons"),
      },
      {
        value: "h3",
        label: __("h3", "responsive-block-editor-addons"),
      },
      {
        value: "h4",
        label: __("h4", "responsive-block-editor-addons"),
      },
      {
        value: "h5",
        label: __("h5", "responsive-block-editor-addons"),
      },
      {
        value: "h6",
        label: __("h6", "responsive-block-editor-addons"),
      },
      {
        value: "p",
        label: __("p", "responsive-block-editor-addons"),
      },
      {
        value: "span",
        label: __("span", "responsive-block-editor-addons"),
      },
    ];

    var today = new Date();

    // Update color value
    const onChangeDateColor = (value) => setAttributes({ dateColor: value });
    const onChangeBackgroundColor = (value) =>
      setAttributes({ backgroundColor: value });
    const onChangeHeadingColor = (value) =>
      setAttributes({ headingColor: value });
    const onChangeContentColor = (value) =>
      setAttributes({ contentColor: value });

    // Icon properties.
    const icon_props = {
      icons: svg_icons,
      value: icon,
      onChange: this.getIfbIcon,
      isMulti: false,
      renderFunc: renderSVG,
      noSelectedPlaceholder: __(
        "Select Icon",
        "responsive-block-editor-addons"
      ),
    };

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RangeControl
                label={__("Number of Items", "responsive-block-editor-addons")}
                value={count}
                onChange={(newCount) => {
                  let cloneContent = [...timelineItems];
                  let cloneDate = [...t_date];

                  if (cloneContent.length < newCount) {
                    const incAmount = Math.abs(newCount - cloneContent.length);

                    // Save date.
                    {
                      times(incAmount, (n) => {
                        cloneDate.push({
                          title: cloneDate[0].title,
                        });
                      });
                    }

                    setAttributes({ t_date: cloneDate });

                    //Save content
                    {
                      times(incAmount, (n) => {
                        cloneContent.push({
                          time_heading: __("Timeline Heading ") + newCount,
                          time_desc: __(
                            "This is Timeline description, you can change me anytime click here "
                          ),
                        });
                      });
                    }
                    setAttributes({ timelineItems: cloneContent });
                  } else {
                    const incAmount = Math.abs(newCount - cloneContent.length);
                    let data_new = cloneContent;
                    for (var i = 0; i < incAmount; i++) {
                      data_new.pop();
                    }
                    setAttributes({ timelineItems: data_new });
                  }
                  setAttributes({ count: newCount });
                }}
                min={1}
                max={100}
                step={1}
              />
              <SelectControl
                label={__("Orientation", "responsive-block-editor-addons")}
                value={timelinAlignment}
                onChange={(value) => setAttributes({ timelinAlignment: value })}
                options={[
                  {
                    value: "left",
                    label: __("Left", "responsive-block-editor-addons"),
                  },
                  {
                    value: "right",
                    label: __("Right", "responsive-block-editor-addons"),
                  },
                  {
                    value: "center",
                    label: __("Center", "responsive-block-editor-addons"),
                  },
                ]}
              />
              <SelectControl
                label={__("Arrow Alignment", "responsive-block-editor-addons")}
                value={arrowlinAlignment}
                options={[
                  {
                    value: "top",
                    label: __("Top", "responsive-block-editor-addons"),
                  },
                  {
                    value: "bottom",
                    label: __("Bottom", "responsive-block-editor-addons"),
                  },
                  {
                    value: "center",
                    label: __("Center", "responsive-block-editor-addons"),
                  },
                ]}
                onChange={(value) =>
                  setAttributes({ arrowlinAlignment: value })
                }
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
                  "Note: Choose on what breakpoint the columns will stack.",
                  "responsive-block-editor-addons"
                )}
              />
            </PanelBody>

            <PanelBody
              title={__("Timeline Item", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <SelectControl
                label={__("Heading Tag", "responsive-block-editor-addons")}
                options={headingTagOptions}
                value={headingTag}
                onChange={(value) =>
                  this.props.setAttributes({
                    headingTag: value,
                  })
                }
              />

              <SelectControl
                label={__("Border Style", "responsive-block-editor-addons")}
                value={itemBorderStyle}
                onChange={(value) => setAttributes({ itemBorderStyle: value })}
                options={[
                  {
                    value: "none",
                    label: __("None", "responsive-block-editor-addons"),
                  },
                  {
                    value: "solid",
                    label: __("Solid", "responsive-block-editor-addons"),
                  },
                  {
                    value: "dotted",
                    label: __("Dotted", "responsive-block-editor-addons"),
                  },
                  {
                    value: "dashed",
                    label: __("Dashed", "responsive-block-editor-addons"),
                  },
                  {
                    value: "double",
                    label: __("Double", "responsive-block-editor-addons"),
                  },
                  {
                    value: "groove",
                    label: __("Groove", "responsive-block-editor-addons"),
                  },
                  {
                    value: "inset",
                    label: __("Inset", "responsive-block-editor-addons"),
                  },
                  {
                    value: "outset",
                    label: __("Outset", "responsive-block-editor-addons"),
                  },
                  {
                    value: "ridge",
                    label: __("Ridge", "responsive-block-editor-addons"),
                  },
                ]}
              />
              {"none" != itemBorderStyle && (
                <Fragment>
                  <RangeControl
                    label={__("Border Width", "responsive-block-editor-addons")}
                    value={itemBorderWidth}
                    onChange={(value) =>
                      this.props.setAttributes({
                        itemBorderWidth: value !== undefined ? value : 1,
                      })
                    }
                    min={1}
                    max={100}
                    step={1}
                    allowReset
                  />
                  <RangeControl
                    label={__(
                      "Border Radius",
                      "responsive-block-editor-addons"
                    )}
                    value={itemBorderRadius}
                    onChange={(value) =>
                      this.props.setAttributes({
                        itemBorderRadius: value,
                      })
                    }
                    min={1}
                    max={100}
                    step={1}
                  />
                </Fragment>
              )}
              {"none" != itemBorderStyle && (
                <Fragment>
                  <p className="responsive-setting-label">
                    {__("Border Color", "responsive-block-editor-addons")}
                    <span className="components-base-control__label">
                      <span
                        className="component-color-indicator"
                        style={{ backgroundColor: itemBorderColor }}
                      ></span>
                    </span>
                  </p>
                  <ColorPalette
                    value={itemBorderColor}
                    onChange={(colorValue) =>
                      setAttributes({ itemBorderColor: colorValue })
                    }
                    allowReset
                  />
                </Fragment>
              )}
              <RangeControl
                label={__("Padding", "responsive-block-editor-addons")}
                value={itemPadding}
                onChange={(value) =>
                  this.props.setAttributes({
                    itemPadding: value !== undefined ? value : 20,
                  })
                }
                min={1}
                max={200}
                step={1}
                allowReset
              />
            </PanelBody>

            <PanelBody
              title={__("Date Settings", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ToggleControl
                label={__("Display Post Date")}
                checked={displayPostDate}
                onChange={() =>
                  this.props.setAttributes({
                    displayPostDate: !displayPostDate,
                  })
                }
              />
              {displayPostDate && (
                <SelectControl
                  label={__("Date Format")}
                  value={dateFormat}
                  onChange={(value) => setAttributes({ dateFormat: value })}
                  options={[
                    { value: "M j, Y", label: dateI18n("M j, Y", today) },
                    { value: "F j, Y", label: dateI18n("F j, Y", today) },
                    { value: "m/d/Y", label: dateI18n("m/d/Y", today) },
                    { value: "m-d-Y", label: dateI18n("m-d-Y", today) },
                    { value: "m.d.Y", label: dateI18n("m.d.Y", today) },
                    { value: "d M Y", label: dateI18n("d M Y", today) },
                    { value: "d F Y", label: dateI18n("d F Y", today) },
                    { value: "d-m-Y", label: dateI18n("d-m-Y", today) },
                    { value: "d.m.Y", label: dateI18n("d.m.Y", today) },
                    { value: "d/m/Y", label: dateI18n("d/m/Y", today) },
                    { value: "Y-m-d", label: dateI18n("Y-m-d", today) },
                    { value: "Y.m.d", label: dateI18n("Y.m.d", today) },
                    { value: "Y/m/d", label: dateI18n("Y/m/d", today) },
                    { value: "M, Y", label: dateI18n("M, Y", today) },
                    { value: "M Y", label: dateI18n("M Y", today) },
                    { value: "F, Y", label: dateI18n("F, Y", today) },
                    { value: "F Y", label: dateI18n("F Y", today) },
                    { value: "custom", label: __("Normal Text") },
                  ]}
                />
              )}

              {displayPostDate &&
                times(count, (n) => (
                  <Fragment key={n}>
                    <TextControl
                      label={__("Date") + " " + (n + 1) + " " + __("Settings")}
                      value={t_date[n].title}
                      onChange={(value) => {
                        this.saveDate({ title: value }, n);
                      }}
                    />
                  </Fragment>
                ))}

              {displayPostDate && timelinAlignment !== "center" && (
                <RangeControl
                  label={__("Date Bottom Spacing")}
                  value={dateBottomspace}
                  onChange={(value) =>
                    setAttributes({
                      dateBottomspace: value !== undefined ? value : 5,
                    })
                  }
                  min={0}
                  max={50}
                  allowReset
                />
              )}
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody title={__("Connector")} initialOpen={false}>
              <FontIconPicker {...icon_props} />

              <RangeControl
                label={__("Icon Size")}
                value={iconSize}
                onChange={(value) =>
                  setAttributes({ iconSize: value !== undefined ? value : 20 })
                }
                min={0}
                max={30}
                allowReset
              />
              <RangeControl
                label={__("Icon Background Size")}
                value={connectorBgsize}
                onChange={(value) =>
                  setAttributes({
                    connectorBgsize: value !== undefined ? value : 35,
                  })
                }
                min={25}
                max={90}
                allowReset
              />
              <RangeControl
                label={__("Border Width")}
                value={borderwidth}
                onChange={(value) =>
                  setAttributes({
                    borderwidth: value !== undefined ? value : 0,
                  })
                }
                min={1}
                max={10}
                allowReset
              />
              <RangeControl
                label={__("Connector Width")}
                value={separatorwidth}
                onChange={(value) =>
                  setAttributes({
                    separatorwidth: value !== undefined ? value : 3,
                  })
                }
                min={1}
                max={10}
                allowReset
              />
              <PanelBody
                title={__("Connector Color Settings")}
                initialOpen={true}
              >
                <TabPanel
                  className="rbea-inspect-tabs rbea-inspect-tabs-col-2"
                  activeClass="active-tab"
                  tabs={[
                    {
                      name: "normal",
                      title: __("Normal"),
                      className: "rbea-normal-tab",
                    },
                    {
                      name: "focus",
                      title: __("Focus"),
                      className: "rbea-focus-tab",
                    },
                  ]}
                >
                  {(tabName) => {
                    let tabout;
                    if ("focus" === tabName.name) {
                      tabout = (
                        <PanelColorSettings
                          title={__("Color Settings")}
                          initialOpen={true}
                          colorSettings={[
                            {
                              value: separatorFillColor,
                              onChange: (colorValue) =>
                                setAttributes({
                                  separatorFillColor: colorValue,
                                }),
                              label: __("Line Color"),
                            },
                            {
                              value: iconFocus,
                              onChange: (colorValue) =>
                                setAttributes({ iconFocus: colorValue }),
                              label: __("Icon Color"),
                            },
                            {
                              value: iconBgFocus,
                              onChange: (colorValue) =>
                                setAttributes({ iconBgFocus: colorValue }),
                              label: __("Background Color"),
                            },
                            {
                              value: borderFocus,
                              onChange: (colorValue) =>
                                setAttributes({ borderFocus: colorValue }),
                              label: __("Border Color"),
                            },
                          ]}
                        ></PanelColorSettings>
                      );
                    } else {
                      tabout = (
                        <PanelColorSettings
                          title={__("Color Settings")}
                          initialOpen={true}
                          colorSettings={[
                            {
                              value: separatorColor,
                              onChange: (colorValue) =>
                                setAttributes({ separatorColor: colorValue }),
                              label: __("Line Color"),
                            },
                            {
                              value: iconColor,
                              onChange: (colorValue) =>
                                setAttributes({ iconColor: colorValue }),
                              label: __("Icon Color"),
                            },
                            {
                              value: separatorBg,
                              onChange: (colorValue) =>
                                setAttributes({ separatorBg: colorValue }),
                              label: __("Background Color"),
                            },
                            {
                              value: separatorBorder,
                              onChange: (colorValue) =>
                                setAttributes({ separatorBorder: colorValue }),
                              label: __("Border Color"),
                            },
                          ]}
                        ></PanelColorSettings>
                      );
                    }
                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
              </PanelBody>
            </PanelBody>
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ResponsiveSpacingControl
                title={"Horizontal Spacing"}
                attrNameTemplate="horizontalSpace%s"
                values={{
                  desktop: horizontalSpace,
                  tablet: horizontalSpaceTablet,
                  mobile: horizontalSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Vertical Spacing"}
                attrNameTemplate="verticalSpace%s"
                values={{
                  desktop: verticalSpace,
                  tablet: verticalSpaceTablet,
                  mobile: verticalSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Heading Bottom Margin"}
                attrNameTemplate="headingBottomMargin%s"
                values={{
                  desktop: headingBottomMargin,
                  tablet: headingBottomMarginTablet,
                  mobile: headingBottomMarginMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
            </PanelBody>

            <PanelBody
              title={__("Typography", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <PanelBody
                title={__("Date Typography", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <SelectControl
                  label={__("Font Family", "responsive-block-editor-addons")}
                  options={fontOptions}
                  value={dateFontFamily}
                  onChange={(value) => {
                    setAttributes({
                      dateFontFamily: value,
                    }),
                      loadGoogleFont(value);
                  }}
                />
                <RangeControl
                  label={__("Font Size", "responsive-block-editor-addons")}
                  value={dateFontSize}
                  onChange={(value) =>
                    this.props.setAttributes({
                      dateFontSize: value !== undefined ? value : 16,
                    })
                  }
                  min={0}
                  max={50}
                  step={1}
                  allowReset
                />
                <SelectControl
                  label={__("Font Weight", "responsive-block-editor-addons")}
                  options={fontWeightOptions}
                  value={dateFontWeight}
                  onChange={(value) =>
                    this.props.setAttributes({
                      dateFontWeight: value,
                    })
                  }
                />
                <RangeControl
                  label={__("Line Height", "responsive-block-editor-addons")}
                  value={dateLineHeight}
                  onChange={(value) =>
                    this.props.setAttributes({
                      dateLineHeight: value !== undefined ? value : 1,
                    })
                  }
                  min={0}
                  max={100}
                  step={1}
                  allowReset
                />
              </PanelBody>
              <PanelBody
                title={__(
                  "Heading Typography",
                  "responsive-block-editor-addons"
                )}
                initialOpen={false}
              >
                <SelectControl
                  label={__("Font Family", "responsive-block-editor-addons")}
                  options={fontOptions}
                  value={headingFontFamily}
                  onChange={(value) => {
                    setAttributes({
                      headingFontFamily: value,
                    }),
                      loadGoogleFont(value);
                  }}
                />
                <RangeControl
                  label={__("Font Size", "responsive-block-editor-addons")}
                  value={headingFontSize}
                  onChange={(value) =>
                    this.props.setAttributes({
                      headingFontSize: value !== undefined ? value : 20,
                    })
                  }
                  min={0}
                  max={50}
                  step={1}
                  allowReset
                />
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
                      headingLineHeight: value !== undefined ? value : 1,
                    })
                  }
                  min={0}
                  max={100}
                  step={1}
                  allowReset
                />
              </PanelBody>
              <PanelBody
                title={__(
                  "Content Typography",
                  "responsive-block-editor-addons"
                )}
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
                      contentFontSize: value !== undefined ? value : 16,
                    })
                  }
                  min={0}
                  max={50}
                  step={1}
                  allowReset
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
                      contentLineHeight: value !== undefined ? value : 2,
                    })
                  }
                  min={0}
                  max={100}
                  step={1}
                  allowReset
                />
              </PanelBody>
            </PanelBody>
            <PanelColorSettings
              title={__("Color Settings", "responsive-block-editor-addons")}
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
                {
                  value: headingColor,
                  onChange: onChangeHeadingColor,
                  label: __("Heading Color", "responsive-block-editor-addons"),
                },
                {
                  value: contentColor,
                  onChange: onChangeContentColor,
                  label: __("Content Color", "responsive-block-editor-addons"),
                },
                {
                  value: dateColor,
                  onChange: onChangeDateColor,
                  label: __("Date Color", "responsive-block-editor-addons"),
                },
              ]}
            >
              <RangeControl
                label={__("Opacity", "responsive-block-editor-addons")}
                value={opacity}
                onChange={(value) =>
                  setAttributes({ opacity: value !== undefined ? value : 100 })
                }
                min={0}
                max={100}
                allowReset
              />
            </PanelColorSettings>
          </InspectorTab>
          <InspectorTab key={"advance"}></InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
