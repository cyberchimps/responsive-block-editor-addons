/**
 * Box-Shadow reusable component.
 *
 */
const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { SelectControl, RangeControl, PanelBody, TabPanel, Dashicon } = wp.components;

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
              ctaHpaddingTablet,
              ctaHpaddingMobile,
              ctaVpadding,
              ctaVpaddingTablet,
              ctaVpaddingMobile,
              vMargin,
              vMarginTablet,
              vMarginMobile,
              hMargin,
              hMarginTablet,
              hMarginMobile,
          },
          setAttributes,
      } = this.props;

    var advancedControls;
      advancedControls = (
          <PanelBody
              title={__("Spacing Settings", "responsive-block-editor-addons")}
              initialOpen={false}
          >
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
                    label={__(
                      "Horizontal Padding",
                      "responsive-block-editor-addons"
                    )}
                    value={ctaHpaddingMobile}
                    onChange={(value) => {
                      setAttributes({ ctaHpaddingMobile: value });
                    }}
                    min={0}
                    max={100}
                    allowReset
                  />
                </Fragment>
              );
            } else if ("tablet" === tab.name) {
              tabout = (
                <Fragment>
                  <RangeControl
                    label={__(
                      "Horizontal Padding",
                      "responsive-block-editor-addons"
                    )}
                    value={ctaHpaddingTablet}
                    onChange={(value) => {
                      setAttributes({ ctaHpaddingTablet: value });
                    }}
                    min={0}
                    max={100}
                    allowReset
                  />
                </Fragment>
              );
            } else {
              tabout = (
                <Fragment>
                  <RangeControl
                    label={__(
                      "Horizontal Padding",
                      "responsive-block-editor-addons"
                    )}
                    value={ctaHpadding}
                    onChange={(value) => {
                      setAttributes({ ctaHpadding: value });
                    }}
                    min={0}
                    max={100}
                    allowReset
                  />
                </Fragment>
              );
            }
            return <div>{tabout}</div>;
          }}
        </TabPanel>
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
                      label={__(
                        "Vertical Padding",
                        "responsive-block-editor-addons"
                      )}
                      value={ctaVpaddingMobile}
                      onChange={(value) => {
                        setAttributes({ ctaVpaddingMobile: value });
                      }}
                      min={0}
                      max={100}
                      allowReset
                    />
                  </Fragment>
                );
              } else if ("tablet" === tab.name) {
                tabout = (
                  <Fragment>
                    <RangeControl
                      label={__(
                        "Vertical Padding",
                        "responsive-block-editor-addons"
                      )}
                      value={ctaVpaddingTablet}
                      onChange={(value) => {
                        setAttributes({ ctaVpaddingTablet: value });
                      }}
                      min={0}
                      max={100}
                      allowReset
                    />
                  </Fragment>
                );
              } else {
                tabout = (
                  <Fragment>
                    <RangeControl
                      label={__(
                        "Vertical Padding",
                        "responsive-block-editor-addons"
                      )}
                      value={ctaVpadding}
                      onChange={(value) => {
                        setAttributes({ ctaVpadding: value });
                      }}
                      min={0}
                      max={100}
                      allowReset
                    />
                  </Fragment>
                );
              }

              return <div>{tabout}</div>;
            }}
          </TabPanel>
          { this.props.showMarginControls == true && (
            <Fragment>
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
                            label={__(
                                "Vertical Margin",
                                "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={200}
                            allowReset
                            value={vMarginMobile}
                            onChange={(value) =>
                                setAttributes({
                                vMarginMobile: value,
                                })
                            }
                            />
                        </Fragment>
                        );
                    } else if ("tablet" === tab.name) {
                        tabout = (
                        <Fragment>
                            <RangeControl
                            label={__(
                                "Vertical Margin",
                                "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={200}
                            allowReset
                            value={vMarginTablet}
                            onChange={(value) =>
                                setAttributes({
                                vMarginTablet: value,
                                })
                            }
                            />
                        </Fragment>
                        );
                    } else {
                        tabout = (
                        <Fragment>
                            <RangeControl
                            label={__(
                                "Vertical Margin",
                                "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={200}
                            allowReset
                            value={vMargin}
                            onChange={(value) =>
                                setAttributes({
                                vMargin: value,
                                })
                            }
                            />
                        </Fragment>
                        );
                    }
                    return <div>{tabout}</div>;
                    }}
                </TabPanel>
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
                            label={__(
                                "Horizontal Margin",
                                "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={200}
                            allowReset
                            value={hMarginMobile}
                            onChange={(value) =>
                                setAttributes({
                                hMarginMobile: value,
                                })
                            }
                            />
                        </Fragment>
                        );
                    } else if ("tablet" === tab.name) {
                        tabout = (
                        <Fragment>
                            <RangeControl
                            label={__(
                                "Horizontal Margin",
                                "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={200}
                            allowReset
                            value={hMarginTablet}
                            onChange={(value) =>
                                setAttributes({
                                hMarginTablet: value,
                                })
                            }
                            />
                        </Fragment>
                        );
                    } else {
                        tabout = (
                        <Fragment>
                            <RangeControl
                            label={__(
                                "Horizontal Margin",
                                "responsive-block-editor-addons"
                            )}
                            min={0}
                            max={200}
                            allowReset
                            value={hMargin}
                            onChange={(value) =>
                                setAttributes({
                                hMargin: value,
                                })
                            }
                            />
                        </Fragment>
                        );
                    }
                    return <div>{tabout}</div>;
                    }}
                </TabPanel>
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
