/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import Buttons from "./buttons";
import memoize from "memize";
import times from "lodash/times";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const {
  RichText,
  AlignmentToolbar,
  BlockControls,
  InnerBlocks,
  InspectorControls,
} = wp.editor;
const {
  Button,
  Dashicon,
  BaseControl,
  PanelBody,
  RangeControl,
  Draggable,
} = wp.components;

const ALLOWED_BLOCKS = ["responsive-block-editor-addons/buttons-child"];

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    // Setup the attributes
    const {
      attributes: { buttons, stack, btn_count },
      setAttributes,
    } = this.props;

    const getButtonTemplate = memoize((button_block, buttons) => {
      return times(button_block, (n) => [
        "responsive-block-editor-addons/buttons-child",
        buttons[n],
      ]);
    });

    return [
      // Show the block controls on focus
      <Inspector {...{ setAttributes, ...this.props }} />,

      // Show the block markup in the editor
      <Buttons {...this.props}>
        <div id="draggable-panel">
          <Draggable elementId="draggable-panel" transferData={{}}>
            {({ onDraggableStart, onDraggableEnd }) => (
              <div className="responsive-block-editor-addons-buttons__wrap">
                <InnerBlocks
                  template={getButtonTemplate(btn_count, buttons)}
                  templateLock={false}
                  allowedBlocks={ALLOWED_BLOCKS}
                />
              </div>
            )}
          </Draggable>
        </div>
      </Buttons>,
    ];
  }
}
