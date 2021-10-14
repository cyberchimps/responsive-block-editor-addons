import {camelCase, lowerFirst} from "lodash";
import {sprintf} from "@wordpress/i18n";
import ResponsivePaddingControl from "./ResponsiveTBLRPaddingControl"

/**
 * Box-Shadow reusable component.
 *
 */
const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { SelectControl, RangeControl } = wp.components;

// Extend component
const { Component, Fragment } = wp.element;

const ResponsivePaddingHelperControl = props => {
    var getAttrName = attrName => camelCase( sprintf( props.attrNameTemplate, attrName ) )

    var advancedControls;
        advancedControls = (
            <Fragment>
                <ResponsivePaddingControl
                    {...props}
                    attrMobileTop={ getAttrName('TopPaddingMobile' ) }
                    attrMobileBottom={ getAttrName('BottomPaddingMobile' ) }
                    attrMobileLeft={ getAttrName('LeftPaddingMobile' ) }
                    attrMobileRight={ getAttrName('RightPaddingMobile' ) }

                    attrTabletTop={ getAttrName('TopPaddingTablet' ) }
                    attrTabletBottom={ getAttrName('BottomPaddingTablet' ) }
                    attrTabletLeft={ getAttrName('LeftPaddingTablet' ) }
                    attrTabletRight={ getAttrName('RightPaddingTablet' ) }

                    attrTop={ getAttrName('TopPadding' ) }
                    attrBottom={ getAttrName('BottomPadding' ) }
                    attrLeft={ getAttrName('LeftPadding' ) }
                    attrRight={ getAttrName('RightPadding' ) }

                    onChangeAttrMobileTop={ value => props.setAttributes( { attrMobileTop: value } ) }
                    onChangeAttrMobileBottom={ value => props.setAttributes( { attrMobileBottom: value } ) }
                    onChangeAttrMobileLeft={ value => props.setAttributes( { attrMobileLeft: value } ) }
                    onChangeAttrMobileRight={ value => props.setAttributes( { attrMobileRight: value } ) }


                    onChangeAttrTabletTop={ value => props.setAttributes( { [ getAttrName( 'TopPaddingTablet' ) ]: value } ) }
                    onChangeAttrTabletBottom={ value => props.setAttributes( { [ getAttrName( 'BottomPaddingTablet' ) ]: value } ) }
                    onChangeAttrTabletLeft={ value => props.setAttributes( { [ getAttrName( 'LeftPaddingTablet' ) ]: value } ) }
                    onChangeAttrTabletRight={ value => props.setAttributes( { [ getAttrName( 'RightPaddingTablet' ) ]: value } ) }

                    onChangeAttrTop={ value => props.setAttributes( { [ getAttrName('TopPadding' ) ]: value } ) }
                    onChangeAttrBottom={ value => props.setAttributes( { [ getAttrName('BottomPadding' ) ]: value } ) }
                    onChangeAttrLeft={ value => props.setAttributes( { [ getAttrName('LeftPadding' ) ]: value } ) }
                    onChangeAttrRight={ value => props.setAttributes( { [ getAttrName('RightPadding' ) ]: value } ) }
                />

            </Fragment>
        );


        return (
            <div className="responsive-block-editor-addons-responsive-spacing-settings">
                {advancedControls}
            </div>
        );
    }

export default ResponsivePaddingHelperControl;
