const CACHE_NAME = 'nfcs-handbook-v1';
const urlsToCache = [
  'https://yourusername.github.io/nfcs-handbook/',
  'https://yourusername.github.io/nfcs-handbook/index.html',
  'https://yourusername.github.io/nfcs-handbook/icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
