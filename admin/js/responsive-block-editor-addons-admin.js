var $ = jQuery.noConflict();
$(document).ready(function () {
    let hash = window.location.hash;
        if ( hash === '' ) {
            window.location.hash = '#help'
            hash = '#help'
        }
        if ( hash === '#templates' ) {
            goToRST()
            $(".rbea-tabs-inner-content").css("background-image", "url('" + rbealocalize.responsiveurl + "admin/images/rst-template-preview.jpg')");
        }
        $('.rbea-tab-content').hide()
        $('.rbea-tab').removeClass('rbea-active-tab')
        $('.rbea-' + hash.substring(1) + '-tab').addClass('rbea-active-tab')
        $('#rbea_' + hash.substring(1)).show()
    

    $('.rbea-tab').click(function () {
        $('.rbea-tab-content').hide()
        $('.rbea-tab').removeClass('rbea-active-tab')
        let tab = $(this).data('tab');
        $('#rbea_' + tab).show();
        window.location.hash = tab;
        $(this).addClass('rbea-active-tab');
    });

    $(window).on('hashchange', function() {
        let currentHash = window.location.hash;
        if ( currentHash === '#templates') {
            goToRST()
            $(".rbea-tabs-inner-content").css("background-image", "url('" + rbealocalize.responsiveurl + "admin/images/rst-template-preview.jpg')");
        } else {
            $(".rbea-tabs-inner-content").css("background-image", "none");
        }
    });

    function goToRST() {
        if ( rbealocalize.isRSTActivated ) {
            window.location.href = rbealocalize.siteurl + '/wp-admin/admin.php?page=responsive-add-ons'
            return
        }
    }

    $( 'body' ).on(
        'click',
        '.rbea-install-plugin',
        function ( e ) {
            e.preventDefault();
            let button   = $( this );
            let buttonID = button.attr( 'id' );
            let slug     = button.attr( 'data-slug' );
            let url      = button.attr( 'href' );
            let redirect = $( button ).data( 'redirect' );
            button.text( rbealocalize.installing );
            button.addClass( 'updating-message' );

            wp.updates.installPlugin(
                {
                    slug: slug,
                    success: function () {
                        $( '#' + buttonID ).text( rbealocalize.activating + '...' )
                        $( '#' + buttonID ).addClass( 'updating-message' );
                        activatePlugin( url, redirect );
                    }
                }
            );
        }
    );

    function activatePlugin(  url, redirect ) {
        if ( typeof url === 'undefined' || ! url ) {
            return;
        }
        jQuery.ajax(
            {
                async: true,
                type: 'GET',
                url: url,
                success: function () {
                    // Reload the page.
                    if ( typeof(redirect) !== 'undefined' && redirect !== '' ) {
                        window.location.replace( redirect );
                        window.location.href( redirect );
                    } else {
                        location.reload();
                    }
                },
                error: function ( jqXHR, exception ) {
                    var msg = '';
                    if ( jqXHR.status === 0 ) {
                        msg = rbealocalize.verify_network;
                    } else if ( jqXHR.status === 404 ) {
                        msg = rbealocalize.page_not_found;
                    } else if ( jqXHR.status === 500 ) {
                        msg = rbealocalize.internal_server_error;
                    } else if ( exception === 'parsererror' ) {
                        msg = rbealocalize.json_parse_failed;
                    } else if ( exception === 'timeout' ) {
                        msg = rbealocalize.timeout_error;
                    } else if ( exception === 'abort' ) {
                        msg = rbealocalize.ajax_req_aborted;
                    } else {
                        msg = rbealocalize.uncaught_error;
                    }
                    console.log( msg );
                },
            }
        );
    }

    $( 'body' ).on(
        'click',
        '.activate-now',
        function ( e ) {
            e.preventDefault();
            let button   = $( this );
            let url      = button.attr( 'href' );
            let redirect = $( button ).data( 'redirect' );
            button.text( rbealocalize.activating + '...' )
            activatePlugin( url, redirect );
        }
    );

});
