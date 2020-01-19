importScripts('ngsw-worker.js');
let version = '1.0.2';

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
	if (event.action === 'archive') {
		// Archive action was clicked
		console.log('Нажата кнопка активности.')
	} else {
		// Main body of notification was clicked
		console.log('Нажато тело сообщения.');
		self.clients.openWindow('/application/announcements');
	}
	event.notification.close();
	
}, false);
