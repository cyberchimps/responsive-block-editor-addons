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
      controlKey, 
      boxShadowColor,
      boxShadowHOffset,
      boxShadowVOffset,
      boxShadowBlur,
      boxShadowSpread,
      boxShadowPosition,
    } = this.props;

    const setAttr = (key, value) => {
      setAttributes({ [`${controlKey}${key}`]: value });
    };

    return (
      <div className="res-typography-option-actions">
        <Fragment>
          <RbeaColorControl
            label={boxShadowColor.label}
            colorValue={boxShadowColor.value}
            onChange={(colorValue) => setAttr("Color", colorValue || "")}
            resetColor={() => setAttr("Color", "")}
          />
        </Fragment>
        <Fragment>
          <RbeaRangeControl
            label={boxShadowHOffset.label}
            value={boxShadowHOffset.value}
            onChange={(value) => setAttr("HOffset", value ?? 0)}
            min={-100}
            max={100}
          />
        </Fragment>
        <Fragment>
          <RbeaRangeControl
            label={boxShadowVOffset.label}
            value={boxShadowVOffset.value}
            onChange={(value) => setAttr("VOffset", value ?? 0)}
            min={-100}
            max={100}
          />
        </Fragment>
        <Fragment>
          <RbeaRangeControl
            label={boxShadowBlur.label}
            value={boxShadowBlur.value}
            onChange={(value) => setAttr("Blur", value ?? 0)}
            min={0}
            max={100}
          />
        </Fragment>
        <Fragment>
          <RbeaRangeControl
            label={boxShadowSpread.label}
            value={boxShadowSpread.value}
            onChange={(value) => setAttr("Spread", value ?? 0)}
            min={0}
            max={100}
          />
        </Fragment>
        <Fragment>
          <RbeaTabRadioControl
            label={boxShadowPosition.label}
            value={boxShadowPosition.value}
            options={[
              { value: "inset", label: __("Inset", "responsive-block-editor-addons") },
              { value: "outset", label: __("Outset", "responsive-block-editor-addons") },
            ]}
            onChange={(value) => setAttr("Position", value)}
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
