import classnames from "classnames";
import attributes from "../attributes";

const { RichText } = wp.blockEditor;

const deprecated = [
  {
    // attributes,
    attributes: attributes,
    save: function (props) {
      const {
        attributes: {
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
        },
        setAttributes,
      } = props;

      var seprator_output = "";
      if (seperatorStyle !== "none") {
        seprator_output = (
          <div className="responsive-heading-seperator-wrap">
            <div className="responsive-heading-seperator"></div>
          </div>
        );
      }

      return (
        <div
          className={classnames(
            "responsive-block-editor-addons-block-advanced-heading",
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
          {seperatorPosition == "belowTitle" &&
            showSeparator &&
            seprator_output}
          {showSubHeading && (
            <RichText.Content
              tagName="p"
              value={headingDesc}
              className="responsive-heading-desc-text"
            />
          )}
          {seperatorPosition == "belowDesc" && showSeparator && seprator_output}
        </div>
      );
    },
  },
  {
    // attributes,
    attributes: attributes,
    save: function (props) {
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
      } = this.props.attributes;

      var seprator_output = "";
      if (seperatorStyle !== "none") {
        seprator_output = (
          <div className="responsive-heading-seperator-wrap">
            <div className="responsive-heading-seperator"></div>
          </div>
        );
      }
      return (
        <div
          id={anchor}
          className={classnames(
            "responsive-block-editor-addons-block-advanced-heading",
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
          {seperatorPosition == "belowTitle" &&
            showSeparator &&
            seprator_output}
          {showSubHeading && (
            <RichText.Content
              tagName="p"
              value={headingDesc}
              className="responsive-heading-desc-text"
            />
          )}
          {seperatorPosition == "belowDesc" && showSeparator && seprator_output}
        </div>
      );
    },
  },
];

export default deprecated;
