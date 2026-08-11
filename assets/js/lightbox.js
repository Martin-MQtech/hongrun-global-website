/* Global Lightbox — click any product image to view HD version */
(function() {
  var lb = null;
  function open(src, alt) {
    if (!lb) {
      lb = document.createElement('div');
      lb.id = 'hr-lightbox';
      lb.style.cssText = 'position:fixed;inset:0;background:rgba(10,15,25,0.92);z-index:9999;display:flex;align-items:center;justify-content:center;cursor:zoom-out;opacity:0;transition:opacity 0.25s;';
      var img = document.createElement('img');
      img.style.cssText = 'max-width:92vw;max-height:92vh;object-fit:contain;border-radius:8px;box-shadow:0 20px 60px rgba(0,0,0,0.6);';
      lb.appendChild(img);
      lb.addEventListener('click', function(){ lb.style.opacity = '0'; setTimeout(function(){ lb.style.display='none'; }, 250); });
      document.body.appendChild(lb);
    }
    var i = lb.querySelector('img');
    i.src = src;
    i.alt = alt || '';
    lb.style.display = 'flex';
    setTimeout(function(){ lb.style.opacity = '1'; }, 10);
  }
  document.addEventListener('click', function(e) {
    var t = e.target;
    if (t && t.tagName === 'IMG' && t.closest('[data-zoom]')) {
      e.preventDefault();
      open(t.dataset.hd || t.currentSrc || t.src, t.alt);
    }
  });
})();
