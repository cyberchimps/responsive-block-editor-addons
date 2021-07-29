const { __ } = wp.i18n

const tools = [];

tools.push({
    "add_required_tools": __("A computer", "responsive-block-editor-addons")
})

const materials = [];

materials.push({
    "add_required_materials": __("A WordPress site", "responsive-block-editor-addons")
})

const attributes = {
    //Main Header attributes
    block_id: {
        type: "string"
    },
    headingTag: {
        source: "type",
        default: "h3"
    },
    mainHeadingText: {
        type: "string",
        default: __("How to configure HowTo Schema in RBEA?", "responsive-block-editor-addons")
    },
    mainImage: {
        type: "object",
        default: {
            "url": ""
        }
    },
    overallAlignment: {
        type: "string",
        default: "left"
    },
    //Time Attributes
    showEstimatedTime: {
        type: "boolean",
        default: true
    },
    years: {
        type: "number"
    },
    months: {
        type: "number"
    },
    days: {
        type: "number"
    },
    hours: {
        type: "number"
    },
    minutes: {
        type: "number",
        default: 30
    },
    time: {
        type: "string",
        default: "30"
    },
    timeIn: {
        type: "string",
        default: "minutes"
    },
    timeHeading: {
        type: "string",
        default: __("Estimated Total Time", "responsive-block-editor-addons")
    },
    //Estimated Cost Attributes
    showEstimatedCost: {
        type: "boolean",
        default: true
    },
    cost: {
        type: "string",
        default: "10"
    },
    currency: {
        type: "string",
        default: "USD"
    },
    costHeading: {
        type: "string",
        default: __("Estimated Total Cost", "responsive-block-editor-addons")
    },
    //Tools Attributes
    showTools: {
        type: "boolean",
        default: true
    },
    numberOfTools: {
        type: "number",
        default: 1
    },
    tools: {
        type: "array",
        default: tools
    },
    toolsHeading: {
        type: "string",
        default: __("Tools Required", "responsive-block-editor-addons")
    },
    //Materials Attributes
    showMaterials: {
        type: "boolean",
        default: true,
    },
    materialsHeading: {
        type: "string",
        default: __("Materials Required", "responsive-block-editor-addons")
    },
    numberOfMaterials: {
        type: "number",
        default: 1
    },
    materials: {
        type: "array",
        default: materials
    },
    //Color Attributes
    mainHeadingColor: {
        type: "string"
    },
    secondaryHeadingColor: {
        type: "string"
    },
    descriptionColor: {
        type: "string"
    },
    //Main Heading Typography
    mainHeadingFontFamily: {
        type: "string"
    },
    mainHeadingFontSize: {
        type: "number",
        default: 14
    },
    mainHeadingFontSizeMobile: {
        type: "number",
        default: 12
    },
    mainHeadingFontSizeTablet: {
        type: "number",
        default: 14
    },
    mainHeadingFontWeight: {
        type: "string"
    },
    mainHeadingLineHeight: {
        type: "number"
    },
    mainHeadingLineHeightMobile: {
        type: "number"
    },
    mainHeadingLineHeightTablet: {
        type: "number"
    },
    mainHeadingLetterSpacing: {
        type: "number"
    },
    //Sub Heading Typography
    subHeadingFontFamily: {
        type: "string"
    },
    subHeadingFontSize: {
        type: "number",
        default: 14
    },
    subHeadingFontSizeMobile: {
        type: "number",
        default: 12
    },
    subHeadingFontSizeTablet: {
        type: "number",
        default: 14
    },
    subHeadingFontWeight: {
        type: "string"
    },
    subHeadingLineHeight: {
        type: "number"
    },
    subHeadingLineHeightMobile: {
        type: "number"
    },
    subHeadingLineHeightTablet: {
        type: "number"
    },
    subHeadingLetterSpacing: {
        type: "number"
    },
    //Description Typography
    descriptionFontFamily: {
        type: "string"
    },
    descriptionFontSize: {
        type: "number",
        default: 14
    },
    descriptionFontSizeMobile: {
        type: "number",
        default: 12
    },
    descriptionFontSizeTablet: {
        type: "number",
        default: 14
    },
    descriptionFontWeight: {
        type: "string"
    },
    descriptionLineHeight: {
        type: "number"
    },
    descriptionLineHeightMobile: {
        type: "number"
    },
    descriptionLineHeightTablet: {
        type: "number"
    },
    descriptionLetterSpacing: {
        type: "number"
    },
    //Spacing Attributes
    timeMargin: {
        type: "number",
        default: 10
    },
    costMargin: {
        type: "number",
        default: 10
    },
    rowGap: {
        type: "number",
        default: 10
    },
    timeMarginMobile: {
        type: "number",
        default: 10
    },
    costMarginMobile: {
        type: "number",
        default: 10
    },
    rowGapMobile: {
        type: "number",
        default: 10
    },
    timeMarginTablet: {
        type: "number",
        default: 10
    },
    costMarginTablet: {
        type: "number",
        default: 10
    },
    rowGapTablet: {
        type: "number",
        default: 10
    },
    //List Style Attributes
    toolsListStyle: {
        type: "string",
        default: "none"
    },
    materialsListStyle: {
        type: "string",
        default: "none"
    },
    //Image Styling Attributes"
    borderStyle: {
        type: "string",
        default: "none"
    },
    borderRadius: {
        type: "number",
        default: 0
    },
    borderWidth: {
        type: "number",
        default: 1
    },
    borderColor: {
        type: "string"
    },
    //Steps Attributes
    stepsHeading: {
        type: "string",
        default: "Steps to configure How-To Schema"
    },
    stepsMargin: {
        type: "number",
        default: 10
    },
    stepsMarginMobile: {
        type: "number",
        default: 10
    },
    stepsMarginTablet: {
        type: "number",
        default: 10
    },
    //Schema Notice Attributes
    headingDesc: {
        source: "html",
        selector: "p",
        default: __("So to get started, you will just need to drag-n-drop the How-to Schema block in the Gutenberg editor. The How-to Schema block can be used on pages that contain a How-to in their title and describe steps to achieve certain requirements.", "responsive-block-editor-addons"),
    },
};

export default attributes;
