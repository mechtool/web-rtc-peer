(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2/pp":function(n,t,l){"use strict";var o=l("8Y7J"),e=l("SVse");l("xQwi"),l("VYsW"),l.d(t,"a",(function(){return a})),l.d(t,"b",(function(){return c}));var a=o.ob({encapsulation:0,styles:[[".contact-table-container[_nghost-%COMP%]   .web-indicator[_ngcontent-%COMP%], .contact-table-container   [_nghost-%COMP%]   .web-indicator[_ngcontent-%COMP%], .settings-container[_nghost-%COMP%]   .web-indicator[_ngcontent-%COMP%], .settings-container   [_nghost-%COMP%]   .web-indicator[_ngcontent-%COMP%], .table-row[_nghost-%COMP%]   .web-indicator[_ngcontent-%COMP%], .table-row   [_nghost-%COMP%]   .web-indicator[_ngcontent-%COMP%], mat-option[_nghost-%COMP%]   .web-indicator[_ngcontent-%COMP%], mat-option   [_nghost-%COMP%]   .web-indicator[_ngcontent-%COMP%]{display:none}.contact-container[_ngcontent-%COMP%]{position:relative}.contact-body[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.contact-img[_ngcontent-%COMP%]{width:30px;height:30px}.contact-name[_ngcontent-%COMP%]{margin-left:8px}.web-indicator[_ngcontent-%COMP%]{width:12px;height:12px;position:absolute;top:-4px;left:-4px}@media (max-width:400px){.main-toolbar[_nghost-%COMP%]   .contact-name[_ngcontent-%COMP%], .main-toolbar   [_nghost-%COMP%]   .contact-name[_ngcontent-%COMP%]{display:none}}"]],data:{}});function i(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,7,"div",[["class","contact-block"]],null,null,null,null,null)),(n()(),o.qb(1,0,null,null,6,"div",[["class","contact-container"]],null,null,null,null,null)),(n()(),o.qb(2,0,null,null,1,"div",[["class","web-indicator"]],[[4,"backgroundColor",null]],null,null,null,null)),o.Db(131072,e.b,[o.h]),(n()(),o.qb(4,0,null,null,3,"div",[["class","contact-body"]],null,null,null,null,null)),(n()(),o.qb(5,0,null,null,0,"img",[["alt","\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430"],["class","contact-img"]],[[8,"src",4],[4,"backgroundColor",null]],[[null,"error"],[null,"click"]],(function(n,t,l){var o=!0,e=n.component;return"error"===t&&(o=!1!==e.onError(l)&&o),"click"===t&&(o=!1!==e.onEditIcon(l)&&o),o}),null,null)),(n()(),o.qb(6,0,null,null,1,"div",[["class","contact-name"]],null,null,null,null,null)),(n()(),o.Jb(7,null,["",""]))],null,(function(n,t){var l=t.component;n(t,2,0,l.local?o.Kb(t,2,0,o.Cb(t,3).transform(l.appContext.statusColor)):l.context.statusColor),n(t,5,0,l.context.photoURL,l.context.imgColor),n(t,7,0,l.context.name||l.context.displayName||l.context.phoneNumber||l.context.email)}))}function c(n){return o.Lb(0,[(n()(),o.gb(16777216,null,null,1,null,i)),o.pb(1,16384,null,0,e.l,[o.N,o.K],{ngIf:[0,"ngIf"]},null)],(function(n,t){n(t,1,0,t.component.context.uid)}),null)}},Aj5x:function(n,t,l){"use strict";l.r(t);var o=l("8Y7J");class e{}var a=l("pMnS"),i=l("bujt"),c=l("iInd"),u=l("Mz6y"),s=l("QQfA"),b=l("hOhj"),r=l("/HVE"),p=l("5GAg"),d=l("IP0z"),m=l("cUpR"),g=l("Fwaw"),f=l("omvX"),h=l("Mr+X"),C=l("Gi4r"),x=l("KPQW"),A=l("FbN9"),k=l("BzsH"),v=l("SVse"),w=l("ura0"),y=l("/q54"),O=l("2/pp"),_=l("xQwi"),M=l("VYsW");class P{constructor(n,t){this.appContext=n,this.platformId=t,this.subscribes=[],this.toolbarButtons={left:[],right:[]}}ngOnInit(){Object(v.v)(this.platformId)&&(this.toolbarButtons={left:[{text:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",icon:"messages",link:"/application/main/messages",tip:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"},{text:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",icon:"people",link:"/application/main/contacts",tip:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"},{text:"\u041d\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",icon:"video",link:"/application/main/new-message",tip:"\u041d\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"}],right:[{text:"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f",icon:"notifications",link:"/application/main/announcements",tip:"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f",badge:"2"},{text:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",icon:"settings",link:"/application/main/settings",tip:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}]})}getState(n){return n.activatedRouteData.type}ngOnDestroy(){this.subscribes.forEach(n=>n.unsubscribe())}}var L=o.ob({encapsulation:0,styles:[[".main-component-container[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;justify-content:stretch;align-items:stretch}.router-container[_ngcontent-%COMP%]{flex:1 1 0}button.active[_ngcontent-%COMP%]{background:#ffffff38!important}.toolbar-contact[_ngcontent-%COMP%]{margin-right:8px}"]],data:{animation:[{type:7,name:"routerTransition",definitions:[{type:1,expr:"* <=> *",animation:[{type:11,selector:":enter, :leave",animation:{type:6,styles:{position:"absolute",width:"100%"},offset:null},options:{optional:!0}},{type:3,steps:[{type:11,selector:":enter",animation:[{type:6,styles:{transform:"translateX(100%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateX(0%)"},offset:null},timings:"400ms ease-in-out"}],options:{optional:!0}},{type:11,selector:":leave",animation:[{type:6,styles:{transform:"translateX(0%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateX(-100%)"},offset:null},timings:"400ms ease-in-out"}],options:{optional:!0}}],options:null}],options:null}],options:{}}]}});function q(n){return o.Lb(0,[(n()(),o.qb(0,16777216,null,null,8,"button",[["class","flat-button"],["mat-flat-button",""],["routerLinkActive","active"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],(function(n,t,l){var e=!0;return"click"===t&&(e=!1!==o.Cb(n,1).onClick()&&e),"longpress"===t&&(e=!1!==o.Cb(n,6).show()&&e),"keydown"===t&&(e=!1!==o.Cb(n,6)._handleKeydown(l)&&e),"touchend"===t&&(e=!1!==o.Cb(n,6)._handleTouchend()&&e),e}),i.b,i.a)),o.pb(1,16384,[[2,4]],0,c.p,[c.o,c.a,[8,null],o.C,o.k],{routerLink:[0,"routerLink"]},null),o.pb(2,1720320,null,2,c.q,[c.o,o.k,o.C,[2,c.p],[2,c.r]],{routerLinkActiveOptions:[0,"routerLinkActiveOptions"],routerLinkActive:[1,"routerLinkActive"]},null),o.Hb(603979776,2,{links:1}),o.Hb(603979776,3,{linksWithHrefs:1}),o.Eb(5,{exact:0}),o.pb(6,212992,null,0,u.d,[s.c,o.k,b.a,o.N,o.x,r.a,p.c,p.f,u.b,[2,d.b],[2,u.a],[2,m.f]],{message:[0,"message"]},null),o.pb(7,180224,null,0,g.b,[o.k,p.f,[2,f.a]],{color:[0,"color"]},null),(n()(),o.Jb(8,0,["",""])),(n()(),o.gb(0,null,null,0))],(function(n,t){n(t,1,0,t.context.$implicit.link);var l=n(t,5,0,!0);n(t,2,0,l,"active"),n(t,6,0,t.context.$implicit.tip),n(t,7,0,"primary")}),(function(n,t){n(t,0,0,o.Cb(t,7).disabled||null,"NoopAnimations"===o.Cb(t,7)._animationMode),n(t,8,0,t.context.$implicit.text)}))}function N(n){return o.Lb(0,[(n()(),o.qb(0,16777216,null,null,9,"button",[["mat-icon-button",""],["routerLinkActive","active"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],(function(n,t,l){var e=!0;return"click"===t&&(e=!1!==o.Cb(n,1).onClick()&&e),"longpress"===t&&(e=!1!==o.Cb(n,6).show()&&e),"keydown"===t&&(e=!1!==o.Cb(n,6)._handleKeydown(l)&&e),"touchend"===t&&(e=!1!==o.Cb(n,6)._handleTouchend()&&e),e}),i.b,i.a)),o.pb(1,16384,[[4,4]],0,c.p,[c.o,c.a,[8,null],o.C,o.k],{routerLink:[0,"routerLink"]},null),o.pb(2,1720320,null,2,c.q,[c.o,o.k,o.C,[2,c.p],[2,c.r]],{routerLinkActiveOptions:[0,"routerLinkActiveOptions"],routerLinkActive:[1,"routerLinkActive"]},null),o.Hb(603979776,4,{links:1}),o.Hb(603979776,5,{linksWithHrefs:1}),o.Eb(5,{exact:0}),o.pb(6,212992,null,0,u.d,[s.c,o.k,b.a,o.N,o.x,r.a,p.c,p.f,u.b,[2,d.b],[2,u.a],[2,m.f]],{message:[0,"message"]},null),o.pb(7,180224,null,0,g.b,[o.k,p.f,[2,f.a]],null,null),(n()(),o.qb(8,0,null,0,1,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,h.b,h.a)),o.pb(9,9158656,null,0,C.b,[o.k,C.d,[8,null],[2,C.a],[2,o.l]],{svgIcon:[0,"svgIcon"]},null),(n()(),o.gb(0,null,null,0))],(function(n,t){n(t,1,0,t.context.$implicit.link);var l=n(t,5,0,!0);n(t,2,0,l,"active"),n(t,6,0,t.context.$implicit.tip),n(t,9,0,t.context.$implicit.icon)}),(function(n,t){n(t,0,0,o.Cb(t,7).disabled||null,"NoopAnimations"===o.Cb(t,7)._animationMode),n(t,8,0,o.Cb(t,9).inline,"primary"!==o.Cb(t,9).color&&"accent"!==o.Cb(t,9).color&&"warn"!==o.Cb(t,9).color)}))}function S(n){return o.Lb(0,[(n()(),o.qb(0,16777216,null,null,10,"button",[["mat-icon-button",""],["routerLinkActive","active"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],(function(n,t,l){var e=!0;return"click"===t&&(e=!1!==o.Cb(n,1).onClick()&&e),"longpress"===t&&(e=!1!==o.Cb(n,6).show()&&e),"keydown"===t&&(e=!1!==o.Cb(n,6)._handleKeydown(l)&&e),"touchend"===t&&(e=!1!==o.Cb(n,6)._handleTouchend()&&e),e}),i.b,i.a)),o.pb(1,16384,[[6,4]],0,c.p,[c.o,c.a,[8,null],o.C,o.k],{routerLink:[0,"routerLink"]},null),o.pb(2,1720320,null,2,c.q,[c.o,o.k,o.C,[2,c.p],[2,c.r]],{routerLinkActiveOptions:[0,"routerLinkActiveOptions"],routerLinkActive:[1,"routerLinkActive"]},null),o.Hb(603979776,6,{links:1}),o.Hb(603979776,7,{linksWithHrefs:1}),o.Eb(5,{exact:0}),o.pb(6,212992,null,0,u.d,[s.c,o.k,b.a,o.N,o.x,r.a,p.c,p.f,u.b,[2,d.b],[2,u.a],[2,m.f]],{message:[0,"message"]},null),o.pb(7,180224,null,0,g.b,[o.k,p.f,[2,f.a]],null,null),(n()(),o.qb(8,0,null,0,2,"mat-icon",[["class","mat-icon notranslate mat-badge"],["matBadgeSize","small"],["role","img"]],[[8,"hidden",0],[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null],[2,"mat-badge-overlap",null],[2,"mat-badge-above",null],[2,"mat-badge-below",null],[2,"mat-badge-before",null],[2,"mat-badge-after",null],[2,"mat-badge-small",null],[2,"mat-badge-medium",null],[2,"mat-badge-large",null],[2,"mat-badge-hidden",null],[2,"mat-badge-disabled",null]],null,null,h.b,h.a)),o.pb(9,9158656,null,0,C.b,[o.k,C.d,[8,null],[2,C.a],[2,o.l]],{svgIcon:[0,"svgIcon"]},null),o.pb(10,671744,null,0,x.a,[o.x,o.k,p.c,o.C,[2,f.a]],{color:[0,"color"],content:[1,"content"],size:[2,"size"]},null),(n()(),o.gb(0,null,null,0))],(function(n,t){n(t,1,0,t.context.$implicit.link);var l=n(t,5,0,!0);n(t,2,0,l,"active"),n(t,6,0,t.context.$implicit.tip),n(t,9,0,t.context.$implicit.icon),n(t,10,0,"accent",t.context.$implicit.badge>0?t.context.$implicit.badge+"":"","small")}),(function(n,t){n(t,0,0,o.Cb(t,7).disabled||null,"NoopAnimations"===o.Cb(t,7)._animationMode),n(t,8,1,[!t.context.$implicit.badge,o.Cb(t,9).inline,"primary"!==o.Cb(t,9).color&&"accent"!==o.Cb(t,9).color&&"warn"!==o.Cb(t,9).color,o.Cb(t,10).overlap,o.Cb(t,10).isAbove(),!o.Cb(t,10).isAbove(),!o.Cb(t,10).isAfter(),o.Cb(t,10).isAfter(),"small"===o.Cb(t,10).size,"medium"===o.Cb(t,10).size,"large"===o.Cb(t,10).size,o.Cb(t,10).hidden||!o.Cb(t,10)._hasContent,o.Cb(t,10).disabled])}))}function I(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,20,"div",[["class","main-component-container"]],null,null,null,null,null)),(n()(),o.qb(1,0,null,null,16,"mat-toolbar",[["class","main-toolbar mat-toolbar"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,A.b,A.a)),o.pb(2,4243456,null,1,k.a,[o.k,r.a,v.d],{color:[0,"color"]},null),o.Hb(603979776,1,{_toolbarRows:1}),(n()(),o.qb(4,0,null,0,3,"div",[["class","flat-button-block"],["fxShow","true"],["fxShow.xs","false"]],null,null,null,null,null)),o.pb(5,4866048,null,0,w.b,[o.k,w.d,y.i,y.f,y.e,o.z,[2,y.g]],{fxShow:[0,"fxShow"],"fxShow.xs":[1,"fxShow.xs"]},null),(n()(),o.gb(16777216,null,null,1,null,q)),o.pb(7,278528,null,0,v.k,[o.N,o.K,o.q],{ngForOf:[0,"ngForOf"]},null),(n()(),o.qb(8,0,null,0,3,"div",[["class","img-button-block"],["fxShow","false"],["fxShow.xs","true"]],null,null,null,null,null)),o.pb(9,4866048,null,0,w.b,[o.k,w.d,y.i,y.f,y.e,o.z,[2,y.g]],{fxShow:[0,"fxShow"],"fxShow.xs":[1,"fxShow.xs"]},null),(n()(),o.gb(16777216,null,null,1,null,N)),o.pb(11,278528,null,0,v.k,[o.N,o.K,o.q],{ngForOf:[0,"ngForOf"]},null),(n()(),o.qb(12,0,null,0,0,"span",[["class","expander"],["style","flex : 1 1 0"]],null,null,null,null,null)),(n()(),o.qb(13,0,null,0,2,"app-contact",[["class","toolbar-contact"]],null,null,null,O.b,O.a)),o.pb(14,114688,null,0,_.a,[o.h,M.a,o.z],{context:[0,"context"]},null),o.Db(131072,v.b,[o.h]),(n()(),o.gb(16777216,null,0,1,null,S)),o.pb(17,278528,null,0,v.k,[o.N,o.K,o.q],{ngForOf:[0,"ngForOf"]},null),(n()(),o.qb(18,0,null,null,2,"div",[["class","router-container"]],[[24,"@routerTransition",0]],null,null,null,null)),(n()(),o.qb(19,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),o.pb(20,212992,[["mainOutlet",4]],0,c.t,[c.b,o.N,o.j,[8,null],o.h],null,null)],(function(n,t){var l=t.component;n(t,2,0,"primary"),n(t,5,0,"true","false"),n(t,7,0,l.toolbarButtons.left),n(t,9,0,"false","true"),n(t,11,0,l.toolbarButtons.left),n(t,14,0,o.Kb(t,14,0,o.Cb(t,15).transform(l.appContext.user))),n(t,17,0,l.toolbarButtons.right),n(t,20,0)}),(function(n,t){var l=t.component;n(t,1,0,o.Cb(t,2)._toolbarRows.length>0,0===o.Cb(t,2)._toolbarRows.length),n(t,18,0,l.getState(o.Cb(t,20)))}))}function z(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,1,"app-main",[],null,null,null,I,L)),o.pb(1,245760,null,0,P,[M.a,o.z],null,null)],(function(n,t){n(t,1,0)}),null)}var j=o.mb("app-main",P,z,{},{},[]),F=l("NcP4"),H=l("POq0"),E=l("JjoW"),$=l("Xd0L"),K=l("gavF"),J=l("/Co4"),R=l("s7LF");const B=()=>Promise.all([l.e(2),l.e(3),l.e(14)]).then(l.bind(null,"ICdQ")).then(n=>n.ContactsModuleNgFactory),W={type:"contacts"},T=()=>Promise.all([l.e(4),l.e(15)]).then(l.bind(null,"B3DS")).then(n=>n.MessagesModuleNgFactory),V={type:"messages"},D=()=>Promise.all([l.e(2),l.e(3),l.e(0),l.e(16)]).then(l.bind(null,"Ypt2")).then(n=>n.NewMessageModuleNgFactory),Q={type:"new-message"},X=()=>l.e(13).then(l.bind(null,"xeox")).then(n=>n.AnnouncementsModuleNgFactory),Y={type:"announcements"},G=()=>Promise.all([l.e(2),l.e(4),l.e(0),l.e(17)]).then(l.bind(null,"5wCN")).then(n=>n.SettingsModuleNgFactory),U={type:"settings"};class Z{}var nn=l("igqZ"),tn=l("HsOI"),ln=l("zMNK"),on=l("oapL"),en=l("ZwOa"),an=l("8P0U"),cn=l("W5yJ"),un=l("elxJ"),sn=l("rWV4"),bn=l("mkRZ"),rn=l("pBi1"),pn=l("lT8R"),dn=l("7of8"),mn=l("VDRc"),gn=l("Nhcz"),fn=l("u9T3"),hn=l("Gcy5");l.d(t,"MainModuleNgFactory",(function(){return Cn}));var Cn=o.nb(e,[],(function(n){return o.zb([o.Ab(512,o.j,o.Z,[[8,[a.a,j,F.a]],[3,o.j],o.v]),o.Ab(4608,v.n,v.m,[o.s,[2,v.D]]),o.Ab(4608,H.c,H.c,[]),o.Ab(4608,s.c,s.c,[s.i,s.e,o.j,s.h,s.f,o.p,o.x,v.d,d.b,[2,v.h]]),o.Ab(5120,s.j,s.k,[s.c]),o.Ab(5120,E.a,E.b,[s.c]),o.Ab(5120,u.b,u.c,[s.c]),o.Ab(4608,m.e,$.c,[[2,$.g],[2,$.l]]),o.Ab(4608,$.b,$.b,[]),o.Ab(5120,K.a,K.d,[s.c]),o.Ab(5120,J.b,J.c,[s.c]),o.Ab(5120,o.b,(function(n,t){return[y.j(n,t)]}),[v.d,o.z]),o.Ab(4608,R.e,R.e,[]),o.Ab(4608,R.w,R.w,[]),o.Ab(1073742336,v.c,v.c,[]),o.Ab(1073742336,c.s,c.s,[[2,c.x],[2,c.o]]),o.Ab(1073742336,Z,Z,[]),o.Ab(1073742336,d.a,d.a,[]),o.Ab(1073742336,$.l,$.l,[[2,$.d],[2,m.f]]),o.Ab(1073742336,k.b,k.b,[]),o.Ab(1073742336,C.c,C.c,[]),o.Ab(1073742336,nn.c,nn.c,[]),o.Ab(1073742336,H.d,H.d,[]),o.Ab(1073742336,tn.e,tn.e,[]),o.Ab(1073742336,ln.e,ln.e,[]),o.Ab(1073742336,r.b,r.b,[]),o.Ab(1073742336,b.b,b.b,[]),o.Ab(1073742336,s.g,s.g,[]),o.Ab(1073742336,$.v,$.v,[]),o.Ab(1073742336,$.t,$.t,[]),o.Ab(1073742336,$.q,$.q,[]),o.Ab(1073742336,E.d,E.d,[]),o.Ab(1073742336,p.a,p.a,[]),o.Ab(1073742336,u.e,u.e,[]),o.Ab(1073742336,g.c,g.c,[]),o.Ab(1073742336,on.c,on.c,[]),o.Ab(1073742336,en.b,en.b,[]),o.Ab(1073742336,an.c,an.c,[]),o.Ab(1073742336,cn.c,cn.c,[]),o.Ab(1073742336,un.d,un.d,[]),o.Ab(1073742336,sn.j,sn.j,[]),o.Ab(1073742336,x.b,x.b,[]),o.Ab(1073742336,K.c,K.c,[]),o.Ab(1073742336,K.b,K.b,[]),o.Ab(1073742336,J.e,J.e,[]),o.Ab(1073742336,bn.a,bn.a,[]),o.Ab(1073742336,rn.d,rn.d,[]),o.Ab(1073742336,rn.c,rn.c,[]),o.Ab(1073742336,pn.a,pn.a,[]),o.Ab(1073742336,dn.a,dn.a,[]),o.Ab(1073742336,y.c,y.c,[]),o.Ab(1073742336,mn.a,mn.a,[]),o.Ab(1073742336,w.c,w.c,[]),o.Ab(1073742336,gn.a,gn.a,[]),o.Ab(1073742336,fn.a,fn.a,[[2,y.g],o.z]),o.Ab(1073742336,R.v,R.v,[]),o.Ab(1073742336,R.s,R.s,[]),o.Ab(1073742336,hn.a,hn.a,[]),o.Ab(1073742336,e,e,[]),o.Ab(1024,c.m,(function(){return[[{path:"",component:P,children:[{path:"contacts",loadChildren:B,data:W},{path:"messages",loadChildren:T,data:V},{path:"new-message",loadChildren:D,data:Q},{path:"announcements",loadChildren:X,data:Y},{path:"settings",loadChildren:G,data:U},{path:"",pathMatch:"full",redirectTo:"contacts"}]}]]}),[])])}))},xQwi:function(n,t,l){"use strict";l.d(t,"a",(function(){return a}));var o=l("mrSG"),e=l("SVse");class a{constructor(n,t,l){this.changeRef=n,this.appContext=t,this.platformId=l}ngOnInit(){Object(e.v)(this.platformId)&&(this.local=this.context.uid===this.appContext.appUser.uid,this.contactEdit=JSON.parse(window.localStorage.getItem("contactEdit")))}onEditIcon(n){(n.target.closest(".settings-container")||n.target.closest(".inner-contact-table")&&this.contactEdit)&&this.appContext.notifications.push({state:"iconSelection",context:this.context})}onError(n){return o.__awaiter(this,void 0,void 0,(function*(){}))}}}}]);
//# sourceMappingURL=10-es2015.1be3a90a4ccca622ea29.js.map