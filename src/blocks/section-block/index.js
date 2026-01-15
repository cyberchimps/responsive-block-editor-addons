/**
 * BLOCK: Pattern Importer Layout
 */

/**
 * Import dependencies.
 */
import {download} from "@wordpress/icons";

import Edit from "./components/edit";
import {Button} from "@wordpress/components";

import ResponsiveBlockEditorAddonsIcons from "../../block-icons";
import BlockPreview from "../../block-preview";
import  {LayoutModal}  from "./layout/layout-modal";

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register the block
 */
registerBlockType("responsive-block-editor-addons/rbea-templates", {
  title: __("Templates Library", "responsive-block-editor-addons"),
  description: __(
    "Add beautiful pre-designed sections and pages to your website",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.template_library,
  category: "responsive_block_editor_addons",
  keywords: [
    __("patterns", "responsive-block-editor-addons"),
    __("importer", "responsive-block-editor-addons"),
    __("layouts", "responsive-block-editor-addons"),
  ],
  attributes: {
    isPreview: {
      type: 'boolean',
      default: false,
    },
  },
  example: {
    attributes: {
      isPreview: true,
    },
  },
  /* Render the block in editor. */
  edit: (props) => {
    return (
      props.attributes.isPreview ? <BlockPreview image="templates" /> : <Edit {...props} />
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

const isTemplateButtonEnabled = () => {
  const toggle = responsive_globals?.template_library_button_on;

  if (typeof toggle === "undefined") {
    return true;
  }

  if (typeof toggle === "string") {
    return toggle === "1" || toggle.toLowerCase() === "true";
  }

  return !!toggle;
};

const removePatternButton = () => {
  const existingWrapper = document.querySelector(".rbea-pattern-wrapper");
  if (existingWrapper) {
    existingWrapper.remove();
  }
  patternButtonExist = false;
};

wp.data.subscribe(() => {
  appendImportButton();
});

/**
 * Build the pattern importer button.
 */
function appendImportButton() {
  if (!isTemplateButtonEnabled()) {
    removePatternButton();
    return;
  }

  if (patternButtonExist) {
    return;
  }
  const toolbar = document.querySelector(".editor-header__toolbar");
  if (!toolbar) {
    return;
  }
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("rbea-pattern-wrapper");
  let html = '<div class="rbea-import-pattern">';
  html += `<Button variant="primary"
  aria-expanded={isModalOpen}
  icon={download} id="patternButton" class="components-button is-primary has-text has-icon" aria-label="${__(
    "Import Pattern",
    "responsive-block-editor-addons"
  )}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"></path></svg> ${__(
    "Template Library",
    "responsive-block-editor-addons"
  )}</Button>`;
  html += "</div>";
  buttonDiv.innerHTML = html;
  buttonDiv.style.margin = "0px 15px 0px 23px";
  toolbar.appendChild(buttonDiv);

  const innerToolbar = document.querySelector(
    ".editor-header__toolbar"
  );
  if (innerToolbar) {
    innerToolbar.style.justifyContent = "flex-start";
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
  
  let {rootClientId,index} = wp.data.select( 'core/block-editor' ).getBlockInsertionPoint();
  const block = wp.blocks.createBlock(
    "responsive-block-editor-addons/rbea-templates"
  );
  wp.data.dispatch("core/block-editor").insertBlocks(block,index,rootClientId);
}
