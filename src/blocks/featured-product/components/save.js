/**
 * Internal dependencies
 */
import classnames from "classnames";

//  import Style from "style-it";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { RichText, InnerBlocks } = wp.editor;

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
    } = this.props.attributes;
   
    return [
      <div
        className={classnames(
          "responsive-block-editor-addons-block-featured-product",
          `block-${block_id}`
        )}
      >
        <div className= "block-featured-product" >
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
              <div className="featured-product__price">
                <span>${getProductPrice}</span>
                {console.log(getProductPrice + ' Save.js')}
              </div>
            )}
            {/* <div className="featured-product__link">
                <InnerBlocks template={MY_TEMPLATE} templateLock="all" insert />
              </div> */}
              <a href="http://localhost/wordpress101/product/beanie/"><button>Shop Now</button></a>
          </div>
        </div>
      </div>,
    ];
  }
}
