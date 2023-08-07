/**
 * Team Block Wrapper
 */

// Setup the block
const { Component } = wp.element;
const { AlignmentToolbar, BlockControls } = wp.blockEditor;

// Import block dependencies and components
import classnames from "classnames";
import { hexToRgba } from "../../../utils/index.js";

/**
 * Create a Team wrapper Component
 */
export default class Team extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        teamImgURL,
        imageSize,
        backgroundColor,
        imageShape,
        boxShadowPosition,
        opacity,
        backgroundColor2,
        gradientDirection,
        bgGradient,
        colorLocation1,
        colorLocation2,
        backgroundImage,
      },
      setAttributes,
    } = this.props;

    let bgopacity = opacity / 100;

    var tempsecondaryBackgroundColor = bgGradient
      ? backgroundColor2
      : backgroundColor;

    var bggradient =
      "linear-gradient(" +
      gradientDirection +
      "deg," +
      hexToRgba(backgroundColor || "#ffffff", bgopacity || 0) +
      colorLocation1 +
      "% ," +
      hexToRgba(tempsecondaryBackgroundColor || "#ffffff", bgopacity || 0) +
      colorLocation2 +
      "% )";

    if (backgroundImage) {
      bggradient =
        "linear-gradient(" +
        gradientDirection +
        "deg," +
        hexToRgba(backgroundColor || "#ffffff", bgopacity || 0) +
        colorLocation1 +
        "% ," +
        hexToRgba(tempsecondaryBackgroundColor || "#ffffff", bgopacity || 0) +
        colorLocation2 +
        "% ),url(" +
        backgroundImage +
        ")";
    }

    var boxShadowPositionCSS = boxShadowPosition;

    if ("outset" === boxShadowPosition) {
      boxShadowPositionCSS = "";
    }
    return (
      <div
        className={classnames(
          this.props.className,
          { "responsive-block-editor-addons-has-avatar": teamImgURL },
          "responsive-block-editor-addons-font-size-" + imageSize,
          "responsive-block-editor-addons-block-team",
          "image-shape-" + imageShape
        )}
      >
        {this.props.children}
      </div>
    );
  }
}
