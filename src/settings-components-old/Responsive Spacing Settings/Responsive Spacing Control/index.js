import {camelCase} from "lodash";
import { __getValue } from '../../Responsive Spacing Settings'
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
import "../editor.scss";
import {sprintf} from "@wordpress/i18n";

class ResponsiveSpacingControl extends Component {
  constructor() {
    super(...arguments);
      this.state = {
          attrval: 0,
          attrvalMobile: 0,
          attrvalTablet: 0,
      }

  }


render() {
      const {
          attributes: {
              topMarginMobile,
              topMarginTablet,
              topMargin,
          },
          setAttributes,
      } = this.props;
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
                  <RangeControl
              label={this.props.title}
              min={-2000}
              max={2000}
              allowReset={true}
              resetFallbackValue={5}
              value={this.state.attrvalMobile }
              onChange={(value) =>[
                  setAttributes({
                      [this.props.attrMobile]: value !== undefined ? value : 0,
                  }),
                  this.setState({
                      attrvalMobile: value
                  })]
          }
              />
              </Fragment>
          );
          } else if ("tablet" === tab.name) {
              tabout = (
                  <Fragment>
                  <RangeControl
              label={this.props.title}
              min={-2000}
              max={2000}
              allowReset={true}
              resetFallbackValue={5}
              value={this.state.attrvalTablet}
              onChange={(value) =>[
                  setAttributes({
                      [this.props.attrTablet]: value !== undefined ? value : 0,
                  }),
                  this.setState({
                      attrvalTablet: value
                  })]
          }
              />
              </Fragment>
          );
          } else {
              tabout = (
                  <Fragment>
                  <RangeControl
              label={this.props.title}
              min={-2000}
              max={2000}
              allowReset={true}
              resetFallbackValue={5}
              value={this.state.attrval}
              onChange={(value) =>[
                  setAttributes({
                      [this.props.attr]: value !== undefined ? value : 0,
                  }),
                  this.setState({
                      attrval: value
                  })]
          }
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

export default ResponsiveSpacingControl;
