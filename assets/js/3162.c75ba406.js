/*! For license information please see 3162.c75ba406.js.LICENSE.txt */
"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[3162],{1029:(t,e,s)=>{var i;s.d(e,{A:()=>k,D:()=>D,a:()=>ot,c:()=>Y,e:()=>q,i:()=>at,l:()=>X,n:()=>et,o:()=>it,t:()=>U,x:()=>_});const n=window,o=n.trustedTypes,a=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,l="$lit$",r=`lit$${(Math.random()+"").slice(9)}$`,d="?"+r,c=`<${d}>`,u=document,p=()=>u.createComment(""),m=t=>null===t||"object"!=typeof t&&"function"!=typeof t,h=Array.isArray,v="[ \t\n\f\r]",$=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,g=/-->/g,b=/>/g,f=RegExp(`>|${v}(?:([^\\s"'>=/]+)(${v}*=${v}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),y=/'/g,x=/"/g,A=/^(?:script|style|textarea|title)$/i,_=(t,...e)=>({_$litType$:1,strings:t,values:e}),w=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),C=new WeakMap,S=u.createTreeWalker(u,129,null,!1);function T(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==a?a.createHTML(e):e}const M=(t,e)=>{const s=t.length-1,i=[];let n,o=2===e?"<svg>":"",a=$;for(let e=0;e<s;e++){const s=t[e];let d,u,p=-1,m=0;for(;m<s.length&&(a.lastIndex=m,u=a.exec(s),null!==u);)m=a.lastIndex,a===$?"!--"===u[1]?a=g:void 0!==u[1]?a=b:void 0!==u[2]?(A.test(u[2])&&(n=RegExp("</"+u[2],"g")),a=f):void 0!==u[3]&&(a=f):a===f?">"===u[0]?(a=null!=n?n:$,p=-1):void 0===u[1]?p=-2:(p=a.lastIndex-u[2].length,d=u[1],a=void 0===u[3]?f:'"'===u[3]?x:y):a===x||a===y?a=f:a===g||a===b?a=$:(a=f,n=void 0);const h=a===f&&t[e+1].startsWith("/>")?" ":"";o+=a===$?s+c:p>=0?(i.push(d),s.slice(0,p)+l+s.slice(p)+r+h):s+r+(-2===p?(i.push(void 0),e):h)}return[T(t,o+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class N{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,a=0;const c=t.length-1,u=this.parts,[m,h]=M(t,e);if(this.el=N.createElement(m,s),S.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=S.nextNode())&&u.length<c;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith(l)||e.startsWith(r)){const s=h[a++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+l).split(r),e=/([.?@])?(.*)/.exec(s);u.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?G:"?"===e[1]?E:"@"===e[1]?O:H})}else u.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(A.test(i.tagName)){const t=i.textContent.split(r),e=t.length-1;if(e>0){i.textContent=o?o.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],p()),S.nextNode(),u.push({type:2,index:++n});i.append(t[e],p())}}}else if(8===i.nodeType)if(i.data===d)u.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(r,t+1));)u.push({type:7,index:n}),t+=r.length-1}n++}}static createElement(t,e){const s=u.createElement("template");return s.innerHTML=t,s}}function I(t,e,s=t,i){var n,o,a,l;if(e===w)return e;let r=void 0!==i?null===(n=s._$Co)||void 0===n?void 0:n[i]:s._$Cl;const d=m(e)?void 0:e._$litDirective$;return(null==r?void 0:r.constructor)!==d&&(null===(o=null==r?void 0:r._$AO)||void 0===o||o.call(r,!1),void 0===d?r=void 0:(r=new d(t),r._$AT(t,s,i)),void 0!==i?(null!==(a=(l=s)._$Co)&&void 0!==a?a:l._$Co=[])[i]=r:s._$Cl=r),void 0!==r&&(e=I(t,r._$AS(t,e.values),r,i)),e}class P{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:u).importNode(s,!0);S.currentNode=n;let o=S.nextNode(),a=0,l=0,r=i[0];for(;void 0!==r;){if(a===r.index){let e;2===r.type?e=new V(o,o.nextSibling,this,t):1===r.type?e=new r.ctor(o,r.name,r.strings,this,t):6===r.type&&(e=new B(o,this,t)),this._$AV.push(e),r=i[++l]}a!==(null==r?void 0:r.index)&&(o=S.nextNode(),a++)}return S.currentNode=u,n}v(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class V{constructor(t,e,s,i){var n;this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=I(this,t,e),m(t)?t===k||null==t||""===t?(this._$AH!==k&&this._$AR(),this._$AH=k):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>h(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==k&&m(this._$AH)?this._$AA.nextSibling.data=t:this.$(u.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=N.createElement(T(i.h,i.h[0]),this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(s);else{const t=new P(n,this),e=t.u(this.options);t.v(s),this.$(e),this._$AH=t}}_$AC(t){let e=C.get(t.strings);return void 0===e&&C.set(t.strings,e=new N(t)),e}T(t){h(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new V(this.k(p()),this.k(p()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class H{constructor(t,e,s,i,n){this.type=1,this._$AH=k,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=k}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(void 0===n)t=I(this,t,e,0),o=!m(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const i=t;let a,l;for(t=n[0],a=0;a<n.length-1;a++)l=I(this,i[s+a],e,a),l===w&&(l=this._$AH[a]),o||(o=!m(l)||l!==this._$AH[a]),l===k?t=k:t!==k&&(t+=(null!=l?l:"")+n[a+1]),this._$AH[a]=l}o&&!i&&this.j(t)}j(t){t===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class G extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===k?void 0:t}}const L=o?o.emptyScript:"";class E extends H{constructor(){super(...arguments),this.type=4}j(t){t&&t!==k?this.element.setAttribute(this.name,L):this.element.removeAttribute(this.name)}}class O extends H{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=I(this,t,e,0))&&void 0!==s?s:k)===w)return;const i=this._$AH,n=t===k&&i!==k||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==k&&(i===k||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class B{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const R=n.litHtmlPolyfillSupport;null==R||R(N,V),(null!==(i=n.litHtmlVersions)&&void 0!==i?i:n.litHtmlVersions=[]).push("2.8.0");const D=(t,e,s)=>{var i,n;const o=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let a=o._$litPart$;if(void 0===a){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;o._$litPart$=a=new V(e.insertBefore(p(),t),t,void 0,null!=s?s:{})}return a._$AI(t),a},W={},U={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},q=t=>(...e)=>({_$litDirective$:t,values:e});let K=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const j=(t,e)=>{var s,i;const n=t._$AN;if(void 0===n)return!1;for(const t of n)null===(i=(s=t)._$AO)||void 0===i||i.call(s,e,!1),j(t,e);return!0},z=t=>{let e,s;do{if(void 0===(e=t._$AM))break;s=e._$AN,s.delete(t),t=e}while(0===(null==s?void 0:s.size))},Q=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),J(e)}};function F(t){void 0!==this._$AN?(z(this),this._$AM=t,Q(this)):this._$AM=t}function Z(t,e=!1,s=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(i))for(let t=s;t<i.length;t++)j(i[t],!1),z(i[t]);else null!=i&&(j(i,!1),z(i));else j(this,t)}const J=t=>{var e,s,i,n;t.type==U.CHILD&&(null!==(e=(i=t)._$AP)&&void 0!==e||(i._$AP=Z),null!==(s=(n=t)._$AQ)&&void 0!==s||(n._$AQ=F))};class Y extends K{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),Q(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,i;t!==this.isConnected&&(this.isConnected=t,t?null===(s=this.reconnected)||void 0===s||s.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),e&&(j(this,t),z(this))}setValue(t){if((t=>void 0===this._$Ct.strings)())this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const X=t=>null!=t?t:k,tt=new WeakMap,et=q(class extends Y{render(t){return k}update(t,[e]){var s;const i=e!==this.G;return i&&void 0!==this.G&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=e,this.dt=null===(s=t.options)||void 0===s?void 0:s.host,this.ot(this.lt=t.element)),k}ot(t){var e;if("function"==typeof this.G){const s=null!==(e=this.dt)&&void 0!==e?e:globalThis;let i=tt.get(s);void 0===i&&(i=new WeakMap,tt.set(s,i)),void 0!==i.get(this.G)&&this.G.call(this.dt,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.dt,t)}else this.G.value=t}get rt(){var t,e,s;return"function"==typeof this.G?null===(e=tt.get(null!==(t=this.dt)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.G):null===(s=this.G)||void 0===s?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});class st extends K{constructor(t){if(super(t),this.et=k,t.type!==U.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===k||null==t)return this.ft=void 0,this.et=t;if(t===w)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}st.directiveName="unsafeHTML",st.resultType=1;const it=q(st);class nt extends st{}nt.directiveName="unsafeSVG",nt.resultType=2;const ot=q(nt),at=q(class extends K{constructor(){super(...arguments),this.key=k}render(t,e){return this.key=t,e}update(t,[e,s]){return e!==this.key&&(((t,e=W)=>{t._$AH=e})(t),this.key=e),s}})},7922:(t,e,s)=>{s.d(e,{$:()=>l,I:()=>p,L:()=>h,S:()=>u});var i=s(9549),n=s(1029),o=s(7404);class a extends n.c{constructor(t){super(t),this.h=null,this.w=!1,this.$=null,this.w=t.type===n.t.ATTRIBUTE||t.type===n.t.BOOLEAN_ATTRIBUTE}render(t){return t!==this.h&&(this.disconnected(),this.h=t,this.isConnected&&this.Gl()),this.h?this.x((0,i.p)(this.h)):n.A}reconnected(){this.Gl()}disconnected(){this.$?.(),this.$=null}Gl(){this.h&&(this.$=(0,i.g)(this.l.bind(this)))}x(t){return this.w?(0,n.l)(t):t}y(t){this.setValue(this.x(t))}l(){this.y(this.h?.())}}function l(t){return(0,n.e)(a)((0,i.o)(t))}class r{constructor(t,e){this._m=t,this.La=e,this.elements=new Set,this.Gc=(0,i.J)(this.Ha.bind(this))}connect(){this.Ha();const t=new MutationObserver(this.Gc);for(const e of this._m)t.observe(e,{childList:!0,subtree:!0});(0,i.q)((()=>t.disconnect())),(0,i.q)(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(t,e){(0,i.w)(t)?(e.textContent="",e.append(t)):((0,n.D)(null,e),(0,n.D)(t,e)),e.style.display||(e.style.display="contents");const s=e.firstElementChild;if(!s)return;const o=e.getAttribute("data-class");o&&s.classList.add(...o.split(" "))}Ha(t){if(t&&!t.some((t=>t.addedNodes.length)))return;let e=!1,s=this._m.flatMap((t=>[...t.querySelectorAll("slot")]));for(const t of s)t.hasAttribute("name")&&!this.elements.has(t)&&(this.elements.add(t),e=!0);e&&this.La(this.elements)}}let d=0,c="data-slot-id";class u{constructor(t){this._m=t,this.Gc=(0,i.J)(this.Ha.bind(this)),this.slots=new r(t,this.Ha.bind(this))}connect(){this.slots.connect(),this.Ha();const t=new MutationObserver(this.Gc);for(const e of this._m)t.observe(e,{childList:!0});(0,i.q)((()=>t.disconnect()))}Ha(){for(const t of this._m)for(const e of t.children){if(1!==e.nodeType)continue;const t=e.getAttribute("slot");if(!t)continue;e.style.display="none";let s=e.getAttribute(c);s||e.setAttribute(c,s=++d+"");for(const i of this.slots.elements){if(i.getAttribute("name")!==t||i.getAttribute(c)===s)continue;const n=document.importNode(e,!0);t.includes("-icon")&&n.classList.add("vds-icon"),n.style.display="",n.removeAttribute("slot"),this.slots.assign(n,i),i.setAttribute(c,s)}}}}function p({name:t,class:e,state:s,paths:o,viewBox:a="0 0 32 32"}){return n.x`<svg
    class="${"vds-icon"+(e?` ${e}`:"")}"
    viewBox="${a}"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${(0,n.l)(t??s)}
  >
    ${(0,i.i)(o)?(0,n.a)(o):l(o)}
  </svg>`}class m{constructor(t){this._m=t,this.dn={},this.gn=!1,this.slots=new r(t,this.hn.bind(this))}connect(){this.slots.connect()}load(){this.Pf().then((t=>{this.dn=t,this.gn=!0,this.hn()}))}*jn(){for(const t of Object.keys(this.dn)){const e=`${t}-icon`;for(const s of this.slots.elements)s.name===e&&(yield{icon:this.dn[t],slot:s})}}hn(){if(this.gn)for(const{icon:t,slot:e}of this.jn())this.slots.assign(t,e)}}class h extends m{connect(){super.connect();const{player:t}=(0,o.u)();if(!t.el)return;let e,s=new IntersectionObserver((t=>{t[0]?.isIntersecting&&(e?.(),e=void 0,this.load())}));s.observe(t.el),e=(0,i.q)((()=>s.disconnect()))}}},2027:(t,e,s)=>{s.d(e,{L:()=>n});var i=s(1029);class n extends HTMLElement{constructor(){super(...arguments),this.rootPart=null}connectedCallback(){this.rootPart=(0,i.D)(this.render(),this,{renderBefore:this.firstChild}),this.rootPart.setConnected(!0)}disconnectedCallback(){this.rootPart?.setConnected(!1),this.rootPart=null,(0,i.D)(null,this)}}},3162:(t,e,s)=>{s.r(e);var i=s(9549),n=s(1029),o=s(7404),a=s(3297),l=s(7922),r=s(2473),d=s(5051),c=s(6623);const u=(0,i.Z)();function p(){return(0,i.u)(u)}const m={colorScheme:"system",download:null,customIcons:!1,disableTimeSlider:!1,menuGroup:"bottom",noAudioGain:!1,noGestures:!1,noKeyboardAnimations:!1,noModal:!1,noScrubGesture:!1,playbackRates:{min:0,max:2,step:.25},audioGains:{min:0,max:300,step:25},seekStep:10,sliderChaptersMinWidth:325,hideQualityBitrate:!1,smallWhen:!1,thumbnails:null,translations:null,when:!1};var h=Object.defineProperty,v=Object.getOwnPropertyDescriptor,$=(t,e,s,i)=>{for(var n,o=i>1?void 0:i?v(e,s):e,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(i?n(e,s,o):n(o))||o);return i&&o&&h(e,s,o),o};class g extends i.C{constructor(){super(...arguments),this.cn=(0,i.o)((()=>{const t=this.$props.when();return this.fn(t)})),this.$m=(0,i.o)((()=>{const t=this.$props.smallWhen();return this.fn(t)})),this.menuContainer=null}static{this.props=m}get isMatch(){return this.cn()}get isSmallLayout(){return this.$m()}onSetup(){this.a=(0,o.u)(),this.setAttributes({"data-match":this.cn,"data-sm":()=>this.$m()?"":null,"data-lg":()=>this.$m()?null:"","data-size":()=>this.$m()?"sm":"lg","data-no-scrub-gesture":this.$props.noScrubGesture});const t=this;(0,i._)(u,{...this.$props,when:this.cn,smallWhen:this.$m,userPrefersAnnouncements:(0,i.f)(!0),userPrefersKeyboardAnimations:(0,i.f)(!0),get menuContainer(){return t.menuContainer}})}onAttach(t){(0,a.w)(t,this.$props.colorScheme)}fn(t){return"never"!==t&&((0,i.b)(t)?t:(0,i.o)((()=>t(this.a.player.state)))())}}function b(t,e){(0,i.g)((()=>{const{player:s}=(0,o.u)(),n=s.el;return n&&(0,i.s)(n,"data-layout",e()&&t),()=>n?.removeAttribute("data-layout")}))}function f(t,e){return t()?.[e]??e}function y(){return(0,l.$)((()=>{const{translations:t,userPrefersAnnouncements:e}=p();return e()?n.x`<media-announcer .translations=${(0,l.$)(t)}></media-announcer>`:null}))}function x(t,e=""){return n.x`<slot
    name=${`${t}-icon`}
    data-class=${`vds-icon vds-${t}-icon${e?` ${e}`:""}`}
  ></slot>`}function A(t){return t.map((t=>x(t)))}function _(t,e){return(0,l.$)((()=>f(t,e)))}function w({tooltip:t}){const{translations:e}=p(),{remotePlaybackState:s}=(0,o.b)(),a=(0,l.$)((()=>`${f(e,"AirPlay")} ${(0,i.a3)(s())}`)),r=_(e,"AirPlay");return n.x`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${a}>
          ${x("airplay")}
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-airplay-tooltip-text">${r}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function k({tooltip:t}){const{translations:e}=p(),{remotePlaybackState:s}=(0,o.b)(),a=(0,l.$)((()=>`${f(e,"Google Cast")} ${(0,i.a3)(s())}`)),r=_(e,"Google Cast");return n.x`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${a}>
          ${x("google-cast")}
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-google-cast-tooltip-text">${r}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function C({tooltip:t}){const{translations:e}=p(),s=_(e,"Play"),i=_(e,"Pause");return n.x`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button
          class="vds-play-button vds-button"
          aria-label=${_(e,"Play")}
        >
          ${A(["play","pause","replay"])}
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-play-tooltip-text">${s}</span>
        <span class="vds-pause-tooltip-text">${i}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function S({tooltip:t,ref:e=i.a4}){const{translations:s}=p(),o=_(s,"Mute"),a=_(s,"Unmute");return n.x`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${_(s,"Mute")}
          ${(0,n.n)(e)}
        >
          ${A(["mute","volume-low","volume-high"])}
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-mute-tooltip-text">${a}</span>
        <span class="vds-unmute-tooltip-text">${o}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function T({tooltip:t}){const{translations:e}=p(),s=_(e,"Closed-Captions On"),i=_(e,"Closed-Captions Off");return n.x`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button
          class="vds-caption-button vds-button"
          aria-label=${_(e,"Captions")}
        >
          ${A(["cc-on","cc-off"])}
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-cc-on-tooltip-text">${i}</span>
        <span class="vds-cc-off-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function M(){const{translations:t}=p(),e=_(t,"Enter PiP"),s=_(t,"Exit PiP");return n.x`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button
          class="vds-pip-button vds-button"
          aria-label=${_(t,"PiP")}
        >
          ${A(["pip-enter","pip-exit"])}
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${e}</span>
        <span class="vds-pip-exit-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function N({tooltip:t}){const{translations:e}=p(),s=_(e,"Enter Fullscreen"),i=_(e,"Exit Fullscreen");return n.x`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button
          class="vds-fullscreen-button vds-button"
          aria-label=${_(e,"Fullscreen")}
        >
          ${A(["fs-enter","fs-exit"])}
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-fs-enter-tooltip-text">${s}</span>
        <span class="vds-fs-exit-tooltip-text">${i}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function I({backward:t,tooltip:e}){const{translations:s,seekStep:i}=p(),o=t?"Seek Backward":"Seek Forward",a=_(s,o);return n.x`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${(0,l.$)((()=>(t?-1:1)*i()))}
          aria-label=${a}
        >
          ${x(t?"seek-backward":"seek-forward")}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        ${_(s,o)}
      </media-tooltip-content>
    </media-tooltip>
  `}function P(){const{translations:t}=p(),{live:e}=(0,o.b)(),s=_(t,"Skip To Live"),i=_(t,"LIVE");return e()?n.x`
        <media-live-button class="vds-live-button" aria-label=${s}>
          <span class="vds-live-button-text">${i}</span>
        </media-live-button>
      `:null}function V(){return(0,l.$)((()=>{const{download:t,translations:e}=p(),s=t();if((0,i.a0)(s))return null;const{source:a,title:l}=(0,o.b)(),r=a(),d=(0,c.g)({title:l(),src:r,download:s});return d?n.x`
          <media-tooltip class="vds-download-tooltip vds-tooltip">
            <media-tooltip-trigger>
              <a
                role="button"
                class="vds-download-button vds-button"
                aria-label=${_(e,"Download")}
                href=${d.url+`?download=${d.name}`}
                download=${d.name}
                target="_blank"
              >
                <slot name="download-icon" data-class="vds-icon" />
              </a>
            </media-tooltip-trigger>
            <media-tooltip-content class="vds-tooltip-content" placement="top">
              ${_(e,"Download")}
            </media-tooltip-content>
          </media-tooltip>
        `:null}))}function H(){const{translations:t}=p();return n.x`
    <media-captions
      class="vds-captions"
      .exampleText=${_(t,"Captions look like this")}
    ></media-captions>
  `}function G(){return n.x`<div class="vds-controls-spacer"></div>`}function L(t,e){return n.x`
    <media-menu-portal .container=${t} disabled="fullscreen">
      ${e}
    </media-menu-portal>
  `}function E(t,e){let s=document.querySelector(`body > .${t}`);s||(s=document.createElement("div"),s.style.display="contents",s.classList.add(t),document.body.append(s));const{viewType:n}=(0,o.b)(),{colorScheme:l}=p();return(0,i.g)((()=>{if(!s)return;const t=e();(0,i.s)(s,"data-view-type",n()),(0,i.s)(s,"data-sm",t),(0,i.s)(s,"data-lg",!t),(0,i.s)(s,"data-size",t?"sm":"lg")})),(0,a.w)(s,l),s}function O({placement:t,tooltip:e,portal:s}){const{textTracks:a}=(0,o.u)(),{viewType:d,clipStartTime:c,clipEndTime:u}=(0,o.b)(),{translations:m,thumbnails:h,menuContainer:v,noModal:$,menuGroup:g,smallWhen:b}=p();if((0,i.o)((()=>{const t=c(),e=u()||1/0,s=(0,i.f)(null);(0,r.w)(a,"chapters",s.set);const n=s()?.cues.filter((s=>s.startTime<=e&&s.endTime>=t));return!n?.length}))())return null;const f=(0,i.o)((()=>$()?(0,i.a5)(t):b()?null:(0,i.a5)(t))),y=(0,i.o)((()=>b()||"bottom"!==g()||"video"!==d()?0:26)),A=(0,i.f)(!1),w=n.x`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${(0,l.$)(f)}
      offset=${(0,l.$)(y)}
    >
      ${(0,l.$)((()=>A()?n.x`
          <media-chapters-radio-group
            class="vds-chapters-radio-group vds-radio-group"
            .thumbnails=${(0,l.$)(h)}
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
  `;return n.x`
    <media-menu class="vds-chapters-menu vds-menu" @open=${function(){A.set(!0)}} @close=${function(){A.set(!1)}}>
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${_(m,"Chapters")}
          >
            ${x("menu-chapters")}
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${(0,i.x)(e)?(0,l.$)(e):e}
        >
          ${_(m,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${s?L(v,w):w}
    </media-menu>
  `}function B(t){const{style:e}=new Option;return e.color=t,e.color.match(/\((.*?)\)/)[1].replace(/,/g," ")}$([i.a2],g.prototype,"menuContainer",2),$([i.a2],g.prototype,"isMatch",1),$([i.a2],g.prototype,"isSmallLayout",1);let R=0;function D({label:t="",value:e="",children:s}){if(!t)return n.x`
      <div class="vds-menu-section">
        <div class="vds-menu-section-body">${s}</div>
      </div>
    `;const i="vds-menu-section-"+ ++R;return n.x`
    <section class="vds-menu-section" role="group" aria-labelledby=${i}>
      <div class="vds-menu-section-title">
        <header id=${i}>${t}</header>
        ${e?n.x`<div class="vds-menu-section-value">${e}</div>`:null}
      </div>
      <div class="vds-menu-section-body">${s}</div>
    </section>
  `}function W({label:t,children:e}){return n.x`
    <div class="vds-menu-item">
      <div class="vds-menu-item-label">${t}</div>
      ${e}
    </div>
  `}function U({label:t,icon:e,hint:s}){return n.x`
    <media-menu-button class="vds-menu-item">
      ${x("menu-arrow-left","vds-menu-close-icon")}
      ${e?x(e,"vds-menu-item-icon"):null}
      <span class="vds-menu-item-label">${(0,l.$)(t)}</span>
      <span class="vds-menu-item-hint" data-part="hint">${s?(0,l.$)(s):null} </span>
      ${x("menu-arrow-right","vds-menu-open-icon")}
    </media-menu-button>
  `}function q(){return n.x`
    <div class="vds-slider-track"></div>
    <div class="vds-slider-track-fill vds-slider-track"></div>
    <div class="vds-slider-thumb"></div>
  `}function K(){return n.x`
    <media-slider-steps class="vds-slider-steps">
      <template>
        <div class="vds-slider-step"></div>
      </template>
    </media-slider-steps>
  `}function j({label:t=null,value:e=null,upIcon:s="",downIcon:i="",children:o,isMin:a,isMax:r}){const d=t||e,c=[i?x(i,"down"):null,o,s?x(s,"up"):null];return n.x`
    <div
      class=${"vds-menu-item vds-menu-slider-item"+(d?" group":"")}
      data-min=${(0,l.$)((()=>a()?"":null))}
      data-max=${(0,l.$)((()=>r()?"":null))}
    >
      ${d?n.x`
            <div class="vds-menu-slider-title">
              ${[t?n.x`<div>${t}</div>`:null,e?n.x`<div>${e}</div>`:null]}
            </div>
            <div class="vds-menu-slider-body">${c}</div>
          `:c}
    </div>
  `}const z={type:"color"},Q={type:"radio",values:{"Monospaced Serif":"mono-serif","Proportional Serif":"pro-serif","Monospaced Sans-Serif":"mono-sans","Proportional Sans-Serif":"pro-sans",Casual:"casual",Cursive:"cursive","Small Capitals":"capitals"}},F={type:"slider",min:0,max:400,step:25,upIcon:"menu-font-size-up",downIcon:"menu-font-size-down"},Z={type:"slider",min:0,max:100,step:5,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"},J={type:"radio",values:["None","Drop Shadow","Raised","Depressed","Outline"]},Y=(0,i.Z)();function X(){const{translations:t}=p(),e=(0,i.u)(Y);return n.x`
    <button class="vds-menu-item" role="menuitem" @click=${function(){e.all.forEach((t=>t()))}}>
      <span class="vds-menu-item-label">${(0,l.$)((()=>f(t,"Reset")))}</span>
    </button>
  `}function tt({group:t,label:e,option:s,defaultValue:a,cssVarName:r,getCssVarValue:d}){const{player:c}=(0,o.u)(),{translations:u}=p(),m=(0,i.u)(Y),h=`${t}-${e.toLowerCase()}`,v=(0,i.f)(a),$=()=>f(u,e),g=localStorage.getItem(`vds-player:${h}`);function b(t){v.set(t),localStorage.setItem(`vds-player:${h}`,t),c.el?.style.setProperty(`--media-user-${r}`,d?.(t,c)??t)}function y(){b(a),A()}function A(){c.dispatchEvent(new Event("vds-font-change"))}if(g&&b(g),m.all.add(y),(0,i.q)((()=>{m.all.delete(y)})),"color"===s.type){let t=function(t){b(t.target.value),A()};return W({label:(0,l.$)($),children:n.x`
        <input
          class="vds-color-picker"
          type="color"
          .value=${(0,l.$)(v)}
          @input=${t}
        />
      `})}if("slider"===s.type){let t=function(t){b(t.detail+"%"),A()};const{min:e,max:i,step:o,upIcon:a,downIcon:r}=s;return j({label:(0,l.$)($),value:(0,l.$)(v),upIcon:a,downIcon:r,isMin:()=>v()===e+"%",isMax:()=>v()===i+"%",children:n.x`
        <media-slider
          class="vds-slider"
          min=${e}
          max=${i}
          step=${o}
          key-step=${o}
          .value=${(0,l.$)((()=>parseInt(v())))}
          aria-label=${(0,l.$)($)}
          @value-change=${t}
          @drag-value-change=${t}
        >
          ${q()}${K()}
        </media-slider>
      `})}const _=(w=s.values,(0,i.v)(w)?w.map((t=>({label:t,value:t.toLowerCase()}))):Object.keys(w).map((t=>({label:t,value:w[t]}))));var w;return n.x`
    <media-menu class=${`vds-${h}-menu vds-menu`}>
      ${U({label:$,hint:()=>{const t=v(),e=_.find((e=>e.value===t))?.label||"";return f(u,(0,i.i)(e)?e:e())}})}
      <media-menu-items class="vds-menu-items">
        ${function({value:t=null,options:e,hideLabel:s=!1,children:o=null,onChange:a=null}){function r(t){const{value:e,label:a}=t;return n.x`
      <media-radio class="vds-radio" value=${e}>
        ${x("menu-radio-check")}
        ${s?null:n.x`
              <span class="vds-radio-label" data-part="label">
                ${(0,i.i)(a)?a:(0,l.$)(a)}
              </span>
            `}
        ${(0,i.x)(o)?o(t):o}
      </media-radio>
    `}return n.x`
    <media-radio-group
      class="vds-radio-group"
      value=${(0,i.i)(t)?t:t?(0,l.$)(t):""}
      @change=${a}
    >
      ${(0,i.v)(e)?e.map(r):(0,l.$)((()=>e().map(r)))}
    </media-radio-group>
  `}({value:v,options:_,onChange({detail:t}){b(t),A()}})}
      </media-menu-items>
    </media-menu>
  `}function et(t){return(parseInt(t)/100).toString()}function st(t){switch(t){case"drop shadow":return"rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px";case"raised":return"rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px";case"depressed":return"rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px";case"outline":return"rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px";default:return""}}function it({label:t,checked:e,defaultChecked:s=!1,storageKey:o,onChange:a}){const{translations:r}=p(),c=o?localStorage.getItem(o):null,u=(0,i.f)(!!(c??s)),m=(0,i.f)(!1),h=(0,l.$)((0,d.aw)(u)),v=_(r,t);function $(t){1!==t?.button&&(u.set((t=>!t)),o&&localStorage.setItem(o,u()?"1":""),a(u(),t),m.set(!1))}return o&&a((0,i.p)(u)),e&&(0,i.g)((()=>{u.set(e())})),n.x`
    <div
      class="vds-menu-checkbox"
      role="menuitemcheckbox"
      tabindex="0"
      aria-label=${v}
      aria-checked=${h}
      data-active=${(0,l.$)((()=>m()?"":null))}
      @pointerup=${$}
      @pointerdown=${function(t){0===t.button&&m.set(!0)}}
      @keydown=${function(t){(0,i.y)(t)&&$()}}
    ></div>
  `}function nt(){const{userPrefersAnnouncements:t,translations:e}=p(),s="Announcements";return W({label:_(e,s),children:it({label:s,storageKey:"vds-player::announcements",onChange(e){t.set(e)}})})}function ot(){const{translations:t}=p(),e=_(t,"Boost"),s=at,i=lt,o=rt;return n.x`
    <media-audio-gain-slider
      class="vds-audio-gain-slider vds-slider"
      aria-label=${e}
      min=${(0,l.$)(s)}
      max=${(0,l.$)(i)}
      step=${(0,l.$)(o)}
      key-step=${(0,l.$)(o)}
    >
      ${q()}${K()}
    </media-audio-gain-slider>
  `}function at(){const{audioGains:t}=p(),e=t();return(0,i.v)(e)?e[0]??0:e.min}function lt(){const{audioGains:t}=p(),e=t();return(0,i.v)(e)?e[e.length-1]??300:e.max}function rt(){const{audioGains:t}=p(),e=t();return(0,i.v)(e)?e[1]-e[0]||25:e.step}function dt(){const{remote:t}=(0,o.u)(),{translations:e}=p(),s="Loop";return W({label:_(e,s),children:it({label:s,storageKey:"vds-player::user-loop",onChange(e,s){t.userPrefersLoopChange(e,s)}})})}function ct(){const{playbackRates:t}=p(),e=t();return(0,i.v)(e)?e[0]??0:e.min}function ut(){const{playbackRates:t}=p(),e=t();return(0,i.v)(e)?e[e.length-1]??2:e.max}function pt(){const{playbackRates:t}=p(),e=t();return(0,i.v)(e)?e[1]-e[0]||.25:e.step}function mt(){const{translations:t}=p(),e=_(t,"Speed"),s=ct,i=ut,o=pt;return n.x`
    <media-speed-slider
      class="vds-speed-slider vds-slider"
      aria-label=${e}
      min=${(0,l.$)(s)}
      max=${(0,l.$)(i)}
      step=${(0,l.$)(o)}
      key-step=${(0,l.$)(o)}
    >
      ${q()}${K()}
    </media-speed-slider>
  `}function ht(){const{remote:t,qualities:e}=(0,o.u)(),{autoQuality:s,canSetQuality:n,qualities:a}=(0,o.b)(),{translations:l}=p(),r="Auto";return(0,i.o)((()=>!n()||a().length<=1))()?null:W({label:_(l,r),children:it({label:r,checked:s,onChange(s,i){s?t.requestAutoQuality(i):t.changeQuality(e.selectedIndex,i)}})})}function vt(){const{translations:t}=p(),e=_(t,"Quality");return n.x`
    <media-quality-slider class="vds-quality-slider vds-slider" aria-label=${e}>
      ${q()}${K()}
    </media-quality-slider>
  `}function $t({placement:t,portal:e,tooltip:s}){return(0,l.$)((()=>{const{viewType:a}=(0,o.b)(),{translations:r,menuContainer:c,noModal:u,menuGroup:m,smallWhen:h}=p(),v=(0,i.o)((()=>u()?(0,i.a5)(t):h()?null:(0,i.a5)(t))),$=(0,i.o)((()=>h()||"bottom"!==m()||"video"!==a()?0:26)),g=(0,i.f)(!1),b=n.x`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${(0,l.$)(v)}
        offset=${(0,l.$)($)}
      >
        ${(0,l.$)((()=>g()?[(0,l.$)((()=>{const{translations:t}=p();return n.x`
      <media-menu class="vds-playback-menu vds-menu">
        ${U({label:()=>f(t,"Playback"),icon:"menu-playback"})}
        <media-menu-items class="vds-menu-items">
          ${[D({children:dt()}),(0,l.$)((()=>{const{translations:t}=p(),{canSetPlaybackRate:e,playbackRate:s}=(0,o.b)();return e()?D({label:_(t,"Speed"),value:(0,l.$)((()=>1===s()?f(t,"Normal"):s()+"x")),children:[j({upIcon:"menu-speed-up",downIcon:"menu-speed-down",children:mt(),isMin:()=>s()===ct(),isMax:()=>s()===ut()})]}):null})),(0,l.$)((()=>{const{hideQualityBitrate:t,translations:e}=p(),{canSetQuality:s,qualities:n,quality:a}=(0,o.b)(),r=(0,i.o)((()=>!s()||n().length<=1)),c=(0,i.o)((()=>(0,d.s)(n())));return r()?null:D({label:_(e,"Quality"),value:(0,l.$)((()=>{const s=a()?.height,i=t()?null:a()?.bitrate,n=i&&i>0?`${(i/1e6).toFixed(2)} Mbps`:null,o=f(e,"Auto");return s?`${s}p${n?` (${n})`:""}`:o})),children:[j({upIcon:"menu-quality-up",downIcon:"menu-quality-down",children:vt(),isMin:()=>c()[0]===a(),isMax:()=>c().at(-1)===a()}),ht()]})}))]}
        </media-menu-items>
      </media-menu>
    `})),(0,l.$)((()=>{const{translations:t}=p();return n.x`
      <media-menu class="vds-accessibility-menu vds-menu">
        ${U({label:()=>f(t,"Accessibility"),icon:"menu-accessibility"})}
        <media-menu-items class="vds-menu-items">
          ${[D({children:[nt(),(0,l.$)((()=>{const{translations:t,userPrefersKeyboardAnimations:e,noKeyboardAnimations:s}=p(),{viewType:n}=(0,o.b)();if((0,i.o)((()=>"video"!==n()||s()))())return null;const a="Keyboard Animations";return W({label:_(t,a),children:it({label:a,defaultChecked:!0,storageKey:"vds-player::keyboard-animations",onChange(t){e.set(t)}})})}))]}),D({children:[(0,l.$)((()=>{const{hasCaptions:t}=(0,o.b)(),{translations:e}=p();return t()?((0,i._)(Y,{all:new Set}),n.x`
      <media-menu class="vds-font-menu vds-menu">
        ${U({label:()=>f(e,"Caption Styles")})}
        <media-menu-items class="vds-menu-items">
          ${[D({label:_(e,"Font"),children:[tt({group:"font",label:"Family",option:Q,defaultValue:"pro-sans",cssVarName:"font-family",getCssVarValue(t,e){const s="capitals"===t?"small-caps":"";return e.el?.style.setProperty("--media-user-font-variant",s),function(t){switch(t){case"mono-serif":return'"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';case"mono-sans":return'"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';case"pro-sans":return'Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';case"casual":return'"Comic Sans MS", Impact, Handlee, fantasy';case"cursive":return'"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';case"capitals":return'"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps';default:return'"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'}}(t)}}),tt({group:"font",label:"Size",option:F,defaultValue:"100%",cssVarName:"font-size",getCssVarValue:et})]}),D({label:_(e,"Text"),children:[tt({group:"text",label:"Color",option:z,defaultValue:"#ffffff",cssVarName:"text-color",getCssVarValue:t=>`rgb(${B(t)} / var(--media-user-text-opacity, 1))`}),tt({group:"text",label:"Shadow",option:J,defaultValue:"none",cssVarName:"text-shadow",getCssVarValue:st}),tt({group:"text",label:"Opacity",option:Z,defaultValue:"100%",cssVarName:"text-opacity",getCssVarValue:et})]}),D({label:_(e,"Text Background"),children:[tt({group:"text-bg",label:"Color",option:z,defaultValue:"#000000",cssVarName:"text-bg",getCssVarValue:t=>`rgb(${B(t)} / var(--media-user-text-bg-opacity, 1))`}),tt({group:"text-bg",label:"Opacity",option:Z,defaultValue:"100%",cssVarName:"text-bg-opacity",getCssVarValue:et})]}),D({label:_(e,"Display Background"),children:[tt({group:"display",label:"Color",option:z,defaultValue:"#000000",cssVarName:"display-bg",getCssVarValue:t=>`rgb(${B(t)} / var(--media-user-display-bg-opacity, 1))`}),tt({group:"display",label:"Opacity",option:Z,defaultValue:"0%",cssVarName:"display-bg-opacity",getCssVarValue:et})]}),D({children:[X()]})]}
        </media-menu-items>
      </media-menu>
    `):null}))]})]}
        </media-menu-items>
      </media-menu>
    `})),(0,l.$)((()=>{const{noAudioGain:t,translations:e}=p(),{audioTracks:s,canSetAudioGain:a}=(0,o.b)();return(0,i.o)((()=>!(a()&&!t())&&s().length<=1))()?null:n.x`
      <media-menu class="vds-audio-menu vds-menu">
        ${U({label:()=>f(e,"Audio"),icon:"menu-audio"})}
        <media-menu-items class="vds-menu-items">
          ${[(0,l.$)((()=>{const{translations:t}=p(),{audioTracks:e}=(0,o.b)(),s=_(t,"Default");return(0,i.o)((()=>e().length<=1))()?null:D({children:n.x`
        <media-menu class="vds-audio-tracks-menu vds-menu">
          ${U({label:()=>f(t,"Track")})}
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
      `})})),(0,l.$)((()=>{const{noAudioGain:t,translations:e}=p(),{canSetAudioGain:s}=(0,o.b)();if((0,i.o)((()=>!s()||t()))())return null;const{audioGain:n}=(0,o.b)();return D({label:_(e,"Boost"),value:(0,l.$)((()=>Math.round(100*((n()??1)-1))+"%")),children:[j({upIcon:"menu-audio-boost-up",downIcon:"menu-audio-boost-down",children:ot(),isMin:()=>100*((n()??1)-1)<=at(),isMax:()=>100*((n()??1)-1)===lt()})]})}))]}
        </media-menu-items>
      </media-menu>
    `})),(0,l.$)((()=>{const{translations:t}=p(),{hasCaptions:e}=(0,o.b)(),s=_(t,"Off");return e()?n.x`
      <media-menu class="vds-captions-menu vds-menu">
        ${U({label:()=>f(t,"Captions"),icon:"menu-captions"})}
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
    `;return n.x`
      <media-menu class="vds-settings-menu vds-menu" @open=${function(){g.set(!0)}} @close=${function(){g.set(!1)}}>
        <media-tooltip class="vds-tooltip">
          <media-tooltip-trigger>
            <media-menu-button
              class="vds-menu-button vds-button"
              aria-label=${_(r,"Settings")}
            >
              ${x("menu-settings","vds-rotate-icon")}
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${(0,i.x)(s)?(0,l.$)(s):s}
          >
            ${_(r,"Settings")}
          </media-tooltip-content>
        </media-tooltip>
        ${e?L(c,b):b}
      </media-menu>
    `}))}function gt({orientation:t,tooltip:e}){return(0,l.$)((()=>{const{pointer:s,muted:r,canSetVolume:d}=(0,o.b)();if("coarse"===s()&&!r())return null;if(!d())return S({tooltip:e});const c=(0,i.f)(void 0),u=(0,a.h)(c);return n.x`
      <div class="vds-volume" ?data-active=${(0,l.$)(u)} ${(0,n.n)(c.set)}>
        ${S({tooltip:e})}
        <div class="vds-volume-popup">${function({orientation:t}={}){const{translations:e}=p(),s=_(e,"Volume");return n.x`
    <media-volume-slider
      class="vds-volume-slider vds-slider"
      aria-label=${s}
      orientation=${(0,n.l)(t)}
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
    `}))}function bt(){const t=(0,i.f)(void 0),e=(0,i.f)(0),{thumbnails:s,translations:o,sliderChaptersMinWidth:r,disableTimeSlider:d,seekStep:c,noScrubGesture:u}=p(),m=_(o,"Seek"),h=(0,l.$)(d),v=(0,l.$)((()=>e()<r())),$=(0,l.$)(s);return(0,a.d)(t,(()=>{const s=t();s&&e.set(s.clientWidth)})),n.x`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${m}
      key-step=${(0,l.$)(c)}
      ?disabled=${h}
      ?no-swipe-gesture=${(0,l.$)(u)}
      ${(0,n.n)(t.set)}
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
  `}function ft(){return(0,l.$)((()=>{const{live:t}=(0,o.b)();return t()?P():n.x`
    <div class="vds-time-group">
      ${(0,l.$)((()=>{const{duration:t}=(0,o.b)();return t()?[n.x`<media-time class="vds-time" type="current"></media-time>`,n.x`<div class="vds-time-divider">/</div>`,n.x`<media-time class="vds-time" type="duration"></media-time>`]:null}))}
    </div>
  `}))}function yt(){return(0,l.$)((()=>{const{textTracks:t}=(0,o.u)(),{title:e,started:s}=(0,o.b)(),a=(0,i.f)(null);return(0,r.w)(t,"chapters",a.set),!a()||!s()&&e()?n.x`<media-title class="vds-chapter-title"></media-title>`:xt()}))}function xt(){return n.x`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}class At extends l.L{async Pf(){const t=(await s.e(6385).then(s.bind(s,6385))).icons,e={};for(const s of Object.keys(t))e[s]=(0,l.I)({name:s,paths:t[s]});return e}}var _t=s(2027);let wt=class extends g{static{this.props={...super.props,when:({viewType:t})=>"audio"===t,smallWhen:({width:t})=>t<576}}};function kt(){const t="top end";return[O({tooltip:"top",placement:t,portal:!0}),$t({tooltip:"top end",placement:t,portal:!0})]}class Ct extends((0,i.H)(_t.L,wt)){constructor(){super(...arguments),this.en=(0,i.f)(!1)}static{this.tagName="media-audio-layout"}static{this.attrs={smallWhen:{converter:t=>"never"!==t&&!!t}}}onSetup(){this.forwardKeepAlive=!1,this.a=(0,o.u)(),this.classList.add("vds-audio-layout"),this.menuContainer=E("vds-audio-layout",(()=>this.isSmallLayout));const{pointer:t}=this.a.$state;(0,i.g)((()=>{"coarse"===t()&&(0,i.g)(this.rn.bind(this))})),(0,i.q)((()=>this.menuContainer?.remove()))}onConnect(){b("audio",(()=>this.isMatch)),(0,i.g)((()=>{const t=this.menuContainer?[this,this.menuContainer]:[this];this.$props.customIcons()?new l.S(t).connect():new At(t).connect()}))}render(){return(0,l.$)(this.Zm.bind(this))}Zm(){return this.isMatch?[y(),H(),n.x`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[I({backward:!0,tooltip:"top start"}),C({tooltip:"top"}),I({tooltip:"top"}),(0,l.$)((()=>{let t=(0,i.f)(void 0),e=(0,i.f)(!1),s=(0,o.u)(),{title:r,started:d,currentTime:c,ended:u}=(0,o.b)(),{translations:m}=p(),h=(0,a.u)(t),v=()=>d()||c()>0;const $=()=>{const t=u()?"Replay":v()?"Continue":"Play";return`${f(m,t)}: ${r()}`};function g(){return n.x`
        <span class="vds-title-text">
          ${(0,l.$)($)}${(0,l.$)((()=>v()?xt():null))}
        </span>
      `}return(0,i.g)((()=>{h()&&document.activeElement===document.body&&s.player.el?.focus()})),(0,a.d)(t,(function(){const s=t(),n=!!s&&!h()&&s.clientWidth<s.children[0].clientWidth;s&&(0,i.I)(s,"vds-marquee",n),e.set(n)})),r()?n.x`
          <span class="vds-title" title=${(0,l.$)($)} ${(0,n.n)(t.set)}>
            ${[g(),(0,l.$)((()=>e()&&!h()?g():null))]}
          </span>
        `:G()})),bt(),(0,l.$)((()=>{const{live:t,duration:e}=(0,o.b)();return t()?P():e()?n.x`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null})),gt({orientation:"vertical",tooltip:"top"}),T({tooltip:"top"}),V(),w({tooltip:"top"}),kt()]}
        </media-controls-group>
      </media-controls>
    `]:null}rn(){this.en()?((0,i.l)(this,"pointerdown",(t=>t.stopPropagation())),(0,i.l)(window,"pointerdown",this.tn.bind(this))):(0,i.l)(this,"pointerdown",this.sn.bind(this),{capture:!0})}sn(t){const{target:e}=t;(0,a.i)(e)&&e.closest(".vds-time-slider")&&(t.stopImmediatePropagation(),this.setAttribute("data-scrubbing",""),this.en.set(!0))}tn(){this.en.set(!1),this.removeAttribute("data-scrubbing")}}class St extends g{static{this.props={...super.props,when:({viewType:t})=>"video"===t,smallWhen:({width:t,height:e})=>t<576||e<380}}}function Tt(){return(0,l.$)((()=>{const t=(0,o.u)(),{noKeyboardAnimations:e,userPrefersKeyboardAnimations:s}=p();if((0,i.o)((()=>e()||!s()))())return null;const r=(0,i.f)(!1),{lastKeyboardAction:d}=t.$state;(0,i.g)((()=>{r.set(!!d());const t=setTimeout((()=>r.set(!1)),500);return()=>{r.set(!1),window.clearTimeout(t)}}));const c=(0,i.o)((()=>{const t=d()?.action;return t&&r()?(0,i.S)(t):null})),u=(0,i.o)((()=>"vds-kb-action"+(r()?"":" hidden"))),m=(0,i.o)(Mt),h=(0,i.o)((()=>{const t=function(){const{$state:t}=(0,o.u)(),e=t.lastKeyboardAction()?.action;switch(e){case"togglePaused":return t.paused()?"kb-pause-icon":"kb-play-icon";case"toggleMuted":return t.muted()||0===t.volume()?"kb-mute-icon":t.volume()>=.5?"kb-volume-up-icon":"kb-volume-down-icon";case"toggleFullscreen":return`kb-fs-${t.fullscreen()?"enter":"exit"}-icon`;case"togglePictureInPicture":return`kb-pip-${t.pictureInPicture()?"enter":"exit"}-icon`;case"toggleCaptions":return t.hasCaptions()?`kb-cc-${t.textTrack()?"on":"off"}-icon`:null;case"volumeUp":return"kb-volume-up-icon";case"volumeDown":return"kb-volume-down-icon";case"seekForward":return"kb-seek-forward-icon";case"seekBackward":return"kb-seek-backward-icon";default:return null}}();return t?(0,a.e)(t):null}));return n.x`
      <div class=${(0,l.$)(u)} data-action=${(0,l.$)(c)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${(0,l.$)(m)}</div>
        </div>
        ${(0,l.$)((()=>(0,n.i)(d(),function(){const t=h();return t?n.x`
        <div class="vds-kb-bezel">
          <div class="vds-kb-icon">${t}</div>
        </div>
      `:null}())))}
      </div>
    `}))}function Mt(){const{$state:t}=(0,o.u)(),e=t.lastKeyboardAction()?.action,s=t.audioGain()??1;switch(e){case"toggleMuted":return t.muted()?"0%":Nt(t.volume(),s);case"volumeUp":case"volumeDown":return Nt(t.volume(),s);default:return""}}function Nt(t,e){return`${Math.round(t*e*100)}%`}function It(){return n.x`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function Pt(){const{menuGroup:t,smallWhen:e}=p(),s=()=>"top"===t()||e()?"bottom":"top",n=(0,i.o)((()=>`${s()} ${"top"===t()?"end":"center"}`)),o=(0,i.o)((()=>`${s()} end`));return[O({tooltip:n,placement:o,portal:!0}),$t({tooltip:n,placement:o,portal:!0})]}function Vt(){return(0,l.$)((()=>{const{noGestures:t}=p();return t()?null:n.x`
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
    `}))}class Ht extends((0,i.H)(_t.L,St)){static{this.tagName="media-video-layout"}static{this.attrs={smallWhen:{converter:t=>"never"!==t&&!!t}}}onSetup(){this.forwardKeepAlive=!1,this.a=(0,o.u)(),this.classList.add("vds-video-layout"),this.menuContainer=E("vds-video-layout",(()=>this.isSmallLayout)),(0,i.q)((()=>this.menuContainer?.remove()))}onConnect(){b("video",(()=>this.isMatch)),(0,i.g)((()=>{const t=this.menuContainer?[this,this.menuContainer]:[this];this.$props.customIcons()?new l.S(t).connect():new At(t).connect()}))}render(){return(0,l.$)(this.Zm.bind(this))}Zm(){const{load:t}=this.a.$props,{canLoad:e,streamType:s,nativeControls:i}=this.a.$state;return!i()&&this.isMatch?"play"!==t()||e()?"unknown"===s()?It():this.isSmallLayout?[y(),Vt(),It(),H(),Tt(),n.x`<div class="vds-scrim"></div>`,n.x`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[w({tooltip:"top start"}),k({tooltip:"bottom start"}),G(),T({tooltip:"bottom"}),V(),Pt(),gt({orientation:"vertical",tooltip:"bottom end"})]}
        </media-controls-group>

        ${G()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[G(),C({tooltip:"top"}),G()]}
        </media-controls-group>

        ${G()}

        <media-controls-group class="vds-controls-group">
          ${[ft(),yt(),N({tooltip:"top end"})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${bt()}
        </media-controls-group>
      </media-controls>
    `,(0,l.$)((()=>{const{duration:t}=(0,o.b)();return 0===t()?null:n.x`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `}))]:[y(),Vt(),It(),Tt(),H(),n.x`<div class="vds-scrim"></div>`,n.x`
      <media-controls class="vds-controls">
        ${[n.x`
    <media-controls-group class="vds-controls-group">
      ${(0,l.$)((()=>{const{menuGroup:t}=p();return"top"===t()?[G(),Pt()]:null}))}
    </media-controls-group>
  `,G(),n.x`<media-controls-group class="vds-controls-group"></media-controls-group>`,G(),n.x`
            <media-controls-group class="vds-controls-group">
              ${bt()}
            </media-controls-group>
          `,n.x`
            <media-controls-group class="vds-controls-group">
              ${[C({tooltip:"top start"}),gt({orientation:"horizontal",tooltip:"top"}),ft(),yt(),T({tooltip:"top"}),(0,l.$)((()=>{const{menuGroup:t}=p();return"bottom"===t()?Pt():null})),w({tooltip:"top"}),k({tooltip:"top"}),V(),M(),N({tooltip:"top end"})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]:n.x`
    <div class="vds-load-container">
      ${[It(),C({tooltip:"top"})]}
    </div>
  `:null}}(0,i.d)(Ct),(0,i.d)(Ht)}}]);