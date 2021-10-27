/**
 * Internal dependencies
 */
import Feature from "./feature";
import React from "react";
import classnames from "classnames";

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { RichText, InnerBlocks } = wp.editor;
const { Dashicon } = wp.components;

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      block_id,
      featureList,
      count,
      gutter,
      imageSize,
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
    } = this.props.attributes;

    function convertTag( str ) {
      const regex = /u003c/ig;
      const regex2 = /u003e/ig;
      const regex3 = /u0026/ig;
      str = str?.replaceAll( regex, '\u003c' );
      str = str?.replaceAll( regex2, '\u003e');
      str = str?.replaceAll( regex3,'\u0026')
      return str;
    }

    return (
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
        {featureList.map((test, index) => (
          <Feature {...this.props}>
            {featureList[index]["featureImgURL"] && showImage && (
              <div className="responsive-block-editor-addons-feature-avatar-wrapper">
                <figure
                  className={"responsive-block-editor-addons-feature-avatar"}
                >
                  <img
                    className="responsive-block-editor-addons-feature-avatar-img"
                    src={
                      featureList[index]["featureImgURL"].sizes[imageSize]
                        ? featureList[index]["featureImgURL"].sizes[imageSize].url
                        : featureList[index]["featureImgURL"].sizes["full"].url
                    }
                    alt={name}
                  />
                </figure>
              </div>
            )}
            <div className={"responsive-block-editor-addons-feature-content"}>
              {featureList[index]["featureName"] && showName && (
                <RichText.Content
                  tagName="h3"
                  className="responsive-block-editor-addons-feature-name"
                  value={featureList[index]["featureName"]}
                />
              )}

              {featureList[index]["featureDescription"] && showDescription && (
                <RichText.Content
                  tagName="div"
                  className="responsive-block-editor-addons-feature-description"
                  value={convertTag(featureList[index]["featureDescription"])}
                />
              )}


            </div>
          </Feature>
        ))}
      </div>
    );
  }
}
