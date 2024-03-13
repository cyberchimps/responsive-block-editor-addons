/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import Buttons from "./buttons";
import memoize from "memize";
import times from "lodash/times";
import EditorStyles from "./editor-styles";

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
} = wp.blockEditor;
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

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-buttons-child-style-" +
        this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }
  }

  componentDidMount() {
    // Assigning block_id in the attribute.
    this.props.setAttributes({ block_id: this.props.clientId });

    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-buttons-child-style-" +
        this.props.clientId
    );
    document.head.appendChild($style);
  }

  render() {
    // Setup the attributes
    const {
      attributes: { buttons, stack, btn_count, block_id, },
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
      <Inspector key={`inspector-${block_id}`} {...{ setAttributes, ...this.props }} />,

      //add editor style
      <style id={`responsive-block-editor-addons-buttons-child-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,

      // Show the block markup in the editor
      <Buttons key={`${block_id}`} {...this.props}>
        <div id="draggable-panel">
          <Draggable elementId="draggable-panel" transferData={{}}>
            {({ onDraggableStart, onDraggableEnd }) => (
              <div className={`responsive-block-editor-addons-buttons__wrap block-${block_id}`}>
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
