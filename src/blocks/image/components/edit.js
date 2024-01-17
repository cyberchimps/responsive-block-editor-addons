const {Component, Fragment} = wp.element;
const {
  Button,
  TextControl,
  Dashicon,
  IconButton,
  ResizableBox,
  Dropdown,
  MenuGroup,
  MenuItem,
  ToolbarButton
} = wp.components;
const {MediaUpload, MediaUploadCheck, RichText, BlockControls} = wp.blockEditor;
import EditorStyles from "./editor-styles";
import Inspector from "./inspector";
import classnames from "classnames";
import { loadGoogleFont } from "../../../utils/font";
const {__} = wp.i18n;

export default class Edit extends Component {
  constructor() {
    super();
    this.state = {
      showUrlInput: false,
      isDropdownOpen: false,
    };
  }
  componentDidUpdate() {
    var element = document.getElementById(
      "responsive-block-editor-addons-image-style-" + this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }
  }
  componentDidMount() {
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-image-style-" + this.props.clientId
    );
    document.head.appendChild($style);
    // Assigning block_id in the attribute.
    this.props.setAttributes({block_id: this.props.clientId});
    this.props.setAttributes({classMigrate: true});
  }
  onUrlInputChange = (newUrl) => {
    this.props.setAttributes({
      imageUrl: newUrl,
      sourceType: "url",
    });
  };

  handleImageUpload = (event) => {
    const {setAttributes} = this.props;
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      const {setAttributes} = this.props;
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
          const imageUrl = e.target.result;

          // Create an Image element
          const img = new Image();

          // Set the source of the Image element
          img.src = imageUrl;

          // Wait for the image to load
          img.onload = () => {
            // Get the height and width of the image
            const height = img.height;
            const width = img.width;

            // Update state with the selected image and its dimensions
            setAttributes({
              imageUrl,
              sourceType: "upload",
              imageHeight: height,
              imageWidth: width,
            });
          };
        };
        reader.readAsDataURL(file);
      }
    }
  };
  toggleUrlInput = () => {
    this.setState((prevState) => ({
      showUrlInput: !prevState.showUrlInput,
    }));
  };
  render() {
    const {attributes, setAttributes, mergeBlocks, onReplace} = this.props;
    const {
      imageUrl,
      caption,
      Layoverswitch,
      LayoverHeading,
      block_id,
      altText,
      captionText,
      imageHeight,
      imageWidth,
      layoverHeadingTag,
      captionFontFamily,
      layoverHeadingFontFamily
    } = attributes;
    const {showUrlInput, isDropdownOpen} = this.state;
    return (
      <Fragment>
      <style id={`responsive-block-editor-addons-image-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>
        { imageUrl !== "" && <BlockControls style={{ borderRight: "1px solid" }}>
  {/* Add your custom dropdown button to the toolbar */}
  <Dropdown
    style={{ "margin": "auto"}}
    position="bottom right"
    contentClassName="my-dropdown-content"
    renderToggle={({ onToggle, isOpen, }) => (
      <Button id="toggle-btn" onClick={onToggle} aria-expanded={isOpen}>
        Replace
      </Button>
    )}
    renderContent={({ onClose }) => ( // Pass onClose function to close the dropdown
      <MenuGroup>
        <MenuItem >
          <div>
            <p
              type="button"
              onClick={() => {
                
                document.getElementById("imageUpload").click();
                // Do not close the dropdown here
                onClose;
              }}
            >
              Upload
            </p>
            <input
              style={{ display: "none" }}
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={this.handleImageUpload}
            />
          </div>
        </MenuItem>
      </MenuGroup>
    )}
  />
</BlockControls>}
        {imageUrl !== "" ? (
          <div
            className={classnames(
              this.props.className,
              "responsive-block-editor-addons-block-image",
              `block-${block_id}`
            )}
          >
            <div className="img-main-block">
            <figure className="img-block">
              <ResizableBox
                size={{
                  height: 'auto',
                  width: 'auto',
                }}
                minHeight="auto"
                minWidth="50"
                __experimentalShowTooltip={true}
                __experimentalTooltipProps={{
                  showPx: true,
                  fadeTimeout: 1000,
                }}
                enable={{
                  top: false,
                  right: true,
                  bottom: true,
                  left: false,
                  topRight: false,
                  bottomRight: false,
                  bottomLeft: false,
                  topLeft: false,
                }}
                onResizeStop={(event, direction, elt, delta) => {
                  const newImageHeight = imageHeight + delta.height;
                  const newImageWidth = imageWidth + delta.width;
                  this.props.setAttributes({
                    imageHeight: newImageHeight,
                    imageWidth: newImageWidth,
                  });
                 
                }}
                onResizeStart={() => {
                }}
              >
                <img
                  className="responsive-blocks-image-block"
                  src={imageUrl}
                  alt={altText}
                />
                
                {LayoverHeading && loadGoogleFont(layoverHeadingFontFamily)}
                {Layoverswitch && <div className="responsive-image-block-description-overlay" ></div> }
                { Layoverswitch  && <div className="responsive-image-block-description" >
                <RichText
                  tagName={layoverHeadingTag}
                  placeholder={__(
                    "Add Heading",
                    "responsive-block-editor-addons"
                  )}
                  value={LayoverHeading}
                  className="responsive-img-heading"
                  onChange={(value) => setAttributes({LayoverHeading: value})}
                  onMerge={mergeBlocks}
                  unstableOnSplit={this.splitBlock}
                  onRemove={() => onReplace([])}
              />
              {captionText && loadGoogleFont(captionFontFamily)}
                <RichText
                  tagName="figcaption"
                  placeholder={__(
                    "Add caption",
                    "responsive-block-editor-addons"
                  )}
                  value={captionText}
                  className="responsive-img-caption"
                  onChange={(value) => setAttributes({captionText: value})}
                  onMerge={mergeBlocks}
                  unstableOnSplit={this.splitBlock}
                  onRemove={() => onReplace([])}
              />
                </div>}
              </ResizableBox>
              {captionText && loadGoogleFont(captionFontFamily)}
              {caption && !Layoverswitch && (
                <RichText
                  tagName="figcaption"
                  placeholder={__(
                    "Add caption",
                    "responsive-block-editor-addons"
                  )}
                  value={captionText}
                  className="responsive-img-caption"
                  onChange={(value) => setAttributes({captionText: value})}
                  onMerge={mergeBlocks}
                  unstableOnSplit={this.splitBlock}
                  onRemove={() => onReplace([])}
              />
              )}
            </figure>
            </div>
            <Inspector {...{setAttributes, ...this.props}} />
          </div>
        ) : (
          <div className="image-container">
            <div>
              <h1>Image</h1>
              <p>
                Upload an image file, pick one from your media library, or add
                one with a URL.
              </p>
            </div>
            <div className="image-selection-container">
              <div>
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => document.getElementById("imageUpload").click()}
                >
                  Upload
                </Button>
                <input
                  style={{display: "none"}}
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  onChange={this.handleImageUpload}
                />
              </div>

              <div>
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={(media) => {
                      if (media.url) {
                        // Create an Image element
                        const img = new Image();

                        // Set the source of the Image element
                        img.src = media.url;

                        // Wait for the image to load
                        img.onload = () => {
                          // Get the height and width of the image
                          const height = img.height;
                          const width = img.width;

                          // Update state with the selected image, its dimensions, and other attributes
                          setAttributes({
                            imageUrl: media.url,
                            sourceType: "media-library",
                            imageHeight: height,
                            imageWidth: width,
                            // Add other attributes as needed
                          });
                        };
                      }
                    }}
                    allowedTypes={["image"]}
                    value={imageUrl}
                    render={({open}) => (
                      <Button variant="secondary" onClick={open}>
                        Media Library
                      </Button>
                    )}
                  />
                </MediaUploadCheck>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:"5px"}} >
                <Button style={{"position":"relative"}} variant="secondary" onClick={this.toggleUrlInput}>
                  Insert from URL
                </Button>
                {showUrlInput && (
                            <input
                            style={{position:"absolute",marginTop:"40px",background:"inherit"}}
                            type="text"
                            placeholder="Enter Image URL"
                            value={imageUrl}
                            onChange={this.onUrlInputChange}
                          />
                
                )}
              </div>
            </div>

            <Inspector {...{setAttributes, ...this.props}} />
          </div>
        )}
      </Fragment>
    );
  }
}
