/**
 * Auto-Register Custom CSS Component for Block Edit Components
 * Can be imported directly in block Edit components
 * Accepts props directly (no context needed)
 */

import { useEffect } from '@wordpress/element';
import { registerCustomCSS, unregisterCustomCSS } from '../../utils/custom-css-registry';
import { convertTruthyFalsyValue } from '../../utils/helper';

/**
 * Extract block name from full block name
 * Example: "responsive-block-editor-addons/advanced-text" -> "advanced-text"
 */
function extractBlockName(fullBlockName) {
  if (!fullBlockName || typeof fullBlockName !== 'string') {
    return '';
  }
  const parts = fullBlockName.split('/');
  return parts.length > 1 ? parts[parts.length - 1] : fullBlockName;
}

const AutoRegisterCSSBlock = (props) => {
  const { attributes, clientId, name } = props;
  
  if (!clientId || !name) {
    return null;
  }

  const blockName = extractBlockName(name);
  const { customCss, block_id } = attributes || {};
  
  // Use block_id if available, fallback to clientId for count-down and similar blocks
  const effectiveBlockId = block_id || clientId;
  const isCustomCssOn = convertTruthyFalsyValue( responsive_globals?.is_custom_css_on );

  // Register/update CSS when component mounts or when CSS/block_id changes
  useEffect(() => {
    // Respect global toggle; do nothing if disabled
    if (!isCustomCssOn) {
      unregisterCustomCSS(clientId);
      return;
    }

    // Only register if we have valid data and CSS content
    if (blockName && effectiveBlockId && customCss && customCss.trim()) {
      registerCustomCSS(clientId, blockName, effectiveBlockId, customCss);
    } else {
      // If CSS becomes empty or invalid, unregister
      unregisterCustomCSS(clientId);
    }
    
  }, [clientId, blockName, effectiveBlockId, customCss, isCustomCssOn]);

  // This component doesn't render anything
  return null;
};

export default AutoRegisterCSSBlock;
