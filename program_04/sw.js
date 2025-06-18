self.addEventListener('install', event => {
    console.log('Service Worker Installed');
    event.waitUntil(
        caches.open('pwa-cache-v1').then(cache => {
            return cache.addAll([
                '/serviceWorker2/index.html',
                '/serviceWorker2/app.js',
                '/serviceWorker2/manifest.json',
                '/serviceWorker2/android-launchericon-48-48.png'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    console.log('Fetching:', event.request.url);
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
