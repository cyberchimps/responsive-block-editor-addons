/**
 * Common js file for advance columns
 */
(function ($) {
    $(function () {
        var innerWindowViewWidth = $(window).width();
        var mediaQuerySize = window.matchMedia('(min-width: 976px)')
        var targetElementForFullWidth = document.querySelector(".page.page-template-gutenberg-fullwidth .alignfull, .page.sidebar-position-no:not(.woocommerce) .alignfull, .single.page-template-gutenberg-fullwidth .alignfull, .single.sidebar-position-no:not(.woocommerce) .alignfull, .blog.page-template-gutenberg-fullwidth .alignfull, .blog.sidebar-position-no:not(.woocommerce) .alignfull, .search.page-template-gutenberg-fullwidth .alignfull, .search.sidebar-position-no:not(.woocommerce) .alignfull, .archive.page-template-gutenberg-fullwidth .alignfull, .archive.sidebar-position-no:not(.woocommerce) .alignfull");
        console.log(targetElementForFullWidth);
        if ($(document).height() > $(window).height() && mediaQuerySize.matches && targetElementForFullWidth !== null) {
            targetElementForFullWidth.style.marginRight = "calc(50% - 50vw - 10px)";
            targetElementForFullWidth.style.marginLeft = "calc(50% - 50vw + 10px)";
            targetElementForFullWidth.style.width = innerWindowViewWidth + "px";
        } else if (targetElementForFullWidth !== null) {
            targetElementForFullWidth.style.marginRight = "calc(50% - 50vw)";
            targetElementForFullWidth.style.marginLeft = "calc(50% - 50vw)";
            targetElementForFullWidth.style.width = innerWindowViewWidth + "px";
        }

        $(window).on("resize", function () {
            innerWindowViewWidth = $(window).width();
            if ($(document).height() > $(window).height() && mediaQuerySize.matches && targetElementForFullWidth !== null) {
                targetElementForFullWidth.style.marginRight = "calc(50% - 50vw - 10px)";
                targetElementForFullWidth.style.marginLeft = "calc(50% - 50vw + 10px)";
                targetElementForFullWidth.style.width = innerWindowViewWidth + "px";
            } else if (targetElementForFullWidth !== null) {
                targetElementForFullWidth.style.marginRight = "calc(50% - 50vw)";
                targetElementForFullWidth.style.marginLeft = "calc(50% - 50vw)";
                targetElementForFullWidth.style.width = innerWindowViewWidth + "px";
            }
        })
    });
})(jQuery);
