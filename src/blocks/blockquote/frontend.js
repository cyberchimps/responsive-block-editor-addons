document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.rbea-bq__tweet[data-url-mode]');
  buttons.forEach((btn) => {
    const mode = btn.getAttribute('data-url-mode');
    const customUrl = btn.getAttribute('data-custom-url');
    
    // Get the quote text
    let quoteText = '';
    const wrap = btn.closest('.responsive-block-editor-addons-block-blockquote-item');
    if (wrap) {
      const textEl = wrap.querySelector('.responsive-block-editor-addons-block-blockquote-text');
      if (textEl) quoteText = (textEl.textContent || '').trim();
    }
    
    // Build the Twitter intent URL
    const intent = new URL('https://twitter.com/intent/tweet');
    if (quoteText) intent.searchParams.set('text', quoteText);
    
    if (mode === 'current') {
      // Share current page URL
      const pageUrl = window.location.href;
      intent.searchParams.set('url', pageUrl);
    } else if (mode === 'custom' && customUrl) {
      // Share custom URL
      intent.searchParams.set('url', customUrl);
    }
    
    btn.setAttribute('href', intent.toString());
  });
});
