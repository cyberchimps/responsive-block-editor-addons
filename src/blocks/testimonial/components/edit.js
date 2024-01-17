/**
 * Internal dependencies
 */

import times from "lodash/times";
import classnames from "classnames";
import Inspector from "./inspector";
import Testimonial from "./testimonial";
import icons from "./../../../utils/components/icons";
import { loadGoogleFont } from "../../../utils/font";
import EditorStyles from "./editor-styles";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const {
  RichText,
  AlignmentToolbar,
  MediaUpload,
  BlockControls,
  InnerBlocks,
  MediaUploadCheck,
  figure,
  URLInput,
} = wp.blockEditor;
const { Button, Dashicon } = wp.components;

const ALLOWED_MEDIA_TYPES = ["image"];

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-testimonial-style-" + this.props.clientId
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
      "responsive-block-editor-addons-testimonial-style-" + this.props.clientId
    );
    document.head.appendChild($style);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        testimonialBlock,
        count,
        gutter,
        testimonialAlignment,
        titleFontFamily,
        nameFontFamily,
        contentFontFamily,
        imageSize,
      },
      setAttributes,
    } = this.props;

    var data_copy = [...testimonialBlock];

    return [
      <style id={`responsive-block-editor-addons-testimonial-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
      // Show the alignment toolbar on focus
      <BlockControls key="controls">
        <AlignmentToolbar
                  key="alignment-toolbar"
          value={testimonialAlignment}
          onChange={(value) => setAttributes({ testimonialAlignment: value })}
        />
      </BlockControls>,

      // Show the block controls on focus
      <Inspector key="inspector" {...{ setAttributes, ...this.props }} />,

      // Show the block markup in the editor
      <div
      key={`testimonial-wrapper-${block_id}`}
        className={classnames(
          "wp-block-responsive-block-editor-addons-testimonial-wrapper",
          "responsive-block-editor-addons-block-testimonial",
          `block-${block_id}`,
          {
            "has-columns": count > 1,
            [`has-${count}-columns`]: count,
            "has-responsive-columns": count > 1,
            [`has-${gutter}-gutter`]: gutter,
          }
        )}
      >
        {testimonialBlock.map((test, index) => (
          <Testimonial key={`testimonial-${index}`} {...this.props}>
            {titleFontFamily && loadGoogleFont(titleFontFamily)}
            {nameFontFamily && loadGoogleFont(nameFontFamily)}
            {contentFontFamily && loadGoogleFont(contentFontFamily)}
            <RichText
                          key={`testimonial-content-${index}`}
              tagName="div"
              placeholder={__(
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
                "responsive-block-editor-addons"
              )}
              
              value={testimonialBlock[index]["testimonialContent"]}
              allowedFormats={["core/bold", "core/italic", "core/strikethrough", "core/link"]}
              className={classnames(
                "responsive-block-editor-addons-testimonial-text"
              )}
              onChange={(value) => {
                var new_content = {
                  testimonialContent: value,
                  testimonialTitle: data_copy[index]["testimonialTitle"],
                  testimonialName: data_copy[index]["testimonialName"],
                  testimonialImgId: data_copy[index]["testimonialImgId"],
                  testimonialImgURL: data_copy[index]["testimonialImgURL"],
                };
                data_copy[index] = new_content;
                setAttributes({ testimonialBlock: data_copy });
              }}
            />

            <div className="responsive-block-editor-addons-testimonial-info">
              <div className="responsive-block-editor-addons-testimonial-inner-block">
                <div className="responsive-block-editor-addons-testimonial-avatar-wrap">
                  <div className="responsive-block-editor-addons-testimonial-image-wrap">
                    <MediaUpload
                      key={`media-upload-${index}`}
                      buttonProps={{
                        className: "change-image",
                      }}
                      onSelect={(value) => {
                        var new_content = {
                          testimonialContent:
                            data_copy[index]["testimonialContent"],
                          testimonialTitle:
                            data_copy[index]["testimonialTitle"],
                          testimonialName: data_copy[index]["testimonialName"],
                          testimonialImgId: value.id,
                          testimonialImgURL: value,
                        };
                        data_copy[index] = new_content;
                        setAttributes({ testimonialBlock: data_copy });
                      }}
                      allowed={ALLOWED_MEDIA_TYPES}
                      type="image"
                      value={testimonialBlock[index]["testimonialImgId"]}
                      render={({ open }) => (
                        <Fragment>
                          <Button
                            className={
                              testimonialBlock[index]["testimonialImgId"]
                                ? "responsive-block-editor-addons-change-image"
                                : "responsive-block-editor-addons-add-image"
                            }
                            onClick={open}
                          >
                            {!testimonialBlock[index]["testimonialImgId"] ? (
                              icons.upload
                            ) : (
                              <img
                                className="responsive-block-editor-addons-testimonial-avatar"
                                src={
                                  testimonialBlock[index]["testimonialImgURL"]
                                    .sizes[imageSize]
                                    ? testimonialBlock[index][
                                        "testimonialImgURL"
                                      ].sizes[imageSize].url
                                    : testimonialBlock[index][
                                        "testimonialImgURL"
                                      ].sizes["full"].url
                                }
                                alt="avatar"
                              />
                            )}
                          </Button>
                          {testimonialBlock[index]["testimonialImgId"] && (
                            <Button
                              className="responsive-block-editor-addons-remove-image"
                              onClick={(value) => {
                                var new_content = {
                                  testimonialContent:
                                    data_copy[index]["testimonialContent"],
                                  testimonialTitle:
                                    data_copy[index]["testimonialTitle"],
                                  testimonialName:
                                    data_copy[index]["testimonialName"],
                                  testimonialImgId: null,
                                  testimonialImgURL: null,
                                };
                                data_copy[index] = new_content;
                                setAttributes({ testimonialBlock: data_copy });
                              }}
                            >
                              <Dashicon icon={"dismiss"} />
                            </Button>
                          )}
                        </Fragment>
                      )}
                    ></MediaUpload>
                  </div>
                </div>

                <div className="responsive-block-editor-addons-testimonial-details">
                  <RichText
                    key={`testimonial-name-${index}`}
                    tagName="h2"
                    placeholder={__(
                      "John Doe",
                      "responsive-block-editor-addons"
                    )}
                    
                    value={testimonialBlock[index]["testimonialName"]}
                    className="responsive-block-editor-addons-testimonial-name"
                    onChange={(value) => {
                      var new_content = {
                        testimonialContent:
                          data_copy[index]["testimonialContent"],
                        testimonialTitle: data_copy[index]["testimonialTitle"],
                        testimonialName: value,
                        testimonialImgId: data_copy[index]["testimonialImgId"],
                        testimonialImgURL:
                          data_copy[index]["testimonialImgURL"],
                      };
                      data_copy[index] = new_content;
                      setAttributes({ testimonialBlock: data_copy });
                    }}
                  />

                  <RichText
                                      key={`testimonial-title-${index}`}
                    tagName="small"
                    placeholder={__(
                      "Add title/designation",
                      "responsive-block-editor-addons"
                    )}
                    
                    value={testimonialBlock[index]["testimonialTitle"]}
                    className="responsive-block-editor-addons-testimonial-title"
                    onChange={(value) => {
                      var new_content = {
                        testimonialContent:
                          data_copy[index]["testimonialContent"],
                        testimonialTitle: value,
                        testimonialName: data_copy[index]["testimonialName"],
                        testimonialImgId: data_copy[index]["testimonialImgId"],
                        testimonialImgURL:
                          data_copy[index]["testimonialImgURL"],
                      };
                      data_copy[index] = new_content;
                      setAttributes({ testimonialBlock: data_copy });
                    }}
                  />
                </div>
              </div>
            </div>
          </Testimonial>
        ))}
      </div>,
    ];
  }
}
