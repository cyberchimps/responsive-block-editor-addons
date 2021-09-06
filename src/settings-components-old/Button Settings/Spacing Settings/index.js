/**
 * Box-Shadow reusable component.
 *
 */
const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { SelectControl, RangeControl, PanelBody } = wp.components;

// Extend component
const { Component, Fragment } = wp.element;

class ButtonSpacingControl extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
      const {
          attributes: {
              ctaHpadding,
              ctaVpadding,
              vMargin,
              hMargin
          },
          setAttributes,
      } = this.props;

    var advancedControls;
      advancedControls = (
          <PanelBody
              title={__("Spacing Settings", "responsive-block-editor-addons")}
              initialOpen={false}
          >
              <RangeControl
                  label={__("Horizontal Padding", "responsive-block-editor-addons")}
                  value={ctaHpadding}
                  onChange={(value) =>
                      setAttributes({
                          ctaHpadding: value !== undefined ? value : 20,
                      })
                  }
                  min={0}
                  max={100}
                  allowReset
              />
              <RangeControl
                  label={__("Vertical Padding", "responsive-block-editor-addons")}
                  value={ctaVpadding}
                  onChange={(value) =>
                      setAttributes({
                          ctaVpadding: value !== undefined ? value : 10,
                      })
                  }
                  min={0}
                  max={100}
                  allowReset
              />
              { this.props.showMarginControls == true && (
                  <Fragment>
                  <RangeControl
                      label={__("Vertical Margin", "responsive-block-editor-addons")}
                      value={vMargin}
                      onChange={(value) => {
                          setAttributes({ vMargin: value });
                      }}
                      min={0}
                      max={200}
                  />
                  <RangeControl
                  label={__("Horizontal Margin", "responsive-block-editor-addons")}
                  value={hMargin}
                  onChange={(value) => {
                  setAttributes({ hMargin: value });
              }}
                  min={0}
                  max={200}
                  />
                  </Fragment>
              )}
          </PanelBody>
      );

    return (
      <div className="responsive-block-editor-addons-block-spacing-settings">
        {advancedControls}
      </div>
    );
  }
}

export default ButtonSpacingControl;
