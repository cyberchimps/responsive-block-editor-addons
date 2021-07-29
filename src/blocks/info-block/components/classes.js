/**
 * Returns Dynamic Generated Classes
 */

function InfoBoxPositionClasses(attributes) {
  var sourceClass = "responsive-block-editor-addons-infobox-has-image";
  if (attributes.source_type == "icon") {
    sourceClass = "responsive-block-editor-addons-infobox-has-icon";
  }

  var iconimgStyle_class = "";

  iconimgStyle_class += "responsive-block-editor-addons-infobox" + " ";
  iconimgStyle_class += sourceClass + " ";
  iconimgStyle_class +=
    "responsive-block-editor-addons-infobox-icon-" +
    attributes.imgiconPosition +
    " ";

  if (
    attributes.imgiconPosition === "left" ||
    attributes.imgiconPosition === "left-title"
  ) {
    iconimgStyle_class += "responsive-block-editor-addons-infobox-left" + " ";
  }

  if (
    attributes.imgiconPosition === "right" ||
    attributes.imgiconPosition === "right-title"
  ) {
    iconimgStyle_class += "responsive-block-editor-addons-infobox-right" + " ";
  }

  if (
    (attributes.imgiconPosition === "left" ||
      attributes.imgiconPosition === "right") &&
    attributes.stack !== "none"
  ) {
    iconimgStyle_class +=
      "responsive-block-editor-addons-infobox-stacked-" +
      attributes.stack +
      " ";
    if (attributes.imgiconPosition === "right") {
      iconimgStyle_class +=
        "responsive-block-editor-addons-infobox-reverse-order-" +
        attributes.stack +
        " ";
    }
  }

  if (
    attributes.imgiconPosition !== "above-title" ||
    attributes.imgiconPosition !== "below-title"
  ) {
    iconimgStyle_class +=
      "responsive-block-editor-addons-infobox-image-valign-" +
      attributes.ressourceAlign +
      " ";
  }

  if((attributes.imgiconPosition !== "above-title" ||
  attributes.imgiconPosition !== "below-title") && attributes.stack ==="none"){
    iconimgStyle_class +=
    "responsive-block-editor-addons-infobox-image-valign-tablet-" +
    attributes.ressourceAlignTablet +
    " ";
    iconimgStyle_class +=
      "responsive-block-editor-addons-infobox-image-valign-mobile-" +
      attributes.ressourceAlignMobile +
      " ";
  }

  if((attributes.imgiconPosition !== "above-title" ||
  attributes.imgiconPosition !== "below-title") && attributes.stack ==="mobile"){
    iconimgStyle_class +=
    "responsive-block-editor-addons-infobox-image-valign-tablet-" +
    attributes.ressourceAlignTablet +
    " ";
  }

  if (attributes.enableBorder) {
    iconimgStyle_class +=
      "responsive-block-editor-addons-infobox-enable-border" + " ";
  }

  iconimgStyle_class +=
    "responsive-block-editor-addons-infobox-enable-border-radius" + " ";

  return [iconimgStyle_class];
}

export default InfoBoxPositionClasses;
