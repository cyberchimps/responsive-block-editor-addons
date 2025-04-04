/**
 * WordPress dependencies
 */
const { Component } = wp.element;
import classnames from "classnames"

export default class SaveTwo extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      block_id,
    } = this.props.attributes;

    return (<div className={classnames(
      "responsive-block-editor-addons-block-spacer",
      `block-${block_id}`,
      "responsive-block-editor-addons-spacer"
    )}> </div>);
  }
}
