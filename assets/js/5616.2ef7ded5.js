/*! For license information please see 5616.2ef7ded5.js.LICENSE.txt */
"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[5616],{3339:(t,e,s)=>{var i;s.d(e,{A:()=>k,D:()=>G,a:()=>at,c:()=>J,e:()=>R,i:()=>ot,l:()=>X,n:()=>et,o:()=>it,t:()=>B,x:()=>A});const n=window,a=n.trustedTypes,o=a?a.createPolicy("lit-html",{createHTML:t=>t}):void 0,l="$lit$",r=`lit$${(Math.random()+"").slice(9)}$`,d="?"+r,c=`<${d}>`,u=document,p=()=>u.createComment(""),m=t=>null===t||"object"!=typeof t&&"function"!=typeof t,v=Array.isArray,h="[ \t\n\f\r]",$=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,b=/-->/g,_=/>/g,g=RegExp(`>|${h}(?:([^\\s"'>=/]+)(${h}*=${h}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),y=/'/g,f=/"/g,x=/^(?:script|style|textarea|title)$/i,A=(t,...e)=>({_$litType$:1,strings:t,values:e}),w=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),C=new WeakMap,T=u.createTreeWalker(u,129,null,!1);function S(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==o?o.createHTML(e):e}const P=(t,e)=>{const s=t.length-1,i=[];let n,a=2===e?"<svg>":"",o=$;for(let e=0;e<s;e++){const s=t[e];let d,u,p=-1,m=0;for(;m<s.length&&(o.lastIndex=m,u=o.exec(s),null!==u);)m=o.lastIndex,o===$?"!--"===u[1]?o=b:void 0!==u[1]?o=_:void 0!==u[2]?(x.test(u[2])&&(n=RegExp("</"+u[2],"g")),o=g):void 0!==u[3]&&(o=g):o===g?">"===u[0]?(o=null!=n?n:$,p=-1):void 0===u[1]?p=-2:(p=o.lastIndex-u[2].length,d=u[1],o=void 0===u[3]?g:'"'===u[3]?f:y):o===f||o===y?o=g:o===b||o===_?o=$:(o=g,n=void 0);const v=o===g&&t[e+1].startsWith("/>")?" ":"";a+=o===$?s+c:p>=0?(i.push(d),s.slice(0,p)+l+s.slice(p)+r+v):s+r+(-2===p?(i.push(void 0),e):v)}return[S(t,a+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class N{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const c=t.length-1,u=this.parts,[m,v]=P(t,e);if(this.el=N.createElement(m,s),T.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=T.nextNode())&&u.length<c;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith(l)||e.startsWith(r)){const s=v[o++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+l).split(r),e=/([.?@])?(.*)/.exec(s);u.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?L:"?"===e[1]?j:"@"===e[1]?W:E})}else u.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(x.test(i.tagName)){const t=i.textContent.split(r),e=t.length-1;if(e>0){i.textContent=a?a.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],p()),T.nextNode(),u.push({type:2,index:++n});i.append(t[e],p())}}}else if(8===i.nodeType)if(i.data===d)u.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(r,t+1));)u.push({type:7,index:n}),t+=r.length-1}n++}}static createElement(t,e){const s=u.createElement("template");return s.innerHTML=t,s}}function M(t,e,s=t,i){var n,a,o,l;if(e===w)return e;let r=void 0!==i?null===(n=s._$Co)||void 0===n?void 0:n[i]:s._$Cl;const d=m(e)?void 0:e._$litDirective$;return(null==r?void 0:r.constructor)!==d&&(null===(a=null==r?void 0:r._$AO)||void 0===a||a.call(r,!1),void 0===d?r=void 0:(r=new d(t),r._$AT(t,s,i)),void 0!==i?(null!==(o=(l=s)._$Co)&&void 0!==o?o:l._$Co=[])[i]=r:s._$Cl=r),void 0!==r&&(e=M(t,r._$AS(t,e.values),r,i)),e}class V{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:u).importNode(s,!0);T.currentNode=n;let a=T.nextNode(),o=0,l=0,r=i[0];for(;void 0!==r;){if(o===r.index){let e;2===r.type?e=new H(a,a.nextSibling,this,t):1===r.type?e=new r.ctor(a,r.name,r.strings,this,t):6===r.type&&(e=new q(a,this,t)),this._$AV.push(e),r=i[++l]}o!==(null==r?void 0:r.index)&&(a=T.nextNode(),o++)}return T.currentNode=u,n}v(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class H{constructor(t,e,s,i){var n;this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=M(this,t,e),m(t)?t===k||null==t||""===t?(this._$AH!==k&&this._$AR(),this._$AH=k):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>v(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==k&&m(this._$AH)?this._$AA.nextSibling.data=t:this.$(u.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=N.createElement(S(i.h,i.h[0]),this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(s);else{const t=new V(n,this),e=t.u(this.options);t.v(s),this.$(e),this._$AH=t}}_$AC(t){let e=C.get(t.strings);return void 0===e&&C.set(t.strings,e=new N(t)),e}T(t){v(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new H(this.k(p()),this.k(p()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class E{constructor(t,e,s,i,n){this.type=1,this._$AH=k,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=k}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let a=!1;if(void 0===n)t=M(this,t,e,0),a=!m(t)||t!==this._$AH&&t!==w,a&&(this._$AH=t);else{const i=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=M(this,i[s+o],e,o),l===w&&(l=this._$AH[o]),a||(a=!m(l)||l!==this._$AH[o]),l===k?t=k:t!==k&&(t+=(null!=l?l:"")+n[o+1]),this._$AH[o]=l}a&&!i&&this.j(t)}j(t){t===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class L extends E{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===k?void 0:t}}const I=a?a.emptyScript:"";class j extends E{constructor(){super(...arguments),this.type=4}j(t){t&&t!==k?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name)}}class W extends E{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=M(this,t,e,0))&&void 0!==s?s:k)===w)return;const i=this._$AH,n=t===k&&i!==k||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==k&&(i===k||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class q{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}}const D=n.litHtmlPolyfillSupport;null==D||D(N,H),(null!==(i=n.litHtmlVersions)&&void 0!==i?i:n.litHtmlVersions=[]).push("2.8.0");const G=(t,e,s)=>{var i,n;const a=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let o=a._$litPart$;if(void 0===o){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;a._$litPart$=o=new H(e.insertBefore(p(),t),t,void 0,null!=s?s:{})}return o._$AI(t),o},O={},B={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},R=t=>(...e)=>({_$litDirective$:t,values:e});let U=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const F=(t,e)=>{var s,i;const n=t._$AN;if(void 0===n)return!1;for(const t of n)null===(i=(s=t)._$AO)||void 0===i||i.call(s,e,!1),F(t,e);return!0},z=t=>{let e,s;do{if(void 0===(e=t._$AM))break;s=e._$AN,s.delete(t),t=e}while(0===(null==s?void 0:s.size))},K=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),Q(e)}};function Y(t){void 0!==this._$AN?(z(this),this._$AM=t,K(this)):this._$AM=t}function Z(t,e=!1,s=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(i))for(let t=s;t<i.length;t++)F(i[t],!1),z(i[t]);else null!=i&&(F(i,!1),z(i));else F(this,t)}const Q=t=>{var e,s,i,n;t.type==B.CHILD&&(null!==(e=(i=t)._$AP)&&void 0!==e||(i._$AP=Z),null!==(s=(n=t)._$AQ)&&void 0!==s||(n._$AQ=Y))};class J extends U{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),K(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,i;t!==this.isConnected&&(this.isConnected=t,t?null===(s=this.reconnected)||void 0===s||s.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),e&&(F(this,t),z(this))}setValue(t){if((t=>void 0===this._$Ct.strings)())this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const X=t=>null!=t?t:k,tt=new WeakMap,et=R(class extends J{render(t){return k}update(t,[e]){var s;const i=e!==this.G;return i&&void 0!==this.G&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=e,this.dt=null===(s=t.options)||void 0===s?void 0:s.host,this.ot(this.lt=t.element)),k}ot(t){var e;if("function"==typeof this.G){const s=null!==(e=this.dt)&&void 0!==e?e:globalThis;let i=tt.get(s);void 0===i&&(i=new WeakMap,tt.set(s,i)),void 0!==i.get(this.G)&&this.G.call(this.dt,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.dt,t)}else this.G.value=t}get rt(){var t,e,s;return"function"==typeof this.G?null===(e=tt.get(null!==(t=this.dt)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.G):null===(s=this.G)||void 0===s?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});class st extends U{constructor(t){if(super(t),this.et=k,t.type!==B.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===k||null==t)return this.ft=void 0,this.et=t;if(t===w)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}st.directiveName="unsafeHTML",st.resultType=1;const it=R(st);class nt extends st{}nt.directiveName="unsafeSVG",nt.resultType=2;const at=R(nt),ot=R(class extends U{constructor(){super(...arguments),this.key=k}render(t,e){return this.key=t,e}update(t,[e,s]){return e!==this.key&&(((t,e=O)=>{t._$AH=e})(t),this.key=e),s}})},7388:(t,e,s)=>{s.d(e,{L:()=>n});var i=s(3339);class n extends HTMLElement{constructor(){super(...arguments),this.rootPart=null}connectedCallback(){this.rootPart=(0,i.D)(this.render(),this,{renderBefore:this.firstChild}),this.rootPart.setConnected(!0)}disconnectedCallback(){this.rootPart?.setConnected(!1),this.rootPart=null}}},5616:(t,e,s)=>{s.r(e);var i=s(5242),n=s(3339),a=s(1322),o=s(5390),l=s(1801);class r extends n.c{constructor(t){super(t),this.h=null,this.w=!1,this.ra=null,this.w=t.type===n.t.ATTRIBUTE||t.type===n.t.BOOLEAN_ATTRIBUTE}render(t){return t!==this.h&&(this.disconnected(),this.h=t,this.isConnected&&this.Si()),this.h?this.el((0,i.u)(this.h)):n.A}reconnected(){this.Si()}disconnected(){this.ra?.(),this.ra=null}Si(){this.h&&(this.ra=(0,i.e)(this.o.bind(this)))}el(t){return this.w?(0,n.l)(t):t}hl(t){this.setValue(this.el(t))}o(){this.hl(this.h?.())}}function d(t){return(0,n.e)(r)((0,i.q)(t))}class c{constructor(t,e){this.Wj=t,this.Ca=e,this.elements=new Set,this.vf=(0,i.p)(this.ea.bind(this))}connect(){this.ea();const t=new MutationObserver(this.vf);t.observe(this.Wj,{childList:!0,subtree:!0}),(0,i.o)((()=>t.disconnect())),(0,i.o)(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(t,e){t instanceof Node?(e.textContent="",e.append(t)):(0,n.D)(t,e),e.style.display||(e.style.display="contents");const s=e.firstElementChild;if(!s)return;const i=e.getAttribute("data-class");i&&s.classList.add(...i.split(" "))}ea(t){if(t&&!t.some((t=>t.addedNodes.length)))return;let e=!1,s=this.Wj.querySelectorAll("slot");for(const t of s)t.hasAttribute("name")&&!this.elements.has(t)&&(this.elements.add(t),e=!0);e&&this.Ca(this.elements)}}let u=0,p="data-slot-id";class m{constructor(t){this.Wj=t,this.vf=(0,i.p)(this.ea.bind(this)),this.slots=new c(t,this.ea.bind(this))}connect(){this.slots.connect(),this.ea();const t=new MutationObserver(this.vf);t.observe(this.Wj,{childList:!0}),(0,i.o)((()=>t.disconnect()))}ea(){for(const t of this.Wj.children){if(1!==t.nodeType)continue;const e=t.getAttribute("slot");if(!e)continue;t.style.display="none";let s=t.getAttribute(p);s||t.setAttribute(p,s=++u+"");for(const i of this.slots.elements){if(i.getAttribute("name")!==e||i.getAttribute(p)===s)continue;const n=document.importNode(t,!0);e.includes("-icon")&&n.classList.add("vds-icon"),n.style.display="",n.removeAttribute("slot"),this.slots.assign(n,i),i.setAttribute(p,s)}}}}function v({name:t,class:e,state:s,paths:a,viewBox:o="0 0 32 32"}){return n.x`<svg
    class="${"vds-icon"+(e?` ${e}`:"")}"
    viewBox="${o}"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${(0,n.l)(t??s)}
  >
    ${(0,i.t)(a)?(0,n.a)(a):d(a)}
  </svg>`}class h{constructor(t){this.Wj=t,this.Zj={},this.bk=!1,this.slots=new c(t,this.ck.bind(this))}connect(){this.slots.connect(),(0,i.o)(this.disconnect.bind(this))}load(){this.xe().then((t=>{this.Zj=t,this.bk=!0,this.ck()}))}disconnect(){for(const{slot:t}of this.dk())t.textContent=""}*dk(){for(const t of Object.keys(this.Zj)){const e=`${t}-icon`;for(const s of this.slots.elements)s.name===e&&(yield{icon:this.Zj[t],slot:s})}}ck(){if(this.bk)for(const{icon:t,slot:e}of this.dk())this.slots.assign(t,e)}}class $ extends h{connect(){super.connect();const t=this.Wj.parentElement;if(!t)return;let e,s=new IntersectionObserver((t=>{t[0]?.isIntersecting&&(e?.(),e=void 0,this.load())}));s.observe(t),e=(0,i.o)((()=>s.disconnect()))}}const b=(0,i.V)();function _(){return(0,i.v)(b)}const g={customIcons:!1,disableTimeSlider:!1,menuGroup:"bottom",noGestures:!1,noKeyboardActionDisplay:!1,noModal:!1,noScrubGesture:!1,playbackRates:o.ae,seekStep:10,sliderChaptersMinWidth:325,smallWhen:!1,thumbnails:null,translations:null,when:!1};var y=Object.defineProperty,f=Object.getOwnPropertyDescriptor,x=(t,e,s,i)=>{for(var n,a=i>1?void 0:i?f(e,s):e,o=t.length-1;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&y(e,s,a),a};class A extends i.C{constructor(){super(...arguments),this._m=(0,i.q)((()=>{const t=this.$props.when();return this.$m(t)})),this.Ym=(0,i.q)((()=>{const t=this.$props.smallWhen();return this.$m(t)})),this.menuContainer=null}static{this.props=g}get isMatch(){return this._m()}get isSmallLayout(){return this.Ym()}onSetup(){this.a=(0,a.u)(),this.setAttributes({"data-match":this._m,"data-size":()=>this.Ym()?"sm":null,"data-no-scrub-gesture":this.$props.noScrubGesture});const t=this;(0,i.W)(b,{...this.$props,when:this._m,smallWhen:this.Ym,get menuContainer(){return t.menuContainer}})}$m(t){return"never"!==t&&((0,i.z)(t)?t:(0,i.q)((()=>t(this.a.player.state)))())}}function w(t,e){return t()?.[e]??e}function k({label:t,icon:e,hint:s}){return n.x`
    <media-menu-button class="vds-menu-button">
      <slot name="menu-arrow-left-icon" data-class="vds-menu-button-close-icon"></slot>
      ${e?n.x`<slot name="${e}-icon" data-class="vds-menu-button-icon"></slot>`:null}
      <span class="vds-menu-button-label">${d(t)}</span>
      <span class="vds-menu-button-hint" data-part="hint">${s?d(s):null} </span>
      <slot name="menu-arrow-right-icon" data-class="vds-menu-button-open-icon"></slot>
    </media-menu-button>
  `}x([i.Y],A.prototype,"menuContainer",2),x([i.Y],A.prototype,"isMatch",1),x([i.Y],A.prototype,"isSmallLayout",1);const C=["White","Yellow","Green","Cyan","Blue","Magenta","Red","Black"],T=["0%","25%","50%","75%","100%"],S={"Monospaced Serif":"mono-serif","Proportional Serif":"pro-serif","Monospaced Sans-Serif":"mono-sans","Proportional Sans-Serif":"pro-sans",Casual:"casual",Cursive:"cursive","Small Capitals":"capitals"},P=["50%","75%","100%","150%","200%","300%","400%"],N=["None","Drop Shadow","Raised","Depressed","Outline"],M=(0,i.V)();function V({label:t,options:e,defaultValue:s,cssVarName:o,getCssVarValue:l}){const{player:r}=(0,a.u)(),{translations:c}=_(),u=(0,i.v)(M),p=(h=e,(0,i.r)(h)?h.map((t=>({label:t,value:t.toLowerCase()}))):Object.keys(h).map((t=>({label:t,value:h[t]})))),m=`${t.toLowerCase().replace(/\s/g,"-")}`,v=(0,i.n)(s);var h;const $=localStorage.getItem(`vds-player:${m}`);function b(t){v.set(t),localStorage.setItem(`vds-player:${m}`,t),r.el?.style.setProperty(`--media-user-${o}`,l?.(t,r)??t)}function g(){b(s)}return $&&b($),u.all.add(g),(0,i.o)((()=>{u.all.delete(g)})),n.x`
    <media-menu class=${`vds-${m}-menu vds-menu`} @open=${function(){u.current=g}} @close=${function(){u.current=void 0}}>
      ${k({label:()=>w(c,t),hint:()=>{const t=v(),e=p.find((e=>e.value===t))?.label||"";return w(c,(0,i.t)(e)?e:e())}})}
      <media-menu-items class="vds-menu-items">
        ${function({value:t=null,options:e,hideLabel:s=!1,children:a=null,onChange:o=null}){function l(t){const{value:e,label:o}=t;return n.x`
      <media-radio class="vds-radio" value=${e}>
        <div class="vds-radio-check"></div>
        ${s?null:n.x`
              <span class="vds-radio-label" data-part="label">
                ${(0,i.t)(o)?o:d(o)}
              </span>
            `}
        ${(0,i.b)(a)?a(t):a}
      </media-radio>
    `}return n.x`
    <media-radio-group
      class="vds-radio-group"
      value=${(0,i.t)(t)?t:t?d(t):""}
      @change=${o}
    >
      ${(0,i.r)(e)?e.map(l):d((()=>e().map(l)))}
    </media-radio-group>
  `}({value:v,options:p,onChange({detail:t}){b(t)}})}
      </media-menu-items>
    </media-menu>
  `}function H(t){return(parseInt(t)/100).toString()}function E(t){switch(t){case"white":return"255 255 255";case"yellow":return"255 255 0";case"green":return"0 128 0";case"cyan":return"0 255 255";case"blue":return"0 0 255";case"magenta":return"255 0 255";case"red":return"255 0 0";case"black":return"0 0 0"}}function L(t){switch(t){case"drop shadow":return"rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px";case"raised":return"rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px";case"depressed":return"rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px";case"outline":return"rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px";default:return""}}function I({tooltip:t}){const{translations:e}=_(),{remotePlaybackState:s}=(0,a.b)(),o=d((()=>`${w(e,"AirPlay")} ${(0,i._)(s())}`)),l=nt(e,"AirPlay");return n.x`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${o}>
          <slot name="airplay-icon" data-class="vds-airplay-icon"></slot>
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-airplay-tooltip-text">${l}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function j({tooltip:t}){const{translations:e}=_(),{remotePlaybackState:s}=(0,a.b)(),o=d((()=>`${w(e,"Google Cast")} ${(0,i._)(s())}`)),l=nt(e,"Google Cast");return n.x`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${o}>
          <slot name="google-cast-icon" data-class="vds-google-cast-icon"></slot>
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-google-cast-tooltip-text">${l}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function W({tooltip:t}){const{translations:e}=_(),s=nt(e,"Play"),i=nt(e,"Pause");return n.x`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button
          class="vds-play-button vds-button"
          aria-label=${nt(e,"Play")}
        >
          <slot name="play-icon" data-class="vds-play-icon"></slot>
          <slot name="pause-icon" data-class="vds-pause-icon"></slot>
          <slot name="replay-icon" data-class="vds-replay-icon"></slot>
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-play-tooltip-text">${s}</span>
        <span class="vds-pause-tooltip-text">${i}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function q({tooltip:t,ref:e=i.Z}){const{translations:s}=_(),a=nt(s,"Mute"),o=nt(s,"Unmute");return n.x`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${nt(s,"Mute")}
          ${(0,n.n)(e)}
        >
          <slot name="mute-icon" data-class="vds-mute-icon"></slot>
          <slot name="volume-low-icon" data-class="vds-volume-low-icon"></slot>
          <slot name="volume-high-icon" data-class="vds-volume-high-icon"></slot>
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-mute-tooltip-text">${o}</span>
        <span class="vds-unmute-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function D({tooltip:t}){const{translations:e}=_(),s=nt(e,"Closed-Captions On"),i=nt(e,"Closed-Captions Off");return n.x`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button
          class="vds-caption-button vds-button"
          aria-label=${nt(e,"Captions")}
        >
          <slot name="cc-on-icon" data-class="vds-cc-on-icon"></slot>
          <slot name="cc-off-icon" data-class="vds-cc-off-icon"></slot>
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-cc-on-tooltip-text">${i}</span>
        <span class="vds-cc-off-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function G(){const{translations:t}=_(),e=nt(t,"Enter PiP"),s=nt(t,"Exit PiP");return n.x`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button
          class="vds-pip-button vds-button"
          aria-label=${nt(t,"PiP")}
        >
          <slot name="pip-enter-icon" data-class="vds-pip-enter-icon"></slot>
          <slot name="pip-exit-icon" data-class="vds-pip-exit-icon"></slot>
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${e}</span>
        <span class="vds-pip-exit-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function O({tooltip:t}){const{translations:e}=_(),s=nt(e,"Enter Fullscreen"),i=nt(e,"Exit Fullscreen");return n.x`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button
          class="vds-fullscreen-button vds-button"
          aria-label=${nt(e,"Fullscreen")}
        >
          <slot name="fs-enter-icon" data-class="vds-fs-enter-icon"></slot>
          <slot name="fs-exit-icon" data-class="vds-fs-exit-icon"></slot>
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-fs-enter-tooltip-text">${s}</span>
        <span class="vds-fs-exit-tooltip-text">${i}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function B({backward:t,tooltip:e}){const{translations:s,seekStep:i}=_(),a=t?"Seek Backward":"Seek Forward",o=nt(s,a);return n.x`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${d((()=>(t?-1:1)*i()))}
          aria-label=${o}
        >
          ${t?n.x`<slot name="seek-backward-icon"></slot>`:n.x`<slot name="seek-forward-icon"></slot>`}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        ${nt(s,a)}
      </media-tooltip-content>
    </media-tooltip>
  `}function R({orientation:t}={}){const{translations:e}=_(),s=nt(e,"Volume");return n.x`
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
  `}function U(){const t=(0,i.n)(void 0),e=(0,i.n)(0),{thumbnails:s,translations:a,sliderChaptersMinWidth:o,disableTimeSlider:r,seekStep:c,noScrubGesture:u}=_(),p=nt(a,"Seek"),m=d(r),v=d((()=>e()<o())),h=d(s);return(0,l.b)(t,(()=>{const s=t();s&&e.set(s.clientWidth)})),n.x`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${p}
      key-step=${d(c)}
      ?disabled=${m}
      ?no-swipe-gesture=${d(u)}
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
          .src=${h}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `}function F(){const{translations:t}=_(),{live:e}=(0,a.b)(),s=nt(t,"Skip To Live"),i=nt(t,"LIVE");return e()?n.x`
        <media-live-button class="vds-live-button" aria-label=${s}>
          <span class="vds-live-button-text">${i}</span>
        </media-live-button>
      `:null}function z(){return n.x`<div class="vds-controls-spacer"></div>`}function K(){return d((()=>{const{live:t}=(0,a.b)();return t()?F():n.x`
    <div class="vds-time-group">
      ${d((()=>{const{duration:t}=(0,a.b)();return t()?[n.x`<media-time class="vds-time" type="current"></media-time>`,n.x`<div class="vds-time-divider">/</div>`,n.x`<media-time class="vds-time" type="duration"></media-time>`]:null}))}
    </div>
  `}))}function Y(t,e){return n.x`
    <media-menu-portal .container=${t} disabled="fullscreen">
      ${e}
    </media-menu-portal>
  `}function Z(){return n.x`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}function Q({placement:t,tooltip:e,portal:s}){const{viewType:o}=(0,a.b)(),{translations:l,thumbnails:r,menuContainer:c,noModal:u,menuGroup:p,smallWhen:m}=_(),v=(0,i.q)((()=>u()?(0,i.$)(t):m()?null:(0,i.$)(t))),h=(0,i.q)((()=>m()||"bottom"!==p()||"video"!==o()?0:26)),$=n.x`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${d(v)}
      offset=${d(h)}
    >
      <media-chapters-radio-group
        class="vds-chapters-radio-group vds-radio-group"
        .thumbnails=${d(r)}
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
    </media-menu-items>
  `;return n.x`
    <media-menu class="vds-chapters-menu vds-menu">
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${nt(l,"Chapters")}
          >
            <slot name="menu-chapters-icon"></slot>
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${(0,i.b)(e)?d(e):e}
        >
          ${nt(l,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${s?Y(c,$):$}
    </media-menu>
  `}function J({placement:t,portal:e,tooltip:s}){return d((()=>{const{viewType:o,canSetPlaybackRate:l,canSetQuality:r,qualities:c,audioTracks:u,hasCaptions:p}=(0,a.b)(),{translations:m,menuContainer:v,noModal:h,menuGroup:$,smallWhen:b}=_(),g=(0,i.q)((()=>h()?(0,i.$)(t):b()?null:(0,i.$)(t))),y=(0,i.q)((()=>b()||"bottom"!==$()||"video"!==o()?0:26));if(!(0,i.q)((()=>l()||!(!r()||!c().length)||!!u().length||p()))())return null;const f=n.x`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${d(g)}
        offset=${d(y)}
      >
        ${[X(),tt(),et(),st(),d((()=>{const{hasCaptions:t}=(0,a.b)(),{translations:e}=_();return t()?((0,i.W)(M,{all:new Set}),n.x`
      <media-menu class="vds-font-menu vds-menu">
        ${k({label:()=>w(e,"Font Styles"),icon:"menu-font"})}
        <media-menu-items class="vds-menu-items">
          ${V({label:"Font Family",options:S,defaultValue:"pro-sans",cssVarName:"font-family",getCssVarValue(t,e){const s="capitals"===t?"small-caps":"";return e.el?.style.setProperty("--media-user-font-variant",s),function(t){switch(t){case"mono-serif":return'"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';case"mono-sans":return'"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';case"pro-sans":return'Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';case"casual":return'"Comic Sans MS", Impact, Handlee, fantasy';case"cursive":return'"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';case"capitals":return'"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps';default:return'"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'}}(t)}})}${V({label:"Font Size",options:P,defaultValue:"100%",cssVarName:"font-size",getCssVarValue:H})}${V({label:"Text Color",options:C,defaultValue:"white",cssVarName:"text-color",getCssVarValue:t=>`rgb(${E(t)} / var(--media-user-text-opacity, 1))`})}${V({label:"Text Opacity",options:T,defaultValue:"100%",cssVarName:"text-opacity",getCssVarValue:H})}${V({label:"Text Shadow",options:N,defaultValue:"none",cssVarName:"text-shadow",getCssVarValue:L})}
          ${V({label:"Background Color",options:C,defaultValue:"black",cssVarName:"text-bg",getCssVarValue:t=>`rgb(${E(t)} / var(--media-user-text-bg-opacity, 1))`})}${V({label:"Background Opacity",options:T,defaultValue:"100%",cssVarName:"text-bg-opacity",getCssVarValue:H})}${V({label:"Display Background Color",options:C,defaultValue:"black",cssVarName:"display-bg",getCssVarValue:t=>`rgb(${E(t)} / var(--media-user-display-bg-opacity, 1))`})}
          ${V({label:"Display Background Opacity",options:T,defaultValue:"0%",cssVarName:"display-bg-opacity",getCssVarValue:H})}${function(){const{translations:t}=_(),e=(0,i.v)(M);return n.x`
    <button class="vds-menu-button" role="menuitem" @click=${function(){e.current?e.current():e.all.forEach((t=>t()))}}>
      <span class="vds-menu-button-label">${d((()=>w(t,"Reset")))}</span>
    </button>
  `}()}
        </media-menu-items>
      </media-menu>
    `):null}))]}
      </media-menu-items>
    `;return n.x`
      <media-menu class="vds-settings-menu vds-menu">
        <media-tooltip class="vds-tooltip">
          <media-tooltip-trigger>
            <media-menu-button
              class="vds-menu-button vds-button"
              aria-label=${nt(m,"Settings")}
            >
              <slot name="menu-settings-icon" data-class="vds-rotate-icon"></slot>
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${(0,i.b)(s)?d(s):s}
          >
            ${nt(m,"Settings")}
          </media-tooltip-content>
        </media-tooltip>
        ${e?Y(v,f):f}
      </media-menu>
    `}))}function X(){const{translations:t}=_(),e=nt(t,"Default");return n.x`
    <media-menu class="vds-audio-menu vds-menu">
      ${k({label:()=>w(t,"Audio"),icon:"menu-audio"})}
      <media-menu-items class="vds-menu-items">
        <media-audio-radio-group
          class="vds-audio-radio-group vds-radio-group"
          empty-label=${e}
        >
          <template>
            <media-radio class="vds-audio-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
            </media-radio>
          </template>
        </media-audio-radio-group>
      </media-menu-items>
    </media-menu>
  `}function tt(){const{translations:t,playbackRates:e}=_(),s=nt(t,"Normal");return n.x`
    <media-menu class="vds-speed-menu vds-menu">
      ${k({label:()=>w(t,"Speed"),icon:"menu-speed"})}
      <media-menu-items class="vds-menu-items">
        <media-speed-radio-group
          class="vds-speed-radio-group vds-radio-group"
          normal-label=${s}
          .rates=${d(e)}
        >
          <template>
            <media-radio class="vds-speed-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
            </media-radio>
          </template>
        </media-speed-radio-group>
      </media-menu-items>
    </media-menu>
  `}function et(){const{translations:t}=_(),e=nt(t,"Auto");return n.x`
    <media-menu class="vds-quality-menu vds-menu">
      ${k({label:()=>w(t,"Quality"),icon:"menu-quality"})}
      <media-menu-items class="vds-menu-items">
        <media-quality-radio-group
          class="vds-quality-radio-group vds-radio-group"
          auto-label=${e}
        >
          <template>
            <media-radio class="vds-quality-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
              <span class="vds-radio-hint" data-part="bitrate"></span>
            </media-radio>
          </template>
        </media-quality-radio-group>
      </media-menu-items>
    </media-menu>
  `}function st(){const{translations:t}=_(),e=nt(t,"Off");return n.x`
    <media-menu class="vds-captions-menu vds-menu">
      ${k({label:()=>w(t,"Captions"),icon:"menu-captions"})}
      <media-menu-items class="vds-menu-items">
        <media-captions-radio-group
          class="vds-captions-radio-group vds-radio-group"
          off-label=${e}
        >
          <template>
            <media-radio class="vds-caption-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
            </media-radio>
          </template>
        </media-captions-radio-group>
      </media-menu-items>
    </media-menu>
  `}function it(t){let e=document.querySelector(`body > .${t}`);return e||(e=document.createElement("div"),e.style.display="contents",e.classList.add(t),document.body.append(e)),e}function nt(t,e){return d((()=>w(t,e)))}class at extends ${async xe(){const t=(await s.e(4399).then(s.bind(s,4399))).icons,e={};for(const s of Object.keys(t))e[s]=v({name:s,paths:t[s]});return e}}var ot=s(7388);let lt=class extends A{static{this.props={...super.props,when:({viewType:t})=>"audio"===t,smallWhen:({width:t})=>t<576}}};function rt(){const t="top end";return[Q({tooltip:"top",placement:t,portal:!0}),J({tooltip:"top end",placement:t,portal:!0})]}class dt extends((0,i.H)(ot.L,lt)){constructor(){super(...arguments),this.jn=(0,i.n)(!1)}static{this.tagName="media-audio-layout"}static{this.attrs={smallWhen:{converter:t=>"never"!==t&&!!t}}}onSetup(){this.forwardKeepAlive=!1,this.a=(0,a.u)(),this.classList.add("vds-audio-layout"),this.menuContainer=it("vds-audio-layout"),(0,i.e)((()=>{this.menuContainer&&(0,i.s)(this.menuContainer,"data-size",this.isSmallLayout&&"sm")}));const{pointer:t}=this.a.$state;(0,i.e)((()=>{"coarse"===t()&&(0,i.e)(this.kn.bind(this))})),(0,i.o)((()=>this.menuContainer?.remove()))}onConnect(){this.a.player.el?.setAttribute("data-layout","audio"),(0,i.o)((()=>this.a.player.el?.removeAttribute("data-layout"))),(0,i.e)((()=>{this.$props.customIcons()?new m(this).connect():new at(this).connect()}))}render(){return n.x`${d(this._j.bind(this))}`}_j(){return this.isMatch?[n.x`<media-captions class="vds-captions"></media-captions>`,n.x`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[B({backward:!0,tooltip:"top start"}),W({tooltip:"top"}),B({tooltip:"top"}),d((()=>{let t=(0,i.n)(void 0),e=(0,i.n)(!1),s=(0,a.u)(),{title:o,started:r,currentTime:c,ended:u}=(0,a.b)(),{translations:p}=_(),m=(0,l.u)(t),v=()=>r()||c()>0;const h=()=>{const t=u()?"Replay":v()?"Continue":"Play";return`${w(p,t)}: ${o()}`};function $(){return n.x`
        <span class="vds-title-text">
          ${d(h)}${d((()=>v()?Z():null))}
        </span>
      `}return(0,i.e)((()=>{m()&&document.activeElement===document.body&&s.player.el?.focus()})),(0,l.b)(t,(function(){const s=t(),n=!!s&&!m()&&s.clientWidth<s.children[0].clientWidth;s&&(0,i.Q)(s,"vds-marquee",n),e.set(n)})),o()?n.x`
          <span class="vds-title" title=${d(h)} ${(0,n.n)(t.set)}>
            ${[$(),d((()=>e()&&!m()?$():null))]}
          </span>
        `:z()})),U(),d((()=>{const{live:t,duration:e}=(0,a.b)();return t()?F():e()?n.x`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null})),d((()=>{const{pointer:t,muted:e}=(0,a.b)();if("coarse"===t()&&!e())return null;const s=(0,i.n)(void 0),o=(0,i.n)(void 0),r=(0,i.n)(void 0),c=(0,l.d)(s),u=(0,l.e)(o);return(0,i.e)((()=>{u()&&((0,l.f)(s,o,"trigger"),(0,l.f)(s,r,"popper"))})),n.x`
      <div class="vds-volume" ?data-active=${d(c)} ${(0,n.n)(s.set)}>
        ${q({tooltip:"top",ref:o.set})}
        <div class="vds-volume-popup" ${(0,n.n)(r.set)}>
          ${R({orientation:"vertical"})}
        </div>
      </div>
    `})),D({tooltip:"top"}),rt()]}
        </media-controls-group>
      </media-controls>
    `]:null}kn(){this.jn()?((0,i.l)(this,"pointerdown",(t=>t.stopPropagation())),(0,i.l)(window,"pointerdown",this.mn.bind(this))):(0,i.l)(this,"pointerdown",this.ln.bind(this),{capture:!0})}ln(t){const{target:e}=t;e instanceof HTMLElement&&e.closest(".vds-time-slider")&&(t.stopImmediatePropagation(),this.setAttribute("data-scrubbing",""),this.jn.set(!0))}mn(){this.jn.set(!1),this.removeAttribute("data-scrubbing")}}class ct extends A{static{this.props={...super.props,when:({viewType:t})=>"video"===t,smallWhen:({width:t,height:e})=>t<576||e<380}}}function ut(){const{$state:t}=(0,a.u)(),e=t.lastKeyboardAction()?.action;switch(e){case"toggleMuted":return t.muted()?"0%":pt(t.volume());case"volumeUp":case"volumeDown":return pt(t.volume());default:return""}}function pt(t){return`${Math.round(100*t)}%`}function mt(){const t=function(){const{$state:t}=(0,a.u)(),e=t.lastKeyboardAction()?.action,{translations:s}=_();switch(e){case"togglePaused":return t.paused()?"Pause":"Play";case"toggleFullscreen":return t.fullscreen()?"Enter Fullscreen":"Exit Fullscreen";case"togglePictureInPicture":return t.pictureInPicture()?"Enter PiP":"Exit PiP";case"toggleCaptions":return t.textTrack()?"Closed-Captions On":"Closed-Captions Off";case"toggleMuted":case"volumeUp":case"volumeDown":return t.muted()||0===t.volume()?"Mute":`${Math.round(100*t.volume())}% ${s()?.Volume??"Volume"}`;default:return null}}(),{translations:e}=_();return t?w(e,t):null}function vt(){return n.x`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function ht(){const{menuGroup:t,smallWhen:e}=_(),s=()=>"top"===t()||e()?"bottom":"top",n=(0,i.q)((()=>`${s()} ${"top"===t()?"end":"center"}`)),a=(0,i.q)((()=>`${s()} end`));return[Q({tooltip:n,placement:a,portal:!0}),J({tooltip:n,placement:a,portal:!0})]}function $t(){return d((()=>{const{noGestures:t}=_();return t()?null:n.x`
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
    `}))}class bt extends((0,i.H)(ot.L,ct)){static{this.tagName="media-video-layout"}static{this.attrs={smallWhen:{converter:t=>"never"!==t&&!!t}}}onSetup(){this.forwardKeepAlive=!1,this.a=(0,a.u)(),this.classList.add("vds-video-layout"),this.menuContainer=it("vds-video-layout"),(0,i.e)((()=>{this.menuContainer&&(0,i.s)(this.menuContainer,"data-size",this.isSmallLayout&&"sm")})),(0,i.o)((()=>this.menuContainer?.remove()))}onConnect(){this.a.player.el?.setAttribute("data-layout","video"),(0,i.o)((()=>this.a.player.el?.removeAttribute("data-layout"))),(0,i.e)((()=>{this.$props.customIcons()?new m(this).connect():new at(this).connect()}))}render(){return n.x`${d(this._j.bind(this))}`}_j(){const{load:t}=this.a.$props,{canLoad:e,streamType:s}=this.a.$state;return this.isMatch?"play"!==t()||e()?"unknown"===s()?vt():this.isSmallLayout?[$t(),vt(),n.x`<media-captions class="vds-captions"></media-captions>`,n.x`<div class="vds-scrim"></div>`,n.x`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[I({tooltip:"top start"}),j({tooltip:"bottom start"}),z(),D({tooltip:"bottom"}),ht(),q({tooltip:"bottom end"})]}
        </media-controls-group>

        ${z()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[z(),W({tooltip:"top"}),z()]}
        </media-controls-group>

        ${z()}

        <media-controls-group class="vds-controls-group">
          ${[K(),Z(),O({tooltip:"top end"})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${U()}
        </media-controls-group>
      </media-controls>
    `,d((()=>{const{duration:t}=(0,a.b)();return 0===t()?null:n.x`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `}))]:[$t(),vt(),d((()=>{const t=(0,i.n)(!1),e=(0,a.u)(),{noKeyboardActionDisplay:s}=_(),{lastKeyboardAction:o}=e.$state;if(s())return null;(0,i.e)((()=>{t.set(!!o());const e=setTimeout((()=>t.set(!1)),500);return()=>{t.set(!1),window.clearTimeout(e)}}));const r=(0,i.q)((()=>{const e=o()?.action;return e&&t()?(0,i.L)(e):null})),c=(0,i.q)((()=>"vds-kb-action"+(t()?"":" hidden"))),u=(0,i.q)(ut),p=(0,i.q)(mt),m=(0,i.q)((()=>{const t=function(){const{$state:t}=(0,a.u)(),e=t.lastKeyboardAction()?.action;switch(e){case"togglePaused":return t.paused()?"kb-pause-icon":"kb-play-icon";case"toggleMuted":return t.muted()||0===t.volume()?"kb-mute-icon":t.volume()>=.5?"kb-volume-up-icon":"kb-volume-down-icon";case"toggleFullscreen":return`kb-fs-${t.fullscreen()?"enter":"exit"}-icon`;case"togglePictureInPicture":return`kb-pip-${t.pictureInPicture()?"enter":"exit"}-icon`;case"toggleCaptions":return t.hasCaptions()?`kb-cc-${t.textTrack()?"on":"off"}-icon`:null;case"volumeUp":return"kb-volume-up-icon";case"volumeDown":return"kb-volume-down-icon";case"seekForward":return"kb-seek-forward-icon";case"seekBackward":return"kb-seek-backward-icon";default:return null}}();return t?(0,l.g)(t):null}));return n.x`
      <div class=${d(c)} data-action=${d(r)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${d(u)}</div>
        </div>
        ${d((()=>(0,n.i)(o(),m()?n.x`
            <div class="vds-kb-bezel" role="status" aria-label=${d(p)}>
              <div class="vds-kb-icon">${m()}</div>
            </div>
          `:null)))}
      </div>
    `})),n.x`<media-captions class="vds-captions"></media-captions>`,n.x`<div class="vds-scrim"></div>`,n.x`
      <media-controls class="vds-controls">
        ${[n.x`
    <media-controls-group class="vds-controls-group">
      ${d((()=>{const{menuGroup:t}=_();return"top"===t()?[z(),ht()]:null}))}
    </media-controls-group>
  `,z(),n.x`<media-controls-group class="vds-controls-group"></media-controls-group>`,z(),n.x`
            <media-controls-group class="vds-controls-group">
              ${U()}
            </media-controls-group>
          `,n.x`
            <media-controls-group class="vds-controls-group">
              ${[W({tooltip:"top start"}),q({tooltip:"top"}),R(),K(),Z(),D({tooltip:"top"}),d((()=>{const{menuGroup:t}=_();return"bottom"===t()?ht():null})),I({tooltip:"top"}),j({tooltip:"top"}),G(),O({tooltip:"top end"})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]:n.x`
    <div class="vds-load-container">
      ${[vt(),W({tooltip:"top"})]}
    </div>
  `:null}}var _t=s(9256);class gt extends ${async xe(){const t=(await s.e(6276).then(s.bind(s,6276))).icons,e={};for(const s of Object.keys(t))e[s]=v({name:s,paths:t[s],viewBox:"0 0 18 18"});return e}}function yt(t,e){return t()?.[e]??e}function ft(){const t=(0,a.u)(),{translations:e}=(0,a.c)(),{title:s}=t.$state,i=d((()=>`${yt(e,"Play")}, ${s()}`));return n.x`
    <media-play-button
      class="plyr__control plyr__control--overlaid"
      aria-label=${i}
      data-plyr="play"
    >
      <slot name="play-icon"></slot>
    </button>
  `}function xt(){const{controls:t}=(0,a.c)();return d((()=>t().includes("play-large")?ft():null))}function At(){const{thumbnails:t,previewTime:e}=(0,a.c)();return n.x`
    <media-thumbnail
      .src=${d(t)}
      class="plyr__preview-scrubbing"
      time=${d((()=>e()))}
    ></media-thumbnail>
  `}function wt(){const t=(0,a.u)(),{poster:e}=t.$state,s=d((()=>`background-image: url("${e()}");`));return n.x`<div class="plyr__poster" style=${s}></div>`}function kt(){const{controls:t}=(0,a.c)(),e=d((()=>t().map(Ct)));return n.x`<div class="plyr__controls">${e}</div>`}function Ct(t){switch(t){case"airplay":return function(){const{translations:t}=(0,a.c)();return n.x`
    <media-airplay-button class="plyr__controls__item plyr__control" data-plyr="airplay">
      <slot name="airplay-icon"></slot>
      <span class="plyr__tooltip">${It(t,"AirPlay")}</span>
    </media-airplay-button>
  `}();case"captions":return function(){const{translations:t}=(0,a.c)(),e=It(t,"Disable captions"),s=It(t,"Enable captions");return n.x`
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
  `}();case"current-time":return function(){const t=(0,a.u)(),{translations:e,invertTime:s,toggleTime:o,displayDuration:l}=(0,a.c)(),r=(0,i.n)((0,i.u)(s));function c(t){!o()||l()||(0,i.K)(t)&&!(0,i.c)(t)||r.set((t=>!t))}return d((()=>{const{streamType:s}=t.$state,i=It(e,"LIVE"),a=It(e,"Current time"),o=d((()=>!l()&&r()));return"live"===s()||"ll-live"===s()?n.x`
          <media-live-button
            class="plyr__controls__item plyr__control plyr__live-button"
            data-plyr="live"
          >
            <span class="plyr__live-button__text">${i}</span>
          </media-live-button>
        `:n.x`
          <media-time
            type="current"
            class="plyr__controls__item plyr__time plyr__time--current"
            tabindex="0"
            role="timer"
            aria-label=${a}
            ?remainder=${o}
            @pointerup=${c}
            @keydown=${c}
          ></media-time>
          ${d((()=>l()?Pt():null))}
        `}))}();case"download":return d((()=>{const t=(0,a.u)(),{translations:e,download:s}=(0,a.c)(),{source:o}=t.$state,l=o(),r=s(),d=(0,i.t)(r)?r:r?.url,c=((0,i.t)(r)?null:r?.filename)||"media",u=It(e,"Download");return d||(0,_t.i)(l)||(0,_t.e)(l)?n.x`
          <a
            class="plyr__controls__item plyr__control"
            href=${d||l.src+`?download=${c}`}
            download=${c}
            target="_blank"
          >
            <slot name="download-icon" />
            <span class="plyr__tooltip">${u}</span>
          </a>
        `:null}));case"duration":return Pt();case"fast-forward":return function(){const{translations:t,seekTime:e}=(0,a.c)(),s=d((()=>`${yt(t,"Forward")} ${e()}s`)),i=d(e);return n.x`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${i}
      data-no-label
      data-plyr="fast-forward"
    >
      <slot name="fast-forward-icon"></slot>
      <span class="plyr__tooltip">${s}</span>
    </media-seek-button>
  `}();case"fullscreen":return function(){const{translations:t}=(0,a.c)(),e=It(t,"Enter Fullscreen"),s=It(t,"Exit Fullscreen");return n.x`
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
  `}();case"mute":case"volume":case"mute+volume":return function(t){return d((()=>{const e="mute"===t||"mute+volume"===t,s="volume"===t||"mute+volume"===t;return n.x`
      <div class="plyr__controls__item plyr__volume">
        ${[e?Tt():null,s?St():null]}
      </div>
    `}))}(t);case"pip":return function(){const{translations:t}=(0,a.c)(),e=It(t,"Enter PiP"),s=It(t,"Exit PiP");return n.x`
    <media-pip-button class="plyr__controls__item plyr__control" data-no-label data-plyr="pip">
      <slot name="enter-pip-icon" data-class="icon--pressed"></slot>
      <slot name="exit-pip-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${e}</span>
    </media-pip-button>
  `}();case"play":return function(){const{translations:t}=(0,a.c)(),e=It(t,"Play"),s=It(t,"Pause");return n.x`
    <media-play-button class="plyr__controls__item plyr__control" data-no-label data-plyr="play">
      <slot name="pause-icon" data-class="icon--pressed"></slot>
      <slot name="play-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${e}</span>
    </media-play-button>
  `}();case"progress":return function(){let t=(0,a.u)(),{duration:e,viewType:s}=t.$state,{translations:o,markers:l,thumbnails:r,seekTime:c,previewTime:u}=(0,a.c)(),p=It(o,"Seek"),m=(0,i.n)(null),v=d((()=>{const t=m();return t?n.x`<span class="plyr__progress__marker-label">${(0,n.o)(t.label)}<br /></span>`:null}));function h(){m.set(this)}function $(){m.set(null)}return n.x`
    <div class="plyr__controls__item plyr__progress__container">
      <div class="plyr__progress">
        <media-time-slider
          class="plyr__slider"
          data-plyr="seek"
          pause-while-dragging
          key-step=${d(c)}
          aria-label=${p}
          @media-seeking-request=${function(t){u.set(t.detail)}}
        >
          <div class="plyr__slider__track"></div>
          <div class="plyr__slider__thumb"></div>
          <div class="plyr__slider__buffer"></div>
          ${d((function(){const t=r(),e=d((()=>"audio"===s()));return t?n.x`
          <media-slider-preview class="plyr__slider__preview" ?no-clamp=${e}>
            <media-slider-thumbnail .src=${t} class="plyr__slider__preview__thumbnail">
              <span class="plyr__slider__preview__time-container">
                ${v}
                <media-slider-value class="plyr__slider__preview__time"></media-slider-value>
              </span>
            </media-slider-thumbnail>
          </media-slider-preview>
        `:n.x`
          <span class="plyr__tooltip">
            ${v}
            <media-slider-value></media-slider-value>
          </span>
        `}))}${d((function(){const t=e();return Number.isFinite(t)?l()?.map((e=>n.x`
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
  `}();case"restart":return function(){const{translations:t}=(0,a.c)(),{remote:e}=(0,a.u)(),s=It(t,"Restart");function o(t){(0,i.K)(t)&&!(0,i.c)(t)||e.seek(0,t)}return n.x`
    <button
      type="button"
      class="plyr__control"
      data-plyr="restart"
      @pointerup=${o}
      @keydown=${o}
    >
      <slot name="restart-icon"></slot>
      <span class="plyr__tooltip">${s}</span>
    </button>
  `}();case"rewind":return function(){const{translations:t,seekTime:e}=(0,a.c)(),s=d((()=>`${yt(t,"Rewind")} ${e()}s`)),i=d((()=>-1*e()));return n.x`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${i}
      data-no-label
      data-plyr="rewind"
    >
      <slot name="rewind-icon"></slot>
      <span class="plyr__tooltip">${s}</span>
    </media-seek-button>
  `}();case"settings":return function(){const{translations:t}=(0,a.c)(),e=It(t,"Settings");return n.x`
    <div class="plyr__controls__item plyr__menu">
      <media-menu>
        <media-menu-button class="plyr__control" data-plyr="settings">
          <slot name="settings-icon" />
          <span class="plyr__tooltip">${e}</span>
        </media-menu-button>
        <media-menu-items class="plyr__menu__container" placement="top end">
          <div><div>${[Mt({label:"Audio",children:Vt()}),Mt({label:"Captions",children:Et()}),Mt({label:"Quality",children:Lt()}),Mt({label:"Speed",children:Ht()})]}</div></div>
        </media-menu-items>
      </media-menu>
    </div>
  `}();default:return null}}function Tt(){const{translations:t}=(0,a.c)(),e=It(t,"Mute"),s=It(t,"Unmute");return n.x`
    <media-mute-button class="plyr__control" data-no-label data-plyr="mute">
      <slot name="muted-icon" data-class="icon--pressed"></slot>
      <slot name="volume-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${e}</span>
    </media-mute-button>
  `}function St(){const{translations:t}=(0,a.c)(),e=It(t,"Volume");return n.x`
    <media-volume-slider class="plyr__slider" data-plyr="volume" aria-label=${e}>
      <div class="plyr__slider__track"></div>
      <div class="plyr__slider__thumb"></div>
    </media-volume-slider>
  `}function Pt(){const{translations:t}=(0,a.c)(),e=It(t,"Duration");return n.x`
    <media-time
      type="duration"
      class="plyr__controls__item plyr__time plyr__time--duration"
      role="timer"
      tabindex="0"
      aria-label=${e}
    ></media-time>
  `}function Nt(){const t=(0,a.u)(),e=(0,i.n)(void 0),s=d((()=>(0,n.o)(e()?.text)));return(0,i.e)((()=>{const s=t.$state.textTrack();if(s)return n(),(0,i.l)(s,"cue-change",n);function n(){e.set(s?.activeCues[0])}})),n.x`
    <div class="plyr__captions" dir="auto">
      <span class="plyr__caption">${s}</span>
    </div>
  `}function Mt({label:t,children:e}){const s=(0,i.n)(!1);return n.x`
    <media-menu @open=${()=>s.set(!0)} @close=${()=>s.set(!1)}>
      ${function({open:t,label:e}){const{translations:s}=(0,a.c)(),i=d((()=>"plyr__control plyr__control--"+(t()?"back":"forward")));return n.x`
    <media-menu-button class=${i} data-plyr="settings">
      <span class="plyr__menu__label" aria-hidden=${o=t,d((()=>o()?"true":"false"))}>
        ${It(s,e)}
      </span>
      <span class="plyr__menu__value" data-part="hint"></span>
      ${function(){const e=It(s,"Go back to previous menu");return d((()=>t()?n.x`<span class="plyr__sr-only">${e}</span>`:null))}()}
    </media-menu-button>
  `;var o}({label:t,open:s})}
      <media-menu-items>${e}</media-menu-items>
    </media-menu>
  `}function Vt(){const{translations:t}=(0,a.c)();return n.x`
    <media-audio-radio-group empty-label=${It(t,"Default")}>
      <template>
        <media-radio class="plyr__control" data-plyr="audio">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-audio-radio-group>
  `}function Ht(){const{translations:t,speed:e}=(0,a.c)();return n.x`
    <media-speed-radio-group .rates=${e} normal-label=${It(t,"Normal")}>
      <template>
        <media-radio class="plyr__control" data-plyr="speed">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-speed-radio-group>
  `}function Et(){const{translations:t}=(0,a.c)();return n.x`
    <media-captions-radio-group off-label=${It(t,"Disabled")}>
      <template>
        <media-radio class="plyr__control" data-plyr="captions">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-captions-radio-group>
  `}function Lt(){const{translations:t}=(0,a.c)();return n.x`
    <media-quality-radio-group auto-label=${It(t,"Auto")}>
      <template>
        <media-radio class="plyr__control" data-plyr="quality">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-quality-radio-group>
  `}function It(t,e){return d((()=>yt(t,e)))}class jt extends((0,i.H)(ot.L,a.P)){static{this.tagName="media-plyr-layout"}onSetup(){this.forwardKeepAlive=!1,this.a=(0,a.u)()}onConnect(){this.a.player.el?.setAttribute("data-layout","plyr"),(0,i.o)((()=>this.a.player.el?.removeAttribute("data-layout"))),(0,a.a)(this,this.a),(0,i.e)((()=>{this.$props.customIcons()?new m(this).connect():new gt(this).connect()}))}render(){return n.x`${d(this._j.bind(this))}`}_j(){const{viewType:t}=this.a.$state;return"audio"===t()?function(){const t=new Set(["captions","pip","airplay","fullscreen"]),{controls:e}=(0,a.c)(),s=d((()=>e().filter((e=>!t.has(e))).map(Ct)));return n.x`<div class="plyr__controls">${s}</div>`}():"video"===t()?function(){const t=(0,a.u)(),{load:e}=t.$props,{canLoad:s}=t.$state;return(0,i.q)((()=>"play"===e()&&!s()))()?[ft(),wt()]:[xt(),At(),wt(),kt(),d((()=>{const{clickToPlay:t,clickToFullscreen:e}=(0,a.c)();return[t()?n.x`
            <media-gesture
              class="plyr__gesture"
              event="pointerup"
              action="toggle:paused"
            ></media-gesture>
          `:null,e()?n.x`
            <media-gesture
              class="plyr__gesture"
              event="dblpointerup"
              action="toggle:fullscreen"
            ></media-gesture>
          `:null]})),Nt()]}():null}}(0,i.d)(dt),(0,i.d)(bt),(0,i.d)(jt)}}]);