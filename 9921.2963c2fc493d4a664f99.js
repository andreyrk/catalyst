(self.webpackChunkcatalyst=self.webpackChunkcatalyst||[]).push([[9921],{9921:(e,r,t)=>{"use strict";t.r(r),t.d(r,{ion_refresher:()=>y,ion_refresher_content:()=>b});var s=t(3150),i=t(7585),n=t(7807),o=t(2377),a=t(2954),h=t(4086),l=t(6575),f=t(408);const c=e=>{const r=e.querySelector("ion-spinner"),t=r.shadowRoot.querySelector("circle"),s=e.querySelector(".spinner-arrow-container"),i=e.querySelector(".arrow-container"),n=i?i.querySelector("ion-icon"):null,o=(0,h.c)().duration(1e3).easing("ease-out"),a=(0,h.c)().addElement(s).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]),l=(0,h.c)().addElement(t).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]),f=(0,h.c)().addElement(r).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(i&&n){const e=(0,h.c)().addElement(i).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]),r=(0,h.c)().addElement(n).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);o.addAnimation([e,r])}return o.addAnimation([a,l,f])},d=(e,r)=>{e.style.setProperty("opacity",r.toString())},p=(e,r)=>{if(!e)return Promise.resolve();const t=m(e,200);return(0,s.c)(()=>{e.style.setProperty("transition","0.2s all ease-out"),void 0===r?e.style.removeProperty("transform"):e.style.setProperty("transform",`translate3d(0px, ${r}, 0px)`)}),t},g=async(e,r)=>{const t=e.querySelector("ion-refresher-content");if(!t)return Promise.resolve(!1);await new Promise(e=>(0,o.c)(t,e));const s=e.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),n=e.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");return null!==s&&null!==n&&("ios"===r&&(0,i.a)("mobile")&&void 0!==e.style.webkitOverflowScrolling||"md"===r)},m=(e,r=0)=>new Promise(t=>{u(e,r,t)}),u=(e,r=0,t)=>{let s,i;const n={passive:!0},o=()=>{s&&s()},a=r=>{void 0!==r&&e!==r.target||(o(),t(r))};return e&&(e.addEventListener("webkitTransitionEnd",a,n),e.addEventListener("transitionend",a,n),i=setTimeout(a,r+500),s=()=>{i&&(clearTimeout(i),i=void 0),e.removeEventListener("webkitTransitionEnd",a,n),e.removeEventListener("transitionend",a,n)}),o},y=class{constructor(e){(0,s.r)(this,e),this.ionRefresh=(0,s.e)(this,"ionRefresh",7),this.ionPull=(0,s.e)(this,"ionPull",7),this.ionStart=(0,s.e)(this,"ionStart",7),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.pointerDown=!1,this.needsCompletion=!1,this.didRefresh=!1,this.lastVelocityY=0,this.animations=[],this.nativeRefresher=!1,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}async checkNativeRefresher(){const e=await g(this.el,(0,i.b)(this));if(e&&!this.nativeRefresher){const e=this.el.closest("ion-content");this.setupNativeRefresher(e)}else e||this.destroyNativeRefresher()}destroyNativeRefresher(){this.scrollEl&&this.scrollListenerCallback&&(this.scrollEl.removeEventListener("scroll",this.scrollListenerCallback),this.scrollListenerCallback=void 0),this.nativeRefresher=!1}async resetNativeRefresher(e,r){this.state=r,"ios"===(0,i.b)(this)?await p(e,void 0):await m(this.el.querySelector(".refresher-refreshing-icon"),200),this.didRefresh=!1,this.needsCompletion=!1,this.pointerDown=!1,this.animations.forEach(e=>e.destroy()),this.animations=[],this.progress=0,this.state=1}async setupiOSNativeRefresher(e,r){this.elementToTransform=this.scrollEl;const i=e.shadowRoot.querySelectorAll("svg");let n=.16*this.scrollEl.clientHeight;const h=i.length;(0,s.c)(()=>i.forEach(e=>e.style.setProperty("animation","none"))),this.scrollListenerCallback=()=>{(this.pointerDown||1!==this.state)&&(0,s.f)(()=>{const t=this.scrollEl.scrollTop,l=this.el.clientHeight;if(t>0){if(8===this.state){const e=(0,o.j)(0,t/(.5*l),1);return void(0,s.c)(()=>d(r,1-e))}return void(0,s.c)(()=>d(e,0))}this.pointerDown&&(this.didStart||(this.didStart=!0,this.ionStart.emit()),this.pointerDown&&this.ionPull.emit());const f=(0,o.j)(0,Math.abs(t)/l,.99),c=this.progress=(0,o.j)(0,(Math.abs(t)-30)/n,1),g=(0,o.j)(0,Math.floor(c*h),h-1);var m,u;8===this.state||g===h-1?(this.pointerDown&&(m=r,u=this.lastVelocityY,(0,s.c)(()=>{m.style.setProperty("--refreshing-rotation-duration",u>=1?"0.5s":"2s"),m.style.setProperty("opacity","1")})),this.didRefresh||(this.beginRefresh(),this.didRefresh=!0,(0,a.d)({style:"light"}),this.pointerDown||p(this.elementToTransform,`${l}px`))):(this.state=2,((e,r,t,i)=>{(0,s.c)(()=>{d(e,t),r.forEach((e,r)=>e.style.setProperty("opacity",r<=i?"0.99":"0"))})})(e,i,f,g))})},this.scrollEl.addEventListener("scroll",this.scrollListenerCallback),this.gesture=(await Promise.resolve().then(t.bind(t,9461))).createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,onStart:()=>{this.pointerDown=!0,this.didRefresh||p(this.elementToTransform,"0px"),0===n&&(n=.16*this.scrollEl.clientHeight)},onMove:e=>{this.lastVelocityY=e.velocityY},onEnd:()=>{this.pointerDown=!1,this.didStart=!1,this.needsCompletion?(this.resetNativeRefresher(this.elementToTransform,32),this.needsCompletion=!1):this.didRefresh&&(0,s.f)(()=>p(this.elementToTransform,`${this.el.clientHeight}px`))}}),this.disabledChanged()}async setupMDNativeRefresher(e,r,i){const a=(0,o.g)(r).querySelector("circle"),l=this.el.querySelector("ion-refresher-content .refresher-pulling-icon"),f=(0,o.g)(i).querySelector("circle");null!==a&&null!==f&&(0,s.c)(()=>{a.style.setProperty("animation","none"),i.style.setProperty("animation-delay","-655ms"),f.style.setProperty("animation-delay","-655ms")}),this.gesture=(await Promise.resolve().then(t.bind(t,9461))).createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,canStart:()=>8!==this.state&&32!==this.state&&0===this.scrollEl.scrollTop,onStart:e=>{e.data={animation:void 0,didStart:!1,cancelled:!1}},onMove:r=>{if(r.velocityY<0&&0===this.progress&&!r.data.didStart||r.data.cancelled)r.data.cancelled=!0;else{if(!r.data.didStart){r.data.didStart=!0,this.state=2,(0,s.c)(()=>this.scrollEl.style.setProperty("--overflow","hidden"));const t=((e,r,t)=>"scale"===e?((e,r)=>{const t=r.clientHeight,s=(0,h.c)().addElement(e).keyframes([{offset:0,transform:`scale(0) translateY(-${t}px)`},{offset:1,transform:"scale(1) translateY(100px)"}]);return c(e).addAnimation([s])})(r,t):((e,r)=>{const t=r.clientHeight,s=(0,h.c)().addElement(e).keyframes([{offset:0,transform:`translateY(-${t}px)`},{offset:1,transform:"translateY(100px)"}]);return c(e).addAnimation([s])})(r,t))((e=>{const r=e.previousElementSibling;return null!==r&&"ION-HEADER"===r.tagName?"translate":"scale"})(e),l,this.el);return r.data.animation=t,t.progressStart(!1,0),this.ionStart.emit(),void this.animations.push(t)}this.progress=(0,o.j)(0,r.deltaY/180*.5,1),r.data.animation.progressStep(this.progress),this.ionPull.emit()}},onEnd:e=>{if(!e.data.didStart)return;if((0,s.c)(()=>this.scrollEl.style.removeProperty("--overflow")),this.progress<=.4)return this.gesture.enable(!1),void e.data.animation.progressEnd(0,this.progress,500).onFinish(()=>{this.animations.forEach(e=>e.destroy()),this.animations=[],this.gesture.enable(!0),this.state=1});const r=(0,n.g)([0,0],[0,0],[1,1],[1,1],this.progress)[0],t=(e=>(0,h.c)().duration(125).addElement(e).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)"))(l);this.animations.push(t),(0,s.c)(async()=>{l.style.setProperty("--ion-pulling-refresher-translate",100*r+"px"),e.data.animation.progressEnd(),await t.play(),this.beginRefresh(),e.data.animation.destroy()})}}),this.disabledChanged()}async setupNativeRefresher(e){if(this.scrollListenerCallback||!e||this.nativeRefresher||!this.scrollEl)return;this.setCss(0,"",!1,""),this.nativeRefresher=!0;const r=this.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),t=this.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");"ios"===(0,i.b)(this)?this.setupiOSNativeRefresher(r,t):this.setupMDNativeRefresher(e,r,t)}componentDidUpdate(){this.checkNativeRefresher()}async connectedCallback(){if("fixed"!==this.el.getAttribute("slot"))return void console.error('Make sure you use: <ion-refresher slot="fixed">');const e=this.el.closest("ion-content");e?(await new Promise(r=>(0,o.c)(e,r)),this.scrollEl=await e.getScrollElement(),this.backgroundContentEl=(0,o.g)(e).querySelector("#background-content"),await g(this.el,(0,i.b)(this))?this.setupNativeRefresher(e):(this.gesture=(await Promise.resolve().then(t.bind(t,9461))).createGesture({el:e,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:20,passive:!1,canStart:()=>this.canStart(),onStart:()=>this.onStart(),onMove:e=>this.onMove(e),onEnd:()=>this.onEnd()}),this.disabledChanged())):console.error("<ion-refresher> must be used inside an <ion-content>")}disconnectedCallback(){this.destroyNativeRefresher(),this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}async complete(){this.nativeRefresher?(this.needsCompletion=!0,this.pointerDown||(0,o.r)(()=>(0,o.r)(()=>this.resetNativeRefresher(this.elementToTransform,32)))):this.close(32,"120ms")}async cancel(){this.nativeRefresher?this.pointerDown||(0,o.r)(()=>(0,o.r)(()=>this.resetNativeRefresher(this.elementToTransform,16))):this.close(16,"")}getProgress(){return Promise.resolve(this.progress)}canStart(){return!(!this.scrollEl||1!==this.state||this.scrollEl.scrollTop>0)}onStart(){this.progress=0,this.state=1}onMove(e){if(!this.scrollEl)return;const r=e.event;if(r.touches&&r.touches.length>1)return;if(0!=(56&this.state))return;const t=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,s=e.deltaY*t;if(s<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(r.cancelable&&r.preventDefault(),this.setCss(s,"0ms",!0,""),0===s)return void(this.progress=0);const i=this.pullMin;this.progress=s/i,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),s<i?this.state=2:s>this.pullMax?this.beginRefresh():this.state=4}onEnd(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()}beginRefresh(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})}close(e,r){setTimeout(()=>{this.state=1,this.progress=0,this.didStart=!1,this.setCss(0,"0ms",!1,"")},600),this.state=e,this.setCss(0,this.closeDuration,!0,r)}setCss(e,r,t,i){this.nativeRefresher||(this.appliedStyles=e>0,(0,s.c)(()=>{if(this.scrollEl&&this.backgroundContentEl){const s=this.scrollEl.style,n=this.backgroundContentEl.style;s.transform=n.transform=e>0?`translateY(${e}px) translateZ(0px)`:"",s.transitionDuration=n.transitionDuration=r,s.transitionDelay=n.transitionDelay=i,s.overflow=t?"hidden":""}}))}render(){const e=(0,i.b)(this);return(0,s.h)(s.H,{slot:"fixed",class:{[e]:!0,[`refresher-${e}`]:!0,"refresher-native":this.nativeRefresher,"refresher-active":1!==this.state,"refresher-pulling":2===this.state,"refresher-ready":4===this.state,"refresher-refreshing":8===this.state,"refresher-cancelling":16===this.state,"refresher-completing":32===this.state}})}get el(){return(0,s.i)(this)}static get watchers(){return{disabled:["disabledChanged"]}}};y.style={ios:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}",md:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #3880ff)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #3880ff);font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .arrow-container ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;border-radius:100%;padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid var(--ion-color-step-200, #ececec);background:var(--ion-color-step-250, #ffffff);-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}"};const b=class{constructor(e){(0,s.r)(this,e)}componentWillLoad(){if(void 0===this.pullingIcon){const e=(0,i.b)(this),r=void 0!==this.el.style.webkitOverflowScrolling?"lines":"arrow-down";this.pullingIcon=i.c.get("refreshingIcon","ios"===e&&(0,i.a)("mobile")?i.c.get("spinner",r):"circular")}if(void 0===this.refreshingSpinner){const e=(0,i.b)(this);this.refreshingSpinner=i.c.get("refreshingSpinner",i.c.get("spinner","ios"===e?"lines":"circular"))}}render(){const e=this.pullingIcon,r=null!=e&&void 0!==f.S[e],t=(0,i.b)(this);return(0,s.h)(s.H,{class:t},(0,s.h)("div",{class:"refresher-pulling"},this.pullingIcon&&r&&(0,s.h)("div",{class:"refresher-pulling-icon"},(0,s.h)("div",{class:"spinner-arrow-container"},(0,s.h)("ion-spinner",{name:this.pullingIcon,paused:!0}),"md"===t&&"circular"===this.pullingIcon&&(0,s.h)("div",{class:"arrow-container"},(0,s.h)("ion-icon",{name:"caret-back-sharp"})))),this.pullingIcon&&!r&&(0,s.h)("div",{class:"refresher-pulling-icon"},(0,s.h)("ion-icon",{icon:this.pullingIcon,lazy:!1})),this.pullingText&&(0,s.h)("div",{class:"refresher-pulling-text",innerHTML:(0,l.s)(this.pullingText)})),(0,s.h)("div",{class:"refresher-refreshing"},this.refreshingSpinner&&(0,s.h)("div",{class:"refresher-refreshing-icon"},(0,s.h)("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&(0,s.h)("div",{class:"refresher-refreshing-text",innerHTML:(0,l.s)(this.refreshingText)})))}get el(){return(0,s.i)(this)}}}}]);