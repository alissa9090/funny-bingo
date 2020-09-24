/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
const CACHE_NAME = 'shopping-list-v0.1';
const FILES_TO_CACHE = [
  './',
  './manifest.webmanifest',
  './bingo-icon-512x512.jpg',
  './src.a2b27638.css',
  './src.a2b27638.js'
];

self.addEventListener('install', (evt) => {
  console.log('[ServiceWorker] Install');
  // Precache resources here.
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline page');
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activate');
  // Remove previous cached data from disk.
  evt.waitUntil(
    caches.keys().then((keyList) => Promise.all(keyList.map((key) => {
      if (key !== CACHE_NAME) {
        console.log('[ServiceWorker] Removing old cache', key);
        return caches.delete(key);
      }
    })))
  );

  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  console.log('[ServiceWorker] Fetch', evt.request.url);
  // get from cache first. If doesn't exist then get from network
  evt.respondWith(
    caches.match(evt.request).then((response) => response || fetch(evt.request))
  );
});
