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
    popupIcon: {
        type: "string",
        default: "fa fa-angellist",
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
        default: "custom",
    },
    popupHeightCustom: {
        type: "number",
        default: 350,
    },
    popupHeightCustomTablet: {
        type: "number",
        default: 350,
    },
    popupHeightCustomMobile: {
        type: "number",
        default: 350,
    },
    popupPaddingTop: {
        type: "number",
        default: 15,
    },
    popupPaddingTopTablet: {
        type: "number",
        default: 15,
    },
    popupPaddingTopMobile: {
        type: "number",
        default: 15,
    },
    popupPaddingBottom: {
        type: "number",
        default: 15,
    },
    popupPaddingBottomTablet: {
        type: "number",
        default: 15,
    },
    popupPaddingBottomMobile: {
        type: "number",
        default: 15,
    },
    popupPaddingLeft: {
        type: "number",
        default: 15,
    },
    popupPaddingLeftTablet: {
        type: "number",
        default: 15,
    },
    popupPaddingLeftMobile: {
        type: "number",
        default: 15,
    },
    popupPaddingRight: {
        type: "number",
        default: 15,
    },
    popupPaddingRightTablet: {
        type: "number",
        default: 15,
    },
    popupPaddingRightMobile: {
        type: "number",
        default: 15,
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
        default: "top-right"
    },
    popupBgColor: {
        type: "string",
        default: "#fff",
    },
    popupCloseBtnColor: {
        type: "string",
        default: "#ffa500",
    },
    popupOverlayColor: {
        type: "string",
        default: "#000",
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
  };
  
  export default attributes;
  