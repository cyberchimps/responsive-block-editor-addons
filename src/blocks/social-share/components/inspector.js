/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ResponsivePaddingControl from "../../../settings-components/Responsive Spacing Settings/Responsive Padding Control";
import ResponsiveMarginControl from "../../../settings-components/Responsive Spacing Settings/Responsive Margin Control";
import TypographyHelperControl from "../../../settings-components/Typography Settings";
import BoxShadowControl from "../../../utils/components/box-shadow";
import BlockBorderHelperControl from "../../../settings-components/Block Border Settings";
import ColorBackgroundControl from "../../../settings-components/Block Background Settings/Color Background Settings";

// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  ColorPalette,
  AlignmentToolbar,
  BlockAlignmentToolbar,
  InspectorAdvancedControls,
} = wp.editor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  ButtonGroup,
  Button,
  ToggleControl,
  TabPanel,
  Dashicon,
  BaseControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        iconShape,
        iconColorType,
        iconPrimaryColor,
        iconSecondaryColor,
        showIconLabel,
        iconSize,
        iconsAlign,
        iconColumns,
        iconColumnsGap,
        iconRowsGap,
        iconContainerSize,
        iconContainerHeight,
        socialZindex,
        blockTopPadding,
        blockBottomPadding,
        blockLeftPadding,
        blockRightPadding,
        blockTopPaddingTablet,
        blockBottomPaddingTablet,
        blockLeftPaddingTablet,
        blockRightPaddingTablet,
        blockTopPaddingMobile,
        blockBottomPaddingMobile,
        blockLeftPaddingMobile,
        blockRightPaddingMobile,
        blockTopMargin,
        blockBottomMargin,
        blockLeftMargin,
        blockRightMargin,
        blockTopMarginMobile,
        blockBottomMarginMobile,
        blockLeftMarginMobile,
        blockRightMarginMobile,
        blockTopMarginTablet,
        blockBottomMarginTablet,
        blockLeftMarginTablet,
        blockRightMarginTablet,
        labelFontFamily,
        labelFontSize,
        labelFontSizeMobile,
        labelFontSizeTablet,
        labelFontWeight,
        labelLineHeight,
        iconLabelGap,
        labelColor,
        viewOption,
        skin,
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
        backgroundColor,
        opacity,
      },
      setAttributes,
    } = this.props;

    const iconColumnsOptions = [
      {
        value: "auto",
        label: __("Auto", "responsive-block-editor-addons"),
      },
      {
        value: "1",
        label: __("1", "responsive-block-editor-addons"),
      },
      {
        value: "2",
        label: __("2", "responsive-block-editor-addons"),
      },
      {
        value: "3",
        label: __("3", "responsive-block-editor-addons"),
      },
      {
        value: "4",
        label: __("4", "responsive-block-editor-addons"),
      },
      {
        value: "5",
        label: __("5", "responsive-block-editor-addons"),
      },
      {
        value: "6",
        label: __("6", "responsive-block-editor-addons"),
      },
    ];

    const viewOptions = [
      {
        value: "icontext",
        label: __("Icon & Text", "responsive-block-editor-addons"),
      },
      {
        value: "icon",
        label: __("Icon", "responsive-block-editor-addons"),
      },
      {
        value: "text",
        label: __("Text", "responsive-block-editor-addons"),
      },
    ];

    const iconShapeOptions = [
      {
        value: "square",
        label: __("Square", "responsive-block-editor-addons"),
      },
      {
        value: "rounded",
        label: __("Rounded", "responsive-block-editor-addons"),
      },
      {
        value: "circle",
        label: __("Circle", "responsive-block-editor-addons"),
      },
    ];

    const skinOptions = [
      {
        value: "default",
        label: __("Default", "responsive-block-editor-addons"),
      },
      {
        value: "flat",
        label: __("Flat", "responsive-block-editor-addons"),
      },
      {
        value: "framed",
        label: __("Framed", "responsive-block-editor-addons"),
      },
      {
        value: "minimal",
        label: __("Minimal", "responsive-block-editor-addons"),
      },
      {
        value: "boxed",
        label: __("Boxed Icon", "responsive-block-editor-addons"),
      },
    ];

    const handleSkinChange = (value) => {
      if (value === "default") {
        setAttributes({
          skin: value,
          iconColorType: "official",
          iconContainerSize: 103,
        });
      } else if (value === "flat") {
        setAttributes({
          skin: value,
          iconColorType: "custom",
          iconSecondaryColor: "#e4f3ff",
          iconContainerSize: 120,
        });
      } else if (value === "framed") {
        setAttributes({
          skin: value,
          iconColorType: "custom",
          iconSecondaryColor: "#0066cc",
          iconContainerSize: 120,
        });
      } else if (value === "boxed" || value === "minimal") {
        setAttributes({
          skin: value,
          iconColorType: "custom",
          iconSecondaryColor: "#e4f3ff",
          iconContainerSize: 120,
        });
      }
    };

    const handleColorTypeChange = (value) => {
      if (value === "official") {
        setAttributes({ iconColorType: value, iconContainerSize: 103 });
      } else if (value === "custom") {
        setAttributes({ iconColorType: value, iconContainerSize: 120 });
      }
    };

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("Share Buttons", "responsive-block-editor-addons")}
              initialOpen={true}
            >
              <SelectControl
                label={__("Shape", "responsive-block-editor-addons")}
                value={iconShape}
                onChange={(value) => setAttributes({ iconShape: value })}
                options={iconShapeOptions}
              />
              <SelectControl
                label={__("Columns", "responsive-block-editor-addons")}
                value={iconColumns}
                onChange={(value) => setAttributes({ iconColumns: value })}
                options={iconColumnsOptions}
              />
              <SelectControl
                label={__("View", "responsive-block-editor-addons")}
                value={viewOption}
                onChange={(value) => setAttributes({ viewOption: value })}
                options={viewOptions}
              />
              {viewOption !== "icon" && (
                <ToggleControl
                  label={__("Label", "responsive-block-editor-addons")}
                  checked={showIconLabel}
                  onChange={() =>
                    setAttributes({ showIconLabel: !showIconLabel })
                  }
                />
              )}
              <SelectControl
                label={__("Skin", "responsive-block-editor-addons")}
                value={skin}
                onChange={(value) => handleSkinChange(value)}
                options={skinOptions}
              />
              <h2>{__("Alignment", "responsive-block-editor-addons")}</h2>
              <BlockAlignmentToolbar
                value={iconsAlign}
                onChange={(value) =>
                  setAttributes({
                    iconsAlign: value,
                  })
                }
                controls={["left", "center", "right"]}
                isCollapsed={false}
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody initialOpen={true}>
              <RangeControl
                label={__("Columns Gap", "responsive-block-editor-addons")}
                value={iconColumnsGap}
                onChange={(value) => setAttributes({ iconColumnsGap: value })}
                min={0}
                max={100}
                allowReset
              />
              <RangeControl
                label={__("Rows Gap", "responsive-block-editor-addons")}
                value={iconRowsGap}
                onChange={(value) => setAttributes({ iconRowsGap: value })}
                min={0}
                max={100}
                allowReset
              />
              {showIconLabel && (
                <RangeControl
                  label={__("Icon Label Gap", "responsive-block-editor-addons")}
                  value={iconLabelGap}
                  onChange={(value) => setAttributes({ iconLabelGap: value })}
                  min={0}
                  max={100}
                  allowReset
                />
              )}
            </PanelBody>
            <PanelBody initialOpen={true}>
              {skin !== "boxed" && skin !== "minimal" && (
                <RangeControl
                  label={__("Button Size", "responsive-block-editor-addons")}
                  value={iconContainerSize}
                  onChange={(value) =>
                    setAttributes({ iconContainerSize: value })
                  }
                  min={0}
                  max={200}
                  allowReset
                />
              )}
              <RangeControl
                label={__("Icon Size", "responsive-block-editor-addons")}
                value={iconSize}
                onChange={(value) => setAttributes({ iconSize: value })}
                min={0}
                max={100}
                allowReset
              />
              <RangeControl
                label={__("Button Height", "responsive-block-editor-addons")}
                value={iconContainerHeight}
                onChange={(value) =>
                  setAttributes({ iconContainerHeight: value })
                }
                min={0}
                max={100}
                allowReset
              />
            </PanelBody>
            <PanelBody
              title={__("Color", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <SelectControl
                label={__("Color", "responsive-block-editor-addons")}
                value={iconColorType}
                onChange={(value) => handleColorTypeChange(value)}
                options={[
                  {
                    value: "official",
                    label: __("Official", "responsive-block-editor-addons"),
                  },
                  {
                    value: "custom",
                    label: __("Custom", "responsive-block-editor-addons"),
                  },
                ]}
              />
              {iconColorType === "custom" && (
                <Fragment>
                  <p className="responsive-block-editor-addons-setting-label">
                    {__("Primary", "responsive-block-editor-addons")}
                    <span className="components-base-control__label">
                      <span
                        className="component-color-indicator"
                        style={{ backgroundColor: iconPrimaryColor }}
                      ></span>
                    </span>
                  </p>
                  <ColorPalette
                    value={iconPrimaryColor}
                    onChange={(colorValue) =>
                      setAttributes({ iconPrimaryColor: colorValue })
                    }
                    allowReset
                  />
                  <p className="responsive-block-editor-addons-setting-label">
                    {__("Secondary", "responsive-block-editor-addons")}
                    <span className="components-base-control__label">
                      <span
                        className="component-color-indicator"
                        style={{ backgroundColor: iconSecondaryColor }}
                      ></span>
                    </span>
                  </p>
                  <ColorPalette
                    value={iconSecondaryColor}
                    onChange={(colorValue) =>
                      setAttributes({ iconSecondaryColor: colorValue })
                    }
                    allowReset
                  />
                </Fragment>
              )}
              <p className="responsive-block-editor-addons-setting-label">
                {__("Label", "responsive-block-editor-addons")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{ backgroundColor: labelColor }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={labelColor}
                onChange={(colorValue) =>
                  setAttributes({ labelColor: colorValue })
                }
                allowReset
              />
            </PanelBody>
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
          </InspectorTab>
          <InspectorTab key={"advance"}>
            <InspectorAdvancedControls>
              <ResponsivePaddingControl
                attrNameTemplate="block%s"
                values={{
                  desktopTop: blockTopPadding,
                  desktopBottom: blockBottomPadding,
                  desktopLeft: blockLeftPadding,
                  desktopRight: blockRightPadding,

                  tabletTop: blockTopPaddingTablet,
                  tabletBottom: blockBottomPaddingTablet,
                  tabletLeft: blockLeftPaddingTablet,
                  tabletRight: blockRightPaddingTablet,

                  mobileTop: blockTopPaddingMobile,
                  mobileBottom: blockBottomPaddingMobile,
                  mobileLeft: blockLeftPaddingMobile,
                  mobileRight: blockRightPaddingMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveMarginControl
                attrNameTemplate="block%s"
                values={{
                  desktopTop: blockTopMargin,
                  desktopBottom: blockBottomMargin,
                  desktopLeft: blockLeftMargin,
                  desktopRight: blockRightMargin,

                  tabletTop: blockTopMarginTablet,
                  tabletBottom: blockBottomMarginTablet,
                  tabletLeft: blockLeftMarginTablet,
                  tabletRight: blockRightMarginTablet,

                  mobileTop: blockTopMarginMobile,
                  mobileBottom: blockBottomMarginMobile,
                  mobileLeft: blockLeftMarginMobile,
                  mobileRight: blockRightMarginMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <RangeControl
                label={__("Z-Index", "responsive-block-editor-addons")}
                value={socialZindex}
                min={-10}
                max={500}
                allowReset={true}
                onChange={(value) => setAttributes({ socialZindex: value })}
              />
              <PanelBody
                title={__("Border Settings", "responsive-block-editor-addons")}
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
                  label={__("Box Shadow")}
                  boxShadowColor={{ value: boxShadowColor, label: __("Color") }}
                  boxShadowHOffset={{
                    value: boxShadowHOffset,
                    label: __("Horizontal"),
                  }}
                  boxShadowVOffset={{
                    value: boxShadowVOffset,
                    label: __("Vertical"),
                  }}
                  boxShadowBlur={{ value: boxShadowBlur, label: __("Blur") }}
                  boxShadowSpread={{
                    value: boxShadowSpread,
                    label: __("Spread"),
                  }}
                  boxShadowPosition={{
                    value: boxShadowPosition,
                    label: __("Position"),
                  }}
                />
              </PanelBody>
              <PanelBody
                title={__("Background", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <Fragment>
                  <ColorBackgroundControl {...this.props} />
                </Fragment>
                <RangeControl
                  label={__("Opacity", "responsive-block-editor-addons")}
                  value={opacity}
                  onChange={(value) =>
                    setAttributes({
                      opacity: value !== undefined ? value : 100,
                    })
                  }
                  min={0}
                  max={100}
                  allowReset
                />
              </PanelBody>
              <br></br>
            </InspectorAdvancedControls>
          </InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
