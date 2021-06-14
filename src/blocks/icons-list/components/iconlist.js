/**
 * Icons Block Wrapper
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
      attributes: { icon_layout, iconPosition, hideLabel, block_id },
      setAttributes,
    } = this.props;

    const labelClass = hideLabel
      ? "responsive-block-editor-addons-icon-list__no-label"
      : "";

    return (
      <div
        className={classnames(
          this.props.className,
          icon_layout,
          "responsive-block-editor-addons-icon-list__outer-wrap",
          `responsive-block-editor-addons-icon-list__layout-${icon_layout}`,
          labelClass,
          iconPosition == "top"
            ? "responsive-block-editor-addons-icon-list__icon-at-top"
            : "",
          `responsive-block-editor-addons-${block_id}`
        )}
      >
        {this.props.children}
      </div>
    );
  }
}
