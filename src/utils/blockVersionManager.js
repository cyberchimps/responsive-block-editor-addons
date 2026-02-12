/**
 * Centralized Block Version Manager
 * Handles block versioning and default attribute initialization
 */

/**
 * Block version configurations
 * Add your block configs here
 */
const BLOCK_VERSION_CONFIGS = {
  divider: {
    currentVersion: "2.0",
    newBlockDefaults: {
      spacerDividerHeight: 2,
    },
  },
  "buttons-child": {
    currentVersion: "2.0",
    newBlockDefaults: {
      background: "#615fff",
      buttonFontFamily: "Inria Sans",
      label: "Button text",
      hbackground: "#7c86ff",
      blockTopRadius: 6,
      blockRightRadius: 6,
      blockBottomRadius: 6,
      blockLeftRadius: 6,
      blockTopRadiusTablet: 6,
      blockRightRadiusTablet: 6,
      blockBottomRadiusTablet: 6,
      blockLeftRadiusTablet: 6,
      blockTopRadiusMobile: 6,
      blockRightRadiusMobile: 6,
      blockBottomRadiusMobile: 6,
      blockLeftRadiusMobile: 6,
      buttonFontSize: 14,
      buttonFontSizeTablet: 14,
      buttonFontSizeMobile: 14,
      buttonFontWeight: 600,
    },
  },
  // Add more blocks as needed:
  // spacer: {
  //   currentVersion: "2.0",
  //   newBlockDefaults: {
  //     spacerHeight: 50,
  //   },
  // },
};

/**
 * Initialize block version and apply defaults for new blocks
 * 
 * @param {string} blockName - Block name (e.g., 'divider')
 * @param {Object} attributes - Current block attributes
 * @param {string} clientId - Block's clientId
 * @returns {Object} Updates object to merge with setAttributes
 */
export function initializeBlockVersion(blockName, attributes, clientId) {
  const config = BLOCK_VERSION_CONFIGS[blockName];
  if (!config) return {};

  const updates = {};

  // NEW block (no block_id) → Set version and new defaults
  if (!attributes.block_id) {
    updates.blockVersion = config.currentVersion;
    Object.assign(updates, config.newBlockDefaults);
  }
  // OLD block (has block_id but no version) → Mark as 1.0
  else if (!attributes.blockVersion) {
    updates.blockVersion = "1.0";
  }

  return updates;
}
