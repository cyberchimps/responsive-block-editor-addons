/**
 * Inspector Controls
 */

import times from "lodash/times";
import BoxShadowControl from "../../../utils/components/box-shadow";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ImageSettingsControl from "../../../settings-components/ImageSettings";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import ImageBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ImageBackgroundSettings";
import ColorBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import GradientBackgroundControl from "../../../settings-components/BlockBackgroundSettings/GradientBackgroundSettings";
import ButtonSettingsControl from "../../../settings-components/ButtonSettings";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ResponsivePaddingControl from "../../../settings-components/ResponsiveSpacingSettings/ResponsivePaddingControl";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";

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
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.onRemoveImage = this.onRemoveImage.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
    this.onRemoveBlockImage = this.onRemoveBlockImage.bind(this);
    this.onSelectBlockImage = this.onSelectBlockImage.bind(this);
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
  onRemoveBlockImage() {
    const { setAttributes } = this.props;

    setAttributes({ blockbackgroundImage: null });
  }

  /*
   * Event to set Image as while adding.
   */
  onSelectBlockImage(media) {
    const { setAttributes } = this.props;
    const { blockbackgroundImage } = this.props.attributes;

    if (!media || !media.url) {
      setAttributes({ blockbackgroundImage: null });
      return;
    }

    if (!media.type || "image" != media.type) {
      return;
    }

    setAttributes({ blockbackgroundImage: media.url });
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        count,
        gutter,
        pricingTable,
        textColor,
        titleColor,
        prefixColor,
        priceColor,
        suffixColor,
        subpriceColor,
        featuresColor,
        itemBackgroundColor,
        buttonTarget,
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
        opacity,
        blockbackgroundColor,
        blockbackgroundColor1,
        blockbackgroundColor2,
        blockcolorLocation1,
        blockcolorLocation2,
        blockgradientDirection,
        blockbackgroundType,
        blockbackgroundImage,
        blockopacity,
        boxShadowColor,
        boxShadowHOffset,
        boxShadowVOffset,
        boxShadowBlur,
        boxShadowSpread,
        boxShadowPosition,
        buttonBoxShadowColor,
        buttonBoxShadowHOffset,
        buttonBoxShadowVOffset,
        buttonBoxShadowBlur,
        buttonBoxShadowSpread,
        buttonBoxShadowPosition,
        ctaColor,
        ctaBackColor,
        ctaHoverColor,
        ctaHoverBackColor,
        ctaBorderColor,
        ctaBorderRadius,
        ctaBorderWidth,
        ctaBorderStyle,
        ctaHpadding,
        ctaVpadding,
        buttonbackgroundType,
        buttongradientDirection,
        buttoncolorLocation1,
        buttoncolorLocation2,
        buttonbackgroundColor1,
        buttonbackgroundColor2,
        buttonHbackgroundType,
        buttonHgradientDirection,
        buttonHcolorLocation1,
        buttonHcolorLocation2,
        buttonHbackgroundColor1,
        buttonHbackgroundColor2,

        titleFontFamily,
        titleFontSize,
        titleFontWeight,
        titleLineHeight,
        amountFontFamily,
        amountFontSize,
        amountFontWeight,
        amountLineHeight,
        prefixFontFamily,
        prefixFontSize,
        prefixFontWeight,
        prefixLineHeight,
        suffixFontFamily,
        suffixFontSize,
        suffixFontWeight,
        suffixLineHeight,
        subpriceFontFamily,
        subpriceFontSize,
        subpriceFontWeight,
        subpriceLineHeight,
        subpriceTextTransform,
        featuresFontFamily,
        featuresFontSize,
        featuresFontWeight,
        featuresLineHeight,
        ctaFontFamily,
        ctaFontSize,
        ctaFontWeight,
        ctaLineHeight,
        blockTopPadding,
        blockBottomPadding,
        blockLeftPadding,
        blockRightPadding,
        columnTopPadding,
        columnBottomPadding,
        columnLeftPadding,
        columnRightPadding,
        blockTopPaddingMobile,
        blockBottomPaddingMobile,
        blockLeftPaddingMobile,
        blockRightPaddingMobile,
        columnTopPaddingMobile,
        columnBottomPaddingMobile,
        columnLeftPaddingMobile,
        columnRightPaddingMobile,
        blockTopPaddingTablet,
        blockBottomPaddingTablet,
        blockLeftPaddingTablet,
        blockRightPaddingTablet,
        columnTopPaddingTablet,
        columnBottomPaddingTablet,
        columnLeftPaddingTablet,
        columnRightPaddingTablet,
        blockBackColorOpacity,
        columnBackColorOpacity,
        showImage,
        showTitle,
        showPrefix,
        showPrice,
        showSuffix,
        showSubprice,
        showFeatures,
        showButton,
        titleSpace,
        priceSpace,
        subpriceSpace,
        buttonSpace,
        featuresSpace,
        titleSpaceMobile,
        priceSpaceMobile,
        subpriceSpaceMobile,
        buttonSpaceMobile,
        featuresSpaceMobile,
        titleSpaceTablet,
        priceSpaceTablet,
        subpriceSpaceTablet,
        buttonSpaceTablet,
        featuresSpaceTablet,
        blockAlign,
        imageSize,
        imageShape,
        imageWidth,
        imageWidthTablet,
        imageWidthMobile,
        ctaHoverBorderColor,
        ctaHpaddingTablet,
        ctaHpaddingMobile,
        ctaVpaddingTablet,
        ctaVpaddingMobile,
        titleFontSizeMobile,
        titleFontSizeTablet,
        prefixFontSizeMobile,
        prefixFontSizeTablet,
        amountFontSizeMobile,
        amountFontSizeTablet,
        suffixFontSizeMobile,
        suffixFontSizeTablet,
        subpriceFontSizeMobile,
        subpriceFontSizeTablet,
        featuresFontSizeMobile,
        featuresFontSizeTablet,
        ctaFontSizeMobile,
        ctaFontSizeTablet,
      },
      setAttributes,
    } = this.props;

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

    const textTransformOptions = [
      {
        value: "uppercase",
        label: __("Uppercase", "responsive-block-editor-addons"),
      },
      {
        value: "lowercase",
        label: __("Lowercase", "responsive-block-editor-addons"),
      },
      {
        value: "capitalize",
        label: __("Capitalize", "responsive-block-editor-addons"),
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
    ];

    // Button Background Type Options
    const buttonbackgroundTypeOptions = [
      { value: "none", label: __("None", "responsive-block-editor-addons") },
      { value: "color", label: __("Color", "responsive-block-editor-addons") },
      {
        value: "gradient",
        label: __("Gradient", "responsive-block-editor-addons"),
      },
    ];

    const gutterOptions = [
      {
        value: "no",
        label: __("None", "responsive-block-editor-addons"),
        shortName: __("None", "responsive-block-editor-addons"),
      },
      {
        value: "small",
        /* translators: abbreviation for small size */
        label: __("S", "responsive-block-editor-addons"),
        tooltip: __("Small", "responsive-block-editor-addons"),
      },
      {
        value: "medium",
        /* translators: abbreviation for medium size */
        label: __("M", "responsive-block-editor-addons"),
        tooltip: __("Medium", "responsive-block-editor-addons"),
      },
      {
        value: "large",
        /* translators: abbreviation for large size */
        label: __("L", "responsive-block-editor-addons"),
        tooltip: __("Large", "responsive-block-editor-addons"),
      },
      {
        value: "huge",
        /* translators: abbreviation for largest size */
        label: __("XL", "responsive-block-editor-addons"),
        tooltip: __("Huge", "responsive-block-editor-addons"),
      },
    ];

    const imageShapeOptions = [
      {
        value: "default",
        label: __("Default", "responsive-block-editor-addons"),
        shortName: __("Default", "responsive-block-editor-addons"),
      },
      {
        value: "circle",
        label: __("Circle", "responsive-block-editor-addons"),
        shortName: __("Circle", "responsive-block-editor-addons"),
      },
      {
        value: "square",
        label: __("Square", "responsive-block-editor-addons"),
        shortName: __("Square", "responsive-block-editor-addons"),
      },
      {
        value: "blob",
        label: __("Blob", "responsive-block-editor-addons"),
        shortName: __("Blob", "responsive-block-editor-addons"),
      },
    ];

    // Update color value
    const onChangeTextColor = (value) => setAttributes({ textColor: value });
    const onChangeBackgroundColor = (value) =>
      setAttributes({ itemBackgroundColor: value });

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RangeControl
                label={__(
                  "Number of Pricing Tables",
                  "responsive-block-editor-addons"
                )}
                value={count}
                onChange={(newCount) => {
                  let cloneTest_block = [...pricingTable];
                  if (cloneTest_block.length < newCount) {
                    const incAmount = Math.abs(
                      newCount - cloneTest_block.length
                    );

                    {
                      times(incAmount, (n) => {
                        cloneTest_block.push({
                          title: "Plan " + newCount,
                          amount: "99",
                          currency: "$",
                          price_suffix: ".00",
                          sub_price: "SUB PRICE",
                          features: [],
                          button: "Button" + newCount,
                          buttonURL: "",
                        });
                      });
                    }
                    setAttributes({ pricingTable: cloneTest_block });
                  } else {
                    const incAmount = Math.abs(
                      newCount - cloneTest_block.length
                    );
                    let data_new = cloneTest_block;
                    for (var i = 0; i < incAmount; i++) {
                      data_new.pop();
                    }
                    setAttributes({ pricingTable: data_new });
                  }
                  setAttributes({ count: newCount });
                }}
                min={1}
                max={4}
                step={1}
              />
              {count > 1 && (
                <SelectControl
                  label={__("Gutter", "responsive-block-editor-addons")}
                  value={gutter}
                  options={gutterOptions}
                  onChange={(newGutter) => setAttributes({ gutter: newGutter })}
                />
              )}
              <SelectControl
                label={__("Alignment", "responsive-block-editor-addons")}
                options={citeAlignOptions}
                value={blockAlign}
                onChange={(value) =>
                  this.props.setAttributes({
                    blockAlign: value,
                  })
                }
              />
              <Fragment>
                <ToggleControl
                  label={__("Image", "responsive-block-editor-addons")}
                  checked={showImage}
                  onChange={() =>
                    this.props.setAttributes({
                      showImage: !showImage,
                    })
                  }
                />
                <ToggleControl
                  label={__("Title", "responsive-block-editor-addons")}
                  checked={showTitle}
                  onChange={() =>
                    this.props.setAttributes({
                      showTitle: !showTitle,
                    })
                  }
                />
                <ToggleControl
                  label={__("Price Prefix", "responsive-block-editor-addons")}
                  checked={showPrefix}
                  onChange={() =>
                    this.props.setAttributes({
                      showPrefix: !showPrefix,
                    })
                  }
                />
                <ToggleControl
                  label={__("Price", "responsive-block-editor-addons")}
                  checked={showPrice}
                  onChange={() =>
                    this.props.setAttributes({
                      showPrice: !showPrice,
                    })
                  }
                />
                <ToggleControl
                  label={__("Price Suffix", "responsive-block-editor-addons")}
                  checked={showSuffix}
                  onChange={() =>
                    this.props.setAttributes({
                      showSuffix: !showSuffix,
                    })
                  }
                />
                <ToggleControl
                  label={__("Sub Price", "responsive-block-editor-addons")}
                  checked={showSubprice}
                  onChange={() =>
                    this.props.setAttributes({
                      showSubprice: !showSubprice,
                    })
                  }
                />
                <ToggleControl
                  label={__("Features", "responsive-block-editor-addons")}
                  checked={showFeatures}
                  onChange={() =>
                    this.props.setAttributes({
                      showFeatures: !showFeatures,
                    })
                  }
                />
                <ToggleControl
                  label={__("Button", "responsive-block-editor-addons")}
                  checked={showButton}
                  onChange={() =>
                    this.props.setAttributes({
                      showButton: !showButton,
                    })
                  }
                />
              </Fragment>
            </PanelBody>
            <PanelBody
              title={__("Image Settings", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ImageSettingsControl {...this.props} />
            </PanelBody>
            <PanelBody
              title={__("Button Settings", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ButtonSettingsControl
                {...this.props}
                showMarginControls={false}
                showBackColorOpacity={false}
                showGradientHover={true}
                showTextOpacity={false}
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
                    value={columnBackColorOpacity}
                    onChange={(value) =>
                      setAttributes({
                        columnBackColorOpacity:
                          value !== undefined ? value : 100,
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
                  <RangeControl
                    label={__("Opacity", "responsive-block-editor-addons")}
                    value={columnBackColorOpacity}
                    onChange={(value) =>
                      setAttributes({
                        columnBackColorOpacity:
                          value !== undefined ? value : 100,
                      })
                    }
                    min={0}
                    max={100}
                    allowReset
                  />
                </Fragment>
              )}
              {"image" == backgroundType && (
                <Fragment>
                  <ImageBackgroundControl
                    {...this.props}
                    showSomeImageOptions={false}
                    showMoreImageOptions={false}
                    showOverlayOptions={false}
                  />
                  <RangeControl
                    label={__("Opacity", "responsive-block-editor-addons")}
                    value={opacity}
                    onChange={(value) =>
                      setAttributes({
                        opacity: value !== undefined ? value : 20,
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
                attrNameTemplate="title%s"
                values={{
                  family: titleFontFamily,
                  size: titleFontSize,
                  sizeMobile: titleFontSizeMobile,
                  sizeTablet: titleFontSizeTablet,
                  weight: titleFontWeight,
                  height: titleLineHeight,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={__(
                  "Price Prefix Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="prefix%s"
                values={{
                  family: prefixFontFamily,
                  size: prefixFontSize,
                  sizeMobile: prefixFontSizeMobile,
                  sizeTablet: prefixFontSizeTablet,
                  weight: prefixFontWeight,
                  height: prefixLineHeight,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={__("Price Typography", "responsive-block-editor-addons")}
                attrNameTemplate="amount%s"
                values={{
                  family: amountFontFamily,
                  size: amountFontSize,
                  sizeMobile: amountFontSizeMobile,
                  sizeTablet: amountFontSizeTablet,
                  weight: amountFontWeight,
                  height: amountLineHeight,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={__(
                  "Price Suffix Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="suffix%s"
                values={{
                  family: suffixFontFamily,
                  size: suffixFontSize,
                  sizeMobile: suffixFontSizeMobile,
                  sizeTablet: suffixFontSizeTablet,
                  weight: suffixFontWeight,
                  height: suffixLineHeight,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={__(
                  "Sub Price Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="subprice%s"
                values={{
                  family: subpriceFontFamily,
                  size: subpriceFontSize,
                  sizeMobile: subpriceFontSizeMobile,
                  sizeTablet: subpriceFontSizeTablet,
                  weight: subpriceFontWeight,
                  height: subpriceLineHeight,
                  transform: subpriceTextTransform,
                }}
                showLetterSpacing={false}
                showTextTransform={true}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={__(
                  "Features Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="features%s"
                values={{
                  family: featuresFontFamily,
                  size: featuresFontSize,
                  sizeMobile: featuresFontSizeMobile,
                  sizeTablet: featuresFontSizeTablet,
                  weight: featuresFontWeight,
                  height: featuresLineHeight,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={__("CTA Typography", "responsive-block-editor-addons")}
                attrNameTemplate="cta%s"
                values={{
                  family: ctaFontFamily,
                  size: ctaFontSize,
                  sizeMobile: ctaFontSizeMobile,
                  sizeTablet: ctaFontSizeTablet,
                  weight: ctaFontWeight,
                  height: ctaLineHeight,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
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
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
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
              <PanelBody
                title={__("Column Spacing", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <ResponsivePaddingControl
                  attrNameTemplate="column%s"
                  values={{
                    desktopTop: columnTopPadding,
                    desktopBottom: columnBottomPadding,
                    desktopLeft: columnLeftPadding,
                    desktopRight: columnRightPadding,

                    tabletTop: columnTopPaddingTablet,
                    tabletBottom: columnBottomPaddingTablet,
                    tabletLeft: columnLeftPaddingTablet,
                    tabletRight: columnRightPaddingTablet,

                    mobileTop: columnTopPaddingMobile,
                    mobileBottom: columnBottomPaddingMobile,
                    mobileLeft: columnLeftPaddingMobile,
                    mobileRight: columnRightPaddingMobile,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
              </PanelBody>
              <ResponsiveSpacingControl
                title={"Title"}
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
                title={"Price"}
                attrNameTemplate="priceSpace%s"
                values={{
                  desktop: priceSpace,
                  tablet: priceSpaceTablet,
                  mobile: priceSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Sub Price"}
                attrNameTemplate="subpriceSpace%s"
                values={{
                  desktop: subpriceSpace,
                  tablet: subpriceSpaceTablet,
                  mobile: subpriceSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Button"}
                attrNameTemplate="buttonSpace%s"
                values={{
                  desktop: buttonSpace,
                  tablet: buttonSpaceTablet,
                  mobile: buttonSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Features"}
                attrNameTemplate="featuresSpace%s"
                values={{
                  desktop: featuresSpace,
                  tablet: featuresSpaceTablet,
                  mobile: featuresSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
            </PanelBody>
            <PanelColorSettings
              title={__("Color Settings", "responsive-block-editor-addons")}
              initialOpen={false}
              colorSettings={[
                {
                  value: textColor,
                  onChange: (colorValue) =>
                    setAttributes({ textColor: colorValue }),
                  label: __("Text Color", "responsive-block-editor-addons"),
                },
                {
                  value: titleColor,
                  onChange: (colorValue) =>
                    setAttributes({ titleColor: colorValue }),
                  label: __("Title Color", "responsive-block-editor-addons"),
                },
                {
                  value: prefixColor,
                  onChange: (colorValue) =>
                    setAttributes({ prefixColor: colorValue }),
                  label: __(
                    "Price Prefix Color",
                    "responsive-block-editor-addons"
                  ),
                },
                {
                  value: priceColor,
                  onChange: (colorValue) =>
                    setAttributes({ priceColor: colorValue }),
                  label: __("Price Color", "responsive-block-editor-addons"),
                },
                {
                  value: suffixColor,
                  onChange: (colorValue) =>
                    setAttributes({ suffixColor: colorValue }),
                  label: __(
                    "Price Suffix Color",
                    "responsive-block-editor-addons"
                  ),
                },
                {
                  value: subpriceColor,
                  onChange: (colorValue) =>
                    setAttributes({ subpriceColor: colorValue }),
                  label: __(
                    "Sub Price Color",
                    "responsive-block-editor-addons"
                  ),
                },
                {
                  value: featuresColor,
                  onChange: (colorValue) =>
                    setAttributes({ featuresColor: colorValue }),
                  label: __("Features Color", "responsive-block-editor-addons"),
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
