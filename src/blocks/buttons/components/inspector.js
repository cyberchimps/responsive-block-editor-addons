/**
 * Inspector Controls
 */

/**
 * Local dependencies
 */
  import InspectorTabs from "../../../components/InspectorTabs.js";
  import InspectorTab from "../../../components/InspectorTab.js";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  AlignmentToolbar,
  BlockControls,
  InnerBlocks,
} = wp.editor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  BaseControl,
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
        buttonAlignment,
        buttonAlignmentTablet,
        buttonAlignmentMobile,
        buttons,
        gap,
        stack,
      },
      setAttributes,
    } = this.props;

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={'content'}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={true}
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
                      <Fragment>
                        <BaseControl>
                          <p>
                            {__(
                              "Alignment Mobile",
                              "responsive-block-editor-addons"
                            )}
                          </p>
                          <AlignmentToolbar
                            value={buttonAlignmentMobile}
                            onChange={(value) =>
                              setAttributes({
                                buttonAlignmentMobile: value,
                              })
                            }
                            controls={["left", "center", "right", "full"]}
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
                            value={buttonAlignmentTablet}
                            onChange={(value) =>
                              setAttributes({
                                buttonAlignmentTablet: value,
                              })
                            }
                            controls={["left", "center", "right", "full"]}
                            isCollapsed={false}
                          />
                        </BaseControl>
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <BaseControl>
                          <p>{__("Alignment", "responsive-block-editor-addons")}</p>
                          <AlignmentToolbar
                            value={buttonAlignment}
                            onChange={(value) =>
                              setAttributes({
                                buttonAlignment: value,
                              })
                            }
                            controls={["left", "center", "right", "full"]}
                            isCollapsed={false}
                          />
                        </BaseControl>
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>
              <hr className="responsive-block-editor-addons-editor__separator" />
              <SelectControl
                label={__("Stack on")}
                value={stack}
                options={[
                  { value: "none", label: __("None") },
                  { value: "desktop", label: __("Desktop") },
                  { value: "tablet", label: __("Tablet") },
                  { value: "mobile", label: __("Mobile") },
                ]}
                onChange={(value) => setAttributes({ stack: value })}
                help={__(
                  "Note: Choose breakpoint on which the buttons will stack."
                )}
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={'style'}></InspectorTab>
          <InspectorTab key={'advance'}></InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
