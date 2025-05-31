
const CACHE_NAME = 'crystal-blast-v3';
const urlsToCache = [
  "./animewow.mp3",
  "./aww.mp3",
  "./blast_1.mp3",
  "./bonncrack.mp3",
  "./break_boll.mp3",
  "./cashregister.mp3",
  "./ding.mp3",
  "./freez.mp3",
  "./game_over.mp3",
  "./gear.mp3",
  "./ghost.png",
  "./ghost_1.png",
  "./icon.png",
  "./index.html",
  "./kidsaye.mp3",
  "./manifest.json",
  "./powerup.mp3",
  "./splash-screen.png",
  "./sw.js",
  "./whoos.mp3"
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
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
