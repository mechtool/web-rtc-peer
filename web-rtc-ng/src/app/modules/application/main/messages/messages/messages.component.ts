import { Component, OnInit } from '@angular/core';
import {AppContextService} from "../../../../../services/app-context.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public appContext : AppContextService) { }

  ngOnInit() {
  }

}
