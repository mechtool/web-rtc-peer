import { Injectable } from '@angular/core';
import {AppContextService} from "./app-context.service";

@Injectable({
  providedIn: 'root'
})
export class SettingDefaultService {
    
    //Режим вызова
    public callModel = [{text : 'Sms', disabled : true}, {text : 'Push'}];
    //Обновления
    public update = [{text : 'Проверять и обновлять'}, {text : 'Проверять'}, {text : 'Не проверять'}];
    public contactRestriction = [{text : '1'}, {text : 'Auto'}] ;
    public callSave =  [{text : 'Не сохранять'}, {text : 'Сохранять'}, {text : 'Не поддерживается', disabled : true}] ;
    public stunTurn =  [{text : 'Default'}, {text : 'Host'}, {text : 'Xirsys'}] ;
    public dialogDelay =  [{text : '20 сек'}, {text : '30 сек'},{text : '40 сек'}] ;
    //время активности дескриптора, после которого дескриптор не может быть получен из базы данных
    public descriptorExpiration =  [{text : '180 сек'}, {text : '240 сек'},{text : '300 сек'}] ;
    //Продолжительность вызова контакта, после которого происходит изменение статуса предложения на "Не принятое"
    public callTime =  [{text : '20 сек'}, {text : '30 сек'},{text : '40 сек'}] ;
    
    constructor(public appContext : AppContextService) { }
    
    initialize(){
	return new Promise((res, rej)=>{
	    //Установка некоторых настроек по - умолчанию
	    //Установка настройки использования библиотеки оповещений
	    let appColorClass      =  window.localStorage.getItem('appColorClass'),
		callModel          = window.localStorage.getItem('callModel'),
		update             = window.localStorage.getItem('update'),
		videoinput         = window.localStorage.getItem('videoinput') ,
		audioinput         = window.localStorage.getItem('audioinput'),
		audiooutput        = window.localStorage.getItem('audiooutput'),
		contactEdit        = window.localStorage.getItem('contactEdit'),
		duplicateCall      = window.localStorage.getItem('duplicateCall') ,
		optimizeCall       = window.localStorage.getItem('optimizeCall') ,
		contactRestriction = window.localStorage.getItem('contactRestriction') ,
		stunTurn           =  window.localStorage.getItem('stunTurn') ,
		callSave           = window.localStorage.getItem('callSave'),
		callTime           = window.localStorage.getItem('callTime'),
		descriptorExpiration = window.localStorage.getItem('descriptorExpiration'),
		dialogDelay          = window.localStorage.getItem('dialogDelay');
	    
	    appColorClass || window.localStorage.setItem('appColorClass', 'second-theme' );
	    callModel     || window.localStorage.setItem('callModel', '1');
	    update        || window.localStorage.setItem('update',  '0');
	    contactEdit   || window.localStorage.setItem('contactEdit', 'false');
	    duplicateCall || window.localStorage.setItem('duplicateCall', 'false');
	    optimizeCall  || window.localStorage.setItem('optimizeCall', 'false');
	    contactRestriction  || window.localStorage.setItem('contactRestriction', '0');
	    stunTurn      || window.localStorage.setItem('stunTurn', '0') ;
	    callSave      || window.localStorage.setItem('callSave',  'MediaRecorder' in window ? '0' : '2');
	    dialogDelay   || window.localStorage.setItem('dialogDelay', '0');
	    callTime      || window.localStorage.setItem('callTime', '0');
	    descriptorExpiration || window.localStorage.setItem('descriptorExpiration', '0');
	    
	    this.appContext.hardware.subscribe(hardware => {
		let types = ['videoinput', 'audioinput'];
		if(types.every(type => {
		    return hardware.some(hard => {
			return hard.kind === type ;
		    })
		})){
		    videoinput || window.localStorage.setItem('videoinput', JSON.stringify(hardware.find(el => el.kind === 'videoinput') || {'text' : 'Нет данных', 'disabled' : true}));
		    audioinput  || window.localStorage.setItem('audioinput', JSON.stringify(hardware.find(el => el.kind === 'audioinput') || {'text' : 'Нет данных', 'disabled' : true}));
		    audiooutput || window.localStorage.setItem('audiooutput', JSON.stringify(hardware.find(el => el.kind === 'audiooutput')  || {'text' : 'Нет данных', 'disabled' : true}));
		    
		}else{
		    //Выдать предупреждение о том, что нет аппаратного средства или средств
		    this.appContext.notifications.push({listener : ()=>{
		        window.location.reload()}, state : 'noHardware' , disabled: false
		    });
		}
		res();
	    }) ;
	})
    }
}
