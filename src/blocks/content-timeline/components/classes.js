/**
 * Returns Dynamic Generated Classes
 */

function ContentTmClasses(attributes) {
  /* Arrow position */
  var arrow_align_class = "responsive-timeline__arrow-top" + " ";
  if (attributes.arrowlinAlignment == "center") {
    arrow_align_class = "responsive-timeline__arrow-center" + " ";
  } else if (attributes.arrowlinAlignment == "bottom") {
    arrow_align_class = "responsive-timeline__arrow-bottom" + " ";
  }

  /* Alignmnet */
  var align_class = "responsive-timeline__center-block " + " ";
  if (attributes.timelinAlignment == "left") {
    align_class = "responsive-timeline__left-block" + " ";
  } else if (attributes.timelinAlignment == "right") {
    align_class = "responsive-timeline__right-block" + " ";
  }
  align_class += arrow_align_class + "";
  align_class +=
    "responsive-timeline__responsive-" +
    attributes.stack +
    " responsive-timeline";

  return [align_class];
}

export default ContentTmClasses;
