import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
    public firebase = firebase;
    public auth ;
    public database;
    public storage;
    
    constructor() {}
    
    initialize(){
	this.firebase.initializeApp(environment.firebaseConfig);
	this.auth = this.firebase.auth();
	this.database = this.firebase.database();
	this.storage = this.firebase.storage();
    }
}
