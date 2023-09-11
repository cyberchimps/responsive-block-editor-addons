/**
 * Internal dependencies
 */
import IconList from "./iconlist";
import classnames from "classnames";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { InnerBlocks } = wp.blockEditor;

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    // Setup the attributes
    const { block_id } = this.props.attributes;

    return [
      <IconList {...this.props}>
        <div
          className={classnames(
            `responsive-block-editor-addons-icon-wrap-${block_id}`,
            "responsive-block-editor-addons-icon-list__wrap"
          )}
        >
          <InnerBlocks.Content />
        </div>
      </IconList>,
    ];
  }
}
