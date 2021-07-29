/**
 * Inspector Controls
 */
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import ResponsiveBlocksIcon from "../../../../ResponsiveBlocksIcon.json";
import renderSVG from "../../../../renderIcon";
import BoxShadowControl from "../../../../utils/components/box-shadow";
import fontOptions from "../../../../utils/googlefonts";
import { loadGoogleFont } from "../../../../utils/font";
import ColorBackgroundControl from "../../../../settings-components/Block Background Settings/Color Background Settings";
import ButtonSettingsControl from "../../../../settings-components/Button Settings";
import TypographyHelperControl from "../../../../settings-components/Typography Settings";
import InspectorTab from "../../../../components/InspectorTab";
import InspectorTabs from "../../../../components/InspectorTabs";
import ButtonSpacingControl from "../../../../settings-components/Button Settings/Spacing Settings";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  AlignmentToolbar,
  BlockControls,
  InnerBlocks,
  ColorPalette,
} = wp.editor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  BaseControl,
  TabPanel,
  ToggleControl,
  Dashicon,
  ButtonGroup,
  Button,
} = wp.components;

let svg_icons = Object.keys(ResponsiveBlocksIcon);

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
        buttonAlignment,
        label,
        link,
        iconsize,
        ctaHpadding,
        ctaHpaddingTablet,
        ctaHpaddingMobile,
        ctaVpadding,
        ctaVpaddingTablet,
        ctaVpaddingMobile,
        vMargin,
        vMarginTablet,
        vMarginMobile,
        hMargin,
        hMarginTablet,
        hMarginMobile,
        ctaBorderStyle,
        ctaBorderWidth,
        ctaBorderRadius,
        ctaBorderColor,
        ctaHoverBorderColor,
        ctaColor,
        ctaHoverColor,
        ctaBackColor,
        sizeType,
        sizeMobile,
        sizeTablet,
        lineHeight,
        lineHeightType,
        lineHeightMobile,
        lineHeightTablet,
        buttonTarget,
        buttonbackgroundColor1,
        buttonbackgroundColor2,
        buttoncolorLocation1,
        buttoncolorLocation2,
        buttongradientDirection,
        buttonbackgroundType,
        ctaTextOpacity,
        icon,
        iconPosition,
        buttonLineHeight,
        buttonFontFamily,
        buttonFontSize,
        buttonFontSizeTablet,
        buttonFontSizeMobile,
        buttonFontWeight,
        boxShadowColor,
        boxShadowHOffset,
        boxShadowVOffset,
        boxShadowBlur,
        boxShadowSpread,
        boxShadowPosition,
        hoverEffect,
        icon_color,
        icon_hover_color,
        ctaHoverBackColor,
        iconSpace,
        inheritFromTheme,
      },
      setAttributes,
    } = this.props;

    // Background Type Options
    const buttonbackgroundTypeOptions = [
      { value: "none", label: __("None", "responsive-block-editor-addons") },
      { value: "color", label: __("Color", "responsive-block-editor-addons") },
      {
        value: "gradient",
        label: __("Gradient", "responsive-block-editor-addons"),
      },
    ];

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

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={'content'}>
            <PanelBody
              title={__("Button Settings")}
              initialOpen={true}
              className="responsive-block-editor-addons__url-panel-body"
            >
              <ToggleControl
                label={__("Inherit from Theme")}
                checked={inheritFromTheme}
                onChange={(value) =>
                  setAttributes({ inheritFromTheme: !inheritFromTheme })
                }
              />
              <SelectControl
                label={__("Hover Effect", "responsive-block-editor-addons")}
                value={hoverEffect}
                onChange={(value) => setAttributes({ hoverEffect: value })}
                options={[
                  {
                    value: "",
                    label: __("None", "responsive-block-editor-addons"),
                  },
                  {
                    value: "lift",
                    label: __("Lift", "responsive-block-editor-addons"),
                  },
                  {
                    value: "scale",
                    label: __("Scale", "responsive-block-editor-addons"),
                  },
                  {
                    value: "lift-scale",
                    label: __("Lift & Scale", "responsive-block-editor-addons"),
                  },
                  {
                    value: "scale-more",
                    label: __("Scale More", "responsive-block-editor-addons"),
                  },
                  {
                    value: "lift-scale-more",
                    label: __(
                      "Lift & Scale More",
                      "responsive-block-editor-addons"
                    ),
                  },
                ]}
              />
              {!inheritFromTheme && (
                <ButtonSettingsControl
                    {...this.props}
                    showMarginControls = { true }
                    showBackColorOpacity = { false }
                    showGradientHover = {false}
                    showTextOpacity = {true}
                    showButtonSpacing={false}
                />
              )}
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={'style'}>
            <ButtonSpacingControl 
              {...this.props}
              showMarginControls={true}
            />
            <PanelBody title={__("Icon Settings")} initialOpen={false}>
              <Fragment>
                <p className="components-base-control__label">{__("Icon")}</p>
                <FontIconPicker
                  icons={svg_icons}
                  renderFunc={renderSVG}
                  theme="default"
                  value={icon}
                  onChange={(value) => setAttributes({ icon: value })}
                  isMulti={false}
                  noSelectedPlaceholder={__("Select Icon")}
                />
                <SelectControl
                  label={__("Icon Position")}
                  value={iconPosition}
                  onChange={(value) => setAttributes({ iconPosition: value })}
                  options={[
                    { value: "before", label: __("Before Text") },
                    { value: "after", label: __("After Text") },
                  ]}
                />
                <RangeControl
                  label={__("Icon Size", "responsive-block-editor-addons")}
                  value={iconsize}
                  onChange={(value) =>
                    setAttributes({ iconsize: value !== undefined ? value : 16 })
                  }
                  min={5}
                  max={100}
                  allowReset
                />
                <RangeControl
                  label={__("Icon Spacing", "responsive-block-editor-addons")}
                  value={iconSpace}
                  onChange={(value) =>
                    setAttributes({ iconSpace: value !== undefined ? value : 8 })
                  }
                  min={0}
                  max={50}
                  allowReset
                />
                <p className="responsive-block-editor-addons-setting-label">
                  {__("Icon Color", "responsive-block-editor-addons")}
                  <span className="components-base-control__label">
                    <span
                      className="component-color-indicator"
                      style={{ backgroundColor: icon_color }}
                    ></span>
                  </span>
                </p>
                <ColorPalette
                  value={icon_color}
                  onChange={(value) => setAttributes({ icon_color: value })}
                  allowReset
                />
                <p className="responsive-block-editor-addons-setting-label">
                  {__("Icon Hover Color", "responsive-block-editor-addons")}
                  <span className="components-base-control__label">
                    <span
                      className="component-color-indicator"
                      style={{ backgroundColor: icon_hover_color }}
                    ></span>
                  </span>
                </p>
                <ColorPalette
                  value={icon_hover_color}
                  onChange={(value) => setAttributes({ icon_hover_color: value })}
                  allowReset
                />
              </Fragment>
            </PanelBody>
            {!inheritFromTheme && (
              <Fragment>
                <TypographyHelperControl
                  title={__("Button Typography", "responsive-block-editor-addons")} 
                  attrNameTemplate="button%s"
                  values = {{
                    family: buttonFontFamily, 
                    size: buttonFontSize, 
                    sizeMobile: buttonFontSizeMobile, 
                    sizeTablet: buttonFontSizeTablet, 
                    weight: buttonFontWeight, 
                    height: buttonLineHeight,
                  }}
                  showLetterSpacing = { false }
                  showTextTransform = { false }
                  setAttributes={ setAttributes }
                  {...this.props}            
                />
                <PanelBody
                  title={__("Box Shadow", "responsive-block-editor-addons")}
                  initialOpen={false}
                >
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
              </Fragment>
            )}
          </InspectorTab>
          <InspectorTab key={'advance'}></InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
