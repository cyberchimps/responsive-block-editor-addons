import classnames from "classnames";
import DeprecatedTabsSave from "../deprecated/DeprecatedTabsSave";
import attributes from "../attributes";

import Save from "./save";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { InnerBlocks } = wp.editor;

const deprecated = [
    {
        attributes,
        supports: {
            anchor: true,
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
                <DeprecatedTabsSave {...props} />
            )
        },
    },
];

export default deprecated;