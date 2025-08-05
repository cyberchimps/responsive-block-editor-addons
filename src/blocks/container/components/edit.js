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
const { useEffect } = wp.element;
const { RichText, AlignmentToolbar, BlockControls } = wp.blockEditor;
const { createBlock } = wp.blocks;

export default function Edit(props) {
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
      block_id,
    },
    setAttributes,
    mergeBlocks,
    insertBlocksAfter,
    onReplace,
    className,
    clientId,
  } = props;

  // Equivalent to componentDidMount
  useEffect(() => {
    setAttributes({ block_id: clientId });
    setAttributes({ classMigrate: true });

    const styleEl = document.createElement("style");
    styleEl.setAttribute(
      "id",
      "responsive-block-editor-addons-container-style-" + clientId
    );
    document.head.appendChild(styleEl);

    return () => {
      // Clean up style tag on unmount
      document.head.removeChild(styleEl);
    };
  }, []);

  // Equivalent to componentDidUpdate for styles
  useEffect(() => {
    const styleEl = document.getElementById(
      "responsive-block-editor-addons-container-style-" + clientId
    );
    if (styleEl) {
      styleEl.innerHTML = EditorStyles(props);
    }
  }, [props]);

  return [
    <style
      key="inner-style"
      id={`responsive-block-editor-addons-container-style-${clientId}-inner`}
    >
      {EditorStyles(props)}
    </style>,

    <BlockControls key="controls">
      <AlignmentToolbar
        value={headingAlignment}
        onChange={(value) => setAttributes({ headingAlignment: value })}
      />
    </BlockControls>,

    <Inspector key={`inspector-${block_id}`} {...{ setAttributes, ...props }} />,

    <div
      key={`mainDiv-${block_id}`}
      className={classnames(
        className,
        "responsive-block-editor-addons-block-container",
        `block-${block_id}`
      )}
    >
      {headingTitleFontFamily && loadGoogleFont(headingTitleFontFamily)}

      {showHeading && (
        <RichText
          tagName={headingTag}
          placeholder={__("Write a Heading", "responsive-block-editor-addons")}
          value={headingTitle}
          className="responsive-heading-title-text"
          multiline={false}
          onChange={(value) => setAttributes({ headingTitle: value })}
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

      {seperatorPosition === "belowTitle" &&
        seperatorStyle !== "none" &&
        showSeparator && (
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
          onSplit={undefined}
          onRemove={() => onReplace([])}
        />
      )}

      {seperatorPosition === "belowDesc" &&
        seperatorStyle !== "none" &&
        showSeparator && (
          <div className="responsive-heading-seperator-wrap">
            <div className="responsive-heading-seperator"></div>
          </div>
        )}
    </div>,
  ];
}
