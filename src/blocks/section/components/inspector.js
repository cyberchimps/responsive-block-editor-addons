/**
 * Inspector Controls
 */

import BoxShadowControl from "../../../utils/components/box-shadow";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import VideoBackgroundControl from "../../../settings-components/BlockBackgroundSettings/VideoBackgroundSettings";
import SectionBlockBorderHelperControl from "../../../settings-components/SectionBlockBorderSettings";
import ColorBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import GradientBackgroundControl from "../../../settings-components/BlockBackgroundSettings/GradientBackgroundSettings";
import generateCSSUnit from "../../../generateCSSUnit";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import { RadioControl} from "@wordpress/components";
import RbeaBackgroundMediaControl from "../../../settings-components/BlockBackgroundSettings/RbeaBackgroundImageSettings";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaInlineTabRadioControl from "../../../utils/components/rbea-inline-radio-tab-control";
import RbeaAngleRangeControl from "../../../utils/components/rbea-angle-range-control";
import RbeaMediaUploadControl from "../../../utils/components/rbea-media-upload-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";



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
        z_indexMobile,
        z_indexTablet,
        align,
        imagePositionTab,
        imageSizeTab,
        backgroundSizeTablet,
        backgroundSizeMobile,
				hideWidget,
				hideWidgetTablet,
				hideWidgetMobile,
        blockIsMarginControlConnected,
        blockIsPaddingControlConnected,
      },
      setAttributes,
    } = this.props;

    const blockMarginResetValues = {
      marginTop: 10,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginTabletTop: 10,
      marginTabletRight: 0,
      marginTabletBottom: 0,
      marginTabletLeft: 0,
      marginMobileTop: 10,
      marginMobileRight: 0,
      marginMobileBottom: 0,
      marginMobileLeft: 0,
    }

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

    const imagePositionOptions = [
      { value: "top left", label: <div className = "rbea-background-image-positon-control-option">{__("Top Left", "responsive-block-editor-addons")}</div> },
      { value: "top center", label: <div className = "rbea-background-image-positon-control-option">{__("Top Center", "responsive-block-editor-addons")}</div> },
      { value: "top right", label: <div className = "rbea-background-image-positon-control-option">{__("Top Right", "responsive-block-editor-addons")}</div> },
      { value: "center left", label: <div className = "rbea-background-image-positon-control-option">{__("Center Left", "responsive-block-editor-addons")}</div> },
      { value: "center center", label: <div className = "rbea-background-image-positon-control-option">{__("Center Center", "responsive-block-editor-addons")}</div> },
      { value: "center right", label: <div className = "rbea-background-image-positon-control-option">{__("Center Right", "responsive-block-editor-addons")}</div> },
      { value: "bottom left", label: <div className = "rbea-background-image-positon-control-option">{__("Bottom Left", "responsive-block-editor-addons")}</div> },
      { value: "bottom center", label: <div className = "rbea-background-image-positon-control-option">{__("Bottom Center", "responsive-block-editor-addons")}</div> },
      { value: "bottom right", label: <div className = "rbea-background-image-positon-control-option">{__("Bottom Right", "responsive-block-editor-addons")}</div> },
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

    let getFixedOptions = (_options) => {
      return _options.map((option) => {
        return {
          label: (
            <div className="responsive-blocks-editor-addons-design-panel-item">
              <div className="responsive-blocks-editor-addons-design-panel-item__svg">
                  {"color" == option.label && <svg className = "rbea-radio-inline-tab-control-icons" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_9_424)">
                      <path d="M5.87166 10.8752C4.46119 10.9659 3.18115 11.5031 2.45482 13.417C2.37221 13.6354 2.17357 13.7679 1.94189 13.7679C1.55131 13.7679 0.343691 12.7951 -0.000488281 12.5603C-0.000136719 15.4554 1.33334 18 4.49986 18C7.16682 18 8.99986 16.4612 8.99986 13.7746C8.99986 13.6652 8.97701 13.5608 8.96576 13.4536L5.87166 10.8752ZM16.0976 0C15.5646 0 15.065 0.235898 14.6839 0.57832C7.49764 6.99785 6.74986 7.14867 6.74986 9.03832C6.74986 9.51996 6.86412 9.9791 7.05678 10.3989L9.30045 12.2685C9.55393 12.3318 9.81514 12.375 10.0876 12.375C12.2712 12.375 13.5368 10.7764 17.5112 3.35883C17.7706 2.85434 17.9999 2.30941 17.9999 1.74199C17.9999 0.725625 17.0858 0 16.0976 0Z" fill="#666666"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_9_424">
                        <rect width="18" height="18" fill="white"/>
                      </clipPath>
                    </defs>
                    </svg>
                  }
                  {"gradient" == option.label && <svg className = "rbea-radio-inline-tab-control-icons" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="7" stroke="#666666" stroke-width="2"/>
                      <path d="M13.773 4.22703C12.5071 2.96116 10.7902 2.25 9 2.25C7.20979 2.25 5.4929 2.96116 4.22703 4.22703C2.96116 5.4929 2.25 7.20979 2.25 9C2.25 10.7902 2.96116 12.5071 4.22703 13.773L9 9L13.773 4.22703Z" fill="#666666"/>
                    </svg>
                  }
                  {"image" == option.label && <svg className = "rbea-radio-inline-tab-control-image-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.40796 2.96237C1.5 4.06872 1.5 5.71246 1.5 8.99995C1.5 12.2874 1.5 13.9312 2.40796 15.0375C2.57418 15.2401 2.75989 15.4258 2.96243 15.592C4.06878 16.4999 5.71252 16.4999 9 16.4999C12.2875 16.4999 13.9312 16.4999 15.0376 15.592C15.2401 15.4258 15.4258 15.2401 15.592 15.0375C16.5 13.9312 16.5 12.2874 16.5 8.99995C16.5 6.55172 16.5 5.0151 16.125 3.93316V12.7499C15.4047 12.7499 14.7139 12.4638 14.2045 11.9545L13.6408 11.3907C13.4303 11.1803 13.3251 11.0751 13.2256 10.9979C12.5043 10.4385 11.4957 10.4385 10.7744 10.9979C10.6749 11.0751 10.5697 11.1803 10.3593 11.3907L10.3592 11.3907L10.2744 11.4756L10.2744 11.4756C10.0702 11.6797 9.96817 11.7818 9.87743 11.84C9.4287 12.128 8.83295 12.0133 8.52327 11.5792C8.46064 11.4914 8.40378 11.3588 8.29005 11.0934L8.25 10.9999C7.95123 10.3028 7.80184 9.95424 7.62182 9.73474C7.01062 8.98947 5.95482 8.78614 5.11055 9.25111C4.86189 9.38805 4.59374 9.65621 4.05742 10.1925L4.05742 10.1925L2.625 11.6249V2.71887C2.54942 2.79701 2.477 2.87824 2.40796 2.96237Z" fill="#666666"/>
                    <path className = "middle-path" d="M3.18097 14.4032L2.41146 15.0347L3.18097 14.4032C2.89744 14.0577 2.70892 13.5851 2.60658 12.7193C2.50164 11.8315 2.5 10.6682 2.5 9C2.5 7.33176 2.50164 6.16851 2.60658 5.28068C2.70892 4.41492 2.89744 3.9423 3.18097 3.59682C3.30563 3.44492 3.44492 3.30563 3.59682 3.18097C3.9423 2.89744 4.41492 2.70892 5.28068 2.60658C6.16851 2.50164 7.33176 2.5 9 2.5C10.6682 2.5 11.8315 2.50164 12.7193 2.60658C13.5851 2.70892 14.0577 2.89744 14.4032 3.18097L15.0262 2.42176L14.4032 3.18097C14.5551 3.30563 14.6944 3.44492 14.819 3.59682C15.1026 3.9423 15.2911 4.41492 15.3934 5.28068C15.4984 6.16851 15.5 7.33176 15.5 9C15.5 10.6682 15.4984 11.8315 15.3934 12.7193C15.2911 13.5851 15.1026 14.0577 14.819 14.4032C14.6944 14.5551 14.5551 14.6944 14.4032 14.819C14.0577 15.1026 13.5851 15.2911 12.7193 15.3934C11.8315 15.4984 10.6682 15.5 9 15.5C7.33176 15.5 6.16851 15.4984 5.28068 15.3934C4.41492 15.2911 3.9423 15.1026 3.59682 14.819C3.44492 14.6944 3.30563 14.5551 3.18097 14.4032Z" stroke="#666666" stroke-width="2"/>
                    <circle cx="11.25" cy="6.75" r="1.5" fill="#666666"/>
                    </svg>
                  }
                  {"video" == option.label && <svg className = "rbea-radio-inline-tab-control-icons" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75ZM8.53277 6.24043L11.9265 8.12584C12.6123 8.50685 12.6123 9.49315 11.9265 9.87416L8.53277 11.7596C7.73293 12.2039 6.75 11.6256 6.75 10.7106V7.28942C6.75 6.37444 7.73293 5.79607 8.53277 6.24043Z" fill="#666666"/>
                    </svg>
                  }
              </div>
            </div>
          ),
          value: option.value,
        };
      });
    }

    // Image Overlay type Options label
    const overlayTypeOptions = [
      { label: "color", value: "color" },
      { label: "gradient", value: "gradient" },
    ];
    const overlayTypeFixedOptions = getFixedOptions(overlayTypeOptions);


    // Background Type Options

    let backgroundTypeControl = () => {

      const backgroundTypeOptions = [
        { label: "color", value: "color" },
        { label: "gradient", value: "gradient" },
        { label: "image",value: "image" },
        { label: "video", value: "video" },
      ];

      const fixedOptions = getFixedOptions(backgroundTypeOptions);

      return (
        <RbeaInlineTabRadioControl
          label = {"Type"}
          selectedValue={backgroundType}
          options={fixedOptions}
          onChange={(value) => setAttributes({ backgroundType: value })}
        />
      );
    }

    let imagePositionControl = (device) => {

      let image_url = backgroundImage || '';

      return (
        <Fragment>
        <div className = "rbea-background-image-positon-control"
        style={{
          backgroundImage: `url(${image_url})`,
          backgroundSize: 'cover',
          backgroundPosition:  'center',
        }}>
          <RadioControl 
              className = "rbea-background-image-positon-control-options"
              selected={backgroundPosition}
              options={imagePositionOptions}
              onChange={(value) =>
                setAttributes({ backgroundPosition: value })
              }
          />
        </div>
      </Fragment>
      )
    }
    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              {align != "full" && (
                <RbeaRangeControl
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
                            <RbeaRangeControl
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
                            <RbeaRangeControl
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
                            <RbeaRangeControl
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
              <TabPanel
                  className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin rbea-Z-index-control-tabs"
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
                        label={__("Z-index", "responsive-block-editor-addons")}
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
                        label={__("Z-index", "responsive-block-editor-addons")}
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
                        label={__("Z-index", "responsive-block-editor-addons")}
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
          <InspectorTab key={"style"}>
          <PanelBody
              title={__("Background", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              {backgroundTypeControl()}
              {"color" == backgroundType && (
                <Fragment>
                  <RbeaColorControl
                    label = {"Color"}
                    colorValue={backgroundColor}
                    onChange={(newColor) => setAttributes({ backgroundColor: newColor })}
                    resetColor={() => setAttributes({ backgroundColor: "" })}
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
                    <RbeaMediaUploadControl
                      label={__('Enable Background Image', 'responsive-block-editor-addons')}
                      value={{
                          enable: backgroundImage ? true : false,
                          media_url: backgroundImage || '',
                      }}
                      onChange={(newValue) => {
                          setAttributes({
                              backgroundImage: newValue.media_url,
                          });
                      }}
                      mediaType={'image'}
                    />
                  {backgroundImage && (
                    <Fragment>
                      <div className = "rbea-tab-selector-label-wrapper">
                      <label className  = "rbea-background-image-positon-control-label">{__("Image Position", "responsive-block-editor-addons")}</label>
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
                      </div>
                      {imagePositionTab === "desktop" && imagePositionControl("Desktop")}
                      {imagePositionTab === "tablet" && imagePositionControl("Tablet")}
                      {imagePositionTab === "mobile" && imagePositionControl("Mobile")}
                      <RbeaTabRadioControl
                        label={__("Attachment", "responsive-block-editor-addons")}
                        selectedValue={backgroundAttachment}
                        onChange={(value) =>
                          setAttributes({ backgroundAttachment: value })
                        }
                        options={[
                          { value: "fixed", label: __("Fixed", "responsive-block-editor-addons") },
                          { value: "scroll", label: __("Scroll", "responsive-block-editor-addons") },
                        ]}
                      />
                     <div className = "rbea-tab-selector-label-wrapper">
                     <label>{__("Size", "responsive-block-editor-addons")}</label>
                      <TabPanel
                        className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin rbea-section-size-control-tab-selector"
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
                      </div>
                      {imageSizeTab === "desktop" && (
                        <>
                        <RbeaTabRadioControl
                          label={__("", "responsive-block-editor-addons")}
                          selectedValue={backgroundSize}
                          onChange={(value) =>
                            setAttributes({ backgroundSize: value })
                          }
                          options={[
                            { value: "auto", label: __("Auto", "responsive-block-editor-addons") },
                            { value: "cover", label: __("Cover", "responsive-block-editor-addons") },
                            { value: "contain", label: __("Contain", "responsive-block-editor-addons") },
                          ]}
                        />
                      </>
                      )}
                      {imageSizeTab === "tablet" && (
                        <RbeaTabRadioControl
                        label={__("", "responsive-block-editor-addons")}
                        selectedValuevalue={backgroundSizeTablet}
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
                        <RbeaTabRadioControl
                          label={__("", "responsive-block-editor-addons")}
                          selectedValue={backgroundSizeMobile}
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
                      <div className = "rbea-repeat-selector-wrapper">
                      <RbeaTabRadioControl
                        label={__("Repeat", "responsive-block-editor-addons")}
                        selectedValue={backgroundRepeat}
                        onChange={(value) =>
                          setAttributes({ backgroundRepeat: value })
                        }
                        options={[
                          { value: "no-repeat", label: __("No Repeat", "responsive-block-editor-addons") },
                          { value: "repeat", label: __("Repeat", "responsive-block-editor-addons") },
                          { value: "repeat-x", label: __("Repeat-x", "responsive-block-editor-addons") },
                          { value: "repeat-y", label: __("Repeat-y", "responsive-block-editor-addons") },
                        ]}
                      /></div>

                      <RbeaInlineTabRadioControl
                         label={__("Overlay Type", "responsive-block-editor-addons")}
                         value={overlayType}
                         onChange={(value) =>
                           setAttributes({ overlayType: value })
                         }
                         options={overlayTypeFixedOptions}
                      />
                      {overlayType == "color" && (
                        <Fragment>
                          <RbeaColorControl
                            label = {__("Overlay Color", "responsive-block-editor-addons")}
                            colorValue={backgroundImageColor}
                            onChange={(colorValue) =>
                              setAttributes({
                                backgroundImageColor: colorValue,
                              })
                            }
                            resetColor={() => setAttributes({ backgroundImageColor: "" })}
                          />
                        </Fragment>
                      )}

                      {"gradient" == overlayType && (
                        <Fragment>
                          <RbeaColorControl
                            label = {"Color 1"}
                            colorValue={gradientOverlayColor1}
                            onChange={(colorValue) =>
                              setAttributes({
                                gradientOverlayColor1: colorValue,
                              })
                            }
                            resetColor={() => setAttributes({ gradientOverlayColor1: "" })}
                          />
                          <RbeaRangeControl
                            label={__("Location 1", "responsive-block-editor-addons")}
                            value={gradientOverlayLocation1}
                            onChange={(value) =>
                              setAttributes({ gradientOverlayLocation1: value })
                            }
                            min={0}
                            max={100}
                          />
                          <RbeaColorControl
                            label = {"Color 2"}
                            colorValue={gradientOverlayColor2}
                            onChange={(colorValue) =>
                              setAttributes({
                                gradientOverlayColor2: colorValue,
                              })
                            }
                            resetColor={() => setAttributes({ gradientOverlayColor2: "" })}
                          />
                          <RbeaRangeControl
                            label={__("Location 2", "responsive-block-editor-addons")}
                            value={gradientOverlayLocation2}
                            onChange={(value) =>
                              setAttributes({ gradientOverlayLocation2: value })
                            }
                            min={0}
                            max={100}
                          />
                          <RbeaTabRadioControl
                            label={__("Type", "responsive-block-editor-addons")}
                            selectedValue={gradientOverlayType}
                            onChange={(value) =>
                              setAttributes({ gradientOverlayType: value })
                            }
                            options={[
                              { value: "linear", label: __("Linear", "responsive-block-editor-addons") },
                              { value: "radial", label: __("Radial", "responsive-block-editor-addons") },
                            ]}
                          />
                          {"linear" == gradientOverlayType && (
                            <RbeaAngleRangeControl
                              label={__("Angle", "responsive-block-editor-addons")}
                              value={gradientOverlayAngle}
                              onChange={(value) =>
                                setAttributes({ gradientOverlayAngle: value })
                              }
                              min={0}
                              max={360}
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
                <>
                    <RbeaMediaUploadControl
                      label={__('Enable Background Video', 'responsive-block-editor-addons')}
                      value={{
                          enable: backgroundVideo ? true : false,
                          media_url: backgroundVideo || '',
                      }}
                      onChange={(newValue) => { 
                          setAttributes({
                              backgroundVideo: newValue.media_url,
                          });
                      }}
                      mediaType={'video'}
                    />
                </>
              )}
              <RbeaRangeControl
                label={__("Opacity", "responsive-block-editor-addons")}
                value={opacity}
                onChange={(value) =>
                  setAttributes({ opacity: value !== undefined ? value : 20 })
                }
                min={0}
                max={100}
              />
            </PanelBody>
            <PanelBody
              title={__("Border", "responsive-block-editor-addons")}
              initialOpen={false}
            >
                <SectionBlockBorderHelperControl
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
            </PanelBody>
            <PanelBody
              title={__("Box Shadow", "responsive-block-editor-addons")}
              initialOpen={false}
            >
      
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
      
              <ResponsiveNewMarginControl
                attrNameTemplate="block%s"
                resetValues={blockMarginResetValues}
                {...this.props}
              />
              <ResponsiveNewPaddingControl
                attrNameTemplate="block%s"
                resetValues={blockPaddingResetValues}
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
          </InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
