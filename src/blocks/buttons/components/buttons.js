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
        buttonAlignment,
        buttonAlignmentTablet,
        buttonAlignmentMobile,
        buttons,
        stack,
      },
      setAttributes,
    } = this.props;
    return (
      <div
        className={classnames(
          this.props.className,
          buttonAlignment,
          `tabletAlign${buttonAlignmentTablet}`,
          `mobileAlign${buttonAlignmentMobile}`,
          "responsive-block-editor-addons-block-buttons",
          `block-${block_id}`,
          "responsive-block-editor-addons-buttons__outer-wrap",
          `responsive-block-editor-addons-buttons-stack-${stack}`
        )}
      >
        {this.props.children}
      </div>
    );
  }
}
