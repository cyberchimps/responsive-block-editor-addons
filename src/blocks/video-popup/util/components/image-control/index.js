/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
const { BaseControl, Dashicon } = wp.components;
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { MediaUpload } = wp.blockEditor;

const ImageControl = (props) => {
  const type =
    props.imageURL && props.imageURL.match(/(mp4|webm|ogg)$/i)
      ? "video"
      : "image";
  const onRemove = () => {
    if (props.onRemove) {
      props.onRemove();
    } else {
      props.onChange({
        url: "",
        id: "",
        width: "",
        height: "",
      });
    }
  };

  return (
    <div className="responsive-block-editor-addons-image-control">
      <BaseControl help={props.help}>
        <MediaUpload
          onSelect={props.onChange}
          allowedTypes={props.allowedTypes}
          value={props.imageID}
          render={(obj) => {
            return (
              <Fragment>
                {props.imageURL && (
                  <div className="responsive-block-editor-addons-image-preview-wrapper">
                    <button
                      className="responsive-block-editor-addons-image-preview-remove"
                      onClick={onRemove}
                    >
                      <Dashicon icon="no" />
                    </button>
                    {type === "video" && (
                      <video
                        className="responsive-block-editor-addons-image-preview"
                        autoPlay
                        muted
                        loop
                        src={props.imageURL}
                        onClick={obj.open}
                        onKeyDown={(event) => {
                          if (event.keyCode === 13) {
                            obj.open();
                          }
                        }}
                      />
                    )}
                    {type === "image" && (
                      /* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */
                      <img
                        className="responsive-block-editor-addons-image-preview"
                        src={props.imageURL}
                        onClick={obj.open}
                        onKeyDown={(event) => {
                          if (event.keyCode === 13) {
                            obj.open();
                          }
                        }}
                        alt={__("preview", "responsive-block-editor-addons")}
                      />
                    )}
                  </div>
                )}
                {!props.imageURL && (
                  <div
                    className="responsive-block-editor-addons-placeholder"
                    onClick={obj.open}
                    onKeyDown={(event) => {
                      if (event.keyCode === 13) {
                        obj.open();
                      }
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <svg viewBox="0 0 512 376">
                      <path d="M0,0v376h512V0H0z M480,344H32V32h448V344z" />
                      <circle cx="409.1" cy="102.9" r="40.9" />
                      <polygon points="480,344 32,344 118.3,179.8 140,191.1 189,113.8 289,226.9 297.9,217.6 315,239.9 341,193.5 393.9,264.7 409,248.8" />
                    </svg>{" "}
                  </div>
                )}
              </Fragment>
            );
          }}
        />
      </BaseControl>
    </div>
  );
};

ImageControl.defaultProps = {
  label: "",
  imageID: "",
  imageURL: "",
  onChange: ({ url, id, width, height }) => {}, // eslint-disable-line
  onRemove: () => {},
  allowedTypes: ["image"],
  help: "",
  screens: ["desktop"],
};

export default ImageControl;
