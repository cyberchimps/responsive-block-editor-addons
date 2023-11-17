/**
 * Inspector Controls
 */

import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import renderSVG from "../../../../renderIcon";
import ResponsiveBlocksIcon from "../../../../ResponsiveBlocksIcon.json";
import InspectorTab from "../../../../components/InspectorTab";
import InspectorTabs from "../../../../components/InspectorTabs";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  AlignmentToolbar,
  BlockControls,
  InnerBlocks,
  ColorPalette,
  MediaUpload,
} = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  BaseControl,
  TabPanel,
  ToggleControl,
  Button,
  ButtonGroup,
  Icon,
  TextControl,
} = wp.components;

let svg_icons = Object.keys(ResponsiveBlocksIcon);

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.onSelectImage = this.onSelectImage.bind(this);
    this.onRemoveImage = this.onRemoveImage.bind(this);
  }

  /*
   * Event to set Image as null while removing.
   */
  onRemoveImage() {
    const { setAttributes } = this.props;
    setAttributes({ image: null });
  }

  /*
   * Event to set Image as while adding.
   */
  onSelectImage(media) {
    const { setAttributes } = this.props;

    if (!media || !media.url) {
      setAttributes({ image: null });
      return;
    }

    if (!media.type || "image" != media.type) {
      return;
    }

    setAttributes({ image: media });
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        label,
        image_icon,
        icon,
        image,
        icon_color,
        label_color,
        icon_hover_color,
        label_hover_color,
        icon_bg_color,
        icon_bg_hover_color,
        icon_border_color,
        icon_border_hover_color,
        link,
        target,
        disableLink,
        hideLabel,
        source_type,
      },
      setAttributes,
    } = this.props;

    let image_name = __("Select Image", "responsive-block-editor-addons");
    if (image) {
      if (image.url == null || image.url == "") {
        image_name = __("Select Image", "responsive-block-editor-addons");
      } else {
        image_name = __("Replace Image", "responsive-block-editor-addons");
      }
    }

    const iconColorControls = () => {
      let color_control = "";
      let color_control_hover = "";

      color_control = (
        <Fragment>
          <p className="responsive-block-editor-addons-setting-label">
            {__("Text Color", "responsive-block-editor-addons")}
            <span className="components-base-control__label">
              <span
                className="component-color-indicator"
                style={{ backgroundColor: label_color }}
              ></span>
            </span>
          </p>
          <ColorPalette
            value={label_color}
            onChange={(value) => setAttributes({ label_color: value })}
            allowReset
          />
          <p className="responsive-block-editor-addons-setting-label">
            {__("Icon Color", "responsive-block-editor-addons")}
            <span className="components-base-control__label">
              <span
                className="component-color-indicator"
                style={{ backgroundColor: icon_color }}
              ></span>
            </span>
          </p>
          <ColorPalette
            value={icon_color}
            onChange={(value) => setAttributes({ icon_color: value })}
            allowReset
          />
          <p className="responsive-block-editor-addons-setting-label">
            {__("Icon Background Color", "responsive-block-editor-addons")}
            <span className="components-base-control__label">
              <span
                className="component-color-indicator"
                style={{ backgroundColor: icon_bg_color }}
              ></span>
            </span>
          </p>
          <ColorPalette
            value={icon_bg_color}
            onChange={(value) => setAttributes({ icon_bg_color: value })}
            allowReset
          />
          <p className="responsive-block-editor-addons-setting-label">
            {__("Icon Border Color", "responsive-block-editor-addons")}
            <span className="components-base-control__label">
              <span
                className="component-color-indicator"
                style={{ backgroundColor: icon_border_color }}
              ></span>
            </span>
          </p>
          <ColorPalette
            value={icon_border_color}
            onChange={(value) => setAttributes({ icon_border_color: value })}
            allowReset
          />
        </Fragment>
      );
      color_control_hover = (
        <Fragment>
          <p className="responsive-block-editor-addons-setting-label">
            {__("Text Hover Color", "responsive-block-editor-addons")}
            <span className="components-base-control__label">
              <span
                className="component-color-indicator"
                style={{ backgroundColor: label_hover_color }}
              ></span>
            </span>
          </p>
          <ColorPalette
            value={label_hover_color}
            onChange={(value) => setAttributes({ label_hover_color: value })}
            allowReset
          />
          <p className="responsive-block-editor-addons-setting-label">
            {__("Icon Hover Color", "responsive-block-editor-addons")}
            <span className="components-base-control__label">
              <span
                className="component-color-indicator"
                style={{ backgroundColor: icon_hover_color }}
              ></span>
            </span>
          </p>
          <ColorPalette
            value={icon_hover_color}
            onChange={(value) => setAttributes({ icon_hover_color: value })}
            allowReset
          />
          <p className="responsive-block-editor-addons-setting-label">
            {__(
              "Icon Background Hover Color",
              "responsive-block-editor-addons"
            )}
            <span className="components-base-control__label">
              <span
                className="component-color-indicator"
                style={{ backgroundColor: icon_bg_hover_color }}
              ></span>
            </span>
          </p>
          <ColorPalette
            value={icon_bg_hover_color}
            onChange={(value) => setAttributes({ icon_bg_hover_color: value })}
            allowReset
          />
          <p className="responsive-block-editor-addons-setting-label">
            {__("Icon Border Hover Color", "responsive-block-editor-addons")}
            <span className="components-base-control__label">
              <span
                className="component-color-indicator"
                style={{ backgroundColor: icon_border_hover_color }}
              ></span>
            </span>
          </p>
          <ColorPalette
            value={icon_border_hover_color}
            onChange={(value) =>
              setAttributes({ icon_border_hover_color: value })
            }
            allowReset
          />
        </Fragment>
      );

      return (
        <TabPanel
          className="responsive-block-editor-addons-inspect-tabs responsive-block-editor-addons-inspect-tabs-col-2"
          activeClass="active-tab"
          tabs={[
            {
              name: "normal",
              title: __("Normal", "responsive-block-editor-addons"),
              className: "responsive-block-editor-addons-normal-tab",
            },
            {
              name: "hover",
              title: __("Hover", "responsive-block-editor-addons"),
              className: "responsive-block-editor-addons-hover-tab",
            },
          ]}
        >
          {(tabName) => {
            let color_tab;
            if ("normal" === tabName.name) {
              color_tab = color_control;
            } else {
              color_tab = color_control_hover;
            }
            return <div>{color_tab}</div>;
          }}
        </TabPanel>
      );
    };

    return (
      <Fragment>
        <InspectorControls>
          <InspectorTabs>
            <InspectorTab key={"content"}>
              <PanelBody
                title={__("Icon Settings", "responsive-block-editor-addons")}
                initialOpen={true}
              >
                <SelectControl
                  label={__("Select Source", "responsive-block-editor-addons")}
                  value={source_type}
                  onChange={(value) => setAttributes({ source_type: value })}
                  options={[
                    {
                      value: "icon",
                      label: __("Icon", "responsive-block-editor-addons"),
                    },
                    {
                      value: "image",
                      label: __("Image", "responsive-block-editor-addons"),
                    },
                  ]}
                />
                {"image" == source_type && (
                  <Fragment>
                    <BaseControl
                      className="editor-bg-image-control"
                      label={__("Image", "responsive-block-editor-addons")}
                    >
                      <MediaUpload
                        title={__(
                          "Select Image",
                          "responsive-block-editor-addons"
                        )}
                        onSelect={this.onSelectImage}
                        allowedTypes={["image"]}
                        value={image}
                        render={({ open }) => (
                          <Button isDefault onClick={open}>
                            {image_name}
                          </Button>
                        )}
                      />
                      {image && image.url !== "null" && image.url !== "" && (
                        <Button
                          className="responsive-block-editor-addons-rm-btn"
                          onClick={this.onRemoveImage}
                          isLink
                          isDestructive
                        >
                          {__("Remove Image", "responsive-block-editor-addons")}
                        </Button>
                      )}
                    </BaseControl>
                  </Fragment>
                )}
                {"icon" == source_type && (
                  <Fragment>
                    <p className="components-base-control__label">
                      {__("Icon", "responsive-block-editor-addons")}
                    </p>
                    <FontIconPicker
                      icons={svg_icons}
                      renderFunc={renderSVG}
                      theme="default"
                      value={icon}
                      onChange={(value) => setAttributes({ icon: value })}
                      isMulti={false}
                      noSelectedPlaceholder={__(
                        "Select Icon",
                        "responsive-block-editor-addons"
                      )}
                    />
                    <hr className="responsive-block-editor-addons-editor__separator" />
                  </Fragment>
                )}
                <hr className="responsive-block-editor-addons-editor__separator" />
                <h2>{__("List Item Link", "responsive-block-editor-addons")}</h2>
                <ToggleControl
                  label={__("Disable Link", "responsive-block-editor-addons")}
                  checked={disableLink}
                  onChange={(value) =>
                    setAttributes({ disableLink: !disableLink })
                  }
                />
                {!disableLink && (
                  <Fragment>
                    <p className="components-base-control__label">
                      {__("URL", "responsive-block-editor-addons")}
                    </p>
                    <TextControl
                      value={link}
                      onChange={(value) => setAttributes({ link: value })}
                      placeholder={__("Enter URL", "responsive-block-editor-addons")}
                    />
                    <ToggleControl
                      label={__("Open in New Tab", "responsive-block-editor-addons")}
                      checked={target}
                      onChange={(value) => setAttributes({ target: !target })}
                    />
                  </Fragment>
                )}
              </PanelBody>
            </InspectorTab>
            <InspectorTab key={"style"}>
              <PanelBody
                title={__("Colors", "responsive-block-editor-addons")}
                initialOpen={true}
              >
                {iconColorControls()}
              </PanelBody>
            </InspectorTab>
            <InspectorTab key={"advance"}></InspectorTab>
          </InspectorTabs>
        </InspectorControls>
      </Fragment>
    );
  }
}
