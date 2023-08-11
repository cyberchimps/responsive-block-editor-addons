/**
 * Internal dependencies
 */
import classnames from "classnames";
import Style from "style-it";
import renderSVG from "../../../renderIcon";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { RichText } = wp.blockEditor;

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      block_id,
      callText,
      mailText,
      phone,
      mail,
      buttonToShow,
      buttonSize,
      icon,
      iconPosition,
    } = this.props.attributes;
    let callHref = `tel:${phone}`;
    let mailHref = `mailto: ${mail}`;
    return [
      <div
        className={classnames(
          this.props.className, 
          "responsive-block-editor-addons-block-call-mail-button",
          `block-${block_id}`
        )}
      >
        <a
          className={classnames(
            "responsive-block-editor-addons-call-mail-button-button-container",
            buttonSize
          )}
          href={"call" === buttonToShow ? callHref : mailHref}
        >
          {"" !== icon && "left" == iconPosition && (
            <span
              className={classnames(
                `responsive-block-editor-addons-call-mail-button-icon`,
                `responsive-block-editor-addons-call-mail-button-icon-iconPosition-${iconPosition}`
              )}
            >
              {renderSVG(icon)}
            </span>
          )}
          {"call" === buttonToShow && (
            <RichText.Content
              tagName="span"
              value={callText}
              className="responsive-block-editor-addons-call-mail-button-text"
            />
          )}
          {"mail" === buttonToShow && (
            <RichText.Content
              tagName="span"
              value={mailText}
              className="responsive-block-editor-addons-call-mail-button-text"
            />
          )}
		  {"" !== icon && "right" == iconPosition && (
            <span
              className={classnames(
                `responsive-block-editor-addons-call-mail-button-icon`,
                `responsive-block-editor-addons-call-mail-button-icon-iconPosition-${iconPosition}`
              )}
            >
              {renderSVG(icon)}
            </span>
          )}
        </a>
      </div>,
    ];
  }
}
