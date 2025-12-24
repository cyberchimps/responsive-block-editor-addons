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
    hoverboxShadowColor,
    hoverboxShadowPosition,
    hoverboxShadowHOffset,
    hoverboxShadowVOffset,
    hoverboxShadowBlur,
    hoverboxShadowSpread,
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
  blockTopRadius,
  blockRightRadius,
  blockBottomRadius,
  blockLeftRadius,
  blockTopRadiusTablet,
  blockRightRadiusTablet,
  blockBottomRadiusTablet,
  blockLeftRadiusTablet,
  blockTopRadiusMobile,
  blockRightRadiusMobile,
  blockBottomRadiusMobile,
  blockLeftRadiusMobile,
  headingTypographyColor,
  authorTypographyColor,
  contentTypographyColor,
  headingBottomSpacing,
  headingBottomSpacingMobile,
  headingBottomSpacingTablet,
  authorBottomSpacing,
  authorBottomSpacingMobile,
  authorBottomSpacingTablet,
  contentBottomSpacing,
  contentBottomSpacingMobile,
  contentBottomSpacingTablet,
  dateTextTransform,
  dateFontStyle,
  headingTextTransform,
  headingFontStyle,
  authorTextTransform,
  authorFontStyle,
  contentTextTransform,
  contentFontStyle,
  continueTextTransform,
  continueFontStyle,
  dateTextDecoration,
  headingTextDecoration,
  authorTextDecoration,
  contentTextDecoration,
  continueTextDecoration,
  } = props.attributes;

  var boxShadowPositionCSS = boxShadowPosition;
  var hoverboxShadowPositionCSS = hoverboxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }
  if ("outset" === hoverboxShadowPosition) {
    hoverboxShadowPositionCSS = "";
  }
  const isOn = responsive_globals?.is_responsive_conditions_on ?? 1;

  var selectors = {
    " ": {
      "opacity": hideWidget && isOn ? 0.2 : 1,
      'padding-top': generateCSSUnit(blockTopPadding, "px"),
      'padding-right': generateCSSUnit(blockRightPadding, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPadding, "px"),
      'padding-left': generateCSSUnit(blockLeftPadding, "px"),
      'margin-top': generateCSSUnit(blockTopMargin, "px"),
      'margin-right': generateCSSUnit(blockRightMargin, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMargin, "px"),
      'margin-left': generateCSSUnit(blockLeftMargin, "px"),
    },
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
      "box-shadow": hoverboxShadowColor !== '' ?
        generateCSSUnit(hoverboxShadowHOffset, "px") +
        " " +
        generateCSSUnit(hoverboxShadowVOffset, "px") +
        " " +
        generateCSSUnit(hoverboxShadowBlur, "px") +
        " " +
        generateCSSUnit(hoverboxShadowSpread, "px") +
        " " +
        hoverboxShadowColor +
        " " +
        hoverboxShadowPositionCSS : '',
    },
    " .responsive-block-editor-addons-timeline__link_parent .responsive-block-editor-addons-timeline__link": {
      color: `${continueColor} !important`,
      "line-height": continueLineHeight,
      "font-weight": continueFontWeight,
      "font-size": generateCSSUnit(continueFontSize, "px"),
      "font-family": continueFontFamily,
      "text-transform": continueTextTransform,
      "text-decoration": continueTextDecoration,
      "font-style": continueFontStyle,
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
      "border-top-left-radius": generateCSSUnit(blockTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadius, "px"),
    },
    " .responsive-block-editor-addons-timeline__date-hide.responsive-block-editor-addons-timeline__date-inner .responsive-block-editor-addons-timeline__date-new": {
      "line-height": dateLineHeight,
      "font-weight": dateFontWeight,
      "font-size": generateCSSUnit(dateFontSize, "px"),
      "font-family": dateFontFamily,
      "text-transform": dateTextTransform,
      "text-decoration": dateTextDecoration,
      "font-style": dateFontStyle,
    },
    " .responsive-block-editor-addons-content": {
      padding: generateCSSUnit(contentPadding, "px"),
    },
    " .responsive-block-editor-addons-block-post-timeline-title": {
      "margin-bottom": generateCSSUnit(headingBottomSpacing, "px"),
    },
    " .responsive-block-editor-addons-block-post-timeline-title .responsive-block-editor-addons-block-post-timeline-title-heading": {
      color: headingTypographyColor ? headingTypographyColor + "!important" : "#333",
      "line-height": headingLineHeight,
      "font-weight": headingFontWeight,
      "font-size": generateCSSUnit(headingFontSize, "px"),
      "font-family": headingFontFamily,
      "text-transform": headingTextTransform,
      "text-decoration": headingTextDecoration,
      "font-style": headingFontStyle,
    },
    " .responsive-block-editor-addons-block-post-timeline-byline": {
      "margin-bottom": generateCSSUnit(authorBottomSpacing, "px"),
    },
    " .responsive-block-editor-addons-block-post-timeline-author .responsive-block-editor-addons-text-link": {
      color: authorTypographyColor ? authorTypographyColor + "!important" : "#626e81",
      "line-height": authorLineHeight,
      "font-weight": authorFontWeight,
      "font-size": generateCSSUnit(authorFontSize, "px"),
      "font-family": authorFontFamily,
      "text-transform": authorTextTransform,
      "text-decoration": authorTextDecoration,
      "font-style": authorFontStyle,
    },
    " .responsive-block-editor-addons-block-post-timeline-excerpt .responsive-block-editor-addons-timeline__post": {
      color: contentTypographyColor ? contentTypographyColor + "!important" : "#333",
      "font-weight": contentFontWeight,
      "font-size": generateCSSUnit(contentFontSize, "px"),
      "font-family": contentFontFamily,
      "margin-bottom": generateCSSUnit(contentBottomSpacing, "px"),
      "text-transform": contentTextTransform,
      "text-decoration": contentTextDecoration,
      "font-style": contentFontStyle,
    },
    " .responsive-block-editor-addons-timeline__date-new.responsive-block-editor-addons-timeline__date-outer": {
      "line-height": dateLineHeight,
      "font-weight": dateFontWeight,
      "font-size": generateCSSUnit(dateFontSize, "px"),
      "font-family": dateFontFamily,
      "text-transform": dateTextTransform,
      "text-decoration": dateTextDecoration,
      "font-style": dateFontStyle,
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
    " ": {
      "opacity": hideWidgetMobile && isOn ? 0.2 : 1,
      'padding-top': generateCSSUnit(blockTopPaddingMobile, "px"),
      'padding-right': generateCSSUnit(blockRightPaddingMobile, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPaddingMobile, "px"),
      'padding-left': generateCSSUnit(blockLeftPaddingMobile, "px"),
      'margin-top': generateCSSUnit(blockTopMarginMobile, "px"),
      'margin-right': generateCSSUnit(blockRightMarginMobile, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMarginMobile, "px"),
      'margin-left': generateCSSUnit(blockLeftMarginMobile, "px"),
    },
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
		"margin-bottom": generateCSSUnit(contentBottomSpacingMobile, "px"),
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
		"margin-bottom": generateCSSUnit(headingBottomSpacingMobile, "px"),
	},
	" .responsive-block-editor-addons-block-post-timeline-byline": {
		"margin-bottom": generateCSSUnit(authorBottomSpacingMobile, "px"),
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
  " .responsive-block-editor-addons-timeline__events-new .responsive-block-editor-addons-timeline__events-inner-new": {
      "border-top-left-radius": generateCSSUnit(blockTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusMobile, "px"),
    },
  };

  var tablet_selectors = {
    " ": {
      "opacity": hideWidgetTablet && isOn ? 0.2 : 1,
      'padding-top': generateCSSUnit(blockTopPaddingTablet, "px"),
      'padding-right': generateCSSUnit(blockRightPaddingTablet, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPaddingTablet, "px"),
      'padding-left': generateCSSUnit(blockLeftPaddingTablet, "px"),
      'margin-top': generateCSSUnit(blockTopMarginTablet, "px"),
      'margin-right': generateCSSUnit(blockRightMarginTablet, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMarginTablet, "px"),
      'margin-left': generateCSSUnit(blockLeftMarginTablet, "px"),
    },
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
		"margin-bottom": generateCSSUnit(contentBottomSpacingTablet, "px"),
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
		"margin-bottom": generateCSSUnit(headingBottomSpacingTablet, "px"),
	},
	" .responsive-block-editor-addons-block-post-timeline-byline": {
		"margin-bottom": generateCSSUnit(authorBottomSpacingTablet, "px"),
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
  " .responsive-block-editor-addons-timeline__events-new .responsive-block-editor-addons-timeline__events-inner-new": {
      "border-top-left-radius": generateCSSUnit(blockTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusTablet, "px"),
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
