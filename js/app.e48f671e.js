(function(e){function t(t){for(var r,o,l=t[0],s=t[1],c=t[2],u=0,d=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={2:0},i={2:0},a=[];function l(e){return s.p+"js/"+({}[e]||e)+"."+{1:"277606ba",3:"319267cd",4:"59fd2761",5:"fbead892",6:"a5583694",7:"5553b434",8:"40d9638f",9:"adbd0d20",10:"afe121f7"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={3:1,4:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{1:"31d6cfe0",3:"cf275404",4:"95922d93",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0"}[e]+".css",i=s.p+r,a=document.getElementsByTagName("link"),l=0;l<a.length;l++){var c=a[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===i))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){c=d[l],u=c.getAttribute("data-href");if(u===r||u===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],f.parentNode.removeChild(f),n(a)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=a);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=l(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}i[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=u;a.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},2219:function(e,t,n){"use strict";n.r(t),n.d(t,"getAll",(function(){return i}));var r=n("bc3a"),o=n.n(r);function i({state:e,commit:t}){if(e.all.length>0)return new Promise(((t,n)=>{t(e.all)}));if(void 0!==e.promise)return e.promise;let n=new Promise(((e,n)=>{o.a.get("//admin.stockifi.in/testimonials").then((n=>{let r=n.data;t("setAll",r),e(r)})).catch((e=>{n(e)})).then((()=>{t("setPromise",void 0)}))}));return t("setPromise",n),n}},"2a74":function(e,t,n){"use strict";n.r(t);var r=n("ded3"),o=n.n(r),i=(n("ddb0"),n("bba4")),a=n.n(i),l=n("8103"),s=n.n(l);const c={},u=n("c653");u.keys().forEach((e=>{if("./index.js"!==e){let t=e.split("/"),n=t[t.length-1],r=n.split(".")[0],i=t[t.length-2],l=a()(i);if(c[l]||(c[l]={namespaced:!0}),"state"===r){let t=u(e).default;c[l]["state"]=t;let n={};Object.keys(t).forEach((e=>{let t="set"+s()(e);n[t]=(t,n)=>{t[e]=n}})),c[l]["mutations"]?c[l]["mutations"]=o()(o()({},n),c[l]["mutations"]):c[l]["mutations"]=n}else c[l][r]=u(e)}})),t["default"]=c},"2f39":function(e,t,n){"use strict";n.r(t);n("ddb0"),n("5319"),n("573e"),n("7d6e"),n("e54f"),n("985d"),n("31cd");var r=n("2b0e"),o=n("1f91"),i=n("42d2"),a=n("b05d"),l=n("9c64"),s=n("2a19");r["a"].use(a["a"],{config:{},lang:o["a"],iconSet:i["a"],plugins:{Meta:l["a"],Notify:s["a"]}});var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},u=[],d={name:"App"},f=d,p=n("2877"),m=Object(p["a"])(f,c,u,!1,null,null,null),h=m.exports,b=n("2f62"),v=n("2a74");r["a"].use(b["a"]);const g=new b["a"].Store({modules:v["default"],strict:!1});var P=g,w=n("8c4f");const y=[{path:"/",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"8b24"))}]},{path:"/faq",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"f90e"))}]},{path:"/about",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"a1d1"))}]},{path:"/strategy",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"1128"))}]},{path:"/pricing",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"551a"))}]},{path:"/performance-report",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"2972"))}]},{path:"/p/:pageID",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"5919"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"ee5d"))}]}];var j=y;r["a"].use(w["a"]);var k=function(){const e=new w["a"]({scrollBehavior:()=>({x:0,y:0}),routes:j,mode:"hash",base:""});return e},O=async function(){const e="function"===typeof P?await P({Vue:r["a"]}):P,t="function"===typeof k?await k({Vue:r["a"],store:e}):k;e.$router=t;const n={router:t,store:e,render:e=>e(h),el:"#q-app"};return{app:n,store:e,router:t}},A=n("9483");Object(A["a"])("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}});var _=n("bc3a"),x=n.n(_);r["a"].prototype.$axios=x.a,/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&n.e(0).then(n.t.bind(null,"a0db",7));const E="";async function S(){const{app:e,store:t,router:n}=await O();let o=!1;const i=e=>{o=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},a=window.location.href.replace(window.location.origin,""),l=[void 0];for(let c=0;!1===o&&c<l.length;c++)if("function"===typeof l[c])try{await l[c]({app:e,router:n,store:t,Vue:r["a"],ssrContext:null,redirect:i,urlPath:a,publicPath:E})}catch(s){return s&&s.url?void(window.location.href=s.url):void console.error("[Quasar] boot error:",s)}!0!==o&&new r["a"](e)}S()},"31cd":function(e,t,n){},"31f3":function(e,t,n){"use strict";n.r(t),n.d(t,"getAll",(function(){return i}));var r=n("bc3a"),o=n.n(r);function i({state:e,commit:t}){if(e.all.length>0)return new Promise(((t,n)=>{t(e.all)}));if(void 0!==e.promise)return e.promise;let n=new Promise(((e,n)=>{o.a.get("//admin.stockifi.in/faqs").then((n=>{let r=n.data;t("setAll",r),e(r)})).catch((e=>{n(e)})).then((()=>{t("setPromise",void 0)}))}));return t("setPromise",n),n}},"454a":function(e,t,n){"use strict";n.r(t),t["default"]={promise:void 0,all:[]}},7041:function(e,t,n){"use strict";n.r(t),n.d(t,"getAll",(function(){return i}));var r=n("bc3a"),o=n.n(r);function i({state:e,commit:t}){if(e.all.length>0)return new Promise(((t,n)=>{t(e.all)}));if(void 0!==e.promise)return e.promise;let n=new Promise(((e,n)=>{o.a.get("//admin.stockifi.in/pricing-plans").then((n=>{let r=n.data;t("setAll",r),e(r)})).catch((e=>{n(e)})).then((()=>{t("setPromise",void 0)}))}));return t("setPromise",n),n}},"76fa":function(e,t,n){"use strict";n.r(t),n.d(t,"getAll",(function(){return i}));var r=n("bc3a"),o=n.n(r);function i({state:e,commit:t}){if(e.all.length>0)return new Promise(((t,n)=>{t(e.all)}));if(void 0!==e.promise)return e.promise;let n=new Promise(((e,n)=>{o.a.get("//admin.stockifi.in/track-records").then((n=>{let r=n.data;t("setAll",r),e(r)})).catch((e=>{n(e)})).then((()=>{t("setPromise",void 0)}))}));return t("setPromise",n),n}},af2c:function(e,t,n){"use strict";n.r(t),t["default"]={promise:void 0,all:[]}},bc09:function(e,t,n){"use strict";n.r(t),n.d(t,"getAll",(function(){return i}));var r=n("bc3a"),o=n.n(r);function i({state:e,commit:t}){if(e.all.length>0)return new Promise(((t,n)=>{t(e.all)}));if(void 0!==e.promise)return e.promise;let n=new Promise(((e,n)=>{o.a.get("//admin.stockifi.in/pages").then((n=>{let r=n.data;t("setAll",r),e(r)})).catch((e=>{n(e)})).then((()=>{t("setPromise",void 0)}))}));return t("setPromise",n),n}},c653:function(e,t,n){var r={"./faqs/actions.js":"31f3","./faqs/state.js":"e1df","./index.js":"2a74","./pages/actions.js":"bc09","./pages/state.js":"d447","./pricing_plans/actions.js":"7041","./pricing_plans/state.js":"eddf","./testimonials/actions.js":"2219","./testimonials/state.js":"454a","./track_records/actions.js":"76fa","./track_records/state.js":"af2c"};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id="c653"},d447:function(e,t,n){"use strict";n.r(t),t["default"]={promise:void 0,all:[]}},e1df:function(e,t,n){"use strict";n.r(t),t["default"]={promise:void 0,all:[]}},eddf:function(e,t,n){"use strict";n.r(t),t["default"]={promise:void 0,all:[]}}});