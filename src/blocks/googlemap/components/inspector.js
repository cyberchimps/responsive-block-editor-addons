/**
 * Inspector Controls
 */
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;

// Import block components
const { InspectorControls } = wp.editor;

// Import Inspector components
const {
	PanelBody,
	RangeControl,
	BaseControl,
	TextControl,
	Button,
	ExternalLink,
} = wp.components;
import { ENTER } from '@wordpress/keycodes';


/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	constructor(props) {
		super(...arguments);
		this.state = {
			isSavedKey: false,
			keySaved: false,
			address: props.attributes.address,
		};
        this.handleKeyDown = this.handleKeyDown.bind( this );

    }

    handleKeyDown( keyCode ) {
        if ( keyCode !== ENTER ) {
            return;
        }
	}

	render() {
		// Setup the attributes
		const {
			attributes: { zoom, height },
			setAttributes,
		} = this.props;

		return (
			<InspectorControls key="inspector">
				<InspectorTabs hasStyle={false}>
					<InspectorTab key={"content"}>
						<PanelBody title={__("Map settings", "responsive-block-editor-addons")}>
							<RangeControl
								label={__("Zoom", "responsive-block-editor-addons")}
								value={zoom}
								onChange={(value) =>
									this.props.setAttributes({
										zoom: value,
									})
								}
								min={10}
								max={17}
								step={1}
							/>
							<BaseControl
								label={__("Height in pixels", "responsive-block-editor-addons")}
								id="map-height-control"
							>
								<input
									type="number"
									aria-label={__(
										"Height for the map in pixels",
										"responsive-block-editor-addons"
									)}
									onChange={(event) =>
										setAttributes({ height: parseInt(event.target.value, 10) })
									}
									value={height}
									min={200}
									step={10}
								/>
							</BaseControl>
						</PanelBody>
						
					</InspectorTab>
					<InspectorTab key={"advance"}>
					</InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		);
	}
}
