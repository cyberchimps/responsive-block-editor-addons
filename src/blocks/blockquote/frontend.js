document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.rbea-bq__tweet[data-url-mode]');
  buttons.forEach((btn) => {
    const mode = btn.getAttribute('data-url-mode');
    if (mode === 'current') {
      const pageUrl = window.location.href;
      // try to grab quoted text near the button
      let quoteText = '';
      const wrap = btn.closest('.responsive-block-editor-addons-block-blockquote-item');
      if (wrap) {
        const textEl = wrap.querySelector('.responsive-block-editor-addons-block-blockquote-text');
        if (textEl) quoteText = (textEl.textContent || '').trim();
      }
      const intent = new URL('https://twitter.com/intent/tweet');
      if (quoteText) intent.searchParams.set('text', quoteText);
      intent.searchParams.set('url', pageUrl);
      btn.setAttribute('href', intent.toString());
    }
  });
});
