/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import { loadGoogleFont } from "../../../utils/font";
import EditorStyles from "./editor-styles";
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText, AlignmentToolbar, BlockControls } = wp.blockEditor;
export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }
  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-advanced-heading-style-" +
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
      "responsive-block-editor-addons-advanced-heading-style-" +
        this.props.clientId
    );
    document.head.appendChild($style);
  }
  render() {
    // Setup the attributes
    const {
      attributes: {
        headingTitle,
        headingDesc,
        seperatorStyle,
        headingTitleFontFamily,
        subHeadingTitleFontFamily,
        headingTag,
        headingAlignment,
        showHeading,
        showSubHeading,
        showSeparator,
        seperatorPosition,
        textJustify,
        block_id,
      },
      setAttributes,
      mergeBlocks,
      insertBlocksAfter,
      onReplace,
    } = this.props;
    return [
      <style id={`responsive-block-editor-addons-advanced-heading-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
      <BlockControls key="controls">
        <AlignmentToolbar
          value={headingAlignment}
          onChange={(value) => setAttributes({ headingAlignment: value })}
        />
      </BlockControls>,
      // Show the block controls on focus
      <Inspector key={`inspector-${block_id}`} {...{ setAttributes, ...this.props }} />,

      // Show the block markup in the editor
      <div
        className={classnames(
          this.props.className, 
          "responsive-block-editor-addons-block-advanced-heading",
          `block-${block_id}`
        )}
        key={`mainDiv-${block_id}`}
        >
        {headingTitleFontFamily && loadGoogleFont(headingTitleFontFamily)}
        {showHeading && (
          <RichText
            tagName={headingTag}
            placeholder={__("Write a Heading", "responsive-block-editor-addons")}
            value={headingTitle}
            className="responsive-heading-title-text"
            multiline={false}
            onChange={(value) => {
              setAttributes({ headingTitle: value });
            }}
            onMerge={mergeBlocks}
            onSplit={
              insertBlocksAfter
                ? (before, after, ...blocks) => {
                    setAttributes({ content: before });
                    insertBlocksAfter([
                      ...blocks,
                      createBlock("core/paragraph", { content: after }),
                    ]);
                  }
                : undefined
            }
            onRemove={() => onReplace([])}
          />
        )}
        {seperatorPosition == "belowTitle" && seperatorStyle !== "none" && showSeparator && (
          <div className="responsive-heading-seperator-wrap">
            <div className="responsive-heading-seperator"></div>
          </div>
        )}
        {subHeadingTitleFontFamily && loadGoogleFont(subHeadingTitleFontFamily)}
        {showSubHeading && (
          <RichText
            tagName="p"
            placeholder={__("Write some text", "responsive-block-editor-addons")}
            value={headingDesc}
            className="responsive-heading-desc-text"
            onChange={(value) => setAttributes({ headingDesc: value })}
            onMerge={mergeBlocks}
            onSplit={this.splitBlock}
            onRemove={() => onReplace([])}
          />
        )}
      {seperatorPosition == "belowDesc" && seperatorStyle !== "none" && showSeparator && (
      <div className="responsive-heading-seperator-wrap">
          <div className="responsive-heading-seperator"></div>
          </div>
      )}
      </div>,
    ];
  }
}
