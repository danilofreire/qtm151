"use strict";(self.webpackChunk_lckr_jupyterlab_variableinspector=self.webpackChunk_lckr_jupyterlab_variableinspector||[]).push([[455],{455:(r,e,t)=>{function n(r){return"-"===r||"^"===r||"$"===r||"+"===r||"."===r||"("===r||")"===r||"|"===r||"["===r||"]"===r||"{"===r||"}"===r||"*"===r||"?"===r||"\\"===r?"\\"+r:r}function a(r,e){if(void 0===e&&(e=!0),Array.isArray(r))return"(?:"+r.map((function(r){return"^"+a(r,e)+"$"})).join("|")+")";var t="",o="",i=".";!0===e?(t="/",o="[/\\\\]",i="[^/\\\\]"):e&&(o=function(r){for(var e="",t=0;t<r.length;t++)e+=n(r[t]);return e}(t=e),i=o.length>1?"((?!"+(o="(?:"+o+")")+").)":"[^"+o+"]");for(var s=e?o+"+?":"",p=e?o+"*?":"",u=e?r.split(t):[r],f="",l=0;l<u.length;l++){var g=u[l],y=u[l+1],c="";if(g||!(l>0))if(e&&(c=l===u.length-1?p:"**"!==y?s:""),e&&"**"===g)c&&(f+=0===l?"":c,f+="(?:"+i+"*?"+c+")*?");else{for(var b=0;b<g.length;b++){var h=g[b];"\\"===h?b<g.length-1&&(f+=n(g[b+1]),b++):f+="?"===h?i:"*"===h?i+"*?":n(h)}f+=c}}return f}function o(r,e){if("string"!=typeof e)throw new TypeError("Sample must be a string, but "+typeof e+" given");return r.test(e)}t.r(e),t.d(e,{default:()=>i});const i=function(r,e){if("string"!=typeof r&&!Array.isArray(r))throw new TypeError("The first argument must be a single pattern string or an array of patterns, but "+typeof r+" given");if("string"!=typeof e&&"boolean"!=typeof e||(e={separator:e}),2===arguments.length&&void 0!==e&&("object"!=typeof e||null===e||Array.isArray(e)))throw new TypeError("The second argument must be an options object or a string/boolean separator, but "+typeof e+" given");if("\\"===(e=e||{}).separator)throw new Error("\\ is not a valid separator because it is used for escaping. Try setting the separator to `true` instead");var t=a(r,e.separator),n=new RegExp("^"+t+"$",e.flags),i=o.bind(null,n);return i.options=e,i.pattern=r,i.regexp=n,i}}}]);