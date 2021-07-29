/**
 * Returns Dynamic Generated Classes
 */

export default function DayAlignClass(attributes, i) {
  let day_align_class = "";

  if ("left" == attributes.timelinAlignment) {
    day_align_class =
      "responsive-block-editor-addons-timeline__day-new responsive-block-editor-addons-timeline__day-left";
  } else if ("right" == attributes.timelinAlignment) {
    day_align_class =
      "responsive-block-editor-addons-timeline__day-new responsive-block-editor-addons-timeline__day-right";
  } else if ("center" == attributes.timelinAlignment) {
    if (i % 2 == "0") {
      day_align_class =
        "responsive-block-editor-addons-timeline__day-new responsive-block-editor-addons-timeline__day-right";
    } else {
      day_align_class =
        "responsive-block-editor-addons-timeline__day-new responsive-block-editor-addons-timeline__day-left";
    }
  }

  return [day_align_class];
}
