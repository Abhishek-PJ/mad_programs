const mycache = "mycache";

const assets = [
  "./index.html", // correct
  "/serviceWorker/images/android-launchericon-72-72.png",
  "/serviceWorker/images/android-launchericon-96-96.png",
  "/serviceWorker/images/android-launchericon-144-144.png",
  "/serviceWorker/start.js",
  "/serviceWorker/serviceworker.js",
  "/serviceWorker/manifest.json"
];

// 🔧 Install event
self.addEventListener('install', event => {
  console.log('Inside install:', event);
  event.waitUntil(
    caches.open(mycache).then(cache => cache.addAll(assets))
  );
});

// ✅ Activate event
self.addEventListener('activate', event => {
  console.log('Inside activate:', event);
  event.waitUntil(self.clients.claim()); // Recommended
});

// 📡 Fetch event
self.addEventListener('fetch', event => {
  console.log('Inside fetch:', event.request.url);
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        console.log('Cache hit:', event.request.url);
        return response; // Return cached response
      }
      console.log('Cache miss:', event.request.url);
      return fetch(event.request); // Fetch from network
    })
    .then(response => {
      if (response && response.status === 200 && response.type === 'basic') {
        // Clone the response to cache it
        const responseToCache = response.clone();
        caches.open(mycache).then(cache => {
          cache.put(event.request, responseToCache);
        });
      }
      return response; // Return the original response
    })
  );
});
