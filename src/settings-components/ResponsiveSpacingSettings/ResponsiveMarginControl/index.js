import {camelCase, lowerFirst} from "lodash";
import {sprintf} from "@wordpress/i18n";
import ResponsiveMarginControl from "./ResponsiveTBLRMarginControl"

/**
 * Box-Shadow reusable component.
 *
 */
const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { SelectControl, RangeControl } = wp.components;

// Extend component
const { Component, Fragment } = wp.element;

const ResponsiveMarginHelperControl = props => {
    var getAttrName = attrName => camelCase( sprintf( props.attrNameTemplate, attrName ) )

    var advancedControls;
        advancedControls = (
            <Fragment>
                <ResponsiveMarginControl
                    {...props}
                    attrMobileTop={ getAttrName('TopMarginMobile' ) }
                    attrMobileBottom={ getAttrName('BottomMarginMobile' ) }
                    attrMobileLeft={ getAttrName('LeftMarginMobile' ) }
                    attrMobileRight={ getAttrName('RightMarginMobile' ) }

                    attrTabletTop={ getAttrName('TopMarginTablet' ) }
                    attrTabletBottom={ getAttrName('BottomMarginTablet' ) }
                    attrTabletLeft={ getAttrName('LeftMarginTablet' ) }
                    attrTabletRight={ getAttrName('RightMarginTablet' ) }

                    attrTop={ getAttrName('TopMargin' ) }
                    attrBottom={ getAttrName('BottomMargin' ) }
                    attrLeft={ getAttrName('LeftMargin' ) }
                    attrRight={ getAttrName('RightMargin' ) }

                    onChangeAttrMobileTop={ value => props.setAttributes( { attrMobileTop: value } ) }
                    onChangeAttrMobileBottom={ value => props.setAttributes( { attrMobileBottom: value } ) }
                    onChangeAttrMobileLeft={ value => props.setAttributes( { attrMobileLeft: value } ) }
                    onChangeAttrMobileRight={ value => props.setAttributes( { attrMobileRight: value } ) }


                    onChangeAttrTabletTop={ value => props.setAttributes( { [ getAttrName( 'TopMarginTablet' ) ]: value } ) }
                    onChangeAttrTabletBottom={ value => props.setAttributes( { [ getAttrName( 'BottomMarginTablet' ) ]: value } ) }
                    onChangeAttrTabletLeft={ value => props.setAttributes( { [ getAttrName( 'LeftMarginTablet' ) ]: value } ) }
                    onChangeAttrTabletRight={ value => props.setAttributes( { [ getAttrName( 'RightMarginTablet' ) ]: value } ) }

                    onChangeAttrTop={ value => props.setAttributes( { [ getAttrName('TopMargin' ) ]: value } ) }
                    onChangeAttrBottom={ value => props.setAttributes( { [ getAttrName('BottomMargin' ) ]: value } ) }
                    onChangeAttrLeft={ value => props.setAttributes( { [ getAttrName('LeftMargin' ) ]: value } ) }
                    onChangeAttrRight={ value => props.setAttributes( { [ getAttrName('RightMargin' ) ]: value } ) }
                />

            </Fragment>
        );


        return (
            <div className="responsive-block-editor-addons-responsive-spacing-settings">
                {advancedControls}
            </div>
        );
    }

export default ResponsiveMarginHelperControl;
