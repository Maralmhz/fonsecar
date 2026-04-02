const CACHE = 'fonsecar-orcamento-v1';
const ASSETS = ['./', './orcamento-pwa.html', './manifest.webmanifest', './sw.js', './assets/modelo.jpg', './assets/icon.svg'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', event => { event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request))); });