/**
 * Box-Shadow reusable component.
 *
 */
const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { SelectControl, RangeControl, PanelBody, TabPanel } = wp.components;

// Extend component
const { Component, Fragment } = wp.element;

class ButtonColorControl extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
      const {
          attributes: {
              ctaHoverColor,
              ctaHoverBorderColor,
              buttonHbackgroundType,
              ctaHoverBackColor,
              buttonHbackgroundColor1,
              buttonHbackgroundColor2,
              buttonHcolorLocation1,
              buttonHcolorLocation2,
              buttonHgradientDirection,

              ctaColor,
              ctaBorderColor,
              buttonbackgroundType,
              ctaBackColor,
              buttonbackgroundColor1,
              buttonbackgroundColor2,
              buttoncolorLocation1,
              buttoncolorLocation2,
              buttongradientDirection,

              buttonopacity,
              buttonHopacity,

              ctaTextOpacity,
          },
          setAttributes,
      } = this.props;

      // Button Background Type Options
      const buttonbackgroundTypeOptions = [
          { value: "none", label: __("None", "responsive-block-editor-addons") },
          { value: "color", label: __("Color", "responsive-block-editor-addons") },
          {
              value: "gradient",
              label: __("Gradient", "responsive-block-editor-addons"),
          },
      ];
      //Button Background Type Options on Hover
      const buttonHoverbackgroundTypeOptions = [
        { value: "none", label: __("None", "responsive-block-editor-addons") },
        { value: "color", label: __("Color", "responsive-block-editor-addons") },
      ];
      const buttonHoverbackgroundTypeAllOptions = [
        { value: "none", label: __("None", "responsive-block-editor-addons") },
        { value: "color", label: __("Color", "responsive-block-editor-addons") },
        {
            value: "gradient",
            label: __("Gradient", "responsive-block-editor-addons"),
        }
      ];

    var advancedControls;
      advancedControls = (
          <PanelBody
              title={__("Color Settings", "responsive-block-editor-addons")}
              initialOpen={false}
          >
              <TabPanel
                  className="rbea-inspect-tabs rbea-inspect-tabs-col-2"
                  activeClass="active-tab"
                  tabs={[
                      {
                          name: "normal",
                          title: __("Normal", "responsive-block-editor-addons"),
                          className: "rbea-normal-tab",
                      },
                      {
                          name: "hover",
                          title: __("Hover", "responsive-block-editor-addons"),
                          className: "rbea-focus-tab",
                      },
                  ]}
              >
                  {(tabName) => {
                      let tabout;
                      if ("hover" === tabName.name) {
                          tabout = (
                              <Fragment>
                                  <Fragment>
                                      <p className="responsive-setting-label">
                                          {__("Text Color", "responsive-block-editor-addons")}
                                          <span className="components-base-control__label">
                          <span
                              className="component-color-indicator"
                              style={{
                                  backgroundColor: ctaHoverColor,
                              }}
                          ></span>
                        </span>
                                      </p>
                                      <ColorPalette
                                          value={ctaHoverColor}
                                          onChange={(value) =>
                                              this.props.setAttributes({
                                                  ctaHoverColor: value,
                                              })
                                          }
                                          allowReset
                                      />
                                  </Fragment>
                                  <Fragment>
                                      <p>
                                          {__("Hover Border Color", "responsive-block-editor-addons")}
                                          <span className="components-base-control__label">
                  <span
                      className="component-color-indicator"
                      style={{ backgroundColor: ctaHoverBorderColor }}
                  ></span>
                </span>
                                      </p>
                                      <ColorPalette
                                          value={ctaHoverBorderColor}
                                          onChange={(colorValue) =>
                                              setAttributes({
                                                  ctaHoverBorderColor:
                                                      colorValue !== undefined ? colorValue : "",
                                              })
                                          }
                                          allowReset
                                      />
                                  </Fragment>
                                  <SelectControl
                                      label={__(
                                          "Background Type",
                                          "responsive-block-editor-addons"
                                      )}
                                      value={buttonHbackgroundType}
                                      onChange={(value) =>
                                          setAttributes({ buttonHbackgroundType: value })
                                      }
                                      options= {this.props.showGradientHover? buttonHoverbackgroundTypeAllOptions : buttonHoverbackgroundTypeOptions}
                                  />
                                  {"color" == buttonHbackgroundType && (
                                      <Fragment>
                                          <p className="responsive-setting-label">
                                              {__("Hover Background Color", "responsive-block-editor-addons")}
                                              <span className="components-base-control__label">
                            <span
                                className="component-color-indicator"
                                style={{
                                    backgroundColor: ctaHoverBackColor,
                                }}
                            ></span>
                          </span>
                                          </p>
                                          <ColorPalette
                                              value={ctaHoverBackColor}
                                              onChange={(value) =>
                                                  this.props.setAttributes({
                                                      ctaHoverBackColor: value,
                                                  })
                                              }
                                              allowReset
                                          />
                                          { this.props.showBackColorOpacity == true && (
                                          <RangeControl
                                              label={__(
                                                  "Opacity",
                                                  "responsive-block-editor-addons"
                                              )}
                                              value={buttonHopacity}
                                              onChange={(value) =>
                                                  setAttributes({
                                                      buttonHopacity:
                                                          value !== undefined ? value : 20,
                                                  })
                                              }
                                              min={0}
                                              max={100}
                                              allowReset
                                          />
                                          )}
                                      </Fragment>
                                  )}
                                  {"gradient" == buttonHbackgroundType && (
                                      <Fragment>
                                          <p className="responsive-setting-label">
                                              {__("Color 1", "responsive-block-editor-addons")}
                                              <span className="components-base-control__label">
                            <span
                                className="component-color-indicator"
                                style={{
                                    backgroundColor: buttonHbackgroundColor1,
                                }}
                            ></span>
                          </span>
                                          </p>
                                          <ColorPalette
                                              value={buttonHbackgroundColor1}
                                              onChange={(colorValue) =>
                                                  setAttributes({
                                                      buttonHbackgroundColor1: colorValue,
                                                  })
                                              }
                                              allowReset
                                          />

                                          <p className="responsive-setting-label">
                                              {__("Color 2", "responsive-block-editor-addons")}
                                              <span className="components-base-control__label">
                            <span
                                className="component-color-indicator"
                                style={{
                                    backgroundColor: buttonHbackgroundColor2,
                                }}
                            ></span>
                          </span>
                                          </p>
                                          <ColorPalette
                                              value={buttonHbackgroundColor2}
                                              onChange={(colorValue) =>
                                                  setAttributes({
                                                      buttonHbackgroundColor2: colorValue,
                                                  })
                                              }
                                              allowReset
                                          />
                                          <RangeControl
                                              label={__(
                                                  "Color Location 1",
                                                  "responsive-block-editor-addons"
                                              )}
                                              value={buttonHcolorLocation1}
                                              min={0}
                                              max={100}
                                              onChange={(value) =>
                                                  setAttributes({ buttonHcolorLocation1: value })
                                              }
                                          />
                                          <RangeControl
                                              label={__(
                                                  "Color Location 2",
                                                  "responsive-block-editor-addons"
                                              )}
                                              value={buttonHcolorLocation2}
                                              min={0}
                                              max={100}
                                              onChange={(value) =>
                                                  setAttributes({ buttonHcolorLocation2: value })
                                              }
                                          />
                                          <RangeControl
                                              label={__(
                                                  "Gradient Direction",
                                                  "responsive-block-editor-addons"
                                              )}
                                              value={buttonHgradientDirection}
                                              min={0}
                                              max={100}
                                              onChange={(value) =>
                                                  setAttributes({ buttonHgradientDirection: value })
                                              }
                                          />
                                      </Fragment>
                                  )}
                              </Fragment>
                          );
                      } else {
                          tabout = (
                              <Fragment>
                                  <p className="responsive-setting-label">
                                      {__("Text Color", "responsive-block-editor-addons")}
                                      <span className="components-base-control__label">
                        <span
                            className="component-color-indicator"
                            style={{
                                backgroundColor: ctaColor,
                            }}
                        ></span>
                      </span>
                                  </p>
                                  <ColorPalette
                                      value={ctaColor}
                                      onChange={(value) =>
                                          this.props.setAttributes({
                                              ctaColor: value,
                                          })
                                      }
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
                                  <SelectControl
                                      label={__(
                                          "Background Type",
                                          "responsive-block-editor-addons"
                                      )}
                                      value={buttonbackgroundType}
                                      onChange={(value) =>
                                          setAttributes({ buttonbackgroundType: value })
                                      }
                                      options={buttonbackgroundTypeOptions}
                                  />
                                  {"color" == buttonbackgroundType && (
                                      <Fragment>
                                          <p className="responsive-setting-label">
                                              {__("Background Color", "responsive-block-editor-addons")}
                                              <span className="components-base-control__label">
                            <span
                                className="component-color-indicator"
                                style={{
                                    backgroundColor: ctaBackColor,
                                }}
                            ></span>
                          </span>
                                          </p>
                                          <ColorPalette
                                              value={ctaBackColor}
                                              onChange={(value) =>
                                                  this.props.setAttributes({
                                                      ctaBackColor: value,
                                                  })
                                              }
                                              allowReset
                                          />
                                          { this.props.showBackColorOpacity == true && (
                                              <RangeControl
                                                  label={__(
                                                      "Opacity",
                                                      "responsive-block-editor-addons"
                                                  )}
                                                  value={buttonopacity}
                                                  onChange={(value) =>
                                                      setAttributes({
                                                          buttonopacity: value !== undefined ? value : 20,
                                                      })
                                                  }
                                                  min={0}
                                                  max={100}
                                                  allowReset
                                              />
                                          )}
                                      </Fragment>
                                  )}
                                  {"gradient" == buttonbackgroundType && (
                                      <Fragment>
                                          <p className="responsive-setting-label">
                                              {__("Color 1", "responsive-block-editor-addons")}
                                              <span className="components-base-control__label">
                            <span
                                className="component-color-indicator"
                                style={{
                                    backgroundColor: buttonbackgroundColor1,
                                }}
                            ></span>
                          </span>
                                          </p>
                                          <ColorPalette
                                              value={buttonbackgroundColor1}
                                              onChange={(colorValue) =>
                                                  setAttributes({
                                                      buttonbackgroundColor1: colorValue,
                                                  })
                                              }
                                              allowReset
                                          />

                                          <p className="responsive-setting-label">
                                              {__("Color 2", "responsive-block-editor-addons")}
                                              <span className="components-base-control__label">
                            <span
                                className="component-color-indicator"
                                style={{
                                    backgroundColor: buttonbackgroundColor2,
                                }}
                            ></span>
                          </span>
                                          </p>
                                          <ColorPalette
                                              value={buttonbackgroundColor2}
                                              onChange={(colorValue) =>
                                                  setAttributes({
                                                      buttonbackgroundColor2: colorValue,
                                                  })
                                              }
                                              allowReset
                                          />
                                          <RangeControl
                                              label={__(
                                                  "Color Location 1",
                                                  "responsive-block-editor-addons"
                                              )}
                                              value={buttoncolorLocation1}
                                              min={0}
                                              max={100}
                                              onChange={(value) =>
                                                  setAttributes({ buttoncolorLocation1: value })
                                              }
                                          />
                                          <RangeControl
                                              label={__(
                                                  "Color Location 2",
                                                  "responsive-block-editor-addons"
                                              )}
                                              value={buttoncolorLocation2}
                                              min={0}
                                              max={100}
                                              onChange={(value) =>
                                                  setAttributes({ buttoncolorLocation2: value })
                                              }
                                          />
                                          <RangeControl
                                              label={__(
                                                  "Gradient Direction",
                                                  "responsive-block-editor-addons"
                                              )}
                                              value={buttongradientDirection}
                                              min={0}
                                              max={100}
                                              onChange={(value) =>
                                                  setAttributes({ buttongradientDirection: value })
                                              }
                                          />
                                      </Fragment>
                                  )}
                              </Fragment>
                          );
                      }
                      return <div>{tabout}</div>;
                  }}
              </TabPanel>
              {this.props.showTextOpacity===true && (
              <Fragment>
                <RangeControl
                    label={__("Text Opacity", "responsive-block-editor-addons")}
                    value={ctaTextOpacity}
                    onChange={(value) => setAttributes({ ctaTextOpacity: value })}
                    min={0}
                    max={100}
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

export default ButtonColorControl;
