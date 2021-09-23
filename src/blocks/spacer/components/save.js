/**
 * WordPress dependencies
 */
const { Component } = wp.element;
import classnames from "classnames";


export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
      const {
          attributes: {
              block_id,

          },
          setAttributes,
      } = this.props;
    return [<div className={classnames(
        "responsive-block-editor-addons-spacer",
          `block-${block_id}`,)}> </div>
  ];
  }
}
