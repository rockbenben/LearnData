/*! For license information please see 9356.c73f84d0.js.LICENSE.txt */
"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[9356],{6035:(t,s,e)=>{var i;e.d(s,{D:()=>D,c:()=>Y,e:()=>W,l:()=>J,o:()=>st,t:()=>R,x:()=>x});const o=window,n=o.trustedTypes,a=n?n.createPolicy("lit-html",{createHTML:t=>t}):void 0,l="$lit$",d=`lit$${(Math.random()+"").slice(9)}$`,r="?"+d,c=`<${r}>`,u=document,p=()=>u.createComment(""),m=t=>null===t||"object"!=typeof t&&"function"!=typeof t,v=Array.isArray,h="[ \t\n\f\r]",$=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,g=/-->/g,f=/>/g,b=RegExp(`>|${h}(?:([^\\s"'>=/]+)(${h}*=${h}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),A=/'/g,_=/"/g,y=/^(?:script|style|textarea|title)$/i,x=(t,...s)=>({_$litType$:1,strings:t,values:s}),C=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),k=new WeakMap,T=u.createTreeWalker(u,129,null,!1);function E(t,s){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==a?a.createHTML(s):s}const N=(t,s)=>{const e=t.length-1,i=[];let o,n=2===s?"<svg>":"",a=$;for(let s=0;s<e;s++){const e=t[s];let r,u,p=-1,m=0;for(;m<e.length&&(a.lastIndex=m,u=a.exec(e),null!==u);)m=a.lastIndex,a===$?"!--"===u[1]?a=g:void 0!==u[1]?a=f:void 0!==u[2]?(y.test(u[2])&&(o=RegExp("</"+u[2],"g")),a=b):void 0!==u[3]&&(a=b):a===b?">"===u[0]?(a=null!=o?o:$,p=-1):void 0===u[1]?p=-2:(p=a.lastIndex-u[2].length,r=u[1],a=void 0===u[3]?b:'"'===u[3]?_:A):a===_||a===A?a=b:a===g||a===f?a=$:(a=b,o=void 0);const v=a===b&&t[s+1].startsWith("/>")?" ":"";n+=a===$?e+c:p>=0?(i.push(r),e.slice(0,p)+l+e.slice(p)+d+v):e+d+(-2===p?(i.push(void 0),s):v)}return[E(t,n+(t[e]||"<?>")+(2===s?"</svg>":"")),i]};class H{constructor({strings:t,_$litType$:s},e){let i;this.parts=[];let o=0,a=0;const c=t.length-1,u=this.parts,[m,v]=N(t,s);if(this.el=H.createElement(m,e),T.currentNode=this.el.content,2===s){const t=this.el.content,s=t.firstChild;s.remove(),t.append(...s.childNodes)}for(;null!==(i=T.nextNode())&&u.length<c;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const s of i.getAttributeNames())if(s.endsWith(l)||s.startsWith(d)){const e=v[a++];if(t.push(s),void 0!==e){const t=i.getAttribute(e.toLowerCase()+l).split(d),s=/([.?@])?(.*)/.exec(e);u.push({type:1,index:o,name:s[2],strings:t,ctor:"."===s[1]?j:"?"===s[1]?O:"@"===s[1]?B:P})}else u.push({type:6,index:o})}for(const s of t)i.removeAttribute(s)}if(y.test(i.tagName)){const t=i.textContent.split(d),s=t.length-1;if(s>0){i.textContent=n?n.emptyScript:"";for(let e=0;e<s;e++)i.append(t[e],p()),T.nextNode(),u.push({type:2,index:++o});i.append(t[s],p())}}}else if(8===i.nodeType)if(i.data===r)u.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(d,t+1));)u.push({type:7,index:o}),t+=d.length-1}o++}}static createElement(t,s){const e=u.createElement("template");return e.innerHTML=t,e}}function S(t,s,e=t,i){var o,n,a,l;if(s===C)return s;let d=void 0!==i?null===(o=e._$Co)||void 0===o?void 0:o[i]:e._$Cl;const r=m(s)?void 0:s._$litDirective$;return(null==d?void 0:d.constructor)!==r&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===r?d=void 0:(d=new r(t),d._$AT(t,e,i)),void 0!==i?(null!==(a=(l=e)._$Co)&&void 0!==a?a:l._$Co=[])[i]=d:e._$Cl=d),void 0!==d&&(s=S(t,d._$AS(t,s.values),d,i)),s}class M{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var s;const{el:{content:e},parts:i}=this._$AD,o=(null!==(s=null==t?void 0:t.creationScope)&&void 0!==s?s:u).importNode(e,!0);T.currentNode=o;let n=T.nextNode(),a=0,l=0,d=i[0];for(;void 0!==d;){if(a===d.index){let s;2===d.type?s=new L(n,n.nextSibling,this,t):1===d.type?s=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(s=new U(n,this,t)),this._$AV.push(s),d=i[++l]}a!==(null==d?void 0:d.index)&&(n=T.nextNode(),a++)}return T.currentNode=u,o}v(t){let s=0;for(const e of this._$AV)void 0!==e&&(void 0!==e.strings?(e._$AI(t,e,s),s+=e.strings.length-2):e._$AI(t[s])),s++}}class L{constructor(t,s,e,i){var o;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=e,this.options=i,this._$Cp=null===(o=null==i?void 0:i.isConnected)||void 0===o||o}get _$AU(){var t,s;return null!==(s=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==s?s:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return void 0!==s&&11===(null==t?void 0:t.nodeType)&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=S(this,t,s),m(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==C&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>v(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==w&&m(this._$AH)?this._$AA.nextSibling.data=t:this.$(u.createTextNode(t)),this._$AH=t}g(t){var s;const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=H.createElement(E(i.h,i.h[0]),this.options)),i);if((null===(s=this._$AH)||void 0===s?void 0:s._$AD)===o)this._$AH.v(e);else{const t=new M(o,this),s=t.u(this.options);t.v(e),this.$(s),this._$AH=t}}_$AC(t){let s=k.get(t.strings);return void 0===s&&k.set(t.strings,s=new H(t)),s}T(t){v(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let e,i=0;for(const o of t)i===s.length?s.push(e=new L(this.k(p()),this.k(p()),this,this.options)):e=s[i],e._$AI(o),i++;i<s.length&&(this._$AR(e&&e._$AB.nextSibling,i),s.length=i)}_$AR(t=this._$AA.nextSibling,s){var e;for(null===(e=this._$AP)||void 0===e||e.call(this,!1,!0,s);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var s;void 0===this._$AM&&(this._$Cp=t,null===(s=this._$AP)||void 0===s||s.call(this,t))}}class P{constructor(t,s,e,i,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=s,this._$AM=i,this.options=o,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,s=this,e,i){const o=this.strings;let n=!1;if(void 0===o)t=S(this,t,s,0),n=!m(t)||t!==this._$AH&&t!==C,n&&(this._$AH=t);else{const i=t;let a,l;for(t=o[0],a=0;a<o.length-1;a++)l=S(this,i[e+a],s,a),l===C&&(l=this._$AH[a]),n||(n=!m(l)||l!==this._$AH[a]),l===w?t=w:t!==w&&(t+=(null!=l?l:"")+o[a+1]),this._$AH[a]=l}n&&!i&&this.j(t)}j(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class j extends P{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===w?void 0:t}}const I=n?n.emptyScript:"";class O extends P{constructor(){super(...arguments),this.type=4}j(t){t&&t!==w?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name)}}class B extends P{constructor(t,s,e,i,o){super(t,s,e,i,o),this.type=5}_$AI(t,s=this){var e;if((t=null!==(e=S(this,t,s,0))&&void 0!==e?e:w)===C)return;const i=this._$AH,o=t===w&&i!==w||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==w&&(i===w||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var s,e;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(s=this.options)||void 0===s?void 0:s.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}class U{constructor(t,s,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const V=o.litHtmlPolyfillSupport;null==V||V(H,L),(null!==(i=o.litHtmlVersions)&&void 0!==i?i:o.litHtmlVersions=[]).push("2.8.0");const D=(t,s,e)=>{var i,o;const n=null!==(i=null==e?void 0:e.renderBefore)&&void 0!==i?i:s;let a=n._$litPart$;if(void 0===a){const t=null!==(o=null==e?void 0:e.renderBefore)&&void 0!==o?o:null;n._$litPart$=a=new L(s.insertBefore(p(),t),t,void 0,null!=e?e:{})}return a._$AI(t),a},R={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},W=t=>(...s)=>({_$litDirective$:t,values:s});class q{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,e){this._$Ct=t,this._$AM=s,this._$Ci=e}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}const Q=(t,s)=>{var e,i;const o=t._$AN;if(void 0===o)return!1;for(const t of o)null===(i=(e=t)._$AO)||void 0===i||i.call(e,s,!1),Q(t,s);return!0},z=t=>{let s,e;do{if(void 0===(s=t._$AM))break;e=s._$AN,e.delete(t),t=s}while(0===(null==e?void 0:e.size))},G=t=>{for(let s;s=t._$AM;t=s){let e=s._$AN;if(void 0===e)s._$AN=e=new Set;else if(e.has(t))break;e.add(t),K(s)}};function Z(t){void 0!==this._$AN?(z(this),this._$AM=t,G(this)):this._$AM=t}function F(t,s=!1,e=0){const i=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(s)if(Array.isArray(i))for(let t=e;t<i.length;t++)Q(i[t],!1),z(i[t]);else null!=i&&(Q(i,!1),z(i));else Q(this,t)}const K=t=>{var s,e,i,o;t.type==R.CHILD&&(null!==(s=(i=t)._$AP)&&void 0!==s||(i._$AP=F),null!==(e=(o=t)._$AQ)&&void 0!==e||(o._$AQ=Z))};class Y extends q{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,e){super._$AT(t,s,e),G(this),this.isConnected=t._$AU}_$AO(t,s=!0){var e,i;t!==this.isConnected&&(this.isConnected=t,t?null===(e=this.reconnected)||void 0===e||e.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),s&&(Q(this,t),z(this))}setValue(t){if((t=>void 0===this._$Ct.strings)())this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const J=t=>null!=t?t:w;class X extends q{constructor(t){if(super(t),this.et=w,t.type!==R.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===w||null==t)return this.ft=void 0,this.et=t;if(t===C)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const s=[t];return s.raw=s,this.ft={_$litType$:this.constructor.resultType,strings:s,values:[]}}}X.directiveName="unsafeHTML",X.resultType=1;class tt extends X{}tt.directiveName="unsafeSVG",tt.resultType=2;const st=W(tt)},7552:(t,s,e)=>{e.d(s,{L:()=>o});var i=e(6035);class o extends HTMLElement{constructor(){super(...arguments),this.rootPart=null}connectedCallback(){this.rootPart=(0,i.D)(this.render(),this,{renderBefore:this.firstChild}),this.rootPart.setConnected(!0)}disconnectedCallback(){this.rootPart?.setConnected(!1),this.rootPart=null}}},9356:(t,s,e)=>{e.r(s);var i=e(348),o=e(6035),n=e(8),a=e(7224),l=e(352);class d extends o.c{constructor(t){super(t),this.h=null,this.ra=null,this.w=!1,this.w=t.type===o.t.ATTRIBUTE}render(t){this.h!==t&&(this.h=t,this.disconnected(),this.isConnected&&this.Si());const s=this.h();return this.w?(0,o.l)(s):s}reconnected(){this.Si()}disconnected(){this.w||this.setValue(null),this.ra?.(),this.ra=null}Si(){this.h&&(this.ra=(0,i.e)(this.o.bind(this)))}o(){this.setValue(this.h?.())}}const r=(0,o.e)(d);function c(t){return r((0,i.n)(t))}class u{constructor(t,s){this.Wj=t,this.Ca=s,this.elements=new Set,this.vf=(0,i.V)(this.ea.bind(this))}connect(){this.ea();const t=new MutationObserver(this.vf);t.observe(this.Wj,{childList:!0}),(0,i.o)((()=>t.disconnect())),(0,i.o)(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(t,s){t instanceof Node?(s.textContent="",s.append(t)):(0,o.D)(t,s),s.style.display||(s.style.display="contents");const e=s.firstElementChild;if(!e)return;const i=s.getAttribute("data-class");i&&e.classList.add(...i.split(" "))}ea(){for(const t of this.Wj.querySelectorAll("slot"))t.hasAttribute("name")&&this.elements.add(t);this.Ca(this.elements)}}let p=0,m="data-slot-id";class v{constructor(t){this.Wj=t,this.vf=(0,i.V)(this.ea.bind(this)),this.slots=new u(t,this.ea.bind(this))}connect(){this.slots.connect(),this.ea();const t=new MutationObserver(this.vf);t.observe(this.Wj,{childList:!0}),(0,i.o)((()=>t.disconnect()))}ea(){for(const t of this.Wj.children){if(1!==t.nodeType)continue;const s=t.getAttribute("slot");if(!s)continue;t.style.display="none";let e=t.getAttribute(m);e||t.setAttribute(m,e=++p+"");for(const i of this.slots.elements){if(i.getAttribute("name")!==s||i.getAttribute(m)===e)continue;const o=document.importNode(t,!0);s.includes("-icon")&&o.classList.add("vds-icon"),o.style.display="",o.removeAttribute("slot"),this.slots.assign(o,i),i.setAttribute(m,e)}}}}function h({label:t,icon:s}){return o.x`
    <media-menu-button class="vds-menu-button">
      <slot name="menu-arrow-left-icon" data-class="vds-menu-button-close-icon"></slot>
      <slot name="${s}-icon" data-class="vds-menu-button-icon"></slot>
      <span class="vds-menu-button-label">${r(t)}</span>
      <span class="vds-menu-button-hint" data-part="hint"></span>
      <slot name="menu-arrow-right-icon" data-class="vds-menu-button-open-icon"></slot>
    </media-menu-button>
  `}function $(t,s){return c((()=>(0,n.E)(t,s)))}function g({tooltip:t}){const{translations:s}=(0,n.u)(),{paused:e}=(0,a.u)().$state,i=c((()=>(0,n.E)(s,e()?"Play":"Pause")));return o.x`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button class="vds-play-button vds-button" aria-label=${i}>
          <slot name="play-icon" data-class="vds-play-icon"></slot>
          <slot name="pause-icon" data-class="vds-pause-icon"></slot>
          <slot name="replay-icon" data-class="vds-replay-icon"></slot>
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-play-tooltip-text">${$(s,"Play")}</span>
        <span class="vds-pause-tooltip-text">${$(s,"Pause")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function f({tooltip:t}){const{translations:s}=(0,n.u)(),{muted:e}=(0,a.u)().$state,i=c((()=>(0,n.E)(s,(e(),"Unmute"))));return o.x`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button class="vds-mute-button vds-button" aria-label=${i}>
          <slot name="mute-icon" data-class="vds-mute-icon"></slot>
          <slot name="volume-low-icon" data-class="vds-volume-low-icon"></slot>
          <slot name="volume-high-icon" data-class="vds-volume-high-icon"></slot>
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-mute-tooltip-text">${$(s,"Unmute")}</span>
        <span class="vds-unmute-tooltip-text">${$(s,"Mute")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function b({tooltip:t}){const{translations:s}=(0,n.u)(),{textTrack:e}=(0,a.u)().$state,i=c((()=>(0,n.E)(s,e()?"Closed-Captions Off":"Closed-Captions On")));return o.x`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button class="vds-caption-button vds-button" aria-label=${i}>
          <slot name="cc-on-icon" data-class="vds-cc-on-icon"></slot>
          <slot name="cc-off-icon" data-class="vds-cc-off-icon"></slot>
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-cc-on-tooltip-text">${$(s,"Closed-Captions Off")}</span>
        <span class="vds-cc-off-tooltip-text">${$(s,"Closed-Captions On")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function A({tooltip:t}){const{translations:s}=(0,n.u)(),{fullscreen:e}=(0,a.u)().$state,i=c((()=>(0,n.E)(s,e()?"Exit Fullscreen":"Enter Fullscreen")));return o.x`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button class="vds-fullscreen-button vds-button" aria-label=${i}>
          <slot name="fs-enter-icon" data-class="vds-fs-enter-icon"></slot>
          <slot name="fs-exit-icon" data-class="vds-fs-exit-icon"></slot>
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-fs-enter-tooltip-text">${$(s,"Enter Fullscreen")}</span>
        <span class="vds-fs-exit-tooltip-text">${$(s,"Exit Fullscreen")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function _({seconds:t,tooltip:s}){const{translations:e}=(0,n.u)(),i=t>=0?"Seek Forward":"Seek Backward",a=$(e,i);return o.x`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${t}
          aria-label=${a}
        >
          ${t>=0?o.x`<slot name="seek-forward-icon"></slot>`:o.x`<slot name="seek-backward-icon"></slot>`}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${s}>
        ${$(e,i)}
      </media-tooltip-content>
    </media-tooltip>
  `}function y(){const{translations:t}=(0,n.u)(),s=$(t,"Volume");return o.x`
    <media-volume-slider class="vds-volume-slider vds-slider" aria-label=${s}>
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function x(){const{width:t}=(0,a.u)().$state,{thumbnails:s,translations:e}=(0,n.u)(),i=$(e,"Seek");return o.x`
    <media-time-slider class="vds-time-slider vds-slider" aria-label=${i}>
      <media-slider-chapters class="vds-slider-chapters" ?disabled=${r((()=>t()<768))}>
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
          src=${r(s)}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `}function C(){const{translations:t}=(0,n.u)(),{live:s}=(0,a.u)().$state,e=$(t,"Skip To Live"),i=$(t,"LIVE");return s()?o.x`
    <media-live-button class="vds-live-button" aria-label=${e}>
      <span class="vds-live-button-text">${i}</span>
    </media-live-button
  `:null}function w(){const{live:t}=(0,a.u)().$state;return t()?C():o.x`
    <div class="vds-time-group">
      <media-time class="vds-time" type="current"></media-time>
      <div class="vds-time-divider">/</div>
      <media-time class="vds-time" type="duration"></media-time>
    </div>
  `}function k(t,s){return o.x`
    <media-menu-portal .container=${t} disabled="fullscreen">
      ${s}
    </media-menu-portal>
  `}function T({placement:t,tooltip:s,portal:e}){const{viewType:l}=(0,a.u)().$state,{translations:d,smQueryList:c,thumbnails:u,menuContainer:p,noModal:m,menuGroup:v}=(0,n.u)(),h=(0,i.n)((()=>m()?(0,i.T)(t):c.matches?null:(0,i.T)(t))),g=(0,i.n)((()=>c.matches||"bottom"!==v()||"video"!==l()?0:26)),f=o.x`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${r(h)}
      offset=${r(g)}
    >
      <media-chapters-radio-group
        class="vds-chapters-radio-group vds-radio-group"
        thumbnails=${r(u)}
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
  `;return o.x`
    <!-- Chapters Menu -->
    <media-menu class="vds-chapters-menu vds-menu">
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${$(d,"Chapters")}
          >
            <slot name="menu-chapters-icon"></slot>
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${(0,i.x)(s)?r(s):s}
        >
          ${$(d,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${e?k(p,f):f}
    </media-menu>
  `}function E({placement:t,portal:s,tooltip:e}){const{viewType:d,canSetPlaybackRate:u,canSetQuality:p,qualities:m,audioTracks:v,textTracks:g}=(0,a.u)().$state,{translations:f,smQueryList:b,menuContainer:A,noModal:_,menuGroup:y}=(0,n.u)(),x=(0,i.n)((()=>_()?(0,i.T)(t):b.matches?null:(0,i.T)(t))),C=(0,i.n)((()=>b.matches||"bottom"!==y()||"video"!==d()?0:26)),w=(0,i.n)((()=>u()||p()&&m().length||v().length||g().filter(l.i).length)),T=o.x`
    <media-menu-items
      class="vds-settings-menu-items vds-menu-items"
      placement=${r(x)}
      offset=${r(C)}
    >
      ${function(){const{translations:t}=(0,n.u)();return o.x`
    <!-- Audio Menu -->
    <media-menu class="vds-audio-menu vds-menu">
      ${h({label:()=>(0,n.E)(t,"Audio"),icon:"menu-audio"})}
      <media-menu-items class="vds-menu-items">
        <media-audio-radio-group
          class="vds-audio-radio-group vds-radio-group"
          empty-label=${$(t,"Default")}
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
  `}()}${function(){const{translations:t}=(0,n.u)();return o.x`
    <!-- Speed Menu -->
    <media-menu class="vds-speed-menu vds-menu">
      ${h({label:()=>(0,n.E)(t,"Speed"),icon:"menu-speed"})}
      <media-menu-items class="vds-menu-items">
        <media-speed-radio-group
          class="vds-speed-radio-group vds-radio-group"
          normal-label=${$(t,"Normal")}
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
  `}()}${function(){const{translations:t}=(0,n.u)();return o.x`
    <!-- Quality Menu -->
    <media-menu class="vds-quality-menu vds-menu">
      ${h({label:()=>(0,n.E)(t,"Quality"),icon:"menu-quality"})}
      <media-menu-items class="vds-menu-items">
        <media-quality-radio-group
          class="vds-quality-radio-group vds-radio-group"
          auto-label=${$(t,"Auto")}
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
  `}()}${function(){const{translations:t}=(0,n.u)();return o.x`
    <!-- Captions Menu -->
    <media-menu class="vds-captions-menu vds-menu">
      ${h({label:()=>(0,n.E)(t,"Captions"),icon:"menu-captions"})}
      <media-menu-items class="vds-menu-items">
        <media-captions-radio-group
          class="vds-captions-radio-group vds-radio-group"
          off-label=${$(t,"Off")}
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
  `}()}
    </media-menu-items>
  `,E=o.x`
    <media-menu class="vds-settings-menu vds-menu">
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${$(f,"Settings")}
          >
            <slot name="menu-settings-icon" data-class="vds-rotate-icon"></slot>
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${(0,i.x)(e)?r(e):e}
        >
          ${$(f,"Settings")}
        </media-tooltip-content>
      </media-tooltip>
      ${s?k(A,T):T}
    </media-menu>
  `;return c((()=>w()?E:null))}function N(t){let s=document.querySelector(`body > .${t}`);return s||(s=document.createElement("div"),s.style.display="contents",s.classList.add(t),document.body.append(s)),s}function H({name:t,class:s,state:e,paths:n}){return o.x`<svg
    class="${"vds-icon"+(s?` ${s}`:"")}"
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${(0,o.l)(t??e)}
  >
    ${(0,i.r)(n)?(0,o.o)(n):r(n)}
  </svg>`}class S{constructor(t){this.Wj=t,this.Zj={},this.bk=!1,this.slots=new u(t,this.ck.bind(this))}connect(){this.slots.connect(),(0,i.o)(this.disconnect.bind(this))}load(){this.xe().then((t=>{this.Zj=t,this.bk=!0,this.ck()}))}disconnect(){for(const{slot:t}of this.dk())t.textContent=""}*dk(){for(const t of Object.keys(this.Zj)){const s=`${t}-icon`;for(const e of this.slots.elements)e.name===s&&(yield{icon:this.Zj[t],slot:e})}}ck(){if(this.bk)for(const{icon:t,slot:s}of this.dk())this.slots.assign(t,s)}}class M extends S{connect(){const t=this.ik();t&&(super.connect(),t.$state.canLoad()?this.load():(0,i.l)(t,"can-load",(()=>this.load()),{once:!0}))}ik(){let t=this.Wj.parentElement;for(;t&&"media-player"!==t.localName;)t=t.parentElement;return t}}class L extends M{async xe(){const t=(await e.e(4680).then(e.bind(e,4680))).icons,s={};for(const e of Object.keys(t))s[e]=H({name:e,paths:t[e]});return s}}var P=e(7552);function j(){const{live:t,canSeek:s}=(0,a.u)().$state;return t()&&!s()?g({tooltip:"top start"}):null}function I(){const{live:t}=(0,a.u)().$state;return t()?null:o.x`
        <media-controls-group class="vds-controls-group">
          <media-time class="vds-time" type="current"></media-time>
          <div class="vds-controls-spacer"></div>
          <media-time class="vds-time" type="duration"></media-time>
        </media-controls-group>
      `}function O(){const{canSeek:t}=(0,a.u)().$state;return t()?o.x`
        <media-controls-group class="vds-controls-group">
          <div class="vds-controls-spacer"></div>
          ${_({seconds:-10,tooltip:"top"})}
          ${g({tooltip:"top"})}
          ${_({tooltip:"top",seconds:10})}
          <div class="vds-controls-spacer"></div>
        </media-controls-group>
      `:null}function B(){const t="top end";return o.x`
    ${T({tooltip:"top",placement:t,portal:!0})}
    ${E({tooltip:"top end",placement:t,portal:!0})}
  `}class U extends((0,i.H)(P.L,n.D)){static{this.tagName="media-audio-layout"}onSetup(){this.forwardKeepAlive=!1,this.a=(0,a.u)(),this.classList.add("vds-audio-layout"),this.menuContainer=N("vds-audio-layout"),(0,i.e)((()=>{this.menuContainer&&(0,i.k)(this.menuContainer,"data-size",this.isSmallLayout&&"sm")})),(0,i.o)((()=>this.menuContainer?.remove()))}onConnect(){(0,i.e)((()=>{this.$props.customIcons()?new v(this).connect():new L(this).connect()}))}_j(){const{streamType:t}=this.a.$state;return this.isMatch&&"unknown"!==t()?this.isSmallLayout?o.x`
    <media-captions class="vds-captions"></media-captions>
    <media-controls class="vds-controls">
      <media-controls-group class="vds-controls-group">
        ${c(j)}
        ${f({tooltip:"top start"})}${c(C)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        ${b({tooltip:"top"})}${B()}
      </media-controls-group>

      <media-controls-group class="vds-controls-group">${x()}</media-controls-group>

      ${c(I)}${c(O)}
    </media-controls>
  `:o.x`
    <media-captions class="vds-captions"></media-captions>

    <media-controls class="vds-controls">
      <media-controls-group class="vds-controls-group">${x()}</media-controls-group>

      <media-controls-group class="vds-controls-group">
        ${_({seconds:-10,tooltip:"top start"})}
        ${g({tooltip:"top"})}${_({tooltip:"top",seconds:10})}
        ${c(w)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        ${f({tooltip:"top"})}
        ${y()}${b({tooltip:"top"})} ${B()}
      </media-controls-group>
    </media-controls>
  `:null}render(){return o.x`${c(this._j.bind(this))}`}}function V(){const{menuGroup:t}=(0,n.u)();return"bottom"===t()?q():null}function D(){const{menuGroup:t}=(0,n.u)(),s="top"===t()?o.x`
            <div class="vds-controls-spacer"></div>
            ${q()}
          `:null;return o.x`
    <media-controls-group class="vds-controls-group">${s}</media-controls-group>
  `}function R(){const{duration:t}=(0,a.u)().$state;return 0===t()?null:o.x`
    <div class="vds-start-duration">
      <media-time class="vds-time" type="duration"></media-time>
    </div>
  `}function W(){return o.x`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function q(){const{menuGroup:t,smQueryList:s}=(0,n.u)(),e=()=>"top"===t()||s.matches?"bottom":"top",a=(0,i.n)((()=>`${e()} ${"top"===t()?"end":"center"}`)),l=(0,i.n)((()=>`${e()} end`));return o.x`
    ${T({tooltip:a,placement:l,portal:!0})}
    ${E({tooltip:a,placement:l,portal:!0})}
  `}function Q(){return o.x`
    <div class="vds-gestures">
      <media-gesture class="vds-gesture" event="pointerup" action="toggle:paused"></media-gesture>
      <media-gesture class="vds-gesture" event="pointerup" action="toggle:controls"></media-gesture>
      <media-gesture
        class="vds-gesture"
        event="dblpointerup"
        action="toggle:fullscreen"
      ></media-gesture>
      <media-gesture class="vds-gesture" event="dblpointerup" action="seek:-10"></media-gesture>
      <media-gesture class="vds-gesture" event="dblpointerup" action="seek:10"></media-gesture>
    </div>
  `}class z extends((0,i.H)(P.L,n.b)){static{this.tagName="media-video-layout"}onSetup(){this.forwardKeepAlive=!1,this.a=(0,a.u)(),this.classList.add("vds-video-layout"),this.menuContainer=N("vds-video-layout"),(0,i.e)((()=>{this.menuContainer&&(0,i.k)(this.menuContainer,"data-size",this.isSmallLayout&&"sm")})),(0,i.o)((()=>this.menuContainer?.remove()))}onConnect(){(0,i.e)((()=>{this.$props.customIcons()?new v(this).connect():new L(this).connect()}))}_j(){const{streamType:t}=this.a.$state;return this.isMatch?"unknown"===t()?W():this.isSmallLayout?o.x`
    ${Q()}${W()}
    <media-captions class="vds-captions"></media-captions>

    <div class="vds-scrim"></div>

    <media-controls class="vds-controls">
      <media-controls-group class="vds-controls-group">
        <div class="vds-controls-spacer"></div>
        ${b({tooltip:"bottom"})}
        ${q()}${f({tooltip:"bottom end"})}
      </media-controls-group>

      <div class="vds-controls-group">${g({tooltip:"top"})}</div>

      <media-controls-group class="vds-controls-group">
        ${c(w)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        <div class="vds-controls-spacer"></div>
        ${A({tooltip:"top end"})}
      </media-controls-group>

      <media-controls-group class="vds-controls-group">${x()}</media-controls-group>
    </media-controls>

    ${c(R)}
  `:o.x`
    ${Q()}${W()}
    <media-captions class="vds-captions"></media-captions>

    <div class="vds-scrim"></div>

    <media-controls class="vds-controls">
      ${c(D)}

      <div class="vds-controls-spacer"></div>

      <media-controls-group class="vds-controls-group">${x()}</media-controls-group>

      <media-controls-group class="vds-controls-group">
        ${g({tooltip:"top start"})}
        ${f({tooltip:"top"})}${y()}
        ${c(w)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        ${b({tooltip:"top"})}${c(V)}
        ${function(){const{translations:t}=(0,n.u)(),{pictureInPicture:s}=(0,a.u)().$state,e=c((()=>(0,n.E)(t,s()?"Exit PiP":"Enter PiP")));return o.x`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button class="vds-pip-button vds-button" aria-label=${e}>
          <slot name="pip-enter-icon" data-class="vds-pip-enter-icon"></slot>
          <slot name="pip-exit-icon" data-class="vds-pip-exit-icon"></slot>
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${$(t,"Enter PiP")}</span>
        <span class="vds-pip-exit-tooltip-text">${$(t,"Exit PiP")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}()} ${A({tooltip:"top end"})}
      </media-controls-group>
    </media-controls>
  `:null}render(){return o.x`${c(this._j.bind(this))}`}}(0,i.d)(U),(0,i.d)(z)}}]);