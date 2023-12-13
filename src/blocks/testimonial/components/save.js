/**
 * Internal dependencies
 */
import Testimonial from "./testimonial";
import times from "lodash/times";
import classnames from "classnames";

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

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      block_id,
      testimonialBlock,
      count,
      gutter,
      imageSize,
      testimonialImgURL
    } = this.props.attributes;

    return (
      <div key={`div-block${block_id}`}
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
            <RichText.Content
              tagName="div"
              className="responsive-block-editor-addons-testimonial-text"
              value={testimonialBlock[index]["testimonialContent"]}
            />

            <div className="responsive-block-editor-addons-testimonial-info">
              <div className="responsive-block-editor-addons-testimonial-inner-block">
                {testimonialBlock[index]["testimonialImgURL"] && (
                  <div className="responsive-block-editor-addons-testimonial-avatar-wrap">
                    <div className="responsive-block-editor-addons-testimonial-image-wrap">
                      <img
                        className="responsive-block-editor-addons-testimonial-avatar"
                        src={
                          testimonialBlock[index]["testimonialImgURL"].sizes[
                            imageSize
                          ]
                            ? testimonialBlock[index]["testimonialImgURL"]
                                .sizes[imageSize].url
                            : testimonialBlock[index]["testimonialImgURL"]
                                .sizes["full"].url
                        }
                        alt="avatar"
                      />
                    </div>
                  </div>
                )}

                <div className="responsive-block-editor-addons-testimonial-details">
                  {testimonialBlock[index]["testimonialName"] && (
                    <RichText.Content
                      tagName="h2"
                      className="responsive-block-editor-addons-testimonial-name"
                      value={testimonialBlock[index]["testimonialName"]}
                    />
                  )}

                  {testimonialBlock[index]["testimonialTitle"] && (
                    <RichText.Content
                      tagName="small"
                      className="responsive-block-editor-addons-testimonial-title"
                      value={testimonialBlock[index]["testimonialTitle"]}
                    />
                  )}
                </div>
              </div>
            </div>
          </Testimonial>
        ))}
      </div>
    );
  }
}
