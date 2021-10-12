import classnames from "classnames";
const { Component, Fragment } = wp.element;
const { RichText } = wp.blockEditor || wp.editor;
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
    } = this.props.attributes;

    return (
      <Fragment>
        <div
          id={anchor}
          className={classnames(
            "responsive-block-editor-addons-block-advanced-text",
            `block-${block_id}`
          )}
        >
          {((displayTitle && !RichText.isEmpty(blockTitle)) ||
            (displaySubtitle && !RichText.isEmpty(blockSubtitle))) && (
            <div className="responsive-block-editor-addons-wrapper">
              {displayTitle && !RichText.isEmpty(blockTitle) && (
                <RichText.Content
                  tagName={tagTitle || "h2"}
                  className="responsive-block-editor-addons__title"
                  value={blockTitle}
                />
              )}
              {displaySubtitle && !RichText.isEmpty(blockSubtitle) && (
                <RichText.Content
                  tagName="p"
                  className="responsive-block-editor-addons__subtitle"
                  value={blockSubtitle}
                />
              )}
            </div>
          )}
          <div className="responsive-block-editor-addons-text-wrapper">
            {range(columnsCount || 1).map((i) => {
              const index = i + 1;
              return (
                <Fragment key={i}>
                  <div className="responsive-block-editor-addons__text">
                    <RichText.Content
                      tagName="p"
                      className={`responsive-block-editor-addons__text-${index}`}
                      value={this.props.attributes[`text${index}`]}
                    />
                  </div>
                  {displayColumnSeparator && i !== columnsCount - 1 && (
                    <div
                      className={`responsive-block-editor-addons-text__rule responsive-block-editor-addons-text__rule-${index}`}
                      role="presentation"
                    />
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}
