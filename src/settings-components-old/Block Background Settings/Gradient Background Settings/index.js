/**
 * Box-Shadow reusable component.
 *
 */
const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { SelectControl, RangeControl } = wp.components;

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

      // Background Type Options
      const backgroundTypeOptions = [
          { value: "none", label: __("None", "responsive-block-editor-addons") },
          { value: "color", label: __("Color", "responsive-block-editor-addons") },
          {
              value: "gradient",
              label: __("Gradient", "responsive-block-editor-addons"),
          },
          { value: "image", label: __("Image", "responsive-block-editor-addons") },
          { value: "video", label: __("Video", "responsive-block-editor-addons") },
      ];

    var advancedControls;
      advancedControls = (
          <Fragment>
          <p>Gradient</p>
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
      );


    return (
      <div className="responsive-block-editor-addons-gradient-background-settings">
        {advancedControls}
      </div>
    );
  }
}

export default GradientBackgroundControl;
