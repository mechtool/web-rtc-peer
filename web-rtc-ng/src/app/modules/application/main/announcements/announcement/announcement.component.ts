import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {ColorThemeService} from "../../../../../services/color-theme.service";
import {AnnouncementContext} from "../../../../../Classes/Classes";

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {

    public activatedMarkColor = '#cdcdcd';
    @Input() public context : AnnouncementContext ;
  
    constructor(
        public sanitizer : DomSanitizer,
	public colorThemeService : ColorThemeService) {
    
    }

  ngOnInit() {
      this.activatedMarkColor = this.context.active ? this.colorThemeService.getThemeColor('backgroundColor') : this.activatedMarkColor;
  }

}
