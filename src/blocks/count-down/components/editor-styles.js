/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";

function EditorStyles(props) {
  const {
    block_id,
    date,
    days,
    hours,
    minutes,
    seconds,
    digitDaysLabel,
    digitHoursLabel,
    digitMinutesLabel,
    digitSecondsLabel,
    showDigitLabels,
    showDaysBox,
    showHoursBox,
    showMinutesBox,
    showSecondsBox,
    digitFontFamily,
    digitFontSize,
    digitFontSizeMobile,
    digitFontSizeTablet,
    digitFontWeight,
    digitLetterSpacing,
    digitLineHeight,
    digitColor,
    labelFontFamily,
    labelFontSize,
    labelFontSizeMobile,
    labelFontSizeTablet,
    labelColor,
    labelLineHeight,
    labelFontWeight,
    labelLeftPadding,
    labelLetterSpacing,
    boxItemMarginTop,
    boxItemMarginRight,
    boxItemMarginBottom,
    boxItemMarginLeft,
    boxItemTextAlign,
    boxItemMarginTopTablet,
    boxItemMarginRightTablet,
    boxItemMarginBottomTablet,
    boxItemMarginLeftTablet,
    boxItemMarginTopMobile,
    boxItemMarginRightMobile,
    boxItemMarginBottomMobile,
    boxItemMarginLeftMobile,
    boxHeight,
    boxWidth,
    boxMargin,
    boxHeightMobile,
    boxWidthMobile,
    boxMarginMobile,
    boxHeightTablet,
    boxWidthTablet,
    boxMarginTablet,
    boxTopPadding,
    boxRightPadding,
    boxBottomPadding,
    boxLeftPadding,
    boxTopPaddingMobile,
    boxRightPaddingMobile,
    boxBottomPaddingMobile,
    boxLeftPaddingMobile,
    boxTopPaddingTablet,
    boxRightPaddingTablet,
    boxBottomPaddingTablet,
    boxLeftPaddingTablet,
    boxBorderSize,
    boxBorderStyle,
    boxBorderColor,
    boxShadowPosition,
    borderRadiusTopLeft,
    borderRadiusTopRight,
    borderRadiusBottomLeft,
    borderRadiusBottomRight,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    backgroundColor,
    boxShadowColor,
    containerTopPadding, 
    containerBottomPadding, 
    containerLeftPadding, 
    containerRightPadding,
    containerTopPaddingTablet, 
    containerBottomPaddingTablet, 
    containerLeftPaddingTablet, 
    containerRightPaddingTablet,
    containerTopPaddingMobile, 
    containerBottomPaddingMobile, 
    containerLeftPaddingMobile, 
    containerRightPaddingMobile,
    containerTopMargin, 
    containerBottomMargin, 
    containerLeftMargin, 
    containerRightMargin, 
    containerTopMarginTablet,
    containerBottomMarginTablet, 
    containerLeftMarginTablet, 
    containerRightMarginTablet, 
    containerTopMarginMobile,
    containerBottomMarginMobile,
    containerLeftMarginMobile,
    containerRightMarginMobile,	
    justifyItems,
    displayInline,
    stackOnMobile,
	boxPaddingTop, // For compatibility with v1.3.2.
    boxPaddingBottom, // For compatibility with v1.3.2.
    boxPaddingLeft, // For compatibility with v1.3.2.
    boxPaddingRight, // For compatibility with v1.3.2.
    boxPaddingTopMobile, // For compatibility with v1.3.2.
    boxPaddingBottomMobile, // For compatibility with v1.3.2.
    boxPaddingLeftMobile, // For compatibility with v1.3.2.
    boxPaddingRightMobile, // For compatibility with v1.3.2.
    boxPaddingTopTablet, // For compatibility with v1.3.2.
    boxPaddingBottomTablet, // For compatibility with v1.3.2.
    boxPaddingLeftTablet, // For compatibility with v1.3.2.
    boxPaddingRightTablet, // For compatibility with v1.3.2.
    containerMarginTop, // For compatibility with v1.3.2.
    containerMarginTopMobile, // For compatibility with v1.3.2.
    containerMarginTopTablet, // For compatibility with v1.3.2.
    containerMarginBottom, // For compatibility with v1.3.2.
    containerMarginBottomMobile, // For compatibility with v1.3.2.
    containerMarginBottomTablet, // For compatibility with v1.3.2.
    containerMarginLeft, // For compatibility with v1.3.2.
    containerMarginLeftMobile, // For compatibility with v1.3.2.
    containerMarginLeftTablet, // For compatibility with v1.3.2.
    containerMarginRight, // For compatibility with v1.3.2.
    containerMarginRightMobile, // For compatibility with v1.3.2.
    containerMarginRightTablet, // For compatibility with v1.3.2.
    containerPaddingTop, // For compatibility with v1.3.2.
    containerPaddingTopMobile, // For compatibility with v1.3.2.
    containerPaddingTopTablet, // For compatibility with v1.3.2.
    containerPaddingBottom, // For compatibility with v1.3.2.
    containerPaddingBottomMobile, // For compatibility with v1.3.2.
    containerPaddingBottomTablet, // For compatibility with v1.3.2.
    containerPaddingLeft, // For compatibility with v1.3.2.
    containerPaddingLeftMobile, // For compatibility with v1.3.2.
    containerPaddingLeftTablet, // For compatibility with v1.3.2.
    containerPaddingRight, // For compatibility with v1.3.2.
    containerPaddingRightMobile, // For compatibility with v1.3.2.
    containerPaddingRightTablet, // For compatibility with v1.3.2.
	boxBackgroundColor, // For compatibility with v1.3.2.
  } = props.attributes;

  let boxShadowPositionCSS = boxShadowPosition;
  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }

  const displayDays = showDaysBox ? "block" : "none";
  const displayHours = showHoursBox ? "block" : "none";
  const displayMinutes = showMinutesBox ? "block" : "none";
  const displaySeconds = showSecondsBox ? "block" : "none";

  let flexColumn = stackOnMobile ? "column" : "row";

  var selectors = {
    " .responsive-block-editor-addons-countdown-box-stylings": {
      height: generateCSSUnit(boxHeight, "px"),
      width: generateCSSUnit(boxWidth, "px"),
      "margin-left": generateCSSUnit(boxMargin, "px"),
      "padding-top": boxTopPadding === 0 && boxPaddingTop !== 999 ? generateCSSUnit(boxPaddingTop, "px") : generateCSSUnit(boxTopPadding, "px"), // For compatibility with v1.3.2.
      "padding-bottom": boxBottomPadding === 10 && boxPaddingBottom !== 999 ? generateCSSUnit(boxPaddingBottom, "px") : generateCSSUnit(boxBottomPadding, "px"), // For compatibility with v1.3.2.
      "padding-left": boxLeftPadding === 0 && boxPaddingLeft !== 999 ? generateCSSUnit(boxPaddingLeft, "px") : generateCSSUnit(boxLeftPadding, "px"), // For compatibility with v1.3.2.
      "padding-right": boxRightPadding === 0 && boxPaddingRight !== 999 ? generateCSSUnit(boxPaddingRight, "px") : generateCSSUnit(boxRightPadding, "px"), // For compatibility with v1.3.2.
      border: `${boxBorderSize}px ${boxBorderStyle} ${boxBorderColor}`,
      "border-radius": `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`,
      "background-color": boxBackgroundColor !== "empty" && backgroundColor === "#6EC1E4" ? boxBackgroundColor : backgroundColor, // For compatibility with v1.3.2.
      "box-shadow": `${boxShadowHOffset}px ${boxShadowVOffset}px ${boxShadowBlur}px ${boxShadowSpread}px ${boxShadowColor} ${boxShadowPositionCSS}`,
    },
    " .responsive-block-editor-addons-countdown-box-stylings:first-child": {
      "margin-left": "0px",
    },
    " .responsive-block-editor-addons-countdown-digits": {
      "font-family": digitFontFamily,
      "font-size": generateCSSUnit(digitFontSize, "px"),
      "font-weight": digitFontWeight,
      "letter-spacing": generateCSSUnit(digitLetterSpacing, "px"),
      "line-height": digitLineHeight,
      color: digitColor,
      display: displayInline ? "flex" : "block",
      flex: displayInline ? 1 : undefined,
      "justify-content": displayInline ? "flex-end" : undefined,
    },
    " .responsive-block-editor-addons-countdown-label": {
      "font-family": labelFontFamily,
      "font-size": generateCSSUnit(labelFontSize, "px"),
      "font-weight": labelFontWeight,
      "line-height": labelLineHeight,
      "padding-left": displayInline ? generateCSSUnit(labelLeftPadding, "px") : '0px',
      "letter-spacing": generateCSSUnit(labelLetterSpacing, "px"),
      color: labelColor,
      display: showDigitLabels ? ( displayInline ? "flex" : "block" ) : 'none',
      flex: displayInline ? 1 : undefined,
      "justify-content": displayInline ? "flex-start" : undefined,
    },
    " .responsive-block-editor-addons-countdown-box-margins": {
      "margin-top": generateCSSUnit(boxItemMarginTop, "px"),
      "margin-right": generateCSSUnit(boxItemMarginRight, "px"),
      "margin-bottom": generateCSSUnit(boxItemMarginBottom, "px"),
      "margin-left": generateCSSUnit(boxItemMarginLeft, "px"),
      "text-align": boxItemTextAlign,
      display: displayInline ? "flex" : undefined,
      "justify-content": displayInline ? "center" : undefined,
      "align-items": displayInline ? "center" : undefined,
    },
    ".responsive-block-editor-addons-countdown-wrapper": {
		"margin-top": containerMarginTop !== 999 && containerTopMargin == 0 ? generateCSSUnit(containerMarginTop, "px") : generateCSSUnit(containerTopMargin, "px"), // For compatibility with v1.3.2.
		"margin-bottom": containerMarginBottom !== 999 && containerBottomMargin === 0 ? generateCSSUnit(containerMarginBottom, "px") : generateCSSUnit(containerBottomMargin, "px"), // For compatibility with v1.3.2.
		"margin-right": containerMarginRight !== 999 && containerRightMargin === 0 ? generateCSSUnit(containerRightMargin, "px") : generateCSSUnit(containerRightMargin, "px"), // For compatibility with v1.3.2.
		"margin-left": containerLeftMargin === 0 && containerMarginLeft !== 999 ? generateCSSUnit(containerMarginLeft, "px") : generateCSSUnit(containerLeftMargin, "px"), // For compatibility with v1.3.2.
		"padding-top": containerPaddingTop !== 999 && containerTopPadding === 0 ? generateCSSUnit(containerPaddingTop, "px") : generateCSSUnit(containerTopPadding, "px"), // For compatibility with v1.3.2.
		"padding-right": containerRightPadding === 0 && 999 !== containerPaddingRight ? generateCSSUnit(containerPaddingRight, "px") : generateCSSUnit(containerRightPadding, "px"), // For compatibility with v1.3.2.
		"padding-bottom": containerBottomPadding === 0 && 999 !== containerPaddingBottom ? generateCSSUnit(containerPaddingBottom, "px") :  generateCSSUnit(containerBottomPadding, "px"), // For compatibility with v1.3.2.
		"padding-left": containerLeftPadding === 0 && 999 !== containerPaddingLeft ? generateCSSUnit(containerPaddingLeft, "px") :  generateCSSUnit(containerLeftPadding, "px"), // For compatibility with v1.3.2.
    },
    " .responsive-block-editor-addons-countdown-container .responsive-block-editor-addons-countdown-items": {
      "justify-content": justifyItems,
      margin: 0,
      padding: 0,
    },
    " .responsive-block-editor-addons-countdown-item.responsive-block-editor-addons-countdown-item-days": {
      display: displayDays,
    },
    " .responsive-block-editor-addons-countdown-item.responsive-block-editor-addons-countdown-item-hours": {
      display: displayHours,
    },
    " .responsive-block-editor-addons-countdown-item.responsive-block-editor-addons-countdown-item-minutes": {
      display: displayMinutes,
    },
    " .responsive-block-editor-addons-countdown-item.responsive-block-editor-addons-countdown-item-seconds": {
      display: displaySeconds,
    },
  };

  var mobile_selectors = {
    " .responsive-block-editor-addons-countdown-box-stylings": {
      height: generateCSSUnit(boxHeightMobile, "px"),
      width: stackOnMobile && generateCSSUnit(100, "%"),
      "margin-left":
        stackOnMobile === true ? "0px" : generateCSSUnit(boxMarginMobile, "px"),
      "margin-bottom": stackOnMobile && generateCSSUnit(boxMarginMobile, "px"),
      "padding-top": boxTopPaddingMobile === 0 && boxPaddingTopMobile !== 999 ? generateCSSUnit(boxPaddingTopMobile, "px") : generateCSSUnit(boxTopPaddingMobile, "px"), // For compatibility with v1.3.2.
      "padding-bottom": boxBottomPaddingMobile === 10 && boxPaddingBottomMobile !== 999 ? generateCSSUnit(boxPaddingBottomMobile, "px") : generateCSSUnit(boxBottomPaddingMobile, "px"), // For compatibility with v1.3.2.
      "padding-left": boxLeftPaddingMobile === 0 && boxPaddingLeftMobile !== 999 ? generateCSSUnit(boxPaddingLeftMobile, "px") : generateCSSUnit(boxLeftPaddingMobile, "px"), // For compatibility with v1.3.2.
      "padding-right": boxRightPaddingMobile === 0 && boxPaddingRightMobile !== 999 ? generateCSSUnit(boxPaddingRightMobile, "px") : generateCSSUnit(boxRightPaddingMobile, "px"), // For compatibility with v1.3.2.
      border: `${boxBorderSize}px ${boxBorderStyle} ${boxBorderColor};
      "border-radius": ${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`,
      "background-color": boxBackgroundColor !== "empty" && backgroundColor === "#6EC1E4" ? boxBackgroundColor : backgroundColor, //For compatibility with v1.3.2.
      "box-shadow": `${boxShadowHOffset}px ${boxShadowVOffset}px ${boxShadowBlur}px ${boxShadowSpread}px ${boxShadowColor} ${boxShadowPositionCSS}`,
    },
    " .responsive-block-editor-addons-countdown-box-stylings:first-child": {
      "margin-left": !stackOnMobile && "0px",
    },
    " .responsive-block-editor-addons-countdown-box-stylings:last-child": {
      "margin-bottom": stackOnMobile && "0px",
    },
    " .responsive-block-editor-addons-countdown-digits": {
      "font-family": digitFontFamily,
      "font-size": generateCSSUnit(digitFontSizeMobile, "px"),
      "font-weight": digitFontWeight,
      "letter-spacing": generateCSSUnit(digitLetterSpacing, "px"),
      "line-height": digitLineHeight,
      color: digitColor,
      display: displayInline ? "flex" : "block",
      flex: displayInline ? 1 : undefined,
      "justify-content": displayInline ? "flex-end" : undefined,
    },
    " .responsive-block-editor-addons-countdown-label": {
      "font-family": labelFontFamily,
      "font-size": generateCSSUnit(labelFontSizeMobile, "px"),
      "font-weight": labelFontWeight,
      "line-height": labelLineHeight,
      "padding-left": displayInline ? generateCSSUnit(labelLeftPadding, "px") : '0px',
      "letter-spacing": generateCSSUnit(labelLetterSpacing, "px"),
      color: labelColor,
      flex: displayInline ? 1.5 : undefined,
      "justify-content": displayInline ? "flex-start" : undefined,
    },
    " .responsive-block-editor-addons-countdown-box-margins": {
      "margin-top": generateCSSUnit(boxItemMarginTopMobile, "px"),
      "margin-right": generateCSSUnit(boxItemMarginRightMobile, "px"),
      "margin-bottom": generateCSSUnit(boxItemMarginBottomMobile, "px"),
      "margin-left": generateCSSUnit(boxItemMarginLeftMobile, "px"),
    },
    ".responsive-block-editor-addons-countdown-wrapper": {
		"margin-top": containerMarginTopMobile !== 999 && containerTopMarginMobile == 0 ? generateCSSUnit(containerMarginTopMobile, "px") : generateCSSUnit(containerTopMarginMobile, "px"), // For compatibility with v1.3.2.
		"margin-bottom": containerMarginBottomMobile !== 999 && containerBottomMarginMobile === 0 ? generateCSSUnit(containerMarginBottomMobile, "px") : generateCSSUnit(containerBottomMarginMobile, "px"), // For compatibility with v1.3.2.
		"margin-right": containerMarginRightMobile !== 999 && containerRightMarginMobile === 0 ? generateCSSUnit(containerRightMarginMobile, "px") : generateCSSUnit(containerRightMarginMobile, "px"), // For compatibility with v1.3.2.
		"margin-left": containerLeftMarginMobile === 0 && containerMarginLeftMobile !== 999 ? generateCSSUnit(containerMarginLeftMobile, "px") : generateCSSUnit(containerLeftMarginMobile, "px"), // For compatibility with v1.3.2.
		"padding-top": containerPaddingTopMobile !== 999 && containerTopPaddingMobile === 0 ? generateCSSUnit(containerPaddingTopMobile, "px") : generateCSSUnit(containerTopPaddingMobile, "px"), // For compatibility with v1.3.2.
		"padding-right": containerRightPaddingMobile === 0 && 999 !== containerPaddingRightMobile ? generateCSSUnit(containerPaddingRightMobile, "px") : generateCSSUnit(containerRightPaddingMobile, "px"), // For compatibility with v1.3.2.
		"padding-bottom": containerBottomPaddingMobile === 0 && 999 !== containerPaddingBottomMobile ? generateCSSUnit(containerPaddingBottomMobile, "px") :  generateCSSUnit(containerBottomPaddingMobile, "px"), // For compatibility with v1.3.2.
		"padding-left": containerLeftPaddingMobile === 0 && 999 !== containerPaddingLeftMobile ? generateCSSUnit(containerPaddingLeftMobile, "px") :  generateCSSUnit(containerLeftPaddingMobile, "px"), // For compatibility with v1.3.2.
    },
    " .responsive-block-editor-addons-countdown-container .responsive-block-editor-addons-countdown-items": {
      "flex-direction": flexColumn,
      "align-items": "center",
    },
  };

  var tablet_selectors = {
    " .responsive-block-editor-addons-countdown-box-stylings": {
      height: generateCSSUnit(boxHeightTablet, "px"),
      width: generateCSSUnit(boxWidthTablet, "px"),
      "margin-left": generateCSSUnit(boxMarginTablet, "px"),
      "padding-top": boxTopPaddingTablet === 0 && boxPaddingTopTablet !== 999 ? generateCSSUnit(boxPaddingTopTablet, "px") : generateCSSUnit(boxTopPaddingTablet, "px"), // For compatibility with v1.3.2.
      "padding-bottom": boxBottomPaddingTablet === 10 && boxPaddingBottomTablet !== 999 ? generateCSSUnit(boxPaddingBottomTablet, "px") : generateCSSUnit(boxBottomPaddingTablet, "px"), // For compatibility with v1.3.2.
      "padding-left": boxLeftPaddingTablet === 0 && boxPaddingLeftTablet !== 999 ? generateCSSUnit(boxPaddingLeftTablet, "px") : generateCSSUnit(boxLeftPaddingTablet, "px"), // For compatibility with v1.3.2.
      "padding-right": boxRightPaddingTablet === 0 && boxPaddingRightTablet !== 999 ? generateCSSUnit(boxPaddingRightTablet, "px") : generateCSSUnit(boxRightPaddingTablet, "px"), // For compatibility with v1.3.2.
      border: `${boxBorderSize}px ${boxBorderStyle} ${boxBorderColor};
      "border-radius": ${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`,
      "background-color": boxBackgroundColor !== "empty" && backgroundColor === "#6EC1E4" ? boxBackgroundColor : backgroundColor, //For compatibility with v1.3.2.
      "box-shadow": `${boxShadowHOffset}px ${boxShadowVOffset}px ${boxShadowBlur}px ${boxShadowSpread}px ${boxShadowColor} ${boxShadowPositionCSS}`,
    },

    " .responsive-block-editor-addons-countdown-digits": {
      "font-family": digitFontFamily,
      "font-size": generateCSSUnit(digitFontSizeTablet, "px"),
      "font-weight": digitFontWeight,
      "letter-spacing": generateCSSUnit(digitLetterSpacing, "px"),
      "line-height": digitLineHeight,
      color: digitColor,
      flex: displayInline ? 1 : undefined,
      "justify-content": displayInline ? "flex-end" : undefined,
    },

    " .responsive-block-editor-addons-countdown-label": {
      "font-family": labelFontFamily,
      "font-size": generateCSSUnit(labelFontSizeTablet, "px"),
      "font-weight": labelFontWeight,
      "line-height": labelLineHeight,
      "padding-left": displayInline ? generateCSSUnit(labelLeftPadding, "px") : '0px',
      "letter-spacing": generateCSSUnit(labelLetterSpacing, "px"),
      color: labelColor,
      display: displayInline ? "flex" : "block",
      flex: displayInline ? 1 : undefined,
      "justify-content": displayInline ? "flex-start" : undefined,
    },
    " .responsive-block-editor-addons-countdown-box-margins": {
      "margin-top": generateCSSUnit(boxItemMarginTopTablet, "px"),
      "margin-right": generateCSSUnit(boxItemMarginRightTablet, "px"),
      "margin-bottom": generateCSSUnit(boxItemMarginBottomTablet, "px"),
      "margin-left": generateCSSUnit(boxItemMarginLeftTablet, "px"),
    },
    ".responsive-block-editor-addons-countdown-wrapper": {
		"margin-top": containerMarginTopTablet !== 999 && containerTopMarginTablet == 0 ? generateCSSUnit(containerMarginTopTablet, "px") : generateCSSUnit(containerTopMarginTablet, "px"), // For compatibility with v1.3.2.
		"margin-bottom": containerMarginBottomTablet !== 999 && containerBottomMarginTablet === 0 ? generateCSSUnit(containerMarginBottomTablet, "px") : generateCSSUnit(containerBottomMarginTablet, "px"), // For compatibility with v1.3.2.
		"margin-right": containerMarginRightTablet !== 999 && containerRightMarginTablet === 0 ? generateCSSUnit(containerRightMarginTablet, "px") : generateCSSUnit(containerRightMarginTablet, "px"), // For compatibility with v1.3.2.
		"margin-left": containerLeftMarginTablet === 0 && containerMarginLeftTablet !== 999 ? generateCSSUnit(containerMarginLeftTablet, "px") : generateCSSUnit(containerLeftMarginTablet, "px"), // For compatibility with v1.3.2.
		"padding-top": containerPaddingTopTablet !== 999 && containerTopPaddingTablet === 0 ? generateCSSUnit(containerPaddingTopTablet, "px") : generateCSSUnit(containerTopPaddingTablet, "px"), // For compatibility with v1.3.2.
		"padding-right": containerRightPaddingTablet === 0 && 999 !== containerPaddingRightTablet ? generateCSSUnit(containerPaddingRightTablet, "px") : generateCSSUnit(containerRightPaddingTablet, "px"), // For compatibility with v1.3.2.
		"padding-bottom": containerBottomPaddingTablet === 0 && 999 !== containerPaddingBottomTablet ? generateCSSUnit(containerPaddingBottomTablet, "px") :  generateCSSUnit(containerBottomPaddingTablet, "px"), // For compatibility with v1.3.2.
		"padding-left": containerLeftPaddingTablet === 0 && 999 !== containerPaddingLeftTablet ? generateCSSUnit(containerPaddingLeftTablet, "px") :  generateCSSUnit(containerLeftPaddingTablet, "px"), // For compatibility with v1.3.2.
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-count-down.block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
