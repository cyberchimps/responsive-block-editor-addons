document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-rba-gallery-block]").forEach((gallery) => {
    const items = gallery.querySelectorAll(".responsive-block-editor-addons-gallery--item");
    const wrapper = gallery.querySelector(".gallery-filter-wrapper");
    if (!wrapper || items.length === 0) return;

    const buttons = wrapper.querySelectorAll(".gallery-filter-button[data-category]:not(.rba-gf-toggle)");
    if (buttons.length === 0) return;

    const initiallyActive = wrapper.querySelector(".gallery-filter-button.is-active[data-category]") || buttons[0];

    function applyFilter(cat) {
      items.forEach((item) => {
        const show = cat === "All" || cat === "all" || item.dataset.category === cat;
        item.style.display = show ? "" : "none";
      });
    }

    function setActive(activeBtn) {
      buttons.forEach((b) => b.classList.remove("is-active"));
      activeBtn.classList.add("is-active");
    }

    // Initial state
    if (initiallyActive) {
      applyFilter(initiallyActive.dataset.category);
      setActive(initiallyActive);
    }

    // Handle all button clicks
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const cat = btn.dataset.category;
        if (!cat) return;
        
        applyFilter(cat);
        setActive(btn);

        // If chosen inside <details>, reflect label and close
        const details = btn.closest("details");
        if (details && details.hasAttribute("open")) {
          const summary = details.querySelector("summary");
          if (summary) summary.textContent = btn.textContent;
          details.removeAttribute("open");
        }
      });
    });


  });
});
