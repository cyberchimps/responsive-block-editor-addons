/**
 * Inspector Controls
 */
import BoxShadowControl from "../../../../utils/components/box-shadow";
import BoxShadowControlHelper from "../../../../utils/components/box-shadow-helper";
import InspectorTab from "../../../../components/InspectorTab";
import InspectorTabs from "../../../../components/InspectorTabs";
import BlockBorderHelperControl from "../../../../settings-components/BlockBorderSettings";
import ColorBackgroundControl from "../../../../settings-components/Block Background Settings/Color Background Settings";
import ImageBackgroundControl from "../../../../settings-components/Block Background Settings/Image Background Settings";
import GradientBackgroundControl from "../../../../settings-components/Block Background Settings/Gradient Background Settings";
import ResponsivePaddingControl from "../../../../settings-components/Responsive Spacing Settings/Responsive Padding Control";
import ResponsiveMarginControl from "../../../../settings-components/Responsive Spacing Settings/Responsive Margin Control";


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
  ButtonGroup,
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
    // Setup the attributes
    const {
      attributes: {
        width,
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

        columnGap,
        contentWidth,
        widthType,
        stack,
        backgroundColor,
        backgroundColor1,
        backgroundColor2,
        colorLocation1,
        colorLocation2,
        gradientDirection,
        hoverbackgroundColor1,
        hoverbackgroundColor2,
        hovercolorLocation1,
        hovercolorLocation2,
        hovergradientDirection,
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
        opacity,
        blockBorderStyle,
        blockBorderWidth,
        blockBorderRadius,
        blockBorderColor,
        columnTopMargin,
        columnTopMarginTablet,
        columnTopMarginMobile,
        columnBottomMargin,
        columnBottomMarginTablet,
        columnBottomMarginMobile,
        columnLeftMargin,
        columnLeftMarginTablet,
        columnLeftMarginMobile,
        columnRightMargin,
        columnRightMarginTablet,
        columnRightMarginMobile,
        columnTopPadding,
        columnTopPaddingTablet,
        columnTopPaddingMobile,
        columnBottomPadding,
        columnBottomPaddingTablet,
        columnBottomPaddingMobile,
        columnLeftPadding,
        columnLeftPaddingTablet,
        columnLeftPaddingMobile,
        columnRightPadding,
        columnRightPaddingTablet,
        columnRightPaddingMobile,
      },
      setAttributes,
    } = this.props;

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
              title={__("Layout", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RangeControl
                label={__("Content Width(%)", "responsive-block-editor-addons")}
                value={width}
                min={0}
                max={100}
                onChange={(value) =>
                  setAttributes({ width: value !== undefined ? value : 50 })
                }
                allowReset
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
                <GradientBackgroundControl
                  {...this.props}
                  showHoverGradient = {true}
                />
              )}
              {"image" == backgroundType && (
                <ImageBackgroundControl
                  showSomeImageOptions={true}
                  showMoreImageOptions={true}
                  showOverlayOptions={true}
                  {...this.props}
                />
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
				<ResponsiveMarginControl
					attrNameTemplate="column%s"
					values={{
						desktopTop: columnTopMargin,
						desktopBottom: columnBottomMargin,
						desktopLeft: columnLeftMargin,
						desktopRight: columnRightMargin,

						tabletTop: columnTopMarginTablet,
						tabletBottom: columnBottomMarginTablet,
						tabletLeft: columnLeftMarginTablet,
						tabletRight: columnRightMarginTablet,

						mobileTop: columnTopMarginMobile,
						mobileBottom: columnBottomMarginMobile,
						mobileLeft: columnLeftMarginMobile,
						mobileRight: columnRightMarginMobile,
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
                    values = {{radius: blockBorderRadius, style: blockBorderStyle, width: blockBorderWidth, color: blockBorderColor}}
                    setAttributes={ setAttributes }
                    {...this.props}
                />

              <BoxShadowControl
                setAttributes={setAttributes}
                label={__("Box Shadow", "responsive-block-editor-addons")}
                boxShadowColor={{ value: boxShadowColor, label: __("Color") }}
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
                boxShadowColor={{ value: hoverboxShadowColor }}
                boxShadowHOffset={{ value: hoverboxShadowHOffset }}
                boxShadowVOffset={{ value: hoverboxShadowVOffset }}
                boxShadowBlur={{ value: hoverboxShadowBlur }}
                boxShadowSpread={{ value: hoverboxShadowSpread }}
                boxShadowPosition={{ value: hoverboxShadowPosition }}
                label={__("Hover Box Shadow")}
                attrNameTemplate="hover%s"
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"advance"}></InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
