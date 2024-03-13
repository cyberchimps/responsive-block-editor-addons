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
import VideoBackgroundControl from "../../../settings-components/BlockBackgroundSettings/VideoBackgroundSettings";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import ColorBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import ImageBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ImageBackgroundSettings";
import GradientBackgroundControl from "../../../settings-components/BlockBackgroundSettings/GradientBackgroundSettings";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ResponsivePaddingControl from "../../../settings-components/ResponsiveSpacingSettings/ResponsivePaddingControl";

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
          <InspectorTab key={"content"}>
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
                {__("Quote Color", "responsive-block-editor-addons")}
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
                onChange={(colorValue) =>
                  setAttributes({ quoteColor: colorValue })
                }
                allowReset
              />
              <RangeControl
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
              <RangeControl
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
          <InspectorTab key={"style"}>
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
            <PanelBody title={__("Border", "responsive-block-editor-addons")} initialOpen={false}>
                <BlockBorderHelperControl
                    attrNameTemplate="block%s"
                    values = {{radius: blockBorderRadius, style: blockBorderStyle, width: blockBorderWidth, color: blockBorderColor}}
                    setAttributes={ setAttributes }
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
                boxShadowBlur={{ value: boxShadowBlur, label: __("Blur", "responsive-block-editor-addons") }}
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
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <PanelBody
                title={__("Text Spacing", "responsive-block-editor-addons")}
                initialOpen={false}
              >
				<ResponsivePaddingControl
					attrNameTemplate="text%s"
					values={{
						desktopTop: textTopPadding,
						desktopBottom: textBottomPadding,
						desktopLeft: textLeftPadding,
						desktopRight: textRightPadding,

						tabletTop: textTopPaddingTablet,
						tabletBottom: textBottomPaddingTablet,
						tabletLeft: textLeftPaddingTablet,
						tabletRight: textRightPaddingTablet,

						mobileTop: textTopPaddingMobile,
						mobileBottom: textBottomPaddingMobile,
						mobileLeft: textLeftPaddingMobile,
						mobileRight: textRightPaddingMobile,
					}}
					setAttributes={setAttributes}
					{...this.props}
				/>
              </PanelBody>
              <PanelBody
                title={__("Block Spacing", "responsive-block-editor-addons")}
                initialOpen={false}
              >
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
            ></PanelColorSettings>

			<PanelBody
              title={__("Typography", "responsive-block-editor-addons")}
              initialOpen={false}
            >
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
					}}
					showLetterSpacing = { false }
					showTextTransform = { false }
					setAttributes={ setAttributes }
					{...this.props}
				/>
			</PanelBody>
          </InspectorTab>
          <InspectorTab key={"advance"}>
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
