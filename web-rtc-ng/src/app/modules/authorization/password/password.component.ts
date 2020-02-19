import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FirebaseService} from "../../../services/firebase.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AppContextService} from "../../../services/app-context.service";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
    
    public emailButtonText = 'Проверить адрес';
    public emailPassError : boolean | string = false;
    public activeStage = true;
    public cursor = 'not-allowed';
    public errors = {"auth/invalid-email" : "Неверный email",  "auth/user-disabled" : "Пользователь не активный", "auth/user-not-found" : "Пользователь не найден.", "auth/wrong-password" : "Неверный пароль.", "auth/email-already-in-use" : "Email уже используется.", "auth/operation-not-allowed": "Операция не разрешена.", "auth/weak-password": "Слабый пароль.", "auth/missing-continue-uri" : "Отсутствует url успешного перехода.", "auth/invalid-continue-uri" : "Не корректный url успешного перехода.", "auth/unauthorized-continue-uri": "Url успешного перехода не находиться в белом списке."} ;
    
    constructor(
	public router : Router ,
	public appContext : AppContextService,
	private firebaseService : FirebaseService,
	public changeRef: ChangeDetectorRef,
    ) {
	this.emailPassGroup.statusChanges.subscribe(res => {
	    	this.activeStage = res !== 'VALID';
	    	this.cursor = res === 'VALID' ? 'pointer' : 'not-allowed';
	})
    }
    
    ngOnInit() {
    }
    public emailPassGroup = new FormGroup({
	emailControl: new FormControl('', [Validators.required, Validators.email]),
	passControl: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
    
    onClickRemainderPass(){
	
        let emailValue = this.emailPassGroup.get("emailControl").value;
	emailValue && this.firebaseService.auth.sendPasswordResetEmail(emailValue, {url : 'https://web-rtc-client.firebaseapp.com/',  handleCodeInApp: true}).then(res => {
	    //Пароль отправлен - направить пользователю сообщение о необходимости проверить почту
	    this.emailPassError = 'Проверте почту для получения дальнейших инструкций.'
	}).catch(err => {
	    this.emailPassError = this.errors[err.code] || 'Ошибка при отправке подтверждения.'
	    //Отобразить полученную ошибку
	})
	
    }
    async onClickEmailButton(){
	if(this.emailPassGroup.valid){
	    let val = this.emailPassGroup.value;
	    this.cursor = 'not-allowed';
	    this.activeStage = true;
	    this.emailPassError = 'Попытка входа в приложение.';
	    await this.firebaseService.auth.signInWithEmailAndPassword(val.emailControl, val.passControl).then(()=>{
		this.emailPassError = 'Пользователь аутентифицирован.';
	    }).catch(async (err) => {
		if(err.code.indexOf('user-not-found') >= 0){
		    this.emailPassError = 'Регистрация нового пользователя.';
		    await this.firebaseService.auth.createUserWithEmailAndPassword(val.emailControl, val.passControl).then(res =>{
			this.emailPassError = 'Пользователь создан.';
		    }).catch(err => {
			console.error(err);
			this.emailPassError =  this.handleError(err.code);
		    })
		}else {
		    this.emailPassError = this.handleError(err.code);
		}
	    });
	    this.cursor = 'pointer';
	    this.activeStage = false;
	    this.changeRef.detectChanges();
	}
    }
    
    handleError(code){
	return this.errors[code] || 'Ошибка при аутентификации';
    }
    
    onCancelButton(){
	this.router.navigateByUrl('/authorization').then();
    }

}
