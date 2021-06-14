(function ($) {
  $(window).on("load", function () {
    var wrap = jQuery(".responsive-block-editor-addons-block-post-carousel");
    var id;
    wrap.each(function (x) {
      id = $(this).data("carouselid");

      var scope = $(this).find(".responsive-post_carousel-equal-height-1");
      var post_active = scope.find(
          ".responsive-block-editor-addons-post-carousel-inner"
        ),
        max_height = -1,
        post_active_height = -1,
        is_background_enabled = scope
          .parents(".responsive-post-grid")
          .hasClass("responsive-post__image-position-background");
      post_active.each(function (i) {
        var blog_post = $(this).find(
            ".responsive-block-editor-addons-post-carousel-inner"
          ),
          blog_post_height = blog_post.outerHeight(),
          post_img_ht = $(this)
            .find(
              ".responsive-block-editor-addons-block-post-carousel-image-top"
            )
            .outerHeight(),
          post_text_ht = $(this)
            .find(
              ".responsive-block-editor-addons-block-post-carousel-text-wrap"
            )
            .outerHeight();

        if (is_background_enabled) {
          blog_post_height = post_text_ht + 15;
        } else {
          blog_post_height = post_img_ht + post_text_ht;
        }

        if (max_height < blog_post_height) {
          max_height = blog_post_height;
          post_active_height = max_height + 15;
        }
      });

      post_active.each(function (i) {
        var selector = $(this);
        selector.animate(
          { height: post_active_height },
          { duration: 200, easing: "linear" }
        );
        selector.css("height", post_active_height);
      });
    });
  });
})(jQuery);
