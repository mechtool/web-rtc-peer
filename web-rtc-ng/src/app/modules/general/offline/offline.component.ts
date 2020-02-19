import { Component, OnInit } from '@angular/core';
import {AppContextService} from "../../../services/app-context.service";

@Component({
  selector: 'app-offline',
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.css']
})
export class OfflineComponent implements OnInit {

  constructor(public appContext : AppContextService) { }

  onClick(){
      window.location.reload()
  }
    onAutonomously(){
      this.appContext.offline = {off : false, autonomously: true};
    }
  ngOnInit() {
  }

}
