import {Injectable, OnDestroy} from '@angular/core';
import {SwPush} from "@angular/service-worker";
import {HttpClient} from "@angular/common/http";
import {AppContextService} from "./app-context.service";
import {DatabaseService} from "./database.service";

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService implements OnDestroy{
   
    public subscriptions = [] ;
    constructor(
	public swPush : SwPush,
	public http : HttpClient,
	public database : DatabaseService,
	public appContext : AppContextService) {}
    //Общая функция инициализации Push-Notification в приложении
    //При подключении сервиса SwPush отображение уведомления происходит автоматически (ничего настраивать, под-
    // писываться на событие push  в сервисном рабочем не нужно),
    //если был запущен запрос разрешения и сервер приложения отправил push уведомление пользователю с
    //реализацией интерфейса объекта Notification , SWPush самостоятельно отобразит входящее уведомлений в os,
    //передав управление в оформленную подписку swPush.messages.subscribe, а все нажатия на на сообщения или нажатия
    //на actions  передаст в полписку swPush.notificationClicks.subscribe

    sendNotification(offer){
        let contact =  { contactName : offer.contact.name || offer.contact.displayName || offer.contact.phoneNumber || offer.contact.email, uid : offer.contact.uid};
	this.http.post('/notification', {
	    contact : contact,
	    notification : {
		title : 'Входящее сообщение.',
		data : JSON.stringify( {
		    accept : {type : 'accept'},
		    denied  : {type : 'cancel'},
		}),
		body  : 'Новое сообщение от ' + contact.contactName,
		icon : offer.sender.photoURL.indexOf('/') == 0 ? 'https://firebasestorage.googleapis.com/v0/b/web-rtc-peer.appspot.com/o/general%2Ficons%2Fvideo-mess.png?alt=media&token=83a4be94-685d-40e5-811a-f9df8fad4b1a' : offer.sender.photoURL,
		actions:[
		    {
			action:  'accept',
			title: 'Принять',
			link : 'https://web-rtc-peer.herokuapp.com/'
		    },
		    {
			action: 'denied',
			title: 'Отклонить'
		    }
		]}}).toPromise().then(result => {
	    console.log(result);
	}).catch(err => {
	    console.log(err);
	})
    }
   
    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    
    onError(error){
	console.log(error);
    }
    
    async checkSubscription(){
	this.subscriptions.push(this.swPush.subscription.subscribe(sub => {
	    if(!sub){
		console.log('Подписки нет. Старт подписки.');
		return this.requestSubscription();
	    }
	}));
    }
    
    async requestSubscription() {
        if('serviceWorker' in navigator && this.appContext.apiKey && this.appContext.apiKey.publicKey){
               return await navigator.serviceWorker.ready.then(reg =>{
                    reg.pushManager.subscribe({userVisibleOnly : true, applicationServerKey : this.appContext.apiKey.publicKey}).then(async sub => {
			//Сохранение объекта подписки на сервере, в элементе пользователя приложением
			await this.database.sendSubscription(sub).then(res =>
			    console.log('Объект подписки успешно сохранен на сервере.')).catch(err => console.error('Ошибка при сохранении объекта подписки на сервере. '+ err));
		    } ).catch(err => {
		        console.log(err);
		    })
		})
	    }else{
		console.log('Браузер не поддерживает PushNotification.');
	    }

	    //Проверка разрешения пользователя и получения объекта подписки по заранее сгенерированному открытому ключу
/*	    if(this.swPush.isEnabled && this.appContext.apiKey && this.appContext.apiKey.publicKey) {
	        return await this.swPush.requestSubscription({
		    serverPublicKey : this.appContext.apiKey.publicKey,
		}).then(async subscription => {
		    //Сохранение объекта подписки на сервере, в элементе пользователя приложением
		    await this.database.sendSubscription(subscription).then(res =>
			console.log('Объект подписки успешно сохранен на сервере.')).catch(err => console.error('Ошибка при сохранении объекта подписки на сервере. '+ err));
		    return true;
		}).catch(err => {
		    return false ;
		});
	    }else console.log('Браузер не поддерживает PushNotification.')*/
    }
}
