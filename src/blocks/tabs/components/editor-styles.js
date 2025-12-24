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
    tabsStyleT,
    tabsStyleM,
    animationName,
    animationDirection,
    animationRepeat,
    animationDuration,
    animationDelay,
    animationCurve,
    blockBorderStyle,
    blockBorderWidth,
    blockBorderRadius,
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
    blockBorderColor,
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
    hoverboxShadowColor,
    hoverboxShadowHOffset,
    hoverboxShadowVOffset,
    hoverboxShadowBlur,
    hoverboxShadowSpread,
    hoverboxShadowPosition,
    alignTabsVertical,
    alignTabsVerticalT,
    alignTabsVerticalM,
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
    tabTitleTypographyColor,
    tabTitleActiveTypographyColor,
    tabContentTypographyColor,
    tabTitleTextTransform,
    tabTitleFontStyle,
    tabContentTextTransform,
    tabContentFontStyle,
    alignTabs,
    alignTabsT,
    alignTabsM,
    gradient,
    gradientHover,
    tabTitleTextDecoration,
    tabContentTextDecoration,
  } = props.attributes;


  let imgopacity = opacity / 100;

  var blockBackground = "";
  if (backgroundType == "gradient") {
    blockBackground = gradient ? gradient : generateBackgroundImageEffect(
      `${hexToRgba(backgroundColor1 || "#ffffff", imgopacity || 0)}`,
      `${hexToRgba(backgroundColor2 || "#ffffff", imgopacity || 0)}`,
      gradientDirection,
      colorLocation1,
      colorLocation2
    );
  }

  let activeTabBorderWidth = '';
  if (tabsStyleD === 'hstyle3' || tabsStyleT === 'hstyle3' || tabsStyleM === 'hstyle3') {
    activeTabBorderWidth = {
      "border-top-width" : generateCSSUnit( tabBorderWidth, "px" ),
      "border-right-width" : generateCSSUnit( tabBorderWidth, "px" ),
      "border-left-width" : generateCSSUnit( tabBorderWidth, "px" ),
      "border-bottom-width" : generateCSSUnit( 0, "px" ),
    }
  } else if ( ( tabsStyleD === 'vstyle8' || tabsStyleT === 'vstyle8' || tabsStyleM === 'vstyle8' ) && ( alignTabsVertical === 'left' || alignTabsVerticalT === 'left' || alignTabsVerticalM === 'left' ) ) {
    activeTabBorderWidth = {
      "border-top-width" : generateCSSUnit( tabBorderWidth, "px" ),
      "border-bottom-width" : generateCSSUnit( tabBorderWidth, "px" ),
      "border-left-width" : generateCSSUnit( tabBorderWidth, "px" ),
      "border-right-width" : generateCSSUnit( 0, "px" ),
    }
  }
  else if ( ( tabsStyleD === 'vstyle8' || tabsStyleT === 'vstyle8' || tabsStyleM === 'vstyle8' ) && ( alignTabsVertical === 'right' || alignTabsVerticalT === 'right' || alignTabsVerticalM === 'right' ) ) {
    activeTabBorderWidth = {
      "border-top-width" : generateCSSUnit( tabBorderWidth, "px" ),
      "border-bottom-width" : generateCSSUnit( tabBorderWidth, "px" ),
      "border-left-width" : generateCSSUnit( 0, "px" ),
      "border-right-width" : generateCSSUnit( tabBorderWidth, "px" ),
    }
  }

  let boxShadowPositionCSS      = boxShadowPosition;
  let hoverboxShadowPositionCSS = hoverboxShadowPosition;
  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }
  if ("outset" === hoverboxShadowPosition) {
    hoverboxShadowPositionCSS = "";
  }
  const isOn = responsive_globals?.is_responsive_conditions_on ?? 1;

  var selectors = {
    " ":{
		  "opacity": hideWidget && isOn ? 0.2 : 1,
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
      "border-top-left-radius": generateCSSUnit(blockTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadius, "px"),
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
          ? gradientHover ? gradientHover : generateBackgroundImageEffect(
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
      "box-shadow": hoverboxShadowColor !== '' ? `${hoverboxShadowHOffset}px ${hoverboxShadowVOffset}px ${hoverboxShadowBlur}px ${hoverboxShadowSpread}px ${hoverboxShadowColor} ${hoverboxShadowPositionCSS}` : '',
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
			"color": tabTitleTypographyColor,
      "font-family": tabTitleFontFamily,
      "text-transform": tabTitleTextTransform,
      "text-decoration": tabTitleTextDecoration,
      "font-style": tabTitleFontStyle,
			"font-weight": tabTitleFontWeight,
			"font-size": generateCSSUnit( tabTitleFontSize, "px" ),
			"line-height": generateCSSUnit( tabTitleLineHeight, "px" ),
		},
    " > .responsive-block-editor-addons-tabs__panel .responsive-block-editor-addons-tab.responsive-block-editor-addons-tabs__active p" : {
			"color": tabTitleActiveTypographyColor ,
		},
    " > .responsive-block-editor-addons-tabs__body-wrap > .block-editor-inner-blocks p" : {
			"color": tabContentTypographyColor,
      "font-family": tabContentFontFamily,
      "text-transform": tabContentTextTransform,
      "text-decoration": tabContentTextDecoration,
      "font-style": tabContentFontStyle,
			"font-weight": tabContentFontWeight,
			"font-size": generateCSSUnit( tabContentFontSize, "px" ),
			"line-height": generateCSSUnit( tabContentLineHeight, "px" ),
		},
    ".responsive-block-editor-addons-vstyle8-left" : {
      "flex-direction": "row",
    },
    ".responsive-block-editor-addons-vstyle8-right" : {
      "flex-direction": "row-reverse",
    },
  };

  var mobile_selectors = {
    " ":{
		  "opacity": hideWidgetMobile && isOn ? 0.2 : 1,
      "padding-top": generateCSSUnit(tabsTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(tabsBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(tabsLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(tabsRightPaddingMobile, "px"),
      "margin-top": generateCSSUnit(tabsTopMarginMobile, "px"),
      "margin-bottom": generateCSSUnit(tabsBottomMarginMobile, "px"),
      "margin-left": generateCSSUnit(tabsLeftMarginMobile, "px"),
      "margin-right": generateCSSUnit(tabsRightMarginMobile, "px"),
      "border-top-left-radius": generateCSSUnit(blockTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusMobile, "px"),
    },
    " > .responsive-block-editor-addons-tabs__panel .responsive-block-editor-addons-tab a > p" : {
			"font-size": generateCSSUnit( tabTitleFontSizeMobile, "px" ),
		},
    " > .responsive-block-editor-addons-tabs__body-wrap > .block-editor-inner-blocks p" : {
			"font-size": generateCSSUnit( tabContentFontSizeMobile, "px" ),
		},
    ".responsive-block-editor-addons-vstyle8-left" : {
      "flex-direction": "row",
    },
    ".responsive-block-editor-addons-vstyle8-right" : {
      "flex-direction": "row-reverse",
    },
  };

  var tablet_selectors = {
    " ":{
		  "opacity": hideWidgetTablet && isOn ? 0.2 : 1,
      "padding-top": generateCSSUnit(tabsTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(tabsBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(tabsLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(tabsRightPaddingTablet, "px"),
      "margin-top": generateCSSUnit(tabsTopMarginTablet, "px"),
      "margin-bottom": generateCSSUnit(tabsBottomMarginTablet, "px"),
      "margin-left": generateCSSUnit(tabsLeftMarginTablet, "px"),
      "margin-right": generateCSSUnit(tabsRightMarginTablet, "px"),
      "border-top-left-radius": generateCSSUnit(blockTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusTablet, "px"),
    },
    " > .responsive-block-editor-addons-tabs__panel .responsive-block-editor-addons-tab a > p" : {
			"font-size": generateCSSUnit( tabTitleFontSizeTablet, "px" ),
		},
    " > .responsive-block-editor-addons-tabs__body-wrap > .block-editor-inner-blocks p" : {
			"font-size": generateCSSUnit( tabContentFontSizeTablet, "px" ),
		},
    ".responsive-block-editor-addons-vstyle8-left" : {
      "flex-direction": "row",
    },
    ".responsive-block-editor-addons-vstyle8-right" : {
      "flex-direction": "row-reverse",
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
