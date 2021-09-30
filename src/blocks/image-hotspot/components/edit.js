import classnames from "classnames";
import Inspector from "./inspector";
import EditorStyles from "./editor-styles";
import { loadGoogleFont } from "../../../utils/font";

const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-image-hotspot-style-" +
        this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }
  }

  componentDidMount() {
    this.props.setAttributes({ block_id: this.props.clientId });
    this.props.setAttributes({ classMigrate: true });

    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-image-hotspot-style-" +
        this.props.clientId
    );

    document.head.appendChild($style);
  }

  render() {
    const {
      attributes: { block_id },
      setAttributes,
    } = this.props;

    return (
      (<Inspector {...{ setAttributes, ...this.props }} />),
      (
        <div
          className={classnames(
            "responsive-block-editor-addons-block-image-hotspot",
            `block-${block_id}`
          )}
        >
        </div>
      )
    );
  }
}
