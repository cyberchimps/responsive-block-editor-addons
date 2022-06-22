/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import { loadGoogleFont } from "../../../utils/font";
import EditorStyles from "./editor-styles";
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText, AlignmentToolbar, BlockControls } = wp.editor;
export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }
  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-number-box-style-" +
      this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }
  }

  componentDidMount() {
    // Assigning block_id in the attribute.
    this.props.setAttributes({ block_id: this.props.clientId });

    this.props.setAttributes({ classMigrate: true });

    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-number-box-style-" +
      this.props.clientId
    );
    document.head.appendChild($style);
  }
  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        numberValue,
        numberBoxAlignment,
        contentFontFamily,
      },
      setAttributes,
    } = this.props;
    this.props.setAttributes({ block_id: this.props.clientId });
    return [
      <BlockControls key="controls">
        <AlignmentToolbar
          value={numberBoxAlignment}
          onChange={(value) => setAttributes({ numberBoxAlignment: value })}
        />
      </BlockControls>,
      // Show the block controls on focus
      <Inspector {...{ setAttributes, ...this.props }} />,

      // Show the block markup in the editor
      <div
        className={classnames(
          "responsive-block-editor-addons-block-number-box",
          `block-${block_id}`
        )}
      >
        <div className="rbea-number-box-main-container">
          <div className="rbea-number-box">
            <div className="rbea-number-box-container">
            {contentFontFamily && loadGoogleFont(contentFontFamily)}
              <RichText
                tagName="div"
                value={numberValue}
                placeholder={__("101", "responsive-block-editor-addons")}
                className="rbea-number-box-block"
                multiline={false}
                onChange={(value) => setAttributes({ numberValue: value })}
                allowedFormats={[ 'core/bold', 'core/italic']}
              />
            </div>
          </div>
        </div>

      </div>
    ];
  }
}
