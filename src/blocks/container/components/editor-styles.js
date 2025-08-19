/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";

function EditorStyles(props) {
  let {
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
    alignContentDesktop,
    alignContentTablet,
    alignContentMobile,
    rowGapDesktop,
    rowGapTablet,
    rowGapMobile,
    rowGapTypeDesktop,
    rowGapTypeTablet,
    rowGapTypeMobile,
    columnGapDesktop,
    columnGapTablet,
    columnGapMobile,
    columnGapTypeDesktop,
    columnGapTypeTablet,
    columnGapTypeMobile,
    childrenWidthDesktop,
    childrenWidthTablet,
    childrenWidthMobile,
    containerTopPadding,
    containerBottomPadding,
    containerLeftPadding,
    containerRightPadding,
    containerTopPaddingMobile,
    containerBottomPaddingMobile,
    containerLeftPaddingMobile,
    containerRightPaddingMobile,
    containerTopPaddingTablet,
    containerBottomPaddingTablet,
    containerLeftPaddingTablet,
    containerRightPaddingTablet,
    containerTopMargin,
    containerBottomMargin,
    containerLeftMargin,
    containerRightMargin,
    containerTopMarginMobile,
    containerBottomMarginMobile,
    containerLeftMarginMobile,
    containerRightMarginMobile,
    containerTopMarginTablet,
    containerBottomMarginTablet,
    containerLeftMarginTablet,
    containerRightMarginTablet,
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
    backgroundType,
    containerBorderStyle,
    containerBorderWidth,
    containerTopRadius,
    containerRightRadius,
    containerBottomRadius,
    containerLeftRadius,
    containerBorderColor,
    containerTopRadiusTablet,
    containerRightRadiusTablet,
    containerBottomRadiusTablet,
    containerLeftRadiusTablet,
    containerTopRadiusMobile,
    containerRightRadiusMobile,
    containerBottomRadiusMobile,
    containerLeftRadiusMobile,
    gradient,
    textColor,
    linkColor,
    linkColorHover,
    opacity,
	backgroundColor,
	backgroundRepeat,
	backgroundPosition,
	backgroundPositionTablet,
	backgroundPositionMobile,
	backgroundSize,
	backgroundSizeTablet,
	backgroundSizeMobile,
	backgroundImage,
  } = props.attributes;

  const { clientId } = props;
  
  // if ( isBlockRootParent ) {
  //   console.log('parentprops ID -> ' + clientId);
  // } else {
  //   console.log('childprops ID -> ' + clientId);
  // }

  const borderStyles = {
    'border-style': containerBorderStyle,
    'border-width': generateCSSUnit(containerBorderWidth, 'px'),
    'border-top-left-radius': generateCSSUnit(containerTopRadius, 'px'),
    'border-top-right-radius': generateCSSUnit(containerRightRadius, 'px'),
    'border-bottom-right-radius': generateCSSUnit(containerBottomRadius, 'px'),
    'border-bottom-left-radius': generateCSSUnit(containerLeftRadius, 'px'),
    'border-color': containerBorderColor,
  }

  const borderStylesTablet = {
    'border-top-left-radius': generateCSSUnit(containerTopRadiusTablet, 'px'),
    'border-top-right-radius': generateCSSUnit(containerRightRadiusTablet, 'px'),
    'border-bottom-right-radius': generateCSSUnit(containerBottomRadiusTablet, 'px'),
    'border-bottom-left-radius': generateCSSUnit(containerLeftRadiusTablet, 'px'),
  }

  const borderStylesMobile = {
    'border-top-left-radius': generateCSSUnit(containerTopRadiusMobile, 'px'),
    'border-top-right-radius': generateCSSUnit(containerRightRadiusMobile, 'px'),
    'border-bottom-right-radius': generateCSSUnit(containerBottomRadiusMobile, 'px'),
    'border-bottom-left-radius': generateCSSUnit(containerLeftRadiusMobile, 'px'),
  }

  containerTopPaddingTablet = 'undefined' !== typeof containerTopPaddingTablet ? containerTopPaddingTablet : containerTopPadding;
	containerTopPaddingMobile = 'undefined' !== typeof containerTopPaddingMobile ? containerTopPaddingMobile : containerTopPaddingTablet;

	containerBottomPaddingTablet = 'undefined' !== typeof containerBottomPaddingTablet ? containerBottomPaddingTablet : containerBottomPadding;
	containerBottomPaddingMobile = 'undefined' !== typeof containerBottomPaddingMobile ? containerBottomPaddingMobile : containerBottomPaddingTablet;

	containerLeftPaddingTablet = 'undefined' !== typeof containerLeftPaddingTablet ? containerLeftPaddingTablet : containerLeftPadding;
	containerLeftPaddingMobile = 'undefined' !== typeof containerLeftPaddingMobile ? containerLeftPaddingMobile : containerLeftPaddingTablet;

	containerRightPaddingTablet = 'undefined' !== typeof containerRightPaddingTablet ? containerRightPaddingTablet : containerRightPadding;
	containerRightPaddingMobile = 'undefined' !== typeof containerRightPaddingMobile ? containerRightPaddingMobile : containerRightPaddingTablet;

	containerTopMarginTablet = 'undefined' !== typeof containerTopMarginTablet ? containerTopMarginTablet : containerTopMargin;
	containerTopMarginMobile = 'undefined' !== typeof containerTopMarginMobile ? containerTopMarginMobile : containerTopMarginTablet;

	containerBottomMarginTablet = 'undefined' !== typeof containerBottomMarginTablet ? containerBottomMarginTablet : containerBottomMargin;
	containerBottomMarginMobile = 'undefined' !== typeof containerBottomMarginMobile ? containerBottomMarginMobile : containerBottomMarginTablet;

	containerLeftMarginTablet = 'undefined' !== typeof containerLeftMarginTablet ? containerLeftMarginTablet : containerLeftMargin;
	containerLeftMarginMobile = 'undefined' !== typeof containerLeftMarginMobile ? containerLeftMarginMobile : containerLeftMarginTablet;

	containerRightMarginTablet = 'undefined' !== typeof containerRightMarginTablet ? containerRightMarginTablet : containerRightMargin;
	containerRightMarginMobile = 'undefined' !== typeof containerRightMarginMobile ? containerRightMarginMobile : containerRightMarginTablet;

  let orderDesktop = 'initial';
	let orderTablet = 'initial' !== orderTablet ? orderTablet : orderDesktop;
	let orderMobile = 'initial' !== orderMobile ? orderMobile : orderTablet;

  const innerLeftMarginDesktop = containerLeftMargin;
	const innerRightMarginDesktop = containerRightMargin;
	const innerLeftMarginTablet = containerLeftMarginTablet;
	const innerRightMarginTablet = containerRightMarginTablet;
	const innerLeftMarginMobile = containerLeftMarginMobile;
	const innerRightMarginMobile = containerRightMarginMobile;

  if( 'alignfull' === contentWidth || 'alignwide' === contentWidth ){
		containerLeftMargin = containerRightMargin = containerLeftMarginTablet = containerRightMarginTablet = containerLeftMarginMobile = containerRightMarginMobile  = '';
	}

  const containerFullWidth = '100vw';

  const selectors = {
    '': {
      'opacity': hideWidget ? 0.2 : 1,
    },
		'.wp-block-responsive-block-editor-addons-container .block-editor-block-list__block': {
			'color': textColor,
		},
		// '.wp-block-responsive-block-editor-addons-container *': {
		// 	'color': textColor,
		// },
		'.wp-block-responsive-block-editor-addons-container .block-editor-block-list__block a': {
			'color': linkColor,
		},
		'.wp-block-responsive-block-editor-addons-container .block-editor-block-list__block a:hover': {
			'color': linkColorHover,
		},
		' .responsive-block-editor-addons-container__video-wrap video': {
			'opacity': opacity,
		},
	};

  let boxShadowPositionCSS = boxShadowPosition;

	if ( 'outset' === boxShadowPosition ) {
		boxShadowPositionCSS = '';
	}

	let boxShadowPositionCSSHover = hoverboxShadowPosition;

	if ( 'outset' === hoverboxShadowPosition ) {
		boxShadowPositionCSSHover = '';
	}

  	let containerBackgroundCSSMobile = {};
	let containerBackgroundCSSTablet = {};
	let containerBackgroundCSSDesktop = {};

	if ( backgroundType === 'color' ) {
		containerBackgroundCSSDesktop = {
			'background-color': backgroundColor,
			'opacity': parseInt(opacity)/100,
		}
	}
	if ( backgroundType === 'gradient' ) {
		containerBackgroundCSSDesktop = {
			'background-image': gradient,
		}
	}
	if ( backgroundType === 'image' ) {
		containerBackgroundCSSDesktop = {
			'background-image': `url(${backgroundImage})`,
			'opacity': parseInt(opacity)/100,
			'background-repeat': backgroundRepeat,
			'background-position': backgroundPosition,
			'background-size': backgroundSize,
		}
		containerBackgroundCSSTablet = {
			'background-position': backgroundPositionTablet,
			'background-size': backgroundSizeTablet,
		}
		containerBackgroundCSSMobile = {
			'background-position': backgroundPositionMobile,
			'background-size': backgroundSizeMobile,
		}
	}

  const containerCSS = {
		'padding-top': generateCSSUnit( containerTopPadding, 'px' ),
		'padding-bottom': generateCSSUnit( containerBottomPadding, 'px' ),
		'padding-left': generateCSSUnit( containerLeftPadding, 'px' ),
		'padding-right': generateCSSUnit( containerRightPadding, 'px' ),
		'margin-top': generateCSSUnit( containerTopMargin, 'px' ) + ' !important',
		'margin-bottom': generateCSSUnit( containerBottomMargin, 'px' ) + ' !important',
		'margin-left': generateCSSUnit( containerLeftMargin, 'px' ) + ' !important',
		'margin-right': generateCSSUnit( containerRightMargin, 'px' ) + ' !important',
		'box-shadow':
			generateCSSUnit( boxShadowHOffset, 'px' ) +
			' ' +
			generateCSSUnit( boxShadowVOffset, 'px' ) +
			' ' +
			generateCSSUnit( boxShadowBlur, 'px' ) +
			' ' +
			generateCSSUnit( boxShadowSpread, 'px' ) +
			' ' +
			boxShadowColor +
			' ' +
			boxShadowPositionCSS,
		'min-height': generateCSSUnit( minHeight, 'px' ),
		...borderStyles,
		...containerBackgroundCSSDesktop,
		'overflow': overflow,
		'order': 'custom' === orderDesktop ? customOrderDesktop : orderDesktop,
	};

  hoverboxShadowBlur = isNaN( hoverboxShadowBlur ) ? '' : hoverboxShadowBlur;
	hoverboxShadowColor = hoverboxShadowColor ? hoverboxShadowColor : '';

  let containerFlexSelector = '.wp-block-responsive-block-editor-addons-container > .responsive-block-editor-addons-container-inner-blocks-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout';
  if ( ! isBlockRootParent || 'alignfull' !== contentWidth || 'alignwide' !== innerContentWidth ) {
    containerFlexSelector = '.wp-block-responsive-block-editor-addons-container > .block-editor-inner-blocks > .block-editor-block-list__layout';
  }

  const gbsWidthSelector = `#block-${ clientId }`;
  const widthSelectorsDesktop = {};
	const widthSelectorsTablet = {};
	const widthSelectorsMobile = {};

  selectors[ containerFlexSelector ] = {
    'flex-direction': directionDesktop,
    'align-items': alignItemsDesktop,
    'justify-content': justifyContentDesktop,
    'flex-wrap': wrapDesktop,
    'align-content':  alignContentDesktop,
    'row-gap': generateCSSUnit( rowGapDesktop, rowGapTypeDesktop ),
    'column-gap': generateCSSUnit( columnGapDesktop, columnGapTypeDesktop ),
    'min-height': generateCSSUnit( minHeight, 'px' ),
  };

  selectors[ '.block-editor-block-list__block' ] = {
    'flex-direction': directionDesktop,
    'align-items': alignItemsDesktop,
    'justify-content': justifyContentDesktop,
    'flex-wrap': wrapDesktop,
    'align-content':  alignContentDesktop,
    'min-height': generateCSSUnit( minHeight, 'px' ),
  };

  widthSelectorsDesktop[ `.is-root-container > .block-editor-block-list__block .block-editor-block-list__block${ gbsWidthSelector } ` ] = {
    'max-width': generateCSSUnit( customWidthDesktop, customWidthTypeDesktop ),
    'width': '100%',
  };

  widthSelectorsTablet[ `.is-root-container > .block-editor-block-list__block .responsive-block-editor-addons-editor-preview-mode-tablet.block-editor-block-list__block${ gbsWidthSelector } ` ] = {
		'max-width': generateCSSUnit( customWidthTablet, customWidthTypeTablet ),
		'width': '100%',
	};

  widthSelectorsMobile[ `.is-root-container > .block-editor-block-list__block .responsive-block-editor-addons-editor-preview-mode-mobile.block-editor-block-list__block${ gbsWidthSelector } ` ] = {
		'max-width': generateCSSUnit( customWidthMobile, customWidthTypeMobile ),
		'width': '100%',
	};

  if ( 'alignfull' === contentWidth && 'alignwide' === innerContentWidth ) {
    widthSelectorsDesktop[
			`.block-editor-block-list__block.wp-block-responsive-block-editor-addons-container${ gbsWidthSelector } > .responsive-block-editor-addons-container-inner-blocks-wrap`
		] = {
			'--inner-content-custom-width': `min(${containerFullWidth}, ${generateCSSUnit(innerContentCustomWidthDesktop, innerContentBoxWidthTypeDesktop)})`,
			'max-width': 'var(--inner-content-custom-width)',
			'width': '100%',
			'margin-left': 'auto',
			'margin-right': 'auto',
		};

    widthSelectorsTablet[`.block-editor-block-list__block.responsive-block-editor-addons-editor-preview-mode-tablet.wp-block-responsive-block-editor-addons-container${ gbsWidthSelector } > .responsive-block-editor-addons-container-inner-blocks-wrap`] = {
			'--inner-content-custom-width': `min(${containerFullWidth}, ${generateCSSUnit(innerContentCustomWidthTablet, innerContentBoxWidthTypeTablet)})`,
			'max-width' : 'var(--inner-content-custom-width)',
			'width' :'100%',
			'margin-left': 'auto',
			'margin-right': 'auto'
		};

    widthSelectorsMobile[
			`.block-editor-block-list__block.responsive-block-editor-addons-editor-preview-mode-mobile.wp-block-responsive-block-editor-addons-container${ gbsWidthSelector } > .responsive-block-editor-addons-container-inner-blocks-wrap`
		] = {
			'--inner-content-custom-width': `min(${containerFullWidth}, ${generateCSSUnit(innerContentCustomWidthMobile, innerContentBoxWidthTypeMobile)})`,
			'max-width': 'var(--inner-content-custom-width)',
			'width': '100%',
			'margin-left': 'auto',
			'margin-right': 'auto',
		};

  }

  const tablet_selectors = {
    "": {
      "opacity": hideWidgetTablet? 0.2 : 1,
    },
		[ containerFlexSelector ]: {
			'flex-direction': directionTablet,
			'align-items': alignItemsTablet,
			'justify-content': justifyContentTablet,
			'flex-wrap': wrapTablet,
			'align-content': alignContentTablet,
			'row-gap': generateCSSUnit( rowGapTablet, rowGapTypeTablet ),
			'column-gap': generateCSSUnit( columnGapTablet, columnGapTypeTablet ),
			'min-height': generateCSSUnit( minHeightTablet, 'px' ),
		},
		'.block-editor-block-list__block': {
			'min-height': generateCSSUnit( minHeightTablet, 'px' ),
			'flex-direction': directionTablet,
			'align-items': alignItemsTablet,
			'justify-content': justifyContentTablet,
			'flex-wrap': wrapTablet,
			'align-content': alignContentTablet,
		},
	};

  const mobile_selectors = {
    "": {
      "opacity": hideWidgetMobile? 0.2 : 1,
    },
		// Handeling Edge case for mobile. 
		'.wp-block-responsive-block-editor-addons-container .block-editor-inner-blocks .block-editor-block-list__layout .wp-block[data-type="core/quote"]' : {
			'margin-inline-start': '0px',
      'margin-inline-end': '0px',
		},
		[ containerFlexSelector ]: {
			'flex-direction': directionMobile,
			'align-items': alignItemsMobile,
			'justify-content': justifyContentMobile,
			'flex-wrap': wrapMobile,
			'align-content': alignContentMobile,
			'row-gap': generateCSSUnit( rowGapMobile, rowGapTypeMobile ),
			'column-gap': generateCSSUnit( columnGapMobile, columnGapTypeMobile ),
			'min-height': generateCSSUnit( minHeightMobile, 'px' ),
		},
		'.block-editor-block-list__block': {
			'min-height': generateCSSUnit( minHeightMobile, 'px' ),
			'flex-direction': directionMobile,
			'align-items': alignItemsMobile,
			'justify-content': justifyContentMobile,
			'flex-wrap': wrapMobile,
			'align-content': alignContentMobile,
		},
  };

  if ( 'video' === backgroundType ) {
		selectors[ ' .responsive-block-editor-addons-container__video-wrap' ] = {
			// ...videoBackgroundCSS,
			...borderStyles,
		};
		tablet_selectors[ ' .responsive-block-editor-addons-container__video-wrap' ] = {
			...borderStylesTablet,
		};
		mobile_selectors[ ' .responsive-block-editor-addons-container__video-wrap' ] = {
			...borderStylesMobile,
		};
		selectors[ '.wp-block-responsive-block-editor-addons-container' ] = {
			'padding-top': generateCSSUnit( containerTopPadding, 'px' ),
			'padding-bottom': generateCSSUnit( containerBottomPadding, 'px' ),
			'padding-left': generateCSSUnit( containerLeftPadding, 'px' ),
			'padding-right': generateCSSUnit( containerRightPadding, 'px' ),
			'margin-top': generateCSSUnit( containerTopMargin, 'px' ) + ' !important',
			'margin-bottom': generateCSSUnit( containerBottomMargin, 'px' ) + ' !important',
			// For avoiding the margin collapse issue between themes style and our style we are adding !important.
			'margin-left': generateCSSUnit( containerLeftMargin, 'px' ) + ' !important',
			'margin-right': generateCSSUnit( containerRightMargin, 'px' ) + ' !important',
			'box-shadow':
				generateCSSUnit( boxShadowHOffset, 'px' ) +
				' ' +
				generateCSSUnit( boxShadowVOffset, 'px' ) +
				' ' +
				generateCSSUnit( boxShadowBlur, 'px' ) +
				' ' +
				generateCSSUnit( boxShadowSpread, 'px' ) +
				' ' +
				boxShadowColor +
				' ' +
				boxShadowPositionCSS,
      'min-height': generateCSSUnit( minHeight, 'px' ),
			'overflow': overflow,
		};
		tablet_selectors[ '.wp-block-responsive-block-editor-addons-container' ] = {
			'padding-top': generateCSSUnit( containerTopPaddingTablet, 'px' ),
			'padding-bottom': generateCSSUnit( containerBottomPaddingTablet, 'px' ),
			'padding-left': generateCSSUnit( containerLeftPaddingTablet, 'px' ),
			'padding-right': generateCSSUnit( containerRightPaddingTablet, 'px' ),
			'margin-top': generateCSSUnit( containerTopMarginTablet, 'px' ) + ' !important',
			'margin-bottom': generateCSSUnit( containerBottomMarginTablet, 'px' ) + ' !important',
			'margin-left': generateCSSUnit( containerLeftMarginTablet, 'px' ) + ' !important',
			'margin-right': generateCSSUnit( containerRightMarginTablet, 'px' ) + ' !important',
			'min-height': generateCSSUnit( minHeightTablet, 'px' ),
		};
		mobile_selectors[ '.wp-block-responsive-block-editor-addons-container' ] = {
			'padding-top': generateCSSUnit( containerTopPaddingMobile, 'px' ),
			'padding-bottom': generateCSSUnit( containerBottomPaddingMobile, 'px' ),
			'padding-left': generateCSSUnit( containerLeftPaddingMobile, 'px' ),
			'padding-right': generateCSSUnit( containerRightPaddingMobile, 'px' ),
			'margin-top': generateCSSUnit( containerTopMarginMobile, 'px' ) + ' !important',
			'margin-bottom': generateCSSUnit( containerBottomMarginMobile, 'px' ) + ' !important',
			'margin-left': generateCSSUnit( containerLeftMarginMobile, 'px' ) + ' !important',
			'margin-right': generateCSSUnit( containerRightMarginMobile, 'px' ) + ' !important',
			'min-height': generateCSSUnit( minHeightMobile, 'px' ),
		};
		// selectors[ '.wp-block-responsive-block-editor-addons-container:hover .responsive-block-editor-addons-container__video-wrap' ] = {
		// 	'border-color': containerBorderHColor,
		// 	'box-shadow': '',
		// };
		if ( '' !== hoverboxShadowColor || '' !== hoverboxShadowBlur ) {
			const boxShadowBlurHoverCSSUnit =
				'' === hoverboxShadowBlur ? '' : generateCSSUnit( hoverboxShadowBlur, 'px' );

			selectors[ '.wp-block-responsive-block-editor-addons-container:hover .responsive-block-editor-addons-container__video-wrap' ] = {
        		'box-shadow': generateCSSUnit( hoverboxShadowHOffset, 'px' ) +
					' ' +
					generateCSSUnit( hoverboxShadowVOffset, 'px' ) +
					' ' +
					boxShadowBlurHoverCSSUnit +
					' ' +
					generateCSSUnit( hoverboxShadowSpread, 'px' ) +
					' ' +
					hoverboxShadowColor +
					' ' +
					boxShadowPositionCSSHover,
			}
		}
	} else {
		selectors[ '.wp-block-responsive-block-editor-addons-container' ] = containerCSS;
		selectors[ '.wp-block-responsive-block-editor-addons-container:not(.responsive-block-editor-addons-is-root-container)'] = {
			'margin-left': generateCSSUnit( innerLeftMarginDesktop, 'px' ) + ' !important',
			'margin-right': generateCSSUnit( innerRightMarginDesktop, 'px' ) + ' !important',
		}
		tablet_selectors[ '.wp-block-responsive-block-editor-addons-container' ] = {
			'padding-top': generateCSSUnit( containerTopPaddingTablet, 'px' ),
			'padding-bottom': generateCSSUnit( containerBottomPaddingTablet, 'px' ),
			'padding-left': generateCSSUnit( containerLeftPaddingTablet, 'px' ),
			'padding-right': generateCSSUnit( containerRightPaddingTablet, 'px' ),
			'margin-top': generateCSSUnit( containerTopMarginTablet, 'px' ) + ' !important',
			'margin-bottom': generateCSSUnit( containerBottomMarginTablet, 'px' ) + ' !important',
			'margin-left': generateCSSUnit( containerLeftMarginTablet, 'px' ) + ' !important',
			'margin-right': generateCSSUnit( containerRightMarginTablet, 'px' ) + ' !important',
			'min-height': generateCSSUnit( minHeightTablet, 'px' ) + ' !important',
      		...borderStylesTablet,
			...containerBackgroundCSSTablet,
			'order': 'custom' === orderTablet ? customOrderTablet : orderTablet,
		};
		tablet_selectors[ '.wp-block-responsive-block-editor-addons-container:not(.responsive-block-editor-addons-is-root-container)'] = {
			'margin-left': generateCSSUnit( innerLeftMarginTablet, 'px' ) + ' !important',
			'margin-right': generateCSSUnit( innerRightMarginTablet, 'px' ) + ' !important',
		}
		mobile_selectors[ '.wp-block-responsive-block-editor-addons-container' ] = {
			'padding-top': generateCSSUnit( containerTopPaddingMobile, 'px' ),
			'padding-bottom': generateCSSUnit( containerBottomPaddingMobile, 'px' ),
			'padding-left': generateCSSUnit( containerLeftPaddingMobile, 'px' ),
			'padding-right': generateCSSUnit( containerRightPaddingTablet, 'px' ),
			'margin-top': generateCSSUnit( containerTopMarginTablet, 'px' ) + ' !important',
			'margin-bottom': generateCSSUnit( containerBottomMarginTablet, 'px' ) + ' !important',
			'margin-left': generateCSSUnit( containerLeftMarginTablet, 'px' ) + ' !important',
			'margin-right': generateCSSUnit( containerRightMarginTablet, 'px' ) + ' !important',
			'min-height': generateCSSUnit( minHeightMobile, 'px' ),
			...borderStylesMobile,
			...containerBackgroundCSSMobile,
			'order': 'custom' === orderMobile ? customOrderMobile : orderMobile,
		};
		mobile_selectors[ '.wp-block-responsive-block-editor-addons-container:not(.responsive-block-editor-addons-is-root-container)'] = {
			'margin-left': generateCSSUnit( innerLeftMarginMobile, 'px' ) + ' !important',
			'margin-right': generateCSSUnit( innerRightMarginMobile, 'px' ) + ' !important',
		}
		// selectors[ '.wp-block-responsive-block-editor-addons-container:hover' ] = {
		// 	'border-color': containerBorderHColor,
		// 	'box-shadow': '',
		// };
		if ( '' !== hoverboxShadowColor || '' !== hoverboxShadowBlur ) {
			const boxShadowBlurHoverCSSUnit =
				'' === hoverboxShadowBlur ? '' : generateCSSUnit( hoverboxShadowBlur, 'px' );

			selectors[ '.wp-block-responsive-block-editor-addons-container:hover' ] = {
        'box-shadow': 	generateCSSUnit( hoverboxShadowHOffset, 'px' ) +
				' ' +
				generateCSSUnit( hoverboxShadowVOffset, 'px' ) +
				' ' +
				boxShadowBlurHoverCSSUnit +
				' ' +
				generateCSSUnit( hoverboxShadowSpread, 'px' ) +
				' ' +
				hoverboxShadowColor +
				' ' +
				boxShadowPositionCSSHover,
      }
		}
	}

  // custom width.
  if ( 'default' === contentWidth ) {
    selectors[ '.block-editor-block-list__block' ][ 'max-width' ] = generateCSSUnit(customWidthDesktop, customWidthTypeDesktop);
    tablet_selectors[ '.block-editor-block-list__block' ][ 'max-width' ] = generateCSSUnit(customWidthTablet,customWidthTypeTablet);
    mobile_selectors[ '.block-editor-block-list__block' ][ 'max-width' ] = generateCSSUnit(customWidthMobile,customWidthTypeMobile);
  }

  const autoWidth = { 'width': 'auto' };
	const setWidth = { 'width': '100%' };
	const containerSelector = '.wp-block-responsive-block-editor-addons-container > .block-editor-inner-blocks > .block-editor-block-list__layout > .wp-block';
	const containerSelector2 = '.wp-block-responsive-block-editor-addons-container > .responsive-block-editor-addons-container-inner-blocks-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout > .wp-block';

	// Add auto width to the inner blocks in desktop.
	if ( directionDesktop ) {
		if ( 'auto' === childrenWidthDesktop ) {
			selectors[ containerSelector ] = autoWidth;
			selectors[ containerSelector2 ] = autoWidth;
		}
	}

  // Add auto width to the inner blocks in tablet.
	if( directionTablet ){
		if( 'auto' === childrenWidthTablet ) {
			tablet_selectors[ containerSelector ] = autoWidth;
			tablet_selectors[ containerSelector2 ] = autoWidth;
		}else{
			tablet_selectors[ containerSelector ] = setWidth;
			tablet_selectors[ containerSelector2 ] = setWidth;
		}
	}

  // Add auto width to the inner blocks in mobile.
	if( directionMobile ){
		if( 'auto' === childrenWidthMobile ) {
			mobile_selectors[ containerSelector ] = autoWidth;
			mobile_selectors[ containerSelector2 ] = autoWidth;
		} else{
			mobile_selectors[ containerSelector ] = setWidth;
			mobile_selectors[ containerSelector2 ] = setWidth;
		}
	}

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
