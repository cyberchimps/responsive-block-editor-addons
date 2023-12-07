/**
 * Common js file for popup.
 */
(function ($) {
    // document is ready.
    $(function () {

        let body = document.body;
        let isModalWrapPresent = body.querySelector('div.responsive-block-editor-addons-popup-modal-wrap') !== null;
        if (isModalWrapPresent) {

            $modal = $('.responsive-block-editor-addons-popup-modal-wrap')

            setTimeout(() => {
                $modal.removeClass('responsive-block-editor-popup-modal-hide')
                $modal.addClass('responsive-block-editor-popup-modal-show')
            }, 2500);

            $('.responsive-block-editor-addons-popup-modal-wrap-overlay').on('click', function() {
                $modal.addClass('responsive-block-editor-popup-modal-hide')
                $modal.removeClass('responsive-block-editor-popup-modal-show')
            })
        }
    });
})(jQuery);
