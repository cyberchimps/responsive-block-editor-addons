/**
 * Box-Shadow reusable component.
 *
 */
const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { SelectControl, RangeControl } = wp.components;

// Extend component
const { Component, Fragment } = wp.element;

class ImageSettingsControl extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
      const {
          attributes: {
              imageShape,
              imageSize,
              imageWidth
          },
          setAttributes,
      } = this.props;

      const imageShapeOptions = [
          {
              value: "default",
              label: __("Default", "responsive-block-editor-addons"),
              shortName: __("Default", "responsive-block-editor-addons"),
          },
          {
              value: "circle",
              label: __("Circle", "responsive-block-editor-addons"),
              shortName: __("Circle", "responsive-block-editor-addons"),
          },
          {
              value: "square",
              label: __("Square", "responsive-block-editor-addons"),
              shortName: __("Square", "responsive-block-editor-addons"),
          },
          {
              value: "blob",
              label: __("Blob", "responsive-block-editor-addons"),
              shortName: __("Blob", "responsive-block-editor-addons"),
          },
      ];
    var advancedControls;
      advancedControls = (
          <Fragment>
              <SelectControl
                  label={__("Shape", "responsive-block-editor-addons")}
                  value={imageShape}
                  options={imageShapeOptions}
                  onChange={(newImageShape) =>
                      setAttributes({ imageShape: newImageShape })
                  }
              />
              <SelectControl
                  label={__("Size", "responsive-block-editor-addons")}
                  value={imageSize}
                  options={[
                      { value: "full", label: __("Full Size") },
                      { value: "thumbnail", label: __("Thumbnail") },
                      { value: "medium", label: __("Medium") },
                      { value: "large", label: __("Large") },
                  ]}
                  onChange={(newImageSize) =>
                      setAttributes({ imageSize: newImageSize })
                  }
              />
              <RangeControl
                  label={__("Width", "responsive-block-editor-addons")}
                  value={imageWidth}
                  onChange={(value) =>
                      this.props.setAttributes({
                          imageWidth: value,
                      })
                  }
                  min={0}
                  max={500}
                  step={1}
              />
    </Fragment>
      );


    return (
      <div className="responsive-block-editor-addons-block-border-settings">
        {advancedControls}
      </div>
    );
  }
}

export default ImageSettingsControl;
