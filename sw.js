self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('dluck-store').then((cache) => {
      return cache.addAll(['index.html', 'manifest.json', 'logo.jpg']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});