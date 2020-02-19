import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AppContextService} from "./app-context.service";

@Injectable({
  providedIn: 'root'
})
export class AppResolverService implements Resolve<any> {

  constructor(private http : HttpClient,
	      private appContext : AppContextService) { }
    
  resolve(): Promise<any> {
      return Promise.all([
	  //Запрос файлов конфигураций
	  this.http.get('/assets/js/apiKeys.json').toPromise().then(res => {
	  	this.appContext.apiKey = res ;
	      return res;
      }),
	  //Запрс конфигурации turn сервера
	  this.http.get('/assets/js/stunTurnConfig.json').toPromise().then(res => {
	      this.appContext.stunTurnConfig = res;
	      return res;
	  })
      ]).catch(err => console.log(err));
    }
  
}
