/**
 * Hongrun Technology - Offline catalog and sizing service worker.
 * Only same-origin, successful basic GET responses are cached.
 */
const CACHE_NAME = "hongrun-cache-v7";
const PRECACHE_ASSETS = [
  "/",
  "/404.html",
  "/products.html",
  "/solutions.html",
  "/contact.html",
  "/about.html",
  "/news.html",
  "/hongrun-vs-durr-dental.html",
  "/warranty-policy.html",
  "/manifest.json",
  "/assets/css/tailwind.css",
  "/assets/css/20261128-special-pages.css",
  "/assets/js/lightbox.js",
  "/assets/js/mobile-nav.js",
  "/assets/js/cookie-consent.js",
  "/assets/js/webmcp-tools.js",
  "/assets/images/logo_transparent.webp",
  "/assets/images/favicon/favicon-32.png",
  "/assets/images/favicon/icon-192.png",
  "/assets/images/favicon/icon-512.png"
];
const EXCLUDED_PATH = /^\/(?:api\/|analytics\/|_next\/data\/)/i;

function isCacheable(request, response) {
  return request.method === "GET" &&
    new URL(request.url).origin === self.location.origin &&
    response && response.status === 200 && response.type === "basic";
}

async function precacheIndividually() {
  const cache = await caches.open(CACHE_NAME);
  await Promise.all(PRECACHE_ASSETS.map(async (asset) => {
    try {
      const response = await fetch(asset, { cache: "no-store" });
      if (isCacheable(new Request(new URL(asset, self.location.origin)), response)) {
        await cache.put(asset, response);
      }
    } catch (error) {
      console.warn("[ServiceWorker] Pre-cache skipped:", asset);
    }
  }));
}

self.addEventListener("install", (event) => {
  event.waitUntil(precacheIndividually());
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin || EXCLUDED_PATH.test(url.pathname)) return;

  const isNavigation = request.mode === "navigate";
  const accept = request.headers.get("accept") || "";
  const isHtml = isNavigation || accept.includes("text/html");

  if (isHtml) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      try {
        const response = await fetch(request);
        if (isCacheable(request, response)) await cache.put(request, response.clone());
        return response;
      } catch (error) {
        const cached = await cache.match(request);
        if (cached) return cached;
        const offlinePage = await cache.match("/404.html");
        if (offlinePage) return offlinePage;
        return new Response("You are offline. Reconnect to browse the Hongrun catalog.", {
          status: 503,
          headers: { "Content-Type": "text/plain; charset=utf-8" }
        });
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    try {
      const response = await fetch(request);
      if (isCacheable(request, response)) await cache.put(request, response.clone());
      return response;
    } catch (error) {
      if (cached) return cached;
      return new Response("", { status: 504, statusText: "Offline" });
    }
  })());
});
