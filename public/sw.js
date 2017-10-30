
const reactPWAFromScratchCacheVersion = 'react-pwa-from-scratch-v10';

/**
 * Pre-cache some assets when service worker is registered
 */
this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(reactPWAFromScratchCacheVersion).then((cache) => {
      return cache.addAll([
        'index.html',
      ]);
    })
  );
});

/**
 * Intercepts application's requests and serves them first from cache.
 */
this.addEventListener('fetch', (event) => {
  event.respondWith(

    // Request in cache?
    caches.match(event.request).then((cacheResponse) => {
      
      return cacheResponse || fetch(event.request).then((fetchedResponse) => {

        // Better off cloning the response here. If done inside caches.open reponse could
        // be already read by returning the original response.
        var clonedFetchedResponse = fetchedResponse.clone();

        // Request was not in the cache. We fetched it and now we save it in the cache.
        caches.open(reactPWAFromScratchCacheVersion).then((cache) => {

          // Reponse stream can be read only once so that it must be cloned.
          cache.put(event.request, clonedFetchedResponse);

        });

        // Make sure reposnse is already cloned before returning here.
        return fetchedResponse;
      });

    })
    .catch(() => {

      // Fallback answer if there is no connectivity and request is not in cache.
      return new Response('Fallback answer if there is no connectivity and request is not in cache.');

    })
  );
});