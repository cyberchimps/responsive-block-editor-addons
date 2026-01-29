/**
 * Box-Shadow reusable component.
 *
 */
const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

import RbeaRangeControl from "../../../../../utils/components/rbea-range-control";
import RbeaColorControl from "../../../../../utils/components/rbea-color-control";
import RbeaBackgroundTypeControl from "../../../../../utils/components/rbea-background-type-control";
import RbeaAngleRangeControl from "../../../../../utils/components/rbea-angle-range-control";
import { GradientPicker } from "@wordpress/components";
import { hexToRgba } from "../../../../../utils/index.js";

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
              gradientButton,
              gradientButtonH,
          },
          setAttributes,
      } = this.props;

      // Button Background Type Options
      const buttonbackgroundTypeOptions = [
          { value: "color", label: __("Color", "responsive-block-editor-addons") },
          {
              value: "gradient",
              label: __("Gradient", "responsive-block-editor-addons"),
          },
      ];
      //Button Background Type Options on Hover
      const buttonHoverbackgroundTypeOptions = [
        { value: "color", label: __("Color", "responsive-block-editor-addons") },
        {
            value: "gradient",
            label: __("Gradient", "responsive-block-editor-addons"),
        },
      ];
      const buttonHoverbackgroundTypeAllOptions = [
        { value: "color", label: __("Color", "responsive-block-editor-addons") },
        {
            value: "gradient",
            label: __("Gradient", "responsive-block-editor-addons"),
        }
      ];

     const emptyColorControl = (
        <div className="responsive-block-editor-addons-empty-color-control"></div>
      );

     // Gradient options for WordPress GradientPicker (same as container)
        const gradientOptions = [
            {
                name: 'JShine',
                gradient:
                    'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
                slug: 'jshine',
            },
            {
                name: 'Moonlit Asteroid',
                gradient:
                    'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
                slug: 'moonlit-asteroid',
            },
            {
                name: 'Rastafarie',
                gradient:
                    'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
                slug: 'rastafari',
            },
        ];

        // Convert old gradient attributes to WordPress gradient format if needed
        const getGradientButtonValue = () => {
            // If gradient already exists (WordPress format), use it
            if (gradientButton) {
                return gradientButton;
            }
            
            // Otherwise, convert from old attributes to WordPress format
            if (buttonbackgroundColor1 || buttonbackgroundColor2) {
                const imgopacity = buttonopacity ? buttonopacity / 100 : 1;
                const color1 = hexToRgba(buttonbackgroundColor1 || "#fff", imgopacity);
                const color2 = hexToRgba(buttonbackgroundColor2 || "#fff", imgopacity);
                const location1 = buttoncolorLocation1 !== undefined ? buttoncolorLocation1 : 0;
                const location2 = buttoncolorLocation2 !== undefined ? buttoncolorLocation2 : 100;
                const direction = buttongradientDirection !== undefined ? buttongradientDirection : 90;
                
                return `linear-gradient(${direction}deg, ${color1} ${location1}%, ${color2} ${location2}%)`;
            }
            
            return undefined;
        };

        const getGradientButtonHValue = () => {
            // If gradient already exists (WordPress format), use it
            if (gradientButtonH) {
                return gradientButtonH;
            }
            
            // Otherwise, convert from old attributes to WordPress format
            if (buttonHbackgroundColor1 || buttonHbackgroundColor2) {
            const imgopacity = buttonHopacity ? buttonHopacity / 100 : 1;
            const color1 = hexToRgba(buttonHbackgroundColor1 || "#fff", imgopacity);
            const color2 = hexToRgba(buttonHbackgroundColor2 || "#fff", imgopacity);
            const location1 = buttonHcolorLocation1 !== undefined ? buttonHcolorLocation1 : 0;
            const location2 = buttonHcolorLocation2 !== undefined ? buttonHcolorLocation2 : 100;
            const direction = buttonHgradientDirection !== undefined ? buttonHgradientDirection : 90;
            
            return `linear-gradient(${direction}deg, ${color1} ${location1}%, ${color2} ${location2}%)`;
            }
            
            return undefined;
        };

        // Handle gradient change - save to new format
        const onGradientButtonChange = (value) => {
            setAttributes({ gradientButton: value });
        };

        const onGradientButtonHChange = (value) => {
            setAttributes({ gradientButtonH: value });
        };

    var advancedControls;
      advancedControls = (
        <>
            <TabPanel
                className="responsive-block-editor-addons-inspect-tabs 
                responsive-block-editor-addons-inspect-tabs-col-2  
                responsive-block-editor-addons-color-inspect-tabs"
                activeClass="active-tab"
                initialTabName="normal" // Set the default active tab here
                tabs={[
                    {
                        name: "empty-1",
                        title: __("", "responsive-block-editor-addons"),
                        className: "responsive-block-editor-addons-empty-tab",
                    },
                    {
                        name: "normal",
                        title: __("Normal", "responsive-block-editor-addons"),
                        className: "responsive-block-editor-addons-normal-tab",
                    },
                    {
                        name: "empty-2",
                        title: __("", "responsive-block-editor-addons"),
                        className: "responsive-block-editor-addons-empty-tab-middle",
                    },
                    {
                        name: "hover",
                        title: __("Hover", "responsive-block-editor-addons"),
                        className: "responsive-block-editor-addons-hover-tab",
                    },
                    {
                        name: "empty-3",
                        title: __("", "responsive-block-editor-addons"),
                        className: "responsive-block-editor-addons-empty-tab",
                    },
                ]}
            >
                {(tabName) => {
                    let tabout;
                    if ("hover" === tabName.name) {
                        tabout = (
                            <Fragment>
                                <Fragment>
                                    <RbeaColorControl
                                        label = {__("Text Color", "responsive-block-editor-addons")}
                                        colorValue={ctaHoverColor}
                                        onChange={(colorValue) =>
                                            this.props.setAttributes({ ctaHoverColor: colorValue })
                                        }
                                        resetColor={() => this.props.setAttributes({ ctaHoverColor: "" })}
                                    />
                                </Fragment>
                                <Fragment>
                                    <RbeaColorControl
                                        label = {__("Hover Border Color", "responsive-block-editor-addons")}
                                        colorValue={ctaHoverBorderColor}
                                        onChange={(colorValue) =>
                                            setAttributes({
                                                ctaHoverBorderColor:
                                                    colorValue !== undefined ? colorValue : "",
                                            })
                                        }
                                        resetColor={() => setAttributes({ ctaHoverBorderColor: "" })}
                                    />
                                </Fragment>
                                <RbeaBackgroundTypeControl
                                    label={__(
                                        "Type",
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
                                        <RbeaColorControl
                                            label = {__("Hover Background Color", "responsive-block-editor-addons")}
                                            colorValue={ctaHoverBackColor}
                                            onChange={(colorValue) =>
                                                this.props.setAttributes({ ctaHoverBackColor: colorValue })
                                            }
                                            resetColor={() => this.props.setAttributes({ ctaHoverBackColor: "" })}
                                        />
                                        { this.props.showBackColorOpacity == true && (
                                        <RbeaRangeControl
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
                                        <GradientPicker
                                            value={getGradientButtonHValue()}
                                            onChange={onGradientButtonHChange}
                                            gradients={gradientOptions}
                                        />
                                    </Fragment>
                                )}
                            </Fragment>
                        );
                    } else if ("normal" === tabName.name) {
                        tabout = (
                            <Fragment>
                                <RbeaColorControl
                                    label = {__("Text Color", "responsive-block-editor-addons")}
                                    colorValue={ctaColor}
                                    onChange={(value) =>
                                        this.props.setAttributes({
                                            ctaColor: value,
                                        })
                                    }
                                    resetColor={() => this.props.setAttributes({ ctaColor: "" })}
                                />
                                <Fragment>
                                    <RbeaColorControl
                                        label = {__("Border Color", "responsive-block-editor-addons")}
                                        colorValue={ctaBorderColor}
                                        onChange={(colorValue) =>
                                            setAttributes({
                                                ctaBorderColor:
                                                    colorValue !== undefined ? colorValue : "#000",
                                            })
                                        }
                                        resetColor={() => setAttributes({ ctaBorderColor: "" })}
                                    />
                                </Fragment>
                                <RbeaBackgroundTypeControl
                                    label={__(
                                        "Type",
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
                                        <RbeaColorControl
                                            label = {__("Background Color", "responsive-block-editor-addons")}
                                            colorValue={ctaBackColor}
                                            onChange={(colorValue) =>
                                                this.props.setAttributes({ ctaBackColor: colorValue })
                                            }
                                            resetColor={() =>  this.props.setAttributes({ ctaBackColor: "" })}
                                        />
                                        { this.props.showBackColorOpacity == true && (
                                            <RbeaRangeControl
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
                                        <GradientPicker
                                            value={getGradientButtonValue()}
                                            onChange={onGradientButtonChange}
                                            gradients={gradientOptions}
                                        />
                                    </Fragment>
                                )}
                            </Fragment>
                        );
                    } else {
                    tabout = emptyColorControl;
                    }
                    return <div>{tabout}</div>;
                }}
            </TabPanel>
            {this.props.showTextOpacity===true && (
                <RbeaRangeControl
                    label={__("Text Opacity", "responsive-block-editor-addons")}
                    value={ctaTextOpacity}
                    onChange={(value) => setAttributes({ ctaTextOpacity: value })}
                    min={0}
                    max={100}
                />
            )}
        </>
      );

    return (
      <div className="responsive-block-editor-addons-block-spacing-settings">
        {advancedControls}
      </div>
    );
  }
}

export default ButtonColorControl;
