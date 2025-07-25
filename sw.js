const CACHE_NAME = "flappy-bird-cache-v1";
const URLS_TO_CACHE = [
    "./",
    "./index.html",
    "./script.js",
    "./assets/birds/midflap.png",
    "./assets/birds/upflap.png",
    "./assets/birds/downflap.png",
    "./assets/BaiJamjuree-Bold.ttf",
    '/assets/background.png',
    '/assets/ground.png',
    '/assets/pipe-up.png',
    '/assets/pipe-down.png',
    '/assets/thumbnail.png',

    // Audio
    '/assets/woosh.wav',
    '/assets/slap.wav',
    '/assets/score.wav',
];

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(res => res || fetch(e.request))
    );
});
