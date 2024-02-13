/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import times from "lodash/times";
import { loadGoogleFont } from "../../../utils/font";
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
  MediaUploadCheck,
  figure,
} = wp.blockEditor;
const { Button, Dashicon, Icon } = wp.components;

import memoize from "memize";

const ALLOWED_MEDIA_TYPES = ["image"];
const ALLOWED_BLOCKS = ["core/button"];
const TEMPLATE = [
  [
    "core/button",
    { placeholder: __("Buy Now", "responsive-block-editor-addons") },
  ],
];

const getCount = memoize((count) => {
  return times(count, (index) => [
    "responsive-block-editor-addons/pricing-table-item",
    {
      placeholder: sprintf(
        /* translators: %d: a digit 1-3 */
        __("Plan %d", "responsive-block-editor-addons"),
        parseInt(index + 1)
      ),
    },
  ]);
});

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-pricing-table-style-" +
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

    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-pricing-table-style-" +
        this.props.clientId
    );
    document.head.appendChild($style);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        pricingTable,
        count,
        gutter,
        contentAlign,
        backgroundType,
        boxShadowPosition,
        buttonBoxShadowPosition,
        blockbackgroundImage,
        titleFontFamily,
        amountFontFamily,
        prefixFontFamily,
        suffixFontFamily,
        subpriceFontFamily,
        featuresFontFamily,
        ctaFontFamily,
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
      },
      setAttributes,
    } = this.props;

    var boxShadowPositionCSS = boxShadowPosition;

    if ("outset" === boxShadowPosition) {
      boxShadowPositionCSS = "";
    }
    var buttonBoxShadowPositionCSS = buttonBoxShadowPosition;

    if ("outset" === buttonBoxShadowPosition) {
      buttonBoxShadowPositionCSS = "";
    }

    var data_copy = [...pricingTable];

    const getButtonTemplate = memoize((button_block, pricingTable) => {
      return times(button_block, (n) => [
        "responsive-block-editor-addons/pricing-table-item",
        pricingTable[n],
      ]);
    });
    const classes = classnames(
      this.props.className, 
      "responsive-block-editor-addons-block-pricing-table",
      `block-${block_id}`,
      "wp-block-responsive-block-editor-addons-pricing-table",
      {
        [`has-text-align-${contentAlign}`]: contentAlign,
      }
    );

    const innerClasses = classnames(
      "wp-block-responsive-block-editor-addons-pricing-table__inner",
      {
        "has-columns": count > 1,
        [`has-${count}-columns`]: count,
        "has-responsive-columns": count > 1,
        [`has-${gutter}-gutter`]: gutter,
      }
    );

    const formattingcontrols = ["core/bold", "core/italic", "core/strikethrough"];

    let alignStyle = "center";
    if ("left" == blockAlign) {
      alignStyle = "flex-start";
    }
    if ("right" == blockAlign) {
      alignStyle = "flex-end";
    }

    return [
      <style id={`responsive-block-editor-addons-pricing-table-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
      // Show the alignment toolbar on focus
      <BlockControls key="controls">
        <AlignmentToolbar
          value={blockAlign}
          onChange={(value) => setAttributes({ blockAlign: value })}
        />
      </BlockControls>,

      // Show the block controls on focus
      <Inspector key="inspector" {...{ setAttributes, ...this.props }} />,
      <div key={`image-shape-${block_id}`} className={classnames(classes, "image-shape-" + imageShape)}>
        {titleFontFamily && loadGoogleFont(titleFontFamily)}
        {amountFontFamily && loadGoogleFont(amountFontFamily)}
        {prefixFontFamily && loadGoogleFont(prefixFontFamily)}
        {suffixFontFamily && loadGoogleFont(suffixFontFamily)}
        {subpriceFontFamily && loadGoogleFont(subpriceFontFamily)}
        {featuresFontFamily && loadGoogleFont(featuresFontFamily)}
        {ctaFontFamily && loadGoogleFont(ctaFontFamily)}
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
        <div key="pricing-table-block" className={innerClasses}>
          {pricingTable.map((test, index) => (
            <Fragment key={`fragment-pricing-table-${index}`} >
              <div
              key={`pricning-table-item-${index}`}
                className={classnames(
                  "wp-block-responsive-block-editor-addons-pricing-table-item",
                  backgroundType == "image" ? "background-type-image" : ""
                )}
              >
                {showImage && (
                  <div className="responsive-block-editor-addons-pricing-image-wrap">
                    <MediaUpload
                      buttonProps={{
                        className: "change-image",
                      }}
                      onSelect={(value) => {
                        var new_content = {
                          title: data_copy[index]["title"],
                          currency: data_copy[index]["currency"],
                          amount: data_copy[index]["amount"],
                          features: data_copy[index]["features"],
                          img_id: value.id,
                          img_url: value,
                          button: data_copy[index]["button"],
                          buttonURL: data_copy[index]["buttonURL"],
                        };
                        data_copy[index] = new_content;
                        setAttributes({ pricingTable: data_copy });
                      }}
                      allowed={ALLOWED_MEDIA_TYPES}
                      type="image"
                      value={pricingTable[index]["img_id"]}
                      render={({ open }) => (
                        <Fragment>
                          <Button
                            className={
                              pricingTable[index]["img_id"]
                                ? "responsive-block-editor-addons-change-image"
                                : "responsive-block-editor-addons-add-image"
                            }
                            style={{ height: "auto" }}
                            onClick={open}
                          >
                            {!pricingTable[index]["img_id"] ? (
                              <Dashicon icon={"format-image"} size="100" />
                            ) : (
                              <img
                                className="responsive-block-editor-addons-pricing-image"
                                src={
                                  pricingTable[index]["img_url"].sizes[
                                    imageSize
                                  ]
                                    ? pricingTable[index]["img_url"].sizes[
                                        imageSize
                                      ].url
                                    : pricingTable[index]["img_url"].sizes[
                                        "full"
                                      ].url
                                }
                                alt="image"
                              />
                            )}
                          </Button>
                          {pricingTable[index]["img_id"] && (
                            <Button
                              className="responsive-block-editor-addons-remove-image"
                              onClick={() => {
                                var new_content = {
                                  title: data_copy[index]["title"],
                                  currency: data_copy[index]["currency"],
                                  amount: data_copy[index]["amount"],
                                  features: data_copy[index]["features"],
                                  img_id: null,
                                  img_url: null,
                                  button: data_copy[index]["button"],
                                  buttonURL: data_copy[index]["buttonURL"],
                                };
                                data_copy[index] = new_content;
                                setAttributes({ pricingTable: data_copy });
                              }}
                            >
                              <Dashicon icon={"dismiss"} />
                            </Button>
                          )}
                        </Fragment>
                      )}
                    ></MediaUpload>
                  </div>
                )}
                {showTitle && (
                  <RichText
                    tagName="span"
                    className="wp-block-responsive-block-editor-addons-pricing-table-item__title"
                    value={pricingTable[index]["title"]}
                    placeholder={pricingTable[index]["title"]}
                    onChange={(value) => {
                      var new_content = {
                        title: value,
                        currency: data_copy[index]["currency"],
                        price_suffix: data_copy[index]["price_suffix"],
                        sub_price: data_copy[index]["sub_price"],
                        amount: data_copy[index]["amount"],
                        features: data_copy[index]["features"],
                        img_id: pricingTable[index]["img_id"],
                        img_url: pricingTable[index]["img_url"],
                        button: data_copy[index]["button"],
                        buttonURL: data_copy[index]["buttonURL"],
                      };
                      data_copy[index] = new_content;
                      setAttributes({ pricingTable: data_copy });
                    }}
                    allowedFormats={formattingcontrols}
                    
                  />
                )}
                <div className="wp-block-responsive-block-editor-addons-pricing-table-item__price-wrapper">
                  {showPrefix && (
                    <RichText
                      tagName="p"
                      className="wp-block-responsive-block-editor-addons-pricing-table-item__currency"
                      value={pricingTable[index]["currency"]}
                      placeholder={__("$", "responsive-block-editor-addons")}
                      onChange={(value) => {
                        var new_content = {
                          title: data_copy[index]["title"],
                          currency: value,
                          price_suffix: data_copy[index]["price_suffix"],
                          sub_price: data_copy[index]["sub_price"],
                          amount: data_copy[index]["amount"],
                          features: data_copy[index]["features"],
                          img_id: pricingTable[index]["img_id"],
                          img_url: pricingTable[index]["img_url"],
                          button: data_copy[index]["button"],
                          buttonURL: data_copy[index]["buttonURL"],
                        };
                        data_copy[index] = new_content;
                        setAttributes({ pricingTable: data_copy });
                      }}
                      allowedFormats={formattingcontrols}
                      
                    />
                  )}
                  {showPrice && (
                    <RichText
                      tagName="p"
                      className="wp-block-responsive-block-editor-addons-pricing-table-item__amount"
                      placeholder={__("99", "responsive-block-editor-addons")}
                      value={pricingTable[index]["amount"]}
                      onChange={(value) => {
                        var new_content = {
                          title: data_copy[index]["title"],
                          currency: data_copy[index]["currency"],
                          price_suffix: data_copy[index]["price_suffix"],
                          sub_price: data_copy[index]["sub_price"],
                          amount: value,
                          features: data_copy[index]["features"],
                          img_id: pricingTable[index]["img_id"],
                          img_url: pricingTable[index]["img_url"],
                          button: data_copy[index]["button"],
                          buttonURL: data_copy[index]["buttonURL"],
                        };
                        data_copy[index] = new_content;
                        setAttributes({ pricingTable: data_copy });
                      }}
                      allowedFormats={formattingcontrols}
                      
                    />
                  )}
                  {showSuffix && (
                    <RichText
                      tagName="p"
                      className="wp-block-responsive-block-editor-addons-pricing-table-item__price_suffix"
                      value={pricingTable[index]["price_suffix"]}
                      placeholder={__(".00", "responsive-block-editor-addons")}
                      onChange={(value) => {
                        var new_content = {
                          title: data_copy[index]["title"],
                          price_suffix: value,
                          sub_price: data_copy[index]["sub_price"],
                          currency: data_copy[index]["currency"],
                          amount: data_copy[index]["amount"],
                          features: data_copy[index]["features"],
                          img_id: pricingTable[index]["img_id"],
                          img_url: pricingTable[index]["img_url"],
                          button: data_copy[index]["button"],
                          buttonURL: data_copy[index]["buttonURL"],
                        };
                        data_copy[index] = new_content;
                        setAttributes({ pricingTable: data_copy });
                      }}
                      allowedFormats={formattingcontrols}
                      
                    />
                  )}
                </div>
                {showSubprice && (
                  <RichText
                    tagName="p"
                    className="wp-block-responsive-block-editor-addons-pricing-table-item__sub_price"
                    value={pricingTable[index]["sub_price"]}
                    placeholder={__(
                      "Sub Price",
                      "responsive-block-editor-addons"
                    )}
                    onChange={(value) => {
                      var new_content = {
                        title: data_copy[index]["title"],
                        sub_price: value,
                        currency: data_copy[index]["currency"],
                        price_suffix: data_copy[index]["price_suffix"],
                        amount: data_copy[index]["amount"],
                        features: data_copy[index]["features"],
                        img_id: pricingTable[index]["img_id"],
                        img_url: pricingTable[index]["img_url"],
                        button: data_copy[index]["button"],
                        buttonURL: data_copy[index]["buttonURL"],
                      };
                      data_copy[index] = new_content;
                      setAttributes({ pricingTable: data_copy });
                    }}
                    allowedFormats={formattingcontrols}
                    
                  />
                )}
                {showFeatures && (
                  <RichText
                    tagName="ul"
                    className="wp-block-responsive-block-editor-addons-pricing-table-item__features"
                    value={pricingTable[index]["features"]}
                    placeholder={__(
                      "Add features",
                      "responsive-block-editor-addons"
                    )}
                    onChange={(value) => {
                      var new_content = {
                        title: data_copy[index]["title"],
                        currency: data_copy[index]["currency"],
                        price_suffix: data_copy[index]["price_suffix"],
                        sub_price: data_copy[index]["sub_price"],
                        amount: data_copy[index]["amount"],
                        features: value,
                        img_id: pricingTable[index]["img_id"],
                        img_url: pricingTable[index]["img_url"],
                        button: data_copy[index]["button"],
                        buttonURL: data_copy[index]["buttonURL"],
                      };
                      data_copy[index] = new_content;
                      setAttributes({ pricingTable: data_copy });
                    }}
                    
                  />
                )}
                {showButton && (
                  <Fragment>
                    <RichText
                      tagName="p"
                      className={classnames(
                        "wp-block-responsive-block-editor-addons-pricing-table-item__button"
                      )}
                      value={pricingTable[index]["button"]}
                      placeholder={__("$", "responsive-block-editor-addons")}
                      onChange={(value) => {
                        var new_content = {
                          button: value,
                          buttonURL: data_copy[index]["buttonURL"],
                          title: data_copy[index]["title"],
                          currency: data_copy[index]["currency"],
                          price_suffix: data_copy[index]["price_suffix"],
                          sub_price: data_copy[index]["sub_price"],
                          amount: data_copy[index]["amount"],
                          features: data_copy[index]["features"],
                          img_id: pricingTable[index]["img_id"],
                          img_url: pricingTable[index]["img_url"],
                        };
                        data_copy[index] = new_content;
                        setAttributes({ pricingTable: data_copy });
                      }}
                      allowedFormats={formattingcontrols}
                      
                    />
                    <form
                      key="form-link"
                      className={`blocks-button__inline-link res-button-`}
                      onSubmit={(event) => event.preventDefault()}
                    >
                      <Dashicon icon={"admin-links"} />
                      <URLInput
                        className="button-url"
                        value={pricingTable[index]["buttonURL"]}
                        onChange={(value) => {
                          var new_content = {
                            buttonURL: value,
                            button: data_copy[index]["button"],
                            title: data_copy[index]["title"],
                            currency: data_copy[index]["currency"],
                            price_suffix: data_copy[index]["price_suffix"],
                            sub_price: data_copy[index]["sub_price"],
                            amount: data_copy[index]["amount"],
                            features: data_copy[index]["features"],
                            img_id: pricingTable[index]["img_id"],
                            img_url: pricingTable[index]["img_url"],
                          };
                          data_copy[index] = new_content;
                          setAttributes({ pricingTable: data_copy });
                        }}
                        __nextHasNoMarginBottom={true}
                      />
                      <Button
                        label={__("Apply", "responsive-block-editor-addons")}
                        type="submit"
                      >
                        <Icon icon="editor-break" />
                      </Button>
                    </form>
                  </Fragment>
                )}
              </div>
            </Fragment>
          ))}
        </div>
      </div>,
    ];
  }
}
