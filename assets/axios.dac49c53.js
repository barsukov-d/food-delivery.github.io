import{i as Ge,a_ as K,r as We,a$ as Ye,b0 as Je,aY as ze,aP as Xe,y as Ke,h as d,b1 as Ze,aB as er,au as rr}from"./index.eae3a570.js";import{VueWaitKey as tr}from"./wait.354c5c21.js";import{Q as nr}from"./QAvatar.b3f4fc0b.js";const ir=(e,r)=>{const n=Ge(e,r);if(!n)throw new Error(`Could not resolve ${e.description}`);return n},qt=()=>ir(tr),ar=/\/$|\/\?/;function or(e="",r=!1){return r?ar.test(e):e.endsWith("/")}function sr(e="",r=!1){if(!r)return e.endsWith("/")?e:e+"/";if(or(e,!0))return e||"/";const[n,...i]=e.split("?");return n+"/"+(i.length>0?`?${i.join("?")}`:"")}function ur(e=""){return e.startsWith("/")}function lr(e=""){return(ur(e)?e.slice(1):e)||"/"}function fr(e){return e&&e!=="/"}function Ht(e,...r){let n=e||"";for(const i of r.filter(t=>fr(t)))n=n?sr(n)+lr(i):i;return n}var Z;(function(e){e[e.ACCEPTED=202]="ACCEPTED",e[e.BAD_GATEWAY=502]="BAD_GATEWAY",e[e.BAD_REQUEST=400]="BAD_REQUEST",e[e.CONFLICT=409]="CONFLICT",e[e.CONTINUE=100]="CONTINUE",e[e.CREATED=201]="CREATED",e[e.EXPECTATION_FAILED=417]="EXPECTATION_FAILED",e[e.FAILED_DEPENDENCY=424]="FAILED_DEPENDENCY",e[e.FORBIDDEN=403]="FORBIDDEN",e[e.GATEWAY_TIMEOUT=504]="GATEWAY_TIMEOUT",e[e.GONE=410]="GONE",e[e.HTTP_VERSION_NOT_SUPPORTED=505]="HTTP_VERSION_NOT_SUPPORTED",e[e.IM_A_TEAPOT=418]="IM_A_TEAPOT",e[e.INSUFFICIENT_SPACE_ON_RESOURCE=419]="INSUFFICIENT_SPACE_ON_RESOURCE",e[e.INSUFFICIENT_STORAGE=507]="INSUFFICIENT_STORAGE",e[e.INTERNAL_SERVER_ERROR=500]="INTERNAL_SERVER_ERROR",e[e.LENGTH_REQUIRED=411]="LENGTH_REQUIRED",e[e.LOCKED=423]="LOCKED",e[e.METHOD_FAILURE=420]="METHOD_FAILURE",e[e.METHOD_NOT_ALLOWED=405]="METHOD_NOT_ALLOWED",e[e.MOVED_PERMANENTLY=301]="MOVED_PERMANENTLY",e[e.MOVED_TEMPORARILY=302]="MOVED_TEMPORARILY",e[e.MULTI_STATUS=207]="MULTI_STATUS",e[e.MULTIPLE_CHOICES=300]="MULTIPLE_CHOICES",e[e.NETWORK_AUTHENTICATION_REQUIRED=511]="NETWORK_AUTHENTICATION_REQUIRED",e[e.NO_CONTENT=204]="NO_CONTENT",e[e.NON_AUTHORITATIVE_INFORMATION=203]="NON_AUTHORITATIVE_INFORMATION",e[e.NOT_ACCEPTABLE=406]="NOT_ACCEPTABLE",e[e.NOT_FOUND=404]="NOT_FOUND",e[e.NOT_IMPLEMENTED=501]="NOT_IMPLEMENTED",e[e.NOT_MODIFIED=304]="NOT_MODIFIED",e[e.OK=200]="OK",e[e.PARTIAL_CONTENT=206]="PARTIAL_CONTENT",e[e.PAYMENT_REQUIRED=402]="PAYMENT_REQUIRED",e[e.PERMANENT_REDIRECT=308]="PERMANENT_REDIRECT",e[e.PRECONDITION_FAILED=412]="PRECONDITION_FAILED",e[e.PRECONDITION_REQUIRED=428]="PRECONDITION_REQUIRED",e[e.PROCESSING=102]="PROCESSING",e[e.PROXY_AUTHENTICATION_REQUIRED=407]="PROXY_AUTHENTICATION_REQUIRED",e[e.REQUEST_HEADER_FIELDS_TOO_LARGE=431]="REQUEST_HEADER_FIELDS_TOO_LARGE",e[e.REQUEST_TIMEOUT=408]="REQUEST_TIMEOUT",e[e.REQUEST_TOO_LONG=413]="REQUEST_TOO_LONG",e[e.REQUEST_URI_TOO_LONG=414]="REQUEST_URI_TOO_LONG",e[e.REQUESTED_RANGE_NOT_SATISFIABLE=416]="REQUESTED_RANGE_NOT_SATISFIABLE",e[e.RESET_CONTENT=205]="RESET_CONTENT",e[e.SEE_OTHER=303]="SEE_OTHER",e[e.SERVICE_UNAVAILABLE=503]="SERVICE_UNAVAILABLE",e[e.SWITCHING_PROTOCOLS=101]="SWITCHING_PROTOCOLS",e[e.TEMPORARY_REDIRECT=307]="TEMPORARY_REDIRECT",e[e.TOO_MANY_REQUESTS=429]="TOO_MANY_REQUESTS",e[e.UNAUTHORIZED=401]="UNAUTHORIZED",e[e.UNAVAILABLE_FOR_LEGAL_REASONS=451]="UNAVAILABLE_FOR_LEGAL_REASONS",e[e.UNPROCESSABLE_ENTITY=422]="UNPROCESSABLE_ENTITY",e[e.UNSUPPORTED_MEDIA_TYPE=415]="UNSUPPORTED_MEDIA_TYPE",e[e.USE_PROXY=305]="USE_PROXY",e[e.MISDIRECTED_REQUEST=421]="MISDIRECTED_REQUEST"})(Z||(Z={}));var te={exports:{}},Ie=function(r,n){return function(){for(var t=new Array(arguments.length),a=0;a<t.length;a++)t[a]=arguments[a];return r.apply(n,t)}},cr=Ie,ne=Object.prototype.toString,ie=function(e){return function(r){var n=ne.call(r);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())}}(Object.create(null));function I(e){return e=e.toLowerCase(),function(n){return ie(n)===e}}function ae(e){return Array.isArray(e)}function q(e){return typeof e=="undefined"}function Er(e){return e!==null&&!q(e)&&e.constructor!==null&&!q(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var be=I("ArrayBuffer");function pr(e){var r;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?r=ArrayBuffer.isView(e):r=e&&e.buffer&&be(e.buffer),r}function dr(e){return typeof e=="string"}function hr(e){return typeof e=="number"}function ge(e){return e!==null&&typeof e=="object"}function M(e){if(ie(e)!=="object")return!1;var r=Object.getPrototypeOf(e);return r===null||r===Object.prototype}var mr=I("Date"),vr=I("File"),Tr=I("Blob"),Or=I("FileList");function oe(e){return ne.call(e)==="[object Function]"}function Rr(e){return ge(e)&&oe(e.pipe)}function _r(e){var r="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||ne.call(e)===r||oe(e.toString)&&e.toString()===r)}var Nr=I("URLSearchParams");function Ar(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function yr(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function se(e,r){if(!(e===null||typeof e=="undefined"))if(typeof e!="object"&&(e=[e]),ae(e))for(var n=0,i=e.length;n<i;n++)r.call(null,e[n],n,e);else for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.call(null,e[t],t,e)}function ee(){var e={};function r(t,a){M(e[a])&&M(t)?e[a]=ee(e[a],t):M(t)?e[a]=ee({},t):ae(t)?e[a]=t.slice():e[a]=t}for(var n=0,i=arguments.length;n<i;n++)se(arguments[n],r);return e}function Ir(e,r,n){return se(r,function(t,a){n&&typeof t=="function"?e[a]=cr(t,n):e[a]=t}),e}function br(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function gr(e,r,n,i){e.prototype=Object.create(r.prototype,i),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)}function Dr(e,r,n){var i,t,a,o={};r=r||{};do{for(i=Object.getOwnPropertyNames(e),t=i.length;t-- >0;)a=i[t],o[a]||(r[a]=e[a],o[a]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,r))&&e!==Object.prototype);return r}function wr(e,r,n){e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=r.length;var i=e.indexOf(r,n);return i!==-1&&i===n}function Ur(e){if(!e)return null;var r=e.length;if(q(r))return null;for(var n=new Array(r);r-- >0;)n[r]=e[r];return n}var Lr=function(e){return function(r){return e&&r instanceof e}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),p={isArray:ae,isArrayBuffer:be,isBuffer:Er,isFormData:_r,isArrayBufferView:pr,isString:dr,isNumber:hr,isObject:ge,isPlainObject:M,isUndefined:q,isDate:mr,isFile:vr,isBlob:Tr,isFunction:oe,isStream:Rr,isURLSearchParams:Nr,isStandardBrowserEnv:yr,forEach:se,merge:ee,extend:Ir,trim:Ar,stripBOM:br,inherits:gr,toFlatObject:Dr,kindOf:ie,kindOfTest:I,endsWith:wr,toArray:Ur,isTypedArray:Lr,isFileList:Or},g=p;function pe(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var De=function(r,n,i){if(!n)return r;var t;if(i)t=i(n);else if(g.isURLSearchParams(n))t=n.toString();else{var a=[];g.forEach(n,function(u,c){u===null||typeof u=="undefined"||(g.isArray(u)?c=c+"[]":u=[u],g.forEach(u,function(f){g.isDate(f)?f=f.toISOString():g.isObject(f)&&(f=JSON.stringify(f)),a.push(pe(c)+"="+pe(f))}))}),t=a.join("&")}if(t){var o=r.indexOf("#");o!==-1&&(r=r.slice(0,o)),r+=(r.indexOf("?")===-1?"?":"&")+t}return r},Pr=p;function H(){this.handlers=[]}H.prototype.use=function(r,n,i){return this.handlers.push({fulfilled:r,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};H.prototype.eject=function(r){this.handlers[r]&&(this.handlers[r]=null)};H.prototype.forEach=function(r){Pr.forEach(this.handlers,function(i){i!==null&&r(i)})};var xr=H,$r=p,Br=function(r,n){$r.forEach(r,function(t,a){a!==n&&a.toUpperCase()===n.toUpperCase()&&(r[n]=t,delete r[a])})},we=p;function U(e,r,n,i,t){Error.call(this),this.message=e,this.name="AxiosError",r&&(this.code=r),n&&(this.config=n),i&&(this.request=i),t&&(this.response=t)}we.inherits(U,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Ue=U.prototype,Le={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(e){Le[e]={value:e}});Object.defineProperties(U,Le);Object.defineProperty(Ue,"isAxiosError",{value:!0});U.from=function(e,r,n,i,t,a){var o=Object.create(Ue);return we.toFlatObject(e,o,function(u){return u!==Error.prototype}),U.call(o,e.message,r,n,i,t),o.name=e.name,a&&Object.assign(o,a),o};var x=U,Pe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},R=p;function Fr(e,r){r=r||new FormData;var n=[];function i(a){return a===null?"":R.isDate(a)?a.toISOString():R.isArrayBuffer(a)||R.isTypedArray(a)?typeof Blob=="function"?new Blob([a]):Buffer.from(a):a}function t(a,o){if(R.isPlainObject(a)||R.isArray(a)){if(n.indexOf(a)!==-1)throw Error("Circular reference detected in "+o);n.push(a),R.forEach(a,function(u,c){if(!R.isUndefined(u)){var s=o?o+"."+c:c,f;if(u&&!o&&typeof u=="object"){if(R.endsWith(c,"{}"))u=JSON.stringify(u);else if(R.endsWith(c,"[]")&&(f=R.toArray(u))){f.forEach(function(v){!R.isUndefined(v)&&r.append(s,i(v))});return}}t(u,s)}}),n.pop()}else r.append(o,i(a))}return t(e),r}var xe=Fr,Y=x,Mr=function(r,n,i){var t=i.config.validateStatus;!i.status||!t||t(i.status)?r(i):n(new Y("Request failed with status code "+i.status,[Y.ERR_BAD_REQUEST,Y.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))},F=p,Cr=F.isStandardBrowserEnv()?function(){return{write:function(n,i,t,a,o,l){var u=[];u.push(n+"="+encodeURIComponent(i)),F.isNumber(t)&&u.push("expires="+new Date(t).toGMTString()),F.isString(a)&&u.push("path="+a),F.isString(o)&&u.push("domain="+o),l===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(n){var i=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Sr=function(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)},jr=function(r,n){return n?r.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):r},qr=Sr,Hr=jr,$e=function(r,n){return r&&!qr(n)?Hr(r,n):n},J=p,Qr=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Vr=function(r){var n={},i,t,a;return r&&J.forEach(r.split(`
`),function(l){if(a=l.indexOf(":"),i=J.trim(l.substr(0,a)).toLowerCase(),t=J.trim(l.substr(a+1)),i){if(n[i]&&Qr.indexOf(i)>=0)return;i==="set-cookie"?n[i]=(n[i]?n[i]:[]).concat([t]):n[i]=n[i]?n[i]+", "+t:t}}),n},de=p,kr=de.isStandardBrowserEnv()?function(){var r=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a"),i;function t(a){var o=a;return r&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return i=t(window.location.href),function(o){var l=de.isString(o)?t(o):o;return l.protocol===i.protocol&&l.host===i.host}}():function(){return function(){return!0}}(),re=x,Gr=p;function Be(e){re.call(this,e==null?"canceled":e,re.ERR_CANCELED),this.name="CanceledError"}Gr.inherits(Be,re,{__CANCEL__:!0});var Q=Be,Wr=function(r){var n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return n&&n[1]||""},$=p,Yr=Mr,Jr=Cr,zr=De,Xr=$e,Kr=Vr,Zr=kr,et=Pe,N=x,rt=Q,tt=Wr,he=function(r){return new Promise(function(i,t){var a=r.data,o=r.headers,l=r.responseType,u;function c(){r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}$.isFormData(a)&&$.isStandardBrowserEnv()&&delete o["Content-Type"];var s=new XMLHttpRequest;if(r.auth){var f=r.auth.username||"",v=r.auth.password?unescape(encodeURIComponent(r.auth.password)):"";o.Authorization="Basic "+btoa(f+":"+v)}var h=Xr(r.baseURL,r.url);s.open(r.method.toUpperCase(),zr(h,r.params,r.paramsSerializer),!0),s.timeout=r.timeout;function ce(){if(!!s){var O="getAllResponseHeaders"in s?Kr(s.getAllResponseHeaders()):null,b=!l||l==="text"||l==="json"?s.responseText:s.response,y={data:b,status:s.status,statusText:s.statusText,headers:O,config:r,request:s};Yr(function(W){i(W),c()},function(W){t(W),c()},y),s=null}}if("onloadend"in s?s.onloadend=ce:s.onreadystatechange=function(){!s||s.readyState!==4||s.status===0&&!(s.responseURL&&s.responseURL.indexOf("file:")===0)||setTimeout(ce)},s.onabort=function(){!s||(t(new N("Request aborted",N.ECONNABORTED,r,s)),s=null)},s.onerror=function(){t(new N("Network Error",N.ERR_NETWORK,r,s,s)),s=null},s.ontimeout=function(){var b=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded",y=r.transitional||et;r.timeoutErrorMessage&&(b=r.timeoutErrorMessage),t(new N(b,y.clarifyTimeoutError?N.ETIMEDOUT:N.ECONNABORTED,r,s)),s=null},$.isStandardBrowserEnv()){var Ee=(r.withCredentials||Zr(h))&&r.xsrfCookieName?Jr.read(r.xsrfCookieName):void 0;Ee&&(o[r.xsrfHeaderName]=Ee)}"setRequestHeader"in s&&$.forEach(o,function(b,y){typeof a=="undefined"&&y.toLowerCase()==="content-type"?delete o[y]:s.setRequestHeader(y,b)}),$.isUndefined(r.withCredentials)||(s.withCredentials=!!r.withCredentials),l&&l!=="json"&&(s.responseType=r.responseType),typeof r.onDownloadProgress=="function"&&s.addEventListener("progress",r.onDownloadProgress),typeof r.onUploadProgress=="function"&&s.upload&&s.upload.addEventListener("progress",r.onUploadProgress),(r.cancelToken||r.signal)&&(u=function(O){!s||(t(!O||O&&O.type?new rt:O),s.abort(),s=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u))),a||(a=null);var G=tt(h);if(G&&["http","https","file"].indexOf(G)===-1){t(new N("Unsupported protocol "+G+":",N.ERR_BAD_REQUEST,r));return}s.send(a)})},nt=null,E=p,me=Br,ve=x,it=Pe,at=xe,ot={"Content-Type":"application/x-www-form-urlencoded"};function Te(e,r){!E.isUndefined(e)&&E.isUndefined(e["Content-Type"])&&(e["Content-Type"]=r)}function st(){var e;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(e=he),e}function ut(e,r,n){if(E.isString(e))try{return(r||JSON.parse)(e),E.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(e)}var V={transitional:it,adapter:st(),transformRequest:[function(r,n){if(me(n,"Accept"),me(n,"Content-Type"),E.isFormData(r)||E.isArrayBuffer(r)||E.isBuffer(r)||E.isStream(r)||E.isFile(r)||E.isBlob(r))return r;if(E.isArrayBufferView(r))return r.buffer;if(E.isURLSearchParams(r))return Te(n,"application/x-www-form-urlencoded;charset=utf-8"),r.toString();var i=E.isObject(r),t=n&&n["Content-Type"],a;if((a=E.isFileList(r))||i&&t==="multipart/form-data"){var o=this.env&&this.env.FormData;return at(a?{"files[]":r}:r,o&&new o)}else if(i||t==="application/json")return Te(n,"application/json"),ut(r);return r}],transformResponse:[function(r){var n=this.transitional||V.transitional,i=n&&n.silentJSONParsing,t=n&&n.forcedJSONParsing,a=!i&&this.responseType==="json";if(a||t&&E.isString(r)&&r.length)try{return JSON.parse(r)}catch(o){if(a)throw o.name==="SyntaxError"?ve.from(o,ve.ERR_BAD_RESPONSE,this,null,this.response):o}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:nt},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};E.forEach(["delete","get","head"],function(r){V.headers[r]={}});E.forEach(["post","put","patch"],function(r){V.headers[r]=E.merge(ot)});var ue=V,lt=p,ft=ue,ct=function(r,n,i){var t=this||ft;return lt.forEach(i,function(o){r=o.call(t,r,n)}),r},Fe=function(r){return!!(r&&r.__CANCEL__)},Oe=p,z=ct,Et=Fe,pt=ue,dt=Q;function X(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new dt}var ht=function(r){X(r),r.headers=r.headers||{},r.data=z.call(r,r.data,r.headers,r.transformRequest),r.headers=Oe.merge(r.headers.common||{},r.headers[r.method]||{},r.headers),Oe.forEach(["delete","get","head","post","put","patch","common"],function(t){delete r.headers[t]});var n=r.adapter||pt.adapter;return n(r).then(function(t){return X(r),t.data=z.call(r,t.data,t.headers,r.transformResponse),t},function(t){return Et(t)||(X(r),t&&t.response&&(t.response.data=z.call(r,t.response.data,t.response.headers,r.transformResponse))),Promise.reject(t)})},T=p,Me=function(r,n){n=n||{};var i={};function t(s,f){return T.isPlainObject(s)&&T.isPlainObject(f)?T.merge(s,f):T.isPlainObject(f)?T.merge({},f):T.isArray(f)?f.slice():f}function a(s){if(T.isUndefined(n[s])){if(!T.isUndefined(r[s]))return t(void 0,r[s])}else return t(r[s],n[s])}function o(s){if(!T.isUndefined(n[s]))return t(void 0,n[s])}function l(s){if(T.isUndefined(n[s])){if(!T.isUndefined(r[s]))return t(void 0,r[s])}else return t(void 0,n[s])}function u(s){if(s in n)return t(r[s],n[s]);if(s in r)return t(void 0,r[s])}var c={url:o,method:o,data:o,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:u};return T.forEach(Object.keys(r).concat(Object.keys(n)),function(f){var v=c[f]||a,h=v(f);T.isUndefined(h)&&v!==u||(i[f]=h)}),i},Ce={version:"0.27.2"},mt=Ce.version,A=x,le={};["object","boolean","number","function","string","symbol"].forEach(function(e,r){le[e]=function(i){return typeof i===e||"a"+(r<1?"n ":" ")+e}});var Re={};le.transitional=function(r,n,i){function t(a,o){return"[Axios v"+mt+"] Transitional option '"+a+"'"+o+(i?". "+i:"")}return function(a,o,l){if(r===!1)throw new A(t(o," has been removed"+(n?" in "+n:"")),A.ERR_DEPRECATED);return n&&!Re[o]&&(Re[o]=!0,console.warn(t(o," has been deprecated since v"+n+" and will be removed in the near future"))),r?r(a,o,l):!0}};function vt(e,r,n){if(typeof e!="object")throw new A("options must be an object",A.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(e),t=i.length;t-- >0;){var a=i[t],o=r[a];if(o){var l=e[a],u=l===void 0||o(l,a,e);if(u!==!0)throw new A("option "+a+" must be "+u,A.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new A("Unknown option "+a,A.ERR_BAD_OPTION)}}var Tt={assertOptions:vt,validators:le},Se=p,Ot=De,_e=xr,Ne=ht,k=Me,Rt=$e,je=Tt,D=je.validators;function L(e){this.defaults=e,this.interceptors={request:new _e,response:new _e}}L.prototype.request=function(r,n){typeof r=="string"?(n=n||{},n.url=r):n=r||{},n=k(this.defaults,n),n.method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var i=n.transitional;i!==void 0&&je.assertOptions(i,{silentJSONParsing:D.transitional(D.boolean),forcedJSONParsing:D.transitional(D.boolean),clarifyTimeoutError:D.transitional(D.boolean)},!1);var t=[],a=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(a=a&&h.synchronous,t.unshift(h.fulfilled,h.rejected))});var o=[];this.interceptors.response.forEach(function(h){o.push(h.fulfilled,h.rejected)});var l;if(!a){var u=[Ne,void 0];for(Array.prototype.unshift.apply(u,t),u=u.concat(o),l=Promise.resolve(n);u.length;)l=l.then(u.shift(),u.shift());return l}for(var c=n;t.length;){var s=t.shift(),f=t.shift();try{c=s(c)}catch(v){f(v);break}}try{l=Ne(c)}catch(v){return Promise.reject(v)}for(;o.length;)l=l.then(o.shift(),o.shift());return l};L.prototype.getUri=function(r){r=k(this.defaults,r);var n=Rt(r.baseURL,r.url);return Ot(n,r.params,r.paramsSerializer)};Se.forEach(["delete","get","head","options"],function(r){L.prototype[r]=function(n,i){return this.request(k(i||{},{method:r,url:n,data:(i||{}).data}))}});Se.forEach(["post","put","patch"],function(r){function n(i){return function(a,o,l){return this.request(k(l||{},{method:r,headers:i?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))}}L.prototype[r]=n(),L.prototype[r+"Form"]=n(!0)});var _t=L,Nt=Q;function P(e){if(typeof e!="function")throw new TypeError("executor must be a function.");var r;this.promise=new Promise(function(t){r=t});var n=this;this.promise.then(function(i){if(!!n._listeners){var t,a=n._listeners.length;for(t=0;t<a;t++)n._listeners[t](i);n._listeners=null}}),this.promise.then=function(i){var t,a=new Promise(function(o){n.subscribe(o),t=o}).then(i);return a.cancel=function(){n.unsubscribe(t)},a},e(function(t){n.reason||(n.reason=new Nt(t),r(n.reason))})}P.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};P.prototype.subscribe=function(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]};P.prototype.unsubscribe=function(r){if(!!this._listeners){var n=this._listeners.indexOf(r);n!==-1&&this._listeners.splice(n,1)}};P.source=function(){var r,n=new P(function(t){r=t});return{token:n,cancel:r}};var At=P,yt=function(r){return function(i){return r.apply(null,i)}},It=p,bt=function(r){return It.isObject(r)&&r.isAxiosError===!0},Ae=p,gt=Ie,C=_t,Dt=Me,wt=ue;function qe(e){var r=new C(e),n=gt(C.prototype.request,r);return Ae.extend(n,C.prototype,r),Ae.extend(n,r),n.create=function(t){return qe(Dt(e,t))},n}var m=qe(wt);m.Axios=C;m.CanceledError=Q;m.CancelToken=At;m.isCancel=Fe;m.VERSION=Ce.version;m.toFormData=xe;m.AxiosError=x;m.Cancel=m.CanceledError;m.all=function(r){return Promise.all(r)};m.spread=yt;m.isAxiosError=bt;te.exports=m;te.exports.default=m;var Ut=te.exports;let Lt=0;const S={},j={},_={},He={},Pt=/^\s*$/,Qe=[],fe=["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right","center"],xt=["top-left","top-right","bottom-left","bottom-right"],w={positive:{icon:e=>e.iconSet.type.positive,color:"positive"},negative:{icon:e=>e.iconSet.type.negative,color:"negative"},warning:{icon:e=>e.iconSet.type.warning,color:"warning",textColor:"dark"},info:{icon:e=>e.iconSet.type.info,color:"info"},ongoing:{group:!1,timeout:0,spinner:!0,color:"grey-8"}};function Ve(e,r,n){if(!e)return B("parameter required");let i;const t={textColor:"white"};if(e.ignoreDefaults!==!0&&Object.assign(t,S),K(e)===!1&&(t.type&&Object.assign(t,w[t.type]),e={message:e}),Object.assign(t,w[e.type||t.type],e),typeof t.icon=="function"&&(t.icon=t.icon(r)),t.spinner?(t.spinner===!0&&(t.spinner=ze),t.spinner=Xe(t.spinner)):t.spinner=!1,t.meta={hasMedia:Boolean(t.spinner!==!1||t.icon||t.avatar),hasText:ye(t.message)||ye(t.caption)},t.position){if(fe.includes(t.position)===!1)return B("wrong position",e)}else t.position="bottom";if(t.timeout===void 0)t.timeout=5e3;else{const u=parseInt(t.timeout,10);if(isNaN(u)||u<0)return B("wrong timeout",e);t.timeout=u}t.timeout===0?t.progress=!1:t.progress===!0&&(t.meta.progressClass="q-notification__progress"+(t.progressClass?` ${t.progressClass}`:""),t.meta.progressStyle={animationDuration:`${t.timeout+1e3}ms`});const a=(Array.isArray(e.actions)===!0?e.actions:[]).concat(e.ignoreDefaults!==!0&&Array.isArray(S.actions)===!0?S.actions:[]).concat(w[e.type]!==void 0&&Array.isArray(w[e.type].actions)===!0?w[e.type].actions:[]),{closeBtn:o}=t;if(o&&a.push({label:typeof o=="string"?o:r.lang.label.close}),t.actions=a.map(({handler:u,noDismiss:c,...s})=>({flat:!0,...s,onClick:typeof u=="function"?()=>{u(),c!==!0&&l()}:()=>{l()}})),t.multiLine===void 0&&(t.multiLine=t.actions.length>1),Object.assign(t.meta,{class:`q-notification row items-stretch q-notification--${t.multiLine===!0?"multi-line":"standard"}`+(t.color!==void 0?` bg-${t.color}`:"")+(t.textColor!==void 0?` text-${t.textColor}`:"")+(t.classes!==void 0?` ${t.classes}`:""),wrapperClass:"q-notification__wrapper col relative-position border-radius-inherit "+(t.multiLine===!0?"column no-wrap justify-center":"row items-center"),contentClass:"q-notification__content row items-center"+(t.multiLine===!0?"":" col"),leftClass:t.meta.hasText===!0?"additional":"single",attrs:{role:"alert",...t.attrs}}),t.group===!1?(t.group=void 0,t.meta.group=void 0):((t.group===void 0||t.group===!0)&&(t.group=[t.message,t.caption,t.multiline].concat(t.actions.map(u=>`${u.label}*${u.icon}`)).join("|")),t.meta.group=t.group+"|"+t.position),t.actions.length===0?t.actions=void 0:t.meta.actionsClass="q-notification__actions row items-center "+(t.multiLine===!0?"justify-end":"col-auto")+(t.meta.hasMedia===!0?" q-notification__actions--with-media":""),n!==void 0){n.notif.meta.timer&&(clearTimeout(n.notif.meta.timer),n.notif.meta.timer=void 0),t.meta.uid=n.notif.meta.uid;const u=_[t.position].value.indexOf(n.notif);_[t.position].value[u]=t}else{const u=j[t.meta.group];if(u===void 0){if(t.meta.uid=Lt++,t.meta.badge=1,["left","right","center"].indexOf(t.position)!==-1)_[t.position].value.splice(Math.floor(_[t.position].value.length/2),0,t);else{const c=t.position.indexOf("top")>-1?"unshift":"push";_[t.position].value[c](t)}t.group!==void 0&&(j[t.meta.group]=t)}else{if(u.meta.timer&&(clearTimeout(u.meta.timer),u.meta.timer=void 0),t.badgePosition!==void 0){if(xt.includes(t.badgePosition)===!1)return B("wrong badgePosition",e)}else t.badgePosition=`top-${t.position.indexOf("left")>-1?"right":"left"}`;t.meta.uid=u.meta.uid,t.meta.badge=u.meta.badge+1,t.meta.badgeClass=`q-notification__badge q-notification__badge--${t.badgePosition}`+(t.badgeColor!==void 0?` bg-${t.badgeColor}`:"")+(t.badgeTextColor!==void 0?` text-${t.badgeTextColor}`:"")+(t.badgeClass?` ${t.badgeClass}`:"");const c=_[t.position].value.indexOf(u);_[t.position].value[c]=j[t.meta.group]=t}}const l=()=>{$t(t),i=void 0};if(t.timeout>0&&(t.meta.timer=setTimeout(()=>{t.meta.timer=void 0,l()},t.timeout+1e3)),t.group!==void 0)return u=>{u!==void 0?B("trying to update a grouped one which is forbidden",e):l()};if(i={dismiss:l,config:e,notif:t},n!==void 0){Object.assign(n,i);return}return u=>{if(i!==void 0)if(u===void 0)i.dismiss();else{const c=Object.assign({},i.config,u,{group:!1,position:t.position});Ve(c,r,i)}}}function $t(e){e.meta.timer&&(clearTimeout(e.meta.timer),e.meta.timer=void 0);const r=_[e.position].value.indexOf(e);if(r!==-1){e.group!==void 0&&delete j[e.meta.group];const n=Qe[""+e.meta.uid];if(n){const{width:i,height:t}=getComputedStyle(n);n.style.left=`${n.offsetLeft}px`,n.style.width=i,n.style.height=t}_[e.position].value.splice(r,1),typeof e.onDismiss=="function"&&e.onDismiss()}}function ye(e){return e!=null&&Pt.test(e)!==!0}function B(e,r){return console.error(`Notify: ${e}`,r),!1}function Bt(){return Ke({name:"QNotifications",devtools:{hide:!0},setup(){return()=>d("div",{class:"q-notifications"},fe.map(e=>d(Ze,{key:e,class:He[e],tag:"div",name:`q-notification--${e}`},()=>_[e].value.map(r=>{const n=r.meta,i=[];if(n.hasMedia===!0&&(r.spinner!==!1?i.push(d(r.spinner,{class:"q-notification__spinner q-notification__spinner--"+n.leftClass,color:r.spinnerColor,size:r.spinnerSize})):r.icon?i.push(d(er,{class:"q-notification__icon q-notification__icon--"+n.leftClass,name:r.icon,color:r.iconColor,size:r.iconSize,role:"img"})):r.avatar&&i.push(d(nr,{class:"q-notification__avatar q-notification__avatar--"+n.leftClass},()=>d("img",{src:r.avatar,"aria-hidden":"true"})))),n.hasText===!0){let a;const o={class:"q-notification__message col"};if(r.html===!0)o.innerHTML=r.caption?`<div>${r.message}</div><div class="q-notification__caption">${r.caption}</div>`:r.message;else{const l=[r.message];a=r.caption?[d("div",l),d("div",{class:"q-notification__caption"},[r.caption])]:l}i.push(d("div",o,a))}const t=[d("div",{class:n.contentClass},i)];return r.progress===!0&&t.push(d("div",{key:`${n.uid}|p|${n.badge}`,class:n.progressClass,style:n.progressStyle})),r.actions!==void 0&&t.push(d("div",{class:n.actionsClass},r.actions.map(a=>d(rr,a)))),n.badge>1&&t.push(d("div",{key:`${n.uid}|${n.badge}`,class:r.meta.badgeClass,style:r.badgeStyle},[n.badge])),d("div",{ref:a=>{Qe[""+n.uid]=a},key:n.uid,class:n.class,...n.attrs},[d("div",{class:n.wrapperClass},t)])}))))}})}var Ft={setDefaults(e){K(e)===!0&&Object.assign(S,e)},registerType(e,r){K(r)===!0&&(w[e]=r)},install({$q:e,parentApp:r}){if(e.notify=this.create=n=>Ve(n,e),e.notify.setDefaults=this.setDefaults,e.notify.registerType=this.registerType,e.config.notify!==void 0&&this.setDefaults(e.config.notify),this.__installed!==!0){fe.forEach(i=>{_[i]=We([]);const t=["left","center","right"].includes(i)===!0?"center":i.indexOf("top")>-1?"top":"bottom",a=i.indexOf("left")>-1?"start":i.indexOf("right")>-1?"end":"center",o=["left","right"].includes(i)?`items-${i==="left"?"start":"end"} justify-center`:i==="center"?"flex-center":`items-${a}`;He[i]=`q-notifications__list q-notifications__list--${t} fixed column no-wrap ${o}`});const n=Ye("q-notify");Je(Bt(),r).mount(n)}}};const Mt=(e="http://api.service.ru")=>{const r=Ut.create({baseURL:e});return r.interceptors.request.use(async n=>n),r.interceptors.response.use(n=>n.data,n=>{var t,a;const i=(t=n.response)==null?void 0:t.status;return i&&i>=Z.INTERNAL_SERVER_ERROR&&Ft.create({type:"warning",position:"top",message:((a=n.response)==null?void 0:a.data)||"\u0427\u0442\u043E \u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A"}),Promise.reject(n)}),r};Mt();export{Z as S,Ut as a,Mt as c,Ht as j,qt as u};
