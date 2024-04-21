/*! For license information please see 5020.077149a7.js.LICENSE.txt */
"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[5020,4455],{1929:(t,e,s)=>{var i;s.d(e,{A:()=>T,D:()=>U,a:()=>ot,c:()=>J,e:()=>j,i:()=>rt,l:()=>K,n:()=>et,o:()=>it,t:()=>V,x:()=>y});const n=window,o=n.trustedTypes,r=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,l="$lit$",a=`lit$${(Math.random()+"").slice(9)}$`,h="?"+a,c=`<${h}>`,d=document,u=()=>d.createComment(""),$=t=>null===t||"object"!=typeof t&&"function"!=typeof t,m=Array.isArray,v="[ \t\n\f\r]",_=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,p=/-->/g,A=/>/g,g=RegExp(`>|${v}(?:([^\\s"'>=/]+)(${v}*=${v}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),f=/'/g,H=/"/g,x=/^(?:script|style|textarea|title)$/i,y=(t,...e)=>({_$litType$:1,strings:t,values:e}),N=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),M=new WeakMap,C=d.createTreeWalker(d,129,null,!1);function E(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==r?r.createHTML(e):e}const b=(t,e)=>{const s=t.length-1,i=[];let n,o=2===e?"<svg>":"",r=_;for(let e=0;e<s;e++){const s=t[e];let h,d,u=-1,$=0;for(;$<s.length&&(r.lastIndex=$,d=r.exec(s),null!==d);)$=r.lastIndex,r===_?"!--"===d[1]?r=p:void 0!==d[1]?r=A:void 0!==d[2]?(x.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=g):void 0!==d[3]&&(r=g):r===g?">"===d[0]?(r=null!=n?n:_,u=-1):void 0===d[1]?u=-2:(u=r.lastIndex-d[2].length,h=d[1],r=void 0===d[3]?g:'"'===d[3]?H:f):r===H||r===f?r=g:r===p||r===A?r=_:(r=g,n=void 0);const m=r===g&&t[e+1].startsWith("/>")?" ":"";o+=r===_?s+c:u>=0?(i.push(h),s.slice(0,u)+l+s.slice(u)+a+m):s+a+(-2===u?(i.push(void 0),e):m)}return[E(t,o+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class L{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const c=t.length-1,d=this.parts,[$,m]=b(t,e);if(this.el=L.createElement($,s),C.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=C.nextNode())&&d.length<c;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith(l)||e.startsWith(a)){const s=m[r++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+l).split(a),e=/([.?@])?(.*)/.exec(s);d.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?I:"?"===e[1]?B:"@"===e[1]?G:W})}else d.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(x.test(i.tagName)){const t=i.textContent.split(a),e=t.length-1;if(e>0){i.textContent=o?o.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],u()),C.nextNode(),d.push({type:2,index:++n});i.append(t[e],u())}}}else if(8===i.nodeType)if(i.data===h)d.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(a,t+1));)d.push({type:7,index:n}),t+=a.length-1}n++}}static createElement(t,e){const s=d.createElement("template");return s.innerHTML=t,s}}function w(t,e,s=t,i){var n,o,r,l;if(e===N)return e;let a=void 0!==i?null===(n=s._$Co)||void 0===n?void 0:n[i]:s._$Cl;const h=$(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(o=null==a?void 0:a._$AO)||void 0===o||o.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,s,i)),void 0!==i?(null!==(r=(l=s)._$Co)&&void 0!==r?r:l._$Co=[])[i]=a:s._$Cl=a),void 0!==a&&(e=w(t,a._$AS(t,e.values),a,i)),e}class S{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:d).importNode(s,!0);C.currentNode=n;let o=C.nextNode(),r=0,l=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new k(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new O(o,this,t)),this._$AV.push(e),a=i[++l]}r!==(null==a?void 0:a.index)&&(o=C.nextNode(),r++)}return C.currentNode=d,n}v(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class k{constructor(t,e,s,i){var n;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),$(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==N&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>m(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&$(this._$AH)?this._$AA.nextSibling.data=t:this.$(d.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=L.createElement(E(i.h,i.h[0]),this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(s);else{const t=new S(n,this),e=t.u(this.options);t.v(s),this.$(e),this._$AH=t}}_$AC(t){let e=M.get(t.strings);return void 0===e&&M.set(t.strings,e=new L(t)),e}T(t){m(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new k(this.k(u()),this.k(u()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class W{constructor(t,e,s,i,n){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(void 0===n)t=w(this,t,e,0),o=!$(t)||t!==this._$AH&&t!==N,o&&(this._$AH=t);else{const i=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=w(this,i[s+r],e,r),l===N&&(l=this._$AH[r]),o||(o=!$(l)||l!==this._$AH[r]),l===T?t=T:t!==T&&(t+=(null!=l?l:"")+n[r+1]),this._$AH[r]=l}o&&!i&&this.j(t)}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class I extends W{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===T?void 0:t}}const P=o?o.emptyScript:"";class B extends W{constructor(){super(...arguments),this.type=4}j(t){t&&t!==T?this.element.setAttribute(this.name,P):this.element.removeAttribute(this.name)}}class G extends W{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=w(this,t,e,0))&&void 0!==s?s:T)===N)return;const i=this._$AH,n=t===T&&i!==T||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==T&&(i===T||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class O{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const R=n.litHtmlPolyfillSupport;null==R||R(L,k),(null!==(i=n.litHtmlVersions)&&void 0!==i?i:n.litHtmlVersions=[]).push("2.8.0");const U=(t,e,s)=>{var i,n;const o=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new k(e.insertBefore(u(),t),t,void 0,null!=s?s:{})}return r._$AI(t),r},D={},V={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},j=t=>(...e)=>({_$litDirective$:t,values:e});let q=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const z=(t,e)=>{var s,i;const n=t._$AN;if(void 0===n)return!1;for(const t of n)null===(i=(s=t)._$AO)||void 0===i||i.call(s,e,!1),z(t,e);return!0},Y=t=>{let e,s;do{if(void 0===(e=t._$AM))break;s=e._$AN,s.delete(t),t=e}while(0===(null==s?void 0:s.size))},Z=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),F(e)}};function Q(t){void 0!==this._$AN?(Y(this),this._$AM=t,Z(this)):this._$AM=t}function X(t,e=!1,s=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(i))for(let t=s;t<i.length;t++)z(i[t],!1),Y(i[t]);else null!=i&&(z(i,!1),Y(i));else z(this,t)}const F=t=>{var e,s,i,n;t.type==V.CHILD&&(null!==(e=(i=t)._$AP)&&void 0!==e||(i._$AP=X),null!==(s=(n=t)._$AQ)&&void 0!==s||(n._$AQ=Q))};class J extends q{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),Z(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,i;t!==this.isConnected&&(this.isConnected=t,t?null===(s=this.reconnected)||void 0===s||s.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),e&&(z(this,t),Y(this))}setValue(t){if((t=>void 0===this._$Ct.strings)())this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const K=t=>null!=t?t:T,tt=new WeakMap,et=j(class extends J{render(t){return T}update(t,[e]){var s;const i=e!==this.G;return i&&void 0!==this.G&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=e,this.dt=null===(s=t.options)||void 0===s?void 0:s.host,this.ot(this.lt=t.element)),T}ot(t){var e;if("function"==typeof this.G){const s=null!==(e=this.dt)&&void 0!==e?e:globalThis;let i=tt.get(s);void 0===i&&(i=new WeakMap,tt.set(s,i)),void 0!==i.get(this.G)&&this.G.call(this.dt,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.dt,t)}else this.G.value=t}get rt(){var t,e,s;return"function"==typeof this.G?null===(e=tt.get(null!==(t=this.dt)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.G):null===(s=this.G)||void 0===s?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});class st extends q{constructor(t){if(super(t),this.et=T,t.type!==V.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===T||null==t)return this.ft=void 0,this.et=t;if(t===N)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}st.directiveName="unsafeHTML",st.resultType=1;const it=j(st);class nt extends st{}nt.directiveName="unsafeSVG",nt.resultType=2;const ot=j(nt),rt=j(class extends q{constructor(){super(...arguments),this.key=T}render(t,e){return this.key=t,e}update(t,[e,s]){return e!==this.key&&(((t,e=D)=>{t._$AH=e})(t),this.key=e),s}})},288:(t,e,s)=>{s.d(e,{M:()=>h,a:()=>c,b:()=>d,c:()=>u,d:()=>$,e:()=>m,f:()=>v,g:()=>_,h:()=>p,i:()=>A,j:()=>f,k:()=>H,l:()=>x,m:()=>y,n:()=>N,o:()=>T,p:()=>M,q:()=>C,r:()=>E,s:()=>b,t:()=>L,u:()=>w,v:()=>S,w:()=>g});var i=s(8393),n=s(6722),o=s(8827),r=s(2016);class l extends n.M{}const a=(0,o.a)('<img loading="eager" decoding="async" aria-hidden="true">');class h extends((0,i.H)(HTMLElement,n.T)){constructor(){super(...arguments),this.Wm=this.nn()}static{this.tagName="media-thumbnail"}static{this.attrs={crossOrigin:"crossorigin"}}onSetup(){this.a=(0,r.u)(),this.$state.img.set(this.Wm)}onConnect(){const{src:t,crossOrigin:e}=this.$state;this.Wm.parentNode!==this&&this.prepend(this.Wm),(0,i.g)((()=>{(0,i.s)(this.Wm,"src",t()),(0,i.s)(this.Wm,"crossorigin",e())}))}nn(){return(0,o.c)(a)}}class c extends((0,i.H)(HTMLElement,n.au)){static{this.tagName="media-time"}onConnect(){(0,i.g)((()=>{this.textContent=this.$state.timeText()}))}}class d extends((0,i.H)(HTMLElement,n.R)){static{this.tagName="media-airplay-button"}}class u extends((0,i.H)(HTMLElement,n.X)){static{this.tagName="media-caption-button"}}class $ extends((0,i.H)(HTMLElement,n.Z)){static{this.tagName="media-fullscreen-button"}}class m extends((0,i.H)(HTMLElement,n.a1)){static{this.tagName="media-live-button"}}class v extends((0,i.H)(HTMLElement,n._)){static{this.tagName="media-mute-button"}}class _ extends((0,i.H)(HTMLElement,n.$)){static{this.tagName="media-pip-button"}}class p extends((0,i.H)(HTMLElement,n.W)){static{this.tagName="media-play-button"}}class A extends((0,i.H)(HTMLElement,n.a0)){static{this.tagName="media-seek-button"}}function g(t,e){(0,o.r)((()=>{if(!t.connectScope)return;const s=t.querySelector("template");s&&(0,i.g)((()=>{const n=t.getOptions();(0,o.f)(s,n.length,((t,s)=>{const{label:o,value:r}=n[s],l=t.querySelector('[data-part="label"]');t.setAttribute("value",r),l&&((0,i.i)(o)?l.textContent=o:(0,i.g)((()=>{l.textContent=o()}))),e?.(t,n[s],s)}))}))}))}class f extends((0,i.H)(HTMLElement,n.al)){static{this.tagName="media-audio-radio-group"}onConnect(){g(this)}}class H extends((0,i.H)(HTMLElement,n.ao)){static{this.tagName="media-captions-radio-group"}onConnect(){g(this)}}class x extends((0,i.H)(HTMLElement,n.ae)){static{this.tagName="media-menu"}}class y extends((0,i.H)(HTMLElement,n.M)){static{this.tagName="media-menu-button"}}class N extends((0,i.H)(HTMLElement,l)){static{this.tagName="media-menu-item"}}class T extends((0,i.H)(HTMLElement,n.ah)){static{this.tagName="media-menu-items"}}class M extends((0,i.H)(HTMLElement,n.aq)){static{this.tagName="media-speed-radio-group"}onConnect(){g(this)}}class C extends((0,i.H)(HTMLElement,n.ar)){static{this.tagName="media-quality-radio-group"}onConnect(){g(this,((t,e)=>{const s=e.bitrate,n=t.querySelector('[data-part="bitrate"]');s&&n&&(0,i.g)((()=>{n.textContent=s()||""}))}))}}class E extends h{static{this.tagName="media-slider-thumbnail"}onSetup(){super.onSetup(),this.ia=(0,i.L)(n.S.state)}onConnect(){super.onConnect(),(0,i.g)(this.Yh.bind(this))}Yh(){const{duration:t,clipStartTime:e}=this.a.$state;this.time=e()+this.ia.pointerRate()*t()}}class b extends((0,i.H)(HTMLElement,n.a5)){static{this.tagName="media-slider-value"}static{this.attrs={padMinutes:{converter:i.a1}}}onConnect(){(0,i.g)((()=>{this.textContent=this.getValueText()}))}}class L extends((0,i.H)(HTMLElement,n.ac)){static{this.tagName="media-time-slider"}}class w extends((0,i.H)(HTMLElement,n.a6)){static{this.tagName="media-slider-preview"}}class S extends((0,i.H)(HTMLElement,n.a8)){static{this.tagName="media-volume-slider"}}},4455:(t,e,s)=>{s.d(e,{MediaPosterElement:()=>o});var i=s(8393),n=s(6722);class o extends((0,i.H)(HTMLElement,n.P)){constructor(){super(...arguments),this.Wm=document.createElement("img")}static{this.tagName="media-poster"}static{this.attrs={crossOrigin:"crossorigin"}}onSetup(){this.$state.img.set(this.Wm)}onConnect(){const{src:t,alt:e,crossOrigin:s}=this.$state;this.Wm.parentNode!==this&&this.prepend(this.Wm),(0,i.g)((()=>{(0,i.s)(this.Wm,"alt",e()),(0,i.s)(this.Wm,"crossorigin",s()),(0,i.s)(this.Wm,"src",t()||"")})),(0,i.g)((()=>{const{loading:t,hidden:e}=this.$state;this.Wm.style.display=t()||e()?"none":""}))}}},4047:(t,e,s)=>{s.d(e,{L:()=>n});var i=s(1929);class n extends HTMLElement{constructor(){super(...arguments),this.rootPart=null}connectedCallback(){this.rootPart=(0,i.D)(this.render(),this,{renderBefore:this.firstChild}),this.rootPart.setConnected(!0)}disconnectedCallback(){this.rootPart?.setConnected(!1),this.rootPart=null,(0,i.D)(null,this)}}}}]);