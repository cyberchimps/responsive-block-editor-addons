const ITEM_COUNT = 3;

const testimonial_block = [];

for (var i = 1; i <= ITEM_COUNT; i++) {
  var desc_text =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.";
  var author_text = "John Doe ";
  var company_text = "Company" + i;
  testimonial_block.push({
    description: [desc_text],
    name: [author_text],
    company: [company_text],
    image: "",
  });
}

const attributes = {
  test_item_count: {
    type: "number",
    default: ITEM_COUNT,
  },
  classMigrate: {
    type: "boolean",
    default: false,
  },
  test_block: {
    type: "array",
    default: testimonial_block,
  },
  skin: {
    type: "string",
    default: "default",
  },
  bubblePadding: {
    type: "number",
    default: 20,
  },
  bubbleBorderRadius: {
    type: "number",
    default: 0,
  },
  bubbleColor: {
    type: "string",
    default: "center",
  },
  headingAlign: {
    type: "string",
    default: "center",
  },
  headingAlignMobile: {
    type: "string",
    default: "center",
  },
  headingAlignTablet: {
    type: "string",
    default: "center",
  },
  descColor: {
    type: "string",
    default: "#333",
  },
  companyColor: {
    type: "string",
    default: "#888888",
  },
  authorColor: {
    type: "string",
    default: "#333",
  },
  iconimgStyle: {
    type: "string",
    default: "circle",
  },
  imagePosition: {
    type: "string",
    default: "bottom",
  },
  imageAlignment: {
    type: "string",
    default: "top",
  },

  nameFontSizeType: {
    type: "string",
    default: "px",
  },
  nameFontSize: {
    type: "number",
  },
  nameFontSizeTablet: {
    type: "number",
  },
  nameFontSizeMobile: {
    type: "number",
  },
  nameFontFamily: {
    type: "string",
    default: "",
  },
  nameFontWeight: {
    type: "string",
  },
  nameFontSubset: {
    type: "string",
  },
  nameLineHeightType: {
    type: "string",
    default: "em",
  },
  nameLineHeight: {
    type: "number",
  },
  nameLineHeightTablet: {
    type: "number",
  },
  nameLineHeightMobile: {
    type: "number",
  },
  nameLoadGoogleFonts: {
    type: "boolean",
    default: false,
  },

  companyFontSizeType: {
    type: "string",
    default: "px",
  },
  companyFontSize: {
    type: "number",
  },
  companyFontSizeTablet: {
    type: "number",
  },
  companyFontSizeMobile: {
    type: "number",
  },
  companyFontFamily: {
    type: "string",
    default: "",
  },
  companyFontWeight: {
    type: "string",
  },
  companyFontSubset: {
    type: "string",
  },
  companyLineHeightType: {
    type: "string",
    default: "em",
  },
  companyLineHeight: {
    type: "number",
  },
  companyLineHeightTablet: {
    type: "number",
  },
  companyLineHeightMobile: {
    type: "number",
  },
  companyLoadGoogleFonts: {
    type: "boolean",
    default: false,
  },

  descFontSizeType: {
    type: "string",
    default: "px",
  },
  descFontSize: {
    type: "number",
  },
  descFontSizeTablet: {
    type: "number",
  },
  descFontSizeMobile: {
    type: "number",
  },
  descFontFamily: {
    type: "string",
    default: "",
  },
  descFontWeight: {
    type: "string",
  },
  descFontSubset: {
    type: "string",
  },
  descLineHeightType: {
    type: "string",
    default: "em",
  },
  descLineHeight: {
    type: "number",
  },
  descLineHeightTablet: {
    type: "number",
  },
  descLineHeightMobile: {
    type: "number",
  },
  descLoadGoogleFonts: {
    type: "boolean",
    default: false,
  },
  nameSpace: {
    type: "number",
    default: 5,
  },
  nameSpaceMobile: {
    type: "number",
    default: 5,
  },
  nameSpaceTablet: {
    type: "number",
    default: 5,
  },
  descSpace: {
    type: "number",
    default: 15,
  },
  descSpaceMobile: {
    type: "number",
    default: 15,
  },
  descSpaceTablet: {
    type: "number",
    default: 15,
  },
  block_id: {
    type: "string",
    default: "not_set",
  },
  authorSpace: {
    type: "number",
    default: 5,
  },
  imgVrPadding: {
    type: "number",
    default: 10,
  },
  imgHrPadding: {
    type: "number",
    default: 10,
  },
  imgVrPaddingMobile: {
    type: "number",
    default: 10,
  },
  imgHrPaddingMobile: {
    type: "number",
    default: 10,
  },
  imgVrPaddingTablet: {
    type: "number",
    default: 10,
  },
  imgHrPaddingTablet: {
    type: "number",
    default: 10,
  },
  imgTopPadding: {
    type: "number",
    default: 10,
  },
  imgBottomPadding: {
    type: "number",
    default: 10,
  },
  iconImage: {
    type: "object",
    default: {
      url: "",
      alt: "InfoBox placeholder img",
    },
  },
  imageSize: {
    type: "string",
    default: "thumbnail",
  },
  imageWidth: {
    type: "number",
    default: 60,
  },
  columns: {
    type: "number",
    default: 1,
  },
  tcolumns: {
    type: "number",
    default: 1,
  },
  mcolumns: {
    type: "number",
    default: 1,
  },
  pauseOnHover: {
    type: "boolean",
    default: true,
  },
  infiniteLoop: {
    type: "boolean",
    default: true,
  },
  transitionSpeed: {
    type: "number",
    default: 500,
  },
  autoplay: {
    type: "boolean",
    default: true,
  },
  autoplaySpeed: {
    type: "number",
    default: 2000,
  },
  arrowDots: {
    type: "string",
    default: "arrows_dots",
  },
  arrowSize: {
    type: "number",
    default: 20,
  },
  arrowBorderWidth: {
    type: "number",
    default: 1,
  },
  arrowBorderRadius: {
    type: "number",
    default: 0,
  },
    arrowBorderColor: {
        type: "string",
    },
    arrowBorderStyle: {
        type: "string",
    },
    rowGap: {
    type: "number",
    default: 10,
  },
  columnGap: {
    type: "number",
    default: 10,
  },
  contentPadding: {
    type: "number",
    default: 5,
  },
  rowGapMobile: {
    type: "number",
    default: 10,
  },
  columnGapMobile: {
    type: "number",
    default: 10,
  },
  contentPaddingMobile: {
    type: "number",
    default: 5,
  },
  rowGapTablet: {
    type: "number",
    default: 10,
  },
  columnGapTablet: {
    type: "number",
    default: 10,
  },
  contentPaddingTablet: {
    type: "number",
    default: 5,
  },
  backgroundType: {
    type: "string",
  },
  backgroundImage: {
    type: "string",
  },
  backgroundImagePosition: {
    type: "string",
    default: "center-center",
  },
  backgroundImageSize: {
    type: "string",
    default: "cover",
  },
  backgroundImageRepeat: {
    type: "string",
    default: "no-repeat",
  },
  backgroundColor: {
    type: "string",
  },
  backgroundAttachment: {
    type: "string",
    default: "scroll",
  },
  overlayType: {
    type: "string",
    default: "color",
  },
  gradientOverlayColor1: {
    type: "string",
  },
  gradientOverlayColor2: {
    type: "string",
  },
  gradientOverlayType: {
    type: "string",
    default: "linear",
  },
  gradientOverlayLocation1: {
    type: "number",
    default: 0,
  },
  gradientOverlayLocation2: {
    type: "number",
    default: 100,
  },
  gradientOverlayAngle: {
    type: "number",
    default: 0,
  },
  gradientOverlayPosition: {
    type: "string",
    default: "center center",
  },
  opacity: {
    type: "number",
    default: 20,
  },
  backgroundImageColor: {
    type: "string",
  },
    blockBorderStyle: {
    type: "string",
    default: "none",
  },
    blockBorderWidth: {
    type: "number",
    default: "1",
  },
    blockBorderRadius: {
    type: "number",
  },
    blockBorderColor: {
    type: "string",
  },
  backgroundOpacity: {
    type: "number",
    default: 50,
  },
  arrowColor: {
    type: "string",
    default: "#333",
  },
  stack: {
    type: "string",
    default: "tablet",
  },
  blockPadding: {
    type: "number",
    default: 45,
  },
  blockPaddingMobile: {
    type: "number",
    default: 45,
  },
  blockPaddingTablet: {
    type: "number",
    default: 45,
  },
  backgroundRepeat: {
	type: "number",
	default: "empty",
  }, // For compatibility with v1.3.2.
  backgroundSize: {
	type: "number",
	default: "empty",
  }, // For compatibility with v1.3.2.
  borderStyle: {
	type: "string",
	default: "empty",
  }, // For compatibility with v1.3.2.
  borderColor: {
	type: "string",
	default: "empty",
  }, // For compatibility with v1.3.2.
  borderWidth: {
	type: "number",
	default: 999,
  }, // For compatibility with v1.3.2.
  borderRadius: {
	type: "number",
	default: 999,
  }, // For compatibility with v1.3.2.
	hideWidget: {
	  type: "boolean",
	  default: false,
	},
	hideWidgetTablet: {
	  type: "boolean",
	  default: false,
	},
	hideWidgetMobile: {
	  type: "boolean",
	  default: false,
	},
  z_index: {
    type: "number",
    default: 1,
  },
  z_indexTablet: {
    type: "number",
    default: 1,
  },
  z_indexMobile: {
    type: "number",
    default: 1,
  },
};

export default attributes;
