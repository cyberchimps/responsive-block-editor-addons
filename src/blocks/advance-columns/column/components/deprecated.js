import attributes from "../attributes";
import DeprecatedColumnSave from "./deprecated-column";
import classnames from "classnames";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { InnerBlocks } = wp.editor;

const deprecated = [
    {
        attributes,
        save: function (props) {
            const {
                attributes: { overlayType, gradientOverlayType, block_id },
                setAttributes,
            } = props;
            return (
                <DeprecatedColumnSave {...props} />
            )
        },
    },
    {
        attributes,
        save: function (props) {
            const {
                attributes: { overlayType, gradientOverlayType, block_id },
                setAttributes,
            } = props;
            return (
                <div
                    className={classnames(
                        "responsive-block-editor-addons-advanced-column-child",
                        `block-${block_id}`
                    )}
                >
                    <div
                        className={classnames(
                            "responsive-column-wrap",
                            "responsive-block-editor-addons-block-column"
                        )}
                    >
                        <div
                            className={classnames(
                                "responsive-column-inner-wrap",
                                `overlay-type-${overlayType}`,
                                `${gradientOverlayType}`
                            )}
                        >
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            )
        },
    },
];

export default deprecated;
