/**
 * Box-Shadow reusable component.
 *
 */
import GradientHoverBackgroundControl from './Gradient Hover Background Settings';

const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { SelectControl, RangeControl, TabPanel } = wp.components;

// Extend component
const { Component, Fragment } = wp.element;

class GradientBackgroundControl extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
      const {
          attributes: {
              backgroundColor1,
              backgroundColor2,
              colorLocation1,
              colorLocation2,
              gradientDirection,
          },
          setAttributes,
      } = this.props;
      
    var gradientNormalOptions = (
    <Fragment>
        {this.props.showColorOne ===false? false: true && (<Fragment>
        <p className="responsive-setting-label">
                {__("Color 1", "responsive-block-editor-addons")}
        <span className="components-base-control__label">
                <span
            className="component-color-indicator"
            style={{ backgroundColor: backgroundColor1 }}
        ></span>
            </span>
            </p>
            <ColorPalette
            value={backgroundColor1}
            onChange={(colorValue) =>
            setAttributes({ backgroundColor1: colorValue })
        }
            allowReset
            />
        </Fragment>)}
            <p className="responsive-setting-label">
                {__("Color 2", "responsive-block-editor-addons")}
        <span className="components-base-control__label">
                <span
            className="component-color-indicator"
            style={{ backgroundColor: backgroundColor2 }}
        ></span>
            </span>
            </p>
            <ColorPalette
            value={backgroundColor2}
            onChange={(colorValue) =>
            setAttributes({ backgroundColor2: colorValue })
        }
            allowReset
            />
            <RangeControl
            label={__("Color Location 1", "responsive-block-editor-addons")}
            value={colorLocation1}
            min={0}
            max={100}
            onChange={(value) =>
            setAttributes({
                colorLocation1: value !== undefined ? value : 0,
            })
        }
            />
            <RangeControl
            label={__("Color Location 2", "responsive-block-editor-addons")}
            value={colorLocation2}
            min={0}
            max={100}
            onChange={(value) =>
            setAttributes({
                colorLocation2: value !== undefined ? value : 100,
            })
        }
            />
            <RangeControl
            label={__(
                "Gradient Direction",
                "responsive-block-editor-addons"
        )}
            value={gradientDirection}
            min={0}
            max={360}
            onChange={(value) =>
            setAttributes({
                gradientDirection: value !== undefined ? value : 90,
            })
        }
        />
    </Fragment>
    )

    var advancedControls;
      advancedControls = (      
          <Fragment>
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
                    btn_color_tab = 
                        gradientNormalOptions
                    } else {
                    btn_color_tab = (
                        <Fragment>
                        <GradientHoverBackgroundControl
                            {...this.props}
                        />
                        </Fragment>
                    );
                    }
                    return <div>{btn_color_tab}</div>;
                }}
                </TabPanel>
            </Fragment>
      );

    return (
      <div className="responsive-block-editor-addons-gradient-background-settings">
        { this.props.showHoverGradient ? advancedControls : gradientNormalOptions}
      </div>
    );
  }
}

export default GradientBackgroundControl;
