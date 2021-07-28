import BoxShadowControl from "../../../utils/components/box-shadow";
import ColorBackgroundControl from "../../../settings-components/Block Background Settings/Color Background Settings";
import GradientBackgroundControl from "../../../settings-components/Block Background Settings/Gradient Background Settings";
import BlockBorderHelperControl from "../../../settings-components/Block Border Settings";
import ImageBackgroundControl from "../../../settings-components/Block Background Settings/Image Background Settings/index";
import ResponsivePaddingControl from "../../../settings-components/Responsive Spacing Settings/Responsive Padding Control";
import ResponsiveMarginControl from "../../../settings-components/Responsive Spacing Settings/Responsive Margin Control";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";

/**
 * Inspector Controls
 */

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
        columns,
        columnGap,
        contentWidth,
        width,
        widthType,
        stack,
        blockTopPadding,
        blockTopPaddingTablet,
        blockTopPaddingMobile,
        blockBottomPadding,
        blockBottomPaddingTablet,
        blockBottomPaddingMobile,
        blockLeftPadding,
        blockLeftPaddingTablet,
        blockLeftPaddingMobile,
        blockRightPadding,
        blockRightPaddingTablet,
        blockRightPaddingMobile,
        blockTopMargin,
        blockTopMarginTablet,
        blockTopMarginMobile,
        blockBottomMargin,
        blockBottomMarginTablet,
        blockBottomMarginMobile,
        blockLeftMargin,
        blockLeftMarginTablet,
        blockLeftMarginMobile,
        blockRightMargin,
        blockRightMarginTablet,
        blockRightMarginMobile,
        backgroundColor,
        backgroundColor1,
        backgroundColor2,
        colorLocation1,
        colorLocation2,
        gradientDirection,
        backgroundType,
        backgroundImage,
        opacity,
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
        height,
        customHeight,
        blockAlign,
        verticalAlign,
        z_index,
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
          <InspectorTab key={'content'}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RangeControl
                label={__("Columns", "responsive-block-editor-addons")}
                value={columns}
                min={0}
                max={6}
                onChange={(value) =>
                  setAttributes({ columns: value !== undefined ? value : 2 })
                }
                allowReset
              />

              <SelectControl
                label={__("Column Gap", "responsive-block-editor-addons")}
                value={columnGap}
                onChange={(value) => setAttributes({ columnGap: value })}
                options={[
                  {
                    value: "default",
                    label: __("Default (10px)", "responsive-block-editor-addons"),
                  },
                  {
                    value: "nogap",
                    label: __("No Gap (0px)", "responsive-block-editor-addons"),
                  },
                  {
                    value: "narrow",
                    label: __("Narrow (5px)", "responsive-block-editor-addons"),
                  },
                  {
                    value: "extended",
                    label: __("Extended (15px)", "responsive-block-editor-addons"),
                  },
                  {
                    value: "wide",
                    label: __("Wide (20px)", "responsive-block-editor-addons"),
                  },
                  {
                    value: "wider",
                    label: __("Wider (30px)", "responsive-block-editor-addons"),
                  },
                ]}
                help={__(
                  "Note: The individual Column Gap can be managed from Column Settings.",
                  "responsive-block-editor-addons"
                )}
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
              <SelectControl
                label={__("Container Width", "responsive-block-editor-addons")}
                value={contentWidth}
                onChange={(value) => setAttributes({ contentWidth: value })}
                options={[
                  {
                    value: "theme",
                    label: __(
                      "Theme Container Width",
                      "responsive-block-editor-addons"
                    ),
                  },
                  {
                    value: "custom",
                    label: __("Custom", "responsive-block-editor-addons"),
                  },
                ]}
              />
              {contentWidth == "custom" && (
                <Fragment>
                  <ButtonGroup
                    className="responsive-size-type-field"
                    aria-label={__("Size Type", "responsive-block-editor-addons")}
                  >
                    <Button
                      key={"px"}
                      className="responsive-size-btn"
                      isSmall
                      isPrimary={widthType === "px"}
                      aria-pressed={widthType === "px"}
                      min={0}
                      max={2000}
                      onClick={() => setAttributes({ widthType: "px" })}
                    >
                      {"px"}
                    </Button>
                    <Button
                      key={"%"}
                      className="responsive-size-btn"
                      isSmall
                      isPrimary={widthType === "%"}
                      aria-pressed={widthType === "%"}
                      min={0}
                      max={100}
                      onClick={() => setAttributes({ widthType: "%" })}
                    >
                      {"%"}
                    </Button>
                  </ButtonGroup>
                  <RangeControl
                    label={__("Inner Width", "responsive-block-editor-addons")}
                    value={width}
                    min={0}
                    max={"%" == widthType ? 100 : 2000}
                    onChange={(value) =>
                      setAttributes({ width: value !== undefined ? value : 900 })
                    }
                    allowReset
                  />
                </Fragment>
              )}

              <SelectControl
                label={__("Height")}
                value={height}
                onChange={(value) => setAttributes({ height: value })}
                options={[
                  { value: "", label: __("Normal") },
                  { value: "half", label: __("Half-Screen Height") },
                  { value: "full", label: __("Full-Screen Height") },
                  { value: "custom", label: __("Custom") },
                ]}
              />
              {"custom" == height && (
                <RangeControl
                  label={__("Custom Height", "responsive-block-editor-addons")}
                  value={customHeight}
                  min={0}
                  max={1500}
                  onChange={(value) =>
                    setAttributes({
                      customHeight: value !== undefined ? value : 50,
                    })
                  }
                  allowReset
                />
              )}
              <SelectControl
                label={__("Horizontal Align")}
                value={blockAlign}
                onChange={(value) => setAttributes({ blockAlign: value })}
                options={[
                  { value: "left", label: __("Left") },
                  { value: "right", label: __("Right") },
                  { value: "center", label: __("Center") },
                ]}
              />
              <SelectControl
                label={__("Vertical Align")}
                value={verticalAlign}
                onChange={(value) => setAttributes({ verticalAlign: value })}
                options={[
                  { value: "flex-start", label: __("Top") },
                  { value: "flex-end", label: __("Bottom") },
                  { value: "center", label: __("Center") },
                ]}
              />
              <RangeControl
                label={__("z-index", "responsive-block-editor-addons")}
                min={-1}
                max={99999}
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
                  <ColorBackgroundControl 
                    {...this.props}
                  />
                </Fragment>
              )}
              {"gradient" == backgroundType && (
                <Fragment>
                <GradientBackgroundControl
                    {...this.props}
                    showHoverGradient = {false}
                />
                </Fragment>
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
          <InspectorTab key={'style'}>
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ResponsivePaddingControl
                attrNameTemplate="block%s"
                values = {{
                  desktopTop:blockTopPadding, 
                  desktopBottom:blockBottomPadding, 
                  desktopLeft:blockLeftPadding, 
                  desktopRight:blockRightPadding, 

                  tabletTop:blockTopPaddingTablet,
                  tabletBottom:blockBottomPaddingTablet, 
                  tabletLeft:blockLeftPaddingTablet, 
                  tabletRight:blockRightPaddingTablet, 

                  mobileTop:blockTopPaddingMobile,
                  mobileBottom:blockBottomPaddingMobile,
                  mobileLeft:blockLeftPaddingMobile,
                  mobileRight:blockRightPaddingMobile,
                }}
                setAttributes={ setAttributes }
                {...this.props}            
              />
              <ResponsiveMarginControl
                attrNameTemplate="block%s"
                values = {{
                  desktopTop:blockTopMargin, 
                  desktopBottom:blockBottomMargin, 
                  desktopLeft:blockLeftMargin, 
                  desktopRight:blockRightMargin, 

                  tabletTop:blockTopMarginTablet,
                  tabletBottom:blockBottomMarginTablet, 
                  tabletLeft:blockLeftMarginTablet, 
                  tabletRight:blockRightMarginTablet, 

                  mobileTop:blockTopMarginMobile,
                  mobileBottom:blockBottomMarginMobile,
                  mobileLeft:blockLeftMarginMobile,
                  mobileRight:blockRightMarginMobile,
                }}
                setAttributes={ setAttributes }
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
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={'advance'}>
            
          </InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
