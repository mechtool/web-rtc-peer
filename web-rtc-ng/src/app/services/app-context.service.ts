import {ChangeDetectorRef, Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {isPlatformBrowser} from "@angular/common";
import {AnnouncementContext, Contact, Message, PopupContext, WebRtcContexts} from "../Classes/Classes";
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AppContextService {
    //переменная для открытого ключа приложения
    public apiKey;
    //Экземпляр Firebase
    public firebase ;
    //Идентификатор WebRtc контекста
    public contextId : string ;
    //Конфигурация для Stun/Turn
    public stunTurnConfig ;
    //Индикация загрузки маршрута
    public routeLoading;
    //Верификатор рекапчи
    public recaptchaVerifier;
    //Объект подтверждения при аутентификации
    public confirmation : any;
    //Главный контекст webRtc
    public webRtcContexts : WebRtcContexts = new WebRtcContexts();
    //аппаратные средства : видеокамера, микрофон, динамики
    public hardware : BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    //Коллекция входящих пропущенных сообщений,получаемая с сервера при старте приложения
    public incomingAcceptedMessages : BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    //Коллекция входящих принятых сообщений, получаемая с сервера при старте приложения
    public incomingMissingMessages : BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    //Коллекция исходящих сообщений, получаемая с сервера при старте приложения
    public outgoingMessages : BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    //Пользователь приложения (реактивная форма)
    public user : BehaviorSubject< any > = new BehaviorSubject(new Contact({name : 'Unknown'}));
    // Пользователь приложения (не реактивная форма)
    public appUser : Contact = new Contact({name : 'Unknown'});
    //Коллекция всех пользователей приложения
    public appUsers : BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>([]);
    //Глобальная переменная статуса локального пользователя
    public statusColor  : BehaviorSubject<string> = new BehaviorSubject<string>('#8d8d8d');
    //контакты помеченные пользователем как активные
    public activeContacts = {};
    //Содержит сообщение для воспроизведения
    public activeMessage : Message;
    //Баланс SMS пользователя
    public smsBalance = new BehaviorSubject(0);
    //Настройки только локального контекста для передачи удаленным контекстам
    public localVideoAudio = {type : 'settings', video : 1, audio : 1};
    //Коллекция контактов для текущего пользователя
    public contacts : BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>([]);
    //Индикатор запуска компонента проверок пользовательских разрешений
    public checkPermissions : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    //Основной класс цветовой схемы приложения
    public appColorClass : BehaviorSubject<string> = new BehaviorSubject(isPlatformBrowser(this.platformId) ? /null|undefined/.test(window.localStorage.getItem('appColorClass')) ? 'second-theme' : window.localStorage.getItem('appColorClass') : 'second-theme' );
    //Уведомления приложения, кроме уведомления входящих вызовов
    public notifications = [];
    //Коллекция уведомлений о входящих вызовах
    public popups : BehaviorSubject<PopupContext[]> = new BehaviorSubject<PopupContext[]>([]);
    //Все уведомления приложения на странице Announcements
    public announcements  : BehaviorSubject<AnnouncementContext[]> = new BehaviorSubject<AnnouncementContext[]>([]);
    //Детектор изменений компонента приложения
    public appChangeRef : ChangeDetectorRef;
    //Событие установки на экран приложения
    public beforeInstall : BehaviorSubject<any>= new BehaviorSubject(false);
    //Индикатор нахождение пользователя в сети для иконки пользователя
    public online : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    //Свойство доступа браузерв к сети для компонента offline
    public offline = {off : false, autonomously : false};
    //Массив задержек отображения диалогов перед закрытием
    public dialogDelay = [20000, 30000, 40000];
    //Идентификатор временного пользователя, полученный из SMS
    public smsUid = undefined;
    
    constructor(
	@Inject(PLATFORM_ID) private platformId: Object,
	public router : Router,
    ) {
	//Получение от браузера все аппаратные средства
	if (isPlatformBrowser(this.platformId)){
	    this.initialize() ;
	}
    }
    
    initialize(){
	//Запрос аппартных устройств
        this.getHardware();
	//Подписка на события роутера для запуска прогрессбара загрузки страниц
	this.router.events.subscribe(event => {
	    switch (true) {
		case event instanceof NavigationStart: {
		    this.routeLoading = true;
		    break;
		}
		case event instanceof NavigationEnd:
		case event instanceof NavigationCancel:
		case event instanceof NavigationError : {
		    this.routeLoading = false;
		    break;
		}
		default: {
		    break;
		}
	    }
	});
    
    }
    
    searchMessageContacts(receivers){
	//Функция ищет и возвращает контакты пользователя по контактам, полученными из дескриптора .
	//Если в контактах пользователя нет контакта, пришедшего в дескрипторе, в коллекции активных контактах
	//устанавливается контакт из дескриптора
	return receivers.map(cont => {
	    let ct = this.contacts.value.find(ct => ct.uid === cont.uid);
	    return ct ? ct : cont;
	});
    }
    
    setPopups(option : {add : boolean , popup : PopupContext, index? : number}){
	//true - добавить, false - удалить по индексу
	//При установке оповещений нужно контролировать количество в коллекции, и если больше определенного
	//значения (5), то у далять элементы коллекции С КОНЦА
	let popups =  this.popups.value;
	option.add ? popups.unshift(option.popup) : popups.splice(option.index, 1) ;
	this.popups.next(popups.filter((popup, inx) => inx < 5));
    }
    
    getHardware(){
	//Функция получает все устройства ввода/вывода и формирует набор доступных аппаратных средств приложения
	//получаем все устройства ввода/вывода в os
	let deviceText = {'videoinput' : 'Камера', 'audioinput' : 'Аудио вход', 'audiooutput' : 'Аудио выход'};
	navigator.mediaDevices.enumerateDevices().then(deviceInfos => {
	    let devices = [];
	    //получаем все устройства/фильтруем повторяющиеся по маркеру
	    deviceInfos.map(dev => {
		return  {
		    text : deviceText[dev.kind],
		    kind : dev.kind.trim(),
		    deviceId : dev.deviceId.trim(),
		    groupId : dev.groupId.trim()
		}}).filter((dev, inx) => {devices.some(d => {
		//Фильтрация повторяющихся наименований
		return d.kind === dev.kind && d.groupId === dev.groupId; //false;
	    }) || setDevices(devices, dev);
	    }) ;
	    
	    this.hardware.next(devices);
	}).catch(err => {});
	
	function setDevices(devices, dev){
	    dev.text = `${dev.text} ${devices.filter(d => d.kind === dev.kind).length}`;
	    devices.push(dev)
	}
    }
}
