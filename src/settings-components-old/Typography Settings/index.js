import {camelCase} from "lodash";
import {sprintf} from "@wordpress/i18n";
import TypographyControl from "./Typography Control";

/**
 * Box-Shadow reusable component.
 *
 */
const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { SelectControl, RangeControl } = wp.components;

// Extend component
const { Component, Fragment } = wp.element;

const TypographyHelperControl = props => {
    const getAttrName = attrName => camelCase( sprintf( props.attrNameTemplate, attrName ) )

    var advancedControls;
        advancedControls = (
            <Fragment>
                <TypographyControl
                    title={props.attrNameTemplate}
                    fontSize={ getAttrName('FontSize' ) }
                    fontWeight={ getAttrName('FontWeight' ) }
                    lineHeight={ getAttrName('LineHeight' ) }
                    letterSpacing={ getAttrName('LetterSpacing' ) }
                    textTransform={ getAttrName('TextTransform' ) }
                    onChangeFontSize={ value => props.setAttributes( { [ getAttrName( 'FontSize' ) ]: value } ) }
                    onChangeFontWeight={ value => props.setAttributes( { [ getAttrName( 'FontWeight' ) ]: value } ) }
                    onChangeLineHeight={ value => props.setAttributes( { [ getAttrName( 'LineHeight' ) ]: value } ) }
                    onChangeLetterSpacing={ value => props.setAttributes( { [ getAttrName( 'LetterSpacing' ) ]: value } ) }
                    onChangeTextTransform={ value => props.setAttributes( { [ getAttrName( 'TextTransform' ) ]: value } ) }
                    {...props}
                />

            </Fragment>
        );


        return (
            <div className="responsive-block-editor-addons-typography-settings">
                {advancedControls}
            </div>
        );
    }

export default TypographyHelperControl;
