/**
 * External dependencies
 */
import moment from "moment";
import DateTime from "react-datetime";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import BoxShadowControl from "../../../utils/components/box-shadow";
import ResponsiveSpacingControl from "../../../settings-components/Responsive Spacing Settings";
import ResponsivePaddingControl from "../../../settings-components/Responsive Spacing Settings/Responsive Padding Control";
import InspectorTab from "../../../components/InspectorTab"
import InspectorTabs from "../../../components/InspectorTabs"

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const {
	InspectorControls,
	ColorPalette,
	AlignmentToolbar,
} = wp.editor;

// Import Inspector components
const {
	PanelBody,
	BaseControl,
	TextControl,
	ToggleControl,
	SelectControl,
	RangeControl,
	TabPanel,
	Dashicon,
} = wp.components;

export default class Inspector extends Component {
	constructor(props) {
		super(...arguments)
	}

	render() {
		const {
			attributes: {
				id,
				date,
				days,
				hours,
				minutes,
				seconds,
				digitDaysLabel,
				digitHoursLabel,
				digitMinutesLabel,
				digitSecondsLabel,
				showDigitLabels,
				showDaysBox,
				showHoursBox,
				showMinutesBox,
				showSecondsBox,
				digitFontFamily,
				digitFontSize,
				digitFontSizeMobile,
				digitFontSizeTablet,
				digitFontWeight,
				digitLetterSpacing,
				digitLineHeight,
				digitColor,
				labelFontFamily,
				labelFontSize,
				labelFontSizeMobile,
				labelFontSizeTablet,
				labelColor,
				labelLineHeight,
				labelFontWeight,
				labelLeftPadding,
				labelLetterSpacing,
				boxItemMarginTop,
				boxItemMarginRight,
				boxItemMarginBottom,
				boxItemMarginLeft,
				boxItemMarginTopTablet,
				boxItemMarginRightTablet,
				boxItemMarginBottomTablet,
				boxItemMarginLeftTablet,
				boxItemMarginTopMobile,
				boxItemMarginRightMobile,
				boxItemMarginBottomMobile,
				boxItemMarginLeftMobile,
				boxItemTextAlign,
				boxHeight,
				boxWidth,
				boxMargin,
				boxHeightMobile,
				boxWidthMobile,
				boxMarginMobile,
				boxHeightTablet,
				boxWidthTablet,
				boxMarginTablet,
				boxTopPadding,
				boxRightPadding,
				boxBottomPadding,
				boxLeftPadding,
				boxTopPaddingMobile,
				boxRightPaddingMobile,
				boxBottomPaddingMobile,
				boxLeftPaddingMobile,
				boxTopPaddingTablet,
				boxRightPaddingTablet,
				boxBottomPaddingTablet,
				boxLeftPaddingTablet,
				boxBorderSize,
				boxBorderStyle,
				boxBorderColor,
				borderRadiusTopLeft,
				borderRadiusTopRight,
				borderRadiusBottomLeft,
				borderRadiusBottomRight,
				boxShadowPosition,
				boxShadowHOffset,
				boxShadowVOffset,
				boxShadowBlur,
				boxShadowSpread,
				boxBackgroundColor,
				boxShadowColor,
				containerMarginTop,
				containerMarginRight,
				containerMarginBottom,
				containerMarginLeft,
				containerTopPadding,
				containerBottomPadding,
				containerLeftPadding,
				containerRightPadding,
				containerTopPaddingTablet,
				containerBottomPaddingTablet,
				containerLeftPaddingTablet,
				containerRightPaddingTablet,
				containerTopPaddingMobile,
				containerBottomPaddingMobile,
				containerLeftPaddingMobile,
				containerRightPaddingMobile,
				containerMarginTopTablet,
				containerMarginRightTablet,
				containerMarginBottomTablet,
				containerMarginLeftTablet,
				containerMarginTopMobile,
				containerMarginRightMobile,
				containerMarginBottomMobile,
				containerMarginLeftMobile,
				justifyItems,
				displayInline,
				stackOnMobile
			},
			setAttributes,
		} = this.props;

		let dateDefault = new Date()
		dateDefault.setDate(dateDefault.getDate() + 30)

		const fontWeightOptions = [
			{
				value: "100",
				label: __("100", "responsive-block-editor-addons"),
			},
			{
				value: "200",
				label: __("200", "responsive-block-editor-addons"),
			},
			{
				value: "300",
				label: __("300", "responsive-block-editor-addons"),
			},
			{
				value: "400",
				label: __("400", "responsive-block-editor-addons"),
			},
			{
				value: "500",
				label: __("500", "responsive-block-editor-addons"),
			},
			{
				value: "600",
				label: __("600", "responsive-block-editor-addons"),
			},
			{
				value: "700",
				label: __("700", "responsive-block-editor-addons"),
			},
			{
				value: "800",
				label: __("800", "responsive-block-editor-addons"),
			},
			{
				value: "900",
				label: __("900", "responsive-block-editor-addons"),
			},
		];

		const onDateTimeChange = (momentObj) => {
			let date = momentObj._d;

			// ignore invalid date
			if (!date) return;

			let time = date.getTime();

			const counter = () => {
				let now = new Date().getTime();
				let currentUtcOffset = moment(date).utcOffset() * 60 * 1000;

				let timer = new Date(time - now - currentUtcOffset);

				if (time < now) {
					setAttributes({ days: "0", hours: "0", minutes: "0", seconds: "0" });
					return;
				}

				// Calculate days, hours, minutes and seconds
				let oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * miliseconds
				let days = Math.floor((time - now) / oneDay).toString();
				let hours = timer.getHours().toString();
				let minutes = timer.getMinutes().toString();
				let seconds = timer.getSeconds().toString();

				setAttributes({ date, days, hours, minutes, seconds });
			};

			// Clear interval if countdown already exists
			if (window[id]) {
				clearInterval(window[id]);
			}

			if (id) {
				window[id] = setInterval(counter, 1000);
			}
		};

		const yesterday = moment().subtract(1, "day");

		const valid = (current) => current.isAfter(yesterday);

		return (
			<InspectorControls key="inspecter">
				<InspectorTabs>
					<InspectorTab key={'content'}>
						<PanelBody title={__("Countdown", "responsive-block-editor-addons")}
							initialOpen={true}
						>
							<BaseControl
								id="responsive-block-editor-addons-countdown-due-date"
								label={__("Due Date")}
							>
								<DateTime
									value={date}
									dateFormat="YYYY-MM-DD-A"
									timeFormat="h:mm A"
									onChange={(momentObj) => onDateTimeChange(momentObj)}
									isValidDate={valid}
									initialValue={dateDefault}
								/>
							</BaseControl>
						</PanelBody>
						<PanelBody title={__("Display", "responsive-block-editor-addons")}
							initialOpen={false}
						>
							<ToggleControl
								label={__("Inline", "responsive-block-editor-addons")}
								checked={displayInline}
								onChange={() => setAttributes({ displayInline: !displayInline })}
							/>
							<ToggleControl
								label={__("Stack on Mobile", "responsive-block-editor-addons")}
								checked={stackOnMobile}
								onChange={() => setAttributes({ stackOnMobile: !stackOnMobile })}
							/>
							<ToggleControl
								label={__("Labels", "responsive-block-editor-addons")}
								checked={showDigitLabels}
								onChange={() => setAttributes({ showDigitLabels: !showDigitLabels })}
							/>

							<ToggleControl
								label={__("Days", "responsive-block-editor-addons")}
								checked={showDaysBox}
								onChange={() => setAttributes({ showDaysBox: !showDaysBox })}
							/>

							<ToggleControl
								label={__("Hours", "responsive-block-editor-addons")}
								checked={showHoursBox}
								onChange={() => setAttributes({ showHoursBox: !showHoursBox })}
							/>

							<ToggleControl
								label={__("Minutes", "responsive-block-editor-addons")}
								checked={showMinutesBox}
								onChange={() => setAttributes({ showMinutesBox: !showMinutesBox })}
							/>

							<ToggleControl
								label={__("Seconds", "responsive-block-editor-addons")}
								checked={showSecondsBox}
								onChange={() => setAttributes({ showSecondsBox: !showSecondsBox })}
							/>
						</PanelBody>

						<PanelBody title={__("Custom Labels", "responsive-block-editor-addons")}
							initialOpen={false}
						>
							<TextControl
								label={__("Days", "responsive-block-editor-addons")}
								value={digitDaysLabel}
								onChange={(newValue) => setAttributes({ digitDaysLabel: newValue })}
							/>
							<TextControl
								label={__("Hours", "responsive-block-editor-addons")}
								value={digitHoursLabel}
								onChange={(newValue) => setAttributes({ digitHoursLabel: newValue })}
							/>
							<TextControl
								label={__("Minutes", "responsive-block-editor-addons")}
								value={digitMinutesLabel}
								onChange={(newValue) => setAttributes({ digitMinutesLabel: newValue })}
							/>
							<TextControl
								label={__("Seconds", "responsive-block-editor-addons")}
								value={digitSecondsLabel}
								onChange={(newValue) => setAttributes({ digitSecondsLabel: newValue })}
							/>
						</PanelBody>
					</InspectorTab>
					<InspectorTab key={'style'}>
						<PanelBody title={__("Box Content Style", "responsive-block-editor-addons")}
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
										className: " responsive-tablet-tab  responsive-responsive-tabs",
									},
									{
										name: "mobile",
										title: <Dashicon icon="smartphone" />,
										className: " responsive-mobile-tab  responsive-responsive-tabs",
									},
								]}
							>

								{(tab) => {
									let tabout;

									if ("mobile" === tab.name) {
										tabout = (
											<Fragment>
												<RangeControl
													label={__("Margin Top Mobile", "responsive-block-editor-addons")}
													value={boxItemMarginTopMobile}
													onChange={(value) =>
														setAttributes({ boxItemMarginTopMobile: value })
													}
													min={-100}
													max={100}
													allowReset
												/>
												<RangeControl
													label={__("Margin Right Mobile", "responsive-block-editor-addons")}
													value={boxItemMarginRightMobile}
													onChange={(value) =>
														setAttributes({ boxItemMarginRightMobile: value })
													}
													min={-100}
													max={100}
													allowReset
												/>
												<RangeControl
													label={__("Margin Bottom Mobile", "responsive-block-editor-addons")}
													value={boxItemMarginBottomMobile}
													onChange={(value) =>
														setAttributes({ boxItemMarginBottomMobile: value })
													}
													min={-100}
													max={100}
													allowReset
												/>
												<RangeControl
													label={__("Margin Left Mobile", "responsive-block-editor-addons")}
													value={boxItemMarginLeftMobile}
													onChange={(value) =>
														setAttributes({ boxItemMarginLeftMobile: value })
													}
													min={-100}
													max={100}
													allowReset
												/>
											</Fragment>
										);
									} else if ("tablet" === tab.name) {
										tabout = (
											<Fragment>
												<RangeControl
													label={__("Margin Top Tablet", "responsive-block-editor-addons")}
													value={boxItemMarginTopTablet}
													onChange={(value) =>
														setAttributes({ boxItemMarginTopTablet: value })
													}
													min={-100}
													max={100}
													allowReset
												/>
												<RangeControl
													label={__("Margin Right Tablet", "responsive-block-editor-addons")}
													value={boxItemMarginRightTablet}
													onChange={(value) =>
														setAttributes({ boxItemMarginRightTablet: value })
													}
													min={-100}
													max={100}
													allowReset
												/>
												<RangeControl
													label={__("Margin Bottom Tablet", "responsive-block-editor-addons")}
													value={boxItemMarginBottomTablet}
													onChange={(value) =>
														setAttributes({ boxItemMarginBottomTablet: value })
													}
													min={-100}
													max={100}
													allowReset
												/>
												<RangeControl
													label={__("Margin Left Tablet", "responsive-block-editor-addons")}
													value={boxItemMarginLeftTablet}
													onChange={(value) =>
														setAttributes({ boxItemMarginLeftTablet: value })
													}
													min={-100}
													max={100}
													allowReset
												/>
											</Fragment>
										);
									} else {
										tabout = (
											<Fragment>
												<RangeControl
													label={__("Margin Top", "responsive-block-editor-addons")}
													value={boxItemMarginTop}
													onChange={(value) =>
														setAttributes({ boxItemMarginTop: value })
													}
													min={-100}
													max={100}
													allowReset
												/>
												<RangeControl
													label={__("Margin Right", "responsive-block-editor-addons")}
													value={boxItemMarginRight}
													onChange={(value) =>
														setAttributes({ boxItemMarginRight: value })
													}
													min={-100}
													max={100}
													allowReset
												/>
												<RangeControl
													label={__("Margin Bottom", "responsive-block-editor-addons")}
													value={boxItemMarginBottom}
													onChange={(value) =>
														setAttributes({ boxItemMarginBottom: value })
													}
													min={-100}
													max={100}
													allowReset
												/>
												<RangeControl
													label={__("Margin Left", "responsive-block-editor-addons")}
													value={boxItemMarginLeft}
													onChange={(value) =>
														setAttributes({ boxItemMarginLeft: value })
													}
													min={-100}
													max={100}
													allowReset
												/>
											</Fragment>
										);
									}

									return <div>{tabout}</div>;
								}}
							</TabPanel>
							<BaseControl>
								<BaseControl.VisualLabel>{__("Text Alignment")}</BaseControl.VisualLabel>
								<AlignmentToolbar
									value={boxItemTextAlign}
									onChange={(value) =>
										setAttributes({
											boxItemTextAlign: value,
										})
									}
									controls={["left", "center", "right"]}
									isCollapsed={false}
								/>
							</BaseControl>
						</PanelBody>

						<PanelBody title={__("Box Style", "responsive-block-editor-addons")}
							initialOpen={false}
						>
							<ResponsiveSpacingControl
								title={"Height"}
								attrNameTemplate="boxHeight%s"
								values={{ desktop: boxHeight, tablet: boxHeightTablet, mobile: boxHeightMobile }}
								setAttributes={setAttributes}
								{...this.props}
							/>
							<ResponsiveSpacingControl
								title={"Width"}
								attrNameTemplate="boxWidth%s"
								values={{ desktop: boxWidth, tablet: boxWidthTablet, mobile: boxWidthMobile }}
								setAttributes={setAttributes}
								{...this.props}
							/>
							<ResponsiveSpacingControl
								title={"Margin"}
								attrNameTemplate="boxMargin%s"
								values={{ desktop: boxMargin, tablet: boxMarginTablet, mobile: boxMarginMobile }}
								setAttributes={setAttributes}
								{...this.props}
							/>
							<PanelBody title={__("Padding", "responsive-block-editor-addons")}
								initialOpen={false}
							>
								<ResponsivePaddingControl
									attrNameTemplate="box%s"
									values={{
										desktopTop: boxTopPadding,
										desktopBottom: boxBottomPadding,
										desktopLeft: boxLeftPadding,
										desktopRight: boxRightPadding,

										tabletTop: boxTopPaddingTablet,
										tabletBottom: boxBottomPaddingTablet,
										tabletLeft: boxLeftPaddingTablet,
										tabletRight: boxRightPaddingTablet,

										mobileTop: boxTopPaddingMobile,
										mobileBottom: boxBottomPaddingMobile,
										mobileLeft: boxLeftPaddingMobile,
										mobileRight: boxRightPaddingMobile,
									}}
									setAttributes={setAttributes}
									{...this.props}
								/>
							</PanelBody>

							<PanelBody
								title={__("Border", "responsive-block-editor-addons")}
								initialOpen={false}
							>
								<SelectControl
									label={__("Border Style", "responsive-block-editor-addons")}
									value={boxBorderStyle}
									onChange={(value) => setAttributes({ boxBorderStyle: value })}
									options={[
										{
											value: "none",
											label: __("None", "responsive-block-editor-addons"),
										},
										{
											value: "solid",
											label: __("Solid", "responsive-block-editor-addons"),
										},
										{
											value: "dotted",
											label: __("Dotted", "responsive-block-editor-addons"),
										},
										{
											value: "dashed",
											label: __("Dashed", "responsive-block-editor-addons"),
										},
										{
											value: "double",
											label: __("Double", "responsive-block-editor-addons"),
										},
										{
											value: "groove",
											label: __("Groove", "responsive-block-editor-addons"),
										},
										{
											value: "inset",
											label: __("Inset", "responsive-block-editor-addons"),
										},
										{
											value: "outset",
											label: __("Outset", "responsive-block-editor-addons"),
										},
										{
											value: "ridge",
											label: __("Ridge", "responsive-block-editor-addons"),
										},
									]}
								/>
								{"none" != boxBorderStyle && (
									<Fragment>
										<RangeControl
											label={__("Border Width", "responsive-block-editor-addons")}
											value={boxBorderSize}
											onChange={(value) =>
												setAttributes({
													boxBorderSize: value !== undefined ? value : 1,
												})
											}
											min={0}
											max={150}
											allowReset
										/>
										<RangeControl
											label={__("Border Radius Top Left", "responsive-block-editor-addons")}
											value={borderRadiusTopLeft}
											onChange={(value) => {
												setAttributes({ borderRadiusTopLeft: value });
											}}
											min={0}
											max={100}
										/>
										<RangeControl
											label={__("Border Radius Top Right", "responsive-block-editor-addons")}
											value={borderRadiusTopRight}
											onChange={(value) => {
												setAttributes({ borderRadiusTopRight: value });
											}}
											min={0}
											max={100}
										/>
										<RangeControl
											label={__("Border Radius Bottom Right", "responsive-block-editor-addons")}
											value={borderRadiusBottomRight}
											onChange={(value) => {
												setAttributes({ borderRadiusBottomRight: value });
											}}
											min={0}
											max={100}
										/>
										<RangeControl
											label={__("Border Radius Bottom Left", "responsive-block-editor-addons")}
											value={borderRadiusBottomLeft}
											onChange={(value) => {
												setAttributes({ borderRadiusBottomLeft: value });
											}}
											min={0}
											max={100}
										/>
									</Fragment>
								)}
								{"none" != boxBorderStyle && (
									<Fragment>
										<p className="responsive-block-editor-addons-setting-label">
											{__("Color", "responsive-block-editor-addons")}
											<span className="components-base-control__label">
												<span
													className="component-color-indicator"
													style={{ backgroundColor: boxBorderColor }}
												></span>
											</span>
										</p>
										<ColorPalette
											value={boxBorderColor}
											onChange={(colorValue) =>
												setAttributes({ boxBorderColor: colorValue })
											}
											allowReset
										/>
									</Fragment>
								)}
							</PanelBody>
							<PanelBody title={__("Box Shadow", "responsive-block-editor-addons")}
								initialOpen={false}
							>
								<BoxShadowControl
									setAttributes={setAttributes}
									label={__("Box Shadow")}
									boxShadowColor={{ value: boxShadowColor, label: __("Color") }}
									boxShadowHOffset={{
										value: boxShadowHOffset,
										label: __("Horizontal"),
									}}
									boxShadowVOffset={{
										value: boxShadowVOffset,
										label: __("Vertical"),
									}}
									boxShadowBlur={{ value: boxShadowBlur, label: __("Blur") }}
									boxShadowSpread={{ value: boxShadowSpread, label: __("Spread") }}
									boxShadowPosition={{
										value: boxShadowPosition,
										label: __("Position"),
									}}
								/>
							</PanelBody>
							<p className="responsive-block-editor-addons-setting-label">
								{__("Background Color", "responsive-block-editor-addons")}
								<span className="components-base-control__label">
									<span
										className="component-color-indicator"
										style={{ backgroundColor: boxBackgroundColor }}
									></span>
								</span>
							</p>
							<ColorPalette
								value={boxBackgroundColor}
								onChange={(colorValue) =>
									setAttributes({ boxBackgroundColor: colorValue })
								}
								allowReset
							/>
						</PanelBody>
						<PanelBody title={__("Container Spacing", "responsive-block-editor-addons")}
							initialOpen={false}
						>
							<PanelBody title={__("Padding", "responsive-block-editor-addons")}
								initialOpen={false}
							>
								<ResponsivePaddingControl
									attrNameTemplate="container%s"
									values={{
										desktopTop: containerTopPadding,
										desktopBottom: containerBottomPadding,
										desktopLeft: containerLeftPadding,
										desktopRight: containerRightPadding,

										tabletTop: containerTopPaddingTablet,
										tabletBottom: containerBottomPaddingTablet,
										tabletLeft: containerLeftPaddingTablet,
										tabletRight: containerRightPaddingTablet,

										mobileTop: containerTopPaddingMobile,
										mobileBottom: containerBottomPaddingMobile,
										mobileLeft: containerLeftPaddingMobile,
										mobileRight: containerRightPaddingMobile,
									}}
									setAttributes={setAttributes}
									{...this.props}
								/>
							</PanelBody>
							<PanelBody title={__("Margin", "responsive-block-editor-addons")}
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
											className: " responsive-tablet-tab  responsive-responsive-tabs",
										},
										{
											name: "mobile",
											title: <Dashicon icon="smartphone" />,
											className: " responsive-mobile-tab  responsive-responsive-tabs",
										},
									]}
								>

									{(tab) => {
										let tabout;

										if ("mobile" === tab.name) {
											tabout = (
												<Fragment>
													<RangeControl
														label={__("Margin Top Mobile", "responsive-block-editor-addons")}
														value={containerMarginTopMobile}
														onChange={(value) => setAttributes({ containerMarginTopMobile: value })}
														min={0}
														max={100}
													/>
													<RangeControl
														label={__("Margin Right Mobile", "responsive-block-editor-addons")}
														value={containerMarginRightMobile}
														onChange={(value) => setAttributes({ containerMarginRightMobile: value })}
														min={0}
														max={100}
													/>
													<RangeControl
														label={__("Margin Bottom Mobile", "responsive-block-editor-addons")}
														value={containerMarginBottomMobile}
														onChange={(value) => setAttributes({ containerMarginBottomMobile: value })}
														min={0}
														max={100}
													/>
													<RangeControl
														label={__("Margin Left Mobile", "responsive-block-editor-addons")}
														value={containerMarginLeftMobile}
														onChange={(value) => setAttributes({ containerMarginLeftMobile: value })}
														min={0}
														max={100}
													/>
												</Fragment>
											);
										} else if ("tablet" === tab.name) {
											tabout = (
												<Fragment>
													<RangeControl
														label={__("Margin Top Tablet", "responsive-block-editor-addons")}
														value={containerMarginTopTablet}
														onChange={(value) => setAttributes({ containerMarginTopTablet: value })}
														min={0}
														max={100}
													/>
													<RangeControl
														label={__("Margin Right Tablet", "responsive-block-editor-addons")}
														value={containerMarginRightTablet}
														onChange={(value) => setAttributes({ containerMarginRightTablet: value })}
														min={0}
														max={100}
													/>
													<RangeControl
														label={__("Margin Bottom Tablet", "responsive-block-editor-addons")}
														value={containerMarginBottomTablet}
														onChange={(value) => setAttributes({ containerMarginBottomTablet: value })}
														min={0}
														max={100}
													/>
													<RangeControl
														label={__("Margin Left Tablet", "responsive-block-editor-addons")}
														value={containerMarginLeftTablet}
														onChange={(value) => setAttributes({ containerMarginLeftTablet: value })}
														min={0}
														max={100}
													/>
												</Fragment>
											);
										} else {
											tabout = (
												<Fragment>
													<RangeControl
														label={__("Margin Top", "responsive-block-editor-addons")}
														value={containerMarginTop}
														onChange={(value) => setAttributes({ containerMarginTop: value })}
														min={0}
														max={100}
													/>
													<RangeControl
														label={__("Margin Right", "responsive-block-editor-addons")}
														value={containerMarginRight}
														onChange={(value) => setAttributes({ containerMarginRight: value })}
														min={0}
														max={100}
													/>
													<RangeControl
														label={__("Margin Bottom", "responsive-block-editor-addons")}
														value={containerMarginBottom}
														onChange={(value) => setAttributes({ containerMarginBottom: value })}
														min={0}
														max={100}
													/>
													<RangeControl
														label={__("Margin Left", "responsive-block-editor-addons")}
														value={containerMarginLeft}
														onChange={(value) => setAttributes({ containerMarginLeft: value })}
														min={0}
														max={100}
													/>
												</Fragment>
											);
										}

										return <div>{tabout}</div>;
									}}
								</TabPanel>
							</PanelBody>
						</PanelBody>

						<PanelBody title={__("Typography", "responsive-block-editor-addons")}
							initialOpen={false}
						>
							<PanelBody
								title={__("Digit Typography", "responsive-block-editor-addons")}
								initialOpen={false}
							>
								<SelectControl
									label={__("Font Family", "responsive-block-editor-addons")}
									options={fontOptions}
									value={digitFontFamily}
									onChange={(value) => {
										setAttributes({
											digitFontFamily: value,
										}),
											loadGoogleFont(value);
									}}
								/>
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
											className: " responsive-tablet-tab  responsive-responsive-tabs",
										},
										{
											name: "mobile",
											title: <Dashicon icon="smartphone" />,
											className: " responsive-mobile-tab  responsive-responsive-tabs",
										},
									]}
								>

									{(tab) => {
										let tabout;

										if ("mobile" === tab.name) {
											tabout = (
												<Fragment>
													<RangeControl
														label={__("Font Size Mobile", "responsive-block-editor-addons")}
														value={digitFontSizeMobile}
														onChange={(value) =>
															setAttributes({ digitFontSizeMobile: value })
														}
														min={0}
														max={150}
														step={1}
													/>
												</Fragment>
											);
										} else if ("tablet" === tab.name) {
											tabout = (
												<Fragment>
													<RangeControl
														label={__("Font Size Tablet", "responsive-block-editor-addons")}
														value={digitFontSizeTablet}
														onChange={(value) =>
															setAttributes({ digitFontSizeTablet: value })
														}
														min={0}
														max={150}
														step={1}
													/>
												</Fragment>
											);
										} else {
											tabout = (
												<Fragment>
													<RangeControl
														label={__("Font Size", "responsive-block-editor-addons")}
														value={digitFontSize}
														onChange={(value) =>
															setAttributes({ digitFontSize: value })
														}
														min={0}
														max={150}
														step={1}
													/>
												</Fragment>
											);
										}

										return <div>{tabout}</div>;
									}}
								</TabPanel>
								<SelectControl
									label={__("Font Weight", "responsive-block-editor-addons")}
									options={fontWeightOptions}
									value={digitFontWeight}
									onChange={(value) =>
										setAttributes({ digitFontWeight: value })
									}
								/>
								<RangeControl
									label={__("Line Height", "responsive-block-editor-addons")}
									value={digitLineHeight}
									onChange={(value) =>
										setAttributes({ digitLineHeight: value })
									}
									min={0}
									max={100}
									step={1}
								/>
								<RangeControl
									label={__("Letter Spacing", "responsive-block-editor-addons")}
									value={digitLetterSpacing}
									onChange={(value) =>
										setAttributes({ digitLetterSpacing: value })
									}
									min={1}
									max={10}
									step={0.1}
								/>
								<p className="responsive-block-editor-addons-setting-label">
									{__("Digit Color", "responsive-block-editor-addons")}
									<span className="components-base-control__label">
										<span
											className="component-color-indicator"
											style={{ backgroundColor: digitColor }}
										></span>
									</span>
								</p>
								<ColorPalette
									value={digitColor}
									onChange={(colorValue) =>
										setAttributes({ digitColor: colorValue })
									}
									allowReset
								/>
							</PanelBody>
							<PanelBody
								title={__("Label Typography", "responsive-block-editor-addons")}
								initialOpen={false}
							>
								<SelectControl
									label={__("Font Family", "responsive-block-editor-addons")}
									options={fontOptions}
									value={labelFontFamily}
									onChange={(value) => {
										setAttributes({
											labelFontFamily: value,
										}),
											loadGoogleFont(value);
									}}
								/>
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
											className: " responsive-tablet-tab  responsive-responsive-tabs",
										},
										{
											name: "mobile",
											title: <Dashicon icon="smartphone" />,
											className: " responsive-mobile-tab  responsive-responsive-tabs",
										},
									]}
								>

									{(tab) => {
										let tabout;

										if ("mobile" === tab.name) {
											tabout = (
												<Fragment>
													<RangeControl
														label={__("Font Size Mobile", "responsive-block-editor-addons")}
														value={labelFontSizeMobile}
														onChange={(value) =>
															setAttributes({ labelFontSizeMobile: value })
														}
														min={0}
														max={150}
														step={1}
													/>
												</Fragment>
											);
										} else if ("tablet" === tab.name) {
											tabout = (
												<Fragment>
													<RangeControl
														label={__("Font Size Tablet", "responsive-block-editor-addons")}
														value={labelFontSizeTablet}
														onChange={(value) =>
															setAttributes({ labelFontSizeTablet: value })
														}
														min={0}
														max={150}
														step={1}
													/>
												</Fragment>
											);
										} else {
											tabout = (
												<Fragment>
													<RangeControl
														label={__("Font Size", "responsive-block-editor-addons")}
														value={labelFontSize}
														onChange={(value) =>
															setAttributes({ labelFontSize: value })
														}
														min={0}
														max={150}
														step={1}
													/>
												</Fragment>
											);
										}

										return <div>{tabout}</div>;
									}}
								</TabPanel>
								<SelectControl
									label={__("Font Weight", "responsive-block-editor-addons")}
									options={fontWeightOptions}
									value={labelFontWeight}
									onChange={(value) =>
										setAttributes({ labelFontWeight: value })
									}
								/>
								<RangeControl
									label={__("Line Height", "responsive-block-editor-addons")}
									value={labelLineHeight}
									onChange={(value) =>
										setAttributes({ labelLineHeight: value })
									}
									min={0}
									max={100}
									step={1}
								/>
								<RangeControl
									label={__("Padding Left", "responsive-block-editor-addons")}
									value={labelLeftPadding}
									onChange={(value) => setAttributes({ labelLeftPadding: value })}
									min={0}
									max={100}
								/>
								<RangeControl
									label={__("Letter Spacing", "responsive-block-editor-addons")}
									value={labelLetterSpacing}
									onChange={(value) =>
										setAttributes({ labelLetterSpacing: value })
									}
									min={1}
									max={10}
									step={0.1}
								/>
								<p className="responsive-block-editor-addons-setting-label">
									{__("Label Color", "responsive-block-editor-addons")}
									<span className="components-base-control__label">
										<span
											className="component-color-indicator"
											style={{ backgroundColor: labelColor }}
										></span>
									</span>
								</p>
								<ColorPalette
									value={labelColor}
									onChange={(colorValue) =>
										setAttributes({ labelColor: colorValue })
									}
									allowReset
								/>

							</PanelBody>
						</PanelBody>
					</InspectorTab>
					<InspectorTab key={'advance'}>

					</InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		);
	};
}