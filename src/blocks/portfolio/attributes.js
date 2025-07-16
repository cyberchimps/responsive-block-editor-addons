const ITEM_COUNT = 3;

const portfolioItems = [];

for (let i = 1; i <= ITEM_COUNT; i++) {
  portfolioItems.push({
    title: `Portfolio Item ${i}`,
    desc: `Description for portfolio item ${i}. You can use this space to provide details about the project.`,
    img_url: "",
    img_id: "",
    img_width: "",
    img_height: "",
    link: "#",
    linkText: "View Project",
  });
}

const attributes = {
  block_id: {
    type: "string",
  },
  portfolioItems: {
    type: "array",
    default: portfolioItems,
  },
  layout: {
    type: "string",
    default: "grid", // Options: grid, list, carousel
  },
  columnCount: {
    type: "number",
    default: 3,
  },
  gutter: {
    type: "string",
    default: "medium", // Options: none, small, medium, large
  },
  titleTag: {
    type: "string",
    default: "h3",
  },
  contentAlign: {
    type: "string",
    default: "center", // Options: left, center, right
  },
  titleColor: {
    type: "string",
    default: "#333333",
  },
  descColor: {
    type: "string",
    default: "#666666",
  },
  linkColor: {
    type: "string",
    default: "#007BFF",
  },
  linkHoverColor: {
    type: "string",
    default: "#0056b3",
  },
  blockBorderStyle: {
    type: "string",
    default: "solid",
  },
  blockBorderWidth: {
    type: "number",
    default: 1,
  },
  blockBorderRadius: {
    type: "number",
    default: 8,
  },
  blockPadding: {
    type: "number",
    default: 16,
  },
  blockMargin: {
    type: "number",
    default: 16,
  },
  blockBackground: {
    type: "string",
    default: "#ffffff",
  },
  blockHoverBackground: {
    type: "string",
    default: "#f8f9fa",
  },
  responsiveSettings: {
    type: "object",
    default: {
      desktop: {
        columnCount: 3,
        gutter: "medium",
      },
      tablet: {
        columnCount: 2,
        gutter: "small",
      },
      mobile: {
        columnCount: 1,
        gutter: "small",
      },
    },
  },
  overlayTextFontStyle: {
		type: 'string',
		default: "",
  },
  overlayTextTextTransform: {
		type: 'string',
		default: "",
  }
};

export default attributes;