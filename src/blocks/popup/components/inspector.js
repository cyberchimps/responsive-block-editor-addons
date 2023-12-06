/**
 * Inspector Controls
 */
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import { __experimentalAlignmentMatrixControl as AlignmentMatrixControl } from '@wordpress/components';
import { __experimentalText as Text } from '@wordpress/components';

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";

// Import block components
const { InspectorControls } = wp.blockEditor

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  ToggleControl,
  TabPanel,
  Dashicon,
  ColorPalette
} = wp.components;

const colors = [
  { name: 'black', color: '#000' },
  { name: 'red', color: '#f00' },
  { name: 'white', color: '#fff' },
  { name: 'blue', color: '#00f' },
  { name: 'yellow', color: '#ffff00' },
  { name: 'orange', color: '#ffa500' },
];

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
        isPopupVariantSelected,
        popupContainerWidth,
        popupContainerWidthTablet,
        popupContainerWidthMobile,
        popupHeightType,
        popupHeightCustom,
        popupHeightCustomTablet,
        popupHeightCustomMobile,
        popupPaddingTop,
        popupPaddingTopTablet,
        popupPaddingTopMobile,
        popupPaddingBottom,
        popupPaddingBottomTablet,
        popupPaddingBottomMobile,
        popupPaddingLeft,
        popupPaddingLeftTablet,
        popupPaddingLeftMobile,
        popupPaddingRight,
        popupPaddingRightTablet,
        popupPaddingRightMobile,
        popupScreenType,
        popupScreenTypeMobile,
        popupScreenTypeTablet,
        popupTrigger,
        popupTriggerDelay,
        popupToggleCloseBtn,
        popupToggleCloseBtnPosition,
        popupBgColor,
        popupCloseBtnColor,
        popupOverlayColor,
        popupOverlayOpacity,
        popupBlockBorderRadius,
        popupBlockBorderStyle,
        popupBlockBorderWidth,
        popupBlockBorderColor,
      },
      setAttributes,
    } = this.props;

    return (
      <InspectorControls key="inspector">
        {isPopupVariantSelected &&
          <InspectorTabs>
            <InspectorTab key={"content"}>
              <PanelBody
                title={__("Container", "responsive-block-editor-addons")}
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
                          label={__("Popup Width (Mobile)", "responsive-block-editor-addons")}
                          value={popupContainerWidthMobile}
                          onChange={(value) =>
                            setAttributes({
                              popupContainerWidthMobile: value !== undefined ? value : 600,
                            })
                          }
                          min={0}
                          max={1500}
                          beforeIcon=""
                          allowReset
                          initialPosition={600}
                        />
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <RangeControl
                          label={__("Popup Width (Tablet)", "responsive-block-editor-addons")}
                          value={popupContainerWidthTablet}
                          onChange={(value) =>
                            setAttributes({
                              popupContainerWidthTablet: value !== undefined ? value : 600,
                            })
                          }
                          min={0}
                          max={1500}
                          beforeIcon=""
                          allowReset
                          initialPosition={600}
                        />
                      );
                    } else {
                      tabout = (
                        <RangeControl
                          label={__("Popup Width", "responsive-block-editor-addons")}
                          value={popupContainerWidth}
                          onChange={(value) =>
                            setAttributes({
                              popupContainerWidth: value !== undefined ? value : 600,
                            })
                          }
                          min={0}
                          max={1500}
                          beforeIcon=""
                          allowReset
                          initialPosition={600}
                        />
                      );
                    }

                    return <div>{tabout}</div>;
                  }}
                </TabPanel>

                <SelectControl
                  label={__("Popup Height", "responsive-block-editor-addons")}
                  value={popupHeightType}
                  onChange={(value) =>
                    this.props.setAttributes({
                      popupHeightType: value
                    })
                  }
                  options={[
                    { value: "auto", label: __("Auto", "responsive-block-editor-addons") },
                    { value: "custom", label: __("Custom", "responsive-block-editor-addons") },
                  ]}
                />

                {popupHeightType === 'custom' &&
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
                            label={__("Popup Height (Mobile)", "responsive-block-editor-addons")}
                            value={popupHeightCustomMobile}
                            onChange={(value) =>
                              setAttributes({
                                popupHeightCustomMobile: value !== undefined ? value : 600,
                              })
                            }
                            min={0}
                            max={1500}
                            beforeIcon=""
                            allowReset
                            initialPosition={600}
                          />
                        );
                      } else if ("tablet" === tab.name) {
                        tabout = (
                          <RangeControl
                            label={__("Popup Height (Tablet)", "responsive-block-editor-addons")}
                            value={popupHeightCustomTablet}
                            onChange={(value) =>
                              setAttributes({
                                popupHeightCustomTablet: value !== undefined ? value : 600,
                              })
                            }
                            min={0}
                            max={1500}
                            beforeIcon=""
                            allowReset
                            initialPosition={600}
                          />
                        );
                      } else {
                        tabout = (
                          <RangeControl
                            label={__("Popup Height", "responsive-block-editor-addons")}
                            value={popupHeightCustom}
                            onChange={(value) =>
                              setAttributes({
                                popupHeightCustom: value !== undefined ? value : 600,
                              })
                            }
                            min={0}
                            max={1500}
                            beforeIcon=""
                            allowReset
                            initialPosition={600}
                          />
                        );
                      }

                      return <div>{tabout}</div>;
                    }}
                  </TabPanel>
                }

                <ResponsiveSpacingControl
                  title={__("Padding Top", "responsive-block-editor-addons")}
                  attrNameTemplate="popupPaddingTop%s"
                  values={{
                    desktop: popupPaddingTop,
                    tablet: popupPaddingTopTablet,
                    mobile: popupPaddingTopMobile,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
                />

                <ResponsiveSpacingControl
                  title={__("Padding Bottom", "responsive-block-editor-addons")}
                  attrNameTemplate="popupPaddingBottom%s"
                  values={{
                    desktop: popupPaddingBottom,
                    tablet: popupPaddingBottomTablet,
                    mobile: popupPaddingBottomMobile,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
                />

                <ResponsiveSpacingControl
                  title={__("Padding Left", "responsive-block-editor-addons")}
                  attrNameTemplate="popupPaddingLeft%s"
                  values={{
                    desktop: popupPaddingLeft,
                    tablet: popupPaddingLeftTablet,
                    mobile: popupPaddingLeftMobile,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
                />

                <ResponsiveSpacingControl
                  title={__("Padding Right", "responsive-block-editor-addons")}
                  attrNameTemplate="popupPaddingRight%s"
                  values={{
                    desktop: popupPaddingRight,
                    tablet: popupPaddingRightTablet,
                    mobile: popupPaddingRightMobile,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
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
                        <>
                          <Text variant="title.small" as="h3">{__("Screen Type (Mobile)", "responsive-block-editor-addons")}</Text>
                          <AlignmentMatrixControl
                            value={popupScreenTypeMobile}
                            onChange={(value) => this.props.setAttributes({
                              popupScreenTypeMobile: value
                            })}
                          />
                        </>
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <>
                          <Text variant="title.small" as="h3">{__("Screen Type (Tablet)", "responsive-block-editor-addons")}</Text>
                          <AlignmentMatrixControl
                            value={popupScreenTypeTablet}
                            onChange={(value) => this.props.setAttributes({
                              popupScreenTypeTablet: value
                            })}
                          />
                        </>
                      );
                    } else {
                      tabout = (
                        <>
                          <Text variant="title.small" as="h3">{__("Screen Type", "responsive-block-editor-addons")}</Text>
                          <AlignmentMatrixControl
                            value={popupScreenType}
                            onChange={(value) => {
                              this.props.setAttributes({
                                popupScreenType: value
                              })
                            }}
                          />
                        </>
                      );
                    }

                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
              </PanelBody>
              <PanelBody
                title={__("Trigger Settings", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <SelectControl
                  label={__("Open Trigger", "responsive-block-editor-addons")}
                  value={popupTrigger}
                  onChange={(value) => setAttributes({ popupTrigger: value })}
                  options={[
                    { value: "click", label: __("On Click", "responsive-block-editor-addons") },
                    { value: "load", label: __("On Load", "responsive-block-editor-addons") },
                  ]}
                />

                {popupTrigger === 'load' &&
                  <RangeControl
                    label={__("Trigger Delay", "responsive-block-editor-addons")}
                    value={popupTriggerDelay}
                    onChange={(value) =>
                      setAttributes({
                        popupTriggerDelay: value !== undefined ? value : 1,
                      })
                    }
                    min={0}
                    max={100}
                    beforeIcon=""
                    allowReset
                    initialPosition={1}
                  />}
              </PanelBody>
              <PanelBody
                title={__("Close Button", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <ToggleControl
                  label={__("Show Close Button", "responsive-block-editor-addons")}
                  checked={popupToggleCloseBtn}
                  onChange={() =>
                    this.props.setAttributes({
                      popupToggleCloseBtn: !popupToggleCloseBtn,
                    })
                  }
                />
                {popupToggleCloseBtn &&
                  <SelectControl
                    label={__("Close Button Position", "responsive-block-editor-addons")}
                    value={popupToggleCloseBtnPosition}
                    onChange={(value) => setAttributes({ popupToggleCloseBtnPosition: value })}
                    options={[
                      { value: "top-right", label: __("Top Right", "responsive-block-editor-addons") },
                      { value: "top-left", label: __("Top Left", "responsive-block-editor-addons") },
                    ]}
                  />}
              </PanelBody>
            </InspectorTab>
            <InspectorTab key={"style"}>
              <PanelBody
                title={__("Color & Background", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <Text variant="title.small" as="h3">{__("Background Color", "responsive-block-editor-addons")}</Text>
                <ColorPalette
                  colors={colors}
                  value={popupBgColor}
                  onChange={(value) => setAttributes({ popupBgColor: value })}
                />

                <Text variant="title.small" as="h3">{__("Close Button Color", "responsive-block-editor-addons")}</Text>
                <ColorPalette
                  colors={colors}
                  value={popupCloseBtnColor}
                  onChange={(value) => setAttributes({ popupCloseBtnColor: value })}
                />

                <Text variant="title.small" as="h3">{__("Overlay Color", "responsive-block-editor-addons")}</Text>
                <ColorPalette
                  colors={colors}
                  value={popupOverlayColor}
                  onChange={(value) => setAttributes({ popupOverlayColor: value })}
                />

                <RangeControl
                  label={__("Overlay Opacity", "responsive-block-editor-addons")}
                  value={popupOverlayOpacity}
                  onChange={(value) =>
                    setAttributes({
                      popupOverlayOpacity: value !== undefined ? value : 95,
                    })
                  }
                  min={0}
                  max={100}
                  beforeIcon=""
                  allowReset
                  initialPosition={95}
                />

              </PanelBody>
              <PanelBody
                title={__("Border", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <BlockBorderHelperControl
                  attrNameTemplate="popupBlock%s"
                  values={{
                    radius: popupBlockBorderRadius,
                    style: popupBlockBorderStyle,
                    width: popupBlockBorderWidth,
                    color: popupBlockBorderColor,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
              </PanelBody>
            </InspectorTab>
            <InspectorTab key={"advance"}></InspectorTab>
          </InspectorTabs>
        }
      </InspectorControls>
    );
  }
}
