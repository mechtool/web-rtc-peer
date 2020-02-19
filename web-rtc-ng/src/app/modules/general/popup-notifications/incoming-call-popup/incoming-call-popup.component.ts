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
	this.context.extra && this.context.extra.timeout && window.clearTimeout(this.context.extra.timeId);
    }
    onCancel(action){
        //Удаление обработчика, если признаки отказа
	if(/denied|ignored/.test(action)){this.context.listener = undefined}
	this.removeTimeOut();
	//Снятие признака активности предложение в базе данных
	this.context.desc && this.database.setDescriptorOptions({descriptor : this.context.desc, data : {active : false,  action : action}} ) ;
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
	    this.context.extra.timeId = window.setTimeout(()=>{
		this.onCancel('ignored');
	    }, this.appContext.dialogDelay[parseInt(window.localStorage.getItem('dialogDelay'))]);//диапазон отображения диалогов
	}  }
}
