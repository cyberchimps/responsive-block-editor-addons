// Wait for the DOM to be fully loaded before executing gallery logic
document.addEventListener("DOMContentLoaded", () => {
  const hiddenClass = "is-hidden-by-default"; // Class used to hide filtered-out items

  // Loop through all gallery blocks on the page
  document.querySelectorAll("[data-rba-gallery-block]").forEach((gallery) => {
    // Core DOM references
    const itemsWrapper = gallery.querySelector(".rba-gallery-items"); // Container for gallery items
    const items = gallery.querySelectorAll(".responsive-block-editor-addons-gallery--item"); // Individual gallery items
    const wrapper = gallery.querySelector(".gallery-filter-wrapper"); // Filter tabs/dropdown wrapper

    // If no items exist, stop execution for this gallery
    if (!itemsWrapper || items.length === 0) return;

    // Number of columns for masonry layout (default: 3 if not set)
    const columnSize = parseInt(itemsWrapper.dataset.columnsize, 10) || 3;

    /**
     * Masonry layout logic:
     * Positions visible items in a grid with variable heights,
     * aligning them into columns and adjusting wrapper height.
     */
    function applyMasonry() {
      const colHeights = new Array(columnSize).fill(0); // Track heights per column
      const colWidth = 100 / columnSize; // Width % of each column

      // Only position visible items (exclude filtered-out ones)
      const visibleItems = Array.from(items).filter(item => !item.classList.contains(hiddenClass));

      visibleItems.forEach((item, index) => {
        item.style.position = "absolute";

        // Determine column index using modulo
        const col = index % columnSize;

        // Calculate position
        const left = `${col * colWidth}%`;
        const top = `${colHeights[col]}px`;

        // Apply positioning
        item.style.left = left;
        item.style.top = top;

        // Update column height
        const itemHeight = item.offsetHeight;
        colHeights[col] += itemHeight;
      });

      // Adjust wrapper height so container accounts for tallest column
      itemsWrapper.style.position = "relative";
      itemsWrapper.style.height = `${Math.max(...colHeights)}px`;
    }

    // Select all filter buttons (excluding dropdown toggles)
    const buttons = wrapper
      ? wrapper.querySelectorAll(".gallery-filter-button[data-category]:not(.rba-gf-toggle)")
      : [];

    // Determine initially active filter (fallback: first button)
    const initiallyActive =
      wrapper && (wrapper.querySelector(".gallery-filter-button.is-active[data-category]") || buttons[0]);

    // Check if an item belongs to the selected category
    function matches(item, cat) {
      return cat === "All" || cat === "all" || item.dataset.category === cat;
    }

    // Apply filter to items and re-run masonry layout
    function applyFilter(cat) {
      items.forEach((item) => {
        if (matches(item, cat)) {
          item.classList.remove(hiddenClass); // Show item
        } else {
          item.classList.add(hiddenClass); // Hide item
        }
      });
      applyMasonry(); // Recalculate positions
    }

    // Update active button styles
    function setActive(activeBtn) {
      buttons.forEach((b) => b.classList.remove("is-active"));
      activeBtn.classList.add("is-active");
    }

    // --- Initial state setup ---
    if (initiallyActive) {
      // If a default active filter exists, apply it
      applyFilter(initiallyActive.dataset.category);
      setActive(initiallyActive);
    } else {
      // Otherwise, just arrange items with masonry
      applyMasonry();
    }

    // Handle filter tab or dropdown item clicks
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const cat = btn.dataset.category;
        if (!cat) return;

        // Apply filtering and update active button
        applyFilter(cat);
        setActive(btn);

        // Handle dropdown case (close after selection)
        const details = btn.closest("details");
        if (details && details.hasAttribute("open")) {
          const summary = details.querySelector("summary");
          if (summary) summary.textContent = btn.textContent; // Update label
          details.removeAttribute("open"); // Close dropdown
        }
      });
    });

    // Re-run masonry layout on window resize
    window.addEventListener("resize", applyMasonry);
  });
});