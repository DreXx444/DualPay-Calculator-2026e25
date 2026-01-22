const CACHE_NAME = 'dualpay-2026-v1';
const ASSETS = [
    'index.html',
    'manifest.json',
    'https://cdn.tailwindcss.com',
    'https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Montserrat:wght@400;600;900&display=swap'
];

// Инсталиране и кеширане
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

// Работа офлайн (извличане от кеша)
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request))
    );
});
