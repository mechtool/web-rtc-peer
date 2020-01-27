importScripts('ngsw-worker.js');

let version = '1.0.3';
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
	event.notification.actions.forEach(action => {
		let act = JSON.parse(action);
		if (act.type === 'accept') {
			self.clients.openWindow(act.link);
		}
	}) ;
	event.notification.close();
	
}, false);
