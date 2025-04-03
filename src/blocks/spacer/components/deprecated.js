import classnames from "classnames";
import attributes from "../attributes";
const { Component } = wp.element;
import Save from "./spacer-deprecated";
import SaveTwo from "./spacer-deprecated-two";

const deprecated = [
  {
    attributes,
    save: function (props) {
      const {
        setAttributes,
      } = props;

      return (
        <Save {...props} />
      )
    },
  },
  {
    attributes,
    save: function (props) {
      const {
        setAttributes,
      } = props;

      return (
        <SaveTwo {...props} />
      )
    },
  },
  // This is the older deprecated version of the block.
  {
    save: function (props) {
      const {
        setAttributes,
      } = props;

      return <div class="responsive-block-editor-addons-spacer"> </div>;
    },
  },
  {
    // attributes,
    attributes: attributes,
    save: function (props) {
      const { block_id } = props.attributes;
      return <div className={classnames(
        "responsive-block-editor-addons-block-spacer",
        `block-${block_id}`,
        "responsive-block-editor-addons-spacer"
      )}> </div>
    },
  },
];

export default deprecated;
