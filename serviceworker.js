self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open('static').then((cache)=>{
			cache.addAll([
				'/',
				'index.html',
				'assets/css/normalize.css',
				'assets/css/skeleton.css',
				'https://fonts.googleapis.com/css2?family=Raleway&display=swap',
				'offline.html',
				'404.html'
			]);
		});
	);
});
self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.open('static').then((cache) => {
			return cache.match(event.request).then((response) => {
				return response || fetch(event.request).then((response) => {
					cache.put(event.request, response.clone());
					return response;
				});
			});
		})
	);
});
