import { Injectable } from '@angular/core';
import {OverlayContainer} from "@angular/cdk/overlay";
import {AppContextService} from "./app-context.service";

@Injectable({
  providedIn: 'root'
})
export class ColorThemeService {
    
    public colorItems = [
	{colorClass : 'first-theme', backgroundColor : '#ffeb3b', color : '#cca023', light: 'rgba(255,238,88,0.71)', active : false, iconColor : '#000', even : 'rgba(255,238,88,0.11)', odd : 'rgba(255,238,88,0.15)', highlight : 'rgba(255,238,88,0.36)'},
	{colorClass : 'second-theme', backgroundColor : '#2196f3', color : '#2d74aa',light: 'rgba(66,165,245,0.51)', active : true, iconColor : '#fff', even : 'rgba(66,165,245,0.05)', odd : 'rgba(66,165,245,0.07)', highlight : 'rgba(66,165,245,0.26)'},
	{colorClass : 'third-theme', backgroundColor : '#ff5722', color : '#c13316',light: 'rgba(255,114,69,0.51)', active : false, iconColor : '#fff', even : 'rgba(255,112,67,0.05)', odd : 'rgba(255,112,67,0.11)', highlight : 'rgba(255,112,67,0.25)'},
	{colorClass : 'forth-theme', backgroundColor : '#3f51b5', color : 'rgba(39,23,135,0.92)',light: 'rgba(92,107,192,0.51)', active : false, iconColor : '#fff', even : 'rgba(92,107,192,0.07)', odd : 'rgba(92,107,192,0.11)', highlight : 'rgba(92,107,192,0.26)'},
    ] ;

    constructor(
      public overlay : 	OverlayContainer,
      public appContext : AppContextService,
) { }
    
    setAppTheme(selector) {
	this.overlay.getContainerElement().classList.add(selector);
	window.localStorage.setItem('appColorClass', selector);
	this.appContext.appColorClass.next(selector);
	return selector;
    }
    getThemeColor(type){
        //Получения цвета приложения по имени свойства объекта цвета: backgroundColor , color , light
        return this.colorItems.filter(color => color.colorClass === this.appContext.appColorClass.value)[0][type];
    }
}
