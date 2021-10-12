(function ($) {
  $(document).ready(function (e) {
    $(document.body).on("post-load", function (e) {
      responsive_blocks_addons_image_hotspot();
    });

    var responsive_blocks_addons_image_hotspot = () => {
      var rbea_image_hotspot = $(
        ".responsive-block-editor-addons-block-image-hotspot:not(.rbea-init)"
      );

      rbea_image_hotspot.each(function (index, image_hotspot) {
        $(this).addClass("rbea-init");

        let tooltipTrigger = $(image_hotspot).data("trigger"),
          tooltipTheme = $(image_hotspot).data("theme"),
          tooltipAnimation = $(image_hotspot).data("tooltip-animation"),
          tooltipArrow = $(image_hotspot).data("arrow"),
          imagePoints = $(image_hotspot).data("image-points");

        $(image_hotspot)
          .find(".responsive_block_addons__dot")
          .each(function (index, dot) {
            let el = $(dot),
              point_id = el.data("point-id"),
              title = unescape(
                el.find(".responsive_block_addons___dot-title").html()
              ),
              content = unescape(imagePoints[point_id].content),
              open = imagePoints[point_id].popUpOpen,
              placement = imagePoints[point_id].placement,
              width = imagePoints[point_id].popUpWidth;

            let tooltip = tippy(dot, {
              maxWidth: parseInt(width, 10),
              hideOnClick: tooltipTrigger == "multiple" ? "toggle" : true,
              theme: tooltipTheme,
              animation: tooltipAnimation,
              animateFill: false,
              interactive: true,
              trigger: tooltipTrigger == "hover" ? "mouseenter" : "click",
              arrow: tooltipArrow,
              placement: placement,
              allowHTML: true,
              content: `<div class="responsive_block_addons___tooltip"><div class="responsive_block_addons___tooltip-title">${title}</div><div class="responsive_block_addons___tooltip-content">${content}</div></div>`,
            });

            if (open) {
              setTimeout(function () {
                tooltip.show();
              }, 1000);
            }

            el.find(".responsive_block_addons__dot-description").remove();

            new Waypoint({
              element: dot,
              handler: function (direction) {
                $(this.element).addClass("is-visible");
              },
              offset: "100%",
            });
          });
      });
    };

    responsive_blocks_addons_image_hotspot();
  });
})(jQuery);
