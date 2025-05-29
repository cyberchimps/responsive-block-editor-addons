import classnames from "classnames";
import attributes from "../attributes";

import Save from "./save";
import DeprecatedWpSearchSave from "../deprecated/DeprecatedWpSearchSave";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { InnerBlocks } = wp.editor;

const deprecated = [
    {
        attributes,
        migrate: function( attributes, innerBlocks ) {
            return [
                attributes,
                innerBlocks,
            ];
        },
        save: function (props) {
            // Setup the attributes
            const {
                attributes: {
                    block_id,
                    sectionTag,
                    backgroundType,
                    overlayType,
                    gradientOverlayType,
                    backgroundVideo,
                    opacity,
                    boxShadowPosition,
                    align,
                    anchor,
                },
                setAttributes,
            } = props;

            return (
                <DeprecatedWpSearchSave {...props} />
            )
        },
    }
];

export default deprecated;