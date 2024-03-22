/**
 * Inspector Controls
 */
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import BoxShadowControl from "../../../utils/components/box-shadow";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import renderSVG from "../../../renderIcon";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ColorBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import ImageBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ImageBackgroundSettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import ResponsivePaddingControl from "../../../settings-components/ResponsiveSpacingSettings/ResponsivePaddingControl";
import GradientBackgroundControl from "../../../settings-components/BlockBackgroundSettings/GradientBackgroundSettings";
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
  Button,
  Icon,
  PanelBody,
  RangeControl,
  SelectControl,
  ToggleControl,
  TabPanel,
  Dashicon,
} = wp.components;

let svg_icons = Object.keys(ResponsiveBlocksIcon);

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    // Setup the attributes
    const {
      ctaBackColor,
      ctaColor,
      buttonSize,
      buttonShape,
      buttonTarget,
      ctaTitleFontFamily,
      ctaTitleFontSize,
      ctaTitleFontSizeMobile,
      ctaTitleFontSizeTablet,
      ctaTextFontFamily,
      ctaTextFontSize,
      ctaTextFontSizeMobile,
      ctaTextFontSizeTablet,
      backgroundColor,
      ctaTextColor,
      dimRatio,
      backgroundImage,
      imgID,
      opacity,
      ctaTitleFontWeight,
      ctaTitleLineHeight,
      ctaTextFontWeight,
      ctaTextLineHeight,
      ctaVpadding,
      ctaHpadding,
      icon,
      iconPosition,
      ctaHoverBackColor,
      ctaHoverColor,
      ctaBorderColor,
      ctaHoverBorderColor,
      resctaType,
      titleSpace,
      titleSpaceMobile,
      titleSpaceTablet,
      subtitleSpace,
      subtitleSpaceMobile,
      subtitleSpaceTablet,
      iconSpace,
      backgroundType,
      gradientDirection,
      colorLocation1,
      colorLocation2,
      backgroundColor1,
      backgroundColor2,
      buttonbackgroundType,
      buttongradientDirection,
      buttoncolorLocation1,
      buttoncolorLocation2,
      buttonbackgroundColor1,
      buttonbackgroundColor2,
      buttonSpace,
      buttonSpaceMobile,
      buttonSpaceTablet,
      borderRadius,
      boxShadowColor,
      boxShadowHOffset,
      boxShadowVOffset,
      boxShadowBlur,
      boxShadowSpread,
      boxShadowPosition,
      icon_color,
      blockTopPadding,
      blockTopPaddingMobile,
      blockTopPaddingTablet,
      blockBottomPadding,
      blockBottomPaddingMobile,
      blockBottomPaddingTablet,
      blockLeftPadding,
      blockLeftPaddingMobile,
      blockLeftPaddingTablet,
      blockRightPadding,
      blockRightPaddingMobile,
      blockRightPaddingTablet,
      backgroundImagePosition,
      backgroundImageRepeat,
      backgroundImageSize,
      buttonTextFontFamily,
      buttonTextFontSize,
      buttonTextFontSizeMobile,
      buttonTextFontSizeTablet,
      buttonTextLineHeight,
      buttonTextFontWeight,
      ctaBorderStyle,
      ctaBorderWidth,
      ctaBorderRadius,
      ctaHpaddingTablet,
      ctaHpaddingMobile,
      ctaVpaddingTablet,
      ctaVpaddingMobile,
      ctaTextOpacity,
      buttonHbackgroundType,
      hideWidget,
      hideWidgetTablet,
      hideWidgetMobile,
      //Z-Index
      z_index,
      z_indexMobile,
      z_indexTablet,
    } = this.props.attributes;
    const { setAttributes } = this.props;

    // Button size values
    const buttonSizeOptions = [
      {
        value: "responsive-block-editor-addons-cta-button-size-small",
        label: __("Small", "responsive-block-editor-addons"),
      },
      {
        value: "responsive-block-editor-addons-cta-button-size-medium",
        label: __("Medium", "responsive-block-editor-addons"),
      },
      {
        value: "responsive-block-editor-addons-cta-button-size-large",
        label: __("Large", "responsive-block-editor-addons"),
      },
      {
        value: "responsive-block-editor-addons-cta-button-size-extralarge",
        label: __("Extra Large", "responsive-block-editor-addons"),
      },
    ];

    // Button shape
    const buttonShapeOptions = [
      {
        value: "responsive-block-editor-addons-cta-button-shape-square",
        label: __("Square", "responsive-block-editor-addons"),
      },
      {
        value: "responsive-block-editor-addons-cta-button-shape-rounded",
        label: __("Rounded Square", "responsive-block-editor-addons"),
      },
      {
        value: "responsive-block-editor-addons-cta-button-shape-circular",
        label: __("Circular", "responsive-block-editor-addons"),
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

    // Change the image
    const onSelectImage = (img) => {
      setAttributes({
        imgID: img.id,
        imgURL: img.url,
        imgAlt: img.alt,
      });
    };

    // Clear the image
    const onRemoveImage = () => {
      setAttributes({
        imgID: null,
        imgURL: null,
        imgAlt: null,
      });
    };

    // Update color values
    const onChangeBackgroundColor = (value) =>
      setAttributes({ backgroundColor: value });
    const onChangeTextColor = (value) => setAttributes({ ctaTextColor: value });
    const onChangeButtonColor = (value) =>
      setAttributes({ ctaBackColor: value });
    const onChangeButtonTextColor = (value) =>
      setAttributes({ ctaColor: value });

    const onChangeBorderColor = (value) =>
      setAttributes({ ctaBorderColor: value });
    const onChangeBorderHoverColor = (value) =>
      setAttributes({ ctaHoverBorderColor: value });
    const onChangeButtonTexthColor = (value) =>
      setAttributes({ ctaHoverColor: value });
    const onChangeButtonhColor = (value) =>
      setAttributes({ ctaHoverBackColor: value });

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

    // Background Type Options
    const buttonbackgroundTypeOptions = [
      { value: "none", label: __("None", "responsive-block-editor-addons") },
      { value: "color", label: __("Color", "responsive-block-editor-addons") },
      {
        value: "gradient",
        label: __("Gradient", "responsive-block-editor-addons"),
      },
    ];

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={true}
            >
              <RangeControl
                label={__("Border Radius", "responsive-block-editor-addons")}
                value={borderRadius}
                onChange={(value) =>
                  setAttributes({
                    borderRadius: value !== undefined ? value : 12,
                  })
                }
                min={0}
                max={50}
                allowReset
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
          </InspectorTab>
          <InspectorTab key={"style"}>
			<PanelBody
				title={__("Typography Options", "responsive-block-editor-addons")}
				initialOpen={false}
			>
				<TypographyHelperControl
					title={__("Title Typography", "responsive-block-editor-addons")}
					attrNameTemplate="ctaTitle%s"
					values={{
						family: ctaTitleFontFamily,
						size: ctaTitleFontSize,
						sizeMobile: ctaTitleFontSizeMobile,
						sizeTablet: ctaTitleFontSizeTablet,
						weight: ctaTitleFontWeight,
						height: ctaTitleLineHeight,
					}}
					showLetterSpacing={false}
					showTextTransform={false}
					setAttributes={setAttributes}
					{...this.props}
				/>
				<TypographyHelperControl
					title={__("Description Typography", "responsive-block-editor-addons")}
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
				{resctaType === "text" && (
					<PanelBody
						title={__(
						"CTA Text Typography",
						"responsive-block-editor-addons"
						)}
						initialOpen={false}
					>
						<SelectControl
						label={__("Font Family", "responsive-block-editor-addons")}
						options={fontOptions}
						value={buttonTextFontFamily}
						onChange={(value) => {
							setAttributes({
							buttonTextFontFamily: value,
							}),
							loadGoogleFont(value);
						}}
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
							let tabout;

							if ("mobile" === tab.name) {
							tabout = (
								<Fragment>
								<RangeControl
									label={__(
									"Font Size",
									"responsive-block-editor-addons"
									)}
									min={0}
									max={500}
									value={buttonTextFontSizeMobile}
									onChange={(value) =>
									setAttributes({
										buttonTextFontSizeMobile: value,
									})
									}
								/>
								</Fragment>
							);
							} else if ("tablet" === tab.name) {
							tabout = (
								<Fragment>
								<RangeControl
									label={__(
									"Font Size",
									"responsive-block-editor-addons"
									)}
									min={0}
									max={500}
									value={buttonTextFontSizeTablet}
									onChange={(value) =>
									setAttributes({
										buttonTextFontSizeTablet: value,
									})
									}
								/>
								</Fragment>
							);
							} else {
							tabout = (
								<Fragment>
								<RangeControl
									label={__(
									"Font Size",
									"responsive-block-editor-addons"
									)}
									min={0}
									max={500}
									value={buttonTextFontSize}
									onChange={(value) =>
									setAttributes({
										buttonTextFontSize: value,
									})
									}
								/>
								</Fragment>
							);
							}

							return <div>{tabout}</div>;
						}}
						</TabPanel>
						<SelectControl
						label={__("Font Weight", "responsive-block-editor-addons")}
						options={[
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
						]}
						value={buttonTextFontWeight}
						onChange={(value) =>
							this.props.setAttributes({
							buttonTextFontWeight: value !== undefined ? value : 900,
							})
						}
						/>
						<RangeControl
						label={__("Line Height", "responsive-block-editor-addons")}
						value={buttonTextLineHeight}
						onChange={(value) =>
							this.props.setAttributes({
							buttonTextLineHeight: value,
							})
						}
						min={0}
						max={100}
						step={0.0001}
						/>
					</PanelBody>
				)}
				{resctaType === "button" && (
					<PanelBody
						title={__(
						"Button Typography",
						"responsive-block-editor-addons"
						)}
						initialOpen={false}
					>
						<SelectControl
						label={__("Font Family", "responsive-block-editor-addons")}
						options={fontOptions}
						value={buttonTextFontFamily}
						onChange={(value) => {
							setAttributes({
							buttonTextFontFamily: value,
							}),
							loadGoogleFont(value);
						}}
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
							let tabout;

							if ("mobile" === tab.name) {
							tabout = (
								<Fragment>
								<RangeControl
									label={__(
									"Font Size",
									"responsive-block-editor-addons"
									)}
									min={0}
									max={500}
									value={buttonTextFontSizeMobile}
									onChange={(value) =>
									setAttributes({
										buttonTextFontSizeMobile: value,
									})
									}
								/>
								</Fragment>
							);
							} else if ("tablet" === tab.name) {
							tabout = (
								<Fragment>
								<RangeControl
									label={__(
									"Font Size",
									"responsive-block-editor-addons"
									)}
									min={0}
									max={500}
									value={buttonTextFontSizeTablet}
									onChange={(value) =>
									setAttributes({
										buttonTextFontSizeTablet: value,
									})
									}
								/>
								</Fragment>
							);
							} else {
							tabout = (
								<Fragment>
								<RangeControl
									label={__(
									"Font Size",
									"responsive-block-editor-addons"
									)}
									min={0}
									max={500}
									value={buttonTextFontSize}
									onChange={(value) =>
									setAttributes({
										buttonTextFontSize: value,
									})
									}
								/>
								</Fragment>
							);
							}

							return <div>{tabout}</div>;
						}}
						</TabPanel>
						<SelectControl
						label={__("Font Weight", "responsive-block-editor-addons")}
						options={[
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
						]}
						value={buttonTextFontWeight}
						onChange={(value) =>
							this.props.setAttributes({
							buttonTextFontWeight: value !== undefined ? value : 900,
							})
						}
						/>
						<RangeControl
						label={__("Line Height", "responsive-block-editor-addons")}
						value={buttonTextLineHeight}
						onChange={(value) =>
							this.props.setAttributes({
							buttonTextLineHeight: value,
							})
						}
						min={0}
						max={100}
						step={0.0001}
            allowReset
						/>
					</PanelBody>
				)}
				<PanelColorSettings
					title={__("Text Color", "responsive-block-editor-addons")}
					initialOpen={false}
					colorSettings={[
						{
						value: ctaTextColor,
						onChange: onChangeTextColor,
						label: __("Text Color", "responsive-block-editor-addons"),
						},
					]}
				></PanelColorSettings>
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
              {"image" == backgroundType && (
                <ImageBackgroundControl
                  {...this.props}
                  showSomeImageOptions={true}
                  showMoreImageOptions={false}
                  showOverlayOptions={false}
                />
              )}
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

              {"color" == backgroundType && (
                <Fragment>
                  <ColorBackgroundControl {...this.props} />
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
            </PanelBody>
            <PanelBody
              title={__("Button Options", "responsive-block-editor-addons")}
              initialOpen={false}
            >

              <SelectControl
                label={__("Button Size", "responsive-block-editor-addons")}
                value={buttonSize}
                options={buttonSizeOptions.map(({ value, label }) => ({
                  value,
                  label,
                }))}
                onChange={(value) => {
                    if(value == "responsive-block-editor-addons-cta-button-size-small") {
                        this.props.setAttributes({buttonTextFontSize: 14})
                    }
                    if(value == "responsive-block-editor-addons-cta-button-size-medium") {
                        this.props.setAttributes({buttonTextFontSize: 20})
                        this.props.setAttributes({ctaHpadding: 14})
                        this.props.setAttributes({ctaVpadding: 18})
                    }
                    if(value == "responsive-block-editor-addons-cta-button-size-large") {
                        this.props.setAttributes({buttonTextFontSize: 26})
                        this.props.setAttributes({ctaHpadding: 30})
                        this.props.setAttributes({ctaVpadding: 20})
                    }
                    if(value == "responsive-block-editor-addons-cta-button-size-extralarge") {
                        this.props.setAttributes({buttonTextFontSize: 32})
                        this.props.setAttributes({ctaHpadding: 30})
                        this.props.setAttributes({ctaVpadding: 20})
                    }

                  this.props.setAttributes({
                    buttonSize: value,
                  });
                }}
              />

              <SelectControl
                label={__("Button Shape", "responsive-block-editor-addons")}
                value={buttonShape}
                options={buttonShapeOptions.map(({ value, label }) => ({
                  value,
                  label,
                }))}
                onChange={(value) => {
                    if(value == 'responsive-block-editor-addons-cta-button-shape-square') {
                        this.props.setAttributes({ctaBorderRadius: 0})
                    }
                    if(value == 'responsive-block-editor-addons-cta-button-shape-rounded') {
                        this.props.setAttributes({ctaBorderRadius: 4})
                    }
                    if(value =='responsive-block-editor-addons-cta-button-shape-circular') {
                        this.props.setAttributes({ctaBorderRadius: 100})
                    }
                  this.props.setAttributes({
                    buttonShape: value,
                  });
                }}
              />

              <SelectControl
                label={__("Type", "responsive-block-editor-addons")}
                value={resctaType}
                onChange={(value) => setAttributes({ resctaType: value })}
                options={[
                  {
                    value: "text",
                    label: __("Text", "responsive-block-editor-addons"),
                  },
                  {
                    value: "button",
                    label: __("Button", "responsive-block-editor-addons"),
                  },
                ]}
              />
              <ButtonSettingsControl
                {...this.props}
                showMarginControls={false}
                showBackColorOpacity={false}
                showGradientHover={false}
                showTextOpacity={true}
              />
            </PanelBody>
            {resctaType === "button" && (
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
                  <SelectControl
                    label={__("Icon Position", "responsive-block-editor-addons")}
                    value={iconPosition}
                    onChange={(value) => setAttributes({ iconPosition: value })}
                    options={[
                      { value: "before", label: __("Before Text", "responsive-block-editor-addons") },
                      { value: "after", label: __("After Text", "responsive-block-editor-addons") },
                    ]}
                  />
                  <RangeControl
                    label={__("Icon Spacing", "responsive-block-editor-addons")}
                    value={iconSpace}
                    onChange={(value) =>
                      setAttributes({
                        iconSpace: value !== undefined ? value : 8,
                      })
                    }
                    min={-100}
                    max={100}
                    allowReset
                  />
                </Fragment>
              </PanelBody>
            )}
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
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
              <PanelBody
                title={__("Margin", "responsive-block-editor-addons")}
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
                  title={"Text Bottom Margin"}
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
                  title={"Button Bottom Margin"}
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
