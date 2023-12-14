/**
 * Internal dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { InnerBlocks, RichText } = wp.blockEditor;

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      block_id,
      featureGrid,
        layout,
      contentAlign,
      count,
        gutter,
        titleTag,
      backgroundType,
      showImage,
      showTitle,
      showDesc,
      showButton,
      imageSize,
      imageShape,
      blockId,
        buttonTarget
    } = this.props.attributes;

    const classes = classnames(
      this.props.className, 
      {
      [`has-text-align-${contentAlign}`]: contentAlign,
    });

    const innerClasses = classnames(
      "wp-block-responsive-block-editor-addons-feature-grid__inner",
      {
        "has-columns": count > 1,
        [`has-${count}-columns`]: count,
        "has-responsive-columns": count > 1,
        [`has-${gutter}-gutter`]: gutter,
      }
    );

    return [
      <div
        className={classnames(
          classes,
          "responsive-block-editor-addons-block-feature-grid",
          `block-${block_id}`,
            `grid-layout-${layout}`,
            "wp-block-responsive-block-editor-addons-feature-grid",
          "image-shape-" + imageShape
        )}
      >
        <div className={innerClasses}>
          {featureGrid.map((test, index) => (
            <Fragment key={`feature-grid-fragment-${block_id}`} >
              <div key={`feature-grid-div-${block_id}`}
                className={classnames(
                  "wp-block-responsive-block-editor-addons-feature-grid-item",
                  `responsive-block-editor-addons-${blockId}`,
                  backgroundType == "image" ? "background-type-image" : ""
                )}
              >
                {featureGrid[index]["img_url"] && showImage && (
                  <div className="responsive-block-editor-addons-feature-image-wrap">
                    <img
                      className="responsive-block-editor-addons-feature-image"
                      src={
                        featureGrid[index]["img_url"].sizes[imageSize]
                          ? featureGrid[index]["img_url"].sizes[imageSize].url
                          : featureGrid[index]["img_url"].sizes["full"].url
                      }
                      alt="avatar"
                      />
                  </div>
                )}

                {showTitle && (
                  <RichText.Content
                    tagName={titleTag}
                    className="wp-block-responsive-block-editor-addons-feature-grid-item__title"
                    value={featureGrid[index]["title"]}
                  />
                )}

                {showDesc && (
                  <RichText.Content
                    tagName="p"
                    className="wp-block-responsive-block-editor-addons-feature-grid-item__desc"
                    value={featureGrid[index]["desc"]}
                  />
                )}

                {showButton && (
                  <a
                    href={featureGrid[index]["buttonURL"]}
                    target={buttonTarget ? "_blank" : null}
                    rel={buttonTarget ? "noopener noreferrer" : null}
                    className={classnames(
                      "wp-block-responsive-block-editor-addons-feature-grid-item__button"
                    )}
                  >
                    <RichText.Content value={featureGrid[index]["button"]} />
                  </a>
                )}
                <InnerBlocks.Content />
              </div>
            </Fragment>
          ))}
        </div>
      </div>,
    ];
  }
}
