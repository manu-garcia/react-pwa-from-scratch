// SW_CACHE_VERSION will be replaced while copying this file to the build directory with InterpolateSWPlugin
const reactPWAFromScratchCacheVersion = 'react-pwa-from-scratch-v' + '%SW_CACHE_VERSION%';

// SW_ASSET_FILES will be feed with all the generated assets for pre-cache purposes
//  while copying this file to the build directory with InterpolateSWPlugin
const cacheAll = [%SW_ASSET_FILES%];

/**
 * Pre-cache some assets when service worker is registered
 */
this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(reactPWAFromScratchCacheVersion).then((cache) => {
      return cache.addAll(cacheAll);
    })
  );
});

/**
 * Activate gets executed after install in the sw life cycle. So current cache is already created.
 */
this.addEventListener('activate', (event) => {
  
    // Promises passed here will block other events, we can safely remove old caches or content here
    event.waitUntil(
      // Loop through all created caches
      caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
          // For now that would do it. Delete all previously created caches but the current one.
          if (reactPWAFromScratchCacheVersion != key) {
            return caches.delete(key);
          }
        }));
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

/**
 * Custom messages from the application thread
 */
self.addEventListener('message', function(event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});