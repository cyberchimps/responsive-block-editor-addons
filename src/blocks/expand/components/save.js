/**
 * Internal dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const { Component, Fragment } = wp.element;
const { RichText } = wp.blockEditor;

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        blockTitle,
        expandLessText,
        expandMoreText,
        moreLabel,
        lessLabel,
        showTitle,
      },
      setAttributes,
    } = this.props;

    return (
      <Fragment>
        <div
          className={classnames(
            this.props.className, 
            "responsive-block-editor-addons-block-expand",
            `block-${block_id}`
          )}
        >
          <div className="responsive-block-editor-addons-expand-block-content">
            {showTitle && (
              <RichText.Content
                tagName="h4"
                className="responsive-block-editor-addons-expand-title"
                value={blockTitle}
              />
            )}
            <RichText.Content
              tagName="p"
              className="responsive-block-editor-addons-expand-less-text"
              value={expandLessText}
            />
            <RichText.Content
              tagName="p"
              className="responsive-block-editor-addons-expand-more-text"
              value={expandMoreText}
            />

            <div className="responsive-block-editor-addons-expand-toggle-wrapper">
              <a
                className="responsive-block-editor-addons-expand-toggle"
                href="#"
              >
                <RichText.Content
                  tagName="p"
                  className="responsive-block-editor-addons-expand-more-toggle-text"
                  value={moreLabel}
                />
                <RichText.Content
                  tagName="p"
                  className="responsive-block-editor-addons-expand-less-toggle-text"
                  value={lessLabel}
                />
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
