/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";

function EditorStyles(props) {
  const { 
    block_id,
    address,
    zoom,
    height,
    heightTablet,
    heightMobile,
    pinned,
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
  } = props.attributes;

  var selectors = {
    " ": {
      "opacity": hideWidget ? 0.2 : 1,
      "max-height": height ? generateCSSUnit(height, "px") : `${400}px`,
    },
      " .responsive-block-editor-addons-block-map-frame": {
      width: "100%",
      "height": height ? generateCSSUnit(height, "px") : `${400}px`,
    },
  };

  var mobile_selectors = {
      " ": {
          "opacity": hideWidgetMobile ? 0.2 : 1,
          "max-height": heightMobile ? generateCSSUnit(heightMobile, "px") : `${400}px`,
      },
      " .responsive-block-editor-addons-block-map-frame": {
          width: "100%",
          "height": heightMobile ? generateCSSUnit(heightMobile, "px") : `${400}px`,
      },
  };

  var tablet_selectors = {
      " ": {
          "opacity": hideWidgetTablet ? 0.2 : 1,
          "max-height": heightTablet ? generateCSSUnit(heightTablet, "px") : `${400}px`,
      },
      " .responsive-block-editor-addons-block-map-frame": {
          width: "100%",
          "height": heightTablet ? generateCSSUnit(heightTablet, "px") : `${400}px`,
      },
  };

  var outerElement = {
    ".responsive-block-editor-addons-block-googlemap-external-element": {
      width: "100%",
      height: height ? generateCSSUnit(height, "px") : `${400}px`,
      position: "absolute",
    },
  };

  var mainContainerDesktopStyles = {
    ".wp-block-responsive-block-editor-addons-googlemap.responsive-block-editor-addons-block-googlemap": {
      'padding-top': generateCSSUnit(blockTopPadding, "px"),
      'padding-right': generateCSSUnit(blockRightPadding, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPadding, "px"),
      'padding-left': generateCSSUnit(blockLeftPadding, "px"),
      'margin-top': generateCSSUnit(blockTopMargin, "px"),
      'margin-right': generateCSSUnit(blockRightMargin, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMargin, "px"),
      'margin-left': generateCSSUnit(blockLeftMargin, "px"),
    }
  }
  var mainContainerTabletStyles = {
    ".wp-block-responsive-block-editor-addons-googlemap.responsive-block-editor-addons-block-googlemap": {
      'padding-top': generateCSSUnit(blockTopPaddingTablet, "px"),
      'padding-right': generateCSSUnit(blockRightPaddingTablet, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPaddingTablet, "px"),
      'padding-left': generateCSSUnit(blockLeftPaddingTablet, "px"),
      'margin-top': generateCSSUnit(blockTopMarginTablet, "px"),
      'margin-right': generateCSSUnit(blockRightMarginTablet, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMarginTablet, "px"),
      'margin-left': generateCSSUnit(blockLeftMarginTablet, "px"),
    }
  }
  var mainContainerMobileStyles = {
    ".wp-block-responsive-block-editor-addons-googlemap.responsive-block-editor-addons-block-googlemap": {
      'padding-top': generateCSSUnit(blockTopPaddingMobile, "px"),
      'padding-right': generateCSSUnit(blockRightPaddingMobile, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPaddingMobile, "px"),
      'padding-left': generateCSSUnit(blockLeftPaddingMobile, "px"),
      'margin-top': generateCSSUnit(blockTopMarginMobile, "px"),
      'margin-right': generateCSSUnit(blockRightMarginMobile, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMarginMobile, "px"),
      'margin-left': generateCSSUnit(blockLeftMarginMobile, "px"),
    }
  }

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-googlemap.block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");
  styling_css += generateCSS(outerElement, "");
  styling_css += generateCSS(mainContainerDesktopStyles, '',);
  styling_css += generateCSS(mainContainerTabletStyles, "", true, "tablet");
  styling_css += generateCSS(mainContainerMobileStyles, "", true, "mobile");

  return styling_css;
}

export default EditorStyles;
