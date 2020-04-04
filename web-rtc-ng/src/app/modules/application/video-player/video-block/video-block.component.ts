import {Component, Input, OnInit} from '@angular/core';
import {AppContextService} from "../../../../services/app-context.service";
import {VideoPlayerComponent} from "../video-player.component";
import {Router} from "@angular/router";


@Component({
  selector: 'app-video-block',
  templateUrl: './video-block.component.html',
  styleUrls: ['./video-block.component.css']
})
export class VideoBlockComponent implements OnInit {
    public startBlock = false;
    public icons = {video  : ['video-off', 'video'], audio : ['audio-off', 'audio']};
    public video = this.icons.video[1];
    public audio = this.icons.audio[1];
    @Input() public context : any;
  constructor(
      public videoPlayer : VideoPlayerComponent,
      public router :Router,
      public appContext : AppContextService) { }
  
      ngOnInit(): void {
      this.context.className.active = true;
      }
    
    startVisual(){
      Object.keys(this.context.visual).sort((a, b)=> +a - +b).forEach(key => {
	  let t = setTimeout(()=>{
	      let k = this.context.visual[key];
	      this.video = this.icons.video[k.video] ;
	      this.audio = this.icons.audio[k.audio] ;
	      this.appContext.appChangeRef.markForCheck();
	      clearTimeout(t);
	  }, +key - this.context.startTime)
      })
  }
    
    onErrorVideo($event){
      let t = $event.target.error.code;
    }
    onLoadedData(){
	this.startBlock = true;
	this.context.visual && this.startVisual();
	this.appContext.appChangeRef.markForCheck();
    }
    
    onEnded(){
	this.startBlock = this.context.className.fixed =  this.context.className.active = false;
	let v = this.videoPlayer.activeVideoBlocks.value.filter(block => block.uid !== this.context.uid);
	//Если после завершения блока остается последний, тогда закрыть видеоплеер
	v.length < 2 && this.router.navigateByUrl('/application/main/messages') ;
	//Удалить компонент из активных видео блоков
	this.videoPlayer.activeVideoBlocks.next(v) ;
	this.appContext.appChangeRef.markForCheck();
    }
}
