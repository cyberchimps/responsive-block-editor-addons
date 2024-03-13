/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";
import generateBackgroundImageEffect from "../../../generateBackgroundImageEffect";
import { hexToRgba } from "../../../utils/index.js";

function EditorStyles(props) {
  const {
    tabBorderColor,
    tabBorderWidth,
    tabBackgroundColor,
    tabTitleColor,
		tabTitleActiveColor,
    tabTitleFontFamily, 
    tabTitleFontSize, 
    tabTitleFontSizeMobile, 
    tabTitleFontSizeTablet, 
    tabTitleFontWeight, 
    tabTitleLineHeight,
    tabContentColor,
    tabContentFontFamily, 
    tabContentFontSize, 
    tabContentFontSizeMobile, 
    tabContentFontSizeTablet, 
    tabContentFontWeight, 
    tabContentLineHeight,
    tabsZindex,
    tabsTopPadding, 
    tabsBottomPadding, 
    tabsLeftPadding, 
    tabsRightPadding, 
    tabsTopPaddingTablet,
    tabsBottomPaddingTablet, 
    tabsLeftPaddingTablet, 
    tabsRightPaddingTablet, 
    tabsTopPaddingMobile,
    tabsBottomPaddingMobile,
    tabsLeftPaddingMobile,
    tabsRightPaddingMobile,
    tabsTopMargin, 
    tabsBottomMargin, 
    tabsLeftMargin, 
    tabsRightMargin, 
    tabsTopMarginTablet,
    tabsBottomMarginTablet, 
    tabsLeftMarginTablet, 
    tabsRightMarginTablet, 
    tabsTopMarginMobile,
    tabsBottomMarginMobile,
    tabsLeftMarginMobile,
    tabsRightMarginMobile,
    backgroundType,
    backgroundColor,
    backgroundColor1,
    backgroundColor2,
    colorLocation1,
    colorLocation2,
    gradientDirection,
    hoverbackgroundColor1,
    hoverbackgroundColor2,
    hovercolorLocation1,
    hovercolorLocation2,
    hovergradientDirection,
    opacity,
    backgroundHoverColor,
    tabsStyleD,
    animationName,
    animationDirection,
    animationRepeat,
    animationDuration,
    animationDelay,
    animationCurve,
    blockBorderStyle,
    blockBorderWidth,
    blockBorderRadius,
    blockBorderColor,
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
    alignTabsVertical,
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
  } = props.attributes;


  let imgopacity = opacity / 100;

  var blockBackground = "";
  if (backgroundType == "gradient") {
    blockBackground = generateBackgroundImageEffect(
      `${hexToRgba(backgroundColor1 || "#ffffff", imgopacity || 0)}`,
      `${hexToRgba(backgroundColor2 || "#ffffff", imgopacity || 0)}`,
      gradientDirection,
      colorLocation1,
      colorLocation2
    );
  }

  let activeTabBorderWidth = '';
  if (tabsStyleD === 'hstyle3') {
    activeTabBorderWidth = {
      "border-top-width" : generateCSSUnit( tabBorderWidth, "px" ),
      "border-right-width" : generateCSSUnit( tabBorderWidth, "px" ),
      "border-left-width" : generateCSSUnit( tabBorderWidth, "px" ),
      "border-bottom-width" : generateCSSUnit( 0, "px" ),
    }
  }else if (tabsStyleD === 'vstyle8' && alignTabsVertical === 'left') {
    activeTabBorderWidth = {
      "border-top-width" : generateCSSUnit( tabBorderWidth, "px" ),
      "border-bottom-width" : generateCSSUnit( tabBorderWidth, "px" ),
      "border-left-width" : generateCSSUnit( tabBorderWidth, "px" ),
      "border-right-width" : generateCSSUnit( 0, "px" ),
    }
  }
  else if (tabsStyleD === 'vstyle8' && alignTabsVertical === 'right') {
    activeTabBorderWidth = {
      "border-top-width" : generateCSSUnit( tabBorderWidth, "px" ),
      "border-bottom-width" : generateCSSUnit( tabBorderWidth, "px" ),
      "border-left-width" : generateCSSUnit( 0, "px" ),
      "border-right-width" : generateCSSUnit( tabBorderWidth, "px" ),
    }
  }

  let boxShadowPositionCSS = boxShadowPosition;
  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }

  var selectors = {
    " ":{
		  "opacity": hideWidget? 0.2 : 1,
      "padding-top": generateCSSUnit(tabsTopPadding, "px"),
      "padding-bottom": generateCSSUnit(tabsBottomPadding, "px"),
      "padding-left": generateCSSUnit(tabsLeftPadding, "px"),
      "padding-right": generateCSSUnit(tabsRightPadding, "px"),
      "margin-top": generateCSSUnit(tabsTopMargin, "px"),
      "margin-bottom": generateCSSUnit(tabsBottomMargin, "px"),
      "margin-left": generateCSSUnit(tabsLeftMargin, "px"),
      "margin-right": generateCSSUnit(tabsRightMargin, "px"),
      "z-index": tabsZindex,
      "background-color":
        backgroundType == "color"
          ? `${hexToRgba(backgroundColor || "#ffffff", imgopacity || 0)}`
          : undefined,
      "background-image": blockBackground,
      "border-style" : blockBorderStyle,
      "border-radius" : generateCSSUnit(blockBorderRadius, "px"),
      "border-width" : generateCSSUnit( blockBorderWidth, "px" ),
      "border-color" : blockBorderColor,
      'animation-name': `${animationName}${animationDirection}`,
      'animation-timing-function': animationCurve,
      'animation-duration': animationDuration+'ms',
      'animation-delay': animationDelay+'ms',
      'animation-iteration-count': animationRepeat === 'once' ? 1 : 'infinite',
      "box-shadow": `${boxShadowHOffset}px ${boxShadowVOffset}px ${boxShadowBlur}px ${boxShadowSpread}px ${boxShadowColor} ${boxShadowPositionCSS}`,
    },
    ":hover": {
      "background-color":
        backgroundType == "color"
          ? `${hexToRgba(backgroundHoverColor || "#ffffff", imgopacity || 0)}`
          : undefined,
      "background-image":
        backgroundType == "gradient"
          ? generateBackgroundImageEffect(
            `${hexToRgba(
              hoverbackgroundColor1 || "#ffffff",
              imgopacity || 0
            )}`,
            `${hexToRgba(
              hoverbackgroundColor2 || "#ffffff",
              imgopacity || 0
            )}`,
            hovergradientDirection,
            hovercolorLocation1,
            hovercolorLocation2
          )
          : undefined,
    },
    " > .responsive-block-editor-addons-tabs__panel .responsive-block-editor-addons-tab.responsive-block-editor-addons-tabs__active" : {
			"background": tabBackgroundColor,
		},
    " > .responsive-block-editor-addons-tabs__body-wrap " : {
			"background": tabBackgroundColor,
		},
    ".responsive-block-editor-addons-tabs__wrap > .responsive-block-editor-addons-tabs__panel .responsive-block-editor-addons-tab" : {
      "border-style": tabBorderWidth > 0 ? "solid" : "none",
      ...activeTabBorderWidth,
      "border-color" : "transparent",
      "text-align" : tabsStyleD === 'vstyle8' ? "center" : "left"
    },
    ".responsive-block-editor-addons-tabs__wrap > .responsive-block-editor-addons-tabs__panel .responsive-block-editor-addons-tab.responsive-block-editor-addons-tabs__active" : {
      "border-style": tabBorderWidth > 0 ? "solid" : "none",
      ...activeTabBorderWidth,
      "border-color" : tabBorderColor,
      "z-index": "10",
      "margin-bottom": tabsStyleD === "hstyle3" ? "-2px" : '',
      "margin-right": tabsStyleD === "vstyle8" ? "-2px" : '',
    },
    ".responsive-block-editor-addons-tabs__wrap > .responsive-block-editor-addons-tabs__body-wrap" : {
      "border-width" : generateCSSUnit( tabBorderWidth, "px" ),
      "border-color" : tabBorderColor,
    },
    " > .responsive-block-editor-addons-tabs__panel .responsive-block-editor-addons-tab a > p" : {
			"color": tabTitleColor,
      "font-family": tabTitleFontFamily,
			"font-weight": tabTitleFontWeight,
			"font-size": generateCSSUnit( tabTitleFontSize, "px" ),
			"line-height": generateCSSUnit( tabTitleLineHeight, "px" ),
		},
    " > .responsive-block-editor-addons-tabs__panel .responsive-block-editor-addons-tab.responsive-block-editor-addons-tabs__active p" : {
			"color": tabTitleActiveColor ,
		},
    " > .responsive-block-editor-addons-tabs__body-wrap > .block-editor-inner-blocks p" : {
			"color": tabContentColor,
      "font-family": tabContentFontFamily,
			"font-weight": tabContentFontWeight,
			"font-size": generateCSSUnit( tabContentFontSize, "px" ),
			"line-height": generateCSSUnit( tabContentLineHeight, "px" ),
		},
    ".responsive-block-editor-addons-vstyle8-right" :{
      "flex-direction": "row-reverse",
    },
  };

  var mobile_selectors = {
    " ":{
		  "opacity": hideWidgetMobile? 0.2 : 1,
      "padding-top": generateCSSUnit(tabsTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(tabsBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(tabsLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(tabsRightPaddingMobile, "px"),
      "margin-top": generateCSSUnit(tabsTopMarginMobile, "px"),
      "margin-bottom": generateCSSUnit(tabsBottomMarginMobile, "px"),
      "margin-left": generateCSSUnit(tabsLeftMarginMobile, "px"),
      "margin-right": generateCSSUnit(tabsRightMarginMobile, "px"),
    },
    " > .responsive-block-editor-addons-tabs__panel .responsive-block-editor-addons-tab a > p" : {
			"font-size": generateCSSUnit( tabTitleFontSizeMobile, "px" ),
		},
    " > .responsive-block-editor-addons-tabs__body-wrap > .block-editor-inner-blocks p" : {
			"font-size": generateCSSUnit( tabContentFontSizeMobile, "px" ),
		},
  };

  var tablet_selectors = {
    " ":{
		  "opacity": hideWidgetTablet? 0.2 : 1,
      "padding-top": generateCSSUnit(tabsTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(tabsBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(tabsLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(tabsRightPaddingTablet, "px"),
      "margin-top": generateCSSUnit(tabsTopMarginTablet, "px"),
      "margin-bottom": generateCSSUnit(tabsBottomMarginTablet, "px"),
      "margin-left": generateCSSUnit(tabsLeftMarginTablet, "px"),
      "margin-right": generateCSSUnit(tabsRightMarginTablet, "px"),
    },
    " > .responsive-block-editor-addons-tabs__panel .responsive-block-editor-addons-tab a > p" : {
			"font-size": generateCSSUnit( tabTitleFontSizeTablet, "px" ),
		},
    " > .responsive-block-editor-addons-tabs__body-wrap > .block-editor-inner-blocks p" : {
			"font-size": generateCSSUnit( tabContentFontSizeTablet, "px" ),
		},
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-tabs.block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
