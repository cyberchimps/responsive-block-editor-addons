/**
 * Box-Shadow reusable component.
 *
 */
import BoxShadowControl from "../../../../../utils/components/box-shadow";
import BoxShadowControlHelper from "../../../../../utils/components/box-shadow-helper";
import RbeaRangeControl from "../../../../../utils/components/rbea-range-control";
import RbeaColorControl from "../../../../../utils/components/rbea-color-control";
import RbeaTabRadioControl from "../../../../../utils/components/rbea-tab-radio-control";
import RbeaBorderStyleTabControl from "../../../../../utils/components/rbea-border-style-tab-control";
import RbeaBorderRadiusControl from "../../../../../settings-components/RbeaBorderRadiusControl";

const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { SelectControl, RangeControl } = wp.components;

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
                ctaBorderRadius,
                ctaTopRadius,
                ctaRightRadius,
                ctaBottomRadius,
                ctaLeftRadius,
                ctaTopRadiusTablet,
                ctaRightRadiusTablet,
                ctaBottomRadiusTablet,
                ctaLeftRadiusTablet,
                ctaTopRadiusMobile,
                ctaRightRadiusMobile,
                ctaBottomRadiusMobile,
                ctaLeftRadiusMobile,
                ctaIsRadiusControlConnected,
                ctaIsRadiusValueUpdated,
                submitButtonHoverBoxShadowColor,
                submitButtonHoverBoxShadowHOffset,
                submitButtonHoverBoxShadowVOffset,
                submitButtonHoverBoxShadowBlur,
                submitButtonHoverBoxShadowSpread,
                submitButtonHoverBoxShadowPosition,
                submitButtonBoxShadowColor,
                submitButtonBoxShadowHOffset,
                submitButtonBoxShadowVOffset,
                submitButtonBoxShadowBlur,
                submitButtonBoxShadowSpread,
                submitButtonBoxShadowPosition
            },
            setAttributes,
        } = this.props;

        // backward compatibility for border radius control

        if (!ctaIsRadiusValueUpdated) {
            this.props.setAttributes(
            {
                ctaTopRadius:          ctaBorderRadius !== undefined ? ctaBorderRadius : ctaTopRadius,
                ctaBottomRadius:       ctaBorderRadius !== undefined ? ctaBorderRadius : ctaBottomRadius,
                ctaLeftRadius:         ctaBorderRadius !== undefined ? ctaBorderRadius : ctaLeftRadius,
                ctaRightRadius:        ctaBorderRadius !== undefined ? ctaBorderRadius : ctaRightRadius,
                ctaTopRadiusTablet:    ctaBorderRadius !== undefined ? ctaBorderRadius : ctaTopRadiusTablet,
                ctaBottomRadiusTablet: ctaBorderRadius !== undefined ? ctaBorderRadius : ctaBottomRadiusTablet,
                ctaRightRadiusTablet:  ctaBorderRadius !== undefined ? ctaBorderRadius : ctaRightRadiusTablet,
                ctaLeftRadiusTablet:   ctaBorderRadius !== undefined ? ctaBorderRadius : ctaLeftRadiusTablet,
                ctaTopRadiusMobile:    ctaBorderRadius !== undefined ? ctaBorderRadius : ctaTopRadiusMobile,
                ctaBottomRadiusMobile: ctaBorderRadius !== undefined ? ctaBorderRadius : ctaBottomRadiusMobile,
                ctaLeftRadiusMobile:   ctaBorderRadius !== undefined ? ctaBorderRadius : ctaLeftRadiusMobile,
                ctaRightRadiusMobile:  ctaBorderRadius !== undefined ? ctaBorderRadius : ctaRightRadiusMobile,
            }
            )
            this.props.setAttributes({ctaIsRadiusValueUpdated: true});
        }


        // Update color values
        const onChangeiconColor = (value) => setAttributes({ iconColor: value });
        var buttonboxshadowadvancedControls;
        var buttonboxShadowAdvancedControls;
        var resetbuttonBoxShadowAdvancedControls;
        buttonboxshadowadvancedControls = (
            <Fragment>
                <RbeaColorControl
					label = {__("Color", "responsive-block-editor-addons")}
					colorValue={submitButtonBoxShadowColor}
					onChange={(colorValue) =>
						setAttributes({ submitButtonBoxShadowColor: colorValue })
					}
					resetColor={() => setAttributes({ submitButtonBoxShadowColor: "" })}
				/>
                <RbeaRangeControl
                    label={__("Horizontal", "responsive-block-editor-addons")}
                    value={submitButtonBoxShadowHOffset}
                    onChange={(value) =>
                        setAttributes({
                            submitButtonBoxShadowHOffset: value !== undefined ? value : 0,
                        })
                    }
                    min={-100}
                    max={100}
                    allowReset
                />
                <RbeaRangeControl
                    label={__("Vertical", "responsive-block-editor-addons")}
                    value={submitButtonBoxShadowVOffset}
                    onChange={(value) =>
                        setAttributes({
                            submitButtonBoxShadowVOffset: value !== undefined ? value : 0,
                        })
                    }
                    min={-100}
                    max={100}
                    allowReset
                />
                <RbeaRangeControl
                    label={__("Blur", "responsive-block-editor-addons")}
                    value={submitButtonBoxShadowBlur}
                    onChange={(value) =>
                        setAttributes({
                            submitButtonBoxShadowBlur: value !== undefined ? value : 0,
                        })
                    }
                    min={0}
                    max={100}
                    allowReset
                />
                <RbeaRangeControl
                    label={__("Spread", "responsive-block-editor-addons")}
                    value={submitButtonBoxShadowSpread}
                    onChange={(value) =>
                        setAttributes({
                            submitButtonBoxShadowSpread: value !== undefined ? value : 0,
                        })
                    }
                    min={0}
                    max={100}
                    allowReset
                />
                <RbeaTabRadioControl
                    label={__("Position", "responsive-block-editor-addons")}
                    value={submitButtonBoxShadowPosition}
                    onChange={(value) => setAttributes({ submitButtonBoxShadowPosition: value })}
                    options={[
                        { value: "inset", label: __("Inset", "responsive-block-editor-addons") },
                        { value: "outset", label: __("Outset", "responsive-block-editor-addons") },
                    ]}
                    defaultValue={"inset"}
                />
            </Fragment>
        );



        var advancedControls;
        advancedControls = (
            <>
                <RbeaBorderStyleTabControl
                    selected={ctaBorderStyle}
                    onChange={(value) => setAttributes({ ctaBorderStyle: value })}
                />
                <RbeaRangeControl
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
                <RbeaBorderRadiusControl
                    attrNameTemplate="cta%s"
                    {...this.props}
                />

                <hr className="responsive-block-editor-addons-editor__separator" />

                <p className="rbea-inspector-control-label">{__( "Box Shadow", "responsive-block-editor-addons" )}</p>
                {buttonboxshadowadvancedControls}
            </>
        );

        return (
            <div className="responsive-block-editor-addons-block-border-settings">
                {advancedControls}
            </div>
        );
    }
}

export default ButtonBorderControl;
