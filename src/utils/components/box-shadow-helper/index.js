import { camelCase } from "lodash";
import RbeaRangeControl from "../rbea-range-control";
import RbeaColorControl from "../rbea-color-control";
import RbeaTabRadioControl from "../rbea-tab-radio-control";

/**
 * Box-Shadow reusable component.
 *
 */
const { __, sprintf } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { Button, SelectControl, RangeControl, Dashicon } = wp.components;


// Extend component
const { Component, Fragment } = wp.element;

class BoxShadowControl extends Component {
  constructor() {
    super(...arguments);
    this.onAdvancedControlClick = this.onAdvancedControlClick.bind(this);
    this.onAdvancedControlReset = this.onAdvancedControlReset.bind(this);
  }
  onAdvancedControlClick() {
    let control = true;
    let label = __("Hide Advanced", "responsive-block-editor-addons");

    if (this.state !== null && this.state.showAdvancedControls === true) {
      control = false;
      label = __("Advanced", "responsive-block-editor-addons");
    }

    this.setState({
      showAdvancedControls: control,
      showAdvancedControlsLabel: label,
    });
  }
  onAdvancedControlReset() {
    const { setAttributes, attrNameTemplate } = this.props;
    const getAttrName = (attrName) =>
      camelCase(sprintf(this.props.attrNameTemplate, attrName));
    setAttributes({
      [getAttrName("boxShadowColor")]: "",
    });
    setAttributes({
      [getAttrName("boxShadowHOffset")]: 0,
    });
    setAttributes({
      [getAttrName("boxShadowVOffset")]: 0,
    });
    setAttributes({
      [getAttrName("boxShadowBlur")]: 0,
    });
    setAttributes({
      [getAttrName("boxShadowSpread")]: 0,
    });
    setAttributes({
      [getAttrName("boxShadowPosition")]: "",
    });
    this.setState({
      showAdvancedControls: false,
    });
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

    const getAttrName = (attrName) =>
      camelCase(sprintf(this.props.attrNameTemplate, attrName));

    var advancedControls;
    var boxShadowAdvancedControls;
    var resetBoxShadowAdvancedControls;
    if (this.state !== null && true === this.state.showAdvancedControls) {
      advancedControls = (
        <div className="responsive-block-editor-addons-box-shadow-advanced">
          <Fragment>
            <RbeaColorControl
              label = {__("Color", "responsive-block-editor-addons")}
              colorValue={boxShadowColor.value}
              onChange={(colorValue) =>
                setAttributes({
                  [getAttrName("boxShadowColor")]:
                    colorValue !== undefined ? colorValue : "#cccccc",
                })
              }
              resetColor={() =>
                setAttributes({
                  [getAttrName("boxShadowColor")]:""
                })
              }
            />
          </Fragment>
          <Fragment>
            <h2>{__("Horizontal", "responsive-block-editor-addons")}</h2>
            <RbeaRangeControl
              value={boxShadowHOffset.value}
              onChange={(value) =>
                setAttributes({
                  [getAttrName("boxShadowHOffset")]:
                    value !== undefined ? value : 0,
                })
              }
              min={-100}
              max={100}
              allowReset
            />
          </Fragment>
          <Fragment>
            <h2>{__("Vertical", "responsive-block-editor-addons")}</h2>
            <RbeaRangeControl
              value={boxShadowVOffset.value}
              onChange={(value) =>
                setAttributes({
                  [getAttrName("boxShadowVOffset")]:
                    value !== undefined ? value : 0,
                })
              }
              min={-100}
              max={100}
              allowReset
            />
          </Fragment>
          <Fragment>
            <h2>{__("Blur", "responsive-block-editor-addons")}</h2>
            <RbeaRangeControl
              value={boxShadowBlur.value}
              onChange={(value) =>
                setAttributes({
                  [getAttrName("boxShadowBlur")]:
                    value !== undefined ? value : 6,
                })
              }
              min={0}
              max={100}
              allowReset
            />
          </Fragment>
          <Fragment>
            <h2>{__("Spread", "responsive-block-editor-addons")}</h2>
            <RbeaRangeControl
              value={boxShadowSpread.value}
              onChange={(value) =>
                setAttributes({
                  [getAttrName("boxShadowSpread")]:
                    value !== undefined ? value : 1,
                })
              }
              min={0}
              max={100}
              allowReset
            />
          </Fragment>
          <Fragment>
            <RbeaTabRadioControl
              label={__("Position", "responsive-block-editor-addons")}
              value={boxShadowPosition.value}
              onChange={(value) =>
                setAttributes({ [getAttrName("boxShadowPosition")]: value })
              }
              options={[
                { value: "inset", label: __("Inset", "responsive-block-editor-addons") },
                { value: "outset", label: __("Outset", "responsive-block-editor-addons") },
              ]}
            />
          </Fragment>
        </div>
      );
    }
    resetBoxShadowAdvancedControls = (
      <Button
        className="responsive-block-editor-addons-size-btn responsive-block-editor-addons-typography-reset-btn"
        isSmall
        aria-pressed={this.state !== null}
        onClick={this.onAdvancedControlReset}
      >
        <Dashicon icon="image-rotate" />
      </Button>
    );

    boxShadowAdvancedControls = (
      <Button
        className="responsive-block-editor-addons-size-btn responsive-block-editor-addons-typography-control-btn"
        isSmall
        aria-pressed={this.state !== null}
        onClick={this.onAdvancedControlClick}
      >
        <Dashicon icon="admin-tools" />
      </Button>
    );

    return (
      <div className="res-typography-option-actions">
        <span>{this.props.label}</span>
        {boxShadowAdvancedControls}
        {resetBoxShadowAdvancedControls}
        {advancedControls}
      </div>
    );
  }
}

export default BoxShadowControl;
