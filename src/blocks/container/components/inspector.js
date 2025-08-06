import { useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/blockEditor";
import {
  PanelBody,
  ToggleControl,
  TabPanel,
  Dashicon,
  SelectControl,
  TextControl,
  Icon,
} from "@wordpress/components";

import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";

import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaWidthRangeControl from "../../../utils/components/rbea-width-range-control";
import RbeaSupportControl from "../../../utils/components/rbea-support-control";
import renderCustomIcon from "../renderCustomIcon";

export default function Inspector(props) {
  const { attributes, setAttributes } = props;

  const {
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
    z_index,
    z_indexTablet,
    z_indexMobile,
    isBlockRootParent,
    contentWidth,
    innerContentWidth,
    innerContentCustomWidthDesktop,
    innerContentCustomWidthTablet,
    innerContentCustomWidthMobile,
    innerContentBoxWidthTypeDesktop,
    innerContentBoxWidthTypeTablet,
    innerContentBoxWidthTypeMobile,
    innerContentBoxWidthTypeUpdated,
    innerContentWidthType,
    customWidthDesktop,
    customWidthTablet,
    customWidthMobile,
    customWidthTypeDesktop,
    customWidthTypeTablet,
    customWidthTypeMobile,
    customWidthTypeUpdated,
    customWidthType,
    minHeight,
    minHeightTablet,
    minHeightMobile,
    equalHeight,
    htmlTag,
    htmlTagLink,
    linkTarget,
    overflow,
    direction,
    directionTablet,
    directionMobile,
    alignItemsDesktop,
    alignItemsTablet,
    alignItemsMobile,
    justifyContentDesktop,
    justifyContentTablet,
    justifyContentMobile,
    childrenWidthDesktop,
    childrenWidthTablet,
    childrenWidthMobile,
    wrapDesktop,
    wrapTablet,
    wrapMobile,
    alignContentDesktop,
    alignContentTablet,
    alignContentMobile,
  } = attributes;

  const [activeTab, setActiveTab] = useState("desktop");
  const [activeWrapTab, setActiveWrapTab] = useState("desktop");

  const [unitDesktop, setUnitDesktop] = useState(
    attributes.innerContentBoxWidthTypeDesktop
  );
  const [unitTablet, setUnitTablet] = useState(
    attributes.innerContentBoxWidthTypeTablet
  );
  const [unitMobile, setUnitMobile] = useState(
    attributes.innerContentBoxWidthTypeMobile
  );

  // custom width.
  const [unitCustomWidthDesktop, setCustomWidthUnitDesktop] = useState(
    attributes.customWidthTypeDesktop
  );
  const [unitCustomWidthTablet, setCustomWidthUnitTablet] = useState(
    attributes.customWidthTypeTablet
  );
  const [unitCustomWidthMobile, setCustomWidthUnitMobile] = useState(
    attributes.customWidthTypeMobile
  );

  useEffect(() => {
    setUnitDesktop(attributes.innerContentBoxWidthTypeDesktop);
  }, [attributes.innerContentBoxWidthTypeDesktop]);

  useEffect(() => {
    setUnitTablet(attributes.innerContentBoxWidthTypeTablet);
  }, [attributes.innerContentBoxWidthTypeTablet]);

  useEffect(() => {
    setUnitMobile(attributes.innerContentBoxWidthTypeMobile);
  }, [attributes.innerContentBoxWidthTypeMobile]);

  // custom width.
  useEffect(() => {
    setCustomWidthUnitDesktop(attributes.customWidthTypeDesktop);
  }, [attributes.customWidthTypeDesktop]);

  useEffect(() => {
    setCustomWidthUnitTablet(attributes.customWidthTypeTablet);
  }, [attributes.customWidthTypeTablet]);

  useEffect(() => {
    setCustomWidthUnitMobile(attributes.customWidthTypeMobile);
  }, [attributes.customWidthTypeMobile]);

  useEffect(() => {
    const needsMigration =
      !innerContentBoxWidthTypeUpdated &&
      !innerContentBoxWidthTypeDesktop &&
      !innerContentBoxWidthTypeTablet &&
      !innerContentBoxWidthTypeMobile;

    if (needsMigration) {
      setAttributes({
        innerContentBoxWidthTypeDesktop: innerContentWidthType ?? "px",
        innerContentBoxWidthTypeTablet: innerContentWidthType ?? "px",
        innerContentBoxWidthTypeMobile: innerContentWidthType ?? "px",
        innerContentBoxWidthTypeUpdated: true,
      });
      console.log(
        "🔁 Migrated innerContentBoxWidthType attributes from innerContentWidthType"
      );
    }
  }, []);

  // custom width.
  useEffect(() => {
    const needsMigrationCustomWidth =
      !customWidthTypeUpdated &&
      !customWidthDesktop &&
      !customWidthTablet &&
      !customWidthMobile;

    if (needsMigrationCustomWidth) {
      setAttributes({
        customWidthDesktop: customWidthType ?? "px",
        customWidthTablet: customWidthType ?? "px",
        customWidthMobile: customWidthType ?? "px",
        customWidthTypeUpdated: true,
      });
      console.log(
        "🔁 Migrated innerContentBoxWidthType attributes from customWidthType"
      );
    }
  }, []);

  useEffect(() => {
    console.log("📐 Device Width Attributes:");
    console.log(
      "Desktop Width:",
      innerContentCustomWidthDesktop,
      innerContentBoxWidthTypeDesktop
    );
    console.log(
      "Tablet Width:",
      innerContentCustomWidthTablet,
      innerContentBoxWidthTypeTablet
    );
    console.log(
      "Mobile Width:",
      innerContentCustomWidthMobile,
      innerContentBoxWidthTypeMobile
    );
  }, [
    innerContentCustomWidthDesktop,
    innerContentBoxWidthTypeDesktop,
    innerContentCustomWidthTablet,
    innerContentBoxWidthTypeTablet,
    innerContentCustomWidthMobile,
    innerContentBoxWidthTypeMobile,
  ]);

  // custom width.
  useEffect(() => {
    console.log("📐 Device Custom Width Attributes:");
    console.log(
      "Desktop Custom Width:",
      customWidthDesktop,
      customWidthTypeDesktop
    );
    console.log(
      "Tablet Custom Width:",
      customWidthTablet,
      customWidthTypeTablet
    );
    console.log(
      "Mobile Custom Width:",
      customWidthMobile,
      customWidthTypeMobile
    );
  }, [
    customWidthDesktop,
    customWidthTypeDesktop,
    customWidthTablet,
    customWidthTypeTablet,
    customWidthMobile,
    customWidthTypeMobile,
  ]);

  const getCurrentDirection = () => {
    return activeTab === "desktop"
      ? direction
      : activeTab === "tablet"
      ? directionTablet
      : directionMobile;
  };

  // Helper function to check direction type
  const isDirectionType = (types) => {
    const currentDir = getCurrentDirection()?.split("-")[0];
    return types.includes(currentDir);
  };

  const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const htmlTagOptions = [
    {
      value: "div",
      label: __("div", "responsive-block-editor-addons"),
    },
    {
      value: "header",
      label: __("header", "responsive-block-editor-addons"),
    },
    {
      value: "footer",
      label: __("footer", "responsive-block-editor-addons"),
    },
    {
      value: "main",
      label: __("main", "responsive-block-editor-addons"),
    },
    {
      value: "article",
      label: __("article", "responsive-block-editor-addons"),
    },
    {
      value: "section",
      label: __("section", "responsive-block-editor-addons"),
    },
    {
      value: "aside",
      label: __("aside", "responsive-block-editor-addons"),
    },
    {
      value: "figure",
      label: __("figure", "responsive-block-editor-addons"),
    },
    {
      value: "figcaption",
      label: __("figcaption", "responsive-block-editor-addons"),
    },
    {
      value: "summary",
      label: __("summary", "responsive-block-editor-addons"),
    },
    {
      value: "nav",
      label: __("nav", "responsive-block-editor-addons"),
    },
    {
      value: "a",
      label: __("link", "responsive-block-editor-addons"),
    },
  ];

  const getChildWidthOptions = (flexDirection) => {
    return flexDirection === "row"
      ? [
          {
            value: "auto",
            label: __("Auto", "responsive-block-editor-addons"),
          },
          {
            value: "equal",
            label: __("Full", "responsive-block-editor-addons"),
          },
        ]
      : [
          {
            value: "auto",
            label: __("Auto", "responsive-block-editor-addons"),
          },
          {
            value: "equal",
            label: __("Equal", "responsive-block-editor-addons"),
          },
        ];
  };

  const directionOptions = [
    {
      label: "Row",
      value: "row",
      tooltip: __("Row", "responsive-block-editor-addons"),
      icon: <Icon icon={renderCustomIcon("flex-direction-row")} />,
    },
    {
      label: "Column",
      value: "column",
      tooltip: __("Column", "responsive-block-editor-addons"),
      icon: <Icon icon={renderCustomIcon("flex-direction-column")} />,
    },
    {
      label: "Row Reverse",
      value: "row-reverse",
      tooltip: __("Row Reverse", "responsive-block-editor-addons"),
      icon: <Icon icon={renderCustomIcon("flex-direction-row-reverse")} />,
    },
    {
      label: "Column Reverse",
      value: "column-reverse",
      tooltip: __("Column Reverse", "responsive-block-editor-addons"),
      icon: <Icon icon={renderCustomIcon("flex-direction-column-reverse")} />,
    },
  ];

  const getAlignItemsOptions = (currentDirection) => {
    console.log("currentDirection -> " + currentDirection);
    const flexDirection = currentDirection.includes("column")
      ? "row"
      : "column";

    return [
      {
        value: "flex-start",
        tooltip: __("Flex Start", "responsive-block-editor-addons"),
        icon: <Icon icon={renderCustomIcon(`flex-${flexDirection}-start`)} />,
      },
      {
        value: "center",
        tooltip: __("Center", "responsive-block-editor-addons"),
        icon: <Icon icon={renderCustomIcon(`flex-${flexDirection}-center`)} />,
      },
      {
        value: "flex-end",
        tooltip: __("Flex End", "responsive-block-editor-addons"),
        icon: <Icon icon={renderCustomIcon(`flex-${flexDirection}-end`)} />,
      },
      {
        value: "stretch",
        tooltip: __("Stretch", "responsive-block-editor-addons"),
        icon: <Icon icon={renderCustomIcon(`flex-${flexDirection}-strech`)} />,
      },
    ];
  };

  const getJustifyContentOptions = (
    currentDirection,
    isAlignContent = false
  ) => {
    console.log("JC currentDirection -> " + currentDirection);
    let flexDirection = currentDirection.includes("column") ? "column" : "row";
    if (isAlignContent) {
      flexDirection = currentDirection.includes("column") ? "row" : "column";
    }

    return [
      {
        value: "flex-start",
        tooltip: __("Flex Start", "responsive-block-editor-addons"),
        icon: <Icon icon={renderCustomIcon(`flex-${flexDirection}-start`)} />,
      },
      {
        value: "center",
        tooltip: __("Center", "responsive-block-editor-addons"),
        icon: <Icon icon={renderCustomIcon(`flex-${flexDirection}-center`)} />,
      },
      {
        value: "flex-end",
        tooltip: __("Flex End", "responsive-block-editor-addons"),
        icon: <Icon icon={renderCustomIcon(`flex-${flexDirection}-end`)} />,
      },
      {
        value: "space-between",
        tooltip: __("Space Between", "responsive-block-editor-addons"),
        icon: (
          <Icon
            icon={renderCustomIcon(`flex-${flexDirection}-space-between`)}
          />
        ),
      },
      {
        value: "space-around",
        tooltip: __("Space Around", "responsive-block-editor-addons"),
        icon: (
          <Icon icon={renderCustomIcon(`flex-${flexDirection}-space-around`)} />
        ),
      },
      {
        value: "space-evenly",
        tooltip: __("Space Evenly", "responsive-block-editor-addons"),
        icon: (
          <Icon icon={renderCustomIcon(`flex-${flexDirection}-space-evenly`)} />
        ),
      },
    ];
  };

  const wrapOptions = [
    {
      value: "wrap",
      tooltip: __("Wrap", "ultimate-addons-for-gutenberg"),
      icon: <Icon icon={renderCustomIcon("flex-wrap")} />,
    },
    {
      value: "nowrap",
      tooltip: __("No Wrap", "ultimate-addons-for-gutenberg"),
      icon: <Icon icon={renderCustomIcon("flex-no-wrap")} />,
    },
    {
      value: "wrap-reverse",
      tooltip: __("Wrap Reverse", "ultimate-addons-for-gutenberg"),
      icon: <Icon icon={renderCustomIcon("flex-wrap-reverse")} />,
    },
  ];

  const ResponsiveTabPanel = ({ children, label = "" }) => (
    <TabPanel
      className="responsive-size-type-field-tabs responsive-size-type-field__common-tabs responsive-inline-margin"
      activeClass="active-tab"
      initialTabName={activeTab}
      onSelect={(tabName) => setActiveTab(tabName)}
      style={{ marginTop: "20px" }}
      tabs={[
        {
          name: "desktop",
          title: <Dashicon icon="desktop" />,
          className: "responsive-desktop-tab responsive-responsive-tabs",
        },
        {
          name: "tablet",
          title: <Dashicon icon="tablet" />,
          className: "responsive-tablet-tab responsive-responsive-tabs",
        },
        {
          name: "mobile",
          title: <Dashicon icon="smartphone" />,
          className: "responsive-mobile-tab responsive-responsive-tabs",
        },
      ]}
    >
      {(tab) => children(tab)}
    </TabPanel>
  );

  return (
    <InspectorControls key="inspector">
      <InspectorTabs>
        {/* Content Tab */}
        <InspectorTab key={"content"}>
          <PanelBody
            title={__("Container Type", "responsive-block-editor-addons")}
            initialOpen={false}
            className="responsive_block_editor_addons__url-panel-body"
          >
            <RbeaTabRadioControl
              label={__("Container Width", "responsive-block-editor-addons")}
              value={contentWidth}
              onChange={(value) => setAttributes({ contentWidth: value })}
              options={[
                {
                  value: "alignfull",
                  label: __("Full Width", "responsive-block-editor-addons"),
                },
                {
                  value: "alignwide",
                  label: __("Boxed", "responsive-block-editor-addons"),
                },
                {
                  value: "default",
                  label: __("Custom", "responsive-block-editor-addons"),
                },
              ]}
              defaultValue="alignfull"
              optionHasBorder={true}
            />

            {"alignfull" === contentWidth && (
              <>
                <RbeaTabRadioControl
                  label={__("Content Width", "responsive-block-editor-addons")}
                  value={innerContentWidth}
                  onChange={(value) =>
                    setAttributes({ innerContentWidth: value })
                  }
                  options={[
                    {
                      value: "alignwide",
                      label: __("Boxed", "responsive-block-editor-addons"),
                    },
                    {
                      value: "alignfull",
                      label: __("Full Width", "responsive-block-editor-addons"),
                    },
                  ]}
                  defaultValue="alignwide"
                  optionHasBorder={true}
                />

                {innerContentWidth === "alignwide" && (
                  <TabPanel
                    className="responsive-size-type-field-tabs"
                    activeClass="active-tab"
                    tabs={[
                      {
                        name: "desktop",
                        title: <Dashicon icon="desktop" />,
                        className: "responsive-desktop-tab",
                      },
                      {
                        name: "tablet",
                        title: <Dashicon icon="tablet" />,
                        className: "responsive-tablet-tab",
                      },
                      {
                        name: "mobile",
                        title: <Dashicon icon="smartphone" />,
                        className: "responsive-mobile-tab",
                      },
                    ]}
                  >
                    {(tab) => {
                      const widthKey = {
                        desktop: "innerContentCustomWidthDesktop",
                        tablet: "innerContentCustomWidthTablet",
                        mobile: "innerContentCustomWidthMobile",
                      }[tab.name];

                      const typeKey = {
                        desktop: "innerContentBoxWidthTypeDesktop",
                        tablet: "innerContentBoxWidthTypeTablet",
                        mobile: "innerContentBoxWidthTypeMobile",
                      }[tab.name];

                      const value = attributes[widthKey];
                      const widthType = {
                        desktop: unitDesktop,
                        tablet: unitTablet,
                        mobile: unitMobile,
                      }[tab.name];

                      return (
                        <div style={{ marginTop: "20px" }}>
                          <RbeaWidthRangeControl
                            label={__(
                              "Content Box Width (" + tab.name + ")",
                              "responsive-block-editor-addons"
                            )}
                            value={value}
                            onChange={(val) =>
                              setAttributes({ [widthKey]: val })
                            }
                            min={0}
                            max={widthType === "%" ? 100 : 2000}
                            allowReset
                            initialPosition={20}
                            widthType={widthType}
                            setAttributes={setAttributes}
                            extraControls={true}
                            widthTypeKey={typeKey}
                          />
                        </div>
                      );
                    }}
                  </TabPanel>
                )}
              </>
            )}

            {"default" === contentWidth && (
              <TabPanel
                className="responsive-size-type-field-tabs"
                activeClass="active-tab"
                tabs={[
                  {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className: "responsive-desktop-tab",
                  },
                  {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className: "responsive-tablet-tab",
                  },
                  {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className: "responsive-mobile-tab",
                  },
                ]}
              >
                {(tab) => {
                  const widthKey = {
                    desktop: "customWidthDesktop",
                    tablet: "customWidthTablet",
                    mobile: "customWidthMobile",
                  }[tab.name];

                  const typeKey = {
                    desktop: "customWidthTypeDesktop",
                    tablet: "customWidthTypeTablet",
                    mobile: "customWidthTypeMobile",
                  }[tab.name];

                  const value = attributes[widthKey];
                  const widthType = {
                    desktop: unitCustomWidthDesktop,
                    tablet: unitCustomWidthTablet,
                    mobile: unitCustomWidthMobile,
                  }[tab.name];

                  return (
                    <div style={{ marginTop: "20px" }}>
                      <RbeaWidthRangeControl
                        label={__(
                          "Custom Width (" + tab.name + ")",
                          "responsive-block-editor-addons"
                        )}
                        value={value}
                        onChange={(val) => setAttributes({ [widthKey]: val })}
                        min={0}
                        max={widthType === "%" ? 100 : 2000}
                        allowReset
                        initialPosition={20}
                        widthType={widthType}
                        setAttributes={setAttributes}
                        extraControls={true}
                        widthTypeKey={typeKey}
                      />
                    </div>
                  );
                }}
              </TabPanel>
            )}

            <TabPanel
              className="responsive-size-type-field-tabs responsive-size-type-field__common-tabs responsive-inline-margin"
              activeClass="active-tab"
              tabs={[
                {
                  name: "desktop",
                  title: <Dashicon icon="desktop" />,
                  className:
                    "responsive-desktop-tab responsive-responsive-tabs",
                },
                {
                  name: "tablet",
                  title: <Dashicon icon="tablet" />,
                  className: "responsive-tablet-tab responsive-responsive-tabs",
                },
                {
                  name: "mobile",
                  title: <Dashicon icon="smartphone" />,
                  className: "responsive-mobile-tab responsive-responsive-tabs",
                },
              ]}
            >
              {(tab) => {
                const tabSettings = {
                  desktop: {
                    label: __(
                      "Minimum Height",
                      "responsive-block-editor-addons"
                    ),
                    value: minHeight,
                    attributeKey: "minHeight",
                  },
                  tablet: {
                    label: __(
                      "Minimum Height (Tablet)",
                      "responsive-block-editor-addons"
                    ),
                    value: minHeightTablet,
                    attributeKey: "minHeightTablet",
                  },
                  mobile: {
                    label: __(
                      "Minimum Height (Mobile)",
                      "responsive-block-editor-addons"
                    ),
                    value: minHeightMobile,
                    attributeKey: "minHeightMobile",
                  },
                };

                const { label, value, attributeKey } =
                  tabSettings[tab.name] || tabSettings.desktop;

                return (
                  <div>
                    <RbeaRangeControl
                      label={label}
                      min={0}
                      max={1000}
                      allowReset={true}
                      resetFallbackValue={1}
                      value={value}
                      onChange={(val) =>
                        setAttributes({
                          [attributeKey]: val !== undefined ? val : 1,
                        })
                      }
                    />
                  </div>
                );
              }}
            </TabPanel>

            <ToggleControl
              label={__("Equal Height", "responsive-block-editor-addons")}
              checked={equalHeight}
              onChange={(value) => onChangeHeight(value)}
              help={__(
                "Enabling this will change the Align Items value to Stretch.",
                "responsive-block-editor-addons"
              )}
            />

            <SelectControl
              label={__("HTML Tag", "responsive-block-editor-addons")}
              value={htmlTag}
              options={htmlTagOptions}
              onChange={(value) => setAttributes({ htmlTag: value })}
            />
            {htmlTag === "a" && (
              <>
                <TextControl
                  __nextHasNoMarginBottom
                  __next40pxDefaultSize
                  label={__("Link", "responsive-block-editor-addons")}
                  value={htmlTagLink}
                  onChange={(value) => setAttributes({ htmlTagLink: value })}
                />
                <ToggleControl
                  checked={linkTarget}
                  onChange={() => setAttributes({ linkTarget: !linkTarget })}
                  label={__(
                    "Open in new window",
                    "responsive-block-editor-addons"
                  )}
                />
              </>
            )}

            <RbeaTabRadioControl
              label={__("Container Width", "responsive-block-editor-addons")}
              value={overflow}
              onChange={(value) => setAttributes({ overflow: value })}
              options={[
                {
                  value: "visible",
                  label: __("Visible", "responsive-block-editor-addons"),
                },
                {
                  value: "hidden",
                  label: __("Hidden", "responsive-block-editor-addons"),
                },
                {
                  value: "auto",
                  label: __("Auto", "responsive-block-editor-addons"),
                },
              ]}
              defaultValue="visible"
              optionHasBorder={true}
            />
          </PanelBody>

          <PanelBody
            title={__("Layout", "responsive-block-editor-addons")}
            initialOpen={false}
            className="responsive_block_editor_addons__url-panel-body"
          >
            <ResponsiveTabPanel label="Direction">
              {(tab) => {
                const tabSettings = {
                  desktop: {
                    value: direction,
                    attributeKey: "direction",
                  },
                  tablet: {
                    value: directionTablet,
                    attributeKey: "directionTablet",
                  },
                  mobile: {
                    value: directionMobile,
                    attributeKey: "directionMobile",
                  },
                };

                const { value, attributeKey } =
                  tabSettings[tab.name] || tabSettings.desktop;

                return (
                  <>
                    <div style={{ marginTop: "20px" }}>
                      <RbeaTabRadioControl
                        label={__(
                          `Direction (${tab.name})`,
                          "responsive-block-editor-addons"
                        )}
                        value={value}
                        options={directionOptions}
                        onChange={(val) =>
                          setAttributes({ [attributeKey]: val || "row" })
                        }
                        help={__(
                          "Define the direction in which blocks inside this container will be placed one after the other.",
                          "responsive-block-editor-addons"
                        )}
                        defaultValue={"row"}
                        allowReset={true}
                        hasIcon={true}
                        optionHasBorder={true}
                      />
                    </div>
                  </>
                );
              }}
            </ResponsiveTabPanel>

            {isDirectionType(["column", "column-reverse"]) && (
              <RbeaTabRadioControl
                label={__("Children Width", "responsive-block-editor-addons")}
                value={
                  attributes[
                    `childrenWidth${
                      activeTab === "desktop"
                        ? "Desktop"
                        : activeTab === "tablet"
                        ? "Tablet"
                        : "Mobile"
                    }`
                  ]
                }
                options={getChildWidthOptions("row")}
                onChange={(value) =>
                  setAttributes({
                    [`childrenWidth${
                      activeTab === "desktop"
                        ? "Desktop"
                        : activeTab === "tablet"
                        ? "Tablet"
                        : "Mobile"
                    }`]: value,
                  })
                }
                defaultValue="equal"
              />
            )}

            {isDirectionType(["row", "row-reverse"]) && (
              <RbeaTabRadioControl
                label={__("Children Width", "responsive-block-editor-addons")}
                value={
                  attributes[
                    `childrenWidth${
                      activeTab === "desktop"
                        ? "Desktop"
                        : activeTab === "tablet"
                        ? "Tablet"
                        : "Mobile"
                    }`
                  ]
                }
                options={getChildWidthOptions("column")}
                onChange={(value) =>
                  setAttributes({
                    [`childrenWidth${
                      activeTab === "desktop"
                        ? "Desktop"
                        : activeTab === "tablet"
                        ? "Tablet"
                        : "Mobile"
                    }`]: value,
                  })
                }
                defaultValue="equal"
              />
            )}

            <ResponsiveTabPanel label="Alignment">
              {(tab) => {
                const currentDirection = {
                  desktop: direction,
                  tablet: directionTablet,
                  mobile: directionMobile,
                }[tab.name];

                const tabSettings = {
                  desktop: {
                    value: alignItemsDesktop,
                    attributeKey: "alignItemsDesktop",
                  },
                  tablet: {
                    value: alignItemsTablet,
                    attributeKey: "alignItemsTablet",
                  },
                  mobile: {
                    value: alignItemsMobile,
                    attributeKey: "alignItemsMobile",
                  },
                };

                const { value, attributeKey } =
                  tabSettings[tab.name] || tabSettings.desktop;

                const getAlignmentControls = () => {
                  switch (currentDirection) {
                    case "row":
                    case "row-reverse":
                    case "column":
                    case "column-reverse":
                      return (
                        <RbeaTabRadioControl
                          label={__(
                            `Align Items (${tab.name})`,
                            "responsive-block-editor-addons"
                          )}
                          value={value}
                          options={getAlignItemsOptions(currentDirection)}
                          onChange={(val) =>
                            setAttributes({ [attributeKey]: val || "center" })
                          }
                          help={__(
                            `Define the ${currentDirection === 'row' || currentDirection === 'row-reverse' ? 'vertical' : 'horizontal'} alignment inside this container.`,
                            "responsive-block-editor-addons"
                          )}
                          defaultValue="center"
                          allowReset
                          hasIcon
                          optionHasBorder
                        />
                      );

                    default:
                      return (
                        <div
                          style={{
                            color: "#757575",
                            fontStyle: "italic",
                            padding: "8px 0",
                          }}
                        >
                          {__(
                            "Select a flex direction to see alignment options",
                            "responsive-block-editor-addons"
                          )}
                        </div>
                      );
                  }
                };

                return (
                  <div style={{ marginTop: "20px" }}>
                    {getAlignmentControls()}
                  </div>
                );
              }}
            </ResponsiveTabPanel>

            <ResponsiveTabPanel label="Justify Content">
              {(tab) => {
                const currentDirection = {
                  desktop: direction,
                  tablet: directionTablet,
                  mobile: directionMobile,
                }[tab.name];

                const tabSettings = {
                  desktop: {
                    value: justifyContentDesktop,
                    attributeKey: "justifyContentDesktop",
                  },
                  tablet: {
                    value: justifyContentTablet,
                    attributeKey: "justifyContentTablet",
                  },
                  mobile: {
                    value: justifyContentMobile,
                    attributeKey: "justifyContentMobile",
                  },
                };

                const { value, attributeKey } =
                  tabSettings[tab.name] || tabSettings.desktop;

                const getJustifyContentControls = () => {
                  switch (currentDirection) {
                    case "row":
                    case "row-reverse":
                    case "column":
                    case "column-reverse":
                      return (
                        <RbeaTabRadioControl
                          label={__(
                            `Justify Content (${tab.name})`,
                            "responsive-block-editor-addons"
                          )}
                          value={value}
                          options={getJustifyContentOptions(currentDirection)}
                          onChange={(val) =>
                            setAttributes({
                              [attributeKey]: val || "flex-start",
                            })
                          }
                          help={__(
                            `Define the ${currentDirection === 'row' || currentDirection === 'row-reverse' ? 'horizontal' : 'vertical'} alignment inside this container.`,
                            "responsive-block-editor-addons"
                          )}
                          defaultValue="flex-start"
                          allowReset
                          hasIcon
                          optionHasBorder
                        />
                      );

                    default:
                      return (
                        <div
                          style={{
                            color: "#757575",
                            fontStyle: "italic",
                            padding: "8px 0",
                          }}
                        >
                          {__(
                            "Select a flex direction to see justification options",
                            "responsive-block-editor-addons"
                          )}
                        </div>
                      );
                  }
                };

                return (
                  <div style={{ marginTop: "20px" }}>
                    {getJustifyContentControls()}
                  </div>
                );
              }}
            </ResponsiveTabPanel>

            <TabPanel
              className="responsive-size-type-field-tabs responsive-size-type-field__common-tabs responsive-inline-margin"
              activeClass="active-tab"
              onSelect={(tabName) => setActiveWrapTab(tabName)}
              tabs={[
                {
                  name: "desktop",
                  title: <Dashicon icon="desktop" />,
                  className:
                    "responsive-desktop-tab responsive-responsive-tabs",
                },
                {
                  name: "tablet",
                  title: <Dashicon icon="tablet" />,
                  className: "responsive-tablet-tab responsive-responsive-tabs",
                },
                {
                  name: "mobile",
                  title: <Dashicon icon="smartphone" />,
                  className: "responsive-mobile-tab responsive-responsive-tabs",
                },
              ]}
            >
              {(tab) => {
                const tabSettings = {
                  desktop: {
                    label: __(
                      "Wrap (Desktop)",
                      "responsive-block-editor-addons"
                    ),
                    value: wrapDesktop,
                    attributeKey: "wrapDesktop",
                  },
                  tablet: {
                    label: __(
                      "Wrap (Tablet)",
                      "responsive-block-editor-addons"
                    ),
                    value: wrapTablet,
                    attributeKey: "wrapTablet",
                  },
                  mobile: {
                    label: __(
                      "Wrap (Mobile)",
                      "responsive-block-editor-addons"
                    ),
                    value: wrapMobile,
                    attributeKey: "wrapMobile",
                  },
                };

                const { label, value, attributeKey } =
                  tabSettings[tab.name] || tabSettings.desktop;

                return (
                  <RbeaTabRadioControl
                    label={__(
                      `Wrap (${tab.name})`,
                      "responsive-block-editor-addons"
                    )}
                    value={value}
                    options={wrapOptions}
                    onChange={(val) =>
                      setAttributes({
                        [attributeKey]: val,
                      })
                    }
                    help={__(
                      "Define whether the items are forced in a single line (No Wrap) or can be flowed into multiple lines (Wrap).",
                      "responsive-block-editor-addons"
                    )}
                    hasIcon
                    optionHasBorder
                  />
                );
              }}
            </TabPanel>

            {("wrap" === attributes["wrap" + capitalizeString(activeWrapTab)] ||
              "wrap-reverse" ===
                attributes["wrap" + capitalizeString(activeWrapTab)]) && (
              <ResponsiveTabPanel label="Align Content">
                {(tab) => {
                  const currentDirection = {
                    desktop: direction,
                    tablet: directionTablet,
                    mobile: directionMobile,
                  }[tab.name];

                  const tabSettings = {
                    desktop: {
                      value: alignContentDesktop,
                      attributeKey: "alignContentDesktop",
                    },
                    tablet: {
                      value: alignContentTablet,
                      attributeKey: "alignContentTablet",
                    },
                    mobile: {
                      value: alignContentMobile,
                      attributeKey: "alignContentMobile",
                    },
                  };

                  const { value, attributeKey } =
                    tabSettings[tab.name] || tabSettings.desktop;

                  const getAlignContentControls = () => {
                    switch (currentDirection) {
                      case "row":
                      case "row-reverse":
                      case "column":
                      case "column-reverse":
                        return (
                          <RbeaTabRadioControl
                            label={__(
                              `Align Content (${tab.name})`,
                              "responsive-block-editor-addons"
                            )}
                            value={value}
                            options={getJustifyContentOptions(
                              currentDirection,
                              true
                            )}
                            onChange={(val) =>
                              setAttributes({
                                [attributeKey]: val || "flex-start",
                              })
                            }
                            help={__(
                              `Define the ${currentDirection === 'row' || currentDirection === 'row-reverse' ? 'vertical' : 'horizontal'} alignment inside this container.`,
                              "responsive-block-editor-addons"
                            )}
                            defaultValue="flex-start"
                            hasIcon
                            optionHasBorder
                          />
                        );
                    }
                  };

                  return (
                    <div style={{ marginTop: "20px" }}>
                      {getAlignContentControls()}
                    </div>
                  );
                }}
              </ResponsiveTabPanel>
            )}
          </PanelBody>

          <RbeaSupportControl blockSlug="container" />
        </InspectorTab>

        {/* Style Tab */}
        <InspectorTab key={"style"}>
          <RbeaSupportControl blockSlug={"container"} />
        </InspectorTab>

        {/* Advanced Tab */}
        <InspectorTab key={"advance"}>
          {/* Hide on Desktop/Tablet/Mobile */}
          <PanelBody
            title={__(
              "Responsive Conditions",
              "responsive-block-editor-addons"
            )}
            initialOpen={false}
          >
            <ToggleControl
              label={__("Hide on Desktop", "responsive-block-editor-addons")}
              checked={hideWidget}
              onChange={() => setAttributes({ hideWidget: !hideWidget })}
            />
            <ToggleControl
              label={__("Hide on Tablet", "responsive-block-editor-addons")}
              checked={hideWidgetTablet}
              onChange={() =>
                setAttributes({ hideWidgetTablet: !hideWidgetTablet })
              }
            />
            <ToggleControl
              label={__("Hide on Mobile", "responsive-block-editor-addons")}
              checked={hideWidgetMobile}
              onChange={() =>
                setAttributes({ hideWidgetMobile: !hideWidgetMobile })
              }
            />
          </PanelBody>

          {/* z-index controls... */}
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
                      label={__(
                        "z-index (Mobile)",
                        "responsive-block-editor-addons"
                      )}
                      min={-1}
                      max={99999}
                      allowReset={true}
                      resetFallbackValue={1}
                      value={z_indexMobile}
                      onChange={(value) =>
                        setAttributes({
                          z_indexMobile: value !== undefined ? value : 1,
                        })
                      }
                    />
                  );
                } else if ("tablet" === tab.name) {
                  tabout = (
                    <RbeaRangeControl
                      label={__(
                        "z-index (Tablet)",
                        "responsive-block-editor-addons"
                      )}
                      min={-1}
                      max={99999}
                      allowReset={true}
                      resetFallbackValue={1}
                      value={z_indexTablet}
                      onChange={(value) =>
                        setAttributes({
                          z_indexTablet: value !== undefined ? value : 1,
                        })
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
                        setAttributes({
                          z_index: value !== undefined ? value : 1,
                        })
                      }
                    />
                  );
                }

                return <div>{tabout}</div>;
              }}
            </TabPanel>
          </PanelBody>
          <RbeaSupportControl blockSlug={"container"} />
        </InspectorTab>
      </InspectorTabs>
    </InspectorControls>
  );
}
