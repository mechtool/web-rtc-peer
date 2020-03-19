function _defineProperty(l,n,e){return n in l?Object.defineProperty(l,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):l[n]=e,l}function _defineProperties(l,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{Ypt2:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J"),a=function l(){_classCallCheck(this,l)},o=e("pMnS"),u=e("MlvX"),i=e("Xd0L"),c=e("HsOI"),r=e("s7LF"),s=e("dJrM"),b=e("IP0z"),d=e("/HVE"),p=e("omvX"),C=e("Azqq"),g=e("JjoW"),h=e("hOhj"),m=e("5GAg"),f=e("SVse"),v=e("ZwOa"),_=e("oapL"),w=e("bujt"),y=e("Fwaw"),x=e("Mr+X"),k=e("Gi4r"),A=e("Mz6y"),q=e("QQfA"),O=e("cUpR"),P=e("fvN4"),M=e("xDdU"),S=function(){function l(n,e){_classCallCheck(this,l),this.newMessageComponent=n,this.appContext=e,this.states=[{class:"us",code:"+1",src:"/assets/flags-24/002-flag.png"},{class:"arm",code:"+374",src:"/assets/flags-24/007-armenia.png"},{class:"ru",code:"+7",src:"/assets/flags-24/001-russia.png"},{class:"kz",code:"+7",src:"/assets/flags-24/006-kazakhstan.png"},{class:"geo",code:"+995",src:"/assets/flags-24/009-georgia.png"},{class:"de",code:"+49",src:"/assets/flags-24/004-germany.png"},{class:"uk",code:"+380",src:"/assets/flags-24/003-ukraine.png"},{class:"bel",code:"+375",src:"/assets/flags-24/005-belarus.png"},{class:"est",code:"+372",src:"/assets/flags-24/008-estonia.png"}],this.selected=this.states.find((function(l){return l.class===window.navigator.language.substring(0,window.navigator.language.indexOf("-"))})),this.phoneGroup=new r.i({codeControl:new r.f(this.selected,[r.u.required]),phoneControl:new r.f("",[r.u.required,r.u.pattern("[0-9]{10}")])})}return _createClass(l,[{key:"onKeydownTel",value:function(l){return/[0-9]|Backspace/.test(l.key)}},{key:"onDownEnter",value:function(){this.phoneGroup.get("phoneControl").hasError("pattern")||this.phoneGroup.get("phoneControl").hasError("required")||this.onAddContact()}},{key:"onAddContact",value:function(){var l,n=this.phoneGroup.value,e=n.codeControl.code+n.phoneControl,t=this.newMessageComponent.messageContacts.value;t.some((function(l){return l.phoneNumber==e}))?console.log("\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432. \u0422\u0430\u043a\u043e\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0436\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0432 \u0441\u043f\u0438\u0441\u043a\u0435."):(this.appContext.contacts.forEach((function(n){for(var t=0;t<n.length;t++){var a=n[t];if(a.phoneNumber.indexOf(e)>=0){l=a;break}}})),t.push(l||new P.c({uid:M(),phoneNumber:e})),this.newMessageComponent.messageContacts.next(t)),this.phoneGroup.patchValue({phoneControl:""})}}]),l}(),I=e("2Vo4"),N=e("xDdU"),F=function(){function l(n,e,t,a,o,u){_classCallCheck(this,l),this.appContext=n,this.applicationComponent=e,this.webRtcService=t,this.colorThemeService=a,this.database=o,this.router=u,this.search=!1,this.buttons=[],this.activateEdit=!0,this.newMessageHeader="\u041d\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",this.subscribers=[],this.webRtcContext=new P.h({uid:"Unknown"}),this.messageContacts=new I.a([])}return _createClass(l,[{key:"ngOnInit",value:function(){this.appContext.user.value&&(this.callModel=window.localStorage.getItem("callModel"),this.messageContacts.next(Object.values(this.appContext.activeContacts)),this.appContext.activeContacts={},this.buttons=["search_contact","remove_contact"])}},{key:"ngOnDestroy",value:function(){this.subscribers.forEach((function(l){return l.unsubscribe()})),this.appContext.activeContacts={}}},{key:"onOptionSelect",value:function(l){var n=this.messageContacts.value;if(this.contactRestriction=window.localStorage.getItem("contactRestriction"),!("0"==this.contactRestriction&&Object.keys(n).length<1||"1"==this.contactRestriction))return console.log("\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442. \u041f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432."),!1;n.push(l),this.messageContacts.next(n)}},{key:"onActivatedContact",value:function(l){l.add?this.appContext.activeContacts[l.contact.uid]=l.contact:delete this.appContext.activeContacts[l.contact.uid],this.activateEdit=!Object.keys(this.appContext.activeContacts).length}},{key:"triggerSearch",value:function(){this.search=!this.search}},{key:"onStartCall",value:function(){var l=this,n=N();this.webRtcService.startWebRtc({uid:this.appContext.appUser.uid,receivers:this.messageContacts.value,wid:n,sender:this.appContext.appUser,messageUrl:"/messages/"+this.appContext.appUser.uid+"/"+n}).then((function(e){var t={type:"outgoing",path:"/messages/"+l.appContext.appUser.uid+"/"+n,sender:l.appContext.appUser,date:Date.now(),wid:n,receivers:l.messageContacts.value,actions:function(){var n={};return l.messageContacts.value.forEach((function(l){n[l.uid]="offered"})),n}(),messId:N(),metadata:"1"===window.localStorage.getItem("callSave")?_defineProperty({},l.appContext.appUser.uid,{visual:_defineProperty({},Date.now(),l.appContext.localVideoAudio)}):{}},a=t.receivers;[t].concat(a.map((function(l){return{type:"incoming",path:"/messages/"+l.uid+"/"+t.wid,sender:t.sender,messId:N(),receivers:a,date:t.date,wid:t.wid,contact:l,actions:_defineProperty({},l.uid,"offered"),metadata:{}}}))).forEach((function(n){return l.database.sendMessage(n)}))}))}},{key:"onDeleteItems",value:function(){var l=this,n=function(n){var e=l.messageContacts.value.filter((function(l){return l.uid!==n}));l.messageContacts.next(e)};for(var e in this.appContext.activeContacts)n(e);this.appContext.activeContacts={},this.activateEdit=!0}}]),l}(),j=e("VYsW"),H=t.ob({encapsulation:0,styles:[[".phone-form[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:stretch;align-items:center;flex-wrap:wrap}.phone-code-field[_ngcontent-%COMP%]{width:30%;min-width:110px;margin-right:8px}.phone-field[_ngcontent-%COMP%]{flex:1 1 0;min-width:55%}.state-img[_ngcontent-%COMP%]{margin-right:8px}@media (max-width:300px){.phone-code-field[_ngcontent-%COMP%]{width:100%}.phone-form[_ngcontent-%COMP%]{flex-direction:column;justify-content:center;align-items:center}}"]],data:{}});function G(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,6,"mat-option",[["class","mat-option"],["role","option"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],(function(l,n,e){var a=!0;return"click"===n&&(a=!1!==t.Cb(l,1)._selectViaInteraction()&&a),"keydown"===n&&(a=!1!==t.Cb(l,1)._handleKeydown(e)&&a),a}),u.b,u.a)),t.pb(1,8568832,[[10,4]],0,i.p,[t.k,t.h,[2,i.j],[2,i.o]],{value:[0,"value"]},null),(l()(),t.qb(2,0,null,0,0,"img",[["class","state-img"]],[[8,"src",4]],null,null,null,null)),(l()(),t.qb(3,0,null,0,1,"span",[["class","location"]],null,null,null,null,null)),(l()(),t.Jb(4,null,["",""])),(l()(),t.qb(5,0,null,0,1,"span",[["class","state-code"]],null,null,null,null,null)),(l()(),t.Jb(6,null,["",""]))],(function(l,n){l(n,1,0,n.context.$implicit)}),(function(l,n){l(n,0,0,t.Cb(n,1)._getTabIndex(),t.Cb(n,1).selected,t.Cb(n,1).multiple,t.Cb(n,1).active,t.Cb(n,1).id,t.Cb(n,1)._getAriaSelected(),t.Cb(n,1).disabled.toString(),t.Cb(n,1).disabled),l(n,2,0,n.context.$implicit.src);var e=n.context.$implicit.class.toUpperCase();l(n,4,0,e),l(n,6,0,n.context.$implicit.code)}))}function E(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),t.pb(1,16384,[[6,4]],0,c.b,[],null,null),(l()(),t.Jb(-1,null,["\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439"]))],null,(function(l,n){l(n,0,0,t.Cb(n,1).id)}))}function L(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),t.pb(1,16384,[[18,4]],0,c.b,[],null,null),(l()(),t.Jb(-1,null,[" 10 \u0446\u0438\u0444\u0440"]))],null,(function(l,n){l(n,0,0,t.Cb(n,1).id)}))}function J(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),t.pb(1,16384,[[18,4]],0,c.b,[],null,null),(l()(),t.Jb(-1,null,["\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439"]))],null,(function(l,n){l(n,0,0,t.Cb(n,1).id)}))}function T(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,76,"form",[["class","phone-form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,e){var a=!0;return"submit"===n&&(a=!1!==t.Cb(l,2).onSubmit(e)&&a),"reset"===n&&(a=!1!==t.Cb(l,2).onReset()&&a),a}),null,null)),t.pb(1,16384,null,0,r.y,[],null,null),t.pb(2,540672,null,0,r.j,[[8,null],[8,null]],{form:[0,"form"]},null),t.Gb(2048,null,r.c,null,[r.j]),t.pb(4,16384,null,0,r.q,[[4,r.c]],null,null),(l()(),t.qb(5,0,null,null,34,"mat-form-field",[["appearance","outline"],["class","phone-code-field mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,s.b,s.a)),t.pb(6,7520256,null,9,c.c,[t.k,t.h,[2,i.h],[2,b.b],[2,c.a],d.a,t.x,[2,p.a]],{appearance:[0,"appearance"]},null),t.Hb(603979776,1,{_controlNonStatic:0}),t.Hb(335544320,2,{_controlStatic:0}),t.Hb(603979776,3,{_labelChildNonStatic:0}),t.Hb(335544320,4,{_labelChildStatic:0}),t.Hb(603979776,5,{_placeholderChild:0}),t.Hb(603979776,6,{_errorChildren:1}),t.Hb(603979776,7,{_hintChildren:1}),t.Hb(603979776,8,{_prefixChildren:1}),t.Hb(603979776,9,{_suffixChildren:1}),(l()(),t.qb(16,0,null,3,2,"mat-label",[],null,null,null,null,null)),t.pb(17,16384,[[3,4],[4,4]],0,c.g,[],null,null),(l()(),t.Jb(-1,null,["\u041a\u043e\u0434 \u0441\u0442\u0440\u0430\u043d\u044b"])),(l()(),t.qb(19,0,null,1,18,"mat-select",[["class","mat-select"],["formControlName","codeControl"],["role","listbox"]],[[1,"id",0],[1,"tabindex",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-owns",0],[1,"aria-multiselectable",0],[1,"aria-describedby",0],[1,"aria-activedescendant",0],[2,"mat-select-disabled",null],[2,"mat-select-invalid",null],[2,"mat-select-required",null],[2,"mat-select-empty",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"valueChange"],[null,"keydown"],[null,"focus"],[null,"blur"]],(function(l,n,e){var a=!0,o=l.component;return"keydown"===n&&(a=!1!==t.Cb(l,23)._handleKeydown(e)&&a),"focus"===n&&(a=!1!==t.Cb(l,23)._onFocus()&&a),"blur"===n&&(a=!1!==t.Cb(l,23)._onBlur()&&a),"valueChange"===n&&(a=!1!==(o.selected=e)&&a),a}),C.b,C.a)),t.Gb(6144,null,i.j,null,[g.c]),t.pb(21,671744,null,0,r.h,[[3,r.c],[8,null],[8,null],[8,null],[2,r.x]],{name:[0,"name"]},null),t.Gb(2048,null,r.o,null,[r.h]),t.pb(23,2080768,null,3,g.c,[h.d,t.h,t.x,i.b,t.k,[2,b.b],[2,r.r],[2,r.j],[2,c.c],[6,r.o],[8,null],g.a,m.g],{value:[0,"value"]},{valueChange:"valueChange"}),t.Hb(603979776,10,{options:1}),t.Hb(603979776,11,{optionGroups:1}),t.Hb(603979776,12,{customTrigger:0}),t.pb(27,16384,null,0,r.p,[[4,r.o]],null,null),t.Gb(2048,[[1,4],[2,4]],c.d,null,[g.c]),(l()(),t.qb(29,0,null,0,6,"mat-select-trigger",[["class","phone-code-trigger"]],null,null,null,null,null)),t.pb(30,16384,[[12,4]],0,g.e,[],null,null),(l()(),t.qb(31,0,null,null,0,"img",[["class","state-img"]],[[8,"src",4]],null,null,null,null)),(l()(),t.qb(32,0,null,null,1,"span",[["class","location"]],null,null,null,null,null)),(l()(),t.Jb(33,null,["",""])),(l()(),t.qb(34,0,null,null,1,"span",[["class","state-code"]],null,null,null,null,null)),(l()(),t.Jb(35,null,["",""])),(l()(),t.gb(16777216,null,1,1,null,G)),t.pb(37,278528,null,0,f.k,[t.N,t.K,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.gb(16777216,null,5,1,null,E)),t.pb(39,16384,null,0,f.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(40,0,null,null,36,"mat-form-field",[["appearance","outline"],["class","phone-field mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,s.b,s.a)),t.pb(41,7520256,null,9,c.c,[t.k,t.h,[2,i.h],[2,b.b],[2,c.a],d.a,t.x,[2,p.a]],{appearance:[0,"appearance"]},null),t.Hb(603979776,13,{_controlNonStatic:0}),t.Hb(335544320,14,{_controlStatic:0}),t.Hb(603979776,15,{_labelChildNonStatic:0}),t.Hb(335544320,16,{_labelChildStatic:0}),t.Hb(603979776,17,{_placeholderChild:0}),t.Hb(603979776,18,{_errorChildren:1}),t.Hb(603979776,19,{_hintChildren:1}),t.Hb(603979776,20,{_prefixChildren:1}),t.Hb(603979776,21,{_suffixChildren:1}),(l()(),t.qb(51,0,null,3,2,"mat-label",[],null,null,null,null,null)),t.pb(52,16384,[[15,4],[16,4]],0,c.g,[],null,null),(l()(),t.Jb(-1,null,["\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"])),(l()(),t.qb(54,0,null,1,9,"input",[["class","mat-input-element mat-form-field-autofill-control"],["formControlName","phoneControl"],["matInput",""],["maxlength","10"],["placeholder","\u041d\u043e\u043c\u0435\u0440"],["type","tel"]],[[1,"maxlength",0],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keydown"],[null,"keydown.enter"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(l,n,e){var a=!0,o=l.component;return"input"===n&&(a=!1!==t.Cb(l,57)._handleInput(e.target.value)&&a),"blur"===n&&(a=!1!==t.Cb(l,57).onTouched()&&a),"compositionstart"===n&&(a=!1!==t.Cb(l,57)._compositionStart()&&a),"compositionend"===n&&(a=!1!==t.Cb(l,57)._compositionEnd(e.target.value)&&a),"blur"===n&&(a=!1!==t.Cb(l,61)._focusChanged(!1)&&a),"focus"===n&&(a=!1!==t.Cb(l,61)._focusChanged(!0)&&a),"input"===n&&(a=!1!==t.Cb(l,61)._onInput()&&a),"keydown"===n&&(a=!1!==o.onKeydownTel(e)&&a),"keydown.enter"===n&&(a=!1!==o.onDownEnter()&&a),a}),null,null)),t.pb(55,540672,null,0,r.l,[],{maxlength:[0,"maxlength"]},null),t.Gb(1024,null,r.m,(function(l){return[l]}),[r.l]),t.pb(57,16384,null,0,r.d,[t.C,t.k,[2,r.a]],null,null),t.Gb(1024,null,r.n,(function(l){return[l]}),[r.d]),t.pb(59,671744,null,0,r.h,[[3,r.c],[6,r.m],[8,null],[6,r.n],[2,r.x]],{name:[0,"name"]},null),t.Gb(2048,null,r.o,null,[r.h]),t.pb(61,999424,null,0,v.a,[t.k,d.a,[6,r.o],[2,r.r],[2,r.j],i.b,[8,null],_.a,t.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),t.pb(62,16384,null,0,r.p,[[4,r.o]],null,null),t.Gb(2048,[[13,4],[14,4]],c.d,null,[v.a]),(l()(),t.qb(64,0,null,4,5,"button",[["color","primary"],["mat-icon-button",""],["matSuffix",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.onAddContact()&&t),t}),w.b,w.a)),t.pb(65,16384,[[21,4]],0,c.h,[],null,null),t.pb(66,180224,null,0,y.b,[t.k,m.f,[2,p.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(l()(),t.qb(67,16777216,null,0,2,"mat-icon",[["class","add-contact-icon mat-icon notranslate"],["matTooltip","\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"],["role","img"],["svgIcon","person_add"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],[[null,"longpress"],[null,"keydown"],[null,"touchend"]],(function(l,n,e){var a=!0;return"longpress"===n&&(a=!1!==t.Cb(l,69).show()&&a),"keydown"===n&&(a=!1!==t.Cb(l,69)._handleKeydown(e)&&a),"touchend"===n&&(a=!1!==t.Cb(l,69)._handleTouchend()&&a),a}),x.b,x.a)),t.pb(68,9158656,null,0,k.b,[t.k,k.d,[8,null],[2,k.a],[2,t.l]],{svgIcon:[0,"svgIcon"]},null),t.pb(69,212992,null,0,A.d,[q.c,t.k,h.a,t.N,t.x,d.a,m.c,m.f,A.b,[2,b.b],[2,A.a],[2,O.f]],{message:[0,"message"]},null),(l()(),t.qb(70,0,null,6,2,"mat-hint",[["class","mat-hint"]],[[2,"mat-right",null],[1,"id",0],[1,"align",0]],null,null,null,null)),t.pb(71,16384,[[19,4]],0,c.f,[],null,null),(l()(),t.Jb(-1,null,["\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430"])),(l()(),t.gb(16777216,null,5,1,null,L)),t.pb(74,16384,null,0,f.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,5,1,null,J)),t.pb(76,16384,null,0,f.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,2,0,e.phoneGroup),l(n,6,0,"outline"),l(n,21,0,"codeControl"),l(n,23,0,e.selected),l(n,37,0,e.states),l(n,39,0,e.phoneGroup.get("codeControl").hasError("required")),l(n,41,0,"outline"),l(n,55,0,"10"),l(n,59,0,"phoneControl"),l(n,61,0,"\u041d\u043e\u043c\u0435\u0440","tel"),l(n,66,0,e.phoneGroup.get("phoneControl").hasError("pattern")||e.phoneGroup.get("phoneControl").hasError("required"),"primary"),l(n,68,0,"person_add"),l(n,69,0,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),l(n,74,0,e.phoneGroup.get("phoneControl").hasError("pattern")&&!e.phoneGroup.get("phoneControl").hasError("required")),l(n,76,0,e.phoneGroup.get("phoneControl").hasError("required"))}),(function(l,n){var e=n.component;l(n,0,0,t.Cb(n,4).ngClassUntouched,t.Cb(n,4).ngClassTouched,t.Cb(n,4).ngClassPristine,t.Cb(n,4).ngClassDirty,t.Cb(n,4).ngClassValid,t.Cb(n,4).ngClassInvalid,t.Cb(n,4).ngClassPending),l(n,5,1,["standard"==t.Cb(n,6).appearance,"fill"==t.Cb(n,6).appearance,"outline"==t.Cb(n,6).appearance,"legacy"==t.Cb(n,6).appearance,t.Cb(n,6)._control.errorState,t.Cb(n,6)._canLabelFloat,t.Cb(n,6)._shouldLabelFloat(),t.Cb(n,6)._hasFloatingLabel(),t.Cb(n,6)._hideControlPlaceholder(),t.Cb(n,6)._control.disabled,t.Cb(n,6)._control.autofilled,t.Cb(n,6)._control.focused,"accent"==t.Cb(n,6).color,"warn"==t.Cb(n,6).color,t.Cb(n,6)._shouldForward("untouched"),t.Cb(n,6)._shouldForward("touched"),t.Cb(n,6)._shouldForward("pristine"),t.Cb(n,6)._shouldForward("dirty"),t.Cb(n,6)._shouldForward("valid"),t.Cb(n,6)._shouldForward("invalid"),t.Cb(n,6)._shouldForward("pending"),!t.Cb(n,6)._animationsEnabled]),l(n,19,1,[t.Cb(n,23).id,t.Cb(n,23).tabIndex,t.Cb(n,23)._getAriaLabel(),t.Cb(n,23)._getAriaLabelledby(),t.Cb(n,23).required.toString(),t.Cb(n,23).disabled.toString(),t.Cb(n,23).errorState,t.Cb(n,23).panelOpen?t.Cb(n,23)._optionIds:null,t.Cb(n,23).multiple,t.Cb(n,23)._ariaDescribedby||null,t.Cb(n,23)._getAriaActiveDescendant(),t.Cb(n,23).disabled,t.Cb(n,23).errorState,t.Cb(n,23).required,t.Cb(n,23).empty,t.Cb(n,27).ngClassUntouched,t.Cb(n,27).ngClassTouched,t.Cb(n,27).ngClassPristine,t.Cb(n,27).ngClassDirty,t.Cb(n,27).ngClassValid,t.Cb(n,27).ngClassInvalid,t.Cb(n,27).ngClassPending]),l(n,31,0,e.selected.src),l(n,33,0,e.selected.class.toUpperCase()),l(n,35,0,e.selected.code),l(n,40,1,["standard"==t.Cb(n,41).appearance,"fill"==t.Cb(n,41).appearance,"outline"==t.Cb(n,41).appearance,"legacy"==t.Cb(n,41).appearance,t.Cb(n,41)._control.errorState,t.Cb(n,41)._canLabelFloat,t.Cb(n,41)._shouldLabelFloat(),t.Cb(n,41)._hasFloatingLabel(),t.Cb(n,41)._hideControlPlaceholder(),t.Cb(n,41)._control.disabled,t.Cb(n,41)._control.autofilled,t.Cb(n,41)._control.focused,"accent"==t.Cb(n,41).color,"warn"==t.Cb(n,41).color,t.Cb(n,41)._shouldForward("untouched"),t.Cb(n,41)._shouldForward("touched"),t.Cb(n,41)._shouldForward("pristine"),t.Cb(n,41)._shouldForward("dirty"),t.Cb(n,41)._shouldForward("valid"),t.Cb(n,41)._shouldForward("invalid"),t.Cb(n,41)._shouldForward("pending"),!t.Cb(n,41)._animationsEnabled]),l(n,54,1,[t.Cb(n,55).maxlength?t.Cb(n,55).maxlength:null,t.Cb(n,61)._isServer,t.Cb(n,61).id,t.Cb(n,61).placeholder,t.Cb(n,61).disabled,t.Cb(n,61).required,t.Cb(n,61).readonly&&!t.Cb(n,61)._isNativeSelect||null,t.Cb(n,61)._ariaDescribedby||null,t.Cb(n,61).errorState,t.Cb(n,61).required.toString(),t.Cb(n,62).ngClassUntouched,t.Cb(n,62).ngClassTouched,t.Cb(n,62).ngClassPristine,t.Cb(n,62).ngClassDirty,t.Cb(n,62).ngClassValid,t.Cb(n,62).ngClassInvalid,t.Cb(n,62).ngClassPending]),l(n,64,0,t.Cb(n,66).disabled||null,"NoopAnimations"===t.Cb(n,66)._animationMode),l(n,67,0,t.Cb(n,68).inline,"primary"!==t.Cb(n,68).color&&"accent"!==t.Cb(n,68).color&&"warn"!==t.Cb(n,68).color),l(n,70,0,"end"==t.Cb(n,71).align,t.Cb(n,71).id,null)}))}var R=e("9Rn4"),D=e("YzQ4"),K=e("FbN9"),U=e("BzsH"),z=e("cu63"),V=e("Rf8I"),W=e("V+Fh"),X=e("dtXq"),Z=e("hoN+"),B=e("ZJFI"),Q=e("iInd"),Y=t.ob({encapsulation:0,styles:[["[_nghost-%COMP%]{height:100%}.new-message-header[_ngcontent-%COMP%]{font-size:18px!important}.new-message-container[_ngcontent-%COMP%]{height:100%}.choose-contacts-container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;background:#ffffffc7}.choose-start-call[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.added-contacts-name[_ngcontent-%COMP%]{display:flex;justify-content:flex-start}.added-contacts-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}.added-contacts-container[_ngcontent-%COMP%]   app-contact[_ngcontent-%COMP%]{cursor:initial}.contacts-container[_ngcontent-%COMP%]{padding:16px;width:100%;box-sizing:border-box}.no-contacts[_ngcontent-%COMP%]{color:#bfbfbf}div.added-contacts-container[_ngcontent-%COMP%]   app-contact[_ngcontent-%COMP%]:hover{background:#eee!important}.button-call-block[_ngcontent-%COMP%]{flex:1 1 0;width:100%;display:flex;justify-content:center;align-items:center}.button-call-block[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{top:-28px}.button-call-block[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{position:relative;top:-2px}button.toolbar-button.active[_ngcontent-%COMP%]{background:rgba(255,255,255,.15)}.element-control-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-bottom:16px}mat-toolbar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{position:relative;top:-2px}@media (max-width:400px){.add-header[_ngcontent-%COMP%]{display:none}}"]],data:{}});function $(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"span",[["class","new-message-header add-header"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" : \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430"]))],null,null)}function ll(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"app-phone-control",[["class","smsCall"]],null,null,null,T,H)),t.pb(1,49152,null,0,S,[F,j.a],null,null)],null,null)}function nl(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"app-contact-search",[["class","pushCall"]],null,[[null,"selectedOption"]],(function(l,n,e){var t=!0;return"selectedOption"===n&&(t=!1!==l.component.onOptionSelect(e)&&t),t}),R.b,R.a)),t.pb(1,114688,null,0,D.a,[j.a,t.h],{collection:[0,"collection"],baseCollection:[1,"baseCollection"]},{selectedOption:"selectedOption"})],(function(l,n){var e=n.component;l(n,1,0,e.messageContacts,e.appContext.contacts)}),null)}function el(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,5,"div",[["class","element-control-container"]],null,null,null,null,null)),t.pb(1,16384,null,0,f.p,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),t.gb(16777216,null,null,1,null,ll)),t.pb(3,278528,null,0,f.q,[t.N,t.K,f.p],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t.gb(16777216,null,null,1,null,nl)),t.pb(5,278528,null,0,f.q,[t.N,t.K,f.p],{ngSwitchCase:[0,"ngSwitchCase"]},null)],(function(l,n){l(n,1,0,n.component.callModel),l(n,3,0,0),l(n,5,0,1)}),null)}function tl(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,20,"mat-toolbar",[["class","mat-toolbar"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,K.b,K.a)),t.pb(1,4243456,null,1,U.a,[t.k,d.a,f.d],{color:[0,"color"]},null),t.Hb(603979776,1,{_toolbarRows:1}),(l()(),t.qb(3,0,null,0,1,"span",[["class","new-message-header"]],null,null,null,null,null)),(l()(),t.Jb(4,null,["",""])),(l()(),t.gb(16777216,null,0,1,null,$)),t.pb(6,16384,null,0,f.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(7,0,null,0,0,"span",[["class","example-spacer"]],null,null,null,null,null)),(l()(),t.qb(8,16777216,null,0,7,"button",[["class","toolbar-button search-trigger"],["mat-icon-button",""],["matTooltip","\u041f\u043e\u0438\u0441\u043a"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],(function(l,n,e){var a=!0,o=l.component;return"longpress"===n&&(a=!1!==t.Cb(l,12).show()&&a),"keydown"===n&&(a=!1!==t.Cb(l,12)._handleKeydown(e)&&a),"touchend"===n&&(a=!1!==t.Cb(l,12)._handleTouchend()&&a),"click"===n&&(a=!1!==o.triggerSearch()&&a),a}),w.b,w.a)),t.Gb(512,null,f.y,f.z,[t.q,t.r,t.k,t.C]),t.pb(10,278528,null,0,f.j,[f.y],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Eb(11,{active:0}),t.pb(12,212992,null,0,A.d,[q.c,t.k,h.a,t.N,t.x,d.a,m.c,m.f,A.b,[2,b.b],[2,A.a],[2,O.f]],{message:[0,"message"]},null),t.pb(13,180224,null,0,y.b,[t.k,m.f,[2,p.a]],null,null),(l()(),t.qb(14,0,null,0,1,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,x.b,x.a)),t.pb(15,9158656,null,0,k.b,[t.k,k.d,[8,null],[2,k.a],[2,t.l]],{svgIcon:[0,"svgIcon"]},null),(l()(),t.qb(16,16777216,null,0,4,"button",[["class","toolbar-button delete-contact"],["mat-icon-button",""],["matTooltip","\u0423\u0434\u0430\u043b\u0438\u0442\u044c"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],(function(l,n,e){var a=!0,o=l.component;return"longpress"===n&&(a=!1!==t.Cb(l,17).show()&&a),"keydown"===n&&(a=!1!==t.Cb(l,17)._handleKeydown(e)&&a),"touchend"===n&&(a=!1!==t.Cb(l,17)._handleTouchend()&&a),"click"===n&&(a=!1!==o.onDeleteItems()&&a),a}),w.b,w.a)),t.pb(17,212992,null,0,A.d,[q.c,t.k,h.a,t.N,t.x,d.a,m.c,m.f,A.b,[2,b.b],[2,A.a],[2,O.f]],{message:[0,"message"]},null),t.pb(18,180224,null,0,y.b,[t.k,m.f,[2,p.a]],{disabled:[0,"disabled"]},null),(l()(),t.qb(19,0,null,0,1,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,x.b,x.a)),t.pb(20,9158656,null,0,k.b,[t.k,k.d,[8,null],[2,k.a],[2,t.l]],{svgIcon:[0,"svgIcon"]},null),(l()(),t.qb(21,0,null,null,12,"div",[["class","new-message-container"]],null,null,null,null,null)),(l()(),t.qb(22,0,null,null,11,"div",[["class","choose-contacts-container"]],null,null,null,null,null)),(l()(),t.qb(23,0,null,null,4,"div",[["class","contacts-container"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,el)),t.pb(25,16384,null,0,f.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(26,0,null,null,1,"app-contact-table",[["class","new-message-table"]],null,[[null,"activatedContact"]],(function(l,n,e){var t=!0;return"activatedContact"===n&&(t=!1!==l.component.onActivatedContact(e)&&t),t}),z.b,z.a)),t.pb(27,49152,null,0,V.a,[j.a,W.a],{context:[0,"context"]},{activatedContact:"activatedContact"}),(l()(),t.qb(28,0,null,null,5,"div",[["class","button-call-block"]],[[4,"backgroundColor",null]],null,null,null,null)),(l()(),t.qb(29,0,null,null,4,"button",[["mat-fab",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.onStartCall()&&t),t}),w.b,w.a)),t.pb(30,180224,null,0,y.b,[t.k,m.f,[2,p.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(l()(),t.qb(31,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,x.b,x.a)),t.pb(32,9158656,null,0,k.b,[t.k,k.d,[8,null],[2,k.a],[2,t.l]],null,null),(l()(),t.Jb(-1,0,["call"]))],(function(l,n){var e=n.component;l(n,1,0,"primary"),l(n,6,0,e.search);var t=l(n,11,0,e.search);l(n,10,0,"toolbar-button search-trigger",t),l(n,12,0,"\u041f\u043e\u0438\u0441\u043a"),l(n,15,0,e.buttons[0]),l(n,17,0,"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"),l(n,18,0,e.activateEdit),l(n,20,0,e.buttons[1]),l(n,25,0,e.search),l(n,27,0,e.messageContacts),l(n,30,0,!e.messageContacts.value.length,"accent"),l(n,32,0)}),(function(l,n){var e=n.component;l(n,0,0,t.Cb(n,1)._toolbarRows.length>0,0===t.Cb(n,1)._toolbarRows.length),l(n,4,0,e.newMessageHeader),l(n,8,0,t.Cb(n,13).disabled||null,"NoopAnimations"===t.Cb(n,13)._animationMode),l(n,14,0,t.Cb(n,15).inline,"primary"!==t.Cb(n,15).color&&"accent"!==t.Cb(n,15).color&&"warn"!==t.Cb(n,15).color),l(n,16,0,t.Cb(n,18).disabled||null,"NoopAnimations"===t.Cb(n,18)._animationMode),l(n,19,0,t.Cb(n,20).inline,"primary"!==t.Cb(n,20).color&&"accent"!==t.Cb(n,20).color&&"warn"!==t.Cb(n,20).color),l(n,28,0,e.colorThemeService.getThemeColor("light")),l(n,29,0,t.Cb(n,30).disabled||null,"NoopAnimations"===t.Cb(n,30)._animationMode),l(n,31,0,t.Cb(n,32).inline,"primary"!==t.Cb(n,32).color&&"accent"!==t.Cb(n,32).color&&"warn"!==t.Cb(n,32).color)}))}var al=t.mb("app-new-message",F,(function(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"app-new-message",[],null,null,null,tl,Y)),t.pb(1,245760,null,0,F,[j.a,X.a,Z.a,W.a,B.a,Q.o],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),ol=e("NcP4"),ul=e("POq0"),il=e("gavF"),cl=e("/Co4"),rl=e("/q54"),sl=function l(){_classCallCheck(this,l)},bl=e("igqZ"),dl=e("zMNK"),pl=e("8P0U"),Cl=e("W5yJ"),gl=e("elxJ"),hl=e("rWV4"),ml=e("KPQW"),fl=e("mkRZ"),vl=e("pBi1"),_l=e("lT8R"),wl=e("7of8"),yl=e("VDRc"),xl=e("ura0"),kl=e("Nhcz"),Al=e("u9T3"),ql=e("Gcy5");e.d(n,"NewMessageModuleNgFactory",(function(){return Ol}));var Ol=t.nb(a,[],(function(l){return t.zb([t.Ab(512,t.j,t.Z,[[8,[o.a,al,ol.a]],[3,t.j],t.v]),t.Ab(4608,f.n,f.m,[t.s,[2,f.D]]),t.Ab(4608,ul.c,ul.c,[]),t.Ab(4608,q.c,q.c,[q.i,q.e,t.j,q.h,q.f,t.p,t.x,f.d,b.b,[2,f.h]]),t.Ab(5120,q.j,q.k,[q.c]),t.Ab(5120,g.a,g.b,[q.c]),t.Ab(5120,A.b,A.c,[q.c]),t.Ab(4608,O.e,i.c,[[2,i.g],[2,i.l]]),t.Ab(4608,i.b,i.b,[]),t.Ab(5120,il.a,il.d,[q.c]),t.Ab(5120,cl.b,cl.c,[q.c]),t.Ab(4608,r.e,r.e,[]),t.Ab(4608,r.w,r.w,[]),t.Ab(5120,t.b,(function(l,n){return[rl.j(l,n)]}),[f.d,t.z]),t.Ab(1073742336,f.c,f.c,[]),t.Ab(1073742336,Q.s,Q.s,[[2,Q.x],[2,Q.o]]),t.Ab(1073742336,sl,sl,[]),t.Ab(1073742336,b.a,b.a,[]),t.Ab(1073742336,i.l,i.l,[[2,i.d],[2,O.f]]),t.Ab(1073742336,U.b,U.b,[]),t.Ab(1073742336,k.c,k.c,[]),t.Ab(1073742336,bl.c,bl.c,[]),t.Ab(1073742336,ul.d,ul.d,[]),t.Ab(1073742336,c.e,c.e,[]),t.Ab(1073742336,dl.e,dl.e,[]),t.Ab(1073742336,d.b,d.b,[]),t.Ab(1073742336,h.b,h.b,[]),t.Ab(1073742336,q.g,q.g,[]),t.Ab(1073742336,i.v,i.v,[]),t.Ab(1073742336,i.t,i.t,[]),t.Ab(1073742336,i.q,i.q,[]),t.Ab(1073742336,g.d,g.d,[]),t.Ab(1073742336,m.a,m.a,[]),t.Ab(1073742336,A.e,A.e,[]),t.Ab(1073742336,y.c,y.c,[]),t.Ab(1073742336,_.c,_.c,[]),t.Ab(1073742336,v.b,v.b,[]),t.Ab(1073742336,pl.c,pl.c,[]),t.Ab(1073742336,Cl.c,Cl.c,[]),t.Ab(1073742336,gl.d,gl.d,[]),t.Ab(1073742336,hl.j,hl.j,[]),t.Ab(1073742336,ml.b,ml.b,[]),t.Ab(1073742336,il.c,il.c,[]),t.Ab(1073742336,il.b,il.b,[]),t.Ab(1073742336,cl.e,cl.e,[]),t.Ab(1073742336,fl.a,fl.a,[]),t.Ab(1073742336,vl.d,vl.d,[]),t.Ab(1073742336,vl.c,vl.c,[]),t.Ab(1073742336,_l.a,_l.a,[]),t.Ab(1073742336,wl.a,wl.a,[]),t.Ab(1073742336,r.v,r.v,[]),t.Ab(1073742336,r.s,r.s,[]),t.Ab(1073742336,rl.c,rl.c,[]),t.Ab(1073742336,yl.a,yl.a,[]),t.Ab(1073742336,xl.c,xl.c,[]),t.Ab(1073742336,kl.a,kl.a,[]),t.Ab(1073742336,Al.a,Al.a,[[2,rl.g],t.z]),t.Ab(1073742336,ql.a,ql.a,[]),t.Ab(1073742336,a,a,[]),t.Ab(1024,Q.m,(function(){return[[{path:"",component:F}]]}),[])])}))}}]);
//# sourceMappingURL=17-es5.1f7f97b7e224430c1c39.js.map