/*! For license information please see 1472.19c4aae3.js.LICENSE.txt */
"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[1472],{6214:(t,e,s)=>{s.d(e,{Kq:()=>u,OA:()=>n.OA,u$:()=>n.u$});var i=s(7727),n=s(4703);const o=(t,e)=>{var s,i;const n=t._$AN;if(void 0===n)return!1;for(const t of n)null===(i=(s=t)._$AO)||void 0===i||i.call(s,e,!1),o(t,e);return!0},a=t=>{let e,s;do{if(void 0===(e=t._$AM))break;s=e._$AN,s.delete(t),t=e}while(0===(null==s?void 0:s.size))},l=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),c(e)}};function r(t){void 0!==this._$AN?(a(this),this._$AM=t,l(this)):this._$AM=t}function d(t,e=!1,s=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(i))for(let t=s;t<i.length;t++)o(i[t],!1),a(i[t]);else null!=i&&(o(i,!1),a(i));else o(this,t)}const c=t=>{var e,s,i,o;t.type==n.OA.CHILD&&(null!==(e=(i=t)._$AP)&&void 0!==e||(i._$AP=d),null!==(s=(o=t)._$AQ)&&void 0!==s||(o._$AQ=r))};class u extends n.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),l(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,i;t!==this.isConnected&&(this.isConnected=t,t?null===(s=this.reconnected)||void 0===s||s.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),e&&(o(this,t),a(this))}setValue(t){if((0,i.Rt)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}},7727:(t,e,s)=>{s.d(e,{Rt:()=>o,mY:()=>l});var i=s(4245);const{I:n}=i.ge,o=t=>void 0===t.strings,a={},l=(t,e=a)=>t._$AH=e},4703:(t,e,s)=>{s.d(e,{OA:()=>i,WL:()=>o,u$:()=>n});const i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=t=>(...e)=>({_$litDirective$:t,values:e});class o{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},1822:(t,e,s)=>{s.d(e,{J:()=>n});var i=s(4245);const n=t=>null!=t?t:i.s6},2993:(t,e,s)=>{s.d(e,{D:()=>o,_:()=>a});var i=s(4245),n=s(4703);class o extends n.WL{constructor(t){if(super(t),this.et=i.s6,t.type!==n.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===i.s6||null==t)return this.ft=void 0,this.et=t;if(t===i.c0)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}o.directiveName="unsafeHTML",o.resultType=1;const a=(0,n.u$)(o)},580:(t,e,s)=>{s.d(e,{T:()=>a});var i=s(4703),n=s(2993);class o extends n.D{}o.directiveName="unsafeSVG",o.resultType=2;const a=(0,i.u$)(o)},4245:(t,e,s)=>{var i;s.d(e,{XX:()=>K,c0:()=>q,ge:()=>V,qy:()=>k,s6:()=>Z});const n=window,o=n.trustedTypes,a=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,l="$lit$",r=`lit$${(Math.random()+"").slice(9)}$`,d="?"+r,c=`<${d}>`,u=document,p=()=>u.createComment(""),m=t=>null===t||"object"!=typeof t&&"function"!=typeof t,h=Array.isArray,v=t=>h(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),$="[ \t\n\f\r]",g=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,y=/-->/g,b=/>/g,f=RegExp(`>|${$}(?:([^\\s"'>=/]+)(${$}*=${$}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),x=/'/g,A=/"/g,_=/^(?:script|style|textarea|title)$/i,w=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),k=w(1),q=(w(2),Symbol.for("lit-noChange")),Z=Symbol.for("lit-nothing"),C=new WeakMap,S=u.createTreeWalker(u,129,null,!1);function T(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==a?a.createHTML(e):e}const M=(t,e)=>{const s=t.length-1,i=[];let n,o=2===e?"<svg>":"",a=g;for(let e=0;e<s;e++){const s=t[e];let d,u,p=-1,m=0;for(;m<s.length&&(a.lastIndex=m,u=a.exec(s),null!==u);)m=a.lastIndex,a===g?"!--"===u[1]?a=y:void 0!==u[1]?a=b:void 0!==u[2]?(_.test(u[2])&&(n=RegExp("</"+u[2],"g")),a=f):void 0!==u[3]&&(a=f):a===f?">"===u[0]?(a=null!=n?n:g,p=-1):void 0===u[1]?p=-2:(p=a.lastIndex-u[2].length,d=u[1],a=void 0===u[3]?f:'"'===u[3]?A:x):a===A||a===x?a=f:a===y||a===b?a=g:(a=f,n=void 0);const h=a===f&&t[e+1].startsWith("/>")?" ":"";o+=a===g?s+c:p>=0?(i.push(d),s.slice(0,p)+l+s.slice(p)+r+h):s+r+(-2===p?(i.push(void 0),e):h)}return[T(t,o+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class E{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,a=0;const c=t.length-1,u=this.parts,[m,h]=M(t,e);if(this.el=E.createElement(m,s),S.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=S.nextNode())&&u.length<c;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith(l)||e.startsWith(r)){const s=h[a++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+l).split(r),e=/([.?@])?(.*)/.exec(s);u.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?H:"?"===e[1]?B:"@"===e[1]?G:W})}else u.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(_.test(i.tagName)){const t=i.textContent.split(r),e=t.length-1;if(e>0){i.textContent=o?o.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],p()),S.nextNode(),u.push({type:2,index:++n});i.append(t[e],p())}}}else if(8===i.nodeType)if(i.data===d)u.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(r,t+1));)u.push({type:7,index:n}),t+=r.length-1}n++}}static createElement(t,e){const s=u.createElement("template");return s.innerHTML=t,s}}function O(t,e,s=t,i){var n,o,a,l;if(e===q)return e;let r=void 0!==i?null===(n=s._$Co)||void 0===n?void 0:n[i]:s._$Cl;const d=m(e)?void 0:e._$litDirective$;return(null==r?void 0:r.constructor)!==d&&(null===(o=null==r?void 0:r._$AO)||void 0===o||o.call(r,!1),void 0===d?r=void 0:(r=new d(t),r._$AT(t,s,i)),void 0!==i?(null!==(a=(l=s)._$Co)&&void 0!==a?a:l._$Co=[])[i]=r:s._$Cl=r),void 0!==r&&(e=O(t,r._$AS(t,e.values),r,i)),e}class P{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:u).importNode(s,!0);S.currentNode=n;let o=S.nextNode(),a=0,l=0,r=i[0];for(;void 0!==r;){if(a===r.index){let e;2===r.type?e=new I(o,o.nextSibling,this,t):1===r.type?e=new r.ctor(o,r.name,r.strings,this,t):6===r.type&&(e=new L(o,this,t)),this._$AV.push(e),r=i[++l]}a!==(null==r?void 0:r.index)&&(o=S.nextNode(),a++)}return S.currentNode=u,n}v(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class I{constructor(t,e,s,i){var n;this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),m(t)?t===Z||null==t||""===t?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==Z&&m(this._$AH)?this._$AA.nextSibling.data=t:this.$(u.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=E.createElement(T(i.h,i.h[0]),this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(s);else{const t=new P(n,this),e=t.u(this.options);t.v(s),this.$(e),this._$AH=t}}_$AC(t){let e=C.get(t.strings);return void 0===e&&C.set(t.strings,e=new E(t)),e}T(t){h(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new I(this.k(p()),this.k(p()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class W{constructor(t,e,s,i,n){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(void 0===n)t=O(this,t,e,0),o=!m(t)||t!==this._$AH&&t!==q,o&&(this._$AH=t);else{const i=t;let a,l;for(t=n[0],a=0;a<n.length-1;a++)l=O(this,i[s+a],e,a),l===q&&(l=this._$AH[a]),o||(o=!m(l)||l!==this._$AH[a]),l===Z?t=Z:t!==Z&&(t+=(null!=l?l:"")+n[a+1]),this._$AH[a]=l}o&&!i&&this.j(t)}j(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class H extends W{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Z?void 0:t}}const N=o?o.emptyScript:"";class B extends W{constructor(){super(...arguments),this.type=4}j(t){t&&t!==Z?this.element.setAttribute(this.name,N):this.element.removeAttribute(this.name)}}class G extends W{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=O(this,t,e,0))&&void 0!==s?s:Z)===q)return;const i=this._$AH,n=t===Z&&i!==Z||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==Z&&(i===Z||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const V={O:l,P:r,A:d,C:1,M,L:P,R:v,D:O,I,V:W,H:B,N:G,U:H,F:L},R=n.litHtmlPolyfillSupport;null==R||R(E,I),(null!==(i=n.litHtmlVersions)&&void 0!==i?i:n.litHtmlVersions=[]).push("2.8.0");const K=(t,e,s)=>{var i,n;const o=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let a=o._$litPart$;if(void 0===a){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;o._$litPart$=a=new I(e.insertBefore(p(),t),t,void 0,null!=s?s:{})}return a._$AI(t),a}},1015:(t,e,s)=>{function i(t,e){return[...t].sort(e?o:n)}function n(t,e){return t.height===e.height?(t.bitrate??0)-(e.bitrate??0):t.height-e.height}function o(t,e){return e.height===t.height?(e.bitrate??0)-(t.bitrate??0):e.height-t.height}function a(t){return()=>t()?"true":"false"}s.d(e,{F:()=>i,M:()=>a})},9017:(t,e,s)=>{s.d(e,{In:()=>v,UT:()=>g,kj:()=>h,xZ:()=>c});var i=s(5363),n=s(4245),o=s(1822),a=s(580),l=s(6214),r=s(9552);class d extends l.Kq{constructor(t){super(t),this.h=null,this.w=!1,this.$=null,this.w=t.type===l.OA.ATTRIBUTE||t.type===l.OA.BOOLEAN_ATTRIBUTE}render(t){return t!==this.h&&(this.disconnected(),this.h=t,this.isConnected&&this.Gl()),this.h?this.x((0,i.se)(this.h)):n.s6}reconnected(){this.Gl()}disconnected(){this.$?.(),this.$=null}Gl(){this.h&&(this.$=(0,i.QZ)(this.l.bind(this)))}x(t){return this.w?(0,o.J)(t):t}y(t){this.setValue(this.x(t))}l(){this.y(this.h?.())}}function c(t){return(0,l.u$)(d)((0,i.EW)(t))}class u{constructor(t,e){this._m=t,this.La=e,this.elements=new Set,this.Gc=(0,i.s_)(this.Ha.bind(this))}connect(){this.Ha();const t=new MutationObserver(this.Gc);for(const e of this._m)t.observe(e,{childList:!0,subtree:!0});(0,i.zp)((()=>t.disconnect())),(0,i.zp)(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(t,e){(0,i.vA)(t)?(e.textContent="",e.append(t)):((0,n.XX)(null,e),(0,n.XX)(t,e)),e.style.display||(e.style.display="contents");const s=e.firstElementChild;if(!s)return;const o=e.getAttribute("data-class");o&&s.classList.add(...o.split(" "))}Ha(t){if(t&&!t.some((t=>t.addedNodes.length)))return;let e=!1,s=this._m.flatMap((t=>[...t.querySelectorAll("slot")]));for(const t of s)t.hasAttribute("name")&&!this.elements.has(t)&&(this.elements.add(t),e=!0);e&&this.La(this.elements)}}let p=0,m="data-slot-id";class h{constructor(t){this._m=t,this.Gc=(0,i.s_)(this.Ha.bind(this)),this.slots=new u(t,this.Ha.bind(this))}connect(){this.slots.connect(),this.Ha();const t=new MutationObserver(this.Gc);for(const e of this._m)t.observe(e,{childList:!0});(0,i.zp)((()=>t.disconnect()))}Ha(){for(const t of this._m)for(const e of t.children){if(1!==e.nodeType)continue;const t=e.getAttribute("slot");if(!t)continue;e.style.display="none";let s=e.getAttribute(m);s||e.setAttribute(m,s=++p+"");for(const i of this.slots.elements){if(i.getAttribute("name")!==t||i.getAttribute(m)===s)continue;const n=document.importNode(e,!0);t.includes("-icon")&&n.classList.add("vds-icon"),n.style.display="",n.removeAttribute("slot"),this.slots.assign(n,i),i.setAttribute(m,s)}}}}function v({name:t,class:e,state:s,paths:l,viewBox:r="0 0 32 32"}){return n.qy`<svg
    class="${"vds-icon"+(e?` ${e}`:"")}"
    viewBox="${r}"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${(0,o.J)(t??s)}
  >
    ${(0,i.Kg)(l)?(0,a.T)(l):c(l)}
  </svg>`}class ${constructor(t){this._m=t,this.dn={},this.gn=!1,this.slots=new u(t,this.hn.bind(this))}connect(){this.slots.connect()}load(){this.Pf().then((t=>{this.dn=t,this.gn=!0,this.hn()}))}*jn(){for(const t of Object.keys(this.dn)){const e=`${t}-icon`;for(const s of this.slots.elements)s.name===e&&(yield{icon:this.dn[t],slot:s})}}hn(){if(this.gn)for(const{icon:t,slot:e}of this.jn())this.slots.assign(t,e)}}class g extends ${connect(){super.connect();const{player:t}=(0,r.$c)();if(!t.el)return;let e,s=new IntersectionObserver((t=>{t[0]?.isIntersecting&&(e?.(),e=void 0,this.load())}));s.observe(t.el),e=(0,i.zp)((()=>s.disconnect()))}}},1065:(t,e,s)=>{s.d(e,{W:()=>n});var i=s(4245);class n extends HTMLElement{constructor(){super(...arguments),this.rootPart=null}connectedCallback(){this.rootPart=(0,i.XX)(this.render(),this,{renderBefore:this.firstChild}),this.rootPart.setConnected(!0)}disconnectedCallback(){this.rootPart?.setConnected(!1),this.rootPart=null,(0,i.XX)(null,this)}}},1472:(t,e,s)=>{var i=s(5363),n=s(9552),o=s(2463),a=s(4245),l=s(9017),r=s(8921),d=s(1015),c=s(1822),u=s(6214),p=s(4703);const m=new WeakMap,h=(0,p.u$)(class extends u.Kq{render(t){return a.s6}update(t,[e]){var s;const i=e!==this.G;return i&&void 0!==this.G&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=e,this.dt=null===(s=t.options)||void 0===s?void 0:s.host,this.ot(this.lt=t.element)),a.s6}ot(t){var e;if("function"==typeof this.G){const s=null!==(e=this.dt)&&void 0!==e?e:globalThis;let i=m.get(s);void 0===i&&(i=new WeakMap,m.set(s,i)),void 0!==i.get(this.G)&&this.G.call(this.dt,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.dt,t)}else this.G.value=t}get rt(){var t,e,s;return"function"==typeof this.G?null===(e=m.get(null!==(t=this.dt)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.G):null===(s=this.G)||void 0===s?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var v=s(3694);const $=(0,i.q6)();function g(){return(0,i.NT)($)}const y={colorScheme:"system",download:null,customIcons:!1,disableTimeSlider:!1,menuContainer:null,menuGroup:"bottom",noAudioGain:!1,noGestures:!1,noKeyboardAnimations:!1,noModal:!1,noScrubGesture:!1,playbackRates:{min:0,max:2,step:.25},audioGains:{min:0,max:300,step:25},seekStep:10,sliderChaptersMinWidth:325,hideQualityBitrate:!1,smallWhen:!1,thumbnails:null,translations:null,when:!1};var b=Object.defineProperty,f=Object.getOwnPropertyDescriptor,x=(t,e,s,i)=>{for(var n,o=f(e,s),a=t.length-1;a>=0;a--)(n=t[a])&&(o=n(e,s,o)||o);return o&&b(e,s,o),o};class A extends i.uA{constructor(){super(...arguments),this.cn=(0,i.EW)((()=>{const t=this.$props.when();return this.fn(t)})),this.$m=(0,i.EW)((()=>{const t=this.$props.smallWhen();return this.fn(t)}))}static{this.props=y}get isMatch(){return this.cn()}get isSmallLayout(){return this.$m()}onSetup(){this.a=(0,n.$c)(),this.setAttributes({"data-match":this.cn,"data-sm":()=>this.$m()?"":null,"data-lg":()=>this.$m()?null:"","data-size":()=>this.$m()?"sm":"lg","data-no-scrub-gesture":this.$props.noScrubGesture}),(0,i.Pp)($,{...this.$props,when:this.cn,smallWhen:this.$m,userPrefersAnnouncements:(0,i.O)(!0),userPrefersKeyboardAnimations:(0,i.O)(!0),menuPortal:(0,i.O)(null)})}onAttach(t){(0,o.GU)(t,this.$props.colorScheme)}fn(t){return"never"!==t&&((0,i.Lm)(t)?t:(0,i.EW)((()=>t(this.a.player.state)))())}}function _(t,e){(0,i.QZ)((()=>{const{player:s}=(0,n.$c)(),o=s.el;return o&&(0,i.Bq)(o,"data-layout",e()&&t),()=>o?.removeAttribute("data-layout")}))}function w(t,e){return t()?.[e]??e}function k(){return(0,l.xZ)((()=>{const{translations:t,userPrefersAnnouncements:e}=g();return e()?a.qy`<media-announcer .translations=${(0,l.xZ)(t)}></media-announcer>`:null}))}function q(t,e=""){return a.qy`<slot
    name=${`${t}-icon`}
    data-class=${`vds-icon vds-${t}-icon${e?` ${e}`:""}`}
  ></slot>`}function Z(t){return t.map((t=>q(t)))}function C(t,e){return(0,l.xZ)((()=>w(t,e)))}function S({tooltip:t}){const{translations:e}=g(),{remotePlaybackState:s}=(0,n.nV)(),o=(0,l.xZ)((()=>`${w(e,"AirPlay")} ${(0,i.Fb)(s())}`)),r=C(e,"AirPlay");return a.qy`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${o}>
          ${q("airplay")}
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-airplay-tooltip-text">${r}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function T({tooltip:t}){const{translations:e}=g(),{remotePlaybackState:s}=(0,n.nV)(),o=(0,l.xZ)((()=>`${w(e,"Google Cast")} ${(0,i.Fb)(s())}`)),r=C(e,"Google Cast");return a.qy`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${o}>
          ${q("google-cast")}
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-google-cast-tooltip-text">${r}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function M({tooltip:t}){const{translations:e}=g(),s=C(e,"Play"),i=C(e,"Pause");return a.qy`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button
          class="vds-play-button vds-button"
          aria-label=${C(e,"Play")}
        >
          ${Z(["play","pause","replay"])}
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-play-tooltip-text">${s}</span>
        <span class="vds-pause-tooltip-text">${i}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function E({tooltip:t,ref:e=i.lQ}){const{translations:s}=g(),n=C(s,"Mute"),o=C(s,"Unmute");return a.qy`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${C(s,"Mute")}
          ${h(e)}
        >
          ${Z(["mute","volume-low","volume-high"])}
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-mute-tooltip-text">${o}</span>
        <span class="vds-unmute-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function O({tooltip:t}){const{translations:e}=g(),s=C(e,"Closed-Captions On"),i=C(e,"Closed-Captions Off");return a.qy`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button
          class="vds-caption-button vds-button"
          aria-label=${C(e,"Captions")}
        >
          ${Z(["cc-on","cc-off"])}
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-cc-on-tooltip-text">${i}</span>
        <span class="vds-cc-off-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function P(){const{translations:t}=g(),e=C(t,"Enter PiP"),s=C(t,"Exit PiP");return a.qy`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button
          class="vds-pip-button vds-button"
          aria-label=${C(t,"PiP")}
        >
          ${Z(["pip-enter","pip-exit"])}
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${e}</span>
        <span class="vds-pip-exit-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function I({tooltip:t}){const{translations:e}=g(),s=C(e,"Enter Fullscreen"),i=C(e,"Exit Fullscreen");return a.qy`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button
          class="vds-fullscreen-button vds-button"
          aria-label=${C(e,"Fullscreen")}
        >
          ${Z(["fs-enter","fs-exit"])}
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-fs-enter-tooltip-text">${s}</span>
        <span class="vds-fs-exit-tooltip-text">${i}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function W({backward:t,tooltip:e}){const{translations:s,seekStep:i}=g(),n=t?"Seek Backward":"Seek Forward",o=C(s,n);return a.qy`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${(0,l.xZ)((()=>(t?-1:1)*i()))}
          aria-label=${o}
        >
          ${q(t?"seek-backward":"seek-forward")}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        ${C(s,n)}
      </media-tooltip-content>
    </media-tooltip>
  `}function H(){const{translations:t}=g(),{live:e}=(0,n.nV)(),s=C(t,"Skip To Live"),i=C(t,"LIVE");return e()?a.qy`
        <media-live-button class="vds-live-button" aria-label=${s}>
          <span class="vds-live-button-text">${i}</span>
        </media-live-button>
      `:null}function N(){return(0,l.xZ)((()=>{const{download:t,translations:e}=g(),s=t();if((0,i.gD)(s))return null;const{source:o,title:l}=(0,n.nV)(),r=o(),d=(0,v.d_)({title:l(),src:r,download:s});return d?a.qy`
          <media-tooltip class="vds-download-tooltip vds-tooltip">
            <media-tooltip-trigger>
              <a
                role="button"
                class="vds-download-button vds-button"
                aria-label=${C(e,"Download")}
                href=${d.url+`?download=${d.name}`}
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
        `:null}))}function B(){const{translations:t}=g();return a.qy`
    <media-captions
      class="vds-captions"
      .exampleText=${C(t,"Captions look like this")}
    ></media-captions>
  `}function G(){return a.qy`<div class="vds-controls-spacer"></div>`}function L(t,e){return a.qy`
    <media-menu-portal .container=${(0,l.xZ)(t)} disabled="fullscreen">
      ${e}
    </media-menu-portal>
  `}function V(t,e,s,a){let l=(0,i.Kg)(e)?document.querySelector(e):e;l||(l=t?.closest("dialog")),l||(l=document.body);const r=document.createElement("div");r.style.display="contents",r.classList.add(s),l.append(r),(0,i.QZ)((()=>{if(!r)return;const{viewType:t}=(0,n.nV)(),e=a();(0,i.Bq)(r,"data-view-type",t()),(0,i.Bq)(r,"data-sm",e),(0,i.Bq)(r,"data-lg",!e),(0,i.Bq)(r,"data-size",e?"sm":"lg")}));const{colorScheme:d}=g();return(0,o.GU)(r,d),r}function R({placement:t,tooltip:e,portal:s}){const{textTracks:o}=(0,n.$c)(),{viewType:d,clipStartTime:c,clipEndTime:u}=(0,n.nV)(),{translations:p,thumbnails:m,menuPortal:h,noModal:v,menuGroup:$,smallWhen:y}=g();if((0,i.EW)((()=>{const t=c(),e=u()||1/0,s=(0,i.O)(null);(0,r.q)(o,"chapters",s.set);const n=s()?.cues.filter((s=>s.startTime<=e&&s.endTime>=t));return!n?.length}))())return null;const b=(0,i.EW)((()=>v()?(0,i.oA)(t):y()?null:(0,i.oA)(t))),f=(0,i.EW)((()=>y()||"bottom"!==$()||"video"!==d()?0:26)),x=(0,i.O)(!1),A=a.qy`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${(0,l.xZ)(b)}
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
            ${q("menu-chapters")}
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${(0,i.Tn)(e)?(0,l.xZ)(e):e}
        >
          ${C(p,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${s?L(h,A):A}
    </media-menu>
  `}function K(t){const{style:e}=new Option;return e.color=t,e.color.match(/\((.*?)\)/)[1].replace(/,/g," ")}x([i._w],A.prototype,"isMatch"),x([i._w],A.prototype,"isSmallLayout");const U={type:"color"},D={type:"radio",values:{"Monospaced Serif":"mono-serif","Proportional Serif":"pro-serif","Monospaced Sans-Serif":"mono-sans","Proportional Sans-Serif":"pro-sans",Casual:"casual",Cursive:"cursive","Small Capitals":"capitals"}},Q={type:"radio",values:["None","Drop Shadow","Raised","Depressed","Outline"]},j={fontFamily:"pro-sans",fontSize:"100%",textColor:"#ffffff",textOpacity:"100%",textShadow:"none",textBg:"#000000",textBgOpacity:"100%",displayBg:"#000000",displayBgOpacity:"0%"},F=Object.keys(j).reduce(((t,e)=>({...t,[e]:(0,i.O)(j[e])})),{});for(const t of Object.keys(F)){const e=localStorage.getItem(`vds-player:${(0,i.BW)(t)}`);(0,i.Kg)(e)&&F[t].set(e)}function z(){for(const t of Object.keys(F)){const e=j[t];F[t].set(e)}}let X=!1,Y=new Set;function J(t,e,s){switch(e){case"fontFamily":const e="capitals"===s?"small-caps":"";return t.el?.style.setProperty("--media-user-font-variant",e),function(t){switch(t){case"mono-serif":return'"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';case"mono-sans":return'"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';case"pro-sans":return'Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';case"casual":return'"Comic Sans MS", Impact, Handlee, fantasy';case"cursive":return'"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';case"capitals":return'"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps';default:return'"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'}}(s);case"fontSize":case"textOpacity":case"textBgOpacity":case"displayBgOpacity":return function(t){return(parseInt(t)/100).toString()}(s);case"textColor":return`rgb(${K(s)} / var(--media-user-text-opacity, 1))`;case"textShadow":return function(t){switch(t){case"drop shadow":return"rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px";case"raised":return"rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px";case"depressed":return"rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px";case"outline":return"rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px";default:return""}}(s);case"textBg":return`rgb(${K(s)} / var(--media-user-text-bg-opacity, 1))`;case"displayBg":return`rgb(${K(s)} / var(--media-user-display-bg-opacity, 1))`}}let tt=0;function et({label:t="",value:e="",children:s}){if(!t)return a.qy`
      <div class="vds-menu-section">
        <div class="vds-menu-section-body">${s}</div>
      </div>
    `;const i="vds-menu-section-"+ ++tt;return a.qy`
    <section class="vds-menu-section" role="group" aria-labelledby=${i}>
      <div class="vds-menu-section-title">
        <header id=${i}>${t}</header>
        ${e?a.qy`<div class="vds-menu-section-value">${e}</div>`:null}
      </div>
      <div class="vds-menu-section-body">${s}</div>
    </section>
  `}function st({label:t,children:e}){return a.qy`
    <div class="vds-menu-item">
      <div class="vds-menu-item-label">${t}</div>
      ${e}
    </div>
  `}function it({label:t,icon:e,hint:s}){return a.qy`
    <media-menu-button class="vds-menu-item">
      ${q("menu-arrow-left","vds-menu-close-icon")}
      ${e?q(e,"vds-menu-item-icon"):null}
      <span class="vds-menu-item-label">${(0,l.xZ)(t)}</span>
      <span class="vds-menu-item-hint" data-part="hint">${s?(0,l.xZ)(s):null} </span>
      ${q("menu-arrow-right","vds-menu-open-icon")}
    </media-menu-button>
  `}function nt(){return a.qy`
    <div class="vds-slider-track"></div>
    <div class="vds-slider-track-fill vds-slider-track"></div>
    <div class="vds-slider-thumb"></div>
  `}function ot(){return a.qy`
    <media-slider-steps class="vds-slider-steps">
      <template>
        <div class="vds-slider-step"></div>
      </template>
    </media-slider-steps>
  `}function at({label:t=null,value:e=null,upIcon:s="",downIcon:i="",children:n,isMin:o,isMax:r}){const d=t||e,c=[i?q(i,"down"):null,n,s?q(s,"up"):null];return a.qy`
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
  `}const lt={type:"slider",min:0,max:400,step:25,upIcon:null,downIcon:null,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"},rt={type:"slider",min:0,max:100,step:5,upIcon:null,downIcon:null,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"};function dt(){const{translations:t}=g();return a.qy`
    <button class="vds-menu-item" role="menuitem" @click=${z}>
      <span class="vds-menu-item-label">${(0,l.xZ)((()=>w(t,"Reset")))}</span>
    </button>
  `}function ct({label:t,option:e,type:s}){const{player:o}=(0,n.$c)(),{translations:r}=g(),d=F[s],c=()=>w(r,t);function u(){(0,i.io)(),o.dispatchEvent(new Event("vds-font-change"))}if("color"===e.type){let t=function(t){d.set(t.target.value),u()};return st({label:(0,l.xZ)(c),children:a.qy`
        <input
          class="vds-color-picker"
          type="color"
          .value=${(0,l.xZ)(d)}
          @input=${t}
        />
      `})}if("slider"===e.type){let t=function(t){d.set(t.detail+"%"),u()};const{min:s,max:i,step:n,upIcon:o,downIcon:r}=e;return at({label:(0,l.xZ)(c),value:(0,l.xZ)(d),upIcon:o,downIcon:r,isMin:()=>d()===s+"%",isMax:()=>d()===i+"%",children:a.qy`
        <media-slider
          class="vds-slider"
          min=${s}
          max=${i}
          step=${n}
          key-step=${n}
          .value=${(0,l.xZ)((()=>parseInt(d())))}
          aria-label=${(0,l.xZ)(c)}
          @value-change=${t}
          @drag-value-change=${t}
        >
          ${nt()}${ot()}
        </media-slider>
      `})}const p=(m=e.values,(0,i.cy)(m)?m.map((t=>({label:t,value:t.toLowerCase()}))):Object.keys(m).map((t=>({label:t,value:m[t]}))));var m;return a.qy`
    <media-menu class=${`vds-${(0,i.BW)(s)}-menu vds-menu`}>
      ${it({label:c,hint:()=>{const t=d(),e=p.find((e=>e.value===t))?.label||"";return w(r,(0,i.Kg)(e)?e:e())}})}
      <media-menu-items class="vds-menu-items">
        ${function({value:t=null,options:e,hideLabel:s=!1,children:n=null,onChange:o=null}){function r(t){const{value:e,label:o}=t;return a.qy`
      <media-radio class="vds-radio" value=${e}>
        ${q("menu-radio-check")}
        ${s?null:a.qy`
              <span class="vds-radio-label" data-part="label">
                ${(0,i.Kg)(o)?o:(0,l.xZ)(o)}
              </span>
            `}
        ${(0,i.Tn)(n)?n(t):n}
      </media-radio>
    `}return a.qy`
    <media-radio-group
      class="vds-radio-group"
      value=${(0,i.Kg)(t)?t:t?(0,l.xZ)(t):""}
      @change=${o}
    >
      ${(0,i.cy)(e)?e.map(r):(0,l.xZ)((()=>e().map(r)))}
    </media-radio-group>
  `}({value:d,options:p,onChange({detail:t}){d.set(t),u()}})}
      </media-menu-items>
    </media-menu>
  `}function ut({label:t,checked:e,defaultChecked:s=!1,storageKey:n,onChange:o}){const{translations:r}=g(),c=n?localStorage.getItem(n):null,u=(0,i.O)(!!(c??s)),p=(0,i.O)(!1),m=(0,l.xZ)((0,d.M)(u)),h=C(r,t);function v(t){1!==t?.button&&(u.set((t=>!t)),n&&localStorage.setItem(n,u()?"1":""),o(u(),t),p.set(!1))}return n&&o((0,i.se)(u)),e&&(0,i.QZ)((()=>{u.set(e())})),a.qy`
    <div
      class="vds-menu-checkbox"
      role="menuitemcheckbox"
      tabindex="0"
      aria-label=${h}
      aria-checked=${m}
      data-active=${(0,l.xZ)((()=>p()?"":null))}
      @pointerup=${v}
      @pointerdown=${function(t){0===t.button&&p.set(!0)}}
      @keydown=${function(t){(0,i.SK)(t)&&v()}}
    ></div>
  `}function pt(){const{userPrefersAnnouncements:t,translations:e}=g(),s="Announcements";return st({label:C(e,s),children:ut({label:s,storageKey:"vds-player::announcements",onChange(e){t.set(e)}})})}function mt(){const{translations:t}=g(),e=C(t,"Boost"),s=ht,i=vt,n=$t;return a.qy`
    <media-audio-gain-slider
      class="vds-audio-gain-slider vds-slider"
      aria-label=${e}
      min=${(0,l.xZ)(s)}
      max=${(0,l.xZ)(i)}
      step=${(0,l.xZ)(n)}
      key-step=${(0,l.xZ)(n)}
    >
      ${nt()}${ot()}
    </media-audio-gain-slider>
  `}function ht(){const{audioGains:t}=g(),e=t();return(0,i.cy)(e)?e[0]??0:e.min}function vt(){const{audioGains:t}=g(),e=t();return(0,i.cy)(e)?e[e.length-1]??300:e.max}function $t(){const{audioGains:t}=g(),e=t();return(0,i.cy)(e)?e[1]-e[0]||25:e.step}function gt(){const{remote:t}=(0,n.$c)(),{translations:e}=g(),s="Loop";return st({label:C(e,s),children:ut({label:s,storageKey:"vds-player::user-loop",onChange(e,s){t.userPrefersLoopChange(e,s)}})})}function yt(){const{playbackRates:t}=g(),e=t();return(0,i.cy)(e)?e[0]??0:e.min}function bt(){const{playbackRates:t}=g(),e=t();return(0,i.cy)(e)?e[e.length-1]??2:e.max}function ft(){const{playbackRates:t}=g(),e=t();return(0,i.cy)(e)?e[1]-e[0]||.25:e.step}function xt(){const{translations:t}=g(),e=C(t,"Speed"),s=yt,i=bt,n=ft;return a.qy`
    <media-speed-slider
      class="vds-speed-slider vds-slider"
      aria-label=${e}
      min=${(0,l.xZ)(s)}
      max=${(0,l.xZ)(i)}
      step=${(0,l.xZ)(n)}
      key-step=${(0,l.xZ)(n)}
    >
      ${nt()}${ot()}
    </media-speed-slider>
  `}function At(){const{remote:t,qualities:e}=(0,n.$c)(),{autoQuality:s,canSetQuality:o,qualities:a}=(0,n.nV)(),{translations:l}=g(),r="Auto";return(0,i.EW)((()=>!o()||a().length<=1))()?null:st({label:C(l,r),children:ut({label:r,checked:s,onChange(s,i){s?t.requestAutoQuality(i):t.changeQuality(e.selectedIndex,i)}})})}function _t(){const{translations:t}=g(),e=C(t,"Quality");return a.qy`
    <media-quality-slider class="vds-quality-slider vds-slider" aria-label=${e}>
      ${nt()}${ot()}
    </media-quality-slider>
  `}function wt({placement:t,portal:e,tooltip:s}){return(0,l.xZ)((()=>{const{viewType:o}=(0,n.nV)(),{translations:r,menuPortal:c,noModal:u,menuGroup:p,smallWhen:m}=g(),h=(0,i.EW)((()=>u()?(0,i.oA)(t):m()?null:(0,i.oA)(t))),v=(0,i.EW)((()=>m()||"bottom"!==p()||"video"!==o()?0:26)),$=(0,i.O)(!1);!function(){const{player:t}=(0,n.$c)();Y.add(t),(0,i.zp)((()=>Y.delete(t))),X||((0,i.P1)((()=>{for(const e of(0,i.YD)(F)){const s=F[e],n=j[e],o=`--media-user-${(0,i.BW)(e)}`,a=`vds-player:${(0,i.BW)(e)}`;(0,i.QZ)((()=>{const i=s(),l=i===n,r=l?null:J(t,e,i);for(const t of Y)t.el?.style.setProperty(o,r);l?localStorage.removeItem(a):localStorage.setItem(a,i)}))}}),null),X=!0)}();const y=a.qy`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${(0,l.xZ)(h)}
        offset=${(0,l.xZ)(v)}
      >
        ${(0,l.xZ)((()=>$()?[(0,l.xZ)((()=>{const{translations:t}=g();return a.qy`
      <media-menu class="vds-playback-menu vds-menu">
        ${it({label:()=>w(t,"Playback"),icon:"menu-playback"})}
        <media-menu-items class="vds-menu-items">
          ${[et({children:gt()}),(0,l.xZ)((()=>{const{translations:t}=g(),{canSetPlaybackRate:e,playbackRate:s}=(0,n.nV)();return e()?et({label:C(t,"Speed"),value:(0,l.xZ)((()=>1===s()?w(t,"Normal"):s()+"x")),children:[at({upIcon:"menu-speed-up",downIcon:"menu-speed-down",children:xt(),isMin:()=>s()===yt(),isMax:()=>s()===bt()})]}):null})),(0,l.xZ)((()=>{const{hideQualityBitrate:t,translations:e}=g(),{canSetQuality:s,qualities:o,quality:a}=(0,n.nV)(),r=(0,i.EW)((()=>!s()||o().length<=1)),c=(0,i.EW)((()=>(0,d.F)(o())));return r()?null:et({label:C(e,"Quality"),value:(0,l.xZ)((()=>{const s=a()?.height,i=t()?null:a()?.bitrate,n=i&&i>0?`${(i/1e6).toFixed(2)} Mbps`:null,o=w(e,"Auto");return s?`${s}p${n?` (${n})`:""}`:o})),children:[at({upIcon:"menu-quality-up",downIcon:"menu-quality-down",children:_t(),isMin:()=>c()[0]===a(),isMax:()=>c().at(-1)===a()}),At()]})}))]}
        </media-menu-items>
      </media-menu>
    `})),(0,l.xZ)((()=>{const{translations:t}=g();return a.qy`
      <media-menu class="vds-accessibility-menu vds-menu">
        ${it({label:()=>w(t,"Accessibility"),icon:"menu-accessibility"})}
        <media-menu-items class="vds-menu-items">
          ${[et({children:[pt(),(0,l.xZ)((()=>{const{translations:t,userPrefersKeyboardAnimations:e,noKeyboardAnimations:s}=g(),{viewType:o}=(0,n.nV)();if((0,i.EW)((()=>"video"!==o()||s()))())return null;const a="Keyboard Animations";return st({label:C(t,a),children:ut({label:a,defaultChecked:!0,storageKey:"vds-player::keyboard-animations",onChange(t){e.set(t)}})})}))]}),et({children:[(0,l.xZ)((()=>{const{hasCaptions:t}=(0,n.nV)(),{translations:e}=g();return t()?a.qy`
      <media-menu class="vds-font-menu vds-menu">
        ${it({label:()=>w(e,"Caption Styles")})}
        <media-menu-items class="vds-menu-items">
          ${[et({label:C(e,"Font"),children:[ct({label:"Family",option:D,type:"fontFamily"}),ct({label:"Size",option:lt,type:"fontSize"})]}),et({label:C(e,"Text"),children:[ct({label:"Color",option:U,type:"textColor"}),ct({label:"Shadow",option:Q,type:"textShadow"}),ct({label:"Opacity",option:rt,type:"textOpacity"})]}),et({label:C(e,"Text Background"),children:[ct({label:"Color",option:U,type:"textBg"}),ct({label:"Opacity",option:rt,type:"textBgOpacity"})]}),et({label:C(e,"Display Background"),children:[ct({label:"Color",option:U,type:"displayBg"}),ct({label:"Opacity",option:rt,type:"displayBgOpacity"})]}),et({children:[dt()]})]}
        </media-menu-items>
      </media-menu>
    `:null}))]})]}
        </media-menu-items>
      </media-menu>
    `})),(0,l.xZ)((()=>{const{noAudioGain:t,translations:e}=g(),{audioTracks:s,canSetAudioGain:o}=(0,n.nV)();return(0,i.EW)((()=>!(o()&&!t())&&s().length<=1))()?null:a.qy`
      <media-menu class="vds-audio-menu vds-menu">
        ${it({label:()=>w(e,"Audio"),icon:"menu-audio"})}
        <media-menu-items class="vds-menu-items">
          ${[(0,l.xZ)((()=>{const{translations:t}=g(),{audioTracks:e}=(0,n.nV)(),s=C(t,"Default");return(0,i.EW)((()=>e().length<=1))()?null:et({children:a.qy`
        <media-menu class="vds-audio-tracks-menu vds-menu">
          ${it({label:()=>w(t,"Track")})}
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
      `})})),(0,l.xZ)((()=>{const{noAudioGain:t,translations:e}=g(),{canSetAudioGain:s}=(0,n.nV)();if((0,i.EW)((()=>!s()||t()))())return null;const{audioGain:o}=(0,n.nV)();return et({label:C(e,"Boost"),value:(0,l.xZ)((()=>Math.round(100*((o()??1)-1))+"%")),children:[at({upIcon:"menu-audio-boost-up",downIcon:"menu-audio-boost-down",children:mt(),isMin:()=>100*((o()??1)-1)<=ht(),isMax:()=>100*((o()??1)-1)===vt()})]})}))]}
        </media-menu-items>
      </media-menu>
    `})),(0,l.xZ)((()=>{const{translations:t}=g(),{hasCaptions:e}=(0,n.nV)(),s=C(t,"Off");return e()?a.qy`
      <media-menu class="vds-captions-menu vds-menu">
        ${it({label:()=>w(t,"Captions"),icon:"menu-captions"})}
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
              ${q("menu-settings","vds-rotate-icon")}
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${(0,i.Tn)(s)?(0,l.xZ)(s):s}
          >
            ${C(r,"Settings")}
          </media-tooltip-content>
        </media-tooltip>
        ${e?L(c,y):y}
      </media-menu>
    `}))}function kt({orientation:t,tooltip:e}){return(0,l.xZ)((()=>{const{pointer:s,muted:r,canSetVolume:d}=(0,n.nV)();if("coarse"===s()&&!r())return null;if(!d())return E({tooltip:e});const u=(0,i.O)(void 0),p=(0,o._T)(u);return a.qy`
      <div class="vds-volume" ?data-active=${(0,l.xZ)(p)} ${h(u.set)}>
        ${E({tooltip:e})}
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
    `}))}function qt(){const t=(0,i.O)(void 0),e=(0,i.O)(0),{thumbnails:s,translations:n,sliderChaptersMinWidth:r,disableTimeSlider:d,seekStep:c,noScrubGesture:u}=g(),p=C(n,"Seek"),m=(0,l.xZ)(d),v=(0,l.xZ)((()=>e()<r())),$=(0,l.xZ)(s);return(0,o.wY)(t,(()=>{const s=t();s&&e.set(s.clientWidth)})),a.qy`
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
  `}function Zt(){return(0,l.xZ)((()=>{const{live:t}=(0,n.nV)();return t()?H():a.qy`
    <div class="vds-time-group">
      ${(0,l.xZ)((()=>{const{duration:t}=(0,n.nV)();return t()?[a.qy`<media-time class="vds-time" type="current"></media-time>`,a.qy`<div class="vds-time-divider">/</div>`,a.qy`<media-time class="vds-time" type="duration"></media-time>`]:null}))}
    </div>
  `}))}function Ct(){return(0,l.xZ)((()=>{const{textTracks:t}=(0,n.$c)(),{title:e,started:s}=(0,n.nV)(),o=(0,i.O)(null);return(0,r.q)(t,"chapters",o.set),!o()||!s()&&e()?a.qy`<media-title class="vds-chapter-title"></media-title>`:St()}))}function St(){return a.qy`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}class Tt extends l.UT{async Pf(){const t=(await s.e(1827).then(s.bind(s,1827))).icons,e={};for(const s of Object.keys(t))e[s]=(0,l.In)({name:s,paths:t[s]});return e}}var Mt=s(1065);s(580);let Et=class extends A{static{this.props={...super.props,when:({viewType:t})=>"audio"===t,smallWhen:({width:t})=>t<576}}};function Ot(){const t="top end";return[R({tooltip:"top",placement:t,portal:!0}),wt({tooltip:"top end",placement:t,portal:!0})]}class Pt extends((0,i.xr)(Mt.W,Et)){constructor(){super(...arguments),this.en=(0,i.O)(!1)}static{this.tagName="media-audio-layout"}static{this.attrs={smallWhen:{converter:t=>"never"!==t&&!!t}}}onSetup(){this.forwardKeepAlive=!1,this.a=(0,n.$c)(),this.classList.add("vds-audio-layout"),this.Fn()}onConnect(){_("audio",(()=>this.isMatch)),this.En()}render(){return(0,l.xZ)(this.Zm.bind(this))}Zm(){return this.isMatch?[k(),B(),a.qy`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[W({backward:!0,tooltip:"top start"}),M({tooltip:"top"}),W({tooltip:"top"}),(0,l.xZ)((()=>{let t=(0,i.O)(void 0),e=(0,i.O)(!1),s=(0,n.$c)(),{title:r,started:d,currentTime:c,ended:u}=(0,n.nV)(),{translations:p}=g(),m=(0,o.ZG)(t),v=()=>d()||c()>0;const $=()=>{const t=u()?"Replay":v()?"Continue":"Play";return`${w(p,t)}: ${r()}`};function y(){return a.qy`
        <span class="vds-title-text">
          ${(0,l.xZ)($)}${(0,l.xZ)((()=>v()?St():null))}
        </span>
      `}return(0,i.QZ)((()=>{m()&&document.activeElement===document.body&&s.player.el?.focus()})),(0,o.wY)(t,(function(){const s=t(),n=!!s&&!m()&&s.clientWidth<s.children[0].clientWidth;s&&(0,i.p1)(s,"vds-marquee",n),e.set(n)})),r()?a.qy`
          <span class="vds-title" title=${(0,l.xZ)($)} ${h(t.set)}>
            ${[y(),(0,l.xZ)((()=>e()&&!m()?y():null))]}
          </span>
        `:G()})),qt(),(0,l.xZ)((()=>{const{live:t,duration:e}=(0,n.nV)();return t()?H():e()?a.qy`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null})),kt({orientation:"vertical",tooltip:"top"}),O({tooltip:"top"}),N(),S({tooltip:"top"}),Ot()]}
        </media-controls-group>
      </media-controls>
    `]:null}En(){const{menuPortal:t}=g();(0,i.QZ)((()=>{if(!this.isMatch)return;const e=V(this,this.menuContainer,"vds-audio-layout",(()=>this.isSmallLayout)),s=e?[this,e]:[this];return(this.$props.customIcons()?new l.kj(s):new Tt(s)).connect(),t.set(e),()=>{e.remove(),t.set(null)}}))}Fn(){const{pointer:t}=this.a.$state;(0,i.QZ)((()=>{"coarse"===t()&&(0,i.QZ)(this.rn.bind(this))}))}rn(){this.en()?((0,i.k6)(this,"pointerdown",(t=>t.stopPropagation())),(0,i.k6)(window,"pointerdown",this.tn.bind(this))):(0,i.k6)(this,"pointerdown",this.sn.bind(this),{capture:!0})}sn(t){const{target:e}=t;(0,o.sb)(e)&&e.closest(".vds-time-slider")&&(t.stopImmediatePropagation(),this.setAttribute("data-scrubbing",""),this.en.set(!0))}tn(){this.en.set(!1),this.removeAttribute("data-scrubbing")}}var It=s(7727);const Wt=(0,p.u$)(class extends p.WL{constructor(){super(...arguments),this.key=a.s6}render(t,e){return this.key=t,e}update(t,[e,s]){return e!==this.key&&((0,It.mY)(t),this.key=e),s}});class Ht extends A{static{this.props={...super.props,when:({viewType:t})=>"video"===t,smallWhen:({width:t,height:e})=>t<576||e<380}}}function Nt(){return(0,l.xZ)((()=>{const t=(0,n.$c)(),{noKeyboardAnimations:e,userPrefersKeyboardAnimations:s}=g();if((0,i.EW)((()=>e()||!s()))())return null;const r=(0,i.O)(!1),{lastKeyboardAction:d}=t.$state;(0,i.QZ)((()=>{r.set(!!d());const t=setTimeout((()=>r.set(!1)),500);return()=>{r.set(!1),window.clearTimeout(t)}}));const c=(0,i.EW)((()=>{const t=d()?.action;return t&&r()?(0,i.BW)(t):null})),u=(0,i.EW)((()=>"vds-kb-action"+(r()?"":" hidden"))),p=(0,i.EW)(Bt),m=(0,i.EW)((()=>{const t=function(){const{$state:t}=(0,n.$c)(),e=t.lastKeyboardAction()?.action;switch(e){case"togglePaused":return t.paused()?"kb-pause-icon":"kb-play-icon";case"toggleMuted":return t.muted()||0===t.volume()?"kb-mute-icon":t.volume()>=.5?"kb-volume-up-icon":"kb-volume-down-icon";case"toggleFullscreen":return`kb-fs-${t.fullscreen()?"enter":"exit"}-icon`;case"togglePictureInPicture":return`kb-pip-${t.pictureInPicture()?"enter":"exit"}-icon`;case"toggleCaptions":return t.hasCaptions()?`kb-cc-${t.textTrack()?"on":"off"}-icon`:null;case"volumeUp":return"kb-volume-up-icon";case"volumeDown":return"kb-volume-down-icon";case"seekForward":return"kb-seek-forward-icon";case"seekBackward":return"kb-seek-backward-icon";default:return null}}();return t?(0,o.TL)(t):null}));return a.qy`
      <div class=${(0,l.xZ)(u)} data-action=${(0,l.xZ)(c)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${(0,l.xZ)(p)}</div>
        </div>
        ${(0,l.xZ)((()=>Wt(d(),function(){const t=m();return t?a.qy`
        <div class="vds-kb-bezel">
          <div class="vds-kb-icon">${t}</div>
        </div>
      `:null}())))}
      </div>
    `}))}function Bt(){const{$state:t}=(0,n.$c)(),e=t.lastKeyboardAction()?.action,s=t.audioGain()??1;switch(e){case"toggleMuted":return t.muted()?"0%":Gt(t.volume(),s);case"volumeUp":case"volumeDown":return Gt(t.volume(),s);default:return""}}function Gt(t,e){return`${Math.round(t*e*100)}%`}function Lt(){return a.qy`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function Vt(){const{menuGroup:t,smallWhen:e}=g(),s=()=>"top"===t()||e()?"bottom":"top",n=(0,i.EW)((()=>`${s()} ${"top"===t()?"end":"center"}`)),o=(0,i.EW)((()=>`${s()} end`));return[R({tooltip:n,placement:o,portal:!0}),wt({tooltip:n,placement:o,portal:!0})]}function Rt(){return(0,l.xZ)((()=>{const{noGestures:t}=g();return t()?null:a.qy`
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
    `}))}class Kt extends((0,i.xr)(Mt.W,Ht)){static{this.tagName="media-video-layout"}static{this.attrs={smallWhen:{converter:t=>"never"!==t&&!!t}}}onSetup(){this.forwardKeepAlive=!1,this.a=(0,n.$c)(),this.classList.add("vds-video-layout")}onConnect(){_("video",(()=>this.isMatch)),this.En()}render(){return(0,l.xZ)(this.Zm.bind(this))}En(){const{menuPortal:t}=g();(0,i.QZ)((()=>{if(!this.isMatch)return;const e=V(this,this.menuContainer,"vds-video-layout",(()=>this.isSmallLayout)),s=e?[this,e]:[this];return(this.$props.customIcons()?new l.kj(s):new Tt(s)).connect(),t.set(e),()=>{e.remove(),t.set(null)}}))}Zm(){const{load:t}=this.a.$props,{canLoad:e,streamType:s,nativeControls:i}=this.a.$state;return!i()&&this.isMatch?"play"!==t()||e()?"unknown"===s()?Lt():this.isSmallLayout?[k(),Rt(),Lt(),B(),Nt(),a.qy`<div class="vds-scrim"></div>`,a.qy`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[S({tooltip:"top start"}),T({tooltip:"bottom start"}),G(),O({tooltip:"bottom"}),N(),Vt(),kt({orientation:"vertical",tooltip:"bottom end"})]}
        </media-controls-group>

        ${G()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[G(),M({tooltip:"top"}),G()]}
        </media-controls-group>

        ${G()}

        <media-controls-group class="vds-controls-group">
          ${[Zt(),Ct(),I({tooltip:"top end"})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${qt()}
        </media-controls-group>
      </media-controls>
    `,(0,l.xZ)((()=>{const{duration:t}=(0,n.nV)();return 0===t()?null:a.qy`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `}))]:[k(),Rt(),Lt(),Nt(),B(),a.qy`<div class="vds-scrim"></div>`,a.qy`
      <media-controls class="vds-controls">
        ${[a.qy`
    <media-controls-group class="vds-controls-group">
      ${(0,l.xZ)((()=>{const{menuGroup:t}=g();return"top"===t()?[G(),Vt()]:null}))}
    </media-controls-group>
  `,G(),a.qy`<media-controls-group class="vds-controls-group"></media-controls-group>`,G(),a.qy`
            <media-controls-group class="vds-controls-group">
              ${qt()}
            </media-controls-group>
          `,a.qy`
            <media-controls-group class="vds-controls-group">
              ${[M({tooltip:"top start"}),kt({orientation:"horizontal",tooltip:"top"}),Zt(),Ct(),O({tooltip:"top"}),(0,l.xZ)((()=>{const{menuGroup:t}=g();return"bottom"===t()?Vt():null})),S({tooltip:"top"}),T({tooltip:"top"}),N(),P(),I({tooltip:"top end"})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]:a.qy`
    <div class="vds-load-container">
      ${[Lt(),M({tooltip:"top"})]}
    </div>
  `:null}}(0,i.Xq)(Pt),(0,i.Xq)(Kt)}}]);