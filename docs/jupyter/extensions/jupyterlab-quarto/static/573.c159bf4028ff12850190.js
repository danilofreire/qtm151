/*! For license information please see 573.c159bf4028ff12850190.js.LICENSE.txt */
"use strict";(self.webpackChunkjupyterlab_quarto=self.webpackChunkjupyterlab_quarto||[]).push([[573],{3645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,r,o){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(i)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var s=0;s<t.length;s++){var u=[].concat(t[s]);i&&a[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},1667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},8081:t=>{t.exports=function(t){return t[1]}},7180:(t,e,n)=>{function i(t){return null==t}n.d(e,{bI:()=>Nt,zD:()=>Et});var r={isNothing:i,isObject:function(t){return"object"==typeof t&&null!==t},toArray:function(t){return Array.isArray(t)?t:i(t)?[]:[t]},repeat:function(t,e){var n,i="";for(n=0;n<e;n+=1)i+=t;return i},isNegativeZero:function(t){return 0===t&&Number.NEGATIVE_INFINITY===1/t},extend:function(t,e){var n,i,r,o;if(e)for(n=0,i=(o=Object.keys(e)).length;n<i;n+=1)t[r=o[n]]=e[r];return t}};function o(t,e){var n="",i=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(n+='in "'+t.mark.name+'" '),n+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!e&&t.mark.snippet&&(n+="\n\n"+t.mark.snippet),i+" "+n):i}function a(t,e){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=e,this.message=o(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}a.prototype=Object.create(Error.prototype),a.prototype.constructor=a,a.prototype.toString=function(t){return this.name+": "+o(this,t)};var c=a;function l(t,e,n,i,r){var o="",a="",c=Math.floor(r/2)-1;return i-e>c&&(e=i-c+(o=" ... ").length),n-i>c&&(n=i+c-(a=" ...").length),{str:o+t.slice(e,n).replace(/\t/g,"→")+a,pos:i-e+o.length}}function s(t,e){return r.repeat(" ",e-t.length)+t}var u=function(t,e){if(e=Object.create(e||null),!t.buffer)return null;e.maxLength||(e.maxLength=79),"number"!=typeof e.indent&&(e.indent=1),"number"!=typeof e.linesBefore&&(e.linesBefore=3),"number"!=typeof e.linesAfter&&(e.linesAfter=2);for(var n,i=/\r?\n|\r|\0/g,o=[0],a=[],c=-1;n=i.exec(t.buffer);)a.push(n.index),o.push(n.index+n[0].length),t.position<=n.index&&c<0&&(c=o.length-2);c<0&&(c=o.length-1);var u,p,f="",d=Math.min(t.line+e.linesAfter,a.length).toString().length,h=e.maxLength-(e.indent+d+3);for(u=1;u<=e.linesBefore&&!(c-u<0);u++)p=l(t.buffer,o[c-u],a[c-u],t.position-(o[c]-o[c-u]),h),f=r.repeat(" ",e.indent)+s((t.line-u+1).toString(),d)+" | "+p.str+"\n"+f;for(p=l(t.buffer,o[c],a[c],t.position,h),f+=r.repeat(" ",e.indent)+s((t.line+1).toString(),d)+" | "+p.str+"\n",f+=r.repeat("-",e.indent+d+3+p.pos)+"^\n",u=1;u<=e.linesAfter&&!(c+u>=a.length);u++)p=l(t.buffer,o[c+u],a[c+u],t.position-(o[c]-o[c+u]),h),f+=r.repeat(" ",e.indent)+s((t.line+u+1).toString(),d)+" | "+p.str+"\n";return f.replace(/\n$/,"")},p=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],f=["scalar","sequence","mapping"],d=function(t,e){if(e=e||{},Object.keys(e).forEach((function(e){if(-1===p.indexOf(e))throw new c('Unknown option "'+e+'" is met in definition of "'+t+'" YAML type.')})),this.options=e,this.tag=t,this.kind=e.kind||null,this.resolve=e.resolve||function(){return!0},this.construct=e.construct||function(t){return t},this.instanceOf=e.instanceOf||null,this.predicate=e.predicate||null,this.represent=e.represent||null,this.representName=e.representName||null,this.defaultStyle=e.defaultStyle||null,this.multi=e.multi||!1,this.styleAliases=function(t){var e={};return null!==t&&Object.keys(t).forEach((function(n){t[n].forEach((function(t){e[String(t)]=n}))})),e}(e.styleAliases||null),-1===f.indexOf(this.kind))throw new c('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')};function h(t,e){var n=[];return t[e].forEach((function(t){var e=n.length;n.forEach((function(n,i){n.tag===t.tag&&n.kind===t.kind&&n.multi===t.multi&&(e=i)})),n[e]=t})),n}function g(t){return this.extend(t)}g.prototype.extend=function(t){var e=[],n=[];if(t instanceof d)n.push(t);else if(Array.isArray(t))n=n.concat(t);else{if(!t||!Array.isArray(t.implicit)&&!Array.isArray(t.explicit))throw new c("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.implicit&&(e=e.concat(t.implicit)),t.explicit&&(n=n.concat(t.explicit))}e.forEach((function(t){if(!(t instanceof d))throw new c("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(t.loadKind&&"scalar"!==t.loadKind)throw new c("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(t.multi)throw new c("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")})),n.forEach((function(t){if(!(t instanceof d))throw new c("Specified list of YAML types (or a single Type object) contains a non-Type object.")}));var i=Object.create(g.prototype);return i.implicit=(this.implicit||[]).concat(e),i.explicit=(this.explicit||[]).concat(n),i.compiledImplicit=h(i,"implicit"),i.compiledExplicit=h(i,"explicit"),i.compiledTypeMap=function(){var t,e,n={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function i(t){t.multi?(n.multi[t.kind].push(t),n.multi.fallback.push(t)):n[t.kind][t.tag]=n.fallback[t.tag]=t}for(t=0,e=arguments.length;t<e;t+=1)arguments[t].forEach(i);return n}(i.compiledImplicit,i.compiledExplicit),i};var m=new g({explicit:[new d("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return null!==t?t:""}}),new d("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return null!==t?t:[]}}),new d("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return null!==t?t:{}}})]}),y=new d("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(t){if(null===t)return!0;var e=t.length;return 1===e&&"~"===t||4===e&&("null"===t||"Null"===t||"NULL"===t)},construct:function(){return null},predicate:function(t){return null===t},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),b=new d("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(t){if(null===t)return!1;var e=t.length;return 4===e&&("true"===t||"True"===t||"TRUE"===t)||5===e&&("false"===t||"False"===t||"FALSE"===t)},construct:function(t){return"true"===t||"True"===t||"TRUE"===t},predicate:function(t){return"[object Boolean]"===Object.prototype.toString.call(t)},represent:{lowercase:function(t){return t?"true":"false"},uppercase:function(t){return t?"TRUE":"FALSE"},camelcase:function(t){return t?"True":"False"}},defaultStyle:"lowercase"});function v(t){return 48<=t&&t<=55}function A(t){return 48<=t&&t<=57}var k=new d("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(t){if(null===t)return!1;var e,n,i=t.length,r=0,o=!1;if(!i)return!1;if("-"!==(e=t[r])&&"+"!==e||(e=t[++r]),"0"===e){if(r+1===i)return!0;if("b"===(e=t[++r])){for(r++;r<i;r++)if("_"!==(e=t[r])){if("0"!==e&&"1"!==e)return!1;o=!0}return o&&"_"!==e}if("x"===e){for(r++;r<i;r++)if("_"!==(e=t[r])){if(!(48<=(n=t.charCodeAt(r))&&n<=57||65<=n&&n<=70||97<=n&&n<=102))return!1;o=!0}return o&&"_"!==e}if("o"===e){for(r++;r<i;r++)if("_"!==(e=t[r])){if(!v(t.charCodeAt(r)))return!1;o=!0}return o&&"_"!==e}}if("_"===e)return!1;for(;r<i;r++)if("_"!==(e=t[r])){if(!A(t.charCodeAt(r)))return!1;o=!0}return!(!o||"_"===e)},construct:function(t){var e,n=t,i=1;if(-1!==n.indexOf("_")&&(n=n.replace(/_/g,"")),"-"!==(e=n[0])&&"+"!==e||("-"===e&&(i=-1),e=(n=n.slice(1))[0]),"0"===n)return 0;if("0"===e){if("b"===n[1])return i*parseInt(n.slice(2),2);if("x"===n[1])return i*parseInt(n.slice(2),16);if("o"===n[1])return i*parseInt(n.slice(2),8)}return i*parseInt(n,10)},predicate:function(t){return"[object Number]"===Object.prototype.toString.call(t)&&t%1==0&&!r.isNegativeZero(t)},represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0o"+t.toString(8):"-0o"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),C=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),w=/^[-+]?[0-9]+e/,x=new d("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(t){return null!==t&&!(!C.test(t)||"_"===t[t.length-1])},construct:function(t){var e,n;return n="-"===(e=t.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(e[0])>=0&&(e=e.slice(1)),".inf"===e?1===n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===e?NaN:n*parseFloat(e,10)},predicate:function(t){return"[object Number]"===Object.prototype.toString.call(t)&&(t%1!=0||r.isNegativeZero(t))},represent:function(t,e){var n;if(isNaN(t))switch(e){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(e){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(e){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(r.isNegativeZero(t))return"-0.0";return n=t.toString(10),w.test(n)?n.replace("e",".e"):n},defaultStyle:"lowercase"}),I=m.extend({implicit:[y,b,k,x]}),S=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),j=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"),T=new d("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(t){return null!==t&&(null!==S.exec(t)||null!==j.exec(t))},construct:function(t){var e,n,i,r,o,a,c,l,s=0,u=null;if(null===(e=S.exec(t))&&(e=j.exec(t)),null===e)throw new Error("Date resolve error");if(n=+e[1],i=+e[2]-1,r=+e[3],!e[4])return new Date(Date.UTC(n,i,r));if(o=+e[4],a=+e[5],c=+e[6],e[7]){for(s=e[7].slice(0,3);s.length<3;)s+="0";s=+s}return e[9]&&(u=6e4*(60*+e[10]+ +(e[11]||0)),"-"===e[9]&&(u=-u)),l=new Date(Date.UTC(n,i,r,o,a,c,s)),u&&l.setTime(l.getTime()-u),l},instanceOf:Date,represent:function(t){return t.toISOString()}}),O=new d("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(t){return"<<"===t||null===t}}),N="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r",E=new d("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(t){if(null===t)return!1;var e,n,i=0,r=t.length,o=N;for(n=0;n<r;n++)if(!((e=o.indexOf(t.charAt(n)))>64)){if(e<0)return!1;i+=6}return i%8==0},construct:function(t){var e,n,i=t.replace(/[\r\n=]/g,""),r=i.length,o=N,a=0,c=[];for(e=0;e<r;e++)e%4==0&&e&&(c.push(a>>16&255),c.push(a>>8&255),c.push(255&a)),a=a<<6|o.indexOf(i.charAt(e));return 0==(n=r%4*6)?(c.push(a>>16&255),c.push(a>>8&255),c.push(255&a)):18===n?(c.push(a>>10&255),c.push(a>>2&255)):12===n&&c.push(a>>4&255),new Uint8Array(c)},predicate:function(t){return"[object Uint8Array]"===Object.prototype.toString.call(t)},represent:function(t){var e,n,i="",r=0,o=t.length,a=N;for(e=0;e<o;e++)e%3==0&&e&&(i+=a[r>>18&63],i+=a[r>>12&63],i+=a[r>>6&63],i+=a[63&r]),r=(r<<8)+t[e];return 0==(n=o%3)?(i+=a[r>>18&63],i+=a[r>>12&63],i+=a[r>>6&63],i+=a[63&r]):2===n?(i+=a[r>>10&63],i+=a[r>>4&63],i+=a[r<<2&63],i+=a[64]):1===n&&(i+=a[r>>2&63],i+=a[r<<4&63],i+=a[64],i+=a[64]),i}}),M=Object.prototype.hasOwnProperty,L=Object.prototype.toString,F=new d("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(t){if(null===t)return!0;var e,n,i,r,o,a=[],c=t;for(e=0,n=c.length;e<n;e+=1){if(i=c[e],o=!1,"[object Object]"!==L.call(i))return!1;for(r in i)if(M.call(i,r)){if(o)return!1;o=!0}if(!o)return!1;if(-1!==a.indexOf(r))return!1;a.push(r)}return!0},construct:function(t){return null!==t?t:[]}}),_=Object.prototype.toString,q=new d("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(t){if(null===t)return!0;var e,n,i,r,o,a=t;for(o=new Array(a.length),e=0,n=a.length;e<n;e+=1){if(i=a[e],"[object Object]"!==_.call(i))return!1;if(1!==(r=Object.keys(i)).length)return!1;o[e]=[r[0],i[r[0]]]}return!0},construct:function(t){if(null===t)return[];var e,n,i,r,o,a=t;for(o=new Array(a.length),e=0,n=a.length;e<n;e+=1)i=a[e],r=Object.keys(i),o[e]=[r[0],i[r[0]]];return o}}),U=Object.prototype.hasOwnProperty,D=new d("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(t){if(null===t)return!0;var e,n=t;for(e in n)if(U.call(n,e)&&null!==n[e])return!1;return!0},construct:function(t){return null!==t?t:{}}}),Y=I.extend({implicit:[T,O],explicit:[E,F,q,D]}),B=Object.prototype.hasOwnProperty,R=1,P=2,$=3,G=4,V=1,Z=2,W=3,z=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,H=/[\x85\u2028\u2029]/,J=/[,\[\]\{\}]/,K=/^(?:!|!!|![a-z\-]+!)$/i,Q=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function X(t){return Object.prototype.toString.call(t)}function tt(t){return 10===t||13===t}function et(t){return 9===t||32===t}function nt(t){return 9===t||32===t||10===t||13===t}function it(t){return 44===t||91===t||93===t||123===t||125===t}function rt(t){var e;return 48<=t&&t<=57?t-48:97<=(e=32|t)&&e<=102?e-97+10:-1}function ot(t){return 48===t?"\0":97===t?"":98===t?"\b":116===t||9===t?"\t":110===t?"\n":118===t?"\v":102===t?"\f":114===t?"\r":101===t?"":32===t?" ":34===t?'"':47===t?"/":92===t?"\\":78===t?"":95===t?" ":76===t?"\u2028":80===t?"\u2029":""}function at(t){return t<=65535?String.fromCharCode(t):String.fromCharCode(55296+(t-65536>>10),56320+(t-65536&1023))}for(var ct=new Array(256),lt=new Array(256),st=0;st<256;st++)ct[st]=ot(st)?1:0,lt[st]=ot(st);function ut(t,e){this.input=t,this.filename=e.filename||null,this.schema=e.schema||Y,this.onWarning=e.onWarning||null,this.legacy=e.legacy||!1,this.json=e.json||!1,this.listener=e.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=t.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function pt(t,e){var n={name:t.filename,buffer:t.input.slice(0,-1),position:t.position,line:t.line,column:t.position-t.lineStart};return n.snippet=u(n),new c(e,n)}function ft(t,e){throw pt(t,e)}function dt(t,e){t.onWarning&&t.onWarning.call(null,pt(t,e))}var ht={YAML:function(t,e,n){var i,r,o;null!==t.version&&ft(t,"duplication of %YAML directive"),1!==n.length&&ft(t,"YAML directive accepts exactly one argument"),null===(i=/^([0-9]+)\.([0-9]+)$/.exec(n[0]))&&ft(t,"ill-formed argument of the YAML directive"),r=parseInt(i[1],10),o=parseInt(i[2],10),1!==r&&ft(t,"unacceptable YAML version of the document"),t.version=n[0],t.checkLineBreaks=o<2,1!==o&&2!==o&&dt(t,"unsupported YAML version of the document")},TAG:function(t,e,n){var i,r;2!==n.length&&ft(t,"TAG directive accepts exactly two arguments"),i=n[0],r=n[1],K.test(i)||ft(t,"ill-formed tag handle (first argument) of the TAG directive"),B.call(t.tagMap,i)&&ft(t,'there is a previously declared suffix for "'+i+'" tag handle'),Q.test(r)||ft(t,"ill-formed tag prefix (second argument) of the TAG directive");try{r=decodeURIComponent(r)}catch(e){ft(t,"tag prefix is malformed: "+r)}t.tagMap[i]=r}};function gt(t,e,n,i){var r,o,a,c;if(e<n){if(c=t.input.slice(e,n),i)for(r=0,o=c.length;r<o;r+=1)9===(a=c.charCodeAt(r))||32<=a&&a<=1114111||ft(t,"expected valid JSON character");else z.test(c)&&ft(t,"the stream contains non-printable characters");t.result+=c}}function mt(t,e,n,i){var o,a,c,l;for(r.isObject(n)||ft(t,"cannot merge mappings; the provided source object is unacceptable"),c=0,l=(o=Object.keys(n)).length;c<l;c+=1)a=o[c],B.call(e,a)||(e[a]=n[a],i[a]=!0)}function yt(t,e,n,i,r,o,a,c,l){var s,u;if(Array.isArray(r))for(s=0,u=(r=Array.prototype.slice.call(r)).length;s<u;s+=1)Array.isArray(r[s])&&ft(t,"nested arrays are not supported inside keys"),"object"==typeof r&&"[object Object]"===X(r[s])&&(r[s]="[object Object]");if("object"==typeof r&&"[object Object]"===X(r)&&(r="[object Object]"),r=String(r),null===e&&(e={}),"tag:yaml.org,2002:merge"===i)if(Array.isArray(o))for(s=0,u=o.length;s<u;s+=1)mt(t,e,o[s],n);else mt(t,e,o,n);else t.json||B.call(n,r)||!B.call(e,r)||(t.line=a||t.line,t.lineStart=c||t.lineStart,t.position=l||t.position,ft(t,"duplicated mapping key")),"__proto__"===r?Object.defineProperty(e,r,{configurable:!0,enumerable:!0,writable:!0,value:o}):e[r]=o,delete n[r];return e}function bt(t){var e;10===(e=t.input.charCodeAt(t.position))?t.position++:13===e?(t.position++,10===t.input.charCodeAt(t.position)&&t.position++):ft(t,"a line break is expected"),t.line+=1,t.lineStart=t.position,t.firstTabInLine=-1}function vt(t,e,n){for(var i=0,r=t.input.charCodeAt(t.position);0!==r;){for(;et(r);)9===r&&-1===t.firstTabInLine&&(t.firstTabInLine=t.position),r=t.input.charCodeAt(++t.position);if(e&&35===r)do{r=t.input.charCodeAt(++t.position)}while(10!==r&&13!==r&&0!==r);if(!tt(r))break;for(bt(t),r=t.input.charCodeAt(t.position),i++,t.lineIndent=0;32===r;)t.lineIndent++,r=t.input.charCodeAt(++t.position)}return-1!==n&&0!==i&&t.lineIndent<n&&dt(t,"deficient indentation"),i}function At(t){var e,n=t.position;return!(45!==(e=t.input.charCodeAt(n))&&46!==e||e!==t.input.charCodeAt(n+1)||e!==t.input.charCodeAt(n+2)||(n+=3,0!==(e=t.input.charCodeAt(n))&&!nt(e)))}function kt(t,e){1===e?t.result+=" ":e>1&&(t.result+=r.repeat("\n",e-1))}function Ct(t,e){var n,i,r=t.tag,o=t.anchor,a=[],c=!1;if(-1!==t.firstTabInLine)return!1;for(null!==t.anchor&&(t.anchorMap[t.anchor]=a),i=t.input.charCodeAt(t.position);0!==i&&(-1!==t.firstTabInLine&&(t.position=t.firstTabInLine,ft(t,"tab characters must not be used in indentation")),45===i)&&nt(t.input.charCodeAt(t.position+1));)if(c=!0,t.position++,vt(t,!0,-1)&&t.lineIndent<=e)a.push(null),i=t.input.charCodeAt(t.position);else if(n=t.line,It(t,e,$,!1,!0),a.push(t.result),vt(t,!0,-1),i=t.input.charCodeAt(t.position),(t.line===n||t.lineIndent>e)&&0!==i)ft(t,"bad indentation of a sequence entry");else if(t.lineIndent<e)break;return!!c&&(t.tag=r,t.anchor=o,t.kind="sequence",t.result=a,!0)}function wt(t){var e,n,i,r,o=!1,a=!1;if(33!==(r=t.input.charCodeAt(t.position)))return!1;if(null!==t.tag&&ft(t,"duplication of a tag property"),60===(r=t.input.charCodeAt(++t.position))?(o=!0,r=t.input.charCodeAt(++t.position)):33===r?(a=!0,n="!!",r=t.input.charCodeAt(++t.position)):n="!",e=t.position,o){do{r=t.input.charCodeAt(++t.position)}while(0!==r&&62!==r);t.position<t.length?(i=t.input.slice(e,t.position),r=t.input.charCodeAt(++t.position)):ft(t,"unexpected end of the stream within a verbatim tag")}else{for(;0!==r&&!nt(r);)33===r&&(a?ft(t,"tag suffix cannot contain exclamation marks"):(n=t.input.slice(e-1,t.position+1),K.test(n)||ft(t,"named tag handle cannot contain such characters"),a=!0,e=t.position+1)),r=t.input.charCodeAt(++t.position);i=t.input.slice(e,t.position),J.test(i)&&ft(t,"tag suffix cannot contain flow indicator characters")}i&&!Q.test(i)&&ft(t,"tag name cannot contain such characters: "+i);try{i=decodeURIComponent(i)}catch(e){ft(t,"tag name is malformed: "+i)}return o?t.tag=i:B.call(t.tagMap,n)?t.tag=t.tagMap[n]+i:"!"===n?t.tag="!"+i:"!!"===n?t.tag="tag:yaml.org,2002:"+i:ft(t,'undeclared tag handle "'+n+'"'),!0}function xt(t){var e,n;if(38!==(n=t.input.charCodeAt(t.position)))return!1;for(null!==t.anchor&&ft(t,"duplication of an anchor property"),n=t.input.charCodeAt(++t.position),e=t.position;0!==n&&!nt(n)&&!it(n);)n=t.input.charCodeAt(++t.position);return t.position===e&&ft(t,"name of an anchor node must contain at least one character"),t.anchor=t.input.slice(e,t.position),!0}function It(t,e,n,i,o){var a,c,l,s,u,p,f,d,h,g=1,m=!1,y=!1;if(null!==t.listener&&t.listener("open",t),t.tag=null,t.anchor=null,t.kind=null,t.result=null,a=c=l=G===n||$===n,i&&vt(t,!0,-1)&&(m=!0,t.lineIndent>e?g=1:t.lineIndent===e?g=0:t.lineIndent<e&&(g=-1)),1===g)for(;wt(t)||xt(t);)vt(t,!0,-1)?(m=!0,l=a,t.lineIndent>e?g=1:t.lineIndent===e?g=0:t.lineIndent<e&&(g=-1)):l=!1;if(l&&(l=m||o),1!==g&&G!==n||(d=R===n||P===n?e:e+1,h=t.position-t.lineStart,1===g?l&&(Ct(t,h)||function(t,e,n){var i,r,o,a,c,l,s,u=t.tag,p=t.anchor,f={},d=Object.create(null),h=null,g=null,m=null,y=!1,b=!1;if(-1!==t.firstTabInLine)return!1;for(null!==t.anchor&&(t.anchorMap[t.anchor]=f),s=t.input.charCodeAt(t.position);0!==s;){if(y||-1===t.firstTabInLine||(t.position=t.firstTabInLine,ft(t,"tab characters must not be used in indentation")),i=t.input.charCodeAt(t.position+1),o=t.line,63!==s&&58!==s||!nt(i)){if(a=t.line,c=t.lineStart,l=t.position,!It(t,n,P,!1,!0))break;if(t.line===o){for(s=t.input.charCodeAt(t.position);et(s);)s=t.input.charCodeAt(++t.position);if(58===s)nt(s=t.input.charCodeAt(++t.position))||ft(t,"a whitespace character is expected after the key-value separator within a block mapping"),y&&(yt(t,f,d,h,g,null,a,c,l),h=g=m=null),b=!0,y=!1,r=!1,h=t.tag,g=t.result;else{if(!b)return t.tag=u,t.anchor=p,!0;ft(t,"can not read an implicit mapping pair; a colon is missed")}}else{if(!b)return t.tag=u,t.anchor=p,!0;ft(t,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===s?(y&&(yt(t,f,d,h,g,null,a,c,l),h=g=m=null),b=!0,y=!0,r=!0):y?(y=!1,r=!0):ft(t,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),t.position+=1,s=i;if((t.line===o||t.lineIndent>e)&&(y&&(a=t.line,c=t.lineStart,l=t.position),It(t,e,G,!0,r)&&(y?g=t.result:m=t.result),y||(yt(t,f,d,h,g,m,a,c,l),h=g=m=null),vt(t,!0,-1),s=t.input.charCodeAt(t.position)),(t.line===o||t.lineIndent>e)&&0!==s)ft(t,"bad indentation of a mapping entry");else if(t.lineIndent<e)break}return y&&yt(t,f,d,h,g,null,a,c,l),b&&(t.tag=u,t.anchor=p,t.kind="mapping",t.result=f),b}(t,h,d))||function(t,e){var n,i,r,o,a,c,l,s,u,p,f,d,h=!0,g=t.tag,m=t.anchor,y=Object.create(null);if(91===(d=t.input.charCodeAt(t.position)))a=93,s=!1,o=[];else{if(123!==d)return!1;a=125,s=!0,o={}}for(null!==t.anchor&&(t.anchorMap[t.anchor]=o),d=t.input.charCodeAt(++t.position);0!==d;){if(vt(t,!0,e),(d=t.input.charCodeAt(t.position))===a)return t.position++,t.tag=g,t.anchor=m,t.kind=s?"mapping":"sequence",t.result=o,!0;h?44===d&&ft(t,"expected the node content, but found ','"):ft(t,"missed comma between flow collection entries"),f=null,c=l=!1,63===d&&nt(t.input.charCodeAt(t.position+1))&&(c=l=!0,t.position++,vt(t,!0,e)),n=t.line,i=t.lineStart,r=t.position,It(t,e,R,!1,!0),p=t.tag,u=t.result,vt(t,!0,e),d=t.input.charCodeAt(t.position),!l&&t.line!==n||58!==d||(c=!0,d=t.input.charCodeAt(++t.position),vt(t,!0,e),It(t,e,R,!1,!0),f=t.result),s?yt(t,o,y,p,u,f,n,i,r):c?o.push(yt(t,null,y,p,u,f,n,i,r)):o.push(u),vt(t,!0,e),44===(d=t.input.charCodeAt(t.position))?(h=!0,d=t.input.charCodeAt(++t.position)):h=!1}ft(t,"unexpected end of the stream within a flow collection")}(t,d)?y=!0:(c&&function(t,e){var n,i,o,a,c,l=V,s=!1,u=!1,p=e,f=0,d=!1;if(124===(a=t.input.charCodeAt(t.position)))i=!1;else{if(62!==a)return!1;i=!0}for(t.kind="scalar",t.result="";0!==a;)if(43===(a=t.input.charCodeAt(++t.position))||45===a)V===l?l=43===a?W:Z:ft(t,"repeat of a chomping mode identifier");else{if(!((o=48<=(c=a)&&c<=57?c-48:-1)>=0))break;0===o?ft(t,"bad explicit indentation width of a block scalar; it cannot be less than one"):u?ft(t,"repeat of an indentation width identifier"):(p=e+o-1,u=!0)}if(et(a)){do{a=t.input.charCodeAt(++t.position)}while(et(a));if(35===a)do{a=t.input.charCodeAt(++t.position)}while(!tt(a)&&0!==a)}for(;0!==a;){for(bt(t),t.lineIndent=0,a=t.input.charCodeAt(t.position);(!u||t.lineIndent<p)&&32===a;)t.lineIndent++,a=t.input.charCodeAt(++t.position);if(!u&&t.lineIndent>p&&(p=t.lineIndent),tt(a))f++;else{if(t.lineIndent<p){l===W?t.result+=r.repeat("\n",s?1+f:f):l===V&&s&&(t.result+="\n");break}for(i?et(a)?(d=!0,t.result+=r.repeat("\n",s?1+f:f)):d?(d=!1,t.result+=r.repeat("\n",f+1)):0===f?s&&(t.result+=" "):t.result+=r.repeat("\n",f):t.result+=r.repeat("\n",s?1+f:f),s=!0,u=!0,f=0,n=t.position;!tt(a)&&0!==a;)a=t.input.charCodeAt(++t.position);gt(t,n,t.position,!1)}}return!0}(t,d)||function(t,e){var n,i,r;if(39!==(n=t.input.charCodeAt(t.position)))return!1;for(t.kind="scalar",t.result="",t.position++,i=r=t.position;0!==(n=t.input.charCodeAt(t.position));)if(39===n){if(gt(t,i,t.position,!0),39!==(n=t.input.charCodeAt(++t.position)))return!0;i=t.position,t.position++,r=t.position}else tt(n)?(gt(t,i,r,!0),kt(t,vt(t,!1,e)),i=r=t.position):t.position===t.lineStart&&At(t)?ft(t,"unexpected end of the document within a single quoted scalar"):(t.position++,r=t.position);ft(t,"unexpected end of the stream within a single quoted scalar")}(t,d)||function(t,e){var n,i,r,o,a,c,l;if(34!==(c=t.input.charCodeAt(t.position)))return!1;for(t.kind="scalar",t.result="",t.position++,n=i=t.position;0!==(c=t.input.charCodeAt(t.position));){if(34===c)return gt(t,n,t.position,!0),t.position++,!0;if(92===c){if(gt(t,n,t.position,!0),tt(c=t.input.charCodeAt(++t.position)))vt(t,!1,e);else if(c<256&&ct[c])t.result+=lt[c],t.position++;else if((a=120===(l=c)?2:117===l?4:85===l?8:0)>0){for(r=a,o=0;r>0;r--)(a=rt(c=t.input.charCodeAt(++t.position)))>=0?o=(o<<4)+a:ft(t,"expected hexadecimal character");t.result+=at(o),t.position++}else ft(t,"unknown escape sequence");n=i=t.position}else tt(c)?(gt(t,n,i,!0),kt(t,vt(t,!1,e)),n=i=t.position):t.position===t.lineStart&&At(t)?ft(t,"unexpected end of the document within a double quoted scalar"):(t.position++,i=t.position)}ft(t,"unexpected end of the stream within a double quoted scalar")}(t,d)?y=!0:function(t){var e,n,i;if(42!==(i=t.input.charCodeAt(t.position)))return!1;for(i=t.input.charCodeAt(++t.position),e=t.position;0!==i&&!nt(i)&&!it(i);)i=t.input.charCodeAt(++t.position);return t.position===e&&ft(t,"name of an alias node must contain at least one character"),n=t.input.slice(e,t.position),B.call(t.anchorMap,n)||ft(t,'unidentified alias "'+n+'"'),t.result=t.anchorMap[n],vt(t,!0,-1),!0}(t)?(y=!0,null===t.tag&&null===t.anchor||ft(t,"alias node should not have any properties")):function(t,e,n){var i,r,o,a,c,l,s,u,p=t.kind,f=t.result;if(nt(u=t.input.charCodeAt(t.position))||it(u)||35===u||38===u||42===u||33===u||124===u||62===u||39===u||34===u||37===u||64===u||96===u)return!1;if((63===u||45===u)&&(nt(i=t.input.charCodeAt(t.position+1))||n&&it(i)))return!1;for(t.kind="scalar",t.result="",r=o=t.position,a=!1;0!==u;){if(58===u){if(nt(i=t.input.charCodeAt(t.position+1))||n&&it(i))break}else if(35===u){if(nt(t.input.charCodeAt(t.position-1)))break}else{if(t.position===t.lineStart&&At(t)||n&&it(u))break;if(tt(u)){if(c=t.line,l=t.lineStart,s=t.lineIndent,vt(t,!1,-1),t.lineIndent>=e){a=!0,u=t.input.charCodeAt(t.position);continue}t.position=o,t.line=c,t.lineStart=l,t.lineIndent=s;break}}a&&(gt(t,r,o,!1),kt(t,t.line-c),r=o=t.position,a=!1),et(u)||(o=t.position+1),u=t.input.charCodeAt(++t.position)}return gt(t,r,o,!1),!!t.result||(t.kind=p,t.result=f,!1)}(t,d,R===n)&&(y=!0,null===t.tag&&(t.tag="?")),null!==t.anchor&&(t.anchorMap[t.anchor]=t.result)):0===g&&(y=l&&Ct(t,h))),null===t.tag)null!==t.anchor&&(t.anchorMap[t.anchor]=t.result);else if("?"===t.tag){for(null!==t.result&&"scalar"!==t.kind&&ft(t,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+t.kind+'"'),s=0,u=t.implicitTypes.length;s<u;s+=1)if((f=t.implicitTypes[s]).resolve(t.result)){t.result=f.construct(t.result),t.tag=f.tag,null!==t.anchor&&(t.anchorMap[t.anchor]=t.result);break}}else if("!"!==t.tag){if(B.call(t.typeMap[t.kind||"fallback"],t.tag))f=t.typeMap[t.kind||"fallback"][t.tag];else for(f=null,s=0,u=(p=t.typeMap.multi[t.kind||"fallback"]).length;s<u;s+=1)if(t.tag.slice(0,p[s].tag.length)===p[s].tag){f=p[s];break}f||ft(t,"unknown tag !<"+t.tag+">"),null!==t.result&&f.kind!==t.kind&&ft(t,"unacceptable node kind for !<"+t.tag+'> tag; it should be "'+f.kind+'", not "'+t.kind+'"'),f.resolve(t.result,t.tag)?(t.result=f.construct(t.result,t.tag),null!==t.anchor&&(t.anchorMap[t.anchor]=t.result)):ft(t,"cannot resolve a node with !<"+t.tag+"> explicit tag")}return null!==t.listener&&t.listener("close",t),null!==t.tag||null!==t.anchor||y}function St(t){var e,n,i,r,o=t.position,a=!1;for(t.version=null,t.checkLineBreaks=t.legacy,t.tagMap=Object.create(null),t.anchorMap=Object.create(null);0!==(r=t.input.charCodeAt(t.position))&&(vt(t,!0,-1),r=t.input.charCodeAt(t.position),!(t.lineIndent>0||37!==r));){for(a=!0,r=t.input.charCodeAt(++t.position),e=t.position;0!==r&&!nt(r);)r=t.input.charCodeAt(++t.position);for(i=[],(n=t.input.slice(e,t.position)).length<1&&ft(t,"directive name must not be less than one character in length");0!==r;){for(;et(r);)r=t.input.charCodeAt(++t.position);if(35===r){do{r=t.input.charCodeAt(++t.position)}while(0!==r&&!tt(r));break}if(tt(r))break;for(e=t.position;0!==r&&!nt(r);)r=t.input.charCodeAt(++t.position);i.push(t.input.slice(e,t.position))}0!==r&&bt(t),B.call(ht,n)?ht[n](t,n,i):dt(t,'unknown document directive "'+n+'"')}vt(t,!0,-1),0===t.lineIndent&&45===t.input.charCodeAt(t.position)&&45===t.input.charCodeAt(t.position+1)&&45===t.input.charCodeAt(t.position+2)?(t.position+=3,vt(t,!0,-1)):a&&ft(t,"directives end mark is expected"),It(t,t.lineIndent-1,G,!1,!0),vt(t,!0,-1),t.checkLineBreaks&&H.test(t.input.slice(o,t.position))&&dt(t,"non-ASCII line breaks are interpreted as content"),t.documents.push(t.result),t.position===t.lineStart&&At(t)?46===t.input.charCodeAt(t.position)&&(t.position+=3,vt(t,!0,-1)):t.position<t.length-1&&ft(t,"end of the stream or a document separator is expected")}function jt(t,e){e=e||{},0!==(t=String(t)).length&&(10!==t.charCodeAt(t.length-1)&&13!==t.charCodeAt(t.length-1)&&(t+="\n"),65279===t.charCodeAt(0)&&(t=t.slice(1)));var n=new ut(t,e),i=t.indexOf("\0");for(-1!==i&&(n.position=i,ft(n,"null byte is not allowed in input")),n.input+="\0";32===n.input.charCodeAt(n.position);)n.lineIndent+=1,n.position+=1;for(;n.position<n.length-1;)St(n);return n.documents}var Tt=function(t,e){var n=jt(t,e);if(0!==n.length){if(1===n.length)return n[0];throw new c("expected a single document in the stream, but found more")}};function Ot(t,e){return function(){throw new Error("Function yaml."+t+" is removed in js-yaml 4. Use yaml."+e+" instead, which is now safe by default.")}}Object.prototype.toString,Object.prototype.hasOwnProperty;var Nt=m,Et=Tt;Ot("safeLoad","load"),Ot("safeLoadAll","loadAll"),Ot("safeDump","dump")},3379:t=>{var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var o={},a=[],c=0;c<t.length;c++){var l=t[c],s=i.base?l[0]+i.base:l[0],u=o[s]||0,p="".concat(s," ").concat(u);o[s]=u+1;var f=n(p),d={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)e[f].references++,e[f].updater(d);else{var h=r(d,i);i.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var o=i(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<o.length;a++){var c=n(o[a]);e[c].references--}for(var l=i(t,r),s=0;s<o.length;s++){var u=n(o[s]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}o=l}}},569:t=>{var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},9216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},3565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},7795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},4589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}}]);