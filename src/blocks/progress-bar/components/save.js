/**
 * Internal dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { InnerBlocks, RichText } = wp.blockEditor;

export default class Save extends Component {
	constructor() {
		super(...arguments);
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
			<div className={classnames(
				this.props.className,
				"responsive-block-editor-addons-block-progress-bar",
				`block-${block_id}`,
				progressBarColorTypeChosen
			)}
			>
				{progressBarStyle === "horizontal" && (
					<div className="responsive-horizontal-progress-bar-container">
						<div className={classnames(
							"responsive-horizontal-progress-bar-info",
							progressBarTopTitleEnable === false ? "title-disabled" : ""
						)}
						>
							{progressBarTopTitleEnable === true && (
								<RichText.Content
									tagName="h4"
									value={progressBarTopTitle}
									className="responsive-horizontal-progress-bar-top-title"
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
													<RichText.Content
														tagName="span"
														value={progressBarInnerTitle}
														className="responsive-horizontal-progress-bar-inner-title"
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
								<RichText.Content
									tagName="h4"
									value={progressBarBottomTitle}
									className="responsive-horizontal-progress-bar-bottom-title"
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
								<RichText.Content
									tagName="h4"
									value={circularProgressBarTopTitle}
									className="responsive-circular-progress-bar-top-title"
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
								<RichText.Content
									tagName="h4"
									value={circularProgressBarBottomTitle}
									className="responsive-circular-progress-bar-bottom-title"
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
								<RichText.Content
									tagName="h4"
									value={semiCircularProgressBarTopTitle}
									className="responsive-semi-circular-progress-bar-top-title"
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
								<RichText.Content
									tagName="h4"
									value={semiCircularProgressBarBottomTitle}
									className="responsive-semi-circular-progress-bar-bottom-title"
								/>
							)}
							{semiCircularProgressBarBottomValueEnable === true && (
								<h4 className="responsive-semi-circular-progress-bar-bottom-value">{progressBarValue}%</h4>
							)}
						</div>
					</div>
				)}
			</div>,
		];
	}
}
