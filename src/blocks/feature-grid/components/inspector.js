/**
 * Inspector Controls
 */

import times from "lodash/times";
import BoxShadowControl from "../../../utils/components/box-shadow";
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
const { InspectorControls, PanelColorSettings, AlignmentToolbar } = wp.blockEditor;

// Import Inspector components
const { PanelBody, RangeControl, SelectControl, ToggleControl } = wp.components;

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
        layout,
        ctaDesign,
        count,
        titleTag,
        featureGrid,
        titleColor,
        descColor,
        blockBorderStyle,
        blockBorderWidth,
        blockBorderRadius,
        blockBorderColor,
        backgroundType,
        opacity,
        boxShadowColor,
        boxShadowHOffset,
        boxShadowVOffset,
        boxShadowBlur,
        boxShadowSpread,
        boxShadowPosition,
        titleFontFamily,
        titleFontSize,
        titleFontWeight,
        titleLineHeight,
        descFontFamily,
        descFontSize,
        descFontWeight,
        descLineHeight,
        descTextTransform,
        titleTextTransform,
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
        columnBackColorOpacity,
        showImage,
        showTitle,
        showDesc,
        showButton,
        titleSpace,
        imageSpace,
        descSpace,
        buttonSpace,
        titleSpaceMobile,
        imageSpaceMobile,
        descSpaceMobile,
        buttonSpaceMobile,
        titleSpaceTablet,
        imageSpaceTablet,
        descSpaceTablet,
        buttonSpaceTablet,
        blockAlign,
        titleFontSizeMobile,
        titleFontSizeTablet,
        descFontSizeMobile,
        descFontSizeTablet,
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
              <SelectControl
                label={__("Layout", "responsive-block-editor-addons")}
                value={layout}
                onChange={(value) => {
                  setAttributes({ layout: value });
                  if (value === "basic") {
                    setAttributes({
                      boxShadowBlur: 2,
                      boxShadowSpread: 1,
                      boxShadowColor: "#e9e7e7",
                      columnTopPadding: 60,
                      columnBottomPadding: 60,
                      columnLeftPadding: 35,
                      columnRightPadding: 35,
                    });
                  }
                  if (value === "plain") {
                    setAttributes({
                      boxShadowBlur: 0,
                      boxShadowSpread: 0,
                      boxShadowColor: "",
                      columnTopPadding: "",
                      columnBottomPadding: "",
                      columnLeftPadding: "",
                      columnRightPadding: "",
                    });
                  }
                }}
                options={[
                  {
                    value: "basic",
                    label: __("Basic", "responsive-block-editor-addons"),
                  },
                  {
                    value: "plain",
                    label: __("Plain", "responsive-block-editor-addons"),
                  },
                ]}
              />
              <RangeControl
                label={__("Columns", "responsive-block-editor-addons")}
                value={count}
                onChange={(newCount) => {
                  let cloneTest_block = [...featureGrid];
                  if (cloneTest_block.length < newCount) {
                    const incAmount = Math.abs(
                      newCount - cloneTest_block.length
                    );

                    {
                      times(incAmount, (n) => {
                        cloneTest_block.push({
                          title: "Title ",
                          desc:
                            "Description for this block. You can use this space for describing your block.",
                          button: "Button Text",
                          buttonURL: "",
                        });
                      });
                    }
                    setAttributes({ featureGrid: cloneTest_block });
                  } else {
                    const incAmount = Math.abs(
                      newCount - cloneTest_block.length
                    );
                    let data_new = cloneTest_block;
                    for (var i = 0; i < incAmount; i++) {
                      data_new.pop();
                    }
                    setAttributes({ featureGrid: data_new });
                  }
                  setAttributes({ count: newCount });
                }}
                min={1}
                max={4}
                step={1}
              />
              <p>{__("Alignment", "responsive-block-editor-addons")}</p>
              <AlignmentToolbar
                value={blockAlign}
                onChange={(value) =>
                  setAttributes({
                    blockAlign: value,
                  })
                }
                controls={["left", "center", "right"]}
                isCollapsed={false}
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
                  label={__("Description", "responsive-block-editor-addons")}
                  checked={showDesc}
                  onChange={() =>
                    this.props.setAttributes({
                      showDesc: !showDesc,
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
                <SelectControl
                  label={__("Heading Tag", "responsive-block-editor-addons")}
                  value={titleTag}
                  onChange={(value) => setAttributes({ titleTag: value })}
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
                    {
                      value: "p",
                      label: __("P", "responsive-block-editor-addons"),
                    },
                  ]}
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
              <SelectControl
                label={__("Design", "responsive-block-editor-addons")}
                value={ctaDesign}
                onChange={(value) => {
                  setAttributes({ ctaDesign: value });
                  if (value === "basic") {
                    setAttributes({
                      ctaColor: "#fff",
                      ctaBackColor: "#3f46ae",
                      ctaHoverColor: "#fff",
                      ctaHoverBackColor: "#3f46ae",
                      ctaBorderColor: "#333",
                      ctaBorderStyle: "none",
                      ctaBorderRadius: 0,
                      ctaBorderWidth: 2,
                      ctaHpadding: 30,
                      ctaVpadding: 15,
                      descSpace: 40,
                    });
                  }
                  if (value === "ghost") {
                    setAttributes({
                      ctaColor: "",
                      ctaBackColor: "",
                      ctaHoverColor: "",
                      ctaHoverBackColor: "",
                      ctaBorderColor: "#0066cc",
                      ctaBorderStyle: "solid",
                      ctaBorderRadius: 5,
                      ctaBorderWidth: 2,
                      ctaHpadding: 30,
                      ctaVpadding: 15,
                      descSpace: 40,
                    });
                  }
                  if (value === "plain") {
                    setAttributes({
                      ctaColor: "",
                      ctaBackColor: "",
                      ctaHoverColor: "",
                      ctaHoverBackColor: "",
                      ctaBorderColor: "",
                      ctaBorderStyle: "",
                      ctaBorderRadius: "",
                      ctaBorderWidth: "",
                      ctaHpadding: "",
                      ctaVpadding: "",
                    });
                  }
                }}
                options={[
                  {
                    value: "basic",
                    label: __("Basic", "responsive-block-editor-addons"),
                  },
                  {
                    value: "ghost",
                    label: __("Ghost", "responsive-block-editor-addons"),
                  },
                  {
                    value: "plain",
                    label: __("Plain", "responsive-block-editor-addons"),
                  },
                ]}
              />
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
                  transform: titleTextTransform,
                }}
                showLetterSpacing={false}
                showTextTransform={true}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={__(
                  "Description Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="desc%s"
                values={{
                  family: descFontFamily,
                  size: descFontSize,
                  sizeMobile: descFontSizeMobile,
                  sizeTablet: descFontSizeTablet,
                  weight: descFontWeight,
                  height: descLineHeight,
                  transform: descTextTransform,
                }}
                showLetterSpacing={false}
                showTextTransform={true}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={__(
                  "Button Typography",
                  "responsive-block-editor-addons"
                )}
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
                boxShadowColor={{
                  value: boxShadowColor,
                  label: __("Color", "responsive-block-editor-addons"),
                }}
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
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <PanelBody
                title={__("Margin", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <ResponsiveSpacingControl
                  title={"Image Bottom"}
                  attrNameTemplate="imageSpace%s"
                  values={{
                    desktop: imageSpace,
                    tablet: imageSpaceTablet,
                    mobile: imageSpaceMobile,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
                <ResponsiveSpacingControl
                  title={"Title Bottom"}
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
                  title={"Description Bottom"}
                  attrNameTemplate="descSpace%s"
                  values={{
                    desktop: descSpace,
                    tablet: descSpaceTablet,
                    mobile: descSpaceMobile,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
                <ResponsiveSpacingControl
                  title={"Button Bottom"}
                  attrNameTemplate="buttonSpace%s"
                  values={{
                    desktop: buttonSpace,
                    tablet: buttonSpaceTablet,
                    mobile: buttonSpaceMobile,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
              </PanelBody>
              <PanelBody
                title={__("Column Padding", "responsive-block-editor-addons")}
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
            </PanelBody>
            <PanelColorSettings
              title={__("Color Settings", "responsive-block-editor-addons")}
              initialOpen={false}
              colorSettings={[
                {
                  value: titleColor,
                  onChange: (colorValue) =>
                    setAttributes({ titleColor: colorValue }),
                  label: __("Title Color", "responsive-block-editor-addons"),
                },
                {
                  value: descColor,
                  onChange: (colorValue) =>
                    setAttributes({ descColor: colorValue }),
                  label: __(
                    "Description Color",
                    "responsive-block-editor-addons"
                  ),
                },
              ]}
            ></PanelColorSettings>
          </InspectorTab>
          <InspectorTab key={"advance"}>
            <PanelBody
              title={__("Padding", "responsive-block-editor-addons")}
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
          </InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
