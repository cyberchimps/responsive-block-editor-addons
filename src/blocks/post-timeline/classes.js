/**
 * Returns Dynamic Generated Classes
 */

export default function ContentTmClasses(attributes) {
  /* Arrow position */
  var arrow_align_class =
    "responsive-block-editor-addons-timeline__arrow-top" + " ";
  if (attributes.arrowlinAlignment == "center") {
    arrow_align_class =
      "responsive-block-editor-addons-timeline__arrow-center" + " ";
  } else if (attributes.arrowlinAlignment == "bottom") {
    arrow_align_class =
      "responsive-block-editor-addons-timeline__arrow-bottom" + " ";
  }

  /* Alignmnet */
  var align_class =
    "responsive-block-editor-addons-timeline__center-block " + " ";
  if (attributes.timelinAlignment == "left") {
    align_class = "responsive-block-editor-addons-timeline__left-block" + " ";
  } else if (attributes.timelinAlignment == "right") {
    align_class = "responsive-block-editor-addons-timeline__right-block" + " ";
  }
  align_class += arrow_align_class + "";
  align_class +=
    "responsive-block-editor-addons-timeline__responsive-" +
    attributes.stack +
    " responsive-block-editor-addons-timeline";

  return [align_class];
}
