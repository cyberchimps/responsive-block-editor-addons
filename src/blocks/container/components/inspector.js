import { useEffect, useState, Fragment } from "@wordpress/element";
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
  GradientPicker,
} from "@wordpress/components";

import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import RbeaBackgroundTypeControl from "../../../utils/components/rbea-background-type-control";
import ColorBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import RbeaMediaUploadControl from "../../../utils/components/rbea-media-upload-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaBorderStyleTabControl from "../../../utils/components/rbea-border-style-tab-control";
import RbeaBorderRadiusControl from "../../../settings-components/RbeaBorderRadiusControl";
import ResponsiveBorderWidthControl from "../../../settings-components/ResponsiveBorderWidthSettings";
import BoxShadowControl from "../../../utils/components/box-shadow";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaWidthRangeControl from "../../../utils/components/rbea-width-range-control";
import RbeaSupportControl from "../../../utils/components/rbea-support-control";
import renderCustomIcon from "../renderCustomIcon";
import BackgroundImageControls from "./BackgroundImageControls";
import OverlaySettings from "./OverlaySettings";
import ShapeDividers from './ShapeDividers';
import RbeaExtensions from "../../../extensions/RbeaExtensions";

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
    rowGapDesktop,
    rowGapTablet,
    rowGapMobile,
    rowGapTypeDesktop,
    rowGapTypeTablet,
    rowGapTypeMobile,
    rowGapTypeUpdated,
    rowGapType,
    columnGapDesktop,
    columnGapTablet,
    columnGapMobile,
    columnGapTypeDesktop,
    columnGapTypeTablet,
    columnGapTypeMobile,
    columnGapTypeUpdated,
    columnGapType,
    minHeight,
    minHeightTablet,
    minHeightMobile,
    equalHeight,
    htmlTag,
    htmlTagLink,
    linkTarget,
    overflow,
    directionDesktop,
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
    backgroundType,
    gradient,
    backgroundVideo,
    textColor,
    linkColor,
    linkColorHover,
    containerBorderRadius,
    containerBorderStyle,
    containerBorderWidth,
    containerBorderTopWidth,
    containerBorderRightWidth,
    containerBorderBottomWidth,
    containerBorderLeftWidth,
    containerBorderTopWidthTablet,
    containerBorderRightWidthTablet,
    containerBorderBottomWidthTablet,
    containerBorderLeftWidthTablet,
    containerBorderTopWidthMobile,
    containerBorderRightWidthMobile,
    containerBorderBottomWidthMobile,
    containerBorderLeftWidthMobile,
    containerBorderColor,
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

  // row gap.
  const [unitRowGapDesktop, setUnitRowGapDesktop] = useState(
    attributes.rowGapTypeDesktop
  );
  const [unitRowGapTablet, setUnitRowGapTablet] = useState(
    attributes.rowGapTypeTablet
  );
  const [unitRowGapMobile, setUnitRowGapMobile] = useState(
    attributes.rowGapTypeMobile
  );

  // column gap.
  const [unitColumnGapDesktop, setUnitColumnGapDesktop] = useState(
    attributes.columnGapTypeDesktop
  );
  const [unitColumnGapTablet, setUnitColumnGapTablet] = useState(
    attributes.columnGapTypeTablet
  );
  const [unitColumnGapMobile, setUnitColumnGapMobile] = useState(
    attributes.columnGapTypeMobile
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

  // row gap.
  useEffect(() => {
    setUnitRowGapDesktop(attributes.rowGapTypeDesktop);
  }, [attributes.rowGapTypeDesktop]);

  useEffect(() => {
    setUnitRowGapTablet(attributes.rowGapTypeTablet);
  }, [attributes.rowGapTypeTablet]);

  useEffect(() => {
    setUnitRowGapMobile(attributes.rowGapTypeMobile);
  }, [attributes.rowGapTypeMobile]);

  // column gap.
  useEffect(() => {
    setUnitColumnGapDesktop(attributes.columnGapTypeDesktop);
  }, [attributes.columnGapTypeDesktop]);

  useEffect(() => {
    setUnitColumnGapTablet(attributes.columnGapTypeTablet);
  }, [attributes.columnGapTypeTablet]);

  useEffect(() => {
    setUnitColumnGapMobile(attributes.columnGapTypeMobile);
  }, [attributes.columnGapTypeMobile]);

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
    }
  }, []);

  // row gap.
  useEffect(() => {
    const needsMigrationRowGap =
      !rowGapTypeUpdated && !rowGapDesktop && !rowGapTablet && !rowGapMobile;

    if (needsMigrationRowGap) {
      setAttributes({
        rowGapDesktop: rowGapType ?? "px",
        rowGapTablet: rowGapType ?? "px",
        rowGapMobile: rowGapType ?? "px",
        rowGapTypeUpdated: true,
      });
    }
  }, []);

  // column gap.
  useEffect(() => {
    const needsMigrationColumnGap =
      !columnGapTypeUpdated &&
      !columnGapDesktop &&
      !columnGapTablet &&
      !columnGapMobile;

    if (needsMigrationColumnGap) {
      setAttributes({
        columnGapDesktop: columnGapType ?? "px",
        columnGapTablet: columnGapType ?? "px",
        columnGapMobile: columnGapType ?? "px",
        columnGapTypeUpdated: true,
      });
    }
  }, []);

  const getCurrentDirection = () => {
    return activeTab === "desktop"
      ? directionDesktop
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

  const onChangeHeight = ( value ) => {
		setAttributes( { equalHeight: value } );
		if ( value ) {
			setAttributes( { alignItemsDesktop: 'stretch' } );
			setAttributes( { alignItemsTablet: 'stretch' } );
			setAttributes( { alignItemsMobile: 'stretch' } );
		} else {
			setAttributes( { alignItemsDesktop: 'center' } );
			setAttributes( { alignItemsTablet: 'center' } );
			setAttributes( { alignItemsMobile: 'center' } );
		}
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

  const backgroundTypeOptions = [
    { value: "color", label: __("Color", "responsive-block-editor-addons") },
    {
      value: "gradient",
      label: __("Gradient", "responsive-block-editor-addons"),
    },
    { value: "image", label: __("Image", "responsive-block-editor-addons") },
    { value: "video", label: __("Video", "responsive-block-editor-addons") },
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

  const attachmentOptions = [
    { value: 'fixed', label: __( 'Fixed', 'responsive-block-editor-addons' ) },
    { value: 'scroll', label: __( 'Scroll', 'responsive-block-editor-addons' ) },
  ];

  const blendModeOptions = [
    { value: 'normal',       label: __( 'Normal', 'responsive-block-editor-addons' ) },
    { value: 'multiply',     label: __( 'Multiply', 'responsive-block-editor-addons' ) },
    { value: 'screen',       label: __( 'Screen', 'responsive-block-editor-addons' ) },
    { value: 'overlay',      label: __( 'Overlay', 'responsive-block-editor-addons' ) },
    { value: 'darken',       label: __( 'Darken', 'responsive-block-editor-addons' ) },
    { value: 'lighten',      label: __( 'Lighten', 'responsive-block-editor-addons' ) },
    { value: 'color-dodge',  label: __( 'Color Dodge', 'responsive-block-editor-addons' ) },
    { value: 'color-burn',   label: __( 'Color Burn', 'responsive-block-editor-addons' ) },
    { value: 'hard-light',   label: __( 'Hard Light', 'responsive-block-editor-addons' ) },
    { value: 'soft-light',   label: __( 'Soft Light', 'responsive-block-editor-addons' ) },
    { value: 'difference',   label: __( 'Difference', 'responsive-block-editor-addons' ) },
    { value: 'exclusion',    label: __( 'Exclusion', 'responsive-block-editor-addons' ) },
    { value: 'hue',          label: __( 'Hue', 'responsive-block-editor-addons' ) },
    { value: 'saturation',   label: __( 'Saturation', 'responsive-block-editor-addons' ) },
    { value: 'color',        label: __( 'Color', 'responsive-block-editor-addons' ) },
    { value: 'luminosity',   label: __( 'Luminosity', 'responsive-block-editor-addons' ) }
  ];

  const repeatOptions = [
    { value: "no-repeat", label: __("No Repeat", "responsive-block-editor-addons") },
    { value: "repeat", label: __("Repeat", "responsive-block-editor-addons") },
    { value: "repeat-x", label: __("Repeat-x", "responsive-block-editor-addons") },
    { value: "repeat-y", label: __("Repeat-y", "responsive-block-editor-addons") },
  ];

  const backgroundSizeOptions = [
    { value: "auto", label: __("Auto", "responsive-block-editor-addons") },
    { value: "cover", label: __("Cover", "responsive-block-editor-addons") },
    { value: "contain", label: __("Contain", "responsive-block-editor-addons") },
  ];

  const gradientOptions = [
    {
      name: 'JShine',
      gradient:
        'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
      slug: 'jshine',
    },
    {
      name: 'Moonlit Asteroid',
      gradient:
        'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
      slug: 'moonlit-asteroid',
    },
    {
      name: 'Rastafarie',
      gradient:
        'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
      slug: 'rastafari',
    },
  ];

  const containerMarginResetValues = {
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
  };

  const containerPaddingResetValues = {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingTabletTop: 0,
    paddingTabletRight: 0,
    paddingTabletBottom: 0,
    paddingTabletLeft: 0,
    paddingMobileTop: 0,
    paddingMobileRight: 0,
    paddingMobileBottom: 0,
    paddingMobileLeft: 0,
  };

  // Migrate legacy containerBorderWidth to responsive per-side border width attributes
  useEffect(() => {
    // Check if this is an old block instance that needs migration
    const hasLegacyBorderWidth = containerBorderWidth !== undefined && containerBorderWidth !== null;
    const hasNewAttributes = containerBorderTopWidth !== undefined;

    // Perform one-time migration only if legacy attribute exists and new attributes don't
    if (hasLegacyBorderWidth && !hasNewAttributes) {
      setAttributes({
        // Desktop
        containerBorderTopWidth: containerBorderWidth,
        containerBorderRightWidth: containerBorderWidth,
        containerBorderBottomWidth: containerBorderWidth,
        containerBorderLeftWidth: containerBorderWidth,
        // Tablet
        containerBorderTopWidthTablet: containerBorderWidth,
        containerBorderRightWidthTablet: containerBorderWidth,
        containerBorderBottomWidthTablet: containerBorderWidth,
        containerBorderLeftWidthTablet: containerBorderWidth,
        // Mobile
        containerBorderTopWidthMobile: containerBorderWidth,
        containerBorderRightWidthMobile: containerBorderWidth,
        containerBorderBottomWidthMobile: containerBorderWidth,
        containerBorderLeftWidthMobile: containerBorderWidth,
      });
    }
  }, []); // Empty dependency array ensures this runs only once

  const wrapOptions = [
    {
      value: "wrap",
      tooltip: __("Wrap", "responsive-block-editor-addons"),
      icon: <Icon icon={renderCustomIcon("flex-wrap")} />,
    },
    {
      value: "nowrap",
      tooltip: __("No Wrap", "responsive-block-editor-addons"),
      icon: <Icon icon={renderCustomIcon("flex-no-wrap")} />,
    },
    {
      value: "wrap-reverse",
      tooltip: __("Wrap Reverse", "responsive-block-editor-addons"),
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
            initialOpen={true}
            className="responsive_block_editor_addons__url-panel-body"
          >

            {isBlockRootParent && (
              <>
                <RbeaTabRadioControl
                  label={__(
                    "Container Width",
                    "responsive-block-editor-addons"
                  )}
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
                      label={__(
                        "Content Width",
                        "responsive-block-editor-addons"
                      )}
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
                          label: __(
                            "Full Width",
                            "responsive-block-editor-addons"
                          ),
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
                                max={widthType === "%" ? 100 : 1600}
                                allowReset
                                initialPosition={20}
                                widthType={widthType}
                                setAttributes={setAttributes}
                                extraControls={true}
                                widthTypeKey={typeKey}
                                resetFallbackValue={widthType === "%" ? 100 : ( tab.name === 'desktop' ? 1340 : ( tab.name === 'tablet' ? 1024 : 767 ) ) }
                              />
                            </div>
                          );
                        }}
                      </TabPanel>
                    )}
                  </>
                )}
              </>
            )}

            { ( ( isBlockRootParent && 'default' === contentWidth ) || ! isBlockRootParent ) && (
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
                        onChange={(val) => {
                          setAttributes({ [widthKey]: val });
                          setAttributes({ widthSetByUser: true });
                        }}
                        min={0}
                        max={widthType === "%" ? 100 : 1600}
                        allowReset
                        initialPosition={20}
                        widthType={widthType}
                        setAttributes={setAttributes}
                        extraControls={true}
                        widthTypeKey={typeKey}
                        resetFallbackValue={widthType === "%" ? 100 : ( tab.name === 'desktop' ? 1340 : ( tab.name === 'tablet' ? 1024 : 767 ) ) }
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
                      resetFallbackValue={0}
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
              __nextHasNoMarginBottom
              label={__("Equal Height", "responsive-block-editor-addons")}
              checked={equalHeight}
              onChange={(value) => onChangeHeight(value)}
              help={__(
                "Enabling this will change the Align Items value to Stretch.",
                "responsive-block-editor-addons"
              )}
            />

            <SelectControl
              __next40pxDefaultSize
              __nextHasNoMarginBottom
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
                  value={htmlTagLink?.url}
                  onChange={(value) => setAttributes({ htmlTagLink: { ...htmlTagLink, url: value } })}
                />
                <ToggleControl
                  __nextHasNoMarginBottom
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
              label={__("Overflow", "responsive-block-editor-addons")}
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
                    value: directionDesktop,
                    attributeKey: "directionDesktop",
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
                    <div className="rbea-container-custom-radio-control">
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
                  desktop: directionDesktop,
                  tablet: directionTablet || directionDesktop,
                  mobile: directionMobile || directionTablet || directionDesktop,
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
                          onChange={(val) => {
                              const newAlign = val || "center";
                              setAttributes({ [attributeKey]: newAlign });
                              setAttributes({ equalHeight: newAlign === 'stretch' });
                            }
                          }
                          help={__(
                            `Define the ${
                              currentDirection === "row" ||
                              currentDirection === "row-reverse"
                                ? "vertical"
                                : "horizontal"
                            } alignment inside this container.`,
                            "responsive-block-editor-addons"
                          )}
                          defaultValue="center"
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
                  <div className="rbea-container-custom-radio-control">
                    {getAlignmentControls()}
                  </div>
                );
              }}
            </ResponsiveTabPanel>

            <ResponsiveTabPanel label="Justify Content">
              {(tab) => {
                const currentDirection = {
                  desktop: directionDesktop,
                  tablet: directionTablet || directionDesktop,
                  mobile: directionMobile || directionTablet || directionDesktop,
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
                            `Define the ${
                              currentDirection === "row" ||
                              currentDirection === "row-reverse"
                                ? "horizontal"
                                : "vertical"
                            } alignment inside this container.`,
                            "responsive-block-editor-addons"
                          )}
                          defaultValue="flex-start"
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
                  <div className="rbea-container-custom-radio-control">
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
                  <div className="rbea-container-custom-radio-control">
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
                      optionHasBorder
                    />
                  </div>
                );
              }}
            </TabPanel>

            {("wrap" === attributes["wrap" + capitalizeString(activeWrapTab)] ||
              "wrap-reverse" ===
                attributes["wrap" + capitalizeString(activeWrapTab)]) && (
              <ResponsiveTabPanel label="Align Content">
                {(tab) => {
                  const currentDirection = {
                    desktop: directionDesktop,
                    tablet: directionTablet || directionDesktop,
                    mobile: directionMobile || directionTablet || directionDesktop,
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
                              `Define the ${
                                currentDirection === "row" ||
                                currentDirection === "row-reverse"
                                  ? "vertical"
                                  : "horizontal"
                              } alignment inside this container.`,
                              "responsive-block-editor-addons"
                            )}
                            defaultValue="flex-start"
                            optionHasBorder
                          />
                        );
                    }
                  };

                  return (
                    <div className="rbea-container-custom-radio-control">
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
          <PanelBody
            title={__("Background", "responsive-block-editor-addons")}
            initialOpen={false}
            className="responsive_block_editor_addons__url-panel-body"
          >
            <RbeaBackgroundTypeControl
              label={__("Type", "responsive-block-editor-addons")}
              selectedValue={backgroundType}
              onChange={(value) => setAttributes({ backgroundType: value })}
              options={backgroundTypeOptions}
            />
            {"color" == backgroundType && (
              <>
                <ColorBackgroundControl {...props} />
              </>
            )}
            {"gradient" == backgroundType && (
              <GradientPicker
                value={gradient}
                onChange={(value) => { setAttributes({ gradient: value }) }}
                gradients={gradientOptions}
              />
            )}
            {"image" == backgroundType && (
              <>
                <BackgroundImageControls
                  attributes={attributes}
                  setAttributes={setAttributes}
                  attachmentOptions={attachmentOptions}
                  blendModeOptions={blendModeOptions}
                  repeatOptions={repeatOptions}
                  backgroundSizeOptions={backgroundSizeOptions}
                />
              </>
            )}
            {"video" == backgroundType && (
              <RbeaMediaUploadControl
                label={__("Video", "responsive-block-editor-addons")}
                value={{
                  url: backgroundVideo ? backgroundVideo.url : "",
                }}
                onChange={(newValue) => {
                  setAttributes({
                    backgroundVideo: newValue,
                  });
                }}
                mediaType={"video"}
              />
            )}

            <OverlaySettings 
              {...props}
              attachmentOptions={attachmentOptions}
              blendModeOptions={blendModeOptions}
              repeatOptions={repeatOptions}
              backgroundSizeOptions={backgroundSizeOptions}
              gradientOptions={gradientOptions}
            />

          </PanelBody>

          <PanelBody
            title={__("Color", "responsive-block-editor-addons")}
            initialOpen={false}
          >
            <RbeaColorControl
              label={__("Text Color", "responsive-block-editor-addons")}
              colorValue={textColor}
              onChange={(colorValue) =>
                setAttributes({ textColor: colorValue })
              }
              resetColor={() => setAttributes({ textColor: "" })}
            />
            <TabPanel
              className="responsive-block-editor-addons-inspect-tabs 
                  responsive-block-editor-addons-inspect-tabs-col-2  
                  responsive-block-editor-addons-color-inspect-tabs"
              activeClass="active-tab"
              initialTabName="normal" // Set the default active tab here
              tabs={[
                {
                  name: "empty-1",
                  title: __("", "responsive-block-editor-addons"),
                  className: "responsive-block-editor-addons-empty-tab",
                },
                {
                  name: "normal",
                  title: __("Normal", "responsive-block-editor-addons"),
                  className: "responsive-block-editor-addons-normal-tab",
                },
                {
                  name: "empty-2",
                  title: __("", "responsive-block-editor-addons"),
                  className: "responsive-block-editor-addons-empty-tab-middle",
                },
                {
                  name: "hover",
                  title: __("Hover", "responsive-block-editor-addons"),
                  className: "responsive-block-editor-addons-hover-tab",
                },
                {
                  name: "empty-3",
                  title: __("", "responsive-block-editor-addons"),
                  className: "responsive-block-editor-addons-empty-tab",
                },
              ]}
            >
              {(tabName) => {
                let color_tab;
                if ("normal" === tabName.name) {
                  color_tab = (
                    <RbeaColorControl
                      label={__("Link Color", "responsive-block-editor-addons")}
                      colorValue={linkColor}
                      onChange={(colorValue) =>
                        setAttributes({ linkColor: colorValue })
                      }
                      resetColor={() => setAttributes({ linkColor: "" })}
                    />
                  );
                } else if ("hover" === tabName.name) {
                  color_tab = (
                    <RbeaColorControl
                      label={__(
                        "Link Color Hover",
                        "responsive-block-editor-addons"
                      )}
                      colorValue={linkColorHover}
                      onChange={(colorValue) =>
                        setAttributes({ linkColorHover: colorValue })
                      }
                      resetColor={() => setAttributes({ linkColorHover: "" })}
                    />
                  );
                } else {
                  color_tab = emptyColorControl;
                }
                return <div>{color_tab}</div>;
              }}
            </TabPanel>
          </PanelBody>

          <PanelBody
            title={__("Border", "responsive-block-editor-addons")}
            initialOpen={false}
          >
            <RbeaBorderStyleTabControl
              selected={containerBorderStyle}
              onChange={(value) => setAttributes({ containerBorderStyle: value })}
            />
            <RbeaColorControl
              label={__("Color", "responsive-block-editor-addons")}
              colorValue={containerBorderColor}
              onChange={(colorValue) =>
                setAttributes({ containerBorderColor: colorValue })
              }
              resetColor={() => setAttributes({ containerBorderColor: "" })}
            />
            <ResponsiveBorderWidthControl
              attrNameTemplate="containerBorder%s"
              {...props}
            />
            <RbeaBorderRadiusControl
              attrNameTemplate="container%s"
              label="Border Radius"
              {...props}
            />
          </PanelBody>

          <PanelBody
            title={__("Box Shadow", "responsive-block-editor-addons")}
            initialOpen={false}
          >
            <TabPanel
              className="responsive-block-editor-addons-inspect-tabs 
                  responsive-block-editor-addons-inspect-tabs-col-2  
                  responsive-block-editor-addons-color-inspect-tabs"
              activeClass="active-tab"
              initialTabName="normal"
              tabs={[
                {
                  name: "empty-1",
                  title: "",
                  className: "responsive-block-editor-addons-empty-tab",
                },
                {
                  name: "normal",
                  title: __("Normal", "responsive-block-editor-addons"),
                  className: "responsive-block-editor-addons-normal-tab",
                },
                {
                  name: "empty-2",
                  title: "",
                  className: "responsive-block-editor-addons-empty-tab-middle",
                },
                {
                  name: "hover",
                  title: __("Hover", "responsive-block-editor-addons"),
                  className: "responsive-block-editor-addons-hover-tab",
                },
                {
                  name: "empty-3",
                  title: "",
                  className: "responsive-block-editor-addons-empty-tab",
                },
              ]}
            >
              {(tab) => {
                const isHover = tab.name === "hover";
                const modeLabel = isHover
                  ? __("Box Shadow (Hover)", "responsive-block-editor-addons")
                  : __("Box Shadow", "responsive-block-editor-addons");

                return (
                  <BoxShadowControl
                    controlKey={isHover ? "hoverboxShadow" : "boxShadow"}
                    setAttributes={setAttributes}
                    label={modeLabel}
                    boxShadowColor={{
                      value: isHover ? hoverboxShadowColor : boxShadowColor,
                      label: isHover
                        ? __("Color (Hover)", "responsive-block-editor-addons")
                        : __("Color", "responsive-block-editor-addons"),
                    }}
                    boxShadowHOffset={{
                      value: isHover ? hoverboxShadowHOffset : boxShadowHOffset,
                      label: isHover
                        ? __(
                            "Horizontal (Hover)",
                            "responsive-block-editor-addons"
                          )
                        : __("Horizontal", "responsive-block-editor-addons"),
                    }}
                    boxShadowVOffset={{
                      value: isHover ? hoverboxShadowVOffset : boxShadowVOffset,
                      label: isHover
                        ? __(
                            "Vertical (Hover)",
                            "responsive-block-editor-addons"
                          )
                        : __("Vertical", "responsive-block-editor-addons"),
                    }}
                    boxShadowBlur={{
                      value: isHover ? hoverboxShadowBlur : boxShadowBlur,
                      label: isHover
                        ? __("Blur (Hover)", "responsive-block-editor-addons")
                        : __("Blur", "responsive-block-editor-addons"),
                    }}
                    boxShadowSpread={{
                      value: isHover ? hoverboxShadowSpread : boxShadowSpread,
                      label: isHover
                        ? __("Spread (Hover)", "responsive-block-editor-addons")
                        : __("Spread", "responsive-block-editor-addons"),
                    }}
                    boxShadowPosition={{
                      value: isHover
                        ? hoverboxShadowPosition
                        : boxShadowPosition,
                      label: isHover
                        ? __(
                            "Position (Hover)",
                            "responsive-block-editor-addons"
                          )
                        : __("Position", "responsive-block-editor-addons"),
                    }}
                  />
                );
              }}
            </TabPanel>
          </PanelBody>

          <PanelBody
            title={__("Shape Dividers", "responsive-block-editor-addons")}
            initialOpen={false}
          >
            <ShapeDividers {...props} />
          </PanelBody>

          <PanelBody
            title={__("Spacing", "responsive-block-editor-addons")}
            initialOpen={false}
          >
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
                  desktop: "rowGapDesktop",
                  tablet: "rowGapTablet",
                  mobile: "rowGapMobile",
                }[tab.name];

                const typeKey = {
                  desktop: "rowGapTypeDesktop",
                  tablet: "rowGapTypeTablet",
                  mobile: "rowGapTypeMobile",
                }[tab.name];

                const value = attributes[widthKey];
                const widthType = {
                  desktop: unitRowGapDesktop,
                  tablet: unitRowGapTablet,
                  mobile: unitRowGapMobile,
                }[tab.name];

                return (
                  <div style={{ marginTop: "20px" }}>
                    <RbeaWidthRangeControl
                      label={__(
                        "Row Gap (" + tab.name + ")",
                        "responsive-block-editor-addons"
                      )}
                      value={value}
                      onChange={(val) => setAttributes({ [widthKey]: val })}
                      min={0}
                      max={widthType === "%" ? 100 : 200}
                      allowReset
                      initialPosition={20}
                      widthType={widthType}
                      setAttributes={setAttributes}
                      extraControls={true}
                      resetFallbackValue={widthType === "%" ? 5 : 20 }
                      widthTypeKey={typeKey}
                    />
                  </div>
                );
              }}
            </TabPanel>

            {/* Column Gap */}
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
                  desktop: "columnGapDesktop",
                  tablet: "columnGapTablet",
                  mobile: "columnGapMobile",
                }[tab.name];

                const typeKey = {
                  desktop: "columnGapTypeDesktop",
                  tablet: "columnGapTypeTablet",
                  mobile: "columnGapTypeMobile",
                }[tab.name];

                const value = attributes[widthKey];
                const widthType = {
                  desktop: unitColumnGapDesktop,
                  tablet: unitColumnGapTablet,
                  mobile: unitColumnGapMobile,
                }[tab.name];

                return (
                  <div style={{ marginTop: "20px" }}>
                    <RbeaWidthRangeControl
                      label={__(
                        "Column Gap (" + tab.name + ")",
                        "responsive-block-editor-addons"
                      )}
                      value={value}
                      onChange={(val) => setAttributes({ [widthKey]: val })}
                      min={0}
                      max={widthType === "%" ? 100 : 200}
                      allowReset
                      initialPosition={20}
                      widthType={widthType}
                      setAttributes={setAttributes}
                      extraControls={true}
                      resetFallbackValue={widthType === "%" ? 5 : 20 }
                      widthTypeKey={typeKey}
                    />
                  </div>
                );
              }}
            </TabPanel>

            <ResponsiveNewMarginControl
              attrNameTemplate="container%s"
              resetValues={containerMarginResetValues}
              {...props}
            />

            <ResponsiveNewPaddingControl
              attrNameTemplate="container%s"
              resetValues={containerPaddingResetValues}
              {...props}
            />
          </PanelBody>

          <RbeaSupportControl blockSlug={"container"} />
        </InspectorTab>

        {/* Advanced Tab */}
        <InspectorTab key={"advance"}>

          <RbeaExtensions {...props} />

          {/* Hide on Desktop/Tablet/Mobile */}
          

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
