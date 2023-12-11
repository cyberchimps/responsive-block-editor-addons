const attributes = {
    block_id: {
      type: "string",
    },
    isPopupVariantSelected: {
        type: "boolean",
        default: false,
    },
    popupVariant: {
        type: "string",
    },
    popupInitiateBtn: {
        type: "boolean",
        default: false,
    },
    popupContainerWidth: {
        type: "number",
        default: 600,
    },
    popupContainerWidthTablet: {
        type: "number",
        default: 600,
    },
    popupContainerWidthMobile: {
        type: "number",
        default: 600,
    },
    popupHeightType: {
        type: "string",
        default: "auto",
    },
    popupHeightCustom: {
        type: "number",
        default: 500,
    },
    popupHeightCustomTablet: {
        type: "number",
        default: 500,
    },
    popupHeightCustomMobile: {
        type: "number",
        default: 500,
    },
    popupPaddingTop: {
        type: "number",
        default: 20,
    },
    popupPaddingTopTablet: {
        type: "number",
        default: 15,
    },
    popupPaddingTopMobile: {
        type: "number",
        default: 10,
    },
    popupPaddingBottom: {
        type: "number",
        default: 20,
    },
    popupPaddingBottomTablet: {
        type: "number",
        default: 15,
    },
    popupPaddingBottomMobile: {
        type: "number",
        default: 10,
    },
    popupPaddingLeft: {
        type: "number",
        default: 20,
    },
    popupPaddingLeftTablet: {
        type: "number",
        default: 15,
    },
    popupPaddingLeftMobile: {
        type: "number",
        default: 10,
    },
    popupPaddingRight: {
        type: "number",
        default: 20,
    },
    popupPaddingRightTablet: {
        type: "number",
        default: 15,
    },
    popupPaddingRightMobile: {
        type: "number",
        default: 10,
    },
    popupScreenType: {
        type: "string",
        default: "center center"
    },
    popupScreenTypeMobile: {
        type: "string",
        default: "center center"
    },
    popupScreenTypeTablet: {
        type: "string",
        default: "center center"
    },
    popupTrigger: {
        type: "string",
        default: "load"
    },
    popupTriggerDelay: {
        type: "number",
        default: 1
    },
    popupToggleCloseBtn: {
        type: "boolean",
        default: false,
    },
    popupToggleCloseBtnPosition: {
        type: "string",
        default: "flex-end"
    },
    popupBgType: {
        type: "string",
        default: "color",
    },
    popupGradient: {
        type: "string",
        default: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
    },
    popupBgColor: {
        type: "string",
        default: "#fff",
    },
    popupCloseBtnColor: {
        type: "string",
        default: "#000",
    },
    popupOverlayColor: {
        type: "string",
        default: "#10659C",
    },
    popupOverlayOpacity: {
        type: "number",
        default: 95,
    },
    popupBlockBorderStyle: {
        type: "string",
        default: "solid",
    },
    popupBlockBorderWidth: {
        type: "number",
        default: 1,
    },
    popupBlockBorderRadius: {
        type: "number",
        default: 2,
    },
    popupBlockBorderColor: {
        type: "string",
        default: "black",
    },
    popupTriggerType: {
        type: "string",
        default: "button",
    },
    popupTriggerAlign: {
        type: "string",
        default: "left",
    },
    popupTriggerAlignTablet: {
        type: "string",
        default: "left",
    },
    popupTriggerAlignMobile: {
        type: "string",
        default: "left",
    },
    popupButtonPreset: {
        type: "string",
        default: "empty"
    },
    popupIconTrigger: {
        type: "string",
        default: "fa fa-angellist",
    },
    popupImageTrigger: {
        type: "string",
    },
    popupTextTrigger: {
        type: "string",
        default: "Click Here"
    },
    popupButtonHoverState: {
        type: "boolean",
        default: false,
    },
    popupButtonColor: {
        type: "string",
        default: "#fff",
    },
    popupButtonBGColor: {
        type: "string",
        default: "#10659C",
    },
    popupButtonHoverColor: {
        type: "string",
        default: "#fff",
    },
    popupButtonBGHoverColor: {
        type: "string",
        default: "#10659C",
    },
  };
  
  export default attributes;
  