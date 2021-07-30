/**
 * Inspector Controls
 */

import times from "lodash/times";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import renderSVG from "../../../renderIcon";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  AlignmentToolbar,
  ColorPalette,
} = wp.editor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  BaseControl,
  ToggleControl,
  Dashicon,
  Button,
  TabPanel,
} = wp.components;

let svg_icons = Object.keys(ResponsiveBlocksIcon);

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        count,
        gutter,
        countUp,
        textColor,
        contentAlign,
        itemBackgroundColor,
        dateFontFamily,
        dateLineHeight,
        dateFontWeight,
        dateFontSize,
        dateFontSizeMobile,
        dateFontSizeTablet,
        headingLineHeight,
        titleFontWeight,
        headingFontFamily,
        headingFontSize,
        headingFontSizeMobile,
        headingFontSizeTablet,
        contentFontFamily,
        contentLineHeight,
        contentFontWeight,
        contentFontSize,
        contentFontSizeMobile,
        contentFontSizeTablet,
        icon,
        resshowIcon,
        resshowTitle,
        resshowDesc,
        blockBorderStyle,
        blockBorderWidth,
        blockBorderRadius,
        blockBorderColor,
        opacity,
        icon_color,
        iconsize,
        numColor,
        titleColor,
        titleSpace,
        numSpace,
        contentSpace,
        resshowNum,
        iconStyle,
        iconShapeColor,
        shapeBorderRadius,
        shapePadding,
        shapeBorder,
        contentSpacing,
        iconSpacing,
      },
      setAttributes,
    } = this.props;

    var data_copy = [...countUp];

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

    // Update color value
    const onChangeTextColor = (value) => setAttributes({ textColor: value });
    const onChangeBackgroundColor = (value) =>
      setAttributes({ itemBackgroundColor: value });
    const onChangeTitleColor = (value) => setAttributes({ titleColor: value });
    const onChangeNumColor = (value) => setAttributes({ numColor: value });

    const frontIconControls = (index) => {
      const icons = [
        "menu",
        "admin-site",
        "dashboard",
        "admin-post",
        "admin-media",
        "admin-links",
        "admin-page",
        "admin-comments",
        "admin-appearance",
        "admin-plugins",
        "admin-users",
        "admin-tools",
        "admin-settings",
        "admin-network",
        "admin-home",
        "admin-generic",
        "admin-collapse",
        "welcome-write-blog",
        "welcome-add-page",
        "welcome-view-site",
        "welcome-widgets-menus",
        "welcome-comments",
        "welcome-learn-more",
        "format-aside",
        "format-image",
        "format-gallery",
        "format-video",
        "format-status",
        "format-quote",
        "format-chat",
        "format-audio",
        "camera",
        "images-alt",
        "images-alt2",
        "video-alt",
        "video-alt2",
        "video-alt3",
        "image-crop",
        "image-rotate-left",
        "image-rotate-right",
        "image-flip-vertical",
        "image-flip-horizontal",
        "undo",
        "redo",
        "editor-bold",
        "editor-italic",
        "editor-ul",
        "editor-ol",
        "editor-quote",
        "editor-alignleft",
        "editor-aligncenter",
        "editor-alignright",
        "editor-insertmore",
        "editor-spellcheck",
        "editor-distractionfree",
        "editor-kitchensink",
        "editor-underline",
        "editor-justify",
        "editor-textcolor",
        "editor-paste-word",
        "editor-paste-text",
        "editor-removeformatting",
        "editor-video",
        "editor-customchar",
        "editor-outdent",
        "editor-indent",
        "editor-help",
        "editor-strikethrough",
        "editor-unlink",
        "editor-rtl",
        "align-left",
        "align-right",
        "align-center",
        "align-none",
        "lock",
        "calendar",
        "visibility",
        "post-status",
        "edit",
        "trash",
        "arrow-up",
        "arrow-down",
        "arrow-right",
        "arrow-left",
        "arrow-up-alt",
        "arrow-down-alt",
        "arrow-right-alt",
        "arrow-left-alt",
        "arrow-up-alt2",
        "arrow-down-alt2",
        "arrow-right-alt2",
        "arrow-left-alt2",
        "sort",
        "leftright",
        "list-view",
        "exerpt-view",
        "share",
        "share-alt",
        "share-alt2",
        "twitter",
        "rss",
        "facebook",
        "facebook-alt",
        "googleplus",
        "networking",
        "hammer",
        "art",
        "migrate",
        "performance",
        "wordpress",
        "wordpress-alt",
        "pressthis",
        "update",
        "screenoptions",
        "info",
        "cart",
        "feedback",
        "cloud",
        "translation",
        "tag",
        "category",
        "yes",
        "no",
        "no-alt",
        "plus",
        "minus",
        "dismiss",
        "marker",
        "star-filled",
        "star-half",
        "star-empty",
        "flag",
        "location",
        "location-alt",
        "vault",
        "shield",
        "shield-alt",
        "search",
        "slides",
        "analytics",
        "chart-pie",
        "chart-bar",
        "chart-line",
        "chart-area",
        "groups",
        "businessman",
        "id",
        "id-alt",
        "products",
        "awards",
        "forms",
        "portfolio",
        "book",
        "book-alt",
        "download",
        "upload",
        "backup",
        "lightbulb",
        "smiley",
      ];

      return (
        <PanelBody
          key={index}
          title={
            __("CountUp Box ", "responsive-block-editor-addons") +
            " " +
            (index + 1)
          }
          initialOpen={false}
          className={"rbea-repeater-panel"}
        >
          <FontIconPicker
            icons={svg_icons}
            renderFunc={renderSVG}
            theme="default"
            value={countUp[index]["icon"]}
            onChange={(value) => {
              var new_content = {
                icon: value,
                title: data_copy[index]["title"],
                amount: data_copy[index]["amount"],
                features: data_copy[index]["features"],
              };
              data_copy[index] = new_content;
              setAttributes({ countUp: data_copy });
            }}
            isMulti={false}
            noSelectedPlaceholder={__(
              "Select Icon",
              "responsive-block-editor-addons"
            )}
          />
        </PanelBody>
      );
    };

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <BaseControl>
                <BaseControl.VisualLabel>
                  {__("Alignment")}
                </BaseControl.VisualLabel>
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
              </BaseControl>

              <RangeControl
                label={__("Columns", "responsive-block-editor-addons")}
                value={count}
                onChange={(newCount) => {
                  let cloneTest_block = [...countUp];
                  if (cloneTest_block.length < newCount) {
                    const incAmount = Math.abs(
                      newCount - cloneTest_block.length
                    );

                    {
                      times(incAmount, (n) => {
                        cloneTest_block.push({
                          icon: "lightbulb",
                          title: "Title " + newCount,
                          amount: "1,234",
                          features: "Description",
                        });
                      });
                    }
                    setAttributes({ countUp: cloneTest_block });
                  } else {
                    const incAmount = Math.abs(
                      newCount - cloneTest_block.length
                    );
                    let data_new = cloneTest_block;
                    for (var i = 0; i < incAmount; i++) {
                      data_new.pop();
                    }
                    setAttributes({ countUp: data_new });
                  }
                  setAttributes({ count: newCount });
                }}
                min={1}
                max={4}
                step={1}
              />
            </PanelBody>

            <PanelBody
              title={__("Content", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ToggleControl
                label={__("Enable Title", "responsive-block-editor-addons")}
                checked={resshowTitle}
                onChange={(value) =>
                  setAttributes({ resshowTitle: !resshowTitle })
                }
              />
              <ToggleControl
                label={__("Enable Number", "responsive-block-editor-addons")}
                checked={resshowNum}
                onChange={(value) => setAttributes({ resshowNum: !resshowNum })}
              />
              <ToggleControl
                label={__(
                  "Enable Description",
                  "responsive-block-editor-addons"
                )}
                checked={resshowDesc}
                onChange={(value) =>
                  setAttributes({ resshowDesc: !resshowDesc })
                }
              />
              <ToggleControl
                label={__("Enable Icon", "responsive-block-editor-addons")}
                checked={resshowIcon}
                onChange={(value) =>
                  setAttributes({ resshowIcon: !resshowIcon })
                }
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            {resshowIcon && (
              <PanelBody
                title={__("Icon", "responsive-block-editor-addons")}
                initialOpen={true}
              >
                <Fragment>
                  <p className="components-base-control__label">
                    {__("Select Icon")}
                  </p>
                  {times(count, (n) => frontIconControls(n))}
                </Fragment>
                <RangeControl
                  label={__("Icon Size", "responsive-block-editor-addons")}
                  value={iconsize}
                  onChange={(value) =>
                    setAttributes({
                      iconsize: value !== undefined ? value : 16,
                    })
                  }
                  min={0}
                  max={300}
                  allowReset
                />
                <p className="responsive-block-editor-addons-setting-label">
                  {__("Icon Color", "responsive-block-editor-addons")}
                  <span className="components-base-control__label">
                    <span
                      className="component-color-indicator"
                      style={{ backgroundColor: icon_color }}
                    ></span>
                  </span>
                </p>
                <ColorPalette
                  value={icon_color}
                  onChange={(value) => setAttributes({ icon_color: value })}
                  allowReset
                />
                <SelectControl
                  label={__("Design")}
                  value={iconStyle}
                  onChange={(value) => setAttributes({ iconStyle: value })}
                  options={[
                    { value: "none", label: __("Plain") },
                    { value: "shaped", label: __("Shaped") },
                    { value: "outline", label: __("Outline") },
                  ]}
                />
                {"none" != iconStyle && (
                  <Fragment>
                    <p className="responsive-block-editor-addons-setting-label">
                      {__(
                        "Icon Shape / Outline Color",
                        "responsive-block-editor-addons"
                      )}
                      <span className="components-base-control__label">
                        <span
                          className="component-color-indicator"
                          style={{ backgroundColor: iconShapeColor }}
                        ></span>
                      </span>
                    </p>
                    <ColorPalette
                      value={iconShapeColor}
                      onChange={(value) =>
                        setAttributes({ iconShapeColor: value })
                      }
                      allowReset
                    />
                    <RangeControl
                      label={__("Shape / Outline Border Radius")}
                      value={shapeBorderRadius}
                      onChange={(value) =>
                        setAttributes({ shapeBorderRadius: value })
                      }
                      min={0}
                      max={50}
                    />
                    <RangeControl
                      label={__("Shape / Outline Padding")}
                      value={shapePadding}
                      onChange={(value) =>
                        setAttributes({ shapePadding: value })
                      }
                      min={0}
                      max={100}
                    />
                    <RangeControl
                      label={__("Outline Width")}
                      value={shapeBorder}
                      onChange={(value) =>
                        setAttributes({ shapeBorder: value })
                      }
                      min={0}
                      max={9}
                    />
                  </Fragment>
                )}
              </PanelBody>
            )}

            <PanelBody
              title={__("Typography", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <PanelBody
                title={__(
                  "Number Typography",
                  "responsive-block-editor-addons"
                )}
                initialOpen={false}
              >
                <SelectControl
                  label={__("Font Family", "responsive-block-editor-addons")}
                  options={fontOptions}
                  value={dateFontFamily}
                  onChange={(value) => {
                    setAttributes({
                      dateFontFamily: value,
                    }),
                      loadGoogleFont(value);
                  }}
                />
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
                              "Font Size",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={500}
                            value={dateFontSizeMobile}
                            onChange={(value) =>
                              setAttributes({
                                dateFontSizeMobile: value,
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
                              "Font Size",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={500}
                            value={dateFontSizeTablet}
                            onChange={(value) =>
                              setAttributes({
                                dateFontSizeTablet: value,
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
                              "Font Size",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={500}
                            value={dateFontSize}
                            onChange={(value) =>
                              setAttributes({
                                dateFontSize: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    }

                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
                <SelectControl
                  label={__("Font Weight", "responsive-block-editor-addons")}
                  options={[
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
                  ]}
                  value={dateFontWeight}
                  onChange={(value) =>
                    this.props.setAttributes({
                      dateFontWeight: value,
                    })
                  }
                />
                <RangeControl
                  label={__("Line Height", "responsive-block-editor-addons")}
                  value={dateLineHeight}
                  onChange={(value) =>
                    this.props.setAttributes({
                      dateLineHeight: value,
                    })
                  }
                  min={0}
                  max={100}
                  step={1}
                />
              </PanelBody>
              <PanelBody
                title={__(
                  "Heading Typography",
                  "responsive-block-editor-addons"
                )}
                initialOpen={false}
              >
                <SelectControl
                  label={__("Font Family", "responsive-block-editor-addons")}
                  options={fontOptions}
                  value={headingFontFamily}
                  onChange={(value) => {
                    setAttributes({
                      headingFontFamily: value,
                    }),
                      loadGoogleFont(value);
                  }}
                />
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
                              "Font Size",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={500}
                            value={headingFontSizeMobile}
                            onChange={(value) =>
                              setAttributes({
                                headingFontSizeMobile: value,
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
                              "Font Size",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={500}
                            value={headingFontSizeTablet}
                            onChange={(value) =>
                              setAttributes({
                                headingFontSizeTablet: value,
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
                              "Font Size",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={500}
                            value={headingFontSize}
                            onChange={(value) =>
                              setAttributes({
                                headingFontSize: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    }

                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
                <SelectControl
                  label={__("Font Weight", "responsive-block-editor-addons")}
                  options={[
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
                  ]}
                  value={titleFontWeight}
                  onChange={(value) =>
                    this.props.setAttributes({
                      titleFontWeight: value !== undefined ? value : 900,
                    })
                  }
                />
                <RangeControl
                  label={__("Line Height", "responsive-block-editor-addons")}
                  value={headingLineHeight}
                  onChange={(value) =>
                    this.props.setAttributes({
                      headingLineHeight: value,
                    })
                  }
                  min={0}
                  max={100}
                  step={1}
                />
              </PanelBody>
              <PanelBody
                title={__(
                  "Description Typography",
                  "responsive-block-editor-addons"
                )}
                initialOpen={false}
              >
                <SelectControl
                  label={__("Font Family", "responsive-block-editor-addons")}
                  options={fontOptions}
                  value={contentFontFamily}
                  onChange={(value) => {
                    setAttributes({
                      contentFontFamily: value,
                    }),
                      loadGoogleFont(value);
                  }}
                />
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
                              "Font Size",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={500}
                            value={contentFontSizeMobile}
                            onChange={(value) =>
                              setAttributes({
                                contentFontSizeMobile: value,
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
                              "Font Size",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={500}
                            value={contentFontSizeTablet}
                            onChange={(value) =>
                              setAttributes({
                                contentFontSizeTablet: value,
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
                              "Font Size",
                              "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={500}
                            value={contentFontSize}
                            onChange={(value) =>
                              setAttributes({
                                contentFontSize: value,
                              })
                            }
                          />
                        </Fragment>
                      );
                    }

                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
                <SelectControl
                  label={__("Font Weight", "responsive-block-editor-addons")}
                  options={fontWeightOptions}
                  value={contentFontWeight}
                  onChange={(value) =>
                    setAttributes({
                      contentFontWeight: value,
                    })
                  }
                />
                <RangeControl
                  label={__("Line Height", "responsive-block-editor-addons")}
                  value={contentLineHeight}
                  onChange={(value) =>
                    setAttributes({
                      contentLineHeight: value,
                    })
                  }
                  min={0}
                  max={100}
                  step={1}
                />
              </PanelBody>
            </PanelBody>

            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RangeControl
                label={__("Content Padding", "responsive-block-editor-addons")}
                value={contentSpacing}
                onChange={(value) =>
                  this.props.setAttributes({
                    contentSpacing: value !== undefined ? value : 0,
                  })
                }
                min={0}
                max={50}
                step={1}
                allowReset
              />
              <RangeControl
                label={__(
                  "Icon Bottom Spacing",
                  "responsive-block-editor-addons"
                )}
                value={iconSpacing}
                onChange={(value) =>
                  this.props.setAttributes({
                    iconSpacing: value !== undefined ? value : 16,
                  })
                }
                min={0}
                max={50}
                step={1}
                allowReset
              />
              <RangeControl
                label={__(
                  "Title Bottom Margin",
                  "responsive-block-editor-addons"
                )}
                value={titleSpace}
                onChange={(value) =>
                  setAttributes({
                    titleSpace: value !== undefined ? value : 20,
                  })
                }
                min={0}
                max={100}
                allowReset
              />
              <RangeControl
                label={__(
                  "Number Bottom Margin",
                  "responsive-block-editor-addons"
                )}
                value={numSpace}
                onChange={(value) =>
                  setAttributes({ numSpace: value !== undefined ? value : 20 })
                }
                min={0}
                max={100}
                allowReset
              />
              <RangeControl
                label={__(
                  "Description Bottom Margin",
                  "responsive-block-editor-addons"
                )}
                value={contentSpace}
                onChange={(value) =>
                  setAttributes({
                    contentSpace: value !== undefined ? value : 30,
                  })
                }
                min={0}
                max={100}
                allowReset
              />
            </PanelBody>

            <PanelColorSettings
              title={__("Color Settings", "responsive-block-editor-addons")}
              initialOpen={false}
              colorSettings={[
                {
                  value: titleColor,
                  onChange: onChangeTitleColor,
                  label: __("Title Color", "responsive-block-editor-addons"),
                },
                {
                  value: numColor,
                  onChange: onChangeNumColor,
                  label: __("Number Color", "responsive-block-editor-addons"),
                },
                {
                  value: textColor,
                  onChange: onChangeTextColor,
                  label: __("Text Color", "responsive-block-editor-addons"),
                },
                {
                  value: itemBackgroundColor,
                  onChange: onChangeBackgroundColor,
                  label: __(
                    "Background Color",
                    "responsive-block-editor-addons"
                  ),
                },
              ]}
            >
              <RangeControl
                label={__("Opacity", "responsive-block-editor-addons")}
                value={opacity}
                onChange={(value) =>
                  setAttributes({ opacity: value !== undefined ? value : 10 })
                }
                min={0}
                max={100}
                allowReset
              />
            </PanelColorSettings>
            <PanelBody
              title={__("Border", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <SelectControl
                label={__("Border Style")}
                value={blockBorderStyle}
                onChange={(value) => setAttributes({ blockBorderStyle: value })}
                options={[
                  { value: "none", label: __("None") },
                  { value: "solid", label: __("Solid") },
                  { value: "dotted", label: __("Dotted") },
                  { value: "dashed", label: __("Dashed") },
                  { value: "double", label: __("Double") },
                  { value: "groove", label: __("Groove") },
                  { value: "inset", label: __("Inset") },
                  { value: "outset", label: __("Outset") },
                  { value: "ridge", label: __("Ridge") },
                ]}
              />
              {"none" != blockBorderStyle && (
                <RangeControl
                  label={__("Border Width")}
                  value={blockBorderWidth}
                  onChange={(value) =>
                    setAttributes({ blockBorderWidth: value })
                  }
                  min={0}
                  max={20}
                />
              )}
              <RangeControl
                label={__("Border Radius")}
                value={blockBorderRadius}
                onChange={(value) =>
                  setAttributes({ blockBorderRadius: value })
                }
                min={0}
                max={50}
              />
              {"none" != blockBorderStyle && (
                <Fragment>
                  <p className="responsive-setting-label">
                    {__("Border Color")}
                    <span className="components-base-control__label">
                      <span
                        className="component-color-indicator"
                        style={{ backgroundColor: blockBorderColor }}
                      ></span>
                    </span>
                  </p>
                  <ColorPalette
                    value={blockBorderColor}
                    onChange={(colorValue) =>
                      setAttributes({ blockBorderColor: colorValue })
                    }
                    allowReset
                  />
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
