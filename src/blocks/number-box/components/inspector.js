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
import BoxShadowControl from "../../../utils/components/box-shadow";
import BoxShadowControlHelper from "../../../utils/components/box-shadow-helper";
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

    // Text Decoration Options
    const textDecorationOptions = [
      {
        value: "none",
        label: __("Default", "responsive-block-editor-addons"),
      },
      {
        value: "underline",
        label: __("Underline", "responsive-block-editor-addons"),
      },
      {
        value: "overline",
        label: __("Overline", "responsive-block-editor-addons"),
      },
      {
        value: "line-through",
        label: __("Line Through", "responsive-block-editor-addons"),
      },
    ];

    

    const colors = [
      { name: 'red', color: '#f00' },
      { name: 'white', color: '#fff' },
      { name: 'blue', color: '#00f' },
    ];

    // Setup the attributes
    const {
      attributes: {
        headSpacing,
        separatorSpacing,
        seperatorPosition,
        seperatorStyle,
        separatorHeight,
        separatorWidth,
        separatorWidthType,
        separatorColor,
        headingTitleFontFamily,
        headingTitleFontSize,
        headingTitleFontSizeTablet,
        headingTitleFontSizeMobile,
        headingTitleFontWeight,
        headingTitleLineHeight,
        headingTitleLetterSpacing,
        headingTitleColor,
        subHeadingTitleFontFamily,
        subHeadingTitleFontSize,
        subHeadingTitleFontSizeMobile,
        subHeadingTitleFontSizeTablet,
        subHeadingTitleFontWeight,
        subHeadingTitleLineHeight,
        subHeadingTitleLetterSpacing,
        subHeadingTitleColor,
        headingTag,
        level,
        showHeading,
        showSubHeading,
        showSeparator,
        headingAlignment,
        headingAlignmentTablet,
        headingAlignmentMobile,
        subheadSpacing,
        headSpacingTablet,
        subheadSpacingTablet,
        separatorSpacingTablet,
        headSpacingMobile,
        subheadSpacingMobile,
        separatorSpacingMobile,
        textDecoration,
        textDecorationSubHeading,

        showBackground,
        numberBoxOpacity,
        numberBoxBackgroundImage,
        verticalAlign,
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
        numberBoxBorder,
        numberBoxBorderRadius,
        numberBoxShadow,

        showShape,
        shapeBorderWidth,
        shapeBorderRadius,
        shapeShadow,
        contentFontFamily,
        contentFontSize,
        contentFontSizeMobile,
        contentFontSizeTablet,
        contentFontWeight,
        contentLineHeight,
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
                            value={headingAlignmentMobile}
                            onChange={(value) =>
                              setAttributes({
                                headingAlignmentMobile: value,
                              })
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
                            value={headingAlignmentTablet}
                            onChange={(value) =>
                              setAttributes({
                                headingAlignmentTablet: value,
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
                            value={headingAlignment}
                            onChange={(value) =>
                              setAttributes({
                                headingAlignment: value,
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
                    value={this.state.color}
                    onChange={(color) => this.setState({ color })}
                  />

                  <RangeControl
                    label={__("Opacity", "responsive-block-editor-addons")}
                    value={numberBoxOpacity}
                    onChange={(value) => setAttributes({ numberBoxOpacity: value })}
                    min={0}
                    max={100}
                  />

                  <MediaUpload
                    title={__(
                      "Select Background Image",
                      "responsive-block-editor-addons"
                    )}
                    onSelect={this.onSelectImageOne}
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

              <RangeControl
                label={__("Content Width(%)", "responsive-block-editor-addons")}
                value={maxContentWidth}
                min={0}
                max={100}
                onChange={(value) =>
                  setAttributes({ maxContentWidth: value !== undefined ? value : 50 })
                }
                allowReset
              />

              <SelectControl
                label={__("Horizontal Align", "responsive-block-editor-addons")}
                value={contentAlign}
                onChange={(value) => setAttributes({ contentAlign: value })}
                options={[
                  { value: "center", label: __("Center", "responsive-block-editor-addons") },
                  { value: "left", label: __("Left", "responsive-block-editor-addons") },
                  { value: "right", label: __("Right", "responsive-block-editor-addons") },
                ]}
              />

              <ResponsiveMarginControl
                attrNameTemplate="container%s"
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
              title={__("Borders and Shadow", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <SelectControl
                label={__("Borders", "responsive-block-editor-addons")}
                value={numberBoxBorder}
                onChange={(value) => setAttributes({ numberBoxBorder: value })}
                options={[
                  { value: "none", label: __("None", "responsive-block-editor-addons") },
                  { value: "solid", label: __("Solid", "responsive-block-editor-addons") },
                  { value: "dashed", label: __("Dashed", "responsive-block-editor-addons") },
                  { value: "dotted", label: __("Dotted", "responsive-block-editor-addons") },
                ]}
              />

              <RangeControl
                label={__("Border Radius", "responsive-block-editor-addons")}
                value={numberBoxBorderRadius}
                onChange={(value) =>
                  setAttributes({
                    numberBoxBorderRadius: value !== undefined ? value : 12,
                  })
                }
                min={0}
                max={50}
                allowReset
              />

              <RangeControl
                label={__("Shadow / Outline", "responsive-block-editor-addons")}
                value={numberBoxShadow}
                onChange={(value) =>
                  setAttributes({
                    numberBoxShadow: value !== undefined ? value : 0,
                  })
                }
                min={0}
                max={9}
                allowReset
              />

            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody
              title={__("Shape", "responsive-block-editor-addons")}
              initialOpen={false}
            >
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
                    {__("Shape", "responsive-block-editor-addons")}
                  </p>
                  <ColorPalette
                    colors={colors}
                    value={this.state.color}
                    onChange={(color) => this.setState({ color })}
                  />

                  <RangeControl
                    label={__("Opacity", "responsive-block-editor-addons")}
                    value={numberBoxOpacity}
                    onChange={(value) => setAttributes({ numberBoxOpacity: value })}
                    min={0}
                    max={100}
                  />

                  <SelectControl
                    label={__("Borders", "responsive-block-editor-addons")}
                    value={numberBoxBorder}
                    onChange={(value) => setAttributes({ numberBoxBorder: value })}
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
                    min={1}
                    max={10}
                    allowReset
                  />

                  <p>
                    {__("Border Color", "responsive-block-editor-addons")}
                  </p>
                  <ColorPalette
                    colors={colors}
                    value={this.state.color}
                    onChange={(color) => this.setState({ color })}
                  />

                  <RangeControl
                    label={__("Border Radius", "responsive-block-editor-addons")}
                    value={shapeBorderRadius}
                    onChange={(value) =>
                      setAttributes({
                        shapeBorderRadius: value !== undefined ? value : 12,
                      })
                    }
                    min={0}
                    max={50}
                    allowReset
                  />

                  <RangeControl
                    label={__("Shadow / Outline", "responsive-block-editor-addons")}
                    value={shapeShadow}
                    onChange={(value) =>
                      setAttributes({
                        shapeShadow: value !== undefined ? value : 0,
                      })
                    }
                    min={0}
                    max={9}
                    allowReset
                  />

                  <p>
                    {__("Border Color", "responsive-block-editor-addons")}
                  </p>
                  <ColorPalette
                    colors={colors}
                    value={this.state.color}
                    onChange={(color) => this.setState({ color })}
                  />

                </div>
              }

            </PanelBody>

            <PanelBody
              title={__("Typography", "responsive-block-editor-addons")}
              initialOpen={false}
            >
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
                    value={this.state.color}
                    onChange={(color) => this.setState({ color })}
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
