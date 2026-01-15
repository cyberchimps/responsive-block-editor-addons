/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";

function EditorStyles(props) {
  const {
    align,
    alignTablet,
    alignMobile,
    gap,
    inner_gap,
    size,
    sizeMobile,
    sizeTablet,
    border,
    bgSize,
    bgSizeMobile,
    bgSizeTablet,
    borderRadius,
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
    fontSizeType,
    block_id,
    labelFontFamily,
    labelFontWeight,
    labelFontSize,
    labelLineHeight,
    labelFontSizeTablet,
    labelFontSizeMobile,
    labelFontColor,
    labelFontColorHover,
    iconColor,
    iconBorderColor,
    iconBackgroundColor,
    iconColorHover,
    iconBorderColorHover,
    iconBackgroundColorHover,
    hideLabel,
	labelFontLineHeight, // For compatibility with v1.3.2.
  hideWidget,
  hideWidgetTablet,
  hideWidgetMobile,
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
  blockTopMargin,
  blockTopMarginMobile,
  blockTopMarginTablet,
  blockBottomMargin,
  blockBottomMarginMobile,
  blockBottomMarginTablet,
  blockLeftMargin,
  blockLeftMarginMobile,
  blockLeftMarginTablet,
  blockRightMargin,
  blockRightMarginMobile,
  blockRightMarginTablet,
  iconListUpdateColorFromParent,
  labelTextTransform,
  labelFontStyle,
  labelTextDecoration
  } = props.attributes;

  var editor_gap = undefined !== typeof gap && "" !== gap ? gap + 0 : 0;

  var alignment =
    align == "left" ? "flex-start" : align == "right" ? "flex-end" : "center";

  iconListUpdateColorFromParent === '' ? false : true;
  const isOn = responsive_globals?.is_responsive_conditions_on ?? 1;

  var selectors = {
    "": {
        "opacity": hideWidget && isOn ? 0.2 : 1,
        "padding-top": generateCSSUnit(blockTopPadding, "px"),
        "padding-right": generateCSSUnit(blockRightPadding, "px"),
        "padding-bottom": generateCSSUnit(blockBottomPadding, "px"),
        "padding-left": generateCSSUnit(blockLeftPadding, "px"),
        "margin-top": generateCSSUnit(blockTopMargin, "px"),
        "margin-right": generateCSSUnit(blockRightMargin, "px"),
        "margin-bottom": generateCSSUnit(blockBottomMargin, "px"),
        "margin-left": generateCSSUnit(blockLeftMargin, "px"),
    },
    " .responsive-block-editor-addons-icon-list__source-icon svg": {
      width: generateCSSUnit(size, fontSizeType),
      height: generateCSSUnit(size, fontSizeType),
    },
    ".responsive-block-editor-addons-icon-list__layout-horizontal .wp-block-responsive-block-editor-addons-icons-list-child": {
      "margin-left": `${generateCSSUnit(editor_gap / 2, fontSizeType)}!important`,
      "margin-right": `${generateCSSUnit(editor_gap / 2, fontSizeType)}!important`,
    },
    ".responsive-block-editor-addons-icon-list__layout-vertical .responsive-block-editor-addons-icon-list__content-wrap": {
      "margin-bottom": generateCSSUnit(editor_gap, fontSizeType),
    },
    " .responsive-block-editor-addons-icon-list__content-wrap .responsive-block-editor-addons-icon-list__source-icon": {
      "color": iconColor !== '' ? iconColor : '',
    },
    ":hover .responsive-block-editor-addons-icon-list__content-wrap .responsive-block-editor-addons-icon-list__source-icon": {
      color: iconColorHover !== '' ? iconColorHover : '',
    },
    " .responsive-block-editor-addons-icon-list__content-wrap .responsive-block-editor-addons-icon-list__source-wrap": {
      "background-color": iconBackgroundColor !== '' ? iconBackgroundColor:'',
      "border-color": iconBorderColor !== '' ? iconBorderColor: '',
    },
    ":hover .responsive-block-editor-addons-icon-list__content-wrap .responsive-block-editor-addons-icon-list__source-wrap": {
      "background-color": iconBackgroundColorHover !== '' ? iconBackgroundColorHover:'',
      "border-color": iconBorderColorHover !== '' ? iconBorderColorHover:'',
    },
    " .responsive-block-editor-addons-icon-list__content-wrap .responsive-block-editor-addons-icon-list__source-icon svg": {
      fill: iconColor !== '' ? iconColor:'',
    },
    ":hover .responsive-block-editor-addons-icon-list__content-wrap .responsive-block-editor-addons-icon-list__source-icon svg": {
      fill: iconColorHover !== '' ? iconColorHover:'',
    },
    " .responsive-block-editor-addons-icon-list__content-wrap .responsive-block-editor-addons-icon-list__label": {
      color: labelFontColor !== '' ? labelFontColor:'',
    },
    ":hover .responsive-block-editor-addons-icon-list__content-wrap .responsive-block-editor-addons-icon-list__label": {
      color: labelFontColorHover !== '' ? labelFontColorHover:'',
    },
    " .responsive-block-editor-addons-icon-list__source-wrap": {
      padding: generateCSSUnit(bgSize, "px"),
      "border-top-left-radius": generateCSSUnit(blockTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadius, "px"),
      "border-width": generateCSSUnit(border, "px"),
      "margin-right": hideLabel ? '0px' : generateCSSUnit(inner_gap, "px"),
    },
    " .responsive-block-editor-addons-icon-list__source-icon": {
      width: generateCSSUnit(size, fontSizeType),
      height: generateCSSUnit(size, fontSizeType),
      "font-size": generateCSSUnit(size, fontSizeType),
    },
    " .responsive-block-editor-addons-icon-list__source-image": {
      width: generateCSSUnit(size, fontSizeType),
      height: generateCSSUnit(size, fontSizeType),
    },
    " .responsive-block-editor-addons-icon-list__label-wrap": {
      "text-align": align,
    },
    " .responsive-block-editor-addons-icon-list__wrap .block-editor-inner-blocks": {
      "text-align": align,
    },
    ".responsive-block-editor-addons-icon-list__layout-horizontal .block-editor-block-list__layout ": {
      "justify-content": alignment,
      "-webkit-box-pack": alignment,
      "-ms-flex-pack": alignment,
    },
    ".responsive-block-editor-addons-icon-list__layout-horizontal .wp-block[data-type='responsive-block-editor-addons/icons-list-child']:first-child .wp-block-responsive-block-editor-addons-icons-list-child": {
      "margin-left": "0",
    },
    ".responsive-block-editor-addons-icon-list__layout-horizontal .wp-block[data-type='responsive-block-editor-addons/icons-list-child']:last-child .wp-block-responsive-block-editor-addons-icons-list-child": {
      "margin-right": "0",
    },
    " .responsive-block-editor-addons-icon-list__label": {
      "font-family": labelFontFamily,
      "font-size": generateCSSUnit(labelFontSize, "px"),
      "text-transform": labelTextTransform,
      "font-style": labelFontStyle,
      "font-weight": labelFontWeight,
      "line-height": labelFontLineHeight !== 999 && labelLineHeight === 1 ? labelFontLineHeight : labelLineHeight, // For compatibility with v1.3.2.
    },
  };

  var alignment =
  alignMobile == "left" ? "flex-start" : align == "right" ? "flex-end" : "center";
  var mobile_selectors = {
    "": {
        "opacity": hideWidgetMobile && isOn ? 0.2 : 1,
        "padding-top": generateCSSUnit(blockTopPaddingMobile, "px"),
        "padding-right": generateCSSUnit(blockRightPaddingMobile, "px"),
        "padding-bottom": generateCSSUnit(blockBottomPaddingMobile, "px"),
        "padding-left": generateCSSUnit(blockLeftPaddingMobile, "px"),
        "margin-top": generateCSSUnit(blockTopMarginMobile, "px"),
        "margin-right": generateCSSUnit(blockRightMarginMobile, "px"),
        "margin-bottom": generateCSSUnit(blockBottomMarginMobile, "px"),
        "margin-left": generateCSSUnit(blockLeftMarginMobile, "px"),
    },
	" .responsive-block-editor-addons-icon-list__source-icon": {
		"width": sizeMobile ? generateCSSUnit(sizeMobile, fontSizeType) : generateCSSUnit(size, fontSizeType),
		"height": sizeMobile ? generateCSSUnit(sizeMobile, fontSizeType) : generateCSSUnit(size, fontSizeType),
	},
    " .responsive-block-editor-addons-icon-list__source-icon svg": {
		"width": sizeMobile ? generateCSSUnit(sizeMobile, fontSizeType) : generateCSSUnit(size, fontSizeType),
		"height": sizeMobile ? generateCSSUnit(sizeMobile, fontSizeType) : generateCSSUnit(size, fontSizeType),
    },
    " .responsive-block-editor-addons-icon-list__label": {
      "font-size": labelFontSizeMobile ? generateCSSUnit(labelFontSizeMobile, "px") : generateCSSUnit(labelFontSize, "px"),
    },
    " .responsive-block-editor-addons-icon-list__source-wrap": {
      padding: bgSizeMobile ? generateCSSUnit(bgSizeMobile, "px") : generateCSSUnit(bgSize, "px"),
      "border-top-left-radius": generateCSSUnit(blockTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusMobile, "px"),
    },
    ".responsive-block-editor-addons-icon-list__layout-horizontal .block-editor-block-list__layout ": {
      "justify-content": alignment,
      "-webkit-box-pack": alignment,
      "-ms-flex-pack": alignment,
    },
    " .responsive-block-editor-addons-icon-list__wrap .block-editor-inner-blocks": {
      "text-align": alignMobile,
    },
  };

  var alignment =
  alignTablet == "left" ? "flex-start" : align == "right" ? "flex-end" : "center";

  var tablet_selectors = {
    "": {
        "opacity": hideWidgetTablet && isOn ? 0.2 : 1,
        "padding-top": generateCSSUnit(blockTopPaddingTablet, "px"),
        "padding-right": generateCSSUnit(blockRightPaddingTablet, "px"),
        "padding-bottom": generateCSSUnit(blockBottomPaddingTablet, "px"),
        "padding-left": generateCSSUnit(blockLeftPaddingTablet, "px"),
        "margin-top": generateCSSUnit(blockTopMarginTablet, "px"),
        "margin-right": generateCSSUnit(blockRightMarginTablet, "px"),
        "margin-bottom": generateCSSUnit(blockBottomMarginTablet, "px"),
        "margin-left": generateCSSUnit(blockLeftMarginTablet, "px"),
    },
	" .responsive-block-editor-addons-icon-list__source-icon": {
		"width": sizeTablet ? generateCSSUnit(sizeTablet, fontSizeType) : generateCSSUnit(size, fontSizeType),
		"height": sizeTablet ? generateCSSUnit(sizeTablet, fontSizeType) : generateCSSUnit(size, fontSizeType),
	},
    " .responsive-block-editor-addons-icon-list__source-icon svg": {
		"width": sizeTablet ? generateCSSUnit(sizeTablet, fontSizeType) : generateCSSUnit(size, fontSizeType),
		"height": sizeTablet ? generateCSSUnit(sizeTablet, fontSizeType) : generateCSSUnit(size, fontSizeType),
    },
    " .responsive-block-editor-addons-icon-list__label": {
      "font-size": labelFontSizeTablet ? generateCSSUnit(labelFontSizeTablet, "px") : generateCSSUnit(labelFontSize, "px"),
    },
    " .responsive-block-editor-addons-icon-list__source-wrap": {
	    "border-top-left-radius": generateCSSUnit(blockTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusTablet, "px"),
    },
    ".responsive-block-editor-addons-icon-list__layout-horizontal .block-editor-block-list__layout ": {
      "justify-content": alignment,
      "-webkit-box-pack": alignment,
      "-ms-flex-pack": alignment,
    },
    " .responsive-block-editor-addons-icon-list__wrap .block-editor-inner-blocks": {
      "text-align": alignTablet,
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-icon-list__outer-wrap.responsive-block-editor-addons-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
