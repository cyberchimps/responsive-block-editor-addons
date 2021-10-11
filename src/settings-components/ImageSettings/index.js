/**
 * Box-Shadow reusable component.
 *
 */
const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { SelectControl, RangeControl, TabPanel, Dashicon } = wp.components;

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
              imageWidth,
              imageWidthTablet,
              imageWidthMobile
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
                      { value: "full", label: __("Full Size", "responsive-block-editor-addons") },
                      { value: "thumbnail", label: __("Thumbnail", "responsive-block-editor-addons") },
                      { value: "medium", label: __("Medium", "responsive-block-editor-addons") },
                      { value: "large", label: __("Large", "responsive-block-editor-addons") },
                  ]}
                  onChange={(newImageSize) =>
                      setAttributes({ imageSize: newImageSize })
                  }
              />

              <TabPanel
                  className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                  activeClass="active-tab"
                  tabs={[
                      {
                          name: "desktop",
                          title: <Dashicon icon="desktop" />,
                          className:
                              " responsive-desktop-tab  responsive-responsive-tabs",
                      },
                      {
                          name: "tablet",
                          title: <Dashicon icon="tablet" />,
                          className: " responsive-tablet-tab  responsive-responsive-tabs",
                      },
                      {
                          name: "mobile",
                          title: <Dashicon icon="smartphone" />,
                          className: " responsive-mobile-tab  responsive-responsive-tabs",
                      },
                  ]}
              >
                  {(tab) => {
                      let tabout;

                      if ("mobile" === tab.name) {
                          tabout = (
                              <Fragment>
                                  <RangeControl
                                      label={__("Width Mobile", "responsive-block-editor-addons")}
                                      value={imageWidthMobile}
                                      onChange={(value) =>
                                          this.props.setAttributes({
                                              imageWidthMobile: value,
                                          })
                                      }
                                      min={0}
                                      max={500}
                                      step={1}
                                  />
                              </Fragment>
                          );
                      } else if ("tablet" === tab.name) {
                          tabout = (
                              <Fragment>
                                  <RangeControl
                                      label={__("Width Tablet", "responsive-block-editor-addons")}
                                      value={imageWidthTablet}
                                      onChange={(value) =>
                                          this.props.setAttributes({
                                              imageWidthTablet: value,
                                          })
                                      }
                                      min={0}
                                      max={500}
                                      step={1}
                                  />
                              </Fragment>
                          );
                      } else {
                          tabout = (
                              <Fragment>
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
                      }
                      return <div>{tabout}</div>;
                  }}
              </TabPanel>
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
