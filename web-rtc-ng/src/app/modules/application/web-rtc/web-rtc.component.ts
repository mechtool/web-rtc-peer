import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {AppContextService} from "../../../services/app-context.service";
import {NavigationStart, Router, RouterEvent} from "@angular/router";
import {filter} from "rxjs/operators";
import {Answer, Candidate, Offer, VideoContext, WebRtcConnectionContext} from "../../../Classes/Classes";
import {BehaviorSubject, Subject} from "rxjs";
import {WebRtcService} from "../../../services/web-rtc.service";
import {DatabaseService} from "../../../services/database.service";
import {StatusColorsService} from "../../../services/status-colors.service";
declare var SimplePeer: import('simple-peer').SimplePeer;

@Component({
  selector: 'app-web-rtc',
  templateUrl: './web-rtc.component.html',
  styleUrls: ['./web-rtc.component.css']
})
export class WebRtcComponent implements OnInit, OnDestroy, AfterViewInit {
    
    public progress = true;
    public subscriptions = [];
    //Адреса пиров, которым посылаем явные предложения, для того, что бы при завершении вызова снять обработчики событий
    public offerChangedUrls = [];
    //Получение настроек
    public duplicateCall = JSON.parse(window.localStorage.getItem('duplicateCall'));
    public optimizeCall =  JSON.parse(window.localStorage.getItem('optimizeCall'));
    public video = JSON.parse(window.localStorage.getItem('videoinput'));
    public micro = JSON.parse(window.localStorage.getItem('audioinput'));
    public audio = JSON.parse(window.localStorage.getItem('audiooutput'));
    public flexDirection = 'column';
    //Установка ограничений
    public constraints = {
	audio: {deviceId: (this.audio && this.audio.deviceId ? this.audio.deviceId : false) , echoCancellation : true, autoGainControl : true, noiseSuppression: true},
	video: {deviceId: (this.video && this.video.deviceId  ? this.video.deviceId : false)}
    };

  constructor(
      public router : Router,
      public webRtcService : WebRtcService,
      public appContext : AppContextService,
      public database : DatabaseService,
      public statusColor : StatusColorsService,
      ) { }

  ngOnInit() {
      //Подписка на события запуска нового маршрута для определения повторного запуска
      //компонента и создания компонента контекста
      this.router.events.pipe(filter((event: RouterEvent) => event instanceof NavigationStart)).subscribe((event) => {
	  //анализирование  event.url
      });
      this.startConnections();
  }
  
  ngAfterViewInit(): void {
      this.progress = false;
  }
    
    ngOnDestroy(): void {
      this.subscriptions.forEach(sub => sub.unsubscribe());
      this.offerChangedUrls.forEach(url => this.database.getRef(url).off());
  }
    
    //Обработчик ответов и неявных предложений
  handleDescriptor(webRtcConnectionContext, snap){
      let desc = snap.val();
      desc.type.indexOf('answers') > -1 && this.setDescriptor(webRtcConnectionContext.pcConnection, desc);
      desc.type.indexOf('offers') > -1 && this.startConnections(desc);
  }

  dispatchDescriptor(webRtcConnectionContext){
      let that = this,
	  desc = webRtcConnectionContext.descriptor,
	  cans = webRtcConnectionContext.candidates;
      if(desc.optimize && cans.length){
	  desc.candidates = this.setCandidates(desc, cans);
	  sendAnswerOffer(desc);
      }else if(!desc.optimize){
	  sendAnswerOffer(desc);
	  if(cans.length){
	      this.setCandidates(desc, cans).forEach(candidate => {
		  this.database.sendDescriptor(candidate).catch(this.onError)
	      })
	  }
      }
     function sendAnswerOffer(desc){
	 
          if(/answers|offers\/implicit/.test(desc.type)){
	     that.database.sendDescriptor(desc);
	 }else {
	     that.webRtcService.sendOffer(webRtcConnectionContext).then(res => {
		 //Установка обработчиков изменение статуса приема предложения.
		 //Если статус приема предложения изменился, значит удаленный пир с ним контактировал различным образом
		 //(принял/отклонил/пропустил). Это обработчик нам сигнализирует об этом, что поможет в определении нетронутых
		 //предложений при отказе инициатора от вызова, в момент, когда удаленный пир еще не поднял трубку.
		 // Обработчик срабатывает при контакте удаленного пира с предложением, что не требует проверки этого явно.
		 //Результат проверяется сразу при необходимости.
		 that.setOfferContactListener(webRtcConnectionContext);
	     });
	 }
	 
          if(desc.type.indexOf('offers') > -1){
              //Установка обработчиков получения ответов
	     that.setAnswerListener(webRtcConnectionContext);
	 }
     }
  }
  
    setCandidates(descriptor, candidates){
         let newCandidates = [];
         candidates.forEach(cand => {
	     newCandidates.push( new Candidate({
		 wid : descriptor.wid,
		 contact : descriptor.contact,
		 date : Date.now(),
		 sender : this.appContext.user.value,
		 descId : descriptor.messId,
		 type: 'candidates',
		 desc: cand,
		 active : true,
		 optimize : descriptor.optimize,
		 uid : descriptor.uid,
	     }));
	 }) ;
	return newCandidates;
    }
    
    setOfferContactListener(webRtcConnectionContext){
        let url = '/web-rtc/offers/explicit/'+ webRtcConnectionContext.uid;
        this.offerChangedUrls.push(url);
	this.database.getRef(url).orderByChild('messId').equalTo(webRtcConnectionContext.descriptor.messId).on('value', function(webRtcConnectionContext, snap){
	    let val = snap.val();
	    val && (webRtcConnectionContext.webRtcContext.extra['actions'] = {[webRtcConnectionContext.uid] : {action : (Object.values(val)[0] as Offer).action , url : url + '/' + webRtcConnectionContext.descriptor.messId}});
	}.bind(this, webRtcConnectionContext));
    }
    
    setAnswerListener(webRtcConnectionContext){
	this.database.getRef('/web-rtc/answers/'+ this.appContext.appUser.uid).orderByChild("descId").equalTo(webRtcConnectionContext.descriptor.messId).once('child_added', this.handleDescriptor.bind(this, webRtcConnectionContext));
    }
    
    setImplicitListener(id){
	this.database.getRef('/web-rtc/offers/implicit/'+ this.appContext.appUser.uid).orderByChild("descId").equalTo(id).once('child_added', this.handleDescriptor.bind(this, id));
    }
    
  async startConnections(desc?){
    
      let webRtcContext = this.appContext.webRtcContexts.getContext(this.appContext.contextId);
      if(!webRtcContext) return ;
      webRtcContext.localStream || (webRtcContext.localStream = await navigator.mediaDevices.getUserMedia(this.constraints));
      let sender = desc ? desc.sender : webRtcContext.sender,
	  receivers = webRtcContext.receivers.value,
	  messageContacts = desc ? [sender] : [sender].concat(receivers);
      if(messageContacts){
	  //Находим индекс локального пользователя
	  let localIndex = messageContacts.findIndex(contact => contact.uid === this.appContext.user.value.uid);
	  //Запуск всех потоков для каждого контакта
	  messageContacts.forEach((contact, contactIndex)=> {
	      let webRtcConnectionContext : WebRtcConnectionContext ,
		  local = this.appContext.appUser.uid === contact.uid,
		  initiator = desc ? false : ((webRtcContext.uid === this.appContext.appUser.uid ) || localIndex < contactIndex);
	      if(localIndex <= contactIndex || (!initiator && contactIndex == 0)) {
		  webRtcConnectionContext = webRtcContext.webRtcConnections[contact.uid] = new WebRtcConnectionContext({uid: contact.uid});
		  webRtcConnectionContext.webRtcContext = webRtcContext;
		  webRtcConnectionContext.uid = contact.uid;
		  //Видеоконтекст для каждого контакта
		  webRtcConnectionContext.videoContext = new VideoContext({
		      wid: webRtcContext.wid,
		      contact: new BehaviorSubject(local ? this.appContext.appUser : contact),
		      channelClass : local ? 'local' : "remote",
		      messageUrl : webRtcContext.desc.messageUrl,
		      className: local ? {
			  [contact.uid + ' local video-context']: true,
			  active: false,
			  fixed: false,
			  closed : false,
			  pulse: initiator
		      } : {[contact.uid + ' remote video-context']: true, active: false},
		      stream: new BehaviorSubject(local ? webRtcContext.localStream : undefined),
		      local: local,
		      settings: {type: 'settings', video: 1, audio: 1},
		      dataChannel: {data: new Subject(), channel: undefined},
		  });
		  local && webRtcContext.videoCollection.push(webRtcConnectionContext.videoContext);
	      }
	  //Если выполняется не локальный пользователь или индекс локального пользователя меньше индекса текущего
	      if(localIndex < contactIndex || (!initiator && contactIndex == 0)) {
	      //Запуск соединения
		    webRtcConnectionContext.pcConnection = new SimplePeer({
		      //контакт имеет индекс больше индекса локального пользователя в коллекции контактов или обрабатывается инициатор вызова, тогда ставиться признак инициатора для генерирования предложения
		      initiator : initiator,
		      channelName : contact.uid,
		      //Если соединение формируется для явного предложения, тогда свойство берется из настроек, иначе - из явного предложения
		      config : this.appContext.stunTurnConfig[ initiator ? window.localStorage.getItem('stunTurn') : webRtcContext.desc.stun ],
		      stream : webRtcContext.localStream,
		  });
		    webRtcConnectionContext.pcConnection._debug = console.log ;
		  //Установка ссылки на функцию отправки сообщений, чтобы контекст мог их отправлять, если пользователь инициатор сообщения
		  //Неинициатор устанавливает свой канал связи в событии connect()
		    initiator && (webRtcConnectionContext.videoContext.dataChannel.channel = webRtcConnectionContext.pcConnection._channel);
		  //Вызывается при генерации предложений, ответов, кандидатов
		    webRtcConnectionContext.pcConnection.on('signal', async (data)=> {
		      //Проанализировать настройку оптимизации соединения,
		      //предложение или ответ ждет формирование кандидатов и отправляются на сервер в одной упаковке
		      if(data.type){
			  if(data.type === 'offer') {
			      webRtcConnectionContext.descriptor = new Offer({
				  type: (webRtcContext.uid === this.appContext.appUser.uid ? 'offers/explicit' : 'offers/implicit'),
				  action: 'offered',
				  contact: contact,
				  uid: this.appContext.appUser.uid,
				  wid: webRtcContext.wid,
				  messageUrl : (webRtcContext.uid === this.appContext.appUser.uid ? '/messages/'+ contact.uid +'/'+ webRtcContext.wid : ''),
				  receivers: initiator ? webRtcContext.receivers.value : [contact],
				  sender: this.appContext.appUser,
				  stun: initiator ? window.localStorage.getItem('stunTurn') : webRtcContext.desc.stun,
				  desc: data,
				  descId : webRtcContext.wid + this.appContext.appUser.uid,
				  optimize: initiator ? JSON.parse(window.localStorage.getItem('optimizeCall')) : webRtcContext.desc.optimize,
				  candidates : JSON.parse(window.localStorage.getItem('optimizeCall')) ? []: false,
			      }) ;
			  }
			  else if(data.type === 'answer'){
			
			      webRtcConnectionContext.descriptor = new Answer({
				  type : 'answers',
				  active : true,
				  contact : contact,
				  uid :  webRtcContext.desc.uid,
				  descId : desc ? desc.messId : webRtcContext.desc.messId,
				  wid : webRtcContext.wid,
				  receivers : [ desc ? desc.sender : webRtcContext.sender],
				  sender : this.appContext.appUser,
				  desc : data,
				  optimize :  webRtcContext.desc.optimize,
				  candidates : webRtcContext.desc.optimize ? []: false,
			      });
			  }
		      //Сложный вариант отправки дескрипторов обусловлен не постоянной очередностью выдачи предложений-ответов и кандидатов
		      this.dispatchDescriptor(webRtcConnectionContext);
		      
		      }else if(data.candidate){
			  //Сборка кандидатов
			  let descriptor = webRtcConnectionContext.descriptor;
			  //Сложный вариант отправки дескрипторов обусловлен не постоянной очередностью выдачи предложений-ответов и кандидатов
			   if(descriptor){
			      let candidate = new Candidate({
				   wid : descriptor.wid,
				   contact :  contact ,
				   date : Date.now(),
				   sender : this.appContext.user.value,
				   descId : descriptor.messId,
				   type: 'candidates',
				   desc: data.candidate,
				   active : true,
				   optimize : descriptor.optimize,
				   uid : descriptor.uid,
			       });
			       //Проверка на опитимизацию соединения
			       if(descriptor.optimize) descriptor.candidates.push(candidate) ;
			       else this.database.sendDescriptor(candidate).catch(this.onError);
			   }else{
			       webRtcConnectionContext.candidates.push(data.candidate) ;
			   }
		      }
		  });
		  //Установка обработчика на изменения статуса сборки кандидатов
		  webRtcConnectionContext.pcConnection._pc.addEventListener('icegatheringstatechange', (event: any)=>{
		      //Завершилась сборка кандидатов
		      if(event.target.iceGatheringState === 'complete'){
			  //Сборка завершена
			  let desc : Offer | Answer =  webRtcConnectionContext.descriptor;
			  //Сложный вариант отправки дескрипторов обусловлен не постоянной очередностью выдачи предложений-ответов и кандидатов
			  if(desc && desc.optimize){
			      if(desc.candidates.length){
				  //Отправка дескриптора (offer/answer) на сервер
				  /answers|offers\/implicit/.test(desc.type) && this.database.sendDescriptor(desc).then(()=> {
				      console.log('Сборка кандидатов завершена. Кандидаты отправлены.') ;
				  }).catch(this.onError);
				  //Отправка явного дескриптора
				  /offers\/explicit/.test(desc.type) && this.webRtcService.sendOffer(webRtcConnectionContext);
				  //Установка обработчика приема ответа, если отправлен дескриптор предложения
				  desc.type.indexOf('offers') > -1 && this.setAnswerListener(webRtcConnectionContext);
			      }else{
				  this.onError('Сбой отправки кандидатов в событии icegatheringstatechange.');
				  //TODO определить отображение сбоев несовместимости браузеров пользователю.
				  this.setAnnouncement({type : 'incompatibilityFailure'  , desc : {text : 'Сбой несовместимости.'}});
			      }
			  }else if(!desc){
			  
			  }
		      }
		  }) ;
		  //Установка обработчика на изменение статуса соединения для установки пользовательской индикации
		  webRtcConnectionContext.pcConnection._pc.addEventListener('connectionstatechange', (event: any)=>{
		      let contact = webRtcConnectionContext.videoContext.contact.value;
		      contact.statusColor = this.statusColor.statusColors.webrtc.perConnectionStates[event.target.connectionState];
		      webRtcConnectionContext.videoContext.contact.next(contact);
		  }) ;
		  //обработчик установки готовности соединения передачи данных по каналу данных
		  webRtcConnectionContext.pcConnection.on('connect', () => {
		      initiator || (webRtcConnectionContext.videoContext.dataChannel.channel = webRtcConnectionContext.pcConnection._channel) ;
		      //Передать информацию о включенных аппаратных средствах
		      webRtcConnectionContext.pcConnection.send(JSON.stringify(this.appContext.localVideoAudio));
		  });
		  //Обработчик получения данных по канаду данных
		  webRtcConnectionContext.pcConnection.on('data', (data : any) => {
		      //Обработка данных активности , закрытие соединения и пр. удаленного пира
		      webRtcConnectionContext.videoContext.dataChannel.data.next(JSON.parse(data));
		  });
		  //Обработка получения удаленного потока
		  webRtcConnectionContext.pcConnection.on('stream', stream => {
		      webRtcConnectionContext.videoContext.stream.next(stream);
		      //добавление видеоконтекста в коллекцию видеоконтекстов
		      webRtcContext.videoCollection.push(webRtcConnectionContext.videoContext);
		      //обновление интерфейса
		      this.appContext.appChangeRef.markForCheck();
		  });
		  //Закрыто текущее соединение
		  webRtcConnectionContext.pcConnection.on('close', (event) => {}) ;
		  //Ошибка в соединениии
		  webRtcConnectionContext.pcConnection.on('error', (err) => {
		      this.onError(err);
		      return true;
		  });
		  //Установка удаленного дескриптора - явного предложения
		  if(!initiator && contactIndex === 0){
		      let d = desc || webRtcContext.desc ;
		      this.setDescriptor(webRtcConnectionContext.pcConnection, d);
		  }
	      }else if(localIndex > contactIndex){
		  this.setImplicitListener(webRtcContext.wid + contact.uid);
	      }
	  })
      }
      this.appContext.appChangeRef.markForCheck();
  }
  
    setDescriptor(pcConnection, desc){
      let that = this;
      //Установить предложение / ответ
      pcConnection.signal(desc.desc);
      if(/answers/.test(desc.type)){
	  //Удаление принятого ответа из базы после его получения
	  deleteDesc(desc);
      }else{
          //Снятие признака активности принятого предложения
	  this.database.setDescriptorOptions({descriptor: desc, data : {active: false, action: 'accepted'}}).then(res =>{
	      //Удаление из базы принятого дескриптора. Такой подход нужен для того, чтобы первая запись меняла статус действия и снимала активность, для согласования внутренних отслеживаний принятий удаленных дескрипторов. Вторая фаза - это удаление уже помеченного дескриптора.
	      deleteDesc(desc);
	  }).catch(err => this.onError(err));
	  //Если принимается явное предложение, создаем сообщение в области входящих сообщений
	  if(desc.type === 'offers/explicit'){
	      //Изменение входящего сообщения
	      [  //Изменение сообщения, предназначенного для текущего пользователя
		  {path : '/messages/'+ this.appContext.appUser.uid +'/'+ desc.wid + '/actions' , data : {[desc.contact.uid] : 'accepted'}},
		  //Изменение сообщения инициализатора
		  {path : '/messages/'+ desc.sender.uid +'/'+ desc.wid + '/actions' , data : {[desc.contact.uid] : 'accepted'}}
	          ].forEach(mess => {
	      //Пользователь  принял предложение - записываем это в область исходящих сообщений
	      this.database.changeMessage(mess.path, mess.data);
	      })
	  }
      }
      
      (async ()=> {
	  //Проверить кандидаты
	  //todo Обязательно! В этом месте, т.е. после установления удаленного дескриптора, и после
	  // установки локального потока, нужно установить СИНХРОННО удаленные кандидаты
	  //Установка/проверка кандидатов
	  await this.checkCandidates(desc, pcConnection);
      })();
      
      function deleteDesc(desc){
	  that.database.deleteDescriptor({descriptor : desc}).then(()=>{}).catch(err =>  that.onError(err));
      }
  }
  
  //Запос кандидатов с сервера
    async requestCandidates(desc){
	return this.database.database.ref(`/web-rtc/candidates/${this.appContext.user.value.uid}`).orderByChild('descId').equalTo(desc.messId).once('value');
    }
  
    //Обработчик установки или запроса с установкой кандидатов, в зависимости от настроек оптимизации
    checkCandidates(desc, pcConnection) {
      let that = this;
	return  new Promise((res, rej)=> {
	    if(desc.optimize){
		setCandidates.bind(this, desc.candidates, res)() ;
	    }else {
		this.requestCandidates(desc).then(r => {
		    let val = r.val();
		    val && setCandidates.bind(this, Object.values(val),res)()
		}).catch(this.onError);
	    }
	});
	function setCandidates(candidates, res){
	    candidates.forEach(candidate => {
		pcConnection.signal({candidate : candidate.desc});
		//Удаление кандидата из базы после его получения
		that.database.deleteDescriptor({descriptor : candidate}).then(()=>{}).catch(err =>  that.onError(err));

	    }) ;
	    res();
	}
    }
    
    //Установка уведомления на страницу Announcement.component
    setAnnouncement(popup){
	//Коллекция элементов на странице уведомлений
	this.appContext.announcements.next([popup].concat(this.appContext.announcements.value)) ;
	this.appContext.appChangeRef.markForCheck();
    }
    
    onError(error){
	console.log(error);
    }
  
}
