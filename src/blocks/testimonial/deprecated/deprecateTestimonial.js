/**
 * Deprecated Testimonial Block Wrapper
 */

// Setup the block
const { Component, Fragment } = wp.element;

// Import block dependencies and components
import classnames from "classnames";

/**
 * Create a Deprecated Testimonial wrapper Component
 */
export default class DeprecatedTestimonial extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        testimonialImgURL,
        testimonialFontSize,
        testimonialCiteAlign,
        imageShape,
      },
    } = this.props;

    console.log("testimonialImgURL: ", testimonialImgURL);
    console.log("testimonialCiteAlign: ", testimonialCiteAlign);

    return (
      <Fragment key={testimonialImgURL} >
        <div
          key={"div-block"+testimonialImgURL}
          className={classnames(
            this.props.className,
            testimonialCiteAlign,
            { "responsive-block-editor-addons-has-avatar": testimonialImgURL },
            "responsive-block-editor-addons-font-size-" + testimonialFontSize,
            "testimonial-box",
            "responsive-block-editor-addons-block-testimonial",
            "image-shape-" + imageShape
          )}
        >
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}
