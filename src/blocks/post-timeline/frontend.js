/**
 * Common js file for timeline.
 */
 (function ($) {
	// Listen for events.
	window.addEventListener("load", responsivePostTimelineInit);
	window.addEventListener("resize", responsivePostTimelineInit);
	window.addEventListener("scroll", responsivePostTimelineInit);

	// Callback function for all event listeners.
	function responsivePostTimelineInit() {
		var post_timeline = $(".responsive-block-editor-addons-timeline");
		if (post_timeline.parents(".wp-block").length == 0) {

			post_timeline.each(function () {
				var post_line_inner = $(this).find(".responsive-block-editor-addons-timeline__line__inner");
        		var post_line_outer = $(this).find(".responsive-block-editor-addons-timeline__line");
        		var $post_icon_class = $(this).find(".responsive-block-editor-addons-timeline__marker");
        		var $post_card_last = $(this).find(".responsive-block-editor-addons-block-post-timeline:last-child");
				var $post_document = $(document);

				// Set top and bottom for line.
				var post_timeline_start_icon = $post_icon_class.first().position();
				var post_timeline_end_icon = $post_icon_class.last().position();
				post_line_outer.css("top", post_timeline_start_icon.top);
				
				var post_timeline_card_height = $post_card_last.height();
				var post_last_item_top = $post_card_last.offset().top - $(this).offset().top;
				var $post_last_item, post_parent_top;
		
				if ($(this).hasClass("responsive-block-editor-addons-timeline__arrow-center")) {
				  post_line_outer.css("bottom", post_timeline_end_icon.top);
		
				  post_parent_top = post_last_item_top - post_timeline_start_icon.top;
				  $post_last_item = post_parent_top + post_timeline_end_icon.top;
				} else if ($(this).hasClass("responsive-block-editor-addons-timeline__arrow-top")) {
				  var post_top_height = post_timeline_card_height - post_timeline_end_icon.top;
				  post_line_outer.css("bottom", post_top_height);
		
				  $post_last_item = post_last_item_top;
				} else if ($(this).hasClass("responsive-block-editor-addons-timeline__arrow-bottom")) {
				  var post_bottom_height = post_timeline_card_height - post_timeline_end_icon.top;
				  post_line_outer.css("bottom", post_bottom_height);
		
				  post_parent_top = post_last_item_top - post_timeline_start_icon.top;
				  $post_last_item = post_parent_top + post_timeline_end_icon.top;
				}

				var post_num = 0;
				var postElementEnd = $post_last_item + 20;
				var postConnectorHeight =
				  3 * $(this).find(".responsive-block-editor-addons-timeline__marker:first").height();
				var postViewportHeight = document.documentElement.clientHeight;
				var postViewportHeightHalf = postViewportHeight / 2 + postConnectorHeight;
				var postElementPos = $(this).offset().top;
				var post_new_elementPos = postElementPos + post_timeline_start_icon.top;
				var postPhotoViewportOffsetTop = post_new_elementPos - $post_document.scrollTop();
		
				if (postPhotoViewportOffsetTop < 0) {
					postPhotoViewportOffsetTop = Math.abs(postPhotoViewportOffsetTop);
				} else {
					postPhotoViewportOffsetTop = -Math.abs(postPhotoViewportOffsetTop);
				}
		  
				if (postElementPos < postViewportHeightHalf) {
					if (
					  postViewportHeightHalf + Math.abs(postPhotoViewportOffsetTop) <
					  postElementEnd
					) {
					  post_line_inner.height(postViewportHeightHalf + postPhotoViewportOffsetTop);
					} else {
					  if (postPhotoViewportOffsetTop + postViewportHeightHalf >= postElementEnd) {
						post_line_inner.height(postElementEnd);
					  }
					}
				} else {
					if (postPhotoViewportOffsetTop + postViewportHeightHalf < postElementEnd) {
					  if (0 > postPhotoViewportOffsetTop) {
						post_line_inner.height(
						  postViewportHeightHalf - Math.abs(postPhotoViewportOffsetTop)
						);
						++post_num;
					  } else {
						post_line_inner.height(postViewportHeightHalf + postPhotoViewportOffsetTop);
					  }
					} else {
					  if (postPhotoViewportOffsetTop + postViewportHeightHalf >= postElementEnd) {
						post_line_inner.height(postElementEnd);
					  }
					}
				}

				//Icon bg color and icon color
				var post_timeline_icon_pos, post_timeline_card_pos;
				var postElementPos, postElementCardPos;
				var post_timeline_icon_top, post_timeline_card_top;
				var post_timeline_icon = $(this).find(".responsive-block-editor-addons-timeline__marker"),
				  post_animate_border = $(this).find(".responsive-block-editor-addons-timeline__field-wrap");
		
				  for (let i = 0; i < post_timeline_icon.length; i++) {
					post_timeline_icon_pos = $(post_timeline_icon[i]).offset().top;
					post_timeline_card_pos = $(post_animate_border[i]).offset().top;
					postElementPos = $(this).offset().top;
					postElementCardPos = $(this).offset().top;
		  
					post_timeline_icon_top = post_timeline_icon_pos - $post_document.scrollTop();
					post_timeline_card_top = post_timeline_card_pos - $post_document.scrollTop();
		  
					if (post_timeline_card_top < postViewportHeightHalf) {
					  post_animate_border[i].classList.remove("out-view");
					  post_animate_border[i].classList.add("in-view");
					} else {
					  // Remove classes if element is below than half of viewport.
					  post_animate_border[i].classList.add("out-view");
					  post_animate_border[i].classList.remove("in-view");
					}
		  
					if (post_timeline_icon_top < postViewportHeightHalf) {
					  // Add classes if element is above than half of viewport.
					  post_timeline_icon[i].classList.remove(
						"responsive-block-editor-addons-timeline__out-view-icon"
					  );
					  post_timeline_icon[i].classList.add("responsive-block-editor-addons-timeline__in-view-icon");
					} else {
					  // Remove classes if element is below than half of viewport.
					  post_timeline_icon[i].classList.add(
						"responsive-block-editor-addons-timeline__out-view-icon"
					  );
					  post_timeline_icon[i].classList.remove(
						"responsive-block-editor-addons-timeline__in-view-icon"
					  );
					}
				  }
			})
		}
	}
	
		
  })(jQuery);
  