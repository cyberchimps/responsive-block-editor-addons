/**
 * Box-Shadow reusable component.
 *
 */
const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { SelectControl, RangeControl } = wp.components;

// Extend component
const { Component, Fragment } = wp.element;

class ColorBackgroundControl extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
      const {
          attributes: {
              backgroundColor
          },
          setAttributes,
      } = this.props;


    var advancedControls;
      advancedControls = (
          <Fragment>
      <p className="responsive-setting-label">
          {__("Background Color", "responsive-block-editor-addons")}
      <span className="components-base-control__label">
          <span
          className="component-color-indicator"
          style={{ backgroundColor: backgroundColor }}
      ></span>
      </span>
      </p>
      <ColorPalette
          value={backgroundColor}
          onChange={(colorValue) =>
          setAttributes({ backgroundColor: colorValue })
      }
          allowReset
          />

          </Fragment>
      );


    return (
      <div className="responsive-block-editor-addons-color-background-settings">
        {advancedControls}
      </div>
    );
  }
}

export default ColorBackgroundControl;
