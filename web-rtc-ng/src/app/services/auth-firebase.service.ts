import {Inject, Injectable, NgZone, PLATFORM_ID} from '@angular/core';
import {Router} from "@angular/router";
import {AppContextService} from "./app-context.service";
import {FirebaseService} from "./firebase.service";
import {HttpClient} from "@angular/common/http";
import {DatabaseService} from "./database.service";
import {StatusColorsService} from "./status-colors.service";
import {SettingDefaultService} from "./setting-default.service";
import {SwUpdateService} from "./sw-update.service";
import {WebRtcService} from "./web-rtc.service";
import {Contact} from "../Classes/Classes";

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {
    public subscribes = [];
    
    constructor(
      public appContext : AppContextService,
      public router :  Router,
      public http : HttpClient,
      public ngZone : NgZone,
      public firebaseService : FirebaseService,
      public database : DatabaseService,
      public statusColorsService : StatusColorsService,
      public settingsDefaultService : SettingDefaultService,
      public swUpdate : SwUpdateService,
      public webRtcService : WebRtcService,
      @Inject(PLATFORM_ID) private platformId: Object,
   ) {}
    
    ngOnDestroy(){
	this.subscribes.forEach(sub => sub.unsubscribe()) ;
    }
   
    initialize(){
	this.appContext.offline = {off : !window.navigator.onLine, autonomously: false};
	//Подписка на изменнения статуса идентификации пользователя
	this.firebaseService.auth.onAuthStateChanged((user : any)=> {//
	    //Запуск приложения, только когда сеть включена
	    if(window.navigator.onLine){
		this.startApplication(user);
	    }
	    this.appContext.appChangeRef.detectChanges();
	});
    }
    
    async startApplication(user){

        let path = '/authorization';
        if(user && user.uid){
	    //Если пользователь приложения существует, то нужно проверить/создать внутреннего пользователя приложения
	    let baseUser = await this.database.checkCreateUser(user);
	    //Изменение основного пользователя приложения, на которое подисываются клиенты во всем приложении
	    if(baseUser){
		//Установка не реактивного пользователя
		this.appContext.appUser = baseUser ;
	        this.appContext.user.next(baseUser);
	    }
	    //Запуск компонента проверки пользовательских разрешений использования API
	    this.appContext.checkPermissions.next(true);
	    //Запуск сервиса установки настроек по-умолчанию после получения пользователя
	    this.settingsDefaultService.initialize().then(res => {
		//Настройки по умолчанию установлены
	    }).catch(err => {
		//Отсутствуют или отключены аппаратные средства (камера или микрофон)
	    }) ;
	    //Основной вход в приложение
	    //Если пользователь идентифицирован, тогда запустить приложение, иначе открыть страницу авторизации
	    path = '/application';
	}
	this.ngZone.run(()=> this.router.navigateByUrl(path)).catch(err =>console.log(err));
    }
    
    //Функция продолженной загрузки данных, ПОСЛЕ отработки компонента разрешений permissions.component
    //Вызывается из компонента permissions.component
    afterPermissions() {

        //Получение всех пользователей приложения
	this.database.getApplicationUsers().subscribe(users => {
	    users && users.length && this.appContext.appUsers.next(users)
	});
	//Получение контактов пользователя
	this.database.subscribeContacts(this.appContext.appUser.uid).subscribe(conts => {
	    this.appContext.contacts.next(conts)
	});
	//Получение всех входящих сообщений пользователя
	this.database.subscribeInnerMessages(this.appContext.appUser.uid).subscribe(mess => {
	    this.appContext.innerMessages.next(mess)
	}) ;
	//Получение всех исходящих сообщений пользователя
	//Получение всех входящих сообщений пользователя
	this.database.subscribeOuterMessages(this.appContext.appUser.uid).subscribe(mess => {
	    this.appContext.outerMessages.next(mess)
	}) ;
	//Инициализация сервиса web-rtc после проверки разрешений
	this.webRtcService.initialize();
	//Подключение сервиса обновления приложения
	this.swUpdate.initialize();
	//Установка ложного значения в базу при отключении пользователя от сети
	//для того что бы пользователи приложения могли определить статус текущего пользователя
	this.database.setDisconnectOnlineStatus();
	//Получение sms баланса
	this.database.getRef('/sms/' + this.appContext.appUser.uid).once('value', res =>{
	    let val = res.val();
	    this.appContext.smsBalance.next(val ? val.sum : 0);
	}) ;
	//Запуск отслеживания состояния сети после получения пользователя для индикации сети внутри приложения
	this.database.checkConnection();
	//Подписка на изменения статуса сети. Управляется функцией database.checkConnection()
	this.subscribes.push(this.appContext.online.subscribe(online => {
	    if(this.appContext.appUser && this.appContext.appUser.uid){
		//Запись метки нахождения пользователя в сети, установка только истинного значения
		this.database.setContacts({contactURL : `/users/${this.appContext.user.value.uid}` , value : {online : online}});
			//Индикация нахождения пользователя в сети самому пользователю
		this.appContext.statusColor.next(online ? this.statusColorsService.statusColors.webrtc.perConnectionStates.connected : this.statusColorsService.statusColors.webrtc.perConnectionStates.disconnected);
		this.appContext.offline = {off : !online, autonomously : true};
	    
	    }
	}));
    }
    
    onSingOut(){ //Функция выхода пользователя из системы аутентификации
	this.appContext.appUser && this.appContext.appUser.uid && this.database.setContacts({contactURL : '/users/' + this.appContext.appUser.uid, value : {online : false}});
	this.firebaseService.auth.signOut().then(resp => {
	    this.appContext.user.next(new Contact({name : 'Unknown'}));
	    console.log('Пользователь вышел из приложения.')
	}).catch(err => {
		console.log('Ошибка при выходе пользователя из приложения. Error code :' + err)
	})
    }
  

}
