/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import Spacer from "./spacer";
import Resizable from "re-resizable";
import EditorStyles from "./editor-styles";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { AlignmentToolbar, BlockControls } = wp.blockEditor;

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-divider-style-" + this.props.clientId
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
      "responsive-block-editor-addons-divider-style-" + this.props.clientId
    );
    document.head.appendChild($style);
  }

  render() {
    // Setup the attributes
    const {
      attributes: { block_id, spacerDividerStyle, spacerDividerAlignment },
      className,
      setAttributes,
      toggleSelection,
    } = this.props;

    return [
      <style id={`responsive-block-editor-addons-divider-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
      <BlockControls key="controls">
        <AlignmentToolbar
          value={spacerDividerAlignment}
          onChange={(value) => setAttributes({ spacerDividerAlignment: value })}
        />
      </BlockControls>,
      // Show the block controls on focus
      <Inspector
        key={
          "responsive-block-editor-addons-spacer-inspector-" +
          this.props.clientId
        }
        {...this.props}
      />,

      // Show the button markup in the editor
      <Spacer
        key={
          "responsive-block-editor-addons-spacer-editor-" + this.props.clientId
        }
        {...this.props}
      >
        <Resizable
          className={classnames(
            className,
            "responsive-block-editor-addons-spacer-handle"
          )}
          size={{
            width: "100%",
          }}
          minWidth={"100%"}
          maxWidth={"100%"}
          minHeight={"100%"}
          enable={{
            top: false,
            right: false,
            bottom: false,
            left: false,
            topRight: false,
            bottomRight: false,
            bottomLeft: false,
            topLeft: false,
          }}
        >
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
        </Resizable>
      </Spacer>,
    ];
  }
}
