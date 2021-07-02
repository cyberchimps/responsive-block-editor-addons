/**
 * Common js file for all columns
 */
(function ($) {
    $(function () {
        var mediaQuerySize = window.matchMedia('(min-width: 976px)')
        var targetElementForFullWidth = document.querySelectorAll(".page.page-template-gutenberg-fullwidth .alignfull, .page.sidebar-position-no:not(.woocommerce) .alignfull, .single.page-template-gutenberg-fullwidth .alignfull, .single.sidebar-position-no:not(.woocommerce) .alignfull, .blog.page-template-gutenberg-fullwidth .alignfull, .blog.sidebar-position-no:not(.woocommerce) .alignfull, .search.page-template-gutenberg-fullwidth .alignfull, .search.sidebar-position-no:not(.woocommerce) .alignfull, .archive.page-template-gutenberg-fullwidth .alignfull, .archive.sidebar-position-no:not(.woocommerce) .alignfull");
        for (i = 0; i < targetElementForFullWidth.length; i++) {
            var innerWindowViewWidth = $(window).width();
            if ($(document).height() > $(window).height() && mediaQuerySize.matches && targetElementForFullWidth[i] !== null) {
                targetElementForFullWidth[i].style.marginRight = "calc(50% - 50vw - 10px)";
                targetElementForFullWidth[i].style.marginLeft = "calc(50% - 50vw + 10px)";
                targetElementForFullWidth[i].style.width = innerWindowViewWidth + "px";
            } else {
                targetElementForFullWidth[i].style.marginRight = "calc(50% - 50vw)";
                targetElementForFullWidth[i].style.marginLeft = "calc(50% - 50vw)";
                targetElementForFullWidth[i].style.width = innerWindowViewWidth + "px";
            }
        }

        $(window).on("resize", function () {
            for (j = 0; j < targetElementForFullWidth.length; j++) {
                var innerWindowViewWidth = $(window).width();
                if ($(document).height() > $(window).height() && mediaQuerySize.matches && targetElementForFullWidth[j] !== null) {
                    targetElementForFullWidth[j].style.marginRight = "calc(50% - 50vw - 10px)";
                    targetElementForFullWidth[j].style.marginLeft = "calc(50% - 50vw + 10px)";
                    targetElementForFullWidth[j].style.width = innerWindowViewWidth + "px";
                } else if (targetElementForFullWidth !== null) {
                    targetElementForFullWidth[j].style.marginRight = "calc(50% - 50vw)";
                    targetElementForFullWidth[j].style.marginLeft = "calc(50% - 50vw)";
                    targetElementForFullWidth[j].style.width = innerWindowViewWidth + "px";
                }
            }
        })
    });
})(jQuery);
