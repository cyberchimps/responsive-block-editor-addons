import {camelCase} from "lodash";
import { __getValue } from '../../../Responsive Spacing Settings'
import classnames from "classnames";

/**
 * Box-Shadow reusable component.
 *
 */
const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { SelectControl, RangeControl, Dashicon, TabPanel, ButtonGroup, Button } = wp.components;

// Extend component
const { Component, Fragment } = wp.element;
import "../../editor.scss";
import {sprintf} from "@wordpress/i18n";

class ResponsivePaddingControl extends Component {
  constructor() {
    super(...arguments);
  }


render() {
      const {
          setAttributes,
      } = this.props;

    var getAttrName = attrName => camelCase( sprintf( this.props.attrNameTemplate, attrName ) )

    var advancedControls;
      advancedControls = (
          <Fragment>
      <TabPanel
        className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
        activeClass="active-tab"
        tabs={[
            {
                name: "desktop",
                title: <Dashicon icon="desktop" />,
                className: " responsive-desktop-tab  responsive-responsive-tabs",
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

          if ("desktop" === tab.name) {
              tabout = (
                  <Fragment>
                  <p>{__("Padding")}</p>
                  <RangeControl
              label={__("Top", "responsive-block-editor-addons")}
              min={0}
              max={2000}
              allowReset={true}
              resetFallbackValue={10}
              value={this.props.values.desktopTop}
              onChange={(value) =>
              setAttributes({
                [getAttrName("TopPadding")]: value !== undefined ? value : 0,              
            })
            }
              />
              <RangeControl
              label={__("Bottom", "responsive-block-editor-addons")}
              value={this.props.values.desktopBottom}
              onChange={(value) =>
              setAttributes({
                [getAttrName("BottomPadding")]: value !== undefined ? value : 0,              
              })
            }
              min={0}
              max={2000}
              allowReset
              />
              <RangeControl
              label={__("Left", "responsive-block-editor-addons")}
              value={this.props.values.desktopLeft}
              onChange={(value) =>
              setAttributes({
                [getAttrName("LeftPadding")]: value !== undefined ? value : 0,              
              })
            }
              min={0}
              max={2000}
              allowReset
              />
              <RangeControl
              label={__("Right", "responsive-block-editor-addons")}
              value={this.props.values.desktopRight}
              onChange={(value) =>
              setAttributes({
                [getAttrName("RightPadding")]: value !== undefined ? value : 0,              
              })
            }
              min={0}
              max={2000}
              allowReset
              />
              </Fragment>
          );
          } else if ("tablet" === tab.name) {
              tabout = (
                  <Fragment>
                  <p>{__("Padding Tablet")}</p>
                  <RangeControl
              label={__("Top", "responsive-block-editor-addons")}
              min={0}
              max={2000}
              allowReset={true}
              resetFallbackValue={10}
              value={this.props.values.tabletTop}
              onChange={(value) =>
              setAttributes({
                [getAttrName("TopPaddingTablet")]: value !== undefined ? value : 0,              
              })
          }
              />
              <RangeControl
              label={__("Bottom", "responsive-block-editor-addons")}
              value={this.props.values.tabletBottom}
              onChange={(value) =>
              setAttributes({
                [getAttrName("BottomPaddingTablet")]: value !== undefined ? value : 0,              
              })
          }
              min={0}
              max={2000}
              allowReset
              />
              <RangeControl
              label={__("Left", "responsive-block-editor-addons")}
              value={this.props.values.tabletLeft}
              onChange={(value) =>
              setAttributes({
                [getAttrName("LeftPaddingTablet")]: value !== undefined ? value : 0,              
              })
          }
              min={0}
              max={2000}
              allowReset
              />
              <RangeControl
              label={__("Right", "responsive-block-editor-addons")}
              value={this.props.values.tabletRight}
              onChange={(value) =>
              setAttributes({
                [getAttrName("RightPaddingTablet")]: value !== undefined ? value : 0,              
              })
          }
              min={0}
              max={2000}
              allowReset
              />
              </Fragment>
          );
          } else {
              tabout = (
                  <Fragment>
                  <p>{__("Padding Mobile")}</p>
                  <RangeControl
              label={__("Top", "responsive-block-editor-addons")}
              min={0}
              max={2000}
              allowReset={true}
              resetFallbackValue={10}
              value={this.props.values.mobileTop}
              onChange={(value) =>
              setAttributes({
                [getAttrName("TopPaddingMobile")]: value !== undefined ? value : 0,              
              })
          }
              />
              <RangeControl
              label={__("Bottom", "responsive-block-editor-addons")}
              value={this.props.values.mobileBottom}
              onChange={(value) =>
              setAttributes({
                [getAttrName("BottomPaddingMobile")]: value !== undefined ? value : 0,              
              })
          }
              min={0}
              max={2000}
              allowReset
              />
              <RangeControl
              label={__("Left", "responsive-block-editor-addons")}
              value={this.props.values.mobileLeft}
              onChange={(value) =>
              setAttributes({
                [getAttrName("LeftPaddingMobile")]: value !== undefined ? value : 0,              
              })
          }
              min={0}
              max={2000}
              allowReset
              />
              <RangeControl
              label={__("Right", "responsive-block-editor-addons")}
              value={this.props.values.mobileRight}
              onChange={(value) =>
              setAttributes({
                [getAttrName("RightPaddingMobile")]: value !== undefined ? value : 0,              
              })
          }
              min={0}
              max={2000}
              allowReset
              />
              </Fragment>
          );
          }

          return <div>{tabout}</div>;
      }}
  </TabPanel>
    </Fragment>
      );


    return (
      <div className="responsive-block-editor-addons-block-border-settings">
        {advancedControls}
      </div>
    );
  }
}

export default ResponsivePaddingControl;
