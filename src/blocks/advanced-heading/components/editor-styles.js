/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";

function EditorStyles(props) {
  const {
    headingTitle,
    headingDesc,
    seperatorStyle,
    headSpacing,
    subheadSpacing,
    separatorSpacing,
    headSpacingTablet,
    subheadSpacingTablet,
    separatorSpacingTablet,
    headSpacingMobile,
    subheadSpacingMobile,
    separatorSpacingMobile,
    separatorHeight,
    separatorWidth,
    separatorWidthType,
    separatorColor,
    headingTitleFontFamily,
    headingTitleFontSize,
    headingTitleFontSizeTablet,
    headingTitleFontSizeMobile,
    headingTitleFontWeight,
    headingTitleLineHeight,
    headingTitleLetterSpacing,
    headingTitleColor,
    subHeadingTitleFontFamily,
    subHeadingTitleFontSize,
    subHeadingTitleFontSizeMobile,
    subHeadingTitleFontSizeTablet,
    subHeadingTitleFontWeight,
    subHeadingTitleLineHeight,
    subHeadingTitleLetterSpacing,
    subHeadingTitleColor,
    headingTag,
    level,
    headingAlignment,
    headingAlignmentTablet,
    headingAlignmentMobile,
    showHeading,
    showSubHeading,
    showSeparator,
    textDecoration,
    textDecorationSubHeading,
    block_id,
  } = props.attributes;

  var selectors = {
    "": {
      "text-align": headingAlignment,
    },
    " .responsive-heading-title-text": {
      "font-family": headingTitleFontFamily,
      "font-size": generateCSSUnit(headingTitleFontSize, "px"),
      "font-weight": headingTitleFontWeight,
      "line-height": headingTitleLineHeight,
      "letter-spacing": generateCSSUnit(headingTitleLetterSpacing, "px"),
      color: headingTitleColor,
      "margin-bottom": generateCSSUnit(headSpacing, "px"),
      "text-decoration": textDecoration,
    },
    " .responsive-heading-seperator": {
      "border-top-style": seperatorStyle,
      "border-top-width": generateCSSUnit(separatorHeight, "px"),
      "width": generateCSSUnit( separatorWidth, separatorWidthType ),
      "border-color": separatorColor,
      "margin-bottom": generateCSSUnit(separatorSpacing, "px"),
    },
    " .responsive-heading-desc-text": {
      "font-family": subHeadingTitleFontFamily,
      "font-size": generateCSSUnit(subHeadingTitleFontSize, "px"),
      "font-weight": subHeadingTitleFontWeight,
      "line-height": subHeadingTitleLineHeight,
      "letter-spacing": generateCSSUnit(subHeadingTitleLetterSpacing, "px"),
      color: subHeadingTitleColor,
      "margin-bottom": generateCSSUnit(subheadSpacing, "px"),
      "text-decoration": textDecorationSubHeading,
    },
  };

  var mobile_selectors = {
    "": {
      "text-align": headingAlignmentMobile,
    },
    " .responsive-heading-title-text": {
      "font-size": generateCSSUnit(headingTitleFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(headSpacingMobile, "px"),
    },
    " .responsive-heading-desc-text": {
      "font-size": generateCSSUnit(subHeadingTitleFontSizeMobile, "px"),
      "margin-bottom": generateCSSUnit(subheadSpacingMobile, "px"),
    },
    " .responsive-heading-seperator": {
      "margin-bottom": generateCSSUnit(separatorSpacingMobile, "px"),
    },
  };

  var tablet_selectors = {
    "": {
      "text-align": headingAlignmentTablet,
    },
    " .responsive-heading-title-text": {
      "font-size": generateCSSUnit(headingTitleFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(headSpacingTablet, "px"),
    },
    " .responsive-heading-desc-text": {
      "font-size": generateCSSUnit(subHeadingTitleFontSizeTablet, "px"),
      "margin-bottom": generateCSSUnit(subheadSpacingTablet, "px"),
    },
    " .responsive-heading-seperator": {
      "margin-bottom": generateCSSUnit(separatorSpacingTablet, "px"),
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-advanced-heading.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
