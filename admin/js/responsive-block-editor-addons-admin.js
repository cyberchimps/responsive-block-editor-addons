jQuery(document).ready(function(){
    jQuery(".responsive-block-editor-addons-quick-links").click(function(){
        if(jQuery(".responsive-block-editor-addons-quick-links").hasClass( "responsive-block-editor-addons-quick-links-close" )) {
            jQuery(".responsive-block-editor-addons-quick-links").removeClass( "responsive-block-editor-addons-quick-links-close" );
            jQuery(".responsive-block-editor-addons-quick-links").addClass( "responsive-block-editor-addons-quick-links-open" );
        } else {
            jQuery(".responsive-block-editor-addons-quick-links").addClass( "responsive-block-editor-addons-quick-links-close" );
            jQuery(".responsive-block-editor-addons-quick-links").removeClass( "responsive-block-editor-addons-quick-links-open" );
        }
    });
    jQuery(".responsive-block-editor-addons-welcome-video-image").click(function() {
        if(!jQuery("#welcome-video").length) {
            jQuery(".responsive-block-editor-addons-welcome-video-image").append( '<div id="welcome-video" class="responsive-block-editor-addons-welcome-overlay"><div class="responsive-block-editor-addons-welcome-overlay-inner"><span class="close-video">&#10006;</span><div class="responsive-block-editor-addons-welcome-overlay-content"><iframe width="700" height="500" src="https://www.youtube.com/embed/Gs-h74Qnrlw?autoplay=1&amp;modestbranding=1&amp;showinfo=0&amp;rel=0&amp;fs=1" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; autoplay; picture-in-picture;" allowfullscreen="allowfullscreen"></iframe></div></div></div>' );
        } else {
            jQuery(".responsive-block-editor-addons-welcome-video-image").empty();
        }
    });
});
