"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[2805],{2805:(t,i,e)=>{e.r(i),e.d(i,{DASHProvider:()=>g});var s=e(7707),a=e(138),n=e(2306),h=e(8393),d=e(4366),r=e(301),o=e(4730),c=e(9436),l=e(1669);function u(t){try{return new Intl.DisplayNames(navigator.languages,{type:"language"}).of(t)??null}catch(t){return null}}class b{constructor(t,i){this.m=t,this.b=i,this.d=null,this.qb=null,this.rb={},this.sb=new Set,this.Kb=null,this.oe={},this.na=-1}get instance(){return this.d}setup(t){this.d=t().create();const i=this.Ii.bind(this);for(const e of Object.values(t.events))this.d.on(e,i);this.d.on(t.events.ERROR,this.Q.bind(this));for(const t of this.sb)t(this.d);this.b.player.dispatch("dash-instance",{detail:this.d}),this.d.initialize(this.m,void 0,!1),this.d.updateSettings({streaming:{text:{defaultEnabled:!1,dispatchForManualRendering:!0},buffer:{fastSwitchEnabled:!0}},...this.rb}),this.d.on(t.events.FRAGMENT_LOADING_STARTED,this.Ji.bind(this)),this.d.on(t.events.FRAGMENT_LOADING_COMPLETED,this.Ki.bind(this)),this.d.on(t.events.MANIFEST_LOADED,this.Li.bind(this)),this.d.on(t.events.QUALITY_CHANGE_RENDERED,this.Za.bind(this)),this.d.on(t.events.TEXT_TRACKS_ADDED,this.Mi.bind(this)),this.d.on(t.events.TRACK_CHANGE_RENDERED,this.pc.bind(this)),this.b.qualities[d.Q.Ia]=this.je.bind(this),(0,h.l)(this.b.qualities,"change",this.ke.bind(this)),(0,h.l)(this.b.audioTracks,"change",this.le.bind(this)),this.qb=(0,h.g)(this.me.bind(this))}aa(t){return new h.D((i=t.type,`dash-${(0,h.S)(i)}`),{detail:t});var i}me(){if(!this.b.$state.live())return;const t=new c.R(this.ne.bind(this));return t.Xa(),t.$.bind(t)}ne(){if(!this.d)return;const t=this.d.duration()-this.d.time();this.b.$state.liveSyncPosition.set(isNaN(t)?1/0:t)}Ii(t){this.b.player?.dispatch(this.aa(t))}Ni(t){const i=this.Kb?.[r.a._],e=(i?.track).cues;if(!i||!e)return;const s=this.Kb.id,a=this.oe[s]??0,n=this.aa(t);for(let t=a;t<e.length;t++){const i=e[t];i.positionAlign||(i.positionAlign="auto"),this.Kb.addCue(i,n)}this.oe[s]=e.length}Mi(t){if(!this.d)return;const i=t.tracks,e=[...this.m.textTracks].filter((t=>"manualMode"in t)),s=this.aa(t);for(let t=0;t<e.length;t++){const a=i[t],n=e[t],h=`dash-${a.kind}-${t}`,d=new r.T({id:h,label:a?.label??a.labels.find((t=>t.text))?.text??(a?.lang&&u(a.lang))??a?.lang??void 0,language:a.lang??void 0,kind:a.kind,default:a.defaultTrack});d[r.a._]={managed:!0,track:n},d[r.a.ma]=2,d[r.a.hb]=()=>{this.d&&("showing"===d.mode?(this.d.setTextTrack(t),this.Kb=d):(this.d.setTextTrack(-1),this.Kb=null))},this.b.textTracks.add(d,s)}}pc(t){const{mediaType:i,newMediaInfo:e}=t;if("audio"===i){const i=this.b.audioTracks.getById(`dash-audio-${e.index}`);if(i){const e=this.aa(t);this.b.audioTracks[o.L.ea](i,!0,e)}}}Za(t){if("video"!==t.mediaType)return;const i=this.b.qualities[t.newQuality];if(i){const e=this.aa(t);this.b.qualities[o.L.ea](i,!0,e)}}Li(t){if(this.b.$state.canPlay()||!this.d)return;const{type:i,mediaPresentationDuration:e}=t.data,s=this.aa(t);this.b.delegate.c("stream-type-change","static"!==i?"live":"on-demand",s),this.b.delegate.c("duration-change",e,s),this.b.qualities[d.Q.Wa](!0,s);const n=this.d.getVideoElement(),r=this.d.getTracksForTypeFromManifest("video",t.data),c=[...new Set(r.map((t=>t.mimeType)))].find((t=>t&&(0,a.c)(n,t))),l=r.filter((t=>c===t.mimeType))[0];let b=this.d.getTracksForTypeFromManifest("audio",t.data);const p=[...new Set(b.map((t=>t.mimeType)))].find((t=>t&&(0,a.u)(n,t)));if(b=b.filter((t=>p===t.mimeType)),l.bitrateList.forEach(((t,i)=>{const e={id:t.id?.toString()??`dash-bitrate-${i}`,width:t.width??0,height:t.height??0,bitrate:t.bandwidth??0,codec:l.codec,index:i};this.b.qualities[o.L.da](e,s)})),(0,h.j)(l.index)){const t=this.b.qualities[l.index];t&&this.b.qualities[o.L.ea](t,!0,s)}b.forEach(((t,i)=>{const e=t.labels.find((t=>navigator.languages.some((i=>t.lang&&i.toLowerCase().startsWith(t.lang.toLowerCase())))))||t.labels[0],a={id:`dash-audio-${t?.index}`,label:e?.text??(t.lang&&u(t.lang))??t.lang??"",language:t.lang??"",kind:"main",mimeType:t.mimeType,codec:t.codec,index:i};this.b.audioTracks[o.L.da](a,s)})),n.dispatchEvent(new h.D("canplay",{trigger:s}))}Q(t){const{type:i,error:e}=t;27===e.code?this.pe(e):this.qc(e)}Ji(){this.na>=0&&this._a()}Ki(t){"text"===t.mediaType&&requestAnimationFrame(this.Ni.bind(this,t))}pe(t){this._a(),this.d?.play(),this.na=window.setTimeout((()=>{this.na=-1,this.qc(t)}),5e3)}_a(){clearTimeout(this.na),this.na=-1}qc(t){this.b.delegate.c("error",{message:t.message??"",code:1,error:t})}je(){this.lg("video",!0);const{qualities:t}=this.b;this.d?.setQualityFor("video",t.selectedIndex,!0)}lg(t,i){this.d?.updateSettings({streaming:{abr:{autoSwitchBitrate:{[t]:i}}}})}ke(){const{qualities:t}=this.b;this.d&&!t.auto&&t.selected&&(this.lg("video",!1),this.d.setQualityFor("video",t.selectedIndex,"current"===t.switch),a.I&&(this.m.currentTime=this.m.currentTime))}le(){if(!this.d)return;const{audioTracks:t}=this.b,i=this.d.getTracksFor("audio").find((i=>t.selected&&t.selected.id===`dash-audio-${i.index}`));i&&this.d.setCurrentTrack(i)}z(){this._a(),this.Kb=null,this.oe={}}loadSource(t){this.z(),(0,h.i)(t.src)&&this.d?.attachSource(t.src)}destroy(){this.z(),this.d?.destroy(),this.d=null,this.qb?.(),this.qb=null}}class p{constructor(t,i,e){this.L=t,this.b=i,this.La=e,this.qe()}async qe(){const t={onLoadStart:this.Ma.bind(this),onLoaded:this.tb.bind(this),onLoadError:this.re.bind(this)};let i=await async function(t,i={}){if((0,h.i)(t)){i.onLoadStart?.();try{if(await(0,s.l)(t),!(0,h.x)(window.dashjs.MediaPlayer))throw Error("");const e=window.dashjs.MediaPlayer;return i.onLoaded?.(e),e}catch(t){i.onLoadError?.(t)}}}(this.L,t);if((0,h.h)(i)&&!(0,h.i)(this.L)&&(i=await async function(t,i={}){if(!(0,h.h)(t)){if(i.onLoadStart?.(),t.prototype&&t.prototype!==Function)return i.onLoaded?.(t),t;try{const e=(await t())?.default;if(!e)throw Error("");return i.onLoaded?.(e),e}catch(t){i.onLoadError?.(t)}}}(this.L,t)),!i)return null;if(!window.dashjs.supportsMediaSource()){const t="[vidstack] `dash.js` is not supported in this environment";return this.b.player.dispatch(new h.D("dash-unsupported")),this.b.delegate.c("error",{message:t,code:4}),null}return i}Ma(){this.b.player.dispatch(new h.D("dash-lib-load-start"))}tb(t){this.b.player.dispatch(new h.D("dash-lib-loaded",{detail:t})),this.La(t)}re(t){const i=(0,l.c)(t);this.b.player.dispatch(new h.D("dash-lib-load-error",{detail:i})),this.b.delegate.c("error",{message:i.message,code:4,error:i})}}class g extends n.VideoProvider{constructor(){super(...arguments),this.$$PROVIDER_TYPE="DASH",this.rc=null,this.e=new b(this.video,this.b),this.oa="https://cdn.jsdelivr.net/npm/dashjs@4.7.4/dist/dash.all.min.js"}get ctor(){return this.rc}get instance(){return this.e.instance}static{this.supported=(0,a.v)()}get type(){return"dash"}get canLiveSync(){return!0}get config(){return this.e.rb}set config(t){this.e.rb=t}get library(){return this.oa}set library(t){this.oa=t}preconnect(){(0,h.i)(this.oa)&&(0,s.p)(this.oa)}setup(){super.setup(),new p(this.oa,this.b,(t=>{this.rc=t,this.e.setup(t),this.b.delegate.c("provider-setup",this);const i=(0,h.p)(this.b.$state.source);i&&this.loadSource(i)}))}async loadSource(t,i){(0,h.i)(t.src)?(this.a.preload=i||"",this.ge(t,"application/x-mpegurl"),this.e.loadSource(t),this.K=t):this.oc()}onInstance(t){const i=this.e.instance;return i&&t(i),this.e.sb.add(t),()=>this.e.sb.delete(t)}destroy(){this.e.destroy()}}}}]);