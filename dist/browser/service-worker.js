importScripts('ngsw-worker.js');

let version = '1.0.2';
let channel = new BroadcastChannel('sw-messages');
channel.addEventListener('message', event => {
	if(event.data.type === 'version'){
		console.log('version : ' + version) ;
	}
});
channel.postMessage({type : 'version', version : version});


/*self.addEventListener('push', (event)=> {
	const data = event.data.json();
	let title = data.notification.title +' от ' + data.user.uid,
		options = {
		/!*	actions : data.notification.actions,*!/
			body : data.notification.body,
		} ;
	event.waitUntil(self.registration.showNotification(title, options));
});*/

//Обработка событина нажатия пользователем на уведомление
self.addEventListener('notificationclick', (event )=> {
	//Обработка активности пользователя на текущем сообщении
	const rootUrl = new URL('/', location).href;
	event.notification.close();
	// Enumerate windows, and call window.focus(), or open a new one.
	if(event.action === 'accept' || event.action === ''){
		console.log('Сообщение принято.');
		event.waitUntil(
			self.clients.matchAll().then(matchedClients => {
				for (let client of matchedClients) {
					if (client.url === rootUrl) {
						return client.focus();
					}
				}
				return self.clients.openWindow("/application");
			})
		);
	}else if(event.action === 'denied'){
		console.log('Сообщение не принято.');
	}
}, false);
