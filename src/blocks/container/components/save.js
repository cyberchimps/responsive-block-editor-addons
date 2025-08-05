/**
 * Internal dependencies
 */
import classnames from "classnames";
import Style from "style-it";

/**
 * WordPress dependencies
 */
const { RichText } = wp.blockEditor;

export default function Save({ attributes, className }) {
  const {
    headingTitle,
    headingId,
    headingDesc,
    seperatorStyle,
    seperatorPosition,
    headingTag,
    showHeading,
    showSubHeading,
    showSeparator,
    block_id,
    anchor,
  } = attributes;

  const separatorOutput =
    seperatorStyle !== "none" ? (
      <div className="responsive-heading-seperator-wrap">
        <div className="responsive-heading-seperator"></div>
      </div>
    ) : null;

  return (
    <div
      id={anchor}
      className={classnames(
        className,
        "responsive-block-editor-addons-block-container",
        `block-${block_id}`
      )}
    >
      {showHeading && (
        <RichText.Content
          tagName={headingTag}
          value={headingTitle}
          className="responsive-heading-title-text"
          id={headingId}
        />
      )}
      {seperatorPosition === "belowTitle" && showSeparator && separatorOutput}
      {showSubHeading && (
        <RichText.Content
          tagName="p"
          value={headingDesc}
          className="responsive-heading-desc-text"
        />
      )}
      {seperatorPosition === "belowDesc" && showSeparator && separatorOutput}
    </div>
  );
}
