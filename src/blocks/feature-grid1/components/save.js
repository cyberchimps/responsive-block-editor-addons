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
      pricingTable,
      contentAlign,
      count,
      gutter,
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
      "wp-block-responsive-block-editor-addons-pricing-table__inner",
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
          "responsive-block-editor-addons-block-pricing-table",
          `block-${block_id}`,
          "wp-block-responsive-block-editor-addons-pricing-table",
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
          {pricingTable.map((test, index) => (
            <Fragment>
              <div
                className={classnames(
                  "wp-block-responsive-block-editor-addons-feature-grid-item",
                  `responsive-block-editor-addons-${blockId}`,
                  backgroundType == "image" ? "background-type-image" : ""
                )}
              >
                {pricingTable[index]["img_url"] && showImage && (
                  <div className="responsive-block-editor-addons-pricing-image-wrap">
                    <img
                      className="responsive-block-editor-addons-pricing-image"
                      src={
                        pricingTable[index]["img_url"].sizes[imageSize]
                          ? pricingTable[index]["img_url"].sizes[imageSize].url
                          : pricingTable[index]["img_url"].sizes["full"].url
                      }
                      alt="avatar"
                      />
                  </div>
                )}

                {showTitle && (
                  <RichText.Content
                    tagName="span"
                    className="wp-block-responsive-block-editor-addons-feature-grid-item__title"
                    value={pricingTable[index]["title"]}
                  />
                )}

                {showDesc && (
                  <RichText.Content
                    tagName="p"
                    className="wp-block-responsive-block-editor-addons-feature-grid-item__sub_price"
                    value={pricingTable[index]["sub_price"]}
                  />
                )}

                {showButton && (
                  <a
                    href={pricingTable[index]["buttonURL"]}
                    target={buttonTarget ? "_blank" : null}
                    rel={buttonTarget ? "noopener noreferrer" : null}
                    className={classnames(
                      "wp-block-responsive-block-editor-addons-feature-grid-item__button"
                    )}
                  >
                    <RichText.Content value={pricingTable[index]["button"]} />
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
