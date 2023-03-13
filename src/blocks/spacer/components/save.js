/**
 * WordPress dependencies
 */
const { Component } = wp.element;
import classnames from "classnames"

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      block_id,
    } = this.props.attributes;

    return (<div className={classnames(
      this.props.className,
      "responsive-block-editor-addons-block-spacer",
      `block-${block_id}`,
      "responsive-block-editor-addons-spacer"
    )}> </div>);
  }
}
