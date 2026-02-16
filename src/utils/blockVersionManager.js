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
  "testimonial": {
    currentVersion: "2.0",
    newBlockDefaults: {
      count: 1,
      testimonialBlock: [
        {
          testimonialName: "Judith Black",
          testimonialTitle: "CEO of Workcation",
          testimonialContent: "“Qui dolor enim consectetur do et non ex amet culpa sint in ea non dolore. Enim minim magna anim id minim eu cillum sunt dolore aliquip. Amet elit laborum culpa irure incididunt adipisicing culpa amet officia exercitation. Eu non aute velit id velit Lorem elit anim pariatur.”",
          testimonialImgURL: {
            sizes: {
              full: {
                url: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
              },
              thumbnail: {
                url: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
              },
              medium: {
                url: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
              }
            }
          },
          testimonialImgId: "0",
        }
      ],
      backgroundColor: "#FFFFFF",
      opacity: 100,
      contentTypographyColor: "#101828",
      contentFontSize: 24,
      contentFontSizeTablet: 24,
      contentFontSizeMobile: 24,
      contentFontFamily: "inter",
      contentFontWeight: 600,
      contentBottomSpacing: 40,
      contentBottomSpacingTablet: 40,
      contentBottomSpacingMobile: 40,
      nameTypographyColor: "#101828",
      nameFontFamily: "inter",
      nameFontSize: 14,
      nameFontSizeTablet: 14,
      nameFontSizeMobile: 14,
      nameFontWeight: 600,
      titleTypographyColor: "#4a5565",
      titleFontFamily: "inter",
      titleFontWeight: 400,
      titleFontSize: 14,
      titleFontSizeTablet: 14,
      titleFontSizeMobile: 14,
      starColor: "#7C86FF",
      imageShape: "circle",
      imageWidth: 48,
      imageWidthTablet: 48,
      imageWidthMobile: 48,
    },
  },
  blockquote: {
    currentVersion: "2.0",
    newBlockDefaults: {
      twEnabled: false,
      icon: "modern",
      quoteContent: "\"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.\"",
      quoteAlign: "center",
      quoteAlignTablet: "center",
      quoteAlignMobile: "center",
      quoteFontFamily: "inter",
      quoteFontSize: 24,
      quoteFontSizeTablet: 24,
      quoteFontSizeMobile: 24,
      quoteFontWeight: "600",
      quoteFontStyle: "italic",
      quoteTypographyColor: "#101828",
      quoteColor: "#101828",
      quoteSize: 44,
      showAuthorImage: true,
      showAuthorName: true,
      showAuthorTitle: true,
      showAuthorSeparator: true,
      
      authorImgId: "0",
      authorName: "Michael Gough",
      authorTitle: "CEO at Google",
      authorNameFontFamily: "inter",
      authorNameFontWeight: "500",
      authorNameFontSize: 16,
      authorNameFontSizeTablet: 16,
      authorNameFontSizeMobile: 16,
      authorNameTypographyColor: "#101828",
      authorNameFontStyle: "italic",
      authorTitleFontFamily: "inter",
      authorTitleFontWeight: "400",
      authorTitleFontSize: 14,
      authorTitleFontSizeTablet: 14,
      authorTitleFontSizeMobile: 14,
      authorTitleTypographyColor: "#4a5565",
      authorTitleFontStyle: "italic",
      quoteHpositionpercentage: 50,
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
    updates.blockVer = config.currentVersion;
    Object.assign(updates, config.newBlockDefaults);
  }
  // OLD block (has block_id but no version) → Mark as 1.0
  else if (!attributes.blockVer) {
    updates.blockVer = "1.0";
  }

  return updates;
}
