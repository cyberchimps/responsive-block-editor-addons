import { number } from "prop-types";

const attributes = {
    block_id : {
        type: "string"
    },
    cookies_id: {
		type: "string",
		default : null,
	},
    blockTopPadding: {
        type: "number",
        default: 20
    },
    blockBottomPadding: {
        type: "number",
        default: 20
    },
    blockLeftPadding: {
        type: "number",
        default: 20
    },
    blockRightPadding: {
        type: "number",
        default: 20
    },
    blockTopPaddingMobile: {
        type: "number",
        default: 20
    },
    blockBottomPaddingMobile: {
        type: "number",
        default: 20
    },
    blockLeftPaddingMobile: {
        type: "number",
        default: 20
    },
    blockRightPaddingMobile: {
        type: "number",
        default: 20
    },
    blockTopPaddingTablet: {
        type: "number",
        default: 20
    },
    blockBottomPaddingTablet: {
        type: "number",
        default: 20
    },
    blockLeftPaddingTablet: {
        type: "number",
        default: 20
    },
    blockRightPaddingTablet: {
        type: "number",
        default: 20
    },
    blockTopMargin: {
        type: "number",
        default: 0
    },
    blockBottomMargin: {
        type: "number",
        default: 0
    },
    blockLeftMargin: {
        type: "number",
        default: 0
    },
    blockRightMargin: {
        type: "number",
        default: 0
    },
    blockTopMarginMobile: {
        type: "number",
        default: 0
    },
    blockBottomMarginMobile: {
        type: "number",
        default: 0
    },
    blockLeftMarginMobile: {
        type: "number",
        default: 0
    },
    blockRightMarginMobile: {
        type: "number",
        default: 0
    },
    blockTopMarginTablet: {
        type: "number",
        default: 0
    },
    blockBottomMarginTablet: {
        type: "number",
        default: 0
    },
    blockLeftMarginTablet: {
        type: "number",
        default: 0
    },
    blockRightMarginTablet: {
        type: "number",
        default: 0
    },
    blockZIndex: {
        type: "number",
        default: 0
    },
    contentBgColor: {
        type: "string",
        default: ""
    },
    contentColor: {
        type: "string",
        default: ""
    },
    contentFontFamily: {
        type: "string"
    },
    contentFontSize: {
        type: "number",
        default: 16
    },
    contentFontSizeMobile: {
        type: "number",
        dfeault: 16
    },
    contentFontSizeTablet: {
        type: "number",
        dfeault: 16
    },
    contentFontWeight: {
        type: "string",
        default: "600"
    },
    contentLineHeight: {
        type: "number",
        default: 1
    },
    contentLetterSpacing: {
        type: "number",
        default: 0
    },
    contentPaddingVertical: {
        type: "number",
        default: 20
    },
    contentPaddingHorizontal: {
        type: "number",
        default: 20
    },
    contentPaddingVerticalMobile: {
        type: "number",
        default: 2
    },
    contentPaddingHorizontalMobile: {
        type: "number",
        default: 2
    },
    contentPaddingVerticalTablet: {
        type: "number",
        default: 5
    },
    contentPaddingHorizontalTablet: {
        type: "number",
        default: 5
    },
    cookies: {
        type: "boolean",
        default: false,
    },
    cookie_id: {
        type: "string",
        default: null
    },
    close_cookies_days: {
        type: "number",
        default: 1
    },
    headingTag: {
        type: "string",
        default: "h4"
    },
    icon: {
        type: "html",
        default: "fa fa-window-close"
    },
    layout: {
        type: "string",
        default: "modern"
    },
    noticeAlignment: {
        type: "string",
        default: "left"
    },
    noticeBoxColor : {
        type: "string",
        default: "#FFD54F"
    },
    noticeContent: {
        type: "string",
        default: ""
    },
    noticeDismiss: {
        type: "string",
        default: ""
    },
    noticeTitle: {
        type: "string",
        default: "Notice Title"
    },
    noticeType: {
        type: "string",
        default: "default",
    },
    titleColor: {
        type: "string",
        default: ""
    },
    titleFontFamily: {
        type: "string"
    },
    titleFontSize: {
        type: "number",
        default: 20
    },
    titleFontSizeMobile: {
        type: "number",
        default: 20
    },
    titleFontSizeTablet: {
        type: "number",
        default: 20
    },
    titleFontWeight: {
        type: "string",
        default: "600"
    },
    titleLineHeight: {
        type: "number",
        default: 1
    },
    titleLetterSpacing: {
        type: "number",
        default: 0
    },
    titlePaddingVertical: {
        type: "number",
        default: 15
    },
    titlePaddingHorizontal: {
        type: "number",
        default: 15
    },
    titlePaddingVerticalMobile: {
        type: "number",
        default: 2
    },
    titlePaddingHorizontalMobile: {
        type: "number",
        default: 2
    },
    titlePaddingVerticalTablet: {
        type: "number",
        default: 5
    },
    titlePaddingHorizontalTablet: {
        type: "number",
        default: 5
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
}

export default attributes;