import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import ResponsivePaddingControl from "../../../settings-components/ResponsiveSpacingSettings/ResponsivePaddingControl";
import ResponsiveMarginControl from "../../../settings-components/ResponsiveSpacingSettings/ResponsiveMarginControl";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import rbeaOptions from "./rbea-options";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaSupportControl from "../../../utils/components/rbea-support-control";
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

        blockIsTypographyColorValueUpdated,
        titleTypographyColor,
        subtitleTypographyColor,
        textTypographyColor,
        titleTextTransform,
        titleFontStyle,
        subtitleTextTransform,
        subtitleFontStyle,
        textTextTransform,
        textFontStyle,
      },
      setAttributes,
    } = this.props;

    const containerPaddingResetValues = {
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingTabletTop: 10,
      paddingTabletRight: 10,
      paddingTabletBottom: 10,
      paddingTabletLeft: 10,
      paddingMobileTop: 10,
      paddingMobileRight: 10,
      paddingMobileBottom: 10,
      paddingMobileLeft: 10,
    }

    const containerMarginResetValues = {
      marginTop: 10,
      marginRight: 10,
      marginBottom: 10,
      marginLeft: 10,
      marginTabletTop: 10,
      marginTabletRight: 10,
      marginTabletBottom: 10,
      marginTabletLeft: 10,
      marginMobileTop: 10,
      marginMobileRight: 10,
      marginMobileBottom: 10,
      marginMobileLeft: 10,
  }

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

    // backward compatibility for typography color control
    if (!blockIsTypographyColorValueUpdated) {
      this.props.setAttributes(
        {
          titleTypographyColor:         titleColor !== undefined ? titleColor : titleTypographyColor,
          subtitleTypographyColor:          subtitleColor !== undefined ? subtitleColor : subtitleTypographyColor,
          textTypographyColor:          textColor !== undefined ? textColor : textTypographyColor,
        }
      )
      this.props.setAttributes({blockIsTypographyColorValueUpdated: true});
    }

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaRangeControl
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
                <RbeaTabRadioControl
                  label={__("Title HTML Tag", "responsive-block-editor-addons")}
                  value={tagTitle}
                  onChange={(value) => setAttributes({ tagTitle: value })}
                  options={rbeaOptions.htmlTitleTags}
                  defaultValue={"h1"}
                />
              )}
              <Fragment>
                <BaseControl>
                  <p>
                    {__("Block Alignment", "responsive-block-editor-addons")}
                  </p>
                  <div className="responsive-block-editor-addons-alignment">
                    <AlignmentToolbar
                      value={contentAlign}
                      onChange={(value) =>
                        setAttributes({
                          contentAlign: value,
                        })
                      }
                      controls={["left", "center", "right"]}
                      isCollapsed={false}
                    />
                  </div>
                </BaseControl>
              </Fragment>
              {displayTitle && (<Fragment>
                <BaseControl>
                  <p>
                    {__("Title Alignment", "responsive-block-editor-addons")}
                  </p>
                  <div className="responsive-block-editor-addons-alignment">
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
                  </div>
                </BaseControl>
              </Fragment>)}
              {displaySubtitle && (<Fragment>
                <BaseControl>
                  <p>
                    {__("Subtitle Alignment", "responsive-block-editor-addons")}
                  </p>
                  <div className="responsive-block-editor-addons-alignment">
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
                  </div>
                </BaseControl>
              </Fragment>)}
              <Fragment>
                <BaseControl>
                  <p>
                    {__("Text Alignment", "responsive-block-editor-addons")}
                  </p>
                  <div className="responsive-block-editor-addons-alignment">
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
                  </div>
                </BaseControl>
              </Fragment>
            </PanelBody>
            <PanelBody
              title={__("Layouts", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RbeaTabRadioControl
                label={__("Layouts", "responsive-block-editor-addons")}
                value={layoutDesign}
                onChange={(value) => handleLayoutChange(value)}
                options={rbeaOptions.layouts}
                defaultValue={"layout1"}
              />
            </PanelBody>
            <RbeaSupportControl blockSlug={"advanced-text"} />
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
                          <RbeaRangeControl
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
                          <RbeaRangeControl
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
                          <RbeaRangeControl
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
                          <RbeaRangeControl
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
                          <RbeaRangeControl
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
                          <RbeaRangeControl
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
            {columnsCount > 1 && (
                <PanelBody
                  title={__("Color Settings", "responsive-block-editor-addons")}
                  initialOpen={false}
                >
                  <Fragment>
                      <RbeaColorControl
                        label = {__("Divider Color", "responsive-block-editor-addons")}
                        colorValue={dividerColor}
                        onChange={(colorValue) =>
                          setAttributes({ dividerColor: colorValue })
                        }
                        resetColor={() => setAttributes({ dividerColor: "" })}
                      />
                    </Fragment>
                </PanelBody>
              )}
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
                  color: titleTypographyColor,
                  transform: titleTextTransform,
                  fontstyle: titleFontStyle,
                }}
                showLetterSpacing={false}
                showColorControl={true}
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
                  color: subtitleTypographyColor,
                  transform: subtitleTextTransform,
                  fontstyle: subtitleFontStyle,
                }}
                showLetterSpacing={false}
                showColorControl={true}
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
                  color: textTypographyColor,
                  transform: textTextTransform,
                  fontstyle: textFontStyle,
                }}
                showLetterSpacing={false}
                showColorControl={true}
                setAttributes={setAttributes}
                {...this.props}
              />
            <RbeaSupportControl blockSlug={"advanced-text"} />
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
              <div className="responsive-block-html-tag-wrapper">
              <RbeaTabRadioControl
                label={__("Block HTML Tag", "responsive-block-editor-addons")}
                value={blockTag}
                onChange={(value) => setAttributes({ blockTag: value })}
                options={rbeaOptions.blockTags}
                defaultValue={"div"}
              />
              </div>
              <RbeaRangeControl
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
                  <RbeaRangeControl
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
                  <RbeaRangeControl
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
                  <RbeaRangeControl
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
                <ResponsiveNewPaddingControl
                  attrNameTemplate="container%s"
                  resetValues={containerPaddingResetValues}
                  {...this.props}
                />
              </PanelBody>
              <PanelBody
                title={__("Margin", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <ResponsiveNewMarginControl
                  attrNameTemplate="container%s"
                  resetValues={containerMarginResetValues}
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
                        <RbeaRangeControl
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
                        <RbeaRangeControl
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
                        <RbeaRangeControl
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
            <RbeaSupportControl blockSlug={"advanced-text"} />
          </InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
