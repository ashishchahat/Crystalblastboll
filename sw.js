
const CACHE_NAME = 'crystal-blast-v2';
const urlsToCache = [
  "/Crystalblastboll-main/animewow.mp3",
  "/Crystalblastboll-main/aww.mp3",
  "/Crystalblastboll-main/blast_1.mp3",
  "/Crystalblastboll-main/bonncrack.mp3",
  "/Crystalblastboll-main/break_boll.mp3",
  "/Crystalblastboll-main/cashregister.mp3",
  "/Crystalblastboll-main/ding.mp3",
  "/Crystalblastboll-main/freez.mp3",
  "/Crystalblastboll-main/game_over.mp3",
  "/Crystalblastboll-main/gear.mp3",
  "/Crystalblastboll-main/ghost.png",
  "/Crystalblastboll-main/ghost_1.png",
  "/Crystalblastboll-main/icon.png",
  "/Crystalblastboll-main/index.html",
  "/Crystalblastboll-main/kidsaye.mp3",
  "/Crystalblastboll-main/manifest.json",
  "/Crystalblastboll-main/powerup.mp3",
  "/Crystalblastboll-main/splash-screen.png",
  "/Crystalblastboll-main/sw.js",
  "/Crystalblastboll-main/whoos.mp3"
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
