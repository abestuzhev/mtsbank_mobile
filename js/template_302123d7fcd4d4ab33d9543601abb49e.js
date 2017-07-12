
; /* Start:"a:4:{s:4:"full";s:27:"/js/checkjs.js?137066060535";s:6:"source";s:14:"/js/checkjs.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
document.documentElement.id = "js";
/* End */
;
; /* Start:"a:4:{s:4:"full";s:39:"/js/jquery-1.7.1.min.js?135477842893637";s:6:"source";s:23:"/js/jquery-1.7.1.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:32:"/js/cufon-yui.js?134425080018258";s:6:"source";s:16:"/js/cufon-yui.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * Copyright (c) 2009 Simo Kinnunen.
 * Licensed under the MIT license.
 *
 * @version 1.09i
 */
var Cufon=(function(){var m=function(){return m.replace.apply(null,arguments)};var x=m.DOM={ready:(function(){var C=false,E={loaded:1,complete:1};var B=[],D=function(){if(C){return}C=true;for(var F;F=B.shift();F()){}};if(document.addEventListener){document.addEventListener("DOMContentLoaded",D,false);window.addEventListener("pageshow",D,false)}if(!window.opera&&document.readyState){(function(){E[document.readyState]?D():setTimeout(arguments.callee,10)})()}if(document.readyState&&document.createStyleSheet){(function(){try{document.body.doScroll("left");D()}catch(F){setTimeout(arguments.callee,1)}})()}q(window,"load",D);return function(F){if(!arguments.length){D()}else{C?F():B.push(F)}}})(),root:function(){return document.documentElement||document.body}};var n=m.CSS={Size:function(C,B){this.value=parseFloat(C);this.unit=String(C).match(/[a-z%]*$/)[0]||"px";this.convert=function(D){return D/B*this.value};this.convertFrom=function(D){return D/this.value*B};this.toString=function(){return this.value+this.unit}},addClass:function(C,B){var D=C.className;C.className=D+(D&&" ")+B;return C},color:j(function(C){var B={};B.color=C.replace(/^rgba\((.*?),\s*([\d.]+)\)/,function(E,D,F){B.opacity=parseFloat(F);return"rgb("+D+")"});return B}),fontStretch:j(function(B){if(typeof B=="number"){return B}if(/%$/.test(B)){return parseFloat(B)/100}return{"ultra-condensed":0.5,"extra-condensed":0.625,condensed:0.75,"semi-condensed":0.875,"semi-expanded":1.125,expanded:1.25,"extra-expanded":1.5,"ultra-expanded":2}[B]||1}),getStyle:function(C){var B=document.defaultView;if(B&&B.getComputedStyle){return new a(B.getComputedStyle(C,null))}if(C.currentStyle){return new a(C.currentStyle)}return new a(C.style)},gradient:j(function(F){var G={id:F,type:F.match(/^-([a-z]+)-gradient\(/)[1],stops:[]},C=F.substr(F.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig);for(var E=0,B=C.length,D;E<B;++E){D=C[E].split("=",2).reverse();G.stops.push([D[1]||E/(B-1),D[0]])}return G}),quotedList:j(function(E){var D=[],C=/\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g,B;while(B=C.exec(E)){D.push(B[3]||B[1])}return D}),recognizesMedia:j(function(G){var E=document.createElement("style"),D,C,B;E.type="text/css";E.media=G;try{E.appendChild(document.createTextNode("/**/"))}catch(F){}C=g("head")[0];C.insertBefore(E,C.firstChild);D=(E.sheet||E.styleSheet);B=D&&!D.disabled;C.removeChild(E);return B}),removeClass:function(D,C){var B=RegExp("(?:^|\\s+)"+C+"(?=\\s|$)","g");D.className=D.className.replace(B,"");return D},supports:function(D,C){var B=document.createElement("span").style;if(B[D]===undefined){return false}B[D]=C;return B[D]===C},textAlign:function(E,D,B,C){if(D.get("textAlign")=="right"){if(B>0){E=" "+E}}else{if(B<C-1){E+=" "}}return E},textShadow:j(function(F){if(F=="none"){return null}var E=[],G={},B,C=0;var D=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;while(B=D.exec(F)){if(B[0]==","){E.push(G);G={};C=0}else{if(B[1]){G.color=B[1]}else{G[["offX","offY","blur"][C++]]=B[2]}}}E.push(G);return E}),textTransform:(function(){var B={uppercase:function(C){return C.toUpperCase()},lowercase:function(C){return C.toLowerCase()},capitalize:function(C){return C.replace(/\b./g,function(D){return D.toUpperCase()})}};return function(E,D){var C=B[D.get("textTransform")];return C?C(E):E}})(),whiteSpace:(function(){var D={inline:1,"inline-block":1,"run-in":1};var C=/^\s+/,B=/\s+$/;return function(H,F,G,E){if(E){if(E.nodeName.toLowerCase()=="br"){H=H.replace(C,"")}}if(D[F.get("display")]){return H}if(!G.previousSibling){H=H.replace(C,"")}if(!G.nextSibling){H=H.replace(B,"")}return H}})()};n.ready=(function(){var B=!n.recognizesMedia("all"),E=false;var D=[],H=function(){B=true;for(var K;K=D.shift();K()){}};var I=g("link"),J=g("style");function C(K){return K.disabled||G(K.sheet,K.media||"screen")}function G(M,P){if(!n.recognizesMedia(P||"all")){return true}if(!M||M.disabled){return false}try{var Q=M.cssRules,O;if(Q){search:for(var L=0,K=Q.length;O=Q[L],L<K;++L){switch(O.type){case 2:break;case 3:if(!G(O.styleSheet,O.media.mediaText)){return false}break;default:break search}}}}catch(N){}return true}function F(){if(document.createStyleSheet){return true}var L,K;for(K=0;L=I[K];++K){if(L.rel.toLowerCase()=="stylesheet"&&!C(L)){return false}}for(K=0;L=J[K];++K){if(!C(L)){return false}}return true}x.ready(function(){if(!E){E=n.getStyle(document.body).isUsable()}if(B||(E&&F())){H()}else{setTimeout(arguments.callee,10)}});return function(K){if(B){K()}else{D.push(K)}}})();function s(D){var C=this.face=D.face,B={"\u0020":1,"\u00a0":1,"\u3000":1};this.glyphs=D.glyphs;this.w=D.w;this.baseSize=parseInt(C["units-per-em"],10);this.family=C["font-family"].toLowerCase();this.weight=C["font-weight"];this.style=C["font-style"]||"normal";this.viewBox=(function(){var F=C.bbox.split(/\s+/);var E={minX:parseInt(F[0],10),minY:parseInt(F[1],10),maxX:parseInt(F[2],10),maxY:parseInt(F[3],10)};E.width=E.maxX-E.minX;E.height=E.maxY-E.minY;E.toString=function(){return[this.minX,this.minY,this.width,this.height].join(" ")};return E})();this.ascent=-parseInt(C.ascent,10);this.descent=-parseInt(C.descent,10);this.height=-this.ascent+this.descent;this.spacing=function(L,N,E){var O=this.glyphs,M,K,G,P=[],F=0,J=-1,I=-1,H;while(H=L[++J]){M=O[H]||this.missingGlyph;if(!M){continue}if(K){F-=G=K[H]||0;P[I]-=G}F+=P[++I]=~~(M.w||this.w)+N+(B[H]?E:0);K=M.k}P.total=F;return P}}function f(){var C={},B={oblique:"italic",italic:"oblique"};this.add=function(D){(C[D.style]||(C[D.style]={}))[D.weight]=D};this.get=function(H,I){var G=C[H]||C[B[H]]||C.normal||C.italic||C.oblique;if(!G){return null}I={normal:400,bold:700}[I]||parseInt(I,10);if(G[I]){return G[I]}var E={1:1,99:0}[I%100],K=[],F,D;if(E===undefined){E=I>400}if(I==500){I=400}for(var J in G){if(!k(G,J)){continue}J=parseInt(J,10);if(!F||J<F){F=J}if(!D||J>D){D=J}K.push(J)}if(I<F){I=F}if(I>D){I=D}K.sort(function(M,L){return(E?(M>=I&&L>=I)?M<L:M>L:(M<=I&&L<=I)?M>L:M<L)?-1:1});return G[K[0]]}}function r(){function D(F,G){if(F.contains){return F.contains(G)}return F.compareDocumentPosition(G)&16}function B(G){var F=G.relatedTarget;if(!F||D(this,F)){return}C(this,G.type=="mouseover")}function E(F){C(this,F.type=="mouseenter")}function C(F,G){setTimeout(function(){var H=d.get(F).options;m.replace(F,G?h(H,H.hover):H,true)},10)}this.attach=function(F){if(F.onmouseenter===undefined){q(F,"mouseover",B);q(F,"mouseout",B)}else{q(F,"mouseenter",E);q(F,"mouseleave",E)}}}function u(){var C=[],D={};function B(H){var E=[],G;for(var F=0;G=H[F];++F){E[F]=C[D[G]]}return E}this.add=function(F,E){D[F]=C.push(E)-1};this.repeat=function(){var E=arguments.length?B(arguments):C,F;for(var G=0;F=E[G++];){m.replace(F[0],F[1],true)}}}function A(){var D={},B=0;function C(E){return E.cufid||(E.cufid=++B)}this.get=function(E){var F=C(E);return D[F]||(D[F]={})}}function a(B){var D={},C={};this.extend=function(E){for(var F in E){if(k(E,F)){D[F]=E[F]}}return this};this.get=function(E){return D[E]!=undefined?D[E]:B[E]};this.getSize=function(F,E){return C[F]||(C[F]=new n.Size(this.get(F),E))};this.isUsable=function(){return !!B}}function q(C,B,D){if(C.addEventListener){C.addEventListener(B,D,false)}else{if(C.attachEvent){C.attachEvent("on"+B,function(){return D.call(C,window.event)})}}}function v(C,B){var D=d.get(C);if(D.options){return C}if(B.hover&&B.hoverables[C.nodeName.toLowerCase()]){b.attach(C)}D.options=B;return C}function j(B){var C={};return function(D){if(!k(C,D)){C[D]=B.apply(null,arguments)}return C[D]}}function c(F,E){var B=n.quotedList(E.get("fontFamily").toLowerCase()),D;for(var C=0;D=B[C];++C){if(i[D]){return i[D].get(E.get("fontStyle"),E.get("fontWeight"))}}return null}function g(B){return document.getElementsByTagName(B)}function k(C,B){return C.hasOwnProperty(B)}function h(){var C={},B,F;for(var E=0,D=arguments.length;B=arguments[E],E<D;++E){for(F in B){if(k(B,F)){C[F]=B[F]}}}return C}function o(E,M,C,N,F,D){var K=document.createDocumentFragment(),H;if(M===""){return K}var L=N.separate;var I=M.split(p[L]),B=(L=="words");if(B&&t){if(/^\s/.test(M)){I.unshift("")}if(/\s$/.test(M)){I.push("")}}for(var J=0,G=I.length;J<G;++J){H=z[N.engine](E,B?n.textAlign(I[J],C,J,G):I[J],C,N,F,D,J<G-1);if(H){K.appendChild(H)}}return K}function l(D,M){var C=D.nodeName.toLowerCase();if(M.ignore[C]){return}var E=!M.textless[C];var B=n.getStyle(v(D,M)).extend(M);var F=c(D,B),G,K,I,H,L,J;if(!F){return}for(G=D.firstChild;G;G=I){K=G.nodeType;I=G.nextSibling;if(E&&K==3){if(H){H.appendData(G.data);D.removeChild(G)}else{H=G}if(I){continue}}if(H){D.replaceChild(o(F,n.whiteSpace(H.data,B,H,J),B,M,G,D),H);H=null}if(K==1){if(G.firstChild){if(G.nodeName.toLowerCase()=="cufon"){z[M.engine](F,null,B,M,G,D)}else{arguments.callee(G,M)}}J=G}}}var t=" ".split(/\s+/).length==0;var d=new A();var b=new r();var y=new u();var e=false;var z={},i={},w={autoDetect:false,engine:null,forceHitArea:false,hover:false,hoverables:{a:true},ignore:{applet:1,canvas:1,col:1,colgroup:1,head:1,iframe:1,map:1,optgroup:1,option:1,script:1,select:1,style:1,textarea:1,title:1,pre:1},printable:true,selector:(window.Sizzle||(window.jQuery&&function(B){return jQuery(B)})||(window.dojo&&dojo.query)||(window.Ext&&Ext.query)||(window.YAHOO&&YAHOO.util&&YAHOO.util.Selector&&YAHOO.util.Selector.query)||(window.$$&&function(B){return $$(B)})||(window.$&&function(B){return $(B)})||(document.querySelectorAll&&function(B){return document.querySelectorAll(B)})||g),separate:"words",textless:{dl:1,html:1,ol:1,table:1,tbody:1,thead:1,tfoot:1,tr:1,ul:1},textShadow:"none"};var p={words:/\s/.test("\u00a0")?/[^\S\u00a0]+/:/\s+/,characters:"",none:/^/};m.now=function(){x.ready();return m};m.refresh=function(){y.repeat.apply(y,arguments);return m};m.registerEngine=function(C,B){if(!B){return m}z[C]=B;return m.set("engine",C)};m.registerFont=function(D){if(!D){return m}var B=new s(D),C=B.family;if(!i[C]){i[C]=new f()}i[C].add(B);return m.set("fontFamily",'"'+C+'"')};m.replace=function(D,C,B){C=h(w,C);if(!C.engine){return m}if(!e){n.addClass(x.root(),"cufon-active cufon-loading");n.ready(function(){n.addClass(n.removeClass(x.root(),"cufon-loading"),"cufon-ready")});e=true}if(C.hover){C.forceHitArea=true}if(C.autoDetect){delete C.fontFamily}if(typeof C.textShadow=="string"){C.textShadow=n.textShadow(C.textShadow)}if(typeof C.color=="string"&&/^-/.test(C.color)){C.textGradient=n.gradient(C.color)}else{delete C.textGradient}if(!B){y.add(D,arguments)}if(D.nodeType||typeof D=="string"){D=[D]}n.ready(function(){for(var F=0,E=D.length;F<E;++F){var G=D[F];if(typeof G=="string"){m.replace(C.selector(G),C,true)}else{l(G,C)}}});return m};m.set=function(B,C){w[B]=C;return m};return m})();Cufon.registerEngine("vml",(function(){var e=document.namespaces;if(!e){return}e.add("cvml","urn:schemas-microsoft-com:vml");e=null;var b=document.createElement("cvml:shape");b.style.behavior="url(#default#VML)";if(!b.coordsize){return}b=null;var h=(document.documentMode||0)<8;document.write(('<style type="text/css">cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:'+(h?"middle":"text-bottom")+";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}</style>").replace(/;/g,"!important;"));function c(i,j){return a(i,/(?:em|ex|%)$|^[a-z-]+$/i.test(j)?"1em":j)}function a(l,m){if(m==="0"){return 0}if(/px$/i.test(m)){return parseFloat(m)}var k=l.style.left,j=l.runtimeStyle.left;l.runtimeStyle.left=l.currentStyle.left;l.style.left=m.replace("%","em");var i=l.style.pixelLeft;l.style.left=k;l.runtimeStyle.left=j;return i}function f(l,k,j,n){var i="computed"+n,m=k[i];if(isNaN(m)){m=k.get(n);k[i]=m=(m=="normal")?0:~~j.convertFrom(a(l,m))}return m}var g={};function d(p){var q=p.id;if(!g[q]){var n=p.stops,o=document.createElement("cvml:fill"),i=[];o.type="gradient";o.angle=180;o.focus="0";o.method="sigma";o.color=n[0][1];for(var m=1,l=n.length-1;m<l;++m){i.push(n[m][0]*100+"% "+n[m][1])}o.colors=i.join(",");o.color2=n[l][1];g[q]=o}return g[q]}return function(ac,G,Y,C,K,ad,W){var n=(G===null);if(n){G=K.alt}var I=ac.viewBox;var p=Y.computedFontSize||(Y.computedFontSize=new Cufon.CSS.Size(c(ad,Y.get("fontSize"))+"px",ac.baseSize));var y,q;if(n){y=K;q=K.firstChild}else{y=document.createElement("cufon");y.className="cufon cufon-vml";y.alt=G;q=document.createElement("cufoncanvas");y.appendChild(q);if(C.printable){var Z=document.createElement("cufontext");Z.appendChild(document.createTextNode(G));y.appendChild(Z)}if(!W){y.appendChild(document.createElement("cvml:shape"))}}var ai=y.style;var R=q.style;var l=p.convert(I.height),af=Math.ceil(l);var V=af/l;var P=V*Cufon.CSS.fontStretch(Y.get("fontStretch"));var U=I.minX,T=I.minY;R.height=af;R.top=Math.round(p.convert(T-ac.ascent));R.left=Math.round(p.convert(U));ai.height=p.convert(ac.height)+"px";var F=Y.get("color");var ag=Cufon.CSS.textTransform(G,Y).split("");var L=ac.spacing(ag,f(ad,Y,p,"letterSpacing"),f(ad,Y,p,"wordSpacing"));if(!L.length){return null}var k=L.total;var x=-U+k+(I.width-L[L.length-1]);var ah=p.convert(x*P),X=Math.round(ah);var O=x+","+I.height,m;var J="r"+O+"ns";var u=C.textGradient&&d(C.textGradient);var o=ac.glyphs,S=0;var H=C.textShadow;var ab=-1,aa=0,w;while(w=ag[++ab]){var D=o[ag[ab]]||ac.missingGlyph,v;if(!D){continue}if(n){v=q.childNodes[aa];while(v.firstChild){v.removeChild(v.firstChild)}}else{v=document.createElement("cvml:shape");q.appendChild(v)}v.stroked="f";v.coordsize=O;v.coordorigin=m=(U-S)+","+T;v.path=(D.d?"m"+D.d+"xe":"")+"m"+m+J;v.fillcolor=F;if(u){v.appendChild(u.cloneNode(false))}var ae=v.style;ae.width=X;ae.height=af;if(H){var s=H[0],r=H[1];var B=Cufon.CSS.color(s.color),z;var N=document.createElement("cvml:shadow");N.on="t";N.color=B.color;N.offset=s.offX+","+s.offY;if(r){z=Cufon.CSS.color(r.color);N.type="double";N.color2=z.color;N.offset2=r.offX+","+r.offY}N.opacity=B.opacity||(z&&z.opacity)||1;v.appendChild(N)}S+=L[aa++]}var M=v.nextSibling,t,A;if(C.forceHitArea){if(!M){M=document.createElement("cvml:rect");M.stroked="f";M.className="cufon-vml-cover";t=document.createElement("cvml:fill");t.opacity=0;M.appendChild(t);q.appendChild(M)}A=M.style;A.width=X;A.height=af}else{if(M){q.removeChild(M)}}ai.width=Math.max(Math.ceil(p.convert(k*P)),0);if(h){var Q=Y.computedYAdjust;if(Q===undefined){var E=Y.get("lineHeight");if(E=="normal"){E="1em"}else{if(!isNaN(E)){E+="em"}}Y.computedYAdjust=Q=0.5*(a(ad,E)-parseFloat(ai.height))}if(Q){ai.marginTop=Math.ceil(Q)+"px";ai.marginBottom=Q+"px"}}return y}})());Cufon.registerEngine("canvas",(function(){var b=document.createElement("canvas");if(!b||!b.getContext||!b.getContext.apply){return}b=null;var a=Cufon.CSS.supports("display","inline-block");var e=!a&&(document.compatMode=="BackCompat"||/frameset|transitional/i.test(document.doctype.publicId));var f=document.createElement("style");f.type="text/css";f.appendChild(document.createTextNode(("cufon{text-indent:0;}@media screen,projection{cufon{display:inline;display:inline-block;position:relative;vertical-align:middle;"+(e?"":"font-size:1px;line-height:1px;")+"}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden;text-indent:-10000in;}"+(a?"cufon canvas{position:relative;}":"cufon canvas{position:absolute;}")+"}@media print{cufon{padding:0;}cufon canvas{display:none;}}").replace(/;/g,"!important;")));document.getElementsByTagName("head")[0].appendChild(f);function d(p,h){var n=0,m=0;var g=[],o=/([mrvxe])([^a-z]*)/g,k;generate:for(var j=0;k=o.exec(p);++j){var l=k[2].split(",");switch(k[1]){case"v":g[j]={m:"bezierCurveTo",a:[n+~~l[0],m+~~l[1],n+~~l[2],m+~~l[3],n+=~~l[4],m+=~~l[5]]};break;case"r":g[j]={m:"lineTo",a:[n+=~~l[0],m+=~~l[1]]};break;case"m":g[j]={m:"moveTo",a:[n=~~l[0],m=~~l[1]]};break;case"x":g[j]={m:"closePath"};break;case"e":break generate}h[g[j].m].apply(h,g[j].a)}return g}function c(m,k){for(var j=0,h=m.length;j<h;++j){var g=m[j];k[g.m].apply(k,g.a)}}return function(V,w,P,t,C,W){var k=(w===null);if(k){w=C.getAttribute("alt")}var A=V.viewBox;var m=P.getSize("fontSize",V.baseSize);var B=0,O=0,N=0,u=0;var z=t.textShadow,L=[];if(z){for(var U=z.length;U--;){var F=z[U];var K=m.convertFrom(parseFloat(F.offX));var I=m.convertFrom(parseFloat(F.offY));L[U]=[K,I];if(I<B){B=I}if(K>O){O=K}if(I>N){N=I}if(K<u){u=K}}}var Z=Cufon.CSS.textTransform(w,P).split("");var E=V.spacing(Z,~~m.convertFrom(parseFloat(P.get("letterSpacing"))||0),~~m.convertFrom(parseFloat(P.get("wordSpacing"))||0));if(!E.length){return null}var h=E.total;O+=A.width-E[E.length-1];u+=A.minX;var s,n;if(k){s=C;n=C.firstChild}else{s=document.createElement("cufon");s.className="cufon cufon-canvas";s.setAttribute("alt",w);n=document.createElement("canvas");s.appendChild(n);if(t.printable){var S=document.createElement("cufontext");S.appendChild(document.createTextNode(w));s.appendChild(S)}}var aa=s.style;var H=n.style;var j=m.convert(A.height);var Y=Math.ceil(j);var M=Y/j;var G=M*Cufon.CSS.fontStretch(P.get("fontStretch"));var J=h*G;var Q=Math.ceil(m.convert(J+O-u));var o=Math.ceil(m.convert(A.height-B+N));n.width=Q;n.height=o;H.width=Q+"px";H.height=o+"px";B+=A.minY;H.top=Math.round(m.convert(B-V.ascent))+"px";H.left=Math.round(m.convert(u))+"px";var r=Math.max(Math.ceil(m.convert(J)),0)+"px";if(a){aa.width=r;aa.height=m.convert(V.height)+"px"}else{aa.paddingLeft=r;aa.paddingBottom=(m.convert(V.height)-1)+"px"}var X=n.getContext("2d"),D=j/A.height;X.scale(D,D*M);X.translate(-u,-B);X.save();function T(){var x=V.glyphs,ab,l=-1,g=-1,y;X.scale(G,1);while(y=Z[++l]){var ab=x[Z[l]]||V.missingGlyph;if(!ab){continue}if(ab.d){X.beginPath();if(ab.code){c(ab.code,X)}else{ab.code=d("m"+ab.d,X)}X.fill()}X.translate(E[++g],0)}X.restore()}if(z){for(var U=z.length;U--;){var F=z[U];X.save();X.fillStyle=F.color;X.translate.apply(X,L[U]);T()}}var q=t.textGradient;if(q){var v=q.stops,p=X.createLinearGradient(0,A.minY,0,A.maxY);for(var U=0,R=v.length;U<R;++U){p.addColorStop.apply(p,v[U])}X.fillStyle=p}else{X.fillStyle=P.get("color")}T();return s}})());
/* End */
;
; /* Start:"a:4:{s:4:"full";s:42:"/js/Bliss_Pro_700.font.js?1370660606106309";s:6:"source";s:25:"/js/Bliss_Pro_700.font.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * The following copyright notice may not be removed under any circumstances.
 *
 * Copyright:
 * Copyright (c) JT Types Ltd, 2006. All rights reserved.
 *
 * Trademark:
 * Please refer to the Copyright section for the font trademark attribution
 * notices.
 *
 * Full name:
 * BlissPro-Bold
 *
 * Manufacturer:
 * JT Types Ltd,
 */
Cufon.registerFont({"w":177,"face":{"font-family":"Bliss Pro","font-weight":700,"font-stretch":"normal","units-per-em":"360","panose-1":"2 0 8 3 5 0 0 2 0 4","ascent":"288","descent":"-72","x-height":"4","bbox":"-64 -343 433 86.9138","underline-thickness":"18","underline-position":"-18","stemh":"33","stemv":"43","unicode-range":"U+0020-U+FB02"},"glyphs":{" ":{"w":77},"\ufb01":{"d":"34,0r0,-137r-25,0r0,-33r25,0v-10,-67,36,-102,93,-77r-8,34v-19,-9,-43,-6,-42,19r0,24r44,0r-10,33r-34,0r0,137r-43,0xm146,0r0,-170r43,0r0,170r-43,0xm167,-198v-15,0,-26,-12,-26,-26v0,-14,11,-25,26,-25v15,0,27,10,27,25v0,14,-12,26,-27,26","w":210},"\ufb02":{"d":"34,0r0,-137r-25,0r0,-33r25,0v-10,-67,36,-102,93,-77r-8,34v-19,-9,-43,-6,-42,19r0,24r44,0r-10,33r-34,0r0,137r-43,0xm147,-39r0,-216r42,0r0,205v0,17,11,16,24,13r8,33v-33,15,-74,6,-74,-35","w":227},"\u02d8":{"d":"92,-245r30,0v-2,31,-23,50,-53,50v-30,0,-51,-19,-53,-50r30,0v1,14,9,24,23,24v14,0,22,-10,23,-24","w":138},"\u02d9":{"d":"69,-198v-15,0,-27,-12,-27,-26v0,-14,12,-25,27,-25v15,0,26,10,26,25v0,14,-11,26,-26,26","w":138},"\u02da":{"d":"69,-188v-25,0,-42,-13,-42,-35v0,-22,17,-35,42,-35v25,0,42,13,42,35v0,22,-17,35,-42,35xm69,-207v9,0,15,-6,15,-16v0,-10,-6,-17,-15,-17v-9,0,-15,7,-15,17v0,10,6,16,15,16","w":138},"\u02dd":{"d":"26,-191r21,-53r47,0r-35,53r-33,0xm88,-191r21,-53r47,0r-35,53r-33,0","w":138},"\u02db":{"d":"94,50r5,23v-30,10,-66,1,-66,-27v0,-23,21,-39,39,-51r33,5v-22,10,-36,24,-36,39v-1,14,13,15,25,11","w":138},"\u02c7":{"d":"52,-191r-37,-53r35,0r19,28r20,-28r33,0r-36,53r-34,0","w":138},"\u0131":{"d":"21,0r0,-170r43,0r0,170r-43,0","w":85},"\u2044":{"d":"-64,0r149,-237r36,0r-150,237r-35,0","w":56},"\u0141":{"d":"7,-66r0,-40r22,-13r0,-118r43,0r0,93r50,-30r0,40r-50,30r0,67r85,0r0,37r-128,0r0,-79","w":163},"\u0142":{"d":"9,-81r0,-40r23,-14r0,-120r43,0r0,95r25,-14r0,40r-25,14r0,70v-1,18,11,16,23,13r9,33v-33,15,-75,6,-75,-35r0,-55","w":112},"\u017d":{"d":"9,0r118,-201r-101,0r-11,-36r181,0r-116,200r117,0r0,37r-188,0xm89,-251r-37,-52r34,0r20,28r20,-28r33,0r-36,52r-34,0","w":205},"\u017e":{"d":"5,0r79,-137r-65,0r-9,-33r137,0r-78,137r76,0r0,33r-140,0xm61,-191r-36,-53r34,0r20,28r19,-28r34,0r-36,53r-35,0","w":149},"!":{"d":"36,-70v-9,-36,-9,-84,-9,-167r43,0v0,81,0,133,-9,167r-25,0xm48,3v-13,0,-24,-11,-24,-25v0,-14,11,-24,24,-24v13,0,24,10,24,24v0,14,-11,25,-24,25","w":96,"k":[-18]},"\"":{"d":"23,-171r-4,-84r40,0r-4,84r-32,0xm88,-171r-4,-84r40,0r-4,84r-32,0","w":142,"k":{"!":-18}},"#":{"d":"42,0r13,-60r-40,0r0,-33r47,0r11,-51r-40,0r0,-33r48,0r13,-60r40,0r-13,60r40,0r13,-60r41,0r-13,60r40,0r0,33r-47,0r-11,51r40,0r0,33r-48,0r-12,60r-41,0r13,-60r-41,0r-12,60r-41,0xm103,-93r40,0r11,-51r-40,0","w":257,"k":{"\"":-18}},"$":{"d":"76,31r0,-37v-23,-3,-40,-10,-54,-19r17,-32v21,16,86,32,86,-9v0,-42,-97,-39,-97,-107v0,-28,19,-54,56,-59r0,-35r31,0r0,34v17,2,32,7,42,12r0,36v-25,-14,-84,-27,-84,9v0,41,96,37,96,106v0,34,-23,58,-62,64r0,37r-31,0","w":196,"k":{"#":-18}},"%":{"d":"77,-112v-32,0,-58,-21,-58,-64v0,-42,26,-63,58,-63v32,0,58,21,58,63v0,43,-26,64,-58,64xm77,-138v16,0,23,-16,23,-38v0,-22,-7,-37,-23,-37v-16,0,-24,15,-24,37v0,22,8,38,24,38xm243,4v-32,0,-58,-21,-58,-64v0,-42,26,-63,58,-63v32,0,58,21,58,63v0,43,-26,64,-58,64xm243,-22v16,0,23,-16,23,-38v0,-22,-7,-38,-23,-38v-16,0,-24,16,-24,38v0,22,8,38,24,38xm67,0r150,-237r35,0r-149,237r-36,0","w":320,"k":{"$":-18}},"&":{"d":"179,-24v-47,47,-160,33,-160,-42v0,-32,22,-53,50,-66v-43,-36,-35,-108,42,-107v43,0,69,23,69,54v0,27,-20,47,-48,61v13,14,35,36,50,51v12,-13,24,-31,30,-52r36,9v-10,30,-23,51,-38,67v14,12,26,20,47,16r8,31v-35,10,-59,0,-86,-22xm64,-68v0,43,60,46,86,20v-19,-17,-42,-41,-58,-59v-19,10,-28,22,-28,39xm108,-150v19,-10,29,-23,29,-36v0,-11,-8,-22,-26,-22v-39,0,-27,36,-3,58","w":274,"k":{"%":-18}},"'":{"d":"23,-171r-4,-84r40,0r-4,84r-32,0","w":77,"k":{"&":-18}},"(":{"d":"87,85v-50,-54,-61,-113,-61,-181v0,-68,11,-128,61,-183r29,22v-61,60,-61,261,0,320","w":125,"k":{"'":-18}},")":{"d":"9,63v61,-59,60,-260,0,-320r29,-22v50,55,61,115,61,183v0,68,-11,127,-61,181","w":125,"k":{"\\":-18}},"*":{"d":"72,-119v-1,-20,8,-44,9,-58v-11,8,-28,28,-46,37r-16,-27v17,-11,42,-16,55,-22v-12,-5,-37,-10,-54,-21r15,-27v18,9,35,28,46,36v-1,-13,-9,-36,-8,-57r30,0v1,20,-7,43,-8,57v11,-8,27,-27,46,-36r15,27v-17,11,-41,15,-54,21v13,6,37,11,54,22r-15,27v-18,-9,-35,-28,-46,-36v1,13,9,36,8,57r-31,0","w":175},"+":{"d":"79,0r0,-72r-65,0r0,-36r65,0r0,-71r40,0r0,71r65,0r0,36r-65,0r0,72r-40,0","w":198,"k":{"*":-18}},",":{"d":"12,44v16,-29,20,-47,15,-80r39,-6v9,40,-3,67,-29,98","w":94,"k":{"+":-18}},"-":{"d":"19,-71r0,-36r94,0r0,36r-94,0","w":131,"k":{",":-18}},".":{"d":"47,3v-13,0,-24,-11,-24,-25v0,-14,11,-24,24,-24v13,0,24,10,24,24v0,14,-11,25,-24,25","w":94,"k":{"-":-18}},"\/":{"d":"5,13r90,-264r43,0r-90,264r-43,0","w":142,"k":{".":-18}},"0":{"d":"103,4v-53,0,-86,-42,-86,-122v0,-79,33,-121,86,-121v53,0,86,42,86,121v0,80,-33,122,-86,122xm103,-33v29,0,40,-29,40,-85v0,-55,-11,-85,-40,-85v-29,0,-40,30,-40,85v0,56,11,85,40,85","w":205,"k":{"1":-18}},"1":{"d":"80,0r0,-194r-55,24r-14,-33v37,-12,59,-40,112,-36r0,239r-43,0","w":160,"k":{"2":-18}},"2":{"d":"10,0v10,-119,117,-123,117,-173v0,-48,-72,-28,-97,-14r-12,-33v19,-9,47,-19,79,-19v51,0,76,26,76,62v0,67,-92,80,-107,140r109,0r0,37r-165,0","w":193,"k":{"c":3,"3":-18}},"3":{"d":"131,-69v0,-36,-46,-34,-86,-33r0,-35v39,2,78,-3,78,-34v0,-44,-65,-34,-93,-16r-12,-33v18,-9,46,-19,75,-19v84,0,101,89,40,115v25,8,43,25,43,54v0,41,-30,74,-96,74v-22,0,-48,-5,-68,-14r12,-34v36,18,107,17,107,-25","w":200,"k":{"4":-18}},"4":{"d":"14,-58r0,-29r117,-152r31,0r0,146r36,0r0,35r-36,0r0,58r-42,0r0,-58r-106,0xm62,-93r58,0v-1,-23,1,-66,2,-81","w":211,"k":{"5":-18}},"5":{"d":"72,-147v57,-4,99,27,99,71v0,44,-30,80,-98,80v-25,0,-46,-5,-61,-13r12,-34v33,17,101,16,101,-31v0,-41,-49,-39,-95,-38r0,-125r142,0r-10,36r-90,0r0,54","w":190,"k":{"6":-18}},"6":{"d":"107,4v-49,0,-90,-36,-90,-113v0,-93,72,-157,160,-119r-11,33v-51,-22,-95,-6,-104,60v47,-34,128,-16,128,57v0,51,-35,82,-83,82xm108,-31v23,0,36,-15,36,-41v0,-53,-54,-54,-81,-28v1,46,21,69,45,69","w":203,"k":{"o":1,"e":1,"7":-18}},"7":{"d":"28,0v19,-91,54,-159,87,-201r-98,0r-11,-36r168,0r0,15v-54,62,-85,139,-101,222r-45,0","w":179,"k":{"e":1,"c":1,"8":-18}},"8":{"d":"102,4v-93,0,-111,-100,-43,-126v-16,-12,-36,-24,-35,-53v0,-37,31,-64,81,-64v86,0,96,92,40,115v71,25,53,128,-43,128xm104,-30v22,0,40,-12,40,-33v0,-28,-29,-35,-52,-42v-14,6,-29,19,-29,38v0,25,19,37,41,37xm111,-139v31,-10,36,-67,-9,-67v-19,0,-33,12,-33,29v0,23,21,32,42,38","w":206,"k":{"9":-18}},"9":{"d":"184,-127v0,106,-74,156,-164,119r11,-35v48,27,109,7,107,-58v-47,34,-124,17,-124,-57v0,-49,34,-81,82,-81v51,0,88,34,88,112xm58,-161v0,52,61,50,81,22v0,-38,-17,-65,-44,-65v-22,0,-37,17,-37,43","w":201},":":{"d":"47,-113v-13,0,-24,-11,-24,-25v0,-14,11,-24,24,-24v13,0,24,10,24,24v0,14,-11,25,-24,25xm47,3v-13,0,-24,-11,-24,-25v0,-14,11,-24,24,-24v13,0,24,10,24,24v0,14,-11,25,-24,25","w":94,"k":{"\/":-18}},";":{"d":"44,-113v-13,0,-23,-11,-23,-25v0,-14,10,-24,23,-24v13,0,24,10,24,24v0,14,-11,25,-24,25xm12,44v16,-29,20,-47,15,-80r39,-6v9,40,-3,67,-29,98","w":94,"k":{":":-18}},"<":{"d":"17,-77r0,-34r154,-63r0,36r-117,45r117,44r0,36","w":195,"k":{";":-18}},"=":{"d":"14,-36r0,-35r170,0r0,35r-170,0xm14,-108r0,-36r170,0r0,36r-170,0","w":198,"k":{"<":-18}},">":{"d":"25,-13r0,-36r116,-45r-116,-44r0,-36r154,63r0,34","w":195,"k":{"=":-18}},"?":{"d":"50,-69v-7,-9,-11,-19,-11,-30v0,-43,65,-53,65,-83v0,-34,-49,-22,-70,-1r-20,-28v40,-44,138,-36,138,24v0,58,-92,59,-66,105xm70,3v-13,0,-24,-11,-24,-25v0,-14,11,-24,24,-24v13,0,24,10,24,24v0,14,-11,25,-24,25","w":173,"k":{">":-18}},"@":{"d":"175,17r8,24v-90,31,-172,-15,-171,-110v0,-85,60,-136,133,-136v71,0,123,44,123,115v0,53,-25,80,-61,80v-20,1,-32,-13,-38,-30v-6,13,-25,29,-50,29v-22,0,-49,-15,-49,-57v0,-70,77,-101,133,-65r-9,75v0,13,4,22,16,22v18,0,29,-19,29,-51v0,-50,-29,-93,-94,-93v-58,0,-104,41,-104,109v-1,83,66,114,134,88xm127,-37v23,6,40,-42,41,-79v-31,-18,-64,5,-64,47v0,23,10,32,23,32","w":279,"k":{"?":-18}},"A":{"d":"3,0r92,-238r34,0r96,238r-47,0r-23,-59r-85,0r-22,59r-45,0xm83,-95r58,0r-29,-84v-5,20,-20,61,-29,84","w":227,"k":{"o":3,"e":3,"B":-18,"9":3}},"B":{"d":"29,0r0,-237r69,0v80,-2,95,78,45,110v74,23,53,131,-38,127r-76,0xm72,-36v36,2,72,0,72,-34v0,-31,-36,-36,-72,-33r0,67xm72,-138v31,3,57,-6,57,-32v0,-25,-25,-36,-57,-32r0,64","w":204,"k":{"C":-18}},"C":{"d":"202,-49r12,34v-89,50,-195,-2,-195,-101v0,-92,99,-148,187,-112r0,40v-18,-10,-38,-15,-61,-15v-53,0,-80,40,-80,86v0,75,81,105,137,68","w":225,"k":{"o":5,"e":5,"D":-18}},"D":{"d":"29,0r0,-237r74,0v84,0,129,47,129,117v0,72,-51,120,-133,120r-70,0xm72,-37v73,7,114,-28,114,-83v0,-60,-43,-87,-114,-81r0,164","w":250,"k":{"E":-18}},"E":{"d":"29,0r0,-237r131,0r-12,36r-76,0r0,62r76,0r0,37r-76,0r0,65r88,0r0,37r-131,0","w":180,"k":{"F":-18}},"F":{"d":"29,0r0,-237r132,0r-12,36r-77,0r0,62r76,0r0,37r-76,0r0,102r-43,0","w":172,"k":{"r":7,"o":7,"G":-18}},"G":{"d":"229,-115r0,100v-22,11,-53,19,-86,19v-78,0,-124,-50,-124,-118v0,-98,105,-149,199,-114r0,41v-19,-9,-40,-16,-66,-16v-57,0,-87,36,-87,86v0,66,60,100,120,77r0,-75r44,0","w":254,"k":{"w":7,"H":-18}},"H":{"d":"29,0r0,-237r43,0r0,98r113,0r0,-98r44,0r0,237r-44,0r0,-103r-113,0r0,103r-43,0","w":257,"k":{"I":-18}},"I":{"d":"29,0r0,-237r43,0r0,237r-43,0","w":100,"k":{"J":-18}},"J":{"d":"-11,61r8,-35v25,12,55,-2,49,-31r0,-232r44,0r0,238v7,50,-52,79,-101,60","w":118,"k":{"K":-18}},"K":{"d":"29,0r0,-237r43,0r1,101r81,-101r50,0r-95,115r101,122r-53,0r-85,-104r0,104r-43,0","w":215,"k":{"o":9,"L":-18}},"L":{"d":"29,0r0,-237r43,0r0,200r84,0r0,37r-127,0","w":162},"M":{"d":"29,0r0,-237r39,0r83,120r76,-120r40,0r0,237r-44,0r0,-165r-63,99r-20,0r-68,-99r0,165r-43,0","w":295,"k":{"N":-18}},"N":{"d":"241,0r-39,0r-131,-171r1,171r-43,0r0,-237r43,0r126,166r-1,-166r44,0r0,237","w":269,"k":{"O":-18}},"O":{"d":"138,4v-70,0,-119,-49,-119,-122v0,-72,49,-121,119,-121v70,0,120,49,120,121v0,73,-51,122,-120,122xm138,-33v44,0,74,-31,74,-85v0,-53,-29,-85,-74,-85v-44,0,-73,31,-73,85v0,54,29,85,73,85","w":276,"k":{"P":-18}},"P":{"d":"178,-159v0,45,-42,83,-106,77r0,82r-43,0r0,-237v80,-5,149,4,149,78xm132,-159v0,-30,-22,-48,-60,-43r0,85v37,3,60,-8,60,-42","w":196,"k":{"e":8,"a":6,"Q":-18}},"Q":{"d":"103,-1v-50,-13,-84,-57,-84,-117v0,-72,49,-121,119,-121v70,0,120,49,120,121v0,66,-41,111,-100,119v17,20,46,26,72,17r10,33v-59,24,-112,-9,-137,-52xm138,-33v44,0,74,-31,74,-85v0,-53,-29,-85,-74,-85v-44,0,-73,31,-73,85v0,54,29,85,73,85","w":276,"k":{"R":-18}},"R":{"d":"94,-237v93,-13,115,108,39,129v22,17,51,78,69,108r-49,0v-16,-25,-41,-80,-60,-93r-21,0r0,93r-43,0r0,-237r65,0xm134,-165v0,-30,-26,-40,-62,-37r0,74v35,2,63,-4,62,-37","w":212,"k":{"e":9,"S":-18}},"S":{"d":"17,-17r17,-33v22,18,93,32,93,-11v0,-46,-102,-41,-102,-113v0,-35,28,-65,77,-65v24,0,45,5,58,11r0,40v-19,-10,-38,-15,-57,-15v-17,0,-32,7,-32,26v0,44,103,38,103,113v0,71,-110,85,-157,47","w":191,"k":{"T":-18}},"T":{"d":"74,0r0,-201r-69,0r0,-36r188,0r-12,36r-64,0r0,201r-43,0","w":192,"k":{"y":18,"e":18,"a":18,"U":-18}},"U":{"d":"224,-89v0,64,-37,93,-99,93v-62,0,-98,-30,-98,-93r0,-148r43,0v8,78,-31,204,55,204v87,0,46,-127,55,-204r44,0r0,148","w":250,"k":{"V":-18}},"V":{"d":"99,1r-96,-238r47,0r67,177r67,-177r47,0r-96,238r-36,0","w":233,"k":{"~":15,"o":15,"e":15,"a":16,"W":-18}},"W":{"d":"86,1r-83,-238r48,0r56,176r45,-135r-15,-41r44,0r60,176r52,-176r44,0r-80,238r-36,0r-50,-140r-49,140r-36,0","w":339,"k":{"e":15,"X":-18}},"X":{"d":"4,0r85,-119r-78,-118r49,0r56,85r60,-85r48,0r-84,117r80,120r-48,0r-59,-87r-62,87r-47,0","w":227,"k":{"Y":-18}},"Y":{"d":"84,0r0,-94r-81,-143r47,0r56,105r55,-105r47,0r-81,143r0,94r-43,0","w":210,"k":{"Z":-18}},"Z":{"d":"9,0r118,-201r-101,0r-11,-36r181,0r-116,200r117,0r0,37r-188,0","w":205},"[":{"d":"24,85r0,-363r77,0r0,32r-36,0r0,298r36,0r0,33r-77,0","w":109},"\\":{"d":"96,13r-91,-264r43,0r91,264r-43,0","w":144,"k":{"]":-18}},"]":{"d":"8,85r0,-33r37,0r0,-298r-37,0r0,-32r77,0r0,363r-77,0","w":109,"k":{"^":-18}},"^":{"d":"21,-103r55,-134r35,0r55,134r-36,0r-37,-97r-36,97r-36,0","w":187,"k":{"_":-18}},"_":{"d":"0,47r0,-23r159,0r0,23r-159,0","w":159,"k":{"e":6,"`":-18}},"`":{"d":"58,-191r-35,-53r47,0r21,53r-33,0","w":138,"k":{"@":-12}},"a":{"d":"124,0r-7,-16v-30,34,-107,22,-105,-35v2,-49,50,-57,102,-57v5,-45,-54,-37,-78,-22r-14,-28v47,-29,135,-25,135,45v0,35,-3,86,3,113r-36,0xm114,-79v-26,1,-59,-1,-59,25v0,32,49,26,59,11r0,-36","k":{"b":-18}},"b":{"d":"180,-91v0,81,-90,115,-158,83r0,-247r43,0r0,85v59,-18,115,13,115,79xm65,-35v40,12,70,-13,70,-53v0,-41,-37,-61,-70,-46r0,99","w":191,"k":{"y":6,"c":-18,"2":6}},"c":{"d":"99,4v-55,0,-86,-39,-86,-88v0,-70,79,-112,135,-79r0,36v-34,-28,-91,-8,-91,42v0,54,52,65,87,43r13,29v-14,9,-35,17,-58,17","w":161,"k":{"d":-18}},"d":{"d":"172,-9v-67,31,-159,6,-159,-75v0,-61,52,-102,116,-88r0,-83r43,0r0,246xm57,-84v0,40,34,60,72,49r0,-102v-39,-9,-72,10,-72,53","w":193,"k":{"e":-18}},"e":{"d":"165,-73r-109,0v-2,44,60,53,91,31r13,30v-18,11,-39,16,-60,16v-118,0,-111,-179,-10,-179v51,0,78,40,75,102xm56,-103r66,0v0,-19,-10,-39,-33,-39v-21,0,-33,18,-33,39","k":{"f":-18}},"f":{"d":"34,0r0,-137r-25,0r0,-33r25,0v-10,-67,36,-102,93,-77r-8,34v-19,-9,-43,-6,-42,19r0,24r44,0r-10,33r-34,0r0,137r-43,0","w":124,"k":{"~":8,"{":8,"s":6,"o":8,"g":6,"e":8,"a":9,"[":8}},"g":{"d":"84,85v-79,0,-105,-64,-48,-91v-20,-14,-13,-38,9,-53v-48,-30,-33,-116,41,-116v18,0,29,8,38,7v9,-11,30,-17,53,-14r-9,31v-9,-3,-17,-3,-25,1v41,47,-7,122,-76,101v-29,54,107,6,107,78v0,31,-31,56,-90,56xm90,55v26,0,43,-8,43,-21v0,-24,-53,-20,-76,-29v-24,18,-11,50,33,50xm87,-79v17,0,30,-10,30,-31v0,-17,-11,-32,-30,-32v-17,0,-30,10,-30,31v0,17,11,32,30,32","w":181,"k":{"j":-17,"h":-18}},"h":{"d":"22,0r0,-255r43,0r0,103v36,-32,110,-40,111,39r0,113r-43,0r0,-99v5,-47,-44,-44,-68,-20r0,119r-43,0","w":195,"k":{"y":3,"w":1,"v":1,"i":-18,"2":3}},"i":{"d":"21,0r0,-170r43,0r0,170r-43,0xm43,-198v-15,0,-26,-12,-26,-26v0,-14,11,-25,26,-25v15,0,26,10,26,25v0,14,-11,26,-26,26","w":85,"k":{"j":-18}},"j":{"d":"-22,79r8,-35v21,9,40,5,40,-25r0,-189r43,0r0,195v3,52,-47,71,-91,54xm48,-198v-15,0,-26,-12,-26,-26v0,-14,11,-25,26,-25v15,0,27,10,27,25v0,14,-12,26,-27,26","w":90,"k":{"k":-18}},"k":{"d":"22,0r0,-255r43,0r1,144r55,-59r49,0r-70,74r76,96r-50,0r-61,-79r0,79r-43,0","k":{"~":6,"o":6,"l":-18,"e":6,"d":6}},"l":{"d":"22,-39r0,-216r43,0r0,205v0,18,10,16,23,13r8,33v-32,15,-74,5,-74,-35","w":102,"k":{"y":3,"v":5,"m":-18,"2":3}},"m":{"d":"20,0r0,-170r36,0r4,19v28,-27,84,-36,103,3v44,-39,117,-43,117,35r0,113r-42,0r0,-101v6,-44,-45,-42,-67,-19v3,37,0,81,1,120r-43,0r0,-101v5,-44,-44,-42,-66,-19r0,120r-43,0","w":299,"k":{"y":3,"v":1,"n":-18}},"n":{"d":"20,0r0,-170r37,0r4,19v40,-33,113,-43,113,38r0,113r-43,0r0,-99v5,-46,-45,-45,-68,-20r0,119r-43,0","w":193,"k":{"y":3,"w":1,"v":1,"o":-18,"2":3}},"o":{"d":"98,4v-51,0,-85,-39,-85,-90v0,-51,34,-89,85,-89v51,0,85,38,85,89v0,51,-34,90,-85,90xm98,-31v27,0,41,-23,41,-55v0,-31,-14,-54,-41,-54v-27,0,-41,23,-41,54v0,32,14,55,41,55","w":195,"k":{"z":5,"y":6,"v":3,"p":-18}},"p":{"d":"20,85r0,-249v70,-27,157,-3,157,78v0,60,-51,103,-114,86r0,85r-43,0xm63,-36v39,14,71,-8,71,-50v0,-44,-33,-60,-71,-50r0,100","w":190,"k":{"v":3,"q":-18}},"q":{"d":"130,-7v-54,28,-115,2,-117,-74v-2,-84,89,-112,159,-83r0,249r-42,0r0,-92xm57,-83v0,44,43,64,73,42r0,-95v-40,-12,-73,12,-73,53","w":192,"k":{"r":-18}},"r":{"d":"20,0r0,-170r36,0r5,19v21,-21,44,-32,71,-17r-15,37v-24,-12,-32,-6,-54,11r0,120r-43,0","w":131,"k":{"~":6,"s":6,"r":5,"o":6,"h":5,"g":3,"e":6,"d":6,"c":6,"a":5,"[":6,"=":6,"9":6}},"s":{"d":"8,-13r13,-31v18,14,76,26,76,-4v0,-29,-80,-18,-80,-75v0,-49,72,-63,115,-43r0,36v-19,-9,-67,-22,-73,5v0,27,80,17,80,76v0,62,-96,62,-131,36","w":151,"k":{"t":-18}},"t":{"d":"135,-10v-32,23,-99,19,-99,-32r0,-95r-30,0r0,-33r30,0r0,-40r43,-12r0,52r52,0r-11,33r-41,0r0,84v-2,31,29,23,43,14","w":138,"k":{"u":-18}},"u":{"d":"63,-170v7,49,-21,134,29,137v14,0,27,-7,35,-15r0,-122r43,0r0,128v0,18,0,33,3,42r-37,0r-6,-18v-39,40,-110,25,-110,-48r0,-104r43,0","w":192,"k":{"v":-18}},"v":{"d":"71,1r-69,-171r43,0r43,116r42,-116r43,0r-69,171r-33,0","w":174,"k":{"w":-18,"o":3,"e":3}},"w":{"d":"64,1r-61,-171r43,0r37,115r36,-115r33,0r38,115r36,-115r42,0r-63,171r-31,0r-39,-115r-38,115r-33,0","w":269,"k":{"x":-18}},"x":{"d":"3,0r63,-86r-61,-84r45,0r40,55r40,-55r45,0r-63,84r63,86r-45,0r-41,-57r-41,57r-45,0","k":{"y":-18}},"y":{"d":"185,-170r-65,175v-37,88,-61,88,-124,72r10,-33v38,14,56,5,74,-45r-77,-169r46,0r51,120r40,-120r45,0","w":186,"k":{"{":3,"z":-18,"o":3,"e":3,"d":3,"c":3}},"z":{"d":"5,0r79,-137r-65,0r-9,-33r137,0r-78,137r76,0r0,33r-140,0","w":149,"k":{"~":1,"{":1,"o":1,"e":1,"d":1,"c":1}},"{":{"d":"108,82v-84,-4,-62,-69,-65,-141v0,-20,-10,-25,-23,-25r0,-29v38,1,23,-68,23,-103v0,-33,14,-59,65,-62r8,38v-66,-4,-2,130,-59,142v33,-1,27,70,27,110v0,21,10,29,32,32","w":130,"k":{"z":5,"[":-18}},"|":{"d":"30,85r0,-366r42,0r0,366r-42,0","w":101},"}":{"d":"15,44v65,3,0,-132,59,-143v-33,1,-29,-69,-28,-109v0,-21,-9,-29,-31,-32r8,-38v84,4,61,69,64,140v0,20,11,25,24,25r0,29v-39,-2,-24,68,-24,103v0,33,-13,60,-64,63","w":130,"k":{"|":-18}},"~":{"d":"29,-71r-20,-28v45,-63,114,24,160,-20r21,28v-46,63,-114,-24,-161,20","w":198,"k":{"}":-18,"z":5,"v":3}},"\u20ac":{"d":"174,-46r16,33v-64,39,-148,7,-158,-62r-24,0r0,-27r20,0r1,-32r-21,0r0,-27r26,0v13,-62,82,-96,146,-68r0,41v-38,-26,-84,-16,-98,27r87,0r-9,27r-85,0v-1,13,-2,18,0,32r83,0r-10,27r-67,0v12,40,54,54,93,29","w":196},"\u201a":{"d":"54,-43v18,32,17,67,-1,102r-27,-4v8,-31,4,-57,-8,-81","w":82},"\u0192":{"d":"112,-108v-9,71,3,171,-80,169v-15,0,-31,-3,-47,-11r16,-34v28,16,55,4,58,-28r9,-96r-35,0r0,-33r38,0v2,-60,15,-116,75,-114v14,0,31,3,47,11r-16,34v-29,-16,-57,-3,-59,29r-3,40r45,0r-10,33r-38,0","w":196},"\u201e":{"d":"122,-43v18,32,17,67,-1,102r-27,-4v8,-31,4,-57,-8,-81xm54,-43v18,32,17,67,-1,102r-27,-4v8,-31,4,-57,-8,-81","w":150},"\u2026":{"d":"62,3v-13,0,-24,-11,-24,-25v0,-14,11,-24,24,-24v13,0,24,10,24,24v0,14,-11,25,-24,25xm162,3v-13,0,-24,-11,-24,-25v0,-14,11,-24,24,-24v13,0,24,10,24,24v0,14,-11,25,-24,25xm262,3v-13,0,-24,-11,-24,-25v0,-14,11,-24,24,-24v13,0,25,10,25,24v0,14,-12,25,-25,25","w":324},"\u2020":{"d":"74,18r2,-157v-13,0,-38,5,-54,5r0,-43v15,0,42,4,55,5v0,-15,-4,-40,-4,-57r44,0v0,17,-4,42,-4,57v14,-1,39,-5,55,-5r0,43v-16,0,-42,-5,-55,-5r2,157r-41,0","w":189},"\u2021":{"d":"73,18v0,-17,4,-42,4,-57v-13,1,-40,5,-55,5r0,-43v16,0,41,5,54,5r0,-67v-13,0,-38,5,-54,5r0,-43v15,0,42,4,55,5v0,-15,-4,-40,-4,-57r44,0v0,17,-4,42,-4,57v14,-1,39,-5,55,-5r0,43v-16,0,-42,-5,-55,-5v1,15,1,51,0,67v13,0,39,-5,55,-5r0,43v-16,0,-41,-4,-55,-5v0,15,4,40,4,57r-44,0","w":189},"\u02c6":{"d":"15,-191r36,-53r35,0r36,53r-33,0r-20,-29r-20,29r-34,0","w":138},"\u2030":{"d":"77,-112v-32,0,-58,-21,-58,-64v0,-42,26,-63,58,-63v32,0,58,21,58,63v0,43,-26,64,-58,64xm77,-138v16,0,23,-16,23,-38v0,-22,-7,-37,-23,-37v-16,0,-24,15,-24,37v0,22,8,38,24,38xm243,4v-32,0,-58,-21,-58,-64v0,-42,26,-63,58,-63v32,0,58,21,58,63v0,43,-26,64,-58,64xm243,-22v16,0,23,-16,23,-38v0,-22,-7,-38,-23,-38v-16,0,-24,16,-24,38v0,22,8,38,24,38xm375,4v-32,0,-57,-21,-57,-64v0,-42,25,-63,57,-63v32,0,58,21,58,63v0,43,-26,64,-58,64xm375,-22v16,0,24,-16,24,-38v0,-22,-8,-38,-24,-38v-16,0,-23,16,-23,38v0,22,7,38,23,38xm67,0r150,-237r35,0r-149,237r-36,0","w":452},"\u0160":{"d":"17,-17r17,-33v22,18,93,32,93,-11v0,-46,-102,-41,-102,-113v0,-35,28,-65,77,-65v24,0,45,5,58,11r0,40v-19,-10,-38,-15,-57,-15v-17,0,-32,7,-32,26v0,44,103,38,103,113v0,71,-110,85,-157,47xm77,-251r-36,-52r34,0r20,28r19,-28r34,0r-36,52r-35,0","w":190},"\u2039":{"d":"105,-145r-44,58r44,58r-30,17r-62,-75r62,-75","w":128},"\u0152":{"d":"20,-117v1,-70,45,-123,122,-122r167,2r-12,36r-76,0r0,62r76,0r0,37r-76,0r0,65r88,0r0,37r-89,0v-34,0,-59,4,-81,4v-73,-1,-119,-46,-119,-121xm66,-118v0,64,46,98,111,81r0,-161v-63,-19,-111,17,-111,80","w":329},"\u2018":{"d":"29,-157v-17,-32,-16,-67,1,-102r27,4v-8,31,-4,57,8,81","w":82},"\u2019":{"d":"54,-259v18,32,17,67,-1,102r-27,-4v8,-31,4,-57,-8,-81","w":82},"\u201c":{"d":"29,-157v-17,-32,-16,-67,1,-102r27,4v-8,31,-4,57,8,81xm97,-157v-17,-32,-16,-67,1,-102r27,4v-8,31,-4,57,8,81","w":150},"\u201d":{"d":"122,-259v18,32,17,67,-1,102r-27,-4v8,-31,4,-57,-8,-81xm54,-259v18,32,17,67,-1,102r-27,-4v8,-31,4,-57,-8,-81","w":150},"\u2022":{"d":"59,-70v-25,0,-44,-20,-44,-44v0,-26,19,-45,44,-45v25,0,43,19,43,45v0,24,-18,44,-43,44","w":117},"\u2013":{"d":"0,-75r0,-31r162,0r0,31r-162,0","w":162},"\u2014":{"d":"0,-75r0,-31r288,0r0,31r-288,0","w":288},"\u02dc":{"d":"13,-197v-3,-26,7,-45,29,-44v21,0,36,16,47,16v7,0,8,-5,8,-14r28,0v3,26,-7,45,-29,44v-20,0,-36,-16,-47,-16v-7,0,-8,5,-8,14r-28,0","w":138},"\u2122":{"d":"46,-95r0,-114r-40,0r0,-28r120,0r-7,28r-38,0r0,114r-35,0xm135,-95r0,-142r31,0r47,68r45,-68r32,0r0,142r-35,0r0,-89v-10,19,-23,35,-35,52r-15,0v-12,-17,-22,-36,-36,-52v2,27,0,60,1,89r-35,0","w":312},"\u0161":{"d":"8,-13r13,-31v18,14,76,26,76,-4v0,-29,-80,-18,-80,-75v0,-49,72,-63,115,-43r0,36v-19,-9,-67,-22,-73,5v0,27,80,17,80,76v0,62,-96,62,-131,36xm59,-191r-36,-53r34,0r20,28r19,-28r34,0r-36,53r-35,0","w":151},"\u203a":{"d":"68,-87r-45,-58r31,-17r62,75r-62,75r-31,-17","w":128},"\u0153":{"d":"159,-29v-39,64,-146,27,-146,-57v0,-51,33,-89,82,-89v31,-1,50,16,64,33v39,-64,147,-27,132,69r-109,0v-2,45,61,53,92,31r12,30v-40,26,-108,19,-127,-17xm98,-31v27,0,40,-23,40,-55v0,-31,-13,-54,-40,-54v-27,0,-41,23,-41,54v0,32,14,55,41,55xm182,-103r66,0v0,-19,-10,-39,-33,-39v-21,0,-33,18,-33,39","w":303},"\u0178":{"d":"84,0r0,-94r-81,-143r47,0r56,105r55,-105r47,0r-81,143r0,94r-43,0xm72,-252v-12,0,-22,-10,-22,-22v0,-12,10,-23,22,-23v12,0,22,11,22,23v0,12,-10,22,-22,22xm140,-252v-12,0,-22,-10,-22,-22v0,-12,10,-23,22,-23v12,0,22,11,22,23v0,12,-10,22,-22,22","w":210},"\u00a1":{"d":"48,-125v-13,0,-24,-11,-24,-25v0,-14,11,-25,24,-25v13,0,24,11,24,25v0,14,-11,25,-24,25xm27,66v0,-81,0,-134,9,-168r25,0v9,36,9,85,9,168r-43,0","w":96},"\u00a2":{"d":"87,0r0,-38v-83,-16,-76,-146,2,-161r0,-38r31,0r0,35v17,0,30,5,38,10r0,34v-35,-25,-89,-11,-89,38v0,49,52,61,86,40r11,31v-12,6,-29,11,-48,12r0,37r-31,0","w":196},"\u00a3":{"d":"22,0r0,-27v32,-10,32,-57,32,-76r-25,0r0,-36r25,0v-7,-95,62,-116,126,-91r-9,35v-39,-21,-82,-3,-74,56r68,0r-12,36r-56,0v1,25,-3,55,-21,72v25,-6,70,-4,103,-4r0,35r-157,0","w":196},"\u00a4":{"d":"165,-24r-24,-25v-24,17,-62,17,-86,0r-24,25r-26,-26r25,-24v-16,-24,-18,-63,-1,-87r-24,-24r25,-26r24,25v25,-17,63,-17,88,0r23,-24r26,26r-24,23v17,25,15,63,-1,87r25,24xm98,-66v28,0,50,-23,50,-52v0,-28,-22,-51,-50,-51v-28,0,-50,23,-50,51v0,29,22,52,50,52","w":196},"\u00a5":{"d":"77,0r0,-40r-56,0r0,-27r56,0r0,-27r-56,0r0,-27r43,0r-55,-116r46,0r43,104r43,-104r47,0r-56,116r44,0r0,27r-56,0r0,27r56,0r0,27r-56,0r0,40r-43,0","w":196},"\u00a6":{"d":"30,85r0,-131r42,0r0,131r-42,0xm30,-150r0,-131r42,0r0,131r-42,0","w":101},"\u00a7":{"d":"23,39r17,-30v21,16,90,28,90,-10v0,-43,-105,-34,-105,-103v0,-22,11,-41,28,-52v-39,-35,-13,-105,50,-105v28,0,51,7,62,13r-1,37v-26,-16,-88,-28,-88,9v0,45,107,34,107,106v0,22,-12,41,-30,51v11,10,19,22,19,40v0,75,-111,75,-149,44xm130,-61v40,-36,-10,-64,-54,-80v-39,35,13,66,54,80","w":200},"\u00a8":{"d":"35,-196v-12,0,-22,-10,-22,-22v0,-13,10,-22,22,-22v12,0,22,9,22,22v0,12,-10,22,-22,22xm103,-196v-12,0,-22,-10,-22,-22v0,-13,10,-22,22,-22v12,0,22,9,22,22v0,12,-10,22,-22,22","w":138},"\u00a9":{"d":"139,4v-71,0,-120,-53,-120,-122v0,-69,49,-121,120,-121v70,0,119,52,119,121v0,69,-49,122,-119,122xm139,-18v54,0,94,-42,94,-100v0,-58,-40,-99,-94,-99v-55,0,-95,41,-95,99v0,58,40,100,95,100xm175,-77r9,20v-49,30,-110,0,-110,-59v0,-53,57,-91,105,-66r0,25v-33,-22,-79,-5,-79,40v0,46,45,60,75,40","w":277},"\u00aa":{"d":"10,-48r0,-25r112,0r0,25r-112,0xm90,-97r-4,-11v-22,23,-75,14,-75,-26v0,-30,32,-43,71,-40v2,-27,-39,-20,-53,-11r-12,-22v36,-22,98,-21,98,32v0,26,-3,57,3,78r-28,0xm82,-129r0,-22v-15,1,-39,0,-37,15v-2,19,30,17,37,7","w":132},"\u00ab":{"d":"105,-145r-44,58r44,58r-30,17r-62,-75r62,-75xm194,-145r-44,58r44,58r-31,17r-61,-75r61,-75","w":217},"\u00ac":{"d":"144,-16r0,-72r-130,0r0,-36r170,0r0,108r-40,0","w":198},"\u2212":{"d":"14,-72r0,-36r170,0r0,36r-170,0","w":198},"\u00ae":{"d":"103,-65v-50,0,-86,-37,-86,-87v0,-50,36,-87,86,-87v49,0,86,37,86,87v0,50,-37,87,-86,87xm103,-82v39,0,67,-30,67,-70v0,-39,-28,-70,-67,-70v-39,0,-67,31,-67,70v0,40,28,70,67,70xm73,-201v29,-2,61,0,61,26v0,15,-12,21,-22,26v6,3,16,21,28,42r-21,0v-16,-24,-16,-39,-28,-38r0,38r-18,0r0,-94xm115,-173v0,-12,-10,-14,-24,-13r0,27v13,1,24,-2,24,-14","w":206},"\u00af":{"d":"18,-205r0,-32r102,0r0,32r-102,0","w":138},"\u00b0":{"d":"66,-127v-33,0,-56,-23,-56,-55v0,-32,25,-55,57,-55v32,0,56,23,56,55v0,32,-25,55,-57,55xm67,-154v15,0,26,-11,26,-28v0,-17,-11,-28,-26,-28v-15,0,-27,11,-27,28v0,17,12,28,27,28","w":133},"\u00b1":{"d":"79,-53r0,-50r-65,0r0,-35r65,0r0,-50r40,0r0,50r65,0r0,35r-65,0r0,50r-40,0xm14,0r0,-36r170,0r0,36r-170,0","w":198},"\u00b2":{"d":"8,-145v2,-66,67,-76,67,-99v-5,-23,-35,-13,-54,-4r-9,-26v31,-20,100,-20,100,25v0,39,-52,47,-60,75r61,0r0,29r-105,0","w":125},"\u00b3":{"d":"26,-228v20,1,43,-1,42,-17v-2,-22,-36,-13,-51,-6r-8,-26v29,-16,95,-14,95,26v0,17,-11,25,-23,33v18,3,28,15,28,33v0,39,-68,53,-104,33r9,-25v21,9,57,13,58,-11v0,-17,-26,-15,-46,-15r0,-25","w":125},"\u00b4":{"d":"47,-191r21,-53r46,0r-34,53r-33,0","w":138},"\u00b5":{"d":"129,-76r0,-94r43,0r0,111v0,25,9,25,25,21r8,34v-28,15,-63,5,-66,-26v-14,35,-52,44,-76,21v2,29,2,62,2,94r-43,0r0,-255r43,0v6,49,-21,137,30,137v16,0,34,-12,34,-43","w":208},"\u00b6":{"d":"96,58r0,-131v-46,-4,-77,-36,-77,-82v0,-46,33,-82,85,-82r94,0r0,295r-34,0r0,-268r-34,0r0,268r-34,0","w":227},"\u00b7":{"d":"47,-66v-13,0,-24,-10,-24,-24v0,-14,11,-25,24,-25v13,0,24,11,24,25v0,14,-11,24,-24,24","w":94},"\u00b8":{"d":"30,72r6,-19v12,3,36,5,35,-9v0,-10,-12,-12,-29,-12r9,-32r32,0r-5,18v18,1,30,8,30,26v6,26,-48,39,-78,28","w":138},"\u00b9":{"d":"63,-145r0,-107r-41,16r-12,-27v28,-9,47,-27,87,-24r0,142r-34,0","w":125},"\u00ba":{"d":"11,-48r0,-25r119,0r0,25r-119,0xm71,-95v-36,0,-61,-26,-61,-62v0,-36,25,-63,61,-63v36,0,60,27,60,63v0,36,-24,62,-60,62xm71,-122v17,0,27,-15,27,-35v0,-20,-10,-36,-27,-36v-17,0,-28,16,-28,36v0,20,11,35,28,35","w":141},"\u00bb":{"d":"23,-29r45,-58r-45,-58r31,-17r62,75r-62,75xm112,-29r45,-58r-45,-58r31,-17r61,75r-61,75","w":217},"\u00bc":{"d":"74,0r149,-237r35,0r-149,237r-35,0xm74,-97r0,-107r-42,15r-11,-27v28,-8,47,-26,87,-23r0,142r-34,0xm188,-30r0,-21r69,-91r32,0r0,87r19,0r0,25r-19,0r0,30r-33,0r0,-30r-68,0xm223,-55r33,0r1,-45","w":339},"\u00bd":{"d":"67,0r150,-237r35,0r-150,237r-35,0xm69,-97r0,-107r-42,15r-11,-27v28,-8,47,-26,86,-23r0,142r-33,0xm207,0v2,-66,67,-77,67,-100v-6,-22,-36,-12,-54,-3r-9,-26v31,-21,100,-21,100,25v0,39,-52,47,-60,75r61,0r0,29r-105,0","w":339},"\u00be":{"d":"84,0r149,-237r36,0r-150,237r-35,0xm193,-30r0,-21r69,-91r32,0r0,87r20,0r0,25r-20,0r0,30r-33,0r0,-30r-68,0xm229,-55r32,0r1,-45xm44,-180v20,1,43,-1,42,-17v-2,-22,-36,-13,-51,-6r-8,-26v29,-16,95,-14,95,26v0,17,-11,25,-23,33v18,3,28,15,28,33v0,39,-68,53,-104,33r9,-26v20,10,58,15,58,-10v0,-17,-26,-17,-46,-16r0,-24","w":339},"\u00bf":{"d":"96,-125v-13,0,-23,-11,-23,-25v0,-14,10,-25,23,-25v13,0,25,11,25,25v0,14,-12,25,-25,25xm133,12r19,27v-40,46,-138,36,-138,-24v0,-58,89,-58,67,-104r36,-13v7,9,11,19,11,30v0,43,-66,53,-66,83v0,34,50,23,71,1","w":170},"\u00c0":{"d":"3,0r92,-238r34,0r96,238r-47,0r-23,-59r-85,0r-22,59r-45,0xm83,-95r58,0r-29,-84v-5,20,-20,61,-29,84xm101,-251r-35,-52r47,0r21,52r-33,0","w":227},"\u00c1":{"d":"3,0r92,-238r34,0r96,238r-47,0r-23,-59r-85,0r-22,59r-45,0xm83,-95r58,0r-29,-84v-5,20,-20,61,-29,84xm90,-251r21,-52r47,0r-35,52r-33,0","w":227},"\u00c2":{"d":"3,0r92,-238r34,0r96,238r-47,0r-23,-59r-85,0r-22,59r-45,0xm83,-95r58,0r-29,-84v-5,20,-20,61,-29,84xm59,-251r36,-52r34,0r37,52r-34,0r-20,-28r-19,28r-34,0","w":227},"\u00c3":{"d":"3,0r92,-238r34,0r96,238r-47,0r-23,-59r-85,0r-22,59r-45,0xm83,-95r58,0r-29,-84v-5,20,-20,61,-29,84xm56,-259v-3,-26,7,-45,29,-44v21,0,36,16,47,16v7,0,8,-5,8,-14r28,0v3,26,-7,45,-29,44v-20,0,-36,-16,-47,-16v-7,0,-8,5,-8,14r-28,0","w":227},"\u00c4":{"d":"3,0r92,-238r34,0r96,238r-47,0r-23,-59r-85,0r-22,59r-45,0xm83,-95r58,0r-29,-84v-5,20,-20,61,-29,84xm78,-252v-12,0,-22,-10,-22,-22v0,-12,10,-23,22,-23v12,0,22,11,22,23v0,12,-10,22,-22,22xm147,-252v-12,0,-22,-10,-22,-22v0,-12,10,-23,22,-23v12,0,21,11,21,23v0,12,-9,22,-21,22","w":227},"\u00c5":{"d":"3,0r91,-235v-15,-5,-25,-17,-25,-33v0,-21,18,-35,43,-35v46,0,56,56,18,67r95,236r-47,0r-23,-59r-85,0r-22,59r-45,0xm83,-95r58,0r-29,-84v-6,21,-21,60,-29,84xm112,-251v9,0,14,-7,14,-17v0,-10,-5,-16,-14,-16v-9,0,-15,6,-15,16v0,10,6,17,15,17","w":227},"\u00c6":{"d":"3,0r128,-237r150,0r-12,36r-91,0r11,62r81,0r0,37r-75,0r11,65r76,0r0,37r-113,0r-10,-59r-79,0r-32,59r-45,0xm100,-95r53,0r-13,-83","w":302},"\u00c7":{"d":"89,72r6,-19v12,4,34,4,34,-9v0,-10,-12,-12,-29,-12r9,-31v-59,-10,-90,-57,-90,-117v0,-92,99,-148,187,-112r0,40v-18,-10,-38,-15,-61,-15v-53,0,-80,40,-80,86v0,75,81,105,137,68r12,34v-25,14,-52,19,-74,19r-4,14v18,1,30,8,30,26v7,26,-48,39,-77,28","w":225},"\u00c8":{"d":"29,0r0,-237r131,0r-12,36r-76,0r0,62r76,0r0,37r-76,0r0,65r88,0r0,37r-131,0xm78,-251r-35,-52r47,0r21,52r-33,0","w":180},"\u00c9":{"d":"29,0r0,-237r131,0r-12,36r-76,0r0,62r76,0r0,37r-76,0r0,65r88,0r0,37r-131,0xm71,-251r20,-52r47,0r-35,52r-32,0","w":180},"\u00ca":{"d":"29,0r0,-237r131,0r-12,36r-76,0r0,62r76,0r0,37r-76,0r0,65r88,0r0,37r-131,0xm39,-251r36,-52r34,0r36,52r-33,0r-20,-28r-20,28r-33,0","w":180},"\u00cb":{"d":"29,0r0,-237r131,0r-12,36r-76,0r0,62r76,0r0,37r-76,0r0,65r88,0r0,37r-131,0xm59,-252v-12,0,-22,-10,-22,-22v0,-12,10,-23,22,-23v12,0,22,11,22,23v0,12,-10,22,-22,22xm127,-252v-12,0,-22,-10,-22,-22v0,-12,10,-23,22,-23v12,0,22,11,22,23v0,12,-10,22,-22,22","w":180},"\u00cc":{"d":"29,0r0,-237r43,0r0,237r-43,0xm39,-251r-35,-52r47,0r21,52r-33,0","w":100},"\u00cd":{"d":"29,0r0,-237r43,0r0,237r-43,0xm27,-251r21,-52r47,0r-35,52r-33,0","w":100},"\u00ce":{"d":"29,0r0,-237r43,0r0,237r-43,0xm-3,-251r36,-52r34,0r37,52r-34,0r-20,-28r-19,28r-34,0","w":100},"\u00cf":{"d":"29,0r0,-237r43,0r0,237r-43,0xm16,-252v-12,0,-22,-10,-22,-22v0,-12,10,-23,22,-23v12,0,22,11,22,23v0,12,-10,22,-22,22xm85,-252v-12,0,-22,-10,-22,-22v0,-12,10,-23,22,-23v12,0,22,11,22,23v0,12,-10,22,-22,22","w":100},"\u00d0":{"d":"29,0r0,-103r-26,0r0,-35r26,0r0,-99r74,0v84,0,129,47,129,117v0,72,-51,120,-133,120r-70,0xm72,-37v73,7,114,-28,114,-83v0,-60,-43,-87,-114,-81r0,63r54,0r0,35r-54,0r0,66","w":250},"\u00d1":{"d":"241,0r-39,0r-131,-171r1,171r-43,0r0,-237r43,0r126,166r-1,-166r44,0r0,237xm78,-259v-3,-26,8,-44,30,-44v21,0,36,16,47,16v7,0,8,-5,8,-14r28,0v3,26,-7,45,-29,44v-20,0,-37,-16,-48,-16v-7,0,-7,5,-7,14r-29,0","w":269},"\u00d2":{"d":"138,4v-70,0,-119,-49,-119,-122v0,-72,49,-121,119,-121v70,0,120,49,120,121v0,73,-51,122,-120,122xm138,-33v44,0,74,-31,74,-85v0,-53,-29,-85,-74,-85v-44,0,-73,31,-73,85v0,54,29,85,73,85xm124,-251r-35,-52r47,0r21,52r-33,0","w":276},"\u00d3":{"d":"138,4v-70,0,-119,-49,-119,-122v0,-72,49,-121,119,-121v70,0,120,49,120,121v0,73,-51,122,-120,122xm138,-33v44,0,74,-31,74,-85v0,-53,-29,-85,-74,-85v-44,0,-73,31,-73,85v0,54,29,85,73,85xm121,-251r21,-52r46,0r-34,52r-33,0","w":276},"\u00d4":{"d":"138,4v-70,0,-119,-49,-119,-122v0,-72,49,-121,119,-121v70,0,120,49,120,121v0,73,-51,122,-120,122xm138,-33v44,0,74,-31,74,-85v0,-53,-29,-85,-74,-85v-44,0,-73,31,-73,85v0,54,29,85,73,85xm85,-251r36,-52r35,0r36,52r-34,0r-20,-28r-19,28r-34,0","w":276},"\u00d5":{"d":"138,4v-70,0,-119,-49,-119,-122v0,-72,49,-121,119,-121v70,0,120,49,120,121v0,73,-51,122,-120,122xm138,-33v44,0,74,-31,74,-85v0,-53,-29,-85,-74,-85v-44,0,-73,31,-73,85v0,54,29,85,73,85xm82,-259v-3,-26,8,-44,30,-44v21,0,36,16,47,16v7,0,8,-5,8,-14r28,0v3,26,-7,45,-29,44v-20,0,-37,-16,-48,-16v-7,0,-7,5,-7,14r-29,0","w":276},"\u00d6":{"d":"138,4v-70,0,-119,-49,-119,-122v0,-72,49,-121,119,-121v70,0,120,49,120,121v0,73,-51,122,-120,122xm138,-33v44,0,74,-31,74,-85v0,-53,-29,-85,-74,-85v-44,0,-73,31,-73,85v0,54,29,85,73,85xm105,-252v-12,0,-22,-10,-22,-22v0,-12,10,-23,22,-23v12,0,22,11,22,23v0,12,-10,22,-22,22xm174,-252v-12,0,-22,-10,-22,-22v0,-12,10,-23,22,-23v12,0,21,11,21,23v0,12,-9,22,-21,22","w":276},"\u00d7":{"d":"42,2r-25,-26r65,-65r-66,-66r26,-25r65,65r65,-65r26,26r-65,65r65,65r-26,25r-65,-65","w":214},"\u00d8":{"d":"55,12r-27,-20r21,-26v-18,-21,-29,-50,-29,-84v0,-96,101,-151,181,-104r21,-27r27,20r-21,27v19,21,31,50,31,84v0,98,-104,152,-184,104xm201,-168r-102,124v53,32,115,-3,115,-74v0,-20,-5,-36,-13,-50xm76,-69r102,-123v-53,-30,-113,4,-113,74v0,19,4,36,11,49","w":279},"\u00d9":{"d":"224,-89v0,64,-37,93,-99,93v-62,0,-98,-30,-98,-93r0,-148r43,0v8,78,-31,204,55,204v87,0,46,-127,55,-204r44,0r0,148xm112,-251r-35,-52r47,0r21,52r-33,0","w":250},"\u00da":{"d":"224,-89v0,64,-37,93,-99,93v-62,0,-98,-30,-98,-93r0,-148r43,0v8,78,-31,204,55,204v87,0,46,-127,55,-204r44,0r0,148xm107,-251r20,-52r47,0r-35,52r-32,0","w":250},"\u00db":{"d":"224,-89v0,64,-37,93,-99,93v-62,0,-98,-30,-98,-93r0,-148r43,0v8,78,-31,204,55,204v87,0,46,-127,55,-204r44,0r0,148xm73,-251r36,-52r34,0r37,52r-34,0r-20,-28r-19,28r-34,0","w":250},"\u00dc":{"d":"224,-89v0,64,-37,93,-99,93v-62,0,-98,-30,-98,-93r0,-148r43,0v8,78,-31,204,55,204v87,0,46,-127,55,-204r44,0r0,148xm92,-252v-12,0,-22,-10,-22,-22v0,-12,10,-23,22,-23v12,0,22,11,22,23v0,12,-10,22,-22,22xm161,-252v-12,0,-22,-10,-22,-22v0,-12,10,-23,22,-23v12,0,22,11,22,23v0,12,-10,22,-22,22","w":250},"\u00dd":{"d":"84,0r0,-94r-81,-143r47,0r56,105r55,-105r47,0r-81,143r0,94r-43,0xm84,-251r21,-52r47,0r-35,52r-33,0","w":210},"\u00de":{"d":"178,-121v1,45,-42,85,-106,78r0,43r-43,0r0,-237r43,0r0,38v65,-4,104,21,106,78xm132,-121v0,-31,-23,-46,-60,-42r0,85v37,2,60,-9,60,-43","w":196},"\u00df":{"d":"20,51r0,-222v0,-69,47,-84,80,-84v45,-1,85,29,81,93v-21,5,-33,12,-33,25v0,28,61,30,61,85v0,65,-90,65,-125,40r13,-31v13,8,27,13,42,13v15,0,28,-5,28,-20v0,-30,-62,-34,-62,-81v0,-24,13,-37,34,-46v0,-24,-12,-43,-38,-43v-21,0,-38,12,-38,44r0,227r-43,0","w":221},"\u00e0":{"d":"124,0r-7,-16v-30,34,-107,22,-105,-35v2,-49,50,-57,102,-57v5,-45,-54,-37,-78,-22r-14,-28v47,-29,135,-25,135,45v0,35,-3,86,3,113r-36,0xm114,-79v-26,1,-59,-1,-59,25v0,32,49,26,59,11r0,-36xm78,-191r-35,-53r47,0r21,53r-33,0"},"\u00e1":{"d":"124,0r-7,-16v-30,34,-107,22,-105,-35v2,-49,50,-57,102,-57v5,-45,-54,-37,-78,-22r-14,-28v47,-29,135,-25,135,45v0,35,-3,86,3,113r-36,0xm114,-79v-26,1,-59,-1,-59,25v0,32,49,26,59,11r0,-36xm67,-191r21,-53r46,0r-34,53r-33,0"},"\u00e2":{"d":"124,0r-7,-16v-30,34,-107,22,-105,-35v2,-49,50,-57,102,-57v5,-45,-54,-37,-78,-22r-14,-28v47,-29,135,-25,135,45v0,35,-3,86,3,113r-36,0xm114,-79v-26,1,-59,-1,-59,25v0,32,49,26,59,11r0,-36xm35,-191r36,-53r35,0r36,53r-34,0r-19,-29r-20,29r-34,0"},"\u00e3":{"d":"124,0r-7,-16v-30,34,-107,22,-105,-35v2,-49,50,-57,102,-57v5,-45,-54,-37,-78,-22r-14,-28v47,-29,135,-25,135,45v0,35,-3,86,3,113r-36,0xm114,-79v-26,1,-59,-1,-59,25v0,32,49,26,59,11r0,-36xm32,-197v-3,-26,8,-44,30,-44v21,0,36,16,47,16v7,0,8,-5,8,-14r28,0v3,26,-7,45,-29,44v-20,0,-37,-16,-48,-16v-7,0,-8,5,-8,14r-28,0"},"\u00e4":{"d":"124,0r-7,-16v-30,34,-107,22,-105,-35v2,-49,50,-57,102,-57v5,-45,-54,-37,-78,-22r-14,-28v47,-29,135,-25,135,45v0,35,-3,86,3,113r-36,0xm114,-79v-26,1,-59,-1,-59,25v0,32,49,26,59,11r0,-36xm54,-196v-12,0,-22,-10,-22,-22v0,-13,10,-22,22,-22v12,0,23,9,23,22v0,12,-11,22,-23,22xm123,-196v-12,0,-22,-10,-22,-22v0,-13,10,-22,22,-22v12,0,22,9,22,22v0,12,-10,22,-22,22"},"\u00e5":{"d":"124,0r-7,-16v-30,34,-107,22,-105,-35v2,-49,50,-57,102,-57v5,-45,-54,-37,-78,-22r-14,-28v47,-29,135,-25,135,45v0,35,-3,86,3,113r-36,0xm114,-79v-26,1,-59,-1,-59,25v0,32,49,26,59,11r0,-36xm89,-188v-25,0,-42,-13,-42,-35v0,-22,17,-35,42,-35v25,0,42,13,42,35v0,22,-17,35,-42,35xm89,-207v9,0,15,-6,15,-16v0,-10,-6,-17,-15,-17v-9,0,-15,7,-15,17v0,10,6,16,15,16"},"\u00e6":{"d":"136,-24v-27,41,-127,38,-124,-27v2,-51,51,-57,104,-54v8,-47,-55,-41,-80,-25r-14,-28v35,-22,99,-26,119,9v44,-55,139,-18,126,74r-108,0v-2,47,58,55,90,33r13,30v-38,25,-104,20,-126,-12xm55,-53v1,35,56,23,67,4v-3,-8,-5,-17,-5,-26v-27,0,-63,-4,-62,22xm159,-105r65,0v-1,-19,-10,-37,-32,-37v-21,0,-32,17,-33,37","w":280},"\u00e7":{"d":"52,72r6,-19v12,4,35,4,35,-9v0,-11,-14,-12,-30,-12r10,-31v-39,-10,-60,-44,-60,-85v0,-70,79,-112,135,-79r0,36v-34,-28,-91,-8,-91,42v0,54,52,65,87,43r13,29v-13,9,-36,16,-53,16r-5,15v18,1,30,8,30,26v7,26,-48,39,-77,28","w":161},"\u00e8":{"d":"165,-73r-109,0v-2,44,60,53,91,31r13,30v-18,11,-39,16,-60,16v-118,0,-111,-179,-10,-179v51,0,78,40,75,102xm56,-103r66,0v0,-19,-10,-39,-33,-39v-21,0,-33,18,-33,39xm80,-191r-35,-53r46,0r21,53r-32,0"},"\u00e9":{"d":"165,-73r-109,0v-2,44,60,53,91,31r13,30v-18,11,-39,16,-60,16v-118,0,-111,-179,-10,-179v51,0,78,40,75,102xm56,-103r66,0v0,-19,-10,-39,-33,-39v-21,0,-33,18,-33,39xm69,-191r21,-53r46,0r-34,53r-33,0"},"\u00ea":{"d":"165,-73r-109,0v-2,44,60,53,91,31r13,30v-18,11,-39,16,-60,16v-118,0,-111,-179,-10,-179v51,0,78,40,75,102xm56,-103r66,0v0,-19,-10,-39,-33,-39v-21,0,-33,18,-33,39xm37,-191r36,-53r35,0r36,53r-34,0r-20,-29r-19,29r-34,0"},"\u00eb":{"d":"165,-73r-109,0v-2,44,60,53,91,31r13,30v-18,11,-39,16,-60,16v-118,0,-111,-179,-10,-179v51,0,78,40,75,102xm56,-103r66,0v0,-19,-10,-39,-33,-39v-21,0,-33,18,-33,39xm56,-196v-12,0,-22,-10,-22,-22v0,-13,10,-22,22,-22v12,0,22,9,22,22v0,12,-10,22,-22,22xm125,-196v-12,0,-22,-10,-22,-22v0,-13,10,-22,22,-22v12,0,22,9,22,22v0,12,-10,22,-22,22"},"\u00ec":{"d":"32,-191r-35,-53r47,0r21,53r-33,0xm21,0r0,-170r43,0r0,170r-43,0","w":85},"\u00ed":{"d":"21,-191r21,-53r47,0r-35,53r-33,0xm21,0r0,-170r43,0r0,170r-43,0","w":85},"\u00ee":{"d":"21,0r0,-170r43,0r0,170r-43,0xm-10,-191r36,-53r34,0r36,53r-33,0r-20,-29r-20,29r-33,0","w":85},"\u00ef":{"d":"9,-196v-12,0,-22,-10,-22,-22v0,-13,10,-22,22,-22v12,0,22,9,22,22v0,12,-10,22,-22,22xm77,-196v-12,0,-22,-10,-22,-22v0,-13,10,-22,22,-22v12,0,22,9,22,22v0,12,-10,22,-22,22xm21,0r0,-170r43,0r0,170r-43,0","w":85},"\u00f0":{"d":"172,-235r-33,14v34,30,44,76,44,116v0,81,-41,109,-87,109v-50,0,-83,-36,-83,-87v0,-82,90,-115,134,-63v-5,-22,-19,-45,-42,-58r-49,23r-9,-20r31,-13v-9,-4,-27,-6,-43,-6r7,-35v32,1,59,8,78,20r42,-20xm98,-31v27,0,41,-21,41,-53v0,-32,-16,-54,-42,-54v-27,0,-40,22,-40,54v0,32,15,53,41,53","w":199},"\u00f1":{"d":"20,0r0,-170r37,0r4,19v40,-33,113,-43,113,38r0,113r-43,0r0,-99v5,-46,-45,-45,-68,-20r0,119r-43,0xm36,-197v-3,-26,8,-44,30,-44v21,0,36,16,47,16v7,0,8,-5,8,-14r28,0v3,26,-7,45,-29,44v-20,0,-37,-16,-48,-16v-7,0,-8,5,-8,14r-28,0","w":193},"\u00f2":{"d":"98,4v-51,0,-85,-39,-85,-90v0,-51,34,-89,85,-89v51,0,85,38,85,89v0,51,-34,90,-85,90xm98,-31v27,0,41,-23,41,-55v0,-31,-14,-54,-41,-54v-27,0,-41,23,-41,54v0,32,14,55,41,55xm86,-191r-35,-53r47,0r20,53r-32,0","w":195},"\u00f3":{"d":"98,4v-51,0,-85,-39,-85,-90v0,-51,34,-89,85,-89v51,0,85,38,85,89v0,51,-34,90,-85,90xm98,-31v27,0,41,-23,41,-55v0,-31,-14,-54,-41,-54v-27,0,-41,23,-41,54v0,32,14,55,41,55xm77,-191r21,-53r46,0r-34,53r-33,0","w":195},"\u00f4":{"d":"98,4v-51,0,-85,-39,-85,-90v0,-51,34,-89,85,-89v51,0,85,38,85,89v0,51,-34,90,-85,90xm98,-31v27,0,41,-23,41,-55v0,-31,-14,-54,-41,-54v-27,0,-41,23,-41,54v0,32,14,55,41,55xm44,-191r36,-53r34,0r37,53r-34,0r-20,-29r-19,29r-34,0","w":195},"\u00f5":{"d":"98,4v-51,0,-85,-39,-85,-90v0,-51,34,-89,85,-89v51,0,85,38,85,89v0,51,-34,90,-85,90xm98,-31v27,0,41,-23,41,-55v0,-31,-14,-54,-41,-54v-27,0,-41,23,-41,54v0,32,14,55,41,55xm41,-197v-3,-26,8,-44,30,-44v21,0,36,16,47,16v7,0,8,-5,8,-14r28,0v3,26,-8,44,-30,44v-20,0,-36,-16,-47,-16v-7,0,-8,5,-8,14r-28,0","w":195},"\u00f6":{"d":"98,4v-51,0,-85,-39,-85,-90v0,-51,34,-89,85,-89v51,0,85,38,85,89v0,51,-34,90,-85,90xm98,-31v27,0,41,-23,41,-55v0,-31,-14,-54,-41,-54v-27,0,-41,23,-41,54v0,32,14,55,41,55xm63,-196v-12,0,-22,-10,-22,-22v0,-13,10,-22,22,-22v12,0,22,9,22,22v0,12,-10,22,-22,22xm132,-196v-12,0,-22,-10,-22,-22v0,-13,10,-22,22,-22v12,0,22,9,22,22v0,12,-10,22,-22,22","w":195},"\u00f7":{"d":"100,-130v-12,0,-22,-9,-22,-22v0,-13,10,-22,22,-22v12,0,22,9,22,22v0,13,-10,22,-22,22xm14,-72r0,-36r170,0r0,36r-170,0xm100,-6v-12,0,-22,-9,-22,-22v0,-13,10,-22,22,-22v12,0,22,9,22,22v0,13,-10,22,-22,22","w":198},"\u00f8":{"d":"38,10r-18,-14r15,-19v-46,-51,-15,-152,63,-152v17,0,31,5,44,13r14,-17r18,14r-14,17v48,50,16,152,-62,152v-17,0,-32,-5,-45,-13xm75,-38v41,30,81,-27,60,-76xm61,-57r59,-76v-40,-30,-82,29,-59,76","w":195},"\u00f9":{"d":"63,-170v7,49,-21,134,29,137v14,0,27,-7,35,-15r0,-122r43,0r0,128v0,18,0,33,3,42r-37,0r-6,-18v-39,40,-110,25,-110,-48r0,-104r43,0xm84,-191r-35,-53r47,0r21,53r-33,0","w":192},"\u00fa":{"d":"63,-170v7,49,-21,134,29,137v14,0,27,-7,35,-15r0,-122r43,0r0,128v0,18,0,33,3,42r-37,0r-6,-18v-39,40,-110,25,-110,-48r0,-104r43,0xm75,-191r20,-53r47,0r-35,53r-32,0","w":192},"\u00fb":{"d":"63,-170v7,49,-21,134,29,137v14,0,27,-7,35,-15r0,-122r43,0r0,128v0,18,0,33,3,42r-37,0r-6,-18v-39,40,-110,25,-110,-48r0,-104r43,0xm42,-191r36,-53r35,0r36,53r-33,0r-20,-29r-20,29r-34,0","w":192},"\u00fc":{"d":"63,-170v7,49,-21,134,29,137v14,0,27,-7,35,-15r0,-122r43,0r0,128v0,18,0,33,3,42r-37,0r-6,-18v-39,40,-110,25,-110,-48r0,-104r43,0xm62,-196v-12,0,-22,-10,-22,-22v0,-13,10,-22,22,-22v12,0,22,9,22,22v0,12,-10,22,-22,22xm130,-196v-12,0,-22,-10,-22,-22v0,-13,10,-22,22,-22v12,0,22,9,22,22v0,12,-10,22,-22,22","w":192},"\u00fd":{"d":"185,-170r-65,175v-37,88,-61,88,-124,72r10,-33v38,14,56,5,74,-45r-77,-169r46,0r51,120r40,-120r45,0xm75,-191r20,-53r47,0r-35,53r-32,0","w":186},"\u00fe":{"d":"22,85r0,-340r43,0r0,83v64,-14,115,23,115,84v0,60,-51,106,-115,88r0,85r-43,0xm65,-36v38,14,70,-8,70,-50v0,-44,-33,-60,-70,-50r0,100","w":191},"\u00ff":{"d":"185,-170r-65,175v-37,88,-61,88,-124,72r10,-33v38,14,56,5,74,-45r-77,-169r46,0r51,120r40,-120r45,0xm62,-196v-12,0,-22,-10,-22,-22v0,-13,10,-22,22,-22v12,0,22,9,22,22v0,12,-10,22,-22,22xm131,-196v-12,0,-22,-10,-22,-22v0,-13,10,-22,22,-22v12,0,22,9,22,22v0,12,-10,22,-22,22","w":186},"\u207d":{"d":"51,-129v-50,-39,-49,-133,0,-172r21,17v-32,30,-33,109,0,139","w":82},"\u207e":{"d":"10,-145v34,-31,33,-109,0,-139r21,-17v50,39,49,133,0,172","w":82},"\u208d":{"d":"51,81v-50,-39,-49,-133,0,-172r21,16v-32,31,-33,109,0,140","w":82},"\u208e":{"d":"10,65v34,-31,33,-109,0,-140r21,-16v50,39,49,133,0,172","w":82},"\u215b":{"d":"65,0r149,-237r35,0r-149,237r-35,0xm66,-97r0,-107r-42,15r-11,-27v28,-8,47,-26,86,-23r0,142r-33,0xm253,3v-59,0,-72,-58,-31,-74v-36,-20,-19,-70,32,-70v53,0,66,50,33,69v47,23,23,75,-34,75xm254,-24v10,0,21,-5,21,-16v0,-19,-42,-29,-42,-1v0,11,9,17,21,17xm238,-101v0,19,33,25,33,1v0,-8,-6,-14,-16,-14v-10,0,-17,5,-17,13","w":339},"\u215c":{"d":"74,0r150,-237r35,0r-150,237r-35,0xm260,3v-59,0,-72,-58,-31,-74v-35,-20,-18,-70,32,-70v53,0,66,50,33,69v47,23,23,75,-34,75xm261,-24v10,0,21,-5,21,-16v0,-20,-42,-28,-42,-1v0,11,9,17,21,17xm245,-101v0,19,33,25,33,1v0,-8,-6,-14,-16,-14v-10,0,-17,5,-17,13xm39,-180v20,1,43,-1,42,-17v-2,-22,-36,-13,-51,-6r-8,-26v29,-16,95,-14,95,26v0,17,-11,25,-23,33v18,3,28,15,28,33v0,39,-68,53,-104,33r9,-26v20,10,58,15,58,-10v0,-17,-26,-17,-46,-16r0,-24","w":339},"\u215d":{"d":"72,0r149,-237r35,0r-149,237r-35,0xm59,-184v37,-3,62,13,61,43v8,41,-68,58,-105,37r10,-26v16,10,58,14,58,-11v0,-23,-33,-17,-57,-18r0,-77r94,0r-7,28r-54,0r0,24xm260,3v-59,0,-73,-58,-31,-74v-36,-20,-19,-70,32,-70v53,0,66,50,33,69v47,23,23,75,-34,75xm261,-24v10,0,21,-5,21,-16v0,-19,-42,-29,-42,-1v0,11,9,17,21,17xm245,-101v0,19,33,25,33,1v0,-8,-7,-14,-17,-14v-10,0,-16,5,-16,13","w":339},"\u215e":{"d":"67,0r149,-237r35,0r-149,237r-35,0xm258,3v-59,0,-72,-58,-31,-74v-36,-20,-19,-70,32,-70v53,0,66,50,33,69v47,23,23,75,-34,75xm259,-24v10,0,21,-5,21,-16v0,-19,-42,-29,-42,-1v0,11,9,17,21,17xm243,-101v0,19,33,25,33,1v0,-8,-6,-14,-16,-14v-10,0,-17,5,-17,13xm48,-97v11,-49,32,-87,51,-111r-57,0r-7,-29r109,0r0,19v-32,36,-47,71,-57,121r-39,0","w":339},"\u2153":{"d":"74,0r149,-237r35,0r-149,237r-35,0xm73,-97r0,-107r-42,15r-11,-27v28,-8,47,-26,86,-23r0,142r-33,0xm235,-82v19,1,42,-1,41,-17v-2,-22,-35,-13,-50,-6r-8,-26v29,-16,95,-14,95,26v0,17,-12,25,-24,33v18,3,29,15,29,33v0,39,-68,53,-104,33r9,-26v20,10,58,15,58,-10v0,-17,-26,-17,-46,-16r0,-24","w":339},"\u2154":{"d":"77,0r150,-237r35,0r-150,237r-35,0xm13,-97v2,-66,67,-77,67,-100v-5,-24,-36,-12,-54,-3r-8,-26v31,-21,99,-21,99,25v0,39,-52,47,-60,75r61,0r0,29r-105,0xm235,-82v19,1,42,-1,41,-17v-2,-22,-35,-13,-50,-6r-8,-26v29,-16,95,-14,95,26v0,17,-12,25,-24,33v18,3,29,15,29,33v0,39,-68,53,-104,33r9,-26v20,10,58,15,58,-10v0,-17,-26,-17,-46,-16r0,-24","w":339},"\u2070":{"d":"69,-143v-33,0,-56,-24,-56,-72v0,-47,24,-72,57,-72v33,0,57,25,57,72v0,47,-25,72,-58,72xm70,-170v15,0,20,-21,20,-45v0,-26,-6,-45,-21,-45v-15,0,-20,21,-20,44v0,26,6,46,21,46","w":139},"\u2074":{"d":"10,-175r0,-20r70,-92r32,0r0,87r19,0r0,25r-19,0r0,30r-34,0r0,-30r-68,0xm46,-200r32,0r1,-44","w":139},"\u2075":{"d":"52,-232v37,-3,62,13,61,43v8,41,-68,58,-105,37r10,-26v16,10,58,14,58,-11v0,-23,-33,-17,-57,-18r0,-77r94,0r-7,28r-54,0r0,24","w":128},"\u2076":{"d":"70,-143v-31,0,-57,-20,-57,-67v0,-56,50,-94,103,-70r-8,26v-25,-12,-52,-7,-58,24v32,-15,72,-1,72,38v0,30,-22,49,-52,49xm49,-202v-4,35,37,44,39,13v1,-22,-25,-24,-39,-13","w":132},"\u2077":{"d":"19,-145v11,-49,32,-87,51,-111r-57,0r-8,-28r109,0r0,19v-32,36,-46,70,-56,120r-39,0","w":119},"\u2078":{"d":"68,-143v-59,0,-72,-58,-31,-74v-36,-20,-19,-70,32,-70v52,0,67,50,33,69v47,23,23,75,-34,75xm69,-170v10,0,21,-5,21,-16v0,-19,-42,-29,-42,-1v0,11,9,17,21,17xm53,-247v0,19,33,25,33,1v0,-8,-7,-14,-17,-14v-10,0,-16,5,-16,13","w":139},"\u2079":{"d":"120,-219v0,64,-53,90,-106,69r9,-27v25,16,62,5,61,-25v-27,16,-74,8,-74,-36v0,-30,23,-49,53,-49v32,0,57,20,57,68xm44,-240v-1,24,30,24,41,10v4,-36,-40,-40,-41,-10","w":132},"\u2080":{"d":"69,67v-33,0,-56,-25,-56,-73v0,-47,24,-72,57,-72v33,0,57,26,57,73v0,47,-25,72,-58,72xm70,39v15,0,20,-20,20,-44v0,-26,-6,-45,-21,-45v-15,0,-20,21,-20,44v0,26,6,45,21,45","w":139},"\u2081":{"d":"63,65r0,-107r-41,15r-12,-27v28,-8,47,-26,87,-23r0,142r-34,0","w":125},"\u2082":{"d":"8,65v2,-66,67,-77,67,-100v-5,-23,-36,-12,-54,-3r-9,-26v31,-21,100,-21,100,25v0,39,-52,47,-60,75r61,0r0,29r-105,0","w":125},"\u2083":{"d":"26,-19v20,1,43,0,42,-17v-3,-22,-36,-13,-51,-6r-8,-25v28,-17,95,-15,95,25v0,17,-11,26,-23,34v18,3,28,14,28,32v0,39,-67,54,-104,34r9,-26v20,9,56,13,58,-10v0,-18,-25,-17,-46,-16r0,-25","w":125},"\u2084":{"d":"10,35r0,-21r70,-91r32,0r0,86r19,0r0,26r-19,0r0,30r-34,0r0,-30r-68,0xm46,10r32,-1r1,-44","w":139},"\u2085":{"d":"52,-23v36,-2,62,13,61,43v8,41,-67,59,-105,38r10,-27v16,10,59,14,58,-11v-1,-23,-34,-16,-57,-17r0,-78r94,0r-7,29r-54,0r0,23","w":128},"\u2086":{"d":"70,67v-31,0,-57,-20,-57,-67v0,-56,49,-95,103,-71r-8,27v-25,-12,-52,-7,-58,24v31,-17,72,-1,72,38v0,30,-22,49,-52,49xm49,7v-4,35,37,46,39,13v1,-22,-25,-24,-39,-13","w":132},"\u2087":{"d":"19,65v11,-49,32,-87,51,-111r-57,0r-8,-29r109,0r0,19v-32,36,-46,71,-56,121r-39,0","w":119},"\u2088":{"d":"68,67v-58,0,-72,-59,-31,-75v-38,-19,-17,-70,32,-70v53,0,66,50,33,70v47,22,22,75,-34,75xm69,39v10,0,21,-4,21,-15v0,-19,-42,-29,-42,-1v0,11,9,16,21,16xm53,-37v0,19,33,24,33,0v0,-8,-7,-14,-17,-14v-10,0,-16,6,-16,14","w":139},"\u2089":{"d":"120,-9v0,64,-54,91,-106,68r9,-27v25,15,62,6,61,-24v-27,16,-74,8,-74,-36v0,-30,23,-50,53,-50v32,0,57,21,57,69xm44,-31v-1,24,30,24,41,11v4,-36,-39,-41,-41,-11","w":132},"\u0139":{"d":"29,0r0,-237r43,0r0,200r84,0r0,37r-127,0xm31,-251r21,-52r46,0r-34,52r-33,0","w":162},"\u0136":{"d":"29,0r0,-237r43,0r1,101r81,-101r50,0r-95,115r101,122r-53,0r-85,-104r0,104r-43,0xm76,85r-10,-26v30,-7,33,-21,19,-40r37,0v18,34,7,59,-46,66","w":215},"\u0134":{"d":"-11,61r8,-35v25,12,55,-2,49,-31r0,-232r44,0r0,238v7,50,-52,79,-101,60xm14,-251r36,-52r34,0r37,52r-34,0r-20,-28r-19,28r-34,0","w":118},"\u0132":{"d":"29,0r0,-237r43,0r0,237r-43,0xm90,61r8,-35v25,12,55,-2,49,-31r0,-232r43,0r0,238v7,50,-52,80,-100,60","w":219},"\u012e":{"d":"29,-1r0,-236r43,0r0,237v-20,10,-31,25,-31,39v-1,14,14,15,26,11r4,23v-30,10,-66,2,-66,-29v0,-18,10,-33,24,-45","w":100},"\u0130":{"d":"29,0r0,-237r43,0r0,237r-43,0xm51,-254v-15,0,-27,-12,-27,-26v0,-14,12,-25,27,-25v15,0,26,10,26,25v0,14,-11,26,-26,26","w":100},"\u012c":{"d":"29,0r0,-237r43,0r0,237r-43,0xm73,-300r30,0v-2,31,-23,51,-53,51v-30,0,-51,-20,-53,-51r30,0v1,14,9,24,23,24v14,0,22,-10,23,-24","w":100},"\u0128":{"d":"29,0r0,-237r43,0r0,237r-43,0xm-6,-259v-3,-26,7,-45,29,-44v21,0,37,16,48,16v7,0,7,-5,7,-14r29,0v3,26,-8,44,-30,44v-20,0,-36,-16,-47,-16v-7,0,-8,5,-8,14r-28,0","w":100},"\u0126":{"d":"29,0r0,-172r-24,0r0,-33r24,0r0,-32r43,0r0,32r113,0r0,-32r44,0r0,32r23,0r0,33r-23,0r0,172r-44,0r0,-103r-113,0r0,103r-43,0xm72,-139r113,0r0,-33r-113,0r0,33","w":257},"\u0124":{"d":"29,0r0,-237r43,0r0,98r113,0r0,-98r44,0r0,237r-44,0r0,-103r-113,0r0,103r-43,0xm76,-251r36,-52r34,0r37,52r-34,0r-20,-28r-20,28r-33,0","w":257},"\u0122":{"d":"228,-115r0,100v-22,11,-54,19,-87,19v-78,0,-123,-50,-123,-118v0,-98,105,-149,199,-114r0,41v-19,-9,-40,-16,-66,-16v-57,0,-87,36,-87,86v0,66,60,100,120,77r0,-75r44,0xm107,85r-10,-26v29,-7,32,-20,19,-40r37,0v18,34,7,59,-46,66","w":253},"\u0120":{"d":"229,-115r0,100v-22,11,-53,19,-86,19v-78,0,-124,-50,-124,-118v0,-98,105,-149,199,-114r0,41v-19,-9,-40,-16,-66,-16v-57,0,-87,36,-87,86v0,66,60,100,120,77r0,-75r44,0xm135,-254v-15,0,-27,-12,-27,-26v0,-14,12,-25,27,-25v15,0,26,10,26,25v0,14,-11,26,-26,26","w":254},"\u011e":{"d":"229,-115r0,100v-22,11,-53,19,-86,19v-78,0,-124,-50,-124,-118v0,-98,105,-149,199,-114r0,41v-19,-9,-40,-16,-66,-16v-57,0,-87,36,-87,86v0,66,60,100,120,77r0,-75r44,0xm156,-300r29,0v-2,31,-23,51,-53,51v-30,0,-50,-20,-52,-51r30,0v1,14,9,24,23,24v14,0,22,-10,23,-24","w":254},"\u011c":{"d":"229,-115r0,100v-22,11,-53,19,-86,19v-78,0,-124,-50,-124,-118v0,-98,105,-149,199,-114r0,41v-19,-9,-40,-16,-66,-16v-57,0,-87,36,-87,86v0,66,60,100,120,77r0,-75r44,0xm82,-251r36,-52r34,0r37,52r-34,0r-20,-28r-19,28r-34,0","w":254},"\u0118":{"d":"29,0r0,-237r131,0r-12,36r-76,0r0,62r76,0r0,37r-76,0r0,65r88,0r0,37v-27,3,-43,25,-43,39v-1,14,14,15,26,11r4,23v-30,10,-66,1,-66,-27v0,-20,16,-35,32,-46r-84,0","w":180},"\u0116":{"d":"29,0r0,-237r131,0r-12,36r-76,0r0,62r76,0r0,37r-76,0r0,65r88,0r0,37r-131,0xm91,-254v-15,0,-27,-12,-27,-26v0,-14,12,-25,27,-25v15,0,26,10,26,25v0,14,-11,26,-26,26","w":180},"\u0114":{"d":"29,0r0,-237r131,0r-12,36r-76,0r0,62r76,0r0,37r-76,0r0,65r88,0r0,37r-131,0xm114,-300r30,0v-2,31,-23,51,-53,51v-30,0,-51,-20,-53,-51r30,0v1,14,9,24,23,24v14,0,22,-10,23,-24","w":180},"\u0112":{"d":"29,0r0,-237r131,0r-12,36r-76,0r0,62r76,0r0,37r-76,0r0,65r88,0r0,37r-131,0xm42,-253r0,-33r102,0r0,33r-102,0","w":180},"\u011a":{"d":"29,0r0,-237r131,0r-12,36r-76,0r0,62r76,0r0,37r-76,0r0,65r88,0r0,37r-131,0xm75,-251r-36,-52r34,0r20,28r19,-28r34,0r-36,52r-35,0","w":180},"\u0110":{"d":"29,0r0,-103r-26,0r0,-35r26,0r0,-99r74,0v84,0,129,47,129,117v0,72,-51,120,-133,120r-70,0xm72,-37v73,7,114,-28,114,-83v0,-60,-43,-87,-114,-81r0,63r54,0r0,35r-54,0r0,66","w":250},"\u010e":{"d":"29,0r0,-237r74,0v84,0,129,47,129,117v0,72,-51,120,-133,120r-70,0xm72,-37v73,7,114,-28,114,-83v0,-60,-43,-87,-114,-81r0,164xm91,-251r-36,-52r34,0r20,28r19,-28r34,0r-36,52r-35,0","w":250},"\u010a":{"d":"202,-49r12,34v-89,50,-195,-2,-195,-101v0,-92,99,-148,187,-112r0,40v-18,-10,-38,-15,-61,-15v-53,0,-80,40,-80,86v0,75,81,105,137,68xm131,-254v-15,0,-26,-12,-26,-26v0,-14,11,-25,26,-25v15,0,27,10,27,25v0,14,-12,26,-27,26","w":225},"\u010c":{"d":"202,-49r12,34v-89,50,-195,-2,-195,-101v0,-92,99,-148,187,-112r0,40v-18,-10,-38,-15,-61,-15v-53,0,-80,40,-80,86v0,75,81,105,137,68xm109,-251r-36,-52r34,0r20,28r19,-28r34,0r-36,52r-35,0","w":225},"\u0108":{"d":"202,-49r12,34v-89,50,-195,-2,-195,-101v0,-92,99,-148,187,-112r0,40v-18,-10,-38,-15,-61,-15v-53,0,-80,40,-80,86v0,75,81,105,137,68xm73,-251r36,-52r34,0r37,52r-34,0r-20,-28r-19,28r-34,0","w":225},"\u0106":{"d":"202,-49r12,34v-89,50,-195,-2,-195,-101v0,-92,99,-148,187,-112r0,40v-18,-10,-38,-15,-61,-15v-53,0,-80,40,-80,86v0,75,81,105,137,68xm104,-251r21,-52r46,0r-35,52r-32,0","w":225},"\u01fc":{"d":"3,0r128,-237r150,0r-12,36r-91,0r11,62r81,0r0,37r-75,0r11,65r76,0r0,37r-113,0r-10,-59r-79,0r-32,59r-45,0xm100,-95r53,0r-13,-83xm158,-251r21,-52r47,0r-35,52r-33,0","w":302},"\u0104":{"d":"3,0r92,-238r34,0r96,238v-28,8,-45,25,-45,39v-1,14,14,15,26,11r4,23v-30,10,-66,1,-66,-27v0,-21,17,-36,33,-47r-22,-58r-85,0r-22,59r-45,0xm83,-95r58,0r-29,-84v-5,20,-20,61,-29,84","w":227},"\u01fa":{"d":"3,0r91,-235v-35,-9,-32,-65,8,-67r16,-41r47,0r-30,45v27,11,23,55,-5,62r95,236r-47,0r-23,-59r-85,0r-22,59r-45,0xm83,-95r58,0r-29,-84v-6,21,-21,60,-29,84xm112,-251v9,0,14,-7,14,-17v0,-10,-5,-16,-14,-16v-9,0,-15,6,-15,16v0,10,6,17,15,17","w":227},"\u0102":{"d":"3,0r92,-238r34,0r96,238r-47,0r-23,-59r-85,0r-22,59r-45,0xm83,-95r58,0r-29,-84v-5,20,-20,61,-29,84xm135,-300r30,0v-2,31,-23,51,-53,51v-30,0,-51,-20,-53,-51r30,0v1,14,9,24,23,24v14,0,22,-10,23,-24","w":227},"\u0100":{"d":"3,0r92,-238r34,0r96,238r-47,0r-23,-59r-85,0r-22,59r-45,0xm83,-95r58,0r-29,-84v-5,20,-20,61,-29,84xm61,-253r0,-33r102,0r0,33r-102,0","w":227},"\u0175":{"d":"64,1r-61,-171r43,0r37,115r36,-115r33,0r38,115r36,-115r42,0r-63,171r-31,0r-39,-115r-38,115r-33,0xm82,-191r36,-53r35,0r36,53r-34,0r-20,-29r-19,29r-34,0","w":269},"\u1e83":{"d":"64,1r-61,-171r43,0r37,115r36,-115r33,0r38,115r36,-115r42,0r-63,171r-31,0r-39,-115r-38,115r-33,0xm114,-191r21,-53r46,0r-34,53r-33,0","w":269},"\u1e81":{"d":"64,1r-61,-171r43,0r37,115r36,-115r33,0r38,115r36,-115r42,0r-63,171r-31,0r-39,-115r-38,115r-33,0xm125,-191r-35,-53r46,0r21,53r-32,0","w":269},"\u0173":{"d":"63,-170v7,49,-21,134,29,137v14,0,27,-7,35,-15r0,-122r43,0r0,123v0,24,0,38,3,47v-21,10,-36,24,-36,39v0,14,14,15,26,11r4,23v-29,10,-65,1,-65,-27v0,-22,18,-37,34,-47r-6,-17v-39,40,-110,25,-110,-48r0,-104r43,0","w":192},"\u0171":{"d":"63,-170v7,49,-21,134,29,137v14,0,27,-7,35,-15r0,-122r43,0r0,128v0,18,0,33,3,42r-37,0r-6,-18v-39,40,-110,25,-110,-48r0,-104r43,0xm46,-191r21,-53r47,0r-35,53r-33,0xm109,-191r21,-53r46,0r-35,53r-32,0","w":192},"\u016f":{"d":"63,-170v7,49,-21,134,29,137v14,0,27,-7,35,-15r0,-122r43,0r0,128v0,18,0,33,3,42r-37,0r-6,-18v-39,40,-110,25,-110,-48r0,-104r43,0xm96,-188v-25,0,-42,-13,-42,-35v0,-22,17,-35,42,-35v25,0,42,13,42,35v0,22,-17,35,-42,35xm96,-207v9,0,15,-6,15,-16v0,-10,-6,-17,-15,-17v-9,0,-15,7,-15,17v0,10,6,16,15,16","w":192},"\u016d":{"d":"63,-170v7,49,-21,134,29,137v14,0,27,-7,35,-15r0,-122r43,0r0,128v0,18,0,33,3,42r-37,0r-6,-18v-39,40,-110,25,-110,-48r0,-104r43,0xm119,-245r29,0v-2,31,-23,50,-53,50v-30,0,-50,-19,-52,-50r30,0v1,14,9,24,23,24v14,0,22,-10,23,-24","w":192},"\u016b":{"d":"63,-170v7,49,-21,134,29,137v14,0,27,-7,35,-15r0,-122r43,0r0,128v0,18,0,33,3,42r-37,0r-6,-18v-39,40,-110,25,-110,-48r0,-104r43,0xm45,-205r0,-32r102,0r0,32r-102,0","w":192},"\u0169":{"d":"63,-170v7,49,-21,134,29,137v14,0,27,-7,35,-15r0,-122r43,0r0,128v0,18,0,33,3,42r-37,0r-6,-18v-39,40,-110,25,-110,-48r0,-104r43,0xm40,-197v-3,-26,7,-45,29,-44v21,0,36,16,47,16v7,0,8,-5,8,-14r28,0v3,26,-7,45,-29,44v-20,0,-36,-16,-47,-16v-7,0,-8,5,-8,14r-28,0","w":192},"\u0167":{"d":"6,-73r0,-32r30,0r0,-32r-30,0r0,-33r30,0r0,-40r43,-12r0,52r52,0r-11,33r-41,0r0,32r34,0r0,32r-34,0v-1,19,-1,42,17,42v10,0,20,-5,26,-9r13,30v-34,24,-102,18,-99,-32r0,-31r-30,0","w":138},"\u0163":{"d":"135,-10v-32,23,-99,19,-99,-32r0,-95r-30,0r0,-33r30,0r0,-40r43,-12r0,52r52,0r-11,33r-41,0r0,84v-2,31,29,23,43,14xm43,85r-10,-26v29,-7,32,-20,19,-40r37,0v18,34,7,59,-46,66","w":138},"\u1e85":{"d":"64,1r-61,-171r43,0r37,115r36,-115r33,0r38,115r36,-115r42,0r-63,171r-31,0r-39,-115r-38,115r-33,0xm101,-196v-12,0,-22,-10,-22,-22v0,-13,10,-22,22,-22v12,0,22,9,22,22v0,12,-10,22,-22,22xm170,-196v-12,0,-22,-10,-22,-22v0,-13,10,-22,22,-22v12,0,22,9,22,22v0,12,-10,22,-22,22","w":269},"\u1ef3":{"d":"185,-170r-65,175v-37,88,-61,88,-124,72r10,-33v38,14,56,5,74,-45r-77,-169r46,0r51,120r40,-120r45,0xm85,-191r-35,-53r47,0r21,53r-33,0","w":186},"\u0177":{"d":"185,-170r-65,175v-37,88,-61,88,-124,72r10,-33v38,14,56,5,74,-45r-77,-169r46,0r51,120r40,-120r45,0xm43,-191r36,-53r34,0r37,53r-34,0r-20,-29r-19,29r-34,0","w":186},"\u017a":{"d":"5,0r79,-137r-65,0r-9,-33r137,0r-78,137r76,0r0,33r-140,0xm57,-191r20,-53r47,0r-35,53r-32,0","w":149},"\u017c":{"d":"5,0r79,-137r-65,0r-9,-33r137,0r-78,137r76,0r0,33r-140,0xm78,-198v-15,0,-26,-12,-26,-26v0,-14,11,-25,26,-25v15,0,27,10,27,25v0,14,-12,26,-27,26","w":149},"\u014b":{"d":"82,64r8,-35v21,9,41,6,41,-25r0,-103v5,-46,-45,-45,-68,-20r0,119r-43,0r0,-170r37,0r4,19v40,-33,113,-43,113,38v0,87,20,216,-92,177","w":193},"\u0165":{"d":"135,-10v-32,23,-99,19,-99,-32r0,-95r-30,0r0,-33r30,0r0,-40r43,-12r0,52r52,0r-11,33r-41,0r0,84v-2,31,29,23,43,14xm94,-185r13,-70r43,0r-23,70r-33,0","w":138},"\u0219":{"d":"8,-13r13,-31v18,14,76,26,76,-4v0,-29,-80,-18,-80,-75v0,-49,72,-63,115,-43r0,36v-19,-9,-67,-22,-73,5v0,27,80,17,80,76v0,62,-96,62,-131,36xm46,85r-10,-26v30,-7,33,-21,19,-40r37,0v18,34,7,59,-46,66","w":151},"\u015f":{"d":"33,72r6,-19v12,4,34,4,34,-9v0,-11,-12,-12,-29,-12r9,-29v-19,-2,-34,-9,-45,-16r13,-31v18,14,76,26,76,-4v0,-29,-80,-18,-80,-75v0,-49,72,-63,115,-43r0,36v-19,-9,-67,-22,-73,5v0,27,80,17,80,76v0,33,-24,49,-54,52r-5,15v18,1,30,8,30,26v7,26,-48,39,-77,28","w":151},"\u015d":{"d":"8,-13r13,-31v18,14,76,26,76,-4v0,-29,-80,-18,-80,-75v0,-49,72,-63,115,-43r0,36v-19,-9,-67,-22,-73,5v0,27,80,17,80,76v0,62,-96,62,-131,36xm23,-191r36,-53r35,0r36,53r-34,0r-19,-29r-20,29r-34,0","w":151},"\u015b":{"d":"8,-13r13,-31v18,14,76,26,76,-4v0,-29,-80,-18,-80,-75v0,-49,72,-63,115,-43r0,36v-19,-9,-67,-22,-73,5v0,27,80,17,80,76v0,62,-96,62,-131,36xm59,-191r21,-53r46,0r-35,53r-32,0","w":151},"\u01ff":{"d":"77,-191r21,-53r46,0r-34,53r-33,0xm38,10r-18,-14r15,-19v-46,-51,-15,-152,63,-152v17,0,31,5,44,13r14,-17r18,14r-14,17v48,50,16,152,-62,152v-17,0,-32,-5,-45,-13xm75,-38v41,30,81,-27,60,-76xm61,-57r59,-76v-40,-30,-82,29,-59,76","w":195},"\u0155":{"d":"20,0r0,-170r36,0r5,19v21,-21,44,-32,71,-17r-15,37v-24,-12,-32,-6,-54,11r0,120r-43,0xm48,-191r21,-53r47,0r-35,53r-33,0","w":131},"\u0159":{"d":"20,0r0,-170r37,0r4,19v21,-21,44,-32,71,-17r-15,37v-23,-12,-32,-5,-54,11r0,120r-43,0xm52,-191r-37,-53r35,0r19,28r20,-28r33,0r-36,53r-34,0","w":131},"\u0157":{"d":"20,0r0,-170r36,0r5,19v21,-21,44,-32,71,-17r-15,37v-24,-12,-32,-6,-54,11r0,120r-43,0xm17,85r-10,-26v29,-7,32,-20,19,-40r37,0v18,34,7,59,-46,66","w":131},"\u0151":{"d":"98,4v-51,0,-85,-39,-85,-90v0,-51,34,-89,85,-89v51,0,85,38,85,89v0,51,-34,90,-85,90xm98,-31v27,0,41,-23,41,-55v0,-31,-14,-54,-41,-54v-27,0,-41,23,-41,54v0,32,14,55,41,55xm54,-191r21,-53r46,0r-35,53r-32,0xm116,-191r21,-53r47,0r-35,53r-33,0","w":195},"\u014f":{"d":"98,4v-51,0,-85,-39,-85,-90v0,-51,34,-89,85,-89v51,0,85,38,85,89v0,51,-34,90,-85,90xm98,-31v27,0,41,-23,41,-55v0,-31,-14,-54,-41,-54v-27,0,-41,23,-41,54v0,32,14,55,41,55xm121,-245r29,0v-2,31,-23,50,-53,50v-30,0,-50,-19,-52,-50r30,0v1,14,9,24,23,24v14,0,22,-10,23,-24","w":195},"\u014d":{"d":"98,4v-51,0,-85,-39,-85,-90v0,-51,34,-89,85,-89v51,0,85,38,85,89v0,51,-34,90,-85,90xm98,-31v27,0,41,-23,41,-55v0,-31,-14,-54,-41,-54v-27,0,-41,23,-41,54v0,32,14,55,41,55xm46,-205r0,-32r103,0r0,32r-103,0","w":195},"\u013d":{"d":"29,0r0,-237r43,0r0,200r84,0r0,37r-127,0xm97,-185r13,-70r42,0r-23,70r-32,0","w":162},"\u014e":{"d":"138,4v-70,0,-119,-49,-119,-122v0,-72,49,-121,119,-121v70,0,120,49,120,121v0,73,-51,122,-120,122xm138,-33v44,0,74,-31,74,-85v0,-53,-29,-85,-74,-85v-44,0,-73,31,-73,85v0,54,29,85,73,85xm162,-300r30,0v-2,31,-23,51,-53,51v-30,0,-51,-20,-53,-51r30,0v1,14,9,24,23,24v14,0,22,-10,23,-24","w":276},"\u013b":{"d":"29,0r0,-237r43,0r0,200r84,0r0,37r-127,0xm61,85r-10,-26v29,-7,32,-20,19,-40r37,0v18,34,7,59,-46,66","w":162},"\u0150":{"d":"138,4v-70,0,-119,-49,-119,-122v0,-72,49,-121,119,-121v70,0,120,49,120,121v0,73,-51,122,-120,122xm138,-33v44,0,74,-31,74,-85v0,-53,-29,-85,-74,-85v-44,0,-73,31,-73,85v0,54,29,85,73,85xm93,-251r21,-52r47,0r-35,52r-33,0xm155,-251r21,-52r47,0r-35,52r-33,0","w":276},"\u01fe":{"d":"55,12r-27,-20r21,-26v-18,-21,-29,-50,-29,-84v0,-96,101,-151,181,-104r21,-27r27,20r-21,27v19,21,31,50,31,84v0,98,-104,152,-184,104xm201,-168r-102,124v53,32,115,-3,115,-74v0,-20,-5,-36,-13,-50xm76,-69r102,-123v-53,-30,-113,4,-113,74v0,19,4,36,11,49xm121,-251r21,-52r47,0r-35,52r-33,0","w":279},"\u0154":{"d":"94,-237v93,-13,115,108,39,129v22,17,51,78,69,108r-49,0v-16,-25,-41,-80,-60,-93r-21,0r0,93r-43,0r0,-237r65,0xm134,-165v0,-30,-26,-40,-62,-37r0,74v35,2,63,-4,62,-37xm73,-251r21,-52r46,0r-35,52r-32,0","w":212},"\u0158":{"d":"94,-237v93,-13,115,108,39,129v22,17,51,78,69,108r-49,0v-16,-25,-41,-80,-60,-93r-21,0r0,93r-43,0r0,-237r65,0xm134,-165v0,-30,-26,-40,-62,-37r0,74v35,2,63,-4,62,-37xm77,-251r-36,-52r34,0r20,28r19,-28r34,0r-36,52r-35,0","w":212},"\u0156":{"d":"94,-237v93,-13,115,108,39,129v22,17,51,78,69,108r-49,0v-16,-25,-41,-80,-60,-93r-21,0r0,93r-43,0r0,-237r65,0xm134,-165v0,-30,-26,-40,-62,-37r0,74v35,2,63,-4,62,-37xm78,85r-10,-26v29,-7,32,-20,19,-40r37,0v18,34,7,59,-46,66","w":212},"\u015a":{"d":"17,-17r17,-33v22,18,93,32,93,-11v0,-46,-102,-41,-102,-113v0,-35,28,-65,77,-65v24,0,45,5,58,11r0,40v-19,-10,-38,-15,-57,-15v-17,0,-32,7,-32,26v0,44,103,38,103,113v0,71,-110,85,-157,47xm78,-251r21,-52r46,0r-34,52r-33,0","w":190},"\u015c":{"d":"17,-17r17,-33v22,18,93,32,93,-11v0,-46,-102,-41,-102,-113v0,-35,28,-65,77,-65v24,0,45,5,58,11r0,40v-19,-10,-38,-15,-57,-15v-17,0,-32,7,-32,26v0,44,103,38,103,113v0,71,-110,85,-157,47xm43,-251r36,-52r35,0r36,52r-34,0r-20,-28r-19,28r-34,0","w":190},"\u015e":{"d":"53,72r6,-19v12,4,34,4,34,-9v0,-10,-11,-12,-29,-12r9,-29v-22,-2,-42,-10,-56,-20r17,-33v22,18,93,32,93,-11v0,-46,-102,-41,-102,-113v0,-35,28,-65,77,-65v24,0,45,5,58,11r0,40v-19,-10,-38,-15,-57,-15v-17,0,-32,7,-32,26v0,44,103,38,103,113v0,38,-30,62,-70,67r-4,15v18,1,30,8,30,26v7,26,-47,39,-77,28","w":189},"\u0218":{"d":"17,-17r17,-33v22,18,93,32,93,-11v0,-46,-102,-41,-102,-113v0,-35,28,-65,77,-65v24,0,45,5,58,11r0,40v-19,-10,-38,-15,-57,-15v-17,0,-32,7,-32,26v0,44,103,38,103,113v0,71,-110,85,-157,47xm64,85r-11,-26v29,-7,33,-20,20,-40r36,0v19,33,9,60,-45,66","w":190},"\u0164":{"d":"74,0r0,-201r-69,0r0,-36r188,0r-12,36r-64,0r0,201r-43,0xm79,-251r-36,-52r34,0r20,28r19,-28r34,0r-36,52r-35,0","w":192},"\u013f":{"d":"29,0r0,-237r43,0r0,200r84,0r0,37r-127,0xm130,-102v-13,0,-23,-11,-23,-25v0,-14,10,-24,23,-24v13,0,24,10,24,24v0,14,-11,25,-24,25","w":162},"\u0143":{"d":"241,0r-39,0r-131,-171r1,171r-43,0r0,-237r43,0r126,166r-1,-166r44,0r0,237xm115,-251r21,-52r46,0r-34,52r-33,0","w":269},"\u0162":{"d":"74,0r0,-201r-69,0r0,-36r188,0r-12,36r-64,0r0,201r-43,0xm69,85r-11,-26v29,-7,33,-20,20,-40r36,0v19,33,9,60,-45,66","w":192},"\u0166":{"d":"74,0r0,-94r-42,0r0,-35r42,0r0,-72r-69,0r0,-36r188,0r-12,36r-64,0r0,72r43,0r0,35r-43,0r0,94r-43,0","w":192},"\u0168":{"d":"224,-89v0,64,-37,93,-99,93v-62,0,-98,-30,-98,-93r0,-148r43,0v8,78,-31,204,55,204v87,0,46,-127,55,-204r44,0r0,148xm69,-259v-3,-26,8,-44,30,-44v21,0,36,16,47,16v7,0,8,-5,8,-14r28,0v3,26,-7,45,-29,44v-20,0,-37,-16,-48,-16v-7,0,-7,5,-7,14r-29,0","w":250},"\u016a":{"d":"224,-89v0,64,-37,93,-99,93v-62,0,-98,-30,-98,-93r0,-148r43,0v8,78,-31,204,55,204v87,0,46,-127,55,-204r44,0r0,148xm75,-253r0,-33r102,0r0,33r-102,0","w":250},"\u016c":{"d":"224,-89v0,64,-37,93,-99,93v-62,0,-98,-30,-98,-93r0,-148r43,0v8,78,-31,204,55,204v87,0,46,-127,55,-204r44,0r0,148xm149,-300r30,0v-2,31,-23,51,-53,51v-30,0,-51,-20,-53,-51r30,0v1,14,9,24,23,24v14,0,22,-10,23,-24","w":250},"\u016e":{"d":"224,-89v0,64,-37,93,-99,93v-62,0,-98,-30,-98,-93r0,-148r43,0v8,78,-31,204,55,204v87,0,46,-127,55,-204r44,0r0,148xm126,-235v-25,0,-42,-14,-42,-35v0,-22,17,-35,42,-35v25,0,42,13,42,35v0,21,-17,35,-42,35xm126,-254v9,0,15,-6,15,-16v0,-10,-6,-17,-15,-17v-9,0,-14,7,-14,17v0,10,5,16,14,16","w":250},"\u0170":{"d":"224,-89v0,64,-37,93,-99,93v-62,0,-98,-30,-98,-93r0,-148r43,0v8,78,-31,204,55,204v87,0,46,-127,55,-204r44,0r0,148xm76,-251r21,-52r47,0r-35,52r-33,0xm138,-251r21,-52r47,0r-35,52r-33,0","w":250},"\u0172":{"d":"125,-33v87,0,46,-127,55,-204r44,0v-7,88,25,203,-48,232v-20,8,-42,27,-42,44v0,14,14,15,26,11r5,23v-30,10,-66,2,-66,-27v0,-18,12,-32,26,-42v-62,0,-98,-30,-98,-93r0,-148r43,0v8,78,-31,204,55,204","w":250},"\u1e80":{"d":"86,1r-83,-238r48,0r56,176r45,-135r-15,-41r44,0r60,176r52,-176r44,0r-80,238r-36,0r-50,-140r-49,140r-36,0xm155,-251r-35,-52r47,0r21,52r-33,0","w":339},"\u1e82":{"d":"86,1r-83,-238r48,0r56,176r45,-135r-15,-41r44,0r60,176r52,-176r44,0r-80,238r-36,0r-50,-140r-49,140r-36,0xm150,-251r21,-52r46,0r-34,52r-33,0","w":339},"\u0174":{"d":"86,1r-83,-238r48,0r56,176r45,-135r-15,-41r44,0r60,176r52,-176r44,0r-80,238r-36,0r-50,-140r-49,140r-36,0xm118,-251r36,-52r35,0r36,52r-34,0r-20,-28r-19,28r-34,0","w":339},"\u1e84":{"d":"86,1r-83,-238r48,0r56,176r45,-135r-15,-41r44,0r60,176r52,-176r44,0r-80,238r-36,0r-50,-140r-49,140r-36,0xm137,-252v-12,0,-22,-10,-22,-22v0,-12,10,-23,22,-23v12,0,22,11,22,23v0,12,-10,22,-22,22xm206,-252v-12,0,-22,-10,-22,-22v0,-12,10,-23,22,-23v12,0,22,11,22,23v0,12,-10,22,-22,22","w":339},"\u0147":{"d":"241,0r-39,0r-131,-171r1,171r-43,0r0,-237r43,0r126,166r-1,-166r44,0r0,237xm118,-251r-36,-52r34,0r20,28r20,-28r33,0r-36,52r-35,0","w":269},"\u1ef2":{"d":"84,0r0,-94r-81,-143r47,0r56,105r55,-105r47,0r-81,143r0,94r-43,0xm95,-251r-35,-52r47,0r21,52r-33,0","w":210},"\u0176":{"d":"84,0r0,-94r-81,-143r47,0r56,105r55,-105r47,0r-81,143r0,94r-43,0xm53,-251r36,-52r34,0r36,52r-33,0r-20,-28r-20,28r-33,0","w":210},"\u0145":{"d":"241,0r-39,0r-131,-171r1,171r-43,0r0,-237r43,0r126,166r-1,-166r44,0r0,237xm108,85r-10,-26v30,-7,33,-21,19,-40r37,0v18,34,7,59,-46,66","w":269},"\u0179":{"d":"9,0r118,-201r-101,0r-11,-36r181,0r-116,200r117,0r0,37r-188,0xm85,-251r21,-52r47,0r-35,52r-33,0","w":205},"\u017b":{"d":"9,0r118,-201r-101,0r-11,-36r181,0r-116,200r117,0r0,37r-188,0xm107,-254v-15,0,-27,-12,-27,-26v0,-14,12,-25,27,-25v15,0,26,10,26,25v0,14,-11,26,-26,26","w":205},"\u014a":{"d":"29,0r0,-237r43,0r128,166r-1,-166r44,0r0,244v5,54,-51,77,-99,59r9,-35v26,13,54,-1,46,-36r-128,-166r1,171r-43,0","w":271},"\u0101":{"d":"124,0r-7,-16v-30,34,-107,22,-105,-35v2,-49,50,-57,102,-57v5,-45,-54,-37,-78,-22r-14,-28v47,-29,135,-25,135,45v0,35,-3,86,3,113r-36,0xm114,-79v-26,1,-59,-1,-59,25v0,32,49,26,59,11r0,-36xm37,-205r0,-32r103,0r0,32r-103,0"},"\u0103":{"d":"124,0r-7,-16v-30,34,-107,22,-105,-35v2,-49,50,-57,102,-57v5,-45,-54,-37,-78,-22r-14,-28v47,-29,135,-25,135,45v0,35,-3,86,3,113r-36,0xm114,-79v-26,1,-59,-1,-59,25v0,32,49,26,59,11r0,-36xm112,-245r29,0v-2,31,-22,50,-52,50v-30,0,-51,-19,-53,-50r30,0v1,14,9,24,23,24v14,0,22,-10,23,-24"},"\u01fb":{"d":"89,-186v-48,5,-57,-64,-12,-69r19,-48r47,0r-34,51v36,12,25,71,-20,66xm89,-204v9,0,15,-7,15,-17v0,-10,-6,-16,-15,-16v-9,0,-15,6,-15,16v0,10,6,17,15,17xm117,-16v-30,34,-107,22,-105,-35v2,-49,50,-57,102,-57v5,-45,-54,-37,-78,-22r-14,-28v47,-29,135,-25,135,45v0,35,-3,85,3,113r-36,0xm114,-79v-26,1,-59,-1,-59,25v0,32,49,26,59,11r0,-36"},"\u0105":{"d":"160,0v-21,10,-35,24,-35,39v-1,13,13,15,25,11r6,23v-30,10,-67,2,-67,-27v0,-23,20,-37,34,-47r-6,-15v-30,34,-107,22,-105,-35v2,-49,50,-57,102,-57v5,-45,-54,-37,-78,-22r-14,-28v47,-29,135,-25,135,45v0,35,-3,85,3,113xm114,-79v-26,1,-59,-1,-59,25v0,32,49,26,59,11r0,-36"},"\u01fd":{"d":"136,-24v-27,41,-127,38,-124,-27v2,-51,51,-57,104,-54v8,-47,-55,-41,-80,-25r-14,-28v35,-22,99,-26,119,9v44,-55,139,-18,126,74r-108,0v-2,47,58,55,90,33r13,30v-38,25,-104,20,-126,-12xm55,-53v1,35,56,23,67,4v-3,-8,-5,-17,-5,-26v-27,0,-63,-4,-62,22xm159,-105r65,0v-1,-19,-10,-37,-32,-37v-21,0,-32,17,-33,37xm123,-191r21,-53r47,0r-35,53r-33,0","w":279},"\u0107":{"d":"99,4v-55,0,-86,-39,-86,-88v0,-70,79,-112,135,-79r0,36v-34,-28,-91,-8,-91,42v0,54,52,65,87,43r13,29v-14,9,-35,17,-58,17xm69,-191r21,-53r47,0r-35,53r-33,0","w":161},"\u0109":{"d":"99,4v-55,0,-86,-39,-86,-88v0,-70,79,-112,135,-79r0,36v-34,-28,-91,-8,-91,42v0,54,52,65,87,43r13,29v-14,9,-35,17,-58,17xm38,-191r36,-53r34,0r37,53r-34,0r-20,-29r-19,29r-34,0","w":161},"\u014c":{"d":"138,4v-70,0,-119,-49,-119,-122v0,-72,49,-121,119,-121v70,0,120,49,120,121v0,73,-51,122,-120,122xm138,-33v44,0,74,-31,74,-85v0,-53,-29,-85,-74,-85v-44,0,-73,31,-73,85v0,54,29,85,73,85xm88,-253r0,-33r102,0r0,33r-102,0","w":276},"\u010d":{"d":"99,4v-55,0,-86,-39,-86,-88v0,-70,79,-112,135,-79r0,36v-34,-28,-91,-8,-91,42v0,54,52,65,87,43r13,29v-14,9,-35,17,-58,17xm74,-191r-36,-53r34,0r20,28r19,-28r34,0r-36,53r-35,0","w":161},"\u010b":{"d":"99,4v-55,0,-86,-39,-86,-88v0,-70,79,-112,135,-79r0,36v-34,-28,-91,-8,-91,42v0,54,52,65,87,43r13,29v-14,9,-35,17,-58,17xm91,-198v-15,0,-26,-12,-26,-26v0,-14,11,-25,26,-25v15,0,27,10,27,25v0,14,-12,26,-27,26","w":161},"\u010f":{"d":"172,-9v-67,31,-159,6,-159,-75v0,-61,52,-102,116,-88r0,-83r43,0r0,246xm57,-84v0,40,34,60,72,49r0,-102v-39,-9,-72,10,-72,53xm185,-185r13,-70r42,0r-23,70r-32,0","w":196},"\u0111":{"d":"172,-10v-61,31,-159,11,-159,-74v0,-61,50,-99,116,-88r0,-26r-48,0r0,-32r48,0r0,-25r43,0r0,25r20,0r0,32r-20,0r0,188xm55,-86v0,38,34,63,74,51r0,-103v-40,-9,-74,9,-74,52","w":196},"\u011b":{"d":"165,-73r-109,0v-2,44,60,53,91,31r13,30v-18,11,-39,16,-60,16v-118,0,-111,-179,-10,-179v51,0,78,40,75,102xm56,-103r66,0v0,-19,-10,-39,-33,-39v-21,0,-33,18,-33,39xm73,-191r-36,-53r34,0r20,28r20,-28r33,0r-36,53r-35,0"},"\u0113":{"d":"165,-73r-109,0v-2,44,60,53,91,31r13,30v-18,11,-39,16,-60,16v-118,0,-111,-179,-10,-179v51,0,78,40,75,102xm56,-103r66,0v0,-19,-10,-39,-33,-39v-21,0,-33,18,-33,39xm39,-205r0,-32r103,0r0,32r-103,0"},"\u0115":{"d":"165,-73r-109,0v-2,44,60,53,91,31r13,30v-18,11,-39,16,-60,16v-118,0,-111,-179,-10,-179v51,0,78,40,75,102xm56,-103r66,0v0,-19,-10,-39,-33,-39v-21,0,-33,18,-33,39xm114,-245r29,0v-2,31,-23,50,-53,50v-30,0,-50,-19,-52,-50r30,0v1,14,9,24,23,24v14,0,22,-10,23,-24"},"\u0117":{"d":"165,-73r-109,0v-2,44,60,53,91,31r13,30v-18,11,-39,16,-60,16v-118,0,-111,-179,-10,-179v51,0,78,40,75,102xm56,-103r66,0v0,-19,-10,-39,-33,-39v-21,0,-33,18,-33,39xm91,-198v-15,0,-27,-12,-27,-26v0,-14,12,-25,27,-25v15,0,26,10,26,25v0,14,-11,26,-26,26"},"\u0119":{"d":"111,77v-52,0,-40,-57,-11,-74v-59,4,-87,-43,-87,-88v0,-51,27,-90,76,-90v51,0,79,40,76,102r-109,0v-2,44,60,53,91,31r13,30v-22,12,-51,31,-51,51v-1,14,14,15,26,11r5,23v-10,3,-21,4,-29,4xm55,-103r66,0v-1,-19,-9,-39,-32,-39v-21,0,-34,18,-34,39"},"\u011d":{"d":"84,85v-79,0,-105,-64,-48,-91v-20,-14,-13,-38,9,-53v-48,-30,-33,-116,41,-116v18,0,29,8,38,7v9,-11,30,-17,53,-14r-9,31v-9,-3,-17,-3,-25,1v41,47,-7,122,-76,101v-29,54,107,6,107,78v0,31,-31,56,-90,56xm90,55v26,0,43,-8,43,-21v0,-24,-53,-20,-76,-29v-24,18,-11,50,33,50xm87,-79v17,0,30,-10,30,-31v0,-17,-11,-32,-30,-32v-17,0,-30,10,-30,31v0,17,11,32,30,32xm34,-191r36,-53r35,0r36,53r-34,0r-20,-29r-19,29r-34,0","w":181},"\u011f":{"d":"84,85v-79,0,-105,-64,-48,-91v-20,-14,-13,-38,9,-53v-48,-30,-33,-116,41,-116v18,0,29,8,38,7v9,-11,30,-17,53,-14r-9,31v-9,-3,-17,-3,-25,1v41,47,-7,122,-76,101v-29,54,107,6,107,78v0,31,-31,56,-90,56xm90,55v26,0,43,-8,43,-21v0,-24,-53,-20,-76,-29v-24,18,-11,50,33,50xm87,-79v17,0,30,-10,30,-31v0,-17,-11,-32,-30,-32v-17,0,-30,10,-30,31v0,17,11,32,30,32xm111,-245r29,0v-2,31,-23,50,-53,50v-30,0,-50,-19,-52,-50r30,0v1,14,9,24,23,24v14,0,22,-10,23,-24","w":181},"\u0121":{"d":"84,85v-79,0,-105,-64,-48,-91v-20,-14,-13,-38,9,-53v-48,-30,-33,-116,41,-116v18,0,29,8,38,7v9,-11,30,-17,53,-14r-9,31v-9,-3,-17,-3,-25,1v41,47,-7,122,-76,101v-29,54,107,6,107,78v0,31,-31,56,-90,56xm90,55v26,0,43,-8,43,-21v0,-24,-53,-20,-76,-29v-24,18,-11,50,33,50xm87,-79v17,0,30,-10,30,-31v0,-17,-11,-32,-30,-32v-17,0,-30,10,-30,31v0,17,11,32,30,32xm88,-198v-15,0,-27,-12,-27,-26v0,-14,12,-25,27,-25v15,0,26,10,26,25v0,14,-11,26,-26,26","w":181},"\u0123":{"d":"105,-191r-37,0v-18,-34,-7,-60,46,-67r10,26v-29,7,-32,21,-19,41xm84,85v-79,0,-105,-64,-48,-91v-20,-14,-13,-38,9,-53v-48,-30,-33,-116,41,-116v18,0,29,8,38,7v9,-11,30,-17,53,-14r-9,31v-9,-3,-17,-3,-25,1v41,47,-7,122,-76,101v-29,54,107,6,107,78v0,31,-31,56,-90,56xm90,55v26,0,43,-8,43,-21v0,-24,-53,-20,-76,-29v-24,18,-11,50,33,50xm87,-79v17,0,30,-10,30,-31v0,-17,-11,-32,-30,-32v-17,0,-30,10,-30,31v0,17,11,32,30,32","w":181},"\u0125":{"d":"22,0r0,-255r43,0r0,103v37,-32,111,-41,111,39r0,113r-43,0r0,-99v5,-47,-44,-44,-68,-20r0,119r-43,0xm-10,-261r36,-53r35,0r36,53r-34,0r-19,-29r-20,29r-34,0","w":195},"\u0127":{"d":"20,0r0,-196r-21,0r0,-33r21,0r0,-26r43,0r0,26r45,0r0,33r-45,0r0,44v37,-32,111,-40,111,39r0,113r-43,0r0,-99v5,-46,-45,-45,-68,-20r0,119r-43,0","w":193},"\u0129":{"d":"-13,-197v-3,-26,7,-45,29,-44v21,0,36,16,47,16v7,0,8,-5,8,-14r28,0v3,26,-7,45,-29,44v-20,0,-36,-16,-47,-16v-7,0,-8,5,-8,14r-28,0xm21,0r0,-170r43,0r0,170r-43,0","w":85},"\u012b":{"d":"-8,-205r0,-32r102,0r0,32r-102,0xm21,0r0,-170r43,0r0,170r-43,0","w":85},"\u012f":{"d":"36,77v-50,2,-44,-58,-15,-78r0,-169r43,0r0,170v-20,10,-31,25,-31,39v-1,14,14,15,26,11r5,23v-9,3,-20,4,-28,4xm43,-198v-15,0,-26,-12,-26,-26v0,-14,11,-25,26,-25v15,0,26,10,26,25v0,14,-11,26,-26,26","w":85},"\u0133":{"d":"21,0r0,-170r43,0r0,170r-43,0xm43,-198v-15,0,-26,-12,-26,-26v0,-14,11,-25,26,-25v15,0,26,10,26,25v0,14,-11,26,-26,26xm64,79r8,-35v21,9,40,5,40,-25r0,-189r43,0r0,195v3,52,-48,71,-91,54xm134,-198v-15,0,-27,-12,-27,-26v0,-14,12,-25,27,-25v15,0,26,10,26,25v0,14,-11,26,-26,26","w":176},"\u0135":{"d":"-22,77r8,-30v23,11,40,0,40,-28r0,-189r43,0r0,193v-2,60,-48,73,-91,54xm-8,-191r36,-53r34,0r37,53r-34,0r-20,-29r-19,29r-34,0","w":90},"\u0137":{"d":"22,0r0,-255r43,0r1,144r55,-59r49,0r-70,74r76,96r-50,0r-61,-79r0,79r-43,0xm59,85r-10,-26v30,-7,33,-21,19,-40r37,0v18,34,7,59,-46,66"},"\u013a":{"d":"23,-264r18,-45r45,0r-30,45r-33,0xm22,-39r0,-216r43,0r0,205v0,18,10,16,23,13r8,33v-32,15,-74,5,-74,-35","w":102},"\u013e":{"d":"22,-39r0,-216r43,0r0,205v0,18,10,16,23,13r8,33v-32,15,-74,5,-74,-35xm77,-185r13,-70r43,0r-23,70r-33,0","w":102},"\u013c":{"d":"20,-39r0,-216r43,0r0,205v0,17,11,17,23,13r9,33v-33,15,-75,6,-75,-35xm27,85r-10,-26v30,-7,33,-21,19,-40r37,0v18,34,7,59,-46,66","w":102},"\u0140":{"d":"22,-39r0,-216r43,0r0,205v0,18,10,16,23,13r8,33v-32,15,-74,5,-74,-35xm103,-99v-13,0,-24,-11,-24,-25v0,-14,11,-24,24,-24v13,0,24,10,24,24v0,14,-11,25,-24,25","w":119},"\u0144":{"d":"20,0r0,-170r37,0r4,19v40,-33,113,-43,113,38r0,113r-43,0r0,-99v5,-46,-45,-45,-68,-20r0,119r-43,0xm71,-191r21,-53r46,0r-34,53r-33,0","w":193},"\u0148":{"d":"20,0r0,-170r37,0r4,19v40,-33,113,-43,113,38r0,113r-43,0r0,-99v5,-46,-45,-45,-68,-20r0,119r-43,0xm75,-191r-36,-53r34,0r20,28r19,-28r34,0r-36,53r-35,0","w":193},"\u0146":{"d":"20,0r0,-170r37,0r4,19v40,-33,113,-43,113,38r0,113r-43,0r0,-99v5,-46,-45,-45,-68,-20r0,119r-43,0xm66,85r-11,-26v29,-7,33,-20,20,-40r36,0v19,33,9,60,-45,66","w":193},"\u207a":{"d":"57,-156r0,-45r-41,0r0,-27r41,0r0,-43r29,0r0,43r41,0r0,27r-41,0r0,45r-29,0","w":143},"\u207b":{"d":"16,-201r0,-27r111,0r0,27r-111,0","w":143},"\u207c":{"d":"16,-177r0,-26r111,0r0,26r-111,0xm16,-226r0,-26r111,0r0,26r-111,0","w":143},"\u207f":{"d":"16,-97r0,-120r28,0r3,13v28,-24,80,-25,80,28r0,79r-33,0v-4,-32,14,-94,-17,-94v-9,0,-18,4,-28,11r0,83r-33,0","w":141},"\u03c2":{"d":"89,51v8,-11,16,-24,16,-34v0,-37,-92,-24,-92,-108v0,-71,79,-103,133,-72r0,36v-29,-25,-89,-13,-89,33v0,61,91,44,91,101v0,22,-13,44,-26,62","w":160},"\u03c3":{"d":"201,-135v-16,1,-34,-2,-45,-1v39,50,12,140,-63,140v-49,0,-80,-35,-80,-85v0,-56,34,-89,90,-89r109,0xm114,-136v-69,-12,-77,102,-20,105v48,2,42,-81,20,-105","w":210},"\u0326":{"d":"47,85r-10,-26v29,-7,32,-20,19,-40r37,0v18,34,7,59,-46,66","w":138},"\u0391":{"d":"3,0r92,-238r35,0r95,238r-47,0r-23,-59r-84,0r-23,59r-45,0xm83,-95r59,0r-29,-84","w":228},"\u0392":{"d":"29,0r0,-237r70,0v80,-2,93,78,45,110v73,24,51,131,-39,127r-76,0xm72,-36v36,2,72,0,72,-34v0,-32,-36,-36,-72,-33r0,67xm72,-138v32,3,58,-6,58,-32v0,-26,-26,-35,-58,-32r0,64","w":204},"\u0393":{"d":"29,0r0,-237r135,0r-12,36r-79,0r0,201r-44,0","w":164},"\u0395":{"d":"29,0r0,-237r131,0r-12,36r-76,0r0,62r76,0r0,37r-76,0r0,65r89,0r0,37r-132,0","w":181},"\u0396":{"d":"10,0r117,-201r-101,0r-11,-36r181,0r-115,200r116,0r0,37r-187,0","w":205},"\u0397":{"d":"29,0r0,-237r43,0r0,98r114,0r0,-98r43,0r0,237r-43,0r0,-103r-114,0r0,103r-43,0","w":258},"\u0398":{"d":"138,4v-70,0,-120,-49,-120,-122v0,-72,50,-121,120,-121v71,0,119,49,119,121v0,73,-50,122,-119,122xm138,-33v44,0,74,-31,74,-85v0,-53,-29,-85,-74,-85v-44,0,-74,31,-74,85v0,54,30,85,74,85xm188,-137r0,35r-102,0r0,-35r102,0","w":275},"\u0399":{"d":"29,0r0,-237r43,0r0,237r-43,0","w":101},"\u039a":{"d":"29,0r0,-237r43,0r1,101r82,-101r50,0r-96,115r101,122r-53,0r-85,-104r0,104r-43,0","w":215},"\u039b":{"d":"3,0r93,-238r35,0r95,238r-47,0r-65,-179v-17,58,-44,122,-64,179r-47,0","w":229},"\u039c":{"d":"29,0r0,-237r39,0r63,89v9,12,13,24,20,31r77,-120r39,0r0,237r-43,0r0,-165r-63,99r-20,0r-69,-99r0,165r-43,0","w":296},"\u039d":{"d":"241,0r-39,0r-130,-171r0,171r-43,0r0,-237r43,0r126,166r0,-166r43,0r0,237","w":270},"\u039e":{"d":"14,0r0,-37r171,0r0,37r-171,0xm38,-103r0,-36r123,0r0,36r-123,0xm18,-201r0,-36r167,0r-12,36r-155,0","w":199},"\u039f":{"d":"139,4v-70,0,-120,-49,-120,-122v0,-72,50,-121,120,-121v70,0,119,49,119,121v0,73,-50,122,-119,122xm139,-33v44,0,73,-31,73,-85v0,-53,-28,-85,-73,-85v-44,0,-74,31,-74,85v0,54,30,85,74,85","w":275},"\u03a0":{"d":"29,0r0,-237r190,0r0,237r-44,0r0,-201r-102,0r0,201r-44,0","w":248},"\u03a1":{"d":"178,-159v0,46,-42,84,-106,77r0,82r-43,0r0,-237v80,-5,149,3,149,78xm133,-159v0,-30,-23,-48,-61,-43r0,85v37,3,61,-8,61,-42","w":195},"\u03a3":{"d":"6,0r73,-125r-69,-112r173,0r-12,36r-90,0r45,75r-51,89r103,0r0,37r-172,0","w":196},"\u03a4":{"d":"75,0r0,-201r-70,0r0,-36r188,0r-12,36r-63,0r0,201r-43,0","w":194},"\u03a5":{"d":"89,0v6,-115,-13,-134,-85,-237r48,0v20,24,48,71,60,106v7,-37,35,-77,58,-106r47,0v-62,85,-94,122,-85,237r-43,0","w":221},"\u03a6":{"d":"121,7r0,-21v-63,-6,-103,-44,-103,-103v0,-59,41,-98,103,-105r0,-21r44,0r0,21v62,7,102,46,102,105v0,59,-39,97,-102,103r0,21r-44,0xm121,-52r0,-133v-37,5,-58,29,-58,68v0,36,19,60,58,65xm165,-52v39,-5,58,-29,58,-65v0,-39,-21,-63,-58,-68r0,133","w":285},"\u03a7":{"d":"4,0r85,-119r-78,-118r49,0r56,85r60,-85r48,0r-83,117r79,120r-48,0r-58,-87r-62,87r-48,0","w":227},"\u03a8":{"d":"118,0r0,-73v-80,-2,-98,-73,-89,-164r42,0v-4,58,-1,128,47,124r0,-124r44,0r0,124v48,4,52,-68,46,-124r43,0v9,90,-9,163,-89,164r0,73r-44,0","w":279},"\u0386":{"d":"5,-170r13,-67r43,0r-22,67r-34,0xm3,0r92,-238r35,0r95,238r-47,0r-23,-59r-84,0r-23,59r-45,0xm83,-95r59,0r-29,-84","w":228},"\u0388":{"d":"0,-170r14,-67r42,0r-21,67r-35,0xm76,0r0,-237r132,0r-12,36r-76,0r0,62r76,0r0,37r-76,0r0,65r88,0r0,37r-132,0","w":228},"\u0389":{"d":"0,-170r14,-67r42,0r-21,67r-35,0xm72,0r0,-237r43,0r0,98r114,0r0,-98r43,0r0,237r-43,0r0,-103r-114,0r0,103r-43,0","w":300},"\u038a":{"d":"76,0r0,-237r44,0r0,237r-44,0xm0,-170r14,-67r42,0r-21,67r-35,0","w":149},"\u03aa":{"d":"29,0r0,-237r43,0r0,237r-43,0xm16,-252v-12,0,-22,-10,-22,-22v0,-12,10,-23,22,-23v12,0,23,11,23,23v0,12,-11,22,-23,22xm85,-252v-12,0,-22,-10,-22,-22v0,-12,10,-23,22,-23v12,0,22,11,22,23v0,12,-10,22,-22,22","w":101},"\u038c":{"d":"0,-170r14,-67r42,0r-21,67r-35,0xm170,4v-70,0,-120,-49,-120,-122v0,-72,50,-121,120,-121v71,0,119,49,119,121v0,73,-50,122,-119,122xm170,-33v44,0,73,-31,73,-85v0,-53,-28,-85,-73,-85v-44,0,-74,31,-74,85v0,54,30,85,74,85","w":307},"\u038e":{"d":"0,-170r14,-67r42,0r-21,67r-35,0xm152,0v6,-115,-13,-134,-85,-237r48,0v20,24,47,71,59,106v8,-37,36,-77,59,-106r47,0v-62,85,-94,122,-85,237r-43,0","w":283},"\u03ab":{"d":"89,0v6,-115,-13,-134,-85,-237r48,0v20,24,48,71,60,106v7,-37,35,-77,58,-106r47,0v-62,85,-94,122,-85,237r-43,0xm77,-252v-12,0,-22,-10,-22,-22v0,-12,10,-23,22,-23v12,0,22,11,22,23v0,12,-10,22,-22,22xm145,-252v-12,0,-22,-10,-22,-22v0,-12,10,-23,22,-23v12,0,22,11,22,23v0,12,-10,22,-22,22","w":221},"\u038f":{"d":"0,-170r14,-67r42,0r-21,67r-35,0xm51,0r0,-37v17,-2,40,3,49,3v-80,-54,-58,-205,68,-205v126,0,149,149,70,206v10,-4,31,-4,48,-4r0,37r-97,0r0,-29v33,-26,50,-56,50,-96v0,-45,-26,-78,-71,-78v-45,0,-69,33,-69,78v0,40,16,70,49,96r0,29r-97,0","w":303},"\u03b1":{"d":"208,-2v-39,16,-61,-14,-69,-45v-8,24,-27,51,-58,51v-39,0,-68,-35,-68,-90v0,-52,27,-89,67,-89v33,-1,48,22,60,49v4,-15,9,-30,17,-47r35,15v-14,27,-25,52,-33,73v7,21,12,58,40,47xm85,-32v22,0,33,-27,39,-55v-8,-28,-19,-52,-38,-52v-18,0,-30,21,-30,53v0,31,11,54,29,54","w":213},"\u03b2":{"d":"24,85r0,-264v0,-53,34,-76,76,-76v84,0,100,100,43,125v78,22,45,134,-35,134v-17,0,-32,-5,-41,-10r0,91r-43,0xm67,-43v25,19,77,15,77,-29v0,-25,-21,-41,-56,-39r0,-34v29,2,46,-11,46,-38v0,-20,-12,-37,-34,-37v-20,0,-33,15,-33,41r0,136","w":201},"\u03b3":{"d":"5,-170v73,-26,100,54,104,119v13,-58,39,-98,63,-124v10,9,19,19,29,28v-33,39,-62,84,-78,161r0,71r-45,0v4,-78,7,-246,-64,-222","w":204},"\u03b4":{"d":"13,-75v-1,-41,27,-67,58,-82v-49,-27,-30,-98,34,-98v28,0,56,7,78,17r-13,34v-17,-8,-40,-16,-61,-16v-11,0,-23,3,-23,16v0,31,97,51,97,126v0,42,-31,82,-86,82v-52,0,-84,-35,-84,-79xm140,-77v0,-27,-17,-43,-38,-58v-28,10,-45,31,-45,58v0,27,14,46,40,46v25,0,43,-19,43,-46","w":196},"\u03b5":{"d":"94,4v-54,0,-80,-26,-80,-55v0,-18,10,-33,30,-38v-17,-6,-26,-19,-26,-36v0,-48,84,-61,130,-40r0,35v-28,-13,-82,-22,-88,8v-4,19,39,22,66,19r0,31v-28,-3,-73,-1,-70,20v4,33,71,25,95,9r13,28v-18,10,-43,19,-70,19","w":169},"\u03b6":{"d":"100,51v7,-10,17,-23,17,-34v0,-35,-103,-13,-103,-102v0,-61,43,-106,94,-139v-26,7,-56,12,-80,13r-9,-34v37,0,100,-5,138,-10r2,25v-68,40,-101,87,-101,138v0,69,104,37,104,97v0,22,-15,47,-27,64","w":167},"\u03b7":{"d":"39,0r0,-118v0,-19,-10,-20,-22,-16r-9,-35v28,-12,59,-7,67,21v38,-34,117,-49,117,35r0,198r-43,0r0,-184v5,-47,-44,-44,-68,-20r0,119r-42,0","w":214},"\u03b8":{"d":"99,4v-57,0,-85,-46,-85,-130v0,-84,28,-129,85,-129v57,0,85,45,85,129v0,84,-28,130,-85,130xm99,-31v28,0,39,-27,40,-80r-81,0v1,53,13,80,41,80xm58,-145r81,0v-1,-50,-13,-75,-40,-75v-27,0,-39,25,-41,75","w":197},"\u03b9":{"d":"98,-3v-35,14,-78,5,-78,-38r0,-129r43,0r0,121v-1,15,15,16,27,12","w":103},"\u03ba":{"d":"65,0r-43,0r0,-170r43,0v1,24,-2,51,1,73v30,-34,78,-64,112,-78r13,38v-23,8,-50,24,-73,41r75,96r-50,0r-56,-73v-9,7,-16,15,-22,22r0,51","w":201},"\u03bb":{"d":"3,0r78,-170v-18,-52,-26,-57,-62,-44r-11,-33v61,-21,88,-1,114,72r63,175r-45,0r-41,-120r-50,120r-46,0","w":186},"\u03bc":{"d":"129,-76r0,-94r43,0r0,111v0,25,9,25,25,21r9,34v-30,15,-62,4,-67,-26v-13,35,-52,45,-75,21r1,94r-43,0r0,-255r43,0v6,49,-21,137,30,137v16,0,34,-12,34,-43","w":209},"\u03bd":{"d":"63,1r-60,-171r43,0r42,124v34,-33,45,-75,25,-124r46,0v24,77,-9,115,-66,171r-30,0","w":180},"\u03be":{"d":"104,51v7,-9,15,-20,15,-31v0,-37,-103,-17,-103,-85v0,-27,17,-47,47,-57v-22,-6,-33,-19,-33,-37v-1,-23,19,-43,60,-64v-21,5,-44,9,-63,10r-10,-35v37,0,103,-2,141,-7r3,25v-61,20,-87,42,-87,64v0,27,39,27,69,25r0,34v-41,-4,-83,2,-83,35v0,43,103,21,103,83v0,20,-12,40,-25,58","w":169},"\u03bf":{"d":"98,4v-51,0,-85,-39,-85,-90v0,-51,34,-89,85,-89v51,0,85,38,85,89v0,51,-34,90,-85,90xm98,-31v27,0,41,-23,41,-55v0,-31,-14,-54,-41,-54v-27,0,-41,23,-41,54v0,32,14,55,41,55","w":196},"\u03c1":{"d":"22,85r0,-174v0,-56,30,-86,79,-86v52,0,85,34,85,89v0,66,-63,110,-121,80r0,91r-43,0xm65,-41v36,25,76,0,76,-46v0,-36,-17,-53,-39,-53v-43,-1,-37,55,-37,99","w":198},"\u2260":{"d":"36,-3r16,-33r-38,0r0,-35r55,0r18,-37r-73,0r0,-36r91,0r15,-31r43,0r-15,31r36,0r0,36r-53,0r-18,37r71,0r0,35r-89,0r-15,33r-44,0","w":198},"\u2248":{"d":"29,-28r-20,-27v18,-18,35,-26,54,-26v41,0,74,42,106,6r21,27v-18,18,-36,26,-55,26v-41,0,-74,-42,-106,-6xm29,-103r-20,-28v45,-63,114,24,160,-20r21,28v-46,63,-114,-24,-161,20","w":198},"\u2264":{"d":"22,-102r0,-37r154,-51r0,36r-113,34r113,34r0,36xm14,0r0,-36r170,0r0,36r-170,0","w":198},"\u2265":{"d":"23,-50r0,-36r112,-35r-112,-33r0,-36r153,51r0,37xm14,0r0,-36r170,0r0,36r-170,0","w":198},"\u25ca":{"d":"67,0r-49,-104r49,-104r38,0r50,104r-50,104r-38,0xm54,-104r33,69r32,-69r-33,-69","w":172},"\u221e":{"d":"74,-34v-40,0,-63,-30,-63,-64v0,-34,23,-63,63,-63v28,0,48,17,64,36v16,-19,36,-36,65,-36v40,0,63,29,63,63v0,34,-23,64,-63,64v-29,0,-49,-18,-65,-37v-17,19,-36,37,-64,37xm54,-98v0,40,48,27,63,0v-12,-14,-24,-25,-39,-25v-14,0,-24,10,-24,25xm198,-72v14,0,24,-11,24,-26v0,-39,-48,-26,-63,0v12,14,24,26,39,26","w":276},"\u2202":{"d":"82,4v-43,0,-71,-27,-71,-72v-1,-66,60,-107,121,-81v-5,-55,-56,-69,-100,-44r-11,-30v78,-43,157,4,157,96v0,80,-39,131,-96,131xm86,-31v23,0,46,-25,48,-83v-38,-21,-80,-1,-79,45v0,26,13,38,31,38","w":192},"\u222b":{"d":"-18,78r8,-36v18,9,42,7,42,-18r0,-218v-2,-55,49,-73,93,-53r-8,35v-18,-9,-42,-6,-42,19r0,217v2,54,-48,73,-93,54","w":119},"\u221a":{"d":"113,44r-49,-150r-36,13r-11,-33r74,-28r30,96v7,19,8,41,14,52r74,-292r43,0r-95,342r-44,0","w":249},"\u2206":{"d":"3,0r94,-238r38,0r94,238r-226,0xm117,-184r-53,147r104,0","w":232},"\u03a9":{"d":"155,0r0,-29v33,-26,50,-56,50,-96v0,-45,-25,-78,-70,-78v-45,0,-70,33,-70,78v0,40,17,70,50,96r0,29r-97,0r0,-37v17,-2,40,3,48,3v-79,-55,-56,-205,69,-205v126,0,147,150,69,206v10,-4,31,-4,48,-4r0,37r-97,0","w":270},"\u220f":{"d":"37,65r0,-266r-32,0r0,-36r242,0r-12,36r-31,0r0,266r-44,0r0,-266r-80,0r0,266r-43,0","w":247},"\u2211":{"d":"3,65r100,-154r-94,-148r204,0r-11,36r-117,0r69,111r-74,118r128,0r0,37r-205,0","w":219},"\u03c0":{"d":"40,0r0,-137r-32,0r0,-33r215,0r-10,33r-32,0r0,87v0,15,8,15,21,13r8,34v-34,14,-72,3,-72,-37r0,-97r-55,0r0,137r-43,0","w":230},"\u2116":{"d":"24,0r0,-237r43,0r105,162v-4,-50,-1,-108,-2,-162r43,0r0,237r-39,0r-109,-168v4,52,1,112,2,168r-43,0xm242,-48r0,-25r119,0r0,25r-119,0xm301,-95v-36,0,-61,-26,-61,-62v0,-36,25,-63,61,-63v36,0,62,27,62,63v0,36,-26,62,-62,62xm301,-122v17,0,28,-15,28,-35v0,-20,-11,-36,-28,-36v-17,0,-27,16,-27,36v0,20,10,35,27,35","w":385},"\u212e":{"d":"212,-43r33,0v-58,80,-236,56,-236,-65v0,-72,60,-112,128,-112v85,0,126,58,125,117r-200,0r0,58v29,46,118,47,150,2xm62,-117r149,0r0,-54v-28,-47,-121,-46,-149,0r0,54","w":271},"\u2113":{"d":"13,-45r-10,-37v12,-3,24,-5,34,-9r0,-49v0,-74,34,-99,71,-99v39,0,56,24,56,55v0,48,-34,87,-83,113v6,46,43,43,73,22r16,33v-41,30,-124,29,-130,-37v-9,3,-18,5,-27,8xm80,-139r0,27v28,-19,41,-45,41,-72v0,-12,-4,-21,-14,-21v-14,0,-27,20,-27,66","w":184},"\u2117":{"d":"139,4v-71,0,-120,-53,-120,-122v0,-69,49,-121,120,-121v70,0,119,52,119,121v0,69,-49,122,-119,122xm139,-18v54,0,94,-42,94,-100v0,-58,-40,-99,-94,-99v-55,0,-95,41,-95,99v0,58,40,100,95,100xm100,-47r0,-141v49,-3,94,2,94,48v0,31,-26,51,-68,47r0,46r-26,0xm126,-116v24,3,44,-6,41,-24v3,-18,-17,-29,-41,-25r0,49","w":277},"\u0315":{"d":"43,-185r13,-70r42,0r-23,70r-32,0","w":138},"\u03ce":{"d":"202,4v-31,1,-50,-21,-59,-49v-7,30,-28,49,-58,49v-87,0,-78,-137,-29,-178r41,8v-27,32,-37,66,-37,89v0,29,12,45,30,45v32,0,37,-55,31,-96r45,0v-6,41,-1,96,31,96v19,0,30,-16,30,-45v0,-23,-10,-57,-37,-89r41,-8v48,42,59,178,-29,178xm202,-251r-41,60r-34,0r26,-60r49,0","w":287},"\u03b0":{"d":"3,-169v35,-13,73,-8,70,40v-2,40,-8,102,34,98v55,-5,49,-96,17,-139r44,0v43,58,29,174,-62,174v-69,0,-88,-58,-76,-124v0,-17,-8,-18,-18,-14xm58,-197v-12,0,-20,-8,-20,-20v0,-12,8,-21,20,-21v11,0,20,9,20,21v0,12,-9,20,-20,20xm78,-191r16,-60r32,0r-24,60r-24,0xm141,-197v-12,0,-19,-8,-19,-20v0,-12,7,-21,19,-21v11,0,20,9,20,21v0,12,-9,20,-20,20","w":209},"\u03cb":{"d":"3,-169v35,-13,73,-8,70,40v-2,40,-8,102,34,98v55,-5,49,-96,17,-139r44,0v43,58,29,174,-62,174v-69,0,-88,-58,-76,-124v0,-17,-8,-18,-18,-14xm63,-196v-12,0,-22,-10,-22,-22v0,-13,10,-22,22,-22v12,0,23,9,23,22v0,12,-11,22,-23,22xm132,-196v-12,0,-22,-10,-22,-22v0,-13,10,-22,22,-22v12,0,22,9,22,22v0,12,-10,22,-22,22","w":209},"\u03cd":{"d":"152,-251r-42,60r-34,0r26,-60r50,0xm3,-169v35,-13,73,-8,70,40v-2,40,-8,102,34,98v55,-5,49,-96,17,-139r44,0v43,58,29,174,-62,174v-69,0,-88,-58,-76,-124v0,-17,-8,-18,-18,-14","w":209},"\u03cc":{"d":"98,4v-51,0,-85,-39,-85,-90v0,-51,34,-89,85,-89v51,0,85,38,85,89v0,51,-34,90,-85,90xm98,-31v27,0,41,-23,41,-55v0,-31,-14,-54,-41,-54v-27,0,-41,23,-41,54v0,32,14,55,41,55xm155,-251r-42,60r-33,0r25,-60r50,0","w":196},"\u0390":{"d":"98,-3v-35,14,-78,5,-78,-38r0,-129r43,0r0,121v-1,15,15,16,27,12xm9,-197v-12,0,-20,-8,-20,-20v0,-12,8,-21,20,-21v11,0,20,9,20,21v0,12,-9,20,-20,20xm30,-191r15,-60r32,0r-24,60r-23,0xm93,-197v-12,0,-20,-8,-20,-20v0,-12,8,-21,20,-21v11,0,19,9,19,21v0,12,-8,20,-19,20","w":103},"\u03ca":{"d":"98,-3v-35,14,-78,5,-78,-38r0,-129r43,0r0,121v-1,15,15,16,27,12xm10,-196v-12,0,-22,-10,-22,-22v0,-13,10,-22,22,-22v12,0,22,9,22,22v0,12,-10,22,-22,22xm79,-196v-12,0,-22,-10,-22,-22v0,-13,10,-22,22,-22v12,0,22,9,22,22v0,12,-10,22,-22,22","w":103},"\u03af":{"d":"98,-3v-35,14,-78,5,-78,-38r0,-129r43,0r0,121v-1,15,15,16,27,12xm99,-251r-42,60r-34,0r26,-60r50,0","w":103},"\u03ae":{"d":"39,0r0,-118v0,-19,-10,-20,-22,-16r-9,-35v28,-12,59,-7,67,21v38,-34,117,-49,117,35r0,198r-43,0r0,-184v5,-47,-44,-44,-68,-20r0,119r-42,0xm172,-251r-42,60r-34,0r26,-60r50,0","w":214},"\u03ad":{"d":"145,-251r-41,60r-34,0r26,-60r49,0xm94,4v-54,0,-80,-26,-80,-55v0,-18,10,-33,30,-38v-17,-6,-26,-19,-26,-36v0,-48,84,-61,130,-40r0,35v-28,-13,-82,-22,-88,8v-4,19,39,22,66,19r0,31v-28,-3,-73,-1,-70,20v4,33,71,25,95,9r13,28v-18,10,-43,19,-70,19","w":168},"\u03ac":{"d":"208,-2v-39,16,-61,-14,-69,-45v-8,24,-27,51,-58,51v-39,0,-68,-35,-68,-90v0,-52,27,-89,67,-89v33,-1,48,22,60,49v4,-15,9,-30,17,-47r35,15v-14,27,-25,52,-33,73v7,21,12,58,40,47xm85,-32v22,0,33,-27,39,-55v-8,-28,-19,-52,-38,-52v-18,0,-30,21,-30,53v0,31,11,54,29,54xm153,-251r-41,60r-34,0r26,-60r49,0","w":213},"\u03c9":{"d":"197,4v-31,1,-50,-21,-59,-49v-7,30,-28,49,-58,49v-87,0,-78,-137,-29,-178r41,8v-27,32,-37,66,-37,89v0,29,12,45,30,45v32,0,37,-55,31,-96r45,0v-6,41,-1,96,31,96v19,0,30,-16,30,-45v0,-23,-10,-57,-37,-89r41,-8v48,42,59,178,-29,178","w":276},"\u03c8":{"d":"150,85r-42,0r0,-81v-75,-2,-86,-53,-86,-130v0,-12,-2,-26,-9,-44r42,0v27,47,-21,134,53,139r0,-224r42,0r0,224v64,-6,67,-87,32,-139r44,0v44,67,21,175,-76,173r0,82","w":260},"\u03c7":{"d":"46,85r-46,0r75,-135v-23,-63,-22,-95,-58,-86r-9,-34v55,-14,71,9,94,80r43,-80r45,0r-70,125v27,70,23,103,61,94r9,33v-58,18,-71,-14,-97,-87","w":192},"\u03c6":{"d":"106,85r0,-81v-56,-6,-93,-43,-93,-90v0,-47,37,-83,93,-89r0,-80r42,0r0,80v56,6,93,42,93,89v0,47,-37,84,-93,90r0,81r-42,0xm106,-31r0,-110v-28,4,-50,25,-50,55v0,30,22,51,50,55xm148,-31v28,-4,50,-25,50,-55v0,-30,-22,-51,-50,-55r0,110","w":254},"\u03c5":{"d":"3,-169v35,-13,73,-8,70,40v-2,40,-8,102,34,98v55,-5,49,-96,17,-139r44,0v43,58,29,174,-62,174v-69,0,-88,-58,-76,-124v0,-17,-8,-18,-18,-14","w":209},"\u03c4":{"d":"155,-9v-35,24,-102,16,-102,-37r0,-91r-47,0r0,-33r157,0r-10,33r-57,0r0,86v-1,26,33,22,47,12","w":165},"\u0410":{"d":"3,0r92,-238r35,0r95,238r-47,0r-23,-59r-84,0r-23,59r-45,0xm83,-95r59,0r-29,-84","w":228},"\u0411":{"d":"144,-73v0,-37,-33,-38,-71,-37r0,74v39,2,71,-5,71,-37xm73,-145v65,-3,116,11,115,71v0,43,-25,74,-95,74r-64,0r0,-237r150,0r-11,35r-95,0r0,57","w":204},"\u0412":{"d":"29,0r0,-237r70,0v80,-2,93,78,45,110v73,24,51,131,-39,127r-76,0xm72,-36v36,2,72,0,72,-34v0,-32,-36,-36,-72,-33r0,67xm72,-138v32,3,58,-6,58,-32v0,-26,-26,-35,-58,-32r0,64","w":204},"\u0413":{"d":"29,0r0,-237r135,0r-12,36r-79,0r0,201r-44,0","w":164},"\u0403":{"d":"29,0r0,-237r135,0r-12,36r-79,0r0,201r-44,0xm77,-251r21,-52r46,0r-34,52r-33,0","w":164},"\u0490":{"d":"29,0r0,-237r106,0r0,-55r39,-10r0,100r-101,0r0,202r-44,0","w":184},"\u0414":{"d":"9,67r0,-104r15,0v31,-38,53,-108,67,-200r119,0r0,200r32,0r0,104r-42,0r0,-67r-149,0r0,67r-42,0xm167,-37r0,-165r-42,0v-10,72,-31,128,-53,165r95,0","w":252},"\u0402":{"d":"75,0r0,-202r-70,0r0,-35r201,0r-12,35r-76,0r0,60v76,-12,137,25,128,75v4,50,-51,84,-102,64r9,-34v25,11,50,-1,50,-31v0,-40,-47,-42,-85,-37r0,105r-43,0","w":263},"\u0415":{"d":"29,0r0,-237r131,0r-12,36r-76,0r0,62r76,0r0,37r-76,0r0,65r89,0r0,37r-132,0","w":181},"\u0400":{"d":"29,0r0,-237r131,0r-12,36r-76,0r0,62r76,0r0,37r-76,0r0,65r89,0r0,37r-132,0xm78,-251r-34,-52r46,0r21,52r-33,0","w":181},"\u0401":{"d":"29,0r0,-237r131,0r-12,36r-76,0r0,62r76,0r0,37r-76,0r0,65r89,0r0,37r-132,0xm59,-252v-12,0,-22,-10,-22,-22v0,-12,10,-23,22,-23v12,0,22,11,22,23v0,12,-10,22,-22,22xm128,-252v-12,0,-22,-10,-22,-22v0,-12,10,-23,22,-23v12,0,22,11,22,23v0,12,-10,22,-22,22","w":181},"\u0404":{"d":"213,-15v-90,49,-194,2,-194,-101v0,-95,94,-147,185,-112r0,40v-52,-31,-139,-12,-139,50r116,0r0,35r-117,0v-3,68,85,88,136,54","w":228},"\u0416":{"d":"316,-198v-52,-14,-33,59,-66,78v32,20,49,85,71,120r-49,0r-33,-75v-14,-34,-20,-25,-53,-26r0,101r-42,0r0,-101v-32,1,-38,-8,-53,26r-33,75r-49,0r42,-87v10,-22,19,-28,29,-34v-34,-17,-15,-91,-67,-77r0,-38v96,-30,46,114,131,100r0,-101r42,0r0,101v84,15,31,-128,130,-100r0,38","w":329},"\u0405":{"d":"18,-17r17,-33v21,19,93,31,93,-11v0,-46,-103,-41,-103,-113v0,-35,28,-65,77,-65v24,0,45,5,58,11r0,40v-19,-10,-37,-15,-56,-15v-17,0,-33,7,-33,26v0,44,103,38,103,113v0,70,-109,85,-156,47","w":192},"\u0417":{"d":"82,4v-23,0,-46,-5,-63,-12r0,-37v32,17,109,22,109,-24v0,-34,-40,-36,-80,-34r0,-35v37,3,74,-4,74,-33v0,-41,-66,-37,-96,-18r-11,-33v17,-9,42,-17,72,-17v90,0,107,93,41,117v26,8,45,24,45,54v0,41,-29,72,-91,72","w":190},"\u0418":{"d":"29,0r0,-237r44,0r0,166r124,-166r43,0r0,237r-43,0r0,-171r-129,171r-39,0","w":269},"\u040d":{"d":"29,0r0,-237r44,0r0,166r124,-166r43,0r0,237r-43,0r0,-171r-129,171r-39,0xm123,-251r-35,-52r47,0r21,52r-33,0","w":269},"\u0419":{"d":"29,0r0,-237r44,0r0,166r124,-166r43,0r0,237r-43,0r0,-171r-129,171r-39,0xm136,-247v-43,0,-66,-26,-65,-61r36,0v0,16,8,30,29,30v22,0,29,-14,29,-30r36,0v1,35,-22,61,-65,61","w":269},"\u0406":{"d":"29,0r0,-237r43,0r0,237r-43,0","w":101},"\u0407":{"d":"29,0r0,-237r43,0r0,237r-43,0xm16,-252v-12,0,-22,-10,-22,-22v0,-12,10,-23,22,-23v12,0,23,11,23,23v0,12,-11,22,-23,22xm85,-252v-12,0,-22,-10,-22,-22v0,-12,10,-23,22,-23v12,0,22,11,22,23v0,12,-10,22,-22,22","w":101},"\u0408":{"d":"-11,61r9,-35v25,12,55,-3,49,-31r0,-232r43,0r0,238v7,50,-52,79,-101,60","w":119},"\u041a":{"d":"212,-198v-52,-14,-37,60,-71,77v35,22,51,84,75,121r-50,0r-36,-76v-15,-35,-23,-24,-57,-26r0,102r-44,0r0,-237r44,0r0,99v89,17,37,-126,139,-98r0,38","w":225},"\u040c":{"d":"98,-251r20,-52r47,0r-35,52r-32,0xm212,-198v-52,-14,-37,60,-71,77v35,22,51,84,75,121r-50,0r-36,-76v-15,-35,-23,-24,-57,-26r0,102r-44,0r0,-237r44,0r0,99v89,17,37,-126,139,-98r0,38","w":225},"\u041b":{"d":"71,-24v-16,21,-36,29,-65,25r0,-40v15,1,24,-2,33,-15v22,-32,35,-110,42,-183r125,0r0,237r-43,0r0,-202r-47,0v-6,69,-21,144,-45,178","w":235},"\u0409":{"d":"270,-75v-2,-34,-30,-40,-68,-39r0,78v40,2,70,-7,68,-39xm202,-149v63,-3,112,15,112,73v0,43,-26,76,-97,76r-59,0r0,-202r-42,0v-6,69,-21,144,-45,178v-16,21,-36,29,-65,25r0,-40v15,1,24,-2,33,-15v22,-32,35,-110,42,-183r121,0r0,88","w":330},"\u041c":{"d":"29,0r0,-237r39,0r63,89v9,12,13,24,20,31r77,-120r39,0r0,237r-43,0r0,-165r-63,99r-20,0r-69,-99r0,165r-43,0","w":296},"\u041d":{"d":"29,0r0,-237r43,0r0,98r114,0r0,-98r43,0r0,237r-43,0r0,-103r-114,0r0,103r-43,0","w":258},"\u040a":{"d":"221,-149v63,-3,113,14,113,73v0,43,-25,76,-96,76r-60,0r0,-103r-105,0r0,103r-44,0r0,-237r44,0r0,98r105,0r0,-98r43,0r0,88xm290,-75v0,-35,-31,-40,-69,-39r0,78v39,3,69,-7,69,-39","w":350},"\u041e":{"d":"139,4v-70,0,-120,-49,-120,-122v0,-72,50,-121,120,-121v70,0,119,49,119,121v0,73,-50,122,-119,122xm139,-33v44,0,73,-31,73,-85v0,-53,-28,-85,-73,-85v-44,0,-74,31,-74,85v0,54,30,85,74,85","w":277},"\u041f":{"d":"29,0r0,-237r190,0r0,237r-44,0r0,-201r-102,0r0,201r-44,0","w":248},"\u0420":{"d":"178,-159v0,46,-42,84,-106,77r0,82r-43,0r0,-237v80,-5,149,3,149,78xm133,-159v0,-30,-23,-48,-61,-43r0,85v37,3,61,-8,61,-42","w":195},"\u0421":{"d":"204,-49r12,34v-89,50,-195,-1,-195,-101v0,-92,99,-148,187,-112r0,40v-18,-10,-38,-15,-61,-15v-53,0,-80,40,-80,86v0,76,80,105,137,68","w":226},"\u0422":{"d":"75,0r0,-201r-70,0r0,-36r188,0r-12,36r-63,0r0,201r-43,0","w":194},"\u040b":{"d":"204,-58v3,-52,-38,-52,-86,-49r0,107r-43,0r0,-202r-70,0r0,-35r199,0r-11,35r-75,0r0,59v72,-8,134,6,130,82r0,61r-44,0r0,-58","w":275},"\u0423":{"d":"130,-59v-27,51,-47,68,-96,60r0,-36v31,7,41,-5,56,-34r-85,-168r48,0r60,124r53,-124r48,0","w":217},"\u040e":{"d":"130,-59v-27,51,-47,68,-96,60r0,-36v31,7,41,-5,56,-34r-85,-168r48,0r60,124r53,-124r48,0xm110,-247v-43,0,-66,-26,-65,-61r36,0v0,16,8,30,29,30v22,0,29,-14,29,-30r36,0v1,35,-22,61,-65,61","w":217},"\u0424":{"d":"119,6r0,-32v-63,-5,-100,-35,-100,-93v0,-57,38,-89,100,-94r0,-30r44,0r0,30v62,5,99,38,99,94v0,58,-36,88,-99,93r0,32r-44,0xm119,-63r0,-113v-36,4,-56,22,-56,57v0,35,19,53,56,56xm163,-63v36,-3,55,-20,55,-56v0,-34,-18,-53,-55,-57r0,113","w":281},"\u0472":{"d":"138,4v-72,0,-119,-47,-119,-122v0,-74,47,-121,119,-121v72,0,119,48,119,121v0,75,-48,122,-119,122xm138,-32v42,0,68,-25,72,-71r-144,0v4,46,30,71,72,71xm66,-139r144,0v-5,-40,-31,-64,-72,-64v-40,0,-66,23,-72,64","w":275},"\u0425":{"d":"4,0r85,-119r-78,-118r49,0r56,85r60,-85r48,0r-83,117r79,120r-48,0r-58,-87r-62,87r-48,0","w":228},"\u0426":{"d":"29,0r0,-237r44,0r0,200r101,0r0,-200r43,0r0,200r31,0r0,104r-42,0r0,-67r-177,0","w":259},"\u040f":{"d":"29,0r0,-237r44,0r0,198r103,0r0,-198r44,0r0,237r-75,0r0,67r-41,0r0,-67r-75,0","w":249},"\u0427":{"d":"69,-179v-3,53,41,53,88,48r0,-106r43,0r0,237r-43,0r0,-94v-74,5,-135,-5,-131,-82r0,-61r43,0r0,58","w":229},"\u0428":{"d":"29,0r0,-237r44,0r0,200r76,0r0,-200r43,0r0,200r77,0r0,-200r43,0r0,237r-283,0","w":341},"\u0429":{"d":"29,0r0,-237r44,0r0,200r75,0r0,-200r44,0r0,200r75,0r0,-200r44,0r0,200r31,0r0,104r-42,0r0,-67r-271,0","w":353},"\u042a":{"d":"127,-149v63,-3,113,15,113,73v0,43,-25,76,-96,76r-60,0r0,-202r-72,0r-12,-35r127,0r0,88xm196,-75v-2,-34,-31,-40,-69,-39r0,78v39,3,71,-7,69,-39","w":256},"\u042b":{"d":"73,-149v64,-3,110,15,110,73v0,43,-25,76,-96,76r-58,0r0,-237r44,0r0,88xm139,-75v0,-34,-29,-41,-66,-39r0,78v39,2,66,-8,66,-39xm210,0r0,-237r43,0r0,237r-43,0","w":282},"\u042c":{"d":"144,-75v0,-37,-32,-41,-71,-39r0,78v40,3,71,-5,71,-39xm73,-149v65,-4,115,14,115,73v0,43,-25,76,-95,76r-64,0r0,-237r44,0r0,88","w":204},"\u0462":{"d":"92,-144v64,-3,116,10,116,71v0,42,-26,73,-96,73r-63,0r0,-183r-46,0r0,-35r46,0r0,-31r43,0r0,31r62,0r-11,35r-51,0r0,39xm164,-72v0,-36,-35,-37,-72,-36r0,72v39,2,72,-5,72,-36","w":224},"\u042d":{"d":"85,4v-25,0,-48,-6,-63,-12r0,-37v54,27,138,12,136,-58r-111,0r0,-35r110,0v0,-59,-78,-82,-130,-51r-12,-33v18,-9,42,-17,72,-17v75,0,116,54,116,122v0,71,-39,121,-118,121","w":222},"\u042e":{"d":"29,0r0,-237r44,0r0,98r53,0v8,-60,49,-100,110,-100v68,0,111,50,111,121v0,72,-44,122,-111,122v-63,0,-105,-43,-111,-107r-52,0r0,103r-44,0xm236,-33v41,0,64,-32,64,-85v0,-52,-22,-85,-64,-85v-41,0,-65,32,-65,85v0,53,24,85,65,85","w":365},"\u042f":{"d":"9,0v19,-34,37,-84,63,-109v-26,-9,-40,-32,-40,-58v-1,-74,81,-73,158,-70r0,237r-44,0r0,-93v-33,2,-40,-9,-56,26r-31,67r-50,0xm77,-164v0,35,33,38,69,36r0,-74v-37,-2,-69,2,-69,38","w":218},"\u0474":{"d":"92,1r-89,-238r47,0r61,177v15,-59,29,-103,39,-130v17,-43,40,-56,86,-46r0,38v-25,-9,-37,3,-47,27v-11,26,-28,76,-59,172r-38,0","w":239},"\u0430":{"d":"124,0r-6,-16v-30,35,-108,22,-106,-35v2,-49,50,-57,102,-57v5,-44,-53,-37,-77,-22r-14,-28v47,-29,134,-25,134,45v0,35,-3,86,3,113r-36,0xm114,-79v-26,1,-58,-2,-58,25v0,33,48,25,58,11r0,-36","w":178},"\u0431":{"d":"96,4v-49,0,-82,-32,-82,-112v0,-112,29,-124,153,-147r0,39v-89,26,-97,10,-108,66v12,-7,29,-14,49,-14v50,0,72,35,72,79v0,51,-29,89,-84,89xm98,-31v28,0,38,-23,38,-51v0,-25,-8,-49,-36,-49v-14,0,-30,6,-43,13v-2,50,12,87,41,87","w":193},"\u0432":{"d":"21,0r0,-170r68,0v52,0,69,23,69,45v1,21,-14,31,-29,38v18,4,33,16,33,38v0,24,-16,49,-70,49r-71,0xm63,-31v24,0,57,5,57,-20v0,-25,-32,-21,-57,-21r0,41xm63,-100v24,0,55,3,53,-20v3,-21,-30,-21,-53,-20r0,40","w":174},"\u0433":{"d":"21,0r0,-170r124,0r-12,38r-69,0r0,132r-43,0","w":151},"\u0453":{"d":"64,-191r21,-53r46,0r-34,53r-33,0xm21,0r0,-170r124,0r-12,38r-69,0r0,132r-43,0","w":151},"\u0491":{"d":"21,0r0,-170r88,0r0,-51r38,-9r0,98r-83,0r0,132r-43,0","w":155},"\u0434":{"d":"8,60r0,-95r11,0v24,-29,36,-64,49,-135r104,0r0,135r25,0r0,95r-40,0r0,-60r-109,0r0,60r-40,0xm130,-35r0,-100r-31,0v-8,44,-18,76,-33,100r64,0","w":208},"\u0452":{"d":"23,0r0,-196r-20,0r0,-33r20,0r0,-26r43,0r0,26r51,0r0,33r-51,0r0,52v49,-50,117,-16,117,76v0,61,-22,101,-68,125r-21,-31v37,-21,45,-52,45,-92v0,-63,-39,-81,-73,-46r0,112r-43,0","w":196},"\u0435":{"d":"166,-73r-109,0v-2,44,60,53,91,31r13,30v-18,11,-40,16,-61,16v-118,0,-111,-179,-10,-179v51,0,79,40,76,102xm56,-103r66,0v0,-19,-10,-39,-33,-39v-21,0,-33,18,-33,39","w":178},"\u0450":{"d":"166,-73r-109,0v-2,44,60,53,91,31r13,30v-18,11,-40,16,-61,16v-118,0,-111,-179,-10,-179v51,0,79,40,76,102xm56,-103r66,0v0,-19,-10,-39,-33,-39v-21,0,-33,18,-33,39xm80,-191r-35,-53r47,0r21,53r-33,0","w":178},"\u0451":{"d":"166,-73r-109,0v-2,44,60,53,91,31r13,30v-18,11,-40,16,-61,16v-118,0,-111,-179,-10,-179v51,0,79,40,76,102xm56,-103r66,0v0,-19,-10,-39,-33,-39v-21,0,-33,18,-33,39xm57,-196v-12,0,-22,-10,-22,-22v0,-13,10,-22,22,-22v12,0,22,9,22,22v0,12,-10,22,-22,22xm125,-196v-12,0,-22,-10,-22,-22v0,-13,10,-22,22,-22v12,0,22,9,22,22v0,12,-10,22,-22,22","w":178},"\u0454":{"d":"97,4v-54,0,-84,-38,-84,-88v0,-74,78,-112,135,-79r0,34v-30,-24,-90,-13,-92,27r66,0r0,30r-67,0v1,46,57,54,89,32r13,27v-14,9,-37,17,-60,17","w":166},"\u0436":{"d":"249,-136v-34,-10,-26,38,-45,51v27,14,34,59,50,85r-46,0v-16,-25,-10,-79,-57,-70r0,70r-42,0r0,-70v-44,-10,-41,43,-57,70r-46,0v16,-28,24,-69,50,-86v-21,-11,-10,-60,-45,-50r0,-36v71,-25,39,80,98,70r0,-68r42,0r0,68v61,12,23,-94,98,-70r0,36","w":260},"\u0455":{"d":"8,-13r13,-31v18,13,77,26,77,-4v0,-29,-80,-18,-80,-75v0,-49,72,-63,114,-43r0,36v-18,-9,-72,-23,-72,5v0,27,80,17,80,76v0,63,-97,62,-132,36","w":151},"\u0437":{"d":"72,4v-22,0,-40,-6,-54,-12r0,-33v25,14,82,22,85,-10v2,-21,-34,-23,-62,-20r0,-31v29,3,61,-1,59,-20v-2,-29,-54,-20,-73,-9r-11,-30v42,-26,126,-14,126,35v0,18,-11,30,-26,38v20,5,30,19,30,37v0,27,-23,55,-74,55","w":158},"\u0438":{"d":"21,0r0,-170r42,0r0,112v20,-36,52,-78,76,-112r41,0r0,170r-42,0r1,-112r-76,112r-42,0","w":201},"\u045d":{"d":"89,-191r-35,-53r47,0r21,53r-33,0xm21,0r0,-170r42,0r0,112v20,-36,52,-78,76,-112r41,0r0,170r-42,0r1,-112r-76,112r-42,0","w":201},"\u0439":{"d":"21,0r0,-170r42,0r0,112v20,-36,52,-78,76,-112r41,0r0,170r-42,0r1,-112r-76,112r-42,0xm102,-195v-41,0,-62,-25,-61,-61r36,0v0,16,6,31,25,31v19,0,26,-15,26,-31r36,0v1,36,-21,61,-62,61","w":201},"\u0456":{"d":"21,0r0,-170r43,0r0,170r-43,0xm43,-198v-15,0,-26,-12,-26,-26v0,-14,11,-25,26,-25v15,0,26,10,26,25v0,14,-11,26,-26,26","w":85},"\u0457":{"d":"9,-196v-12,0,-22,-10,-22,-22v0,-13,10,-22,22,-22v12,0,22,9,22,22v0,12,-10,22,-22,22xm77,-196v-12,0,-22,-10,-22,-22v0,-13,10,-22,22,-22v12,0,22,9,22,22v0,12,-10,22,-22,22xm21,0r0,-170r43,0r0,170r-43,0","w":85},"\u0458":{"d":"-22,79r8,-35v21,9,40,5,40,-25r0,-189r43,0r0,195v3,52,-47,71,-91,54xm48,-198v-15,0,-26,-12,-26,-26v0,-14,11,-25,26,-25v15,0,27,10,27,25v0,14,-12,26,-27,26","w":90},"\u043a":{"d":"168,-136v-36,-8,-26,37,-46,50v27,16,33,59,50,86r-46,0v-17,-26,-11,-81,-62,-71r0,71r-43,0r0,-170r43,0r0,67v66,15,27,-93,104,-69r0,36","w":178},"\u045c":{"d":"73,-191r21,-53r46,0r-35,53r-32,0xm168,-136v-36,-8,-26,37,-46,50v27,16,33,59,50,86r-46,0v-17,-26,-11,-81,-62,-71r0,71r-43,0r0,-170r43,0r0,67v66,15,27,-93,104,-69r0,36","w":178},"\u043b":{"d":"94,-132v-14,71,-18,139,-90,133r0,-37v12,1,17,-1,24,-11v13,-19,26,-63,34,-123r106,0r0,170r-42,0r0,-132r-32,0","w":189},"\u0459":{"d":"164,-33v26,2,58,-4,52,-22v5,-18,-26,-24,-52,-22r0,44xm94,-132v-14,71,-18,139,-90,133r0,-37v12,1,17,-1,24,-11v13,-19,26,-63,34,-123r102,0r0,60v56,-7,95,19,95,54v0,31,-19,56,-75,56r-62,0r0,-132r-28,0","w":271},"\u043c":{"d":"21,0r0,-170r42,0r50,83v10,-23,33,-59,48,-83r42,0r0,170r-42,0r0,-108r-40,68r-18,0r-41,-68v2,30,1,75,1,108r-42,0","w":224},"\u043d":{"d":"21,0r0,-170r43,0r0,61r67,0r0,-61r43,0r0,170r-43,0r0,-72r-67,0r0,72r-43,0","w":195},"\u045a":{"d":"21,0r0,-170r43,0r0,61r63,0r0,-61r43,0r0,60v56,-7,95,19,95,54v0,31,-19,56,-76,56r-62,0r0,-72r-63,0r0,72r-43,0xm170,-33v26,2,58,-4,52,-22v5,-18,-25,-24,-52,-22r0,44","w":277},"\u043e":{"d":"98,4v-51,0,-85,-39,-85,-90v0,-51,34,-89,85,-89v51,0,85,38,85,89v0,51,-34,90,-85,90xm98,-31v27,0,41,-23,41,-55v0,-31,-14,-54,-41,-54v-27,0,-41,23,-41,54v0,32,14,55,41,55","w":196},"\u043f":{"d":"21,0r0,-170r150,0r0,170r-43,0r0,-132r-64,0r0,132r-43,0","w":192},"\u0440":{"d":"20,85r0,-249v70,-27,158,-3,158,78v0,60,-52,103,-115,86r0,85r-43,0xm63,-36v39,14,71,-8,71,-50v0,-44,-33,-60,-71,-50r0,100","w":190},"\u0441":{"d":"99,4v-55,0,-86,-39,-86,-88v0,-71,79,-112,136,-79r0,36v-35,-28,-92,-9,-92,42v0,54,52,65,88,43r12,29v-14,9,-35,17,-58,17","w":162},"\u0442":{"d":"60,0r0,-135r-52,0r0,-35r157,0r-12,35r-50,0r0,135r-43,0","w":168},"\u045b":{"d":"23,0r0,-196r-20,0r0,-33r20,0r0,-26r43,0r0,26r48,0r0,33r-48,0r0,52v37,-33,112,-42,112,39r0,105r-43,0r0,-93v5,-47,-46,-42,-69,-19r0,112r-43,0","w":199},"\u0443":{"d":"185,-170r-65,175v-37,88,-61,88,-124,72r11,-33v38,14,55,5,73,-45r-77,-169r46,0r51,120r41,-120r44,0","w":187},"\u045e":{"d":"185,-170r-65,175v-37,88,-61,88,-124,72r11,-33v38,14,55,5,73,-45r-77,-169r46,0r51,120r41,-120r44,0xm96,-195v-41,0,-62,-25,-61,-61r35,0v0,16,7,31,26,31v19,0,26,-15,26,-31r35,0v1,36,-20,61,-61,61","w":187},"\u0444":{"d":"100,85r0,-82v-57,-5,-87,-42,-87,-88v0,-46,30,-84,87,-89r0,-74r41,0r0,74v57,5,87,43,87,89v0,46,-30,83,-87,88r0,82r-41,0xm100,-32r0,-107v-59,6,-60,102,0,107xm141,-32v58,-5,58,-101,0,-107r0,107","w":240},"\u0473":{"d":"97,4v-52,0,-84,-37,-84,-90v0,-53,32,-89,85,-89v52,0,83,36,83,89v0,53,-31,90,-84,90xm97,-30v25,0,39,-16,41,-42r-82,0v3,26,16,42,41,42xm56,-101r82,0v-3,-24,-16,-40,-40,-40v-25,0,-39,16,-42,40","w":194},"\u0445":{"d":"3,0r64,-86r-62,-84r45,0r40,55r40,-55r45,0r-62,84r63,86r-45,0r-41,-57r-42,57r-45,0","w":178},"\u0446":{"d":"21,0r0,-170r43,0r0,133r61,0r0,-133r43,0r0,133r24,0r0,97r-39,0r0,-60r-132,0","w":204},"\u045f":{"d":"76,60r0,-60r-55,0r0,-170r43,0r0,133r65,0r0,-133r43,0r0,170r-56,0r0,60r-40,0","w":192},"\u0447":{"d":"120,0r0,-62v-52,11,-102,-6,-102,-51r0,-57r43,0v3,36,-14,80,33,76v8,0,17,0,26,-2r0,-74r43,0r0,170r-43,0","w":183},"\u0448":{"d":"21,0r0,-170r42,0r0,133r49,0r0,-133r42,0r0,133r48,0r0,-133r42,0r0,170r-223,0","w":265},"\u0449":{"d":"21,0r0,-170r42,0r0,133r47,0r0,-133r41,0r0,133r47,0r0,-133r42,0r0,133r24,0r0,97r-40,0r0,-60r-203,0","w":276},"\u044a":{"d":"70,0r0,-135r-56,0r-10,-35r109,0r0,60v56,-7,94,19,94,54v0,31,-19,56,-76,56r-61,0xm113,-33v26,2,57,-5,51,-22v5,-18,-25,-24,-51,-22r0,44","w":219},"\u044b":{"d":"21,0r0,-170r43,0r0,60v55,-7,92,19,92,54v0,31,-19,56,-75,56r-60,0xm64,-33v26,2,55,-5,49,-22v5,-18,-23,-24,-49,-22r0,44xm178,0r0,-170r43,0r0,170r-43,0","w":242},"\u044c":{"d":"21,0r0,-170r43,0r0,60v57,-8,104,21,97,54v0,31,-18,56,-77,56r-63,0xm64,-33v27,2,60,-4,54,-22v6,-18,-27,-24,-54,-22r0,44","w":173},"\u0463":{"d":"45,0r0,-139r-45,0r0,-31r45,0r0,-49r44,0r0,49r62,0r-10,31r-52,0r0,32v58,-4,96,17,96,52v0,31,-18,55,-77,55r-63,0xm89,-32v27,2,60,-5,54,-22v6,-18,-29,-25,-54,-21r0,43","w":198},"\u044d":{"d":"152,-85v0,69,-69,109,-131,79r0,-33v31,19,92,14,90,-33r-69,0r0,-30r67,0v-2,-38,-50,-50,-81,-30r-11,-30v61,-35,135,4,135,77","w":165},"\u044e":{"d":"21,0r0,-170r43,0r0,63r34,0v8,-40,36,-68,78,-68v50,0,80,38,80,89v0,51,-30,90,-80,90v-44,0,-72,-30,-78,-73r-34,0r0,69r-43,0xm176,-31v26,0,37,-23,37,-55v0,-31,-10,-54,-37,-54v-27,0,-36,23,-36,54v0,32,10,55,36,55","w":269},"\u044f":{"d":"9,0v13,-23,22,-59,42,-73v-49,-23,-37,-101,35,-97r71,0r0,170r-43,0r0,-60v-22,2,-33,-6,-42,16r-17,44r-46,0xm64,-114v0,22,25,25,50,23r0,-47v-25,-2,-50,1,-50,24","w":178},"\u0475":{"d":"86,-54v17,-58,20,-138,91,-118r0,36v-21,-6,-28,3,-37,28v-8,21,-20,58,-35,109r-36,0r-66,-171r43,0","w":180},"\u00a0":{"w":77}}});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:27:"/js/detect.js?1370660606432";s:6:"source";s:13:"/js/detect.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
if ($.browser.webkit && !$.browser.opera && !$.browser.msie	&& !$.browser.mozilla) {
    var userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf("chrome") === -1) {
        $("head").append($('<link href="/css/safari.css" rel="stylesheet" type="text/css" media="screen" />'));
    }
}
if ($.browser.webkit) {
    $("head").append($('<link href="/css/webkit.css" rel="stylesheet" type="text/css" media="screen" />'));
}

/* End */
;
; /* Start:"a:4:{s:4:"full";s:27:"/js/form.js?146649316415024";s:6:"source";s:11:"/js/form.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var _selectHeight = 23;

var inputs = new Array();
var selects = new Array();
var labels = new Array();
var radios = new Array();
var radioLabels = new Array();
var checkboxes = new Array();
var checkboxLabels = new Array();
var buttons = new Array();
var selects = new Array();
var all_selects = false;
var active_select = null;
var selectText = "please select";

function is_mac() {
    if (navigator.appVersion.indexOf("Safari") != -1)
    {
        if(!window.getComputedStyle)
        {
            return true;
        }
    }

    return false;
}

function initCastomForms() {
    if(!document.getElementById) {return false;}
    getElements();
    separateElements();
    //replaceRadios();
    //replaceCheckboxes();
    replaceSelects();

    var _selects = document.getElementsByTagName('select');
    var _SelctClassName = [];
    if (_selects) {
        for (var i = 0; i < _selects.length; i++) {
            if (_selects[i].className != '' && _selects[i].className != 'outtaHere')
                _SelctClassName[i] = ' drop-'+_selects[i].className;
        }
        for (var i = 0; i < _SelctClassName.length; i++) {
            var _selectDrop = document.getElementById('optionsDiv'+i);
            if (_selectDrop) {
                if (_SelctClassName[i])
                    _selectDrop.className += _SelctClassName[i];
            }
        }
    }

    $(document).trigger("startBanner");
}


// getting all the required elements
function getElements() {
    var _frms = document.getElementsByTagName("form");
    for (var nf = 0; nf < _frms.length; nf++) {
        if(_frms[nf].className.indexOf("default") == -1) {
            var a = document.forms[nf].getElementsByTagName("input");
            for(var nfi = 0; nfi < a.length; nfi++) {
                inputs.push(a[nfi]);
            }
            var b = document.forms[nf].getElementsByTagName("label");
            for(var nfl = 0; nfl < b.length; nfl++) {
                labels.push(b[nfl]);
            }
            var c = document.forms[nf].getElementsByTagName("select");
            for(var nfs = 0; nfs < c.length; nfs++) {
                selects.push(c[nfs]);
            }
        }
    }
}

// separating all the elements in their respective arrays
function separateElements() {
    var r = 0; var c = 0; var t = 0; var rl = 0; var cl = 0; var tl = 0; var b = 0;
    for (var q = 0; q < inputs.length; q++) {
        if(inputs[q].type == "radio") {
            radios[r] = inputs[q]; ++r;
            for(var w = 0; w < labels.length; w++) {
                if((inputs[q].id) && labels[w].htmlFor == inputs[q].id)
                {
                    radioLabels[rl] = labels[w];
                }
            }
            ++rl;
        }
        if(inputs[q].type == "checkbox") {
            checkboxes[c] = inputs[q]; ++c;
            for(var w = 0; w < labels.length; w++) {
                if((inputs[q].id) && (labels[w].htmlFor == inputs[q].id))
                {
                    checkboxLabels[cl] = labels[w];
                }
            }
            ++cl;
        }
        if((inputs[q].type == "submit") || (inputs[q].type == "button")) {
            buttons[b] = inputs[q]; ++b;
        }
    }
}

//replacing radio buttons
function replaceRadios() {
    for (var q = 0; q < radios.length; q++) {
        radios[q].className += " outtaHere";
        var radioArea = document.createElement("div");
        if(radios[q].checked) {
            radioArea.className = "radioAreaChecked";
            if (radioLabels[q])
            {
                radioLabels[q].className += "radioAreaCheckedLabel"
            }

        }
        else
        {
            radioArea.className = "radioArea";
        }
        radioArea.id = "myRadio" + q;
        radios[q].parentNode.insertBefore(radioArea, radios[q]);
        radios[q]._ra = radioArea;

        radioArea.onclick = new Function('rechangeRadios('+q+')');
        if (radioLabels[q])
        {
            radioLabels[q].onclick = new Function('rechangeRadios('+q+')');
        }
    }
    return true;
}

//checking radios
function checkRadios(who) {
    var what = radios[who]._ra;
    for(var q = 0; q < radios.length; q++) {
        if((radios[q]._ra.className == "radioAreaChecked")&&(radios[q]._ra.nextSibling.name == radios[who].name))
        {
            radios[q]._ra.className = "radioArea";
            if (radioLabels[q])
            {
                radioLabels[q].className = radioLabels[q].className.replace("radioAreaCheckedLabel", "");
            }
        }
    }
    what.className = "radioAreaChecked";
    if(radioLabels[who])
        radioLabels[who].className += " radioAreaCheckedLabel";
}

//changing radios
function changeRadios(who) {
    if(radios[who].checked) {
        for(var q = 0; q < radios.length; q++) {
            if(radios[q].name == radios[who].name) {
                radios[q].checked = false;
            }
            radios[who].checked = true;
            checkRadios(who);
        }
    }
}

//rechanging radios
function rechangeRadios(who) {
    if(!radios[who].checked) {
        for(var q = 0; q < radios.length; q++) {
            if(radios[q].name == radios[who].name)	{
                radios[q].checked = false;
            }
            radios[who].checked = true;
            checkRadios(who);
        }
    }
}

//replacing checkboxes
function replaceCheckboxes() {
    for (var q = 0; q < checkboxes.length; q++) {
        checkboxes[q].className += " outtaHere";
        var checkboxArea = document.createElement("div");
        if(checkboxes[q].checked) {
            checkboxArea.className = "checkboxAreaChecked";
            if(checkboxLabels[q])
                checkboxLabels[q].className += "checkboxAreaCheckedLabel"
        }
        else {
            checkboxArea.className = "checkboxArea";
        }
        checkboxArea.id = "myCheckbox" + q;
        checkboxes[q].parentNode.insertBefore(checkboxArea, checkboxes[q]);
        checkboxes[q]._ca = checkboxArea;
        checkboxArea.onclick = checkboxArea.onclick2 = new Function('rechangeCheckboxes('+q+')');
        if (checkboxLabels[q])
        {
            checkboxLabels[q].onclick = new Function('changeCheckboxes('+q+')');
        }

        checkboxes[q].onkeydown = checkEvent;
    }
    return true;
}

//checking checkboxes
function checkCheckboxes(who, action) {
    var what = checkboxes[who]._ca;
    if(action == true) {
        what.className = "checkboxAreaChecked";
        what.checked = true;
        if(checkboxLabels[who])
            checkboxLabels[who].className += " checkboxAreaCheckedLabel";
    }
    if(action == false) {
        what.className = "checkboxArea";
        what.checked = false;
        if(checkboxLabels[who])
            checkboxLabels[who].className = checkboxLabels[who].className.replace("checkboxAreaCheckedLabel", "");
    }
}

//changing checkboxes
function changeCheckboxes(who) {
    if(checkboxes[who].checked) {
        checkCheckboxes(who, false);
    }
    else {
        checkCheckboxes(who, true);
    }
}

//rechanging checkboxes
function rechangeCheckboxes(who) {
    var tester = false;
    if(checkboxes[who].checked == true) {
        tester = false;
    }
    else {
        tester = true;
    }
    checkboxes[who].checked = tester;
    checkCheckboxes(who, tester);
}

//check event
function checkEvent(e) {
    if (!e) var e = window.event;
    if(e.keyCode == 32) {for (var q = 0; q < checkboxes.length; q++) {if(this == checkboxes[q]) {changeCheckboxes(q);}}} //check if space is pressed
}


function replaceSelects() {
    for(var q = 0; q < selects.length; q++) {
        //console.log(selects[q].id + " " + selects[q].offsetWidth);
        if (!selects[q].replaced && selects[q].offsetWidth && selects[q].className.indexOf("default") == -1)
        {
            selects[q]._number = q;
            //create and build div structure
            var selectArea = document.createElement("div");
            var left = document.createElement("span");
            left.className = "left";
            selectArea.appendChild(left);

            var disabled = document.createElement("span");
            disabled.className = "disabled";
            selectArea.appendChild(disabled);

            selects[q]._disabled = disabled;
            //var center = document.createElement("span");
            var center = document.createElement("a");
            var button = document.createElement("a");
            var text = document.createTextNode(selectText);
            center.id = "mySelectText"+q;

            var stWidth = selects[q].offsetWidth;
            selectArea.style.width = stWidth + "px";
            if (selects[q].parentNode.className.indexOf("type2") != -1){
                button.href = "javascript:showOptions("+q+",true)";
                center.href = "javascript:showOptions("+q+",true)"; //add new
            } else {
                button.href = "javascript:showOptions("+q+",false)";
                center.href = "javascript:showOptions("+q+",false)"; //add new
            }
            button.className = "selectButton";
            selectArea.className = "selectArea";

            selectArea.className += " " + selects[q].className;
            selectArea.id = "sarea"+q;
            center.className = "center";
            center.appendChild(text);
            selectArea.appendChild(center);
            selectArea.appendChild(button);

            //hide the select field
            selects[q].className += " outtaHere";
            //insert select div
            selects[q].parentNode.insertBefore(selectArea, selects[q]);
            //build & place options div

            var optionsDiv = document.createElement("div");
            var optionsListParent = document.createElement("div");
            optionsListParent.className = "select-center";
            var optionsListParent2 = document.createElement("div");
            optionsListParent2.className = "select-center-right";
            var optionsList = document.createElement("ul");
            optionsDiv.innerHTML += "<div class='select-top'><div class='select-top-left'></div><div class='select-top-right'></div></div>";
            optionsListParent.appendChild(optionsListParent2);
            optionsListParent.appendChild(optionsList);
            optionsDiv.appendChild(optionsListParent);

            selects[q]._options = optionsList;

            optionsDiv.style.width = stWidth + "px";
            optionsDiv._parent = selectArea;

            optionsDiv.className = "optionsDivInvisible";
            optionsDiv.id = "optionsDiv"+q;


            populateSelectOptions(selects[q]);
            optionsDiv.innerHTML += "<div class='select-bottom'><div class='select-bottom-left'></div><div class='select-bottom-right'></div></div>";
            document.getElementsByTagName("body")[0].appendChild(optionsDiv);
            selects[q].replaced = true;
            console.log(selects[q]);
        }
        all_selects = true;
    }
}

//collecting select options
function populateSelectOptions(me) {
    me._options.innerHTML = "";

    for(var w = 0; w < me.options.length; w++) {
        if(me.options[w].title.indexOf("title") == -1) {
            var optionHolder = document.createElement('li');
            var optionLink = document.createElement('a');
            var optionTxt;
            if (me.options[w].title.indexOf('image') != -1) {
                optionTxt = document.createElement('img');
                optionSpan = document.createElement('span');
                optionTxt.src = me.options[w].title;
                optionSpan = document.createTextNode(me.options[w].text);
            } else {
                optionTxt = document.createTextNode(me.options[w].text);
            }

            optionLink.href = "javascript:showOptions("+me._number+"); selectMe('"+me.id+"',"+w+","+me._number+");";
            if (me.options[w].title.indexOf('image') != -1) {
                optionLink.appendChild(optionTxt);
                optionLink.appendChild(optionSpan);
            } else {
                optionLink.appendChild(optionTxt);
            }
            optionHolder.appendChild(optionLink);
            me._options.appendChild(optionHolder);
            //check for pre-selected items
            if(me.options[w].selected) {
                selectMe(me.id,w,me._number);
            }
        }
        else if(me.options[w].selected)
            selectMe(me.id,w,me._number);
    }
    if (me.disabled) {
        me._disabled.style.display = "block";
    }
    else {
        me._disabled.style.display = "none";
    }
}

//selecting me
function selectMe(selectFieldId,linkNo,selectNo) {
    selectField = selects[selectNo];
    for(var k = 0; k < selectField.options.length; k++) {
        if(k==linkNo) {
            selectField.options[k].selected = true;
        }
        else {
            selectField.options[k].selected = false;
        }
    }

    //show selected option
    textVar = document.getElementById("mySelectText"+selectNo);
    var newText;
    var optionSpan;
    if (selectField.options[linkNo].title.indexOf('image') != -1) {
        newText = document.createElement('img');
        newText.src = selectField.options[linkNo].title;
        optionSpan = document.createElement('span');
        optionSpan = document.createTextNode(selectField.options[linkNo].text);
    } else {
        newText = document.createTextNode(selectField.options[linkNo].text);
    }
    if (selectField.options[linkNo].title.indexOf('image') != -1) {
        if (textVar.childNodes.length > 1) textVar.removeChild(textVar.childNodes[0]);
        textVar.replaceChild(newText, textVar.childNodes[0]);
        textVar.appendChild(optionSpan);
    } else {
        if (textVar.childNodes.length > 1) textVar.removeChild(textVar.childNodes[0]);
        textVar.replaceChild(newText, textVar.childNodes[0]);
    }
    if (selectField.onchange && all_selects)
    {
        eval(selectField.onchange());
    }
    $("#" + selectFieldId).trigger("change");
}
//showing options
function showOptions(g) {
    _elem = document.getElementById("optionsDiv"+g);
    var divArea = document.getElementById("sarea"+g);
    if (active_select && active_select != _elem) {
        active_select.className = active_select.className.replace('optionsDivVisible','optionsDivInvisible');
        active_select.style.height = "auto";
        _active.className = _active.className.replace('selectAreaActive','');
    }
    if(_elem.className.indexOf("optionsDivInvisible") != -1) {
        _elem.style.left = "-9999px";
        _elem.style.top = findPosY(divArea) + _selectHeight + 'px';
        _elem.className = _elem.className.replace('optionsDivInvisible','');
        _elem.className += " optionsDivVisible";
        /*if (_elem.offsetHeight > 200)
         {
         _elem.style.height = "200px";
         }*/
        _elem.style.left = findPosX(divArea) + 'px';
        divArea.className += ' selectAreaActive';
        _active = divArea;

        active_select = _elem;
        if(document.documentElement)
        {
            document.documentElement.onclick = hideSelectOptions;
        }
        else
        {
            window.onclick = hideSelectOptions;
        }
    }
    else if(_elem.className.indexOf("optionsDivVisible") != -1) {
        _elem.style.height = "auto";
        _elem.className = _elem.className.replace('optionsDivVisible','');
        _elem.className += " optionsDivInvisible";
        divArea.className = divArea.className.replace('selectAreaActive','');
    }

    // for mouseout
    /*_elem.timer = false;
     _elem.onmouseover = function() {
     if (this.timer) clearTimeout(this.timer);
     }
     _elem.onmouseout = function() {
     var _this = this;
     this.timer = setTimeout(function(){
     _this.style.height = "auto";
     _this.className = _this.className.replace('optionsDivVisible','');
     if (_elem.className.indexOf('optionsDivInvisible') == -1)
     _this.className += " optionsDivInvisible";
     },200);
     }*/
}
_active = false;
function hideSelectOptions(e)
{
    if(active_select)
    {
        if(!e) e = window.event;
        var _target = (e.target || e.srcElement);
        if(isElementBefore(_target,'selectArea') == 0 && isElementBefore(_target,'optionsDiv') == 0)
        {
            active_select.className = active_select.className.replace('optionsDivVisible', '');
            active_select.className = active_select.className.replace('optionsDivInvisible', '');
            active_select.className += " optionsDivInvisible";
            _active.className = _active.className.replace('selectAreaActive','');
            active_select = false;

            if(document.documentElement)
            {
                document.documentElement.onclick = function(){};
            }
            else
            {
                window.onclick = null;
            }
        }
    }
}

function isElementBefore(_el,_class)
{
    var _parent = _el;
    do
    {
        _parent = _parent.parentNode;
    }
    while(_parent && _parent.className != null && _parent.className.indexOf(_class) == -1)

    if(_parent.className && _parent.className.indexOf(_class) != -1)
    {
        return 1;
    }
    else
    {
        return 0;
    }

}

function findPosY(obj) {
    var posTop = 0;
    while (obj.offsetParent) {posTop += obj.offsetTop; obj = obj.offsetParent;}
    return posTop;
}
function findPosX(obj) {
    var posLeft = 0;
    while (obj.offsetParent) {posLeft += obj.offsetLeft; obj = obj.offsetParent;}
    return posLeft;
}

$(document).ready(function(){
    initCastomForms();
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:45:"/js/basic-jquery-slider.min.js?13706606053702";s:6:"source";s:30:"/js/basic-jquery-slider.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function(a){a.fn.bjqs=function(b){var c={},d={width:700,height:300,animation:"fade",animationDuration:450,automatic:true,rotationSpeed:4e3,hoverPause:true,showControls:true,centerControls:true,nextText:"Next",prevText:"Prev",showMarkers:true,centerMarkers:true,keyboardNav:true,useCaptions:true},e=this,f=e.find(".bjqs"),g=f.children("li"),h=g.length,i=false,j=false,k=0,l=1,m=0,n=g.eq(k),o="forward",p="backward";c=a.extend({},d,b);g.css({height:c.height,width:c.width});f.css({height:c.height,width:c.width});e.css({height:c.height,width:c.width});g.addClass("bjqs-slide");if(c.showControls&&h>1){var q=a('<ul class="bjqs-controls"></ul>'),r=a('<li><a href="#" class="bjqs-next" class="controls">'+c.nextText+"</a></li>"),s=a('<li><a href="#" class="bjqs-prev" class="controls">'+c.prevText+"</a></li>");r.click(function(a){a.preventDefault();if(!i){A(o,false)}});s.click(function(a){a.preventDefault();if(!i){A(p,false)}});r.appendTo(q);s.appendTo(q);q.appendTo(e);if(c.centerControls){var t=r.children("a"),u=(e.height()-t.height())/2;r.children("a").css("top",u).show();s.children("a").css("top",u).show()}}if(c.showMarkers&&h>1){var v=a('<ol class="bjqs-markers"></ol>'),w,x,u;a.each(g,function(b,d){if(c.animType==="slide"){if(b!==0&&b!==h-1){w=a('<li><a href="#">'+b+"</a></li>")}}else{b++;w=a('<li><a href="#">'+b+"</a></li>")}w.click(function(c){c.preventDefault();if(!a(this).hasClass("active-marker")&&!i){A(false,b)}});w.appendTo(v)});x=v.children("li");x.eq(k).addClass("active-marker");v.appendTo(e);if(c.centerMarkers){u=(c.width-v.width())/2;v.css("left",u)}}if(c.keyboardNav&&h>1){a(document).keyup(function(a){if(!j){clearInterval(z);j=true}if(!i){if(a.keyCode===39){a.preventDefault();A(o,false)}else if(a.keyCode===37){a.preventDefault();A(p,false)}}if(j&c.automatic){z=setInterval(function(){A(o)},c.rotationSpeed);j=false}})}if(c.useCaptions){a.each(g,function(b,c){var d=a(c);var e=d.children("img:first-child");var f=e.attr("title");if(f){var g=a('<p class="bjqs-caption">'+f+"</p>");g.appendTo(d)}})}if(c.hoverPause&&c.automatic){e.hover(function(){if(!j){clearInterval(z);j=true}},function(){if(j){z=setInterval(function(){A(o)},c.rotationSpeed);j=false}})}if(c.animation==="slide"&&h>1){$first=g.eq(0);$last=g.eq(h-1);$first.clone().addClass("clone").removeClass("slide").appendTo(f);$last.clone().addClass("clone").removeClass("slide").prependTo(f);g=f.children("li");h=g.length;$wrapper=a('<div class="bjqs-wrapper"></div>').css({width:c.width,height:c.height,overflow:"hidden",position:"relative"});f.css({width:c.width*h,left:-c.width});g.css({"float":"left",position:"relative",display:"list-item"});$wrapper.prependTo(e);f.appendTo($wrapper)}var y=function(a){if(c.animation==="fade"){if(a===o){!n.next().length?m=0:m++}else if(a===p){!n.prev().length?m=h-1:m--}}if(c.animation==="slide"){if(a===o){m=l+1}if(a===p){m=l-1}}return m};if(c.automatic&&h>1){var z=setInterval(function(){A(o,false)},c.rotationSpeed)}g.eq(k).show();f.show();var A=function(a,b){if(!i){if(a){m=y(a)}else if(b&&c.animation==="fade"){m=b-1}else{m=b}i=true;if(c.animation==="fade"){if(c.showMarkers){x.eq(k).removeClass("active-marker");x.eq(m).addClass("active-marker")}r=g.eq(m);n.fadeOut(c.animationDuration);r.fadeIn(c.animationDuration,function(){n.hide();k=m;n=r;i=false})}else if(c.animation==="slide"){if(c.showMarkers){x.eq(l-1).removeClass("active-marker");if(m===h-1){x.eq(0).addClass("active-marker")}else if(m===0){x.eq(h-3).addClass("active-marker")}else{x.eq(m-1).addClass("active-marker")}}f.animate({left:-m*c.width},c.animationDuration,function(){if(m===0){l=h-2;f.css({left:-l*c.width})}else if(m===h-1){l=1;f.css({left:-c.width})}else{l=m}i=false})}}};return this}})(jQuery)
/* End */
;
; /* Start:"a:4:{s:4:"full";s:39:"/js/jquery.tools.min.js?137066060525666";s:6:"source";s:23:"/js/jquery.tools.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * jQuery Tools 1.2.5 - The missing UI library for the Web
 *
 * [tabs, tabs.slideshow, tooltip, tooltip.slide, tooltip.dynamic, overlay, overlay.apple, rangeinput, toolbox.flashembed, toolbox.expose, toolbox.mousewheel]
 *
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 *
 * http://flowplayer.org/tools/
 *
 * jquery.event.wheel.js - rev 1
 * Copyright (c) 2008, Three Dub Media (http://threedubmedia.com)
 * Liscensed under the MIT License (MIT-LICENSE.txt)
 * http://www.opensource.org/licenses/mit-license.php
 * Created: 2008-07-01 | Updated: 2008-07-14
 *
 * -----
 *
 * File generated: Thu Oct 21 14:52:56 GMT 2010
 */
(function(c){function p(d,b,a){var e=this,l=d.add(this),h=d.find(a.tabs),i=b.jquery?b:d.children(b),j;h.length||(h=d.children());i.length||(i=d.parent().find(b));i.length||(i=c(b));c.extend(this,{click:function(f,g){var k=h.eq(f);if(typeof f=="string"&&f.replace("#","")){k=h.filter("[href*="+f.replace("#","")+"]");f=Math.max(h.index(k),0)}if(a.rotate){var n=h.length-1;if(f<0)return e.click(n,g);if(f>n)return e.click(0,g)}if(!k.length){if(j>=0)return e;f=a.initialIndex;k=h.eq(f)}if(f===j)return e;
    g=g||c.Event();g.type="onBeforeClick";l.trigger(g,[f]);if(!g.isDefaultPrevented()){o[a.effect].call(e,f,function(){g.type="onClick";l.trigger(g,[f])});j=f;h.removeClass(a.current);k.addClass(a.current);return e}},getConf:function(){return a},getTabs:function(){return h},getPanes:function(){return i},getCurrentPane:function(){return i.eq(j)},getCurrentTab:function(){return h.eq(j)},getIndex:function(){return j},next:function(){return e.click(j+1)},prev:function(){return e.click(j-1)},destroy:function(){h.unbind(a.event).removeClass(a.current);
    i.find("a[href^=#]").unbind("click.T");return e}});c.each("onBeforeClick,onClick".split(","),function(f,g){c.isFunction(a[g])&&c(e).bind(g,a[g]);e[g]=function(k){k&&c(e).bind(g,k);return e}});if(a.history&&c.fn.history){c.tools.history.init(h);a.event="history"}h.each(function(f){c(this).bind(a.event,function(g){e.click(f,g);return g.preventDefault()})});i.find("a[href^=#]").bind("click.T",function(f){e.click(c(this).attr("href"),f)});if(location.hash&&a.tabs=="a"&&d.find("[href="+location.hash+"]").length)e.click(location.hash);
else if(a.initialIndex===0||a.initialIndex>0)e.click(a.initialIndex)}c.tools=c.tools||{version:"1.2.5"};c.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",rotate:false,history:false},addEffect:function(d,b){o[d]=b}};var o={"default":function(d,b){this.getPanes().hide().eq(d).show();b.call()},fade:function(d,b){var a=this.getConf(),e=a.fadeOutSpeed,l=this.getPanes();e?l.fadeOut(e):l.hide();l.eq(d).fadeIn(a.fadeInSpeed,b)},slide:function(d,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  b){this.getPanes().slideUp(200);this.getPanes().eq(d).slideDown(400,b)},ajax:function(d,b){this.getPanes().eq(0).load(this.getTabs().eq(d).attr("href"),b)}},m;c.tools.tabs.addEffect("horizontal",function(d,b){m||(m=this.getPanes().eq(0).width());this.getCurrentPane().animate({width:0},function(){c(this).hide()});this.getPanes().eq(d).animate({width:m},function(){c(this).show();b.call()})});c.fn.tabs=function(d,b){var a=this.data("tabs");if(a){a.destroy();this.removeData("tabs")}if(c.isFunction(b))b=
    {onBeforeClick:b};b=c.extend({},c.tools.tabs.conf,b);this.each(function(){a=new p(c(this),d,b);c(this).data("tabs",a)});return b.api?a:this}})(jQuery);
(function(c){function p(g,a){function m(f){var e=c(f);return e.length<2?e:g.parent().find(f)}var b=this,i=g.add(this),d=g.data("tabs"),h,j=true,n=m(a.next).click(function(){d.next()}),k=m(a.prev).click(function(){d.prev()});c.extend(b,{getTabs:function(){return d},getConf:function(){return a},play:function(){if(h)return b;var f=c.Event("onBeforePlay");i.trigger(f);if(f.isDefaultPrevented())return b;h=setInterval(d.next,a.interval);j=false;i.trigger("onPlay");return b},pause:function(){if(!h)return b;
    var f=c.Event("onBeforePause");i.trigger(f);if(f.isDefaultPrevented())return b;h=clearInterval(h);i.trigger("onPause");return b},stop:function(){b.pause();j=true}});c.each("onBeforePlay,onPlay,onBeforePause,onPause".split(","),function(f,e){c.isFunction(a[e])&&c(b).bind(e,a[e]);b[e]=function(q){return c(b).bind(e,q)}});a.autopause&&d.getTabs().add(n).add(k).add(d.getPanes()).hover(b.pause,function(){j||b.play()});a.autoplay&&b.play();a.clickable&&d.getPanes().click(function(){d.next()});if(!d.getConf().rotate){var l=
    a.disabledClass;d.getIndex()||k.addClass(l);d.onBeforeClick(function(f,e){k.toggleClass(l,!e);n.toggleClass(l,e==d.getTabs().length-1)})}}var o;o=c.tools.tabs.slideshow={conf:{next:".forward",prev:".backward",disabledClass:"disabled",autoplay:false,autopause:true,interval:3E3,clickable:true,api:false}};c.fn.slideshow=function(g){var a=this.data("slideshow");if(a)return a;g=c.extend({},o.conf,g);this.each(function(){a=new p(c(this),g);c(this).data("slideshow",a)});return g.api?a:this}})(jQuery);
(function(f){function p(a,b,c){var h=c.relative?a.position().top:a.offset().top,d=c.relative?a.position().left:a.offset().left,i=c.position[0];h-=b.outerHeight()-c.offset[0];d+=a.outerWidth()+c.offset[1];if(/iPad/i.test(navigator.userAgent))h-=f(window).scrollTop();var j=b.outerHeight()+a.outerHeight();if(i=="center")h+=j/2;if(i=="bottom")h+=j;i=c.position[1];a=b.outerWidth()+a.outerWidth();if(i=="center")d-=a/2;if(i=="left")d-=a;return{top:h,left:d}}function u(a,b){var c=this,h=a.add(c),d,i=0,j=
    0,m=a.attr("title"),q=a.attr("data-tooltip"),r=o[b.effect],l,s=a.is(":input"),v=s&&a.is(":checkbox, :radio, select, :button, :submit"),t=a.attr("type"),k=b.events[t]||b.events[s?v?"widget":"input":"def"];if(!r)throw'Nonexistent effect "'+b.effect+'"';k=k.split(/,\s*/);if(k.length!=2)throw"Tooltip: bad events configuration for "+t;a.bind(k[0],function(e){clearTimeout(i);if(b.predelay)j=setTimeout(function(){c.show(e)},b.predelay);else c.show(e)}).bind(k[1],function(e){clearTimeout(j);if(b.delay)i=
    setTimeout(function(){c.hide(e)},b.delay);else c.hide(e)});if(m&&b.cancelDefault){a.removeAttr("title");a.data("title",m)}f.extend(c,{show:function(e){if(!d){if(q)d=f(q);else if(b.tip)d=f(b.tip).eq(0);else if(m)d=f(b.layout).addClass(b.tipClass).appendTo(document.body).hide().append(m);else{d=a.next();d.length||(d=a.parent().next())}if(!d.length)throw"Cannot find tooltip for "+a;}if(c.isShown())return c;d.stop(true,true);var g=p(a,d,b);b.tip&&d.html(a.data("title"));e=e||f.Event();e.type="onBeforeShow";
    h.trigger(e,[g]);if(e.isDefaultPrevented())return c;g=p(a,d,b);d.css({position:"absolute",top:g.top,left:g.left});l=true;r[0].call(c,function(){e.type="onShow";l="full";h.trigger(e)});g=b.events.tooltip.split(/,\s*/);if(!d.data("__set")){d.bind(g[0],function(){clearTimeout(i);clearTimeout(j)});g[1]&&!a.is("input:not(:checkbox, :radio), textarea")&&d.bind(g[1],function(n){n.relatedTarget!=a[0]&&a.trigger(k[1].split(" ")[0])});d.data("__set",true)}return c},hide:function(e){if(!d||!c.isShown())return c;
    e=e||f.Event();e.type="onBeforeHide";h.trigger(e);if(!e.isDefaultPrevented()){l=false;o[b.effect][1].call(c,function(){e.type="onHide";h.trigger(e)});return c}},isShown:function(e){return e?l=="full":l},getConf:function(){return b},getTip:function(){return d},getTrigger:function(){return a}});f.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(e,g){f.isFunction(b[g])&&f(c).bind(g,b[g]);c[g]=function(n){n&&f(c).bind(g,n);return c}})}f.tools=f.tools||{version:"1.2.5"};f.tools.tooltip=
    {conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,position:["top","center"],offset:[0,0],relative:false,cancelDefault:true,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},layout:"<div/>",tipClass:"tooltip"},addEffect:function(a,b,c){o[a]=[b,c]}};var o={toggle:[function(a){var b=this.getConf(),c=this.getTip();b=b.opacity;b<1&&c.css({opacity:b});c.show();a.call()},function(a){this.getTip().hide();
    a.call()}],fade:[function(a){var b=this.getConf();this.getTip().fadeTo(b.fadeInSpeed,b.opacity,a)},function(a){this.getTip().fadeOut(this.getConf().fadeOutSpeed,a)}]};f.fn.tooltip=function(a){var b=this.data("tooltip");if(b)return b;a=f.extend(true,{},f.tools.tooltip.conf,a);if(typeof a.position=="string")a.position=a.position.split(/,?\s/);this.each(function(){b=new u(f(this),a);f(this).data("tooltip",b)});return a.api?b:this}})(jQuery);
(function(d){var i=d.tools.tooltip;d.extend(i.conf,{direction:"up",bounce:false,slideOffset:10,slideInSpeed:200,slideOutSpeed:200,slideFade:!d.browser.msie});var e={up:["-","top"],down:["+","top"],left:["-","left"],right:["+","left"]};i.addEffect("slide",function(g){var a=this.getConf(),f=this.getTip(),b=a.slideFade?{opacity:a.opacity}:{},c=e[a.direction]||e.up;b[c[1]]=c[0]+"="+a.slideOffset;a.slideFade&&f.css({opacity:0});f.show().animate(b,a.slideInSpeed,g)},function(g){var a=this.getConf(),f=a.slideOffset,
    b=a.slideFade?{opacity:0}:{},c=e[a.direction]||e.up,h=""+c[0];if(a.bounce)h=h=="+"?"-":"+";b[c[1]]=h+"="+f;this.getTip().animate(b,a.slideOutSpeed,function(){d(this).hide();g.call()})})})(jQuery);
(function(g){function j(a){var c=g(window),d=c.width()+c.scrollLeft(),h=c.height()+c.scrollTop();return[a.offset().top<=c.scrollTop(),d<=a.offset().left+a.width(),h<=a.offset().top+a.height(),c.scrollLeft()>=a.offset().left]}function k(a){for(var c=a.length;c--;)if(a[c])return false;return true}var i=g.tools.tooltip;i.dynamic={conf:{classNames:"top right bottom left"}};g.fn.dynamic=function(a){if(typeof a=="number")a={speed:a};a=g.extend({},i.dynamic.conf,a);var c=a.classNames.split(/\s/),d;this.each(function(){var h=
    g(this).tooltip().onBeforeShow(function(e,f){e=this.getTip();var b=this.getConf();d||(d=[b.position[0],b.position[1],b.offset[0],b.offset[1],g.extend({},b)]);g.extend(b,d[4]);b.position=[d[0],d[1]];b.offset=[d[2],d[3]];e.css({visibility:"hidden",position:"absolute",top:f.top,left:f.left}).show();f=j(e);if(!k(f)){if(f[2]){g.extend(b,a.top);b.position[0]="top";e.addClass(c[0])}if(f[3]){g.extend(b,a.right);b.position[1]="right";e.addClass(c[1])}if(f[0]){g.extend(b,a.bottom);b.position[0]="bottom";e.addClass(c[2])}if(f[1]){g.extend(b,
        a.left);b.position[1]="left";e.addClass(c[3])}if(f[0]||f[2])b.offset[0]*=-1;if(f[1]||f[3])b.offset[1]*=-1}e.css({visibility:"visible"}).hide()});h.onBeforeShow(function(){var e=this.getConf();this.getTip();setTimeout(function(){e.position=[d[0],d[1]];e.offset=[d[2],d[3]]},0)});h.onHide(function(){var e=this.getTip();e.removeClass(a.classNames)});ret=h});return a.api?ret:this}})(jQuery);
(function(a){function t(d,b){var c=this,j=d.add(c),o=a(window),k,f,m,g=a.tools.expose&&(b.mask||b.expose),n=Math.random().toString().slice(10);if(g){if(typeof g=="string")g={color:g};g.closeOnClick=g.closeOnEsc=false}var p=b.target||d.attr("rel");f=p?a(p):d;if(!f.length)throw"Could not find Overlay: "+p;d&&d.index(f)==-1&&d.click(function(e){c.load(e);return e.preventDefault()});a.extend(c,{load:function(e){if(c.isOpened())return c;var h=q[b.effect];if(!h)throw'Overlay: cannot find effect : "'+b.effect+
'"';b.oneInstance&&a.each(s,function(){this.close(e)});e=e||a.Event();e.type="onBeforeLoad";j.trigger(e);if(e.isDefaultPrevented())return c;m=true;g&&a(f).expose(g);var i=b.top,r=b.left,u=f.outerWidth({margin:true}),v=f.outerHeight({margin:true});if(typeof i=="string")i=i=="center"?Math.max((o.height()-v)/2,0):parseInt(i,10)/100*o.height();if(r=="center")r=Math.max((o.width()-u)/2,0);h[0].call(c,{top:i,left:r},function(){if(m){e.type="onLoad";j.trigger(e)}});g&&b.closeOnClick&&a.mask.getMask().one("click",
    c.close);b.closeOnClick&&a(document).bind("click."+n,function(l){a(l.target).parents(f).length||c.close(l)});b.closeOnEsc&&a(document).bind("keydown."+n,function(l){l.keyCode==27&&c.close(l)});return c},close:function(e){if(!c.isOpened())return c;e=e||a.Event();e.type="onBeforeClose";j.trigger(e);if(!e.isDefaultPrevented()){m=false;q[b.effect][1].call(c,function(){e.type="onClose";j.trigger(e)});a(document).unbind("click."+n).unbind("keydown."+n);g&&a.mask.close();return c}},getOverlay:function(){return f},
    getTrigger:function(){return d},getClosers:function(){return k},isOpened:function(){return m},getConf:function(){return b}});a.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","),function(e,h){a.isFunction(b[h])&&a(c).bind(h,b[h]);c[h]=function(i){i&&a(c).bind(h,i);return c}});k=f.find(b.close||".close");if(!k.length&&!b.close){k=a('<a class="close"></a>');f.prepend(k)}k.click(function(e){c.close(e)});b.load&&c.load()}a.tools=a.tools||{version:"1.2.5"};a.tools.overlay={addEffect:function(d,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 b,c){q[d]=[b,c]},conf:{close:null,closeOnClick:true,closeOnEsc:true,closeSpeed:"fast",effect:"default",fixed:!a.browser.msie||a.browser.version>6,left:"center",load:false,mask:null,oneInstance:true,speed:"normal",target:null,top:"10%"}};var s=[],q={};a.tools.overlay.addEffect("default",function(d,b){var c=this.getConf(),j=a(window);if(!c.fixed){d.top+=j.scrollTop();d.left+=j.scrollLeft()}d.position=c.fixed?"fixed":"absolute";this.getOverlay().css(d).fadeIn(c.speed,b)},function(d){this.getOverlay().fadeOut(this.getConf().closeSpeed,
    d)});a.fn.overlay=function(d){var b=this.data("overlay");if(b)return b;if(a.isFunction(d))d={onBeforeLoad:d};d=a.extend(true,{},a.tools.overlay.conf,d);this.each(function(){b=new t(a(this),d);s.push(b);a(this).data("overlay",b)});return d.api?b:this}})(jQuery);
(function(h){function k(d){var e=d.offset();return{top:e.top+d.height()/2,left:e.left+d.width()/2}}var l=h.tools.overlay,f=h(window);h.extend(l.conf,{start:{top:null,left:null},fadeInSpeed:"fast",zIndex:9999});function o(d,e){var a=this.getOverlay(),c=this.getConf(),g=this.getTrigger(),p=this,m=a.outerWidth({margin:true}),b=a.data("img"),n=c.fixed?"fixed":"absolute";if(!b){b=a.css("backgroundImage");if(!b)throw"background-image CSS property not set for overlay";b=b.slice(b.indexOf("(")+1,b.indexOf(")")).replace(/\"/g,
    "");a.css("backgroundImage","none");b=h('<img src="'+b+'"/>');b.css({border:0,display:"none"}).width(m);h("body").append(b);a.data("img",b)}var i=c.start.top||Math.round(f.height()/2),j=c.start.left||Math.round(f.width()/2);if(g){g=k(g);i=g.top;j=g.left}if(c.fixed){i-=f.scrollTop();j-=f.scrollLeft()}else{d.top+=f.scrollTop();d.left+=f.scrollLeft()}b.css({position:"absolute",top:i,left:j,width:0,zIndex:c.zIndex}).show();d.position=n;a.css(d);b.animate({top:a.css("top"),left:a.css("left"),width:m},
    c.speed,function(){a.css("zIndex",c.zIndex+1).fadeIn(c.fadeInSpeed,function(){p.isOpened()&&!h(this).index(a)?e.call():a.hide()})}).css("position",n)}function q(d){var e=this.getOverlay().hide(),a=this.getConf(),c=this.getTrigger();e=e.data("img");var g={top:a.start.top,left:a.start.left,width:0};c&&h.extend(g,k(c));a.fixed&&e.css({position:"absolute"}).animate({top:"+="+f.scrollTop(),left:"+="+f.scrollLeft()},0);e.animate(g,a.closeSpeed,d)}l.addEffect("apple",o,q)})(jQuery);
(function(e){function F(d,a){a=Math.pow(10,a);return Math.round(d*a)/a}function q(d,a){if(a=parseInt(d.css(a),10))return a;return(d=d[0].currentStyle)&&d.width&&parseInt(d.width,10)}function C(d){return(d=d.data("events"))&&d.onSlide}function G(d,a){function h(c,b,f,j){if(f===undefined)f=b/k*z;else if(j)f-=a.min;if(s)f=Math.round(f/s)*s;if(b===undefined||s)b=f*k/z;if(isNaN(f))return g;b=Math.max(0,Math.min(b,k));f=b/k*z;if(j||!n)f+=a.min;if(n)if(j)b=k-b;else f=a.max-f;f=F(f,t);var r=c.type=="click";
    if(D&&l!==undefined&&!r){c.type="onSlide";A.trigger(c,[f,b]);if(c.isDefaultPrevented())return g}j=r?a.speed:0;r=r?function(){c.type="change";A.trigger(c,[f])}:null;if(n){m.animate({top:b},j,r);a.progress&&B.animate({height:k-b+m.width()/2},j)}else{m.animate({left:b},j,r);a.progress&&B.animate({width:b+m.width()/2},j)}l=f;H=b;d.val(f);return g}function o(){if(n=a.vertical||q(i,"height")>q(i,"width")){k=q(i,"height")-q(m,"height");u=i.offset().top+k}else{k=q(i,"width")-q(m,"width");u=i.offset().left}}
    function v(){o();g.setValue(a.value!==undefined?a.value:a.min)}var g=this,p=a.css,i=e("<div><div/><a href='#'/></div>").data("rangeinput",g),n,l,u,k,H;d.before(i);var m=i.addClass(p.slider).find("a").addClass(p.handle),B=i.find("div").addClass(p.progress);e.each("min,max,step,value".split(","),function(c,b){c=d.attr(b);if(parseFloat(c))a[b]=parseFloat(c,10)});var z=a.max-a.min,s=a.step=="any"?0:a.step,t=a.precision;if(t===undefined)try{t=s.toString().split(".")[1].length}catch(I){t=0}if(d.attr("type")==
        "range"){var w=e("<input/>");e.each("class,disabled,id,maxlength,name,readonly,required,size,style,tabindex,title,value".split(","),function(c,b){w.attr(b,d.attr(b))});w.val(a.value);d.replaceWith(w);d=w}d.addClass(p.input);var A=e(g).add(d),D=true;e.extend(g,{getValue:function(){return l},setValue:function(c,b){o();return h(b||e.Event("api"),undefined,c,true)},getConf:function(){return a},getProgress:function(){return B},getHandle:function(){return m},getInput:function(){return d},step:function(c,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             b){b=b||e.Event();var f=a.step=="any"?1:a.step;g.setValue(l+f*(c||1),b)},stepUp:function(c){return g.step(c||1)},stepDown:function(c){return g.step(-c||-1)}});e.each("onSlide,change".split(","),function(c,b){e.isFunction(a[b])&&e(g).bind(b,a[b]);g[b]=function(f){f&&e(g).bind(b,f);return g}});m.drag({drag:false}).bind("dragStart",function(){o();D=C(e(g))||C(d)}).bind("drag",function(c,b,f){if(d.is(":disabled"))return false;h(c,n?b:f)}).bind("dragEnd",function(c){if(!c.isDefaultPrevented()){c.type=
        "change";A.trigger(c,[l])}}).click(function(c){return c.preventDefault()});i.click(function(c){if(d.is(":disabled")||c.target==m[0])return c.preventDefault();o();var b=m.width()/2;h(c,n?k-u-b+c.pageY:c.pageX-u-b)});a.keyboard&&d.keydown(function(c){if(!d.attr("readonly")){var b=c.keyCode,f=e([75,76,38,33,39]).index(b)!=-1,j=e([74,72,40,34,37]).index(b)!=-1;if((f||j)&&!(c.shiftKey||c.altKey||c.ctrlKey)){if(f)g.step(b==33?10:1,c);else if(j)g.step(b==34?-10:-1,c);return c.preventDefault()}}});d.blur(function(c){var b=
        e(this).val();b!==l&&g.setValue(b,c)});e.extend(d[0],{stepUp:g.stepUp,stepDown:g.stepDown});v();k||e(window).load(v)}e.tools=e.tools||{version:"1.2.5"};var E;E=e.tools.rangeinput={conf:{min:0,max:100,step:"any",steps:0,value:0,precision:undefined,vertical:0,keyboard:true,progress:false,speed:100,css:{input:"range",slider:"slider",progress:"progress",handle:"handle"}}};var x,y;e.fn.drag=function(d){document.ondragstart=function(){return false};d=e.extend({x:true,y:true,drag:true},d);x=x||e(document).bind("mousedown mouseup",
        function(a){var h=e(a.target);if(a.type=="mousedown"&&h.data("drag")){var o=h.position(),v=a.pageX-o.left,g=a.pageY-o.top,p=true;x.bind("mousemove.drag",function(i){var n=i.pageX-v;i=i.pageY-g;var l={};if(d.x)l.left=n;if(d.y)l.top=i;if(p){h.trigger("dragStart");p=false}d.drag&&h.css(l);h.trigger("drag",[i,n]);y=h});a.preventDefault()}else try{y&&y.trigger("dragEnd")}finally{x.unbind("mousemove.drag");y=null}});return this.data("drag",true)};e.expr[":"].range=function(d){var a='range'; if (typeof d.getAttribute=='function')a=d.getAttribute("type");
    return a&&a=="range"||!!e(d).filter("input").data("rangeinput")};e.fn.rangeinput=function(d){if(this.data("rangeinput"))return this;d=e.extend(true,{},E.conf,d);var a;this.each(function(){var h=new G(e(this),e.extend(true,{},d));h=h.getInput().data("rangeinput",h);a=a?a.add(h):h});return a?a:this}})(jQuery);
(function(){function f(a,b){if(b)for(var c in b)if(b.hasOwnProperty(c))a[c]=b[c];return a}function l(a,b){var c=[];for(var d in a)if(a.hasOwnProperty(d))c[d]=b(a[d]);return c}function m(a,b,c){if(e.isSupported(b.version))a.innerHTML=e.getHTML(b,c);else if(b.expressInstall&&e.isSupported([6,65]))a.innerHTML=e.getHTML(f(b,{src:b.expressInstall}),{MMredirectURL:location.href,MMplayerType:"PlugIn",MMdoctitle:document.title});else{if(!a.innerHTML.replace(/\s/g,"")){a.innerHTML="<h2>Flash version "+b.version+
    " or greater is required</h2><h3>"+(g[0]>0?"Your version is "+g:"You have no flash plugin installed")+"</h3>"+(a.tagName=="A"?"<p>Click here to download latest version</p>":"<p>Download latest version from <a href='"+k+"'>here</a></p>");if(a.tagName=="A")a.onclick=function(){location.href=k}}if(b.onFail){var d=b.onFail.call(this);if(typeof d=="string")a.innerHTML=d}}if(i)window[b.id]=document.getElementById(b.id);f(this,{getRoot:function(){return a},getOptions:function(){return b},getConf:function(){return c},
    getApi:function(){return a.firstChild}})}var i=document.all,k="http://www.adobe.com/go/getflashplayer",n=typeof jQuery=="function",o=/(\d+)[^\d]+(\d+)[^\d]*(\d*)/,j={width:"100%",height:"100%",id:"_"+(""+Math.random()).slice(9),allowfullscreen:true,allowscriptaccess:"always",quality:"high",version:[3,0],onFail:null,expressInstall:null,w3c:false,cachebusting:false};window.attachEvent&&window.attachEvent("onbeforeunload",function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){}});
    window.flashembed=function(a,b,c){if(typeof a=="string")a=document.getElementById(a.replace("#",""));if(a){if(typeof b=="string")b={src:b};return new m(a,f(f({},j),b),c)}};var e=f(window.flashembed,{conf:j,getVersion:function(){var a,b;try{b=navigator.plugins["Shockwave Flash"].description.slice(16)}catch(c){try{b=(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"))&&a.GetVariable("$version")}catch(d){try{b=(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"))&&a.GetVariable("$version")}catch(h){}}}return(b=
        o.exec(b))?[b[1],b[3]]:[0,0]},asString:function(a){if(a===null||a===undefined)return null;var b=typeof a;if(b=="object"&&a.push)b="array";switch(b){case "string":a=a.replace(new RegExp('(["\\\\])',"g"),"\\$1");a=a.replace(/^\s?(\d+\.?\d+)%/,"$1pct");return'"'+a+'"';case "array":return"["+l(a,function(d){return e.asString(d)}).join(",")+"]";case "function":return'"function()"';case "object":b=[];for(var c in a)a.hasOwnProperty(c)&&b.push('"'+c+'":'+e.asString(a[c]));return"{"+b.join(",")+"}"}return String(a).replace(/\s/g,
        " ").replace(/\'/g,'"')},getHTML:function(a,b){a=f({},a);var c='<object width="'+a.width+'" height="'+a.height+'" id="'+a.id+'" name="'+a.id+'"';if(a.cachebusting)a.src+=(a.src.indexOf("?")!=-1?"&":"?")+Math.random();c+=a.w3c||!i?' data="'+a.src+'" type="application/x-shockwave-flash"':' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"';c+=">";if(a.w3c||i)c+='<param name="movie" value="'+a.src+'" />';a.width=a.height=a.id=a.w3c=a.src=null;a.onFail=a.version=a.expressInstall=null;for(var d in a)if(a[d])c+=
        '<param name="'+d+'" value="'+a[d]+'" />';a="";if(b){for(var h in b)if(b[h]){d=b[h];a+=h+"="+(/function|object/.test(typeof d)?e.asString(d):d)+"&"}a=a.slice(0,-1);c+='<param name="flashvars" value=\''+a+"' />"}c+="</object>";return c},isSupported:function(a){return g[0]>a[0]||g[0]==a[0]&&g[1]>=a[1]}}),g=e.getVersion();if(n){jQuery.tools=jQuery.tools||{version:"1.2.5"};jQuery.tools.flashembed={conf:j};jQuery.fn.flashembed=function(a,b){return this.each(function(){$(this).data("flashembed",flashembed(this,
        a,b))})}}})();
(function(b){function k(){if(b.browser.msie){var a=b(document).height(),d=b(window).height();return[window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,a-d<20?d:a]}return[b(document).width(),b(document).height()]}function h(a){if(a)return a.call(b.mask)}b.tools=b.tools||{version:"1.2.5"};var l;l=b.tools.expose={conf:{maskId:"exposeMask",loadSpeed:"slow",closeSpeed:"fast",closeOnClick:true,closeOnEsc:true,zIndex:9998,opacity:0.8,startOpacity:0,color:"#fff",onLoad:null,
    onClose:null}};var c,i,e,g,j;b.mask={load:function(a,d){if(e)return this;if(typeof a=="string")a={color:a};a=a||g;g=a=b.extend(b.extend({},l.conf),a);c=b("#"+a.maskId);if(!c.length){c=b("<div/>").attr("id",a.maskId);b("body").append(c)}var m=k();c.css({position:"absolute",top:0,left:0,width:m[0],height:m[1],display:"none",opacity:a.startOpacity,zIndex:a.zIndex});a.color&&c.css("backgroundColor",a.color);if(h(a.onBeforeLoad)===false)return this;a.closeOnEsc&&b(document).bind("keydown.mask",function(f){f.keyCode==
27&&b.mask.close(f)});a.closeOnClick&&c.bind("click.mask",function(f){b.mask.close(f)});b(window).bind("resize.mask",function(){b.mask.fit()});if(d&&d.length){j=d.eq(0).css("zIndex");b.each(d,function(){var f=b(this);/relative|absolute|fixed/i.test(f.css("position"))||f.css("position","relative")});i=d.css({zIndex:Math.max(a.zIndex+1,j=="auto"?0:j)})}c.css({display:"block"}).fadeTo(a.loadSpeed,a.opacity,function(){b.mask.fit();h(a.onLoad);e="full"});e=true;return this},close:function(){if(e){if(h(g.onBeforeClose)===
    false)return this;c.fadeOut(g.closeSpeed,function(){h(g.onClose);i&&i.css({zIndex:j});e=false});b(document).unbind("keydown.mask");c.unbind("click.mask");b(window).unbind("resize.mask")}return this},fit:function(){if(e){var a=k();c.css({width:a[0],height:a[1]})}},getMask:function(){return c},isLoaded:function(a){return a?e=="full":e},getConf:function(){return g},getExposed:function(){return i}};b.fn.mask=function(a){b.mask.load(a);return this};b.fn.expose=function(a){b.mask.load(a,this);return this}})(jQuery);
(function(b){function c(a){switch(a.type){case "mousemove":return b.extend(a.data,{clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY});case "DOMMouseScroll":b.extend(a,a.data);a.delta=-a.detail/3;break;case "mousewheel":a.delta=a.wheelDelta/120;break}a.type="wheel";return b.event.handle.call(this,a,a.delta)}b.fn.mousewheel=function(a){return this[a?"bind":"trigger"]("wheel",a)};b.event.special.wheel={setup:function(){b.event.add(this,d,c,{})},teardown:function(){b.event.remove(this,
    d,c)}};var d=!b.browser.mozilla?"mousewheel":"DOMMouseScroll"+(b.browser.version<"1.9"?" mousemove":"")})(jQuery);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:41:"/js/jquery.jqtransform.js?137066060613898";s:6:"source";s:25:"/js/jquery.jqtransform.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 *
 * jqTransform
 * by mathieu vilaplana mvilaplana@dfc-e.com
 * Designer ghyslain armand garmand@dfc-e.com
 *
 *
 * Version 1.0 25.09.08
 * Version 1.1 06.08.09
 * Add event click on Checkbox and Radio
 * Auto calculate the size of a select element
 * Can now, disabled the elements
 * Correct bug in ff if click on select (overflow=hidden)
 * No need any more preloading !!
 *
 ******************************************** */

(function($){
    var defaultOptions = {preloadImg:true};
    var jqTransformImgPreloaded = false;

    var jqTransformPreloadHoverFocusImg = function(strImgUrl) {
        //guillemets to remove for ie
        strImgUrl = strImgUrl.replace(/^url\((.*)\)/,'$1').replace(/^\"(.*)\"$/,'$1');
        var imgHover = new Image();
        imgHover.src = strImgUrl.replace(/\.([a-zA-Z]*)$/,'-hover.$1');
        var imgFocus = new Image();
        imgFocus.src = strImgUrl.replace(/\.([a-zA-Z]*)$/,'-focus.$1');
    };


    /***************************
     Labels
     ***************************/
    var jqTransformGetLabel = function(objfield){
        var selfForm = $(objfield.get(0).form);
        var oLabel = objfield.next();
        if(!oLabel.is('label')) {
            oLabel = objfield.prev();
            if(oLabel.is('label')){
                var inputname = objfield.attr('id');
                if(inputname){
                    oLabel = selfForm.find('label[for="'+inputname+'"]');
                }
            }
        }
        if(oLabel.is('label')){return oLabel.css('cursor','pointer');}
        return false;
    };

    /* Hide all open selects */
    var jqTransformHideSelect = function(oTarget){
        var ulVisible = $('.jqTransformSelectWrapper ul:visible');
        ulVisible.each(function(){
            var oSelect = $(this).parents(".jqTransformSelectWrapper:first").find("select").get(0);
            //do not hide if click on the label object associated to the select
            if( !(oTarget && oSelect.oLabel && oSelect.oLabel.get(0) == oTarget.get(0)) ){$(this).hide();}
        });
    };
    /* Check for an external click */
    var jqTransformCheckExternalClick = function(event) {
        if ($(event.target).parents('.jqTransformSelectWrapper').length === 0) { jqTransformHideSelect($(event.target)); }
    };

    /* Apply document listener */
    var jqTransformAddDocumentListener = function (){
        $(document).mousedown(jqTransformCheckExternalClick);
    };

    /* Add a new handler for the reset action */
    var jqTransformReset = function(f){
        var sel;
        $('.jqTransformSelectWrapper select', f).each(function(){sel = (this.selectedIndex<0) ? 0 : this.selectedIndex; $('ul', $(this).parent()).each(function(){$('a:eq('+ sel +')', this).click();});});
        $('a.jqTransformCheckbox, a.jqTransformRadio', f).removeClass('jqTransformChecked');
        $('input:checkbox, input:radio', f).each(function(){if(this.checked){$('a', $(this).parent()).addClass('jqTransformChecked');}});
    };

    /***************************
     Buttons
     ***************************/
    $.fn.jqTransInputButton = function(){
        return this.each(function(){
            var newBtn = $('<button id="'+ this.id +'" name="'+ this.name +'" type="'+ this.type +'" class="'+ this.className +' jqTransformButton"><span><span>'+ $(this).attr('value') +'</span></span>')
                .hover(function(){newBtn.addClass('jqTransformButton_hover');},function(){newBtn.removeClass('jqTransformButton_hover')})
                .mousedown(function(){newBtn.addClass('jqTransformButton_click')})
                .mouseup(function(){newBtn.removeClass('jqTransformButton_click')})
            ;
            $(this).replaceWith(newBtn);
        });
    };

    /***************************
     Text Fields
     ***************************/
    $.fn.jqTransInputText = function(){
        return this.each(function(){
            var $input = $(this);

            if ($input.hasClass("range")) return;

            if($input.hasClass('jqtranformdone') || !$input.is('input')) {return;}
            $input.addClass('jqtranformdone');

            var oLabel = jqTransformGetLabel($(this));
            oLabel && oLabel.bind('click',function(){$input.focus();});

            var inputSize=$input.width();
            if($input.attr('size')){
                inputSize = $input.attr('size')*10;
                $input.css('width',inputSize);
            }

            $input.addClass("jqTransformInput").wrap('<div class="jqTransformInputWrapper"><div class="jqTransformInputInner"><div></div></div></div>');
            var $wrapper = $input.parent().parent().parent();
            $wrapper.css("width", inputSize+10);
            $input
                .focus(function(){$wrapper.addClass("jqTransformInputWrapper_focus");})
                .blur(function(){$wrapper.removeClass("jqTransformInputWrapper_focus");})
                .hover(function(){$wrapper.addClass("jqTransformInputWrapper_hover");},function(){$wrapper.removeClass("jqTransformInputWrapper_hover");})
            ;

            /* If this is safari we need to add an extra class */
            $.browser.safari && $wrapper.addClass('jqTransformSafari');
            $.browser.safari && $input.css('width',$wrapper.width()+16);
            this.wrapper = $wrapper;

        });
    };

    /***************************
     Check Boxes
     ***************************/
    $.fn.jqTransCheckBox = function(){
        return this.each(function(){
            if($(this).hasClass('jqTransformHidden')) {return;}

            var $input = $(this);
            var inputSelf = this;

            //set the click on the label
            var oLabel=jqTransformGetLabel($input);
            oLabel && oLabel.click(function(){aLink.trigger('click');});

            var aLink = $('<a href="#" class="jqTransformCheckbox"></a>');
            //wrap and add the link
            $input.addClass('jqTransformHidden').wrap('<span class="jqTransformCheckboxWrapper"></span>').parent().prepend(aLink);
            //on change, change the class of the link
            $input.change(function(){
                this.checked && aLink.addClass('jqTransformChecked') || aLink.removeClass('jqTransformChecked');
                return true;
            });
            // Click Handler, trigger the click and change event on the input
            aLink.click(function(){
                //do nothing if the original input is disabled
                if($input.attr('disabled')){return false;}
                //trigger the envents on the input object
                $input.trigger('click').trigger("change");
                return false;
            });

            // set the default state
            this.checked && aLink.addClass('jqTransformChecked');
        });
    };
    /***************************
     Radio Buttons
     ***************************/
    $.fn.jqTransRadio = function(){
        return this.each(function(){
            if($(this).hasClass('jqTransformHidden')) {return;}

            var $input = $(this);
            var inputSelf = this;

            var oLabel = jqTransformGetLabel($input);
            oLabel && oLabel.click(function(){aLink.trigger('click');});

            var aLink = $('<a href="#" class="jqTransformRadio"></a>');
            $input.addClass('jqTransformHidden').wrap('<span class="jqTransformRadioWrapper"></span>').parent().prepend(aLink);

            $input.change(function(){
                inputSelf.checked && aLink.addClass('jqTransformChecked') || aLink.removeClass('jqTransformChecked');
                return true;
            });
            // Click Handler
            aLink.click(function(){
                if($input.attr('disabled')){return false;}
                $input.trigger('click').trigger('change');

                // uncheck all others of same name input radio elements
                $('input[name="'+$input.attr('name')+'"]',inputSelf.form).not($input).each(function(){
                    $(this).attr('type')=='radio' && $(this).trigger('change');
                });

                /* ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ */
                $("input:radio").trigger("change");

                return false;
            });
            // set the default state
            inputSelf.checked && aLink.addClass('jqTransformChecked');
        });
    };

    /***************************
     TextArea
     ***************************/
    $.fn.jqTransTextarea = function(){
        return this.each(function(){
            var textarea = $(this);

            if(textarea.hasClass('jqtransformdone')) {return;}
            textarea.addClass('jqtransformdone');

            var oLabel = jqTransformGetLabel(textarea);
            oLabel && oLabel.click(function(){textarea.focus();});

            var strTable = '<table cellspacing="0" cellpadding="0" border="0" class="jqTransformTextarea">';
            strTable +='<tr><td id="jqTransformTextarea-tl"></td><td id="jqTransformTextarea-tm"></td><td id="jqTransformTextarea-tr"></td></tr>';
            strTable +='<tr><td id="jqTransformTextarea-ml">&nbsp;</td><td id="jqTransformTextarea-mm"><div></div></td><td id="jqTransformTextarea-mr">&nbsp;</td></tr>';
            strTable +='<tr><td id="jqTransformTextarea-bl"></td><td id="jqTransformTextarea-bm"></td><td id="jqTransformTextarea-br"></td></tr>';
            strTable +='</table>';
            var oTable = $(strTable)
                .insertAfter(textarea)
                .hover(function(){
                    !oTable.hasClass('jqTransformTextarea-focus') && oTable.addClass('jqTransformTextarea-hover');
                },function(){
                    oTable.removeClass('jqTransformTextarea-hover');
                })
            ;

            textarea
                .focus(function(){oTable.removeClass('jqTransformTextarea-hover').addClass('jqTransformTextarea-focus');})
                .blur(function(){oTable.removeClass('jqTransformTextarea-focus');})
                .appendTo($('#jqTransformTextarea-mm div',oTable))
            ;
            this.oTable = oTable;
            if($.browser.safari){
                $('#jqTransformTextarea-mm',oTable)
                    .addClass('jqTransformSafariTextarea')
                    .find('div')
                    .css('height',textarea.height())
                    .css('width',textarea.width())
                ;
            }
        });
    };

    /***************************
     Select
     ***************************/
    $.fn.jqTransSelect = function(){
        return this.each(function(index){
            var $select = $(this);

            if($select.hasClass('jqTransformHidden')) {return;}
            if($select.attr('multiple')) {return;}

            var oLabel  =  jqTransformGetLabel($select);
            /* First thing we do is Wrap it */
            var zIndexV = $select.attr('tabindex');
            if (zIndexV <= 0)
                zIndexV = 10 - index;
            var $wrapper = $select
                .addClass('jqTransformHidden')
                .wrap('<div class="jqTransformSelectWrapper"></div>')
                .parent()
                .css({zIndex: zIndexV})
            ;

            /* Now add the html for the select */
            $wrapper.prepend('<div><span></span><a href="#" class="jqTransformSelectOpen"></a></div><ul></ul>');
            var $ul = $('ul', $wrapper).css('width',$select.width()).hide();
            /* Now we add the options */
            $('option', this).each(function(i){
                var oLi = $('<li><a href="#" index="'+ i +'">'+ $(this).html() +'</a></li>');
                $ul.append(oLi);
            });

            /* Add click handler to the a */
            $ul.find('a').click(function(){
                $('a.selected', $wrapper).removeClass('selected');
                $(this).addClass('selected');
                /* Fire the onchange event */
                if ($select[0].selectedIndex != $(this).attr('index') && $select[0].onchange) { $select[0].selectedIndex = $(this).attr('index'); $select[0].onchange(); }
                $select[0].selectedIndex = $(this).attr('index');
                $('span:eq(0)', $wrapper).html($(this).html());
                $ul.hide();
                return false;
            });
            /* Set the default */
            $('a:eq('+ this.selectedIndex +')', $ul).click();
            $('span:first', $wrapper).click(function(){$("a.jqTransformSelectOpen",$wrapper).trigger('click');});
            oLabel && oLabel.click(function(){$("a.jqTransformSelectOpen",$wrapper).trigger('click');});
            this.oLabel = oLabel;

            /* Apply the click handler to the Open */
            var oLinkOpen = $('a.jqTransformSelectOpen', $wrapper)
                .click(function(){
                    //Check if box is already open to still allow toggle, but close all other selects
                    if( $ul.css('display') == 'none' ) {jqTransformHideSelect();}
                    if($select.attr('disabled')){return false;}

                    $ul.slideToggle('fast', function(){
                        var offSet = ($('a.selected', $ul).offset().top - $ul.offset().top);
                        $ul.animate({scrollTop: offSet});
                    });
                    return false;
                })
            ;

            // Set the new width
            var iSelectWidth = $select.outerWidth();
            var oSpan = $('span:first',$wrapper);
            var newWidth = (iSelectWidth > oSpan.innerWidth())?iSelectWidth+oLinkOpen.outerWidth():$wrapper.width();
            $wrapper.css('width',newWidth);
            $ul.css('width',newWidth-2);
            oSpan.css({width:iSelectWidth});

            // Calculate the height if necessary, less elements that the default height
            //show the ul to calculate the block, if ul is not displayed li height value is 0
            $ul.css({display:'block',visibility:'hidden'});
            var iSelectHeight = ($('li',$ul).length)*($('li:first',$ul).height());//+1 else bug ff
            (iSelectHeight < $ul.height()) && $ul.css({height:iSelectHeight,'overflow':'hidden'});//hidden else bug with ff
            $ul.css({display:'none',visibility:'visible'});

        });
    };
    $.fn.jqTransform = function(options){
        var opt = $.extend({},defaultOptions,options);

        /* each form */
        return this.each(function(){
            var selfForm = $(this);
            if(selfForm.hasClass('jqtransformdone')) {return;}
            selfForm.addClass('jqtransformdone');

            $('input:submit, input:reset, input[type="button"]', this).jqTransInputButton();
            $('input:text, input:password', this).jqTransInputText();
            $('input:checkbox', this).jqTransCheckBox();
            $('input:radio', this).jqTransRadio();
            $('textarea', this).jqTransTextarea();

            if( $('select', this).jqTransSelect().length > 0 ){jqTransformAddDocumentListener();}
            selfForm.bind('reset',function(){var action = function(){jqTransformReset(this);}; window.setTimeout(action, 10);});

            //preloading dont needed anymore since normal, focus and hover image are the same one
            /*if(opt.preloadImg && !jqTransformImgPreloaded){
             jqTransformImgPreloaded = true;
             var oInputText = $('input:text:first', selfForm);
             if(oInputText.length > 0){
             //pour ie on eleve les ""
             var strWrapperImgUrl = oInputText.get(0).wrapper.css('background-image');
             jqTransformPreloadHoverFocusImg(strWrapperImgUrl);
             var strInnerImgUrl = $('div.jqTransformInputInner',$(oInputText.get(0).wrapper)).css('background-image');
             jqTransformPreloadHoverFocusImg(strInnerImgUrl);
             }

             var oTextarea = $('textarea',selfForm);
             if(oTextarea.length > 0){
             var oTable = oTextarea.get(0).oTable;
             $('td',oTable).each(function(){
             var strImgBack = $(this).css('background-image');
             jqTransformPreloadHoverFocusImg(strImgBack);
             });
             }
             }*/


        }); /* End Form each */

    };/* End the Plugin */

})(jQuery);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:43:"/js/jquery.filestyle.mini.js?13706606051015";s:6:"source";s:28:"/js/jquery.filestyle.mini.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/

(function($){$.fn.filestyle=function(options){var settings={width:250};if(options){$.extend(settings,options);};return this.each(function(){var self=this;var wrapper=$("<div>").css({"width":settings.imagewidth+"px","height":settings.imageheight+"px","background":"url("+settings.image+") 0 0 no-repeat","background-position":"right","display":"inline","position":"absolute","overflow":"hidden"});var filename=$('<input class="file">').addClass($(self).attr("class")).css({"display":"inline","width":settings.width+"px"});$(self).before(filename);$(self).wrap(wrapper);$(self).css({"position":"relative","height":settings.imageheight+"px","width":settings.width+"px","display":"inline","cursor":"pointer","opacity":"0.0"});if($.browser.mozilla){if(/Win/.test(navigator.platform)){$(self).css("margin-left","-142px");}else{$(self).css("margin-left","-168px");};}else{$(self).css("margin-left",settings.imagewidth-settings.width+"px");};$(self).bind("change",function(){filename.val($(self).val());});});};})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:47:"/js/jquery.scrollTo-1.4.2-min.js?13706606062262";s:6:"source";s:32:"/js/jquery.scrollTo-1.4.2-min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:50:"/js/jquery.localscroll-1.2.7-min.js?13706606051552";s:6:"source";s:35:"/js/jquery.localscroll-1.2.7-min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * jQuery.LocalScroll - Animated scrolling navigation, using anchors.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 3/11/2009
 * @author Ariel Flesler
 * @version 1.2.7
 **/
;(function($){var l=location.href.replace(/#.*/,'');var g=$.localScroll=function(a){$('body').localScroll(a)};g.defaults={duration:1e3,axis:'y',event:'click',stop:true,target:window,reset:true};g.hash=function(a){if(location.hash){a=$.extend({},g.defaults,a);a.hash=false;if(a.reset){var e=a.duration;delete a.duration;$(a.target).scrollTo(0,a);a.duration=e}i(0,location,a)}};$.fn.localScroll=function(b){b=$.extend({},g.defaults,b);return b.lazy?this.bind(b.event,function(a){var e=$([a.target,a.target.parentNode]).filter(d)[0];if(e)i(a,e,b)}):this.find('a,area').filter(d).bind(b.event,function(a){i(a,this,b)}).end().end();function d(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')==l&&(!b.filter||$(this).is(b.filter))}};function i(a,e,b){var d=e.hash.slice(1),f=document.getElementById(d)||document.getElementsByName(d)[0];if(!f)return;if(a)a.preventDefault();var h=$(b.target);if(b.lock&&h.is(':animated')||b.onBefore&&b.onBefore.call(b,a,f,h)===false)return;if(b.stop)h.stop(true);if(b.hash){var j=f.id==d?'id':'name',k=$('<a> </a>').attr(j,d).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});f[j]='';$('body').prepend(k);location=e.hash;k.remove();f[j]=d}h.scrollTo(f,b).trigger('notify.serialScroll',[f])}})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:35:"/js/cookie.jquery.js?13706606054341";s:6:"source";s:20:"/js/cookie.jquery.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
/* End */
;
; /* Start:"a:4:{s:4:"full";s:29:"/js/script.js?148292836315073";s:6:"source";s:13:"/js/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/

Cufon.replace(".agora", {fontFamily:'Bliss Pro', fontWeight:'normal'});
Cufon.replace(".windowTitle", {fontFamily:'Bliss Pro', fontWeight:'normal'});
Cufon.replace(".advBlock .title", {fontFamily:'Bliss Pro', fontWeight:'normal', color:'#2F7F00'});
Cufon.replace(".advLinkBlock .more", {fontFamily:'Bliss Pro', fontWeight:'normal' , color:'#fff', hover:{color:'#A4D509'}});
Cufon.replace(".advLinkBlock .find", {fontFamily:'Bliss Pro', fontWeight:'normal', hover:{color:'#A4D509'}});
Cufon.replace(".advLinkBlock .moreCorporate", {fontFamily:'Bliss Pro', fontWeight:'normal' , color:'#fff', hover:{color:'#82D3E3'}});
Cufon.replace(".advLinkBlock .findCorporate", {fontFamily:'Bliss Pro', fontWeight:'normal', hover:{color:'#82D3E3'}});
Cufon.replace(".titleWrapper > h1", {fontFamily:'Bliss Pro', fontWeight:'normal', color: "-linear-gradient(#009ca9, 0.3=#009ca9, 0.7=#007487, #007487)"});

Cufon.replace(".video_heading", {fontFamily:'Bliss Pro', fontWeight:'normal', color: "-linear-gradient(#009ca9, 0.3=#009ca9, 0.7=#007487, #007487)"});

Cufon.replace(".partnersTable .percent", {fontFamily:'Bliss Pro', fontWeight:'normal', color: "-linear-gradient(#009ca9, 0.3=#009ca9, 0.7=#007487, #007487)"});
Cufon.replace("h2", {fontFamily:'Bliss Pro', fontWeight:'normal', color: "-linear-gradient(#4e4e4e, 0.3=#4e4e4e, 0.7=#666666, #666666)"});
Cufon.replace(".titleWrapper > h2", {fontFamily:'Bliss Pro', fontWeight:'normal', color: "-linear-gradient(#009ca9, 0.3=#009ca9, 0.7=#007487, #007487)"});
Cufon.replace(".infoPopup .titleWrapper > h2", {fontFamily:'Bliss Pro', fontWeight:'normal', color: "#d50f0a"});
Cufon.replace(".redGradient", {fontFamily:'Bliss Pro', fontWeight:'normal', color: "-linear-gradient(#009ca9, 0.3=#009ca9, 0.7=#007487, #007487)"});
Cufon.replace(".privateSheme .titleWrapper>h1", {fontFamily:'Bliss Pro', fontWeight:'normal', color: "-linear-gradient(#4c99c6, 0.3=#4c99c6, 0.7=#20709b, #20709b)"});
Cufon.replace(".mortgageType>.agora", {fontFamily:'Bliss Pro', fontWeight:'normal', color: "-linear-gradient(#55ae1a, 0.3=#55ae1a, 0.7=#2d8301, #2d8301)", textShadow: '0 1px 0 #fbfbfb'});
Cufon.replace(".banner .title", {fontFamily:'Bliss Pro', fontWeight:'bold', color: "-linear-gradient(#009ca9, 0.3=#009ca9, 0.7=#007487, #007487)"});
Cufon.replace(".banner h3", {fontFamily:'Bliss Pro', fontWeight:'bold', color: "-linear-gradient(#535353, 0.3=#535353, 0.7=#606060, #606060)"});
Cufon.replace(".banner .total .summ", {fontFamily:'Bliss Pro', fontWeight:'bold', color: "-linear-gradient(#535353, 0.3=#535353, 0.7=#606060, #606060)"});
Cufon.replace(".personal_private .banner .title", {fontFamily:'Bliss Pro', fontWeight:'bold', color: "-linear-gradient(#3c3c3c, 0.3=#3c3c3c, 0.7=#4e4e4e, #4e4e4e)"});
Cufon.replace(".personal_private h3", {fontFamily:'Bliss Pro', fontWeight:'bold', color: "-linear-gradient(#3c3c3c, 0.3=#3c3c3c, 0.7=#666, #666)"});
Cufon.replace(".phonePopup .colored");
Cufon.replace("#mainWaiterWrapper h3", {fontFamily:'Bliss Pro', fontWeight:'bold', color: "-linear-gradient(#2ecbde, 0.3=#29c7da, 0.7=#14b8cb, #09b3c6)", textShadow: '0 1px 0 #083b44'});
Cufon.replace(".b-mts-money-simple .s-info h3", {fontFamily:'Bliss Pro', fontWeight:'normal'});
Cufon.replace(".b-mts-money-simple .m-block h3", {fontFamily:'Bliss Pro', fontWeight:'normal', color: "#323D3F"});
//Cufon.replace("#mainWaiterWrapper h3", {fontFamily:'Bliss Pro', fontWeight:'bold', color: "-linear-gradient(#2ecbde, 0.3=#3c3c3c, 0.7=#4e4e4e, #09c3b6)"});
/*Cufon.replace(".heliosB", {fontFamily:'HeliosCond', fontWeight:'bold'});
 Cufon.replace(".officeAtm", {fontFamily:'HeliosCond', fontWeight:'normal'});
 Cufon.replace(".city", {fontFamily:'HeliosCond', fontWeight:'bold', hover:{color:'#515151'}});
 Cufon.replace(".lang>li", {fontFamily:'HeliosCond', fontWeight:'normal'});
 Cufon.replace(".questionReview>li", {fontFamily:'HeliosCond', fontWeight:'normal'});
 Cufon.replace(".phoneNumbers>ul>li>a", {fontFamily:'HeliosCond', fontWeight:'normal', hover:{color:'#515151'}});
 Cufon.replace(".phoneNumbers>p", {fontFamily:'HeliosCond', fontWeight:'normal'});*/

var loaderTimer;

function loaderAnimation() {
    if (document.all && (!document.documentMode || (document.documentMode && document.documentMode < 9))) {
        $('.loader').css({background: "url(/upload/loader.gif) no-repeat", width: "78px", height: "78px"});
    }else{
        $('.loader').krutilka();
    }
    /*var val = $('.loader').css('backgroundPosition');
     var pos = new Array();
     if (val) {
     pos = val.split(" ");
     var posY = parseInt(pos[1]);
     }
     else
     var posY = 0;
     posY = (posY - 41) % 328;
     //console.log(posY);
     $('.loader').css('backgroundPosition', "0px " + posY + "px");
     */
    loaderTimer = setTimeout('loaderAnimation()', 100);
}

$(document).ready(function(){



    $('input').live("keydown keypress", function(e){
        if (document.URL.indexOf('card2card') > 0) {
            var e = e || event, k = e.which || e.button;
            if (e.ctrlKey && k == 86) return false;
        }
    });


    $(".jqtransform").jqTransform();
    $(".file").filestyle({
        image: "/img/inputFile.png",
        imageheight : 35,
        imagewidth : 27,
        width : 219
    });
    $(".tmpPopup").overlay({
        target: "#service_overlay",
        mask:{
            color:'#000',
            opacity:0.5
        },
        effect: 'apple',
        fixed: false,
        api: true,
        fadeInSpeed: 10,
        onBeforeLoad: function() {
            var topLoader = $(window).scrollTop() + $(window).height() / 2;
            $(".loader").css("display", "block");
            $(".loader").css("top", topLoader + "px");
            loaderAnimation();
            var wrap = this.getOverlay().find(".contentWrap");
            wrap.empty();
            wrap.load(this.getTrigger().attr("href"));
        },
        onLoad: function() {
            $(".loader").css("display", "none");
            clearTimeout(loaderTimer);
            Cufon.replace(".titleWrapper > h2", {fontFamily:'Bliss Pro', fontWeight:'normal', color: "-linear-gradient(#009ca9, 0.3=#009ca9, 0.7=#007487, #007487)"});
            Cufon.refresh('.titleWrapper > h2');
        }
    });

    $("a[rel]").overlay({
        mask:{
            color:'#000',
            opacity:0.5
        },
        effect: 'apple',
        fixed: false,
        api: true,
        fadeInSpeed: 10,
        //speed: 0,
        onBeforeLoad: function(data) {
            this.getTrigger().addClass('active');
            var topLoader = $(window).scrollTop() + $(window).height() / 2;
            if ($(this).attr('rev') != 'waiter-false') {
                $(".loader").css({
                    'display': 'block',
                    'z-index': '9999'
                });
                loaderAnimation();
                $(".loader").css("top", topLoader + "px");
            }

            //loaderAnimation();
            //$(".loader").css("top", topLoader + "px");
            var wrap = this.getOverlay().find(".contentWrap");
            wrap.empty();
            if (this.getTrigger().hasClass('apple-overlay-transparent')) {
                $('body').addClass('apple-overlay-transparent');
            }
            if (this.getTrigger().attr("href") == "/cities.php") {
                $("ul.city").addClass("active");
                $("ul.city").css("z-index", "10000");
//				wrap.load(this.getTrigger().attr("href") + "?city=" + jQuery.trim(this.getTrigger().text()));
                wrap.load(this.getTrigger().attr("href") + "?city=" + encodeURIComponent(jQuery.trim(this.getTrigger().text())) );
            } else if (this.getTrigger().attr("href") == "/phone.php") {

                wrap.load(this.getTrigger().attr("href") + "?ajax=Y");
            } else {
                wrap.load(this.getTrigger().attr("href"));
            }
        },
        onLoad: function() {
            $('body').addClass('apple-overlay-loaded');
            $(".loader").css("display", "none");
            clearTimeout(loaderTimer);
            Cufon.replace(".titleWrapper > h2", {fontFamily:'Bliss Pro', fontWeight:'normal', color: "-linear-gradient(#009ca9, 0.3=#009ca9, 0.7=#007487, #007487)"});
            Cufon.refresh('.titleWrapper > h2');
            $(".smallMapWrapper").trigger("reloadmap");
            this.getOverlay().css("padding-top", $(window).scrollTop() + "px");
            this.getOverlay().find(".close").css("margin-top", $(window).scrollTop() + "px");

            var parentWidth = this.getOverlay().closest('#fixWidth').length ? $('#fixWidth').width() : $(window).width();

            this.getOverlay().css('left', Math.round((parentWidth - this.getOverlay().width()) / 2));
            /*console.log(this.getOverlay().clone().wrap('div').parent().html());*/
        },
        onBeforeClose:function() {
            /*$(".loader").css("display", "none");*/
            $("ul.city").removeClass("active");
        },

        /***UPDATE***/
        onClose:function() {
            this.getTrigger().removeClass('active');
            $("ul.city").css("z-index", "0");
            $('body').removeClass('apple-overlay-transparent').removeClass('apple-overlay-loaded');
            $('#exposeMask').remove();
        }
        /***\UPDATE***/
    });

    $(".officeTable .td1 a").overlay({
        mask: '#6b6b6b',
        effect: 'apple',
        fixed: false,
        target:"#small_overlay",
        api: true,
        top: 30,
        fadeInSpeed: 10,
        onBeforeLoad: function() {
            var topLoader = $(window).scrollTop() + $(window).height() / 2;
            $(".loader").css("display", "block");
            $(".loader").css("top", topLoader + "px");
            loaderAnimation();
            var wrap = this.getOverlay().find(".contentWrap");
            wrap.empty();
            wrap.load(this.getTrigger().attr("href")+"?ajax=Y");
        },
        onLoad: function() {
            $(".loader").css("display", "none");
            clearTimeout(loaderTimer);
            Cufon.replace(".titleWrapper > h2", {fontFamily:'Bliss Pro', fontWeight:'normal', color:"-linear-gradient(#009ca9, 0.3=#009ca9, 0.7=#007487, #007487)"});
            Cufon.refresh('.titleWrapper > h2');
            $(".smallMapWrapper").trigger("reloadmap");
            this.getOverlay().css("padding-top", $(window).scrollTop() + "px");
            this.getOverlay().find(".close").css("margin-top", $(window).scrollTop() + "px");
            var parentWidth = this.getOverlay().closest('#fixWidth').length ? $('#fixWidth').width() : $(window).width();
            this.getOverlay().css('left', Math.round((parentWidth - this.getOverlay().width()) / 2));
        }
    });



    $("a.turn-off").live("click", function(){
        $(this).removeClass("turn-off");
        $(this).addClass("turn-on");

        var item = $(this).attr("id");
        if (item) {
            item = item.replace("open", "block");
            $("#" + item).slideToggle();
        }

        return false;
    });
    $("a.turn-on").live("click", function(){
        $(this).removeClass("turn-on");
        $(this).addClass("turn-off");

        var item = $(this).attr("id");
        if (item) {
            item = item.replace("open", "block");
            $("#" + item).slideToggle();
        }

        return false;
    });
    $(".slide-link > a").live("click", function(){
        var item = $(this).attr("id");
        /***UPDATE***/
        $(this).addClass('opened');
        /***\UPDATE***/
        item = item.replace("open", "block");
        $("#" + item).slideToggle();
        return false;
    });
    $(".open-link > a").live("click", function(){
        var item = $(this).attr("id");
        item = item.replace("open", "block");
        $("#" + item).toggle();
        return false;
    });
    $("form").live("submit", function(){
        if ($(this).attr("click") == "1") {
            t = setTimeout ('$(this).attr("click", "0");', 10000);
            return false;
        }
        $(this).attr("click", "1");
    });

    $("#officePrint").live("click", function(){
        $("link[href='/css/style.css?435']").attr("href", "/css/print.css?1234");
        $("link[href='/css/media_print.css']").attr("href", "/css/media_print_empty.css?3456");
        return false;
    });

    /*$(".searchForm input[type=text]").live("focus", function(){
     if ($(".navchain").find("li").length > 0) {
     var width = $(".navchain").find("li").eq(0).css("width");
     $(".navchain").find("li").eq(0).css("overflow", "hidden");
     $(".navchain").find("li").eq(0).attr("width", width);
     $(".navchain").find("li").eq(0).animate({
     "width": 0
     }, 500, function(){
     $(".navchain").find("li").eq(0).css("display", "none");
     });
     }
     });*/

    $(".sliderBlock > a").hover(
        function(){
            var content = $(this).find(".sliderContent");
            content.click(function(){$(this).parent().trigger("click")});
            content.animate({height:"104px"}, 300);
        },
        function(){
            var content = $(this).find(".sliderContent");
            content.stop().animate({height: "29px"}, 300);
        }
    );

    $("body").on("click","#customOverlay",function(){

        $(this).fadeOut();
        $("#small_overlay").fadeOut();

        setTimeout(function(){
            $("#small_overlay").css({
                "margin-left":"0px"
            });
        },600);


    });

    /*$("body").on("click","#small_overlay a",function(){

     $("#small_overlay").fadeOut();
     $("#customOverlay").fadeOut();

     setTimeout(function(){
     $("#small_overlay").css({
     "margin-left":"0px"
     });
     },600);

     });*/





});

$(function() {
    $('.btn').mousedown(function() {
        $(this).addClass('on');
    }).bind('mouseup mouseleave', function() {
        $(this).removeClass('on');
    });
});

/*fixed grad*/
$(function(){
    $(".footerButtons").appendTo(".hideBlockWrapper");
    $(".footerButtons").addClass("noLeft");
    $(".hideBlockFooter").css('display','none');
    $(".hideBlockFooter").appendTo(".hideBlockWrapper");
    $(".hideBlockFooter").addClass("noLeft");

    if($(".omg").size()>0){

        var animateSpeed = 300,
            pageMenu = $(".omg"),
            pageMenuStop = pageMenu.offset().top+4,
            $wSearch = $('.miniSearchWrapper'),
            $tail = $('.phonePopupWrapper .popup-tail');

        if (pageMenu.find(".footerButtons").length) {
            $("body").addClass("m-subheader_footer-buttons");
        }

        $(window).scroll(function(e){
            e.preventDefault()
            if ($(window).scrollTop() >= pageMenuStop && $(window).height() < ( $('.contentBlock').height() + 420 ) ) {

                if ($(".subHeader .hideLink").find("a").text()=="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ ï¿½ï¿½ï¿½ï¿½" && $(".fixed").size()>0)
                {
                    $(".hideAuto").children().trigger("click");
                    $('.subHeader').addClass("fixedMarg");
//					console.log('close man!');
                }

                if ($(".hlClose").size()<=0 && $(".fixed").size()<=0)
                {
                    $(".NoHidedAuto").children().trigger("click");
                    $('.subHeader').addClass("fixedMarg");
//					console.log('close!');
                }

                $(".omg").addClass("fixed")
                $("body").addClass("m-fixed-subheader");
                if (pageMenu.find(".footerButtons").length) {
                    $("body").addClass("m-fixed-subheader_footer-buttons");
                }
                $tail.stop(true).css({marginLeft: $wSearch.hasClass('open') ? 30 : ($("body").hasClass("m-fixed-subheader_footer-buttons") ? 152 : 230)});
            } else {
                if ($(".fixed").size()>0)
                {
                    $(".NoHidedAuto").children().trigger("click");
                    $('.subHeader').removeClass("fixedMarg");
//					console.log('open!');
                }

                $(".omg").removeClass("fixed")
                $("body").removeClass("m-fixed-subheader").removeClass("m-fixed-subheader_footer-buttons");
                $tail.stop(true).css({marginLeft: 0});
            }
        })

    }

    if ($('.spoiler_link').length){
        $('.spoiler_link').on('click', function(){
            $(this).parents('.spoiler_parent').find('.spoiler_body').toggle();

            return false;
        });
    }
    if ($('.cityChange').length){
        $('h1').addClass('max_width_480');
        //$('.cityChange').css({'margin-top':$('.titleWrapper').height()-24});
    }

});

jQuery(function($) {
    $('body').click(function(event) {
        var $overlay = $('#phone_overlay.apple_overlay');

        if ($overlay.is(':visible') && !$overlay.find(event.target).length && !event.isTrigger) {
            $overlay.find('> .close').click();
        }
    });
});


/* End */
;
; /* Start:"a:4:{s:4:"full";s:31:"/js/swfobject.js?13706606056880";s:6:"source";s:16:"/js/swfobject.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * SWFObject v1.5: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
 *
 * SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if(typeof deconcept=="undefined"){var deconcept=new Object();}if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object();}deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObject.doPrepUnload=true;}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObject.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16[_16.length]=key+"="+_18[key];}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var _26=3;while(axo){try{_26++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_26);_23=new deconcept.PlayerVersion([_26,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}}return _23;};deconcept.PlayerVersion=function(_29){this.major=_29[0]!=null?parseInt(_29[0]):0;this.minor=_29[1]!=null?parseInt(_29[1]):0;this.rev=_29[2]!=null?parseInt(_29[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_2b){var q=document.location.search||document.location.hash;if(_2b==null){return q;}if(q){var _2d=q.substring(1).split("&");for(var i=0;i<_2d.length;i++){if(_2d[i].substring(0,_2d[i].indexOf("="))==_2b){return _2d[i].substring((_2d[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectUtil.cleanupSWFs=function(){var _2f=document.getElementsByTagName("OBJECT");for(var i=_2f.length-1;i>=0;i--){_2f[i].style.display="none";for(var x in _2f[i]){if(typeof _2f[i][x]=="function"){_2f[i][x]=function(){};}}}};if(deconcept.SWFObject.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);deconcept.unloadSet=true;}}if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];};}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;
/* End */
;
; /* Start:"a:4:{s:4:"full";s:28:"/js/slider.js?14581409935154";s:6:"source";s:13:"/js/slider.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var clikOnMainNav = false;
var searchDelay = 500;
var searchDelayTimer;

function searchDelayClick(itemIndex) {
    $(".mainNav a").eq(itemIndex).click();
    //console.log("click");
    clearTimeout(searchDelayTimer);
}

$(document).ready(function() {
    //Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ðµ Ñ€Ð°Ð·Ð¼ÐµÑ€Ð° Ð±Ð»Ð¾ÐºÐ° Ð¿Ñ€Ð¸ Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ð¸ Ñ€Ð°Ð·Ð¼ÐµÑ€Ð° Ð¾Ð»ÐºÐ½Ð° Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€Ð°
    var leftStep = $('#fixWidth').width();

    function widthSlide() {
        var slide = $('.mainSliderItemWrapper');
        slide.width($('#fixWidth').width());
        leftStep = $('#fixWidth').width();
        activeIndex = $(".mainNav a.active").parents("li").index();
        var leftTmp = "-" + leftStep * activeIndex + "px";
        $('.mainSliderWrapper').css("left", leftTmp);
    }
    widthSlide();
    $(window).resize(function() {
        widthSlide();
    }).load(function() {
        widthSlide();
    });

    //Ð¿Ð¾ÐºÐ°Ð·Ñ‹Ð²Ð°Ñ‚ÑŒ ÑÐµÑ€Ð²Ð¸ÑÑ‹ Ñ‚ÐµÐºÑƒÑ‰ÐµÐ³Ð¾ Ñ€Ð°Ð·Ð´ÐµÐ»Ð°
    $(".navWrapper").eq(activeIndex).css("display", "block");

    //ÑÐ»Ð°Ð¹Ð´Ð¸Ð½Ð³ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†
    $(".mainNav a").live("click", function() {
        var itemIndex = $(this).parents("li").index();
        var activeIndex = $(".mainNav a.active").parents("li").index();
        //var seacrhWidth = $(".miniSearchWrapper input[name=q]").css("width");
        //if (seacrhWidth != "106px") {
        var seacrhWidth = parseFloat($(".miniSearchWrapper input[name=q]").css("width")).toFixed(0);
        if (seacrhWidth != "106") {
            //console.log("start");
            MiniSearch.hide();
            searchDelayTimer = setTimeout('searchDelayClick(' + itemIndex + ')', searchDelay);
            return false;
        }
        if (!$(this).hasClass("active")) {
            $(".mainNav a.active").removeClass("active");
            $(this).addClass("active");
            var itemLeft = $(this).attr("spanLeft");
            var itemWidth = $(this).attr("spanWidth");
            var navWidth = $('.mainNav').outerWidth();
            $(".mainNav span").animate({
                left: (parseInt(itemLeft) / navWidth * 100) + '%',
                width: (itemWidth / navWidth * 100) + '%'
            }, 500);
            $(".mainSliderWrapper").animate({
                left: "-" + leftStep * itemIndex + "px"
            }, 500);
            clearTimeout(bannerTimer);
            clearTimeout(bannerTimer2);
            mouseOnBanner2 = true;
            mouseOnBanner = true;
            if ($(".hideBlockOuterWrapper .hideBlock").css("display") == "none") {
                $(".subHeader .gradWrapper").eq(activeIndex).css("display", "none");
                $(".subHeader .gradWrapper").eq(itemIndex).css("display", "block");
                $(".searchBlock .navWrapper").eq(activeIndex).fadeOut();
                $(".searchBlock .navWrapper").eq(itemIndex).fadeIn();
                if (itemIndex === 0) {
                    mouseOnBanner = false;
                    fakeclick = true;
                    $(".mainSliderItemWrapper:eq(0) .bjqs-markers a").eq(0).click();
                } else if (itemIndex == 2) {
                    mouseOnBanner2 = false;
                    fakeclick2 = true;
                    $(".mainSliderItemWrapper:eq(2) .bjqs-markers a").eq(0).click();
                }
            } else {
                $(".subHeader .gradWrapper").eq(activeIndex).css("display", "none");
                $(".subHeader .gradWrapper").eq(itemIndex).fadeIn();
                $(".searchBlock .navWrapper").eq(activeIndex).css("display", "none");
                $(".searchBlock .navWrapper").eq(itemIndex).css("display", "block");
                $(".searchBlock .nav .navWrapper").each(function() {
                    if ($(this).index() != itemIndex) {
                        $(this).css("display", "none");
                    } else {
                        $(this).find("li").each(function() {
                            if (!$(this).hasClass("all")) $(this).css("display", "none");
                        });
                        $(this).find(".runner").css("display", "none");
                    }
                });
                $(".hideBlockFooter").each(function() {
                    var curFooterIndex = $(this).index() - 1;
                    if (curFooterIndex != itemIndex) {
                        $(".hideBlockFooter").eq(curFooterIndex).css('display', 'none');
                    } else {
                        $(".hideBlockFooter").eq(curFooterIndex).css('display', 'block');
                    }
                });
                if (itemIndex === 0) {
                    mouseOnBanner = false;
                    fakeclick = true;
                    $(".mainSliderItemWrapper:eq(0) .bjqs-markers a").eq(0).click();
                    mouseOnBanner = true;
                } else if (itemIndex == 2) {
                    mouseOnBanner2 = false;
                    fakeclick2 = true;
                    $(".mainSliderItemWrapper:eq(2) .bjqs-markers a").eq(0).click();
                    mouseOnBanner2 = true;
                }
            }
        }
        return false;
    });
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:30:"/js/krutilka.js?13706606063398";s:6:"source";s:15:"/js/krutilka.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 Krutilka (Spinner) Jquery Plugin, v 0.1
 Author: Artem Polikarpov | http://artpolikarpov.ru/
 */

(function ($) {
    var ns = 'http://www.w3.org/2000/svg';
    var svgTest = function() {
        // ÐŸÐ¾Ð´Ð´ÐµÑ€Ð¶Ð¸Ð²Ð°ÐµÑ‚ÑÑ Ð»Ð¸ Ð¡Ð’Ð“
        var div = document.createElement('div');
        div.innerHTML = '<svg/>';
        return (div.firstChild && div.firstChild.namespaceURI) == ns;
    };

    var svgFLAG = svgTest();

    var makeSVG = function (tag, attrs) {
        var el= document.createElementNS(ns, tag);
        for (var k in attrs) {
            el.setAttribute(k, attrs[k]);
        }
        return el;
    };

    var krutilka = function (el, options) {
        el.data('initialized', true);

        var svg = $(makeSVG('svg', {width: options.size, height: options.size, style: 'background: '+ options.background +''})).appendTo(el);
        var g = makeSVG('g', {fill: 'none', stroke: options.color, 'stroke-width': options.petalWidth});
        var $g = $(g).appendTo(svg);

        var x = options.size / 2;
        var y = options.size / 2;

        // Ð¡Ñ‚Ñ€Ð¾Ð¸Ð¼ ÐºÑ€ÑƒÑ‚Ð¸Ð»ÐºÑƒ
        for (var _i = 0; _i < options.petals; _i++) {
            // Ð£Ð³Ð¾Ð» Ð² Ð³Ñ€Ð°Ð´ÑƒÑÐ°Ñ…
            var a = 360 / options.petals * (options.petals - _i);
            // ÐŸÑ€Ð¾Ð·Ñ€Ð°Ñ‡Ð½Ð¾ÑÑ‚ÑŒ
            var opacity = Math.max(1 - 1 / options.petals * _i, .25);
            // Ð¡Ð¾Ð·Ð´Ð°Ñ‘Ð¼ Ð»Ð¸Ð½Ð¸ÑŽ
            $(makeSVG('line', {x1: options.size / 2, y1: options.petalOffset, x2: options.size / 2, y2: options.petalOffset + options.petalLength, transform: 'rotate('+ a + ' ' + x + ' ' + y + ')', opacity: opacity})).appendTo($g);
        }

        // ÐšÑ€ÑƒÑ‚Ð¸Ð¼ ÐºÑ€ÑƒÑ‚Ð¸Ð»ÐºÑƒ
        var frame = 0;
        var animationInterval;
        var animation = function () {
            var a = 360 / options.petals * frame;
            g.setAttribute('transform', 'rotate('+ a + ' ' + x + ' ' + y + ')');

            frame++;
            if (frame >= options.petals) {
                frame = 0;
            }
        };

        el.bind('show', function(e, time){
            // ÐŸÐ¾ÐºÐ°Ð·Ñ‹Ð²Ð°ÐµÐ¼ Ð¸ Ð·Ð°Ð¿ÑƒÑÐºÐ°ÐµÐ¼ ÐºÑ€ÑƒÑ‚Ð¸Ð»ÐºÑƒ
            el.stop().fadeTo('fast', 1);
            clearInterval(animationInterval);
            animation();
            animationInterval = setInterval(animation, (time ? time : options.time) / options.petals);
        });

        el.bind('hide', function(){
            // Ð¡ÐºÑ€Ñ‹Ð²Ð°ÐµÐ¼ Ð¸ Ð¾ÑÑ‚Ð°Ð½Ð°Ð²Ð»Ð¸Ð²Ð°ÐµÐ¼ ÐºÑ€ÑƒÑ‚Ð¸Ð»ÐºÑƒ
            el.stop().fadeTo('fast', 0, function(){
                clearInterval(animationInterval);
            });
        });

        el.trigger('show');
    };

    $.fn.krutilka = function (o) {
        var options = {
            size: 130, // Ð¨Ð¸Ñ€Ð¸Ð½Ð° Ð¸ Ð²Ñ‹ÑÐ¾Ñ‚Ð° Ð±Ð»Ð¾ÐºÐ° Ñ ÐºÑ€ÑƒÑ‚Ð¸Ð»ÐºÐ¾Ð¹
            petals: 12, // Ð¡ÐºÐ¾Ð»ÑŒÐºÐ¾ Ð»ÐµÐ¿ÐµÑÑ‚ÐºÐ¾Ð² Ñƒ ÐºÑ€ÑƒÑ‚Ð¸Ð»ÐºÐ¸
            petalWidth: 2, // Ð¢Ð¾Ð»Ñ‰Ð¸Ð½Ð° Ð»ÐµÐ¿ÐµÑÑ‚ÐºÐ°
            petalLength: 16, // Ð”Ð»Ð¸Ð½Ð° Ð»ÐµÐ¿ÐµÑÑ‚ÐºÐ°
            petalOffset: 38, // Ð’Ð½ÑƒÑ‚Ñ€ÐµÐ½Ð½ÐµÐµ Ð¿Ð¾Ð»Ðµ Ð±Ð»Ð¾ÐºÐ° Ñ ÐºÑ€ÑƒÑ‚Ð¸Ð»ÐºÐ¾Ð¹ (Ñ€Ð°ÑÑÑ‚Ð¾ÑÐ½Ð¸Ðµ Ð´Ð¾ ÐºÐ¾Ð½Ñ‡Ð¸ÐºÐ° Ð»ÐµÐ¿ÐµÑÑ‚ÐºÐ°)
            time: 600, // Ð’Ñ€ÐµÐ¼Ñ Ð¿Ñ€Ð¾Ñ…Ð¾Ð´Ð° ÐºÑ€ÑƒÐ³Ð° Ð² Ð¼Ð¸Ð»Ð»Ð¸ÑÐµÐºÑƒÐ½Ð´Ð°Ñ…
            color: '#ffffff', // Ð¦Ð²ÐµÑ‚ Ð»ÐµÐ¿ÐµÑÑ‚ÐºÐ¾Ð²
            background: 'none' // Ð¤Ð¾Ð½ ÐºÑ€ÑƒÑ‚Ð¸Ð»ÐºÐ¸
        };

        $.extend(options, o);

        this.each(function () {
            var el = $(this);
            if (!el.data('initialized') && svgFLAG) {
                // Ð•ÑÐ»Ð¸ ÐµÑ‰Ñ‘ Ð½Ðµ Ð¸Ð½Ð¸Ñ†Ð¸Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¾
                krutilka(el, options);
            }
        });

        // Ð§ÐµÐ¹Ð½Ð°Ð±Ð¸Ð»Ð¸Ñ‚Ð¸
        return this;
    };
})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:27:"/js/loader.js?1386744380197";s:6:"source";s:13:"/js/loader.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function() {
    /*$("body").css("overflow-y", "hidden");*/
});
$(window).load(function() {
    $('#mainWaiterWrapper').fadeOut(500);
    /*$("body").css("overflow-y", "auto");*/
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:38:"/js/google_analytics.js?13992760801994";s:6:"source";s:23:"/js/google_analytics.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-17664885-1']);

_gaq.push(['_addOrganic', 'go.mail.ru', 'q']);
_gaq.push(['_addOrganic', 'nova.rambler.ru', 'query']);
_gaq.push(['_addOrganic', 'nigma.ru', 's']);
_gaq.push(['_addOrganic', 'webalta.ru', 'q']);
_gaq.push(['_addOrganic', 'aport.ru', 'r']);
_gaq.push(['_addOrganic', 'poisk.ru', 'text']);
_gaq.push(['_addOrganic', 'km.ru', 'sq']);
_gaq.push(['_addOrganic', 'liveinternet.ru', 'q']);
_gaq.push(['_addOrganic', 'quintura.ru', 'request']);
_gaq.push(['_addOrganic', 'search.qip.ru', 'query']);
_gaq.push(['_addOrganic', 'gde.ru', 'keywords']);
_gaq.push(['_addOrganic', 'ru.yahoo.com', 'p']);

_gaq.push(['_addOrganic', 'search.qip.ru', 'query']);
_gaq.push(['_addOrganic', 'nigma.ru', 's']);
_gaq.push(['_addOrganic', 'ru.ask.com', 'q']);
_gaq.push(['_addOrganic', 'search.conduit.com', 'q']);
_gaq.push(['_addOrganic', 'search.icq.com', 'q']);
_gaq.push(['_addOrganic', 'isearch.babylon.com', 'q']);
_gaq.push(['_addOrganic', 'daemon-search.com', 'q']);

_gaq.push(['_addOrganic', 'meta.ua','q']);
_gaq.push(['_addOrganic', 'bigmir.net','z']);
_gaq.push(['_addOrganic', 'i.ua','q']);

_gaq.push(['_addOrganic', 'tut.by', 'query']);
_gaq.push(['_addOrganic', 'all.by', 'query']);

_gaq.push(['_addOrganic', 'images.yandex.ru', 'text', true]);
_gaq.push(['_addOrganic', 'images.rambler.ru', 'query', true]);
_gaq.push(['_addOrganic', 'blogsearch.google.ru', 'q', true]);
_gaq.push(['_addOrganic', 'blogs.yandex.ru', 'text', true]);
_gaq.push(['_addOrganic', 'yandex.ru/msearch', 'text', true]);

_gaq.push(['_setDomainName', 'mtsbank.ru']);
_gaq.push(['_trackPageview']);
_gaq.push(['_trackPageLoadTime']);


(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


/* End */
;
; /* Start:"a:4:{s:4:"full";s:28:"/js/metrika.js?1370660605541";s:6:"source";s:14:"/js/metrika.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function(w, d, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter9385342 = new Ya.Metrika({id:9385342, enableAll: true, webvisor:true});
        }
        catch(e) {}
    });

    var e = d.createElement('script');
    e.type = 'text/javascript';
    e.async = true;
    e.src = (d.location.protocol == 'https:' ? 'https:' : 'http:') + '//mc.yandex.ru/metrika/watch.js';
    var s = d.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(e, s);
})(window, document, 'yandex_metrika_callbacks');
/* End */
;
; /* Start:"a:4:{s:4:"full";s:82:"/bitrix/components/mscoder/buttons.main/templates/.default/script.js?1411647975754";s:6:"source";s:68:"/bitrix/components/mscoder/buttons.main/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var iBankLayerOpen = false;
var clickOnBankLayer = false;

$(document).ready(function(){
    $(".buttons .btnIbank").live("click", function(){
        $(".buttons .iBank").animate({
            top:0
        }, 500, function(){
            iBankLayerOpen = true;
        });

        return false;
    });

    $(".buttons .iBank").live("mousedown", function(){
        clickOnBankLayer = true;
    });

    $(document).bind("click", function(){
        if (iBankLayerOpen == true && clickOnBankLayer == false) {
            $(".buttons .iBank").animate({
                top: -31
            }, 500);
            iBankLayerOpen = false;
        }
        clickOnBankLayer = false;
    });

    $(".buttons .lock").live("click", function(){
        $(".buttons .iBank").animate({
            top: -31
        }, 500);
        iBankLayerOpen = false;
        clickOnBankLayer = false;
        return false;
    });
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:88:"/bitrix/components/mscoder/search.input.new/templates/.default/script.js?141638029721036";s:6:"source";s:72:"/bitrix/components/mscoder/search.input.new/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
jQuery(function($) {
    $.fn.setCursorPosition = function(pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            var range = $(this).get(0).createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };
    window.MiniSearch = {
        $wrap:       $('.miniSearchWrapper'),
        $input:      $('.miniSearchWrapper .textbox'),
        $resultWrap: $('.miniSearchResultsWrapper'),
        $close:      $('#closeSearch'),
        $search:      $('.btnSearch'),
        $switch:     $('.miniSearchWrapper .switch-button'),
        $contact:    $('#header .buttons .btnContact'),
        $tail:       $('.phonePopupWrapper .popup-tail'),
        placeholder: '',

        wSwitch:    35,
        wInput:     106,
        wInputOpen: 192,
        wdInput:    0,
        state:      0,          // search open, results open
        fxState:    0,          // search show, resuts show, search hide, results hide
        duration:   300,

        text:      '',
        minLength: 3,
        timeout:   10,
        idTimer:   null,
        isFound: false,



        initialize: function() {
            this.wdInput = this.$input.outerWidth() - this.$input.width();

            this.initPlaceholder();
            this.$close.click($.proxy(function() {
                this.$wrap.removeClass('closeButton');
                this.text = '';
                this.$input.val('').focusout();
                return false;
            }, this));

            this.initMenu();
            this.$input.focusin($.proxy(this.show, this));
            this.$input.focusout($.proxy(function() {
                setTimeout($.proxy(this.hide, this), 100);
            }, this));
            this.$input.keyup($.proxy(this.keyUp, this));
            this.$switch.click($.proxy(this.switchClick, this));

            this.$search.click($.proxy(function() {
                var valueText = $.trim(this.$input.val());
                //value = this.$input.val();
                if (valueText == '' || valueText == 'Ð¯ Ð¸Ñ‰Ñƒ...') {
                    return false;
                }
            }, this));

            //this.$switch.click($.proxy(this.switchClick, this));
        },


        initPlaceholder: function() {
            var $in = this.$input,
                ph = this.placeholder = $in.attr('placeholder');

            //$in.removeAttr('placeholder').val(ph).addClass('ph');

            if (!$.browser.msie) {
                $in.addClass('ph');
                $in.focusin(function() {
                    if ($in.val() == ph) {
                        $in.val('').removeClass('ph');
                        //$in.removeAttr('placeholder').val(ph).addClass('ph');
                        //$in.removeClass('ph');
                    }
                });
                $in.focusout(function() {
                    if ($in.val() == '') {
                        //$in.val(ph).addClass('ph');
                        $in.addClass('ph');
                        //$in.val('').addClass('ph');
                        //$in.attr('placeholder', ph);
                    }
                });
            }
            else {
                $in.removeAttr('placeholder').val(ph).addClass('ph');
                $in.focusin(function() {
                    if ($in.val() == ph) {
                        $in.val('').removeClass('ph');
                    }
                });
                $in.focusout(function() {
                    if ($in.val() == '') {
                        $in.val(ph).addClass('ph');
                    }
                });
            }
        },



        initMenu: function() {

            var $mainNav = $('.mainNav'),
                navWidth = $mainNav.outerWidth(),
                ulWidth = $mainNav.find('ul').width(),
                $span = $mainNav.find('span');

            $mainNav.css({width: 'auto'});

            $span.css({
                left: (parseInt($span.css('left')) / navWidth * 100) + '%',
                width: ($span.width() / navWidth * 100) + '%'
            });

            $mainNav.find('ul li').each(function() {
                var $li = $(this),
                    $a = $li.find('a');

                $li.css({width: ($li.width() / ulWidth * 100) + '%'});
                $a.css({width: '100%'});
            });
        },



        show: function(event) {

            if (this.fxState || this.state & 3) return;
            this.fxState = 1;

            this.$wrap.addClass('open');
            this.$contact.animate({right: this.wInputOpen + this.wdInput - this.wSwitch}, this.duration);
            if ($('body').hasClass('m-fixed-subheader')) {
                this.$tail.stop(true).animate({marginLeft: 30}, this.duration);
            }

            this.$input.css({
                width: this.isFixed() ? /*Math.max(this.wSwitch - this.wdInput, 0) */this.wInput : this.wInput
            }).animate({
                width: this.wInputOpen
            }, this.duration, $.proxy(function() {
                this.state |= 1;
                this.fxState ^= 1;
                this.$switch.addClass('active');
                this.showResult($.proxy(this.checkState, this));
            }, this));

            //console.log('ttt' + this.wInputOpen);
        },



        hide: function(event) {
            this.hideResult($.proxy(function() {
                if (this.fxState || ~this.state & 1) return;
                this.fxState = 4;

                if ($('body').hasClass('m-fixed-subheader')) {
                    this.$tail.stop(true).animate({marginLeft: $('body').hasClass('m-fixed-subheader_footer-buttons') ? 152 : 118}, this.duration);
                }

                this.$input.animate({
                    width: this.isFixed() ? /*Math.max(this.wSwitch - this.wdInput, 0)*/this.wInput : this.wInput
                }, this.duration, $.proxy(function() {
                    this.$input.width(this.wInput);
                    this.$switch.removeClass('active');
                    this.$wrap.removeClass('open');
                    this.state ^= 1;
                    this.fxState ^= 4;
                    this.checkState();
                    /*this.$input.click(function(){
                     _gaq.push(['_trackEvent', 'Navigation', 'SmartSearchGrad', 'SmartSearchFull']);
                     });*/
                }, this));

                this.$contact.animate({right: 112}, this.duration);
            }, this));
        },



        checkState: function() {
            if (document.activeElement == this.$input[0] && ~this.state & 3 == 3) {
                this.show();
            } else if (document.activeElement != this.$input[0] && this.state & 3) {
                this.hide();
            } else if (!this.fxState && $.trim(this.$resultWrap.html()) != '' && this.state == 1) {
                this.showResult();
            }
        },



        keyUp: function(event) {
            clearTimeout(this.idTimer);
            var value = $.trim(this.$input.val());
            var valueWrap = $.trim(this.$resultWrap.html());

            //this.$wrap.toggleClass('closeButton', valueWrap != '');

            if (this.text == value) {
                if (value.length < this.minLength) {
                    this.hideResult($.proxy(function() {
                        this.$resultWrap.html('');
                        this.checkState();
                    }, this));
                }
                this.text = value;
                return;
            }
            this.text = value;

            //this.$wrap.addClass('showWaiter');

            setTimeout($.proxy(function() {
                //this.$wrap.removeClass('showWaiter');
                resultObj = {};
                this.isFound = false;
                var inputText = value.toLowerCase();
                //console.log(inputText);
                if (inputText.length >= 3) {

                    var arInputText = inputText.split(" ");
                    for (var text in arInputText) {
                        for (var objText in searchObj) {
                            var arObjText = objText.split(",");

                            //Ð¿Ñ€Ð¾Ð²ÐµÑ€ÑÐ¼ Ð½Ð° Ð¾Ð³Ñ€Ð°Ð½Ð¸Ñ‡ÐµÐ½Ð¸Ðµ Ð¿Ð¾ ÐºÐ¾Ð»-Ð²Ñƒ ÑÐ¸Ð¼Ð²Ð¾Ð»Ð¾Ð² Ð² Ð¿Ð¾Ð¸ÑÐºÐµ
                            minSearchLen = 3;
                            if(searchObj[objText].ITEMS) {
                                minSearchLen = searchObj[objText].ITEMS[0].MIN;

                            }

                            //console.log(arInputText);

                            for (var arObjTextIndex in arObjText) {
                                var strObjText = $.trim(arObjText[arObjTextIndex].toLowerCase());
                                var strInputText = $.trim(arInputText[text]);
                                //Ñ„Ð¾Ñ€Ð¼ÑƒÑ€ÑƒÐµÐ¼ Ð¾Ð±ÑŠÐµÐºÑ‚ Ñ€ÐµÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ð¾Ð²
                                //console.log('strObjText: ' + strObjText);
                                if (strObjText.length >= 4) {
                                    var subSearchText = strObjText.substr(1, strObjText.length - 1);
                                }
                                else {
                                    var subSearchText = strObjText;
                                };
                                if (strInputText.length >= 4) {
                                    var subInputText = strInputText.substr(1, strInputText.length - 1);
                                }
                                else {
                                    var subInputText = strInputText;
                                }


                                if(inputText.length >= minSearchLen){

                                    if ((strInputText.indexOf(strObjText) !== -1 || strObjText.indexOf(strInputText) !== -1) || strInputText.indexOf(subSearchText) !== -1 || subSearchText.indexOf(subInputText) !== -1 && strInputText.length >= 3)
                                    {

                                        //console.log('arInputText[text]: ' + arInputText[text]);
                                        //console.log('subInputText: ' + subInputText);
                                        //console.log('subSearchText: ' + subSearchText);
                                        var objKey = searchObj[objText];

                                        for (var objId in objKey) {
                                            this.isFound = true;
                                            var sectID = searchObj[objText][objId].SECTION.ID;
                                            if (typeof resultObj[sectID] === 'undefined')  {
                                                if (searchObj[objText][objId].ITEMS !== null) {
                                                    resultObj[sectID] = {
                                                        "SECTION": {
                                                            "ID": searchObj[objText][objId].SECTION.ID,
                                                            "NAME": searchObj[objText][objId].SECTION.NAME
                                                        },
                                                        "ITEMS": {}
                                                    };
                                                    resultObj[sectID].ITEMS[objText] = searchObj[objText][objId].ITEMS;
                                                }
                                                else {
                                                    resultObj[sectID] = {
                                                        "SECTION": {
                                                            "ID": searchObj[objText][objId].SECTION.ID,
                                                            "NAME": searchObj[objText][objId].SECTION.NAME
                                                        },
                                                        "ITEMS": null,
                                                        "ITEMS_ALT": searchObj[objText][objId].ITEMS_ALT
                                                    };
                                                }
                                            }
                                            else {
                                                resultObj[sectID].ITEMS[objText] = searchObj[objText][objId].ITEMS;
                                            }
                                        }
                                    }


                                }

                            }
                        }
                    }
                }
                //console.log(resultObj);
                //Ñ„Ð¾Ñ€Ð¼ÑƒÑ€ÑƒÐµÐ¼ html Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ð¾Ð²
                var searchResultHtml = '';
                if (this.isFound) {
                    searchResultHtml = '<div class="miniSearchResults">';
                    searchResultHtml += '<ul class="miniSearchResultsList">';
                    for (var resSect in resultObj) {
                        searchResultHtml += '<li>'
                        if (resultObj[resSect].ITEMS !== null) {
                            searchResultHtml += resultObj[resSect].SECTION.NAME;
                            searchResultHtml += '<ul>';
                            for (var resItems in resultObj[resSect].ITEMS) {
                                for (var resItem in resultObj[resSect].ITEMS[resItems]) {
                                    //Ð´Ð¾Ð±Ð°Ð²Ð»ÑÐµÐ¼ Ð¿Ð¾Ð´ÑÐ²ÐµÑ‚ÐºÑƒ
                                    arInputText = inputText.split(" ");
                                    var markedName = resultObj[resSect].ITEMS[resItems][resItem].NAME;
                                    for (var text in arInputText) {
                                        var subStrSearch = $.trim(arInputText[text]);
                                        if (subStrSearch == "")
                                            continue;

                                        var textStart = resultObj[resSect].ITEMS[resItems][resItem].NAME.toLowerCase().indexOf(subStrSearch);
                                        //console.log(resultObj[resSect].ITEMS[resItems][resItem].NAME + " : " + subStrSearch + " : " + textStart);
                                        if (textStart != -1) {
                                            var textLenght = subStrSearch.length;
                                            var origSubStr = resultObj[resSect].ITEMS[resItems][resItem].NAME.substr(textStart, textLenght);
                                            var markedSubStr = '<strong>' + origSubStr + '</strong>';
                                            markedName = markedName.replace(origSubStr, markedSubStr);
                                        }
                                        else {
                                            markedName = markedName;
                                        }
                                    }

                                    searchResultHtml += '<li><a href="' + resultObj[resSect].ITEMS[resItems][resItem].URL + '" onClick="_gaq.push([\'_trackEvent\', \'Navigation\', \'SmartSearch\', \'' + inputText + ' > ' + resultObj[resSect].ITEMS[resItems][resItem].NAME + '\']);">' + markedName + '</a></li>';
                                }
                            }
                            searchResultHtml += '</ul>';
                        }
                        else {
                            searchResultHtml += resultObj[resSect].ITEMS_ALT;
                        }
                        searchResultHtml += '</li>';
                    }
                    searchResultHtml += '</ul>';
                    if (inputText.length > 0) {
                        searchResultHtml += '<div class="showAll">';
                        searchResultHtml += '<a href="/search/?q=' + inputText + '" onclick=\'_gaq.push(["_trackEvent", "Navigation", "SmartSearch", "Full"]);\'>Ð¡Ð¼Ð¾Ñ‚Ñ€ÐµÑ‚ÑŒ Ð²ÑÐµ Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ñ‹</a>';
                        searchResultHtml += '</div>';
                    };
                    searchResultHtml += '</div>';
                }
                //this.$wrap.removeClass('showWaiter');
                if (searchResultHtml.length > 0) {
                    this.$resultWrap.html(searchResultHtml);
                    if (this.state == 1) {
                        this.showResult($.proxy(this.checkState, this));
                    }
                } else {
                    if (this.state & 2) {
                        this.hideResult($.proxy(function() {
                            this.$resultWrap.html('');
                            this.checkState();
                        }, this));
                    }
                }
            }, this), this.timeout);
        },



        showResult: function(cb) {
            if (this.fxState || this.state != 1 || this.text == '' || $.trim(this.$resultWrap.html()) == '') {
                cb && cb();
                return;
            }
            this.fxState = 2;
            this.$input.addClass('active');

            var $wrap = this.$resultWrap,
                $result = $('.miniSearchResults'),
                height = 0;

            height = $wrap.show().height();
            $result.css({position: 'absolute'});

            $wrap.animate({height: height}, this.duration, $.proxy(function() {
                $result.css({position: 'relative'});
                $wrap.css({height: 'auto'});
                this.state |= 2;
                this.fxState ^= 2;
                cb && cb();
            }, this));
        },



        hideResult: function(cb) {
            if (this.fxState || ~this.state & 2) {
                cb && cb();
                return;
            }
            this.fxState = 8;

            var $wrap = this.$resultWrap,
                $result = $('.miniSearchResults');

            $wrap.height($wrap.height());
            $result.css({position: 'absolute'});

            $wrap.animate({height: 0}, this.duration, $.proxy(function() {
                $wrap.hide().css({height: 'auto'});
                $result.css({position: 'relative'});
                this.$input.removeClass('active');
                this.state ^= 2;
                this.fxState ^= 8;
                cb && cb();
            }, this));
        },

        switchClick: function() {
            this.$switch.addClass('active');
            this.$input.focus();
            this.$input.css({width: this.isFixed() ? this.wSwitch : this.wInput});
            //onclick='_gaq.push(["_trackEvent", "Navigation", "SmartSearchGrad", "Full"]);'
        },

        isFixed: function() {
            return $('body').hasClass('m-fixed-subheader');
        }
    };

    MiniSearch.initialize();



    $('#search_query').bind('webkitspeechchange', function() {
        $(this).trigger("keyup");
    });

    //$('#search_query').trigger("webkitspeechchange");

    //$('.waiterSpin').krutilka_search();



    $.fn.speachApi = function() {
        var recognition,
            allowSpeach = false;
        return this.each(function() {
            var $this = $(this);

            if (!('webkitSpeechRecognition' in window)) {
                //console.log('no webkitSpeechRecognition');
            } else {
                recognition = new webkitSpeechRecognition();
                recognition.continuous = true;
                recognition.interimResults = true;
                recognition.lang = "ru-Latn";

                recognition.onstart = function() {
                    //console.log('start');
                };
                recognition.onresult = function(event) {
                    //console.log(event);
                    //recognition.stop();

                    var interim_transcript = '';
                    var final_transcript = '';

                    for (var i = event.resultIndex; i < event.results.length; ++i) {
                        if (event.results[i].isFinal) {
                            final_transcript += event.results[i][0].transcript;
                        } else {
                            interim_transcript += event.results[i][0].transcript;
                        }
                    }

                    console.log('10', final_transcript, interim_transcript);

                    $this.val(final_transcript);
                    $this.trigger('keyup');

                };
                recognition.onerror = function(event) {
                    //console.log(event);
                };
                recognition.onend = function() {
                    //console.log('end');
                };
                $this.focus(function() {
                    //console.log('focus');
                    if (!allowSpeach) {
                        recognition.start();
                        allowSpeach = true;
                    }
                });
                $this.blur(function() {
                    //console.log('blur');
                    //recognition.stop();
                });
            }
        });
    };
    $('.miniSearchWrapper input[x-webkit-speech]').speachApi();

});





//var obj = document.getElementById('search_query');
//mike.onfocus = mike.blur;
//obj.onwebkitspeechchange = function(e) {
//console.log(e); // SpeechInputEvent
//  alert('---');
// document.getElementById('txt').value = mike.value;
//};




/* End */
;
; /* Start:"a:4:{s:4:"full";s:37:"/js/krutilka_search.js?13706606063417";s:6:"source";s:22:"/js/krutilka_search.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 Krutilka (Spinner) Jquery Plugin, v 0.1
 Author: Artem Polikarpov | http://artpolikarpov.ru/
 */

(function ($) {
    var ns = 'http://www.w3.org/2000/svg';
    var svgTest = function() {
        // ÐŸÐ¾Ð´Ð´ÐµÑ€Ð¶Ð¸Ð²Ð°ÐµÑ‚ÑÑ Ð»Ð¸ Ð¡Ð’Ð“
        var div = document.createElement('div');
        div.innerHTML = '<svg/>';
        return (div.firstChild && div.firstChild.namespaceURI) == ns;
    };

    var svgFLAG = svgTest();

    var makeSVG = function (tag, attrs) {
        var el= document.createElementNS(ns, tag);
        for (var k in attrs) {
            el.setAttribute(k, attrs[k]);
        }
        return el;
    };

    var krutilka_search = function (el, options) {
        el.data('initialized', true);

        var svg = $(makeSVG('svg', {width: options.size, height: options.size, style: 'background: '+ options.background +''})).appendTo(el);
        var g = makeSVG('g', {fill: 'none', stroke: options.color, 'stroke-width': options.petalWidth});
        var $g = $(g).appendTo(svg);

        var x = options.size / 2;
        var y = options.size / 2;

        // Ð¡Ñ‚Ñ€Ð¾Ð¸Ð¼ ÐºÑ€ÑƒÑ‚Ð¸Ð»ÐºÑƒ
        for (var _i = 0; _i < options.petals; _i++) {
            // Ð£Ð³Ð¾Ð» Ð² Ð³Ñ€Ð°Ð´ÑƒÑÐ°Ñ…
            var a = 360 / options.petals * (options.petals - _i);
            // ÐŸÑ€Ð¾Ð·Ñ€Ð°Ñ‡Ð½Ð¾ÑÑ‚ÑŒ
            var opacity = Math.max(1 - 1 / options.petals * _i, .25);
            // Ð¡Ð¾Ð·Ð´Ð°Ñ‘Ð¼ Ð»Ð¸Ð½Ð¸ÑŽ
            $(makeSVG('line', {x1: options.size / 2, y1: options.petalOffset, x2: options.size / 2, y2: options.petalOffset + options.petalLength, transform: 'rotate('+ a + ' ' + x + ' ' + y + ')', opacity: opacity})).appendTo($g);
        }

        // ÐšÑ€ÑƒÑ‚Ð¸Ð¼ ÐºÑ€ÑƒÑ‚Ð¸Ð»ÐºÑƒ
        var frame = 0;
        var animationInterval;
        var animation = function () {
            var a = 360 / options.petals * frame;
            g.setAttribute('transform', 'rotate('+ a + ' ' + x + ' ' + y + ')');

            frame++;
            if (frame >= options.petals) {
                frame = 0;
            }
        };

        el.bind('show', function(e, time){
            // ÐŸÐ¾ÐºÐ°Ð·Ñ‹Ð²Ð°ÐµÐ¼ Ð¸ Ð·Ð°Ð¿ÑƒÑÐºÐ°ÐµÐ¼ ÐºÑ€ÑƒÑ‚Ð¸Ð»ÐºÑƒ
            el.stop().fadeTo('fast', 1);
            clearInterval(animationInterval);
            animation();
            animationInterval = setInterval(animation, (time ? time : options.time) / options.petals);
        });

        el.bind('hide', function(){
            // Ð¡ÐºÑ€Ñ‹Ð²Ð°ÐµÐ¼ Ð¸ Ð¾ÑÑ‚Ð°Ð½Ð°Ð²Ð»Ð¸Ð²Ð°ÐµÐ¼ ÐºÑ€ÑƒÑ‚Ð¸Ð»ÐºÑƒ
            el.stop().fadeTo('fast', 0, function(){
                clearInterval(animationInterval);
            });
        });

        el.trigger('show');
    };

    $.fn.krutilka_search = function (o) {
        var options = {
            size: 20, // Ð¨Ð¸Ñ€Ð¸Ð½Ð° Ð¸ Ð²Ñ‹ÑÐ¾Ñ‚Ð° Ð±Ð»Ð¾ÐºÐ° Ñ ÐºÑ€ÑƒÑ‚Ð¸Ð»ÐºÐ¾Ð¹
            petals: 12, // Ð¡ÐºÐ¾Ð»ÑŒÐºÐ¾ Ð»ÐµÐ¿ÐµÑÑ‚ÐºÐ¾Ð² Ñƒ ÐºÑ€ÑƒÑ‚Ð¸Ð»ÐºÐ¸
            petalWidth: 2, // Ð¢Ð¾Ð»Ñ‰Ð¸Ð½Ð° Ð»ÐµÐ¿ÐµÑÑ‚ÐºÐ°
            petalLength: 5, // Ð”Ð»Ð¸Ð½Ð° Ð»ÐµÐ¿ÐµÑÑ‚ÐºÐ°
            petalOffset: 1, // Ð’Ð½ÑƒÑ‚Ñ€ÐµÐ½Ð½ÐµÐµ Ð¿Ð¾Ð»Ðµ Ð±Ð»Ð¾ÐºÐ° Ñ ÐºÑ€ÑƒÑ‚Ð¸Ð»ÐºÐ¾Ð¹ (Ñ€Ð°ÑÑÑ‚Ð¾ÑÐ½Ð¸Ðµ Ð´Ð¾ ÐºÐ¾Ð½Ñ‡Ð¸ÐºÐ° Ð»ÐµÐ¿ÐµÑÑ‚ÐºÐ°)
            time: 1000, // Ð’Ñ€ÐµÐ¼Ñ Ð¿Ñ€Ð¾Ñ…Ð¾Ð´Ð° ÐºÑ€ÑƒÐ³Ð° Ð² Ð¼Ð¸Ð»Ð»Ð¸ÑÐµÐºÑƒÐ½Ð´Ð°Ñ…
            color: '#6e6e6e', // Ð¦Ð²ÐµÑ‚ Ð»ÐµÐ¿ÐµÑÑ‚ÐºÐ¾Ð²
            background: 'none' // Ð¤Ð¾Ð½ ÐºÑ€ÑƒÑ‚Ð¸Ð»ÐºÐ¸
        };

        $.extend(options, o);

        this.each(function () {
            var el = $(this);
            if (!el.data('initialized') && svgFLAG) {
                // Ð•ÑÐ»Ð¸ ÐµÑ‰Ñ‘ Ð½Ðµ Ð¸Ð½Ð¸Ñ†Ð¸Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¾
                krutilka_search(el, options);
            }
        });

        // Ð§ÐµÐ¹Ð½Ð°Ð±Ð¸Ð»Ð¸Ñ‚Ð¸
        return this;
    };
})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:107:"/bitrix/templates/mts_main_slider/components/bitrix/main.include/gradusniki_slider/script.js?13706603563006";s:6:"source";s:92:"/bitrix/templates/mts_main_slider/components/bitrix/main.include/gradusniki_slider/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var menuLayerOpen = false;
var clickOnMenuLayer = false;
$(document).ready(function() {
    $(".searchBlock .nav .all a").live("click", function() {
        var activeIndex = $(".mainNav a.active").parents("li").index();
        if ($(".hideBlockOuterWrapper .hideBlock").css("display") == "none") {
            $(".hideBlockFooter").each(function() {
                var curFooterIndex = $(this).index() - 1;
                if (curFooterIndex != activeIndex) {
                    $(".hideBlockFooter").eq(curFooterIndex).css('display', 'none');
                } else {
                    $(".hideBlockFooter").eq(curFooterIndex).css('display', 'block');
                }
            });
            $(".hideBlockOuterWrapper .hideBlock").slideToggle();
            if (typeof(bannerTimer) != "undefined" && bannerTimer !== null) {
                clearTimeout(bannerTimer);
            }
            if (typeof(bannerTimer2) != "undefined" && bannerTimer2 !== null) {
                clearTimeout(bannerTimer2);
            }
            $(".subHeader .gradWrapper").each(function() {
                if ($(this).index() != activeIndex) $(this).css('display', 'none'); else $(this).css('display', 'block');
            });
            $(".searchBlock .nav li").each(function() {
                if (!$(this).hasClass("all")) $(this).fadeOut();
            });
            $(".searchBlock .nav .runner").hide();
            menuLayerOpen = true;
        } else {
            $(".hideBlockFooter").css('display', 'none');
            $(".hideBlockOuterWrapper .hideBlock").slideToggle(null, function() {
                if (typeof(bannerTimer) != "undefined" && bannerTimer !== null) {
                    mouseOnBanner = false;
                    fakeclick = true;
                    bannerTimer = setTimeout('repeatFunction()', bannerTime);
                }
                if (typeof(bannerTimer2) != "undefined" && bannerTimer2 !== null) {
                    mouseOnBanner2 = false;
                    fakeclick2 = true;
                    bannerTimer2 = setTimeout('repeatFunction2()', bannerTime2);
                }
                $(".searchBlock .nav .runner").show();
            });
            $(".searchBlock .nav li").each(function() {
                if (!$(this).hasClass("all")) $(this).fadeIn();
            });
            menuLayerOpen = false;
        }
        return false;
    });
    $(".searchBlock, .mainNav a").live("mousedown", function() {
        clickOnMenuLayer = true;
        $(document).trigger("click");
    });
    $(document).bind("click", function() {
        if (menuLayerOpen === true && clickOnMenuLayer === false) {
            var activeIndex = $(".mainNav a.active").parents("li").index();
            $(".searchBlock .nav .navWrapper").eq(activeIndex).find(".all a").trigger("click");
            menuLayerOpen = false;
        }
        clickOnMenuLayer = false;
    });
    $(".subHeader .gradWrapper").eq(activeIndex).css("display", "block");
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:83:"/bitrix/components/mscoder/promo.main/templates/aviaportal/script.js?14116479763400";s:6:"source";s:68:"/bitrix/components/mscoder/promo.main/templates/aviaportal/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var bannerTimerSSA;
var bannerTimeSSA = 3000;
var canClickSSA = true;
var mouseOnBannerSSA = false;
var fakeclickSSA=false;

$.fn.animateBannerSAA = function(inOptions){
    var $obj = $(this);
    var defaultOptions = {
        time: 500,
        fade: 0.5
    };
    var options = $.extend(defaultOptions, inOptions);

    function generateNav() {
        var size = $obj.find(".jssaa > .jssaa-Items").size();
        if (size > 0) {
            var navArrows = "<ul class=\"jssaa-controls\">\n<li>\n<a class=\"jssaa-next\" href=\"#\">Next</a>\n";
            navArrows += "</li><li><a class=\"jssaa-prev\" href=\"#\">Prev</a></li></ul>";
            $obj.append(navArrows);
            $obj.find(".jssaa-controls").css("z-index", 30);

            var navString = "<ol class=\"jssaa-markers\">";
            var i = 1;
            while (i <= size) {
                navString += "<li";
                if (i == 1) {
                    navString += " class=\"active-marker\"";
                }
                navString += ">\n<a href=\"#\">" + i + "</a>\n</li>\n";
                i++;
            }
            navString += "</ol>";
            $obj.append(navString);
            $obj.find(".jssaa-markers").css("z-index", 25);
        }
    }


    function initBanner() {
        $obj.find(".jssaa > .jssaa-Items").css({
            opacity: 0,
            "z-index": 10
        }).eq(0).css({
            opacity: 1,
            "z-index": 20
        });
    }

    $obj.find(".jssaa-markers a").live("click", function(){
        canClickSSA = false;

        var $item = $(this);
        if ($(this).parent().hasClass("active-marker"))
            return false;

        var indx = $obj.find(".jssaa-markers .active-marker").index();
        $obj.find(".jssaa-markers > li").removeClass("active-marker");

        $obj.find(".jssaa > .jssaa-Items").eq(indx).css("z-index", 20).animate({opacity: 0}, options.time);
        indx = $item.parent().index();
        $obj.find(".jssaa > .jssaa-Items").eq(indx).find(".content").css("display", "none");
        $obj.find(".jssaa > .jssaa-Items").eq(indx).css("z-index", 10).animate({opacity: 1},options.time, function(){
            $obj.find(".jssaa > .jssaa-Items").css("z-index", 10);
            $obj.find(".jssaa > .jssaa-Items").eq(indx).css("z-index", 20);
            $item.parent().addClass("active-marker");
            $(this).find(".content").css({
                display: "block",
                opacity: 0
            }).animate({
                opacity: 1
            }, options.time, function(){
                canClickSSA = true;
            });
            canClickSSA = true;
        });

        return false;
    });

    $obj.find(".jssaa-controls .jssaa-next").live("click", function(){
        if (fakeclickSSA!=true) mouseOnBannerSSA = true;
        if (!canClickSSA) return false;
        var indx = $obj.find(".jssaa-markers .active-marker").index();
        indx = (indx + 1) % $obj.find(".jssaa > .jssaa-Items").size();

        $obj.find(".jssaa-markers a").eq(indx).trigger("click");

        return false;
    });

    $obj.find(".jssaa-controls .jssaa-prev").live("click", function(){
        mouseOnBannerSSA = true;
        if (!canClickSSA) return false;
        var indx = $obj.find(".jssaa-markers .active-marker").index();
        indx = (indx - 1) % $obj.find(".jssaa > .jssaa-Items").size();
        $obj.find(".jssaa-markers a").eq(indx).trigger("click");
        return false;
    });

    initBanner();
    generateNav();
}

$(document).ready(function(){
    $(".jssaa-wrapper").animateBannerSAA();

    //.jssaa-wrapper,
    $(".jssaa-wrapper, .jssaa-wrapper .jssaa-next, .jssaa-wrapper .jssaa-prev").live("mouseover", function(){
        mouseOnBannerSSA = true;
    });
    //.jssaa-wrapper,
    $(".jssaa-wrapper, .jssaa-wrapper .jssaa-next, .jssaa-wrapper .jssaa-prev").live("mouseout", function(){
        mouseOnBannerSSA = false;
        clearTimeout(bannerTimerSSA);
    });
});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:82:"/bitrix/components/mscoder/currency.calc/templates/update/script.js?14533678008219";s:6:"source";s:67:"/bitrix/components/mscoder/currency.calc/templates/update/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var arCurrencyCalc = new Array();
arCurrencyCalc['cash'] = new Array();
arCurrencyCalc['nonCash'] = new Array();

function number_format(number, decimals, dec_point, thousands_sep) {
    var exponent = "";
    var numberstr = number.toString();
    var eindex = numberstr.indexOf("e");
    var i, z;
    if (eindex > -1) {
        exponent = numberstr.substring(eindex);
        number = parseFloat(numberstr.substring(0, eindex));
    }

    if (decimals != null) {
        var temp = Math.pow(10, decimals);
        number = Math.round(number * temp) / temp;
    }
    var sign = number < 0 ? "-" : "";
    var integer = (number > 0 ?
        Math.floor(number) : Math.abs(Math.ceil(number))).toString();

    var fractional = number.toString().substring(integer.length + sign.length);
    dec_point = dec_point != null ? dec_point : ".";
    fractional = decimals != null && decimals > 0 || fractional.length > 1 ? (dec_point + fractional.substring(1)) : "";
    if (decimals != null && decimals > 0) {
        for (i = fractional.length - 1, z = decimals; i < z; ++i) {
            fractional += "0";
        }
    }

    thousands_sep = (thousands_sep != dec_point || fractional.length == 0) ?
        thousands_sep : null;
    if (thousands_sep != null && thousands_sep != "") {
        for (i = integer.length - 3; i > 0; i -= 3) {
            integer = integer.substring(0, i) + thousands_sep + integer.substring(i);
        }
    }

    return sign + integer + fractional + exponent;
}

$(document).ready(function() {
    $.fn.currencyBlock = function() {
        return this.each(function() {
            var $currencyWrapper = $(this),
                $cashBlock = $currencyWrapper.find('.js-cash-currency-block'),
                $nonCashBlock = $currencyWrapper.find('.js-non-cash-currency-block'),
                $calcBlock = $currencyWrapper.find('.js-calc-block'),
                $cashCalcLink = $currencyWrapper.find('.js-cash-calc-show'),
                $nonCashCalcLink = $currencyWrapper.find('.js-non-cash-calc-show'),
                $cashLink = $currencyWrapper.find('.js-cash-show'),
                $nonCashLink = $currencyWrapper.find('.js-non-cash-show'),

                init = function() {
                    $calcBlock.hide();
                },
                calcShow = function(e) {
                    e.preventDefault();

                    if ($(this).hasClass('js-cash-calc-show')) {
                        $calcBlock.find('.cur-pseudo').removeClass('js-non-cash-show').addClass('js-cash-show').text('ÐÐ°Ð»Ð¸Ñ‡Ð½Ð°Ñ Ð²Ð°Ð»ÑŽÑ‚Ð°').parents('.calcWrapper').removeClass('js-calc-non-cash').addClass('js-calc-cash');
                    } else if ($(this).hasClass('js-non-cash-calc-show')) {
                        $calcBlock.find('.cur-pseudo').removeClass('js-cash-show').addClass('js-non-cash-show').text('Ð‘ÐµÐ·Ð½Ð°Ð»Ð¸Ñ‡Ð½Ñ‹Ðµ ÐºÑƒÑ€ÑÑ‹').parents('.calcWrapper').removeClass('js-calc-cash').addClass('js-calc-non-cash');
                    }

                    $cashBlock.hide();
                    $nonCashBlock.hide();
                    $calcBlock.show();
                },
                cashBlockShow = function(e) {
                    e.preventDefault();

                    $cashBlock.show();
                    $nonCashBlock.hide();
                    $calcBlock.hide();
                },
                nonCashBlockShow = function(e) {
                    e.preventDefault();

                    $cashBlock.hide();
                    $nonCashBlock.show();
                    $calcBlock.hide();
                };

            init();

            $cashCalcLink.click(calcShow);
            $nonCashCalcLink.click(calcShow);
            $cashLink.live('click', cashBlockShow);
            $nonCashLink.live('click', nonCashBlockShow);
        });
    };

    $('.currencyWrapper').currencyBlock();

    var editedCalcField = "from";
    $("input[name=currencyCalcFromValue], input[name=currencyCalcToValue]").live('focusout', function() {
        var val = $(this).val();

        val = val.replace(" ", "");
        val = val.replace(" ", "");
        val = val.replace(" ", "");
        val = val.replace(",", ".");
        var digitPattern = /^[\d.,\s]+$/;
        if (!digitPattern.test(val)) {
            val = val.substr(0, val.length - 1);
        }
        if (val == '.' || val == ',') {
            val = '0.';
        }
        if ((val.substr(-1) == ',' || val.substr(-1) == '.') && val.indexOf('.') > 0 && val.indexOf(".") != val.lastIndexOf(".")) {
            val = val.substr(0, val.length - 1);
        }
        var dec = 0;
        val = Math.round(val * 10000) / 10000;
        val += "";
        if (val.indexOf('.') > 0) {
            dec = val.length - val.indexOf(".");
            if (dec > 4) {
                dec = 4;
            }
        }
        val *= 1;
        $(this).val(number_format(val, dec, ',', ' '));
    });

    $('input[name="currencyCalcFromValue"]').live('keyup', function() {
        var calc = 'cash';
        if ($(this).parents('.calcWrapper').hasClass('js-calc-non-cash')) {
            calc = 'nonCash';
        }

        editedCalcField = "from";
        var from = $("select[name=currencyCalcFromCurrency]").val();
        var to = $("select[name=currencyCalcToCurrency]").val();
        var result = 0;
        var val = $(this).val();

        val = val.replace(" ", "");
        val = val.replace(" ", "");
        val = val.replace(" ", "");
        val = val.replace(",", ".");
        var digitPattern = /^[\d.,\s]+$/;
        if (!digitPattern.test(val)) {
            val = val.substr(0, val.length - 1);
        }

        if (val == '.' || val == ',') {
            val = '0.';
        }
        if ((val.substr(-1) == ',' || val.substr(-1) == '.') && val.indexOf('.') > 0 && val.indexOf(".") != val.lastIndexOf(".")) {
            val = val.substr(0, val.length - 1);
        }

        if (val == '') {
            val = 0;
        }

        val = parseFloat(val);

        $(this).val(val);

        if (from == 'RUR') {
            if (to == 'USD') {
                result = val / arCurrencyCalc[calc]['SELL_USD'];
            } else if (to == 'EUR') {
                result = val / arCurrencyCalc[calc]['SELL_EUR'];
            } else {
                result = val;
            }
        } else if (from == 'USD') {
            if (to == 'USD') {
                result = val;
            } else if (to == 'EUR') {
                result = val * arCurrencyCalc[calc]['USD_EUR'];
            } else {
                result = val * arCurrencyCalc[calc]['BUY_USD'];
            }
        } else {
            if (to == 'USD') {
                result = val * arCurrencyCalc[calc]['EUR_USD'];
            } else if (to == 'EUR') {
                result = val;
            } else {
                result = val * arCurrencyCalc[calc]['BUY_EUR'];
            }
        }

        var dec = 0;
        result = Math.round(result * 10000) / 10000;
        result *= 1;
        result += "";
        if (result.indexOf('.') > 0) {
            dec = result.length - result.indexOf(".") - 1;
            if (dec > 2) {
                dec = 2;
            }
        }
        result *= 1;
        $("input[name=currencyCalcToValue]").val(number_format(result, dec, ',', ' '));
    });
    $("input[name=currencyCalcToValue]").live("keyup", function() {
        var calc = 'cash';
        if ($(this).parents('.calcWrapper').hasClass('js-calc-non-cash')) {
            calc = 'nonCash';
        }

        editedCalcField = "to";
        var from = $("select[name=currencyCalcFromCurrency]").val();
        var to = $("select[name=currencyCalcToCurrency]").val();
        var result = 0;
        var val = $(this).val();

        val = val.replace(" ", "");
        val = val.replace(" ", "");
        val = val.replace(" ", "");
        val = val.replace(",", ".");
        var digitPattern = /^[\d.,\s]+$/;
        if (!digitPattern.test(val)) {
            val = val.substr(0, val.length - 1);
        }
        if (val == '.' || val == ',') {
            val = '0.';
        }
        if ((val.substr(-1) == ',' || val.substr(-1) == '.') && val.indexOf('.') > 0 && val.indexOf(".") != val.lastIndexOf(".")) {
            val = val.substr(0, val.length - 1);
        }

        if (val == '') {
            val = 0;
        }

        $(this).val(val);

        if (from == 'RUR') {
            if (to == 'USD') {
                result = val * arCurrencyCalc[calc]['SELL_USD'];
            }
            else if (to == 'EUR') {
                result = val * arCurrencyCalc[calc]['SELL_EUR'];
            }
            else {
                result = val;
            }
        }
        else if (from == 'USD') {
            if (to == 'USD') {
                result = val;
            }
            else if (to == 'EUR') {
                result = val / arCurrencyCalc[calc]['USD_EUR'];
            }
            else {
                result = val / arCurrencyCalc[calc]['BUY_USD'];
            }
        }
        else {
            if (to == 'USD') {
                result = val / arCurrencyCalc[calc]['EUR_USD'];
            }
            else if (to == 'EUR') {
                result = val;
            }
            else {
                result = val * arCurrencyCalc[calc]['BUY_EUR'];
            }
        }
        var dec = 0;
        result = Math.round(result * 10000) / 10000;
        result += "";
        if (result.indexOf('.') > 0) {
            dec = result.length - result.indexOf(".") - 1;
            if (dec > 4) {
                dec = 4;
            }
        }
        result *= 1;
        $("input[name=currencyCalcFromValue]").val(number_format(result, dec, ',', ' '));
    });

    $("select[name=currencyCalcFromCurrency], select[name=currencyCalcToCurrency]").change(function() {
        if (editedCalcField == "from") {
            $("input[name=currencyCalcFromValue]").trigger("keyup");
            $("input[name=currencyCalcFromValue]").trigger("focusout");
        }
        else {
            $("input[name=currencyCalcToValue]").trigger("keyup");
            $("input[name=currencyCalcToValue]").trigger("focusout");
        }
    });
});
/* End */
;; /* /js/checkjs.js?137066060535*/
; /* /js/jquery-1.7.1.min.js?135477842893637*/
; /* /js/cufon-yui.js?134425080018258*/
; /* /js/Bliss_Pro_700.font.js?1370660606106309*/
; /* /js/detect.js?1370660606432*/
; /* /js/form.js?146649316415024*/
; /* /js/basic-jquery-slider.min.js?13706606053702*/
; /* /js/jquery.tools.min.js?137066060525666*/
; /* /js/jquery.jqtransform.js?137066060613898*/
; /* /js/jquery.filestyle.mini.js?13706606051015*/
; /* /js/jquery.scrollTo-1.4.2-min.js?13706606062262*/
; /* /js/jquery.localscroll-1.2.7-min.js?13706606051552*/
; /* /js/cookie.jquery.js?13706606054341*/
; /* /js/script.js?148292836315073*/
; /* /js/swfobject.js?13706606056880*/
; /* /js/slider.js?14581409935154*/
; /* /js/krutilka.js?13706606063398*/
; /* /js/loader.js?1386744380197*/
; /* /js/google_analytics.js?13992760801994*/
; /* /js/metrika.js?1370660605541*/
; /* /bitrix/components/mscoder/buttons.main/templates/.default/script.js?1411647975754*/
; /* /bitrix/components/mscoder/search.input.new/templates/.default/script.js?141638029721036*/
; /* /js/krutilka_search.js?13706606063417*/
; /* /bitrix/templates/mts_main_slider/components/bitrix/main.include/gradusniki_slider/script.js?13706603563006*/
; /* /bitrix/components/mscoder/promo.main/templates/aviaportal/script.js?14116479763400*/
; /* /bitrix/components/mscoder/currency.calc/templates/update/script.js?14533678008219*/
