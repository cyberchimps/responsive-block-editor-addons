/**
 * Internal dependencies
 */
import ResponsiveTabsControl from "../../../utils/components/responsive-tabs-control";
import captionOptions from "../../../utils/components/block-gallery/options/caption-options";
import SizeControl from "../../../utils/components/size-control";
import GalleryLinkSettings from "../../../utils/components/block-gallery/gallery-link-settings";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody,
  RangeControl,
  ToggleControl,
  SelectControl,
} from "@wordpress/components";

/**
 * Inspector controls
 */
class Inspector extends Component {
  constructor() {
    super(...arguments);
    this.setSizeControl = this.setSizeControl.bind(this);
    this.setRadiusTo = this.setRadiusTo.bind(this);
    this.setCaptionStyleTo = this.setCaptionStyleTo.bind(this);
  }

  componentDidUpdate() {
    if (this.props.attributes.gutter <= 0) {
      this.props.setAttributes({
        radius: 0,
      });
    }
  }

  setRadiusTo(value) {
    this.props.setAttributes({ radius: value });
  }

  setSizeControl(value) {
    this.props.setAttributes({ gridSize: value });
  }

  setCaptionStyleTo(value) {
    this.props.setAttributes({ captionStyle: value });
  }

  getCaptionsHelp(checked) {
    return checked
      ? __(
          "Showing captions for each media item.",
          "responsive-block-editor-addons"
        )
      : __("Toggle to show media captions.", "responsive-block-editor-addons");
  }

  getLightboxHelp(checked) {
    return checked
      ? __("Image lightbox is enabled.", "responsive-block-editor-addons")
      : __(
          "Toggle to enable the image lightbox.",
          "responsive-block-editor-addons"
        );
  }

  render() {
    const { attributes, setAttributes } = this.props;

    const {
      captions,
      captionStyle,
      gridSize,
      gutter,
      radius,
      lightbox,
        linkTo,
    } = attributes;

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={'content'}>
            <PanelBody
              title={__("Masonry settings", "responsive-block-editor-addons")}
            >
              <SizeControl
                {...this.props}
                type={"grid"}
                label={__("Size", "responsive-block-editor-addons")}
                onChange={this.setSizeControl}
                value={gridSize}
                resetValue={"xlrg"}
              />

              <ResponsiveTabsControl {...this.props} />

              {gutter > 0 && (
                <RangeControl
                  label={__("Rounded corners", "responsive-block-editor-addons")}
                  aria-label={__(
                    "Add rounded corners to the gallery items.",
                    "responsive-block-editor-addons"
                  )}
                  value={radius}
                  onChange={this.setRadiusTo}
                  min={0}
                  max={20}
                  step={1}
                />
              )}

              <ToggleControl
                label={__("Lightbox", "responsive-block-editor-addons")}
                checked={!!lightbox}
                onChange={() => setAttributes({ lightbox: !lightbox, linkTo: 'none' })}
                help={this.getLightboxHelp}
              />

              <ToggleControl
                label={__("Captions", "responsive-block-editor-addons")}
                checked={!!captions}
                onChange={() => setAttributes({ captions: !captions })}
                help={this.getCaptionsHelp}
              />

              {captions && (
                <SelectControl
                  label={__("Caption style", "responsive-block-editor-addons")}
                  value={captionStyle}
                  onChange={this.setCaptionStyleTo}
                  options={captionOptions}
                />
              )}
            </PanelBody>
            <GalleryLinkSettings {...this.props} />
          </InspectorTab>
          <InspectorTab key={'style'}></InspectorTab>
          <InspectorTab key={'advance'}></InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}

export default Inspector;
