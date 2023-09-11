/**
 * Inspector Controls
 */

import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import BoxShadowControl from "../../../utils/components/box-shadow";
import icons from "./../../../utils/components/icons";
import renderSVG from "../../../renderIcon";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import BoxShadowControlHelper from "../../../utils/components/box-shadow-helper";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import ImageBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ImageBackgroundSettings";
import ColorBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import ResponsiveMarginControl from "../../../settings-components/ResponsiveSpacingSettings/ResponsiveMarginControl";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ButtonSettingsControl from "../../../settings-components/ButtonSettings";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const {
  InspectorControls,
  InspectorAdvancedControls,
  PanelColorSettings,
  RichText,
  AlignmentToolbar,
  BlockControls,
  MediaUpload,
  ColorPalette,
} = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  ToggleControl,
  RangeControl,
  SelectControl,
  TextControl,
  BaseControl,
  Button,
  ButtonGroup,
  Icon,
  TabPanel,
  Dashicon,
} = wp.components;

let svg_icons = Object.keys(ResponsiveBlocksIcon);

const showAnimationDirections = (animation) => {
  let directionOptions =
    animation === "rotate"
      ? [
          { value: "Left", label: "DownLeft" },
          { value: "DownRight", label: "DownRight" },
          { value: "UpLeft", label: "UpLeft" },
          { value: "UpRight", label: "UpRight" },
        ]
      : animation === "slide" ||
        animation === "flip" ||
        animation === "fold"
      ? [
          { value: "Left", label: "Left" },
          { value: "Right", label: "Right" },
          { value: "Up", label: "Up" },
          { value: "Down", label: "Down" },
        ]
      : [
          { value: "Left", label: "Left" },
          { value: "Right", label: "Right" },
          { value: "Center", label: "Center" },
          { value: "Up", label: "Up" },
          { value: "Down", label: "Down" },
        ];
  return directionOptions;
};
/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.getIfbIcon = this.getIfbIcon.bind(this);
    this.toggleTarget = this.toggleTarget.bind(this);
    this.toggleBoxTarget = this.toggleBoxTarget.bind(this);
    this.toggleResponsive = this.toggleResponsive.bind(this);
    this.getCtaicon = this.getCtaicon.bind(this);
    this.onRemoveImage = this.onRemoveImage.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
  }

  getIfbIcon(value) {
    this.props.setAttributes({ icon: value });
  }

  getCtaicon(value) {
    this.props.setAttributes({ ctaIcon: value });
  }

  /*
   * Event to set Image as while adding.
   */
  onSelectImage(media) {
    const { iconImage } = this.props.attributes;
    const { setAttributes } = this.props;

    if (!media || !media.url) {
      setAttributes({ iconImage: null });
      return;
    }

    if (!media.type || "image" !== media.type) {
      setAttributes({ iconImage: null });
      return;
    }
    setAttributes({ iconImage: media });
  }

  /*
   * Event to set Image as null while removing.
   */
  onRemoveImage() {
    const { setAttributes } = this.props;

    setAttributes({ iconImage: null });
  }

  /**
   * Function Name: toggleTarget.
   */
  toggleTarget() {
    const { buttonTarget } = this.props.attributes;
    const { setAttributes } = this.props;

    setAttributes({ buttonTarget: !buttonTarget });
  }

  toggleBoxTarget() {
    const { resBoxTarget } = this.props.attributes;
    const { setAttributes } = this.props;

    setAttributes({ resBoxTarget: !resBoxTarget });
  }

  /**
   * Function Name: toggleResponsive.
   */
  toggleResponsive() {
    const { responsiveDesign } = this.props.attributes;
    const { setAttributes } = this.props;

    setAttributes({ responsiveDesign: !responsiveDesign });
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        resheadingAlign,
        resheadingColor,
        ressubheadingColor,
        resprefixColor,
        resprefixFontSize,
        resprefixFontWeight,
        resprefixLineHeight,
        resheadingTag,
        resheadFontFamily,
        resheadFontSize,
        resheadFontSizeMobile,
        resheadFontSizeTablet,
        resheadFontWeight,
        resheadLineHeight,
        ressubHeadFontFamily,
        ressubHeadFontSize,
        ressubHeadFontSizeTablet,
        ressubHeadFontSizeMobile,
        ressubHeadFontWeight,
        ressubHeadLineHeight,
        resseparatorWidthType,
        resseperatorSpace,
        resheadSpace,
        resheadSpaceMobile,
        resheadSpaceTablet,
        ressubHeadSpace,
        ressubHeadSpaceMobile,
        ressubHeadSpaceTablet,
        icon,
        iconColor,
        resIconSize,
        imgiconPosition,
        source_type,
        ressourceAlign,
        ressourceAlignMobile,
        ressourceAlignTablet,
        resseperatorPosition,
        resseperatorStyle,
        resseperatorWidth,
        resseperatorColor,
        resseperatorThickness,
        resctaType,
        resctaText,
        resctaLink,
        buttonTarget,
        ctaIcon,
        resctaLinkColor,
        resctaFontSize,
        resctaFontWeight,
        ctaColor,
        ctaBackColor,
        ctaVpadding,
        ctaHpadding,
        ctaBorderColor,
        resprefixSpace,
        resprefixSpaceMobile,
        resprefixSpaceTablet,
        iconLeftMargin,
        iconRightMargin,
        iconTopMargin,
        iconBottomMargin,
        iconLeftMarginMobile,
        iconRightMarginMobile,
        iconTopMarginMobile,
        iconBottomMarginMobile,
        iconLeftMarginTablet,
        iconRightMarginTablet,
        iconTopMarginTablet,
        iconBottomMarginTablet,
        iconImage,
        imageSize,
        imageWidth,
        imageWidthTablet,
        imageWidthMobile,
        imageWidthType,
        stack,
        resshowPrefix,
        resshowTitle,
        resshowDesc,
        inheritFromTheme,
        blockBorderStyle,
        blockBorderWidth,
        blockBorderRadius,
        blockBorderColor,
        boxShadowColor,
        boxShadowHOffset,
        boxShadowVOffset,
        boxShadowBlur,
        boxShadowSpread,
        boxShadowPosition,
        imageBoxShadowColor,
        imageBoxShadowHOffset,
        imageBoxShadowVOffset,
        imageBoxShadowBlur,
        imageBoxShadowSpread,
        imageBoxShadowPosition,
        backgroundColor,
        contentPadding,
        contentPaddingMobile,
        contentPaddingTablet,
        opacity,
        dimRatio,
        imgURL,
        imgID,
        ctaHoverColor,
        ctaHoverBackColor,
        ctaHoverBorderColor,
        imagePosition,
        imageRepeat,
        thumbsize,
        sepSpace,
        sepSpaceMobile,
        sepSpaceTablet,
        icon_color,
        icon_hcolor,
        resImageBorderColor,
        resImageBorderRadius,
        resImageBorderWidth,
        resImageBorderStyle,
        alignment,
        imageopacity,
        ctaTextFontFamily,
        ctaTextFontSize,
        ctaTextFontSizeMobile,
        ctaTextFontSizeTablet,
        ctaTextFontWeight,
        ctaTextLineHeight,
        ctaBottomMargin,
        ctaBottomMarginMobile,
        ctaBottomMarginTablet,
        resBoxLink,
        resBoxTarget,
        hoverboxShadowColor,
        hoverboxShadowHOffset,
        hoverboxShadowVOffset,
        hoverboxShadowBlur,
        hoverboxShadowSpread,
        hoverboxShadowPosition,
        iconBackgroundColor,
        iconBackgroundHoverColor,
        iconBackgroundType,
        iconBorderRadius,
        iconBorderWidth,
        iconPadding,
        backgroundImage,
        backgroundImagePosition,
        backgroundAttachment,
        backgroundImageRepeat,
        backgroundImageSize,
        ctaBorderStyle,
        ctaBorderWidth,
        ctaBorderRadius,
        ctaHpaddingTablet,
        ctaHpaddingMobile,
        ctaVpaddingTablet,
        ctaVpaddingMobile,
        buttonbackgroundColor1,
        buttonbackgroundColor2,
        buttoncolorLocation1,
        buttoncolorLocation2,
        buttongradientDirection,
        buttonbackgroundType,
        buttonHbackgroundType,
        zIndex,
        animationName,
        animationDirection,
        animationRepeat,
        animationDuration,
        animationDelay,
        animationCurve,
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
      setAttributes({ backgroundColor: value });

    // Icon properties.
    const icon_props = {
      icons: svg_icons,
      value: icon,
      onChange: this.getIfbIcon,
      isMulti: false,
      renderFunc: renderSVG,
      noSelectedPlaceholder: __(
        "Select Icon",
        "responsive-block-editor-addons"
      ),
    };

    // Settings for icon.
    const iconControls = (
      <Fragment>
        <FontIconPicker {...icon_props} />
        <RangeControl
          label={__("Icon Size", "responsive-block-editor-addons")}
          value={resIconSize}
          onChange={(value) =>
            setAttributes({ resIconSize: value !== undefined ? value : 40 })
          }
          min={10}
          max={300}
          beforeIcon=""
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
              style={{ backgroundColor: icon_hcolor }}
            ></span>
          </span>
        </p>
        <ColorPalette
          value={icon_hcolor}
          onChange={(value) => setAttributes({ icon_hcolor: value })}
          allowReset
        />
        <SelectControl
          label={__("Background Type", "responsive-block-editor-addons")}
          value={iconBackgroundType}
          onChange={(value) => setAttributes({ iconBackgroundType: value })}
          options={[
            { value: "none", label: __("None", "responsive-block-editor-addons") },
            { value: "solid", label: __("Solid", "responsive-block-editor-addons") },
            { value: "outline", label: __("Outline", "responsive-block-editor-addons") },
          ]}
        />
        {"outline" === iconBackgroundType && (
          <Fragment>
            <p className="responsive-block-editor-addons-setting-label">
              {__("Border Color", "responsive-block-editor-addons")}
              <span className="components-base-control__label">
                <span
                  className="component-color-indicator"
                  style={{ backgroundColor: iconBackgroundColor }}
                ></span>
              </span>
            </p>
            <ColorPalette
              value={iconBackgroundColor}
              onChange={(value) =>
                setAttributes({ iconBackgroundColor: value })
              }
              allowReset
            />
            <p className="responsive-block-editor-addons-setting-label">
              {__("Border Hover Color", "responsive-block-editor-addons")}
              <span className="components-base-control__label">
                <span
                  className="component-color-indicator"
                  style={{ backgroundColor: iconBackgroundHoverColor }}
                ></span>
              </span>
            </p>
            <ColorPalette
              value={iconBackgroundHoverColor}
              onChange={(value) =>
                setAttributes({ iconBackgroundHoverColor: value })
              }
              allowReset
            />
            <RangeControl
              label={__("Icon Border Radius", "responsive-block-editor-addons")}
              value={iconBorderRadius}
              onChange={(value) => setAttributes({ iconBorderRadius: value })}
              min={0}
              max={100}
            />
            <RangeControl
              label={__("Icon Border Width", "responsive-block-editor-addons")}
              value={iconBorderWidth}
              onChange={(value) => setAttributes({ iconBorderWidth: value })}
              min={0}
              max={100}
            />
            <RangeControl
              label={__(
                "Icon Background Padding",
                "responsive-block-editor-addons"
              )}
              value={iconPadding}
              onChange={(value) => setAttributes({ iconPadding: value })}
              min={0}
              max={100}
            />
          </Fragment>
        )}
        {"solid" === iconBackgroundType && (
          <Fragment>
            <p className="responsive-block-editor-addons-setting-label">
              {__("Background Color", "responsive-block-editor-addons")}
              <span className="components-base-control__label">
                <span
                  className="component-color-indicator"
                  style={{ backgroundColor: iconBackgroundColor }}
                ></span>
              </span>
            </p>
            <ColorPalette
              value={iconBackgroundColor}
              onChange={(value) =>
                setAttributes({ iconBackgroundColor: value })
              }
              allowReset
            />
            <p className="responsive-block-editor-addons-setting-label">
              {__("Background Hover Color", "responsive-block-editor-addons")}
              <span className="components-base-control__label">
                <span
                  className="component-color-indicator"
                  style={{ backgroundColor: iconBackgroundHoverColor }}
                ></span>
              </span>
            </p>
            <ColorPalette
              value={iconBackgroundHoverColor}
              onChange={(value) =>
                setAttributes({ iconBackgroundHoverColor: value })
              }
              allowReset
            />
            <RangeControl
              label={__(
                "Icon Background  Radius",
                "responsive-block-editor-addons"
              )}
              value={iconBorderRadius}
              onChange={(value) => setAttributes({ iconBorderRadius: value })}
              min={0}
              max={100}
            />
            <RangeControl
              label={__(
                "Icon Background Padding",
                "responsive-block-editor-addons"
              )}
              value={iconPadding}
              onChange={(value) => setAttributes({ iconPadding: value })}
              min={0}
              max={100}
            />
          </Fragment>
        )}
      </Fragment>
    );

    let image_name = __("Select Image", "responsive-block-editor-addons");
    if (iconImage) {
      if (iconImage.url == null || iconImage.url == "") {
        image_name = __("Select Image", "responsive-block-editor-addons");
      } else {
        image_name = __("Replace Image", "responsive-block-editor-addons");
      }
    }

    // Update color values
    const onChangeiconColor = (value) => setAttributes({ iconColor: value });
    var advancedControls;
    var boxShadowAdvancedControls;
    var resetBoxShadowAdvancedControls;
    advancedControls = (
      <Fragment>
        <p className="responsive-block-editor-addons-setting-label">
          {__("Color", "responsive-block-editor-addons")}
          <span className="components-base-control__label">
            <span
              className="component-color-indicator"
              style={{ backgroundColor: imageBoxShadowColor }}
            ></span>
          </span>
        </p>
        <ColorPalette
          value={imageBoxShadowColor}
          onChange={(colorValue) =>
            setAttributes({
              imageBoxShadowColor: colorValue !== undefined ? colorValue : "",
            })
          }
          allowReset
        />
        <h2>{__("Horizontal", "responsive-block-editor-addons")}</h2>
        <RangeControl
          value={imageBoxShadowHOffset}
          onChange={(value) =>
            setAttributes({
              imageBoxShadowHOffset: value !== undefined ? value : 0,
            })
          }
          min={-100}
          max={100}
          allowReset
        />
        <h2>{__("Vertical", "responsive-block-editor-addons")}</h2>
        <RangeControl
          value={imageBoxShadowVOffset}
          onChange={(value) =>
            setAttributes({
              imageBoxShadowVOffset: value !== undefined ? value : 0,
            })
          }
          min={-100}
          max={100}
          allowReset
        />
        <h2>{__("Blur", "responsive-block-editor-addons")}</h2>
        <RangeControl
          value={imageBoxShadowBlur}
          onChange={(value) =>
            setAttributes({
              imageBoxShadowBlur: value !== undefined ? value : 0,
            })
          }
          min={0}
          max={100}
          allowReset
        />
        <h2>{__("Spread", "responsive-block-editor-addons")}</h2>
        <RangeControl
          value={imageBoxShadowSpread}
          onChange={(value) =>
            setAttributes({
              imageBoxShadowSpread: value !== undefined ? value : 0,
            })
          }
          min={0}
          max={100}
          allowReset
        />
        <SelectControl
          label={__("Position", "responsive-block-editor-addons")}
          value={imageBoxShadowPosition}
          onChange={(value) => setAttributes({ imageBoxShadowPosition: value })}
          options={[
            { value: "inset", label: __("Inset", "responsive-block-editor-addons") },
            { value: "outset", label: __("Outset", "responsive-block-editor-addons") },
          ]}
        />
      </Fragment>
    );

    const imageControls = (
      <Fragment>
        <BaseControl
          className="editor-bg-image-control"
          label={__("Image", "responsive-block-editor-addons")}
        >
          <MediaUpload
            title={__("Select Image", "responsive-block-editor-addons")}
            onSelect={this.onSelectImage}
            allowedTypes={["image"]}
            value={iconImage}
            render={({ open }) => (
              <Button isDefault onClick={open}>
                {image_name}
              </Button>
            )}
          />
          {iconImage && iconImage.url !== "null" && iconImage.url !== "" && (
            <Button
              className="responsive-block-editor-addons-rm-btn"
              onClick={this.onRemoveImage}
              isLink
              isDestructive
            >
              {__("Remove Image", "responsive-block-editor-addons")}
            </Button>
          )}
          {iconImage && iconImage.url !== "null" && iconImage.url !== "" && (
            <RangeControl
              label={__("Image Opacity", "responsive-block-editor-addons")}
              value={imageopacity}
              onChange={(value) =>
                setAttributes({
                  imageopacity: value !== undefined ? value : 100,
                })
              }
              min={0}
              max={100}
              allowReset
            />
          )}
        </BaseControl>
        {iconImage && iconImage.url !== "null" && iconImage.url !== "" && (
          <Fragment>
            <ToggleControl
              label={__("Custom Width", "responsive-block-editor-addons")}
              checked={imageWidthType}
              onChange={(value) =>
                setAttributes({ imageWidthType: !imageWidthType })
              }
              help={__(
                "Turn this off to inherit the natural width of Image.",
                "responsive-block-editor-addons"
              )}
            />
            {imageWidthType && (
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
                          label={__(
                            "Width (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={imageWidthMobile}
                          onChange={(value) =>
                            setAttributes({
                              imageWidthMobile: value,
                            })
                          }
                          min={0}
                          max={1000}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RangeControl
                          label={__(
                            "Width (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={imageWidthTablet}
                          onChange={(value) =>
                            setAttributes({
                              imageWidthTablet: value,
                            })
                          }
                          min={0}
                          max={1000}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <RangeControl
                          label={__(
                            "Width (px)",
                            "responsive-block-editor-addons"
                          )}
                          value={imageWidth}
                          onChange={(value) =>
                            setAttributes({
                              imageWidth: value,
                            })
                          }
                          min={0}
                          max={1000}
                          beforeIcon=""
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
            )}
            <PanelBody
              title={__(
                "Image Border Settings",
                "responsive-block-editor-addons"
              )}
              initialOpen={false}
            >
                <BlockBorderHelperControl
                    attrNameTemplate="resImage%s"
                    values={{ radius: resImageBorderRadius, style: resImageBorderStyle, width: resImageBorderWidth, color: resImageBorderColor }}
                    setAttributes={setAttributes}
                    {...this.props}
                />
            </PanelBody>
              <PanelBody
                  title={__("Image Box Shadow", "responsive-block-editor-addons")}
                  initialOpen={false}
              >
                  {advancedControls}
              </PanelBody>
          </Fragment>
        )}
      </Fragment>
    );

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("Image/Icon", "responsive-block-editor-addons")}
            >
              <SelectControl
                label={__("Select Position", "responsive-block-editor-addons")}
                value={imgiconPosition}
                onChange={(value) => setAttributes({ imgiconPosition: value })}
                options={[
                  {
                    value: "above-title",
                    label: __("Above Title", "responsive-block-editor-addons"),
                  },
                  {
                    value: "below-title",
                    label: __("Below Title", "responsive-block-editor-addons"),
                  },
                  {
                    value: "left-title",
                    label: __(
                      "Left of Title",
                      "responsive-block-editor-addons"
                    ),
                  },
                  {
                    value: "right-title",
                    label: __(
                      "Right of Title",
                      "responsive-block-editor-addons"
                    ),
                  },
                  {
                    value: "left",
                    label: __(
                      "Left of Text and Title",
                      "responsive-block-editor-addons"
                    ),
                  },
                  {
                    value: "right",
                    label: __(
                      "Right of Text and Title",
                      "responsive-block-editor-addons"
                    ),
                  },
                ]}
              />
              {(imgiconPosition == "left" || imgiconPosition == "right") && (
                <Fragment>
                  <SelectControl
                    label={__("Stack on", "responsive-block-editor-addons")}
                    value={stack}
                    options={[
                      {
                        value: "none",
                        label: __("None", "responsive-block-editor-addons"),
                      },
                      {
                        value: "tablet",
                        label: __("Tablet", "responsive-block-editor-addons"),
                      },
                      {
                        value: "mobile",
                        label: __("Mobile", "responsive-block-editor-addons"),
                      },
                    ]}
                    help={__(
                      "Note: Choose on what breakpoint the Info Box will stack.", "responsive-block-editor-addons"
                    )}
                    onChange={(value) => setAttributes({ stack: value })}
                  />
                  <p>
                    {__(
                      "Alignment when stacked",
                      "responsive-block-editor-addons"
                    )}
                  </p>
                  <AlignmentToolbar
                    value={alignment}
                    onChange={(value) =>
                      setAttributes({
                        alignment: value,
                      })
                    }
                    controls={["left", "center", "right", "full"]}
                    isCollapsed={false}
                  />
                </Fragment>
              )}
              <hr className="responsive-block-editor-addons-editor__separator" />

              <SelectControl
                label={__("Select Source", "responsive-block-editor-addons")}
                value={source_type}
                onChange={(value) => setAttributes({ source_type: value })}
                options={[
                  {
                    value: "none",
                    label: __("None", "responsive-block-editor-addons"),
                  },
                  {
                    value: "icon",
                    label: __("Icon", "responsive-block-editor-addons"),
                  },
                  {
                    value: "image",
                    label: __("Image", "responsive-block-editor-addons"),
                  },
                ]}
              />

              {imgiconPosition &&
                imgiconPosition !== "above-title" &&
                imgiconPosition !== "below-title" && (
                  <SelectControl
                    label={__(
                      "Vertical Alignment",
                      "responsive-block-editor-addons"
                    )}
                    value={ressourceAlign}
                    onChange={(value) =>
                      setAttributes({ ressourceAlign: value })
                    }
                    options={[
                      {
                        value: "top",
                        label: __("Top", "responsive-block-editor-addons"),
                      },
                      {
                        value: "middle",
                        label: __("Middle", "responsive-block-editor-addons"),
                      },
                    ]}
                  />
                )}

              {(stack === "none" || stack === "mobile") &&
                imgiconPosition &&
                imgiconPosition !== "above-title" &&
                imgiconPosition !== "below-title" && (
                  <SelectControl
                    label={__(
                      "Vertical Alignment Tablet",
                      "responsive-block-editor-addons"
                    )}
                    value={ressourceAlignTablet}
                    onChange={(value) =>
                      setAttributes({ ressourceAlignTablet: value })
                    }
                    options={[
                      {
                        value: "top",
                        label: __("Top", "responsive-block-editor-addons"),
                      },
                      {
                        value: "middle",
                        label: __("Middle", "responsive-block-editor-addons"),
                      },
                    ]}
                  />
                )}

              {stack === "none" &&
                imgiconPosition &&
                imgiconPosition !== "above-title" &&
                imgiconPosition !== "below-title" && (
                  <SelectControl
                    label={__(
                      "Vertical Alignment Mobile",
                      "responsive-block-editor-addons"
                    )}
                    value={ressourceAlignMobile}
                    onChange={(value) =>
                      setAttributes({ ressourceAlignMobile: value })
                    }
                    options={[
                      {
                        value: "top",
                        label: __("Top", "responsive-block-editor-addons"),
                      },
                      {
                        value: "middle",
                        label: __("Middle", "responsive-block-editor-addons"),
                      },
                    ]}
                  />
                )}

              {source_type && source_type == "icon" && iconControls}

              {source_type && source_type == "image" && imageControls}
            </PanelBody>
            <PanelBody
              title={__("Call To Action", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <SelectControl
                label={__("Type", "responsive-block-editor-addons")}
                value={resctaType}
                onChange={(value) => setAttributes({ resctaType: value })}
                options={[
                  {
                    value: "none",
                    label: __("None", "responsive-block-editor-addons"),
                  },
                  {
                    value: "text",
                    label: __("Text", "responsive-block-editor-addons"),
                  },
                  {
                    value: "button",
                    label: __("Button", "responsive-block-editor-addons"),
                  },
                  {
                    value: "complete_box",
                    label: __("Complete Box", "responsive-block-editor-addons"),
                  },
                ]}
              />
              {(resctaType === "text" || resctaType === "button") && (
                <Fragment>
                  <TextControl
                    label={__("Text", "responsive-block-editor-addons")}
                    value={resctaText}
                    onChange={(value) => setAttributes({ resctaText: value })}
                  />
                </Fragment>
              )}
              {resctaType === "text" && (
                <Fragment>
                  <TextControl
                    label={__("Link", "responsive-block-editor-addons")}
                    value={resctaLink}
                    onChange={(value) => setAttributes({ resctaLink: value })}
                  />
                  <ToggleControl
                    label={__(
                      "Open in new Window",
                      "responsive-block-editor-addons"
                    )}
                    checked={buttonTarget}
                    onChange={this.toggleTarget}
                  />
                </Fragment>
              )}
              {resctaType === "complete_box" && (
                <Fragment>
                  <TextControl
                    label={__("Link", "responsive-block-editor-addons")}
                    value={resBoxLink}
                    onChange={(value) => setAttributes({ resBoxLink: value })}
                  />
                  <ToggleControl
                    label={__(
                      "Open in new Window",
                      "responsive-block-editor-addons"
                    )}
                    checked={resBoxTarget}
                    onChange={this.toggleBoxTarget}
                  />
                </Fragment>
              )}
              {resctaType == "button" && (
                <ButtonSettingsControl
                  {...this.props}
                  showMarginControls={false}
                  showBackColorOpacity={false}
                  showGradientHover={false}
                  showTextOpacity={false}
                />
              )}

              {resctaType === "text" && (
                <Fragment>
                  <p className="responsive-block-editor-addons-setting-label">
                    {__("Text Color", "responsive-block-editor-addons")}
                    <span className="components-base-control__label">
                      <span
                        className="component-color-indicator"
                        style={{ backgroundColor: resctaLinkColor }}
                      ></span>
                    </span>
                  </p>
                  <ColorPalette
                    value={resctaLinkColor}
                    onChange={(colorValue) =>
                      setAttributes({ resctaLinkColor: colorValue })
                    }
                    allowReset
                  />
                </Fragment>
              )}
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ResponsiveSpacingControl
                title={"Content Padding"}
                attrNameTemplate="contentPadding%s"
                values={{
                  desktop: contentPadding,
                  tablet: contentPaddingTablet,
                  mobile: contentPaddingMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Prefix Bottom Margin"}
                attrNameTemplate="resprefixSpace%s"
                values={{
                  desktop: resprefixSpace,
                  tablet: resprefixSpaceTablet,
                  mobile: resprefixSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Title Bottom Margin"}
                attrNameTemplate="resheadSpace%s"
                values={{
                  desktop: resheadSpace,
                  tablet: resheadSpaceTablet,
                  mobile: resheadSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Separator Bottom Margin"}
                attrNameTemplate="sepSpace%s"
                values={{
                  desktop: sepSpace,
                  tablet: sepSpaceTablet,
                  mobile: sepSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Description Bottom Margin"}
                attrNameTemplate="ressubHeadSpace%s"
                values={{
                  desktop: ressubHeadSpace,
                  tablet: ressubHeadSpaceTablet,
                  mobile: ressubHeadSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              {resctaType !== "none" && (
                <ResponsiveSpacingControl
                  title={"CTA Bottom Margin"}
                  attrNameTemplate="ctaBottomMargin%s"
                  values={{
                    desktop: ctaBottomMargin,
                    tablet: ctaBottomMarginTablet,
                    mobile: ctaBottomMarginMobile,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
              )}
              {source_type !== "none" && (
                <PanelBody
                  title={__(
                    "Image/Icon Margin",
                    "responsive-block-editor-addons"
                  )}
                  initialOpen={false}
                >
                  <ResponsiveMarginControl
                    attrNameTemplate="icon%s"
                    values={{
                      desktopTop: iconTopMargin,
                      desktopBottom: iconBottomMargin,
                      desktopLeft: iconLeftMargin,
                      desktopRight: iconRightMargin,

                      tabletTop: iconTopMarginTablet,
                      tabletBottom: iconBottomMarginTablet,
                      tabletLeft: iconLeftMarginTablet,
                      tabletRight: iconRightMarginTablet,

                      mobileTop: iconTopMarginMobile,
                      mobileBottom: iconBottomMarginMobile,
                      mobileLeft: iconLeftMarginMobile,
                      mobileRight: iconRightMarginMobile,
                    }}
                    setAttributes={setAttributes}
                    {...this.props}
                  />
                </PanelBody>
              )}
            </PanelBody>
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
              <BoxShadowControlHelper
                setAttributes={setAttributes}
                label={__("Hover Box Shadow", "responsive-block-editor-addons")}
                attrNameTemplate="hover%s"
                boxShadowColor={{ value: hoverboxShadowColor }}
                boxShadowHOffset={{ value: hoverboxShadowHOffset }}
                boxShadowVOffset={{ value: hoverboxShadowVOffset }}
                boxShadowBlur={{ value: hoverboxShadowBlur }}
                boxShadowSpread={{ value: hoverboxShadowSpread }}
                boxShadowPosition={{ value: hoverboxShadowPosition }}
              />
            </PanelBody>
            <PanelBody
              title={__("Background", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ImageBackgroundControl
                {...this.props}
                showSomeImageOptions={true}
                showMoreImageOptions={true}
                showOverlayOptions={false}
              />

              {backgroundImage && !!backgroundImage.length && (
                <RangeControl
                  label={__("Image Opacity", "responsive-block-editor-addons")}
                  value={dimRatio}
                  onChange={(value) =>
                    this.props.setAttributes({
                      dimRatio: value,
                    })
                  }
                  min={0}
                  max={100}
                  step={10}
                />
              )}

              <PanelBody
                title={__("Background Color", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <ColorBackgroundControl
                  {...this.props}
                />
                <RangeControl
                  label={__("Opacity", "responsive-block-editor-addons")}
                  value={opacity}
                  onChange={(value) =>
                    setAttributes({
                      opacity: value !== undefined ? value : 100,
                    })
                  }
                  min={0}
                  max={100}
                  allowReset
                />
              </PanelBody>
            </PanelBody>
            <PanelBody
              title={__("Separator", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <SelectControl
                label={__("Position", "responsive-block-editor-addons")}
                value={resseperatorPosition}
                onChange={(value) =>
                  setAttributes({ resseperatorPosition: value })
                }
                options={[
                  {
                    value: "after_icon",
                    label: __(
                      "After Icon/Image",
                      "responsive-block-editor-addons"
                    ),
                  },
                  {
                    value: "after_prefix",
                    label: __("After Prefix", "responsive-block-editor-addons"),
                  },
                  {
                    value: "after_title",
                    label: __("After Title", "responsive-block-editor-addons"),
                  },
                  {
                    value: "after_desc",
                    label: __(
                      "After Description",
                      "responsive-block-editor-addons"
                    ),
                  },
                ]}
              />
              <SelectControl
                label={__("Style", "responsive-block-editor-addons")}
                value={resseperatorStyle}
                onChange={(value) =>
                  setAttributes({ resseperatorStyle: value })
                }
                options={[
                  {
                    value: "none",
                    label: __("None", "responsive-block-editor-addons"),
                  },
                  {
                    value: "solid",
                    label: __("Solid", "responsive-block-editor-addons"),
                  },
                  {
                    value: "double",
                    label: __("Double", "responsive-block-editor-addons"),
                  },
                  {
                    value: "dashed",
                    label: __("Dashed", "responsive-block-editor-addons"),
                  },
                  {
                    value: "dotted",
                    label: __("Dotted", "responsive-block-editor-addons"),
                  },
                ]}
              />
              {"none" !== resseperatorStyle && (
                <Fragment>
                  <RangeControl
                    label={__("Thickness", "responsive-block-editor-addons")}
                    value={resseperatorThickness}
                    onChange={(value) =>
                      setAttributes({
                        resseperatorThickness: value !== undefined ? value : 2,
                      })
                    }
                    min={1}
                    max={100}
                    beforeIcon=""
                    allowReset
                  />
                  <ButtonGroup
                    className="responsive-block-editor-addons-size-type-field"
                    aria-label={__(
                      "Size Type",
                      "responsive-block-editor-addons"
                    )}
                  >
                    <Button
                      key={"px"}
                      className="responsive-block-editor-addons-size-btn"
                      isSmall
                      isPrimary={resseparatorWidthType === "px"}
                      aria-pressed={resseparatorWidthType === "px"}
                      onClick={() =>
                        setAttributes({ resseparatorWidthType: "px" })
                      }
                    >
                      {"px"}
                    </Button>
                    <Button
                      key={"%"}
                      className="responsive-block-editor-addons-size-btn"
                      isSmall
                      isPrimary={resseparatorWidthType === "%"}
                      aria-pressed={resseparatorWidthType === "%"}
                      onClick={() =>
                        setAttributes({ resseparatorWidthType: "%" })
                      }
                    >
                      {"%"}
                    </Button>
                  </ButtonGroup>
                  <RangeControl
                    label={__("Width", "responsive-block-editor-addons")}
                    value={resseperatorWidth}
                    onChange={(value) =>
                      setAttributes({
                        resseperatorWidth: value !== undefined ? value : 30,
                      })
                    }
                    min={0}
                    max={"%" == resseparatorWidthType ? 100 : 500}
                    beforeIcon=""
                    allowReset
                  />
                  <p className="responsive-block-editor-addons-setting-label">
                    {__("Separator Color", "responsive-block-editor-addons")}
                    <span className="components-base-control__label">
                      <span
                        className="component-color-indicator"
                        style={{ backgroundColor: resseperatorColor }}
                      ></span>
                    </span>
                  </p>
                  <ColorPalette
                    value={resseperatorColor}
                    onChange={(colorValue) =>
                      setAttributes({ resseperatorColor: colorValue })
                    }
                    allowReset
                  />
                </Fragment>
              )}
            </PanelBody>
			{(resctaType !== "none" || resshowTitle || resshowDesc) && (
				<PanelBody
					title={__("Typography", "responsive-block-editor-addons")}
					initialOpen={false}
			  	>
				  	{resctaType !== "none" && (
					  	<TypographyHelperControl
							title={__("Call To Action Typography", "responsive-block-editor-addons")}
							attrNameTemplate="ctaText%s"
							values={{
							family: ctaTextFontFamily,
							size: ctaTextFontSize,
							sizeMobile: ctaTextFontSizeMobile,
							sizeTablet: ctaTextFontSizeTablet,
							weight: ctaTextFontWeight,
							height: ctaTextLineHeight,
							}}
							showLetterSpacing={false}
							showTextTransform={false}
							setAttributes={setAttributes}
							{...this.props}
					  	/>
				  	)}
					{resshowTitle && (
						<TypographyHelperControl
							title={__("Title Typography", "responsive-block-editor-addons")}
							attrNameTemplate="reshead%s"
							values = {{
								family: resheadFontFamily,
								size: resheadFontSize,
								sizeMobile: resheadFontSizeMobile,
								sizeTablet: resheadFontSizeTablet,
								weight: resheadFontWeight,
								height: resheadLineHeight,
							}}
							showLetterSpacing = { false }
							showTextTransform = { false }
							setAttributes={ setAttributes }
							{...this.props}
						/>
					)}
					{resshowDesc && (
						<TypographyHelperControl
							title={__("Description Typography", "responsive-block-editor-addons")}
							attrNameTemplate="ressubHead%s"
							values = {{
								family: ressubHeadFontFamily,
								size: ressubHeadFontSize,
								sizeMobile: ressubHeadFontSizeMobile,
								sizeTablet: ressubHeadFontSizeTablet,
								weight: ressubHeadFontWeight,
								height: ressubHeadLineHeight,
							}}
							showLetterSpacing = { false }
							showTextTransform = { false }
							setAttributes={ setAttributes }
							{...this.props}
						/>
					)}
			  	</PanelBody>
			)}
            <PanelBody title={__("Content")} initialOpen={false}>
              <ToggleControl
                label={__("Enable Prefix", "responsive-block-editor-addons")}
                checked={resshowPrefix}
                onChange={(value) =>
                  setAttributes({ resshowPrefix: !resshowPrefix })
                }
              />
              {resshowPrefix && (
                <Fragment>
                  <p className="responsive-block-editor-addons-setting-label">
                    {__("Prefix Color", "responsive-block-editor-addons")}
                    <span className="components-base-control__label">
                      <span
                        className="component-color-indicator"
                        style={{ backgroundColor: resprefixColor }}
                      ></span>
                    </span>
                  </p>
                  <ColorPalette
                    value={resprefixColor}
                    onChange={(colorValue) =>
                      setAttributes({ resprefixColor: colorValue })
                    }
                    allowReset
                  />
                  <hr className="responsive-block-editor-addons-editor__separator" />
                </Fragment>
              )}

              <ToggleControl
                label={__("Enable Title", "responsive-block-editor-addons")}
                checked={resshowTitle}
                onChange={(value) =>
                  setAttributes({ resshowTitle: !resshowTitle })
                }
              />
              {resshowTitle && (
                <Fragment>
                  <SelectControl
                    label={__("Title Tag", "responsive-block-editor-addons")}
                    value={resheadingTag}
                    onChange={(value) =>
                      setAttributes({ resheadingTag: value })
                    }
                    options={[
                      {
                        value: "h1",
                        label: __("H1", "responsive-block-editor-addons"),
                      },
                      {
                        value: "h2",
                        label: __("H2", "responsive-block-editor-addons"),
                      },
                      {
                        value: "h3",
                        label: __("H3", "responsive-block-editor-addons"),
                      },
                      {
                        value: "h4",
                        label: __("H4", "responsive-block-editor-addons"),
                      },
                      {
                        value: "h5",
                        label: __("H5", "responsive-block-editor-addons"),
                      },
                      {
                        value: "h6",
                        label: __("H6", "responsive-block-editor-addons"),
                      },
                    ]}
                  />

                  <p className="responsive-block-editor-addons-setting-label">
                    {__("Title Color", "responsive-block-editor-addons")}
                    <span className="components-base-control__label">
                      <span
                        className="component-color-indicator"
                        style={{ backgroundColor: resheadingColor }}
                      ></span>
                    </span>
                  </p>
                  <ColorPalette
                    value={resheadingColor}
                    onChange={(colorValue) =>
                      setAttributes({ resheadingColor: colorValue })
                    }
                    allowReset
                  />
                  <hr className="responsive-block-editor-addons-editor__separator" />
                </Fragment>
              )}
              <ToggleControl
                label={__(
                  "Enable Description",
                  "responsive-block-editor-addons"
                )}
                checked={resshowDesc}
                onChange={(value) =>
                  setAttributes({ resshowDesc: !resshowDesc })
                }
              />
              {resshowDesc && (
                <Fragment>
                  <p className="responsive-block-editor-addons-setting-label">
                    {__("Description Color", "responsive-block-editor-addons")}
                    <span className="components-base-control__label">
                      <span
                        className="component-color-indicator"
                        style={{ backgroundColor: ressubheadingColor }}
                      ></span>
                    </span>
                  </p>
                  <ColorPalette
                    value={ressubheadingColor}
                    onChange={(colorValue) =>
                      setAttributes({ ressubheadingColor: colorValue })
                    }
                    allowReset
                  />
                </Fragment>
              )}
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"advance"}>
            <PanelBody
              title={__("Icon Hover Animation", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <SelectControl
                label={__("Animation", "responsive-block-editor-addons")}
                value={animationName}
                onChange={(value) =>
                  setAttributes({ animationName: value })
                }
                options={[
                  { value: "none", label: __("None", "responsive-block-editor-addons") },
                  { value: "fade", label: __("Fade", "responsive-block-editor-addons") },
                  { value: "slide", label: __("Slide", "responsive-block-editor-addons") },
                  { value: "bounce", label: __("Bounce", "responsive-block-editor-addons") },
                  { value: "zoom", label: __("Zoom", "responsive-block-editor-addons") },
                  { value: "flip", label: __("Flip", "responsive-block-editor-addons") },
                  { value: "fold", label: __("Fold", "responsive-block-editor-addons") },
                  { value: "rotate", label: __("Rotate", "responsive-block-editor-addons") },
                ]}
              />
              {animationName !== "none" && (
                <Fragment>
                  <SelectControl
                    label={__("Direction", "responsive-block-editor-addons")}
                    value={animationDirection}
                    onChange={(value) =>
                      setAttributes({ animationDirection: value })
                    }
                    options={showAnimationDirections(animationName)}
                  />
                  <SelectControl
                    label={__("Repeat", "responsive-block-editor-addons")}
                    value={animationRepeat}
                    onChange={(value) =>
                      setAttributes({ animationRepeat: value })
                    }
                    options={[
                      { value: "once", label: __("Once", "responsive-block-editor-addons") },
                      { value: "loop", label: __("Loop", "responsive-block-editor-addons") },
                    ]}
                  />
                  <RangeControl
                    label={__("Duration", "responsive-block-editor-addons")}
                    value={animationDuration}
                    min={0}
                    max={2000}
                    allowReset={true}
                    onChange={(value) =>
                      setAttributes({ animationDuration: value })
                    }
                  />
                  <RangeControl
                    label={__("Delay", "responsive-block-editor-addons")}
                    value={animationDelay}
                    min={0}
                    max={3000}
                    allowReset={true}
                    onChange={(value) =>
                      setAttributes({ animationDelay: value })
                    }
                  />
                  <SelectControl
                    label={__("Curve", "responsive-block-editor-addons")}
                    value={animationCurve}
                    onChange={(value) =>
                      setAttributes({ animationCurve: value })
                    }
                    options={[
                      { value: "ease-in-out", label: "ease-in-out" },
                      { value: "ease", label: "ease" },
                      { value: "ease-in", label: "ease-in" },
                      { value: "ease-out", label: "ease-out" },
                      { value: "linear", label: "linear" },
                    ]}
                  />
                </Fragment>
              )}
            </PanelBody>
            <InspectorAdvancedControls>
              <RangeControl
                label={__("Z-index", "responsive-block-editor-addons")}
                value={zIndex}
                onChange={(value) => setAttributes({zIndex: value})}
                min={0}
                max={500}
                allowReset
              />
            </InspectorAdvancedControls>
          </InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
