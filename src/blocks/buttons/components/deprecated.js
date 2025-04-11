/**
 * Internal dependencies
 */
import attributes from "../attributes";
import ButtonsDeprecated from "./buttons-deprecated";

/**
 * WordPress dependencies
 */
const { InnerBlocks } = wp.blockEditor;

const Deprecated = [
  {
    attributes: attributes,
    save: (props) => {
      const {
        buttonAlignment,
        buttonAlignmentTablet,
        buttonAlignmentMobile,
        stack,
      } = props.attributes;

      return (
        <ButtonsDeprecated {...props}>
          <div className="responsive-block-editor-addons-buttons__wrap responsive-block-editor-addons-buttons-layout-wrap">
            <InnerBlocks.Content />
          </div>
        </ButtonsDeprecated>
      );
    },
  },
];

export default Deprecated;
