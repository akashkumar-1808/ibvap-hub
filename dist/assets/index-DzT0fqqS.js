(function(){const z=document.createElement("link").relList;if(z&&z.supports&&z.supports("modulepreload"))return;for(const T of document.querySelectorAll('link[rel="modulepreload"]'))f(T);new MutationObserver(T=>{for(const _ of T)if(_.type==="childList")for(const X of _.addedNodes)X.tagName==="LINK"&&X.rel==="modulepreload"&&f(X)}).observe(document,{childList:!0,subtree:!0});function E(T){const _={};return T.integrity&&(_.integrity=T.integrity),T.referrerPolicy&&(_.referrerPolicy=T.referrerPolicy),T.crossOrigin==="use-credentials"?_.credentials="include":T.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function f(T){if(T.ep)return;T.ep=!0;const _=E(T);fetch(T.href,_)}})();function Vf(b){return b&&b.__esModule&&Object.prototype.hasOwnProperty.call(b,"default")?b.default:b}var ds={exports:{}},Si={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _f;function Nh(){if(_f)return Si;_f=1;var b=Symbol.for("react.transitional.element"),z=Symbol.for("react.fragment");function E(f,T,_){var X=null;if(_!==void 0&&(X=""+_),T.key!==void 0&&(X=""+T.key),"key"in T){_={};for(var ge in T)ge!=="key"&&(_[ge]=T[ge])}else _=T;return T=_.ref,{$$typeof:b,type:f,key:X,ref:T!==void 0?T:null,props:_}}return Si.Fragment=z,Si.jsx=E,Si.jsxs=E,Si}var kf;function jh(){return kf||(kf=1,ds.exports=Nh()),ds.exports}var c=jh(),fs={exports:{}},q={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df;function Sh(){if(Df)return q;Df=1;var b=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),_=Symbol.for("react.consumer"),X=Symbol.for("react.context"),ge=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),A=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),fe=Symbol.iterator;function Le(d){return d===null||typeof d!="object"?null:(d=fe&&d[fe]||d["@@iterator"],typeof d=="function"?d:null)}var He={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},we=Object.assign,yt={};function Fe(d,S,O){this.props=d,this.context=S,this.refs=yt,this.updater=O||He}Fe.prototype.isReactComponent={},Fe.prototype.setState=function(d,S){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,S,"setState")},Fe.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function Wt(){}Wt.prototype=Fe.prototype;function Ue(d,S,O){this.props=d,this.context=S,this.refs=yt,this.updater=O||He}var ot=Ue.prototype=new Wt;ot.constructor=Ue,we(ot,Fe.prototype),ot.isPureReactComponent=!0;var At=Array.isArray;function Ge(){}var $={H:null,A:null,T:null,S:null},Ve=Object.prototype.hasOwnProperty;function Et(d,S,O){var D=O.ref;return{$$typeof:b,type:d,key:S,ref:D!==void 0?D:null,props:O}}function Xa(d,S){return Et(d.type,S,d.props)}function Tt(d){return typeof d=="object"&&d!==null&&d.$$typeof===b}function Xe(d){var S={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(O){return S[O]})}var Sa=/\/+/g;function kt(d,S){return typeof d=="object"&&d!==null&&d.key!=null?Xe(""+d.key):S.toString(36)}function Nt(d){switch(d.status){case"fulfilled":return d.value;case"rejected":throw d.reason;default:switch(typeof d.status=="string"?d.then(Ge,Ge):(d.status="pending",d.then(function(S){d.status==="pending"&&(d.status="fulfilled",d.value=S)},function(S){d.status==="pending"&&(d.status="rejected",d.reason=S)})),d.status){case"fulfilled":return d.value;case"rejected":throw d.reason}}throw d}function y(d,S,O,D,Y){var Q=typeof d;(Q==="undefined"||Q==="boolean")&&(d=null);var le=!1;if(d===null)le=!0;else switch(Q){case"bigint":case"string":case"number":le=!0;break;case"object":switch(d.$$typeof){case b:case z:le=!0;break;case F:return le=d._init,y(le(d._payload),S,O,D,Y)}}if(le)return Y=Y(d),le=D===""?"."+kt(d,0):D,At(Y)?(O="",le!=null&&(O=le.replace(Sa,"$&/")+"/"),y(Y,S,O,"",function(wl){return wl})):Y!=null&&(Tt(Y)&&(Y=Xa(Y,O+(Y.key==null||d&&d.key===Y.key?"":(""+Y.key).replace(Sa,"$&/")+"/")+le)),S.push(Y)),1;le=0;var qe=D===""?".":D+":";if(At(d))for(var xe=0;xe<d.length;xe++)D=d[xe],Q=qe+kt(D,xe),le+=y(D,S,O,Q,Y);else if(xe=Le(d),typeof xe=="function")for(d=xe.call(d),xe=0;!(D=d.next()).done;)D=D.value,Q=qe+kt(D,xe++),le+=y(D,S,O,Q,Y);else if(Q==="object"){if(typeof d.then=="function")return y(Nt(d),S,O,D,Y);throw S=String(d),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.")}return le}function M(d,S,O){if(d==null)return d;var D=[],Y=0;return y(d,D,"","",function(Q){return S.call(O,Q,Y++)}),D}function L(d){if(d._status===-1){var S=d._result;S=S(),S.then(function(O){(d._status===0||d._status===-1)&&(d._status=1,d._result=O)},function(O){(d._status===0||d._status===-1)&&(d._status=2,d._result=O)}),d._status===-1&&(d._status=0,d._result=S)}if(d._status===1)return d._result.default;throw d._result}var ce=typeof reportError=="function"?reportError:function(d){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var S=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof d=="object"&&d!==null&&typeof d.message=="string"?String(d.message):String(d),error:d});if(!window.dispatchEvent(S))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",d);return}console.error(d)},ue={map:M,forEach:function(d,S,O){M(d,function(){S.apply(this,arguments)},O)},count:function(d){var S=0;return M(d,function(){S++}),S},toArray:function(d){return M(d,function(S){return S})||[]},only:function(d){if(!Tt(d))throw Error("React.Children.only expected to receive a single React element child.");return d}};return q.Activity=U,q.Children=ue,q.Component=Fe,q.Fragment=E,q.Profiler=T,q.PureComponent=Ue,q.StrictMode=f,q.Suspense=k,q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,q.__COMPILER_RUNTIME={__proto__:null,c:function(d){return $.H.useMemoCache(d)}},q.cache=function(d){return function(){return d.apply(null,arguments)}},q.cacheSignal=function(){return null},q.cloneElement=function(d,S,O){if(d==null)throw Error("The argument must be a React element, but you passed "+d+".");var D=we({},d.props),Y=d.key;if(S!=null)for(Q in S.key!==void 0&&(Y=""+S.key),S)!Ve.call(S,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&S.ref===void 0||(D[Q]=S[Q]);var Q=arguments.length-2;if(Q===1)D.children=O;else if(1<Q){for(var le=Array(Q),qe=0;qe<Q;qe++)le[qe]=arguments[qe+2];D.children=le}return Et(d.type,Y,D)},q.createContext=function(d){return d={$$typeof:X,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null},d.Provider=d,d.Consumer={$$typeof:_,_context:d},d},q.createElement=function(d,S,O){var D,Y={},Q=null;if(S!=null)for(D in S.key!==void 0&&(Q=""+S.key),S)Ve.call(S,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(Y[D]=S[D]);var le=arguments.length-2;if(le===1)Y.children=O;else if(1<le){for(var qe=Array(le),xe=0;xe<le;xe++)qe[xe]=arguments[xe+2];Y.children=qe}if(d&&d.defaultProps)for(D in le=d.defaultProps,le)Y[D]===void 0&&(Y[D]=le[D]);return Et(d,Q,Y)},q.createRef=function(){return{current:null}},q.forwardRef=function(d){return{$$typeof:ge,render:d}},q.isValidElement=Tt,q.lazy=function(d){return{$$typeof:F,_payload:{_status:-1,_result:d},_init:L}},q.memo=function(d,S){return{$$typeof:A,type:d,compare:S===void 0?null:S}},q.startTransition=function(d){var S=$.T,O={};$.T=O;try{var D=d(),Y=$.S;Y!==null&&Y(O,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(Ge,ce)}catch(Q){ce(Q)}finally{S!==null&&O.types!==null&&(S.types=O.types),$.T=S}},q.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},q.use=function(d){return $.H.use(d)},q.useActionState=function(d,S,O){return $.H.useActionState(d,S,O)},q.useCallback=function(d,S){return $.H.useCallback(d,S)},q.useContext=function(d){return $.H.useContext(d)},q.useDebugValue=function(){},q.useDeferredValue=function(d,S){return $.H.useDeferredValue(d,S)},q.useEffect=function(d,S){return $.H.useEffect(d,S)},q.useEffectEvent=function(d){return $.H.useEffectEvent(d)},q.useId=function(){return $.H.useId()},q.useImperativeHandle=function(d,S,O){return $.H.useImperativeHandle(d,S,O)},q.useInsertionEffect=function(d,S){return $.H.useInsertionEffect(d,S)},q.useLayoutEffect=function(d,S){return $.H.useLayoutEffect(d,S)},q.useMemo=function(d,S){return $.H.useMemo(d,S)},q.useOptimistic=function(d,S){return $.H.useOptimistic(d,S)},q.useReducer=function(d,S,O){return $.H.useReducer(d,S,O)},q.useRef=function(d){return $.H.useRef(d)},q.useState=function(d){return $.H.useState(d)},q.useSyncExternalStore=function(d,S,O){return $.H.useSyncExternalStore(d,S,O)},q.useTransition=function(){return $.H.useTransition()},q.version="19.2.8",q}var Rf;function ys(){return Rf||(Rf=1,fs.exports=Sh()),fs.exports}var Oe=ys();const zh=Vf(Oe);var ps={exports:{}},zi={},ms={exports:{}},hs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cf;function Ah(){return Cf||(Cf=1,(function(b){function z(y,M){var L=y.length;y.push(M);e:for(;0<L;){var ce=L-1>>>1,ue=y[ce];if(0<T(ue,M))y[ce]=M,y[L]=ue,L=ce;else break e}}function E(y){return y.length===0?null:y[0]}function f(y){if(y.length===0)return null;var M=y[0],L=y.pop();if(L!==M){y[0]=L;e:for(var ce=0,ue=y.length,d=ue>>>1;ce<d;){var S=2*(ce+1)-1,O=y[S],D=S+1,Y=y[D];if(0>T(O,L))D<ue&&0>T(Y,O)?(y[ce]=Y,y[D]=L,ce=D):(y[ce]=O,y[S]=L,ce=S);else if(D<ue&&0>T(Y,L))y[ce]=Y,y[D]=L,ce=D;else break e}}return M}function T(y,M){var L=y.sortIndex-M.sortIndex;return L!==0?L:y.id-M.id}if(b.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var _=performance;b.unstable_now=function(){return _.now()}}else{var X=Date,ge=X.now();b.unstable_now=function(){return X.now()-ge}}var k=[],A=[],F=1,U=null,fe=3,Le=!1,He=!1,we=!1,yt=!1,Fe=typeof setTimeout=="function"?setTimeout:null,Wt=typeof clearTimeout=="function"?clearTimeout:null,Ue=typeof setImmediate<"u"?setImmediate:null;function ot(y){for(var M=E(A);M!==null;){if(M.callback===null)f(A);else if(M.startTime<=y)f(A),M.sortIndex=M.expirationTime,z(k,M);else break;M=E(A)}}function At(y){if(we=!1,ot(y),!He)if(E(k)!==null)He=!0,Ge||(Ge=!0,Xe());else{var M=E(A);M!==null&&Nt(At,M.startTime-y)}}var Ge=!1,$=-1,Ve=5,Et=-1;function Xa(){return yt?!0:!(b.unstable_now()-Et<Ve)}function Tt(){if(yt=!1,Ge){var y=b.unstable_now();Et=y;var M=!0;try{e:{He=!1,we&&(we=!1,Wt($),$=-1),Le=!0;var L=fe;try{t:{for(ot(y),U=E(k);U!==null&&!(U.expirationTime>y&&Xa());){var ce=U.callback;if(typeof ce=="function"){U.callback=null,fe=U.priorityLevel;var ue=ce(U.expirationTime<=y);if(y=b.unstable_now(),typeof ue=="function"){U.callback=ue,ot(y),M=!0;break t}U===E(k)&&f(k),ot(y)}else f(k);U=E(k)}if(U!==null)M=!0;else{var d=E(A);d!==null&&Nt(At,d.startTime-y),M=!1}}break e}finally{U=null,fe=L,Le=!1}M=void 0}}finally{M?Xe():Ge=!1}}}var Xe;if(typeof Ue=="function")Xe=function(){Ue(Tt)};else if(typeof MessageChannel<"u"){var Sa=new MessageChannel,kt=Sa.port2;Sa.port1.onmessage=Tt,Xe=function(){kt.postMessage(null)}}else Xe=function(){Fe(Tt,0)};function Nt(y,M){$=Fe(function(){y(b.unstable_now())},M)}b.unstable_IdlePriority=5,b.unstable_ImmediatePriority=1,b.unstable_LowPriority=4,b.unstable_NormalPriority=3,b.unstable_Profiling=null,b.unstable_UserBlockingPriority=2,b.unstable_cancelCallback=function(y){y.callback=null},b.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ve=0<y?Math.floor(1e3/y):5},b.unstable_getCurrentPriorityLevel=function(){return fe},b.unstable_next=function(y){switch(fe){case 1:case 2:case 3:var M=3;break;default:M=fe}var L=fe;fe=M;try{return y()}finally{fe=L}},b.unstable_requestPaint=function(){yt=!0},b.unstable_runWithPriority=function(y,M){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var L=fe;fe=y;try{return M()}finally{fe=L}},b.unstable_scheduleCallback=function(y,M,L){var ce=b.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?ce+L:ce):L=ce,y){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=L+ue,y={id:F++,callback:M,priorityLevel:y,startTime:L,expirationTime:ue,sortIndex:-1},L>ce?(y.sortIndex=L,z(A,y),E(k)===null&&y===E(A)&&(we?(Wt($),$=-1):we=!0,Nt(At,L-ce))):(y.sortIndex=ue,z(k,y),He||Le||(He=!0,Ge||(Ge=!0,Xe()))),y},b.unstable_shouldYield=Xa,b.unstable_wrapCallback=function(y){var M=fe;return function(){var L=fe;fe=M;try{return y.apply(this,arguments)}finally{fe=L}}}})(hs)),hs}var Hf;function Eh(){return Hf||(Hf=1,ms.exports=Ah()),ms.exports}var gs={exports:{}},Be={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uf;function Th(){if(Uf)return Be;Uf=1;var b=ys();function z(k){var A="https://react.dev/errors/"+k;if(1<arguments.length){A+="?args[]="+encodeURIComponent(arguments[1]);for(var F=2;F<arguments.length;F++)A+="&args[]="+encodeURIComponent(arguments[F])}return"Minified React error #"+k+"; visit "+A+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(){}var f={d:{f:E,r:function(){throw Error(z(522))},D:E,C:E,L:E,m:E,X:E,S:E,M:E},p:0,findDOMNode:null},T=Symbol.for("react.portal");function _(k,A,F){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:U==null?null:""+U,children:k,containerInfo:A,implementation:F}}var X=b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ge(k,A){if(k==="font")return"";if(typeof A=="string")return A==="use-credentials"?A:""}return Be.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,Be.createPortal=function(k,A){var F=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)throw Error(z(299));return _(k,A,null,F)},Be.flushSync=function(k){var A=X.T,F=f.p;try{if(X.T=null,f.p=2,k)return k()}finally{X.T=A,f.p=F,f.d.f()}},Be.preconnect=function(k,A){typeof k=="string"&&(A?(A=A.crossOrigin,A=typeof A=="string"?A==="use-credentials"?A:"":void 0):A=null,f.d.C(k,A))},Be.prefetchDNS=function(k){typeof k=="string"&&f.d.D(k)},Be.preinit=function(k,A){if(typeof k=="string"&&A&&typeof A.as=="string"){var F=A.as,U=ge(F,A.crossOrigin),fe=typeof A.integrity=="string"?A.integrity:void 0,Le=typeof A.fetchPriority=="string"?A.fetchPriority:void 0;F==="style"?f.d.S(k,typeof A.precedence=="string"?A.precedence:void 0,{crossOrigin:U,integrity:fe,fetchPriority:Le}):F==="script"&&f.d.X(k,{crossOrigin:U,integrity:fe,fetchPriority:Le,nonce:typeof A.nonce=="string"?A.nonce:void 0})}},Be.preinitModule=function(k,A){if(typeof k=="string")if(typeof A=="object"&&A!==null){if(A.as==null||A.as==="script"){var F=ge(A.as,A.crossOrigin);f.d.M(k,{crossOrigin:F,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0})}}else A==null&&f.d.M(k)},Be.preload=function(k,A){if(typeof k=="string"&&typeof A=="object"&&A!==null&&typeof A.as=="string"){var F=A.as,U=ge(F,A.crossOrigin);f.d.L(k,F,{crossOrigin:U,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0,type:typeof A.type=="string"?A.type:void 0,fetchPriority:typeof A.fetchPriority=="string"?A.fetchPriority:void 0,referrerPolicy:typeof A.referrerPolicy=="string"?A.referrerPolicy:void 0,imageSrcSet:typeof A.imageSrcSet=="string"?A.imageSrcSet:void 0,imageSizes:typeof A.imageSizes=="string"?A.imageSizes:void 0,media:typeof A.media=="string"?A.media:void 0})}},Be.preloadModule=function(k,A){if(typeof k=="string")if(A){var F=ge(A.as,A.crossOrigin);f.d.m(k,{as:typeof A.as=="string"&&A.as!=="script"?A.as:void 0,crossOrigin:F,integrity:typeof A.integrity=="string"?A.integrity:void 0})}else f.d.m(k)},Be.requestFormReset=function(k){f.d.r(k)},Be.unstable_batchedUpdates=function(k,A){return k(A)},Be.useFormState=function(k,A,F){return X.H.useFormState(k,A,F)},Be.useFormStatus=function(){return X.H.useHostTransitionStatus()},Be.version="19.2.8",Be}var Bf;function Mh(){if(Bf)return gs.exports;Bf=1;function b(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b)}catch(z){console.error(z)}}return b(),gs.exports=Th(),gs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lf;function Oh(){if(Lf)return zi;Lf=1;var b=Eh(),z=ys(),E=Mh();function f(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function T(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function X(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ge(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function k(e){if(_(e)!==e)throw Error(f(188))}function A(e){var t=e.alternate;if(!t){if(t=_(e),t===null)throw Error(f(188));return t!==e?null:e}for(var a=e,l=t;;){var i=a.return;if(i===null)break;var n=i.alternate;if(n===null){if(l=i.return,l!==null){a=l;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===a)return k(i),e;if(n===l)return k(i),t;n=n.sibling}throw Error(f(188))}if(a.return!==l.return)a=i,l=n;else{for(var r=!1,s=i.child;s;){if(s===a){r=!0,a=i,l=n;break}if(s===l){r=!0,l=i,a=n;break}s=s.sibling}if(!r){for(s=n.child;s;){if(s===a){r=!0,a=n,l=i;break}if(s===l){r=!0,l=n,a=i;break}s=s.sibling}if(!r)throw Error(f(189))}}if(a.alternate!==l)throw Error(f(190))}if(a.tag!==3)throw Error(f(188));return a.stateNode.current===a?e:t}function F(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=F(e),t!==null)return t;e=e.sibling}return null}var U=Object.assign,fe=Symbol.for("react.element"),Le=Symbol.for("react.transitional.element"),He=Symbol.for("react.portal"),we=Symbol.for("react.fragment"),yt=Symbol.for("react.strict_mode"),Fe=Symbol.for("react.profiler"),Wt=Symbol.for("react.consumer"),Ue=Symbol.for("react.context"),ot=Symbol.for("react.forward_ref"),At=Symbol.for("react.suspense"),Ge=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),Et=Symbol.for("react.activity"),Xa=Symbol.for("react.memo_cache_sentinel"),Tt=Symbol.iterator;function Xe(e){return e===null||typeof e!="object"?null:(e=Tt&&e[Tt]||e["@@iterator"],typeof e=="function"?e:null)}var Sa=Symbol.for("react.client.reference");function kt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Sa?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case we:return"Fragment";case Fe:return"Profiler";case yt:return"StrictMode";case At:return"Suspense";case Ge:return"SuspenseList";case Et:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case He:return"Portal";case Ue:return e.displayName||"Context";case Wt:return(e._context.displayName||"Context")+".Consumer";case ot:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return t=e.displayName||null,t!==null?t:kt(e.type)||"Memo";case Ve:t=e._payload,e=e._init;try{return kt(e(t))}catch{}}return null}var Nt=Array.isArray,y=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=E.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L={pending:!1,data:null,method:null,action:null},ce=[],ue=-1;function d(e){return{current:e}}function S(e){0>ue||(e.current=ce[ue],ce[ue]=null,ue--)}function O(e,t){ue++,ce[ue]=e.current,e.current=t}var D=d(null),Y=d(null),Q=d(null),le=d(null);function qe(e,t){switch(O(Q,t),O(Y,e),O(D,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Pd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Pd(t),e=ef(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}S(D),O(D,e)}function xe(){S(D),S(Y),S(Q)}function wl(e){e.memoizedState!==null&&O(le,e);var t=D.current,a=ef(t,e.type);t!==a&&(O(Y,e),O(D,a))}function Ai(e){Y.current===e&&(S(D),S(Y)),le.current===e&&(S(le),xi._currentValue=L)}var Kn,Ms;function za(e){if(Kn===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Kn=t&&t[1]||"",Ms=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Kn+e+Ms}var Jn=!1;function In(e,t){if(!e||Jn)return"";Jn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(v){var g=v}Reflect.construct(e,[],j)}else{try{j.call()}catch(v){g=v}e.call(j.prototype)}}else{try{throw Error()}catch(v){g=v}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(v){if(v&&g&&typeof v.stack=="string")return[v.stack,g.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=l.DetermineComponentFrameRoot(),r=n[0],s=n[1];if(r&&s){var o=r.split(`
`),h=s.split(`
`);for(i=l=0;l<o.length&&!o[l].includes("DetermineComponentFrameRoot");)l++;for(;i<h.length&&!h[i].includes("DetermineComponentFrameRoot");)i++;if(l===o.length||i===h.length)for(l=o.length-1,i=h.length-1;1<=l&&0<=i&&o[l]!==h[i];)i--;for(;1<=l&&0<=i;l--,i--)if(o[l]!==h[i]){if(l!==1||i!==1)do if(l--,i--,0>i||o[l]!==h[i]){var x=`
`+o[l].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),x}while(1<=l&&0<=i);break}}}finally{Jn=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?za(a):""}function Ff(e,t){switch(e.tag){case 26:case 27:case 5:return za(e.type);case 16:return za("Lazy");case 13:return e.child!==t&&t!==null?za("Suspense Fallback"):za("Suspense");case 19:return za("SuspenseList");case 0:case 15:return In(e.type,!1);case 11:return In(e.type.render,!1);case 1:return In(e.type,!0);case 31:return za("Activity");default:return""}}function Os(e){try{var t="",a=null;do t+=Ff(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var $n=Object.prototype.hasOwnProperty,Wn=b.unstable_scheduleCallback,Fn=b.unstable_cancelCallback,Pf=b.unstable_shouldYield,ep=b.unstable_requestPaint,Pe=b.unstable_now,tp=b.unstable_getCurrentPriorityLevel,ws=b.unstable_ImmediatePriority,_s=b.unstable_UserBlockingPriority,Ei=b.unstable_NormalPriority,ap=b.unstable_LowPriority,ks=b.unstable_IdlePriority,lp=b.log,ip=b.unstable_setDisableYieldValue,_l=null,et=null;function Ft(e){if(typeof lp=="function"&&ip(e),et&&typeof et.setStrictMode=="function")try{et.setStrictMode(_l,e)}catch{}}var tt=Math.clz32?Math.clz32:rp,np=Math.log,cp=Math.LN2;function rp(e){return e>>>=0,e===0?32:31-(np(e)/cp|0)|0}var Ti=256,Mi=262144,Oi=4194304;function Aa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function wi(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var i=0,n=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var s=l&134217727;return s!==0?(l=s&~n,l!==0?i=Aa(l):(r&=s,r!==0?i=Aa(r):a||(a=s&~e,a!==0&&(i=Aa(a))))):(s=l&~n,s!==0?i=Aa(s):r!==0?i=Aa(r):a||(a=l&~e,a!==0&&(i=Aa(a)))),i===0?0:t!==0&&t!==i&&(t&n)===0&&(n=i&-i,a=t&-t,n>=a||n===32&&(a&4194048)!==0)?t:i}function kl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function sp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ds(){var e=Oi;return Oi<<=1,(Oi&62914560)===0&&(Oi=4194304),e}function Pn(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Dl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function op(e,t,a,l,i,n){var r=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,o=e.expirationTimes,h=e.hiddenUpdates;for(a=r&~a;0<a;){var x=31-tt(a),j=1<<x;s[x]=0,o[x]=-1;var g=h[x];if(g!==null)for(h[x]=null,x=0;x<g.length;x++){var v=g[x];v!==null&&(v.lane&=-536870913)}a&=~j}l!==0&&Rs(e,l,0),n!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=n&~(r&~t))}function Rs(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-tt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Cs(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-tt(a),i=1<<l;i&t|e[l]&t&&(e[l]|=t),a&=~i}}function Hs(e,t){var a=t&-t;return a=(a&42)!==0?1:ec(a),(a&(e.suspendedLanes|t))!==0?0:a}function ec(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function tc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Us(){var e=M.p;return e!==0?e:(e=window.event,e===void 0?32:zf(e.type))}function Bs(e,t){var a=M.p;try{return M.p=e,t()}finally{M.p=a}}var Pt=Math.random().toString(36).slice(2),_e="__reactFiber$"+Pt,Qe="__reactProps$"+Pt,Qa="__reactContainer$"+Pt,ac="__reactEvents$"+Pt,up="__reactListeners$"+Pt,dp="__reactHandles$"+Pt,Ls="__reactResources$"+Pt,Rl="__reactMarker$"+Pt;function lc(e){delete e[_e],delete e[Qe],delete e[ac],delete e[up],delete e[dp]}function Za(e){var t=e[_e];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Qa]||a[_e]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=sf(e);e!==null;){if(a=e[_e])return a;e=sf(e)}return t}e=a,a=e.parentNode}return null}function Ka(e){if(e=e[_e]||e[Qa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Cl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(f(33))}function Ja(e){var t=e[Ls];return t||(t=e[Ls]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Te(e){e[Rl]=!0}var qs=new Set,Ys={};function Ea(e,t){Ia(e,t),Ia(e+"Capture",t)}function Ia(e,t){for(Ys[e]=t,e=0;e<t.length;e++)qs.add(t[e])}var fp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gs={},Vs={};function pp(e){return $n.call(Vs,e)?!0:$n.call(Gs,e)?!1:fp.test(e)?Vs[e]=!0:(Gs[e]=!0,!1)}function _i(e,t,a){if(pp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ki(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Dt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mp(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,n=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(r){a=""+r,n.call(this,r)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ic(e){if(!e._valueTracker){var t=Xs(e)?"checked":"value";e._valueTracker=mp(e,t,""+e[t])}}function Qs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Xs(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var hp=/[\n"\\]/g;function dt(e){return e.replace(hp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function nc(e,t,a,l,i,n,r,s){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ut(t)):e.value!==""+ut(t)&&(e.value=""+ut(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?cc(e,r,ut(t)):a!=null?cc(e,r,ut(a)):l!=null&&e.removeAttribute("value"),i==null&&n!=null&&(e.defaultChecked=!!n),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+ut(s):e.removeAttribute("name")}function Zs(e,t,a,l,i,n,r,s){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(e.type=n),t!=null||a!=null){if(!(n!=="submit"&&n!=="reset"||t!=null)){ic(e);return}a=a!=null?""+ut(a):"",t=t!=null?""+ut(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=s?e.checked:!!l,e.defaultChecked=!!l,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),ic(e)}function cc(e,t,a){t==="number"&&Di(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function $a(e,t,a,l){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&l&&(e[a].defaultSelected=!0)}else{for(a=""+ut(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ks(e,t,a){if(t!=null&&(t=""+ut(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ut(a):""}function Js(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(f(92));if(Nt(l)){if(1<l.length)throw Error(f(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=ut(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),ic(e)}function Wa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var gp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Is(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||gp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function $s(e,t,a){if(t!=null&&typeof t!="object")throw Error(f(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var i in t)l=t[i],t.hasOwnProperty(i)&&a[i]!==l&&Is(e,i,l)}else for(var n in t)t.hasOwnProperty(n)&&Is(e,n,t[n])}function rc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ri(e){return bp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Rt(){}var sc=null;function oc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fa=null,Pa=null;function Ws(e){var t=Ka(e);if(t&&(e=t.stateNode)){var a=e[Qe]||null;e:switch(e=t.stateNode,t.type){case"input":if(nc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+dt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var i=l[Qe]||null;if(!i)throw Error(f(90));nc(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Qs(l)}break e;case"textarea":Ks(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&$a(e,!!a.multiple,t,!1)}}}var uc=!1;function Fs(e,t,a){if(uc)return e(t,a);uc=!0;try{var l=e(t);return l}finally{if(uc=!1,(Fa!==null||Pa!==null)&&(jn(),Fa&&(t=Fa,e=Pa,Pa=Fa=null,Ws(t),e)))for(t=0;t<e.length;t++)Ws(e[t])}}function Hl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Qe]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(f(231,t,typeof a));return a}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dc=!1;if(Ct)try{var Ul={};Object.defineProperty(Ul,"passive",{get:function(){dc=!0}}),window.addEventListener("test",Ul,Ul),window.removeEventListener("test",Ul,Ul)}catch{dc=!1}var ea=null,fc=null,Ci=null;function Ps(){if(Ci)return Ci;var e,t=fc,a=t.length,l,i="value"in ea?ea.value:ea.textContent,n=i.length;for(e=0;e<a&&t[e]===i[e];e++);var r=a-e;for(l=1;l<=r&&t[a-l]===i[n-l];l++);return Ci=i.slice(e,1<l?1-l:void 0)}function Hi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ui(){return!0}function eo(){return!1}function Ze(e){function t(a,l,i,n,r){this._reactName=a,this._targetInst=i,this.type=l,this.nativeEvent=n,this.target=r,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(n):n[s]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Ui:eo,this.isPropagationStopped=eo,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ui)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ui)},persist:function(){},isPersistent:Ui}),t}var Ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bi=Ze(Ta),Bl=U({},Ta,{view:0,detail:0}),xp=Ze(Bl),pc,mc,Ll,Li=U({},Bl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ll&&(Ll&&e.type==="mousemove"?(pc=e.screenX-Ll.screenX,mc=e.screenY-Ll.screenY):mc=pc=0,Ll=e),pc)},movementY:function(e){return"movementY"in e?e.movementY:mc}}),to=Ze(Li),yp=U({},Li,{dataTransfer:0}),Np=Ze(yp),jp=U({},Bl,{relatedTarget:0}),hc=Ze(jp),Sp=U({},Ta,{animationName:0,elapsedTime:0,pseudoElement:0}),zp=Ze(Sp),Ap=U({},Ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ep=Ze(Ap),Tp=U({},Ta,{data:0}),ao=Ze(Tp),Mp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Op={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _p(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wp[e])?!!t[e]:!1}function gc(){return _p}var kp=U({},Bl,{key:function(e){if(e.key){var t=Mp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Op[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gc,charCode:function(e){return e.type==="keypress"?Hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dp=Ze(kp),Rp=U({},Li,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lo=Ze(Rp),Cp=U({},Bl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gc}),Hp=Ze(Cp),Up=U({},Ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bp=Ze(Up),Lp=U({},Li,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qp=Ze(Lp),Yp=U({},Ta,{newState:0,oldState:0}),Gp=Ze(Yp),Vp=[9,13,27,32],vc=Ct&&"CompositionEvent"in window,ql=null;Ct&&"documentMode"in document&&(ql=document.documentMode);var Xp=Ct&&"TextEvent"in window&&!ql,io=Ct&&(!vc||ql&&8<ql&&11>=ql),no=" ",co=!1;function ro(e,t){switch(e){case"keyup":return Vp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function so(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var el=!1;function Qp(e,t){switch(e){case"compositionend":return so(t);case"keypress":return t.which!==32?null:(co=!0,no);case"textInput":return e=t.data,e===no&&co?null:e;default:return null}}function Zp(e,t){if(el)return e==="compositionend"||!vc&&ro(e,t)?(e=Ps(),Ci=fc=ea=null,el=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return io&&t.locale!=="ko"?null:t.data;default:return null}}var Kp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function oo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kp[e.type]:t==="textarea"}function uo(e,t,a,l){Fa?Pa?Pa.push(l):Pa=[l]:Fa=l,t=On(t,"onChange"),0<t.length&&(a=new Bi("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Yl=null,Gl=null;function Jp(e){Kd(e,0)}function qi(e){var t=Cl(e);if(Qs(t))return e}function fo(e,t){if(e==="change")return t}var po=!1;if(Ct){var bc;if(Ct){var xc="oninput"in document;if(!xc){var mo=document.createElement("div");mo.setAttribute("oninput","return;"),xc=typeof mo.oninput=="function"}bc=xc}else bc=!1;po=bc&&(!document.documentMode||9<document.documentMode)}function ho(){Yl&&(Yl.detachEvent("onpropertychange",go),Gl=Yl=null)}function go(e){if(e.propertyName==="value"&&qi(Gl)){var t=[];uo(t,Gl,e,oc(e)),Fs(Jp,t)}}function Ip(e,t,a){e==="focusin"?(ho(),Yl=t,Gl=a,Yl.attachEvent("onpropertychange",go)):e==="focusout"&&ho()}function $p(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qi(Gl)}function Wp(e,t){if(e==="click")return qi(t)}function Fp(e,t){if(e==="input"||e==="change")return qi(t)}function Pp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var at=typeof Object.is=="function"?Object.is:Pp;function Vl(e,t){if(at(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var i=a[l];if(!$n.call(t,i)||!at(e[i],t[i]))return!1}return!0}function vo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bo(e,t){var a=vo(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vo(a)}}function xo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Di(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Di(e.document)}return t}function yc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var em=Ct&&"documentMode"in document&&11>=document.documentMode,tl=null,Nc=null,Xl=null,jc=!1;function No(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;jc||tl==null||tl!==Di(l)||(l=tl,"selectionStart"in l&&yc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Xl&&Vl(Xl,l)||(Xl=l,l=On(Nc,"onSelect"),0<l.length&&(t=new Bi("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=tl)))}function Ma(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var al={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionrun:Ma("Transition","TransitionRun"),transitionstart:Ma("Transition","TransitionStart"),transitioncancel:Ma("Transition","TransitionCancel"),transitionend:Ma("Transition","TransitionEnd")},Sc={},jo={};Ct&&(jo=document.createElement("div").style,"AnimationEvent"in window||(delete al.animationend.animation,delete al.animationiteration.animation,delete al.animationstart.animation),"TransitionEvent"in window||delete al.transitionend.transition);function Oa(e){if(Sc[e])return Sc[e];if(!al[e])return e;var t=al[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in jo)return Sc[e]=t[a];return e}var So=Oa("animationend"),zo=Oa("animationiteration"),Ao=Oa("animationstart"),tm=Oa("transitionrun"),am=Oa("transitionstart"),lm=Oa("transitioncancel"),Eo=Oa("transitionend"),To=new Map,zc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zc.push("scrollEnd");function jt(e,t){To.set(e,t),Ea(t,[e])}var Yi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ft=[],ll=0,Ac=0;function Gi(){for(var e=ll,t=Ac=ll=0;t<e;){var a=ft[t];ft[t++]=null;var l=ft[t];ft[t++]=null;var i=ft[t];ft[t++]=null;var n=ft[t];if(ft[t++]=null,l!==null&&i!==null){var r=l.pending;r===null?i.next=i:(i.next=r.next,r.next=i),l.pending=i}n!==0&&Mo(a,i,n)}}function Vi(e,t,a,l){ft[ll++]=e,ft[ll++]=t,ft[ll++]=a,ft[ll++]=l,Ac|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Ec(e,t,a,l){return Vi(e,t,a,l),Xi(e)}function wa(e,t){return Vi(e,null,null,t),Xi(e)}function Mo(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var i=!1,n=e.return;n!==null;)n.childLanes|=a,l=n.alternate,l!==null&&(l.childLanes|=a),n.tag===22&&(e=n.stateNode,e===null||e._visibility&1||(i=!0)),e=n,n=n.return;return e.tag===3?(n=e.stateNode,i&&t!==null&&(i=31-tt(a),e=n.hiddenUpdates,l=e[i],l===null?e[i]=[t]:l.push(t),t.lane=a|536870912),n):null}function Xi(e){if(50<fi)throw fi=0,Cr=null,Error(f(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var il={};function im(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,a,l){return new im(e,t,a,l)}function Tc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ht(e,t){var a=e.alternate;return a===null?(a=lt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Oo(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Qi(e,t,a,l,i,n){var r=0;if(l=e,typeof e=="function")Tc(e)&&(r=1);else if(typeof e=="string")r=oh(e,a,D.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Et:return e=lt(31,a,t,i),e.elementType=Et,e.lanes=n,e;case we:return _a(a.children,i,n,t);case yt:r=8,i|=24;break;case Fe:return e=lt(12,a,t,i|2),e.elementType=Fe,e.lanes=n,e;case At:return e=lt(13,a,t,i),e.elementType=At,e.lanes=n,e;case Ge:return e=lt(19,a,t,i),e.elementType=Ge,e.lanes=n,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ue:r=10;break e;case Wt:r=9;break e;case ot:r=11;break e;case $:r=14;break e;case Ve:r=16,l=null;break e}r=29,a=Error(f(130,e===null?"null":typeof e,"")),l=null}return t=lt(r,a,t,i),t.elementType=e,t.type=l,t.lanes=n,t}function _a(e,t,a,l){return e=lt(7,e,l,t),e.lanes=a,e}function Mc(e,t,a){return e=lt(6,e,null,t),e.lanes=a,e}function wo(e){var t=lt(18,null,null,0);return t.stateNode=e,t}function Oc(e,t,a){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var _o=new WeakMap;function pt(e,t){if(typeof e=="object"&&e!==null){var a=_o.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Os(t)},_o.set(e,t),t)}return{value:e,source:t,stack:Os(t)}}var nl=[],cl=0,Zi=null,Ql=0,mt=[],ht=0,ta=null,Mt=1,Ot="";function Ut(e,t){nl[cl++]=Ql,nl[cl++]=Zi,Zi=e,Ql=t}function ko(e,t,a){mt[ht++]=Mt,mt[ht++]=Ot,mt[ht++]=ta,ta=e;var l=Mt;e=Ot;var i=32-tt(l)-1;l&=~(1<<i),a+=1;var n=32-tt(t)+i;if(30<n){var r=i-i%5;n=(l&(1<<r)-1).toString(32),l>>=r,i-=r,Mt=1<<32-tt(t)+i|a<<i|l,Ot=n+e}else Mt=1<<n|a<<i|l,Ot=e}function wc(e){e.return!==null&&(Ut(e,1),ko(e,1,0))}function _c(e){for(;e===Zi;)Zi=nl[--cl],nl[cl]=null,Ql=nl[--cl],nl[cl]=null;for(;e===ta;)ta=mt[--ht],mt[ht]=null,Ot=mt[--ht],mt[ht]=null,Mt=mt[--ht],mt[ht]=null}function Do(e,t){mt[ht++]=Mt,mt[ht++]=Ot,mt[ht++]=ta,Mt=t.id,Ot=t.overflow,ta=e}var ke=null,pe=null,W=!1,aa=null,gt=!1,kc=Error(f(519));function la(e){var t=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zl(pt(t,e)),kc}function Ro(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[_e]=e,t[Qe]=l,a){case"dialog":K("cancel",t),K("close",t);break;case"iframe":case"object":case"embed":K("load",t);break;case"video":case"audio":for(a=0;a<mi.length;a++)K(mi[a],t);break;case"source":K("error",t);break;case"img":case"image":case"link":K("error",t),K("load",t);break;case"details":K("toggle",t);break;case"input":K("invalid",t),Zs(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":K("invalid",t);break;case"textarea":K("invalid",t),Js(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Wd(t.textContent,a)?(l.popover!=null&&(K("beforetoggle",t),K("toggle",t)),l.onScroll!=null&&K("scroll",t),l.onScrollEnd!=null&&K("scrollend",t),l.onClick!=null&&(t.onclick=Rt),t=!0):t=!1,t||la(e,!0)}function Co(e){for(ke=e.return;ke;)switch(ke.tag){case 5:case 31:case 13:gt=!1;return;case 27:case 3:gt=!0;return;default:ke=ke.return}}function rl(e){if(e!==ke)return!1;if(!W)return Co(e),W=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||$r(e.type,e.memoizedProps)),a=!a),a&&pe&&la(e),Co(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));pe=rf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));pe=rf(e)}else t===27?(t=pe,va(e.type)?(e=ts,ts=null,pe=e):pe=t):pe=ke?bt(e.stateNode.nextSibling):null;return!0}function ka(){pe=ke=null,W=!1}function Dc(){var e=aa;return e!==null&&($e===null?$e=e:$e.push.apply($e,e),aa=null),e}function Zl(e){aa===null?aa=[e]:aa.push(e)}var Rc=d(null),Da=null,Bt=null;function ia(e,t,a){O(Rc,t._currentValue),t._currentValue=a}function Lt(e){e._currentValue=Rc.current,S(Rc)}function Cc(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Hc(e,t,a,l){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var n=i.dependencies;if(n!==null){var r=i.child;n=n.firstContext;e:for(;n!==null;){var s=n;n=i;for(var o=0;o<t.length;o++)if(s.context===t[o]){n.lanes|=a,s=n.alternate,s!==null&&(s.lanes|=a),Cc(n.return,a,e),l||(r=null);break e}n=s.next}}else if(i.tag===18){if(r=i.return,r===null)throw Error(f(341));r.lanes|=a,n=r.alternate,n!==null&&(n.lanes|=a),Cc(r,a,e),r=null}else r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===e){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}}function sl(e,t,a,l){e=null;for(var i=t,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var r=i.alternate;if(r===null)throw Error(f(387));if(r=r.memoizedProps,r!==null){var s=i.type;at(i.pendingProps.value,r.value)||(e!==null?e.push(s):e=[s])}}else if(i===le.current){if(r=i.alternate,r===null)throw Error(f(387));r.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(xi):e=[xi])}i=i.return}e!==null&&Hc(t,e,a,l),t.flags|=262144}function Ki(e){for(e=e.firstContext;e!==null;){if(!at(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ra(e){Da=e,Bt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function De(e){return Ho(Da,e)}function Ji(e,t){return Da===null&&Ra(e),Ho(e,t)}function Ho(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Bt===null){if(e===null)throw Error(f(308));Bt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Bt=Bt.next=t;return a}var nm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},cm=b.unstable_scheduleCallback,rm=b.unstable_NormalPriority,je={$$typeof:Ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uc(){return{controller:new nm,data:new Map,refCount:0}}function Kl(e){e.refCount--,e.refCount===0&&cm(rm,function(){e.controller.abort()})}var Jl=null,Bc=0,ol=0,ul=null;function sm(e,t){if(Jl===null){var a=Jl=[];Bc=0,ol=Yr(),ul={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Bc++,t.then(Uo,Uo),t}function Uo(){if(--Bc===0&&Jl!==null){ul!==null&&(ul.status="fulfilled");var e=Jl;Jl=null,ol=0,ul=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function om(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(l.status="rejected",l.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),l}var Bo=y.S;y.S=function(e,t){Nd=Pe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&sm(e,t),Bo!==null&&Bo(e,t)};var Ca=d(null);function Lc(){var e=Ca.current;return e!==null?e:de.pooledCache}function Ii(e,t){t===null?O(Ca,Ca.current):O(Ca,t.pool)}function Lo(){var e=Lc();return e===null?null:{parent:je._currentValue,pool:e}}var dl=Error(f(460)),qc=Error(f(474)),$i=Error(f(542)),Wi={then:function(){}};function qo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Yo(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Rt,Rt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vo(e),e;default:if(typeof t.status=="string")t.then(Rt,Rt);else{if(e=de,e!==null&&100<e.shellSuspendCounter)throw Error(f(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=l}},function(l){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vo(e),e}throw Ua=t,dl}}function Ha(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ua=a,dl):a}}var Ua=null;function Go(){if(Ua===null)throw Error(f(459));var e=Ua;return Ua=null,e}function Vo(e){if(e===dl||e===$i)throw Error(f(483))}var fl=null,Il=0;function Fi(e){var t=Il;return Il+=1,fl===null&&(fl=[]),Yo(fl,e,t)}function $l(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Pi(e,t){throw t.$$typeof===fe?Error(f(525)):(e=Object.prototype.toString.call(t),Error(f(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Xo(e){function t(p,u){if(e){var m=p.deletions;m===null?(p.deletions=[u],p.flags|=16):m.push(u)}}function a(p,u){if(!e)return null;for(;u!==null;)t(p,u),u=u.sibling;return null}function l(p){for(var u=new Map;p!==null;)p.key!==null?u.set(p.key,p):u.set(p.index,p),p=p.sibling;return u}function i(p,u){return p=Ht(p,u),p.index=0,p.sibling=null,p}function n(p,u,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<u?(p.flags|=67108866,u):m):(p.flags|=67108866,u)):(p.flags|=1048576,u)}function r(p){return e&&p.alternate===null&&(p.flags|=67108866),p}function s(p,u,m,N){return u===null||u.tag!==6?(u=Mc(m,p.mode,N),u.return=p,u):(u=i(u,m),u.return=p,u)}function o(p,u,m,N){var C=m.type;return C===we?x(p,u,m.props.children,N,m.key):u!==null&&(u.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ve&&Ha(C)===u.type)?(u=i(u,m.props),$l(u,m),u.return=p,u):(u=Qi(m.type,m.key,m.props,null,p.mode,N),$l(u,m),u.return=p,u)}function h(p,u,m,N){return u===null||u.tag!==4||u.stateNode.containerInfo!==m.containerInfo||u.stateNode.implementation!==m.implementation?(u=Oc(m,p.mode,N),u.return=p,u):(u=i(u,m.children||[]),u.return=p,u)}function x(p,u,m,N,C){return u===null||u.tag!==7?(u=_a(m,p.mode,N,C),u.return=p,u):(u=i(u,m),u.return=p,u)}function j(p,u,m){if(typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint")return u=Mc(""+u,p.mode,m),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Le:return m=Qi(u.type,u.key,u.props,null,p.mode,m),$l(m,u),m.return=p,m;case He:return u=Oc(u,p.mode,m),u.return=p,u;case Ve:return u=Ha(u),j(p,u,m)}if(Nt(u)||Xe(u))return u=_a(u,p.mode,m,null),u.return=p,u;if(typeof u.then=="function")return j(p,Fi(u),m);if(u.$$typeof===Ue)return j(p,Ji(p,u),m);Pi(p,u)}return null}function g(p,u,m,N){var C=u!==null?u.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return C!==null?null:s(p,u,""+m,N);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Le:return m.key===C?o(p,u,m,N):null;case He:return m.key===C?h(p,u,m,N):null;case Ve:return m=Ha(m),g(p,u,m,N)}if(Nt(m)||Xe(m))return C!==null?null:x(p,u,m,N,null);if(typeof m.then=="function")return g(p,u,Fi(m),N);if(m.$$typeof===Ue)return g(p,u,Ji(p,m),N);Pi(p,m)}return null}function v(p,u,m,N,C){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return p=p.get(m)||null,s(u,p,""+N,C);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Le:return p=p.get(N.key===null?m:N.key)||null,o(u,p,N,C);case He:return p=p.get(N.key===null?m:N.key)||null,h(u,p,N,C);case Ve:return N=Ha(N),v(p,u,m,N,C)}if(Nt(N)||Xe(N))return p=p.get(m)||null,x(u,p,N,C,null);if(typeof N.then=="function")return v(p,u,m,Fi(N),C);if(N.$$typeof===Ue)return v(p,u,m,Ji(u,N),C);Pi(u,N)}return null}function w(p,u,m,N){for(var C=null,P=null,R=u,V=u=0,I=null;R!==null&&V<m.length;V++){R.index>V?(I=R,R=null):I=R.sibling;var ee=g(p,R,m[V],N);if(ee===null){R===null&&(R=I);break}e&&R&&ee.alternate===null&&t(p,R),u=n(ee,u,V),P===null?C=ee:P.sibling=ee,P=ee,R=I}if(V===m.length)return a(p,R),W&&Ut(p,V),C;if(R===null){for(;V<m.length;V++)R=j(p,m[V],N),R!==null&&(u=n(R,u,V),P===null?C=R:P.sibling=R,P=R);return W&&Ut(p,V),C}for(R=l(R);V<m.length;V++)I=v(R,p,V,m[V],N),I!==null&&(e&&I.alternate!==null&&R.delete(I.key===null?V:I.key),u=n(I,u,V),P===null?C=I:P.sibling=I,P=I);return e&&R.forEach(function(ja){return t(p,ja)}),W&&Ut(p,V),C}function B(p,u,m,N){if(m==null)throw Error(f(151));for(var C=null,P=null,R=u,V=u=0,I=null,ee=m.next();R!==null&&!ee.done;V++,ee=m.next()){R.index>V?(I=R,R=null):I=R.sibling;var ja=g(p,R,ee.value,N);if(ja===null){R===null&&(R=I);break}e&&R&&ja.alternate===null&&t(p,R),u=n(ja,u,V),P===null?C=ja:P.sibling=ja,P=ja,R=I}if(ee.done)return a(p,R),W&&Ut(p,V),C;if(R===null){for(;!ee.done;V++,ee=m.next())ee=j(p,ee.value,N),ee!==null&&(u=n(ee,u,V),P===null?C=ee:P.sibling=ee,P=ee);return W&&Ut(p,V),C}for(R=l(R);!ee.done;V++,ee=m.next())ee=v(R,p,V,ee.value,N),ee!==null&&(e&&ee.alternate!==null&&R.delete(ee.key===null?V:ee.key),u=n(ee,u,V),P===null?C=ee:P.sibling=ee,P=ee);return e&&R.forEach(function(yh){return t(p,yh)}),W&&Ut(p,V),C}function oe(p,u,m,N){if(typeof m=="object"&&m!==null&&m.type===we&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Le:e:{for(var C=m.key;u!==null;){if(u.key===C){if(C=m.type,C===we){if(u.tag===7){a(p,u.sibling),N=i(u,m.props.children),N.return=p,p=N;break e}}else if(u.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ve&&Ha(C)===u.type){a(p,u.sibling),N=i(u,m.props),$l(N,m),N.return=p,p=N;break e}a(p,u);break}else t(p,u);u=u.sibling}m.type===we?(N=_a(m.props.children,p.mode,N,m.key),N.return=p,p=N):(N=Qi(m.type,m.key,m.props,null,p.mode,N),$l(N,m),N.return=p,p=N)}return r(p);case He:e:{for(C=m.key;u!==null;){if(u.key===C)if(u.tag===4&&u.stateNode.containerInfo===m.containerInfo&&u.stateNode.implementation===m.implementation){a(p,u.sibling),N=i(u,m.children||[]),N.return=p,p=N;break e}else{a(p,u);break}else t(p,u);u=u.sibling}N=Oc(m,p.mode,N),N.return=p,p=N}return r(p);case Ve:return m=Ha(m),oe(p,u,m,N)}if(Nt(m))return w(p,u,m,N);if(Xe(m)){if(C=Xe(m),typeof C!="function")throw Error(f(150));return m=C.call(m),B(p,u,m,N)}if(typeof m.then=="function")return oe(p,u,Fi(m),N);if(m.$$typeof===Ue)return oe(p,u,Ji(p,m),N);Pi(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,u!==null&&u.tag===6?(a(p,u.sibling),N=i(u,m),N.return=p,p=N):(a(p,u),N=Mc(m,p.mode,N),N.return=p,p=N),r(p)):a(p,u)}return function(p,u,m,N){try{Il=0;var C=oe(p,u,m,N);return fl=null,C}catch(R){if(R===dl||R===$i)throw R;var P=lt(29,R,null,p.mode);return P.lanes=N,P.return=p,P}finally{}}}var Ba=Xo(!0),Qo=Xo(!1),na=!1;function Yc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ra(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(te&2)!==0){var i=l.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t,t=Xi(e),Mo(e,null,a),t}return Vi(e,l,t,a),Xi(e)}function Wl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Cs(e,a)}}function Vc(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var i=null,n=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};n===null?i=n=r:n=n.next=r,a=a.next}while(a!==null);n===null?i=n=t:n=n.next=t}else i=n=t;a={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Xc=!1;function Fl(){if(Xc){var e=ul;if(e!==null)throw e}}function Pl(e,t,a,l){Xc=!1;var i=e.updateQueue;na=!1;var n=i.firstBaseUpdate,r=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var o=s,h=o.next;o.next=null,r===null?n=h:r.next=h,r=o;var x=e.alternate;x!==null&&(x=x.updateQueue,s=x.lastBaseUpdate,s!==r&&(s===null?x.firstBaseUpdate=h:s.next=h,x.lastBaseUpdate=o))}if(n!==null){var j=i.baseState;r=0,x=h=o=null,s=n;do{var g=s.lane&-536870913,v=g!==s.lane;if(v?(J&g)===g:(l&g)===g){g!==0&&g===ol&&(Xc=!0),x!==null&&(x=x.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var w=e,B=s;g=t;var oe=a;switch(B.tag){case 1:if(w=B.payload,typeof w=="function"){j=w.call(oe,j,g);break e}j=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=B.payload,g=typeof w=="function"?w.call(oe,j,g):w,g==null)break e;j=U({},j,g);break e;case 2:na=!0}}g=s.callback,g!==null&&(e.flags|=64,v&&(e.flags|=8192),v=i.callbacks,v===null?i.callbacks=[g]:v.push(g))}else v={lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},x===null?(h=x=v,o=j):x=x.next=v,r|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;v=s,s=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);x===null&&(o=j),i.baseState=o,i.firstBaseUpdate=h,i.lastBaseUpdate=x,n===null&&(i.shared.lanes=0),fa|=r,e.lanes=r,e.memoizedState=j}}function Zo(e,t){if(typeof e!="function")throw Error(f(191,e));e.call(t)}function Ko(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Zo(a[e],t)}var pl=d(null),en=d(0);function Jo(e,t){e=Jt,O(en,e),O(pl,t),Jt=e|t.baseLanes}function Qc(){O(en,Jt),O(pl,pl.current)}function Zc(){Jt=en.current,S(pl),S(en)}var it=d(null),vt=null;function sa(e){var t=e.alternate;O(ye,ye.current&1),O(it,e),vt===null&&(t===null||pl.current!==null||t.memoizedState!==null)&&(vt=e)}function Kc(e){O(ye,ye.current),O(it,e),vt===null&&(vt=e)}function Io(e){e.tag===22?(O(ye,ye.current),O(it,e),vt===null&&(vt=e)):oa()}function oa(){O(ye,ye.current),O(it,it.current)}function nt(e){S(it),vt===e&&(vt=null),S(ye)}var ye=d(0);function tn(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Pr(a)||es(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qt=0,G=null,re=null,Se=null,an=!1,ml=!1,La=!1,ln=0,ei=0,hl=null,um=0;function ve(){throw Error(f(321))}function Jc(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!at(e[a],t[a]))return!1;return!0}function Ic(e,t,a,l,i,n){return qt=n,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,y.H=e===null||e.memoizedState===null?ku:ur,La=!1,n=a(l,i),La=!1,ml&&(n=Wo(t,a,l,i)),$o(e),n}function $o(e){y.H=li;var t=re!==null&&re.next!==null;if(qt=0,Se=re=G=null,an=!1,ei=0,hl=null,t)throw Error(f(300));e===null||ze||(e=e.dependencies,e!==null&&Ki(e)&&(ze=!0))}function Wo(e,t,a,l){G=e;var i=0;do{if(ml&&(hl=null),ei=0,ml=!1,25<=i)throw Error(f(301));if(i+=1,Se=re=null,e.updateQueue!=null){var n=e.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}y.H=Du,n=t(a,l)}while(ml);return n}function dm(){var e=y.H,t=e.useState()[0];return t=typeof t.then=="function"?ti(t):t,e=e.useState()[0],(re!==null?re.memoizedState:null)!==e&&(G.flags|=1024),t}function $c(){var e=ln!==0;return ln=0,e}function Wc(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Fc(e){if(an){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}an=!1}qt=0,Se=re=G=null,ml=!1,ei=ln=0,hl=null}function Ye(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?G.memoizedState=Se=e:Se=Se.next=e,Se}function Ne(){if(re===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=Se===null?G.memoizedState:Se.next;if(t!==null)Se=t,re=e;else{if(e===null)throw G.alternate===null?Error(f(467)):Error(f(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},Se===null?G.memoizedState=Se=e:Se=Se.next=e}return Se}function nn(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ti(e){var t=ei;return ei+=1,hl===null&&(hl=[]),e=Yo(hl,e,t),t=G,(Se===null?t.memoizedState:Se.next)===null&&(t=t.alternate,y.H=t===null||t.memoizedState===null?ku:ur),e}function cn(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ti(e);if(e.$$typeof===Ue)return De(e)}throw Error(f(438,String(e)))}function Pc(e){var t=null,a=G.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=G.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=nn(),G.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Xa;return t.index++,a}function Yt(e,t){return typeof t=="function"?t(e):t}function rn(e){var t=Ne();return er(t,re,e)}function er(e,t,a){var l=e.queue;if(l===null)throw Error(f(311));l.lastRenderedReducer=a;var i=e.baseQueue,n=l.pending;if(n!==null){if(i!==null){var r=i.next;i.next=n.next,n.next=r}t.baseQueue=i=n,l.pending=null}if(n=e.baseState,i===null)e.memoizedState=n;else{t=i.next;var s=r=null,o=null,h=t,x=!1;do{var j=h.lane&-536870913;if(j!==h.lane?(J&j)===j:(qt&j)===j){var g=h.revertLane;if(g===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),j===ol&&(x=!0);else if((qt&g)===g){h=h.next,g===ol&&(x=!0);continue}else j={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},o===null?(s=o=j,r=n):o=o.next=j,G.lanes|=g,fa|=g;j=h.action,La&&a(n,j),n=h.hasEagerState?h.eagerState:a(n,j)}else g={lane:j,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},o===null?(s=o=g,r=n):o=o.next=g,G.lanes|=j,fa|=j;h=h.next}while(h!==null&&h!==t);if(o===null?r=n:o.next=s,!at(n,e.memoizedState)&&(ze=!0,x&&(a=ul,a!==null)))throw a;e.memoizedState=n,e.baseState=r,e.baseQueue=o,l.lastRenderedState=n}return i===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function tr(e){var t=Ne(),a=t.queue;if(a===null)throw Error(f(311));a.lastRenderedReducer=e;var l=a.dispatch,i=a.pending,n=t.memoizedState;if(i!==null){a.pending=null;var r=i=i.next;do n=e(n,r.action),r=r.next;while(r!==i);at(n,t.memoizedState)||(ze=!0),t.memoizedState=n,t.baseQueue===null&&(t.baseState=n),a.lastRenderedState=n}return[n,l]}function Fo(e,t,a){var l=G,i=Ne(),n=W;if(n){if(a===void 0)throw Error(f(407));a=a()}else a=t();var r=!at((re||i).memoizedState,a);if(r&&(i.memoizedState=a,ze=!0),i=i.queue,ir(tu.bind(null,l,i,e),[e]),i.getSnapshot!==t||r||Se!==null&&Se.memoizedState.tag&1){if(l.flags|=2048,gl(9,{destroy:void 0},eu.bind(null,l,i,a,t),null),de===null)throw Error(f(349));n||(qt&127)!==0||Po(l,t,a)}return a}function Po(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=G.updateQueue,t===null?(t=nn(),G.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function eu(e,t,a,l){t.value=a,t.getSnapshot=l,au(t)&&lu(e)}function tu(e,t,a){return a(function(){au(t)&&lu(e)})}function au(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!at(e,a)}catch{return!0}}function lu(e){var t=wa(e,2);t!==null&&We(t,e,2)}function ar(e){var t=Ye();if(typeof e=="function"){var a=e;if(e=a(),La){Ft(!0);try{a()}finally{Ft(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:e},t}function iu(e,t,a,l){return e.baseState=a,er(e,re,typeof l=="function"?l:Yt)}function fm(e,t,a,l,i){if(un(e))throw Error(f(485));if(e=t.action,e!==null){var n={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){n.listeners.push(r)}};y.T!==null?a(!0):n.isTransition=!1,l(n),a=t.pending,a===null?(n.next=t.pending=n,nu(t,n)):(n.next=a.next,t.pending=a.next=n)}}function nu(e,t){var a=t.action,l=t.payload,i=e.state;if(t.isTransition){var n=y.T,r={};y.T=r;try{var s=a(i,l),o=y.S;o!==null&&o(r,s),cu(e,t,s)}catch(h){lr(e,t,h)}finally{n!==null&&r.types!==null&&(n.types=r.types),y.T=n}}else try{n=a(i,l),cu(e,t,n)}catch(h){lr(e,t,h)}}function cu(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){ru(e,t,l)},function(l){return lr(e,t,l)}):ru(e,t,a)}function ru(e,t,a){t.status="fulfilled",t.value=a,su(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,nu(e,a)))}function lr(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,su(t),t=t.next;while(t!==l)}e.action=null}function su(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ou(e,t){return t}function uu(e,t){if(W){var a=de.formState;if(a!==null){e:{var l=G;if(W){if(pe){t:{for(var i=pe,n=gt;i.nodeType!==8;){if(!n){i=null;break t}if(i=bt(i.nextSibling),i===null){i=null;break t}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){pe=bt(i.nextSibling),l=i.data==="F!";break e}}la(l)}l=!1}l&&(t=a[0])}}return a=Ye(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ou,lastRenderedState:t},a.queue=l,a=Ou.bind(null,G,l),l.dispatch=a,l=ar(!1),n=or.bind(null,G,!1,l.queue),l=Ye(),i={state:t,dispatch:null,action:e,pending:null},l.queue=i,a=fm.bind(null,G,i,n,a),i.dispatch=a,l.memoizedState=e,[t,a,!1]}function du(e){var t=Ne();return fu(t,re,e)}function fu(e,t,a){if(t=er(e,t,ou)[0],e=rn(Yt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=ti(t)}catch(r){throw r===dl?$i:r}else l=t;t=Ne();var i=t.queue,n=i.dispatch;return a!==t.memoizedState&&(G.flags|=2048,gl(9,{destroy:void 0},pm.bind(null,i,a),null)),[l,n,e]}function pm(e,t){e.action=t}function pu(e){var t=Ne(),a=re;if(a!==null)return fu(t,a,e);Ne(),t=t.memoizedState,a=Ne();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function gl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=G.updateQueue,t===null&&(t=nn(),G.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function mu(){return Ne().memoizedState}function sn(e,t,a,l){var i=Ye();G.flags|=e,i.memoizedState=gl(1|t,{destroy:void 0},a,l===void 0?null:l)}function on(e,t,a,l){var i=Ne();l=l===void 0?null:l;var n=i.memoizedState.inst;re!==null&&l!==null&&Jc(l,re.memoizedState.deps)?i.memoizedState=gl(t,n,a,l):(G.flags|=e,i.memoizedState=gl(1|t,n,a,l))}function hu(e,t){sn(8390656,8,e,t)}function ir(e,t){on(2048,8,e,t)}function mm(e){G.flags|=4;var t=G.updateQueue;if(t===null)t=nn(),G.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function gu(e){var t=Ne().memoizedState;return mm({ref:t,nextImpl:e}),function(){if((te&2)!==0)throw Error(f(440));return t.impl.apply(void 0,arguments)}}function vu(e,t){return on(4,2,e,t)}function bu(e,t){return on(4,4,e,t)}function xu(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yu(e,t,a){a=a!=null?a.concat([e]):null,on(4,4,xu.bind(null,t,e),a)}function nr(){}function Nu(e,t){var a=Ne();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Jc(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function ju(e,t){var a=Ne();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Jc(t,l[1]))return l[0];if(l=e(),La){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[l,t],l}function cr(e,t,a){return a===void 0||(qt&1073741824)!==0&&(J&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Sd(),G.lanes|=e,fa|=e,a)}function Su(e,t,a,l){return at(a,t)?a:pl.current!==null?(e=cr(e,a,l),at(e,t)||(ze=!0),e):(qt&42)===0||(qt&1073741824)!==0&&(J&261930)===0?(ze=!0,e.memoizedState=a):(e=Sd(),G.lanes|=e,fa|=e,t)}function zu(e,t,a,l,i){var n=M.p;M.p=n!==0&&8>n?n:8;var r=y.T,s={};y.T=s,or(e,!1,t,a);try{var o=i(),h=y.S;if(h!==null&&h(s,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var x=om(o,l);ai(e,t,x,st(e))}else ai(e,t,l,st(e))}catch(j){ai(e,t,{then:function(){},status:"rejected",reason:j},st())}finally{M.p=n,r!==null&&s.types!==null&&(r.types=s.types),y.T=r}}function hm(){}function rr(e,t,a,l){if(e.tag!==5)throw Error(f(476));var i=Au(e).queue;zu(e,i,t,L,a===null?hm:function(){return Eu(e),a(l)})}function Au(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:L,baseState:L,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:L},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Eu(e){var t=Au(e);t.next===null&&(t=e.alternate.memoizedState),ai(e,t.next.queue,{},st())}function sr(){return De(xi)}function Tu(){return Ne().memoizedState}function Mu(){return Ne().memoizedState}function gm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=st();e=ca(a);var l=ra(t,e,a);l!==null&&(We(l,t,a),Wl(l,t,a)),t={cache:Uc()},e.payload=t;return}t=t.return}}function vm(e,t,a){var l=st();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},un(e)?wu(t,a):(a=Ec(e,t,a,l),a!==null&&(We(a,e,l),_u(a,t,l)))}function Ou(e,t,a){var l=st();ai(e,t,a,l)}function ai(e,t,a,l){var i={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(un(e))wu(t,i);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=t.lastRenderedReducer,n!==null))try{var r=t.lastRenderedState,s=n(r,a);if(i.hasEagerState=!0,i.eagerState=s,at(s,r))return Vi(e,t,i,0),de===null&&Gi(),!1}catch{}finally{}if(a=Ec(e,t,i,l),a!==null)return We(a,e,l),_u(a,t,l),!0}return!1}function or(e,t,a,l){if(l={lane:2,revertLane:Yr(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},un(e)){if(t)throw Error(f(479))}else t=Ec(e,a,l,2),t!==null&&We(t,e,2)}function un(e){var t=e.alternate;return e===G||t!==null&&t===G}function wu(e,t){ml=an=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function _u(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Cs(e,a)}}var li={readContext:De,use:cn,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useLayoutEffect:ve,useInsertionEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useSyncExternalStore:ve,useId:ve,useHostTransitionStatus:ve,useFormState:ve,useActionState:ve,useOptimistic:ve,useMemoCache:ve,useCacheRefresh:ve};li.useEffectEvent=ve;var ku={readContext:De,use:cn,useCallback:function(e,t){return Ye().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:hu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,sn(4194308,4,xu.bind(null,t,e),a)},useLayoutEffect:function(e,t){return sn(4194308,4,e,t)},useInsertionEffect:function(e,t){sn(4,2,e,t)},useMemo:function(e,t){var a=Ye();t=t===void 0?null:t;var l=e();if(La){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Ye();if(a!==void 0){var i=a(t);if(La){Ft(!0);try{a(t)}finally{Ft(!1)}}}else i=t;return l.memoizedState=l.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},l.queue=e,e=e.dispatch=vm.bind(null,G,e),[l.memoizedState,e]},useRef:function(e){var t=Ye();return e={current:e},t.memoizedState=e},useState:function(e){e=ar(e);var t=e.queue,a=Ou.bind(null,G,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:nr,useDeferredValue:function(e,t){var a=Ye();return cr(a,e,t)},useTransition:function(){var e=ar(!1);return e=zu.bind(null,G,e.queue,!0,!1),Ye().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=G,i=Ye();if(W){if(a===void 0)throw Error(f(407));a=a()}else{if(a=t(),de===null)throw Error(f(349));(J&127)!==0||Po(l,t,a)}i.memoizedState=a;var n={value:a,getSnapshot:t};return i.queue=n,hu(tu.bind(null,l,n,e),[e]),l.flags|=2048,gl(9,{destroy:void 0},eu.bind(null,l,n,a,t),null),a},useId:function(){var e=Ye(),t=de.identifierPrefix;if(W){var a=Ot,l=Mt;a=(l&~(1<<32-tt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ln++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=um++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:sr,useFormState:uu,useActionState:uu,useOptimistic:function(e){var t=Ye();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=or.bind(null,G,!0,a),a.dispatch=t,[e,t]},useMemoCache:Pc,useCacheRefresh:function(){return Ye().memoizedState=gm.bind(null,G)},useEffectEvent:function(e){var t=Ye(),a={impl:e};return t.memoizedState=a,function(){if((te&2)!==0)throw Error(f(440));return a.impl.apply(void 0,arguments)}}},ur={readContext:De,use:cn,useCallback:Nu,useContext:De,useEffect:ir,useImperativeHandle:yu,useInsertionEffect:vu,useLayoutEffect:bu,useMemo:ju,useReducer:rn,useRef:mu,useState:function(){return rn(Yt)},useDebugValue:nr,useDeferredValue:function(e,t){var a=Ne();return Su(a,re.memoizedState,e,t)},useTransition:function(){var e=rn(Yt)[0],t=Ne().memoizedState;return[typeof e=="boolean"?e:ti(e),t]},useSyncExternalStore:Fo,useId:Tu,useHostTransitionStatus:sr,useFormState:du,useActionState:du,useOptimistic:function(e,t){var a=Ne();return iu(a,re,e,t)},useMemoCache:Pc,useCacheRefresh:Mu};ur.useEffectEvent=gu;var Du={readContext:De,use:cn,useCallback:Nu,useContext:De,useEffect:ir,useImperativeHandle:yu,useInsertionEffect:vu,useLayoutEffect:bu,useMemo:ju,useReducer:tr,useRef:mu,useState:function(){return tr(Yt)},useDebugValue:nr,useDeferredValue:function(e,t){var a=Ne();return re===null?cr(a,e,t):Su(a,re.memoizedState,e,t)},useTransition:function(){var e=tr(Yt)[0],t=Ne().memoizedState;return[typeof e=="boolean"?e:ti(e),t]},useSyncExternalStore:Fo,useId:Tu,useHostTransitionStatus:sr,useFormState:pu,useActionState:pu,useOptimistic:function(e,t){var a=Ne();return re!==null?iu(a,re,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Pc,useCacheRefresh:Mu};Du.useEffectEvent=gu;function dr(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:U({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var fr={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=st(),i=ca(l);i.payload=t,a!=null&&(i.callback=a),t=ra(e,i,l),t!==null&&(We(t,e,l),Wl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=st(),i=ca(l);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=ra(e,i,l),t!==null&&(We(t,e,l),Wl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=st(),l=ca(a);l.tag=2,t!=null&&(l.callback=t),t=ra(e,l,a),t!==null&&(We(t,e,a),Wl(t,e,a))}};function Ru(e,t,a,l,i,n,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,n,r):t.prototype&&t.prototype.isPureReactComponent?!Vl(a,l)||!Vl(i,n):!0}function Cu(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&fr.enqueueReplaceState(t,t.state,null)}function qa(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=U({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function Hu(e){Yi(e)}function Uu(e){console.error(e)}function Bu(e){Yi(e)}function dn(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Lu(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function pr(e,t,a){return a=ca(a),a.tag=3,a.payload={element:null},a.callback=function(){dn(e,t)},a}function qu(e){return e=ca(e),e.tag=3,e}function Yu(e,t,a,l){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var n=l.value;e.payload=function(){return i(n)},e.callback=function(){Lu(t,a,l)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Lu(t,a,l),typeof i!="function"&&(pa===null?pa=new Set([this]):pa.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function bm(e,t,a,l,i){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&sl(t,a,i,!0),a=it.current,a!==null){switch(a.tag){case 31:case 13:return vt===null?Sn():a.alternate===null&&be===0&&(be=3),a.flags&=-257,a.flags|=65536,a.lanes=i,l===Wi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Br(e,l,i)),!1;case 22:return a.flags|=65536,l===Wi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Br(e,l,i)),!1}throw Error(f(435,a.tag))}return Br(e,l,i),Sn(),!1}if(W)return t=it.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,l!==kc&&(e=Error(f(422),{cause:l}),Zl(pt(e,a)))):(l!==kc&&(t=Error(f(423),{cause:l}),Zl(pt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,l=pt(l,a),i=pr(e.stateNode,l,i),Vc(e,i),be!==4&&(be=2)),!1;var n=Error(f(520),{cause:l});if(n=pt(n,a),di===null?di=[n]:di.push(n),be!==4&&(be=2),t===null)return!0;l=pt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=pr(a.stateNode,l,e),Vc(a,e),!1;case 1:if(t=a.type,n=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(pa===null||!pa.has(n))))return a.flags|=65536,i&=-i,a.lanes|=i,i=qu(i),Yu(i,e,a,l),Vc(a,i),!1}a=a.return}while(a!==null);return!1}var mr=Error(f(461)),ze=!1;function Re(e,t,a,l){t.child=e===null?Qo(t,null,a,l):Ba(t,e.child,a,l)}function Gu(e,t,a,l,i){a=a.render;var n=t.ref;if("ref"in l){var r={};for(var s in l)s!=="ref"&&(r[s]=l[s])}else r=l;return Ra(t),l=Ic(e,t,a,r,n,i),s=$c(),e!==null&&!ze?(Wc(e,t,i),Gt(e,t,i)):(W&&s&&wc(t),t.flags|=1,Re(e,t,l,i),t.child)}function Vu(e,t,a,l,i){if(e===null){var n=a.type;return typeof n=="function"&&!Tc(n)&&n.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=n,Xu(e,t,n,l,i)):(e=Qi(a.type,null,l,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(n=e.child,!jr(e,i)){var r=n.memoizedProps;if(a=a.compare,a=a!==null?a:Vl,a(r,l)&&e.ref===t.ref)return Gt(e,t,i)}return t.flags|=1,e=Ht(n,l),e.ref=t.ref,e.return=t,t.child=e}function Xu(e,t,a,l,i){if(e!==null){var n=e.memoizedProps;if(Vl(n,l)&&e.ref===t.ref)if(ze=!1,t.pendingProps=l=n,jr(e,i))(e.flags&131072)!==0&&(ze=!0);else return t.lanes=e.lanes,Gt(e,t,i)}return hr(e,t,a,l,i)}function Qu(e,t,a,l){var i=l.children,n=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(n=n!==null?n.baseLanes|a:a,e!==null){for(l=t.child=e.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;l=i&~n}else l=0,t.child=null;return Zu(e,t,n,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ii(t,n!==null?n.cachePool:null),n!==null?Jo(t,n):Qc(),Io(t);else return l=t.lanes=536870912,Zu(e,t,n!==null?n.baseLanes|a:a,a,l)}else n!==null?(Ii(t,n.cachePool),Jo(t,n),oa(),t.memoizedState=null):(e!==null&&Ii(t,null),Qc(),oa());return Re(e,t,i,a),t.child}function ii(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Zu(e,t,a,l,i){var n=Lc();return n=n===null?null:{parent:je._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&Ii(t,null),Qc(),Io(t),e!==null&&sl(e,t,l,!0),t.childLanes=i,null}function fn(e,t){return t=mn({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ku(e,t,a){return Ba(t,e.child,null,a),e=fn(t,t.pendingProps),e.flags|=2,nt(t),t.memoizedState=null,e}function xm(e,t,a){var l=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(W){if(l.mode==="hidden")return e=fn(t,l),t.lanes=536870912,ii(null,e);if(Kc(t),(e=pe)?(e=cf(e,gt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ta!==null?{id:Mt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},a=wo(e),a.return=t,t.child=a,ke=t,pe=null)):e=null,e===null)throw la(t);return t.lanes=536870912,null}return fn(t,l)}var n=e.memoizedState;if(n!==null){var r=n.dehydrated;if(Kc(t),i)if(t.flags&256)t.flags&=-257,t=Ku(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(f(558));else if(ze||sl(e,t,a,!1),i=(a&e.childLanes)!==0,ze||i){if(l=de,l!==null&&(r=Hs(l,a),r!==0&&r!==n.retryLane))throw n.retryLane=r,wa(e,r),We(l,e,r),mr;Sn(),t=Ku(e,t,a)}else e=n.treeContext,pe=bt(r.nextSibling),ke=t,W=!0,aa=null,gt=!1,e!==null&&Do(t,e),t=fn(t,l),t.flags|=4096;return t}return e=Ht(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function pn(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(f(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function hr(e,t,a,l,i){return Ra(t),a=Ic(e,t,a,l,void 0,i),l=$c(),e!==null&&!ze?(Wc(e,t,i),Gt(e,t,i)):(W&&l&&wc(t),t.flags|=1,Re(e,t,a,i),t.child)}function Ju(e,t,a,l,i,n){return Ra(t),t.updateQueue=null,a=Wo(t,l,a,i),$o(e),l=$c(),e!==null&&!ze?(Wc(e,t,n),Gt(e,t,n)):(W&&l&&wc(t),t.flags|=1,Re(e,t,a,n),t.child)}function Iu(e,t,a,l,i){if(Ra(t),t.stateNode===null){var n=il,r=a.contextType;typeof r=="object"&&r!==null&&(n=De(r)),n=new a(l,n),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=fr,t.stateNode=n,n._reactInternals=t,n=t.stateNode,n.props=l,n.state=t.memoizedState,n.refs={},Yc(t),r=a.contextType,n.context=typeof r=="object"&&r!==null?De(r):il,n.state=t.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(dr(t,a,r,l),n.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(r=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),r!==n.state&&fr.enqueueReplaceState(n,n.state,null),Pl(t,l,n,i),Fl(),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){n=t.stateNode;var s=t.memoizedProps,o=qa(a,s);n.props=o;var h=n.context,x=a.contextType;r=il,typeof x=="object"&&x!==null&&(r=De(x));var j=a.getDerivedStateFromProps;x=typeof j=="function"||typeof n.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,x||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(s||h!==r)&&Cu(t,n,l,r),na=!1;var g=t.memoizedState;n.state=g,Pl(t,l,n,i),Fl(),h=t.memoizedState,s||g!==h||na?(typeof j=="function"&&(dr(t,a,j,l),h=t.memoizedState),(o=na||Ru(t,a,o,l,g,h,r))?(x||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=h),n.props=l,n.state=h,n.context=r,l=o):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{n=t.stateNode,Gc(e,t),r=t.memoizedProps,x=qa(a,r),n.props=x,j=t.pendingProps,g=n.context,h=a.contextType,o=il,typeof h=="object"&&h!==null&&(o=De(h)),s=a.getDerivedStateFromProps,(h=typeof s=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(r!==j||g!==o)&&Cu(t,n,l,o),na=!1,g=t.memoizedState,n.state=g,Pl(t,l,n,i),Fl();var v=t.memoizedState;r!==j||g!==v||na||e!==null&&e.dependencies!==null&&Ki(e.dependencies)?(typeof s=="function"&&(dr(t,a,s,l),v=t.memoizedState),(x=na||Ru(t,a,x,l,g,v,o)||e!==null&&e.dependencies!==null&&Ki(e.dependencies))?(h||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(l,v,o),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(l,v,o)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||r===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=v),n.props=l,n.state=v,n.context=o,l=x):(typeof n.componentDidUpdate!="function"||r===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),l=!1)}return n=l,pn(e,t),l=(t.flags&128)!==0,n||l?(n=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:n.render(),t.flags|=1,e!==null&&l?(t.child=Ba(t,e.child,null,i),t.child=Ba(t,null,a,i)):Re(e,t,a,i),t.memoizedState=n.state,e=t.child):e=Gt(e,t,i),e}function $u(e,t,a,l){return ka(),t.flags|=256,Re(e,t,a,l),t.child}var gr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vr(e){return{baseLanes:e,cachePool:Lo()}}function br(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=rt),e}function Wu(e,t,a){var l=t.pendingProps,i=!1,n=(t.flags&128)!==0,r;if((r=n)||(r=e!==null&&e.memoizedState===null?!1:(ye.current&2)!==0),r&&(i=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(W){if(i?sa(t):oa(),(e=pe)?(e=cf(e,gt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ta!==null?{id:Mt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},a=wo(e),a.return=t,t.child=a,ke=t,pe=null)):e=null,e===null)throw la(t);return es(e)?t.lanes=32:t.lanes=536870912,null}var s=l.children;return l=l.fallback,i?(oa(),i=t.mode,s=mn({mode:"hidden",children:s},i),l=_a(l,i,a,null),s.return=t,l.return=t,s.sibling=l,t.child=s,l=t.child,l.memoizedState=vr(a),l.childLanes=br(e,r,a),t.memoizedState=gr,ii(null,l)):(sa(t),xr(t,s))}var o=e.memoizedState;if(o!==null&&(s=o.dehydrated,s!==null)){if(n)t.flags&256?(sa(t),t.flags&=-257,t=yr(e,t,a)):t.memoizedState!==null?(oa(),t.child=e.child,t.flags|=128,t=null):(oa(),s=l.fallback,i=t.mode,l=mn({mode:"visible",children:l.children},i),s=_a(s,i,a,null),s.flags|=2,l.return=t,s.return=t,l.sibling=s,t.child=l,Ba(t,e.child,null,a),l=t.child,l.memoizedState=vr(a),l.childLanes=br(e,r,a),t.memoizedState=gr,t=ii(null,l));else if(sa(t),es(s)){if(r=s.nextSibling&&s.nextSibling.dataset,r)var h=r.dgst;r=h,l=Error(f(419)),l.stack="",l.digest=r,Zl({value:l,source:null,stack:null}),t=yr(e,t,a)}else if(ze||sl(e,t,a,!1),r=(a&e.childLanes)!==0,ze||r){if(r=de,r!==null&&(l=Hs(r,a),l!==0&&l!==o.retryLane))throw o.retryLane=l,wa(e,l),We(r,e,l),mr;Pr(s)||Sn(),t=yr(e,t,a)}else Pr(s)?(t.flags|=192,t.child=e.child,t=null):(e=o.treeContext,pe=bt(s.nextSibling),ke=t,W=!0,aa=null,gt=!1,e!==null&&Do(t,e),t=xr(t,l.children),t.flags|=4096);return t}return i?(oa(),s=l.fallback,i=t.mode,o=e.child,h=o.sibling,l=Ht(o,{mode:"hidden",children:l.children}),l.subtreeFlags=o.subtreeFlags&65011712,h!==null?s=Ht(h,s):(s=_a(s,i,a,null),s.flags|=2),s.return=t,l.return=t,l.sibling=s,t.child=l,ii(null,l),l=t.child,s=e.child.memoizedState,s===null?s=vr(a):(i=s.cachePool,i!==null?(o=je._currentValue,i=i.parent!==o?{parent:o,pool:o}:i):i=Lo(),s={baseLanes:s.baseLanes|a,cachePool:i}),l.memoizedState=s,l.childLanes=br(e,r,a),t.memoizedState=gr,ii(e.child,l)):(sa(t),a=e.child,e=a.sibling,a=Ht(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a)}function xr(e,t){return t=mn({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function mn(e,t){return e=lt(22,e,null,t),e.lanes=0,e}function yr(e,t,a){return Ba(t,e.child,null,a),e=xr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Fu(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Cc(e.return,t,a)}function Nr(e,t,a,l,i,n){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:i,treeForkCount:n}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=a,r.tailMode=i,r.treeForkCount=n)}function Pu(e,t,a){var l=t.pendingProps,i=l.revealOrder,n=l.tail;l=l.children;var r=ye.current,s=(r&2)!==0;if(s?(r=r&1|2,t.flags|=128):r&=1,O(ye,r),Re(e,t,l,a),l=W?Ql:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fu(e,a,t);else if(e.tag===19)Fu(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&tn(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),Nr(t,!1,i,a,n,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&tn(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}Nr(t,!0,a,null,n,l);break;case"together":Nr(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Gt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),fa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(sl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(f(153));if(t.child!==null){for(e=t.child,a=Ht(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ht(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function jr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ki(e)))}function ym(e,t,a){switch(t.tag){case 3:qe(t,t.stateNode.containerInfo),ia(t,je,e.memoizedState.cache),ka();break;case 27:case 5:wl(t);break;case 4:qe(t,t.stateNode.containerInfo);break;case 10:ia(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Kc(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(sa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Wu(e,t,a):(sa(t),e=Gt(e,t,a),e!==null?e.sibling:null);sa(t);break;case 19:var i=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(sl(e,t,a,!1),l=(a&t.childLanes)!==0),i){if(l)return Pu(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(ye,ye.current),l)break;return null;case 22:return t.lanes=0,Qu(e,t,a,t.pendingProps);case 24:ia(t,je,e.memoizedState.cache)}return Gt(e,t,a)}function ed(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)ze=!0;else{if(!jr(e,a)&&(t.flags&128)===0)return ze=!1,ym(e,t,a);ze=(e.flags&131072)!==0}else ze=!1,W&&(t.flags&1048576)!==0&&ko(t,Ql,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ha(t.elementType),t.type=e,typeof e=="function")Tc(e)?(l=qa(e,l),t.tag=1,t=Iu(null,t,e,l,a)):(t.tag=0,t=hr(null,t,e,l,a));else{if(e!=null){var i=e.$$typeof;if(i===ot){t.tag=11,t=Gu(null,t,e,l,a);break e}else if(i===$){t.tag=14,t=Vu(null,t,e,l,a);break e}}throw t=kt(e)||e,Error(f(306,t,""))}}return t;case 0:return hr(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,i=qa(l,t.pendingProps),Iu(e,t,l,i,a);case 3:e:{if(qe(t,t.stateNode.containerInfo),e===null)throw Error(f(387));l=t.pendingProps;var n=t.memoizedState;i=n.element,Gc(e,t),Pl(t,l,null,a);var r=t.memoizedState;if(l=r.cache,ia(t,je,l),l!==n.cache&&Hc(t,[je],a,!0),Fl(),l=r.element,n.isDehydrated)if(n={element:l,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=n,t.memoizedState=n,t.flags&256){t=$u(e,t,l,a);break e}else if(l!==i){i=pt(Error(f(424)),t),Zl(i),t=$u(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(pe=bt(e.firstChild),ke=t,W=!0,aa=null,gt=!0,a=Qo(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ka(),l===i){t=Gt(e,t,a);break e}Re(e,t,l,a)}t=t.child}return t;case 26:return pn(e,t),e===null?(a=ff(t.type,null,t.pendingProps,null))?t.memoizedState=a:W||(a=t.type,e=t.pendingProps,l=wn(Q.current).createElement(a),l[_e]=t,l[Qe]=e,Ce(l,a,e),Te(l),t.stateNode=l):t.memoizedState=ff(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return wl(t),e===null&&W&&(l=t.stateNode=of(t.type,t.pendingProps,Q.current),ke=t,gt=!0,i=pe,va(t.type)?(ts=i,pe=bt(l.firstChild)):pe=i),Re(e,t,t.pendingProps.children,a),pn(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&W&&((i=l=pe)&&(l=$m(l,t.type,t.pendingProps,gt),l!==null?(t.stateNode=l,ke=t,pe=bt(l.firstChild),gt=!1,i=!0):i=!1),i||la(t)),wl(t),i=t.type,n=t.pendingProps,r=e!==null?e.memoizedProps:null,l=n.children,$r(i,n)?l=null:r!==null&&$r(i,r)&&(t.flags|=32),t.memoizedState!==null&&(i=Ic(e,t,dm,null,null,a),xi._currentValue=i),pn(e,t),Re(e,t,l,a),t.child;case 6:return e===null&&W&&((e=a=pe)&&(a=Wm(a,t.pendingProps,gt),a!==null?(t.stateNode=a,ke=t,pe=null,e=!0):e=!1),e||la(t)),null;case 13:return Wu(e,t,a);case 4:return qe(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ba(t,null,l,a):Re(e,t,l,a),t.child;case 11:return Gu(e,t,t.type,t.pendingProps,a);case 7:return Re(e,t,t.pendingProps,a),t.child;case 8:return Re(e,t,t.pendingProps.children,a),t.child;case 12:return Re(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ia(t,t.type,l.value),Re(e,t,l.children,a),t.child;case 9:return i=t.type._context,l=t.pendingProps.children,Ra(t),i=De(i),l=l(i),t.flags|=1,Re(e,t,l,a),t.child;case 14:return Vu(e,t,t.type,t.pendingProps,a);case 15:return Xu(e,t,t.type,t.pendingProps,a);case 19:return Pu(e,t,a);case 31:return xm(e,t,a);case 22:return Qu(e,t,a,t.pendingProps);case 24:return Ra(t),l=De(je),e===null?(i=Lc(),i===null&&(i=de,n=Uc(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=a),i=n),t.memoizedState={parent:l,cache:i},Yc(t),ia(t,je,i)):((e.lanes&a)!==0&&(Gc(e,t),Pl(t,null,null,a),Fl()),i=e.memoizedState,n=t.memoizedState,i.parent!==l?(i={parent:l,cache:l},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ia(t,je,l)):(l=n.cache,ia(t,je,l),l!==i.cache&&Hc(t,[je],a,!0))),Re(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(f(156,t.tag))}function Vt(e){e.flags|=4}function Sr(e,t,a,l,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Td())e.flags|=8192;else throw Ua=Wi,qc}else e.flags&=-16777217}function td(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!vf(t))if(Td())e.flags|=8192;else throw Ua=Wi,qc}function hn(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ds():536870912,e.lanes|=t,yl|=t)}function ni(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Nm(e,t,a){var l=t.pendingProps;switch(_c(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return me(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Lt(je),xe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(rl(t)?Vt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Dc())),me(t),null;case 26:var i=t.type,n=t.memoizedState;return e===null?(Vt(t),n!==null?(me(t),td(t,n)):(me(t),Sr(t,i,null,l,a))):n?n!==e.memoizedState?(Vt(t),me(t),td(t,n)):(me(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Vt(t),me(t),Sr(t,i,e,l,a)),null;case 27:if(Ai(t),a=Q.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Vt(t);else{if(!l){if(t.stateNode===null)throw Error(f(166));return me(t),null}e=D.current,rl(t)?Ro(t):(e=of(i,l,a),t.stateNode=e,Vt(t))}return me(t),null;case 5:if(Ai(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Vt(t);else{if(!l){if(t.stateNode===null)throw Error(f(166));return me(t),null}if(n=D.current,rl(t))Ro(t);else{var r=wn(Q.current);switch(n){case 1:n=r.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=r.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=r.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?r.createElement("select",{is:l.is}):r.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?r.createElement(i,{is:l.is}):r.createElement(i)}}n[_e]=t,n[Qe]=l;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)n.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=n;e:switch(Ce(n,i,l),i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Vt(t)}}return me(t),Sr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Vt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(f(166));if(e=Q.current,rl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,i=ke,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}e[_e]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Wd(e.nodeValue,a)),e||la(t,!0)}else e=wn(e).createTextNode(l),e[_e]=t,t.stateNode=e}return me(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=rl(t),a!==null){if(e===null){if(!l)throw Error(f(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(557));e[_e]=t}else ka(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;me(t),e=!1}else a=Dc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(nt(t),t):(nt(t),null);if((t.flags&128)!==0)throw Error(f(558))}return me(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=rl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(f(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(f(317));i[_e]=t}else ka(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;me(t),i=!1}else i=Dc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(nt(t),t):(nt(t),null)}return nt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool),n=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(n=l.memoizedState.cachePool.pool),n!==i&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),hn(t,t.updateQueue),me(t),null);case 4:return xe(),e===null&&Qr(t.stateNode.containerInfo),me(t),null;case 10:return Lt(t.type),me(t),null;case 19:if(S(ye),l=t.memoizedState,l===null)return me(t),null;if(i=(t.flags&128)!==0,n=l.rendering,n===null)if(i)ni(l,!1);else{if(be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(n=tn(e),n!==null){for(t.flags|=128,ni(l,!1),e=n.updateQueue,t.updateQueue=e,hn(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Oo(a,e),a=a.sibling;return O(ye,ye.current&1|2),W&&Ut(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Pe()>yn&&(t.flags|=128,i=!0,ni(l,!1),t.lanes=4194304)}else{if(!i)if(e=tn(n),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,hn(t,e),ni(l,!0),l.tail===null&&l.tailMode==="hidden"&&!n.alternate&&!W)return me(t),null}else 2*Pe()-l.renderingStartTime>yn&&a!==536870912&&(t.flags|=128,i=!0,ni(l,!1),t.lanes=4194304);l.isBackwards?(n.sibling=t.child,t.child=n):(e=l.last,e!==null?e.sibling=n:t.child=n,l.last=n)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Pe(),e.sibling=null,a=ye.current,O(ye,i?a&1|2:a&1),W&&Ut(t,l.treeForkCount),e):(me(t),null);case 22:case 23:return nt(t),Zc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),a=t.updateQueue,a!==null&&hn(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&S(Ca),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Lt(je),me(t),null;case 25:return null;case 30:return null}throw Error(f(156,t.tag))}function jm(e,t){switch(_c(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Lt(je),xe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ai(t),null;case 31:if(t.memoizedState!==null){if(nt(t),t.alternate===null)throw Error(f(340));ka()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(nt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(f(340));ka()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return S(ye),null;case 4:return xe(),null;case 10:return Lt(t.type),null;case 22:case 23:return nt(t),Zc(),e!==null&&S(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Lt(je),null;case 25:return null;default:return null}}function ad(e,t){switch(_c(t),t.tag){case 3:Lt(je),xe();break;case 26:case 27:case 5:Ai(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&nt(t);break;case 13:nt(t);break;case 19:S(ye);break;case 10:Lt(t.type);break;case 22:case 23:nt(t),Zc(),e!==null&&S(Ca);break;case 24:Lt(je)}}function ci(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){l=void 0;var n=a.create,r=a.inst;l=n(),r.destroy=l}a=a.next}while(a!==i)}}catch(s){ne(t,t.return,s)}}function ua(e,t,a){try{var l=t.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var n=i.next;l=n;do{if((l.tag&e)===e){var r=l.inst,s=r.destroy;if(s!==void 0){r.destroy=void 0,i=t;var o=a,h=s;try{h()}catch(x){ne(i,o,x)}}}l=l.next}while(l!==n)}}catch(x){ne(t,t.return,x)}}function ld(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Ko(t,a)}catch(l){ne(e,e.return,l)}}}function id(e,t,a){a.props=qa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ne(e,t,l)}}function ri(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(i){ne(e,t,i)}}function wt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(i){ne(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){ne(e,t,i)}else a.current=null}function nd(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(i){ne(e,e.return,i)}}function zr(e,t,a){try{var l=e.stateNode;Xm(l,e.type,a,t),l[Qe]=t}catch(i){ne(e,e.return,i)}}function cd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&va(e.type)||e.tag===4}function Ar(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&va(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Er(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Rt));else if(l!==4&&(l===27&&va(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Er(e,t,a),e=e.sibling;e!==null;)Er(e,t,a),e=e.sibling}function gn(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&va(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(gn(e,t,a),e=e.sibling;e!==null;)gn(e,t,a),e=e.sibling}function rd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ce(t,l,a),t[_e]=e,t[Qe]=a}catch(n){ne(e,e.return,n)}}var Xt=!1,Ae=!1,Tr=!1,sd=typeof WeakSet=="function"?WeakSet:Set,Me=null;function Sm(e,t){if(e=e.containerInfo,Jr=Un,e=yo(e),yc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var i=l.anchorOffset,n=l.focusNode;l=l.focusOffset;try{a.nodeType,n.nodeType}catch{a=null;break e}var r=0,s=-1,o=-1,h=0,x=0,j=e,g=null;t:for(;;){for(var v;j!==a||i!==0&&j.nodeType!==3||(s=r+i),j!==n||l!==0&&j.nodeType!==3||(o=r+l),j.nodeType===3&&(r+=j.nodeValue.length),(v=j.firstChild)!==null;)g=j,j=v;for(;;){if(j===e)break t;if(g===a&&++h===i&&(s=r),g===n&&++x===l&&(o=r),(v=j.nextSibling)!==null)break;j=g,g=j.parentNode}j=v}a=s===-1||o===-1?null:{start:s,end:o}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ir={focusedElem:e,selectionRange:a},Un=!1,Me=t;Me!==null;)if(t=Me,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Me=e;else for(;Me!==null;){switch(t=Me,n=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&n!==null){e=void 0,a=t,i=n.memoizedProps,n=n.memoizedState,l=a.stateNode;try{var w=qa(a.type,i);e=l.getSnapshotBeforeUpdate(w,n),l.__reactInternalSnapshotBeforeUpdate=e}catch(B){ne(a,a.return,B)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Fr(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Fr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(f(163))}if(e=t.sibling,e!==null){e.return=t.return,Me=e;break}Me=t.return}}function od(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Zt(e,a),l&4&&ci(5,a);break;case 1:if(Zt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(r){ne(a,a.return,r)}else{var i=qa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ne(a,a.return,r)}}l&64&&ld(a),l&512&&ri(a,a.return);break;case 3:if(Zt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ko(e,t)}catch(r){ne(a,a.return,r)}}break;case 27:t===null&&l&4&&rd(a);case 26:case 5:Zt(e,a),t===null&&l&4&&nd(a),l&512&&ri(a,a.return);break;case 12:Zt(e,a);break;case 31:Zt(e,a),l&4&&fd(e,a);break;case 13:Zt(e,a),l&4&&pd(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=km.bind(null,a),Fm(e,a))));break;case 22:if(l=a.memoizedState!==null||Xt,!l){t=t!==null&&t.memoizedState!==null||Ae,i=Xt;var n=Ae;Xt=l,(Ae=t)&&!n?Kt(e,a,(a.subtreeFlags&8772)!==0):Zt(e,a),Xt=i,Ae=n}break;case 30:break;default:Zt(e,a)}}function ud(e){var t=e.alternate;t!==null&&(e.alternate=null,ud(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&lc(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var he=null,Ke=!1;function Qt(e,t,a){for(a=a.child;a!==null;)dd(e,t,a),a=a.sibling}function dd(e,t,a){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(_l,a)}catch{}switch(a.tag){case 26:Ae||wt(a,t),Qt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ae||wt(a,t);var l=he,i=Ke;va(a.type)&&(he=a.stateNode,Ke=!1),Qt(e,t,a),gi(a.stateNode),he=l,Ke=i;break;case 5:Ae||wt(a,t);case 6:if(l=he,i=Ke,he=null,Qt(e,t,a),he=l,Ke=i,he!==null)if(Ke)try{(he.nodeType===9?he.body:he.nodeName==="HTML"?he.ownerDocument.body:he).removeChild(a.stateNode)}catch(n){ne(a,t,n)}else try{he.removeChild(a.stateNode)}catch(n){ne(a,t,n)}break;case 18:he!==null&&(Ke?(e=he,lf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ml(e)):lf(he,a.stateNode));break;case 4:l=he,i=Ke,he=a.stateNode.containerInfo,Ke=!0,Qt(e,t,a),he=l,Ke=i;break;case 0:case 11:case 14:case 15:ua(2,a,t),Ae||ua(4,a,t),Qt(e,t,a);break;case 1:Ae||(wt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&id(a,t,l)),Qt(e,t,a);break;case 21:Qt(e,t,a);break;case 22:Ae=(l=Ae)||a.memoizedState!==null,Qt(e,t,a),Ae=l;break;default:Qt(e,t,a)}}function fd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ml(e)}catch(a){ne(t,t.return,a)}}}function pd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ml(e)}catch(a){ne(t,t.return,a)}}function zm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new sd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new sd),t;default:throw Error(f(435,e.tag))}}function vn(e,t){var a=zm(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var i=Dm.bind(null,e,l);l.then(i,i)}})}function Je(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var i=a[l],n=e,r=t,s=r;e:for(;s!==null;){switch(s.tag){case 27:if(va(s.type)){he=s.stateNode,Ke=!1;break e}break;case 5:he=s.stateNode,Ke=!1;break e;case 3:case 4:he=s.stateNode.containerInfo,Ke=!0;break e}s=s.return}if(he===null)throw Error(f(160));dd(n,r,i),he=null,Ke=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)md(t,e),t=t.sibling}var St=null;function md(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Je(t,e),Ie(e),l&4&&(ua(3,e,e.return),ci(3,e),ua(5,e,e.return));break;case 1:Je(t,e),Ie(e),l&512&&(Ae||a===null||wt(a,a.return)),l&64&&Xt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var i=St;if(Je(t,e),Ie(e),l&512&&(Ae||a===null||wt(a,a.return)),l&4){var n=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(l){case"title":n=i.getElementsByTagName("title")[0],(!n||n[Rl]||n[_e]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(l),i.head.insertBefore(n,i.querySelector("head > title"))),Ce(n,l,a),n[_e]=e,Te(n),l=n;break e;case"link":var r=hf("link","href",i).get(l+(a.href||""));if(r){for(var s=0;s<r.length;s++)if(n=r[s],n.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&n.getAttribute("rel")===(a.rel==null?null:a.rel)&&n.getAttribute("title")===(a.title==null?null:a.title)&&n.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(s,1);break t}}n=i.createElement(l),Ce(n,l,a),i.head.appendChild(n);break;case"meta":if(r=hf("meta","content",i).get(l+(a.content||""))){for(s=0;s<r.length;s++)if(n=r[s],n.getAttribute("content")===(a.content==null?null:""+a.content)&&n.getAttribute("name")===(a.name==null?null:a.name)&&n.getAttribute("property")===(a.property==null?null:a.property)&&n.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&n.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(s,1);break t}}n=i.createElement(l),Ce(n,l,a),i.head.appendChild(n);break;default:throw Error(f(468,l))}n[_e]=e,Te(n),l=n}e.stateNode=l}else gf(i,e.type,e.stateNode);else e.stateNode=mf(i,l,e.memoizedProps);else n!==l?(n===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):n.count--,l===null?gf(i,e.type,e.stateNode):mf(i,l,e.memoizedProps)):l===null&&e.stateNode!==null&&zr(e,e.memoizedProps,a.memoizedProps)}break;case 27:Je(t,e),Ie(e),l&512&&(Ae||a===null||wt(a,a.return)),a!==null&&l&4&&zr(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Je(t,e),Ie(e),l&512&&(Ae||a===null||wt(a,a.return)),e.flags&32){i=e.stateNode;try{Wa(i,"")}catch(w){ne(e,e.return,w)}}l&4&&e.stateNode!=null&&(i=e.memoizedProps,zr(e,i,a!==null?a.memoizedProps:i)),l&1024&&(Tr=!0);break;case 6:if(Je(t,e),Ie(e),l&4){if(e.stateNode===null)throw Error(f(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(w){ne(e,e.return,w)}}break;case 3:if(Dn=null,i=St,St=_n(t.containerInfo),Je(t,e),St=i,Ie(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ml(t.containerInfo)}catch(w){ne(e,e.return,w)}Tr&&(Tr=!1,hd(e));break;case 4:l=St,St=_n(e.stateNode.containerInfo),Je(t,e),Ie(e),St=l;break;case 12:Je(t,e),Ie(e);break;case 31:Je(t,e),Ie(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,vn(e,l)));break;case 13:Je(t,e),Ie(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(xn=Pe()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,vn(e,l)));break;case 22:i=e.memoizedState!==null;var o=a!==null&&a.memoizedState!==null,h=Xt,x=Ae;if(Xt=h||i,Ae=x||o,Je(t,e),Ae=x,Xt=h,Ie(e),l&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||o||Xt||Ae||Ya(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){o=a=t;try{if(n=o.stateNode,i)r=n.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{s=o.stateNode;var j=o.memoizedProps.style,g=j!=null&&j.hasOwnProperty("display")?j.display:null;s.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(w){ne(o,o.return,w)}}}else if(t.tag===6){if(a===null){o=t;try{o.stateNode.nodeValue=i?"":o.memoizedProps}catch(w){ne(o,o.return,w)}}}else if(t.tag===18){if(a===null){o=t;try{var v=o.stateNode;i?nf(v,!0):nf(o.stateNode,!1)}catch(w){ne(o,o.return,w)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,vn(e,a))));break;case 19:Je(t,e),Ie(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,vn(e,l)));break;case 30:break;case 21:break;default:Je(t,e),Ie(e)}}function Ie(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(cd(l)){a=l;break}l=l.return}if(a==null)throw Error(f(160));switch(a.tag){case 27:var i=a.stateNode,n=Ar(e);gn(e,n,i);break;case 5:var r=a.stateNode;a.flags&32&&(Wa(r,""),a.flags&=-33);var s=Ar(e);gn(e,s,r);break;case 3:case 4:var o=a.stateNode.containerInfo,h=Ar(e);Er(e,h,o);break;default:throw Error(f(161))}}catch(x){ne(e,e.return,x)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;hd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Zt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)od(e,t.alternate,t),t=t.sibling}function Ya(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ua(4,t,t.return),Ya(t);break;case 1:wt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&id(t,t.return,a),Ya(t);break;case 27:gi(t.stateNode);case 26:case 5:wt(t,t.return),Ya(t);break;case 22:t.memoizedState===null&&Ya(t);break;case 30:Ya(t);break;default:Ya(t)}e=e.sibling}}function Kt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,i=e,n=t,r=n.flags;switch(n.tag){case 0:case 11:case 15:Kt(i,n,a),ci(4,n);break;case 1:if(Kt(i,n,a),l=n,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(h){ne(l,l.return,h)}if(l=n,i=l.updateQueue,i!==null){var s=l.stateNode;try{var o=i.shared.hiddenCallbacks;if(o!==null)for(i.shared.hiddenCallbacks=null,i=0;i<o.length;i++)Zo(o[i],s)}catch(h){ne(l,l.return,h)}}a&&r&64&&ld(n),ri(n,n.return);break;case 27:rd(n);case 26:case 5:Kt(i,n,a),a&&l===null&&r&4&&nd(n),ri(n,n.return);break;case 12:Kt(i,n,a);break;case 31:Kt(i,n,a),a&&r&4&&fd(i,n);break;case 13:Kt(i,n,a),a&&r&4&&pd(i,n);break;case 22:n.memoizedState===null&&Kt(i,n,a),ri(n,n.return);break;case 30:break;default:Kt(i,n,a)}t=t.sibling}}function Mr(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Kl(a))}function Or(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Kl(e))}function zt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)gd(e,t,a,l),t=t.sibling}function gd(e,t,a,l){var i=t.flags;switch(t.tag){case 0:case 11:case 15:zt(e,t,a,l),i&2048&&ci(9,t);break;case 1:zt(e,t,a,l);break;case 3:zt(e,t,a,l),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Kl(e)));break;case 12:if(i&2048){zt(e,t,a,l),e=t.stateNode;try{var n=t.memoizedProps,r=n.id,s=n.onPostCommit;typeof s=="function"&&s(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){ne(t,t.return,o)}}else zt(e,t,a,l);break;case 31:zt(e,t,a,l);break;case 13:zt(e,t,a,l);break;case 23:break;case 22:n=t.stateNode,r=t.alternate,t.memoizedState!==null?n._visibility&2?zt(e,t,a,l):si(e,t):n._visibility&2?zt(e,t,a,l):(n._visibility|=2,vl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Mr(r,t);break;case 24:zt(e,t,a,l),i&2048&&Or(t.alternate,t);break;default:zt(e,t,a,l)}}function vl(e,t,a,l,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var n=e,r=t,s=a,o=l,h=r.flags;switch(r.tag){case 0:case 11:case 15:vl(n,r,s,o,i),ci(8,r);break;case 23:break;case 22:var x=r.stateNode;r.memoizedState!==null?x._visibility&2?vl(n,r,s,o,i):si(n,r):(x._visibility|=2,vl(n,r,s,o,i)),i&&h&2048&&Mr(r.alternate,r);break;case 24:vl(n,r,s,o,i),i&&h&2048&&Or(r.alternate,r);break;default:vl(n,r,s,o,i)}t=t.sibling}}function si(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,i=l.flags;switch(l.tag){case 22:si(a,l),i&2048&&Mr(l.alternate,l);break;case 24:si(a,l),i&2048&&Or(l.alternate,l);break;default:si(a,l)}t=t.sibling}}var oi=8192;function bl(e,t,a){if(e.subtreeFlags&oi)for(e=e.child;e!==null;)vd(e,t,a),e=e.sibling}function vd(e,t,a){switch(e.tag){case 26:bl(e,t,a),e.flags&oi&&e.memoizedState!==null&&uh(a,St,e.memoizedState,e.memoizedProps);break;case 5:bl(e,t,a);break;case 3:case 4:var l=St;St=_n(e.stateNode.containerInfo),bl(e,t,a),St=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=oi,oi=16777216,bl(e,t,a),oi=l):bl(e,t,a));break;default:bl(e,t,a)}}function bd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ui(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Me=l,yd(l,e)}bd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xd(e),e=e.sibling}function xd(e){switch(e.tag){case 0:case 11:case 15:ui(e),e.flags&2048&&ua(9,e,e.return);break;case 3:ui(e);break;case 12:ui(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,bn(e)):ui(e);break;default:ui(e)}}function bn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Me=l,yd(l,e)}bd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ua(8,t,t.return),bn(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,bn(t));break;default:bn(t)}e=e.sibling}}function yd(e,t){for(;Me!==null;){var a=Me;switch(a.tag){case 0:case 11:case 15:ua(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Kl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Me=l;else e:for(a=e;Me!==null;){l=Me;var i=l.sibling,n=l.return;if(ud(l),l===a){Me=null;break e}if(i!==null){i.return=n,Me=i;break e}Me=n}}}var Am={getCacheForType:function(e){var t=De(je),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return De(je).controller.signal}},Em=typeof WeakMap=="function"?WeakMap:Map,te=0,de=null,Z=null,J=0,ie=0,ct=null,da=!1,xl=!1,wr=!1,Jt=0,be=0,fa=0,Ga=0,_r=0,rt=0,yl=0,di=null,$e=null,kr=!1,xn=0,Nd=0,yn=1/0,Nn=null,pa=null,Ee=0,ma=null,Nl=null,It=0,Dr=0,Rr=null,jd=null,fi=0,Cr=null;function st(){return(te&2)!==0&&J!==0?J&-J:y.T!==null?Yr():Us()}function Sd(){if(rt===0)if((J&536870912)===0||W){var e=Mi;Mi<<=1,(Mi&3932160)===0&&(Mi=262144),rt=e}else rt=536870912;return e=it.current,e!==null&&(e.flags|=32),rt}function We(e,t,a){(e===de&&(ie===2||ie===9)||e.cancelPendingCommit!==null)&&(jl(e,0),ha(e,J,rt,!1)),Dl(e,a),((te&2)===0||e!==de)&&(e===de&&((te&2)===0&&(Ga|=a),be===4&&ha(e,J,rt,!1)),_t(e))}function zd(e,t,a){if((te&6)!==0)throw Error(f(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||kl(e,t),i=l?Om(e,t):Ur(e,t,!0),n=l;do{if(i===0){xl&&!l&&ha(e,t,0,!1);break}else{if(a=e.current.alternate,n&&!Tm(a)){i=Ur(e,t,!1),n=!1;continue}if(i===2){if(n=t,e.errorRecoveryDisabledLanes&n)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var s=e;i=di;var o=s.current.memoizedState.isDehydrated;if(o&&(jl(s,r).flags|=256),r=Ur(s,r,!1),r!==2){if(wr&&!o){s.errorRecoveryDisabledLanes|=n,Ga|=n,i=4;break e}n=$e,$e=i,n!==null&&($e===null?$e=n:$e.push.apply($e,n))}i=r}if(n=!1,i!==2)continue}}if(i===1){jl(e,0),ha(e,t,0,!0);break}e:{switch(l=e,n=i,n){case 0:case 1:throw Error(f(345));case 4:if((t&4194048)!==t)break;case 6:ha(l,t,rt,!da);break e;case 2:$e=null;break;case 3:case 5:break;default:throw Error(f(329))}if((t&62914560)===t&&(i=xn+300-Pe(),10<i)){if(ha(l,t,rt,!da),wi(l,0,!0)!==0)break e;It=t,l.timeoutHandle=tf(Ad.bind(null,l,a,$e,Nn,kr,t,rt,Ga,yl,da,n,"Throttled",-0,0),i);break e}Ad(l,a,$e,Nn,kr,t,rt,Ga,yl,da,n,null,-0,0)}}break}while(!0);_t(e)}function Ad(e,t,a,l,i,n,r,s,o,h,x,j,g,v){if(e.timeoutHandle=-1,j=t.subtreeFlags,j&8192||(j&16785408)===16785408){j={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Rt},vd(t,n,j);var w=(n&62914560)===n?xn-Pe():(n&4194048)===n?Nd-Pe():0;if(w=dh(j,w),w!==null){It=n,e.cancelPendingCommit=w(Dd.bind(null,e,t,n,a,l,i,r,s,o,x,j,null,g,v)),ha(e,n,r,!h);return}}Dd(e,t,n,a,l,i,r,s,o)}function Tm(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var i=a[l],n=i.getSnapshot;i=i.value;try{if(!at(n(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ha(e,t,a,l){t&=~_r,t&=~Ga,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var i=t;0<i;){var n=31-tt(i),r=1<<n;l[n]=-1,i&=~r}a!==0&&Rs(e,a,t)}function jn(){return(te&6)===0?(pi(0),!1):!0}function Hr(){if(Z!==null){if(ie===0)var e=Z.return;else e=Z,Bt=Da=null,Fc(e),fl=null,Il=0,e=Z;for(;e!==null;)ad(e.alternate,e),e=e.return;Z=null}}function jl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Km(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),It=0,Hr(),de=e,Z=a=Ht(e.current,null),J=t,ie=0,ct=null,da=!1,xl=kl(e,t),wr=!1,yl=rt=_r=Ga=fa=be=0,$e=di=null,kr=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var i=31-tt(l),n=1<<i;t|=e[i],l&=~n}return Jt=t,Gi(),a}function Ed(e,t){G=null,y.H=li,t===dl||t===$i?(t=Go(),ie=3):t===qc?(t=Go(),ie=4):ie=t===mr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ct=t,Z===null&&(be=1,dn(e,pt(t,e.current)))}function Td(){var e=it.current;return e===null?!0:(J&4194048)===J?vt===null:(J&62914560)===J||(J&536870912)!==0?e===vt:!1}function Md(){var e=y.H;return y.H=li,e===null?li:e}function Od(){var e=y.A;return y.A=Am,e}function Sn(){be=4,da||(J&4194048)!==J&&it.current!==null||(xl=!0),(fa&134217727)===0&&(Ga&134217727)===0||de===null||ha(de,J,rt,!1)}function Ur(e,t,a){var l=te;te|=2;var i=Md(),n=Od();(de!==e||J!==t)&&(Nn=null,jl(e,t)),t=!1;var r=be;e:do try{if(ie!==0&&Z!==null){var s=Z,o=ct;switch(ie){case 8:Hr(),r=6;break e;case 3:case 2:case 9:case 6:it.current===null&&(t=!0);var h=ie;if(ie=0,ct=null,Sl(e,s,o,h),a&&xl){r=0;break e}break;default:h=ie,ie=0,ct=null,Sl(e,s,o,h)}}Mm(),r=be;break}catch(x){Ed(e,x)}while(!0);return t&&e.shellSuspendCounter++,Bt=Da=null,te=l,y.H=i,y.A=n,Z===null&&(de=null,J=0,Gi()),r}function Mm(){for(;Z!==null;)wd(Z)}function Om(e,t){var a=te;te|=2;var l=Md(),i=Od();de!==e||J!==t?(Nn=null,yn=Pe()+500,jl(e,t)):xl=kl(e,t);e:do try{if(ie!==0&&Z!==null){t=Z;var n=ct;t:switch(ie){case 1:ie=0,ct=null,Sl(e,t,n,1);break;case 2:case 9:if(qo(n)){ie=0,ct=null,_d(t);break}t=function(){ie!==2&&ie!==9||de!==e||(ie=7),_t(e)},n.then(t,t);break e;case 3:ie=7;break e;case 4:ie=5;break e;case 7:qo(n)?(ie=0,ct=null,_d(t)):(ie=0,ct=null,Sl(e,t,n,7));break;case 5:var r=null;switch(Z.tag){case 26:r=Z.memoizedState;case 5:case 27:var s=Z;if(r?vf(r):s.stateNode.complete){ie=0,ct=null;var o=s.sibling;if(o!==null)Z=o;else{var h=s.return;h!==null?(Z=h,zn(h)):Z=null}break t}}ie=0,ct=null,Sl(e,t,n,5);break;case 6:ie=0,ct=null,Sl(e,t,n,6);break;case 8:Hr(),be=6;break e;default:throw Error(f(462))}}wm();break}catch(x){Ed(e,x)}while(!0);return Bt=Da=null,y.H=l,y.A=i,te=a,Z!==null?0:(de=null,J=0,Gi(),be)}function wm(){for(;Z!==null&&!Pf();)wd(Z)}function wd(e){var t=ed(e.alternate,e,Jt);e.memoizedProps=e.pendingProps,t===null?zn(e):Z=t}function _d(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Ju(a,t,t.pendingProps,t.type,void 0,J);break;case 11:t=Ju(a,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Fc(t);default:ad(a,t),t=Z=Oo(t,Jt),t=ed(a,t,Jt)}e.memoizedProps=e.pendingProps,t===null?zn(e):Z=t}function Sl(e,t,a,l){Bt=Da=null,Fc(t),fl=null,Il=0;var i=t.return;try{if(bm(e,i,t,a,J)){be=1,dn(e,pt(a,e.current)),Z=null;return}}catch(n){if(i!==null)throw Z=i,n;be=1,dn(e,pt(a,e.current)),Z=null;return}t.flags&32768?(W||l===1?e=!0:xl||(J&536870912)!==0?e=!1:(da=e=!0,(l===2||l===9||l===3||l===6)&&(l=it.current,l!==null&&l.tag===13&&(l.flags|=16384))),kd(t,e)):zn(t)}function zn(e){var t=e;do{if((t.flags&32768)!==0){kd(t,da);return}e=t.return;var a=Nm(t.alternate,t,Jt);if(a!==null){Z=a;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);be===0&&(be=5)}function kd(e,t){do{var a=jm(e.alternate,e);if(a!==null){a.flags&=32767,Z=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Z=e;return}Z=e=a}while(e!==null);be=6,Z=null}function Dd(e,t,a,l,i,n,r,s,o){e.cancelPendingCommit=null;do An();while(Ee!==0);if((te&6)!==0)throw Error(f(327));if(t!==null){if(t===e.current)throw Error(f(177));if(n=t.lanes|t.childLanes,n|=Ac,op(e,a,n,r,s,o),e===de&&(Z=de=null,J=0),Nl=t,ma=e,It=a,Dr=n,Rr=i,jd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Rm(Ei,function(){return Bd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=y.T,y.T=null,i=M.p,M.p=2,r=te,te|=4;try{Sm(e,t,a)}finally{te=r,M.p=i,y.T=l}}Ee=1,Rd(),Cd(),Hd()}}function Rd(){if(Ee===1){Ee=0;var e=ma,t=Nl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=y.T,y.T=null;var l=M.p;M.p=2;var i=te;te|=4;try{md(t,e);var n=Ir,r=yo(e.containerInfo),s=n.focusedElem,o=n.selectionRange;if(r!==s&&s&&s.ownerDocument&&xo(s.ownerDocument.documentElement,s)){if(o!==null&&yc(s)){var h=o.start,x=o.end;if(x===void 0&&(x=h),"selectionStart"in s)s.selectionStart=h,s.selectionEnd=Math.min(x,s.value.length);else{var j=s.ownerDocument||document,g=j&&j.defaultView||window;if(g.getSelection){var v=g.getSelection(),w=s.textContent.length,B=Math.min(o.start,w),oe=o.end===void 0?B:Math.min(o.end,w);!v.extend&&B>oe&&(r=oe,oe=B,B=r);var p=bo(s,B),u=bo(s,oe);if(p&&u&&(v.rangeCount!==1||v.anchorNode!==p.node||v.anchorOffset!==p.offset||v.focusNode!==u.node||v.focusOffset!==u.offset)){var m=j.createRange();m.setStart(p.node,p.offset),v.removeAllRanges(),B>oe?(v.addRange(m),v.extend(u.node,u.offset)):(m.setEnd(u.node,u.offset),v.addRange(m))}}}}for(j=[],v=s;v=v.parentNode;)v.nodeType===1&&j.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<j.length;s++){var N=j[s];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}Un=!!Jr,Ir=Jr=null}finally{te=i,M.p=l,y.T=a}}e.current=t,Ee=2}}function Cd(){if(Ee===2){Ee=0;var e=ma,t=Nl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=y.T,y.T=null;var l=M.p;M.p=2;var i=te;te|=4;try{od(e,t.alternate,t)}finally{te=i,M.p=l,y.T=a}}Ee=3}}function Hd(){if(Ee===4||Ee===3){Ee=0,ep();var e=ma,t=Nl,a=It,l=jd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ee=5:(Ee=0,Nl=ma=null,Ud(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(pa=null),tc(a),t=t.stateNode,et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(_l,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=y.T,i=M.p,M.p=2,y.T=null;try{for(var n=e.onRecoverableError,r=0;r<l.length;r++){var s=l[r];n(s.value,{componentStack:s.stack})}}finally{y.T=t,M.p=i}}(It&3)!==0&&An(),_t(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===Cr?fi++:(fi=0,Cr=e):fi=0,pi(0)}}function Ud(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Kl(t)))}function An(){return Rd(),Cd(),Hd(),Bd()}function Bd(){if(Ee!==5)return!1;var e=ma,t=Dr;Dr=0;var a=tc(It),l=y.T,i=M.p;try{M.p=32>a?32:a,y.T=null,a=Rr,Rr=null;var n=ma,r=It;if(Ee=0,Nl=ma=null,It=0,(te&6)!==0)throw Error(f(331));var s=te;if(te|=4,xd(n.current),gd(n,n.current,r,a),te=s,pi(0,!1),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(_l,n)}catch{}return!0}finally{M.p=i,y.T=l,Ud(e,t)}}function Ld(e,t,a){t=pt(a,t),t=pr(e.stateNode,t,2),e=ra(e,t,2),e!==null&&(Dl(e,2),_t(e))}function ne(e,t,a){if(e.tag===3)Ld(e,e,a);else for(;t!==null;){if(t.tag===3){Ld(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(pa===null||!pa.has(l))){e=pt(a,e),a=qu(2),l=ra(t,a,2),l!==null&&(Yu(a,l,t,e),Dl(l,2),_t(l));break}}t=t.return}}function Br(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Em;var i=new Set;l.set(t,i)}else i=l.get(t),i===void 0&&(i=new Set,l.set(t,i));i.has(a)||(wr=!0,i.add(a),e=_m.bind(null,e,t,a),t.then(e,e))}function _m(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,de===e&&(J&a)===a&&(be===4||be===3&&(J&62914560)===J&&300>Pe()-xn?(te&2)===0&&jl(e,0):_r|=a,yl===J&&(yl=0)),_t(e)}function qd(e,t){t===0&&(t=Ds()),e=wa(e,t),e!==null&&(Dl(e,t),_t(e))}function km(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),qd(e,a)}function Dm(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(f(314))}l!==null&&l.delete(t),qd(e,a)}function Rm(e,t){return Wn(e,t)}var En=null,zl=null,Lr=!1,Tn=!1,qr=!1,ga=0;function _t(e){e!==zl&&e.next===null&&(zl===null?En=zl=e:zl=zl.next=e),Tn=!0,Lr||(Lr=!0,Hm())}function pi(e,t){if(!qr&&Tn){qr=!0;do for(var a=!1,l=En;l!==null;){if(e!==0){var i=l.pendingLanes;if(i===0)var n=0;else{var r=l.suspendedLanes,s=l.pingedLanes;n=(1<<31-tt(42|e)+1)-1,n&=i&~(r&~s),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(a=!0,Xd(l,n))}else n=J,n=wi(l,l===de?n:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(n&3)===0||kl(l,n)||(a=!0,Xd(l,n));l=l.next}while(a);qr=!1}}function Cm(){Yd()}function Yd(){Tn=Lr=!1;var e=0;ga!==0&&Zm()&&(e=ga);for(var t=Pe(),a=null,l=En;l!==null;){var i=l.next,n=Gd(l,t);n===0?(l.next=null,a===null?En=i:a.next=i,i===null&&(zl=a)):(a=l,(e!==0||(n&3)!==0)&&(Tn=!0)),l=i}Ee!==0&&Ee!==5||pi(e),ga!==0&&(ga=0)}function Gd(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,n=e.pendingLanes&-62914561;0<n;){var r=31-tt(n),s=1<<r,o=i[r];o===-1?((s&a)===0||(s&l)!==0)&&(i[r]=sp(s,t)):o<=t&&(e.expiredLanes|=s),n&=~s}if(t=de,a=J,a=wi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(ie===2||ie===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Fn(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||kl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Fn(l),tc(a)){case 2:case 8:a=_s;break;case 32:a=Ei;break;case 268435456:a=ks;break;default:a=Ei}return l=Vd.bind(null,e),a=Wn(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Fn(l),e.callbackPriority=2,e.callbackNode=null,2}function Vd(e,t){if(Ee!==0&&Ee!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(An()&&e.callbackNode!==a)return null;var l=J;return l=wi(e,e===de?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(zd(e,l,t),Gd(e,Pe()),e.callbackNode!=null&&e.callbackNode===a?Vd.bind(null,e):null)}function Xd(e,t){if(An())return null;zd(e,t,!0)}function Hm(){Jm(function(){(te&6)!==0?Wn(ws,Cm):Yd()})}function Yr(){if(ga===0){var e=ol;e===0&&(e=Ti,Ti<<=1,(Ti&261888)===0&&(Ti=256)),ga=e}return ga}function Qd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ri(""+e)}function Zd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Um(e,t,a,l,i){if(t==="submit"&&a&&a.stateNode===i){var n=Qd((i[Qe]||null).action),r=l.submitter;r&&(t=(t=r[Qe]||null)?Qd(t.formAction):r.getAttribute("formAction"),t!==null&&(n=t,r=null));var s=new Bi("action","action",null,l,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ga!==0){var o=r?Zd(i,r):new FormData(i);rr(a,{pending:!0,data:o,method:i.method,action:n},null,o)}}else typeof n=="function"&&(s.preventDefault(),o=r?Zd(i,r):new FormData(i),rr(a,{pending:!0,data:o,method:i.method,action:n},n,o))},currentTarget:i}]})}}for(var Gr=0;Gr<zc.length;Gr++){var Vr=zc[Gr],Bm=Vr.toLowerCase(),Lm=Vr[0].toUpperCase()+Vr.slice(1);jt(Bm,"on"+Lm)}jt(So,"onAnimationEnd"),jt(zo,"onAnimationIteration"),jt(Ao,"onAnimationStart"),jt("dblclick","onDoubleClick"),jt("focusin","onFocus"),jt("focusout","onBlur"),jt(tm,"onTransitionRun"),jt(am,"onTransitionStart"),jt(lm,"onTransitionCancel"),jt(Eo,"onTransitionEnd"),Ia("onMouseEnter",["mouseout","mouseover"]),Ia("onMouseLeave",["mouseout","mouseover"]),Ia("onPointerEnter",["pointerout","pointerover"]),Ia("onPointerLeave",["pointerout","pointerover"]),Ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mi));function Kd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],i=l.event;l=l.listeners;e:{var n=void 0;if(t)for(var r=l.length-1;0<=r;r--){var s=l[r],o=s.instance,h=s.currentTarget;if(s=s.listener,o!==n&&i.isPropagationStopped())break e;n=s,i.currentTarget=h;try{n(i)}catch(x){Yi(x)}i.currentTarget=null,n=o}else for(r=0;r<l.length;r++){if(s=l[r],o=s.instance,h=s.currentTarget,s=s.listener,o!==n&&i.isPropagationStopped())break e;n=s,i.currentTarget=h;try{n(i)}catch(x){Yi(x)}i.currentTarget=null,n=o}}}}function K(e,t){var a=t[ac];a===void 0&&(a=t[ac]=new Set);var l=e+"__bubble";a.has(l)||(Jd(t,e,2,!1),a.add(l))}function Xr(e,t,a){var l=0;t&&(l|=4),Jd(a,e,l,t)}var Mn="_reactListening"+Math.random().toString(36).slice(2);function Qr(e){if(!e[Mn]){e[Mn]=!0,qs.forEach(function(a){a!=="selectionchange"&&(qm.has(a)||Xr(a,!1,e),Xr(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mn]||(t[Mn]=!0,Xr("selectionchange",!1,t))}}function Jd(e,t,a,l){switch(zf(t)){case 2:var i=mh;break;case 8:i=hh;break;default:i=cs}a=i.bind(null,t,a,e),i=void 0,!dc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Zr(e,t,a,l,i){var n=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var s=l.stateNode.containerInfo;if(s===i)break;if(r===4)for(r=l.return;r!==null;){var o=r.tag;if((o===3||o===4)&&r.stateNode.containerInfo===i)return;r=r.return}for(;s!==null;){if(r=Za(s),r===null)return;if(o=r.tag,o===5||o===6||o===26||o===27){l=n=r;continue e}s=s.parentNode}}l=l.return}Fs(function(){var h=n,x=oc(a),j=[];e:{var g=To.get(e);if(g!==void 0){var v=Bi,w=e;switch(e){case"keypress":if(Hi(a)===0)break e;case"keydown":case"keyup":v=Dp;break;case"focusin":w="focus",v=hc;break;case"focusout":w="blur",v=hc;break;case"beforeblur":case"afterblur":v=hc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=to;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Np;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Hp;break;case So:case zo:case Ao:v=zp;break;case Eo:v=Bp;break;case"scroll":case"scrollend":v=xp;break;case"wheel":v=qp;break;case"copy":case"cut":case"paste":v=Ep;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=lo;break;case"toggle":case"beforetoggle":v=Gp}var B=(t&4)!==0,oe=!B&&(e==="scroll"||e==="scrollend"),p=B?g!==null?g+"Capture":null:g;B=[];for(var u=h,m;u!==null;){var N=u;if(m=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||m===null||p===null||(N=Hl(u,p),N!=null&&B.push(hi(u,N,m))),oe)break;u=u.return}0<B.length&&(g=new v(g,w,null,a,x),j.push({event:g,listeners:B}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&a!==sc&&(w=a.relatedTarget||a.fromElement)&&(Za(w)||w[Qa]))break e;if((v||g)&&(g=x.window===x?x:(g=x.ownerDocument)?g.defaultView||g.parentWindow:window,v?(w=a.relatedTarget||a.toElement,v=h,w=w?Za(w):null,w!==null&&(oe=_(w),B=w.tag,w!==oe||B!==5&&B!==27&&B!==6)&&(w=null)):(v=null,w=h),v!==w)){if(B=to,N="onMouseLeave",p="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(B=lo,N="onPointerLeave",p="onPointerEnter",u="pointer"),oe=v==null?g:Cl(v),m=w==null?g:Cl(w),g=new B(N,u+"leave",v,a,x),g.target=oe,g.relatedTarget=m,N=null,Za(x)===h&&(B=new B(p,u+"enter",w,a,x),B.target=m,B.relatedTarget=oe,N=B),oe=N,v&&w)t:{for(B=Ym,p=v,u=w,m=0,N=p;N;N=B(N))m++;N=0;for(var C=u;C;C=B(C))N++;for(;0<m-N;)p=B(p),m--;for(;0<N-m;)u=B(u),N--;for(;m--;){if(p===u||u!==null&&p===u.alternate){B=p;break t}p=B(p),u=B(u)}B=null}else B=null;v!==null&&Id(j,g,v,B,!1),w!==null&&oe!==null&&Id(j,oe,w,B,!0)}}e:{if(g=h?Cl(h):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var P=fo;else if(oo(g))if(po)P=Fp;else{P=$p;var R=Ip}else v=g.nodeName,!v||v.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?h&&rc(h.elementType)&&(P=fo):P=Wp;if(P&&(P=P(e,h))){uo(j,P,a,x);break e}R&&R(e,g,h),e==="focusout"&&h&&g.type==="number"&&h.memoizedProps.value!=null&&cc(g,"number",g.value)}switch(R=h?Cl(h):window,e){case"focusin":(oo(R)||R.contentEditable==="true")&&(tl=R,Nc=h,Xl=null);break;case"focusout":Xl=Nc=tl=null;break;case"mousedown":jc=!0;break;case"contextmenu":case"mouseup":case"dragend":jc=!1,No(j,a,x);break;case"selectionchange":if(em)break;case"keydown":case"keyup":No(j,a,x)}var V;if(vc)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else el?ro(e,a)&&(I="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(I="onCompositionStart");I&&(io&&a.locale!=="ko"&&(el||I!=="onCompositionStart"?I==="onCompositionEnd"&&el&&(V=Ps()):(ea=x,fc="value"in ea?ea.value:ea.textContent,el=!0)),R=On(h,I),0<R.length&&(I=new ao(I,e,null,a,x),j.push({event:I,listeners:R}),V?I.data=V:(V=so(a),V!==null&&(I.data=V)))),(V=Xp?Qp(e,a):Zp(e,a))&&(I=On(h,"onBeforeInput"),0<I.length&&(R=new ao("onBeforeInput","beforeinput",null,a,x),j.push({event:R,listeners:I}),R.data=V)),Um(j,e,h,a,x)}Kd(j,t)})}function hi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function On(e,t){for(var a=t+"Capture",l=[];e!==null;){var i=e,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=Hl(e,a),i!=null&&l.unshift(hi(e,i,n)),i=Hl(e,t),i!=null&&l.push(hi(e,i,n))),e.tag===3)return l;e=e.return}return[]}function Ym(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Id(e,t,a,l,i){for(var n=t._reactName,r=[];a!==null&&a!==l;){var s=a,o=s.alternate,h=s.stateNode;if(s=s.tag,o!==null&&o===l)break;s!==5&&s!==26&&s!==27||h===null||(o=h,i?(h=Hl(a,n),h!=null&&r.unshift(hi(a,h,o))):i||(h=Hl(a,n),h!=null&&r.push(hi(a,h,o)))),a=a.return}r.length!==0&&e.push({event:t,listeners:r})}var Gm=/\r\n?/g,Vm=/\u0000|\uFFFD/g;function $d(e){return(typeof e=="string"?e:""+e).replace(Gm,`
`).replace(Vm,"")}function Wd(e,t){return t=$d(t),$d(e)===t}function se(e,t,a,l,i,n){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Wa(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Wa(e,""+l);break;case"className":ki(e,"class",l);break;case"tabIndex":ki(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ki(e,a,l);break;case"style":$s(e,l,n);break;case"data":if(t!=="object"){ki(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Ri(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(a==="formAction"?(t!=="input"&&se(e,t,"name",i.name,i,null),se(e,t,"formEncType",i.formEncType,i,null),se(e,t,"formMethod",i.formMethod,i,null),se(e,t,"formTarget",i.formTarget,i,null)):(se(e,t,"encType",i.encType,i,null),se(e,t,"method",i.method,i,null),se(e,t,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Ri(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Rt);break;case"onScroll":l!=null&&K("scroll",e);break;case"onScrollEnd":l!=null&&K("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(f(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Ri(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":K("beforetoggle",e),K("toggle",e),_i(e,"popover",l);break;case"xlinkActuate":Dt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Dt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Dt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Dt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Dt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Dt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":_i(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=vp.get(a)||a,_i(e,a,l))}}function Kr(e,t,a,l,i,n){switch(a){case"style":$s(e,l,n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(f(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Wa(e,l):(typeof l=="number"||typeof l=="bigint")&&Wa(e,""+l);break;case"onScroll":l!=null&&K("scroll",e);break;case"onScrollEnd":l!=null&&K("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Rt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ys.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),n=e[Qe]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(t,n,i),typeof l=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,i);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):_i(e,a,l)}}}function Ce(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":K("error",e),K("load",e);var l=!1,i=!1,n;for(n in a)if(a.hasOwnProperty(n)){var r=a[n];if(r!=null)switch(n){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:se(e,t,n,r,a,null)}}i&&se(e,t,"srcSet",a.srcSet,a,null),l&&se(e,t,"src",a.src,a,null);return;case"input":K("invalid",e);var s=n=r=i=null,o=null,h=null;for(l in a)if(a.hasOwnProperty(l)){var x=a[l];if(x!=null)switch(l){case"name":i=x;break;case"type":r=x;break;case"checked":o=x;break;case"defaultChecked":h=x;break;case"value":n=x;break;case"defaultValue":s=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(f(137,t));break;default:se(e,t,l,x,a,null)}}Zs(e,n,s,o,h,r,i,!1);return;case"select":K("invalid",e),l=r=n=null;for(i in a)if(a.hasOwnProperty(i)&&(s=a[i],s!=null))switch(i){case"value":n=s;break;case"defaultValue":r=s;break;case"multiple":l=s;default:se(e,t,i,s,a,null)}t=n,a=r,e.multiple=!!l,t!=null?$a(e,!!l,t,!1):a!=null&&$a(e,!!l,a,!0);return;case"textarea":K("invalid",e),n=i=l=null;for(r in a)if(a.hasOwnProperty(r)&&(s=a[r],s!=null))switch(r){case"value":l=s;break;case"defaultValue":i=s;break;case"children":n=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(f(91));break;default:se(e,t,r,s,a,null)}Js(e,l,i,n);return;case"option":for(o in a)if(a.hasOwnProperty(o)&&(l=a[o],l!=null))switch(o){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:se(e,t,o,l,a,null)}return;case"dialog":K("beforetoggle",e),K("toggle",e),K("cancel",e),K("close",e);break;case"iframe":case"object":K("load",e);break;case"video":case"audio":for(l=0;l<mi.length;l++)K(mi[l],e);break;case"image":K("error",e),K("load",e);break;case"details":K("toggle",e);break;case"embed":case"source":case"link":K("error",e),K("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in a)if(a.hasOwnProperty(h)&&(l=a[h],l!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:se(e,t,h,l,a,null)}return;default:if(rc(t)){for(x in a)a.hasOwnProperty(x)&&(l=a[x],l!==void 0&&Kr(e,t,x,l,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(l=a[s],l!=null&&se(e,t,s,l,a,null))}function Xm(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,r=null,s=null,o=null,h=null,x=null;for(v in a){var j=a[v];if(a.hasOwnProperty(v)&&j!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":o=j;default:l.hasOwnProperty(v)||se(e,t,v,null,l,j)}}for(var g in l){var v=l[g];if(j=a[g],l.hasOwnProperty(g)&&(v!=null||j!=null))switch(g){case"type":n=v;break;case"name":i=v;break;case"checked":h=v;break;case"defaultChecked":x=v;break;case"value":r=v;break;case"defaultValue":s=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(f(137,t));break;default:v!==j&&se(e,t,g,v,l,j)}}nc(e,r,s,o,h,x,n,i);return;case"select":v=r=s=g=null;for(n in a)if(o=a[n],a.hasOwnProperty(n)&&o!=null)switch(n){case"value":break;case"multiple":v=o;default:l.hasOwnProperty(n)||se(e,t,n,null,l,o)}for(i in l)if(n=l[i],o=a[i],l.hasOwnProperty(i)&&(n!=null||o!=null))switch(i){case"value":g=n;break;case"defaultValue":s=n;break;case"multiple":r=n;default:n!==o&&se(e,t,i,n,l,o)}t=s,a=r,l=v,g!=null?$a(e,!!a,g,!1):!!l!=!!a&&(t!=null?$a(e,!!a,t,!0):$a(e,!!a,a?[]:"",!1));return;case"textarea":v=g=null;for(s in a)if(i=a[s],a.hasOwnProperty(s)&&i!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:se(e,t,s,null,l,i)}for(r in l)if(i=l[r],n=a[r],l.hasOwnProperty(r)&&(i!=null||n!=null))switch(r){case"value":g=i;break;case"defaultValue":v=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(f(91));break;default:i!==n&&se(e,t,r,i,l,n)}Ks(e,g,v);return;case"option":for(var w in a)if(g=a[w],a.hasOwnProperty(w)&&g!=null&&!l.hasOwnProperty(w))switch(w){case"selected":e.selected=!1;break;default:se(e,t,w,null,l,g)}for(o in l)if(g=l[o],v=a[o],l.hasOwnProperty(o)&&g!==v&&(g!=null||v!=null))switch(o){case"selected":e.selected=g&&typeof g!="function"&&typeof g!="symbol";break;default:se(e,t,o,g,l,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var B in a)g=a[B],a.hasOwnProperty(B)&&g!=null&&!l.hasOwnProperty(B)&&se(e,t,B,null,l,g);for(h in l)if(g=l[h],v=a[h],l.hasOwnProperty(h)&&g!==v&&(g!=null||v!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(f(137,t));break;default:se(e,t,h,g,l,v)}return;default:if(rc(t)){for(var oe in a)g=a[oe],a.hasOwnProperty(oe)&&g!==void 0&&!l.hasOwnProperty(oe)&&Kr(e,t,oe,void 0,l,g);for(x in l)g=l[x],v=a[x],!l.hasOwnProperty(x)||g===v||g===void 0&&v===void 0||Kr(e,t,x,g,l,v);return}}for(var p in a)g=a[p],a.hasOwnProperty(p)&&g!=null&&!l.hasOwnProperty(p)&&se(e,t,p,null,l,g);for(j in l)g=l[j],v=a[j],!l.hasOwnProperty(j)||g===v||g==null&&v==null||se(e,t,j,g,l,v)}function Fd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Qm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var i=a[l],n=i.transferSize,r=i.initiatorType,s=i.duration;if(n&&s&&Fd(r)){for(r=0,s=i.responseEnd,l+=1;l<a.length;l++){var o=a[l],h=o.startTime;if(h>s)break;var x=o.transferSize,j=o.initiatorType;x&&Fd(j)&&(o=o.responseEnd,r+=x*(o<s?1:(s-h)/(o-h)))}if(--l,t+=8*(n+r)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Jr=null,Ir=null;function wn(e){return e.nodeType===9?e:e.ownerDocument}function Pd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ef(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function $r(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wr=null;function Zm(){var e=window.event;return e&&e.type==="popstate"?e===Wr?!1:(Wr=e,!0):(Wr=null,!1)}var tf=typeof setTimeout=="function"?setTimeout:void 0,Km=typeof clearTimeout=="function"?clearTimeout:void 0,af=typeof Promise=="function"?Promise:void 0,Jm=typeof queueMicrotask=="function"?queueMicrotask:typeof af<"u"?function(e){return af.resolve(null).then(e).catch(Im)}:tf;function Im(e){setTimeout(function(){throw e})}function va(e){return e==="head"}function lf(e,t){var a=t,l=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(i),Ml(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")gi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,gi(a);for(var n=a.firstChild;n;){var r=n.nextSibling,s=n.nodeName;n[Rl]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&n.rel.toLowerCase()==="stylesheet"||a.removeChild(n),n=r}}else a==="body"&&gi(e.ownerDocument.body);a=i}while(a);Ml(t)}function nf(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Fr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Fr(a),lc(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function $m(e,t,a,l){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Rl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(n=e.getAttribute("rel"),n==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(n!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(n=e.getAttribute("src"),(n!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===n)return e}else return e;if(e=bt(e.nextSibling),e===null)break}return null}function Wm(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=bt(e.nextSibling),e===null))return null;return e}function cf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=bt(e.nextSibling),e===null))return null;return e}function Pr(e){return e.data==="$?"||e.data==="$~"}function es(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Fm(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ts=null;function rf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return bt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function sf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function of(e,t,a){switch(t=wn(a),e){case"html":if(e=t.documentElement,!e)throw Error(f(452));return e;case"head":if(e=t.head,!e)throw Error(f(453));return e;case"body":if(e=t.body,!e)throw Error(f(454));return e;default:throw Error(f(451))}}function gi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);lc(e)}var xt=new Map,uf=new Set;function _n(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $t=M.d;M.d={f:Pm,r:eh,D:th,C:ah,L:lh,m:ih,X:ch,S:nh,M:rh};function Pm(){var e=$t.f(),t=jn();return e||t}function eh(e){var t=Ka(e);t!==null&&t.tag===5&&t.type==="form"?Eu(t):$t.r(e)}var Al=typeof document>"u"?null:document;function df(e,t,a){var l=Al;if(l&&typeof t=="string"&&t){var i=dt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),uf.has(i)||(uf.add(i),e={rel:e,crossOrigin:a,href:t},l.querySelector(i)===null&&(t=l.createElement("link"),Ce(t,"link",e),Te(t),l.head.appendChild(t)))}}function th(e){$t.D(e),df("dns-prefetch",e,null)}function ah(e,t){$t.C(e,t),df("preconnect",e,t)}function lh(e,t,a){$t.L(e,t,a);var l=Al;if(l&&e&&t){var i='link[rel="preload"][as="'+dt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+dt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+dt(a.imageSizes)+'"]')):i+='[href="'+dt(e)+'"]';var n=i;switch(t){case"style":n=El(e);break;case"script":n=Tl(e)}xt.has(n)||(e=U({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),xt.set(n,e),l.querySelector(i)!==null||t==="style"&&l.querySelector(vi(n))||t==="script"&&l.querySelector(bi(n))||(t=l.createElement("link"),Ce(t,"link",e),Te(t),l.head.appendChild(t)))}}function ih(e,t){$t.m(e,t);var a=Al;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+dt(l)+'"][href="'+dt(e)+'"]',n=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=Tl(e)}if(!xt.has(n)&&(e=U({rel:"modulepreload",href:e},t),xt.set(n,e),a.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bi(n)))return}l=a.createElement("link"),Ce(l,"link",e),Te(l),a.head.appendChild(l)}}}function nh(e,t,a){$t.S(e,t,a);var l=Al;if(l&&e){var i=Ja(l).hoistableStyles,n=El(e);t=t||"default";var r=i.get(n);if(!r){var s={loading:0,preload:null};if(r=l.querySelector(vi(n)))s.loading=5;else{e=U({rel:"stylesheet",href:e,"data-precedence":t},a),(a=xt.get(n))&&as(e,a);var o=r=l.createElement("link");Te(o),Ce(o,"link",e),o._p=new Promise(function(h,x){o.onload=h,o.onerror=x}),o.addEventListener("load",function(){s.loading|=1}),o.addEventListener("error",function(){s.loading|=2}),s.loading|=4,kn(r,t,l)}r={type:"stylesheet",instance:r,count:1,state:s},i.set(n,r)}}}function ch(e,t){$t.X(e,t);var a=Al;if(a&&e){var l=Ja(a).hoistableScripts,i=Tl(e),n=l.get(i);n||(n=a.querySelector(bi(i)),n||(e=U({src:e,async:!0},t),(t=xt.get(i))&&ls(e,t),n=a.createElement("script"),Te(n),Ce(n,"link",e),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(i,n))}}function rh(e,t){$t.M(e,t);var a=Al;if(a&&e){var l=Ja(a).hoistableScripts,i=Tl(e),n=l.get(i);n||(n=a.querySelector(bi(i)),n||(e=U({src:e,async:!0,type:"module"},t),(t=xt.get(i))&&ls(e,t),n=a.createElement("script"),Te(n),Ce(n,"link",e),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(i,n))}}function ff(e,t,a,l){var i=(i=Q.current)?_n(i):null;if(!i)throw Error(f(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=El(a.href),a=Ja(i).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=El(a.href);var n=Ja(i).hoistableStyles,r=n.get(e);if(r||(i=i.ownerDocument||i,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(e,r),(n=i.querySelector(vi(e)))&&!n._p&&(r.instance=n,r.state.loading=5),xt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xt.set(e,a),n||sh(i,e,a,r.state))),t&&l===null)throw Error(f(528,""));return r}if(t&&l!==null)throw Error(f(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Tl(a),a=Ja(i).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,e))}}function El(e){return'href="'+dt(e)+'"'}function vi(e){return'link[rel="stylesheet"]['+e+"]"}function pf(e){return U({},e,{"data-precedence":e.precedence,precedence:null})}function sh(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ce(t,"link",a),Te(t),e.head.appendChild(t))}function Tl(e){return'[src="'+dt(e)+'"]'}function bi(e){return"script[async]"+e}function mf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+dt(a.href)+'"]');if(l)return t.instance=l,Te(l),l;var i=U({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Te(l),Ce(l,"style",i),kn(l,a.precedence,e),t.instance=l;case"stylesheet":i=El(a.href);var n=e.querySelector(vi(i));if(n)return t.state.loading|=4,t.instance=n,Te(n),n;l=pf(a),(i=xt.get(i))&&as(l,i),n=(e.ownerDocument||e).createElement("link"),Te(n);var r=n;return r._p=new Promise(function(s,o){r.onload=s,r.onerror=o}),Ce(n,"link",l),t.state.loading|=4,kn(n,a.precedence,e),t.instance=n;case"script":return n=Tl(a.src),(i=e.querySelector(bi(n)))?(t.instance=i,Te(i),i):(l=a,(i=xt.get(n))&&(l=U({},a),ls(l,i)),e=e.ownerDocument||e,i=e.createElement("script"),Te(i),Ce(i,"link",l),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(f(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,kn(l,a.precedence,e));return t.instance}function kn(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,n=i,r=0;r<l.length;r++){var s=l[r];if(s.dataset.precedence===t)n=s;else if(n!==i)break}n?n.parentNode.insertBefore(e,n.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function as(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ls(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Dn=null;function hf(e,t,a){if(Dn===null){var l=new Map,i=Dn=new Map;i.set(a,l)}else i=Dn,l=i.get(a),l||(l=new Map,i.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var n=a[i];if(!(n[Rl]||n[_e]||e==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var r=n.getAttribute(t)||"";r=e+r;var s=l.get(r);s?s.push(n):l.set(r,[n])}}return l}function gf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function oh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function vf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function uh(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=El(l.href),n=t.querySelector(vi(i));if(n){t=n._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Rn.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=n,Te(n);return}n=t.ownerDocument||t,l=pf(l),(i=xt.get(i))&&as(l,i),n=n.createElement("link"),Te(n);var r=n;r._p=new Promise(function(s,o){r.onload=s,r.onerror=o}),Ce(n,"link",l),a.instance=n}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Rn.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var is=0;function dh(e,t){return e.stylesheets&&e.count===0&&Hn(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Hn(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4+t);0<e.imgBytes&&is===0&&(is=62500*Qm());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Hn(e,e.stylesheets),e.unsuspend)){var n=e.unsuspend;e.unsuspend=null,n()}},(e.imgBytes>is?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(i)}}:null}function Rn(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hn(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Cn=null;function Hn(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Cn=new Map,t.forEach(fh,e),Cn=null,Rn.call(e))}function fh(e,t){if(!(t.state.loading&4)){var a=Cn.get(e);if(a)var l=a.get(null);else{a=new Map,Cn.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var r=i[n];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),l=r)}l&&a.set(null,l)}i=t.instance,r=i.getAttribute("data-precedence"),n=a.get(r)||l,n===l&&a.set(null,i),a.set(r,i),this.count++,l=Rn.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),n?n.parentNode.insertBefore(i,n.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var xi={$$typeof:Ue,Provider:null,Consumer:null,_currentValue:L,_currentValue2:L,_threadCount:0};function ph(e,t,a,l,i,n,r,s,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pn(0),this.hiddenUpdates=Pn(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function bf(e,t,a,l,i,n,r,s,o,h,x,j){return e=new ph(e,t,a,r,o,h,x,j,s),t=1,n===!0&&(t|=24),n=lt(3,null,null,t),e.current=n,n.stateNode=e,t=Uc(),t.refCount++,e.pooledCache=t,t.refCount++,n.memoizedState={element:l,isDehydrated:a,cache:t},Yc(n),e}function xf(e){return e?(e=il,e):il}function yf(e,t,a,l,i,n){i=xf(i),l.context===null?l.context=i:l.pendingContext=i,l=ca(t),l.payload={element:a},n=n===void 0?null:n,n!==null&&(l.callback=n),a=ra(e,l,t),a!==null&&(We(a,e,t),Wl(a,e,t))}function Nf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function ns(e,t){Nf(e,t),(e=e.alternate)&&Nf(e,t)}function jf(e){if(e.tag===13||e.tag===31){var t=wa(e,67108864);t!==null&&We(t,e,67108864),ns(e,67108864)}}function Sf(e){if(e.tag===13||e.tag===31){var t=st();t=ec(t);var a=wa(e,t);a!==null&&We(a,e,t),ns(e,t)}}var Un=!0;function mh(e,t,a,l){var i=y.T;y.T=null;var n=M.p;try{M.p=2,cs(e,t,a,l)}finally{M.p=n,y.T=i}}function hh(e,t,a,l){var i=y.T;y.T=null;var n=M.p;try{M.p=8,cs(e,t,a,l)}finally{M.p=n,y.T=i}}function cs(e,t,a,l){if(Un){var i=rs(l);if(i===null)Zr(e,t,l,Bn,a),Af(e,l);else if(vh(i,e,t,a,l))l.stopPropagation();else if(Af(e,l),t&4&&-1<gh.indexOf(e)){for(;i!==null;){var n=Ka(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var r=Aa(n.pendingLanes);if(r!==0){var s=n;for(s.pendingLanes|=2,s.entangledLanes|=2;r;){var o=1<<31-tt(r);s.entanglements[1]|=o,r&=~o}_t(n),(te&6)===0&&(yn=Pe()+500,pi(0))}}break;case 31:case 13:s=wa(n,2),s!==null&&We(s,n,2),jn(),ns(n,2)}if(n=rs(l),n===null&&Zr(e,t,l,Bn,a),n===i)break;i=n}i!==null&&l.stopPropagation()}else Zr(e,t,l,null,a)}}function rs(e){return e=oc(e),ss(e)}var Bn=null;function ss(e){if(Bn=null,e=Za(e),e!==null){var t=_(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=X(t),e!==null)return e;e=null}else if(a===31){if(e=ge(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Bn=e,null}function zf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tp()){case ws:return 2;case _s:return 8;case Ei:case ap:return 32;case ks:return 268435456;default:return 32}default:return 32}}var os=!1,ba=null,xa=null,ya=null,yi=new Map,Ni=new Map,Na=[],gh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Af(e,t){switch(e){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":xa=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":yi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ni.delete(t.pointerId)}}function ji(e,t,a,l,i,n){return e===null||e.nativeEvent!==n?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:n,targetContainers:[i]},t!==null&&(t=Ka(t),t!==null&&jf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function vh(e,t,a,l,i){switch(t){case"focusin":return ba=ji(ba,e,t,a,l,i),!0;case"dragenter":return xa=ji(xa,e,t,a,l,i),!0;case"mouseover":return ya=ji(ya,e,t,a,l,i),!0;case"pointerover":var n=i.pointerId;return yi.set(n,ji(yi.get(n)||null,e,t,a,l,i)),!0;case"gotpointercapture":return n=i.pointerId,Ni.set(n,ji(Ni.get(n)||null,e,t,a,l,i)),!0}return!1}function Ef(e){var t=Za(e.target);if(t!==null){var a=_(t);if(a!==null){if(t=a.tag,t===13){if(t=X(a),t!==null){e.blockedOn=t,Bs(e.priority,function(){Sf(a)});return}}else if(t===31){if(t=ge(a),t!==null){e.blockedOn=t,Bs(e.priority,function(){Sf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ln(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=rs(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);sc=l,a.target.dispatchEvent(l),sc=null}else return t=Ka(a),t!==null&&jf(t),e.blockedOn=a,!1;t.shift()}return!0}function Tf(e,t,a){Ln(e)&&a.delete(t)}function bh(){os=!1,ba!==null&&Ln(ba)&&(ba=null),xa!==null&&Ln(xa)&&(xa=null),ya!==null&&Ln(ya)&&(ya=null),yi.forEach(Tf),Ni.forEach(Tf)}function qn(e,t){e.blockedOn===t&&(e.blockedOn=null,os||(os=!0,b.unstable_scheduleCallback(b.unstable_NormalPriority,bh)))}var Yn=null;function Mf(e){Yn!==e&&(Yn=e,b.unstable_scheduleCallback(b.unstable_NormalPriority,function(){Yn===e&&(Yn=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],i=e[t+2];if(typeof l!="function"){if(ss(l||a)===null)continue;break}var n=Ka(a);n!==null&&(e.splice(t,3),t-=3,rr(n,{pending:!0,data:i,method:a.method,action:l},l,i))}}))}function Ml(e){function t(o){return qn(o,e)}ba!==null&&qn(ba,e),xa!==null&&qn(xa,e),ya!==null&&qn(ya,e),yi.forEach(t),Ni.forEach(t);for(var a=0;a<Na.length;a++){var l=Na[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Na.length&&(a=Na[0],a.blockedOn===null);)Ef(a),a.blockedOn===null&&Na.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var i=a[l],n=a[l+1],r=i[Qe]||null;if(typeof n=="function")r||Mf(a);else if(r){var s=null;if(n&&n.hasAttribute("formAction")){if(i=n,r=n[Qe]||null)s=r.formAction;else if(ss(i)!==null)continue}else s=r.action;typeof s=="function"?a[l+1]=s:(a.splice(l,3),l-=3),Mf(a)}}}function Of(){function e(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(r){return i=r})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function us(e){this._internalRoot=e}Gn.prototype.render=us.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(f(409));var a=t.current,l=st();yf(a,l,e,t,null,null)},Gn.prototype.unmount=us.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yf(e.current,2,null,e,null,null),jn(),t[Qa]=null}};function Gn(e){this._internalRoot=e}Gn.prototype.unstable_scheduleHydration=function(e){if(e){var t=Us();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Na.length&&t!==0&&t<Na[a].priority;a++);Na.splice(a,0,e),a===0&&Ef(e)}};var wf=z.version;if(wf!=="19.2.8")throw Error(f(527,wf,"19.2.8"));M.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(f(188)):(e=Object.keys(e).join(","),Error(f(268,e)));return e=A(t),e=e!==null?F(e):null,e=e===null?null:e.stateNode,e};var xh={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:y,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vn.isDisabled&&Vn.supportsFiber)try{_l=Vn.inject(xh),et=Vn}catch{}}return zi.createRoot=function(e,t){if(!T(e))throw Error(f(299));var a=!1,l="",i=Hu,n=Uu,r=Bu;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(n=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=bf(e,1,!1,null,null,a,l,null,i,n,r,Of),e[Qa]=t.current,Qr(e),new us(t)},zi.hydrateRoot=function(e,t,a){if(!T(e))throw Error(f(299));var l=!1,i="",n=Hu,r=Uu,s=Bu,o=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(o=a.formState)),t=bf(e,1,!0,t,a??null,l,i,o,n,r,s,Of),t.context=xf(null),a=t.current,l=st(),l=ec(l),i=ca(l),i.callback=null,ra(a,i,l),a=l,t.current.lanes=a,Dl(t,a),_t(t),e[Qa]=t.current,Qr(e),new Gn(t)},zi.version="19.2.8",zi}var qf;function wh(){if(qf)return ps.exports;qf=1;function b(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b)}catch(z){console.error(z)}}return b(),ps.exports=Oh(),ps.exports}var _h=wh();const kh=Vf(_h);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=(...b)=>b.filter((z,E,f)=>!!z&&z.trim()!==""&&f.indexOf(z)===E).join(" ").trim();/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=b=>b.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=b=>b.replace(/^([A-Z])|[\s-_]+(\w)/g,(z,E,f)=>f?f.toUpperCase():E.toLowerCase());/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=b=>{const z=Rh(b);return z.charAt(0).toUpperCase()+z.slice(1)};/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vs={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=b=>{for(const z in b)if(z.startsWith("aria-")||z==="role"||z==="title")return!0;return!1},Hh=Oe.createContext({}),Uh=()=>Oe.useContext(Hh),Bh=Oe.forwardRef(({color:b,size:z,strokeWidth:E,absoluteStrokeWidth:f,className:T="",children:_,iconNode:X,...ge},k)=>{const{size:A=24,strokeWidth:F=2,absoluteStrokeWidth:U=!1,color:fe="currentColor",className:Le=""}=Uh()??{},He=f??U?Number(E??F)*24/Number(z??A):E??F;return Oe.createElement("svg",{ref:k,...vs,width:z??A??vs.width,height:z??A??vs.height,stroke:b??fe,strokeWidth:He,className:Xf("lucide",Le,T),...!_&&!Ch(ge)&&{"aria-hidden":"true"},...ge},[...X.map(([we,yt])=>Oe.createElement(we,yt)),...Array.isArray(_)?_:[_]])});/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=(b,z)=>{const E=Oe.forwardRef(({className:f,...T},_)=>Oe.createElement(Bh,{ref:_,iconNode:z,className:Xf(`lucide-${Dh(Yf(b))}`,`lucide-${b}`,f),...T}));return E.displayName=Yf(b),E};/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],qh=H("activity",Lh);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Ns=H("arrow-right",Yh);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Vh=H("arrow-up",Gh);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742",key:"178tsu"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05",key:"1hqiys"}]],Qh=H("bell-off",Xh);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}]],Kh=H("bell-ring",Zh);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]],Ih=H("binary",Jh);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Wh=H("book-marked",$h);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]],Ph=H("book-open",Fh);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],t0=H("building-2",e0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]],l0=H("calendar",a0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],n0=H("camera",i0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],r0=H("check",c0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],o0=H("chevron-right",s0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Qf=H("circle-alert",u0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Gf=H("circle-check-big",d0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],js=H("circle-check",f0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],m0=H("circle-x",p0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],Qn=H("clock",h0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],v0=H("code-xml",g0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=[["path",{d:"M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1",key:"1l7d7l"}],["path",{d:"M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1",key:"9955pe"}],["path",{d:"m7 15 3 3",key:"4hkfgk"}],["path",{d:"m7 21 3-3H5a2 2 0 0 1-2-2v-2",key:"1xljwe"}],["rect",{x:"14",y:"14",width:"7",height:"7",rx:"1",key:"1cdgtw"}],["rect",{x:"3",y:"3",width:"7",height:"7",rx:"1",key:"zi3rio"}]],x0=H("combine",b0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]],Zf=H("compass",y0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],j0=H("copy",N0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Ss=H("cpu",S0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],A0=H("crosshair",z0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Va=H("external-link",E0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=[["path",{d:"M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6",key:"g5mvt7"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m14 20 2 2 4-4",key:"15kota"}]],M0=H("file-check-corner",T0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],w0=H("file-text",O0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],k0=H("folder-git-2",_0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=[["path",{d:"M15 6a9 9 0 0 0-9 9V3",key:"1cii5b"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}]],R0=H("git-branch",D0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]],H0=H("git-commit-horizontal",C0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]],B0=H("git-merge",U0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],q0=H("info",L0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["path",{d:"M10 18v-7",key:"wt116b"}],["path",{d:"M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z",key:"yxxwt6"}],["path",{d:"M14 18v-7",key:"vav6t3"}],["path",{d:"M18 18v-7",key:"aexdmj"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M6 18v-7",key:"1ivflk"}]],G0=H("landmark",Y0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Ol=H("layers",V0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Q0=H("map-pin",X0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],K0=H("menu",Z0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],I0=H("monitor",J0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Kf=H("network",$0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Jf=H("play",W0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]],P0=H("presentation",F0);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",key:"u4xsad"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",key:"676m9"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",key:"92ym6u"}]],bs=H("rocket",eg);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],ag=H("scan",tg);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],If=H("shield-alert",lg);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Zn=H("shield-check",ig);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],zs=H("shield",ng);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],rg=H("sparkles",cg);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],og=H("tag",sg);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],dg=H("target",ug);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],pg=H("triangle-alert",fg);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],hg=H("user-check",mg);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],vg=H("users",gg);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],$f=H("video",bg);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],yg=H("x",xg);/**
 * @license lucide-react v1.40.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]],Wf=H("zap",Ng),ae={prototype:"PROTOTYPE_URL",demo:"DEMO_VIDEO_URL",ppt:"PPT_URL",techDocs:"https://docs.google.com/document/d/1IRosXTXcHtz3RtRidRpmti8PR-W_lJ7Y/edit?rtpof=true&sd=true",github:"https://github.com/akashkumar-1808/IBVAP_SIH_2026",research:{mha2016_17:"https://www.mha.gov.in/sites/default/files/AnnualReport_16_17.pdf",mha2023:"https://www.mha.gov.in/sites/default/files/AnnualreportEnglish_04102023_0.pdf",mha2024_25:"https://www.mha.gov.in/sites/default/files/AnnualReport_27122024.pdf",bprd:"https://bprd.nic.in/uploads/pdf/Integrated%20Border%20Management%20and%20National%20Security.pdf",mhaDivision1:"https://www.mha.gov.in/en/divisionofmha/border-management-i-division",lokSabha:"https://www.mha.gov.in/MHA1/Par2017/pdfs/par2015-pdfs/ls-240215/4.pdf",idsaCibms:"https://idsa.in/publisher/issuebrief/comprehensive-integrated-border-management-system-issues-and-challenges",cenjows:"https://cenjows.in/wp-content/uploads/2026/01/6.-Challenges-to-Indias-Land-Border-Management-A-Call-for-an-all-of-Government-Approach-By-Maj-Gen-Alok-Deb-Retd.pdf",boldQit:"https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1567263&reg=3&lang=23"},technical:{yolov7Paper:"https://www.researchgate.net/publication/378537783_Digital_Border_Surveillance_System_Towards_Illegal_Migration_and_Trafficking_Free_Borders/references",falseAlarmPaper:"https://radsecurity.com/articles/addressing-false-alarm-fatigue-in-modern-security-operations"},ideation:{smartFence:"https://modeldiplomat.com/learn/glossary/smart-fence-project",myanmarBorder:"https://www.ijltemas.in/submission/online/article/view/1991/1482"}},xs=b=>b?b.toUpperCase().includes("_URL")||!b.startsWith("http"):!0;function jg(){const[b,z]=Oe.useState(!1),[E,f]=Oe.useState(!1);Oe.useEffect(()=>{const _=()=>{z(window.scrollY>20)};return window.addEventListener("scroll",_),()=>window.removeEventListener("scroll",_)},[]);const T=[{name:"Overview",href:"#overview"},{name:"PS: SIH26187",href:"#problem-statement"},{name:"Intelligence Layer",href:"#intelligence-layer"},{name:"Research",href:"#research"},{name:"Architecture",href:"#architecture"},{name:"Resources",href:"#resources"},{name:"Team",href:"#team"}];return c.jsxs("header",{className:`navbar-wrapper ${b?"navbar-scrolled":""}`,children:[c.jsxs("div",{className:"container navbar-container",children:[c.jsxs("div",{className:"brand-group-wrapper",children:[c.jsxs("a",{href:"#overview",className:"navbar-brand",children:[c.jsxs("div",{className:"brand-icon-box",children:[c.jsx(zs,{className:"brand-shield",size:22}),c.jsx("span",{className:"brand-pulse-pip"})]}),c.jsxs("div",{className:"brand-text-group",children:[c.jsxs("span",{className:"brand-title",children:["IBVAP ",c.jsx("span",{className:"brand-title-light",children:"HUB"})]}),c.jsx("span",{className:"brand-subtext",children:"TEAM TATVA"})]})]}),c.jsxs("a",{href:"#problem-statement",className:"navbar-ps-pill",title:"SIH 2026 Problem Statement SIH26187 (MHA)",children:[c.jsx("span",{className:"ps-tag-label",children:"SIH26187"}),c.jsx("span",{className:"ps-mha-tag",children:"MHA"})]})]}),c.jsx("nav",{className:"desktop-nav",children:T.map(_=>c.jsx("a",{href:_.href,className:"nav-item",children:_.name},_.name))}),c.jsxs("div",{className:"navbar-actions",children:[c.jsxs("a",{href:"#prototype",className:"btn btn-primary btn-sm nav-cta",children:[c.jsx("span",{children:"View Prototype"}),c.jsx(o0,{size:15})]}),c.jsx("button",{type:"button",className:"mobile-toggle-btn",onClick:()=>f(!E),"aria-label":"Toggle Navigation Menu",children:E?c.jsx(yg,{size:22}):c.jsx(K0,{size:22})})]})]}),E&&c.jsx("div",{className:"mobile-menu-drawer",children:c.jsxs("div",{className:"mobile-nav-links",children:[T.map(_=>c.jsx("a",{href:_.href,className:"mobile-nav-link",onClick:()=>f(!1),children:_.name},_.name)),c.jsx("a",{href:"#prototype",className:"btn btn-primary mobile-menu-cta",onClick:()=>f(!1),children:"View Prototype →"})]})}),c.jsx("style",{children:`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(226, 219, 240, 0.5);
          height: var(--header-height);
          display: flex;
          align-items: center;
        }

        .navbar-scrolled {
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(124, 58, 237, 0.15);
          box-shadow: 0 4px 20px -2px rgba(46, 16, 101, 0.08);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .brand-group-wrapper {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .navbar-ps-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: var(--violet-whisper);
          border: 1px solid var(--border-violet-strong);
          padding: 3px 8px;
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          transition: all 0.2s ease;
        }

        .navbar-ps-pill:hover {
          background: var(--violet-subtle);
          transform: translateY(-1px);
        }

        .ps-tag-label {
          color: var(--violet-primary);
        }

        .ps-mha-tag {
          color: #dc2626;
          background: #fef2f2;
          border: 1px solid #fecaca;
          padding: 1px 4px;
          border-radius: 3px;
          font-size: 0.59375rem;
        }

        .brand-icon-box {
          position: relative;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--violet-dark) 0%, var(--violet-royal) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 4px 10px rgba(109, 40, 217, 0.25);
        }

        .brand-pulse-pip {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          border: 2px solid #ffffff;
        }

        .brand-text-group {
          display: flex;
          flex-direction: column;
        }

        .brand-title {
          font-family: var(--font-display);
          font-size: 1.125rem;
          font-weight: 800;
          color: var(--violet-deep);
          letter-spacing: -0.03em;
          line-height: 1.15;
        }

        .brand-title-light {
          font-weight: 500;
          color: var(--violet-royal);
        }

        .brand-subtext {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-item {
          font-size: 0.90625rem;
          font-weight: 500;
          color: var(--text-secondary);
          position: relative;
          padding: 6px 0;
          transition: color 0.2s ease;
        }

        .nav-item:hover {
          color: var(--violet-primary);
        }

        .nav-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--violet-royal);
          transition: width 0.2s ease;
          border-radius: 2px;
        }

        .nav-item:hover::after {
          width: 100%;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .mobile-toggle-btn {
          display: none;
          background: transparent;
          border: 1px solid var(--border-light);
          padding: 8px;
          border-radius: 8px;
          cursor: pointer;
          color: var(--violet-deep);
        }

        .mobile-menu-drawer {
          position: absolute;
          top: var(--header-height);
          left: 0;
          right: 0;
          background: #ffffff;
          border-bottom: 1px solid var(--border-violet);
          box-shadow: var(--shadow-xl);
          padding: 24px;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .mobile-nav-link {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          padding: 8px 0;
          border-bottom: 1px solid var(--border-subtle);
        }

        .mobile-menu-cta {
          margin-top: 8px;
          width: 100%;
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      `})]})}function As({size:b=44,darkTheme:z=!1,className:E=""}){return c.jsxs("div",{className:`sih-logo-wrapper ${E} ${z?"sih-dark-container":""}`,children:[c.jsx("img",{src:"/logos/sih_2026_logo.png",alt:"Smart India Hackathon 2026 Official Logo",className:"sih-official-logo-img",style:{height:b,width:"auto"},loading:"eager"}),c.jsx("style",{children:`
        .sih-logo-wrapper {
          display: inline-flex;
          align-items: center;
          transition: transform 0.2s ease;
        }

        .sih-logo-wrapper:hover {
          transform: translateY(-1px);
        }

        .sih-official-logo-img {
          display: block;
          object-fit: contain;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.06));
        }

        /* When displayed on dark surfaces (such as the footer), provide a clean subtle light backdrop */
        .sih-dark-container {
          background: #ffffff;
          padding: 4px 10px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `})]})}function Es({size:b=42,showText:z=!0,darkTheme:E=!1,className:f=""}){return c.jsxs("div",{className:`mha-logo-container ${f} ${E?"mha-dark":""}`,children:[c.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg",alt:"State Emblem of India - Ministry of Home Affairs",className:"mha-emblem-img",style:{height:b,width:"auto"},loading:"lazy"}),z&&c.jsxs("div",{className:"mha-text-stack",children:[c.jsx("span",{className:"mha-hindi",children:"गृह मंत्रालय"}),c.jsx("span",{className:"mha-english",children:"MINISTRY OF HOME AFFAIRS"}),c.jsx("span",{className:"mha-gov",children:"GOVERNMENT OF INDIA"})]}),c.jsx("style",{children:`
        .mha-logo-container {
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        .mha-emblem-img {
          display: block;
          object-fit: contain;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.08));
        }

        .mha-dark .mha-emblem-img {
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.35)) brightness(1.1);
        }

        .mha-text-stack {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }

        .mha-hindi {
          font-family: 'Google Sans', -apple-system, sans-serif;
          font-size: 0.8125rem;
          font-weight: 700;
          color: #1e1b4b;
          letter-spacing: 0.02em;
        }

        .mha-english {
          font-family: 'Google Sans', -apple-system, sans-serif;
          font-size: 0.71875rem;
          font-weight: 700;
          color: #0f172a;
          letter-spacing: 0.05em;
        }

        .mha-gov {
          font-family: 'Google Sans Text', -apple-system, sans-serif;
          font-size: 0.59375rem;
          font-weight: 600;
          color: #64748b;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .mha-dark .mha-hindi {
          color: #ffffff;
        }

        .mha-dark .mha-english {
          color: #f1f5f9;
        }

        .mha-dark .mha-gov {
          color: #cbd5e1;
        }
      `})]})}function Ts({size:b=36,darkTheme:z=!1,className:E=""}){return c.jsxs("div",{className:`supporting-organizers-wrap ${E} ${z?"supporting-dark-container":""}`,children:[c.jsx("img",{src:"/logos/sih_supporting_organizers.png",alt:"Ministry of Education, AICTE, and MoE's Innovation Cell (MIC) - Government of India",className:"supporting-logos-img",style:{height:b,width:"auto"},loading:"eager"}),c.jsx("style",{children:`
        .supporting-organizers-wrap {
          display: inline-flex;
          align-items: center;
          transition: transform 0.2s ease;
        }

        .supporting-organizers-wrap:hover {
          transform: translateY(-1px);
        }

        .supporting-logos-img {
          display: block;
          object-fit: contain;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.05));
        }

        .supporting-dark-container {
          background: #ffffff;
          padding: 4px 10px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `})]})}function Sg(){const[b,z]=Oe.useState("sector-north");return c.jsxs("section",{id:"overview",className:"hero-section",children:[c.jsxs("div",{className:"container hero-container",children:[c.jsxs("div",{className:"hero-content",children:[c.jsxs("div",{className:"hero-official-logos-row",children:[c.jsx("a",{href:"#problem-statement",className:"hero-logo-link",title:"Smart India Hackathon 2026",children:c.jsx(As,{size:36,showYear:!0})}),c.jsx("div",{className:"hero-logo-sep"}),c.jsx("a",{href:"#problem-statement",className:"hero-logo-link",title:"Ministry of Education, AICTE & MoE's Innovation Cell (MIC)",children:c.jsx(Ts,{size:28})}),c.jsx("div",{className:"hero-logo-sep"}),c.jsx("a",{href:"#problem-statement",className:"hero-logo-link",title:"Ministry of Home Affairs, Government of India",children:c.jsx(Es,{size:38,showText:!0})})]}),c.jsxs("div",{className:"hero-badge-wrap",children:[c.jsxs("a",{href:"#problem-statement",className:"badge-pill hero-badge hero-ps-badge",children:[c.jsx("span",{className:"pulse-dot"}),c.jsx("span",{children:"PROBLEM STATEMENT: SIH26187"})]}),c.jsxs("span",{className:"credibility-badge",children:[c.jsx(Zn,{size:14,className:"cred-icon"}),"TEAM TATVA – IBVAP"]})]}),c.jsxs("h1",{className:"hero-title",children:["IBVAP ",c.jsx("span",{className:"hero-title-gradient",children:"HUB"})]}),c.jsx("h2",{className:"hero-subtitle",children:"AI-Powered Border Intelligence & Video Analytics"}),c.jsx("p",{className:"hero-statement",children:"Transforming existing border surveillance video into actionable, explainable intelligence through detection, tracking, spatial reasoning and evidence fusion."}),c.jsxs("div",{className:"hero-actions",children:[c.jsxs("a",{href:"#prototype",className:"btn btn-primary btn-lg",children:[c.jsx("span",{children:"View Prototype"}),c.jsx(Ns,{size:18})]}),c.jsxs("a",{href:"#demo",className:"btn btn-secondary btn-lg",children:[c.jsx(Jf,{size:17,className:"play-icon"}),c.jsx("span",{children:"Watch Demo"})]})]}),c.jsx("div",{className:"hero-sub-action",children:c.jsxs("a",{href:"#architecture",className:"subtle-link",children:[c.jsx(Ol,{size:15}),c.jsx("span",{children:"Explore Technical Architecture →"})]})}),c.jsxs("div",{className:"pipeline-status-panel",children:[c.jsxs("div",{className:"pipeline-header",children:[c.jsxs("div",{className:"pipeline-indicator",children:[c.jsx("span",{className:"pipeline-dot"}),c.jsx("span",{className:"pipeline-title",children:"INTELLIGENCE PIPELINE"})]}),c.jsx("span",{className:"pipeline-badge",children:"ACTIVE FLOW"})]}),c.jsxs("div",{className:"pipeline-steps-ticker",children:[c.jsxs("div",{className:"step-pill",children:[c.jsx("span",{className:"num",children:"01"}),c.jsx("span",{children:"Video Input"})]}),c.jsx("span",{className:"step-arrow",children:"→"}),c.jsxs("div",{className:"step-pill",children:[c.jsx("span",{className:"num",children:"02"}),c.jsx("span",{children:"Detection"})]}),c.jsx("span",{className:"step-arrow",children:"→"}),c.jsxs("div",{className:"step-pill",children:[c.jsx("span",{className:"num",children:"03"}),c.jsx("span",{children:"Tracking"})]}),c.jsx("span",{className:"step-arrow",children:"→"}),c.jsxs("div",{className:"step-pill",children:[c.jsx("span",{className:"num",children:"04"}),c.jsx("span",{children:"Spatial Reasoning"})]}),c.jsx("span",{className:"step-arrow",children:"→"}),c.jsxs("div",{className:"step-pill",children:[c.jsx("span",{className:"num",children:"05"}),c.jsx("span",{children:"Evidence Fusion"})]}),c.jsx("span",{className:"step-arrow",children:"→"}),c.jsxs("div",{className:"step-pill active-alert",children:[c.jsx("span",{className:"num",children:"06"}),c.jsx("span",{children:"Explainable Alert"})]})]})]})]}),c.jsx("div",{className:"hero-visual",children:c.jsxs("div",{className:"surveillance-hud-wrapper",children:[c.jsxs("div",{className:"hud-top-bar",children:[c.jsxs("div",{className:"hud-source",children:[c.jsx("span",{className:"rec-dot"}),c.jsx("span",{className:"hud-source-title",children:"CAMERA NODE // CAM-04B-NORTH"})]}),c.jsxs("div",{className:"hud-telemetry",children:[c.jsx("span",{className:"telemetry-item",children:"RTSP 1080p // 30 FPS"}),c.jsx("span",{className:"telemetry-item",children:"LATENCY 42ms"})]})]}),c.jsxs("div",{className:"hud-canvas",children:[c.jsx("div",{className:"hud-grid-overlay"}),c.jsx("div",{className:"hud-center-crosshair",children:c.jsx(A0,{size:28,strokeWidth:1})}),c.jsx("div",{className:"spatial-zone spatial-zone-buffer",children:c.jsx("div",{className:"zone-label",children:"ZONE A // BUFFER CORRIDOR"})}),c.jsx("div",{className:"spatial-zone spatial-zone-critical",children:c.jsx("div",{className:"zone-label-critical",children:"ZONE B // EXCLUSION PERIMETER"})}),c.jsxs("div",{className:"detection-target-box",children:[c.jsx("span",{className:"corner tl"}),c.jsx("span",{className:"corner tr"}),c.jsx("span",{className:"corner bl"}),c.jsx("span",{className:"corner br"}),c.jsxs("div",{className:"target-meta",children:[c.jsx("span",{className:"target-id",children:"ENTITY #T-0824"}),c.jsx("span",{className:"target-conf",children:"CONF: 94.2%"})]}),c.jsxs("div",{className:"vector-trail",children:[c.jsx("div",{className:"vector-dot dot-1"}),c.jsx("div",{className:"vector-dot dot-2"}),c.jsx("div",{className:"vector-dot dot-3"}),c.jsx("div",{className:"vector-arrow"})]})]}),c.jsxs("div",{className:"detection-target-box secondary-target",children:[c.jsx("span",{className:"corner tl"}),c.jsx("span",{className:"corner tr"}),c.jsx("span",{className:"corner bl"}),c.jsx("span",{className:"corner br"}),c.jsxs("div",{className:"target-meta",children:[c.jsx("span",{className:"target-id",children:"VEHICLE #V-019"}),c.jsx("span",{className:"target-conf",children:"PATROL // AUTH"})]})]}),c.jsx("div",{className:"radar-sweep-ring"}),c.jsxs("div",{className:"evidence-fusion-overlay",children:[c.jsxs("div",{className:"fusion-header",children:[c.jsxs("div",{className:"fusion-tag",children:[c.jsx(Wf,{size:14,className:"fusion-icon"}),c.jsx("span",{children:"EVIDENCE FUSION ALERT"})]}),c.jsx("span",{className:"fusion-status",children:"CORRELATED"})]}),c.jsxs("div",{className:"fusion-body",children:[c.jsxs("p",{className:"fusion-message",children:["Target ",c.jsx("strong",{children:"#T-0824"})," trajectory crosses Zone A into Restricted Sector. Temporal dwell > 45s. Verified against false alarm filters."]}),c.jsxs("div",{className:"fusion-metrics",children:[c.jsx("span",{className:"metric-pill",children:"Spatial Logic: TRUE"}),c.jsx("span",{className:"metric-pill",children:"Kinematic Motion: IRREGULAR"}),c.jsx("span",{className:"metric-pill highlighted",children:"Operator Priority: HIGH"})]})]})]})]}),c.jsxs("div",{className:"hud-bottom-bar",children:[c.jsxs("div",{className:"hud-stat",children:[c.jsx("span",{className:"stat-label",children:"OPERATING MODE"}),c.jsx("span",{className:"stat-val",children:"CONTINUOUS REASONING"})]}),c.jsxs("div",{className:"hud-stat",children:[c.jsx("span",{className:"stat-label",children:"FILTER STACK"}),c.jsx("span",{className:"stat-val",children:"TEMPORAL + SPATIAL FUSION"})]}),c.jsxs("div",{className:"hud-stat",children:[c.jsx("span",{className:"stat-label",children:"EXPLAINABILITY"}),c.jsx("span",{className:"stat-val status-ok",children:"ACTIVE AUDIT TRAIL"})]})]})]})})]}),c.jsx("style",{children:`
        .hero-section {
          padding-top: calc(var(--header-height) + 48px);
          padding-bottom: 72px;
          position: relative;
          background: linear-gradient(180deg, #ffffff 0%, var(--bg-surface-subtle) 100%);
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 1000px;
          height: 480px;
          background: radial-gradient(ellipse at center, rgba(124, 58, 237, 0.08) 0%, rgba(245, 243, 255, 0) 70%);
          pointer-events: none;
          z-index: 0;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 48px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-official-logos-row {
          display: inline-flex;
          align-items: center;
          gap: 20px;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid var(--border-violet);
          border-radius: var(--radius-lg);
          padding: 8px 18px;
          margin-bottom: 20px;
          box-shadow: var(--shadow-sm);
          width: fit-content;
        }

        .hero-logo-link {
          display: flex;
          align-items: center;
          transition: transform 0.2s ease;
        }

        .hero-logo-link:hover {
          transform: translateY(-1px);
        }

        .hero-logo-sep {
          width: 1px;
          height: 32px;
          background: var(--border-light);
        }

        .hero-badge-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .hero-ps-badge {
          color: var(--violet-dark);
          border-color: var(--violet-royal);
          background: var(--violet-whisper);
          text-decoration: none;
        }

        .hero-ps-badge:hover {
          background: var(--violet-subtle);
          transform: translateY(-1px);
        }

        .hero-badge {
          background: #ffffff;
          border-color: var(--border-violet-strong);
        }

        .credibility-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--violet-dark);
          background: var(--violet-subtle);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-violet);
        }

        .cred-icon {
          color: var(--violet-primary);
        }

        .hero-title {
          font-size: clamp(2.75rem, 5.5vw, 4.25rem);
          font-weight: 800;
          line-height: 1.08;
          margin-bottom: 12px;
          color: var(--violet-deep);
        }

        .hero-title-gradient {
          background: linear-gradient(135deg, var(--violet-primary) 0%, var(--violet-royal) 50%, var(--violet-vivid) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 2.2vw, 1.625rem);
          font-weight: 700;
          color: var(--violet-core);
          margin-bottom: 20px;
          letter-spacing: -0.01em;
        }

        .hero-statement {
          font-size: 1.125rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 32px;
          max-width: 580px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .play-icon {
          fill: var(--violet-primary);
          color: var(--violet-primary);
        }

        .hero-sub-action {
          margin-bottom: 36px;
        }

        .subtle-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.90625rem;
          font-weight: 600;
          color: var(--violet-primary);
          transition: all 0.2s ease;
        }

        .subtle-link:hover {
          color: var(--violet-dark);
          transform: translateX(4px);
        }

        /* Status panel ticker */
        .pipeline-status-panel {
          background: #ffffff;
          border: 1px solid var(--border-violet);
          border-radius: var(--radius-lg);
          padding: 16px 20px;
          box-shadow: var(--shadow-sm);
        }

        .pipeline-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .pipeline-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .pipeline-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
        }

        .pipeline-title {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--violet-dark);
        }

        .pipeline-badge {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 600;
          color: var(--violet-primary);
          background: var(--violet-whisper);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .pipeline-steps-ticker {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 4px;
        }

        .step-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--bg-surface-subtle);
          border: 1px solid var(--border-light);
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          white-space: nowrap;
          color: var(--text-secondary);
        }

        .step-pill .num {
          font-family: var(--font-mono);
          color: var(--violet-primary);
        }

        .step-arrow {
          color: var(--violet-soft);
          font-size: 0.8rem;
        }

        .step-pill.active-alert {
          background: var(--violet-whisper);
          border-color: var(--violet-royal);
          color: var(--violet-dark);
        }

        /* Surveillance HUD Graphic */
        .surveillance-hud-wrapper {
          background: #0f081d;
          border: 1px solid rgba(139, 92, 246, 0.35);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-hero), 0 0 30px rgba(124, 58, 237, 0.15);
          overflow: hidden;
          position: relative;
        }

        .hud-top-bar {
          background: rgba(22, 10, 42, 0.95);
          border-bottom: 1px solid rgba(139, 92, 246, 0.2);
          padding: 10px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: #d8b4fe;
        }

        .hud-source {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .rec-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ef4444;
          animation: pulse 1.5s infinite;
        }

        .hud-source-title {
          font-weight: 600;
          letter-spacing: 0.05em;
          color: #f5f3ff;
        }

        .hud-telemetry {
          display: flex;
          align-items: center;
          gap: 16px;
          color: #a78bfa;
          font-size: 0.6875rem;
        }

        .hud-canvas {
          height: 380px;
          position: relative;
          background: 
            radial-gradient(circle at 40% 40%, rgba(91, 33, 182, 0.35) 0%, transparent 60%),
            linear-gradient(180deg, #130924 0%, #0c0517 100%);
          overflow: hidden;
        }

        .hud-grid-overlay {
          position: absolute;
          inset: 0;
          background-size: 32px 32px;
          background-image: 
            linear-gradient(to right, rgba(168, 85, 247, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(168, 85, 247, 0.08) 1px, transparent 1px);
        }

        .hud-center-crosshair {
          position: absolute;
          top: 48%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: rgba(168, 85, 247, 0.35);
          pointer-events: none;
        }

        /* Spatial polygons */
        .spatial-zone {
          position: absolute;
          border-width: 1px;
          border-style: dashed;
          pointer-events: none;
        }

        .spatial-zone-buffer {
          top: 30px;
          left: 40px;
          width: 240px;
          height: 140px;
          border-color: rgba(96, 165, 250, 0.5);
          background: rgba(59, 130, 246, 0.05);
          border-radius: 8px;
        }

        .zone-label {
          position: absolute;
          top: 6px;
          left: 8px;
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: #93c5fd;
          letter-spacing: 0.05em;
        }

        .spatial-zone-critical {
          bottom: 75px;
          right: 30px;
          width: 280px;
          height: 160px;
          border-color: rgba(239, 68, 68, 0.5);
          background: rgba(239, 68, 68, 0.06);
          border-radius: 8px;
        }

        .zone-label-critical {
          position: absolute;
          top: 6px;
          right: 8px;
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: #fca5a5;
          letter-spacing: 0.05em;
        }

        /* Target Bounding Box */
        .detection-target-box {
          position: absolute;
          top: 75px;
          left: 140px;
          width: 90px;
          height: 110px;
          border: 1px solid rgba(168, 85, 247, 0.85);
          background: rgba(124, 58, 237, 0.12);
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.3);
          animation: floatSlow 6s ease-in-out infinite;
        }

        .detection-target-box.secondary-target {
          top: 140px;
          right: 60px;
          left: auto;
          width: 110px;
          height: 70px;
          border-color: rgba(16, 185, 129, 0.6);
          background: rgba(16, 185, 129, 0.08);
          animation: none;
        }

        .target-meta {
          position: absolute;
          top: -22px;
          left: -1px;
          background: rgba(76, 29, 149, 0.95);
          border: 1px solid rgba(168, 85, 247, 0.5);
          padding: 2px 6px;
          border-radius: 3px;
          display: flex;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: #ffffff;
          white-space: nowrap;
        }

        .secondary-target .target-meta {
          background: rgba(6, 78, 59, 0.95);
          border-color: rgba(52, 211, 153, 0.5);
        }

        .corner {
          position: absolute;
          width: 6px;
          height: 6px;
          border-color: #c084fc;
        }
        .corner.tl { top: -1px; left: -1px; border-top: 2px solid; border-left: 2px solid; }
        .corner.tr { top: -1px; right: -1px; border-top: 2px solid; border-right: 2px solid; }
        .corner.bl { bottom: -1px; left: -1px; border-bottom: 2px solid; border-left: 2px solid; }
        .corner.br { bottom: -1px; right: -1px; border-bottom: 2px solid; border-right: 2px solid; }

        /* Vector Trajectory */
        .vector-trail {
          position: absolute;
          bottom: -40px;
          right: -30px;
          width: 60px;
          height: 40px;
          pointer-events: none;
        }

        .vector-dot {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #c084fc;
        }
        .dot-1 { bottom: 30px; right: 40px; opacity: 0.4; }
        .dot-2 { bottom: 20px; right: 25px; opacity: 0.7; }
        .dot-3 { bottom: 10px; right: 10px; opacity: 1; }

        /* Evidence fusion notification overlay */
        .evidence-fusion-overlay {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          background: rgba(28, 14, 52, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(168, 85, 247, 0.35);
          border-radius: var(--radius-md);
          padding: 12px 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        }

        .fusion-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 6px;
        }

        .fusion-tag {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #facc15;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .fusion-status {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: #a78bfa;
          background: rgba(124, 58, 237, 0.3);
          padding: 1px 6px;
          border-radius: 3px;
        }

        .fusion-message {
          font-size: 0.78125rem;
          color: #e2d9fc;
          line-height: 1.4;
          margin-bottom: 8px;
        }

        .fusion-metrics {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .metric-pill {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: #d8b4fe;
          background: rgba(255, 255, 255, 0.06);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .metric-pill.highlighted {
          background: rgba(239, 68, 68, 0.25);
          color: #fca5a5;
          border: 1px solid rgba(239, 68, 68, 0.4);
        }

        .hud-bottom-bar {
          background: rgba(22, 10, 42, 0.95);
          border-top: 1px solid rgba(139, 92, 246, 0.2);
          padding: 10px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
        }

        .hud-stat {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .stat-label {
          color: #a78bfa;
          font-size: 0.5625rem;
          letter-spacing: 0.05em;
        }

        .stat-val {
          color: #ffffff;
          font-weight: 600;
        }

        .stat-val.status-ok {
          color: #34d399;
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `})]})}function Xn({size:b=18,className:z=""}){return c.jsxs("svg",{width:b,height:b,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:z,children:[c.jsx("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),c.jsx("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})}function zg(){const b="⚠️ NOTICE TO EVALUATORS: THE IBVAP INTERACTIVE WEB PROTOTYPE IS CURRENTLY UNDER ACTIVE DEVELOPMENT & COMPONENT INTEGRATION • UPON FINAL PIPELINE PACKAGING, IT WILL BE DEPLOYED LIVE DIRECTLY ON THIS HUB • FULL TECHNICAL ARCHITECTURE SPECIFICATIONS & OPEN SOURCE CODEBASE ARE AVAILABLE FOR AUDIT BELOW • TEAM TATVA — SIH 2026 • ";return c.jsxs("section",{className:"disclaimer-banner-section",children:[c.jsx("div",{className:"ticker-bar-wrap",role:"marquee","aria-label":"Prototype Development Status Ticker",children:c.jsxs("div",{className:"ticker-content",children:[c.jsx("span",{className:"ticker-item",children:b}),c.jsx("span",{className:"ticker-item",children:b}),c.jsx("span",{className:"ticker-item",children:b})]})}),c.jsx("div",{className:"container banner-container",children:c.jsxs("div",{className:"big-disclaimer-card",children:[c.jsx("div",{className:"disclaimer-ambient-red"}),c.jsxs("div",{className:"disclaimer-header",children:[c.jsxs("div",{className:"disclaimer-badge-row",children:[c.jsxs("span",{className:"status-live-pulse-badge",children:[c.jsx("span",{className:"pulse-red-dot"}),"ACTIVE DEVELOPMENT NOTICE"]}),c.jsx("span",{className:"telemetry-badge",children:"DEPLOYMENT PIPELINE: PACKAGING IN PROGRESS"})]}),c.jsx("span",{className:"sih-id-tag",children:"SMART INDIA HACKATHON 2026 // ADVISORY"})]}),c.jsxs("div",{className:"disclaimer-body",children:[c.jsx("div",{className:"disclaimer-icon-column",children:c.jsx("div",{className:"warning-shield-box",children:c.jsx(pg,{size:34,className:"warning-shield-icon"})})}),c.jsxs("div",{className:"disclaimer-main-text",children:[c.jsx("h3",{className:"disclaimer-card-heading",children:"IBVAP Interactive Prototype is Currently in Development"}),c.jsxs("p",{className:"disclaimer-desc",children:["The full interactive web console and real-time border analytics prototype is actively undergoing final model quantization, stream synchronization, and edge cloud deployment.",c.jsx("strong",{children:" Once completed, the live demonstration will be directly accessible right on this website "}),"without any change to the permanent ",c.jsx("span",{className:"highlight-url",children:"IBVAP HUB"})," domain."]}),c.jsxs("div",{className:"status-points-grid",children:[c.jsxs("div",{className:"status-point-item",children:[c.jsx("div",{className:"point-icon-wrap ok",children:c.jsx(Gf,{size:16})}),c.jsxs("div",{children:[c.jsx("span",{className:"point-label",children:"ALGORITHMIC LOGIC & FUSION"}),c.jsx("span",{className:"point-desc",children:"6-Stage pipeline and spatial reasoning validated"})]})]}),c.jsxs("div",{className:"status-point-item",children:[c.jsx("div",{className:"point-icon-wrap in-progress",children:c.jsx(Qn,{size:16})}),c.jsxs("div",{children:[c.jsx("span",{className:"point-label",children:"LIVE WEB INTERFACE & STREAMING"}),c.jsx("span",{className:"point-desc",children:"Web client & RTSP stream deployment in progress"})]})]}),c.jsxs("div",{className:"status-point-item",children:[c.jsx("div",{className:"point-icon-wrap ok",children:c.jsx(Gf,{size:16})}),c.jsxs("div",{children:[c.jsx("span",{className:"point-label",children:"EVALUATION TRANSPARENCY"}),c.jsx("span",{className:"point-desc",children:"GitHub source code & tech docs open for inspection"})]})]})]}),c.jsxs("div",{className:"disclaimer-actions",children:[c.jsxs("a",{href:ae.techDocs,target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary disclaimer-btn",children:[c.jsx(Ol,{size:16}),c.jsx("span",{children:"Inspect Architecture Blueprint"}),c.jsx(Va,{size:13})]}),c.jsxs("a",{href:ae.github,target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary disclaimer-btn",children:[c.jsx(Xn,{size:16}),c.jsx("span",{children:"Review Code on GitHub"}),c.jsx(Va,{size:13})]}),c.jsx("a",{href:"#prototype",className:"btn btn-ghost-amber disclaimer-btn",children:c.jsx("span",{children:"Prototype Hub Details ↓"})})]})]})]})]})}),c.jsx("style",{children:`
        .disclaimer-banner-section {
          position: relative;
          background: #ffffff;
          padding-top: 0;
          padding-bottom: 32px;
          border-bottom: 1px solid var(--border-subtle);
        }

        /* Continuous Red Scrolling Ticker */
        .ticker-bar-wrap {
          background: linear-gradient(90deg, #991b1b 0%, #b91c1c 25%, #dc2626 50%, #b91c1c 75%, #991b1b 100%);
          color: #ffffff;
          padding: 10px 0;
          overflow: hidden;
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(185, 28, 28, 0.25);
          border-top: 1px solid rgba(254, 202, 202, 0.3);
          border-bottom: 1px solid rgba(254, 202, 202, 0.3);
          margin-bottom: 40px;
          display: flex;
        }

        .ticker-content {
          display: inline-flex;
          animation: tickerSlide 35s linear infinite;
        }

        .ticker-item {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding-right: 48px;
          color: #fff1f2;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        @keyframes tickerSlide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .ticker-bar-wrap:hover .ticker-content {
          animation-play-state: paused;
        }

        /* Big Disclaimer Card */
        .banner-container {
          position: relative;
          z-index: 1;
        }

        .big-disclaimer-card {
          position: relative;
          background: linear-gradient(135deg, #1c0b24 0%, #290f33 50%, #1a0826 100%);
          border: 2px solid #ef4444;
          border-radius: var(--radius-xl);
          padding: 36px 44px;
          color: #ffffff;
          box-shadow: 0 16px 40px -10px rgba(220, 38, 38, 0.25), 0 0 25px rgba(239, 68, 68, 0.15);
          overflow: hidden;
        }

        .disclaimer-ambient-red {
          position: absolute;
          top: -100px;
          right: -80px;
          width: 450px;
          height: 350px;
          background: radial-gradient(circle, rgba(239, 68, 68, 0.25) 0%, transparent 70%);
          pointer-events: none;
        }

        .disclaimer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(239, 68, 68, 0.3);
          padding-bottom: 18px;
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .disclaimer-badge-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .status-live-pulse-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: #fecaca;
          background: rgba(220, 38, 38, 0.2);
          border: 1px solid rgba(239, 68, 68, 0.6);
          padding: 5px 14px;
          border-radius: var(--radius-full);
          letter-spacing: 0.05em;
        }

        .pulse-red-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.8);
          animation: pulseRed 1.8s infinite;
        }

        @keyframes pulseRed {
          0% {
            box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
          }
        }

        .telemetry-badge {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          color: #fca5a5;
          letter-spacing: 0.05em;
        }

        .sih-id-tag {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 600;
          color: #f87171;
          letter-spacing: 0.08em;
        }

        .disclaimer-body {
          display: flex;
          align-items: flex-start;
          gap: 28px;
        }

        .disclaimer-icon-column {
          flex-shrink: 0;
        }

        .warning-shield-box {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: rgba(220, 38, 38, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f87171;
          box-shadow: 0 0 20px rgba(220, 38, 38, 0.25);
        }

        .disclaimer-main-text {
          flex-grow: 1;
        }

        .disclaimer-card-heading {
          font-size: clamp(1.45rem, 2.8vw, 1.95rem);
          color: #ffffff;
          margin-bottom: 12px;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .disclaimer-desc {
          font-size: 1.05rem;
          color: #fecdd3;
          line-height: 1.65;
          margin-bottom: 24px;
          max-width: 900px;
        }

        .disclaimer-desc strong {
          color: #ffffff;
          text-decoration: underline decoration-red-400;
        }

        .highlight-url {
          font-family: var(--font-mono);
          color: #fb7185;
          background: rgba(244, 63, 94, 0.15);
          padding: 2px 6px;
          border-radius: 4px;
        }

        /* Status Points Grid */
        .status-points-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 28px;
        }

        .status-point-item {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(254, 202, 202, 0.15);
          border-radius: var(--radius-md);
          padding: 14px 16px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .point-icon-wrap {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .point-icon-wrap.ok {
          background: rgba(16, 185, 129, 0.2);
          color: #34d399;
          border: 1px solid rgba(52, 211, 153, 0.4);
        }

        .point-icon-wrap.in-progress {
          background: rgba(245, 158, 11, 0.2);
          color: #fbbf24;
          border: 1px solid rgba(251, 191, 36, 0.4);
        }

        .point-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2px;
          letter-spacing: 0.05em;
        }

        .point-desc {
          font-size: 0.78125rem;
          color: #fda4af;
          line-height: 1.4;
        }

        .disclaimer-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .disclaimer-btn {
          background: #ffffff;
          color: #1c0b24;
          border: 1px solid #ffffff;
          font-weight: 600;
          padding: 10px 18px;
          font-size: 0.875rem;
        }

        .disclaimer-btn:hover {
          background: #fee2e2;
          border-color: #fca5a5;
          color: #991b1b;
        }

        .btn-ghost-amber {
          background: rgba(239, 68, 68, 0.15);
          color: #fecaca;
          border: 1px solid rgba(239, 68, 68, 0.4);
          padding: 10px 18px;
          font-size: 0.875rem;
          border-radius: var(--radius-md);
        }

        .btn-ghost-amber:hover {
          background: rgba(239, 68, 68, 0.3);
          color: #ffffff;
          border-color: #ef4444;
        }

        @media (max-width: 900px) {
          .disclaimer-body {
            flex-direction: column;
            gap: 20px;
          }
          .status-points-grid {
            grid-template-columns: 1fr;
          }
          .big-disclaimer-card {
            padding: 24px 20px;
          }
        }
      `})]})}function Ag(){const b=[{title:"Retrofit Over Existing CCTV Infrastructure",desc:"Zero-cost hardware requirement. Ingests existing RTSP/ONVIF feeds directly from Border Out Posts (BOPs), fence cameras, and riverine thermal sensors.",status:"Directly Solved"},{title:"AI Detection Across Adverse Conditions",desc:"Robust deep vision backbone trained for low-light, fog, foliage occlusion, and long-range border boundary conditions.",status:"Directly Solved"},{title:"Persistent Tracking & Loitering Analysis",desc:"Continuous Kalman trajectory estimation with velocity vector modeling and loitering dwell time trigger rules.",status:"Directly Solved"},{title:"Configurable Virtual Zones & Crossing Tripwires",desc:"Interactive polygonal spatial reasoning engine mapping real-world exclusion sectors, buffer corridors, and directional thresholds.",status:"Directly Solved"},{title:"False Alarm Fatigue Mitigation & Evidence Fusion",desc:"Multi-signal correlation rejecting foliage movement and animal crossing, producing explainable, high-trust alerts with audit trails.",status:"Directly Solved"}];return c.jsxs("section",{id:"problem-statement",className:"section-spacing ps-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"ps-authorities-banner",children:[c.jsx("div",{className:"ps-authority-item",title:"Smart India Hackathon 2026",children:c.jsx(As,{size:42,showYear:!0})}),c.jsx("div",{className:"ps-divider-pipe"}),c.jsx("div",{className:"ps-authority-item",title:"Ministry of Education, AICTE & MoE's Innovation Cell (MIC)",children:c.jsx(Ts,{size:34})}),c.jsx("div",{className:"ps-divider-pipe"}),c.jsx("div",{className:"ps-authority-item",title:"Ministry of Home Affairs (Sponsoring Ministry)",children:c.jsx(Es,{size:44,showText:!0})})]}),c.jsxs("div",{className:"section-header ps-section-header",children:[c.jsxs("span",{className:"section-tag",children:[c.jsx(Zn,{size:13}),"OFFICIAL SIH 2026 PROBLEM STATEMENT"]}),c.jsx("h2",{className:"section-title",children:"Problem Statement: SIH26187"}),c.jsx("p",{className:"section-subtitle",children:"Official challenge details, ministry requirements, and operational scope from the Smart India Hackathon 2026 portal."})]}),c.jsxs("div",{className:"premium-card ps-detail-card",children:[c.jsxs("div",{className:"ps-meta-strip",children:[c.jsxs("div",{className:"meta-badge-group",children:[c.jsxs("span",{className:"ps-id-badge",children:[c.jsx(og,{size:13}),"PS ID: SIH26187"]}),c.jsxs("span",{className:"ps-theme-badge",children:[c.jsx(Ss,{size:13}),"THEME: BLOCKCHAIN AND CYBERSECURITY"]}),c.jsx("span",{className:"ps-category-badge",children:"CATEGORY: SOFTWARE"})]}),c.jsxs("div",{className:"ps-ministry-label",children:[c.jsx(t0,{size:15}),c.jsx("span",{children:"MINISTRY OF HOME AFFAIRS (MHA)"})]})]}),c.jsx("h3",{className:"ps-main-title",children:"AI-Based Intelligent Video Analytics Platform for Border Surveillance using existing CCTV Infrastructure"}),c.jsxs("div",{className:"ps-description-block",children:[c.jsx("h4",{className:"block-label",children:"OFFICIAL PROBLEM DESCRIPTION & BACKGROUND:"}),c.jsx("p",{className:"block-text",children:"Border surveillance operations across India rely on extensive camera networks deployed at Border Out Posts (BOPs), fences, and remote frontier terrain. Continuous manual monitoring of these video feeds induces severe cognitive fatigue, leading to missed anomalous movements and a high volume of false alarms caused by environmental clutter (foliage, shadows, weather, animals)."}),c.jsxs("p",{className:"block-text",children:[c.jsx("strong",{children:"Problem Statement SIH26187"})," challenges innovators to develop an AI-powered, edge-capable software platform that seamlessly leverages ",c.jsx("strong",{children:"existing CCTV infrastructure"})," without demanding expensive hardware overhauls. The platform must provide real-time multi-class detection, persistent object tracking, configurable spatial zone reasoning, and evidence-backed explainable alerts to empower control-room operators with actionable situational awareness."]})]}),c.jsxs("div",{className:"ps-deliverables-wrapper",children:[c.jsx("h4",{className:"deliverables-heading",children:"How TEAM TATVA (IBVAP) Directly Fulfills SIH26187 Mandates:"}),c.jsx("div",{className:"deliverables-grid",children:b.map((z,E)=>c.jsxs("div",{className:"deliverable-item-card",children:[c.jsxs("div",{className:"deliverable-top",children:[c.jsxs("span",{className:"deliverable-idx",children:["0",E+1]}),c.jsxs("span",{className:"deliverable-solved-tag",children:[c.jsx(js,{size:12}),z.status]})]}),c.jsx("h5",{className:"deliverable-title",children:z.title}),c.jsx("p",{className:"deliverable-desc",children:z.desc})]},z.title))})]}),c.jsxs("div",{className:"ps-action-footer",children:[c.jsxs("div",{className:"ps-footer-info",children:[c.jsxs("span",{children:["Solution Designed by: ",c.jsx("strong",{children:"TEAM TATVA – IBVAP"})]}),c.jsx("span",{className:"sub-info",children:"Smart India Hackathon 2026 Official Submission"})]}),c.jsxs("div",{className:"ps-footer-ctas",children:[c.jsxs("a",{href:"#prototype",className:"btn btn-primary btn-sm",children:[c.jsx("span",{children:"View Prototype Response"}),c.jsx(Ns,{size:14})]}),c.jsxs("a",{href:"#architecture",className:"btn btn-secondary btn-sm",children:[c.jsx(Ol,{size:14}),c.jsx("span",{children:"Explore Architecture Flow"})]})]})]})]})]}),c.jsx("style",{children:`
        .ps-section {
          background-color: var(--bg-surface);
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }

        /* Authorities Banner */
        .ps-authorities-banner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 36px;
          background: #ffffff;
          border: 1px solid var(--border-violet);
          border-radius: var(--radius-xl);
          padding: 20px 36px;
          margin-bottom: 48px;
          box-shadow: var(--shadow-sm);
          flex-wrap: wrap;
        }

        .ps-authority-item {
          display: flex;
          align-items: center;
        }

        .ps-divider-pipe {
          width: 1px;
          height: 48px;
          background: var(--border-light);
        }

        .ps-section-header {
          margin-bottom: 36px;
        }

        /* Main PS Detail Card */
        .ps-detail-card {
          background: #ffffff;
          border: 2px solid var(--border-violet-strong);
          border-radius: var(--radius-xl);
          padding: 40px 48px;
          box-shadow: var(--shadow-lg);
        }

        .ps-meta-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 12px;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 16px;
        }

        .meta-badge-group {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .ps-id-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.8125rem;
          font-weight: 700;
          color: #ffffff;
          background: linear-gradient(135deg, var(--violet-dark) 0%, var(--violet-royal) 100%);
          padding: 4px 12px;
          border-radius: var(--radius-sm);
          letter-spacing: 0.05em;
        }

        .ps-theme-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--violet-primary);
          background: var(--violet-whisper);
          border: 1px solid var(--border-violet);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
        }

        .ps-category-badge {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: var(--bg-surface-subtle);
          border: 1px solid var(--border-light);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
        }

        .ps-ministry-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: #1e1b4b;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          padding: 4px 12px;
          border-radius: var(--radius-sm);
        }

        .ps-main-title {
          font-size: clamp(1.4rem, 2.6vw, 1.85rem);
          color: var(--violet-deep);
          line-height: 1.3;
          margin-bottom: 24px;
        }

        .ps-description-block {
          background: var(--bg-surface);
          border-left: 4px solid var(--violet-royal);
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          padding: 20px 24px;
          margin-bottom: 36px;
        }

        .block-label {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--violet-dark);
          margin-bottom: 10px;
        }

        .block-text {
          font-size: 0.9375rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 10px;
        }

        .block-text:last-child {
          margin-bottom: 0;
        }

        .deliverables-heading {
          font-size: 1.125rem;
          color: var(--violet-deep);
          margin-bottom: 18px;
        }

        .deliverables-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
          gap: 16px;
          margin-bottom: 32px;
        }

        .deliverable-item-card {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 16px;
          display: flex;
          flex-direction: column;
        }

        .deliverable-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .deliverable-idx {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--violet-royal);
        }

        .deliverable-solved-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: var(--font-mono);
          font-size: 0.625rem;
          font-weight: 700;
          color: #059669;
          background: #ecfdf5;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .deliverable-title {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--violet-deep);
          margin-bottom: 8px;
          line-height: 1.35;
        }

        .deliverable-desc {
          font-size: 0.78125rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* Action footer */
        .ps-action-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-subtle);
          padding-top: 24px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .ps-footer-info {
          display: flex;
          flex-direction: column;
          font-size: 0.84375rem;
          color: var(--text-secondary);
        }

        .sub-info {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .ps-footer-ctas {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        @media (max-width: 768px) {
          .ps-detail-card {
            padding: 24px 20px;
          }
          .ps-authorities-banner {
            flex-direction: column;
            gap: 16px;
            padding: 20px;
          }
          .ps-divider-pipe {
            display: none;
          }
          .ps-action-footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `})]})}function Eg(){const b=[{icon:Kf,tag:"PILLAR 01 // OVERLOAD",title:"Fragmented Surveillance",desc:"Existing border infrastructure generates vast volumes of raw video and disparate sensor streams that rapidly overwhelm human control-room operators.",impact:"High cognitive burden, missed perimeter anomalies"},{icon:dg,tag:"PILLAR 02 // CONTEXT GAP",title:"Detection ≠ Intelligence",desc:"Simply detecting an object or bounding box does not establish whether an event is operationally meaningful without trajectory, direction, and spatial context.",impact:"Raw pixels lack tactical intent and threat relevance"},{icon:Qh,tag:"PILLAR 03 // COGNITIVE FATIGUE",title:"False Alarm Fatigue",desc:"Constant unverified alerts from wildlife, foliage motion, and environmental shifts flood operations centers, eroding vigilance toward genuine intrusions.",impact:"Operator desensitization and prolonged response delays"},{icon:M0,tag:"PILLAR 04 // ACCOUNTABILITY",title:"Evidence Matters",desc:"Critical border command decisions require explainable, transparent alert chains supported by visual track history, spatial logs, and auditable reasoning.",impact:"Unexplainable black-box models cannot be legally defended"}];return c.jsxs("section",{id:"why-ibvap",className:"section-spacing why-ibvap-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header",children:[c.jsxs("span",{className:"section-tag",children:[c.jsx(rg,{size:13}),"OPERATIONAL CHALLENGES"]}),c.jsx("h2",{className:"section-title",children:"From Video Feeds to Border Intelligence"}),c.jsx("p",{className:"section-subtitle",children:"Modern border security faces an information paradox: abundant surveillance video, yet critical operational bottlenecks in manual interpretation and alert verification."})]}),c.jsx("div",{className:"problem-cards-grid",children:b.map((z,E)=>{const f=z.icon;return c.jsxs("div",{className:"premium-card problem-card",children:[c.jsxs("div",{className:"card-top-row",children:[c.jsx("div",{className:"card-icon-box",children:c.jsx(f,{size:22,className:"card-icon"})}),c.jsx("span",{className:"card-pillar-tag",children:z.tag})]}),c.jsx("h3",{className:"card-heading",children:z.title}),c.jsx("p",{className:"card-description",children:z.desc}),c.jsxs("div",{className:"card-impact-box",children:[c.jsx("span",{className:"impact-label",children:"OPERATIONAL IMPACT:"}),c.jsx("p",{className:"impact-text",children:z.impact})]})]},z.title)})}),c.jsxs("div",{className:"core-thesis-banner",children:[c.jsx("div",{className:"thesis-glow-orb"}),c.jsxs("div",{className:"thesis-content",children:[c.jsxs("div",{className:"thesis-badge",children:[c.jsx(Ol,{size:15}),c.jsx("span",{children:"THE IBVAP ARCHITECTURAL APPROACH"})]}),c.jsx("p",{className:"thesis-statement",children:'"IBVAP adds an intelligent software layer over existing surveillance infrastructure — rather than replacing it."'}),c.jsx("span",{className:"thesis-subtext",children:"Zero requirement for proprietary camera rip-and-replace. Deploys seamlessly on existing RTSP/ONVIF feeds to amplify operator capability with contextual reasoning."})]})]})]}),c.jsx("style",{children:`
        .why-ibvap-section {
          background-color: var(--bg-surface);
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }

        .problem-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 48px;
        }

        .problem-card {
          display: flex;
          flex-direction: column;
          background: #ffffff;
        }

        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .card-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: var(--violet-whisper);
          border: 1px solid var(--border-violet);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--violet-primary);
        }

        .card-pillar-tag {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--violet-royal);
          letter-spacing: 0.05em;
        }

        .card-heading {
          font-size: 1.2rem;
          margin-bottom: 12px;
          color: var(--violet-deep);
        }

        .card-description {
          font-size: 0.8875rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .card-impact-box {
          background: var(--bg-surface-subtle);
          border-left: 3px solid var(--violet-royal);
          padding: 10px 12px;
          border-radius: 0 6px 6px 0;
        }

        .impact-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.625rem;
          font-weight: 700;
          color: var(--violet-dark);
          margin-bottom: 4px;
          letter-spacing: 0.05em;
        }

        .impact-text {
          font-size: 0.775rem;
          color: var(--text-muted);
          line-height: 1.35;
        }

        /* Prominent Thesis Banner */
        .core-thesis-banner {
          position: relative;
          background: linear-gradient(135deg, #240e4f 0%, #3b137d 50%, #4c1d95 100%);
          border-radius: var(--radius-xl);
          padding: 44px 48px;
          color: #ffffff;
          overflow: hidden;
          box-shadow: 0 20px 40px -10px rgba(46, 16, 101, 0.28);
          border: 1px solid rgba(167, 139, 250, 0.3);
          text-align: center;
        }

        .thesis-glow-orb {
          position: absolute;
          top: -80px;
          left: 50%;
          transform: translateX(-50%);
          width: 400px;
          height: 200px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, transparent 70%);
          pointer-events: none;
        }

        .thesis-content {
          position: relative;
          z-index: 1;
          max-width: 860px;
          margin: 0 auto;
        }

        .thesis-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #e9d5ff;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          margin-bottom: 20px;
        }

        .thesis-statement {
          font-size: clamp(1.35rem, 2.8vw, 1.85rem);
          font-weight: 800;
          line-height: 1.35;
          color: #ffffff;
          margin-bottom: 16px;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .thesis-subtext {
          font-size: 0.95rem;
          color: #ddd6fe;
          line-height: 1.6;
          display: block;
          max-width: 680px;
          margin: 0 auto;
        }

        @media (max-width: 1024px) {
          .problem-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .problem-cards-grid {
            grid-template-columns: 1fr;
          }
          .core-thesis-banner {
            padding: 30px 20px;
          }
        }
      `})]})}function Tg(){const[b,z]=Oe.useState(4),E=[{stepNum:"01",title:"VIDEO INPUT",subtitle:"Existing CCTV / Surveillance Feeds",icon:$f,description:"Ingests raw RTSP, ONVIF, and recorded IP camera streams directly from existing fixed, PTZ, or border outpost sensors without requiring hardware replacement.",inputs:"RTSP/H.264/H.265 video streams (1080p/4K @ 15-30fps)",outputs:"Standardized frame buffer & timestamped video packet queue",telemetry:"Zero hardware retrofit • Protocol-agnostic stream decoding"},{stepNum:"02",title:"OBJECT DETECTION",subtitle:"Identify Relevant Entities & Events",icon:ag,description:"Optimized neural vision backbone identifies potential entities of interest (humans, vehicles, crossing assets) across challenging illumination and weather conditions.",inputs:"Normalized RGB frame buffers from video ingest",outputs:"Bounding boxes, class labels, and confidence probability tensors",telemetry:"Edge-accelerated inferencing • Low-light resilience"},{stepNum:"03",title:"MULTI-OBJECT TRACKING",subtitle:"Maintain Identity Across Frames",icon:H0,description:"Binds sequential detections into persistent temporal trajectories with unique track IDs, mitigating occlusion, temporary camera blind spots, and re-entry confusion.",inputs:"Per-frame detections and bounding coordinates",outputs:"Persistent Track ID, velocity vectors, and historical coordinate paths",telemetry:"Occlusion-resistant Kalman state estimation & visual embedding"},{stepNum:"04",title:"SPATIAL REASONING",subtitle:"Configurable Zones & Movement Patterns",icon:Q0,description:"Projects pixel coordinate tracks against calibrated real-world zones: zero-tolerance fences, buffer corridors, crossing vectors, and forbidden direction corridors.",inputs:"Track trajectories + polygon geofence definitions",outputs:"Zone entry/dwell/exit events, vector heading, and distance-to-boundary",telemetry:"Polygonal ray-casting • Directional vector thresholding"},{stepNum:"05",title:"EVIDENCE FUSION",subtitle:"Combine Multimodal Spatiotemporal Context",icon:B0,description:"Synthesizes raw detections, multi-frame kinematics, dwell duration, and false-alarm filters (environmental foliage, animal motion) into a correlated event manifest.",inputs:"Spatial events, track history, temporal duration, environmental filters",outputs:"Correlated threat hypothesis with confidence weight & filter verification",telemetry:"Spatiotemporal graph reasoning • False-alarm rejection matrix"},{stepNum:"06",title:"EXPLAINABLE ALERT",subtitle:"Actionable Alert With Supporting Evidence",icon:If,description:"Generates an auditable, high-confidence alert card for the operator, displaying visual track history, spatial timeline, and exact algorithmic rationale.",inputs:"Correlated threat manifest & keyframe evidence crop",outputs:"Explainable operator dispatch package, audit log, visual trajectory overlay",telemetry:"Zero black-box ambiguity • Operator-centric prioritization"}];return c.jsxs("section",{id:"intelligence-layer",className:"section-spacing intelligence-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header",children:[c.jsxs("span",{className:"section-tag",children:[c.jsx(qh,{size:13}),"CORE TECHNOLOGY"]}),c.jsx("h2",{className:"section-title",children:"The Intelligence Layer"}),c.jsx("p",{className:"section-subtitle",children:"How raw pixels become tactical clarity. A six-stage reasoning pipeline engineered specifically to filter out noise, preserve spatiotemporal context, and deliver explainable evidence."})]}),c.jsxs("div",{className:"pipeline-flow-container",children:[c.jsx("div",{className:"flow-track-line"}),c.jsx("div",{className:"flow-steps-grid",children:E.map((f,T)=>{const _=f.icon,X=b===T;return c.jsxs("button",{type:"button",onClick:()=>z(T),className:`pipeline-step-node ${X?"node-selected":""}`,children:[c.jsx("div",{className:"node-badge-num",children:c.jsx("span",{children:f.stepNum})}),c.jsx("div",{className:"node-icon-circle",children:c.jsx(_,{size:20})}),c.jsxs("div",{className:"node-text",children:[c.jsx("span",{className:"node-title",children:f.title}),c.jsx("span",{className:"node-sub",children:f.subtitle})]}),X&&c.jsx("div",{className:"node-active-caret"})]},f.stepNum)})})]}),c.jsxs("div",{className:"pipeline-deepdive-card",children:[c.jsxs("div",{className:"deepdive-header",children:[c.jsxs("div",{className:"deepdive-left",children:[c.jsxs("span",{className:"deepdive-number",children:["STAGE ",E[b].stepNum," OF 06"]}),c.jsx("h3",{className:"deepdive-title",children:E[b].title}),c.jsx("p",{className:"deepdive-sub",children:E[b].subtitle})]}),c.jsxs("div",{className:"deepdive-status-pill",children:[c.jsx("span",{className:"pulse-dot"}),c.jsx("span",{children:"LIVE REASONING STAGE"})]})]}),c.jsx("p",{className:"deepdive-description",children:E[b].description}),c.jsxs("div",{className:"deepdive-specs-grid",children:[c.jsxs("div",{className:"spec-card",children:[c.jsx("span",{className:"spec-label",children:"STAGE INPUT"}),c.jsx("p",{className:"spec-val",children:E[b].inputs})]}),c.jsxs("div",{className:"spec-card",children:[c.jsx("span",{className:"spec-label",children:"STAGE OUTPUT"}),c.jsx("p",{className:"spec-val output-val",children:E[b].outputs})]}),c.jsxs("div",{className:"spec-card spec-highlight",children:[c.jsx("span",{className:"spec-label",children:"SYSTEM ADVANTAGE"}),c.jsx("p",{className:"spec-val",children:E[b].telemetry})]})]}),c.jsxs("div",{className:"stepper-controls",children:[c.jsx("button",{type:"button",disabled:b===0,onClick:()=>z(f=>Math.max(0,f-1)),className:"btn btn-secondary btn-sm",children:"← Previous Stage"}),c.jsxs("span",{className:"step-counter-text",children:["Stage ",c.jsx("strong",{children:E[b].stepNum})," of ",c.jsx("strong",{children:"06"})]}),c.jsx("button",{type:"button",disabled:b===E.length-1,onClick:()=>z(f=>Math.min(E.length-1,f+1)),className:"btn btn-primary btn-sm",children:"Next Stage →"})]})]})]}),c.jsx("style",{children:`
        .intelligence-section {
          background: linear-gradient(180deg, #ffffff 0%, var(--bg-surface) 100%);
          position: relative;
        }

        .pipeline-flow-container {
          position: relative;
          margin-bottom: 40px;
        }

        .flow-track-line {
          position: absolute;
          top: 36px;
          left: 5%;
          right: 5%;
          height: 2px;
          background: linear-gradient(90deg, var(--violet-lavender) 0%, var(--violet-royal) 50%, var(--violet-lavender) 100%);
          z-index: 0;
          opacity: 0.6;
        }

        .flow-steps-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
          position: relative;
          z-index: 1;
        }

        .pipeline-step-node {
          background: #ffffff;
          border: 1px solid var(--border-violet);
          border-radius: var(--radius-lg);
          padding: 16px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
          transition: all 0.25s ease;
          position: relative;
          box-shadow: var(--shadow-xs);
          min-height: 145px;
        }

        .pipeline-step-node:hover {
          transform: translateY(-3px);
          border-color: var(--violet-royal);
          box-shadow: var(--shadow-md);
        }

        .pipeline-step-node.node-selected {
          background: linear-gradient(180deg, var(--violet-whisper) 0%, #ffffff 100%);
          border-color: var(--violet-royal);
          box-shadow: 0 8px 24px -4px rgba(124, 58, 237, 0.25);
          transform: translateY(-4px);
        }

        .node-badge-num {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--violet-primary);
          background: var(--violet-subtle);
          padding: 2px 8px;
          border-radius: var(--radius-full);
          margin-bottom: 10px;
        }

        .node-selected .node-badge-num {
          background: var(--violet-royal);
          color: #ffffff;
        }

        .node-icon-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-surface-subtle);
          border: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--violet-core);
          margin-bottom: 10px;
          transition: all 0.25s ease;
        }

        .node-selected .node-icon-circle {
          background: var(--violet-royal);
          color: #ffffff;
          box-shadow: 0 0 14px rgba(124, 58, 237, 0.4);
        }

        .node-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .node-title {
          font-family: var(--font-display);
          font-size: 0.78125rem;
          font-weight: 700;
          color: var(--violet-deep);
          line-height: 1.2;
        }

        .node-sub {
          font-size: 0.6875rem;
          color: var(--text-muted);
          line-height: 1.25;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .node-active-caret {
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 8px solid var(--violet-royal);
        }

        /* Deepdive Detail Panel */
        .pipeline-deepdive-card {
          background: #ffffff;
          border: 1px solid var(--border-violet-strong);
          border-radius: var(--radius-xl);
          padding: 36px 40px;
          box-shadow: var(--shadow-lg);
          position: relative;
        }

        .deepdive-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .deepdive-number {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--violet-royal);
          display: block;
          margin-bottom: 6px;
        }

        .deepdive-title {
          font-size: 1.625rem;
          color: var(--violet-deep);
          margin-bottom: 4px;
        }

        .deepdive-sub {
          font-size: 1rem;
          color: var(--text-secondary);
        }

        .deepdive-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--violet-dark);
          background: var(--violet-whisper);
          border: 1px solid var(--border-violet);
          padding: 6px 14px;
          border-radius: var(--radius-full);
        }

        .deepdive-description {
          font-size: 1.0625rem;
          line-height: 1.65;
          color: var(--text-secondary);
          margin-bottom: 30px;
          max-width: 960px;
        }

        .deepdive-specs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }

        .spec-card {
          background: var(--bg-surface);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 18px 20px;
        }

        .spec-card.spec-highlight {
          background: var(--violet-whisper);
          border-color: var(--border-violet-strong);
        }

        .spec-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--violet-primary);
          margin-bottom: 8px;
          letter-spacing: 0.05em;
        }

        .spec-val {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .output-val {
          color: var(--violet-dark);
          font-weight: 600;
        }

        .stepper-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-subtle);
          padding-top: 20px;
        }

        .step-counter-text {
          font-family: var(--font-mono);
          font-size: 0.8125rem;
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .flow-steps-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
          }
          .flow-track-line {
            display: none;
          }
          .deepdive-specs-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .flow-steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .pipeline-deepdive-card {
            padding: 24px 18px;
          }
        }
      `})]})}function Mg(){const b=[{title:"Isolated Detection",desc:"Single-frame box detected without temporal continuity"},{title:"Raw Alert Generation",desc:"Immediate trigger without checking if movement is benign"},{title:"Operator Verification",desc:"Manual inspection required for every single motion trip"}],z=[{title:"Detection",desc:"Robust neural vision locates candidate entities"},{title:"Tracking",desc:"Persistent trajectory vectors across sequential frames"},{title:"Spatial Reasoning",desc:"Correlates position against border perimeter & zone rules"},{title:"Temporal Context",desc:"Evaluates dwell time, velocity consistency, & past motion"},{title:"Evidence Fusion",desc:"Filters out environmental noise (trees, wildlife, shadows)"},{title:"Explainable Alert",desc:"Actionable alert dispatched with transparent audit proof"}];return c.jsxs("section",{id:"comparison",className:"section-spacing comparison-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header",children:[c.jsxs("span",{className:"section-tag",children:[c.jsx(Zn,{size:13}),"PARADIGM SHIFT"]}),c.jsx("h2",{className:"section-title",children:"Detection is only the beginning."}),c.jsx("p",{className:"section-subtitle",children:"Why legacy CCTV analytics overwhelm control rooms, and how IBVAP transforms unrefined detection triggers into structured situational intelligence."})]}),c.jsxs("div",{className:"comparison-cards-grid",children:[c.jsxs("div",{className:"comparison-card conventional-card",children:[c.jsxs("div",{className:"card-badge conventional-badge",children:[c.jsx(m0,{size:15}),c.jsx("span",{children:"CONVENTIONAL VIDEO ANALYTICS"})]}),c.jsx("div",{className:"flow-vertical-list",children:b.map((E,f)=>c.jsxs("div",{className:"flow-item",children:[c.jsx("div",{className:"flow-step-marker danger-marker",children:c.jsx("span",{children:f+1})}),c.jsxs("div",{className:"flow-text-group",children:[c.jsx("h4",{className:"flow-title",children:E.title}),c.jsx("p",{className:"flow-desc",children:E.desc})]})]},E.title))}),c.jsxs("div",{className:"comparison-outcome danger-outcome",children:[c.jsx(Qf,{size:18,className:"outcome-icon"}),c.jsxs("div",{children:[c.jsx("span",{className:"outcome-label",children:"SYSTEM OUTCOME:"}),c.jsx("p",{className:"outcome-text",children:"High false alarm volume, operator desensitization, blind spots during surge events."})]})]})]}),c.jsxs("div",{className:"comparison-card ibvap-card",children:[c.jsxs("div",{className:"card-badge ibvap-badge",children:[c.jsx(Wf,{size:15}),c.jsx("span",{children:"THE IBVAP INTELLIGENCE PIPELINE"})]}),c.jsx("div",{className:"flow-vertical-list",children:z.map((E,f)=>c.jsxs("div",{className:"flow-item",children:[c.jsx("div",{className:"flow-step-marker success-marker",children:c.jsx("span",{children:f+1})}),c.jsxs("div",{className:"flow-text-group",children:[c.jsx("h4",{className:"flow-title ibvap-title",children:E.title}),c.jsx("p",{className:"flow-desc",children:E.desc})]})]},E.title))}),c.jsxs("div",{className:"comparison-outcome success-outcome",children:[c.jsx(js,{size:18,className:"outcome-icon"}),c.jsxs("div",{children:[c.jsx("span",{className:"outcome-label",children:"SYSTEM OUTCOME:"}),c.jsx("p",{className:"outcome-text",children:"Less noise. More context. Better operator awareness."})]})]})]})]}),c.jsxs("div",{className:"comparison-highlight-banner",children:[c.jsx("div",{className:"highlight-pill",children:"OPERATOR ADVANTAGE"}),c.jsx("p",{className:"highlight-text",children:c.jsx("strong",{children:"Less noise. More context. Better operator awareness."})}),c.jsx("span",{className:"highlight-caption",children:"Designed to support human decision-makers at the border outpost, not replace their command judgment."})]})]}),c.jsx("style",{children:`
        .comparison-section {
          background-color: var(--bg-surface);
          border-bottom: 1px solid var(--border-subtle);
        }

        .comparison-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 28px;
          margin-bottom: 36px;
        }

        .comparison-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          padding: 36px;
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
        }

        .conventional-card {
          border-top: 4px solid #ef4444;
          background: #fafbfc;
        }

        .ibvap-card {
          border-top: 4px solid var(--violet-royal);
          border-color: var(--border-violet-strong);
          background: #ffffff;
          box-shadow: var(--shadow-lg), 0 0 25px rgba(124, 58, 237, 0.08);
          position: relative;
        }

        .card-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          margin-bottom: 28px;
          width: fit-content;
        }

        .conventional-badge {
          color: #b91c1c;
          background: #fef2f2;
          border: 1px solid #fecaca;
        }

        .ibvap-badge {
          color: var(--violet-dark);
          background: var(--violet-whisper);
          border: 1px solid var(--border-violet-strong);
        }

        .flow-vertical-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          flex-grow: 1;
          margin-bottom: 28px;
        }

        .flow-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .flow-step-marker {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .danger-marker {
          background: #fee2e2;
          color: #dc2626;
          border: 1px solid #fca5a5;
        }

        .success-marker {
          background: var(--violet-whisper);
          color: var(--violet-primary);
          border: 1px solid var(--border-violet-strong);
        }

        .flow-text-group {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .flow-title {
          font-size: 0.9375rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .ibvap-title {
          color: var(--violet-deep);
        }

        .flow-desc {
          font-size: 0.8125rem;
          color: var(--text-muted);
          line-height: 1.45;
        }

        .comparison-outcome {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          border-radius: var(--radius-md);
        }

        .danger-outcome {
          background: #fff5f5;
          border: 1px solid #fed7d7;
          color: #991b1b;
        }

        .success-outcome {
          background: var(--violet-whisper);
          border: 1px solid var(--border-violet-strong);
          color: var(--violet-dark);
        }

        .outcome-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .outcome-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 2px;
        }

        .outcome-text {
          font-size: 0.875rem;
          line-height: 1.45;
          font-weight: 500;
        }

        /* Highlight banner */
        .comparison-highlight-banner {
          text-align: center;
          background: #ffffff;
          border: 1px solid var(--border-violet);
          border-radius: var(--radius-lg);
          padding: 24px 32px;
          box-shadow: var(--shadow-sm);
        }

        .highlight-pill {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--violet-royal);
          background: var(--violet-subtle);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          margin-bottom: 8px;
        }

        .highlight-text {
          font-size: 1.25rem;
          color: var(--violet-deep);
          margin-bottom: 4px;
        }

        .highlight-caption {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .comparison-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Og(){const[b,z]=Oe.useState("all"),E=[{category:"problem",tag:"GOVERNMENT REPORT",title:"MHA Annual Reports — Border Management",organization:"Ministry of Home Affairs (MHA), Govt of India",description:"Annual Reports from 2016–17, 2023, and 2024–25 were systematically reviewed to understand central government budgetary allocations, border fencing infrastructure, floodlighting, and evolving asymmetric security challenges across border sectors.",links:[{label:"2016–17 Report",url:ae.research.mha2016_17},{label:"2023 Report",url:ae.research.mha2023},{label:"2024–25 Report",url:ae.research.mha2024_25}],impact:"Informed our architectural priority on multi-terrain resilience and low-cost sensor integration."},{category:"problem",tag:"POLICY WHITEPAPER",title:"Integrated Border Management & National Security",organization:"Bureau of Police Research and Development (BPRD)",description:"Reviewed to analyze structural disconnects between fragmented agencies, disjointed camera networks, and the imperative for interoperable border command architectures.",links:[{label:"View BPRD Document",url:ae.research.bprd}],impact:"Guided IBVAP's software-layer integration philosophy over proprietary vendor lock-in."},{category:"problem",tag:"INSTITUTIONAL OVERVIEW",title:"Border Management-I Division Reference",organization:"Ministry of Home Affairs (MHA)",description:"Baseline reference detailing operational requirements for physical and technological fencing, floodlighting, high-mast towers, Border Out Posts (BOPs), and riverine surveillance.",links:[{label:"MHA Division-I Portal",url:ae.research.mhaDivision1}],impact:"Defined our zone polygon schemas and sensor placement assumptions."},{category:"problem",tag:"PARLIAMENTARY RECORD",title:"Infiltration Along International Borders",organization:"Lok Sabha Parliamentary Q&A (MHA)",description:"Official parliamentary proceedings establishing persistent infiltration, terrain vulnerabilities, and night-time clandestine crossing attempts as continuous national priorities.",links:[{label:"Lok Sabha Official Record",url:ae.research.lokSabha}],impact:"Reinforced requirements for continuous temporal dwell detection and tracking."},{category:"problem",tag:"STRATEGIC ANALYSIS",title:"CIBMS: Issues and Challenges",organization:"Manohar Parrikar Institute for Defence Studies and Analyses (MP-IDSA)",description:"Critical analysis of shortcomings in initial Comprehensive Integrated Border Management System (CIBMS) pilots, specifically highlighting false alarms and sensor fatigue.",links:[{label:"MP-IDSA Research Brief",url:ae.research.idsaCibms}],impact:"Directly motivated IBVAP's Evidence Fusion layer to filter false alarms before dispatch."},{category:"problem",tag:"DEFENCE JOURNAL",title:"Challenges to India's Land Border Management",organization:"Centre for Joint Warfare Studies (CENJOWS)",description:"Operational analysis by Maj. Gen. Alok Deb (Retd.) examining the necessity of an all-of-government approach and real-time situational awareness across complex frontiers.",links:[{label:"CENJOWS Publication",url:ae.research.cenjows}],impact:"Emphasized explainable alerts for inter-agency coordination and auditability."},{category:"problem",tag:"OPERATIONAL DEPLOYMENT",title:"BOLD–QIT Inauguration on Indo-Bangladesh Border",organization:"Press Information Bureau (PIB), Govt of India",description:"Study of the BOLD-QIT (Border Electronically Dominated QRT Interception Technique) deployed along riverine frontiers in Dhubri, Assam, proving the viability of electronic barriers.",links:[{label:"PIB Press Release",url:ae.research.boldQit}],impact:"Validated software intelligence augmentation on physical border barriers."},{category:"technical",tag:"COMPUTER VISION BASELINE",title:"Digital Border Surveillance System (YOLOv7)",organization:"ResearchGate Academic Publication",description:"Research baseline demonstrating high-accuracy real-time object detection and classification on border perimeters, which directly informed our detection backbone choices.",links:[{label:"View Research Paper",url:ae.technical.yolov7Paper}],impact:"Informed our inference latency targets and entity categorization matrices."},{category:"technical",tag:"HUMAN FACTORS & SOC",title:"False Alarm Fatigue in Security Operations",organization:"Rad Security Technical Operations Analysis",description:"In-depth study on how excessive unverified security alerts induce operator cognitive fatigue, highlighting the urgent requirement for automated context verification and evidence scoring.",links:[{label:"Read Analysis Article",url:ae.technical.falseAlarmPaper}],impact:"Provided quantitative justification for why single-frame detection is insufficient."},{category:"ideation",tag:"CONCEPT GENESIS",title:"Smart Fence / CIBMS Overview",organization:"Model Diplomat Security Infrastructure Analysis",description:"Comprehensive assessment of radar, infrared, vibration sensors, and CCTV on border fences. Guided our architectural decision to build an intelligent software layer over existing cameras rather than demanding costly hardware overhauls.",links:[{label:"Explore Overview",url:ae.ideation.smartFence}],impact:"Established the core premise: intelligent software fusion over legacy hardware."},{category:"ideation",tag:"TERRAIN STUDY",title:"Smart Fencing Along the India–Myanmar Border",organization:"International Journal of Latest Technology in Engineering, Management & Applied Science (IJLTEMAS)",description:"Field analysis examining dense jungle foliage, undulating topography, community cross-border patterns, and the critical need for terrain-aware spatial analytics.",links:[{label:"Read Journal Paper",url:ae.ideation.myanmarBorder}],impact:"Drove the inclusion of configurable polygonal zones and trajectory filters."}],f=b==="all"?E:E.filter(T=>T.category===b);return c.jsxs("section",{id:"research",className:"section-spacing research-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header",children:[c.jsxs("span",{className:"section-tag",children:[c.jsx(Ph,{size:13}),"EVALUATOR EVIDENCE"]}),c.jsx("h2",{className:"section-title",children:"Research-Backed. Government-Informed."}),c.jsx("p",{className:"section-subtitle",children:"Our approach was shaped by official government reports, parliamentary records, defence think-tank studies, and peer-reviewed technical publications addressing India's border security challenges."})]}),c.jsxs("div",{className:"research-filter-tabs",children:[c.jsxs("button",{type:"button",className:`filter-tab ${b==="all"?"tab-active":""}`,onClick:()=>z("all"),children:["All Evidence Sources (",E.length,")"]}),c.jsxs("button",{type:"button",className:`filter-tab ${b==="problem"?"tab-active":""}`,onClick:()=>z("problem"),children:[c.jsx(G0,{size:15}),"Problem Research (MHA / BPRD / PIB)"]}),c.jsxs("button",{type:"button",className:`filter-tab ${b==="technical"?"tab-active":""}`,onClick:()=>z("technical"),children:[c.jsx(Ss,{size:15}),"Technical Foundations"]}),c.jsxs("button",{type:"button",className:`filter-tab ${b==="ideation"?"tab-active":""}`,onClick:()=>z("ideation"),children:[c.jsx(Zf,{size:15}),"Where the Idea Came From"]})]}),c.jsx("div",{className:"research-cards-grid",children:f.map((T,_)=>c.jsxs("div",{className:"premium-card research-card",children:[c.jsxs("div",{className:"research-card-header",children:[c.jsx("span",{className:"research-tag",children:T.tag}),c.jsx("span",{className:"research-org",children:T.organization})]}),c.jsx("h3",{className:"research-title",children:T.title}),c.jsx("p",{className:"research-description",children:T.description}),c.jsxs("div",{className:"research-impact-box",children:[c.jsx("span",{className:"impact-tag",children:"HOW IT SHAPED IBVAP:"}),c.jsx("p",{className:"impact-notes",children:T.impact})]}),c.jsx("div",{className:"research-links-group",children:T.links.map(X=>c.jsxs("a",{href:X.url,target:"_blank",rel:"noopener noreferrer",className:"research-link-btn",children:[c.jsx("span",{children:X.label}),c.jsx(Va,{size:13})]},X.label))})]},T.title+_))})]}),c.jsx("style",{children:`
        .research-section {
          background-color: #ffffff;
        }

        .research-filter-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .filter-tab {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: var(--radius-full);
          font-size: 0.84375rem;
          font-weight: 600;
          font-family: var(--font-sans);
          background: var(--bg-surface-subtle);
          border: 1px solid var(--border-light);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-tab:hover {
          background: var(--violet-whisper);
          border-color: var(--border-violet-strong);
          color: var(--violet-primary);
        }

        .filter-tab.tab-active {
          background: var(--violet-royal);
          border-color: var(--violet-royal);
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.25);
        }

        .research-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .research-card {
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid var(--border-subtle);
        }

        .research-card-header {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 12px;
        }

        .research-tag {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--violet-royal);
          letter-spacing: 0.05em;
        }

        .research-org {
          font-size: 0.78125rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .research-title {
          font-size: 1.125rem;
          color: var(--violet-deep);
          margin-bottom: 12px;
          line-height: 1.35;
        }

        .research-description {
          font-size: 0.84375rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 18px;
          flex-grow: 1;
        }

        .research-impact-box {
          background: var(--bg-surface-subtle);
          border-left: 2px solid var(--violet-royal);
          padding: 8px 12px;
          border-radius: 0 6px 6px 0;
          margin-bottom: 18px;
        }

        .impact-tag {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.59375rem;
          font-weight: 700;
          color: var(--violet-dark);
          letter-spacing: 0.05em;
          margin-bottom: 2px;
        }

        .impact-notes {
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.35;
        }

        .research-links-group {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          border-top: 1px solid var(--border-subtle);
          padding-top: 14px;
        }

        .research-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--violet-primary);
          background: var(--violet-whisper);
          border: 1px solid var(--border-violet);
          padding: 4px 10px;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .research-link-btn:hover {
          background: var(--violet-royal);
          color: #ffffff;
          border-color: var(--violet-royal);
        }

        @media (max-width: 1080px) {
          .research-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .research-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function wg(){const b=[{step:"01",layer:"INGESTION LAYER",title:"Video Sources",icon:n0,tech:"RTSP / ONVIF / H.264 / IP BOP Feeds",description:"Direct stream acquisition from existing fixed cameras, PTZ units, thermal sensors, and BOP surveillance posts without proprietary lock-in."},{step:"02",layer:"PROCESSING LAYER",title:"Video Processing",icon:Ih,tech:"Frame Demuxing • Resize • Temporal Buffer",description:"Low-latency frame decapsulation, adaptive sampling, and color space normalization optimized for lightweight GPU/edge execution."},{step:"03",layer:"COMPUTER VISION",title:"AI Detection",icon:Ss,tech:"Edge-Trained Neural Detectors",description:"High-speed bounding box localization and multi-class classification resilient to challenging frontier illumination and atmospheric clutter."},{step:"04",layer:"KINEMATIC MEMORY",title:"Object Tracking",icon:R0,tech:"Kalman State Prediction • Deep ReID",description:"Maintains uninterrupted identity persistence, trajectory velocity vectors, and historical coordinate paths across successive frames."},{step:"05",layer:"GEOMETRIC CONTEXT",title:"Spatial / Zone Engine",icon:Zf,tech:"Polygonal Ray-Casting • Virtual Tripwires",description:"Evaluates tracked trajectories against sector boundaries, zero-tolerance borders, buffer zones, and directional crossing vectors."},{step:"06",layer:"BEHAVIOURAL REASONING",title:"Temporal & Behavioural",icon:Qn,tech:"Dwell Time Analysis • Speed Anomalies",description:"Quantifies dwell duration, abnormal loitering, speed shifts, and sudden direction changes indicative of deliberate breach attempts."},{step:"07",layer:"CORRELATION SYNTHESIS",title:"Evidence Fusion",icon:x0,tech:"Multi-Signal Correlation • Noise Filter",description:"Fuses kinematic, spatial, temporal, and weather factors to eliminate false alarms (wildlife, foliage) and assign evidence confidence."},{step:"08",layer:"DISPATCH LOGIC",title:"Alert Generation",icon:Kh,tech:"Severity Scoring • JSON Threat Payload",description:"Constructs prioritized, explainable alert bundles with cropped keyframes, timeline breadcrumbs, and exact trigger conditions."},{step:"09",layer:"COMMAND INTERACTION",title:"Operator Intelligence Interface",icon:I0,tech:"Web Tactical HUD • Audit Trail Export",description:"Zero-confusion control-room dashboard presenting verified incidents, interactive zone maps, and one-click dispatch verification."}];return c.jsxs("section",{id:"architecture",className:"section-spacing architecture-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header",children:[c.jsxs("span",{className:"section-tag",children:[c.jsx(Kf,{size:13}),"SYSTEM DESIGN"]}),c.jsx("h2",{className:"section-title",children:"System Architecture"}),c.jsx("p",{className:"section-subtitle",children:"A modular, pipelined architecture engineered to transform surveillance video into contextual, explainable intelligence with transparent audit trails."})]}),c.jsx("div",{className:"architecture-grid",children:b.map((z,E)=>{const f=z.icon;return c.jsxs("div",{className:"arch-node-card",children:[c.jsxs("div",{className:"node-top-bar",children:[c.jsxs("span",{className:"node-seq",children:["STEP ",z.step]}),c.jsx("span",{className:"node-layer-tag",children:z.layer})]}),c.jsxs("div",{className:"node-title-group",children:[c.jsx("div",{className:"node-icon-wrapper",children:c.jsx(f,{size:19})}),c.jsxs("div",{children:[c.jsx("h3",{className:"node-main-title",children:z.title}),c.jsx("span",{className:"node-tech-label",children:z.tech})]})]}),c.jsx("p",{className:"node-description",children:z.description}),E<b.length-1&&c.jsx("div",{className:"node-connector-arrow",children:"↓"})]},z.title)})}),c.jsxs("div",{className:"tech-docs-callout",children:[c.jsxs("div",{className:"docs-callout-text",children:[c.jsxs("div",{className:"docs-badge",children:[c.jsx(w0,{size:15}),c.jsx("span",{children:"DETAILED SPECIFICATION"})]}),c.jsx("h4",{className:"docs-callout-title",children:"Full Technical Architecture & System Specifications"}),c.jsx("p",{className:"docs-callout-sub",children:"Access the complete Google Docs technical blueprint containing system parameters, mathematical formulations, interface APIs, and failure mode mitigation protocols."})]}),c.jsx("div",{className:"docs-callout-cta",children:c.jsxs("a",{href:ae.techDocs,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary btn-lg",children:[c.jsx("span",{children:"Open Full Technical Documentation"}),c.jsx(Va,{size:17})]})})]})]}),c.jsx("style",{children:`
        .architecture-section {
          background-color: var(--bg-surface);
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }

        .architecture-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 48px;
        }

        .arch-node-card {
          background: #ffffff;
          border: 1px solid var(--border-violet);
          border-radius: var(--radius-lg);
          padding: 24px;
          position: relative;
          box-shadow: var(--shadow-xs);
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
        }

        .arch-node-card:hover {
          border-color: var(--violet-royal);
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }

        .node-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .node-seq {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--violet-royal);
          background: var(--violet-whisper);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .node-layer-tag {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          font-weight: 600;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }

        .node-title-group {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .node-icon-wrapper {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: var(--bg-surface-subtle);
          border: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--violet-primary);
          flex-shrink: 0;
        }

        .node-main-title {
          font-size: 1.05rem;
          color: var(--violet-deep);
          line-height: 1.25;
        }

        .node-tech-label {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          color: var(--violet-royal);
          display: block;
        }

        .node-description {
          font-size: 0.8125rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .node-connector-arrow {
          display: none;
        }

        /* Documentation callout */
        .tech-docs-callout {
          background: #ffffff;
          border: 1px solid var(--border-violet-strong);
          border-radius: var(--radius-xl);
          padding: 36px 44px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          box-shadow: var(--shadow-lg);
        }

        .docs-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--violet-royal);
          background: var(--violet-whisper);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          margin-bottom: 12px;
        }

        .docs-callout-title {
          font-size: 1.35rem;
          color: var(--violet-deep);
          margin-bottom: 8px;
        }

        .docs-callout-sub {
          font-size: 0.90625rem;
          color: var(--text-secondary);
          max-width: 680px;
          line-height: 1.55;
        }

        .docs-callout-cta {
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .architecture-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .tech-docs-callout {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 640px) {
          .architecture-grid {
            grid-template-columns: 1fr;
          }
          .tech-docs-callout {
            padding: 24px;
          }
        }
      `})]})}function _g(){const[b,z]=Oe.useState(!1),[E,f]=Oe.useState(""),[T,_]=Oe.useState(!1),X=(k,A,F)=>{const U=ae[A];xs(U)&&(k.preventDefault(),f(A==="prototype"?"Live Interactive Prototype":"Demonstration Video"),z(!0))},ge=()=>{navigator.clipboard.writeText(`// In src/config/links.js:
PROJECT_LINKS.prototype = "https://your-deployed-prototype.app";`),_(!0),setTimeout(()=>_(!1),2500)};return c.jsxs("section",{id:"prototype",className:"section-spacing prototype-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header",children:[c.jsxs("span",{className:"section-tag",children:[c.jsx(bs,{size:13}),"EVALUATION PORTAL"]}),c.jsx("h2",{className:"section-title",children:"See IBVAP in Action"}),c.jsx("p",{className:"section-subtitle",children:"Experience our AI border intelligence platform firsthand through the interactive prototype, technical demonstration, and open-source codebase."})]}),c.jsxs("div",{className:"prototype-hero-card",children:[c.jsx("div",{className:"card-ambient-glow"}),c.jsxs("div",{className:"prototype-card-content",children:[c.jsxs("div",{className:"prototype-badge-row",children:[c.jsxs("span",{className:"prototype-status-pill",children:[c.jsx("span",{className:"pulse-dot"}),"PROTOTYPE & DEMONSTRATION SUITE"]}),c.jsx("span",{className:"prototype-version-tag",children:"VER: SIH-2026-CANDIDATE"})]}),c.jsx("h3",{className:"prototype-card-heading",children:"Operator Console & Tactical Spatial Reasoning Hub"}),c.jsx("p",{className:"prototype-card-desc",children:"Test real-time RTSP video ingest simulation, multi-object bounding and Kalman trajectory vectors, interactive polygonal geofence configuration, false-alarm rejection scoring, and the complete explainable evidence dispatch manifest."}),c.jsxs("div",{className:"prototype-actions-cluster",children:[c.jsxs("a",{href:ae.prototype,onClick:k=>X(k,"prototype"),target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary btn-lg launch-btn",children:[c.jsx(bs,{size:19}),c.jsx("span",{children:"Launch Prototype →"})]}),c.jsxs("a",{href:ae.demo,onClick:k=>X(k,"demo"),target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary btn-lg",children:[c.jsx(Jf,{size:18,className:"demo-play-icon"}),c.jsx("span",{children:"Watch Demonstration →"})]}),c.jsxs("a",{href:ae.github,target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary btn-lg github-btn",children:[c.jsx(Xn,{size:18}),c.jsx("span",{children:"View Source Code →"})]})]}),c.jsxs("div",{className:"permanent-hub-notice",children:[c.jsx(q0,{size:16,className:"notice-icon"}),c.jsxs("div",{className:"notice-text",children:[c.jsx("strong",{children:"Notice for Evaluators:"})," Prototype and demonstration links may evolve during development.",c.jsx("strong",{children:" IBVAP HUB remains the permanent project entry point"})," and single source of truth throughout Smart India Hackathon 2026."]})]}),c.jsxs("div",{className:"config-telemetry-bar",children:[c.jsxs("div",{className:"config-var-item",children:[c.jsx("span",{className:"var-label",children:"PROTOTYPE_URL:"}),c.jsx("code",{className:"var-code",children:ae.prototype})]}),c.jsxs("div",{className:"config-var-item",children:[c.jsx("span",{className:"var-label",children:"DEMO_VIDEO_URL:"}),c.jsx("code",{className:"var-code",children:ae.demo})]}),c.jsxs("div",{className:"config-var-item",children:[c.jsx("span",{className:"var-label",children:"GITHUB_URL:"}),c.jsxs("a",{href:ae.github,target:"_blank",rel:"noopener noreferrer",className:"var-link",children:["akashkumar-1808/IBVAP_SIH_2026",c.jsx(Va,{size:12})]})]})]})]})]}),b&&c.jsx("div",{className:"modal-backdrop",onClick:()=>z(!1),children:c.jsxs("div",{className:"modal-dialog",onClick:k=>k.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("div",{className:"modal-icon-box",children:c.jsx(Qn,{size:22})}),c.jsxs("div",{children:[c.jsxs("h4",{className:"modal-title",children:[E," Status"]}),c.jsx("span",{className:"modal-subtitle",children:"Demonstration Deployment Underway"})]})]}),c.jsxs("div",{className:"modal-body",children:[c.jsxs("p",{className:"modal-message",children:["The ",E.toLowerCase()," URL is currently configured as a placeholder constant in ",c.jsx("code",{children:"src/config/links.js"})," while our deployment and screen capture pipeline is undergoing live hackathon packaging."]}),c.jsxs("div",{className:"modal-code-box",children:[c.jsxs("div",{className:"code-box-header",children:[c.jsx("span",{children:"EDITING CONFIGURATION"}),c.jsxs("button",{type:"button",onClick:ge,className:"copy-btn",children:[T?c.jsx(r0,{size:14}):c.jsx(j0,{size:14}),c.jsx("span",{children:T?"Copied":"Copy"})]})]}),c.jsx("pre",{children:c.jsx("code",{children:`// In src/config/links.js
export const PROJECT_LINKS = {
  prototype: "PROTOTYPE_URL", // replace with live URL
  demo: "DEMO_VIDEO_URL",      // replace with live URL
  ...
};`})})]})]}),c.jsxs("div",{className:"modal-footer",children:[c.jsxs("a",{href:ae.github,target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary btn-sm",onClick:()=>z(!1),children:[c.jsx(Xn,{size:15}),c.jsx("span",{children:"Inspect Code on GitHub"})]}),c.jsx("button",{type:"button",className:"btn btn-primary btn-sm",onClick:()=>z(!1),children:"Close"})]})]})})]}),c.jsx("style",{children:`
        .prototype-section {
          background-color: #ffffff;
        }

        .prototype-hero-card {
          position: relative;
          background: linear-gradient(135deg, #180933 0%, #2e1065 60%, #3b0764 100%);
          border-radius: var(--radius-xl);
          padding: 56px 60px;
          color: #ffffff;
          box-shadow: 0 25px 60px -15px rgba(46, 16, 101, 0.35);
          border: 1px solid rgba(167, 139, 250, 0.3);
          overflow: hidden;
        }

        .card-ambient-glow {
          position: absolute;
          top: -120px;
          right: -80px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%);
          pointer-events: none;
        }

        .prototype-card-content {
          position: relative;
          z-index: 1;
        }

        .prototype-badge-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .prototype-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.25);
          padding: 6px 14px;
          border-radius: var(--radius-full);
        }

        .prototype-version-tag {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          color: #c4b5fd;
          letter-spacing: 0.05em;
        }

        .prototype-card-heading {
          font-size: clamp(1.75rem, 3.2vw, 2.5rem);
          color: #ffffff;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .prototype-card-desc {
          font-size: 1.0625rem;
          color: #e2d9fc;
          line-height: 1.65;
          margin-bottom: 36px;
          max-width: 840px;
        }

        .prototype-actions-cluster {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }

        .launch-btn {
          background: linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%);
          box-shadow: 0 4px 20px rgba(124, 58, 237, 0.5);
        }

        .launch-btn:hover {
          background: linear-gradient(135deg, #6d28d9 0%, #7c3aed 100%);
        }

        .demo-play-icon {
          color: var(--violet-primary);
        }

        .permanent-hub-notice {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: var(--radius-md);
          padding: 14px 18px;
          margin-bottom: 28px;
        }

        .notice-icon {
          color: #facc15;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .notice-text {
          font-size: 0.84375rem;
          color: #ddd6fe;
          line-height: 1.5;
        }

        .notice-text strong {
          color: #ffffff;
        }

        .config-telemetry-bar {
          display: flex;
          align-items: center;
          gap: 28px;
          flex-wrap: wrap;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          padding-top: 20px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
        }

        .config-var-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .var-label {
          color: #a78bfa;
          font-weight: 600;
        }

        .var-code {
          background: rgba(0, 0, 0, 0.35);
          padding: 2px 8px;
          border-radius: 4px;
          color: #fbbf24;
          border: 1px solid rgba(251, 191, 36, 0.3);
        }

        .var-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #c4b5fd;
          text-decoration: underline;
        }

        .var-link:hover {
          color: #ffffff;
        }

        /* Modal Styles */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 8, 29, 0.7);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-dialog {
          background: #ffffff;
          border-radius: var(--radius-xl);
          width: 100%;
          max-width: 540px;
          box-shadow: var(--shadow-xl);
          border: 1px solid var(--border-violet-strong);
          overflow: hidden;
          animation: floatSlow 0.3s ease-out;
        }

        .modal-header {
          padding: 24px;
          border-bottom: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .modal-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--violet-whisper);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--violet-primary);
          flex-shrink: 0;
        }

        .modal-title {
          font-size: 1.25rem;
          color: var(--violet-deep);
        }

        .modal-subtitle {
          font-size: 0.8125rem;
          color: var(--text-muted);
        }

        .modal-body {
          padding: 24px;
        }

        .modal-message {
          font-size: 0.90625rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 18px;
        }

        .modal-code-box {
          background: #0f081d;
          border-radius: var(--radius-md);
          overflow: hidden;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: #c4b5fd;
        }

        .code-box-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          background: #1c0f38;
          border-bottom: 1px solid rgba(139, 92, 246, 0.2);
          font-size: 0.6875rem;
          color: #a78bfa;
        }

        .copy-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: #ffffff;
          padding: 2px 8px;
          border-radius: 4px;
          cursor: pointer;
        }

        .modal-code-box pre {
          padding: 12px;
          margin: 0;
          overflow-x: auto;
        }

        .modal-footer {
          padding: 16px 24px;
          background: var(--bg-surface);
          border-top: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
        }

        @media (max-width: 768px) {
          .prototype-hero-card {
            padding: 36px 24px;
          }
          .prototype-actions-cluster {
            flex-direction: column;
            align-items: stretch;
          }
          .config-telemetry-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `})]})}function kg(){const[b,z]=Oe.useState(""),E=[{title:"Interactive Prototype",icon:bs,badge:"LIVE CONSOLE",desc:"Interactive system demonstration showcasing zone definitions, real-time alert triage, and kinematic tracking.",urlKey:"prototype",url:ae.prototype,actionLabel:"Launch Prototype"},{title:"Demo Video",icon:$f,badge:"RECORDED WALKTHROUGH",desc:"High-resolution recorded system walkthrough explaining operational edge scenarios and operator alert workflows.",urlKey:"demo",url:ae.demo,actionLabel:"Watch Demo Video"},{title:"Technical Architecture",icon:Ol,badge:"SYSTEM DESIGN",desc:"Complete technical architecture, mathematical models, pipeline latency benchmarks, and integration APIs.",urlKey:"techDocs",url:ae.techDocs,actionLabel:"Open Documentation"},{title:"SIH 2026 Presentation",icon:P0,badge:"PITCH & EVALUATION DECK",desc:"Official Smart India Hackathon presentation deck summarizing problem statement, technology stack, and feasibility.",urlKey:"ppt",url:ae.ppt,actionLabel:"View Presentation PPT"},{title:"Source Code Repository",icon:v0,badge:"OPEN SOURCE",desc:"Public GitHub repository with development history, installation instructions, license, and issue trackers.",urlKey:"github",url:ae.github,actionLabel:"Explore GitHub Repo"},{title:"Research & Citations",icon:Wh,badge:"GOVERNMENT SOURCES",desc:"Direct references to Ministry of Home Affairs reports, BPRD research, IDSA analyses, and technical vision baselines.",urlKey:"research",url:"#research",actionLabel:"Browse Research Library"}],f=(T,_)=>{_.url.startsWith("#")||xs(_.url)&&(T.preventDefault(),z(`The "${_.title}" URL is currently configured as a placeholder constant in links.js.`),setTimeout(()=>z(""),4e3))};return c.jsxs("section",{id:"resources",className:"section-spacing resources-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header",children:[c.jsxs("span",{className:"section-tag",children:[c.jsx(k0,{size:13}),"CENTRAL REPOSITORY"]}),c.jsx("h2",{className:"section-title",children:"Project Resources"}),c.jsx("p",{className:"section-subtitle",children:"All key evaluation assets, documentation, presentation slides, and code repositories accessible from a single permanent hub."})]}),c.jsx("div",{className:"resources-grid",children:E.map(T=>{const _=T.icon,X=!T.url.startsWith("#")&&xs(T.url);return c.jsxs("a",{href:T.url,target:T.url.startsWith("#")?"_self":"_blank",rel:T.url.startsWith("#")?"":"noopener noreferrer",onClick:ge=>f(ge,T),className:"premium-card resource-card",children:[c.jsxs("div",{className:"resource-header",children:[c.jsx("div",{className:"resource-icon-box",children:c.jsx(_,{size:22})}),c.jsx("span",{className:"resource-badge",children:T.badge})]}),c.jsx("h3",{className:"resource-card-title",children:T.title}),c.jsx("p",{className:"resource-card-desc",children:T.desc}),c.jsxs("div",{className:"resource-footer",children:[c.jsxs("span",{className:"resource-action-link",children:[c.jsx("span",{children:T.actionLabel}),c.jsx(Va,{size:14})]}),X?c.jsx("span",{className:"placeholder-tag",children:"Placeholder URL"}):c.jsx("span",{className:"active-link-tag",children:"Ready"})]})]},T.title)})}),b&&c.jsxs("div",{className:"toast-notification",children:[c.jsx(Qf,{size:18,className:"toast-icon"}),c.jsx("span",{children:b})]})]}),c.jsx("style",{children:`
        .resources-section {
          background-color: var(--bg-surface);
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .resource-card {
          background: #ffffff;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          text-decoration: none;
        }

        .resource-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .resource-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: var(--violet-whisper);
          border: 1px solid var(--border-violet);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--violet-primary);
          transition: all 0.2s ease;
        }

        .resource-card:hover .resource-icon-box {
          background: var(--violet-royal);
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
        }

        .resource-badge {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--text-muted);
        }

        .resource-card-title {
          font-size: 1.1875rem;
          color: var(--violet-deep);
          margin-bottom: 10px;
        }

        .resource-card-desc {
          font-size: 0.84375rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .resource-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-subtle);
          padding-top: 16px;
        }

        .resource-action-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--violet-primary);
          transition: color 0.2s ease;
        }

        .resource-card:hover .resource-action-link {
          color: var(--violet-dark);
        }

        .placeholder-tag {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: #d97706;
          background: #fffbeb;
          border: 1px solid #fde68a;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .active-link-tag {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: #059669;
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .toast-notification {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          background: #1e1035;
          color: #ffffff;
          padding: 12px 24px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-violet-strong);
          box-shadow: var(--shadow-xl);
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.875rem;
          z-index: 3000;
          animation: floatSlow 0.3s ease-out;
        }

        .toast-icon {
          color: #facc15;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .resources-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .resources-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Dg(){const b=[{phase:"PHASE 01",title:"Research & Problem Scoping",status:"COMPLETED",statusType:"completed",date:"Q3–Q4 2025",summary:"In-depth review of MHA Annual Reports, BPRD whitepapers, Lok Sabha records, and MP-IDSA CIBMS operational challenges to isolate false alarm fatigue as the prime bottleneck."},{phase:"PHASE 02",title:"Architecture & Algorithmic Design",status:"DEFINED",statusType:"completed",date:"Q4 2025",summary:"Defined 6-stage modular intelligence pipeline, kinematic tracking protocols, spatial polygon ray-casting logic, and explainable operator alert schema."},{phase:"PHASE 03",title:"Functional Prototype",status:"IN DEVELOPMENT / DEMO READY",statusType:"active",date:"Q1 2026 (Current)",summary:"Interactive demonstration console with simulated RTSP stream ingestion, dynamic bounding box tracking, zone intrusion trigger rules, and audit log generation."},{phase:"PHASE 04",title:"System Validation & Benchmarking",status:"ONGOING",statusType:"ongoing",date:"Active Hackathon Phase",summary:"Synthetic and recorded edge-case testing: multi-target occlusion, low-illumination degradation, fast crossing vectors, and foliage movement rejection."},{phase:"PHASE 05",title:"Operational Field Deployment",status:"FUTURE PHASE",statusType:"future",date:"Roadmap Milestone",summary:"Pilot hardware integration on physical BOP edge servers, multi-camera handoff orchestration, and authorized institutional validation trials."}];return c.jsxs("section",{id:"status",className:"section-spacing status-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header",children:[c.jsxs("span",{className:"section-tag",children:[c.jsx(l0,{size:13}),"HONEST DEVELOPMENT TIMELINE"]}),c.jsx("h2",{className:"section-title",children:"Project Status"}),c.jsx("p",{className:"section-subtitle",children:"Transparent milestones reflecting our authentic progress for Smart India Hackathon 2026 — from foundational policy research to functional prototype demonstration."})]}),c.jsxs("div",{className:"timeline-wrapper",children:[c.jsx("div",{className:"timeline-connector-bar"}),c.jsx("div",{className:"timeline-items-list",children:b.map((z,E)=>{const f=z.statusType==="completed",T=z.statusType==="active",_=z.statusType==="ongoing",X=z.statusType==="future";return c.jsxs("div",{className:`timeline-card ${T?"card-current-phase":""}`,children:[c.jsxs("div",{className:"timeline-node-marker",children:[f&&c.jsx(js,{size:18,className:"marker-icon completed"}),T&&c.jsx("div",{className:"marker-active-pulse"}),_&&c.jsx(Qn,{size:16,className:"marker-icon ongoing"}),X&&c.jsx("div",{className:"marker-future-dot"})]}),c.jsxs("div",{className:"timeline-card-inner",children:[c.jsxs("div",{className:"timeline-header-row",children:[c.jsxs("div",{className:"timeline-phase-group",children:[c.jsx("span",{className:"phase-id",children:z.phase}),c.jsx("h3",{className:"phase-title",children:z.title})]}),c.jsxs("div",{className:"timeline-badges",children:[c.jsx("span",{className:`status-pill pill-${z.statusType}`,children:z.status}),c.jsx("span",{className:"timeline-date",children:z.date})]})]}),c.jsx("p",{className:"timeline-summary",children:z.summary})]})]},z.phase)})})]}),c.jsxs("div",{className:"status-disclaimer-box",children:[c.jsx(If,{size:18,className:"disclaimer-icon"}),c.jsxs("p",{className:"disclaimer-text",children:[c.jsx("strong",{children:"Institutional Integrity Note:"})," TEAM TATVA does not falsely claim production border deployment. IBVAP is an actively developed hackathon project and research-backed technical prototype designed to validate software-layer fusion over surveillance video feeds."]})]})]}),c.jsx("style",{children:`
        .status-section {
          background-color: #ffffff;
        }

        .timeline-wrapper {
          position: relative;
          max-width: 920px;
          margin: 0 auto 40px;
        }

        .timeline-connector-bar {
          position: absolute;
          top: 24px;
          bottom: 24px;
          left: 20px;
          width: 2px;
          background: linear-gradient(180deg, var(--violet-royal) 0%, var(--violet-lavender) 60%, var(--border-light) 100%);
          z-index: 0;
        }

        .timeline-items-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
          z-index: 1;
        }

        .timeline-card {
          display: flex;
          align-items: flex-start;
          gap: 24px;
          position: relative;
        }

        .timeline-node-marker {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #ffffff;
          border: 2px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: var(--shadow-sm);
        }

        .marker-icon.completed {
          color: #059669;
        }

        .marker-icon.ongoing {
          color: #2563eb;
        }

        .marker-future-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--text-whisper);
        }

        .marker-active-pulse {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--violet-royal);
          box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.7);
          animation: pulse 2s infinite;
        }

        .timeline-card-inner {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 22px 28px;
          flex-grow: 1;
          box-shadow: var(--shadow-xs);
          transition: all 0.2s ease;
        }

        .timeline-card:hover .timeline-card-inner {
          border-color: var(--border-violet-strong);
          box-shadow: var(--shadow-md);
        }

        .card-current-phase .timeline-card-inner {
          border-color: var(--violet-royal);
          background: linear-gradient(180deg, var(--violet-whisper) 0%, #ffffff 100%);
          box-shadow: var(--shadow-md), 0 0 20px rgba(124, 58, 237, 0.08);
        }

        .timeline-header-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 10px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .timeline-phase-group {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .phase-id {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--violet-royal);
          letter-spacing: 0.05em;
        }

        .phase-title {
          font-size: 1.125rem;
          color: var(--violet-deep);
        }

        .timeline-badges {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .status-pill {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 3px 10px;
          border-radius: var(--radius-full);
        }

        .pill-completed {
          background: #ecfdf5;
          color: #065f46;
          border: 1px solid #a7f3d0;
        }

        .pill-active {
          background: var(--violet-whisper);
          color: var(--violet-dark);
          border: 1px solid var(--border-violet-strong);
        }

        .pill-ongoing {
          background: #eff6ff;
          color: #1e40af;
          border: 1px solid #bfdbfe;
        }

        .pill-future {
          background: var(--bg-surface-subtle);
          color: var(--text-muted);
          border: 1px solid var(--border-light);
        }

        .timeline-date {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .timeline-summary {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .status-disclaimer-box {
          max-width: 920px;
          margin: 0 auto;
          background: var(--bg-surface);
          border: 1px solid var(--border-violet);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .disclaimer-icon {
          color: var(--violet-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .disclaimer-text {
          font-size: 0.8125rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .disclaimer-text strong {
          color: var(--violet-deep);
        }

        @media (max-width: 640px) {
          .timeline-connector-bar {
            left: 16px;
          }
          .timeline-node-marker {
            width: 34px;
            height: 34px;
          }
          .timeline-card {
            gap: 14px;
          }
          .timeline-card-inner {
            padding: 16px;
          }
          .timeline-header-row {
            flex-direction: column;
            gap: 6px;
          }
        }
      `})]})}function Rg(){const b=[{name:"Team Lead & System Architect",role:"Lead Architecture & Integration",responsibility:"Overall pipeline design, state estimation logic, and evaluation coordination",slotId:"MEMBER 01"},{name:"Computer Vision Engineer",role:"AI Detection & Multi-Object Tracking",responsibility:"Neural detection model optimization, Kalman tracking, and occlusion handling",slotId:"MEMBER 02"},{name:"Spatial Analytics Specialist",role:"Spatial Reasoning & Geofencing",responsibility:"Polygonal zone math, directional tripwire triggers, and GIS coordination",slotId:"MEMBER 03"},{name:"Evidence Fusion Engineer",role:"Evidence Synthesis & Filter Stack",responsibility:"False alarm rejection heuristics, multi-frame context correlation, and confidence scoring",slotId:"MEMBER 04"},{name:"Frontend & Operator UX Designer",role:"Tactical Console & Hub Engineering",responsibility:"High-trust evaluator portal, responsive operator interface, and visualization HUD",slotId:"MEMBER 05"},{name:"Research & Domain Analyst",role:"Policy, Doctrine & Test Verification",responsibility:"MHA/BPRD/CENJOWS literature grounding, dataset benchmarking, and audit reporting",slotId:"MEMBER 06"}];return c.jsxs("section",{id:"team",className:"section-spacing team-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header",children:[c.jsxs("span",{className:"section-tag",children:[c.jsx(vg,{size:13}),"SMART INDIA HACKATHON 2026"]}),c.jsx("h2",{className:"section-title",children:"TEAM TATVA"}),c.jsx("p",{className:"section-subtitle",children:"Building practical AI for complex border environments."})]}),c.jsx("div",{className:"team-grid",children:b.map(z=>c.jsxs("div",{className:"premium-card team-card",children:[c.jsxs("div",{className:"team-card-top",children:[c.jsx("div",{className:"team-avatar-placeholder",children:c.jsx(hg,{size:24})}),c.jsx("span",{className:"team-slot-pill",children:z.slotId})]}),c.jsx("h3",{className:"team-member-name",children:z.name}),c.jsx("span",{className:"team-member-role",children:z.role}),c.jsxs("div",{className:"team-resp-box",children:[c.jsx("span",{className:"resp-label",children:"CORE RESPONSIBILITY:"}),c.jsx("p",{className:"resp-desc",children:z.responsibility})]})]},z.slotId))}),c.jsxs("div",{className:"team-creds-banner",children:[c.jsxs("div",{className:"team-creds-content",children:[c.jsx("div",{className:"creds-icon-box",children:c.jsx(zs,{size:28})}),c.jsxs("div",{children:[c.jsx("h4",{className:"creds-title",children:"Team TATVA – IBVAP"}),c.jsx("p",{className:"creds-subtitle",children:"Official Contestant Team • Smart India Hackathon 2026 • AI & Video Analytics Domain"})]})]}),c.jsx("span",{className:"creds-sih-tag",children:"SIH 2026 PROJECT HUB"})]})]}),c.jsx("style",{children:`
        .team-section {
          background-color: var(--bg-surface);
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }

        .team-card {
          background: #ffffff;
          display: flex;
          flex-direction: column;
        }

        .team-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .team-avatar-placeholder {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--violet-whisper);
          border: 1px solid var(--border-violet-strong);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--violet-royal);
        }

        .team-slot-pill {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--violet-primary);
          background: var(--violet-subtle);
          padding: 3px 8px;
          border-radius: 4px;
        }

        .team-member-name {
          font-size: 1.125rem;
          color: var(--violet-deep);
          margin-bottom: 4px;
        }

        .team-member-role {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--violet-royal);
          margin-bottom: 16px;
          display: block;
        }

        .team-resp-box {
          background: var(--bg-surface-subtle);
          border-radius: var(--radius-sm);
          padding: 12px;
          border: 1px solid var(--border-light);
          flex-grow: 1;
        }

        .resp-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.625rem;
          font-weight: 700;
          color: var(--violet-dark);
          margin-bottom: 4px;
          letter-spacing: 0.05em;
        }

        .resp-desc {
          font-size: 0.8125rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        /* Attribution banner */
        .team-creds-banner {
          background: #ffffff;
          border: 1px solid var(--border-violet);
          border-radius: var(--radius-lg);
          padding: 24px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          box-shadow: var(--shadow-sm);
        }

        .team-creds-content {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .creds-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--violet-dark) 0%, var(--violet-royal) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          flex-shrink: 0;
        }

        .creds-title {
          font-size: 1.15rem;
          color: var(--violet-deep);
          margin-bottom: 2px;
        }

        .creds-subtitle {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .creds-sih-tag {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--violet-royal);
          background: var(--violet-whisper);
          border: 1px solid var(--border-violet-strong);
          padding: 6px 14px;
          border-radius: var(--radius-full);
        }

        @media (max-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .team-grid {
            grid-template-columns: 1fr;
          }
          .team-creds-banner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `})]})}function Cg(){return c.jsxs("section",{className:"final-cta-section",children:[c.jsx("div",{className:"cta-ambient-glow"}),c.jsxs("div",{className:"container cta-container",children:[c.jsx("div",{className:"cta-badge-wrap",children:c.jsxs("span",{className:"cta-tag",children:[c.jsx(Zn,{size:14}),"EVALUATOR ACTION"]})}),c.jsx("h2",{className:"cta-heading",children:"From Surveillance to Intelligence."}),c.jsx("p",{className:"cta-statement",children:"IBVAP is designed to help transform existing surveillance infrastructure into contextual, explainable and operator-centric border intelligence."}),c.jsxs("div",{className:"cta-buttons-row",children:[c.jsxs("a",{href:"#prototype",className:"btn btn-primary btn-lg cta-btn-launch",children:[c.jsx("span",{children:"Launch Prototype"}),c.jsx(Ns,{size:18})]}),c.jsxs("a",{href:"#architecture",className:"btn btn-secondary btn-lg cta-btn-arch",children:[c.jsx(Ol,{size:17}),c.jsx("span",{children:"Explore Technical Architecture"})]}),c.jsxs("a",{href:ae.github,target:"_blank",rel:"noopener noreferrer",className:"btn btn-ghost btn-lg cta-btn-github",children:[c.jsx(Xn,{size:18}),c.jsx("span",{children:"View Source Code"})]})]})]}),c.jsx("style",{children:`
        .final-cta-section {
          position: relative;
          background: linear-gradient(135deg, #180933 0%, #2e1065 40%, #4c1d95 85%, #5b21b6 100%);
          padding: 96px 0;
          color: #ffffff;
          overflow: hidden;
          text-align: center;
        }

        .cta-ambient-glow {
          position: absolute;
          top: -50%;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 600px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, transparent 70%);
          pointer-events: none;
        }

        .cta-container {
          position: relative;
          z-index: 1;
          max-width: 860px;
        }

        .cta-badge-wrap {
          margin-bottom: 20px;
        }

        .cta-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #e9d5ff;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 6px 16px;
          border-radius: var(--radius-full);
        }

        .cta-heading {
          font-size: clamp(2.2rem, 4.5vw, 3.5rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -0.03em;
        }

        .cta-statement {
          font-size: 1.1875rem;
          color: #ddd6fe;
          line-height: 1.65;
          margin-bottom: 40px;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .cta-btn-launch {
          background: #ffffff;
          color: var(--violet-dark);
          border-color: #ffffff;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        .cta-btn-launch:hover {
          background: var(--violet-whisper);
          color: var(--violet-deep);
          transform: translateY(-2px);
        }

        .cta-btn-arch {
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
        }

        .cta-btn-arch:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
          color: #ffffff;
          transform: translateY(-2px);
        }

        .cta-btn-github {
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.3);
        }

        .cta-btn-github:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #ffffff;
          color: #ffffff;
        }

        @media (max-width: 640px) {
          .final-cta-section {
            padding: 64px 0;
          }
          .cta-buttons-row {
            flex-direction: column;
            width: 100%;
          }
          .cta-buttons-row .btn {
            width: 100%;
          }
        }
      `})]})}function Hg(){const b=()=>{window.scrollTo({top:0,behavior:"smooth"})};return c.jsxs("footer",{className:"footer-wrapper",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"footer-logos-row",children:[c.jsx(As,{size:36,showYear:!0,darkTheme:!0}),c.jsx("div",{className:"footer-logo-divider"}),c.jsx(Ts,{size:32,darkTheme:!0}),c.jsx("div",{className:"footer-logo-divider"}),c.jsx(Es,{size:42,showText:!0,darkTheme:!0})]}),c.jsxs("div",{className:"footer-main-grid",children:[c.jsxs("div",{className:"footer-brand-col",children:[c.jsxs("div",{className:"footer-brand",children:[c.jsx("div",{className:"footer-icon-box",children:c.jsx(zs,{size:20})}),c.jsxs("div",{children:[c.jsxs("span",{className:"footer-title",children:["IBVAP ",c.jsx("span",{className:"title-highlight",children:"HUB"})]}),c.jsx("span",{className:"footer-team-sub",children:"TEAM TATVA – IBVAP"})]})]}),c.jsx("p",{className:"footer-mission",children:"AI-Powered Border Intelligence and Video Analytics Platform. Built for Smart India Hackathon 2026."}),c.jsxs("div",{className:"footer-sih-badges-group",children:[c.jsx("span",{className:"footer-sih-badge",children:"SIH 2026 // PS ID: SIH26187"}),c.jsx("span",{className:"footer-mha-badge",children:"MINISTRY OF HOME AFFAIRS"})]})]}),c.jsxs("div",{className:"footer-links-col",children:[c.jsx("h4",{className:"footer-col-heading",children:"System Navigation"}),c.jsxs("ul",{className:"footer-link-list",children:[c.jsx("li",{children:c.jsx("a",{href:"#overview",children:"System Overview"})}),c.jsx("li",{children:c.jsx("a",{href:"#problem-statement",children:"PS Details (SIH26187)"})}),c.jsx("li",{children:c.jsx("a",{href:"#intelligence-layer",children:"The Intelligence Layer"})}),c.jsx("li",{children:c.jsx("a",{href:"#why-ibvap",children:"Why IBVAP Matters"})}),c.jsx("li",{children:c.jsx("a",{href:"#comparison",children:"Conventional vs IBVAP"})}),c.jsx("li",{children:c.jsx("a",{href:"#status",children:"Project Status"})}),c.jsx("li",{children:c.jsx("a",{href:"#team",children:"Team TATVA"})})]})]}),c.jsxs("div",{className:"footer-links-col",children:[c.jsx("h4",{className:"footer-col-heading",children:"Evaluation Portals"}),c.jsxs("ul",{className:"footer-link-list",children:[c.jsx("li",{children:c.jsx("a",{href:"#prototype",children:"Launch Prototype"})}),c.jsx("li",{children:c.jsx("a",{href:"#prototype",children:"Watch Demo Video"})}),c.jsx("li",{children:c.jsx("a",{href:"#architecture",children:"Technical Architecture"})}),c.jsx("li",{children:c.jsx("a",{href:"#research",children:"Research & Government Sources"})}),c.jsx("li",{children:c.jsx("a",{href:"#resources",children:"All Project Resources"})}),c.jsx("li",{children:c.jsxs("a",{href:ae.github,target:"_blank",rel:"noopener noreferrer",className:"inline-github-link",children:[c.jsx("span",{children:"GitHub Repository"}),c.jsx(Va,{size:12})]})})]})]})]}),c.jsx("div",{className:"footer-disclaimer-box",children:c.jsxs("p",{className:"disclaimer-statement",children:[c.jsx("strong",{children:"Disclaimer:"})," This website presents a prototype and research-backed technical concept developed for the Smart India Hackathon 2026. It is not a production border-security deployment and does not replace statutory border operations protocols."]})}),c.jsxs("div",{className:"footer-bottom-bar",children:[c.jsxs("p",{className:"footer-copyright",children:["© 2026 ",c.jsx("strong",{children:"TEAM TATVA – IBVAP"}),". Smart India Hackathon 2026 Project Hub."]}),c.jsxs("button",{type:"button",onClick:b,className:"scroll-top-btn","aria-label":"Scroll to top of page",children:[c.jsx("span",{children:"Back to Top"}),c.jsx(Vh,{size:14})]})]})]}),c.jsx("style",{children:`
        .footer-wrapper {
          background-color: #0d061a;
          color: #ffffff;
          border-top: 1px solid rgba(139, 92, 246, 0.2);
          padding-top: 64px;
          padding-bottom: 32px;
          position: relative;
        }

        .footer-logos-row {
          display: flex;
          align-items: center;
          gap: 24px;
          padding-bottom: 32px;
          margin-bottom: 36px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          flex-wrap: wrap;
        }

        .footer-logo-divider {
          width: 1px;
          height: 36px;
          background: rgba(255, 255, 255, 0.15);
        }

        .footer-sih-badges-group {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .footer-main-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .footer-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: linear-gradient(135deg, var(--violet-dark) 0%, var(--violet-royal) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
        }

        .footer-title {
          font-family: var(--font-display);
          font-size: 1.125rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.02em;
          display: block;
        }

        .title-highlight {
          color: var(--violet-light);
          font-weight: 500;
        }

        .footer-team-sub {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 600;
          color: #a78bfa;
          letter-spacing: 0.08em;
          display: block;
        }

        .footer-mission {
          font-size: 0.875rem;
          color: #c4b5fd;
          line-height: 1.6;
          margin-bottom: 20px;
          max-width: 440px;
        }

        .footer-sih-badge {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          color: #e9d5ff;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 4px 12px;
          border-radius: var(--radius-full);
        }

        .footer-mha-badge {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          color: #fecaca;
          background: rgba(220, 38, 38, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.4);
          padding: 4px 12px;
          border-radius: var(--radius-full);
        }

        .footer-col-heading {
          font-size: 0.9375rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 18px;
          letter-spacing: 0.02em;
        }

        .footer-link-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-link-list a {
          font-size: 0.84375rem;
          color: #c4b5fd;
          transition: color 0.2s ease;
        }

        .footer-link-list a:hover {
          color: #ffffff;
        }

        .inline-github-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .footer-disclaimer-box {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          margin-bottom: 32px;
        }

        .disclaimer-statement {
          font-size: 0.78125rem;
          color: #a78bfa;
          line-height: 1.5;
        }

        .disclaimer-statement strong {
          color: #e2d9fc;
        }

        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 24px;
          font-size: 0.78125rem;
          color: #8b5cf6;
        }

        .footer-copyright strong {
          color: #c4b5fd;
        }

        .scroll-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: 1px solid rgba(139, 92, 246, 0.3);
          color: #c4b5fd;
          padding: 6px 12px;
          border-radius: var(--radius-full);
          cursor: pointer;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          transition: all 0.2s ease;
        }

        .scroll-top-btn:hover {
          background: rgba(139, 92, 246, 0.2);
          color: #ffffff;
          border-color: #a78bfa;
        }

        @media (max-width: 900px) {
          .footer-main-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-bottom-bar {
            flex-direction: column;
            gap: 16px;
            align-items: flex-start;
          }
        }
      `})]})}function Ug(){return c.jsxs("div",{className:"app-root",children:[c.jsx("div",{className:"ambient-bg-canvas","aria-hidden":"true"}),c.jsx("div",{className:"ambient-grid","aria-hidden":"true"}),c.jsx(jg,{}),c.jsxs("main",{children:[c.jsx(Sg,{}),c.jsx(zg,{}),c.jsx(Ag,{}),c.jsx(Eg,{}),c.jsx(Tg,{}),c.jsx(Mg,{}),c.jsx(Og,{}),c.jsx(wg,{}),c.jsx(_g,{}),c.jsx(kg,{}),c.jsx(Dg,{}),c.jsx(Rg,{}),c.jsx(Cg,{})]}),c.jsx(Hg,{})]})}kh.createRoot(document.getElementById("root")).render(c.jsx(zh.StrictMode,{children:c.jsx(Ug,{})}));
