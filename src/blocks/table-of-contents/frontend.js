jQuery(function ($) {
    if (document.getElementsByClassName("responsive-block-editor-addons-toc__wrap").length > 0) {
        let tocOffsetTop = $('.responsive-block-editor-addons-toc__wrap').data('scroll-offset');
        tocOffsetTop = typeof tocOffsetTop !== "undefined" && tocOffsetTop ? parseInt(tocOffsetTop) : 0

        $('.responsive-block-editor-addons-toc__list-wrap a').on('click', function () {
            let currentAnchor = $(this).attr('href');
            currentAnchor = $(`${currentAnchor}`).offset().top

            $("html, body").animate({
                scrollTop: currentAnchor > tocOffsetTop ? currentAnchor - tocOffsetTop : currentAnchor
            }, 800);

        })

    }
})