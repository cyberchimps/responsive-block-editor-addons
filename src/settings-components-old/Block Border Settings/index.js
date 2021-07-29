/**
 * Box-Shadow reusable component.
 *
 */
const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { SelectControl, RangeControl } = wp.components;

// Extend component
const { Component, Fragment } = wp.element;

class BlockBorderControl extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
      const {
          attributes: {
              blockBorderStyle,
              blockBorderWidth,
              blockBorderRadius,
              blockBorderColor,
          },
          setAttributes,
      } = this.props;
    var advancedControls;
      advancedControls = (
          <Fragment>
          <SelectControl
        label={__("Border Style")}
        value={blockBorderStyle}
        onChange={(value) => setAttributes({ blockBorderStyle: value })}
        options={[
                { value: "none", label: __("None") },
        { value: "solid", label: __("Solid") },
        { value: "dotted", label: __("Dotted") },
        { value: "dashed", label: __("Dashed") },
        { value: "double", label: __("Double") },
        { value: "groove", label: __("Groove") },
        { value: "inset", label: __("Inset") },
        { value: "outset", label: __("Outset") },
        { value: "ridge", label: __("Ridge") },
    ]}
        />
        {"none" != blockBorderStyle && (
        <RangeControl
            label={__("Border Width")}
            value={blockBorderWidth}
            onChange={(value) =>
            setAttributes({
                blockBorderWidth: value !== undefined ? value : 1,
            })
        }
            min={0}
            max={50}
            allowReset
            />
        )}
    <RangeControl
        label={__("Border Radius")}
        value={blockBorderRadius}
        onChange={(value) =>
        setAttributes({
            blockBorderRadius: value !== undefined ? value : "",
        })
    }
        min={0}
        max={1000}
        allowReset
        />
        {"none" != blockBorderStyle && (
        <Fragment>
        <p className="responsive-setting-label">
            {__("Border Color")}
    <span className="components-base-control__label">
            <span
        className="component-color-indicator"
        style={{ backgroundColor: blockBorderColor }}
    ></span>
        </span>
        </p>
        <ColorPalette
        value={blockBorderColor}
        onChange={(colorValue) =>
        setAttributes({ blockBorderColor: colorValue })
    }
        allowReset
        />
        </Fragment>
    )}
    </Fragment>
      );


    return (
      <div className="responsive-block-editor-addons-block-border-settings">
        {advancedControls}
      </div>
    );
  }
}

export default BlockBorderControl;
