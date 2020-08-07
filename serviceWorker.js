const staticDevTeams = "dev-teams-site-v1"
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/images/escudo1.png",
    "/images/escudo2.png",
    "/images/escudo3.png",
    "/images/escudo4.png",
    "/images/escudo5.png",
    "/images/escudo6.png",
    "/images/escudo7.png",
    "/images/escudo8.png",
    "/images/escudo9.png",
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevTeams).then(cache => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    );
});
