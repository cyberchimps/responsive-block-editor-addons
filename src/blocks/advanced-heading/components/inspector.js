/**
 * Inspector Controls
 */
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import ResponsivePaddingControl from "../../../settings-components/ResponsiveSpacingSettings/ResponsivePaddingControl";
import ResponsiveMarginControl from "../../../settings-components/ResponsiveSpacingSettings/ResponsiveMarginControl";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";

// Import block components
const { InspectorControls, AlignmentToolbar, ColorPalette, PanelColorSettings } = wp.blockEditor

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
        hideWidget,
        hideWidgetTablet,
        hideWidgetMobile,
        z_index,
        z_indexMobile,
        z_indexTablet,
        blockTopPadding,
        blockBottomPadding,
        blockLeftPadding,
        blockRightPadding,
        blockTopPaddingMobile,
        blockBottomPaddingMobile,
        blockLeftPaddingMobile,
        blockRightPaddingMobile,
        blockTopPaddingTablet,
        blockBottomPaddingTablet,
        blockLeftPaddingTablet,
        blockRightPaddingTablet,
        blockTopMargin,
        blockBottomMargin,
        blockLeftMargin,
        blockRightMargin,
        blockTopMarginMobile,
        blockBottomMarginMobile,
        blockLeftMarginMobile,
        blockRightMarginMobile,
        blockTopMarginTablet,
        blockBottomMarginTablet,
        blockLeftMarginTablet,
        blockRightMarginTablet, 
          topPadding,
          bottomPadding,
          leftPadding,
          rightPadding,
          topPaddingTablet,
          bottomPaddingTablet,
          leftPaddingTablet,
          rightPaddingTablet,
          topPaddingMobile,
          bottomPaddingMobile,
          leftPaddingMobile,
          rightPaddingMobile,
          topMargin,
          bottomMargin,
          leftMargin,
          rightMargin,
          topMarginTablet,
          bottomMarginTablet,
          leftMarginTablet,
          rightMarginTablet,
          topMarginMobile,
          bottomMarginMobile,
          leftMarginMobile,
          rightMarginMobile,
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

              <ToggleControl
                label={__("Heading", "responsive-block-editor-addons")}
                checked={showHeading}
                onChange={() =>
                  this.props.setAttributes({
                    showHeading: !showHeading,
                  })
                }
              />
              <ToggleControl
                label={__("Sub Heading", "responsive-block-editor-addons")}
                checked={showSubHeading}
                onChange={() =>
                  this.props.setAttributes({
                    showSubHeading: !showSubHeading,
                  })
                }
              />
              <ToggleControl
                label={__("Separator", "responsive-block-editor-addons")}
                checked={showSeparator}
                onChange={() =>
                  this.props.setAttributes({
                    showSeparator: !showSeparator,
                  })
                }
              />

              <SelectControl
                label={__("Heading Tag", "responsive-block-editor-addons")}
                value={headingTag}
                onChange={(value) => {
                  this.onTagChange(value);
                }}
                options={[
                  { value: "h1", label: __("H1", "responsive-block-editor-addons") },
                  { value: "h2", label: __("H2", "responsive-block-editor-addons") },
                  { value: "h3", label: __("H3", "responsive-block-editor-addons") },
                  { value: "h4", label: __("H4", "responsive-block-editor-addons") },
                  { value: "h5", label: __("H5", "responsive-block-editor-addons") },
                  { value: "h6", label: __("H6", "responsive-block-editor-addons") },
                ]}
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody
              title={__("Typography", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <TypographyHelperControl
                title={__(
                  "Heading Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="headingTitle%s"
                values={{
                  family: headingTitleFontFamily,
                  size: headingTitleFontSize,
                  sizeMobile: headingTitleFontSizeMobile,
                  sizeTablet: headingTitleFontSizeTablet,
                  weight: headingTitleFontWeight,
                  height: headingTitleLineHeight,
                  spacing: headingTitleLetterSpacing,
                }}
                showLetterSpacing={true}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={"Sub Heading Typography"}
                attrNameTemplate="subHeadingTitle%s"
                values={{
                  family: subHeadingTitleFontFamily,
                  size: subHeadingTitleFontSize,
                  sizeMobile: subHeadingTitleFontSizeMobile,
                  sizeTablet: subHeadingTitleFontSizeTablet,
                  weight: subHeadingTitleFontWeight,
                  height: subHeadingTitleLineHeight,
                  spacing: subHeadingTitleLetterSpacing,
                }}
                showLetterSpacing={true}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
            </PanelBody>
            <PanelBody
              title={__(
                "Colors and Decorations",
                "responsive-block-editor-addons"
              )}
              initialOpen={false}
            >
              <p className="responsive-block-editor-addons-setting-label">
                {__("Heading Color", "responsive-block-editor-addons")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{ backgroundColor: headingTitleColor }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={headingTitleColor}
                onChange={(colorValue) =>
                  setAttributes({ headingTitleColor: colorValue })
                }
                allowReset
              />
              <p className="responsive-block-editor-addons-setting-label">
                {__("Sub Heading Color", "responsive-block-editor-addons")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{ backgroundColor: subHeadingTitleColor }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={subHeadingTitleColor}
                onChange={(colorValue) =>
                  setAttributes({ subHeadingTitleColor: colorValue })
                }
                allowReset
              />
              <SelectControl
                label={__(
                  "Heading Text Decoration",
                  "responsive-block-editor-addons"
                )}
                options={textDecorationOptions}
                value={textDecoration}
                onChange={(value) =>
                  this.props.setAttributes({
                    textDecoration: value,
                  })
                }
              />
              <SelectControl
                label={__(
                  "Sub Heading Text Decoration",
                  "responsive-block-editor-addons"
                )}
                options={textDecorationOptions}
                value={textDecorationSubHeading}
                onChange={(value) =>
                  this.props.setAttributes({
                    textDecorationSubHeading: value,
                  })
                }
              />
            </PanelBody>
            <PanelBody
              title={__("Separator", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <SelectControl
                label={__("Position", "responsive-block-editor-addons")}
                value={seperatorPosition}
                onChange={(value) =>
                  setAttributes({ seperatorPosition: value })
                }
                options={[
                  { value: "belowTitle", label: __("Below Heading", "responsive-block-editor-addons") },
                  { value: "belowDesc", label: __("Below Description", "responsive-block-editor-addons") },
                ]}
              />
              <SelectControl
                label={__("Style", "responsive-block-editor-addons")}
                value={seperatorStyle}
                onChange={(value) => setAttributes({ seperatorStyle: value })}
                options={[
                  { value: "none", label: __("None", "responsive-block-editor-addons") },
                  { value: "solid", label: __("Solid", "responsive-block-editor-addons") },
                  { value: "dashed", label: __("Dashed", "responsive-block-editor-addons") },
                  { value: "dotted", label: __("Dotted", "responsive-block-editor-addons") },
                  { value: "double", label: __("Double", "responsive-block-editor-addons") },
                  { value: "groove", label: __("Groove", "responsive-block-editor-addons") },
                  { value: "inset", label: __("Inset", "responsive-block-editor-addons") },
                  { value: "outset", label: __("Outset", "responsive-block-editor-addons") },
                  { value: "ridge", label: __("Ridge", "responsive-block-editor-addons") },
                ]}
              />
              {seperatorStyle !== "none" && (
                <Fragment>
                  <RangeControl
                    label={__("Thickness (px)", "responsive-block-editor-addons")}
                    value={separatorHeight}
                    onChange={(value) =>
                      setAttributes({
                        separatorHeight: value !== undefined ? value : 3,
                      })
                    }
                    min={0}
                    max={20}
                    beforeIcon=""
                    allowReset
                    initialPosition={3}
                  />
                  <ButtonGroup
                    className="responsive-block-editor-addons-size-type-field"
                    aria-label={__(
                      "Size Type",
                      "responsive-block-editor-addons"
                    )}
                  >
                    <Button
                      key={"px"}
                      className="responsive-block-editor-addons-size-btn"
                      isSmall
                      isPrimary={separatorWidthType === "px"}
                      aria-pressed={separatorWidthType === "px"}
                      onClick={() =>
                        setAttributes({ separatorWidthType: "px" })
                      }
                    >
                      {"px"}
                    </Button>
                    <Button
                      key={"%"}
                      className="responsive-block-editor-addons-size-btn"
                      isSmall
                      isPrimary={separatorWidthType === "%"}
                      aria-pressed={separatorWidthType === "%"}
                      onClick={() => setAttributes({ separatorWidthType: "%" })}
                    >
                      {"%"}
                    </Button>
                  </ButtonGroup>
                  <RangeControl
                    label={__("Width", "responsive-block-editor-addons")}
                    value={separatorWidth}
                    onChange={(value) =>
                      setAttributes({ separatorWidth: value })
                    }
                    min={0}
                    max={"%" == separatorWidthType ? 100 : 500}
                    beforeIcon=""
                    allowReset
                    initialPosition={20}
                  />
                  {seperatorStyle !== "none" && (
                    <Fragment>
                      <p className="responsive-setting-label">
                        {__("Separator Color", "responsive-block-editor-addons")}
                        <span className="components-base-control__label">
                          <span
                            className="component-color-indicator"
                            style={{ backgroundColor: separatorColor }}
                          ></span>
                        </span>
                      </p>
                      <ColorPalette
                        value={separatorColor}
                        onChange={(colorValue) =>
                          setAttributes({ separatorColor: colorValue })
                        }
                        allowReset
                      />
                    </Fragment>
                  )}
                </Fragment>
              )}
            </PanelBody>
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ResponsiveSpacingControl
                title={"Heading Bottom Spacing"}
                attrNameTemplate="headSpacing%s"
                values={{
                  desktop: headSpacing,
                  tablet: headSpacingTablet,
                  mobile: headSpacingMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              {seperatorStyle !== "none" && (
                <ResponsiveSpacingControl
                  title={"Separator Bottom Spacing"}
                  attrNameTemplate="separatorSpacing%s"
                  values={{
                    desktop: separatorSpacing,
                    tablet: separatorSpacingTablet,
                    mobile: separatorSpacingMobile,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
              )}
              {showSubHeading && (
                <ResponsiveSpacingControl
                  title={"Text Bottom Spacing"}
                  attrNameTemplate="subheadSpacing%s"
                  values={{
                    desktop: subheadSpacing,
                    tablet: subheadSpacingTablet,
                    mobile: subheadSpacingMobile,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
              )}
              <hr />
              <ResponsivePaddingControl
                attrNameTemplate="block%s"
                values={{
                  desktopTop: topPadding !== 999 && blockTopPadding === 10 ? topPadding : blockTopPadding,
                  desktopBottom: bottomPadding !== 999 && blockBottomPadding === 10 ? bottomPadding : blockBottomPadding,
                  desktopLeft: leftPadding !== 999 && blockLeftPadding === 10 ? leftPadding : blockLeftPadding,
                  desktopRight: rightPadding !== 999 && blockRightPadding === 10 ? rightPadding : blockRightPadding,

                  tabletTop: topPaddingTablet !== 999 && !blockTopPaddingTablet ? topPaddingTablet : blockTopPaddingTablet,
                  tabletBottom: bottomPaddingTablet !== 999 && !blockBottomPaddingTablet ? bottomPaddingTablet : blockBottomPaddingTablet,
                  tabletLeft: leftPaddingTablet !== 999 && !blockLeftPaddingTablet ? leftPaddingTablet : blockLeftPaddingTablet,
                  tabletRight: rightPaddingTablet !== 999 && !blockRightPaddingTablet ? rightPaddingTablet : blockRightPaddingTablet,

                  mobileTop: topPaddingMobile !== 999 && !blockTopPaddingMobile ? topPaddingMobile : blockTopPaddingMobile,
                  mobileBottom: bottomPaddingMobile !== 999 && !blockBottomPaddingMobile ? bottomPaddingMobile : blockBottomPaddingMobile,
                  mobileLeft: leftPaddingMobile !== 999 && !blockLeftPaddingMobile ? leftPaddingMobile : blockLeftPaddingMobile,
                  mobileRight: rightPaddingMobile !== 999 && !blockRightPaddingMobile ? rightPaddingMobile : blockRightPaddingMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <hr />
              <ResponsiveMarginControl
                attrNameTemplate="block%s"
                values={{
                  desktopTop: topMargin !== 999 && blockTopMargin === 0 ? topMargin : blockTopMargin,
                  desktopBottom: bottomMargin !== 999 && blockBottomMargin === 0 ? bottomMargin : blockBottomMargin,
                  desktopLeft: leftMargin !== 999 && blockLeftMargin === 0 ? leftMargin : blockLeftMargin,
                  desktopRight: rightMargin !== 999 && blockRightMargin === 0 ? rightMargin : blockRightMargin,

                  tabletTop: topMarginTablet !== 999 && !blockTopMarginTablet ? topMarginTablet : blockTopMarginTablet,
                  tabletBottom: bottomMarginTablet !== 999 && !blockBottomMarginTablet ? bottomMarginTablet : blockBottomMarginTablet,
                  tabletLeft: leftMarginTablet !== 999 && !blockLeftMarginTablet ? leftMarginTablet : blockLeftMarginTablet,
                  tabletRight: rightMarginTablet !== 999 && !blockRightMarginTablet ? rightMarginTablet : blockRightMarginTablet,

                  mobileTop: topMarginMobile !== 999 && blockTopMarginMobile === "" ? topMarginMobile : blockTopMarginMobile,
                  mobileBottom: bottomMarginMobile !== 999 && blockBottomMarginMobile === "" ? bottomMarginMobile : blockBottomMarginMobile,
                  mobileLeft: leftMarginMobile !== 999 && blockLeftMarginMobile === "" ? leftMarginMobile : blockLeftMarginMobile,
                  mobileRight: rightMarginMobile !== 999 && blockRightMarginMobile === "" ? rightMarginMobile : blockRightMarginMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
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
