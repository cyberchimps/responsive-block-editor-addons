function slideUp(target, duration) {
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.boxSizing = "border-box";
  target.style.height = target.offsetHeight + "px";
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(function () {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
}

function slideDown(target, duration) {
  target.style.removeProperty("display");
  var display = window.getComputedStyle(target).display;

  if (display === "none") display = "block";

  target.style.display = display;
  var height = target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = "border-box";
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = height + "px";
  target.style.removeProperty("padding-top");
  target.style.removeProperty("padding-bottom");
  target.style.removeProperty("margin-top");
  target.style.removeProperty("margin-bottom");
  window.setTimeout(function () {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
}

function slideToggle(target, duration) {
  if (window.getComputedStyle(target).display === "none") {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
}

function setupAccordion() {
  var pattern = new RegExp("^[\\w\\-]+$");
  var hashval = window.location.hash.substring(1);
  var expandFirstelements = document.getElementsByClassName(
    "responsive-block-editor-addons-accordion-expand-first-true"
  );
  var inactiveOtherelements = document.getElementsByClassName(
    "responsive-block-editor-addons-accordion-inactive-other-false"
  );

  if (pattern.test(hashval)) {
    var elementToOpen = document.getElementById(hashval);
      if( elementToOpen.getElementsByClassName( 'responsive-block-editor-addons-accordion-item' )[0] !== undefined ){
          elementToOpen.getElementsByClassName( 'responsive-block-editor-addons-accordion-item' )[0].classList.add( 'responsive-block-editor-addons-accordion-item-active' );
          elementToOpen.getElementsByClassName( 'responsive-block-editor-addons-accordion-item' )[0].setAttribute( 'aria-expanded', true );
          slideDown( elementToOpen.getElementsByClassName( 'responsive-block-editor-addons-accordion-content' )[0], 500 );
      }
  } else {
    for (var item = 0; item < expandFirstelements.length; item++) {
      if (
        true ===
        expandFirstelements[item].classList.contains(
          "responsive-block-editor-addons-accordion-layout-accordion"
        )
      ) {
        expandFirstelements[item]
          .querySelectorAll(
            ".responsive-block-editor-addons-accordion-item__outer-wrap"
          )[0]
          .getElementsByClassName(
            "responsive-block-editor-addons-accordion-item"
          )[0]
          .classList.add(
            "responsive-block-editor-addons-accordion-item-active"
          );
        expandFirstelements[item]
          .querySelectorAll(
            ".responsive-block-editor-addons-accordion-item__outer-wrap"
          )[0]
          .getElementsByClassName(
            "responsive-block-editor-addons-accordion-item"
          )[0]
          .setAttribute("aria-expanded", true);
        expandFirstelements[item]
          .querySelectorAll(
            ".responsive-block-editor-addons-accordion-item__outer-wrap"
          )[0]
          .getElementsByClassName(
            "responsive-block-editor-addons-accordion-item"
          )[0]
          .querySelectorAll(
            ".responsive-block-editor-addons-accordion-content"
          )[0].style.display = "block";
      }
    }
  }
  for (var item = 0; item < inactiveOtherelements.length; item++) {
    if (
      true ===
      inactiveOtherelements[item].classList.contains(
        "responsive-block-editor-addons-accordion-layout-accordion"
      )
    ) {
      var otherItems = inactiveOtherelements[item].querySelectorAll(
        ".responsive-block-editor-addons-accordion-item__outer-wrap"
      );

      for (var childItem = 0; childItem < otherItems.length; childItem++) {
        otherItems[childItem]
          .getElementsByClassName(
            "responsive-block-editor-addons-accordion-item"
          )[0]
          .classList.add(
            "responsive-block-editor-addons-accordion-item-active"
          );
        otherItems[childItem]
          .getElementsByClassName(
            "responsive-block-editor-addons-accordion-item"
          )[0]
          .setAttribute("aria-expanded", true);
        otherItems[childItem]
          .getElementsByClassName(
            "responsive-block-editor-addons-accordion-item"
          )[0]
          .querySelectorAll(
            ".responsive-block-editor-addons-accordion-content"
          )[0].style.display = "block";
      }
    }
  }
}

window.addEventListener("load", function () {
  setupAccordion();

  var accordionElements = document.getElementsByClassName(
    "responsive-block-editor-addons-accordion-layout-accordion"
  );
  for (var item = 0; item < accordionElements.length; item++) {
    var titleButtons = accordionElements[item].querySelectorAll(
      ".responsive-block-editor-addons-accordion-titles-button"
    );

    for (var button = 0; button < titleButtons.length; button++) {
      titleButtons[button].addEventListener("click", function (e) {
        accordionClick(e, this.parentElement, titleButtons);
      });
      titleButtons[button].addEventListener("keypress", function (e) {
        accordionClick(e, this.parentElement, titleButtons);
      });
    }
  }
});

function accordionClick(e, accordionItem, titleButtons) {
    if (e.keyCode === 13 || e.keyCode === 32 || e.button === 0) { // enter || spacebar || left mouse click.
        if (
            accordionItem.classList.contains(
                "responsive-block-editor-addons-accordion-item-active"
            )
        ) {

            accordionItem.classList.remove(
                "responsive-block-editor-addons-accordion-item-active"
            );
            accordionItem.setAttribute("aria-expanded", false);
            slideUp(
                accordionItem.getElementsByClassName(
                    "responsive-block-editor-addons-accordion-content"
                )[0],
                500
            );
        } else {
            var parent = e.currentTarget.closest('.wp-block-responsive-block-editor-addons-accordion');
            var accordionToggle = "true";

            if (
                parent.classList.contains(
                    "wp-block-responsive-block-editor-addons-accordion"
                )
            ) {
                accordionToggle = parent.getAttribute("data-accordiontoggle");
            }
            accordionItem.classList.add(
                "responsive-block-editor-addons-accordion-item-active"
            );
            accordionItem.setAttribute("aria-expanded", true);
            slideDown(
                accordionItem.getElementsByClassName(
                    "responsive-block-editor-addons-accordion-content"
                )[0],
                500
            );
            if ("true" === accordionToggle) {
                for (
                    var buttonChild = 0;
                    buttonChild < titleButtons.length;
                    buttonChild++
                ) {
                    var buttonItem = titleButtons[buttonChild].parentElement;
                    if (buttonItem === accordionItem) {
                        continue;
                    }
                    buttonItem.classList.remove(
                        "responsive-block-editor-addons-accordion-item-active"
                    );
                    buttonItem.setAttribute("aria-expanded", false);
                    slideUp(
                        buttonItem.getElementsByClassName(
                            "responsive-block-editor-addons-accordion-content"
                        )[0],
                        500
                    );
                }
            }
        }
    }
}
