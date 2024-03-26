/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";
import { hexToRgba } from "../../../utils/index.js";

function EditorStyles(props) {
	const {
		block_id,
		progressBarValue,
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
		circularInnerValueTextTransform,
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
		semiCircularInnerValueTextTransform,
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
	} = props.attributes;

	let circleRadiusVal = 0;
	let strokeDashArrayVal = 0;
	let strokeDashOffsetVal = 0;

	if (circularProgressBarSize) {
		circleRadiusVal = (circularProgressBarSize / 2) - 10;
		strokeDashArrayVal = (circleRadiusVal * 6.27) + 3;
		strokeDashOffsetVal = (circleRadiusVal * 6.27) + 3;
	}

	let horizontalTrackColor = "";
	if (gradientTrack) {
		horizontalTrackColor =
			"linear-gradient( to bottom, " +
			horizontalProgressBarPrimaryTrackColor +
			", " +
			horizontalProgressBarSecondaryTrackColor +
			")";
	} else {
		horizontalTrackColor =
			"linear-gradient( to bottom, " +
			horizontalProgressBarPrimaryTrackColor +
			", " +
			horizontalProgressBarPrimaryTrackColor +
			")";
	}

	let trackStripeColor = "linear-gradient(45deg, " +
		horizontalProgressBarStripeColor + " 25%," +
		" rgba(0, 0, 0, 0) 25%," +
		" rgba(0, 0, 0, 0) 50%," +
		horizontalProgressBarStripeColor + " 50%," +
		horizontalProgressBarStripeColor + " 75%," +
		" rgba(0, 0, 0, 0) 75%," +
		" rgba(0, 0, 0, 0) 25%)";

	let stripeAnimationDurationVal = 0;
	if (stripedHorizontalProgressBarAnimationTime) {
		stripeAnimationDurationVal = stripedHorizontalProgressBarAnimationTime * 0.1;
	}

	let semiCircularBackgroundTrackColors = "";
	if (semiCircularProgressBarBackgroundColor && semiCircularProgressBarTrackColor) {
		semiCircularBackgroundTrackColors =
			semiCircularProgressBarBackgroundColor +
			semiCircularProgressBarBackgroundColor +
			semiCircularProgressBarTrackColor +
			semiCircularProgressBarTrackColor;
	}

	var selectors = {
		" ": {
		  "opacity": hideWidget? 0.2 : 1,
		},
		" .responsive-horizontal-progress-bar": {
			"height": generateCSSUnit(horizontalProgressBarSize, "px"),
			"background-color": horizontalProgressBarBackgroundColor,
			"border-radius": generateCSSUnit(horizontalProgressBarBorderRadius, "px"),
			"border-style": horizontalProgressBarBorderStyle,
			"border-width": generateCSSUnit(horizontalProgressBarBorderWidth, "px"),
			"border-color": horizontalProgressBarBorderColor,
		},
		" .responsive-horizontal-progress-bar-progress": {
			"width": progressBarValue + "%",
			"background-image": horizontalTrackColor,
		},
		" .responsive-striped-horizontal-progress-bar-progress": {
			"width": progressBarValue + "%",
			"background-image": horizontalTrackColor,
		},
		" .responsive-semi-circular-progress": {
			"width": generateCSSUnit(semiCircularProgressBarSize, "px"),
			"height": generateCSSUnit((semiCircularProgressBarSize / 2), "px"),
		},
		" .responsive-semi-circular-progress::after": {
			"width": generateCSSUnit(semiCircularProgressBarSize, "px"),
			"height": generateCSSUnit(semiCircularProgressBarSize, "px"),
			"transform": "rotate(calc(1deg * (-45 + " + progressBarValue + " * 1.8)))",
			"border-width": generateCSSUnit(semiCircularProgressBarWidth, "px"),
			"border-color": semiCircularBackgroundTrackColors,
		},
		" .responsive-circular-progress-bar-circle": {
			"width": generateCSSUnit(circularProgressBarSize, "px"),
			"height": generateCSSUnit(circularProgressBarSize, "px"),
		},
		" .responsive-circular-progress-bar-circle circle:nth-child(2)": {
			"stroke-dasharray": strokeDashArrayVal,
			"stroke-dashoffset": strokeDashOffsetVal,
			"stroke": circularProgressBarTrackColor,
		},
		" .responsive-circular-progress-bar-container:nth-child(1) .responsive-circular-progress-bar-circle circle:nth-child(2)": {
			"stroke-dashoffset": "calc(" + strokeDashOffsetVal + " - (" + strokeDashOffsetVal + " * " + progressBarValue + ") / 100)",
		},
		" .responsive-circular-progress-bar-circle circle": {
			"stroke-width": generateCSSUnit(circularProgressBarWidth, "px"),
			"stroke": circularProgressBarBackgroundColor,
			"stroke-linecap": circularProgressBarTrackStyle,
		},
		" .responsive-striped-horizontal-progress-bar-inner-span::after": {
			"background-image": trackStripeColor,
		},
		" .responsive-horizontal-progress-bar-top-title": {
			"color": horizontalProgressBarTopTitleValueColor,
			"font-family": topTitleValueFontFamily,
			"font-size": generateCSSUnit(topTitleValueFontSize, "px"),
			"font-weight": topTitleValueFontWeight,
			"line-height": topTitleValueLineHeight,
			"letter-spacing": generateCSSUnit(topTitleValueLetterSpacing, "px"),
			"text-transform": topTitleValueTextTransform,
		},
		" .responsive-horizontal-progress-bar-top-value": {
			"color": horizontalProgressBarTopTitleValueColor,
			"font-family": topTitleValueFontFamily,
			"font-size": generateCSSUnit(topTitleValueFontSize, "px"),
			"font-weight": topTitleValueFontWeight,
			"line-height": topTitleValueLineHeight,
			"letter-spacing": generateCSSUnit(topTitleValueLetterSpacing, "px"),
			"text-transform": topTitleValueTextTransform,
		},
		" .responsive-horizontal-progress-bar-inner-title": {
			"color": horizontalProgressBarInnerTitleValueColor,
			"font-family": innerTitleValueFontFamily,
			"font-size": generateCSSUnit(innerTitleValueFontSize, "px"),
			"line-height": innerTitleValueLineHeight,
			"font-weight": innerTitleValueFontWeight,
			"letter-spacing": generateCSSUnit(innerTitleValueLetterSpacing, "px"),
			"text-transform": innerTitleValueTextTransform,
		},
		" .responsive-horizontal-progress-bar-inner-value": {
			"color": horizontalProgressBarInnerTitleValueColor,
			"font-family": innerTitleValueFontFamily,
			"font-size": generateCSSUnit(innerTitleValueFontSize, "px"),
			"line-height": innerTitleValueLineHeight,
			"font-weight": innerTitleValueFontWeight,
			"letter-spacing": generateCSSUnit(innerTitleValueLetterSpacing, "px"),
			"text-transform": innerTitleValueTextTransform,
		},
		" .responsive-horizontal-progress-bar-bottom-title": {
			"color": horizontalProgressBarBottomTitleValueColor,
			"font-family": bottomTitleValueFontFamily,
			"font-size": generateCSSUnit(bottomTitleValueFontSize, "px"),
			"line-height": bottomTitleValueLineHeight,
			"font-weight": bottomTitleValueFontWeight,
			"letter-spacing": generateCSSUnit(bottomTitleValueLetterSpacing, "px"),
			"text-transform": bottomTitleValueTextTransform,
		},
		" .responsive-horizontal-progress-bar-bottom-value": {
			"color": horizontalProgressBarBottomTitleValueColor,
			"font-family": bottomTitleValueFontFamily,
			"font-size": generateCSSUnit(bottomTitleValueFontSize, "px"),
			"line-height": bottomTitleValueLineHeight,
			"font-weight": bottomTitleValueFontWeight,
			"letter-spacing": generateCSSUnit(bottomTitleValueLetterSpacing, "px"),
			"text-transform": bottomTitleValueTextTransform,
		},
		" .responsive-circular-progress-bar-top-title": {
			"color": circularProgressBarTopTitleValueColor,
			"font-family": circularTopTitleValueFontFamily,
			"font-size": generateCSSUnit(circularTopTitleValueFontSize, "px"),
			"line-height": circularTopTitleValueLineHeight,
			"font-weight": circularTopTitleValueFontWeight,
			"letter-spacing": generateCSSUnit(circularTopTitleValueLetterSpacing, "px"),
			"text-transform": circularTopTitleValueTextTransform,
		},
		" .responsive-circular-progress-bar-top-value": {
			"color": circularProgressBarTopTitleValueColor,
			"font-family": circularTopTitleValueFontFamily,
			"font-size": generateCSSUnit(circularTopTitleValueFontSize, "px"),
			"line-height": circularTopTitleValueLineHeight,
			"font-weight": circularTopTitleValueFontWeight,
			"letter-spacing": generateCSSUnit(circularTopTitleValueLetterSpacing, "px"),
			"text-transform": circularTopTitleValueTextTransform,
		},
		" .responsive-circular-progress-bar-progress": {
			"color": circularProgressBarInnerValueColor,
			"font-family": circularInnerValueFontFamily,
			"font-size": generateCSSUnit(circularInnerValueFontSize, "px"),
			"line-height": circularInnerValueLineHeight,
			"font-weight": circularInnerValueFontWeight,
			"letter-spacing": generateCSSUnit(circularInnerValueLetterSpacing, "px"),
			"text-transform": circularInnerValueTextTransform,
			"display": "flex",
			"justify-content": "center",
			"align-items": "center",
			"overflow": "hidden",
			"border-radius": "100%",
			"height": generateCSSUnit(circularProgressBarSize-40, "px"),
			"width": generateCSSUnit(circularProgressBarSize-40, "px"),
		},
		" .responsive-circular-progress-bar-bottom-title": {
			"color": circularProgressBarBottomTitleValueColor,
			"font-family": circularBottomTitleValueFontFamily,
			"font-size": generateCSSUnit(circularBottomTitleValueFontSize, "px"),
			"line-height": circularBottomTitleValueLineHeight,
			"font-weight": circularBottomTitleValueFontWeight,
			"letter-spacing": generateCSSUnit(circularBottomTitleValueLetterSpacing, "px"),
			"text-transform": circularBottomTitleValueTextTransform,
		},
		" .responsive-circular-progress-bar-bottom-value": {
			"color": circularProgressBarBottomTitleValueColor,
			"font-family": circularBottomTitleValueFontFamily,
			"font-size": generateCSSUnit(circularBottomTitleValueFontSize, "px"),
			"line-height": circularBottomTitleValueLineHeight,
			"font-weight": circularBottomTitleValueFontWeight,
			"letter-spacing": generateCSSUnit(circularBottomTitleValueLetterSpacing, "px"),
			"text-transform": circularBottomTitleValueTextTransform,
		},
		" .responsive-semi-circular-progress-bar-top-title": {
			"color": semiCircularProgressBarTopTitleValueColor,
			"font-family": semiCircularTopTitleValueFontFamily,
			"font-size": generateCSSUnit(semiCircularTopTitleValueFontSize, "px"),
			"line-height": semiCircularTopTitleValueLineHeight,
			"font-weight": semiCircularTopTitleValueFontWeight,
			"letter-spacing": generateCSSUnit(semiCircularTopTitleValueLetterSpacing, "px"),
			"text-transform": semiCircularTopTitleValueTextTransform,
		},
		" .responsive-semi-circular-progress-bar-top-value": {
			"color": semiCircularProgressBarTopTitleValueColor,
			"font-family": semiCircularTopTitleValueFontFamily,
			"font-size": generateCSSUnit(semiCircularTopTitleValueFontSize, "px"),
			"line-height": semiCircularTopTitleValueLineHeight,
			"font-weight": semiCircularTopTitleValueFontWeight,
			"letter-spacing": generateCSSUnit(semiCircularTopTitleValueLetterSpacing, "px"),
			"text-transform": semiCircularTopTitleValueTextTransform,
		},
		" .responsive-semi-circular-progress-bar-value": {
			"color": semiCircularProgressBarInnerValueColor,
			"font-family": semiCircularInnerValueFontFamily,
			"font-size": generateCSSUnit(semiCircularInnerValueFontSize, "px"),
			"line-height": semiCircularInnerValueLineHeight,
			"font-weight": semiCircularInnerValueFontWeight,
			"letter-spacing": generateCSSUnit(semiCircularInnerValueLetterSpacing, "px"),
			"text-transform": semiCircularInnerValueTextTransform,
		},
		" .responsive-semi-circular-progress-bar-bottom-title": {
			"color": semiCircularProgressBarBottomTitleValueColor,
			"font-family": semiCircularBottomTitleValueFontFamily,
			"font-size": generateCSSUnit(semiCircularBottomTitleValueFontSize, "px"),
			"line-height": semiCircularBottomTitleValueLineHeight,
			"font-weight": semiCircularBottomTitleValueFontWeight,
			"letter-spacing": generateCSSUnit(semiCircularBottomTitleValueLetterSpacing, "px"),
			"text-transform": semiCircularBottomTitleValueTextTransform,
		},
		" .responsive-semi-circular-progress-bar-bottom-value": {
			"color": semiCircularProgressBarBottomTitleValueColor,
			"font-family": semiCircularBottomTitleValueFontFamily,
			"font-size": generateCSSUnit(semiCircularBottomTitleValueFontSize, "px"),
			"line-height": semiCircularBottomTitleValueLineHeight,
			"font-weight": semiCircularBottomTitleValueFontWeight,
			"letter-spacing": generateCSSUnit(semiCircularBottomTitleValueLetterSpacing, "px"),
			"text-transform": semiCircularBottomTitleValueTextTransform,
		},
		" .stripe-movement-effect::after": {
			"animation-duration": stripeAnimationDurationVal + "s",
		}
	};

	var mobile_selectors = {
		" ": {
		  "opacity": hideWidgetMobile? 0.2 : 1,
		},
		" .responsive-horizontal-progress-bar-top-title": {
			"font-size": generateCSSUnit(topTitleValueFontSizeMobile, "px"),
		},
		" .responsive-horizontal-progress-bar-top-value": {
			"font-size": generateCSSUnit(topTitleValueFontSizeMobile, "px"),
		},
		" .responsive-horizontal-progress-bar-inner-title": {
			"font-size": generateCSSUnit(innerTitleValueFontSizeMobile, "px"),
		},
		" .responsive-horizontal-progress-bar-inner-value": {
			"font-size": generateCSSUnit(innerTitleValueFontSizeMobile, "px"),
		},
		" .responsive-horizontal-progress-bar-bottom-title": {
			"font-size": generateCSSUnit(bottomTitleValueFontSizeMobile, "px"),
		},
		" .responsive-horizontal-progress-bar-bottom-value": {
			"font-size": generateCSSUnit(bottomTitleValueFontSizeMobile, "px"),
		},
		" .responsive-circular-progress-bar-top-title": {
			"font-size": generateCSSUnit(circularTopTitleValueFontSizeMobile, "px"),
		},
		" .responsive-circular-progress-bar-top-value": {
			"font-size": generateCSSUnit(circularTopTitleValueFontSizeMobile, "px"),
		},
		" .responsive-circular-progress-bar-progress": {
			"font-size": generateCSSUnit(circularInnerValueFontSizeMobile, "px"),
		},
		" .responsive-circular-progress-bar-bottom-title": {
			"font-size": generateCSSUnit(circularBottomTitleValueFontSizeMobile, "px"),
		},
		" .responsive-circular-progress-bar-bottom-value": {
			"font-size": generateCSSUnit(circularBottomTitleValueFontSizeMobile, "px"),
		},
		" .responsive-semi-circular-progress-bar-top-title": {
			"font-size": generateCSSUnit(semiCircularTopTitleValueFontSizeMobile, "px"),
		},
		" .responsive-semi-circular-progress-bar-top-value": {
			"font-size": generateCSSUnit(semiCircularTopTitleValueFontSizeMobile, "px"),
		},
		" .responsive-semi-circular-progress-bar-value": {
			"font-size": generateCSSUnit(semiCircularInnerValueFontSizeMobile, "px"),
		},
		" .responsive-semi-circular-progress-bar-bottom-title": {
			"font-size": generateCSSUnit(semiCircularBottomTitleValueFontSizeMobile, "px"),
		},
		" .responsive-semi-circular-progress-bar-bottom-value": {
			"font-size": generateCSSUnit(semiCircularBottomTitleValueFontSizeMobile, "px"),
		},
	};

	var tablet_selectors = {
		" ": {
		  "opacity": hideWidgetTablet? 0.2 : 1,
		},
		" .responsive-horizontal-progress-bar-top-title": {
			"font-size": generateCSSUnit(topTitleValueFontSizeTablet, "px"),
		},
		" .responsive-horizontal-progress-bar-top-value": {
			"font-size": generateCSSUnit(topTitleValueFontSizeTablet, "px"),
		},
		" .responsive-horizontal-progress-bar-inner-title": {
			"font-size": generateCSSUnit(innerTitleValueFontSizeTablet, "px"),
		},
		" .responsive-horizontal-progress-bar-inner-value": {
			"font-size": generateCSSUnit(innerTitleValueFontSizeTablet, "px"),
		},
		" .responsive-horizontal-progress-bar-bottom-title": {
			"font-size": generateCSSUnit(bottomTitleValueFontSizeTablet, "px"),
		},
		" .responsive-horizontal-progress-bar-bottom-value": {
			"font-size": generateCSSUnit(bottomTitleValueFontSizeTablet, "px"),
		},
		" .responsive-circular-progress-bar-top-title": {
			"font-size": generateCSSUnit(circularTopTitleValueFontSizeTablet, "px"),
		},
		" .responsive-circular-progress-bar-top-value": {
			"font-size": generateCSSUnit(circularTopTitleValueFontSizeTablet, "px"),
		},
		" .responsive-circular-progress-bar-progress": {
			"font-size": generateCSSUnit(circularInnerValueFontSizeTablet, "px"),
		},
		" .responsive-circular-progress-bar-bottom-title": {
			"font-size": generateCSSUnit(circularBottomTitleValueFontSizeTablet, "px"),
		},
		" .responsive-circular-progress-bar-bottom-value": {
			"font-size": generateCSSUnit(circularBottomTitleValueFontSizeTablet, "px"),
		},
		" .responsive-semi-circular-progress-bar-top-title": {
			"font-size": generateCSSUnit(semiCircularTopTitleValueFontSizeTablet, "px"),
		},
		" .responsive-semi-circular-progress-bar-top-value": {
			"font-size": generateCSSUnit(semiCircularTopTitleValueFontSizeTablet, "px"),
		},
		" .responsive-semi-circular-progress-bar-value": {
			"font-size": generateCSSUnit(semiCircularInnerValueFontSizeTablet, "px"),
		},
		" .responsive-semi-circular-progress-bar-bottom-title": {
			"font-size": generateCSSUnit(semiCircularBottomTitleValueFontSizeTablet, "px"),
		},
		" .responsive-semi-circular-progress-bar-bottom-value": {
			"font-size": generateCSSUnit(semiCircularBottomTitleValueFontSizeTablet, "px"),
		},
	};

	var styling_css = "";
	var id = `.responsive-block-editor-addons-block-progress-bar.block-${block_id}`;

	styling_css = generateCSS(selectors, id);
	styling_css += generateCSS(tablet_selectors, id, true, "tablet");
	styling_css += generateCSS(mobile_selectors, id, true, "mobile");

	return styling_css;
}

export default EditorStyles;