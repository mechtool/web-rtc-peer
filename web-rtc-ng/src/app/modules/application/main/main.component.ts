import {ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import {routerTransition} from "../../../animations/animations";
import {isPlatformBrowser} from "@angular/common";
import {AppContextService} from "../../../services/app-context.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
    animations : [routerTransition]
})
export class MainComponent implements OnInit, OnDestroy {
    
    public subscribes = [];
    public toolbarButtons = {left : [], right : []};

  constructor(
      public appContext : AppContextService,
      @Inject(PLATFORM_ID) public platformId: Object
  ) {}

  ngOnInit() {
      if(isPlatformBrowser(this.platformId)) {
	  this.toolbarButtons = {
	      left: [
		  {text: 'Сообщения', icon: 'messages', link: '/application/main/messages', tip: 'Сообщения'},
		  {text: 'Контакты', icon: 'people', link: '/application/main/contacts', tip: 'Контакты'},
		  {text: 'Новое сообщение', icon: 'video', link: '/application/main/new-message', tip: 'Новое сообщение'},
	      ],
	      right: [
		  {
		      text: 'Уведомления',
		      icon: 'notifications',
		      link: '/application/main/announcements',
		      tip: 'Уведомления',
		      badge : '',
		  },
		  {text: 'Настройки', icon: 'settings', link: '/application/main/settings', tip: 'Настройки'},
	      ]
	  } ;
          //Подписка на изменение бейжика
	  this.subscribes.push(this.appContext.announcements.subscribe(res => {
	      this.toolbarButtons.right[0].badge = res.filter(el => el.active).length + '' ;
	      this.appContext.appChangeRef.detectChanges();
	  }));
      }
  }
    
    getState(outlet){
	return outlet.activatedRouteData.type;
    }
    ngOnDestroy(){
	this.subscribes.forEach(sub => sub.unsubscribe());
    }
  
}
