/* Global Lightbox — click any thumbnail to view 4K Ultra-HD version */
(function() {
  var lb = null;
  var caption = null;

  function initLightbox() {
    if (lb) return;
    lb = document.createElement('div');
    lb.id = 'hr-lightbox';
    lb.style.cssText = 'position:fixed;inset:0;background:rgba(10,15,25,0.95);backdrop-filter:blur(8px);z-index:99999;display:none;align-items:center;justify-content:center;flex-direction:column;cursor:zoom-out;opacity:0;transition:opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1);';
    
    // Close button
    var closeBtn = document.createElement('div');
    closeBtn.innerHTML = '<svg style="width:24px;height:24px;color:#fff;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>';
    closeBtn.style.cssText = 'position:absolute;top:20px;right:24px;background:rgba(255,255,255,0.1);border-radius:999px;padding:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background 0.2s;';
    closeBtn.addEventListener('mouseenter', function() { this.style.background = 'rgba(255,255,255,0.25)'; });
    closeBtn.addEventListener('mouseleave', function() { this.style.background = 'rgba(255,255,255,0.1)'; });
    lb.appendChild(closeBtn);

    // Image element
    var img = document.createElement('img');
    img.style.cssText = 'max-width:90vw;max-height:85vh;object-fit:contain;border-radius:6px;box-shadow:0 25px 70px rgba(0,0,0,0.8);transition:transform 0.25s;cursor:default;';
    img.addEventListener('click', function(e) { e.stopPropagation(); });
    lb.appendChild(img);

    // Caption
    caption = document.createElement('div');
    caption.style.cssText = 'color:#e2e8f0;font-size:13px;margin-top:14px;letter-spacing:0.5px;font-family:system-ui,-apple-system,sans-serif;text-shadow:0 2px 4px rgba(0,0,0,0.8);max-width:80vw;text-align:center;';
    lb.appendChild(caption);

    lb.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && lb.style.display === 'flex') closeLightbox();
    });

    document.body.appendChild(lb);
  }

  function openLightbox(src, alt) {
    initLightbox();
    var img = lb.querySelector('img');
    img.src = src;
    img.alt = alt || '';
    caption.textContent = alt ? (alt + ' — Ultra-HD Inspection Blueprint') : 'Hongrun Medical Precision Product Blueprint (Ultra-HD)';
    lb.style.display = 'flex';
    setTimeout(function(){ lb.style.opacity = '1'; }, 10);
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lb) return;
    lb.style.opacity = '0';
    setTimeout(function(){ 
      lb.style.display = 'none'; 
      document.body.style.overflow = '';
    }, 250);
  }

  // Event delegation: capture clicks on any image with data-hd, data-zoom, or thumbnail
  document.addEventListener('click', function(e) {
    var t = e.target;
    if (!t) return;
    
    // CRITICAL: If the image or its parent is inside an <a> link, let the link navigate normally! Do NOT open lightbox!
    if (t.closest('a')) {
      return;
    }
    
    // Direct image with data-hd or inside a card/zoom element
    if (t.tagName === 'IMG') {
      var hdSrc = t.getAttribute('data-hd');
      if (hdSrc) {
        e.preventDefault();
        openLightbox(hdSrc, t.alt);
      } else if (t.closest('[data-zoom]')) {
        e.preventDefault();
        openLightbox(t.src, t.alt);
      }
    }
  });
})();
