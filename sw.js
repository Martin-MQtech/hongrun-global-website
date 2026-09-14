/**
 * Hongrun Technology (Est. 1995) - Lightweight Offline Service Worker (PWA)
 * Enables instant catalog review & sizing calculations even in offline or weak-signal expo environments.
 */

const CACHE_NAME = "hongrun-cache-v3";
const STATIC_ASSETS = [
  "/",
  "/products.html",
  "/solutions.html",
  "/contact.html",
  "/about.html",
  "/news.html",
  "/assets/css/tailwind.css",
  "/assets/js/lightbox.js",
  "/assets/js/webmcp-tools.js",
  "/assets/images/logo_transparent.webp",
  "/assets/images/logo_transparent.png",
  "/assets/images/favicon/favicon-32.png",
  "/manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn("[ServiceWorker] Pre-cache partial fail:", err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  // Only handle GET requests
  if (req.method !== "GET") return;

  // Stale-While-Revalidate for CSS, JS, Images; Network-First for HTML
  const isHtml = req.headers.get("accept") && req.headers.get("accept").includes("text/html");

  if (isHtml) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
          return res;
        })
        .catch(() => {
          return caches.match(req).then((cached) => cached || caches.match("/"));
        })
    );
  } else {
    event.respondWith(
      caches.match(req).then((cached) => {
        const fetchPromise = fetch(req)
          .then((networkRes) => {
            if (networkRes && networkRes.status === 200) {
              const clone = networkRes.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
            }
            return networkRes;
          })
          .catch(() => cached);
        return cached || fetchPromise;
      })
    );
  }
});
