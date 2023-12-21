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
      showSubprice,
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

    const classes = classnames(
      this.props.className, 
      {
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
            <Fragment key={`fragment-pricing-table-${index}`} >
              <div key={`pricning-table-item-${index}`}
                className={classnames(
                  "wp-block-responsive-block-editor-addons-pricing-table-item",
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
                    className="wp-block-responsive-block-editor-addons-pricing-table-item__title"
                    value={pricingTable[index]["title"]}
                  />
                )}

                <div
                  className={
                    "wp-block-responsive-block-editor-addons-pricing-table-item__price-wrapper"
                  }
                >
                  {showPrefix && (
                    <RichText.Content
                      tagName="p"
                      className="wp-block-responsive-block-editor-addons-pricing-table-item__currency"
                      value={pricingTable[index]["currency"]}
                    />
                  )}
                  {showPrice && (
                    <RichText.Content
                      tagName="p"
                      className="wp-block-responsive-block-editor-addons-pricing-table-item__amount"
                      value={pricingTable[index]["amount"]}
                    />
                  )}
                  {showSuffix && (
                    <RichText.Content
                      tagName="p"
                      className="wp-block-responsive-block-editor-addons-pricing-table-item__price_suffix"
                      value={pricingTable[index]["price_suffix"]}
                    />
                  )}
                </div>
                {showSubprice && (
                  <RichText.Content
                    tagName="p"
                    className="wp-block-responsive-block-editor-addons-pricing-table-item__sub_price"
                    value={pricingTable[index]["sub_price"]}
                  />
                )}

                {showFeatures && (
                  <RichText.Content
                    tagName="ul"
                    multiline="li"
                    className="wp-block-responsive-block-editor-addons-pricing-table-item__features"
                    value={pricingTable[index]["features"]}
                  />
                )}
                {showButton && (
                  <a
                    href={pricingTable[index]["buttonURL"]}
                    target={buttonTarget ? "_blank" : null}
                    rel={buttonTarget ? "noopener noreferrer" : null}
                    className={classnames(
                      "wp-block-responsive-block-editor-addons-pricing-table-item__button"
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
