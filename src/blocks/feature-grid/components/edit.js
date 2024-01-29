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
  MediaUpload,
  URLInput,
} = wp.blockEditor;
const { Button, Dashicon, Icon } = wp.components;

import memoize from "memize";

const ALLOWED_MEDIA_TYPES = ["image"];

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-feature-grid-style-" +
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
      "responsive-block-editor-addons-feature-grid-style-" +
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
          layout,
        count,
        gutter,
        contentAlign,
        backgroundType,
        titleFontFamily,
        descFontFamily,
        ctaFontFamily,
        showImage,
        showTitle,
        showDesc,
        showButton,
        blockAlign,
        imageSize,
        imageShape,
          titleTag
      },
      setAttributes,
    } = this.props;

    var data_copy = [...featureGrid];

    const classes = classnames(
      this.props.className, 
      "responsive-block-editor-addons-block-feature-grid",
      `block-${block_id}`,
      `grid-layout-${layout}`,
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

    const formattingControls = ["core/bold", "core/italic", "core/strikethrough"];

    let alignStyle = "center";
    if ("left" == blockAlign) {
      alignStyle = "flex-start";
    }
    if ("right" == blockAlign) {
      alignStyle = "flex-end";
    }

    return [
      <style id={`esponsive-block-editor-addons-feature-grid-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
      // Show the alignment toolbar on focus
      <BlockControls key="controls">
        <AlignmentToolbar
          value={blockAlign}
          onChange={(value) => setAttributes({ blockAlign: value })}
        />
      </BlockControls>,

      // Show the block controls on focus
      <Inspector key="inspector" {...{ setAttributes, ...this.props }} />,
      <div key={`feature-grid-${block_id}`} className={classnames(classes, "image-shape-" + imageShape)}>
        {titleFontFamily && loadGoogleFont(titleFontFamily)}
        {descFontFamily && loadGoogleFont(descFontFamily)}
        {ctaFontFamily && loadGoogleFont(ctaFontFamily)}
        <div className={innerClasses}>
          {featureGrid.map((test, index) => (
            <Fragment key={`feature-grid-fragment-${index}`} >
              <div key={`feature-grid-div-${index}`}
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
                            desc: data_copy[index]["desc"],
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
                                    desc: data_copy[index]["desc"],
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
                        desc: data_copy[index]["desc"],
                        img_id: featureGrid[index]["img_id"],
                        img_url: featureGrid[index]["img_url"],
                        button: data_copy[index]["button"],
                        buttonURL: data_copy[index]["buttonURL"],
                      };
                      data_copy[index] = new_content;
                      setAttributes({ featureGrid: data_copy });
                    }}
                    allowedFormats={formattingControls}
                    
                  />
                )}
                {showDesc && (
                  <RichText
                    tagName="p"
                    className="wp-block-responsive-block-editor-addons-feature-grid-item__desc"
                    value={featureGrid[index]["desc"]}
                    onChange={(value) => {
                      var new_content = {
                        title: data_copy[index]["title"],
                        desc: value,
                        img_id: featureGrid[index]["img_id"],
                        img_url: featureGrid[index]["img_url"],
                        button: data_copy[index]["button"],
                        buttonURL: data_copy[index]["buttonURL"],
                      };
                      data_copy[index] = new_content;
                      setAttributes({ featureGrid: data_copy });
                    }}
                    allowedFormats={formattingControls}
                    
                  />
                )}

                {showButton && (
                  <Fragment>
                    <RichText
                      tagName="a"
                      className={classnames(
                        "wp-block-responsive-block-editor-addons-feature-grid-item__button"
                      )}
                      value={featureGrid[index]["button"]}
                      onChange={(value) => {
                        var new_content = {
                          button: value,
                          buttonURL: data_copy[index]["buttonURL"],
                          title: data_copy[index]["title"],
                          currency: data_copy[index]["currency"],
                          price_suffix: data_copy[index]["price_suffix"],
                          desc: data_copy[index]["desc"],
                          amount: data_copy[index]["amount"],
                          features: data_copy[index]["features"],
                          img_id: featureGrid[index]["img_id"],
                          img_url: featureGrid[index]["img_url"],
                        };
                        data_copy[index] = new_content;
                        setAttributes({ featureGrid: data_copy });
                      }}
                      allowedFormats={formattingControls}
                      
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
                            desc: data_copy[index]["desc"],
                            amount: data_copy[index]["amount"],
                            features: data_copy[index]["features"],
                            img_id: featureGrid[index]["img_id"],
                            img_url: featureGrid[index]["img_url"],
                          };
                          data_copy[index] = new_content;
                          setAttributes({ featureGrid: data_copy });
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
