/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import times from "lodash/times";
import EditorStyles from "./editor-styles";

/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { Component, Fragment } = wp.element;
const {
  RichText,
  AlignmentToolbar,
  BlockControls,
  InnerBlocks,
  MediaUpload,
  URLInput,
} = wp.blockEditor;
const { Button, Dashicon, Icon } = wp.components;

import memoize from "memize";
import map from "lodash/map";
import { loadGoogleFont } from "../../../utils/font";

const ALLOWED_MEDIA_TYPES = ["image"];
const ALLOWED_BLOCKS = ["core/button"];
const TEMPLATE = [
  [
    "core/button",
    { placeholder: __("Buy Now", "responsive-block-editor-addons") },
  ],
];

export default class Edit extends Component {
  constructor() {
    super(...arguments);
    this.onSelectTestImage = this.onSelectTestImage.bind(this);
    this.getImageName = this.getImageName.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-pricing-list-style-" + this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }
  }

  componentDidMount() {
    // Assigning block_id in the attribute.
    this.props.setAttributes({ block_id: this.props.clientId });
    this.props.setAttributes({ classMigrate: true });

    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-pricing-list-style-" + this.props.clientId
    );
    document.head.appendChild($style);
  }

  /*
   * Event to set Image as while adding.
   */
  onSelectTestImage(media, index) {
    const { pricingList } = this.props.attributes;
    const { setAttributes } = this.props;

    let imag_url = null;
    if (!media || !media.url) {
      imag_url = null;
    } else {
      imag_url = media;
    }

    if (!media.type || "image" !== media.type) {
      imag_url = null;
    }

    const newItems = pricingList.map((item, thisIndex) => {
      if (index === thisIndex) {
        (item["image"] = imag_url), (item["imageUrl"] = imag_url);
      }
      return item;
    });

    setAttributes({
      pricingList: newItems,
    });
  }

  /*
   * Event to set Image as null while removing.
   */
  onRemoveTestImage(index) {
    const { pricingList } = this.props.attributes;
    const { setAttributes } = this.props;

    const newItems = pricingList.map((item, thisIndex) => {
      if (index === thisIndex) {
        item["image"] = null;
      }
      return item;
    });

    setAttributes({
      pricingList: newItems,
    });
  }

  /*
   * Event to set Image selectot label.
   */
  getImageName(image) {
    const { pricingList } = this.props.attributes;

    let image_name = __("Select Image", "responsive-block-editor-addons");
    if (image) {
      if (image.url == null || image.url == "") {
        image_name = __("Select Image", "responsive-block-editor-addons");
      } else {
        image_name = __("Replace Image", "responsive-block-editor-addons");
      }
    }
    return image_name;
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        pricingList,
        titleFontFamily,
        descriptionFontFamily,
        priceFontFamily,
        columns,
        contentAlign,
        imagePosition,
        imageSize,
      },
      setAttributes,
    } = this.props;
    var data_copy = [...pricingList];

    return [
      <style id={`responsive-block-editor-addons-pricing-list-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
      // Show the alignment toolbar on focus
      <BlockControls key="controls">
        <AlignmentToolbar
          value={contentAlign}
          onChange={(value) => setAttributes({ contentAlign: value })}
        />
      </BlockControls>,
      // Show the block controls on focus

      <Inspector key="inspector" {...{ setAttributes, ...this.props }} />,

      <div key={`pricing-list-${block_id}`}
        className={classnames(
          this.props.className, 
          "responsive-block-editior-addons-pricing-list-outer-wrap",
          "responsive-block-editor-addons-block-pricing-list",
          `block-${block_id}`,
          `responsive-block-editor-addons-block-pricing-list-no-of-columns-${columns}`
        )}
      >
        {titleFontFamily && loadGoogleFont(titleFontFamily)}
        {descriptionFontFamily && loadGoogleFont(descriptionFontFamily)}
        {priceFontFamily && loadGoogleFont(priceFontFamily)}
        {pricingList.map((test, index) => (
          <Fragment key={`fragment-pricing-list-${index}`} >
            <div key={`pricning-table-list-${index}`}
              
              className={classnames(
                "responsive-block-editior-addons-pricing-list-item-wrap",
                `resp-desktop-column-${columns}`,
                `image-position-${imagePosition}`
              )}
            >
              <div className="responsive-block-editior-addons-pricing-list-item-content" key={'resp-'+index}  >
                {(imagePosition == "top" || imagePosition == "left") &&
                  pricingList[index]["image"] && (
                    <div key={index} className="responsive-block-editior-addons-pricing-list-item-image-wrap">
                      <img
                        className={classnames(
                          "responsive-block-editior-addons-pricing-list-item-image"
                        )}
                        src={
                          pricingList[index]["image"].sizes[imageSize]
                            ? pricingList[index]["image"].sizes[imageSize].url
                            : pricingList[index]["image"].sizes["full"].url
                        }
                      />
                    </div>
                  )}
                <div className="responsive-block-editior-addons-pricing-list-item-text-wrap">
                  <div className="responsive-block-editior-addons-pricing-list-item-details">
                    <div className="responsive-block-editior-addons-pricing-list-item-title-wrap">
                      <RichText
                        tagName="h4"
                        className="responsive-block-editior-addons-pricing-list-item-title"
                        placeholder={__(
                          "Write a title",
                          "responsive-block-editor-addons"
                        )}
                        value={pricingList[index]["title"]}
                        onChange={(value) => {
                          var new_content = {
                            title: value,
                            description: data_copy[index]["description"],
                            price: data_copy[index]["price"],
                            image: data_copy[index]["image"],
                            image_url: data_copy[index]["image_url"],
                          };
                          data_copy[index] = new_content;
                          setAttributes({ pricingList: data_copy });
                        }}
                        
                      />
                      <RichText
                        tagName="div"
                        className="responsive-block-editior-addons-pricing-list-item-description"
                        placeholder={__(
                          "Write a description",
                          "responsive-block-editor-addons"
                        )}
                        value={pricingList[index]["description"]}
                        onChange={(value) => {
                          var new_content = {
                            title: data_copy[index]["title"],
                            description: value,
                            price: data_copy[index]["price"],
                            image: data_copy[index]["image"],
                            image_url: data_copy[index]["image_url"],
                          };
                          data_copy[index] = new_content;
                          setAttributes({ pricingList: data_copy });
                        }}
                        
                      />
                    </div>
                    <div className="responsive-block-editior-addons-pricing-list-item-price-wrap">
                      <RichText
                        tagName="div"
                        className="responsive-block-editior-addons-pricing-list-item-price"
                        placeholder={__("$9", "responsive-block-editor-addons")}
                        value={pricingList[index]["price"]}
                        onChange={(value) => {
                          var new_content = {
                            title: data_copy[index]["title"],
                            description: data_copy[index]["description"],
                            price: value,
                            image: data_copy[index]["image"],
                            image_url: data_copy[index]["image_url"],
                          };
                          data_copy[index] = new_content;
                          setAttributes({ pricingList: data_copy });
                        }}
                        
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
                      src={
                        pricingList[index]["image"].sizes[imageSize]
                            ? pricingList[index]["image"].sizes[imageSize].url
                            : pricingList[index]["image"].sizes["full"].url
                      }
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
      </div>,
    ];
  }
}
