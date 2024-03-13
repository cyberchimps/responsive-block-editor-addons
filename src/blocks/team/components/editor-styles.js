/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";
import { hexToRgba } from "../../../utils/index.js";

function EditorStyles(props) {
  const {
    block_id,
    titleColor,
    designationColor,
    descriptionColor,
    socialIconColor,
    titleFontFamily,
    descriptionFontFamily,
    designationFontFamily,
    titleFontSize,
    designationFontSize,
    descriptionFontSize,
    titleFontWeight,
    designationFontWeight,
    descriptionFontWeight,
    titleLineHeight,
    designationLineHeight,
    descriptionLineHeight,
    titleSpacing,
    designationSpacing,
    descriptionSpacing,
    socialIconSpacing,
    imageMarginTop,
    imageMarginBottom,
    titleSpacingMobile,
    designationSpacingMobile,
    descriptionSpacingMobile,
    socialIconSpacingMobile,
    imageMarginTopMobile,
    imageMarginBottomMobile,
    titleSpacingTablet,
    designationSpacingTablet,
    descriptionSpacingTablet,
    socialIconSpacingTablet,
    imageMarginTopTablet,
    imageMarginBottomTablet,
    iconSize,
    imageWidth,
    imageWidthMobile,
    imageWidthTablet,
    backgroundColor,
    borderColor,
    borderWidth,
    borderRadius,
    padding,
    alignment,
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
    opacity,
    backgroundColor2,
    gradientDirection,
    bgGradient,
    colorLocation1,
    colorLocation2,
    backgroundImage,
    backgroundImagePosition,
    backgroundImageRepeat,
    backgroundImageSize,
    backgroundAttachment,
    gutter,
    count,
    titleFontSizeMobile,
    titleFontSizeTablet,
    designationFontSizeMobile,
    designationFontSizeTablet,
    descriptionFontSizeMobile,
    descriptionFontSizeTablet,
    socialIconBorderColor,
    socialIconHoverColor,
    socialIconBackgroundHoverColor,
    socialIconBackgroundColor,
    socialIconBorderHoverColor,
    iconBackgroundSize,
    iconBorderSize,
    iconBorderRadius,
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
  } = props.attributes;

  let bgopacity = opacity / 100;

  var tempsecondaryBackgroundColor = bgGradient
    ? backgroundColor2
    : backgroundColor;

  var bggradient =
    "linear-gradient(" +
    gradientDirection +
    "deg," +
    hexToRgba(backgroundColor || "#ffffff", bgopacity || 0) +
    colorLocation1 +
    "% ," +
    hexToRgba(tempsecondaryBackgroundColor || "#ffffff", bgopacity || 0) +
    colorLocation2 +
    "% )";

  if (backgroundImage) {
    bggradient =
      "linear-gradient(" +
      gradientDirection +
      "deg," +
      hexToRgba(backgroundColor || "#ffffff", bgopacity || 0) +
      colorLocation1 +
      "% ," +
      hexToRgba(tempsecondaryBackgroundColor || "#ffffff", bgopacity || 0) +
      colorLocation2 +
      "% ),url(" +
      backgroundImage +
      ")";
  }

  var boxShadowPositionCSS = boxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }

  let gutterMargin = ""
  if( count > 1){
    if(gutter === "small"){
      gutterMargin = '20px'
    }else if (gutter === "medium"){
      gutterMargin = '30px'
    }else if (gutter === "large"){
      gutterMargin = '40px'
    }else if (gutter === "huge"){
      gutterMargin = '50px'
    }else {
      gutterMargin = '';
    }
  }

  var selectors = {
    " ":{
      "opacity": hideWidget? 0.2 : 1,
    },
    " .responsive-block-editor-addons-team-avatar-wrapper": {
      "text-align": alignment,
      "text-align": `-webkit-${alignment}`,
    },

    " .responsive-block-editor-addons-team-avatar": {
      "width": generateCSSUnit(imageWidth, "px"),
      "max-width": generateCSSUnit(imageWidth, "px"),
      "margin-top": generateCSSUnit(imageMarginTop, "px"),
      "margin-bottom": generateCSSUnit(imageMarginBottom, "px"),
    },

    " .responsive-block-editor-addons-team-name": {
      "color": titleColor,
      "font-family": titleFontFamily,
      "font-size": generateCSSUnit(titleFontSize, "px"),
      "font-weight": titleFontWeight,
      "line-height": titleLineHeight,
      "margin-bottom": generateCSSUnit(titleSpacing, "px"),
    },

    " .responsive-block-editor-addons-team-designation": {
      "color": designationColor,
      "font-family": designationFontFamily,
      "font-size": generateCSSUnit(designationFontSize, "px"),
      "font-weight": designationFontWeight,
      "line-height": designationLineHeight,
      "margin-bottom": generateCSSUnit(designationSpacing, "px"),
    },

    " .responsive-block-editor-addons-team-description": {
      "color": descriptionColor,
      "font-family": descriptionFontFamily,
      "font-size": generateCSSUnit(descriptionFontSize, "px"),
      "font-weight": descriptionFontWeight,
      "line-height": descriptionLineHeight,
      "margin-bottom": generateCSSUnit(descriptionSpacing, "px"),
    },

    " .responsive-block-editor-addons-team-social-icons.edit-block a": {
      "margin-left": generateCSSUnit(socialIconSpacing, "px"),
      "margin-right": generateCSSUnit(socialIconSpacing, "px"),
    },

    " .responsive-block-editor-addons-team-social-icons.edit-block .dashicons.dashicons-twitter": {
      "color": socialIconColor,
      "font-size": generateCSSUnit(iconSize, "px"),
      "text-decoration": "none",
      "height": generateCSSUnit(iconSize, "px"),
      "width": generateCSSUnit(iconSize, "px"),
    },

    " .responsive-block-editor-addons-team-social-icons.edit-block .dashicons.dashicons-facebook": {
      "color": socialIconColor,
      "font-size": generateCSSUnit(iconSize, "px"),
      "text-decoration": "none",
      "height": generateCSSUnit(iconSize, "px"),
      "width": generateCSSUnit(iconSize, "px"),
    },

    " .responsive-block-editor-addons-team-social-icons.edit-block .dashicons.dashicons-linkedin": {
      "color": socialIconColor,
      "font-size": generateCSSUnit(iconSize, "px"),
      "text-decoration": "none",
      "height": generateCSSUnit(iconSize, "px"),
      "width": generateCSSUnit(iconSize, "px"),
    },

    " .responsive-block-editor-addons-team-social-icons.edit-block .dashicons.dashicons-instagram": {
      "color": socialIconColor,
      "font-size": generateCSSUnit(iconSize, "px"),
      "text-decoration": "none",
      "height": generateCSSUnit(iconSize, "px"),
      "width": generateCSSUnit(iconSize, "px"),
    },

    " .responsive-block-editor-addons-team-social-icons.edit-block .dashicons.dashicons-email": {
      "color": socialIconColor,
      "font-size": generateCSSUnit(iconSize, "px"),
      "text-decoration": "none",
      "height": generateCSSUnit(iconSize, "px"),
      "width": generateCSSUnit(iconSize, "px"),
    },

    " .responsive-block-editor-addons-team-social-icons.edit-block .dashicons.dashicons-youtube": {
      "color": socialIconColor,
      "font-size": generateCSSUnit(iconSize, "px"),
      "text-decoration": "none",
      "height": generateCSSUnit(iconSize, "px"),
      "width": generateCSSUnit(iconSize, "px"),
    },

    " .responsive-block-editor-addons-team-social-icons.edit-block .dashicons.dashicons-pinterest": {
      "color": socialIconColor,
      "font-size": generateCSSUnit(iconSize, "px"),
      "text-decoration": "none",
      "height": generateCSSUnit(iconSize, "px"),
      "width": generateCSSUnit(iconSize, "px"),
    },

    " .responsive-block-editor-addons-team-social-icons a": {
      "padding": generateCSSUnit(iconBackgroundSize, 'px'),
      "background-color": socialIconBackgroundColor,
      "border": generateCSSUnit(iconBorderSize,'px') + ' solid ' + socialIconBorderColor,
      "border-radius": generateCSSUnit(iconBorderRadius, '%')
    },

    " .responsive-block-editor-addons-team-social-icons li:hover a": {
      "background-color": socialIconBackgroundHoverColor,
      "border": generateCSSUnit(iconBorderSize,'px') + ' solid ' + socialIconBorderHoverColor,
    },

    " .responsive-block-editor-addons-team-social-icons li:hover .dashicons": {
      color: socialIconHoverColor+'!important',
    },

    " .wp-block-responsive-block-editor-addons-team": {
      "background-image": bggradient,
      "background-size": backgroundImageSize,
      "background-repeat": backgroundImageRepeat,
      "background-position": backgroundImagePosition,
      "background-attachment": backgroundAttachment,
      "border-width": generateCSSUnit(borderWidth, "px"),
      "border-color": borderColor,
      "border-radius": generateCSSUnit(borderRadius, "px"),
      "padding": generateCSSUnit(padding, "px"),
      "text-align": alignment,
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
  };

  var mobile_selectors = {
    " ":{
        "opacity": hideWidgetMobile? 0.2 : 1,
    },
    " .wp-block-responsive-block-editor-addons-team": {
        "margin-bottom": gutterMargin,
    },
    " .responsive-block-editor-addons-team-avatar": {
      "width": generateCSSUnit(imageWidthMobile, "px"),
      "max-width": generateCSSUnit(imageWidthMobile, "px"),
      "margin-top": generateCSSUnit(imageMarginTopMobile, "px"),
      "margin-bottom": generateCSSUnit(imageMarginBottomMobile, "px"),
    },
    ".has-columns.has-responsive-columns.responsive-team-block-columns__stack-mobile > *:not(.block-editor-inner-blocks)": {
      "max-width": "100%",
      "min-width": "100%",
    },
    " .responsive-block-editor-addons-team-name": {
      "margin-bottom": generateCSSUnit(titleSpacingMobile, "px"),
	  "font-size": generateCSSUnit(titleFontSizeMobile, "px"),
    },

    " .responsive-block-editor-addons-team-designation": {
      "margin-bottom": generateCSSUnit(designationSpacingMobile, "px"),
	  "font-size": generateCSSUnit(designationFontSizeMobile, "px"),
    },

    " .responsive-block-editor-addons-team-description": {
      "margin-bottom": generateCSSUnit(descriptionSpacingMobile, "px"),
	  "font-size": generateCSSUnit(descriptionFontSizeMobile, "px"),
    },

    " .responsive-block-editor-addons-team-social-icons.edit-block a": {
      "margin-left": generateCSSUnit(socialIconSpacingMobile, "px"),
      "margin-right": generateCSSUnit(socialIconSpacingMobile, "px"),
    },
  };

  var tablet_selectors = {
    " ":{
        "opacity": hideWidgetTablet? 0.2 : 1,
    },
    " .wp-block-responsive-block-editor-addons-team": {
      "margin-bottom": gutterMargin,
    },
    " .responsive-block-editor-addons-team-avatar": {
      "width": generateCSSUnit(imageWidthTablet, "px"),
      "max-width": generateCSSUnit(imageWidthTablet, "px"),
      "margin-top": generateCSSUnit(imageMarginTopTablet, "px"),
      "margin-bottom": generateCSSUnit(imageMarginBottomTablet, "px"),
    },
    ".has-columns.has-responsive-columns.responsive-team-block-columns__stack-tablet > *:not(.block-editor-inner-blocks)": {
      "max-width": "100%",
      "min-width": "100%",
    },
    " .responsive-block-editor-addons-team-name": {
      "margin-bottom": generateCSSUnit(titleSpacingTablet, "px"),
	  "font-size": generateCSSUnit(titleFontSizeTablet, "px"),
    },

    " .responsive-block-editor-addons-team-designation": {
      "margin-bottom": generateCSSUnit(designationSpacingTablet, "px"),
	  "font-size": generateCSSUnit(designationFontSizeTablet, "px"),
    },

    " .responsive-block-editor-addons-team-description": {
      "margin-bottom": generateCSSUnit(descriptionSpacingTablet, "px"),
	  "font-size": generateCSSUnit(descriptionFontSizeTablet, "px"),
    },

    " .responsive-block-editor-addons-team-social-icons.edit-block a": {
      "margin-left": generateCSSUnit(socialIconSpacingTablet, "px"),
      "margin-right": generateCSSUnit(socialIconSpacingTablet, "px"),
    },
  };

  var styling_css = "";
  var id = `.wp-block-responsive-block-editor-addons-team-wrapper.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
