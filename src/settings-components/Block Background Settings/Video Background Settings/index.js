/**
 * Box-Shadow reusable component.
 *
 */
const { __ } = wp.i18n;

const { MediaUpload } = wp.blockEditor;

const { BaseControl, Button } = wp.components;

// Extend component
const { Component, Fragment } = wp.element;

class VideoBackgroundControl extends Component {
  constructor() {
    super(...arguments);
      this.onRemoveVideo = this.onRemoveVideo.bind(this);
      this.onSelectVideo = this.onSelectVideo.bind(this);
  }
    /*
       * Event to set Video as null while removing.
       */
    onRemoveVideo() {
        const { setAttributes } = this.props;

        setAttributes({ backgroundVideo: null });
    }

    /*
     * Event to set Video while adding.
     */
    onSelectVideo(media) {
        const { setAttributes } = this.props;

        if (!media || !media.url) {
            setAttributes({ backgroundVideo: null });
            return;
        }
        if (!media.type || "video" != media.type) {
            return;
        }
        setAttributes({ backgroundVideo: media });
    }

  render() {
      const {
          attributes: {
              backgroundVideo
          },
          setAttributes,
      } = this.props;

    var advancedControls;
      advancedControls = (
          <Fragment>
          <BaseControl
      className="editor-bg-video-control"
      label={__("Background Video", "responsive-block-editor-addons")}
  >
  <MediaUpload
      title={__("Select Background Video", "responsive-block-editor-addons")}
      onSelect={this.onSelectVideo}
      allowedTypes={["video"]}
      value={backgroundVideo}
      render={({ open }) => (
      <Button isDefault onClick={open}>
          {!backgroundVideo
          ? __("Select Background Video", "responsive-block-editor-addons")
          : __("Replace Video", "responsive-block-editor-addons")}
  </Button>
  )}
      />
      {backgroundVideo && (
      <Button onClick={this.onRemoveVideo} isLink isDestructive>
      {__("Remove Video", "responsive-block-editor-addons")}
      </Button>
      )}
  </BaseControl>
          </Fragment>
      );


    return (
      <div className="responsive-block-editor-addons-video-background-settings">
        {advancedControls}
      </div>
    );
  }
}

export default VideoBackgroundControl;
