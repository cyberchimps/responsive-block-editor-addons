/**
 * Inspector Controls
 */

// Setup the block
import times from "lodash/times";
import BoxShadowControl from "../../../utils/components/box-shadow";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import BoxShadowControlHelper from "../../../utils/components/box-shadow-helper";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ImageSettingsControl from "../../../settings-components/ImageSettings";
import GradientBackgroundControl from "../../../settings-components/BlockBackgroundSettings/GradientBackgroundSettings";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";


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
  Button,
  BaseControl,
  TabPanel,
  Dashicon,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.onRemoveImage = this.onRemoveImage.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
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

  render() {
    const fontWeightOptions = [
      {
        value: "",
        label: __("Default", "responsive-block-editor-addons"),
      },
      {
        value: 100,
        label: __("100", "responsive-block-editor-addons"),
      },
      {
        value: 200,
        label: __("200", "responsive-block-editor-addons"),
      },
      {
        value: 300,
        label: __("300", "responsive-block-editor-addons"),
      },
      {
        value: 400,
        label: __("400", "responsive-block-editor-addons"),
      },
      {
        value: 500,
        label: __("500", "responsive-block-editor-addons"),
      },
      {
        value: 600,
        label: __("600", "responsive-block-editor-addons"),
      },
      {
        value: 700,
        label: __("700", "responsive-block-editor-addons"),
      },
      {
        value: 800,
        label: __("800", "responsive-block-editor-addons"),
      },
      {
        value: 900,
        label: __("900", "responsive-block-editor-addons"),
      },
    ];

    const textTransformOptions = [
      {
        value: "",
        label: __("Default", "responsive-block-editor-addons"),
      },
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

    // Cite Alignment Options
    const citeAlignOptions = [
      {
        value: "left-aligned",
        label: __("Left Aligned", "responsive-block-editor-addons"),
      },
      {
        value: "center-aligned",
        label: __("Center Aligned", "responsive-block-editor-addons"),
      },
      {
        value: "right-aligned",
        label: __("Right Aligned", "responsive-block-editor-addons"),
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

    // Setup the attributes
    const {
      attributes: {
        count,
        gutter,
        testimonialBlock,
        testimonialBackgroundColor,
        testimonialTextColor,
        testimonialTitleColor,
        testimonialNameColor,
        testimonialCiteAlign,
        blockBorderRadius,
        blockBorderColor,
        blockBorderWidth,
        blockBorderStyle,
        padding,
        paddingTablet,
        paddingMobile,
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
        backgroundImage,
        backgroundPosition,
        backgroundRepeat,
        backgroundSize,
        backgroundColor2,
        gradientDirection,
        bgGradient,
        opacity,
        titleFontSize,
        titleFontFamily,
        titleLineHeight,
        titleFontWeight,
        titleTextTransform,
        nameFontSize,
        nameFontFamily,
        nameLineHeight,
        nameFontWeight,
        nameTextTransform,
        contentFontFamily,
        contentFontSize,
        contentLineHeight,
        contentFontWeight,
        contentTextTransform,
        imageShape,
        imageSize,
        imageWidth,
        contentSpacing,
        contentSpacingMobile,
        contentSpacingTablet,
        titleSpacing,
        titleSpacingMobile,
        titleSpacingTablet,
        nameSpacing,
        nameSpacingMobile,
        nameSpacingTablet,
        imageSpacing,
        imageSpacingMobile,
        imageSpacingTablet,
        colorLocation1,
        colorLocation2,
		contentFontSizeMobile,
		contentFontSizeTablet,
		nameFontSizeMobile,
		nameFontSizeTablet,
		titleFontSizeMobile,
		titleFontSizeTablet,
      },
      setAttributes,
    } = this.props;

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
                  "Number of Testimonials",
                  "responsive-block-editor-addons"
                )}
                value={count}
                onChange={(newCount) => {
                  let cloneTest_block = [...testimonialBlock];
                  if (cloneTest_block.length < newCount) {
                    const incAmount = Math.abs(
                      newCount - cloneTest_block.length
                    );

                    {
                      times(incAmount, (n) => {
                        cloneTest_block.push({
                          title: "Team Title " + newCount,
                          descriptions: "",
                        });
                      });
                    }
                    setAttributes({ testimonialBlock: cloneTest_block });
                  } else {
                    const incAmount = Math.abs(
                      newCount - cloneTest_block.length
                    );
                    let data_new = cloneTest_block;
                    for (var i = 0; i < incAmount; i++) {
                      data_new.pop();
                    }
                    setAttributes({ testimonialBlock: data_new });
                  }
                  setAttributes({ count: newCount });
                }}
                min={1}
                max={3}
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
                label={__("Cite Alignment", "responsive-block-editor-addons")}
                description={__(
                  "Left, center or right align the cite name and title.",
                  "responsive-block-editor-addons"
                )}
                options={citeAlignOptions}
                value={testimonialCiteAlign}
                onChange={(value) =>
                  this.props.setAttributes({
                    testimonialCiteAlign: value,
                  })
                }
              />
            </PanelBody>
            <PanelBody
              title={__("Image", "responsive-block-editor-addons")}
              initialOpen={false}
            >
                  <ImageSettingsControl {...this.props} />
      </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelColorSettings
              title={__(
                "Colors and Background",
                "responsive-block-editor-addons"
              )}
              initialOpen={false}
              colorSettings={[
                {
                  label: __("Text Color", "responsive-block-editor-addons"),
                  value: testimonialTextColor,
                  onChange: (colorValue) =>
                    setAttributes({ testimonialTextColor: colorValue }),
                },
                {
                  label: __("Name Color", "responsive-block-editor-addons"),
                  value: testimonialNameColor,
                  onChange: (colorValue) =>
                    setAttributes({ testimonialNameColor: colorValue }),
                },
                {
                  label: __(
                    "Title/Designation Color",
                    "responsive-block-editor-addons"
                  ),
                  value: testimonialTitleColor,
                  onChange: (colorValue) =>
                    setAttributes({ testimonialTitleColor: colorValue }),
                },
                {
                  label: __(
                    "Background Color",
                    "responsive-block-editor-addons"
                  ),
                  value: testimonialBackgroundColor,
                  onChange: (colorValue) =>
                    setAttributes({ testimonialBackgroundColor: colorValue }),
                },
              ]}
            >
              <ToggleControl
                label="Gradient Background"
                checked={bgGradient}
                onChange={() =>
                  this.props.setAttributes({
                    bgGradient: !bgGradient,
                  })
                }
              />
              {bgGradient && [
                <GradientBackgroundControl
                  {...this.props}
                  showHoverGradient={false}
                  showColorOne={false}
                />
              ]}
              <RangeControl
                label={__(
                  "Background Color Opacity",
                  "responsive-block-editor-addons"
                )}
                value={opacity}
                onChange={(value) =>
                  this.props.setAttributes({
                    opacity: value !== undefined ? value : 1,
                  })
                }
                min={0}
                step={0.01}
                max={1}
                allowReset
              />
              <BaseControl
                className="editor-bg-image-control"
                label={__("Background Image", "responsive-block-editor-addons")}
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
                    <Button variant="secondary" onClick={open}>
                      {!backgroundImage
                        ? __(
                            "Select Background Image",
                            "responsive-block-editor-addons"
                          )
                        : __("Replace image", "responsive-block-editor-addons")}
                    </Button>
                  )}
                />
                {backgroundImage && (
                  <Button
                    className="uagb-rm-btn"
                    onClick={this.onRemoveImage}
                    isLink
                    isDestructive
                  >
                    {__("Remove Image", "responsive-block-editor-addons")}
                  </Button>
                )}
              </BaseControl>
              <SelectControl
                label={__("Background Position", "responsive-block-editor-addons")}
                value={backgroundPosition}
                onChange={(value) =>
                  setAttributes({ backgroundPosition: value })
                }
                options={[
                  { value: "left top", label: __("Left Top", "responsive-block-editor-addons") },
                  { value: "left center", label: __("Left Center", "responsive-block-editor-addons") },
                  { value: "left bottom", label: __("Left Bottom", "responsive-block-editor-addons") },
                  { value: "right top", label: __("Right Top", "responsive-block-editor-addons") },
                  { value: "right center", label: __("Right Center", "responsive-block-editor-addons") },
                  { value: "right bottom", label: __("Right Bottom", "responsive-block-editor-addons") },
                  { value: "center top", label: __("Center Top", "responsive-block-editor-addons") },
                  { value: "center center", label: __("Center Center", "responsive-block-editor-addons") },
                  { value: "center bottom", label: __("Center Bottom", "responsive-block-editor-addons") },
                ]}
              />
              <SelectControl
                label={__("Background Repeat", "responsive-block-editor-addons")}
                value={backgroundRepeat}
                onChange={(value) => setAttributes({ backgroundRepeat: value })}
                options={[
                  { value: "initial", label: __("Initial", "responsive-block-editor-addons") },
                  { value: "repeat", label: __("Repeat", "responsive-block-editor-addons") },
                  { value: "no-repeat", label: __("No-Repeat", "responsive-block-editor-addons") },
                  { value: "round", label: __("Round", "responsive-block-editor-addons") },
                  { value: "inherit", label: __("Inherit", "responsive-block-editor-addons") },
                  { value: "space", label: __("Space", "responsive-block-editor-addons") },
                  { value: "repeat-y", label: __("Repeat Y", "responsive-block-editor-addons") },
                  { value: "repeat-x", label: __("Repeat X", "responsive-block-editor-addons") },
                ]}
              />
              <SelectControl
                label={__("Background Size", "responsive-block-editor-addons")}
                value={backgroundSize}
                onChange={(value) => setAttributes({ backgroundSize: value })}
                options={[
                  { value: "initial", label: __("Initial", "responsive-block-editor-addons") },
                  { value: "cover", label: __("Cover", "responsive-block-editor-addons") },
                  { value: "contain", label: __("Contain", "responsive-block-editor-addons") },
                  { value: "auto", label: __("Auto", "responsive-block-editor-addons") },
                  { value: "inherit", label: __("Inherit", "responsive-block-editor-addons") },
                ]}
              />
            </PanelColorSettings>
            <PanelBody
              title={__("Typography", "responsive-block-editor-addons")}
              initialOpen={false}
            >
				<TypographyHelperControl
					title={__("Content", "responsive-block-editor-addons")}
					attrNameTemplate="content%s"
					values={{
					family: contentFontFamily,
					size: contentFontSize,
					sizeMobile: contentFontSizeMobile,
					sizeTablet: contentFontSizeTablet,
					weight: contentFontWeight,
					height: contentLineHeight,
					transform: contentTextTransform
					}}
					showLetterSpacing={false}
					showTextTransform={true}
					setAttributes={setAttributes}
					{...this.props}
				/>
				<TypographyHelperControl
					title={__("Name", "responsive-block-editor-addons")}
					attrNameTemplate="name%s"
					values={{
					family: nameFontFamily,
					size: nameFontSize,
					sizeMobile: nameFontSizeMobile,
					sizeTablet: nameFontSizeTablet,
					weight: nameFontWeight,
					height: nameLineHeight,
					transform: nameTextTransform
					}}
					showLetterSpacing={false}
					showTextTransform={true}
					setAttributes={setAttributes}
					{...this.props}
				/>
				<TypographyHelperControl
					title={__("Title", "responsive-block-editor-addons")}
					attrNameTemplate="title%s"
					values={{
					family: titleFontFamily,
					size: titleFontSize,
					sizeMobile: titleFontSizeMobile,
					sizeTablet: titleFontSizeTablet,
					weight: titleFontWeight,
					height: titleLineHeight,
					transform: titleTextTransform
					}}
					showLetterSpacing={false}
					showTextTransform={true}
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
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ResponsiveSpacingControl
                title={"Padding"}
                attrNameTemplate="padding%s"
                values={{ desktop: padding, tablet: paddingTablet, mobile: paddingMobile }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Content"}
                attrNameTemplate="contentSpacing%s"
                values={{ desktop: contentSpacing, tablet: contentSpacingTablet, mobile: contentSpacingMobile }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Name"}
                attrNameTemplate="nameSpacing%s"
                values={{ desktop: nameSpacing, tablet: nameSpacingTablet, mobile: nameSpacingMobile }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Image"}
                attrNameTemplate="imageSpacing%s"
                values={{ desktop: imageSpacing, tablet: imageSpacingTablet, mobile: imageSpacingMobile }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Title"}
                attrNameTemplate="titleSpacing%s"
                values={{ desktop: titleSpacing, tablet: titleSpacingTablet, mobile: titleSpacingMobile }}
                setAttributes={setAttributes}
                {...this.props}
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"advance"}></InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
