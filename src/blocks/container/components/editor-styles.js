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
    wrapDesktop,
    wrapTablet,
    wrapMobile,
  } = props.attributes;

  const { clientId } = props;

  var selectors = {
    "": {
      "opacity": hideWidget? 0.2 : 1,
    },
  };

  
  if( isBlockRootParent ) {
    console.log('parentprops ID -> ' + clientId);
  } else {
    console.log('childprops ID -> ' + clientId);
  }

  let containerFlexSelector = '.wp-block-responsive-block-editor-addons-container > .responsive-block-editor-addons-container-inner-blocks-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout';
  if ( ! isBlockRootParent || 'alignfull' !== contentWidth || 'alignwide' !== innerContentWidth ) {
    containerFlexSelector = '.wp-block-responsive-block-editor-addons-container > .block-editor-inner-blocks > .block-editor-block-list__layout';
  }

  const gbsWidthSelector = `#block-${ clientId }`;
  const widthSelectorsDesktop = {};
	const widthSelectorsTablet = {};
	const widthSelectorsMobile = {};

  selectors[ containerFlexSelector ] = {
    'display': 'flex',
    'flex-direction': directionDesktop,
    'align-items': alignItemsDesktop,
    'justify-content': justifyContentDesktop,
    'flex-wrap': wrapDesktop,
    'row-gap': '20px',
    'column-gap': '20px',
    'min-height': generateCSSUnit( minHeight, 'px' ),
  };

  selectors[ '.block-editor-block-list__block' ] = {
    'flex-direction': directionDesktop,
    'align-items': alignItemsDesktop,
    'justify-content': justifyContentDesktop,
    'flex-wrap': wrapDesktop,
    'min-height': generateCSSUnit( minHeight, 'px' ),
  };

  widthSelectorsDesktop[ `.is-root-container > .block-editor-block-list__block .block-editor-block-list__block${ gbsWidthSelector } ` ] = {
    'max-width': generateCSSUnit( customWidthDesktop, customWidthTypeDesktop ),
    'width': '100%',
  };

  // console.log(`.is-root-container > .block-editor-block-list__block .block-editor-block-list__block${ gbsWidthSelector }`)

  // selectors[`.editor-styles-wrapper .is-root-container > .block-editor-block-list__block .block-editor-block-list__block${ gbsWidthSelector } `] = {
  //   'max-width': generateCSSUnit( customWidthDesktop, customWidthTypeDesktop ),
  //   'width': '100%',
  // }

  if ( 'alignfull' === contentWidth && 'alignwide' === innerContentWidth ) {
    selectors[`.block-editor-block-list__block.wp-block-responsive-block-editor-addons-container${ gbsWidthSelector } > .responsive-block-editor-addons-container-inner-blocks-wrap`] = {
      '--inner-content-custom-width': `min(100vw, ${generateCSSUnit(innerContentCustomWidthDesktop, innerContentBoxWidthTypeDesktop)})`,
      'max-width': 'var(--inner-content-custom-width)',
      'width': '100%',
      'margin-left': 'auto',
      'margin-right': 'auto',
    }
  }

  // custom width.
  if ( 'default' === contentWidth ) {
    selectors[".block-editor-block-list__block"] = {
      'max-width': generateCSSUnit(customWidthDesktop, customWidthTypeDesktop),
      'margin-left': 'auto',
      'margin-right': 'auto',
    }
  }



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

  const base_selector = `.editor-styles-wrapper #block-${ clientId }`;

  let styling_css = generateCSS( selectors, base_selector );

  styling_css += generateCSS( widthSelectorsDesktop, '.editor-styles-wrapper ' );


  // var id = `.responsive-block-editor-addons-block-container.block-${block_id}`;

  // styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, `${ base_selector }`, true, "tablet");
  styling_css += generateCSS(widthSelectorsTablet, '.editor-styles-wrapper ', true, 'tablet' );
  styling_css += generateCSS(mobile_selectors, `${ base_selector }`, true, "mobile");
  styling_css += generateCSS(widthSelectorsMobile, '.editor-styles-wrapper ', true, 'tablet' );
  
  console.log('STYLING CSS');
  console.log(styling_css);

  return styling_css;
}

export default EditorStyles;
