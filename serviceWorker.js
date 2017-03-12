var cacheName = 'pwa';

var filesToCache = [
  '/',
	'./js/angular.min.js',
	'./js/app.js',
	'./js/custom.js',
	'./index.html'
];



self.addEventListener('install', function(e) {
  console.log('installing');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
        return cache.addAll(filesToCache);
    })
  );

});

 

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');

  e.waitUntil(
    caches.keys().then(function(keyList) {
      

      return Promise.all(keyList.map(function(key) {

        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }

      }));


    })
  );

  return self.clients.claim();
});


self.addEventListener('fetch', function(event) {
  
    event.respondWith(

        fetch(event.request).then(function(response) {

            /* fetch from network and cache for later use */
            var clonedRes = response.clone();
            caches.open(cacheName).then(function(cache){
                cache.put(event.request, clonedRes);
            });

            return response;

        }).catch(function(error) {
            
            console.log(event.request.url + ' taking from cache');
            return caches.match(event.request).then(function(response){

                return response;

            });


        })

    );
});