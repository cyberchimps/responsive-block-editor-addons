import fontOptions from "../../../utils/googlefonts";
import BoxShadowControl from "../../../utils/components/box-shadow";
import BoxShadowControlHelper from "../../../utils/components/box-shadow-helper";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import TypographyHelperControl from "../../../settings-components/TypographySettings";

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
const { BlockAlignmentToolbar, BlockVerticalAlignmentToolbar, InspectorControls, ColorPalette, AlignmentToolbar } = wp.blockEditor;


// Import Inspector components
const {
  PanelBody,
  QueryControls,
  RangeControl,
  SelectControl,
  ToggleControl,
  TabPanel,
  Dashicon,
} = wp.components;

const { addQueryArgs } = wp.url;

const { apiFetch } = wp;

const MAX_POSTS_COLUMNS = 6;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor() {
    super(...arguments);
    this.state = { categoriesList: [] };
    this.onSelectTaxonomyType = this.onSelectTaxonomyType.bind(this);
  }
  onSelectTaxonomyType(value) {
    const { setAttributes } = this.props;
    setAttributes({ taxonomyType: value });
    setAttributes({ categories: "" });
  }

  componentDidMount() {
    this.stillMounted = true;
    this.fetchRequest = apiFetch({
      path: addQueryArgs("/wp/v2/categories", { per_page: -1 }),
    })
      .then((categoriesList) => {
        if (this.stillMounted) {
          this.setState({ categoriesList });
        }
      })
      .catch(() => {
        if (this.stillMounted) {
          this.setState({ categoriesList: [] });
        }
      });
  }

  componentWillUnmount() {
    this.stillMounted = false;
  }

  /* Get the available image sizes */
  imageSizeSelect() {
    const getSettings = wp.data.select("core/editor").getEditorSettings();

    return compact(
      map(getSettings.imageSizes, ({ name, slug }) => {
        return {
          value: slug,
          label: name,
        };
      })
    );
  }

  render() {
    // Setup the attributes
    const {
      attributes,
      setAttributes,
      latestPosts,
      taxonomyList,
      queryControls,
    } = this.props;

    const {
      order,
      orderBy,
      hideWidget,
      hideWidgetTablet,
      hideWidgetMobile,
      z_index, z_indexMobile, z_indexTablet, } = attributes;

    const { categoriesList } = this.state;

    // Section title tags
    const sectionTitleTags = [
      { value: "h1", label: __("H1", "responsive-block-editor-addons") },
      { value: "h2", label: __("H2", "responsive-block-editor-addons") },
      { value: "h3", label: __("H3", "responsive-block-editor-addons") },
      { value: "h4", label: __("H4", "responsive-block-editor-addons") },
      { value: "h5", label: __("H5", "responsive-block-editor-addons") },
      { value: "h6", label: __("H6", "responsive-block-editor-addons") },
      { value: "div", label: __("div", "responsive-block-editor-addons") },
      { value: "span", label: __("span", "responsive-block-editor-addons") },
      { value: "p", label: __("p", "responsive-block-editor-addons") },

    ];

    // Check for posts
    const hasPosts = Array.isArray(latestPosts) && latestPosts.length;

    // Add instruction text to the select
    const abImageSizeSelect = {
      value: "selectimage",
      label: __("Select image size", "responsive-block-editor-addons"),
    };

    // Get the image size options
    const imageSizeOptions = this.imageSizeSelect();

    imageSizeOptions.unshift(abImageSizeSelect);

    const imageSizeValue = () => {
      for (let i = 0; i < imageSizeOptions.length; i++) {
        if (imageSizeOptions[i].value === attributes.imageSize) {
          return attributes.imageSize;
        }
      }
      return "full";
    };

    let taxonomyListOptions = [];

    let categoryListOptions = [{ value: "", label: __("All", "responsive-block-editor-addons") }];

    if ("" != taxonomyList) {
      Object.keys(taxonomyList).map((item, thisIndex) => {
        return taxonomyListOptions.push({
          value: taxonomyList[item]["name"],
          label: taxonomyList[item]["label"],
        });
      });
    }

    if ("" != categoriesList) {
      Object.keys(categoriesList).map((item, thisIndex) => {
        return categoryListOptions.push({
          value: categoriesList[item]["id"],
          label: categoriesList[item]["name"],
        });
      });
    }

    return (
      <InspectorControls>
        <InspectorTabs>
          <InspectorTab key={"content"}>
            {queryControls}
      
            <PanelBody
              title={__("Layout", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RangeControl
                  label={__("Columns", "responsive-block-editor-addons")}
                  value={attributes.columns}
                  onChange={(value) => setAttributes({ columns: value })}
                  min={1}
                  max={
                    !hasPosts
                      ? MAX_POSTS_COLUMNS
                      : Math.min(MAX_POSTS_COLUMNS, latestPosts.length)
                  }
                />
                <QueryControls
                {...{ order, orderBy }}
                numberOfItems={attributes.postsToShow}
                onNumberOfItemsChange={(value) =>
                  setAttributes({ postsToShow: value })
                }
              />
              <SelectControl
                  label={__("Image Size", "responsive-block-editor-addons")}
                  value={imageSizeValue()}
                  options={imageSizeOptions}
                  onChange={(value) =>
                    this.props.setAttributes({
                      imageSize: value,
                    })
                  }
                />
                <RangeControl
                  label={__("Item Ratio", "responsive-block-editor-addons")}
                  value={attributes.itemRatio}
                  onChange={(value) => setAttributes({ itemRatio: value })}
                  min={0.1}
                  max={2}
                  step={0.01}
                />
                <ToggleControl
                label={__("Show Title", "responsive-block-editor-addons")}
                checked={attributes.displayPostTitle}
                onChange={() =>
                  this.props.setAttributes({
                    displayPostTitle: !attributes.displayPostTitle,
                  })
                }
              />
              {attributes.displayPostTitle && (
                <SelectControl
                  label={__(
                    "Title HTML Tag",
                    "responsive-block-editor-addons"
                  )}
                  options={sectionTitleTags}
                  value={attributes.postTitleTag}
                  onChange={(value) =>
                    this.props.setAttributes({
                      postTitleTag: value,
                    })
                  }
                />
              )}
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
		  	
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RangeControl
                  label={__("Row Gap", "responsive-block-editor-addons")}
                  value={attributes.rowGap}
                  onChange={(value) => setAttributes({ rowGap: value })}
                  min={0}
                  max={100}
                />
                <RangeControl
                  label={__("Column Gap", "responsive-block-editor-addons")}
                  value={attributes.columnGap}
                  onChange={(value) => setAttributes({ columnGap: value })}
                  min={0}
                  max={100}
                />
      
            </PanelBody>
            <PanelBody
              title={__("Border", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <BlockBorderHelperControl
                attrNameTemplate="block%s"
                values={{
                  radius: attributes.blockBorderRadius,
                  style: attributes.blockBorderStyle,
                  width: attributes.blockBorderWidth,
                  color: attributes.blockBorderColor,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              </PanelBody>
              <PanelBody
              title={__("Item Overlay", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <h2>{__("Alignment", "responsive-block-editor-addons")}</h2>
    <BlockAlignmentToolbar
            label={__("Block Alignment", "responsive-block-editor-addons")}
            value={attributes.overlayTextAlign}
            onChange={(value) => {
              setAttributes({ overlayTextAlign: value });
            }}
            controls={["left", "center", "right"]}
          />
          <span className={"responsive-block-editor-addons-portfolio-alignment"}></span>

          <BlockVerticalAlignmentToolbar
					value={ attributes.overlayTextVerticalAlign }
					onChange={ ( nextAlign ) => {
            if ( 'top' === nextAlign){
						  setAttributes( { overlayTextVerticalAlign: 'flex-start' } );
            }
            if ( 'center' === nextAlign){
						  setAttributes( { overlayTextVerticalAlign: 'center' } );
            } 
            if ( 'bottom' === nextAlign){
						  setAttributes( { overlayTextVerticalAlign: 'flex-end' } );
            }
					} }
				/>
              <p className="responsive-setting-label">
                {__("Background Color")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{ backgroundColor: attributes.overlayBackgroundColor }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={attributes.overlayBackgroundColor}
                onChange={(value) =>
                  this.props.setAttributes({
                    overlayBackgroundColor: value,
                  })
                }
                allowReset
              />
              <p className="responsive-setting-label">
                {__("Color")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{
                      backgroundColor: attributes.overlayTextColor,
                    }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={attributes.overlayTextColor}
                onChange={(value) =>
                  this.props.setAttributes({
                    overlayTextColor: value,
                  })
                }
                allowReset
              />
              <RangeControl
                label={__("Opacity", "responsive-block-editor-addons")}
                value={attributes.overlayOpacity}
                onChange={(value) =>
                  this.props.setAttributes({ overlayOpacity: value !== undefined ? value : 100 })
                }
                min={0}
                max={100}
                allowReset
              />
              <TypographyHelperControl
                title={__("Overlay Text Typography", "responsive-block-editor-addons")}
                attrNameTemplate="overlayText%s"
                values = {{
                family: attributes.overlayTextFontFamily,
                size: attributes.overlayTextFontSize,
                sizeMobile: attributes.overlayTextFontSizeMobile,
                sizeTablet: attributes.overlayTextFontSizeTablet,
                weight: attributes.overlayTextFontWeight,
                height: attributes.overlayTextLineHeight,
                transform: attributes.overlayTextTextTransform
                }}
                showLetterSpacing = { false }
                showTextTransform = { true }
                setAttributes={ setAttributes }
                {...this.props}
              />  
              
              <PanelBody
                title={__("Overlay Text Spacing", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <RangeControl
                  label={__("Horizontal", "responsive-block-editor-addons")}
                  value={attributes.horizontalSpacing}
                  onChange={(value) => setAttributes({ horizontalSpacing: value })}
                  min={0}
                  max={100}
                />
                <RangeControl
                  label={__("Vertical", "responsive-block-editor-addons")}
                  value={attributes.verticalSpacing}
                  onChange={(value) => setAttributes({ verticalSpacing: value })}
                  min={0}
                  max={100}
                />
              </PanelBody>
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
