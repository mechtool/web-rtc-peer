import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {VideoContext} from "../../../../Classes/Classes";
import {AppContextService} from "../../../../services/app-context.service";
import {WebRtcService} from "../../../../services/web-rtc.service";
import {StatusColorsService} from "../../../../services/status-colors.service";
import {WebRtcContextComponent} from "../web-rtc-context/web-rtc-context.component";

@Component({
  selector: 'app-video-channel',
  templateUrl: './video-channel.component.html',
  styleUrls: ['./video-channel.component.css']
})
export class VideoChannelComponent implements OnInit, OnDestroy {
    
    public localBadge = '';
    public toolbarVisibility = false;
    public subscriptions = [];
    public buttons = [['video-off', 'video'], ['audio-off', 'audio']];
    public static t = undefined;
    @Input() public videoContext : VideoContext;
  constructor(
      public appContext : AppContextService,
      public webRtcService : WebRtcService,
      public statusColor : StatusColorsService,
      public changeRef : ChangeDetectorRef,
      public webRtcContext : WebRtcContextComponent) {
  }

  ngOnInit() {
      //Подписка на получение уведомлений и отображение их количества в бейждике
      this.videoContext.local && this.subscriptions.push(this.appContext.announcements.subscribe(announcements => {
          let length = announcements.filter(ann => ann.active).length;
	  this.localBadge = length == 0 ? '' : length + '' ;
      })) ;
      //Подписка на получение данных по каналу данных
      this.subscriptions.push(this.videoContext.dataChannel.data.subscribe(message => {
            //Прилетели данные по каналу данных
	  //message : {type : settings, video : number, audio : number}
	  //  {type : status, status : StatusColorsService}
	  //Получено удаленное сообщение о данных удаленного пользователя
	  if(message.type === "settings"){
	      'video' in message && (this.videoContext.settings.video = message.video);
	      'audio' in message && (this.videoContext.settings.audio = message.audio);
	  }else if(message.type === "status"){
	      let contact = this.videoContext.contact.value;
	      contact.statusColor = message.statusColor;
	      this.videoContext.contact.next(contact);
	      //если статус - один из статусов невозможности продолжения соединения
	      this.webRtcService.checkConnectionState({state : message.statusText, contact : contact, videoContext : this.videoContext});
	  }
	  this.changeRef.detectChanges();
      }));
  }
   ngOnDestroy(): void {
       this.subscriptions.forEach(sub => sub.unsubscribe());
   }
    
    clickIcon(inx, $event){
      let message;
      $event.stopImmediatePropagation();
        switch (inx) { //Изменение видеорежима
	    case 0 :
		let videoTrack = this.videoContext.stream.value.getVideoTracks()[0];
		videoTrack && (videoTrack.enabled = !!(this.videoContext.settings.video = this.videoContext.settings.video == 0 ? 1 : 0));
		message = this.videoContext.settings ;
		break;    //Изменение аудиорежима
	    case 1 :
		let audioTrack = this.videoContext.stream.value.getAudioTracks()[0];
		audioTrack && (audioTrack.enabled = !!(this.videoContext.settings.audio = this.videoContext.settings.audio == 0 ? 1 : 0));
		message = this.videoContext.settings ;
		break;
	    case 2 :
		this.webRtcService.stopVideoChannel(this.videoContext);
	}
	//Отправить данные об изменении значений настроек всем удаленным каналам
	if(message) {
	    //todo сделать это свойство реактивным для передачи настроек локального контекста всем удаленным контекстам
	    this.appContext.localVideoAudio = message;
	    this.webRtcService.sendDataMessages(this.videoContext.wid, this.appContext.appUser.uid, message) ;
	}
    }
    
    onMoveElementVideo($event){
	$event.stopImmediatePropagation();
	    this.toolbarVisibility = true;
	    VideoChannelComponent.t && clearTimeout(VideoChannelComponent.t);
	    VideoChannelComponent.t = setTimeout(()=>{
		this.toolbarVisibility = false;
		clearTimeout(VideoChannelComponent.t);
		VideoChannelComponent.t = undefined;
		this.changeRef.detectChanges();
	    },4000)
    }
    
    onCloseView($event){
        this.webRtcContext.handleView(true);
	$event.stopImmediatePropagation();
    }
    
    onLoadedData(){
      //Делаем текущий контекст активным
	this.videoContext.className.active = true;
	this.videoContext.local || this.webRtcService.checkVideoContexts(this.videoContext);
    }
    onEnded(){
      //Делаем текущей контекст не активный
	this.videoContext.className.active = false;
	//Проверяем количество активных контекстов
	this.webRtcService.checkVideoContexts(this.videoContext);
    }
}
