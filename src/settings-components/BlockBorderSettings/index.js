import { camelCase } from "lodash";
import { sprintf } from "@wordpress/i18n";

/**
 * Box-Shadow reusable component.
 *
 */
const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { SelectControl, RangeControl } = wp.components;

// Extend component
const { Component, Fragment } = wp.element;

const BlockBorderHelperControl = props => {
    const getAttrName = attrName => camelCase(sprintf(props.attrNameTemplate, attrName))

    var advancedControls;
    advancedControls = (
        <Fragment>
            <BlockBorderControl
                onChangeBorderStyle={value => props.setAttributes({ [getAttrName('BorderStyle')]: value })}
                onChangeBorderWidth={value => props.setAttributes({ [getAttrName('BorderWidth')]: value })}
                onChangeBorderRadius={value => props.setAttributes({ [getAttrName('BorderRadius')]: value })}
                onChangeBorderColor={value => props.setAttributes({ [getAttrName('BorderColor')]: value })}
                {...props}
            />

        </Fragment>
    );


    return (
        <div className="responsive-block-editor-addons-block-border-settings">
            {advancedControls}
        </div>
    );
}
class BlockBorderControl extends Component {
    constructor() {
        super(...arguments);
    }

    render() {
        var advancedControls;
        advancedControls = (
            <Fragment>
                {(
                    <SelectControl
                        label={__("Border Style", "responsive-block-editor-addons")}
                        value={this.props.values.style}
                        onChange={this.props.onChangeBorderStyle}
                        options={[
                            { value: "none", label: __("None", "responsive-block-editor-addons") },
                            { value: "solid", label: __("Solid", "responsive-block-editor-addons") },
                            { value: "dotted", label: __("Dotted", "responsive-block-editor-addons") },
                            { value: "dashed", label: __("Dashed", "responsive-block-editor-addons") },
                            { value: "double", label: __("Double", "responsive-block-editor-addons") },
                            { value: "groove", label: __("Groove", "responsive-block-editor-addons") },
                            { value: "inset", label: __("Inset", "responsive-block-editor-addons") },
                            { value: "outset", label: __("Outset", "responsive-block-editor-addons") },
                            { value: "ridge", label: __("Ridge", "responsive-block-editor-addons") },
                        ]}
                    />
                )}
                {"none" != this.props.borderStyle && (
                    <RangeControl
                        label={__("Border Width", "responsive-block-editor-addons")}
                        value={this.props.values.width}
                        onChange={this.props.onChangeBorderWidth}
                        min={0}
                        max={50}
                        allowReset
                    />
                )}
                {(
                    <RangeControl
                        label={__("Border Radius", "responsive-block-editor-addons")}
                        value={this.props.values.radius}
                        onChange={this.props.onChangeBorderRadius}
                        min={0}
                        max={1000}
                        allowReset
                    />
                )}
                {"none" != this.props.borderStyle && (
                    <Fragment>
                        <p className="responsive-setting-label">
                            {__("Border Color", "responsive-block-editor-addons")}
                            <span className="components-base-control__label">
                                <span
                                    className="component-color-indicator"
                                    style={{ backgroundColor: this.props.values.color }}
                                ></span>
                            </span>
                        </p>
                        <ColorPalette
                            value={this.props.values.color}
                            onChange={this.props.onChangeBorderColor}
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

export default BlockBorderHelperControl;
