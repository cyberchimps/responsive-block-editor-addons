import classnames from "classnames";
const { Component, Fragment } = wp.element;
const { RichText } = wp.blockEditor;
import { range } from "lodash";

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      block_id,
      anchor,
      displayTitle,
      displaySubtitle,
      columnsCount,
      tagTitle,
      blockTitle,
      blockSubtitle,
      displayColumnSeparator,
      blockTag,
      layoutDesign,
    } = this.props.attributes;

    let CustomTag = `${blockTag}`;

    return (
      <Fragment>
        <CustomTag
          id={anchor}
          className={classnames(
            this.props.className, 
            "responsive-block-editor-addons-block-advanced-text",
            `block-${block_id}`,
            displayColumnSeparator && 'responsive-block-editor-addons-separator-present',
            `responsive-block-editor-addons-columns-count-${columnsCount}`,
            `responsive-block-editor-addons-${layoutDesign}`,
          )}
        >
          {((displayTitle && !RichText.isEmpty(blockTitle)) ||
            (displaySubtitle && !RichText.isEmpty(blockSubtitle))) && (
            <div className="responsive-block-editor-addons-wrapper">
              {displayTitle && !RichText.isEmpty(blockTitle) && (
                <RichText.Content
                  tagName={tagTitle || "h2"}
                  className="responsive-block-editor-addons-title"
                  value={blockTitle}
                />
              )}
              {displaySubtitle && !RichText.isEmpty(blockSubtitle) && (
                <RichText.Content
                  tagName="p"
                  className="responsive-block-editor-addons-subtitle"
                  value={blockSubtitle}
                />
              )}
            </div>
          )}
          <div className="responsive-block-editor-addons-text-container">
            {range(columnsCount || 1).map((i) => {
              const index = i + 1;
              return (
                <Fragment key={i}>
                  <div className="responsive-block-editor-addons-text-content">
                    <RichText.Content
                      tagName="p"
                      className={`responsive-block-editor-addons-text-content-${index}`}
                      value={this.props.attributes[`text${index}`]}
                    />
                  </div>
                  {displayColumnSeparator && i !== columnsCount - 1 && (
                    <div
                      className={`responsive-block-editor-addons-separator responsive-block-editor-addons-separator-${index}`}
                      role="presentation"
                    />
                  )}
                </Fragment>
              );
            })}
          </div>
        </CustomTag>
      </Fragment>
    );
  }
}
