/**
 * Inspector Controls
 */

import BoxShadowControl from "../../../utils/components/box-shadow";
import ColorBackgroundControl from "../../../settings-components/Block Background Settings/Color Background Settings";
import GradientBackgroundControl from "../../../settings-components/Block Background Settings/Gradient Background Settings";
import VideoBackgroundControl from "../../../settings-components/Block Background Settings/Video Background Settings";
import ResponsiveSpacingControl from "../../../settings-components/Responsive Spacing Settings";
import BlockBorderHelperControl from "../../../settings-components/Block Border Settings";
import ImageBackgroundControl from "../../../settings-components/Block Background Settings/Image Background Settings/index";
import ResponsivePaddingControl from "../../../settings-components/Responsive Spacing Settings/Responsive Padding Control";
import ResponsiveMarginControl from "../../../settings-components/Responsive Spacing Settings/Responsive Margin Control";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { ColorPalette, MediaUpload } = wp.blockEditor;

// Import block components
const { InspectorControls } = wp.editor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  ToggleControl,
  BaseControl,
  ButtonGroup,
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
    // Setup the attributes
    const {
      attributes: {
        width,
        themeWidth,
        innerWidthType,
        innerWidth,
        innerWidthTablet,
        innerWidthMobile,

        blockTopPadding,
        blockBottomPadding,
        blockLeftPadding,
        blockRightPadding,
        blockTopPaddingMobile,
        blockBottomPaddingMobile,
        blockLeftPaddingMobile,
        blockRightPaddingMobile,
        blockTopPaddingTablet,
        blockBottomPaddingTablet,
        blockLeftPaddingTablet,
        blockRightPaddingTablet,
        mobilePaddingType,
        tabletPaddingType,
        desktopPaddingType,
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
        blockBorderStyle,
        blockBorderWidth,
        blockBorderRadius,
        blockBorderColor,
        sectionTag,
        backgroundColor,
        backgroundColor1,
        backgroundColor2,
        colorLocation1,
        colorLocation2,
        gradientDirection,
        backgroundType,
        backgroundImage,

        backgroundImagePosition,
        backgroundAttachment,
        backgroundImageRepeat,
        backgroundImageSize,
        overlayType,
        backgroundImageColor,
        gradientOverlayColor1,
        gradientOverlayLocation1,
        gradientOverlayColor2,
        gradientOverlayLocation2,
        gradientOverlayType,
        gradientOverlayAngle,
        gradientOverlayPosition,

        backgroundVideo,
        opacity,
        boxShadowColor,
        boxShadowHOffset,
        boxShadowVOffset,
        boxShadowBlur,
        boxShadowSpread,
        boxShadowPosition,
        z_index,
        align,
      },
      setAttributes,
    } = this.props;

    // Section title tags
    const sectionTags = [
      { value: "div", label: __("div", "responsive-block-editor-addons") },
      {
        value: "header",
        label: __("header", "responsive-block-editor-addons"),
      },
      {
        value: "section",
        label: __("section", "responsive-block-editor-addons"),
      },
      {
        value: "article",
        label: __("article", "responsive-block-editor-addons"),
      },
      { value: "main", label: __("main", "responsive-block-editor-addons") },
      { value: "aside", label: __("aside", "responsive-block-editor-addons") },
      {
        value: "footer",
        label: __("footer", "responsive-block-editor-addons"),
      },
    ];

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
    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              {align != "full" && (
                <RangeControl
                  label={__("Width")}
                  value={width}
                  min={0}
                  max={2000}
                  onChange={(value) => setAttributes({ width: value })}
                />
              )}
              {align == "full" && !themeWidth && (
                <Fragment>
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
                            <RangeControl
                              label={__("Inner Width")}
                              value={innerWidthMobile}
                              min={0}
                              max={2000}
                              onChange={(value) =>
                                setAttributes({ innerWidthMobile: value })
                              }
                            />
                          </Fragment>
                        );
                      } else if ("tablet" === tab.name) {
                        tabout = (
                          <Fragment>
                            <RangeControl
                              label={__("Inner Width Tablet")}
                              value={innerWidthTablet}
                              min={0}
                              max={2000}
                              onChange={(value) =>
                                setAttributes({ innerWidthTablet: value })
                              }
                            />
                          </Fragment>
                        );
                      } else {
                        tabout = (
                          <Fragment>
                            <RangeControl
                              label={__("Inner Width")}
                              value={innerWidth}
                              min={0}
                              max={2000}
                              onChange={(value) =>
                                setAttributes({ innerWidth: value })
                              }
                            />
                          </Fragment>
                        );
                      }

                      return <div>{tabout}</div>;
                    }}
                  </TabPanel>
                </Fragment>
              )}
              <RangeControl
                label={__("z-index", "responsive-block-editor-addons")}
                min={0}
                max={9999}
                allowReset={true}
                resetFallbackValue={1}
                value={z_index}
                onChange={(value) =>
                  setAttributes({ z_index: value !== undefined ? value : 1 })
                }
              />
            </PanelBody>
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
                  <ColorBackgroundControl {...this.props} />
                </Fragment>
              )}
              {"gradient" == backgroundType && (
                <Fragment>
                  <GradientBackgroundControl
                    {...this.props}
                    showHoverGradient={false}
                  />
                </Fragment>
              )}
              {"image" == backgroundType && (
                <ImageBackgroundControl
                  {...this.props}
                  showSomeImageOptions={true}
                  showMoreImageOptions={true}
                  showOverlayOptions={true}
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
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
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
            </PanelBody>

            <PanelBody
              title={__("Border", "responsive-block-editor-addons")}
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
          </InspectorTab>
          <InspectorTab key={"advance"}></InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
