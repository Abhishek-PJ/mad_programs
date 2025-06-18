self.addEventListener("install", (e) => {
    console.log("Service Worker: Installed");

    e.waitUntil(
        caches.open("stock").then((cache) => {
            return cache.addAll([
                "/stockdata_6thprogram/",
                "/stockdata_6thprogram/index.html",
                "/stockdata_6thprogram/assets/android-launchericon-192-192.png",
                "/stockdata_6thprogram/assets/android-launchericon-512-512.png",
                "/stockdata_6thprogram/manifest.json",
                "/stockdata_6thprogram/sw.js",
                "/stockdata_6thprogram/data.json"
            ]);
        }).catch((err) => {
            console.log("Cache add failed: ", err);
        })
    );
});

self.addEventListener("activate", (e) => {
    console.log("Service Worker: Activated");
});

self.addEventListener("fetch", (e) => {
    console.log("Service Worker: Fetching ", e.request.url);
    e.respondWith(
        caches.match(e.request)
            .then((res) => {
                return res || fetch(e.request);
            })
            .catch((err) => {
                console.log("Fetch failed: ", err);
            })
    );
});
