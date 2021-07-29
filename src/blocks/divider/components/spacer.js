/**
 * Button Wrapper
 */

// Setup the block
const { Component } = wp.element;

// Import block dependencies and components
import classnames from "classnames";

/**
 * Create a Button wrapper Component
 */
export default class Spacer extends Component {
  render() {
    // Setup the attributes
    const { block_id, spacerDividerStyle } = this.props.attributes;

    return (
      <div
        className={classnames(
          this.props.className,
          "responsive-block-editor-addons-block-spacer",
          "responsive-block-editor-addons-block-divider",
          `block-${block_id}`,
          spacerDividerStyle,
          { "responsive-block-editor-addons-spacer-divider": true }
        )}
      >
        {this.props.children}
      </div>
    );
  }
}
