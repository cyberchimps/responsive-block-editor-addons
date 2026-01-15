/**
 * Inspector Controls
 */
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import renderSVG from "../renderQuoteIcon";
import ResponsiveBlocksQuoteIcon from "../ResponsiveBlocksQuoteIcon.json";
import BoxShadowControl from "../../../utils/components/box-shadow";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import ColorBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import ImageBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ImageBackgroundSettings";
import GradientBackgroundControl from "../../../settings-components/BlockBackgroundSettings/GradientBackgroundSettings";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaMediaUploadControl from "../../../utils/components/rbea-media-upload-control";
import RbeaBackgroundTypeControl from "../../../utils/components/rbea-background-type-control";
import RbeaBlockBorderHelperControl from "../../../settings-components/RbeaBlockBorderSettings";
import RbeaSupportControl from "../../../utils/components/rbea-support-control";
import RbeaExtensions from "../../../extensions/RbeaExtensions";

let svg_icons = Object.keys(ResponsiveBlocksQuoteIcon);
// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  ColorPalette,
  MediaUpload,
  AlignmentToolbar
} = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  ToggleControl,
  BaseControl,
  Button,
  TabPanel,
  Dashicon,
  TextControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.onRemoveVideo = this.onRemoveVideo.bind(this);
    this.onRemoveImage = this.onRemoveImage.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
    this.onSelectVideo = this.onSelectVideo.bind(this);
  }
  /*
   * Event to set Image as null while removing.
   */
  onRemoveImage() {
    const { setAttributes } = this.props;

    setAttributes({ backgroundImage: null });
  }

  /*
   * Event to set Image as while adding.
   */
  onSelectImage(media) {
    const { setAttributes } = this.props;
    const { backgroundImage } = this.props.attributes;

    if (!media || !media.url) {
      setAttributes({ backgroundImage: null });
      return;
    }

    if (!media.type || "image" != media.type) {
      return;
    }

    setAttributes({ backgroundImage: media.url });
  }
  /*
   * Event to set Video as null while removing.
   */
  onRemoveVideo() {
    const { setAttributes } = this.props;

    setAttributes({ backgroundVideo: null });
  }

  /*
   * Event to set Video while adding.
   */
  onSelectVideo(media) {
    const { setAttributes } = this.props;

    if (!media || !media.url) {
      setAttributes({ backgroundVideo: null });
      return;
    }
    if (!media.type || "video" != media.type) {
      return;
    }
    setAttributes({ backgroundVideo: media });
  }

  

  render() {
    // Background Type Options
    const backgroundTypeOptions = [
      { value: "color", label: __("Color", "responsive-block-editor-addons") },
      {
        value: "gradient",
        label: __("Gradient", "responsive-block-editor-addons"),
      },
      { value: "image", label: __("Image", "responsive-block-editor-addons") },
      { value: "video", label: __("Video", "responsive-block-editor-addons") },
    ];
    // Cite Alignment Options
    const citeAlignOptions = [
      {
        value: "left",
        label: __("Left", "responsive-block-editor-addons"),
      },
      {
        value: "center",
        label: __("Center", "responsive-block-editor-addons"),
      },
      {
        value: "right",
        label: __("Right", "responsive-block-editor-addons"),
      },
    ];

    const blockPaddingResetValues = {
      paddingTop: 10,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingTabletTop: 10,
      paddingTabletRight: 0,
      paddingTabletBottom: 0,
      paddingTabletLeft: 0,
      paddingMobileTop: 10,
      paddingMobileRight: 0,
      paddingMobileBottom: 0,
      paddingMobileLeft: 0,
    }
    const blockMarginResetValues = {
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
    }
    const twPaddingResetValues = {
      paddingTop: 10,
      paddingRight: 16,
      paddingBottom: 10,
      paddingLeft: 16,
      paddingTabletTop: "",
      paddingTabletRight: "",
      paddingTabletBottom: "",
      paddingTabletLeft: "",
      paddingMobileTop: "",
      paddingMobileRight: "",
      paddingMobileBottom: "",
      paddingMobileLeft: "",
    }

    // Setup the attributes
    const {
      attributes: {
        quoteBackgroundColor,
        quoteTextColor,
        quoteFontFamily,
        quoteFontSize,
        quoteFontWeight,
        quoteLineHeight,
        quoteAlign,
        quoteAlignTablet,
        quoteAlignMobile,
        quoteSize,
        quoteColor,
        quoteHposition,
        quoteVposition,
        quoteOpacity,
        showQuote,
        blockLeftPadding,
        blockLeftPaddingMobile,
        blockLeftPaddingTablet,
        blockRightPadding,
        blockRightPaddingMobile,
        blockRightPaddingTablet,
        blockTopPadding,
        blockTopPaddingMobile,
        blockTopPaddingTablet,
        blockBottomPadding,
        blockBottomPaddingMobile,
        blockBottomPaddingTablet,
        blockBorderStyle,
        blockBorderWidth,
        blockBorderRadius,
        blockTopRadius,
        blockRightRadius,
        blockBottomRadius,
        blockLeftRadius,
        blockTopRadiusTablet,
        blockRightRadiusTablet,
        blockBottomRadiusTablet,
        blockLeftRadiusTablet,
        blockTopRadiusMobile,
        blockRightRadiusMobile,
        blockBottomRadiusMobile,
        blockLeftRadiusMobile,
        blockIsRadiusControlConnected,
        blockIsRadiusValueUpdated,
        blockBorderColor,
        backgroundColor,
        backgroundColor1,
        backgroundColor2,
        colorLocation1,
        colorLocation2,
        gradientDirection,
        backgroundType,
        backgroundImage,
        backgroundVideo,
        opacity,
        icon,
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
        textTopPadding,
        textTopPaddingMobile,
        textTopPaddingTablet,
        textBottomPadding,
        textBottomPaddingMobile,
        textBottomPaddingTablet,
        textLeftPadding,
        textLeftPaddingMobile,
        textLeftPaddingTablet,
        textRightPadding,
        textRightPaddingMobile,
        textRightPaddingTablet,
        quoteFontSizeMobile,
        quoteFontSizeTablet,
        hideWidget,
        hideWidgetTablet,
        hideWidgetMobile,
        z_index,
        z_indexTablet,
        z_indexMobile,
        textIsPaddingControlConnected,
        blockIsPaddingControlConnected,
        blockIsMarginControlConnected,
        quoteTypographyColor,
        blockIsTypographyColorValueUpdated,
        isAlignmentValueUpdated,
        twStyle,
        twColor,
        twBg, 
        twHColor, 
        twHBg,
        twTopPadding, 
        twRightPadding, 
        twBottomPadding, 
        twLeftPadding,
        twTopPaddingTablet, 
        twRightPaddingTablet, 
        twBottomPaddingTablet, 
        twLeftPaddingTablet,
        twTopPaddingMobile, 
        twRightPaddingMobile, 
        twBottomPaddingMobile, 
        twLeftPaddingMobile,
        twFontFamily, 
        twFontSize, 
        twFontSizeTablet, 
        twFontSizeMobile, 
        twFontWeight, 
        twLineHeight,
        twTextTransform,
        twTextDecoration,
        twIconTextSpacing,
        twTypographyColor,
        quoteTextTransform,
        quoteFontStyle,
        twFontStyle,
        quoteTextDecoration,
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

    // Update color values
    const onChangeBackgroundColor = (value) =>
      setAttributes({ quoteBackgroundColor: value });
    const onChangeTextColor = (value) =>
      setAttributes({ quoteTextColor: value });

    // backward compatibility for border radius control

    if (!blockIsRadiusValueUpdated) {
      this.props.setAttributes(
        {
          blockTopRadius:          blockBorderRadius !== undefined ? blockBorderRadius : blockTopRadius,
          blockBottomRadius:       blockBorderRadius !== undefined ? blockBorderRadius : blockBottomRadius,
          blockLeftRadius:         blockBorderRadius !== undefined ? blockBorderRadius : blockLeftRadius,
          blockRightRadius:        blockBorderRadius !== undefined ? blockBorderRadius : blockRightRadius,
          blockTopRadiusTablet:    blockBorderRadius !== undefined ? blockBorderRadius : blockTopRadiusTablet,
          blockBottomRadiusTablet: blockBorderRadius !== undefined ? blockBorderRadius : blockBottomRadiusTablet,
          blockRightRadiusTablet:  blockBorderRadius !== undefined ? blockBorderRadius : blockRightRadiusTablet,
          blockLeftRadiusTablet:   blockBorderRadius !== undefined ? blockBorderRadius : blockLeftRadiusTablet,
          blockTopRadiusMobile:    blockBorderRadius !== undefined ? blockBorderRadius : blockTopRadiusMobile,
          blockBottomRadiusMobile: blockBorderRadius !== undefined ? blockBorderRadius : blockBottomRadiusMobile,
          blockLeftRadiusMobile:   blockBorderRadius !== undefined ? blockBorderRadius : blockLeftRadiusMobile,
          blockRightRadiusMobile:  blockBorderRadius !== undefined ? blockBorderRadius : blockRightRadiusMobile,
        }
      )
      this.props.setAttributes({blockIsRadiusValueUpdated: true});
    }

    // backward compatibility for typography color control
    if (!blockIsTypographyColorValueUpdated) {
      this.props.setAttributes(
        {
          quoteTypographyColor: quoteTextColor !== undefined ? quoteTextColor : quoteTypographyColor,
        }
      )
      this.props.setAttributes({blockIsTypographyColorValueUpdated: true});
    }
    
    if (!isAlignmentValueUpdated) {
      this.props.setAttributes(
        {
          quoteAlign:          quoteAlign !== undefined ? quoteAlign : quoteAlign,
          quoteAlignTablet:       quoteAlign !== undefined ? quoteAlign : quoteAlignTablet,
          quoteAlignMobile:         quoteAlign !== undefined ? quoteAlign : quoteAlignMobile,
        }
      )
      this.props.setAttributes({isAlignmentValueUpdated: true});
    }

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("Layout", "responsive-block-editor-addons")}
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
                      <Fragment>
                        <BaseControl
                          __nextHasNoMarginBottom
                        >
                          <p>
                            {__(
                              "Alignment Mobile",
                              "responsive-block-editor-addons"
                            )}
                          </p>
                          <div className="responsive-block-editor-addons-alignment-mobile">
                            <AlignmentToolbar
                              value={quoteAlignMobile}
                              onChange={(value) =>
                                setAttributes({
                                  quoteAlignMobile: value,
                                })
                              }
                              controls={["left", "center", "right"]}
                              isCollapsed={false}
                            />
                          </div>
                        </BaseControl>
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <BaseControl
                          __nextHasNoMarginBottom
                        >
                          <p>
                            {__(
                              "Alignment Tablet",
                              "responsive-block-editor-addons"
                            )}
                          </p>
                          <div className="responsive-block-editor-addons-alignment-tablet">
                            <AlignmentToolbar
                              value={quoteAlignTablet}
                              onChange={(value) =>
                                setAttributes({
                                  quoteAlignTablet: value,
                                })
                              }
                              controls={["left", "center", "right"]}
                              isCollapsed={false}
                            />
                          </div>
                        </BaseControl>
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <BaseControl
                          __nextHasNoMarginBottom
                        >
                          <p>
                            {__("Alignment", "responsive-block-editor-addons")}
                          </p>
                          <div className="responsive-block-editor-addons-alignment">
                            <AlignmentToolbar
                              value={quoteAlign}
                              onChange={(value) =>
                                setAttributes({
                                  quoteAlign: value,
                                })
                              }
                              controls={["left", "center", "right"]}
                              isCollapsed={false}
                            />
                          </div>
                        </BaseControl>
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
            </PanelBody>
            <PanelBody
              title={__("Twitter", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              {/* Enable Icon */}
              <ToggleControl
                label={__("Enable Icon", "responsive-block-editor-addons")}
                checked={!!this.props.attributes.twEnabled}
                onChange={(v) => setAttributes({ twEnabled: !!v })}
                __nextHasNoMarginBottom
              />

              {/* Show other Twitter options only when Enable Icon is turned on */}
              {this.props.attributes.twEnabled && (
                <Fragment>
                  {/* Icon View: Both | Icon | Text */}
                  <RbeaTabRadioControl
                    label={__("Icon View", "responsive-block-editor-addons")}
                    value={this.props.attributes.twView || "both"}
                    onChange={(v) => setAttributes({ twView: v })}
                    options={[
                      { value: "both", label: __("Both", "responsive-block-editor-addons") },
                      { value: "icon", label: __("Icon", "responsive-block-editor-addons") },
                      { value: "text", label: __("Text", "responsive-block-editor-addons") },
                    ]}
                  />

                  {/* Icon Style: Classic | Bubble | Link */}
                  <RbeaTabRadioControl
                    label={__("Icon Style", "responsive-block-editor-addons")}
                    value={this.props.attributes.twStyle || "classic"}
                    onChange={(v) => {
                      if (v === "link") {
                        // Unset backgrounds and force text color to black for link style
                        setAttributes({ 
                          twStyle: v,
                          twBg: "",
                          twHBg: "",
                          twColor: "#000000",
                          twHColor: "#000000",
                        });
                      } else {
                        // For classic and bubble styles, set text color to white and background to black
                        setAttributes({ 
                          twStyle: v,
                          twColor: "#ffffff",
                          twHColor: "#ffffff",
                          twBg: "#000000",
                          twHBg: "#000000",
                        });
                      }
                    }}
                    options={[
                      { value: "classic", label: __("Classic", "responsive-block-editor-addons") },
                      { value: "bubble",  label: __("Bubble",  "responsive-block-editor-addons") },
                      { value: "link",    label: __("Link",    "responsive-block-editor-addons") },
                    ]}
                  />

                  {/* Target URL: Current Page | Custom URL */}
                  <RbeaTabRadioControl
                    label={__("Target URL", "responsive-block-editor-addons")}
                    value={this.props.attributes.twUrlMode || "current"}
                    onChange={(v) => setAttributes({ twUrlMode: v })}
                    options={[
                      { value: "current", label: __("Current Page", "responsive-block-editor-addons") },
                      { value: "custom",  label: __("Custom URL",  "responsive-block-editor-addons") },
                    ]}
                  />

                  {/* Custom URL field appears only when "Custom URL" is chosen */}
                  {this.props.attributes.twUrlMode === "custom" && (
                    <TextControl
                      label={__("Custom URL", "responsive-block-editor-addons")}
                      value={this.props.attributes.twCustomUrl || ""}
                      onChange={(v) => setAttributes({ twCustomUrl: v })}
                      placeholder="https://twitter.com/intent/tweet"
                      type="url"
                    />
                  )}

                  {/* Label */}
                  <TextControl
                    label={__("Label", "responsive-block-editor-addons")}
                    value={this.props.attributes.twLabel || ""}
                    onChange={(v) => setAttributes({ twLabel: v })}
                    placeholder={__("Post", "responsive-block-editor-addons")}
                  />
                </Fragment>
              )}
            </PanelBody>

            <PanelBody
              title={__("Quotation Mark", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ToggleControl
                label={__(
                  "Show Quotation Mark",
                  "responsive-block-editor-addons"
                )}
                checked={showQuote}
                onChange={() =>
                  this.props.setAttributes({
                    showQuote: !showQuote,
                  })
                }
                __nextHasNoMarginBottom
              />
              <Fragment>
                <p className="components-base-control__label">{__("Icon", "responsive-block-editor-addons")}</p>
                <FontIconPicker
                  icons={svg_icons}
                  renderFunc={renderSVG}
                  theme="default"
                  value={icon}
                  onChange={(value) =>
                    this.props.setAttributes({ icon: value })
                  }
                  isMulti={false}
                  noSelectedPlaceholder={__("Select Icon", "responsive-block-editor-addons")}
                />
              </Fragment>
              <RbeaRangeControl
                label={__("Size", "responsive-block-editor-addons")}
                value={quoteSize}
                onChange={(value) =>
                  this.props.setAttributes({
                    quoteSize: value,
                  })
                }
                min={0}
                max={400}
                step={1}
              />
              <RbeaColorControl
                label = {__("Quote Color", "responsive-block-editor-addons")}
                colorValue={quoteColor}
                onChange={(colorValue) =>
                  setAttributes({ quoteColor: colorValue })
              }
              resetColor={() => setAttributes({ quoteColor: "" })}
            />
              <RbeaRangeControl
                label={__(
                  "Horizontal Position",
                  "responsive-block-editor-addons"
                )}
                value={quoteHposition}
                onChange={(value) =>
                  this.props.setAttributes({
                    quoteHposition: value !== undefined ? value : 30,
                  })
                }
                min={0}
                max={400}
                step={1}
                allowReset
              />
              <RbeaRangeControl
                label={__(
                  "Vertical Position",
                  "responsive-block-editor-addons"
                )}
                value={quoteVposition}
                onChange={(value) =>
                  this.props.setAttributes({
                    quoteVposition: value !== undefined ? value : 20,
                  })
                }
                min={0}
                max={400}
                step={1}
                allowReset
              />
              <RbeaRangeControl
                label={__("Opacity", "responsive-block-editor-addons")}
                value={quoteOpacity}
                onChange={(value) =>
                  this.props.setAttributes({
                    quoteOpacity: value !== undefined ? value : 100,
                  })
                }
                min={0}
                max={100}
                allowReset
              />
            </PanelBody>
            <RbeaSupportControl blockSlug={"blockquote"} />
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody
              title={__("Background", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaBackgroundTypeControl
                label={__("Type", "responsive-block-editor-addons")}
                value={backgroundType}
                onChange={(value) => setAttributes({ backgroundType: value })}
                options={backgroundTypeOptions}
              />
              {"color" == backgroundType && (
                <Fragment>
                  <ColorBackgroundControl
                    {...this.props}
                  />
                  {backgroundColor && (
                    <RbeaRangeControl
                    label={__("Opacity", "responsive-block-editor-addons")}
                    value={opacity}
                    onChange={(value) =>
                      setAttributes({ opacity: value !== undefined ? value : 20 })
                    }
                    min={0}
                    max={100}
                    allowReset
                  />
                  )}
                </Fragment>
              )}
              {"gradient" == backgroundType && (
                <Fragment>
                  <GradientBackgroundControl
                    {...this.props}
                    showHoverGradient = {false}
                  />
                </Fragment>
              )}
              {"image" == backgroundType && (
                <Fragment
                >
                  <RbeaMediaUploadControl
                    label={__('Image', 'responsive-block-editor-addons')}
                    value={{
                        url: backgroundImage || '',
                    }}
                    onChange={(newValue) => {
                        setAttributes({
                            backgroundImage: newValue.url,
                        });
                    }}
                    mediaType={'image'}
                  />
                  {backgroundImage && (
                    <RbeaRangeControl
                    label={__("Opacity", "responsive-block-editor-addons")}
                    value={opacity}
                    onChange={(value) =>
                      setAttributes({ opacity: value !== undefined ? value : 20 })
                    }
                    min={0}
                    max={100}
                    allowReset
                  />
                  )}
                </Fragment>
              )}
              {"video" == backgroundType && (
                <Fragment>
                  <RbeaMediaUploadControl
                  label={__('Video', 'responsive-block-editor-addons')}
                  value={{
                      url: backgroundVideo? backgroundVideo.url : '',
                  }}
                  onChange={(newValue) => {
                      setAttributes({
                        backgroundVideo: newValue,
                      });
                  }}
                  mediaType={'video'}
                />
                {backgroundVideo && (
                    <RbeaRangeControl
                    label={__("Opacity", "responsive-block-editor-addons")}
                    value={opacity}
                    onChange={(value) =>
                      setAttributes({ opacity: value !== undefined ? value : 20 })
                    }
                    min={0}
                    max={100}
                    allowReset
                  />
                  )}
                </Fragment>
              )}
            </PanelBody>
            <PanelBody title={__("Border", "responsive-block-editor-addons")} initialOpen={false}>
                <RbeaBlockBorderHelperControl
                    attrNameTemplate="block%s"
                    values = {{radius: blockBorderRadius, style: blockBorderStyle, width: blockBorderWidth, color: blockBorderColor}}
                    setAttributes={ setAttributes }
                    {...this.props}
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
                  { name: "empty-1", title: "", className: "responsive-block-editor-addons-empty-tab" },
                  { name: "normal", title: __("Normal", "responsive-block-editor-addons"), className: "responsive-block-editor-addons-normal-tab" },
                  { name: "empty-2", title: "", className: "responsive-block-editor-addons-empty-tab-middle" },
                  { name: "hover", title: __("Hover", "responsive-block-editor-addons"), className: "responsive-block-editor-addons-hover-tab" },
                  { name: "empty-3", title: "", className: "responsive-block-editor-addons-empty-tab" },
                ]}
              >
                {(tab) => {
                  const isHover = tab.name === "hover";
                  const mode = isHover ? "hoverboxShadow" : "boxShadow";

                  return (
                    <BoxShadowControl
                      controlKey={mode}
                      setAttributes={setAttributes}
                      label={isHover ? __("Box Shadow (Hover)", "responsive-block-editor-addons") : __("Box Shadow", "responsive-block-editor-addons")}
                      boxShadowColor={{
                        value: isHover ? hoverboxShadowColor : boxShadowColor,
                        label: isHover ? __("Color (Hover)", "responsive-block-editor-addons") : __("Color", "responsive-block-editor-addons"),
                      }}
                      boxShadowHOffset={{
                        value: isHover ? hoverboxShadowHOffset : boxShadowHOffset,
                        label: isHover ? __("Horizontal (Hover)", "responsive-block-editor-addons") : __("Horizontal", "responsive-block-editor-addons"),
                      }}
                      boxShadowVOffset={{
                        value: isHover ? hoverboxShadowVOffset : boxShadowVOffset,
                        label: isHover ? __("Vertical (Hover)", "responsive-block-editor-addons") : __("Vertical", "responsive-block-editor-addons"),
                      }}
                      boxShadowBlur={{
                        value: isHover ? hoverboxShadowBlur : boxShadowBlur,
                        label: isHover ? __("Blur (Hover)", "responsive-block-editor-addons") : __("Blur", "responsive-block-editor-addons"),
                      }}
                      boxShadowSpread={{
                        value: isHover ? hoverboxShadowSpread : boxShadowSpread,
                        label: isHover ? __("Spread (Hover)", "responsive-block-editor-addons") : __("Spread", "responsive-block-editor-addons"),
                      }}
                      boxShadowPosition={{
                        value: isHover ? hoverboxShadowPosition : boxShadowPosition,
                        label: isHover ? __("Position (Hover)", "responsive-block-editor-addons") : __("Position", "responsive-block-editor-addons"),
                      }}
                    />
                  );
                }}
              </TabPanel>
            </PanelBody>

            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ResponsiveNewPaddingControl
                attrNameTemplate="text%s"
                resetValues={blockPaddingResetValues}
                {...this.props}
                label={__("Text Spacing", "responsive-block-editor-addons")}
              />
              <ResponsiveNewPaddingControl
                attrNameTemplate="block%s"
                resetValues={blockPaddingResetValues}
                {...this.props}
                label={__("Block Padding", "responsive-block-editor-addons")}
              />
              <ResponsiveNewMarginControl
                attrNameTemplate="block%s"
                resetValues={blockMarginResetValues}
                {...this.props}
                label={__("Block Margin", "responsive-block-editor-addons")}
              />
            </PanelBody>
				    <TypographyHelperControl
				    	title={__("Quote Typography", "responsive-block-editor-addons")}
				    	attrNameTemplate="quote%s"
				    	values = {{
				    		family: quoteFontFamily,
				    		size: quoteFontSize,
				    		sizeMobile: quoteFontSizeMobile,
				    		sizeTablet: quoteFontSizeTablet,
				    		weight: quoteFontWeight,
				    		height: quoteLineHeight,
                color: quoteTypographyColor,
                transform: quoteTextTransform,
                fontstyle: quoteFontStyle,
                textDecoration: quoteTextDecoration,
				    	}}
				    	showLetterSpacing = { false }
              showColorControl={true}
              showTextDecoration={true}
				    	setAttributes={ setAttributes }
				    	{...this.props}
				    />
            {this.props.attributes.twEnabled && (
              <PanelBody
                title={__("Twitter Icon", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                {/* Normal / Hover color groups */}
                <TabPanel
                  className="responsive-block-editor-addons-inspect-tabs 
                            responsive-block-editor-addons-inspect-tabs-col-2  
                            responsive-block-editor-addons-color-inspect-tabs"
                  activeClass="active-tab"
                  initialTabName="normal"
                  tabs={[
                    { name: "empty-1", title: "", className: "responsive-block-editor-addons-empty-tab" },
                    { name: "normal", title: __("Normal", "responsive-block-editor-addons"), className: "responsive-block-editor-addons-normal-tab" },
                    { name: "empty-2", title: "", className: "responsive-block-editor-addons-empty-tab-middle" },
                    { name: "hover", title: __("Hover", "responsive-block-editor-addons"), className: "responsive-block-editor-addons-hover-tab" },
                    { name: "empty-3", title: "", className: "responsive-block-editor-addons-empty-tab" },
                  ]}
                >
                  {(tab) => {
                    if (tab.name === "hover") {
                      return (
                        <Fragment>
                          <RbeaColorControl
                            label={__("Tweet Color (Hover)", "responsive-block-editor-addons")}
                            colorValue={twHColor}
                            onChange={(value) => setAttributes({ twHColor: value })}
                            resetColor={() => setAttributes({ twHColor: "" })}
                          />
                          {twStyle !== "link" && (
                            <RbeaColorControl
                              label={__("Tweet Background (Hover)", "responsive-block-editor-addons")}
                              colorValue={twHBg}
                              onChange={(value) => setAttributes({ twHBg: value })}
                              resetColor={() => setAttributes({ twHBg: "" })}
                            />
                          )}
                        </Fragment>
                      );
                    }
                    // normal
                    return (
                      <Fragment>
                        <RbeaColorControl
                          label={__("Tweet Color", "responsive-block-editor-addons")}
                          colorValue={twColor}
                          onChange={(value) => setAttributes({ twColor: value })}
                          resetColor={() => setAttributes({ twColor: "" })}
                        />
                        {twStyle !== "link" && (
                          <RbeaColorControl
                            label={__("Tweet Background", "responsive-block-editor-addons")}
                            colorValue={twBg}
                            onChange={(value) => setAttributes({ twBg: value })}
                            resetColor={() => setAttributes({ twBg: "" })}
                          />
                        )}
                      </Fragment>
                    );
                  }}
                </TabPanel>
                
                <hr className="responsive-block-editor-addons-editor__separator" />

                {/* Button Padding (responsive) */}
                <ResponsiveNewPaddingControl
                  attrNameTemplate="tw%s"
                  resetValues={twPaddingResetValues}
                  {...this.props}
                />

                <hr className="responsive-block-editor-addons-editor__separator" />

                {/* Typography for label */}
                <TypographyHelperControl
                  title={__("Typography", "responsive-block-editor-addons")}
                  attrNameTemplate="tw%s"
                  values={{
                    family: twFontFamily,
                    size: twFontSize,
                    sizeMobile: twFontSizeMobile,
                    sizeTablet: twFontSizeTablet,
                    weight: twFontWeight,
                    height: twLineHeight,
                    transform: twTextTransform,
                    textDecoration: twTextDecoration,
                    fontstyle: twFontStyle,
                    color: twTypographyColor,
                  }}
                  showLetterSpacing={false}
                  showTextTransform={true}
                  showTextDecoration={true}
                  showColorControl={false}
                  setAttributes={setAttributes}
                  isSetting={true}
                  {...this.props}
                />
              </PanelBody>
            )}

            <RbeaSupportControl blockSlug={"blockquote"} />
          </InspectorTab>
          <InspectorTab key={"advance"}>

            <RbeaExtensions {...this.props} />

            
          
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
                        <RbeaRangeControl
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
                        <RbeaRangeControl
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
          <RbeaSupportControl blockSlug={"blockquote"} />
          </InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
