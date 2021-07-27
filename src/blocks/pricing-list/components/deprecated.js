import classnames from "classnames";
import attributes from "../attributes";

const { Fragment } = wp.element;
const { RichText } = wp.blockEditor;

const deprecated = [
  {
    // attributes,
    attributes: attributes,
    save: function (props) {
      const {
        attributes: {
          block_id,
          pricingList,
          columns,
          imagePosition,
          imageSize,
        },
        setAttributes,
      } = props;
      var data_copy = [...pricingList];

      var imgPosition = imagePosition;

      return (
        <Fragment>
          <div
            className={classnames(
              "responsive-block-editior-addons-pricing-list-outer-wrap",
              "responsive-block-editor-addons-block-pricing-list",
              `block-${block_id}`
            )}
          >
            {pricingList.map((test, index) => (
              <Fragment>
                <div
                  className={classnames(
                    "responsive-block-editior-addons-pricing-list-item-wrap",
                    `resp-desktop-column-${columns}`,
                    `image-position-${imagePosition}`
                  )}
                >
                  <div className="responsive-block-editior-addons-pricing-list-item-content">
                    {(imagePosition == "top" || imagePosition == "left") &&
                      pricingList[index]["image"] && (
                        <div className="responsive-block-editior-addons-pricing-list-item-image-wrap">
                          <img
                            className={classnames(
                              "responsive-block-editior-addons-pricing-list-item-image"
                            )}
                            src={
                              pricingList[index]["image"].sizes[imageSize]
                                ? pricingList[index]["image"].sizes[imageSize]
                                    .url
                                : pricingList[index]["image"].sizes["full"].url
                            }
                          />
                        </div>
                      )}
                    <div className="responsive-block-editior-addons-pricing-list-item-text-wrap">
                      <div className="responsive-block-editior-addons-pricing-list-item-details">
                        <div className="responsive-block-editior-addons-pricing-list-item-title-wrap">
                          <RichText.Content
                            tagName="h4"
                            className="responsive-block-editior-addons-pricing-list-item-title"
                            value={pricingList[index]["title"]}
                          />
                          <RichText.Content
                            tagName="div"
                            className="responsive-block-editior-addons-pricing-list-item-description"
                            value={pricingList[index]["description"]}
                          />
                        </div>
                        <div className="responsive-block-editior-addons-pricing-list-item-price-wrap">
                          <RichText.Content
                            tagName="div"
                            className="responsive-block-editior-addons-pricing-list-item-price"
                            value={pricingList[index]["price"]}
                          />
                        </div>
                      </div>
                    </div>
                    {imagePosition == "right" && pricingList[index]["image"] && (
                      <div className="responsive-block-editior-addons-pricing-list-item-image-wrap">
                        <img
                          className={classnames(
                            "responsive-block-editior-addons-pricing-list-item-image"
                          )}
                          src={pricingList[index]["image"].sizes[imageSize].url}
                        />
                      </div>
                    )}
                  </div>
                  <div className="responsive-block-editior-addons-pricing-list-item-separator-wrap">
                    <div className="responsive-block-editior-addons-pricing-list-item-separator"></div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </Fragment>
      );
    },
  },
  {
    // attributes,
    attributes: attributes,
    save: function (props) {
      const {
        block_id,
        pricingList,
        columns,
        imagePosition,
        imageSize,
      } = props.attributes;
      var data_copy = [...pricingList];

      var imgPosition = imagePosition;

      return (
        <Fragment>
          <div
            className={classnames(
              "responsive-block-editior-addons-pricing-list-outer-wrap",
              "responsive-block-editor-addons-block-pricing-list",
              `block-${block_id}`,
              `responsive-block-editor-addons-block-pricing-list-no-of-columns-${columns}`
            )}
          >
            {pricingList.map((test, index) => (
              <Fragment>
                <div
                  className={classnames(
                    "responsive-block-editior-addons-pricing-list-item-wrap",
                    `resp-desktop-column-${columns}`,
                    `image-position-${imagePosition}`
                  )}
                >
                  <div className="responsive-block-editior-addons-pricing-list-item-content">
                    {(imagePosition == "top" || imagePosition == "left") &&
                      pricingList[index]["image"] && (
                        <div className="responsive-block-editior-addons-pricing-list-item-image-wrap">
                          <img
                            className={classnames(
                              "responsive-block-editior-addons-pricing-list-item-image"
                            )}
                            src={
                              pricingList[index]["image"].sizes[imageSize]
                                ? pricingList[index]["image"].sizes[imageSize]
                                    .url
                                : pricingList[index]["image"].sizes["full"].url
                            }
                          />
                        </div>
                      )}
                    <div className="responsive-block-editior-addons-pricing-list-item-text-wrap">
                      <div className="responsive-block-editior-addons-pricing-list-item-details">
                        <div className="responsive-block-editior-addons-pricing-list-item-title-wrap">
                          <RichText.Content
                            tagName="h4"
                            className="responsive-block-editior-addons-pricing-list-item-title"
                            value={pricingList[index]["title"]}
                          />
                          <RichText.Content
                            tagName="div"
                            className="responsive-block-editior-addons-pricing-list-item-description"
                            value={pricingList[index]["description"]}
                          />
                        </div>
                        <div className="responsive-block-editior-addons-pricing-list-item-price-wrap">
                          <RichText.Content
                            tagName="div"
                            className="responsive-block-editior-addons-pricing-list-item-price"
                            value={pricingList[index]["price"]}
                          />
                        </div>
                      </div>
                    </div>
                    {imagePosition == "right" && pricingList[index]["image"] && (
                      <div className="responsive-block-editior-addons-pricing-list-item-image-wrap">
                        <img
                          className={classnames(
                            "responsive-block-editior-addons-pricing-list-item-image"
                          )}
                          src={pricingList[index]["image"].sizes[imageSize].url}
                        />
                      </div>
                    )}
                  </div>
                  <div className="responsive-block-editior-addons-pricing-list-item-separator-wrap">
                    <div className="responsive-block-editior-addons-pricing-list-item-separator"></div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </Fragment>
      );
    },
  },
];

export default deprecated;
