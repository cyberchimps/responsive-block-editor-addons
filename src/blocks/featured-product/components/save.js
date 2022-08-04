/**
 * Internal dependencies
 */
import classnames from "classnames";

//  import Style from "style-it";

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { RichText } = wp.blockEditor;

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      block_id,
      getProductDescription,
      getProductPrice,
      getProductTitle,
      showdescription,
      showprice,
      buttonText,
      pageUrl,
      productPrice,
      regularPrice
    } = this.props.attributes;
  
    return [
      <div
        className={classnames(
          "responsive-block-editor-addons-block-featured-product",
          `block-${block_id}`
        )}
      >
        <div className="block-featured-product">
          <div id="for_replacement" className="featured-product__wrapper">
            <div className="background-dim__overlay"></div>
            <div className="featured-product__background-image"></div>
            <h2 className="featured-product__title">{getProductTitle}</h2>
            {showdescription && (
              <div
                className="featured-product__description"
                dangerouslySetInnerHTML={{ __html: getProductDescription }}
              ></div>
            )}
            {showprice && (
                    <>
                    {productPrice !== "" && <div className="featured-product__price">
                        <span><strike>${regularPrice}</strike>{getProductPrice}</span>
                      </div>}
                      {productPrice === "" && <div className="featured-product__price">
                        <span>${getProductPrice}</span>
                      </div>}
                    </>
                  )}
            <a
              href={`${pageUrl}/product/${getProductTitle.replace(/\s+/g, '-').toLowerCase()}`}
              className="featured-product__link"
            >
              <RichText.Content
                tagName="span"
                value={buttonText}
                className="featured-product__button"
              />
            </a>
          </div>
        </div>
      </div>,
    ];
  }
}
