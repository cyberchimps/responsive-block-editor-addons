import classnames from "classnames";
const { Component } = wp.element;
import metadata from "../block.json";
import { GalleryAttributes } from "../../../utils/components/block-gallery/shared";
import deprecatedImageSliderSave from "../deprecated/deprecated-image-slider";

const attributes = {
    ...GalleryAttributes,
    ...metadata.attributes,
};

const deprecated = [
    {
        attributes: attributes,
        migrate(attributes, innerBlocks) {
            return [
                attributes,
                innerBlocks,
            ];
        },
        save: function (props) {
            return deprecatedImageSliderSave(props);
        },
    },
];

export default deprecated;
