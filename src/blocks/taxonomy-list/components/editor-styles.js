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
        gridBorderStyle,
        gridBorderWidth,
        boxShadow,
        boxShadowColor,
        boxShadowHOffset,
        boxShadowVOffset,
        boxShadowBlur,
        boxShadowSpread,
        boxShadowPosition,
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
    } = props.attributes;


    const borderGrid = "none" !== gridBorderStyle ? generateCSSUnit(gridBorderWidth, "px") + ' ' + gridBorderStyle + ' ' + gridBorderColor : "none";
    const borderRadiusGrid = "none" !== gridBorderStyle ? generateCSSUnit(gridBorderRadius, "px") : 0;
    const borderBottomColor = "none" !== separatorStyle ? separatorColor : "";
    const borderBottomWidth = "none" !== separatorStyle ? separatorWidth : 0;
    var boxShadowPositionCSS = boxShadowPosition;

    if ("outset" === boxShadowPosition) {
      boxShadowPositionCSS = "";
    }

    const boxShadowValues = generateCSSUnit(boxShadowHOffset, "px") + " " + generateCSSUnit(boxShadowVOffset, "px") + " " + generateCSSUnit(boxShadowBlur, "px") + " " + generateCSSUnit(boxShadowSpread, "px") + " " + boxShadowColor + " " + boxShadowPositionCSS;

    var selectors = {
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
        " .responsive-block-editor-addons-block-title": {
            "color": titleColor,
            "margin-bottom": generateCSSUnit(titleBottomSpace, "px"),
            "margin-top": 0,
            "font-family": titleFontFamily,
            "font-size": `${generateCSSUnit(titleFontSize, "px")} !important`,
            "font-weight": titleFontWeight,
            "line-height": titleLineHeight
        },
        " .responsive-block-editor-addons-block-count": {
            "color": countColor,
            "font-family": countFontFamily,
            "font-size": `${generateCSSUnit(countFontSize, "px")} !important`,
            "font-weight": countFontWeight,
            "line-height": countLineHeight
        },
        " .responsive-block-editor-addons-block-list-item": {
            "list-style": listStyle,
            "color": listStyleColor,
            "font-family": listFontFamily,
            "font-size": `${generateCSSUnit(listFontSize, "px")} !important`,
            "font-weight": listFontWeight,
            "line-height": generateCSSUnit(listLineHeight, "px")
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
        " .responsive-block-editor-addons-block-grid": {
            "display": "grid",
            "grid-template-columns": 'repeat(' + columnsMobile + ', 1fr)',
            "grid-column-gap": generateCSSUnit(columnGapMobile, "px"),
            "grid-row-gap": generateCSSUnit(rowGapMobile, "px")
        },

        " .responsive-block-editor-addons-block-box": {
            "padding": generateCSSUnit(contentPaddingMobile, "px"),
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
        " .responsive-block-editor-addons-block-grid": {
            "display": "grid",
            "grid-template-columns": 'repeat(' + columnsTablet + ', 1fr)',
            "grid-column-gap": generateCSSUnit(columnGapTablet, "px"),
            "grid-row-gap": generateCSSUnit(rowGapTablet, "px")
        },
        " .responsive-block-editor-addons-block-box": {
            "padding": generateCSSUnit(contentPaddingTablet, "px")
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
