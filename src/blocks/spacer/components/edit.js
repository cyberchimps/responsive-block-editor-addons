/**
 * Internal dependencies
 */
import classnames from "classnames";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment, Component } = wp.element;
const {
  ResizableBox,
  PanelBody,
  RangeControl,
  TabPanel,
  Dashicon,
} = wp.components;

// Import block components
const { InspectorControls } = wp.blockEditor;

const { compose, withInstanceId } = wp.compose;
const { withDispatch } = wp.data;

const MIN_SPACER_HEIGHT = 20;
const MAX_SPACER_HEIGHT = 500;
class SpacerEdit extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidMount() {
    // Assigning block_id in the attribute.
    this.props.setAttributes({ block_id: this.props.clientId });
    this.props.setAttributes({ classMigrate: true });
  }

  render() {
    // Setup the attributes
    const {
      attributes: { height, heightTablet, heightMobile, block_id },
      isSelected,
      setAttributes,
      onResizeStart,
      onResizeStop,
    } = this.props;

    const updateHeight = (value) => {
      setAttributes({
        height: value,
      });
    };
    const updateHeightTablet = (value) => {
      setAttributes({
        heightTablet: value,
      });
    };
    const updateHeightMobile = (value) => {
      setAttributes({
        heightMobile: value,
      });
    };

    return (
      <>
        <ResizableBox
          className={classnames(
            this.props.className,
            "responsive-block-editor-addons-block-spacer",
            `block-${block_id}`,
            "responsive-block-editor-addons-spacer",
            {
              "is-selected": isSelected,
            }
          )}
          size={{
            height,
          }}
          minHeight={MIN_SPACER_HEIGHT}
          enable={{
            top: false,
            right: false,
            bottom: true,
            left: false,
            topRight: false,
            bottomRight: false,
            bottomLeft: false,
            topLeft: false,
          }}
          onResizeStart={onResizeStart}
          onResizeStop={(event, direction, elt, delta) => {
            onResizeStop();
            const spacerHeight = Math.min(
              parseInt(height + delta.height, 10),
              MAX_SPACER_HEIGHT
            );
            updateHeight(spacerHeight);
          }}
          showHandle={isSelected}
        />
        <InspectorControls>
          <InspectorTabs hasStyle={false}>
            <InspectorTab key={"content"}>
              <PanelBody title={__("Spacer settings", "responsive-block-editor-addons")}>
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
                            value={heightMobile}
                            onChange={updateHeightMobile}
                            min={1}
                            max={500}
                            step={1}
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
                            value={heightTablet}
                            onChange={updateHeightTablet}
                            min={1}
                            max={500}
                            step={1}
                          />
                        </Fragment>
                      );
                    } else {
                      tabout = (
                        <Fragment>
                          <RangeControl
                            label={__("Height in pixels", "responsive-block-editor-addons")}
                            min={MIN_SPACER_HEIGHT}
                            max={Math.max(MAX_SPACER_HEIGHT, height)}
                            value={height}
                            onChange={updateHeight}
                          />
                        </Fragment>
                      );
                    }

                    return <div>{tabout}</div>;
                  }}
                </TabPanel>
              </PanelBody>
            </InspectorTab>
            <InspectorTab key={"advance"}></InspectorTab>
          </InspectorTabs>
        </InspectorControls>
      </>
    );
  }
}

export default compose([
  withDispatch((dispatch) => {
    const { toggleSelection } = dispatch("core/block-editor");

    return {
      onResizeStart: () => toggleSelection(false),
      onResizeStop: () => toggleSelection(true),
    };
  }),
  withInstanceId,
])(SpacerEdit);
