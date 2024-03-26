import BoxShadowControl from "../../../utils/components/box-shadow";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import { loadGoogleFont } from "../../../utils/font";

/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { ColorPalette, MediaUpload } = wp.blockEditor;
import InspectorTab from "../../../components/InspectorTab"
import InspectorTabs from "../../../components/InspectorTabs"

// Import block components
const { InspectorControls, PanelColorSettings } = wp.blockEditor;

// Import Inspector components
const {
	PanelBody,
	RangeControl,
	SelectControl,
	ButtonGroup,
	Button,
	BaseControl,
	TabPanel,
	Dashicon,
	ToggleControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	constructor(props) {
		super(...arguments);
	}

	render() {
		// Setup the attributes
		const {
			attributes: {
				block_id,
				progressBarStyle,
				progressBarValue,
				horizontalProgressBarStyle,
				circularProgressBarStyle,
				progressBarTopTitleEnable,
				progressBarTopValueEnable,
				progressBarInnerTitleEnable,
				progressBarInnerValueEnable,
				progressBarBottomTitleEnable,
				progressBarBottomValueEnable,
				circularProgressBarValueEnable,
				circularProgressBarTopTitleEnable,
				circularProgressBarTopValueEnable,
				circularProgressBarBottomTitleEnable,
				circularProgressBarBottomValueEnable,
				semiCircularProgressBarValueEnable,
				semiCircularProgressBarTopTitleEnable,
				semiCircularProgressBarTopValueEnable,
				semiCircularProgressBarBottomTitleEnable,
				semiCircularProgressBarBottomValueEnable,
				progressBarColorType,
				horizontalProgressBarSize,
				semiCircularProgressBarSize,
				circularProgressBarSize,
				circularProgressBarWidth,
				semiCircularProgressBarWidth,
				horizontalProgressBarBackgroundColor,
				horizontalProgressBarPrimaryTrackColor,
				gradientTrack,
				horizontalProgressBarSecondaryTrackColor,
				horizontalProgressBarStripeColor,
				horizontalProgressBarTopTitleValueColor,
				horizontalProgressBarInnerTitleValueColor,
				horizontalProgressBarBottomTitleValueColor,
				horizontalProgressBarBorderRadius,
				horizontalProgressBarBorderStyle,
				horizontalProgressBarBorderWidth,
				horizontalProgressBarBorderColor,
				topTitleValueFontFamily,
				topTitleValueFontSize,
				topTitleValueFontSizeMobile,
				topTitleValueFontSizeTablet,
				topTitleValueFontWeight,
				topTitleValueLineHeight,
				topTitleValueLetterSpacing,
				topTitleValueTextTransform,
				innerTitleValueFontFamily,
				innerTitleValueFontSize,
				innerTitleValueFontSizeMobile,
				innerTitleValueFontSizeTablet,
				innerTitleValueFontWeight,
				innerTitleValueLineHeight,
				innerTitleValueLetterSpacing,
				innerTitleValueTextTransform,
				bottomTitleValueFontFamily,
				bottomTitleValueFontSize,
				bottomTitleValueFontSizeMobile,
				bottomTitleValueFontSizeTablet,
				bottomTitleValueFontWeight,
				bottomTitleValueLineHeight,
				bottomTitleValueLetterSpacing,
				bottomTitleValueTextTransform,
				stripedHorizontalProgressBarAnimationTime,
				circularProgressBarBackgroundColor,
				circularProgressBarTrackColor,
				circularProgressBarTopTitleValueColor,
				circularProgressBarInnerValueColor,
				circularProgressBarBottomTitleValueColor,
				semiCircularProgressBarTopTitleValueColor,
				semiCircularProgressBarInnerValueColor,
				semiCircularProgressBarBottomTitleValueColor,
				circularProgressBarTrackStyle,
				circularTopTitleValueFontFamily,
				circularTopTitleValueFontSize,
				circularTopTitleValueFontSizeMobile,
				circularTopTitleValueFontSizeTablet,
				circularTopTitleValueFontWeight,
				circularTopTitleValueLineHeight,
				circularTopTitleValueLetterSpacing,
				circularTopTitleValueTextTransform,
				circularInnerValueFontFamily,
				circularInnerValueFontSize,
				circularInnerValueFontSizeMobile,
				circularInnerValueFontSizeTablet,
				circularInnerValueFontWeight,
				circularInnerValueLineHeight,
				circularInnerValueLetterSpacing,
				circularBottomTitleValueFontFamily,
				circularBottomTitleValueFontSize,
				circularBottomTitleValueFontSizeMobile,
				circularBottomTitleValueFontSizeTablet,
				circularBottomTitleValueFontWeight,
				circularBottomTitleValueLineHeight,
				circularBottomTitleValueLetterSpacing,
				circularBottomTitleValueTextTransform,
				semiCircularTopTitleValueFontFamily,
				semiCircularTopTitleValueFontSize,
				semiCircularTopTitleValueFontSizeMobile,
				semiCircularTopTitleValueFontSizeTablet,
				semiCircularTopTitleValueFontWeight,
				semiCircularTopTitleValueLineHeight,
				semiCircularTopTitleValueLetterSpacing,
				semiCircularTopTitleValueTextTransform,
				semiCircularInnerValueFontFamily,
				semiCircularInnerValueFontSize,
				semiCircularInnerValueFontSizeMobile,
				semiCircularInnerValueFontSizeTablet,
				semiCircularInnerValueFontWeight,
				semiCircularInnerValueLineHeight,
				semiCircularInnerValueLetterSpacing,
				semiCircularBottomTitleValueFontFamily,
				semiCircularBottomTitleValueFontSize,
				semiCircularBottomTitleValueFontSizeMobile,
				semiCircularBottomTitleValueFontSizeTablet,
				semiCircularBottomTitleValueFontWeight,
				semiCircularBottomTitleValueLineHeight,
				semiCircularBottomTitleValueLetterSpacing,
				semiCircularBottomTitleValueTextTransform,
				semiCircularProgressBarBackgroundColor,
				semiCircularProgressBarTrackColor,
				hideWidget,
				hideWidgetTablet,
				hideWidgetMobile,
				z_index,
				z_indexMobile,
				z_indexTablet,
			},
			setAttributes,
		} = this.props;

		const onChangeHorizontalProgressBarBackgroundColor = (value) => {
			setAttributes({ horizontalProgressBarBackgroundColor: value });
		}
		const onChangeHorizontalProgressBarPrimaryTrackColor = (value) => {
			setAttributes({ horizontalProgressBarPrimaryTrackColor: value });
		}
		const onChangeHorizontalProgressBarSecondaryTrackColor = (value) => {
			setAttributes({ horizontalProgressBarSecondaryTrackColor: value });
		}
		const onChangeCircularProgressBarBackgroundColor = (value) => {
			setAttributes({ circularProgressBarBackgroundColor: value });
		}
		const onChangeCircularProgressBarTrackColor = (value) => {
			setAttributes({ circularProgressBarTrackColor: value });
		}
		const onChangeSemiCircularProgressBarBackgroundColor = (value) => {
			setAttributes({ semiCircularProgressBarBackgroundColor: value });
		}
		const onChangeSemiCircularProgressBarTrackColor = (value) => {
			setAttributes({ semiCircularProgressBarTrackColor: value });
		}

		return (
			<InspectorControls key="inspector">
				<InspectorTabs>
					<InspectorTab key={'content'}>
						<PanelBody
							title={__("General", "responsive-block-editor-addons")}
							initialOpen={false}
						>
							<RangeControl
								label={__("Progress Percentage", "responsive-block-editor-addons")}
								value={progressBarValue}
								min={0}
								max={100}
								onChange={(value) =>
									setAttributes({
										progressBarValue: value !== undefined ? value : 50,
									})
								}
								allowReset
							/>
							<SelectControl
								label={__("Progress Bar Style", "responsive-block-editor-addons")}
								value={progressBarStyle}
								options={[
									{
										value: "horizontal",
										label: __("Horizontal", "responsive-block-editor-addons"),
									},
									{
										value: "circular",
										label: __("Circular", "responsive-block-editor-addons"),
									},
								]}
								onChange={(value) => setAttributes({ progressBarStyle: value })}
							/>
							{progressBarStyle === "horizontal" && (
								<Fragment>
									<SelectControl
										label={__("Horizontal Progress Bar Style", "responsive-block-editor-addons")}
										value={horizontalProgressBarStyle}
										options={[
											{
												value: "plain",
												label: __("Plain", "responsive-block-editor-addons"),
											},
											{
												value: "striped",
												label: __("Striped", "responsive-block-editor-addons"),
											},
											{
												value: "animatedstriped",
												label: __("Animated Striped", "responsive-block-editor-addons"),
											},
										]}
										onChange={(value) => setAttributes({ horizontalProgressBarStyle: value })}
									/>
									<ToggleControl
										label={__("Top Title Enable", "responsive-block-editor-addons")}
										checked={progressBarTopTitleEnable}
										onChange={(value) =>
											setAttributes({ progressBarTopTitleEnable: !progressBarTopTitleEnable })
										}
									/>
									<ToggleControl
										label={__("Top Value Enable", "responsive-block-editor-addons")}
										checked={progressBarTopValueEnable}
										onChange={(value) =>
											setAttributes({ progressBarTopValueEnable: !progressBarTopValueEnable })
										}
									/>
									{(horizontalProgressBarStyle !== "striped" && horizontalProgressBarStyle !== "animatedstriped") && (
										<Fragment>
											<ToggleControl
												label={__("Inner Title Enable", "responsive-block-editor-addons")}
												checked={progressBarInnerTitleEnable}
												onChange={(value) =>
													setAttributes({ progressBarInnerTitleEnable: !progressBarInnerTitleEnable })
												}
											/>
											<ToggleControl
												label={__("Inner Value Enable", "responsive-block-editor-addons")}
												checked={progressBarInnerValueEnable}
												onChange={(value) =>
													setAttributes({ progressBarInnerValueEnable: !progressBarInnerValueEnable })
												}
											/>
										</Fragment>
									)}
									<ToggleControl
										label={__("Bottom Title Enable", "responsive-block-editor-addons")}
										checked={progressBarBottomTitleEnable}
										onChange={(value) =>
											setAttributes({ progressBarBottomTitleEnable: !progressBarBottomTitleEnable })
										}
									/>
									<ToggleControl
										label={__("Bottom Value Enable", "responsive-block-editor-addons")}
										checked={progressBarBottomValueEnable}
										onChange={(value) =>
											setAttributes({ progressBarBottomValueEnable: !progressBarBottomValueEnable })
										}
									/>
								</Fragment>
							)}
							{progressBarStyle === "circular" && (
								<Fragment>
									<SelectControl
										label={__("Circular Progress Bar Style", "responsive-block-editor-addons")}
										value={circularProgressBarStyle}
										options={[
											{
												value: "circle",
												label: __("Circle", "responsive-block-editor-addons"),
											},
											{
												value: "semicircle",
												label: __("Semi Circle", "responsive-block-editor-addons"),
											},
										]}
										onChange={(value) => setAttributes({ circularProgressBarStyle: value })}
									/>
									{circularProgressBarStyle === "circle" && (
										<Fragment>
											<ToggleControl
												label={__("Circle Inner Value Enable", "responsive-block-editor-addons")}
												checked={circularProgressBarValueEnable}
												onChange={(value) =>
													setAttributes({ circularProgressBarValueEnable: !circularProgressBarValueEnable })
												}
											/>
											<ToggleControl
												label={__("Circular Progress Bar Top Title Enable", "responsive-block-editor-addons")}
												checked={circularProgressBarTopTitleEnable}
												onChange={(value) =>
													setAttributes({ circularProgressBarTopTitleEnable: !circularProgressBarTopTitleEnable })
												}
											/>
											<ToggleControl
												label={__("Circular Progress Bar Top Value Enable", "responsive-block-editor-addons")}
												checked={circularProgressBarTopValueEnable}
												onChange={(value) =>
													setAttributes({ circularProgressBarTopValueEnable: !circularProgressBarTopValueEnable })
												}
											/>
											<ToggleControl
												label={__("Circular Progress Bar Bottom Title Enable", "responsive-block-editor-addons")}
												checked={circularProgressBarBottomTitleEnable}
												onChange={(value) =>
													setAttributes({ circularProgressBarBottomTitleEnable: !circularProgressBarBottomTitleEnable })
												}
											/>
											<ToggleControl
												label={__("Circular Progress Bar Bottom Value Enable", "responsive-block-editor-addons")}
												checked={circularProgressBarBottomValueEnable}
												onChange={(value) =>
													setAttributes({ circularProgressBarBottomValueEnable: !circularProgressBarBottomValueEnable })
												}
											/>
										</Fragment>
									)}
									{circularProgressBarStyle === "semicircle" && (
										<Fragment>
											<ToggleControl
												label={__("Semi-Circle Inner Value Enable", "responsive-block-editor-addons")}
												checked={semiCircularProgressBarValueEnable}
												onChange={(value) =>
													setAttributes({ semiCircularProgressBarValueEnable: !semiCircularProgressBarValueEnable })
												}
											/>
											<ToggleControl
												label={__("Semi-Circular Progress Bar Top Title Enable", "responsive-block-editor-addons")}
												checked={semiCircularProgressBarTopTitleEnable}
												onChange={(value) =>
													setAttributes({ semiCircularProgressBarTopTitleEnable: !semiCircularProgressBarTopTitleEnable })
												}
											/>
											<ToggleControl
												label={__("Semi-Circular Progress Bar Top Value Enable", "responsive-block-editor-addons")}
												checked={semiCircularProgressBarTopValueEnable}
												onChange={(value) =>
													setAttributes({ semiCircularProgressBarTopValueEnable: !semiCircularProgressBarTopValueEnable })
												}
											/>
											<ToggleControl
												label={__("Semi-Circular Progress Bar Bottom Title Enable", "responsive-block-editor-addons")}
												checked={semiCircularProgressBarBottomTitleEnable}
												onChange={(value) =>
													setAttributes({ semiCircularProgressBarBottomTitleEnable: !semiCircularProgressBarBottomTitleEnable })
												}
											/>
											<ToggleControl
												label={__("Semi-Circular Progress Bar Bottom Value Enable", "responsive-block-editor-addons")}
												checked={semiCircularProgressBarBottomValueEnable}
												onChange={(value) =>
													setAttributes({ semiCircularProgressBarBottomValueEnable: !semiCircularProgressBarBottomValueEnable })
												}
											/>
										</Fragment>
									)}
								</Fragment>
							)}
						</PanelBody>
					</InspectorTab>
					<InspectorTab key={'style'}>
						<PanelBody
							title={__("General Style", "responsive-block-editor-addons")}
							initialOpen={false}
						>
							{progressBarStyle === "horizontal" && (
								<RangeControl
									label={__("Horizontal Progress Bar Size", "responsive-block-editor-addons")}
									value={horizontalProgressBarSize}
									min={5}
									max={75}
									onChange={(value) =>
										setAttributes({
											horizontalProgressBarSize: value !== undefined ? value : 25,
										})
									}
									allowReset
								/>
							)}
							{progressBarStyle === "horizontal" && horizontalProgressBarStyle === "animatedstriped" && (
								<RangeControl
									label={__("Stipe Animation Duration", "responsive-block-editor-addons")}
									value={stripedHorizontalProgressBarAnimationTime}
									min={1}
									max={50}
									onChange={(value) =>
										setAttributes({
											stripedHorizontalProgressBarAnimationTime: value !== undefined ? value : 20,
										})
									}
									allowReset
								/>
							)}
							{progressBarStyle === "circular" && circularProgressBarStyle === "circle" && (
								<Fragment>
									<RangeControl
										label={__("Circular Progress Bar Size", "responsive-block-editor-addons")}
										value={circularProgressBarSize}
										min={50}
										max={250}
										onChange={(value) =>
											setAttributes({
												circularProgressBarSize: value !== undefined ? value : 150,
											})
										}
										initialPosition={150}
										allowReset
									/>
									<RangeControl
										label={__("Circular Progress Bar Width", "responsive-block-editor-addons")}
										value={circularProgressBarWidth}
										min={1}
										max={15}
										onChange={(value) =>
											setAttributes({
												circularProgressBarWidth: value !== undefined ? value : 10,
											})
										}
										initialPosition={10}
										allowReset
									/>
								</Fragment>
							)}
							{progressBarStyle === "circular" && circularProgressBarStyle === "semicircle" && (
								<Fragment>
									<RangeControl
										label={__("Semi Circular Progress Bar Size", "responsive-block-editor-addons")}
										value={semiCircularProgressBarSize}
										min={150}
										max={250}
										onChange={(value) =>
											setAttributes({
												semiCircularProgressBarSize: value !== undefined ? value : 200,
											})
										}
										allowReset
									/>
									<RangeControl
										label={__("Semi Circular Progress Bar Width", "responsive-block-editor-addons")}
										value={semiCircularProgressBarWidth}
										min={1}
										max={35}
										onChange={(value) =>
											setAttributes({
												semiCircularProgressBarWidth: value !== undefined ? value : 10,
											})
										}
										initialPosition={10}
										allowReset
									/>
								</Fragment>
							)}
							{progressBarStyle === "circular" && circularProgressBarStyle === "circle" && (
								<Fragment>
									<SelectControl
										label={__("Track Style", "responsive-block-editor-addons")}
										value={circularProgressBarTrackStyle}
										options={[
											{
												value: "round",
												label: __("Round", "responsive-block-editor-addons"),
											},
											{
												value: "square",
												label: __("Square", "responsive-block-editor-addons"),
											},
										]}
										onChange={(value) => setAttributes({ circularProgressBarTrackStyle: value })}
									/>
								</Fragment>
							)}
						</PanelBody>
						<PanelBody
							title={__("Colors", "responsive-block-editor-addons")}
							initialOpen={false}
						>
							<SelectControl
								label={__("Progress Bar Color Type", "responsive-block-editor-addons")}
								value={progressBarColorType}
								options={[
									{
										value: "default",
										label: __("Default", "responsive-block-editor-addons"),
									},
									{
										value: "info",
										label: __("Info", "responsive-block-editor-addons"),
									},
									{
										value: "success",
										label: __("Success", "responsive-block-editor-addons"),
									},
									{
										value: "warning",
										label: __("Warning", "responsive-block-editor-addons"),
									},
									{
										value: "danger",
										label: __("Danger", "responsive-block-editor-addons"),
									},
								]}
								onChange={(value) => setAttributes({ progressBarColorType: value })}
							/>
							{progressBarColorType === "default" && progressBarStyle === "horizontal" && (
								<Fragment>
									<PanelColorSettings
										title={__("Progress Bar Colors", "responsive-block-editor-addons")}
										initialOpen={false}
										colorSettings={[
											{
												value: horizontalProgressBarBackgroundColor,
												onChange: onChangeHorizontalProgressBarBackgroundColor,
												label: __("Background Color", "responsive-block-editor-addons"),
											},
											{
												value: horizontalProgressBarPrimaryTrackColor,
												onChange: onChangeHorizontalProgressBarPrimaryTrackColor,
												label: __("Primary Track Color", "responsive-block-editor-addons"),
											},
										]}
									>
										{progressBarStyle === "horizontal" && (horizontalProgressBarStyle === "striped" || horizontalProgressBarStyle === "animatedstriped") && (
											<Fragment>
												<p className="responsive-block-editor-addons-setting-label">
													{__("Track Stripe Color", "responsive-block-editor-addons")}
													<span className="components-base-control__label">
														<span
															className="component-color-indicator"
															style={{ backgroundColor: horizontalProgressBarStripeColor }}
														></span>
													</span>
												</p>
												<ColorPalette
													value={horizontalProgressBarStripeColor}
													onChange={(colorValue) =>
														setAttributes({ horizontalProgressBarStripeColor: colorValue })
													}
													allowReset
												/>
											</Fragment>
										)}
										<ToggleControl
											label="Gradient Track Color"
											checked={gradientTrack}
											onChange={() =>
												this.props.setAttributes({
													gradientTrack: !gradientTrack,
												})
											}
										/>
										{gradientTrack && (
											<Fragment>
												<p className="responsive-block-editor-addons-setting-label">
													{__("Secondary Track Color", "responsive-block-editor-addons")}
													<span className="components-base-control__label">
														<span
															className="component-color-indicator"
															style={{ backgroundColor: horizontalProgressBarSecondaryTrackColor }}
														></span>
													</span>
												</p>
												<ColorPalette
													value={horizontalProgressBarSecondaryTrackColor}
													onChange={(value) => setAttributes({ horizontalProgressBarSecondaryTrackColor: value })}
													allowReset
												/>
											</Fragment>
										)}
									</PanelColorSettings>
								</Fragment>
							)}
							{progressBarColorType === "default" && progressBarStyle === "circular"
								&& circularProgressBarStyle === "circle" && (
									<Fragment>
										<PanelColorSettings
											title={__("Progress Bar Colors", "responsive-block-editor-addons")}
											initialOpen={false}
											colorSettings={[
												{
													value: circularProgressBarBackgroundColor,
													onChange: onChangeCircularProgressBarBackgroundColor,
													label: __("Background Color", "responsive-block-editor-addons"),
												},
												{
													value: circularProgressBarTrackColor,
													onChange: onChangeCircularProgressBarTrackColor,
													label: __("Track Color", "responsive-block-editor-addons"),
												},
											]}
										></PanelColorSettings>
									</Fragment>
								)}
							{progressBarColorType === "default" && progressBarStyle === "circular"
								&& circularProgressBarStyle === "semicircle" && (
									<Fragment>
										<PanelColorSettings
											title={__("Progress Bar Colors", "responsive-block-editor-addons")}
											initialOpen={false}
											colorSettings={[
												{
													value: semiCircularProgressBarBackgroundColor,
													onChange: onChangeSemiCircularProgressBarBackgroundColor,
													label: __("Background Color", "responsive-block-editor-addons"),
												},
												{
													value: semiCircularProgressBarTrackColor,
													onChange: onChangeSemiCircularProgressBarTrackColor,
													label: __("Track Color", "responsive-block-editor-addons"),
												},
											]}
										></PanelColorSettings>
									</Fragment>
								)}
						</PanelBody>
						{((progressBarStyle === "horizontal" && (progressBarTopTitleEnable || progressBarTopValueEnable || progressBarInnerTitleEnable || progressBarInnerValueEnable || progressBarBottomTitleEnable || progressBarBottomValueEnable))
						|| (progressBarStyle === "circular" && circularProgressBarStyle === "circle" && (circularProgressBarValueEnable || circularProgressBarTopTitleEnable || circularProgressBarTopValueEnable || circularProgressBarBottomTitleEnable || circularProgressBarBottomValueEnable))
						|| (progressBarStyle === "circular" && circularProgressBarStyle === "semicircle" && (semiCircularProgressBarValueEnable || semiCircularProgressBarTopTitleEnable || semiCircularProgressBarTopValueEnable || semiCircularProgressBarBottomTitleEnable || semiCircularProgressBarBottomValueEnable))
						) && (
							<PanelBody
								title={__("Text Colors", "responsive-block-editor-addons")}
								initialOpen={false}
							>
								{(progressBarStyle === "horizontal") && (progressBarTopTitleEnable || progressBarTopValueEnable) && (
									<PanelBody
										title={__("Top Title and Value Color", "responsive-block-editor-addons")}
										initialOpen={false}
									>
										<p className="responsive-block-editor-addons-setting-label">
											{__("Color", "responsive-block-editor-addons")}
											<span className="components-base-control__label">
												<span
													className="component-color-indicator"
													style={{ backgroundColor: horizontalProgressBarTopTitleValueColor }}
												></span>
											</span>
										</p>
										<ColorPalette
											value={horizontalProgressBarTopTitleValueColor}
											onChange={(value) => setAttributes({ horizontalProgressBarTopTitleValueColor: value })}
											allowReset
										/>
									</PanelBody>
								)}
								{(progressBarStyle === "horizontal") && (progressBarInnerTitleEnable || progressBarInnerValueEnable)
									&& (horizontalProgressBarStyle !== "striped" && horizontalProgressBarStyle !== "animatedstriped")
									&& (
										<PanelBody
											title={__("Inner Title and Value Color", "responsive-block-editor-addons")}
											initialOpen={false}
										>
											<p className="responsive-block-editor-addons-setting-label">
												{__("Color", "responsive-block-editor-addons")}
												<span className="components-base-control__label">
													<span
														className="component-color-indicator"
														style={{ backgroundColor: horizontalProgressBarInnerTitleValueColor }}
													></span>
												</span>
											</p>
											<ColorPalette
												value={horizontalProgressBarInnerTitleValueColor}
												onChange={(value) => setAttributes({ horizontalProgressBarInnerTitleValueColor: value })}
												allowReset
											/>
										</PanelBody>
									)}
								{(progressBarStyle === "horizontal") && (progressBarBottomTitleEnable || progressBarBottomValueEnable) && (
									<PanelBody
										title={__("Bottom Title and Value Color", "responsive-block-editor-addons")}
										initialOpen={false}
									>
										<p className="responsive-block-editor-addons-setting-label">
											{__("Color", "responsive-block-editor-addons")}
											<span className="components-base-control__label">
												<span
													className="component-color-indicator"
													style={{ backgroundColor: horizontalProgressBarBottomTitleValueColor }}
												></span>
											</span>
										</p>
										<ColorPalette
											value={horizontalProgressBarBottomTitleValueColor}
											onChange={(value) => setAttributes({ horizontalProgressBarBottomTitleValueColor: value })}
											allowReset
										/>
									</PanelBody>
								)}
								{(progressBarStyle === "circular" && circularProgressBarStyle === "circle") &&
									(circularProgressBarTopTitleEnable || circularProgressBarTopValueEnable)
									&& (
										<PanelBody
											title={__("Top Title and Value Color", "responsive-block-editor-addons")}
											initialOpen={false}
										>
											<p className="responsive-block-editor-addons-setting-label">
												{__("Color", "responsive-block-editor-addons")}
												<span className="components-base-control__label">
													<span
														className="component-color-indicator"
														style={{ backgroundColor: circularProgressBarTopTitleValueColor }}
													></span>
												</span>
											</p>
											<ColorPalette
												value={circularProgressBarTopTitleValueColor}
												onChange={(value) => setAttributes({ circularProgressBarTopTitleValueColor: value })}
												allowReset
											/>
										</PanelBody>
									)}
								{(progressBarStyle === "circular" && circularProgressBarStyle === "circle")
									&& (circularProgressBarValueEnable) && (
										<PanelBody
											title={__("Inner Value Color", "responsive-block-editor-addons")}
											initialOpen={false}
										>
											<p className="responsive-block-editor-addons-setting-label">
												{__("Color", "responsive-block-editor-addons")}
												<span className="components-base-control__label">
													<span
														className="component-color-indicator"
														style={{ backgroundColor: circularProgressBarInnerValueColor }}
													></span>
												</span>
											</p>
											<ColorPalette
												value={circularProgressBarInnerValueColor}
												onChange={(value) => setAttributes({ circularProgressBarInnerValueColor: value })}
												allowReset
											/>
										</PanelBody>
									)}
								{(progressBarStyle === "circular" && circularProgressBarStyle === "circle") &&
									(circularProgressBarBottomTitleEnable || circularProgressBarBottomValueEnable)
									&& (
										<PanelBody
											title={__("Bottom Title and Value Color", "responsive-block-editor-addons")}
											initialOpen={false}
										>
											<p className="responsive-block-editor-addons-setting-label">
												{__("Color", "responsive-block-editor-addons")}
												<span className="components-base-control__label">
													<span
														className="component-color-indicator"
														style={{ backgroundColor: circularProgressBarBottomTitleValueColor }}
													></span>
												</span>
											</p>
											<ColorPalette
												value={circularProgressBarBottomTitleValueColor}
												onChange={(value) => setAttributes({ circularProgressBarBottomTitleValueColor: value })}
												allowReset
											/>
										</PanelBody>
									)}
								{(progressBarStyle === "circular" && circularProgressBarStyle === "semicircle") &&
									(semiCircularProgressBarTopTitleEnable || semiCircularProgressBarTopValueEnable)
									&& (
										<PanelBody
											title={__("Top Title and Value Color", "responsive-block-editor-addons")}
											initialOpen={false}
										>
											<p className="responsive-block-editor-addons-setting-label">
												{__("Color", "responsive-block-editor-addons")}
												<span className="components-base-control__label">
													<span
														className="component-color-indicator"
														style={{ backgroundColor: semiCircularProgressBarTopTitleValueColor }}
													></span>
												</span>
											</p>
											<ColorPalette
												value={semiCircularProgressBarTopTitleValueColor}
												onChange={(value) => setAttributes({ semiCircularProgressBarTopTitleValueColor: value })}
												allowReset
											/>
										</PanelBody>
									)}
								{(progressBarStyle === "circular" && circularProgressBarStyle === "semicircle")
									&& (semiCircularProgressBarValueEnable) && (
										<PanelBody
											title={__("Inner Value Color", "responsive-block-editor-addons")}
											initialOpen={false}
										>
											<p className="responsive-block-editor-addons-setting-label">
												{__("Color", "responsive-block-editor-addons")}
												<span className="components-base-control__label">
													<span
														className="component-color-indicator"
														style={{ backgroundColor: semiCircularProgressBarInnerValueColor }}
													></span>
												</span>
											</p>
											<ColorPalette
												value={semiCircularProgressBarInnerValueColor}
												onChange={(value) => setAttributes({ semiCircularProgressBarInnerValueColor: value })}
												allowReset
											/>
										</PanelBody>
									)}
								{(progressBarStyle === "circular" && circularProgressBarStyle === "semicircle") &&
									(semiCircularProgressBarBottomTitleEnable || semiCircularProgressBarBottomValueEnable)
									&& (
										<PanelBody
											title={__("Bottom Title and Value Color", "responsive-block-editor-addons")}
											initialOpen={false}
										>
											<p className="responsive-block-editor-addons-setting-label">
												{__("Color", "responsive-block-editor-addons")}
												<span className="components-base-control__label">
													<span
														className="component-color-indicator"
														style={{ backgroundColor: semiCircularProgressBarBottomTitleValueColor }}
													></span>
												</span>
											</p>
											<ColorPalette
												value={semiCircularProgressBarBottomTitleValueColor}
												onChange={(value) => setAttributes({ semiCircularProgressBarBottomTitleValueColor: value })}
												allowReset
											/>
										</PanelBody>
									)}
							</PanelBody>
						)}
						{progressBarStyle === "horizontal" && (
							<PanelBody
								title={__("Border", "responsive-block-editor-addons")}
								initialOpen={false}
							>
								<BlockBorderHelperControl
									attrNameTemplate="horizontalProgressBar%s"
									values={{
										radius: horizontalProgressBarBorderRadius,
										style: horizontalProgressBarBorderStyle,
										width: horizontalProgressBarBorderWidth,
										color: horizontalProgressBarBorderColor
									}}
									setAttributes={setAttributes}
									{...this.props}
								/>
							</PanelBody>
						)}
						{((progressBarStyle === "horizontal" && (progressBarTopTitleEnable || progressBarTopValueEnable || progressBarInnerTitleEnable || progressBarInnerValueEnable || progressBarBottomTitleEnable || progressBarBottomValueEnable))
						|| (progressBarStyle === "circular" && circularProgressBarStyle === "circle" && (circularProgressBarValueEnable || circularProgressBarTopTitleEnable || circularProgressBarTopValueEnable || circularProgressBarBottomTitleEnable || circularProgressBarBottomValueEnable))
						|| (progressBarStyle === "circular" && circularProgressBarStyle === "semicircle" && (semiCircularProgressBarValueEnable || semiCircularProgressBarTopTitleEnable || semiCircularProgressBarTopValueEnable || semiCircularProgressBarBottomTitleEnable || semiCircularProgressBarBottomValueEnable))
						) && (
							<PanelBody
								title={__("Typography", "responsive-block-editor-addons")}
								initialOpen={false}
							>
								{(progressBarStyle === "horizontal") && (progressBarTopTitleEnable || progressBarTopValueEnable) && (
									<Fragment>
										<TypographyHelperControl
											title={__("Top Title and Value Typography", "responsive-block-editor-addons")}
											attrNameTemplate="topTitleValue%s"
											values={{
												family: topTitleValueFontFamily,
												size: topTitleValueFontSize,
												sizeMobile: topTitleValueFontSizeMobile,
												sizeTablet: topTitleValueFontSizeTablet,
												weight: topTitleValueFontWeight,
												height: topTitleValueLineHeight,
												spacing: topTitleValueLetterSpacing,
												transform: topTitleValueTextTransform
											}}
											showLetterSpacing={true}
											showTextTransform={true}
											setAttributes={setAttributes}
											{...this.props}
										/>
									</Fragment>
								)}
								{(progressBarStyle === "horizontal") && (progressBarInnerTitleEnable || progressBarInnerValueEnable)
									&& (horizontalProgressBarStyle !== "striped" && horizontalProgressBarStyle !== "animatedstriped")
									&& (
										<Fragment>
											<TypographyHelperControl
												title={__("Inner Title and Value Typography", "responsive-block-editor-addons")}
												attrNameTemplate="innerTitleValue%s"
												values={{
													family: innerTitleValueFontFamily,
													size: innerTitleValueFontSize,
													sizeMobile: innerTitleValueFontSizeMobile,
													sizeTablet: innerTitleValueFontSizeTablet,
													weight: innerTitleValueFontWeight,
													height: innerTitleValueLineHeight,
													spacing: innerTitleValueLetterSpacing,
													transform: innerTitleValueTextTransform
												}}
												showLetterSpacing={true}
												showTextTransform={true}
												setAttributes={setAttributes}
												{...this.props}
											/>
										</Fragment>
									)}
								{(progressBarStyle === "horizontal") && (progressBarBottomTitleEnable || progressBarBottomValueEnable) && (
									<Fragment>
										<TypographyHelperControl
											title={__("Bottom Title and Value Typography", "responsive-block-editor-addons")}
											attrNameTemplate="bottomTitleValue%s"
											values={{
												family: bottomTitleValueFontFamily,
												size: bottomTitleValueFontSize,
												sizeMobile: bottomTitleValueFontSizeMobile,
												sizeTablet: bottomTitleValueFontSizeTablet,
												weight: bottomTitleValueFontWeight,
												height: bottomTitleValueLineHeight,
												spacing: bottomTitleValueLetterSpacing,
												transform: bottomTitleValueTextTransform
											}}
											showLetterSpacing={true}
											showTextTransform={true}
											setAttributes={setAttributes}
											{...this.props}
										/>
									</Fragment>
								)}
								{(progressBarStyle === "circular" && circularProgressBarStyle === "circle") &&
									(circularProgressBarTopTitleEnable || circularProgressBarTopValueEnable)
									&& (
										<Fragment>
											<TypographyHelperControl
												title={__("Top Title and Value Typography", "responsive-block-editor-addons")}
												attrNameTemplate="circularTopTitleValue%s"
												values={{
													family: circularTopTitleValueFontFamily,
													size: circularTopTitleValueFontSize,
													sizeMobile: circularTopTitleValueFontSizeMobile,
													sizeTablet: circularTopTitleValueFontSizeTablet,
													weight: circularTopTitleValueFontWeight,
													height: circularTopTitleValueLineHeight,
													spacing: circularTopTitleValueLetterSpacing,
													transform: circularTopTitleValueTextTransform
												}}
												showLetterSpacing={true}
												showTextTransform={true}
												setAttributes={setAttributes}
												{...this.props}
											/>
										</Fragment>
									)}
								{(progressBarStyle === "circular" && circularProgressBarStyle === "circle")
									&& (circularProgressBarValueEnable) && (
										<Fragment>
											<TypographyHelperControl
												title={__("Inner Value Typography", "responsive-block-editor-addons")}
												attrNameTemplate="circularInnerValue%s"
												values={{
													family: circularInnerValueFontFamily,
													size: circularInnerValueFontSize,
													sizeMobile: circularInnerValueFontSizeMobile,
													sizeTablet: circularInnerValueFontSizeTablet,
													weight: circularInnerValueFontWeight,
													height: circularInnerValueLineHeight,
													spacing: circularInnerValueLetterSpacing,
												}}
												showLetterSpacing={true}
												showTextTransform={false}
												setAttributes={setAttributes}
												{...this.props}
											/>
										</Fragment>
									)}
								{(progressBarStyle === "circular" && circularProgressBarStyle === "circle") &&
									(circularProgressBarBottomTitleEnable || circularProgressBarBottomValueEnable)
									&& (
										<Fragment>
											<TypographyHelperControl
												title={__("Bottom Title and Value Typography", "responsive-block-editor-addons")}
												attrNameTemplate="circularBottomTitleValue%s"
												values={{
													family: circularBottomTitleValueFontFamily,
													size: circularBottomTitleValueFontSize,
													sizeMobile: circularBottomTitleValueFontSizeMobile,
													sizeTablet: circularBottomTitleValueFontSizeTablet,
													weight: circularBottomTitleValueFontWeight,
													height: circularBottomTitleValueLineHeight,
													spacing: circularBottomTitleValueLetterSpacing,
													transform: circularBottomTitleValueTextTransform
												}}
												showLetterSpacing={true}
												showTextTransform={true}
												setAttributes={setAttributes}
												{...this.props}
											/>
										</Fragment>
									)}
								{(progressBarStyle === "circular" && circularProgressBarStyle === "semicircle") &&
									(semiCircularProgressBarTopTitleEnable || semiCircularProgressBarTopValueEnable)
									&& (
										<Fragment>
											<TypographyHelperControl
												title={__("Top Title and Value Typography", "responsive-block-editor-addons")}
												attrNameTemplate="semiCircularTopTitleValue%s"
												values={{
													family: semiCircularTopTitleValueFontFamily,
													size: semiCircularTopTitleValueFontSize,
													sizeMobile: semiCircularTopTitleValueFontSizeMobile,
													sizeTablet: semiCircularTopTitleValueFontSizeTablet,
													weight: semiCircularTopTitleValueFontWeight,
													height: semiCircularTopTitleValueLineHeight,
													spacing: semiCircularTopTitleValueLetterSpacing,
													transform: semiCircularTopTitleValueTextTransform
												}}
												showLetterSpacing={true}
												showTextTransform={true}
												setAttributes={setAttributes}
												{...this.props}
											/>
										</Fragment>
									)}
								{(progressBarStyle === "circular" && circularProgressBarStyle === "semicircle")
									&& (semiCircularProgressBarValueEnable) && (
										<Fragment>
											<TypographyHelperControl
												title={__("Inner Value Typography", "responsive-block-editor-addons")}
												attrNameTemplate="semiCircularInnerValue%s"
												values={{
													family: semiCircularInnerValueFontFamily,
													size: semiCircularInnerValueFontSize,
													sizeMobile: semiCircularInnerValueFontSizeMobile,
													sizeTablet: semiCircularInnerValueFontSizeTablet,
													weight: semiCircularInnerValueFontWeight,
													height: semiCircularInnerValueLineHeight,
													spacing: semiCircularInnerValueLetterSpacing,
												}}
												showLetterSpacing={true}
												showTextTransform={false}
												setAttributes={setAttributes}
												{...this.props}
											/>
										</Fragment>
									)}
								{(progressBarStyle === "circular" && circularProgressBarStyle === "semicircle") &&
									(semiCircularProgressBarBottomTitleEnable || semiCircularProgressBarBottomValueEnable)
									&& (
										<Fragment>
											<TypographyHelperControl
												title={__("Bottom Title and Value Typography", "responsive-block-editor-addons")}
												attrNameTemplate="semiCircularBottomTitleValue%s"
												values={{
													family: semiCircularBottomTitleValueFontFamily,
													size: semiCircularBottomTitleValueFontSize,
													sizeMobile: semiCircularBottomTitleValueFontSizeMobile,
													sizeTablet: semiCircularBottomTitleValueFontSizeTablet,
													weight: semiCircularBottomTitleValueFontWeight,
													height: semiCircularBottomTitleValueLineHeight,
													spacing: semiCircularBottomTitleValueLetterSpacing,
													transform: semiCircularBottomTitleValueTextTransform
												}}
												showLetterSpacing={true}
												showTextTransform={true}
												setAttributes={setAttributes}
												{...this.props}
											/>
										</Fragment>
									)}
							</PanelBody>
						)}
					</InspectorTab>
					<InspectorTab key={'advance'}>
						<PanelBody
							title={__("Responsive Conditions", "responsive-block-editor-addons")}
							initialOpen={false}
						>
							<ToggleControl
								label={__(
								"Hide on Desktop",
								"responsive-block-editor-addons"
								)}
								checked={hideWidget}
								onChange={(value) =>
								setAttributes({ hideWidget: !hideWidget })
								}
							/>
							<ToggleControl
								label={__(
								"Hide on Tablet",
								"responsive-block-editor-addons"
								)}
								checked={hideWidgetTablet}
								onChange={(value) =>
								setAttributes({ hideWidgetTablet: !hideWidgetTablet })
								}
							/>
							<ToggleControl
								label={__(
								"Hide on Mobile",
								"responsive-block-editor-addons"
								)}
								checked={hideWidgetMobile}
								onChange={(value) =>
								setAttributes({ hideWidgetMobile: !hideWidgetMobile })
								}
							/>
						</PanelBody>
          			
					<PanelBody
              title={__("Z Index", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <TabPanel
                  className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                  activeClass="active-tab"
                  tabs={[
                    {
                      name: "desktop",
                      title: <Dashicon icon="desktop" />,
                      className:
                        " responsive-desktop-tab  responsive-responsive-tabs",
                    },
                    {
                      name: "tablet",
                      title: <Dashicon icon="tablet" />,
                      className:
                        " responsive-tablet-tab  responsive-responsive-tabs",
                    },
                    {
                      name: "mobile",
                      title: <Dashicon icon="smartphone" />,
                      className:
                        " responsive-mobile-tab  responsive-responsive-tabs",
                    },
                  ]}
                >
                  {(tab) => {
                    let tabout;

                    if ("mobile" === tab.name) {
                      tabout = (
                        <RangeControl
                        label={__("z-index (Mobile)", "responsive-block-editor-addons")}
                        min={-1}
                        max={99999}
                        allowReset={true}
                        resetFallbackValue={1}
                        value={z_indexMobile}
                        onChange={(value) =>
                          setAttributes({ z_indexMobile: value !== undefined ? value : 1 })
                        }
                      />
                      );
                    } else if ("tablet" === tab.name) {
                      tabout = (
                        <RangeControl
                        label={__("z-index (Tablet)", "responsive-block-editor-addons")}
                        min={-1}
                        max={99999}
                        allowReset={true}
                        resetFallbackValue={1}
                        value={z_indexTablet}
                        onChange={(value) =>
                          setAttributes({ z_indexTablet: value !== undefined ? value : 1 })
                        }
                      />
                      );
                    } else {
                      tabout = (
                        <RangeControl
                        label={__("z-index ", "responsive-block-editor-addons")}
                        min={-1}
                        max={99999}
                        allowReset={true}
                        resetFallbackValue={1}
                        value={z_index}
                        onChange={(value) =>
                          setAttributes({ z_index: value !== undefined ? value : 1 })
                        }
                      />
                      );
                    }

                    return <div>{tabout}</div>;
                  }}
              </TabPanel>
          			</PanelBody>
					</InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		);
	}
}
