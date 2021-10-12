/**
 * Internal dependencies
 */
import Googlemap from "./googlemap";
import classnames from "classnames";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;

export default class Save extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      address: this.props.attributes.address,
      coords: null,
      hasError: false,
    };
  }

  render() {
    const { block_id, address, zoom, height } = this.props.attributes;

    return (
      <Googlemap {...this.props}>
        <div
          className={classnames(
          "responsive-block-editor-addons-block-googlemap",
          `block-${block_id}`
        )}
        >
        {
          <iframe
            frameBorder="0"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              address
            )}&output=embed&z=${zoom}`}
          />
        }
        </div>
      </Googlemap>
    );
  }
}
