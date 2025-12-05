/**
 * Global registry for collecting custom CSS from all blocks in the editor
 * All custom CSS is compiled into one style tag
 */

// Global registry to store CSS by block clientId
const customCSSRegistry = {};

/**
 * Register or update custom CSS for a block
 * @param {string} clientId - Block's clientId
 * @param {string} blockName - Block name (e.g., "advanced-text")
 * @param {string} block_id - Block's block_id attribute
 * @param {string} customCss - CSS with placeholder selector
 */
export function registerCustomCSS(clientId, blockName, block_id, customCss) {
  if (!clientId || !blockName) {
    // Remove if invalid (block_id is optional - will use clientId as fallback)
    if (customCSSRegistry[clientId]) {
      delete customCSSRegistry[clientId];
      updateGlobalStyleTag();
    }
    return;
  }

  if (!customCss || !customCss.trim()) {
    // Remove if empty
    if (customCSSRegistry[clientId]) {
      delete customCSSRegistry[clientId];
      updateGlobalStyleTag();
    }
    return;
  }

  // Use block_id if available, fallback to clientId for blocks that set block_id asynchronously
  const effectiveBlockId = block_id || clientId;

  // Store CSS with metadata
  customCSSRegistry[clientId] = {
    blockName,
    block_id: effectiveBlockId,
    customCss: customCss.trim(),
  };

  // Update global style tag
  updateGlobalStyleTag();
}

/**
 * Unregister custom CSS for a block (when block is removed)
 * @param {string} clientId - Block's clientId
 */
export function unregisterCustomCSS(clientId) {
  if (customCSSRegistry[clientId]) {
    delete customCSSRegistry[clientId];
    updateGlobalStyleTag();
  }
}

/**
 * Convert placeholder to actual selector
 * @param {string} css - CSS with placeholder
 * @param {string} blockName - Block name
 * @param {string} block_id - Block ID
 * @returns {string} Converted CSS
 */
function convertPlaceholderToSelector(css, blockName, block_id) {
  const placeholder = '.rbea-custom-selector';
  const blockSelector = `.responsive-block-editor-addons-block-${blockName}.block-${block_id}`;
  
  // Global replace all occurrences
  return css.replace(new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), blockSelector);
}

/**
 * Update the global style tag with all collected CSS
 */
function updateGlobalStyleTag() {
  const styleId = 'rbea-custom-css-global-editor';
  let styleElement = document.getElementById(styleId);

  // Collect and convert all CSS
  let combinedCSS = '';
  Object.values(customCSSRegistry).forEach(({ blockName, block_id, customCss }) => {
    const convertedCSS = convertPlaceholderToSelector(customCss, blockName, block_id);
    combinedCSS += convertedCSS + '\n';
  });

  // Create or update style tag
  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = styleId;
    document.head.appendChild(styleElement);
  }

  // Update CSS content
  styleElement.textContent = combinedCSS;
}

/**
 * Initialize the global style tag on editor load
 */
export function initCustomCSSRegistry() {
  // Create the global style tag if it doesn't exist
  const styleId = 'rbea-custom-css-global-editor';
  if (!document.getElementById(styleId)) {
    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    document.head.appendChild(styleElement);
  }
}

