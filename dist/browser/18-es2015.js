(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{z6Qy:function(n,t,e){"use strict";e.r(t);var o=e("8Y7J");class l{}var i=e("pMnS"),a=e("W5yJ"),s=e("SVse"),r=e("IP0z"),c=e("Xd0L"),u=e("cUpR"),d=e("/HVE"),p=e("omvX"),b=o.ob({encapsulation:2,styles:[".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2s linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}"],data:{}});function m(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,0,":svg:circle",[["cx","50%"],["cy","50%"]],[[1,"r",0],[4,"animation-name",null],[4,"stroke-dashoffset","px"],[4,"stroke-dasharray","px"],[4,"stroke-width","%"]],null,null,null,null))],null,(function(n,t){var e=t.component;n(t,0,0,e._circleRadius,"mat-progress-spinner-stroke-rotate-"+e.diameter,e._strokeDashOffset,e._strokeCircumference,e._circleStrokeWidth)}))}function h(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,0,":svg:circle",[["cx","50%"],["cy","50%"]],[[1,"r",0],[4,"stroke-dashoffset","px"],[4,"stroke-dasharray","px"],[4,"stroke-width","%"]],null,null,null,null))],null,(function(n,t){var e=t.component;n(t,0,0,e._circleRadius,e._strokeDashOffset,e._strokeCircumference,e._circleStrokeWidth)}))}function g(n){return o.Lb(2,[(n()(),o.qb(0,0,null,null,5,":svg:svg",[["focusable","false"],["preserveAspectRatio","xMidYMid meet"]],[[4,"width","px"],[4,"height","px"],[1,"viewBox",0]],null,null,null,null)),o.pb(1,16384,null,0,s.p,[],{ngSwitch:[0,"ngSwitch"]},null),(n()(),o.gb(16777216,null,null,1,null,m)),o.pb(3,278528,null,0,s.q,[o.N,o.K,s.p],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),o.gb(16777216,null,null,1,null,h)),o.pb(5,278528,null,0,s.q,[o.N,o.K,s.p],{ngSwitchCase:[0,"ngSwitchCase"]},null)],(function(n,t){n(t,1,0,"indeterminate"===t.component.mode),n(t,3,0,!0),n(t,5,0,!1)}),(function(n,t){var e=t.component;n(t,0,0,e.diameter,e.diameter,e._viewBox)}))}var f=e("Mr+X"),C=e("Gi4r"),v=e("KPQW"),x=e("5GAg"),w=e("bujt"),k=e("Fwaw"),A=e("FbN9"),y=e("BzsH"),I=e("2/pp"),_=e("xQwi"),O=e("VYsW"),S=e("ZJFI");class q{constructor(n,t,e,o){this.appContext=n,this.webRtcService=t,this.statusColor=e,this.changeRef=o,this.localBadge="",this.subscriptions=[],this.buttons=[["video-off","video"],["audio-off","audio"]]}ngOnInit(){this.videoContext.local&&this.subscriptions.push(this.appContext.announcements.subscribe(n=>{let t=n.filter(n=>n.active).length;this.localBadge=0==t?"":t+""})),this.subscriptions.push(this.videoContext.dataChannel.data.subscribe(n=>{if("settings"===n.type)"video"in n&&(this.videoContext.settings.video=n.video),"audio"in n&&(this.videoContext.settings.audio=n.audio);else if("status"===n.type){let t=this.videoContext.contact.value;t.statusColor=n.statusColor,this.videoContext.contact.next(t),this.webRtcService.checkConnectionState({state:n.statusText,contact:t,videoContext:this.videoContext})}this.changeRef.detectChanges()}))}ngOnDestroy(){this.subscriptions.forEach(n=>n.unsubscribe())}clickIcon(n){let t;switch(n){case 0:let n=this.videoContext.stream.value.getVideoTracks()[0];n&&(n.enabled=!!(this.videoContext.settings.video=0==this.videoContext.settings.video?1:0)),t=this.videoContext.settings;break;case 1:let e=this.videoContext.stream.value.getAudioTracks()[0];e&&(e.enabled=!!(this.videoContext.settings.audio=0==this.videoContext.settings.audio?1:0)),t=this.videoContext.settings;break;case 2:this.webRtcService.stopVideoChannel(this.videoContext)}t&&(this.appContext.localVideoAudio=t,this.webRtcService.sendDataMessages(this.videoContext.wid,this.appContext.appUser.uid,t))}onLoadedData(){this.videoContext.className.active=!0,this.videoContext.local||this.webRtcService.checkVideoContexts(this.videoContext)}onEnded(){this.videoContext.className.active=!1,this.webRtcService.checkVideoContexts(this.videoContext)}}var z=e("hoN+"),N=e("tX6c"),R=o.ob({encapsulation:0,styles:[[".video-container[_ngcontent-%COMP%]{position:relative;height:100%}.top-toolbar[_ngcontent-%COMP%]{position:absolute;top:0;background:0 0;display:flex;align-items:center;justify-content:center;z-index:2}.bottom-local-block[_ngcontent-%COMP%]{width:160px;display:flex;justify-content:space-between;align-items:center}.bottom-peer-audio[_ngcontent-%COMP%], .bottom-peer-video[_ngcontent-%COMP%]{background-color:transparent!important}.main-video-container[_ngcontent-%COMP%]{height:100%}video.video-element[_ngcontent-%COMP%]{position:relative;z-index:0;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:50% 50%;object-position:50% 50%;border:0 solid #cecece}.phone-hangup[_ngcontent-%COMP%]{background-color:#c60000!important}mat-icon[_ngcontent-%COMP%]{color:#fff!important}.bottom-toolbar.local[_ngcontent-%COMP%]{background:0 0;position:absolute;display:flex;justify-content:center;bottom:0}.bottom-toolbar.remote[_ngcontent-%COMP%]{position:absolute;top:48%;background:0 0;display:flex;justify-content:center}.img-pulse[_ngcontent-%COMP%]{position:absolute;transform:scale(.9) rotate(-45deg);transform-origin:13px 88px;display:none}div.video-container.active.pulse[_ngcontent-%COMP%]   .img-pulse[_ngcontent-%COMP%]{display:initial}div.video-container.local.active[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:4;transition:.5s}div.video-container.local.active.fixed[_ngcontent-%COMP%]{bottom:0;left:0;width:200px;height:200px;top:unset}"]],data:{}});function M(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,2,"mat-icon",[["class","mat-icon notranslate mat-badge"],["matBadgeSize","small"],["role","img"],["svgIcon","notifications"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null],[2,"mat-badge-overlap",null],[2,"mat-badge-above",null],[2,"mat-badge-below",null],[2,"mat-badge-before",null],[2,"mat-badge-after",null],[2,"mat-badge-small",null],[2,"mat-badge-medium",null],[2,"mat-badge-large",null],[2,"mat-badge-hidden",null],[2,"mat-badge-disabled",null]],null,null,f.b,f.a)),o.pb(1,9158656,null,0,C.b,[o.k,C.d,[8,null],[2,C.a],[2,o.l]],{svgIcon:[0,"svgIcon"]},null),o.pb(2,671744,null,0,v.a,[o.x,o.k,x.c,o.C,[2,p.a]],{color:[0,"color"],content:[1,"content"],size:[2,"size"]},null)],(function(n,t){var e=t.component;n(t,1,0,"notifications"),n(t,2,0,"accent",e.localBadge,"small")}),(function(n,t){n(t,0,1,[o.Cb(t,1).inline,"primary"!==o.Cb(t,1).color&&"accent"!==o.Cb(t,1).color&&"warn"!==o.Cb(t,1).color,o.Cb(t,2).overlap,o.Cb(t,2).isAbove(),!o.Cb(t,2).isAbove(),!o.Cb(t,2).isAfter(),o.Cb(t,2).isAfter(),"small"===o.Cb(t,2).size,"medium"===o.Cb(t,2).size,"large"===o.Cb(t,2).size,o.Cb(t,2).hidden||!o.Cb(t,2)._hasContent,o.Cb(t,2).disabled])}))}function D(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),o.qb(1,0,null,null,1,"mat-icon",[["class","video-peer-img mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),o.pb(2,9158656,null,0,C.b,[o.k,C.d,[8,null],[2,C.a],[2,o.l]],{svgIcon:[0,"svgIcon"]},null),(n()(),o.qb(3,0,null,null,1,"mat-icon",[["class","microphone-peer-img mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),o.pb(4,9158656,null,0,C.b,[o.k,C.d,[8,null],[2,C.a],[2,o.l]],{svgIcon:[0,"svgIcon"]},null)],(function(n,t){var e=t.component;n(t,2,0,e.buttons[0][e.videoContext.settings.video]),n(t,4,0,e.buttons[1][e.videoContext.settings.audio])}),(function(n,t){n(t,1,0,o.Cb(t,2).inline,"primary"!==o.Cb(t,2).color&&"accent"!==o.Cb(t,2).color&&"warn"!==o.Cb(t,2).color),n(t,3,0,o.Cb(t,4).inline,"primary"!==o.Cb(t,4).color&&"accent"!==o.Cb(t,4).color&&"warn"!==o.Cb(t,4).color)}))}function L(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,4,"div",[["class","bottom-peer-block"]],null,null,null,null,null)),(n()(),o.qb(1,0,null,null,3,"button",[["class","phone-hangup"],["mat-fab",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,t,e){var o=!0;return"click"===t&&(o=!1!==n.component.clickIcon(2)&&o),o}),w.b,w.a)),o.pb(2,180224,null,0,k.b,[o.k,x.f,[2,p.a]],null,null),(n()(),o.qb(3,0,null,0,1,"mat-icon",[["class","mat-icon notranslate"],["role","img"],["svgIcon","phone-hangup"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),o.pb(4,9158656,null,0,C.b,[o.k,C.d,[8,null],[2,C.a],[2,o.l]],{svgIcon:[0,"svgIcon"]},null)],(function(n,t){n(t,4,0,"phone-hangup")}),(function(n,t){n(t,1,0,o.Cb(t,2).disabled||null,"NoopAnimations"===o.Cb(t,2)._animationMode),n(t,3,0,o.Cb(t,4).inline,"primary"!==o.Cb(t,4).color&&"accent"!==o.Cb(t,4).color&&"warn"!==o.Cb(t,4).color)}))}function P(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,0,"img",[["class","img-pulse"],["src","/assets/app-shell/Radio-1s-200px.svg"]],null,null,null,null,null))],null,null)}function j(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,14,"div",[["class","bottom-local-block"]],null,null,null,null,null)),(n()(),o.gb(16777216,null,null,1,null,P)),o.pb(2,16384,null,0,s.l,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(n()(),o.qb(3,0,null,null,3,"button",[["class","bottom-peer-video"],["mat-mini-fab",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,t,e){var o=!0;return"click"===t&&(o=!1!==n.component.clickIcon(0)&&o),o}),w.b,w.a)),o.pb(4,180224,null,0,k.b,[o.k,x.f,[2,p.a]],null,null),(n()(),o.qb(5,0,null,0,1,"mat-icon",[["class","video-img mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),o.pb(6,9158656,null,0,C.b,[o.k,C.d,[8,null],[2,C.a],[2,o.l]],{svgIcon:[0,"svgIcon"]},null),(n()(),o.qb(7,0,null,null,3,"button",[["class","phone-hangup"],["mat-mini-fab",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,t,e){var o=!0;return"click"===t&&(o=!1!==n.component.clickIcon(2)&&o),o}),w.b,w.a)),o.pb(8,180224,null,0,k.b,[o.k,x.f,[2,p.a]],null,null),(n()(),o.qb(9,0,null,0,1,"mat-icon",[["class","mat-icon notranslate"],["role","img"],["svgIcon","phone-hangup"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),o.pb(10,9158656,null,0,C.b,[o.k,C.d,[8,null],[2,C.a],[2,o.l]],{svgIcon:[0,"svgIcon"]},null),(n()(),o.qb(11,0,null,null,3,"button",[["class","bottom-peer-audio"],["mat-mini-fab",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,t,e){var o=!0;return"click"===t&&(o=!1!==n.component.clickIcon(1)&&o),o}),w.b,w.a)),o.pb(12,180224,null,0,k.b,[o.k,x.f,[2,p.a]],null,null),(n()(),o.qb(13,0,null,0,1,"mat-icon",[["class","microphone-img mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),o.pb(14,9158656,null,0,C.b,[o.k,C.d,[8,null],[2,C.a],[2,o.l]],{svgIcon:[0,"svgIcon"]},null)],(function(n,t){var e=t.component;n(t,2,0,e.videoContext.className.pulse),n(t,6,0,e.buttons[0][e.videoContext.settings.video]),n(t,10,0,"phone-hangup"),n(t,14,0,e.buttons[1][e.videoContext.settings.audio])}),(function(n,t){n(t,3,0,o.Cb(t,4).disabled||null,"NoopAnimations"===o.Cb(t,4)._animationMode),n(t,5,0,o.Cb(t,6).inline,"primary"!==o.Cb(t,6).color&&"accent"!==o.Cb(t,6).color&&"warn"!==o.Cb(t,6).color),n(t,7,0,o.Cb(t,8).disabled||null,"NoopAnimations"===o.Cb(t,8)._animationMode),n(t,9,0,o.Cb(t,10).inline,"primary"!==o.Cb(t,10).color&&"accent"!==o.Cb(t,10).color&&"warn"!==o.Cb(t,10).color),n(t,11,0,o.Cb(t,12).disabled||null,"NoopAnimations"===o.Cb(t,12)._animationMode),n(t,13,0,o.Cb(t,14).inline,"primary"!==o.Cb(t,14).color&&"accent"!==o.Cb(t,14).color&&"warn"!==o.Cb(t,14).color)}))}function E(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,27,"div",[["class","video-container"]],null,null,null,null,null)),o.Gb(512,null,s.y,s.z,[o.q,o.r,o.k,o.C]),o.pb(2,278528,null,0,s.j,[s.y],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),o.qb(3,0,null,null,10,"mat-toolbar",[["class","top-toolbar mat-toolbar"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,A.b,A.a)),o.pb(4,4243456,null,1,y.a,[o.k,d.a,s.d],null,null),o.Hb(603979776,1,{_toolbarRows:1}),(n()(),o.qb(6,0,null,0,2,"app-contact",[],null,null,null,I.b,I.a)),o.pb(7,114688,null,0,_.a,[o.h,O.a,S.a,o.z],{context:[0,"context"]},null),o.Db(131072,s.b,[o.h]),(n()(),o.qb(9,0,null,0,0,"div",[["class","example-spacer"]],null,null,null,null,null)),(n()(),o.gb(16777216,null,0,1,null,M)),o.pb(11,16384,null,0,s.l,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(n()(),o.gb(16777216,null,0,1,null,D)),o.pb(13,16384,null,0,s.l,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(n()(),o.qb(14,0,null,null,4,"div",[["class","main-video-container"]],null,null,null,null,null)),(n()(),o.qb(15,0,[["videoElement",1]],null,3,"video",[["autoplay",""],["class","video-element"],["playsinline",""]],[[8,"srcObject",0]],[[null,"loadeddata"],[null,"ended"]],(function(n,t,e){var o=!0,l=n.component;return"loadeddata"===t&&(o=!1!==l.onLoadedData()&&o),"ended"===t&&(o=!1!==l.onEnded()&&o),o}),null,null)),o.Gb(512,null,s.y,s.z,[o.q,o.r,o.k,o.C]),o.pb(17,278528,null,0,s.j,[s.y],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o.Db(131072,s.b,[o.h]),(n()(),o.qb(19,0,null,null,8,"mat-toolbar",[["class","bottom-toolbar mat-toolbar"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,A.b,A.a)),o.Gb(512,null,s.y,s.z,[o.q,o.r,o.k,o.C]),o.pb(21,278528,null,0,s.j,[s.y],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o.pb(22,4243456,null,1,y.a,[o.k,d.a,s.d],null,null),o.Hb(603979776,2,{_toolbarRows:1}),(n()(),o.gb(16777216,null,0,1,null,L)),o.pb(25,16384,null,0,s.l,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(n()(),o.gb(16777216,null,0,1,null,j)),o.pb(27,16384,null,0,s.l,[o.N,o.K],{ngIf:[0,"ngIf"]},null)],(function(n,t){var e=t.component;n(t,2,0,"video-container",e.videoContext.className),n(t,7,0,o.Kb(t,7,0,o.Cb(t,8).transform(e.videoContext.contact))),n(t,11,0,e.videoContext.local),n(t,13,0,!e.videoContext.local),n(t,17,0,"video-element",e.videoContext.className),n(t,21,0,"bottom-toolbar",e.videoContext.className),n(t,25,0,!e.videoContext.local),n(t,27,0,e.videoContext.local)}),(function(n,t){var e=t.component;n(t,3,0,o.Cb(t,4)._toolbarRows.length>0,0===o.Cb(t,4)._toolbarRows.length),n(t,15,0,o.Kb(t,15,0,o.Cb(t,18).transform(e.videoContext.stream))),n(t,19,0,o.Cb(t,22)._toolbarRows.length>0,0===o.Cb(t,22)._toolbarRows.length)}))}class J{constructor(){}ngOnInit(){}}var K=o.ob({encapsulation:0,styles:[[".web-rtc-context-container[_ngcontent-%COMP%]{height:100%}"]],data:{}});function U(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,1,"app-video-channel",[],null,null,null,E,R)),o.pb(1,245760,null,0,q,[O.a,z.a,N.a,o.h],{videoContext:[0,"videoContext"]},null)],(function(n,t){n(t,1,0,t.context.$implicit)}),null)}function F(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,2,"div",[["class","web-rtc-context-container"]],null,null,null,null,null)),(n()(),o.gb(16777216,null,null,1,null,U)),o.pb(2,278528,null,0,s.k,[o.N,o.K,o.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,t){n(t,2,0,t.component.context.videoCollection)}),null)}var V=e("mrSG"),X=e("iInd"),B=e("pLZG"),G=e("fvN4"),T=e("2Vo4"),W=e("XNiG");class Z{constructor(n,t,e,o,l){this.router=n,this.webRtcService=t,this.appContext=e,this.database=o,this.statusColor=l,this.progress=!0,this.subscriptions=[],this.duplicateCall=JSON.parse(window.localStorage.getItem("duplicateCall")),this.optimizeCall=JSON.parse(window.localStorage.getItem("optimizeCall")),this.video=JSON.parse(window.localStorage.getItem("videoinput")),this.micro=JSON.parse(window.localStorage.getItem("audioinput")),this.audio=JSON.parse(window.localStorage.getItem("audiooutput")),this.constraints={audio:{deviceId:!(!this.audio||!this.audio.deviceId)&&this.audio.deviceId,volume:.5,echoCancellation:!0,autoGainControl:!0},video:{deviceId:!(!this.video||!this.video.deviceId)&&this.video.deviceId}}}ngOnInit(){this.router.events.pipe(Object(B.a)(n=>n instanceof X.g)).subscribe(n=>{}),this.startConnections()}ngAfterViewInit(){this.progress=!1}ngOnDestroy(){this.subscriptions.forEach(n=>n.unsubscribe())}handleDescriptor(n,t){let e=t.val();e.type.indexOf("answers")>-1&&this.setDescriptor(n.pcConnection,e),e.type.indexOf("offers")>-1&&this.startConnections(e)}dispatchDescriptor(n){let t=this,e=n.descriptor,o=n.candidates;function l(e){/answers|offers\/implicit/.test(e.type)?t.database.sendDescriptor(e):t.webRtcService.sendOffer(n),e.type.indexOf("offers")>-1&&t.setAnswerListener(n)}e.optimize&&o.length?(e.candidates=this.setCandidates(e,o),l(e)):e.optimize||(l(e),o.length&&this.setCandidates(e,o).forEach(n=>{this.database.sendDescriptor(n).catch(this.onError)}))}setCandidates(n,t){let e=[];return t.forEach(t=>{e.push(new G.b({wid:n.wid,contact:n.contact,date:Date.now(),sender:this.appContext.user.value,descId:n.messId,type:"candidates",desc:t,active:!0,optimize:n.optimize,uid:n.uid}))}),e}setAnswerListener(n){this.database.getRef("/web-rtc/answers/"+this.appContext.appUser.uid).orderByChild("descId").equalTo(n.descriptor.messId).once("child_added",this.handleDescriptor.bind(this,n))}setImplicitListener(n){this.database.getRef("/web-rtc/offers/implicit/"+this.appContext.appUser.uid).orderByChild("descId").equalTo(n.webRtcContext.wid+n.uid).once("child_added",this.handleDescriptor.bind(this,n))}startConnections(n){return V.__awaiter(this,void 0,void 0,(function*(){let t=this.appContext.webRtcContexts.getContext(this.appContext.contextId);if(!t)return;t.localStream||(t.localStream=yield navigator.mediaDevices.getUserMedia(this.constraints));let e=n?n.sender:t.sender,o=n?[e]:[e].concat(t.receivers.value);if(o){let e=o.findIndex(n=>n.uid===this.appContext.user.value.uid);o.forEach((o,l)=>{let i=this.appContext.appUser.uid===o.uid,a=!n&&(t.uid===this.appContext.appUser.uid||e<l),s=t.webRtcConnections[o.uid]=new G.g({uid:o.uid});s.webRtcContext=t,s.uid=o.uid,s.videoContext=new G.f({wid:t.wid,contact:new T.a(i?this.appContext.appUser:o),className:i?{[o.uid+" local video-context"]:!0,active:!1,fixed:!1,pulse:a}:{[o.uid+" remote video-context"]:!0,active:!1},stream:new T.a(i?t.localStream:void 0),local:i,settings:{type:"settings",video:1,audio:1},dataChannel:{data:new W.a,channel:void 0}}),t.videoCollection.push(s.videoContext),e<l||!a&&0==l?(s.pcConnection=new SimplePeer({initiator:a,channelName:o.uid,config:this.appContext.stunTurnConfig[a?window.localStorage.getItem("stunTurn"):t.desc.stun],stream:t.localStream}),s.pcConnection._debug=console.log,a&&(s.videoContext.dataChannel.channel=s.pcConnection._channel),s.pcConnection.on("signal",e=>V.__awaiter(this,void 0,void 0,(function*(){if(e.type)"offer"===e.type?s.descriptor=new G.d({type:t.uid===this.appContext.appUser.uid?"offers/explicit":"offers/implicit",action:"offered",contact:this.checkContact(o),uid:this.appContext.appUser.uid,wid:t.wid,receivers:a?t.receivers.value:[o],sender:this.appContext.appUser,stun:a?window.localStorage.getItem("stunTurn"):t.desc.stun,desc:e,descId:t.wid+this.appContext.appUser.uid,optimize:a?JSON.parse(window.localStorage.getItem("optimizeCall")):t.desc.optimize,candidates:!!JSON.parse(window.localStorage.getItem("optimizeCall"))&&[]}):"answer"===e.type&&(s.descriptor=new G.a({type:"answers",active:!0,contact:this.checkContact(o),uid:t.desc.uid,descId:n?n.messId:t.desc.messId,wid:t.wid,receivers:[n?n.sender:t.sender],sender:this.appContext.appUser,desc:e,optimize:t.desc.optimize,candidates:!!t.desc.optimize&&[]})),this.dispatchDescriptor(s);else if(e.candidate){let n=s.descriptor;if(n){let t=new G.b({wid:n.wid,contact:this.checkContact(o),date:Date.now(),sender:this.appContext.user.value,descId:n.messId,type:"candidates",desc:e.candidate,active:!0,optimize:n.optimize,uid:n.uid});n.optimize?n.candidates.push(t):this.database.sendDescriptor(t).catch(this.onError)}else s.candidates.push(e.candidate)}}))),s.pcConnection._pc.addEventListener("icegatheringstatechange",n=>{if("complete"===n.target.iceGatheringState){let n=s.descriptor;n&&n.optimize&&(n.candidates.length?(/answers|offers\/implicit/.test(n.type)&&this.database.sendDescriptor(n).then(()=>{console.log("\u0421\u0431\u043e\u0440\u043a\u0430 \u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u043e\u0432 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430. \u041a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b.")}).catch(this.onError),/offers\/explicit/.test(n.type)&&this.webRtcService.sendOffer(s),n.type.indexOf("offers")>-1&&this.setAnswerListener(s)):(this.onError("\u0421\u0431\u043e\u0439 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u043e\u0432 \u0432 \u0441\u043e\u0431\u044b\u0442\u0438\u0438 icegatheringstatechange."),this.setAnnouncement({type:"incompatibilityFailure",desc:{text:"\u0421\u0431\u043e\u0439 \u043d\u0435\u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0438."}})))}}),s.pcConnection._pc.addEventListener("connectionstatechange",n=>{let t=s.videoContext.contact.value;t.statusColor=this.statusColor.statusColors.webrtc.perConnectionStates[n.target.connectionState],s.videoContext.contact.next(t)}),s.pcConnection.on("connect",()=>{a||(s.videoContext.dataChannel.channel=s.pcConnection._channel),s.pcConnection.send(JSON.stringify(this.appContext.localVideoAudio))}),s.pcConnection.on("data",n=>{s.videoContext.dataChannel.data.next(JSON.parse(n))}),s.pcConnection.on("stream",n=>{s.videoContext.stream.next(n)}),s.pcConnection.on("close",n=>{}),s.pcConnection.on("error",n=>{}),a||0!==l||this.setDescriptor(s.pcConnection,n||t.desc)):e>l&&this.setImplicitListener(s)})}this.appContext.appChangeRef.markForCheck()}))}checkContact(n){return n.statusColor=n.statusColor||"",n}setDescriptor(n,t){n.signal(t.desc),this.database.setDescriptorOptions({descriptor:t,data:/answers/.test(t.type)?{active:!1}:{active:!1,action:"accepted"}}).then(n=>{}).catch(n=>this.onError(n)),(()=>V.__awaiter(this,void 0,void 0,(function*(){yield this.checkCandidates(t,n)})))()}requestCandidates(n){return V.__awaiter(this,void 0,void 0,(function*(){return this.database.database.ref(`/web-rtc/candidates/${this.appContext.user.value.uid}`).orderByChild("descId").equalTo(n.messId).once("value")}))}checkCandidates(n,t){let e=this;return new Promise((t,e)=>{n.optimize?o.bind(this,n.candidates,t,e)():this.requestCandidates(n).then(n=>{let l=n.val();l&&o.bind(this,Object.values(l),t,e)()}).catch(this.onError)});function o(n,o,l){n.forEach(n=>{t.signal({candidate:n.desc}),e.database.setDescriptorOptions({descriptor:n,data:{active:!1}}).then(n=>{}).catch(n=>this.onError(n))}),o()}}setAnnouncement(n){this.appContext.announcements.next([n].concat(this.appContext.announcements.value)),this.appContext.appChangeRef.markForCheck()}onError(n){console.log(n)}}var H=o.ob({encapsulation:0,styles:[[".web-rtc-component-container[_ngcontent-%COMP%]{height:100%}.startScreen[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%;display:flex;justify-content:center;align-items:center}"]],data:{}});function Q(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,2,"div",[["class","startScreen"]],null,null,null,null,null)),(n()(),o.qb(1,0,null,null,1,"mat-progress-spinner",[["class","mat-progress-spinner"],["color","primary"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"],[1,"aria-valuemin",0],[1,"aria-valuemax",0],[1,"aria-valuenow",0],[1,"mode",0]],null,null,g,b)),o.pb(2,114688,null,0,a.b,[o.k,d.a,[2,s.d],[2,p.a],a.a],{color:[0,"color"],mode:[1,"mode"]},null)],(function(n,t){n(t,2,0,"primary","indeterminate")}),(function(n,t){n(t,1,0,o.Cb(t,2)._noopAnimations,o.Cb(t,2).diameter,o.Cb(t,2).diameter,"determinate"===o.Cb(t,2).mode?0:null,"determinate"===o.Cb(t,2).mode?100:null,"determinate"===o.Cb(t,2).mode?o.Cb(t,2).value:null,o.Cb(t,2).mode)}))}function Y(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,1,"app-web-rtc-context",[],null,null,null,F,K)),o.pb(1,114688,null,0,J,[],{context:[0,"context"]},null)],(function(n,t){n(t,1,0,t.context.$implicit)}),null)}function $(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,3,"div",[["class","web-rtc-component-container"]],null,null,null,null,null)),(n()(),o.gb(16777216,null,null,2,null,Y)),o.pb(2,278528,null,0,s.k,[o.N,o.K,o.q],{ngForOf:[0,"ngForOf"]},null),o.Db(131072,s.b,[o.h])],(function(n,t){var e=t.component;n(t,2,0,o.Kb(t,2,0,o.Cb(t,3).transform(e.appContext.webRtcContexts.contexts)))}),null)}function nn(n){return o.Lb(0,[(n()(),o.gb(16777216,null,null,1,null,Q)),o.pb(1,16384,null,0,s.l,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(n()(),o.gb(16777216,null,null,1,null,$)),o.pb(3,16384,null,0,s.l,[o.N,o.K],{ngIf:[0,"ngIf"]},null)],(function(n,t){var e=t.component;n(t,1,0,e.progress),n(t,3,0,!e.progress)}),null)}function tn(n){return o.Lb(0,[(n()(),o.qb(0,0,null,null,1,"app-web-rtc",[],null,null,null,nn,H)),o.pb(1,4440064,null,0,Z,[X.o,z.a,O.a,S.a,N.a],null,null)],(function(n,t){n(t,1,0)}),null)}var en=o.mb("app-web-rtc",Z,tn,{},{},[]),on=e("NcP4"),ln=e("POq0"),an=e("QQfA"),sn=e("JjoW"),rn=e("Mz6y"),cn=e("gavF"),un=e("/Co4"),dn=e("s7LF"),pn=e("/q54");class bn{}var mn=e("igqZ"),hn=e("HsOI"),gn=e("zMNK"),fn=e("hOhj"),Cn=e("oapL"),vn=e("ZwOa"),xn=e("8P0U"),wn=e("elxJ"),kn=e("rWV4"),An=e("mkRZ"),yn=e("pBi1"),In=e("lT8R"),_n=e("7of8"),On=e("VDRc"),Sn=e("ura0"),qn=e("Nhcz"),zn=e("u9T3"),Nn=e("Gcy5");e.d(t,"WebRtcModuleNgFactory",(function(){return Rn}));var Rn=o.nb(l,[],(function(n){return o.zb([o.Ab(512,o.j,o.Z,[[8,[i.a,en,on.a]],[3,o.j],o.v]),o.Ab(4608,s.n,s.m,[o.s,[2,s.D]]),o.Ab(4608,ln.c,ln.c,[]),o.Ab(4608,an.c,an.c,[an.i,an.e,o.j,an.h,an.f,o.p,o.x,s.d,r.b,[2,s.h]]),o.Ab(5120,an.j,an.k,[an.c]),o.Ab(5120,sn.a,sn.b,[an.c]),o.Ab(5120,rn.b,rn.c,[an.c]),o.Ab(4608,u.e,c.c,[[2,c.g],[2,c.l]]),o.Ab(4608,c.b,c.b,[]),o.Ab(5120,cn.a,cn.d,[an.c]),o.Ab(5120,un.b,un.c,[an.c]),o.Ab(4608,dn.e,dn.e,[]),o.Ab(4608,dn.w,dn.w,[]),o.Ab(5120,o.b,(function(n,t){return[pn.j(n,t)]}),[s.d,o.z]),o.Ab(1073742336,s.c,s.c,[]),o.Ab(1073742336,X.s,X.s,[[2,X.x],[2,X.o]]),o.Ab(1073742336,bn,bn,[]),o.Ab(1073742336,r.a,r.a,[]),o.Ab(1073742336,c.l,c.l,[[2,c.d],[2,u.f]]),o.Ab(1073742336,y.b,y.b,[]),o.Ab(1073742336,C.c,C.c,[]),o.Ab(1073742336,mn.c,mn.c,[]),o.Ab(1073742336,ln.d,ln.d,[]),o.Ab(1073742336,hn.e,hn.e,[]),o.Ab(1073742336,gn.e,gn.e,[]),o.Ab(1073742336,d.b,d.b,[]),o.Ab(1073742336,fn.b,fn.b,[]),o.Ab(1073742336,an.g,an.g,[]),o.Ab(1073742336,c.v,c.v,[]),o.Ab(1073742336,c.t,c.t,[]),o.Ab(1073742336,c.q,c.q,[]),o.Ab(1073742336,sn.d,sn.d,[]),o.Ab(1073742336,x.a,x.a,[]),o.Ab(1073742336,rn.e,rn.e,[]),o.Ab(1073742336,k.c,k.c,[]),o.Ab(1073742336,Cn.c,Cn.c,[]),o.Ab(1073742336,vn.b,vn.b,[]),o.Ab(1073742336,xn.c,xn.c,[]),o.Ab(1073742336,a.c,a.c,[]),o.Ab(1073742336,wn.d,wn.d,[]),o.Ab(1073742336,kn.j,kn.j,[]),o.Ab(1073742336,v.b,v.b,[]),o.Ab(1073742336,cn.c,cn.c,[]),o.Ab(1073742336,cn.b,cn.b,[]),o.Ab(1073742336,un.e,un.e,[]),o.Ab(1073742336,An.a,An.a,[]),o.Ab(1073742336,yn.d,yn.d,[]),o.Ab(1073742336,yn.c,yn.c,[]),o.Ab(1073742336,In.a,In.a,[]),o.Ab(1073742336,_n.a,_n.a,[]),o.Ab(1073742336,dn.v,dn.v,[]),o.Ab(1073742336,dn.s,dn.s,[]),o.Ab(1073742336,pn.c,pn.c,[]),o.Ab(1073742336,On.a,On.a,[]),o.Ab(1073742336,Sn.c,Sn.c,[]),o.Ab(1073742336,qn.a,qn.a,[]),o.Ab(1073742336,zn.a,zn.a,[[2,pn.g],o.z]),o.Ab(1073742336,Nn.a,Nn.a,[]),o.Ab(1073742336,l,l,[]),o.Ab(1024,X.m,(function(){return[[{path:"",component:Z}]]}),[])])}))}}]);
//# sourceMappingURL=18-es2015.js.map