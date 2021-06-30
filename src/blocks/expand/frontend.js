/**
 * WordPress dependencies
 */
import domReady from "../../../node_modules/@wordpress/dom-ready";

/**
 * Permanently hide the dismissible notification if clicked.
 */

domReady(() => {
  const elems = document.querySelectorAll(
    ".responsive-block-editor-addons-block-expand"
  );
  elems.forEach((el) => {
    const btn = el.querySelector(
      ".responsive-block-editor-addons-expand-toggle"
    );

    const clickHandler = (e) => {
      el.classList.toggle("responsive-block-editor-addons-expand--more");
      const isExpanded = el.classList.contains(
        "responsive-block-editor-addons-expand--more"
      );
      btn.setAttribute("aria-expanded", isExpanded ? "true" : "false");

      e.preventDefault();
    };
    if (btn) {
      btn.addEventListener("click", clickHandler);
      btn.addEventListener("tapEnd", clickHandler);
    }
  });
});
