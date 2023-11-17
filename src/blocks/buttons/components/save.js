/**
 * Internal dependencies
 */
import Buttons from "./buttons";

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { InnerBlocks } = wp.blockEditor;

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    // Setup the attributes
    const { buttonAlignment, buttons } = this.props.attributes;

    return (
      <Buttons {...this.props}>
        <div
          className={
            "responsive-block-editor-addons-buttons__wrap responsive-block-editor-addons-buttons-layout-wrap"
          }
        >
          <InnerBlocks.Content />
        </div>
      </Buttons>
    );
  }
}
