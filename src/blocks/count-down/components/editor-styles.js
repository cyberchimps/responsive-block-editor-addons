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
    boxPaddingTop,
    boxPaddingRight,
    boxPaddingBottom,
    boxPaddingLeft,
    boxPaddingTopMobile,
    boxPaddingRightMobile,
    boxPaddingBottomMobile,
    boxPaddingLeftMobile,
    boxPaddingTopTablet,
    boxPaddingRightTablet,
    boxPaddingBottomTablet,
    boxPaddingLeftTablet,
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
    containerPaddingTop,
    containerPaddingRight,
    containerPaddingBottom,
    containerPaddingLeft,
    containerMarginTopTablet,
    containerMarginRightTablet,
    containerMarginBottomTablet,
    containerMarginLeftTablet,
    containerPaddingTopTablet,
    containerPaddingRightTablet,
    containerPaddingBottomTablet,
    containerPaddingLeftTablet,
    containerMarginTopMobile,
    containerMarginRightMobile,
    containerMarginBottomMobile,
    containerMarginLeftMobile,
    containerPaddingTopMobile,
    containerPaddingRightMobile,
    containerPaddingBottomMobile,
    containerPaddingLeftMobile,
    justifyItems,
    displayInline,
    stackOnMobile,
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
      padding: `${boxPaddingTop}px ${boxPaddingRight}px ${boxPaddingBottom}px  ${boxPaddingLeft}px`,
      border: `${boxBorderSize}px ${boxBorderStyle} ${boxBorderColor}`,
      "border-radius": `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`,
      "background-color": boxBackgroundColor,
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
      "margin-top": generateCSSUnit(containerMarginTop, "px"),
      "margin-right": generateCSSUnit(containerMarginRight, "px"),
      "margin-bottom": generateCSSUnit(containerMarginBottom, "px"),
      "margin-left": generateCSSUnit(containerMarginLeft, "px"),
      "padding-top": generateCSSUnit(containerPaddingTop, "px"),
      "padding-right": generateCSSUnit(containerPaddingRight, "px"),
      "padding-bottom": generateCSSUnit(containerPaddingBottom, "px"),
      "padding-left": generateCSSUnit(containerPaddingLeft, "px"),
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
      width: generateCSSUnit(boxWidthMobile, "px"),
      "margin-left":
        stackOnMobile === true ? "0px" : generateCSSUnit(boxMarginMobile, "px"),
      "margin-bottom": stackOnMobile && generateCSSUnit(boxMarginMobile, "px"),
      padding: `${boxPaddingTopMobile}px ${boxPaddingRightMobile}px ${boxPaddingBottomMobile}px  ${boxPaddingLeftMobile}px`,
      border: `${boxBorderSize}px ${boxBorderStyle} ${boxBorderColor};
      "border-radius": ${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`,
      "background-color": boxBackgroundColor,
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
      "margin-top": generateCSSUnit(containerMarginTopMobile, "px"),
      "margin-right": generateCSSUnit(containerMarginRightMobile, "px"),
      "margin-bottom": generateCSSUnit(containerMarginBottomMobile, "px"),
      "margin-left": generateCSSUnit(containerMarginLeftMobile, "px"),
      "padding-top": generateCSSUnit(containerPaddingTopMobile, "px"),
      "padding-right": generateCSSUnit(containerPaddingRightMobile, "px"),
      "padding-bottom": generateCSSUnit(containerPaddingBottomMobile, "px"),
      "padding-left": generateCSSUnit(containerPaddingLeftMobile, "px"),
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
      padding: `${boxPaddingTopTablet}px ${boxPaddingRightTablet}px ${boxPaddingBottomTablet}px  ${boxPaddingLeftTablet}px`,
      border: `${boxBorderSize}px ${boxBorderStyle} ${boxBorderColor};
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
      "margin-top": generateCSSUnit(containerMarginTopTablet, "px"),
      "margin-right": generateCSSUnit(containerMarginRightTablet, "px"),
      "margin-bottom": generateCSSUnit(containerMarginBottomTablet, "px"),
      "margin-left": generateCSSUnit(containerMarginLeftTablet, "px"),
      "padding-top": generateCSSUnit(containerPaddingTopTablet, "px"),
      "padding-right": generateCSSUnit(containerPaddingRightTablet, "px"),
      "padding-bottom": generateCSSUnit(containerPaddingBottomTablet, "px"),
      "padding-left": generateCSSUnit(containerPaddingLeftTablet, "px"),
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
