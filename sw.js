const CACHE_NAME = "flappy-bird-cache-v1";
const URLS_TO_CACHE = [
    "/flappy-bird/",
    "/flappy-bird/index.html",
    "/flappy-bird/script.js",
    "/flappy-bird/assets/midflap.png",
    "./assets/upflap.png",
    "./assets/downflap.png",
    "./assets/midflap.png",
    "./assets/icon.png",
    "./assets/BaiJamjuree-Bold.ttf"

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
