(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{z6Qy:function(t,n,e){"use strict";e.r(n);var o=e("8Y7J");class l{}var a=e("pMnS"),i=e("W5yJ"),s=e("SVse"),r=e("IP0z"),c=e("Xd0L"),u=e("cUpR"),d=e("/HVE"),b=e("omvX"),p=o.ob({encapsulation:2,styles:[".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2s linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}"],data:{}});function m(t){return o.Lb(0,[(t()(),o.qb(0,0,null,null,0,":svg:circle",[["cx","50%"],["cy","50%"]],[[1,"r",0],[4,"animation-name",null],[4,"stroke-dashoffset","px"],[4,"stroke-dasharray","px"],[4,"stroke-width","%"]],null,null,null,null))],null,(function(t,n){var e=n.component;t(n,0,0,e._circleRadius,"mat-progress-spinner-stroke-rotate-"+e.diameter,e._strokeDashOffset,e._strokeCircumference,e._circleStrokeWidth)}))}function h(t){return o.Lb(0,[(t()(),o.qb(0,0,null,null,0,":svg:circle",[["cx","50%"],["cy","50%"]],[[1,"r",0],[4,"stroke-dashoffset","px"],[4,"stroke-dasharray","px"],[4,"stroke-width","%"]],null,null,null,null))],null,(function(t,n){var e=n.component;t(n,0,0,e._circleRadius,e._strokeDashOffset,e._strokeCircumference,e._circleStrokeWidth)}))}function g(t){return o.Lb(2,[(t()(),o.qb(0,0,null,null,5,":svg:svg",[["focusable","false"],["preserveAspectRatio","xMidYMid meet"]],[[4,"width","px"],[4,"height","px"],[1,"viewBox",0]],null,null,null,null)),o.pb(1,16384,null,0,s.p,[],{ngSwitch:[0,"ngSwitch"]},null),(t()(),o.gb(16777216,null,null,1,null,m)),o.pb(3,278528,null,0,s.q,[o.N,o.K,s.p],{ngSwitchCase:[0,"ngSwitchCase"]},null),(t()(),o.gb(16777216,null,null,1,null,h)),o.pb(5,278528,null,0,s.q,[o.N,o.K,s.p],{ngSwitchCase:[0,"ngSwitchCase"]},null)],(function(t,n){t(n,1,0,"indeterminate"===n.component.mode),t(n,3,0,!0),t(n,5,0,!1)}),(function(t,n){var e=n.component;t(n,0,0,e.diameter,e.diameter,e._viewBox)}))}var f=e("Mr+X"),C=e("Gi4r"),v=e("KPQW"),x=e("5GAg"),w=e("bujt"),k=e("Fwaw"),A=e("FbN9"),y=e("BzsH"),I=e("2/pp"),_=e("xQwi"),O=e("VYsW"),S=e("ZJFI");class q{constructor(t,n,e,o){this.appContext=t,this.webRtcService=n,this.statusColor=e,this.changeRef=o,this.localBadge="",this.subscriptions=[],this.bottomVideo="video",this.bottomAudio="audio",this.topPeerVideoImg="video",this.topPeerAudioImg="audio",this.buttons=[["video-off","video"],["audio-off","audio"]]}ngOnInit(){this.videoContext.local&&this.subscriptions.push(this.appContext.announcements.subscribe(t=>{let n=t.filter(t=>t.active).length;this.localBadge=0==n?"":n+""})),this.subscriptions.push(this.videoContext.dataChannel.data.subscribe(t=>{if("settings"===t.type)"video"in t&&(this.topPeerVideoImg=this.buttons[0][t.video]),"audio"in t&&(this.topPeerAudioImg=this.buttons[1][t.audio]);else if("status"===t.type){let n=this.videoContext.contact.value;n.statusColor=t.statusColor,this.videoContext.contact.next(n),this.webRtcService.checkConnectionState({state:t.statusText,contact:n,videoContext:this.videoContext})}this.changeRef.detectChanges()}))}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe())}clickIcon(t){let n;switch(t){case 0:let t=this.videoContext.stream.value.getVideoTracks()[0];t&&(t.enabled=!("video"==this.bottomVideo)),n={type:"settings",video:Number(t.enabled)},this.bottomVideo=this.buttons[0][+t.enabled];break;case 1:let e=this.videoContext.stream.value.getAudioTracks()[0];e&&(e.enabled=!("audio"===this.bottomAudio)),n={type:"settings",audio:Number(e.enabled)},this.bottomAudio=this.buttons[1][+e.enabled];break;case 2:this.videoContext.local&&this.sendDataMessages({type:"status",statusColor:this.statusColor.statusColors.webrtc.disconnected,statusText:"disconnected"}),this.webRtcService.stopVideoChannel(this.videoContext)}this.sendDataMessages(n)}sendDataMessages(t){let n=this.appContext.webRtcContexts.getContext(this.videoContext.wid);n&&n.videoCollection.forEach(n=>{n.contact.value.uid!==this.videoContext.contact.value.uid&&n.dataChannel.channel&&"open"===n.dataChannel.channel.readyState&&n.dataChannel.channel.send(JSON.stringify(t))})}onLoadedData(){this.videoContext.className.active=!0,this.webRtcService.checkVideoContexts(this.videoContext)}onEnded(){this.videoContext.className.active=!1,this.webRtcService.checkVideoContexts(this.videoContext)}}var z=e("hoN+"),N=e("tX6c"),R=o.ob({encapsulation:0,styles:[[".video-container[_ngcontent-%COMP%]{position:relative;height:100%}.top-toolbar[_ngcontent-%COMP%]{position:absolute;top:0;background:0 0;display:flex;align-items:center;justify-content:space-between;z-index:2}.top-local-block[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.bottom-peer-block[_ngcontent-%COMP%]{width:160px;display:flex;justify-content:space-between;align-items:center}.bottom-peer-audio[_ngcontent-%COMP%], .bottom-peer-video[_ngcontent-%COMP%]{background-color:transparent!important}.main-video-container[_ngcontent-%COMP%]{height:100%}video.video-element[_ngcontent-%COMP%]{position:relative;z-index:0;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:50% 50%;object-position:50% 50%;border:0 solid #cecece}.phone-hangup[_ngcontent-%COMP%]{background-color:#c60000!important}mat-icon[_ngcontent-%COMP%]{color:#fff!important}.bottom-toolbar[_ngcontent-%COMP%]{background:0 0;position:absolute;bottom:0;display:flex;justify-content:center}.img-pulse[_ngcontent-%COMP%]{position:absolute;transform:scale(.9) rotate(-45deg);transform-origin:13px 88px;display:none}div.video-container.active.pulse[_ngcontent-%COMP%]   .img-pulse[_ngcontent-%COMP%]{display:initial}div.video-container.local.active[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:4;transition:.5s}div.video-container.local.active.fixed[_ngcontent-%COMP%]{bottom:0;left:0;width:200px;height:200px;top:unset}"]],data:{}});function M(t){return o.Lb(0,[(t()(),o.qb(0,0,null,null,3,"div",[["class","top-local-block"]],null,null,null,null,null)),(t()(),o.qb(1,0,null,null,2,"mat-icon",[["class","mat-icon notranslate mat-badge"],["matBadgeSize","small"],["role","img"],["svgIcon","notifications"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null],[2,"mat-badge-overlap",null],[2,"mat-badge-above",null],[2,"mat-badge-below",null],[2,"mat-badge-before",null],[2,"mat-badge-after",null],[2,"mat-badge-small",null],[2,"mat-badge-medium",null],[2,"mat-badge-large",null],[2,"mat-badge-hidden",null],[2,"mat-badge-disabled",null]],null,null,f.b,f.a)),o.pb(2,9158656,null,0,C.b,[o.k,C.d,[8,null],[2,C.a],[2,o.l]],{svgIcon:[0,"svgIcon"]},null),o.pb(3,671744,null,0,v.a,[o.x,o.k,x.c,o.C,[2,b.a]],{color:[0,"color"],content:[1,"content"],size:[2,"size"]},null)],(function(t,n){var e=n.component;t(n,2,0,"notifications"),t(n,3,0,"accent",e.localBadge,"small")}),(function(t,n){t(n,1,1,[o.Cb(n,2).inline,"primary"!==o.Cb(n,2).color&&"accent"!==o.Cb(n,2).color&&"warn"!==o.Cb(n,2).color,o.Cb(n,3).overlap,o.Cb(n,3).isAbove(),!o.Cb(n,3).isAbove(),!o.Cb(n,3).isAfter(),o.Cb(n,3).isAfter(),"small"===o.Cb(n,3).size,"medium"===o.Cb(n,3).size,"large"===o.Cb(n,3).size,o.Cb(n,3).hidden||!o.Cb(n,3)._hasContent,o.Cb(n,3).disabled])}))}function P(t){return o.Lb(0,[(t()(),o.qb(0,0,null,null,4,"div",[["class","top-peer-block"]],null,null,null,null,null)),(t()(),o.qb(1,0,null,null,1,"mat-icon",[["class","video-peer-img mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),o.pb(2,9158656,null,0,C.b,[o.k,C.d,[8,null],[2,C.a],[2,o.l]],{svgIcon:[0,"svgIcon"]},null),(t()(),o.qb(3,0,null,null,1,"mat-icon",[["class","microphone-peer-img mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),o.pb(4,9158656,null,0,C.b,[o.k,C.d,[8,null],[2,C.a],[2,o.l]],{svgIcon:[0,"svgIcon"]},null)],(function(t,n){var e=n.component;t(n,2,0,e.topPeerVideoImg),t(n,4,0,e.topPeerAudioImg)}),(function(t,n){t(n,1,0,o.Cb(n,2).inline,"primary"!==o.Cb(n,2).color&&"accent"!==o.Cb(n,2).color&&"warn"!==o.Cb(n,2).color),t(n,3,0,o.Cb(n,4).inline,"primary"!==o.Cb(n,4).color&&"accent"!==o.Cb(n,4).color&&"warn"!==o.Cb(n,4).color)}))}function D(t){return o.Lb(0,[(t()(),o.qb(0,0,null,null,4,"div",[["class","bottom-local-block"]],null,null,null,null,null)),(t()(),o.qb(1,0,null,null,3,"button",[["mat-fab",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,w.b,w.a)),o.pb(2,180224,null,0,k.b,[o.k,x.f,[2,b.a]],null,null),(t()(),o.qb(3,0,null,0,1,"mat-icon",[["class","mat-icon notranslate"],["role","img"],["svgIcon","phone-hangup"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),o.pb(4,9158656,null,0,C.b,[o.k,C.d,[8,null],[2,C.a],[2,o.l]],{svgIcon:[0,"svgIcon"]},null)],(function(t,n){t(n,4,0,"phone-hangup")}),(function(t,n){t(n,1,0,o.Cb(n,2).disabled||null,"NoopAnimations"===o.Cb(n,2)._animationMode),t(n,3,0,o.Cb(n,4).inline,"primary"!==o.Cb(n,4).color&&"accent"!==o.Cb(n,4).color&&"warn"!==o.Cb(n,4).color)}))}function L(t){return o.Lb(0,[(t()(),o.qb(0,0,null,null,13,"div",[["class","bottom-peer-block"]],null,null,null,null,null)),(t()(),o.qb(1,0,null,null,0,"img",[["class","img-pulse"],["src","/assets/app-shell/Radio-1s-200px.svg"]],null,null,null,null,null)),(t()(),o.qb(2,0,null,null,3,"button",[["class","bottom-peer-video"],["mat-mini-fab",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(t,n,e){var o=!0;return"click"===n&&(o=!1!==t.component.clickIcon(0)&&o),o}),w.b,w.a)),o.pb(3,180224,null,0,k.b,[o.k,x.f,[2,b.a]],null,null),(t()(),o.qb(4,0,null,0,1,"mat-icon",[["class","video-img mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),o.pb(5,9158656,null,0,C.b,[o.k,C.d,[8,null],[2,C.a],[2,o.l]],{svgIcon:[0,"svgIcon"]},null),(t()(),o.qb(6,0,null,null,3,"button",[["class","phone-hangup"],["mat-mini-fab",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(t,n,e){var o=!0;return"click"===n&&(o=!1!==t.component.clickIcon(2)&&o),o}),w.b,w.a)),o.pb(7,180224,null,0,k.b,[o.k,x.f,[2,b.a]],null,null),(t()(),o.qb(8,0,null,0,1,"mat-icon",[["class","mat-icon notranslate"],["role","img"],["svgIcon","phone-hangup"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),o.pb(9,9158656,null,0,C.b,[o.k,C.d,[8,null],[2,C.a],[2,o.l]],{svgIcon:[0,"svgIcon"]},null),(t()(),o.qb(10,0,null,null,3,"button",[["class","bottom-peer-audio"],["mat-mini-fab",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(t,n,e){var o=!0;return"click"===n&&(o=!1!==t.component.clickIcon(1)&&o),o}),w.b,w.a)),o.pb(11,180224,null,0,k.b,[o.k,x.f,[2,b.a]],null,null),(t()(),o.qb(12,0,null,0,1,"mat-icon",[["class","microphone-img mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),o.pb(13,9158656,null,0,C.b,[o.k,C.d,[8,null],[2,C.a],[2,o.l]],{svgIcon:[0,"svgIcon"]},null)],(function(t,n){var e=n.component;t(n,5,0,e.bottomVideo),t(n,9,0,"phone-hangup"),t(n,13,0,e.bottomAudio)}),(function(t,n){t(n,2,0,o.Cb(n,3).disabled||null,"NoopAnimations"===o.Cb(n,3)._animationMode),t(n,4,0,o.Cb(n,5).inline,"primary"!==o.Cb(n,5).color&&"accent"!==o.Cb(n,5).color&&"warn"!==o.Cb(n,5).color),t(n,6,0,o.Cb(n,7).disabled||null,"NoopAnimations"===o.Cb(n,7)._animationMode),t(n,8,0,o.Cb(n,9).inline,"primary"!==o.Cb(n,9).color&&"accent"!==o.Cb(n,9).color&&"warn"!==o.Cb(n,9).color),t(n,10,0,o.Cb(n,11).disabled||null,"NoopAnimations"===o.Cb(n,11)._animationMode),t(n,12,0,o.Cb(n,13).inline,"primary"!==o.Cb(n,13).color&&"accent"!==o.Cb(n,13).color&&"warn"!==o.Cb(n,13).color)}))}function j(t){return o.Lb(0,[(t()(),o.qb(0,0,null,null,26,"div",[["class","video-container"]],null,null,null,null,null)),o.Gb(512,null,s.y,s.z,[o.q,o.r,o.k,o.C]),o.pb(2,278528,null,0,s.j,[s.y],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(t()(),o.qb(3,0,null,null,9,"mat-toolbar",[["class","top-toolbar mat-toolbar"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,A.b,A.a)),o.pb(4,4243456,null,1,y.a,[o.k,d.a,s.d],null,null),o.Hb(603979776,1,{_toolbarRows:1}),(t()(),o.qb(6,0,null,0,2,"app-contact",[],null,null,null,I.b,I.a)),o.pb(7,114688,null,0,_.a,[o.h,O.a,S.a,o.z],{context:[0,"context"]},null),o.Db(131072,s.b,[o.h]),(t()(),o.gb(16777216,null,0,1,null,M)),o.pb(10,16384,null,0,s.l,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(t()(),o.gb(16777216,null,0,1,null,P)),o.pb(12,16384,null,0,s.l,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(t()(),o.qb(13,0,null,null,4,"div",[["class","main-video-container"]],null,null,null,null,null)),(t()(),o.qb(14,0,[["videoElement",1]],null,3,"video",[["autoplay",""],["class","video-element"],["playsinline",""]],[[8,"srcObject",0]],[[null,"loadeddata"],[null,"ended"]],(function(t,n,e){var o=!0,l=t.component;return"loadeddata"===n&&(o=!1!==l.onLoadedData()&&o),"ended"===n&&(o=!1!==l.onEnded()&&o),o}),null,null)),o.Gb(512,null,s.y,s.z,[o.q,o.r,o.k,o.C]),o.pb(16,278528,null,0,s.j,[s.y],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o.Db(131072,s.b,[o.h]),(t()(),o.qb(18,0,null,null,8,"mat-toolbar",[["class","bottom-toolbar mat-toolbar"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,A.b,A.a)),o.Gb(512,null,s.y,s.z,[o.q,o.r,o.k,o.C]),o.pb(20,278528,null,0,s.j,[s.y],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o.pb(21,4243456,null,1,y.a,[o.k,d.a,s.d],null,null),o.Hb(603979776,2,{_toolbarRows:1}),(t()(),o.gb(16777216,null,0,1,null,D)),o.pb(24,16384,null,0,s.l,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(t()(),o.gb(16777216,null,0,1,null,L)),o.pb(26,16384,null,0,s.l,[o.N,o.K],{ngIf:[0,"ngIf"]},null)],(function(t,n){var e=n.component;t(n,2,0,"video-container",e.videoContext.className),t(n,7,0,o.Kb(n,7,0,o.Cb(n,8).transform(e.videoContext.contact))),t(n,10,0,e.videoContext.local),t(n,12,0,!e.videoContext.local),t(n,16,0,"video-element",e.videoContext.className),t(n,20,0,"bottom-toolbar",e.videoContext.className),t(n,24,0,!e.videoContext.local),t(n,26,0,e.videoContext.local)}),(function(t,n){var e=n.component;t(n,3,0,o.Cb(n,4)._toolbarRows.length>0,0===o.Cb(n,4)._toolbarRows.length),t(n,14,0,o.Kb(n,14,0,o.Cb(n,17).transform(e.videoContext.stream))),t(n,18,0,o.Cb(n,21)._toolbarRows.length>0,0===o.Cb(n,21)._toolbarRows.length)}))}class E{constructor(){}ngOnInit(){}}var V=o.ob({encapsulation:0,styles:[[".web-rtc-context-container[_ngcontent-%COMP%]{height:100%}"]],data:{}});function J(t){return o.Lb(0,[(t()(),o.qb(0,0,null,null,1,"app-video-channel",[],null,null,null,j,R)),o.pb(1,245760,null,0,q,[O.a,z.a,N.a,o.h],{videoContext:[0,"videoContext"]},null)],(function(t,n){t(n,1,0,n.context.$implicit)}),null)}function K(t){return o.Lb(0,[(t()(),o.qb(0,0,null,null,2,"div",[["class","web-rtc-context-container"]],null,null,null,null,null)),(t()(),o.gb(16777216,null,null,1,null,J)),o.pb(2,278528,null,0,s.k,[o.N,o.K,o.q],{ngForOf:[0,"ngForOf"]},null)],(function(t,n){t(n,2,0,n.component.context.videoCollection)}),null)}var F=e("mrSG"),T=e("iInd"),X=e("pLZG"),B=e("fvN4"),U=e("2Vo4"),G=e("XNiG");class W{constructor(t,n,e,o,l){this.router=t,this.webRtcService=n,this.appContext=e,this.database=o,this.statusColor=l,this.progress=!0,this.subscriptions=[],this.duplicateCall=JSON.parse(window.localStorage.getItem("duplicateCall")),this.optimizeCall=JSON.parse(window.localStorage.getItem("optimizeCall")),this.video=JSON.parse(window.localStorage.getItem("videoinput")),this.micro=JSON.parse(window.localStorage.getItem("audioinput")),this.audio=JSON.parse(window.localStorage.getItem("audiooutput")),this.constraints={audio:{deviceId:!(!this.audio||!this.audio.deviceId)&&this.audio.deviceId,volume:1},video:{deviceId:!(!this.video||!this.video.deviceId)&&this.video.deviceId}}}ngOnInit(){this.router.events.pipe(Object(X.a)(t=>t instanceof T.g)).subscribe(t=>{}),this.startConnections()}ngAfterViewInit(){this.progress=!1}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe())}handleDescriptor(t,n){let e=n.val();this.setDescriptor(t.pcConnection,e)}dispatchDescriptor(t){let n=t.descriptor,e=t.candidates;n.optimize&&e.length?(n.candidates=this.setCandidates(n,e),/answers|offers\/implicit/.test(n.type)?this.database.sendDescriptor(n):this.webRtcService.sendOffer(t)):n.optimize||(/answers|offers\/implicit/.test(n.type)?this.database.sendDescriptor(n):this.webRtcService.sendOffer(t),e.length&&this.setCandidates(n,e).forEach(t=>{this.database.sendDescriptor(t).catch(this.onError)})),n.type.indexOf("offers")>-1&&this.setAnswerListener(t)}setCandidates(t,n){let e=[];return n.forEach(n=>{e.push(new B.b({wid:t.wid,contact:t.contact,date:Date.now(),sender:this.appContext.user.value,descId:t.messId,type:"candidates",desc:n,active:!0,optimize:t.optimize,uid:t.uid}))}),e}setAnswerListener(t){this.database.getRef("/web-rtc/answers/"+this.appContext.appUser.uid).orderByChild("descId").equalTo(t.descriptor.messId).on("child_added",this.handleDescriptor.bind(this,t))}setImplicitListener(t){this.database.getRef("/web-rtc/offers/implicit/"+this.appContext.appUser.uid).orderByChild("wid").equalTo(t.webRtcContext.wid).on("child_added",this.handleDescriptor.bind(this,t))}startConnections(){return F.__awaiter(this,void 0,void 0,(function*(){let t=this.appContext.webRtcContexts.getContext(this.appContext.contextId);if(!t)return;t.localStream=yield navigator.mediaDevices.getUserMedia(this.constraints);let n=[t.sender].concat(t.receivers.value);if(n){let e=n.findIndex(t=>t.uid===this.appContext.user.value.uid);n.forEach((n,o)=>{let l=this.appContext.appUser.uid===n.uid,a=t.uid===this.appContext.appUser.uid||e<o,i=t.webRtcConnections[n.uid]=new B.g({uid:n.uid});i.webRtcContext=t,i.uid=n.uid,i.videoContext=new B.f({wid:t.wid,contact:new U.a(l?this.appContext.appUser:n),className:l?{[n.uid+" local video-context"]:!0,active:!1,fixed:!1,pulse:a}:{[n.uid+" remote video-context"]:!0,active:!1,pulse:!1},stream:new U.a(l?t.localStream:void 0),local:l,dataChannel:{data:new G.a,channel:void 0}}),t.videoCollection.push(i.videoContext),l||(i.pcConnection=new SimplePeer({initiator:a,channelName:n.uid,config:this.appContext.stunTurnConfig[a?window.localStorage.getItem("stunTurn"):t.desc.stun],stream:t.localStream}),i.pcConnection._debug=console.log,a&&(i.videoContext.dataChannel.channel=i.pcConnection._channel),i.pcConnection.on("signal",e=>F.__awaiter(this,void 0,void 0,(function*(){if(e.type)"offer"===e.type?i.descriptor=new B.d({type:a?"offers/explicit":"offers/implicit",action:"offered",contact:this.checkContact(n),uid:this.appContext.appUser.uid,wid:t.wid,receivers:a?t.receivers.value:[n],sender:this.appContext.appUser,stun:a?window.localStorage.getItem("stunTurn"):t.desc.stun,desc:e,optimize:a?JSON.parse(window.localStorage.getItem("optimizeCall")):t.desc.optimize,candidates:!!JSON.parse(window.localStorage.getItem("optimizeCall"))&&[]}):"answer"===e.type&&(i.descriptor=new B.a({type:"answers",active:!0,contact:this.checkContact(n),uid:t.desc.uid,descId:t.desc.messId,wid:t.wid,receivers:[t.sender],sender:this.appContext.appUser,desc:e,optimize:t.desc.optimize,candidates:!!t.desc.optimize&&[]})),this.dispatchDescriptor(i);else if(e.candidate){let t=i.descriptor;if(t){let o=new B.b({wid:t.wid,contact:this.checkContact(n),date:Date.now(),sender:this.appContext.user.value,descId:t.messId,type:"candidates",desc:e.candidate,active:!0,optimize:t.optimize,uid:t.uid});t.optimize?t.candidates.push(o):this.database.sendDescriptor(o).catch(this.onError)}else i.candidates.push(e.candidate)}}))),i.pcConnection._pc.addEventListener("icegatheringstatechange",t=>{if("complete"===t.target.iceGatheringState){let t=i.descriptor;t&&t.optimize&&(t.candidates.length?(/answers|offers\/implicit/.test(t.type)&&this.database.sendDescriptor(t).then(()=>{console.log("\u0421\u0431\u043e\u0440\u043a\u0430 \u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u043e\u0432 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430. \u041a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b.")}).catch(this.onError),/offers\/explicit/.test(t.type)&&this.webRtcService.sendOffer(i),t.type.indexOf("offers")>-1&&this.setAnswerListener(t)):(this.onError("\u0421\u0431\u043e\u0439 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u043e\u0432 \u0432 \u0441\u043e\u0431\u044b\u0442\u0438\u0438 icegatheringstatechange."),this.setAnnouncement({type:"incompatibilityFailure",desc:{text:"\u0421\u0431\u043e\u0439 \u043d\u0435\u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0438."}})))}}),i.pcConnection._pc.addEventListener("connectionstatechange",t=>{let n=i.videoContext.contact.value;n.statusColor=this.statusColor.statusColors.webrtc.perConnectionStates[t.type],i.videoContext.contact.next(n)}),i.pcConnection.on("connect",()=>{a||(i.videoContext.dataChannel.channel=i.pcConnection._channel),i.pcConnection.send(JSON.stringify({type:"settings",video:1,audio:1}))}),i.pcConnection.on("data",t=>{i.videoContext.dataChannel.data.next(JSON.parse(t))}),i.pcConnection.on("stream",t=>{i.videoContext.stream.next(t)}),i.pcConnection.on("close",()=>{i.videoContext.dataChannel.data.next({type:"status",statusColor:this.statusColor.statusColors.webrtc.closed,statusText:"closed"})}),i.pcConnection.on("error",t=>{}),a||0!==o?!a&&e<o&&(a||this.setImplicitListener(i)):this.setDescriptor(i.pcConnection,t.desc))})}this.appContext.appChangeRef.markForCheck()}))}checkContact(t){return t.statusColor=t.statusColor||"",t}setDescriptor(t,n){t.signal(n.desc),(()=>F.__awaiter(this,void 0,void 0,(function*(){yield this.checkCandidates(n,t)})))()}requestCandidates(t,n){this.database.database.ref(`/web-rtc/candidates/${this.appContext.user.value.uid}`).orderByChild("descId").equalTo(t.messId).once("value").then(t=>{let e=t.val();e&&n.bind(this,e)()}).catch(this.onError)}checkCandidates(t,n){return new Promise((n,o)=>{t.optimize?e.bind(this,t.candidates,n,o)():this.requestCandidates(t,t=>{t&&e.bind(this,Object.values(t),n,o)()})});function e(t,e,o){t.forEach(t=>{n.signal({candidate:t.desc}),this.database.setDescriptorOptions({descriptor:t,data:{active:!1}})}).catch(t=>o(t)),e()}}setAnnouncement(t){this.appContext.announcements.next([t].concat(this.appContext.announcements.value)),this.appContext.appChangeRef.markForCheck()}onError(t){console.log(t)}}var Z=o.ob({encapsulation:0,styles:[[".web-rtc-component-container[_ngcontent-%COMP%]{height:100%}.startScreen[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%;display:flex;justify-content:center;align-items:center}"]],data:{}});function H(t){return o.Lb(0,[(t()(),o.qb(0,0,null,null,2,"div",[["class","startScreen"]],null,null,null,null,null)),(t()(),o.qb(1,0,null,null,1,"mat-progress-spinner",[["class","mat-progress-spinner"],["color","primary"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"],[1,"aria-valuemin",0],[1,"aria-valuemax",0],[1,"aria-valuenow",0],[1,"mode",0]],null,null,g,p)),o.pb(2,114688,null,0,i.b,[o.k,d.a,[2,s.d],[2,b.a],i.a],{color:[0,"color"],mode:[1,"mode"]},null)],(function(t,n){t(n,2,0,"primary","indeterminate")}),(function(t,n){t(n,1,0,o.Cb(n,2)._noopAnimations,o.Cb(n,2).diameter,o.Cb(n,2).diameter,"determinate"===o.Cb(n,2).mode?0:null,"determinate"===o.Cb(n,2).mode?100:null,"determinate"===o.Cb(n,2).mode?o.Cb(n,2).value:null,o.Cb(n,2).mode)}))}function Q(t){return o.Lb(0,[(t()(),o.qb(0,0,null,null,1,"app-web-rtc-context",[],null,null,null,K,V)),o.pb(1,114688,null,0,E,[],{context:[0,"context"]},null)],(function(t,n){t(n,1,0,n.context.$implicit)}),null)}function Y(t){return o.Lb(0,[(t()(),o.qb(0,0,null,null,3,"div",[["class","web-rtc-component-container"]],null,null,null,null,null)),(t()(),o.gb(16777216,null,null,2,null,Q)),o.pb(2,278528,null,0,s.k,[o.N,o.K,o.q],{ngForOf:[0,"ngForOf"]},null),o.Db(131072,s.b,[o.h])],(function(t,n){var e=n.component;t(n,2,0,o.Kb(n,2,0,o.Cb(n,3).transform(e.appContext.webRtcContexts.contexts)))}),null)}function $(t){return o.Lb(0,[(t()(),o.gb(16777216,null,null,1,null,H)),o.pb(1,16384,null,0,s.l,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(t()(),o.gb(16777216,null,null,1,null,Y)),o.pb(3,16384,null,0,s.l,[o.N,o.K],{ngIf:[0,"ngIf"]},null)],(function(t,n){var e=n.component;t(n,1,0,e.progress),t(n,3,0,!e.progress)}),null)}function tt(t){return o.Lb(0,[(t()(),o.qb(0,0,null,null,1,"app-web-rtc",[],null,null,null,$,Z)),o.pb(1,4440064,null,0,W,[T.o,z.a,O.a,S.a,N.a],null,null)],(function(t,n){t(n,1,0)}),null)}var nt=o.mb("app-web-rtc",W,tt,{},{},[]),et=e("NcP4"),ot=e("POq0"),lt=e("QQfA"),at=e("JjoW"),it=e("Mz6y"),st=e("gavF"),rt=e("/Co4"),ct=e("s7LF"),ut=e("/q54");class dt{}var bt=e("igqZ"),pt=e("HsOI"),mt=e("zMNK"),ht=e("hOhj"),gt=e("oapL"),ft=e("ZwOa"),Ct=e("8P0U"),vt=e("elxJ"),xt=e("rWV4"),wt=e("mkRZ"),kt=e("pBi1"),At=e("lT8R"),yt=e("7of8"),It=e("VDRc"),_t=e("ura0"),Ot=e("Nhcz"),St=e("u9T3"),qt=e("Gcy5");e.d(n,"WebRtcModuleNgFactory",(function(){return zt}));var zt=o.nb(l,[],(function(t){return o.zb([o.Ab(512,o.j,o.Z,[[8,[a.a,nt,et.a]],[3,o.j],o.v]),o.Ab(4608,s.n,s.m,[o.s,[2,s.D]]),o.Ab(4608,ot.c,ot.c,[]),o.Ab(4608,lt.c,lt.c,[lt.i,lt.e,o.j,lt.h,lt.f,o.p,o.x,s.d,r.b,[2,s.h]]),o.Ab(5120,lt.j,lt.k,[lt.c]),o.Ab(5120,at.a,at.b,[lt.c]),o.Ab(5120,it.b,it.c,[lt.c]),o.Ab(4608,u.e,c.c,[[2,c.g],[2,c.l]]),o.Ab(4608,c.b,c.b,[]),o.Ab(5120,st.a,st.d,[lt.c]),o.Ab(5120,rt.b,rt.c,[lt.c]),o.Ab(4608,ct.e,ct.e,[]),o.Ab(4608,ct.w,ct.w,[]),o.Ab(5120,o.b,(function(t,n){return[ut.j(t,n)]}),[s.d,o.z]),o.Ab(1073742336,s.c,s.c,[]),o.Ab(1073742336,T.s,T.s,[[2,T.x],[2,T.o]]),o.Ab(1073742336,dt,dt,[]),o.Ab(1073742336,r.a,r.a,[]),o.Ab(1073742336,c.l,c.l,[[2,c.d],[2,u.f]]),o.Ab(1073742336,y.b,y.b,[]),o.Ab(1073742336,C.c,C.c,[]),o.Ab(1073742336,bt.c,bt.c,[]),o.Ab(1073742336,ot.d,ot.d,[]),o.Ab(1073742336,pt.e,pt.e,[]),o.Ab(1073742336,mt.e,mt.e,[]),o.Ab(1073742336,d.b,d.b,[]),o.Ab(1073742336,ht.b,ht.b,[]),o.Ab(1073742336,lt.g,lt.g,[]),o.Ab(1073742336,c.v,c.v,[]),o.Ab(1073742336,c.t,c.t,[]),o.Ab(1073742336,c.q,c.q,[]),o.Ab(1073742336,at.d,at.d,[]),o.Ab(1073742336,x.a,x.a,[]),o.Ab(1073742336,it.e,it.e,[]),o.Ab(1073742336,k.c,k.c,[]),o.Ab(1073742336,gt.c,gt.c,[]),o.Ab(1073742336,ft.b,ft.b,[]),o.Ab(1073742336,Ct.c,Ct.c,[]),o.Ab(1073742336,i.c,i.c,[]),o.Ab(1073742336,vt.d,vt.d,[]),o.Ab(1073742336,xt.j,xt.j,[]),o.Ab(1073742336,v.b,v.b,[]),o.Ab(1073742336,st.c,st.c,[]),o.Ab(1073742336,st.b,st.b,[]),o.Ab(1073742336,rt.e,rt.e,[]),o.Ab(1073742336,wt.a,wt.a,[]),o.Ab(1073742336,kt.d,kt.d,[]),o.Ab(1073742336,kt.c,kt.c,[]),o.Ab(1073742336,At.a,At.a,[]),o.Ab(1073742336,yt.a,yt.a,[]),o.Ab(1073742336,ct.v,ct.v,[]),o.Ab(1073742336,ct.s,ct.s,[]),o.Ab(1073742336,ut.c,ut.c,[]),o.Ab(1073742336,It.a,It.a,[]),o.Ab(1073742336,_t.c,_t.c,[]),o.Ab(1073742336,Ot.a,Ot.a,[]),o.Ab(1073742336,St.a,St.a,[[2,ut.g],o.z]),o.Ab(1073742336,qt.a,qt.a,[]),o.Ab(1073742336,l,l,[]),o.Ab(1024,T.m,(function(){return[[{path:"",component:W}]]}),[])])}))}}]);
//# sourceMappingURL=18-es2015.f6d5d28ee31ced3632a4.js.map