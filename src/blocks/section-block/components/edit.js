/**
 * Import dependencies.
 */
import LayoutModal from "../layout/layout-modal";

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { Placeholder, Button } = wp.components;
const { Component, Fragment } = wp.element;
const { BlockControls, BlockAlignmentToolbar } = wp.blockEditor;

// Button Component to render in the preview.
const PreviewButtonComponent = () => {
  return (
    <Button
      key={"layout-modal-library-button-1"}
      isPrimary
      className="rbea-pattern-modal-button"
    >
      {__("Layout Library", "responsive-block-editor-addons")}
    </Button>
  );
}

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
          {isSelected ? <LayoutModal clientId={clientId} /> : <PreviewButtonComponent />}
        </Placeholder>
      </Fragment>
    );
  }
}