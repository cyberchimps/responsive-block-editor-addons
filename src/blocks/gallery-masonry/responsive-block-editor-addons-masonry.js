import jQuery from "jquery";

(function ($) {
  "use strict";

  const container = $(
    ".wp-block-responsive-block-editor-addons-gallery-masonry ul"
  );

  $(document).ready(function () {
    container.imagesLoaded(function () {
      container.masonry({
        itemSelector: ".responsive-block-editor-addons-gallery--item",
        transitionDuration: "0",
        percentPosition: true,
      });
    });
  });
})(jQuery);
