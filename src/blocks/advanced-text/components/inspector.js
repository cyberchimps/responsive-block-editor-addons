import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import ResponsivePaddingControl from "../../../settings-components/ResponsiveSpacingSettings/ResponsivePaddingControl";
import ResponsiveMarginControl from "../../../settings-components/ResponsiveSpacingSettings/ResponsiveMarginControl";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import rbeaOptions from "./rbea-options";

const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

const {
  InspectorControls,
  PanelColorSettings,
  ColorPalette,
  AlignmentToolbar,
} = wp.blockEditor;

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

export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    const {
      attributes: {
        block_id,
        displayTitle,
        displaySubtitle,
        columnsCount,
        blockTitle,
        blockSubtitle,
        contentAlign,
        layoutDesign,
        //style panel
        contentPadding,
        contentPaddingTablet,
        contentPaddingMobile,
        titleBottomMargin,
        titleBottomMarginTablet,
        titleBottomMarginMobile,
        subtitleBottomMargin,
        subtitleBottomMarginTablet,
        subtitleBottomMarginMobile,
        textBottomMargin,
        textBottomMarginTablet,
        textBottomMarginMobile,
        columnDividerHeight,
        columnDividerHeightTablet,
        columnDividerHeightMobile,
        columnDividerWidth,
        columnDividerWidthTablet,
        columnDividerWidthMobile,
        dividerColor,
        textAlign,
        textFontFamily,
        textFontSize,
        textFontSizeMobile,
        textFontSizeTablet,
        textFontWeight,
        textLineHeight,
        textColor,
        titleFontFamily,
        titleFontSize,
        titleFontSizeMobile,
        titleFontSizeTablet,
        titleFontWeight,
        titleLineHeight,
        titleColor,
        titleAlign,
        subtitleFontFamily,
        subtitleFontSize,
        subtitleFontSizeMobile,
        subtitleFontSizeTablet,
        subtitleFontWeight,
        subtitleLineHeight,
        subtitleColor,
        subtitleAlign,
        tagTitle,
        displayColumnSeparator,
        // advanced panel
        blockOpacity,
        zIndex,
        zIndexTablet,
        zIndexMobile,
        blockTag,
        containerWidth,
        containerWidthTablet,
        containerWidthMobile,
        containerTopPadding,
        containerBottomPadding,
        containerLeftPadding,
        containerRightPadding,
        containerTopPaddingTablet,
        containerBottomPaddingTablet,
        containerLeftPaddingTablet,
        containerRightPaddingTablet,
        containerTopPaddingMobile,
        containerBottomPaddingMobile,
        containerLeftPaddingMobile,
        containerRightPaddingMobile,
        containerTopMargin,
        containerBottomMargin,
        containerLeftMargin,
        containerRightMargin,
        containerTopMarginTablet,
        containerBottomMarginTablet,
        containerLeftMarginTablet,
        containerRightMarginTablet,
        containerTopMarginMobile,
        containerBottomMarginMobile,
        containerLeftMarginMobile,
        containerRightMarginMobile,
        titleLeftMargin,
        titleLeftMarginTablet,
        titleLeftMarginMobile,
        titleRightMargin,
        titleRightMarginTablet,
        titleRightMarginMobile,
        subtitleLeftMargin,
        subtitleLeftMarginTablet,
        subtitleLeftMarginMobile,
        subtitleRightMargin,
        subtitleRightMarginTablet,
        subtitleRightMarginMobile,
        hideWidget,
        hideWidgetTablet,
        hideWidgetMobile,
      },
      setAttributes,
    } = this.props;

    const handleLayoutChange = (value) => {
      if (value === "layout3") {
        setAttributes({
          layoutDesign: value,
          titleAlign: "right",
          subtitleAlign: "right",
        });
      } else if (value === "layout2") {
        setAttributes({
          layoutDesign: value,
          titleAlign: "",
          subtitleAlign: "",
        });
      } else {
        setAttributes({
          layoutDesign: value,
          titleAlign: "",
          subtitleAlign: "",
        });
      }
    };

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
                value={columnsCount}
                onChange={(value) => setAttributes({ columnsCount: value })}
                min={1}
                max={4}
              />
              <ToggleControl
                label={__("Enable Title", "responsive-block-editor-addons")}
                checked={displayTitle}
                onChange={() => setAttributes({ displayTitle: !displayTitle })}
              />
              <ToggleControl
                label={__("Enable Subtitle", "responsive-block-editor-addons")}
                checked={displaySubtitle}
                onChange={() =>
                  setAttributes({ displaySubtitle: !displaySubtitle })
                }
              />
              {columnsCount > 1 && (
                <ToggleControl
                  label={__("Enable Divider", "responsive-block-editor-addons")}
                  checked={displayColumnSeparator}
                  onChange={() =>
                    setAttributes({
                      displayColumnSeparator: !displayColumnSeparator,
                    })
                  }
                />
              )}
              {displayTitle && (
                <SelectControl
                  label={__("Title HTML Tag", "responsive-block-editor-addons")}
                  value={tagTitle}
                  onChange={(value) => setAttributes({ tagTitle: value })}
                  options={rbeaOptions.htmlTitleTags}
                />
              )}
              <BaseControl>
                <BaseControl.VisualLabel>
                  {__("Block Alignment", "responsive-block-editor-addons")}
                </BaseControl.VisualLabel>
                <br></br>
                <br></br>
                <AlignmentToolbar
                  value={contentAlign}
                  onChange={(value) =>
                    setAttributes({
                      textAlign: "",
                      titleAlign: "",
                      subtitleAlign: "",
                      contentAlign: value,
                    })
                  }
                  controls={["left", "center", "right"]}
                  isCollapsed={false}
                />
              </BaseControl>
              {displayTitle && (
                <BaseControl>
                  <BaseControl.VisualLabel>
                    {__("Title Alignment", "responsive-block-editor-addons")}
                  </BaseControl.VisualLabel>
                  <br></br>
                  <br></br>
                  <AlignmentToolbar
                    value={titleAlign}
                    onChange={(value) =>
                      setAttributes({
                        titleAlign: value,
                      })
                    }
                    controls={["left", "center", "right"]}
                    isCollapsed={false}
                  />
                </BaseControl>
              )}
              {displaySubtitle && (
                <BaseControl>
                  <BaseControl.VisualLabel>
                    {__("Subtitle Alignment", "responsive-block-editor-addons")}
                  </BaseControl.VisualLabel>
                  <br></br>
                  <br></br>
                  <AlignmentToolbar
                    value={subtitleAlign}
                    onChange={(value) =>
                      setAttributes({
                        subtitleAlign: value,
                      })
                    }
                    controls={["left", "center", "right"]}
                    isCollapsed={false}
                  />
                </BaseControl>
              )}
              <BaseControl>
                <BaseControl.VisualLabel>
                  {__("Text Alignment", "responsive-block-editor-addons")}
                </BaseControl.VisualLabel>
                <br></br>
                <br></br>
                <AlignmentToolbar
                  value={textAlign}
                  onChange={(value) =>
                    setAttributes({
                      textAlign: value,
                    })
                  }
                  controls={["left", "center", "right"]}
                  isCollapsed={false}
                />
              </BaseControl>
            </PanelBody>
            <PanelBody
              title={__("Layouts", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <SelectControl
                label={__("Layouts", "responsive-block-editor-addons")}
                value={layoutDesign}
                onChange={(value) => handleLayoutChange(value)}
                options={rbeaOptions.layouts}
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ResponsiveSpacingControl
                title={"Text Padding"}
                attrNameTemplate="contentPadding%s"
                values={{
                  desktop: contentPadding,
                  tablet: contentPaddingTablet,
                  mobile: contentPaddingMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              {displayTitle && (
                <>
                  <ResponsiveSpacingControl
                    title={"Title Bottom"}
                    attrNameTemplate="titleBottomMargin%s"
                    values={{
                      desktop: titleBottomMargin,
                      tablet: titleBottomMarginTablet,
                      mobile: titleBottomMarginMobile,
                    }}
                    setAttributes={setAttributes}
                    {...this.props}
                  />
                  {((titleAlign !== "right" && titleAlign !== '') || (titleAlign === '' && contentAlign !== 'right')) && (
                    <ResponsiveSpacingControl
                      title={"Title Left"}
                      attrNameTemplate="titleLeftMargin%s"
                      values={{
                        desktop: titleLeftMargin,
                        tablet: titleLeftMarginTablet,
                        mobile: titleLeftMarginMobile,
                      }}
                      setAttributes={setAttributes}
                      {...this.props}
                    />
                  )}
                  {((titleAlign !== "left" && titleAlign !== '') || (titleAlign === '' && contentAlign !== 'left')) && (
                    <ResponsiveSpacingControl
                      title={"Title Right"}
                      attrNameTemplate="titleRightMargin%s"
                      values={{
                        desktop: titleRightMargin,
                        tablet: titleRightMarginTablet,
                        mobile: titleRightMarginMobile,
                      }}
                      setAttributes={setAttributes}
                      {...this.props}
                    />
                  )}
                </>
              )}
              {displaySubtitle && (
                <>
                  <ResponsiveSpacingControl
                    title={"Subtitle Bottom"}
                    attrNameTemplate="subtitleBottomMargin%s"
                    values={{
                      desktop: subtitleBottomMargin,
                      tablet: subtitleBottomMarginTablet,
                      mobile: subtitleBottomMarginMobile,
                    }}
                    setAttributes={setAttributes}
                    {...this.props}
                  />
                  {((subtitleAlign !== "right" && subtitleAlign !== '') || (subtitleAlign === '' && contentAlign !== 'right')) && (
                    <ResponsiveSpacingControl
                      title={"Subtitle Left"}
                      attrNameTemplate="subtitleLeftMargin%s"
                      values={{
                        desktop: subtitleLeftMargin,
                        tablet: subtitleLeftMarginTablet,
                        mobile: subtitleLeftMarginMobile,
                      }}
                      setAttributes={setAttributes}
                      {...this.props}
                    />
                  )}
                  {((subtitleAlign !== "left" && subtitleAlign !== '') || (subtitleAlign === '' && contentAlign !== 'left')) && (
                    <ResponsiveSpacingControl
                      title={"Subtitle Right"}
                      attrNameTemplate="subtitleRightMargin%s"
                      values={{
                        desktop: subtitleRightMargin,
                        tablet: subtitleRightMarginTablet,
                        mobile: subtitleRightMarginMobile,
                      }}
                      setAttributes={setAttributes}
                      {...this.props}
                    />
                  )}
                </>
              )}
              <ResponsiveSpacingControl
                title={"Text Bottom"}
                attrNameTemplate="textBottomMargin%s"
                values={{
                  desktop: textBottomMargin,
                  tablet: textBottomMarginTablet,
                  mobile: textBottomMarginMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
            </PanelBody>
            {columnsCount > 1 && (
              <PanelBody
                title={__("Column Divider", "responsive-block-editor-addons")}
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
                          <RangeControl
                            label={__(
                              "Height Mobile",
                              "responsive-block-editor-addons"
                            )}
                            value={columnDividerHeightMobile}
                            onChange={(value) =>
                              setAttributes({
                                columnDividerHeightMobile: value,
                              })
                            }
                            min={0}
                            max={10}
                          />
                          <RangeControl
                            label={__(
                              "Width Mobile",
                              "responsive-block-editor-addons"
                            )}
                            value={columnDividerWidthMobile}
                            onChange={(value) =>
                              setAttributes({
                                columnDividerWidthMobile: value,
                              })
                            }
                            min={0}
                            max={300}
                          />
                        </Fragment>
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <Fragment>
                          <RangeControl
                            label={__(
                              "Height Tablet",
                              "responsive-block-editor-addons"
                            )}
                            value={columnDividerHeightTablet}
                            onChange={(value) =>
                              setAttributes({
                                columnDividerHeightTablet: value,
                              })
                            }
                            min={0}
                            max={300}
                          />
                          <RangeControl
                            label={__(
                              "Width Tablet",
                              "responsive-block-editor-addons"
                            )}
                            value={columnDividerWidthTablet}
                            onChange={(value) =>
                              setAttributes({
                                columnDividerWidthTablet: value,
                              })
                            }
                            min={0}
                            max={10}
                          />
                        </Fragment>
                      );
                    } else {
                      tabout = (
                        <Fragment>
                          <RangeControl
                            label={__(
                              "Height",
                              "responsive-block-editor-addons"
                            )}
                            value={columnDividerHeight}
                            onChange={(value) =>
                              setAttributes({ columnDividerHeight: value })
                            }
                            min={0}
                            max={300}
                          />
                          <RangeControl
                            label={__(
                              "Width",
                              "responsive-block-editor-addons"
                            )}
                            value={columnDividerWidth}
                            onChange={(value) =>
                              setAttributes({
                                columnDividerWidth: value,
                              })
                            }
                            min={0}
                            max={10}
                          />
                        </Fragment>
                      );
                    }
                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
              </PanelBody>
            )}
            <PanelBody
              title={__("Color Settings", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              {columnsCount > 1 && (
                <Fragment>
                  <p className="responsive-block-editor-addons-setting-label">
                    {__("Divider Color", "responsive-block-editor-addons")}
                    <span className="components-base-control__label">
                      <span
                        className="component-color-indicator"
                        style={{ backgroundColor: dividerColor }}
                      ></span>
                    </span>
                  </p>
                  <ColorPalette
                    value={dividerColor}
                    onChange={(colorValue) =>
                      setAttributes({ dividerColor: colorValue })
                    }
                    allowReset
                  />
                </Fragment>
              )}
              <Fragment>
                <p className="responsive-block-editor-addons-setting-label">
                  {__("Title Color", "responsive-block-editor-addons")}
                  <span className="components-base-control__label">
                    <span
                      className="component-color-indicator"
                      style={{ backgroundColor: titleColor }}
                    ></span>
                  </span>
                </p>
                <ColorPalette
                  value={titleColor}
                  onChange={(colorValue) =>
                    setAttributes({ titleColor: colorValue })
                  }
                  allowReset
                />
              </Fragment>
              <Fragment>
                <p className="responsive-block-editor-addons-setting-label">
                  {__("Subtitle Color", "responsive-block-editor-addons")}
                  <span className="components-base-control__label">
                    <span
                      className="component-color-indicator"
                      style={{ backgroundColor: subtitleColor }}
                    ></span>
                  </span>
                </p>
                <ColorPalette
                  value={subtitleColor}
                  onChange={(colorValue) =>
                    setAttributes({ subtitleColor: colorValue })
                  }
                  allowReset
                />
              </Fragment>
              <Fragment>
                <p className="responsive-block-editor-addons-setting-label">
                  {__("Text Color", "responsive-block-editor-addons")}
                  <span className="components-base-control__label">
                    <span
                      className="component-color-indicator"
                      style={{ backgroundColor: textColor }}
                    ></span>
                  </span>
                </p>
                <ColorPalette
                  value={textColor}
                  onChange={(colorValue) =>
                    setAttributes({ textColor: colorValue })
                  }
                  allowReset
                />
              </Fragment>
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
                  "Subtitle Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="subtitle%s"
                values={{
                  family: subtitleFontFamily,
                  size: subtitleFontSize,
                  sizeMobile: subtitleFontSizeMobile,
                  sizeTablet: subtitleFontSizeTablet,
                  weight: subtitleFontWeight,
                  height: subtitleLineHeight,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={__("Text Typography", "responsive-block-editor-addons")}
                attrNameTemplate="text%s"
                values={{
                  family: textFontFamily,
                  size: textFontSize,
                  sizeMobile: textFontSizeMobile,
                  sizeTablet: textFontSizeTablet,
                  weight: textFontWeight,
                  height: textLineHeight,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
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
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <SelectControl
                label={__("Block HTML Tag", "responsive-block-editor-addons")}
                value={blockTag}
                onChange={(value) => setAttributes({ blockTag: value })}
                options={rbeaOptions.blockTags}
              />
              <RangeControl
                label={__("Opacity", "responsive-block-editor-addons")}
                value={blockOpacity}
                onChange={(value) => setAttributes({ blockOpacity: value })}
                min={0}
                max={100}
              />
            </PanelBody>
            <PanelBody
              title={__("Block Spacing", "responsive-block-editor-addons")}
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
                  <RangeControl
              label={__("Max Content Width", "responsive-block-editor-addons")}
              min={0}
              max={2000}
              value={containerWidthMobile }
              onChange={(value) => setAttributes({ containerWidthMobile: value })}
              />
              </Fragment>
          );
          } else if ("tablet" === tab.name) {
              tabout = (
                  <Fragment>
                  <RangeControl
              label={__("Max Content Width", "responsive-block-editor-addons")}
              min={0}
              max={2000}
              value={containerWidthTablet }
              onChange={(value) => setAttributes({ containerWidthTablet: value })}
              />
              </Fragment>
          );
          } else {
              tabout = (
                  <Fragment>
                  <RangeControl
              label={__("Max Content Width", "responsive-block-editor-addons")}
              min={0}
              max={2000}
              value={containerWidth }
              onChange={(value) => setAttributes({ containerWidth: value })}
              />
              </Fragment>
          );
          }

          return <div>{tabout}</div>;
      }}
  </TabPanel>

      <PanelBody
                title={__("Padding", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <ResponsivePaddingControl
                  attrNameTemplate="container%s"
                  values={{
                    desktopTop: containerTopPadding,
                    desktopBottom: containerBottomPadding,
                    desktopLeft: containerLeftPadding,
                    desktopRight: containerRightPadding,

                    tabletTop: containerTopPaddingTablet,
                    tabletBottom: containerBottomPaddingTablet,
                    tabletLeft: containerLeftPaddingTablet,
                    tabletRight: containerRightPaddingTablet,

                    mobileTop: containerTopPaddingMobile,
                    mobileBottom: containerBottomPaddingMobile,
                    mobileLeft: containerLeftPaddingMobile,
                    mobileRight: containerRightPaddingMobile,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
              </PanelBody>
              <PanelBody
                title={__("Margin", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <ResponsiveMarginControl
                  attrNameTemplate="container%s"
                  values={{
                    desktopTop: containerTopMargin,
                    desktopBottom: containerBottomMargin,
                    desktopLeft: containerLeftMargin,
                    desktopRight: containerRightMargin,

                    tabletTop: containerTopMarginTablet,
                    tabletBottom: containerBottomMarginTablet,
                    tabletLeft: containerLeftMarginTablet,
                    tabletRight: containerRightMarginTablet,

                    mobileTop: containerTopMarginMobile,
                    mobileBottom: containerBottomMarginMobile,
                    mobileLeft: containerLeftMarginMobile,
                    mobileRight: containerRightMarginMobile,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
              </PanelBody>
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
                        value={zIndexMobile}
                        onChange={(value) =>
                          setAttributes({ zIndexMobile: value !== undefined ? value : 1 })
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
                        value={zIndexTablet}
                        onChange={(value) =>
                          setAttributes({ zIndexTablet: value !== undefined ? value : 1 })
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
                        value={zIndex}
                        onChange={(value) =>
                          setAttributes({ zIndex: value !== undefined ? value : 1 })
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
