import classnames from "classnames";
import DeprecatedSectionSave from "./deprecated-section";
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
            align: ["wide", "full"],
            anchor: true,
        },
        migrate( attributes, innerBlocks ) {
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
                <DeprecatedSectionSave {...props} />
            )
        },
    },
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

            var boxShadowPositionCSS = boxShadowPosition;

            if ("outset" === boxShadowPosition) {
                boxShadowPositionCSS = "";
            }

            const CustomTag = `${sectionTag}`;
            let imgopacity = opacity / 100;
            return (
                <div
                    id={anchor}
                    className={classnames(
                        "responsive-block-editor-addons-block-section-outer-wrap",
                        `block-${block_id}`,
                        backgroundType ? `background-type-${backgroundType}` : "",
                        `align${align}`
                    )}
                >
                    <CustomTag
                        className={classnames(
                            "responsive-section-wrap",
                            "responsive-block-editor-addons-block-section",
                            `overlay-type-${overlayType}`,
                            `${gradientOverlayType}`
                        )}
                    >
                        {"video" == backgroundType && (
                            <div className="responsive-block-editor-addons-section__video-wrap">
                                {backgroundVideo && (
                                    <video autoplay loop muted playsinline>
                                        <source src={backgroundVideo.url} type="video/mp4" />
                                    </video>
                                )}
                            </div>
                        )}
                        <div className="responsive-section-inner-wrap">
                            <InnerBlocks.Content />
                        </div>
                    </CustomTag>
                </div>
            )
        },
    },
];

export default deprecated;
