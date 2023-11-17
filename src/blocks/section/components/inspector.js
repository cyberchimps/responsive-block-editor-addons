/**
 * Inspector Controls
 */

import BoxShadowControl from "../../../utils/components/box-shadow";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import VideoBackgroundControl from "../../../settings-components/BlockBackgroundSettings/VideoBackgroundSettings";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import ColorBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import GradientBackgroundControl from "../../../settings-components/BlockBackgroundSettings/GradientBackgroundSettings";
import ResponsivePaddingControl from "../../../settings-components/ResponsiveSpacingSettings/ResponsivePaddingControl";
import ResponsiveMarginControl from "../../../settings-components/ResponsiveSpacingSettings/ResponsiveMarginControl";
import generateCSSUnit from "../../../generateCSSUnit";


// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { ColorPalette, MediaUpload, InspectorControls } = wp.blockEditor;

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
          topPadding,
          bottomPadding,
          leftPadding,
          rightPadding,
          topPaddingTablet,
          bottomPaddingTablet,
          leftPaddingTablet,
          rightPaddingTablet,
          topPaddingMobile,
          bottomPaddingMobile,
          leftPaddingMobile,
          rightPaddingMobile,
          topMargin,
          bottomMargin,
          leftMargin,
          rightMargin,
          topMarginTablet,
          bottomMarginTablet,
          leftMarginTablet,
          rightMarginTablet,
          topMarginMobile,
          bottomMarginMobile,
          leftMarginMobile,
          rightMarginMobile,
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
        backgroundPosition,
        backgroundPositionMobile,
        backgroundPositionTablet,
        backgroundAttachment,
        backgroundRepeat,
        backgroundSize,
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
        imagePositionTab,
        imageSizeTab,
        backgroundSizeTablet,
        backgroundSizeMobile,
      },
      setAttributes,
    } = this.props;

    const imagePositionOptions = [
      { value: "top left", label: __("Top Left", "responsive-block-editor-addons") },
      { value: "top center", label: __("Top Center", "responsive-block-editor-addons") },
      { value: "top right", label: __("Top Right", "responsive-block-editor-addons") },
      { value: "center left", label: __("Center Left", "responsive-block-editor-addons") },
      { value: "center center", label: __("Center Center", "responsive-block-editor-addons") },
      { value: "center right", label: __("Center Right", "responsive-block-editor-addons") },
      { value: "bottom left", label: __("Bottom Left", "responsive-block-editor-addons") },
      { value: "bottom center", label: __("Bottom Center", "responsive-block-editor-addons") },
      { value: "bottom right", label: __("Bottom Right", "responsive-block-editor-addons") },
    ];

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
                  label={__("Width", "responsive-block-editor-addons")}
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
                              label={__("Inner Width", "responsive-block-editor-addons")}
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
                              label={__("Inner Width Tablet", "responsive-block-editor-addons")}
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
                              label={__("Inner Width", "responsive-block-editor-addons")}
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
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
				<ResponsivePaddingControl
					attrNameTemplate="block%s"
					values={{
						desktopTop: topPadding !== 999 && blockTopPadding === 10 ? topPadding : blockTopPadding,
						desktopBottom: bottomPadding !== 999 && blockBottomPadding === 10 ? bottomPadding : blockBottomPadding,
						desktopLeft: leftPadding !== 999 && blockLeftPadding === 10 ? leftPadding : blockLeftPadding,
						desktopRight: rightPadding !== 999 && blockRightPadding === 10 ? rightPadding : blockRightPadding,

						tabletTop: topPaddingTablet !== 999 && !blockTopPaddingTablet ? topPaddingTablet : blockTopPaddingTablet,
						tabletBottom: bottomPaddingTablet !== 999 && !blockBottomPaddingTablet ? bottomPaddingTablet : blockBottomPaddingTablet,
						tabletLeft: leftPaddingTablet !== 999 && !blockLeftPaddingTablet ? leftPaddingTablet : blockLeftPaddingTablet,
						tabletRight: rightPaddingTablet !== 999 && !blockRightPaddingTablet ? rightPaddingTablet : blockRightPaddingTablet,

						mobileTop: topPaddingMobile !== 999 && !blockTopPaddingMobile ? topPaddingMobile : blockTopPaddingMobile,
						mobileBottom: bottomPaddingMobile !== 999 && !blockBottomPaddingMobile ? bottomPaddingMobile : blockBottomPaddingMobile,
						mobileLeft: leftPaddingMobile !== 999 && !blockLeftPaddingMobile ? leftPaddingMobile : blockLeftPaddingMobile,
						mobileRight: rightPaddingMobile !== 999 && !blockRightPaddingMobile ? rightPaddingMobile : blockRightPaddingMobile,
					}}
					setAttributes={setAttributes}
					{...this.props}
				/>
				<hr />
				<ResponsiveMarginControl
					attrNameTemplate="block%s"
					values={{
						desktopTop: topMargin !== 999 && blockTopMargin === 0 ? topMargin : blockTopMargin,
						desktopBottom: bottomMargin !== 999 && blockBottomMargin === 0 ? bottomMargin : blockBottomMargin,
						desktopLeft: leftMargin !== 999 && blockLeftMargin === 0 ? leftMargin : blockLeftMargin,
						desktopRight: rightMargin !== 999 && blockRightMargin === 0 ? rightMargin : blockRightMargin,

						tabletTop: topMarginTablet !== 999 && !blockTopMarginTablet ? topMarginTablet : blockTopMarginTablet,
						tabletBottom: bottomMarginTablet !== 999 && !blockBottomMarginTablet ? bottomMarginTablet : blockBottomMarginTablet,
						tabletLeft: leftMarginTablet !== 999 && !blockLeftMarginTablet ? leftMarginTablet : blockLeftMarginTablet,
						tabletRight: rightMarginTablet !== 999 && !blockRightMarginTablet ? rightMarginTablet : blockRightMarginTablet,

						mobileTop: topMarginMobile !== 999 && blockTopMarginMobile === "" ? topMarginMobile : blockTopMarginMobile,
						mobileBottom: bottomMarginMobile !== 999 && blockBottomMarginMobile === "" ? bottomMarginMobile : blockBottomMarginMobile,
						mobileLeft: leftMarginMobile !== 999 && blockLeftMarginMobile === "" ? leftMarginMobile : blockLeftMarginMobile,
						mobileRight: rightMarginMobile !== 999 && blockRightMarginMobile === "" ? rightMarginMobile : blockRightMarginMobile,
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
                    showHoverGradient={false}
                  />
                </Fragment>
              )}
              {"image" == backgroundType && (
                <Fragment>
                  <BaseControl
                    className="editor-bg-image-control"
                    label={__(
                      "Background Image",
                      "responsive-block-editor-addons"
                    )}
                  >
                    <MediaUpload
                      title={__(
                        "Select Background Image",
                        "responsive-block-editor-addons"
                      )}
                      onSelect={this.onSelectImage}
                      allowedTypes={["image"]}
                      value={backgroundImage}
                      render={({ open }) => (
                        <Button isDefault onClick={open}>
                          {!backgroundImage
                            ? __(
                                "Select Background Image",
                                "responsive-block-editor-addons"
                              )
                            : __(
                                "Replace image",
                                "responsive-block-editor-addons"
                              )}
                        </Button>
                      )}
                    />
                    {backgroundImage && (
                      <Button
                        className="responsive-rm-btn"
                        onClick={this.onRemoveImage}
                        isLink
                        isDestructive
                      >
                        {__("Remove Image", "responsive-block-editor-addons")}
                      </Button>
                    )}
                  </BaseControl>
                  {backgroundImage && (
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
                          if ("mobile" === tab.name) {
                            setAttributes({ imagePositionTab: "mobile" });
                          } else if ("tablet" === tab.name) {
                            setAttributes({ imagePositionTab: "tablet" });
                          } else {
                            setAttributes({ imagePositionTab: "desktop" });
                          }
                        }}
                      </TabPanel>
                      {imagePositionTab === "desktop" && (
                        <Fragment>
                          <SelectControl
                            label={__("Image Position", "responsive-block-editor-addons")}
                            value={backgroundPosition}
                            onChange={(value) =>
                              setAttributes({ backgroundPosition: value })
                            }
                            options={imagePositionOptions}
                          />
                        </Fragment>
                      )}
                      {imagePositionTab === "tablet" && (
                        <Fragment>
                          <SelectControl
                            label={__("Image Position Tablet", "responsive-block-editor-addons")}
                            value={backgroundPositionTablet}
                            onChange={(value) =>
                              setAttributes({ backgroundPositionTablet: value })
                            }
                            options={imagePositionOptions}
                          />
                        </Fragment>
                      )}
                      {imagePositionTab === "mobile" && (
                        <Fragment>
                          <SelectControl
                            label={__("Image Position Mobile", "responsive-block-editor-addons")}
                            value={backgroundPositionMobile}
                            onChange={(value) =>
                              setAttributes({ backgroundPositionMobile: value })
                            }
                            options={imagePositionOptions}
                          />
                        </Fragment>
                      )}
                      <SelectControl
                        label={__("Attachment", "responsive-block-editor-addons")}
                        value={backgroundAttachment}
                        onChange={(value) =>
                          setAttributes({ backgroundAttachment: value })
                        }
                        options={[
                          { value: "fixed", label: __("Fixed", "responsive-block-editor-addons") },
                          { value: "scroll", label: __("Scroll", "responsive-block-editor-addons") },
                        ]}
                      />
                      <SelectControl
                        label={__("Repeat", "responsive-block-editor-addons")}
                        value={backgroundRepeat}
                        onChange={(value) =>
                          setAttributes({ backgroundRepeat: value })
                        }
                        options={[
                          { value: "no-repeat", label: __("No Repeat", "responsive-block-editor-addons") },
                          { value: "repeat", label: __("Repeat", "responsive-block-editor-addons") },
                          { value: "repeat-x", label: __("Repeat-x", "responsive-block-editor-addons") },
                          { value: "repeat-y", label: __("Repeat-y", "responsive-block-editor-addons") },
                        ]}
                      />
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
                          if ("mobile" === tab.name) {
                            setAttributes({ imageSizeTab: "mobile" });
                          } else if ("tablet" === tab.name) {
                            setAttributes({ imageSizeTab: "tablet" });
                          } else {
                            setAttributes({ imageSizeTab: "desktop" });
                          }
                        }}
                      </TabPanel>
                      {imageSizeTab === "desktop" && (
                        <SelectControl
                          label={__("Size", "responsive-block-editor-addons")}
                          value={backgroundSize}
                          onChange={(value) =>
                            setAttributes({ backgroundSize: value })
                          }
                          options={[
                            { value: "auto", label: __("Auto", "responsive-block-editor-addons") },
                            { value: "cover", label: __("Cover", "responsive-block-editor-addons") },
                            { value: "contain", label: __("Contain", "responsive-block-editor-addons") },
                          ]}
                        />
                      )}
                      {imageSizeTab === "tablet" && (
                        <SelectControl
                          label={__("Size Tablet", "responsive-block-editor-addons")}
                          value={backgroundSizeTablet}
                          onChange={(value) =>
                            setAttributes({ backgroundSizeTablet: value })
                          }
                          options={[
                            { value: "auto", label: __("Auto", "responsive-block-editor-addons") },
                            { value: "cover", label: __("Cover", "responsive-block-editor-addons") },
                            { value: "contain", label: __("Contain", "responsive-block-editor-addons") },
                          ]}
                        />
                      )}
                      {imageSizeTab === "mobile" && (
                        <SelectControl
                          label={__("Size Mobile", "responsive-block-editor-addons")}
                          value={backgroundSizeMobile}
                          onChange={(value) =>
                            setAttributes({ backgroundSizeMobile: value })
                          }
                          options={[
                            { value: "auto", label: __("Auto", "responsive-block-editor-addons") },
                            { value: "cover", label: __("Cover", "responsive-block-editor-addons") },
                            { value: "contain", label: __("Contain", "responsive-block-editor-addons") },
                          ]}
                        />
                      )}
                      <SelectControl
                        label={__("Image Overlay Type", "responsive-block-editor-addons")}
                        value={overlayType}
                        onChange={(value) =>
                          setAttributes({ overlayType: value })
                        }
                        options={[
                          { value: "color", label: __("Color", "responsive-block-editor-addons") },
                          { value: "gradient", label: __("Gradient", "responsive-block-editor-addons") },
                        ]}
                      />
                      {overlayType == "color" && (
                        <Fragment>
                          <p className="responsive-setting-label">
                            {__("Image Overlay Color", "responsive-block-editor-addons")}
                            <span className="components-base-control__label">
                              <span
                                className="component-color-indicator"
                                style={{
                                  backgroundColor: backgroundImageColor,
                                }}
                              ></span>
                            </span>
                          </p>
                          <ColorPalette
                            value={backgroundImageColor}
                            onChange={(colorValue) =>
                              setAttributes({
                                backgroundImageColor: colorValue,
                              })
                            }
                            allowReset
                          />
                        </Fragment>
                      )}

                      {"gradient" == overlayType && (
                        <Fragment>
                          <p className="responsive-setting-label">
                            {__("Color 1", "responsive-block-editor-addons")}
                            <span className="components-base-control__label">
                              <span
                                className="component-color-indicator"
                                style={{
                                  backgroundColor: gradientOverlayColor1,
                                }}
                              ></span>
                            </span>
                          </p>
                          <ColorPalette
                            value={gradientOverlayColor1}
                            onChange={(colorValue) =>
                              setAttributes({
                                gradientOverlayColor1: colorValue,
                              })
                            }
                            allowReset
                          />
                          <RangeControl
                            label={__("Location 1", "responsive-block-editor-addons")}
                            value={gradientOverlayLocation1}
                            onChange={(value) =>
                              setAttributes({ gradientOverlayLocation1: value })
                            }
                            min={0}
                            max={100}
                            allowReset
                          />
                          <p className="responsive-setting-label">
                            {__("Color 2", "responsive-block-editor-addons")}
                            <span className="components-base-control__label">
                              <span
                                className="component-color-indicator"
                                style={{
                                  backgroundColor: gradientOverlayColor2,
                                }}
                              ></span>
                            </span>
                          </p>
                          <ColorPalette
                            value={gradientOverlayColor2}
                            onChange={(colorValue) =>
                              setAttributes({
                                gradientOverlayColor2: colorValue,
                              })
                            }
                            allowReset
                          />
                          <RangeControl
                            label={__("Location 2", "responsive-block-editor-addons")}
                            value={gradientOverlayLocation2}
                            onChange={(value) =>
                              setAttributes({ gradientOverlayLocation2: value })
                            }
                            min={0}
                            max={100}
                            allowReset
                          />
                          <SelectControl
                            label={__("Type", "responsive-block-editor-addons")}
                            value={gradientOverlayType}
                            onChange={(value) =>
                              setAttributes({ gradientOverlayType: value })
                            }
                            options={[
                              { value: "linear", label: __("Linear", "responsive-block-editor-addons") },
                              { value: "radial", label: __("Radial", "responsive-block-editor-addons") },
                            ]}
                          />
                          {"linear" == gradientOverlayType && (
                            <RangeControl
                              label={__("Angle", "responsive-block-editor-addons")}
                              value={gradientOverlayAngle}
                              onChange={(value) =>
                                setAttributes({ gradientOverlayAngle: value })
                              }
                              min={0}
                              max={360}
                              allowReset
                            />
                          )}
                          {"radial" == gradientOverlayType && (
                            <SelectControl
                              label={__("Type", "responsive-block-editor-addons")}
                              value={gradientOverlayPosition}
                              onChange={(value) =>
                                setAttributes({
                                  gradientOverlayPosition: value,
                                })
                              }
                              options={[
                                {
                                  value: "center center",
                                  label: __("Center Center", "responsive-block-editor-addons"),
                                },
                                {
                                  value: "center left",
                                  label: __("Center Left", "responsive-block-editor-addons"),
                                },
                                {
                                  value: "center right",
                                  label: __("Center Right", "responsive-block-editor-addons"),
                                },
                                {
                                  value: "top center",
                                  label: __("Top Center", "responsive-block-editor-addons"),
                                },
                                { value: "top left", label: __("Top Left", "responsive-block-editor-addons") },
                                { value: "top right", label: __("Top Right", "responsive-block-editor-addons") },
                                {
                                  value: "bottom center",
                                  label: __("Bottom Center", "responsive-block-editor-addons"),
                                },
                                {
                                  value: "bottom left",
                                  label: __("Bottom Left", "responsive-block-editor-addons"),
                                },
                                {
                                  value: "bottom right",
                                  label: __("Bottom Right", "responsive-block-editor-addons"),
                                },
                              ]}
                            />
                          )}
                        </Fragment>
                      )}
                    </Fragment>
                  )}
                </Fragment>
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
          <InspectorTab key={"advance"}></InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
