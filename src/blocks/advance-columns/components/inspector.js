import BoxShadowControl from "../../../utils/components/box-shadow";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import ColorBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import ImageBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ImageBackgroundSettings";
import GradientBackgroundControl from "../../../settings-components/BlockBackgroundSettings/GradientBackgroundSettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import ResponsivePaddingControl from "../../../settings-components/ResponsiveSpacingSettings/ResponsivePaddingControl";

/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { ColorPalette, MediaUpload, InspectorControls } = wp.blockEditor;

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
  ToggleControl,
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
        boxTopPadding,
        boxTopPaddingTablet,
        boxTopPaddingMobile,
        boxBottomPadding,
        boxBottomPaddingTablet,
        boxBottomPaddingMobile,
        boxLeftPadding,
        boxLeftPaddingTablet,
        boxLeftPaddingMobile,
        boxRightPadding,
        boxRightPaddingTablet,
        boxRightPaddingMobile,
        topMargin,
        topMarginTablet,
        topMarginMobile,
        bottomMargin,
        bottomMarginTablet,
        bottomMarginMobile,
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
        hideWidget,
        hideWidgetTablet,
        hideWidgetMobile,
        z_indexTablet,
        z_indexMobile,
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
                    label: __("No Gap (0px)", "responsive-block-editor-addons"),
                  },
                  {
                    value: "narrow",
                    label: __("Narrow (5px)", "responsive-block-editor-addons"),
                  },
                  {
                    value: "medium",
                    label: __(
                      "Medium (10px)",
                      "responsive-block-editor-addons"
                    ),
                  },
                  {
                    value: "extended",
                    label: __(
                      "Extended (15px)",
                      "responsive-block-editor-addons"
                    ),
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
                    aria-label={__(
                      "Size Type",
                      "responsive-block-editor-addons"
                    )}
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
                      setAttributes({
                        width: value !== undefined ? value : 900,
                      })
                    }
                    allowReset
                  />
                </Fragment>
              )}

              <SelectControl
                label={__("Height", "responsive-block-editor-addons")}
                value={height}
                onChange={(value) => setAttributes({ height: value })}
                options={[
                  { value: "", label: __("Normal", "responsive-block-editor-addons") },
                  { value: "half", label: __("Half-Screen Height", "responsive-block-editor-addons") },
                  { value: "full", label: __("Full-Screen Height", "responsive-block-editor-addons") },
                  { value: "custom", label: __("Custom", "responsive-block-editor-addons") },
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
                label={__("Horizontal Align", "responsive-block-editor-addons")}
                value={blockAlign}
                onChange={(value) => setAttributes({ blockAlign: value })}
                options={[
                  { value: "left", label: __("Left", "responsive-block-editor-addons") },
                  { value: "right", label: __("Right", "responsive-block-editor-addons") },
                  { value: "center", label: __("Center", "responsive-block-editor-addons") },
                ]}
              />
              <SelectControl
                label={__("Vertical Align", "responsive-block-editor-addons")}
                value={verticalAlign}
                onChange={(value) => setAttributes({ verticalAlign: value })}
                options={[
                  { value: "flex-start", label: __("Top", "responsive-block-editor-addons") },
                  { value: "flex-end", label: __("Bottom", "responsive-block-editor-addons") },
                  { value: "center", label: __("Center", "responsive-block-editor-addons") },
                ]}
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
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
				<ResponsivePaddingControl
					attrNameTemplate="box%s"
					values={{
						desktopTop: boxTopPadding,
						desktopBottom: boxBottomPadding,
						desktopLeft: boxLeftPadding,
						desktopRight: boxRightPadding,

						tabletTop: boxTopPaddingTablet,
						tabletBottom: boxBottomPaddingTablet,
						tabletLeft: boxLeftPaddingTablet,
						tabletRight: boxRightPaddingTablet,

						mobileTop: boxTopPaddingMobile,
						mobileBottom: boxBottomPaddingMobile,
						mobileLeft: boxLeftPaddingMobile,
						mobileRight: boxRightPaddingMobile,
					}}
					setAttributes={setAttributes}
					{...this.props}
				/>
				<ResponsiveSpacingControl
					title={"Top Margin"}
					attrNameTemplate="topMargin%s"
					values={{
						desktop: topMargin,
						tablet: topMarginTablet,
						mobile: topMarginMobile,
					}}
					setAttributes={setAttributes}
					{...this.props}
				/>
				<ResponsiveSpacingControl
					title={"Bottom Margin"}
					attrNameTemplate="bottomMargin%s"
					values={{
						desktop: bottomMargin,
						tablet: bottomMarginTablet,
						mobile: bottomMarginMobile,
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
