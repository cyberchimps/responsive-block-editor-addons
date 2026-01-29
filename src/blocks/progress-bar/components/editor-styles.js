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
		horizontalProgressBarTopRadius,
		horizontalProgressBarRightRadius,
		horizontalProgressBarBottomRadius,
		horizontalProgressBarLeftRadius,
		horizontalProgressBarTopRadiusTablet,
		horizontalProgressBarRightRadiusTablet,
		horizontalProgressBarBottomRadiusTablet,
		horizontalProgressBarLeftRadiusTablet,
		horizontalProgressBarTopRadiusMobile,
		horizontalProgressBarRightRadiusMobile,
		horizontalProgressBarBottomRadiusMobile,
		horizontalProgressBarLeftRadiusMobile,
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
		topTitleValueTypographyColor,
		innerTitleValueTypographyColor,
		bottomTitleValueTypographyColor,
		circularTopTitleValueTypographyColor,
		circularInnerValueTypographyColor,
		circularBottomTitleValueTypographyColor,
		semiCircularTopTitleValueTypographyColor,
		semiCircularInnerValueTypographyColor,
		semiCircularBottomTitleValueTypographyColor,
		topTitleValueFontStyle,
		innerTitleValueFontStyle,
		bottomTitleValueFontStyle,
		circularTopTitleValueFontStyle,
		circularInnerValueFontStyle,
		circularBottomTitleValueFontStyle,
		semiCircularTopTitleValueFontStyle,
		semiCircularInnerValueFontStyle,
		semiCircularBottomTitleValueFontStyle,
		topTitleValueTextDecoration,
		innerTitleValueTextDecoration,
		bottomTitleValueTextDecoration,
		circularTopTitleValueTextDecoration,
		circularInnerValueTextDecoration,
		circularBottomTitleValueTextDecoration,
		semiCircularTopTitleValueTextDecoration,
		semiCircularInnerValueTextDecoration,
		semiCircularBottomTitleValueTextDecoration,
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
	const isOn = responsive_globals?.is_responsive_conditions_on ?? 1;

	var selectors = {
		" ": {
		  "opacity": hideWidget && isOn ? 0.2 : 1,
		},
		" .responsive-horizontal-progress-bar-container, .responsive-circular-progress-bar-container ": {
			'padding-top': generateCSSUnit(blockTopPadding, "px"),
			'padding-right': generateCSSUnit(blockRightPadding, "px"),
			'padding-bottom': generateCSSUnit(blockBottomPadding, "px"),
			'padding-left': generateCSSUnit(blockLeftPadding, "px"),
			'margin-top': generateCSSUnit(blockTopMargin, "px"),
			'margin-right': generateCSSUnit(blockRightMargin, "px"),
			'margin-bottom': generateCSSUnit(blockBottomMargin, "px"),
			'margin-left': generateCSSUnit(blockLeftMargin, "px"),
		},
		" .responsive-horizontal-progress-bar": {
			"height": generateCSSUnit(horizontalProgressBarSize, "px"),
			"background-color": horizontalProgressBarBackgroundColor,
			"border-top-left-radius": generateCSSUnit(horizontalProgressBarTopRadius, "px"),
			"border-top-right-radius": generateCSSUnit(horizontalProgressBarRightRadius, "px"),
			"border-bottom-right-radius": generateCSSUnit(horizontalProgressBarBottomRadius, "px"),
			"border-bottom-left-radius": generateCSSUnit(horizontalProgressBarLeftRadius, "px"),
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
			"color": topTitleValueTypographyColor,
			"font-family": topTitleValueFontFamily,
			"font-size": generateCSSUnit(topTitleValueFontSize, "px"),
			"font-weight": topTitleValueFontWeight,
			"line-height": topTitleValueLineHeight,
			"letter-spacing": generateCSSUnit(topTitleValueLetterSpacing, "px"),
			"text-transform": topTitleValueTextTransform,
			"text-decoration": topTitleValueTextDecoration,
			"font-style": topTitleValueFontStyle,
		},
		" .responsive-horizontal-progress-bar-top-value": {
			"color": topTitleValueTypographyColor,
			"font-family": topTitleValueFontFamily,
			"font-size": generateCSSUnit(topTitleValueFontSize, "px"),
			"font-weight": topTitleValueFontWeight,
			"line-height": topTitleValueLineHeight,
			"letter-spacing": generateCSSUnit(topTitleValueLetterSpacing, "px"),
			"text-transform": topTitleValueTextTransform,
			"text-decoration": topTitleValueTextDecoration,
			"font-style": topTitleValueFontStyle,
		},
		" .responsive-horizontal-progress-bar-inner-title": {
			"color": innerTitleValueTypographyColor,
			"font-family": innerTitleValueFontFamily,
			"font-size": generateCSSUnit(innerTitleValueFontSize, "px"),
			"line-height": innerTitleValueLineHeight,
			"font-weight": innerTitleValueFontWeight,
			"letter-spacing": generateCSSUnit(innerTitleValueLetterSpacing, "px"),
			"text-transform": innerTitleValueTextTransform,
			"text-decoration": innerTitleValueTextDecoration,
			"font-style": innerTitleValueFontStyle,
		},
		" .responsive-horizontal-progress-bar-inner-value": {
			"color": innerTitleValueTypographyColor,
			"font-family": innerTitleValueFontFamily,
			"font-size": generateCSSUnit(innerTitleValueFontSize, "px"),
			"line-height": innerTitleValueLineHeight,
			"font-weight": innerTitleValueFontWeight,
			"letter-spacing": generateCSSUnit(innerTitleValueLetterSpacing, "px"),
			"text-transform": innerTitleValueTextTransform,
			"text-decoration": innerTitleValueTextDecoration,
			"font-style": innerTitleValueFontStyle,
		},
		" .responsive-horizontal-progress-bar-bottom-title": {
			"color": bottomTitleValueTypographyColor,
			"font-family": bottomTitleValueFontFamily,
			"font-size": generateCSSUnit(bottomTitleValueFontSize, "px"),
			"line-height": bottomTitleValueLineHeight,
			"font-weight": bottomTitleValueFontWeight,
			"letter-spacing": generateCSSUnit(bottomTitleValueLetterSpacing, "px"),
			"text-transform": bottomTitleValueTextTransform,
			"text-decoration": bottomTitleValueTextDecoration,
			"font-style": bottomTitleValueFontStyle,
		},
		" .responsive-horizontal-progress-bar-bottom-value": {
			"color": bottomTitleValueTypographyColor,
			"font-family": bottomTitleValueFontFamily,
			"font-size": generateCSSUnit(bottomTitleValueFontSize, "px"),
			"line-height": bottomTitleValueLineHeight,
			"font-weight": bottomTitleValueFontWeight,
			"letter-spacing": generateCSSUnit(bottomTitleValueLetterSpacing, "px"),
			"text-transform": bottomTitleValueTextTransform,
			"text-decoration": bottomTitleValueTextDecoration,
			"font-style": bottomTitleValueFontStyle,
		},
		" .responsive-circular-progress-bar-top-title": {
			"color": circularTopTitleValueTypographyColor,
			"font-family": circularTopTitleValueFontFamily,
			"font-size": generateCSSUnit(circularTopTitleValueFontSize, "px"),
			"line-height": circularTopTitleValueLineHeight,
			"font-weight": circularTopTitleValueFontWeight,
			"letter-spacing": generateCSSUnit(circularTopTitleValueLetterSpacing, "px"),
			"text-transform": circularTopTitleValueTextTransform,
			"text-decoration": circularTopTitleValueTextDecoration,
			"font-style": circularTopTitleValueFontStyle,
		},
		" .responsive-circular-progress-bar-top-value": {
			"color": circularTopTitleValueTypographyColor,
			"font-family": circularTopTitleValueFontFamily,
			"font-size": generateCSSUnit(circularTopTitleValueFontSize, "px"),
			"line-height": circularTopTitleValueLineHeight,
			"font-weight": circularTopTitleValueFontWeight,
			"letter-spacing": generateCSSUnit(circularTopTitleValueLetterSpacing, "px"),
			"text-transform": circularTopTitleValueTextTransform,
			"text-decoration": circularTopTitleValueTextDecoration,
			"font-style": circularTopTitleValueFontStyle,
		},
		" .responsive-circular-progress-bar-progress": {
			"color": circularInnerValueTypographyColor,
			"font-family": circularInnerValueFontFamily,
			"font-size": generateCSSUnit(circularInnerValueFontSize, "px"),
			"line-height": circularInnerValueLineHeight,
			"font-weight": circularInnerValueFontWeight,
			"letter-spacing": generateCSSUnit(circularInnerValueLetterSpacing, "px"),
			"display": "flex",
			"justify-content": "center",
			"align-items": "center",
			"overflow": "hidden",
			"border-radius": "100%",
			"height": generateCSSUnit(circularProgressBarSize-40, "px"),
			"width": generateCSSUnit(circularProgressBarSize-40, "px"),
			"font-style": circularInnerValueFontStyle,
			"text-decoration": circularInnerValueTextDecoration,
		},
		" .responsive-circular-progress-bar-bottom-title": {
			"color": circularBottomTitleValueTypographyColor,
			"font-family": circularBottomTitleValueFontFamily,
			"font-size": generateCSSUnit(circularBottomTitleValueFontSize, "px"),
			"line-height": circularBottomTitleValueLineHeight,
			"font-weight": circularBottomTitleValueFontWeight,
			"letter-spacing": generateCSSUnit(circularBottomTitleValueLetterSpacing, "px"),
			"text-transform": circularBottomTitleValueTextTransform,
			"text-decoration": circularBottomTitleValueTextDecoration,
			"font-style": circularBottomTitleValueFontStyle
		},
		" .responsive-circular-progress-bar-bottom-value": {
			"color": circularBottomTitleValueTypographyColor,
			"font-family": circularBottomTitleValueFontFamily,
			"font-size": generateCSSUnit(circularBottomTitleValueFontSize, "px"),
			"line-height": circularBottomTitleValueLineHeight,
			"font-weight": circularBottomTitleValueFontWeight,
			"letter-spacing": generateCSSUnit(circularBottomTitleValueLetterSpacing, "px"),
			"text-transform": circularBottomTitleValueTextTransform,
			"text-decoration": circularBottomTitleValueTextDecoration,
			"font-style": circularBottomTitleValueFontStyle
		},
		" .responsive-semi-circular-progress-bar-top-title": {
			"color": semiCircularTopTitleValueTypographyColor,
			"font-family": semiCircularTopTitleValueFontFamily,
			"font-size": generateCSSUnit(semiCircularTopTitleValueFontSize, "px"),
			"line-height": semiCircularTopTitleValueLineHeight,
			"font-weight": semiCircularTopTitleValueFontWeight,
			"letter-spacing": generateCSSUnit(semiCircularTopTitleValueLetterSpacing, "px"),
			"text-transform": semiCircularTopTitleValueTextTransform,
			"text-decoration": semiCircularTopTitleValueTextDecoration,
			"font-style": semiCircularTopTitleValueFontStyle,
		},
		" .responsive-semi-circular-progress-bar-top-value": {
			"color": semiCircularTopTitleValueTypographyColor,
			"font-family": semiCircularTopTitleValueFontFamily,
			"font-size": generateCSSUnit(semiCircularTopTitleValueFontSize, "px"),
			"line-height": semiCircularTopTitleValueLineHeight,
			"font-weight": semiCircularTopTitleValueFontWeight,
			"letter-spacing": generateCSSUnit(semiCircularTopTitleValueLetterSpacing, "px"),
			"text-transform": semiCircularTopTitleValueTextTransform,
			"text-decoration": semiCircularTopTitleValueTextDecoration,
			"font-style": semiCircularTopTitleValueFontStyle,
		},
		" .responsive-semi-circular-progress-bar-value": {
			"color": semiCircularInnerValueTypographyColor,
			"font-family": semiCircularInnerValueFontFamily,
			"font-size": generateCSSUnit(semiCircularInnerValueFontSize, "px"),
			"line-height": semiCircularInnerValueLineHeight,
			"font-weight": semiCircularInnerValueFontWeight,
			"letter-spacing": generateCSSUnit(semiCircularInnerValueLetterSpacing, "px"),
			"font-style": semiCircularInnerValueFontStyle,
			"text-decoration": semiCircularInnerValueTextDecoration,
		},
		" .responsive-semi-circular-progress-bar-bottom-title": {
			"color": semiCircularBottomTitleValueTypographyColor,
			"font-family": semiCircularBottomTitleValueFontFamily,
			"font-size": generateCSSUnit(semiCircularBottomTitleValueFontSize, "px"),
			"line-height": semiCircularBottomTitleValueLineHeight,
			"font-weight": semiCircularBottomTitleValueFontWeight,
			"letter-spacing": generateCSSUnit(semiCircularBottomTitleValueLetterSpacing, "px"),
			"text-transform": semiCircularBottomTitleValueTextTransform,
			"text-decoration": semiCircularBottomTitleValueTextDecoration,
			"font-style": semiCircularBottomTitleValueFontStyle,
		},
		" .responsive-semi-circular-progress-bar-bottom-value": {
			"color": semiCircularBottomTitleValueTypographyColor,
			"font-family": semiCircularBottomTitleValueFontFamily,
			"font-size": generateCSSUnit(semiCircularBottomTitleValueFontSize, "px"),
			"line-height": semiCircularBottomTitleValueLineHeight,
			"font-weight": semiCircularBottomTitleValueFontWeight,
			"letter-spacing": generateCSSUnit(semiCircularBottomTitleValueLetterSpacing, "px"),
			"text-transform": semiCircularBottomTitleValueTextTransform,
			"text-decoration": semiCircularBottomTitleValueTextDecoration,
			"font-style": semiCircularBottomTitleValueFontStyle,
		},
		" .stripe-movement-effect::after": {
			"animation-duration": stripeAnimationDurationVal + "s",
		}
	};

	var mobile_selectors = {
		" ": {
		  "opacity": hideWidgetMobile && isOn ? 0.2 : 1,
		},
		" .responsive-horizontal-progress-bar-container, .responsive-circular-progress-bar-container ": {
			'padding-top': generateCSSUnit(blockTopPaddingMobile, "px"),
			'padding-right': generateCSSUnit(blockRightPaddingMobile, "px"),
			'padding-bottom': generateCSSUnit(blockBottomPaddingMobile, "px"),
			'padding-left': generateCSSUnit(blockLeftPaddingMobile, "px"),
			'margin-top': generateCSSUnit(blockTopMarginMobile, "px"),
			'margin-right': generateCSSUnit(blockRightMarginMobile, "px"),
			'margin-bottom': generateCSSUnit(blockBottomMarginMobile, "px"),
			'margin-left': generateCSSUnit(blockLeftMarginMobile, "px"),
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
		" .responsive-horizontal-progress-bar": {
			"border-top-left-radius": generateCSSUnit(horizontalProgressBarTopRadiusMobile, "px"),
			"border-top-right-radius": generateCSSUnit(horizontalProgressBarRightRadiusMobile, "px"),
			"border-bottom-right-radius": generateCSSUnit(horizontalProgressBarBottomRadiusMobile, "px"),
			"border-bottom-left-radius": generateCSSUnit(horizontalProgressBarLeftRadiusMobile, "px"),
		},
	};

	var tablet_selectors = {
		" ": {
		  "opacity": hideWidgetTablet && isOn ? 0.2 : 1,
		},
		" .responsive-horizontal-progress-bar-container, .responsive-circular-progress-bar-container ": {
			'padding-top': generateCSSUnit(blockTopPaddingTablet, "px"),
			'padding-right': generateCSSUnit(blockRightPaddingTablet, "px"),
			'padding-bottom': generateCSSUnit(blockBottomPaddingTablet, "px"),
			'padding-left': generateCSSUnit(blockLeftPaddingTablet, "px"),
			'margin-top': generateCSSUnit(blockTopMarginTablet, "px"),
			'margin-right': generateCSSUnit(blockRightMarginTablet, "px"),
			'margin-bottom': generateCSSUnit(blockBottomMarginTablet, "px"),
			'margin-left': generateCSSUnit(blockLeftMarginTablet, "px"),
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
		" .responsive-horizontal-progress-bar": {
			"border-top-left-radius": generateCSSUnit(horizontalProgressBarTopRadiusTablet, "px"),
			"border-top-right-radius": generateCSSUnit(horizontalProgressBarRightRadiusTablet, "px"),
			"border-bottom-right-radius": generateCSSUnit(horizontalProgressBarBottomRadiusTablet, "px"),
			"border-bottom-left-radius": generateCSSUnit(horizontalProgressBarLeftRadiusTablet, "px"),
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