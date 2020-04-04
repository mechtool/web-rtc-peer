import {Component, OnDestroy } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AppContextService} from "../../../../services/app-context.service";
import {DatePipe} from "@angular/common";
import {DatabaseService} from "../../../../services/database.service";

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements  OnDestroy {

    public comm = {'PC' : '0.5%', 'AC' : '2%'};
    private subscriptions = [];
    public parseFloat = parseFloat;
    public now = Date.now();
    public smsPaymentGroup = new FormGroup({
	sumControl: new FormControl('10', [Validators.required, Validators.min(10)]),
	paymentType : new FormControl('PC'),
    });
  constructor(
      public appContext : AppContextService,
      public database : DatabaseService,
      public datePipe : DatePipe) { }
      
      ngOnDestroy(): void {
	  this.subscriptions.forEach(sub => sub.unsubscribe());
      }
    
    onKeyDown($event){
       return /Backspace|[0-9]/.test($event.key)    ;
    }
}
