import classnames from "classnames";
const { Component } = wp.element;
import metadata from '../block.json';
import { GalleryAttributes } from "../../../utils/components/block-gallery/shared";
import DeprecatedImageSliderSave from "../deprecated/deprecated-image-slider";

const attributes = {
    ...GalleryAttributes,
    ...metadata.attributes,
};

const deprecated = [
    {
        attributes: attributes,
        supports: {
            align: ["wide", "full"],
            html: false,
        },
        migrate: function (attributes, innerBlocks) {
            return [
                attributes,
                innerBlocks,
            ];
        },
        save: function (props) {

            return (
                <DeprecatedImageSliderSave {...props} />
            )
        },
    },
];

export default deprecated;
