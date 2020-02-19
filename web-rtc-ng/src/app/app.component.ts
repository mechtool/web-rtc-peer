import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    HostBinding, HostListener,
    Inject, OnDestroy, OnInit,
    PLATFORM_ID,
} from '@angular/core';
import {AppContextService} from "./services/app-context.service";
import {routerTransition} from "./animations/animations";
import {isPlatformBrowser,  registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {FirebaseService} from "./services/firebase.service";
import {AuthFirebaseService} from "./services/auth-firebase.service";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {DatabaseService} from "./services/database.service";
//Регистрация русской локали
registerLocaleData(localeRu, 'ru');

@Component({
    selector: 'app-root',
    templateUrl : 'app.component.html',
    styleUrls: ['app.component.css'],
    animations : [routerTransition] ,
    changeDetection : ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy{
    
    public subscribes = [];
    @HostBinding('class') public appColorClass ;
    //Потеря фокуса
    @HostListener('window:blur') public onBlur(){
	console.log('onblur') ;
	this.sendActiveStatus(false);
    
    }
    //Востановление фокуса
    @HostListener('window:focus') public onFocus(){
	console.log('onfocus') ;
	this.sendActiveStatus(true);
    }
    
    constructor(
        public changeRef : ChangeDetectorRef,
        public appContext : AppContextService,
        public firebaseService : FirebaseService,
        public database : DatabaseService,
        public authService : AuthFirebaseService,
	public iconRegistry : MatIconRegistry,
	public sanitizer : DomSanitizer,
	@Inject(PLATFORM_ID) private platformId: Object) {
    }

    
    sendActiveStatus(status){
	this.appContext.appUser && this.appContext.appUser.uid && this.database.setContacts({contactURL : '/users/' + this.appContext.appUser.uid, value : {online : status}});
    }
    
    ngOnInit() {
    
	//Если браузер
	if (isPlatformBrowser(this.platformId)) {
	    //Передача детектора изменений приложения в общий контекст
	    this.appContext.appChangeRef = this.changeRef;
	    //регистрация иконки в реестре иконок
	    [
		{name : 'attention' , link : '/assets/app-shell/error_outline-24px.svg'},
		{name : 'mail', link : '/assets/app-shell/mail.svg'},
		{name : 'phone', link : '/assets/app-shell/phone.svg'},
		{name : 'settings', link: '/assets/app-shell/settings-outline.svg'},
		{name : 'notifications', link: '/assets/app-shell/notifications-24px.svg'},
		{name : 'person_add', link: '/assets/app-shell/account-check-outline.svg'},
		{name : 'remove_contact', link: '/assets/app-shell/account-off-outline.svg'},
		{name : 'search', link: '/assets/app-shell/magnify.svg'},
		{name : 'edit_contact', link: '/assets/app-shell/account-edit-outline.svg'},
		{name : 'bell_check', link: '/assets/app-shell/bell-check-outline.svg'},
		{name : 'bell_off', link: '/assets/app-shell/bell-off-outline.svg'},
		{name : 'base_clear', link: '/assets/app-shell/delete-24px.svg'},
		{name : 'search_contact', link: '/assets/app-shell/account-search-outline.svg'},
		{name : 'video_call', link: '/assets/app-shell/video-wireless-outline.svg'},
		{name : 'camera-front', link: '/assets/app-shell/camera-retake-outline.svg'},
		{name : 'camera-back', link: '/assets/app-shell/camera-retake.svg'},
		{name : 'audio', link: '/assets/app-shell/microphone.svg'},
		{name : 'audio-off', link: '/assets/app-shell/microphone-off.svg'},
		{name : 'video', link: '/assets/app-shell/video-outline.svg'},
		{name : 'video-off', link: '/assets/app-shell/video-off-outline.svg'},
		{name : 'volume', link: '/assets/app-shell/volume-high.svg'},
		{name : 'volume-off', link: '/assets/app-shell/volume-off.svg'},
		{name : 'volume-plus', link: '/assets/app-shell/volume-plus.svg'},
		{name : 'volume-minus', link: '/assets/app-shell/volume-minus.svg'},
		{name : 'volume-down', link: '/assets/app-shell/volume_down-24px.svg'},
		{name : 'volume-mute', link: '/assets/app-shell/volume_mute-24px.svg'},
		{name : 'reload' , link: '/assets/app-shell/cached-24px.svg'},
		{name : 'phone-hangup', link: '/assets/app-shell/phone-hangup.svg'},
		{name : 'messages', link: '/assets/app-shell/comment-multiple-outline.svg'},
		{name : 'people', link: '/assets/app-shell/account-supervisor-outline.svg'},
		{name : 'check-update', link: '/assets/app-shell/save_alt-24px.svg'},
		{name : 'check-permissions', link: '/assets/app-shell/perms.svg'},
		{name : 'exit', link: '/assets/app-shell/exit-to-app.svg'},
		{name : 'install_device', link: '/assets/app-shell/tumblr-reblog.svg'},
		
	    ].forEach(item => {
		this.iconRegistry.addSvgIcon(item.name, this.sanitizer.bypassSecurityTrustResourceUrl(item.link));
	    }) ;
	    //Инициализация сервисов Firebase, платформа - это браузер
	    this.firebaseService.initialize();
	    //Инициализация элементов базы
	    this.database.initialize();
	    //Инициализация сервиса аутентификации пользователя через сервисы Firebase
	    this.authService.initialize();
	    //Обработка события установки приложения на экран устройства
	    window.addEventListener("beforeinstallprompt", (beforeInstallPromptEvent) => {
		//Управление переходит в этот обработчик, если приложение еще не установлено на экран (каждый раз)
		//и не переходит, когда приложение уже установлено
		beforeInstallPromptEvent.preventDefault(); // Предотвратить немедленный запуск отображения диалога
		this.appContext.beforeInstall.next(beforeInstallPromptEvent);
	    });
	    //прослушивание события 'appinstall' для определения установки приложения на экран устройства
	    window.addEventListener("appinstalled", (evt) => {
		//Управление переходит в этот обработчик сразу (next tick) после принятия
		//предложения об установки приложения один раз и больще никогда не переходит.
		//приложение уже установлено на экран устройства
		this.appContext.beforeInstall.next(false);
	    });
	    this.subscribes.push(this.appContext.appColorClass.subscribe(colorTheme => {
		if (!/null|undefined/.test(colorTheme)) {
		    this.appColorClass = colorTheme;
		    this.changeRef.markForCheck();
		}
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
