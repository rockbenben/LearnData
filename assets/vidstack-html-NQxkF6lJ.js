import{ad as c,o as n,s as o,ae as u,k as l,af as b,e as g,l as e,ag as f,ah as m,ai as p,aj as k,ak as d,al as y,am as a}from"./vidstack-sKeoTFgw-BbTZsg_E.js";import{R as T}from"./vidstack-4jGm7oeB-becDhEq_.js";class v{constructor(t,i){this.i=t,this.b=i,this.sa=b(),this.Cb=!1,this.$c=!1,this.ad=!1,this.Da=new T(this.bd.bind(this)),this.Qe=void 0,this.Dg=void 0,this.pg(),g(this.qg.bind(this)),n(this.cd.bind(this))}get a(){return this.i.media}get c(){return this.b.delegate.c}cd(){this.$c=!1,this.ad=!1,this.Da.ra(),this.sa.empty()}bd(){const t=this.a.currentTime;this.b.$state.currentTime()!==t&&this.$a(t)}pg(){this.t("loadstart",this.Ea),this.t("abort",this.Pe),this.t("emptied",this.rg),this.t("error",this.U),this.t("volumechange",this.ab)}sg(){this.$c||(this.sa.add(this.t("loadeddata",this.tg),this.t("loadedmetadata",this.ug),this.t("canplay",this.hc),this.t("canplaythrough",this.vg),this.t("durationchange",this.wg),this.t("play",this.xb),this.t("progress",this.ic),this.t("stalled",this.xg),this.t("suspend",this.yg)),this.$c=!0)}zg(){this.ad||(this.sa.add(this.t("pause",this.Aa),this.t("playing",this.Ag),this.t("ratechange",this.Bg),this.t("seeked",this.bb),this.t("seeking",this.Cg),this.t("ended",this.Db),this.t("waiting",this.dd)),this.ad=!0)}t(t,i){return e(this.a,t,i.bind(this))}Eg(t){}$a(t,i){const s={currentTime:Math.min(t,this.b.$state.seekableEnd()),played:this.a.played};this.c("time-update",s,i)}Ea(t){if(this.a.networkState===3){this.Pe(t);return}this.sg(),this.c("load-start",void 0,t)}Pe(t){this.c("abort",void 0,t)}rg(){this.c("emptied",void 0,event)}tg(t){this.c("loaded-data",void 0,t)}ug(t){this.zg(),this.c("loaded-metadata",void 0,t),f&&m(this.b.$state.source())&&this.b.delegate.jc(this.ed(),t)}ed(){return{provider:p(this.b.$provider),duration:this.a.duration,buffered:this.a.buffered,seekable:this.a.seekable}}xb(t){this.b.$state.canPlay&&this.c("play",void 0,t)}Aa(t){this.a.readyState===1&&!this.Cb||(this.Cb=!1,this.Da.ra(),this.c("pause",void 0,t))}hc(t){this.b.delegate.jc(this.ed(),t)}vg(t){this.b.$state.started()||this.c("can-play-through",this.ed(),t)}Ag(t){this.Cb=!1,this.c("playing",void 0,t),this.Da.Bb()}xg(t){this.c("stalled",void 0,t),this.a.readyState<3&&(this.Cb=!0,this.c("waiting",void 0,t))}dd(t){this.a.readyState<3&&(this.Cb=!0,this.c("waiting",void 0,t))}Db(t){this.Da.ra(),this.$a(this.a.duration,t),this.c("end",void 0,t),this.b.$state.loop()&&k(this.a.controls)&&(this.a.controls=!1)}qg(){this.b.$state.paused()&&e(this.a,"timeupdate",this.Eb.bind(this))}Eb(t){this.$a(this.a.currentTime,t)}wg(t){this.b.$state.ended()&&this.$a(this.a.duration,t),this.c("duration-change",this.a.duration,t)}ab(t){const i={volume:this.a.volume,muted:this.a.muted};this.c("volume-change",i,t)}bb(t){this.$a(this.a.currentTime,t),this.c("seeked",this.a.currentTime,t),Math.trunc(this.a.currentTime)===Math.trunc(this.a.duration)&&d(this.a.duration)>d(this.a.currentTime)&&(this.$a(this.a.duration,t),this.a.ended||this.b.player.dispatch(new y("media-play-request",{trigger:t})))}Cg(t){this.c("seeking",this.a.currentTime,t)}ic(t){const i={buffered:this.a.buffered,seekable:this.a.seekable};this.c("progress",i,t)}yg(t){this.c("suspend",void 0,t)}Bg(t){this.c("rate-change",this.a.playbackRate,t)}U(t){const i=this.a.error;if(!i)return;const s={message:i.message,code:i.code,mediaError:i};this.c("error",s,t)}}class ${constructor(t,i){this.i=t,this.b=i,this.Fb.onaddtrack=this.Fg.bind(this),this.Fb.onremovetrack=this.Gg.bind(this),this.Fb.onchange=this.Hg.bind(this),e(this.b.audioTracks,"change",this.Ig.bind(this))}get Fb(){return this.i.media.audioTracks}Fg(t){const i=t.track;if(i.label==="")return;const s={id:i.id+"",label:i.label,language:i.language,kind:i.kind,selected:!1};this.b.audioTracks[a.oa](s,t),i.enabled&&(s.selected=!0)}Gg(t){const i=this.b.audioTracks.getById(t.track.id);i&&this.b.audioTracks[a.Yb](i,t)}Hg(t){let i=this.Re();if(!i)return;const s=this.b.audioTracks.getById(i.id);s&&this.b.audioTracks[a.pa](s,!0,t)}Re(){return Array.from(this.Fb).find(t=>t.enabled)}Ig(t){const{current:i}=t.detail;if(!i)return;const s=this.Fb.getTrackById(i.id);if(s){const r=this.Re();r&&(r.enabled=!1),s.enabled=!0}}}class C{constructor(t){this.a=t,this.scope=c(),this.V=null}setup(t){new v(this,t),"audioTracks"in this.media&&new $(this,t),n(()=>{this.a.setAttribute("src",""),this.a.load()})}get type(){return""}get media(){return this.a}get currentSrc(){return this.V}setPlaybackRate(t){this.a.playbackRate=t}async play(){return this.a.play()}async pause(){return this.a.pause()}setMuted(t){this.a.muted=t}setVolume(t){this.a.volume=t}setCurrentTime(t){this.a.currentTime=t}setPlaysinline(t){o(this.a,"playsinline",t)}async loadSource({src:t,type:i},s){this.a.preload=s||"",u(t)?this.a.srcObject=t:(this.a.srcObject=null,this.a.src=l(t)?t:window.URL.createObjectURL(t)),this.a.load(),this.V={src:t,type:i}}}export{C as H};
