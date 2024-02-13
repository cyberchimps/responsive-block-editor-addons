/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import { loadGoogleFont } from "../../../utils/font";
import EditorStyles from "./editor-styles";
import renderSVG from "../../../renderIcon";
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText, AlignmentToolbar, BlockControls } = wp.blockEditor;
const {ToolbarGroup} = wp.components;
export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }
  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-call-mail-button-style-" +
        this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }
  }

  componentDidMount() {
    // Assigning block_id in the attribute.
    this.props.setAttributes({ block_id: this.props.clientId });

    this.props.setAttributes({ classMigrate: true });

    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-call-mail-button-style-" +
        this.props.clientId
    );
    document.head.appendChild($style);
  }
  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        callText,
        mailText,
        phone,
        mail,
        buttonToShow,
        buttonSize,
        icon,
        iconPosition,
        buttonAlign,
      },
      setAttributes,
      mergeBlocks,
      insertBlocksAfter,
      onReplace,
    } = this.props;
    let callHref = `tel:${phone}`;
    let mailHref = `mailto: ${mail}`;

    const toolbarControls = [
      {
        icon: "align-left",
        title: __("Left", "responsive-block-editor-addons"),
        isActive: buttonAlign==='left',
        onClick: () => setAttributes({ buttonAlign: 'left' }),
      },
      {
        icon: "align-center",
        title: __("Center", "responsive-block-editor-addons"),
        isActive: buttonAlign==='center',
        onClick: () => setAttributes({ buttonAlign: 'center' }),
      },
      {
        icon: "align-right",
        title: __("Right", "responsive-block-editor-addons"),
        isActive: buttonAlign==='right',
        onClick: () => setAttributes({ buttonAlign: 'right' }),
      },
    ];

    return [
      <style id={`responsive-block-editor-addons-call-mail-button-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
      <BlockControls key="controls">
        <ToolbarGroup controls={toolbarControls} />
      </BlockControls>,
      // Show the block controls on focus
      <Inspector key={`inspector-${block_id}`} {...{ setAttributes, ...this.props }} />,

      // Show the block markup in the editor
      <div
        className={classnames(
          this.props.className, 
          "responsive-block-editor-addons-block-call-mail-button",
          `block-${block_id}`
        )}
        key={`${block_id}`}
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
            <RichText
              tagName="span"
              placeholder={__("Call", "responsive-block-editor-addons")}
              value={callText}
              className="responsive-block-editor-addons-call-mail-button-text"
              onChange={(value) => setAttributes({ callText: value })}
              multiline={false}
              allowedFormats={[
                "core/bold",
                "core/italic",
                "core/strikethrough",
                "core/link",
              ]}
            />
          )}
          {"mail" === buttonToShow && (
            <RichText
              tagName="span"
              placeholder={__("Mail", "responsive-block-editor-addons")}
              value={mailText}
              onChange={(value) => setAttributes({ mailText: value })}
              multiline={false}
              className="responsive-block-editor-addons-call-mail-button-text"
              allowedFormats={[
                "core/bold",
                "core/italic",
                "core/strikethrough",
                "core/link",
              ]}
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
