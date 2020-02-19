import {Component, Input, OnInit} from '@angular/core';
import {SwUpdateService} from "../../../../../services/sw-update.service";
import { PopupContext} from "../../../../../Classes/Classes";

@Component({
  selector: 'app-update-announcement',
  templateUrl: './update-announcement.component.html',
  styleUrls: ['./update-announcement.component.css']
})
export class UpdateAnnouncementComponent implements OnInit {

    @Input() public context : PopupContext;
    public buttons  = [
	{tip : 'Ok', icon : 'check_circle', color : '#006d24', listener : ()=> {
		this.context.listener(this.context) ;
	    }},
    ];
  constructor(public swUpdate : SwUpdateService) { }

  ngOnInit() {
  }

}
