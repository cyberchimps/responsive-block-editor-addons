/**
 * Inspector Controls
 */
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import renderSVG from "../renderQuoteIcon";
import ResponsiveBlocksQuoteIcon from "../ResponsiveBlocksQuoteIcon.json";
import BoxShadowControl from "../../../utils/components/box-shadow";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import TypographyHelperControl from "../../../settings-components/Typography Settings";
import ColorBackgroundControl from "../../../settings-components/Block Background Settings/Color Background Settings";
import GradientBackgroundControl from "../../../settings-components/Block Background Settings/Gradient Background Settings";
import VideoBackgroundControl from "../../../settings-components/Block Background Settings/Video Background Settings";
import BlockBorderHelperControl from "../../../settings-components/Block Border Settings";
import ImageBackgroundControl from "../../../settings-components/Block Background Settings/Image Background Settings/index";
import ResponsivePaddingControl from "../../../settings-components/Responsive Spacing Settings/Responsive Padding Control";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";

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
} = wp.editor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  ToggleControl,
  BaseControl,
  Button,
  TabPanel,
  Dashicon
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
      { value: "none", label: __("None", "responsive-block-editor-addons") },
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

    // Setup the attributes
    const {
      attributes: {
        quoteBackgroundColor,
        quoteTextColor,
        quoteFontFamily,
        quoteFontSize,
        quoteFontSizeMobile,
        quoteFontSizeTablet,
        quoteFontWeight,
        quoteLineHeight,
        quoteAlign,
        quoteSize,
        quoteColor,
        quoteHposition,
        quoteVposition,
        quoteOpacity,
        showQuote,
        blockLeftPadding,
        blockLeftPaddingTablet,
        blockLeftPaddingMobile,
        blockRightPadding,
        blockRightPaddingTablet,
        blockRightPaddingMobile,
        blockTopPadding,
        blockTopPaddingMobile,
        blockTopPaddingTablet,
        blockBottomPadding,
        blockBottomPaddingMobile,
        blockBottomPaddingTablet,
        blockBorderStyle,
        blockBorderWidth,
        blockBorderRadius,
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
        textSpacingTop,
        textSpacingTopMobile,
        textSpacingTopTablet,
        textSpacingBottom,
        textSpacingBottomMobile,
        textSpacingBottomTablet,
        textSpacingLeft,
        textSpacingLeftMobile,
        textSpacingLeftTablet,
        textSpacingRight,
        textSpacingRightMobile,
        textSpacingRightTablet,
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

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={'content'}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={false}
            >         
              <SelectControl
                label={__("Alignment", "responsive-block-editor-addons")}
                description={__(
                  "Left or right align the cite name and title.",
                  "responsive-block-editor-addons"
                )}
                options={citeAlignOptions}
                value={quoteAlign}
                onChange={(value) =>
                  this.props.setAttributes({
                    quoteAlign: value,
                  })
                }
              />
            </PanelBody>
            <PanelBody
              title={__("Quotation Mark", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ToggleControl
                label={__("Show Quotation Mark", "responsive-block-editor-addons")}
                checked={showQuote}
                onChange={() =>
                  this.props.setAttributes({
                    showQuote: !showQuote,
                  })
                }
              />
              <Fragment>
                <p className="components-base-control__label">{__("Icon")}</p>
                <FontIconPicker
                  icons={svg_icons}
                  renderFunc={renderSVG}
                  theme="default"
                  value={icon}
                  onChange={(value) => this.props.setAttributes({ icon: value })}
                  isMulti={false}
                  noSelectedPlaceholder={__("Select Icon")}
                />
              </Fragment>
              <RangeControl
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
              <p>
                {__("Quote Color")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{ backgroundColor: quoteColor }}
                  ></span>
                </span>
              </p>

              <ColorPalette
                title={__("Color", "responsive-block-editor-addons")}
                value={quoteColor}
                onChange={(colorValue) => setAttributes({ quoteColor: colorValue })}
                allowReset
              />
              <RangeControl
                label={__("Horizontal Position", "responsive-block-editor-addons")}
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
              <RangeControl
                label={__("Vertical Position", "responsive-block-editor-addons")}
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
              <RangeControl
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
          </InspectorTab>
          <InspectorTab key={'style'}>
            <TypographyHelperControl
              title={__("Typography", "responsive-block-editor-addons")} 
              attrNameTemplate="quote%s"
              values = {{
                family: quoteFontFamily, 
                size: quoteFontSize, 
                sizeMobile: quoteFontSizeMobile, 
                sizeTablet: quoteFontSizeTablet, 
                weight: quoteFontWeight, 
                height: quoteLineHeight,
              }}
              showLetterSpacing = { false }
              showTextTransform = { false }
              setAttributes={ setAttributes }
              {...this.props}            
            />
            
            <PanelBody
              title={__("Background", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <SelectControl
                label={__("Background Type", "responsive-block-editor-addons")}
                value={backgroundType}
                onChange={(value) => setAttributes({ backgroundType: value })}
                options={backgroundTypeOptions}
              />
              {"color" == backgroundType && (
                <Fragment>
                  <ColorBackgroundControl 
                    {...this.props}
                  />
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
                <ImageBackgroundControl
                  showSomeImageOptions={false}
                  showMoreImageOptions={false}
                  showOverlayOptions={false}
                  {...this.props}
                />
              )}
              {"video" == backgroundType && (
                  <VideoBackgroundControl {...this.props} />
              )}
              <RangeControl
                label={__("Opacity", "responsive-block-editor-addons")}
                value={opacity}
                onChange={(value) =>
                  setAttributes({ opacity: value !== undefined ? value : 20 })
                }
                min={0}
                max={100}
                allowReset
              />
            </PanelBody>
            <PanelBody title={__("Border Settings")} initialOpen={false}>
              <BlockBorderHelperControl 
                attrNameTemplate="block%s"
                values = {{radius: blockBorderRadius, style: blockBorderStyle, width: blockBorderWidth, color: blockBorderColor}}
                setAttributes={ setAttributes }
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
                boxShadowSpread={{ value: boxShadowSpread, label: __("Spread") }}
                boxShadowPosition={{
                  value: boxShadowPosition,
                  label: __("Position"),
                }}
              />
            </PanelBody>

            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ResponsivePaddingControl
                attrNameTemplate="block%s"
                values = {{
                  desktopTop:blockTopPadding, 
                  desktopBottom:blockBottomPadding, 
                  desktopLeft:blockLeftPadding, 
                  desktopRight:blockRightPadding, 

                  tabletTop:blockTopPaddingTablet,
                  tabletBottom:blockBottomPaddingTablet, 
                  tabletLeft:blockLeftPaddingTablet, 
                  tabletRight:blockRightPaddingTablet, 

                  mobileTop:blockTopPaddingMobile,
                  mobileBottom:blockBottomPaddingMobile,
                  mobileLeft:blockLeftPaddingMobile,
                  mobileRight:blockRightPaddingMobile,
                }}
                setAttributes={ setAttributes }
                {...this.props}            
              />
              <PanelBody
              title={__("Text Spacing", "responsive-block-editor-addons")}
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
              className: " responsive-tablet-tab  responsive-responsive-tabs",
            },
            {
              name: "mobile",
              title: <Dashicon icon="smartphone" />,
              className: " responsive-mobile-tab  responsive-responsive-tabs",
            },
            ]}
            >

            {(tab) => {
            let tabout;

            if ("mobile" === tab.name) {
            tabout = (
            <Fragment>
              <RangeControl
              label={__("Top Space", "responsive-block-editor-addons")}
              value={textSpacingTopMobile}
              onChange={(value) => setAttributes({ textSpacingTopMobile: value })}
              min={0}
              max={100}
              />
              <RangeControl
              label={__("Bottom Space", "responsive-block-editor-addons")}
              value={textSpacingBottomMobile}
              onChange={(value) => setAttributes({ textSpacingBottomMobile: value })}
              min={0}
              max={100}
              />
              <RangeControl
              label={__("Left Space", "responsive-block-editor-addons")}
              value={textSpacingLeftMobile}
              onChange={(value) => setAttributes({ textSpacingLeftMobile: value })}
              min={0}
              max={100}
              />
              <RangeControl
              label={__("Right Space", "responsive-block-editor-addons")}
              value={textSpacingRightMobile}
              onChange={(value) => setAttributes({ textSpacingRightMobile: value })}
              min={0}
              max={100}
              />
            </Fragment>
            );
            } else if ("tablet" === tab.name) {
            tabout = (
            <Fragment>
              <RangeControl
              label={__("Top Space", "responsive-block-editor-addons")}
              value={textSpacingTopTablet}
              onChange={(value) => setAttributes({ textSpacingTopTablet: value })}
              min={0}
              max={100}
              />
              <RangeControl
              label={__("Bottom Space", "responsive-block-editor-addons")}
              value={textSpacingBottomTablet}
              onChange={(value) => setAttributes({ textSpacingBottomTablet: value })}
              min={0}
              max={100}
              />
              <RangeControl
              label={__("Left Space", "responsive-block-editor-addons")}
              value={textSpacingLeftTablet}
              onChange={(value) => setAttributes({ textSpacingLeftTablet: value })}
              min={0}
              max={100}
              />
              <RangeControl
              label={__("Right Space", "responsive-block-editor-addons")}
              value={textSpacingRightTablet}
              onChange={(value) => setAttributes({ textSpacingRightTablet: value })}
              min={0}
              max={100}
              />
            </Fragment>
            );
            } else {
            tabout = (
            <Fragment>
              <RangeControl
              label={__("Top Space", "responsive-block-editor-addons")}
              value={textSpacingTop}
              onChange={(value) => setAttributes({ textSpacingTop: value })}
              min={0}
              max={100}
              />
              <RangeControl
              label={__("Bottom Space", "responsive-block-editor-addons")}
              value={textSpacingBottom}
              onChange={(value) => setAttributes({ textSpacingBottom: value })}
              min={0}
              max={100}
              />
              <RangeControl
              label={__("Left Space", "responsive-block-editor-addons")}
              value={textSpacingLeft}
              onChange={(value) => setAttributes({ textSpacingLeft: value })}
              min={0}
              max={100}
              />
              <RangeControl
              label={__("Right Space", "responsive-block-editor-addons")}
              value={textSpacingRight}
              onChange={(value) => setAttributes({ textSpacingRight: value })}
              min={0}
              max={100}
              />
            </Fragment>
            );
            }

            return <div>{tabout}</div>;
            }}
            </TabPanel>
            </PanelBody>
              
            </PanelBody>

            <PanelColorSettings
              title={__("Color Settings", "responsive-block-editor-addons")}
              initialOpen={false}
              colorSettings={[
                {
                  value: quoteTextColor,
                  onChange: onChangeTextColor,
                  label: __("Text Color", "responsive-block-editor-addons"),
                },
              ]}
            >
            </PanelColorSettings>
          </InspectorTab>
          <InspectorTab key={'advance'}>
            
          </InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
