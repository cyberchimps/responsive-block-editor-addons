/**
 * Inspector Controls
 */
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import stackOnIcons from "../../../utils/components/rbea-tab-radio-control/rbea-stack-on-icons";
import RbeaSupportControl from "../../../utils/components/rbea-support-control";
import RbeaExtensions from "../../../extensions/RbeaExtensions";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";

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
} = wp.blockEditor;

// Import Inspector components
const {
	PanelBody,
	RangeControl,
	SelectControl,
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
				buttonAlignment,
				buttonAlignmentTablet,
				buttonAlignmentMobile,
				buttons,
				gap,
				stack,
				hideWidget,
				hideWidgetTablet,
				hideWidgetMobile,
				blockTopMargin,
				blockBottomMargin,
				blockLeftMargin,
				blockRightMargin,
				blockTopMarginTablet,
				blockBottomMarginTablet,
				blockLeftMarginTablet,
				blockRightMarginTablet,
				blockTopMarginMobile,
				blockBottomMarginMobile,
				blockLeftMarginMobile,
				blockRightMarginMobile,
				blockTopPadding,
				blockTopPaddingMobile,
				blockTopPaddingTablet,
				blockBottomPadding,
				blockBottomPaddingMobile,
				blockBottomPaddingTablet,
				blockLeftPadding,
				blockLeftPaddingMobile,
				blockLeftPaddingTablet,
				blockRightPadding,
				blockRightPaddingMobile,
				blockRightPaddingTablet,
				blockIsMarginControlConnected,
				blockIsPaddingControlConnected,
				z_index,
				z_indexTablet,
				z_indexMobile,
				buttonSize,
				buttonSizeTablet,
				buttonSizeMobile,
			},
			setAttributes,
		} = this.props;

		const blockMarginResetValues = {
			marginTop: 0,
			marginRight: 0,
			marginBottom: 0,
			marginLeft: 0,
			marginTabletTop: 0,
			marginTabletRight: 0,
			marginTabletBottom: 0,
			marginTabletLeft: 0,
			marginMobileTop: 0,
			marginMobileRight: 0,
			marginMobileBottom: 0,
			marginMobileLeft: 0,
		}
		const blockPaddingResetValues = {
			paddingTop: 0,
			paddingRight: 0,
			paddingBottom: 0,
			paddingLeft: 0,
			paddingTabletTop: 0,
			paddingTabletRight: 0,
			paddingTabletBottom: 0,
			paddingTabletLeft: 0,
			paddingMobileTop: 0,
			paddingMobileRight: 0,
			paddingMobileBottom: 0,
			paddingMobileLeft: 0,
		}
		// Button Size configurations
		const buttonSizeConfigs = {
			Small: {
				blockTopPadding: 5,
				blockRightPadding: 10,
				blockBottomPadding: 5,
				blockLeftPadding: 10,
			},
			Medium: {
				blockTopPadding: 12,
				blockRightPadding: 24,
				blockBottomPadding: 12,
				blockLeftPadding: 24,
			},
			Large: {
				blockTopPadding: 20,
				blockRightPadding: 30,
				blockBottomPadding: 20,
				blockLeftPadding: 30,
			},
			"Extra Large": {
				blockTopPadding: 30,
				blockRightPadding: 65,
				blockBottomPadding: 30,
				blockLeftPadding: 65,
			},
			"Extra Extra Large": {
				blockTopPadding: 40,
				blockRightPadding: 80,
				blockBottomPadding: 40,
				blockLeftPadding: 80,
			},
		};

		// Helper function to apply button size attributes to child blocks
		const applyButtonSizeToChildren = (sizeName, device = 'desktop') => {
			const config = buttonSizeConfigs[sizeName];
			if (!config) return;

			// Get all child blocks using wp.data
			const { clientId } = this.props;
			const { getBlocks } = wp.data.select('core/block-editor');
			const { updateBlockAttributes } = wp.data.dispatch('core/block-editor');

			// Get child blocks
			const childBlocks = getBlocks(clientId);

			// Update each child block's attributes based on device
			childBlocks.forEach(childBlock => {
				if (childBlock.name === 'responsive-block-editor-addons/buttons-child') {
					const attributesToUpdate = {
						buttonSize: sizeName,
					};

					// Apply padding based on device
					if (device === 'desktop') {
						attributesToUpdate.blockTopPadding = config.blockTopPadding;
						attributesToUpdate.blockRightPadding = config.blockRightPadding;
						attributesToUpdate.blockBottomPadding = config.blockBottomPadding;
						attributesToUpdate.blockLeftPadding = config.blockLeftPadding;
					} else if (device === 'tablet') {
						attributesToUpdate.blockTopPaddingTablet = config.blockTopPadding;
						attributesToUpdate.blockRightPaddingTablet = config.blockRightPadding;
						attributesToUpdate.blockBottomPaddingTablet = config.blockBottomPadding;
						attributesToUpdate.blockLeftPaddingTablet = config.blockLeftPadding;
					} else if (device === 'mobile') {
						attributesToUpdate.blockTopPaddingMobile = config.blockTopPadding;
						attributesToUpdate.blockRightPaddingMobile = config.blockRightPadding;
						attributesToUpdate.blockBottomPaddingMobile = config.blockBottomPadding;
						attributesToUpdate.blockLeftPaddingMobile = config.blockLeftPadding;
					}

					updateBlockAttributes(childBlock.clientId, attributesToUpdate);
				}
			});
		};

		const sizeOptions = [
			{ label: __("S", "responsive-block-editor-addons"), value: 'Small' },
			{ label: __("M", "responsive-block-editor-addons"), value: 'Medium' },
			{ label: __("L", "responsive-block-editor-addons"), value: 'Large' },
			{ label: __("XL", "responsive-block-editor-addons"), value: 'Extra Large' },
			{ label: __("XXL", "responsive-block-editor-addons"), value: 'Extra Extra Large' },
		];
		return (
			<InspectorControls key="inspector">
				<InspectorTabs>
					<InspectorTab key={"content"}>
						<PanelBody
							title={__("General", "responsive-block-editor-addons")}
							initialOpen={true}
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
												<BaseControl
													__nextHasNoMarginBottom
												>
													<p>
														{__(
															"Alignment Mobile",
															"responsive-block-editor-addons"
														)}
													</p>
													<div className="responsive-block-editor-addons-alignment-mobile">
														<AlignmentToolbar
															value={buttonAlignmentMobile}
															onChange={(value) =>
																setAttributes({
																	buttonAlignmentMobile: value,
																})
															}
															controls={["left", "center", "right", "full"]}
															isCollapsed={false}
														/>
													</div>
												</BaseControl>
											</Fragment>
										);
									} else if ("tablet" === tab.name) {
										tabout = (
											<Fragment>
												<BaseControl
													__nextHasNoMarginBottom
												>
													<p>
														{__(
															"Alignment Tablet",
															"responsive-block-editor-addons"
														)}
													</p>
													<div className="responsive-block-editor-addons-alignment-tablet">
														<AlignmentToolbar
															value={buttonAlignmentTablet}
															onChange={(value) =>
																setAttributes({
																	buttonAlignmentTablet: value,
																})
															}
															controls={["left", "center", "right", "full"]}
															isCollapsed={false}
														/>
													</div>
												</BaseControl>
											</Fragment>
										);
									} else {
										tabout = (
											<Fragment>
												<BaseControl
													__nextHasNoMarginBottom
												>
													<p>{__("Alignment", "responsive-block-editor-addons")}</p>
													<div className="responsive-block-editor-addons-alignment-tablet">
														<AlignmentToolbar
															value={buttonAlignment}
															onChange={(value) =>
																setAttributes({
																	buttonAlignment: value,
																})
															}
															controls={["left", "center", "right", "full"]}
															isCollapsed={false}
														/>
													</div>
												</BaseControl>
											</Fragment>
										);
									}

									return <div>{tabout}</div>;
								}}
							</TabPanel>
							<TabPanel
								className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin rbea-buttons-inspector"
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
												<RbeaTabRadioControl
													label={__("Button Size", "responsive-block-editor-addons")}
													value={buttonSizeMobile}
													onChange={(value) => {
														setAttributes({ buttonSizeMobile: value });
														applyButtonSizeToChildren(value, 'mobile');
													}}
													options={sizeOptions}
													defaultValue={"Default"}
												/>
											</Fragment>
										);
									} else if ("tablet" === tab.name) {
										tabout = (
											<Fragment>
												<RbeaTabRadioControl
													label={__("Button Size", "responsive-block-editor-addons")}
													value={buttonSizeTablet}
													onChange={(value) => {
														setAttributes({ buttonSizeTablet: value });
														applyButtonSizeToChildren(value, 'tablet');
													}}
													options={sizeOptions}
													defaultValue={"Default"}
												/>
											</Fragment>
										);
									} else {
										tabout = (
											<Fragment>
												<RbeaTabRadioControl
													label={__("Button Size", "responsive-block-editor-addons")}
													value={buttonSize}
													onChange={(value) => {
														setAttributes({ buttonSize: value });
														applyButtonSizeToChildren(value, 'desktop');
													}}
													options={sizeOptions}
													defaultValue={"Default"}
												/>
											</Fragment>
										);
									}

									return <div>{tabout}</div>;
								}}
							</TabPanel>
							{/* <SelectControl
								label={__("Button Size", "responsive-block-editor-addons")}
								options={sizeOptions}
								value={buttonSize}
								onChange={(value) => {
									setAttributes({ buttonSize: value });
									applyButtonSizeToChildren(value);
								}}
							/> */}
							<hr className="responsive-block-editor-addons-editor__separator" />
							<RbeaTabRadioControl
								label={__("Stack on", "responsive-block-editor-addons")}
								value={stack}
								options={[
									{ value: "desktop", icon: stackOnIcons.desktop, label: __("Desktop", "responsive-block-editor-addons") },
									{ value: "tablet", icon: stackOnIcons.tablet, label: __("Tablet", "responsive-block-editor-addons") },
									{ value: "mobile", icon: stackOnIcons.mobile, label: __("Mobile", "responsive-block-editor-addons") },
								]}
								onChange={(value) => setAttributes({ stack: value })}
								help={__(
									"Note: Choose breakpoint on which the buttons will stack.", "responsive-block-editor-addons"
								)}
								allowReset={true}
								defaultValue={"none"}
								hasIcon={true}
								optionHasBorder={true}
							/>
						</PanelBody>
					<RbeaSupportControl blockSlug={"buttons"} />

					</InspectorTab>
					<InspectorTab key={"style"}>
						<PanelBody
							title={__("Spacing", "responsive-block-editor-addons")}
							initialOpen={true}
						>
							<ResponsiveNewPaddingControl
								attrNameTemplate="block%s"
								resetValues={blockPaddingResetValues}
								{...this.props}
							/>
							<ResponsiveNewMarginControl
								attrNameTemplate="block%s"
								resetValues={blockMarginResetValues}
								{...this.props}
							/>
						</PanelBody>
						<RbeaSupportControl blockSlug={"buttons"} />

					</InspectorTab>
					<InspectorTab key={"advance"}>

						<RbeaExtensions {...this.props} />

						
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
										<RbeaRangeControl
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
										<RbeaRangeControl
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
										<RbeaRangeControl
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
						<RbeaSupportControl blockSlug={"buttons"} />

            		</InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		);
	}
}
