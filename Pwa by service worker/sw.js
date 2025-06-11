self.addEventListener('install', event => {
    console.log('Service Worker Installed');
    event.waitUntil(
        caches.open('pwa-cache-v1').then(cache => {
            return cache.addAll([
                '/serviceWorker2/index.html',
                '/serviceWorker2/app.js',
                "manifest.json",
                "android-launchericon-48-48.png"
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
