import {Component, Input, OnInit} from '@angular/core';
import {IncomingPopupContext, PopupContext} from "../../../../Classes/Classes";
import {AppContextService} from "../../../../services/app-context.service";
import {DatabaseService} from "../../../../services/database.service";
import {PopupNotificationsComponent} from "../popup-notifications.component";

@Component({
  selector: 'app-incoming-call-popup',
  templateUrl: './incoming-call-popup.component.html',
  styleUrls: ['./incoming-call-popup.component.css']
})
export class IncomingCallPopupComponent implements OnInit {
    
    @Input() public context : IncomingPopupContext;
    buttons = [
	{tip : 'Принять', icon : 'check_circle', color : '#00902e', listener : ()=> {
		this.onCancel('accepted');
	    }},
	{tip : 'Отклонить', icon : 'highlight_off', color : '#c02500', listener : ($event)=> {
		this.onCancel('denied');
	    }}
    ];
    constructor(
	public appContext : AppContextService,
	public database : DatabaseService,
	public popupComponent : PopupNotificationsComponent,
    ) {}
    removeTimeOut(){
	if(this.context.extra && this.context.extra.timeout){
	    window.clearTimeout(this.context.extra.timeId);
	    this.context.extra.timeId = false;
	}
    }
    onCancel(action){
        //Удаление обработчика, если признаки отказа
	if(/denied|ignored/.test(action)){
	    this.context.listener = undefined;
	    //Пользователь только неявного предложения его не принял  - записываем это в область входящих сообщений
	    // Явный прием сообщения передается ТОЛЬКО после проверки на возможность отправляющей стороны завершить сообщение ДО поднятие трубки принимающей стороной
	    this.database.changeMessage('/messages/'+ this.appContext.appUser.uid +'/'+ this.context.desc.wid + '/actions',{[this.appContext.appUser.uid ]: action}) ;
	    //Снятие признака активности предложения в базе данных
	    if(this.context.desc) {
	        this.database.setDescriptorOptions({descriptor : this.context.desc, data : {active : false,  action : action}}).then(res => {
	            //todo Закоментировано (временно) по причине не глубокой продуманности логического потока.
		    // Этот функционал дублируется с функционалом вызывающей стороны метод сервиса wed-rtc.service stopVideoChannel(videoContext);
	            //Удаление дескриптора из базы данных
/*		    this.database.database.ref(`web-rtc/${this.context.desc.type}/${this.context.desc.contact.uid}/${this.context.desc.messId}`).remove().then(()=> {
			//Удаление кандидатов
			this.database.database.ref('/web-rtc/candidates/' + this.appContext.appUser.uid).orderByChild('descId').equalTo(this.context.desc.messId).once('value').then(res => {
			    res.forEach(item => {item.ref.remove()}) ;
			
			})
		    });*/
		})
	    }
	}
	this.removeTimeOut();
	this.popupComponent.onCancel(this.context);
    }
    
    async onErrorContactImg(event){
	//Если контакт пользователя сам поменял изображение, то ссылка на него меняется.
	//Вылетает ошибка загрузкти ресурса, поэтому перегружаем ресурс из объекта User
	await this.database.onErrorContactImg(event, this.context);
	return true;
    }
    
    ngOnInit() {
	//Запуск таймера удаления уведомления, на случай, если пользователь оставит его без внимание,
	//оно должно быть удалено авоматически.
	if(this.context.extra && this.context.extra.timeout) {
	    this.context.extra['timeId'] = window.setTimeout(()=>{
		this.onCancel('ignored');
	    }, this.appContext.dialogDelay[parseInt(window.localStorage.getItem('dialogDelay'))] - 10);//диапазон отображения диалогов
	}  }
}
