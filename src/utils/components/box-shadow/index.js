/**
 * Box-Shadow reusable component.
 *
 */

import RbeaRangeControl from "../../components/rbea-range-control";
import RbeaTabRadioControl from "../rbea-tab-radio-control";
import RbeaColorControl from "../rbea-color-control";
const { __ } = wp.i18n;

// Extend component
const { Component, Fragment } = wp.element;

class BoxShadowControl extends Component {
  constructor() {
    super(...arguments);
  }
  
  render() {
    const {
      setAttributes,
      boxShadowColor,
      boxShadowHOffset,
      boxShadowVOffset,
      boxShadowBlur,
      boxShadowSpread,
      boxShadowPosition,
    } = this.props;

    var advancedControls;
    
      advancedControls = (
        <div>
          <Fragment>
            <RbeaColorControl
              label = {"Color"}
              colorValue={boxShadowColor.value}
              onChange={(colorValue) =>
                setAttributes({
                  boxShadowColor: colorValue !== undefined ? colorValue : "",
                })
              }
              resetColor={() => setAttributes({ boxShadowColor: "" })}
            />
          </Fragment>
          <Fragment>
            <RbeaRangeControl
              label={boxShadowHOffset.label}
              value={boxShadowHOffset.value}
              onChange={(value) =>
                setAttributes({
                  boxShadowHOffset: value !== undefined ? value : 0,
                })
              }
              min={-100}
              max={100}
            />
          </Fragment>
          <Fragment>
            <RbeaRangeControl
            label={boxShadowVOffset.label}
              value={boxShadowVOffset.value}
              onChange={(value) =>
                setAttributes({
                  boxShadowVOffset: value !== undefined ? value : 0,
                })
              }
              min={-100}
              max={100}
            />
          </Fragment>
          <Fragment>
            <RbeaRangeControl
              label={boxShadowBlur.label}
              value={boxShadowBlur.value}
              onChange={(value) =>
                setAttributes({
                  boxShadowBlur: value !== undefined ? value : 0,
                })
              }
              min={0}
              max={100}
            />
          </Fragment>
          <Fragment>
            <RbeaRangeControl
              label={boxShadowSpread.label}
              value={boxShadowSpread.value}
              onChange={(value) =>
                setAttributes({
                  boxShadowSpread: value !== undefined ? value : 0,
                })
              }
              min={0}
              max={100}
            />
          </Fragment>
          <Fragment>
            <RbeaTabRadioControl
              label = {boxShadowPosition.label}
              selectedValue={boxShadowPosition}
              options={[
                { value: "inset", label: __("Inset", "responsive-block-editor-addons") },
                { value: "outset", label: __("Outset", "responsive-block-editor-addons") },
              ]}
              onChange={(value) => setAttributes({ boxShadowPosition: value })}
            />
          </Fragment>
        </div>
      );
    return (
      <div className="res-typography-option-actions">
        {advancedControls}
      </div>
    );
  }
}

export default BoxShadowControl;
