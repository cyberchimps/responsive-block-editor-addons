/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";

function EditorStyles(props) {
  const {
    popupContainerWidth,
    popupContainerWidthTablet,
    popupContainerWidthMobile,
    popupToggleCloseBtnPosition,
    popupHeightType,
    popupHeightCustom,
    popupHeightCustomTablet,
    popupHeightCustomMobile,
    popupPaddingTop,
    popupPaddingTopTablet,
    popupPaddingTopMobile,
    popupPaddingBottom,
    popupPaddingBottomTablet,
    popupPaddingBottomMobile,
    popupPaddingLeft,
    popupPaddingLeftTablet,
    popupPaddingLeftMobile,
    popupPaddingRight,
    popupPaddingRightTablet,
    popupPaddingRightMobile,
    popupScreenType,
    popupScreenTypeTablet,
    popupScreenTypeMobile,
    popupBgType,
    popupBgColor,
    popupGradient,
    popupCloseBtnColor,
    popupOverlayColor,
    popupOverlayOpacity,
    popupBlockBorderStyle,
    popupBlockBorderWidth,
    popupBlockBorderRadius,
    popupBlockBorderColor,

    subheadSpacingTablet,
    separatorSpacingTablet,
    subheadSpacingMobile,
    separatorSpacingMobile,
    subHeadingTitleFontSizeMobile,
    subHeadingTitleFontSizeTablet,
    headingAlignmentTablet,
    headingAlignmentMobile,
    block_id,
  } = props.attributes;

  const popupScreenPositions = {
    desktop: {
      top: '',
      right: '',
      bottom: '',
      left: '',
    },
    tablet: {
      top: '',
      right: '',
      bottom: '',
      left: '',
    },
    mobile: {
      top: '',
      right: '',
      bottom: '',
      left: '',
    },
  };

  // Define a function to set popup positions based on screen type
  function setPopupPosition(screen, top, left, center, right, bottom) {
    const popupScreenPosition = popupScreenPositions[screen];
    popupScreenPosition.top = top !== '' ? generateCSSUnit(top, "px") : '';
    popupScreenPosition.left = left !== '' ? generateCSSUnit(left, "px") : '';
    popupScreenPosition.center = center;
    popupScreenPosition.right = right !== '' ? generateCSSUnit(right, "px") : '';
    popupScreenPosition.bottom = bottom !== '' ? generateCSSUnit(bottom, "px") : '';
  }

  // Set positions for desktop
  switch (popupScreenType) {
    case 'top left':
      setPopupPosition('desktop', 30, 30, '', '', '');
      break
    case 'top center':
      setPopupPosition('desktop', 30, '', '', '', '');
      break
    case 'top right':
      setPopupPosition('desktop', 30, '', '', 30, '');
      break;
    case 'center left':
      setPopupPosition('desktop', '', 30, '', '', '');
      break;
    case 'center center':
      setPopupPosition('desktop', '', '', '', '', '');
      break;
    case 'center right':
      setPopupPosition('desktop', '', '', '', 30, '');
      break;
    case 'bottom left':
      setPopupPosition('desktop', '', 30, '', '', 30);
      break;
    case 'bottom center':
      setPopupPosition('desktop', '', '', '', '', 30);
      break;
    case 'bottom right':
      setPopupPosition('desktop', '', '', '', 30, 30);
      break;
  }

  // Set positions for tablet
  switch (popupScreenTypeTablet) {
    case 'top left':
      setPopupPosition('tablet', 15, 15, '', '', '');
      break
    case 'top center':
      setPopupPosition('tablet', 15, '', '', '', '');
      break
    case 'top right':
      setPopupPosition('tablet', 15, '', '', 15, '');
      break;
    case 'center left':
      setPopupPosition('tablet', '', 15, '', '', '');
      break;
    case 'center center':
      setPopupPosition('tablet', '', '', '', '', '');
      break;
    case 'center right':
      setPopupPosition('tablet', '', '', '', 15, '');
      break;
    case 'bottom left':
      setPopupPosition('tablet', '', 15, '', '', 15);
      break;
    case 'bottom center':
      setPopupPosition('tablet', '', '', '', '', 15);
      break;
    case 'bottom right':
      setPopupPosition('tablet', '', '', '', 15, 15);
      break;
  }

  // Set positions for mobile
  switch (popupScreenTypeMobile) {
    case 'top left':
      setPopupPosition('mobile', 10, 10, '', '', '');
      break
    case 'top center':
      setPopupPosition('mobile', 10, '', '', '', '');
      break
    case 'top right':
      setPopupPosition('mobile', 10, '', '', 10, '');
      break;
    case 'center left':
      setPopupPosition('mobile', '', 10, '', '', '');
      break;
    case 'center center':
      setPopupPosition('mobile', '', '', '', '', '');
      break;
    case 'center right':
      setPopupPosition('mobile', '', '', '', 10, '');
      break;
    case 'bottom left':
      setPopupPosition('mobile', '', 10, '', '', 10);
      break;
    case 'bottom center':
      setPopupPosition('mobile', '', '', '', '', 10);
      break;
    case 'bottom right':
      setPopupPosition('mobile', '', '', '', 10, 10);
      break;
  }

  const { desktop, tablet, mobile } = popupScreenPositions;
  
  let popupContainerBackground = { 'background-color': popupBgColor }
  if ( popupBgType === 'gradient' ) {
    popupContainerBackground = { 'background-image': popupGradient }
  }

  var selectors = {
    "": {
      
    },
    " .responsive-block-editor-addons-popup-modal-content": {
      "width": generateCSSUnit(popupContainerWidth, "px"),
      "height": 'auto' !== popupHeightType ? generateCSSUnit(popupHeightCustom, "px") : 'auto',
      "padding-top": generateCSSUnit(popupPaddingTop, "px"),
      "padding-right": generateCSSUnit(popupPaddingRight, "px"),
      "padding-bottom": generateCSSUnit(popupPaddingBottom, "px"),
      "padding-left": generateCSSUnit(popupPaddingLeft, "px"),
      ...desktop,
      ...popupContainerBackground,
      "border-style": popupBlockBorderStyle,
      "border-width": generateCSSUnit(popupBlockBorderWidth, "px"),
      "border-radius": generateCSSUnit(popupBlockBorderRadius, "px"),
      "border-color": popupBlockBorderColor,
    },
    " .responsive-block-editor-addons-popup-modal-header": {
      "justify-content": popupToggleCloseBtnPosition,
    },
    " .responsive-block-editor-addons-popup-modal-header .dashicons.dashicons-no": {
      "color": popupCloseBtnColor,
    },
    " .responsive-block-editor-addons-popup-modal-wrap-overlay": {
      "background-color": popupOverlayColor,
      "opacity": parseInt(popupOverlayOpacity)/100,
    },
  };

  var mobile_selectors = {
    "": {
      
    },
    " .responsive-block-editor-addons-popup-modal-content": {
      "width": generateCSSUnit(popupContainerWidthMobile, "px"),
      "height": 'auto' !== popupHeightType ? generateCSSUnit(popupHeightCustomMobile, "px") : 'auto',
      "padding-top": generateCSSUnit(popupPaddingTopMobile, "px"),
      "padding-right": generateCSSUnit(popupPaddingRightMobile, "px"),
      "padding-bottom": generateCSSUnit(popupPaddingBottomMobile, "px"),
      "padding-left": generateCSSUnit(popupPaddingLeftMobile, "px"),
      ...tablet,
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
      
    },
    " .responsive-block-editor-addons-popup-modal-content": {
      "width": generateCSSUnit(popupContainerWidthTablet, "px"),
      "height": 'auto' !== popupHeightType ? generateCSSUnit(popupHeightCustomTablet, "px") : 'auto',
      "padding-top": generateCSSUnit(popupPaddingTopTablet, "px"),
      "padding-right": generateCSSUnit(popupPaddingRightTablet, "px"),
      "padding-bottom": generateCSSUnit(popupPaddingBottomTablet, "px"),
      "padding-left": generateCSSUnit(popupPaddingLeftTablet, "px"),
      ...mobile,
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
  var id = `.responsive-block-editor-addons-block-popup.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
