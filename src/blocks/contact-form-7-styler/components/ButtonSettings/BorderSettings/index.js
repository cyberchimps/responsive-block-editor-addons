/**
 * Box-Shadow reusable component.
 *
 */
import BoxShadowControl from "../../../../../utils/components/box-shadow";
import BoxShadowControlHelper from "../../../../../utils/components/box-shadow-helper";


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
                ctaBorderRadius,
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


        // Update color values
        const onChangeiconColor = (value) => setAttributes({ iconColor: value });
        var buttonboxshadowadvancedControls;
        var buttonboxShadowAdvancedControls;
        var resetbuttonBoxShadowAdvancedControls;
        buttonboxshadowadvancedControls = (
            <Fragment>
                <p className="responsive-block-editor-addons-setting-label">
                    {__("Color", "responsive-block-editor-addons")}
                    <span className="components-base-control__label">
                        <span
                            className="component-color-indicator"
                            style={{ backgroundColor: submitButtonBoxShadowColor }}
                        ></span>
                    </span>
                </p>
                <ColorPalette
                    value={submitButtonBoxShadowColor}
                    onChange={(colorValue) =>
                        setAttributes({
                            submitButtonBoxShadowColor: colorValue !== undefined ? colorValue : "",
                        })
                    }
                    allowReset
                />
                <h2>{__("Horizontal", "responsive-block-editor-addons")}</h2>
                <RangeControl
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
                <h2>{__("Vertical", "responsive-block-editor-addons")}</h2>
                <RangeControl
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
                <h2>{__("Blur", "responsive-block-editor-addons")}</h2>
                <RangeControl
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
                <h2>{__("Spread", "responsive-block-editor-addons")}</h2>
                <RangeControl
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
                <SelectControl
                    label={__("Position", "responsive-block-editor-addons")}
                    value={submitButtonBoxShadowPosition}
                    onChange={(value) => setAttributes({ submitButtonBoxShadowPosition: value })}
                    options={[
                        { value: "inset", label: __("Inset", "responsive-block-editor-addons") },
                        { value: "outset", label: __("Outset", "responsive-block-editor-addons") },
                    ]}
                />
            </Fragment>
        );



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
                        <PanelBody
                            title={__("Box Shadow", "responsive-block-editor-addons")}
                            initialOpen={false}
                        >
                            {buttonboxshadowadvancedControls}
                        </PanelBody>
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
