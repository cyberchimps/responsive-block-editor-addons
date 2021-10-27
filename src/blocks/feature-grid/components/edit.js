/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import times from "lodash/times";
import React from "react";
import Feature from "./feature";
import EditorStyles from "./editor-styles";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const {
  RichText,
  AlignmentToolbar,
  BlockControls,
  MediaUpload,
  InnerBlocks,
  MediaUploadCheck,
  figure,
  URLInput,
} = wp.editor;
const { Button, Dashicon, Icon } = wp.components;

import memoize from "memize";
import map from "lodash/map";
import { loadGoogleFont } from "../../../utils/font";

const ALLOWED_MEDIA_TYPES = ["image"];


export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-feature-grid-style-" + this.props.clientId
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
      "responsive-block-editor-addons-feature-grid-style-" + this.props.clientId
    );
    document.head.appendChild($style);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        featureList,
        count,
        gutter,
        imageSize,
        titleFontFamily,
        descriptionFontFamily,
        alignment,
        facebook,
        twitter,
        linkedin,
        instagram,
        email,
        youtube,
        pinterest,
        showImage,
        showName,
        showDescription,
        showSocialIcons,
        stack
      },
      isSelected,
      setAttributes,
    } = this.props;

    var data_copy = [...featureList];

    const onChangeAlignment = (newAlignment) =>
      setAttributes({
        alignment: newAlignment === undefined ? "none" : newAlignment,
      });

    function convertTag( str ) {
      const regex = /u003c/ig;
      const regex2 = /u003e/ig;
      const regex3 = /u0026/ig;
      str = str?.replaceAll( regex, '\u003c' );
      str = str?.replaceAll( regex2, '\u003e');
      str = str?.replaceAll( regex3,'\u0026')
      return str;
    }

    return [
      // Show the block controls on focus
      <Inspector {...{ setAttributes, ...this.props }} />,

      // Show the block markup in the editor
      <div
        className={classnames(
          "wp-block-responsive-block-editor-addons-feature-grid-wrapper",
          `block-${block_id}`,
          {
            "has-columns": count > 1,
            [`has-${count}-columns`]: count,
            "has-responsive-columns": count > 1,
            [`has-${gutter}-gutter`]: gutter,
          },
          `responsive-feature-block-columns__stack-${stack}`,
        )}
      >
        {
          <BlockControls>
            <AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
          </BlockControls>
        }
        {featureList.map((test, index) => (
          <Feature {...this.props}>
            {showImage && (
              <div className="responsive-block-editor-addons-feature-avatar-wrapper">
                {titleFontFamily && loadGoogleFont(titleFontFamily)}
                {descriptionFontFamily && loadGoogleFont(descriptionFontFamily)}
                <figure className="responsive-block-editor-addons-feature-avatar">
                  <MediaUploadCheck>
                    <MediaUpload
                      onSelect={(value) => {
                        var new_content = {
                          featureName: data_copy[index]["featureName"],
                          featureDescription: data_copy[index]["featureDescription"],
                          button: data_copy[index]["button"],
                          buttonURL: data_copy[index]["buttonURL"],
                          featureImgId: value.id,
                          featureImgURL: value,
                        };
                        data_copy[index] = new_content;
                        setAttributes({ featureList: data_copy });
                      }}
                      allowedTypes={["image"]}
                      value={featureList[index]["featureImgURL"]}
                      render={({ open }) => (
                        <Button onClick={open}>
                          {!featureList[index]["featureImgURL"] ? (
                            <Dashicon icon="format-image" />
                          ) : (
                            <img
                              className="responsive-block-editor-addons-feature-avatar-img"
                              src={
                                featureList[index]["featureImgURL"].sizes[imageSize]
                                  ? featureList[index]["featureImgURL"].sizes[
                                      imageSize
                                    ].url
                                  : featureList[index]["featureImgURL"].sizes["full"]
                                      .url
                              }
                              alt="avatar"
                            />
                          )}
                        </Button>
                      )}
                    ></MediaUpload>
                  </MediaUploadCheck>
                </figure>
              </div>
            )}
            <div className={"responsive-block-editor-addons-feature-content"}>
              {showName && (
                <RichText
                  tagName="h3"
                  placeholder={__("John Doe", "responsive-block-editor-addons")}
                  keepPlaceholderOnFocus
                  value={featureList[index]["featureName"]}
                  className="responsive-block-editor-addons-feature-name"
                  onChange={(value) => {
                    var new_content = {
                      featureName: value,
                      featureDescription: data_copy[index]["featureDescription"],
                      featureImgId: data_copy[index]["featureImgId"],
                      featureImgURL: data_copy[index]["featureImgURL"],
                      button: data_copy[index]["button"],
                        buttonURL: data_copy[index]["buttonURL"],
                    };
                    data_copy[index] = new_content;
                    setAttributes({ featureList: data_copy });
                  }}
                />
              )}

              {showDescription && (
                <RichText
                  tagName="div"
                  multiline="p"
                  placeholder={__(
                    "Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
                    "responsive-block-editor-addons"
                  )}
                  keepPlaceholderOnFocus
                  value={convertTag(featureList[index]["featureDescription"])}
                  formattingControls={[
                    "bold",
                    "italic",
                    "strikethrough",
                    "link",
                  ]}
                  className={classnames(
                    "responsive-block-editor-addons-feature-description"
                  )}
                  onChange={(value) => {
                    var new_content = {
                      featureName: data_copy[index]["featureName"],
                      featureDescription: value,
                      featureImgId: data_copy[index]["featureImgId"],
                      featureImgURL: data_copy[index]["featureImgURL"],
                        button: data_copy[index]["button"],
                        buttonURL: data_copy[index]["buttonURL"],
                    };
                    data_copy[index] = new_content;
                    setAttributes({ featureList: data_copy });
                  }}
                />
              )}

            </div>
          </Feature>
        ))}
      </div>,
    ];
  }
}
