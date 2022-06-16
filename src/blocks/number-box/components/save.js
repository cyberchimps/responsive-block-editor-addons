/**
 * Internal dependencies
 */
import classnames from "classnames";
import Style from "style-it";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { RichText } = wp.editor;

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      block_id,
      anchor,
      numberValue,
    } = this.props.attributes;

    return [
      <div
        id={anchor}
        className={classnames(
          "responsive-block-editor-addons-block-number-box",
          `block-${block_id}`
        )}
      >
        <div className="rbea-number-box-main-container">
          <div className="rbea-number-box">
            <div className="rbea-number-box-container">
              <RichText.Content
                tagName="div"
                value={numberValue}
                className="rbea-number-box-block"
              />
            </div>
          </div>
        </div>
      </div>,
    ];
  }
}
