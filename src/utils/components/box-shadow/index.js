/**
 * Box-Shadow reusable component.
 *
 */
const { __ } = wp.i18n;

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
    const { setAttributes } = this.props;

    setAttributes({ boxShadowColor: "" });
    setAttributes({ boxShadowHOffset: 0 });
    setAttributes({ boxShadowVOffset: 0 });
    setAttributes({ boxShadowBlur: 0 });
    setAttributes({ boxShadowSpread: 0 });
    setAttributes({ boxShadowPosition: "" });
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
    var boxShadowAdvancedControls;
    var resetBoxShadowAdvancedControls;
    if (this.state !== null && true === this.state.showAdvancedControls) {
      advancedControls = (
        <div className="responsive-block-editor-addons-box-shadow-advanced">
          <Fragment>
            <p className="responsive-block-editor-addons-setting-label">
              {boxShadowColor.label}
              <span className="components-base-control__label">
                <span
                  className="component-color-indicator"
                  style={{ backgroundColor: boxShadowColor.value }}
                ></span>
              </span>
            </p>
            <ColorPalette
              value={boxShadowColor.value}
              onChange={(colorValue) =>
                setAttributes({
                  boxShadowColor: colorValue !== undefined ? colorValue : "",
                })
              }
              allowReset
            />
          </Fragment>
          <Fragment>
            <h2>{boxShadowHOffset.label}</h2>
            <RangeControl
              value={boxShadowHOffset.value}
              onChange={(value) =>
                setAttributes({
                  boxShadowHOffset: value !== undefined ? value : 0,
                })
              }
              min={-100}
              max={100}
              allowReset
            />
          </Fragment>
          <Fragment>
            <h2>{boxShadowVOffset.label}</h2>
            <RangeControl
              value={boxShadowVOffset.value}
              onChange={(value) =>
                setAttributes({
                  boxShadowVOffset: value !== undefined ? value : 0,
                })
              }
              min={-100}
              max={100}
              allowReset
            />
          </Fragment>
          <Fragment>
            <h2>{boxShadowBlur.label}</h2>
            <RangeControl
              value={boxShadowBlur.value}
              onChange={(value) =>
                setAttributes({
                  boxShadowBlur: value !== undefined ? value : 0,
                })
              }
              min={0}
              max={100}
              allowReset
            />
          </Fragment>
          <Fragment>
            <h2>{boxShadowSpread.label}</h2>
            <RangeControl
              value={boxShadowSpread.value}
              onChange={(value) =>
                setAttributes({
                  boxShadowSpread: value !== undefined ? value : 0,
                })
              }
              min={0}
              max={100}
              allowReset
            />
          </Fragment>
          <Fragment>
            <SelectControl
              label={boxShadowPosition.label}
              value={boxShadowPosition.value}
              onChange={(value) => setAttributes({ boxShadowPosition: value })}
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
