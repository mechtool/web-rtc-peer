import {Injectable, OnDestroy} from '@angular/core';
import {AppContextService} from "./app-context.service";
import {FirebaseService} from "./firebase.service";
import {Contact} from "../Classes/Classes";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements OnDestroy{
    
    public database;
    public storage;
    
    constructor(
	public appContext : AppContextService,
	public firebaseService : FirebaseService,
    ) {}
  
    ngOnDestroy(): void {
        //Снятие всех обработчиков предложений (входящих/исходящих)
	this.database && this.database.ref('/web-rtc/offers/explicit/').off();
        //Снятие обработчиков события входящих предложений
	//this.database.ref('/web-rtc/offers/explicit/' + this.appContext.appUser.uid).off();
    }
    
    initialize(){
	this.database = this.firebaseService.database;
	this.storage = this.firebaseService.storage;
    }
    
    sendDescriptor(descriptor){
	return this.database.ref(`web-rtc/${descriptor.type}/${descriptor.contact.uid}/${descriptor.messId}`).set(descriptor);
    }
    
    getRef(ref){
        if(this.database) return this.database.ref(ref);
    }
    
    deleteDescriptor(options){
	//Если дескриптор - кандидат или ответ, то удалить его.
	//Усли дескриптор - предложение, то удалить только его кандидаты
	let descPath = `web-rtc/${options.descriptor.type}/${options.descriptor.contact.uid}/${options.descriptor.messId}${/offers/.test(options.descriptor.type) ? '/candidates' : '' }`.trim();
	return this.database.ref(descPath).set(null)
    }
    
    setDescriptorOptions(options){
	return this.database.ref(`web-rtc/${options.descriptor.type}/${options.descriptor.contact.uid}/${options.descriptor.messId}`).update(options.data).catch(err => {
	    this.onError(err);
	});
    }
    
    onError(err){
        console.log(err);
    }
    
    checkConnection(){
	this.database.ref(".info/connected").on("value", (snap)=> {
	    this.appContext.online.next(snap.val());
	});
    }
    
    setDisconnectOnlineStatus(){
	if(this.appContext.appUser && this.appContext.appUser.uid){
	    this.database.ref('/users/' + this.appContext.user.value.uid +'/online').onDisconnect().set(false);
	}
    }
    
    async onErrorContactImg(event, context){
	//Если контакт пользователя сам поменял изображение, то ссылка на него меняется.
	//Вылетает ошибка загрузкти ресурса, поэтому перегружаем ресурс из объекта User
	let user = await this.getRef('/users/' + context.uid).once('value').then(userSnap => {
	    return userSnap.val();
	});
	if (user){
	    event.target.src = user.photoURL;
	    await this.setContacts({contactURL : '/contacts/' + this.appContext.user.value.uid +'/'+ context.uid, value : {photoURL : user.photoURL }}) ;
	}
    }
    
    getApplicationUsers() : Observable<any> {
	//Получает всех пользователей приложения
	return new Observable((observer)=> {
	    this.database.ref('/users').on('value', (dataSnap)=>{
		observer.next(dataSnap.val());
	    })
	}).pipe(map(data =>{
	    //Фильтрация
	    return Object.values(data);
	}));
    }
    
    async sendSubscription(sub){
	let userRef = await this.database.ref('/users/' + this.appContext.user.value.uid);
	userRef && userRef.update({pushSubscription : sub})
    }
    
    subscribeContacts(uid) : Observable<any>{
	return new Observable(observer => {
	    //Получение контактов пользователя
	    this.database.ref('/contacts/' + uid).on('value', (contacts)=> {
		let conts = contacts.val() || {};
		observer.next(Object.values(conts));
	    }) ;
	})
    }
    getUserOnline(uid) {
	return this.database.ref(`/users/${uid}/online`).once('value');
    }
    
    checkUser() : Promise<Contact>{
	return this.database.ref('/users/'  + this.appContext.user.value.uid).once('value').then(userSnap => userSnap.val());
    }
    
    async saveContactIcon(option) {
	//Метод записывает выбранные иконки на машине пользователя и созраняет их
	//в хранилище, а затем записывает ссыку на новый файл в карточку контакта/пользователя
	let ref = this.storage.ref(option.storageUrl); //получаем загружаемый url для отправки в базу данных для определенного пользователя
	return ref.put(option.file).then(res => {
	    console.log('Файл иконки пользователя успешно записан в хранилище.') ;
	    return ref.getDownloadURL().then(url => {
		return {contactURL : option.contactURL, value : {photoURL : url , imgColor : 'transparent'}};
	    }) ;
	}).catch(err =>{
	    console.log('Ошибка записи иконки пользователя.') ;
	})
    }
    
    setContacts(options){ //параметр - объект, где ключами являются идентификаторы  this.appContext.user.value.uid ,
	//а значениями - объекты контактов, в случае записи контакта или его изменении.
	//В случае удаления контакта, в значении должно быть null
	//Удаление или запись новых или измененных
	return this.database.ref(options.contactURL).update(options.value);
    }
    sendOuterMessage(uid, outer){
	this.database.ref('web-rtc/offers/outers/' + uid +'/'+ outer.messId).set(outer);
    }
    
    subscribeInnerMessages(uid): Observable<any>{
	return new Observable(observer => {
	    this.database.ref('web-rtc/offers/explicit/' + uid).on('value', messages => {
		let mess = messages.val() || {};
		observer.next(Object.values(mess));
	    })
	});
    }
    
    subscribeOuterMessages(uid): Observable<any>{
	return new Observable(observer => {
	    this.database.ref('web-rtc/offers/outers/' + uid).on('value', messages => {
		let mess = Object.values(messages.val() || {});
		if(mess.length){
		    Promise.all(mess.map(async (m : any) => {
			return await this.database.ref('web-rtc/offers/explicit/'+ m.to +'/'+m.messId).once('value').then(messages => {
			    return messages.val();
			})
		    })).then(res => {
			observer.next(res) ;
		    });
		}else{
		    observer.next(mess);
		}
	    })
	});
    }
    
    public checkCreateUser(user) :Promise<Contact | null>{
	//Производит проверку существования внутреннего пользователя базы данныз-
	//т.е. пользователя базы адаптированного под контакт
	return new Promise((res, rej) => {
	    let ref = this.database.ref('/users/' + user.uid);
	    ref.once('value').then(snap => {
		let val = snap.val(), us = new Contact(user);
		if(val) res(val);
		else ref.set(us).then(r => {
		    res(us);
		}).catch(err => rej(err)) ;
	    })
	})
    }
  
}
