import {BehaviorSubject} from "rxjs";
let uuid = require('uuid/v1');

export class SettingContext{
    public type : number;
    public text : string;
    public icon : string;
    public options : any[];
    public label : string;
    public optionName : string;
    public value : any;
    public radioGroup : any[];
    public listener : Function;
    public disabled : any = false;
}
//--------------contact / user ----------------------
export class User{
    public uid : string;
    public photoURL : string;
    public phoneNumber : string;
    public displayName : string;
    public email : string;
    public online : boolean;
}

export class Contact extends User{
    
    public name : string;
    public imgColor?: string;
    public pushSubscription?: any;
    public statusColor ? ;
    
    constructor(user) {
	super();
	this.name = user.name || '';
	this.displayName = user.displayName || '';
	this.phoneNumber = user.phoneNumber || '';
	this.photoURL = user.photoURL || '/assets/app-shell/user.svg';
	this.uid = user.uid;
	this.email = user.email || '';
	this.imgColor = user.imgColor || (this.photoURL == '/assets/app-shell/user.svg' ? Contact.getRandomColor() : 'transparent');
	this.pushSubscription = user.pushSubscription || '';
	this.statusColor = user.statusColor || '#8d8d8d' ;
	this.online = user.online || false;
    }
    
    static getRandomColor() {
	return '#'+ Math.random().toString(16).slice(-6);
    }
}
//-------descriptor / offer/ answer / candidate
export class Descriptor {
    
    contact : Contact; //Получатель дескриптора
    messId : string;//Уникальный идентификатор дескриптора
    wid : string; //Идентификатор вызова webRtc
    receivers? : Contact[]; //идентификаторы получателей
    sender : Contact; //отправитель
    date : number; //дата сообщения milliseconds
    desc : any; //дескриптор
    type : string; //offers / answers / candidates
    active : boolean ; //Признак активности
    optimize : boolean = false;
    uid : string;
    
    constructor(desc){
	
        this.contact = desc.contact; //Получатель дескриптора
	this.wid = desc.wid;
	this.receivers = desc.receivers || [];//идентификаторы получателей
	this.sender = desc.sender; //ссылка отправителя
	this.date = Date.now(); //дата сообщения milliseconds
	this.desc  = desc.desc; //дескриптор
	this.type = desc.type; //offer / answer / candidate
	this.messId = desc.messId || uuid();// идентификатор дескриптора
	this.active = desc.active || true;
	this.optimize = desc.optimize ;
	this.uid = desc.uid;
    }
}

export class Candidate extends Descriptor{
    //Идентификатор предложения или ответа для которого собирается кандидат
    public descId : string;
    
    constructor(candidate){
	super(candidate);
	this.descId = candidate.descId;
    }
}

export class Offer extends Descriptor{
    
    public candidates ? ;
    public stun : string;
    public action : string;
    public descId : string;
    public messageUrl : string ;
    
    constructor(offer){
	super(offer) ;
	this.candidates = offer.candidates;
	this.type = offer.type || '' ;   //explicit/implicit
	this.stun = offer.stun || '';
	this.descId = offer.descId;
	this.messageUrl = offer.messageUrl || '';
	this.action = offer.action || 'offered'; //denied-отказано /ignored- не принято/offered- предложено/accepted - принят
    }
}

export class Answer extends Descriptor{
    
    public candidates ? ;
    //Идентификатор предложения на котрый сформирован ответ
    public descId : string;
    
    constructor(answer){
	super(answer) ;
	this.candidates = answer.candidates ? answer.candidates : false;
	this.descId = answer.descId;
    }
}

//---------message / announcement / popup

export class Message  {
    
    date : number = Date.now();
    type  : string  = '';
    actions : any;
    messId  : string = '';
    sender : any;
    receivers : any[];
    path : string;
    wid : string;
    metadata : any;
    contact : Contact;
    
    constructor(message){
	this.date = message.date;
	this.actions = message.action || {};
	this.metadata = message.metadata || '' ;
	this.messId = message.messId;
	this.sender = message.sender;
	this.receivers = message.receivers;
	this.wid = message.wid || '';
	this.contact =  message.contact || undefined;
    }
}
export class PopupContext{
    
    public uid : string;
    public type : number;
    public date ? : number;
    public listener : Function;
    public active : boolean;
    public desc : any;
    public contact :Contact;
    public text : string;
    public extra : any;
    
    constructor(options){
	this.uid = options.uid || uuid();
	this.type = options.type;
	this.listener = options.listener || undefined;
	this.date = options.date || Date.now();
	this.active = options.active || false;
	this.desc = options.desc;
	this.contact = options.contact || new Contact({name : 'Unknown'});
	this.text = options.text || '';
	this.extra = options.extra || {timeout : false};
    }
}

export class IncomingPopupContext extends PopupContext{
    
    public listener : Function;
    public desc : Offer;
    
    constructor(props) {
	super(props);
	this.listener = props.listener || undefined;
	this.desc = props.desc;
    }
}

export class  AnnouncementContext extends PopupContext{
    
    public content? : string;
    
    constructor(props) {
	super(props);
	this.content = props.content || '';
    }
}
//----------------web-rtc---------------------

export class WebRtcConnectionContext{
    public uid : string;
    public pcConnection : any ;
    public videoContext : VideoContext;
    public descriptor : Answer | Offer;
    public candidates : any[];
    public webRtcContext : WebRtcContext;
    
    constructor(options){
	this.uid  = options.uid;
	this.pcConnection = options.pcConnection || undefined;
	this.videoContext  = options.videoContext || undefined;
	this.descriptor = options.descriptor || undefined;
	this.candidates = options.candidates || [];
	this.webRtcContext = options.webRtcContext || undefined;
    }
}

export class WebRtcContexts{
    
    public contexts : BehaviorSubject<WebRtcContext[]> = new BehaviorSubject([]);
    
    getContext(wid : string) : WebRtcContext{
	return this.contexts.value.find(context => context.wid === wid);
    }
    addContext(context : WebRtcContext){
	let contexts = this.contexts.value ;
	contexts.push(context);
	this.contexts.next(contexts);
    }
    deleteContext(wid : string){
	let contexts =  this.contexts.value, 
	    index =  contexts.findIndex(cont => cont.wid === wid);
	if(index > -1){
	    contexts.splice(index, 1) ;
	    this.contexts.next(contexts);
	}
    }
    
    deleteAllContexts(){
	this.contexts = new BehaviorSubject([]);
    }
}

export class WebRtcContext{
    
    public wid : string;
    public uid : string;
    public sender ? : Contact;
    public desc ? : any;
    public webRtcConnections ? : {[key : string] : WebRtcConnectionContext} = {};
    public receivers ? : BehaviorSubject<any[]>;
    public videoCollection ? : VideoContext[];
    //Локальный поток для установки его в peerConnection
    public localStream ? : any;
    public extra ? : {actions : any, timeout : any};
    
    constructor(options){
	
        this.wid = options.wid || uuid();
	this.receivers = options.receivers || new BehaviorSubject([]);
	this.videoCollection =  options.videoCollection || [];
	this.uid = options.uid;
	this.sender = options.sender;
	this.desc = options.desc || undefined;
	this.localStream = options.localStream || undefined;
	this.extra = options.extra || {actions : {}, timeout : undefined};
    }
}

export class VideoContext{
    public wid : string;
    public contact : BehaviorSubject<Contact>;
    public stream : BehaviorSubject<any>;
    public channelClass : string;
    public className? : any;
    public local : boolean ;
    public dataChannel : any;
    public settings : any;
    public videoElement  : any;
    public  messageUrl : string;
    
    constructor(options){
	this.wid = options.wid;
	this.contact = options.contact || new BehaviorSubject(new Contact({name : 'Unknown'}));
	this.stream = options.stream || new BehaviorSubject(null);
	this.channelClass = options.channelClass;
	this.className = options.className;
	this.local = options.local || false;
	this.dataChannel = options.dataChannel || undefined;
	this. messageUrl = options. messageUrl || '' ;
	this.settings = options.settings || {type : 'settings', video : 1, audio : 1};
    }
}
