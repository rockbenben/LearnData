/*! For license information please see 8815.cdaed0b3.js.LICENSE.txt */
"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[8815],{6214:(t,e,s)=>{s.d(e,{Kq:()=>u,OA:()=>i.OA,u$:()=>i.u$});var n=s(7727),i=s(4703);const o=(t,e)=>{var s,n;const i=t._$AN;if(void 0===i)return!1;for(const t of i)null===(n=(s=t)._$AO)||void 0===n||n.call(s,e,!1),o(t,e);return!0},a=t=>{let e,s;do{if(void 0===(e=t._$AM))break;s=e._$AN,s.delete(t),t=e}while(0===(null==s?void 0:s.size))},l=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),c(e)}};function r(t){void 0!==this._$AN?(a(this),this._$AM=t,l(this)):this._$AM=t}function d(t,e=!1,s=0){const n=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(e)if(Array.isArray(n))for(let t=s;t<n.length;t++)o(n[t],!1),a(n[t]);else null!=n&&(o(n,!1),a(n));else o(this,t)}const c=t=>{var e,s,n,o;t.type==i.OA.CHILD&&(null!==(e=(n=t)._$AP)&&void 0!==e||(n._$AP=d),null!==(s=(o=t)._$AQ)&&void 0!==s||(o._$AQ=r))};class u extends i.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),l(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,n;t!==this.isConnected&&(this.isConnected=t,t?null===(s=this.reconnected)||void 0===s||s.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),e&&(o(this,t),a(this))}setValue(t){if((0,n.Rt)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}},7727:(t,e,s)=>{s.d(e,{Rt:()=>o,mY:()=>l});var n=s(4245);const{I:i}=n.ge,o=t=>void 0===t.strings,a={},l=(t,e=a)=>t._$AH=e},4703:(t,e,s)=>{s.d(e,{OA:()=>n,WL:()=>o,u$:()=>i});const n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=t=>(...e)=>({_$litDirective$:t,values:e});class o{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},1822:(t,e,s)=>{s.d(e,{J:()=>i});var n=s(4245);const i=t=>null!=t?t:n.s6},2993:(t,e,s)=>{s.d(e,{D:()=>o,_:()=>a});var n=s(4245),i=s(4703);class o extends i.WL{constructor(t){if(super(t),this.et=n.s6,t.type!==i.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===n.s6||null==t)return this.ft=void 0,this.et=t;if(t===n.c0)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}o.directiveName="unsafeHTML",o.resultType=1;const a=(0,i.u$)(o)},580:(t,e,s)=>{s.d(e,{T:()=>a});var n=s(4703),i=s(2993);class o extends i.D{}o.directiveName="unsafeSVG",o.resultType=2;const a=(0,n.u$)(o)},4245:(t,e,s)=>{var n;s.d(e,{XX:()=>K,c0:()=>C,ge:()=>G,qy:()=>k,s6:()=>q});const i=window,o=i.trustedTypes,a=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,l="$lit$",r=`lit$${(Math.random()+"").slice(9)}$`,d="?"+r,c=`<${d}>`,u=document,p=()=>u.createComment(""),m=t=>null===t||"object"!=typeof t&&"function"!=typeof t,h=Array.isArray,v=t=>h(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),$="[ \t\n\f\r]",g=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,b=/-->/g,y=/>/g,f=RegExp(`>|${$}(?:([^\\s"'>=/]+)(${$}*=${$}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),x=/'/g,A=/"/g,_=/^(?:script|style|textarea|title)$/i,w=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),k=w(1),C=(w(2),Symbol.for("lit-noChange")),q=Symbol.for("lit-nothing"),S=new WeakMap,Z=u.createTreeWalker(u,129,null,!1);function M(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==a?a.createHTML(e):e}const T=(t,e)=>{const s=t.length-1,n=[];let i,o=2===e?"<svg>":"",a=g;for(let e=0;e<s;e++){const s=t[e];let d,u,p=-1,m=0;for(;m<s.length&&(a.lastIndex=m,u=a.exec(s),null!==u);)m=a.lastIndex,a===g?"!--"===u[1]?a=b:void 0!==u[1]?a=y:void 0!==u[2]?(_.test(u[2])&&(i=RegExp("</"+u[2],"g")),a=f):void 0!==u[3]&&(a=f):a===f?">"===u[0]?(a=null!=i?i:g,p=-1):void 0===u[1]?p=-2:(p=a.lastIndex-u[2].length,d=u[1],a=void 0===u[3]?f:'"'===u[3]?A:x):a===A||a===x?a=f:a===b||a===y?a=g:(a=f,i=void 0);const h=a===f&&t[e+1].startsWith("/>")?" ":"";o+=a===g?s+c:p>=0?(n.push(d),s.slice(0,p)+l+s.slice(p)+r+h):s+r+(-2===p?(n.push(void 0),e):h)}return[M(t,o+(t[s]||"<?>")+(2===e?"</svg>":"")),n]};class I{constructor({strings:t,_$litType$:e},s){let n;this.parts=[];let i=0,a=0;const c=t.length-1,u=this.parts,[m,h]=T(t,e);if(this.el=I.createElement(m,s),Z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=Z.nextNode())&&u.length<c;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith(l)||e.startsWith(r)){const s=h[a++];if(t.push(e),void 0!==s){const t=n.getAttribute(s.toLowerCase()+l).split(r),e=/([.?@])?(.*)/.exec(s);u.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?N:"?"===e[1]?V:"@"===e[1]?H:P})}else u.push({type:6,index:i})}for(const e of t)n.removeAttribute(e)}if(_.test(n.tagName)){const t=n.textContent.split(r),e=t.length-1;if(e>0){n.textContent=o?o.emptyScript:"";for(let s=0;s<e;s++)n.append(t[s],p()),Z.nextNode(),u.push({type:2,index:++i});n.append(t[e],p())}}}else if(8===n.nodeType)if(n.data===d)u.push({type:2,index:i});else{let t=-1;for(;-1!==(t=n.data.indexOf(r,t+1));)u.push({type:7,index:i}),t+=r.length-1}i++}}static createElement(t,e){const s=u.createElement("template");return s.innerHTML=t,s}}function W(t,e,s=t,n){var i,o,a,l;if(e===C)return e;let r=void 0!==n?null===(i=s._$Co)||void 0===i?void 0:i[n]:s._$Cl;const d=m(e)?void 0:e._$litDirective$;return(null==r?void 0:r.constructor)!==d&&(null===(o=null==r?void 0:r._$AO)||void 0===o||o.call(r,!1),void 0===d?r=void 0:(r=new d(t),r._$AT(t,s,n)),void 0!==n?(null!==(a=(l=s)._$Co)&&void 0!==a?a:l._$Co=[])[n]=r:s._$Cl=r),void 0!==r&&(e=W(t,r._$AS(t,e.values),r,n)),e}class O{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:n}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:u).importNode(s,!0);Z.currentNode=i;let o=Z.nextNode(),a=0,l=0,r=n[0];for(;void 0!==r;){if(a===r.index){let e;2===r.type?e=new E(o,o.nextSibling,this,t):1===r.type?e=new r.ctor(o,r.name,r.strings,this,t):6===r.type&&(e=new L(o,this,t)),this._$AV.push(e),r=n[++l]}a!==(null==r?void 0:r.index)&&(o=Z.nextNode(),a++)}return Z.currentNode=u,i}v(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class E{constructor(t,e,s,n){var i;this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=n,this._$Cp=null===(i=null==n?void 0:n.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),m(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==C&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==q&&m(this._$AH)?this._$AA.nextSibling.data=t:this.$(u.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:n}=t,i="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=I.createElement(M(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.v(s);else{const t=new O(i,this),e=t.u(this.options);t.v(s),this.$(e),this._$AH=t}}_$AC(t){let e=S.get(t.strings);return void 0===e&&S.set(t.strings,e=new I(t)),e}T(t){h(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,n=0;for(const i of t)n===e.length?e.push(s=new E(this.k(p()),this.k(p()),this,this.options)):s=e[n],s._$AI(i),n++;n<e.length&&(this._$AR(s&&s._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class P{constructor(t,e,s,n,i){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,n){const i=this.strings;let o=!1;if(void 0===i)t=W(this,t,e,0),o=!m(t)||t!==this._$AH&&t!==C,o&&(this._$AH=t);else{const n=t;let a,l;for(t=i[0],a=0;a<i.length-1;a++)l=W(this,n[s+a],e,a),l===C&&(l=this._$AH[a]),o||(o=!m(l)||l!==this._$AH[a]),l===q?t=q:t!==q&&(t+=(null!=l?l:"")+i[a+1]),this._$AH[a]=l}o&&!n&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class N extends P{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}const B=o?o.emptyScript:"";class V extends P{constructor(){super(...arguments),this.type=4}j(t){t&&t!==q?this.element.setAttribute(this.name,B):this.element.removeAttribute(this.name)}}class H extends P{constructor(t,e,s,n,i){super(t,e,s,n,i),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=W(this,t,e,0))&&void 0!==s?s:q)===C)return;const n=this._$AH,i=t===q&&n!==q||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==q&&(n===q||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const G={O:l,P:r,A:d,C:1,M:T,L:O,R:v,D:W,I:E,V:P,H:V,N:H,U:N,F:L},R=i.litHtmlPolyfillSupport;null==R||R(I,E),(null!==(n=i.litHtmlVersions)&&void 0!==n?n:i.litHtmlVersions=[]).push("2.8.0");const K=(t,e,s)=>{var n,i;const o=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:e;let a=o._$litPart$;if(void 0===a){const t=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:null;o._$litPart$=a=new E(e.insertBefore(p(),t),t,void 0,null!=s?s:{})}return a._$AI(t),a}},1402:(t,e,s)=>{s.d(e,{In:()=>v,UT:()=>g,kj:()=>h,xZ:()=>c});var n=s(7933),i=s(4245),o=s(1822),a=s(580),l=s(6214),r=s(4259);class d extends l.Kq{#t=null;#e=!1;#s=null;constructor(t){super(t),this.#e=t.type===l.OA.ATTRIBUTE||t.type===l.OA.BOOLEAN_ATTRIBUTE}render(t){return t!==this.#t&&(this.disconnected(),this.#t=t,this.isConnected&&this.#n()),this.#t?this.#i((0,n.se)(this.#t)):i.s6}reconnected(){this.#n()}disconnected(){this.#s?.(),this.#s=null}#n(){this.#t&&(this.#s=(0,n.QZ)(this.#o.bind(this)))}#i(t){return this.#e?(0,o.J)(t):t}#a(t){this.setValue(this.#i(t))}#o(){this.#a(this.#t?.())}}function c(t){return(0,l.u$)(d)((0,n.EW)(t))}class u{#l;#r;elements=new Set;constructor(t,e){this.#l=t,this.#r=e}connect(){this.#d();const t=new MutationObserver(this.#c);for(const e of this.#l)t.observe(e,{childList:!0,subtree:!0});(0,n.zp)((()=>t.disconnect())),(0,n.zp)(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(t,e){(0,n.vA)(t)?(e.textContent="",e.append(t)):((0,i.XX)(null,e),(0,i.XX)(t,e)),e.style.display||(e.style.display="contents");const s=e.firstElementChild;if(!s)return;const o=e.getAttribute("data-class");o&&s.classList.add(...o.split(" "))}#c=(0,n.s_)(this.#d.bind(this));#d(t){if(t&&!t.some((t=>t.addedNodes.length)))return;let e=!1,s=this.#l.flatMap((t=>[...t.querySelectorAll("slot")]));for(const t of s)t.hasAttribute("name")&&!this.elements.has(t)&&(this.elements.add(t),e=!0);e&&this.#r(this.elements)}}let p=0,m="data-slot-id";class h{#l;slots;constructor(t){this.#l=t,this.slots=new u(t,this.#d.bind(this))}connect(){this.slots.connect(),this.#d();const t=new MutationObserver(this.#c);for(const e of this.#l)t.observe(e,{childList:!0});(0,n.zp)((()=>t.disconnect()))}#c=(0,n.s_)(this.#d.bind(this));#d(){for(const t of this.#l)for(const e of t.children){if(1!==e.nodeType)continue;const t=e.getAttribute("slot");if(!t)continue;e.style.display="none";let s=e.getAttribute(m);s||e.setAttribute(m,s=++p+"");for(const n of this.slots.elements){if(n.getAttribute("name")!==t||n.getAttribute(m)===s)continue;const i=document.importNode(e,!0);t.includes("-icon")&&i.classList.add("vds-icon"),i.style.display="",i.removeAttribute("slot"),this.slots.assign(i,n),n.setAttribute(m,s)}}}}function v({name:t,class:e,state:s,paths:l,viewBox:r="0 0 32 32"}){return i.qy`<svg
    class="${"vds-icon"+(e?` ${e}`:"")}"
    viewBox="${r}"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${(0,o.J)(t??s)}
  >
    ${(0,n.Kg)(l)?(0,a.T)(l):c(l)}
  </svg>`}class ${#u={};#p=!1;slots;constructor(t){this.slots=new u(t,this.#m.bind(this))}connect(){this.slots.connect()}load(){this.loadIcons().then((t=>{this.#u=t,this.#p=!0,this.#m()}))}*#h(){for(const t of Object.keys(this.#u)){const e=`${t}-icon`;for(const s of this.slots.elements)s.name===e&&(yield{icon:this.#u[t],slot:s})}}#m(){if(this.#p)for(const{icon:t,slot:e}of this.#h())this.slots.assign(t,e)}}class g extends ${connect(){super.connect();const{player:t}=(0,r.$c)();if(!t.el)return;let e,s=new IntersectionObserver((t=>{t[0]?.isIntersecting&&(e?.(),e=void 0,this.load())}));s.observe(t.el),e=(0,n.zp)((()=>s.disconnect()))}}},8154:(t,e,s)=>{function n(t,e){return[...t].sort(e?o:i)}function i(t,e){return t.height===e.height?(t.bitrate??0)-(e.bitrate??0):t.height-e.height}function o(t,e){return e.height===t.height?(e.bitrate??0)-(t.bitrate??0):e.height-t.height}function a(t){return()=>t()?"true":"false"}s.d(e,{F:()=>n,M:()=>a})},5466:(t,e,s)=>{s.d(e,{W:()=>i});var n=s(4245);class i extends HTMLElement{rootPart=null;connectedCallback(){this.rootPart=(0,n.XX)(this.render(),this,{renderBefore:this.firstChild}),this.rootPart.setConnected(!0)}disconnectedCallback(){this.rootPart?.setConnected(!1),this.rootPart=null,(0,n.XX)(null,this)}}},8815:(t,e,s)=>{var n=s(7933),i=s(4259),o=s(6779),a=s(4245),l=s(1402),r=s(4747),d=s(8154),c=s(1822),u=s(6214),p=s(4703);const m=new WeakMap,h=(0,p.u$)(class extends u.Kq{render(t){return a.s6}update(t,[e]){var s;const n=e!==this.G;return n&&void 0!==this.G&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=e,this.dt=null===(s=t.options)||void 0===s?void 0:s.host,this.ot(this.lt=t.element)),a.s6}ot(t){var e;if("function"==typeof this.G){const s=null!==(e=this.dt)&&void 0!==e?e:globalThis;let n=m.get(s);void 0===n&&(n=new WeakMap,m.set(s,n)),void 0!==n.get(this.G)&&this.G.call(this.dt,void 0),n.set(this.G,t),void 0!==t&&this.G.call(this.dt,t)}else this.G.value=t}get rt(){var t,e,s;return"function"==typeof this.G?null===(e=m.get(null!==(t=this.dt)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.G):null===(s=this.G)||void 0===s?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var v=s(4630);const $=(0,n.q6)();function g(){return(0,n.NT)($)}const b={colorScheme:"system",download:null,customIcons:!1,disableTimeSlider:!1,menuContainer:null,menuGroup:"bottom",noAudioGain:!1,noGestures:!1,noKeyboardAnimations:!1,noModal:!1,noScrubGesture:!1,playbackRates:{min:0,max:2,step:.25},audioGains:{min:0,max:300,step:25},seekStep:10,sliderChaptersMinWidth:325,hideQualityBitrate:!1,smallWhen:!1,thumbnails:null,translations:null,when:!1};class y extends n.uA{static props=b;#v;#$=(0,n.EW)((()=>{const t=this.$props.when();return this.#g(t)}));#b=(0,n.EW)((()=>{const t=this.$props.smallWhen();return this.#g(t)}));get isMatch(){return this.#$()}get isSmallLayout(){return this.#b()}onSetup(){this.#v=(0,i.$c)(),this.setAttributes({"data-match":this.#$,"data-sm":()=>this.#b()?"":null,"data-lg":()=>this.#b()?null:"","data-size":()=>this.#b()?"sm":"lg","data-no-scrub-gesture":this.$props.noScrubGesture}),(0,n.Pp)($,{...this.$props,when:this.#$,smallWhen:this.#b,userPrefersAnnouncements:(0,n.O)(!0),userPrefersKeyboardAnimations:(0,n.O)(!0),menuPortal:(0,n.O)(null)})}onAttach(t){(0,o.GU)(t,this.$props.colorScheme)}#g(t){return"never"!==t&&((0,n.Lm)(t)?t:(0,n.EW)((()=>t(this.#v.player.state)))())}}const f=y.prototype;function x(t,e){(0,n.QZ)((()=>{const{player:s}=(0,i.$c)(),o=s.el;return o&&(0,n.Bq)(o,"data-layout",e()&&t),()=>o?.removeAttribute("data-layout")}))}function A(t,e){return t()?.[e]??e}function _(){return(0,l.xZ)((()=>{const{translations:t,userPrefersAnnouncements:e}=g();return e()?a.qy`<media-announcer .translations=${(0,l.xZ)(t)}></media-announcer>`:null}))}function w(t,e=""){return a.qy`<slot
    name=${`${t}-icon`}
    data-class=${`vds-icon vds-${t}-icon${e?` ${e}`:""}`}
  ></slot>`}function k(t){return t.map((t=>w(t)))}function C(t,e){return(0,l.xZ)((()=>A(t,e)))}function q({tooltip:t}){const{translations:e}=g(),{remotePlaybackState:s}=(0,i.nV)(),o=(0,l.xZ)((()=>`${A(e,"AirPlay")} ${(0,n.Fb)(s())}`)),r=C(e,"AirPlay");return a.qy`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${o}>
          ${w("airplay")}
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-airplay-tooltip-text">${r}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function S({tooltip:t}){const{translations:e}=g(),{remotePlaybackState:s}=(0,i.nV)(),o=(0,l.xZ)((()=>`${A(e,"Google Cast")} ${(0,n.Fb)(s())}`)),r=C(e,"Google Cast");return a.qy`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${o}>
          ${w("google-cast")}
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-google-cast-tooltip-text">${r}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Z({tooltip:t}){const{translations:e}=g(),s=C(e,"Play"),n=C(e,"Pause");return a.qy`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button
          class="vds-play-button vds-button"
          aria-label=${C(e,"Play")}
        >
          ${k(["play","pause","replay"])}
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-play-tooltip-text">${s}</span>
        <span class="vds-pause-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function M({tooltip:t,ref:e=n.lQ}){const{translations:s}=g(),i=C(s,"Mute"),o=C(s,"Unmute");return a.qy`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${C(s,"Mute")}
          ${h(e)}
        >
          ${k(["mute","volume-low","volume-high"])}
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-mute-tooltip-text">${o}</span>
        <span class="vds-unmute-tooltip-text">${i}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function T({tooltip:t}){const{translations:e}=g(),s=C(e,"Closed-Captions On"),n=C(e,"Closed-Captions Off");return a.qy`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button
          class="vds-caption-button vds-button"
          aria-label=${C(e,"Captions")}
        >
          ${k(["cc-on","cc-off"])}
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-cc-on-tooltip-text">${n}</span>
        <span class="vds-cc-off-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function I(){const{translations:t}=g(),e=C(t,"Enter PiP"),s=C(t,"Exit PiP");return a.qy`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button
          class="vds-pip-button vds-button"
          aria-label=${C(t,"PiP")}
        >
          ${k(["pip-enter","pip-exit"])}
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${e}</span>
        <span class="vds-pip-exit-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function W({tooltip:t}){const{translations:e}=g(),s=C(e,"Enter Fullscreen"),n=C(e,"Exit Fullscreen");return a.qy`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button
          class="vds-fullscreen-button vds-button"
          aria-label=${C(e,"Fullscreen")}
        >
          ${k(["fs-enter","fs-exit"])}
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-fs-enter-tooltip-text">${s}</span>
        <span class="vds-fs-exit-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function O({backward:t,tooltip:e}){const{translations:s,seekStep:n}=g(),i=t?"Seek Backward":"Seek Forward",o=C(s,i);return a.qy`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${(0,l.xZ)((()=>(t?-1:1)*n()))}
          aria-label=${o}
        >
          ${w(t?"seek-backward":"seek-forward")}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        ${C(s,i)}
      </media-tooltip-content>
    </media-tooltip>
  `}function E(){const{translations:t}=g(),{live:e}=(0,i.nV)(),s=C(t,"Skip To Live"),n=C(t,"LIVE");return e()?a.qy`
        <media-live-button class="vds-live-button" aria-label=${s}>
          <span class="vds-live-button-text">${n}</span>
        </media-live-button>
      `:null}function P(){return(0,l.xZ)((()=>{const{download:t,translations:e}=g(),s=t();if((0,n.gD)(s))return null;const{source:o,title:l}=(0,i.nV)(),r=o(),d=(0,v.d_)({title:l(),src:r,download:s});return(0,n.Kg)(d?.url)?a.qy`
          <media-tooltip class="vds-download-tooltip vds-tooltip">
            <media-tooltip-trigger>
              <a
                role="button"
                class="vds-download-button vds-button"
                aria-label=${C(e,"Download")}
                href=${(0,v.xF)(d.url,{download:d.name})}
                download=${d.name}
                target="_blank"
              >
                <slot name="download-icon" data-class="vds-icon" />
              </a>
            </media-tooltip-trigger>
            <media-tooltip-content class="vds-tooltip-content" placement="top">
              ${C(e,"Download")}
            </media-tooltip-content>
          </media-tooltip>
        `:null}))}function N(){const{translations:t}=g();return a.qy`
    <media-captions
      class="vds-captions"
      .exampleText=${C(t,"Captions look like this")}
    ></media-captions>
  `}function B(){return a.qy`<div class="vds-controls-spacer"></div>`}function V(t,e){return a.qy`
    <media-menu-portal .container=${(0,l.xZ)(t)} disabled="fullscreen">
      ${e}
    </media-menu-portal>
  `}function H(t,e,s,a){let l=(0,n.Kg)(e)?document.querySelector(e):e;l||(l=t?.closest("dialog")),l||(l=document.body);const r=document.createElement("div");r.style.display="contents",r.classList.add(s),l.append(r),(0,n.QZ)((()=>{if(!r)return;const{viewType:t}=(0,i.nV)(),e=a();(0,n.Bq)(r,"data-view-type",t()),(0,n.Bq)(r,"data-sm",e),(0,n.Bq)(r,"data-lg",!e),(0,n.Bq)(r,"data-size",e?"sm":"lg")}));const{colorScheme:d}=g();return(0,o.GU)(r,d),r}function L({placement:t,tooltip:e,portal:s}){const{textTracks:o}=(0,i.$c)(),{viewType:d,seekableStart:c,seekableEnd:u}=(0,i.nV)(),{translations:p,thumbnails:m,menuPortal:h,noModal:v,menuGroup:$,smallWhen:b}=g();if((0,n.EW)((()=>{const t=c(),e=u(),s=(0,n.O)(null);(0,r.q)(o,"chapters",s.set);const i=s()?.cues.filter((s=>s.startTime<=e&&s.endTime>=t));return!i?.length}))())return null;const y=(0,n.EW)((()=>v()?(0,n.oA)(t):b()?null:(0,n.oA)(t))),f=(0,n.EW)((()=>b()||"bottom"!==$()||"video"!==d()?0:26)),x=(0,n.O)(!1),A=a.qy`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${(0,l.xZ)(y)}
      offset=${(0,l.xZ)(f)}
    >
      ${(0,l.xZ)((()=>x()?a.qy`
          <media-chapters-radio-group
            class="vds-chapters-radio-group vds-radio-group"
            .thumbnails=${(0,l.xZ)(m)}
          >
            <template>
              <media-radio class="vds-chapter-radio vds-radio">
                <media-thumbnail class="vds-thumbnail"></media-thumbnail>
                <div class="vds-chapter-radio-content">
                  <span class="vds-chapter-radio-label" data-part="label"></span>
                  <span class="vds-chapter-radio-start-time" data-part="start-time"></span>
                  <span class="vds-chapter-radio-duration" data-part="duration"></span>
                </div>
              </media-radio>
            </template>
          </media-chapters-radio-group>
        `:null))}
    </media-menu-items>
  `;return a.qy`
    <media-menu class="vds-chapters-menu vds-menu" @open=${function(){x.set(!0)}} @close=${function(){x.set(!1)}}>
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${C(p,"Chapters")}
          >
            ${w("menu-chapters")}
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${(0,n.Tn)(e)?(0,l.xZ)(e):e}
        >
          ${C(p,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${s?V(h,A):A}
    </media-menu>
  `}function G(t){const{style:e}=new Option;return e.color=t,e.color.match(/\((.*?)\)/)[1].replace(/,/g," ")}(0,n._w)(f,"isMatch"),(0,n._w)(f,"isSmallLayout");const R={type:"color"},K={type:"radio",values:{"Monospaced Serif":"mono-serif","Proportional Serif":"pro-serif","Monospaced Sans-Serif":"mono-sans","Proportional Sans-Serif":"pro-sans",Casual:"casual",Cursive:"cursive","Small Capitals":"capitals"}},U={type:"radio",values:["None","Drop Shadow","Raised","Depressed","Outline"]},D={fontFamily:"pro-sans",fontSize:"100%",textColor:"#ffffff",textOpacity:"100%",textShadow:"none",textBg:"#000000",textBgOpacity:"100%",displayBg:"#000000",displayBgOpacity:"0%"},Q=Object.keys(D).reduce(((t,e)=>({...t,[e]:(0,n.O)(D[e])})),{});for(const t of Object.keys(Q)){const e=localStorage.getItem(`vds-player:${(0,n.BW)(t)}`);(0,n.Kg)(e)&&Q[t].set(e)}function F(){for(const t of Object.keys(Q)){const e=D[t];Q[t].set(e)}}let z=!1,j=new Set;function X(t,e,s){switch(e){case"fontFamily":const e="capitals"===s?"small-caps":"";return t.el?.style.setProperty("--media-user-font-variant",e),function(t){switch(t){case"mono-serif":return'"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';case"mono-sans":return'"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';case"pro-sans":return'Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';case"casual":return'"Comic Sans MS", Impact, Handlee, fantasy';case"cursive":return'"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';case"capitals":return'"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps';default:return'"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'}}(s);case"fontSize":case"textOpacity":case"textBgOpacity":case"displayBgOpacity":return function(t){return(parseInt(t)/100).toString()}(s);case"textColor":return`rgb(${G(s)} / var(--media-user-text-opacity, 1))`;case"textShadow":return function(t){switch(t){case"drop shadow":return"rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px";case"raised":return"rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px";case"depressed":return"rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px";case"outline":return"rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px";default:return""}}(s);case"textBg":return`rgb(${G(s)} / var(--media-user-text-bg-opacity, 1))`;case"displayBg":return`rgb(${G(s)} / var(--media-user-display-bg-opacity, 1))`}}let Y=0;function J({label:t="",value:e="",children:s}){if(!t)return a.qy`
      <div class="vds-menu-section">
        <div class="vds-menu-section-body">${s}</div>
      </div>
    `;const n="vds-menu-section-"+ ++Y;return a.qy`
    <section class="vds-menu-section" role="group" aria-labelledby=${n}>
      <div class="vds-menu-section-title">
        <header id=${n}>${t}</header>
        ${e?a.qy`<div class="vds-menu-section-value">${e}</div>`:null}
      </div>
      <div class="vds-menu-section-body">${s}</div>
    </section>
  `}function tt({label:t,children:e}){return a.qy`
    <div class="vds-menu-item">
      <div class="vds-menu-item-label">${t}</div>
      ${e}
    </div>
  `}function et({label:t,icon:e,hint:s}){return a.qy`
    <media-menu-button class="vds-menu-item">
      ${w("menu-arrow-left","vds-menu-close-icon")}
      ${e?w(e,"vds-menu-item-icon"):null}
      <span class="vds-menu-item-label">${(0,l.xZ)(t)}</span>
      <span class="vds-menu-item-hint" data-part="hint">${s?(0,l.xZ)(s):null} </span>
      ${w("menu-arrow-right","vds-menu-open-icon")}
    </media-menu-button>
  `}function st(){return a.qy`
    <div class="vds-slider-track"></div>
    <div class="vds-slider-track-fill vds-slider-track"></div>
    <div class="vds-slider-thumb"></div>
  `}function nt(){return a.qy`
    <media-slider-steps class="vds-slider-steps">
      <template>
        <div class="vds-slider-step"></div>
      </template>
    </media-slider-steps>
  `}function it({label:t=null,value:e=null,upIcon:s="",downIcon:n="",children:i,isMin:o,isMax:r}){const d=t||e,c=[n?w(n,"down"):null,i,s?w(s,"up"):null];return a.qy`
    <div
      class=${"vds-menu-item vds-menu-slider-item"+(d?" group":"")}
      data-min=${(0,l.xZ)((()=>o()?"":null))}
      data-max=${(0,l.xZ)((()=>r()?"":null))}
    >
      ${d?a.qy`
            <div class="vds-menu-slider-title">
              ${[t?a.qy`<div>${t}</div>`:null,e?a.qy`<div>${e}</div>`:null]}
            </div>
            <div class="vds-menu-slider-body">${c}</div>
          `:c}
    </div>
  `}const ot={type:"slider",min:0,max:400,step:25,upIcon:null,downIcon:null,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"},at={type:"slider",min:0,max:100,step:5,upIcon:null,downIcon:null,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"};function lt(){const{translations:t}=g();return a.qy`
    <button class="vds-menu-item" role="menuitem" @click=${F}>
      <span class="vds-menu-item-label">${(0,l.xZ)((()=>A(t,"Reset")))}</span>
    </button>
  `}function rt({label:t,option:e,type:s}){const{player:o}=(0,i.$c)(),{translations:r}=g(),d=Q[s],c=()=>A(r,t);function u(){(0,n.io)(),o.dispatchEvent(new Event("vds-font-change"))}if("color"===e.type){let t=function(t){d.set(t.target.value),u()};return tt({label:(0,l.xZ)(c),children:a.qy`
        <input
          class="vds-color-picker"
          type="color"
          .value=${(0,l.xZ)(d)}
          @input=${t}
        />
      `})}if("slider"===e.type){let t=function(t){d.set(t.detail+"%"),u()};const{min:s,max:n,step:i,upIcon:o,downIcon:r}=e;return it({label:(0,l.xZ)(c),value:(0,l.xZ)(d),upIcon:o,downIcon:r,isMin:()=>d()===s+"%",isMax:()=>d()===n+"%",children:a.qy`
        <media-slider
          class="vds-slider"
          min=${s}
          max=${n}
          step=${i}
          key-step=${i}
          .value=${(0,l.xZ)((()=>parseInt(d())))}
          aria-label=${(0,l.xZ)(c)}
          @value-change=${t}
          @drag-value-change=${t}
        >
          ${st()}${nt()}
        </media-slider>
      `})}const p=(m=e.values,(0,n.cy)(m)?m.map((t=>({label:t,value:t.toLowerCase()}))):Object.keys(m).map((t=>({label:t,value:m[t]}))));var m;return a.qy`
    <media-menu class=${`vds-${(0,n.BW)(s)}-menu vds-menu`}>
      ${et({label:c,hint:()=>{const t=d(),e=p.find((e=>e.value===t))?.label||"";return A(r,(0,n.Kg)(e)?e:e())}})}
      <media-menu-items class="vds-menu-items">
        ${function({value:t=null,options:e,hideLabel:s=!1,children:i=null,onChange:o=null}){function r(t){const{value:e,label:o}=t;return a.qy`
      <media-radio class="vds-radio" value=${e}>
        ${w("menu-radio-check")}
        ${s?null:a.qy`
              <span class="vds-radio-label" data-part="label">
                ${(0,n.Kg)(o)?o:(0,l.xZ)(o)}
              </span>
            `}
        ${(0,n.Tn)(i)?i(t):i}
      </media-radio>
    `}return a.qy`
    <media-radio-group
      class="vds-radio-group"
      value=${(0,n.Kg)(t)?t:t?(0,l.xZ)(t):""}
      @change=${o}
    >
      ${(0,n.cy)(e)?e.map(r):(0,l.xZ)((()=>e().map(r)))}
    </media-radio-group>
  `}({value:d,options:p,onChange({detail:t}){d.set(t),u()}})}
      </media-menu-items>
    </media-menu>
  `}function dt({label:t,checked:e,defaultChecked:s=!1,storageKey:i,onChange:o}){const{translations:r}=g(),c=i?localStorage.getItem(i):null,u=(0,n.O)(!!(c??s)),p=(0,n.O)(!1),m=(0,l.xZ)((0,d.M)(u)),h=C(r,t);function v(t){1!==t?.button&&(u.set((t=>!t)),i&&localStorage.setItem(i,u()?"1":""),o(u(),t),p.set(!1))}return i&&o((0,n.se)(u)),e&&(0,n.QZ)((()=>{u.set(e())})),a.qy`
    <div
      class="vds-menu-checkbox"
      role="menuitemcheckbox"
      tabindex="0"
      aria-label=${h}
      aria-checked=${m}
      data-active=${(0,l.xZ)((()=>p()?"":null))}
      @pointerup=${v}
      @pointerdown=${function(t){0===t.button&&p.set(!0)}}
      @keydown=${function(t){(0,n.SK)(t)&&v()}}
    ></div>
  `}function ct(){const{userPrefersAnnouncements:t,translations:e}=g(),s="Announcements";return tt({label:C(e,s),children:dt({label:s,storageKey:"vds-player::announcements",onChange(e){t.set(e)}})})}function ut(){const{translations:t}=g(),e=C(t,"Boost"),s=pt,n=mt,i=ht;return a.qy`
    <media-audio-gain-slider
      class="vds-audio-gain-slider vds-slider"
      aria-label=${e}
      min=${(0,l.xZ)(s)}
      max=${(0,l.xZ)(n)}
      step=${(0,l.xZ)(i)}
      key-step=${(0,l.xZ)(i)}
    >
      ${st()}${nt()}
    </media-audio-gain-slider>
  `}function pt(){const{audioGains:t}=g(),e=t();return(0,n.cy)(e)?e[0]??0:e.min}function mt(){const{audioGains:t}=g(),e=t();return(0,n.cy)(e)?e[e.length-1]??300:e.max}function ht(){const{audioGains:t}=g(),e=t();return(0,n.cy)(e)?e[1]-e[0]||25:e.step}function vt(){const{remote:t}=(0,i.$c)(),{translations:e}=g(),s="Loop";return tt({label:C(e,s),children:dt({label:s,storageKey:"vds-player::user-loop",onChange(e,s){t.userPrefersLoopChange(e,s)}})})}function $t(){const{playbackRates:t}=g(),e=t();return(0,n.cy)(e)?e[0]??0:e.min}function gt(){const{playbackRates:t}=g(),e=t();return(0,n.cy)(e)?e[e.length-1]??2:e.max}function bt(){const{playbackRates:t}=g(),e=t();return(0,n.cy)(e)?e[1]-e[0]||.25:e.step}function yt(){const{translations:t}=g(),e=C(t,"Speed"),s=$t,n=gt,i=bt;return a.qy`
    <media-speed-slider
      class="vds-speed-slider vds-slider"
      aria-label=${e}
      min=${(0,l.xZ)(s)}
      max=${(0,l.xZ)(n)}
      step=${(0,l.xZ)(i)}
      key-step=${(0,l.xZ)(i)}
    >
      ${st()}${nt()}
    </media-speed-slider>
  `}function ft(){const{remote:t,qualities:e}=(0,i.$c)(),{autoQuality:s,canSetQuality:o,qualities:a}=(0,i.nV)(),{translations:l}=g(),r="Auto";return(0,n.EW)((()=>!o()||a().length<=1))()?null:tt({label:C(l,r),children:dt({label:r,checked:s,onChange(s,n){s?t.requestAutoQuality(n):t.changeQuality(e.selectedIndex,n)}})})}function xt(){const{translations:t}=g(),e=C(t,"Quality");return a.qy`
    <media-quality-slider class="vds-quality-slider vds-slider" aria-label=${e}>
      ${st()}${nt()}
    </media-quality-slider>
  `}function At({placement:t,portal:e,tooltip:s}){return(0,l.xZ)((()=>{const{viewType:o}=(0,i.nV)(),{translations:r,menuPortal:c,noModal:u,menuGroup:p,smallWhen:m}=g(),h=(0,n.EW)((()=>u()?(0,n.oA)(t):m()?null:(0,n.oA)(t))),v=(0,n.EW)((()=>m()||"bottom"!==p()||"video"!==o()?0:26)),$=(0,n.O)(!1);!function(){const{player:t}=(0,i.$c)();j.add(t),(0,n.zp)((()=>j.delete(t))),z||((0,n.P1)((()=>{for(const e of(0,n.YD)(Q)){const s=Q[e],i=D[e],o=`--media-user-${(0,n.BW)(e)}`,a=`vds-player:${(0,n.BW)(e)}`;(0,n.QZ)((()=>{const n=s(),l=n===i,r=l?null:X(t,e,n);for(const t of j)t.el?.style.setProperty(o,r);l?localStorage.removeItem(a):localStorage.setItem(a,n)}))}}),null),z=!0)}();const b=a.qy`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${(0,l.xZ)(h)}
        offset=${(0,l.xZ)(v)}
      >
        ${(0,l.xZ)((()=>$()?[(0,l.xZ)((()=>{const{translations:t}=g();return a.qy`
      <media-menu class="vds-playback-menu vds-menu">
        ${et({label:()=>A(t,"Playback"),icon:"menu-playback"})}
        <media-menu-items class="vds-menu-items">
          ${[J({children:vt()}),(0,l.xZ)((()=>{const{translations:t}=g(),{canSetPlaybackRate:e,playbackRate:s}=(0,i.nV)();return e()?J({label:C(t,"Speed"),value:(0,l.xZ)((()=>1===s()?A(t,"Normal"):s()+"x")),children:[it({upIcon:"menu-speed-up",downIcon:"menu-speed-down",children:yt(),isMin:()=>s()===$t(),isMax:()=>s()===gt()})]}):null})),(0,l.xZ)((()=>{const{hideQualityBitrate:t,translations:e}=g(),{canSetQuality:s,qualities:o,quality:a}=(0,i.nV)(),r=(0,n.EW)((()=>!s()||o().length<=1)),c=(0,n.EW)((()=>(0,d.F)(o())));return r()?null:J({label:C(e,"Quality"),value:(0,l.xZ)((()=>{const s=a()?.height,n=t()?null:a()?.bitrate,i=n&&n>0?`${(n/1e6).toFixed(2)} Mbps`:null,o=A(e,"Auto");return s?`${s}p${i?` (${i})`:""}`:o})),children:[it({upIcon:"menu-quality-up",downIcon:"menu-quality-down",children:xt(),isMin:()=>c()[0]===a(),isMax:()=>c().at(-1)===a()}),ft()]})}))]}
        </media-menu-items>
      </media-menu>
    `})),(0,l.xZ)((()=>{const{translations:t}=g();return a.qy`
      <media-menu class="vds-accessibility-menu vds-menu">
        ${et({label:()=>A(t,"Accessibility"),icon:"menu-accessibility"})}
        <media-menu-items class="vds-menu-items">
          ${[J({children:[ct(),(0,l.xZ)((()=>{const{translations:t,userPrefersKeyboardAnimations:e,noKeyboardAnimations:s}=g(),{viewType:o}=(0,i.nV)();if((0,n.EW)((()=>"video"!==o()||s()))())return null;const a="Keyboard Animations";return tt({label:C(t,a),children:dt({label:a,defaultChecked:!0,storageKey:"vds-player::keyboard-animations",onChange(t){e.set(t)}})})}))]}),J({children:[(0,l.xZ)((()=>{const{hasCaptions:t}=(0,i.nV)(),{translations:e}=g();return t()?a.qy`
      <media-menu class="vds-font-menu vds-menu">
        ${et({label:()=>A(e,"Caption Styles")})}
        <media-menu-items class="vds-menu-items">
          ${[J({label:C(e,"Font"),children:[rt({label:"Family",option:K,type:"fontFamily"}),rt({label:"Size",option:ot,type:"fontSize"})]}),J({label:C(e,"Text"),children:[rt({label:"Color",option:R,type:"textColor"}),rt({label:"Shadow",option:U,type:"textShadow"}),rt({label:"Opacity",option:at,type:"textOpacity"})]}),J({label:C(e,"Text Background"),children:[rt({label:"Color",option:R,type:"textBg"}),rt({label:"Opacity",option:at,type:"textBgOpacity"})]}),J({label:C(e,"Display Background"),children:[rt({label:"Color",option:R,type:"displayBg"}),rt({label:"Opacity",option:at,type:"displayBgOpacity"})]}),J({children:[lt()]})]}
        </media-menu-items>
      </media-menu>
    `:null}))]})]}
        </media-menu-items>
      </media-menu>
    `})),(0,l.xZ)((()=>{const{noAudioGain:t,translations:e}=g(),{audioTracks:s,canSetAudioGain:o}=(0,i.nV)();return(0,n.EW)((()=>!(o()&&!t())&&s().length<=1))()?null:a.qy`
      <media-menu class="vds-audio-menu vds-menu">
        ${et({label:()=>A(e,"Audio"),icon:"menu-audio"})}
        <media-menu-items class="vds-menu-items">
          ${[(0,l.xZ)((()=>{const{translations:t}=g(),{audioTracks:e}=(0,i.nV)(),s=C(t,"Default");return(0,n.EW)((()=>e().length<=1))()?null:J({children:a.qy`
        <media-menu class="vds-audio-tracks-menu vds-menu">
          ${et({label:()=>A(t,"Track")})}
          <media-menu-items class="vds-menu-items">
            <media-audio-radio-group
              class="vds-audio-track-radio-group vds-radio-group"
              empty-label=${s}
            >
              <template>
                <media-radio class="vds-audio-track-radio vds-radio">
                  <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                  <span class="vds-radio-label" data-part="label"></span>
                </media-radio>
              </template>
            </media-audio-radio-group>
          </media-menu-items>
        </media-menu>
      `})})),(0,l.xZ)((()=>{const{noAudioGain:t,translations:e}=g(),{canSetAudioGain:s}=(0,i.nV)();if((0,n.EW)((()=>!s()||t()))())return null;const{audioGain:o}=(0,i.nV)();return J({label:C(e,"Boost"),value:(0,l.xZ)((()=>Math.round(100*((o()??1)-1))+"%")),children:[it({upIcon:"menu-audio-boost-up",downIcon:"menu-audio-boost-down",children:ut(),isMin:()=>100*((o()??1)-1)<=pt(),isMax:()=>100*((o()??1)-1)===mt()})]})}))]}
        </media-menu-items>
      </media-menu>
    `})),(0,l.xZ)((()=>{const{translations:t}=g(),{hasCaptions:e}=(0,i.nV)(),s=C(t,"Off");return e()?a.qy`
      <media-menu class="vds-captions-menu vds-menu">
        ${et({label:()=>A(t,"Captions"),icon:"menu-captions"})}
        <media-menu-items class="vds-menu-items">
          <media-captions-radio-group
            class="vds-captions-radio-group vds-radio-group"
            off-label=${s}
          >
            <template>
              <media-radio class="vds-caption-radio vds-radio">
                <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                <span class="vds-radio-label" data-part="label"></span>
              </media-radio>
            </template>
          </media-captions-radio-group>
        </media-menu-items>
      </media-menu>
    `:null}))]:null))}
      </media-menu-items>
    `;return a.qy`
      <media-menu class="vds-settings-menu vds-menu" @open=${function(){$.set(!0)}} @close=${function(){$.set(!1)}}>
        <media-tooltip class="vds-tooltip">
          <media-tooltip-trigger>
            <media-menu-button
              class="vds-menu-button vds-button"
              aria-label=${C(r,"Settings")}
            >
              ${w("menu-settings","vds-rotate-icon")}
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${(0,n.Tn)(s)?(0,l.xZ)(s):s}
          >
            ${C(r,"Settings")}
          </media-tooltip-content>
        </media-tooltip>
        ${e?V(c,b):b}
      </media-menu>
    `}))}function _t({orientation:t,tooltip:e}){return(0,l.xZ)((()=>{const{pointer:s,muted:r,canSetVolume:d}=(0,i.nV)();if("coarse"===s()&&!r())return null;if(!d())return M({tooltip:e});const u=(0,n.O)(void 0),p=(0,o._T)(u);return a.qy`
      <div class="vds-volume" ?data-active=${(0,l.xZ)(p)} ${h(u.set)}>
        ${M({tooltip:e})}
        <div class="vds-volume-popup">${function({orientation:t}={}){const{translations:e}=g(),s=C(e,"Volume");return a.qy`
    <media-volume-slider
      class="vds-volume-slider vds-slider"
      aria-label=${s}
      orientation=${(0,c.J)(t)}
    >
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}({orientation:t})}</div>
      </div>
    `}))}function wt(){const t=(0,n.O)(void 0),e=(0,n.O)(0),{thumbnails:s,translations:i,sliderChaptersMinWidth:r,disableTimeSlider:d,seekStep:c,noScrubGesture:u}=g(),p=C(i,"Seek"),m=(0,l.xZ)(d),v=(0,l.xZ)((()=>e()<r())),$=(0,l.xZ)(s);return(0,o.wY)(t,(()=>{const s=t();s&&e.set(s.clientWidth)})),a.qy`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${p}
      key-step=${(0,l.xZ)(c)}
      ?disabled=${m}
      ?no-swipe-gesture=${(0,l.xZ)(u)}
      ${h(t.set)}
    >
      <media-slider-chapters class="vds-slider-chapters" ?disabled=${v}>
        <template>
          <div class="vds-slider-chapter">
            <div class="vds-slider-track"></div>
            <div class="vds-slider-track-fill vds-slider-track"></div>
            <div class="vds-slider-progress vds-slider-track"></div>
          </div>
        </template>
      </media-slider-chapters>
      <div class="vds-slider-thumb"></div>
      <media-slider-preview class="vds-slider-preview">
        <media-slider-thumbnail
          class="vds-slider-thumbnail vds-thumbnail"
          .src=${$}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `}function kt(){return(0,l.xZ)((()=>{const{live:t}=(0,i.nV)();return t()?E():a.qy`
    <div class="vds-time-group">
      ${(0,l.xZ)((()=>{const{duration:t}=(0,i.nV)();return t()?[a.qy`<media-time class="vds-time" type="current"></media-time>`,a.qy`<div class="vds-time-divider">/</div>`,a.qy`<media-time class="vds-time" type="duration"></media-time>`]:null}))}
    </div>
  `}))}function Ct(){return(0,l.xZ)((()=>{const{textTracks:t}=(0,i.$c)(),{title:e,started:s}=(0,i.nV)(),o=(0,n.O)(null);return(0,r.q)(t,"chapters",o.set),!o()||!s()&&e()?a.qy`<media-title class="vds-chapter-title"></media-title>`:qt()}))}function qt(){return a.qy`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}class St extends l.UT{async loadIcons(){const t=(await s.e(6089).then(s.bind(s,6089))).icons,e={};for(const s of Object.keys(t))e[s]=(0,l.In)({name:s,paths:t[s]});return e}}var Zt=s(5466);s(580);let Mt=class extends y{static props={...super.props,when:({viewType:t})=>"audio"===t,smallWhen:({width:t})=>t<576}};function Tt(){const t="top end";return[L({tooltip:"top",placement:t,portal:!0}),At({tooltip:"top end",placement:t,portal:!0})]}class It extends((0,n.xr)(Zt.W,Mt)){static tagName="media-audio-layout";static attrs={smallWhen:{converter:t=>"never"!==t&&!!t}};#v;#y=(0,n.O)(!1);onSetup(){this.forwardKeepAlive=!1,this.#v=(0,i.$c)(),this.classList.add("vds-audio-layout"),this.#f()}onConnect(){x("audio",(()=>this.isMatch)),this.#x()}render(){return(0,l.xZ)(this.#A.bind(this))}#A(){return this.isMatch?[_(),N(),a.qy`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[O({backward:!0,tooltip:"top start"}),Z({tooltip:"top"}),O({tooltip:"top"}),(0,l.xZ)((()=>{let t=(0,n.O)(void 0),e=(0,n.O)(!1),s=(0,i.$c)(),{title:r,started:d,currentTime:c,ended:u}=(0,i.nV)(),{translations:p}=g(),m=(0,o.ZG)(t),v=()=>d()||c()>0;const $=()=>{const t=u()?"Replay":v()?"Continue":"Play";return`${A(p,t)}: ${r()}`};function b(){return a.qy`
        <span class="vds-title-text">
          ${(0,l.xZ)($)}${(0,l.xZ)((()=>v()?qt():null))}
        </span>
      `}return(0,n.QZ)((()=>{m()&&document.activeElement===document.body&&s.player.el?.focus({preventScroll:!0})})),(0,o.wY)(t,(function(){const s=t(),i=!!s&&!m()&&s.clientWidth<s.children[0].clientWidth;s&&(0,n.p1)(s,"vds-marquee",i),e.set(i)})),r()?a.qy`
          <span class="vds-title" title=${(0,l.xZ)($)} ${h(t.set)}>
            ${[b(),(0,l.xZ)((()=>e()&&!m()?b():null))]}
          </span>
        `:B()})),wt(),(0,l.xZ)((()=>{const{live:t,duration:e}=(0,i.nV)();return t()?E():e()?a.qy`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null})),_t({orientation:"vertical",tooltip:"top"}),T({tooltip:"top"}),P(),q({tooltip:"top"}),Tt()]}
        </media-controls-group>
      </media-controls>
    `]:null}#x(){const{menuPortal:t}=g();(0,n.QZ)((()=>{if(!this.isMatch)return;const e=H(this,this.menuContainer,"vds-audio-layout",(()=>this.isSmallLayout)),s=e?[this,e]:[this];return(this.$props.customIcons()?new l.kj(s):new St(s)).connect(),t.set(e),()=>{e.remove(),t.set(null)}}))}#f(){const{pointer:t}=this.#v.$state;(0,n.QZ)((()=>{"coarse"===t()&&(0,n.QZ)(this.#_.bind(this))}))}#_(){this.#y()?((0,n.k6)(this,"pointerdown",(t=>t.stopPropagation())),(0,n.k6)(window,"pointerdown",this.#w.bind(this))):(0,n.k6)(this,"pointerdown",this.#k.bind(this),{capture:!0})}#k(t){const{target:e}=t;(0,o.sb)(e)&&e.closest(".vds-time-slider")&&(t.stopImmediatePropagation(),this.setAttribute("data-scrubbing",""),this.#y.set(!0))}#w(){this.#y.set(!1),this.removeAttribute("data-scrubbing")}}var Wt=s(7727);const Ot=(0,p.u$)(class extends p.WL{constructor(){super(...arguments),this.key=a.s6}render(t,e){return this.key=t,e}update(t,[e,s]){return e!==this.key&&((0,Wt.mY)(t),this.key=e),s}});class Et extends y{static props={...super.props,when:({viewType:t})=>"video"===t,smallWhen:({width:t,height:e})=>t<576||e<380}}function Pt(){return(0,l.xZ)((()=>{const t=(0,i.$c)(),{noKeyboardAnimations:e,userPrefersKeyboardAnimations:s}=g();if((0,n.EW)((()=>e()||!s()))())return null;const r=(0,n.O)(!1),{lastKeyboardAction:d}=t.$state;(0,n.QZ)((()=>{r.set(!!d());const t=setTimeout((()=>r.set(!1)),500);return()=>{r.set(!1),window.clearTimeout(t)}}));const c=(0,n.EW)((()=>{const t=d()?.action;return t&&r()?(0,n.BW)(t):null})),u=(0,n.EW)((()=>"vds-kb-action"+(r()?"":" hidden"))),p=(0,n.EW)(Nt),m=(0,n.EW)((()=>{const t=function(){const{$state:t}=(0,i.$c)(),e=t.lastKeyboardAction()?.action;switch(e){case"togglePaused":return t.paused()?"kb-pause-icon":"kb-play-icon";case"toggleMuted":return t.muted()||0===t.volume()?"kb-mute-icon":t.volume()>=.5?"kb-volume-up-icon":"kb-volume-down-icon";case"toggleFullscreen":return`kb-fs-${t.fullscreen()?"enter":"exit"}-icon`;case"togglePictureInPicture":return`kb-pip-${t.pictureInPicture()?"enter":"exit"}-icon`;case"toggleCaptions":return t.hasCaptions()?`kb-cc-${t.textTrack()?"on":"off"}-icon`:null;case"volumeUp":return"kb-volume-up-icon";case"volumeDown":return"kb-volume-down-icon";case"seekForward":return"kb-seek-forward-icon";case"seekBackward":return"kb-seek-backward-icon";default:return null}}();return t?(0,o.TL)(t):null}));return a.qy`
      <div class=${(0,l.xZ)(u)} data-action=${(0,l.xZ)(c)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${(0,l.xZ)(p)}</div>
        </div>
        ${(0,l.xZ)((()=>Ot(d(),function(){const t=m();return t?a.qy`
        <div class="vds-kb-bezel">
          <div class="vds-kb-icon">${t}</div>
        </div>
      `:null}())))}
      </div>
    `}))}function Nt(){const{$state:t}=(0,i.$c)(),e=t.lastKeyboardAction()?.action,s=t.audioGain()??1;switch(e){case"toggleMuted":return t.muted()?"0%":Bt(t.volume(),s);case"volumeUp":case"volumeDown":return Bt(t.volume(),s);default:return""}}function Bt(t,e){return`${Math.round(t*e*100)}%`}function Vt(){return a.qy`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function Ht(){const{menuGroup:t,smallWhen:e}=g(),s=()=>"top"===t()||e()?"bottom":"top",i=(0,n.EW)((()=>`${s()} ${"top"===t()?"end":"center"}`)),o=(0,n.EW)((()=>`${s()} end`));return[L({tooltip:i,placement:o,portal:!0}),At({tooltip:i,placement:o,portal:!0})]}function Lt(){return(0,l.xZ)((()=>{const{noGestures:t}=g();return t()?null:a.qy`
      <div class="vds-gestures">
        <media-gesture class="vds-gesture" event="pointerup" action="toggle:paused"></media-gesture>
        <media-gesture
          class="vds-gesture"
          event="pointerup"
          action="toggle:controls"
        ></media-gesture>
        <media-gesture
          class="vds-gesture"
          event="dblpointerup"
          action="toggle:fullscreen"
        ></media-gesture>
        <media-gesture class="vds-gesture" event="dblpointerup" action="seek:-10"></media-gesture>
        <media-gesture class="vds-gesture" event="dblpointerup" action="seek:10"></media-gesture>
      </div>
    `}))}class Gt extends((0,n.xr)(Zt.W,Et)){static tagName="media-video-layout";static attrs={smallWhen:{converter:t=>"never"!==t&&!!t}};#v;onSetup(){this.forwardKeepAlive=!1,this.#v=(0,i.$c)(),this.classList.add("vds-video-layout")}onConnect(){x("video",(()=>this.isMatch)),this.#x()}render(){return(0,l.xZ)(this.#A.bind(this))}#x(){const{menuPortal:t}=g();(0,n.QZ)((()=>{if(!this.isMatch)return;const e=H(this,this.menuContainer,"vds-video-layout",(()=>this.isSmallLayout)),s=e?[this,e]:[this];return(this.$props.customIcons()?new l.kj(s):new St(s)).connect(),t.set(e),()=>{e.remove(),t.set(null)}}))}#A(){const{load:t}=this.#v.$props,{canLoad:e,streamType:s,nativeControls:n}=this.#v.$state;return!n()&&this.isMatch?"play"!==t()||e()?"unknown"===s()?Vt():this.isSmallLayout?[_(),Lt(),Vt(),N(),Pt(),a.qy`<div class="vds-scrim"></div>`,a.qy`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[q({tooltip:"top start"}),S({tooltip:"bottom start"}),B(),T({tooltip:"bottom"}),P(),Ht(),_t({orientation:"vertical",tooltip:"bottom end"})]}
        </media-controls-group>

        ${B()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[B(),Z({tooltip:"top"}),B()]}
        </media-controls-group>

        ${B()}

        <media-controls-group class="vds-controls-group">
          ${[kt(),Ct(),W({tooltip:"top end"})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${wt()}
        </media-controls-group>
      </media-controls>
    `,(0,l.xZ)((()=>{const{duration:t}=(0,i.nV)();return 0===t()?null:a.qy`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `}))]:[_(),Lt(),Vt(),Pt(),N(),a.qy`<div class="vds-scrim"></div>`,a.qy`
      <media-controls class="vds-controls">
        ${[a.qy`
    <media-controls-group class="vds-controls-group">
      ${(0,l.xZ)((()=>{const{menuGroup:t}=g();return"top"===t()?[B(),Ht()]:null}))}
    </media-controls-group>
  `,B(),a.qy`<media-controls-group class="vds-controls-group"></media-controls-group>`,B(),a.qy`
            <media-controls-group class="vds-controls-group">
              ${wt()}
            </media-controls-group>
          `,a.qy`
            <media-controls-group class="vds-controls-group">
              ${[Z({tooltip:"top start"}),_t({orientation:"horizontal",tooltip:"top"}),kt(),Ct(),T({tooltip:"top"}),(0,l.xZ)((()=>{const{menuGroup:t}=g();return"bottom"===t()?Ht():null})),q({tooltip:"top"}),S({tooltip:"top"}),P(),I(),W({tooltip:"top end"})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]:a.qy`
    <div class="vds-load-container">
      ${[Vt(),Z({tooltip:"top"})]}
    </div>
  `:null}}(0,n.Xq)(It),(0,n.Xq)(Gt)}}]);