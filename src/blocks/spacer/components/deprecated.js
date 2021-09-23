import attributes from "../attributes";
import classnames from "classnames";
import { applyFilters, addFilter } from "@wordpress/hooks";
const { Component, Fragment } = wp.element;

const deprecated = [
  {
    // attributes,
    attributes: attributes,
    save: function (props) {
        const { className } = props;

        const {
        attributes: {
            block_id,
        },
        setAttributes,
      } = props;

        return (
            <div className= "responsive-block-editor-addons-spacer"> </div>
      );
    },
  },
  {
    // attributes,
    attributes: attributes,
    save: function (props) {
        const { className } = props;

        const {
          block_id,
      } = props.attributes;

        return (
            <div className={classnames(
            "responsive-block-editor-addons-spacer",
            `block-${block_id}`,)}> </div>
      );
    },
  },
];

export default deprecated;
