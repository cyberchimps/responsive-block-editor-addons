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
          // Skip filtering for first button on mobile when responsive support is enabled
          if (buttonContainer.classList.contains('has-responsive-support') && 
              btn === buttonContainer.querySelector('.gallery-filter-button:first-child') &&
              window.matchMedia('(max-width: 767px)').matches) {
            return; // Just return, don't filter
          }

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

      // Handle responsive dropdown functionality
      if (buttonContainer.classList.contains('has-responsive-support')) {
        const firstButton = buttonContainer.querySelector('.gallery-filter-button:first-child');
        const dropdown = buttonContainer.querySelector('.dropdown-menu');

        // Toggle dropdown when first button is clicked on mobile
        if (firstButton) {
          firstButton.addEventListener('click', (e) => {
            // Only prevent default on mobile
            if (window.matchMedia('(max-width: 767px)').matches) {
              e.preventDefault();
              e.stopPropagation();
              buttonContainer.classList.toggle('dropdown-open');
            }
          });
        }

        // Handle dropdown item clicks
        if (dropdown) {
          const dropdownItems = dropdown.querySelectorAll('.dropdown-item');
          dropdownItems.forEach((item) => {
            item.addEventListener('click', (e) => {
              e.stopPropagation();
              const category = item.dataset.category;

              // Filter the images
              items.forEach((item) => {
                const itemCategory = item.dataset.category;
                if (category === "All") {
                  item.style.display = "";
                } else {
                  const shouldShow = itemCategory === category;
                  item.style.display = shouldShow ? "" : "none";
                }
              });

              // Update active states
              setActive(firstButton);
              setActiveDropdownItem(item);
              
              // Update the first button text to show selected category
              firstButton.textContent = item.textContent;
              
              // Close dropdown
              buttonContainer.classList.remove('dropdown-open');
            });
          });

          function setActiveDropdownItem(activeItem) {
            dropdown.querySelectorAll('.dropdown-item').forEach((item) => {
              item.classList.remove('active');
            });
            activeItem.classList.add('active');
          }
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
          if (!buttonContainer.contains(e.target)) {
            buttonContainer.classList.remove('dropdown-open');
          }
        });

        // Close dropdown on window resize to desktop
        window.addEventListener('resize', () => {
          if (window.matchMedia('(min-width: 768px)').matches) {
            buttonContainer.classList.remove('dropdown-open');
          }
        });
      }
    }
    

  });
});
