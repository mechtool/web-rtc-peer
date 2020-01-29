importScripts('ngsw-worker.js');

let version = '1.0.02';
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
	console.log('Нажатие на сообщение.');
	let data = event.notification.data;
	if(event.action === 'accept'){
		self.clients.openWindow(data[event.action].link);
	}else if(event.action === 'denied'){
		//Сообщение не принято - снять активность предложения и установить статус предложения в 'denied'
		this.database.setDescriptorOptions({descriptor: data.offer, data: {active: false, action : 'denied'}}).catch(this.onError);
	}
	event.notification.close();
	
}, false);
