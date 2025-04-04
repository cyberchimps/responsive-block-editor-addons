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
            console.log("In thhe migrate function");
            return [
                attributes,
                innerBlocks,
            ];
        },
        save: function (props) {
            console.log("In thhe save function");
            return deprecatedImageSliderSave(props);
        },
    },
];

export default deprecated;
