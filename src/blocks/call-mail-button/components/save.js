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
      inheritFromTheme,
      inheritFromThemesaved,
      inheritFromThemeLocalTimestamp,
    } = this.props.attributes;
    let callHref = `tel:${phone}`;
    let mailHref = `mailto: ${mail}`;
    return [
      <div
        className={classnames(
          this.props.className, 
          "responsive-block-editor-addons-block-call-mail-button",
          `block-${block_id}`,
          inheritFromTheme ? "wp-block-button" : null
        )}
        data-rbea-inherit-wrapper="true"
        data-inherit-from-theme={inheritFromThemesaved ? '1' : '0'}
        data-local-timestamp={inheritFromThemeLocalTimestamp || ''}
        data-rbea-inherit-parent="self"
        data-rbea-inherit-child=".responsive-block-editor-addons-call-mail-button-button-container"
      >
        <a
          className={classnames(
            "responsive-block-editor-addons-call-mail-button-button-container",
            buttonSize,
            inheritFromTheme ? "wp-block-button wp-block-button__link" : null
          )}
          href={"call" === buttonToShow ? callHref : mailHref}
        >
          {"" !== icon && "left" == iconPosition && (
            <span
              className={classnames(
                `responsive-block-editor-addons-call-mail-button-icon`,
                `responsive-block-editor-addons-call-mail-button-icon-iconPosition-${iconPosition}`,
                "rbea-dynamic-icon"
              )}
              data-icon={icon}
              aria-hidden="true"
            >
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
                `responsive-block-editor-addons-call-mail-button-icon-iconPosition-${iconPosition}`,
                "rbea-dynamic-icon"
              )}
              data-icon={icon}
              aria-hidden="true"
            >
            </span>
          )}
        </a>
      </div>,
    ];
  }
}
