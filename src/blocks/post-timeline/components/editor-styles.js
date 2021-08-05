/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";

function EditorStyles(props) {
  const {
    block_id,
    bgColor,
    textColor,
    contentPadding,
    authorSpace,
    excerptSpace,
    blockSpace,
    headingSpace,
    headingColor,
    authorColor,
    continueColor,
    dateFontFamily,
    headingFontFamily,
    authorFontFamily,
    contentFontFamily,
    continueFontFamily,
    connectorColor,
    dateFontSize,
    dateFontWeight,
    dateLineHeight,
    headingFontSize,
    headingFontWeight,
    headingLineHeight,
    authorFontSize,
    authorFontWeight,
    authorLineHeight,
    contentFontSize,
    contentFontWeight,
    contentLineHeight,
    continueFontSize,
    continueFontWeight,
    continueLineHeight,
    iconSize,
    bgSize,
    borderWidth,
    connectorWidth,
    iconColor,
    separatorBg,
    separatorBorder,
    separatorFillColor,
    iconFocus,
    iconBgFocus,
    borderFocus,
    continuebgColor,
    borderColor,
    hColor,
    continuebghColor,
    borderHColor,
    borderRadius,
    verSpace,
    horSpace,
    boxShadowColor,
    boxShadowPosition,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
	dateFontSizeMobile,
	dateFontSizeTablet,
	headingFontSizeMobile,
	headingFontSizeTablet,
	authorFontSizeMobile,
	authorFontSizeTablet,
	contentFontSizeMobile,
	contentFontSizeTablet,
	continueFontSizeMobile,
	continueFontSizeTablet,
	contentPaddingTablet,
	contentPaddingMobile,
	blockSpaceTablet,
	blockSpaceMobile,
	headingSpaceTablet,
	headingSpaceMobile,
	authorSpaceTablet,
	authorSpaceMobile,
	excerptSpaceTablet,
	excerptSpaceMobile,
	verSpaceTablet,
	verSpaceMobile,
	horSpaceTablet,
	horSpaceMobile,
  } = props.attributes;

  var boxShadowPositionCSS = boxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }

  var selectors = {
    " .responsive-block-editor-addons-timeline__icon-new svg": {
      width: generateCSSUnit(iconSize, "px"),
      height: generateCSSUnit(iconSize, "px"),
      fill: iconColor,
    },
    " .responsive-block-editor-addons-timeline__marker": {
      border: generateCSSUnit(borderWidth, "px solid"),
      "border-color": separatorBorder,
      "background-color": separatorBg,
      "min-width": generateCSSUnit(bgSize, "px"),
      "min-height": generateCSSUnit(bgSize, "px"),
    },    
    " .responsive-block-editor-addons-timeline__line": {
      "background-color": connectorColor,
      width: generateCSSUnit(connectorWidth, "px"),
    },
    " .responsive-block-editor-addons-timeline__link_parent": {
      "background-color": continuebgColor,
      border: `1px solid ${borderColor}`,
      "box-shadow":
        generateCSSUnit(boxShadowHOffset, "px") +
        " " +
        generateCSSUnit(boxShadowVOffset, "px") +
        " " +
        generateCSSUnit(boxShadowBlur, "px") +
        " " +
        generateCSSUnit(boxShadowSpread, "px") +
        " " +
        boxShadowColor +
        " " +
        boxShadowPositionCSS,
    },
    " .responsive-block-editor-addons-timeline__link_parent:hover": {
      "background-color": continuebghColor,
      border: `1px solid ${borderHColor}`,
    },
    " .responsive-block-editor-addons-timeline__link_parent .responsive-block-editor-addons-timeline__link": {
      color: `${continueColor} !important`,
      "line-height": continueLineHeight,
      "font-weight": continueFontWeight,
      "font-size": generateCSSUnit(continueFontSize, "px"),
      "font-family": continueFontFamily,
    },
    " .responsive-block-editor-addons-timeline__link_parent:hover .responsive-block-editor-addons-timeline__link": {
      color: `${hColor} !important`,
    },
    ".responsive-block-editor-addons-timeline__center-block .responsive-block-editor-addons-timeline__marker": {
      "margin-left": generateCSSUnit(horSpace, "px"),
      "margin-right": generateCSSUnit(horSpace, "px"),
    },
    ".responsive-block-editor-addons-timeline__left-block .responsive-block-editor-addons-timeline__day-new": {
      "margin-left": generateCSSUnit(horSpace, "px"),
    },
    ".responsive-block-editor-addons-timeline__right-block .responsive-block-editor-addons-timeline__day-new": {
      "margin-right": generateCSSUnit(horSpace, "px"),
    },
    " .responsive-block-editor-addons-timeline__field.responsive-block-editor-addons-timeline__field-wrap": {
      "margin-bottom": generateCSSUnit(verSpace, "px"),
    },
    " .responsive-block-editor-addons-timeline__left-block .responsive-block-editor-addons-timeline__line": {
      left: `calc(${bgSize / 2}px)`,
    },
    " .responsive-block-editor-addons-timeline__right-block .responsive-block-editor-addons-timeline__line": {
      right: `calc(${bgSize / 2}px)`,
    },
    " .responsive-block-editor-addons-timeline__main .responsive-block-editor-addons-timeline__post p": {
      "line-height": contentLineHeight,
    },
    " .responsive-block-editor-addons-timeline__events-new": {
      "margin-bottom": generateCSSUnit(blockSpace, "px"),
    },
    " .responsive-block-editor-addons-timeline__events-new .responsive-block-editor-addons-timeline__events-inner-new": {
      "background-color": bgColor ? bgColor : "#e4e4e4",
      "border-radius": generateCSSUnit(borderRadius, "px"),
    },
    " .responsive-block-editor-addons-timeline__date-hide.responsive-block-editor-addons-timeline__date-inner .responsive-block-editor-addons-timeline__date-new": {
      "line-height": dateLineHeight,
      "font-weight": dateFontWeight,
      "font-size": generateCSSUnit(dateFontSize, "px"),
      "font-family": dateFontFamily,
    },
    " .responsive-block-editor-addons-content": {
      padding: generateCSSUnit(contentPadding, "px"),
    },
    " .responsive-block-editor-addons-block-post-timeline-title": {
      "margin-bottom": generateCSSUnit(headingSpace, "px"),
    },
    " .responsive-block-editor-addons-block-post-timeline-title .responsive-block-editor-addons-block-post-timeline-title-heading": {
      color: headingColor ? headingColor + "!important" : "#333",
      "line-height": headingLineHeight,
      "font-weight": headingFontWeight,
      "font-size": generateCSSUnit(headingFontSize, "px"),
      "font-family": headingFontFamily,
    },
    " .responsive-block-editor-addons-block-post-timeline-byline": {
      "margin-bottom": generateCSSUnit(authorSpace, "px"),
    },
    " .responsive-block-editor-addons-block-post-timeline-author .responsive-block-editor-addons-text-link": {
      color: authorColor ? authorColor + "!important" : "#626e81",
      "line-height": authorLineHeight,
      "font-weight": authorFontWeight,
      "font-size": generateCSSUnit(authorFontSize, "px"),
      "font-family": authorFontFamily,
    },
    " .responsive-block-editor-addons-block-post-timeline-excerpt .responsive-block-editor-addons-timeline__post": {
      color: textColor ? textColor + "!important" : "#333",
      "font-weight": contentFontWeight,
      "font-size": generateCSSUnit(contentFontSize, "px"),
      "font-family": contentFontFamily,
      "margin-bottom": generateCSSUnit(excerptSpace, "px"),
    },
    " .responsive-block-editor-addons-timeline__date-new.responsive-block-editor-addons-timeline__date-outer": {
      "line-height": dateLineHeight,
      "font-weight": dateFontWeight,
      "font-size": generateCSSUnit(dateFontSize, "px"),
      "font-family": dateFontFamily,
    },


    " .responsive-block-editor-addons-timeline__line__inner": {
      "background-color": separatorFillColor,
    },
    " .responsive-block-editor-addons-timeline__marker.responsive-block-editor-addons-timeline__in-view-icon": {
      background: iconBgFocus,
      "border-color": borderFocus,
      color: iconFocus,
    },

    " .responsive-block-editor-addons-timeline__marker.responsive-block-editor-addons-timeline__in-view-icon svg": {
      fill: iconFocus,
    },

    " .responsive-block-editor-addons-timeline__marker.responsive-block-editor-addons-timeline__in-view-icon .responsive-block-editor-addons-timeline__icon-new": {
      color: iconFocus,
    },
  };

  var mobile_selectors = {
    " .responsive-block-editor-addons-timeline__center-block.responsive-block-editor-addons-timeline__responsive-mobile .responsive-block-editor-addons-timeline__line": {
      left: `calc(${bgSize}px/2)`,
      right: `calc(${bgSize}px/2)`,
    },
    " .responsive-block-editor-addons-timeline__left-block.responsive-block-editor-addons-timeline__responsive-mobile .responsive-block-editor-addons-timeline__line": {
      left: `calc(${bgSize}px/2)`,
    },
    " .responsive-block-editor-addons-timeline__right-block.responsive-block-editor-addons-timeline__responsive-mobile .responsive-block-editor-addons-timeline__line": {
      right: `calc(${bgSize}px/2)`,
    },
	" .responsive-block-editor-addons-timeline__link_parent .responsive-block-editor-addons-timeline__link": {
		"font-size": generateCSSUnit(continueFontSizeMobile, "px"),
	},
	" .responsive-block-editor-addons-timeline__date-hide.responsive-block-editor-addons-timeline__date-inner .responsive-block-editor-addons-timeline__date-new": {
		"font-size": generateCSSUnit(dateFontSizeMobile, "px"),
	},
	" .responsive-block-editor-addons-block-post-timeline-title .responsive-block-editor-addons-block-post-timeline-title-heading": {
		"font-size": generateCSSUnit(headingFontSizeMobile, "px"),
	},
	" .responsive-block-editor-addons-block-post-timeline-author .responsive-block-editor-addons-text-link": {
		"font-size": generateCSSUnit(authorFontSizeMobile, "px"),
	},
	" .responsive-block-editor-addons-block-post-timeline-excerpt .responsive-block-editor-addons-timeline__post": {
		"font-size": generateCSSUnit(contentFontSizeMobile, "px"),
		"margin-bottom": generateCSSUnit(excerptSpaceMobile, "px"),
	},
	" .responsive-block-editor-addons-timeline__date-new.responsive-block-editor-addons-timeline__date-outer": {
		"font-size": generateCSSUnit(dateFontSizeMobile, "px"),
	},
	" .responsive-block-editor-addons-content": {
		"padding": generateCSSUnit(contentPaddingMobile, "px"),
	},
	" .responsive-block-editor-addons-timeline__events-new": {
		"margin-bottom": generateCSSUnit(blockSpaceMobile, "px"),
	},
	" .responsive-block-editor-addons-block-post-timeline-title": {
		"margin-bottom": generateCSSUnit(headingSpaceMobile, "px"),
	},
	" .responsive-block-editor-addons-block-post-timeline-byline": {
		"margin-bottom": generateCSSUnit(authorSpaceMobile, "px"),
	},
	" .responsive-block-editor-addons-timeline__field.responsive-block-editor-addons-timeline__field-wrap": {
		"margin-bottom": generateCSSUnit(verSpaceMobile, "px"),
	},
	".responsive-block-editor-addons-timeline__center-block .responsive-block-editor-addons-timeline__marker": {
		"margin-left": generateCSSUnit(horSpaceMobile, "px"),
		"margin-right": generateCSSUnit(horSpaceMobile, "px"),
	},
	".responsive-block-editor-addons-timeline__left-block .responsive-block-editor-addons-timeline__day-new": {
		"margin-left": generateCSSUnit(horSpaceMobile, "px"),
	},
	".responsive-block-editor-addons-timeline__right-block .responsive-block-editor-addons-timeline__day-new": {
		"margin-right": generateCSSUnit(horSpaceMobile, "px"),
	},
  };

  var tablet_selectors = {
    " .responsive-block-editor-addons-timeline__center-block.responsive-block-editor-addons-timeline__responsive-tablet .responsive-block-editor-addons-timeline__line": {
      left: `calc(${bgSize}px/2)`,
      right: `calc(${bgSize}px/2)`,
    },
    " .responsive-block-editor-addons-timeline__left-block.responsive-block-editor-addons-timeline__responsive-tablet .responsive-block-editor-addons-timeline__line": {
      left: `calc(${bgSize}px/2)`,
    },
    " .responsive-block-editor-addons-timeline__right-block.responsive-block-editor-addons-timeline__responsive-tablet .responsive-block-editor-addons-timeline__line": {
      right: `calc(${bgSize}px/2)`,
    },
	" .responsive-block-editor-addons-timeline__link_parent .responsive-block-editor-addons-timeline__link": {
		"font-size": generateCSSUnit(continueFontSizeTablet, "px"),
	},
	" .responsive-block-editor-addons-timeline__date-hide.responsive-block-editor-addons-timeline__date-inner .responsive-block-editor-addons-timeline__date-new": {
		"font-size": generateCSSUnit(dateFontSizeTablet, "px"),
	},
	" .responsive-block-editor-addons-block-post-timeline-title .responsive-block-editor-addons-block-post-timeline-title-heading": {
		"font-size": generateCSSUnit(headingFontSizeTablet, "px"),
	},
	" .responsive-block-editor-addons-block-post-timeline-author .responsive-block-editor-addons-text-link": {
		"font-size": generateCSSUnit(authorFontSizeTablet, "px"),
	},
	" .responsive-block-editor-addons-block-post-timeline-excerpt .responsive-block-editor-addons-timeline__post": {
		"font-size": generateCSSUnit(contentFontSizeTablet, "px"),
		"margin-bottom": generateCSSUnit(excerptSpaceTablet, "px"),
	},
	" .responsive-block-editor-addons-timeline__date-new.responsive-block-editor-addons-timeline__date-outer": {
		"font-size": generateCSSUnit(dateFontSizeTablet, "px"),
	},
	" .responsive-block-editor-addons-content": {
		"padding": generateCSSUnit(contentPaddingTablet, "px"),
	},
	" .responsive-block-editor-addons-timeline__events-new": {
		"margin-bottom": generateCSSUnit(blockSpaceTablet, "px"),
	},
	" .responsive-block-editor-addons-block-post-timeline-title": {
		"margin-bottom": generateCSSUnit(headingSpaceTablet, "px"),
	},
	" .responsive-block-editor-addons-block-post-timeline-byline": {
		"margin-bottom": generateCSSUnit(authorSpaceTablet, "px"),
	},
	" .responsive-block-editor-addons-timeline__field.responsive-block-editor-addons-timeline__field-wrap": {
		"margin-bottom": generateCSSUnit(verSpaceTablet, "px"),
	},
	".responsive-block-editor-addons-timeline__center-block .responsive-block-editor-addons-timeline__marker": {
		"margin-left": generateCSSUnit(horSpaceTablet, "px"),
		"margin-right": generateCSSUnit(horSpaceTablet, "px"),
	},
	".responsive-block-editor-addons-timeline__left-block .responsive-block-editor-addons-timeline__day-new": {
		"margin-left": generateCSSUnit(horSpaceTablet, "px"),
	},
	".responsive-block-editor-addons-timeline__right-block .responsive-block-editor-addons-timeline__day-new": {
		"margin-right": generateCSSUnit(horSpaceTablet, "px"),
	},
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-post-timeline.block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
