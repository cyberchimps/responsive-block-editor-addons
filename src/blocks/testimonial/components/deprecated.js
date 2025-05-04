import classnames from "classnames";
import attributes from "../attributes";

import DeprecatedTestimonialSave from "../deprecated/deprecatedTestimonialSave";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { InnerBlocks } = wp.editor;

const deprecated = [
  {
    attributes: attributes,
    migrate: function (attributes, innerBlocks) {
      console.log("Migrating deprecated testimonial block");
      return [
        attributes,
        innerBlocks,
      ];
    },
    save: function (props) {
      console.log("Saving deprecated testimonial block", props);
      return <DeprecatedTestimonialSave {...props} />;
    },
  },
];

export default deprecated;