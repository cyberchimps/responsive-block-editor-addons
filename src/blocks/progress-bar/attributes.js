const attributes = {
	block_id: {
		type: "string",
	},
	progressBarStyle: {
		type: "string",
		default: "horizontal",
	},
	progressBarColorType: {
		type: "string",
		default: "default",
	},
	horizontalProgressBarStyle: {
		type: "string",
		default: "plain",
	},
	circularProgressBarStyle: {
		type: "string",
		default: "circle",
	},
	progressBarTopTitle: {
		type: "string",
		default: "",
	},
	progressBarTopTitleEnable: {
		type: "boolean",
		default: true,
	},
	progressBarTopValueEnable: {
		type: "boolean",
		default: true,
	},
	progressBarValue: {
		type: "number",
		default: 50,
	},
	progressBarInnerTitle: {
		type: "string",
		default: "",
	},
	progressBarInnerTitleEnable: {
		type: "boolean",
		default: false,
	},
	progressBarInnerValueEnable: {
		type: "boolean",
		default: true,
	},
	progressBarBottomTitle: {
		type: "string",
		default: "",
	},
	progressBarBottomTitleEnable: {
		type: "boolean",
		default: false,
	},
	progressBarBottomValueEnable: {
		type: "boolean",
		default: false,
	},
	circularProgressBarTopTitle: {
		type: "string",
		default: "",
	},
	circularProgressBarBottomTitle: {
		type: "string",
		default: "",
	},
	circularProgressBarValueEnable: {
		type: "boolean",
		default: true,
	},
	circularProgressBarTopTitleEnable: {
		type: "boolean",
		default: true,
	},
	circularProgressBarTopValueEnable: {
		type: "boolean",
		default: false,
	},
	circularProgressBarBottomTitleEnable: {
		type: "boolean",
		default: true,
	},
	circularProgressBarBottomValueEnable: {
		type: "boolean",
		default: false,
	},
	semiCircularProgressBarValueEnable: {
		type: "boolean",
		default: true,
	},
	semiCircularProgressBarTopTitle: {
		type: "string",
		default: "",
	},
	semiCircularProgressBarBottomTitle: {
		type: "string",
		default: "",
	},
	semiCircularProgressBarTopTitleEnable: {
		type: "boolean",
		default: true,
	},
	semiCircularProgressBarTopValueEnable: {
		type: "boolean",
		default: false,
	},
	semiCircularProgressBarBottomTitleEnable: {
		type: "boolean",
		default: true,
	},
	semiCircularProgressBarBottomValueEnable: {
		type: "boolean",
		default: false,
	},
	horizontalProgressBarSize: {
		type: "number",
		default: 25,
	},
	semiCircularProgressBarSize: {
		type: "number",
		default: 200,
	},
	circularProgressBarSize: {
		type: "number",
		default: 150,
	},
	circularProgressBarWidth: {
		type: "number",
		default: 10,
	},
	semiCircularProgressBarWidth: {
		type: "number",
		default: 10,
	},
	horizontalProgressBarBackgroundColor: {
		type: "string",
		default: "#d9d9d9",
	},
	horizontalProgressBarPrimaryTrackColor: {
		type: "string",
		default: "#80bfff"
	},
	gradientTrack: {
		type: "boolean",
		default: true,
	},
	horizontalProgressBarSecondaryTrackColor: {
		type: "string",
		default: "#1a8cff",
	},
	horizontalProgressBarStripeColor: {
		type: "string",
		default: "#fff",
	},
	horizontalProgressBarTopTitleValueColor: {
		type: "string",
		default: "#333333",
	},
	horizontalProgressBarInnerTitleValueColor: {
		type: "string",
		default: "#333333",
	},
	horizontalProgressBarBottomTitleValueColor: {
		type: "string",
		default: "#333333",
	},
	horizontalProgressBarBorderRadius: {
		type: "number",
		default: 5,
	},
	horizontalProgressBarBorderStyle: {
		type: "string",
		default: "solid",
	},
	horizontalProgressBarBorderWidth: {
		type: "number",
		default: 0,
	},
	horizontalProgressBarBorderColor: {
		type: "string",
		default: "#333333",
	},
	topTitleValueFontFamily: {
		type: "string",
	},
	topTitleValueFontSize: {
		type: "number",
	},
	topTitleValueFontSizeMobile: {
		type: "number",
	},
	topTitleValueFontSizeTablet: {
		type: "number",
	},
	topTitleValueFontWeight: {
		type: "string",
		default: "400",
	},
	topTitleValueLineHeight: {
		type: "number",
		default: 1,
	},
	topTitleValueLetterSpacing: {
		type: "number",
		default: 1,
	},
	topTitleValueTextTransform: {
		type: "string",
	},
	innerTitleValueFontFamily: {
		type: "string",
	},
	innerTitleValueFontSize: {
		type: "number",
	},
	innerTitleValueFontSizeMobile: {
		type: "number",
	},
	innerTitleValueFontSizeTablet: {
		type: "number",
	},
	innerTitleValueFontWeight: {
		type: "string",
		default: "400",
	},
	innerTitleValueLineHeight: {
		type: "number",
		default: 1,
	},
	innerTitleValueLetterSpacing: {
		type: "number",
		default: 1,
	},
	innerTitleValueTextTransform: {
		type: "string",
	},
	bottomTitleValueFontFamily: {
		type: "string",
	},
	bottomTitleValueFontSize: {
		type: "number",
	},
	bottomTitleValueFontSizeMobile: {
		type: "number",
	},
	bottomTitleValueFontSizeTablet: {
		type: "number",
	},
	bottomTitleValueFontWeight: {
		type: "string",
		default: "400",
	},
	bottomTitleValueLineHeight: {
		type: "number",
		default: 1,
	},
	bottomTitleValueLetterSpacing: {
		type: "number",
		default: 1,
	},
	bottomTitleValueTextTransform: {
		type: "string",
	},
	stripedHorizontalProgressBarAnimationTime: {
		type: "number",
		default: 20,
	},
	circularProgressBarBackgroundColor: {
		type: "string",
		default: "#d9d9d9",
	},
	circularProgressBarTrackColor: {
		type: "string",
		default: "#6665ae",
	},
	circularProgressBarTopTitleValueColor: {
		type: "string",
		default: "#333333",
	},
	circularProgressBarInnerValueColor: {
		type: "string",
		default: "#333333",
	},
	circularProgressBarBottomTitleValueColor: {
		type: "string",
		default: "#333333",
	},
	semiCircularProgressBarTopTitleValueColor: {
		type: "string",
		default: "#333333",
	},
	semiCircularProgressBarInnerValueColor: {
		type: "string",
		default: "#333333",
	},
	semiCircularProgressBarBottomTitleValueColor: {
		type: "string",
		default: "#333333",
	},
	circularProgressBarTrackStyle: {
		type: "string",
		default: "square",
	},
	circularTopTitleValueFontFamily: {
		type: "string",
	},
	circularTopTitleValueFontSize: {
		type: "number",
	},
	circularTopTitleValueFontSizeMobile: {
		type: "number",
	},
	circularTopTitleValueFontSizeTablet: {
		type: "number",
	},
	circularTopTitleValueFontWeight: {
		type: "string",
		default: "400",
	},
	circularTopTitleValueLineHeight: {
		type: "number",
		default: 1,
	},
	circularTopTitleValueLetterSpacing: {
		type: "number",
		default: 1,
	},
	circularTopTitleValueTextTransform: {
		type: "string",
	},
	circularBottomTitleValueFontFamily: {
		type: "string",
	},
	circularBottomTitleValueFontSize: {
		type: "number",
	},
	circularBottomTitleValueFontSizeMobile: {
		type: "number",
	},
	circularBottomTitleValueFontSizeTablet: {
		type: "number",
	},
	circularBottomTitleValueFontWeight: {
		type: "string",
		default: "400",
	},
	circularBottomTitleValueLineHeight: {
		type: "number",
		default: 1,
	},
	circularBottomTitleValueLetterSpacing: {
		type: "number",
		default: 1,
	},
	circularBottomTitleValueTextTransform: {
		type: "string",
	},
	circularInnerValueFontFamily: {
		type: "string",
	},
	circularInnerValueFontSize: {
		type: "number",
	},
	circularInnerValueFontSizeMobile: {
		type: "number",
	},
	circularInnerValueFontSizeTablet: {
		type: "number",
	},
	circularInnerValueFontWeight: {
		type: "string",
		default: "400",
	},
	circularInnerValueLineHeight: {
		type: "number",
		default: 1,
	},
	circularInnerValueLetterSpacing: {
		type: "number",
		default: 1,
	},
	semiCircularTopTitleValueFontFamily: {
		type: "string",
	},
	semiCircularTopTitleValueFontSize: {
		type: "number",
	},
	semiCircularTopTitleValueFontSizeMobile: {
		type: "number",
	},
	semiCircularTopTitleValueFontSizeTablet: {
		type: "number",
	},
	semiCircularTopTitleValueFontWeight: {
		type: "string",
		default: "400",
	},
	semiCircularTopTitleValueLineHeight: {
		type: "number",
		default: 1,
	},
	semiCircularTopTitleValueLetterSpacing: {
		type: "number",
		default: 1,
	},
	semiCircularTopTitleValueTextTransform: {
		type: "string",
	},
	semiCircularBottomTitleValueFontFamily: {
		type: "string",
	},
	semiCircularBottomTitleValueFontSize: {
		type: "number",
	},
	semiCircularBottomTitleValueFontSizeMobile: {
		type: "number",
	},
	semiCircularBottomTitleValueFontSizeTablet: {
		type: "number",
	},
	semiCircularBottomTitleValueFontWeight: {
		type: "string",
		default: "400",
	},
	semiCircularBottomTitleValueLineHeight: {
		type: "number",
		default: 1,
	},
	semiCircularBottomTitleValueLetterSpacing: {
		type: "number",
		default: 1,
	},
	semiCircularBottomTitleValueTextTransform: {
		type: "string",
	},
	semiCircularInnerValueFontFamily: {
		type: "string",
	},
	semiCircularInnerValueFontSize: {
		type: "number",
	},
	semiCircularInnerValueFontSizeMobile: {
		type: "number",
	},
	semiCircularInnerValueFontSizeTablet: {
		type: "number",
	},
	semiCircularInnerValueFontWeight: {
		type: "string",
		default: "400",
	},
	semiCircularInnerValueLineHeight: {
		type: "number",
		default: 1,
	},
	semiCircularInnerValueLetterSpacing: {
		type: "number",
		default: 1,
	},
	semiCircularProgressBarBackgroundColor: {
		type: "string",
		default: "#d9d9d9",
	},
	semiCircularProgressBarTrackColor: {
		type: "string",
		default: "#1a8cff",
	}
};

export default attributes;