function _defineProperties(n,l){for(var t=0;t<l.length;t++){var o=l[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{xeox:function(n,l,t){"use strict";t.r(l);var o=t("8Y7J"),e=function n(){_classCallCheck(this,n)},u=t("pMnS"),c=t("bujt"),a=t("Mz6y"),i=t("QQfA"),r=t("hOhj"),s=t("/HVE"),b=t("5GAg"),p=t("IP0z"),d=t("cUpR"),m=t("Fwaw"),g=t("omvX"),f=t("Mr+X"),h=t("Gi4r"),C=t("SVse"),x=t("mrSG"),v=function(){function n(l,t,o){var e=this;_classCallCheck(this,n),this.appContext=l,this.webRtcService=t,this.database=o,this.currentCall=!1,this.buttons=[{tip:"\u041f\u0440\u0438\u043d\u044f\u0442\u044c",icon:"check_circle",color:"#00902e",listener:function(n){e.onCancel("accepted")}},{tip:"\u041e\u0442\u043a\u043b\u043e\u043d\u0438\u0442\u044c",icon:"highlight_off",color:"#9e1f00",listener:function(n){e.onCancel("denied")}}]}return _createClass(n,[{key:"onCancel",value:function(n){var l=this;this.context.desc&&this.database.setDescriptorOptions({descriptor:this.context.desc,data:{active:!1,action:n}}),this.context.active=!1;var t=this.appContext.popups.value.findIndex((function(n){return n.uid===l.context.uid}));t>-1&&this.appContext.setPopups({type:!1,popup:void 0,index:t}),this.appContext.appChangeRef.detectChanges()}},{key:"onErrorContactImg",value:function(n){return x.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.database.onErrorContactImg(n,this.context);case 2:return l.abrupt("return",!0);case 3:case"end":return l.stop()}}),l,this)})))}},{key:"ngOnInit",value:function(){var n=this;this.contactName=this.context.contact.name||this.context.contact.displayName||this.context.contact.phoneNumber||this.context.contact.email,this.currentCall=!!Object.values(this.appContext.webRtcContexts.contexts.value).length;var l=window.setTimeout((function(){window.clearTimeout(l),n.onCancel("ignored")}),[2e4,3e4,4e4][parseInt(window.localStorage.getItem("dialogTimes"))])}}]),n}(),k=t("VYsW"),w=t("hoN+"),_=t("ZJFI"),y=o.ob({encapsulation:0,styles:[[".base-announcement[_nghost-%COMP%]   .incoming-call-container[_ngcontent-%COMP%], .base-announcement   [_nghost-%COMP%]   .incoming-call-container[_ngcontent-%COMP%]{background-color:initial;margin:0;z-index:initial;padding:0}.incoming-call-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:12px;background-color:#e9e9e9}.top-block[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-items:center}.main-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-items:center;align-items:flex-start}.incoming-call-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-right:8px;white-space:nowrap}.attention-text[_ngcontent-%COMP%]{color:#c56700;font-weight:700}app-contact[_ngcontent-%COMP%]{margin-right:8px}.contact-img[_ngcontent-%COMP%]{width:36px;height:36px;margin-right:8px}.incoming-call-button[_ngcontent-%COMP%]{cursor:pointer}.incoming-call-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{top:-2px!important;position:relative}button[_ngcontent-%COMP%]:disabled{color:#b6b6b6!important}@media (max-width :400px){div.call-text[_ngcontent-%COMP%]{display:none}}"]],data:{}});function A(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,1,"div",[["class","top-block call-text"]],null,null,null,null,null)),(n()(),o.Jb(-1,null,["\u0412\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0432\u0438\u0434\u0435\u043e\u0437\u0432\u043e\u043d\u043e\u043a. "]))],null,null)}function O(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,1,"div",[["class","attention-text"]],null,null,null,null,null)),(n()(),o.Jb(-1,null,["\u0422\u0435\u043a\u0443\u0449\u0435\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043a\u0440\u044b\u0442\u043e!"]))],null,null)}function q(n){return o.Lb(0,[(n()(),o.qb(0,16777216,null,null,5,"button",[["class","incoming-call-button"],["mat-icon-button",""]],[[4,"color",null],[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],(function(n,l,t){var e=!0,u=n.component;return"longpress"===l&&(e=!1!==o.Cb(n,1).show()&&e),"keydown"===l&&(e=!1!==o.Cb(n,1)._handleKeydown(t)&&e),"touchend"===l&&(e=!1!==o.Cb(n,1)._handleTouchend()&&e),"click"===l&&(e=!1!==n.context.$implicit.listener({context:u.context,event:t})&&e),e}),c.b,c.a)),o.pb(1,212992,null,0,a.d,[i.c,o.k,r.a,o.N,o.x,s.a,b.c,b.f,a.b,[2,p.b],[2,a.a],[2,d.f]],{message:[0,"message"]},null),o.pb(2,180224,null,0,m.b,[o.k,b.f,[2,g.a]],{disabled:[0,"disabled"]},null),(n()(),o.qb(3,0,null,0,2,"mat-icon",[["class","button-icon mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),o.pb(4,9158656,null,0,h.b,[o.k,h.d,[8,null],[2,h.a],[2,o.l]],null,null),(n()(),o.Jb(5,0,["",""])),(n()(),o.gb(0,null,null,0))],(function(n,l){var t=l.component;n(l,1,0,l.context.$implicit.tip),n(l,2,0,!t.context.active),n(l,4,0)}),(function(n,l){n(l,0,0,l.context.$implicit.color,o.Cb(l,2).disabled||null,"NoopAnimations"===o.Cb(l,2)._animationMode),n(l,3,0,o.Cb(l,4).inline,"primary"!==o.Cb(l,4).color&&"accent"!==o.Cb(l,4).color&&"warn"!==o.Cb(l,4).color),n(l,5,0,l.context.$implicit.icon)}))}function M(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,11,"div",[["class","incoming-call-container"]],null,null,null,null,null)),(n()(),o.qb(1,0,null,null,0,"img",[["alt","\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430"],["class","contact-img"]],[[8,"src",4],[4,"backgroundColor",null]],[[null,"error"]],(function(n,l,t){var o=!0;return"error"===l&&(o=!1!==n.component.onErrorContactImg(t)&&o),o}),null,null)),(n()(),o.qb(2,0,null,null,6,"div",[["class","main-text"]],null,null,null,null,null)),(n()(),o.qb(3,0,null,null,1,"div",[["class","contact-name"]],null,null,null,null,null)),(n()(),o.Jb(4,null,["",""])),(n()(),o.gb(16777216,null,null,1,null,A)),o.pb(6,16384,null,0,C.l,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(n()(),o.gb(16777216,null,null,1,null,O)),o.pb(8,16384,null,0,C.l,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(n()(),o.qb(9,0,null,null,0,"div",[["class","example-spacer"]],null,null,null,null,null)),(n()(),o.gb(16777216,null,null,1,null,q)),o.pb(11,278528,null,0,C.k,[o.N,o.K,o.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var t=l.component;n(l,6,0,!t.currentCall),n(l,8,0,t.currentCall),n(l,11,0,t.buttons)}),(function(n,l){var t=l.component;n(l,1,0,t.context.contact.photoURL,t.context.contact.imgColor),n(l,4,0,t.contactName)}))}var P=function(){function n(l,t){_classCallCheck(this,n),this.appContext=l,this.database=t,this.buttons=[{tip:"Ok",icon:"check_circle",color:"#00902e",listener:this.buttonListener.bind(this)}]}return _createClass(n,[{key:"buttonListener",value:function(){this.context.listener&&this.context.listener(),this.onClose()}},{key:"onErrorContactImg",value:function(n){return this.database.onErrorContactImg(n,this.context).then((function(n){console.log("\u0417\u0430\u043f\u0440\u043e\u0441 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430.")})),!0}},{key:"ngOnInit",value:function(){var n=this;this.contactName=this.context.contact.name||this.context.contact.displayName||this.context.contact.phoneNumber||this.context.contact.email;var l=window.setTimeout((function(){window.clearTimeout(l),n.buttonListener()}),[2e4,3e4,4e4][parseInt(window.localStorage.getItem("dialogTimes"))])}},{key:"onClose",value:function(){var n=this;this.context.active=!1;var l=this.appContext.popups.value.findIndex((function(l){return l.uid===n.context.uid}));l>-1&&this.appContext.setPopups({type:!1,popup:void 0,index:l}),this.appContext.appChangeRef.detectChanges()}}]),n}(),N=o.ob({encapsulation:0,styles:[[".popup-container[_nghost-%COMP%]   .offer-status-container[_ngcontent-%COMP%], .popup-container   [_nghost-%COMP%]   .offer-status-container[_ngcontent-%COMP%]{background-color:#e9e9e9;padding:12px}[_nghost-%COMP%]{flex:1 1 0}.offer-status-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;min-width:250px}.contact-img[_ngcontent-%COMP%]{width:36px;height:36px;margin-right:8px}"]],data:{}});function I(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,4,"button",[["mat-icon-button",""]],[[4,"color",null],[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.context.$implicit.listener()&&o),o}),c.b,c.a)),o.pb(1,180224,null,0,m.b,[o.k,b.f,[2,g.a]],{disabled:[0,"disabled"]},null),(n()(),o.qb(2,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),o.pb(3,9158656,null,0,h.b,[o.k,h.d,[8,null],[2,h.a],[2,o.l]],null,null),(n()(),o.Jb(4,0,["",""]))],(function(n,l){n(l,1,0,!l.component.context.active),n(l,3,0)}),(function(n,l){n(l,0,0,l.context.$implicit.color,o.Cb(l,1).disabled||null,"NoopAnimations"===o.Cb(l,1)._animationMode),n(l,2,0,o.Cb(l,3).inline,"primary"!==o.Cb(l,3).color&&"accent"!==o.Cb(l,3).color&&"warn"!==o.Cb(l,3).color),n(l,4,0,l.context.$implicit.icon)}))}function L(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,9,"div",[["class","offer-status-container"]],null,null,null,null,null)),(n()(),o.qb(1,0,null,null,0,"img",[["alt","\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430"],["class","contact-img"]],[[8,"src",4],[4,"backgroundColor",null]],[[null,"error"]],(function(n,l,t){var o=!0;return"error"===l&&(o=!1!==n.component.onErrorContactImg(t)&&o),o}),null,null)),(n()(),o.qb(2,0,null,null,4,"div",[["class","main-text"]],null,null,null,null,null)),(n()(),o.qb(3,0,null,null,1,"div",[["class","contact-name"]],null,null,null,null,null)),(n()(),o.Jb(4,null,["",""])),(n()(),o.qb(5,0,null,null,1,"div",[["class","offer-status-text"]],null,null,null,null,null)),(n()(),o.Jb(6,null,["",""])),(n()(),o.qb(7,0,null,null,0,"div",[["class","example-spacer"]],null,null,null,null,null)),(n()(),o.gb(16777216,null,null,1,null,I)),o.pb(9,278528,null,0,C.k,[o.N,o.K,o.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,9,0,l.component.buttons)}),(function(n,l){var t=l.component;n(l,1,0,t.context.contact.photoURL,t.context.contact.imgColor),n(l,4,0,t.contactName),n(l,6,0,t.context.text)}))}var K=function(){function n(l){var t=this;_classCallCheck(this,n),this.swUpdate=l,this.buttons=[{tip:"Ok",icon:"check_circle",color:"#00902e",listener:function(){t.context.listener(t.context)}}]}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),T=t("V65D"),j=o.ob({encapsulation:0,styles:[["[_nghost-%COMP%]{width:100%}.update-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.contact-img[_ngcontent-%COMP%]{width:36px;height:36px;margin-right:8px}"]],data:{}});function J(n){return o.Lb(0,[(n()(),o.qb(0,16777216,null,null,5,"button",[["mat-icon-button",""]],[[4,"color",null],[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],(function(n,l,t){var e=!0;return"longpress"===l&&(e=!1!==o.Cb(n,1).show()&&e),"keydown"===l&&(e=!1!==o.Cb(n,1)._handleKeydown(t)&&e),"touchend"===l&&(e=!1!==o.Cb(n,1)._handleTouchend()&&e),"click"===l&&(e=!1!==n.context.$implicit.listener()&&e),e}),c.b,c.a)),o.pb(1,212992,null,0,a.d,[i.c,o.k,r.a,o.N,o.x,s.a,b.c,b.f,a.b,[2,p.b],[2,a.a],[2,d.f]],{message:[0,"message"]},null),o.pb(2,180224,null,0,m.b,[o.k,b.f,[2,g.a]],{disabled:[0,"disabled"]},null),(n()(),o.qb(3,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),o.pb(4,9158656,null,0,h.b,[o.k,h.d,[8,null],[2,h.a],[2,o.l]],null,null),(n()(),o.Jb(5,0,["",""])),(n()(),o.gb(0,null,null,0))],(function(n,l){var t=l.component;n(l,1,0,l.context.$implicit.tip),n(l,2,0,!t.context.active),n(l,4,0)}),(function(n,l){n(l,0,0,l.context.$implicit.color,o.Cb(l,2).disabled||null,"NoopAnimations"===o.Cb(l,2)._animationMode),n(l,3,0,o.Cb(l,4).inline,"primary"!==o.Cb(l,4).color&&"accent"!==o.Cb(l,4).color&&"warn"!==o.Cb(l,4).color),n(l,5,0,l.context.$implicit.icon)}))}function S(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),o.gb(16777216,null,null,1,null,J)),o.pb(2,278528,null,0,C.k,[o.N,o.K,o.q],{ngForOf:[0,"ngForOf"]},null),(n()(),o.gb(0,null,null,0))],(function(n,l){n(l,2,0,l.component.buttons)}),null)}function F(n){return o.Lb(0,[o.Db(0,C.e,[o.s]),(n()(),o.qb(1,0,null,null,11,"div",[["class","update-container"]],null,null,null,null,null)),(n()(),o.qb(2,0,null,null,1,"mat-icon",[["class","contact-img mat-icon notranslate"],["role","img"]],[[4,"color",null],[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),o.pb(3,9158656,null,0,h.b,[o.k,h.d,[8,null],[2,h.a],[2,o.l]],{svgIcon:[0,"svgIcon"]},null),(n()(),o.qb(4,0,null,null,5,"div",[["class","main-text"]],null,null,null,null,null)),(n()(),o.qb(5,0,null,null,2,"div",[["class","call-date"]],null,null,null,null,null)),(n()(),o.Jb(6,null,["",""])),o.Fb(7,4),(n()(),o.qb(8,0,null,null,1,"div",[["class","call-text"]],null,null,null,null,null)),(n()(),o.Jb(9,null,["",""])),(n()(),o.qb(10,0,null,null,0,"div",[["class","example-spacer"]],null,null,null,null,null)),(n()(),o.gb(16777216,null,null,1,null,S)),o.pb(12,16384,null,0,C.l,[o.N,o.K],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,3,0,"attention"),n(l,12,0,t.context.desc.update)}),(function(n,l){var t=l.component;n(l,2,0,"#0079ff",o.Cb(l,3).inline,"primary"!==o.Cb(l,3).color&&"accent"!==o.Cb(l,3).color&&"warn"!==o.Cb(l,3).color);var e=o.Kb(l,6,0,n(l,7,0,o.Cb(l,0),t.context.date,"short","","ru"));n(l,6,0,e),n(l,9,0,t.context.text)}))}var R=function(){function n(l,t){_classCallCheck(this,n),this.sanitizer=l,this.colorThemeService=t,this.activatedMarkColor="#cdcdcd"}return _createClass(n,[{key:"ngOnInit",value:function(){this.activatedMarkColor=this.context.active?this.colorThemeService.getThemeColor("backgroundColor"):this.activatedMarkColor}}]),n}(),z=t("V+Fh"),$=o.ob({encapsulation:0,styles:[[".announcement-container[_ngcontent-%COMP%]{padding:12px;display:flex;flex-direction:row;align-items:center;justify-content:flex-start}.base-announcement[_ngcontent-%COMP%]   app-incoming-call-notification[_ngcontent-%COMP%]{flex:1 1 0}.date-block[_ngcontent-%COMP%]{margin-right:8px;white-space:nowrap}.activated-mark[_ngcontent-%COMP%]{height:10px;margin-right:8px;flex:0 0 10px;border-radius:50%}.announcement-container[_ngcontent-%COMP%]:hover{background-color:#ececec}"]],data:{}});function D(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,4,"div",[["class","zero-announcement  any-announce"]],null,null,null,null,null)),(n()(),o.qb(1,0,null,null,2,"div",[["class","date-block"]],null,null,null,null,null)),(n()(),o.Jb(2,null,["",""])),o.Fb(3,4),(n()(),o.qb(4,0,null,null,0,"div",[["class","contains"]],[[8,"innerHTML",1]],null,null,null,null))],null,(function(n,l){var t=l.component,e=o.Kb(l,2,0,n(l,3,0,o.Cb(l.parent,0),t.context.date,"short","","ru"));n(l,2,0,e),n(l,4,0,t.sanitizer.bypassSecurityTrustHtml(t.context.content))}))}function E(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,1,"app-incoming-call-notification",[],null,null,null,M,y)),o.pb(1,114688,null,0,v,[k.a,w.a,_.a],{context:[0,"context"]},null)],(function(n,l){n(l,1,0,l.component.context)}),null)}function V(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,1,"app-offer-status",[],null,null,null,L,N)),o.pb(1,114688,null,0,P,[k.a,_.a],{context:[0,"context"]},null)],(function(n,l){n(l,1,0,l.component.context)}),null)}function H(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,1,"app-update-notification",[],null,null,null,F,j)),o.pb(1,114688,null,0,K,[T.a],{context:[0,"context"]},null)],(function(n,l){n(l,1,0,l.component.context)}),null)}function U(n){return o.Lb(0,[o.Db(0,C.e,[o.s]),(n()(),o.qb(1,0,null,null,11,"div",[["class","base-announcement"]],null,null,null,null,null)),o.pb(2,16384,null,0,C.p,[],{ngSwitch:[0,"ngSwitch"]},null),(n()(),o.qb(3,0,null,null,9,"div",[["class","announcement-container"]],null,null,null,null,null)),(n()(),o.qb(4,0,null,null,0,"div",[["class","activated-mark"]],[[4,"backgroundColor",null]],null,null,null,null)),(n()(),o.gb(16777216,null,null,1,null,D)),o.pb(6,278528,null,0,C.q,[o.N,o.K,C.p],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),o.gb(16777216,null,null,1,null,E)),o.pb(8,278528,null,0,C.q,[o.N,o.K,C.p],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),o.gb(16777216,null,null,1,null,V)),o.pb(10,278528,null,0,C.q,[o.N,o.K,C.p],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),o.gb(16777216,null,null,1,null,H)),o.pb(12,278528,null,0,C.q,[o.N,o.K,C.p],{ngSwitchCase:[0,"ngSwitchCase"]},null)],(function(n,l){n(l,2,0,l.component.context.type),n(l,6,0,0),n(l,8,0,1),n(l,10,0,2),n(l,12,0,3)}),(function(n,l){n(l,4,0,l.component.activatedMarkColor)}))}var W=t("FbN9"),Z=t("BzsH"),G=function(){function n(l){_classCallCheck(this,n),this.appContext=l,this.header="\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f",this.buttons=[]}return _createClass(n,[{key:"ngOnDestroy",value:function(){this.appContext.announcements.next(this.appContext.announcements.value.map((function(n){return/0|1|2/.test(n.type+"")&&(n.active=!1),n})))}},{key:"ngOnInit",value:function(){this.buttons=["bell_check","bell_off"]}},{key:"onOpenAnnouncement",value:function(){}}]),n}(),Q=o.ob({encapsulation:0,styles:[[".announcement-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:stretch;height:100%}.announcement-base[_ngcontent-%COMP%]{overflow-y:auto;flex:1 1 0}.announcement-header[_ngcontent-%COMP%]{font-size:18px!important}mat-icon[_ngcontent-%COMP%]{position:relative;top:-2px}"]],data:{}});function X(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,1,"app-announcement",[],null,null,null,U,$)),o.pb(1,114688,null,0,R,[d.b,z.a],{context:[0,"context"]},null)],(function(n,l){n(l,1,0,l.context.$implicit)}),null)}function B(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,20,"div",[["class","announcement-block"]],null,null,null,null,null)),(n()(),o.qb(1,0,null,null,15,"mat-toolbar",[["class","mat-toolbar"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,W.b,W.a)),o.pb(2,4243456,null,1,Z.a,[o.k,s.a,C.d],{color:[0,"color"]},null),o.Hb(603979776,1,{_toolbarRows:1}),(n()(),o.qb(4,0,null,0,1,"span",[["class","announcement-header"]],null,null,null,null,null)),(n()(),o.Jb(5,null,["",""])),(n()(),o.qb(6,0,null,0,0,"span",[["class","example-spacer"]],null,null,null,null,null)),(n()(),o.qb(7,16777216,null,0,4,"button",[["class","toolbar-button open-announce"],["mat-icon-button",""],["matTooltip","\u041e\u0442\u043a\u0440\u044b\u0442\u044c"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],(function(n,l,t){var e=!0,u=n.component;return"longpress"===l&&(e=!1!==o.Cb(n,8).show()&&e),"keydown"===l&&(e=!1!==o.Cb(n,8)._handleKeydown(t)&&e),"touchend"===l&&(e=!1!==o.Cb(n,8)._handleTouchend()&&e),"click"===l&&(e=!1!==u.onOpenAnnouncement()&&e),e}),c.b,c.a)),o.pb(8,212992,null,0,a.d,[i.c,o.k,r.a,o.N,o.x,s.a,b.c,b.f,a.b,[2,p.b],[2,a.a],[2,d.f]],{message:[0,"message"]},null),o.pb(9,180224,null,0,m.b,[o.k,b.f,[2,g.a]],null,null),(n()(),o.qb(10,0,null,0,1,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),o.pb(11,9158656,null,0,h.b,[o.k,h.d,[8,null],[2,h.a],[2,o.l]],{svgIcon:[0,"svgIcon"]},null),(n()(),o.qb(12,16777216,null,0,4,"button",[["class","toolbar-button delete-message"],["mat-icon-button",""],["matTooltip","\u0423\u0434\u0430\u043b\u0438\u0442\u044c"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"longpress"],[null,"keydown"],[null,"touchend"]],(function(n,l,t){var e=!0;return"longpress"===l&&(e=!1!==o.Cb(n,13).show()&&e),"keydown"===l&&(e=!1!==o.Cb(n,13)._handleKeydown(t)&&e),"touchend"===l&&(e=!1!==o.Cb(n,13)._handleTouchend()&&e),e}),c.b,c.a)),o.pb(13,212992,null,0,a.d,[i.c,o.k,r.a,o.N,o.x,s.a,b.c,b.f,a.b,[2,p.b],[2,a.a],[2,d.f]],{message:[0,"message"]},null),o.pb(14,180224,null,0,m.b,[o.k,b.f,[2,g.a]],null,null),(n()(),o.qb(15,0,null,0,1,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),o.pb(16,9158656,null,0,h.b,[o.k,h.d,[8,null],[2,h.a],[2,o.l]],{svgIcon:[0,"svgIcon"]},null),(n()(),o.qb(17,0,null,null,3,"div",[["class","announcement-base"]],null,null,null,null,null)),(n()(),o.gb(16777216,null,null,2,null,X)),o.pb(19,278528,null,0,C.k,[o.N,o.K,o.q],{ngForOf:[0,"ngForOf"]},null),o.Db(131072,C.b,[o.h])],(function(n,l){var t=l.component;n(l,2,0,"primary"),n(l,8,0,"\u041e\u0442\u043a\u0440\u044b\u0442\u044c"),n(l,11,0,t.buttons[0]),n(l,13,0,"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"),n(l,16,0,t.buttons[1]),n(l,19,0,o.Kb(l,19,0,o.Cb(l,20).transform(t.appContext.announcements)))}),(function(n,l){var t=l.component;n(l,1,0,o.Cb(l,2)._toolbarRows.length>0,0===o.Cb(l,2)._toolbarRows.length),n(l,5,0,t.header),n(l,7,0,o.Cb(l,9).disabled||null,"NoopAnimations"===o.Cb(l,9)._animationMode),n(l,10,0,o.Cb(l,11).inline,"primary"!==o.Cb(l,11).color&&"accent"!==o.Cb(l,11).color&&"warn"!==o.Cb(l,11).color),n(l,12,0,o.Cb(l,14).disabled||null,"NoopAnimations"===o.Cb(l,14)._animationMode),n(l,15,0,o.Cb(l,16).inline,"primary"!==o.Cb(l,16).color&&"accent"!==o.Cb(l,16).color&&"warn"!==o.Cb(l,16).color)}))}var Y=o.mb("app-announcements",G,(function(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,1,"app-announcements",[],null,null,null,B,Q)),o.pb(1,245760,null,0,G,[k.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),nn=t("NcP4"),ln=t("POq0"),tn=t("JjoW"),on=t("Xd0L"),en=t("gavF"),un=t("/Co4"),cn=t("s7LF"),an=t("/q54"),rn=t("iInd"),sn=function n(){_classCallCheck(this,n)},bn=t("igqZ"),pn=t("HsOI"),dn=t("zMNK"),mn=t("oapL"),gn=t("ZwOa"),fn=t("8P0U"),hn=t("W5yJ"),Cn=t("elxJ"),xn=t("rWV4"),vn=t("KPQW"),kn=t("mkRZ"),wn=t("pBi1"),_n=t("lT8R"),yn=t("7of8"),An=t("VDRc"),On=t("ura0"),qn=t("Nhcz"),Mn=t("u9T3"),Pn=t("Gcy5");t.d(l,"AnnouncementsModuleNgFactory",(function(){return Nn}));var Nn=o.nb(e,[],(function(n){return o.zb([o.Ab(512,o.j,o.Z,[[8,[u.a,Y,nn.a]],[3,o.j],o.v]),o.Ab(4608,C.n,C.m,[o.s,[2,C.D]]),o.Ab(4608,ln.c,ln.c,[]),o.Ab(4608,i.c,i.c,[i.i,i.e,o.j,i.h,i.f,o.p,o.x,C.d,p.b,[2,C.h]]),o.Ab(5120,i.j,i.k,[i.c]),o.Ab(5120,tn.a,tn.b,[i.c]),o.Ab(5120,a.b,a.c,[i.c]),o.Ab(4608,d.e,on.c,[[2,on.g],[2,on.l]]),o.Ab(4608,on.b,on.b,[]),o.Ab(5120,en.a,en.d,[i.c]),o.Ab(5120,un.b,un.c,[i.c]),o.Ab(4608,cn.e,cn.e,[]),o.Ab(4608,cn.w,cn.w,[]),o.Ab(5120,o.b,(function(n,l){return[an.j(n,l)]}),[C.d,o.z]),o.Ab(1073742336,C.c,C.c,[]),o.Ab(1073742336,rn.s,rn.s,[[2,rn.x],[2,rn.o]]),o.Ab(1073742336,sn,sn,[]),o.Ab(1073742336,p.a,p.a,[]),o.Ab(1073742336,on.l,on.l,[[2,on.d],[2,d.f]]),o.Ab(1073742336,Z.b,Z.b,[]),o.Ab(1073742336,h.c,h.c,[]),o.Ab(1073742336,bn.c,bn.c,[]),o.Ab(1073742336,ln.d,ln.d,[]),o.Ab(1073742336,pn.e,pn.e,[]),o.Ab(1073742336,dn.e,dn.e,[]),o.Ab(1073742336,s.b,s.b,[]),o.Ab(1073742336,r.b,r.b,[]),o.Ab(1073742336,i.g,i.g,[]),o.Ab(1073742336,on.v,on.v,[]),o.Ab(1073742336,on.t,on.t,[]),o.Ab(1073742336,on.q,on.q,[]),o.Ab(1073742336,tn.d,tn.d,[]),o.Ab(1073742336,b.a,b.a,[]),o.Ab(1073742336,a.e,a.e,[]),o.Ab(1073742336,m.c,m.c,[]),o.Ab(1073742336,mn.c,mn.c,[]),o.Ab(1073742336,gn.b,gn.b,[]),o.Ab(1073742336,fn.c,fn.c,[]),o.Ab(1073742336,hn.c,hn.c,[]),o.Ab(1073742336,Cn.d,Cn.d,[]),o.Ab(1073742336,xn.j,xn.j,[]),o.Ab(1073742336,vn.b,vn.b,[]),o.Ab(1073742336,en.c,en.c,[]),o.Ab(1073742336,en.b,en.b,[]),o.Ab(1073742336,un.e,un.e,[]),o.Ab(1073742336,kn.a,kn.a,[]),o.Ab(1073742336,wn.d,wn.d,[]),o.Ab(1073742336,wn.c,wn.c,[]),o.Ab(1073742336,_n.a,_n.a,[]),o.Ab(1073742336,yn.a,yn.a,[]),o.Ab(1073742336,cn.v,cn.v,[]),o.Ab(1073742336,cn.s,cn.s,[]),o.Ab(1073742336,an.c,an.c,[]),o.Ab(1073742336,An.a,An.a,[]),o.Ab(1073742336,On.c,On.c,[]),o.Ab(1073742336,qn.a,qn.a,[]),o.Ab(1073742336,Mn.a,Mn.a,[[2,an.g],o.z]),o.Ab(1073742336,Pn.a,Pn.a,[]),o.Ab(1073742336,e,e,[]),o.Ab(1024,rn.m,(function(){return[[{path:"",component:G}]]}),[])])}))}}]);
//# sourceMappingURL=13-es5.c9e6fc2583a2abaacef3.js.map