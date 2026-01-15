/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";

function EditorStyles(props) {
    const {
        block_id,
        overallAlignment,
        mainHeadingColor,
        secondaryHeadingColor,
        descriptionColor,
        mainHeadingFontFamily,
        mainHeadingFontSize,
        mainHeadingFontSizeMobile,
        mainHeadingFontSizeTablet,
        mainHeadingFontWeight,
        mainHeadingLineHeight,
        mainHeadingLineHeightMobile,
        mainHeadingLineHeightTablet,
        mainHeadingLetterSpacing,
        subHeadingFontFamily,
        subHeadingFontSize,
        subHeadingFontSizeMobile,
        subHeadingFontSizeTablet,
        subHeadingFontWeight,
        subHeadingLineHeight,
        subHeadingLineHeightMobile,
        subHeadingLineHeightTablet,
        subHeadingLetterSpacing,
        descriptionFontFamily,
        descriptionFontSize,
        descriptionFontSizeMobile,
        descriptionFontSizeTablet,
        descriptionFontWeight,
        descriptionLineHeight,
        descriptionLineHeightMobile,
        descriptionLineHeightTablet,
        descriptionLetterSpacing,
        timeMargin,
        timeMarginMobile,
        timeMarginTablet,
        costMargin,
        costMarginMobile,
        costMarginTablet,
        rowGap,
        rowGapMobile,
        rowGapTablet,
        toolsListStyle,
        materialsListStyle,
        borderStyle,
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
        blockIsRadiusControlConnected,
        blockIsRadiusValueUpdated,
        borderWidth,
        borderColor,
        stepsMargin,
        stepsMarginMobile,
        stepsMarginTablet,
        hideWidget,
        hideWidgetTablet,
        hideWidgetMobile,
        mainHeadingTextDecoration,
        subHeadingTextDecoration,
        descriptionTextDecoration,
    } = props.attributes;

    const border = "none" !== borderStyle ? generateCSSUnit(borderWidth, "px") + " " + borderStyle + " " + borderColor : "";
    const borderRad = "none" !== borderStyle ? generateCSSUnit(borderRadius, "px") : ""; 
    const isOn = responsive_globals?.is_responsive_conditions_on ?? 1;

    var selectors = {
        "": {
            "opacity": hideWidget && isOn ? 0.2 : 1,
            "text-align": overallAlignment,
            "padding": generateCSSUnit(10, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-main-heading": {
            "color": mainHeadingColor,
            "letter-spacing": generateCSSUnit(mainHeadingLetterSpacing, "px"),
            "line-height": mainHeadingLineHeight,
            "font-family": mainHeadingFontFamily,
            "font-size": generateCSSUnit(mainHeadingFontSize, "px"),
            "font-weight": mainHeadingFontWeight,
            "margin-bottom": generateCSSUnit(rowGap, "px"),
            "text-decoration": mainHeadingTextDecoration,
        },
        " .responsive-block-editor-addons-block-how-to-sub-heading-time": {
            "color": secondaryHeadingColor,
            "display": "inline",
            "letter-spacing": generateCSSUnit(subHeadingLetterSpacing, "px"),
            "line-height": subHeadingLineHeight,
            "font-family": subHeadingFontFamily,
            "font-size": generateCSSUnit(subHeadingFontSize, "px"),
            "font-weight": subHeadingFontWeight,
            "margin-right": generateCSSUnit(timeMargin, "px"),
            "text-decoration": subHeadingTextDecoration,
        },
        " .responsive-block-editor-addons-block-how-to-time-value": {
            "color": descriptionColor,
            "letter-spacing": generateCSSUnit(descriptionLetterSpacing, "px"),
            "line-height": descriptionLineHeight,
            "font-family": descriptionFontFamily,
            "font-size": generateCSSUnit(descriptionFontSize, "px"),
            "font-weight": descriptionFontWeight,
            "text-decoration": descriptionTextDecoration,
        },
        " .responsive-block-editor-addons-block-how-to-sub-heading-cost": {
            "color": secondaryHeadingColor,
            "display": "inline",
            "letter-spacing": generateCSSUnit(subHeadingLetterSpacing, "px"),
            "line-height": subHeadingLineHeight,
            "font-family": subHeadingFontFamily,
            "font-size": generateCSSUnit(subHeadingFontSize, "px"),
            "font-weight": subHeadingFontWeight,
            "margin-right": generateCSSUnit(costMargin, "px"),
            "text-decoration": subHeadingTextDecoration,
        },
        " .responsive-block-editor-addons-block-how-to-cost-value": {
            "color": descriptionColor,
            "display": "inline",
            "letter-spacing": generateCSSUnit(descriptionLetterSpacing, "px"),
            "line-height": descriptionLineHeight,
            "font-family": descriptionFontFamily,
            "font-size": generateCSSUnit(descriptionFontSize, "px"),
            "font-weight": descriptionFontWeight,
            "text-decoration": descriptionTextDecoration,
        },
        " .responsive-block-editor-addons-block-how-to-sub-heading-tools": {
            "color": secondaryHeadingColor,
            "letter-spacing": generateCSSUnit(subHeadingLetterSpacing, "px"),
            "line-height": subHeadingLineHeight,
            "font-family": subHeadingFontFamily,
            "font-size": generateCSSUnit(subHeadingFontSize, "px"),
            "font-weight": subHeadingFontWeight,
            "text-decoration": subHeadingTextDecoration,
        },
        " .responsive-block-editor-addons-block-how-to-tools-list-item": {
            "color": descriptionColor,
            "letter-spacing": generateCSSUnit(descriptionLetterSpacing, "px"),
            "line-height": descriptionLineHeight,
            "font-family": descriptionFontFamily,
            "font-size": generateCSSUnit(descriptionFontSize, "px"),
            "font-weight": descriptionFontWeight,
            "list-style": toolsListStyle,
            "text-decoration": descriptionTextDecoration,
        },
        " .responsive-block-editor-addons-block-how-to-sub-heading-materials": {
            "color": secondaryHeadingColor,
            "letter-spacing": generateCSSUnit(subHeadingLetterSpacing, "px"),
            "line-height": subHeadingLineHeight,
            "font-family": subHeadingFontFamily,
            "font-size": generateCSSUnit(subHeadingFontSize, "px"),
            "font-weight": subHeadingFontWeight,
            "text-decoration": subHeadingTextDecoration,
        },
        " .responsive-block-editor-addons-block-how-to-materials-list-item": {
            "color": descriptionColor,
            "letter-spacing": generateCSSUnit(descriptionLetterSpacing, "px"),
            "line-height": descriptionLineHeight,
            "font-family": descriptionFontFamily,
            "font-size": generateCSSUnit(descriptionFontSize, "px"),
            "font-weight": descriptionFontWeight,
            "list-style": materialsListStyle,
            "text-decoration": descriptionTextDecoration,
        },
        " .responsive-block-editor-addons-block-how-to-sub-heading-steps": {
            "color": secondaryHeadingColor,
            "display": "inline",
            "letter-spacing": generateCSSUnit(subHeadingLetterSpacing, "px"),
            "line-height": subHeadingLineHeight,
            "font-family": subHeadingFontFamily,
            "font-size": generateCSSUnit(subHeadingFontSize, "px"),
            "font-weight": subHeadingFontWeight,
            "text-decoration": subHeadingTextDecoration,
        },
        " .responsive-block-editor-addons-block-how-to-time-area": {
            "margin-top": generateCSSUnit(rowGap, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-cost-area": {
            "margin-top": generateCSSUnit(rowGap, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-tools-area": {
            "margin-top": generateCSSUnit(rowGap, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-materials-area": {
            "margin-top": generateCSSUnit(rowGap, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-steps-area": {
            "margin-top": generateCSSUnit(rowGap, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-main-image": {
            "border": border,
            "border-top-left-radius": generateCSSUnit(blockTopRadius, "px"),
            "border-top-right-radius": generateCSSUnit(blockRightRadius, "px"),
            "border-bottom-right-radius": generateCSSUnit(blockBottomRadius, "px"),
            "border-bottom-left-radius": generateCSSUnit(blockLeftRadius, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-steps .block-editor-block-list__block": {
            "margin-top": generateCSSUnit(stepsMargin, "px")
        },
    };

    var mobile_selectors = {
        "": {
            "opacity": hideWidgetMobile && isOn ? 0.2 : 1,
        },
        " .responsive-block-editor-addons-block-how-to-main-heading": {
            "line-height": mainHeadingLineHeight,
            "font-size": generateCSSUnit(mainHeadingFontSizeMobile, "px"),
            "margin-bottom": generateCSSUnit(rowGapMobile, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-sub-heading-time": {
            "line-height": subHeadingLineHeight,
            "font-weight": generateCSSUnit(subHeadingFontSizeMobile, "px"),
            "margin-right": generateCSSUnit(timeMarginMobile, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-sub-heading-cost": {
            "line-height": subHeadingLineHeight,
            "font-weight": generateCSSUnit(subHeadingFontSizeMobile, "px"),
            "margin-right": generateCSSUnit(costMarginMobile, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-sub-heading-tools": {
            "line-height": subHeadingLineHeight,
            "font-weight": generateCSSUnit(subHeadingFontSizeMobile, "px")
        },
        " .responsive-block-editor-addons-block-how-to-sub-heading-materials": {
            "line-height": subHeadingLineHeight,
            "font-weight": generateCSSUnit(subHeadingFontSizeMobile, "px")
        },
        " .responsive-block-editor-addons-block-how-to-sub-heading-steps": {
            "line-height": subHeadingLineHeight,
            "font-weight": generateCSSUnit(subHeadingFontSizeMobile, "px")
        },
        " .responsive-block-editor-addons-block-how-to-time-value": {
            "line-height": descriptionLineHeight,
            "font-size": generateCSSUnit(descriptionFontSizeMobile, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-cost-value": {
            "line-height": descriptionLineHeight,
            "font-size": generateCSSUnit(descriptionFontSizeMobile, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-tools-list-item": {
            "line-height": descriptionLineHeight,
            "font-size": generateCSSUnit(descriptionFontSizeMobile, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-materials-list-item": {
            "line-height": descriptionLineHeight,
            "font-size": generateCSSUnit(descriptionFontSizeMobile, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-time-area": {
            "margin-top": generateCSSUnit(rowGapMobile, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-cost-area": {
            "margin-top": generateCSSUnit(rowGapMobile, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-tools-area": {
            "margin-top": generateCSSUnit(rowGapMobile, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-materials-area": {
            "margin-top": generateCSSUnit(rowGapMobile, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-steps-area": {
            "margin-top": generateCSSUnit(rowGapMobile, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-steps .block-editor-block-list__block": {
            "margin-top": generateCSSUnit(stepsMarginMobile, "px")
        },
        " .responsive-block-editor-addons-block-how-to-main-image": {
            "border-top-left-radius": generateCSSUnit(blockTopRadiusMobile, "px"),
            "border-top-right-radius": generateCSSUnit(blockRightRadiusMobile, "px"),
            "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusMobile, "px"),
            "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusMobile, "px"),
        },
    };

    var tablet_selectors = {
        "": {
            "opacity": hideWidgetTablet && isOn ? 0.2 : 1,
        },
        " .responsive-block-editor-addons-block-how-to-main-heading": {
            "line-height": mainHeadingLineHeight,
            "font-size": generateCSSUnit(mainHeadingFontSizeTablet, "px"),
            "margin-bottom": generateCSSUnit(rowGapTablet, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-sub-heading-time": {
            "line-height": subHeadingLineHeight,
            "font-weight": generateCSSUnit(subHeadingFontSizeTablet, "px"),
            "margin-right": generateCSSUnit(timeMarginTablet, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-sub-heading-cost": {
            "line-height": subHeadingLineHeight,
            "font-weight": generateCSSUnit(subHeadingFontSizeTablet, "px"),
            "margin-right": generateCSSUnit(costMarginTablet, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-sub-heading-tools": {
            "line-height": subHeadingLineHeight,
            "font-weight": generateCSSUnit(subHeadingFontSizeTablet, "px")
        },
        " .responsive-block-editor-addons-block-how-to-sub-heading-materials": {
            "line-height": subHeadingLineHeight,
            "font-weight": generateCSSUnit(subHeadingFontSizeTablet, "px")
        },
        " .responsive-block-editor-addons-block-how-to-time-value": {
            "line-height": descriptionLineHeight,
            "font-size": generateCSSUnit(descriptionFontSizeTablet, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-tools-list-item": {
            "line-height": descriptionLineHeight,
            "font-size": generateCSSUnit(descriptionFontSizeTablet, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-materials-list-item": {
            "line-height": descriptionLineHeight,
            "font-size": generateCSSUnit(descriptionFontSizeTablet, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-time-area": {
            "margin-top": generateCSSUnit(rowGapTablet, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-cost-area": {
            "margin-top": generateCSSUnit(rowGapTablet, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-tools-area": {
            "margin-top": generateCSSUnit(rowGapTablet, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-materials-area": {
            "margin-top": generateCSSUnit(rowGapTablet, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-steps-area": {
            "margin-top": generateCSSUnit(rowGapTablet, "px"),
        },
        " .responsive-block-editor-addons-block-how-to-steps .block-editor-block-list__block": {
            "margin-top": generateCSSUnit(stepsMarginTablet, "px")
        },
        " .responsive-block-editor-addons-block-how-to-main-image": {
            "border-top-left-radius": generateCSSUnit(blockTopRadiusTablet, "px"),
            "border-top-right-radius": generateCSSUnit(blockRightRadiusTablet, "px"),
            "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusTablet, "px"),
            "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusTablet, "px"),
        },
    };

    var styling_css = "";
    var id = `.responsive-block-editor-addons-block-how-to.block-${block_id}`;

    styling_css = generateCSS(selectors, id);
    styling_css += generateCSS(tablet_selectors, id, true, "tablet");
    styling_css += generateCSS(mobile_selectors, id, true, "mobile");

    return styling_css;
}

export default EditorStyles;
