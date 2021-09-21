/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const { InspectorControls, PanelColorSettings } = wp.editor;

// Import Inspector components
const {
  PanelBody,
  ToggleControl,
  TextareaControl,
  RangeControl,
  TabPanel,
  Dashicon,
} = wp.components;

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
        token,
        columns,
        instaPosts,
        numberOfItems,
        imagesGap,
        borderRadius,
        hasEqualImages,
        showCaptions,
        instaTopPadding,
        instaBottomPadding,
        instaRightPadding,
        instaLeftPadding,
        instaTopPaddingMobile,
        instaBottomPaddingMobile,
        instaRightPaddingMobile,
        instaLeftPaddingMobile,
        instaTopPaddingTablet,
        instaBottomPaddingTablet,
        instaRightPaddingTablet,
        instaLeftPaddingTablet,
        instaTopMargin,
        instaBottomMargin,
        instaRightMargin,
        instaLeftMargin,
        instaTopMarginMobile,
        instaBottomMarginMobile,
        instaRightMarginMobile,
        instaLeftMarginMobile,
        instaTopMarginTablet,
        instaBottomMarginTablet,
        instaRightMarginTablet,
        instaLeftMarginTablet,
        gridSize,
      },
      setAttributes,
    } = this.props;

    return (
      <InspectorControls key="inspector">
        <PanelBody title={__("API Key")}>
          <TextareaControl
            label={__("Access Token")}
            value={token}
            onChange={(value) => {
              setAttributes({ token: value });
            }}
          />
          <p>
            Note: This block requires you to obtain an Instagram Access Token to
            connect Instagram with WordPress. You will need to use your
            Instagram credentials to get access token.
          </p>
        </PanelBody>

        {true && (
          <>
            <PanelBody title={__("Settings")} initialOpen={false}>
              <RangeControl
                label={__("Number Of Items")}
                value={numberOfItems}
                onChange={(value) => {
                  setAttributes({ numberOfItems: value });
                }}
                min={1}
                max={20}
              />
              <RangeControl
                label={__("Grid Size", "responsive-block-editor-addons")}
                min={0}
                max={800}
                value={gridSize}
                onChange={(value) =>
                  setAttributes({
                    gridSize: value,
                  })
                }
              />
              <RangeControl
                label={__("Columns")}
                value={columns}
                onChange={(value) => {
                  setAttributes({ columns: value });
                }}
                min={1}
                max={8}
              />

              <RangeControl
                label={__("Spacing")}
                value={imagesGap}
                onChange={(value) => setAttributes({ imagesGap: value })}
                min={0}
                max={30}
              />

              <RangeControl
                label={__("Border Radius")}
                value={borderRadius}
                onChange={(borderRadius) => setAttributes({ borderRadius })}
                min={0}
                max={50}
              />
            </PanelBody>

            <PanelBody title={__("Padding")} initialOpen={false}>
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
                            "Top Padding Mobile",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={instaTopPaddingMobile}
                          onChange={(value) =>
                            setAttributes({
                              instaTopPaddingMobile: value,
                            })
                          }
                        />
                        <RangeControl
                          label={__(
                            "Bottom Padding Mobile",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={instaBottomPaddingMobile}
                          onChange={(value) =>
                            setAttributes({
                              instaBottomPaddingMobile: value,
                            })
                          }
                        />
                        <RangeControl
                          label={__(
                            "Left Padding Mobile",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={instaLeftPaddingMobile}
                          onChange={(value) =>
                            setAttributes({
                              instaLeftPaddingMobile: value,
                            })
                          }
                        />
                        <RangeControl
                          label={__(
                            "Right Padding Mobile",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={instaRightPaddingMobile}
                          onChange={(value) =>
                            setAttributes({
                              instaRightPaddingMobile: value,
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
                            "Top Padding Tablet",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={instaTopPaddingTablet}
                          onChange={(value) =>
                            setAttributes({
                              instaTopPaddingTablet: value,
                            })
                          }
                        />
                        <RangeControl
                          label={__(
                            "Bottom Padding Tablet",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={instaBottomPaddingTablet}
                          onChange={(value) =>
                            setAttributes({
                              instaBottomPaddingTablet: value,
                            })
                          }
                        />
                        <RangeControl
                          label={__(
                            "Left Padding Tablet",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={instaLeftPaddingTablet}
                          onChange={(value) =>
                            setAttributes({
                              instaLeftPaddingTablet: value,
                            })
                          }
                        />
                        <RangeControl
                          label={__(
                            "Right Padding Tablet",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={instaRightPaddingTablet}
                          onChange={(value) =>
                            setAttributes({
                              instaRightPaddingTablet: value,
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
                            "Top Padding",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={instaTopPadding}
                          onChange={(value) =>
                            setAttributes({
                              instaTopPadding: value,
                            })
                          }
                        />
                        <RangeControl
                          label={__(
                            "Bottom Padding",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={instaBottomPadding}
                          onChange={(value) =>
                            setAttributes({
                              instaBottomPadding: value,
                            })
                          }
                        />
                        <RangeControl
                          label={__(
                            "Left Padding",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={instaLeftPadding}
                          onChange={(value) =>
                            setAttributes({
                              instaLeftPadding: value,
                            })
                          }
                        />
                        <RangeControl
                          label={__(
                            "Right Padding",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={instaRightPadding}
                          onChange={(value) =>
                            setAttributes({
                              instaRightPadding: value,
                            })
                          }
                        />
                      </Fragment>
                    );
                  }
                  return <div>{tabout}</div>;
                }}
              </TabPanel>
            </PanelBody>
            <PanelBody
              title={__("Margin", "responsive-block-editor-addons")}
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
                            "Top Margin Mobile",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={instaTopMarginMobile}
                          onChange={(value) =>
                            setAttributes({
                              instaTopMarginMobile: value,
                            })
                          }
                        />
                        <RangeControl
                          label={__(
                            "Bottom Margin Mobile",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={instaBottomMarginMobile}
                          onChange={(value) =>
                            setAttributes({
                              instaBottomMarginMobile: value,
                            })
                          }
                        />
                        <RangeControl
                          label={__(
                            "Left Margin Mobile",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={instaLeftMarginMobile}
                          onChange={(value) =>
                            setAttributes({
                              instaLeftMarginMobile: value,
                            })
                          }
                        />
                        <RangeControl
                          label={__(
                            "Right Margin Mobile",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={instaRightMarginMobile}
                          onChange={(value) =>
                            setAttributes({
                              instaRightMarginMobile: value,
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
                            "Top Margin Tablet",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={instaTopMarginTablet}
                          onChange={(value) =>
                            setAttributes({
                              instaTopMarginTablet: value,
                            })
                          }
                        />
                        <RangeControl
                          label={__(
                            "Bottom Margin Tablet",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={instaBottomMarginTablet}
                          onChange={(value) =>
                            setAttributes({
                              instaBottomMarginTablet: value,
                            })
                          }
                        />
                        <RangeControl
                          label={__(
                            "Left Margin Tablet",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={instaLeftMarginTablet}
                          onChange={(value) =>
                            setAttributes({
                              instaLeftMarginTablet: value,
                            })
                          }
                        />
                        <RangeControl
                          label={__(
                            "Right Margin Tablet",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={instaRightMarginTablet}
                          onChange={(value) =>
                            setAttributes({
                              instaRightMarginTablet: value,
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
                            "Top Margin",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={instaTopMargin}
                          onChange={(value) =>
                            setAttributes({
                              instaTopMargin: value,
                            })
                          }
                        />
                        <RangeControl
                          label={__(
                            "Bottom Margin",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={instaBottomMargin}
                          onChange={(value) =>
                            setAttributes({
                              instaBottomMargin: value,
                            })
                          }
                        />
                        <RangeControl
                          label={__(
                            "Left Margin",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={instaLeftMargin}
                          onChange={(value) =>
                            setAttributes({
                              instaLeftMargin: value,
                            })
                          }
                        />
                        <RangeControl
                          label={__(
                            "Right Margin",
                            "responsive-block-editor-addons"
                          )}
                          min={0}
                          max={2000}
                          value={instaRightMargin}
                          onChange={(value) =>
                            setAttributes({
                              instaRightMargin: value,
                            })
                          }
                        />
                      </Fragment>
                    );
                  }
                  return <div>{tabout}</div>;
                }}
              </TabPanel>
            </PanelBody>
          </>
        )}
      </InspectorControls>
    );
  }
}
