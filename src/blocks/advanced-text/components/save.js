import classnames from "classnames";
import Style from "style-it";

const { Component, Fragment } = wp.element;

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const { block_id } = this.props.attributes;

    return <Fragment></Fragment>;
  }
}
