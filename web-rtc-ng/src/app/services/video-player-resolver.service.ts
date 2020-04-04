import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {AppContextService} from "./app-context.service";

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerResolverService implements Resolve<any>  {
    
    constructor(public appContext : AppContextService) { }
    
    resolve(): Promise<any> {
	return Promise.all(Object.values(this.appContext.activeMessage.metadata).map((mess : any) => {
	    return new Promise((res, rej)=>{
		let xhr = new XMLHttpRequest();
		xhr.responseType = 'blob';
		xhr.onload = ()=> {
		    res({mess : mess, result : xhr.response});
		};
		xhr.onerror = rej;
		xhr.open('GET', mess.downLoadedUrl);
		xhr.send();
	    })
	})).catch(err => console.log(err));
    }
}


