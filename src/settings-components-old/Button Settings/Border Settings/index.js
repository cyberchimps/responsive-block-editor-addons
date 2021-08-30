/**
 * Box-Shadow reusable component.
 *
 */
const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { SelectControl, RangeControl, PanelBody } = wp.components;

// Extend component
const { Component, Fragment } = wp.element;

class ButtonBorderControl extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
      const {
          attributes: {
              ctaBorderStyle,
              ctaBorderWidth,
              ctaBorderColor,
              ctaBorderRadius,

              hoverctaBorderColor
          },
          setAttributes,
      } = this.props;

    var advancedControls;
      advancedControls = (
          <PanelBody
              title={__("Border Settings", "responsive-block-editor-addons")}
              initialOpen={false}
          >
              <SelectControl
                  label={__("Border Style", "responsive-block-editor-addons")}
                  value={ctaBorderStyle}
                  onChange={(value) => setAttributes({ ctaBorderStyle: value })}
                  options={[
                      {
                          value: "none",
                          label: __("None", "responsive-block-editor-addons"),
                      },
                      {
                          value: "solid",
                          label: __("Solid", "responsive-block-editor-addons"),
                      },
                      {
                          value: "dotted",
                          label: __("Dotted", "responsive-block-editor-addons"),
                      },
                      {
                          value: "dashed",
                          label: __("Dashed", "responsive-block-editor-addons"),
                      },
                      {
                          value: "double",
                          label: __("Double", "responsive-block-editor-addons"),
                      },
                      {
                          value: "groove",
                          label: __("Groove", "responsive-block-editor-addons"),
                      },
                      {
                          value: "inset",
                          label: __("Inset", "responsive-block-editor-addons"),
                      },
                      {
                          value: "outset",
                          label: __("Outset", "responsive-block-editor-addons"),
                      },
                      {
                          value: "ridge",
                          label: __("Ridge", "responsive-block-editor-addons"),
                      },
                  ]}
              />
              {"none" != ctaBorderStyle && (
                  <Fragment>
                      <RangeControl
                          label={__("Border Width", "responsive-block-editor-addons")}
                          value={ctaBorderWidth}
                          onChange={(value) =>
                              setAttributes({
                                  ctaBorderWidth: value !== undefined ? value : 2,
                              })
                          }
                          min={0}
                          max={50}
                          allowReset
                      />
                      <Fragment>
                          <p>
                              {__("Border Color", "responsive-block-editor-addons")}
                              <span className="components-base-control__label">
                      <span
                          className="component-color-indicator"
                          style={{ backgroundColor: ctaBorderColor }}
                      ></span>
                    </span>
                          </p>
                          <ColorPalette
                              value={ctaBorderColor}
                              onChange={(colorValue) =>
                                  setAttributes({
                                      ctaBorderColor:
                                          colorValue !== undefined ? colorValue : "#000",
                                  })
                              }
                              allowReset
                          />
                      </Fragment>

                      <RangeControl
                          label={__("Border Radius", "responsive-block-editor-addons")}
                          value={ctaBorderRadius}
                          onChange={(value) =>
                              setAttributes({
                                  ctaBorderRadius: value !== undefined ? value : 0,
                              })
                          }
                          min={0}
                          max={100}
                          allowReset
                      />

                      { this.props.showBorderHoverColor == true && (
                          <Fragment>
                              <p className="responsive-block-editor-addons-setting-label">
                                  {__("Border Hover Color", "responsive-block-editor-addons")}
                                  <span className="components-base-control__label">
                      <span
                          className="component-color-indicator"
                          style={{ backgroundColor: hoverctaBorderColor }}
                      ></span>
                    </span>
                              </p>
                              <ColorPalette
                                  value={hoverctaBorderColor}
                                  onChange={(colorValue) =>
                                      setAttributes({ hoverctaBorderColor: colorValue })
                                  }
                                  allowReset
                              />
                          </Fragment>
                          )}
                  </Fragment>
              )}
          </PanelBody>
      );

    return (
      <div className="responsive-block-editor-addons-block-border-settings">
        {advancedControls}
      </div>
    );
  }
}

export default ButtonBorderControl;
