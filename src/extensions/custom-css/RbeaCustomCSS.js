/**
 * Custom CSS Extension Component
 * Adds Custom CSS panel to Advanced tab for all blocks
 */

import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useRbeaExtensionContext } from '../context/RbeaExtensionContext';
import CustomCSSControl from '../../settings-components/CustomCSS';

/**
 * Extract block name from full block name
 * Example: "responsive-block-editor-addons/advanced-text" -> "advanced-text"
 * @param {string} fullBlockName - Full block name from props.name
 * @returns {string} Block name without namespace
 */
function extractBlockName(fullBlockName) {
  if (!fullBlockName || typeof fullBlockName !== 'string') {
    return '';
  }
  // Split by '/' and get the last part
  const parts = fullBlockName.split('/');
  return parts.length > 1 ? parts[parts.length - 1] : fullBlockName;
}

const RbeaCustomCSS = () => {
  const { attributes, setAttributes, name, clientId } = useRbeaExtensionContext();
  
  // Extract block name from full name
  const blockName = extractBlockName(name);
  const { customCss, block_id } = attributes || {};

  return (
    <PanelBody
      title={__("Custom CSS", "responsive-block-editor-addons")}
      initialOpen={false}
    >
      <CustomCSSControl
        blockName={blockName}
        block_id={block_id}
        customCss={customCss || ''}
        clientId={clientId}
        name={name}
        onChange={(value) => {
          setAttributes({ customCss: value });
        }}
      />
    </PanelBody>
  );
};

export default RbeaCustomCSS;

