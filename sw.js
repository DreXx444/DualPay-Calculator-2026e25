const CACHE_NAME = 'dualpay-v4';
const ASSETS = ['./index.html', './manifest.json'];

self.addEventListener('install', (e) => {
    self.skipWaiting();
    e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
});

self.addEventListener('activate', (e) => {
    e.waitUntil(caches.keys().then((ks) => Promise.all(ks.map((k) => k !== CACHE_NAME && caches.delete(k)))));
});

self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});
