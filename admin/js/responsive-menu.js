var $ = jQuery.noConflict()
$( document ).ready( function() {
    // Add Icon for Theme Builder under Elementor Addons Submenu.
    var targetAnchor = $('li#toplevel_page_responsive_block_editor_addons .wp-submenu.wp-submenu-wrap li a:contains("Theme Builder")');
    targetAnchor.before('<span class="responsive-theme-builder-icon dashicons dashicons-editor-break"></span>').parent().css({
        'display': 'flex',
        'margin-left': '12px'
    });
    targetAnchor.hover(function() {
        $(this).css('box-shadow', 'none');
    });
} )