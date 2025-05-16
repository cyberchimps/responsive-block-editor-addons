/**
 * Import dependencies.
 */
import LayoutModal from "../layout/layout-modal";

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { Placeholder } = wp.components;
const { Fragment, useEffect, useState } = wp.element;
const { BlockControls, BlockAlignmentToolbar } = wp.blockEditor;
const { useSelect } = wp.data;

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  const { previewImage, previewTitle, previewDescription, align } = attributes;

  // Check if block is in example mode
  const isInExample = Boolean(previewImage && previewTitle && previewDescription);

  if (isInExample) {
    // Render custom preview in example mode
    return (
      <div
        className="rbea-template-preview"
        style={{
          border: "1px solid #ddd",
          borderRadius: "6px",
          padding: "12px",
          textAlign: "center",
          backgroundColor: "#fff",
        }}
        onMouseEnter={() => console.log("Hovered over block preview")}
      >
        {previewImage && (
          <img
            src={previewImage}
            alt={previewTitle || "Preview"}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "200px",
              objectFit: "cover",
              borderRadius: "4px",
              marginBottom: "10px",
            }}
          />
        )}
        <h3 style={{ margin: 0, fontSize: "1.1em" }}>{previewTitle}</h3>
        <p style={{ margin: "5px 0 0", fontSize: "0.9em", color: "#666" }}>
          {previewDescription}
        </p>
      </div>
    );
  }

  return (
    <Fragment>
      <BlockControls>
        <BlockAlignmentToolbar
          value={align}
          onChange={(newAlign) => setAttributes({ align: newAlign })}
        />
      </BlockControls>
      <Placeholder
        label={__("Responsive Block Editor Addons", "responsive-block-editor-addons")}
        instructions={__(
          "Use Pattern Importer to import pre-designed patterns and layouts.",
          "responsive-block-editor-addons"
        )}
        icon="editor-table"
      >
        <LayoutModal clientId={clientId} />
      </Placeholder>
    </Fragment>
  );
};

export default Edit;
