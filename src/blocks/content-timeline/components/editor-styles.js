/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";
import { hexToRgba } from "../../../utils/index.js";

function EditorStyles(props) {
  const {
    block_id,
    timelinAlignment,
    dateColor,
    headingColor,
    contentColor,
    dateFontFamily,
    headingFontFamily,
    contentFontFamily,
    dateLineHeight,
    dateFontWeight,
    dateFontSize,
    headingLineHeight,
    headingFontWeight,
    headingFontSize,
    contentLineHeight,
    contentFontWeight,
    contentFontSize,
    itemBorderRadius,
    itemPadding,
    horizontalSpace,
    verticalSpace,
    horizontalSpaceMobile,
    verticalSpaceMobile,
    horizontalSpaceTablet,
    verticalSpaceTablet,
    itemBorderWidth,
    itemBorderStyle,
    itemBorderColor,
    backgroundColor,
    opacity,
    separatorColor,
    iconColor,
    separatorBg,
    separatorBorder,
    separatorFillColor,
    iconFocus,
    iconBgFocus,
    borderFocus,
    iconSize,
    connectorBgsize,
    borderwidth,
    separatorwidth,
    headingBottomMargin,
    headingBottomMarginMobile,
    headingBottomMarginTablet,
	dateFontSizeMobile,
	dateFontSizeTablet,
	headingFontSizeMobile,
	headingFontSizeTablet,
	contentFontSizeMobile,
	contentFontSizeTablet,
  } = props.attributes;

  var border_with_color = "13px solid" + backgroundColor;

  let imgopacity = opacity / 100;

  var selectors = {
    " .responsive-timeline__left .responsive-timeline__day-left .responsive-timeline__arrow:after": {
      "border-right": border_with_color,
    },

    " .responsive-timeline__right .responsive-timeline__day-right .responsive-timeline__arrow:after": {
      "border-left": border_with_color,
    },

    " .responsive-timeline__line": {
      "background-color": separatorColor,
    },

    " .responsive-timeline__line__inner": {
      "background-color": separatorFillColor,
    },

    " .responsive-timeline__main .responsive-block-editor-addons-ifb-icon svg": {
      color: iconColor,
      fill: iconColor,
    },

    " .responsive-timeline__marker": {
      "background-color": separatorBg,
      "border-color": separatorBorder,
    },

    " .responsive-timeline__main .responsive-timeline__marker.responsive-timeline__in-view-icon": {
      background: iconBgFocus,
      "border-color": borderFocus,
      color: iconFocus,
    },

    " .responsive-timeline__main .responsive-timeline__marker.responsive-timeline__in-view-icon svg": {
      fill: iconFocus,
    },

    " .responsive-timeline__main .responsive-timeline__marker.responsive-timeline__in-view-icon .responsive-timeline__icon-new": {
      color: iconFocus,
    },

    " .responsive-timeline__left-block .responsive-timeline__line": {
      left: connectorBgsize / 2 + "px",
    },

    " .responsive-timeline__right-block .responsive-timeline__line": {
      right: connectorBgsize / 2 + "px",
    },

    " .responsive-timeline__field.responsive-timeline__field-wrap": {
      "margin-bottom": generateCSSUnit(verticalSpace, "px"),
    },

    " .responsive-timeline__marker.responsive-timeline__out-view-icon, .responsive-timeline__marker.responsive-timeline__in-view-icon ": {
      "margin-left": generateCSSUnit(horizontalSpace, "px"),
      "margin-right": generateCSSUnit(horizontalSpace, "px"),
      "min-width": generateCSSUnit(connectorBgsize, "px"),
      "min-height": generateCSSUnit(connectorBgsize, "px"),
      "border-width": generateCSSUnit(borderwidth, "px"),
    },

    " .responsive-block-editor-addons-ifb-icon": {
      width: generateCSSUnit(iconSize, "px"),
      height: generateCSSUnit(iconSize, "px"),
    },

    " .responsive-timeline__events-inner-new": {
      "border-radius": generateCSSUnit(itemBorderRadius, "px"),
      "border-width": generateCSSUnit(itemBorderWidth, "px"),
      "border-style": itemBorderStyle,
      "border-color": itemBorderColor,
      padding: generateCSSUnit(itemPadding, "px"),
      "background-color": `${hexToRgba(backgroundColor || "#ffffff", imgopacity || 0)}`,
    },

    " .responsive-timeline__inner-date-new": {
      color: dateColor,
      "line-height": dateLineHeight,
      "font-weight": dateFontWeight,
      "font-size": generateCSSUnit(dateFontSize, "px"),
      "font-family": dateFontFamily,
    },

    " .responsive-timeline__heading": {
      color: headingColor,
      "line-height": headingLineHeight,
      "font-weight": headingFontWeight,
      "font-size": generateCSSUnit(headingFontSize, "px"),
      "font-family": headingFontFamily,
      "margin-bottom": generateCSSUnit(headingBottomMargin, "px"),
    },

    " .responsive-timeline-desc-content": {
      color: contentColor,
      "line-height": contentLineHeight,
      "font-weight": contentFontWeight,
      "font-size": generateCSSUnit(contentFontSize, "px"),
      "font-family": contentFontFamily,
    },

    " .responsive-timeline__date-new": {
      color: dateColor,
      "line-height": dateLineHeight,
      "font-weight": dateFontWeight,
      "font-size": generateCSSUnit(dateFontSize, "px"),
      "font-family": dateFontFamily,
    },

    " .responsive-timeline__line": {
      "background-color": separatorColor,
      width: generateCSSUnit(separatorwidth, "px"),
      "margin-left":
        timelinAlignment !== "center"
          ? generateCSSUnit(horizontalSpace, "px")
          : "",
      "margin-right":
        timelinAlignment !== "center"
          ? generateCSSUnit(horizontalSpace, "px")
          : "",
    },
  };

  var mobile_selectors = {
    " .responsive-timeline__center-block.responsive-timeline__responsive-mobile .responsive-timeline__line": {
      left: connectorBgsize / 2 + "px",
      right: connectorBgsize / 2 + "px",
    },

    " .responsive-timeline__left-block.responsive-timeline__responsive-mobile .responsive-timeline__line": {
      left: connectorBgsize / 2 + "px",
    },

    " .responsive-timeline__right-block.responsive-timeline__responsive-mobile .responsive-timeline__line": {
      right: connectorBgsize / 2 + "px",
    },
    " .responsive-timeline__field.responsive-timeline__field-wrap": {
      "margin-bottom": generateCSSUnit(verticalSpaceMobile, "px"),
    },

    " .responsive-timeline__marker.responsive-timeline__out-view-icon, .responsive-timeline__marker.responsive-timeline__in-view-icon ": {
      "margin-left": generateCSSUnit(horizontalSpaceMobile, "px"),
      "margin-right": generateCSSUnit(horizontalSpaceMobile, "px"),
    },
    " .responsive-timeline__date-new": {
		"font-size": generateCSSUnit(dateFontSizeMobile, "px"),
	},
	" .responsive-timeline-desc-content": {
		"font-size": generateCSSUnit(contentFontSizeMobile, "px"),	
	},
	" .responsive-timeline__heading": {
		"font-size": generateCSSUnit(headingFontSizeMobile, "px"),
		"margin-bottom": generateCSSUnit(headingBottomMarginMobile, "px"),
	},
	" .responsive-timeline__inner-date-new": {
		"font-size": generateCSSUnit(dateFontSizeMobile, "px"),
	},
  };

  var tablet_selectors = {
    " .responsive-timeline__center-block.responsive-timeline__responsive-tablet .responsive-timeline__line": {
      left: connectorBgsize / 2 + "px",
      right: connectorBgsize / 2 + "px",
    },

    " .responsive-timeline__left-block.responsive-timeline__responsive-tablet .responsive-timeline__line": {
      left: connectorBgsize / 2 + "px",
    },

    " .responsive-timeline__right-block.responsive-timeline__responsive-tablet .responsive-timeline__line": {
      right: connectorBgsize / 2 + "px",
    },
    " .responsive-timeline__field.responsive-timeline__field-wrap": {
      "margin-bottom": generateCSSUnit(verticalSpaceTablet, "px"),
    },

    " .responsive-timeline__marker.responsive-timeline__out-view-icon, .responsive-timeline__marker.responsive-timeline__in-view-icon ": {
      "margin-left": generateCSSUnit(horizontalSpaceTablet, "px"),
      "margin-right": generateCSSUnit(horizontalSpaceTablet, "px"),
    },
    " .responsive-timeline__date-new": {
		"font-size": generateCSSUnit(dateFontSizeTablet, "px"),
	},
	" .responsive-timeline-desc-content": {
		"font-size": generateCSSUnit(contentFontSizeTablet, "px"),	
	},
	" .responsive-timeline__heading": {
		"font-size": generateCSSUnit(headingFontSizeTablet, "px"),
		"margin-bottom": generateCSSUnit(headingBottomMarginTablet, "px"),
	},
	" .responsive-timeline__inner-date-new": {
		"font-size": generateCSSUnit(dateFontSizeTablet, "px"),
	},
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-content-timeline.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
