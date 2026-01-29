/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";

function EditorStyles(props) {
    const {
        alignment,
        bgColor,
        block_id,
        gridBorderColor,
        gridBorderRadius,
        gridTopRadius,
        gridRightRadius,
        gridBottomRadius,
        gridLeftRadius,
        gridTopRadiusTablet,
        gridRightRadiusTablet,
        gridBottomRadiusTablet,
        gridLeftRadiusTablet,
        gridTopRadiusMobile,
        gridRightRadiusMobile,
        gridBottomRadiusMobile,
        gridLeftRadiusMobile,
        gridBorderStyle,
        gridBorderWidth,
        boxShadow,
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
        columns,
        columnsMobile,
        columnsTablet,
        columnGap,
        columnGapMobile,
        columnGapTablet,
        contentPadding,
        contentPaddingMobile,
        contentPaddingTablet,
        countColor,
        countFontFamily,
        countFontSize,
        countFontSizeMobile,
        countFontSizeTablet,
        countFontWeight,
        countLineHeight,
        countLineHeightMobile,
        countLineHeightTablet,
        listBottomMargin,
        listBottomMarginMobile,
        listBottomMarginTablet,
        listTopMargin,
        listTopMarginMobile,
        listTopMarginTablet,
        listFontFamily,
        listFontSize,
        listFontSizeMobile,
        listFontSizeTablet,
        listFontWeight,
        listLineHeight,
        listLineHeightMobile,
        listLineHeightTablet,
        listStyle,
        listStyleColor,
        listStyleColorHover,
        listTextColor,
        listTextColorHover,
        rowGap,
        rowGapMobile,
        rowGapTablet,
        separatorColor,
        separatorStyle,
        separatorWidth,
        titleColor,
        titleBottomSpace,
        titleBottomSpaceMobile,
        titleBottomSpaceTablet,
        titleFontFamily,
        titleFontSize,
        titleFontSizeMobile,
        titleFontSizeTablet,
        titleFontWeight,
        titleLineHeight,
        titleLineHeightMobile,
        titleLineHeightTablet,
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
        countTypographyColor,
        titleTypographyColor,
        titleTextTransform,
        titleFontStyle,
        countTextTransform,
        countFontStyle,
        listTextTransform,
        listFontStyle,
        titleTextDecoration,
        countTextDecoration,
        listTextDecoration,
    } = props.attributes;


    const borderGrid = "none" !== gridBorderStyle ? generateCSSUnit(gridBorderWidth, "px") + ' ' + gridBorderStyle + ' ' + gridBorderColor : "none";
    const borderRadiusGrid = "none" !== gridBorderStyle ? generateCSSUnit(gridTopRadius, "px") + ' ' +  generateCSSUnit(gridRightRadius, "px") + ' ' +  generateCSSUnit(gridBottomRadius, "px") + ' ' +  generateCSSUnit(gridLeftRadius, "px"): 0;
    const borderRadiusGridMobile = "none" !== gridBorderStyle ? generateCSSUnit(gridTopRadiusMobile, "px") + ' ' +  generateCSSUnit(gridRightRadiusMobile, "px") + ' ' +  generateCSSUnit(gridBottomRadiusMobile, "px") + ' ' +  generateCSSUnit(gridLeftRadiusMobile, "px"): 0;
    const borderRadiusGridTablet = "none" !== gridBorderStyle ? generateCSSUnit(gridTopRadiusTablet, "px") + ' ' +  generateCSSUnit(gridRightRadiusTablet, "px") + ' ' +  generateCSSUnit(gridBottomRadiusTablet, "px") + ' ' +  generateCSSUnit(gridLeftRadiusTablet, "px"): 0;
    const borderBottomColor = "none" !== separatorStyle ? separatorColor : "";
    const borderBottomWidth = "none" !== separatorStyle ? separatorWidth : 0;
    var boxShadowPositionCSS = boxShadowPosition;
    var hoverboxShadowPositionCSS = hoverboxShadowPosition;

    if ("outset" === boxShadowPosition) {
      boxShadowPositionCSS = "";
    }
    if ("outset" === hoverboxShadowPosition) {
      hoverboxShadowPositionCSS = "";
    }

    const boxShadowValues = generateCSSUnit(boxShadowHOffset, "px") + " " + generateCSSUnit(boxShadowVOffset, "px") + " " + generateCSSUnit(boxShadowBlur, "px") + " " + generateCSSUnit(boxShadowSpread, "px") + " " + boxShadowColor + " " + boxShadowPositionCSS;

    const hoverboxShadowValues = hoverboxShadowColor !== '' ? generateCSSUnit(hoverboxShadowHOffset, "px") + " " + generateCSSUnit(hoverboxShadowVOffset, "px") + " " + generateCSSUnit(hoverboxShadowBlur, "px") + " " + generateCSSUnit(hoverboxShadowSpread, "px") + " " + hoverboxShadowColor + " " + hoverboxShadowPositionCSS : '';
    const isOn = responsive_globals?.is_responsive_conditions_on ?? 1;

    var selectors = {
        " ":{
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
        " .responsive-block-editor-addons-block-grid": {
            "display": "grid",
            "grid-template-columns": 'repeat(' + columns + ', 1fr)',
            "grid-column-gap": generateCSSUnit(columnGap, "px"),
            "grid-row-gap": generateCSSUnit(rowGap, "px")
        },
        " .responsive-block-editor-addons-block-box": {
            "border": borderGrid,
            "border-radius": borderRadiusGrid,
            "padding": generateCSSUnit(contentPadding, "px"),
            "background-color": bgColor,
            "text-align": alignment,
            "box-shadow": boxShadowValues,
        },
        " .responsive-block-editor-addons-block-box:hover": {
            "box-shadow": hoverboxShadowValues,
        },
        " .responsive-block-editor-addons-block-title": {
            "color": titleTypographyColor,
            "margin-bottom": generateCSSUnit(titleBottomSpace, "px"),
            "margin-top": 0,
            "font-family": titleFontFamily,
            "font-size": `${generateCSSUnit(titleFontSize, "px")} !important`,
            "font-weight": titleFontWeight,
            "line-height": titleLineHeight,
            "text-transform": titleTextTransform,
            "text-decoration": titleTextDecoration,
            "font-style": titleFontStyle,
        },
        " .responsive-block-editor-addons-block-count": {
            "color": countTypographyColor,
            "font-family": countFontFamily,
            "font-size": `${generateCSSUnit(countFontSize, "px")} !important`,
            "font-weight": countFontWeight,
            "line-height": countLineHeight,
            "text-transform": countTextTransform,
            "text-decoration": countTextDecoration,
            "font-style": countFontStyle,
        },
        " .responsive-block-editor-addons-block-list-item": {
            "list-style": listStyle,
            "color": listStyleColor,
            "font-family": listFontFamily,
            "font-size": `${generateCSSUnit(listFontSize, "px")} !important`,
            "font-weight": listFontWeight,
            "line-height": generateCSSUnit(listLineHeight, "px"),
            "text-transform": listTextTransform,
            "text-decoration": listTextDecoration,
            "font-style": listFontStyle,
        },
        " .responsive-block-editor-addons-block-list-item:hover": {
            "color": listStyleColorHover
        },
        " .responsive-block-editor-addons-block-link-name": {
            "color": listTextColor,
            "display": "inline"
        },
        " .responsive-block-editor-addons-block-link-name:hover": {
            "color": listTextColorHover
        },
        " .responsive-block-editor-addons-block-link-wrap": {
            "margin-bottom": generateCSSUnit(listBottomMargin, "px"),
            "margin-top": generateCSSUnit(listTopMargin, "px")
        },
        " .responsive-block-editor-addons-block-separator": {
            "border-bottom-style": separatorStyle,
            "border-bottom-width": generateCSSUnit(borderBottomWidth, "px"),
            "border-bottom-color": borderBottomColor
        }

    };

    var mobile_selectors = {
        " ":{
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
        " .responsive-block-editor-addons-block-grid": {
            "display": "grid",
            "grid-template-columns": 'repeat(' + columnsMobile + ', 1fr)',
            "grid-column-gap": generateCSSUnit(columnGapMobile, "px"),
            "grid-row-gap": generateCSSUnit(rowGapMobile, "px")
        },

        " .responsive-block-editor-addons-block-box": {
            "padding": generateCSSUnit(contentPaddingMobile, "px"),
            "border-radius": borderRadiusGridMobile,
        },
        " .responsive-block-editor-addons-block-title": {
            "font-size": `${generateCSSUnit(titleFontSizeMobile, "px")} !important`,
            "margin-bottom": generateCSSUnit(titleBottomSpaceMobile, "px"),
        },
        " .responsive-block-editor-addons-block-count": {
            "font-size": `${generateCSSUnit(countFontSizeMobile, "px")} !important`,
        },
        " .responsive-block-editor-addons-block-list-item": {
            "font-size": `${generateCSSUnit(listFontSizeMobile, "px")} !important`,
        },
        " .responsive-block-editor-addons-block-link-wrap": {
            "margin-bottom": generateCSSUnit(listBottomMarginMobile, "px"),
            "margin-top": generateCSSUnit(listTopMarginMobile, "px")
        },
    };

    var tablet_selectors = {
        " ":{
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
        " .responsive-block-editor-addons-block-grid": {
            "display": "grid",
            "grid-template-columns": 'repeat(' + columnsTablet + ', 1fr)',
            "grid-column-gap": generateCSSUnit(columnGapTablet, "px"),
            "grid-row-gap": generateCSSUnit(rowGapTablet, "px")
        },
        " .responsive-block-editor-addons-block-box": {
            "padding": generateCSSUnit(contentPaddingTablet, "px"),
            "border-radius": borderRadiusGridTablet,
        },
        " .responsive-block-editor-addons-block-title": {
            "font-size": `${generateCSSUnit(titleFontSizeTablet, "px")} !important`,
            "margin-bottom": generateCSSUnit(titleBottomSpaceTablet, "px"),
        },
        " .responsive-block-editor-addons-block-count": {
            "font-size": `${generateCSSUnit(countFontSizeTablet, "px")} !important`,
        },
        " .responsive-block-editor-addons-block-list-item": {
            "font-size": `${generateCSSUnit(listFontSizeTablet, "px")} !important`,
        },
        " .responsive-block-editor-addons-block-link-wrap": {
            "margin-bottom": generateCSSUnit(listBottomMarginTablet, "px"),
            "margin-top": generateCSSUnit(listTopMarginTablet, "px")
        },
    };

    var styling_css = "";
    var id = `.responsive-block-editor-addons-block-taxonomy-list.block-${block_id}`;

    styling_css = generateCSS(selectors, id);
    styling_css += generateCSS(tablet_selectors, id, true, "tablet");
    styling_css += generateCSS(mobile_selectors, id, true, "mobile");

    return styling_css;
}

export default EditorStyles;
