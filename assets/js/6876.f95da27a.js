"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[6876],{7922:(t,e,s)=>{s.d(e,{$:()=>o,I:()=>u,L:()=>m,S:()=>p});var n=s(9549),a=s(1029),l=s(7404);class i extends a.c{constructor(t){super(t),this.h=null,this.w=!1,this.$=null,this.w=t.type===a.t.ATTRIBUTE||t.type===a.t.BOOLEAN_ATTRIBUTE}render(t){return t!==this.h&&(this.disconnected(),this.h=t,this.isConnected&&this.Gl()),this.h?this.x((0,n.p)(this.h)):a.A}reconnected(){this.Gl()}disconnected(){this.$?.(),this.$=null}Gl(){this.h&&(this.$=(0,n.g)(this.l.bind(this)))}x(t){return this.w?(0,a.l)(t):t}y(t){this.setValue(this.x(t))}l(){this.y(this.h?.())}}function o(t){return(0,a.e)(i)((0,n.o)(t))}class r{constructor(t,e){this._m=t,this.La=e,this.elements=new Set,this.Gc=(0,n.J)(this.Ha.bind(this))}connect(){this.Ha();const t=new MutationObserver(this.Gc);for(const e of this._m)t.observe(e,{childList:!0,subtree:!0});(0,n.q)((()=>t.disconnect())),(0,n.q)(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(t,e){(0,n.w)(t)?(e.textContent="",e.append(t)):((0,a.D)(null,e),(0,a.D)(t,e)),e.style.display||(e.style.display="contents");const s=e.firstElementChild;if(!s)return;const l=e.getAttribute("data-class");l&&s.classList.add(...l.split(" "))}Ha(t){if(t&&!t.some((t=>t.addedNodes.length)))return;let e=!1,s=this._m.flatMap((t=>[...t.querySelectorAll("slot")]));for(const t of s)t.hasAttribute("name")&&!this.elements.has(t)&&(this.elements.add(t),e=!0);e&&this.La(this.elements)}}let c=0,d="data-slot-id";class p{constructor(t){this._m=t,this.Gc=(0,n.J)(this.Ha.bind(this)),this.slots=new r(t,this.Ha.bind(this))}connect(){this.slots.connect(),this.Ha();const t=new MutationObserver(this.Gc);for(const e of this._m)t.observe(e,{childList:!0});(0,n.q)((()=>t.disconnect()))}Ha(){for(const t of this._m)for(const e of t.children){if(1!==e.nodeType)continue;const t=e.getAttribute("slot");if(!t)continue;e.style.display="none";let s=e.getAttribute(d);s||e.setAttribute(d,s=++c+"");for(const n of this.slots.elements){if(n.getAttribute("name")!==t||n.getAttribute(d)===s)continue;const a=document.importNode(e,!0);t.includes("-icon")&&a.classList.add("vds-icon"),a.style.display="",a.removeAttribute("slot"),this.slots.assign(a,n),n.setAttribute(d,s)}}}}function u({name:t,class:e,state:s,paths:l,viewBox:i="0 0 32 32"}){return a.x`<svg
    class="${"vds-icon"+(e?` ${e}`:"")}"
    viewBox="${i}"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${(0,a.l)(t??s)}
  >
    ${(0,n.i)(l)?(0,a.a)(l):o(l)}
  </svg>`}class _{constructor(t){this._m=t,this.dn={},this.gn=!1,this.slots=new r(t,this.hn.bind(this))}connect(){this.slots.connect()}load(){this.Pf().then((t=>{this.dn=t,this.gn=!0,this.hn()}))}*jn(){for(const t of Object.keys(this.dn)){const e=`${t}-icon`;for(const s of this.slots.elements)s.name===e&&(yield{icon:this.dn[t],slot:s})}}hn(){if(this.gn)for(const{icon:t,slot:e}of this.jn())this.slots.assign(t,e)}}class m extends _{connect(){super.connect();const{player:t}=(0,l.u)();if(!t.el)return;let e,s=new IntersectionObserver((t=>{t[0]?.isIntersecting&&(e?.(),e=void 0,this.load())}));s.observe(t.el),e=(0,n.q)((()=>s.disconnect()))}}},6876:(t,e,s)=>{s.r(e);var n=s(9549),a=s(2177),l=s(1029),i=s(7404),o=s(7922),r=s(2027),c=s(6623);class d extends o.L{async Pf(){const t=(await s.e(9398).then(s.bind(s,9398))).icons,e={};for(const s of Object.keys(t))e[s]=(0,o.I)({name:s,paths:t[s],viewBox:"0 0 18 18"});return e}}function p(t,e){return t()?.[e]??e}function u(){const t=(0,i.u)(),{translations:e}=(0,i.c)(),{title:s}=t.$state,n=(0,o.$)((()=>`${p(e,"Play")}, ${s()}`));return l.x`
    <media-play-button
      class="plyr__control plyr__control--overlaid"
      aria-label=${n}
      data-plyr="play"
    >
      <slot name="play-icon"></slot>
    </button>
  `}function _(){const{controls:t}=(0,i.c)();return(0,o.$)((()=>t().includes("play-large")?u():null))}function m(){const{thumbnails:t,previewTime:e}=(0,i.c)();return l.x`
    <media-thumbnail
      .src=${(0,o.$)(t)}
      class="plyr__preview-scrubbing"
      time=${(0,o.$)((()=>e()))}
    ></media-thumbnail>
  `}function y(){const t=(0,i.u)(),{poster:e}=t.$state,s=(0,o.$)((()=>`background-image: url("${e()}");`));return l.x`<div class="plyr__poster" style=${s}></div>`}function h(){const{controls:t}=(0,i.c)(),e=(0,o.$)((()=>t().map(b)));return l.x`<div class="plyr__controls">${e}</div>`}function b(t){switch(t){case"airplay":return function(){const{translations:t}=(0,i.c)();return l.x`
    <media-airplay-button class="plyr__controls__item plyr__control" data-plyr="airplay">
      <slot name="airplay-icon"></slot>
      <span class="plyr__tooltip">${P(t,"AirPlay")}</span>
    </media-airplay-button>
  `}();case"captions":return function(){const{translations:t}=(0,i.c)(),e=P(t,"Disable captions"),s=P(t,"Enable captions");return l.x`
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
  `}();case"current-time":return function(){const t=(0,i.u)(),{translations:e,invertTime:s,toggleTime:a,displayDuration:r}=(0,i.c)(),c=(0,n.f)((0,n.p)(s));function d(t){!a()||r()||(0,n.R)(t)&&!(0,n.y)(t)||c.set((t=>!t))}return(0,o.$)((()=>{const{streamType:s}=t.$state,n=P(e,"LIVE"),a=P(e,"Current time"),i=(0,o.$)((()=>!r()&&c()));return"live"===s()||"ll-live"===s()?l.x`
          <media-live-button
            class="plyr__controls__item plyr__control plyr__live-button"
            data-plyr="live"
          >
            <span class="plyr__live-button__text">${n}</span>
          </media-live-button>
        `:l.x`
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
          ${(0,o.$)((()=>r()?v():null))}
        `}))}();case"download":return(0,o.$)((()=>{const t=(0,i.u)(),{translations:e,download:s}=(0,i.c)(),{title:n,source:a}=t.$state,o=a(),r=s(),d=(0,c.g)({title:n(),src:o,download:r}),p=P(e,"Download");return d?l.x`
          <a
            class="plyr__controls__item plyr__control"
            href=${d.url+`?download=${d.name}`}
            download=${d.name}
            target="_blank"
          >
            <slot name="download-icon" />
            <span class="plyr__tooltip">${p}</span>
          </a>
        `:null}));case"duration":return v();case"fast-forward":return function(){const{translations:t,seekTime:e}=(0,i.c)(),s=(0,o.$)((()=>`${p(t,"Forward")} ${e()}s`)),n=(0,o.$)(e);return l.x`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${n}
      data-no-label
      data-plyr="fast-forward"
    >
      <slot name="fast-forward-icon"></slot>
      <span class="plyr__tooltip">${s}</span>
    </media-seek-button>
  `}();case"fullscreen":return function(){const{translations:t}=(0,i.c)(),e=P(t,"Enter Fullscreen"),s=P(t,"Exit Fullscreen");return l.x`
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
  `}();case"mute":case"volume":case"mute+volume":return function(t){return(0,o.$)((()=>{const e="mute"===t||"mute+volume"===t,s="volume"===t||"mute+volume"===t;return l.x`
      <div class="plyr__controls__item plyr__volume">
        ${[e?$():null,s?f():null]}
      </div>
    `}))}(t);case"pip":return function(){const{translations:t}=(0,i.c)(),e=P(t,"Enter PiP"),s=P(t,"Exit PiP");return l.x`
    <media-pip-button class="plyr__controls__item plyr__control" data-no-label data-plyr="pip">
      <slot name="pip-icon"></slot>
      <slot name="enter-pip-icon" data-class="icon--pressed"></slot>
      <slot name="exit-pip-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${e}</span>
    </media-pip-button>
  `}();case"play":return function(){const{translations:t}=(0,i.c)(),e=P(t,"Play"),s=P(t,"Pause");return l.x`
    <media-play-button class="plyr__controls__item plyr__control" data-no-label data-plyr="play">
      <slot name="pause-icon" data-class="icon--pressed"></slot>
      <slot name="play-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${e}</span>
    </media-play-button>
  `}();case"progress":return function(){let t=(0,i.u)(),{duration:e,viewType:s}=t.$state,{translations:a,markers:r,thumbnails:c,seekTime:d,previewTime:p}=(0,i.c)(),u=P(a,"Seek"),_=(0,n.f)(null),m=(0,o.$)((()=>{const t=_();return t?l.x`<span class="plyr__progress__marker-label">${(0,l.o)(t.label)}<br /></span>`:null}));function y(){_.set(this)}function h(){_.set(null)}return l.x`
    <div class="plyr__controls__item plyr__progress__container">
      <div class="plyr__progress">
        <media-time-slider
          class="plyr__slider"
          data-plyr="seek"
          pause-while-dragging
          key-step=${(0,o.$)(d)}
          aria-label=${u}
          @media-seeking-request=${function(t){p.set(t.detail)}}
        >
          <div class="plyr__slider__track"></div>
          <div class="plyr__slider__thumb"></div>
          <div class="plyr__slider__buffer"></div>
          ${(0,o.$)((function(){const t=c(),e=(0,o.$)((()=>"audio"===s()));return t?l.x`
          <media-slider-preview class="plyr__slider__preview" ?no-clamp=${e}>
            <media-slider-thumbnail .src=${t} class="plyr__slider__preview__thumbnail">
              <span class="plyr__slider__preview__time-container">
                ${m}
                <media-slider-value class="plyr__slider__preview__time"></media-slider-value>
              </span>
            </media-slider-thumbnail>
          </media-slider-preview>
        `:l.x`
          <span class="plyr__tooltip">
            ${m}
            <media-slider-value></media-slider-value>
          </span>
        `}))}${(0,o.$)((function(){const t=e();return Number.isFinite(t)?r()?.map((e=>l.x`
        <span
          class="plyr__progress__marker"
          @mouseenter=${y.bind(e)}
          @mouseleave=${h}
          style=${`left: ${e.time/t*100}%;`}
        ></span>
      `)):null}))}
        </media-time-slider>
      </div>
    </div>
  `}();case"restart":return function(){const{translations:t}=(0,i.c)(),{remote:e}=(0,i.u)(),s=P(t,"Restart");function a(t){(0,n.R)(t)&&!(0,n.y)(t)||e.seek(0,t)}return l.x`
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
  `}();case"rewind":return function(){const{translations:t,seekTime:e}=(0,i.c)(),s=(0,o.$)((()=>`${p(t,"Rewind")} ${e()}s`)),n=(0,o.$)((()=>-1*e()));return l.x`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${n}
      data-no-label
      data-plyr="rewind"
    >
      <slot name="rewind-icon"></slot>
      <span class="plyr__tooltip">${s}</span>
    </media-seek-button>
  `}();case"settings":return function(){const{translations:t}=(0,i.c)(),e=P(t,"Settings");return l.x`
    <div class="plyr__controls__item plyr__menu">
      <media-menu>
        <media-menu-button class="plyr__control" data-plyr="settings">
          <slot name="settings-icon" />
          <span class="plyr__tooltip">${e}</span>
        </media-menu-button>
        <media-menu-items class="plyr__menu__container" placement="top end">
          <div><div>${[x({label:"Audio",children:w()}),x({label:"Captions",children:A()}),x({label:"Quality",children:T()}),x({label:"Speed",children:k()})]}</div></div>
        </media-menu-items>
      </media-menu>
    </div>
  `}();default:return null}}function $(){const{translations:t}=(0,i.c)(),e=P(t,"Mute"),s=P(t,"Unmute");return l.x`
    <media-mute-button class="plyr__control" data-no-label data-plyr="mute">
      <slot name="muted-icon" data-class="icon--pressed"></slot>
      <slot name="volume-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${e}</span>
    </media-mute-button>
  `}function f(){const{translations:t}=(0,i.c)(),e=P(t,"Volume");return l.x`
    <media-volume-slider class="plyr__slider" data-plyr="volume" aria-label=${e}>
      <div class="plyr__slider__track"></div>
      <div class="plyr__slider__thumb"></div>
    </media-volume-slider>
  `}function v(){const{translations:t}=(0,i.c)(),e=P(t,"Duration");return l.x`
    <media-time
      type="duration"
      class="plyr__controls__item plyr__time plyr__time--duration"
      role="timer"
      tabindex="0"
      aria-label=${e}
    ></media-time>
  `}function g(){const t=(0,i.u)(),e=(0,n.f)(void 0),s=(0,o.$)((()=>(0,l.o)(e()?.text)));return(0,n.g)((()=>{const s=t.$state.textTrack();if(s)return a(),(0,n.l)(s,"cue-change",a);function a(){e.set(s?.activeCues[0])}})),l.x`
    <div class="plyr__captions" dir="auto">
      <span class="plyr__caption">${s}</span>
    </div>
  `}function x({label:t,children:e}){const s=(0,n.f)(!1);return l.x`
    <media-menu @open=${()=>s.set(!0)} @close=${()=>s.set(!1)}>
      ${function({open:t,label:e}){const{translations:s}=(0,i.c)(),n=(0,o.$)((()=>"plyr__control plyr__control--"+(t()?"back":"forward")));return l.x`
    <media-menu-button class=${n} data-plyr="settings">
      <span class="plyr__menu__label" aria-hidden=${a=t,(0,o.$)((()=>a()?"true":"false"))}>
        ${P(s,e)}
      </span>
      <span class="plyr__menu__value" data-part="hint"></span>
      ${function(){const e=P(s,"Go back to previous menu");return(0,o.$)((()=>t()?l.x`<span class="plyr__sr-only">${e}</span>`:null))}()}
    </media-menu-button>
  `;var a}({label:t,open:s})}
      <media-menu-items>${e}</media-menu-items>
    </media-menu>
  `}function w(){const{translations:t}=(0,i.c)();return l.x`
    <media-audio-radio-group empty-label=${P(t,"Default")}>
      <template>
        <media-radio class="plyr__control" data-plyr="audio">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-audio-radio-group>
  `}function k(){const{translations:t,speed:e}=(0,i.c)();return l.x`
    <media-speed-radio-group .rates=${e} normal-label=${P(t,"Normal")}>
      <template>
        <media-radio class="plyr__control" data-plyr="speed">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-speed-radio-group>
  `}function A(){const{translations:t}=(0,i.c)();return l.x`
    <media-captions-radio-group off-label=${P(t,"Disabled")}>
      <template>
        <media-radio class="plyr__control" data-plyr="captions">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-captions-radio-group>
  `}function T(){const{translations:t}=(0,i.c)();return l.x`
    <media-quality-radio-group auto-label=${P(t,"Auto")}>
      <template>
        <media-radio class="plyr__control" data-plyr="quality">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-quality-radio-group>
  `}function P(t,e){return(0,o.$)((()=>p(t,e)))}class L extends((0,n.H)(r.L,i.P)){static{this.tagName="media-plyr-layout"}onSetup(){this.forwardKeepAlive=!1,this.a=(0,i.u)()}onConnect(){this.a.player.el?.setAttribute("data-layout","plyr"),(0,n.q)((()=>this.a.player.el?.removeAttribute("data-layout"))),(0,i.a)(this,this.a),(0,n.g)((()=>{this.$props.customIcons()?new o.S([this]).connect():new d([this]).connect()}))}render(){return(0,o.$)(this.Zm.bind(this))}Zm(){const{viewType:t}=this.a.$state;return"audio"===t()?function(){const t=new Set(["captions","pip","airplay","fullscreen"]),{controls:e}=(0,i.c)(),s=(0,o.$)((()=>e().filter((e=>!t.has(e))).map(b)));return l.x`<div class="plyr__controls">${s}</div>`}():"video"===t()?function(){const t=(0,i.u)(),{load:e}=t.$props,{canLoad:s}=t.$state;return(0,n.o)((()=>"play"===e()&&!s()))()?[u(),y()]:[_(),m(),y(),h(),(0,o.$)((()=>{const{clickToPlay:t,clickToFullscreen:e}=(0,i.c)();return[t()?l.x`
            <media-gesture
              class="plyr__gesture"
              event="pointerup"
              action="toggle:paused"
            ></media-gesture>
          `:null,e()?l.x`
            <media-gesture
              class="plyr__gesture"
              event="dblpointerup"
              action="toggle:fullscreen"
            ></media-gesture>
          `:null]})),g()]}():null}}var q=s(7618);(0,n.d)(L),(0,n.d)(q.MediaPosterElement),(0,n.d)(a.h),(0,n.d)(a.f),(0,n.d)(a.c),(0,n.d)(a.g),(0,n.d)(a.d),(0,n.d)(a.i),(0,n.d)(a.b),(0,n.d)(a.e),(0,n.d)(a.v),(0,n.d)(a.t),(0,n.d)(a.u),(0,n.d)(a.r),(0,n.d)(a.s),(0,n.d)(a.l),(0,n.d)(a.m),(0,n.d)(a.o),(0,n.d)(a.n),(0,n.d)(a.j),(0,n.d)(a.k),(0,n.d)(a.p),(0,n.d)(a.q),(0,n.d)(a.a),(0,n.d)(a.M)}}]);