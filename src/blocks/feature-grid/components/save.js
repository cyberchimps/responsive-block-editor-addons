/**
 * Internal dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { InnerBlocks, RichText } = wp.editor;

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      block_id,
      featureGrid,
      contentAlign,
      count,
        titleTag,
      buttonTarget,
      backgroundType,
      boxShadowPosition,
      buttonBoxShadowPosition,
      blockbackgroundImage,
      showImage,
      showTitle,
      showPrefix,
      showPrice,
      showSuffix,
      showDesc,
      showFeatures,
      showButton,
      blockAlign,
      imageSize,
      imageShape,
      imageWidth,
      blockId,
    } = this.props.attributes;
    var boxShadowPositionCSS = boxShadowPosition;

    if ("outset" === boxShadowPosition) {
      boxShadowPositionCSS = "";
    }
    var buttonBoxShadowPositionCSS = buttonBoxShadowPosition;

    if ("outset" === buttonBoxShadowPosition) {
      buttonBoxShadowPositionCSS = "";
    }

    const classes = classnames({
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

    let alignStyle = "center";
    if ("left" == blockAlign) {
      alignStyle = "flex-start";
    }
    if ("right" == blockAlign) {
      alignStyle = "flex-end";
    }

    return [
      <div
        className={classnames(
          classes,
          "responsive-block-editor-addons-block-feature-grid",
          `block-${block_id}`,
          "wp-block-responsive-block-editor-addons-feature-grid",
          "image-shape-" + imageShape
        )}
      >
        <div className="responsive-block-editor-addons-pricing-table-background-image-wrap">
          {blockbackgroundImage && (
            <img
              className={classnames(
                "responsive-block-editor-addons-pricing-table-background-image"
              )}
              src={blockbackgroundImage}
            />
          )}
        </div>
        <div className={innerClasses}>
          {featureGrid.map((test, index) => (
            <Fragment>
              <div
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
                    className="wp-block-responsive-block-editor-addons-feature-grid-item__sub_price"
                    value={featureGrid[index]["sub_price"]}
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
