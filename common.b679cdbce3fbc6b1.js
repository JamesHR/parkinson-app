"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{4833:(C,_,m)=>{m.d(_,{c:()=>c});var a=m(7205),f=m(7683),d=m(3139);const c=(i,n)=>{let t,e;const o=(l,p,v)=>{if(typeof document>"u")return;const w=document.elementFromPoint(l,p);w&&n(w)?w!==t&&(u(),r(w,v)):u()},r=(l,p)=>{t=l,e||(e=t);const v=t;(0,a.c)(()=>v.classList.add("ion-activated")),p()},u=(l=!1)=>{if(!t)return;const p=t;(0,a.c)(()=>p.classList.remove("ion-activated")),l&&e!==t&&t.click(),t=void 0};return(0,d.createGesture)({el:i,gestureName:"buttonActiveDrag",threshold:0,onStart:l=>o(l.currentX,l.currentY,f.a),onMove:l=>o(l.currentX,l.currentY,f.b),onEnd:()=>{u(!0),(0,f.h)(),e=void 0}})}},8685:(C,_,m)=>{m.d(_,{g:()=>a});const a=(n,t,e,o,r)=>d(n[1],t[1],e[1],o[1],r).map(u=>f(n[0],t[0],e[0],o[0],u)),f=(n,t,e,o,r)=>r*(3*t*Math.pow(r-1,2)+r*(-3*e*r+3*e+o*r))-n*Math.pow(r-1,3),d=(n,t,e,o,r)=>i((o-=r)-3*(e-=r)+3*(t-=r)-(n-=r),3*e-6*t+3*n,3*t-3*n,n).filter(l=>l>=0&&l<=1),i=(n,t,e,o)=>{if(0===n)return((n,t,e)=>{const o=t*t-4*n*e;return o<0?[]:[(-t+Math.sqrt(o))/(2*n),(-t-Math.sqrt(o))/(2*n)]})(t,e,o);const r=(3*(e/=n)-(t/=n)*t)/3,u=(2*t*t*t-9*t*e+27*(o/=n))/27;if(0===r)return[Math.pow(-u,1/3)];if(0===u)return[Math.sqrt(-r),-Math.sqrt(-r)];const l=Math.pow(u/2,2)+Math.pow(r/3,3);if(0===l)return[Math.pow(u/2,.5)-t/3];if(l>0)return[Math.pow(-u/2+Math.sqrt(l),1/3)-Math.pow(u/2+Math.sqrt(l),1/3)-t/3];const p=Math.sqrt(Math.pow(-r/3,3)),v=Math.acos(-u/(2*Math.sqrt(Math.pow(-r/3,3)))),w=2*Math.pow(p,1/3);return[w*Math.cos(v/3)-t/3,w*Math.cos((v+2*Math.PI)/3)-t/3,w*Math.cos((v+4*Math.PI)/3)-t/3]}},5062:(C,_,m)=>{m.d(_,{i:()=>a});const a=f=>f&&""!==f.dir?"rtl"===f.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},1112:(C,_,m)=>{m.r(_),m.d(_,{startFocusVisible:()=>c});const a="ion-focused",d=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=i=>{let n=[],t=!0;const e=i?i.shadowRoot:document,o=i||document.body,r=E=>{n.forEach(h=>h.classList.remove(a)),E.forEach(h=>h.classList.add(a)),n=E},u=()=>{t=!1,r([])},l=E=>{t=d.includes(E.key),t||r([])},p=E=>{if(t&&E.composedPath){const h=E.composedPath().filter(g=>!!g.classList&&g.classList.contains("ion-focusable"));r(h)}},v=()=>{e.activeElement===o&&r([])};return e.addEventListener("keydown",l),e.addEventListener("focusin",p),e.addEventListener("focusout",v),e.addEventListener("touchstart",u),e.addEventListener("mousedown",u),{destroy:()=>{e.removeEventListener("keydown",l),e.removeEventListener("focusin",p),e.removeEventListener("focusout",v),e.removeEventListener("touchstart",u),e.removeEventListener("mousedown",u)},setFocus:r}}},1878:(C,_,m)=>{m.d(_,{C:()=>i,a:()=>d,d:()=>c});var a=m(5861),f=m(3756);const d=function(){var n=(0,a.Z)(function*(t,e,o,r,u,l){var p;if(t)return t.attachViewToDom(e,o,u,r);if(!(l||"string"==typeof o||o instanceof HTMLElement))throw new Error("framework delegate is missing");const v="string"==typeof o?null===(p=e.ownerDocument)||void 0===p?void 0:p.createElement(o):o;return r&&r.forEach(w=>v.classList.add(w)),u&&Object.assign(v,u),e.appendChild(v),yield new Promise(w=>(0,f.c)(v,w)),v});return function(e,o,r,u,l,p){return n.apply(this,arguments)}}(),c=(n,t)=>{if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()},i=()=>{let n,t;return{attachViewToDom:function(){var r=(0,a.Z)(function*(u,l,p={},v=[]){var w,E;if(n=u,l){const g="string"==typeof l?null===(w=n.ownerDocument)||void 0===w?void 0:w.createElement(l):l;v.forEach(s=>g.classList.add(s)),Object.assign(g,p),n.appendChild(g),yield new Promise(s=>(0,f.c)(g,s))}else if(n.children.length>0){const g=null===(E=n.ownerDocument)||void 0===E?void 0:E.createElement("div");v.forEach(s=>g.classList.add(s)),g.append(...n.children),n.appendChild(g)}const h=document.querySelector("ion-app")||document.body;return t=document.createComment("ionic teleport"),n.parentNode.insertBefore(t,n),h.appendChild(n),n});return function(l,p){return r.apply(this,arguments)}}(),removeViewFromDom:()=>(n&&t&&(t.parentNode.insertBefore(n,t),t.remove()),Promise.resolve())}}},7683:(C,_,m)=>{m.d(_,{a:()=>d,b:()=>c,c:()=>f,d:()=>n,h:()=>i});const a={getEngine(){var t;const e=window;return e.TapticEngine||(null===(t=e.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const o=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:o})},notification(t){const e=this.getEngine();if(!e)return;const o=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:o})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},f=()=>{a.selection()},d=()=>{a.selectionStart()},c=()=>{a.selectionChanged()},i=()=>{a.selectionEnd()},n=t=>{a.impact(t)}},6465:(C,_,m)=>{m.d(_,{I:()=>i,a:()=>r,b:()=>n,c:()=>p,d:()=>w,f:()=>u,g:()=>o,i:()=>e,p:()=>v,r:()=>E,s:()=>l});var a=m(5861),f=m(3756),d=m(7208);const i="ion-content",n=".ion-content-scroll-host",t=`${i}, ${n}`,e=h=>h&&"ION-CONTENT"===h.tagName,o=function(){var h=(0,a.Z)(function*(g){return e(g)?(yield new Promise(s=>(0,f.c)(g,s)),g.getScrollElement()):g});return function(s){return h.apply(this,arguments)}}(),r=h=>h.querySelector(n)||h.querySelector(t),u=h=>h.closest(t),l=(h,g)=>e(h)?h.scrollToTop(g):Promise.resolve(h.scrollTo({top:0,left:0,behavior:g>0?"smooth":"auto"})),p=(h,g,s,y)=>e(h)?h.scrollByPoint(g,s,y):Promise.resolve(h.scrollBy({top:s,left:g,behavior:y>0?"smooth":"auto"})),v=h=>(0,d.a)(h,i),w=h=>{if(e(h)){const s=h.scrollY;return h.scrollY=!1,s}return h.style.setProperty("overflow","hidden"),!0},E=(h,g)=>{e(h)?h.scrollY=g:h.style.removeProperty("overflow")}},7208:(C,_,m)=>{m.d(_,{a:()=>d,b:()=>f,p:()=>a});const a=c=>console.warn(`[Ionic Warning]: ${c}`),f=(c,...i)=>console.error(`[Ionic Error]: ${c}`,...i),d=(c,...i)=>console.error(`<${c.tagName.toLowerCase()}> must be used inside ${i.join(" or ")}.`)},3230:(C,_,m)=>{m.d(_,{a:()=>a,b:()=>u,c:()=>n,d:()=>l,e:()=>s,f:()=>d,g:()=>f,h:()=>h,i:()=>t,j:()=>o,k:()=>p,l:()=>e,m:()=>i,n:()=>c,o:()=>r,p:()=>v,q:()=>w,r:()=>E,s:()=>g});const a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},8439:(C,_,m)=>{m.d(_,{s:()=>a});const a=e=>{try{if(e instanceof class t{constructor(o){this.value=o}})return e.value;if(!c()||"string"!=typeof e||""===e)return e;const o=document.createDocumentFragment(),r=document.createElement("div");o.appendChild(r),r.innerHTML=e,n.forEach(v=>{const w=o.querySelectorAll(v);for(let E=w.length-1;E>=0;E--){const h=w[E];h.parentNode?h.parentNode.removeChild(h):o.removeChild(h);const g=d(h);for(let s=0;s<g.length;s++)f(g[s])}});const u=d(o);for(let v=0;v<u.length;v++)f(u[v]);const l=document.createElement("div");l.appendChild(o);const p=l.querySelector("div");return null!==p?p.innerHTML:l.innerHTML}catch(o){return console.error(o),""}},f=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let r=e.attributes.length-1;r>=0;r--){const u=e.attributes.item(r),l=u.name;if(!i.includes(l.toLowerCase())){e.removeAttribute(l);continue}const p=u.value;null!=p&&p.toLowerCase().includes("javascript:")&&e.removeAttribute(l)}const o=d(e);for(let r=0;r<o.length;r++)f(o[r])},d=e=>null!=e.children?e.children:e.childNodes,c=()=>{var e;const r=null===(e=window?.Ionic)||void 0===e?void 0:e.config;return!r||(r.get?r.get("sanitizerEnabled",!0):!0===r.sanitizerEnabled||void 0===r.sanitizerEnabled)},i=["class","id","href","src","name","slot"],n=["script","style","iframe","meta","link","object","embed"]},1316:(C,_,m)=>{m.r(_),m.d(_,{KEYBOARD_DID_CLOSE:()=>f,KEYBOARD_DID_OPEN:()=>a,copyVisualViewport:()=>g,keyboardDidClose:()=>v,keyboardDidOpen:()=>l,keyboardDidResize:()=>p,resetKeyboardAssist:()=>t,setKeyboardClose:()=>u,setKeyboardOpen:()=>r,startKeyboardAssist:()=>e,trackViewportChanges:()=>h});const a="ionKeyboardDidShow",f="ionKeyboardDidHide";let c={},i={},n=!1;const t=()=>{c={},i={},n=!1},e=s=>{o(s),s.visualViewport&&(i=g(s.visualViewport),s.visualViewport.onresize=()=>{h(s),l()||p(s)?r(s):v(s)&&u(s)})},o=s=>{s.addEventListener("keyboardDidShow",y=>r(s,y)),s.addEventListener("keyboardDidHide",()=>u(s))},r=(s,y)=>{w(s,y),n=!0},u=s=>{E(s),n=!1},l=()=>!n&&c.width===i.width&&(c.height-i.height)*i.scale>150,p=s=>n&&!v(s),v=s=>n&&i.height===s.innerHeight,w=(s,y)=>{const D=new CustomEvent(a,{detail:{keyboardHeight:y?y.keyboardHeight:s.innerHeight-i.height}});s.dispatchEvent(D)},E=s=>{const y=new CustomEvent(f);s.dispatchEvent(y)},h=s=>{c=Object.assign({},i),i=g(s.visualViewport)},g=s=>({width:Math.round(s.width),height:Math.round(s.height),offsetTop:s.offsetTop,offsetLeft:s.offsetLeft,pageTop:s.pageTop,pageLeft:s.pageLeft,scale:s.scale})},7741:(C,_,m)=>{m.d(_,{S:()=>f});const f={bubbles:{dur:1e3,circles:9,fn:(d,c,i)=>{const n=d*c/i-d+"ms",t=2*Math.PI*c/i;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(d,c,i)=>{const n=c/i,t=d*n-d+"ms",e=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(d,c)=>({r:6,style:{left:9-9*c+"px","animation-delay":-110*c+"ms"}})},lines:{dur:1e3,lines:8,fn:(d,c,i)=>({y1:14,y2:26,style:{transform:`rotate(${360/i*c+(c<i/2?180:-180)}deg)`,"animation-delay":d*c/i-d+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(d,c,i)=>({y1:12,y2:20,style:{transform:`rotate(${360/i*c+(c<i/2?180:-180)}deg)`,"animation-delay":d*c/i-d+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(d,c,i)=>({y1:17,y2:29,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":d*c/i-d+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(d,c,i)=>({y1:12,y2:20,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":d*c/i-d+"ms"}})}}},6546:(C,_,m)=>{m.r(_),m.d(_,{createSwipeBackGesture:()=>i});var a=m(3756),f=m(5062),d=m(3139);m(3509);const i=(n,t,e,o,r)=>{const u=n.ownerDocument.defaultView,l=(0,f.i)(n),v=s=>l?-s.deltaX:s.deltaX;return(0,d.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:s=>(s=>{const{startX:M}=s;return l?M>=u.innerWidth-50:M<=50})(s)&&t(),onStart:e,onMove:s=>{const M=v(s)/u.innerWidth;o(M)},onEnd:s=>{const y=v(s),M=u.innerWidth,D=y/M,x=(s=>l?-s.velocityX:s.velocityX)(s),O=x>=0&&(x>.2||y>M/2),T=(O?1-D:D)*M;let L=0;if(T>5){const k=T/Math.abs(x);L=Math.min(k,540)}r(O,D<=0?.01:(0,a.l)(0,D,.9999),L)}})}},2854:(C,_,m)=>{m.d(_,{c:()=>d,g:()=>i,h:()=>f,o:()=>t});var a=m(5861);const f=(e,o)=>null!==o.closest(e),d=(e,o)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},o):o,i=e=>{const o={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(r=>null!=r).map(r=>r.trim()).filter(r=>""!==r):[])(e).forEach(r=>o[r]=!0),o},n=/^[a-z][a-z0-9+\-.]*:/,t=function(){var e=(0,a.Z)(function*(o,r,u,l){if(null!=o&&"#"!==o[0]&&!n.test(o)){const p=document.querySelector("ion-router");if(p)return r?.preventDefault(),p.push(o,u,l)}return!1});return function(r,u,l,p){return e.apply(this,arguments)}}()},1575:(C,_,m)=>{m.d(_,{G:()=>i});var a=m(6738),f=m(6895),d=m(7479);function c(n,t){1&n&&(a.TgZ(0,"ion-button",6),a._UZ(1,"ion-icon",7),a.TgZ(2,"p")(3,"small"),a._uU(4,"\xa0Fulanito P\xe9rez"),a.qZA()()())}let i=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-header"]],inputs:{isLogged:"isLogged"},decls:15,vars:1,consts:[["slot","start"],["id","secondary"],["slot","end"],["color","dark"],["name","globe","size","small"],["color","dark","id","user",4,"ngIf"],["color","dark","id","user"],["slot","end","name","person-circle"]],template:function(e,o){1&e&&(a.TgZ(0,"ion-toolbar")(1,"ion-label",0)(2,"h1")(3,"strong"),a._uU(4,"PARKINSON APP"),a.qZA()(),a.TgZ(5,"p",1)(6,"small"),a._uU(7,"Tecnm Instituto Tecnol\xf3gico de Orizaba"),a.qZA()()(),a.TgZ(8,"ion-buttons",2)(9,"ion-button",3),a._UZ(10,"ion-icon",4),a.TgZ(11,"p")(12,"small"),a._uU(13,"\xa0 ES"),a.qZA()()(),a.YNc(14,c,5,0,"ion-button",5),a.qZA()()),2&e&&(a.xp6(14),a.Q6J("ngIf",o.isLogged))},dependencies:[f.O5,d.YG,d.Sm,d.gu,d.Q$,d.sr],styles:["#secondary[_ngcontent-%COMP%]{border-top:1px black solid;width:-moz-fit-content;width:fit-content}#user[_ngcontent-%COMP%]{margin:8px;border:1px black solid;border-radius:8px}ion-toolbar[_ngcontent-%COMP%]{--background: var(--color-background-app);padding:24px 24px 0}"]}),n})()}}]);