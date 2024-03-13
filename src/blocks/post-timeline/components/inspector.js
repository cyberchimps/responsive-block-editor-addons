import fontOptions from "../../../utils/googlefonts";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";

/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

import compact from "lodash/compact";
import map from "lodash/map";
import BoxShadowControl from "../../../utils/components/box-shadow";
import { loadGoogleFont } from "../../../utils/font";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import renderSVG from "../../../renderIcon";

// Import block components
const { InspectorControls, ColorPalette, PanelColorSettings } = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  QueryControls,
  RangeControl,
  SelectControl,
  TextControl,
  ToggleControl,
  TabPanel,
  Icon,
  Dashicon,
} = wp.components;
let svg_icons = Object.keys(ResponsiveBlocksIcon);

const { addQueryArgs } = wp.url;

const { apiFetch } = wp;

const MAX_POSTS_COLUMNS = 4;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor() {
    super(...arguments);
    this.state = { categoriesList: [] };
    this.getIfbIcon = this.getIfbIcon.bind(this);
  }
  getIfbIcon(value) {
    this.props.setAttributes({ icon: value });
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
    const { attributes, setAttributes, latestPosts, queryControls } = this.props;

    const { 
      order,
      orderBy,
      hideWidget,
      hideWidgetTablet,
      hideWidgetMobile,
      z_index, z_indexMobile, z_indexTablet, } = attributes;

    const { categoriesList } = this.state;

    // Post type options
    const postTypeOptions = [
      { value: "post", label: __("Post", "responsive-block-editor-addons") },
      { value: "page", label: __("Page", "responsive-block-editor-addons") },
    ];

    // Section title tags
    const sectionTags = [
      { value: "div", label: __("div", "responsive-block-editor-addons") },
      {
        value: "header",
        label: __("header", "responsive-block-editor-addons"),
      },
      {
        value: "section",
        label: __("section", "responsive-block-editor-addons"),
      },
      {
        value: "article",
        label: __("article", "responsive-block-editor-addons"),
      },
      { value: "main", label: __("main", "responsive-block-editor-addons") },
      { value: "aside", label: __("aside", "responsive-block-editor-addons") },
      {
        value: "footer",
        label: __("footer", "responsive-block-editor-addons"),
      },
    ];

    // Section title tags
    const sectionTitleTags = [
      { value: "h2", label: __("H2", "responsive-block-editor-addons") },
      { value: "h3", label: __("H3", "responsive-block-editor-addons") },
      { value: "h4", label: __("H4", "responsive-block-editor-addons") },
      { value: "h5", label: __("H5", "responsive-block-editor-addons") },
      { value: "h6", label: __("H6", "responsive-block-editor-addons") },
    ];

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

    // Check for posts
    const hasPosts = Array.isArray(latestPosts) && latestPosts.length;

    // Check the post type
    const isPost = "post" === attributes.postType;

    // Add instruction text to the select
    const abImageSizeSelect = {
      value: "selectimage",
      label: __("Select image size", "responsive-block-editor-addons"),
    };

    // Get the image size options
    const imageSizeOptions = this.imageSizeSelect();

    const imageSizeValue = () => {
      for (let i = 0; i < imageSizeOptions.length; i++) {
        if (imageSizeOptions[i].value === attributes.imageSize) {
          return attributes.imageSize;
        }
      }
      return "full";
    };

    // Icon properties.
    const icon_props = {
      icons: svg_icons,
      value: attributes.icon,
      onChange: this.getIfbIcon,
      isMulti: false,
      renderFunc: renderSVG,
      noSelectedPlaceholder: __(
        "Select Icon",
        "responsive-block-editor-addons"
      ),
    };

    let setPostTimelineContentType = (value) => {
      if (value !== "post") {
        this.props.setAttributes((attributes.categories = ""));
      }
      this.props.setAttributes({ postType: value });
    };

    return (
      <InspectorControls>
        <InspectorTabs>
          <InspectorTab key={"content"}>
            {queryControls}
            <PanelBody
              title={__(
                "Post Timeline Settings",
                "responsive-block-editor-addons"
              )}
              className={
                isPost ? null : "responsive-block-editor-addons-hide-query"
              }
            >
              <SelectControl
                label={__("Content Type", "responsive-block-editor-addons")}
                options={postTypeOptions}
                value={attributes.postType}
                onChange={(value) => setPostTimelineContentType(value)}
              />

              <QueryControls
                {...{ order, orderBy }}
                numberOfItems={attributes.postsToShow}
                onNumberOfItemsChange={(value) =>
                  setAttributes({ postsToShow: value })
                }
              />
              <SelectControl
                label={__("Order By", "responsive-block-editor-addons")}
                value={attributes.orderBy}
                onChange={(value) => setAttributes({ orderBy: value })}
                options={[
                  { value: "date", label: __("Date", "responsive-block-editor-addons") },
                  { value: "title", label: __("Title", "responsive-block-editor-addons") },
                  { value: "rand", label: __("Random", "responsive-block-editor-addons") },
                  { value: "menu_order", label: __("Menu Order", "responsive-block-editor-addons") },
                ]}
              />
              <SelectControl
                label={__("Order", "responsive-block-editor-addons")}
                value={attributes.order}
                onChange={(value) => setAttributes({ order: value })}
                options={[
                  { value: "desc", label: __("Descending", "responsive-block-editor-addons") },
                  { value: "asc", label: __("Ascending", "responsive-block-editor-addons") },
                ]}
              />

              <RangeControl
                label={__(
                  "Number of items to offset",
                  "responsive-block-editor-addons"
                )}
                value={attributes.offset}
                onChange={(value) => setAttributes({ offset: value })}
                min={0}
                max={20}
              />
              <RangeControl
                label={__("Border Radius", "responsive-block-editor-addons")}
                value={attributes.borderRadius}
                onChange={(value) =>
                  setAttributes({
                    borderRadius: value !== undefined ? value : 0,
                  })
                }
                min={0}
                max={100}
                allowReset
              />
              <SelectControl
                label={__("Orientation", "responsive-block-editor-addons")}
                value={attributes.timelinAlignment}
                onChange={(value) => setAttributes({ timelinAlignment: value })}
                options={[
                  {
                    value: "left",
                    label: __("Left", "responsive-block-editor-addons"),
                  },
                  {
                    value: "right",
                    label: __("Right", "responsive-block-editor-addons"),
                  },
                  {
                    value: "center",
                    label: __("Center", "responsive-block-editor-addons"),
                  },
                ]}
              />
              <SelectControl
                label={__("Arrow Alignment", "responsive-block-editor-addons")}
                value={attributes.arrowlinAlignment}
                onChange={(value) =>
                  setAttributes({ arrowlinAlignment: value })
                }
                options={[
                  {
                    value: "top",
                    label: __("Top", "responsive-block-editor-addons"),
                  },
                  {
                    value: "bottom",
                    label: __("Bottom", "responsive-block-editor-addons"),
                  },
                  {
                    value: "center",
                    label: __("Center", "responsive-block-editor-addons"),
                  },
                ]}
              />
              <SelectControl
                label={__("Stack on", "responsive-block-editor-addons")}
                value={attributes.stack}
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
            </PanelBody>
            <PanelBody
              title={__(
                "Post Timeline Content",
                "responsive-block-editor-addons"
              )}
              initialOpen={false}
            >
              <ToggleControl
                label={__(
                  "Display Section Title",
                  "responsive-block-editor-addons"
                )}
                checked={attributes.displaySectionTitle}
                onChange={() =>
                  this.props.setAttributes({
                    displaySectionTitle: !attributes.displaySectionTitle,
                  })
                }
              />
              {attributes.displaySectionTitle && (
                <TextControl
                  label={__("Section Title", "responsive-block-editor-addons")}
                  type="text"
                  value={attributes.sectionTitle}
                  onChange={(value) =>
                    this.props.setAttributes({
                      sectionTitle: value,
                    })
                  }
                />
              )}
              <ToggleControl
                label={__(
                  "Display Featured Image",
                  "responsive-block-editor-addons"
                )}
                checked={attributes.displayPostImage}
                onChange={() =>
                  this.props.setAttributes({
                    displayPostImage: !attributes.displayPostImage,
                  })
                }
              />
              {attributes.displayPostImage && (
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
              )}
              <ToggleControl
                label={__("Display Title", "responsive-block-editor-addons")}
                checked={attributes.displayPostTitle}
                onChange={() =>
                  this.props.setAttributes({
                    displayPostTitle: !attributes.displayPostTitle,
                  })
                }
              />
              {isPost && (
                <ToggleControl
                  label={__("Display Author", "responsive-block-editor-addons")}
                  checked={attributes.displayPostAuthor}
                  onChange={() =>
                    this.props.setAttributes({
                      displayPostAuthor: !attributes.displayPostAuthor,
                    })
                  }
                />
              )}
              {isPost && (
                <ToggleControl
                  label={__("Display Date", "responsive-block-editor-addons")}
                  checked={attributes.displayPostDate}
                  onChange={() =>
                    this.props.setAttributes({
                      displayPostDate: !attributes.displayPostDate,
                    })
                  }
                />
              )}
              <ToggleControl
                label={__("Display Excerpt", "responsive-block-editor-addons")}
                checked={attributes.displayPostExcerpt}
                onChange={() =>
                  this.props.setAttributes({
                    displayPostExcerpt: !attributes.displayPostExcerpt,
                  })
                }
              />
              {attributes.displayPostExcerpt && (
                <RangeControl
                  label={__("Excerpt Length", "responsive-block-editor-addons")}
                  value={attributes.excerptLength}
                  onChange={(value) => setAttributes({ excerptLength: value })}
                  min={0}
                  max={150}
                />
              )}
              <ToggleControl
                label={__(
                  "Display CTA Link",
                  "responsive-block-editor-addons"
                )}
                checked={attributes.displayPostLink}
                onChange={() =>
                  this.props.setAttributes({
                    displayPostLink: !attributes.displayPostLink,
                  })
                }
              />
              {attributes.displayPostLink && (
                <Fragment>
                  <TextControl
                    label={__(
                      "Customize CTA Text",
                      "responsive-block-editor-addons"
                    )}
                    type="text"
                    value={attributes.readMoreText}
                    onChange={(value) =>
                      this.props.setAttributes({
                        readMoreText: value,
                      })
                    }
                  />
                  <ToggleControl
                    label={__(
                      "Open link in new tab",
                      "responsive-block-editor-addons"
                    )}
                    checked={attributes.target}
                    onChange={() => {
                      this.props.setAttributes({ target: !attributes.target });
                    }}
                  />
                </Fragment>
              )}
            </PanelBody>
            <PanelBody
              title={__(
                "Post Timeline Markup",
                "responsive-block-editor-addons"
              )}
              initialOpen={false}
              className="responsive-block-editor-addons-block-post-timeline-markup-settings"
            >
              <SelectControl
                label={__(
                  "Post Timeline Section Tag",
                  "responsive-block-editor-addons"
                )}
                options={sectionTags}
                value={attributes.sectionTag}
                onChange={(value) =>
                  this.props.setAttributes({ sectionTag: value })
                }
                help={__(
                  "Change the post grid section tag to match your content hierarchy.",
                  "responsive-block-editor-addons"
                )}
              />
              {attributes.sectionTitle && (
                <SelectControl
                  label={__(
                    "Section Title Heading Tag",
                    "responsive-block-editor-addons"
                  )}
                  options={sectionTitleTags}
                  value={attributes.sectionTitleTag}
                  onChange={(value) =>
                    this.props.setAttributes({
                      sectionTitleTag: value,
                    })
                  }
                  help={__(
                    "Change the post/page section title tag to match your content hierarchy.",
                    "responsive-block-editor-addons"
                  )}
                />
              )}
              {attributes.displayPostTitle && (
                <SelectControl
                  label={__(
                    "Post Title Heading Tag",
                    "responsive-block-editor-addons"
                  )}
                  options={sectionTitleTags}
                  value={attributes.postTitleTag}
                  onChange={(value) =>
                    this.props.setAttributes({
                      postTitleTag: value,
                    })
                  }
                  help={__(
                    "Change the post/page title tag to match your content hierarchy.",
                    "responsive-block-editor-addons"
                  )}
                />
              )}
            </PanelBody>
            <PanelBody
              title={__("Connector Settings", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <hr className="responsive-block-editor-addons-editor__separator" />
              <FontIconPicker {...icon_props} />
              <RangeControl
                label={__("Icon Size", "responsive-block-editor-addons")}
                value={attributes.iconSize}
                onChange={(value) =>
                  this.props.setAttributes({ iconSize: value })
                }
                min={0}
                max={500}
              />
              <hr className="responsive-block-editor-addons-editor__separator" />
              <RangeControl
                label={__("Background Size", "responsive-block-editor-addons")}
                value={attributes.bgSize}
                onChange={(value) =>
                  this.props.setAttributes({
                    bgSize: value !== undefined ? value : 35,
                  })
                }
                min={25}
                max={90}
                allowReset
              />
              <RangeControl
                label={__("Border Width", "responsive-block-editor-addons")}
                value={attributes.borderWidth}
                onChange={(value) =>
                  this.props.setAttributes({ borderWidth: value })
                }
                min={0}
                max={10}
              />
              <RangeControl
                label={__("Connector Width", "responsive-block-editor-addons")}
                value={attributes.connectorWidth}
                onChange={(value) =>
                  this.props.setAttributes({ connectorWidth: value })
                }
                min={0}
                max={500}
              />
              <PanelBody
                title={__("Connector Color Settings", "responsive-block-editor-addons")}
                initialOpen={true}
              >
                <TabPanel
                  className="rbea-inspect-tabs rbea-inspect-tabs-col-2"
                  activeClass="active-tab"
                  tabs={[
                    {
                      name: "normal",
                      title: __("Normal", "responsive-block-editor-addons"),
                      className: "rbea-normal-tab",
                    },
                    {
                      name: "focus",
                      title: __("Focus", "responsive-block-editor-addons"),
                      className: "rbea-focus-tab",
                    },
                  ]}
                >
                  {(tabName) => {
                    let tabout;
                    if ("focus" === tabName.name) {
                      tabout = (
                        <PanelColorSettings
                          title={__("Focus Color Settings", "responsive-block-editor-addons")}
                          initialOpen={true}
                          colorSettings={[
                            {
                              value: attributes.separatorFillColor,
                              onChange: (colorValue) =>
                                this.props.setAttributes({
                                  separatorFillColor: colorValue,
                                }),
                              label: __("Line Focus Color", "responsive-block-editor-addons"),
                            },
                            {
                              value: attributes.iconFocus,
                              onChange: (colorValue) =>
                                this.props.setAttributes({
                                  iconFocus: colorValue,
                                }),
                              label: __("Icon Focus Color", "responsive-block-editor-addons"),
                            },
                            {
                              value: attributes.iconBgFocus,
                              onChange: (colorValue) =>
                                this.props.setAttributes({
                                  iconBgFocus: colorValue,
                                }),
                              label: __("Background Focus Color", "responsive-block-editor-addons"),
                            },
                            {
                              value: attributes.borderFocus,
                              onChange: (colorValue) =>
                                this.props.setAttributes({
                                  borderFocus: colorValue,
                                }),
                              label: __("Border Focus Color", "responsive-block-editor-addons"),
                            },
                          ]}
                        ></PanelColorSettings>
                      );
                    } else {
                      tabout = (
                        <PanelColorSettings
                          title={__("Color Settings", "responsive-block-editor-addons")}
                          initialOpen={true}
                          colorSettings={[
                            {
                              value: attributes.connectorColor,
                              onChange: (colorValue) =>
                                this.props.setAttributes({
                                  connectorColor: colorValue,
                                }),
                              label: __("Line Color", "responsive-block-editor-addons"),
                            },
                            {
                              value: attributes.iconColor,
                              onChange: (colorValue) =>
                                this.props.setAttributes({
                                  iconColor: colorValue,
                                }),
                              label: __("Icon Color", "responsive-block-editor-addons"),
                            },
                            {
                              value: attributes.separatorBg,
                              onChange: (colorValue) =>
                                this.props.setAttributes({
                                  separatorBg: colorValue,
                                }),
                              label: __("Background Color", "responsive-block-editor-addons"),
                            },
                            {
                              value: attributes.separatorBorder,
                              onChange: (colorValue) =>
                                this.props.setAttributes({
                                  separatorBorder: colorValue,
                                }),
                              label: __("Border Color", "responsive-block-editor-addons"),
                            },
                          ]}
                        ></PanelColorSettings>
                      );
                    }
                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
              </PanelBody>
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody
              title={__("Colors", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <p className="responsive-setting-label">
                {__("Blog Post Background Color")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{ backgroundColor: attributes.bgColor }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={attributes.bgColor}
                onChange={(value) =>
                  this.props.setAttributes({
                    bgColor: value,
                  })
                }
                allowReset
              />
              <p className="responsive-setting-label">
                {__("Heading Color")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{
                      backgroundColor: attributes.headingColor,
                    }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={attributes.headingColor}
                onChange={(value) =>
                  this.props.setAttributes({
                    headingColor: value,
                  })
                }
                allowReset
              />
              <p className="responsive-setting-label">
                {__("Author Color")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{
                      backgroundColor: attributes.authorColor,
                    }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={attributes.authorColor}
                onChange={(value) =>
                  this.props.setAttributes({
                    authorColor: value,
                  })
                }
                allowReset
              />
              <p className="responsive-setting-label">
                {__("Content Color")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{
                      backgroundColor: attributes.textColor,
                    }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={attributes.textColor}
                onChange={(value) =>
                  this.props.setAttributes({
                    textColor: value,
                  })
                }
                allowReset
              />
              <Fragment>
                <PanelBody
                  title={__(
                    "CTA Color Settings",
                    "responsive-block-editor-addons"
                  )}
                  initialOpen={false}
                >
                  <TabPanel
                    className="responsive-block-editor-addons-inspect-tabs responsive-block-editor-addons-inspect-tabs-col-2"
                    activeClass="active-tab"
                    tabs={[
                      {
                        name: "normal",
                        title: __("Normal"),
                        className: "responsive-block-editor-addons-normal-tab",
                      },
                      {
                        name: "hover",
                        title: __("Hover"),
                        className: "responsive-block-editor-addons-hover-tab",
                      },
                    ]}
                  >
                    {(tabName) => {
                      let btn_color_tab;
                      if ("normal" === tabName.name) {
                        btn_color_tab = (
                          <Fragment>
                            <p className="responsive-block-editor-addons-setting-label">
                              {__(
                                "CTA Text Color",
                                "responsive-block-editor-addons"
                              )}
                              <span className="components-base-control__label">
                                <span
                                  className="component-color-indicator"
                                  style={{ color: attributes.continueColor }}
                                ></span>
                              </span>
                            </p>
                            <ColorPalette
                              value={attributes.continueColor}
                              onChange={(value) =>
                                this.props.setAttributes({
                                  continueColor: value,
                                })
                              }
                              allowReset
                            />
                            <p className="responsive-block-editor-addons-setting-label">
                              {__(
                                "CTA Background Color",
                                "responsive-block-editor-addons"
                              )}
                              <span className="components-base-control__label">
                                <span
                                  className="component-color-indicator"
                                  style={{ color: attributes.continuebgColor }}
                                ></span>
                              </span>
                            </p>
                            <ColorPalette
                              value={attributes.continuebgColor}
                              onChange={(value) =>
                                this.props.setAttributes({
                                  continuebgColor: value,
                                })
                              }
                              allowReset
                            />
                            <p className="responsive-block-editor-addons-setting-label">
                              {__(
                                "CTA Border Color",
                                "responsive-block-editor-addons"
                              )}
                              <span className="components-base-control__label">
                                <span
                                  className="component-color-indicator"
                                  style={{
                                    borderColor: attributes.borderColor,
                                  }}
                                ></span>
                              </span>
                            </p>
                            <ColorPalette
                              value={attributes.borderColor}
                              onChange={(value) =>
                                this.props.setAttributes({ borderColor: value })
                              }
                              allowReset
                            />
                          </Fragment>
                        );
                      } else {
                        btn_color_tab = (
                          <Fragment>
                            <p className="responsive-block-editor-addons-setting-label">
                              {__(
                                "CTA Text Hover Color",
                                "responsive-block-editor-addons"
                              )}
                              <span className="components-base-control__label">
                                <span
                                  className="component-color-indicator"
                                  style={{ color: attributes.hColor }}
                                ></span>
                              </span>
                            </p>
                            <ColorPalette
                              value={attributes.hColor}
                              onChange={(value) =>
                                this.props.setAttributes({ hColor: value })
                              }
                              allowReset
                            />
                            <p className="responsive-block-editor-addons-setting-label">
                              {__(
                                "CTA Background Hover Color",
                                "responsive-block-editor-addons"
                              )}
                              <span className="components-base-control__label">
                                <span
                                  className="component-color-indicator"
                                  style={{ color: attributes.continuebghColor }}
                                ></span>
                              </span>
                            </p>
                            <ColorPalette
                              value={attributes.continuebghColor}
                              onChange={(value) =>
                                this.props.setAttributes({
                                  continuebghColor: value,
                                })
                              }
                              allowReset
                            />
                            <p className="responsive-block-editor-addons-setting-label">
                              {__(
                                "CTA Border Hover Color",
                                "responsive-block-editor-addons"
                              )}
                              <span className="components-base-control__label">
                                <span
                                  className="component-color-indicator"
                                  style={{
                                    borderColor: attributes.borderHColor,
                                  }}
                                ></span>
                              </span>
                            </p>
                            <ColorPalette
                              value={attributes.borderHColor}
                              onChange={(value) =>
                                this.props.setAttributes({
                                  borderHColor: value,
                                })
                              }
                              allowReset
                            />
                          </Fragment>
                        );
                      }
                      return <div>{btn_color_tab}</div>;
                    }}
                  </TabPanel>
                </PanelBody>
              </Fragment>
            </PanelBody>
            <PanelBody
              title={__("Typography", "responsive-block-editor-addons")}
              initialOpen={false}
            >
				<TypographyHelperControl
					title={__("Date Typography", "responsive-block-editor-addons")}
					attrNameTemplate="date%s"
					values = {{
					family: attributes.dateFontFamily,
					size: attributes.dateFontSize,
					sizeMobile: attributes.dateFontSizeMobile,
					sizeTablet: attributes.dateFontSizeTablet,
					weight: attributes.dateFontWeight,
					height: attributes.dateLineHeight,
					}}
					showLetterSpacing = { false }
					showTextTransform = { false }
					setAttributes={ setAttributes }
					{...this.props}
				/>
				<TypographyHelperControl
					title={__("Heading Typography", "responsive-block-editor-addons")}
					attrNameTemplate="heading%s"
					values = {{
					family: attributes.headingFontFamily,
					size: attributes.headingFontSize,
					sizeMobile: attributes.headingFontSizeMobile,
					sizeTablet: attributes.headingFontSizeTablet,
					weight: attributes.headingFontWeight,
					height: attributes.headingLineHeight,
					}}
					showLetterSpacing = { false }
					showTextTransform = { false }
					setAttributes={ setAttributes }
					{...this.props}
				/>
				<TypographyHelperControl
					title={__("Author Typography", "responsive-block-editor-addons")}
					attrNameTemplate="author%s"
					values = {{
					family: attributes.authorFontFamily,
					size: attributes.authorFontSize,
					sizeMobile: attributes.authorFontSizeMobile,
					sizeTablet: attributes.authorFontSizeTablet,
					weight: attributes.authorFontWeight,
					height: attributes.authorLineHeight,
					}}
					showLetterSpacing = { false }
					showTextTransform = { false }
					setAttributes={ setAttributes }
					{...this.props}
				/>
				<TypographyHelperControl
					title={__("Content Typography", "responsive-block-editor-addons")}
					attrNameTemplate="content%s"
					values = {{
					family: attributes.contentFontFamily,
					size: attributes.contentFontSize,
					sizeMobile: attributes.contentFontSizeMobile,
					sizeTablet: attributes.contentFontSizeTablet,
					weight: attributes.contentFontWeight,
					height: attributes.contentLineHeight,
					}}
					showLetterSpacing = { false }
					showTextTransform = { false }
					setAttributes={ setAttributes }
					{...this.props}
				/>
				<TypographyHelperControl
					title={__("CTA Typography", "responsive-block-editor-addons")}
					attrNameTemplate="continue%s"
					values = {{
					family: attributes.continueFontFamily,
					size: attributes.continueFontSize,
					sizeMobile: attributes.continueFontSizeMobile,
					sizeTablet: attributes.continueFontSizeTablet,
					weight: attributes.continueFontWeight,
					height: attributes.continueLineHeight,
					}}
					showLetterSpacing = { false }
					showTextTransform = { false }
					setAttributes={ setAttributes }
					{...this.props}
				/>
            </PanelBody>
            <PanelBody
              title={__("Padding", "responsive-block-editor-addons")}
              initialOpen={false}
            >
				<ResponsiveSpacingControl
					title={"Content Padding"}
					attrNameTemplate="contentPadding%s"
					values={{
						desktop: attributes.contentPadding,
						tablet: attributes.contentPaddingTablet,
						mobile: attributes.contentPaddingMobile,
					}}
					setAttributes={setAttributes}
					{...this.props}
				/>
            </PanelBody>
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
				<ResponsiveSpacingControl
					title={"Block Bottom"}
					attrNameTemplate="blockSpace%s"
					values={{
						desktop: attributes.blockSpace,
						tablet: attributes.blockSpaceTablet,
						mobile: attributes.blockSpaceMobile,
					}}
					setAttributes={setAttributes}
					{...this.props}
				/>
				<ResponsiveSpacingControl
					title={"Heading Bottom"}
					attrNameTemplate="headingSpace%s"
					values={{
						desktop: attributes.headingSpace,
						tablet: attributes.headingSpaceTablet,
						mobile: attributes.headingSpaceMobile,
					}}
					setAttributes={setAttributes}
					{...this.props}
				/>
				<ResponsiveSpacingControl
					title={"Author Bottom"}
					attrNameTemplate="authorSpace%s"
					values={{
						desktop: attributes.authorSpace,
						tablet: attributes.authorSpaceTablet,
						mobile: attributes.authorSpaceMobile,
					}}
					setAttributes={setAttributes}
					{...this.props}
				/>
				<ResponsiveSpacingControl
					title={"Excerpt Bottom"}
					attrNameTemplate="excerptSpace%s"
					values={{
						desktop: attributes.excerptSpace,
						tablet: attributes.excerptSpaceTablet,
						mobile: attributes.excerptSpaceMobile,
					}}
					setAttributes={setAttributes}
					{...this.props}
				/>
				<ResponsiveSpacingControl
					title={"Vertical Space"}
					attrNameTemplate="verSpace%s"
					values={{
						desktop: attributes.verSpace,
						tablet: attributes.verSpaceTablet,
						mobile: attributes.verSpaceMobile,
					}}
					setAttributes={setAttributes}
					{...this.props}
				/>
				<ResponsiveSpacingControl
					title={"Horizontal Space"}
					attrNameTemplate="horSpace%s"
					values={{
						desktop: attributes.horSpace,
						tablet: attributes.horSpaceTablet,
						mobile: attributes.horSpaceMobile,
					}}
					setAttributes={setAttributes}
					{...this.props}
				/>
            </PanelBody>
            <PanelBody
              title={__("CTA Box Shadow", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <BoxShadowControl
                setAttributes={setAttributes}
                label={__("Box Shadow")}
                boxShadowColor={{
                  value: attributes.boxShadowColor,
                  label: __("Color"),
                }}
                boxShadowHOffset={{
                  value: attributes.boxShadowHOffset,
                  label: __("Horizontal"),
                }}
                boxShadowVOffset={{
                  value: attributes.boxShadowVOffset,
                  label: __("Vertical"),
                }}
                boxShadowBlur={{
                  value: attributes.boxShadowBlur,
                  label: __("Blur"),
                }}
                boxShadowSpread={{
                  value: attributes.boxShadowSpread,
                  label: __("Spread"),
                }}
                boxShadowPosition={{
                  value: attributes.boxShadowPosition,
                  label: __("Position"),
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
