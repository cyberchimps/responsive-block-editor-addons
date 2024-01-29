/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import Googlemap from "./googlemap";
import Controls from "./controls";
import EditorStyles from "./editor-styles";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { Button, Placeholder } = wp.components;
const { ENTER } = wp.keycodes;
import apiFetch from '@wordpress/api-fetch';


export default class Edit extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      address: this.props.attributes.address,
      coords: null,
      hasError: false,
    };

  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-googlemap-style-" + this.props.clientId
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
      "responsive-block-editor-addons-googlemap-style-" + this.props.clientId
    );
    document.head.appendChild($style);
  }

  render() {
    // Setup the attributes
    const {
      attributes: { block_id, address, zoom, height, pinned },
      setAttributes,
      isSelected,
      onSplit,
    } = this.props;

    const renderMap = (event) => {
      if (event) {
        event.preventDefault();
      }
      setAttributes({ address: this.state.address, pinned: true });
    };

    const handleKeyDown = (keyCode) => {
      if (keyCode !== ENTER) {
        return;
      }

      renderMap();
    };

    return [
      <style id={`responsive-block-editor-addons-googlemap-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
      // Show the block controls on focus
      <Inspector key={`inspector-${block_id}`} {...{ setAttributes, ...this.props }} />,

      // Show the block markup in the editor
      <Googlemap key={`googlemap-${block_id}`} {...this.props}>
        {isSelected && <Controls key={`googlemap-controls-${block_id}`} {...this.props} />}
        {pinned ? (
          <Fragment key={`fragment-googlemap-${block_id}`} >
            <div className="responsive-block-editor-addons-block-googlemap-external-element" />
            <div
              className={classnames(
                "iframe__overflow-wrapper",
                "responsive-block-editor-addons-block-googlemap",
                `block-${block_id}`
              )}
            >
              <iframe
                className="responsive-block-editor-addons-block-map-frame"
                title={__("Google Map", "responsive-block-editor-addons")}
                frameBorder="0"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  address
                )}&output=embed&z=${zoom}`}
              />
            </div>
          </Fragment>
        ) : (
          <Placeholder
            label={__("Google map", "responsive-block-editor-addons")}
            instructions={__(
              "Enter a location or address to drop a pin on a Google map.",
              "responsive-block-editor-addons"
            )}
          >
            <form onSubmit={renderMap}>
              <input
                type="text"
                defaultValue={this.state.address || ""}
                className="components-placeholder__input"
                placeholder={__(
                  "Search for a place or address…",
                  "responsive-block-editor-addons"
                )}
                onChange={(nextAddress) =>
                  this.setState({ address: nextAddress.target.value })
                }
                onKeyDown={({ keyCode }) => handleKeyDown(keyCode)}
              />
              <Button
                isSecondary
                type="submit"
                disabled={!this.state.address}
              >
                {__("Apply", "responsive-block-editor-addons")}
              </Button>
            </form>
          </Placeholder>
        )}
      </Googlemap>,
    ];
  }
}
