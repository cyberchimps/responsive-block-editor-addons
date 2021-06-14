/**
 * Function name: AlignClass
 * @param array attributes settign array of attributes.
 * @param int index_val  index values.
 */
export default function AlignClass(attributes, i) {
  let align_class = "";
  if ("left" == attributes.timelinAlignment) {
    align_class =
      "responsive-block-editor-addons-timeline__widget responsive-block-editor-addons-timeline__left";
  } else if ("right" == attributes.timelinAlignment) {
    align_class =
      "responsive-block-editor-addons-timeline__widget responsive-block-editor-addons-timeline__right";
  } else if ("center" == attributes.timelinAlignment) {
    if (i % 2 == "0") {
      align_class =
        "responsive-block-editor-addons-timeline__widget responsive-block-editor-addons-timeline__right";
    } else {
      align_class =
        "responsive-block-editor-addons-timeline__widget responsive-block-editor-addons-timeline__left";
    }
  }

  return [align_class];
}
