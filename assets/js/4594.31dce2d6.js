/*! For license information please see 4594.31dce2d6.js.LICENSE.txt */
"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[4594],{5981:(t,e,s)=>{var n;s.d(e,{A:()=>k,D:()=>R,a:()=>ot,c:()=>X,e:()=>W,i:()=>at,l:()=>J,n:()=>et,o:()=>nt,t:()=>q,x:()=>A});const i=window,o=i.trustedTypes,a=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,l="$lit$",r=`lit$${(Math.random()+"").slice(9)}$`,d="?"+r,c=`<${d}>`,u=document,p=()=>u.createComment(""),m=t=>null===t||"object"!=typeof t&&"function"!=typeof t,v=Array.isArray,h="[ \t\n\f\r]",$=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,b=/-->/g,f=/>/g,_=RegExp(`>|${h}(?:([^\\s"'>=/]+)(${h}*=${h}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,y=/"/g,x=/^(?:script|style|textarea|title)$/i,A=(t,...e)=>({_$litType$:1,strings:t,values:e}),w=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),C=new WeakMap,S=u.createTreeWalker(u,129,null,!1);function T(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==a?a.createHTML(e):e}const M=(t,e)=>{const s=t.length-1,n=[];let i,o=2===e?"<svg>":"",a=$;for(let e=0;e<s;e++){const s=t[e];let d,u,p=-1,m=0;for(;m<s.length&&(a.lastIndex=m,u=a.exec(s),null!==u);)m=a.lastIndex,a===$?"!--"===u[1]?a=b:void 0!==u[1]?a=f:void 0!==u[2]?(x.test(u[2])&&(i=RegExp("</"+u[2],"g")),a=_):void 0!==u[3]&&(a=_):a===_?">"===u[0]?(a=null!=i?i:$,p=-1):void 0===u[1]?p=-2:(p=a.lastIndex-u[2].length,d=u[1],a=void 0===u[3]?_:'"'===u[3]?y:g):a===y||a===g?a=_:a===b||a===f?a=$:(a=_,i=void 0);const v=a===_&&t[e+1].startsWith("/>")?" ":"";o+=a===$?s+c:p>=0?(n.push(d),s.slice(0,p)+l+s.slice(p)+r+v):s+r+(-2===p?(n.push(void 0),e):v)}return[T(t,o+(t[s]||"<?>")+(2===e?"</svg>":"")),n]};class P{constructor({strings:t,_$litType$:e},s){let n;this.parts=[];let i=0,a=0;const c=t.length-1,u=this.parts,[m,v]=M(t,e);if(this.el=P.createElement(m,s),S.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=S.nextNode())&&u.length<c;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith(l)||e.startsWith(r)){const s=v[a++];if(t.push(e),void 0!==s){const t=n.getAttribute(s.toLowerCase()+l).split(r),e=/([.?@])?(.*)/.exec(s);u.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?E:"?"===e[1]?G:"@"===e[1]?D:H})}else u.push({type:6,index:i})}for(const e of t)n.removeAttribute(e)}if(x.test(n.tagName)){const t=n.textContent.split(r),e=t.length-1;if(e>0){n.textContent=o?o.emptyScript:"";for(let s=0;s<e;s++)n.append(t[s],p()),S.nextNode(),u.push({type:2,index:++i});n.append(t[e],p())}}}else if(8===n.nodeType)if(n.data===d)u.push({type:2,index:i});else{let t=-1;for(;-1!==(t=n.data.indexOf(r,t+1));)u.push({type:7,index:i}),t+=r.length-1}i++}}static createElement(t,e){const s=u.createElement("template");return s.innerHTML=t,s}}function N(t,e,s=t,n){var i,o,a,l;if(e===w)return e;let r=void 0!==n?null===(i=s._$Co)||void 0===i?void 0:i[n]:s._$Cl;const d=m(e)?void 0:e._$litDirective$;return(null==r?void 0:r.constructor)!==d&&(null===(o=null==r?void 0:r._$AO)||void 0===o||o.call(r,!1),void 0===d?r=void 0:(r=new d(t),r._$AT(t,s,n)),void 0!==n?(null!==(a=(l=s)._$Co)&&void 0!==a?a:l._$Co=[])[n]=r:s._$Cl=r),void 0!==r&&(e=N(t,r._$AS(t,e.values),r,n)),e}class I{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:n}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:u).importNode(s,!0);S.currentNode=i;let o=S.nextNode(),a=0,l=0,r=n[0];for(;void 0!==r;){if(a===r.index){let e;2===r.type?e=new V(o,o.nextSibling,this,t):1===r.type?e=new r.ctor(o,r.name,r.strings,this,t):6===r.type&&(e=new O(o,this,t)),this._$AV.push(e),r=n[++l]}a!==(null==r?void 0:r.index)&&(o=S.nextNode(),a++)}return S.currentNode=u,i}v(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class V{constructor(t,e,s,n){var i;this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=n,this._$Cp=null===(i=null==n?void 0:n.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),m(t)?t===k||null==t||""===t?(this._$AH!==k&&this._$AR(),this._$AH=k):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>v(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==k&&m(this._$AH)?this._$AA.nextSibling.data=t:this.$(u.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:n}=t,i="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=P.createElement(T(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.v(s);else{const t=new I(i,this),e=t.u(this.options);t.v(s),this.$(e),this._$AH=t}}_$AC(t){let e=C.get(t.strings);return void 0===e&&C.set(t.strings,e=new P(t)),e}T(t){v(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,n=0;for(const i of t)n===e.length?e.push(s=new V(this.k(p()),this.k(p()),this,this.options)):s=e[n],s._$AI(i),n++;n<e.length&&(this._$AR(s&&s._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class H{constructor(t,e,s,n,i){this.type=1,this._$AH=k,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=k}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,n){const i=this.strings;let o=!1;if(void 0===i)t=N(this,t,e,0),o=!m(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const n=t;let a,l;for(t=i[0],a=0;a<i.length-1;a++)l=N(this,n[s+a],e,a),l===w&&(l=this._$AH[a]),o||(o=!m(l)||l!==this._$AH[a]),l===k?t=k:t!==k&&(t+=(null!=l?l:"")+i[a+1]),this._$AH[a]=l}o&&!n&&this.j(t)}j(t){t===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class E extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===k?void 0:t}}const L=o?o.emptyScript:"";class G extends H{constructor(){super(...arguments),this.type=4}j(t){t&&t!==k?this.element.setAttribute(this.name,L):this.element.removeAttribute(this.name)}}class D extends H{constructor(t,e,s,n,i){super(t,e,s,n,i),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=N(this,t,e,0))&&void 0!==s?s:k)===w)return;const n=this._$AH,i=t===k&&n!==k||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==k&&(n===k||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class O{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const B=i.litHtmlPolyfillSupport;null==B||B(P,V),(null!==(n=i.litHtmlVersions)&&void 0!==n?n:i.litHtmlVersions=[]).push("2.8.0");const R=(t,e,s)=>{var n,i;const o=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:e;let a=o._$litPart$;if(void 0===a){const t=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:null;o._$litPart$=a=new V(e.insertBefore(p(),t),t,void 0,null!=s?s:{})}return a._$AI(t),a},j={},q={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},W=t=>(...e)=>({_$litDirective$:t,values:e});let U=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const K=(t,e)=>{var s,n;const i=t._$AN;if(void 0===i)return!1;for(const t of i)null===(n=(s=t)._$AO)||void 0===n||n.call(s,e,!1),K(t,e);return!0},z=t=>{let e,s;do{if(void 0===(e=t._$AM))break;s=e._$AN,s.delete(t),t=e}while(0===(null==s?void 0:s.size))},F=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),Z(e)}};function Q(t){void 0!==this._$AN?(z(this),this._$AM=t,F(this)):this._$AM=t}function Y(t,e=!1,s=0){const n=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(e)if(Array.isArray(n))for(let t=s;t<n.length;t++)K(n[t],!1),z(n[t]);else null!=n&&(K(n,!1),z(n));else K(this,t)}const Z=t=>{var e,s,n,i;t.type==q.CHILD&&(null!==(e=(n=t)._$AP)&&void 0!==e||(n._$AP=Y),null!==(s=(i=t)._$AQ)&&void 0!==s||(i._$AQ=Q))};class X extends U{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),F(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,n;t!==this.isConnected&&(this.isConnected=t,t?null===(s=this.reconnected)||void 0===s||s.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),e&&(K(this,t),z(this))}setValue(t){if((t=>void 0===this._$Ct.strings)())this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const J=t=>null!=t?t:k,tt=new WeakMap,et=W(class extends X{render(t){return k}update(t,[e]){var s;const n=e!==this.G;return n&&void 0!==this.G&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=e,this.dt=null===(s=t.options)||void 0===s?void 0:s.host,this.ot(this.lt=t.element)),k}ot(t){var e;if("function"==typeof this.G){const s=null!==(e=this.dt)&&void 0!==e?e:globalThis;let n=tt.get(s);void 0===n&&(n=new WeakMap,tt.set(s,n)),void 0!==n.get(this.G)&&this.G.call(this.dt,void 0),n.set(this.G,t),void 0!==t&&this.G.call(this.dt,t)}else this.G.value=t}get rt(){var t,e,s;return"function"==typeof this.G?null===(e=tt.get(null!==(t=this.dt)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.G):null===(s=this.G)||void 0===s?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});class st extends U{constructor(t){if(super(t),this.et=k,t.type!==q.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===k||null==t)return this.ft=void 0,this.et=t;if(t===w)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}st.directiveName="unsafeHTML",st.resultType=1;const nt=W(st);class it extends st{}it.directiveName="unsafeSVG",it.resultType=2;const ot=W(it),at=W(class extends U{constructor(){super(...arguments),this.key=k}render(t,e){return this.key=t,e}update(t,[e,s]){return e!==this.key&&(((t,e=j)=>{t._$AH=e})(t),this.key=e),s}})},4170:(t,e,s)=>{s.d(e,{L:()=>i});var n=s(5981);class i extends HTMLElement{constructor(){super(...arguments),this.rootPart=null}connectedCallback(){this.rootPart=(0,n.D)(this.render(),this,{renderBefore:this.firstChild}),this.rootPart.setConnected(!0)}disconnectedCallback(){this.rootPart?.setConnected(!1),this.rootPart=null}}},4594:(t,e,s)=>{s.r(e);var n=s(8080),i=s(5981),o=s(4309),a=s(7927);class l extends i.c{constructor(t){super(t),this.h=null,this.w=!1,this.ra=null,this.w=t.type===i.t.ATTRIBUTE||t.type===i.t.BOOLEAN_ATTRIBUTE}render(t){return t!==this.h&&(this.disconnected(),this.h=t,this.isConnected&&this.Si()),this.h?this.el((0,n.p)(this.h)):i.A}reconnected(){this.Si()}disconnected(){this.ra?.(),this.ra=null}Si(){this.h&&(this.ra=(0,n.g)(this.o.bind(this)))}el(t){return this.w?(0,i.l)(t):t}hl(t){this.setValue(this.el(t))}o(){this.hl(this.h?.())}}function r(t){return(0,i.e)(l)((0,n.o)(t))}class d{constructor(t,e){this.oo=t,this.Ca=e,this.elements=new Set,this.vf=(0,n.I)(this.ea.bind(this))}connect(){this.ea();const t=new MutationObserver(this.vf);for(const e of this.oo)t.observe(e,{childList:!0,subtree:!0});(0,n.q)((()=>t.disconnect())),(0,n.q)(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(t,e){(0,n.y)(t)?(e.textContent="",e.append(t)):(0,i.D)(t,e),e.style.display||(e.style.display="contents");const s=e.firstElementChild;if(!s)return;const o=e.getAttribute("data-class");o&&s.classList.add(...o.split(" "))}ea(t){if(t&&!t.some((t=>t.addedNodes.length)))return;let e=!1,s=this.oo.flatMap((t=>[...t.querySelectorAll("slot")]));for(const t of s)t.hasAttribute("name")&&!this.elements.has(t)&&(this.elements.add(t),e=!0);e&&this.Ca(this.elements)}}let c=0,u="data-slot-id";class p{constructor(t){this.oo=t,this.vf=(0,n.I)(this.ea.bind(this)),this.slots=new d(t,this.ea.bind(this))}connect(){this.slots.connect(),this.ea();const t=new MutationObserver(this.vf);for(const e of this.oo)t.observe(e,{childList:!0});(0,n.q)((()=>t.disconnect()))}ea(){for(const t of this.oo)for(const e of t.children){if(1!==e.nodeType)continue;const t=e.getAttribute("slot");if(!t)continue;e.style.display="none";let s=e.getAttribute(u);s||e.setAttribute(u,s=++c+"");for(const n of this.slots.elements){if(n.getAttribute("name")!==t||n.getAttribute(u)===s)continue;const i=document.importNode(e,!0);t.includes("-icon")&&i.classList.add("vds-icon"),i.style.display="",i.removeAttribute("slot"),this.slots.assign(i,n),n.setAttribute(u,s)}}}}function m({name:t,class:e,state:s,paths:o,viewBox:a="0 0 32 32"}){return i.x`<svg
    class="${"vds-icon"+(e?` ${e}`:"")}"
    viewBox="${a}"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${(0,i.l)(t??s)}
  >
    ${(0,n.i)(o)?(0,i.a)(o):r(o)}
  </svg>`}class v{constructor(t){this.oo=t,this.Zj={},this.bk=!1,this.slots=new d(t,this.ck.bind(this))}connect(){this.slots.connect(),(0,n.q)(this.disconnect.bind(this))}load(){this.xe().then((t=>{this.Zj=t,this.bk=!0,this.ck()}))}disconnect(){for(const{slot:t}of this.dk())t.textContent=""}*dk(){for(const t of Object.keys(this.Zj)){const e=`${t}-icon`;for(const s of this.slots.elements)s.name===e&&(yield{icon:this.Zj[t],slot:s})}}ck(){if(this.bk)for(const{icon:t,slot:e}of this.dk())this.slots.assign(t,e)}}class h extends v{connect(){super.connect();const{player:t}=(0,o.u)();if(!t.el)return;let e,s=new IntersectionObserver((t=>{t[0]?.isIntersecting&&(e?.(),e=void 0,this.load())}));s.observe(t.el),e=(0,n.q)((()=>s.disconnect()))}}var $=s(6817),b=s(613),f=s(8327);const _=(0,n.W)();function g(){return(0,n.u)(_)}const y={colorScheme:"system",download:null,customIcons:!1,disableTimeSlider:!1,menuGroup:"bottom",noAudioGain:!1,noGestures:!1,noKeyboardAnimations:!1,noModal:!1,noScrubGesture:!1,playbackRates:{min:0,max:2,step:.25},audioGains:{min:0,max:300,step:25},seekStep:10,sliderChaptersMinWidth:325,hideQualityBitrate:!1,smallWhen:!1,thumbnails:null,translations:null,when:!1};var x=Object.defineProperty,A=Object.getOwnPropertyDescriptor,w=(t,e,s,n)=>{for(var i,o=n>1?void 0:n?A(e,s):e,a=t.length-1;a>=0;a--)(i=t[a])&&(o=(n?i(e,s,o):i(o))||o);return n&&o&&x(e,s,o),o};class k extends n.C{constructor(){super(...arguments),this._m=(0,n.o)((()=>{const t=this.$props.when();return this.$m(t)})),this.Ym=(0,n.o)((()=>{const t=this.$props.smallWhen();return this.$m(t)})),this.menuContainer=null}static{this.props=y}get isMatch(){return this._m()}get isSmallLayout(){return this.Ym()}onSetup(){this.a=(0,o.u)(),this.setAttributes({"data-match":this._m,"data-sm":()=>this.Ym()?"":null,"data-lg":()=>this.Ym()?null:"","data-size":()=>this.Ym()?"sm":"lg","data-no-scrub-gesture":this.$props.noScrubGesture});const t=this;(0,n.X)(_,{...this.$props,when:this._m,smallWhen:this.Ym,userPrefersAnnouncements:(0,n.f)(!0),userPrefersKeyboardAnimations:(0,n.f)(!0),get menuContainer(){return t.menuContainer}})}onAttach(t){(0,a.w)(t,this.$props.colorScheme)}$m(t){return"never"!==t&&((0,n.b)(t)?t:(0,n.o)((()=>t(this.a.player.state)))())}}function C(t,e){(0,n.g)((()=>{const{player:s}=(0,o.u)(),i=s.el;return i&&(0,n.s)(i,"data-layout",e()&&t),()=>i?.removeAttribute("data-layout")}))}function S(t,e){return t()?.[e]??e}function T(){return r((()=>{const{translations:t,userPrefersAnnouncements:e}=g();return e()?i.x`<media-announcer .translations=${r(t)}></media-announcer>`:null}))}function M(t,e=""){return i.x`<slot
    name=${`${t}-icon`}
    data-class=${`vds-icon vds-${t}-icon${e?` ${e}`:""}`}
  ></slot>`}function P(t){return t.map((t=>M(t)))}function N(t,e){return r((()=>S(t,e)))}function I({tooltip:t}){const{translations:e}=g(),{remotePlaybackState:s}=(0,o.b)(),a=r((()=>`${S(e,"AirPlay")} ${(0,n.a0)(s())}`)),l=N(e,"AirPlay");return i.x`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${a}>
          ${M("airplay")}
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-airplay-tooltip-text">${l}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function V({tooltip:t}){const{translations:e}=g(),{remotePlaybackState:s}=(0,o.b)(),a=r((()=>`${S(e,"Google Cast")} ${(0,n.a0)(s())}`)),l=N(e,"Google Cast");return i.x`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${a}>
          ${M("google-cast")}
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-google-cast-tooltip-text">${l}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function H({tooltip:t}){const{translations:e}=g(),s=N(e,"Play"),n=N(e,"Pause");return i.x`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button
          class="vds-play-button vds-button"
          aria-label=${N(e,"Play")}
        >
          ${P(["play","pause","replay"])}
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-play-tooltip-text">${s}</span>
        <span class="vds-pause-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function E({tooltip:t,ref:e=n.a1}){const{translations:s}=g(),o=N(s,"Mute"),a=N(s,"Unmute");return i.x`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${N(s,"Mute")}
          ${(0,i.n)(e)}
        >
          ${P(["mute","volume-low","volume-high"])}
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-mute-tooltip-text">${a}</span>
        <span class="vds-unmute-tooltip-text">${o}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function L({tooltip:t}){const{translations:e}=g(),s=N(e,"Closed-Captions On"),n=N(e,"Closed-Captions Off");return i.x`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button
          class="vds-caption-button vds-button"
          aria-label=${N(e,"Captions")}
        >
          ${P(["cc-on","cc-off"])}
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-cc-on-tooltip-text">${n}</span>
        <span class="vds-cc-off-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function G(){const{translations:t}=g(),e=N(t,"Enter PiP"),s=N(t,"Exit PiP");return i.x`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button
          class="vds-pip-button vds-button"
          aria-label=${N(t,"PiP")}
        >
          ${P(["pip-enter","pip-exit"])}
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${e}</span>
        <span class="vds-pip-exit-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function D({tooltip:t}){const{translations:e}=g(),s=N(e,"Enter Fullscreen"),n=N(e,"Exit Fullscreen");return i.x`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button
          class="vds-fullscreen-button vds-button"
          aria-label=${N(e,"Fullscreen")}
        >
          ${P(["fs-enter","fs-exit"])}
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-fs-enter-tooltip-text">${s}</span>
        <span class="vds-fs-exit-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function O({backward:t,tooltip:e}){const{translations:s,seekStep:n}=g(),o=t?"Seek Backward":"Seek Forward",a=N(s,o);return i.x`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${r((()=>(t?-1:1)*n()))}
          aria-label=${a}
        >
          ${M(t?"seek-backward":"seek-forward")}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        ${N(s,o)}
      </media-tooltip-content>
    </media-tooltip>
  `}function B(){const{translations:t}=g(),{live:e}=(0,o.b)(),s=N(t,"Skip To Live"),n=N(t,"LIVE");return e()?i.x`
        <media-live-button class="vds-live-button" aria-label=${s}>
          <span class="vds-live-button-text">${n}</span>
        </media-live-button>
      `:null}function R(){return r((()=>{const{download:t,translations:e}=g(),s=t();if((0,n.Z)(s))return null;const{source:a,title:l}=(0,o.b)(),r=a(),d=(0,f.g)({title:l(),src:r,download:s});return d?i.x`
          <media-tooltip class="vds-download-tooltip vds-tooltip">
            <media-tooltip-trigger>
              <a
                role="button"
                class="vds-download-button vds-button"
                aria-label=${N(e,"Download")}
                href=${d.url+`?download=${d.name}`}
                download=${d.name}
                target="_blank"
              >
                <slot name="download-icon" data-class="vds-icon" />
              </a>
            </media-tooltip-trigger>
            <media-tooltip-content class="vds-tooltip-content" placement="top">
              ${N(e,"Download")}
            </media-tooltip-content>
          </media-tooltip>
        `:null}))}function j(){const{translations:t}=g();return i.x`
    <media-captions
      class="vds-captions"
      .exampleText=${N(t,"Captions look like this")}
    ></media-captions>
  `}function q(){return i.x`<div class="vds-controls-spacer"></div>`}function W(t,e){return i.x`
    <media-menu-portal .container=${t} disabled="fullscreen">
      ${e}
    </media-menu-portal>
  `}function U(t,e){let s=document.querySelector(`body > .${t}`);s||(s=document.createElement("div"),s.style.display="contents",s.classList.add(t),document.body.append(s));const{viewType:i}=(0,o.b)(),{colorScheme:l}=g();return(0,n.g)((()=>{if(!s)return;const t=e();(0,n.s)(s,"data-view-type",i()),(0,n.s)(s,"data-sm",t),(0,n.s)(s,"data-lg",!t),(0,n.s)(s,"data-size",t?"sm":"lg")})),(0,a.w)(s,l),s}function K({placement:t,tooltip:e,portal:s}){const{textTracks:a}=(0,o.u)(),{viewType:l,clipStartTime:d,clipEndTime:c}=(0,o.b)(),{translations:u,thumbnails:p,menuContainer:m,noModal:v,menuGroup:h,smallWhen:b}=g();if((0,n.o)((()=>{const t=d(),e=c()||1/0,s=(0,n.f)(null);(0,$.w)(a,"chapters",s.set);const i=s()?.cues.filter((s=>s.startTime<=e&&s.endTime>=t));return!i?.length}))())return null;const f=(0,n.o)((()=>v()?(0,n.a2)(t):b()?null:(0,n.a2)(t))),_=(0,n.o)((()=>b()||"bottom"!==h()||"video"!==l()?0:26)),y=(0,n.f)(!1),x=i.x`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${r(f)}
      offset=${r(_)}
    >
      ${r((()=>y()?i.x`
          <media-chapters-radio-group
            class="vds-chapters-radio-group vds-radio-group"
            .thumbnails=${r(p)}
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
  `;return i.x`
    <media-menu class="vds-chapters-menu vds-menu" @open=${function(){y.set(!0)}} @close=${function(){y.set(!1)}}>
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${N(u,"Chapters")}
          >
            ${M("menu-chapters")}
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${(0,n.w)(e)?r(e):e}
        >
          ${N(u,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${s?W(m,x):x}
    </media-menu>
  `}function z(t){const{style:e}=new Option;return e.color=t,e.color.match(/\((.*?)\)/)[1].replace(/,/g," ")}w([n.$],k.prototype,"menuContainer",2),w([n.$],k.prototype,"isMatch",1),w([n.$],k.prototype,"isSmallLayout",1);let F=0;function Q({label:t="",value:e="",children:s}){if(!t)return i.x`
      <div class="vds-menu-section">
        <div class="vds-menu-section-body">${s}</div>
      </div>
    `;const n="vds-menu-section-"+ ++F;return i.x`
    <section class="vds-menu-section" role="group" aria-labelledby=${n}>
      <div class="vds-menu-section-title">
        <header id=${n}>${t}</header>
        ${e?i.x`<div class="vds-menu-section-value">${e}</div>`:null}
      </div>
      <div class="vds-menu-section-body">${s}</div>
    </section>
  `}function Y({label:t,children:e}){return i.x`
    <div class="vds-menu-item">
      <div class="vds-menu-item-label">${t}</div>
      ${e}
    </div>
  `}function Z({label:t,icon:e,hint:s}){return i.x`
    <media-menu-button class="vds-menu-item">
      ${M("menu-arrow-left","vds-menu-close-icon")}
      ${e?M(e,"vds-menu-item-icon"):null}
      <span class="vds-menu-item-label">${r(t)}</span>
      <span class="vds-menu-item-hint" data-part="hint">${s?r(s):null} </span>
      ${M("menu-arrow-right","vds-menu-open-icon")}
    </media-menu-button>
  `}function X(){return i.x`
    <div class="vds-slider-track"></div>
    <div class="vds-slider-track-fill vds-slider-track"></div>
    <div class="vds-slider-thumb"></div>
  `}function J(){return i.x`
    <media-slider-steps class="vds-slider-steps">
      <template>
        <div class="vds-slider-step"></div>
      </template>
    </media-slider-steps>
  `}function tt({label:t=null,value:e=null,upIcon:s="",downIcon:n="",children:o,isMin:a,isMax:l}){const d=t||e,c=[n?M(n,"down"):null,o,s?M(s,"up"):null];return i.x`
    <div
      class=${"vds-menu-item vds-menu-slider-item"+(d?" group":"")}
      data-min=${r((()=>a()?"":null))}
      data-max=${r((()=>l()?"":null))}
    >
      ${d?i.x`
            <div class="vds-menu-slider-title">
              ${[t?i.x`<div>${t}</div>`:null,e?i.x`<div>${e}</div>`:null]}
            </div>
            <div class="vds-menu-slider-body">${c}</div>
          `:c}
    </div>
  `}const et={type:"color"},st={type:"radio",values:{"Monospaced Serif":"mono-serif","Proportional Serif":"pro-serif","Monospaced Sans-Serif":"mono-sans","Proportional Sans-Serif":"pro-sans",Casual:"casual",Cursive:"cursive","Small Capitals":"capitals"}},nt={type:"slider",min:0,max:400,step:25,upIcon:"menu-font-size-up",downIcon:"menu-font-size-down"},it={type:"slider",min:0,max:100,step:5,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"},ot={type:"radio",values:["None","Drop Shadow","Raised","Depressed","Outline"]},at=(0,n.W)();function lt(){const{translations:t}=g(),e=(0,n.u)(at);return i.x`
    <button class="vds-menu-item" role="menuitem" @click=${function(){e.all.forEach((t=>t()))}}>
      <span class="vds-menu-item-label">${r((()=>S(t,"Reset")))}</span>
    </button>
  `}function rt({group:t,label:e,option:s,defaultValue:a,cssVarName:l,getCssVarValue:d}){const{player:c}=(0,o.u)(),{translations:u}=g(),p=(0,n.u)(at),m=`${t}-${e.toLowerCase()}`,v=(0,n.f)(a),h=()=>S(u,e),$=localStorage.getItem(`vds-player:${m}`);function b(t){v.set(t),localStorage.setItem(`vds-player:${m}`,t),c.el?.style.setProperty(`--media-user-${l}`,d?.(t,c)??t)}function f(){b(a),_()}function _(){c.dispatchEvent(new Event("vds-font-change"))}if($&&b($),p.all.add(f),(0,n.q)((()=>{p.all.delete(f)})),"color"===s.type){let t=function(t){b(t.target.value),_()};return Y({label:r(h),children:i.x`
        <input
          class="vds-color-picker"
          type="color"
          .value=${r(v)}
          @input=${t}
        />
      `})}if("slider"===s.type){let t=function(t){b(t.detail+"%"),_()};const{min:e,max:n,step:o,upIcon:a,downIcon:l}=s;return tt({label:r(h),value:r(v),upIcon:a,downIcon:l,isMin:()=>v()===e+"%",isMax:()=>v()===n+"%",children:i.x`
        <media-slider
          class="vds-slider"
          min=${e}
          max=${n}
          step=${o}
          key-step=${o}
          .value=${r((()=>parseInt(v())))}
          aria-label=${r(h)}
          @value-change=${t}
          @drag-value-change=${t}
        >
          ${X()}${J()}
        </media-slider>
      `})}const y=(x=s.values,(0,n.v)(x)?x.map((t=>({label:t,value:t.toLowerCase()}))):Object.keys(x).map((t=>({label:t,value:x[t]}))));var x;return i.x`
    <media-menu class=${`vds-${m}-menu vds-menu`}>
      ${Z({label:h,hint:()=>{const t=v(),e=y.find((e=>e.value===t))?.label||"";return S(u,(0,n.i)(e)?e:e())}})}
      <media-menu-items class="vds-menu-items">
        ${function({value:t=null,options:e,hideLabel:s=!1,children:o=null,onChange:a=null}){function l(t){const{value:e,label:a}=t;return i.x`
      <media-radio class="vds-radio" value=${e}>
        ${M("menu-radio-check")}
        ${s?null:i.x`
              <span class="vds-radio-label" data-part="label">
                ${(0,n.i)(a)?a:r(a)}
              </span>
            `}
        ${(0,n.w)(o)?o(t):o}
      </media-radio>
    `}return i.x`
    <media-radio-group
      class="vds-radio-group"
      value=${(0,n.i)(t)?t:t?r(t):""}
      @change=${a}
    >
      ${(0,n.v)(e)?e.map(l):r((()=>e().map(l)))}
    </media-radio-group>
  `}({value:v,options:y,onChange({detail:t}){b(t),_()}})}
      </media-menu-items>
    </media-menu>
  `}function dt(t){return(parseInt(t)/100).toString()}function ct(t){switch(t){case"drop shadow":return"rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px";case"raised":return"rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px";case"depressed":return"rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px";case"outline":return"rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px";default:return""}}function ut({label:t,checked:e,defaultChecked:s=!1,storageKey:o,onChange:a}){const{translations:l}=g(),d=o?localStorage.getItem(o):null,c=(0,n.f)(!!(d??s)),u=(0,n.f)(!1),p=r((0,b.aw)(c)),m=N(l,t);function v(t){1!==t?.button&&(c.set((t=>!t)),o&&localStorage.setItem(o,c()?"1":""),a(c(),t),u.set(!1))}return o&&a((0,n.p)(c)),e&&(0,n.g)((()=>{c.set(e())})),i.x`
    <div
      class="vds-menu-checkbox"
      role="menuitemcheckbox"
      tabindex="0"
      aria-label=${m}
      aria-checked=${p}
      data-active=${r((()=>u()?"":null))}
      @pointerup=${v}
      @pointerdown=${function(t){0===t.button&&u.set(!0)}}
      @keydown=${function(t){(0,n.z)(t)&&v()}}
    ></div>
  `}function pt(){const{userPrefersAnnouncements:t,translations:e}=g(),s="Announcements";return Y({label:N(e,s),children:ut({label:s,storageKey:"vds-player::announcements",onChange(e){t.set(e)}})})}function mt(){const{translations:t}=g(),e=N(t,"Boost"),s=vt,n=ht,o=$t;return i.x`
    <media-audio-gain-slider
      class="vds-audio-gain-slider vds-slider"
      aria-label=${e}
      min=${r(s)}
      max=${r(n)}
      step=${r(o)}
      key-step=${r(o)}
    >
      ${X()}${J()}
    </media-audio-gain-slider>
  `}function vt(){const{audioGains:t}=g(),e=t();return(0,n.v)(e)?e[0]??0:e.min}function ht(){const{audioGains:t}=g(),e=t();return(0,n.v)(e)?e[e.length-1]??300:e.max}function $t(){const{audioGains:t}=g(),e=t();return(0,n.v)(e)?e[1]-e[0]||25:e.step}function bt(){const{remote:t}=(0,o.u)(),{translations:e}=g(),s="Loop";return Y({label:N(e,s),children:ut({label:s,storageKey:"vds-player::user-loop",onChange(e,s){t.userPrefersLoopChange(e,s)}})})}function ft(){const{playbackRates:t}=g(),e=t();return(0,n.v)(e)?e[0]??0:e.min}function _t(){const{playbackRates:t}=g(),e=t();return(0,n.v)(e)?e[e.length-1]??2:e.max}function gt(){const{playbackRates:t}=g(),e=t();return(0,n.v)(e)?e[1]-e[0]||.25:e.step}function yt(){const{translations:t}=g(),e=N(t,"Speed"),s=ft,n=_t,o=gt;return i.x`
    <media-speed-slider
      class="vds-speed-slider vds-slider"
      aria-label=${e}
      min=${r(s)}
      max=${r(n)}
      step=${r(o)}
      key-step=${r(o)}
    >
      ${X()}${J()}
    </media-speed-slider>
  `}function xt(){const{remote:t,qualities:e}=(0,o.u)(),{autoQuality:s,canSetQuality:i,qualities:a}=(0,o.b)(),{translations:l}=g(),r="Auto";return(0,n.o)((()=>!i()||a().length<=1))()?null:Y({label:N(l,r),children:ut({label:r,checked:s,onChange(s,n){s?t.requestAutoQuality(n):t.changeQuality(e.selectedIndex,n)}})})}function At(){const{translations:t}=g(),e=N(t,"Quality");return i.x`
    <media-quality-slider class="vds-quality-slider vds-slider" aria-label=${e}>
      ${X()}${J()}
    </media-quality-slider>
  `}function wt({placement:t,portal:e,tooltip:s}){return r((()=>{const{viewType:a}=(0,o.b)(),{translations:l,menuContainer:d,noModal:c,menuGroup:u,smallWhen:p}=g(),m=(0,n.o)((()=>c()?(0,n.a2)(t):p()?null:(0,n.a2)(t))),v=(0,n.o)((()=>p()||"bottom"!==u()||"video"!==a()?0:26)),h=(0,n.f)(!1),$=i.x`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${r(m)}
        offset=${r(v)}
      >
        ${r((()=>h()?[r((()=>{const{translations:t}=g();return i.x`
      <media-menu class="vds-playback-menu vds-menu">
        ${Z({label:()=>S(t,"Playback"),icon:"menu-playback"})}
        <media-menu-items class="vds-menu-items">
          ${[Q({children:bt()}),r((()=>{const{translations:t}=g(),{canSetPlaybackRate:e,playbackRate:s}=(0,o.b)();return e()?Q({label:N(t,"Speed"),value:r((()=>1===s()?S(t,"Normal"):s()+"x")),children:[tt({upIcon:"menu-speed-up",downIcon:"menu-speed-down",children:yt(),isMin:()=>s()===ft(),isMax:()=>s()===_t()})]}):null})),r((()=>{const{hideQualityBitrate:t,translations:e}=g(),{canSetQuality:s,qualities:i,quality:a}=(0,o.b)(),l=(0,n.o)((()=>!s()||i().length<=1)),d=(0,n.o)((()=>(0,b.s)(i())));return l()?null:Q({label:N(e,"Quality"),value:r((()=>{const s=a()?.height,n=t()?null:a()?.bitrate,i=n&&n>0?`${(n/1e6).toFixed(2)} Mbps`:null,o=S(e,"Auto");return s?`${s}p${i?` (${i})`:""}`:o})),children:[tt({upIcon:"menu-quality-up",downIcon:"menu-quality-down",children:At(),isMin:()=>d()[0]===a(),isMax:()=>d().at(-1)===a()}),xt()]})}))]}
        </media-menu-items>
      </media-menu>
    `})),r((()=>{const{translations:t}=g();return i.x`
      <media-menu class="vds-accessibility-menu vds-menu">
        ${Z({label:()=>S(t,"Accessibility"),icon:"menu-accessibility"})}
        <media-menu-items class="vds-menu-items">
          ${[Q({children:[pt(),r((()=>{const{translations:t,userPrefersKeyboardAnimations:e,noKeyboardAnimations:s}=g(),{viewType:i}=(0,o.b)();if((0,n.o)((()=>"video"!==i()||s()))())return null;const a="Keyboard Animations";return Y({label:N(t,a),children:ut({label:a,defaultChecked:!0,storageKey:"vds-player::keyboard-animations",onChange(t){e.set(t)}})})}))]}),Q({children:[r((()=>{const{hasCaptions:t}=(0,o.b)(),{translations:e}=g();return t()?((0,n.X)(at,{all:new Set}),i.x`
      <media-menu class="vds-font-menu vds-menu">
        ${Z({label:()=>S(e,"Caption Styles")})}
        <media-menu-items class="vds-menu-items">
          ${[Q({label:N(e,"Font"),children:[rt({group:"font",label:"Family",option:st,defaultValue:"pro-sans",cssVarName:"font-family",getCssVarValue(t,e){const s="capitals"===t?"small-caps":"";return e.el?.style.setProperty("--media-user-font-variant",s),function(t){switch(t){case"mono-serif":return'"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';case"mono-sans":return'"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';case"pro-sans":return'Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';case"casual":return'"Comic Sans MS", Impact, Handlee, fantasy';case"cursive":return'"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';case"capitals":return'"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps';default:return'"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'}}(t)}}),rt({group:"font",label:"Size",option:nt,defaultValue:"100%",cssVarName:"font-size",getCssVarValue:dt})]}),Q({label:N(e,"Text"),children:[rt({group:"text",label:"Color",option:et,defaultValue:"#ffffff",cssVarName:"text-color",getCssVarValue:t=>`rgb(${z(t)} / var(--media-user-text-opacity, 1))`}),rt({group:"text",label:"Shadow",option:ot,defaultValue:"none",cssVarName:"text-shadow",getCssVarValue:ct}),rt({group:"text",label:"Opacity",option:it,defaultValue:"100%",cssVarName:"text-opacity",getCssVarValue:dt})]}),Q({label:N(e,"Text Background"),children:[rt({group:"text-bg",label:"Color",option:et,defaultValue:"#000000",cssVarName:"text-bg",getCssVarValue:t=>`rgb(${z(t)} / var(--media-user-text-bg-opacity, 1))`}),rt({group:"text-bg",label:"Opacity",option:it,defaultValue:"100%",cssVarName:"text-bg-opacity",getCssVarValue:dt})]}),Q({label:N(e,"Display Background"),children:[rt({group:"display",label:"Color",option:et,defaultValue:"#000000",cssVarName:"display-bg",getCssVarValue:t=>`rgb(${z(t)} / var(--media-user-display-bg-opacity, 1))`}),rt({group:"display",label:"Opacity",option:it,defaultValue:"0%",cssVarName:"display-bg-opacity",getCssVarValue:dt})]}),Q({children:[lt()]})]}
        </media-menu-items>
      </media-menu>
    `):null}))]})]}
        </media-menu-items>
      </media-menu>
    `})),r((()=>{const{noAudioGain:t,translations:e}=g(),{audioTracks:s,canSetAudioGain:a}=(0,o.b)();return(0,n.o)((()=>!(a()&&!t())&&s().length<=1))()?null:i.x`
      <media-menu class="vds-audio-menu vds-menu">
        ${Z({label:()=>S(e,"Audio"),icon:"menu-audio"})}
        <media-menu-items class="vds-menu-items">
          ${[r((()=>{const{translations:t}=g(),{audioTracks:e}=(0,o.b)(),s=N(t,"Default");return(0,n.o)((()=>e().length<=1))()?null:Q({children:i.x`
        <media-menu class="vds-audio-tracks-menu vds-menu">
          ${Z({label:()=>S(t,"Track")})}
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
      `})})),r((()=>{const{noAudioGain:t,translations:e}=g(),{canSetAudioGain:s}=(0,o.b)();if((0,n.o)((()=>!s()||t()))())return null;const{audioGain:i}=(0,o.b)();return Q({label:N(e,"Boost"),value:r((()=>Math.round(100*((i()??1)-1))+"%")),children:[tt({upIcon:"menu-audio-boost-up",downIcon:"menu-audio-boost-down",children:mt(),isMin:()=>100*((i()??1)-1)<=vt(),isMax:()=>100*((i()??1)-1)===ht()})]})}))]}
        </media-menu-items>
      </media-menu>
    `})),r((()=>{const{translations:t}=g(),{hasCaptions:e}=(0,o.b)(),s=N(t,"Off");return e()?i.x`
      <media-menu class="vds-captions-menu vds-menu">
        ${Z({label:()=>S(t,"Captions"),icon:"menu-captions"})}
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
    `;return i.x`
      <media-menu class="vds-settings-menu vds-menu" @open=${function(){h.set(!0)}} @close=${function(){h.set(!1)}}>
        <media-tooltip class="vds-tooltip">
          <media-tooltip-trigger>
            <media-menu-button
              class="vds-menu-button vds-button"
              aria-label=${N(l,"Settings")}
            >
              ${M("menu-settings","vds-rotate-icon")}
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${(0,n.w)(s)?r(s):s}
          >
            ${N(l,"Settings")}
          </media-tooltip-content>
        </media-tooltip>
        ${e?W(d,$):$}
      </media-menu>
    `}))}function kt({orientation:t,tooltip:e}){return r((()=>{const{pointer:s,muted:l,canSetVolume:d}=(0,o.b)();if("coarse"===s()&&!l())return null;if(!d())return E({tooltip:e});const c=(0,n.f)(void 0),u=(0,a.h)(c);return i.x`
      <div class="vds-volume" ?data-active=${r(u)} ${(0,i.n)(c.set)}>
        ${E({tooltip:e})}
        <div class="vds-volume-popup">${function({orientation:t}={}){const{translations:e}=g(),s=N(e,"Volume");return i.x`
    <media-volume-slider
      class="vds-volume-slider vds-slider"
      aria-label=${s}
      orientation=${(0,i.l)(t)}
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
    `}))}function Ct(){const t=(0,n.f)(void 0),e=(0,n.f)(0),{thumbnails:s,translations:o,sliderChaptersMinWidth:l,disableTimeSlider:d,seekStep:c,noScrubGesture:u}=g(),p=N(o,"Seek"),m=r(d),v=r((()=>e()<l())),h=r(s);return(0,a.d)(t,(()=>{const s=t();s&&e.set(s.clientWidth)})),i.x`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${p}
      key-step=${r(c)}
      ?disabled=${m}
      ?no-swipe-gesture=${r(u)}
      ${(0,i.n)(t.set)}
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
          .src=${h}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `}function St(){return r((()=>{const{live:t}=(0,o.b)();return t()?B():i.x`
    <div class="vds-time-group">
      ${r((()=>{const{duration:t}=(0,o.b)();return t()?[i.x`<media-time class="vds-time" type="current"></media-time>`,i.x`<div class="vds-time-divider">/</div>`,i.x`<media-time class="vds-time" type="duration"></media-time>`]:null}))}
    </div>
  `}))}function Tt(){return r((()=>{const{textTracks:t}=(0,o.u)(),{title:e,started:s}=(0,o.b)(),a=(0,n.f)(null);return(0,$.w)(t,"chapters",a.set),!a()||!s()&&e()?i.x`<media-title class="vds-chapter-title"></media-title>`:Mt()}))}function Mt(){return i.x`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}class Pt extends h{async xe(){const t=(await s.e(4793).then(s.bind(s,4793))).icons,e={};for(const s of Object.keys(t))e[s]=m({name:s,paths:t[s]});return e}}var Nt=s(4170);let It=class extends k{static{this.props={...super.props,when:({viewType:t})=>"audio"===t,smallWhen:({width:t})=>t<576}}};function Vt(){const t="top end";return[K({tooltip:"top",placement:t,portal:!0}),wt({tooltip:"top end",placement:t,portal:!0})]}class Ht extends((0,n.H)(Nt.L,It)){constructor(){super(...arguments),this.jn=(0,n.f)(!1)}static{this.tagName="media-audio-layout"}static{this.attrs={smallWhen:{converter:t=>"never"!==t&&!!t}}}onSetup(){this.forwardKeepAlive=!1,this.a=(0,o.u)(),this.classList.add("vds-audio-layout"),this.menuContainer=U("vds-audio-layout",(()=>this.isSmallLayout));const{pointer:t}=this.a.$state;(0,n.g)((()=>{"coarse"===t()&&(0,n.g)(this.kn.bind(this))})),(0,n.q)((()=>this.menuContainer?.remove()))}onConnect(){C("audio",(()=>this.isMatch)),(0,n.g)((()=>{const t=this.menuContainer?[this,this.menuContainer]:[this];this.$props.customIcons()?new p(t).connect():new Pt(t).connect()}))}render(){return i.x`${r(this._j.bind(this))}`}_j(){return this.isMatch?[T(),j(),i.x`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[O({backward:!0,tooltip:"top start"}),H({tooltip:"top"}),O({tooltip:"top"}),r((()=>{let t=(0,n.f)(void 0),e=(0,n.f)(!1),s=(0,o.u)(),{title:l,started:d,currentTime:c,ended:u}=(0,o.b)(),{translations:p}=g(),m=(0,a.u)(t),v=()=>d()||c()>0;const h=()=>{const t=u()?"Replay":v()?"Continue":"Play";return`${S(p,t)}: ${l()}`};function $(){return i.x`
        <span class="vds-title-text">
          ${r(h)}${r((()=>v()?Mt():null))}
        </span>
      `}return(0,n.g)((()=>{m()&&document.activeElement===document.body&&s.player.el?.focus()})),(0,a.d)(t,(function(){const s=t(),i=!!s&&!m()&&s.clientWidth<s.children[0].clientWidth;s&&(0,n.G)(s,"vds-marquee",i),e.set(i)})),l()?i.x`
          <span class="vds-title" title=${r(h)} ${(0,i.n)(t.set)}>
            ${[$(),r((()=>e()&&!m()?$():null))]}
          </span>
        `:q()})),Ct(),r((()=>{const{live:t,duration:e}=(0,o.b)();return t()?B():e()?i.x`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null})),kt({orientation:"vertical",tooltip:"top"}),L({tooltip:"top"}),R(),I({tooltip:"top"}),Vt()]}
        </media-controls-group>
      </media-controls>
    `]:null}kn(){this.jn()?((0,n.l)(this,"pointerdown",(t=>t.stopPropagation())),(0,n.l)(window,"pointerdown",this.mn.bind(this))):(0,n.l)(this,"pointerdown",this.ln.bind(this),{capture:!0})}ln(t){const{target:e}=t;(0,a.i)(e)&&e.closest(".vds-time-slider")&&(t.stopImmediatePropagation(),this.setAttribute("data-scrubbing",""),this.jn.set(!0))}mn(){this.jn.set(!1),this.removeAttribute("data-scrubbing")}}class Et extends k{static{this.props={...super.props,when:({viewType:t})=>"video"===t,smallWhen:({width:t,height:e})=>t<576||e<380}}}function Lt(){return r((()=>{const t=(0,o.u)(),{noKeyboardAnimations:e,userPrefersKeyboardAnimations:s}=g();if((0,n.o)((()=>e()||!s()))())return null;const l=(0,n.f)(!1),{lastKeyboardAction:d}=t.$state;(0,n.g)((()=>{l.set(!!d());const t=setTimeout((()=>l.set(!1)),500);return()=>{l.set(!1),window.clearTimeout(t)}}));const c=(0,n.o)((()=>{const t=d()?.action;return t&&l()?(0,n.Q)(t):null})),u=(0,n.o)((()=>"vds-kb-action"+(l()?"":" hidden"))),p=(0,n.o)(Gt),m=(0,n.o)((()=>{const t=function(){const{$state:t}=(0,o.u)(),e=t.lastKeyboardAction()?.action;switch(e){case"togglePaused":return t.paused()?"kb-pause-icon":"kb-play-icon";case"toggleMuted":return t.muted()||0===t.volume()?"kb-mute-icon":t.volume()>=.5?"kb-volume-up-icon":"kb-volume-down-icon";case"toggleFullscreen":return`kb-fs-${t.fullscreen()?"enter":"exit"}-icon`;case"togglePictureInPicture":return`kb-pip-${t.pictureInPicture()?"enter":"exit"}-icon`;case"toggleCaptions":return t.hasCaptions()?`kb-cc-${t.textTrack()?"on":"off"}-icon`:null;case"volumeUp":return"kb-volume-up-icon";case"volumeDown":return"kb-volume-down-icon";case"seekForward":return"kb-seek-forward-icon";case"seekBackward":return"kb-seek-backward-icon";default:return null}}();return t?(0,a.e)(t):null}));return i.x`
      <div class=${r(u)} data-action=${r(c)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${r(p)}</div>
        </div>
        ${r((()=>(0,i.i)(d(),function(){const t=m();return t?i.x`
        <div class="vds-kb-bezel">
          <div class="vds-kb-icon">${t}</div>
        </div>
      `:null}())))}
      </div>
    `}))}function Gt(){const{$state:t}=(0,o.u)(),e=t.lastKeyboardAction()?.action,s=t.audioGain()??1;switch(e){case"toggleMuted":return t.muted()?"0%":Dt(t.volume(),s);case"volumeUp":case"volumeDown":return Dt(t.volume(),s);default:return""}}function Dt(t,e){return`${Math.round(t*e*100)}%`}function Ot(){return i.x`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function Bt(){const{menuGroup:t,smallWhen:e}=g(),s=()=>"top"===t()||e()?"bottom":"top",i=(0,n.o)((()=>`${s()} ${"top"===t()?"end":"center"}`)),o=(0,n.o)((()=>`${s()} end`));return[K({tooltip:i,placement:o,portal:!0}),wt({tooltip:i,placement:o,portal:!0})]}function Rt(){return r((()=>{const{noGestures:t}=g();return t()?null:i.x`
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
    `}))}class jt extends((0,n.H)(Nt.L,Et)){static{this.tagName="media-video-layout"}static{this.attrs={smallWhen:{converter:t=>"never"!==t&&!!t}}}onSetup(){this.forwardKeepAlive=!1,this.a=(0,o.u)(),this.classList.add("vds-video-layout"),this.menuContainer=U("vds-video-layout",(()=>this.isSmallLayout)),(0,n.q)((()=>this.menuContainer?.remove()))}onConnect(){C("video",(()=>this.isMatch)),(0,n.g)((()=>{const t=this.menuContainer?[this,this.menuContainer]:[this];this.$props.customIcons()?new p(t).connect():new Pt(t).connect()}))}render(){return i.x`${r(this._j.bind(this))}`}_j(){const{load:t}=this.a.$props,{canLoad:e,streamType:s}=this.a.$state;return this.isMatch?"play"!==t()||e()?"unknown"===s()?Ot():this.isSmallLayout?[T(),Rt(),Ot(),j(),Lt(),i.x`<div class="vds-scrim"></div>`,i.x`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[I({tooltip:"top start"}),V({tooltip:"bottom start"}),q(),L({tooltip:"bottom"}),R(),Bt(),kt({orientation:"vertical",tooltip:"bottom end"})]}
        </media-controls-group>

        ${q()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[q(),H({tooltip:"top"}),q()]}
        </media-controls-group>

        ${q()}

        <media-controls-group class="vds-controls-group">
          ${[St(),Tt(),D({tooltip:"top end"})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${Ct()}
        </media-controls-group>
      </media-controls>
    `,r((()=>{const{duration:t}=(0,o.b)();return 0===t()?null:i.x`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `}))]:[T(),Rt(),Ot(),Lt(),j(),i.x`<div class="vds-scrim"></div>`,i.x`
      <media-controls class="vds-controls">
        ${[i.x`
    <media-controls-group class="vds-controls-group">
      ${r((()=>{const{menuGroup:t}=g();return"top"===t()?[q(),Bt()]:null}))}
    </media-controls-group>
  `,q(),i.x`<media-controls-group class="vds-controls-group"></media-controls-group>`,q(),i.x`
            <media-controls-group class="vds-controls-group">
              ${Ct()}
            </media-controls-group>
          `,i.x`
            <media-controls-group class="vds-controls-group">
              ${[H({tooltip:"top start"}),kt({orientation:"horizontal",tooltip:"top"}),St(),Tt(),L({tooltip:"top"}),r((()=>{const{menuGroup:t}=g();return"bottom"===t()?Bt():null})),I({tooltip:"top"}),V({tooltip:"top"}),R(),G(),D({tooltip:"top end"})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]:i.x`
    <div class="vds-load-container">
      ${[Ot(),H({tooltip:"top"})]}
    </div>
  `:null}}class qt extends h{async xe(){const t=(await s.e(6910).then(s.bind(s,6910))).icons,e={};for(const s of Object.keys(t))e[s]=m({name:s,paths:t[s],viewBox:"0 0 18 18"});return e}}function Wt(t,e){return t()?.[e]??e}function Ut(){const t=(0,o.u)(),{translations:e}=(0,o.c)(),{title:s}=t.$state,n=r((()=>`${Wt(e,"Play")}, ${s()}`));return i.x`
    <media-play-button
      class="plyr__control plyr__control--overlaid"
      aria-label=${n}
      data-plyr="play"
    >
      <slot name="play-icon"></slot>
    </button>
  `}function Kt(){const{controls:t}=(0,o.c)();return r((()=>t().includes("play-large")?Ut():null))}function zt(){const{thumbnails:t,previewTime:e}=(0,o.c)();return i.x`
    <media-thumbnail
      .src=${r(t)}
      class="plyr__preview-scrubbing"
      time=${r((()=>e()))}
    ></media-thumbnail>
  `}function Ft(){const t=(0,o.u)(),{poster:e}=t.$state,s=r((()=>`background-image: url("${e()}");`));return i.x`<div class="plyr__poster" style=${s}></div>`}function Qt(){const{controls:t}=(0,o.c)(),e=r((()=>t().map(Yt)));return i.x`<div class="plyr__controls">${e}</div>`}function Yt(t){switch(t){case"airplay":return function(){const{translations:t}=(0,o.c)();return i.x`
    <media-airplay-button class="plyr__controls__item plyr__control" data-plyr="airplay">
      <slot name="airplay-icon"></slot>
      <span class="plyr__tooltip">${ae(t,"AirPlay")}</span>
    </media-airplay-button>
  `}();case"captions":return function(){const{translations:t}=(0,o.c)(),e=ae(t,"Disable captions"),s=ae(t,"Enable captions");return i.x`
    <media-caption-button
      class="plyr__controls__item plyr__control"
      data-no-label
      data-plyr="captions"
    >
      <slot name="captions-on-icon" data-class="icon--pressed"></slot>
      <slot name="captions-off-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${e}</span>
      <span class="label--not-pressed plyr__tooltip">${s}</span>
    </media-caption-button>
  `}();case"current-time":return function(){const t=(0,o.u)(),{translations:e,invertTime:s,toggleTime:a,displayDuration:l}=(0,o.c)(),d=(0,n.f)((0,n.p)(s));function c(t){!a()||l()||(0,n.P)(t)&&!(0,n.z)(t)||d.set((t=>!t))}return r((()=>{const{streamType:s}=t.$state,n=ae(e,"LIVE"),o=ae(e,"Current time"),a=r((()=>!l()&&d()));return"live"===s()||"ll-live"===s()?i.x`
          <media-live-button
            class="plyr__controls__item plyr__control plyr__live-button"
            data-plyr="live"
          >
            <span class="plyr__live-button__text">${n}</span>
          </media-live-button>
        `:i.x`
          <media-time
            type="current"
            class="plyr__controls__item plyr__time plyr__time--current"
            tabindex="0"
            role="timer"
            aria-label=${o}
            ?remainder=${a}
            @pointerup=${c}
            @keydown=${c}
          ></media-time>
          ${r((()=>l()?Jt():null))}
        `}))}();case"download":return r((()=>{const t=(0,o.u)(),{translations:e,download:s}=(0,o.c)(),{title:n,source:a}=t.$state,l=a(),r=s(),d=(0,f.g)({title:n(),src:l,download:r}),c=ae(e,"Download");return d?i.x`
          <a
            class="plyr__controls__item plyr__control"
            href=${d.url+`?download=${d.name}`}
            download=${d.name}
            target="_blank"
          >
            <slot name="download-icon" />
            <span class="plyr__tooltip">${c}</span>
          </a>
        `:null}));case"duration":return Jt();case"fast-forward":return function(){const{translations:t,seekTime:e}=(0,o.c)(),s=r((()=>`${Wt(t,"Forward")} ${e()}s`)),n=r(e);return i.x`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${n}
      data-no-label
      data-plyr="fast-forward"
    >
      <slot name="fast-forward-icon"></slot>
      <span class="plyr__tooltip">${s}</span>
    </media-seek-button>
  `}();case"fullscreen":return function(){const{translations:t}=(0,o.c)(),e=ae(t,"Enter Fullscreen"),s=ae(t,"Exit Fullscreen");return i.x`
    <media-fullscreen-button
      class="plyr__controls__item plyr__control"
      data-no-label
      data-plyr="fullscreen"
    >
      <slot name="enter-fullscreen-icon" data-class="icon--pressed"></slot>
      <slot name="exit-fullscreen-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${e}</span>
    </media-fullscreen-button>
  `}();case"mute":case"volume":case"mute+volume":return function(t){return r((()=>{const e="mute"===t||"mute+volume"===t,s="volume"===t||"mute+volume"===t;return i.x`
      <div class="plyr__controls__item plyr__volume">
        ${[e?Zt():null,s?Xt():null]}
      </div>
    `}))}(t);case"pip":return function(){const{translations:t}=(0,o.c)(),e=ae(t,"Enter PiP"),s=ae(t,"Exit PiP");return i.x`
    <media-pip-button class="plyr__controls__item plyr__control" data-no-label data-plyr="pip">
      <slot name="pip-icon"></slot>
      <slot name="enter-pip-icon" data-class="icon--pressed"></slot>
      <slot name="exit-pip-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${e}</span>
    </media-pip-button>
  `}();case"play":return function(){const{translations:t}=(0,o.c)(),e=ae(t,"Play"),s=ae(t,"Pause");return i.x`
    <media-play-button class="plyr__controls__item plyr__control" data-no-label data-plyr="play">
      <slot name="pause-icon" data-class="icon--pressed"></slot>
      <slot name="play-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${e}</span>
    </media-play-button>
  `}();case"progress":return function(){let t=(0,o.u)(),{duration:e,viewType:s}=t.$state,{translations:a,markers:l,thumbnails:d,seekTime:c,previewTime:u}=(0,o.c)(),p=ae(a,"Seek"),m=(0,n.f)(null),v=r((()=>{const t=m();return t?i.x`<span class="plyr__progress__marker-label">${(0,i.o)(t.label)}<br /></span>`:null}));function h(){m.set(this)}function $(){m.set(null)}return i.x`
    <div class="plyr__controls__item plyr__progress__container">
      <div class="plyr__progress">
        <media-time-slider
          class="plyr__slider"
          data-plyr="seek"
          pause-while-dragging
          key-step=${r(c)}
          aria-label=${p}
          @media-seeking-request=${function(t){u.set(t.detail)}}
        >
          <div class="plyr__slider__track"></div>
          <div class="plyr__slider__thumb"></div>
          <div class="plyr__slider__buffer"></div>
          ${r((function(){const t=d(),e=r((()=>"audio"===s()));return t?i.x`
          <media-slider-preview class="plyr__slider__preview" ?no-clamp=${e}>
            <media-slider-thumbnail .src=${t} class="plyr__slider__preview__thumbnail">
              <span class="plyr__slider__preview__time-container">
                ${v}
                <media-slider-value class="plyr__slider__preview__time"></media-slider-value>
              </span>
            </media-slider-thumbnail>
          </media-slider-preview>
        `:i.x`
          <span class="plyr__tooltip">
            ${v}
            <media-slider-value></media-slider-value>
          </span>
        `}))}${r((function(){const t=e();return Number.isFinite(t)?l()?.map((e=>i.x`
        <span
          class="plyr__progress__marker"
          @mouseenter=${h.bind(e)}
          @mouseleave=${$}
          style=${`left: ${e.time/t*100}%;`}
        ></span>
      `)):null}))}
        </media-time-slider>
      </div>
    </div>
  `}();case"restart":return function(){const{translations:t}=(0,o.c)(),{remote:e}=(0,o.u)(),s=ae(t,"Restart");function a(t){(0,n.P)(t)&&!(0,n.z)(t)||e.seek(0,t)}return i.x`
    <button
      type="button"
      class="plyr__control"
      data-plyr="restart"
      @pointerup=${a}
      @keydown=${a}
    >
      <slot name="restart-icon"></slot>
      <span class="plyr__tooltip">${s}</span>
    </button>
  `}();case"rewind":return function(){const{translations:t,seekTime:e}=(0,o.c)(),s=r((()=>`${Wt(t,"Rewind")} ${e()}s`)),n=r((()=>-1*e()));return i.x`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${n}
      data-no-label
      data-plyr="rewind"
    >
      <slot name="rewind-icon"></slot>
      <span class="plyr__tooltip">${s}</span>
    </media-seek-button>
  `}();case"settings":return function(){const{translations:t}=(0,o.c)(),e=ae(t,"Settings");return i.x`
    <div class="plyr__controls__item plyr__menu">
      <media-menu>
        <media-menu-button class="plyr__control" data-plyr="settings">
          <slot name="settings-icon" />
          <span class="plyr__tooltip">${e}</span>
        </media-menu-button>
        <media-menu-items class="plyr__menu__container" placement="top end">
          <div><div>${[ee({label:"Audio",children:se()}),ee({label:"Captions",children:ie()}),ee({label:"Quality",children:oe()}),ee({label:"Speed",children:ne()})]}</div></div>
        </media-menu-items>
      </media-menu>
    </div>
  `}();default:return null}}function Zt(){const{translations:t}=(0,o.c)(),e=ae(t,"Mute"),s=ae(t,"Unmute");return i.x`
    <media-mute-button class="plyr__control" data-no-label data-plyr="mute">
      <slot name="muted-icon" data-class="icon--pressed"></slot>
      <slot name="volume-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${e}</span>
    </media-mute-button>
  `}function Xt(){const{translations:t}=(0,o.c)(),e=ae(t,"Volume");return i.x`
    <media-volume-slider class="plyr__slider" data-plyr="volume" aria-label=${e}>
      <div class="plyr__slider__track"></div>
      <div class="plyr__slider__thumb"></div>
    </media-volume-slider>
  `}function Jt(){const{translations:t}=(0,o.c)(),e=ae(t,"Duration");return i.x`
    <media-time
      type="duration"
      class="plyr__controls__item plyr__time plyr__time--duration"
      role="timer"
      tabindex="0"
      aria-label=${e}
    ></media-time>
  `}function te(){const t=(0,o.u)(),e=(0,n.f)(void 0),s=r((()=>(0,i.o)(e()?.text)));return(0,n.g)((()=>{const s=t.$state.textTrack();if(s)return i(),(0,n.l)(s,"cue-change",i);function i(){e.set(s?.activeCues[0])}})),i.x`
    <div class="plyr__captions" dir="auto">
      <span class="plyr__caption">${s}</span>
    </div>
  `}function ee({label:t,children:e}){const s=(0,n.f)(!1);return i.x`
    <media-menu @open=${()=>s.set(!0)} @close=${()=>s.set(!1)}>
      ${function({open:t,label:e}){const{translations:s}=(0,o.c)(),n=r((()=>"plyr__control plyr__control--"+(t()?"back":"forward")));return i.x`
    <media-menu-button class=${n} data-plyr="settings">
      <span class="plyr__menu__label" aria-hidden=${a=t,r((()=>a()?"true":"false"))}>
        ${ae(s,e)}
      </span>
      <span class="plyr__menu__value" data-part="hint"></span>
      ${function(){const e=ae(s,"Go back to previous menu");return r((()=>t()?i.x`<span class="plyr__sr-only">${e}</span>`:null))}()}
    </media-menu-button>
  `;var a}({label:t,open:s})}
      <media-menu-items>${e}</media-menu-items>
    </media-menu>
  `}function se(){const{translations:t}=(0,o.c)();return i.x`
    <media-audio-radio-group empty-label=${ae(t,"Default")}>
      <template>
        <media-radio class="plyr__control" data-plyr="audio">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-audio-radio-group>
  `}function ne(){const{translations:t,speed:e}=(0,o.c)();return i.x`
    <media-speed-radio-group .rates=${e} normal-label=${ae(t,"Normal")}>
      <template>
        <media-radio class="plyr__control" data-plyr="speed">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-speed-radio-group>
  `}function ie(){const{translations:t}=(0,o.c)();return i.x`
    <media-captions-radio-group off-label=${ae(t,"Disabled")}>
      <template>
        <media-radio class="plyr__control" data-plyr="captions">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-captions-radio-group>
  `}function oe(){const{translations:t}=(0,o.c)();return i.x`
    <media-quality-radio-group auto-label=${ae(t,"Auto")}>
      <template>
        <media-radio class="plyr__control" data-plyr="quality">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-quality-radio-group>
  `}function ae(t,e){return r((()=>Wt(t,e)))}class le extends((0,n.H)(Nt.L,o.P)){static{this.tagName="media-plyr-layout"}onSetup(){this.forwardKeepAlive=!1,this.a=(0,o.u)()}onConnect(){this.a.player.el?.setAttribute("data-layout","plyr"),(0,n.q)((()=>this.a.player.el?.removeAttribute("data-layout"))),(0,o.a)(this,this.a),(0,n.g)((()=>{this.$props.customIcons()?new p([this]).connect():new qt([this]).connect()}))}render(){return i.x`${r(this._j.bind(this))}`}_j(){const{viewType:t}=this.a.$state;return"audio"===t()?function(){const t=new Set(["captions","pip","airplay","fullscreen"]),{controls:e}=(0,o.c)(),s=r((()=>e().filter((e=>!t.has(e))).map(Yt)));return i.x`<div class="plyr__controls">${s}</div>`}():"video"===t()?function(){const t=(0,o.u)(),{load:e}=t.$props,{canLoad:s}=t.$state;return(0,n.o)((()=>"play"===e()&&!s()))()?[Ut(),Ft()]:[Kt(),zt(),Ft(),Qt(),r((()=>{const{clickToPlay:t,clickToFullscreen:e}=(0,o.c)();return[t()?i.x`
            <media-gesture
              class="plyr__gesture"
              event="pointerup"
              action="toggle:paused"
            ></media-gesture>
          `:null,e()?i.x`
            <media-gesture
              class="plyr__gesture"
              event="dblpointerup"
              action="toggle:fullscreen"
            ></media-gesture>
          `:null]})),te()]}():null}}(0,n.d)(Ht),(0,n.d)(jt),(0,n.d)(le)}}]);