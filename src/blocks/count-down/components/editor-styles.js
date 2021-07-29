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
    boxBackgroundColor,
    boxShadowColor,
    containerMarginTop,
    containerMarginRight,
    containerMarginBottom,
    containerMarginLeft,
    containerMarginTopTablet,
    containerMarginRightTablet,
    containerMarginBottomTablet,
    containerMarginLeftTablet,
    containerMarginTopMobile,
    containerMarginRightMobile,
    containerMarginBottomMobile,
    containerMarginLeftMobile,
    justifyItems,
    displayInline,
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
    stackOnMobile,	
  } = props.attributes;

  let boxShadowPositionCSS = boxShadowPosition;
  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }

  const displayLabels = showDigitLabels? "block" : "none";

  const displayDays = showDaysBox ? "block" : "none";
  const displayHours = showHoursBox ? "block" : "none";
  const displayMinutes = showMinutesBox ? "block" : "none";
  const displaySeconds = showSecondsBox ? "block" : "none";

  let flexColumn = stackOnMobile ? 'column' : 'row';

  var selectors = {
    " .responsive-block-editor-addons-countdown-box-stylings": {
        "height": generateCSSUnit(boxHeight, "px"),
        "width":  generateCSSUnit(boxWidth, "px"),
        "margin": generateCSSUnit(boxMargin, "px"),
        "padding": `${boxTopPadding}px ${boxRightPadding}px ${boxBottomPadding}px  ${boxLeftPadding}px`,
        "border": `${boxBorderSize}px ${boxBorderStyle} ${boxBorderColor}`,
        "border-radius": `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`,
        "background-color": boxBackgroundColor,
        "box-shadow": `${boxShadowHOffset}px ${boxShadowVOffset}px ${boxShadowBlur}px ${boxShadowSpread}px ${boxShadowColor} ${boxShadowPositionCSS}`,
    },
    " .responsive-block-editor-addons-countdown-digits": {
        "font-family": digitFontFamily,
        "font-size": generateCSSUnit(digitFontSize, "px"),
        "font-weight": digitFontWeight,
        "letter-spacing": generateCSSUnit(digitLetterSpacing, "px"),
        "line-height": digitLineHeight,
        "color": digitColor,
        "display": displayInline ? "flex" : "block",
        "flex": displayInline ? 1 : undefined,
        "justify-content": displayInline ? "center" : undefined,
    },
    " .responsive-block-editor-addons-countdown-label": {
        "font-family": labelFontFamily,
        "font-size": generateCSSUnit(labelFontSize, "px"),
        "font-weight": labelFontWeight,
        "line-height": labelLineHeight,
        "padding-left": generateCSSUnit(labelLeftPadding, "px"),
        "letter-spacing": generateCSSUnit(labelLetterSpacing, "px"),
        "color": labelColor,
        "display": displayInline ? "flex" : "block",
        "flex": displayInline ? 1 : undefined,
        "justify-content": displayInline ? "flex-start" : undefined,
        "display": displayLabels
    },
    " .responsive-block-editor-addons-countdown-box-margins": {
        "margin-top": generateCSSUnit(boxItemMarginTop, "px"),
        "margin-right": generateCSSUnit(boxItemMarginRight, "px"),
        "margin-bottom": generateCSSUnit(boxItemMarginBottom, "px"),
        "margin-left": generateCSSUnit(boxItemMarginLeft, "px"),
        "text-align": boxItemTextAlign,
        "display": displayInline ? "flex" : undefined,
        "justify-content": displayInline ? "center" : undefined,
        "align-items": displayInline ? "center" : undefined,
    },
    ".responsive-block-editor-addons-countdown-wrapper": {
        "margin-top": generateCSSUnit(containerMarginTop, "px"),
        "margin-right": generateCSSUnit(containerMarginRight, "px"),
        "margin-bottom": generateCSSUnit(containerMarginBottom, "px"),
        "margin-left": generateCSSUnit(containerMarginLeft, "px"),
        "padding-top": generateCSSUnit(containerTopPadding, "px"),
        "padding-right": generateCSSUnit(containerRightPadding, "px"),
        "padding-bottom": generateCSSUnit(containerBottomPadding, "px"),
        "padding-left": generateCSSUnit(containerLeftPadding, "px"),
    },
    " .responsive-block-editor-addons-countdown-container .responsive-block-editor-addons-countdown-items": {
        "justify-content": justifyItems,
        "margin": 0,
    },
    " .responsive-block-editor-addons-countdown-item.responsive-block-editor-addons-countdown-item-days": {
        "display": displayDays,
    },
    " .responsive-block-editor-addons-countdown-item.responsive-block-editor-addons-countdown-item-hours": {
        "display": displayHours,
    },
    " .responsive-block-editor-addons-countdown-item.responsive-block-editor-addons-countdown-item-minutes": {
        "display": displayMinutes,
    },
    " .responsive-block-editor-addons-countdown-item.responsive-block-editor-addons-countdown-item-seconds": {
        "display": displaySeconds,
    },
  };

  var mobile_selectors = {
    " .responsive-block-editor-addons-countdown-box-stylings": {
      "height": generateCSSUnit(boxHeightMobile, "px"),
      "width":  generateCSSUnit(boxWidthMobile, "px"),
      "margin": generateCSSUnit(boxMarginMobile, "px"),
      "padding": `${boxTopPaddingMobile}px ${boxRightPaddingMobile}px ${boxBottomPaddingMobile}px  ${boxLeftPaddingMobile}px`,
      "border": `${boxBorderSize}px ${boxBorderStyle} ${boxBorderColor};
      "border-radius": ${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`,
      "background-color": boxBackgroundColor,
      "box-shadow": `${boxShadowHOffset}px ${boxShadowVOffset}px ${boxShadowBlur}px ${boxShadowSpread}px ${boxShadowColor} ${boxShadowPositionCSS}`,
  },
  " .responsive-block-editor-addons-countdown-digits": {
    "font-family": digitFontFamily,
    "font-size": generateCSSUnit(digitFontSizeMobile, "px"),
    "font-weight": digitFontWeight,
    "letter-spacing": generateCSSUnit(digitLetterSpacing, "px"),
    "line-height": digitLineHeight,
    "color": digitColor,
    "display": displayInline ? "flex" : "block",
    "flex": displayInline ? 1 : undefined,
    "justify-content": displayInline ? "center" : undefined,
  },
  " .responsive-block-editor-addons-countdown-label": {
    "font-family": labelFontFamily,
    "font-size": generateCSSUnit(labelFontSizeMobile, "px"),
    "font-weight": labelFontWeight,
    "line-height": labelLineHeight,
    "padding-left": generateCSSUnit(labelLeftPadding, "px"),
    "letter-spacing": generateCSSUnit(labelLetterSpacing, "px"),
    "color": labelColor,
    "display": displayInline ? "flex" : "block",
    "flex": displayInline ? 1 : undefined,
    "justify-content": displayInline ? "flex-start" : undefined,
  },
  " .responsive-block-editor-addons-countdown-box-margins": {
    "margin-top": generateCSSUnit(boxItemMarginTopMobile, "px"),
    "margin-right": generateCSSUnit(boxItemMarginRightMobile, "px"),
    "margin-bottom": generateCSSUnit(boxItemMarginBottomMobile, "px"),
    "margin-left": generateCSSUnit(boxItemMarginLeftMobile, "px"),
  },
  ".responsive-block-editor-addons-countdown-wrapper": {
    "margin-top": generateCSSUnit(containerMarginTopMobile, "px"),
    "margin-right": generateCSSUnit(containerMarginRightMobile, "px"),
    "margin-bottom": generateCSSUnit(containerMarginBottomMobile, "px"),
    "margin-left": generateCSSUnit(containerMarginLeftMobile, "px"),
    "padding-top": generateCSSUnit(containerTopPaddingMobile, "px"),
    "padding-right": generateCSSUnit(containerRightPaddingMobile, "px"),
    "padding-bottom": generateCSSUnit(containerBottomPaddingMobile, "px"),
    "padding-left": generateCSSUnit(containerLeftPaddingMobile, "px"),
  },
  " .responsive-block-editor-addons-countdown-container .responsive-block-editor-addons-countdown-items": {
      "flex-direction": flexColumn,
      "align-items": "center",
  },
  };

  var tablet_selectors = {
    " .responsive-block-editor-addons-countdown-box-stylings": {
      "height": generateCSSUnit(boxHeightTablet, "px"),
      "width":  generateCSSUnit(boxWidthTablet, "px"),
      "margin": generateCSSUnit(boxMarginTablet, "px"),
      "padding": `${boxTopPaddingTablet}px ${boxRightPaddingTablet}px ${boxBottomPaddingTablet}px  ${boxLeftPaddingTablet}px`,
      "border": `${boxBorderSize}px ${boxBorderStyle} ${boxBorderColor};
      "border-radius": ${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`,
      "background-color": boxBackgroundColor,
      "box-shadow": `${boxShadowHOffset}px ${boxShadowVOffset}px ${boxShadowBlur}px ${boxShadowSpread}px ${boxShadowColor} ${boxShadowPositionCSS}`,
   },
   
    " .responsive-block-editor-addons-countdown-digits": {
      "font-family": digitFontFamily,
      "font-size": generateCSSUnit(digitFontSizeTablet, "px"),
      "font-weight": digitFontWeight,
      "letter-spacing": generateCSSUnit(digitLetterSpacing, "px"),
      "line-height": digitLineHeight,
      "color": digitColor,
      "display": displayInline ? "flex" : "block",
      "flex": displayInline ? 1 : undefined,
      "justify-content": displayInline ? "center" : undefined,
  },

  " .responsive-block-editor-addons-countdown-label": {
    "font-family": labelFontFamily,
    "font-size": generateCSSUnit(labelFontSizeTablet, "px"),
    "font-weight": labelFontWeight,
    "line-height": labelLineHeight,
    "padding-left": generateCSSUnit(labelLeftPadding, "px"),
    "letter-spacing": generateCSSUnit(labelLetterSpacing, "px"),
    "color": labelColor,
    "display": displayInline ? "flex" : "block",
    "flex": displayInline ? 1 : undefined,
    "justify-content": displayInline ? "flex-start" : undefined,
  },
  " .responsive-block-editor-addons-countdown-box-margins": {
    "margin-top": generateCSSUnit(boxItemMarginTopTablet, "px"),
    "margin-right": generateCSSUnit(boxItemMarginRightTablet, "px"),
    "margin-bottom": generateCSSUnit(boxItemMarginBottomTablet, "px"),
    "margin-left": generateCSSUnit(boxItemMarginLeftTablet, "px"),
  },
  ".responsive-block-editor-addons-countdown-wrapper": {
    "margin-top": generateCSSUnit(containerMarginTopTablet, "px"),
    "margin-right": generateCSSUnit(containerMarginRightTablet, "px"),
    "margin-bottom": generateCSSUnit(containerMarginBottomTablet, "px"),
    "margin-left": generateCSSUnit(containerMarginLeftTablet, "px"),
    "padding-top": generateCSSUnit(containerTopPaddingTablet, "px"),
    "padding-right": generateCSSUnit(containerRightPaddingTablet, "px"),
    "padding-bottom": generateCSSUnit(containerBottomPaddingTablet, "px"),
    "padding-left": generateCSSUnit(containerLeftPaddingTablet, "px"),
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
