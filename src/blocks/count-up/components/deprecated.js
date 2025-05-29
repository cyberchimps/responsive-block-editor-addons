import classnames from "classnames";
import attributes from "../attributes";

import DeprecatedCountUpSave from "../deprecated/DeprecatedCountUpSave";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { InnerBlocks } = wp.editor;

const deprecated = [
    {
        attributes,
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
                <DeprecatedCountUpSave {...props} />
            )
        },
    }
];

export default deprecated;