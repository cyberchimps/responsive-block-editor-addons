/**
 * Internal dependencies
 */
import Team from "./team";
import React from "react";
import classnames from "classnames";

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { RichText, InnerBlocks } = wp.blockEditor;
const { Dashicon } = wp.components;

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      block_id,
      teamBlock,
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
      showDesignation,
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
      <div key={`block-${block_id}`}
        className={classnames(
          "wp-block-responsive-block-editor-addons-team-wrapper",
          `block-${block_id}`,
          {
            "has-columns": count > 1,
            [`has-${count}-columns`]: count,
            "has-responsive-columns": count > 1,
            [`has-${gutter}-gutter`]: gutter,
          },
          `responsive-team-block-columns__stack-${stack}`,
        )}
      >
        {teamBlock.map((test, index) => (
          <Team key={`team-avatar-${index}`} {...this.props}>
            {teamBlock[index]["teamImgURL"] && showImage && (
              <div className="responsive-block-editor-addons-team-avatar-wrapper">
                <figure
                  className={"responsive-block-editor-addons-team-avatar"}
                >
                  <img
                    className="responsive-block-editor-addons-team-avatar-img"
                    src={
                      teamBlock[index]["teamImgURL"].sizes[imageSize]
                        ? teamBlock[index]["teamImgURL"].sizes[imageSize].url
                        : teamBlock[index]["teamImgURL"].sizes["full"].url
                    }
                    alt={name}
                  />
                </figure>
              </div>
            )}
            <div className={"responsive-block-editor-addons-team-content"}>
              {teamBlock[index]["teamName"] && showName && (
                <RichText.Content
                  tagName="h3"
                  className="responsive-block-editor-addons-team-name"
                  value={teamBlock[index]["teamName"]}
                />
              )}

              {teamBlock[index]["teamDesignation"] && showDesignation && (
                <RichText.Content
                  tagName="div"
                  className="responsive-block-editor-addons-team-designation"
                  value={convertTag(teamBlock[index]["teamDesignation"])}
                />
              )}

              {teamBlock[index]["teamDescription"] && showDescription && (
                <RichText.Content
                  tagName="div"
                  className="responsive-block-editor-addons-team-description"
                  value={convertTag(teamBlock[index]["teamDescription"])}
                />
              )}

              {showSocialIcons && (
                <div className="responsive-block-editor-addons-team-social-icons-wrapper">
                  <ul className="responsive-block-editor-addons-team-social-icons">
                    {!facebook && (
                      <li>
                        <a href={teamBlock[index]["facebookUrl"]}>
                          <span class="dashicons dashicons-facebook"></span>
                        </a>
                      </li>
                    )}
                    {!twitter && (
                      <li>
                        <a href={teamBlock[index]["twitterUrl"]}>
                          <span class="dashicons dashicons-twitter"></span>
                        </a>
                      </li>
                    )}                   
                    {!linkedin && (
                      <li>
                        <a href={teamBlock[index]["linkedinUrl"]}>
                          <span class="dashicons dashicons-linkedin"></span>
                        </a>
                      </li>
                    )}
                    {!instagram && (
                      <li>
                        <a href={teamBlock[index]["instagramUrl"]}>
                          <span class="dashicons dashicons-instagram"></span>
                        </a>
                      </li>
                    )}
                    {!email && (
                      <li>
                        <a href={"mailto:" + teamBlock[index]["emailAddress"]}>
                          <span class="dashicons dashicons-email"></span>
                        </a>
                      </li>
                    )}
                    {!youtube && (
                      <li>
                        <a href={teamBlock[index]["youtubeUrl"]}>
                          <span class="dashicons dashicons-youtube"></span>
                        </a>
                      </li>
                    )}
                    {!pinterest && (
                      <li>
                        <a href={teamBlock[index]["pinterestUrl"]}>
                          <span class="dashicons dashicons-pinterest"></span>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </Team>
        ))}
      </div>
    );
  }
}
