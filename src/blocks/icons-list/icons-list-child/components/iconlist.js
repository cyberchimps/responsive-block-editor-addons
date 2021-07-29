/**
 * Buttons Block Wrapper
 */

// Setup the block
const { Component } = wp.element;

// Import block dependencies and components
import classnames from "classnames";

/**
 * Create a Button wrapper Component
 */
export default class IconList extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    // Setup the attributes
    const {
      attributes: { block_id },
      setAttributes,
    } = this.props;
    return (
      <div
        className={classnames(
          this.props.className,
          "responsive-block-editor-addons-icon-list-repeater",
          "responsive-block-editor-addons-icon-list__wrapper",
          `responsive-block-editor-addons-${block_id}`
        )}
      >
        {this.props.children}
      </div>
    );
  }
}
