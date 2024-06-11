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

            function openModal(popupId = 0) {
                if ( popupId == 0 ) {
                    $modal.removeClass('responsive-block-editor-popup-modal-hide')
                    $modal.addClass('responsive-block-editor-popup-modal-show')
                    return
                }
                $modal.filter('[data-popup-id="popup-' + popupId + '"]').removeClass('responsive-block-editor-popup-modal-hide');
                $modal.filter('[data-popup-id="popup-' + popupId + '"]').addClass('responsive-block-editor-popup-modal-show');
            }

            function hideModal() {
                $modal.addClass('responsive-block-editor-popup-modal-hide')
                $modal.removeClass('responsive-block-editor-popup-modal-show')
            }

            let interval = parseInt($modal.data('trigger-delay')) * 1000

            if ( 'load' === $modal.data('trigger-type') ) {
                setTimeout(() => {
                    openModal()
                }, interval);
            }

            $('.responsive-block-editor-addons-popup-modal-trigger').on('click', function(e) {
                popupId = e.target.dataset.triggerId.replace(/^trigger-/i, "")
                openModal(popupId)
            });

            if ( 'scroll' === $modal.data('trigger-type') ) {
                // Function to check scroll percentage
                function checkScrollPercentage() {
                    var scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
                    let scrollThreshold  = parseInt($modal.data('trigger-delay')) ;

                    if (scrollPercentage >= scrollThreshold ) {
                        openModal();
                        window.removeEventListener('scroll', checkScrollPercentage);
                    }
                }
                // Event listener to check scroll percentage on scroll
                window.addEventListener('scroll', checkScrollPercentage);
            }
            
            if( 'end' === $modal.data('trigger-type') ) {
                function checkScrollPercentage() {
                    var scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

                    if (scrollPercentage >= 90 ) {
                        openModal();
                        window.removeEventListener('scroll', checkScrollPercentage);
                    }
                }
                // Event listener to check scroll percentage on scroll
                window.addEventListener('scroll', checkScrollPercentage);                
            }

            $('.responsive-block-editor-addons-popup-modal-wrap-overlay, .responsive-block-editor-addons-popup-modal-header button[type="button"]').on('click', hideModal)
        }
    });
})(jQuery);
