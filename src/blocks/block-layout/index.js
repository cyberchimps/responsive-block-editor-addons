/**
 * BLOCK: Pattern Importer Layout
 */

/**
 * Import dependencies.
 */
import Edit from "./components/edit";
import "./styles/style.scss";
import "./styles/styles.editor.scss";
import LayoutsProvider from "./components/layouts-provider";

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register the block
 */
registerBlockType("responsive-block-editor-addons/rbea-templates", {
  title: __("Pattern Importer", "responsive-block-editor-addons"),
  description: __(
    "This allows you to add pre-designed blocks and layouts to your page.",
    "responsive-block-editor-addons"
  ),
  icon: "editor-table",
  category: "responsive-block-editor-addons",
  keywords: [
    __("patterns", "responsive-block-editor-addons"),
    __("importer", "responsive-block-editor-addons"),
    __("layouts", "responsive-block-editor-addons"),
  ],

  /* Render the block in editor. */
  edit: (props) => {
    return (
      <LayoutsProvider>
        <Edit {...props} />
      </LayoutsProvider>
    );
  },

  /* Save the block markup. */
  save: () => {
    return null;
  },
});

/**
 * Add a Pattern Importer button to the toolbar.
 */
let patternButtonExist = false;
wp.data.subscribe(() => {
  appendImportButton();
});

/**
 * Build the pattern importer button.
 */
function appendImportButton() {
  if (patternButtonExist) {
    return;
  }
  const toolbar = document.querySelector(".edit-post-header__toolbar");
  if (!toolbar) {
    return;
  }
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("rbea-pattern-wrapper");
  let html = '<div class="rbea-import-pattern">';
  html += `<button id="patternButton" class="components-button components-icon-button" aria-label="${__(
    "Import Pattern",
    "responsive-block-editor-addons"
  )}"><i class="dashicons dashicons-editor-table rbea-import-pattern-button"></i> ${__(
    "RBEA Templates",
    "responsive-block-editor-addons"
  )}</button>`;
  html += "</div>";
  buttonDiv.innerHTML = html;
  toolbar.appendChild(buttonDiv);

  const innerToolbar = document.querySelector(
    ".components-accessible-toolbar.edit-post-header-toolbar"
  );
  if (innerToolbar) {
    innerToolbar.style.flexGrow = 0;
  }

  document
    .getElementById("patternButton")
    .addEventListener("click", rbeaRenderModalBlock);

  patternButtonExist = true;
}

/**
 * Render block (Modal) on click.
 */
function rbeaRenderModalBlock() {
  const block = wp.blocks.createBlock(
    "responsive-block-editor-addons/rbea-templates"
  );
  wp.data.dispatch("core/block-editor").insertBlocks(block);
}
