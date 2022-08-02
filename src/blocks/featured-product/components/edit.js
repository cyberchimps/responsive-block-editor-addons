/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import EditorStyles from "./editor-styles";
import { edit } from "@wordpress/icons";
import { Toolbar, ToolbarButton } from "@wordpress/components";
import { RichText } from "@wordpress/block-editor";
import TableContent from "./table-content";
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { BlockControls } = wp.blockEditor;
export default class Edit extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-featured-product-style-" +
        this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }
  }

  componentDidMount() {
    // Assigning block_id in the attribute.
    this.props.setAttributes({ block_id: this.props.clientId });

    this.props.setAttributes({ classMigrate: true });

    const getHomeURL = () => {
      let href = window.location.href;
      let index = href.indexOf("/wp-admin");
      let homeUrl = href.substring(0, index);
      return homeUrl;
    };
    const homeUrl = getHomeURL();
    fetch(
      `${homeUrl}/wp-json/wc/store/v1/products?per_page=0&catalog_visibility=any&search=&orderby=title&order=asc&_locale=user`
    )
      .then((apidata) => {
        return apidata.json();
      })
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });

    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-featured-product-style-" +
        this.props.clientId
    );
    document.head.appendChild($style);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        toggleattr,
        getProductTitle,
        getProductDescription,
        getProductPrice,
        showdescription,
        showprice,
        productCheckout,
        setFpBackgroundImage,
        buttonText
      },
      setAttributes,
    } = this.props;

    this.props.setAttributes({ block_id: this.props.clientId });

    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) {
      return (
        <div>
          <h1>Please Wait Some Time...</h1>
        </div>
      );
    }
    const getHomeURL = () => {
      let href = window.location.href;
      let index = href.indexOf("/wp-admin");
      let homeUrl = href.substring(0, index);
      return homeUrl;
    };
    const changesettings = () => {
      let product = document.getElementsByName("product-list");

      for (let i = 0; i < product.length; i++) {
        if (product[i].checked) {
          let checkedProduct = product[i].value;

          const homeUrl = getHomeURL();

          fetch(
            `${homeUrl}/wp-json/wc/store/v1/products?per_page=0&catalog_visibility=any&search=&orderby=title&order=asc&_locale=user`
          )
            .then((apidata) => {
              return apidata.json();
            })
            .then((jsondata) => {
              for (let i = 0; i < jsondata.length; i++) {
                if (jsondata[i].id == checkedProduct) {
                  setAttributes({
                    setFpBackgroundImage: jsondata[i].images[0].src,
                  });
                  setAttributes({ getProductTitle: jsondata[i].name });
                  if (showdescription) {
                    setAttributes({
                      getProductDescription: jsondata[i].short_description,
                    });
                  }
                  if (showprice) {
                    setAttributes({
                      getProductPrice: parseInt(
                        jsondata[i].prices.price / 100 + ".00"
                      ),
                    });
                  }
                }
              }
            });
        }
      }
      setAttributes({ toggleattr: true });
    };

    const MY_TEMPLATE = [["core/button", { text: "Shop now" }]];
    return [
      <>
        {/* Show the block markup in the editor */}
        <div
          className={classnames(
            "responsive-block-editor-addons-block-featured-product",
            `block-${block_id}`
          )}
        >
          {!toggleattr && (
            <>
              <div id="form-container" className="fp-container">
                <form id="form1">
                  <h2>Featured Product</h2>
                  <p>
                    Visually highlight a product or variation and encourage
                    prompt action
                  </p>
                  <hr />
                  <label htmlFor="product-search">
                    Search for a product to display
                  </label>
                  <div id="fp-searchbar">
                    <input
                      type="search"
                      autoFocus
                      placeholder="Search for the product"
                      name="product-search"
                      onKeyUp={(event) => {
                        setTimeout(() => {
                          let wordSearch = event.target.value;
                          const homeUrl = getHomeURL();
                          fetch(
                            `${homeUrl}/wp-json/wc/store/v1/products?per_page=0&catalog_visibility=any&search=${wordSearch}`
                          )
                            .then((newApiData) => {
                              return newApiData.json();
                            })
                            .then((jsondata) => {
                              this.setState({
                                items: jsondata,
                                DataisLoaded: true,
                              });
                            });
                        }, 500);
                      }}
                    />
                  </div>
                  <div className="fp-radio-container">
                    {items.map((item, index) => (
                      <TableContent key={index.toString()} data={item} />
                    ))}
                  </div>
                </form>
                <button
                  onClick={changesettings}
                  type="submit"
                  className="button button-primary"
                  id="submit-button"
                >
                  Done
                </button>
              </div>
            </>
          )}
          {toggleattr && (
            <>
              <Inspector {...{ setAttributes, ...this.props }} />
              <BlockControls key="controls">
                <Toolbar>
                  <ToolbarButton
                    onClick={() => setAttributes({ toggleattr: false })}
                    icon={edit}
                    label="Edit"
                  />
                </Toolbar>
              </BlockControls>
              <div className="block-featured-product">
                <div id="for_replacement" className="featured-product__wrapper">
                  <div className="background-dim__overlay"></div>
                  <div className="featured-product__background-image"></div>
                  <h2 className="featured-product__title">{getProductTitle}</h2>
                  {showdescription && (
                    <div
                      className="featured-product__description"
                      dangerouslySetInnerHTML={{
                        __html: getProductDescription,
                      }}
                    ></div>
                  )}
                  {showprice && (
                    <>
                      <div className="featured-product__price">
                        <span>${getProductPrice}</span>
                      </div>
                    </>
                  )}
                    <RichText
                      tagName="span"
                      placeholder={__("Shop Now", "responsive-block-editor-addons")}
                      value={buttonText}
                      onChange={(value) => setAttributes({ buttonText: value })}
                      multiline={false}
                      className={classnames("featured-product__button")}
                      allowedFormats={[
                        "core/bold",
                        "core/italic",
                        "core/strikethrough",
                        "core/link",
                      ]}
                    />
                  
                </div>
              </div>
            </>
          )}
        </div>
      </>,
    ];
  }
}
