import classnames from "classnames";
const { Component, Fragment } = wp.element;

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const { block_id } = this.props.attributes;

    return (
      <div
        className={classnames(
          "responsive-block-editor-addons-block-image-hotspot",
          `block-${block_id}`
        )}
      >
      </div>
    );
  }
}
