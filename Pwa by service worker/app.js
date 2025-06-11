if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/serviceWorker2/sw.js')
        .then(reg => console.log('Service Worker Registered', reg))
        .catch(err => console.error('Service Worker Registration Failed', err));
}
