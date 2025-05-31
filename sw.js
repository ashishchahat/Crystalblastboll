
const CACHE_NAME = 'crystal-blast-v4';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
  './splash-screen.png',
  './sw.js',
  './animewow.mp3',
  './aww.mp3',
  './blast_1.mp3',
  './bonncrack.mp3',
  './break_boll.mp3',
  './cashregister.mp3',
  './ding.mp3',
  './freez.mp3',
  './game_over.mp3',
  './gear.mp3',
  './ghost.png',
  './ghost_1.png',
  './kidsaye.mp3',
  './powerup.mp3',
  './whoos.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request).catch(() =>
          caches.match('./index.html')
        );
      })
  );
});
