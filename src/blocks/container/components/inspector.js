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
} from "@wordpress/components";

import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";

import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaWidthRangeControl from "../../../utils/components/rbea-width-range-control";
import RbeaSupportControl from "../../../utils/components/rbea-support-control";

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
  } = attributes;

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

  const onChangeHeight = (value) => {
    setAttributes({ equalHeight: value });
    // if (value) {
    //   setAttributes({ alignItemsDesktop: "stretch" });
    //   setAttributes({ alignItemsTablet: "stretch" });
    //   setAttributes({ alignItemsMobile: "stretch" });
    // } else {
    //   setAttributes({ alignItemsDesktop: "center" });
    //   setAttributes({ alignItemsTablet: "center" });
    //   setAttributes({ alignItemsMobile: "center" });
    // }
  };

  return (
    <InspectorControls key="inspector">
      <InspectorTabs>
        {/* Content Tab */}
        <InspectorTab key={"content"}>
          <PanelBody>
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
              options={[
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
              ]}
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

          <RbeaSupportControl blockSlug="container" />
        </InspectorTab>

        {/* Style Tab */}
        <InspectorTab key={"style"}>
          {/* Heading Typography */}

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
