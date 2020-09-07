self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open('static').then((cache)=>{
			cache.addAll([
				'/',
				'index.html',
				'assets/css/normalize.css',
				'assets/css/skeleton.css',
				'https://fonts.googleapis.com/css2?family=Raleway&display=swap',
				'offline.html'
			]);
		});
	);
});
self.addEventListener('fetch', (event) => {event.waitUntil(
	if (/\.(png|jpeg|jpg|gif)/.match(event.request.url)) {
		caches.open('images').then((cache) => {
			return fetch(event.request).then((response) => {
				cache.put(event.request, response.clone());
				return response;
			}).catch(() => {
				return cache.match(event.request) || cache.match('offline.html');
			})
		})
	}
)});
