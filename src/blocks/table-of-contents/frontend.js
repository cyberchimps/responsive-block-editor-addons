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

  function findContentRoot() {
    var $article = $("main article, .site-main article, article").first();
    if ($article.length) {
      var $content = $article.find(".entry-content, .wp-block-post-content, .post-content").first();
      if ($content.length) return $content;
    }
    return $(".entry-content, .wp-block-post-content, .post-content").first();
  }

  $(".responsive-block-editor-addons-toc__wrap").each(function () {
    var $wrap = $(this);

    // Ensure list-wrap exists to receive content if we need to build
    var $listWrap = $wrap.find(".responsive-block-editor-addons-toc__list-wrap");
    if (!$listWrap.length) {
      $listWrap = $('<div class="responsive-block-editor-addons-toc__list-wrap"></div>');
      var $titleWrap = $wrap.find(".responsive-block-editor-addons-toc__title-wrap");
      if ($titleWrap.length) $listWrap.insertAfter($titleWrap);
      else $wrap.append($listWrap);
    }

    // If a list already exists, OVERWRITE it (clear before rebuilding)
    var hasLinks = $listWrap.find("a[href^='#']").length > 0;
    if (hasLinks) {
    // Remove any previously saved/generated list content
    $listWrap
        .find(".responsive-block-editor-addons-toc__list, .child-list")
        .remove();
    $listWrap.empty();
    }


    // ---- Build list from the rendered article DOM (sidebar case) ----
    var $content = findContentRoot();
    if (!$content.length) return;

    // Read settings from data attributes so DOM matches TableOfContents.js render
    var tableType = String($wrap.data("table-type") || "").toLowerCase();      // "ordered" | "unordered"
    var orderListType = String($wrap.data("order-list-type") || "").toLowerCase(); // e.g. "ordered" | "unordered" | custom
    var ListTagName = (tableType === "ordered") ? "ol" : "ul";
    var listTypeClass = orderListType ? (" rbea-" + orderListType) : "";

    // Allowed heading levels (mapping) from data attribute if present
    var allowed = $wrap.data("allowed-anchors");
    try { allowed = typeof allowed === "string" ? JSON.parse(allowed) : allowed; }
    catch (e) { allowed = { h1:true, h2:true, h3:true, h4:true, h5:true, h6:true }; }

    // Build selector for both core Heading and RBEA Advanced Heading
    var selectors = [];
    ["h1","h2","h3","h4","h5","h6"].forEach(function(tag){
      if (allowed && allowed[tag]) {
        selectors.push(tag + ".wp-block-heading"); // core heading
        selectors.push(".wp-block-responsive-block-editor-addons-advanced-heading " + tag); // rbea advanced
      }
    });
    if (!selectors.length) return;

    var $headings = $content.find(selectors.join(",")).filter(function () {
      var $h = $(this);

      // Exclude common non-content areas
      if ($h.closest(
        ".entry-header, header, footer, nav, aside, .sidebar, .widget, .widgets, " +
        ".comments, #comments, .comment, .comment-list, .comment-respond, " +
        ".pagination, .related, .related-posts, .entry-footer, .post-meta, " +
        ".screen-reader-text, .wp-block-query, .wp-block-post-template"
      ).length) return false;

      // Exclude headings inside any TOC block
      if ($h.closest(".responsive-block-editor-addons-block-table-of-contents").length) return false;

      // Exclude main page/post title
      if ($h.is(".entry-title, .post-title, .page-title, .wp-block-post-title")) return false;

      // Exclude headings that are entirely a link (avoid duplicate anchor behavior)
      if ($h.children("a").length && $.trim($h.clone().children("a").text()) === $.trim($h.text())) return false;

      return true;
    });

    if (!$headings.length) return;

    // Build nested list (stack-based) using SAME tag + classes as TableOfContents.js
    var $rootList = $('<' + ListTagName + ' class="responsive-block-editor-addons-toc__list' + listTypeClass + '"></' + ListTagName + '>');
    var listStack = [$rootList];
    var currentLevel = 0;
    var usedIds = Object.create(null);

    $headings.each(function (i) {
      var $h = $(this);
      var level = parseInt(this.tagName.substring(1), 10);
      var rawText = $.trim($h.text());
      if (!rawText) return;

      var anchor = "";
      
      // Check if this is an advanced heading block
      var $advancedHeadingBlock = $h.closest('.wp-block-responsive-block-editor-addons-advanced-heading');
      
      if ($advancedHeadingBlock.length > 0) {
        // For advanced headings, check for existing IDs in this order:
        // 1. headingId on the heading element itself
        // 2. anchor on the wrapper div
        var existingHeadingId = $h.attr("id");
        var existingWrapperId = $advancedHeadingBlock.attr("id");
        
        if (existingHeadingId) {
          anchor = existingHeadingId;
        } else if (existingWrapperId) {
          anchor = existingWrapperId;
        } else {
          // Generate new anchor if none exists
          var base = (i + 1) + "-" + slugify(rawText);
          anchor = encodeURIComponent(base);
          // Avoid duplicate ids; add suffix if collision happens
          var final = anchor, n = 2;
          while (document.getElementById(final)) {
            final = anchor + "-" + n++;
          }
          $h.attr("id", final);
          anchor = final;
        }
      } else {
        // For regular headings, use existing logic
        var base = (i + 1) + "-" + slugify(rawText);
        anchor = encodeURIComponent(base);
        // Ensure stable/unique id on heading (use our anchor to match hrefs)
        if (!$h.attr("id") || $h.attr("id") !== anchor) {
          // Avoid duplicate ids; add suffix if collision happens
          var final = anchor, n = 2;
          while (document.getElementById(final)) {
            final = anchor + "-" + n++;
          }
          $h.attr("id", final);
          anchor = final;
        }
      }

      if (currentLevel === 0) currentLevel = level;

      // Deeper → open nested list with SAME tag + Classes as child list
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

      // <li><a href="#anchor">text</a></li>  (text already stripped of tags)
      var $li = $('<li></li>');
      var $a  = $('<a></a>').attr("href", "#" + anchor).text(rawText);
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
