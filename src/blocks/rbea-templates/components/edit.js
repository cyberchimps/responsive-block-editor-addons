/**
 * Import dependencies.
 */
import LayoutModal from "./layout/layout-modal";
import { LayoutsContext } from "./layouts-provider";

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { Placeholder } = wp.components;
const { Component, Fragment } = wp.element;
const { BlockControls, BlockAlignmentToolbar } = wp.blockEditor;

export default class Edit extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    const { attributes, setAttributes, clientId } = this.props;

    return [
      <Fragment key={this.props.clientId}>
        <BlockControls key="controls">
          <BlockAlignmentToolbar
            value={attributes.align}
            onChange={(align) => setAttributes({ align })}
            controls={[]}
          />
        </BlockControls>
        <Placeholder
          key="placeholder"
          label={__(
            "Responsive Block Editor Addons",
            "responsive-block-editor-addons"
          )}
          instructions={__(
            "Use Pattern Importer to import pre-designed patterns and layouts.",
            "responsive-block-editor-addons"
          )}
          className={"rbea-pattern-placeholder"}
          icon="editor-table"
        >
          <LayoutsContext.Consumer
            key={"pattern-context-" + this.props.clientId}
          >
            {(context) => <LayoutModal clientId={clientId} context={context} />}
          </LayoutsContext.Consumer>
        </Placeholder>
      </Fragment>,
    ];
  }
}
