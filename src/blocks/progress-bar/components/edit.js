/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import { loadGoogleFont } from "../../../utils/font";
import EditorStyles from "./editor-styles";
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText, AlignmentToolbar, BlockControls } = wp.blockEditor;
export default class Edit extends Component {
	constructor() {
		super(...arguments);
	}
	componentDidUpdate(prevProps, prevState) {
		var element = document.getElementById(
			"responsive-block-editor-addons-progress-bar-style-" +
			this.props.clientId
		);

		if (null !== element && undefined !== element) {
			element.innerHTML = EditorStyles(this.props);
		}
	}

	componentDidMount() {
		// Assigning block_id in the attribute.
		this.props.setAttributes({ block_id: this.props.clientId });

		this.props.setAttributes({ classMigrate: true });

		// Pushing Style tag for this block css.
		const $style = document.createElement("style");
		$style.setAttribute(
			"id",
			"responsive-block-editor-addons-progress-bar-style-" +
			this.props.clientId
		);
		document.head.appendChild($style);
	}
	render() {
		// Setup the attributes
		const {
			attributes: {
				block_id,
				progressBarStyle,
				horizontalProgressBarStyle,
				circularProgressBarStyle,
				progressBarTopTitle,
				progressBarTopTitleEnable,
				progressBarTopValueEnable,
				progressBarInnerTitle,
				progressBarInnerTitleEnable,
				progressBarInnerValueEnable,
				progressBarBottomTitle,
				progressBarValue,
				progressBarBottomTitleEnable,
				progressBarBottomValueEnable,
				circularProgressBarBottomTitle,
				circularProgressBarTopTitle,
				circularProgressBarValueEnable,
				circularProgressBarTopTitleEnable,
				circularProgressBarTopValueEnable,
				circularProgressBarBottomTitleEnable,
				circularProgressBarBottomValueEnable,
				semiCircularProgressBarValueEnable,
				semiCircularProgressBarTopTitle,
				semiCircularProgressBarBottomTitle,
				semiCircularProgressBarTopTitleEnable,
				semiCircularProgressBarBottomTitleEnable,
				semiCircularProgressBarTopValueEnable,
				semiCircularProgressBarBottomValueEnable,
				progressBarColorType,
				circularProgressBarSize,
				topTitleValueFontFamily,
				innerTitleValueFontFamily,
				bottomTitleValueFontFamily,
				circularTopTitleValueFontFamily,
				circularInnerValueFontFamily,
				circularBottomTitleValueFontFamily,
				semiCircularTopTitleValueFontFamily,
				semiCircularInnerValueFontFamily,
				semiCircularBottomTitleValueFontFamily,
			},
			setAttributes,
		} = this.props;

		let animationClassSelected = "";
		if (horizontalProgressBarStyle === "striped") {
			animationClassSelected = "responsive-striped-horizontal-progress-bar-inner-span";
		} else if (horizontalProgressBarStyle === "animatedstriped") {
			animationClassSelected = "responsive-striped-horizontal-progress-bar-inner-span stripe-movement-effect";
		} else {
			animationClassSelected = "responsive-horizontal-progress-bar-inner-span"
		}

		let progressBarColorTypeChosen = "";
		switch (progressBarColorType) {
			case "default":
				progressBarColorTypeChosen = "";
				break;
			case "info":
				progressBarColorTypeChosen = "info-type";
				break;
			case "success":
				progressBarColorTypeChosen = "success-type";
				break;
			case "warning":
				progressBarColorTypeChosen = "warning-type";
				break;
			case "danger":
				progressBarColorTypeChosen = "danger-type";
				break;
			default:
				progressBarColorTypeChosen = "";
				break;
		}

		let circleRadiusVal = 0;
		let circleCxVal = 0;
		let circleCyVal = 0;
		if (circularProgressBarSize) {
			circleRadiusVal = (circularProgressBarSize / 2) - 10;
			circleCxVal = circularProgressBarSize / 2;
			circleCyVal = circularProgressBarSize / 2;
		}

		let circleStrokeVal = (circleRadiusVal * 6.27) + 3;
		let valToPassToCss = { "--circlestrokeval": circleStrokeVal };

		return [
			<style id={`responsive-block-editor-addons-progress-bar-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
			<BlockControls key="controls">
			</BlockControls>,
			// Show the block controls on focus
			<Inspector key="inspector" {...{ setAttributes, ...this.props }} />,
			<div key={`progress-bar-${block_id}`} className={classnames(
				this.props.className,
				"responsive-block-editor-addons-block-progress-bar",
				`block-${block_id}`,
				progressBarColorTypeChosen
			)}
			>
				{topTitleValueFontFamily && loadGoogleFont(topTitleValueFontFamily)}
				{innerTitleValueFontFamily && loadGoogleFont(innerTitleValueFontFamily)}
				{bottomTitleValueFontFamily && loadGoogleFont(bottomTitleValueFontFamily)}
				{circularTopTitleValueFontFamily && loadGoogleFont(circularTopTitleValueFontFamily)}
				{circularInnerValueFontFamily && loadGoogleFont(circularInnerValueFontFamily)}
				{circularBottomTitleValueFontFamily && loadGoogleFont(circularBottomTitleValueFontFamily)}
				{semiCircularTopTitleValueFontFamily && loadGoogleFont(semiCircularTopTitleValueFontFamily)}
				{semiCircularInnerValueFontFamily && loadGoogleFont(semiCircularInnerValueFontFamily)}
				{semiCircularBottomTitleValueFontFamily && loadGoogleFont(semiCircularBottomTitleValueFontFamily)}
				{progressBarStyle === "horizontal" && (
					<div className="responsive-horizontal-progress-bar-container">
						<div className={classnames(
							"responsive-horizontal-progress-bar-info",
							progressBarTopTitleEnable === false ? "title-disabled" : ""
						)}
						>
							{progressBarTopTitleEnable === true && (
								<RichText
									tagName="h4"
									placeholder={__("Enter Title", "responsive-block-editor-addons")}
									value={progressBarTopTitle}
									className="responsive-horizontal-progress-bar-top-title"
									onChange={(value) => setAttributes({ progressBarTopTitle: value })}
									onRemove={() => onReplace([])}
								/>
							)}
							{progressBarTopValueEnable === true && (
								<h4 className="responsive-horizontal-progress-bar-top-value">{progressBarValue}%</h4>
							)}
						</div>
						<div className="responsive-horizontal-progress-bar">
							<div className={classnames(
								(horizontalProgressBarStyle === "striped" || horizontalProgressBarStyle === "animatedstriped")
									? "responsive-striped-horizontal-progress-bar-progress progress-bar-animation "
									: "responsive-horizontal-progress-bar-progress progress-bar-animation"
							)}
							>
								<span className={classnames(
									animationClassSelected
								)}
								>
									{(progressBarInnerTitleEnable === true || progressBarInnerValueEnable === true)
										&& horizontalProgressBarStyle !== "striped" && horizontalProgressBarStyle !== "animatedstriped"
										&& (
											<div className={classnames(
												"responsive-horizontal-progress-bar-inner-text-container",
												progressBarInnerTitleEnable === false ? "title-disabled" : ""
											)}
											>
												{progressBarInnerTitleEnable === true && (
													<RichText
														tagName="span"
														placeholder={__("Enter Title", "responsive-block-editor-addons")}
														value={progressBarInnerTitle}
														className="responsive-horizontal-progress-bar-inner-title"
														onChange={(value) => setAttributes({ progressBarInnerTitle: value })}
														onRemove={() => onReplace([])}
													/>
												)}
												{progressBarInnerValueEnable === true && (
													<span className="responsive-horizontal-progress-bar-inner-value">{progressBarValue}%</span>
												)}
											</div>
										)}
								</span>
							</div>
						</div>
						<div className={classnames(
							"responsive-horizontal-progress-bar-info",
							progressBarBottomTitleEnable === false ? "title-disabled" : ""
						)}
						>
							{progressBarBottomTitleEnable === true && (
								<RichText
									tagName="h4"
									placeholder={__("Enter Title", "responsive-block-editor-addons")}
									value={progressBarBottomTitle}
									className="responsive-horizontal-progress-bar-bottom-title"
									onChange={(value) => setAttributes({ progressBarBottomTitle: value })}
									onRemove={() => onReplace([])}
								/>
							)}
							{progressBarBottomValueEnable === true && (
								<h4 className="responsive-horizontal-progress-bar-bottom-value">{progressBarValue}%</h4>
							)}
						</div>
					</div>
				)}
				{progressBarStyle === "circular" && circularProgressBarStyle === "circle" && (
					<div className="responsive-circular-progress-bar-container">
						<div className={classnames(
							"responsive-circular-progress-bar-info",
							circularProgressBarTopTitleEnable === false ? "title-disabled" : "",
							circularProgressBarTopValueEnable === false ? "value-disabled" : ""
						)}
						>
							{circularProgressBarTopTitleEnable === true && (
								<RichText
									tagName="h4"
									placeholder={__("Enter Title", "responsive-block-editor-addons")}
									value={circularProgressBarTopTitle}
									className="responsive-circular-progress-bar-top-title"
									onChange={(value) => setAttributes({ circularProgressBarTopTitle: value })}
									onRemove={() => onReplace([])}
								/>
							)}
							{circularProgressBarTopValueEnable === true && (
								<h4 className="responsive-circular-progress-bar-top-value">{progressBarValue}%</h4>
							)}
						</div>
						<div className="responsive-circular-progress-bar">
							<svg className="responsive-circular-progress-bar-circle" style={valToPassToCss}>
								<circle r={circleRadiusVal} cx={circleCxVal} cy={circleCyVal} />
								<circle r={circleRadiusVal} cx={circleCxVal} cy={circleCyVal} className="circular-progress-bar-animation" />
							</svg>
							{circularProgressBarValueEnable === true && (
								<div className="responsive-circular-progress-bar-progress">{progressBarValue}%</div>
							)}
						</div>
						<div className={classnames(
							"responsive-circular-progress-bar-info",
							circularProgressBarBottomTitleEnable === false ? "title-disabled" : "",
							circularProgressBarBottomValueEnable === false ? "value-disabled" : ""
						)}
						>
							{circularProgressBarBottomTitleEnable === true && (
								<RichText
									tagName="h4"
									placeholder={__("Enter Title", "responsive-block-editor-addons")}
									value={circularProgressBarBottomTitle}
									className="responsive-circular-progress-bar-bottom-title"
									onChange={(value) => setAttributes({ circularProgressBarBottomTitle: value })}
									onRemove={() => onReplace([])}
								/>
							)}
							{circularProgressBarBottomValueEnable === true && (
								<h4 className="responsive-circular-progress-bar-bottom-value">{progressBarValue}%</h4>
							)}
						</div>
					</div>
				)}
				{progressBarStyle === "circular" && circularProgressBarStyle === "semicircle" && (
					<div className="responsive-semi-circular-progress-bar-container">
						<div className={classnames(
							"responsive-semi-circular-progress-bar-info",
							semiCircularProgressBarTopTitleEnable === false ? "title-disabled" : "",
							semiCircularProgressBarTopValueEnable === false ? "value-disabled" : ""
						)}
						>
							{semiCircularProgressBarTopTitleEnable === true && (
								<RichText
									tagName="h4"
									placeholder={__("Enter Title", "responsive-block-editor-addons")}
									value={semiCircularProgressBarTopTitle}
									className="responsive-semi-circular-progress-bar-top-title"
									onChange={(value) => setAttributes({ semiCircularProgressBarTopTitle: value })}
									onRemove={() => onReplace([])}
								/>
							)}
							{semiCircularProgressBarTopValueEnable === true && (
								<h4 className="responsive-semi-circular-progress-bar-top-value">{progressBarValue}%</h4>
							)}
						</div>
						<div className="responsive-semi-circular-progress">
							{semiCircularProgressBarValueEnable === true && (
								<span className="responsive-semi-circular-progress-bar-value">{progressBarValue}%</span>
							)}
						</div>
						<div className={classnames(
							"responsive-semi-circular-progress-bar-info",
							semiCircularProgressBarBottomTitleEnable === false ? "title-disabled" : "",
							semiCircularProgressBarBottomValueEnable === false ? "value-disabled" : ""
						)}
						>
							{semiCircularProgressBarBottomTitleEnable === true && (
								<RichText
									tagName="h4"
									placeholder={__("Enter Title", "responsive-block-editor-addons")}
									value={semiCircularProgressBarBottomTitle}
									className="responsive-semi-circular-progress-bar-bottom-title"
									onChange={(value) => setAttributes({ semiCircularProgressBarBottomTitle: value })}
									onRemove={() => onReplace([])}
								/>
							)}
							{semiCircularProgressBarBottomValueEnable === true && (
								<h4 className="responsive-semi-circular-progress-bar-bottom-value">{progressBarValue}%</h4>
							)}
						</div>
					</div>
				)}
			</div>
		];
	}
}
