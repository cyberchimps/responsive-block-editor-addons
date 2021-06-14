/**
 * Team Block Wrapper
 */

// Setup the block
const { Component } = wp.element;

// Import block dependencies and components
import classnames from "classnames";
import generateCSSUnit from "../../../generateCSSUnit";
import { hexToRgba } from "../../../utils/index.js";

/**
 * Create a Team wrapper Component
 */
export default class InfoBlock extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        blockBorderStyle,
        blockBorderWidth,
        blockBorderRadius,
        blockBorderColor,
        boxShadowColor,
        boxShadowHOffset,
        boxShadowVOffset,
        boxShadowBlur,
        boxShadowSpread,
        boxShadowPosition,
        boxBackgroundColor,
        contentPadding,
        opacity,
      },
    } = this.props;

    var boxShadowPositionCSS = boxShadowPosition;

    if ("outset" === boxShadowPosition) {
      boxShadowPositionCSS = "";
    }

    let imgopacity = opacity / 100;

    return (
      <div
        className={classnames(
          this.props.className,
          "responsive-block-editor-addons-infobox__outer-wrap",
          "responsive-blocks-block-team",
          "responsive-block-editor-addons-block-info-block",
          `block-${block_id}`
        )}
      >
        {this.props.children}
      </div>
    );
  }
}
