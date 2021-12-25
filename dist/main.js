(()=>{var t={121:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var a=n(81),r=n.n(a),i=n(645),s=n.n(i)()(r());s.push([t.id,'/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role="list"],\nol[role="list"] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don\'t have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n',""]);const o=s},34:(t,e,n)=>{"use strict";n.d(e,{Z:()=>S});var a=n(81),r=n.n(a),i=n(645),s=n.n(i),o=n(667),c=n.n(o),l=new URL(n(582),n.b),d=new URL(n(437),n.b),p=new URL(n(864),n.b),u=new URL(n(19),n.b),h=new URL(n(848),n.b),f=new URL(n(497),n.b),g=new URL(n(652),n.b),m=s()(r()),b=c()(l),v=c()(d),x=c()(p),y=c()(u),w=c()(h),L=c()(f),k=c()(g);m.push([t.id,'@font-face {\n    font-family: "DeathStar";\n    src: url('+b+') format("woff"), url('+v+') format("woff2"),\n        url('+x+') format("otf");\n}\n@font-face {\n    font-family: "CasanovaScotia";\n    src: url('+y+') format("tff"), url('+w+') format("woff"),\n        url('+L+') format("woff2");\n}\n* {\n    box-sizing: border-box;\n}\n\n:root {\n    --theme1: black;\n    --theme2: #ffc40a;\n    --box-sz: 3rem;\n    --br-rad: 10px;\n\n    /*ship colors*/\n    --c1: #40b3a2;\n    --c2: #f86c98;\n    --c3: #5cdb94;\n    --c4: #cafafe;\n    --c5: #557a95;\n}\nbody {\n    background-color: var(--theme1);\n}\n.head-title {\n    background-color: black;\n    color: white;\n    font-size: 3.2rem;\n    text-align: center;\n    font-family: "DeathStar", Arial, Helvetica, sans-serif;\n    border-bottom: 5px var(--theme2) solid;\n    margin-bottom: 50px;\n}\n.intro-flex {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n}\n.intro-placement-grid-cont {\n    padding-right: 50px;\n    border-right: 2px var(--theme2) solid;\n}\n.intro-placement-grid-cont.right {\n    padding-left: 50px;\n    border-right: none;\n}\n.gamegrid {\n    width: calc(var(--box-sz) * 10);\n    height: calc(var(--box-sz) * 10);\n    background: rgb(255, 255, 255);\n    background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 196, 10, 1) 100%);\n\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));\n}\n.gamegrid-cell {\n    width: var(--box-sz);\n    height: var(--box-sz);\n    border: rgb(0, 0, 0) 0.5px solid;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-end;\n    font-family: "CasanovaScotia", Arial, Helvetica, sans-serif;\n    font-size: 0.75rem;\n}\n\n.intro-instructions-cont {\n    margin-left: 50px;\n    width: calc(var(--box-sz) * 6.5);\n    min-height: calc(var(--box-sz) * 10);\n    background: linear-gradient(225deg, rgba(255, 255, 255, 1) 0%, rgba(255, 196, 10, 1) 100%);\n    border-radius: var(--br-rad);\n}\n.instructions-text {\n    width: 100%;\n    text-align: center;\n    font-weight: bold;\n    font-family: "CasanovaScotia", Arial, Helvetica, sans-serif;\n    font-size: 2rem;\n}\n.instructions-subtext {\n    width: 100%;\n    text-align: center;\n    font-weight: bold;\n    font-family: "CasanovaScotia", Arial, Helvetica, sans-serif;\n    font-size: 1.2rem;\n    text-decoration: underline;\n}\n.gamegrid-cell.c1 {\n    background: var(--c1);\n}\n.gamegrid-cell.c2 {\n    background: var(--c2);\n}\n.gamegrid-cell.c3 {\n    background: var(--c3);\n}\n.gamegrid-cell.c4 {\n    background: var(--c4);\n}\n.gamegrid-cell.c5 {\n    background: var(--c5);\n}\n.DragDrop-main-cont {\n    display: flex;\n    width: 100%;\n    flex-wrap: wrap;\n}\n.dragDrop-ship {\n    width: min-content;\n    margin: 5px;\n    display: flex;\n}\n.dragDrop-ship.vertical {\n    flex-direction: column;\n}\n.gamegrid-text {\n    cursor: default;\n    margin-left: 4px;\n}\n.gamegrid-text.invis {\n    display: none;\n}\n.potential-drop {\n    background: #8dd4f9;\n}\n.void {\n    display: none;\n}\n.ownership-title-cont {\n    display: inline;\n    background: var(--theme2);\n    padding: 0px 4px;\n}\n.ownership-title {\n    display: inline;\n    font-family: "CasanovaScotia", Arial, Helvetica, sans-serif;\n}\n.miss {\n    background: #4285f4;\n    background: url('+k+');\n    background-size: var(--box-sz) var(--box-sz);\n}\n.hit {\n    background-color: #fc4444;\n}\n.winner-cont {\n    width: 50%;\n    margin: 10px auto;\n    color: black;\n    padding: 12px 20px;\n    background: var(--theme2);\n\n    font-family: "CasanovaScotia", Arial, Helvetica, sans-serif;\n    font-size: 2rem;\n    text-align: center;\n}\n',""]);const S=m},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",a=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),a&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),a&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,a,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(a)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(s[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);a&&s[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},667:t=>{"use strict";t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{"use strict";t.exports=function(t){return t[1]}},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,a=0;a<e.length;a++)if(e[a].identifier===t){n=a;break}return n}function a(t,a){for(var i={},s=[],o=0;o<t.length;o++){var c=t[o],l=a.base?c[0]+a.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=n(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var f=r(h,a);a.byIndex=o,e.splice(o,0,{identifier:p,updater:f,references:1})}s.push(p)}return s}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=a(t=t||[],r=r||{});return function(t){t=t||[];for(var s=0;s<i.length;s++){var o=n(i[s]);e[o].references--}for(var c=a(t,r),l=0;l<i.length;l++){var d=n(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var a=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(a,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},449:t=>{t.exports=(t,e,n)=>{const a=[],r=t=>Math.floor(Math.random()*t),i=t=>[r(t),r(t)],s=(t,a)=>{const r=e.querySelector(`[data-x='${t}'][data-y='${a}']`);return n.receiveAttack(t,a,r)};return{autoPlaceShips:e=>{for(ship of e){let e=!1;for(;!e;){let[n,a]=i(10),s=r(2);e=t.placeShip(n,a,ship.shipLength,s)}}},sendAttack:()=>{let t=!1;for(var e,n;!t;){if(a.length){var{x:e,y:n}=a.pop();t=s(e,n)}else{var[e,n]=i(10);t=s(e,n)}if(t>0){let[t,r]=[e,n];a.push({x:t+1,y:r}),a.push({x:t,y:r+1}),a.push({x:t-1,y:r}),a.push({x:t,y:r-1})}t=t>=0}}}}},529:(t,e,n)=>{const a=n(922);t.exports=()=>{const t=10,e=new Array(t);for(let n=0;n<t;n++)e[n]=new Array(t).fill(0);let n=1;const r=new Map;return{placeShip:(i,s,o,c)=>{let l=!1;if(c&&i>=0&&i<=t-o&&s>=0&&s<t){for(let t=0;t<o;t++)if(e[i+t][s])return!1;for(let t=0;t<o;t++)e[i+t][s]=n;l=!0}else if(i>=0&&i<t&&s>=0&&s<=t-o){for(let t=0;t<o;t++)if(e[i][s+t])return!1;for(let t=0;t<o;t++)e[i][s+t]=n;l=!0}return l&&(((t,e,n)=>{n.set(e,t)})(a(o),n,r),n++),l},receiveAttack:(n,a)=>{if(!((e,n)=>e>=0&&e<t&&n>=0&&n<t)(n,a))return-1;const i=e[n][a];if(i<0)return-1;if(0==i)return e[n][a]=-1,0;{const t=r.get(i);t.hit(),t.isSunk()&&r.delete(i),e[n][a]=-2}return 1},allShipsDown:()=>0===r.size}}},922:t=>{t.exports=t=>{if(t<1)throw new Error("invalid Length");let e=t;return{isSunk:()=>e<=0,hit:()=>e>0&&(e-=1,!0),length:t}}},19:(t,e,n)=>{"use strict";t.exports=n.p+"font/0b6ed6d3317759198520.ttf"},848:(t,e,n)=>{"use strict";t.exports=n.p+"font/bb4a144c6647064c92c3.woff"},497:(t,e,n)=>{"use strict";t.exports=n.p+"font/c675d257a1cfdf28380b.woff2"},864:(t,e,n)=>{"use strict";t.exports=n.p+"font/4fe76636d2bf8f577a2c.otf"},582:(t,e,n)=>{"use strict";t.exports=n.p+"font/d274537e0b7f3ec5e17b.woff"},437:(t,e,n)=>{"use strict";t.exports=n.p+"font/ec7328b5cf78321bd566.woff2"},652:(t,e,n)=>{"use strict";t.exports=n.p+"images/5c5ea792b1241344fdd6.png"}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={id:a,exports:{}};return t[a](i,i.exports,n),i.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var a=e.getElementsByTagName("script");a.length&&(t=a[a.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,(()=>{"use strict";var t=n(379),e=n.n(t),a=n(795),r=n.n(a),i=n(569),s=n.n(i),o=n(565),c=n.n(o),l=n(216),d=n.n(l),p=n(589),u=n.n(p),h=n(121),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=s().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),e()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;var g=n(34),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=s().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),e()(g.Z,m),g.Z&&g.Z.locals&&g.Z.locals;class b{constructor(t,e,n){this.domString=t,this.boardSize=10,this.gameBoard=e,this.canGetAttacked=!1,this.attackCallback=()=>{},this.shipsInfoMap=new Map,n.forEach((t=>this.shipsInfoMap.set(t.shipName,t)))}init(){const t=t=>{const e=t.target.querySelector(".gamegrid-text");e&&e.classList.remove("invis")},e=t=>{const e=t.target.querySelector(".gamegrid-text");e&&e.classList.add("invis")},n=document.querySelector(this.domString);for(let a=0;a<this.boardSize;a++)for(let r=0;r<this.boardSize;r++){let i=document.createElement("div");i.classList.add("gamegrid-cell"),i.dataset.x=a,i.dataset.y=r;let s=document.createElement("span");i.appendChild(s),s.innerText=`${String.fromCharCode(96+a+1)}${r+1}`,s.classList.add("gamegrid-text"),s.classList.add("invis"),i.addEventListener("mouseover",t),i.addEventListener("mouseout",e),n.appendChild(i)}}placeShip(t,e,n,a,r){const i=this.shipsInfoMap.get(n),s=this.gameBoard.placeShip(t,e,i.shipLength,a);let o;if(s)if(a)for(let a=0;a<i.shipLength;a++)o=10*(t+a)+e,r[o].classList.add(i.colorClass),r[o].dataset.ship=n;else for(let a=0;a<i.shipLength;a++)o=10*t+e+a,r[o].classList.add(i.colorClass),r[o].dataset.ship=n;return s}attachAttackListener(t){const e=document.querySelectorAll(t),n=t=>{let e=t.target;e.classList.contains("gamegrid-text")&&(e=t.target.parentNode);let[n,a]=[e.dataset.x,e.dataset.y];void 0!==n&&void 0!==a&&this.receiveAttack(n,a,e)};e.forEach((t=>{t.addEventListener("click",n)}))}receiveAttack(t,e,n){if(!this.canGetAttacked)return;const a=this.gameBoard.receiveAttack(t,e);if(a>0){if(n.classList.add("hit"),n.dataset.ship){let t=this.shipsInfoMap.get(n.dataset.ship);n.classList.remove(t.colorClass)}}else 0==a&&n.classList.add("miss");return a>=0&&this.attackCallback(),a}}var v=n(529),x=n.n(v),y=n(449),w=n.n(y);const L=[{shipName:"destroyer",shipLength:2,colorClass:"c1"},{shipName:"submarine",shipLength:3,colorClass:"c2"},{shipName:"cruiser",shipLength:3,colorClass:"c3"},{shipName:"battleship",shipLength:4,colorClass:"c4"},{shipName:"carrier",shipLength:5,colorClass:"c5"}],k=x()(),S=new b("#gamegrid",k,L);S.init();const A=document.querySelectorAll(".gamegrid-cell"),C=new class{constructor(t,e,n,a,r){this.initialDomString=t,this.shipsToPlace=e,this.boardNodes=n,this.draggableData={index:-1,node:void 0,x:-1,y:-1,isValid:!1},this.boardDomController=a,this.endStage=r,this.shipsPlaced=0}init(){const t=document.querySelector(this.initialDomString),e=t=>{const e=t.target.parentNode;void 0!==e&&(e.classList.contains("vertical")?e.classList.remove("vertical"):e.classList.add("vertical"))};let n;this.shipsToPlace.forEach((a=>{let r=document.createElement("div");r.classList.add("dragDrop-ship");for(let t=0;t<a.shipLength;t++)n=document.createElement("div"),n.classList.add("gamegrid-cell"),n.classList.add(a.colorClass),n.dataset.index=t,r.appendChild(n);r.dataset.type=a.shipName,r.addEventListener("dblclick",e,{capture:!0}),r.setAttribute("draggable","true"),this.addListeners(r),t.appendChild(r)})),this.addBoardListeners(this.boardNodes)}addListeners(t){t.addEventListener("dragstart",(t=>{t.target.classList.add("dragging"),this.draggableData.isValid=!1})),t.addEventListener("dragend",(t=>{t.target.classList.remove("dragging");const e=this.draggableData.node;if(void 0!==e&&this.draggableData.isValid){let[t,n]=[-1,-1];e.classList.contains("vertical")?(t=this.draggableData.x-this.draggableData.index,n=this.draggableData.y-0):(t=this.draggableData.x-0,n=this.draggableData.y-this.draggableData.index),this.boardDomController.placeShip(t,n,e.dataset.type,e.classList.contains("vertical"),this.boardNodes)&&(e.classList.add("void"),e.remove(),this.shipsPlaced++),this.shipsPlaced===this.shipsToPlace.length&&this.endStage()}})),t.addEventListener("mousedown",(t=>{this.draggableData.index=t.target.dataset.index,this.draggableData.node=t.target.parentNode}))}addBoardListeners(t){const e=t=>{t.target.classList.add("potential-drop"),this.draggableData.x=t.target.dataset.x,this.draggableData.y=t.target.dataset.y,this.draggableData.isValid=!0},n=t=>{t.target.classList.remove("potential-drop")};t.forEach((t=>{t.addEventListener("dragenter",e),t.addEventListener("dragleave",n)}))}}(".DragDrop-main-cont",L,A,S,(()=>{const t=document.querySelector(".intro-instructions-cont"),e=document.querySelector(".intro-placement-grid-cont.right");t.classList.add("void"),e.classList.remove("void"),function(){const t=x()(),e=new b("#gamegrid-enemy",t,L),n=document.querySelector("#gamegrid"),a=w()(t,n,S);a.autoPlaceShips(L),e.init(),e.attachAttackListener("#gamegrid-enemy"),function(t,e,n){t.canGetAttacked=!1,e.canGetAttacked=!0;const a=()=>{(t.gameBoard.allShipsDown()||e.gameBoard.allShipsDown())&&(function(t){const e=t?"You":"The Enemy",n=document.querySelector(".winner-cont");n.classList.remove("void"),n.querySelector("#winner-output").innerHTML=`${e} won!`}(e.gameBoard.allShipsDown()),t.canGetAttacked=!0,e.canGetAttacked=!0),t.canGetAttacked=!t.canGetAttacked,e.canGetAttacked=!e.canGetAttacked,t.canGetAttacked&&n.sendAttack()};t.attackCallback=a,e.attackCallback=a}(S,e,a)}()}));C.init()})()})();