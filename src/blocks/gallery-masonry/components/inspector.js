/**
 * Internal dependencies
 */
import ResponsiveTabsControl from "../../../utils/components/responsive-tabs-control";
import captionOptions from "../../../utils/components/block-gallery/options/caption-options";
import SizeControl from "../../../utils/components/size-control";
import GalleryLinkSettings from "../../../utils/components/block-gallery/gallery-link-settings";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaSupportControl from "../../../utils/components/rbea-support-control";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaBlockBorderHelperControl from "../../../settings-components/RbeaBlockBorderSettings";
import RbeaDimensionControl from "../../../settings-components/RbeaDimensionControl";
import RbeaBorderStyleTabControl from "../../../utils/components/rbea-border-style-tab-control";
/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component, Fragment } from "@wordpress/element";
import { InspectorControls, AlignmentToolbar } from "@wordpress/block-editor";

import {
  PanelBody,
  TextControl,
  RangeControl,
  ToggleControl,
  SelectControl,
  TabPanel,
  Dashicon,
  CheckboxControl,
  BaseControl,
} from "@wordpress/components";

/**
 * Inspector controls
 */
class Inspector extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      columns: this.props.attributes.columnsize,
      customHeight: this.props.attributes.customHeight,
      customWidth: this.props.attributes.customWidth,
    };
    this.setRadiusTo = this.setRadiusTo.bind(this);
    this.setCaptionStyleTo = this.setCaptionStyleTo.bind(this);
    this.setNumberOfColumns = this.setNumberOfColumns.bind(this);
    this.setCustomHeight = this.setCustomHeight.bind(this);
    this.setCustomWidth = this.setCustomWidth.bind(this);
  }

  componentDidUpdate() {
    if (this.props.attributes.gutter <= 0) {
      this.props.setAttributes({
        radius: 0,
      });
    }
  }

  // Get dynamic categories from the edit component
  getDynamicCategories() {
    const { attributes } = this.props;
    const { images } = attributes;
    
    if (!images || images.length === 0) {
      return [{ label: "No categories available", value: "" }];
    }

    // Extract unique categories from images
    const categories = new Set();
    images.forEach((image) => {
      if (image.rba_category) {
        image.rba_category
          .split(",")
          .map((c) => c.trim())
          .forEach((cat) => {
            if (cat && cat !== "uncategorized") {
              categories.add(cat);
            }
          });
      }
    });

    const categoryOptions = Array.from(categories).map((cat) => ({
      label: cat,
      value: cat,
    }));

    // Add "All" option at the beginning
    return [
      { label: "All", value: "all" },
      ...categoryOptions,
    ];
  }

  setNumberOfColumns(value) {
    this.setState({ columns: value });
    this.props.setAttributes({ columnsize: value });
  }

  setRadiusTo(value) {
    this.props.setAttributes({ radius: value });
  }
  setCaptionStyleTo(value) {
    this.props.setAttributes({ captionStyle: value });
  }
  setCustomHeight(value) {
    console.log(value);
    this.props.setAttributes({ customHeight: value });
  }
  setCustomWidth(value) {
    this.props.setAttributes({ customWidth: value });
  }

  getCaptionsHelp(checked) {
    return checked
      ? __(
          "Showing captions for each media item.",
          "responsive-block-editor-addons"
        )
      : __("Toggle to show media captions.", "responsive-block-editor-addons");
  }

  getLightboxHelp(checked) {
    return checked
      ? __("Image lightbox is enabled.", "responsive-block-editor-addons")
      : __(
          "Toggle to enable the image lightbox.",
          "responsive-block-editor-addons"
        );
  }

  render() {
    const { attributes, setAttributes } = this.props;

    const {
      captions,
      captionStyle,
      gutter,
      gutterMobile,
      gutterTablet,
      radius,
      lightbox,
      linkTo,
      columnsize,
      customHeight,
      customWidth,
      z_index,
      hideWidget,
      hideWidgetTablet,
      hideWidgetMobile,
      z_indexTablet,
      z_indexMobile,
      blockTopMargin,
      blockBottomMargin,
      blockLeftMargin,
      blockRightMargin,
      blockTopMarginTablet,
      blockBottomMarginTablet,
      blockLeftMarginTablet,
      blockRightMarginTablet,
      blockTopMarginMobile,
      blockBottomMarginMobile,
      blockLeftMarginMobile,
      blockRightMarginMobile,
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
      blockIsMarginControlConnected,
      blockIsPaddingControlConnected,
      filterTabAlignment,
      filterTabAlignmentTablet,
      filterTabAlignmentMobile,
      filterTabTopPadding,
      filterTabRightPadding,
      filterTabBottomPadding,
      filterTabLeftPadding,
      filterTabTopPaddingTablet,
      filterTabRightPaddingTablet,
      filterTabBottomPaddingTablet,
      filterTabLeftPaddingTablet,
      filterTabTopPaddingMobile,
      filterTabRightPaddingMobile,
      filterTabBottomPaddingMobile,
      filterTabLeftPaddingMobile,
      filterTabIsPaddingControlConnected,
      filterTabSpacingBetween,
      filterTabSpacingBetweenTablet,
      filterTabSpacingBetweenMobile,
      filterTabBottomSpacing,
      filterTabBottomSpacingTablet,
      filterTabBottomSpacingMobile,
      filterTabTextColor,
      filterTabBackgroundColor,
      filterTabHoverTextColor,
      filterTabHoverBackgroundColor,
      filterTabBorderStyle,
      filterTabTopBorderwidth,
      filterTabRightBorderwidth,
      filterTabBottomBorderwidth,
      filterTabLeftBorderwidth,
      filterTabTopBorderwidthTablet,
      filterTabRightBorderwidthTablet,
      filterTabBottomBorderwidthTablet,
      filterTabLeftBorderwidthTablet,
      filterTabTopBorderwidthMobile,
      filterTabRightBorderwidthMobile,
      filterTabBottomBorderwidthMobile,
      filterTabLeftBorderwidthMobile,
      filterTabIsBorderwidthControlConnected,
      filterTabBorderColor,
    } = attributes;

    const blockMarginResetValues = {
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginTabletTop: 0,
      marginTabletRight: 0,
      marginTabletBottom: 0,
      marginTabletLeft: 0,
      marginMobileTop: 0,
      marginMobileRight: 0,
      marginMobileBottom: 0,
      marginMobileLeft: 0,
    };
    const blockPaddingResetValues = {
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingTabletTop: 0,
      paddingTabletRight: 0,
      paddingTabletBottom: 0,
      paddingTabletLeft: 0,
      paddingMobileTop: 0,
      paddingMobileRight: 0,
      paddingMobileBottom: 0,
      paddingMobileLeft: 0,
    };

    const filterTabPaddingResetValues = {
      paddingTop: 7,
      paddingRight: 7,
      paddingBottom: 7,
      paddingLeft: 7,
      paddingTabletTop: 7,
      paddingTabletRight: 7,
      paddingTabletBottom: 7,
      paddingTabletLeft: 7,
      paddingMobileTop: 7,
      paddingMobileRight: 7,
      paddingMobileBottom: 7,
      paddingMobileLeft: 7,
    };

    // Get dynamic categories for the dropdown
    const dynamicCategories = this.getDynamicCategories();

    return (
      <InspectorControls>
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("Masonry settings", "responsive-block-editor-addons")}
            >
              <div className="rbea-gallery-masonry-slider-control-container">
                <ResponsiveTabsControl {...this.props} />
              </div>
              <div className="rbea-gallery-masonry-slider-control-container">
                <RbeaRangeControl
                  label={__("Columns", "responsive-block-editor-addons")}
                  aria-label={__(
                    "Number of columns for masonary",
                    "responsive-block-editor-addons"
                  )}
                  value={columnsize}
                  onChange={this.setNumberOfColumns}
                  min={1}
                  max={10}
                  step={1}
                />
              </div>
              <div className="rbea-gallery-masonry-slider-control-container">
                <RbeaRangeControl
                  label={__("Custom Height", "responsive-block-editor-addons")}
                  value={customHeight}
                  onChange={this.setCustomHeight}
                  min={0}
                  max={1000}
                  step={1}
                />
              </div>

              <div className="rbea-gallery-masonry-slider-control-container">
                <RbeaRangeControl
                  label={__("Custom Width", "responsive-block-editor-addons")}
                  value={customWidth}
                  onChange={(value) => this.setCustomWidth(value)}
                  min={0}
                  max={1000}
                  step={1}
                />
              </div>
              {gutter > 0 && (
                <div className="rbea-gallery-masonry-slider-control-container">
                  <RbeaRangeControl
                    label={__(
                      "Rounded corners",
                      "responsive-block-editor-addons"
                    )}
                    aria-label={__(
                      "Add rounded corners to the gallery items.",
                      "responsive-block-editor-addons"
                    )}
                    value={radius}
                    onChange={this.setRadiusTo}
                    min={0}
                    max={20}
                    step={1}
                  />
                </div>
              )}

              <ToggleControl
                label={__("Lightbox", "responsive-block-editor-addons")}
                checked={!!lightbox}
                onChange={() =>
                  setAttributes({ lightbox: !lightbox, linkTo: "none" })
                }
                help={this.getLightboxHelp}
              />

              <ToggleControl
                label={__("Captions", "responsive-block-editor-addons")}
                checked={!!captions}
                onChange={() => setAttributes({ captions: !captions })}
                help={this.getCaptionsHelp}
              />

              {captions && (
                <RbeaTabRadioControl
                  label={__("Caption style", "responsive-block-editor-addons")}
                  value={captionStyle}
                  onChange={this.setCaptionStyleTo}
                  options={captionOptions}
                />
              )}
            </PanelBody>

            <PanelBody
              title={__("Filter Image Gallery", "textdomain")}
              initialOpen={false}
            >
              <ToggleControl
                label={__("Filterable Image Gallery", "textdomain")}
                checked={attributes.enableCategoryFilter}
                onChange={(value) => {
                  setAttributes({ enableCategoryFilter: value });
                  // Reset selected category when filter is turned off
                  if (!value && this.props.onResetCategory) {
                    this.props.onResetCategory();
                  }
                }}
              />
              {attributes.enableCategoryFilter && (
                <>
                  <TextControl
                    label={__('"All" Tab Label', "textdomain")}
                    value={attributes.allTabLabel}
                    onChange={(value) => setAttributes({ allTabLabel: value })}
                  />

                  <ToggleControl
                    label={__("Default Tab on Page Load", "textdomain")}
                    checked={attributes.setDefaultCategory}
                    onChange={(value) =>
                      setAttributes({ setDefaultCategory: value })
                    }
                  />

                  {attributes.setDefaultCategory && (
                    <SelectControl
                      label={__("Default Category", "textdomain")}
                      value={attributes.defaultCategory}
                      options={dynamicCategories}
                      onChange={(value) =>
                        setAttributes({ defaultCategory: value })
                      }
                    />
                  )}
                </>
              )}
              {attributes.enableCategoryFilter && (
                <>
                  <ToggleControl
                    label={__("Responsive Support", "textdomain")}
                    checked={attributes.enableResponsiveSupport}
                    onChange={(value) =>
                      setAttributes({ enableResponsiveSupport: value })
                    }
                    help={__("Enable this option to display Filterable Tabs in a Dropdown on Mobile.", "textdomain")}
                  />
                </>
              )}
            </PanelBody>

            <GalleryLinkSettings {...this.props} />
            <RbeaSupportControl blockSlug={"gallery-masonry"} />
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={true}
            >
              <ResponsiveNewPaddingControl
                attrNameTemplate="block%s"
                resetValues={blockPaddingResetValues}
                {...this.props}
              />
              <ResponsiveNewMarginControl
                attrNameTemplate="block%s"
                resetValues={blockMarginResetValues}
                {...this.props}
              />
            </PanelBody>
            {attributes.enableCategoryFilter && (
              <PanelBody
                title={__("Filterable Tabs", "responsive-block-editor-addons")}
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
                                "Tab Alignment Mobile",
                                "responsive-block-editor-addons"
                              )}
                            </p>
                            <div className="responsive-block-editor-addons-alignment-mobile">
                              <AlignmentToolbar
                                value={filterTabAlignmentMobile}
                                onChange={(value) =>
                                  setAttributes({
                                    filterTabAlignmentMobile: value,
                                  })
                                }
                                controls={["start", "center", "end"]}
                                isCollapsed={false}
                              />
                            </div>
                          </BaseControl>
                        </Fragment>
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <Fragment>
                          <BaseControl>
                            <p>
                              {__(
                                "Tab Alignment Tablet",
                                "responsive-block-editor-addons"
                              )}
                            </p>
                            <div className="responsive-block-editor-addons-alignment-tablet">
                              <AlignmentToolbar
                                value={filterTabAlignmentTablet}
                                onChange={(value) =>
                                  setAttributes({
                                    filterTabAlignmentTablet: value,
                                  })
                                }
                                controls={["start", "center", "end"]}
                                isCollapsed={false}
                              />
                            </div>
                          </BaseControl>
                        </Fragment>
                      );
                    } else {
                      tabout = (
                        <Fragment>
                          <BaseControl>
                            <p>
                              {__("Tab Alignment", "responsive-block-editor-addons")}
                            </p>
                            <div className="responsive-block-editor-addons-alignment">
                              <AlignmentToolbar
                                value={filterTabAlignment}
                                onChange={(value) =>
                                  setAttributes({
                                    filterTabAlignment: value,
                                  })
                                }
                                controls={["start", "center", "end"]}
                                isCollapsed={false}
                              />
                            </div>
                          </BaseControl>
                        </Fragment>
                      );
                    }
                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
                
                <TypographyHelperControl
                  title={__(
                    "Typography",
                    "responsive-block-editor-addons"
                  )}
                  attrNameTemplate="filterTabTypography%s"
                  values={{
                    family: attributes.filterTabTypographyFontFamily,
                    size: attributes.filterTabTypographyFontSize,
                    sizeMobile: attributes.filterTabTypographyFontSizeMobile,
                    sizeTablet: attributes.filterTabTypographyFontSizeTablet,
                    weight: attributes.filterTabTypographyFontWeight,
                    height: attributes.filterTabTypographyLineHeight,
                    spacing: attributes.filterTabTypographyLetterSpacing,
                    transform: attributes.filterTabTypographyTextTransform,
                    textDecoration: attributes.filterTabTypographyTextDecoration,
                    fontstyle: attributes.filterTabTypographyFontStyle,
                  }}
                  showLetterSpacing={true}
                  showTextDecoration={true}
                  showTextBottomSpacing={false}
                  showTextTransform={true}
                  showColorControl={false}
                  setAttributes={setAttributes}
                  {...this.props}
                />
                
                {/* Padding Control */}
                <ResponsiveNewPaddingControl
                  attrNameTemplate="filterTab%s"
                  resetValues={filterTabPaddingResetValues}
                  {...this.props}
                />

                {/* Spacing Between Tabs (0-100) */}
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
                          label={__("Spacing Between Tabs", "responsive-block-editor-addons")}
                          min={0}
                          max={100}
                          allowReset={true}
                          resetFallbackValue={10}
                          value={filterTabSpacingBetweenMobile}
                          onChange={(value) =>
                            setAttributes({
                              filterTabSpacingBetweenMobile:
                                value !== undefined ? value : 0,
                            })
                          }
                        />
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <RbeaRangeControl
                          label={__("Spacing Between Tabs", "responsive-block-editor-addons")}
                          min={0}
                          max={100}
                          allowReset={true}
                          resetFallbackValue={10}
                          value={filterTabSpacingBetweenTablet}
                          onChange={(value) =>
                            setAttributes({
                              filterTabSpacingBetweenTablet:
                                value !== undefined ? value : 0,
                            })
                          }
                        />
                      );
                    } else {
                      tabout = (
                        <RbeaRangeControl
                          label={__("Spacing Between Tabs", "responsive-block-editor-addons")}
                          min={0}
                          max={100}
                          allowReset={true}
                          resetFallbackValue={10}
                          value={filterTabSpacingBetween}
                          onChange={(value) =>
                            setAttributes({
                              filterTabSpacingBetween:
                                value !== undefined ? value : 0,
                            })
                          }
                        />
                      );
                    }
                    return <div>{tabout}</div>;
                  }}
                </TabPanel>

                {/* Tabs Bottom Spacing (0-100) */}
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
                          label={__("Tabs Bottom Spacing", "responsive-block-editor-addons")}
                          min={0}
                          max={100}
                          allowReset={true}
                          resetFallbackValue={20}
                          value={filterTabBottomSpacingMobile}
                          onChange={(value) =>
                            setAttributes({
                              filterTabBottomSpacingMobile:
                                value !== undefined ? value : 0,
                            })
                          }
                        />
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <RbeaRangeControl
                          label={__("Tabs Bottom Spacing", "responsive-block-editor-addons")}
                          min={0}
                          max={100}
                          allowReset={true}
                          resetFallbackValue={20}
                          value={filterTabBottomSpacingTablet}
                          onChange={(value) =>
                            setAttributes({
                              filterTabBottomSpacingTablet:
                                value !== undefined ? value : 0,
                            })
                          }
                        />
                      );
                    } else {
                      tabout = (
                        <RbeaRangeControl
                          label={__("Tabs Bottom Spacing", "responsive-block-editor-addons")}
                          min={0}
                          max={100}
                          allowReset={true}
                          resetFallbackValue={20}
                          value={filterTabBottomSpacing}
                          onChange={(value) =>
                            setAttributes({
                              filterTabBottomSpacing:
                                value !== undefined ? value : 0,
                            })
                          }
                        />
                      );
                    }
                    return <div>{tabout}</div>;
                  }}
                </TabPanel>

                {/* Color Controls */}
                <TabPanel
                  className="responsive-block-editor-addons-inspect-tabs 
                  responsive-block-editor-addons-inspect-tabs-col-2  
                  responsive-block-editor-addons-color-inspect-tabs"
                  activeClass="active-tab"
                  initialTabName="normal"
                  tabs={[
                    {
                      name: "empty-1",
                      title: __("", "responsive-block-editor-addons"),
                      className: "responsive-block-editor-addons-empty-tab",
                    },
                    {
                      name: "normal",
                      title: __("Normal", "responsive-block-editor-addons"),
                      className: "responsive-block-editor-addons-normal-tab",
                    },
                    {
                      name: "empty-2",
                      title: __("", "responsive-block-editor-addons"),
                      className: "responsive-block-editor-addons-empty-tab-middle",
                    },
                    {
                      name: "hover",
                      title: __("Hover", "responsive-block-editor-addons"),
                      className: "responsive-block-editor-addons-hover-tab",
                    },
                    {
                      name: "empty-3",
                      title: __("", "responsive-block-editor-addons"),
                      className: "responsive-block-editor-addons-empty-tab",
                    },
                  ]}
                >
                  {(tabName) => {
                    let color_tab;
                    if ("normal" === tabName.name) {
                      color_tab = (
                        <div>
                          <RbeaColorControl
                            label={__("Text Color", "responsive-block-editor-addons")}
                            colorValue={filterTabTextColor}
                            onChange={(colorValue) =>
                              setAttributes({ filterTabTextColor: colorValue })
                            }
                            resetColor={() => setAttributes({ filterTabTextColor: "#000000" })}
                          />
                          <RbeaColorControl
                            label={__("Background Color", "responsive-block-editor-addons")}
                            colorValue={filterTabBackgroundColor}
                            onChange={(colorValue) =>
                              setAttributes({ filterTabBackgroundColor: colorValue })
                            }
                            resetColor={() => setAttributes({ filterTabBackgroundColor: "#ffffff" })}
                          />
                        </div>
                      );
                    } else if("hover" === tabName.name) {
                      color_tab = (
                        <div>
                          <RbeaColorControl
                            label={__("Text Color", "responsive-block-editor-addons")}
                            colorValue={filterTabHoverTextColor}
                            onChange={(colorValue) =>
                              setAttributes({ filterTabHoverTextColor: colorValue })
                            }
                            resetColor={() => setAttributes({ filterTabHoverTextColor: "#ffffff" })}
                          />
                          <RbeaColorControl
                            label={__("Background Color", "responsive-block-editor-addons")}
                            colorValue={filterTabHoverBackgroundColor}
                            onChange={(colorValue) =>
                              setAttributes({ filterTabHoverBackgroundColor: colorValue })
                            }
                            resetColor={() => setAttributes({ filterTabHoverBackgroundColor: "#0073aa" })}
                          />
                        </div>
                      );
                    } else {
                      color_tab = null;
                    }
                    return <div>{color_tab}</div>;
                  }}
                </TabPanel>

                {/* Border Style */}
                <RbeaBorderStyleTabControl
                  selected={filterTabBorderStyle}
                  onChange={(value) =>
                    setAttributes({ filterTabBorderStyle: value })
                  }
                />
                
                {/* Border Width - Only show if border style is not "none" */}
                {filterTabBorderStyle && filterTabBorderStyle !== "none" && (
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
                        className: " responsive-tablet-tab  responsive-responsive-tabs",
                      },
                      {
                        name: "mobile",
                        title: <Dashicon icon="smartphone" />,
                        className: " responsive-mobile-tab  responsive-responsive-tabs",
                      },
                    ]}
                  >
                    {(tab) => {
                      let tabout;
                      if ("mobile" === tab.name) {
                        tabout = (
                          <RbeaDimensionControl
                            {...{...this.props, tabName: 'Mobile', controlName: 'borderwidth'}}
                            attrNameTemplate="filterTab%s"
                            values={{
                              borderwidthMobileTop: filterTabTopBorderwidthMobile,
                              borderwidthMobileRight: filterTabRightBorderwidthMobile,
                              borderwidthMobileBottom: filterTabBottomBorderwidthMobile,
                              borderwidthMobileLeft: filterTabLeftBorderwidthMobile,
                            }}
                            setAttributes={setAttributes}
                          />
                        );
                      } else if ("tablet" === tab.name) {
                        tabout = (
                          <RbeaDimensionControl
                            {...{...this.props, tabName: 'Tablet', controlName: 'borderwidth'}}
                            attrNameTemplate="filterTab%s"
                            values={{
                              borderwidthTabletTop: filterTabTopBorderwidthTablet,
                              borderwidthTabletRight: filterTabRightBorderwidthTablet,
                              borderwidthTabletBottom: filterTabBottomBorderwidthTablet,
                              borderwidthTabletLeft: filterTabLeftBorderwidthTablet,
                            }}
                            setAttributes={setAttributes}
                          />
                        );
                      } else {
                        tabout = (
                          <RbeaDimensionControl
                            {...{...this.props, tabName: '', controlName: 'borderwidth'}}
                            attrNameTemplate="filterTab%s"
                            values={{
                              borderwidthTop: filterTabTopBorderwidth,
                              borderwidthRight: filterTabRightBorderwidth,
                              borderwidthBottom: filterTabBottomBorderwidth,
                              borderwidthLeft: filterTabLeftBorderwidth,
                            }}
                            setAttributes={setAttributes}
                          />
                        );
                      }
                      return <div>{tabout}</div>;
                    }}
                  </TabPanel>
                )}
                
                {/* Border Color - Only show if border style is not "none" */}
                {filterTabBorderStyle && filterTabBorderStyle !== "none" && (
                  <RbeaColorControl
                    label={__("Border Color", "responsive-block-editor-addons")}
                    colorValue={filterTabBorderColor}
                    onChange={(colorValue) =>
                      setAttributes({ filterTabBorderColor: colorValue })
                    }
                    resetColor={() => setAttributes({ filterTabBorderColor: "#000000" })}
                  />
                )}

              </PanelBody>
            )}
            <RbeaSupportControl blockSlug={"gallery-masonry"} />
          </InspectorTab>
          <InspectorTab key={"advance"}>
            <PanelBody
              title={__(
                "Responsive Conditions",
                "responsive-block-editor-addons"
              )}
              initialOpen={false}
            >
              <ToggleControl
                label={__("Hide on Desktop", "responsive-block-editor-addons")}
                checked={hideWidget}
                onChange={(value) => setAttributes({ hideWidget: !hideWidget })}
              />
              <ToggleControl
                label={__("Hide on Tablet", "responsive-block-editor-addons")}
                checked={hideWidgetTablet}
                onChange={(value) =>
                  setAttributes({ hideWidgetTablet: !hideWidgetTablet })
                }
              />
              <ToggleControl
                label={__("Hide on Mobile", "responsive-block-editor-addons")}
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
                      <RbeaRangeControl
                        label={__(
                          "z-index (Mobile)",
                          "responsive-block-editor-addons"
                        )}
                        min={-1}
                        max={99999}
                        allowReset={true}
                        resetFallbackValue={1}
                        value={z_indexMobile}
                        onChange={(value) =>
                          setAttributes({
                            z_indexMobile: value !== undefined ? value : 1,
                          })
                        }
                      />
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <RbeaRangeControl
                        label={__(
                          "z-index (Tablet)",
                          "responsive-block-editor-addons"
                        )}
                        min={-1}
                        max={99999}
                        allowReset={true}
                        resetFallbackValue={1}
                        value={z_indexTablet}
                        onChange={(value) =>
                          setAttributes({
                            z_indexTablet: value !== undefined ? value : 1,
                          })
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
                        value={z_index}
                        onChange={(value) =>
                          setAttributes({
                            z_index: value !== undefined ? value : 1,
                          })
                        }
                      />
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
            </PanelBody>
            <RbeaSupportControl blockSlug={"gallery-masonry"} />
          </InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}

export default Inspector;