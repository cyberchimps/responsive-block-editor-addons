/**
 * Internal dependencies
 */
import classnames from "classnames";
import generateBackgroundImageEffect from "../../../generateBackgroundImageEffect";
import generateCSSUnit from "../../../generateCSSUnit";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { InnerBlocks } = wp.blockEditor;
import { hexToRgba } from "../../../utils";

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        sectionTag,
        backgroundType,
        overlayType,
        gradientOverlayType,
        backgroundVideo,
        opacity,
        boxShadowPosition,
        align,
        anchor,
      },
      setAttributes,
    } = this.props;

    var boxShadowPositionCSS = boxShadowPosition;

    if ("outset" === boxShadowPosition) {
      boxShadowPositionCSS = "";
    }

    const CustomTag = `${sectionTag}`;
    let imgopacity = opacity / 100;

    return (
      <div
        id={anchor}
        className={classnames(
          this.props.className,
          "responsive-block-editor-addons-block-section-outer-wrap",
          `block-${block_id}`,
          backgroundType ? `background-type-${backgroundType}` : "",
          `align${align}`
        )}
      >
        <CustomTag
          className={classnames(
            "responsive-section-wrap",
            "responsive-block-editor-addons-block-section",
            `overlay-type-${overlayType}`,
            `${gradientOverlayType}`
          )}
        >
          {"video" == backgroundType && (
          <div className="responsive-block-editor-addons-section__video-wrap">
            {backgroundVideo && (
              <video autoplay loop muted playsinline>
                <source src={backgroundVideo.url} type="video/mp4" />
              </video>
            )}
          </div>
        )}
          <div className="responsive-section-inner-wrap">
            <InnerBlocks.Content />
          </div>
        </CustomTag>
      </div>
    );
  }
}
