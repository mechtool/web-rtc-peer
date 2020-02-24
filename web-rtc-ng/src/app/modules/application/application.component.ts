import {Component, OnDestroy, OnInit} from '@angular/core';
import {notificationAppearance, routerTransition} from "../../animations/animations";
import {ActivatedRoute} from "@angular/router";
import {AppContextService} from "../../services/app-context.service";

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
  animations : [
      routerTransition,
      notificationAppearance,
  ] ,
})
export class ApplicationComponent implements OnInit, OnDestroy {

    public subscribes = [];
    
  constructor(
      public appContext : AppContextService,
      private route : ActivatedRoute){}
    
    ngOnInit() {
	this.route.data.subscribe((data: { serverData: any[] }) => {
	
	});
    }
    getState(outlet){
	return outlet.activatedRouteData.type;
    }
    ngOnDestroy(){
	this.subscribes.forEach(sub => sub.unsubscribe());

    }
  
}
