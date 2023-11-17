/**
 * Internal dependencies
 */
import classnames from "classnames";
import Spacer from "./spacer";
import appendImportant from "./appendImportant";

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { RichText } = wp.blockEditor;

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    // Setup the attributes
    const { block_id, spacerDividerStyle } = this.props.attributes;

    // Save the block markup for the front end
    return (
      <Spacer {...this.props}>
        <div className="responsive-block-editor-addons-divider-inner">
          <div className="responsive-block-editor-addons-divider-content">
            <hr className="responsive-block-editor-addons-divider_hr" />
            {(spacerDividerStyle === "dots" ||
              spacerDividerStyle === "asterisks") && (
              <div className="rgbl-divider__dots" aria-hidden="true">
                <div className="rgbl-divider__dot"></div>
                <div className="rgbl-divider__dot"></div>
                <div className="rgbl-divider__dot"></div>
              </div>
            )}
          </div>
        </div>
      </Spacer>
    );
  }
}
