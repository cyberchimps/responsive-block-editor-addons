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
const { RichText, AlignmentToolbar, BlockControls } = wp.editor;

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }
  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-inline-notice-style-" +
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
      "responsive-block-editor-addons-inline-notice-style-" +
      this.props.clientId
    );
    document.head.appendChild($style);
  }
  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        block_html,
        headingTag,
        icon,
        noticeAlignment,
        noticeBoxColor,
        noticeContent,
        noticeDismiss,
        noticeTitle,
        titleFontFamily,
        contentFontFamily,
      },
      setAttributes,
      mergeBlocks,
      insertBlocksAfter,
      onReplace,
    } = this.props;
    this.props.setAttributes({ block_id: this.props.clientId });
    return [
      <BlockControls key="controls">
        <AlignmentToolbar
          value={noticeAlignment}
          onChange={(value) => setAttributes({ noticeAlignment: value })}
        />
      </BlockControls>,
      <Inspector {...{ setAttributes, ...this.props }} />,

      // Show the block markup in the editor
      <div
        className={classnames(
          "responsive-block-editor-addons-block-inline-notice",
          `block-${block_id}`
        )}
      >
        {titleFontFamily && loadGoogleFont(titleFontFamily)}
        {contentFontFamily && loadGoogleFont(contentFontFamily)}
        <div className="responsive-block-editor-addons-block-inline-notice-title-area">
          <RichText
            tagName={headingTag}
            placeholder={__("Notice Title", "responsive-block-editor-addons")}
            keepPlaceholderOnFocus
            value={noticeTitle}
            className="responsive-block-editor-addons-block-inline-notice-title"
            onChange={(value) => setAttributes({ noticeTitle: value })}
          />
          {noticeDismiss &&
            <span className="responsive-block-editor-addons-block-inline-notice-svg">{renderSVG(icon)}</span>
          }
        </div>
        <div className="responsive-block-editor-addons-block-inline-notice-content-area">
          <RichText
            tagName="div"
            placeholder={__("Add notice content...", "responsive-block-editor-addons")}
            multiline="p"
            value={noticeContent}
            className="responsive-block-editor-addons-block-inline-notice-content"
            onChange={(value) => setAttributes({ noticeContent: value })}
          />
        </div>
      </div>,
    ];
  }
}
