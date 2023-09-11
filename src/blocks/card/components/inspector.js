/**
 * Inspector Controls
 */

import times from "lodash/times";
import BoxShadowControl from "../../../utils/components/box-shadow";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import renderSVG from "../../../renderIcon";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import ColorBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import ImageBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ImageBackgroundSettings";
import GradientBackgroundControl from "../../../settings-components/BlockBackgroundSettings/GradientBackgroundSettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ButtonSettingsControl from "../../../settings-components/ButtonSettings";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  MediaUpload,
  ColorPalette,
} = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  ToggleControl,
  BaseControl,
  Button,
} = wp.components;

let svg_icons = Object.keys(ResponsiveBlocksIcon);

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.onSelectImage = this.onSelectImage.bind(this);
    this.onRemoveImage = this.onRemoveImage.bind(this);

    this.onSelectImageOne = this.onSelectImageOne.bind(this);
    this.onRemoveImageOne = this.onRemoveImageOne.bind(this);

    this.onRemoveImageTwo = this.onRemoveImageTwo.bind(this);
    this.onSelectImageTwo = this.onSelectImageTwo.bind(this);

    this.onRemoveImageThree = this.onRemoveImageThree.bind(this);
    this.onSelectImageThree = this.onSelectImageThree.bind(this);

    this.onRemoveImageFour = this.onRemoveImageFour.bind(this);
    this.onSelectImageFour = this.onSelectImageFour.bind(this);
  }
  /*
   * Event to set Image as while adding.
   */
  onSelectTestImage(media, index) {
    const { cardsArray } = this.props.attributes;
    const { setAttributes } = this.props;

    let imag_url = null;
    if (!media || !media.url) {
      imag_url = null;
    } else {
      imag_url = media;
    }

    if (!media.type || "image" !== media.type) {
      imag_url = null;
    }

    const newItems = cardsArray.map((item, thisIndex) => {
      if (index === thisIndex) {
        (item["image"] = imag_url), (item["imageUrl"] = imag_url);
      }
      return item;
    });

    setAttributes({
      cardsArray: newItems,
    });
  }

  /*
   * Event to set Image as null while removing.
   */
  onRemoveTestImage(index) {
    const { cardsArray } = this.props.attributes;
    const { setAttributes } = this.props;

    const newItems = cardsArray.map((item, thisIndex) => {
      if (index === thisIndex) {
        item["image"] = null;
      }
      return item;
    });

    setAttributes({
      cardsArray: newItems,
    });
  }

  /*
   * Event to set Image selectot label.
   */
  getImageName(image) {
    const { cardsArray } = this.props.attributes;

    let image_name = __("Select Image", "responsive-block-editor-addons");
    if (image) {
      if (image.url == null || image.url == "") {
        image_name = __("Select Image", "responsive-block-editor-addons");
      } else {
        image_name = __("Replace Image", "responsive-block-editor-addons");
      }
    }
    return image_name;
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
   * Event to set Image as null while removing.
   */
  onRemoveImageOne() {
    const { setAttributes } = this.props;

    setAttributes({ backgroundImageOne: null });
  }

  /*
   * Event to set Image as while adding.
   */
  onSelectImageOne(media) {
    const { setAttributes } = this.props;
    const { backgroundImageOne } = this.props.attributes;

    if (!media || !media.url) {
      setAttributes({ backgroundImageOne: null });
      return;
    }

    if (!media.type || "image" != media.type) {
      return;
    }

    setAttributes({ backgroundImageOne: media.url });
  }

  onRemoveImageTwo() {
    const { setAttributes } = this.props;

    setAttributes({ backgroundImageTwo: null });
  }

  onSelectImageTwo(media) {
    const { setAttributes } = this.props;
    const { backgroundImageTwo } = this.props.attributes;

    if (!media || !media.url) {
      setAttributes({ backgroundImageTwo: null });
      return;
    }

    if (!media.type || "image" != media.type) {
      return;
    }

    setAttributes({ backgroundImageTwo: media.url });
  }

  onRemoveImageThree() {
    const { setAttributes } = this.props;

    setAttributes({ backgroundImageThree: null });
  }

  onSelectImageThree(media) {
    const { setAttributes } = this.props;
    const { backgroundImageThree } = this.props.attributes;

    if (!media || !media.url) {
      setAttributes({ backgroundImageThree: null });
      return;
    }

    if (!media.type || "image" != media.type) {
      return;
    }

    setAttributes({ backgroundImageThree: media.url });
  }

  onRemoveImageFour() {
    const { setAttributes } = this.props;

    setAttributes({ backgroundImageFour: null });
  }

  onSelectImageFour(media) {
    const { setAttributes } = this.props;
    const { backgroundImageFour } = this.props.attributes;

    if (!media || !media.url) {
      setAttributes({ backgroundImageFour: null });
      return;
    }

    if (!media.type || "image" != media.type) {
      return;
    }

    setAttributes({ backgroundImageFour: media.url });
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        count,
        gutter,
        cardsArray,
        textColor,
        backgroundColor,
        buttonTarget,
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
        titleSpace,
        titleSpaceMobile,
        titleSpaceTablet,
        subtitleSpace,
        subtitleSpaceMobile,
        subtitleSpaceTablet,
        contentSpace,
        contentSpaceMobile,
        contentSpaceTablet,
        buttonSpace,
        ctaBackColor,
        ctaColor,
        stack,
        opacity,
        resshowImage,
        imageopacity,
        backgroundType,
        backgroundImage,
        gradientDirection,
        colorLocation1,
        colorLocation2,
        backgroundColor1,
        backgroundColor2,
        imageSize,
        imagePosition,
        imageRepeat,
        thumbsize,
        imageheight,
        blockzindex,
        blockmargin,
        blockmarginMobile,
        blockmarginTablet,
        icon,
        iconPosition,
        icon_color,
        ctaHoverBackColor,
        ctaHoverColor,
        buttonopacity,
        ctaVpadding,
        ctaHpadding,
        vMargin,
        hMargin,
        ctaBorderWidth,
        ctaBorderRadius,
        ctaBorderStyle,
        buttonSize,
        buttonbackgroundType,
        buttongradientDirection,
        buttoncolorLocation1,
        buttoncolorLocation2,
        buttonbackgroundColor1,
        buttonbackgroundColor2,
        icon_hcolor,
        subFontFamily,
        subLineHeight,
        subFontWeight,
        subFontSize,
        headingFontFamily,
        headingLineHeight,
        headingFontWeight,
        headingFontSize,
        contentFontFamily,
        contentLineHeight,
        contentFontWeight,
        contentFontSize,
        blockbotmargin,
        blockbotmarginMobile,
        blockbotmarginTablet,
        blockleftmargin,
        blockleftmarginMobile,
        blockleftmarginTablet,
        blockrightmargin,
        blockrightmarginMobile,
        blockrightmarginTablet,
        bgimageSize,
        bgimagePosition,
        bgimageRepeat,
        bgthumbsize,
        backgroundImageOne,
        backgroundImageTwo,
        backgroundImageThree,
        backgroundImageFour,
        backgroundImagePosition,
        backgroundImageRepeat,
        backgroundImageSize,
        headingFontSizeMobile,
        headingFontSizeTablet,
        subFontSizeMobile,
        subFontSizeTablet,
        contentFontSizeMobile,
        contentFontSizeTablet,
        buttonHopacity,
        ctaBorderColor,
        ctaHoverBorderColor,
        ctaTextOpacity,
        ctaHpaddingTablet,
        ctaHpaddingMobile,
        ctaVpaddingTablet,
        ctaVpaddingMobile,
        vMarginTablet,
        vMarginMobile,
        hMarginTablet,
        hMarginMobile,
        buttonHbackgroundType,
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

    // Button size values
    const buttonSizeOptions = [
      {
        value: "responsive-block-editor-addons-button-size-small",
        label: __("Small", "responsive-block-editor-addons"),
      },
      {
        value: "responsive-block-editor-addons-button-size-medium",
        label: __("Medium", "responsive-block-editor-addons"),
      },
      {
        value: "responsive-block-editor-addons-button-size-large",
        label: __("Large", "responsive-block-editor-addons"),
      },
      {
        value: "responsive-block-editor-addons-button-size-extralarge",
        label: __("Extra Large", "responsive-block-editor-addons"),
      },
    ];

    // Background Type Options
    const buttonbackgroundTypeOptions = [
      { value: "none", label: __("None", "responsive-block-editor-addons") },
      { value: "color", label: __("Color", "responsive-block-editor-addons") },
      {
        value: "gradient",
        label: __("Gradient", "responsive-block-editor-addons"),
      },
    ];
    // Image Size Options
    const imageSizeOptions = [
      {
        value: "thumbnail",
        label: __("Thumbnail", "responsive-block-editor-addons"),
      },
      {
        value: "medium",
        label: __("Medium", "responsive-block-editor-addons"),
      },
      { value: "large", label: __("Large", "responsive-block-editor-addons") },
      { value: "full", label: __("Full", "responsive-block-editor-addons") },
    ];

    const tmControls = (index) => {
      let image_val = null;
      if (cardsArray[index] && typeof cardsArray[index] !== "undefined") {
        image_val = cardsArray[index]["image"];
      }
      return (
        <PanelBody
          key={index}
          title={__("Image", "responsive-block-editor-addons") + " " + (index + 1) + " " + __("Settings", "responsive-block-editor-addons")}
          initialOpen={true}
          className={"rbea-repeater-panel"}
        >
          <BaseControl className="editor-bg-image-control" label={__("", "responsive-block-editor-addons")}>
            <MediaUpload
              title={__("Select Image" + (index + 1), "responsive-block-editor-addons")}
              onSelect={(media) => {
                this.onSelectTestImage(media, index);
              }}
              allowedTypes={["image"]}
              value={image_val}
              render={({ open }) => (
                <Button isDefault onClick={open}>
                  {this.getImageName(cardsArray[index]["image"])}
                </Button>
              )}
            />
            {image_val &&
              cardsArray[index]["image"].url !== null &&
              cardsArray[index]["image"].url !== "" && (
                <Button
                  className="rbea-rm-btn"
                  key={index}
                  onClick={(value) => {
                    this.onRemoveTestImage(index);
                  }}
                  isLink
                  isDestructive
                >
                  {__("Remove Image", "responsive-block-editor-addons")}
                </Button>
              )}
          </BaseControl>
        </PanelBody>
      );
    };

    // Update color value
    const onChangeTextColor = (value) => setAttributes({ textColor: value });
    const onChangeBackgroundColor = (value) =>
      setAttributes({ backgroundColor: value });

    // Background Type Options
    const backgroundTypeOptions = [
      { value: "none", label: __("None", "responsive-block-editor-addons") },
      { value: "color", label: __("Color", "responsive-block-editor-addons") },
      {
        value: "gradient",
        label: __("Gradient", "responsive-block-editor-addons"),
      },
      { value: "image", label: __("Image", "responsive-block-editor-addons") },
    ];

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RangeControl
                label={__("Number of Cards", "responsive-block-editor-addons")}
                value={count}
                onChange={(newCount) => {
                  let clonecardsArray = [...cardsArray];
                  if (clonecardsArray.length < newCount) {
                    const incsubtitle = Math.abs(
                      newCount - clonecardsArray.length
                    );

                    {
                      times(incsubtitle, (n) => {
                        clonecardsArray.push({
                          title: __("Title ", "responsive-block-editor-addons"),
                          subtitle: __("Subtitle", "responsive-block-editor-addons"),
                          content:
                            __("Description for this block. Use this space for describing your block. Any text will do. Description for this block. You can use this space for describing your block.", "responsive-block-editor-addons"),
                          button: __("Button", "responsive-block-editor-addons") + newCount,
                        });
                      });
                    }
                    setAttributes({ cardsArray: clonecardsArray });
                  } else {
                    const incsubtitle = Math.abs(
                      newCount - clonecardsArray.length
                    );
                    let data_new = clonecardsArray;
                    for (var i = 0; i < incsubtitle; i++) {
                      data_new.pop();
                    }
                    setAttributes({ cardsArray: data_new });
                  }
                  setAttributes({ count: newCount });
                }}
                min={1}
                max={4}
                step={1}
              />
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
                onChange={(value) => setAttributes({ stack: value })}
                help={__(
                  "Note: Choose on what breakpoint the columns will stack.",
                  "responsive-block-editor-addons"
                )}
              />
              <RangeControl
                label={__("Z-Index", "responsive-block-editor-addons")}
                value={blockzindex}
                onChange={(value) =>
                  setAttributes({
                    blockzindex: value !== undefined ? value : 1,
                  })
                }
                min={0}
                max={9999}
                allowReset
              />
            </PanelBody>
            <PanelBody
              title={__("Image", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ToggleControl
                label={__("Enable Image", "responsive-block-editor-addons")}
                checked={resshowImage}
                onChange={(value) =>
                  setAttributes({ resshowImage: !resshowImage })
                }
              />
              {resshowImage && (
                <Fragment>
                  <BaseControl
                    className="editor-bg-image-control"
                    label={__(
                      "Image 1 Settings",
                      "responsive-block-editor-addons"
                    )}
                  >
                    <MediaUpload
                      title={__(
                        "Select Background Image",
                        "responsive-block-editor-addons"
                      )}
                      onSelect={this.onSelectImageOne}
                      allowedTypes={["image"]}
                      value={backgroundImageOne}
                      render={({ open }) => (
                        <Button isDefault onClick={open}>
                          {!backgroundImageOne
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
                    {backgroundImageOne && (
                      <Button
                        className="rbea-rm-btn"
                        onClick={this.onRemoveImageOne}
                        isLink
                        isDestructive
                      >
                        {__("Remove Image", "responsive-block-editor-addons")}
                      </Button>
                    )}
                  </BaseControl>
                  {count > 1 && (
                    <BaseControl
                      className="editor-bg-image-control"
                      label={__(
                        "Image 2 Settings",
                        "responsive-block-editor-addons"
                      )}
                    >
                      <MediaUpload
                        title={__(
                          "Select Background Image",
                          "responsive-block-editor-addons"
                        )}
                        onSelect={this.onSelectImageTwo}
                        allowedTypes={["image"]}
                        value={backgroundImageTwo}
                        render={({ open }) => (
                          <Button isDefault onClick={open}>
                            {!backgroundImageTwo
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
                      {backgroundImageTwo && (
                        <Button
                          className="rbea-rm-btn"
                          onClick={this.onRemoveImageTwo}
                          isLink
                          isDestructive
                        >
                          {__("Remove Image", "responsive-block-editor-addons")}
                        </Button>
                      )}
                    </BaseControl>
                  )}
                  {(count === 3 || count === 4) && (
                    <BaseControl
                      className="editor-bg-image-control"
                      label={__(
                        "Image 3 Settings",
                        "responsive-block-editor-addons"
                      )}
                    >
                      <MediaUpload
                        title={__(
                          "Select Background Image",
                          "responsive-block-editor-addons"
                        )}
                        onSelect={this.onSelectImageThree}
                        allowedTypes={["image"]}
                        value={backgroundImageThree}
                        render={({ open }) => (
                          <Button isDefault onClick={open}>
                            {!backgroundImageThree
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
                      {backgroundImageThree && (
                        <Button
                          className="rbea-rm-btn"
                          onClick={this.onRemoveImageThree}
                          isLink
                          isDestructive
                        >
                          {__("Remove Image", "responsive-block-editor-addons")}
                        </Button>
                      )}
                    </BaseControl>
                  )}
                  {count === 4 && (
                    <BaseControl
                      className="editor-bg-image-control"
                      label={__(
                        "Image 4 Settings",
                        "responsive-block-editor-addons"
                      )}
                    >
                      <MediaUpload
                        title={__(
                          "Select Background Image",
                          "responsive-block-editor-addons"
                        )}
                        onSelect={this.onSelectImageFour}
                        allowedTypes={["image"]}
                        value={backgroundImageFour}
                        render={({ open }) => (
                          <Button isDefault onClick={open}>
                            {!backgroundImageFour
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
                      {backgroundImageFour && (
                        <Button
                          className="rbea-rm-btn"
                          onClick={this.onRemoveImageFour}
                          isLink
                          isDestructive
                        >
                          {__("Remove Image", "responsive-block-editor-addons")}
                        </Button>
                      )}
                    </BaseControl>
                  )}
                </Fragment>
              )}
            </PanelBody>
            {resshowImage && (
              <PanelBody
                title={__("Image Settings", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <SelectControl
                  label={__("Image Size", "responsive-block-editor-addons")}
                  value={imageSize}
                  onChange={(value) => setAttributes({ imageSize: value })}
                  options={imageSizeOptions}
                />

                <SelectControl
                  label={__("Image Position", "responsive-block-editor-addons")}
                  value={imagePosition}
                  onChange={(value) => setAttributes({ imagePosition: value })}
                  options={[
                    {
                      value: "top left",
                      label: __("Top Left", "responsive-block-editor-addons"),
                    },
                    {
                      value: "top center",
                      label: __("Top Center", "responsive-block-editor-addons"),
                    },
                    {
                      value: "top right",
                      label: __("Top Right", "responsive-block-editor-addons"),
                    },
                    {
                      value: "center left",
                      label: __(
                        "Center Left",
                        "responsive-block-editor-addons"
                      ),
                    },
                    {
                      value: "center center",
                      label: __(
                        "Center Center",
                        "responsive-block-editor-addons"
                      ),
                    },
                    {
                      value: "center right",
                      label: __(
                        "Center Right",
                        "responsive-block-editor-addons"
                      ),
                    },
                    {
                      value: "bottom left",
                      label: __(
                        "Bottom Left",
                        "responsive-block-editor-addons"
                      ),
                    },
                    {
                      value: "bottom center",
                      label: __(
                        "Bottom Center",
                        "responsive-block-editor-addons"
                      ),
                    },
                    {
                      value: "bottom right",
                      label: __(
                        "Bottom Right",
                        "responsive-block-editor-addons"
                      ),
                    },
                  ]}
                />
                <SelectControl
                  label={__("Image Repeat", "responsive-block-editor-addons")}
                  value={imageRepeat}
                  onChange={(value) => setAttributes({ imageRepeat: value })}
                  options={[
                    {
                      value: "no-repeat",
                      label: __("No Repeat", "responsive-block-editor-addons"),
                    },
                    {
                      value: "repeat",
                      label: __("Repeat", "responsive-block-editor-addons"),
                    },
                    {
                      value: "repeat-x",
                      label: __("Repeat-X", "responsive-block-editor-addons"),
                    },
                    {
                      value: "repeat-y",
                      label: __("Repeat-Y", "responsive-block-editor-addons"),
                    },
                  ]}
                />
                <SelectControl
                  label={__("Image Background Size", "responsive-block-editor-addons")}
                  value={thumbsize}
                  onChange={(value) => setAttributes({ thumbsize: value })}
                  options={[
                    {
                      value: "cover",
                      label: __("Cover", "responsive-block-editor-addons"),
                    },
                    {
                      value: "auto",
                      label: __("Auto", "responsive-block-editor-addons"),
                    },
                    {
                      value: "contain",
                      label: __("Contain", "responsive-block-editor-addons"),
                    },
                  ]}
                />
                <RangeControl
                  label={__("Custom Height", "responsive-block-editor-addons")}
                  value={imageheight}
                  onChange={(value) =>
                    setAttributes({
                      imageheight: value !== undefined ? value : 200,
                    })
                  }
                  min={0}
                  max={1000}
                  allowReset
                />
              </PanelBody>
            )}
            <PanelBody
              title={__("Button Settings", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ButtonSettingsControl
                {...this.props}
                showMarginControls={true}
                showBackColorOpacity={true}
                showGradientHover={false}
                showTextOpacity={true}
              />
              <SelectControl
                label={__("Button Size", "responsive-block-editor-addons")}
                value={buttonSize}
                options={buttonSizeOptions.map(({ value, label }) => ({
                  value,
                  label,
                }))}
                onChange={(value) => {
                  this.props.setAttributes({
                    buttonSize: value,
                  });
                }}
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
                  <ColorBackgroundControl {...this.props} />
                  <RangeControl
                    label={__("Opacity", "responsive-block-editor-addons")}
                    value={opacity}
                    onChange={(value) =>
                      setAttributes({
                        opacity: value !== undefined ? value : 0,
                      })
                    }
                    min={0}
                    max={100}
                    allowReset
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
                  <ImageBackgroundControl
                    {...this.props}
                    showSomeImageOptions={true}
                    showMoreImageOptions={false}
                    showOverlayOptions={false}
                  />
                  <RangeControl
                    label={__("Opacity", "responsive-block-editor-addons")}
                    value={imageopacity}
                    onChange={(value) =>
                      setAttributes({
                        imageopacity: value !== undefined ? value : 20,
                      })
                    }
                    min={0}
                    max={100}
                    allowReset
                  />
                </Fragment>
              )}
            </PanelBody>
            <PanelBody
              title={__("Typography", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <TypographyHelperControl
                title={__("Title Typography", "responsive-block-editor-addons")}
                attrNameTemplate="heading%s"
                values={{
                  family: headingFontFamily,
                  size: headingFontSize,
                  sizeMobile: headingFontSizeMobile,
                  sizeTablet: headingFontSizeTablet,
                  weight: headingFontWeight,
                  height: headingLineHeight,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={__(
                  "Subtitle Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="sub%s"
                values={{
                  family: subFontFamily,
                  size: subFontSize,
                  sizeMobile: subFontSizeMobile,
                  sizeTablet: subFontSizeTablet,
                  weight: subFontWeight,
                  height: subLineHeight,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={__(
                  "Content Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="content%s"
                values={{
                  family: contentFontFamily,
                  size: contentFontSize,
                  sizeMobile: contentFontSizeMobile,
                  sizeTablet: contentFontSizeTablet,
                  weight: contentFontWeight,
                  height: contentLineHeight,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
            </PanelBody>

            <PanelBody title={__("Icon Settings", "responsive-block-editor-addons")} initialOpen={false}>
              <Fragment>
                <p className="components-base-control__label">{__("Icon", "responsive-block-editor-addons")}</p>
                <FontIconPicker
                  icons={svg_icons}
                  renderFunc={renderSVG}
                  theme="default"
                  value={icon}
                  onChange={(value) => setAttributes({ icon: value })}
                  isMulti={false}
                  noSelectedPlaceholder={__("Select Icon", "responsive-block-editor-addons")}
                />
                <SelectControl
                  label={__("Icon Position", "responsive-block-editor-addons")}
                  value={iconPosition}
                  onChange={(value) => setAttributes({ iconPosition: value })}
                  options={[
                    { value: "before", label: __("Before Text", "responsive-block-editor-addons") },
                    { value: "after", label: __("After Text", "responsive-block-editor-addons") },
                  ]}
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
              </Fragment>
            </PanelBody>

            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ResponsiveSpacingControl
                title={"Title Bottom Margin"}
                attrNameTemplate="titleSpace%s"
                values={{
                  desktop: titleSpace,
                  tablet: titleSpaceTablet,
                  mobile: titleSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Subtitle Bottom Margin"}
                attrNameTemplate="subtitleSpace%s"
                values={{
                  desktop: subtitleSpace,
                  tablet: subtitleSpaceTablet,
                  mobile: subtitleSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Content Bottom Margin"}
                attrNameTemplate="contentSpace%s"
                values={{
                  desktop: contentSpace,
                  tablet: contentSpaceTablet,
                  mobile: contentSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Block Top Margin"}
                attrNameTemplate="blockmargin%s"
                values={{
                  desktop: blockmargin,
                  tablet: blockmarginTablet,
                  mobile: blockmarginMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Block Bottom Margin"}
                attrNameTemplate="blockbotmargin%s"
                values={{
                  desktop: blockbotmargin,
                  tablet: blockbotmarginTablet,
                  mobile: blockbotmarginMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Block Left Margin"}
                attrNameTemplate="blockleftmargin%s"
                values={{
                  desktop: blockleftmargin,
                  tablet: blockleftmarginTablet,
                  mobile: blockleftmarginMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Block Right Margin"}
                attrNameTemplate="blockrightmargin%s"
                values={{
                  desktop: blockrightmargin,
                  tablet: blockrightmarginTablet,
                  mobile: blockrightmarginMobile,
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

            <PanelColorSettings
              title={__(
                "Text Color Settings",
                "responsive-block-editor-addons"
              )}
              initialOpen={false}
              colorSettings={[
                {
                  value: textColor,
                  onChange: onChangeTextColor,
                  label: __("Text Color", "responsive-block-editor-addons"),
                },
              ]}
            ></PanelColorSettings>
          </InspectorTab>
          <InspectorTab key={"advance"}></InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
