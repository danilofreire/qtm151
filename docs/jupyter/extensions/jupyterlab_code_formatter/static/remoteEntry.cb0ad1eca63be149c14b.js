var _JUPYTERLAB;(()=>{"use strict";var e,r,t,o,n,a,i,u,l,f,d,s,p,c,h,v,b,m,y,g={430:(e,r,t)=>{var o={"./index":()=>t.e(98).then((()=>()=>t(98))),"./extension":()=>t.e(98).then((()=>()=>t(98))),"./style":()=>t.e(728).then((()=>()=>t(728)))},n=(e,r)=>(t.R=r,r=t.o(o,e)?o[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var o="default",n=t.S[o];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[o]=e,t.I(o,r)}};t.d(r,{get:()=>n,init:()=>a})}},j={};function w(e){var r=j[e];if(void 0!==r)return r.exports;var t=j[e]={id:e,exports:{}};return g[e](t,t.exports,w),t.exports}w.m=g,w.c=j,w.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return w.d(r,{a:r}),r},w.d=(e,r)=>{for(var t in r)w.o(r,t)&&!w.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},w.f={},w.e=e=>Promise.all(Object.keys(w.f).reduce(((r,t)=>(w.f[t](e,r),r)),[])),w.u=e=>e+"."+{98:"b4d9a08e3fbed2dba126",728:"db7f0f2fef10b09079c3"}[e]+".js?v="+{98:"b4d9a08e3fbed2dba126",728:"db7f0f2fef10b09079c3"}[e],w.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),w.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="jupyterlab_code_formatter:",w.l=(t,o,n,a)=>{if(e[t])e[t].push(o);else{var i,u;if(void 0!==n)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var d=l[f];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+n){i=d;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,w.nc&&i.setAttribute("nonce",w.nc),i.setAttribute("data-webpack",r+n),i.src=t),e[t]=[o];var s=(r,o)=>{i.onerror=i.onload=null,clearTimeout(p);var n=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(o))),r)return r(o)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),u&&document.head.appendChild(i)}},w.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{w.S={};var e={},r={};w.I=(t,o)=>{o||(o=[]);var n=r[t];if(n||(n=r[t]={}),!(o.indexOf(n)>=0)){if(o.push(n),e[t])return e[t];w.o(w.S,t)||(w.S[t]={});var a=w.S[t],i="jupyterlab_code_formatter",u=[];return"default"===t&&((e,r,t,o)=>{var n=a[e]=a[e]||{},u=n[r];(!u||!u.loaded&&(1!=!u.eager?o:i>u.from))&&(n[r]={get:()=>w.e(98).then((()=>()=>w(98))),from:i,eager:!1})})("jupyterlab_code_formatter","3.0.2"),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;w.g.importScripts&&(e=w.g.location+"");var r=w.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=t[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),w.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),o=t[1]?r(t[1]):[];return t[2]&&(o.length++,o.push.apply(o,r(t[2]))),t[3]&&(o.push([]),o.push.apply(o,r(t[3]))),o},o=(e,r)=>{e=t(e),r=t(r);for(var o=0;;){if(o>=e.length)return o<r.length&&"u"!=(typeof r[o])[0];var n=e[o],a=(typeof n)[0];if(o>=r.length)return"u"==a;var i=r[o],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&n!=i)return n<i;o++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,t+="u"==(typeof(u=e[a]))[0]?"-":(o>0?".":"")+(o=2,u);return t}var i=[];for(a=1;a<e.length;a++){var u=e[a];i.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?i.pop()+" "+i.pop():n(u))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var o=e[0],n=o<0;n&&(o=-o-1);for(var i=0,u=1,l=!0;;u++,i++){var f,d,s=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(d=(typeof(f=r[i]))[0]))return!l||("u"==s?u>o&&!n:""==s!=n);if("u"==d){if(!l||"u"!=s)return!1}else if(l)if(s==d)if(u<=o){if(f!=e[u])return!1}else{if(n?f>e[u]:f<e[u])return!1;f!=e[u]&&(l=!1)}else if("s"!=s&&"n"!=s){if(n||u<=o)return!1;l=!1,u--}else{if(u<=o||d<s!=n)return!1;l=!1}else"s"!=s&&"n"!=s&&(l=!1,u--)}}var p=[],c=p.pop.bind(p);for(i=1;i<e.length;i++){var h=e[i];p.push(1==h?c()|c():2==h?c()&c():h?a(h,r):!c())}return!!c()},i=(e,r)=>e&&w.o(e,r),u=e=>(e.loaded=1,e.get()),l=e=>Object.keys(e).reduce(((r,t)=>(e[t].eager&&(r[t]=e[t]),r)),{}),f=(e,r,t)=>{var n=t?l(e[r]):e[r];return Object.keys(n).reduce(((e,r)=>!e||!n[e].loaded&&o(e,r)?r:e),0)},d=(e,r,t,o)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+n(o)+")",s=e=>{throw new Error(e)},p=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},c=(e,r,t)=>t?t():((e,r)=>s("Shared module "+r+" doesn't exist in shared scope "+e))(e,r),h=(e=>function(r,t,o,n,a){var i=w.I(r);return i&&i.then&&!o?i.then(e.bind(e,r,w.S[r],t,!1,n,a)):e(r,w.S[r],t,o,n,a)})(((e,r,t,o,n,l)=>{if(!i(r,t))return c(e,t,l);var s=f(r,t,o);return a(n,s)||p(d(r,t,s,n)),u(r[t][s])})),v={},b={12:()=>h("default","@lumino/disposable",!1,[1,2,0,0]),31:()=>h("default","@jupyterlab/notebook",!1,[1,4,2,4]),74:()=>h("default","@jupyterlab/coreutils",!1,[1,6,2,4]),130:()=>h("default","@jupyterlab/mainmenu",!1,[1,4,2,4]),141:()=>h("default","@jupyterlab/fileeditor",!1,[1,4,2,4]),355:()=>h("default","@jupyterlab/ui-components",!1,[1,4,2,4]),465:()=>h("default","@jupyterlab/services",!1,[1,7,2,4]),607:()=>h("default","@jupyterlab/apputils",!1,[1,4,3,4]),765:()=>h("default","@jupyterlab/settingregistry",!1,[1,4,2,4])},m={98:[12,31,74,130,141,355,465,607,765]},y={},w.f.consumes=(e,r)=>{w.o(m,e)&&m[e].forEach((e=>{if(w.o(v,e))return r.push(v[e]);if(!y[e]){var t=r=>{v[e]=0,w.m[e]=t=>{delete w.c[e],t.exports=r()}};y[e]=!0;var o=r=>{delete v[e],w.m[e]=t=>{throw delete w.c[e],r}};try{var n=b[e]();n.then?r.push(v[e]=n.then(t).catch(o)):t(n)}catch(e){o(e)}}}))},(()=>{var e={166:0};w.f.j=(r,t)=>{var o=w.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var a=w.p+w.u(r),i=new Error;w.l(a,(t=>{if(w.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,n,[a,i,u]=t,l=0;if(a.some((r=>0!==e[r]))){for(o in i)w.o(i,o)&&(w.m[o]=i[o]);u&&u(w)}for(r&&r(t);l<a.length;l++)n=a[l],w.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkjupyterlab_code_formatter=self.webpackChunkjupyterlab_code_formatter||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),w.nc=void 0;var _=w(430);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB).jupyterlab_code_formatter=_})();