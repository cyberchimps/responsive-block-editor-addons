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
	horizontalProgressBarTopRadius: {
    type: "number",
    default: 0,
  },
  horizontalProgressBarRightRadius: {
    type: "number",
    default: 0,
  },
  horizontalProgressBarBottomRadius: {
    type: "number",
    default: 0,
  },
  horizontalProgressBarLeftRadius: {
    type: "number",
    default: 0,
  },
  horizontalProgressBarTopRadiusTablet: {
    type: "number",
    default: 0,
  },
  horizontalProgressBarRightRadiusTablet: {
    type: "number",
    default: 0,
  },
  horizontalProgressBarBottomRadiusTablet: {
    type: "number",
    default: 0,
  },
  horizontalProgressBarLeftRadiusTablet: {
    type: "number",
    default: 0,
  },
  horizontalProgressBarTopRadiusMobile: {
    type: "number",
    default: 0,
  },
  horizontalProgressBarRightRadiusMobile: {
    type: "number",
    default: 0,
  },
  horizontalProgressBarBottomRadiusMobile: {
    type: "number",
    default: 0,
  },
  horizontalProgressBarLeftRadiusMobile: {
    type: "number",
    default: 0,
  },
  horizontalProgressBarIsRadiusControlConnected: {
		type: "boolean",
		default: false,
	},
  horizontalProgressBarIsRadiusValueUpdated: {
    type: "boolean",
    default: false,
  },
  horizontalProgressBarTopRadius: {
    type: "number",
    default: 0,
  },
  horizontalProgressBarRightRadius: {
    type: "number",
    default: 0,
  },
  horizontalProgressBarBottomRadius: {
    type: "number",
    default: 0,
  },
  horizontalProgressBarLeftRadius: {
    type: "number",
    default: 0,
  },
  horizontalProgressBarTopRadiusTablet: {
    type: "number",
    default: 0,
  },
  horizontalProgressBarRightRadiusTablet: {
    type: "number",
    default: 0,
  },
  horizontalProgressBarBottomRadiusTablet: {
    type: "number",
    default: 0,
  },
  horizontalProgressBarLeftRadiusTablet: {
    type: "number",
    default: 0,
  },
  horizontalProgressBarTopRadiusMobile: {
    type: "number",
    default: 0,
  },
  horizontalProgressBarRightRadiusMobile: {
    type: "number",
    default: 0,
  },
  horizontalProgressBarBottomRadiusMobile: {
    type: "number",
    default: 0,
  },
  horizontalProgressBarLeftRadiusMobile: {
    type: "number",
    default: 0,
  },
  horizontalProgressBarIsRadiusControlConnected: {
		type: "boolean",
		default: false,
	},
  horizontalProgressBarIsRadiusValueUpdated: {
    type: "boolean",
    default: false,
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
		default: "",
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
		default: "",
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
		default: "",
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
		default: "",
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
		default: "",
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
		default: "",
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
		default: "",
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
	},
	hideWidget: {
	  type: "boolean",
	  default: false,
	},
	hideWidgetTablet: {
	  type: "boolean",
	  default: false,
	},
	hideWidgetMobile: {
	  type: "boolean",
	  default: false,
	},
	z_index: {
		type: "number",
	  },
	  z_indexTablet: {
		type: "number",
	  },
	  z_indexMobile: {
		type: "number",
	  },
	  blockTopMargin: {
		type: "number",
		default: '',
	  },
	  blockBottomMargin: {
		type: "number",
		default: '',
	  },
	  blockLeftMargin: {
		type: "number",
		default: '',
	  },
	  blockRightMargin: {
		type: "number",
		default: '',
	  },
	  blockTopMarginTablet: {
		type: "number",
		default: '',
	  },
	  blockBottomMarginTablet: {
		type: "number",
		default: '',
	  },
	  blockLeftMarginTablet: {
		type: "number",
		default: '',
	  },
	  blockRightMarginTablet: {
		type: "number",
		default: '',
	  },
	  blockTopMarginMobile: {
		type: "number",
		default: '',
	  },
	  blockBottomMarginMobile: {
		type: "number",
		default: '',
	  },
	  blockLeftMarginMobile: {
		type: "number",
		default: '',
	  },
	  blockRightMarginMobile: {
		type: "number",
		default: '',
	  },
	  blockIsMarginControlConnected: {
		type: "boolean",
		default: false,
	  },
	  blockIsPaddingControlConnected: {
		type: "boolean",
		default: false,
	  },
	  blockTopPadding: {
		type: "number",
		default: '',
	  },
	  blockTopPaddingMobile: {
		type: "number",
		default: '',
	  },
	  blockTopPaddingTablet: {
		type: "number",
		default: '',
	  },
	  blockBottomPadding: {
		type: "number",
		default: '',
	  },
	  blockBottomPaddingMobile: {
		type: "number",
		default: '',
	  },
	  blockBottomPaddingTablet: {
		type: "number",
		default: '',
	  },
	  blockLeftPadding: {
		type: "number",
		default: '',
	  },
	  blockLeftPaddingMobile: {
		type: "number",
		default: '',
	  },
	  blockLeftPaddingTablet: {
		type: "number",
		default: '',
	  },
	  blockRightPadding: {
		type: "number",
		default: '',
	  },
	  blockRightPaddingMobile: {
		type: "number",
		default: '',
	  },
	  blockRightPaddingTablet: {
		type: "number",
		default: '',
	  },
	  blockIsTypographyColorValueUpdated: {
		type: 'boolean',
		default: false,
	  },
	  topTitleValueTypographyColor: {
		type: 'string',
		default: '#333333',
	  },
	  innerTitleValueTypographyColor: {
		type: 'string',
		default: '#333333',
	  },
	  bottomTitleValueTypographyColor: {
		type: 'string',
		default: '#333333',
	  },
	  circularTopTitleValueTypographyColor: {
		type: "string",
		default: '#333333',
	  },
	  circularInnerValueTypographyColor: {
		type: "string",
		default: '#333333',
	  },
	  circularBottomTitleValueTypographyColor: {
		type: "string",
		default: '#333333',
	  },
	  semiCircularTopTitleValueTypographyColor: {
		type: "string",
		default: '#333333',
	  },
	  semiCircularInnerValueTypographyColor: {
		type: "string",
		default: '#333333',
	  },
	  semiCircularBottomTitleValueTypographyColor: {
		type: "string",
		default: '#333333',
	  },
	topTitleValueFontStyle: {
		type: "string",
		default: "",
	},
	innerTitleValueFontStyle: {
		type: "string",
		default: "",
	},
	bottomTitleValueFontStyle: {
		type: "string",
		default: "",
	},
	circularTopTitleValueFontStyle: {
		type: "string",
		default: "",
	},
	circularInnerValueFontStyle: {
		type: "string",
		default: "",
	},
	circularBottomTitleValueFontStyle: {
		type: "string",
		default: "",
	},
	semiCircularTopTitleValueFontStyle: {
		type: "string",
		default: "",
	},
	semiCircularInnerValueFontStyle: {
		type: "string",
		default: "",
	},
	semiCircularBottomTitleValueFontStyle: {
		type: "string",
		default: "",
	},
	isPreview: {
		type: "boolean",
		default: false, 
	},
	topTitleValueTextDecoration: {
		type: "string",
		default: "",
	},
	innerTitleValueTextDecoration: {
		type: "string",
		default: "",
	},
	bottomTitleValueTextDecoration: {
		type: "string",
		default: "",
	},
	circularTopTitleValueTextDecoration: {
		type: "string",
		default: "",
	},
	circularInnerValueTextDecoration: {
		type: "string",
		default: "",
	},
	circularBottomTitleValueTextDecoration: {
		type: "string",
		default: "",
	},
	semiCircularTopTitleValueTextDecoration: {
		type: "string",
		default: "",
	},
	semiCircularInnerValueTextDecoration: {
		type: "string",
		default: "",
	},
	semiCircularBottomTitleValueTextDecoration: {
		type: "string",
		default: "",
	},
};

export default attributes;