function _defineProperties(n,l){for(var t=0;t<l.length;t++){var o=l[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{xeox:function(n,l,t){"use strict";t.r(l);var o=t("8Y7J"),e=function n(){_classCallCheck(this,n)},u=t("pMnS"),c=t("mrSG"),a=function(){function n(l,t,o){_classCallCheck(this,n),this.appContext=l,this.webRtcService=t,this.database=o,this.currentCall=!1}return _createClass(n,[{key:"onCancel",value:function(n){}},{key:"onErrorContactImg",value:function(n){return c.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.database.onErrorContactImg(n,this.context);case 2:return l.abrupt("return",!0);case 3:case"end":return l.stop()}}),l,this)})))}},{key:"ngOnInit",value:function(){this.contactName=this.context.contact.name||this.context.contact.displayName||this.context.contact.phoneNumber||this.context.contact.email,this.currentCall=!!Object.values(this.appContext.webRtcContexts.contexts.value).length}}]),n}(),i=t("VYsW"),r=t("hoN+"),s=t("ZJFI"),b=o.ob({encapsulation:0,styles:[[".base-announcement[_nghost-%COMP%]   .incoming-call-container[_ngcontent-%COMP%], .base-announcement   [_nghost-%COMP%]   .incoming-call-container[_ngcontent-%COMP%]{background-color:initial;margin:0;z-index:initial;padding:0}.incoming-call-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:12px;background-color:#e9e9e9}.main-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-items:center;align-items:flex-start}.incoming-call-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-right:8px;white-space:nowrap}.contact-img[_ngcontent-%COMP%]{width:36px;height:36px;margin-right:8px}"]],data:{}});function p(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,6,"div",[["class","incoming-call-container"]],null,null,null,null,null)),(n()(),o.qb(1,0,null,null,0,"img",[["alt","\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430"],["class","contact-img"]],[[8,"src",4],[4,"backgroundColor",null]],[[null,"error"]],(function(n,l,t){var o=!0;return"error"===l&&(o=!1!==n.component.onErrorContactImg(t)&&o),o}),null,null)),(n()(),o.qb(2,0,null,null,4,"div",[["class","main-text"]],null,null,null,null,null)),(n()(),o.qb(3,0,null,null,1,"div",[["class","contact-name"]],null,null,null,null,null)),(n()(),o.Jb(4,null,["",""])),(n()(),o.qb(5,0,null,null,1,"div",[["class","status-text"]],null,null,null,null,null)),(n()(),o.Jb(6,null,["",""]))],null,(function(n,l){var t=l.component;n(l,1,0,t.context.contact.photoURL,t.context.contact.imgColor),n(l,4,0,t.contactName),n(l,6,0,t.context.text)}))}var m=t("Mr+X"),d=t("Gi4r"),g=t("SVse"),f=function(){function n(l,t){_classCallCheck(this,n),this.appContext=l,this.database=t}return _createClass(n,[{key:"onErrorContactImg",value:function(n){return this.database.onErrorContactImg(n,this.context).then((function(n){console.log("\u0417\u0430\u043f\u0440\u043e\u0441 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430.")})),!0}},{key:"ngOnInit",value:function(){this.contactName=this.context.contact.name||this.context.contact.displayName||this.context.contact.phoneNumber||this.context.contact.email}}]),n}(),h=o.ob({encapsulation:0,styles:[[".popup-container[_nghost-%COMP%]   .offer-status-container[_ngcontent-%COMP%], .popup-container   [_nghost-%COMP%]   .offer-status-container[_ngcontent-%COMP%]{background-color:#e9e9e9;padding:12px}[_nghost-%COMP%]{flex:1 1 0}.offer-status-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;min-width:250px}.contact-img[_ngcontent-%COMP%]{width:36px;height:36px;margin-right:8px}"]],data:{}});function C(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,1,"mat-icon",[["alt","\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430"],["class","contact-img mat-icon notranslate"],["color","primary"],["role","img"]],[[4,"backgroundColor",null],[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],[[null,"error"]],(function(n,l,t){var o=!0;return"error"===l&&(o=!1!==n.component.onErrorContactImg(t)&&o),o}),m.b,m.a)),o.pb(1,9158656,null,0,d.b,[o.k,d.d,[8,null],[2,d.a],[2,o.l]],{color:[0,"color"],svgIcon:[1,"svgIcon"]},null)],(function(n,l){n(l,1,0,"primary",l.component.context.extra.icon)}),(function(n,l){n(l,0,0,l.component.context.contact.imgColor,o.Cb(l,1).inline,"primary"!==o.Cb(l,1).color&&"accent"!==o.Cb(l,1).color&&"warn"!==o.Cb(l,1).color)}))}function x(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,0,"img",[["alt","\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430"],["class","contact-img"]],[[8,"src",4],[4,"backgroundColor",null]],[[null,"error"]],(function(n,l,t){var o=!0;return"error"===l&&(o=!1!==n.component.onErrorContactImg(t)&&o),o}),null,null))],null,(function(n,l){var t=l.component;n(l,0,0,t.context.contact.photoURL,t.context.contact.imgColor)}))}function v(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,9,"div",[["class","offer-status-container"]],null,null,null,null,null)),(n()(),o.gb(16777216,null,null,1,null,C)),o.pb(2,16384,null,0,g.l,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(n()(),o.gb(16777216,null,null,1,null,x)),o.pb(4,16384,null,0,g.l,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(n()(),o.qb(5,0,null,null,4,"div",[["class","main-text"]],null,null,null,null,null)),(n()(),o.qb(6,0,null,null,1,"div",[["class","contact-name"]],null,null,null,null,null)),(n()(),o.Jb(7,null,["",""])),(n()(),o.qb(8,0,null,null,1,"div",[["class","offer-status-text"]],null,null,null,null,null)),(n()(),o.Jb(9,null,["",""]))],(function(n,l){var t=l.component;n(l,2,0,t.context.extra.icon),n(l,4,0,!t.context.extra.icon)}),(function(n,l){var t=l.component;n(l,7,0,t.contactName),n(l,9,0,t.context.text)}))}var k=t("bujt"),_=t("Mz6y"),w=t("QQfA"),y=t("hOhj"),A=t("/HVE"),q=t("5GAg"),O=t("IP0z"),M=t("cUpR"),P=t("Fwaw"),I=t("omvX"),N=function(){function n(l){var t=this;_classCallCheck(this,n),this.swUpdate=l,this.buttons=[{tip:"Ok",icon:"check_circle",color:"#006d24",listener:function(){t.context.listener(t.context)}}]}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),L=t("V65D"),j=o.ob({encapsulation:0,styles:[["[_nghost-%COMP%]{width:100%}.update-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.contact-img[_ngcontent-%COMP%]{width:36px;height:36px;margin-right:8px}"]],data:{}});function K(n){return o.Lb(0,[(n()(),o.qb(0,16777216,null,null,5,"button",[["mat-icon-button",""]],[[4,"color",null],[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],(function(n,l,t){var e=!0;return"longpress"===l&&(e=!1!==o.Cb(n,1).show()&&e),"keydown"===l&&(e=!1!==o.Cb(n,1)._handleKeydown(t)&&e),"touchend"===l&&(e=!1!==o.Cb(n,1)._handleTouchend()&&e),"click"===l&&(e=!1!==n.context.$implicit.listener()&&e),e}),k.b,k.a)),o.pb(1,212992,null,0,_.d,[w.c,o.k,y.a,o.N,o.x,A.a,q.c,q.f,_.b,[2,O.b],[2,_.a],[2,M.f]],{message:[0,"message"]},null),o.pb(2,180224,null,0,P.b,[o.k,q.f,[2,I.a]],{disabled:[0,"disabled"]},null),(n()(),o.qb(3,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,m.b,m.a)),o.pb(4,9158656,null,0,d.b,[o.k,d.d,[8,null],[2,d.a],[2,o.l]],null,null),(n()(),o.Jb(5,0,["",""])),(n()(),o.gb(0,null,null,0))],(function(n,l){var t=l.component;n(l,1,0,l.context.$implicit.tip),n(l,2,0,!t.context.active),n(l,4,0)}),(function(n,l){n(l,0,0,l.context.$implicit.color,o.Cb(l,2).disabled||null,"NoopAnimations"===o.Cb(l,2)._animationMode),n(l,3,0,o.Cb(l,4).inline,"primary"!==o.Cb(l,4).color&&"accent"!==o.Cb(l,4).color&&"warn"!==o.Cb(l,4).color),n(l,5,0,l.context.$implicit.icon)}))}function S(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),o.gb(16777216,null,null,1,null,K)),o.pb(2,278528,null,0,g.k,[o.N,o.K,o.q],{ngForOf:[0,"ngForOf"]},null),(n()(),o.gb(0,null,null,0))],(function(n,l){n(l,2,0,l.component.buttons)}),null)}function J(n){return o.Lb(0,[o.Db(0,g.e,[o.s]),(n()(),o.qb(1,0,null,null,11,"div",[["class","update-container"]],null,null,null,null,null)),(n()(),o.qb(2,0,null,null,1,"mat-icon",[["class","contact-img mat-icon notranslate"],["color","primary"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,m.b,m.a)),o.pb(3,9158656,null,0,d.b,[o.k,d.d,[8,null],[2,d.a],[2,o.l]],{color:[0,"color"],svgIcon:[1,"svgIcon"]},null),(n()(),o.qb(4,0,null,null,5,"div",[["class","main-text"]],null,null,null,null,null)),(n()(),o.qb(5,0,null,null,2,"div",[["class","call-date"]],null,null,null,null,null)),(n()(),o.Jb(6,null,["",""])),o.Fb(7,4),(n()(),o.qb(8,0,null,null,1,"div",[["class","call-text"]],null,null,null,null,null)),(n()(),o.Jb(9,null,["",""])),(n()(),o.qb(10,0,null,null,0,"div",[["class","example-spacer"]],null,null,null,null,null)),(n()(),o.gb(16777216,null,null,1,null,S)),o.pb(12,16384,null,0,g.l,[o.N,o.K],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,3,0,"primary","attention"),n(l,12,0,t.context.desc.update)}),(function(n,l){var t=l.component;n(l,2,0,o.Cb(l,3).inline,"primary"!==o.Cb(l,3).color&&"accent"!==o.Cb(l,3).color&&"warn"!==o.Cb(l,3).color);var e=o.Kb(l,6,0,n(l,7,0,o.Cb(l,0),t.context.date,"short","","ru"));n(l,6,0,e),n(l,9,0,t.context.text)}))}var F=function(){function n(l,t){_classCallCheck(this,n),this.sanitizer=l,this.colorThemeService=t,this.activatedMarkColor="#cdcdcd"}return _createClass(n,[{key:"ngOnInit",value:function(){this.activatedMarkColor=this.context.active?this.colorThemeService.getThemeColor("backgroundColor"):this.activatedMarkColor}}]),n}(),R=t("V+Fh"),T=o.ob({encapsulation:0,styles:[[".announcement-container[_ngcontent-%COMP%]{padding:10px;display:flex;flex-direction:row;align-items:center;justify-content:flex-start}.base-announcement[_ngcontent-%COMP%]   app-incoming-call-notification[_ngcontent-%COMP%]{flex:1 1 0}.date-block[_ngcontent-%COMP%]{margin-right:8px;white-space:nowrap}.activated-mark[_ngcontent-%COMP%]{height:10px;margin-right:10px;flex:0 0 10px;border-radius:50%}.announcement-container[_ngcontent-%COMP%]:hover{background-color:#ececec}"]],data:{}});function z(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,4,"div",[["class","zero-announcement  any-announce"]],null,null,null,null,null)),(n()(),o.qb(1,0,null,null,2,"div",[["class","date-block"]],null,null,null,null,null)),(n()(),o.Jb(2,null,["",""])),o.Fb(3,4),(n()(),o.qb(4,0,null,null,0,"div",[["class","contains"]],[[8,"innerHTML",1]],null,null,null,null))],null,(function(n,l){var t=l.component,e=o.Kb(l,2,0,n(l,3,0,o.Cb(l.parent,0),t.context.date,"short","","ru"));n(l,2,0,e),n(l,4,0,t.sanitizer.bypassSecurityTrustHtml(t.context.content))}))}function E(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,1,"app-incoming-call-announcement",[],null,null,null,p,b)),o.pb(1,114688,null,0,a,[i.a,r.a,s.a],{context:[0,"context"]},null)],(function(n,l){n(l,1,0,l.component.context)}),null)}function D(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,1,"app-no-answer",[],null,null,null,v,h)),o.pb(1,114688,null,0,f,[i.a,s.a],{context:[0,"context"]},null)],(function(n,l){n(l,1,0,l.component.context)}),null)}function H(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,1,"app-update-announcement",[],null,null,null,J,j)),o.pb(1,114688,null,0,N,[L.a],{context:[0,"context"]},null)],(function(n,l){n(l,1,0,l.component.context)}),null)}function V(n){return o.Lb(0,[o.Db(0,g.e,[o.s]),(n()(),o.qb(1,0,null,null,11,"div",[["class","base-announcement"]],null,null,null,null,null)),o.pb(2,16384,null,0,g.p,[],{ngSwitch:[0,"ngSwitch"]},null),(n()(),o.qb(3,0,null,null,9,"div",[["class","announcement-container"]],null,null,null,null,null)),(n()(),o.qb(4,0,null,null,0,"div",[["class","activated-mark"]],[[4,"backgroundColor",null]],null,null,null,null)),(n()(),o.gb(16777216,null,null,1,null,z)),o.pb(6,278528,null,0,g.q,[o.N,o.K,g.p],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),o.gb(16777216,null,null,1,null,E)),o.pb(8,278528,null,0,g.q,[o.N,o.K,g.p],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),o.gb(16777216,null,null,1,null,D)),o.pb(10,278528,null,0,g.q,[o.N,o.K,g.p],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),o.gb(16777216,null,null,1,null,H)),o.pb(12,278528,null,0,g.q,[o.N,o.K,g.p],{ngSwitchCase:[0,"ngSwitchCase"]},null)],(function(n,l){n(l,2,0,l.component.context.type),n(l,6,0,0),n(l,8,0,1),n(l,10,0,2),n(l,12,0,3)}),(function(n,l){n(l,4,0,l.component.activatedMarkColor)}))}var U=t("FbN9"),W=t("BzsH"),Z=function(){function n(l,t){_classCallCheck(this,n),this.appContext=l,this.platformId=t,this.header="\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f",this.buttons=[]}return _createClass(n,[{key:"ngOnDestroy",value:function(){this.appContext.announcements.next(this.appContext.announcements.value.map((function(n){return/0|1|2/.test(n.type+"")&&(n.active=!1),n})))}},{key:"ngOnInit",value:function(){Object(g.v)(this.platformId)&&(this.buttons=["bell_check","bell_off"])}},{key:"onOpenAnnouncement",value:function(){}}]),n}(),$=o.ob({encapsulation:0,styles:[[".announcement-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:stretch;height:100%}.announcement-base[_ngcontent-%COMP%]{overflow-y:auto;flex:1 1 0}.announcement-header[_ngcontent-%COMP%]{font-size:18px!important}mat-icon[_ngcontent-%COMP%]{position:relative;top:-2px}"]],data:{}});function G(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,1,"app-announcement",[],null,null,null,V,T)),o.pb(1,114688,null,0,F,[M.b,R.a],{context:[0,"context"]},null)],(function(n,l){n(l,1,0,l.context.$implicit)}),null)}function Q(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,20,"div",[["class","announcement-block"]],null,null,null,null,null)),(n()(),o.qb(1,0,null,null,15,"mat-toolbar",[["class","mat-toolbar"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,U.b,U.a)),o.pb(2,4243456,null,1,W.a,[o.k,A.a,g.d],{color:[0,"color"]},null),o.Hb(603979776,1,{_toolbarRows:1}),(n()(),o.qb(4,0,null,0,1,"span",[["class","announcement-header"]],null,null,null,null,null)),(n()(),o.Jb(5,null,["",""])),(n()(),o.qb(6,0,null,0,0,"span",[["class","example-spacer"]],null,null,null,null,null)),(n()(),o.qb(7,16777216,null,0,4,"button",[["class","toolbar-button open-announce"],["mat-icon-button",""],["matTooltip","\u041e\u0442\u043a\u0440\u044b\u0442\u044c"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],(function(n,l,t){var e=!0,u=n.component;return"longpress"===l&&(e=!1!==o.Cb(n,8).show()&&e),"keydown"===l&&(e=!1!==o.Cb(n,8)._handleKeydown(t)&&e),"touchend"===l&&(e=!1!==o.Cb(n,8)._handleTouchend()&&e),"click"===l&&(e=!1!==u.onOpenAnnouncement()&&e),e}),k.b,k.a)),o.pb(8,212992,null,0,_.d,[w.c,o.k,y.a,o.N,o.x,A.a,q.c,q.f,_.b,[2,O.b],[2,_.a],[2,M.f]],{message:[0,"message"]},null),o.pb(9,180224,null,0,P.b,[o.k,q.f,[2,I.a]],null,null),(n()(),o.qb(10,0,null,0,1,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,m.b,m.a)),o.pb(11,9158656,null,0,d.b,[o.k,d.d,[8,null],[2,d.a],[2,o.l]],{svgIcon:[0,"svgIcon"]},null),(n()(),o.qb(12,16777216,null,0,4,"button",[["class","toolbar-button delete-message"],["mat-icon-button",""],["matTooltip","\u0423\u0434\u0430\u043b\u0438\u0442\u044c"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"longpress"],[null,"keydown"],[null,"touchend"]],(function(n,l,t){var e=!0;return"longpress"===l&&(e=!1!==o.Cb(n,13).show()&&e),"keydown"===l&&(e=!1!==o.Cb(n,13)._handleKeydown(t)&&e),"touchend"===l&&(e=!1!==o.Cb(n,13)._handleTouchend()&&e),e}),k.b,k.a)),o.pb(13,212992,null,0,_.d,[w.c,o.k,y.a,o.N,o.x,A.a,q.c,q.f,_.b,[2,O.b],[2,_.a],[2,M.f]],{message:[0,"message"]},null),o.pb(14,180224,null,0,P.b,[o.k,q.f,[2,I.a]],null,null),(n()(),o.qb(15,0,null,0,1,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,m.b,m.a)),o.pb(16,9158656,null,0,d.b,[o.k,d.d,[8,null],[2,d.a],[2,o.l]],{svgIcon:[0,"svgIcon"]},null),(n()(),o.qb(17,0,null,null,3,"div",[["class","announcement-base"]],null,null,null,null,null)),(n()(),o.gb(16777216,null,null,2,null,G)),o.pb(19,278528,null,0,g.k,[o.N,o.K,o.q],{ngForOf:[0,"ngForOf"]},null),o.Db(131072,g.b,[o.h])],(function(n,l){var t=l.component;n(l,2,0,"primary"),n(l,8,0,"\u041e\u0442\u043a\u0440\u044b\u0442\u044c"),n(l,11,0,t.buttons[0]),n(l,13,0,"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"),n(l,16,0,t.buttons[1]),n(l,19,0,o.Kb(l,19,0,o.Cb(l,20).transform(t.appContext.announcements)))}),(function(n,l){var t=l.component;n(l,1,0,o.Cb(l,2)._toolbarRows.length>0,0===o.Cb(l,2)._toolbarRows.length),n(l,5,0,t.header),n(l,7,0,o.Cb(l,9).disabled||null,"NoopAnimations"===o.Cb(l,9)._animationMode),n(l,10,0,o.Cb(l,11).inline,"primary"!==o.Cb(l,11).color&&"accent"!==o.Cb(l,11).color&&"warn"!==o.Cb(l,11).color),n(l,12,0,o.Cb(l,14).disabled||null,"NoopAnimations"===o.Cb(l,14)._animationMode),n(l,15,0,o.Cb(l,16).inline,"primary"!==o.Cb(l,16).color&&"accent"!==o.Cb(l,16).color&&"warn"!==o.Cb(l,16).color)}))}var X=o.mb("app-announcements",Z,(function(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,1,"app-announcements",[],null,null,null,Q,$)),o.pb(1,245760,null,0,Z,[i.a,o.z],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),B=t("NcP4"),Y=t("POq0"),nn=t("JjoW"),ln=t("Xd0L"),tn=t("gavF"),on=t("/Co4"),en=t("iInd"),un=function n(){_classCallCheck(this,n)},cn=t("igqZ"),an=t("HsOI"),rn=t("zMNK"),sn=t("oapL"),bn=t("ZwOa"),pn=t("8P0U"),mn=t("W5yJ"),dn=t("elxJ"),gn=t("rWV4"),fn=t("KPQW"),hn=t("mkRZ"),Cn=t("pBi1"),xn=t("lT8R"),vn=t("7of8");t.d(l,"AnnouncementsModuleNgFactory",(function(){return kn}));var kn=o.nb(e,[],(function(n){return o.zb([o.Ab(512,o.j,o.Z,[[8,[u.a,X,B.a]],[3,o.j],o.v]),o.Ab(4608,g.n,g.m,[o.s,[2,g.D]]),o.Ab(4608,Y.c,Y.c,[]),o.Ab(4608,w.c,w.c,[w.i,w.e,o.j,w.h,w.f,o.p,o.x,g.d,O.b,[2,g.h]]),o.Ab(5120,w.j,w.k,[w.c]),o.Ab(5120,nn.a,nn.b,[w.c]),o.Ab(5120,_.b,_.c,[w.c]),o.Ab(4608,M.e,ln.c,[[2,ln.g],[2,ln.l]]),o.Ab(4608,ln.b,ln.b,[]),o.Ab(5120,tn.a,tn.d,[w.c]),o.Ab(5120,on.b,on.c,[w.c]),o.Ab(1073742336,g.c,g.c,[]),o.Ab(1073742336,en.s,en.s,[[2,en.x],[2,en.o]]),o.Ab(1073742336,un,un,[]),o.Ab(1073742336,O.a,O.a,[]),o.Ab(1073742336,ln.l,ln.l,[[2,ln.d],[2,M.f]]),o.Ab(1073742336,W.b,W.b,[]),o.Ab(1073742336,d.c,d.c,[]),o.Ab(1073742336,cn.c,cn.c,[]),o.Ab(1073742336,Y.d,Y.d,[]),o.Ab(1073742336,an.e,an.e,[]),o.Ab(1073742336,rn.e,rn.e,[]),o.Ab(1073742336,A.b,A.b,[]),o.Ab(1073742336,y.b,y.b,[]),o.Ab(1073742336,w.g,w.g,[]),o.Ab(1073742336,ln.v,ln.v,[]),o.Ab(1073742336,ln.t,ln.t,[]),o.Ab(1073742336,ln.q,ln.q,[]),o.Ab(1073742336,nn.d,nn.d,[]),o.Ab(1073742336,q.a,q.a,[]),o.Ab(1073742336,_.e,_.e,[]),o.Ab(1073742336,P.c,P.c,[]),o.Ab(1073742336,sn.c,sn.c,[]),o.Ab(1073742336,bn.b,bn.b,[]),o.Ab(1073742336,pn.c,pn.c,[]),o.Ab(1073742336,mn.c,mn.c,[]),o.Ab(1073742336,dn.d,dn.d,[]),o.Ab(1073742336,gn.j,gn.j,[]),o.Ab(1073742336,fn.b,fn.b,[]),o.Ab(1073742336,tn.c,tn.c,[]),o.Ab(1073742336,tn.b,tn.b,[]),o.Ab(1073742336,on.e,on.e,[]),o.Ab(1073742336,hn.a,hn.a,[]),o.Ab(1073742336,Cn.d,Cn.d,[]),o.Ab(1073742336,Cn.c,Cn.c,[]),o.Ab(1073742336,xn.a,xn.a,[]),o.Ab(1073742336,vn.a,vn.a,[]),o.Ab(1073742336,e,e,[]),o.Ab(1024,en.m,(function(){return[[{path:"",component:Z}]]}),[])])}))}}]);
//# sourceMappingURL=12-es5.6132264d72a0113a8f28.js.map