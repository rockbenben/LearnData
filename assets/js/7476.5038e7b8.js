/*! For license information please see 7476.5038e7b8.js.LICENSE.txt */
"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[7476],{6214:(t,e,s)=>{s.d(e,{Kq:()=>p,OA:()=>a.OA,u$:()=>a.u$});var n=s(7727),a=s(4703);const l=(t,e)=>{var s,n;const a=t._$AN;if(void 0===a)return!1;for(const t of a)null===(n=(s=t)._$AO)||void 0===n||n.call(s,e,!1),l(t,e);return!0},i=t=>{let e,s;do{if(void 0===(e=t._$AM))break;s=e._$AN,s.delete(t),t=e}while(0===(null==s?void 0:s.size))},r=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),d(e)}};function o(t){void 0!==this._$AN?(i(this),this._$AM=t,r(this)):this._$AM=t}function c(t,e=!1,s=0){const n=this._$AH,a=this._$AN;if(void 0!==a&&0!==a.size)if(e)if(Array.isArray(n))for(let t=s;t<n.length;t++)l(n[t],!1),i(n[t]);else null!=n&&(l(n,!1),i(n));else l(this,t)}const d=t=>{var e,s,n,l;t.type==a.OA.CHILD&&(null!==(e=(n=t)._$AP)&&void 0!==e||(n._$AP=c),null!==(s=(l=t)._$AQ)&&void 0!==s||(l._$AQ=o))};class p extends a.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),r(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,n;t!==this.isConnected&&(this.isConnected=t,t?null===(s=this.reconnected)||void 0===s||s.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),e&&(l(this,t),i(this))}setValue(t){if((0,n.Rt)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}},7727:(t,e,s)=>{s.d(e,{Rt:()=>l,mY:()=>r});var n=s(4245);const{I:a}=n.ge,l=t=>void 0===t.strings,i={},r=(t,e=i)=>t._$AH=e},4703:(t,e,s)=>{s.d(e,{OA:()=>n,WL:()=>l,u$:()=>a});const n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},a=t=>(...e)=>({_$litDirective$:t,values:e});class l{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},1822:(t,e,s)=>{s.d(e,{J:()=>a});var n=s(4245);const a=t=>null!=t?t:n.s6},2993:(t,e,s)=>{s.d(e,{D:()=>l,_:()=>i});var n=s(4245),a=s(4703);class l extends a.WL{constructor(t){if(super(t),this.et=n.s6,t.type!==a.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===n.s6||null==t)return this.ft=void 0,this.et=t;if(t===n.c0)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}l.directiveName="unsafeHTML",l.resultType=1;const i=(0,a.u$)(l)},580:(t,e,s)=>{s.d(e,{T:()=>i});var n=s(4703),a=s(2993);class l extends a.D{}l.directiveName="unsafeSVG",l.resultType=2;const i=(0,n.u$)(l)},1402:(t,e,s)=>{s.d(e,{In:()=>y,UT:()=>$,kj:()=>m,xZ:()=>d});var n=s(7933),a=s(4245),l=s(1822),i=s(580),r=s(6214),o=s(4259);class c extends r.Kq{#t=null;#e=!1;#s=null;constructor(t){super(t),this.#e=t.type===r.OA.ATTRIBUTE||t.type===r.OA.BOOLEAN_ATTRIBUTE}render(t){return t!==this.#t&&(this.disconnected(),this.#t=t,this.isConnected&&this.#n()),this.#t?this.#a((0,n.se)(this.#t)):a.s6}reconnected(){this.#n()}disconnected(){this.#s?.(),this.#s=null}#n(){this.#t&&(this.#s=(0,n.QZ)(this.#l.bind(this)))}#a(t){return this.#e?(0,l.J)(t):t}#i(t){this.setValue(this.#a(t))}#l(){this.#i(this.#t?.())}}function d(t){return(0,r.u$)(c)((0,n.EW)(t))}class p{#r;#o;elements=new Set;constructor(t,e){this.#r=t,this.#o=e}connect(){this.#c();const t=new MutationObserver(this.#d);for(const e of this.#r)t.observe(e,{childList:!0,subtree:!0});(0,n.zp)((()=>t.disconnect())),(0,n.zp)(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(t,e){(0,n.vA)(t)?(e.textContent="",e.append(t)):((0,a.XX)(null,e),(0,a.XX)(t,e)),e.style.display||(e.style.display="contents");const s=e.firstElementChild;if(!s)return;const l=e.getAttribute("data-class");l&&s.classList.add(...l.split(" "))}#d=(0,n.s_)(this.#c.bind(this));#c(t){if(t&&!t.some((t=>t.addedNodes.length)))return;let e=!1,s=this.#r.flatMap((t=>[...t.querySelectorAll("slot")]));for(const t of s)t.hasAttribute("name")&&!this.elements.has(t)&&(this.elements.add(t),e=!0);e&&this.#o(this.elements)}}let u=0,_="data-slot-id";class m{#r;slots;constructor(t){this.#r=t,this.slots=new p(t,this.#c.bind(this))}connect(){this.slots.connect(),this.#c();const t=new MutationObserver(this.#d);for(const e of this.#r)t.observe(e,{childList:!0});(0,n.zp)((()=>t.disconnect()))}#d=(0,n.s_)(this.#c.bind(this));#c(){for(const t of this.#r)for(const e of t.children){if(1!==e.nodeType)continue;const t=e.getAttribute("slot");if(!t)continue;e.style.display="none";let s=e.getAttribute(_);s||e.setAttribute(_,s=++u+"");for(const n of this.slots.elements){if(n.getAttribute("name")!==t||n.getAttribute(_)===s)continue;const a=document.importNode(e,!0);t.includes("-icon")&&a.classList.add("vds-icon"),a.style.display="",a.removeAttribute("slot"),this.slots.assign(a,n),n.setAttribute(_,s)}}}}function y({name:t,class:e,state:s,paths:r,viewBox:o="0 0 32 32"}){return a.qy`<svg
    class="${"vds-icon"+(e?` ${e}`:"")}"
    viewBox="${o}"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${(0,l.J)(t??s)}
  >
    ${(0,n.Kg)(r)?(0,i.T)(r):d(r)}
  </svg>`}class h{#p={};#u=!1;slots;constructor(t){this.slots=new p(t,this.#_.bind(this))}connect(){this.slots.connect()}load(){this.loadIcons().then((t=>{this.#p=t,this.#u=!0,this.#_()}))}*#m(){for(const t of Object.keys(this.#p)){const e=`${t}-icon`;for(const s of this.slots.elements)s.name===e&&(yield{icon:this.#p[t],slot:s})}}#_(){if(this.#u)for(const{icon:t,slot:e}of this.#m())this.slots.assign(t,e)}}class $ extends h{connect(){super.connect();const{player:t}=(0,o.$c)();if(!t.el)return;let e,s=new IntersectionObserver((t=>{t[0]?.isIntersecting&&(e?.(),e=void 0,this.load())}));s.observe(t.el),e=(0,n.zp)((()=>s.disconnect()))}}},7476:(t,e,s)=>{var n=s(7933),a=s(1172),l=s(4245),i=s(4259);const r=(0,n.q6)();function o(){return(0,n.NT)(r)}const c={clickToPlay:!0,clickToFullscreen:!0,controls:["play-large","play","progress","current-time","mute+volume","captions","settings","pip","airplay","fullscreen"],customIcons:!1,displayDuration:!1,download:null,markers:null,invertTime:!0,thumbnails:null,toggleTime:!0,translations:null,seekTime:10,speed:[.5,.75,1,1.25,1.5,1.75,2,4]};class d extends n.uA{static props=c;#y;onSetup(){this.#y=(0,i.$c)(),(0,n.Pp)(r,{...this.$props,previewTime:(0,n.O)(0)})}}var p=s(1402),u=s(5466),_=s(2993),m=s(4630);s(1822),s(580),s(6214);class y extends p.UT{async loadIcons(){const t=(await s.e(9083).then(s.bind(s,9083))).icons,e={};for(const s of Object.keys(t))e[s]=(0,p.In)({name:s,paths:t[s],viewBox:"0 0 18 18"});return e}}function h(t,e){return t()?.[e]??e}function $(){const t=(0,i.$c)(),{translations:e}=o(),{title:s}=t.$state,n=(0,p.xZ)((()=>`${h(e,"Play")}, ${s()}`));return l.qy`
    <media-play-button
      class="plyr__control plyr__control--overlaid"
      aria-label=${n}
      data-plyr="play"
    >
      <slot name="play-icon"></slot>
    </button>
  `}function v(){const{controls:t}=o();return(0,p.xZ)((()=>t().includes("play-large")?$():null))}function f(){const{thumbnails:t,previewTime:e}=o();return l.qy`
    <media-thumbnail
      .src=${(0,p.xZ)(t)}
      class="plyr__preview-scrubbing"
      time=${(0,p.xZ)((()=>e()))}
    ></media-thumbnail>
  `}function b(){const t=(0,i.$c)(),{poster:e}=t.$state,s=(0,p.xZ)((()=>`background-image: url("${e()}");`));return l.qy`<div class="plyr__poster" style=${s}></div>`}function g(){const{controls:t}=o(),e=(0,p.xZ)((()=>t().map(q)));return l.qy`<div class="plyr__controls">${e}</div>`}function q(t){switch(t){case"airplay":return function(){const{translations:t}=o();return l.qy`
    <media-airplay-button class="plyr__controls__item plyr__control" data-plyr="airplay">
      <slot name="airplay-icon"></slot>
      <span class="plyr__tooltip">${O(t,"AirPlay")}</span>
    </media-airplay-button>
  `}();case"captions":return function(){const{translations:t}=o(),e=O(t,"Disable captions"),s=O(t,"Enable captions");return l.qy`
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
  `}();case"current-time":return function(){const t=(0,i.$c)(),{translations:e,invertTime:s,toggleTime:a,displayDuration:r}=o(),c=(0,n.O)((0,n.se)(s));function d(t){!a()||r()||(0,n.kx)(t)&&!(0,n.SK)(t)||c.set((t=>!t))}return(0,p.xZ)((()=>{const{streamType:s}=t.$state,n=O(e,"LIVE"),a=O(e,"Current time"),i=(0,p.xZ)((()=>!r()&&c()));return"live"===s()||"ll-live"===s()?l.qy`
          <media-live-button
            class="plyr__controls__item plyr__control plyr__live-button"
            data-plyr="live"
          >
            <span class="plyr__live-button__text">${n}</span>
          </media-live-button>
        `:l.qy`
          <media-time
            type="current"
            class="plyr__controls__item plyr__time plyr__time--current"
            tabindex="0"
            role="timer"
            aria-label=${a}
            ?remainder=${i}
            @pointerup=${d}
            @keydown=${d}
          ></media-time>
          ${(0,p.xZ)((()=>r()?x():null))}
        `}))}();case"download":return(0,p.xZ)((()=>{const t=(0,i.$c)(),{translations:e,download:s}=o(),{title:a,source:r}=t.$state,c=r(),d=s(),p=(0,m.d_)({title:a(),src:c,download:d}),u=O(e,"Download");return(0,n.Kg)(p?.url)?l.qy`
          <a
            class="plyr__controls__item plyr__control"
            href=${(0,m.xF)(p.url,{download:p.name})}
            download=${p.name}
            target="_blank"
          >
            <slot name="download-icon" />
            <span class="plyr__tooltip">${u}</span>
          </a>
        `:null}));case"duration":return x();case"fast-forward":return function(){const{translations:t,seekTime:e}=o(),s=(0,p.xZ)((()=>`${h(t,"Forward")} ${e()}s`)),n=(0,p.xZ)(e);return l.qy`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${n}
      data-no-label
      data-plyr="fast-forward"
    >
      <slot name="fast-forward-icon"></slot>
      <span class="plyr__tooltip">${s}</span>
    </media-seek-button>
  `}();case"fullscreen":return function(){const{translations:t}=o(),e=O(t,"Enter Fullscreen"),s=O(t,"Exit Fullscreen");return l.qy`
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
  `}();case"mute":case"volume":case"mute+volume":return function(t){return(0,p.xZ)((()=>{const e="mute"===t||"mute+volume"===t,s="volume"===t||"mute+volume"===t;return l.qy`
      <div class="plyr__controls__item plyr__volume">
        ${[e?A():null,s?w():null]}
      </div>
    `}))}(t);case"pip":return function(){const{translations:t}=o(),e=O(t,"Enter PiP"),s=O(t,"Exit PiP");return l.qy`
    <media-pip-button class="plyr__controls__item plyr__control" data-no-label data-plyr="pip">
      <slot name="pip-icon"></slot>
      <slot name="enter-pip-icon" data-class="icon--pressed"></slot>
      <slot name="exit-pip-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${e}</span>
    </media-pip-button>
  `}();case"play":return function(){const{translations:t}=o(),e=O(t,"Play"),s=O(t,"Pause");return l.qy`
    <media-play-button class="plyr__controls__item plyr__control" data-no-label data-plyr="play">
      <slot name="pause-icon" data-class="icon--pressed"></slot>
      <slot name="play-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${e}</span>
    </media-play-button>
  `}();case"progress":return function(){let t=(0,i.$c)(),{duration:e,viewType:s}=t.$state,{translations:a,markers:r,thumbnails:c,seekTime:d,previewTime:u}=o(),m=O(a,"Seek"),y=(0,n.O)(null),h=(0,p.xZ)((()=>{const t=y();return t?l.qy`<span class="plyr__progress__marker-label">${(0,_._)(t.label)}<br /></span>`:null}));function $(){y.set(this)}function v(){y.set(null)}return l.qy`
    <div class="plyr__controls__item plyr__progress__container">
      <div class="plyr__progress">
        <media-time-slider
          class="plyr__slider"
          data-plyr="seek"
          pause-while-dragging
          key-step=${(0,p.xZ)(d)}
          aria-label=${m}
          @media-seeking-request=${function(t){u.set(t.detail)}}
        >
          <div class="plyr__slider__track"></div>
          <div class="plyr__slider__thumb"></div>
          <div class="plyr__slider__buffer"></div>
          ${(0,p.xZ)((function(){const t=c(),e=(0,p.xZ)((()=>"audio"===s()));return t?l.qy`
          <media-slider-preview class="plyr__slider__preview" ?no-clamp=${e}>
            <media-slider-thumbnail .src=${t} class="plyr__slider__preview__thumbnail">
              <span class="plyr__slider__preview__time-container">
                ${h}
                <media-slider-value class="plyr__slider__preview__time"></media-slider-value>
              </span>
            </media-slider-thumbnail>
          </media-slider-preview>
        `:l.qy`
          <span class="plyr__tooltip">
            ${h}
            <media-slider-value></media-slider-value>
          </span>
        `}))}${(0,p.xZ)((function(){const t=e();return Number.isFinite(t)?r()?.map((e=>l.qy`
        <span
          class="plyr__progress__marker"
          @mouseenter=${$.bind(e)}
          @mouseleave=${v}
          style=${`left: ${e.time/t*100}%;`}
        ></span>
      `)):null}))}
        </media-time-slider>
      </div>
    </div>
  `}();case"restart":return function(){const{translations:t}=o(),{remote:e}=(0,i.$c)(),s=O(t,"Restart");function a(t){(0,n.kx)(t)&&!(0,n.SK)(t)||e.seek(0,t)}return l.qy`
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
  `}();case"rewind":return function(){const{translations:t,seekTime:e}=o(),s=(0,p.xZ)((()=>`${h(t,"Rewind")} ${e()}s`)),n=(0,p.xZ)((()=>-1*e()));return l.qy`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${n}
      data-no-label
      data-plyr="rewind"
    >
      <slot name="rewind-icon"></slot>
      <span class="plyr__tooltip">${s}</span>
    </media-seek-button>
  `}();case"settings":return function(){const{translations:t}=o(),e=O(t,"Settings");return l.qy`
    <div class="plyr__controls__item plyr__menu">
      <media-menu>
        <media-menu-button class="plyr__control" data-plyr="settings">
          <slot name="settings-icon" />
          <span class="plyr__tooltip">${e}</span>
        </media-menu-button>
        <media-menu-items class="plyr__menu__container" placement="top end">
          <div><div>${[k({label:"Audio",children:Z()}),k({label:"Captions",children:C()}),k({label:"Quality",children:E()}),k({label:"Speed",children:X()})]}</div></div>
        </media-menu-items>
      </media-menu>
    </div>
  `}();default:return null}}function A(){const{translations:t}=o(),e=O(t,"Mute"),s=O(t,"Unmute");return l.qy`
    <media-mute-button class="plyr__control" data-no-label data-plyr="mute">
      <slot name="muted-icon" data-class="icon--pressed"></slot>
      <slot name="volume-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${e}</span>
    </media-mute-button>
  `}function w(){const{translations:t}=o(),e=O(t,"Volume");return l.qy`
    <media-volume-slider class="plyr__slider" data-plyr="volume" aria-label=${e}>
      <div class="plyr__slider__track"></div>
      <div class="plyr__slider__thumb"></div>
    </media-volume-slider>
  `}function x(){const{translations:t}=o(),e=O(t,"Duration");return l.qy`
    <media-time
      type="duration"
      class="plyr__controls__item plyr__time plyr__time--duration"
      role="timer"
      tabindex="0"
      aria-label=${e}
    ></media-time>
  `}function T(){const t=(0,i.$c)(),e=(0,n.O)(void 0),s=(0,p.xZ)((()=>(0,_._)(e()?.text)));return(0,n.QZ)((()=>{const s=t.$state.textTrack();if(s)return a(),(0,n.k6)(s,"cue-change",a);function a(){e.set(s?.activeCues[0])}})),l.qy`
    <div class="plyr__captions" dir="auto">
      <span class="plyr__caption">${s}</span>
    </div>
  `}function k({label:t,children:e}){const s=(0,n.O)(!1);return l.qy`
    <media-menu @open=${()=>s.set(!0)} @close=${()=>s.set(!1)}>
      ${function({open:t,label:e}){const{translations:s}=o(),n=(0,p.xZ)((()=>"plyr__control plyr__control--"+(t()?"back":"forward")));return l.qy`
    <media-menu-button class=${n} data-plyr="settings">
      <span class="plyr__menu__label" aria-hidden=${a=t,(0,p.xZ)((()=>a()?"true":"false"))}>
        ${O(s,e)}
      </span>
      <span class="plyr__menu__value" data-part="hint"></span>
      ${function(){const e=O(s,"Go back to previous menu");return(0,p.xZ)((()=>t()?l.qy`<span class="plyr__sr-only">${e}</span>`:null))}()}
    </media-menu-button>
  `;var a}({label:t,open:s})}
      <media-menu-items>${e}</media-menu-items>
    </media-menu>
  `}function Z(){const{translations:t}=o();return l.qy`
    <media-audio-radio-group empty-label=${O(t,"Default")}>
      <template>
        <media-radio class="plyr__control" data-plyr="audio">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-audio-radio-group>
  `}function X(){const{translations:t,speed:e}=o();return l.qy`
    <media-speed-radio-group .rates=${e} normal-label=${O(t,"Normal")}>
      <template>
        <media-radio class="plyr__control" data-plyr="speed">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-speed-radio-group>
  `}function C(){const{translations:t}=o();return l.qy`
    <media-captions-radio-group off-label=${O(t,"Disabled")}>
      <template>
        <media-radio class="plyr__control" data-plyr="captions">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-captions-radio-group>
  `}function E(){const{translations:t}=o();return l.qy`
    <media-quality-radio-group auto-label=${O(t,"Auto")}>
      <template>
        <media-radio class="plyr__control" data-plyr="quality">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-quality-radio-group>
  `}function O(t,e){return(0,p.xZ)((()=>h(t,e)))}class I extends((0,n.xr)(u.W,d)){static tagName="media-plyr-layout";#y;onSetup(){this.forwardKeepAlive=!1,this.#y=(0,i.$c)()}onConnect(){this.#y.player.el?.setAttribute("data-layout","plyr"),(0,n.zp)((()=>this.#y.player.el?.removeAttribute("data-layout"))),function(t,e){const{canAirPlay:s,canFullscreen:a,canPictureInPicture:l,controlsHidden:i,currentTime:r,fullscreen:o,hasCaptions:c,isAirPlayConnected:d,paused:p,pictureInPicture:u,playing:_,pointer:m,poster:y,textTrack:h,viewType:$,waiting:v}=e.$state;t.classList.add("plyr"),t.classList.add("plyr--full-ui");const f={"plyr--airplay-active":d,"plyr--airplay-supported":s,"plyr--fullscreen-active":o,"plyr--fullscreen-enabled":a,"plyr--hide-controls":i,"plyr--is-touch":()=>"coarse"===m(),"plyr--loading":v,"plyr--paused":p,"plyr--pip-active":u,"plyr--pip-enabled":l,"plyr--playing":_,"plyr__poster-enabled":y,"plyr--stopped":()=>p()&&0===r(),"plyr--captions-active":h,"plyr--captions-enabled":c},b=(0,n.z2)();for(const e of Object.keys(f))b.add((0,n.QZ)((()=>{t.classList.toggle(e,!!f[e]())})));b.add((0,n.QZ)((()=>{const e=`plyr--${$()}`;return t.classList.add(e),()=>t.classList.remove(e)})),(0,n.QZ)((()=>{const{$provider:s}=e,n=s()?.type,a=`plyr--${function(t){return"audio"===t||"video"===t}(n)?"html5":n}`;return t.classList.toggle(a,!!n),()=>t.classList.remove(a)})))}(this,this.#y),(0,n.QZ)((()=>{this.$props.customIcons()?new p.kj([this]).connect():new y([this]).connect()}))}render(){return(0,p.xZ)(this.#h.bind(this))}#h(){const{viewType:t}=this.#y.$state;return"audio"===t()?function(){const t=new Set(["captions","pip","airplay","fullscreen"]),{controls:e}=o(),s=(0,p.xZ)((()=>e().filter((e=>!t.has(e))).map(q)));return l.qy`<div class="plyr__controls">${s}</div>`}():"video"===t()?function(){const t=(0,i.$c)(),{load:e}=t.$props,{canLoad:s}=t.$state;return(0,n.EW)((()=>"play"===e()&&!s()))()?[$(),b()]:[v(),f(),b(),g(),(0,p.xZ)((()=>{const{clickToPlay:t,clickToFullscreen:e}=o();return[t()?l.qy`
            <media-gesture
              class="plyr__gesture"
              event="pointerup"
              action="toggle:paused"
            ></media-gesture>
          `:null,e()?l.qy`
            <media-gesture
              class="plyr__gesture"
              event="dblpointerup"
              action="toggle:fullscreen"
            ></media-gesture>
          `:null]})),T()]}():null}}var L=s(3956);(0,n.Xq)(I),(0,n.Xq)(L.MediaPosterElement),(0,n.Xq)(a.tV),(0,n.Xq)(a.M0),(0,n.Xq)(a.Th),(0,n.Xq)(a.yA),(0,n.Xq)(a.Ov),(0,n.Xq)(a.Z4),(0,n.Xq)(a.py),(0,n.Xq)(a.L4),(0,n.Xq)(a.cZ),(0,n.Xq)(a.zR),(0,n.Xq)(a.MA),(0,n.Xq)(a.cw),(0,n.Xq)(a.xi),(0,n.Xq)(a.eq),(0,n.Xq)(a.SI),(0,n.Xq)(a.mo),(0,n.Xq)(a.T$),(0,n.Xq)(a.DW),(0,n.Xq)(a.ES),(0,n.Xq)(a.Yp),(0,n.Xq)(a.Q_),(0,n.Xq)(a.oY),(0,n.Xq)(a.sE),(0,n.Xq)(a.pt)}}]);