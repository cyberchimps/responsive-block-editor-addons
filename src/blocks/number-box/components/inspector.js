/**
 * Inspector Controls
 */
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import ResponsiveMarginControl from "../../../settings-components/ResponsiveSpacingSettings/ResponsiveMarginControl";
import GradientBackgroundControl from "../../../settings-components/BlockBackgroundSettings/GradientBackgroundSettings";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import rbeaOptions from "../../advanced-text/components/rbea-options";

// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  ColorPalette,
  AlignmentToolbar,
  MediaUpload
} = wp.editor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  ButtonGroup,
  TextControl,
  Button,
  ToggleControl,
  TabPanel,
  Dashicon,
  BaseControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.state = {
      color: '#f00'
    }
  }

  /*
   * Heading Tag Change
   */
  onTagChange(value) {
    const { setAttributes } = this.props;

    let level_val = parseInt(value.replace("h", ""));

    setAttributes({ level: level_val });
    setAttributes({ headingTag: value });
  }
  render() {
    
    const colors = [
      { name: 'red', color: '#f00' },
      { name: 'white', color: '#fff' },
      { name: 'blue', color: '#00f' },
    ];

    // Setup the attributes
    const {
      attributes: {
        numberValue,
        showBackground,
        numberBoxAlignment,
        numberBoxAlignmentTablet,
        numberBoxAlignmentMobile,
        numberBoxBackgroundColor,
        numberBoxBackgroundOpacity,
        numberBoxBackgroundImage,
        numberBoxBlockMinHeight,
        contentVerticalAlign,
        maxContentWidth,
        contentAlign,
        numberBoxTopMargin,
        numberBoxBottomMargin,
        numberBoxLeftMargin,
        numberBoxRightMargin,
        numberBoxTopMarginTablet,
        numberBoxBottomMarginTablet,
        numberBoxLeftMarginTablet,
        numberBoxRightMarginTablet,
        numberBoxTopMarginMobile,
        numberBoxBottomMarginMobile,
        numberBoxLeftMarginMobile,
        numberBoxRightMarginMobile,
        numberBoxBlockBorder,
        numberBoxBlockBorderWidth,
        numberBoxBlockBorderColor,
        numberBoxBlockBorderRadius,
        numberBoxBlockShadowHorizontalOffset,
        numberBoxBlockShadowVerticalOffset,
        numberBoxBlockShadowBlur,
        numberBoxBlockShadowSpread,
        numberBoxBlockShadowColor,
        size,
        sizeTablet,
        sizeMobile,
        shapeColor,
        shapeOpacity,
        shapeBorder,
        showShape,
        shapeBorderWidth,
        shapeBorderColor,
        shapeBorderRadius,
        shapeShadowHorizontalOffset,
        shapeShadowVerticalOffset,
        shapeShadowBlur,
        shapeShadowSpread,
        shapeShadowColor,
        textColor,
        contentFontFamily,
        contentFontSize,
        contentFontSizeMobile,
        contentFontSizeTablet,
        contentFontWeight,
        contentLineHeight,
        contentLetterSpacing,
        contentTextTransform,
        showGradient,
        blockTag,
        zIndex
      },
      setAttributes,
    } = this.props;

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("Alignment", "responsive-block-editor-addons")}
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
                      <Fragment>
                        <BaseControl>
                          <p>
                            {__(
                              "Alignment Mobile",
                              "responsive-block-editor-addons"
                            )}
                          </p>
                          <AlignmentToolbar
                            value={numberBoxAlignmentMobile}
                            onChange={(value) => {
                              setAttributes({
                                numberBoxAlignmentMobile: value,
                              });
                              console.error(numberBoxAlignmentMobile)}
                            }
                            controls={["left", "center", "right"]}
                            isCollapsed={false}
                          />
                        </BaseControl>
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <BaseControl>
                          <p>
                            {__(
                              "Alignment Tablet",
                              "responsive-block-editor-addons"
                            )}
                          </p>
                          <AlignmentToolbar
                            value={numberBoxAlignmentTablet}
                            onChange={(value) => 
                              setAttributes({
                                numberBoxAlignmentTablet: value,
                              })
                            }
                            controls={["left", "center", "right"]}
                            isCollapsed={false}
                          />
                        </BaseControl>
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <BaseControl>
                          <p>
                            {__("Alignment", "responsive-block-editor-addons")}
                          </p>
                          <AlignmentToolbar
                            value={numberBoxAlignment}
                            onChange={(value) =>
                              setAttributes({
                                numberBoxAlignment: value,
                              })
                            }
                            controls={["left", "center", "right"]}
                            isCollapsed={false}
                          />
                        </BaseControl>
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
            </PanelBody>

            <PanelBody
              title={__("Background", "responsive-block-editor-addons")}
              initialOpen={false}
            >

              <ToggleControl
                label={__("Background", "responsive-block-editor-addons")}
                checked={showBackground}
                onChange={() =>
                  this.props.setAttributes({
                    showBackground: !showBackground,
                  })
                }
              />
              {showBackground &&
                <div>
                  <p>
                    {__("Background Color", "responsive-block-editor-addons")}
                  </p>
                  <ColorPalette
                    colors={colors}
                    value={numberBoxBackgroundColor}
                    onChange={(color) => setAttributes({ numberBoxBackgroundColor: color })}
                  />

                  <RangeControl
                    label={__("Background Color Opacity", "responsive-block-editor-addons")}
                    value={numberBoxBackgroundOpacity}
                    onChange={(value) =>
                      setAttributes({ numberBoxBackgroundOpacity: value !== undefined ? value : 100 })}
                    min={0}
                    max={100}
                    resetFallbackValue={100}
                    allowReset={true}
                  />

                  <MediaUpload
                    title={__(
                      "Select Background Image",
                      "responsive-block-editor-addons"
                    )}
                    onSelect={(media) =>
                      console.log('selected ' + JSON.stringify(media) + numberBoxBackgroundImage)
                    }
                    allowedTypes={["image"]}
                    value={numberBoxBackgroundImage}
                    render={({ open }) => (
                      <Button isDefault onClick={open}>
                        {!numberBoxBackgroundImage
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
                  {numberBoxBackgroundImage && (
                    <Button
                      className="rbea-rm-btn"
                      onClick={this.onRemoveImageOne}
                      isLink
                      isDestructive
                    >
                      {__("Remove Background Image", "responsive-block-editor-addons")}
                    </Button>
                  )}
                </div>
              }

            </PanelBody>
            <PanelBody
              title={__("Size and Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RangeControl
                label={__("Min Height", "responsive-block-editor-addons")}
                value={numberBoxBlockMinHeight}
                onChange={(value) =>
                  setAttributes({ numberBoxBlockMinHeight: value !== undefined ? value : 0 })}
                min={0}
                max={1000}
                resetFallbackValue={0}
                allowReset={true}
              />

              <SelectControl
                label={__("Content Vertical Align", "responsive-block-editor-addons")}
                value={contentVerticalAlign}
                onChange={(value) => setAttributes({ contentVerticalAlign: value })}
                options={[
                  { value: "flex-start", label: __("Top", "responsive-block-editor-addons") },
                  { value: "flex-end", label: __("Bottom", "responsive-block-editor-addons") },
                  { value: "center", label: __("Center", "responsive-block-editor-addons") },
                ]}
              />

              <RangeControl
                label={__("Content Width", "responsive-block-editor-addons")}
                value={maxContentWidth}
                min={0}
                max={1500}
                onChange={(value) =>
                  setAttributes({ maxContentWidth: value !== undefined ? value : 1500 })
                }
                allowReset={true}
              />

              <SelectControl
                label={__("Content Horizontal Align", "responsive-block-editor-addons")}
                value={contentAlign}
                onChange={(value) => setAttributes({ contentAlign: value })}
                options={[
                  { value: "center", label: __("Center", "responsive-block-editor-addons") },
                  { value: "left", label: __("Left", "responsive-block-editor-addons") },
                  { value: "right", label: __("Right", "responsive-block-editor-addons") },
                ]}
              />

              <ResponsiveMarginControl
                attrNameTemplate="numberBox%s"
                values={{
                  desktopTop: numberBoxTopMargin,
                  desktopBottom: numberBoxBottomMargin,
                  desktopLeft: numberBoxLeftMargin,
                  desktopRight: numberBoxRightMargin,

                  tabletTop: numberBoxTopMarginTablet,
                  tabletBottom: numberBoxBottomMarginTablet,
                  tabletLeft: numberBoxLeftMarginTablet,
                  tabletRight: numberBoxRightMarginTablet,

                  mobileTop: numberBoxTopMarginMobile,
                  mobileBottom: numberBoxBottomMarginMobile,
                  mobileLeft: numberBoxLeftMarginMobile,
                  mobileRight: numberBoxRightMarginMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
            </PanelBody>
            <PanelBody
              title={__("Borders", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <SelectControl
                label={__("Border Style", "responsive-block-editor-addons")}
                value={numberBoxBlockBorder}
                onChange={(value) => setAttributes({ numberBoxBlockBorder: value })}
                options={[
                  { value: "none", label: __("None", "responsive-block-editor-addons") },
                  { value: "solid", label: __("Solid", "responsive-block-editor-addons") },
                  { value: "dashed", label: __("Dashed", "responsive-block-editor-addons") },
                  { value: "dotted", label: __("Dotted", "responsive-block-editor-addons") },
                ]}
              />

              <RangeControl
                label={__("Border Width", "responsive-block-editor-addons")}
                value={numberBoxBlockBorderWidth}
                min={0}
                max={5}
                onChange={(value) =>
                  setAttributes({ numberBoxBlockBorderWidth: value !== undefined ? value : 0 })
                }
                allowReset={true}
              />

              <p>{__("Border Color", "responsive-block-editor-addons")}</p>
              <ColorPalette
                colors={colors}
                value={numberBoxBlockBorderColor}
                onChange={(color) => setAttributes({ numberBoxBlockBorderColor: color })}
              />

              <RangeControl
                label={__("Border Radius", "responsive-block-editor-addons")}
                value={numberBoxBlockBorderRadius}
                onChange={(value) =>
                  setAttributes({
                    numberBoxBlockBorderRadius: value !== undefined ? value : 0,
                  })
                }
                min={0}
                max={50}
                allowReset
              />
            </PanelBody>

            <PanelBody
              title={__("Shadow", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              
              <RangeControl
                label={__("Horizontal Offset", "responsive-block-editor-addons")}
                value={numberBoxBlockShadowHorizontalOffset}
                onChange={(value) =>
                  setAttributes({
                    numberBoxBlockShadowHorizontalOffset: value !== undefined ? value : 0,
                  })
                }
                min={-100}
                max={100}
                allowReset
              />

              <RangeControl
                label={__("Vertical Offset", "responsive-block-editor-addons")}
                value={numberBoxBlockShadowVerticalOffset}
                onChange={(value) =>
                  setAttributes({
                    numberBoxBlockShadowVerticalOffset: value !== undefined ? value : 0,
                  })
                }
                min={-100}
                max={100}
                allowReset
              />

              <RangeControl
                label={__("Blur", "responsive-block-editor-addons")}
                value={numberBoxBlockShadowBlur}
                onChange={(value) =>
                  setAttributes({
                    numberBoxBlockShadowBlur: value !== undefined ? value : 0,
                  })
                }
                min={0}
                max={100}
                allowReset
              />

              <RangeControl
                label={__("Shadow Spread", "responsive-block-editor-addons")}
                value={numberBoxBlockShadowSpread}
                onChange={(value) =>
                  setAttributes({
                    numberBoxBlockShadowSpread: value !== undefined ? value : 0,
                  })
                }
                min={0}
                max={100}
                allowReset
              />

              <p>{__("Shadow Color", "responsive-block-editor-addons")}</p>
              <ColorPalette
                colors={colors}
                value={numberBoxBlockShadowColor}
                onChange={(color) => setAttributes({ numberBoxBlockShadowColor: color })}
              />

            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody
              title={__("Shape", "responsive-block-editor-addons")}
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
                      <Fragment>
                        <BaseControl>
                           <RangeControl
                              label={__("Size Mobile", "responsive-block-editor-addons")}
                              value={sizeMobile}
                              onChange={(value) =>
                                setAttributes({
                                  sizeMobile: value !== undefined ? value : 0,
                                })
                              }
                              min={0}
                              max={200}
                              allowReset
                              resetFallbackValue={100}
                              initialPosition={100}
                            />
                        </BaseControl>
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <BaseControl>
                          <RangeControl
                              label={__("Size Tablet", "responsive-block-editor-addons")}
                              value={sizeTablet}
                              onChange={(value) =>
                                setAttributes({
                                  sizeTablet: value !== undefined ? value : 0,
                                })
                              }
                              min={0}
                              max={200}
                              allowReset
                              resetFallbackValue={100}
                              initialPosition={100}
                            />
                        </BaseControl>
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <BaseControl>
                          <RangeControl
                              label={__("Size", "responsive-block-editor-addons")}
                              value={size}
                              onChange={(value) =>
                                setAttributes({
                                  size: value !== undefined ? value : 0,
                                })
                              }
                              min={0}
                              max={200}
                              allowReset
                              resetFallbackValue={100}
                              initialPosition={100}
                            />
                        </BaseControl>
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>

              <ToggleControl
                label={__("Background", "responsive-block-editor-addons")}
                checked={showShape}
                onChange={() =>
                  this.props.setAttributes({
                    showShape: !showShape,
                  })
                }
              />
              {
                showShape &&
                <div>
                  <p>
                    {__("Shape Color", "responsive-block-editor-addons")}
                  </p>
                  <ColorPalette
                    colors={colors}
                    value={shapeColor}
                    onChange={(color) => setAttributes({ shapeColor: color })}
                  />

                  <RangeControl
                    label={__("Opacity", "responsive-block-editor-addons")}
                    value={shapeOpacity}
                    onChange={(value) => setAttributes({ shapeOpacity: value !== undefined ? value : 100 })}
                    min={0}
                    max={100}
                    resetFallbackValue={100}
                    allowReset={true}
                    initialPosition={100}
                  />

                  <SelectControl
                    label={__("Border Style", "responsive-block-editor-addons")}
                    value={shapeBorder}
                    onChange={(value) => setAttributes({ shapeBorder: value })}
                    options={[
                      { value: "none", label: __("None", "responsive-block-editor-addons") },
                      { value: "solid", label: __("Solid", "responsive-block-editor-addons") },
                      { value: "dashed", label: __("Dashed", "responsive-block-editor-addons") },
                      { value: "dotted", label: __("Dotted", "responsive-block-editor-addons") },
                    ]}
                  />

                  <RangeControl
                    label={__("Border Width", "responsive-block-editor-addons")}
                    value={shapeBorderWidth}
                    onChange={(value) =>
                      setAttributes({
                        shapeBorderWidth: value !== undefined ? value : 0,
                      })
                    }
                    min={0}
                    max={5}
                    resetFallbackValue={0}
                    allowReset={true}
                    initialPosition={0}
                  />

                  <p>
                    {__("Border Color", "responsive-block-editor-addons")}
                  </p>
                  <ColorPalette
                    colors={colors}
                    value={shapeBorderColor}
                    onChange={(color) => setAttributes({ shapeBorderColor: color })}
                  />
                  
                  <RangeControl
                    label={__("Border Radius", "responsive-block-editor-addons")}
                    value={shapeBorderRadius}
                    onChange={(value) =>
                      setAttributes({
                        shapeBorderRadius: value !== undefined ? value : 50,
                      })
                    }
                    min={0}
                    max={50}
                    resetFallbackValue={50}
                    allowReset={true}
                    initialPosition={50}
                  />
                </div>
              }

            </PanelBody>

            <PanelBody
              title={__("Shape Shadow", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              
              <RangeControl
                label={__("Horizontal Offset", "responsive-block-editor-addons")}
                value={shapeShadowHorizontalOffset}
                onChange={(value) =>
                  setAttributes({
                    shapeShadowHorizontalOffset: value !== undefined ? value : 0,
                  })
                }
                min={-100}
                max={100}
                allowReset
              />

              <RangeControl
                label={__("Vertical Offset", "responsive-block-editor-addons")}
                value={shapeShadowVerticalOffset}
                onChange={(value) =>
                  setAttributes({
                    shapeShadowVerticalOffset: value !== undefined ? value : 0,
                  })
                }
                min={-100}
                max={100}
                allowReset
              />

              <RangeControl
                label={__("Blur", "responsive-block-editor-addons")}
                value={shapeShadowBlur}
                onChange={(value) =>
                  setAttributes({
                    shapeShadowBlur: value !== undefined ? value : 0,
                  })
                }
                min={0}
                max={100}
                allowReset
              />

              <RangeControl
                label={__("Shadow Spread", "responsive-block-editor-addons")}
                value={shapeShadowSpread}
                onChange={(value) =>
                  setAttributes({
                    shapeShadowSpread: value !== undefined ? value : 0,
                  })
                }
                min={0}
                max={100}
                allowReset
              />

              <p>{__("Shadow Color", "responsive-block-editor-addons")}</p>
              <ColorPalette
                colors={colors}
                value={shapeShadowColor}
                onChange={(color) => setAttributes({ shapeShadowColor: color })}
              />

            </PanelBody>

            <PanelBody
              title={__("Typography", "responsive-block-editor-addons")}
              initialOpen={false}
            >

              <TextControl
                label="Content"
                type="text"
                value={ numberValue }
                onChange={ ( value ) => setAttributes({ numberValue: value })}
              />

              <TypographyHelperControl
                title={__("Content Typography", "responsive-block-editor-addons")}
                attrNameTemplate="content%s"
                values={{
                  family: contentFontFamily,
                  size: contentFontSize,
                  sizeMobile: contentFontSizeMobile,
                  sizeTablet: contentFontSizeTablet,
                  weight: contentFontWeight,
                  height: contentLineHeight,
                  spacing: contentLetterSpacing,
                  transform: contentTextTransform,
                }}
                showLetterSpacing={true}
                showTextTransform={true}
                setAttributes={setAttributes}
                {...this.props}
              />

              <ToggleControl
                label={__("Gradient Background", "responsive-block-editor-addons")}
                checked={showGradient}
                onChange={() =>
                  this.props.setAttributes({
                    showGradient: !showGradient,
                  })
                }
              />

              {showGradient == true &&
                <div>
                  <GradientBackgroundControl
                    {...this.props}
                    showHoverGradient={true}
                  />
                </div>
              }

              {showGradient == false &&
                <div>
                  <p>
                    {__("Text Color", "responsive-block-editor-addons")}
                  </p>
                  <ColorPalette
                    colors={colors}
                    value={textColor}
                    onChange={(color) => setAttributes({ textColor: color })}
                  />
                </div>
              }

            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"advance"}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <SelectControl
                label={__("Block HTML Tag", "responsive-block-editor-addons")}
                value={blockTag}
                onChange={(value) => setAttributes({ blockTag: value })}
                options={rbeaOptions.blockTags}
              />
            </PanelBody>
            <PanelBody
              title={__("Position", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RangeControl
                label={__("Z-Index", "responsive-block-editor-addons")}
                value={zIndex}
                onChange={(value) => setAttributes({ zIndex: value })}
                min={0}
                max={1000}
                allowReset
              />
            </PanelBody>
          </InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
