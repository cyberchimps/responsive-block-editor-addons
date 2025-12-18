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

  $(".responsive-block-editor-addons-toc__wrap").each(function () {
    var $wrap = $(this);

    // Ensure list-wrap exists
    var $listWrap = $wrap.find(".responsive-block-editor-addons-toc__list-wrap");
    if (!$listWrap.length) {
      $listWrap = $('<div class="responsive-block-editor-addons-toc__list-wrap"></div>');
      var $titleWrap = $wrap.find(".responsive-block-editor-addons-toc__title-wrap");
      if ($titleWrap.length) $listWrap.insertAfter($titleWrap);
      else $wrap.append($listWrap);
    }

    // Clear existing list if present
    var hasLinks = $listWrap.find("a[href^='#']").length > 0;
    if (hasLinks) {
      $listWrap.find(".responsive-block-editor-addons-toc__list, .child-list").remove();
      $listWrap.empty();
    }

    // Get headings data from PHP (extracted from post content)
    var headingsData = $wrap.data("headings");
    try {
      headingsData = typeof headingsData === "string" ? JSON.parse(headingsData) : headingsData;
    } catch (e) {
      headingsData = null;
    }

    // If no PHP data, fallback to DOM extraction (backward compatibility)
    if (!headingsData || !Array.isArray(headingsData) || headingsData.length === 0) {
      return; // Let save.js rendered list stay, or return early
    }

    // Read settings from data attributes
    var tableType = String($wrap.data("table-type") || "").toLowerCase();
    var orderListType = String($wrap.data("order-list-type") || "").toLowerCase();
    var ListTagName = (tableType === "ordered") ? "ol" : "ul";
    var listTypeClass = orderListType ? (" rbea-" + orderListType) : "";

    // Build nested list from PHP headings data
    var $rootList = $('<' + ListTagName + ' class="responsive-block-editor-addons-toc__list' + listTypeClass + '"></' + ListTagName + '>');
    var listStack = [$rootList];
    var currentLevel = 0;

    headingsData.forEach(function (heading, i) {
      var level = heading.level || 2;
      var content = heading.content || "";
      var anchor = heading.anchor || slugify(content);

      if (!content) return;

      // Ensure anchor starts with number prefix
      if (!anchor.match(/^\d+-/)) {
        anchor = (i + 1) + "-" + anchor;
      }

      if (currentLevel === 0) currentLevel = level;

      // Deeper → open nested list
      while (level > currentLevel) {
        var $newList = $('<' + ListTagName + ' class="child-list' + listTypeClass + '"></' + ListTagName + '>');
        var $lastLi = listStack[listStack.length - 1].children("li").last();
        ($lastLi.length ? $lastLi : listStack[listStack.length - 1]).append($newList);
        listStack.push($newList);
        currentLevel++;
      }
      // Shallower → pop back up
      while (level < currentLevel && listStack.length > 1) {
        listStack.pop();
        currentLevel--;
      }

      // Create list item
      var $li = $('<li></li>');
      var $a = $('<a></a>').attr("href", "#" + anchor).text(content);
      $li.append($a);
      listStack[listStack.length - 1].append($li);
    });

    // Clean placeholders and inject
    $wrap.find(
      ".responsive-block-editor-addons_table-of-contents-placeholder," +
      " .responsive-block-editor-addons-toc__no-header," +
      " .responsive-block-editor-addons-toc__empty," +
      " .responsive-block-editor-addons-toc__placeholder"
    ).remove();

    $listWrap.empty().append($rootList);

    // Now match TOC links to headings in DOM and add IDs
    var $tocLinks = $listWrap.find("a[href^='#']");
    var $allHeadings = $("h1, h2, h3, h4, h5, h6");

    $tocLinks.each(function () {
      var $link = $(this);
      var href = $link.attr("href");
      if (!href || !href.startsWith("#")) return;

      var anchorId = href.substring(1); // Remove #
      var linkText = $.trim($link.text());

      // Check if heading with this ID already exists
      var $existingHeading = $("#" + anchorId);
      if ($existingHeading.length && $existingHeading.is("h1, h2, h3, h4, h5, h6")) {
        return; // ID already exists
      }

      // Find heading by text content
      var $heading = $allHeadings.filter(function () {
        return slugify($(this).text()) === slugify(linkText);
      }).first();

      // Also try direct text match (case-insensitive)
      if (!$heading.length) {
        $heading = $allHeadings.filter(function () {
          return $.trim($(this).text().toLowerCase()) === linkText.toLowerCase();
        }).first();
      }

      if ($heading.length) {
        // Check if this is an advanced heading block
        var $advancedHeadingBlock = $heading.closest('.wp-block-responsive-block-editor-addons-advanced-heading');
        
        if ($advancedHeadingBlock.length > 0) {
          var existingHeadingId = $heading.attr("id");
          var existingWrapperId = $advancedHeadingBlock.attr("id");
          
          if (existingHeadingId) {
            $link.attr("href", "#" + existingHeadingId);
          } else if (existingWrapperId) {
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
          // Regular heading - add ID if it doesn't exist
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