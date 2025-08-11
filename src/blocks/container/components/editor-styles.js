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
  } = props.attributes;

  var selectors = {
    "": {
      "opacity": hideWidget? 0.2 : 1,
    },
    " > .responsive-block-editor-addons-container-has-children > .responsive-block-editor-addons-container-inner-blocks-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout": {
      'display': 'flex',
      'flex-direction': directionDesktop,
      'align-items': alignItemsDesktop,
      'justify-content': justifyContentDesktop,
      'flex-wrap': 'nowrap',
      'row-gap': '20px',
      'column-gap': '20px',
    },
    " > .responsive-block-editor-addons-is-root-container > .responsive-block-editor-addons-container-inner-blocks-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout > .block-editor-block-list__block": {
      'max-width': '100%',
			'width': '100%',
    }
  };

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
