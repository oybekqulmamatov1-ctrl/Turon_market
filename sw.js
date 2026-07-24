// Bozorcha — minimal service worker (PWA o'rnatilishi uchun talab qilinadi)
const CACHE_NAME = "bozorcha-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
