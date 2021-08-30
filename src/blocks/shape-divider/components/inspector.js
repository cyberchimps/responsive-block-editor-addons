/**
 * Internal dependencies
 */
import applyWithColors from "./colors";
import ResponsiveBaseControl from "../../../utils/components/responsive-base-control";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ColorBackgroundControl from "../../../settings-components/Block Background Settings/Color Background Settings";
import GradientBackgroundControl from "../../../settings-components/Block Background Settings/Gradient Background Settings";
import dividers from "./dividers";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component, Fragment, useState } from "@wordpress/element";
import { compose } from "@wordpress/compose";
import {
	InspectorControls,
	PanelColorSettings,
	ColorPalette,
} from "@wordpress/block-editor";
import { PanelBody, RangeControl, SelectControl, RadioControl } from "@wordpress/components";

/**
 * Inspector controls
 */
class Inspector extends Component {
	constructor() {
		super(...arguments);

		this.setSizeControl = this.setSizeControl.bind(this);
	}

	setSizeControl(value) {
		this.props.setAttributes({ horizontalFlip: value });
	}

	render() {
		const {
			attributes,
			setAttributes,
			setColor,
			color,
			setBackgroundColor,
		} = this.props;

		const {
			backgroundColor,
			shapeHeight,
			shapeHeightTablet,
			shapeHeightMobile,
			backgroundHeight,
			backgroundHeightMobile,
			backgroundHeightTablet,
			syncHeight,
			backgroundColor1,
			backgroundColor2,
			colorLocation1,
			colorLocation2,
			gradientDirection,
			backgroundType,
            design
		} = attributes;

		// Background Type Options
		const backgroundTypeOptions = [
			{ value: "none", label: __("None", "responsive-block-editor-addons") },
			{ value: "color", label: __("Color", "responsive-block-editor-addons") },
			{
				value: "gradient",
				label: __("Gradient", "responsive-block-editor-addons"),
			},
		];

		const _options = [
            { label: dividers.wavy, title: 'Wavy', value: 'wavy' },
            { label: dividers.hills, title: 'Hills', value: 'hills' },
            { label: dividers.waves, title: 'Waves', value: 'waves' },
            { label: dividers.angled, title: 'Angled', value: 'angled' },
            { label: dividers.sloped, title: 'Sloped', value: 'sloped' },
            { label: dividers.rounded, title: 'Rounded', value: 'rounded' },
            { label: dividers.triangle, title: 'Triangle', value: 'triangle' },
            { label: dividers.pointed, title: 'Pointed', value: 'pointed' },
				];

        const fixedOptions = _options.map( option => {
            return {
                    label: (
                        < div className = "responsive-blocks-editor-addons-design-panel-item" >
                    < div className = "responsive-blocks-editor-addons-design-panel-item__svg" > {option.label} < /div>
                    < span className = "design-label" >
                    {option.title}
                < /span>
                < /div>
        )
        ,
            value: option.value
        }
        } );



		return (
			<Fragment>
				<InspectorControls>
					<InspectorTabs>
						<InspectorTab key={"content"}>
							<PanelBody
								title={__("Divider settings", "responsive-block-editor-addons")}
							>
								<ResponsiveBaseControl
									{...this.props}
									label={__(
										"Shape height in pixels",
										"responsive-block-editor-addons"
									)}
									height={shapeHeight}
									heightTablet={shapeHeightTablet}
									heightMobile={shapeHeightMobile}
									onChange={(event) => {
										setAttributes({
											shapeHeight: parseInt(event.target.value, 10),
										});
									}}
									onChangeTablet={(event) => {
										setAttributes({
											shapeHeightTablet: parseInt(event.target.value, 10),
										});
									}}
									onChangeMobile={(event) => {
										setAttributes({
											shapeHeightMobile: parseInt(event.target.value, 10),
										});
									}}
									sync={syncHeight}
									type="shapeHeight"
									min="40"
								/>
								<ResponsiveBaseControl
									{...this.props}
									label={__(
										"Background height in pixels",
										"responsive-block-editor-addons"
									)}
									height={backgroundHeight}
									heightTablet={backgroundHeightTablet}
									heightMobile={backgroundHeightMobile}
									onChange={(event) => {
										setAttributes({
											backgroundHeight: parseInt(event.target.value, 10),
										});
									}}
									onChangeTablet={(event) => {
										setAttributes({
											backgroundHeightTablet: parseInt(event.target.value, 10),
										});
									}}
									onChangeMobile={(event) => {
										setAttributes({
											backgroundHeightMobile: parseInt(event.target.value, 10),
										});
									}}
									sync={syncHeight}
									type="backgroundHeight"
									min="20"
								/>
							</PanelBody>
							<PanelBody
								title={__("Background", "responsive-block-editor-addons")}
								initialOpen={false}
							>
								<SelectControl
									label={__("Background Type", "responsive-block-editor-addons")}
									value={backgroundType}
									onChange={(value) => setAttributes({ backgroundType: value })}
									options={backgroundTypeOptions}
								/>
								{"color" == backgroundType && (
									<Fragment>
										<ColorBackgroundControl
											{...this.props}
										/>
									</Fragment>
								)}
								{"gradient" == backgroundType && (
									<Fragment>
										<GradientBackgroundControl
											{...this.props}
											showHoverGradient = {false}
										/>
									</Fragment>
								)}
							</PanelBody>
						</InspectorTab>
						<InspectorTab key={"style"}>
								<PanelBody
									title={__("Shape Styles", "responsive-block-editor-addons")}
								>
									<RadioControl
										selected={ design }
										options={fixedOptions }
										onChange={(value) => setAttributes({ design: value })}
									/>
								</PanelBody>
							<PanelColorSettings
								title={__("Shape Color", "responsive-block-editor-addons")}
								initialOpen={false}
								colorSettings={[
									{
										value: color.color,
										onChange: setColor,
										label: __("Shape color", "responsive-block-editor-addons"),
									},
								]}
							></PanelColorSettings>
						</InspectorTab>
						<InspectorTab key={"advance"}>
						</InspectorTab>
					</InspectorTabs>
				</InspectorControls>
			</Fragment>
		);
	}
}

export default compose([applyWithColors])(Inspector);
