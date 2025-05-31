const CACHE_NAME = 'crystal-blast-v4';
const urlsToCache = [
  './index.html',
  './manifest.json',
  './sw.js',
  './icon.png',
  './splash-screen.png',
  './ghost.png',
  './ghost_1.png',
  './break_boll.mp3',
  './blast_1.mp3',
  './freez.mp3',
  './powerup.mp3',
  './ding.mp3',
  './game_over.mp3',
  './cashregister.mp3',
  './aww.mp3',
  './animewow.mp3',
  './bonncrack.mp3',
  './kidsaye.mp3',
  './gear.mp3',
  './game.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.match(event.request).then(response => {
        return response || caches.match('./index.html');
      })
    )
  );
});
