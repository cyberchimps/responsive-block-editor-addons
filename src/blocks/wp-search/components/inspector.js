/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import ResponsivePaddingControl from "../../../settings-components/ResponsiveSpacingSettings/ResponsivePaddingControl";
import BoxShadowControl from "../../../utils/components/box-shadow";

import InspectorTab from "../../../components/InspectorTab"
import InspectorTabs from "../../../components/InspectorTabs"

// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  ColorPalette,
  AlignmentToolbar,
} = wp.blockEditor;

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
	TextControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
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

    // Setup the attributes
    const {
      attributes: {
        //General
        layout,
        placeholder,
        inputWidth,
        inputWidthType,
        //Button
        buttonType,
        buttonText,
        buttonWidth,
        buttonBackgroundColor,
        buttonBackgroundHoverColor,
        buttonTextColor,
        buttonTextHoverColor,
        //Button Text Typography
        buttonFontFamily,
        buttonFontSize,
        buttonFontSizeMobile,
        buttonFontSizeTablet,
        buttonFontWeight,
        buttonLineHeight,
        //Input Box
        inputTextColor,
        inputBackgroundColor,
        //Border
        blockBorderRadius,
        blockBorderColor,
        blockBorderStyle,
        blockBorderWidth,
        //Padding
        inputTopPadding,
        inputRightPadding,
        inputBottomPadding,
        inputLeftPadding,
        inputTopPaddingMobile,
        inputRightPaddingMobile,
        inputBottomPaddingMobile,
        inputLeftPaddingMobile,
        inputTopPaddingTablet,
        inputRightPaddingTablet,
        inputBottomPaddingTablet,
        inputLeftPaddingTablet,
        //Input Typography
        inputFontFamily,
        inputFontSize,
        inputFontSizeMobile,
        inputFontSizeTablet,
        inputFontWeight,
        inputLineHeight,
        //Box Shadow Control
        boxShadowColor,
        boxShadowHOffset,
        boxShadowVOffset,
        boxShadowBlur,
        boxShadowSpread,
        boxShadowPosition,
        //Icon (Minimal Layout)
        iconSize,
        iconColor,
        iconHoverColor,

        hideWidget,
        hideWidgetTablet,
        hideWidgetMobile,

        //Z Index
        z_index,
        z_indexMobile,
        z_indexTablet,
      },
      setAttributes,
    } = this.props;

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={'content'}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={true}
            >
              <SelectControl
                label={__("Layout", "responsive-block-editor-addons")}
                value={layout}
                options={[
                  { value: "classic", label: __("Classic", "responsive-block-editor-addons") },
                  { value: "minimal", label: __("Minimal", "responsive-block-editor-addons") },
                ]}
                onChange={(value) => setAttributes({layout: value})}
              />
              <TextControl
								label={__("Placeholder", "responsive-block-editor-addons")}
								value={placeholder}
								onChange={(value) => setAttributes({placeholder: value})}
							/>
              <ButtonGroup
                className="responsive-size-type-field"
                aria-label={__("Size Type", "responsive-block-editor-addons")}
              >
                <Button
                  key={"px"}
                  className="responsive-size-btn"
                  isSmall
                  isPrimary={inputWidthType === "px"}
                  aria-pressed={inputWidthType === "px"}
                  min={0}
                  max={500}
                  onClick={() => setAttributes({ inputWidthType: "px" })}
                >
                  {"px"}
                </Button>
                <Button
                  key={"%"}
                  className="responsive-size-btn"
                  isSmall
                  isPrimary={inputWidthType === "%"}
                  aria-pressed={inputWidthType === "%"}
                  min={0}
                  max={100}
                  onClick={() => setAttributes({ inputWidthType: "%", inputWidth: 100 })}
                >
                  {"%"}
                </Button>
              </ButtonGroup>
              <RangeControl
                label={__("Input Width", "responsive-block-editor-addons")}
                value={inputWidth}
                min={0}
                max={"%" == inputWidthType ? 100 : 500}
                onChange={(value) =>
                  setAttributes({ inputWidth: value })
                }
                allowReset
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={'style'}>
              <PanelBody
                title={__("Input Box", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <p className="responsive-block-editor-addons-setting-label">
                  {__("Text Color", "responsive-block-editor-addons")}
                  <span className="components-base-control__label">
                    <span
                      className="component-color-indicator"
                      style={{ backgroundColor: inputTextColor }}
                    ></span>
                  </span>
                </p>
                <ColorPalette
                  value={inputTextColor}
                  onChange={(value) => setAttributes({ inputTextColor: value })}
                  allowReset
                />
                <p className="responsive-block-editor-addons-setting-label">
                  {__("Background Color", "responsive-block-editor-addons")}
                  <span className="components-base-control__label">
                    <span
                      className="component-color-indicator"
                      style={{ backgroundColor: inputBackgroundColor }}
                    ></span>
                  </span>
                </p>
                <ColorPalette
                  value={inputBackgroundColor}
                  onChange={(value) => setAttributes({ inputBackgroundColor: value })}
                  allowReset
                />
                <PanelBody
                  title={__("Border", "responsive-block-editor-addons")}
                  initialOpen={false}
                >
                  <BlockBorderHelperControl
                    attrNameTemplate="block%s"
                    values={{ radius: blockBorderRadius, style: blockBorderStyle, width: blockBorderWidth, color: blockBorderColor }}
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
                </PanelBody>
                <PanelBody
                  title={__("Padding", "responsive-block-editor-addons")}
                  initialOpen={false}
                >
                  <ResponsivePaddingControl
                    attrNameTemplate="input%s"
                    values = {{
                      desktopTop:inputTopPadding,
                      desktopBottom:inputBottomPadding,
                      desktopLeft:inputLeftPadding,
                      desktopRight:inputRightPadding,

                      tabletTop:inputTopPaddingTablet,
                      tabletBottom:inputBottomPaddingTablet,
                      tabletLeft:inputLeftPaddingTablet,
                      tabletRight:inputRightPaddingTablet,

                      mobileTop:inputTopPaddingMobile,
                      mobileBottom:inputBottomPaddingMobile,
                      mobileLeft:inputLeftPaddingMobile,
                      mobileRight:inputRightPaddingMobile,
                    }}
                    setAttributes={ setAttributes }
                    {...this.props}
                  />
                </PanelBody>
                <TypographyHelperControl
                  title={__("Input Typography", "responsive-block-editor-addons")}
                  attrNameTemplate="input%s"
                  values = {{family: inputFontFamily, size: inputFontSize, sizeMobile: inputFontSizeMobile, sizeTablet: inputFontSizeTablet, weight: inputFontWeight, height: inputLineHeight}}
                  showLetterSpacing = { false }
                  showTextTransform = { false }
                  setAttributes={ setAttributes }
                  {...this.props}
                />
              </PanelBody>
              {
                "minimal" === layout && (
                  <PanelBody
                  title={__("Icon", "responsive-block-editor-addons")}
                  initialOpen={false}
                >
                  <RangeControl
                    label={__("Icon size", "responsive-block-editor-addons")}
                    value={iconSize}
                    onChange={(value) => setAttributes({iconSize: value})}
                    min={1}
                    max={500}
                  />
                  <p className="responsive-block-editor-addons-setting-label">
                    {__("Color", "responsive-block-editor-addons")}
                    <span className="components-base-control__label">
                      <span
                        className="component-color-indicator"
                        style={{ iconColor: inputTextColor }}
                      ></span>
                    </span>
                  </p>
                  <ColorPalette
                    value={iconColor}
                    onChange={(value) => setAttributes({ iconColor: value })}
                    allowReset
                  />
                </PanelBody>
                )
              }
              {
                "classic" === layout && (
                    <Fragment>
                      <PanelBody
                        title={__("Button", "responsive-block-editor-addons")}
                        initialOpen={false}
                      >
                        <SelectControl
                          label={__("Type", "responsive-block-editor-addons")}
                          value={buttonType}
                          options={[
                            {value: "button", label: __("Button", "responsive-block-editor-addons")},
                            {value: "text", label: __("Text", "responsive-block-editor-addons")}
                          ]}
                          onChange={(value) => setAttributes({buttonType: value})}
                        />
                        {
                          "text" === buttonType && (
                            <Fragment>
                              <TextControl
                                label={__("Text", "responsive-block-editor-addons")}
                                value={buttonText}
                                onChange={(value) => setAttributes({buttonText: value})}
                              />
                              <TypographyHelperControl
                                title={__("Typography", "responsive-block-editor-addons")}
                                attrNameTemplate="button%s"
                                values = {{family: buttonFontFamily, size: buttonFontSize, sizeMobile: buttonFontSizeMobile, sizeTablet: buttonFontSizeTablet, weight: buttonFontWeight, height: buttonLineHeight}}
                                showLetterSpacing = { false }
                                showTextTransform = { false }
                                setAttributes={ setAttributes }
                                {...this.props}
                              />
                            </Fragment>
                          )
                        }
                        <RangeControl
                          label={__("Width", "responsive-block-editor-addons")}
                          value={buttonWidth}
                          onChange={(value) => setAttributes({buttonWidth: value})}
                          min={0}
                          max={500}
                        />
                        <p className="responsive-block-editor-addons-setting-label">
                          {__("Background Color", "responsive-block-editor-addons")}
                          <span className="components-base-control__label">
                            <span
                              className="component-color-indicator"
                              style={{ backgroundColor: buttonBackgroundColor }}
                            ></span>
                          </span>
                        </p>
                        <ColorPalette
                          value={buttonBackgroundColor}
                          onChange={(value) => setAttributes({ buttonBackgroundColor: value })}
                          allowReset
                        />
                        <p className="responsive-block-editor-addons-setting-label">
                          {__("Background Hover Color", "responsive-block-editor-addons")}
                          <span className="components-base-control__label">
                            <span
                              className="component-color-indicator"
                              style={{ backgroundColor: buttonBackgroundHoverColor }}
                            ></span>
                          </span>
                        </p>
                        <ColorPalette
                          value={buttonBackgroundHoverColor}
                          onChange={(value) => setAttributes({ buttonBackgroundHoverColor: value })}
                          allowReset
                        />
                        {
                          "text" === buttonType && (
                            <Fragment>
                              <p className="responsive-block-editor-addons-setting-label">
                                {__("Text Color", "responsive-block-editor-addons")}
                                <span className="components-base-control__label">
                                  <span
                                    className="component-color-indicator"
                                    style={{ backgroundColor: buttonTextColor }}
                                  ></span>
                                </span>
                              </p>
                              <ColorPalette
                                value={buttonTextColor}
                                onChange={(value) => setAttributes({ buttonTextColor: value })}
                                allowReset
                              />
                              <p className="responsive-block-editor-addons-setting-label">
                                {__("Text Hover Color", "responsive-block-editor-addons")}
                                <span className="components-base-control__label">
                                  <span
                                    className="component-color-indicator"
                                    style={{ backgroundColor: buttonTextHoverColor }}
                                  ></span>
                                </span>
                              </p>
                              <ColorPalette
                                value={buttonTextHoverColor}
                                onChange={(value) => setAttributes({ buttonTextHoverColor: value })}
                                allowReset
                              />
                            </Fragment>
                          )
                        }
                      </PanelBody>
                      {
                        "button" == buttonType && (
                          <PanelBody
                            title={__("Icon", "responsive-block-editor-addons")}
                            initialOpen={false}
                          >
                            <RangeControl
                              label={__("Icon Size", "responsive-block-editor-addons")}
                              value={iconSize}
                              onChange={(value) => setAttributes({iconSize: value})}
                              min={1}
                              max={500}
                            />
                            <p className="responsive-block-editor-addons-setting-label">
                              {__("Icon Color", "responsive-block-editor-addons")}
                              <span className="components-base-control__label">
                                <span
                                  className="component-color-indicator"
                                  style={{ backgroundColor: iconColor }}
                                ></span>
                              </span>
                            </p>
                            <ColorPalette
                              value={iconColor}
                              onChange={(value) => setAttributes({ iconColor: value })}
                              allowReset
                            />
                            <p className="responsive-block-editor-addons-setting-label">
                              {__("Icon Color Hover", "responsive-block-editor-addons")}
                              <span className="components-base-control__label">
                                <span
                                  className="component-color-indicator"
                                  style={{ backgroundColor: iconHoverColor }}
                                ></span>
                              </span>
                            </p>
                            <ColorPalette
                              value={iconHoverColor}
                              onChange={(value) => setAttributes({ iconHoverColor: value })}
                              allowReset
                            />
                          </PanelBody>
                        )
                      }
                    </Fragment>
                )
              }
          </InspectorTab>
          <InspectorTab key={'advance'}>
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
