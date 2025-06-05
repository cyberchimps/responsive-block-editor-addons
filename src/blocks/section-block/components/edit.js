/**
 * Import dependencies.
 */
import LayoutModal from "../layout/layout-modal";

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
    const { attributes, setAttributes, isSelected, clientId } = this.props;
    const {
      align,
      previewImage,
      previewTitle,
      previewDescription,
    } = attributes;

    // Show preview when block is not selected
    if (!isSelected && previewImage) {
      return (
        <div
          className="rbea-template-preview"
          style={{
            border: '1px solid #ddd',
            borderRadius: '6px',
            padding: '12px',
            textAlign: 'center',
            backgroundColor: '#fff',
          }}
        >
          <img
            src={previewImage}
            alt={previewTitle || "Preview"}
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '200px',
              objectFit: 'cover',
              borderRadius: '4px',
              marginBottom: '10px',
            }}
          />
          <h3 style={{ margin: 0, fontSize: '1.1em' }}>{previewTitle}</h3>
          <p style={{ margin: '5px 0 0', fontSize: '0.9em', color: '#666' }}>
            {previewDescription}
          </p>
        </div>
      );
    }

    // Actual block UI when selected
    return (
      <Fragment key={clientId}>
        <BlockControls key="controls">
          <BlockAlignmentToolbar
            value={align}
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
          <LayoutModal clientId={clientId} />
        </Placeholder>
      </Fragment>
    );
  }
}