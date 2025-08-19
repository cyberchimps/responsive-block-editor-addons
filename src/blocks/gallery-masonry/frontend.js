document.addEventListener("DOMContentLoaded", () => {
  // Look for gallery blocks with the specific data attribute
  const galleries = document.querySelectorAll("[data-rba-gallery-block]");

  galleries.forEach((gallery, index) => {
    const itemsWrapper = gallery.querySelector(".rba-gallery-items");
    const items = gallery.querySelectorAll(".responsive-block-editor-addons-gallery--item");
    const buttonContainer = gallery.querySelector(".gallery-filter-wrapper");

    if (!itemsWrapper || items.length === 0) {
      return;
    }

    // If filter buttons exist, add event listeners
    if (buttonContainer) {
      const buttons = buttonContainer.querySelectorAll(".gallery-filter-button");

      // Find the initially active button
      const activeButton = buttonContainer.querySelector(".gallery-filter-button.is-active");

      buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const category = btn.dataset.category;

          // Filter the images, not the buttons
          items.forEach((item) => {
            const itemCategory = item.dataset.category;
            if (category === "All") {
              // Show all images
              item.style.display = "";
            } else {
              // Show only images matching the selected category
              const shouldShow = itemCategory === category;
              item.style.display = shouldShow ? "" : "none";
            }
          });

          // Update active button state
          setActive(btn);
        });
      });

      function setActive(activeBtn) {
        buttonContainer.querySelectorAll(".gallery-filter-button").forEach((btn) => {
          btn.classList.remove("is-active");
          btn.style.backgroundColor = "#f2f2f2";
          btn.style.color = "#000";
        });
        activeBtn.classList.add("is-active");
        activeBtn.style.backgroundColor = "#0073aa";
        activeBtn.style.color = "#fff";
      }

      // If there's an initially active button, trigger its click to set the correct initial state
      if (activeButton) {
        activeButton.click();
      }
    }
    

  });
});
