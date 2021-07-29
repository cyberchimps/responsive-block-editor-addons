/**
 * Googlemap Block Wrapper
 */

// Setup the block
const { Component } = wp.element;

// Import block dependencies and components
import classnames from "classnames";

/**
 * Create a Googlemap wrapper Component
 */
export default class Googlemap extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    // Setup the attributes
    const {
      attributes: { address, zoom, height },
    } = this.props;

    return (
      <div
        className={classnames(
          this.props.className,
          "responsive-block-editor-addons-block-googlemap"
        )}
      >
        {this.props.children}
      </div>
    );
  }
}
