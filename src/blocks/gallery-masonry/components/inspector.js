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
		this.state = {
			columns: this.props.attributes.columnsize,
			customHeight: this.props.attributes.customHeight,
			customWidth: this.props.attributes.customWidth,
		  };  
		this.setRadiusTo = this.setRadiusTo.bind(this);
		this.setCaptionStyleTo = this.setCaptionStyleTo.bind(this);
		this.setNumberOfColumns = this.setNumberOfColumns.bind(this);
		this.setCustomHeight = this.setCustomHeight.bind(this);
		this.setCustomWidth = this.setCustomWidth.bind(this);
	}

	componentDidUpdate() {
		if (this.props.attributes.gutter <= 0) {
			this.props.setAttributes({
				radius: 0,
			});
		}
	}
	setNumberOfColumns(value) {
		this.setState({ columns: value });
		this.props.setAttributes({ columnsize: value });
	  }
	
	setRadiusTo(value) {
		this.props.setAttributes({ radius: value });
	}
	setCaptionStyleTo(value) {
		this.props.setAttributes({ captionStyle: value });
	}
	setCustomHeight(value) {
		console.log(value)
		this.props.setAttributes({ customHeight: value });
	  }
	  setCustomWidth(value) {
		this.props.setAttributes({ customWidth: value });
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
			gutter,
			radius,
			lightbox,
			linkTo,
			columnsize,
			customHeight,
			customWidth
		} = attributes;

		return (
			<InspectorControls>
				<InspectorTabs hasStyle={false}>
					<InspectorTab key={"content"}>
						<PanelBody
							title={__("Masonry settings", "responsive-block-editor-addons")}
						>
							<ResponsiveTabsControl {...this.props} />
							<RangeControl
									label={__("Columns", "responsive-block-editor-addons")}
									aria-label={__(
										"Number of columns for masonary",
										"responsive-block-editor-addons"
									)}
									value={columnsize}
									onChange={this.setNumberOfColumns}
									min={1}
									max={10}
									step={1}
								/>
							<RangeControl
              label={__("Custom Height", "responsive-block-editor-addons")}
              value={customHeight}
              onChange={this.setCustomHeight}
              min={0}
              max={1000}
              step={1}
            />

            <RangeControl
              label={__("Custom Width", "responsive-block-editor-addons")}
              value={customWidth}
              onChange={(value) => this.setCustomWidth(value)}
              min={0}
              max={1000}
              step={1}
            />	
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
					<InspectorTab key={"advance"}>
					</InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		);
	}
}

export default Inspector;
