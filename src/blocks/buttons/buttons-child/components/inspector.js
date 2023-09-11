/**
 * Inspector Controls
 */
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import ResponsiveBlocksIcon from "../../../../ResponsiveBlocksIcon.json";
import renderSVG from "../../../../renderIcon";
import BoxShadowControl from "../../../../utils/components/box-shadow";
import fontOptions from "../../../../utils/googlefonts";
import { loadGoogleFont } from "../../../../utils/font";
import InspectorTab from "../../../../components/InspectorTab";
import InspectorTabs from "../../../../components/InspectorTabs";
import TypographyHelperControl from "../../../../settings-components/TypographySettings";

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
} = wp.blockEditor;

// Import Inspector components
const {
	PanelBody,
	RangeControl,
	SelectControl,
	BaseControl,
	TabPanel,
	ToggleControl,
	Dashicon,
	ButtonGroup,
	Button,
} = wp.components;

let svg_icons = Object.keys(ResponsiveBlocksIcon);

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
				buttonAlignment,
				label,
				link,
				iconsize,
				vPadding,
				vPaddingTablet,
				vPaddingMobile,
				hPadding,
				hPaddingTablet,
				hPaddingMobile,
				vMargin,
				hMargin,
				vMarginTablet,
				hMarginTablet,
				vMarginMobile,
				hMarginMobile,
				borderWidth,
				borderRadius,
				borderStyle,
				borderColor,
				borderHColor,
				color,
				background,
				hColor,
				sizeType,
				sizeMobile,
				sizeTablet,
				lineHeight,
				lineHeightType,
				lineHeightMobile,
				lineHeightTablet,
				target,
				backgroundColor1,
				backgroundColor2,
				colorLocation1,
				colorLocation2,
				gradientDirection,
				backgroundType,
				opacity,
				icon,
				iconPosition,
				buttonLineHeight,
				buttonFontFamily,
				buttonFontSize,
				buttonFontSizeTablet,
				buttonFontSizeMobile,
				buttonFontWeight,
				boxShadowColor,
				boxShadowHOffset,
				boxShadowVOffset,
				boxShadowBlur,
				boxShadowSpread,
				boxShadowPosition,
				hoverEffect,
				icon_color,
				icon_hover_color,
				hbackground,
				iconSpace,
				inheritFromTheme,
			},
			setAttributes,
		} = this.props;

		// Background Type Options
		const backgroundTypeOptions = [
			{ value: "none", label: __("None", "responsive-block-editor-addons") },
			{ value: "color", label: __("Color", "responsive-block-editor-addons") },
			{
				value: "gradient",
				label: __("Gradient", "responsive-block-editor-addons"),
			},
		];

		// Font Weight Options
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

		return (
			<InspectorControls key="inspector">
				<InspectorTabs>
					<InspectorTab key={"content"}>
						<PanelBody
							title={__("Button Settings", "responsive-block-editor-addons")}
							initialOpen={true}
							className="responsive-block-editor-addons__url-panel-body"
						>
							<ToggleControl
								label={__("Inherit from Theme", "responsive-block-editor-addons")}
								checked={inheritFromTheme}
								onChange={(value) =>
									setAttributes({ inheritFromTheme: !inheritFromTheme })
								}
							/>
							<ToggleControl
								label={__("Open link in new tab", "responsive-block-editor-addons")}
								checked={target}
								onChange={() => {
									setAttributes({ target: !target });
								}}
							/>
							<SelectControl
								label={__("Hover Effect", "responsive-block-editor-addons")}
								value={hoverEffect}
								onChange={(value) => setAttributes({ hoverEffect: value })}
								options={[
									{
										value: "",
										label: __("None", "responsive-block-editor-addons"),
									},
									{
										value: "lift",
										label: __("Lift", "responsive-block-editor-addons"),
									},
									{
										value: "scale",
										label: __("Scale", "responsive-block-editor-addons"),
									},
									{
										value: "lift-scale",
										label: __("Lift & Scale", "responsive-block-editor-addons"),
									},
									{
										value: "scale-more",
										label: __("Scale More", "responsive-block-editor-addons"),
									},
									{
										value: "lift-scale-more",
										label: __(
											"Lift & Scale More",
											"responsive-block-editor-addons"
										),
									},
								]}
							/>
						</PanelBody>
					</InspectorTab>
					<InspectorTab key={"style"}>
						{!inheritFromTheme && (
							<Fragment>
								<PanelBody
									title={__("Color Settings", "responsive-block-editor-addons")}
									initialOpen={false}
								>
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
											let btn_color_tab;
											if ("normal" === tabName.name) {
												btn_color_tab = (
													<Fragment>
														<p className="responsive-block-editor-addons-setting-label">
															{__("Text Color", "responsive-block-editor-addons")}
															<span className="components-base-control__label">
																<span
																	className="component-color-indicator"
																	style={{ backgroundColor: color }}
																></span>
															</span>
														</p>
														<ColorPalette
															value={color}
															onChange={(value) =>
																setAttributes({ color: value })
															}
															allowReset
														/>
														<p className="responsive-block-editor-addons-setting-label">
															{__(
																"Border Color",
																"responsive-block-editor-addons"
															)}
															<span className="components-base-control__label">
																<span
																	className="component-color-indicator"
																	style={{ backgroundColor: borderColor }}
																></span>
															</span>
														</p>
														<ColorPalette
															value={borderColor}
															onChange={(value) =>
																setAttributes({ borderColor: value })
															}
															allowReset
														/>
													</Fragment>
												);
											} else {
												btn_color_tab = (
													<Fragment>
														<p className="responsive-block-editor-addons-setting-label">
															{__(
																"Text Hover Color",
																"responsive-block-editor-addons"
															)}
															<span className="components-base-control__label">
																<span
																	className="component-color-indicator"
																	style={{ backgroundColor: hColor }}
																></span>
															</span>
														</p>
														<ColorPalette
															value={hColor}
															onChange={(value) =>
																setAttributes({ hColor: value })
															}
															allowReset
														/>
														<p className="responsive-block-editor-addons-setting-label">
															{__(
																"Border Hover Color",
																"responsive-block-editor-addons"
															)}
															<span className="components-base-control__label">
																<span
																	className="component-color-indicator"
																	style={{ backgroundColor: borderHColor }}
																></span>
															</span>
														</p>
														<ColorPalette
															value={borderHColor}
															onChange={(value) =>
																setAttributes({ borderHColor: value })
															}
															allowReset
														/>
													</Fragment>
												);
											}
											return <div>{btn_color_tab}</div>;
										}}
									</TabPanel>
									<RangeControl
										label={__("Opacity", "responsive-block-editor-addons")}
										value={opacity}
										onChange={(value) => setAttributes({ opacity: value })}
										min={0}
										max={100}
									/>
								</PanelBody>
								<PanelBody
									title={__("Background", "responsive-block-editor-addons")}
									initialOpen={false}
								>
									<SelectControl
										label={__(
											"Background Type",
											"responsive-block-editor-addons"
										)}
										value={backgroundType}
										onChange={(value) => setAttributes({ backgroundType: value })}
										options={backgroundTypeOptions}
									/>
									{"color" == backgroundType && (
										<Fragment>
											<p className="responsive-setting-label">
												{__("Background Color", "responsive-block-editor-addons")}
												<span className="components-base-control__label">
													<span
														className="component-color-indicator"
														style={{ backgroundColor: background }}
													></span>
												</span>
											</p>
											<ColorPalette
												value={background}
												onChange={(colorValue) =>
													setAttributes({ background: colorValue })
												}
												allowReset
											/>
											<p className="responsive-setting-label">
												{__(
													"Background Hover Color",
													"responsive-block-editor-addons"
												)}
												<span className="components-base-control__label">
													<span
														className="component-color-indicator"
														style={{ backgroundColor: hbackground }}
													></span>
												</span>
											</p>
											<ColorPalette
												value={hbackground}
												onChange={(colorValue) =>
													setAttributes({ hbackground: colorValue })
												}
												allowReset
											/>
										</Fragment>
									)}
									{"gradient" == backgroundType && (
										<Fragment>
											<p className="responsive-setting-label">
												{__("Color 1", "responsive-block-editor-addons")}
												<span className="components-base-control__label">
													<span
														className="component-color-indicator"
														style={{ backgroundColor: backgroundColor1 }}
													></span>
												</span>
											</p>
											<ColorPalette
												value={backgroundColor1}
												onChange={(colorValue) =>
													setAttributes({ backgroundColor1: colorValue })
												}
												allowReset
											/>

											<p className="responsive-setting-label">
												{__("Color 2", "responsive-block-editor-addons")}
												<span className="components-base-control__label">
													<span
														className="component-color-indicator"
														style={{ backgroundColor: backgroundColor2 }}
													></span>
												</span>
											</p>
											<ColorPalette
												value={backgroundColor2}
												onChange={(colorValue) =>
													setAttributes({ backgroundColor2: colorValue })
												}
												allowReset
											/>
											<RangeControl
												label={__(
													"Color Location 1",
													"responsive-block-editor-addons"
												)}
												value={colorLocation1}
												min={0}
												max={100}
												onChange={(value) =>
													setAttributes({ colorLocation1: value })
												}
											/>
											<RangeControl
												label={__(
													"Color Location 2",
													"responsive-block-editor-addons"
												)}
												value={colorLocation2}
												min={0}
												max={100}
												onChange={(value) =>
													setAttributes({ colorLocation2: value })
												}
											/>
											<RangeControl
												label={__(
													"Gradient Direction",
													"responsive-block-editor-addons"
												)}
												value={gradientDirection}
												min={0}
												max={100}
												onChange={(value) =>
													setAttributes({ gradientDirection: value })
												}
											/>
										</Fragment>
									)}
								</PanelBody>
								<PanelBody
									title={__("Border", "responsive-block-editor-addons")}
									initialOpen={false}
								>
									<SelectControl
										label={__("Style", "responsive-block-editor-addons")}
										value={borderStyle}
										options={[
											{ value: "none", label: __("None", "responsive-block-editor-addons") },
											{ value: "solid", label: __("Solid", "responsive-block-editor-addons") },
											{ value: "dotted", label: __("Dotted", "responsive-block-editor-addons") },
											{ value: "dashed", label: __("Dashed", "responsive-block-editor-addons") },
											{ value: "double", label: __("Double", "responsive-block-editor-addons") },
										]}
										onChange={(value) => {
											setAttributes({ borderStyle: value });
										}}
									/>
									{borderStyle != "none" && (
										<RangeControl
											label={__("Thickness", "responsive-block-editor-addons")}
											value={borderWidth}
											onChange={(value) => {
												setAttributes({ borderWidth: value });
											}}
											min={0}
											max={20}
										/>
									)}
									<RangeControl
										label={__(
											"Rounded Corners",
											"responsive-block-editor-addons"
										)}
										value={borderRadius}
										onChange={(value) => {
											setAttributes({ borderRadius: value });
										}}
										min={0}
										max={50}
									/>
								</PanelBody>
							</Fragment>
						)}
						<PanelBody
							title={__("Spacing", "responsive-block-editor-addons")}
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
													label={__(
														"Vertical Padding Mobile",
														"responsive-block-editor-addons"
													)}
													value={vPaddingMobile}
													onChange={(value) => {
														setAttributes({ vPaddingMobile: value });
													}}
													min={0}
													max={100}
												/>
											</Fragment>
										);
									} else if ("tablet" === tab.name) {
										tabout = (
											<Fragment>
												<RangeControl
													label={__(
														"Vertical Padding Tablet",
														"responsive-block-editor-addons"
													)}
													value={vPaddingTablet}
													onChange={(value) => {
														setAttributes({ vPaddingTablet: value });
													}}
													min={0}
													max={100}
												/>
											</Fragment>
										);
									} else {
										tabout = (
											<Fragment>
												<RangeControl
													label={__(
														"Vertical Padding",
														"responsive-block-editor-addons"
													)}
													value={vPadding}
													onChange={(value) => {
														setAttributes({ vPadding: value });
													}}
													min={0}
													max={100}
												/>
											</Fragment>
										);
									}

									return <div>{tabout}</div>;
								}}
							</TabPanel>
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
													label={__(
														"Horizontal Padding Mobile",
														"responsive-block-editor-addons"
													)}
													value={hPaddingMobile}
													onChange={(value) => {
														setAttributes({ hPaddingMobile: value });
													}}
													min={0}
													max={100}
												/>
											</Fragment>
										);
									} else if ("tablet" === tab.name) {
										tabout = (
											<Fragment>
												<RangeControl
													label={__(
														"Horizontal Padding Tablet",
														"responsive-block-editor-addons"
													)}
													value={hPaddingTablet}
													onChange={(value) => {
														setAttributes({ hPaddingTablet: value });
													}}
													min={0}
													max={100}
												/>
											</Fragment>
										);
									} else {
										tabout = (
											<Fragment>
												<RangeControl
													label={__(
														"Horizontal Padding",
														"responsive-block-editor-addons"
													)}
													value={hPadding}
													onChange={(value) => {
														setAttributes({ hPadding: value });
													}}
													min={0}
													max={100}
												/>
											</Fragment>
										);
									}

									return <div>{tabout}</div>;
								}}
							</TabPanel>
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
													label={__(
														"Vertical Margin Mobile",
														"responsive-block-editor-addons"
													)}
													min={0}
													max={200}
													value={vMarginMobile}
													onChange={(value) =>
														setAttributes({
															vMarginMobile: value,
														})
													}
												/>
											</Fragment>
										);
									} else if ("tablet" === tab.name) {
										tabout = (
											<Fragment>
												<RangeControl
													label={__(
														"Vertical Margin Tablet",
														"responsive-block-editor-addons"
													)}
													min={0}
													max={200}
													value={vMarginTablet}
													onChange={(value) =>
														setAttributes({
															vMarginTablet: value,
														})
													}
												/>
											</Fragment>
										);
									} else {
										tabout = (
											<Fragment>
												<RangeControl
													label={__(
														"Vertical Margin",
														"responsive-block-editor-addons"
													)}
													min={0}
													max={200}
													value={vMargin}
													onChange={(value) =>
														setAttributes({
															vMargin: value,
														})
													}
												/>
											</Fragment>
										);
									}

									return <div>{tabout}</div>;
								}}
							</TabPanel>
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
													label={__(
														"Horizontal Margin Mobile",
														"responsive-block-editor-addons"
													)}
													min={0}
													max={200}
													value={hMarginMobile}
													onChange={(value) =>
														setAttributes({
															hMarginMobile: value,
														})
													}
												/>
											</Fragment>
										);
									} else if ("tablet" === tab.name) {
										tabout = (
											<Fragment>
												<RangeControl
													label={__(
														"Horizontal Margin Tablet",
														"responsive-block-editor-addons"
													)}
													min={0}
													max={200}
													value={hMarginTablet}
													onChange={(value) =>
														setAttributes({
															hMarginTablet: value,
														})
													}
												/>
											</Fragment>
										);
									} else {
										tabout = (
											<Fragment>
												<RangeControl
													label={__(
														"Horizontal Margin",
														"responsive-block-editor-addons"
													)}
													min={0}
													max={200}
													value={hMargin}
													onChange={(value) =>
														setAttributes({
															hMargin: value,
														})
													}
												/>
											</Fragment>
										);
									}

									return <div>{tabout}</div>;
								}}
							</TabPanel>
						</PanelBody>
						<PanelBody title={__("Icon Settings", "responsive-block-editor-addons")} initialOpen={false}>
							<Fragment>
								<p className="components-base-control__label">{__("Icon", "responsive-block-editor-addons")}</p>
								<FontIconPicker
									icons={svg_icons}
									renderFunc={renderSVG}
									theme="default"
									value={icon}
									onChange={(value) => setAttributes({ icon: value })}
									isMulti={false}
									noSelectedPlaceholder={__("Select Icon", "responsive-block-editor-addons")}
								/>
								<SelectControl
									label={__("Icon Position", "responsive-block-editor-addons")}
									value={iconPosition}
									onChange={(value) => setAttributes({ iconPosition: value })}
									options={[
										{ value: "before", label: __("Before Text", "responsive-block-editor-addons") },
										{ value: "after", label: __("After Text", "responsive-block-editor-addons") },
									]}
								/>
								<RangeControl
									label={__("Icon Size", "responsive-block-editor-addons")}
									value={iconsize}
									onChange={(value) =>
										setAttributes({ iconsize: value !== undefined ? value : 16 })
									}
									min={5}
									max={100}
									allowReset
								/>
								<RangeControl
									label={__("Icon Spacing", "responsive-block-editor-addons")}
									value={iconSpace}
									onChange={(value) =>
										setAttributes({ iconSpace: value !== undefined ? value : 8 })
									}
									min={0}
									max={50}
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
							</Fragment>
						</PanelBody>
						{!inheritFromTheme && (
							<Fragment>
								<TypographyHelperControl
									title={__("Button Typography", "responsive-block-editor-addons")}
									attrNameTemplate="button%s"
									values = {{
										family: buttonFontFamily,
										size: buttonFontSize,
										sizeMobile: buttonFontSizeMobile,
										sizeTablet: buttonFontSizeTablet,
										weight: buttonFontWeight,
										height: buttonLineHeight,
									}}
									showLetterSpacing = { false }
									showTextTransform = { false }
									setAttributes={ setAttributes }
									{...this.props}
								/>
								<PanelBody
									title={__("Box Shadow", "responsive-block-editor-addons")}
									initialOpen={false}
								>
									<BoxShadowControl
										setAttributes={setAttributes}
										label={__("Box Shadow", "responsive-block-editor-addons")}
										boxShadowColor={{ value: boxShadowColor, label: __("Color", "responsive-block-editor-addons") }}
										boxShadowHOffset={{
											value: boxShadowHOffset,
											label: __("Horizontal", "responsive-block-editor-addons"),
										}}
										boxShadowVOffset={{
											value: boxShadowVOffset,
											label: __("Vertical", "responsive-block-editor-addons"),
										}}
										boxShadowBlur={{ value: boxShadowBlur, label: __("Blur", "responsive-block-editor-addons") }}
										boxShadowSpread={{
											value: boxShadowSpread,
											label: __("Spread", "responsive-block-editor-addons"),
										}}
										boxShadowPosition={{
											value: boxShadowPosition,
											label: __("Position", "responsive-block-editor-addons"),
										}}
									/>
								</PanelBody>
							</Fragment>
						)}
					</InspectorTab>
					<InspectorTab key={"advance"}>
					</InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		);
	}
}
