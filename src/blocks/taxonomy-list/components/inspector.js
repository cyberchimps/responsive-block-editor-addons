import fontOptions from "../../../utils/googlefonts";
import BoxShadowControl from "../../../utils/components/box-shadow";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";

/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

import compact from "lodash/compact";
import map from "lodash/map";
import { loadGoogleFont } from "../../../utils/font";

// Import block components

const { InspectorControls, ColorPalette } = wp.blockEditor;

// Import Inspector components
const {
  Button,
  PanelBody,
  QueryControls,
  RangeControl,
  SelectControl,
  TextControl,
  ToggleControl,
  TabPanel,
  Dashicon,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor() {
    super(...arguments);
    this.onSelectPostType = this.onSelectPostType.bind(this);
    this.onSelectTaxonomyType = this.onSelectTaxonomyType.bind(this);
  }

  onSelectPostType(value) {
    const { setAttributes } = this.props;
    setAttributes({ postType: value });
    setAttributes({ categories: "" });
    setAttributes({ taxonomyType: "" });
  }

  onSelectTaxonomyType(value) {
    const { setAttributes } = this.props;

    setAttributes({ taxonomyType: value });
    setAttributes({ categories: "" });
  }

  render() {
    // Setup the attributes
    const {
      attributes,
      setAttributes,
      categoriesList,
      taxonomyList,
      termsList,
    } = this.props;
    const {
      alignment,
      bgColor,
      gridBorderColor,
      gridBorderRadius,
      gridBorderStyle,
      gridBorderWidth,
      boxShadowColor,
      boxShadowHOffset,
      boxShadowVOffset,
      boxShadowBlur,
      boxShadowSpread,
      boxShadowPosition,
      categoryType,
      columns,
      columnGap,
      columnGapMobile,
      columnGapTablet,
      columnsMobile,
      columnsTablet,
      contentPadding,
      contentPaddingMobile,
      contentPaddingTablet,
      countColor,
      countFontFamily,
      countFontSize,
      countFontSizeMobile,
      countFontSizeTablet,
      countFontWeight,
      countLineHeight,
      countLineHeightMobile,
      countLineHeightTablet,
      layout,
      listBottomMargin,
      listBottomMarginMobile,
      listBottomMarginTablet,
      listTopMargin,
      listTopMarginMobile,
      listTopMarginTablet,
      listFontFamily,
      listFontSize,
      listFontSizeMobile,
      listFontSizeTablet,
      listFontWeight,
      listLineHeight,
      listLineHeightMobile,
      listLineHeightTablet,
      listStyle,
      listStyleColor,
      listStyleColorHover,
      listTextColor,
      listTextColorHover,
      postType,
      rowGap,
      rowGapMobile,
      rowGapTablet,
      separatorColor,
      separatorStyle,
      separatorWidth,
      showEmptyTaxonomy,
      showPostCount,
      taxonomyType,
      titleBottomSpace,
      titleBottomSpaceMobile,
      titleBottomSpaceTablet,
      titleColor,
      titleFontFamily,
      titleFontSize,
      titleFontSizeMobile,
      titleFontSizeTablet,
      titleFontWeight,
      titleLineHeight,
      titleLineHeightMobile,
      titleLineHeightTablet,
      titleTag,
      noTaxDisplaytext,
      taxonomyAvailable,
    } = attributes;

    const taxonomy_list_setting = showEmptyTaxonomy ? taxonomyList : termsList;

    if ("" != taxonomy_list_setting && undefined != taxonomy_list_setting) {
      var taxonomyListOptions = [
        {
          value: "",
          label: __("Select Taxonomy", "responsive-block-editor-addons"),
        },
      ];
      Object.keys(taxonomy_list_setting).map((item, thisIndex) => {
        return taxonomyListOptions.push({
          value: taxonomyList[item]["name"],
          label: taxonomyList[item]["label"],
        });
      });
    }

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

    return (
      <InspectorControls>
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={open}
            >
              <SelectControl
                label={__("Heading Tag", "responsive-block-editor-addons")}
                value={titleTag}
                onChange={(value) => setAttributes({ titleTag: value })}
                options={[
                  {
                    value: "div",
                    label: __("Div", "responsive-block-editor-addons"),
                  },
                  {
                    value: "h1",
                    label: __("H1", "responsive-block-editor-addons"),
                  },
                  {
                    value: "h2",
                    label: __("H2", "responsive-block-editor-addons"),
                  },
                  {
                    value: "h3",
                    label: __("H3", "responsive-block-editor-addons"),
                  },
                  {
                    value: "h4",
                    label: __("H4", "responsive-block-editor-addons"),
                  },
                  {
                    value: "h5",
                    label: __("H5", "responsive-block-editor-addons"),
                  },
                  {
                    value: "h6",
                    label: __("H6", "responsive-block-editor-addons"),
                  },
                ]}
              />
              <SelectControl
                label={__("Layout", "responsive-block-editor-addons")}
                value={layout}
                onChange={(value) => setAttributes({ layout: value })}
                options={[
                  {
                    value: "grid",
                    label: __("Grid", "responsive-block-editor-addons"),
                  },
                  {
                    value: "list",
                    label: __("List", "responsive-block-editor-addons"),
                  },
                ]}
              />
              {"grid" === layout && (
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
                              "Mobile Columns",
                              "responsive-block-editor-addons"
                            )}
                            min={1}
                            max={2}
                            value={columnsMobile}
                            onChange={(value) =>
                              setAttributes({
                                columnsMobile: value,
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
                              "Tablet Columns",
                              "responsive-block-editor-addons"
                            )}
                            min={1}
                            max={3}
                            value={columnsTablet}
                            onChange={(value) =>
                              setAttributes({
                                columnsTablet: value,
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
                              "Desktop Columns",
                              "responsive-block-editor-addons"
                            )}
                            min={1}
                            max={4}
                            value={columns}
                            onChange={(value) =>
                              setAttributes({
                                columns: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    }

                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
              )}
              {"list" == layout && (
                <Fragment>
                  <p className="responsive-setting-label">
                    {__("List Style", "responsive-block-editor-addons")}
                  </p>
                  <Button
                    key={"bullet"}
                    icon="editor-ul"
                    label="Bullet"
                    onClick={() => setAttributes({ listStyle: "disc" })}
                    aria-pressed={"disc" === listStyle}
                    isPrimary={"disc" === listStyle}
                  />
                  <Button
                    key={"numbers"}
                    icon="editor-ol"
                    label="Numbers"
                    onClick={() => setAttributes({ listStyle: "decimal" })}
                    aria-pressed={"decimal" === listStyle}
                    isPrimary={"decimal" === listStyle}
                  />
                  <Button
                    key={"none"}
                    icon="menu"
                    label="None"
                    onClick={() => setAttributes({ listStyle: "none" })}
                    aria-pressed={"none" === listStyle}
                    isPrimary={"none" === listStyle}
                  />
                </Fragment>
              )}
              <br/>
              <br/>
              <SelectControl
                label={__("Post Type", "responsive-block-editor-addons")}
                value={postType}
                onChange={(value) => setAttributes({ postType: value })}
                options={responsive_globals.post_types}
              />
              {"" != taxonomyList && (
                <SelectControl
                  label={__("Taxonomy", "responsive-block-editor-addons")}
                  value={taxonomyType}
                  onChange={(value) => this.onSelectTaxonomyType(value)}
                  options={taxonomyListOptions}
                />
              )}
              <TextControl
                autoComplete="off"
                label={ __( 'Display Message', 'responsive-block-editor-addons' ) }
                value={ noTaxDisplaytext }
                onChange={ ( value ) => setAttributes( { noTaxDisplaytext: value } ) }
                help={ __( "What to display if taxonomy not found.", "responsive-block-editor-addons" ) }
              />
              <ToggleControl
                label={__(
                  "Show Empty Taxonomy",
                  "responsive-block-editor-addons"
                )}
                checked={showEmptyTaxonomy}
                onChange={(value) =>
                  setAttributes({ showEmptyTaxonomy: !showEmptyTaxonomy })
                }
                help={__(
                  "Show Empty Taxonomy ",
                  "responsive-block-editor-addons"
                )}
              />
              <ToggleControl
                label={__("Show Posts Count", "responsive-block-editor-addons")}
                checked={showPostCount}
                onChange={(value) =>
                  setAttributes({ showPostCount: !showPostCount })
                }
                help={__(
                  "Show Count of taxonomy ",
                  "responsive-block-editor-addons"
                )}
              />
              {"grid" == layout && (
                <Fragment>
                  <p className="responsive-setting-label">
                    {__("Alignment", "responsive-block-editor-addons")}
                  </p>
                  <Button
                    key={"left"}
                    icon="editor-alignleft"
                    label="Left"
                    onClick={() => setAttributes({ alignment: "left" })}
                    aria-pressed={"left" === alignment}
                    isPrimary={"left" === alignment}
                  />
                  <Button
                    key={"center"}
                    icon="editor-aligncenter"
                    label="Center"
                    onClick={() => setAttributes({ alignment: "center" })}
                    aria-pressed={"center" === alignment}
                    isPrimary={"center" === alignment}
                  />
                  <Button
                    key={"right"}
                    icon="editor-alignright"
                    label="Right"
                    onClick={() => setAttributes({ alignment: "right" })}
                    aria-pressed={"right" === alignment}
                    isPrimary={"right" === alignment}
                  />
                </Fragment>
              )}
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody
              title={__("Colors", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              {"grid" === layout && (
                <Fragment>
                  <p className="responsive-setting-label">
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
                  />
                  <p className="responsive-setting-label">
                    {__("Count Color", "responsive-block-editor-addons")}
                    <span className="components-base-control__label">
                      <span
                        className="component-color-indicator"
                        style={{ backgroundColor: countColor }}
                      ></span>
                    </span>
                  </p>
                  <ColorPalette
                    value={countColor}
                    onChange={(colorValue) =>
                      setAttributes({ countColor: colorValue })
                    }
                  />
                  <p className="responsive-setting-label">
                    {__("Background Color", "responsive-block-editor-addons")}
                    <span className="components-base-control__label">
                      <span
                        className="component-color-indicator"
                        style={{ backgroundColor: bgColor }}
                      ></span>
                    </span>
                  </p>
                  <ColorPalette
                    value={bgColor}
                    onChange={(colorValue) =>
                      setAttributes({ bgColor: colorValue })
                    }
                  />
                </Fragment>
              )}
              {"list" === layout && (
                <Fragment>
                  <p className="responsive-setting-label">
                    {__("List Text Color", "responsive-block-editor-addons")}
                    <span className="components-base-control__label">
                      <span
                        className="component-color-indicator"
                        style={{ backgroundColor: listTextColor }}
                      ></span>
                    </span>
                  </p>
                  <ColorPalette
                    value={listTextColor}
                    onChange={(colorValue) =>
                      setAttributes({ listTextColor: colorValue })
                    }
                  />
                  <p className="responsive-setting-label">
                    {__("List Style Color", "responsive-block-editor-addons")}
                    <span className="components-base-control__label">
                      <span
                        className="component-color-indicator"
                        style={{ backgroundColor: listStyleColor }}
                      ></span>
                    </span>
                  </p>
                  <ColorPalette
                    value={listStyleColor}
                    onChange={(colorValue) =>
                      setAttributes({ listStyleColor: colorValue })
                    }
                  />
                  <p className="responsive-setting-label">
                    {__("List Text Color Hover", "responsive-block-editor-addons")}
                    <span className="components-base-control__label">
                      <span
                        className="component-color-indicator"
                        style={{ backgroundColor: listTextColorHover }}
                      ></span>
                    </span>
                  </p>
                  <ColorPalette
                    value={listTextColorHover}
                    onChange={(colorValue) =>
                      setAttributes({ listTextColorHover: colorValue })
                    }
                  />
                  <p className="responsive-setting-label">
                    {__("List Style Color Hover", "responsive-block-editor-addons")}
                    <span className="components-base-control__label">
                      <span
                        className="component-color-indicator"
                        style={{ backgroundColor: listStyleColorHover }}
                      ></span>
                    </span>
                  </p>
                  <ColorPalette
                    value={listStyleColorHover}
                    onChange={(colorValue) =>
                      setAttributes({ listStyleColorHover: colorValue })
                    }
                  />
                </Fragment>
              )}
            </PanelBody>
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              {"grid" === layout && (
                <Fragment>
                  <ResponsiveSpacingControl
                    title={"Row Gap"}
                    attrNameTemplate="rowGap%s"
                    values={{
                      desktop: rowGap,
                      tablet: rowGapTablet,
                      mobile: rowGapMobile,
                    }}
                    setAttributes={setAttributes}
                    {...this.props}
                  />
                  <ResponsiveSpacingControl
                    title={"Column Gap"}
                    attrNameTemplate="columnGap%s"
                    values={{
                      desktop: columnGap,
                      tablet: columnGapTablet,
                      mobile: columnGapMobile,
                    }}
                    setAttributes={setAttributes}
                    {...this.props}
                  />
                  <ResponsiveSpacingControl
                    title={"Content Padding"}
                    attrNameTemplate="contentPadding%s"
                    values={{
                      desktop: contentPadding,
                      tablet: contentPaddingTablet,
                      mobile: contentPaddingMobile,
                    }}
                    setAttributes={setAttributes}
                    {...this.props}
                  />
                  {showPostCount && (
                    <Fragment>
                      <ResponsiveSpacingControl
                        title={"Title Bottom Spacing"}
                        attrNameTemplate="titleBottomSpace%s"
                        values={{
                          desktop: titleBottomSpace,
                          tablet: titleBottomSpaceTablet,
                          mobile: titleBottomSpaceMobile,
                        }}
                        setAttributes={setAttributes}
                        {...this.props}
                      />
                    </Fragment>
                  )}
                </Fragment>
              )}
              {"list" === layout && (
                <Fragment>
                  <ResponsiveSpacingControl
                    title={"Top Margin"}
                    attrNameTemplate="listTopMargin%s"
                    values={{
                      desktop: listTopMargin,
                      tablet: listTopMarginTablet,
                      mobile: listTopMarginMobile,
                    }}
                    setAttributes={setAttributes}
                    {...this.props}
                  />
                  <ResponsiveSpacingControl
                    title={"Bottom Margin"}
                    attrNameTemplate="listBottomMargin%s"
                    values={{
                      desktop: listBottomMargin,
                      tablet: listBottomMarginTablet,
                      mobile: listBottomMarginMobile,
                    }}
                    setAttributes={setAttributes}
                    {...this.props}
                  />
                </Fragment>
              )}
            </PanelBody>
            <PanelBody
              title={__("Typography", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              {"grid" === layout && (
                <Fragment>
                  <TypographyHelperControl
                    title={__(
                      "Title Typography",
                      "responsive-block-editor-addons"
                    )}
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
                  {showPostCount && (
                    <TypographyHelperControl
                      title={__(
                        "Count Typography",
                        "responsive-block-editor-addons"
                      )}
                      attrNameTemplate="count%s"
                      values={{
                        family: countFontFamily,
                        size: countFontSize,
                        sizeMobile: countFontSizeMobile,
                        sizeTablet: countFontSizeTablet,
                        weight: countFontWeight,
                        height: countLineHeight,
                      }}
                      showLetterSpacing={false}
                      showTextTransform={false}
                      setAttributes={setAttributes}
                      {...this.props}
                    />
                  )}
                </Fragment>
              )}
              {"list" === layout && (
                <TypographyHelperControl
                  title={__(
                    "List Typography",
                    "responsive-block-editor-addons"
                  )}
                  attrNameTemplate="list%s"
                  values={{
                    family: listFontFamily,
                    size: listFontSize,
                    sizeMobile: listFontSizeMobile,
                    sizeTablet: listFontSizeTablet,
                    weight: listFontWeight,
                    height: listLineHeight,
                  }}
                  showLetterSpacing={false}
                  showTextTransform={false}
                  setAttributes={setAttributes}
                  {...this.props}
                />
              )}
            </PanelBody>
            <PanelBody
              title={__("Border", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              {"grid" === layout && (
                <Fragment>
                  <BoxShadowControl
                    setAttributes={setAttributes}
                    label={__("Box Shadow", "responsive-block-editor-addons")}
                    boxShadowColor={{
                      value: boxShadowColor,
                      label: __("Color", "responsive-block-editor-addons"),
                    }}
                    boxShadowHOffset={{
                      value: boxShadowHOffset,
                      label: __("Horizontal", "responsive-block-editor-addons"),
                    }}
                    boxShadowVOffset={{
                      value: boxShadowVOffset,
                      label: __("Vertical", "responsive-block-editor-addons"),
                    }}
                    boxShadowBlur={{ value: boxShadowBlur, label: __("Blur", "responsive-block-editor-addons") }}
                    boxShadowSpread={{
                      value: boxShadowSpread,
                      label: __("Spread", "responsive-block-editor-addons"),
                    }}
                    boxShadowPosition={{
                      value: boxShadowPosition,
                      label: __("Position", "responsive-block-editor-addons"),
                    }}
                  />
                  <BlockBorderHelperControl
                    attrNameTemplate="grid%s"
                    values={{
                      radius: gridBorderRadius,
                      style: gridBorderStyle,
                      width: gridBorderWidth,
                      color: gridBorderColor,
                    }}
                    setAttributes={setAttributes}
                    {...this.props}
                  />
                </Fragment>
              )}
              {"list" === layout && (
                <Fragment>
                  <SelectControl
                    label={__(
                      "Separator Style",
                      "resposive-block-editor-addons"
                    )}
                    value={separatorStyle}
                    onChange={(value) =>
                      setAttributes({ separatorStyle: value })
                    }
                    options={[
                      {
                        value: "none",
                        label: __("None", "resposive-block-editor-addons"),
                      },
                      {
                        value: "solid",
                        label: __("Solid", "resposive-block-editor-addons"),
                      },
                      {
                        value: "dotted",
                        label: __("Dotted", "resposive-block-editor-addons"),
                      },
                      {
                        value: "dashed",
                        label: __("Dashed", "resposive-block-editor-addons"),
                      },
                      {
                        value: "double",
                        label: __("Double", "resposive-block-editor-addons"),
                      },
                      {
                        value: "groove",
                        label: __("Groove", "resposive-block-editor-addons"),
                      },
                      {
                        value: "inset",
                        label: __("Inset", "resposive-block-editor-addons"),
                      },
                      {
                        value: "outset",
                        label: __("Outset", "resposive-block-editor-addons"),
                      },
                      {
                        value: "ridge",
                        label: __("Ridge", "resposive-block-editor-addons"),
                      },
                    ]}
                  />
                  {"none" !== separatorStyle && (
                    <Fragment>
                      <RangeControl
                        label={__(
                          "Separator Thickness",
                          "responsive-block-editor-addons"
                        )}
                        value={separatorWidth}
                        onChange={(value) =>
                          setAttributes({ separatorWidth: value })
                        }
                        min={0}
                        max={10}
                        allowReset
                      />
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
          </InspectorTab>
          <InspectorTab key={"advance"}></InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
