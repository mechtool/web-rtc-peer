import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SmsService {
  //todo Реализация сигнализации через sms сообщения приостановлена, по причине Для включения возможности передачи sms со ссылками, необходимо заключать безплатный договор в котором нудно указывать реквизиты юридического лица или ИП (см app.js)
  
    constructor(public http : HttpClient) { }
  //Отправка Sms  сообщений на телефоны, указанные в предложении
  public sendSms(offer){
     this.http.post('/send/sms', {
         sender : offer.contact.name || offer.contact.displayName || offer.contact.phoneNumber || offer.contact.email,
	 from : offer.sender.uid,
	 to : offer.contact.uid,
	 date : Date.now(),
	 phone : offer.contact.phoneNumber
     }).subscribe(res => {
     
     })
  }
}
