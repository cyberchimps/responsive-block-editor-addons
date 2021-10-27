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
} = wp.editor;
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
        featureGrid,
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
        descFontFamily,
        featuresFontFamily,
        ctaFontFamily,
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
          titleTag
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

    var data_copy = [...featureGrid];

    const classes = classnames(
      "responsive-block-editor-addons-block-feature-grid",
      `block-${block_id}`,
      "wp-block-responsive-block-editor-addons-feature-grid",
      {
        [`has-text-align-${contentAlign}`]: contentAlign,
      }
    );

    const innerClasses = classnames(
      "wp-block-responsive-block-editor-addons-feature-grid__inner",
      {
        "has-columns": count > 1,
        [`has-${count}-columns`]: count,
        "has-responsive-columns": count > 1,
        [`has-${gutter}-gutter`]: gutter,
      }
    );

    const formattingControls = ["bold", "italic", "strikethrough"];

    let alignStyle = "center";
    if ("left" == blockAlign) {
      alignStyle = "flex-start";
    }
    if ("right" == blockAlign) {
      alignStyle = "flex-end";
    }

    return [
      // Show the alignment toolbar on focus
      <BlockControls key="controls">
        <AlignmentToolbar
          value={blockAlign}
          onChange={(value) => setAttributes({ blockAlign: value })}
        />
      </BlockControls>,

      // Show the block controls on focus
      <Inspector {...{ setAttributes, ...this.props }} />,
      <div className={classnames(classes, "image-shape-" + imageShape)}>
        {titleFontFamily && loadGoogleFont(titleFontFamily)}
        {amountFontFamily && loadGoogleFont(amountFontFamily)}
        {prefixFontFamily && loadGoogleFont(prefixFontFamily)}
        {suffixFontFamily && loadGoogleFont(suffixFontFamily)}
        {descFontFamily && loadGoogleFont(descFontFamily)}
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
        <div className={innerClasses}>
          {featureGrid.map((test, index) => (
            <Fragment>
              <div
                className={classnames(
                  "wp-block-responsive-block-editor-addons-feature-grid-item",
                    backgroundType == "image" ? "background-type-image" : ""
  )}
              >
                {showImage && (
                  <div className="responsive-block-editor-addons-feature-image-wrap">
                    <MediaUpload
                      buttonProps={{
                        className: "change-image",
                      }}
                      onSelect={(value) => {
                        var new_content = {
                          title: data_copy[index]["title"],
                            sub_price: data_copy[index]["sub_price"],
                            img_id: value.id,
                          img_url: value,
                          button: data_copy[index]["button"],
                          buttonURL: data_copy[index]["buttonURL"],
                        };
                        data_copy[index] = new_content;
                        setAttributes({ featureGrid: data_copy });
                      }}
                      allowed={ALLOWED_MEDIA_TYPES}
                      type="image"
                      value={featureGrid[index]["img_id"]}
                      render={({ open }) => (
                        <Fragment>
                          <Button
                            className={
                              featureGrid[index]["img_id"]
                                ? "responsive-block-editor-addons-change-image"
                                : "responsive-block-editor-addons-add-image"
                            }
                            style={{ height: "auto" }}
                            onClick={open}
                          >
                            {!featureGrid[index]["img_id"] ? (
                                <div className="responsive-block-editor-addons-feature-image-icon-wrap">
                              <Dashicon icon={"format-image"} size="100" />
                    </div>
                            ) : (
                              <img
                                className="responsive-block-editor-addons-feature-image"
                                src={
                                  featureGrid[index]["img_url"].sizes[
                                    imageSize
                                  ]
                                    ? featureGrid[index]["img_url"].sizes[
                                        imageSize
                                      ].url
                                    : featureGrid[index]["img_url"].sizes[
                                        "full"
                                      ].url
                                }
                                alt="image"
                              />
                            )}
                          </Button>
                          {featureGrid[index]["img_id"] && (
                            <Button
                              className="responsive-block-editor-addons-remove-image"
                              onClick={() => {
                                var new_content = {
                                  title: data_copy[index]["title"],
                                    sub_price: data_copy[index]["sub_price"],
                                    img_id: null,
                                  img_url: null,
                                  button: data_copy[index]["button"],
                                  buttonURL: data_copy[index]["buttonURL"],
                                };
                                data_copy[index] = new_content;
                                setAttributes({ featureGrid: data_copy });
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
                    tagName={titleTag}
                    className="wp-block-responsive-block-editor-addons-feature-grid-item__title"
                    value={featureGrid[index]["title"]}
                    placeholder={featureGrid[index]["title"]}
                    onChange={(value) => {
                      var new_content = {
                        title: value,
                        sub_price: data_copy[index]["sub_price"],
                        img_id: featureGrid[index]["img_id"],
                        img_url: featureGrid[index]["img_url"],
                        button: data_copy[index]["button"],
                        buttonURL: data_copy[index]["buttonURL"],
                      };
                      data_copy[index] = new_content;
                      setAttributes({ featureGrid: data_copy });
                    }}
                    formattingControls={formattingControls}
                    keepPlaceholderOnFocus
                  />
                )}
                {showDesc && (
                  <RichText
                    tagName="p"
                    className="wp-block-responsive-block-editor-addons-feature-grid-item__sub_price"
                    value={featureGrid[index]["sub_price"]}
                    placeholder={__(
                      "Sub Price",
                      "responsive-block-editor-addons"
                    )}
                    onChange={(value) => {
                      var new_content = {
                        title: data_copy[index]["title"],
                        sub_price: value,
                        img_id: featureGrid[index]["img_id"],
                        img_url: featureGrid[index]["img_url"],
                        button: data_copy[index]["button"],
                        buttonURL: data_copy[index]["buttonURL"],
                      };
                      data_copy[index] = new_content;
                      setAttributes({ featureGrid: data_copy });
                    }}
                    formattingControls={formattingControls}
                    keepPlaceholderOnFocus
                  />
                )}

                {showButton && (
                  <Fragment>
                    <RichText
                      tagName="p"
                      className={classnames(
                        "wp-block-responsive-block-editor-addons-feature-grid-item__button"
                      )}
                      value={featureGrid[index]["button"]}
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
                          img_id: featureGrid[index]["img_id"],
                          img_url: featureGrid[index]["img_url"],
                        };
                        data_copy[index] = new_content;
                        setAttributes({ featureGrid: data_copy });
                      }}
                      formattingControls={formattingControls}
                      keepPlaceholderOnFocus
                    />
                    <form
                      key="form-link"
                      className={`blocks-button__inline-link res-button-`}
                      onSubmit={(event) => event.preventDefault()}
                    >
                      <Dashicon icon={"admin-links"} />
                      <URLInput
                        className="button-url"
                        value={featureGrid[index]["buttonURL"]}
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
                            img_id: featureGrid[index]["img_id"],
                            img_url: featureGrid[index]["img_url"],
                          };
                          data_copy[index] = new_content;
                          setAttributes({ featureGrid: data_copy });
                        }}
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
