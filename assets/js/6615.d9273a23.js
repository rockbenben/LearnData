"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[6615],{6615:(e,l,t)=>{t.r(l),t.d(l,{default:()=>m});var s=t(3082),a=t(5878),r=t(7758),u=t(1484),i=t(5916),o=t(8873),n=t(8394),c=t(5072);const h=["/DailyRoutine.html","/Fitness.html","/","/blog.html","/intro.html","/posts/2024-03-01-blog_example.html","/posts/2024-03-02-blog_example2.html","/apps/Applist.html","/apps/Chrome.html","/apps/design.html","/apps/toolbox.html","/code/AutoHotkey.html","/code/Electron.html","/code/HTML.html","/code/Javascript.html","/code/Markdown.html","/code/Python.html","/code/","/code/Regex.html","/code/Vue.html","/deploy/CloudServices.html","/deploy/Cloudflare.html","/deploy/DNS.html","/deploy/GitHub.html","/deploy/MySQL.html","/deploy/Static.html","/deploy/VPS.html","/family/Coupon.html","/family/Diet.html","/family/Life.html","/web/Comments.html","/web/VuePress.html","/web/docsify.html","/apps/topic/","/apps/topic/topic01.html","/apps/topic/topic02anytitle.html","/404.html","/posts/","/apps/","/deploy/","/family/","/web/","/category/","/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","/category/%E5%B7%A5%E5%85%B7/","/tag/","/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/","/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","/article/","/star/","/timeline/"];t(8867);const p=(0,a.Mjh)("SEARCH_PRO_QUERY_HISTORY",[]),v=e=>h[e.id]+("anchor"in e?`#${e.anchor}`:""),{resultHistoryCount:d}=c.s,y=(0,a.Mjh)("SEARCH_PRO_RESULT_HISTORY",[]);var m=(0,i.pM)({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(e,{emit:l}){const t=(0,o.rd)(),h=(0,o.Zv)(),m=(0,s.s5)(c.a),{enabled:g,addQueryHistory:f,queryHistory:H,removeQueryHistory:E}=(()=>{const{queryHistoryCount:e}=c.s,l=e>0;return{enabled:l,queryHistory:p,addQueryHistory:t=>{l&&(p.value=Array.from(new Set([t,...p.value.slice(0,e-1)])))},removeQueryHistory:e=>{p.value=[...p.value.slice(0,e),...p.value.slice(e+1)]}}})(),{enabled:k,resultHistory:b,addResultHistory:w,removeResultHistory:C}=(()=>{const e=d>0;return{enabled:e,resultHistory:y,addResultHistory:l=>{if(e){const e={link:v(l),display:l.display};"header"in l&&(e.header=l.header),y.value=[e,...y.value.slice(0,d-1)]}},removeResultHistory:e=>{y.value=[...y.value.slice(0,e),...y.value.slice(e+1)]}}})(),Q=g||k,R=(0,u.lW)(e,"queries"),{results:x,isSearching:D}=(e=>{const l=(0,c.u)(),t=(0,o.Zv)(),s=(0,o.BV)(),a=(0,u.KR)(0),n=(0,i.EW)((()=>a.value>0)),h=(0,u.IJ)([]);return(0,i.sV)((()=>{const{search:u,terminate:o}=(0,c.c)(),n=(0,r.Q0)((e=>{const r=e.join(" "),{searchFilter:i=(e=>e),splitWord:o,suggestionsFilter:n,...c}=l.value;r?(a.value+=1,u(e.join(" "),t.value,c).then((e=>i(e,r,t.value,s.value))).then((e=>{a.value-=1,h.value=e})).catch((e=>{console.warn(e),a.value-=1,a.value||(h.value=[])}))):h.value=[]}),c.s.searchDelay-c.s.suggestDelay);(0,i.wB)([e,t],(([e])=>n(e)),{immediate:!0}),(0,i.hi)((()=>{o()}))})),{isSearching:n,results:h}})(R),A=(0,u.Kh)({isQuery:!0,index:0}),S=(0,u.KR)(0),q=(0,u.KR)(0),B=(0,i.EW)((()=>Q&&(H.value.length>0||b.value.length>0))),_=(0,i.EW)((()=>x.value.length>0)),M=(0,i.EW)((()=>x.value[S.value]||null)),F=e=>e.map((e=>(0,s.Kg)(e)?e:(0,i.h)(e[0],e[1]))),T=e=>{if("customField"===e.type){const l=c.b[e.index]||"$content",[t,a=""]=(0,s.Qd)(l)?l[h.value].split("$content"):l.split("$content");return e.display.map((e=>(0,i.h)("div",F([t,...e,a]))))}return e.display.map((e=>(0,i.h)("div",F(e))))},W=()=>{S.value=0,q.value=0,l("updateQuery",""),l("close")};return(0,a.MLh)("keydown",(s=>{if(e.isFocusing)if(_.value){if("ArrowUp"===s.key)q.value>0?q.value-=1:(S.value=S.value>0?S.value-1:x.value.length-1,q.value=M.value.contents.length-1);else if("ArrowDown"===s.key)q.value<M.value.contents.length-1?q.value+=1:(S.value=S.value<x.value.length-1?S.value+1:0,q.value=0);else if("Enter"===s.key){const l=M.value.contents[q.value];f(e.queries.join(" ")),w(l),t.push(v(l)),W()}}else if(k)if("ArrowUp"===s.key)(()=>{const{isQuery:e,index:l}=A;0===l?(A.isQuery=!e,A.index=e?b.value.length-1:H.value.length-1):A.index=l-1})();else if("ArrowDown"===s.key)(()=>{const{isQuery:e,index:l}=A;l===(e?H.value.length-1:b.value.length-1)?(A.isQuery=!e,A.index=0):A.index=l+1})();else if("Enter"===s.key){const{index:e}=A;A.isQuery?(l("updateQuery",H.value[e]),s.preventDefault()):(t.push(b.value[e].link),W())}})),(0,i.wB)([S,q],(()=>{document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active")?.scrollIntoView(!1)}),{flush:"post"}),()=>(0,i.h)("div",{class:["search-pro-result-wrapper",{empty:e.queries.length?!_.value:!B.value}],id:"search-pro-results"},e.queries.length?D.value?(0,i.h)(n.S,{hint:m.value.searching}):_.value?(0,i.h)("ul",{class:"search-pro-result-list"},x.value.map((({title:l,contents:t},s)=>{const a=S.value===s;return(0,i.h)("li",{class:["search-pro-result-list-item",{active:a}]},[(0,i.h)("div",{class:"search-pro-result-title"},l||m.value.defaultTitle),t.map(((l,t)=>{const s=a&&q.value===t;return(0,i.h)(o.Wt,{to:v(l),class:["search-pro-result-item",{active:s,"aria-selected":s}],onClick:()=>{f(e.queries.join(" ")),w(l),W()}},(()=>["text"===l.type?null:(0,i.h)("title"===l.type?n.T:"heading"===l.type?n.H:n.a,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},["text"===l.type&&l.header?(0,i.h)("div",{class:"content-header"},l.header):null,(0,i.h)("div",T(l))])]))}))])}))):m.value.emptyResult:Q?B.value?[g?(0,i.h)("ul",{class:"search-pro-result-list"},(0,i.h)("li",{class:"search-pro-result-list-item"},[(0,i.h)("div",{class:"search-pro-result-title"},m.value.queryHistory),H.value.map(((e,t)=>(0,i.h)("div",{class:["search-pro-result-item",{active:A.isQuery&&A.index===t}],onClick:()=>{l("updateQuery",e)}},[(0,i.h)(n.b,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},e),(0,i.h)("button",{class:"search-pro-remove-icon",innerHTML:n.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),E(t)}})])))])):null,k?(0,i.h)("ul",{class:"search-pro-result-list"},(0,i.h)("li",{class:"search-pro-result-list-item"},[(0,i.h)("div",{class:"search-pro-result-title"},m.value.resultHistory),b.value.map(((e,l)=>(0,i.h)(o.Wt,{to:e.link,class:["search-pro-result-item",{active:!A.isQuery&&A.index===l}],onClick:()=>{W()}},(()=>[(0,i.h)(n.b,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},[e.header?(0,i.h)("div",{class:"content-header"},e.header):null,(0,i.h)("div",e.display.map((e=>F(e))).flat())]),(0,i.h)("button",{class:"search-pro-remove-icon",innerHTML:n.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),C(l)}})]))))])):null]:m.value.emptyHistory:m.value.emptyResult)}})}}]);