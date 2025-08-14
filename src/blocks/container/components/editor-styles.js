/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";

function EditorStyles(props) {
  const {
    block_id,
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
    directionDesktop,
    directionTablet,
    directionMobile,
    alignItemsDesktop,
    alignItemsTablet,
    alignItemsMobile,
    justifyContentDesktop,
    justifyContentTablet,
    justifyContentMobile,
    innerContentCustomWidthDesktop,
    innerContentCustomWidthTablet,
    innerContentCustomWidthMobile,
    innerContentBoxWidthTypeDesktop,
    innerContentBoxWidthTypeTablet,
    innerContentBoxWidthTypeMobile,
    contentWidth,
    innerContentWidth,
    isBlockRootParent,
    customWidthDesktop,
    customWidthTablet,
    customWidthMobile,
    customWidthTypeDesktop,
    customWidthTypeTablet,
    customWidthTypeMobile,
    minHeight,
    minHeightTablet,
    minHeightMobile,
    overflow,
  } = props.attributes;

  var selectors = {
    "": {
      "opacity": hideWidget? 0.2 : 1,
    },
  };

  // " > .responsive-block-editor-addons-container-has-children > .responsive-block-editor-addons-container-inner-blocks-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout": {
  //     'display': 'flex',
  //     'flex-direction': directionDesktop,
  //     'align-items': alignItemsDesktop,
  //     'justify-content': justifyContentDesktop,
  //     'flex-wrap': 'nowrap',
  //     'row-gap': '20px',
  //     'column-gap': '20px',
  //   },

  let containerFlexSelector = '.wp-block-responsive-block-editor-addons-container > .responsive-block-editor-addons-container-has-children > .responsive-block-editor-addons-container-inner-blocks-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout';
  if ( ! isBlockRootParent || 'alignfull' !== contentWidth || 'alignwide' !== innerContentWidth ) {
    containerFlexSelector = '.wp-block-responsive-block-editor-addons-container > .responsive-block-editor-addons-container-has-children > .block-editor-inner-blocks > .block-editor-block-list__layout'
  }

  selectors[ containerFlexSelector ] = {
    'display': 'flex',
    'flex-direction': directionDesktop,
    'align-items': alignItemsDesktop,
    'justify-content': justifyContentDesktop,
    'flex-wrap': 'nowrap',
    'row-gap': '20px',
    'column-gap': '20px',
    'min-height': generateCSSUnit( minHeight, 'px' ),
    'overflow': overflow,
  };

  if ( 'alignfull' === contentWidth && 'alignwide' === innerContentWidth ) {
    selectors[" > .responsive-block-editor-addons-container-has-children > .responsive-block-editor-addons-container-inner-blocks-wrap"] = {
      '--inner-content-custom-width': `min(100vw, ${generateCSSUnit(innerContentCustomWidthDesktop, innerContentBoxWidthTypeDesktop)})`,
      'max-width': 'var(--inner-content-custom-width)',
      'width': '100%',
      'margin-left': 'auto',
      'margin-right': 'auto',
    }
  }

  if ( 'default' === contentWidth ) {
    selectors[" "] = {
      'max-width': generateCSSUnit(customWidthDesktop, customWidthTypeDesktop),
      'margin-left': 'auto',
      'margin-right': 'auto',
    }
  }

  // selectors[ containerFlexSelector ] = { 
	// 	'min-height': generateCSSUnit( minHeight, 'px' ),
	// }



  var mobile_selectors = {
    "": {
      "opacity": hideWidgetMobile? 0.2 : 1,
    },
  };

  var tablet_selectors = {
    "": {
      "opacity": hideWidgetTablet? 0.2 : 1,
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-container.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
