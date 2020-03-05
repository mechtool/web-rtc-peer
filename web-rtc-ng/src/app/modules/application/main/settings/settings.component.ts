import {Component, Inject, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import {AppContextService} from "../../../../services/app-context.service";
import {Contact} from "../../../../Classes/Classes";
import {HttpClient} from "@angular/common/http";
import {SwUpdateService} from "../../../../services/sw-update.service";
import {DatabaseService} from "../../../../services/database.service";
import {SettingDefaultService} from "../../../../services/setting-default.service";
import {isPlatformBrowser} from "@angular/common";
import {PushNotificationService} from "../../../../services/push-notification.service";
import {AuthFirebaseService} from "../../../../services/auth-firebase.service";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit,  OnDestroy {
    
    public settings ;
    public user : Contact;
    private subscriptions = [];

    constructor(
      public appContext : AppContextService,
      public http : HttpClient,
      public swUpdate : SwUpdateService,
      public database : DatabaseService,
      public settingsDef : SettingDefaultService,
      public pushService : PushNotificationService,
      public authService : AuthFirebaseService,
      public router : Router,
      @Inject(PLATFORM_ID) public platformId: Object,
      ) {
 
  }
  
  getHardware(type){
      return this.appContext.hardware.value.filter(hard => {return type === hard.kind});
  }
  
  ngOnInit(){
        if (isPlatformBrowser(this.platformId)) {
            
            this.settings = {
	      general: [
		  {type: 5, optionName: 'Цветовая тема'},
		  {
		      type: 0,
		      optionName: 'Модель вызова ',
		      value: this.settingsDef.callModel[parseInt(window.localStorage.getItem('callModel'))].text,
		      options: this.settingsDef.callModel,
		      listener: (event) => {
			  window.localStorage.setItem('callModel', (this.settingsDef.callModel.findIndex(model => {
			      return model.text === event.text;
			  }) + ''));
		      }
		  },
		  {
		      type: 0,
		      optionName: 'Видео вход',
		      options: this.getHardware('videoinput'),
		      value: JSON.parse(window.localStorage.getItem('videoinput')).text,
		      listener: (option) => {
			  window.localStorage.setItem('videoinput', JSON.stringify(option));
		      }
		  },
		  {
		      type: 0,
		      optionName: 'Аудио вход',
		      options: this.getHardware('audioinput'),
		      value: JSON.parse(window.localStorage.getItem('audioinput')).text,
		      listener: (option) => {
			  window.localStorage.setItem('audioinput', JSON.stringify(option));
		      }
		  },
		  {
		      type: 0,
		      optionName: 'Аудио выход',
		      options: this.getHardware('audiooutput'),
		      value: JSON.parse(window.localStorage.getItem('audiooutput')).text,
		      listener: (option) => {
			  window.localStorage.setItem('audiooutput', JSON.stringify(option));
		      }
		  },
		  {
		      type: 0,
		      optionName: 'Обновления',
		      value: this.settingsDef.update[parseInt(window.localStorage.getItem('update'))].text,
		      options: this.settingsDef.update,
		      listener: (event) => {
			  window.localStorage.setItem('update', (this.settingsDef.update.findIndex(model => {
			      return model.text === event.text;
			  }) + ''));
		      }
		  },
		  {
		      type: 0,
		      optionName: 'Сервер Stun/Turn',
		      value: this.settingsDef.stunTurn[parseInt(window.localStorage.getItem('stunTurn'))].text,
		      options: this.settingsDef.stunTurn,
		      listener: (event) => {
			  window.localStorage.setItem('stunTurn', (this.settingsDef.stunTurn.findIndex(model => {
			      return model.text === event.text;
			  }) + ''));
		      }
		  },
		  {
		      type: 0,
		      optionName: 'Отображать диалоги',
		      value: this.settingsDef.dialogDelay[parseInt(window.localStorage.getItem('dialogDelay'))].text,
		      options: this.settingsDef.dialogDelay,
		      listener: (event) => {
			  window.localStorage.setItem('dialogDelay', (this.settingsDef.dialogDelay.findIndex(model => {
			      return model.text === event.text;
			  }) + ''));
		      }
		  },
		  {
		      type: 0,
		      optionName: 'Продолжительность вызова',
		      value: this.settingsDef.callTime[parseInt(window.localStorage.getItem('callTime'))].text,
		      options: this.settingsDef.callTime,
		      listener: (event) => {
			  window.localStorage.setItem('callTime', (this.settingsDef.callTime.findIndex(model => {
			      return model.text === event.text;
			  }) + ''));
		      }
		  },
		  {
		      type: 0,
		      disabled: window.localStorage.getItem('callSave') === '3',
		      optionName: 'Сохранение вызова',
		      value: this.settingsDef.callSave[parseInt(window.localStorage.getItem('callSave'))].text,
		      options: this.settingsDef.callSave,
		      listener: (event) => {
			  window.localStorage.setItem('callSave', (this.settingsDef.callSave.findIndex(model => {
			      return model.text === event.text;
			  }) + ''));
		      }
		  },
		  {
		      type: 0,
		      disabled: true,
		      optionName: 'Ограничение контактов',
		      value: this.settingsDef.contactRestriction[parseInt(window.localStorage.getItem('contactRestriction'))].text,
		      options: this.settingsDef.contactRestriction,
		      listener: (event) => {
			  window.localStorage.setItem('contactRestriction', (this.settingsDef.contactRestriction.findIndex(model => {
			      return model.text === event.text;
			  }) + ''));
		      }
		  },
	      ],
	
	      additional : [
		  {
		      type: 3,
		      optionName: 'Редактировать контакты',
		      value: JSON.parse(window.localStorage.getItem('contactEdit')),
		      listener: (option) => {
			  window.localStorage.setItem('contactEdit', JSON.stringify(option.checked));
		      }
		  },
		  {
		      type: 3,
		      optionName: 'Дублировать вызов',
		      value: JSON.parse(window.localStorage.getItem('duplicateCall')),
		      listener: (option) => {
			  window.localStorage.setItem('duplicateCall', JSON.stringify(option.checked));
		      }
		  },
		  {
		      type: 3,
		      optionName: 'Оптимизировать вызов',
		      value: JSON.parse(window.localStorage.getItem('optimizeCall')),
		      listener: (option) => {
			  window.localStorage.setItem('optimizeCall', JSON.stringify(option.checked));
		      }
		  },
		  {
		      type: 4, optionName: 'Перезагрузить', icon: 'reload', text: 'Перезагрузить', disabled : new BehaviorSubject(false),  listener: () => {
			  window.location.reload();
		      }
		  },
		  {
		      type: 4, optionName: 'Настройка SMS', icon: 'outgoing', text: 'Настройка SMS', disabled : false ,  listener: () => {
			this.router.navigate(['application','main','sms']).catch(err => console.log(err));
		      }
		  },
		  {
		      type: 4, optionName: 'Проверить обновление', icon: 'check-update', text: 'Проверить обновление', disabled : new BehaviorSubject(false), listener: () => {
			  this.swUpdate.checkForUpdate();
		      }
		  },
		  {
		      type: 4, optionName: 'Проверить разрешения', icon: 'check-permissions', text: 'Проверить разрешения', disabled : new BehaviorSubject(false), listener: async () => {
			  await this.pushService.checkSubscription();
			  await navigator.mediaDevices.getUserMedia({audio: true, video: true})
			      .then(stream => {
			      stream.getTracks().forEach(tr => tr.stop());
			  }).catch(err => {
			      console.log('Пользователь отклонил разрешение на использование камеры и микрофона.')
			  }); }
		  },
		  {
		      type: 4, optionName: 'Установить на устройство', icon: 'install_device', text: 'Установить на устройство', disabled : new BehaviorSubject(false),  listener: () => {
			  typeof this.appContext.beforeInstall.value == 'boolean' || this.appContext.beforeInstall.value.prompt();
		      }
		  },
		  {
		      type: 4, optionName: 'Выйти из приложения', icon: 'exit', text: 'Выйти', disabled : new BehaviorSubject(false), listener: (option) => {
		             this.authService.onSingOut();
			}
		  },
		  {
		      type: 4, optionName: 'Отчистить базу', icon: 'base_clear', text: 'Отчистить', disabled : new BehaviorSubject(false), listener: (option) => {
			  this.database.getRef('/web-rtc').set(null);
		      }
		  },
	      ],
	      service: [
		  //время активности дескриптора, после которого дескриптор не может быть получениз базы данных
		  {
		      type: 0,
		      optionName: 'Активность дескриптора',
		      value: this.settingsDef.descriptorExpiration[parseInt(window.localStorage.getItem('descriptorExpiration'))].text,
		      options: this.settingsDef.descriptorExpiration,
		      listener: (event) => {
			  window.localStorage.setItem('descriptorExpiration', (this.settingsDef.descriptorExpiration.findIndex(model => {
			      return model.text === event.text;
			  }) + ''));
		      }
		  },
	      ]
	  };
   
	this.subscriptions.push(this.appContext.user.subscribe(user => {
	    this.user = user || new Contact({name : 'Unknown'});
	}));
	//Подписка на изменение активности кнопки установки приложения на экран
	this.subscriptions.push(this.appContext.beforeInstall.subscribe(res => {
	    this.settings.additional.find(sett => {
		return sett.optionName === 'Установить на устройство';
	    }).disabled.next(!res);
	}));
      }
  }
  
  ngOnDestroy(){
      this.subscriptions.forEach(sub => sub.unsubscribe()) ;
  }

}
