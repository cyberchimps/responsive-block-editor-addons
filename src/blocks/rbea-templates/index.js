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

import ResponsiveBlockEditorAddonsIcons from "../../block-icons";

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register the block
 */
registerBlockType("responsive-block-editor-addons/rbea-templates", {
  title: __("RBEA Templates", "responsive-block-editor-addons"),
  description: __(
    "This allows you to add pre-designed blocks and layouts to your page.",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.block_importer,
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
  )}"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="#ff6f61"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-4zm3 2h-2v6h2V9z" fill="#ff6f61"/><path d="M6 7a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6z" fill="#ff6f61"/><path d="M6 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H6z" fill="#ff6f61"/><path d="M5 16a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z" fill="#ff6f61"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H4zm16 2H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z" fill="#ff6f61"/></g></svg> ${__(
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
