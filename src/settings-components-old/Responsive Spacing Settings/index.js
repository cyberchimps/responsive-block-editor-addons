import {camelCase, lowerFirst} from "lodash";
import {sprintf} from "@wordpress/i18n";
import ResponsiveSpacingControl from "./Responsive Spacing Control";

/**
 * Box-Shadow reusable component.
 *
 */
const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { SelectControl, RangeControl } = wp.components;

// Extend component
const { Component, Fragment } = wp.element;

const ResponsiveSpacingHelperControl = props => {
    var getAttrName = attrName => camelCase( sprintf( props.attrNameTemplate, attrName ) )

    var advancedControls;
        advancedControls = (
            <Fragment>
                <ResponsiveSpacingControl
                    {...props}
                    title={props.title}
                    attrMobile={ getAttrName('Mobile' ) }
                    attrTablet={ getAttrName('Tablet' ) }
                    attr={ getAttrName('' ) }
                    onChangeAttrMobile={ value => props.setAttributes( { attrMobile: value } ) }
                    onChangeAttrTablet={ value => props.setAttributes( { [ getAttrName( 'Tablet' ) ]: value } ) }
                    onChangeAttr={ value => props.setAttributes( { [ getAttrName('' ) ]: value } ) }
                />

            </Fragment>
        );


        return (
            <div className="responsive-block-editor-addons-responsive-spacing-settings">
                {advancedControls}
            </div>
        );
    }

export default ResponsiveSpacingHelperControl;
