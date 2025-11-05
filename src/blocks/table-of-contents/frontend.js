// frontend.js
jQuery(function ($) {

  function slugify(text) {
    return (text || "")
      .toString()
      .trim()
      .toLowerCase()
      // mimic TableOfContents anchor slug behavior (spaces/nbsp -> "-")
      .replace(/(\s|&nbsp;)/g, "-")
      // strip anything not word/underscore/hyphen or valid unicode range used in TOC
      .replace(/[^\w\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF-]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  }

  // PHP extracts headings and passes as data-headings attribute
  // Frontend.js just links them to headings in DOM (save.js already renders the list)
  $(".responsive-block-editor-addons-toc__wrap").each(function () {
    var $wrap = $(this);
    var $listWrap = $wrap.find(".responsive-block-editor-addons-toc__list-wrap");
    
    if (!$listWrap.length) return;

    // Get all TOC links (from save.js render)
    var $tocLinks = $listWrap.find("a[href^='#']");
    if (!$tocLinks.length) return;

    // Get all headings in the document (PHP already extracted from post content, so no filtering needed)
    var $allHeadings = $("h1, h2, h3, h4, h5, h6");

    // Match TOC links to headings and add IDs
    $tocLinks.each(function () {
      var $link = $(this);
      var href = $link.attr("href");
      if (!href || !href.startsWith("#")) return;

      var anchorId = href.substring(1); // Remove #
      var linkText = $.trim($link.text());

      // Check if heading with this ID already exists
      var $existingHeading = $("#" + anchorId);
      if ($existingHeading.length && $existingHeading.is("h1, h2, h3, h4, h5, h6")) {
        // ID already exists, link is correct
        return;
      }

      // Find heading by text content
      var $heading = $allHeadings.filter(function () {
        return slugify($(this).text()) === slugify(linkText);
      }).first();

      // Also try to match by comparing text directly (case-insensitive)
      if (!$heading.length) {
        $heading = $allHeadings.filter(function () {
          return $.trim($(this).text().toLowerCase()) === linkText.toLowerCase();
        }).first();
      }

      if ($heading.length) {
        // Check if this is an advanced heading block
        var $advancedHeadingBlock = $heading.closest('.wp-block-responsive-block-editor-addons-advanced-heading');
        
        if ($advancedHeadingBlock.length > 0) {
          // For advanced headings, check for existing IDs
          var existingHeadingId = $heading.attr("id");
          var existingWrapperId = $advancedHeadingBlock.attr("id");
          
          if (existingHeadingId) {
            // Update link href to match existing ID
            $link.attr("href", "#" + existingHeadingId);
          } else if (existingWrapperId) {
            // Update link href to match wrapper ID
            $link.attr("href", "#" + existingWrapperId);
          } else {
            // Add ID to heading
            var finalId = anchorId;
            var n = 2;
            while (document.getElementById(finalId)) {
              finalId = anchorId + "-" + n++;
            }
            $heading.attr("id", finalId);
            $link.attr("href", "#" + finalId);
          }
        } else {
          // For regular headings, add ID if it doesn't exist
          if (!$heading.attr("id")) {
            var finalId = anchorId;
            var n = 2;
            while (document.getElementById(finalId)) {
              finalId = anchorId + "-" + n++;
            }
            $heading.attr("id", finalId);
            $link.attr("href", "#" + finalId);
          } else {
            // Update link href to match existing ID
            $link.attr("href", "#" + $heading.attr("id"));
          }
        }
      }
    });
  });

  // ---------- DEFAULT smooth scroll (kept exactly as-is) ----------
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

});
