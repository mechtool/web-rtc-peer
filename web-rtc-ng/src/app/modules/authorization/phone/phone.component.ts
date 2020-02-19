import {ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AppContextService} from "../../../services/app-context.service";
import {Router} from "@angular/router";
import {FirebaseService} from "../../../services/firebase.service";

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit, OnDestroy{
    
    public subscriptions = [];
    public phoneBlockClass = true;
    public phoneCodeError : boolean | string = false;
    public phoneButtonText = 'Проверить номер';
    public cursor = 'not-allowed';
    public activeStage = true;
    public errors = {"auth/captcha-check-failed":"Проверка рекапчи отрицательна." , "auth/invalid-phone-number" : "Некорректный номер телефона.", "auth/missing-phone-number" : "Отсутствует номер телефона.", "auth/quota-exceeded" : "Превышена квота.", "auth/user-disabled" : "Пользователь неактивен.", "auth/operation-not-allowed" : "Опрерация не разрешена.", "timeout" : "Тайт аут рекапчи истек."};
    
    public states = [
	{class : 'us', code : '+1', src : '/assets/flags-24/002-flag.png', alt : 'Флаг Америки'},
	{class : 'arm', code : '+374', src : '/assets/flags-24/007-armenia.png', alt : 'Флаг Армении'},
	{class : 'ru', code : '+7', src : '/assets/flags-24/001-russia.png', alt : 'Флаг России'},
	{class : 'kz', code : '+7', src : '/assets/flags-24/006-kazakhstan.png', alt : 'Флаг Казахстана'},
	{class : 'geo', code : '+995', src : '/assets/flags-24/009-georgia.png' , alt : 'Флаг Грузии'},
	{class : 'de', code : '+49', src : '/assets/flags-24/004-germany.png', alt : 'Флаг Германии'},
	{class : 'uk', code : '+380', src : '/assets/flags-24/003-ukraine.png', alt : 'Флаг Украины'},
	{class : 'bel', code : '+375', src : '/assets/flags-24/005-belarus.png', alt : 'Флаг Беларуссии'},
	{class : 'est' , code : '+372', src : '/assets/flags-24/008-estonia.png', alt : 'Флаг Эстонии'},
    ] ;
    
    public selected = this.states.find((el) => {
	return el.class === window.navigator.language.substring(0, window.navigator.language.indexOf('-'));
    });
    public phoneGroup = new FormGroup({
	codeControl: new FormControl(this.selected, [Validators.required]),
	phoneControl: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
    });
    
    constructor(
	public appContext : AppContextService,
	public router : Router,
	private ngZone : NgZone,
	public changeDetectorRef : ChangeDetectorRef,
	public firebaseService : FirebaseService,
    ) {}
    
    ngOnInit(): void {
        let that = this;
	this.subscriptions.push(this.phoneGroup.statusChanges.subscribe(res => {
	    if(res === 'VALID') {
		this.cursor = 'pointer';
		this.activeStage = false;
		this.appContext.recaptchaVerifier = this.appContext.recaptchaVerifier || new this.firebaseService.firebase.auth.RecaptchaVerifier('phone-ready', {
		    'size': 'invisible',
		    'callback': this.onClickPhoneButton,
		    'expired-callback': function (err) {
			console.log('Timeout : recaptcha')  ;
			that.phoneCodeError = 'Ожидание ввода истекло.';
			let t = setTimeout(()=> {
			    clearTimeout(t);
			    that.onCancelButton();
			}, 1000);
			return true;
		    }
		}) ;
		this.appContext.recaptchaVerifier.render().then(res => {
		    console.log('***');
		})
		    .catch(err=> {
			console.error(err);
			this.phoneCodeError = this.errors[err.code] || 'Ошибка работы рекапчи.'
		    });
	    }else if(res === 'INVALID'){
		this.cursor = 'not-allowed';
		this.activeStage = true;
	    }
	    //this.changeDetectorRef.markForCheck();
	}));
    }
    
    ngOnDestroy(): void {
	this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    
    onClickPhoneButton() {
        let that = this;
	if (this.phoneGroup.valid) {
	    this.activeStage = true;
	    this.cursor = 'not-allowed';
	   this.changeDetectorRef.detectChanges();
	    this.firebaseService.auth.signInWithPhoneNumber(this.phoneGroup.get('codeControl').value.code + this.phoneGroup.get('phoneControl').value, this.appContext.recaptchaVerifier).then((confirmation) => {
		//Sms отправлено. Выдать оповещение пользователю о необходимости
		// ввести код из полученного сообщения в форму проверки sms кода
		// confirmationResult.confirm(code).
		this.appContext.confirmation = confirmation;
		this.ngZone.run(() => {
		    this.router.navigateByUrl('/authorization/sms').then(res => {
			this.appContext.recaptchaVerifier.clear();
		    }).catch(err => console.error(err))
		});
	    }).catch(function (err) {
		console.error(err);
		that.phoneCodeError = that.errors[err.code] || 'Ошибка входа в приложение.';
		//sms не отправлено
		that.activeStage = false;
		that.cursor = 'pointer';
		that.phoneGroup.setValue({phoneControl: ''});
	    })
	}
    }
    
    onCancelButton(){
	//Переход на страницу выбора провайдера
	this.router.navigateByUrl('/authorization').then();
    }

}
