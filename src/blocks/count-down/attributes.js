const attributes = {

  block_id: {
	type: "string",
  },
  date: {
	type: "string",
	source: "attribute",
	selector: ".responsive-block-editor-addons-countdown-get-date",
	attribute: "data-date",
  },
  days: {
	type: "string",
	source: "text",
	selector: ".responsive-block-editor-addons-countdown-digits-days",
	default: "29",
  },
  hours: {
	type: "string",
	source: "text",
	selector: ".responsive-block-editor-addons-countdown-digits-hours",
	default: "23",
  },
  minutes: {
	type: "string",
	source: "text",
	selector: ".responsive-block-editor-addons-countdown-digits-minutes",
	default: "59",
  },
  seconds: {
	type: "string",
	source: "text",
	selector: ".responsive-block-editor-addons-countdown-digits-seconds",
	default: "59",
  },
  digitDaysLabel: {
	type: "string",
	default: "Days",
  },
  digitHoursLabel: {
	type: "string",
	default: "Hours",
  },
  digitMinutesLabel: {
	type: "string",
	default: "Minutes",
  },
  digitSecondsLabel: {
	type: "string",
	default: "Seconds",
  },
  showDigitLabels: {
	type: "boolean",
	default: true,
  },
  showDaysBox: {
	type: "boolean",
	default: true,
  },
  showHoursBox: {
	type: "boolean",
	default: true,
  },
  showMinutesBox: {
	type: "boolean",
	default: true,
  },
  showSecondsBox: {
	type: "boolean",
	default: true,
  },
  digitFontFamily: {
	type: "string",
  },
  digitFontSize: {
	type: "number",
	default: 48,
  },
  digitFontSizeMobile: {
	type: "number",
	default: 14,
  },
  digitFontSizeTablet: {
	type: "number",
	default: 28,
  },
  digitFontWeight: {
	type: "string",
	default: "500",
  },
  digitLetterSpacing: {
	type: "number",
	default: 1,
  },
  digitLineHeight: {
	type: "number",
	default: 2,
  },
  digitColor: {
	type: "string",
	default: "#fff",
  },
  labelFontFamily: {
	type: "string",
  },
  labelFontSize: {
	type: "number",
	default: 14,
  },
  labelFontSizeMobile: {
	type: "number",
	default: 12,
  },
  labelFontSizeTablet: {
	type: "number",
	default: 14,
  },
  labelColor: {
	type: "string",
	default: "#fff",
  },
  labelLineHeight: {
	type: "number",
	default: 2,
  },
  labelFontWeight: {
	type: "string",
	default: "500",
  },
  labelLeftPadding: {
	type: "number",
	default: 0,
  },
  labelLetterSpacing: {
	type: "number",
	default: 1,
  },
  boxItemMarginTop: {
	type: "number",
	default: 0,
  },
  boxItemMarginRight: {
	type: "number",
	default: 0,
  },
  boxItemMarginBottom: {
	type: "number",
	default: 0,
  },
  boxItemMarginLeft: {
	type: "number",
	default: 0,
  },
  boxItemMarginTopTablet: {
	type: "number",
	default: 0,
  },
  boxItemMarginRightTablet: {
	type: "number",
	default: 0,
  },
  boxItemMarginBottomTablet: {
	type: "number",
	default: 0,
  },
  boxItemMarginLeftTablet: {
	type: "number",
	default: 0,
  },
  boxItemMarginTopMobile: {
	type: "number",
	default: 0,
  },
  boxItemMarginRightMobile: {
	type: "number",
	default: 0,
  },
  boxItemMarginBottomMobile: {
	type: "number",
	default: 0,
  },
  boxItemMarginLeftMobile: {
	type: "number",
	default: 0,
  },
  boxItemTextAlign: {
	type: "string",
	default: "center",
  },
  boxHeight: {
	type: "number",
  },
  boxWidth: {
	type: "number",
	default: 140,
  },
  boxMargin: {
	type: "number",
	default: 10,
  },
  boxHeightMobile: {
	type: "number",
  },
  boxWidthMobile: {
	type: "number",
	default: 80,
  },
  boxMarginMobile: {
	type: "number",
	default: 8,
  },
  boxHeightTablet: {
	type: "number",
  },
  boxWidthTablet: {
	type: "number",
	default: 140,
  },
  boxMarginTablet: {
	type: "number",
	default: 10,
  },
  boxTopPadding: {
	type: "number",
	default: 0,
  },
  boxRightPadding: {
	type: "number",
	default: 0,
  },
  boxBottomPadding: {
	type: "number",
	default: 10,
  },
  boxLeftPadding: {
	type: "number",
	default: 0,
  },
  boxTopPaddingMobile: {
	type: "number",
	default: 0,
  },
  boxRightPaddingMobile: {
	type: "number",
	default: 0,
  },
  boxBottomPaddingMobile: {
	type: "number",
	default: 10,
  },
  boxLeftPaddingMobile: {
	type: "number",
	default: 0,
  },
  boxTopPaddingTablet: {
	type: "number",
	default: 0,
  },
  boxRightPaddingTablet: {
	type: "number",
	default: 0,
  },
  boxBottomPaddingTablet: {
	type: "number",
	default: 10,
  },
  boxLeftPaddingTablet: {
	type: "number",
	default: 0,
  },
  showBoxBorder: {
	type: "boolean",
	default: true,
  },
  boxBorderColor: {
	type: "string",
	default: "000",
  },
  boxBorderSize: {
	type: "number",
	default: 0,
  },
  boxBorderStyle: {
	type: "string",
	default: "solid",
  },
  borderRadiusTopLeft: {
	type: "number",
	default: 0,
  },
  borderRadiusTopRight: {
	type: "number",
	default: 0,
  },
  borderRadiusBottomRight: {
	type: "number",
	default: 0,
  },
  borderRadiusBottomLeft: {
	type: "number",
	default: 0,
  },
  showBoxShadow: {
	type: "boolean",
	default: true,
  },
  boxShadowHOffset: {
	type: "number",
	default: 0,
  },
  boxShadowVOffset: {
	type: "number",
	default: 0,
  },
  boxShadowBlur: {
	type: "number",
	default: 0,
  },
  boxShadowPosition: {
	type: 'string',
	default: 'outset',
  },
  boxShadowSpread: {
	type: "number",
	default: 0,
  },
  boxShadowColor: {
	type: "string",
	default: "#000",
  },
  boxBackgroundColor: {
	type: "string",
	default: "#6EC1E4",
  },
  containerMarginTop: {
	type: "number",
	default: 0,
  },
  containerMarginRight: {
	type: "number",
	default: 0,
  },
  containerMarginBottom: {
	type: "number",
	default: 0,
  },
  containerMarginLeft: {
	type: "number",
	default: 0,
  },
  containerTopPadding: {
	type: "number",
	default: 0,
  },
  containerRightPadding: {
	type: "number",
	default: 0,
  },
  containerBottomPadding: {
	type: "number",
	default: 0,
  },
  containerLeftPadding: {
	type: "number",
	default: 0,
  },
  containerMarginTopTablet: {
	type: "number",
	default: 0,
  },
  containerMarginRightTablet: {
	type: "number",
	default: 0,
  },
  containerMarginBottomTablet: {
	type: "number",
	default: 0,
  },
  containerMarginLeftTablet: {
	type: "number",
	default: 0,
  },
  containerTopPaddingTablet: {
	type: "number",
	default: 0,
  },
  containerRightPaddingTablet: {
	type: "number",
	default: 0,
  },
  containerBottomPaddingTablet: {
	type: "number",
	default: 0,
  },
  containerLeftPaddingTablet: {
	type: "number",
	default: 0,
  },
  containerMarginTopMobile: {
	type: "number",
	default: 0,
  },
  containerMarginRightMobile: {
	type: "number",
	default: 0,
  },
  containerMarginBottomMobile: {
	type: "number",
	default: 0,
  },
  containerMarginLeftMobile: {
	type: "number",
	default: 0,
  },
  containerTopPaddingMobile: {
	type: "number",
	default: 0,
  },
  containerRightPaddingMobile: {
	type: "number",
	default: 0,
  },
  containerBottomPaddingMobile: {
	type: "number",
	default: 0,
  },
  containerLeftPaddingMobile: {
	type: "number",
	default: 0,
  },
  justifyItems: {
	type: "string",
	default: "center",
  },
  displayInline: {
	type: "boolean",
	default: false,
  },
  block_id: {
	type: "string",
  },
  stackOnMobile: {
	type: "boolean",
	default: false,
  }
}

export default attributes