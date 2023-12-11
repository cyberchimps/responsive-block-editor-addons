/**
 * Inspector Controls
 */
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import { __experimentalAlignmentMatrixControl as AlignmentMatrixControl } from '@wordpress/components';
import renderSVG from "../../../renderIcon";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import { __experimentalText as Text } from '@wordpress/components';
import presets from "./button-presets";

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";

// Import block components
const { InspectorControls, AlignmentToolbar, MediaUpload } = wp.blockEditor

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  ToggleControl,
  TabPanel,
  Dashicon,
  ColorPalette,
  Button,
  ButtonGroup,
  GradientPicker,
  TextControl,
} = wp.components;

const colors = [
  { name: 'black', color: '#000' },
  { name: 'red', color: '#f00' },
  { name: 'white', color: '#fff' },
  { name: 'blue', color: '#00f' },
  { name: 'yellow', color: '#ffff00' },
  { name: 'orange', color: '#ffa500' },
];

let svg_icons = Object.keys(ResponsiveBlocksIcon);

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.onSelectImageTrigger = this.onSelectImageTrigger.bind(this);
  }

  onSelectImageTrigger(media) {
    const { setAttributes } = this.props;
    const { popupImageTrigger } = this.props.attributes;

    if (!media || !media.url) {
      setAttributes({ popupImageTrigger: null });
      return;
    }

    if (!media.type || "image" != media.type) {
      return;
    }

    setAttributes({ popupImageTrigger: media.url });
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
        popupBgType,
        popupGradient,
        popupCloseBtnColor,
        popupOverlayColor,
        popupOverlayOpacity,
        popupBlockBorderRadius,
        popupBlockBorderStyle,
        popupBlockBorderWidth,
        popupBlockBorderColor,
        popupTriggerType,
        popupTriggerAlign,
        popupTriggerAlignTablet,
        popupTriggerAlignMobile,
        popupButtonPreset,
        popupIconTrigger,
        popupImageTrigger,
        popupTextTrigger,
        popupButtonHoverState ,
        popupButtonColor,
        popupButtonBGColor,
        popupButtonHoverColor,
        popupButtonBGHoverColor,
      },
      setAttributes,
    } = this.props;

    const buttonPresets = [
      { label: presets.preset1, title: "Preset 1", value: "preset1" },
      { label: presets.preset2, title: "Preset 2", value: "preset2" },
      { label: presets.preset3, title: "Preset 3", value: "preset3" },
      { label: presets.preset4, title: "Preset 4", value: "preset4" },
      { label: presets.preset5, title: "Preset 5", value: "preset5" },
      { label: presets.preset6, title: "Preset 6", value: "preset6" },
    ]

    const renderButtonPresets = buttonPresets.map((preset) => {
      return {
        label: (
          <div className="responsive-blocks-editor-addons-design-panel-item">
            <div className="responsive-blocks-editor-addons-design-panel-item__svg">
              {preset.label}
            </div>
            <span className="design-label">{preset.title}</span>
          </div>
        ),
        value: preset.value,
      };
    })

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
                                popupHeightCustomMobile: value !== undefined ? value : 500,
                              })
                            }
                            min={0}
                            max={1500}
                            beforeIcon=""
                            allowReset
                            initialPosition={500}
                          />
                        );
                      } else if ("tablet" === tab.name) {
                        tabout = (
                          <RangeControl
                            label={__("Popup Height (Tablet)", "responsive-block-editor-addons")}
                            value={popupHeightCustomTablet}
                            onChange={(value) =>
                              setAttributes({
                                popupHeightCustomTablet: value !== undefined ? value : 500,
                              })
                            }
                            min={0}
                            max={1500}
                            beforeIcon=""
                            allowReset
                            initialPosition={500}
                          />
                        );
                      } else {
                        tabout = (
                          <RangeControl
                            label={__("Popup Height", "responsive-block-editor-addons")}
                            value={popupHeightCustom}
                            onChange={(value) =>
                              setAttributes({
                                popupHeightCustom: value !== undefined ? value : 500,
                              })
                            }
                            min={0}
                            max={1500}
                            beforeIcon=""
                            allowReset
                            initialPosition={500}
                          />
                        );
                      }

                      return <div>{tabout}</div>;
                    }}
                  </TabPanel>
                }

                <hr className="responsive-block-editor-addons-editor__separator" />
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
                          <div className="responsive-block-editor-addons-alignment-matrix-control">
                            <AlignmentMatrixControl
                              value={popupScreenTypeMobile}
                              onChange={(value) => this.props.setAttributes({
                                popupScreenTypeMobile: value
                              })}
                            />
                          </div>
                        </>
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <>
                          <Text variant="title.small" as="h3">{__("Screen Type (Tablet)", "responsive-block-editor-addons")}</Text>
                          <div className="responsive-block-editor-addons-alignment-matrix-control">
                            <AlignmentMatrixControl
                              value={popupScreenTypeTablet}
                              onChange={(value) => this.props.setAttributes({
                                popupScreenTypeTablet: value
                              })}
                            />
                          </div>
                        </>
                      );
                    } else {
                      tabout = (
                        <>
                          <Text variant="title.small" as="h3">{__("Screen Type", "responsive-block-editor-addons")}</Text>
                          <div className="responsive-block-editor-addons-alignment-matrix-control">
                            <AlignmentMatrixControl
                              value={popupScreenType}
                              onChange={(value) => {
                                console.log(value)
                                this.props.setAttributes({
                                  popupScreenType: value
                                })
                              }}
                            />
                          </div>
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

                {popupTrigger === 'click' && <>
                  <SelectControl
                    label={__("Popup Trigger Type", "responsive-block-editor-addons")}
                    value={popupTriggerType}
                    onChange={(value) => setAttributes({ popupTriggerType: value })}
                    options={[
                      { value: "button", label: __("Button", "responsive-block-editor-addons") },
                      { value: "text", label: __("Text", "responsive-block-editor-addons") },
                      { value: "icon", label: __("Icon", "responsive-block-editor-addons") },
                      { value: "image", label: __("Image", "responsive-block-editor-addons") },
                    ]}
                  />

                  {popupTriggerType === 'button' && <>
                    <div className="responsive-block-editor-addons-popup-div-flex">
                      <Text variant="title.small" as="h3">{__("Select Preset", "responsive-block-editor-addons")}</Text>
                      <Button size="small"><Dashicon icon="image-rotate" /></Button>
                    </div>
                    <div className="responsive-block-editor-addons-popup-button-preset-wrap">
                      <div className="responsive-block-editor-addons-popup-button-preset">
                        <button onClick={() => setAttributes({ popupButtonPreset: 'preset1' })}>{presets.preset1}</button>
                      </div>
                      <div className="responsive-block-editor-addons-popup-button-preset">
                        <button onClick={() => setAttributes({ popupButtonPreset: 'preset2' })}>{presets.preset2}</button>
                      </div>
                      <div className="responsive-block-editor-addons-popup-button-preset">
                        <button onClick={() => setAttributes({ popupButtonPreset: 'preset3' })}>{presets.preset3}</button>
                      </div>
                      <div className="responsive-block-editor-addons-popup-button-preset">
                        <button onClick={() => setAttributes({ popupButtonPreset: 'preset4' })}>{presets.preset4}</button>
                      </div>
                      <div className="responsive-block-editor-addons-popup-button-preset">
                        <button onClick={() => setAttributes({ popupButtonPreset: 'preset5' })}>{presets.preset5}</button>
                      </div>
                      <div className="responsive-block-editor-addons-popup-button-preset">
                        <button onClick={() => setAttributes({ popupButtonPreset: 'preset6' })}>{presets.preset6}</button>
                      </div>
                    </div>
                  </>
                  }

                  {popupTriggerType === 'icon' &&
                    <FontIconPicker
                      icons={svg_icons}
                      renderFunc={renderSVG}
                      theme="default"
                      value={popupIconTrigger}
                      onChange={(value) => setAttributes({ popupIconTrigger: value })}
                      isMulti={false}
                      noSelectedPlaceholder={__("Select Icon", "responsive-block-editor-addons")}
                    />}

                  {popupTriggerType === 'image' && <>
                    <Text variant="title.small" as="h3">{__("Select Image", "responsive-block-editor-addons")}</Text>
                    <MediaUpload
                      title={__(
                        "Select Image",
                        "responsive-block-editor-addons"
                      )}
                      onSelect={this.onSelectImageTrigger}
                      allowedTypes={["image"]}
                      value={popupImageTrigger}
                      render={({ open }) => (
                        <Button variant="secondary" onClick={open}>
                          {!popupImageTrigger
                            ? __(
                              "Select Image",
                              "responsive-block-editor-addons"
                            )
                            : __(
                              "Replace image",
                              "responsive-block-editor-addons"
                            )}
                        </Button>
                      )}
                    /></>}

                  {popupTriggerType === 'image' && popupImageTrigger && (
                    <Button
                      className="rbea-rm-btn"
                      onClick={() => setAttributes({ popupImageTrigger: null })}
                      isLink
                      isDestructive
                    >
                      {__("Remove Image", "responsive-block-editor-addons")}
                    </Button>
                  )}

                  {popupTriggerType === 'text' &&
                    <TextControl
                      label={__("Enter Text", "responsive-block-editor-addons")}
                      value={popupTextTrigger}
                      onChange={(value) => setAttributes({ popupTextTrigger: value })}
                    />}

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
                            <p>{__("Alignment (Mobile)", "responsive-block-editor-addons")}</p>
                            <AlignmentToolbar
                              value={popupTriggerAlignMobile}
                              onChange={(value) =>
                                setAttributes({
                                  popupTriggerAlignMobile: value,
                                })
                              }
                              controls={["left", "center", "right"]}
                              isCollapsed={false}
                            />
                          </>
                        );
                      } else if ("tablet" === tab.name) {
                        tabout = (
                          <>
                            <p>{__("Alignment (Tablet)", "responsive-block-editor-addons")}</p>
                            <AlignmentToolbar
                              value={popupTriggerAlignTablet}
                              onChange={(value) =>
                                setAttributes({
                                  popupTriggerAlignTablet: value,
                                })
                              }
                              controls={["left", "center", "right"]}
                              isCollapsed={false}
                            />
                          </>
                        );
                      } else {
                        tabout = (
                          <>
                            <p>
                              {__("Alignment", "responsive-block-editor-addons")}
                            </p>
                            <AlignmentToolbar
                              value={popupTriggerAlign}
                              onChange={(value) =>
                                setAttributes({
                                  popupTriggerAlign: value,
                                })
                              }
                              controls={["left", "center", "right"]}
                              isCollapsed={false}
                            />
                          </>
                        );
                      }

                      return <div>{tabout}</div>;
                    }}
                  </TabPanel>
                </>
                }

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
                      { value: "flex-end", label: __("Top Right", "responsive-block-editor-addons") },
                      { value: "flex-start", label: __("Top Left", "responsive-block-editor-addons") },
                    ]}
                  />}
              </PanelBody>
            </InspectorTab>
            <InspectorTab key={"style"}>
              {popupTrigger === 'click' &&
                <PanelBody
                  title={__("Trigger", "responsive-block-editor-addons")}
                  initialOpen={false}
                >
                  {popupTriggerType === 'button' && <>
                    <div className="responsive-block-editor-addons-popup-button-group-tab">
                      <ButtonGroup>
                        <Button onClick={() => setAttributes({ popupButtonHoverState: false })} variant={!popupButtonHoverState ? 'primary' : 'secondary'}>{__("Normal", "responsive-block-editor-addons")}</Button>
                        <Button onClick={() => setAttributes({ popupButtonHoverState: true })} variant={popupButtonHoverState ? 'primary' : 'secondary'}>{__("Hover", "responsive-block-editor-addons")}</Button>
                      </ButtonGroup>
                    </div>

                    {!popupButtonHoverState && <>

                      <Text style={{ marginTop: '16px' }} variant="title.small" as="h3">{__("Button Color", "responsive-block-editor-addons")}</Text>
                      <ColorPalette
                        colors={colors}
                        value={popupButtonHoverColor}
                        onChange={(value) => setAttributes({ popupButtonHoverColor: value })}
                      />

                      <Text style={{ marginTop: '16px' }} variant="title.small" as="h3">{__("Button Background Color", "responsive-block-editor-addons")}</Text>
                      <ColorPalette
                        colors={colors}
                        value={popupButtonBGHoverColor}
                        onChange={(value) => setAttributes({ popupButtonBGHoverColor: value })}
                      />
                      
                    </>}

                    {popupButtonHoverState && <>

                      <Text style={{ marginTop: '16px' }} variant="title.small" as="h3">{__("Button Hover Color", "responsive-block-editor-addons")}</Text>
                      <ColorPalette
                        colors={colors}
                        value={popupButtonColor}
                        onChange={(value) => setAttributes({ popupButtonColor: value })}
                      />

                      <Text style={{ marginTop: '16px' }} variant="title.small" as="h3">{__("Button Background Hover Color", "responsive-block-editor-addons")}</Text>
                      <ColorPalette
                        colors={colors}
                        value={popupButtonBGColor}
                        onChange={(value) => setAttributes({ popupButtonBGColor: value })}
                      />
                      
                    </>}

                  </>}
                </PanelBody>}
              <PanelBody
                title={__("Color & Background", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <Text variant="title.small" as="h3">{__("Container Background", "responsive-block-editor-addons")}</Text>
                <div className="responsive-block-editor-addons-popup-button-group-tab">
                  <ButtonGroup>
                    <Button onClick={() => setAttributes({ popupBgType: 'color' })} variant={popupBgType === 'color' ? 'primary' : 'secondary'}>{__("Color", "responsive-block-editor-addons")}</Button>
                    <Button onClick={() => setAttributes({ popupBgType: 'gradient' })} variant={popupBgType !== 'color' ? 'primary' : 'secondary'}>{__("Gradient", "responsive-block-editor-addons")}</Button>
                  </ButtonGroup>
                </div>

                {popupBgType === 'color' && <>
                  <Text style={{ marginTop: '16px' }} variant="title.small" as="h3">{__("Container Background Color", "responsive-block-editor-addons")}</Text>
                  <ColorPalette
                    colors={colors}
                    value={popupBgColor}
                    onChange={(value) => setAttributes({ popupBgColor: value })}
                  /> </>
                }

                {popupBgType !== 'color' && <>
                  <Text style={{ marginTop: '16px' }} variant="title.small" as="h3">{__("Container Gradient", "responsive-block-editor-addons")}</Text>
                  <GradientPicker
                    __nextHasNoMargin
                    value={popupGradient}
                    onChange={(value) => { console.log(value); setAttributes({ popupGradient: value }) }}
                    gradients={[
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
                    ]}
                  /> </>
                }

                {popupToggleCloseBtn && <>
                  <Text variant="title.small" as="h3">{__("Close Button Color", "responsive-block-editor-addons")}</Text>
                  <ColorPalette
                    colors={colors}
                    value={popupCloseBtnColor}
                    onChange={(value) => setAttributes({ popupCloseBtnColor: value })}
                  /> </>}

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
                <div className="responsive-block-editor-addons-popup-border-helper">
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
                </div>
              </PanelBody>
            </InspectorTab>
            <InspectorTab key={"advance"}></InspectorTab>
          </InspectorTabs>
        }
      </InspectorControls>
    );
  }
}
