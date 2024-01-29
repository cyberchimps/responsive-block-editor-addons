/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import times from "lodash/times";
import React from "react";
import Team from "./team";
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
} = wp.blockEditor;
const { Button, Dashicon, Icon } = wp.components;

import memoize from "memize";
import map from "lodash/map";
import { loadGoogleFont } from "../../../utils/font";

const ALLOWED_MEDIA_TYPES = ["image"];

const getCount = memoize((count) => {
  return times(count, (index) => [
    "responsive-block-editor-addons/team",
    {
      placeholder: sprintf(
        /* translators: %d: a digit 1-3 */
        __("Team Title %d", "responsive-block-editor-addons"),
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
      "responsive-block-editor-addons-team-style-" + this.props.clientId
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
      "responsive-block-editor-addons-team-style-" + this.props.clientId
    );
    document.head.appendChild($style);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        teamBlock,
        count,
        gutter,
        imageSize,
        titleFontFamily,
        descriptionFontFamily,
        designationFontFamily,
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
        showDesignation,
        showDescription,
        showSocialIcons,
        stack
      },
      isSelected,
      setAttributes,
    } = this.props;

    var data_copy = [...teamBlock];

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
      <style id={`responsive-block-editor-addons-team-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
      // Show the block controls on focus
      <Inspector key="inspector" {...{ setAttributes, ...this.props }} />,

      // Show the block markup in the editor
      <div key={`team-wrapper-${block_id}`}
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
        {
          <BlockControls>
            <AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
          </BlockControls>
        }
        {teamBlock.map((test, index) => (
          <Team key={`team-avatar-${index}`} {...this.props}>
            {showImage && (
              <div className="responsive-block-editor-addons-team-avatar-wrapper">
                {titleFontFamily && loadGoogleFont(titleFontFamily)}
                {descriptionFontFamily && loadGoogleFont(descriptionFontFamily)}
                {designationFontFamily && loadGoogleFont(designationFontFamily)}
                <figure className="responsive-block-editor-addons-team-avatar">
                  <MediaUploadCheck>
                    <MediaUpload
                      onSelect={(value) => {
                        var new_content = {
                          teamName: data_copy[index]["teamName"],
                          teamDesignation: data_copy[index]["teamDesignation"],
                          teamDescription: data_copy[index]["teamDescription"],
                          emailAddress: data_copy[index]["emailAddress"],
                          twitterUrl: data_copy[index]["twitterUrl"],
                          facebookUrl: data_copy[index]["facebookUrl"],
                          instagramUrl: data_copy[index]["instagramUrl"],
                          youtubeUrl: data_copy[index]["youtubeUrl"],
                          pinterestUrl: data_copy[index]["pinterestUrl"],
                          linkedinUrl: data_copy[index]["linkedinUrl"],
                          teamImgId: value.id,
                          teamImgURL: value,
                        };
                        data_copy[index] = new_content;
                        setAttributes({ teamBlock: data_copy });
                      }}
                      allowedTypes={["image"]}
                      value={teamBlock[index]["teamImgURL"]}
                      render={({ open }) => (
                        <Button onClick={open}>
                          {!teamBlock[index]["teamImgURL"] ? (
                            <Dashicon icon="format-image" />
                          ) : (
                            <img
                              className="responsive-block-editor-addons-team-avatar-img"
                              src={
                                teamBlock[index]["teamImgURL"].sizes[imageSize]
                                  ? teamBlock[index]["teamImgURL"].sizes[
                                      imageSize
                                    ].url
                                  : teamBlock[index]["teamImgURL"].sizes["full"]
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
            <div className={"responsive-block-editor-addons-team-content"}>
              {showName && (
                <RichText
                  tagName="h3"
                  placeholder={__("John Doe", "responsive-block-editor-addons")}
                  
                  value={teamBlock[index]["teamName"]}
                  className="responsive-block-editor-addons-team-name"
                  onChange={(value) => {
                    var new_content = {
                      teamName: value,
                      teamDesignation: data_copy[index]["teamDesignation"],
                      teamDescription: data_copy[index]["teamDescription"],
                      teamImgId: data_copy[index]["teamImgId"],
                      teamImgURL: data_copy[index]["teamImgURL"],
                      emailAddress: data_copy[index]["emailAddress"],
                      twitterUrl: data_copy[index]["twitterUrl"],
                      facebookUrl: data_copy[index]["facebookUrl"],
                      instagramUrl: data_copy[index]["instagramUrl"],
                      youtubeUrl: data_copy[index]["youtubeUrl"],
                      pinterestUrl: data_copy[index]["pinterestUrl"],
                      linkedinUrl: data_copy[index]["linkedinUrl"],
                    };
                    data_copy[index] = new_content;
                    setAttributes({ teamBlock: data_copy });
                  }}
                />
              )}
              {showDesignation && (
                <RichText
                  tagName="div"
                  multiline={false}
                  placeholder={__(
                    "Designation",
                    "responsive-block-editor-addons"
                  )}
                  
                  value={convertTag(teamBlock[index]["teamDesignation"])}
                  allowedFormats={[
                    "core/bold",
                    "core/italic",
                    "core/strikethrough",
                    "core/link",
                  ]}
                  className={classnames(
                    "responsive-block-editor-addons-team-designation"
                  )}
                  onChange={(value) => {
                    var new_content = {
                      teamName: data_copy[index]["teamName"],
                      teamDesignation: value,
                      teamDescription: data_copy[index]["teamDescription"],
                      teamImgId: data_copy[index]["teamImgId"],
                      teamImgURL: data_copy[index]["teamImgURL"],
                      emailAddress: data_copy[index]["emailAddress"],
                      twitterUrl: data_copy[index]["twitterUrl"],
                      facebookUrl: data_copy[index]["facebookUrl"],
                      instagramUrl: data_copy[index]["instagramUrl"],
                      youtubeUrl: data_copy[index]["youtubeUrl"],
                      pinterestUrl: data_copy[index]["pinterestUrl"],
                      linkedinUrl: data_copy[index]["linkedinUrl"],
                    };
                    data_copy[index] = new_content;
                    setAttributes({ teamBlock: data_copy });
                  }}
                />
              )}
              {showDescription && (
                <RichText
                  tagName="div"
                  multiline={false}
                  placeholder={__(
                    "Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
                    "responsive-block-editor-addons"
                  )}
                  
                  value={convertTag(teamBlock[index]["teamDescription"])}
                  allowedFormats={[
                    "core/bold",
                    "core/italic",
                    "core/strikethrough",
                    "core/link",
                  ]}
                  className={classnames(
                    "responsive-block-editor-addons-team-description"
                  )}
                  onChange={(value) => {
                    var new_content = {
                      teamName: data_copy[index]["teamName"],
                      teamDesignation: data_copy[index]["teamDesignation"],
                      teamDescription: value,
                      teamImgId: data_copy[index]["teamImgId"],
                      teamImgURL: data_copy[index]["teamImgURL"],
                      twitterUrl: data_copy[index]["twitterUrl"],
                      emailAddress: data_copy[index]["emailAddress"],
                      facebookUrl: data_copy[index]["facebookUrl"],
                      instagramUrl: data_copy[index]["instagramUrl"],
                      youtubeUrl: data_copy[index]["youtubeUrl"],
                      pinterestUrl: data_copy[index]["pinterestUrl"],
                      linkedinUrl: data_copy[index]["linkedinUrl"],
                    };
                    data_copy[index] = new_content;
                    setAttributes({ teamBlock: data_copy });
                  }}
                />
              )}
              {showSocialIcons && (
                <div className="responsive-block-editor-addons-team-social-icons-wrapper">
                  <ul className="responsive-block-editor-addons-team-social-icons edit-block">
                    {!facebook && (
                      <li>
                        <a href={teamBlock[index]["facebookUrl"]}>
                          <span className="dashicons dashicons-facebook"></span>
                        </a>
                        {isSelected && (
                          <form
                            key="form-link"
                            onSubmit={(event) => event.preventDefault()}
                          >
                            <Dashicon icon={"admin-links"} />
                            <URLInput
                              className="button-url"
                              value={teamBlock[index]["facebookUrl"]}
                              onChange={(value) => {
                                var new_content = {
                                  facebookUrl: value,
                                  teamName: data_copy[index]["teamName"],
                                  teamDesignation:
                                    data_copy[index]["teamDesignation"],
                                  teamDescription:
                                    data_copy[index]["teamDescription"],
                                  teamImgId: data_copy[index]["teamImgId"],
                                  teamImgURL: data_copy[index]["teamImgURL"],
                                  emailAddress:
                                    data_copy[index]["emailAddress"],
                                  twitterUrl: data_copy[index]["twitterUrl"],
                                  instagramUrl:
                                    data_copy[index]["instagramUrl"],
                                  youtubeUrl: data_copy[index]["youtubeUrl"],
                                  pinterestUrl:
                                    data_copy[index]["pinterestUrl"],
                                  linkedinUrl: data_copy[index]["linkedinUrl"],
                                };
                                data_copy[index] = new_content;
                                setAttributes({ teamBlock: data_copy });
                              }}
                              __nextHasNoMarginBottom={true}
                            />
                            <Button
                              label={__(
                                "Apply",
                                "responsive-block-editor-addons"
                              )}
                              type="submit"
                            >
                              <Icon icon="editor-break" />
                            </Button>
                          </form>
                        )}
                      </li>
                    )}
                    {!twitter && (
                      <li>
                        <a href={teamBlock[index]["twitterUrl"]}>
                          <span className="dashicons dashicons-twitter"></span>
                        </a>
                        {isSelected && (
                          <form
                            key="form-link"
                            onSubmit={(event) => event.preventDefault()}
                          >
                            <Dashicon icon={"admin-links"} />
                            <URLInput
                              className="button-url"
                              value={teamBlock[index]["twitterUrl"]}
                              onChange={(value) => {
                                var new_content = {
                                  twitterUrl: value,
                                  teamName: data_copy[index]["teamName"],
                                  teamDesignation:
                                    data_copy[index]["teamDesignation"],
                                  teamDescription:
                                    data_copy[index]["teamDescription"],
                                  teamImgId: data_copy[index]["teamImgId"],
                                  teamImgURL: data_copy[index]["teamImgURL"],
                                  emailAddress:
                                    data_copy[index]["emailAddress"],
                                  facebookUrl: data_copy[index]["facebookUrl"],
                                  instagramUrl:
                                    data_copy[index]["instagramUrl"],
                                  youtubeUrl: data_copy[index]["youtubeUrl"],
                                  pinterestUrl:
                                    data_copy[index]["pinterestUrl"],
                                  linkedinUrl: data_copy[index]["linkedinUrl"],
                                };
                                data_copy[index] = new_content;
                                setAttributes({ teamBlock: data_copy });
                              }}
                              __nextHasNoMarginBottom={true}
                            />
                            <Button
                              label={__(
                                "Apply",
                                "responsive-block-editor-addons"
                              )}
                              type="submit"
                            >
                              <Icon icon="editor-break" />
                            </Button>
                          </form>
                        )}
                      </li>
                    )}                   
                    {!linkedin && (
                      <li>
                        <a href={teamBlock[index]["linkedinUrl"]}>
                          <span className="dashicons dashicons-linkedin"></span>
                        </a>
                        {isSelected && (
                          <form
                            key="form-link"
                            onSubmit={(event) => event.preventDefault()}
                          >
                            <Dashicon icon={"admin-links"} />
                            <URLInput
                              className="button-url"
                              value={teamBlock[index]["linkedinUrl"]}
                              onChange={(value) => {
                                var new_content = {
                                  linkedinUrl: value,
                                  teamName: data_copy[index]["teamName"],
                                  teamDesignation:
                                    data_copy[index]["teamDesignation"],
                                  teamDescription:
                                    data_copy[index]["teamDescription"],
                                  teamImgId: data_copy[index]["teamImgId"],
                                  teamImgURL: data_copy[index]["teamImgURL"],
                                  facebookUrl: data_copy[index]["facebookUrl"],
                                  emailAddress:
                                    data_copy[index]["emailAddress"],
                                  instagramUrl:
                                    data_copy[index]["instagramUrl"],
                                  youtubeUrl: data_copy[index]["youtubeUrl"],
                                  pinterestUrl:
                                    data_copy[index]["pinterestUrl"],
                                  twitterUrl: data_copy[index]["twitterUrl"],
                                };
                                data_copy[index] = new_content;
                                setAttributes({ teamBlock: data_copy });
                              }}
                              __nextHasNoMarginBottom={true}
                            />
                            <Button
                              label={__(
                                "Apply",
                                "responsive-block-editor-addons"
                              )}
                              type="submit"
                            >
                              <Icon icon="editor-break" />
                            </Button>
                          </form>
                        )}
                      </li>
                    )}
                    {!instagram && (
                      <li>
                        <a href={teamBlock[index]["instagramUrl"]}>
                          <span className="dashicons dashicons-instagram"></span>
                        </a>
                        {isSelected && (
                          <form
                            key="form-link"
                            onSubmit={(event) => event.preventDefault()}
                          >
                            <Dashicon icon={"admin-links"} />
                            <URLInput
                              className="button-url"
                              value={teamBlock[index]["instagramUrl"]}
                              onChange={(value) => {
                                var new_content = {
                                  instagramUrl: value,
                                  teamName: data_copy[index]["teamName"],
                                  teamDesignation:
                                    data_copy[index]["teamDesignation"],
                                  teamDescription:
                                    data_copy[index]["teamDescription"],
                                  teamImgId: data_copy[index]["teamImgId"],
                                  teamImgURL: data_copy[index]["teamImgURL"],
                                  facebookUrl: data_copy[index]["facebookUrl"],
                                  emailAddress:
                                    data_copy[index]["emailAddress"],
                                  twitterUrl: data_copy[index]["twitterUrl"],
                                  youtubeUrl: data_copy[index]["youtubeUrl"],
                                  pinterestUrl:
                                    data_copy[index]["pinterestUrl"],
                                  linkedinUrl: data_copy[index]["linkedinUrl"],
                                };
                                data_copy[index] = new_content;
                                setAttributes({ teamBlock: data_copy });
                              }}
                              __nextHasNoMarginBottom={true}
                            />
                            <Button
                              label={__(
                                "Apply",
                                "responsive-block-editor-addons"
                              )}
                              type="submit"
                            >
                              <Icon icon="editor-break" />
                            </Button>
                          </form>
                        )}
                      </li>
                    )}
                    {!email && (
                      <li>
                        <a href={teamBlock[index]["emailAddress"]}>
                          <span className="dashicons dashicons-email"></span>
                        </a>
                        {isSelected && (
                          <form
                            key="form-link"
                            onSubmit={(event) => event.preventDefault()}
                          >
                            <Dashicon icon={"admin-links"} />
                            <URLInput
                              className="button-url"
                              value={teamBlock[index]["emailAddress"]}
                              onChange={(value) => {
                                var new_content = {
                                  emailAddress: value,
                                  teamName: data_copy[index]["teamName"],
                                  teamDesignation:
                                    data_copy[index]["teamDesignation"],
                                  teamDescription:
                                    data_copy[index]["teamDescription"],
                                  teamImgId: data_copy[index]["teamImgId"],
                                  teamImgURL: data_copy[index]["teamImgURL"],
                                  facebookUrl: data_copy[index]["facebookUrl"],
                                  instagramUrl:
                                    data_copy[index]["instagramUrl"],
                                  twitterUrl: data_copy[index]["twitterUrl"],
                                  youtubeUrl: data_copy[index]["youtubeUrl"],
                                  pinterestUrl:
                                    data_copy[index]["pinterestUrl"],
                                  linkedinUrl: data_copy[index]["linkedinUrl"],
                                };
                                data_copy[index] = new_content;
                                setAttributes({ teamBlock: data_copy });
                              }}
                              __nextHasNoMarginBottom={true}
                            />
                            <Button
                              label={__(
                                "Apply",
                                "responsive-block-editor-addons"
                              )}
                              type="submit"
                            >
                              <Icon icon="editor-break" />
                            </Button>
                          </form>
                        )}
                      </li>
                    )}
                    {!youtube && (
                      <li>
                        <a href={teamBlock[index]["youtubeUrl"]}>
                          <span className="dashicons dashicons-youtube"></span>
                        </a>
                        {isSelected && (
                          <form
                            key="form-link"
                            onSubmit={(event) => event.preventDefault()}
                          >
                            <Dashicon icon={"admin-links"} />
                            <URLInput
                              className="button-url"
                              value={teamBlock[index]["youtubeUrl"]}
                              onChange={(value) => {
                                var new_content = {
                                  youtubeUrl: value,
                                  teamName: data_copy[index]["teamName"],
                                  teamDesignation:
                                    data_copy[index]["teamDesignation"],
                                  teamDescription:
                                    data_copy[index]["teamDescription"],
                                  teamImgId: data_copy[index]["teamImgId"],
                                  teamImgURL: data_copy[index]["teamImgURL"],
                                  facebookUrl: data_copy[index]["facebookUrl"],
                                  emailAddress:
                                    data_copy[index]["emailAddress"],
                                  instagramUrl:
                                    data_copy[index]["instagramUrl"],
                                  twitterUrl: data_copy[index]["twitterUrl"],
                                  pinterestUrl:
                                    data_copy[index]["pinterestUrl"],
                                  linkedinUrl: data_copy[index]["linkedinUrl"],
                                };
                                data_copy[index] = new_content;
                                setAttributes({ teamBlock: data_copy });
                              }}
                              __nextHasNoMarginBottom={true}
                            />
                            <Button
                              label={__(
                                "Apply",
                                "responsive-block-editor-addons"
                              )}
                              type="submit"
                            >
                              <Icon icon="editor-break" />
                            </Button>
                          </form>
                        )}
                      </li>
                    )}
                    {!pinterest && (
                      <li>
                        <a href={teamBlock[index]["pinterestUrl"]}>
                          <span className="dashicons dashicons-pinterest"></span>
                        </a>
                        {isSelected && (
                          <form
                            key="form-link"
                            onSubmit={(event) => event.preventDefault()}
                          >
                            <Dashicon icon={"admin-links"} />
                            <URLInput
                              className="button-url"
                              value={teamBlock[index]["pinterestUrl"]}
                              onChange={(value) => {
                                var new_content = {
                                  pinterestUrl: value,
                                  teamName: data_copy[index]["teamName"],
                                  teamDesignation:
                                    data_copy[index]["teamDesignation"],
                                  teamDescription:
                                    data_copy[index]["teamDescription"],
                                  teamImgId: data_copy[index]["teamImgId"],
                                  teamImgURL: data_copy[index]["teamImgURL"],
                                  facebookUrl: data_copy[index]["facebookUrl"],
                                  emailAddress:
                                    data_copy[index]["emailAddress"],
                                  instagramUrl:
                                    data_copy[index]["instagramUrl"],
                                  youtubeUrl: data_copy[index]["youtubeUrl"],
                                  twitterUrl: data_copy[index]["twitterUrl"],
                                  linkedinUrl: data_copy[index]["linkedinUrl"],
                                };
                                data_copy[index] = new_content;
                                setAttributes({ teamBlock: data_copy });
                              }}
                              __nextHasNoMarginBottom={true}
                            />
                            <Button
                              label={__(
                                "Apply",
                                "responsive-block-editor-addons"
                              )}
                              type="submit"
                            >
                              <Icon icon="editor-break" />
                            </Button>
                          </form>
                        )}
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </Team>
        ))}
      </div>,
    ];
  }
}
