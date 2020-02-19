import {Component, Input, OnInit} from '@angular/core';
import {PopupContext} from "../../../Classes/Classes";
import {AppContextService} from "../../../services/app-context.service";

@Component({
  selector: 'app-popup-notifications',
  templateUrl: './popup-notifications.component.html',
  styleUrls: ['./popup-notifications.component.css'],
})
export class PopupNotificationsComponent implements OnInit {

    @Input() public context : PopupContext;
    
  constructor(public appContext : AppContextService) { }

  ngOnInit() {

  }
   
   onInit(context){
       //Запуск таймера удаления уведомления, на случай, если пользователь оставит его без внимание,
       //оно должно быть удалено авоматически.
       if(context.extra && context.extra.timeout) {
	   context.extra.timeId = window.setTimeout(()=>{
	       this.onCancel(context);
	   }, this.appContext.dialogDelay[parseInt(window.localStorage.getItem('dialogDelay'))]);//диапазон отображения диалогов
       }
   }
  
    onCancel(context){
	//Снятие активности контекста
	context.active = false;
	context.extra.timeId && window.clearTimeout(context.extra.timeId);
	context.listener && context.listener();
	//Поиск индекса контекста в коллекции входящих вызовов
	let index = this.appContext.popups.value.findIndex(incoming => incoming.uid === context.uid);
	//Удаление входящего вызова из коллекции для удалении его с экрана пользователя
	if(index > -1){
	    this.appContext.setPopups({type : false, popup : undefined, index : index});
	}
	//Обновление интерфейса
	this.appContext.appChangeRef.detectChanges();
    }

}
