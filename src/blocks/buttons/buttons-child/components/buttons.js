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
export default class Buttons extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        label,
        link,
        borderWidth,
        borderRadius,
        borderStyle,
        borderColor,
        borderHColor,
        color,
        background,
      },
      setAttributes,
    } = this.props;

    return (
      <div
        className={classnames(
          this.props.className,
          `responsive-block-editor-addons-${this.props.clientId}`,
          "responsive-block-editor-addons-buttons-child",
          `block-${block_id}`,
          "responsive-block-editor-addons-block-button",
          "responsive-block-editor-addons-buttons__outer-wrap"
        )}
      >
        {this.props.children}
      </div>
    );
  }
}
