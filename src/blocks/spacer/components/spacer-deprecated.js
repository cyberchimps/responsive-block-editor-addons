/**
 * WordPress dependencies
 */
const { Component } = wp.element;

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return [<div className="responsive-block-editor-addons-spacer"> </div>];
  }
}
