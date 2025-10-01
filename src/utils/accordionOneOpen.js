(function () {
  if (window.__rbeaAccordionGlobalBound) return;
  window.__rbeaAccordionGlobalBound = true;

  // Limit to Gutenberg Inspector sidebar so we don't affect other admin UIs.
  const INSPECTOR_SELECTOR =
    '.block-editor-block-inspector, .edit-post-sidebar, .interface-interface-skeleton__sidebar';

  // Matches PanelBody headers (Gutenberg core).
  const HEADER_SELECTOR =
    '.components-panel__body-title button, .components-panel__body-toggle';

  let closingPeers = false;

  // Motion preference.
  const prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const isScrollable = (el) => {
    if (!el) return false;
    const cs = getComputedStyle(el);
    return (
      (cs.overflowY === 'auto' || cs.overflowY === 'scroll') &&
      el.scrollHeight > el.clientHeight
    );
  };

  const getScrollContainer = (el) => {
    let node = el?.parentElement;
    while (node && node !== document.body) {
      if (isScrollable(node)) return node;
      node = node.parentElement;
    }
    return document.scrollingElement || document.documentElement;
  };

  const scrollToTop = (el, behavior = 'smooth') => {
    const scroller = getScrollContainer(el);
    const resolved = prefersReducedMotion ? 'auto' : behavior;

    if (scroller === document.scrollingElement || scroller === document.documentElement) {
      try { window.scrollTo({ top: 0, left: 0, behavior: resolved }); }
      catch { window.scrollTo(0, 0); }
    } else {
      try { scroller.scrollTo({ top: 0, left: 0, behavior: resolved }); }
      catch { scroller.scrollTop = 0; }
    }
  };

  // Is the given PanelBody nested inside another PanelBody?
  const isNestedPanel = (panelEl) =>
    !!panelEl?.parentElement?.closest('.components-panel__body');

  // Escape hatches
  const panelIgnored = (panel) =>
    panel?.getAttribute('data-oneopen') === 'off';

  const scopeIgnored = (scope) =>
    scope?.closest('[data-oneopen-scope="off"]');

  // Return the WIDEST useful scope under the inspector that still contains
  // at least one true peer PanelBody of the clicked panel (not ancestor/descendant).
  const getScopeContainer = (clickedPanel) => {
    const inspectorRoot = clickedPanel.closest(INSPECTOR_SELECTOR);
    if (!inspectorRoot) return null;

    // Helper: does this container include any PanelBody that is a true peer?
    const hasTruePeer = (container) => {
      const panels = container.querySelectorAll('.components-panel__body');
      for (const p of panels) {
        if (
          p !== clickedPanel &&
          !p.contains(clickedPanel) &&
          !clickedPanel.contains(p)
        ) {
          return true;
        }
      }
      return false;
    };

    let node = clickedPanel.parentElement;
    let best = inspectorRoot; // fallback: entire inspector (keeps behavior robust)

    while (node && node !== inspectorRoot) {
      if (hasTruePeer(node)) best = node;
      node = node.parentElement;
    }

    return best;
  };

  const onClickCapture = (e) => {
    if (closingPeers) return;
    if (e.__rbeaAccordionOneOpenHandled) return; 
    e.__rbeaAccordionOneOpenHandled = true;

    const headerBtn = e.target.closest(HEADER_SELECTOR);
    if (!headerBtn) return;

    const clickedPanel = headerBtn.closest('.components-panel__body');
    if (!clickedPanel) return;
    if (panelIgnored(clickedPanel)) return;

    // Ensure we are inside the Inspector.
    if (!clickedPanel.closest(INSPECTOR_SELECTOR)) return;

    // BEFORE Gutenberg toggles: only act when the panel is about to open.
    const willOpen = !clickedPanel.classList.contains('is-opened');
    if (!willOpen) return;

    const scope = getScopeContainer(clickedPanel);
    if (!scope || scopeIgnored(scope)) return;

    // Collect currently open peers within the scope, excluding ancestors/descendants and ignored panels.
    const openPeers = Array.from(
      scope.querySelectorAll('.components-panel__body.is-opened')
    ).filter(
      (p) =>
        p !== clickedPanel &&
        !p.contains(clickedPanel) &&
        !clickedPanel.contains(p) &&
        !panelIgnored(p)
    );

    // After Gutenberg applies its own toggle, close peers.
    requestAnimationFrame(() => {
      if (openPeers.length) {
        closingPeers = true;
        try {
          openPeers.forEach((p) => {
            if (!p.classList.contains('is-opened')) return;
            const h = p.querySelector(
              ':scope > .components-panel__body-title button, :scope > .components-panel__body-toggle'
            );
            h && h.click();
          });
        } finally {
          closingPeers = false;
        }
      }

      // Smoothly scroll to top ONLY for top-level panels (skip nested ones).
      if (!isNestedPanel(clickedPanel)) {
        requestAnimationFrame(() => {
          scrollToTop(clickedPanel, 'smooth');
        });
      }
    });
  };

  document.addEventListener('click', onClickCapture, true);
})();
