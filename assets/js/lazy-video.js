// Hongrun Technology - Viewport-Aware Lazy Video Player
// Eliminates initial video payload download until user scrolls near the media section
document.addEventListener('DOMContentLoaded', function() {
  var videos = document.querySelectorAll('video[data-autoplay="lazy"]');
  if ('IntersectionObserver' in window && videos.length > 0) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        var video = entry.target;
        if (entry.isIntersecting) {
          if (video.paused) {
            video.play().catch(function(){});
          }
        } else {
          if (!video.paused) {
            video.pause();
          }
        }
      });
    }, { rootMargin: '150px' });
    videos.forEach(function(v) { observer.observe(v); });
  }
});
