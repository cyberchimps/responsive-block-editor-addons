/**
 * Inspector Controls
 */

/**
 * Internal dependencies
 */
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;

// Import block components
const { InspectorControls } = wp.editor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  BaseControl,
  TextControl,
  Button,
  ExternalLink,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.state = {
      apiKey: props.apiKey,
      isSavedKey: false,
      keySaved: false,
      address: props.attributes.address,
    };
  }

  render() {
    // Setup the attributes
    const {
      attributes: { zoom, height, apiKey },
      setAttributes,
    } = this.props;

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={'content'}>
            <PanelBody title={__("Map settings", "responsive-block-editor-addons")}>
              <RangeControl
                label={__("Zoom", "responsive-block-editor-addons")}
                value={zoom}
                onChange={(value) =>
                  this.props.setAttributes({
                    zoom: value,
                  })
                }
                min={10}
                max={17}
                step={1}
              />
              <BaseControl
                label={__("Height in pixels", "responsive-block-editor-addons")}
                id="map-height-control"
              >
                <input
                  type="number"
                  aria-label={__(
                    "Height for the map in pixels",
                    "responsive-block-editor-addons"
                  )}
                  onChange={(event) =>
                    setAttributes({ height: parseInt(event.target.value, 10) })
                  }
                  value={height}
                  min={200}
                  step={10}
                />
              </BaseControl>
            </PanelBody>

            <PanelBody
              title={__("Google Maps API key", "responsive-block-editor-addons")}
              initialOpen={false}
              className="components-responsive-block-settings-sidebar"
            >
              <p>
                {__(
                  "Add a Google Maps API key. Updating this API key will set all your maps to use the new key.",
                  "responsive-block-editor-addons"
                )}
              </p>
              {apiKey === "" && (
                <p>
                  <ExternalLink href={GET_KEY_URL}>
                    {__("Get a key", "responsive-block-editor-addons")}
                  </ExternalLink>
                  |&nbsp;
                  <ExternalLink href={HELP_URL}>
                    {__("Need help?", "responsive-block-editor-addons")}
                  </ExternalLink>
                </p>
              )}
              <TextControl
                value={this.state.apiKey}
                onChange={(value) => this.setState({ apiKey: value })}
                placeholder={__(
                  "Add Google API key…",
                  "responsive-block-editor-addons"
                )}
                onKeyDown={({ keyCode }) => this.handleKeyDown(keyCode)}
                className="components-block-responsive-map-api-key__custom-input"
              />
              <Button
                isPrimary
                onClick={this.updateApiKey}
                disabled={
                  this.state.apiKey === "" ||
                  this.state.apiKey === this.props.apiKey
                }
              >
                {this.state.apiKey === this.props.apiKey && this.props.apiKey !== ""
                  ? __("Saved", "responsive-block-editor-addons")
                  : __("Save", "responsive-block-editor-addons")}
              </Button>
              {apiKey && (
                <Button
                  className="components-block-responsive-map-api-key-remove__button"
                  isSecondary
                  onClick={this.removeApiKey}
                  disabled={
                    this.state.apiKey !== this.props.apiKey || !this.state.apiKey
                  }
                >
                  {__("Remove", "responsive-block-editor-addons")}
                </Button>
              )}
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={'style'}></InspectorTab>
          <InspectorTab key={'advance'}></InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
