var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,o)=>(o=n==null?{}:e(i(n)),l(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var f=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function te(e,t){return T(e.type,t,e.props)}function ne(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function E(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,oe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+E(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(ne(o)&&(o=te(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+E(a,u),c+=oe(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+E(a,u++),c+=oe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return oe(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var D=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},O={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!ne(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=O,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ne,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,D)}catch(e){D(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),p=s(((e,t)=>{t.exports=f()})),m=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,ne());else{var t=n(l);t!==null&&E(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function T(){return g?!0:!(e.unstable_now()-ee<w)}function te(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&T());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&E(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?ne():S=!1}}}var ne;if(typeof y==`function`)ne=function(){y(te)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=te,ne=function(){ie.postMessage(null)}}else ne=function(){_(te,0)};function E(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,E(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,ne()))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),h=s(((e,t)=>{t.exports=m()})),g=s((e=>{var t=p();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),_=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=s((e=>{var t=h(),n=p(),r=_();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function d(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=d(e),t!==null)return t;e=e.sibling}return null}var f=Object.assign,m=Symbol.for(`react.element`),g=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),T=Symbol.for(`react.suspense_list`),te=Symbol.for(`react.memo`),ne=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),E=Symbol.iterator;function ae(e){return typeof e!=`object`||!e?null:(e=E&&e[E]||e[`@@iterator`],typeof e==`function`?e:null)}var oe=Symbol.for(`react.client.reference`);function se(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case T:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case te:return t=e.displayName||null,t===null?se(e.type)||`Memo`:t;case ne:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}var ce=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ue=[],de=-1;function fe(e){return{current:e}}function pe(e){0>de||(e.current=ue[de],ue[de]=null,de--)}function k(e,t){de++,ue[de]=e.current,e.current=t}var me=fe(null),he=fe(null),ge=fe(null),_e=fe(null);function ve(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ud(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ud(t),e=Wd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}pe(me),k(me,e)}function ye(){pe(me),pe(he),pe(ge)}function be(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=Wd(t,e.type);t!==n&&(k(he,e),k(me,n))}function xe(e){he.current===e&&(pe(me),pe(he)),_e.current===e&&(pe(_e),ep._currentValue=le)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,Me=t.unstable_shouldYield,Ne=t.unstable_requestPaint,Pe=t.unstable_now,Fe=t.unstable_getCurrentPriorityLevel,Ie=t.unstable_ImmediatePriority,Le=t.unstable_UserBlockingPriority,Re=t.unstable_NormalPriority,ze=t.unstable_LowPriority,Be=t.unstable_IdlePriority,Ve=t.log,He=t.unstable_setDisableYieldValue,Ue=null,We=null;function Ge(e){if(typeof Ve==`function`&&He(e),We&&typeof We.setStrictMode==`function`)try{We.setStrictMode(Ue,e)}catch{}}var Ke=Math.clz32?Math.clz32:Ye,qe=Math.log,Je=Math.LN2;function Ye(e){return e>>>=0,e===0?32:31-(qe(e)/Je|0)|0}var Xe=256,Ze=262144,Qe=4194304;function $e(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function et(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=$e(n))):i=$e(o):i=$e(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=$e(n))):i=$e(o)):i=$e(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function tt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rt(){var e=Qe;return Qe<<=1,!(Qe&62914560)&&(Qe=4194304),e}function it(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function at(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ot(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ke(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&st(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function st(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ke(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function lt(e,t){var n=t&-t;return n=n&42?1:ut(n),(n&(e.suspendedLanes|t))===0?n:0}function ut(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ft(){var e=O.p;return e===0?(e=window.event,e===void 0?32:hp(e.type)):e}function pt(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var mt=Math.random().toString(36).slice(2),ht=`__reactFiber$`+mt,gt=`__reactProps$`+mt,_t=`__reactContainer$`+mt,vt=`__reactEvents$`+mt,yt=`__reactListeners$`+mt,bt=`__reactHandles$`+mt,xt=`__reactResources$`+mt,St=`__reactMarker$`+mt;function Ct(e){delete e[ht],delete e[gt],delete e[vt],delete e[yt],delete e[bt]}function wt(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pf(e);e!==null;){if(n=e[ht])return n;e=pf(e)}return t}e=n,n=e.parentNode}return null}function Tt(e){if(e=e[ht]||e[_t]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Et(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Dt(e){var t=e[xt];return t||=e[xt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Ot(e){e[St]=!0}var kt=new Set,At={};function jt(e,t){Mt(e,t),Mt(e+`Capture`,t)}function Mt(e,t){for(At[e]=t,e=0;e<t.length;e++)kt.add(t[e])}var Nt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Pt={},Ft={};function It(e){return ke.call(Ft,e)?!0:ke.call(Pt,e)?!1:Nt.test(e)?Ft[e]=!0:(Pt[e]=!0,!1)}function Lt(e,t,n){if(It(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Rt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Vt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){if(!e._valueTracker){var t=Vt(e)?`checked`:`value`;e._valueTracker=Ht(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Vt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Bt(t)):e.value!==``+Bt(t)&&(e.value=``+Bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Bt(n)):Xt(e,o,Bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Bt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ut(e);return}n=n==null?``:``+Bt(n),t=t==null?n:``+Bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ut(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Bt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ce(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ut(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&nn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&nn(e,o,t[o])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Tt(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[gt]||null;if(!a)throw Error(i(90));Jt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(Cu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[gt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=f({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=f({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=On(In),Rn=On(f({},In,{dataTransfer:0})),zn=On(f({},jn,{relatedTarget:0})),Bn=On(f({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=On(f({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=On(f({},kn,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Wn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Gn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gn[e])?!!t[e]:!1}function qn(){return Kn}var Jn=On(f({},jn,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Wn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Yn=On(f({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Xn=On(f({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn})),Zn=On(f({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Qn=On(f({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),$n=On(f({},kn,{newState:0,oldState:0})),er=[9,13,27,32],tr=vn&&`CompositionEvent`in window,nr=null;vn&&`documentMode`in document&&(nr=document.documentMode);var rr=vn&&`TextEvent`in window&&!nr,ir=vn&&(!tr||nr&&8<nr&&11>=nr),ar=` `,or=!1;function sr(e,t){switch(e){case`keyup`:return er.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function cr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var lr=!1;function ur(e,t){switch(e){case`compositionend`:return cr(t);case`keypress`:return t.which===32?(or=!0,ar):null;case`textInput`:return e=t.data,e===ar&&or?null:e;default:return null}}function dr(e,t){if(lr)return e===`compositionend`||!tr&&sr(e,t)?(e=wn(),Cn=Sn=xn=null,lr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ir&&t.locale!==`ko`?null:t.data;default:return null}}var fr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!fr[e.type]:t===`textarea`}function mr(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Od(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var hr=null,gr=null;function _r(e){xd(e,0)}function vr(e){if(Wt(Et(e)))return e}function yr(e,t){if(e===`change`)return t}var br=!1;if(vn){var xr;if(vn){var Sr=`oninput`in document;if(!Sr){var Cr=document.createElement(`div`);Cr.setAttribute(`oninput`,`return;`),Sr=typeof Cr.oninput==`function`}xr=Sr}else xr=!1;br=xr&&(!document.documentMode||9<document.documentMode)}function wr(){hr&&(hr.detachEvent(`onpropertychange`,Tr),gr=hr=null)}function Tr(e){if(e.propertyName===`value`&&vr(gr)){var t=[];mr(t,gr,e,dn(e)),gn(_r,t)}}function Er(e,t,n){e===`focusin`?(wr(),hr=t,gr=n,hr.attachEvent(`onpropertychange`,Tr)):e===`focusout`&&wr()}function Dr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return vr(gr)}function Or(e,t){if(e===`click`)return vr(t)}function kr(e,t){if(e===`input`||e===`change`)return vr(t)}function Ar(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var jr=typeof Object.is==`function`?Object.is:Ar;function Mr(e,t){if(jr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!jr(e[i],t[i]))return!1}return!0}function Nr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function A(e,t){var n=Nr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Nr(n)}}function Pr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Lr=vn&&`documentMode`in document&&11>=document.documentMode,Rr=null,zr=null,Br=null,Vr=!1;function Hr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vr||Rr==null||Rr!==Gt(r)||(r=Rr,`selectionStart`in r&&Ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&Mr(Br,r)||(Br=r,r=Od(zr,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Wr={animationend:Ur(`Animation`,`AnimationEnd`),animationiteration:Ur(`Animation`,`AnimationIteration`),animationstart:Ur(`Animation`,`AnimationStart`),transitionrun:Ur(`Transition`,`TransitionRun`),transitionstart:Ur(`Transition`,`TransitionStart`),transitioncancel:Ur(`Transition`,`TransitionCancel`),transitionend:Ur(`Transition`,`TransitionEnd`)},Gr={},Kr={};vn&&(Kr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),`TransitionEvent`in window||delete Wr.transitionend.transition);function qr(e){if(Gr[e])return Gr[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kr)return Gr[e]=t[n];return e}var Jr=qr(`animationend`),Yr=qr(`animationiteration`),Xr=qr(`animationstart`),Zr=qr(`transitionrun`),Qr=qr(`transitionstart`),$r=qr(`transitioncancel`),ei=qr(`transitionend`),ti=new Map,ni=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ni.push(`scrollEnd`);function ri(e,t){ti.set(e,t),jt(t,[e])}var ii=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ai=[],oi=0,si=0;function ci(){for(var e=oi,t=si=oi=0;t<e;){var n=ai[t];ai[t++]=null;var r=ai[t];ai[t++]=null;var i=ai[t];ai[t++]=null;var a=ai[t];if(ai[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&di(n,i,a)}}function j(e,t,n,r){ai[oi++]=e,ai[oi++]=t,ai[oi++]=n,ai[oi++]=r,si|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function li(e,t,n,r){return j(e,t,n,r),fi(e)}function ui(e,t){return j(e,null,null,t),fi(e)}function di(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ke(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function fi(e){if(50<mu)throw mu=0,hu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var M={};function pi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(e,t,n,r){return new pi(e,t,n,r)}function hi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gi(e,t){var n=e.alternate;return n===null?(n=mi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function _i(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)hi(e)&&(s=1);else if(typeof e==`string`)s=Gf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=mi(31,n,t,a),e.elementType=re,e.lanes=o,e;case y:return yi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=mi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=mi(13,n,t,a),e.elementType=ee,e.lanes=o,e;case T:return e=mi(19,n,t,a),e.elementType=T,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case te:s=14;break a;case ne:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=mi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function yi(e,t,n,r){return e=mi(7,e,r,t),e.lanes=n,e}function bi(e,t,n){return e=mi(6,e,null,t),e.lanes=n,e}function xi(e){var t=mi(18,null,null,0);return t.stateNode=e,t}function Si(e,t,n){return t=mi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ci=new WeakMap;function wi(e,t){if(typeof e==`object`&&e){var n=Ci.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},Ci.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var Ti=[],Ei=0,Di=null,Oi=0,ki=[],Ai=0,ji=null,N=1,Mi=``;function Ni(e,t){Ti[Ei++]=Oi,Ti[Ei++]=Di,Di=e,Oi=t}function Pi(e,t,n){ki[Ai++]=N,ki[Ai++]=Mi,ki[Ai++]=ji,ji=e;var r=N;e=Mi;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var a=32-Ke(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,N=1<<32-Ke(t)+i|n<<i|r,Mi=a+e}else N=1<<a|n<<i|r,Mi=e}function Fi(e){e.return!==null&&(Ni(e,1),Pi(e,1,0))}function Ii(e){for(;e===Di;)Di=Ti[--Ei],Ti[Ei]=null,Oi=Ti[--Ei],Ti[Ei]=null;for(;e===ji;)ji=ki[--Ai],ki[Ai]=null,Mi=ki[--Ai],ki[Ai]=null,N=ki[--Ai],ki[Ai]=null}function Li(e,t){ki[Ai++]=N,ki[Ai++]=Mi,ki[Ai++]=ji,N=t.id,Mi=t.overflow,ji=e}var Ri=null,P=null,F=!1,zi=null,Bi=!1,Vi=Error(i(519));function Hi(e){throw Ji(wi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Vi}function Ui(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ht]=e,t[gt]=r,n){case`dialog`:X(`cancel`,t),X(`close`,t);break;case`iframe`:case`object`:case`embed`:X(`load`,t);break;case`video`:case`audio`:for(n=0;n<yd.length;n++)X(yd[n],t);break;case`source`:X(`error`,t);break;case`img`:case`image`:case`link`:X(`error`,t),X(`load`,t);break;case`details`:X(`toggle`,t);break;case`input`:X(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:X(`invalid`,t);break;case`textarea`:X(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Pd(t.textContent,n)?(r.popover!=null&&(X(`beforetoggle`,t),X(`toggle`,t)),r.onScroll!=null&&X(`scroll`,t),r.onScrollEnd!=null&&X(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Hi(e,!0)}function Wi(e){for(Ri=e.return;Ri;)switch(Ri.tag){case 5:case 31:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:Ri=Ri.return}}function Gi(e){if(e!==Ri)return!1;if(!F)return Wi(e),F=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Gd(e.type,e.memoizedProps)),n=!n),n&&P&&Hi(e),Wi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));P=ff(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));P=ff(e)}else t===27?(t=P,$d(e.type)?(e=df,df=null,P=e):P=t):P=Ri?uf(e.stateNode.nextSibling):null;return!0}function Ki(){P=Ri=null,F=!1}function qi(){var e=zi;return e!==null&&(tu===null?tu=e:tu.push.apply(tu,e),zi=null),e}function Ji(e){zi===null?zi=[e]:zi.push(e)}var I=fe(null),Yi=null,Xi=null;function Zi(e,t,n){k(I,t._currentValue),t._currentValue=n}function Qi(e){e._currentValue=I.current,pe(I)}function $i(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ea(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),$i(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),$i(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ta(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;jr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===_e.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[ep]:e.push(ep))}a=a.return}e!==null&&ea(t,e,n,r),t.flags|=262144}function na(e){for(e=e.firstContext;e!==null;){if(!jr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ra(e){Yi=e,Xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ia(e){return oa(Yi,e)}function aa(e,t){return Yi===null&&ra(e),oa(e,t)}function oa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Xi===null){if(e===null)throw Error(i(308));Xi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Xi=Xi.next=t;return n}var sa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ca=t.unstable_scheduleCallback,la=t.unstable_NormalPriority,ua={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function da(){return{controller:new sa,data:new Map,refCount:0}}function fa(e){e.refCount--,e.refCount===0&&ca(la,function(){e.controller.abort()})}var pa=null,ma=0,ha=0,ga=null;function _a(e,t){if(pa===null){var n=pa=[];ma=0,ha=pd(),ga={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ma++,t.then(va,va),t}function va(){if(--ma===0&&pa!==null){ga!==null&&(ga.status=`fulfilled`);var e=pa;pa=null,ha=0,ga=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ya(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ba=D.S;D.S=function(e,t){iu=Pe(),typeof t==`object`&&t&&typeof t.then==`function`&&_a(e,t),ba!==null&&ba(e,t)};var xa=fe(null);function Sa(){var e=xa.current;return e===null?H.pooledCache:e}function Ca(e,t){t===null?k(xa,xa.current):k(xa,t.pool)}function wa(){var e=Sa();return e===null?null:{parent:ua._currentValue,pool:e}}var Ta=Error(i(460)),Ea=Error(i(474)),Da=Error(i(542)),Oa={then:function(){}};function ka(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Aa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Pa(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=H,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Pa(e),e}throw Ma=t,Ta}}function ja(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ma=e,Ta):e}}var Ma=null;function Na(){if(Ma===null)throw Error(i(459));var e=Ma;return Ma=null,e}function Pa(e){if(e===Ta||e===Da)throw Error(i(483))}var Fa=null,Ia=0;function La(e){var t=Ia;return Ia+=1,Fa===null&&(Fa=[]),Aa(Fa,e,t)}function Ra(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function za(e,t){throw t.$$typeof===m?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ba(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=gi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=bi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ne&&ja(i)===t.type)?(t=a(t,n.props),Ra(t,n),t.return=e,t):(t=vi(n.type,n.key,n.props,null,e.mode,r),Ra(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=yi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=bi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case g:return n=vi(t.type,t.key,t.props,null,e.mode,n),Ra(n,t),n.return=e,n;case v:return t=Si(t,e.mode,n),t.return=e,t;case ne:return t=ja(t),f(e,t,n)}if(ce(t)||ae(t))return t=yi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,La(t),n);if(t.$$typeof===C)return f(e,aa(e,t),n);za(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case g:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ne:return n=ja(n),p(e,t,n,r)}if(ce(n)||ae(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,La(n),r);if(n.$$typeof===C)return p(e,t,aa(e,n),r);za(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case g:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ne:return r=ja(r),m(e,t,n,r,i)}if(ce(r)||ae(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,La(r),i);if(r.$$typeof===C)return m(e,t,n,aa(t,r),i);za(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),F&&Ni(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return F&&Ni(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),F&&Ni(i,h),l}function _(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),F&&Ni(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return F&&Ni(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),F&&Ni(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case g:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ne&&ja(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ra(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=yi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=vi(o.type,o.key,o.props,null,e.mode,c),Ra(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}t(e,r),r=r.sibling}c=Si(o,e.mode,c),c.return=e,e=c}return s(e);case ne:return o=ja(o),b(e,r,o,c)}if(ce(o))return h(e,r,o,c);if(ae(o)){if(l=ae(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),_(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,La(o),c);if(o.$$typeof===C)return b(e,r,aa(e,o),c);za(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=bi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ia=0;var i=b(e,t,n,r);return Fa=null,i}catch(t){if(t===Ta||t===Da)throw t;var a=mi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Va=Ba(!0),Ha=Ba(!1),Ua=!1;function Wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ga(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=fi(e),di(e,null,n),t}return j(e,r,t,n),fi(e)}function Ja(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}function Ya(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Xa=!1;function Za(){if(Xa){var e=ga;if(e!==null)throw e}}function Qa(e,t,n,r){Xa=!1;var i=e.updateQueue;Ua=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var p=s.lane&-536870913,m=p!==s.lane;if(m?(W&p)===p:(r&p)===p){p!==0&&p===ha&&(Xa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;p=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,p);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,p=typeof h==`function`?h.call(_,d,p):h,p==null)break a;d=f({},d,p);break a;case 2:Ua=!0}}p=s.callback,p!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[p]:m.push(p))}else m={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Yl|=o,e.lanes=o,e.memoizedState=d}}function $a(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function eo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)$a(n[e],t)}var to=fe(null),no=fe(0);function ro(e,t){e=Jl,k(no,e),k(to,t),Jl=e|t.baseLanes}function io(){k(no,Jl),k(to,to.current)}function ao(){Jl=no.current,pe(to),pe(no)}var oo=fe(null),so=null;function co(e){var t=e.alternate;k(mo,mo.current&1),k(oo,e),so===null&&(t===null||to.current!==null||t.memoizedState!==null)&&(so=e)}function lo(e){k(mo,mo.current),k(oo,e),so===null&&(so=e)}function uo(e){e.tag===22?(k(mo,mo.current),k(oo,e),so===null&&(so=e)):fo(e)}function fo(){k(mo,mo.current),k(oo,oo.current)}function po(e){pe(oo),so===e&&(so=null),pe(mo)}var mo=fe(0);function ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||sf(n)||cf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var go=0,L=null,R=null,_o=null,vo=!1,yo=!1,bo=!1,xo=0,So=0,Co=null,wo=0;function To(){throw Error(i(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jr(e[n],t[n]))return!1;return!0}function Do(e,t,n,r,i,a){return go=a,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Ws:Gs,bo=!1,a=n(r,i),bo=!1,yo&&(a=ko(t,n,r,i)),Oo(e),a}function Oo(e){D.H=Us;var t=R!==null&&R.next!==null;if(go=0,_o=R=L=null,vo=!1,So=0,Co=null,t)throw Error(i(300));e===null||cc||(e=e.dependencies,e!==null&&na(e)&&(cc=!0))}function ko(e,t,n,r){L=e;var a=0;do{if(yo&&(Co=null),So=0,yo=!1,25<=a)throw Error(i(301));if(a+=1,_o=R=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=Ks,o=t(n,r)}while(yo);return o}function Ao(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?Lo(t):t,e=e.useState()[0],(R===null?null:R.memoizedState)!==e&&(L.flags|=1024),t}function jo(){var e=xo!==0;return xo=0,e}function Mo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function No(e){if(vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vo=!1}go=0,_o=R=L=null,yo=!1,So=xo=0,Co=null}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _o===null?L.memoizedState=_o=e:_o=_o.next=e,_o}function Fo(){if(R===null){var e=L.alternate;e=e===null?null:e.memoizedState}else e=R.next;var t=_o===null?L.memoizedState:_o.next;if(t!==null)_o=t,R=e;else{if(e===null)throw L.alternate===null?Error(i(467)):Error(i(310));R=e,e={memoizedState:R.memoizedState,baseState:R.baseState,baseQueue:R.baseQueue,queue:R.queue,next:null},_o===null?L.memoizedState=_o=e:_o=_o.next=e}return _o}function Io(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(e){var t=So;return So+=1,Co===null&&(Co=[]),e=Aa(Co,e,t),t=L,(_o===null?t.memoizedState:_o.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Ws:Gs),e}function Ro(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Lo(e);if(e.$$typeof===C)return ia(e)}throw Error(i(438,String(e)))}function zo(e){var t=null,n=L.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=L.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Io(),L.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function Bo(e,t){return typeof t==`function`?t(e):t}function Vo(e){return Ho(Fo(),R,e)}function Ho(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(go&f)===f:(W&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ha&&(d=!0);else if((go&p)===p){u=u.next,p===ha&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,L.lanes|=p,Yl|=p;f=u.action,bo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,L.lanes|=f,Yl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!jr(o,e.memoizedState)&&(cc=!0,d&&(n=ga,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Uo(e){var t=Fo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);jr(o,t.memoizedState)||(cc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Wo(e,t,n){var r=L,a=Fo(),o=F;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!jr((R||a).memoizedState,n);if(s&&(a.memoizedState=n,cc=!0),a=a.queue,hs(qo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||_o!==null&&_o.memoizedState.tag&1){if(r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,a,n,t),null),H===null)throw Error(i(349));o||go&127||Go(r,t,n)}return n}function Go(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=L.updateQueue,t===null?(t=Io(),L.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ko(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Yo(e)}function qo(e,t,n){return n(function(){Jo(t)&&Yo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jr(e,n)}catch{return!0}}function Yo(e){var t=ui(e,2);t!==null&&vu(t,e,2)}function Xo(e){var t=Po();if(typeof e==`function`){var n=e;if(e=n(),bo){Ge(!0);try{n()}finally{Ge(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t}function Zo(e,t,n,r){return e.baseState=n,Ho(e,R,typeof r==`function`?r:Bo)}function Qo(e,t,n,r,a){if(Bs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};D.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,$o(t,o)):(o.next=n.next,t.pending=n.next=o)}}function $o(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),es(e,t,s)}catch(n){ns(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),es(e,t,a)}catch(n){ns(e,t,n)}}function es(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ts(e,t,n)},function(n){return ns(e,t,n)}):ts(e,t,n)}function ts(e,t,n){t.status=`fulfilled`,t.value=n,rs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,$o(e,n)))}function ns(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,rs(t),t=t.next;while(t!==r)}e.action=null}function rs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function is(e,t){return t}function as(e,t){if(F){var n=H.formState;if(n!==null){a:{var r=L;if(F){if(P){b:{for(var i=P,a=Bi;i.nodeType!==8;){if(!a){i=null;break b}if(i=uf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){P=uf(i.nextSibling),r=i.data===`F!`;break a}}Hi(r)}r=!1}r&&(t=n[0])}}return n=Po(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},n.queue=r,n=Ls.bind(null,L,r),r.dispatch=n,r=Xo(!1),a=zs.bind(null,L,!1,r.queue),r=Po(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Qo.bind(null,L,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function os(e){return ss(Fo(),R,e)}function ss(e,t,n){if(t=Ho(e,t,is)[0],e=Vo(Bo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Lo(t)}catch(e){throw e===Ta?Da:e}else r=t;t=Fo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(L.flags|=2048,us(9,{destroy:void 0},cs.bind(null,i,n),null)),[r,a,e]}function cs(e,t){e.action=t}function ls(e){var t=Fo(),n=R;if(n!==null)return ss(t,n,e);Fo(),t=t.memoizedState,n=Fo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function us(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=L.updateQueue,t===null&&(t=Io(),L.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ds(){return Fo().memoizedState}function fs(e,t,n,r){var i=Po();L.flags|=e,i.memoizedState=us(1|t,{destroy:void 0},n,r===void 0?null:r)}function ps(e,t,n,r){var i=Fo();r=r===void 0?null:r;var a=i.memoizedState.inst;R!==null&&r!==null&&Eo(r,R.memoizedState.deps)?i.memoizedState=us(t,a,n,r):(L.flags|=e,i.memoizedState=us(1|t,a,n,r))}function ms(e,t){fs(8390656,8,e,t)}function hs(e,t){ps(2048,8,e,t)}function gs(e){L.flags|=4;var t=L.updateQueue;if(t===null)t=Io(),L.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _s(e){var t=Fo().memoizedState;return gs({ref:t,nextImpl:e}),function(){if(V&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function vs(e,t){return ps(4,2,e,t)}function ys(e,t){return ps(4,4,e,t)}function bs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,n){n=n==null?null:n.concat([e]),ps(4,4,bs.bind(null,t,e),n)}function Ss(){}function Cs(e,t){var n=Fo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ws(e,t){var n=Fo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Eo(t,r[1]))return r[0];if(r=e(),bo){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r}function Ts(e,t,n){return n===void 0||go&1073741824&&!(W&261930)?e.memoizedState=t:(e.memoizedState=n,e=_u(),L.lanes|=e,Yl|=e,n)}function Es(e,t,n,r){return jr(n,t)?n:to.current===null?!(go&42)||go&1073741824&&!(W&261930)?(cc=!0,e.memoizedState=n):(e=_u(),L.lanes|=e,Yl|=e,t):(e=Ts(e,n,r),jr(e,t)||(cc=!0),e)}function Ds(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};D.T=s,zs(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Rs(e,t,ya(c,r),gu(e)):Rs(e,t,r,gu(e))}catch(n){Rs(e,t,{then:function(){},status:`rejected`,reason:n},gu())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function Os(){}function ks(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=As(e).queue;Ds(e,a,t,le,n===null?Os:function(){return js(e),n(r)})}function As(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function js(e){var t=As(e);t.next===null&&(t=e.alternate.memoizedState),Rs(e,t.next.queue,{},gu())}function Ms(){return ia(ep)}function Ns(){return Fo().memoizedState}function Ps(){return Fo().memoizedState}function Fs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=gu();e=Ka(n);var r=qa(t,e,n);r!==null&&(vu(r,t,n),Ja(r,t,n)),t={cache:da()},e.payload=t;return}t=t.return}}function Is(e,t,n){var r=gu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bs(e)?Vs(t,n):(n=li(e,t,n,r),n!==null&&(vu(n,e,r),Hs(n,t,r)))}function Ls(e,t,n){Rs(e,t,n,gu())}function Rs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bs(e))Vs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,jr(s,o))return j(e,t,i,0),H===null&&ci(),!1}catch{}if(n=li(e,t,i,r),n!==null)return vu(n,e,r),Hs(n,t,r),!0}return!1}function zs(e,t,n,r){if(r={lane:2,revertLane:pd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bs(e)){if(t)throw Error(i(479))}else t=li(e,n,r,2),t!==null&&vu(t,e,2)}function Bs(e){var t=e.alternate;return e===L||t!==null&&t===L}function Vs(e,t){yo=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}var Us={readContext:ia,use:Ro,useCallback:To,useContext:To,useEffect:To,useImperativeHandle:To,useLayoutEffect:To,useInsertionEffect:To,useMemo:To,useReducer:To,useRef:To,useState:To,useDebugValue:To,useDeferredValue:To,useTransition:To,useSyncExternalStore:To,useId:To,useHostTransitionStatus:To,useFormState:To,useActionState:To,useOptimistic:To,useMemoCache:To,useCacheRefresh:To};Us.useEffectEvent=To;var Ws={readContext:ia,use:Ro,useCallback:function(e,t){return Po().memoizedState=[e,t===void 0?null:t],e},useContext:ia,useEffect:ms,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),fs(4194308,4,bs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fs(4194308,4,e,t)},useInsertionEffect:function(e,t){fs(4,2,e,t)},useMemo:function(e,t){var n=Po();t=t===void 0?null:t;var r=e();if(bo){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Po();if(n!==void 0){var i=n(t);if(bo){Ge(!0);try{n(t)}finally{Ge(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Is.bind(null,L,e),[r.memoizedState,e]},useRef:function(e){var t=Po();return e={current:e},t.memoizedState=e},useState:function(e){e=Xo(e);var t=e.queue,n=Ls.bind(null,L,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ss,useDeferredValue:function(e,t){return Ts(Po(),e,t)},useTransition:function(){var e=Xo(!1);return e=Ds.bind(null,L,e.queue,!0,!1),Po().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=L,a=Po();if(F){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),H===null)throw Error(i(349));W&127||Go(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ms(qo.bind(null,r,o,e),[e]),r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,o,n,t),null),n},useId:function(){var e=Po(),t=H.identifierPrefix;if(F){var n=Mi,r=N;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=xo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=wo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ms,useFormState:as,useActionState:as,useOptimistic:function(e){var t=Po();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=zs.bind(null,L,!0,n),n.dispatch=t,[e,t]},useMemoCache:zo,useCacheRefresh:function(){return Po().memoizedState=Fs.bind(null,L)},useEffectEvent:function(e){var t=Po(),n={impl:e};return t.memoizedState=n,function(){if(V&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Gs={readContext:ia,use:Ro,useCallback:Cs,useContext:ia,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Vo,useRef:ds,useState:function(){return Vo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){return Es(Fo(),R.memoizedState,e,t)},useTransition:function(){var e=Vo(Bo)[0],t=Fo().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:os,useActionState:os,useOptimistic:function(e,t){return Zo(Fo(),R,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Gs.useEffectEvent=_s;var Ks={readContext:ia,use:Ro,useCallback:Cs,useContext:ia,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Uo,useRef:ds,useState:function(){return Uo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){var n=Fo();return R===null?Ts(n,e,t):Es(n,R.memoizedState,e,t)},useTransition:function(){var e=Uo(Bo)[0],t=Fo().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:ls,useActionState:ls,useOptimistic:function(e,t){var n=Fo();return R===null?(n.baseState=e,[e,n.queue.dispatch]):Zo(n,R,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Ks.useEffectEvent=_s;function qs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:f({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Js={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=gu(),i=Ka(r);i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,r),t!==null&&(vu(t,e,r),Ja(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=gu(),i=Ka(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,r),t!==null&&(vu(t,e,r),Ja(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gu(),r=Ka(n);r.tag=2,t!=null&&(r.callback=t),t=qa(e,r,n),t!==null&&(vu(t,e,n),Ja(t,e,n))}};function Ys(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,a):!0}function Xs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Js.enqueueReplaceState(t,t.state,null)}function Zs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=f({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Qs(e){ii(e)}function $s(e){console.error(e)}function ec(e){ii(e)}function tc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function rc(e,t,n){return n=Ka(n),n.tag=3,n.payload={element:null},n.callback=function(){tc(e,t)},n}function ic(e){return e=Ka(e),e.tag=3,e}function ac(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){nc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){nc(t,n,r),typeof i!=`function`&&(su===null?su=new Set([this]):su.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function oc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ta(t,n,a,!0),n=oo.current,n!==null){switch(n.tag){case 31:case 13:return so===null?Au():n.alternate===null&&K===0&&(K=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Oa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Ju(e,r,a)),!1;case 22:return n.flags|=65536,r===Oa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Ju(e,r,a)),!1}throw Error(i(435,n.tag))}return Ju(e,r,a),Au(),!1}if(F)return t=oo.current,t===null?(r!==Vi&&(t=Error(i(423),{cause:r}),Ji(wi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=wi(r,n),a=rc(e.stateNode,r,a),Ya(e,a),K!==4&&(K=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Vi&&(e=Error(i(422),{cause:r}),Ji(wi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=wi(o,n),eu===null?eu=[o]:eu.push(o),K!==4&&(K=2),t===null)return!0;r=wi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=rc(n.stateNode,r,e),Ya(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(su===null||!su.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ic(a),ac(a,e,n,r),Ya(n,a),!1}n=n.return}while(n!==null);return!1}var sc=Error(i(461)),cc=!1;function lc(e,t,n,r){t.child=e===null?Ha(t,null,n,r):Va(t,e.child,n,r)}function uc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ra(t),r=Do(e,t,n,o,a,i),s=jo(),e!==null&&!cc?(Mo(e,t,i),Pc(e,t,i)):(F&&s&&Fi(t),t.flags|=1,lc(e,t,r,i),t.child)}function dc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!hi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,fc(e,t,a,r,i)):(e=vi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Fc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Mr:n,n(o,r)&&e.ref===t.ref)return Pc(e,t,i)}return t.flags|=1,e=gi(a,r),e.ref=t.ref,e.return=t,t.child=e}function fc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Mr(a,r)&&e.ref===t.ref)if(cc=!1,t.pendingProps=r=a,Fc(e,i))e.flags&131072&&(cc=!0);else return t.lanes=e.lanes,Pc(e,t,i)}return bc(e,t,n,r,i)}function pc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return hc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ca(t,a===null?null:a.cachePool),a===null?io():ro(t,a),uo(t);else return r=t.lanes=536870912,hc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ca(t,null),io(),fo(t)):(Ca(t,a.cachePool),ro(t,a),fo(t),t.memoizedState=null);return lc(e,t,i,n),t.child}function mc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function hc(e,t,n,r,i){var a=Sa();return a=a===null?null:{parent:ua._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ca(t,null),io(),uo(t),e!==null&&ta(e,t,r,!0),t.childLanes=i,null}function gc(e,t){return t=kc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function _c(e,t,n){return Va(t,e.child,null,n),e=gc(t,t.pendingProps),e.flags|=2,po(t),t.memoizedState=null,e}function vc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(F){if(r.mode===`hidden`)return e=gc(t,r),t.lanes=536870912,mc(null,e);if(lo(t),(e=P)?(e=of(e,Bi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:N,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,Ri=t,P=null)):e=null,e===null)throw Hi(t);return t.lanes=536870912,null}return gc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(lo(t),a)if(t.flags&256)t.flags&=-257,t=_c(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(cc||ta(e,t,n,!1),a=(n&e.childLanes)!==0,cc||a){if(r=H,r!==null&&(s=lt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ui(e,s),vu(r,e,s),sc;Au(),t=_c(e,t,n)}else e=o.treeContext,P=uf(s.nextSibling),Ri=t,F=!0,zi=null,Bi=!1,e!==null&&Li(t,e),t=gc(t,r),t.flags|=4096;return t}return e=gi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function yc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function bc(e,t,n,r,i){return ra(t),n=Do(e,t,n,r,void 0,i),r=jo(),e!==null&&!cc?(Mo(e,t,i),Pc(e,t,i)):(F&&r&&Fi(t),t.flags|=1,lc(e,t,n,i),t.child)}function xc(e,t,n,r,i,a){return ra(t),t.updateQueue=null,n=ko(t,r,n,i),Oo(e),r=jo(),e!==null&&!cc?(Mo(e,t,a),Pc(e,t,a)):(F&&r&&Fi(t),t.flags|=1,lc(e,t,n,a),t.child)}function Sc(e,t,n,r,i){if(ra(t),t.stateNode===null){var a=M,o=n.contextType;typeof o==`object`&&o&&(a=ia(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Js,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Wa(t),o=n.contextType,a.context=typeof o==`object`&&o?ia(o):M,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(qs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Js.enqueueReplaceState(a,a.state,null),Qa(t,r,a,i),Za(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Zs(n,s);a.props=c;var l=a.context,u=n.contextType;o=M,typeof u==`object`&&u&&(o=ia(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Xs(t,a,r,o),Ua=!1;var f=t.memoizedState;a.state=f,Qa(t,r,a,i),Za(),l=t.memoizedState,s||f!==l||Ua?(typeof d==`function`&&(qs(t,n,d,r),l=t.memoizedState),(c=Ua||Ys(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ga(e,t),o=t.memoizedProps,u=Zs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=M,typeof l==`object`&&l&&(c=ia(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Xs(t,a,r,c),Ua=!1,f=t.memoizedState,a.state=f,Qa(t,r,a,i),Za();var p=t.memoizedState;o!==d||f!==p||Ua||e!==null&&e.dependencies!==null&&na(e.dependencies)?(typeof s==`function`&&(qs(t,n,s,r),p=t.memoizedState),(u=Ua||Ys(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&na(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,yc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Va(t,e.child,null,i),t.child=Va(t,null,n,i)):lc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Pc(e,t,i),e}function Cc(e,t,n,r){return Ki(),t.flags|=256,lc(e,t,n,r),t.child}var wc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tc(e){return{baseLanes:e,cachePool:wa()}}function Ec(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Ql),e}function Dc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(mo.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(F){if(a?co(t):fo(t),(e=P)?(e=of(e,Bi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:N,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,Ri=t,P=null)):e=null,e===null)throw Hi(t);return cf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(fo(t),a=t.mode,c=kc({mode:`hidden`,children:c},a),r=yi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Tc(n),r.childLanes=Ec(e,s,n),t.memoizedState=wc,mc(null,r)):(co(t),Oc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(co(t),t.flags&=-257,t=Ac(e,t,n)):t.memoizedState===null?(fo(t),c=r.fallback,a=t.mode,r=kc({mode:`visible`,children:r.children},a),c=yi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Va(t,e.child,null,n),r=t.child,r.memoizedState=Tc(n),r.childLanes=Ec(e,s,n),t.memoizedState=wc,t=mc(null,r)):(fo(t),t.child=e.child,t.flags|=128,t=null);else if(co(t),cf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ji({value:r,source:null,stack:null}),t=Ac(e,t,n)}else if(cc||ta(e,t,n,!1),s=(n&e.childLanes)!==0,cc||s){if(s=H,s!==null&&(r=lt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ui(e,r),vu(s,e,r),sc;sf(c)||Au(),t=Ac(e,t,n)}else sf(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,P=uf(c.nextSibling),Ri=t,F=!0,zi=null,Bi=!1,e!==null&&Li(t,e),t=Oc(t,r.children),t.flags|=4096);return t}return a?(fo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=gi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=yi(c,a,n,null),c.flags|=2):c=gi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,mc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Tc(n):(a=c.cachePool,a===null?a=wa():(l=ua._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Ec(e,s,n),t.memoizedState=wc,mc(e.child,r)):(co(t),n=e.child,e=n.sibling,n=gi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Oc(e,t){return t=kc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function kc(e,t){return e=mi(22,e,null,t),e.lanes=0,e}function Ac(e,t,n){return Va(t,e.child,null,n),e=Oc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$i(e.return,t,n)}function Mc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Nc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=mo.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,k(mo,o),lc(e,t,r,n),r=F?Oi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jc(e,n,t);else if(e.tag===19)jc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ho(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Mc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ho(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Mc(t,!0,n,null,a,r);break;case`together`:Mc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Pc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ta(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=gi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Fc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&na(e)))}function Ic(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),Zi(t,ua,e.memoizedState.cache),Ki();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:Zi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,lo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(co(t),e=Pc(e,t,n),e===null?null:e.sibling):Dc(e,t,n):(co(t),t.flags|=128,null);co(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(ta(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Nc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(mo,mo.current),r)break;return null;case 22:return t.lanes=0,pc(e,t,n,t.pendingProps);case 24:Zi(t,ua,e.memoizedState.cache)}return Pc(e,t,n)}function Lc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)cc=!0;else{if(!Fc(e,n)&&!(t.flags&128))return cc=!1,Ic(e,t,n);cc=!!(e.flags&131072)}else cc=!1,F&&t.flags&1048576&&Pi(t,Oi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ja(t.elementType),t.type=e,typeof e==`function`)hi(e)?(r=Zs(e,r),t.tag=1,t=Sc(null,t,e,r,n)):(t.tag=0,t=bc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=uc(null,t,e,r,n);break a}if(a===te){t.tag=14,t=dc(null,t,e,r,n);break a}}throw t=se(e)||e,Error(i(306,t,``))}}return t;case 0:return bc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Zs(r,t.pendingProps),Sc(e,t,r,a,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ga(e,t),Qa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Zi(t,ua,r),r!==o.cache&&ea(t,[ua],n,!0),Za(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Cc(e,t,r,n);break a}else if(r!==a){a=wi(Error(i(424)),t),Ji(a),t=Cc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(P=uf(e.firstChild),Ri=t,F=!0,zi=null,Bi=!0,n=Ha(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ki(),r===a){t=Pc(e,t,n);break a}lc(e,t,r,n)}t=t.child}return t;case 26:return yc(e,t),e===null?(n=jf(t.type,null,t.pendingProps,null))?t.memoizedState=n:F||(n=t.type,e=t.pendingProps,r=Hd(ge.current).createElement(n),r[ht]=t,r[gt]=e,Id(r,n,e),Ot(r),t.stateNode=r):t.memoizedState=jf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&F&&(r=t.stateNode=mf(t.type,t.pendingProps,ge.current),Ri=t,Bi=!0,a=P,$d(t.type)?(df=a,P=uf(r.firstChild)):P=a),lc(e,t,t.pendingProps.children,n),yc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&F&&((a=r=P)&&(r=rf(r,t.type,t.pendingProps,Bi),r===null?a=!1:(t.stateNode=r,Ri=t,P=uf(r.firstChild),Bi=!1,a=!0)),a||Hi(t)),be(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Gd(a,o)?r=null:s!==null&&Gd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Do(e,t,Ao,null,null,n),ep._currentValue=a),yc(e,t),lc(e,t,r,n),t.child;case 6:return e===null&&F&&((e=n=P)&&(n=af(n,t.pendingProps,Bi),n===null?e=!1:(t.stateNode=n,Ri=t,P=null,e=!0)),e||Hi(t)),null;case 13:return Dc(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Va(t,null,r,n):lc(e,t,r,n),t.child;case 11:return uc(e,t,t.type,t.pendingProps,n);case 7:return lc(e,t,t.pendingProps,n),t.child;case 8:return lc(e,t,t.pendingProps.children,n),t.child;case 12:return lc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Zi(t,t.type,r.value),lc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ra(t),a=ia(a),r=r(a),t.flags|=1,lc(e,t,r,n),t.child;case 14:return dc(e,t,t.type,t.pendingProps,n);case 15:return fc(e,t,t.type,t.pendingProps,n);case 19:return Nc(e,t,n);case 31:return vc(e,t,n);case 22:return pc(e,t,n,t.pendingProps);case 24:return ra(t),r=ia(ua),e===null?(a=Sa(),a===null&&(a=H,o=da(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Wa(t),Zi(t,ua,a)):((e.lanes&n)!==0&&(Ga(e,t),Qa(t,null,null,n),Za()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Zi(t,ua,r),r!==a.cache&&ea(t,[ua],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Zi(t,ua,r))),lc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Rc(e){e.flags|=4}function zc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Du())e.flags|=8192;else throw Ma=Oa,Ea}else e.flags&=-16777217}function Bc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Kf(t))if(Du())e.flags|=8192;else throw Ma=Oa,Ea}function Vc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:rt(),e.lanes|=t,$l|=t)}function Hc(e,t){if(!F)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function z(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Uc(e,t,n){var r=t.pendingProps;switch(Ii(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return z(t),null;case 1:return z(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Qi(ua),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Gi(t)?Rc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qi())),z(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Rc(t),o===null?(z(t),zc(t,a,null,r,n)):(z(t),Bc(t,o))):o?o===e.memoizedState?(z(t),t.flags&=-16777217):(Rc(t),z(t),Bc(t,o)):(e=e.memoizedProps,e!==r&&Rc(t),z(t),zc(t,a,e,r,n)),null;case 27:if(xe(t),n=ge.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Rc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return z(t),null}e=me.current,Gi(t)?Ui(t,e):(e=mf(a,r,n),t.stateNode=e,Rc(t))}return z(t),null;case 5:if(xe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Rc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return z(t),null}if(o=me.current,Gi(t))Ui(t,o);else{var s=Hd(ge.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ht]=t,o[gt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Id(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Rc(t)}}return z(t),zc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Rc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ge.current,Gi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ri,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ht]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Pd(e.nodeValue,n)),e||Hi(t,!0)}else e=Hd(e).createTextNode(r),e[ht]=t,t.stateNode=e}return z(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Gi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ht]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;z(t),e=!1}else n=qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(po(t),t):(po(t),null);if(t.flags&128)throw Error(i(558))}return z(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ht]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;z(t),a=!1}else a=qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(po(t),t):(po(t),null)}return po(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Vc(t,t.updateQueue),z(t),null);case 4:return ye(),e===null&&wd(t.stateNode.containerInfo),z(t),null;case 10:return Qi(t.type),z(t),null;case 19:if(pe(mo),r=t.memoizedState,r===null)return z(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null)if(a)Hc(r,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ho(e),o!==null){for(t.flags|=128,Hc(r,!1),e=o.updateQueue,t.updateQueue=e,Vc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)_i(n,e),n=n.sibling;return k(mo,mo.current&1|2),F&&Ni(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Pe()>au&&(t.flags|=128,a=!0,Hc(r,!1),t.lanes=4194304)}else{if(!a)if(e=ho(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Vc(t,e),Hc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!F)return z(t),null}else 2*Pe()-r.renderingStartTime>au&&n!==536870912&&(t.flags|=128,a=!0,Hc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(z(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Pe(),e.sibling=null,n=mo.current,k(mo,a?n&1|2:n&1),F&&Ni(t,r.treeForkCount),e);case 22:case 23:return po(t),ao(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(z(t),t.subtreeFlags&6&&(t.flags|=8192)):z(t),n=t.updateQueue,n!==null&&Vc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&pe(xa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Qi(ua),z(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Wc(e,t){switch(Ii(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qi(ua),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(po(t),t.alternate===null)throw Error(i(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(po(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(mo),null;case 4:return ye(),null;case 10:return Qi(t.type),null;case 22:case 23:return po(t),ao(),e!==null&&pe(xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Qi(ua),null;case 25:return null;default:return null}}function Gc(e,t){switch(Ii(t),t.tag){case 3:Qi(ua),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&po(t);break;case 13:po(t);break;case 19:pe(mo);break;case 10:Qi(t.type);break;case 22:case 23:po(t),ao(),e!==null&&pe(xa);break;case 24:Qi(ua)}}function Kc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){J(t,t.return,e)}}function qc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){J(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){J(t,t.return,e)}}function Jc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{eo(t,n)}catch(t){J(e,e.return,t)}}}function Yc(e,t,n){n.props=Zs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){J(e,t,n)}}function Xc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){J(e,t,n)}}function Zc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){J(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){J(e,t,n)}else n.current=null}function Qc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){J(e,e.return,t)}}function $c(e,t,n){try{var r=e.stateNode;Ld(r,e.type,n,t),r[gt]=t}catch(t){J(e,e.return,t)}}function el(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$d(e.type)||e.tag===4}function tl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||el(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$d(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&$d(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&$d(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(rl(e,t,n),e=e.sibling;e!==null;)rl(e,t,n),e=e.sibling}function il(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Id(t,r,n),t[ht]=e,t[gt]=n}catch(t){J(e,e.return,t)}}var al=!1,ol=!1,sl=!1,cl=typeof WeakSet==`function`?WeakSet:Set,ll=null;function ul(e,t){if(e=e.containerInfo,Bd=lp,e=Fr(e),Ir(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Vd={focusedElem:e,selectionRange:n},lp=!1,ll=t;ll!==null;)if(t=ll,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ll=e;else for(;ll!==null;){switch(t=ll,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Zs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){J(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)nf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:nf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,ll=e;break}ll=t.return}}function dl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Tl(e,n),r&4&&Kc(5,n);break;case 1:if(Tl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){J(n,n.return,e)}else{var i=Zs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){J(n,n.return,e)}}r&64&&Jc(n),r&512&&Xc(n,n.return);break;case 3:if(Tl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{eo(e,t)}catch(e){J(n,n.return,e)}}break;case 27:t===null&&r&4&&il(n);case 26:case 5:Tl(e,n),t===null&&r&4&&Qc(n),r&512&&Xc(n,n.return);break;case 12:Tl(e,n);break;case 31:Tl(e,n),r&4&&gl(e,n);break;case 13:Tl(e,n),r&4&&_l(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Zu.bind(null,n),lf(e,n))));break;case 22:if(r=n.memoizedState!==null||al,!r){t=t!==null&&t.memoizedState!==null||ol,i=al;var a=ol;al=r,(ol=t)&&!a?Dl(e,n,!!(n.subtreeFlags&8772)):Tl(e,n),al=i,ol=a}break;case 30:break;default:Tl(e,n)}}function fl(e){var t=e.alternate;t!==null&&(e.alternate=null,fl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var B=null,pl=!1;function ml(e,t,n){for(n=n.child;n!==null;)hl(e,t,n),n=n.sibling}function hl(e,t,n){if(We&&typeof We.onCommitFiberUnmount==`function`)try{We.onCommitFiberUnmount(Ue,n)}catch{}switch(n.tag){case 26:ol||Zc(n,t),ml(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ol||Zc(n,t);var r=B,i=pl;$d(n.type)&&(B=n.stateNode,pl=!1),ml(e,t,n),hf(n.stateNode),B=r,pl=i;break;case 5:ol||Zc(n,t);case 6:if(r=B,i=pl,B=null,ml(e,t,n),B=r,pl=i,B!==null)if(pl)try{(B.nodeType===9?B.body:B.nodeName===`HTML`?B.ownerDocument.body:B).removeChild(n.stateNode)}catch(e){J(n,t,e)}else try{B.removeChild(n.stateNode)}catch(e){J(n,t,e)}break;case 18:B!==null&&(pl?(e=B,ef(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Pp(e)):ef(B,n.stateNode));break;case 4:r=B,i=pl,B=n.stateNode.containerInfo,pl=!0,ml(e,t,n),B=r,pl=i;break;case 0:case 11:case 14:case 15:qc(2,n,t),ol||qc(4,n,t),ml(e,t,n);break;case 1:ol||(Zc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Yc(n,t,r)),ml(e,t,n);break;case 21:ml(e,t,n);break;case 22:ol=(r=ol)||n.memoizedState!==null,ml(e,t,n),ol=r;break;default:ml(e,t,n)}}function gl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Pp(e)}catch(e){J(t,t.return,e)}}}function _l(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pp(e)}catch(e){J(t,t.return,e)}}function vl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new cl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new cl),t;default:throw Error(i(435,e.tag))}}function yl(e,t){var n=vl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Qu.bind(null,e,t);t.then(r,r)}})}function bl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if($d(c.type)){B=c.stateNode,pl=!1;break a}break;case 5:B=c.stateNode,pl=!1;break a;case 3:case 4:B=c.stateNode.containerInfo,pl=!0;break a}c=c.return}if(B===null)throw Error(i(160));hl(o,s,a),B=null,pl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Sl(t,e),t=t.sibling}var xl=null;function Sl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bl(t,e),Cl(e),r&4&&(qc(3,e,e.return),Kc(3,e),qc(5,e,e.return));break;case 1:bl(t,e),Cl(e),r&512&&(ol||n===null||Zc(n,n.return)),r&64&&al&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=xl;if(bl(t,e),Cl(e),r&512&&(ol||n===null||Zc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[St]||o[ht]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Id(o,r,n),o[ht]=e,Ot(o),r=o;break a;case`link`:var s=Uf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Id(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Uf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Id(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ht]=e,Ot(o),r=o}e.stateNode=r}else Wf(a,e.type,e.stateNode);else e.stateNode=Rf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&$c(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Wf(a,e.type,e.stateNode):Rf(a,r,e.memoizedProps))}break;case 27:bl(t,e),Cl(e),r&512&&(ol||n===null||Zc(n,n.return)),n!==null&&r&4&&$c(e,e.memoizedProps,n.memoizedProps);break;case 5:if(bl(t,e),Cl(e),r&512&&(ol||n===null||Zc(n,n.return)),e.flags&32){a=e.stateNode;try{en(a,``)}catch(t){J(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,$c(e,a,n===null?a:n.memoizedProps)),r&1024&&(sl=!0);break;case 6:if(bl(t,e),Cl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){J(e,e.return,t)}}break;case 3:if(Hf=null,a=xl,xl=vf(t.containerInfo),bl(t,e),xl=a,Cl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pp(t.containerInfo)}catch(t){J(e,e.return,t)}sl&&(sl=!1,wl(e));break;case 4:r=xl,xl=vf(e.stateNode.containerInfo),bl(t,e),Cl(e),xl=r;break;case 12:bl(t,e),Cl(e);break;case 31:bl(t,e),Cl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,yl(e,r)));break;case 13:bl(t,e),Cl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ru=Pe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,yl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=al,d=ol;if(al=u||a,ol=d||l,bl(t,e),ol=d,al=u,Cl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||al||ol||El(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){J(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){J(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?tf(m,!0):tf(l.stateNode,!1)}catch(e){J(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,yl(e,n))));break;case 19:bl(t,e),Cl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,yl(e,r)));break;case 30:break;case 21:break;default:bl(t,e),Cl(e)}}function Cl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(el(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;rl(e,tl(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(en(o,``),n.flags&=-33),rl(e,tl(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;nl(e,tl(e),s);break;default:throw Error(i(161))}}catch(t){J(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;wl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Tl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)dl(e,t.alternate,t),t=t.sibling}function El(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:qc(4,t,t.return),El(t);break;case 1:Zc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Yc(t,t.return,n),El(t);break;case 27:hf(t.stateNode);case 26:case 5:Zc(t,t.return),El(t);break;case 22:t.memoizedState===null&&El(t);break;case 30:El(t);break;default:El(t)}e=e.sibling}}function Dl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Dl(i,a,n),Kc(4,a);break;case 1:if(Dl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){J(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)$a(c[i],s)}catch(e){J(r,r.return,e)}}n&&o&64&&Jc(a),Xc(a,a.return);break;case 27:il(a);case 26:case 5:Dl(i,a,n),n&&r===null&&o&4&&Qc(a),Xc(a,a.return);break;case 12:Dl(i,a,n);break;case 31:Dl(i,a,n),n&&o&4&&gl(i,a);break;case 13:Dl(i,a,n),n&&o&4&&_l(i,a);break;case 22:a.memoizedState===null&&Dl(i,a,n),Xc(a,a.return);break;case 30:break;default:Dl(i,a,n)}t=t.sibling}}function Ol(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&fa(n))}function kl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e))}function Al(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jl(e,t,n,r),t=t.sibling}function jl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Al(e,t,n,r),i&2048&&Kc(9,t);break;case 1:Al(e,t,n,r);break;case 3:Al(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e)));break;case 12:if(i&2048){Al(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){J(t,t.return,e)}}else Al(e,t,n,r);break;case 31:Al(e,t,n,r);break;case 13:Al(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Al(e,t,n,r):(a._visibility|=2,Ml(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?Al(e,t,n,r):Nl(e,t),i&2048&&Ol(o,t);break;case 24:Al(e,t,n,r),i&2048&&kl(t.alternate,t);break;default:Al(e,t,n,r)}}function Ml(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ml(a,o,s,c,i),Kc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ml(a,o,s,c,i)):u._visibility&2?Ml(a,o,s,c,i):Nl(a,o),i&&l&2048&&Ol(o.alternate,o);break;case 24:Ml(a,o,s,c,i),i&&l&2048&&kl(o.alternate,o);break;default:Ml(a,o,s,c,i)}t=t.sibling}}function Nl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Nl(n,r),i&2048&&Ol(r.alternate,r);break;case 24:Nl(n,r),i&2048&&kl(r.alternate,r);break;default:Nl(n,r)}t=t.sibling}}var Pl=8192;function Fl(e,t,n){if(e.subtreeFlags&Pl)for(e=e.child;e!==null;)Il(e,t,n),e=e.sibling}function Il(e,t,n){switch(e.tag){case 26:Fl(e,t,n),e.flags&Pl&&e.memoizedState!==null&&qf(n,xl,e.memoizedState,e.memoizedProps);break;case 5:Fl(e,t,n);break;case 3:case 4:var r=xl;xl=vf(e.stateNode.containerInfo),Fl(e,t,n),xl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Pl,Pl=16777216,Fl(e,t,n),Pl=r):Fl(e,t,n));break;default:Fl(e,t,n)}}function Ll(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Rl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ll=r,Vl(r,e)}Ll(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zl(e),e=e.sibling}function zl(e){switch(e.tag){case 0:case 11:case 15:Rl(e),e.flags&2048&&qc(9,e,e.return);break;case 3:Rl(e);break;case 12:Rl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Bl(e)):Rl(e);break;default:Rl(e)}}function Bl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ll=r,Vl(r,e)}Ll(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:qc(8,t,t.return),Bl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Bl(t));break;default:Bl(t)}e=e.sibling}}function Vl(e,t){for(;ll!==null;){var n=ll;switch(n.tag){case 0:case 11:case 15:qc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:fa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ll=r;else a:for(n=e;ll!==null;){r=ll;var i=r.sibling,a=r.return;if(fl(r),r===n){ll=null;break a}if(i!==null){i.return=a,ll=i;break a}ll=a}}}var Hl={getCacheForType:function(e){var t=ia(ua),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ia(ua).controller.signal}},Ul=typeof WeakMap==`function`?WeakMap:Map,V=0,H=null,U=null,W=0,G=0,Wl=null,Gl=!1,Kl=!1,ql=!1,Jl=0,K=0,Yl=0,Xl=0,Zl=0,Ql=0,$l=0,eu=null,tu=null,nu=!1,ru=0,iu=0,au=1/0,ou=null,su=null,q=0,cu=null,lu=null,uu=0,du=0,fu=null,pu=null,mu=0,hu=null;function gu(){return V&2&&W!==0?W&-W:D.T===null?ft():pd()}function _u(){if(Ql===0)if(!(W&536870912)||F){var e=Ze;Ze<<=1,!(Ze&3932160)&&(Ze=262144),Ql=e}else Ql=536870912;return e=oo.current,e!==null&&(e.flags|=32),Ql}function vu(e,t,n){(e===H&&(G===2||G===9)||e.cancelPendingCommit!==null)&&(Tu(e,0),Su(e,W,Ql,!1)),at(e,n),(!(V&2)||e!==H)&&(e===H&&(!(V&2)&&(Xl|=n),K===4&&Su(e,W,Ql,!1)),od(e))}function yu(e,t,n){if(V&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||tt(e,t),a=r?Nu(e,t):ju(e,t,!0),o=r;do{if(a===0){Kl&&!r&&Su(e,t,0,!1);break}if(n=e.current.alternate,o&&!xu(n)){a=ju(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=eu;var l=c.current.memoizedState.isDehydrated;if(l&&(Tu(c,s).flags|=256),s=ju(c,s,!1),s!==2){if(ql&&!l){c.errorRecoveryDisabledLanes|=o,Xl|=o,a=4;break a}o=tu,tu=a,o!==null&&(tu===null?tu=o:tu.push.apply(tu,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Tu(e,0),Su(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Su(r,t,Ql,!Gl);break a;case 2:tu=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=ru+300-Pe(),10<a)){if(Su(r,t,Ql,!Gl),et(r,0,!0)!==0)break a;uu=t,r.timeoutHandle=Jd(bu.bind(null,r,n,tu,ou,nu,t,Ql,Xl,$l,Gl,o,`Throttled`,-0,0),a);break a}bu(r,n,tu,ou,nu,t,Ql,Xl,$l,Gl,o,null,-0,0)}break}while(1);od(e)}function bu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Il(t,a,d);var m=(a&62914560)===a?ru-Pe():(a&4194048)===a?iu-Pe():0;if(m=Yf(d,m),m!==null){uu=a,e.cancelPendingCommit=m(Bu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),Su(e,a,o,!l);return}}Bu(e,t,a,n,r,i,o,s,c)}function xu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!jr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Su(e,t,n,r){t&=~Zl,t&=~Xl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ke(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&st(e,n,t)}function Cu(){return V&6?!0:(sd(0,!1),!1)}function wu(){if(U!==null){if(G===0)var e=U.return;else e=U,Xi=Yi=null,No(e),Fa=null,Ia=0,e=U;for(;e!==null;)Gc(e.alternate,e),e=e.return;U=null}}function Tu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Yd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),uu=0,wu(),H=e,U=n=gi(e.current,null),W=t,G=0,Wl=null,Gl=!1,Kl=tt(e,t),ql=!1,$l=Ql=Zl=Xl=Yl=K=0,tu=eu=null,nu=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ke(r),a=1<<i;t|=e[i],r&=~a}return Jl=t,ci(),n}function Eu(e,t){L=null,D.H=Us,t===Ta||t===Da?(t=Na(),G=3):t===Ea?(t=Na(),G=4):G=t===sc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Wl=t,U===null&&(K=1,tc(e,wi(t,e.current)))}function Du(){var e=oo.current;return e===null?!0:(W&4194048)===W?so===null:(W&62914560)===W||W&536870912?e===so:!1}function Ou(){var e=D.H;return D.H=Us,e===null?Us:e}function ku(){var e=D.A;return D.A=Hl,e}function Au(){K=4,Gl||(W&4194048)!==W&&oo.current!==null||(Kl=!0),!(Yl&134217727)&&!(Xl&134217727)||H===null||Su(H,W,Ql,!1)}function ju(e,t,n){var r=V;V|=2;var i=Ou(),a=ku();(H!==e||W!==t)&&(ou=null,Tu(e,t)),t=!1;var o=K;a:do try{if(G!==0&&U!==null){var s=U,c=Wl;switch(G){case 8:wu(),o=6;break a;case 3:case 2:case 9:case 6:oo.current===null&&(t=!0);var l=G;if(G=0,Wl=null,Lu(e,s,c,l),n&&Kl){o=0;break a}break;default:l=G,G=0,Wl=null,Lu(e,s,c,l)}}Mu(),o=K;break}catch(t){Eu(e,t)}while(1);return t&&e.shellSuspendCounter++,Xi=Yi=null,V=r,D.H=i,D.A=a,U===null&&(H=null,W=0,ci()),o}function Mu(){for(;U!==null;)Fu(U)}function Nu(e,t){var n=V;V|=2;var r=Ou(),a=ku();H!==e||W!==t?(ou=null,au=Pe()+500,Tu(e,t)):Kl=tt(e,t);a:do try{if(G!==0&&U!==null){t=U;var o=Wl;b:switch(G){case 1:G=0,Wl=null,Lu(e,t,o,1);break;case 2:case 9:if(ka(o)){G=0,Wl=null,Iu(t);break}t=function(){G!==2&&G!==9||H!==e||(G=7),od(e)},o.then(t,t);break a;case 3:G=7;break a;case 4:G=5;break a;case 7:ka(o)?(G=0,Wl=null,Iu(t)):(G=0,Wl=null,Lu(e,t,o,7));break;case 5:var s=null;switch(U.tag){case 26:s=U.memoizedState;case 5:case 27:var c=U;if(s?Kf(s):c.stateNode.complete){G=0,Wl=null;var l=c.sibling;if(l!==null)U=l;else{var u=c.return;u===null?U=null:(U=u,Ru(u))}break b}}G=0,Wl=null,Lu(e,t,o,5);break;case 6:G=0,Wl=null,Lu(e,t,o,6);break;case 8:wu(),K=6;break a;default:throw Error(i(462))}}Pu();break}catch(t){Eu(e,t)}while(1);return Xi=Yi=null,D.H=r,D.A=a,V=n,U===null?(H=null,W=0,ci(),K):0}function Pu(){for(;U!==null&&!Me();)Fu(U)}function Fu(e){var t=Lc(e.alternate,e,Jl);e.memoizedProps=e.pendingProps,t===null?Ru(e):U=t}function Iu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=xc(n,t,t.pendingProps,t.type,void 0,W);break;case 11:t=xc(n,t,t.pendingProps,t.type.render,t.ref,W);break;case 5:No(t);default:Gc(n,t),t=U=_i(t,Jl),t=Lc(n,t,Jl)}e.memoizedProps=e.pendingProps,t===null?Ru(e):U=t}function Lu(e,t,n,r){Xi=Yi=null,No(t),Fa=null,Ia=0;var i=t.return;try{if(oc(e,i,t,n,W)){K=1,tc(e,wi(n,e.current)),U=null;return}}catch(t){if(i!==null)throw U=i,t;K=1,tc(e,wi(n,e.current)),U=null;return}t.flags&32768?(F||r===1?e=!0:Kl||W&536870912?e=!1:(Gl=e=!0,(r===2||r===9||r===3||r===6)&&(r=oo.current,r!==null&&r.tag===13&&(r.flags|=16384))),zu(t,e)):Ru(t)}function Ru(e){var t=e;do{if(t.flags&32768){zu(t,Gl);return}e=t.return;var n=Uc(t.alternate,t,Jl);if(n!==null){U=n;return}if(t=t.sibling,t!==null){U=t;return}U=t=e}while(t!==null);K===0&&(K=5)}function zu(e,t){do{var n=Wc(e.alternate,e);if(n!==null){n.flags&=32767,U=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){U=e;return}U=e=n}while(e!==null);K=6,U=null}function Bu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Gu();while(q!==0);if(V&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=si,ot(e,n,o,s,c,l),e===H&&(U=H=null,W=0),lu=t,cu=e,uu=n,du=o,fu=a,pu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,$u(Re,function(){return Ku(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=D.T,D.T=null,a=O.p,O.p=2,s=V,V|=4;try{ul(e,t,n)}finally{V=s,O.p=a,D.T=r}}q=1,Vu(),Hu(),Uu()}}function Vu(){if(q===1){q=0;var e=cu,t=lu,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=V;V|=4;try{Sl(t,e);var a=Vd,o=Fr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Pr(s.ownerDocument.documentElement,s)){if(c!==null&&Ir(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=A(s,h),v=A(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}lp=!!Bd,Vd=Bd=null}finally{V=i,O.p=r,D.T=n}}e.current=t,q=2}}function Hu(){if(q===2){q=0;var e=cu,t=lu,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=V;V|=4;try{dl(e,t.alternate,t)}finally{V=i,O.p=r,D.T=n}}q=3}}function Uu(){if(q===4||q===3){q=0,Ne();var e=cu,t=lu,n=uu,r=pu;t.subtreeFlags&10256||t.flags&10256?q=5:(q=0,lu=cu=null,Wu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(su=null),dt(n),t=t.stateNode,We&&typeof We.onCommitFiberRoot==`function`)try{We.onCommitFiberRoot(Ue,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=D.T,i=O.p,O.p=2,D.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{D.T=t,O.p=i}}uu&3&&Gu(),od(e),i=e.pendingLanes,n&261930&&i&42?e===hu?mu++:(mu=0,hu=e):mu=0,sd(0,!1)}}function Wu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,fa(t)))}function Gu(){return Vu(),Hu(),Uu(),Ku()}function Ku(){if(q!==5)return!1;var e=cu,t=du;du=0;var n=dt(uu),r=D.T,a=O.p;try{O.p=32>n?32:n,D.T=null,n=fu,fu=null;var o=cu,s=uu;if(q=0,lu=cu=null,uu=0,V&6)throw Error(i(331));var c=V;if(V|=4,zl(o.current),jl(o,o.current,s,n),V=c,sd(0,!1),We&&typeof We.onPostCommitFiberRoot==`function`)try{We.onPostCommitFiberRoot(Ue,o)}catch{}return!0}finally{O.p=a,D.T=r,Wu(e,t)}}function qu(e,t,n){t=wi(n,t),t=rc(e.stateNode,t,2),e=qa(e,t,2),e!==null&&(at(e,2),od(e))}function J(e,t,n){if(e.tag===3)qu(e,e,n);else for(;t!==null;){if(t.tag===3){qu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(su===null||!su.has(r))){e=wi(n,e),n=ic(2),r=qa(t,n,2),r!==null&&(ac(n,r,t,e),at(r,2),od(r));break}}t=t.return}}function Ju(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ul;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(ql=!0,i.add(n),e=Yu.bind(null,e,t,n),t.then(e,e))}function Yu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,H===e&&(W&n)===n&&(K===4||K===3&&(W&62914560)===W&&300>Pe()-ru?!(V&2)&&Tu(e,0):Zl|=n,$l===W&&($l=0)),od(e)}function Xu(e,t){t===0&&(t=rt()),e=ui(e,t),e!==null&&(at(e,t),od(e))}function Zu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xu(e,n)}function Qu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Xu(e,n)}function $u(e,t){return Ae(e,t)}var ed=null,td=null,nd=!1,rd=!1,id=!1,ad=0;function od(e){e!==td&&e.next===null&&(td===null?ed=td=e:td=td.next=e),rd=!0,nd||(nd=!0,fd())}function sd(e,t){if(!id&&rd){id=!0;do for(var n=!1,r=ed;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ke(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,dd(r,a))}else a=W,a=et(r,r===H?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||tt(r,a)||(n=!0,dd(r,a));r=r.next}while(n);id=!1}}function cd(){ld()}function ld(){rd=nd=!1;var e=0;ad!==0&&qd()&&(e=ad);for(var t=Pe(),n=null,r=ed;r!==null;){var i=r.next,a=Y(r,t);a===0?(r.next=null,n===null?ed=i:n.next=i,i===null&&(td=n)):(n=r,(e!==0||a&3)&&(rd=!0)),r=i}q!==0&&q!==5||sd(e,!1),ad!==0&&(ad=0)}function Y(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ke(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=nt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=H,n=W,n=et(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(G===2||G===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||tt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&je(r),dt(n)){case 2:case 8:n=Le;break;case 32:n=Re;break;case 268435456:n=Be;break;default:n=Re}return r=ud.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function ud(e,t){if(q!==0&&q!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Gu()&&e.callbackNode!==n)return null;var r=W;return r=et(e,e===H?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(yu(e,r,t),Y(e,Pe()),e.callbackNode!=null&&e.callbackNode===n?ud.bind(null,e):null)}function dd(e,t){if(Gu())return null;yu(e,t,!0)}function fd(){Zd(function(){V&6?Ae(Ie,cd):ld()})}function pd(){if(ad===0){var e=ha;e===0&&(e=Xe,Xe<<=1,!(Xe&261888)&&(Xe=256)),ad=e}return ad}function md(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function hd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function gd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=md((i[gt]||null).action),o=r.submitter;o&&(t=(t=o[gt]||null)?md(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ad!==0){var e=o?hd(i,o):new FormData(i);ks(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?hd(i,o):new FormData(i),ks(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var _d=0;_d<ni.length;_d++){var vd=ni[_d];ri(vd.toLowerCase(),`on`+(vd[0].toUpperCase()+vd.slice(1)))}ri(Jr,`onAnimationEnd`),ri(Yr,`onAnimationIteration`),ri(Xr,`onAnimationStart`),ri(`dblclick`,`onDoubleClick`),ri(`focusin`,`onFocus`),ri(`focusout`,`onBlur`),ri(Zr,`onTransitionRun`),ri(Qr,`onTransitionStart`),ri($r,`onTransitionCancel`),ri(ei,`onTransitionEnd`),Mt(`onMouseEnter`,[`mouseout`,`mouseover`]),Mt(`onMouseLeave`,[`mouseout`,`mouseover`]),Mt(`onPointerEnter`,[`pointerout`,`pointerover`]),Mt(`onPointerLeave`,[`pointerout`,`pointerover`]),jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var yd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),bd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(yd));function xd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}}}}function X(e,t){var n=t[vt];n===void 0&&(n=t[vt]=new Set);var r=e+`__bubble`;n.has(r)||(Td(t,e,2,!1),n.add(r))}function Sd(e,t,n){var r=0;t&&(r|=4),Td(n,e,r,t)}var Cd=`_reactListening`+Math.random().toString(36).slice(2);function wd(e){if(!e[Cd]){e[Cd]=!0,kt.forEach(function(t){t!==`selectionchange`&&(bd.has(t)||Sd(t,!1,e),Sd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cd]||(t[Cd]=!0,Sd(`selectionchange`,!1,t))}}function Td(e,t,n,r){switch(hp(t)){case 2:var i=up;break;case 8:i=dp;break;default:i=Q}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Ed(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=wt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),s=[];a:{var c=ti.get(e);if(c!==void 0){var l=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:l=Jn;break;case`focusin`:u=`focus`,l=zn;break;case`focusout`:u=`blur`,l=zn;break;case`beforeblur`:case`afterblur`:l=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Xn;break;case Jr:case Yr:case Xr:l=Bn;break;case ei:l=Zn;break;case`scroll`:case`scrollend`:l=Mn;break;case`wheel`:l=Qn;break;case`copy`:case`cut`:case`paste`:l=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Yn;break;case`toggle`:case`beforetoggle`:l=$n}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(Dd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(wt(u)||u[_t]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?wt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Yn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Et(l),h=u==null?c:Et(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,wt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=kd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Ad(s,c,l,d,!1),u!==null&&f!==null&&Ad(s,f,u,d,!0)}}a:{if(c=r?Et(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=yr;else if(pr(c))if(br)v=kr;else{v=Dr;var y=Er}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&an(r.elementType)&&(v=yr):v=Or;if(v&&=v(e,r)){mr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Xt(c,`number`,c.value)}switch(y=r?Et(r):window,e){case`focusin`:(pr(y)||y.contentEditable===`true`)&&(Rr=y,zr=r,Br=null);break;case`focusout`:Br=zr=Rr=null;break;case`mousedown`:Vr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Vr=!1,Hr(s,n,i);break;case`selectionchange`:if(Lr)break;case`keydown`:case`keyup`:Hr(s,n,i)}var b;if(tr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else lr?sr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ir&&n.locale!==`ko`&&(lr||x!==`onCompositionStart`?x===`onCompositionEnd`&&lr&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,lr=!0)),y=Od(r,x),0<y.length&&(x=new Hn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=cr(n),b!==null&&(x.data=b)))),(b=rr?ur(e,n):dr(e,n))&&(x=Od(r,`onBeforeInput`),0<x.length&&(y=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),gd(s,e,r,n,i)}xd(s,t)})}function Dd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Od(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(Dd(e,i,a)),i=_n(e,t),i!=null&&r.push(Dd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function kd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ad(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(Dd(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(Dd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var jd=/\r\n?/g,Md=/\u0000|\uFFFD/g;function Nd(e){return(typeof e==`string`?e:``+e).replace(jd,`
`).replace(Md,``)}function Pd(e,t){return t=Nd(t),Nd(e)===t}function Z(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:Rt(e,`class`,r);break;case`tabIndex`:Rt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Rt(e,n,r);break;case`style`:rn(e,r,o);break;case`data`:if(t!==`object`){Rt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&Z(e,t,`name`,a.name,a,null),Z(e,t,`formEncType`,a.formEncType,a,null),Z(e,t,`formMethod`,a.formMethod,a,null),Z(e,t,`formTarget`,a.formTarget,a,null)):(Z(e,t,`encType`,a.encType,a,null),Z(e,t,`method`,a.method,a,null),Z(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&X(`scroll`,e);break;case`onScrollEnd`:r!=null&&X(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:X(`beforetoggle`,e),X(`toggle`,e),Lt(e,`popover`,r);break;case`xlinkActuate`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Lt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Lt(e,n,r))}}function Fd(e,t,n,r,a,o){switch(n){case`style`:rn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&X(`scroll`,e);break;case`onScrollEnd`:r!=null&&X(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!At.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[gt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Lt(e,n,r)}}}function Id(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:X(`error`,e),X(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Z(e,t,o,s,n,null)}}a&&Z(e,t,`srcSet`,n.srcSet,n,null),r&&Z(e,t,`src`,n.src,n,null);return;case`input`:X(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Z(e,t,r,d,n,null)}}Yt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in X(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Z(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(s in X(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Z(e,t,s,c,n,null)}$t(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Z(e,t,l,r,n,null)}return;case`dialog`:X(`beforetoggle`,e),X(`toggle`,e),X(`cancel`,e),X(`close`,e);break;case`iframe`:case`object`:X(`load`,e);break;case`video`:case`audio`:for(r=0;r<yd.length;r++)X(yd[r],e);break;case`image`:X(`error`,e),X(`load`,e);break;case`details`:X(`toggle`,e);break;case`embed`:case`source`:case`link`:X(`error`,e),X(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Z(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Fd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Z(e,t,c,r,n,null))}function Ld(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Z(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Z(e,t,p,m,r,f)}}Jt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Z(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Z(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Z(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Z(e,t,s,a,r,o)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Z(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Z(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Z(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Z(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Fd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Fd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Z(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Z(e,t,f,p,r,m)}function Rd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function zd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Rd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Rd(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Bd=null,Vd=null;function Hd(e){return e.nodeType===9?e:e.ownerDocument}function Ud(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Wd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Gd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kd=null;function qd(){var e=window.event;return e&&e.type===`popstate`?e!==Kd&&(Kd=e,!0):(Kd=null,!1)}var Jd=typeof setTimeout==`function`?setTimeout:void 0,Yd=typeof clearTimeout==`function`?clearTimeout:void 0,Xd=typeof Promise==`function`?Promise:void 0,Zd=typeof queueMicrotask==`function`?queueMicrotask:Xd===void 0?Jd:function(e){return Xd.resolve(null).then(e).catch(Qd)};function Qd(e){setTimeout(function(){throw e})}function $d(e){return e===`head`}function ef(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Pp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)hf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,hf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[St]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&hf(e.ownerDocument.body);n=i}while(n);Pp(t)}function tf(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function nf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nf(n),Ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[St])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=uf(e.nextSibling),e===null)break}return null}function af(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=uf(e.nextSibling),e===null))return null;return e}function of(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=uf(e.nextSibling),e===null))return null;return e}function sf(e){return e.data===`$?`||e.data===`$~`}function cf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function lf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function uf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var df=null;function ff(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return uf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function pf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function mf(e,t,n){switch(t=Hd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function hf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ct(e)}var gf=new Map,_f=new Set;function vf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var yf=O.d;O.d={f:bf,r:xf,D:wf,C:Tf,L:Ef,m:Df,X:kf,S:Of,M:Af};function bf(){var e=yf.f(),t=Cu();return e||t}function xf(e){var t=Tt(e);t!==null&&t.tag===5&&t.type===`form`?js(t):yf.r(e)}var Sf=typeof document>`u`?null:document;function Cf(e,t,n){var r=Sf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),_f.has(i)||(_f.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Id(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function wf(e){yf.D(e),Cf(`dns-prefetch`,e,null)}function Tf(e,t){yf.C(e,t),Cf(`preconnect`,e,t)}function Ef(e,t,n){yf.L(e,t,n);var r=Sf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=Mf(e);break;case`script`:a=If(e)}gf.has(a)||(e=f({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),gf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Nf(a))||t===`script`&&r.querySelector(Lf(a))||(t=r.createElement(`link`),Id(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Df(e,t){yf.m(e,t);var n=Sf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=If(e)}if(!gf.has(a)&&(e=f({rel:`modulepreload`,href:e},t),gf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Lf(a)))return}r=n.createElement(`link`),Id(r,`link`,e),Ot(r),n.head.appendChild(r)}}}function Of(e,t,n){yf.S(e,t,n);var r=Sf;if(r&&e){var i=Dt(r).hoistableStyles,a=Mf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Nf(a)))s.loading=5;else{e=f({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=gf.get(a))&&Bf(e,n);var c=o=r.createElement(`link`);Ot(c),Id(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,zf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function kf(e,t){yf.X(e,t);var n=Sf;if(n&&e){var r=Dt(n).hoistableScripts,i=If(e),a=r.get(i);a||(a=n.querySelector(Lf(i)),a||(e=f({src:e,async:!0},t),(t=gf.get(i))&&Vf(e,t),a=n.createElement(`script`),Ot(a),Id(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Af(e,t){yf.M(e,t);var n=Sf;if(n&&e){var r=Dt(n).hoistableScripts,i=If(e),a=r.get(i);a||(a=n.querySelector(Lf(i)),a||(e=f({src:e,async:!0,type:`module`},t),(t=gf.get(i))&&Vf(e,t),a=n.createElement(`script`),Ot(a),Id(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function jf(e,t,n,r){var a=(a=ge.current)?vf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Mf(n.href),n=Dt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Mf(n.href);var o=Dt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Nf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),gf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},gf.set(e,n),o||Ff(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=If(n),n=Dt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Mf(e){return`href="`+qt(e)+`"`}function Nf(e){return`link[rel="stylesheet"][`+e+`]`}function Pf(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Ff(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Id(t,`link`,n),Ot(t),e.head.appendChild(t))}function If(e){return`[src="`+qt(e)+`"]`}function Lf(e){return`script[async]`+e}function Rf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,Ot(r),r;var a=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Ot(r),Id(r,`style`,a),zf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Mf(n.href);var o=e.querySelector(Nf(a));if(o)return t.state.loading|=4,t.instance=o,Ot(o),o;r=Pf(n),(a=gf.get(a))&&Bf(r,a),o=(e.ownerDocument||e).createElement(`link`),Ot(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Id(o,`link`,r),t.state.loading|=4,zf(o,n.precedence,e),t.instance=o;case`script`:return o=If(n.src),(a=e.querySelector(Lf(o)))?(t.instance=a,Ot(a),a):(r=n,(a=gf.get(o))&&(r=f({},n),Vf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Ot(a),Id(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,zf(r,n.precedence,e));return t.instance}function zf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Bf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Vf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Hf=null;function Uf(e,t,n){if(Hf===null){var r=new Map,i=Hf=new Map;i.set(n,r)}else i=Hf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[St]||a[ht]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Wf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Gf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Kf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function qf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Mf(r.href),a=t.querySelector(Nf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Xf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ot(a);return}a=t.ownerDocument||t,r=Pf(r),(i=gf.get(i))&&Bf(r,i),a=a.createElement(`link`),Ot(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Id(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Xf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Jf=0;function Yf(e,t){return e.stylesheets&&e.count===0&&Qf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Qf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Jf===0&&(Jf=62500*zd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Qf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Jf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Xf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Qf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zf=null;function Qf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zf=new Map,t.forEach($f,e),Zf=null,Xf.call(e))}function $f(e,t){if(!(t.state.loading&4)){var n=Zf.get(e);if(n)var r=n.get(null);else{n=new Map,Zf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Xf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ep={$$typeof:C,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function tp(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=it(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=it(0),this.hiddenUpdates=it(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function np(e,t,n,r,i,a,o,s,c,l,u,d){return e=new tp(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=mi(3,null,null,t),e.current=a,a.stateNode=e,t=da(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Wa(a),e}function rp(e){return e?(e=M,e):M}function ip(e,t,n,r,i,a){i=rp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ka(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=qa(e,r,t),n!==null&&(vu(n,e,t),Ja(n,e,t))}function ap(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function op(e,t){ap(e,t),(e=e.alternate)&&ap(e,t)}function sp(e){if(e.tag===13||e.tag===31){var t=ui(e,67108864);t!==null&&vu(t,e,67108864),op(e,67108864)}}function cp(e){if(e.tag===13||e.tag===31){var t=gu();t=ut(t);var n=ui(e,t);n!==null&&vu(n,e,t),op(e,t)}}var lp=!0;function up(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,Q(e,t,n,r)}finally{O.p=a,D.T=i}}function dp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,Q(e,t,n,r)}finally{O.p=a,D.T=i}}function Q(e,t,n,r){if(lp){var i=fp(r);if(i===null)Ed(e,t,r,pp,n),wp(e,r);else if(Ep(i,e,t,n,r))r.stopPropagation();else if(wp(e,r),t&4&&-1<Cp.indexOf(e)){for(;i!==null;){var a=Tt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=$e(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ke(o);s.entanglements[1]|=c,o&=~c}od(a),!(V&6)&&(au=Pe()+500,sd(0,!1))}}break;case 31:case 13:s=ui(a,2),s!==null&&vu(s,a,2),Cu(),op(a,2)}if(a=fp(r),a===null&&Ed(e,t,r,pp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Ed(e,t,r,null,n)}}function fp(e){return e=dn(e),mp(e)}var pp=null;function mp(e){if(pp=null,e=wt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return pp=e,null}function hp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Fe()){case Ie:return 2;case Le:return 8;case Re:case ze:return 32;case Be:return 268435456;default:return 32}default:return 32}}var gp=!1,_p=null,vp=null,yp=null,bp=new Map,xp=new Map,Sp=[],Cp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function wp(e,t){switch(e){case`focusin`:case`focusout`:_p=null;break;case`dragenter`:case`dragleave`:vp=null;break;case`mouseover`:case`mouseout`:yp=null;break;case`pointerover`:case`pointerout`:bp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:xp.delete(t.pointerId)}}function Tp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Tt(t),t!==null&&sp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ep(e,t,n,r,i){switch(t){case`focusin`:return _p=Tp(_p,e,t,n,r,i),!0;case`dragenter`:return vp=Tp(vp,e,t,n,r,i),!0;case`mouseover`:return yp=Tp(yp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return bp.set(a,Tp(bp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,xp.set(a,Tp(xp.get(a)||null,e,t,n,r,i)),!0}return!1}function Dp(e){var t=wt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,pt(e.priority,function(){cp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,pt(e.priority,function(){cp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Op(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Tt(n),t!==null&&sp(t),e.blockedOn=n,!1;t.shift()}return!0}function kp(e,t,n){Op(e)&&n.delete(t)}function Ap(){gp=!1,_p!==null&&Op(_p)&&(_p=null),vp!==null&&Op(vp)&&(vp=null),yp!==null&&Op(yp)&&(yp=null),bp.forEach(kp),xp.forEach(kp)}function jp(e,n){e.blockedOn===n&&(e.blockedOn=null,gp||(gp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Ap)))}var Mp=null;function Np(e){Mp!==e&&(Mp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Mp===e&&(Mp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(mp(r||n)===null)continue;break}var a=Tt(n);a!==null&&(e.splice(t,3),t-=3,ks(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Pp(e){function t(t){return jp(t,e)}_p!==null&&jp(_p,e),vp!==null&&jp(vp,e),yp!==null&&jp(yp,e),bp.forEach(t),xp.forEach(t);for(var n=0;n<Sp.length;n++){var r=Sp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Sp.length&&(n=Sp[0],n.blockedOn===null);)Dp(n),n.blockedOn===null&&Sp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[gt]||null;if(typeof a==`function`)o||Np(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[gt]||null)s=o.formAction;else if(mp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Np(n)}}}function Fp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Ip(e){this._internalRoot=e}Lp.prototype.render=Ip.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;ip(n,gu(),e,t,null,null)},Lp.prototype.unmount=Ip.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ip(e.current,2,null,e,null,null),Cu(),t[_t]=null}};function Lp(e){this._internalRoot=e}Lp.prototype.unstable_scheduleHydration=function(e){if(e){var t=ft();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sp.length&&t!==0&&t<Sp[n].priority;n++);Sp.splice(n,0,e),n===0&&Dp(e)}};var $=n.version;if($!==`19.2.8`)throw Error(i(527,$,`19.2.8`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:d(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ue=zp.inject(Rp),We=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Qs,s=$s,c=ec;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=np(e,1,!1,null,null,n,r,null,o,s,c,Fp),e[_t]=t.current,wd(e),new Ip(t)}})),y=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=v()})),b=`modulepreload`,x=function(e){return`/abc/`+e},S={},C=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=x(t,n),t=s(t),t in S)return;S[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:b,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},w=u(p(),1),ee=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,T=/^[\\/]{2}/;function te(e,t){return t+e.replace(/\\/g,`/`)}var ne=`popstate`;function re(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function ie(e={}){function t(e,t){let{pathname:n=`/`,search:r=``,hash:i=``}=O(e.location.hash.substring(1));return!n.startsWith(`/`)&&!n.startsWith(`.`)&&(n=`/`+n),ce(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){let n=e.document.querySelector(`base`),r=``;if(n&&n.getAttribute(`href`)){let t=e.location.href,n=t.indexOf(`#`);r=n===-1?t:t.slice(0,n)}return r+`#`+(typeof t==`string`?t:D(t))}function r(e,t){ae(e.pathname.charAt(0)===`/`,`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}return le(t,n,r,e)}function E(e,t){if(e===!1||e==null)throw Error(t)}function ae(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function oe(){return Math.random().toString(36).substring(2,10)}function se(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function ce(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?O(t):t,state:n,key:t&&t.key||r||oe(),mask:i}}function D({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function O(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function le(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=re(e)?e:ce(h.location,e,t);n&&n(r,e),l=u()+1;let d=se(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=re(e)?e:ce(h.location,e,t);n&&n(r,e),l=u();let i=se(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return ue(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(ne,d),c=e,()=>{i.removeEventListener(ne,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function ue(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),E(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:D(t);return i=i.replace(/ $/,`%20`),!n&&T.test(i)&&(i=r+i),new URL(i,r)}function de(e,t,n=`/`){return fe(e,t,n,!1)}function fe(e,t,n,r,i){let a=Ae((typeof t==`string`?O(t):t).pathname||`/`,n);if(a==null)return null;let o=i??pe(e),s=null,c=ke(a);for(let e=0;s==null&&e<o.length;++e)s=Te(o[e],c,r);return s}function pe(e){let t=k(e);return he(t),t}function k(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;E(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Re([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(E(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),k(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:Ce(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=Oe(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of me(e.path))a(e,t,!0,n)}),t}function me(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=me(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function he(e){e.sort((e,t)=>e.score===t.score?we(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var ge=/^:[\w-]+$/,_e=3,ve=2,ye=1,be=10,xe=-2,Se=e=>e===`*`;function Ce(e,t){let n=e.split(`/`),r=n.length;return n.some(Se)&&(r+=xe),t&&(r+=ve),n.filter(e=>!Se(e)).reduce((e,t)=>e+(ge.test(t)?_e:t===``?ye:be),r)}function we(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function Te(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?De(u,l,s.matcher,s.compiledParams):Ee(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Ee({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Re([a,d.pathname]),pathnameBase:Be(Re([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Re([a,d.pathnameBase]))}return o}function Ee(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Oe(e.path,e.caseSensitive,e.end);return De(e,t,n,r)}function De(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Oe(e,t=!1,n=!0){ae(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function ke(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return ae(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Ae(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function je(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?O(e):e,a;return n?(n=Le(n),a=n.startsWith(`/`)?Me(n.substring(1),`/`):Me(n,t)):a=t,{pathname:a,search:Ve(r),hash:He(i)}}function Me(e,t){let n=ze(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Ne(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Pe(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Fe(e){let t=Pe(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Ie(e,t,n,r=!1){let i;typeof e==`string`?i=O(e):(i={...e},E(!i.pathname||!i.pathname.includes(`?`),Ne(`?`,`pathname`,`search`,i)),E(!i.pathname||!i.pathname.includes(`#`),Ne(`#`,`pathname`,`hash`,i)),E(!i.search||!i.search.includes(`#`),Ne(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=je(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Le=e=>e.replace(/[\\/]{2,}/g,`/`),Re=e=>Le(e.join(`/`)),ze=e=>e.replace(/\/+$/,``),Be=e=>ze(e).replace(/^\/*/,`/`),Ve=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,He=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Ue=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function We(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Ge(e){return Re(e.map(e=>e.route.path).filter(Boolean))||`/`}var Ke=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function qe(e,t){let n=e;if(typeof n!=`string`||!ee.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Ke)try{let e=new URL(window.location.href),r=T.test(n)?new URL(te(n,e.protocol)):new URL(n),a=Ae(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{ae(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Je=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Je);var Ye=[`GET`,...Je];new Set(Ye);var Xe=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function Ze(e){try{return Xe.includes(new URL(e).protocol)}catch{return!1}}var Qe=w.createContext(null);Qe.displayName=`DataRouter`;var $e=w.createContext(null);$e.displayName=`DataRouterState`;var et=w.createContext(!1);function tt(){return w.useContext(et)}var nt=w.createContext({isTransitioning:!1});nt.displayName=`ViewTransition`;var rt=w.createContext(new Map);rt.displayName=`Fetchers`;var it=w.createContext(null);it.displayName=`Await`;var at=w.createContext(null);at.displayName=`Navigation`;var ot=w.createContext(null);ot.displayName=`Location`;var st=w.createContext({outlet:null,matches:[],isDataRoute:!1});st.displayName=`Route`;var ct=w.createContext(null);ct.displayName=`RouteError`;var lt=`REACT_ROUTER_ERROR`,ut=`REDIRECT`,dt=`ROUTE_ERROR_RESPONSE`;function ft(e){if(e.startsWith(`${lt}:${ut}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function pt(e){if(e.startsWith(`${lt}:${dt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Ue(t.status,t.statusText,t.data)}catch{}}function mt(e,{relative:t}={}){E(ht(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=w.useContext(at),{hash:i,pathname:a,search:o}=xt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Re([n,a])),r.createHref({pathname:s,search:o,hash:i})}function ht(){return w.useContext(ot)!=null}function gt(){return E(ht(),`useLocation() may be used only in the context of a <Router> component.`),w.useContext(ot).location}var _t=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function vt(e){w.useContext(at).static||w.useLayoutEffect(e)}function yt(){let{isDataRoute:e}=w.useContext(st);return e?Rt():bt()}function bt(){E(ht(),`useNavigate() may be used only in the context of a <Router> component.`);let e=w.useContext(Qe),{basename:t,navigator:n}=w.useContext(at),{matches:r}=w.useContext(st),{pathname:i}=gt(),a=JSON.stringify(Fe(r)),o=w.useRef(!1);return vt(()=>{o.current=!0}),w.useCallback((r,s={})=>{if(ae(o.current,_t),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Ie(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Re([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}w.createContext(null);function xt(e,{relative:t}={}){let{matches:n}=w.useContext(st),{pathname:r}=gt(),i=JSON.stringify(Fe(n));return w.useMemo(()=>Ie(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function St(e,t){return Ct(e,t)}function Ct(e,t,n){E(ht(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=w.useContext(at),{matches:i}=w.useContext(st),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Bt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=gt(),d;if(t){let e=typeof t==`string`?O(t):t;E(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):de(e,{pathname:p});ae(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),ae(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=At(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Re([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Re([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?w.createElement(ot.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function wt(){let e=Lt(),t=We(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=w.createElement(w.Fragment,null,w.createElement(`p`,null,`💿 Hey developer 👋`),w.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,w.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,w.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),w.createElement(w.Fragment,null,w.createElement(`h2`,null,`Unexpected Application Error!`),w.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?w.createElement(`pre`,{style:i},n):null,o)}var Tt=w.createElement(wt,null),Et=class extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=pt(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:w.createElement(st.Provider,{value:this.props.routeContext},w.createElement(ct.Provider,{value:e,children:this.props.component}));return this.context?w.createElement(Ot,{error:e},t):t}};Et.contextType=et;var Dt=new WeakMap;function Ot({children:e,error:t}){let{basename:n}=w.useContext(at);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=ft(t.digest);if(e){let r=Dt.get(t);if(r)throw r;let i=qe(e.location,n),a=i.absoluteURL||i.to;if(Ze(a))throw Error(`Invalid redirect location`);if(Ke&&!Dt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=a;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Dt.set(t,n),n}return w.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${a}`})}}return e}function kt({routeContext:e,match:t,children:n}){let r=w.useContext(Qe);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(st.Provider,{value:e},n)}function At(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);E(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Ge(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||Tt,o&&(s<0&&c===0?(Bt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?w.createElement(n.route.Component,null):n.route.element?n.route.element:e,w.createElement(kt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?w.createElement(Et,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function jt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mt(e){let t=w.useContext(Qe);return E(t,jt(e)),t}function Nt(e){let t=w.useContext($e);return E(t,jt(e)),t}function Pt(e){let t=w.useContext(st);return E(t,jt(e)),t}function Ft(e){let t=Pt(e),n=t.matches[t.matches.length-1];return E(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function It(){return Ft(`useRouteId`)}function Lt(){let e=w.useContext(ct),t=Nt(`useRouteError`),n=Ft(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Rt(){let{router:e}=Mt(`useNavigate`),t=Ft(`useNavigate`),n=w.useRef(!1);return vt(()=>{n.current=!0}),w.useCallback(async(r,i={})=>{ae(n.current,_t),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var zt={};function Bt(e,t,n){!t&&!zt[e]&&(zt[e]=!0,ae(!1,n))}w.memo(Vt);function Vt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return Ct(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Ht(e){E(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Ut({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){E(!ht(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=w.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=O(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=w.useMemo(()=>{let e=Ae(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return ae(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:w.createElement(at.Provider,{value:c},w.createElement(ot.Provider,{children:t,value:h}))}function Wt({children:e,location:t}){return St(Gt(e),t)}w.Component;function Gt(e,t=[]){let n=[];return w.Children.forEach(e,(e,r)=>{if(!w.isValidElement(e))return;let i=[...t,r];if(e.type===w.Fragment){n.push.apply(n,Gt(e.props.children,i));return}E(e.type===Ht,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),E(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Gt(e.props.children,i)),n.push(a)}),n}var Kt=`get`,qt=`application/x-www-form-urlencoded`;function Jt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Yt(e){return Jt(e)&&e.tagName.toLowerCase()===`button`}function Xt(e){return Jt(e)&&e.tagName.toLowerCase()===`form`}function Zt(e){return Jt(e)&&e.tagName.toLowerCase()===`input`}function Qt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function $t(e,t){return e.button===0&&(!t||t===`_self`)&&!Qt(e)}var en=null;function tn(){if(en===null)try{new FormData(document.createElement(`form`),0),en=!1}catch{en=!0}return en}var nn=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function rn(e){return e!=null&&!nn.has(e)?(ae(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qt}"`),null):e}function an(e,t){let n,r,i,a,o;if(Xt(e)){let o=e.getAttribute(`action`);r=o?Ae(o,t):null,n=e.getAttribute(`method`)||Kt,i=rn(e.getAttribute(`enctype`))||qt,a=new FormData(e)}else if(Yt(e)||Zt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Ae(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Kt,i=rn(e.getAttribute(`formenctype`))||rn(o.getAttribute(`enctype`))||qt,a=new FormData(o,e),!tn()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Jt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Kt,r=null,i=qt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function on(e,t){if(e===!1||e==null)throw Error(t)}function sn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return i.pathname=n?i.pathname.endsWith(`/`)?`${i.pathname}_.${r}`:`${i.pathname}.${r}`:i.pathname===`/`?`_root.${r}`:t&&Ae(i.pathname,t)===`/`?`${ze(t)}/_root.${r}`:`${ze(i.pathname)}.${r}`,i}async function cn(e,t){if(e.id in t)return t[e.id];try{let n=await C(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ln(e){return e!=null&&typeof e.page==`string`}function un(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function dn(e,t,n){return gn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await cn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(un).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function fn(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function pn(e,t,{includeHydrateFallback:n}={}){return mn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function mn(e){return[...new Set(e)]}function hn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function gn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!ln(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(hn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function _n(){let e=w.useContext(Qe);return on(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function vn(){let e=w.useContext($e);return on(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var yn=w.createContext(void 0);yn.displayName=`FrameworkContext`;function bn(){let e=w.useContext(yn);return on(e,`You must render this element inside a <HydratedRouter> element`),e}function xn(e,t){let n=w.useContext(yn),[r,i]=w.useState(!1),[a,o]=w.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=w.useRef(null);w.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),w.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:Sn(s,p),onBlur:Sn(c,m),onMouseEnter:Sn(l,p),onMouseLeave:Sn(u,m),onTouchStart:Sn(d,p)}]:[a,f,{}]:[!1,f,{}]}function Sn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Cn({page:e,...t}){let n=tt(),{nonce:r}=bn(),{router:i}=_n(),a=w.useMemo(()=>de(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?w.createElement(Tn,{page:e,matches:a,...t}):w.createElement(En,{page:e,matches:a,...t})):null}function wn(e){let{manifest:t,routeModules:n}=bn(),[r,i]=w.useState([]);return w.useEffect(()=>{let r=!1;return dn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Tn({page:e,matches:t,...n}){let r=gt(),{future:i}=bn(),{basename:a}=_n(),o=w.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=sn(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return w.createElement(w.Fragment,null,o.map(e=>w.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function En({page:e,matches:t,...n}){let r=gt(),{future:i,manifest:a,routeModules:o}=bn(),{basename:s}=_n(),{loaderData:c,matches:l}=vn(),u=w.useMemo(()=>fn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=w.useMemo(()=>fn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=w.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=sn(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=w.useMemo(()=>pn(d,a),[d,a]),m=wn(d);return w.createElement(w.Fragment,null,f.map(e=>w.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>w.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>w.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Dn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}w.Component;var On=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{On&&(window.__reactRouterVersion=`7.18.2`)}catch{}function kn({basename:e,children:t,useTransitions:n,window:r}){let i=w.useRef();i.current??=ie({window:r,v5Compat:!0});let a=i.current,[o,s]=w.useState({action:a.action,location:a.location}),c=w.useCallback(e=>{n===!1?s(e):w.startTransition(()=>s(e))},[n]);return w.useLayoutEffect(()=>a.listen(c),[a,c]),w.createElement(Ut,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var An=w.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=w.useContext(at),v=typeof l==`string`&&ee.test(l),y=qe(l,h);l=y.to;let b=mt(l,{relative:r}),x=gt(),S=null;if(o){let e=Ie(o,[],x.mask?x.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Re([h,e.pathname])),S=g.createHref(e)}let[C,T,te]=xn(n,p),ne=Fn(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function re(t){e&&e(t),t.defaultPrevented||ne(t)}let ie=!(y.isExternal||i),E=w.createElement(`a`,{...p,...te,href:(ie?S:void 0)||y.absoluteURL||b,onClick:ie?re:e,ref:Dn(m,T),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return C&&!v?w.createElement(w.Fragment,null,E,w.createElement(Cn,{page:b})):E});An.displayName=`Link`;var jn=w.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=xt(a,{relative:c.relative}),d=gt(),f=w.useContext($e),{navigator:p,basename:m}=w.useContext(at),h=f!=null&&Bn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=Ae(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,x=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),S={isActive:b,isPending:x,isTransitioning:h},C=b?e:void 0,ee;ee=typeof n==`function`?n(S):[n,b?`active`:null,x?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let T=typeof i==`function`?i(S):i;return w.createElement(An,{...c,"aria-current":C,className:ee,ref:l,style:T,to:a,viewTransition:o},typeof s==`function`?s(S):s)});jn.displayName=`NavLink`;var Mn=w.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Kt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=w.useContext(at),g=Rn(),_=zn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&ee.test(s);return w.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?w.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});Mn.displayName=`Form`;function Nn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Pn(e){let t=w.useContext(Qe);return E(t,Nn(e)),t}function Fn(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=yt(),d=gt(),f=xt(e,{relative:o});return w.useCallback(p=>{if($t(p,t)){p.preventDefault();let t=n===void 0?D(d)===D(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?w.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var In=0,Ln=()=>`__${String(++In)}__`;function Rn(){let{router:e}=Pn(`useSubmit`),{basename:t}=w.useContext(at),n=It(),r=e.fetch,i=e.navigate;return w.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=an(e,t);if(a.navigate===!1){let e=a.fetcherKey||Ln();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function zn(e,{relative:t}={}){let{basename:n}=w.useContext(at),r=w.useContext(st);E(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...xt(e||`.`,{relative:t})},o=gt();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Re([n,a.pathname])),D(a)}function Bn(e,{relative:t}={}){let n=w.useContext(nt);E(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Pn(`useViewTransitionState`),i=xt(e,{relative:t});if(!n.isTransitioning)return!1;let a=Ae(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ae(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ee(i.pathname,o)!=null||Ee(i.pathname,a)!=null}var Vn=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),Hn=s(((e,t)=>{t.exports=Vn()})),Un=(0,w.createContext)({});function Wn(e){let t=(0,w.useRef)(null);return t.current===null&&(t.current=e()),t.current}var Gn=typeof window<`u`?w.useLayoutEffect:w.useEffect,Kn=(0,w.createContext)(null);function qn(e,t){e.indexOf(t)===-1&&e.push(t)}function Jn(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var Yn=(e,t,n)=>n>t?t:n<e?e:n,Xn={},Zn=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Qn=e=>typeof e==`object`&&!!e,$n=e=>/^0[^.\s]+$/u.test(e);function er(e){let t;return()=>(t===void 0&&(t=e()),t)}var tr=e=>e,nr=(...e)=>e.reduce((e,t)=>n=>t(e(n))),rr=(e,t,n)=>{let r=t-e;return r?(n-e)/r:1},ir=class{constructor(){this.subscriptions=[]}add(e){return qn(this.subscriptions,e),()=>Jn(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},ar=e=>e*1e3,or=e=>e/1e3,sr=(e,t)=>t?1e3/t*e:0,cr=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,lr=1e-7,ur=12;function dr(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=cr(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>lr&&++s<ur);return o}function fr(e,t,n,r){if(e===t&&n===r)return tr;let i=t=>dr(t,0,1,e,n);return e=>e===0||e===1?e:cr(i(e),t,r)}var pr=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,mr=e=>t=>1-e(1-t),hr=fr(.33,1.53,.69,.99),gr=mr(hr),_r=pr(gr),vr=e=>e>=1?1:(e*=2)<1?.5*gr(e):.5*(2-2**(-10*(e-1))),yr=e=>1-Math.sin(Math.acos(e)),br=mr(yr),xr=pr(yr),Sr=fr(.42,0,1,1),Cr=fr(0,0,.58,1),wr=fr(.42,0,.58,1),Tr=e=>Array.isArray(e)&&typeof e[0]!=`number`,Er=e=>Array.isArray(e)&&typeof e[0]==`number`,Dr={linear:tr,easeIn:Sr,easeInOut:wr,easeOut:Cr,circIn:yr,circInOut:xr,circOut:br,backIn:gr,backInOut:_r,backOut:hr,anticipate:vr},Or=e=>typeof e==`string`,kr=e=>{if(Er(e)){e.length;let[t,n,r,i]=e;return fr(t,n,r,i)}return Or(e)?(Dr[e],`${e}`,Dr[e]):e},Ar=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`];function jr(e){let t=new Set,n=new Set,r=!1,i=!1,a=new WeakSet,o={delta:0,timestamp:0,isProcessing:!1};function s(t){a.has(t)&&(c.schedule(t),e()),t(o)}let c={schedule:(e,i=!1,o=!1)=>{let s=o&&r?t:n;return i&&a.add(e),s.add(e),e},cancel:e=>{n.delete(e),a.delete(e)},process:e=>{if(o=e,r){i=!0;return}r=!0;let a=t;t=n,n=a,t.forEach(s),t.clear(),r=!1,i&&(i=!1,c.process(e))}};return c}var Mr=40;function Nr(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Ar.reduce((e,t)=>(e[t]=jr(a),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=Xn.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,Mr),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:Ar.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<Ar.length;t++)o[Ar[t]].cancel(e)},state:i,steps:o}}var{schedule:A,cancel:Pr,state:Fr,steps:Ir}=Nr(typeof requestAnimationFrame<`u`?requestAnimationFrame:tr,!0),Lr;function Rr(){Lr=void 0}var zr={now:()=>(Lr===void 0&&zr.set(Fr.isProcessing||Xn.useManualTiming?Fr.timestamp:performance.now()),Lr),set:e=>{Lr=e,queueMicrotask(Rr)}},Br=e=>t=>typeof t==`string`&&t.startsWith(e),Vr=Br(`--`),Hr=Br(`var(--`),Ur=e=>Hr(e)?Wr.test(e.split(`/*`)[0].trim()):!1,Wr=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Gr(e){return typeof e==`string`&&e.split(`/*`)[0].includes(`var(--`)}var Kr={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},qr={...Kr,transform:e=>Yn(0,1,e)},Jr={...Kr,default:1},Yr=e=>Math.round(e*1e5)/1e5,Xr=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Zr(e){return e==null}var Qr=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,$r=(e,t)=>n=>!!(typeof n==`string`&&Qr.test(n)&&n.startsWith(e)||t&&!Zr(n)&&Object.prototype.hasOwnProperty.call(n,t)),ei=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(Xr);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},ti=e=>Yn(0,255,e),ni={...Kr,transform:e=>Math.round(ti(e))},ri={test:$r(`rgb`,`red`),parse:ei(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+ni.transform(e)+`, `+ni.transform(t)+`, `+ni.transform(n)+`, `+Yr(qr.transform(r))+`)`};function ii(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var ai={test:$r(`#`),parse:ii,transform:ri.transform},oi=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),si=oi(`deg`),ci=oi(`%`),j=oi(`px`),li=oi(`vh`),ui=oi(`vw`),di={...ci,parse:e=>ci.parse(e)/100,transform:e=>ci.transform(e*100)},fi={test:$r(`hsl`,`hue`),parse:ei(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+ci.transform(Yr(t))+`, `+ci.transform(Yr(n))+`, `+Yr(qr.transform(r))+`)`},M={test:e=>ri.test(e)||ai.test(e)||fi.test(e),parse:e=>ri.test(e)?ri.parse(e):fi.test(e)?fi.parse(e):ai.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?ri.transform(e):fi.transform(e),getAnimatableNone:e=>{let t=M.parse(e);return t.alpha=0,M.transform(t)}},pi=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function mi(e){return isNaN(e)&&typeof e==`string`&&(e.match(Xr)?.length||0)+(e.match(pi)?.length||0)>0}var hi=`number`,gi=`color`,_i=`var`,vi=`var(`,yi="${}",bi=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function xi(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(bi,e=>(M.test(e)?(r.color.push(a),i.push(gi),n.push(M.parse(e))):e.startsWith(vi)?(r.var.push(a),i.push(_i),n.push(e)):(r.number.push(a),i.push(hi),n.push(parseFloat(e))),++a,yi)).split(yi),indexes:r,types:i}}function Si(e){return xi(e).values}function Ci({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];i+=e===hi?Yr(r[a]):e===gi?M.transform(r[a]):r[a]}return i}}function wi(e){return Ci(xi(e))}var Ti=e=>typeof e==`number`?0:M.test(e)?M.getAnimatableNone(e):e,Ei=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:Ti(e);function Di(e){let t=xi(e);return Ci(t)(t.values.map((e,n)=>Ei(e,t.split[n])))}var Oi={test:mi,parse:Si,createTransformer:wi,getAnimatableNone:Di};function ki(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Ai({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=ki(s,r,e+1/3),a=ki(s,r,e),o=ki(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function ji(e,t){return n=>n>0?t:e}var N=(e,t,n)=>e+(t-e)*n,Mi=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Ni=[ai,ri,fi],Pi=e=>Ni.find(t=>t.test(e));function Fi(e){let t=Pi(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===fi&&(n=Ai(n)),n}var Ii=(e,t)=>{let n=Fi(e),r=Fi(t);if(!n||!r)return ji(e,t);let i={...n};return e=>(i.red=Mi(n.red,r.red,e),i.green=Mi(n.green,r.green,e),i.blue=Mi(n.blue,r.blue,e),i.alpha=N(n.alpha,r.alpha,e),ri.transform(i))},Li=new Set([`none`,`hidden`]);function Ri(e,t){return Li.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function P(e,t){return n=>N(e,t,n)}function F(e){return typeof e==`number`?P:typeof e==`string`?Ur(e)?ji:M.test(e)?Ii:Hi:Array.isArray(e)?zi:typeof e==`object`?M.test(e)?Ii:Bi:ji}function zi(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>F(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Bi(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=F(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Vi(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]],s=e.values[o]??0;n[i]=s,r[a]++}return n}var Hi=(e,t)=>{let n=Oi.createTransformer(t),r=xi(e),i=xi(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Li.has(e)&&!i.values.length||Li.has(t)&&!r.values.length?Ri(e,t):nr(zi(Vi(r,i),i.values),n):(`${e}${t}`,ji(e,t))};function Ui(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?N(e,t,n):F(e)(e,t)}var Wi=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>A.update(t,e),stop:()=>Pr(t),now:()=>Fr.isProcessing?Fr.timestamp:zr.now()}},Gi=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Ki=2e4;function qi(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function Ji(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(qi(r),Ki);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:or(i)}}var I={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Yi(e,t){return e*Math.sqrt(1-t*t)}var Xi=12;function Zi(e,t,n){let r=n;for(let n=1;n<Xi;n++)r-=e(r)/t(r);return r}var Qi=.001;function $i({duration:e=I.duration,bounce:t=I.bounce,velocity:n=I.velocity,mass:r=I.mass}){let i,a;I.maxDuration;let o=1-t;o=Yn(I.minDamping,I.maxDamping,o),e=Yn(I.minDuration,I.maxDuration,or(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=Yi(t,o),c=Math.exp(-i);return Qi-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=Yi(t**2,o);return(-i(t)+Qi>0?-1:1)*((a-s)*c)/l}):(i=t=>-.001+Math.exp(-t*e)*((t-n)*e+1),a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=Zi(i,a,s);if(e=ar(e),isNaN(c))return{stiffness:I.stiffness,damping:I.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var ea=[`duration`,`bounce`],ta=[`stiffness`,`damping`,`mass`];function na(e,t){return t.some(t=>e[t]!==void 0)}function ra(e){let t={velocity:I.velocity,stiffness:I.stiffness,damping:I.damping,mass:I.mass,isResolvedFromDuration:!1,...e};if(!na(e,ta)&&na(e,ea))if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*Yn(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:I.mass,stiffness:i,damping:a}}else{let n=$i({...e,velocity:0});t={...t,...n,mass:I.mass},t.isResolvedFromDuration=!0}return t}function ia(e=I.visualDuration,t=I.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=ra({...n,velocity:-or(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=or(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?I.restSpeed.granular:I.restSpeed.default,i||=v?I.restDelta.granular:I.restDelta.default;let y,b,x,S,C,w;if(h<1)x=Yi(_,h),S=(m+h*_*g)/x,y=e=>{let t=Math.exp(-h*_*e);return o-t*(S*Math.sin(x*e)+g*Math.cos(x*e))},C=h*_*S+g*x,w=h*_*g-S*x,b=e=>Math.exp(-h*_*e)*(C*Math.sin(x*e)+w*Math.cos(x*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;b=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;b=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let ee={calculatedDuration:p&&d||null,velocity:e=>ar(b(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(x*e),a=Math.cos(x*e),c=o-t*(S*n+g*a),l=ar(t*(C*n+w*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=ar(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(qi(ee),Ki),t=Gi(t=>ee.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return ee}ia.applyToOptions=e=>{let t=Ji(e,100,ia);return e.ease=t.ease,e.duration=ar(t.duration),e.type=`keyframes`,e};var aa=5;function oa(e,t,n){let r=Math.max(t-aa,0);return sr(n-e(r),t-r)}function sa({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=ia({keyframes:[f.value,m(f.value)],velocity:oa(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function ca(e,t,n){let r=[],i=n||Xn.mix||Ui,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=nr(Array.isArray(t)?t[n]||tr:t,a)),r.push(a)}return r}function la(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=ca(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=rr(e[r],e[r+1],n);return s[r](i)};return n?t=>l(Yn(e[0],e[a-1],t)):l}function ua(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=rr(0,t,r);e.push(N(n,1,i))}}function da(e){let t=[0];return ua(t,e.length-1),t}function fa(e,t){return e.map(e=>e*t)}function pa(e,t){return e.map(()=>t||wr).splice(0,e.length-1)}function ma({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=Tr(r)?r.map(kr):kr(r),a={done:!1,value:t[0]},o=la(fa(n&&n.length===t.length?n:da(t),e),t,{ease:Array.isArray(i)?i:pa(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var ha=e=>e!==null;function ga(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(ha),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var _a={decay:sa,inertia:sa,tween:ma,keyframes:ma,spring:ia};function va(e){typeof e.type==`string`&&(e.type=_a[e.type])}var ya=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},ba=e=>e/100,xa=class extends ya{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==zr.now()&&this.tick(zr.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;va(e);let{type:t=ma,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||ma;s!==ma&&typeof o[0]!=`number`&&(this.mixKeyframes=nr(ba,Ui(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=qi(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.currentTime=this.holdTime===null?t:this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=Yn(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==sa&&(b.value=ga(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return or(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+or(e)}get time(){return or(this.currentTime)}set time(e){e=ar(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return oa(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(zr.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=or(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Wi,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(zr.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function Sa(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var Ca=e=>e*180/Math.PI,wa=e=>Ea(Ca(Math.atan2(e[1],e[0]))),Ta={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:wa,rotateZ:wa,skewX:e=>Ca(Math.atan(e[1])),skewY:e=>Ca(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Ea=e=>(e%=360,e<0&&(e+=360),e),Da=wa,Oa=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),ka=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Aa={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Oa,scaleY:ka,scale:e=>(Oa(e)+ka(e))/2,rotateX:e=>Ea(Ca(Math.atan2(e[6],e[5]))),rotateY:e=>Ea(Ca(Math.atan2(-e[2],e[0]))),rotateZ:Da,rotate:Da,skewX:e=>Ca(Math.atan(e[4])),skewY:e=>Ca(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function ja(e){return+!!e.includes(`scale`)}function Ma(e,t){if(!e||e===`none`)return ja(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=Aa,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Ta,i=t}if(!i)return ja(t);let a=r[t],o=i[1].split(`,`).map(Pa);return typeof a==`function`?a(o):o[a]}var Na=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return Ma(n,t)};function Pa(e){return parseFloat(e.trim())}var Fa=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],Ia=new Set([...Fa,`pathRotation`]),La=e=>e===Kr||e===j,Ra=new Set([`x`,`y`,`z`]),za=Fa.filter(e=>!Ra.has(e));function Ba(e){let t=[];return za.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}var Va={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Ma(t,`x`),y:(e,{transform:t})=>Ma(t,`y`)};Va.translateX=Va.x,Va.translateY=Va.y;var Ha=new Set,Ua=!1,Wa=!1,Ga=!1;function Ka(){if(Wa){let e=Array.from(Ha).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=Ba(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}Wa=!1,Ua=!1,Ha.forEach(e=>e.complete(Ga)),Ha.clear()}function qa(){Ha.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Wa=!0)})}function Ja(){Ga=!0,qa(),Ka(),Ga=!1}var Ya=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Ha.add(this),Ua||(Ua=!0,A.read(qa),A.resolveKeyframes(Ka))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}Sa(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Ha.delete(this)}cancel(){this.state===`scheduled`&&(Ha.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},Xa=e=>e.startsWith(`--`);function Za(e,t,n){Xa(t)?e.style.setProperty(t,n):e.style[t]=n}var Qa={};function $a(e,t){let n=er(e);return()=>Qa[t]??n()}var eo=$a(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),to=$a(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),no=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,ro={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:no([0,.65,.55,1]),circOut:no([.55,0,1,.45]),backIn:no([.31,.01,.66,-.59]),backOut:no([.33,1.53,.69,.99])};function io(e,t){if(e)return typeof e==`function`?to()?Gi(e,t):`ease-out`:Er(e)?no(e):Array.isArray(e)?e.map(e=>io(e,t)||ro.easeOut):ro[e]}function ao(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=io(s,i);Array.isArray(d)&&(u.easing=d);let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};return l&&(f.pseudoElement=l),e.animate(u,f)}function oo(e){return typeof e==`function`&&`applyToOptions`in e}function so({type:e,...t}){return oo(e)&&to()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var co=class extends ya{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=so(e);this.animation=ao(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=ga(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),Za(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e!==`idle`&&e!==`finished`&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return or(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+or(e)}get time(){return or(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ar(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&eo()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),tr):r(this)}},lo={anticipate:vr,backInOut:_r,circInOut:xr};function uo(e){return e in lo}function fo(e){typeof e.ease==`string`&&uo(e.ease)&&(e.ease=lo[e.ease])}var po=10,mo=class extends co{constructor(e){fo(e),va(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new xa({...a,autoplay:!1}),s=Math.max(po,zr.now()-this.startTime),c=Yn(0,po,s-po),l=o.sample(s).value,{name:u}=this.options;i&&u&&Za(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},ho=(e,t)=>t!==`zIndex`&&!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(Oi.test(e)||e===`0`)&&!e.startsWith(`url(`));function go(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function L(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=ho(i,t),s=ho(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:go(e)||(n===`spring`||oo(n))&&r}function R(e){e.duration=0,e.type=`keyframes`}var _o=new Set([`opacity`,`clipPath`,`filter`,`transform`,`backgroundColor`]),vo=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function yo(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&vo.test(e[t]))return!0;return!1}var bo=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),xo=er(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function So(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e,c=t?.owner?.current;if(!(c instanceof HTMLElement)&&!(c instanceof SVGElement))return!1;let{onUpdate:l,transformTemplate:u}=t.owner.getProps();return xo()&&n&&(_o.has(n)||bo.has(n)&&yo(s))&&(n!==`transform`||!u)&&!l&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var Co=40,wo=class extends ya{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=zr.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u},f=l?.KeyframeResolver||Ya;this.keyframeResolver=new f(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=zr.now();let u=!0;L(e,i,a,o)||(u=!1,(Xn.instantAnimations||!s)&&l?.(ga(e,n,t)),e[0]=e[e.length-1],R(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>Co?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&So(d),p=d.motionValue?.owner?.current,m;if(f)try{m=new mo({...d,element:p})}catch{m=new xa(d)}else m=new xa(d);m.finished.then(()=>{this.notifyFinished()}).catch(tr),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Ja()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function To(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var Eo=30,Do=e=>!isNaN(parseFloat(e)),Oo={current:void 0},ko=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=zr.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=zr.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Do(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new ir);let n=this.events[e].add(t);return e===`change`?()=>{n(),A.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Oo.current&&Oo.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=zr.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Eo)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Eo);return sr(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function Ao(e,t){return new ko(e,t)}function jo(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function Mo(e,t){let n=e?.[t]??e?.default??e;return n===e?n:jo(n,e)}var No={type:`spring`,stiffness:500,damping:25,restSpeed:10},Po=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Fo={type:`keyframes`,duration:.8},Io={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},Lo=(e,{keyframes:t})=>t.length>2?Fo:Ia.has(e)?e.startsWith(`scale`)?Po(t[1]):No:Io,Ro=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function zo(e){for(let t in e)if(!Ro.has(t))return!0;return!1}var Bo=(e,t,n,r={},i,a)=>o=>{let s=Mo(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=ar(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};zo(s)||Object.assign(u,Lo(e,u)),u.duration&&=ar(u.duration),u.repeatDelay&&=ar(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(R(u),u.delay===0&&(d=!0)),(Xn.instantAnimations||Xn.skipAnimations||i?.shouldSkipAnimations||s.skipAnimations)&&(d=!0,R(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=ga(u.keyframes,s);if(e!==void 0){A.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new xa(u):new wo(u)},Vo=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Ho(e){let t=Vo.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function Uo(e,t,n=1){`${e}`;let[r,i]=Ho(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return Zn(e)?parseFloat(e):e}return Ur(i)?Uo(i,t,n+1):i}function Wo(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function Go(e,t,n,r){if(typeof t==`function`){let[i,a]=Wo(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=Wo(r);t=t(n===void 0?e.custom:n,i,a)}return t}function Ko(e,t,n){let r=e.getProps();return Go(r,t,n===void 0?r.custom:n,e)}var qo=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...Fa]),Jo=e=>Array.isArray(e);function Yo(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Ao(n))}function Xo(e){return Jo(e)?e[e.length-1]||0:e}function Zo(e,t){let{transitionEnd:n={},transition:r={},...i}=Ko(e,t)||{};i={...i,...n};for(let t in i)Yo(e,t,Xo(i[t]))}var Qo=e=>!!(e&&e.getVelocity);function $o(e){return!!(Qo(e)&&e.add)}function es(e,t){let n=e.getValue(`willChange`);if($o(n))return n.add(t);if(!n&&Xn.WillChange){let n=new Xn.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function ts(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var ns=`data-`+ts(`framerAppearId`);function rs(e){return e.props[ns]}function is({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function as(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?jo(a,c):c;let l=a?.reduceMotion,u=a?.skipAnimations;r&&(a=r);let d=[],f=i&&e.animationState&&e.animationState.getState()[i],p=a?.path;p&&p.animateVisualElement(e,s,a,n,d);for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||f&&is(f,t))continue;let o={delay:n,...Mo(a||{},t)};u&&(o.skipAnimations=!0);let c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){A.update(()=>r.set(i));continue}let p=!1;if(window.MotionHandoffAnimation){let n=rs(e);if(n){let e=window.MotionHandoffAnimation(n,t,A);e!==null&&(o.startTime=e,p=!0)}}es(e,t);let m=l??e.shouldReduceMotion;r.start(Bo(t,r,i,m&&qo.has(t)?{type:!1}:o,e,p));let h=r.animation;h&&d.push(h)}if(o){let t=()=>A.update(()=>{o&&Zo(e,o)});d.length?Promise.all(d).then(t):t()}return d}function os(e,t,n={}){let r=Ko(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(as(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return ss(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}return Promise.all([a(),o(n.delay)])}function ss(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(os(c,t,{...o,delay:n+(typeof r==`function`?0:r)+To(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function cs(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>os(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=os(e,t,n);else{let i=typeof t==`function`?Ko(e,t,n.custom):t;r=Promise.all(as(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var ls={test:e=>e===`auto`,parse:e=>e},us=e=>t=>t.test(e),ds=[Kr,j,ci,si,ui,li,ls],fs=e=>ds.find(us(e));function ps(e){return typeof e==`number`?e===0:e===null||e===`none`||e===`0`||$n(e)}var ms=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function hs(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Xr)||[];if(!r)return e;let i=n.replace(r,``),a=+!!ms.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var gs=/\b([a-z-]*)\(.*?\)/gu,_s={...Oi,getAnimatableNone:e=>{let t=e.match(gs);return t?t.map(hs).join(` `):e}},vs={...Oi,getAnimatableNone:e=>{let t=Oi.parse(e);return Oi.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},ys={...Kr,transform:Math.round},bs={borderWidth:j,borderTopWidth:j,borderRightWidth:j,borderBottomWidth:j,borderLeftWidth:j,borderRadius:j,borderTopLeftRadius:j,borderTopRightRadius:j,borderBottomRightRadius:j,borderBottomLeftRadius:j,width:j,maxWidth:j,height:j,maxHeight:j,top:j,right:j,bottom:j,left:j,inset:j,insetBlock:j,insetBlockStart:j,insetBlockEnd:j,insetInline:j,insetInlineStart:j,insetInlineEnd:j,padding:j,paddingTop:j,paddingRight:j,paddingBottom:j,paddingLeft:j,paddingBlock:j,paddingBlockStart:j,paddingBlockEnd:j,paddingInline:j,paddingInlineStart:j,paddingInlineEnd:j,margin:j,marginTop:j,marginRight:j,marginBottom:j,marginLeft:j,marginBlock:j,marginBlockStart:j,marginBlockEnd:j,marginInline:j,marginInlineStart:j,marginInlineEnd:j,fontSize:j,backgroundPositionX:j,backgroundPositionY:j,rotate:si,pathRotation:si,rotateX:si,rotateY:si,rotateZ:si,scale:Jr,scaleX:Jr,scaleY:Jr,scaleZ:Jr,skew:si,skewX:si,skewY:si,distance:j,translateX:j,translateY:j,translateZ:j,x:j,y:j,z:j,perspective:j,transformPerspective:j,opacity:qr,originX:di,originY:di,originZ:j,zIndex:ys,fillOpacity:qr,strokeOpacity:qr,numOctaves:ys},xs={...bs,color:M,backgroundColor:M,outlineColor:M,fill:M,stroke:M,borderColor:M,borderTopColor:M,borderRightColor:M,borderBottomColor:M,borderLeftColor:M,filter:_s,WebkitFilter:_s,mask:vs,WebkitMask:vs},Ss=e=>xs[e],Cs=new Set([_s,vs]);function ws(e,t){let n=Ss(e);return Cs.has(n)||(n=Oi),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var Ts=new Set([`auto`,`none`,`0`]);function Es(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!Ts.has(t)&&xi(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=ws(n,i)}var Ds=class extends Ya{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Ur(r))){let i=Uo(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!qo.has(n)||e.length!==2)return;let[r,i]=e,a=fs(r),o=fs(i);if(Gr(r)!==Gr(i)&&Va[n]){this.needsMeasurement=!0;return}if(a!==o)if(La(a)&&La(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Va[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||ps(e[t]))&&n.push(t);n.length&&Es(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Va[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Va[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}},Os=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomRightRadius`,`borderBottomLeftRadius`];function ks(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var As=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function js(e){return Qn(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}var{schedule:Ms,cancel:Ns}=Nr(queueMicrotask,!1),Ps={x:!1,y:!1};function Fs(){return Ps.x||Ps.y}function Is(e){return e===`x`||e===`y`?Ps[e]?null:(Ps[e]=!0,()=>{Ps[e]=!1}):Ps.x||Ps.y?null:(Ps.x=Ps.y=!0,()=>{Ps.x=Ps.y=!1})}function Ls(e,t){let n=ks(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function Rs(e){return!(e.pointerType===`touch`||Fs())}function zs(e,t,n={}){let[r,i,a]=Ls(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!Rs(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var Bs=(e,t)=>t?e===t||Bs(e,t.parentElement):!1,Vs=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,Hs=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function Us(e){return Hs.has(e.tagName)||e.isContentEditable===!0}var Ws=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function Gs(e){return Ws.has(e.tagName)||e.isContentEditable===!0}var Ks=new WeakSet;function qs(e){return t=>{t.key===`Enter`&&e(t)}}function Js(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var Ys=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=qs(()=>{if(Ks.has(n))return;Js(n,`down`);let e=qs(()=>{Js(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>Js(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function Xs(e){return Vs(e)&&!Fs()}var Zs=new WeakSet;function Qs(e,t,n={}){let[r,i,a]=Ls(e,n),o=e=>{let r=e.currentTarget;if(!Xs(e)||Zs.has(e))return;Ks.add(r),n.stopPropagation&&Zs.add(e);let a=t(r,e),o={...i,capture:!0},s=(e,t)=>{window.removeEventListener(`pointerup`,c,o),window.removeEventListener(`pointercancel`,l,o),Ks.has(r)&&Ks.delete(r),Xs(e)&&typeof a==`function`&&a(e,{success:t})},c=e=>{s(e,r===window||r===document||n.useGlobalTarget||Bs(r,e.target))},l=e=>{s(e,!1)};window.addEventListener(`pointerup`,c,o),window.addEventListener(`pointercancel`,l,o)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),js(e)&&(e.addEventListener(`focus`,e=>Ys(e,i)),!Us(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function $s(e){return Qn(e)&&`ownerSVGElement`in e}var ec=new WeakMap,tc,nc=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:$s(r)&&`getBBox`in r?r.getBBox()[t]:r[n],rc=nc(`inline`,`width`,`offsetWidth`),ic=nc(`block`,`height`,`offsetHeight`);function ac({target:e,borderBoxSize:t}){ec.get(e)?.forEach(n=>{n(e,{get width(){return rc(e,t)},get height(){return ic(e,t)}})})}function oc(e){e.forEach(ac)}function sc(){typeof ResizeObserver>`u`||(tc=new ResizeObserver(oc))}function cc(e,t){tc||sc();let n=ks(e);return n.forEach(e=>{let n=ec.get(e);n||(n=new Set,ec.set(e,n)),n.add(t),tc?.observe(e)}),()=>{n.forEach(e=>{let n=ec.get(e);n?.delete(t),n?.size||tc?.unobserve(e)})}}var lc=new Set,uc;function dc(){uc=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};lc.forEach(t=>t(e))},window.addEventListener(`resize`,uc)}function fc(e){return lc.add(e),uc||dc(),()=>{lc.delete(e),!lc.size&&typeof uc==`function`&&(window.removeEventListener(`resize`,uc),uc=void 0)}}function pc(e,t){return typeof e==`function`?fc(e):cc(e,t)}var mc={value:null,addProjectionMetrics:null};function hc(e){return $s(e)&&e.tagName===`svg`}var gc=[...ds,M,Oi],_c=e=>gc.find(us(e)),vc=()=>({translate:0,scale:1,origin:0,originPoint:0}),yc=()=>({x:vc(),y:vc()}),bc=()=>({min:0,max:0}),xc=()=>({x:bc(),y:bc()}),Sc=new WeakMap;function Cc(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function wc(e){return typeof e==`string`||Array.isArray(e)}var Tc=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],Ec=[`initial`,...Tc];function Dc(e){return Cc(e.animate)||Ec.some(t=>wc(e[t]))}function Oc(e){return!!(Dc(e)||e.variants)}function kc(e,t,n){for(let r in t){let i=t[r],a=n[r];if(Qo(i))e.addValue(r,i);else if(Qo(a))e.addValue(r,Ao(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,Ao(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var Ac={current:null},jc={current:!1},Mc=typeof window<`u`;function Nc(){if(jc.current=!0,Mc)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>Ac.current=e.matches;e.addEventListener(`change`,t),t()}else Ac.current=!1}var Pc=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],Fc={};function Ic(e){Fc=e}function Lc(){return Fc}var Rc=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Ya,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=zr.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,A.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=Dc(t),this.isVariantNode=Oc(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&Qo(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,Sc.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(jc.current||Nc(),this.shouldReduceMotion=Ac.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Pr(this.notifyUpdate),Pr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&_o.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new co({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:ar(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=Ia.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&A.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in Fc){let t=Fc[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):xc()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<Pc.length;t++){let n=Pc[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=kc(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=Ao(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(Zn(n)||$n(n))?n=parseFloat(n):!_c(n)&&Oi.test(t)&&(n=ws(e,t)),this.setBaseTarget(e,Qo(n)?n.get():n)),Qo(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=Go(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Qo(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new ir),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Ms.render(this.render)}},zc=class extends Rc{constructor(){super(...arguments),this.KeyframeResolver=Ds}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;Qo(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},Bc=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function Vc({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Hc({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function z(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Uc(e){return e===void 0||e===1}function Wc({scale:e,scaleX:t,scaleY:n}){return!Uc(e)||!Uc(t)||!Uc(n)}function Gc(e){return Wc(e)||Kc(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Kc(e){return qc(e.x)||qc(e.y)}function qc(e){return e&&e!==`0%`}function Jc(e,t,n){return n+t*(e-n)}function Yc(e,t,n,r,i){return i!==void 0&&(e=Jc(e,i,r)),Jc(e,n,r)+t}function Xc(e,t=0,n=1,r,i){e.min=Yc(e.min,t,n,r,i),e.max=Yc(e.max,t,n,r,i)}function Zc(e,{x:t,y:n}){Xc(e.x,t.translate,t.scale,t.originPoint),Xc(e.y,n.translate,n.scale,n.originPoint)}var Qc=.999999999999,$c=1.0000000000001;function el(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(tl(e.x,-a.scroll.offset.x),tl(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Zc(e,o)),r&&Gc(a.latestValues)&&il(e,a.latestValues,a.layout?.layoutBox))}t.x<$c&&t.x>Qc&&(t.x=1),t.y<$c&&t.y>Qc&&(t.y=1)}function tl(e,t){e.min+=t,e.max+=t}function nl(e,t,n,r,i=.5){Xc(e,t,n,N(e.min,e.max,i),r)}function rl(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function il(e,t,n){let r=n??e;nl(e.x,rl(t.x,r.x),t.scaleX,t.scale,t.originX),nl(e.y,rl(t.y,r.y),t.scaleY,t.scale,t.originY)}function al(e,t){return Vc(z(e.getBoundingClientRect(),t))}function ol(e,t,n){let r=al(e,n),{scroll:i}=t;return i&&(tl(r.x,i.offset.x),tl(r.y,i.offset.y)),r}var sl={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},cl=Fa.length;function ll(e,t,n){let r=``,i=!0;for(let a=0;a<cl;a++){let o=Fa[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=As(s,bs[o]);if(!c){i=!1;let t=sl[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}let a=e.pathRotation;return a&&(i=!1,r+=`rotate(${As(a,bs.pathRotation)}) `),r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function ul(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(Ia.has(e)){o=!0;continue}if(Vr(e)){i[e]=n;continue}{let t=As(n,bs[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=ll(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function dl(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function fl(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var B={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(j.test(e))e=parseFloat(e);else return e;return`${fl(e,t.target.x)}% ${fl(e,t.target.y)}%`}},pl={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=Oi.parse(e);if(i.length>5)return r;let a=Oi.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=N(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},ml={borderRadius:{...B,applyTo:[...Os]},borderTopLeftRadius:B,borderTopRightRadius:B,borderBottomLeftRadius:B,borderBottomRightRadius:B,boxShadow:pl};function hl(e,{layout:t,layoutId:n}){return Ia.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!ml[e]||e===`opacity`)}function gl(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(Qo(r[t])||i&&Qo(i[t])||hl(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function _l(e){return window.getComputedStyle(e)}var vl=class extends zc{constructor(){super(...arguments),this.type=`html`,this.renderInstance=dl}mount(e){e.style,super.mount(e)}readValueFromInstance(e,t){if(Ia.has(t))return this.projection?.isProjecting?ja(t):Na(e,t);{let n=_l(e),r=(Vr(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return al(e,t)}build(e,t,n){ul(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return gl(e,t,n)}},yl={offset:`stroke-dashoffset`,array:`stroke-dasharray`},bl={offset:`strokeDashoffset`,array:`strokeDasharray`};function xl(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?yl:bl;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var Sl=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function Cl(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(ul(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of Sl)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&xl(d,i,a,o,!1)}var wl=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),Tl=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function El(e,t,n,r){dl(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(wl.has(n)?n:ts(n),t.attrs[n])}function Dl(e,t,n){let r=gl(e,t,n);for(let n in e)if(Qo(e[n])||Qo(t[n])){let t=Fa.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var Ol=class extends zc{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=xc}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Ia.has(t)){let e=Ss(t);return e&&e.default||0}return t=wl.has(t)?t:ts(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Dl(e,t,n)}build(e,t,n){Cl(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){El(e,t,n,r)}mount(e){this.isSVGTag=Tl(e.tagName),super.mount(e)}},kl=Ec.length;function Al(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&Al(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<kl;n++){let r=Ec[n],i=e.props[r];(wc(i)||i===!1)&&(t[r]=i)}return t}function jl(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var Ml=[...Tc].reverse(),Nl=Tc.length;function Pl(e){return t=>Promise.all(t.map(({animation:t,options:n})=>cs(e,t,n)))}function Fl(e){let t=Pl(e),n=Rl(),r=!0,i=!1,a=t=>(n,r)=>{let i=Ko(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=Al(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<Nl;t++){let p=Ml[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=wc(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||Cc(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=Il(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{});_===!1&&(C={});let{prevResolvedValues:w={}}=m,ee={...w,...C},T=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in ee){let t=C[e],n=w[e];if(d.hasOwnProperty(e))continue;let r=!1;r=Jo(t)&&Jo(n)?!jl(t,n)||y:t!==n,r?t==null?u.add(e):T(e):t!==void 0&&u.has(e)?T(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={...d,...C}),(r||i)&&e.blockInitialAnimation&&(b=!1);let te=v&&y;b&&(!te||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!te&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=Ko(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=To(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=Ko(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Rl(),i=!0}}}function Il(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!jl(t,e):!1}function Ll(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Rl(){return{animate:Ll(!0),whileInView:Ll(),whileHover:Ll(),whileTap:Ll(),whileDrag:Ll(),whileFocus:Ll(),exit:Ll()}}function zl(e,t){e.min=t.min,e.max=t.max}function Bl(e,t){zl(e.x,t.x),zl(e.y,t.y)}function Vl(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var Hl=.9999,Ul=1.0001,V=-.01,H=.01;function U(e){return e.max-e.min}function W(e,t,n){return Math.abs(e-t)<=n}function G(e,t,n,r=.5){e.origin=r,e.originPoint=N(t.min,t.max,e.origin),e.scale=U(n)/U(t),e.translate=N(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Hl&&e.scale<=Ul||isNaN(e.scale))&&(e.scale=1),(e.translate>=V&&e.translate<=H||isNaN(e.translate))&&(e.translate=0)}function Wl(e,t,n,r){G(e.x,t.x,n.x,r?r.originX:void 0),G(e.y,t.y,n.y,r?r.originY:void 0)}function Gl(e,t,n,r=0){e.min=(r?N(n.min,n.max,r):n.min)+t.min,e.max=e.min+U(t)}function Kl(e,t,n,r){Gl(e.x,t.x,n.x,r?.x),Gl(e.y,t.y,n.y,r?.y)}function ql(e,t,n,r=0){let i=r?N(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+U(t)}function Jl(e,t,n,r){ql(e.x,t.x,n.x,r?.x),ql(e.y,t.y,n.y,r?.y)}function K(e,t,n,r,i){return e-=t,e=Jc(e,1/n,r),i!==void 0&&(e=Jc(e,1/i,r)),e}function Yl(e,t=0,n=1,r=.5,i,a=e,o=e){if(ci.test(t)&&(t=parseFloat(t),t=N(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=N(a.min,a.max,r);e===a&&(s-=t),e.min=K(e.min,t,n,s,i),e.max=K(e.max,t,n,s,i)}function Xl(e,t,[n,r,i],a,o){Yl(e,t[n],t[r],t[i],t.scale,a,o)}var Zl=[`x`,`scaleX`,`originX`],Ql=[`y`,`scaleY`,`originY`];function $l(e,t,n,r){Xl(e.x,t,Zl,n?n.x:void 0,r?r.x:void 0),Xl(e.y,t,Ql,n?n.y:void 0,r?r.y:void 0)}function eu(e){return e.translate===0&&e.scale===1}function tu(e){return eu(e.x)&&eu(e.y)}function nu(e,t){return e.min===t.min&&e.max===t.max}function ru(e,t){return nu(e.x,t.x)&&nu(e.y,t.y)}function iu(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function au(e,t){return iu(e.x,t.x)&&iu(e.y,t.y)}function ou(e){return U(e.x)/U(e.y)}function su(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function q(e){return[e(`x`),e(`y`)]}function cu(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,pathRotation:i,rotateX:a,rotateY:o,skewX:s,skewY:c}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotate(${i}deg) `),a&&(r+=`rotateX(${a}deg) `),o&&(r+=`rotateY(${o}deg) `),s&&(r+=`skewX(${s}deg) `),c&&(r+=`skewY(${c}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var lu=Os.length,uu=e=>typeof e==`string`?parseFloat(e):e,du=e=>typeof e==`number`||j.test(e);function fu(e,t,n,r,i,a){i?(e.opacity=N(0,n.opacity??1,mu(r)),e.opacityExit=N(t.opacity??1,0,hu(r))):a&&(e.opacity=N(t.opacity??1,n.opacity??1,r));for(let i=0;i<lu;i++){let a=Os[i],o=pu(t,a),s=pu(n,a);(o!==void 0||s!==void 0)&&(o||=0,s||=0,o===0||s===0||du(o)===du(s)?(e[a]=Math.max(N(uu(o),uu(s),r),0),(ci.test(s)||ci.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=N(t.rotate||0,n.rotate||0,r))}function pu(e,t){return e[t]===void 0?e.borderRadius:e[t]}var mu=gu(0,.5,br),hu=gu(.5,.95,tr);function gu(e,t,n){return r=>r<e?0:r>t?1:n(rr(e,t,r))}function _u(e,t,n){let r=Qo(e)?e:Ao(e);return r.start(Bo(``,r,t,n)),r.animation}function vu(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}var yu=(e,t)=>e.depth-t.depth,bu=class{constructor(){this.children=[],this.isDirty=!1}add(e){qn(this.children,e),this.isDirty=!0}remove(e){Jn(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(yu),this.isDirty=!1,this.children.forEach(e)}};function xu(e,t){let n=zr.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(Pr(r),e(a-t))};return A.setup(r,!0),()=>Pr(r)}function Su(e){return Qo(e)?e.get():e}var Cu=class{constructor(){this.members=[]}add(e){qn(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(Jn(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(Jn(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}},wu={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Tu={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},Eu=[``,`X`,`Y`,`Z`],Du=1e3,Ou=0;function ku(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Au(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=rs(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,A,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Au(r)}function ju({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=Ou++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,mc.value&&(Tu.nodes=Tu.calculatedTargetDeltas=Tu.calculatedProjections=0),this.nodes.forEach(Pu),this.nodes.forEach(Uu),this.nodes.forEach(Wu),this.nodes.forEach(Fu),mc.addProjectionMetrics&&mc.addProjectionMetrics(Tu)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new bu)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new ir),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=$s(t)&&!hc(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;A.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=xu(i,250),wu.hasAnimatedSinceResize&&(wu.hasAnimatedSinceResize=!1,this.nodes.forEach(Hu)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||Xu,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!au(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...Mo(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l,t.path)}else t||Hu(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Pr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Gu),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Au(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(Ru),this.nodes.forEach(Lu);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(zu);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Bu),this.nodes.forEach(Vu),this.nodes.forEach(Mu),this.nodes.forEach(Nu)):this.nodes.forEach(zu),this.clearAllSnapshots();let e=zr.now();Fr.delta=Yn(0,1e3/60,e-Fr.timestamp),Fr.timestamp=e,Fr.isProcessing=!0,Ir.update.process(Fr),Ir.preRender.process(Fr),Ir.render.process(Fr),Fr.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ms.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Iu),this.sharedNodes.forEach(Ku)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,A.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){A.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!U(this.snapshot.measuredBox.x)&&!U(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=xc(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!tu(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||Gc(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),ed(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return xc();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(nd))){let{scroll:e}=this.root;e&&(tl(t.x,e.offset.x),tl(t.y,e.offset.y))}return t}removeElementScroll(e){let t=xc();if(Bl(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&Bl(t,e),tl(t.x,i.offset.x),tl(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||xc();Bl(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(tl(r.x,-n.scroll.offset.x),tl(r.y,-n.scroll.offset.y)),Gc(n.latestValues)&&il(r,n.latestValues,n.layout?.layoutBox)}return Gc(this.latestValues)&&il(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=xc();Bl(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!Gc(n.latestValues))continue;let r;n.instance&&(Wc(n.latestValues)&&n.updateSnapshot(),r=xc(),Bl(r,n.measurePageBox())),$l(t,n.latestValues,n.snapshot?.layoutBox,r)}return Gc(this.latestValues)&&$l(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Fr.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=Fr.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=xc(),this.targetWithTransforms=xc()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Kl(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Bl(this.target,this.layout.layoutBox),Zc(this.target,this.targetDelta)):Bl(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),mc.value&&Tu.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||Wc(this.parent.latestValues)||Kc(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=xc(),this.relativeTargetOrigin=xc(),Jl(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),Bl(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===Fr.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;Bl(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;el(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=xc());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Vl(this.prevProjectionDelta.x,this.projectionDelta.x),Vl(this.prevProjectionDelta.y,this.projectionDelta.y)),Wl(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!su(this.projectionDelta.x,this.prevProjectionDelta.x)||!su(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),mc.value&&Tu.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=yc(),this.projectionDelta=yc(),this.projectionDeltaWithTransform=yc()}setAnimationOrigin(e,t=!1,n){let r=this.snapshot,i=r?r.latestValues:{},a={...this.latestValues},o=yc();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let s=xc(),c=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),u=!l||l.members.length<=1,d=!!(c&&!u&&this.options.crossfade===!0&&!this.path.some(Yu));this.animationProgress=0;let f,p=n?.interpolateProjection(e);this.mixTargetDelta=t=>{let n=t/1e3,r=p?.(n);r?(o.x.translate=r.x,o.x.scale=N(e.x.scale,1,n),o.x.origin=e.x.origin,o.x.originPoint=e.x.originPoint,o.y.translate=r.y,o.y.scale=N(e.y.scale,1,n),o.y.origin=e.y.origin,o.y.originPoint=e.y.originPoint):(qu(o.x,e.x,n),qu(o.y,e.y,n)),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Jl(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Ju(this.relativeTarget,this.relativeTargetOrigin,s,n),f&&ru(this.relativeTarget,f)&&(this.isProjectionDirty=!1),f||=xc(),Bl(f,this.relativeTarget)),c&&(this.animationValues=a,fu(a,i,this.latestValues,n,d,u)),r&&r.rotate!==void 0&&(this.animationValues||=a,this.animationValues.pathRotation=r.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(Pr(this.pendingAnimation),void 0),this.pendingAnimation=A.update(()=>{wu.hasAnimatedSinceResize=!0,this.motionValue||=Ao(0),this.motionValue.jump(0,!1),this.currentAnimation=_u(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Du),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&td(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||xc();let t=U(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=U(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}Bl(t,n),il(t,i),Wl(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Cu),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&ku(`z`,e,r,this.animationValues);for(let t=0;t<Eu.length;t++)ku(`rotate${Eu[t]}`,e,r,this.animationValues),ku(`skew${Eu[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=Su(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=Su(t?.pointerEvents)||``),this.hasProjected&&!Gc(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=cu(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,e.opacity=r.animationValues?r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in ml){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=ml[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?Su(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(Lu),this.root.sharedNodes.clear()}}}function Mu(e){e.updateLayout()}function Nu(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)q(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=U(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;zl(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else td(i,t.layoutBox,n)&&q(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=U(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=yc();Wl(o,n,t.layoutBox);let s=yc();a?Wl(s,e.applyTransform(r,!0),t.measuredBox):Wl(s,n,t.layoutBox);let c=!tu(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=xc();Jl(s,t.layoutBox,i.layoutBox,o);let c=xc();Jl(c,n,a.layoutBox,o),au(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Pu(e){mc.value&&Tu.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function Fu(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Iu(e){e.clearSnapshot()}function Lu(e){e.clearMeasurements()}function Ru(e){e.isLayoutDirty=!0,e.updateLayout()}function zu(e){e.isLayoutDirty=!1}function Bu(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function Vu(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function Hu(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Uu(e){e.resolveTargetDelta()}function Wu(e){e.calcProjection()}function Gu(e){e.resetSkewAndRotation()}function Ku(e){e.removeLeadSnapshot()}function qu(e,t,n){e.translate=N(t.translate,0,n),e.scale=N(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function J(e,t,n,r){e.min=N(t.min,n.min,r),e.max=N(t.max,n.max,r)}function Ju(e,t,n,r){J(e.x,t.x,n.x,r),J(e.y,t.y,n.y,r)}function Yu(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var Xu={duration:.45,ease:[.4,0,.1,1]},Zu=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Qu=Zu(`applewebkit/`)&&!Zu(`chrome/`)?Math.round:tr;function $u(e){e.min=Qu(e.min),e.max=Qu(e.max)}function ed(e){$u(e.x),$u(e.y)}function td(e,t,n){return e===`position`||e===`preserve-aspect`&&!W(ou(t),ou(n),.2)}function nd(e){return e!==e.root&&e.scroll?.wasRoot}var rd=ju({attachResizeListener:(e,t)=>vu(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),id={current:void 0},ad=ju({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!id.current){let e=new rd({});e.mount(window),e.setOptions({layoutScroll:!0}),id.current=e}return id.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),od=(0,w.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function sd(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function cd(...e){return t=>{let n=!1,r=e.map(e=>{let r=sd(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():sd(e[t],null)}}}}function ld(...e){return w.useCallback(cd(...e),e)}var Y=Hn(),ud=class extends w.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(js(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){let e=t.offsetParent,n=js(e)&&e.offsetWidth||0,r=js(e)&&e.offsetHeight||0,i=getComputedStyle(t),a=this.props.sizeRef.current;a.height=parseFloat(i.height),a.width=parseFloat(i.width),a.top=t.offsetTop,a.left=t.offsetLeft,a.right=n-a.width-a.left,a.bottom=r-a.height-a.top,a.direction=i.direction}return null}componentDidUpdate(){}render(){return this.props.children}};function dd({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:a}){let o=(0,w.useId)(),s=(0,w.useRef)(null),c=(0,w.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:`ltr`}),{nonce:l}=(0,w.useContext)(od),u=ld(s,a===!1?void 0:e.props?.ref??e?.ref);return(0,w.useInsertionEffect)(()=>{let{width:e,height:u,top:d,left:f,right:p,bottom:m,direction:h}=c.current;if(t||a===!1||!s.current||!e||!u)return;let g=h===`rtl`,_=n===`left`?g?`right: ${p}`:`left: ${f}`:g?`left: ${f}`:`right: ${p}`,v=r===`bottom`?`bottom: ${m}`:`top: ${d}`;s.current.dataset.motionPopId=o;let y=document.createElement(`style`);l&&(y.nonce=l);let b=i??document.head;return b.appendChild(y),y.sheet&&y.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${_}px !important;
            ${v}px !important;
          }
        `),()=>{s.current?.removeAttribute(`data-motion-pop-id`),b.contains(y)&&b.removeChild(y)}},[t]),(0,Y.jsx)(ud,{isPresent:t,childRef:s,sizeRef:c,pop:a,children:a===!1?e:w.cloneElement(e,{ref:u})})}var fd=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=Wn(pd),d=(0,w.useId)(),f=(0,w.useRef)(n),p=(0,w.useRef)(r);Gn(()=>{f.current=n,p.current=r});let m=!0,h=(0,w.useMemo)(()=>(m=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>{u.delete(e),!f.current&&!u.size&&p.current?.()})}),[n,u,r]);return a&&m&&(h={...h}),(0,w.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),w.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),e=(0,Y.jsx)(dd,{pop:o===`popLayout`,isPresent:n,anchorX:s,anchorY:c,root:l,children:e}),(0,Y.jsx)(Kn.Provider,{value:h,children:e})};function pd(){return new Map}function md(e=!0){let t=(0,w.useContext)(Kn);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,w.useId)();(0,w.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,w.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var hd=e=>e.key||``;function gd(e){let t=[];return w.Children.forEach(e,e=>{(0,w.isValidElement)(e)&&t.push(e)}),t}var _d=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=md(o),f=(0,w.useMemo)(()=>gd(e),[e]),p=o&&!u?[]:f.map(hd),m=(0,w.useRef)(!0),h=(0,w.useRef)(f),g=Wn(()=>new Map),_=(0,w.useRef)(new Set),[v,y]=(0,w.useState)(f),[b,x]=(0,w.useState)(f);Gn(()=>{m.current=!1,h.current=f;for(let e=0;e<b.length;e++){let t=hd(b[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[b,p.length,p.join(`-`)]);let S=[];if(f!==v){let e=[...f];for(let t=0;t<b.length;t++){let n=b[t],r=hd(n);p.includes(r)||(e.splice(t,0,n),S.push(n))}return a===`wait`&&S.length&&(e=S),x(gd(e)),y(f),null}let{forceRender:C}=(0,w.useContext)(Un);return(0,Y.jsx)(Y.Fragment,{children:b.map(e=>{let v=hd(e),y=o&&!u?!1:f===b||p.includes(v);return(0,Y.jsx)(fd,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(g.has(v))_.current.add(v),g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(C?.(),x(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},vd=(0,w.createContext)({strict:!1}),yd={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},bd=!1;function xd(){if(bd)return;let e={};for(let t in yd)e[t]={isEnabled:e=>yd[t].some(t=>!!e[t])};Ic(e),bd=!0}function X(){return xd(),Lc()}function Sd(e){let t=X();for(let n in e)t[n]={...t[n],...e[n]};Ic(t)}var Cd=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function wd(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||Cd.has(e)}var Td=c({default:()=>Ed}),Ed,Dd=o((()=>{throw Ed={},Error(`Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`)})),Od=e=>!wd(e);function kd(e){typeof e==`function`&&(Od=t=>t.startsWith(`on`)?!wd(t):e(t))}try{kd((Dd(),d(Td)).default)}catch{}function Ad(e,t,n){let r={};for(let i in e)(i!==`values`||typeof e.values!=`object`)&&(Qo(e[i])||(Od(i)||n===!0&&wd(i)||!t&&!wd(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]));return r}var jd=(0,w.createContext)({});function Md(e,t){if(Dc(e)){let{initial:t,animate:n}=e;return{initial:t===!1||wc(t)?t:void 0,animate:wc(n)?n:void 0}}return e.inherit===!1?{}:t}function Nd(e){let{initial:t,animate:n}=Md(e,(0,w.useContext)(jd));return(0,w.useMemo)(()=>({initial:t,animate:n}),[Pd(t),Pd(n)])}function Pd(e){return Array.isArray(e)?e.join(` `):e}var Z=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Fd(e,t,n){for(let r in t)!Qo(t[r])&&!hl(r,n)&&(e[r]=t[r])}function Id({transformTemplate:e},t){return(0,w.useMemo)(()=>{let n=Z();return ul(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Ld(e,t){let n=e.style||{},r={};return Fd(r,n,e),Object.assign(r,Id(e,t)),r}function Rd(e,t){let n={},r=Ld(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var zd=()=>({...Z(),attrs:{}});function Bd(e,t,n,r){let i=(0,w.useMemo)(()=>{let n=zd();return Cl(n,t,Tl(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};Fd(t,e.style,e),i.style={...t,...i.style}}return i}var Vd=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function Hd(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(Vd.indexOf(e)>-1||/[A-Z]/u.test(e))}function Ud(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??Hd(e)?Bd:Rd)(t,r,i,e),c=Ad(t,typeof e==`string`,a),l=e===w.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,w.useMemo)(()=>Qo(u)?u.get():u,[u]);return(0,w.createElement)(e,{...l,children:d})}function Wd({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:Gd(n,r,i,e),renderState:t()}}function Gd(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=Su(a[e]);let{initial:o,animate:s}=e,c=Dc(e),l=Oc(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!Cc(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=Go(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var Kd=e=>(t,n)=>{let r=(0,w.useContext)(jd),i=(0,w.useContext)(Kn),a=()=>Wd(e,t,r,i);return n?a():Wn(a)},qd=Kd({scrapeMotionValuesFromProps:gl,createRenderState:Z}),Jd=Kd({scrapeMotionValuesFromProps:Dl,createRenderState:zd}),Yd=Symbol.for(`motionComponentSymbol`);function Xd(e,t,n){let r=(0,w.useRef)(n);(0,w.useInsertionEffect)(()=>{r.current=n});let i=(0,w.useRef)(null);return(0,w.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n)},[t])}var Zd=(0,w.createContext)({});function Qd(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function $d(e,t,n,r,i,a){let{visualElement:o}=(0,w.useContext)(jd),s=(0,w.useContext)(vd),c=(0,w.useContext)(Kn),l=(0,w.useContext)(od),u=l.reducedMotion,d=l.skipAnimations,f=(0,w.useRef)(null),p=(0,w.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,w.useContext)(Zd);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&ef(f.current,n,i,h);let g=(0,w.useRef)(!1);(0,w.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let _=n[ns],v=(0,w.useRef)(!!_&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return Gn(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),(0,w.useEffect)(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),!1),m.enteringChildren=void 0)}),m}function ef(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:tf(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Qd(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function tf(e){if(e)return e.options.allowProjection===!1?tf(e.parent):e.projection}function nf(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&Sd(r);let a=n?n===`svg`:Hd(e),o=a?Jd:qd;function s(n,s){let c,l={...(0,w.useContext)(od),...n,layoutId:rf(n)},{isStatic:u}=l,d=Nd(n),f=o(n,u);if(!u&&typeof window<`u`){af(l,r);let t=of(l);c=t.MeasureLayout,d.visualElement=$d(e,f,l,i,t.ProjectionNode,a)}return(0,Y.jsxs)(jd.Provider,{value:d,children:[c&&d.visualElement?(0,Y.jsx)(c,{visualElement:d.visualElement,...l}):null,Ud(e,n,Xd(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,w.forwardRef)(s);return c[Yd]=e,c}function rf({layoutId:e}){let t=(0,w.useContext)(Un).id;return t&&e!==void 0?t+`-`+e:e}function af(e,t){(0,w.useContext)(vd).strict}function of(e){let{drag:t,layout:n}=X();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function sf(e,t){if(typeof Proxy>`u`)return nf;let n=new Map,r=(n,r)=>nf(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,nf(a,void 0,e,t)),n.get(a))})}var cf=(e,t)=>t.isSVG??Hd(e)?new Ol(t):new vl(t,{allowProjection:e!==w.Fragment}),lf=class extends Bc{constructor(e){super(e),e.animationState||=Fl(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();Cc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},uf=0,df={animation:{Feature:lf},exit:{Feature:class extends Bc{constructor(){super(...arguments),this.id=uf++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`||typeof e==`object`&&e&&!Array.isArray(e)){let n=Ko(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function ff(e){return{point:{x:e.pageX,y:e.pageY}}}var pf=e=>t=>Vs(t)&&e(t,ff(t));function mf(e,t,n,r){return vu(e,t,pf(n),r)}var hf=({current:e})=>e?e.ownerDocument.defaultView:null,gf=(e,t)=>Math.abs(e-t);function _f(e,t){let n=gf(e.x,t.x),r=gf(e.y,t.y);return Math.sqrt(n**2+r**2)}var vf=new Set([`auto`,`scroll`]),yf=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=bf(this.lastRawMoveEventInfo,this.transformPagePoint));let e=Sf(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=_f(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=Fr;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=bf(t,this.transformPagePoint),A.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=Sf(e.type===`pointercancel`?this.lastMoveEventInfo:bf(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Vs(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=bf(ff(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=Fr;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,Sf(s,this.history));let d={passive:!0,capture:!0};this.removeListeners=nr(mf(this.contextWindow,`pointermove`,this.handlePointerMove,d),mf(this.contextWindow,`pointerup`,this.handlePointerUp,d),mf(this.contextWindow,`pointercancel`,this.handlePointerUp,d)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(vf.has(e.overflowX)||vf.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};(i.x!==0||i.y!==0)&&(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),A.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Pr(this.updatePoint)}};function bf(e,t){return t?{point:t(e.point)}:e}function xf(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Sf({point:e},t){return{point:e,delta:xf(e,wf(t)),offset:xf(e,Cf(t)),velocity:Tf(t,.1)}}function Cf(e){return e[0]}function wf(e){return e[e.length-1]}function Tf(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=wf(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>ar(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>ar(t)*2&&(r=e[1]);let a=or(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Ef(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?N(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?N(n,e,r.max):Math.min(e,n)),e}function Df(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function Of(e,{top:t,left:n,bottom:r,right:i}){return{x:Df(e.x,n,i),y:Df(e.y,t,r)}}function kf(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Af(e,t){return{x:kf(e.x,t.x),y:kf(e.y,t.y)}}function jf(e,t){let n=.5,r=U(e),i=U(t);return i>r?n=rr(t.min,t.max-r,e.min):r>i&&(n=rr(e.min,e.max-i,t.min)),Yn(0,1,n)}function Mf(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var Nf=.35;function Pf(e=Nf){return e===!1?e=0:e===!0&&(e=Nf),{x:Ff(e,`left`,`right`),y:Ff(e,`top`,`bottom`)}}function Ff(e,t,n){return{min:If(e,t),max:If(e,n)}}function If(e,t){return typeof e==`number`?e:e[t]||0}var Lf=new WeakMap,Rf=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=xc(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(ff(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Is(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),q(e=>{let t=this.getAxisMotionValue(e).get()||0;if(ci.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=U(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&A.update(()=>i(e,t),!1,!0),es(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=Hf(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&A.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new yf(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:hf(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&A.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!Vf(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=Ef(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Qd(e)?this.constraints||=this.resolveRefConstraints():this.constraints=e&&n?Of(n.layoutBox,e):!1,this.elastic=Pf(t),r!==this.constraints&&!Qd(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&q(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=Mf(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Qd(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());let i=ol(n,r.root,this.visualElement.getTransformPagePoint()),a=Af(r.layout.layoutBox,i);if(t){let e=t(Hc(a));this.hasMutatedConstraints=!!e,e&&(a=Vc(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=q(o=>{if(!Vf(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return es(this.visualElement,e),n.start(Bo(e,n,0,t,this.visualElement,!1))}stopAnimation(){q(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`;return this.visualElement.getProps()[t]||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){q(t=>{let{drag:n}=this.getProps();if(!Vf(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-N(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Qd(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};q(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=jf({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),q(t=>{if(!Vf(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(N(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Lf.set(this.visualElement,this);let e=this.visualElement.current,t=mf(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&Gs(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();Qd(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=Bf(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),A.read(r);let o=vu(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(q(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=Nf,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function zf(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function Bf(e,t,n){let r=pc(e,zf(n)),i=pc(t,zf(n));return()=>{r(),i()}}function Vf(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Hf(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var Uf=class extends Bc{constructor(e){super(e),this.removeGroupControls=tr,this.removeListeners=tr,this.controls=new Rf(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||tr}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},Wf=e=>(t,n)=>{e&&A.update(()=>e(t,n),!1,!0)},Gf=class extends Bc{constructor(){super(...arguments),this.removePointerDownListener=tr}onPointerDown(e){this.session=new yf(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:hf(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Wf(e),onStart:Wf(t),onMove:Wf(n),onEnd:(e,t)=>{delete this.session,r&&A.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=mf(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},Kf=!1,qf=class extends w.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),Kf&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),wu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),Kf=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||A.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),Ms.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;Kf=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function Jf(e){let[t,n]=md(),r=(0,w.useContext)(Un);return(0,Y.jsx)(qf,{...e,layoutGroup:r,switchLayoutGroup:(0,w.useContext)(Zd),isPresent:t,safeToRemove:n})}var Yf={pan:{Feature:Gf},drag:{Feature:Uf,ProjectionNode:ad,MeasureLayout:Jf}};function Xf(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&A.postRender(()=>i(t,ff(t)))}var Zf=class extends Bc{mount(){let{current:e}=this.node;e&&(this.unmount=zs(e,(e,t)=>(Xf(this.node,t,`Start`),e=>Xf(this.node,e,`End`))))}unmount(){}},Qf=class extends Bc{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=nr(vu(this.node.current,`focus`,()=>this.onFocus()),vu(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function $f(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&A.postRender(()=>i(t,ff(t)))}var ep=class extends Bc{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=Qs(e,(e,t)=>($f(this.node,t,`Start`),(e,{success:t})=>$f(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},tp=new WeakMap,np=new WeakMap,rp=e=>{let t=tp.get(e.target);t&&t(e)},ip=e=>{e.forEach(rp)};function ap({root:e,...t}){let n=e||document;np.has(n)||np.set(n,{});let r=np.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(ip,{root:e,...t})),r[i]}function op(e,t,n){let r=ap(t);return tp.set(e,n),r.observe(e),()=>{tp.delete(e),r.unobserve(e)}}var sp={some:0,all:1},cp=class extends Bc{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:sp[r]},o=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)};this.stopObserver=op(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(lp(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function lp({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var up={inView:{Feature:cp},tap:{Feature:ep},focus:{Feature:Qf},hover:{Feature:Zf}},dp={layout:{ProjectionNode:ad,MeasureLayout:Jf}},Q=sf({...df,...up,...Yf,...dp},cf),fp=y(),pp=[{path:`/lists`,name:`Lists`,icon:`⟦⟧`,count:55,color:`#60a5fa`},{path:`/strings`,name:`Strings`,icon:`❝❞`,count:47,color:`#34d399`},{path:`/dictionaries`,name:`Dictionaries`,icon:`⟨⟩`,count:28,color:`#22d3ee`},{path:`/sorting-searching`,name:`Sorting & Searching`,icon:`⇅⇄`,count:29,color:`#fbbf24`},{path:`/stacks-queues`,name:`Stacks & Queues`,icon:`⊏⊐`,count:29,color:`#a78bfa`}];function mp(){return(0,Y.jsxs)(Q.aside,{className:`sidebar`,initial:{x:-270},animate:{x:0},transition:{type:`spring`,stiffness:200,damping:30},children:[(0,Y.jsxs)(jn,{to:`/`,className:`sidebar-logo`,children:[(0,Y.jsx)(`div`,{className:`logo-glow`}),(0,Y.jsx)(`span`,{className:`logo-icon`,children:`<DSA/>`}),(0,Y.jsx)(`span`,{className:`logo-text`,children:`Python`}),(0,Y.jsx)(`span`,{className:`logo-sub`,children:`INTERVIEW PREP`})]}),(0,Y.jsxs)(`nav`,{className:`sidebar-nav`,children:[(0,Y.jsx)(`div`,{className:`nav-section-label`,children:`TOPICS`}),pp.map(e=>(0,Y.jsxs)(jn,{to:e.path,className:({isActive:e})=>`nav-item ${e?`nav-item-active`:``}`,children:[(0,Y.jsx)(`span`,{className:`nav-icon`,style:{color:e.color},children:e.icon}),(0,Y.jsx)(`span`,{className:`nav-name`,children:e.name}),(0,Y.jsx)(`span`,{className:`nav-count`,children:e.count})]},e.path))]}),(0,Y.jsx)(`div`,{className:`sidebar-footer`,children:(0,Y.jsxs)(`div`,{className:`footer-stats`,children:[(0,Y.jsxs)(`div`,{className:`footer-stat`,children:[(0,Y.jsx)(`span`,{className:`footer-num`,children:`188`}),(0,Y.jsx)(`span`,{className:`footer-label`,children:`Problems`})]}),(0,Y.jsxs)(`div`,{className:`footer-stat`,children:[(0,Y.jsx)(`span`,{className:`footer-num`,children:`5`}),(0,Y.jsx)(`span`,{className:`footer-label`,children:`Topics`})]})]})}),(0,Y.jsx)(`style`,{children:`
        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          width: var(--sidebar-width);
          height: 100vh;
          background: var(--bg-secondary);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          z-index: 100;
          overflow-y: auto;
        }

        .sidebar-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem 1rem 1.5rem;
          border-bottom: 1px solid var(--border-color);
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }

        .logo-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 60%);
          animation: float 6s ease-in-out infinite;
        }

        .logo-icon {
          font-family: var(--font-mono);
          font-size: 1.6rem;
          font-weight: 700;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .logo-text {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-top: 0.2rem;
          position: relative;
        }

        .logo-sub {
          font-size: 0.65rem;
          color: var(--text-muted);
          letter-spacing: 0.2em;
          margin-top: 0.2rem;
          position: relative;
        }

        .sidebar-nav {
          flex: 1;
          padding: 1.2rem 0.8rem;
        }

        .nav-section-label {
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          padding: 0.5rem 0.8rem;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          padding: 0.75rem 0.9rem;
          border-radius: var(--radius);
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.88rem;
          transition: var(--transition);
          margin-bottom: 0.3rem;
          border: 1px solid transparent;
        }

        .nav-item:hover {
          background: rgba(124,58,237,0.06);
          color: var(--text-primary);
          text-decoration: none;
          border-color: rgba(124,58,237,0.15);
        }

        .nav-item-active {
          background: linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(6,182,212,0.06) 100%);
          color: var(--accent-purple);
          border-color: rgba(124,58,237,0.3);
          box-shadow: 0 0 15px rgba(124,58,237,0.1);
        }

        .nav-icon {
          font-size: 1rem;
          width: 28px;
          text-align: center;
        }

        .nav-name {
          flex: 1;
          font-weight: 500;
        }

        .nav-count {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          background: var(--bg-tertiary);
          padding: 0.2rem 0.5rem;
          border-radius: 12px;
          color: var(--text-muted);
          border: 1px solid var(--border-color);
        }

        .nav-item-active .nav-count {
          background: rgba(124,58,237,0.15);
          color: var(--accent-purple);
          border-color: rgba(124,58,237,0.3);
        }

        .sidebar-footer {
          padding: 1.2rem;
          border-top: 1px solid var(--border-color);
        }

        .footer-stats {
          display: flex;
          justify-content: space-around;
        }

        .footer-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.1rem;
        }

        .footer-num {
          font-family: var(--font-mono);
          font-size: 1.2rem;
          font-weight: 700;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-label {
          font-size: 0.65rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        @media (max-width: 768px) {
          .sidebar {
            display: none;
          }
        }
      `})]})}var hp=[{path:`/lists`,name:`Lists`,icon:`[ ]`,count:55,color:`var(--accent-blue)`,desc:`Arrays, two pointers, sliding window, prefix sums`},{path:`/strings`,name:`Strings`,icon:`" "`,count:47,color:`var(--accent-green)`,desc:`Palindromes, anagrams, substring problems, pattern matching`},{path:`/dictionaries`,name:`Dictionaries`,icon:`{ }`,count:28,color:`var(--accent-cyan)`,desc:`Hash maps, frequency counting, grouping, caching`},{path:`/sorting-searching`,name:`Sorting & Searching`,icon:`↕↔`,count:29,color:`var(--accent-orange)`,desc:`Binary search, merge sort, quick sort, heaps`},{path:`/stacks-queues`,name:`Stacks & Queues`,icon:`▐▌`,count:29,color:`var(--accent-purple)`,desc:`LIFO/FIFO, monotonic stacks, BFS, parentheses matching`}];function gp(){return(0,Y.jsxs)(Q.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,Y.jsx)(`div`,{className:`hero`,children:(0,Y.jsxs)(Q.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{delay:.2},children:[(0,Y.jsx)(`div`,{className:`hero-orb hero-orb-1`}),(0,Y.jsx)(`div`,{className:`hero-orb hero-orb-2`}),(0,Y.jsx)(`h1`,{className:`hero-title`,children:`DSA in Python`}),(0,Y.jsx)(`p`,{className:`hero-subtitle`,children:`Master Data Structures & Algorithms for coding interviews — with step-by-step visualizations, clean Python code, and 188 curated LeetCode problems.`})]})}),(0,Y.jsxs)(`div`,{className:`stats-row`,children:[(0,Y.jsxs)(`div`,{className:`stat-card`,children:[(0,Y.jsx)(`span`,{className:`stat-number`,children:`5`}),(0,Y.jsx)(`span`,{className:`stat-label`,children:`Core Topics`})]}),(0,Y.jsxs)(`div`,{className:`stat-card`,children:[(0,Y.jsx)(`span`,{className:`stat-number`,children:`188`}),(0,Y.jsx)(`span`,{className:`stat-label`,children:`LeetCode Problems`})]}),(0,Y.jsxs)(`div`,{className:`stat-card`,children:[(0,Y.jsx)(`span`,{className:`stat-number`,children:`10+`}),(0,Y.jsx)(`span`,{className:`stat-label`,children:`Interactive Visualizers`})]}),(0,Y.jsxs)(`div`,{className:`stat-card`,children:[(0,Y.jsx)(`span`,{className:`stat-number`,children:`100%`}),(0,Y.jsx)(`span`,{className:`stat-label`,children:`Python`})]})]}),(0,Y.jsx)(`h2`,{style:{marginTop:`3rem`,marginBottom:`1.5rem`},children:`Start Learning`}),(0,Y.jsx)(`div`,{className:`topic-grid`,children:hp.map((e,t)=>(0,Y.jsx)(Q.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t+.3},children:(0,Y.jsxs)(An,{to:e.path,className:`topic-card`,style:{"--card-accent":e.color},children:[(0,Y.jsx)(`div`,{className:`topic-icon`,children:e.icon}),(0,Y.jsxs)(`div`,{className:`topic-info`,children:[(0,Y.jsx)(`h3`,{className:`topic-name`,children:e.name}),(0,Y.jsx)(`p`,{className:`topic-desc`,children:e.desc}),(0,Y.jsxs)(`div`,{className:`topic-meta`,children:[(0,Y.jsxs)(`span`,{className:`topic-count`,children:[e.count,` problems`]}),(0,Y.jsx)(`span`,{className:`topic-arrow`,children:`→`})]})]})]})},e.path))}),(0,Y.jsxs)(`section`,{className:`section`,style:{marginTop:`3rem`},children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`🚀 How to Use This Site`})}),(0,Y.jsxs)(`div`,{className:`steps-grid`,children:[(0,Y.jsxs)(`div`,{className:`step-item`,children:[(0,Y.jsx)(`div`,{className:`step-num`,children:`1`}),(0,Y.jsx)(`h4`,{children:`Read the Theory`}),(0,Y.jsx)(`p`,{children:`Start with the plain-English explanation. Understand what the data structure does and why it exists.`})]}),(0,Y.jsxs)(`div`,{className:`step-item`,children:[(0,Y.jsx)(`div`,{className:`step-num`,children:`2`}),(0,Y.jsx)(`h4`,{children:`Watch the Visualizer`}),(0,Y.jsx)(`p`,{children:`See the algorithm in action! Step through animations to build intuition for how operations work internally.`})]}),(0,Y.jsxs)(`div`,{className:`step-item`,children:[(0,Y.jsx)(`div`,{className:`step-num`,children:`3`}),(0,Y.jsx)(`h4`,{children:`Study the Code`}),(0,Y.jsx)(`p`,{children:`Read the Python examples. They progress from basic to advanced, with comments explaining every step.`})]}),(0,Y.jsxs)(`div`,{className:`step-item`,children:[(0,Y.jsx)(`div`,{className:`step-num`,children:`4`}),(0,Y.jsx)(`h4`,{children:`Solve Problems`}),(0,Y.jsx)(`p`,{children:`Apply what you learned to the curated LeetCode problems. Start with Easy, progress to Medium and Hard.`})]})]})]}),(0,Y.jsx)(`style`,{children:`
        .hero {
          text-align: center;
          padding: 4rem 2rem;
          margin-bottom: 2.5rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--gradient-primary);
        }

        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          animation: float 8s ease-in-out infinite;
        }

        .hero-orb-1 {
          top: 10%;
          left: 10%;
          width: 200px;
          height: 200px;
          background: rgba(124,58,237,0.12);
        }

        .hero-orb-2 {
          bottom: 10%;
          right: 10%;
          width: 250px;
          height: 250px;
          background: rgba(6,182,212,0.08);
          animation-delay: -4s;
        }

        .hero-title {
          font-size: 3.2rem;
          font-weight: 800;
          margin-bottom: 1rem;
          position: relative;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--text-secondary);
          max-width: 620px;
          margin: 0 auto;
          line-height: 1.8;
          position: relative;
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .stat-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          transition: var(--transition);
        }

        .stat-card:hover {
          border-color: rgba(124,58,237,0.3);
          box-shadow: var(--shadow-glow);
          transform: translateY(-3px);
        }

        .stat-number {
          font-family: var(--font-mono);
          font-size: 2rem;
          font-weight: 800;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .topic-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .topic-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem 1.8rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          text-decoration: none;
          transition: var(--transition);
          border-left: 3px solid var(--card-accent);
          position: relative;
          overflow: hidden;
        }

        .topic-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, rgba(124,58,237,0.03) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .topic-card:hover::before {
          opacity: 1;
        }

        .topic-card:hover {
          border-color: var(--card-accent);
          transform: translateX(6px);
          text-decoration: none;
          box-shadow: 0 0 25px rgba(124,58,237,0.1);
        }

        .topic-icon {
          font-family: var(--font-mono);
          font-size: 1.4rem;
          color: var(--card-accent);
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(88,166,255,0.05);
          border-radius: var(--radius);
          flex-shrink: 0;
        }

        .topic-info {
          flex: 1;
        }

        .topic-name {
          color: var(--text-primary);
          margin: 0 0 0.3rem;
          font-size: 1.1rem;
        }

        .topic-desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin: 0;
        }

        .topic-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .topic-count {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--card-accent);
        }

        .topic-arrow {
          color: var(--text-muted);
          font-size: 1.2rem;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1.2rem;
        }

        .step-item {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius);
          padding: 1.2rem;
        }

        .step-num {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-blue);
          color: white;
          border-radius: 50%;
          font-size: 0.8rem;
          font-weight: 700;
          margin-bottom: 0.8rem;
        }

        .step-item h4 {
          margin-bottom: 0.4rem;
          font-size: 0.95rem;
        }

        .step-item p {
          font-size: 0.85rem;
          margin: 0;
        }

        @media (max-width: 768px) {
          .stats-row { grid-template-columns: repeat(2, 1fr); }
          .hero-title { font-size: 2rem; }
        }
      `})]})}function _p({isPlaying:e,onPlay:t,onPause:n,onStepForward:r,onStepBackward:i,onReset:a,speed:o,onSpeedChange:s,currentStep:c,totalSteps:l,customInput:u,onCustomInputChange:d,onCustomInputSubmit:f,inputPlaceholder:p=`Enter values (comma-separated)`,autoPlay:m=!1,onAutoPlayToggle:h}){return(0,Y.jsxs)(`div`,{className:`animation-controls`,children:[(0,Y.jsxs)(`div`,{className:`controls-row`,children:[(0,Y.jsxs)(`div`,{className:`controls-group`,children:[(0,Y.jsx)(Q.button,{className:`ctrl-btn`,onClick:a,whileTap:{scale:.9},title:`Reset`,children:`⟲`}),(0,Y.jsx)(Q.button,{className:`ctrl-btn`,onClick:i,whileTap:{scale:.9},title:`Step Back`,disabled:c<=0,children:`◂`}),(0,Y.jsx)(Q.button,{className:`ctrl-btn ctrl-btn-play`,onClick:e?n:t,whileTap:{scale:.9},title:e?`Pause`:`Play`,children:e?`❚❚`:`▶`}),(0,Y.jsx)(Q.button,{className:`ctrl-btn`,onClick:r,whileTap:{scale:.9},title:`Step Forward`,disabled:c>=l-1,children:`▸`})]}),(0,Y.jsxs)(`div`,{className:`controls-group`,children:[(0,Y.jsx)(`span`,{className:`speed-label`,children:`Speed:`}),(0,Y.jsx)(`input`,{type:`range`,min:`0.5`,max:`3`,step:`0.5`,value:o,onChange:e=>s(parseFloat(e.target.value)),className:`speed-slider`}),(0,Y.jsxs)(`span`,{className:`speed-value`,children:[o,`x`]})]}),(0,Y.jsxs)(`div`,{className:`step-indicator`,children:[`Step `,c+1,` / `,l]}),h&&(0,Y.jsxs)(`label`,{className:`autoplay-toggle`,children:[(0,Y.jsx)(`input`,{type:`checkbox`,checked:m,onChange:h}),(0,Y.jsx)(`span`,{children:`Auto-play`})]})]}),d&&(0,Y.jsxs)(`div`,{className:`custom-input-row`,children:[(0,Y.jsx)(`input`,{type:`text`,value:u,onChange:e=>d(e.target.value),placeholder:p,className:`custom-input`,onKeyDown:e=>e.key===`Enter`&&f?.()}),(0,Y.jsx)(Q.button,{className:`ctrl-btn ctrl-btn-submit`,onClick:f,whileTap:{scale:.9},children:`Visualize`})]}),(0,Y.jsx)(`style`,{children:`
        .animation-controls {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius);
          padding: 1rem 1.2rem;
          margin-bottom: 1rem;
        }

        .controls-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .controls-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .ctrl-btn {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          width: 36px;
          height: 36px;
          border-radius: var(--radius);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          transition: var(--transition);
        }

        .ctrl-btn:hover:not(:disabled) {
          border-color: var(--accent-blue);
          color: var(--accent-blue);
        }

        .ctrl-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .ctrl-btn-play {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--gradient-primary);
          border-color: var(--accent-purple);
          color: white;
          font-size: 1rem;
          box-shadow: 0 0 20px rgba(124,58,237,0.3);
        }

        .ctrl-btn-play:hover {
          box-shadow: 0 0 30px rgba(124,58,237,0.5);
          color: white !important;
          border-color: var(--accent-purple) !important;
        }

        .ctrl-btn-submit {
          width: auto;
          padding: 0 1rem;
          font-size: 0.8rem;
          font-weight: 600;
          background: var(--accent-green);
          border-color: var(--accent-green);
          color: white;
        }

        .ctrl-btn-submit:hover {
          color: white !important;
          border-color: var(--accent-green) !important;
          opacity: 0.9;
        }

        .speed-label {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .speed-slider {
          width: 80px;
          accent-color: var(--accent-blue);
        }

        .speed-value {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-blue);
          min-width: 28px;
        }

        .step-indicator {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-left: auto;
        }

        .autoplay-toggle {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          color: var(--text-secondary);
          cursor: pointer;
        }

        .autoplay-toggle input {
          accent-color: var(--accent-purple);
        }

        .custom-input-row {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.8rem;
          padding-top: 0.8rem;
          border-top: 1px solid var(--border-color);
        }

        .custom-input {
          flex: 1;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius);
          padding: 0.5rem 0.8rem;
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-size: 0.85rem;
          outline: none;
          transition: var(--transition);
        }

        .custom-input:focus {
          border-color: var(--accent-blue);
        }

        .custom-input::placeholder {
          color: var(--text-muted);
        }
      `})]})}function vp({array:e,highlightIndices:t=[],compareIndices:n=[],sortedIndices:r=[],pointers:i=[],swapIndices:a=[],label:o=``}){let s=e=>a.includes(e)?`var(--accent-red)`:n.includes(e)?`var(--accent-orange)`:t.includes(e)?`var(--accent-blue)`:r.includes(e)?`var(--accent-green)`:`var(--bg-tertiary)`,c=e=>a.includes(e)?`var(--accent-red)`:n.includes(e)?`var(--accent-orange)`:t.includes(e)?`var(--accent-blue)`:r.includes(e)?`var(--accent-green)`:`var(--border-color)`;return(0,Y.jsxs)(`div`,{className:`array-visualizer`,children:[o&&(0,Y.jsx)(`div`,{className:`array-label`,children:o}),(0,Y.jsx)(`div`,{className:`array-container`,children:e.map((e,t)=>(0,Y.jsxs)(`div`,{className:`array-cell-wrapper`,children:[(0,Y.jsx)(Q.div,{className:`array-cell`,layout:!0,style:{background:s(t),borderColor:c(t)},animate:{scale:a.includes(t)?1.1:1,y:a.includes(t)?-8:0},transition:{type:`spring`,stiffness:300,damping:20},children:(0,Y.jsx)(`span`,{className:`cell-value`,children:e})}),(0,Y.jsx)(`span`,{className:`cell-index`,children:t}),i.filter(e=>e.index===t).map((e,t)=>(0,Y.jsxs)(Q.div,{className:`pointer-label`,initial:{opacity:0,y:5},animate:{opacity:1,y:0},style:{color:e.color||`var(--accent-purple)`},children:[`▲ `,e.name]},t))]},t))}),(0,Y.jsx)(`style`,{children:`
        .array-visualizer {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem 1rem;
        }

        .array-label {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }

        .array-container {
          display: flex;
          gap: 4px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .array-cell-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .array-cell {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--border-color);
          border-radius: 6px;
          font-family: var(--font-mono);
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .cell-value {
          user-select: none;
        }

        .cell-index {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--text-muted);
        }

        .pointer-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 600;
          margin-top: 2px;
        }
      `})]})}function yp(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=yp(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function bp(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=yp(e))&&(r&&(r+=` `),r+=t);return r}var xp=Object.create,Sp=Object.defineProperty,Cp=Object.defineProperties,wp=Object.getOwnPropertyDescriptor,Tp=Object.getOwnPropertyDescriptors,Ep=Object.getOwnPropertyNames,Dp=Object.getOwnPropertySymbols,Op=Object.getPrototypeOf,kp=Object.prototype.hasOwnProperty,Ap=Object.prototype.propertyIsEnumerable,jp=(e,t,n)=>t in e?Sp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Mp=(e,t)=>{for(var n in t||={})kp.call(t,n)&&jp(e,n,t[n]);if(Dp)for(var n of Dp(t))Ap.call(t,n)&&jp(e,n,t[n]);return e},Np=(e,t)=>Cp(e,Tp(t)),Pp=(e,t)=>{var n={};for(var r in e)kp.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Dp)for(var r of Dp(e))t.indexOf(r)<0&&Ap.call(e,r)&&(n[r]=e[r]);return n},Fp=(e,t)=>function(){return t||(0,e[Ep(e)[0]])((t={exports:{}}).exports,t),t.exports},Ip=(e,t)=>{for(var n in t)Sp(e,n,{get:t[n],enumerable:!0})},Lp=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(let i of Ep(t))!kp.call(e,i)&&i!==n&&Sp(e,i,{get:()=>t[i],enumerable:!(r=wp(t,i))||r.enumerable});return e},$=((e,t,n)=>(n=e==null?{}:xp(Op(e)),Lp(t||!e||!e.__esModule?Sp(n,`default`,{value:e,enumerable:!0}):n,e)))(Fp({"../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(e,t){var n=function(){var e=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,t=0,n={},r={util:{encode:function e(t){return t instanceof i?new i(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/\u00a0/g,` `)},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(t,n){n||={};var i,a;switch(r.util.type(t)){case`Object`:if(a=r.util.objId(t),n[a])return n[a];for(var o in i={},n[a]=i,t)t.hasOwnProperty(o)&&(i[o]=e(t[o],n));return i;case`Array`:return a=r.util.objId(t),n[a]?n[a]:(i=[],n[a]=i,t.forEach(function(t,r){i[r]=e(t,n)}),i);default:return t}},getLanguage:function(t){for(;t;){var n=e.exec(t.className);if(n)return n[1].toLowerCase();t=t.parentElement}return`none`},setLanguage:function(t,n){t.className=t.className.replace(RegExp(e,`gi`),``),t.classList.add(`language-`+n)},isActive:function(e,t,n){for(var r=`no-`+t;e;){var i=e.classList;if(i.contains(t))return!0;if(i.contains(r))return!1;e=e.parentElement}return!!n}},languages:{plain:n,plaintext:n,text:n,txt:n,extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var i in t)n[i]=t[i];return n},insertBefore:function(e,t,n,i){i||=r.languages;var a=i[e],o={};for(var s in a)if(a.hasOwnProperty(s)){if(s==t)for(var c in n)n.hasOwnProperty(c)&&(o[c]=n[c]);n.hasOwnProperty(s)||(o[s]=a[s])}var l=i[e];return i[e]=o,r.languages.DFS(r.languages,function(t,n){n===l&&t!=e&&(this[t]=o)}),o},DFS:function e(t,n,i,a){a||={};var o=r.util.objId;for(var s in t)if(t.hasOwnProperty(s)){n.call(t,s,t[s],i||s);var c=t[s],l=r.util.type(c);l===`Object`&&!a[o(c)]?(a[o(c)]=!0,e(c,n,null,a)):l===`Array`&&!a[o(c)]&&(a[o(c)]=!0,e(c,n,s,a))}}},plugins:{},highlight:function(e,t,n){var a={code:e,grammar:t,language:n};if(r.hooks.run(`before-tokenize`,a),!a.grammar)throw Error(`The language "`+a.language+`" has no grammar.`);return a.tokens=r.tokenize(a.code,a.grammar),r.hooks.run(`after-tokenize`,a),i.stringify(r.util.encode(a.tokens),a.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var r in n)t[r]=n[r];delete t.rest}var i=new s;return c(i,i.head,e),o(e,i,t,i.head,0),u(i)},hooks:{all:{},add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=r.hooks.all[e];if(!(!n||!n.length))for(var i=0,a;a=n[i++];)a(t)}},Token:i};function i(e,t,n,r){this.type=e,this.content=t,this.alias=n,this.length=(r||``).length|0}i.stringify=function e(t,n){if(typeof t==`string`)return t;if(Array.isArray(t)){var i=``;return t.forEach(function(t){i+=e(t,n)}),i}var a={type:t.type,content:e(t.content,n),tag:`span`,classes:[`token`,t.type],attributes:{},language:n},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(a.classes,o):a.classes.push(o)),r.hooks.run(`wrap`,a);var s=``;for(var c in a.attributes)s+=` `+c+`="`+(a.attributes[c]||``).replace(/"/g,`&quot;`)+`"`;return`<`+a.tag+` class="`+a.classes.join(` `)+`"`+s+`>`+a.content+`</`+a.tag+`>`};function a(e,t,n,r){e.lastIndex=t;var i=e.exec(n);if(i&&r&&i[1]){var a=i[1].length;i.index+=a,i[0]=i[0].slice(a)}return i}function o(e,t,n,s,u,d){for(var f in n)if(!(!n.hasOwnProperty(f)||!n[f])){var p=n[f];p=Array.isArray(p)?p:[p];for(var m=0;m<p.length;++m){if(d&&d.cause==f+`,`+m)return;var h=p[m],g=h.inside,_=!!h.lookbehind,v=!!h.greedy,y=h.alias;if(v&&!h.pattern.global){var b=h.pattern.toString().match(/[imsuy]*$/)[0];h.pattern=RegExp(h.pattern.source,b+`g`)}for(var x=h.pattern||h,S=s.next,C=u;S!==t.tail&&!(d&&C>=d.reach);C+=S.value.length,S=S.next){var w=S.value;if(t.length>e.length)return;if(!(w instanceof i)){var ee=1,T;if(v){if(T=a(x,C,e,_),!T||T.index>=e.length)break;var te=T.index,ne=T.index+T[0].length,re=C;for(re+=S.value.length;te>=re;)S=S.next,re+=S.value.length;if(re-=S.value.length,C=re,S.value instanceof i)continue;for(var ie=S;ie!==t.tail&&(re<ne||typeof ie.value==`string`);ie=ie.next)ee++,re+=ie.value.length;ee--,w=e.slice(C,re),T.index-=C}else if(T=a(x,0,w,_),!T)continue;var te=T.index,E=T[0],ae=w.slice(0,te),oe=w.slice(te+E.length),se=C+w.length;d&&se>d.reach&&(d.reach=se);var ce=S.prev;ae&&(ce=c(t,ce,ae),C+=ae.length),l(t,ce,ee);var D=new i(f,g?r.tokenize(E,g):E,y,E);if(S=c(t,ce,D),oe&&c(t,S,oe),ee>1){var O={cause:f+`,`+m,reach:se};o(e,t,n,S.prev,C,O),d&&O.reach>d.reach&&(d.reach=O.reach)}}}}}}function s(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function c(e,t,n){var r=t.next,i={value:n,prev:t,next:r};return t.next=i,r.prev=i,e.length++,i}function l(e,t,n){for(var r=t.next,i=0;i<n&&r!==e.tail;i++)r=r.next;t.next=r,r.prev=t,e.length-=i}function u(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}return r}();t.exports=n,n.default=n}})());$.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:`attr-equals`},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:`named-entity`},/&#x?[\da-f]{1,8};/i]},$.languages.markup.tag.inside[`attr-value`].inside.entity=$.languages.markup.entity,$.languages.markup.doctype.inside[`internal-subset`].inside=$.languages.markup,$.hooks.add(`wrap`,function(e){e.type===`entity`&&(e.attributes.title=e.content.replace(/&amp;/,`&`))}),Object.defineProperty($.languages.markup.tag,"addInlined",{value:function(e,t){var n={},n=(n[`language-`+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:$.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i,{"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}}),t=(n[`language-`+t]={pattern:/[\s\S]+/,inside:$.languages[t]},{});t[e]={pattern:RegExp(`(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[\\s\\S])*?(?=<\\/__>)`.replace(/__/g,function(){return e}),`i`),lookbehind:!0,greedy:!0,inside:n},$.languages.insertBefore(`markup`,`cdata`,t)}}),Object.defineProperty($.languages.markup.tag,"addAttribute",{value:function(e,t){$.languages.markup.tag.inside[`special-attr`].push({pattern:RegExp(`(^|["'\\s])(?:`+e+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,`i`),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,`language-`+t],inside:$.languages[t]},punctuation:[{pattern:/^=/,alias:`attr-equals`},/"|'/]}}}})}}),$.languages.html=$.languages.markup,$.languages.mathml=$.languages.markup,$.languages.svg=$.languages.markup,$.languages.xml=$.languages.extend(`markup`,{}),$.languages.ssml=$.languages.xml,$.languages.atom=$.languages.xml,$.languages.rss=$.languages.xml,function(e){var t={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:`escape`},n=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,r=`(?:[^\\\\-]|`+n.source+`)`,r=RegExp(r+`-`+r),i={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:`variable`};e.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:`operator`},"char-class-punctuation":{pattern:/^\[|\]$/,alias:`punctuation`},range:{pattern:r,inside:{escape:n,"range-punctuation":{pattern:/-/,alias:`operator`}}},"special-escape":t,"char-set":{pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:`class-name`},escape:n}},"special-escape":t,"char-set":{pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:`class-name`},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:`keyword`},{pattern:/\\k<[^<>']+>/,alias:`keyword`,inside:{"group-name":i}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:`function`},escape:n,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:`punctuation`,inside:{"group-name":i}},{pattern:/\)/,alias:`punctuation`}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:`number`},alternation:{pattern:/\|/,alias:`keyword`}}}($),$.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},$.languages.javascript=$.languages.extend(`clike`,{"class-name":[$.languages.clike[`class-name`],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(`(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])`),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),$.languages.javascript[`class-name`][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,$.languages.insertBefore(`javascript`,`keyword`,{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)\\/(?:(?:\\[(?:[^\\]\\\\\\r\\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|\\/\\*(?:[^*]|\\*(?!\\/))*\\*\\/)*(?:$|[\\r\\n,.;:})\\]]|\\/\\/))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:`language-regex`,inside:$.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:`function`},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:$.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:$.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:$.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:$.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),$.languages.insertBefore(`javascript`,`string`,{hashbang:{pattern:/^#!.*/,greedy:!0,alias:`comment`},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:`string`},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:`punctuation`},rest:$.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:`property`}}),$.languages.insertBefore(`javascript`,`operator`,{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:`property`}}),$.languages.markup&&($.languages.markup.tag.addInlined(`script`,`javascript`),$.languages.markup.tag.addAttribute(`on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)`,`javascript`)),$.languages.js=$.languages.javascript,$.languages.actionscript=$.languages.extend(`javascript`,{keyword:/\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,operator:/\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/}),$.languages.actionscript[`class-name`].alias=`function`,delete $.languages.actionscript.parameter,delete $.languages.actionscript[`literal-property`],$.languages.markup&&$.languages.insertBefore(`actionscript`,`string`,{xml:{pattern:/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,lookbehind:!0,inside:$.languages.markup}}),function(e){var t=/#(?!\{).+/,n={pattern:/#\{[^}]+\}/,alias:`variable`};e.languages.coffeescript=e.languages.extend(`javascript`,{comment:t,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:n}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:`variable`}}),e.languages.insertBefore(`coffeescript`,`comment`,{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:`comment`},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:`regex`,inside:{comment:t,interpolation:n}}}),e.languages.insertBefore(`coffeescript`,`string`,{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:`punctuation`},script:{pattern:/[\s\S]+/,alias:`language-javascript`,inside:e.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:`string`},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:`string`,inside:{interpolation:n}}]}),e.languages.insertBefore(`coffeescript`,`keyword`,{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete e.languages.coffeescript[`template-string`],e.languages.coffee=e.languages.coffeescript}($),function(e){var t=e.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(t,"addSupport",{value:function(t,n){(t=typeof t==`string`?[t]:t).forEach(function(t){var r=function(e){e.inside||={},e.inside.rest=n},i=`doc-comment`;if(a=e.languages[t]){var a,o=a[i];if((o||=(a=e.languages.insertBefore(t,`comment`,{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:`comment`}}))[i])instanceof RegExp&&(o=a[i]={pattern:o}),Array.isArray(o))for(var s=0,c=o.length;s<c;s++)o[s]instanceof RegExp&&(o[s]={pattern:o[s]}),r(o[s]);else r(o)}})}}),t.addSupport([`java`,`javascript`,`php`],t)}($),function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,t=(e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+t.source+`)*?(?:;|(?=\\s*\\{))`),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:`selector`},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp(`\\burl\\((?:`+t.source+`|(?:[^\\\\\\r\\n()"']|\\\\[\\s\\S])*)\\)`,`i`),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp(`^`+t.source+`$`),alias:`url`}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+`)*(?=\\s*\\{)`),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css,e.languages.markup);t&&(t.tag.addInlined(`style`,`css`),t.tag.addAttribute(`style`,`css`))}($),function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,t=(e.languages.css.selector={pattern:e.languages.css.selector.pattern,lookbehind:!0,inside:t={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+t.source+`)*\\]`),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:`keyword`},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[t,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},e.languages.css.atrule.inside[`selector-function-argument`].inside=t,e.languages.insertBefore(`css`,`property`,{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}}),{pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0}),n={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};e.languages.insertBefore(`css`,`function`,{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:`color`},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:t,number:n,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:t,number:n})}($),function(e){var t=/[*&][^\s[\]{},]+/,n=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,r=`(?:`+n.source+`(?:[ 	]+`+t.source+`)?|`+t.source+`(?:[ 	]+`+n.source+`)?)`,i=`(?:[^\\s\\x00-\\x08\\x0e-\\x1f!"#%&'*,\\-:>?@[\\]\`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ \\t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*`.replace(/<PLAIN>/g,function(){return`[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]`}),a=`"(?:[^"\\\\\\r\\n]|\\\\.)*"|'(?:[^'\\\\\\r\\n]|\\\\.)*'`;function o(e,t){t=(t||``).replace(/m/g,``)+`m`;var n=`([:\\-,[{]\\s*(?:\\s<<prop>>[ \\t]+)?)(?:<<value>>)(?=[ \\t]*(?:$|,|\\]|\\}|(?:[\\r\\n]\\s*)?#))`.replace(/<<prop>>/g,function(){return r}).replace(/<<value>>/g,function(){return e});return RegExp(n,t)}e.languages.yaml={scalar:{pattern:RegExp(`([\\-:]\\s*(?:\\s<<prop>>[ \\t]+)?[|>])[ \\t]*(?:((?:\\r?\\n|\\r)[ \\t]+)\\S[^\\r\\n]*(?:\\2[^\\r\\n]+)*)`.replace(/<<prop>>/g,function(){return r})),lookbehind:!0,alias:`string`},comment:/#.*/,key:{pattern:RegExp(`((?:^|[:\\-,[{\\r\\n?])[ \\t]*(?:<<prop>>[ \\t]+)?)<<key>>(?=\\s*:\\s)`.replace(/<<prop>>/g,function(){return r}).replace(/<<key>>/g,function(){return`(?:`+i+`|`+a+`)`})),lookbehind:!0,greedy:!0,alias:`atrule`},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:`important`},datetime:{pattern:o(`\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ \\t]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ \\t]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?`),lookbehind:!0,alias:`number`},boolean:{pattern:o(`false|true`,`i`),lookbehind:!0,alias:`important`},null:{pattern:o(`null|~`,`i`),lookbehind:!0,alias:`important`},string:{pattern:o(a),lookbehind:!0,greedy:!0},number:{pattern:o(`[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)`,`i`),lookbehind:!0},tag:n,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml}($),function(e){function t(e){return e=e.replace(/<inner>/g,function(){return`(?:\\\\.|[^\\\\\\n\\r]|(?:\\n|\\r\\n?)(?![\\r\\n]))`}),RegExp(`((?:^|[^\\\\])(?:\\\\{2})*)(?:`+e+`)`)}var n="(?:\\\\.|``(?:[^`\\r\\n]|`(?!`))+``|`[^`\\r\\n]+`|[^\\\\|\\r\\n`])+",r=`\\|?__(?:\\|__)+\\|?(?:(?:\\n|\\r\\n?)|(?![\\s\\S]))`.replace(/__/g,function(){return n}),i=`\\|?[ \\t]*:?-{3,}:?[ \\t]*(?:\\|[ \\t]*:?-{3,}:?[ \\t]*)+\\|?(?:\\n|\\r\\n?)`,a=(e.languages.markdown=e.languages.extend(`markup`,{}),e.languages.insertBefore(`markdown`,`prolog`,{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:[`yaml`,`language-yaml`],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:`punctuation`},table:{pattern:RegExp(`^`+r+i+`(?:`+r+`)*`,`m`),inside:{"table-data-rows":{pattern:RegExp(`^(`+r+i+`)(?:`+r+`)*$`),lookbehind:!0,inside:{"table-data":{pattern:RegExp(n),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp(`^(`+r+`)`+i+`$`),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp(`^`+r+`$`),inside:{"table-header":{pattern:RegExp(n),alias:`important`,inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:`keyword`},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:`important`,inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:`important`,inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:`punctuation`},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:`punctuation`},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:`url`},bold:{pattern:t(`\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*`),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:t(`\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*`),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:t(`(~~?)(?:(?!~)<inner>)+\\2`),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:[`code`,`keyword`]},url:{pattern:t(`!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\\t ]+"(?:\\\\.|[^"\\\\])*")?\\)|[ \\t]?\\[(?:(?!\\])<inner>)+\\])`),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),[`url`,`bold`,`italic`,`strike`].forEach(function(t){[`url`,`bold`,`italic`,`strike`,`code-snippet`].forEach(function(n){t!==n&&(e.languages.markdown[t].inside.content.inside[n]=e.languages.markdown[n])})}),e.hooks.add(`after-tokenize`,function(e){e.language!==`markdown`&&e.language!==`md`||function e(t){if(t&&typeof t!=`string`)for(var n=0,r=t.length;n<r;n++){var i,a=t[n];a.type===`code`?(i=a.content[1],a=a.content[3],i&&a&&i.type===`code-language`&&a.type===`code-block`&&typeof i.content==`string`&&(i=i.content.replace(/\b#/g,`sharp`).replace(/\b\+\+/g,`pp`),i=`language-`+(i=(/[a-z][\w-]*/i.exec(i)||[``])[0].toLowerCase()),a.alias?typeof a.alias==`string`?a.alias=[a.alias,i]:a.alias.push(i):a.alias=[i])):e(a.content)}}(e.tokens)}),e.hooks.add(`wrap`,function(t){if(t.type===`code-block`){for(var n=``,r=0,i=t.classes.length;r<i;r++){var c=t.classes[r],c=/language-(.+)/.exec(c);if(c){n=c[1];break}}var l,u=e.languages[n];u?t.content=e.highlight(function(e){return e=e.replace(a,``),e=e.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(e,t){var n;return(t=t.toLowerCase())[0]===`#`?(n=t[1]===`x`?parseInt(t.slice(2),16):Number(t.slice(1)),s(n)):o[t]||e})}(t.content),u,n):n&&n!==`none`&&e.plugins.autoloader&&(l=`md-`+new Date().valueOf()+`-`+Math.floor(0x2386f26fc10000*Math.random()),t.attributes.id=l,e.plugins.autoloader.loadLanguages(n,function(){var t=document.getElementById(l);t&&(t.innerHTML=e.highlight(t.textContent,e.languages[n],n))}))}}),RegExp(e.languages.markup.tag.pattern.source,`gi`)),o={amp:`&`,lt:`<`,gt:`>`,quot:`"`},s=String.fromCodePoint||String.fromCharCode;e.languages.md=e.languages.markdown}($),$.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:`string`,inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:$.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:`function`},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:`class-name`},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:`function`},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:`function`},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:`function`},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},$.hooks.add(`after-tokenize`,function(e){if(e.language===`graphql`)for(var t=e.tokens.filter(function(e){return typeof e!=`string`&&e.type!==`comment`&&e.type!==`scalar`}),n=0;n<t.length;){var r=t[n++];if(r.type===`keyword`&&r.content===`mutation`){var i=[];if(d([`definition-mutation`,`punctuation`])&&u(1).content===`(`){n+=2;var a=f(/^\($/,/^\)$/);if(a===-1)continue;for(;n<a;n++){var o=u(0);o.type===`variable`&&(p(o,`variable-input`),i.push(o.content))}n=a+1}if(d([`punctuation`,`property-query`])&&u(0).content===`{`&&(n++,p(u(0),`property-mutation`),0<i.length)){var s=f(/^\{$/,/^\}$/);if(s!==-1)for(var c=n;c<s;c++){var l=t[c];l.type===`variable`&&0<=i.indexOf(l.content)&&p(l,`variable-input`)}}}}function u(e){return t[n+e]}function d(e,t){t||=0;for(var n=0;n<e.length;n++){var r=u(n+t);if(!r||r.type!==e[n])return}return 1}function f(e,r){for(var i=1,a=n;a<t.length;a++){var o=t[a],s=o.content;if(o.type===`punctuation`&&typeof s==`string`){if(e.test(s))i++;else if(r.test(s)&&--i===0)return a}}return-1}function p(e,t){var n=e.alias;n?Array.isArray(n)||(e.alias=n=[n]):e.alias=n=[],n.push(t)}}),$.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},function(e){var t=e.languages.javascript[`template-string`],n=t.pattern.source,r=t.inside.interpolation,i=r.inside[`interpolation-punctuation`],a=r.pattern.source;function o(t,r){if(e.languages[t])return{pattern:RegExp(`((?:`+r+`)\\s*)`+n),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:`string`},"embedded-code":{pattern:/[\s\S]+/,alias:t}}}}function s(t,n,r){return t={code:t,grammar:n,language:r},e.hooks.run(`before-tokenize`,t),t.tokens=e.tokenize(t.code,t.grammar),e.hooks.run(`after-tokenize`,t),t.tokens}function c(t,n,o){var c=e.tokenize(t,{interpolation:{pattern:RegExp(a),lookbehind:!0}}),l=0,u={},c=s(c.map(function(e){if(typeof e==`string`)return e;for(var n,r,e=e.content;t.indexOf((r=l++,n=`___`+o.toUpperCase()+`_`+r+`___`))!==-1;);return u[n]=e,n}).join(``),n,o),d=Object.keys(u);return l=0,function t(n){for(var a=0;a<n.length;a++){if(l>=d.length)return;var o,c,f,p,m,h,g,_=n[a];typeof _==`string`||typeof _.content==`string`?(o=d[l],(g=(h=typeof _==`string`?_:_.content).indexOf(o))!==-1&&(++l,c=h.substring(0,g),m=u[o],f=void 0,(p={})[`interpolation-punctuation`]=i,(p=e.tokenize(m,p)).length===3&&((f=[1,1]).push.apply(f,s(p[1],e.languages.javascript,`javascript`)),p.splice.apply(p,f)),f=new e.Token(`interpolation`,p,r.alias,m),p=h.substring(g+o.length),m=[],c&&m.push(c),m.push(f),p&&(t(h=[p]),m.push.apply(m,h)),typeof _==`string`?(n.splice.apply(n,[a,1].concat(m)),a+=m.length-1):_.content=m)):(g=_.content,t(Array.isArray(g)?g:[g]))}}(c),new e.Token(o,c,`language-`+o,t)}e.languages.javascript[`template-string`]=[o(`css`,`\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)`),o(`html`,`\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?=`),o(`svg`,`\\bsvg`),o(`markdown`,`\\b(?:markdown|md)`),o(`graphql`,`\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)`),o(`sql`,`\\bsql`),t].filter(Boolean);var l={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function u(e){return typeof e==`string`?e:Array.isArray(e)?e.map(u).join(``):u(e.content)}e.hooks.add(`after-tokenize`,function(t){t.language in l&&function t(n){for(var r=0,i=n.length;r<i;r++){var a,o,s,l=n[r];typeof l!=`string`&&(a=l.content,Array.isArray(a)?l.type===`template-string`?(l=a[1],a.length===3&&typeof l!=`string`&&l.type===`embedded-code`&&(o=u(l),l=l.alias,l=Array.isArray(l)?l[0]:l,s=e.languages[l])&&(a[1]=c(o,s,l))):t(a):typeof a!=`string`&&t([a]))}}(t.tokens)})}($),function(e){e.languages.typescript=e.languages.extend(`javascript`,{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript[`literal-property`];var t=e.languages.extend(`typescript`,{});delete t[`class-name`],e.languages.typescript[`class-name`].inside=t,e.languages.insertBefore(`typescript`,`function`,{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:`operator`},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:`class-name`,inside:t}}}}),e.languages.ts=e.languages.typescript}($),function(e){var t=e.languages.javascript,n=`\\{(?:[^{}]|\\{(?:[^{}]|\\{[^{}]*\\})*\\})+\\}`,r=`(@(?:arg|argument|param|property)\\s+(?:`+n+`\\s+)?)`;e.languages.jsdoc=e.languages.extend(`javadoclike`,{parameter:{pattern:RegExp(r+`(?:(?!\\s)[$\\w\\xA0-\\uFFFF.])+(?=\\s|$)`),lookbehind:!0,inside:{punctuation:/\./}}}),e.languages.insertBefore(`jsdoc`,`keyword`,{"optional-parameter":{pattern:RegExp(r+`\\[(?:(?!\\s)[$\\w\\xA0-\\uFFFF.])+(?:=[^[\\]]+)?\\](?=\\s|$)`),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:t,alias:`language-javascript`},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp(`(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\\s+(?:<TYPE>\\s+)?)[A-Z]\\w*(?:\\.[A-Z]\\w*)*`.replace(/<TYPE>/g,function(){return n})),lookbehind:!0,inside:{punctuation:/\./}},{pattern:RegExp(`(@[a-z]+\\s+)`+n),lookbehind:!0,inside:{string:t.string,number:t.number,boolean:t.boolean,keyword:e.languages.typescript.keyword,operator:/=>|\.\.\.|[&|?:*]/,punctuation:/[.,;=<>{}()[\]]/}}],example:{pattern:/(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^([\t ]*(?:\*\s*)?)\S.*$/m,lookbehind:!0,inside:t,alias:`language-javascript`}}}}),e.languages.javadoclike.addSupport(`javascript`,e.languages.jsdoc)}($),function(e){e.languages.flow=e.languages.extend(`javascript`,{}),e.languages.insertBefore(`flow`,`keyword`,{type:[{pattern:/\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,alias:`class-name`}]}),e.languages.flow[`function-variable`].pattern=/(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i,delete e.languages.flow.parameter,e.languages.insertBefore(`flow`,`operator`,{"flow-punctuation":{pattern:/\{\||\|\}/,alias:`punctuation`}}),Array.isArray(e.languages.flow.keyword)||(e.languages.flow.keyword=[e.languages.flow.keyword]),e.languages.flow.keyword.unshift({pattern:/(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,lookbehind:!0},{pattern:/(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,lookbehind:!0})}($),$.languages.n4js=$.languages.extend(`javascript`,{keyword:/\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/}),$.languages.insertBefore(`n4js`,`constant`,{annotation:{pattern:/@+\w+/,alias:`operator`}}),$.languages.n4jsd=$.languages.n4js,function(e){function t(e,t){return RegExp(e.replace(/<ID>/g,function(){return`(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*`}),t)}e.languages.insertBefore(`javascript`,`function-variable`,{"method-variable":{pattern:RegExp(`(\\.\\s*)`+e.languages.javascript[`function-variable`].pattern.source),lookbehind:!0,alias:[`function-variable`,`method`,`function`,`property-access`]}}),e.languages.insertBefore(`javascript`,`function`,{method:{pattern:RegExp(`(\\.\\s*)`+e.languages.javascript.function.source),lookbehind:!0,alias:[`function`,`property-access`]}}),e.languages.insertBefore(`javascript`,`constant`,{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:`class-name`},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:`class-name`}]}),e.languages.insertBefore(`javascript`,`keyword`,{imports:{pattern:t(`(\\bimport\\b\\s*)(?:<ID>(?:\\s*,\\s*(?:\\*\\s*as\\s+<ID>|\\{[^{}]*\\}))?|\\*\\s*as\\s+<ID>|\\{[^{}]*\\})(?=\\s*\\bfrom\\b)`),lookbehind:!0,inside:e.languages.javascript},exports:{pattern:t(`(\\bexport\\b\\s*)(?:\\*(?:\\s*as\\s+<ID>)?(?=\\s*\\bfrom\\b)|\\{[^{}]*\\})`),lookbehind:!0,inside:e.languages.javascript}}),e.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:`module`},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:`control-flow`},{pattern:/\bnull\b/,alias:[`null`,`nil`]},{pattern:/\bundefined\b/,alias:`nil`}),e.languages.insertBefore(`javascript`,`operator`,{spread:{pattern:/\.{3}/,alias:`operator`},arrow:{pattern:/=>/,alias:`operator`}}),e.languages.insertBefore(`javascript`,`punctuation`,{"property-access":{pattern:t(`(\\.\\s*)#?<ID>`),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:`variable`},console:{pattern:/\bconsole(?=\s*\.)/,alias:`class-name`}});for(var n=[`function`,`function-variable`,`method`,`method-variable`,`property-access`],r=0;r<n.length;r++){var i=n[r],a=e.languages.javascript[i],i=(a=e.util.type(a)===`RegExp`?e.languages.javascript[i]={pattern:a}:a).inside||{};(a.inside=i)[`maybe-class-name`]=/^[A-Z][\s\S]*/}}($),function(e){var t=e.util.clone(e.languages.javascript),n=`(?:\\s|\\/\\/.*(?!.)|\\/\\*(?:[^*]|\\*(?!\\/))\\*\\/)`,r=`(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})`,i=`(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})`;function a(e,t){return e=e.replace(/<S>/g,function(){return n}).replace(/<BRACES>/g,function(){return r}).replace(/<SPREAD>/g,function(){return i}),RegExp(e,t)}i=a(i).source,e.languages.jsx=e.languages.extend(`markup`,t),e.languages.jsx.tag.pattern=a(`<\\/?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:"(?:\\\\[\\s\\S]|[^\\\\"])*"|'(?:\\\\[\\s\\S]|[^\\\\'])*'|[^\\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\\/?)?>`),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside[`attr-value`].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside[`class-name`]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore(`inside`,`attr-name`,{spread:{pattern:a(`<SPREAD>`),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore(`inside`,`special-attr`,{script:{pattern:a(`=<BRACES>`),alias:`language-javascript`,inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:`punctuation`},rest:e.languages.jsx}}},e.languages.jsx.tag);function o(t){for(var n=[],r=0;r<t.length;r++){var i=t[r],a=!1;typeof i!=`string`&&(i.type===`tag`&&i.content[0]&&i.content[0].type===`tag`?i.content[0].content[0].content===`</`?0<n.length&&n[n.length-1].tagName===s(i.content[0].content[1])&&n.pop():i.content[i.content.length-1].content!==`/>`&&n.push({tagName:s(i.content[0].content[1]),openedBraces:0}):0<n.length&&i.type===`punctuation`&&i.content===`{`?n[n.length-1].openedBraces++:0<n.length&&0<n[n.length-1].openedBraces&&i.type===`punctuation`&&i.content===`}`?n[n.length-1].openedBraces--:a=!0),(a||typeof i==`string`)&&0<n.length&&n[n.length-1].openedBraces===0&&(a=s(i),r<t.length-1&&(typeof t[r+1]==`string`||t[r+1].type===`plain-text`)&&(a+=s(t[r+1]),t.splice(r+1,1)),0<r&&(typeof t[r-1]==`string`||t[r-1].type===`plain-text`)&&(a=s(t[r-1])+a,t.splice(r-1,1),r--),t[r]=new e.Token(`plain-text`,a,null,a)),i.content&&typeof i.content!=`string`&&o(i.content)}}var s=function(e){return e?typeof e==`string`?e:typeof e.content==`string`?e.content:e.content.map(s).join(``):``};e.hooks.add(`after-tokenize`,function(e){e.language!==`jsx`&&e.language!==`tsx`||o(e.tokens)})}($),function(e){var t=e.util.clone(e.languages.typescript),t=(e.languages.tsx=e.languages.extend(`jsx`,t),delete e.languages.tsx.parameter,delete e.languages.tsx[`literal-property`],e.languages.tsx.tag);t.pattern=RegExp(`(^|[^\\w$]|(?=<\\/))(?:`+t.pattern.source+`)`,t.pattern.flags),t.lookbehind=!0}($),$.languages.swift={comment:{pattern:/(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,lookbehind:!0,greedy:!0},"string-literal":[{pattern:RegExp(`(^|[^"#])(?:"(?:\\\\(?:\\((?:[^()]|\\([^()]*\\))*\\)|\\r\\n|[^(])|[^\\\\\\r\\n"])*"|"""(?:\\\\(?:\\((?:[^()]|\\([^()]*\\))*\\)|[^(])|[^\\\\"]|"(?!""))*""")(?!["#])`),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\\($/,alias:`punctuation`},punctuation:/\\(?=[\r\n])/,string:/[\s\S]+/}},{pattern:RegExp(`(^|[^"#])(#+)(?:"(?:\\\\(?:#+\\((?:[^()]|\\([^()]*\\))*\\)|\\r\\n|[^#])|[^\\\\\\r\\n])*?"|"""(?:\\\\(?:#+\\((?:[^()]|\\([^()]*\\))*\\)|[^#])|[^\\\\])*?""")\\2`),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\#+\($/,alias:`punctuation`},string:/[\s\S]+/}}],directive:{pattern:RegExp(`#(?:(?:elseif|if)\\b(?:[ 	]*(?:![ \\t]*)?(?:\\b\\w+\\b(?:[ \\t]*\\((?:[^()]|\\([^()]*\\))*\\))?|\\((?:[^()]|\\([^()]*\\))*\\))(?:[ \\t]*(?:&&|\\|\\|))?)+|(?:else|endif)\\b)`),alias:`property`,inside:{"directive-name":/^#\w+/,boolean:/\b(?:false|true)\b/,number:/\b\d+(?:\.\d+)*\b/,operator:/!|&&|\|\||[<>]=?/,punctuation:/[(),]/}},literal:{pattern:/#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,alias:`constant`},"other-directive":{pattern:/#\w+\b/,alias:`property`},attribute:{pattern:/@\w+/,alias:`atrule`},"function-definition":{pattern:/(\bfunc\s+)\w+/,lookbehind:!0,alias:`function`},label:{pattern:/\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,lookbehind:!0,alias:`important`},keyword:/\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,boolean:/\b(?:false|true)\b/,nil:{pattern:/\bnil\b/,alias:`constant`},"short-argument":/\$\d+\b/,omit:{pattern:/\b_\b/,alias:`keyword`},number:/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,"class-name":/\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,function:/\b[a-z_]\w*(?=\s*\()/i,constant:/\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,operator:/[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,punctuation:/[{}[\]();,.:\\]/},$.languages.swift[`string-literal`].forEach(function(e){e.inside.interpolation.inside=$.languages.swift}),function(e){e.languages.kotlin=e.languages.extend(`clike`,{keyword:{pattern:/(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,lookbehind:!0},function:[{pattern:/(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,greedy:!0},{pattern:/(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,lookbehind:!0,greedy:!0}],number:/\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete e.languages.kotlin[`class-name`];var t={"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:`punctuation`},expression:{pattern:/[\s\S]+/,inside:e.languages.kotlin}};e.languages.insertBefore(`kotlin`,`string`,{"string-literal":[{pattern:/"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,alias:`multiline`,inside:{interpolation:{pattern:/\$(?:[a-z_]\w*|\{[^{}]*\})/i,inside:t},string:/[\s\S]+/}},{pattern:/"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,alias:`singleline`,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,lookbehind:!0,inside:t},string:/[\s\S]+/}}],char:{pattern:/'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,greedy:!0}}),delete e.languages.kotlin.string,e.languages.insertBefore(`kotlin`,`keyword`,{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:`builtin`}}),e.languages.insertBefore(`kotlin`,`function`,{label:{pattern:/\b\w+@|@\w+\b/,alias:`symbol`}}),e.languages.kt=e.languages.kotlin,e.languages.kts=e.languages.kotlin}($),$.languages.c=$.languages.extend(`clike`,{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),$.languages.insertBefore(`c`,`string`,{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),$.languages.insertBefore(`c`,`string`,{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:`property`,inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},$.languages.c.string],char:$.languages.c.char,comment:$.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:`function`}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:`keyword`},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:$.languages.c}}}}),$.languages.insertBefore(`c`,`function`,{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete $.languages.c.boolean,$.languages.objectivec=$.languages.extend(`c`,{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete $.languages.objectivec[`class-name`],$.languages.objc=$.languages.objectivec,$.languages.reason=$.languages.extend(`clike`,{string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*/,keyword:/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,operator:/\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/}),$.languages.insertBefore(`reason`,`class-name`,{char:{pattern:/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,greedy:!0},constructor:/\b[A-Z]\w*\b(?!\s*\.)/,label:{pattern:/\b[a-z]\w*(?=::)/,alias:`symbol`}}),delete $.languages.reason.function,function(e){for(var t=`\\/\\*(?:[^*/]|\\*(?!\\/)|\\/(?!\\*)|<self>)*\\*\\/`,n=0;n<2;n++)t=t.replace(/<self>/g,function(){return t});t=t.replace(/<self>/g,function(){return`[^\\s\\S]`}),e.languages.rust={comment:[{pattern:RegExp(`(^|[^\\\\])`+t),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:`attr-name`,inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:`punctuation`},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:`symbol`},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:`punctuation`},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:`function`},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:`class-name`},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:`namespace`},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:`namespace`,inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:`property`},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},e.languages.rust[`closure-params`].inside.rest=e.languages.rust,e.languages.rust.attribute.inside.string=e.languages.rust.string}($),$.languages.go=$.languages.extend(`clike`,{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),$.languages.insertBefore(`go`,`string`,{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete $.languages.go[`class-name`],function(e){var t=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,n=`\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b`.replace(/<keyword>/g,function(){return t.source});e.languages.cpp=e.languages.extend(`c`,{"class-name":[{pattern:RegExp(`(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+`.replace(/<keyword>/g,function(){return t.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:t,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),e.languages.insertBefore(`cpp`,`string`,{module:{pattern:RegExp(`(\\b(?:import|module)\\s+)(?:"(?:\\\\(?:\\r\\n|[\\s\\S])|[^"\\\\\\r\\n])*"|<[^<>\\r\\n]*>|`+`<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>`.replace(/<mod-name>/g,function(){return n})+`)`),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:`string`,greedy:!0}}),e.languages.insertBefore(`cpp`,`keyword`,{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:`class-name`,inside:e.languages.cpp}}}}),e.languages.insertBefore(`cpp`,`operator`,{"double-colon":{pattern:/::/,alias:`punctuation`}}),e.languages.insertBefore(`cpp`,`class-name`,{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:e.languages.extend(`cpp`,{})}}),e.languages.insertBefore(`inside`,`double-colon`,{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},e.languages.cpp[`base-clause`])}($),$.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:`punctuation`},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:`string`},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:[`annotation`,`punctuation`],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},$.languages.python[`string-interpolation`].inside.interpolation.inside.rest=$.languages.python,$.languages.py=$.languages.python,$.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:`keyword`}},$.languages.webmanifest=$.languages.json;var Rp={};Ip(Rp,{dracula:()=>zp,duotoneDark:()=>Bp,duotoneLight:()=>Vp,github:()=>Hp,gruvboxMaterialDark:()=>im,gruvboxMaterialLight:()=>am,jettwaveDark:()=>em,jettwaveLight:()=>tm,nightOwl:()=>Up,nightOwlLight:()=>Wp,oceanicNext:()=>Kp,okaidia:()=>qp,oneDark:()=>nm,oneLight:()=>rm,palenight:()=>Jp,shadesOfPurple:()=>Yp,synthwave84:()=>Xp,ultramin:()=>Zp,vsDark:()=>Qp,vsLight:()=>$p});var zp={plain:{color:`#F8F8F2`,backgroundColor:`#282A36`},styles:[{types:[`prolog`,`constant`,`builtin`],style:{color:`rgb(189, 147, 249)`}},{types:[`inserted`,`function`],style:{color:`rgb(80, 250, 123)`}},{types:[`deleted`],style:{color:`rgb(255, 85, 85)`}},{types:[`changed`],style:{color:`rgb(255, 184, 108)`}},{types:[`punctuation`,`symbol`],style:{color:`rgb(248, 248, 242)`}},{types:[`string`,`char`,`tag`,`selector`],style:{color:`rgb(255, 121, 198)`}},{types:[`keyword`,`variable`],style:{color:`rgb(189, 147, 249)`,fontStyle:`italic`}},{types:[`comment`],style:{color:`rgb(98, 114, 164)`}},{types:[`attr-name`],style:{color:`rgb(241, 250, 140)`}}]},Bp={plain:{backgroundColor:`#2a2734`,color:`#9a86fd`},styles:[{types:[`comment`,`prolog`,`doctype`,`cdata`,`punctuation`],style:{color:`#6c6783`}},{types:[`namespace`],style:{opacity:.7}},{types:[`tag`,`operator`,`number`],style:{color:`#e09142`}},{types:[`property`,`function`],style:{color:`#9a86fd`}},{types:[`tag-id`,`selector`,`atrule-id`],style:{color:`#eeebff`}},{types:[`attr-name`],style:{color:`#c4b9fe`}},{types:[`boolean`,`string`,`entity`,`url`,`attr-value`,`keyword`,`control`,`directive`,`unit`,`statement`,`regex`,`atrule`,`placeholder`,`variable`],style:{color:`#ffcc99`}},{types:[`deleted`],style:{textDecorationLine:`line-through`}},{types:[`inserted`],style:{textDecorationLine:`underline`}},{types:[`italic`],style:{fontStyle:`italic`}},{types:[`important`,`bold`],style:{fontWeight:`bold`}},{types:[`important`],style:{color:`#c4b9fe`}}]},Vp={plain:{backgroundColor:`#faf8f5`,color:`#728fcb`},styles:[{types:[`comment`,`prolog`,`doctype`,`cdata`,`punctuation`],style:{color:`#b6ad9a`}},{types:[`namespace`],style:{opacity:.7}},{types:[`tag`,`operator`,`number`],style:{color:`#063289`}},{types:[`property`,`function`],style:{color:`#b29762`}},{types:[`tag-id`,`selector`,`atrule-id`],style:{color:`#2d2006`}},{types:[`attr-name`],style:{color:`#896724`}},{types:[`boolean`,`string`,`entity`,`url`,`attr-value`,`keyword`,`control`,`directive`,`unit`,`statement`,`regex`,`atrule`],style:{color:`#728fcb`}},{types:[`placeholder`,`variable`],style:{color:`#93abdc`}},{types:[`deleted`],style:{textDecorationLine:`line-through`}},{types:[`inserted`],style:{textDecorationLine:`underline`}},{types:[`italic`],style:{fontStyle:`italic`}},{types:[`important`,`bold`],style:{fontWeight:`bold`}},{types:[`important`],style:{color:`#896724`}}]},Hp={plain:{color:`#393A34`,backgroundColor:`#f6f8fa`},styles:[{types:[`comment`,`prolog`,`doctype`,`cdata`],style:{color:`#999988`,fontStyle:`italic`}},{types:[`namespace`],style:{opacity:.7}},{types:[`string`,`attr-value`],style:{color:`#e3116c`}},{types:[`punctuation`,`operator`],style:{color:`#393A34`}},{types:[`entity`,`url`,`symbol`,`number`,`boolean`,`variable`,`constant`,`property`,`regex`,`inserted`],style:{color:`#36acaa`}},{types:[`atrule`,`keyword`,`attr-name`,`selector`],style:{color:`#00a4db`}},{types:[`function`,`deleted`,`tag`],style:{color:`#d73a49`}},{types:[`function-variable`],style:{color:`#6f42c1`}},{types:[`tag`,`selector`,`keyword`],style:{color:`#00009f`}}]},Up={plain:{color:`#d6deeb`,backgroundColor:`#011627`},styles:[{types:[`changed`],style:{color:`rgb(162, 191, 252)`,fontStyle:`italic`}},{types:[`deleted`],style:{color:`rgba(239, 83, 80, 0.56)`,fontStyle:`italic`}},{types:[`inserted`,`attr-name`],style:{color:`rgb(173, 219, 103)`,fontStyle:`italic`}},{types:[`comment`],style:{color:`rgb(99, 119, 119)`,fontStyle:`italic`}},{types:[`string`,`url`],style:{color:`rgb(173, 219, 103)`}},{types:[`variable`],style:{color:`rgb(214, 222, 235)`}},{types:[`number`],style:{color:`rgb(247, 140, 108)`}},{types:[`builtin`,`char`,`constant`,`function`],style:{color:`rgb(130, 170, 255)`}},{types:[`punctuation`],style:{color:`rgb(199, 146, 234)`}},{types:[`selector`,`doctype`],style:{color:`rgb(199, 146, 234)`,fontStyle:`italic`}},{types:[`class-name`],style:{color:`rgb(255, 203, 139)`}},{types:[`tag`,`operator`,`keyword`],style:{color:`rgb(127, 219, 202)`}},{types:[`boolean`],style:{color:`rgb(255, 88, 116)`}},{types:[`property`],style:{color:`rgb(128, 203, 196)`}},{types:[`namespace`],style:{color:`rgb(178, 204, 214)`}}]},Wp={plain:{color:`#403f53`,backgroundColor:`#FBFBFB`},styles:[{types:[`changed`],style:{color:`rgb(162, 191, 252)`,fontStyle:`italic`}},{types:[`deleted`],style:{color:`rgba(239, 83, 80, 0.56)`,fontStyle:`italic`}},{types:[`inserted`,`attr-name`],style:{color:`rgb(72, 118, 214)`,fontStyle:`italic`}},{types:[`comment`],style:{color:`rgb(152, 159, 177)`,fontStyle:`italic`}},{types:[`string`,`builtin`,`char`,`constant`,`url`],style:{color:`rgb(72, 118, 214)`}},{types:[`variable`],style:{color:`rgb(201, 103, 101)`}},{types:[`number`],style:{color:`rgb(170, 9, 130)`}},{types:[`punctuation`],style:{color:`rgb(153, 76, 195)`}},{types:[`function`,`selector`,`doctype`],style:{color:`rgb(153, 76, 195)`,fontStyle:`italic`}},{types:[`class-name`],style:{color:`rgb(17, 17, 17)`}},{types:[`tag`],style:{color:`rgb(153, 76, 195)`}},{types:[`operator`,`property`,`keyword`,`namespace`],style:{color:`rgb(12, 150, 155)`}},{types:[`boolean`],style:{color:`rgb(188, 84, 84)`}}]},Gp={char:`#D8DEE9`,comment:`#999999`,keyword:`#c5a5c5`,primitive:`#5a9bcf`,string:`#8dc891`,variable:`#d7deea`,boolean:`#ff8b50`,punctuation:`#5FB3B3`,tag:`#fc929e`,function:`#79b6f2`,className:`#FAC863`,method:`#6699CC`,operator:`#fc929e`},Kp={plain:{backgroundColor:`#282c34`,color:`#ffffff`},styles:[{types:[`attr-name`],style:{color:Gp.keyword}},{types:[`attr-value`],style:{color:Gp.string}},{types:[`comment`,`block-comment`,`prolog`,`doctype`,`cdata`,`shebang`],style:{color:Gp.comment}},{types:[`property`,`number`,`function-name`,`constant`,`symbol`,`deleted`],style:{color:Gp.primitive}},{types:[`boolean`],style:{color:Gp.boolean}},{types:[`tag`],style:{color:Gp.tag}},{types:[`string`],style:{color:Gp.string}},{types:[`punctuation`],style:{color:Gp.string}},{types:[`selector`,`char`,`builtin`,`inserted`],style:{color:Gp.char}},{types:[`function`],style:{color:Gp.function}},{types:[`operator`,`entity`,`url`,`variable`],style:{color:Gp.variable}},{types:[`keyword`],style:{color:Gp.keyword}},{types:[`atrule`,`class-name`],style:{color:Gp.className}},{types:[`important`],style:{fontWeight:`400`}},{types:[`bold`],style:{fontWeight:`bold`}},{types:[`italic`],style:{fontStyle:`italic`}},{types:[`namespace`],style:{opacity:.7}}]},qp={plain:{color:`#f8f8f2`,backgroundColor:`#272822`},styles:[{types:[`changed`],style:{color:`rgb(162, 191, 252)`,fontStyle:`italic`}},{types:[`deleted`],style:{color:`#f92672`,fontStyle:`italic`}},{types:[`inserted`],style:{color:`rgb(173, 219, 103)`,fontStyle:`italic`}},{types:[`comment`],style:{color:`#8292a2`,fontStyle:`italic`}},{types:[`string`,`url`],style:{color:`#a6e22e`}},{types:[`variable`],style:{color:`#f8f8f2`}},{types:[`number`],style:{color:`#ae81ff`}},{types:[`builtin`,`char`,`constant`,`function`,`class-name`],style:{color:`#e6db74`}},{types:[`punctuation`],style:{color:`#f8f8f2`}},{types:[`selector`,`doctype`],style:{color:`#a6e22e`,fontStyle:`italic`}},{types:[`tag`,`operator`,`keyword`],style:{color:`#66d9ef`}},{types:[`boolean`],style:{color:`#ae81ff`}},{types:[`namespace`],style:{color:`rgb(178, 204, 214)`,opacity:.7}},{types:[`tag`,`property`],style:{color:`#f92672`}},{types:[`attr-name`],style:{color:`#a6e22e !important`}},{types:[`doctype`],style:{color:`#8292a2`}},{types:[`rule`],style:{color:`#e6db74`}}]},Jp={plain:{color:`#bfc7d5`,backgroundColor:`#292d3e`},styles:[{types:[`comment`],style:{color:`rgb(105, 112, 152)`,fontStyle:`italic`}},{types:[`string`,`inserted`],style:{color:`rgb(195, 232, 141)`}},{types:[`number`],style:{color:`rgb(247, 140, 108)`}},{types:[`builtin`,`char`,`constant`,`function`],style:{color:`rgb(130, 170, 255)`}},{types:[`punctuation`,`selector`],style:{color:`rgb(199, 146, 234)`}},{types:[`variable`],style:{color:`rgb(191, 199, 213)`}},{types:[`class-name`,`attr-name`],style:{color:`rgb(255, 203, 107)`}},{types:[`tag`,`deleted`],style:{color:`rgb(255, 85, 114)`}},{types:[`operator`],style:{color:`rgb(137, 221, 255)`}},{types:[`boolean`],style:{color:`rgb(255, 88, 116)`}},{types:[`keyword`],style:{fontStyle:`italic`}},{types:[`doctype`],style:{color:`rgb(199, 146, 234)`,fontStyle:`italic`}},{types:[`namespace`],style:{color:`rgb(178, 204, 214)`}},{types:[`url`],style:{color:`rgb(221, 221, 221)`}}]},Yp={plain:{color:`#9EFEFF`,backgroundColor:`#2D2A55`},styles:[{types:[`changed`],style:{color:`rgb(255, 238, 128)`}},{types:[`deleted`],style:{color:`rgba(239, 83, 80, 0.56)`}},{types:[`inserted`],style:{color:`rgb(173, 219, 103)`}},{types:[`comment`],style:{color:`rgb(179, 98, 255)`,fontStyle:`italic`}},{types:[`punctuation`],style:{color:`rgb(255, 255, 255)`}},{types:[`constant`],style:{color:`rgb(255, 98, 140)`}},{types:[`string`,`url`],style:{color:`rgb(165, 255, 144)`}},{types:[`variable`],style:{color:`rgb(255, 238, 128)`}},{types:[`number`,`boolean`],style:{color:`rgb(255, 98, 140)`}},{types:[`attr-name`],style:{color:`rgb(255, 180, 84)`}},{types:[`keyword`,`operator`,`property`,`namespace`,`tag`,`selector`,`doctype`],style:{color:`rgb(255, 157, 0)`}},{types:[`builtin`,`char`,`constant`,`function`,`class-name`],style:{color:`rgb(250, 208, 0)`}}]},Xp={plain:{backgroundColor:`linear-gradient(to bottom, #2a2139 75%, #34294f)`,backgroundImage:`#34294f`,color:`#f92aad`,textShadow:`0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3`},styles:[{types:[`comment`,`block-comment`,`prolog`,`doctype`,`cdata`],style:{color:`#495495`,fontStyle:`italic`}},{types:[`punctuation`],style:{color:`#ccc`}},{types:[`tag`,`attr-name`,`namespace`,`number`,`unit`,`hexcode`,`deleted`],style:{color:`#e2777a`}},{types:[`property`,`selector`],style:{color:`#72f1b8`,textShadow:`0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475`}},{types:[`function-name`],style:{color:`#6196cc`}},{types:[`boolean`,`selector-id`,`function`],style:{color:`#fdfdfd`,textShadow:`0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975`}},{types:[`class-name`,`maybe-class-name`,`builtin`],style:{color:`#fff5f6`,textShadow:`0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75`}},{types:[`constant`,`symbol`],style:{color:`#f92aad`,textShadow:`0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3`}},{types:[`important`,`atrule`,`keyword`,`selector-class`],style:{color:`#f4eee4`,textShadow:`0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575`}},{types:[`string`,`char`,`attr-value`,`regex`,`variable`],style:{color:`#f87c32`}},{types:[`parameter`],style:{fontStyle:`italic`}},{types:[`entity`,`url`],style:{color:`#67cdcc`}},{types:[`operator`],style:{color:`ffffffee`}},{types:[`important`,`bold`],style:{fontWeight:`bold`}},{types:[`italic`],style:{fontStyle:`italic`}},{types:[`entity`],style:{cursor:`help`}},{types:[`inserted`],style:{color:`green`}}]},Zp={plain:{color:`#282a2e`,backgroundColor:`#ffffff`},styles:[{types:[`comment`],style:{color:`rgb(197, 200, 198)`}},{types:[`string`,`number`,`builtin`,`variable`],style:{color:`rgb(150, 152, 150)`}},{types:[`class-name`,`function`,`tag`,`attr-name`],style:{color:`rgb(40, 42, 46)`}}]},Qp={plain:{color:`#9CDCFE`,backgroundColor:`#1E1E1E`},styles:[{types:[`prolog`],style:{color:`rgb(0, 0, 128)`}},{types:[`comment`],style:{color:`rgb(106, 153, 85)`}},{types:[`builtin`,`changed`,`keyword`,`interpolation-punctuation`],style:{color:`rgb(86, 156, 214)`}},{types:[`number`,`inserted`],style:{color:`rgb(181, 206, 168)`}},{types:[`constant`],style:{color:`rgb(100, 102, 149)`}},{types:[`attr-name`,`variable`],style:{color:`rgb(156, 220, 254)`}},{types:[`deleted`,`string`,`attr-value`,`template-punctuation`],style:{color:`rgb(206, 145, 120)`}},{types:[`selector`],style:{color:`rgb(215, 186, 125)`}},{types:[`tag`],style:{color:`rgb(78, 201, 176)`}},{types:[`tag`],languages:[`markup`],style:{color:`rgb(86, 156, 214)`}},{types:[`punctuation`,`operator`],style:{color:`rgb(212, 212, 212)`}},{types:[`punctuation`],languages:[`markup`],style:{color:`#808080`}},{types:[`function`],style:{color:`rgb(220, 220, 170)`}},{types:[`class-name`],style:{color:`rgb(78, 201, 176)`}},{types:[`char`],style:{color:`rgb(209, 105, 105)`}}]},$p={plain:{color:`#000000`,backgroundColor:`#ffffff`},styles:[{types:[`comment`],style:{color:`rgb(0, 128, 0)`}},{types:[`builtin`],style:{color:`rgb(0, 112, 193)`}},{types:[`number`,`variable`,`inserted`],style:{color:`rgb(9, 134, 88)`}},{types:[`operator`],style:{color:`rgb(0, 0, 0)`}},{types:[`constant`,`char`],style:{color:`rgb(129, 31, 63)`}},{types:[`tag`],style:{color:`rgb(128, 0, 0)`}},{types:[`attr-name`],style:{color:`rgb(255, 0, 0)`}},{types:[`deleted`,`string`],style:{color:`rgb(163, 21, 21)`}},{types:[`changed`,`punctuation`],style:{color:`rgb(4, 81, 165)`}},{types:[`function`,`keyword`],style:{color:`rgb(0, 0, 255)`}},{types:[`class-name`],style:{color:`rgb(38, 127, 153)`}}]},em={plain:{color:`#f8fafc`,backgroundColor:`#011627`},styles:[{types:[`prolog`],style:{color:`#000080`}},{types:[`comment`],style:{color:`#6A9955`}},{types:[`builtin`,`changed`,`keyword`,`interpolation-punctuation`],style:{color:`#569CD6`}},{types:[`number`,`inserted`],style:{color:`#B5CEA8`}},{types:[`constant`],style:{color:`#f8fafc`}},{types:[`attr-name`,`variable`],style:{color:`#9CDCFE`}},{types:[`deleted`,`string`,`attr-value`,`template-punctuation`],style:{color:`#cbd5e1`}},{types:[`selector`],style:{color:`#D7BA7D`}},{types:[`tag`],style:{color:`#0ea5e9`}},{types:[`tag`],languages:[`markup`],style:{color:`#0ea5e9`}},{types:[`punctuation`,`operator`],style:{color:`#D4D4D4`}},{types:[`punctuation`],languages:[`markup`],style:{color:`#808080`}},{types:[`function`],style:{color:`#7dd3fc`}},{types:[`class-name`],style:{color:`#0ea5e9`}},{types:[`char`],style:{color:`#D16969`}}]},tm={plain:{color:`#0f172a`,backgroundColor:`#f1f5f9`},styles:[{types:[`prolog`],style:{color:`#000080`}},{types:[`comment`],style:{color:`#6A9955`}},{types:[`builtin`,`changed`,`keyword`,`interpolation-punctuation`],style:{color:`#0c4a6e`}},{types:[`number`,`inserted`],style:{color:`#B5CEA8`}},{types:[`constant`],style:{color:`#0f172a`}},{types:[`attr-name`,`variable`],style:{color:`#0c4a6e`}},{types:[`deleted`,`string`,`attr-value`,`template-punctuation`],style:{color:`#64748b`}},{types:[`selector`],style:{color:`#D7BA7D`}},{types:[`tag`],style:{color:`#0ea5e9`}},{types:[`tag`],languages:[`markup`],style:{color:`#0ea5e9`}},{types:[`punctuation`,`operator`],style:{color:`#475569`}},{types:[`punctuation`],languages:[`markup`],style:{color:`#808080`}},{types:[`function`],style:{color:`#0e7490`}},{types:[`class-name`],style:{color:`#0ea5e9`}},{types:[`char`],style:{color:`#D16969`}}]},nm={plain:{backgroundColor:`hsl(220, 13%, 18%)`,color:`hsl(220, 14%, 71%)`,textShadow:`0 1px rgba(0, 0, 0, 0.3)`},styles:[{types:[`comment`,`prolog`,`cdata`],style:{color:`hsl(220, 10%, 40%)`}},{types:[`doctype`,`punctuation`,`entity`],style:{color:`hsl(220, 14%, 71%)`}},{types:[`attr-name`,`class-name`,`maybe-class-name`,`boolean`,`constant`,`number`,`atrule`],style:{color:`hsl(29, 54%, 61%)`}},{types:[`keyword`],style:{color:`hsl(286, 60%, 67%)`}},{types:[`property`,`tag`,`symbol`,`deleted`,`important`],style:{color:`hsl(355, 65%, 65%)`}},{types:[`selector`,`string`,`char`,`builtin`,`inserted`,`regex`,`attr-value`],style:{color:`hsl(95, 38%, 62%)`}},{types:[`variable`,`operator`,`function`],style:{color:`hsl(207, 82%, 66%)`}},{types:[`url`],style:{color:`hsl(187, 47%, 55%)`}},{types:[`deleted`],style:{textDecorationLine:`line-through`}},{types:[`inserted`],style:{textDecorationLine:`underline`}},{types:[`italic`],style:{fontStyle:`italic`}},{types:[`important`,`bold`],style:{fontWeight:`bold`}},{types:[`important`],style:{color:`hsl(220, 14%, 71%)`}}]},rm={plain:{backgroundColor:`hsl(230, 1%, 98%)`,color:`hsl(230, 8%, 24%)`},styles:[{types:[`comment`,`prolog`,`cdata`],style:{color:`hsl(230, 4%, 64%)`}},{types:[`doctype`,`punctuation`,`entity`],style:{color:`hsl(230, 8%, 24%)`}},{types:[`attr-name`,`class-name`,`boolean`,`constant`,`number`,`atrule`],style:{color:`hsl(35, 99%, 36%)`}},{types:[`keyword`],style:{color:`hsl(301, 63%, 40%)`}},{types:[`property`,`tag`,`symbol`,`deleted`,`important`],style:{color:`hsl(5, 74%, 59%)`}},{types:[`selector`,`string`,`char`,`builtin`,`inserted`,`regex`,`attr-value`,`punctuation`],style:{color:`hsl(119, 34%, 47%)`}},{types:[`variable`,`operator`,`function`],style:{color:`hsl(221, 87%, 60%)`}},{types:[`url`],style:{color:`hsl(198, 99%, 37%)`}},{types:[`deleted`],style:{textDecorationLine:`line-through`}},{types:[`inserted`],style:{textDecorationLine:`underline`}},{types:[`italic`],style:{fontStyle:`italic`}},{types:[`important`,`bold`],style:{fontWeight:`bold`}},{types:[`important`],style:{color:`hsl(230, 8%, 24%)`}}]},im={plain:{color:`#ebdbb2`,backgroundColor:`#292828`},styles:[{types:[`imports`,`class-name`,`maybe-class-name`,`constant`,`doctype`,`builtin`,`function`],style:{color:`#d8a657`}},{types:[`property-access`],style:{color:`#7daea3`}},{types:[`tag`],style:{color:`#e78a4e`}},{types:[`attr-name`,`char`,`url`,`regex`],style:{color:`#a9b665`}},{types:[`attr-value`,`string`],style:{color:`#89b482`}},{types:[`comment`,`prolog`,`cdata`,`operator`,`inserted`],style:{color:`#a89984`}},{types:[`delimiter`,`boolean`,`keyword`,`selector`,`important`,`atrule`,`property`,`variable`,`deleted`],style:{color:`#ea6962`}},{types:[`entity`,`number`,`symbol`],style:{color:`#d3869b`}}]},am={plain:{color:`#654735`,backgroundColor:`#f9f5d7`},styles:[{types:[`delimiter`,`boolean`,`keyword`,`selector`,`important`,`atrule`,`property`,`variable`,`deleted`],style:{color:`#af2528`}},{types:[`imports`,`class-name`,`maybe-class-name`,`constant`,`doctype`,`builtin`],style:{color:`#b4730e`}},{types:[`string`,`attr-value`],style:{color:`#477a5b`}},{types:[`property-access`],style:{color:`#266b79`}},{types:[`function`,`attr-name`,`char`,`url`],style:{color:`#72761e`}},{types:[`tag`],style:{color:`#b94c07`}},{types:[`comment`,`prolog`,`cdata`,`operator`,`inserted`],style:{color:`#a89984`}},{types:[`entity`,`number`,`symbol`],style:{color:`#924f79`}}]},om=e=>(0,w.useCallback)(t=>{var n=t,{className:r,style:i,line:a}=n;let o=Np(Mp({},Pp(n,[`className`,`style`,`line`])),{className:bp(`token-line`,r)});return typeof e==`object`&&`plain`in e&&(o.style=e.plain),typeof i==`object`&&(o.style=Mp(Mp({},o.style||{}),i)),o},[e]),sm=e=>{let t=(0,w.useCallback)(({types:t,empty:n})=>{if(e!=null)return t.length===1&&t[0]===`plain`?n==null?void 0:{display:`inline-block`}:t.length===1&&n!=null?e[t[0]]:Object.assign(n==null?{}:{display:`inline-block`},...t.map(t=>e[t]))},[e]);return(0,w.useCallback)(e=>{var n=e,{token:r,className:i,style:a}=n;let o=Np(Mp({},Pp(n,[`token`,`className`,`style`])),{className:bp(`token`,...r.types,i),children:r.content,style:t(r)});return a!=null&&(o.style=Mp(Mp({},o.style||{}),a)),o},[t])},cm=/\r\n|\r|\n/,lm=e=>{e.length===0?e.push({types:[`plain`],content:`
`,empty:!0}):e.length===1&&e[0].content===``&&(e[0].content=`
`,e[0].empty=!0)},um=(e,t)=>{let n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},dm=e=>{let t=[[]],n=[e],r=[0],i=[e.length],a=0,o=0,s=[],c=[s];for(;o>-1;){for(;(a=r[o]++)<i[o];){let e,l=t[o],u=n[o][a];if(typeof u==`string`?(l=o>0?l:[`plain`],e=u):(l=um(l,u.type),u.alias&&(l=um(l,u.alias)),e=u.content),typeof e!=`string`){o++,t.push(l),n.push(e),r.push(0),i.push(e.length);continue}let d=e.split(cm),f=d.length;s.push({types:l,content:d[0]});for(let e=1;e<f;e++)lm(s),c.push(s=[]),s.push({types:l,content:d[e]})}o--,t.pop(),n.pop(),r.pop(),i.pop()}return lm(s),c},fm=({prism:e,code:t,grammar:n,language:r})=>(0,w.useMemo)(()=>{if(n==null)return dm([t]);let i={code:t,grammar:n,language:r,tokens:[]};return e.hooks.run(`before-tokenize`,i),i.tokens=e.tokenize(t,n),e.hooks.run(`after-tokenize`,i),dm(i.tokens)},[t,n,r,e]),pm=(e,t)=>{let{plain:n}=e,r=e.styles.reduce((e,n)=>{let{languages:r,style:i}=n;return r&&!r.includes(t)||n.types.forEach(t=>{e[t]=Mp(Mp({},e[t]),i)}),e},{});return r.root=n,r.plain=Np(Mp({},n),{backgroundColor:void 0}),r},mm=({children:e,language:t,code:n,theme:r,prism:i})=>{let a=t.toLowerCase(),o=pm(r,a),s=om(o),c=sm(o),l=i.languages[a];return e({tokens:fm({prism:i,language:a,code:n,grammar:l}),className:`prism-code language-${a}`,style:o==null?{}:o.root,getLineProps:s,getTokenProps:c})},hm=e=>(0,w.createElement)(mm,Np(Mp({},e),{prism:e.prism||$,theme:e.theme||Qp,code:e.code,language:e.language}));function gm({title:e,code:t,language:n=`python`}){return(0,Y.jsxs)(`div`,{className:`code-block`,children:[e&&(0,Y.jsx)(`div`,{className:`code-block-title`,children:e}),(0,Y.jsx)(hm,{theme:Rp.nightOwl,code:t.trim(),language:n,children:({className:t,style:n,tokens:r,getLineProps:i,getTokenProps:a})=>(0,Y.jsx)(`pre`,{className:t,style:{...n,margin:0,borderRadius:e?`0 0 8px 8px`:`8px`,padding:`1.2rem`,overflow:`auto`,fontSize:`0.85rem`,lineHeight:`1.7`},children:r.map((e,t)=>(0,Y.jsxs)(`div`,{...i({line:e}),children:[(0,Y.jsx)(`span`,{className:`line-number`,children:t+1}),e.map((e,t)=>(0,Y.jsx)(`span`,{...a({token:e})},t))]},t))})}),(0,Y.jsx)(`style`,{children:`
        .line-number {
          display: inline-block;
          width: 2.5em;
          text-align: right;
          margin-right: 1em;
          color: rgba(255,255,255,0.2);
          user-select: none;
          font-size: 0.75rem;
        }
      `})]})}function _m({problem:e}){let{steps:t,title:n,pattern:r,difficulty:i}=e,[a,o]=(0,w.useState)(0),[s,c]=(0,w.useState)(!1),[l,u]=(0,w.useState)(1),d=(0,w.useRef)(null);(0,w.useEffect)(()=>{o(0),c(!1)},[e]),(0,w.useEffect)(()=>(s&&t.length>0&&(d.current=setInterval(()=>{o(e=>e>=t.length-1?(c(!1),e):e+1)},1e3/l)),()=>clearInterval(d.current)),[s,l,t.length]);let f=t[a]||t[0];return f?(0,Y.jsxs)(`div`,{className:`pv-container`,children:[(0,Y.jsxs)(`div`,{className:`pv-controls`,children:[(0,Y.jsxs)(`div`,{className:`pv-ctrl-group`,children:[(0,Y.jsx)(`button`,{className:`pv-btn`,onClick:()=>{o(0),c(!1)},title:`Reset`,children:`⟲`}),(0,Y.jsx)(`button`,{className:`pv-btn`,onClick:()=>o(Math.max(0,a-1)),disabled:a<=0,children:`◂`}),(0,Y.jsx)(`button`,{className:`pv-btn pv-btn-play`,onClick:()=>c(!s),children:s?`❚❚`:`▶`}),(0,Y.jsx)(`button`,{className:`pv-btn`,onClick:()=>o(Math.min(t.length-1,a+1)),disabled:a>=t.length-1,children:`▸`})]}),(0,Y.jsxs)(`div`,{className:`pv-ctrl-group`,children:[(0,Y.jsx)(`span`,{className:`pv-speed-label`,children:`Speed:`}),(0,Y.jsx)(`input`,{type:`range`,min:`0.5`,max:`3`,step:`0.5`,value:l,onChange:e=>u(parseFloat(e.target.value)),className:`pv-slider`}),(0,Y.jsxs)(`span`,{className:`pv-speed-val`,children:[l,`x`]})]}),(0,Y.jsxs)(`span`,{className:`pv-step-info`,children:[`Step `,a+1,`/`,t.length]})]}),(0,Y.jsxs)(`div`,{className:`pv-viz-area`,children:[f.type===`array`&&(0,Y.jsx)(vm,{step:f}),f.type===`string`&&(0,Y.jsx)(ym,{step:f}),f.type===`bars`&&(0,Y.jsx)(bm,{step:f}),f.type===`hashmap`&&(0,Y.jsx)(xm,{step:f}),f.type===`stack`&&(0,Y.jsx)(Sm,{step:f}),f.type===`queue`&&(0,Y.jsx)(Cm,{step:f}),f.type===`matrix`&&(0,Y.jsx)(wm,{step:f}),f.type===`pointers`&&(0,Y.jsx)(Tm,{step:f}),f.type===`twoarray`&&(0,Y.jsx)(Em,{step:f}),(!f.type||f.type===`info`)&&(0,Y.jsx)(Dm,{step:f})]}),(0,Y.jsx)(Q.div,{className:`pv-desc`,initial:{opacity:0,y:5},animate:{opacity:1,y:0},children:f.desc},a),f.vars&&(0,Y.jsx)(`div`,{className:`pv-vars`,children:Object.entries(f.vars).map(([e,t])=>(0,Y.jsxs)(`span`,{className:`pv-var`,children:[(0,Y.jsxs)(`span`,{className:`pv-var-name`,children:[e,`:`]}),` `,(0,Y.jsx)(`span`,{className:`pv-var-val`,children:String(t)})]},e))})]}):null}function vm({step:e}){let{data:t=[],highlights:n=[],pointers:r=[],sorted:i=[],swaps:a=[],window:o=[]}=e;return(0,Y.jsx)(`div`,{className:`pv-array`,children:t.map((e,t)=>{let s=`pv-cell`;return a.includes(t)?s+=` pv-swap`:n.includes(t)?s+=` pv-hl`:o.includes(t)?s+=` pv-window`:i.includes(t)&&(s+=` pv-sorted`),(0,Y.jsxs)(`div`,{className:`pv-cell-wrap`,children:[(0,Y.jsx)(Q.div,{className:s,layout:!0,animate:{y:a.includes(t)?-6:0},transition:{type:`spring`,stiffness:300,damping:20},children:e}),(0,Y.jsx)(`span`,{className:`pv-idx`,children:t}),r.filter(e=>e.idx===t).map((e,t)=>(0,Y.jsxs)(`span`,{className:`pv-ptr`,style:{color:e.color||`var(--accent-purple)`},children:[`▲`,e.label]},t))]},t)})})}function ym({step:e}){let{data:t=``,highlights:n=[],pointers:r=[],window:i=[]}=e,a=typeof t==`string`?t.split(``):t;return(0,Y.jsx)(`div`,{className:`pv-array`,children:a.map((e,t)=>{let a=`pv-cell pv-char`;return n.includes(t)?a+=` pv-hl`:i.includes(t)&&(a+=` pv-window`),(0,Y.jsxs)(`div`,{className:`pv-cell-wrap`,children:[(0,Y.jsx)(`div`,{className:a,children:e}),(0,Y.jsx)(`span`,{className:`pv-idx`,children:t}),r.filter(e=>e.idx===t).map((e,t)=>(0,Y.jsxs)(`span`,{className:`pv-ptr`,style:{color:e.color||`var(--accent-purple)`},children:[`▲`,e.label]},t))]},t)})})}function bm({step:e}){let{data:t=[],highlights:n=[],sorted:r=[],swaps:i=[],pivot:a}=e,o=Math.max(...t,1);return(0,Y.jsx)(`div`,{className:`pv-bars`,children:t.map((e,t)=>{let s=`var(--accent-cyan)`;return t===a?s=`var(--accent-purple)`:i.includes(t)?s=`var(--accent-red)`:n.includes(t)?s=`var(--accent-orange)`:r.includes(t)&&(s=`var(--accent-green)`),(0,Y.jsxs)(`div`,{className:`pv-bar-wrap`,children:[(0,Y.jsx)(Q.div,{className:`pv-bar`,animate:{height:`${e/o*160}px`,backgroundColor:s},transition:{type:`spring`,stiffness:300,damping:25}}),(0,Y.jsx)(`span`,{className:`pv-bar-val`,children:e})]},t)})})}function xm({step:e}){let{data:t=[],highlights:n=[]}=e;return(0,Y.jsx)(`div`,{className:`pv-hash`,children:t.map((e,t)=>(0,Y.jsxs)(Q.div,{className:`pv-hash-entry ${n.includes(t)?`pv-hl`:``}`,initial:{opacity:0,x:10},animate:{opacity:1,x:0},children:[(0,Y.jsx)(`span`,{className:`pv-hk`,children:e.key}),(0,Y.jsx)(`span`,{className:`pv-harrow`,children:`→`}),(0,Y.jsx)(`span`,{className:`pv-hv`,children:e.value})]},e.key||t))})}function Sm({step:e}){let{data:t=[],highlights:n=[]}=e;return(0,Y.jsxs)(`div`,{className:`pv-stack`,children:[(0,Y.jsx)(`div`,{className:`pv-stack-label`,children:`Top ↑`}),(0,Y.jsxs)(`div`,{className:`pv-stack-items`,children:[(0,Y.jsx)(_d,{children:t.map((e,t)=>(0,Y.jsx)(Q.div,{className:`pv-stack-item ${n.includes(t)?`pv-hl`:``} ${t===0?`pv-stack-top`:``}`,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:e},e+`-`+t))}),t.length===0&&(0,Y.jsx)(`div`,{className:`pv-empty`,children:`Empty`})]})]})}function Cm({step:e}){let{data:t=[],highlights:n=[]}=e;return(0,Y.jsxs)(`div`,{className:`pv-queue`,children:[(0,Y.jsx)(`span`,{className:`pv-q-label`,children:`Front →`}),(0,Y.jsx)(`div`,{className:`pv-q-items`,children:(0,Y.jsx)(_d,{children:t.map((e,t)=>(0,Y.jsx)(Q.div,{className:`pv-q-item ${n.includes(t)?`pv-hl`:``}`,initial:{opacity:0,x:30},animate:{opacity:1,x:0},exit:{opacity:0,x:-30},children:e},e+`-`+t))})}),(0,Y.jsx)(`span`,{className:`pv-q-label`,children:`← Rear`})]})}function wm({step:e}){let{data:t=[[]],highlights:n=[]}=e;return(0,Y.jsx)(`div`,{className:`pv-matrix`,children:t.map((e,t)=>(0,Y.jsx)(`div`,{className:`pv-matrix-row`,children:e.map((e,r)=>{let i=n.some(([e,n])=>e===t&&n===r);return(0,Y.jsx)(`div`,{className:`pv-matrix-cell ${i?`pv-hl`:``}`,children:e},r)})},t))})}function Tm({step:e}){let{data:t=[],highlights:n=[],pointers:r=[],window:i=[]}=e;return(0,Y.jsx)(`div`,{className:`pv-array`,children:t.map((e,t)=>{let a=`pv-cell`;return n.includes(t)?a+=` pv-hl`:i.includes(t)&&(a+=` pv-window`),(0,Y.jsxs)(`div`,{className:`pv-cell-wrap`,children:[(0,Y.jsx)(`div`,{className:a,children:e}),(0,Y.jsx)(`span`,{className:`pv-idx`,children:t}),r.filter(e=>e.idx===t).map((e,t)=>(0,Y.jsxs)(`span`,{className:`pv-ptr`,style:{color:e.color||`var(--accent-purple)`},children:[`▲`,e.label]},t))]},t)})})}function Em({step:e}){let{data1:t=[],data2:n=[],highlights1:r=[],highlights2:i=[],label1:a=`Input`,label2:o=`Output`}=e;return(0,Y.jsxs)(`div`,{className:`pv-twoarray`,children:[(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`div`,{className:`pv-ta-label`,children:a}),(0,Y.jsx)(`div`,{className:`pv-array`,children:t.map((e,t)=>(0,Y.jsx)(`div`,{className:`pv-cell-wrap`,children:(0,Y.jsx)(`div`,{className:`pv-cell ${r.includes(t)?`pv-hl`:``}`,children:e})},t))})]}),(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`div`,{className:`pv-ta-label`,children:o}),(0,Y.jsx)(`div`,{className:`pv-array`,children:n.map((e,t)=>(0,Y.jsx)(`div`,{className:`pv-cell-wrap`,children:(0,Y.jsx)(`div`,{className:`pv-cell ${i.includes(t)?`pv-hl`:``}`,children:e})},t))})]})]})}function Dm({step:e}){return(0,Y.jsx)(`div`,{className:`pv-info`,children:e.visual&&(0,Y.jsx)(`pre`,{className:`pv-info-pre`,children:e.visual})})}var Om={"Array Partition":{brute:{name:`Brute Force`,time:`O(n log n)`,space:`O(n)`,code:`def arrayPairSum(nums):
    nums.sort()
    result = 0
    for i in range(0, len(nums), 2):
        result += nums[i]
    return result`},better:{name:`Counting Sort`,time:`O(n + k)`,space:`O(k)`,code:`def arrayPairSum(nums):
    count = [0] * 20001
    for num in nums:
        count[num + 10000] += 1
    result, pick = 0, True
    for i in range(20001):
        while count[i] > 0:
            if pick:
                result += i - 10000
            pick = not pick
            count[i] -= 1
    return result`},optimal:{name:`Sort and Sum Evens`,time:`O(n log n)`,space:`O(1)`,code:`def arrayPairSum(nums):
    nums.sort()
    return sum(nums[::2])`}},"Best Time to Buy and Sell Stock":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(1)`,code:`def maxProfit(prices):
    max_profit = 0
    for i in range(len(prices)):
        for j in range(i + 1, len(prices)):
            max_profit = max(max_profit, prices[j] - prices[i])
    return max_profit`},better:{name:`Right Max Array`,time:`O(n)`,space:`O(n)`,code:`def maxProfit(prices):
    n = len(prices)
    right_max = [0] * n
    right_max[-1] = prices[-1]
    for i in range(n - 2, -1, -1):
        right_max[i] = max(right_max[i + 1], prices[i])
    return max(right_max[i] - prices[i] for i in range(n))`},optimal:{name:`One Pass Min Track`,time:`O(n)`,space:`O(1)`,code:`def maxProfit(prices):
    min_price = float('inf')
    max_profit = 0
    for price in prices:
        min_price = min(min_price, price)
        max_profit = max(max_profit, price - min_price)
    return max_profit`}},"Contains Duplicate":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(1)`,code:`def containsDuplicate(nums):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] == nums[j]:
                return True
    return False`},better:{name:`Sorting`,time:`O(n log n)`,space:`O(1)`,code:`def containsDuplicate(nums):
    nums.sort()
    for i in range(1, len(nums)):
        if nums[i] == nums[i - 1]:
            return True
    return False`},optimal:{name:`Hash Set`,time:`O(n)`,space:`O(n)`,code:`def containsDuplicate(nums):
    return len(nums) != len(set(nums))`}},"Diet Plan Performance":{brute:{name:`Brute Force`,time:`O(n * k)`,space:`O(1)`,code:`def dietPlanPerformance(calories, k, lower, upper):
    points = 0
    for i in range(len(calories) - k + 1):
        total = sum(calories[i:i + k])
        if total < lower:
            points -= 1
        elif total > upper:
            points += 1
    return points`},better:{name:`Prefix Sum`,time:`O(n)`,space:`O(n)`,code:`def dietPlanPerformance(calories, k, lower, upper):
    prefix = [0] * (len(calories) + 1)
    for i in range(len(calories)):
        prefix[i + 1] = prefix[i] + calories[i]
    points = 0
    for i in range(k, len(calories) + 1):
        total = prefix[i] - prefix[i - k]
        if total < lower: points -= 1
        elif total > upper: points += 1
    return points`},optimal:{name:`Sliding Window`,time:`O(n)`,space:`O(1)`,code:`def dietPlanPerformance(calories, k, lower, upper):
    points, window = 0, sum(calories[:k])
    if window < lower: points -= 1
    elif window > upper: points += 1
    for i in range(k, len(calories)):
        window += calories[i] - calories[i - k]
        if window < lower: points -= 1
        elif window > upper: points += 1
    return points`}},"Find Pivot Index":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(1)`,code:`def pivotIndex(nums):
    for i in range(len(nums)):
        left_sum = sum(nums[:i])
        right_sum = sum(nums[i + 1:])
        if left_sum == right_sum:
            return i
    return -1`},better:{name:`Total Sum Approach`,time:`O(n)`,space:`O(n)`,code:`def pivotIndex(nums):
    prefix = [0] * (len(nums) + 1)
    for i in range(len(nums)):
        prefix[i + 1] = prefix[i] + nums[i]
    total = prefix[-1]
    for i in range(len(nums)):
        if prefix[i] == total - prefix[i + 1]:
            return i
    return -1`},optimal:{name:`Left Sum Tracking`,time:`O(n)`,space:`O(1)`,code:`def pivotIndex(nums):
    total = sum(nums)
    left_sum = 0
    for i in range(len(nums)):
        if left_sum == total - left_sum - nums[i]:
            return i
        left_sum += nums[i]
    return -1`}},"Majority Element":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(1)`,code:`def majorityElement(nums):
    for num in nums:
        count = sum(1 for n in nums if n == num)
        if count > len(nums) // 2:
            return num`},better:{name:`Hash Map Count`,time:`O(n)`,space:`O(n)`,code:`def majorityElement(nums):
    from collections import Counter
    counts = Counter(nums)
    return max(counts, key=counts.get)`},optimal:{name:`Boyer-Moore Voting`,time:`O(n)`,space:`O(1)`,code:`def majorityElement(nums):
    candidate, count = nums[0], 0
    for num in nums:
        if count == 0:
            candidate = num
        count += 1 if num == candidate else -1
    return candidate`}},"Maximum Average Subarray I":{brute:{name:`Brute Force`,time:`O(n * k)`,space:`O(1)`,code:`def findMaxAverage(nums, k):
    max_avg = float('-inf')
    for i in range(len(nums) - k + 1):
        max_avg = max(max_avg, sum(nums[i:i+k]) / k)
    return max_avg`},better:{name:`Prefix Sum`,time:`O(n)`,space:`O(n)`,code:`def findMaxAverage(nums, k):
    prefix = [0] * (len(nums) + 1)
    for i in range(len(nums)):
        prefix[i+1] = prefix[i] + nums[i]
    max_sum = max(prefix[i+k] - prefix[i] for i in range(len(nums)-k+1))
    return max_sum / k`},optimal:{name:`Sliding Window`,time:`O(n)`,space:`O(1)`,code:`def findMaxAverage(nums, k):
    window = sum(nums[:k])
    max_sum = window
    for i in range(k, len(nums)):
        window += nums[i] - nums[i - k]
        max_sum = max(max_sum, window)
    return max_sum / k`}},"Maximum Consecutive Ones":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(1)`,code:`def findMaxConsecutiveOnes(nums):
    max_count = 0
    for i in range(len(nums)):
        count = 0
        for j in range(i, len(nums)):
            if nums[j] == 1: count += 1
            else: break
        max_count = max(max_count, count)
    return max_count`},better:{name:`Single Pass Counter`,time:`O(n)`,space:`O(1)`,code:`def findMaxConsecutiveOnes(nums):
    max_count = count = 0
    for num in nums:
        if num == 1:
            count += 1
            max_count = max(max_count, count)
        else:
            count = 0
    return max_count`},optimal:{name:`One-liner`,time:`O(n)`,space:`O(n)`,code:`def findMaxConsecutiveOnes(nums):
    return max(len(s) for s in ''.join(map(str, nums)).split('0'))`}},"Meeting Rooms":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(1)`,code:`def canAttendMeetings(intervals):
    for i in range(len(intervals)):
        for j in range(i + 1, len(intervals)):
            if intervals[i][0] < intervals[j][1] and intervals[j][0] < intervals[i][1]:
                return False
    return True`},better:{name:`Sort by Start`,time:`O(n log n)`,space:`O(1)`,code:`def canAttendMeetings(intervals):
    intervals.sort(key=lambda x: x[0])
    for i in range(1, len(intervals)):
        if intervals[i][0] < intervals[i - 1][1]:
            return False
    return True`},optimal:{name:`Sort by End`,time:`O(n log n)`,space:`O(1)`,code:`def canAttendMeetings(intervals):
    intervals.sort()
    return all(intervals[i][0] >= intervals[i-1][1] for i in range(1, len(intervals)))`}},"Missing Number":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(1)`,code:`def missingNumber(nums):
    for i in range(len(nums) + 1):
        if i not in nums:
            return i`},better:{name:`Sorting`,time:`O(n log n)`,space:`O(1)`,code:`def missingNumber(nums):
    nums.sort()
    for i in range(len(nums)):
        if nums[i] != i:
            return i
    return len(nums)`},optimal:{name:`XOR / Math`,time:`O(n)`,space:`O(1)`,code:`def missingNumber(nums):
    n = len(nums)
    return n * (n + 1) // 2 - sum(nums)`}},"Move Zeroes":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(1)`,code:`def moveZeroes(nums):
    for i in range(len(nums)):
        if nums[i] == 0:
            for j in range(i + 1, len(nums)):
                if nums[j] != 0:
                    nums[i], nums[j] = nums[j], nums[i]
                    break`},better:{name:`Extra Array`,time:`O(n)`,space:`O(n)`,code:`def moveZeroes(nums):
    result = [x for x in nums if x != 0]
    result += [0] * (len(nums) - len(result))
    for i in range(len(nums)):
        nums[i] = result[i]`},optimal:{name:`Two Pointer Swap`,time:`O(n)`,space:`O(1)`,code:`def moveZeroes(nums):
    j = 0
    for i in range(len(nums)):
        if nums[i] != 0:
            nums[i], nums[j] = nums[j], nums[i]
            j += 1`}},"Pascal's Triangle":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(n²)`,code:`def generate(numRows):
    result = []
    for i in range(numRows):
        row = [1] * (i + 1)
        for j in range(1, i):
            row[j] = result[i-1][j-1] + result[i-1][j]
        result.append(row)
    return result`},better:{name:`Math Combinatorics`,time:`O(n²)`,space:`O(n²)`,code:`def generate(numRows):
    from math import comb
    return [[comb(i, j) for j in range(i + 1)] for i in range(numRows)]`},optimal:{name:`Row by Row Build`,time:`O(n²)`,space:`O(n²)`,code:`def generate(numRows):
    res = [[1]]
    for i in range(1, numRows):
        prev = res[-1]
        res.append([1] + [prev[j]+prev[j+1] for j in range(len(prev)-1)] + [1])
    return res`}},"Pascal's Triangle II":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(n²)`,code:`def getRow(rowIndex):
    triangle = [[1]]
    for i in range(1, rowIndex + 1):
        row = [1] * (i + 1)
        for j in range(1, i):
            row[j] = triangle[i-1][j-1] + triangle[i-1][j]
        triangle.append(row)
    return triangle[rowIndex]`},better:{name:`Two Rows`,time:`O(n²)`,space:`O(n)`,code:`def getRow(rowIndex):
    prev = [1]
    for i in range(1, rowIndex + 1):
        curr = [1] * (i + 1)
        for j in range(1, i):
            curr[j] = prev[j-1] + prev[j]
        prev = curr
    return prev`},optimal:{name:`Single Row In-Place`,time:`O(n²)`,space:`O(n)`,code:`def getRow(rowIndex):
    row = [1] * (rowIndex + 1)
    for i in range(2, rowIndex + 1):
        for j in range(i - 1, 0, -1):
            row[j] += row[j - 1]
    return row`}},"Plus One":{brute:{name:`Brute Force`,time:`O(n)`,space:`O(n)`,code:`def plusOne(digits):
    num = int(''.join(map(str, digits))) + 1
    return [int(d) for d in str(num)]`},better:{name:`Carry Propagation`,time:`O(n)`,space:`O(1)`,code:`def plusOne(digits):
    for i in range(len(digits) - 1, -1, -1):
        if digits[i] < 9:
            digits[i] += 1
            return digits
        digits[i] = 0
    return [1] + digits`},optimal:{name:`Reverse Traverse`,time:`O(n)`,space:`O(1)`,code:`def plusOne(digits):
    carry = 1
    for i in range(len(digits) - 1, -1, -1):
        digits[i] += carry
        carry, digits[i] = divmod(digits[i], 10)
    return [1] + digits if carry else digits`}},"Remove Duplicates from Sorted Array":{brute:{name:`Brute Force`,time:`O(n)`,space:`O(n)`,code:`def removeDuplicates(nums):
    unique = list(dict.fromkeys(nums))
    for i in range(len(unique)):
        nums[i] = unique[i]
    return len(unique)`},better:{name:`Set Approach`,time:`O(n)`,space:`O(n)`,code:`def removeDuplicates(nums):
    seen = set()
    j = 0
    for num in nums:
        if num not in seen:
            seen.add(num)
            nums[j] = num
            j += 1
    return j`},optimal:{name:`Two Pointers`,time:`O(n)`,space:`O(1)`,code:`def removeDuplicates(nums):
    if not nums: return 0
    j = 0
    for i in range(1, len(nums)):
        if nums[i] != nums[j]:
            j += 1
            nums[j] = nums[i]
    return j + 1`}},"Remove Element":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(1)`,code:`def removeElement(nums, val):
    i = 0
    while i < len(nums):
        if nums[i] == val:
            nums[i:] = nums[i+1:] + [0]
            nums.pop()
        else:
            i += 1
    return i`},better:{name:`Copy Non-Val`,time:`O(n)`,space:`O(n)`,code:`def removeElement(nums, val):
    result = [x for x in nums if x != val]
    for i in range(len(result)):
        nums[i] = result[i]
    return len(result)`},optimal:{name:`Two Pointers`,time:`O(n)`,space:`O(1)`,code:`def removeElement(nums, val):
    j = 0
    for i in range(len(nums)):
        if nums[i] != val:
            nums[j] = nums[i]
            j += 1
    return j`}},"Single Number":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(1)`,code:`def singleNumber(nums):
    for i in range(len(nums)):
        if nums.count(nums[i]) == 1:
            return nums[i]`},better:{name:`Hash Map`,time:`O(n)`,space:`O(n)`,code:`def singleNumber(nums):
    from collections import Counter
    counts = Counter(nums)
    for num, cnt in counts.items():
        if cnt == 1:
            return num`},optimal:{name:`XOR`,time:`O(n)`,space:`O(1)`,code:`def singleNumber(nums):
    result = 0
    for num in nums:
        result ^= num
    return result`}},"Summary Ranges":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(n)`,code:`def summaryRanges(nums):
    result = []
    i = 0
    while i < len(nums):
        start = nums[i]
        while i + 1 < len(nums) and nums[i+1] == nums[i] + 1:
            i += 1
        if start == nums[i]:
            result.append(str(start))
        else:
            result.append(f"{start}->{nums[i]}")
        i += 1
    return result`},better:{name:`Two Pointers`,time:`O(n)`,space:`O(n)`,code:`def summaryRanges(nums):
    result, i = [], 0
    while i < len(nums):
        j = i
        while j + 1 < len(nums) and nums[j+1] - nums[j] == 1:
            j += 1
        result.append(str(nums[i]) if i == j else f"{nums[i]}->{nums[j]}")
        i = j + 1
    return result`},optimal:{name:`Single Pass`,time:`O(n)`,space:`O(n)`,code:`def summaryRanges(nums):
    res, i = [], 0
    for j in range(len(nums)):
        if j + 1 == len(nums) or nums[j+1] != nums[j] + 1:
            res.append(str(nums[i]) if i == j else f"{nums[i]}->{nums[j]}")
            i = j + 1
    return res`}},"First Missing Positive":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(1)`,code:`def firstMissingPositive(nums):
    i = 1
    while True:
        if i not in nums:
            return i
        i += 1`},better:{name:`Hash Set`,time:`O(n)`,space:`O(n)`,code:`def firstMissingPositive(nums):
    s = set(nums)
    i = 1
    while i in s:
        i += 1
    return i`},optimal:{name:`Index as Hash`,time:`O(n)`,space:`O(1)`,code:`def firstMissingPositive(nums):
    n = len(nums)
    for i in range(n):
        while 1 <= nums[i] <= n and nums[nums[i]-1] != nums[i]:
            nums[nums[i]-1], nums[i] = nums[i], nums[nums[i]-1]
    for i in range(n):
        if nums[i] != i + 1:
            return i + 1
    return n + 1`}},"Minimum Window Subsequence":{brute:{name:`Brute Force`,time:`O(n² * m)`,space:`O(1)`,code:`def minWindow(s1, s2):
    min_win = ""
    for i in range(len(s1)):
        if s1[i] == s2[0]:
            j = 0
            for k in range(i, len(s1)):
                if s1[k] == s2[j]:
                    j += 1
                if j == len(s2):
                    if not min_win or k - i + 1 < len(min_win):
                        min_win = s1[i:k+1]
                    break
    return min_win`},better:{name:`Two Pointer Forward-Back`,time:`O(n * m)`,space:`O(1)`,code:`def minWindow(s1, s2):
    min_win = ""
    i, j = 0, 0
    while i < len(s1):
        if s1[i] == s2[j]:
            j += 1
        if j == len(s2):
            end = i
            j -= 1
            while j >= 0:
                if s1[i] == s2[j]: j -= 1
                i -= 1
            i += 1
            if not min_win or end - i + 1 < len(min_win):
                min_win = s1[i:end+1]
            j = 0
        i += 1
    return min_win`},optimal:{name:`DP Approach`,time:`O(n * m)`,space:`O(n)`,code:`def minWindow(s1, s2):
    n, m = len(s1), len(s2)
    dp = [-1] * n
    for i in range(n):
        if s1[i] == s2[0]: dp[i] = i
    for j in range(1, m):
        ndp, last = [-1]*n, -1
        for i in range(n):
            if last >= 0 and s1[i] == s2[j]: ndp[i] = last
            if dp[i] >= 0: last = dp[i]
        dp = ndp
    start, length = 0, n + 1
    for i in range(n):
        if dp[i] >= 0 and i - dp[i] + 1 < length:
            start, length = dp[i], i - dp[i] + 1
    return s1[start:start+length] if length <= n else ""`}},"Subarrays with K Different Integers":{brute:{name:`Brute Force`,time:`O(n³)`,space:`O(n)`,code:`def subarraysWithKDistinct(nums, k):
    count = 0
    for i in range(len(nums)):
        for j in range(i, len(nums)):
            if len(set(nums[i:j+1])) == k:
                count += 1
    return count`},better:{name:`AtMost K Helper`,time:`O(n)`,space:`O(n)`,code:`def subarraysWithKDistinct(nums, k):
    from collections import defaultdict
    def atMost(k):
        count, left, res = defaultdict(int), 0, 0
        for right in range(len(nums)):
            if count[nums[right]] == 0: k -= 1
            count[nums[right]] += 1
            while k < 0:
                count[nums[left]] -= 1
                if count[nums[left]] == 0: k += 1
                left += 1
            res += right - left + 1
        return res
    return atMost(k) - atMost(k - 1)`},optimal:{name:`Sliding Window Two Pointers`,time:`O(n)`,space:`O(n)`,code:`def subarraysWithKDistinct(nums, k):
    from collections import defaultdict
    def atMost(k):
        cnt, l, res = defaultdict(int), 0, 0
        for r, v in enumerate(nums):
            if cnt[v] == 0: k -= 1
            cnt[v] += 1
            while k < 0:
                cnt[nums[l]] -= 1
                if cnt[nums[l]] == 0: k += 1
                l += 1
            res += r - l + 1
        return res
    return atMost(k) - atMost(k - 1)`}},"Trapping Rain Water":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(1)`,code:`def trap(height):
    water = 0
    for i in range(len(height)):
        left_max = max(height[:i+1])
        right_max = max(height[i:])
        water += min(left_max, right_max) - height[i]
    return water`},better:{name:`Prefix Max Arrays`,time:`O(n)`,space:`O(n)`,code:`def trap(height):
    n = len(height)
    left_max, right_max = [0]*n, [0]*n
    left_max[0] = height[0]
    for i in range(1, n): left_max[i] = max(left_max[i-1], height[i])
    right_max[-1] = height[-1]
    for i in range(n-2, -1, -1): right_max[i] = max(right_max[i+1], height[i])
    return sum(min(left_max[i], right_max[i]) - height[i] for i in range(n))`},optimal:{name:`Two Pointers`,time:`O(n)`,space:`O(1)`,code:`def trap(height):
    l, r = 0, len(height) - 1
    left_max = right_max = water = 0
    while l < r:
        if height[l] < height[r]:
            left_max = max(left_max, height[l])
            water += left_max - height[l]
            l += 1
        else:
            right_max = max(right_max, height[r])
            water += right_max - height[r]
            r -= 1
    return water`}},"3Sum":{brute:{name:`Brute Force`,time:`O(n³)`,space:`O(n)`,code:`def threeSum(nums):
    res = set()
    nums.sort()
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            for k in range(j+1, len(nums)):
                if nums[i]+nums[j]+nums[k] == 0:
                    res.add((nums[i], nums[j], nums[k]))
    return [list(t) for t in res]`},better:{name:`Hash Set`,time:`O(n²)`,space:`O(n)`,code:`def threeSum(nums):
    nums.sort()
    res = []
    for i in range(len(nums)):
        if i > 0 and nums[i] == nums[i-1]: continue
        seen = set()
        for j in range(i+1, len(nums)):
            comp = -nums[i]-nums[j]
            if comp in seen:
                res.append([nums[i], comp, nums[j]])
                while j+1 < len(nums) and nums[j]==nums[j+1]: j+=1
            seen.add(nums[j])
    return res`},optimal:{name:`Sort + Two Pointers`,time:`O(n²)`,space:`O(1)`,code:`def threeSum(nums):
    nums.sort()
    res = []
    for i in range(len(nums)-2):
        if i > 0 and nums[i] == nums[i-1]: continue
        l, r = i+1, len(nums)-1
        while l < r:
            s = nums[i]+nums[l]+nums[r]
            if s < 0: l += 1
            elif s > 0: r -= 1
            else:
                res.append([nums[i], nums[l], nums[r]])
                while l < r and nums[l]==nums[l+1]: l+=1
                while l < r and nums[r]==nums[r-1]: r-=1
                l += 1; r -= 1
    return res`}},"4Sum":{brute:{name:`Brute Force`,time:`O(n⁴)`,space:`O(n)`,code:`def fourSum(nums, target):
    nums.sort()
    res = set()
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            for k in range(j+1, len(nums)):
                for l in range(k+1, len(nums)):
                    if nums[i]+nums[j]+nums[k]+nums[l]==target:
                        res.add((nums[i],nums[j],nums[k],nums[l]))
    return [list(t) for t in res]`},better:{name:`Hash Map`,time:`O(n³)`,space:`O(n²)`,code:`def fourSum(nums, target):
    nums.sort()
    res, n = [], len(nums)
    for i in range(n-3):
        if i > 0 and nums[i]==nums[i-1]: continue
        for j in range(i+1, n-2):
            if j > i+1 and nums[j]==nums[j-1]: continue
            seen = set()
            for k in range(j+1, n):
                comp = target-nums[i]-nums[j]-nums[k]
                if comp in seen:
                    res.append([nums[i],nums[j],comp,nums[k]])
                    while k+1<n and nums[k]==nums[k+1]: k+=1
                seen.add(nums[k])
    return res`},optimal:{name:`Sort + Two Pointers`,time:`O(n³)`,space:`O(1)`,code:`def fourSum(nums, target):
    nums.sort()
    res, n = [], len(nums)
    for i in range(n-3):
        if i > 0 and nums[i]==nums[i-1]: continue
        for j in range(i+1, n-2):
            if j > i+1 and nums[j]==nums[j-1]: continue
            l, r = j+1, n-1
            while l < r:
                s = nums[i]+nums[j]+nums[l]+nums[r]
                if s < target: l += 1
                elif s > target: r -= 1
                else:
                    res.append([nums[i],nums[j],nums[l],nums[r]])
                    while l<r and nums[l]==nums[l+1]: l+=1
                    while l<r and nums[r]==nums[r-1]: r-=1
                    l+=1; r-=1
    return res`}},"Best Time to Buy and Sell Stock II":{brute:{name:`Brute Force`,time:`O(2^n)`,space:`O(n)`,code:`def maxProfit(prices):
    def helper(i, holding):
        if i == len(prices): return 0
        if holding:
            return max(helper(i+1, True), prices[i] + helper(i+1, False))
        else:
            return max(helper(i+1, False), -prices[i] + helper(i+1, True))
    return helper(0, False)`},better:{name:`DP`,time:`O(n)`,space:`O(n)`,code:`def maxProfit(prices):
    n = len(prices)
    hold, cash = [0]*n, [0]*n
    hold[0] = -prices[0]
    for i in range(1, n):
        hold[i] = max(hold[i-1], cash[i-1] - prices[i])
        cash[i] = max(cash[i-1], hold[i-1] + prices[i])
    return cash[-1]`},optimal:{name:`Greedy`,time:`O(n)`,space:`O(1)`,code:`def maxProfit(prices):
    profit = 0
    for i in range(1, len(prices)):
        if prices[i] > prices[i-1]:
            profit += prices[i] - prices[i-1]
    return profit`}},"Container With Most Water":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(1)`,code:`def maxArea(height):
    max_water = 0
    for i in range(len(height)):
        for j in range(i+1, len(height)):
            max_water = max(max_water, min(height[i], height[j]) * (j-i))
    return max_water`},better:{name:`Two Pointer from Ends`,time:`O(n)`,space:`O(1)`,code:`def maxArea(height):
    l, r = 0, len(height) - 1
    max_water = 0
    while l < r:
        w = (r - l) * min(height[l], height[r])
        max_water = max(max_water, w)
        if height[l] < height[r]: l += 1
        else: r -= 1
    return max_water`},optimal:{name:`Two Pointers Optimized`,time:`O(n)`,space:`O(1)`,code:`def maxArea(height):
    l, r, res = 0, len(height)-1, 0
    while l < r:
        res = max(res, min(height[l], height[r]) * (r-l))
        if height[l] < height[r]: l += 1
        else: r -= 1
    return res`}},"Find All Duplicates in an Array":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(1)`,code:`def findDuplicates(nums):
    res = []
    for i in range(len(nums)):
        count = 0
        for j in range(len(nums)):
            if nums[j] == nums[i]: count += 1
        if count == 2 and nums[i] not in res:
            res.append(nums[i])
    return res`},better:{name:`Hash Map Count`,time:`O(n)`,space:`O(n)`,code:`def findDuplicates(nums):
    from collections import Counter
    return [k for k, v in Counter(nums).items() if v == 2]`},optimal:{name:`Negate Index`,time:`O(n)`,space:`O(1)`,code:`def findDuplicates(nums):
    res = []
    for num in nums:
        idx = abs(num) - 1
        if nums[idx] < 0:
            res.append(abs(num))
        else:
            nums[idx] = -nums[idx]
    return res`}},"Find the Duplicate Number":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(1)`,code:`def findDuplicate(nums):
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] == nums[j]:
                return nums[i]`},better:{name:`Sorting`,time:`O(n log n)`,space:`O(1)`,code:`def findDuplicate(nums):
    nums.sort()
    for i in range(1, len(nums)):
        if nums[i] == nums[i-1]:
            return nums[i]`},optimal:{name:`Floyd's Cycle Detection`,time:`O(n)`,space:`O(1)`,code:`def findDuplicate(nums):
    slow = fast = nums[0]
    while True:
        slow, fast = nums[slow], nums[nums[fast]]
        if slow == fast: break
    slow = nums[0]
    while slow != fast:
        slow, fast = nums[slow], nums[fast]
    return slow`}},"Frequency of the Most Frequent Element":{brute:{name:`Brute Force`,time:`O(n² log n)`,space:`O(1)`,code:`def maxFrequency(nums, k):
    nums.sort()
    max_freq = 1
    for i in range(len(nums)):
        ops = k
        count = 1
        for j in range(i-1, -1, -1):
            ops -= nums[i] - nums[j]
            if ops < 0: break
            count += 1
        max_freq = max(max_freq, count)
    return max_freq`},better:{name:`Binary Search + Prefix Sum`,time:`O(n log n)`,space:`O(n)`,code:`def maxFrequency(nums, k):
    nums.sort()
    prefix = [0]*(len(nums)+1)
    for i in range(len(nums)):
        prefix[i+1] = prefix[i] + nums[i]
    res = 1
    for i in range(len(nums)):
        lo, hi = 0, i
        while lo < hi:
            mid = (lo+hi)//2
            cost = nums[i]*(i-mid) - (prefix[i]-prefix[mid])
            if cost <= k: hi = mid
            else: lo = mid + 1
        res = max(res, i - lo + 1)
    return res`},optimal:{name:`Sliding Window`,time:`O(n log n)`,space:`O(1)`,code:`def maxFrequency(nums, k):
    nums.sort()
    l, total, res = 0, 0, 1
    for r in range(len(nums)):
        total += nums[r]
        while nums[r] * (r - l + 1) - total > k:
            total -= nums[l]
            l += 1
        res = max(res, r - l + 1)
    return res`}},"Fruit Into Baskets":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(n)`,code:`def totalFruit(fruits):
    max_len = 0
    for i in range(len(fruits)):
        basket = set()
        for j in range(i, len(fruits)):
            basket.add(fruits[j])
            if len(basket) > 2: break
            max_len = max(max_len, j - i + 1)
    return max_len`},better:{name:`Hash Map Window`,time:`O(n)`,space:`O(1)`,code:`def totalFruit(fruits):
    from collections import defaultdict
    count = defaultdict(int)
    l, res = 0, 0
    for r in range(len(fruits)):
        count[fruits[r]] += 1
        while len(count) > 2:
            count[fruits[l]] -= 1
            if count[fruits[l]] == 0: del count[fruits[l]]
            l += 1
        res = max(res, r - l + 1)
    return res`},optimal:{name:`Sliding Window Optimized`,time:`O(n)`,space:`O(1)`,code:`def totalFruit(fruits):
    count = {}
    l = 0
    for r in range(len(fruits)):
        count[fruits[r]] = count.get(fruits[r], 0) + 1
        if len(count) > 2:
            count[fruits[l]] -= 1
            if count[fruits[l]] == 0: del count[fruits[l]]
            l += 1
    return len(fruits) - l`}},"Game of Life":{brute:{name:`Brute Force`,time:`O(m*n)`,space:`O(m*n)`,code:`def gameOfLife(board):
    import copy
    m, n = len(board), len(board[0])
    orig = copy.deepcopy(board)
    dirs = [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]
    for i in range(m):
        for j in range(n):
            live = sum(orig[i+d[0]][j+d[1]] for d in dirs if 0<=i+d[0]<m and 0<=j+d[1]<n)
            if orig[i][j] == 1 and (live < 2 or live > 3): board[i][j] = 0
            elif orig[i][j] == 0 and live == 3: board[i][j] = 1`},better:{name:`State Encoding`,time:`O(m*n)`,space:`O(1)`,code:`def gameOfLife(board):
    m, n = len(board), len(board[0])
    dirs = [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]
    for i in range(m):
        for j in range(n):
            live = sum((board[i+d[0]][j+d[1]] & 1) for d in dirs if 0<=i+d[0]<m and 0<=j+d[1]<n)
            if board[i][j] == 1 and live in (2,3): board[i][j] = 3
            elif board[i][j] == 0 and live == 3: board[i][j] = 2
    for i in range(m):
        for j in range(n):
            board[i][j] >>= 1`},optimal:{name:`Bit Manipulation In-Place`,time:`O(m*n)`,space:`O(1)`,code:`def gameOfLife(board):
    m, n = len(board), len(board[0])
    for i in range(m):
        for j in range(n):
            live = 0
            for di in range(-1, 2):
                for dj in range(-1, 2):
                    if (di or dj) and 0<=i+di<m and 0<=j+dj<n:
                        live += board[i+di][j+dj] & 1
            if board[i][j] & 1 and 2<=live<=3: board[i][j] |= 2
            elif not (board[i][j] & 1) and live==3: board[i][j] |= 2
    for i in range(m):
        for j in range(n): board[i][j] >>= 1`}},"Grumpy Bookstore Owner":{brute:{name:`Brute Force`,time:`O(n * minutes)`,space:`O(1)`,code:`def maxSatisfied(customers, grumpy, minutes):
    max_sat = 0
    for i in range(len(customers) - minutes + 1):
        sat = 0
        for j in range(len(customers)):
            if not grumpy[j] or i <= j < i + minutes:
                sat += customers[j]
        max_sat = max(max_sat, sat)
    return max_sat`},better:{name:`Prefix Sum`,time:`O(n)`,space:`O(n)`,code:`def maxSatisfied(customers, grumpy, minutes):
    base = sum(c for c, g in zip(customers, grumpy) if not g)
    extra = [c * g for c, g in zip(customers, grumpy)]
    prefix = [0] * (len(extra) + 1)
    for i in range(len(extra)):
        prefix[i+1] = prefix[i] + extra[i]
    max_extra = max(prefix[i+minutes]-prefix[i] for i in range(len(extra)-minutes+1))
    return base + max_extra`},optimal:{name:`Sliding Window`,time:`O(n)`,space:`O(1)`,code:`def maxSatisfied(customers, grumpy, minutes):
    base = sum(c for c, g in zip(customers, grumpy) if not g)
    window = sum(customers[i]*grumpy[i] for i in range(minutes))
    max_extra = window
    for i in range(minutes, len(customers)):
        window += customers[i]*grumpy[i] - customers[i-minutes]*grumpy[i-minutes]
        max_extra = max(max_extra, window)
    return base + max_extra`}},"Insert Interval":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(n)`,code:`def insert(intervals, newInterval):
    intervals.append(newInterval)
    intervals.sort()
    merged = [intervals[0]]
    for s, e in intervals[1:]:
        if s <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], e)
        else:
            merged.append([s, e])
    return merged`},better:{name:`Binary Search Insert`,time:`O(n)`,space:`O(n)`,code:`def insert(intervals, newInterval):
    import bisect
    starts = [i[0] for i in intervals]
    idx = bisect.bisect_left(starts, newInterval[0])
    intervals.insert(idx, newInterval)
    merged = [intervals[0]]
    for s, e in intervals[1:]:
        if s <= merged[-1][1]: merged[-1][1] = max(merged[-1][1], e)
        else: merged.append([s, e])
    return merged`},optimal:{name:`Linear Merge`,time:`O(n)`,space:`O(n)`,code:`def insert(intervals, newInterval):
    res, i = [], 0
    while i < len(intervals) and intervals[i][1] < newInterval[0]:
        res.append(intervals[i]); i += 1
    while i < len(intervals) and intervals[i][0] <= newInterval[1]:
        newInterval = [min(newInterval[0], intervals[i][0]), max(newInterval[1], intervals[i][1])]
        i += 1
    res.append(newInterval)
    return res + intervals[i:]`}},"Jump Game":{brute:{name:`Brute Force`,time:`O(2^n)`,space:`O(n)`,code:`def canJump(nums):
    def helper(i):
        if i >= len(nums) - 1: return True
        for j in range(1, nums[i] + 1):
            if helper(i + j): return True
        return False
    return helper(0)`},better:{name:`DP`,time:`O(n²)`,space:`O(n)`,code:`def canJump(nums):
    n = len(nums)
    dp = [False] * n
    dp[0] = True
    for i in range(1, n):
        for j in range(i):
            if dp[j] and j + nums[j] >= i:
                dp[i] = True
                break
    return dp[-1]`},optimal:{name:`Greedy`,time:`O(n)`,space:`O(1)`,code:`def canJump(nums):
    max_reach = 0
    for i in range(len(nums)):
        if i > max_reach: return False
        max_reach = max(max_reach, i + nums[i])
    return True`}},"Jump Game II":{brute:{name:`Brute Force`,time:`O(2^n)`,space:`O(n)`,code:`def jump(nums):
    def helper(i):
        if i >= len(nums) - 1: return 0
        min_jumps = float('inf')
        for j in range(1, nums[i] + 1):
            min_jumps = min(min_jumps, 1 + helper(i + j))
        return min_jumps
    return helper(0)`},better:{name:`BFS / DP`,time:`O(n²)`,space:`O(n)`,code:`def jump(nums):
    n = len(nums)
    dp = [float('inf')] * n
    dp[0] = 0
    for i in range(1, n):
        for j in range(i):
            if j + nums[j] >= i:
                dp[i] = min(dp[i], dp[j] + 1)
    return dp[-1]`},optimal:{name:`Greedy BFS`,time:`O(n)`,space:`O(1)`,code:`def jump(nums):
    jumps = cur_end = farthest = 0
    for i in range(len(nums) - 1):
        farthest = max(farthest, i + nums[i])
        if i == cur_end:
            jumps += 1
            cur_end = farthest
    return jumps`}},"Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(1)`,code:`def longestSubarray(nums, limit):
    res = 0
    for i in range(len(nums)):
        mn = mx = nums[i]
        for j in range(i, len(nums)):
            mn, mx = min(mn, nums[j]), max(mx, nums[j])
            if mx - mn > limit: break
            res = max(res, j - i + 1)
    return res`},better:{name:`Sorted Container`,time:`O(n log n)`,space:`O(n)`,code:`def longestSubarray(nums, limit):
    from sortedcontainers import SortedList
    sl = SortedList()
    l, res = 0, 0
    for r in range(len(nums)):
        sl.add(nums[r])
        while sl[-1] - sl[0] > limit:
            sl.remove(nums[l])
            l += 1
        res = max(res, r - l + 1)
    return res`},optimal:{name:`Monotonic Deques`,time:`O(n)`,space:`O(n)`,code:`def longestSubarray(nums, limit):
    from collections import deque
    maxd, mind = deque(), deque()
    l, res = 0, 0
    for r in range(len(nums)):
        while maxd and nums[r] >= nums[maxd[-1]]: maxd.pop()
        while mind and nums[r] <= nums[mind[-1]]: mind.pop()
        maxd.append(r); mind.append(r)
        while nums[maxd[0]] - nums[mind[0]] > limit:
            l += 1
            if maxd[0] < l: maxd.popleft()
            if mind[0] < l: mind.popleft()
        res = max(res, r - l + 1)
    return res`}},"Longest Subarray of 1s After Deleting One Element":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(1)`,code:`def longestSubarray(nums):
    res = 0
    for i in range(len(nums)):
        zeros = 0
        for j in range(i, len(nums)):
            if nums[j] == 0: zeros += 1
            if zeros > 1: break
            res = max(res, j - i)
    return res`},better:{name:`Prefix/Suffix`,time:`O(n)`,space:`O(n)`,code:`def longestSubarray(nums):
    n = len(nums)
    left, right = [0]*n, [0]*n
    for i in range(1, n):
        if nums[i-1] == 1: left[i] = left[i-1] + 1
    for i in range(n-2, -1, -1):
        if nums[i+1] == 1: right[i] = right[i+1] + 1
    return max(left[i] + right[i] for i in range(n))`},optimal:{name:`Sliding Window`,time:`O(n)`,space:`O(1)`,code:`def longestSubarray(nums):
    l, zeros, res = 0, 0, 0
    for r in range(len(nums)):
        if nums[r] == 0: zeros += 1
        while zeros > 1:
            if nums[l] == 0: zeros -= 1
            l += 1
        res = max(res, r - l)
    return res`}},"Longest Turbulent Subarray":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(1)`,code:`def maxTurbulenceSize(arr):
    res = 1
    for i in range(len(arr)):
        for j in range(i+1, len(arr)):
            valid = True
            for k in range(i, j):
                if k % 2 == i % 2:
                    if not (arr[k] > arr[k+1] if (k-i) % 2 == 0 else arr[k] < arr[k+1]):
                        valid = False; break
            if valid: res = max(res, j-i+1)
            else: break
    return res`},better:{name:`DP Two States`,time:`O(n)`,space:`O(n)`,code:`def maxTurbulenceSize(arr):
    n = len(arr)
    inc, dec = [1]*n, [1]*n
    for i in range(1, n):
        if arr[i] > arr[i-1]: inc[i] = dec[i-1] + 1
        elif arr[i] < arr[i-1]: dec[i] = inc[i-1] + 1
    return max(max(inc), max(dec))`},optimal:{name:`Sliding Window O(1) Space`,time:`O(n)`,space:`O(1)`,code:`def maxTurbulenceSize(arr):
    res = inc = dec = 1
    for i in range(1, len(arr)):
        if arr[i] > arr[i-1]:
            inc, dec = dec + 1, 1
        elif arr[i] < arr[i-1]:
            dec, inc = inc + 1, 1
        else:
            inc = dec = 1
        res = max(res, inc, dec)
    return res`}},"Max Consecutive Ones III":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(1)`,code:`def longestOnes(nums, k):
    res = 0
    for i in range(len(nums)):
        zeros = 0
        for j in range(i, len(nums)):
            if nums[j] == 0: zeros += 1
            if zeros > k: break
            res = max(res, j - i + 1)
    return res`},better:{name:`Prefix Sum + Binary Search`,time:`O(n log n)`,space:`O(n)`,code:`def longestOnes(nums, k):
    prefix = [0] * (len(nums) + 1)
    for i in range(len(nums)):
        prefix[i+1] = prefix[i] + (1 - nums[i])
    res = 0
    for r in range(len(nums)):
        lo, hi = 0, r
        while lo <= hi:
            mid = (lo+hi)//2
            if prefix[r+1]-prefix[mid] <= k: hi = mid-1
            else: lo = mid+1
        res = max(res, r - lo + 1)
    return res`},optimal:{name:`Sliding Window`,time:`O(n)`,space:`O(1)`,code:`def longestOnes(nums, k):
    l, res = 0, 0
    for r in range(len(nums)):
        if nums[r] == 0: k -= 1
        while k < 0:
            if nums[l] == 0: k += 1
            l += 1
        res = max(res, r - l + 1)
    return res`}},"Max Points You Can Obtain from Cards":{brute:{name:`Brute Force`,time:`O(k²)`,space:`O(1)`,code:`def maxScore(cardPoints, k):
    max_score = 0
    for i in range(k + 1):
        score = sum(cardPoints[:i]) + sum(cardPoints[len(cardPoints)-(k-i):])
        max_score = max(max_score, score)
    return max_score`},better:{name:`Prefix + Suffix Sum`,time:`O(k)`,space:`O(k)`,code:`def maxScore(cardPoints, k):
    left = [0] * (k + 1)
    right = [0] * (k + 1)
    for i in range(k):
        left[i+1] = left[i] + cardPoints[i]
        right[i+1] = right[i] + cardPoints[-(i+1)]
    return max(left[i] + right[k-i] for i in range(k+1))`},optimal:{name:`Min Subarray Window`,time:`O(n)`,space:`O(1)`,code:`def maxScore(cardPoints, k):
    n = len(cardPoints)
    window_size = n - k
    window_sum = sum(cardPoints[:window_size])
    min_sum = window_sum
    total = sum(cardPoints)
    for i in range(window_size, n):
        window_sum += cardPoints[i] - cardPoints[i - window_size]
        min_sum = min(min_sum, window_sum)
    return total - min_sum`}},"Maximize the Confusion of an Exam":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(1)`,code:`def maxConsecutiveAnswers(answerKey, k):
    res = 0
    for i in range(len(answerKey)):
        t_count = f_count = 0
        for j in range(i, len(answerKey)):
            if answerKey[j] == 'T': t_count += 1
            else: f_count += 1
            if min(t_count, f_count) > k: break
            res = max(res, j - i + 1)
    return res`},better:{name:`Two Sliding Windows`,time:`O(n)`,space:`O(1)`,code:`def maxConsecutiveAnswers(answerKey, k):
    def maxConsec(ch):
        l, count, res = 0, 0, 0
        for r in range(len(answerKey)):
            if answerKey[r] != ch: count += 1
            while count > k:
                if answerKey[l] != ch: count -= 1
                l += 1
            res = max(res, r - l + 1)
        return res
    return max(maxConsec('T'), maxConsec('F'))`},optimal:{name:`Single Sliding Window`,time:`O(n)`,space:`O(1)`,code:`def maxConsecutiveAnswers(answerKey, k):
    res = l = 0
    count = {'T': 0, 'F': 0}
    for r in range(len(answerKey)):
        count[answerKey[r]] += 1
        while min(count['T'], count['F']) > k:
            count[answerKey[l]] -= 1
            l += 1
        res = max(res, r - l + 1)
    return res`}},"Maximum Area of Island":{brute:{name:`Brute Force`,time:`O(m*n * m*n)`,space:`O(m*n)`,code:`def maxAreaOfIsland(grid):
    m, n = len(grid), len(grid[0])
    visited = set()
    def bfs(i, j):
        from collections import deque
        q = deque([(i, j)])
        visited.add((i, j))
        area = 0
        while q:
            x, y = q.popleft()
            area += 1
            for dx, dy in [(0,1),(0,-1),(1,0),(-1,0)]:
                nx, ny = x+dx, y+dy
                if 0<=nx<m and 0<=ny<n and (nx,ny) not in visited and grid[nx][ny]==1:
                    visited.add((nx, ny))
                    q.append((nx, ny))
        return area
    return max((bfs(i,j) for i in range(m) for j in range(n) if grid[i][j]==1 and (i,j) not in visited), default=0)`},better:{name:`DFS Recursive`,time:`O(m*n)`,space:`O(m*n)`,code:`def maxAreaOfIsland(grid):
    m, n = len(grid), len(grid[0])
    def dfs(i, j):
        if i < 0 or i >= m or j < 0 or j >= n or grid[i][j] == 0:
            return 0
        grid[i][j] = 0
        return 1 + dfs(i+1,j) + dfs(i-1,j) + dfs(i,j+1) + dfs(i,j-1)
    return max(dfs(i,j) for i in range(m) for j in range(n))`},optimal:{name:`DFS Iterative`,time:`O(m*n)`,space:`O(m*n)`,code:`def maxAreaOfIsland(grid):
    m, n = len(grid), len(grid[0])
    res = 0
    for i in range(m):
        for j in range(n):
            if grid[i][j] == 1:
                stack, area = [(i,j)], 0
                grid[i][j] = 0
                while stack:
                    x, y = stack.pop()
                    area += 1
                    for dx,dy in [(0,1),(0,-1),(1,0),(-1,0)]:
                        nx, ny = x+dx, y+dy
                        if 0<=nx<m and 0<=ny<n and grid[nx][ny]==1:
                            grid[nx][ny] = 0
                            stack.append((nx,ny))
                res = max(res, area)
    return res`}},"Maximum Erasure Value":{brute:{name:`Brute Force`,time:`O(n³)`,space:`O(n)`,code:`def maximumUniqueSubarray(nums):
    res = 0
    for i in range(len(nums)):
        for j in range(i, len(nums)):
            sub = nums[i:j+1]
            if len(sub) == len(set(sub)):
                res = max(res, sum(sub))
    return res`},better:{name:`Set + Prefix Sum`,time:`O(n)`,space:`O(n)`,code:`def maximumUniqueSubarray(nums):
    seen = set()
    l, res, curr = 0, 0, 0
    for r in range(len(nums)):
        while nums[r] in seen:
            seen.remove(nums[l])
            curr -= nums[l]
            l += 1
        seen.add(nums[r])
        curr += nums[r]
        res = max(res, curr)
    return res`},optimal:{name:`Sliding Window + HashMap`,time:`O(n)`,space:`O(n)`,code:`def maximumUniqueSubarray(nums):
    last_idx = {}
    l, res, curr = 0, 0, 0
    for r in range(len(nums)):
        if nums[r] in last_idx and last_idx[nums[r]] >= l:
            while l <= last_idx[nums[r]]:
                curr -= nums[l]
                l += 1
        curr += nums[r]
        last_idx[nums[r]] = r
        res = max(res, curr)
    return res`}},"Maximum Product Subarray":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(1)`,code:`def maxProduct(nums):
    res = nums[0]
    for i in range(len(nums)):
        prod = 1
        for j in range(i, len(nums)):
            prod *= nums[j]
            res = max(res, prod)
    return res`},better:{name:`DP Two Arrays`,time:`O(n)`,space:`O(n)`,code:`def maxProduct(nums):
    n = len(nums)
    max_dp, min_dp = [0]*n, [0]*n
    max_dp[0] = min_dp[0] = nums[0]
    for i in range(1, n):
        candidates = [nums[i], nums[i]*max_dp[i-1], nums[i]*min_dp[i-1]]
        max_dp[i], min_dp[i] = max(candidates), min(candidates)
    return max(max_dp)`},optimal:{name:`Track Max/Min`,time:`O(n)`,space:`O(1)`,code:`def maxProduct(nums):
    res = cur_max = cur_min = nums[0]
    for num in nums[1:]:
        candidates = (num, num * cur_max, num * cur_min)
        cur_max, cur_min = max(candidates), min(candidates)
        res = max(res, cur_max)
    return res`}},"Maximum Subarray":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(1)`,code:`def maxSubArray(nums):
    res = float('-inf')
    for i in range(len(nums)):
        curr = 0
        for j in range(i, len(nums)):
            curr += nums[j]
            res = max(res, curr)
    return res`},better:{name:`Divide and Conquer`,time:`O(n log n)`,space:`O(log n)`,code:`def maxSubArray(nums):
    def helper(l, r):
        if l == r: return nums[l]
        mid = (l + r) // 2
        left = helper(l, mid)
        right = helper(mid + 1, r)
        left_sum = cur = 0
        for i in range(mid, l - 1, -1):
            cur += nums[i]; left_sum = max(left_sum, cur)
        right_sum = cur = 0
        for i in range(mid + 1, r + 1):
            cur += nums[i]; right_sum = max(right_sum, cur)
        return max(left, right, left_sum + right_sum)
    return helper(0, len(nums) - 1)`},optimal:{name:`Kadane's Algorithm`,time:`O(n)`,space:`O(1)`,code:`def maxSubArray(nums):
    max_sum = cur_sum = nums[0]
    for num in nums[1:]:
        cur_sum = max(num, cur_sum + num)
        max_sum = max(max_sum, cur_sum)
    return max_sum`}},"Minimum Size Subarray Sum":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(1)`,code:`def minSubArrayLen(target, nums):
    res = float('inf')
    for i in range(len(nums)):
        total = 0
        for j in range(i, len(nums)):
            total += nums[j]
            if total >= target:
                res = min(res, j - i + 1)
                break
    return res if res != float('inf') else 0`},better:{name:`Binary Search + Prefix Sum`,time:`O(n log n)`,space:`O(n)`,code:`def minSubArrayLen(target, nums):
    import bisect
    prefix = [0]
    for num in nums: prefix.append(prefix[-1] + num)
    res = float('inf')
    for i in range(len(prefix)):
        j = bisect.bisect_left(prefix, prefix[i] + target)
        if j < len(prefix):
            res = min(res, j - i)
    return res if res != float('inf') else 0`},optimal:{name:`Sliding Window`,time:`O(n)`,space:`O(1)`,code:`def minSubArrayLen(target, nums):
    l, total, res = 0, 0, float('inf')
    for r in range(len(nums)):
        total += nums[r]
        while total >= target:
            res = min(res, r - l + 1)
            total -= nums[l]
            l += 1
    return res if res != float('inf') else 0`}},"Next Permutation":{brute:{name:`Brute Force`,time:`O(n! * n)`,space:`O(n!)`,code:`def nextPermutation(nums):
    from itertools import permutations
    perms = sorted(set(permutations(nums)))
    idx = perms.index(tuple(nums))
    nxt = perms[(idx + 1) % len(perms)]
    for i in range(len(nums)):
        nums[i] = nxt[i]`},better:{name:`Find and Swap`,time:`O(n)`,space:`O(n)`,code:`def nextPermutation(nums):
    n = len(nums)
    i = n - 2
    while i >= 0 and nums[i] >= nums[i+1]: i -= 1
    if i >= 0:
        j = n - 1
        while nums[j] <= nums[i]: j -= 1
        nums[i], nums[j] = nums[j], nums[i]
    nums[i+1:] = sorted(nums[i+1:])`},optimal:{name:`In-Place Reverse`,time:`O(n)`,space:`O(1)`,code:`def nextPermutation(nums):
    i = len(nums) - 2
    while i >= 0 and nums[i] >= nums[i+1]: i -= 1
    if i >= 0:
        j = len(nums) - 1
        while nums[j] <= nums[i]: j -= 1
        nums[i], nums[j] = nums[j], nums[i]
    l, r = i + 1, len(nums) - 1
    while l < r:
        nums[l], nums[r] = nums[r], nums[l]
        l += 1; r -= 1`}},"Number of Islands":{brute:{name:`Brute Force`,time:`O(m*n)`,space:`O(m*n)`,code:`def numIslands(grid):
    from collections import deque
    m, n = len(grid), len(grid[0])
    count = 0
    for i in range(m):
        for j in range(n):
            if grid[i][j] == '1':
                count += 1
                q = deque([(i, j)])
                grid[i][j] = '0'
                while q:
                    x, y = q.popleft()
                    for dx, dy in [(0,1),(0,-1),(1,0),(-1,0)]:
                        nx, ny = x+dx, y+dy
                        if 0<=nx<m and 0<=ny<n and grid[nx][ny]=='1':
                            grid[nx][ny] = '0'
                            q.append((nx,ny))
    return count`},better:{name:`DFS`,time:`O(m*n)`,space:`O(m*n)`,code:`def numIslands(grid):
    m, n = len(grid), len(grid[0])
    def dfs(i, j):
        if i<0 or i>=m or j<0 or j>=n or grid[i][j]=='0': return
        grid[i][j] = '0'
        dfs(i+1,j); dfs(i-1,j); dfs(i,j+1); dfs(i,j-1)
    count = 0
    for i in range(m):
        for j in range(n):
            if grid[i][j] == '1':
                dfs(i, j)
                count += 1
    return count`},optimal:{name:`Union Find`,time:`O(m*n * α(m*n))`,space:`O(m*n)`,code:`def numIslands(grid):
    m, n = len(grid), len(grid[0])
    parent = list(range(m * n))
    def find(x):
        while parent[x] != x: parent[x] = parent[parent[x]]; x = parent[x]
        return x
    def union(a, b): parent[find(a)] = find(b)
    for i in range(m):
        for j in range(n):
            if grid[i][j] == '1':
                if i+1<m and grid[i+1][j]=='1': union(i*n+j,(i+1)*n+j)
                if j+1<n and grid[i][j+1]=='1': union(i*n+j,i*n+j+1)
    return len(set(find(i*n+j) for i in range(m) for j in range(n) if grid[i][j]=='1'))`}},"Number of Sub-arrays of Size K and Average >= Threshold":{brute:{name:`Brute Force`,time:`O(n * k)`,space:`O(1)`,code:`def numOfSubarrays(arr, k, threshold):
    count = 0
    for i in range(len(arr) - k + 1):
        if sum(arr[i:i+k]) / k >= threshold:
            count += 1
    return count`},better:{name:`Prefix Sum`,time:`O(n)`,space:`O(n)`,code:`def numOfSubarrays(arr, k, threshold):
    prefix = [0] * (len(arr) + 1)
    for i in range(len(arr)):
        prefix[i+1] = prefix[i] + arr[i]
    target = k * threshold
    return sum(1 for i in range(k, len(arr)+1) if prefix[i]-prefix[i-k] >= target)`},optimal:{name:`Sliding Window`,time:`O(n)`,space:`O(1)`,code:`def numOfSubarrays(arr, k, threshold):
    target = k * threshold
    window = sum(arr[:k])
    count = 1 if window >= target else 0
    for i in range(k, len(arr)):
        window += arr[i] - arr[i - k]
        if window >= target: count += 1
    return count`}},"Product of Array Except Self":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(n)`,code:`def productExceptSelf(nums):
    n = len(nums)
    res = [1] * n
    for i in range(n):
        for j in range(n):
            if i != j:
                res[i] *= nums[j]
    return res`},better:{name:`Prefix and Suffix Arrays`,time:`O(n)`,space:`O(n)`,code:`def productExceptSelf(nums):
    n = len(nums)
    left, right = [1]*n, [1]*n
    for i in range(1, n): left[i] = left[i-1] * nums[i-1]
    for i in range(n-2, -1, -1): right[i] = right[i+1] * nums[i+1]
    return [left[i] * right[i] for i in range(n)]`},optimal:{name:`Single Output Array`,time:`O(n)`,space:`O(1)`,code:`def productExceptSelf(nums):
    n = len(nums)
    res = [1] * n
    for i in range(1, n): res[i] = res[i-1] * nums[i-1]
    right = 1
    for i in range(n-1, -1, -1):
        res[i] *= right
        right *= nums[i]
    return res`}},"Rotate Array":{brute:{name:`Brute Force`,time:`O(n * k)`,space:`O(1)`,code:`def rotate(nums, k):
    k %= len(nums)
    for _ in range(k):
        last = nums.pop()
        nums.insert(0, last)`},better:{name:`Extra Array`,time:`O(n)`,space:`O(n)`,code:`def rotate(nums, k):
    n = len(nums)
    k %= n
    rotated = nums[n-k:] + nums[:n-k]
    for i in range(n):
        nums[i] = rotated[i]`},optimal:{name:`Reverse Three Times`,time:`O(n)`,space:`O(1)`,code:`def rotate(nums, k):
    def reverse(l, r):
        while l < r:
            nums[l], nums[r] = nums[r], nums[l]
            l += 1; r -= 1
    k %= len(nums)
    reverse(0, len(nums)-1)
    reverse(0, k-1)
    reverse(k, len(nums)-1)`}},"Rotate Image":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(n²)`,code:`def rotate(matrix):
    n = len(matrix)
    copy = [row[:] for row in matrix]
    for i in range(n):
        for j in range(n):
            matrix[j][n-1-i] = copy[i][j]`},better:{name:`Transpose + Reverse`,time:`O(n²)`,space:`O(1)`,code:`def rotate(matrix):
    n = len(matrix)
    for i in range(n):
        for j in range(i+1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    for row in matrix:
        row.reverse()`},optimal:{name:`Four-way Swap`,time:`O(n²)`,space:`O(1)`,code:`def rotate(matrix):
    n = len(matrix)
    for i in range(n // 2):
        for j in range(i, n - i - 1):
            tmp = matrix[i][j]
            matrix[i][j] = matrix[n-1-j][i]
            matrix[n-1-j][i] = matrix[n-1-i][n-1-j]
            matrix[n-1-i][n-1-j] = matrix[j][n-1-i]
            matrix[j][n-1-i] = tmp`}},"Set Matrix Zeroes":{brute:{name:`Brute Force`,time:`O(m*n*(m+n))`,space:`O(m*n)`,code:`def setZeroes(matrix):
    m, n = len(matrix), len(matrix[0])
    zeros = [(i,j) for i in range(m) for j in range(n) if matrix[i][j]==0]
    for i, j in zeros:
        for k in range(n): matrix[i][k] = 0
        for k in range(m): matrix[k][j] = 0`},better:{name:`Row/Col Sets`,time:`O(m*n)`,space:`O(m+n)`,code:`def setZeroes(matrix):
    m, n = len(matrix), len(matrix[0])
    rows, cols = set(), set()
    for i in range(m):
        for j in range(n):
            if matrix[i][j] == 0:
                rows.add(i); cols.add(j)
    for i in range(m):
        for j in range(n):
            if i in rows or j in cols:
                matrix[i][j] = 0`},optimal:{name:`First Row/Col as Marker`,time:`O(m*n)`,space:`O(1)`,code:`def setZeroes(matrix):
    m, n = len(matrix), len(matrix[0])
    first_row = any(matrix[0][j]==0 for j in range(n))
    first_col = any(matrix[i][0]==0 for i in range(m))
    for i in range(1, m):
        for j in range(1, n):
            if matrix[i][j] == 0: matrix[i][0] = matrix[0][j] = 0
    for i in range(1, m):
        for j in range(1, n):
            if matrix[i][0]==0 or matrix[0][j]==0: matrix[i][j] = 0
    if first_row:
        for j in range(n): matrix[0][j] = 0
    if first_col:
        for i in range(m): matrix[i][0] = 0`}},"Spiral Matrix":{brute:{name:`Brute Force`,time:`O(m*n)`,space:`O(m*n)`,code:`def spiralOrder(matrix):
    if not matrix: return []
    m, n = len(matrix), len(matrix[0])
    visited = [[False]*n for _ in range(m)]
    dirs = [(0,1),(1,0),(0,-1),(-1,0)]
    res, d, r, c = [], 0, 0, 0
    for _ in range(m * n):
        res.append(matrix[r][c])
        visited[r][c] = True
        nr, nc = r+dirs[d][0], c+dirs[d][1]
        if not (0<=nr<m and 0<=nc<n and not visited[nr][nc]):
            d = (d + 1) % 4
            nr, nc = r+dirs[d][0], c+dirs[d][1]
        r, c = nr, nc
    return res`},better:{name:`Layer by Layer`,time:`O(m*n)`,space:`O(1)`,code:`def spiralOrder(matrix):
    res = []
    while matrix:
        res += matrix.pop(0)
        if matrix and matrix[0]:
            for row in matrix: res.append(row.pop())
        if matrix: res += matrix.pop()[::-1]
        if matrix and matrix[0]:
            for row in matrix[::-1]: res.append(row.pop(0))
    return res`},optimal:{name:`Boundary Shrink`,time:`O(m*n)`,space:`O(1)`,code:`def spiralOrder(matrix):
    res = []
    top, bottom, left, right = 0, len(matrix)-1, 0, len(matrix[0])-1
    while top <= bottom and left <= right:
        for j in range(left, right+1): res.append(matrix[top][j])
        top += 1
        for i in range(top, bottom+1): res.append(matrix[i][right])
        right -= 1
        if top <= bottom:
            for j in range(right, left-1, -1): res.append(matrix[bottom][j])
            bottom -= 1
        if left <= right:
            for i in range(bottom, top-1, -1): res.append(matrix[i][left])
            left += 1
    return res`}},"Two Sum II - Input Array Is Sorted":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(1)`,code:`def twoSum(numbers, target):
    for i in range(len(numbers)):
        for j in range(i+1, len(numbers)):
            if numbers[i] + numbers[j] == target:
                return [i+1, j+1]`},better:{name:`Binary Search`,time:`O(n log n)`,space:`O(1)`,code:`def twoSum(numbers, target):
    import bisect
    for i in range(len(numbers)):
        comp = target - numbers[i]
        j = bisect.bisect_left(numbers, comp, i+1)
        if j < len(numbers) and numbers[j] == comp:
            return [i+1, j+1]`},optimal:{name:`Two Pointers`,time:`O(n)`,space:`O(1)`,code:`def twoSum(numbers, target):
    l, r = 0, len(numbers) - 1
    while l < r:
        s = numbers[l] + numbers[r]
        if s == target: return [l+1, r+1]
        elif s < target: l += 1
        else: r -= 1`}},"Add Binary":{brute:{name:`Brute Force`,time:`O(n)`,space:`O(n)`,code:`def addBinary(a, b):
    return bin(int(a, 2) + int(b, 2))[2:]`},better:{name:`Character by Character`,time:`O(n)`,space:`O(n)`,code:`def addBinary(a, b):
    result = []
    carry = 0
    i, j = len(a)-1, len(b)-1
    while i >= 0 or j >= 0 or carry:
        total = carry
        if i >= 0: total += int(a[i]); i -= 1
        if j >= 0: total += int(b[j]); j -= 1
        result.append(str(total % 2))
        carry = total // 2
    return ''.join(reversed(result))`},optimal:{name:`Bit Manipulation`,time:`O(n)`,space:`O(n)`,code:`def addBinary(a, b):
    res, carry = [], 0
    a, b = list(a), list(b)
    while a or b or carry:
        carry += int(a.pop()) if a else 0
        carry += int(b.pop()) if b else 0
        res.append(str(carry % 2))
        carry //= 2
    return ''.join(res[::-1])`}},"First Unique Character in a String":{brute:{name:`Brute Force`,time:`O(n²)`,space:`O(1)`,code:`def firstUniqChar(s):
    for i in range(len(s)):
        unique = True
        for j in range(len(s)):
            if i != j and s[i] == s[j]:
                unique = False
                break
        if unique: return i
    return -1`},better:{name:`Counter`,time:`O(n)`,space:`O(1)`,code:`def firstUniqChar(s):
    from collections import Counter
    count = Counter(s)
    for i, ch in enumerate(s):
        if count[ch] == 1:
            return i
    return -1`},optimal:{name:`Single Pass HashMap`,time:`O(n)`,space:`O(1)`,code:`def firstUniqChar(s):
    count = {}
    for ch in s:
        count[ch] = count.get(ch, 0) + 1
    for i, ch in enumerate(s):
        if count[ch] == 1: return i
    return -1`}},"Implement strStr()":{brute:{name:`Brute Force`,time:`O(n * m)`,space:`O(1)`,code:`def strStr(haystack, needle):
    if not needle: return 0
    for i in range(len(haystack) - len(needle) + 1):
        if haystack[i:i+len(needle)] == needle:
            return i
    return -1`},better:{name:`Rolling Hash (Rabin-Karp)`,time:`O(n + m)`,space:`O(1)`,code:`def strStr(haystack, needle):
    if not needle: return 0
    n, m = len(haystack), len(needle)
    base, mod = 26, 10**9+7
    target = sum(ord(needle[i])*pow(base,m-1-i,mod) for i in range(m)) % mod
    h = sum(ord(haystack[i])*pow(base,m-1-i,mod) for i in range(m)) % mod
    if h == target and haystack[:m]==needle: return 0
    for i in range(1, n-m+1):
        h = (h*base - ord(haystack[i-1])*pow(base,m,mod) + ord(haystack[i+m-1])) % mod
        if h == target and haystack[i:i+m]==needle: return i
    return -1`},optimal:{name:`KMP`,time:`O(n + m)`,space:`O(m)`,code:`def strStr(haystack, needle):
    if not needle: return 0
    lps, j = [0]*len(needle), 0
    for i in range(1, len(needle)):
        while j and needle[i]!=needle[j]: j = lps[j-1]
        if needle[i]==needle[j]: j += 1
        lps[i] = j
    j = 0
    for i in range(len(haystack)):
        while j and haystack[i]!=needle[j]: j = lps[j-1]
        if haystack[i]==needle[j]: j += 1
        if j == len(needle): return i - j + 1
    return -1`}},"Is Subsequence":{brute:{name:`Brute Force`,time:`O(n * 2^n)`,space:`O(n)`,code:`def isSubsequence(s, t):
    if not s: return True
    def generate(idx, curr):
        if len(curr) == len(s):
            return curr == s
        for i in range(idx, len(t)):
            if generate(i + 1, curr + t[i]):
                return True
        return False
    return generate(0, "")`},better:{name:`Two Pointers`,time:`O(n)`,space:`O(1)`,code:`def isSubsequence(s, t):
    i = j = 0
    while i < len(s) and j < len(t):
        if s[i] == t[j]:
            i += 1
        j += 1
    return i == len(s)`},optimal:{name:`Binary Search (for follow-up)`,time:`O(m log n)`,space:`O(n)`,code:`def isSubsequence(s, t):
    from collections import defaultdict
    import bisect
    idx_map = defaultdict(list)
    for i, ch in enumerate(t):
        idx_map[ch].append(i)
    prev = -1
    for ch in s:
        if ch not in idx_map: return False
        pos = bisect.bisect_right(idx_map[ch], prev)
        if pos == len(idx_map[ch]): return False
        prev = idx_map[ch][pos]
    return True`}},"Longest Common Prefix":{brute:{name:`Brute Force`,time:`O(S) where S = sum of all chars`,space:`O(1)`,code:`def longestCommonPrefix(strs):
    if not strs: return ""
    prefix = strs[0]
    for s in strs[1:]:
        while not s.startswith(prefix):
            prefix = prefix[:-1]
            if not prefix: return ""
    return prefix`},better:{name:`Vertical Scan`,time:`O(S)`,space:`O(1)`,code:`def longestCommonPrefix(strs):
    if not strs: return ""
    for i in range(len(strs[0])):
        ch = strs[0][i]
        for s in strs[1:]:
            if i >= len(s) or s[i] != ch:
                return strs[0][:i]
    return strs[0]`},optimal:{name:`Sort and Compare`,time:`O(n * m log n)`,space:`O(1)`,code:`def longestCommonPrefix(strs):
    if not strs: return ""
    strs.sort()
    first, last = strs[0], strs[-1]
    i = 0
    while i < len(first) and i < len(last) and first[i] == last[i]:
        i += 1
    return first[:i]`}},"Reverse String":{brute:{name:`Brute Force`,time:`O(n)`,space:`O(n)`,code:`def reverseString(s):
    return s[::-1]  # creates new string`},better:{name:`Stack`,time:`O(n)`,space:`O(n)`,code:`def reverseString(s):
    stack = list(s)
    result = []
    while stack:
        result.append(stack.pop())
    return ''.join(result)`},optimal:{name:`Two Pointers`,time:`O(n)`,space:`O(1)`,code:`def reverseString(s):
    s = list(s)
    l, r = 0, len(s) - 1
    while l < r:
        s[l], s[r] = s[r], s[l]
        l += 1
        r -= 1
    return ''.join(s)`}},"Reverse Vowels of a String":{brute:{name:`Brute Force`,time:`O(n)`,space:`O(n)`,code:`def reverseVowels(s):
    vowels = [c for c in s if c in 'aeiouAEIOU']
    result = []
    for c in s:
        if c in 'aeiouAEIOU':
            result.append(vowels.pop())
        else:
            result.append(c)
    return ''.join(result)`},better:{name:`List Conversion`,time:`O(n)`,space:`O(n)`,code:`def reverseVowels(s):
    s = list(s)
    vowels = set('aeiouAEIOU')
    idxs = [i for i, c in enumerate(s) if c in vowels]
    l, r = 0, len(idxs) - 1
    while l < r:
        s[idxs[l]], s[idxs[r]] = s[idxs[r]], s[idxs[l]]
        l += 1
        r -= 1
    return ''.join(s)`},optimal:{name:`Two Pointers`,time:`O(n)`,space:`O(1)`,code:`def reverseVowels(s):
    s = list(s)
    vowels = set('aeiouAEIOU')
    l, r = 0, len(s) - 1
    while l < r:
        while l < r and s[l] not in vowels: l += 1
        while l < r and s[r] not in vowels: r -= 1
        s[l], s[r] = s[r], s[l]
        l += 1
        r -= 1
    return ''.join(s)`}},"Roman to Integer":{brute:{name:`Brute Force`,time:`O(n)`,space:`O(1)`,code:`def romanToInt(s):
    d = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    result = 0
    for i in range(len(s)):
        if i + 1 < len(s) and d[s[i]] < d[s[i+1]]:
            result -= d[s[i]]
        else:
            result += d[s[i]]
    return result`},better:{name:`Replace Substrings`,time:`O(n)`,space:`O(n)`,code:`def romanToInt(s):
    s = s.replace("IV","IIII").replace("IX","VIIII")
    s = s.replace("XL","XXXX").replace("XC","LXXXX")
    s = s.replace("CD","CCCC").replace("CM","DCCCC")
    d = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    return sum(d[c] for c in s)`},optimal:{name:`Right to Left`,time:`O(n)`,space:`O(1)`,code:`def romanToInt(s):
    d = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    result, prev = 0, 0
    for c in reversed(s):
        cur = d[c]
        result += cur if cur >= prev else -cur
        prev = cur
    return result`}},"Student Attendance Record I":{brute:{name:`Brute Force`,time:`O(n)`,space:`O(1)`,code:`def checkRecord(s):
    a_count = 0
    l_count = 0
    for i, c in enumerate(s):
        if c == 'A': a_count += 1
        if c == 'L': l_count += 1
        else: l_count = 0
        if a_count >= 2 or l_count >= 3: return False
    return True`},better:{name:`Count Method`,time:`O(n)`,space:`O(1)`,code:`def checkRecord(s):
    return s.count('A') < 2 and 'LLL' not in s`},optimal:{name:`Single Pass`,time:`O(n)`,space:`O(1)`,code:`def checkRecord(s):
    a, l = 0, 0
    for c in s:
        if c == 'A':
            a += 1
            if a >= 2: return False
        if c == 'L': l += 1
        else: l = 0
        if l >= 3: return False
    return True`}},"Valid Palindrome":{brute:{name:`Brute Force`,time:`O(n)`,space:`O(n)`,code:`def isPalindrome(s):
    cleaned = ''.join(c.lower() for c in s if c.isalnum())
    return cleaned == cleaned[::-1]`},better:{name:`Filter and Compare`,time:`O(n)`,space:`O(n)`,code:`def isPalindrome(s):
    filtered = list(filter(str.isalnum, s.lower()))
    return filtered == filtered[::-1]`},optimal:{name:`Two Pointers`,time:`O(n)`,space:`O(1)`,code:`def isPalindrome(s):
    l, r = 0, len(s) - 1
    while l < r:
        while l < r and not s[l].isalnum(): l += 1
        while l < r and not s[r].isalnum(): r -= 1
        if s[l].lower() != s[r].lower(): return False
        l += 1
        r -= 1
    return True`}},"Valid Palindrome II":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(n)`,code:`def validPalindrome(s):
    for i in range(len(s)):
        t = s[:i] + s[i+1:]
        if t == t[::-1]: return True
    return s == s[::-1]`},better:{name:`Two Pointers with Helper`,time:`O(n)`,space:`O(n)`,code:`def validPalindrome(s):
    def is_pal(s, l, r):
        return s[l:r+1] == s[l:r+1][::-1]
    l, r = 0, len(s) - 1
    while l < r:
        if s[l] != s[r]:
            return is_pal(s, l+1, r) or is_pal(s, l, r-1)
        l += 1
        r -= 1
    return True`},optimal:{name:`Two Pointers O(1) Space`,time:`O(n)`,space:`O(1)`,code:`def validPalindrome(s):
    def check(l, r):
        while l < r:
            if s[l] != s[r]: return False
            l += 1
            r -= 1
        return True
    l, r = 0, len(s) - 1
    while l < r:
        if s[l] != s[r]:
            return check(l+1, r) or check(l, r-1)
        l += 1
        r -= 1
    return True`}},"Edit Distance":{brute:{name:`Brute Force (Recursion)`,time:`O(3^(m+n))`,space:`O(m+n)`,code:`def minDistance(word1, word2):
    def dp(i, j):
        if i == 0: return j
        if j == 0: return i
        if word1[i-1] == word2[j-1]: return dp(i-1, j-1)
        return 1 + min(dp(i-1,j), dp(i,j-1), dp(i-1,j-1))
    return dp(len(word1), len(word2))`},better:{name:`Memoization`,time:`O(m*n)`,space:`O(m*n)`,code:`def minDistance(word1, word2):
    from functools import lru_cache
    @lru_cache(None)
    def dp(i, j):
        if i == 0: return j
        if j == 0: return i
        if word1[i-1] == word2[j-1]: return dp(i-1, j-1)
        return 1 + min(dp(i-1,j), dp(i,j-1), dp(i-1,j-1))
    return dp(len(word1), len(word2))`},optimal:{name:`DP Space Optimized`,time:`O(m*n)`,space:`O(n)`,code:`def minDistance(word1, word2):
    m, n = len(word1), len(word2)
    prev = list(range(n + 1))
    for i in range(1, m + 1):
        cur = [i] + [0] * n
        for j in range(1, n + 1):
            if word1[i-1] == word2[j-1]: cur[j] = prev[j-1]
            else: cur[j] = 1 + min(prev[j], cur[j-1], prev[j-1])
        prev = cur
    return prev[n]`}},"Minimum Window Substring":{brute:{name:`Brute Force`,time:`O(n^2 * m)`,space:`O(n)`,code:`def minWindow(s, t):
    from collections import Counter
    need = Counter(t)
    res = ""
    for i in range(len(s)):
        for j in range(i + len(t), len(s) + 1):
            window = Counter(s[i:j])
            if all(window[c] >= need[c] for c in need):
                if not res or j - i < len(res): res = s[i:j]
                break
    return res`},better:{name:`Sliding Window (HashMap)`,time:`O(n + m)`,space:`O(n + m)`,code:`def minWindow(s, t):
    from collections import Counter
    need, window = Counter(t), {}
    have, required = 0, len(need)
    res, resLen = [-1, -1], float('inf')
    l = 0
    for r, c in enumerate(s):
        window[c] = window.get(c, 0) + 1
        if c in need and window[c] == need[c]: have += 1
        while have == required:
            if (r - l + 1) < resLen:
                res, resLen = [l, r], r - l + 1
            window[s[l]] -= 1
            if s[l] in need and window[s[l]] < need[s[l]]: have -= 1
            l += 1
    return s[res[0]:res[1]+1] if resLen != float('inf') else ""`},optimal:{name:`Optimized Sliding Window`,time:`O(n + m)`,space:`O(m)`,code:`def minWindow(s, t):
    from collections import Counter
    need = Counter(t)
    missing = len(t)
    l = start = end = 0
    for r, c in enumerate(s, 1):
        if need[c] > 0: missing -= 1
        need[c] -= 1
        if missing == 0:
            while need[s[l]] < 0:
                need[s[l]] += 1
                l += 1
            if not end or r - l < end - start:
                start, end = l, r
            need[s[l]] += 1
            missing += 1
            l += 1
    return s[start:end]`}},"Regular Expression Matching":{brute:{name:`Brute Force (Recursion)`,time:`O(2^(m+n))`,space:`O(m+n)`,code:`def isMatch(s, p):
    if not p: return not s
    first = bool(s) and p[0] in {s[0], '.'}
    if len(p) >= 2 and p[1] == '*':
        return isMatch(s, p[2:]) or (first and isMatch(s[1:], p))
    return first and isMatch(s[1:], p[1:])`},better:{name:`Memoization`,time:`O(m*n)`,space:`O(m*n)`,code:`def isMatch(s, p):
    from functools import lru_cache
    @lru_cache(None)
    def dp(i, j):
        if j == len(p): return i == len(s)
        first = i < len(s) and p[j] in {s[i], '.'}
        if j + 1 < len(p) and p[j+1] == '*':
            return dp(i, j+2) or (first and dp(i+1, j))
        return first and dp(i+1, j+1)
    return dp(0, 0)`},optimal:{name:`Bottom-Up DP`,time:`O(m*n)`,space:`O(m*n)`,code:`def isMatch(s, p):
    m, n = len(s), len(p)
    dp = [[False] * (n+1) for _ in range(m+1)]
    dp[0][0] = True
    for j in range(1, n+1):
        if p[j-1] == '*': dp[0][j] = dp[0][j-2]
    for i in range(1, m+1):
        for j in range(1, n+1):
            if p[j-1] == '*':
                dp[i][j] = dp[i][j-2] or (dp[i-1][j] and p[j-2] in {s[i-1], '.'})
            else:
                dp[i][j] = dp[i-1][j-1] and p[j-1] in {s[i-1], '.'}
    return dp[m][n]`}},"Substring with Concatenation of All Words":{brute:{name:`Brute Force`,time:`O(n * m * k)`,space:`O(m)`,code:`def findSubstring(s, words):
    from collections import Counter
    if not words: return []
    wlen, wcount = len(words[0]), len(words)
    total = wlen * wcount
    need = Counter(words)
    res = []
    for i in range(len(s) - total + 1):
        seen = Counter()
        j = 0
        while j < wcount:
            w = s[i + j*wlen: i + (j+1)*wlen]
            seen[w] += 1
            if seen[w] > need[w]: break
            j += 1
        if j == wcount: res.append(i)
    return res`},better:{name:`Sliding Window per Offset`,time:`O(n * k)`,space:`O(m)`,code:`def findSubstring(s, words):
    from collections import Counter
    if not words: return []
    wlen, n = len(words[0]), len(s)
    need = Counter(words)
    res = []
    for offset in range(wlen):
        window, count = Counter(), 0
        l = offset
        for r in range(offset, n - wlen + 1, wlen):
            w = s[r:r+wlen]
            window[w] += 1
            count += 1
            while window[w] > need[w]:
                window[s[l:l+wlen]] -= 1
                l += wlen
                count -= 1
            if count == len(words): res.append(l)
    return res`},optimal:{name:`Optimized Sliding Window`,time:`O(n * k)`,space:`O(m)`,code:`def findSubstring(s, words):
    from collections import Counter
    wlen, total = len(words[0]), len(words)
    need = Counter(words)
    res = []
    for i in range(wlen):
        window, matched = Counter(), 0
        l = i
        for r in range(i, len(s) - wlen + 1, wlen):
            w = s[r:r+wlen]
            if w in need:
                window[w] += 1
                if window[w] == need[w]: matched += 1
                while window[w] > need[w]:
                    lw = s[l:l+wlen]
                    if window[lw] == need[lw]: matched -= 1
                    window[lw] -= 1
                    l += wlen
                if matched == len(need): res.append(l)
            else:
                window.clear()
                matched = 0
                l = r + wlen
    return res`}},"Wildcard Matching":{brute:{name:`Brute Force (Recursion)`,time:`O(2^(m+n))`,space:`O(m+n)`,code:`def isMatch(s, p):
    if not p: return not s
    if p[0] == '*':
        return isMatch(s, p[1:]) or (bool(s) and isMatch(s[1:], p))
    if s and (p[0] == '?' or p[0] == s[0]):
        return isMatch(s[1:], p[1:])
    return False`},better:{name:`Memoization`,time:`O(m*n)`,space:`O(m*n)`,code:`def isMatch(s, p):
    from functools import lru_cache
    @lru_cache(None)
    def dp(i, j):
        if j == len(p): return i == len(s)
        if p[j] == '*':
            return dp(i, j+1) or (i < len(s) and dp(i+1, j))
        if i < len(s) and (p[j] == '?' or p[j] == s[i]):
            return dp(i+1, j+1)
        return False
    return dp(0, 0)`},optimal:{name:`Two Pointer Greedy`,time:`O(m*n)`,space:`O(1)`,code:`def isMatch(s, p):
    si, pi, star, match = 0, 0, -1, 0
    while si < len(s):
        if pi < len(p) and (p[pi] == '?' or p[pi] == s[si]):
            si += 1
            pi += 1
        elif pi < len(p) and p[pi] == '*':
            star = pi
            match = si
            pi += 1
        elif star != -1:
            pi = star + 1
            match += 1
            si = match
        else:
            return False
    while pi < len(p) and p[pi] == '*': pi += 1
    return pi == len(p)`}},"Bulls and Cows":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(n)`,code:`def getHint(secret, guess):
    bulls = sum(s == g for s, g in zip(secret, guess))
    cows = 0
    s_rem = [s for s, g in zip(secret, guess) if s != g]
    g_rem = [g for s, g in zip(secret, guess) if s != g]
    for g in g_rem:
        if g in s_rem:
            cows += 1
            s_rem.remove(g)
    return f"{bulls}A{cows}B"`},better:{name:`Counter`,time:`O(n)`,space:`O(1)`,code:`def getHint(secret, guess):
    from collections import Counter
    bulls = sum(s == g for s, g in zip(secret, guess))
    s_count = Counter(secret)
    g_count = Counter(guess)
    total = sum((s_count & g_count).values())
    return f"{bulls}A{total - bulls}B"`},optimal:{name:`Single Pass`,time:`O(n)`,space:`O(1)`,code:`def getHint(secret, guess):
    bulls = cows = 0
    counts = [0] * 10
    for s, g in zip(secret, guess):
        if s == g:
            bulls += 1
        else:
            if counts[int(s)] < 0: cows += 1
            if counts[int(g)] > 0: cows += 1
            counts[int(s)] += 1
            counts[int(g)] -= 1
    return f"{bulls}A{cows}B"`}},"Check Inclusion":{brute:{name:`Brute Force`,time:`O(n * m!)`,space:`O(m)`,code:`def checkInclusion(s1, s2):
    from itertools import permutations
    for p in set(permutations(s1)):
        if ''.join(p) in s2: return True
    return False`},better:{name:`Sorting Window`,time:`O(n * m log m)`,space:`O(m)`,code:`def checkInclusion(s1, s2):
    m = len(s1)
    sorted_s1 = sorted(s1)
    for i in range(len(s2) - m + 1):
        if sorted(s2[i:i+m]) == sorted_s1:
            return True
    return False`},optimal:{name:`Sliding Window Counter`,time:`O(n)`,space:`O(1)`,code:`def checkInclusion(s1, s2):
    from collections import Counter
    need = Counter(s1)
    window = Counter()
    l = 0
    for r, c in enumerate(s2):
        window[c] += 1
        if r - l + 1 > len(s1):
            window[s2[l]] -= 1
            if window[s2[l]] == 0: del window[s2[l]]
            l += 1
        if window == need: return True
    return False`}},"Compare Version Numbers":{brute:{name:`Brute Force`,time:`O(n + m)`,space:`O(n + m)`,code:`def compareVersion(version1, version2):
    v1 = list(map(int, version1.split('.')))
    v2 = list(map(int, version2.split('.')))
    while len(v1) < len(v2): v1.append(0)
    while len(v2) < len(v1): v2.append(0)
    for a, b in zip(v1, v2):
        if a > b: return 1
        if a < b: return -1
    return 0`},better:{name:`Zip Longest`,time:`O(n + m)`,space:`O(n + m)`,code:`def compareVersion(version1, version2):
    from itertools import zip_longest
    v1 = map(int, version1.split('.'))
    v2 = map(int, version2.split('.'))
    for a, b in zip_longest(v1, v2, fillvalue=0):
        if a > b: return 1
        if a < b: return -1
    return 0`},optimal:{name:`Two Pointer (No Split)`,time:`O(n + m)`,space:`O(1)`,code:`def compareVersion(version1, version2):
    i, j = 0, 0
    while i < len(version1) or j < len(version2):
        v1 = v2 = 0
        while i < len(version1) and version1[i] != '.':
            v1 = v1 * 10 + int(version1[i])
            i += 1
        while j < len(version2) and version2[j] != '.':
            v2 = v2 * 10 + int(version2[j])
            j += 1
        if v1 > v2: return 1
        if v1 < v2: return -1
        i += 1
        j += 1
    return 0`}},"Count Occurrences of Anagram":{brute:{name:`Brute Force`,time:`O(n * m log m)`,space:`O(m)`,code:`def countAnagrams(s, p):
    m = len(p)
    sorted_p = sorted(p)
    count = 0
    for i in range(len(s) - m + 1):
        if sorted(s[i:i+m]) == sorted_p:
            count += 1
    return count`},better:{name:`Counter Comparison`,time:`O(n * m)`,space:`O(m)`,code:`def countAnagrams(s, p):
    from collections import Counter
    m = len(p)
    need = Counter(p)
    count = 0
    for i in range(len(s) - m + 1):
        if Counter(s[i:i+m]) == need:
            count += 1
    return count`},optimal:{name:`Sliding Window`,time:`O(n)`,space:`O(1)`,code:`def countAnagrams(s, p):
    from collections import Counter
    need = Counter(p)
    window = Counter(s[:len(p)])
    count = 1 if window == need else 0
    for i in range(len(p), len(s)):
        window[s[i]] += 1
        left = s[i - len(p)]
        window[left] -= 1
        if window[left] == 0: del window[left]
        if window == need: count += 1
    return count`}},"Count and Say":{brute:{name:`Brute Force (Iterative)`,time:`O(2^n)`,space:`O(2^n)`,code:`def countAndSay(n):
    s = "1"
    for _ in range(n - 1):
        result = ""
        i = 0
        while i < len(s):
            count = 1
            while i + count < len(s) and s[i+count] == s[i]:
                count += 1
            result += str(count) + s[i]
            i += count
        s = result
    return s`},better:{name:`Groupby`,time:`O(2^n)`,space:`O(2^n)`,code:`def countAndSay(n):
    from itertools import groupby
    s = "1"
    for _ in range(n - 1):
        s = ''.join(str(len(list(g))) + k for k, g in groupby(s))
    return s`},optimal:{name:`Recursive`,time:`O(2^n)`,space:`O(2^n)`,code:`def countAndSay(n):
    if n == 1: return "1"
    prev = countAndSay(n - 1)
    result, i = "", 0
    while i < len(prev):
        c, count = prev[i], 1
        while i + count < len(prev) and prev[i+count] == c:
            count += 1
        result += str(count) + c
        i += count
    return result`}},"Decode Ways":{brute:{name:`Brute Force (Recursion)`,time:`O(2^n)`,space:`O(n)`,code:`def numDecodings(s):
    def helper(i):
        if i == len(s): return 1
        if s[i] == '0': return 0
        ways = helper(i + 1)
        if i + 1 < len(s) and int(s[i:i+2]) <= 26:
            ways += helper(i + 2)
        return ways
    return helper(0)`},better:{name:`Memoization`,time:`O(n)`,space:`O(n)`,code:`def numDecodings(s):
    from functools import lru_cache
    @lru_cache(None)
    def dp(i):
        if i == len(s): return 1
        if s[i] == '0': return 0
        ways = dp(i + 1)
        if i + 1 < len(s) and int(s[i:i+2]) <= 26:
            ways += dp(i + 2)
        return ways
    return dp(0)`},optimal:{name:`DP O(1) Space`,time:`O(n)`,space:`O(1)`,code:`def numDecodings(s):
    if not s or s[0] == '0': return 0
    prev2, prev1 = 1, 1
    for i in range(1, len(s)):
        cur = 0
        if s[i] != '0': cur = prev1
        two = int(s[i-1:i+1])
        if 10 <= two <= 26: cur += prev2
        prev2, prev1 = prev1, cur
    return prev1`}},"Encode and Decode Strings":{brute:{name:`Brute Force (Delimiter)`,time:`O(n)`,space:`O(n)`,code:`def encode(strs):
    return '\\x00'.join(strs)

def decode(s):
    return s.split('\\x00')`},better:{name:`Escaping`,time:`O(n)`,space:`O(n)`,code:`def encode(strs):
    return ''.join(s.replace('#', '##') + ' # ' for s in strs)

def decode(s):
    result, cur = [], []
    i = 0
    while i < len(s):
        if s[i:i+3] == ' # ':
            result.append(''.join(cur))
            cur = []
            i += 3
        elif s[i:i+2] == '##':
            cur.append('#')
            i += 2
        else:
            cur.append(s[i])
            i += 1
    return result`},optimal:{name:`Length Prefix`,time:`O(n)`,space:`O(n)`,code:`def encode(strs):
    return ''.join(f"{len(s)}#{s}" for s in strs)

def decode(s):
    result, i = [], 0
    while i < len(s):
        j = s.index('#', i)
        length = int(s[i:j])
        result.append(s[j+1:j+1+length])
        i = j + 1 + length
    return result`}},"Find All Anagrams in a String":{brute:{name:`Brute Force`,time:`O(n * m log m)`,space:`O(m)`,code:`def findAnagrams(s, p):
    m = len(p)
    sorted_p = sorted(p)
    result = []
    for i in range(len(s) - m + 1):
        if sorted(s[i:i+m]) == sorted_p:
            result.append(i)
    return result`},better:{name:`Counter Comparison`,time:`O(n * m)`,space:`O(m)`,code:`def findAnagrams(s, p):
    from collections import Counter
    need = Counter(p)
    result = []
    for i in range(len(s) - len(p) + 1):
        if Counter(s[i:i+len(p)]) == need:
            result.append(i)
    return result`},optimal:{name:`Sliding Window`,time:`O(n)`,space:`O(1)`,code:`def findAnagrams(s, p):
    from collections import Counter
    need = Counter(p)
    window = Counter()
    result = []
    for i, c in enumerate(s):
        window[c] += 1
        if i >= len(p):
            left = s[i - len(p)]
            window[left] -= 1
            if window[left] == 0: del window[left]
        if window == need: result.append(i - len(p) + 1)
    return result`}},"Generate Parentheses":{brute:{name:`Brute Force`,time:`O(2^(2n) * n)`,space:`O(n)`,code:`def generateParenthesis(n):
    def valid(s):
        bal = 0
        for c in s:
            bal += 1 if c == '(' else -1
            if bal < 0: return False
        return bal == 0
    result = []
    def generate(cur):
        if len(cur) == 2*n:
            if valid(cur): result.append(cur)
            return
        generate(cur + '(')
        generate(cur + ')')
    generate('')
    return result`},better:{name:`Backtracking`,time:`O(4^n / sqrt(n))`,space:`O(n)`,code:`def generateParenthesis(n):
    result = []
    def backtrack(cur, open, close):
        if len(cur) == 2 * n:
            result.append(cur)
            return
        if open < n: backtrack(cur + '(', open + 1, close)
        if close < open: backtrack(cur + ')', open, close + 1)
    backtrack('', 0, 0)
    return result`},optimal:{name:`Iterative DP`,time:`O(4^n / sqrt(n))`,space:`O(4^n / sqrt(n))`,code:`def generateParenthesis(n):
    dp = [[] for _ in range(n + 1)]
    dp[0] = ['']
    for i in range(1, n + 1):
        for j in range(i):
            for left in dp[j]:
                for right in dp[i-1-j]:
                    dp[i].append(f'({left}){right}')
    return dp[n]`}},"Get Equal Substrings Within Budget":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(n)`,code:`def equalSubstring(s, t, maxCost):
    n = len(s)
    costs = [abs(ord(s[i]) - ord(t[i])) for i in range(n)]
    res = 0
    for i in range(n):
        total = 0
        for j in range(i, n):
            total += costs[j]
            if total > maxCost: break
            res = max(res, j - i + 1)
    return res`},better:{name:`Prefix Sum + Binary Search`,time:`O(n log n)`,space:`O(n)`,code:`def equalSubstring(s, t, maxCost):
    import bisect
    n = len(s)
    prefix = [0] * (n + 1)
    for i in range(n):
        prefix[i+1] = prefix[i] + abs(ord(s[i]) - ord(t[i]))
    res = 0
    for i in range(n):
        target = prefix[i] + maxCost
        j = bisect.bisect_right(prefix, target, i+1, n+1) - 1
        res = max(res, j - i)
    return res`},optimal:{name:`Sliding Window`,time:`O(n)`,space:`O(1)`,code:`def equalSubstring(s, t, maxCost):
    l = cur = res = 0
    for r in range(len(s)):
        cur += abs(ord(s[r]) - ord(t[r]))
        while cur > maxCost:
            cur -= abs(ord(s[l]) - ord(t[l]))
            l += 1
        res = max(res, r - l + 1)
    return res`}},"Integer to Roman":{brute:{name:`Brute Force`,time:`O(1)`,space:`O(1)`,code:`def intToRoman(num):
    result = ""
    vals = [(1000,'M'),(900,'CM'),(500,'D'),(400,'CD'),
            (100,'C'),(90,'XC'),(50,'L'),(40,'XL'),
            (10,'X'),(9,'IX'),(5,'V'),(4,'IV'),(1,'I')]
    for val, sym in vals:
        while num >= val:
            result += sym
            num -= val
    return result`},better:{name:`Digit by Digit`,time:`O(1)`,space:`O(1)`,code:`def intToRoman(num):
    thousands = ['','M','MM','MMM']
    hundreds = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM']
    tens = ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC']
    ones = ['','I','II','III','IV','V','VI','VII','VIII','IX']
    return (thousands[num//1000] + hundreds[num%1000//100]
            + tens[num%100//10] + ones[num%10])`},optimal:{name:`Greedy (Concise)`,time:`O(1)`,space:`O(1)`,code:`def intToRoman(num):
    pairs = [(1000,'M'),(900,'CM'),(500,'D'),(400,'CD'),
             (100,'C'),(90,'XC'),(50,'L'),(40,'XL'),
             (10,'X'),(9,'IX'),(5,'V'),(4,'IV'),(1,'I')]
    res = []
    for val, sym in pairs:
        count, num = divmod(num, val)
        res.append(sym * count)
    return ''.join(res)`}},"Letter Combinations of a Phone Number":{brute:{name:`Brute Force (Iterative)`,time:`O(4^n)`,space:`O(4^n)`,code:`def letterCombinations(digits):
    if not digits: return []
    phone = {'2':'abc','3':'def','4':'ghi','5':'jkl',
             '6':'mno','7':'pqrs','8':'tuv','9':'wxyz'}
    result = ['']
    for d in digits:
        result = [combo + c for combo in result for c in phone[d]]
    return result`},better:{name:`BFS with Queue`,time:`O(4^n)`,space:`O(4^n)`,code:`def letterCombinations(digits):
    if not digits: return []
    phone = {'2':'abc','3':'def','4':'ghi','5':'jkl',
             '6':'mno','7':'pqrs','8':'tuv','9':'wxyz'}
    from collections import deque
    queue = deque([''])
    for d in digits:
        for _ in range(len(queue)):
            cur = queue.popleft()
            for c in phone[d]:
                queue.append(cur + c)
    return list(queue)`},optimal:{name:`Backtracking`,time:`O(4^n)`,space:`O(n)`,code:`def letterCombinations(digits):
    if not digits: return []
    phone = {'2':'abc','3':'def','4':'ghi','5':'jkl',
             '6':'mno','7':'pqrs','8':'tuv','9':'wxyz'}
    result = []
    def backtrack(i, cur):
        if i == len(digits):
            result.append(cur)
            return
        for c in phone[digits[i]]:
            backtrack(i + 1, cur + c)
    backtrack(0, '')
    return result`}},"Longest Palindromic Substring":{brute:{name:`Brute Force`,time:`O(n^3)`,space:`O(1)`,code:`def longestPalindrome(s):
    res = ""
    for i in range(len(s)):
        for j in range(i, len(s)):
            sub = s[i:j+1]
            if sub == sub[::-1] and len(sub) > len(res):
                res = sub
    return res`},better:{name:`DP`,time:`O(n^2)`,space:`O(n^2)`,code:`def longestPalindrome(s):
    n = len(s)
    dp = [[False]*n for _ in range(n)]
    res = s[0]
    for i in range(n): dp[i][i] = True
    for length in range(2, n+1):
        for i in range(n - length + 1):
            j = i + length - 1
            if s[i] == s[j] and (length <= 2 or dp[i+1][j-1]):
                dp[i][j] = True
                if length > len(res): res = s[i:j+1]
    return res`},optimal:{name:`Expand Around Center`,time:`O(n^2)`,space:`O(1)`,code:`def longestPalindrome(s):
    res = ""
    def expand(l, r):
        while l >= 0 and r < len(s) and s[l] == s[r]:
            l -= 1
            r += 1
        return s[l+1:r]
    for i in range(len(s)):
        odd = expand(i, i)
        even = expand(i, i+1)
        res = max(res, odd, even, key=len)
    return res`}},"Longest Repeating Character Replacement":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(1)`,code:`def characterReplacement(s, k):
    res = 0
    for i in range(len(s)):
        count = {}
        max_freq = 0
        for j in range(i, len(s)):
            count[s[j]] = count.get(s[j], 0) + 1
            max_freq = max(max_freq, count[s[j]])
            if (j - i + 1) - max_freq <= k:
                res = max(res, j - i + 1)
    return res`},better:{name:`Sliding Window (Shrink)`,time:`O(n)`,space:`O(1)`,code:`def characterReplacement(s, k):
    count = {}
    l = res = max_freq = 0
    for r in range(len(s)):
        count[s[r]] = count.get(s[r], 0) + 1
        max_freq = max(max_freq, count[s[r]])
        while (r - l + 1) - max_freq > k:
            count[s[l]] -= 1
            l += 1
        res = max(res, r - l + 1)
    return res`},optimal:{name:`Sliding Window (No Shrink)`,time:`O(n)`,space:`O(1)`,code:`def characterReplacement(s, k):
    count = {}
    l = max_freq = 0
    for r in range(len(s)):
        count[s[r]] = count.get(s[r], 0) + 1
        max_freq = max(max_freq, count[s[r]])
        if (r - l + 1) - max_freq > k:
            count[s[l]] -= 1
            l += 1
    return len(s) - l`}},"Longest Substring Without Repeating Characters":{brute:{name:`Brute Force`,time:`O(n^3)`,space:`O(min(n,m))`,code:`def lengthOfLongestSubstring(s):
    res = 0
    for i in range(len(s)):
        seen = set()
        for j in range(i, len(s)):
            if s[j] in seen: break
            seen.add(s[j])
            res = max(res, j - i + 1)
    return res`},better:{name:`Sliding Window (Set)`,time:`O(n)`,space:`O(min(n,m))`,code:`def lengthOfLongestSubstring(s):
    seen = set()
    l = res = 0
    for r in range(len(s)):
        while s[r] in seen:
            seen.remove(s[l])
            l += 1
        seen.add(s[r])
        res = max(res, r - l + 1)
    return res`},optimal:{name:`Sliding Window (HashMap)`,time:`O(n)`,space:`O(min(n,m))`,code:`def lengthOfLongestSubstring(s):
    last = {}
    l = res = 0
    for r, c in enumerate(s):
        if c in last and last[c] >= l:
            l = last[c] + 1
        last[c] = r
        res = max(res, r - l + 1)
    return res`}},"Longest Word in Dictionary":{brute:{name:`Brute Force`,time:`O(n * m^2)`,space:`O(n * m)`,code:`def longestWord(words):
    word_set = set(words)
    res = ""
    for word in words:
        valid = all(word[:k] in word_set for k in range(1, len(word)+1))
        if valid:
            if len(word) > len(res) or (len(word) == len(res) and word < res):
                res = word
    return res`},better:{name:`Sort and HashSet`,time:`O(n * m log n)`,space:`O(n * m)`,code:`def longestWord(words):
    words.sort()
    built = {''}
    res = ""
    for word in words:
        if word[:-1] in built:
            built.add(word)
            if len(word) > len(res):
                res = word
    return res`},optimal:{name:`Trie + BFS`,time:`O(n * m)`,space:`O(n * m)`,code:`def longestWord(words):
    from collections import deque
    trie = {}
    for word in words:
        node = trie
        for c in word:
            node = node.setdefault(c, {})
        node['#'] = word
    res = ""
    queue = deque([trie])
    while queue:
        node = queue.popleft()
        for key in node:
            if key != '#' and '#' in node[key]:
                w = node[key]['#']
                if len(w) > len(res) or (len(w) == len(res) and w < res):
                    res = w
                queue.append(node[key])
    return res`}},"Minimum Number of Flips to Make Binary String Alternating":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(n)`,code:`def minFlips(s):
    n = len(s)
    res = n
    for i in range(n):
        rotated = s[i:] + s[:i]
        diff1 = sum(int(rotated[j]) != j % 2 for j in range(n))
        diff2 = sum(int(rotated[j]) != (j+1) % 2 for j in range(n))
        res = min(res, diff1, diff2)
    return res`},better:{name:`Double String`,time:`O(n)`,space:`O(n)`,code:`def minFlips(s):
    n = len(s)
    s = s + s
    alt1 = ''.join('0' if i%2==0 else '1' for i in range(2*n))
    alt2 = ''.join('1' if i%2==0 else '0' for i in range(2*n))
    d1 = d2 = 0
    res = n
    for r in range(len(s)):
        if s[r] != alt1[r]: d1 += 1
        if s[r] != alt2[r]: d2 += 1
        if r >= n:
            if s[r-n] != alt1[r-n]: d1 -= 1
            if s[r-n] != alt2[r-n]: d2 -= 1
        if r >= n - 1: res = min(res, d1, d2)
    return res`},optimal:{name:`Sliding Window`,time:`O(n)`,space:`O(1)`,code:`def minFlips(s):
    n = len(s)
    diff1 = diff2 = 0
    res = n
    for i in range(2 * n):
        idx = i % n
        c = int(s[idx])
        diff1 += c != (i % 2)
        diff2 += c != ((i + 1) % 2)
        if i >= n:
            old = int(s[(i - n) % n])
            diff1 -= old != ((i - n) % 2)
            diff2 -= old != ((i - n + 1) % 2)
        if i >= n - 1:
            res = min(res, diff1, diff2)
    return res`}},"Multiply Strings":{brute:{name:`Brute Force`,time:`O(m*n)`,space:`O(m+n)`,code:`def multiply(num1, num2):
    if num1 == "0" or num2 == "0": return "0"
    n1, n2 = 0, 0
    for c in num1: n1 = n1 * 10 + ord(c) - ord('0')
    for c in num2: n2 = n2 * 10 + ord(c) - ord('0')
    return str(n1 * n2)`},better:{name:`Grade School Multiplication`,time:`O(m*n)`,space:`O(m+n)`,code:`def multiply(num1, num2):
    if num1 == "0" or num2 == "0": return "0"
    m, n = len(num1), len(num2)
    result = [0] * (m + n)
    for i in range(m-1, -1, -1):
        for j in range(n-1, -1, -1):
            mul = (ord(num1[i])-48) * (ord(num2[j])-48)
            p1, p2 = i+j, i+j+1
            total = mul + result[p2]
            result[p2] = total % 10
            result[p1] += total // 10
    res = ''.join(map(str, result)).lstrip('0')
    return res or "0"`},optimal:{name:`Optimized Array`,time:`O(m*n)`,space:`O(m+n)`,code:`def multiply(num1, num2):
    if num1 == "0" or num2 == "0": return "0"
    res = [0] * (len(num1) + len(num2))
    for i, a in enumerate(reversed(num1)):
        for j, b in enumerate(reversed(num2)):
            res[i+j] += int(a) * int(b)
            res[i+j+1] += res[i+j] // 10
            res[i+j] %= 10
    while len(res) > 1 and res[-1] == 0: res.pop()
    return ''.join(map(str, reversed(res)))`}},"Number of Substrings Containing All Three Characters":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(1)`,code:`def numberOfSubstrings(s):
    count = 0
    for i in range(len(s)):
        seen = set()
        for j in range(i, len(s)):
            seen.add(s[j])
            if len(seen) == 3:
                count += len(s) - j
                break
    return count`},better:{name:`Last Position Tracking`,time:`O(n)`,space:`O(1)`,code:`def numberOfSubstrings(s):
    last = {'a': -1, 'b': -1, 'c': -1}
    count = 0
    for i, c in enumerate(s):
        last[c] = i
        count += 1 + min(last.values())
    return count`},optimal:{name:`Sliding Window`,time:`O(n)`,space:`O(1)`,code:`def numberOfSubstrings(s):
    count = [0, 0, 0]
    l = res = 0
    for r in range(len(s)):
        count[ord(s[r]) - ord('a')] += 1
        while all(c > 0 for c in count):
            res += len(s) - r
            count[ord(s[l]) - ord('a')] -= 1
            l += 1
    return res`}},"Palindrome Partitioning":{brute:{name:`Brute Force`,time:`O(n * 2^n)`,space:`O(n)`,code:`def partition(s):
    result = []
    def backtrack(start, path):
        if start == len(s):
            result.append(path[:])
            return
        for end in range(start + 1, len(s) + 1):
            sub = s[start:end]
            if sub == sub[::-1]:
                path.append(sub)
                backtrack(end, path)
                path.pop()
    backtrack(0, [])
    return result`},better:{name:`DP Precompute + Backtrack`,time:`O(n * 2^n)`,space:`O(n^2)`,code:`def partition(s):
    n = len(s)
    dp = [[False]*n for _ in range(n)]
    for i in range(n-1, -1, -1):
        for j in range(i, n):
            dp[i][j] = s[i]==s[j] and (j-i<2 or dp[i+1][j-1])
    result = []
    def backtrack(start, path):
        if start == n:
            result.append(path[:])
            return
        for end in range(start, n):
            if dp[start][end]:
                path.append(s[start:end+1])
                backtrack(end+1, path)
                path.pop()
    backtrack(0, [])
    return result`},optimal:{name:`Optimized Backtrack`,time:`O(n * 2^n)`,space:`O(n)`,code:`def partition(s):
    result = []
    def is_pal(l, r):
        while l < r:
            if s[l] != s[r]: return False
            l += 1
            r -= 1
        return True
    def backtrack(start, path):
        if start == len(s):
            result.append(path[:])
            return
        for end in range(start, len(s)):
            if is_pal(start, end):
                path.append(s[start:end+1])
                backtrack(end+1, path)
                path.pop()
    backtrack(0, [])
    return result`}},"Palindromic Substrings":{brute:{name:`Brute Force`,time:`O(n^3)`,space:`O(1)`,code:`def countSubstrings(s):
    count = 0
    for i in range(len(s)):
        for j in range(i, len(s)):
            sub = s[i:j+1]
            if sub == sub[::-1]: count += 1
    return count`},better:{name:`DP`,time:`O(n^2)`,space:`O(n^2)`,code:`def countSubstrings(s):
    n = len(s)
    dp = [[False]*n for _ in range(n)]
    count = 0
    for i in range(n-1, -1, -1):
        for j in range(i, n):
            if s[i] == s[j] and (j-i < 2 or dp[i+1][j-1]):
                dp[i][j] = True
                count += 1
    return count`},optimal:{name:`Expand Around Center`,time:`O(n^2)`,space:`O(1)`,code:`def countSubstrings(s):
    count = 0
    def expand(l, r):
        nonlocal count
        while l >= 0 and r < len(s) and s[l] == s[r]:
            count += 1
            l -= 1
            r += 1
    for i in range(len(s)):
        expand(i, i)
        expand(i, i + 1)
    return count`}},"Permutation in String":{brute:{name:`Brute Force`,time:`O(n * m log m)`,space:`O(m)`,code:`def checkInclusion(s1, s2):
    m = len(s1)
    sorted_s1 = sorted(s1)
    for i in range(len(s2) - m + 1):
        if sorted(s2[i:i+m]) == sorted_s1:
            return True
    return False`},better:{name:`Array Counter`,time:`O(n)`,space:`O(1)`,code:`def checkInclusion(s1, s2):
    if len(s1) > len(s2): return False
    s1_count = [0] * 26
    s2_count = [0] * 26
    for c in s1: s1_count[ord(c)-97] += 1
    for i, c in enumerate(s2):
        s2_count[ord(c)-97] += 1
        if i >= len(s1):
            s2_count[ord(s2[i-len(s1)])-97] -= 1
        if s1_count == s2_count: return True
    return False`},optimal:{name:`Sliding Window Matches`,time:`O(n)`,space:`O(1)`,code:`def checkInclusion(s1, s2):
    if len(s1) > len(s2): return False
    count = [0] * 26
    for c in s1: count[ord(c)-97] -= 1
    for c in s2[:len(s1)]: count[ord(c)-97] += 1
    matches = sum(1 for x in count if x == 0)
    if matches == 26: return True
    for i in range(len(s1), len(s2)):
        idx = ord(s2[i]) - 97
        count[idx] += 1
        if count[idx] == 0: matches += 1
        elif count[idx] == 1: matches -= 1
        idx = ord(s2[i-len(s1)]) - 97
        count[idx] -= 1
        if count[idx] == 0: matches += 1
        elif count[idx] == -1: matches -= 1
        if matches == 26: return True
    return False`}},"Reorganize String":{brute:{name:`Brute Force`,time:`O(n * 26)`,space:`O(n)`,code:`def reorganizeString(s):
    from collections import Counter
    count = Counter(s)
    result = []
    prev = ''
    while count:
        found = False
        for c, _ in count.most_common():
            if c != prev:
                result.append(c)
                count[c] -= 1
                if count[c] == 0: del count[c]
                prev = c
                found = True
                break
        if not found: return ""
    return ''.join(result)`},better:{name:`Max Heap`,time:`O(n log 26)`,space:`O(n)`,code:`def reorganizeString(s):
    from collections import Counter
    import heapq
    count = Counter(s)
    heap = [(-v, k) for k, v in count.items()]
    heapq.heapify(heap)
    result = []
    prev = (0, '')
    while heap:
        cnt, ch = heapq.heappop(heap)
        result.append(ch)
        if prev[0] < 0: heapq.heappush(heap, prev)
        prev = (cnt + 1, ch)
    return ''.join(result) if len(result) == len(s) else ""`},optimal:{name:`Greedy Fill`,time:`O(n)`,space:`O(n)`,code:`def reorganizeString(s):
    from collections import Counter
    count = Counter(s)
    max_freq = max(count.values())
    if max_freq > (len(s) + 1) // 2: return ""
    result = [''] * len(s)
    sorted_chars = sorted(count, key=lambda x: -count[x])
    idx = 0
    for c in sorted_chars:
        for _ in range(count[c]):
            result[idx] = c
            idx += 2
            if idx >= len(s): idx = 1
    return ''.join(result)`}},"Repeated DNA Sequences":{brute:{name:`Brute Force`,time:`O(n * 10)`,space:`O(n)`,code:`def findRepeatedDnaSequences(s):
    seen = set()
    result = set()
    for i in range(len(s) - 9):
        sub = s[i:i+10]
        if sub in seen:
            result.add(sub)
        seen.add(sub)
    return list(result)`},better:{name:`Counter`,time:`O(n)`,space:`O(n)`,code:`def findRepeatedDnaSequences(s):
    from collections import Counter
    subs = [s[i:i+10] for i in range(len(s)-9)]
    count = Counter(subs)
    return [k for k, v in count.items() if v > 1]`},optimal:{name:`Rolling Hash`,time:`O(n)`,space:`O(n)`,code:`def findRepeatedDnaSequences(s):
    d = {'A':0,'C':1,'G':2,'T':3}
    seen, result = set(), set()
    h, base = 0, 4**9
    for i, c in enumerate(s):
        h = h * 4 + d[c]
        if i >= 10: h -= d[s[i-10]] * base * 4
        if i >= 9:
            if h in seen: result.add(s[i-9:i+1])
            seen.add(h)
    return list(result)`}},"Restore IP Addresses":{brute:{name:`Brute Force`,time:`O(n^3)`,space:`O(1)`,code:`def restoreIpAddresses(s):
    result = []
    n = len(s)
    for i in range(1, min(4,n)):
        for j in range(i+1, min(i+4,n)):
            for k in range(j+1, min(j+4,n)):
                parts = [s[:i],s[i:j],s[j:k],s[k:]]
                if all(len(p)<=3 and int(p)<=255 and
                       (len(p)==1 or p[0]!='0') for p in parts):
                    result.append('.'.join(parts))
    return result`},better:{name:`Backtracking`,time:`O(1)`,space:`O(1)`,code:`def restoreIpAddresses(s):
    result = []
    def backtrack(start, parts):
        if len(parts) == 4:
            if start == len(s): result.append('.'.join(parts))
            return
        for end in range(start+1, min(start+4, len(s)+1)):
            seg = s[start:end]
            if int(seg) <= 255 and (len(seg)==1 or seg[0]!='0'):
                backtrack(end, parts + [seg])
    backtrack(0, [])
    return result`},optimal:{name:`Iterative 3 Splits`,time:`O(1)`,space:`O(1)`,code:`def restoreIpAddresses(s):
    def valid(seg):
        return len(seg) <= 3 and int(seg) <= 255 and (seg=='0' or seg[0]!='0')
    result = []
    for i in range(1, 4):
        for j in range(i+1, i+4):
            for k in range(j+1, j+4):
                if k < len(s):
                    a,b,c,d = s[:i],s[i:j],s[j:k],s[k:]
                    if all(valid(x) for x in [a,b,c,d]):
                        result.append(f"{a}.{b}.{c}.{d}")
    return result`}},"Reverse Integer":{brute:{name:`Brute Force`,time:`O(log n)`,space:`O(log n)`,code:`def reverse(x):
    sign = -1 if x < 0 else 1
    rev = int(str(abs(x))[::-1]) * sign
    if rev < -2**31 or rev > 2**31 - 1: return 0
    return rev`},better:{name:`Math (Pop and Push)`,time:`O(log n)`,space:`O(1)`,code:`def reverse(x):
    sign = -1 if x < 0 else 1
    x = abs(x)
    rev = 0
    while x:
        rev = rev * 10 + x % 10
        x //= 10
    rev *= sign
    return rev if -2**31 <= rev <= 2**31 - 1 else 0`},optimal:{name:`Optimized Math`,time:`O(log n)`,space:`O(1)`,code:`def reverse(x):
    MAX = 2**31 - 1
    sign = -1 if x < 0 else 1
    x, rev = abs(x), 0
    while x:
        digit = x % 10
        x //= 10
        if rev > MAX // 10: return 0
        rev = rev * 10 + digit
    return rev * sign if rev <= MAX else 0`}},"Reverse Words in a String":{brute:{name:`Brute Force`,time:`O(n)`,space:`O(n)`,code:`def reverseWords(s):
    words = s.split()
    return ' '.join(words[::-1])`},better:{name:`Stack`,time:`O(n)`,space:`O(n)`,code:`def reverseWords(s):
    stack = s.split()
    result = []
    while stack:
        result.append(stack.pop())
    return ' '.join(result)`},optimal:{name:`Two Pointer In-Place Style`,time:`O(n)`,space:`O(n)`,code:`def reverseWords(s):
    words = []
    i, n = 0, len(s)
    while i < n:
        while i < n and s[i] == ' ': i += 1
        if i < n:
            j = i
            while j < n and s[j] != ' ': j += 1
            words.append(s[i:j])
            i = j
    return ' '.join(reversed(words))`}},"String to Integer (atoi)":{brute:{name:`Brute Force`,time:`O(n)`,space:`O(n)`,code:`def myAtoi(s):
    s = s.strip()
    if not s: return 0
    sign = -1 if s[0] == '-' else 1
    start = 1 if s[0] in '+-' else 0
    digits = ''
    for c in s[start:]:
        if not c.isdigit(): break
        digits += c
    if not digits: return 0
    result = sign * int(digits)
    return max(-2**31, min(2**31 - 1, result))`},better:{name:`Character by Character`,time:`O(n)`,space:`O(1)`,code:`def myAtoi(s):
    i, n, sign = 0, len(s), 1
    while i < n and s[i] == ' ': i += 1
    if i < n and s[i] in '+-':
        sign = -1 if s[i] == '-' else 1
        i += 1
    result = 0
    while i < n and s[i].isdigit():
        result = result * 10 + int(s[i])
        i += 1
    result *= sign
    return max(-2**31, min(2**31 - 1, result))`},optimal:{name:`Overflow Check`,time:`O(n)`,space:`O(1)`,code:`def myAtoi(s):
    MAX, MIN = 2**31 - 1, -2**31
    i, n, sign, result = 0, len(s), 1, 0
    while i < n and s[i] == ' ': i += 1
    if i < n and s[i] in '+-':
        sign = -1 if s[i] == '-' else 1
        i += 1
    while i < n and s[i].isdigit():
        digit = int(s[i])
        if result > (MAX - digit) // 10:
            return MIN if sign == -1 else MAX
        result = result * 10 + digit
        i += 1
    return result * sign`}},"Word Break":{brute:{name:`Brute Force (Recursion)`,time:`O(2^n)`,space:`O(n)`,code:`def wordBreak(s, wordDict):
    def helper(start):
        if start == len(s): return True
        for end in range(start + 1, len(s) + 1):
            if s[start:end] in wordDict and helper(end):
                return True
        return False
    return helper(0)`},better:{name:`Memoization`,time:`O(n^2 * m)`,space:`O(n)`,code:`def wordBreak(s, wordDict):
    from functools import lru_cache
    words = set(wordDict)
    @lru_cache(None)
    def dp(start):
        if start == len(s): return True
        for end in range(start + 1, len(s) + 1):
            if s[start:end] in words and dp(end):
                return True
        return False
    return dp(0)`},optimal:{name:`Bottom-Up DP`,time:`O(n^2 * m)`,space:`O(n)`,code:`def wordBreak(s, wordDict):
    words = set(wordDict)
    dp = [False] * (len(s) + 1)
    dp[0] = True
    for i in range(1, len(s) + 1):
        for j in range(i):
            if dp[j] and s[j:i] in words:
                dp[i] = True
                break
    return dp[len(s)]`}},"Word Search":{brute:{name:`Brute Force (DFS)`,time:`O(m * n * 4^L)`,space:`O(L)`,code:`def exist(board, word):
    m, n = len(board), len(board[0])
    def dfs(i, j, k, visited):
        if k == len(word): return True
        if (i<0 or i>=m or j<0 or j>=n or
            (i,j) in visited or board[i][j] != word[k]):
            return False
        visited.add((i,j))
        for di,dj in [(0,1),(0,-1),(1,0),(-1,0)]:
            if dfs(i+di, j+dj, k+1, visited): return True
        visited.remove((i,j))
        return False
    for i in range(m):
        for j in range(n):
            if dfs(i, j, 0, set()): return True
    return False`},better:{name:`DFS with In-Place Marking`,time:`O(m * n * 4^L)`,space:`O(L)`,code:`def exist(board, word):
    m, n = len(board), len(board[0])
    def dfs(i, j, k):
        if k == len(word): return True
        if i<0 or i>=m or j<0 or j>=n or board[i][j]!=word[k]:
            return False
        tmp, board[i][j] = board[i][j], '#'
        found = any(dfs(i+di,j+dj,k+1) for di,dj in [(0,1),(0,-1),(1,0),(-1,0)])
        board[i][j] = tmp
        return found
    for i in range(m):
        for j in range(n):
            if dfs(i, j, 0): return True
    return False`},optimal:{name:`Optimized DFS with Pruning`,time:`O(m * n * 4^L)`,space:`O(L)`,code:`def exist(board, word):
    from collections import Counter
    m, n = len(board), len(board[0])
    count = Counter(c for row in board for c in row)
    for c in word:
        if count[c] == 0: return False
    if count[word[0]] > count[word[-1]]: word = word[::-1]
    def dfs(i, j, k):
        if k == len(word): return True
        if i<0 or i>=m or j<0 or j>=n or board[i][j]!=word[k]:
            return False
        board[i][j] = '#'
        res = any(dfs(i+d,j+e,k+1) for d,e in [(0,1),(0,-1),(1,0),(-1,0)])
        board[i][j] = word[k]
        return res
    for i in range(m):
        for j in range(n):
            if dfs(i,j,0): return True
    return False`}},"ZigZag Conversion":{brute:{name:`Brute Force`,time:`O(n)`,space:`O(n)`,code:`def convert(s, numRows):
    if numRows == 1: return s
    rows = [''] * numRows
    cur_row, going_down = 0, False
    for c in s:
        rows[cur_row] += c
        if cur_row == 0 or cur_row == numRows - 1:
            going_down = not going_down
        cur_row += 1 if going_down else -1
    return ''.join(rows)`},better:{name:`Visit by Row`,time:`O(n)`,space:`O(n)`,code:`def convert(s, numRows):
    if numRows == 1: return s
    cycle = 2 * numRows - 2
    result = []
    for row in range(numRows):
        for i in range(row, len(s), cycle):
            result.append(s[i])
            diag = i + cycle - 2 * row
            if 0 < row < numRows-1 and diag < len(s):
                result.append(s[diag])
    return ''.join(result)`},optimal:{name:`Math Index`,time:`O(n)`,space:`O(1)`,code:`def convert(s, numRows):
    if numRows == 1 or numRows >= len(s): return s
    cycle = 2 * numRows - 2
    res = []
    for r in range(numRows):
        for i in range(r, len(s), cycle):
            res.append(s[i])
            mid = i + cycle - 2 * r
            if r != 0 and r != numRows - 1 and mid < len(s):
                res.append(s[mid])
    return ''.join(res)`}},"Contains Duplicate II":{brute:{name:`Brute Force`,time:`O(n * k)`,space:`O(1)`,code:`def containsNearbyDuplicate(nums, k):
    for i in range(len(nums)):
        for j in range(i+1, min(i+k+1, len(nums))):
            if nums[i] == nums[j]: return True
    return False`},better:{name:`HashSet Sliding Window`,time:`O(n)`,space:`O(k)`,code:`def containsNearbyDuplicate(nums, k):
    window = set()
    for i, num in enumerate(nums):
        if num in window: return True
        window.add(num)
        if len(window) > k:
            window.remove(nums[i - k])
    return False`},optimal:{name:`HashMap`,time:`O(n)`,space:`O(n)`,code:`def containsNearbyDuplicate(nums, k):
    last_seen = {}
    for i, num in enumerate(nums):
        if num in last_seen and i - last_seen[num] <= k:
            return True
        last_seen[num] = i
    return False`}},"Count Good Pairs":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(1)`,code:`def numIdenticalPairs(nums):
    count = 0
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] == nums[j]: count += 1
    return count`},better:{name:`Counter Math`,time:`O(n)`,space:`O(n)`,code:`def numIdenticalPairs(nums):
    from collections import Counter
    count = Counter(nums)
    return sum(v * (v-1) // 2 for v in count.values())`},optimal:{name:`Running Count`,time:`O(n)`,space:`O(n)`,code:`def numIdenticalPairs(nums):
    count = {}
    result = 0
    for num in nums:
        result += count.get(num, 0)
        count[num] = count.get(num, 0) + 1
    return result`}},"Design HashMap":{brute:{name:`Brute Force (Array)`,time:`O(1)`,space:`O(10^6)`,code:`class MyHashMap:
    def __init__(self):
        self.data = [-1] * 1000001
    def put(self, key, value):
        self.data[key] = value
    def get(self, key):
        return self.data[key]
    def remove(self, key):
        self.data[key] = -1`},better:{name:`Chaining (List of Lists)`,time:`O(n/k)`,space:`O(n + k)`,code:`class MyHashMap:
    def __init__(self):
        self.size = 1000
        self.buckets = [[] for _ in range(self.size)]
    def put(self, key, value):
        bucket = self.buckets[key % self.size]
        for i, (k, v) in enumerate(bucket):
            if k == key:
                bucket[i] = (key, value)
                return
        bucket.append((key, value))
    def get(self, key):
        for k, v in self.buckets[key % self.size]:
            if k == key: return v
        return -1
    def remove(self, key):
        bucket = self.buckets[key % self.size]
        self.buckets[key%self.size] = [(k,v) for k,v in bucket if k!=key]`},optimal:{name:`Chaining (Linked List)`,time:`O(n/k)`,space:`O(n + k)`,code:`class ListNode:
    def __init__(self, key=-1, val=-1, nxt=None):
        self.key, self.val, self.next = key, val, nxt

class MyHashMap:
    def __init__(self):
        self.size = 1000
        self.buckets = [ListNode() for _ in range(self.size)]
    def put(self, key, value):
        cur = self.buckets[key % self.size]
        while cur.next:
            if cur.next.key == key:
                cur.next.val = value
                return
            cur = cur.next
        cur.next = ListNode(key, value)
    def get(self, key):
        cur = self.buckets[key % self.size].next
        while cur:
            if cur.key == key: return cur.val
            cur = cur.next
        return -1
    def remove(self, key):
        cur = self.buckets[key % self.size]
        while cur.next:
            if cur.next.key == key:
                cur.next = cur.next.next
                return
            cur = cur.next`}},"Design HashSet":{brute:{name:`Brute Force (Boolean Array)`,time:`O(1)`,space:`O(10^6)`,code:`class MyHashSet:
    def __init__(self):
        self.data = [False] * 1000001
    def add(self, key):
        self.data[key] = True
    def remove(self, key):
        self.data[key] = False
    def contains(self, key):
        return self.data[key]`},better:{name:`Chaining (List of Lists)`,time:`O(n/k)`,space:`O(n + k)`,code:`class MyHashSet:
    def __init__(self):
        self.size = 1000
        self.buckets = [[] for _ in range(self.size)]
    def add(self, key):
        bucket = self.buckets[key % self.size]
        if key not in bucket:
            bucket.append(key)
    def remove(self, key):
        bucket = self.buckets[key % self.size]
        if key in bucket:
            bucket.remove(key)
    def contains(self, key):
        return key in self.buckets[key % self.size]`},optimal:{name:`Linked List Chaining`,time:`O(n/k)`,space:`O(n + k)`,code:`class ListNode:
    def __init__(self, val=-1, nxt=None):
        self.val, self.next = val, nxt

class MyHashSet:
    def __init__(self):
        self.size = 1000
        self.buckets = [ListNode() for _ in range(self.size)]
    def add(self, key):
        cur = self.buckets[key % self.size]
        while cur.next:
            if cur.next.val == key: return
            cur = cur.next
        cur.next = ListNode(key)
    def remove(self, key):
        cur = self.buckets[key % self.size]
        while cur.next:
            if cur.next.val == key:
                cur.next = cur.next.next
                return
            cur = cur.next
    def contains(self, key):
        cur = self.buckets[key % self.size].next
        while cur:
            if cur.val == key: return True
            cur = cur.next
        return False`}},"Find Common Characters":{brute:{name:`Brute Force`,time:`O(n * m)`,space:`O(m)`,code:`def commonChars(words):
    result = []
    for c in set(words[0]):
        min_count = min(word.count(c) for word in words)
        result.extend([c] * min_count)
    return result`},better:{name:`Counter Intersection`,time:`O(n * m)`,space:`O(1)`,code:`def commonChars(words):
    from collections import Counter
    common = Counter(words[0])
    for word in words[1:]:
        common &= Counter(word)
    return list(common.elements())`},optimal:{name:`Array Count`,time:`O(n * m)`,space:`O(1)`,code:`def commonChars(words):
    min_freq = [float('inf')] * 26
    for word in words:
        freq = [0] * 26
        for c in word: freq[ord(c)-97] += 1
        for i in range(26): min_freq[i] = min(min_freq[i], freq[i])
    result = []
    for i in range(26):
        result.extend([chr(i+97)] * min_freq[i])
    return result`}},"Happy Number":{brute:{name:`Brute Force (HashSet)`,time:`O(log n)`,space:`O(log n)`,code:`def isHappy(n):
    seen = set()
    while n != 1:
        n = sum(int(d)**2 for d in str(n))
        if n in seen: return False
        seen.add(n)
    return True`},better:{name:`Limit Iterations`,time:`O(log n)`,space:`O(1)`,code:`def isHappy(n):
    def get_next(num):
        total = 0
        while num:
            num, d = divmod(num, 10)
            total += d * d
        return total
    for _ in range(100):
        n = get_next(n)
        if n == 1: return True
    return False`},optimal:{name:`Floyd's Cycle Detection`,time:`O(log n)`,space:`O(1)`,code:`def isHappy(n):
    def get_next(num):
        total = 0
        while num:
            num, d = divmod(num, 10)
            total += d * d
        return total
    slow, fast = n, get_next(n)
    while fast != 1 and slow != fast:
        slow = get_next(slow)
        fast = get_next(get_next(fast))
    return fast == 1`}},"Intersection of Two Arrays":{brute:{name:`Brute Force`,time:`O(m * n)`,space:`O(min(m,n))`,code:`def intersection(nums1, nums2):
    result = set()
    for num in nums1:
        if num in nums2:
            result.add(num)
    return list(result)`},better:{name:`Sort + Two Pointers`,time:`O(m log m + n log n)`,space:`O(1)`,code:`def intersection(nums1, nums2):
    nums1.sort()
    nums2.sort()
    result = set()
    i = j = 0
    while i < len(nums1) and j < len(nums2):
        if nums1[i] < nums2[j]: i += 1
        elif nums1[i] > nums2[j]: j += 1
        else:
            result.add(nums1[i])
            i += 1
            j += 1
    return list(result)`},optimal:{name:`HashSet`,time:`O(m + n)`,space:`O(m + n)`,code:`def intersection(nums1, nums2):
    return list(set(nums1) & set(nums2))`}},"Intersection of Two Arrays II":{brute:{name:`Brute Force`,time:`O(m * n)`,space:`O(min(m,n))`,code:`def intersect(nums1, nums2):
    result = []
    nums2_copy = nums2[:]
    for num in nums1:
        if num in nums2_copy:
            result.append(num)
            nums2_copy.remove(num)
    return result`},better:{name:`Sort + Two Pointers`,time:`O(m log m + n log n)`,space:`O(1)`,code:`def intersect(nums1, nums2):
    nums1.sort()
    nums2.sort()
    result = []
    i = j = 0
    while i < len(nums1) and j < len(nums2):
        if nums1[i] < nums2[j]: i += 1
        elif nums1[i] > nums2[j]: j += 1
        else:
            result.append(nums1[i])
            i += 1
            j += 1
    return result`},optimal:{name:`HashMap`,time:`O(m + n)`,space:`O(min(m,n))`,code:`def intersect(nums1, nums2):
    from collections import Counter
    count = Counter(nums1)
    result = []
    for num in nums2:
        if count[num] > 0:
            result.append(num)
            count[num] -= 1
    return result`}},"Isomorphic Strings":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(n)`,code:`def isIsomorphic(s, t):
    for i in range(len(s)):
        for j in range(i+1, len(s)):
            if (s[i] == s[j]) != (t[i] == t[j]):
                return False
    return True`},better:{name:`Two HashMaps`,time:`O(n)`,space:`O(n)`,code:`def isIsomorphic(s, t):
    s_to_t, t_to_s = {}, {}
    for c1, c2 in zip(s, t):
        if c1 in s_to_t and s_to_t[c1] != c2: return False
        if c2 in t_to_s and t_to_s[c2] != c1: return False
        s_to_t[c1] = c2
        t_to_s[c2] = c1
    return True`},optimal:{name:`Index Mapping`,time:`O(n)`,space:`O(1)`,code:`def isIsomorphic(s, t):
    return len(set(zip(s, t))) == len(set(s)) == len(set(t))`}},"Number of Good Pairs":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(1)`,code:`def numIdenticalPairs(nums):
    count = 0
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] == nums[j]: count += 1
    return count`},better:{name:`Counter Formula`,time:`O(n)`,space:`O(n)`,code:`def numIdenticalPairs(nums):
    from collections import Counter
    return sum(v*(v-1)//2 for v in Counter(nums).values())`},optimal:{name:`Running Count`,time:`O(n)`,space:`O(n)`,code:`def numIdenticalPairs(nums):
    seen = {}
    result = 0
    for num in nums:
        result += seen.get(num, 0)
        seen[num] = seen.get(num, 0) + 1
    return result`}},"Ransom Note":{brute:{name:`Brute Force`,time:`O(m * n)`,space:`O(n)`,code:`def canConstruct(ransomNote, magazine):
    mag = list(magazine)
    for c in ransomNote:
        if c in mag:
            mag.remove(c)
        else:
            return False
    return True`},better:{name:`Counter`,time:`O(m + n)`,space:`O(1)`,code:`def canConstruct(ransomNote, magazine):
    from collections import Counter
    return not (Counter(ransomNote) - Counter(magazine))`},optimal:{name:`Array Count`,time:`O(m + n)`,space:`O(1)`,code:`def canConstruct(ransomNote, magazine):
    count = [0] * 26
    for c in magazine: count[ord(c)-97] += 1
    for c in ransomNote:
        count[ord(c)-97] -= 1
        if count[ord(c)-97] < 0: return False
    return True`}},"Two Sum":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(1)`,code:`def twoSum(nums, target):
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []`},better:{name:`Sort + Two Pointers`,time:`O(n log n)`,space:`O(n)`,code:`def twoSum(nums, target):
    indexed = sorted(enumerate(nums), key=lambda x: x[1])
    l, r = 0, len(indexed) - 1
    while l < r:
        total = indexed[l][1] + indexed[r][1]
        if total == target: return [indexed[l][0], indexed[r][0]]
        elif total < target: l += 1
        else: r -= 1
    return []`},optimal:{name:`HashMap`,time:`O(n)`,space:`O(n)`,code:`def twoSum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        comp = target - num
        if comp in seen: return [seen[comp], i]
        seen[num] = i
    return []`}},"Unique Email Addresses":{brute:{name:`Brute Force`,time:`O(n * m)`,space:`O(n * m)`,code:`def numUniqueEmails(emails):
    unique = set()
    for email in emails:
        local, domain = email.split('@')
        local = local.split('+')[0].replace('.', '')
        unique.add(local + '@' + domain)
    return len(unique)`},better:{name:`Manual Parsing`,time:`O(n * m)`,space:`O(n * m)`,code:`def numUniqueEmails(emails):
    unique = set()
    for email in emails:
        local, domain = email.split('@')
        cleaned = []
        for c in local:
            if c == '+': break
            if c != '.': cleaned.append(c)
        unique.add(''.join(cleaned) + '@' + domain)
    return len(unique)`},optimal:{name:`Set with Generator`,time:`O(n * m)`,space:`O(n * m)`,code:`def numUniqueEmails(emails):
    def clean(email):
        local, domain = email.split('@')
        local = local.split('+')[0].replace('.', '')
        return f"{local}@{domain}"
    return len(set(clean(e) for e in emails))`}},"Valid Anagram":{brute:{name:`Brute Force`,time:`O(n log n)`,space:`O(n)`,code:`def isAnagram(s, t):
    return sorted(s) == sorted(t)`},better:{name:`Counter Comparison`,time:`O(n)`,space:`O(1)`,code:`def isAnagram(s, t):
    from collections import Counter
    return Counter(s) == Counter(t)`},optimal:{name:`Array Count`,time:`O(n)`,space:`O(1)`,code:`def isAnagram(s, t):
    if len(s) != len(t): return False
    count = [0] * 26
    for a, b in zip(s, t):
        count[ord(a)-97] += 1
        count[ord(b)-97] -= 1
    return all(c == 0 for c in count)`}},"Word Pattern":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(n)`,code:`def wordPattern(pattern, s):
    words = s.split()
    if len(pattern) != len(words): return False
    for i in range(len(pattern)):
        for j in range(i+1, len(pattern)):
            if (pattern[i]==pattern[j]) != (words[i]==words[j]):
                return False
    return True`},better:{name:`Two HashMaps`,time:`O(n)`,space:`O(n)`,code:`def wordPattern(pattern, s):
    words = s.split()
    if len(pattern) != len(words): return False
    p2w, w2p = {}, {}
    for p, w in zip(pattern, words):
        if p in p2w and p2w[p] != w: return False
        if w in w2p and w2p[w] != p: return False
        p2w[p], w2p[w] = w, p
    return True`},optimal:{name:`Index Mapping`,time:`O(n)`,space:`O(n)`,code:`def wordPattern(pattern, s):
    words = s.split()
    if len(pattern) != len(words): return False
    return (len(set(zip(pattern, words))) ==
            len(set(pattern)) == len(set(words)))`}},"Contains Duplicate III":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(1)`,code:`def containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff):
    for i in range(len(nums)):
        for j in range(i+1, min(i+indexDiff+1, len(nums))):
            if abs(nums[i] - nums[j]) <= valueDiff:
                return True
    return False`},better:{name:`Sorted Container`,time:`O(n log k)`,space:`O(k)`,code:`def containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff):
    from sortedcontainers import SortedList
    sl = SortedList()
    for i, num in enumerate(nums):
        if i > indexDiff: sl.remove(nums[i-indexDiff-1])
        pos = sl.bisect_left(num - valueDiff)
        if pos < len(sl) and sl[pos] <= num + valueDiff:
            return True
        sl.add(num)
    return False`},optimal:{name:`Bucket Sort`,time:`O(n)`,space:`O(k)`,code:`def containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff):
    if valueDiff < 0: return False
    buckets = {}
    w = valueDiff + 1
    for i, num in enumerate(nums):
        b = num // w
        if b in buckets: return True
        if b-1 in buckets and abs(num - buckets[b-1]) <= valueDiff: return True
        if b+1 in buckets and abs(num - buckets[b+1]) <= valueDiff: return True
        buckets[b] = num
        if i >= indexDiff: del buckets[nums[i-indexDiff] // w]
    return False`}},"4Sum II":{brute:{name:`Brute Force`,time:`O(n^4)`,space:`O(1)`,code:`def fourSumCount(nums1, nums2, nums3, nums4):
    count = 0
    for a in nums1:
        for b in nums2:
            for c in nums3:
                for d in nums4:
                    if a+b+c+d == 0: count += 1
    return count`},better:{name:`Three Loops + Set`,time:`O(n^3)`,space:`O(n)`,code:`def fourSumCount(nums1, nums2, nums3, nums4):
    from collections import Counter
    d4 = Counter(nums4)
    count = 0
    for a in nums1:
        for b in nums2:
            for c in nums3:
                count += d4.get(-(a+b+c), 0)
    return count`},optimal:{name:`Two-Sum Pairs`,time:`O(n^2)`,space:`O(n^2)`,code:`def fourSumCount(nums1, nums2, nums3, nums4):
    from collections import Counter
    ab = Counter(a+b for a in nums1 for b in nums2)
    return sum(ab.get(-(c+d), 0) for c in nums3 for d in nums4)`}},"Brick Wall":{brute:{name:`Brute Force`,time:`O(n * w)`,space:`O(w)`,code:`def leastBricks(wall):
    width = sum(wall[0])
    min_cross = len(wall)
    for pos in range(1, width):
        cross = 0
        for row in wall:
            s = 0
            for b in row:
                s += b
                if s == pos: break
            else: cross += 1
            if s != pos: cross += 0
        min_cross = min(min_cross, cross)
    return min_cross`},better:{name:`Edge Counter`,time:`O(n * m)`,space:`O(n * m)`,code:`def leastBricks(wall):
    from collections import Counter
    edges = Counter()
    for row in wall:
        pos = 0
        for b in row[:-1]:
            pos += b
            edges[pos] += 1
    return len(wall) - max(edges.values(), default=0)`},optimal:{name:`HashMap (Concise)`,time:`O(n * m)`,space:`O(n * m)`,code:`def leastBricks(wall):
    edges = {}
    for row in wall:
        pos = 0
        for b in row[:-1]:
            pos += b
            edges[pos] = edges.get(pos, 0) + 1
    return len(wall) - max(edges.values(), default=0)`}},"Continuous Subarray Sum":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(1)`,code:`def checkSubarraySum(nums, k):
    for i in range(len(nums)):
        total = 0
        for j in range(i, len(nums)):
            total += nums[j]
            if j - i >= 1 and total % k == 0:
                return True
    return False`},better:{name:`Prefix Sum Mod`,time:`O(n)`,space:`O(min(n, k))`,code:`def checkSubarraySum(nums, k):
    remainder_map = {0: -1}
    prefix = 0
    for i, num in enumerate(nums):
        prefix += num
        rem = prefix % k
        if rem in remainder_map:
            if i - remainder_map[rem] >= 2: return True
        else:
            remainder_map[rem] = i
    return False`},optimal:{name:`HashMap First Occurrence`,time:`O(n)`,space:`O(min(n, k))`,code:`def checkSubarraySum(nums, k):
    seen = {0: -1}
    prefix = 0
    for i, num in enumerate(nums):
        prefix = (prefix + num) % k
        if prefix in seen:
            if i - seen[prefix] > 1: return True
        else:
            seen[prefix] = i
    return False`}},"Find Duplicate File in System":{brute:{name:`Brute Force`,time:`O(n^2 * m)`,space:`O(n * m)`,code:`def findDuplicate(paths):
    files = []
    for path in paths:
        parts = path.split()
        root = parts[0]
        for f in parts[1:]:
            name, content = f.split('(')
            files.append((root + '/' + name, content[:-1]))
    result = []
    used = set()
    for i in range(len(files)):
        if i in used: continue
        group = [files[i][0]]
        for j in range(i+1, len(files)):
            if files[j][1] == files[i][1]:
                group.append(files[j][0])
                used.add(j)
        if len(group) > 1: result.append(group)
    return result`},better:{name:`HashMap Grouping`,time:`O(n * m)`,space:`O(n * m)`,code:`def findDuplicate(paths):
    from collections import defaultdict
    content_map = defaultdict(list)
    for path in paths:
        parts = path.split()
        root = parts[0]
        for f in parts[1:]:
            name, content = f.split('(')
            content_map[content[:-1]].append(root + '/' + name)
    return [v for v in content_map.values() if len(v) > 1]`},optimal:{name:`Dict Comprehension`,time:`O(n * m)`,space:`O(n * m)`,code:`def findDuplicate(paths):
    groups = {}
    for path in paths:
        parts = path.split()
        root = parts[0]
        for f in parts[1:]:
            name, content = f.split('(')
            key = content[:-1]
            groups.setdefault(key, []).append(f"{root}/{name}")
    return [v for v in groups.values() if len(v) > 1]`}},"Group Anagrams":{brute:{name:`Brute Force`,time:`O(n^2 * m log m)`,space:`O(n * m)`,code:`def groupAnagrams(strs):
    used = [False] * len(strs)
    result = []
    for i in range(len(strs)):
        if used[i]: continue
        group = [strs[i]]
        for j in range(i+1, len(strs)):
            if not used[j] and sorted(strs[i]) == sorted(strs[j]):
                group.append(strs[j])
                used[j] = True
        result.append(group)
    return result`},better:{name:`Sort Key HashMap`,time:`O(n * m log m)`,space:`O(n * m)`,code:`def groupAnagrams(strs):
    from collections import defaultdict
    groups = defaultdict(list)
    for s in strs:
        groups[tuple(sorted(s))].append(s)
    return list(groups.values())`},optimal:{name:`Count Key HashMap`,time:`O(n * m)`,space:`O(n * m)`,code:`def groupAnagrams(strs):
    from collections import defaultdict
    groups = defaultdict(list)
    for s in strs:
        count = [0] * 26
        for c in s: count[ord(c)-97] += 1
        groups[tuple(count)].append(s)
    return list(groups.values())`}},"Insert Delete GetRandom O(1)":{brute:{name:`Brute Force`,time:`O(n)`,space:`O(n)`,code:`class RandomizedSet:
    def __init__(self): self.data = []
    def insert(self, val):
        if val in self.data: return False
        self.data.append(val)
        return True
    def remove(self, val):
        if val not in self.data: return False
        self.data.remove(val)
        return True
    def getRandom(self):
        import random
        return random.choice(self.data)`},better:{name:`Set + List`,time:`O(1) avg`,space:`O(n)`,code:`class RandomizedSet:
    def __init__(self):
        self.s = set()
        self.lst = []
    def insert(self, val):
        if val in self.s: return False
        self.s.add(val)
        self.lst.append(val)
        return True
    def remove(self, val):
        if val not in self.s: return False
        self.s.remove(val)
        self.lst.remove(val)
        return True
    def getRandom(self):
        import random
        return random.choice(self.lst)`},optimal:{name:`HashMap + List Swap`,time:`O(1)`,space:`O(n)`,code:`class RandomizedSet:
    def __init__(self):
        self.d = {}
        self.lst = []
    def insert(self, val):
        if val in self.d: return False
        self.d[val] = len(self.lst)
        self.lst.append(val)
        return True
    def remove(self, val):
        if val not in self.d: return False
        idx, last = self.d[val], self.lst[-1]
        self.lst[idx], self.d[last] = last, idx
        self.lst.pop()
        del self.d[val]
        return True
    def getRandom(self):
        import random
        return random.choice(self.lst)`}},"LRU Cache":{brute:{name:`Brute Force`,time:`O(n)`,space:`O(capacity)`,code:`class LRUCache:
    def __init__(self, capacity):
        self.cap = capacity
        self.cache = []
    def get(self, key):
        for i, (k, v) in enumerate(self.cache):
            if k == key:
                self.cache.append(self.cache.pop(i))
                return v
        return -1
    def put(self, key, value):
        for i, (k, v) in enumerate(self.cache):
            if k == key:
                self.cache.pop(i)
                break
        self.cache.append((key, value))
        if len(self.cache) > self.cap: self.cache.pop(0)`},better:{name:`OrderedDict`,time:`O(1)`,space:`O(capacity)`,code:`from collections import OrderedDict
class LRUCache:
    def __init__(self, capacity):
        self.cache = OrderedDict()
        self.cap = capacity
    def get(self, key):
        if key not in self.cache: return -1
        self.cache.move_to_end(key)
        return self.cache[key]
    def put(self, key, value):
        if key in self.cache: self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.cap:
            self.cache.popitem(last=False)`},optimal:{name:`Doubly Linked List + HashMap`,time:`O(1)`,space:`O(capacity)`,code:`class Node:
    def __init__(self, k=0, v=0):
        self.key, self.val, self.prev, self.next = k, v, None, None
class LRUCache:
    def __init__(self, capacity):
        self.cap, self.d = capacity, {}
        self.head, self.tail = Node(), Node()
        self.head.next, self.tail.prev = self.tail, self.head
    def _remove(self, node):
        node.prev.next, node.next.prev = node.next, node.prev
    def _add(self, node):
        node.prev, node.next = self.tail.prev, self.tail
        self.tail.prev.next = self.tail.prev = node
    def get(self, key):
        if key not in self.d: return -1
        self._remove(self.d[key]); self._add(self.d[key])
        return self.d[key].val
    def put(self, key, value):
        if key in self.d: self._remove(self.d[key])
        node = Node(key, value); self._add(node); self.d[key] = node
        if len(self.d) > self.cap:
            lru = self.head.next; self._remove(lru); del self.d[lru.key]`}},"Longest Consecutive Sequence":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(1)`,code:`def longestConsecutive(nums):
    res = 0
    for num in nums:
        cur, streak = num, 1
        while cur + 1 in nums:
            cur += 1
            streak += 1
        res = max(res, streak)
    return res`},better:{name:`Sort`,time:`O(n log n)`,space:`O(1)`,code:`def longestConsecutive(nums):
    if not nums: return 0
    nums.sort()
    res = cur = 1
    for i in range(1, len(nums)):
        if nums[i] == nums[i-1]: continue
        if nums[i] == nums[i-1] + 1: cur += 1
        else: cur = 1
        res = max(res, cur)
    return res`},optimal:{name:`HashSet Sequence Start`,time:`O(n)`,space:`O(n)`,code:`def longestConsecutive(nums):
    num_set = set(nums)
    res = 0
    for num in num_set:
        if num - 1 not in num_set:
            cur = num
            while cur + 1 in num_set: cur += 1
            res = max(res, cur - num + 1)
    return res`}},"Maximum Size Subarray Sum Equals k":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(1)`,code:`def maxSubArrayLen(nums, k):
    res = 0
    for i in range(len(nums)):
        total = 0
        for j in range(i, len(nums)):
            total += nums[j]
            if total == k:
                res = max(res, j - i + 1)
    return res`},better:{name:`Prefix Sum HashMap`,time:`O(n)`,space:`O(n)`,code:`def maxSubArrayLen(nums, k):
    prefix_map = {0: -1}
    prefix = res = 0
    for i, num in enumerate(nums):
        prefix += num
        if prefix - k in prefix_map:
            res = max(res, i - prefix_map[prefix - k])
        if prefix not in prefix_map:
            prefix_map[prefix] = i
    return res`},optimal:{name:`HashMap First Index`,time:`O(n)`,space:`O(n)`,code:`def maxSubArrayLen(nums, k):
    seen = {0: -1}
    total = res = 0
    for i, num in enumerate(nums):
        total += num
        if total - k in seen:
            res = max(res, i - seen[total - k])
        seen.setdefault(total, i)
    return res`}},"Subarray Sum Divisible by K":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(1)`,code:`def subarraysDivByK(nums, k):
    count = 0
    for i in range(len(nums)):
        total = 0
        for j in range(i, len(nums)):
            total += nums[j]
            if total % k == 0: count += 1
    return count`},better:{name:`Prefix Sum Mod Count`,time:`O(n)`,space:`O(k)`,code:`def subarraysDivByK(nums, k):
    from collections import Counter
    count = Counter({0: 1})
    prefix = res = 0
    for num in nums:
        prefix = (prefix + num) % k
        res += count[prefix]
        count[prefix] += 1
    return res`},optimal:{name:`Array Mod Count`,time:`O(n)`,space:`O(k)`,code:`def subarraysDivByK(nums, k):
    mods = [0] * k
    mods[0] = 1
    prefix = res = 0
    for num in nums:
        prefix = (prefix + num) % k
        res += mods[prefix]
        mods[prefix] += 1
    return res`}},"Subarray Sum Equals K":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(1)`,code:`def subarraySum(nums, k):
    count = 0
    for i in range(len(nums)):
        total = 0
        for j in range(i, len(nums)):
            total += nums[j]
            if total == k: count += 1
    return count`},better:{name:`Prefix Sum Array`,time:`O(n^2)`,space:`O(n)`,code:`def subarraySum(nums, k):
    prefix = [0] * (len(nums) + 1)
    for i in range(len(nums)):
        prefix[i+1] = prefix[i] + nums[i]
    count = 0
    for i in range(len(nums)):
        for j in range(i+1, len(nums)+1):
            if prefix[j] - prefix[i] == k: count += 1
    return count`},optimal:{name:`Prefix Sum HashMap`,time:`O(n)`,space:`O(n)`,code:`def subarraySum(nums, k):
    count = prefix = 0
    seen = {0: 1}
    for num in nums:
        prefix += num
        count += seen.get(prefix - k, 0)
        seen[prefix] = seen.get(prefix, 0) + 1
    return count`}},"Top K Frequent Elements":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(n)`,code:`def topKFrequent(nums, k):
    from collections import Counter
    count = Counter(nums)
    result = sorted(count.keys(), key=lambda x: -count[x])
    return result[:k]`},better:{name:`Min Heap`,time:`O(n log k)`,space:`O(n)`,code:`def topKFrequent(nums, k):
    from collections import Counter
    import heapq
    count = Counter(nums)
    return heapq.nlargest(k, count.keys(), key=count.get)`},optimal:{name:`Bucket Sort`,time:`O(n)`,space:`O(n)`,code:`def topKFrequent(nums, k):
    from collections import Counter
    count = Counter(nums)
    buckets = [[] for _ in range(len(nums)+1)]
    for num, freq in count.items():
        buckets[freq].append(num)
    result = []
    for i in range(len(buckets)-1, -1, -1):
        result.extend(buckets[i])
        if len(result) >= k: return result[:k]
    return result[:k]`}},"Binary Search":{brute:{name:`Brute Force`,time:`O(n)`,space:`O(1)`,code:`def search(nums, target):
    for i in range(len(nums)):
        if nums[i] == target: return i
    return -1`},better:{name:`Iterative Binary Search`,time:`O(log n)`,space:`O(1)`,code:`def search(nums, target):
    l, r = 0, len(nums) - 1
    while l <= r:
        mid = (l + r) // 2
        if nums[mid] == target: return mid
        elif nums[mid] < target: l = mid + 1
        else: r = mid - 1
    return -1`},optimal:{name:`Recursive Binary Search`,time:`O(log n)`,space:`O(log n)`,code:`def search(nums, target):
    def bs(l, r):
        if l > r: return -1
        mid = (l + r) // 2
        if nums[mid] == target: return mid
        elif nums[mid] < target: return bs(mid+1, r)
        else: return bs(l, mid-1)
    return bs(0, len(nums)-1)`}},"First Bad Version":{brute:{name:`Brute Force`,time:`O(n)`,space:`O(1)`,code:`def firstBadVersion(n):
    for i in range(1, n+1):
        if isBadVersion(i): return i`},better:{name:`Binary Search`,time:`O(log n)`,space:`O(1)`,code:`def firstBadVersion(n):
    l, r = 1, n
    while l < r:
        mid = (l + r) // 2
        if isBadVersion(mid): r = mid
        else: l = mid + 1
    return l`},optimal:{name:`Binary Search (Bit Shift)`,time:`O(log n)`,space:`O(1)`,code:`def firstBadVersion(n):
    l, r = 1, n
    while l < r:
        mid = l + (r - l) // 2
        if isBadVersion(mid): r = mid
        else: l = mid + 1
    return l`}},"Guess Number Higher or Lower":{brute:{name:`Brute Force`,time:`O(n)`,space:`O(1)`,code:`def guessNumber(n):
    for i in range(1, n+1):
        if guess(i) == 0: return i`},better:{name:`Binary Search`,time:`O(log n)`,space:`O(1)`,code:`def guessNumber(n):
    l, r = 1, n
    while l <= r:
        mid = (l + r) // 2
        res = guess(mid)
        if res == 0: return mid
        elif res == -1: r = mid - 1
        else: l = mid + 1`},optimal:{name:`Binary Search (Overflow Safe)`,time:`O(log n)`,space:`O(1)`,code:`def guessNumber(n):
    l, r = 1, n
    while l <= r:
        mid = l + (r - l) // 2
        g = guess(mid)
        if g == 0: return mid
        elif g == -1: r = mid - 1
        else: l = mid + 1`}},"Merge Sorted Array":{brute:{name:`Brute Force`,time:`O((m+n) log(m+n))`,space:`O(1)`,code:`def merge(nums1, m, nums2, n):
    nums1[m:] = nums2
    nums1.sort()`},better:{name:`Extra Array`,time:`O(m+n)`,space:`O(m)`,code:`def merge(nums1, m, nums2, n):
    copy = nums1[:m]
    i = j = k = 0
    while i < m and j < n:
        if copy[i] <= nums2[j]:
            nums1[k] = copy[i]; i += 1
        else:
            nums1[k] = nums2[j]; j += 1
        k += 1
    while i < m: nums1[k] = copy[i]; i += 1; k += 1
    while j < n: nums1[k] = nums2[j]; j += 1; k += 1`},optimal:{name:`Merge from End`,time:`O(m+n)`,space:`O(1)`,code:`def merge(nums1, m, nums2, n):
    i, j, k = m-1, n-1, m+n-1
    while j >= 0:
        if i >= 0 and nums1[i] > nums2[j]:
            nums1[k] = nums1[i]; i -= 1
        else:
            nums1[k] = nums2[j]; j -= 1
        k -= 1`}},"Sqrt(x)":{brute:{name:`Brute Force`,time:`O(sqrt(x))`,space:`O(1)`,code:`def mySqrt(x):
    i = 0
    while i * i <= x:
        i += 1
    return i - 1`},better:{name:`Binary Search`,time:`O(log x)`,space:`O(1)`,code:`def mySqrt(x):
    l, r = 0, x
    while l <= r:
        mid = (l + r) // 2
        if mid * mid <= x < (mid+1)*(mid+1): return mid
        elif mid * mid > x: r = mid - 1
        else: l = mid + 1`},optimal:{name:`Newton's Method`,time:`O(log x)`,space:`O(1)`,code:`def mySqrt(x):
    if x < 2: return x
    r = x
    while r * r > x:
        r = (r + x // r) // 2
    return r`}},"Valid Perfect Square":{brute:{name:`Brute Force`,time:`O(sqrt(n))`,space:`O(1)`,code:`def isPerfectSquare(num):
    i = 1
    while i * i < num:
        i += 1
    return i * i == num`},better:{name:`Binary Search`,time:`O(log n)`,space:`O(1)`,code:`def isPerfectSquare(num):
    l, r = 1, num
    while l <= r:
        mid = (l + r) // 2
        sq = mid * mid
        if sq == num: return True
        elif sq < num: l = mid + 1
        else: r = mid - 1
    return False`},optimal:{name:`Newton's Method`,time:`O(log n)`,space:`O(1)`,code:`def isPerfectSquare(num):
    r = num
    while r * r > num:
        r = (r + num // r) // 2
    return r * r == num`}},"Count of Smaller Numbers After Self":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(n)`,code:`def countSmaller(nums):
    result = []
    for i in range(len(nums)):
        count = sum(1 for j in range(i+1, len(nums)) if nums[j] < nums[i])
        result.append(count)
    return result`},better:{name:`Sorted List (bisect)`,time:`O(n^2)`,space:`O(n)`,code:`def countSmaller(nums):
    import bisect
    sorted_arr = []
    result = []
    for num in reversed(nums):
        pos = bisect.bisect_left(sorted_arr, num)
        result.append(pos)
        sorted_arr.insert(pos, num)
    return result[::-1]`},optimal:{name:`Merge Sort`,time:`O(n log n)`,space:`O(n)`,code:`def countSmaller(nums):
    result = [0] * len(nums)
    indices = list(range(len(nums)))
    def merge_sort(arr):
        if len(arr) <= 1: return arr
        mid = len(arr) // 2
        left, right = merge_sort(arr[:mid]), merge_sort(arr[mid:])
        merged, i, j = [], 0, 0
        while i < len(left) and j < len(right):
            if nums[left[i]] <= nums[right[j]]:
                result[left[i]] += j
                merged.append(left[i]); i += 1
            else: merged.append(right[j]); j += 1
        while i < len(left):
            result[left[i]] += j
            merged.append(left[i]); i += 1
        merged.extend(right[j:])
        return merged
    merge_sort(indices)
    return result`}},"Find Median from Data Stream":{brute:{name:`Brute Force`,time:`O(n log n) per find`,space:`O(n)`,code:`class MedianFinder:
    def __init__(self): self.data = []
    def addNum(self, num): self.data.append(num)
    def findMedian(self):
        self.data.sort()
        n = len(self.data)
        if n % 2: return self.data[n//2]
        return (self.data[n//2-1] + self.data[n//2]) / 2`},better:{name:`Bisect Insert`,time:`O(n) per add`,space:`O(n)`,code:`import bisect
class MedianFinder:
    def __init__(self): self.data = []
    def addNum(self, num): bisect.insort(self.data, num)
    def findMedian(self):
        n = len(self.data)
        if n % 2: return self.data[n//2]
        return (self.data[n//2-1] + self.data[n//2]) / 2`},optimal:{name:`Two Heaps`,time:`O(log n) per add`,space:`O(n)`,code:`import heapq
class MedianFinder:
    def __init__(self):
        self.lo = []  # max-heap (negated)
        self.hi = []  # min-heap
    def addNum(self, num):
        heapq.heappush(self.lo, -num)
        heapq.heappush(self.hi, -heapq.heappop(self.lo))
        if len(self.hi) > len(self.lo):
            heapq.heappush(self.lo, -heapq.heappop(self.hi))
    def findMedian(self):
        if len(self.lo) > len(self.hi): return -self.lo[0]
        return (-self.lo[0] + self.hi[0]) / 2`}},"Median of Two Sorted Arrays":{brute:{name:`Brute Force`,time:`O(m+n)`,space:`O(m+n)`,code:`def findMedianSortedArrays(nums1, nums2):
    merged = sorted(nums1 + nums2)
    n = len(merged)
    if n % 2: return merged[n//2]
    return (merged[n//2-1] + merged[n//2]) / 2`},better:{name:`Two Pointers Merge`,time:`O(m+n)`,space:`O(1)`,code:`def findMedianSortedArrays(nums1, nums2):
    total = len(nums1) + len(nums2)
    i = j = 0
    prev = cur = 0
    for _ in range(total // 2 + 1):
        prev = cur
        if i < len(nums1) and (j >= len(nums2) or nums1[i] <= nums2[j]):
            cur = nums1[i]; i += 1
        else:
            cur = nums2[j]; j += 1
    if total % 2: return cur
    return (prev + cur) / 2`},optimal:{name:`Binary Search`,time:`O(log(min(m,n)))`,space:`O(1)`,code:`def findMedianSortedArrays(nums1, nums2):
    if len(nums1) > len(nums2): nums1, nums2 = nums2, nums1
    m, n = len(nums1), len(nums2)
    l, r = 0, m
    while l <= r:
        i = (l + r) // 2
        j = (m + n + 1) // 2 - i
        left1 = nums1[i-1] if i > 0 else float('-inf')
        right1 = nums1[i] if i < m else float('inf')
        left2 = nums2[j-1] if j > 0 else float('-inf')
        right2 = nums2[j] if j < n else float('inf')
        if left1 <= right2 and left2 <= right1:
            if (m+n) % 2: return max(left1, left2)
            return (max(left1,left2) + min(right1,right2)) / 2
        elif left1 > right2: r = i - 1
        else: l = i + 1`}},"Car Fleet":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(n)`,code:`def carFleet(target, position, speed):
    cars = sorted(zip(position, speed), reverse=True)
    times = [(target - p) / s for p, s in cars]
    fleets = 0
    max_time = 0
    for t in times:
        if t > max_time:
            fleets += 1
            max_time = t
    return fleets`},better:{name:`Sort + Stack`,time:`O(n log n)`,space:`O(n)`,code:`def carFleet(target, position, speed):
    cars = sorted(zip(position, speed), reverse=True)
    stack = []
    for p, s in cars:
        time = (target - p) / s
        if not stack or time > stack[-1]:
            stack.append(time)
    return len(stack)`},optimal:{name:`Sort + Counter`,time:`O(n log n)`,space:`O(n)`,code:`def carFleet(target, position, speed):
    cars = sorted(zip(position, speed), reverse=True)
    fleets = cur_max = 0
    for p, s in cars:
        t = (target - p) / s
        if t > cur_max:
            cur_max = t
            fleets += 1
    return fleets`}},"Find Minimum in Rotated Sorted Array":{brute:{name:`Brute Force`,time:`O(n)`,space:`O(1)`,code:`def findMin(nums):
    return min(nums)`},better:{name:`Linear Scan`,time:`O(n)`,space:`O(1)`,code:`def findMin(nums):
    for i in range(1, len(nums)):
        if nums[i] < nums[i-1]: return nums[i]
    return nums[0]`},optimal:{name:`Binary Search`,time:`O(log n)`,space:`O(1)`,code:`def findMin(nums):
    l, r = 0, len(nums) - 1
    while l < r:
        mid = (l + r) // 2
        if nums[mid] > nums[r]: l = mid + 1
        else: r = mid
    return nums[l]`}},"Find Peak Element":{brute:{name:`Brute Force`,time:`O(n)`,space:`O(1)`,code:`def findPeakElement(nums):
    return nums.index(max(nums))`},better:{name:`Linear Scan`,time:`O(n)`,space:`O(1)`,code:`def findPeakElement(nums):
    for i in range(len(nums)-1):
        if nums[i] > nums[i+1]: return i
    return len(nums) - 1`},optimal:{name:`Binary Search`,time:`O(log n)`,space:`O(1)`,code:`def findPeakElement(nums):
    l, r = 0, len(nums) - 1
    while l < r:
        mid = (l + r) // 2
        if nums[mid] > nums[mid+1]: r = mid
        else: l = mid + 1
    return l`}},"H-Index":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(1)`,code:`def hIndex(citations):
    n = len(citations)
    for h in range(n, 0, -1):
        count = sum(1 for c in citations if c >= h)
        if count >= h: return h
    return 0`},better:{name:`Sort`,time:`O(n log n)`,space:`O(1)`,code:`def hIndex(citations):
    citations.sort(reverse=True)
    for i, c in enumerate(citations):
        if c < i + 1: return i
    return len(citations)`},optimal:{name:`Counting Sort`,time:`O(n)`,space:`O(n)`,code:`def hIndex(citations):
    n = len(citations)
    counts = [0] * (n + 1)
    for c in citations:
        counts[min(c, n)] += 1
    total = 0
    for i in range(n, -1, -1):
        total += counts[i]
        if total >= i: return i
    return 0`}},"K Closest Points to Origin":{brute:{name:`Brute Force`,time:`O(n log n)`,space:`O(n)`,code:`def kClosest(points, k):
    points.sort(key=lambda p: p[0]**2 + p[1]**2)
    return points[:k]`},better:{name:`Max Heap`,time:`O(n log k)`,space:`O(k)`,code:`def kClosest(points, k):
    import heapq
    heap = []
    for x, y in points:
        dist = -(x*x + y*y)
        if len(heap) < k: heapq.heappush(heap, (dist, x, y))
        else: heapq.heappushpop(heap, (dist, x, y))
    return [[x, y] for _, x, y in heap]`},optimal:{name:`Quickselect`,time:`O(n) average`,space:`O(1)`,code:`def kClosest(points, k):
    def dist(p): return p[0]**2 + p[1]**2
    def partition(l, r):
        pivot = dist(points[r])
        i = l
        for j in range(l, r):
            if dist(points[j]) <= pivot:
                points[i], points[j] = points[j], points[i]
                i += 1
        points[i], points[r] = points[r], points[i]
        return i
    l, r = 0, len(points)-1
    while l <= r:
        p = partition(l, r)
        if p == k: break
        elif p < k: l = p + 1
        else: r = p - 1
    return points[:k]`}},"Kth Largest Element in an Array":{brute:{name:`Brute Force`,time:`O(n log n)`,space:`O(1)`,code:`def findKthLargest(nums, k):
    nums.sort()
    return nums[-k]`},better:{name:`Min Heap`,time:`O(n log k)`,space:`O(k)`,code:`def findKthLargest(nums, k):
    import heapq
    heap = nums[:k]
    heapq.heapify(heap)
    for num in nums[k:]:
        if num > heap[0]:
            heapq.heapreplace(heap, num)
    return heap[0]`},optimal:{name:`Quickselect`,time:`O(n) average`,space:`O(1)`,code:`def findKthLargest(nums, k):
    import random
    def quickselect(l, r, k_idx):
        pivot = random.randint(l, r)
        nums[pivot], nums[r] = nums[r], nums[pivot]
        store = l
        for i in range(l, r):
            if nums[i] < nums[r]:
                nums[i], nums[store] = nums[store], nums[i]
                store += 1
        nums[store], nums[r] = nums[r], nums[store]
        if store == k_idx: return nums[store]
        elif store < k_idx: return quickselect(store+1, r, k_idx)
        else: return quickselect(l, store-1, k_idx)
    return quickselect(0, len(nums)-1, len(nums)-k)`}},"Kth Smallest Element in a Sorted Matrix":{brute:{name:`Brute Force`,time:`O(n^2 log(n^2))`,space:`O(n^2)`,code:`def kthSmallest(matrix, k):
    flat = sorted(x for row in matrix for x in row)
    return flat[k-1]`},better:{name:`Min Heap`,time:`O(k log n)`,space:`O(n)`,code:`def kthSmallest(matrix, k):
    import heapq
    n = len(matrix)
    heap = [(matrix[i][0], i, 0) for i in range(min(n, k))]
    heapq.heapify(heap)
    for _ in range(k):
        val, r, c = heapq.heappop(heap)
        if c + 1 < n:
            heapq.heappush(heap, (matrix[r][c+1], r, c+1))
    return val`},optimal:{name:`Binary Search`,time:`O(n log(max-min))`,space:`O(1)`,code:`def kthSmallest(matrix, k):
    n = len(matrix)
    lo, hi = matrix[0][0], matrix[-1][-1]
    while lo < hi:
        mid = (lo + hi) // 2
        count = 0
        j = n - 1
        for i in range(n):
            while j >= 0 and matrix[i][j] > mid: j -= 1
            count += j + 1
        if count < k: lo = mid + 1
        else: hi = mid
    return lo`}},"Largest Number":{brute:{name:`Brute Force`,time:`O(n! * n)`,space:`O(n)`,code:`def largestNumber(nums):
    from itertools import permutations
    best = ""
    for perm in permutations(map(str, nums)):
        candidate = ''.join(perm)
        if candidate > best: best = candidate
    return best if best[0] != '0' else '0'`},better:{name:`Custom Comparator`,time:`O(n log n)`,space:`O(n)`,code:`def largestNumber(nums):
    from functools import cmp_to_key
    def compare(a, b):
        if a+b > b+a: return -1
        elif a+b < b+a: return 1
        return 0
    strs = sorted(map(str, nums), key=cmp_to_key(compare))
    result = ''.join(strs)
    return '0' if result[0] == '0' else result`},optimal:{name:`Key Function`,time:`O(n log n)`,space:`O(n)`,code:`def largestNumber(nums):
    from functools import cmp_to_key
    s = sorted(map(str, nums), key=cmp_to_key(
        lambda a, b: (1, -1)[a+b > b+a] if a+b != b+a else 0))
    return ''.join(s) if s[0] != '0' else '0'`}},"Meeting Rooms II":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(n)`,code:`def minMeetingRooms(intervals):
    if not intervals: return 0
    intervals.sort()
    rooms = [intervals[0][1]]
    for start, end in intervals[1:]:
        placed = False
        for i in range(len(rooms)):
            if rooms[i] <= start:
                rooms[i] = end
                placed = True
                break
        if not placed: rooms.append(end)
    return len(rooms)`},better:{name:`Min Heap`,time:`O(n log n)`,space:`O(n)`,code:`def minMeetingRooms(intervals):
    import heapq
    if not intervals: return 0
    intervals.sort()
    heap = [intervals[0][1]]
    for start, end in intervals[1:]:
        if heap[0] <= start:
            heapq.heapreplace(heap, end)
        else:
            heapq.heappush(heap, end)
    return len(heap)`},optimal:{name:`Chronological Ordering`,time:`O(n log n)`,space:`O(n)`,code:`def minMeetingRooms(intervals):
    starts = sorted(i[0] for i in intervals)
    ends = sorted(i[1] for i in intervals)
    rooms = ep = 0
    for sp in range(len(starts)):
        if starts[sp] < ends[ep]: rooms += 1
        else: ep += 1
    return rooms`}},"Merge Intervals":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(n)`,code:`def merge(intervals):
    intervals.sort()
    merged = [intervals[0]]
    for start, end in intervals[1:]:
        if start <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], end)
        else:
            merged.append([start, end])
    return merged`},better:{name:`Sort + Linear Merge`,time:`O(n log n)`,space:`O(n)`,code:`def merge(intervals):
    intervals.sort(key=lambda x: x[0])
    result = []
    for interval in intervals:
        if result and interval[0] <= result[-1][1]:
            result[-1][1] = max(result[-1][1], interval[1])
        else:
            result.append(interval[:])
    return result`},optimal:{name:`Sort + In-Place`,time:`O(n log n)`,space:`O(1)`,code:`def merge(intervals):
    intervals.sort()
    i = 0
    while i < len(intervals) - 1:
        if intervals[i][1] >= intervals[i+1][0]:
            intervals[i][1] = max(intervals[i][1], intervals[i+1][1])
            intervals.pop(i+1)
        else:
            i += 1
    return intervals`}},"Minimum Number of Arrows to Burst Balloons":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(n)`,code:`def findMinArrowShots(points):
    if not points: return 0
    points.sort()
    arrows = 0
    while points:
        arrows += 1
        end = points[0][1]
        i = 1
        while i < len(points):
            if points[i][0] <= end:
                end = min(end, points[i][1])
                points.pop(i)
            else: i += 1
        points.pop(0)
    return arrows`},better:{name:`Sort by End`,time:`O(n log n)`,space:`O(1)`,code:`def findMinArrowShots(points):
    if not points: return 0
    points.sort(key=lambda x: x[1])
    arrows = 1
    end = points[0][1]
    for i in range(1, len(points)):
        if points[i][0] > end:
            arrows += 1
            end = points[i][1]
    return arrows`},optimal:{name:`Greedy (Sort by End)`,time:`O(n log n)`,space:`O(1)`,code:`def findMinArrowShots(points):
    points.sort(key=lambda x: x[1])
    arrows, cur_end = 1, points[0][1]
    for start, end in points[1:]:
        if start > cur_end:
            arrows += 1
            cur_end = end
    return arrows`}},"Non-overlapping Intervals":{brute:{name:`Brute Force`,time:`O(2^n)`,space:`O(n)`,code:`def eraseOverlapIntervals(intervals):
    intervals.sort()
    n = len(intervals)
    # Find max non-overlapping set
    def backtrack(i, last_end):
        if i == n: return 0
        skip = backtrack(i+1, last_end)
        take = 0
        if intervals[i][0] >= last_end:
            take = 1 + backtrack(i+1, intervals[i][1])
        return max(skip, take)
    return n - backtrack(0, float('-inf'))`},better:{name:`Sort by Start + Greedy`,time:`O(n log n)`,space:`O(1)`,code:`def eraseOverlapIntervals(intervals):
    intervals.sort()
    count = 0
    prev_end = intervals[0][1]
    for i in range(1, len(intervals)):
        if intervals[i][0] < prev_end:
            count += 1
            prev_end = min(prev_end, intervals[i][1])
        else:
            prev_end = intervals[i][1]
    return count`},optimal:{name:`Sort by End`,time:`O(n log n)`,space:`O(1)`,code:`def eraseOverlapIntervals(intervals):
    intervals.sort(key=lambda x: x[1])
    end = intervals[0][1]
    count = 0
    for i in range(1, len(intervals)):
        if intervals[i][0] < end: count += 1
        else: end = intervals[i][1]
    return count`}},"Search a 2D Matrix":{brute:{name:`Brute Force`,time:`O(m*n)`,space:`O(1)`,code:`def searchMatrix(matrix, target):
    for row in matrix:
        for val in row:
            if val == target: return True
    return False`},better:{name:`Row Binary Search`,time:`O(m + log n)`,space:`O(1)`,code:`def searchMatrix(matrix, target):
    import bisect
    for row in matrix:
        if row[0] <= target <= row[-1]:
            idx = bisect.bisect_left(row, target)
            if idx < len(row) and row[idx] == target:
                return True
    return False`},optimal:{name:`Single Binary Search`,time:`O(log(m*n))`,space:`O(1)`,code:`def searchMatrix(matrix, target):
    m, n = len(matrix), len(matrix[0])
    l, r = 0, m*n - 1
    while l <= r:
        mid = (l + r) // 2
        val = matrix[mid // n][mid % n]
        if val == target: return True
        elif val < target: l = mid + 1
        else: r = mid - 1
    return False`}},"Search a 2D Matrix II":{brute:{name:`Brute Force`,time:`O(m*n)`,space:`O(1)`,code:`def searchMatrix(matrix, target):
    for row in matrix:
        for val in row:
            if val == target: return True
    return False`},better:{name:`Binary Search Each Row`,time:`O(m log n)`,space:`O(1)`,code:`def searchMatrix(matrix, target):
    import bisect
    for row in matrix:
        idx = bisect.bisect_left(row, target)
        if idx < len(row) and row[idx] == target:
            return True
    return False`},optimal:{name:`Staircase Search`,time:`O(m+n)`,space:`O(1)`,code:`def searchMatrix(matrix, target):
    r, c = 0, len(matrix[0]) - 1
    while r < len(matrix) and c >= 0:
        if matrix[r][c] == target: return True
        elif matrix[r][c] > target: c -= 1
        else: r += 1
    return False`}},"Search in Rotated Sorted Array":{brute:{name:`Brute Force`,time:`O(n)`,space:`O(1)`,code:`def search(nums, target):
    for i, num in enumerate(nums):
        if num == target: return i
    return -1`},better:{name:`Find Pivot + Binary Search`,time:`O(log n)`,space:`O(1)`,code:`def search(nums, target):
    l, r = 0, len(nums)-1
    while l < r:
        mid = (l+r)//2
        if nums[mid] > nums[r]: l = mid+1
        else: r = mid
    pivot = l
    l, r = 0, len(nums)-1
    if target >= nums[pivot] and target <= nums[r]: l = pivot
    else: r = pivot - 1
    while l <= r:
        mid = (l+r)//2
        if nums[mid] == target: return mid
        elif nums[mid] < target: l = mid+1
        else: r = mid-1
    return -1`},optimal:{name:`Modified Binary Search`,time:`O(log n)`,space:`O(1)`,code:`def search(nums, target):
    l, r = 0, len(nums) - 1
    while l <= r:
        mid = (l + r) // 2
        if nums[mid] == target: return mid
        if nums[l] <= nums[mid]:
            if nums[l] <= target < nums[mid]: r = mid - 1
            else: l = mid + 1
        else:
            if nums[mid] < target <= nums[r]: l = mid + 1
            else: r = mid - 1
    return -1`}},"Search in Rotated Sorted Array II":{brute:{name:`Brute Force`,time:`O(n)`,space:`O(1)`,code:`def search(nums, target):
    return target in nums`},better:{name:`Set Lookup`,time:`O(n)`,space:`O(n)`,code:`def search(nums, target):
    return target in set(nums)`},optimal:{name:`Modified Binary Search`,time:`O(log n) avg, O(n) worst`,space:`O(1)`,code:`def search(nums, target):
    l, r = 0, len(nums) - 1
    while l <= r:
        mid = (l + r) // 2
        if nums[mid] == target: return True
        if nums[l] == nums[mid] == nums[r]:
            l += 1; r -= 1
        elif nums[l] <= nums[mid]:
            if nums[l] <= target < nums[mid]: r = mid - 1
            else: l = mid + 1
        else:
            if nums[mid] < target <= nums[r]: l = mid + 1
            else: r = mid - 1
    return False`}},"Sort Colors":{brute:{name:`Brute Force`,time:`O(n log n)`,space:`O(1)`,code:`def sortColors(nums):
    nums.sort()`},better:{name:`Counting Sort`,time:`O(n)`,space:`O(1)`,code:`def sortColors(nums):
    count = [0, 0, 0]
    for num in nums: count[num] += 1
    i = 0
    for c in range(3):
        for _ in range(count[c]):
            nums[i] = c; i += 1`},optimal:{name:`Dutch National Flag`,time:`O(n)`,space:`O(1)`,code:`def sortColors(nums):
    lo, mid, hi = 0, 0, len(nums) - 1
    while mid <= hi:
        if nums[mid] == 0:
            nums[lo], nums[mid] = nums[mid], nums[lo]
            lo += 1; mid += 1
        elif nums[mid] == 1: mid += 1
        else:
            nums[mid], nums[hi] = nums[hi], nums[mid]
            hi -= 1`}},"Sort List":{brute:{name:`Brute Force`,time:`O(n log n)`,space:`O(n)`,code:`def sortList(head):
    vals = []
    cur = head
    while cur: vals.append(cur.val); cur = cur.next
    vals.sort()
    cur = head
    for v in vals: cur.val = v; cur = cur.next
    return head`},better:{name:`Top-Down Merge Sort`,time:`O(n log n)`,space:`O(log n)`,code:`def sortList(head):
    if not head or not head.next: return head
    slow, fast = head, head.next
    while fast and fast.next:
        slow, fast = slow.next, fast.next.next
    mid = slow.next
    slow.next = None
    left, right = sortList(head), sortList(mid)
    dummy = cur = ListNode(0)
    while left and right:
        if left.val < right.val: cur.next = left; left = left.next
        else: cur.next = right; right = right.next
        cur = cur.next
    cur.next = left or right
    return dummy.next`},optimal:{name:`Bottom-Up Merge Sort`,time:`O(n log n)`,space:`O(1)`,code:`def sortList(head):
    def get_size(h):
        c = 0
        while h: c += 1; h = h.next
        return c
    def split(h, n):
        for _ in range(n-1):
            if not h: break
            h = h.next
        if not h: return None
        nxt = h.next; h.next = None
        return nxt
    def merge(a, b):
        d = cur = ListNode(0)
        while a and b:
            if a.val < b.val: cur.next = a; a = a.next
            else: cur.next = b; b = b.next
            cur = cur.next
        cur.next = a or b
        while cur.next: cur = cur.next
        return d.next, cur
    size = get_size(head); step = 1
    dummy = ListNode(0); dummy.next = head
    while step < size:
        cur, tail = dummy.next, dummy
        while cur:
            left = cur; right = split(left, step)
            cur = split(right, step)
            merged, end = merge(left, right)
            tail.next = merged; tail = end
        step *= 2
    return dummy.next`}},"Task Scheduler":{brute:{name:`Brute Force`,time:`O(n * 26)`,space:`O(1)`,code:`def leastInterval(tasks, n):
    from collections import Counter
    count = Counter(tasks)
    time = 0
    while any(count.values()):
        available = sorted(count.keys(), key=lambda x: -count[x])
        cycle = []
        for i in range(n + 1):
            if not any(count.values()): break
            if i < len(available) and count[available[i]] > 0:
                cycle.append(available[i])
                count[available[i]] -= 1
            time += 1
    return time`},better:{name:`Max Heap + Cooldown`,time:`O(n log 26)`,space:`O(1)`,code:`def leastInterval(tasks, n):
    from collections import Counter, deque
    import heapq
    count = Counter(tasks)
    heap = [-c for c in count.values()]
    heapq.heapify(heap)
    queue = deque()
    time = 0
    while heap or queue:
        time += 1
        if heap:
            cnt = heapq.heappop(heap) + 1
            if cnt: queue.append((cnt, time + n))
        if queue and queue[0][1] == time:
            heapq.heappush(heap, queue.popleft()[0])
    return time`},optimal:{name:`Math Formula`,time:`O(n)`,space:`O(1)`,code:`def leastInterval(tasks, n):
    from collections import Counter
    count = Counter(tasks)
    max_freq = max(count.values())
    max_count = sum(1 for v in count.values() if v == max_freq)
    result = (max_freq - 1) * (n + 1) + max_count
    return max(result, len(tasks))`}},"Wiggle Sort II":{brute:{name:`Brute Force`,time:`O(n log n)`,space:`O(n)`,code:`def wiggleSort(nums):
    sorted_nums = sorted(nums)
    n = len(nums)
    mid = (n - 1) // 2
    small = sorted_nums[:mid+1][::-1]
    large = sorted_nums[mid+1:][::-1]
    for i in range(n):
        nums[i] = small[i//2] if i % 2 == 0 else large[i//2]`},better:{name:`Sort + Interleave`,time:`O(n log n)`,space:`O(n)`,code:`def wiggleSort(nums):
    s = sorted(nums)
    n = len(nums)
    half = (n + 1) // 2
    small, large = s[:half][::-1], s[half:][::-1]
    for i in range(n):
        nums[i] = small[i//2] if i%2==0 else large[i//2]`},optimal:{name:`Quickselect + 3-way partition`,time:`O(n) average`,space:`O(1)`,code:`def wiggleSort(nums):
    import random
    n = len(nums)
    def nth(k):
        l, r = 0, n-1
        while True:
            pivot = nums[random.randint(l, r)]
            i, j, p = l, l, r
            while j <= p:
                if nums[j] < pivot: nums[i],nums[j]=nums[j],nums[i]; i+=1; j+=1
                elif nums[j] > pivot: nums[j],nums[p]=nums[p],nums[j]; p-=1
                else: j+=1
            if i <= k <= p: return nums[k]
            elif k < i: r = i-1
            else: l = p+1
    median = nth(n//2)
    def idx(i): return (1+2*i) % (n|1)
    i, j, k = 0, 0, n-1
    while j <= k:
        if nums[idx(j)] > median:
            nums[idx(i)],nums[idx(j)]=nums[idx(j)],nums[idx(i)]; i+=1; j+=1
        elif nums[idx(j)] < median:
            nums[idx(j)],nums[idx(k)]=nums[idx(k)],nums[idx(j)]; k-=1
        else: j+=1`}},"Backspace String Compare":{brute:{name:`Brute Force`,time:`O(n)`,space:`O(n)`,code:`def backspaceCompare(s, t):
    def build(st):
        res = []
        for c in st:
            if c != '#': res.append(c)
            elif res: res.pop()
        return ''.join(res)
    return build(s) == build(t)`},better:{name:`Stack`,time:`O(n)`,space:`O(n)`,code:`def backspaceCompare(s, t):
    def process(st):
        stack = []
        for c in st:
            if c == '#':
                if stack: stack.pop()
            else: stack.append(c)
        return stack
    return process(s) == process(t)`},optimal:{name:`Two Pointers (O(1) Space)`,time:`O(n)`,space:`O(1)`,code:`def backspaceCompare(s, t):
    def next_char(st, i):
        skip = 0
        while i >= 0:
            if st[i] == '#': skip += 1
            elif skip: skip -= 1
            else: break
            i -= 1
        return i
    i, j = len(s)-1, len(t)-1
    while i >= 0 or j >= 0:
        i, j = next_char(s, i), next_char(t, j)
        if i >= 0 and j >= 0 and s[i] != t[j]: return False
        if (i >= 0) != (j >= 0): return False
        i -= 1; j -= 1
    return True`}},"Implement Queue using Stacks":{brute:{name:`Brute Force`,time:`O(n) per push`,space:`O(n)`,code:`class MyQueue:
    def __init__(self): self.stack = []
    def push(self, x):
        tmp = []
        while self.stack: tmp.append(self.stack.pop())
        self.stack.append(x)
        while tmp: self.stack.append(tmp.pop())
    def pop(self): return self.stack.pop()
    def peek(self): return self.stack[-1]
    def empty(self): return not self.stack`},better:{name:`Two Stacks (Eager)`,time:`O(n) per push`,space:`O(n)`,code:`class MyQueue:
    def __init__(self):
        self.s1, self.s2 = [], []
    def push(self, x):
        while self.s1: self.s2.append(self.s1.pop())
        self.s1.append(x)
        while self.s2: self.s1.append(self.s2.pop())
    def pop(self): return self.s1.pop()
    def peek(self): return self.s1[-1]
    def empty(self): return not self.s1`},optimal:{name:`Two Stacks (Lazy)`,time:`O(1) amortized`,space:`O(n)`,code:`class MyQueue:
    def __init__(self):
        self.in_stack, self.out_stack = [], []
    def push(self, x): self.in_stack.append(x)
    def pop(self):
        self.peek()
        return self.out_stack.pop()
    def peek(self):
        if not self.out_stack:
            while self.in_stack:
                self.out_stack.append(self.in_stack.pop())
        return self.out_stack[-1]
    def empty(self): return not self.in_stack and not self.out_stack`}},"Implement Stack using Queues":{brute:{name:`Brute Force`,time:`O(n) per push`,space:`O(n)`,code:`from collections import deque
class MyStack:
    def __init__(self): self.q = deque()
    def push(self, x):
        self.q.append(x)
        for _ in range(len(self.q) - 1):
            self.q.append(self.q.popleft())
    def pop(self): return self.q.popleft()
    def top(self): return self.q[0]
    def empty(self): return not self.q`},better:{name:`Two Queues`,time:`O(n) per push`,space:`O(n)`,code:`from collections import deque
class MyStack:
    def __init__(self): self.q1, self.q2 = deque(), deque()
    def push(self, x):
        self.q2.append(x)
        while self.q1: self.q2.append(self.q1.popleft())
        self.q1, self.q2 = self.q2, self.q1
    def pop(self): return self.q1.popleft()
    def top(self): return self.q1[0]
    def empty(self): return not self.q1`},optimal:{name:`Single Queue (Rotate)`,time:`O(n) per push`,space:`O(n)`,code:`from collections import deque
class MyStack:
    def __init__(self): self.q = deque()
    def push(self, x):
        self.q.append(x)
        for _ in range(len(self.q)-1):
            self.q.append(self.q.popleft())
    def pop(self): return self.q.popleft()
    def top(self): return self.q[0]
    def empty(self): return len(self.q) == 0`}},"Moving Average from Data Stream":{brute:{name:`Brute Force`,time:`O(n)`,space:`O(n)`,code:`class MovingAverage:
    def __init__(self, size):
        self.size = size
        self.data = []
    def next(self, val):
        self.data.append(val)
        window = self.data[-self.size:]
        return sum(window) / len(window)`},better:{name:`Deque`,time:`O(1)`,space:`O(size)`,code:`from collections import deque
class MovingAverage:
    def __init__(self, size):
        self.q = deque(maxlen=size)
        self.total = 0
    def next(self, val):
        if len(self.q) == self.q.maxlen:
            self.total -= self.q[0]
        self.q.append(val)
        self.total += val
        return self.total / len(self.q)`},optimal:{name:`Circular Array`,time:`O(1)`,space:`O(size)`,code:`class MovingAverage:
    def __init__(self, size):
        self.size = size
        self.arr = [0] * size
        self.idx = self.total = self.count = 0
    def next(self, val):
        self.total -= self.arr[self.idx % self.size]
        self.arr[self.idx % self.size] = val
        self.total += val
        self.idx += 1
        self.count = min(self.count + 1, self.size)
        return self.total / self.count`}},"Next Greater Element I":{brute:{name:`Brute Force`,time:`O(n * m)`,space:`O(1)`,code:`def nextGreaterElement(nums1, nums2):
    result = []
    for num in nums1:
        idx = nums2.index(num)
        found = -1
        for j in range(idx+1, len(nums2)):
            if nums2[j] > num:
                found = nums2[j]; break
        result.append(found)
    return result`},better:{name:`HashMap + Linear Scan`,time:`O(n * m)`,space:`O(n)`,code:`def nextGreaterElement(nums1, nums2):
    idx_map = {v: i for i, v in enumerate(nums2)}
    result = []
    for num in nums1:
        found = -1
        for j in range(idx_map[num]+1, len(nums2)):
            if nums2[j] > num:
                found = nums2[j]; break
        result.append(found)
    return result`},optimal:{name:`Monotonic Stack`,time:`O(n + m)`,space:`O(m)`,code:`def nextGreaterElement(nums1, nums2):
    stack = []
    nge = {}
    for num in nums2:
        while stack and stack[-1] < num:
            nge[stack.pop()] = num
        stack.append(num)
    return [nge.get(num, -1) for num in nums1]`}},"Number of Recent Calls":{brute:{name:`Brute Force`,time:`O(n)`,space:`O(n)`,code:`class RecentCounter:
    def __init__(self): self.calls = []
    def ping(self, t):
        self.calls.append(t)
        return sum(1 for c in self.calls if c >= t - 3000)`},better:{name:`Binary Search`,time:`O(log n)`,space:`O(n)`,code:`import bisect
class RecentCounter:
    def __init__(self): self.calls = []
    def ping(self, t):
        self.calls.append(t)
        idx = bisect.bisect_left(self.calls, t - 3000)
        return len(self.calls) - idx`},optimal:{name:`Queue`,time:`O(1) amortized`,space:`O(w)`,code:`from collections import deque
class RecentCounter:
    def __init__(self): self.q = deque()
    def ping(self, t):
        self.q.append(t)
        while self.q[0] < t - 3000:
            self.q.popleft()
        return len(self.q)`}},"Remove All Adjacent Duplicates in String":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(n)`,code:`def removeDuplicates(s):
    changed = True
    while changed:
        changed = False
        i = 0
        while i < len(s) - 1:
            if s[i] == s[i+1]:
                s = s[:i] + s[i+2:]
                changed = True
            else: i += 1
    return s`},better:{name:`Replace Loop`,time:`O(n^2)`,space:`O(n)`,code:`def removeDuplicates(s):
    prev = ""
    while prev != s:
        prev = s
        for c in set(s):
            s = s.replace(c*2, "")
    return s`},optimal:{name:`Stack`,time:`O(n)`,space:`O(n)`,code:`def removeDuplicates(s):
    stack = []
    for c in s:
        if stack and stack[-1] == c:
            stack.pop()
        else:
            stack.append(c)
    return ''.join(stack)`}},"Valid Parentheses":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(n)`,code:`def isValid(s):
    while '()' in s or '[]' in s or '{}' in s:
        s = s.replace('()', '').replace('[]', '').replace('{}', '')
    return s == ''`},better:{name:`Stack with Map`,time:`O(n)`,space:`O(n)`,code:`def isValid(s):
    stack = []
    mapping = {')':'(', ']':'[', '}':'{'}
    for c in s:
        if c in mapping:
            if not stack or stack[-1] != mapping[c]: return False
            stack.pop()
        else:
            stack.append(c)
    return not stack`},optimal:{name:`Stack (Concise)`,time:`O(n)`,space:`O(n)`,code:`def isValid(s):
    stack = []
    pairs = {'(':')', '[':']', '{':'}'}
    for c in s:
        if c in pairs: stack.append(pairs[c])
        elif not stack or stack.pop() != c: return False
    return not stack`}},"Basic Calculator":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(n)`,code:`def calculate(s):
    def eval_simple(expr):
        result = num = 0
        sign = 1
        for c in expr:
            if c.isdigit(): num = num*10 + int(c)
            elif c in '+-':
                result += sign * num
                num = 0
                sign = 1 if c == '+' else -1
        return result + sign * num
    while '(' in s:
        i = s.rfind('(')
        j = s.find(')', i)
        s = s[:i] + str(eval_simple(s[i+1:j])) + s[j+1:]
    return eval_simple(s)`},better:{name:`Stack (Sign Tracking)`,time:`O(n)`,space:`O(n)`,code:`def calculate(s):
    stack = []
    num, sign, result = 0, 1, 0
    for c in s:
        if c.isdigit(): num = num*10 + int(c)
        elif c == '+':
            result += sign * num; num = 0; sign = 1
        elif c == '-':
            result += sign * num; num = 0; sign = -1
        elif c == '(':
            stack.append(result); stack.append(sign)
            result, sign = 0, 1
        elif c == ')':
            result += sign * num; num = 0
            result *= stack.pop(); result += stack.pop()
    return result + sign * num`},optimal:{name:`Recursive`,time:`O(n)`,space:`O(n)`,code:`def calculate(s):
    def helper(i):
        num, sign, result = 0, 1, 0
        while i < len(s):
            if s[i].isdigit(): num = num*10 + int(s[i])
            elif s[i] == '+':
                result += sign*num; num = 0; sign = 1
            elif s[i] == '-':
                result += sign*num; num = 0; sign = -1
            elif s[i] == '(':
                val, i = helper(i+1)
                num = val
            elif s[i] == ')':
                return result + sign*num, i
            i += 1
        return result + sign*num, i
    return helper(0)[0]`}},"Largest Rectangle in Histogram":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(1)`,code:`def largestRectangleArea(heights):
    res = 0
    for i in range(len(heights)):
        min_h = heights[i]
        for j in range(i, len(heights)):
            min_h = min(min_h, heights[j])
            res = max(res, min_h * (j - i + 1))
    return res`},better:{name:`Left/Right Boundaries`,time:`O(n)`,space:`O(n)`,code:`def largestRectangleArea(heights):
    n = len(heights)
    left, right = [0]*n, [0]*n
    stack = []
    for i in range(n):
        while stack and heights[stack[-1]] >= heights[i]: stack.pop()
        left[i] = stack[-1]+1 if stack else 0
        stack.append(i)
    stack = []
    for i in range(n-1, -1, -1):
        while stack and heights[stack[-1]] >= heights[i]: stack.pop()
        right[i] = stack[-1]-1 if stack else n-1
        stack.append(i)
    return max(heights[i]*(right[i]-left[i]+1) for i in range(n))`},optimal:{name:`Monotonic Stack`,time:`O(n)`,space:`O(n)`,code:`def largestRectangleArea(heights):
    stack = [-1]
    res = 0
    for i, h in enumerate(heights):
        while stack[-1] != -1 and heights[stack[-1]] >= h:
            height = heights[stack.pop()]
            width = i - stack[-1] - 1
            res = max(res, height * width)
        stack.append(i)
    while stack[-1] != -1:
        height = heights[stack.pop()]
        width = len(heights) - stack[-1] - 1
        res = max(res, height * width)
    return res`}},"Maximal Rectangle":{brute:{name:`Brute Force`,time:`O(m^2 * n^2)`,space:`O(1)`,code:`def maximalRectangle(matrix):
    if not matrix: return 0
    m, n = len(matrix), len(matrix[0])
    res = 0
    for i in range(m):
        for j in range(n):
            if matrix[i][j] == '1':
                width = n
                for r in range(i, m):
                    if matrix[r][j] == '0': break
                    w = 0
                    while j+w < width and matrix[r][j+w] == '1': w += 1
                    width = min(width, j+w)
                    res = max(res, (r-i+1) * (width-j))
    return res`},better:{name:`Heights + Histogram`,time:`O(m * n)`,space:`O(n)`,code:`def maximalRectangle(matrix):
    if not matrix: return 0
    n = len(matrix[0])
    heights = [0] * n
    res = 0
    for row in matrix:
        for j in range(n):
            heights[j] = heights[j]+1 if row[j]=='1' else 0
        stack = [-1]
        for i, h in enumerate(heights):
            while stack[-1]!=-1 and heights[stack[-1]]>=h:
                ht = heights[stack.pop()]
                res = max(res, ht*(i-stack[-1]-1))
            stack.append(i)
        while stack[-1] != -1:
            ht = heights[stack.pop()]
            res = max(res, ht*(n-stack[-1]-1))
    return res`},optimal:{name:`DP Heights + Stack`,time:`O(m * n)`,space:`O(n)`,code:`def maximalRectangle(matrix):
    if not matrix: return 0
    n = len(matrix[0])
    h = [0]*(n+1)
    res = 0
    for row in matrix:
        for j in range(n):
            h[j] = h[j]+1 if row[j]=='1' else 0
        stack = [-1]
        for i in range(n+1):
            while stack[-1]!=-1 and h[stack[-1]]>=h[i]:
                height = h[stack.pop()]
                res = max(res, height*(i-stack[-1]-1))
            stack.append(i)
    return res`}},"Sliding Window Maximum":{brute:{name:`Brute Force`,time:`O(n * k)`,space:`O(n)`,code:`def maxSlidingWindow(nums, k):
    return [max(nums[i:i+k]) for i in range(len(nums)-k+1)]`},better:{name:`Max Heap`,time:`O(n log n)`,space:`O(n)`,code:`def maxSlidingWindow(nums, k):
    import heapq
    heap = [(-nums[i], i) for i in range(k)]
    heapq.heapify(heap)
    result = [-heap[0][0]]
    for i in range(k, len(nums)):
        heapq.heappush(heap, (-nums[i], i))
        while heap[0][1] <= i - k: heapq.heappop(heap)
        result.append(-heap[0][0])
    return result`},optimal:{name:`Monotonic Deque`,time:`O(n)`,space:`O(k)`,code:`def maxSlidingWindow(nums, k):
    from collections import deque
    dq = deque()
    result = []
    for i, num in enumerate(nums):
        while dq and nums[dq[-1]] <= num: dq.pop()
        dq.append(i)
        if dq[0] <= i - k: dq.popleft()
        if i >= k - 1: result.append(nums[dq[0]])
    return result`}},"Asteroid Collision":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(n)`,code:`def asteroidCollision(asteroids):
    changed = True
    while changed:
        changed = False
        result = []
        i = 0
        while i < len(asteroids):
            if result and result[-1]>0 and asteroids[i]<0:
                changed = True
                if abs(result[-1]) < abs(asteroids[i]): result.pop(); continue
                elif abs(result[-1]) == abs(asteroids[i]): result.pop()
            else: result.append(asteroids[i])
            i += 1
        asteroids = result
    return asteroids`},better:{name:`Stack (Basic)`,time:`O(n)`,space:`O(n)`,code:`def asteroidCollision(asteroids):
    stack = []
    for ast in asteroids:
        alive = True
        while alive and stack and ast < 0 < stack[-1]:
            if stack[-1] < -ast: stack.pop()
            elif stack[-1] == -ast: stack.pop(); alive = False
            else: alive = False
        if alive: stack.append(ast)
    return stack`},optimal:{name:`Stack (Concise)`,time:`O(n)`,space:`O(n)`,code:`def asteroidCollision(asteroids):
    stack = []
    for a in asteroids:
        while stack and a < 0 < stack[-1]:
            if stack[-1] < -a: stack.pop(); continue
            elif stack[-1] == -a: stack.pop()
            break
        else:
            stack.append(a)
    return stack`}},"Basic Calculator II":{brute:{name:`Brute Force`,time:`O(n)`,space:`O(n)`,code:`def calculate(s):
    tokens, num = [], ''
    for c in s:
        if c.isdigit(): num += c
        elif c in '+-*/':
            tokens.append(int(num)); num = ''; tokens.append(c)
    tokens.append(int(num))
    # Handle * /
    stack = [tokens[0]]
    i = 1
    while i < len(tokens):
        op, val = tokens[i], tokens[i+1]
        if op == '*': stack.append(stack.pop() * val)
        elif op == '/': stack.append(int(stack.pop() / val))
        else: stack.extend([op, val])
        i += 2
    result = stack[0]
    i = 1
    while i < len(stack):
        if stack[i] == '+': result += stack[i+1]
        else: result -= stack[i+1]
        i += 2
    return result`},better:{name:`Stack`,time:`O(n)`,space:`O(n)`,code:`def calculate(s):
    stack, num, op = [], 0, '+'
    for i, c in enumerate(s):
        if c.isdigit(): num = num*10 + int(c)
        if c in '+-*/' or i == len(s)-1:
            if op == '+': stack.append(num)
            elif op == '-': stack.append(-num)
            elif op == '*': stack.append(stack.pop()*num)
            elif op == '/': stack.append(int(stack.pop()/num))
            op, num = c, 0
    return sum(stack)`},optimal:{name:`O(1) Space`,time:`O(n)`,space:`O(1)`,code:`def calculate(s):
    result = last = num = 0
    op = '+'
    for i, c in enumerate(s):
        if c.isdigit(): num = num*10 + int(c)
        if c in '+-*/' or i == len(s)-1:
            if op == '+': result += last; last = num
            elif op == '-': result += last; last = -num
            elif op == '*': last *= num
            elif op == '/': last = int(last/num)
            op, num = c, 0
    return result + last`}},"Build an Array With Stack Operations":{brute:{name:`Brute Force`,time:`O(n)`,space:`O(n)`,code:`def buildArray(target, n):
    ops = []
    idx = 0
    for i in range(1, n+1):
        if idx >= len(target): break
        ops.append("Push")
        if target[idx] == i: idx += 1
        else: ops.append("Pop")
    return ops`},better:{name:`Set Lookup`,time:`O(n)`,space:`O(n)`,code:`def buildArray(target, n):
    ops = []
    target_set = set(target)
    for i in range(1, target[-1]+1):
        ops.append("Push")
        if i not in target_set: ops.append("Pop")
    return ops`},optimal:{name:`Two Pointers`,time:`O(n)`,space:`O(1)`,code:`def buildArray(target, n):
    ops = []
    j = 0
    for i in range(1, target[-1]+1):
        ops.append("Push")
        if i == target[j]: j += 1
        else: ops.append("Pop")
    return ops`}},"Daily Temperatures":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(n)`,code:`def dailyTemperatures(temps):
    n = len(temps)
    result = [0] * n
    for i in range(n):
        for j in range(i+1, n):
            if temps[j] > temps[i]:
                result[i] = j - i
                break
    return result`},better:{name:`Reverse Traversal`,time:`O(n)`,space:`O(n)`,code:`def dailyTemperatures(temps):
    n = len(temps)
    result = [0] * n
    hottest = 0
    for i in range(n-1, -1, -1):
        if temps[i] >= hottest:
            hottest = temps[i]
            continue
        days = 1
        while temps[i+days] <= temps[i]:
            days += result[i+days]
        result[i] = days
    return result`},optimal:{name:`Monotonic Stack`,time:`O(n)`,space:`O(n)`,code:`def dailyTemperatures(temps):
    n = len(temps)
    result = [0] * n
    stack = []
    for i, t in enumerate(temps):
        while stack and temps[stack[-1]] < t:
            idx = stack.pop()
            result[idx] = i - idx
        stack.append(i)
    return result`}},"Decode String":{brute:{name:`Brute Force`,time:`O(n * max_k)`,space:`O(n)`,code:`def decodeString(s):
    while '[' in s:
        i = s.rfind('[')
        j = s.find(']', i)
        inner = s[i+1:j]
        k_start = i - 1
        while k_start >= 0 and s[k_start].isdigit(): k_start -= 1
        k = int(s[k_start+1:i])
        s = s[:k_start+1] + inner * k + s[j+1:]
    return s`},better:{name:`Stack`,time:`O(n * max_k)`,space:`O(n)`,code:`def decodeString(s):
    stack = []
    cur_str = ''
    cur_num = 0
    for c in s:
        if c.isdigit(): cur_num = cur_num*10 + int(c)
        elif c == '[':
            stack.append((cur_str, cur_num))
            cur_str, cur_num = '', 0
        elif c == ']':
            prev_str, num = stack.pop()
            cur_str = prev_str + cur_str * num
        else: cur_str += c
    return cur_str`},optimal:{name:`Recursive`,time:`O(n * max_k)`,space:`O(n)`,code:`def decodeString(s):
    def helper(i):
        result, num = '', 0
        while i < len(s):
            if s[i].isdigit(): num = num*10 + int(s[i])
            elif s[i] == '[':
                inner, i = helper(i+1)
                result += inner * num
                num = 0
            elif s[i] == ']': return result, i
            else: result += s[i]
            i += 1
        return result, i
    return helper(0)[0]`}},"Design Browser History":{brute:{name:`Brute Force`,time:`O(n)`,space:`O(n)`,code:`class BrowserHistory:
    def __init__(self, homepage):
        self.history = [homepage]
        self.cur = 0
    def visit(self, url):
        self.history = self.history[:self.cur+1]
        self.history.append(url)
        self.cur += 1
    def back(self, steps):
        self.cur = max(0, self.cur - steps)
        return self.history[self.cur]
    def forward(self, steps):
        self.cur = min(len(self.history)-1, self.cur + steps)
        return self.history[self.cur]`},better:{name:`Two Stacks`,time:`O(1)`,space:`O(n)`,code:`class BrowserHistory:
    def __init__(self, homepage):
        self.back_stack = [homepage]
        self.fwd_stack = []
    def visit(self, url):
        self.back_stack.append(url)
        self.fwd_stack = []
    def back(self, steps):
        while steps > 0 and len(self.back_stack) > 1:
            self.fwd_stack.append(self.back_stack.pop())
            steps -= 1
        return self.back_stack[-1]
    def forward(self, steps):
        while steps > 0 and self.fwd_stack:
            self.back_stack.append(self.fwd_stack.pop())
            steps -= 1
        return self.back_stack[-1]`},optimal:{name:`Array + Pointer`,time:`O(1)`,space:`O(n)`,code:`class BrowserHistory:
    def __init__(self, homepage):
        self.urls = [homepage]
        self.cur = 0
        self.end = 0
    def visit(self, url):
        self.cur += 1
        if self.cur == len(self.urls): self.urls.append(url)
        else: self.urls[self.cur] = url
        self.end = self.cur
    def back(self, steps):
        self.cur = max(0, self.cur - steps)
        return self.urls[self.cur]
    def forward(self, steps):
        self.cur = min(self.end, self.cur + steps)
        return self.urls[self.cur]`}},"Design Circular Deque":{brute:{name:`Brute Force`,time:`O(n) per insert/delete`,space:`O(k)`,code:`class MyCircularDeque:
    def __init__(self, k):
        self.data = []
        self.cap = k
    def insertFront(self, value):
        if len(self.data) == self.cap: return False
        self.data.insert(0, value); return True
    def insertLast(self, value):
        if len(self.data) == self.cap: return False
        self.data.append(value); return True
    def deleteFront(self):
        if not self.data: return False
        self.data.pop(0); return True
    def deleteLast(self):
        if not self.data: return False
        self.data.pop(); return True
    def getFront(self): return self.data[0] if self.data else -1
    def getRear(self): return self.data[-1] if self.data else -1
    def isEmpty(self): return not self.data
    def isFull(self): return len(self.data) == self.cap`},better:{name:`Doubly Linked List`,time:`O(1)`,space:`O(k)`,code:`class Node:
    def __init__(self, v=0): self.val, self.prev, self.next = v, None, None
class MyCircularDeque:
    def __init__(self, k):
        self.cap, self.size = k, 0
        self.head, self.tail = Node(), Node()
        self.head.next, self.tail.prev = self.tail, self.head
    def insertFront(self, value):
        if self.size == self.cap: return False
        n = Node(value)
        n.next, n.prev = self.head.next, self.head
        self.head.next.prev = n; self.head.next = n
        self.size += 1; return True
    def insertLast(self, value):
        if self.size == self.cap: return False
        n = Node(value)
        n.prev, n.next = self.tail.prev, self.tail
        self.tail.prev.next = n; self.tail.prev = n
        self.size += 1; return True
    def deleteFront(self):
        if not self.size: return False
        self.head.next = self.head.next.next
        self.head.next.prev = self.head
        self.size -= 1; return True
    def deleteLast(self):
        if not self.size: return False
        self.tail.prev = self.tail.prev.prev
        self.tail.prev.next = self.tail
        self.size -= 1; return True
    def getFront(self): return self.head.next.val if self.size else -1
    def getRear(self): return self.tail.prev.val if self.size else -1
    def isEmpty(self): return self.size == 0
    def isFull(self): return self.size == self.cap`},optimal:{name:`Circular Array`,time:`O(1)`,space:`O(k)`,code:`class MyCircularDeque:
    def __init__(self, k):
        self.arr = [0]*(k+1)
        self.cap = k+1
        self.front = 0
        self.rear = 0
    def insertFront(self, value):
        if self.isFull(): return False
        self.front = (self.front-1) % self.cap
        self.arr[self.front] = value; return True
    def insertLast(self, value):
        if self.isFull(): return False
        self.arr[self.rear] = value
        self.rear = (self.rear+1) % self.cap; return True
    def deleteFront(self):
        if self.isEmpty(): return False
        self.front = (self.front+1) % self.cap; return True
    def deleteLast(self):
        if self.isEmpty(): return False
        self.rear = (self.rear-1) % self.cap; return True
    def getFront(self): return -1 if self.isEmpty() else self.arr[self.front]
    def getRear(self): return -1 if self.isEmpty() else self.arr[(self.rear-1)%self.cap]
    def isEmpty(self): return self.front == self.rear
    def isFull(self): return (self.rear+1)%self.cap == self.front`}},"Design Circular Queue":{brute:{name:`Brute Force`,time:`O(n) per enqueue`,space:`O(k)`,code:`class MyCircularQueue:
    def __init__(self, k):
        self.data = []
        self.cap = k
    def enQueue(self, value):
        if len(self.data) == self.cap: return False
        self.data.append(value); return True
    def deQueue(self):
        if not self.data: return False
        self.data.pop(0); return True
    def Front(self): return self.data[0] if self.data else -1
    def Rear(self): return self.data[-1] if self.data else -1
    def isEmpty(self): return not self.data
    def isFull(self): return len(self.data) == self.cap`},better:{name:`Linked List`,time:`O(1)`,space:`O(k)`,code:`class Node:
    def __init__(self, v): self.val, self.next = v, None
class MyCircularQueue:
    def __init__(self, k):
        self.cap, self.size = k, 0
        self.head = self.tail = None
    def enQueue(self, value):
        if self.size == self.cap: return False
        node = Node(value)
        if not self.head: self.head = self.tail = node
        else: self.tail.next = node; self.tail = node
        self.size += 1; return True
    def deQueue(self):
        if not self.size: return False
        self.head = self.head.next
        self.size -= 1; return True
    def Front(self): return self.head.val if self.head else -1
    def Rear(self): return self.tail.val if self.tail else -1
    def isEmpty(self): return self.size == 0
    def isFull(self): return self.size == self.cap`},optimal:{name:`Circular Array`,time:`O(1)`,space:`O(k)`,code:`class MyCircularQueue:
    def __init__(self, k):
        self.arr = [0] * k
        self.cap, self.size = k, 0
        self.front = 0
    def enQueue(self, value):
        if self.isFull(): return False
        self.arr[(self.front+self.size) % self.cap] = value
        self.size += 1; return True
    def deQueue(self):
        if self.isEmpty(): return False
        self.front = (self.front+1) % self.cap
        self.size -= 1; return True
    def Front(self): return -1 if self.isEmpty() else self.arr[self.front]
    def Rear(self): return -1 if self.isEmpty() else self.arr[(self.front+self.size-1)%self.cap]
    def isEmpty(self): return self.size == 0
    def isFull(self): return self.size == self.cap`}},"Evaluate Reverse Polish Notation":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(n)`,code:`def evalRPN(tokens):
    while len(tokens) > 1:
        for i in range(len(tokens)):
            if tokens[i] in '+-*/':
                a, b = int(tokens[i-2]), int(tokens[i-1])
                if tokens[i]=='+': res = a+b
                elif tokens[i]=='-': res = a-b
                elif tokens[i]=='*': res = a*b
                else: res = int(a/b)
                tokens = tokens[:i-2] + [str(res)] + tokens[i+1:]
                break
    return int(tokens[0])`},better:{name:`Stack`,time:`O(n)`,space:`O(n)`,code:`def evalRPN(tokens):
    stack = []
    ops = {'+': lambda a,b: a+b, '-': lambda a,b: a-b,
           '*': lambda a,b: a*b, '/': lambda a,b: int(a/b)}
    for t in tokens:
        if t in ops:
            b, a = stack.pop(), stack.pop()
            stack.append(ops[t](a, b))
        else:
            stack.append(int(t))
    return stack[0]`},optimal:{name:`Stack (Concise)`,time:`O(n)`,space:`O(n)`,code:`def evalRPN(tokens):
    stack = []
    for t in tokens:
        if t in '+-*/' and len(t) == 1:
            b, a = stack.pop(), stack.pop()
            if t == '+': stack.append(a+b)
            elif t == '-': stack.append(a-b)
            elif t == '*': stack.append(a*b)
            else: stack.append(int(a/b))
        else: stack.append(int(t))
    return stack[0]`}},"Flatten Nested List Iterator":{brute:{name:`Brute Force`,time:`O(n)`,space:`O(n)`,code:`class NestedIterator:
    def __init__(self, nestedList):
        self.flat = []
        def flatten(lst):
            for item in lst:
                if item.isInteger(): self.flat.append(item.getInteger())
                else: flatten(item.getList())
        flatten(nestedList)
        self.idx = 0
    def next(self):
        val = self.flat[self.idx]
        self.idx += 1
        return val
    def hasNext(self): return self.idx < len(self.flat)`},better:{name:`Generator`,time:`O(1) per call`,space:`O(d)`,code:`class NestedIterator:
    def __init__(self, nestedList):
        def gen(lst):
            for item in lst:
                if item.isInteger(): yield item.getInteger()
                else: yield from gen(item.getList())
        self.iter = gen(nestedList)
        self.val = None
        self._advance()
    def _advance(self):
        try: self.val = next(self.iter)
        except StopIteration: self.val = None
    def next(self):
        result = self.val
        self._advance()
        return result
    def hasNext(self): return self.val is not None`},optimal:{name:`Stack Iterator`,time:`O(1) amortized`,space:`O(d)`,code:`class NestedIterator:
    def __init__(self, nestedList):
        self.stack = list(reversed(nestedList))
    def next(self):
        return self.stack.pop().getInteger()
    def hasNext(self):
        while self.stack:
            top = self.stack[-1]
            if top.isInteger(): return True
            self.stack.pop()
            self.stack.extend(reversed(top.getList()))
        return False`}},"Maximum Width Ramp":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(1)`,code:`def maxWidthRamp(nums):
    res = 0
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] <= nums[j]:
                res = max(res, j - i)
    return res`},better:{name:`Sort by Value`,time:`O(n log n)`,space:`O(n)`,code:`def maxWidthRamp(nums):
    indices = sorted(range(len(nums)), key=lambda i: (nums[i], i))
    res = 0
    min_idx = indices[0]
    for i in indices:
        res = max(res, i - min_idx)
        min_idx = min(min_idx, i)
    return res`},optimal:{name:`Monotonic Stack`,time:`O(n)`,space:`O(n)`,code:`def maxWidthRamp(nums):
    stack = []
    for i, num in enumerate(nums):
        if not stack or nums[stack[-1]] > num:
            stack.append(i)
    res = 0
    for j in range(len(nums)-1, -1, -1):
        while stack and nums[stack[-1]] <= nums[j]:
            res = max(res, j - stack.pop())
    return res`}},"Min Stack":{brute:{name:`Brute Force`,time:`O(n) getMin`,space:`O(n)`,code:`class MinStack:
    def __init__(self): self.stack = []
    def push(self, val): self.stack.append(val)
    def pop(self): self.stack.pop()
    def top(self): return self.stack[-1]
    def getMin(self): return min(self.stack)`},better:{name:`Two Stacks`,time:`O(1)`,space:`O(n)`,code:`class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []
    def push(self, val):
        self.stack.append(val)
        self.min_stack.append(min(val, self.min_stack[-1] if self.min_stack else val))
    def pop(self):
        self.stack.pop()
        self.min_stack.pop()
    def top(self): return self.stack[-1]
    def getMin(self): return self.min_stack[-1]`},optimal:{name:`Single Stack (Tuple)`,time:`O(1)`,space:`O(n)`,code:`class MinStack:
    def __init__(self): self.stack = []
    def push(self, val):
        cur_min = min(val, self.stack[-1][1] if self.stack else val)
        self.stack.append((val, cur_min))
    def pop(self): self.stack.pop()
    def top(self): return self.stack[-1][0]
    def getMin(self): return self.stack[-1][1]`}},"Next Greater Element II":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(n)`,code:`def nextGreaterElements(nums):
    n = len(nums)
    result = [-1] * n
    for i in range(n):
        for j in range(1, n):
            if nums[(i+j) % n] > nums[i]:
                result[i] = nums[(i+j) % n]
                break
    return result`},better:{name:`Double Array + Stack`,time:`O(n)`,space:`O(n)`,code:`def nextGreaterElements(nums):
    n = len(nums)
    result = [-1] * n
    stack = []
    doubled = nums + nums
    for i in range(2*n):
        while stack and doubled[stack[-1]] < doubled[i]:
            idx = stack.pop()
            if idx < n: result[idx] = doubled[i]
        stack.append(i)
    return result`},optimal:{name:`Monotonic Stack (Circular)`,time:`O(n)`,space:`O(n)`,code:`def nextGreaterElements(nums):
    n = len(nums)
    result = [-1] * n
    stack = []
    for i in range(2*n - 1, -1, -1):
        while stack and stack[-1] <= nums[i % n]:
            stack.pop()
        if stack: result[i % n] = stack[-1]
        stack.append(nums[i % n])
    return result`}},"Online Stock Span":{brute:{name:`Brute Force`,time:`O(n) per call`,space:`O(n)`,code:`class StockSpanner:
    def __init__(self): self.prices = []
    def next(self, price):
        self.prices.append(price)
        span = 1
        i = len(self.prices) - 2
        while i >= 0 and self.prices[i] <= price:
            span += 1; i -= 1
        return span`},better:{name:`Stack (Price + Count)`,time:`O(1) amortized`,space:`O(n)`,code:`class StockSpanner:
    def __init__(self): self.stack = []
    def next(self, price):
        span = 1
        while self.stack and self.stack[-1][0] <= price:
            span += self.stack.pop()[1]
        self.stack.append((price, span))
        return span`},optimal:{name:`Monotonic Stack + Index`,time:`O(1) amortized`,space:`O(n)`,code:`class StockSpanner:
    def __init__(self):
        self.stack = []
        self.idx = -1
    def next(self, price):
        self.idx += 1
        while self.stack and self.stack[-1][0] <= price:
            self.stack.pop()
        span = self.idx - self.stack[-1][1] if self.stack else self.idx + 1
        self.stack.append((price, self.idx))
        return span`}},"Remove K Digits":{brute:{name:`Brute Force`,time:`O(n * k)`,space:`O(n)`,code:`def removeKdigits(num, k):
    for _ in range(k):
        removed = False
        for i in range(len(num)-1):
            if num[i] > num[i+1]:
                num = num[:i] + num[i+1:]
                removed = True
                break
        if not removed: num = num[:-1]
    return num.lstrip('0') or '0'`},better:{name:`Stack (Greedy)`,time:`O(n)`,space:`O(n)`,code:`def removeKdigits(num, k):
    stack = []
    for d in num:
        while k and stack and stack[-1] > d:
            stack.pop()
            k -= 1
        stack.append(d)
    while k: stack.pop(); k -= 1
    return ''.join(stack).lstrip('0') or '0'`},optimal:{name:`Monotonic Stack`,time:`O(n)`,space:`O(n)`,code:`def removeKdigits(num, k):
    stack = []
    for digit in num:
        while k > 0 and stack and stack[-1] > digit:
            stack.pop(); k -= 1
        stack.append(digit)
    result = ''.join(stack[:len(stack)-k]).lstrip('0')
    return result or '0'`}},"Score of Parentheses":{brute:{name:`Brute Force`,time:`O(n^2)`,space:`O(n)`,code:`def scoreOfParentheses(s):
    while '()' in s:
        s = s.replace('()', '1')
        # Combine adjacent numbers and multiply nested
        new_s = ''
        for c in s:
            new_s += c
        s = new_s
    # Evaluate using recursion
    def score(s, l, r):
        if r - l == 2: return 1
        bal, mid = 0, l
        for i in range(l, r):
            if s[i] == '(': bal += 1
            elif s[i] == ')': bal -= 1
            if bal == 0:
                if i == l+1: return 1 + score(s, i+1, r) if i+1<r else 1
                return 2*score(s, l+1, i) + (score(s, i+1, r) if i+1<r else 0)
        return 0
    return score(s, 0, len(s))`},better:{name:`Stack`,time:`O(n)`,space:`O(n)`,code:`def scoreOfParentheses(s):
    stack = [0]
    for c in s:
        if c == '(':
            stack.append(0)
        else:
            v = stack.pop()
            stack[-1] += max(2 * v, 1)
    return stack[0]`},optimal:{name:`Depth Counting`,time:`O(n)`,space:`O(1)`,code:`def scoreOfParentheses(s):
    depth = result = 0
    for i, c in enumerate(s):
        if c == '(': depth += 1
        else:
            depth -= 1
            if s[i-1] == '(':
                result += 2 ** depth
    return result`}},"Simplify Path":{brute:{name:`Brute Force`,time:`O(n)`,space:`O(n)`,code:`def simplifyPath(path):
    parts = path.split('/')
    result = []
    for part in parts:
        if part == '' or part == '.': continue
        elif part == '..':
            if result: result.pop()
        else: result.append(part)
    return '/' + '/'.join(result)`},better:{name:`Stack`,time:`O(n)`,space:`O(n)`,code:`def simplifyPath(path):
    stack = []
    for component in path.split('/'):
        if component == '..':
            if stack: stack.pop()
        elif component and component != '.':
            stack.append(component)
    return '/' + '/'.join(stack)`},optimal:{name:`Stack (Concise)`,time:`O(n)`,space:`O(n)`,code:`def simplifyPath(path):
    stack = []
    for p in path.split('/'):
        if p == '..': stack and stack.pop()
        elif p and p != '.': stack.append(p)
    return '/' + '/'.join(stack)`}}};function km({problem:e,animation:t,isSolved:n,onToggleSolved:r}){let[i,a]=(0,w.useState)(!1),[o,s]=(0,w.useState)(`solutions`),c=Om[e.name];return(0,Y.jsxs)(`div`,{className:`pc-card`,children:[(0,Y.jsxs)(`div`,{className:`pc-header`,onClick:()=>a(!i),children:[(0,Y.jsxs)(`div`,{className:`pc-left`,children:[(0,Y.jsx)(`button`,{className:`pc-check ${n?`solved`:``}`,onClick:e=>{e.stopPropagation(),r()},title:`Mark as solved`,children:n?`✓`:`○`}),(0,Y.jsx)(`span`,{className:`pc-expand`,children:i?`▾`:`▸`}),(0,Y.jsx)(`a`,{href:(e=>`https://leetcode.com/problems/${e.toLowerCase().replace(/[^a-z0-9\s]/g,``).replace(/\s+/g,`-`)}/`)(e.name),target:`_blank`,rel:`noopener noreferrer`,onClick:e=>e.stopPropagation(),className:`pc-name ${n?`pc-name-solved`:``}`,children:e.name})]}),(0,Y.jsxs)(`div`,{className:`pc-right`,children:[(0,Y.jsx)(`span`,{className:`badge badge-${e.difficulty.toLowerCase()}`,children:e.difficulty}),(0,Y.jsx)(`span`,{className:`badge badge-frequency`,children:e.frequency})]})]}),(0,Y.jsx)(_d,{children:i&&(0,Y.jsx)(Q.div,{initial:{height:0,opacity:0},animate:{height:`auto`,opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},style:{overflow:`hidden`},children:(0,Y.jsxs)(`div`,{className:`pc-body`,children:[(0,Y.jsxs)(`div`,{className:`pc-tabs`,children:[t&&(0,Y.jsx)(`button`,{className:`pc-tab ${o===`animation`?`active`:``}`,onClick:()=>s(`animation`),children:`🎬 Animation`}),c&&(0,Y.jsx)(`button`,{className:`pc-tab ${o===`solutions`?`active`:``}`,onClick:()=>s(`solutions`),children:`💻 Solutions (3)`})]}),o===`animation`&&t&&(0,Y.jsxs)(`div`,{className:`pc-section`,children:[(0,Y.jsxs)(`div`,{className:`pc-explanation`,children:[(0,Y.jsx)(`span`,{className:`pc-pattern`,children:t.pattern}),(0,Y.jsx)(`p`,{children:t.explanation})]}),(0,Y.jsx)(_m,{problem:t})]}),o===`solutions`&&c&&(0,Y.jsx)(`div`,{className:`pc-solutions`,children:[`brute`,`better`,`optimal`].map(e=>{let t=c[e];if(!t)return null;let n={brute:`var(--accent-red)`,better:`var(--accent-orange)`,optimal:`var(--accent-green)`};return(0,Y.jsxs)(`div`,{className:`pc-sol-card`,style:{"--sol-color":n[e]},children:[(0,Y.jsxs)(`div`,{className:`pc-sol-header`,children:[(0,Y.jsx)(`span`,{className:`pc-sol-name`,style:{color:n[e]},children:t.name}),(0,Y.jsxs)(`div`,{className:`pc-sol-complexity`,children:[(0,Y.jsxs)(`span`,{className:`pc-sol-badge`,children:[`⏱ `,t.time]}),(0,Y.jsxs)(`span`,{className:`pc-sol-badge`,children:[`💾 `,t.space]})]})]}),(0,Y.jsx)(hm,{theme:Rp.nightOwl,code:t.code.trim(),language:`python`,children:({style:e,tokens:t,getLineProps:n,getTokenProps:r})=>(0,Y.jsx)(`pre`,{style:{...e,margin:0,padding:`0.8rem`,borderRadius:`0 0 8px 8px`,fontSize:`0.78rem`,lineHeight:`1.6`,overflow:`auto`},children:t.map((e,t)=>(0,Y.jsx)(`div`,{...n({line:e}),children:e.map((e,t)=>(0,Y.jsx)(`span`,{...r({token:e})},t))},t))})})]},e)})}),o===`animation`&&!t&&c&&(0,Y.jsx)(`div`,{className:`pc-section`,children:(0,Y.jsx)(`p`,{style:{color:`var(--text-muted)`,textAlign:`center`,padding:`1rem`},children:`Switch to Solutions tab to see 3 approaches for this problem.`})})]})})}),(0,Y.jsx)(`style`,{children:`
        .pc-check {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 2px solid var(--border-color);
          background: none;
          color: var(--text-muted);
          cursor: pointer;
          font-size: 0.7rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          flex-shrink: 0;
        }
        .pc-check:hover { border-color: var(--accent-green); color: var(--accent-green); }
        .pc-check.solved {
          background: var(--accent-green);
          border-color: var(--accent-green);
          color: white;
        }
        .pc-name-solved { opacity: 0.6; text-decoration: line-through; }
        .pc-card {
          border: 1px solid var(--border-color);
          border-radius: var(--radius);
          margin-bottom: 6px;
          background: var(--bg-secondary);
          transition: all 0.2s;
        }
        .pc-card:hover {
          border-color: rgba(124, 58, 237, 0.3);
        }
        .pc-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.7rem 1rem;
          cursor: pointer;
          gap: 1rem;
        }
        .pc-left {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex: 1;
          min-width: 0;
        }
        .pc-expand {
          color: var(--text-muted);
          font-size: 0.8rem;
          flex-shrink: 0;
        }
        .pc-name {
          font-size: 0.9rem;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .pc-right {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
        }
        .pc-body {
          padding: 0 1rem 1rem 1rem;
          border-top: 1px solid var(--border-color);
        }
        .pc-tabs {
          display: flex;
          gap: 0.3rem;
          padding: 0.8rem 0 0.5rem;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 0.8rem;
        }
        .pc-tab {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.4rem 0.9rem;
          border-radius: 20px;
          cursor: pointer;
          font-size: 0.78rem;
          font-weight: 600;
          transition: all 0.2s;
        }
        .pc-tab:hover { border-color: var(--accent-purple); color: var(--text-primary); }
        .pc-tab.active {
          background: linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.08));
          border-color: var(--accent-purple);
          color: var(--accent-purple);
        }
        .pc-explanation {
          padding: 0.5rem 0;
        }
        .pc-pattern {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent-purple);
          background: rgba(167, 139, 250, 0.1);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          margin-bottom: 0.3rem;
          border: 1px solid rgba(167, 139, 250, 0.2);
        }
        .pc-explanation p {
          font-size: 0.85rem;
          margin: 0.3rem 0 0 0;
        }
        .pc-solutions {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .pc-sol-card {
          border: 1px solid var(--border-color);
          border-radius: var(--radius);
          overflow: hidden;
          border-left: 3px solid var(--sol-color);
        }
        .pc-sol-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.6rem 0.8rem;
          background: var(--bg-tertiary);
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .pc-sol-name {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 700;
        }
        .pc-sol-complexity {
          display: flex;
          gap: 0.4rem;
        }
        .pc-sol-badge {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          background: var(--bg-primary);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
        }
        .pc-section {
          padding-top: 0.3rem;
        }
      `})]})}var Am=`dsa-progress`;function jm(){let[e,t]=(0,w.useState)(()=>{try{return JSON.parse(localStorage.getItem(Am))||{}}catch{return{}}});return(0,w.useEffect)(()=>{localStorage.setItem(Am,JSON.stringify(e))},[e]),{solved:e,toggle:e=>{t(t=>{let n={...t};return n[e]?delete n[e]:n[e]=Date.now(),n})},isSolved:t=>!!e[t],count:Object.keys(e).length}}function Mm({solved:e,total:t,label:n}){let r=t>0?Math.round(e/t*100):0;return(0,Y.jsxs)(`div`,{className:`progress-bar-container`,children:[n&&(0,Y.jsx)(`span`,{className:`progress-label`,children:n}),(0,Y.jsx)(`div`,{className:`progress-track`,children:(0,Y.jsx)(`div`,{className:`progress-fill`,style:{width:`${r}%`}})}),(0,Y.jsxs)(`span`,{className:`progress-text`,children:[e,`/`,t,` (`,r,`%)`]}),(0,Y.jsx)(`style`,{children:`
        .progress-bar-container {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin: 0.5rem 0;
        }
        .progress-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
          white-space: nowrap;
        }
        .progress-track {
          flex: 1;
          height: 8px;
          background: var(--bg-tertiary);
          border-radius: 4px;
          overflow: hidden;
          border: 1px solid var(--border-color);
        }
        .progress-fill {
          height: 100%;
          background: var(--gradient-primary);
          border-radius: 4px;
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .progress-text {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-purple);
          white-space: nowrap;
          min-width: 80px;
        }
      `})]})}var Nm=[{name:`Array Partition`,difficulty:`Easy`,frequency:`Medium`},{name:`Best Time to Buy and Sell Stock`,difficulty:`Easy`,frequency:`Very High`},{name:`Contains Duplicate`,difficulty:`Easy`,frequency:`Very High`},{name:`Diet Plan Performance`,difficulty:`Easy`,frequency:`Medium`},{name:`Find Pivot Index`,difficulty:`Easy`,frequency:`High`},{name:`Majority Element`,difficulty:`Easy`,frequency:`Very High`},{name:`Maximum Average Subarray I`,difficulty:`Easy`,frequency:`Medium`},{name:`Maximum Consecutive Ones`,difficulty:`Easy`,frequency:`Medium`},{name:`Meeting Rooms`,difficulty:`Easy`,frequency:`High`},{name:`Missing Number`,difficulty:`Easy`,frequency:`High`},{name:`Move Zeroes`,difficulty:`Easy`,frequency:`High`},{name:`Pascal's Triangle`,difficulty:`Easy`,frequency:`High`},{name:`Pascal's Triangle II`,difficulty:`Easy`,frequency:`Medium`},{name:`Plus One`,difficulty:`Easy`,frequency:`High`},{name:`Remove Duplicates from Sorted Array`,difficulty:`Easy`,frequency:`Very High`},{name:`Remove Element`,difficulty:`Easy`,frequency:`High`},{name:`Single Number`,difficulty:`Easy`,frequency:`Very High`},{name:`Summary Ranges`,difficulty:`Easy`,frequency:`Medium`},{name:`First Missing Positive`,difficulty:`Hard`,frequency:`High`},{name:`Minimum Window Subsequence`,difficulty:`Hard`,frequency:`Medium`},{name:`Subarrays with K Different Integers`,difficulty:`Hard`,frequency:`Medium`},{name:`Trapping Rain Water`,difficulty:`Hard`,frequency:`Very High`},{name:`3Sum`,difficulty:`Medium`,frequency:`Very High`},{name:`4Sum`,difficulty:`Medium`,frequency:`Medium`},{name:`Best Time to Buy and Sell Stock II`,difficulty:`Medium`,frequency:`High`},{name:`Container With Most Water`,difficulty:`Medium`,frequency:`Very High`},{name:`Find All Duplicates in an Array`,difficulty:`Medium`,frequency:`Medium`},{name:`Find the Duplicate Number`,difficulty:`Medium`,frequency:`High`},{name:`Frequency of the Most Frequent Element`,difficulty:`Medium`,frequency:`Medium`},{name:`Fruit Into Baskets`,difficulty:`Medium`,frequency:`Medium`},{name:`Game of Life`,difficulty:`Medium`,frequency:`Medium`},{name:`Grumpy Bookstore Owner`,difficulty:`Medium`,frequency:`Medium`},{name:`Insert Interval`,difficulty:`Medium`,frequency:`High`},{name:`Jump Game`,difficulty:`Medium`,frequency:`Very High`},{name:`Jump Game II`,difficulty:`Medium`,frequency:`High`},{name:`Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit`,difficulty:`Medium`,frequency:`Medium`},{name:`Longest Subarray of 1s After Deleting One Element`,difficulty:`Medium`,frequency:`Medium`},{name:`Longest Turbulent Subarray`,difficulty:`Medium`,frequency:`Medium`},{name:`Max Consecutive Ones III`,difficulty:`Medium`,frequency:`High`},{name:`Max Points You Can Obtain from Cards`,difficulty:`Medium`,frequency:`Medium`},{name:`Maximize the Confusion of an Exam`,difficulty:`Medium`,frequency:`Medium`},{name:`Maximum Area of Island`,difficulty:`Medium`,frequency:`High`},{name:`Maximum Erasure Value`,difficulty:`Medium`,frequency:`Medium`},{name:`Maximum Product Subarray`,difficulty:`Medium`,frequency:`High`},{name:`Maximum Subarray`,difficulty:`Medium`,frequency:`Very High`},{name:`Minimum Size Subarray Sum`,difficulty:`Medium`,frequency:`Very High`},{name:`Next Permutation`,difficulty:`Medium`,frequency:`Medium`},{name:`Number of Islands`,difficulty:`Medium`,frequency:`Very High`},{name:`Number of Sub-arrays of Size K and Average >= Threshold`,difficulty:`Medium`,frequency:`Medium`},{name:`Product of Array Except Self`,difficulty:`Medium`,frequency:`Very High`},{name:`Rotate Array`,difficulty:`Medium`,frequency:`High`},{name:`Rotate Image`,difficulty:`Medium`,frequency:`High`},{name:`Set Matrix Zeroes`,difficulty:`Medium`,frequency:`High`},{name:`Spiral Matrix`,difficulty:`Medium`,frequency:`High`},{name:`Two Sum II - Input Array Is Sorted`,difficulty:`Medium`,frequency:`High`}],Pm=[{name:`Add Binary`,difficulty:`Easy`,frequency:`High`},{name:`First Unique Character in a String`,difficulty:`Easy`,frequency:`High`},{name:`Implement strStr()`,difficulty:`Easy`,frequency:`High`},{name:`Is Subsequence`,difficulty:`Easy`,frequency:`High`},{name:`Longest Common Prefix`,difficulty:`Easy`,frequency:`High`},{name:`Reverse String`,difficulty:`Easy`,frequency:`High`},{name:`Reverse Vowels of a String`,difficulty:`Easy`,frequency:`Medium`},{name:`Roman to Integer`,difficulty:`Easy`,frequency:`Very High`},{name:`Student Attendance Record I`,difficulty:`Easy`,frequency:`Low`},{name:`Valid Palindrome`,difficulty:`Easy`,frequency:`Very High`},{name:`Valid Palindrome II`,difficulty:`Easy`,frequency:`High`},{name:`Edit Distance`,difficulty:`Hard`,frequency:`Very High`},{name:`Minimum Window Substring`,difficulty:`Hard`,frequency:`Very High`},{name:`Regular Expression Matching`,difficulty:`Hard`,frequency:`High`},{name:`Substring with Concatenation of All Words`,difficulty:`Hard`,frequency:`Medium`},{name:`Wildcard Matching`,difficulty:`Hard`,frequency:`Medium`},{name:`Bulls and Cows`,difficulty:`Medium`,frequency:`Medium`},{name:`Check Inclusion`,difficulty:`Medium`,frequency:`High`},{name:`Compare Version Numbers`,difficulty:`Medium`,frequency:`Medium`},{name:`Count Occurrences of Anagram`,difficulty:`Medium`,frequency:`Medium`},{name:`Count and Say`,difficulty:`Medium`,frequency:`Medium`},{name:`Decode Ways`,difficulty:`Medium`,frequency:`Very High`},{name:`Encode and Decode Strings`,difficulty:`Medium`,frequency:`High`},{name:`Find All Anagrams in a String`,difficulty:`Medium`,frequency:`High`},{name:`Generate Parentheses`,difficulty:`Medium`,frequency:`Very High`},{name:`Get Equal Substrings Within Budget`,difficulty:`Medium`,frequency:`Medium`},{name:`Integer to Roman`,difficulty:`Medium`,frequency:`High`},{name:`Letter Combinations of a Phone Number`,difficulty:`Medium`,frequency:`Very High`},{name:`Longest Palindromic Substring`,difficulty:`Medium`,frequency:`Very High`},{name:`Longest Repeating Character Replacement`,difficulty:`Medium`,frequency:`High`},{name:`Longest Substring Without Repeating Characters`,difficulty:`Medium`,frequency:`Very High`},{name:`Longest Word in Dictionary`,difficulty:`Medium`,frequency:`Medium`},{name:`Minimum Number of Flips to Make Binary String Alternating`,difficulty:`Medium`,frequency:`Medium`},{name:`Multiply Strings`,difficulty:`Medium`,frequency:`Medium`},{name:`Number of Substrings Containing All Three Characters`,difficulty:`Medium`,frequency:`Medium`},{name:`Palindrome Partitioning`,difficulty:`Medium`,frequency:`High`},{name:`Palindromic Substrings`,difficulty:`Medium`,frequency:`High`},{name:`Permutation in String`,difficulty:`Medium`,frequency:`High`},{name:`Reorganize String`,difficulty:`Medium`,frequency:`High`},{name:`Repeated DNA Sequences`,difficulty:`Medium`,frequency:`Medium`},{name:`Restore IP Addresses`,difficulty:`Medium`,frequency:`Medium`},{name:`Reverse Integer`,difficulty:`Medium`,frequency:`High`},{name:`Reverse Words in a String`,difficulty:`Medium`,frequency:`High`},{name:`String to Integer (atoi)`,difficulty:`Medium`,frequency:`High`},{name:`Word Break`,difficulty:`Medium`,frequency:`Very High`},{name:`Word Search`,difficulty:`Medium`,frequency:`Very High`},{name:`ZigZag Conversion`,difficulty:`Medium`,frequency:`Medium`}],Fm=[{name:`Contains Duplicate II`,difficulty:`Easy`,frequency:`Medium`},{name:`Count Good Pairs`,difficulty:`Easy`,frequency:`Medium`},{name:`Design HashMap`,difficulty:`Easy`,frequency:`High`},{name:`Design HashSet`,difficulty:`Easy`,frequency:`Medium`},{name:`Find Common Characters`,difficulty:`Easy`,frequency:`Medium`},{name:`Happy Number`,difficulty:`Easy`,frequency:`High`},{name:`Intersection of Two Arrays`,difficulty:`Easy`,frequency:`High`},{name:`Intersection of Two Arrays II`,difficulty:`Easy`,frequency:`High`},{name:`Isomorphic Strings`,difficulty:`Easy`,frequency:`Medium`},{name:`Number of Good Pairs`,difficulty:`Easy`,frequency:`Medium`},{name:`Ransom Note`,difficulty:`Easy`,frequency:`High`},{name:`Two Sum`,difficulty:`Easy`,frequency:`Very High`},{name:`Unique Email Addresses`,difficulty:`Easy`,frequency:`Medium`},{name:`Valid Anagram`,difficulty:`Easy`,frequency:`Very High`},{name:`Word Pattern`,difficulty:`Easy`,frequency:`Medium`},{name:`Contains Duplicate III`,difficulty:`Hard`,frequency:`Medium`},{name:`4Sum II`,difficulty:`Medium`,frequency:`Medium`},{name:`Brick Wall`,difficulty:`Medium`,frequency:`Medium`},{name:`Continuous Subarray Sum`,difficulty:`Medium`,frequency:`High`},{name:`Find Duplicate File in System`,difficulty:`Medium`,frequency:`Medium`},{name:`Group Anagrams`,difficulty:`Medium`,frequency:`Very High`},{name:`Insert Delete GetRandom O(1)`,difficulty:`Medium`,frequency:`High`},{name:`LRU Cache`,difficulty:`Medium`,frequency:`Very High`},{name:`Longest Consecutive Sequence`,difficulty:`Medium`,frequency:`Very High`},{name:`Maximum Size Subarray Sum Equals k`,difficulty:`Medium`,frequency:`High`},{name:`Subarray Sum Divisible by K`,difficulty:`Medium`,frequency:`High`},{name:`Subarray Sum Equals K`,difficulty:`Medium`,frequency:`Very High`},{name:`Top K Frequent Elements`,difficulty:`Medium`,frequency:`Very High`}],Im=[{name:`Binary Search`,difficulty:`Easy`,frequency:`Very High`},{name:`First Bad Version`,difficulty:`Easy`,frequency:`High`},{name:`Guess Number Higher or Lower`,difficulty:`Easy`,frequency:`Medium`},{name:`Merge Sorted Array`,difficulty:`Easy`,frequency:`Very High`},{name:`Sqrt(x)`,difficulty:`Easy`,frequency:`High`},{name:`Valid Perfect Square`,difficulty:`Easy`,frequency:`Medium`},{name:`Count of Smaller Numbers After Self`,difficulty:`Hard`,frequency:`Medium`},{name:`Find Median from Data Stream`,difficulty:`Hard`,frequency:`Very High`},{name:`Median of Two Sorted Arrays`,difficulty:`Hard`,frequency:`Very High`},{name:`Car Fleet`,difficulty:`Medium`,frequency:`Medium`},{name:`Find Minimum in Rotated Sorted Array`,difficulty:`Medium`,frequency:`High`},{name:`Find Peak Element`,difficulty:`Medium`,frequency:`High`},{name:`H-Index`,difficulty:`Medium`,frequency:`Medium`},{name:`K Closest Points to Origin`,difficulty:`Medium`,frequency:`Very High`},{name:`Kth Largest Element in an Array`,difficulty:`Medium`,frequency:`Very High`},{name:`Kth Smallest Element in a Sorted Matrix`,difficulty:`Medium`,frequency:`High`},{name:`Largest Number`,difficulty:`Medium`,frequency:`High`},{name:`Meeting Rooms II`,difficulty:`Medium`,frequency:`Very High`},{name:`Merge Intervals`,difficulty:`Medium`,frequency:`Very High`},{name:`Minimum Number of Arrows to Burst Balloons`,difficulty:`Medium`,frequency:`Medium`},{name:`Non-overlapping Intervals`,difficulty:`Medium`,frequency:`High`},{name:`Search a 2D Matrix`,difficulty:`Medium`,frequency:`High`},{name:`Search a 2D Matrix II`,difficulty:`Medium`,frequency:`High`},{name:`Search in Rotated Sorted Array`,difficulty:`Medium`,frequency:`High`},{name:`Search in Rotated Sorted Array II`,difficulty:`Medium`,frequency:`Medium`},{name:`Sort Colors`,difficulty:`Medium`,frequency:`High`},{name:`Sort List`,difficulty:`Medium`,frequency:`High`},{name:`Task Scheduler`,difficulty:`Medium`,frequency:`High`},{name:`Wiggle Sort II`,difficulty:`Medium`,frequency:`Medium`}],Lm=[{name:`Backspace String Compare`,difficulty:`Easy`,frequency:`High`},{name:`Implement Queue using Stacks`,difficulty:`Easy`,frequency:`High`},{name:`Implement Stack using Queues`,difficulty:`Easy`,frequency:`High`},{name:`Moving Average from Data Stream`,difficulty:`Easy`,frequency:`High`},{name:`Next Greater Element I`,difficulty:`Easy`,frequency:`High`},{name:`Number of Recent Calls`,difficulty:`Easy`,frequency:`Medium`},{name:`Remove All Adjacent Duplicates in String`,difficulty:`Easy`,frequency:`Medium`},{name:`Valid Parentheses`,difficulty:`Easy`,frequency:`Very High`},{name:`Basic Calculator`,difficulty:`Hard`,frequency:`High`},{name:`Largest Rectangle in Histogram`,difficulty:`Hard`,frequency:`Very High`},{name:`Maximal Rectangle`,difficulty:`Hard`,frequency:`High`},{name:`Sliding Window Maximum`,difficulty:`Hard`,frequency:`High`},{name:`Asteroid Collision`,difficulty:`Medium`,frequency:`Medium`},{name:`Basic Calculator II`,difficulty:`Medium`,frequency:`High`},{name:`Build an Array With Stack Operations`,difficulty:`Medium`,frequency:`Low`},{name:`Daily Temperatures`,difficulty:`Medium`,frequency:`Very High`},{name:`Decode String`,difficulty:`Medium`,frequency:`High`},{name:`Design Browser History`,difficulty:`Medium`,frequency:`Medium`},{name:`Design Circular Deque`,difficulty:`Medium`,frequency:`Low`},{name:`Design Circular Queue`,difficulty:`Medium`,frequency:`Medium`},{name:`Evaluate Reverse Polish Notation`,difficulty:`Medium`,frequency:`High`},{name:`Flatten Nested List Iterator`,difficulty:`Medium`,frequency:`Medium`},{name:`Maximum Width Ramp`,difficulty:`Medium`,frequency:`Medium`},{name:`Min Stack`,difficulty:`Medium`,frequency:`Very High`},{name:`Next Greater Element II`,difficulty:`Medium`,frequency:`High`},{name:`Online Stock Span`,difficulty:`Medium`,frequency:`Medium`},{name:`Remove K Digits`,difficulty:`Medium`,frequency:`Medium`},{name:`Score of Parentheses`,difficulty:`Medium`,frequency:`Medium`},{name:`Simplify Path`,difficulty:`Medium`,frequency:`Medium`}],Rm=[...Nm.map(e=>({...e,topic:`Lists`,path:`/lists`})),...Pm.map(e=>({...e,topic:`Strings`,path:`/strings`})),...Fm.map(e=>({...e,topic:`Dictionaries`,path:`/dictionaries`})),...Im.map(e=>({...e,topic:`Sorting & Searching`,path:`/sorting-searching`})),...Lm.map(e=>({...e,topic:`Stacks & Queues`,path:`/stacks-queues`}))];function zm(){let[e,t]=(0,w.useState)(``),[n,r]=(0,w.useState)(!1),i=(0,w.useMemo)(()=>{if(!e.trim())return[];let t=e.toLowerCase();return Rm.filter(e=>e.name.toLowerCase().includes(t)||e.topic.toLowerCase().includes(t)||e.difficulty.toLowerCase().includes(t)).slice(0,8)},[e]),a=e=>`https://leetcode.com/problems/${e.toLowerCase().replace(/[^a-z0-9\s]/g,``).replace(/\s+/g,`-`)}/`;return(0,Y.jsxs)(`div`,{className:`search-container`,children:[(0,Y.jsxs)(`div`,{className:`search-input-wrap ${n?`focused`:``}`,children:[(0,Y.jsx)(`span`,{className:`search-icon`,children:`🔍`}),(0,Y.jsx)(`input`,{type:`text`,className:`search-input`,placeholder:`Search 188 problems...`,value:e,onChange:e=>t(e.target.value),onFocus:()=>r(!0),onBlur:()=>setTimeout(()=>r(!1),200)}),e&&(0,Y.jsx)(`button`,{className:`search-clear`,onClick:()=>t(``),children:`✕`})]}),(0,Y.jsx)(_d,{children:n&&i.length>0&&(0,Y.jsx)(Q.div,{className:`search-results`,initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},children:i.map((e,t)=>(0,Y.jsxs)(`a`,{href:a(e.name),target:`_blank`,rel:`noopener noreferrer`,className:`search-result-item`,children:[(0,Y.jsxs)(`div`,{className:`sr-left`,children:[(0,Y.jsx)(`span`,{className:`sr-name`,children:e.name}),(0,Y.jsx)(`span`,{className:`sr-topic`,children:e.topic})]}),(0,Y.jsx)(`span`,{className:`badge badge-${e.difficulty.toLowerCase()}`,children:e.difficulty})]},t))})}),(0,Y.jsx)(`style`,{children:`
        .search-container {
          position: relative;
          max-width: 500px;
          margin-bottom: 1.5rem;
        }
        .search-input-wrap {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 25px;
          padding: 0.6rem 1rem;
          transition: all 0.3s;
        }
        .search-input-wrap.focused {
          border-color: var(--accent-purple);
          box-shadow: 0 0 20px rgba(124,58,237,0.15);
        }
        .search-icon { font-size: 0.9rem; }
        .search-input {
          flex: 1;
          background: none;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-size: 0.9rem;
          font-family: var(--font-sans);
        }
        .search-input::placeholder { color: var(--text-muted); }
        .search-clear {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          font-size: 0.8rem;
          padding: 0.2rem;
        }
        .search-results {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          right: 0;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius);
          box-shadow: var(--shadow-lg);
          z-index: 50;
          overflow: hidden;
        }
        .search-result-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.6rem 1rem;
          text-decoration: none;
          transition: background 0.15s;
          border-bottom: 1px solid var(--border-color);
        }
        .search-result-item:last-child { border-bottom: none; }
        .search-result-item:hover { background: rgba(124,58,237,0.06); }
        .sr-left {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }
        .sr-name {
          font-size: 0.85rem;
          color: var(--text-primary);
          font-weight: 500;
        }
        .sr-topic {
          font-size: 0.7rem;
          color: var(--text-muted);
        }
      `})]})}var Bm={"Array Partition":{title:`Array Partition`,pattern:`Sorting + Greedy`,explanation:`Sort the array, then pair adjacent elements. The sum of minimums is maximized when pairs are as close as possible.`,difficulty:`Easy`,steps:[{type:`array`,data:[1,4,3,2],highlights:[],pointers:[],desc:`Input: [1, 4, 3, 2], find pairs to maximize sum of min(pair)`},{type:`array`,data:[1,2,3,4],highlights:[0,1,2,3],pointers:[],desc:`Step 1: Sort the array → [1, 2, 3, 4]`},{type:`array`,data:[1,2,3,4],highlights:[0,1],pointers:[],desc:`Pair (1,2): min = 1`,vars:{sum:1}},{type:`array`,data:[1,2,3,4],highlights:[2,3],pointers:[],desc:`Pair (3,4): min = 3`,vars:{sum:4}},{type:`array`,data:[1,2,3,4],sorted:[0,1,2,3],pointers:[],desc:`Answer: 1 + 3 = 4 ✓`,vars:{result:4}}]},"Best Time to Buy and Sell Stock":{title:`Best Time to Buy and Sell Stock`,pattern:`Greedy / Sliding Window`,explanation:`Track the minimum price seen so far. At each day, calculate profit if we sold today. Keep the maximum profit.`,difficulty:`Easy`,steps:[{type:`array`,data:[7,1,5,3,6,4],highlights:[],pointers:[],desc:`Prices: [7,1,5,3,6,4]. Find max profit from one buy + one sell.`},{type:`array`,data:[7,1,5,3,6,4],highlights:[0],pointers:[{idx:0,label:`buy`,color:`var(--accent-blue)`}],desc:`Day 0: price=7, min_price=7, profit=0`,vars:{min_price:7,max_profit:0}},{type:`array`,data:[7,1,5,3,6,4],highlights:[1],pointers:[{idx:1,label:`buy`,color:`var(--accent-blue)`}],desc:`Day 1: price=1 < min_price → update min_price=1`,vars:{min_price:1,max_profit:0}},{type:`array`,data:[7,1,5,3,6,4],highlights:[2],pointers:[{idx:1,label:`buy`,color:`var(--accent-blue)`},{idx:2,label:`sell`,color:`var(--accent-green)`}],desc:`Day 2: price=5, profit=5-1=4 → update max_profit=4`,vars:{min_price:1,max_profit:4}},{type:`array`,data:[7,1,5,3,6,4],highlights:[3],pointers:[{idx:1,label:`buy`,color:`var(--accent-blue)`}],desc:`Day 3: price=3, profit=3-1=2 < max_profit`,vars:{min_price:1,max_profit:4}},{type:`array`,data:[7,1,5,3,6,4],highlights:[4],pointers:[{idx:1,label:`buy`,color:`var(--accent-blue)`},{idx:4,label:`sell`,color:`var(--accent-green)`}],desc:`Day 4: price=6, profit=6-1=5 → update max_profit=5!`,vars:{min_price:1,max_profit:5}},{type:`array`,data:[7,1,5,3,6,4],highlights:[5],pointers:[{idx:1,label:`buy`,color:`var(--accent-blue)`},{idx:4,label:`sell`,color:`var(--accent-green)`}],desc:`Day 5: price=4, profit=4-1=3 < max_profit`,vars:{min_price:1,max_profit:5}},{type:`array`,data:[7,1,5,3,6,4],sorted:[1,4],pointers:[{idx:1,label:`buy`,color:`var(--accent-blue)`},{idx:4,label:`sell`,color:`var(--accent-green)`}],desc:`Answer: Buy at 1, sell at 6 → profit = 5 ✓`,vars:{result:5}}]},"Contains Duplicate":{title:`Contains Duplicate`,pattern:`Hash Set`,explanation:`Use a set to track seen numbers. If we see a number already in the set, there's a duplicate.`,difficulty:`Easy`,steps:[{type:`array`,data:[1,2,3,1],highlights:[],pointers:[],desc:`Input: [1,2,3,1]. Check if any value appears twice.`},{type:`array`,data:[1,2,3,1],highlights:[0],pointers:[],desc:`See 1 → add to set`,vars:{set:`{1}`}},{type:`array`,data:[1,2,3,1],highlights:[1],pointers:[],desc:`See 2 → add to set`,vars:{set:`{1,2}`}},{type:`array`,data:[1,2,3,1],highlights:[2],pointers:[],desc:`See 3 → add to set`,vars:{set:`{1,2,3}`}},{type:`array`,data:[1,2,3,1],highlights:[3],swaps:[3],pointers:[],desc:`See 1 → already in set! Duplicate found! ✓`,vars:{set:`{1,2,3}`,result:!0}}]},"Diet Plan Performance":{title:`Diet Plan Performance`,pattern:`Fixed Sliding Window`,explanation:`Use a window of size k. Slide across the array, computing the sum and comparing with thresholds.`,difficulty:`Easy`,steps:[{type:`array`,data:[1,2,3,4,5],highlights:[],pointers:[],desc:`calories=[1,2,3,4,5], k=1, lower=3, upper=3`},{type:`array`,data:[1,2,3,4,5],window:[0],pointers:[],desc:`Window sum=1 < lower(3) → points -= 1`,vars:{points:-1}},{type:`array`,data:[1,2,3,4,5],window:[1],pointers:[],desc:`Window sum=2 < lower(3) → points -= 1`,vars:{points:-2}},{type:`array`,data:[1,2,3,4,5],window:[2],pointers:[],desc:`Window sum=3, between lower and upper → no change`,vars:{points:-2}},{type:`array`,data:[1,2,3,4,5],window:[3],pointers:[],desc:`Window sum=4 > upper(3) → points += 1`,vars:{points:-1}},{type:`array`,data:[1,2,3,4,5],window:[4],pointers:[],desc:`Window sum=5 > upper(3) → points += 1`,vars:{points:0}},{type:`array`,data:[1,2,3,4,5],sorted:[0,1,2,3,4],pointers:[],desc:`Answer: 0 ✓`,vars:{result:0}}]},"Find Pivot Index":{title:`Find Pivot Index`,pattern:`Prefix Sum`,explanation:`At each index, check if left sum equals right sum. Use total sum to avoid recomputing.`,difficulty:`Easy`,steps:[{type:`array`,data:[1,7,3,6,5,6],highlights:[],pointers:[],desc:`Find index where left sum = right sum`},{type:`array`,data:[1,7,3,6,5,6],highlights:[0],pointers:[{idx:0,label:`pivot`,color:`var(--accent-orange)`}],desc:`i=0: left=0, right=27. Not equal.`,vars:{left:0,right:27,total:28}},{type:`array`,data:[1,7,3,6,5,6],highlights:[1],pointers:[{idx:1,label:`pivot`,color:`var(--accent-orange)`}],desc:`i=1: left=1, right=20. Not equal.`,vars:{left:1,right:20}},{type:`array`,data:[1,7,3,6,5,6],highlights:[2],pointers:[{idx:2,label:`pivot`,color:`var(--accent-orange)`}],desc:`i=2: left=8, right=17. Not equal.`,vars:{left:8,right:17}},{type:`array`,data:[1,7,3,6,5,6],highlights:[3],pointers:[{idx:3,label:`pivot`,color:`var(--accent-green)`}],desc:`i=3: left=11, right=11. EQUAL! ✓ Pivot found!`,vars:{left:11,right:11,result:3}}]},"Majority Element":{title:`Majority Element`,pattern:`Boyer-Moore Voting`,explanation:`Track a candidate and a count. If count hits 0, pick new candidate. The majority element always survives.`,difficulty:`Easy`,steps:[{type:`array`,data:[2,2,1,1,1,2,2],highlights:[],pointers:[],desc:`Find element appearing more than n/2 times`},{type:`array`,data:[2,2,1,1,1,2,2],highlights:[0],pointers:[],desc:`candidate=2, count=1`,vars:{candidate:2,count:1}},{type:`array`,data:[2,2,1,1,1,2,2],highlights:[1],pointers:[],desc:`Same as candidate → count++`,vars:{candidate:2,count:2}},{type:`array`,data:[2,2,1,1,1,2,2],highlights:[2],pointers:[],desc:`Different → count--`,vars:{candidate:2,count:1}},{type:`array`,data:[2,2,1,1,1,2,2],highlights:[3],pointers:[],desc:`Different → count-- → 0!`,vars:{candidate:2,count:0}},{type:`array`,data:[2,2,1,1,1,2,2],highlights:[4],pointers:[],desc:`Count=0, new candidate=1, count=1`,vars:{candidate:1,count:1}},{type:`array`,data:[2,2,1,1,1,2,2],highlights:[5],pointers:[],desc:`Different → count--`,vars:{candidate:1,count:0}},{type:`array`,data:[2,2,1,1,1,2,2],highlights:[6],pointers:[],desc:`Count=0, new candidate=2, count=1`,vars:{candidate:2,count:1}},{type:`array`,data:[2,2,1,1,1,2,2],sorted:[0,1,5,6],pointers:[],desc:`Answer: 2 (appears 4/7 times) ✓`,vars:{result:2}}]},"Maximum Average Subarray I":{title:`Maximum Average Subarray I`,pattern:`Fixed Sliding Window`,explanation:`Slide a window of size k, track the running sum by adding new element and removing old one.`,difficulty:`Easy`,steps:[{type:`array`,data:[1,12,-5,-6,50,3],highlights:[],pointers:[],desc:`Find max average of subarray with length k=4`},{type:`array`,data:[1,12,-5,-6,50,3],window:[0,1,2,3],pointers:[],desc:`Window [0..3]: sum = 1+12+(-5)+(-6) = 2`,vars:{sum:2,maxSum:2}},{type:`array`,data:[1,12,-5,-6,50,3],window:[1,2,3,4],pointers:[],desc:`Slide: +50, -1 → sum=51`,vars:{sum:51,maxSum:51}},{type:`array`,data:[1,12,-5,-6,50,3],window:[2,3,4,5],pointers:[],desc:`Slide: +3, -12 → sum=42`,vars:{sum:42,maxSum:51}},{type:`array`,data:[1,12,-5,-6,50,3],sorted:[1,2,3,4],pointers:[],desc:`Max sum = 51, average = 51/4 = 12.75 ✓`,vars:{result:12.75}}]},"Maximum Consecutive Ones":{title:`Maximum Consecutive Ones`,pattern:`Linear Scan`,explanation:`Count consecutive 1s, reset when we hit a 0. Track the maximum count seen.`,difficulty:`Easy`,steps:[{type:`array`,data:[1,1,0,1,1,1],highlights:[],pointers:[],desc:`Find max consecutive 1s`},{type:`array`,data:[1,1,0,1,1,1],highlights:[0],pointers:[],desc:`1 → count=1`,vars:{count:1,max:1}},{type:`array`,data:[1,1,0,1,1,1],highlights:[0,1],pointers:[],desc:`1 → count=2`,vars:{count:2,max:2}},{type:`array`,data:[1,1,0,1,1,1],highlights:[2],pointers:[],desc:`0 → reset count=0`,vars:{count:0,max:2}},{type:`array`,data:[1,1,0,1,1,1],highlights:[3],pointers:[],desc:`1 → count=1`,vars:{count:1,max:2}},{type:`array`,data:[1,1,0,1,1,1],highlights:[3,4],pointers:[],desc:`1 → count=2`,vars:{count:2,max:2}},{type:`array`,data:[1,1,0,1,1,1],highlights:[3,4,5],pointers:[],desc:`1 → count=3, new max!`,vars:{count:3,max:3}},{type:`array`,data:[1,1,0,1,1,1],sorted:[3,4,5],pointers:[],desc:`Answer: 3 ✓`,vars:{result:3}}]},"Meeting Rooms":{title:`Meeting Rooms`,pattern:`Sort + Linear Scan`,explanation:`Sort intervals by start time. Check if any meeting starts before the previous one ends.`,difficulty:`Easy`,steps:[{type:`array`,data:[`[0,30]`,`[5,10]`,`[15,20]`],highlights:[],pointers:[],desc:`Can a person attend all meetings? Sort by start time.`},{type:`array`,data:[`[0,30]`,`[5,10]`,`[15,20]`],highlights:[0,1],pointers:[],desc:`Meeting [5,10] starts at 5 < 30 (prev end). OVERLAP!`,vars:{overlap:!0}},{type:`array`,data:[`[0,30]`,`[5,10]`,`[15,20]`],swaps:[0,1],pointers:[],desc:`Answer: false — can't attend all meetings ✗`,vars:{result:!1}}]},"Missing Number":{title:`Missing Number`,pattern:`Math (Sum Formula)`,explanation:`Sum of 0 to n is n*(n+1)/2. Subtract actual sum to find the missing number.`,difficulty:`Easy`,steps:[{type:`array`,data:[3,0,1],highlights:[],pointers:[],desc:`nums=[3,0,1], n=3. One number from 0..3 is missing.`},{type:`info`,visual:`Expected sum = n*(n+1)/2 = 3*4/2 = 6`,desc:`Calculate expected sum of [0,1,2,3]`,vars:{expected:6}},{type:`array`,data:[3,0,1],highlights:[0,1,2],pointers:[],desc:`Actual sum = 3+0+1 = 4`,vars:{expected:6,actual:4}},{type:`info`,visual:`Missing = 6 - 4 = 2`,desc:`Answer: 6 - 4 = 2 ✓`,vars:{result:2}}]},"Move Zeroes":{title:`Move Zeroes`,pattern:`Two Pointers (Read/Write)`,explanation:`Use a write pointer for non-zero elements. Read through the array, writing non-zeros to the front.`,difficulty:`Easy`,steps:[{type:`array`,data:[0,1,0,3,12],highlights:[],pointers:[{idx:0,label:`w`,color:`var(--accent-blue)`},{idx:0,label:`r`,color:`var(--accent-green)`}],desc:`Move all zeros to end, keep relative order`},{type:`array`,data:[0,1,0,3,12],highlights:[0],pointers:[{idx:0,label:`w`,color:`var(--accent-blue)`},{idx:0,label:`r`,color:`var(--accent-green)`}],desc:`r=0: arr[0]=0, skip`,vars:{}},{type:`array`,data:[1,1,0,3,12],highlights:[0],pointers:[{idx:1,label:`w`,color:`var(--accent-blue)`},{idx:1,label:`r`,color:`var(--accent-green)`}],desc:`r=1: arr[1]=1≠0, write to w=0`,vars:{}},{type:`array`,data:[1,1,0,3,12],highlights:[2],pointers:[{idx:1,label:`w`,color:`var(--accent-blue)`},{idx:2,label:`r`,color:`var(--accent-green)`}],desc:`r=2: arr[2]=0, skip`,vars:{}},{type:`array`,data:[1,3,0,3,12],highlights:[1],pointers:[{idx:2,label:`w`,color:`var(--accent-blue)`},{idx:3,label:`r`,color:`var(--accent-green)`}],desc:`r=3: arr[3]=3≠0, write to w=1`,vars:{}},{type:`array`,data:[1,3,12,3,12],highlights:[2],pointers:[{idx:3,label:`w`,color:`var(--accent-blue)`},{idx:4,label:`r`,color:`var(--accent-green)`}],desc:`r=4: arr[4]=12≠0, write to w=2`,vars:{}},{type:`array`,data:[1,3,12,0,0],sorted:[0,1,2],pointers:[],desc:`Fill remaining with 0s → [1,3,12,0,0] ✓`,vars:{result:`[1,3,12,0,0]`}}]},"Pascal's Triangle":{title:`Pascal's Triangle`,pattern:`Dynamic Programming`,explanation:`Each number is the sum of the two numbers above it. Build row by row.`,difficulty:`Easy`,steps:[{type:`info`,visual:`    [1]
   [1,1]
  [1,2,1]
 [1,3,3,1]
[1,4,6,4,1]`,desc:`Build Pascal's Triangle row by row`},{type:`array`,data:[1],highlights:[0],pointers:[],desc:`Row 0: [1]`},{type:`array`,data:[1,1],highlights:[0,1],pointers:[],desc:`Row 1: [1,1]`},{type:`array`,data:[1,2,1],highlights:[1],pointers:[],desc:`Row 2: [1, 1+1=2, 1]`},{type:`array`,data:[1,3,3,1],highlights:[1,2],pointers:[],desc:`Row 3: [1, 1+2=3, 2+1=3, 1]`},{type:`array`,data:[1,4,6,4,1],highlights:[1,2,3],pointers:[],desc:`Row 4: [1, 1+3=4, 3+3=6, 3+1=4, 1] ✓`}]},"Pascal's Triangle II":{title:`Pascal's Triangle II`,pattern:`Space-Optimized DP`,explanation:`Build only the target row using a single array, updating right-to-left to avoid overwriting.`,difficulty:`Easy`,steps:[{type:`array`,data:[1,0,0,0],highlights:[],pointers:[],desc:`Get row 3 of Pascal's Triangle (0-indexed)`},{type:`array`,data:[1,1,0,0],highlights:[1],pointers:[],desc:`After processing row 1: [1,1,0,0]`},{type:`array`,data:[1,2,1,0],highlights:[1,2],pointers:[],desc:`After processing row 2: [1,2,1,0]`},{type:`array`,data:[1,3,3,1],highlights:[1,2,3],pointers:[],desc:`After processing row 3: [1,3,3,1] ✓`}]},"Plus One":{title:`Plus One`,pattern:`Right-to-Left Carry`,explanation:`Start from the rightmost digit. If it's 9, set to 0 and carry. Otherwise, increment and stop.`,difficulty:`Easy`,steps:[{type:`array`,data:[1,2,9],highlights:[],pointers:[],desc:`digits=[1,2,9], add 1`},{type:`array`,data:[1,2,9],highlights:[2],pointers:[{idx:2,label:`i`,color:`var(--accent-blue)`}],desc:`i=2: digit=9, 9+1=10 → set to 0, carry=1`,vars:{carry:1}},{type:`array`,data:[1,2,0],highlights:[2],pointers:[{idx:1,label:`i`,color:`var(--accent-blue)`}],desc:`Carry! Now check i=1`},{type:`array`,data:[1,3,0],highlights:[1],pointers:[{idx:1,label:`i`,color:`var(--accent-blue)`}],desc:`i=1: digit=2, 2+1=3, no carry. Done!`,vars:{carry:0}},{type:`array`,data:[1,3,0],sorted:[0,1,2],pointers:[],desc:`Answer: [1,3,0] ✓`,vars:{result:`[1,3,0]`}}]},"Remove Duplicates from Sorted Array":{title:`Remove Duplicates from Sorted Array`,pattern:`Two Pointers (Read/Write)`,explanation:`Since array is sorted, duplicates are adjacent. Use write pointer to track unique position.`,difficulty:`Easy`,steps:[{type:`array`,data:[1,1,2,2,3],highlights:[],pointers:[{idx:0,label:`w`,color:`var(--accent-blue)`},{idx:1,label:`r`,color:`var(--accent-green)`}],desc:`Remove duplicates in-place from sorted array`},{type:`array`,data:[1,1,2,2,3],highlights:[1],pointers:[{idx:0,label:`w`,color:`var(--accent-blue)`},{idx:1,label:`r`,color:`var(--accent-green)`}],desc:`r=1: arr[1]=1 == arr[w]=1, skip (duplicate)`},{type:`array`,data:[1,2,2,2,3],highlights:[1],pointers:[{idx:1,label:`w`,color:`var(--accent-blue)`},{idx:2,label:`r`,color:`var(--accent-green)`}],desc:`r=2: arr[2]=2 ≠ arr[w]=1, w++, write 2`},{type:`array`,data:[1,2,2,2,3],highlights:[3],pointers:[{idx:1,label:`w`,color:`var(--accent-blue)`},{idx:3,label:`r`,color:`var(--accent-green)`}],desc:`r=3: arr[3]=2 == arr[w]=2, skip (duplicate)`},{type:`array`,data:[1,2,3,2,3],highlights:[2],pointers:[{idx:2,label:`w`,color:`var(--accent-blue)`},{idx:4,label:`r`,color:`var(--accent-green)`}],desc:`r=4: arr[4]=3 ≠ arr[w]=2, w++, write 3`},{type:`array`,data:[1,2,3,2,3],sorted:[0,1,2],pointers:[],desc:`Answer: k=3, first 3 elements are [1,2,3] ✓`,vars:{k:3}}]},"Remove Element":{title:`Remove Element`,pattern:`Two Pointers`,explanation:`Use write pointer, copy non-target values to front.`,difficulty:`Easy`,steps:[{type:`array`,data:[3,2,2,3],highlights:[],pointers:[{idx:0,label:`w`,color:`var(--accent-blue)`},{idx:0,label:`r`,color:`var(--accent-green)`}],desc:`Remove all 3s from [3,2,2,3]`},{type:`array`,data:[3,2,2,3],highlights:[0],pointers:[{idx:0,label:`w`,color:`var(--accent-blue)`},{idx:0,label:`r`,color:`var(--accent-green)`}],desc:`r=0: val=3 == target, skip`},{type:`array`,data:[2,2,2,3],highlights:[0],pointers:[{idx:1,label:`w`,color:`var(--accent-blue)`},{idx:1,label:`r`,color:`var(--accent-green)`}],desc:`r=1: val=2 ≠ 3, write to w=0, w++`},{type:`array`,data:[2,2,2,3],highlights:[1],pointers:[{idx:2,label:`w`,color:`var(--accent-blue)`},{idx:2,label:`r`,color:`var(--accent-green)`}],desc:`r=2: val=2 ≠ 3, write to w=1, w++`},{type:`array`,data:[2,2,2,3],highlights:[3],pointers:[{idx:2,label:`w`,color:`var(--accent-blue)`},{idx:3,label:`r`,color:`var(--accent-green)`}],desc:`r=3: val=3 == target, skip`},{type:`array`,data:[2,2,2,3],sorted:[0,1],pointers:[],desc:`Answer: k=2, first 2 elements are [2,2] ✓`,vars:{k:2}}]},"Single Number":{title:`Single Number`,pattern:`Bit Manipulation (XOR)`,explanation:`XOR of a number with itself is 0. XOR all numbers — duplicates cancel out, leaving the single one.`,difficulty:`Easy`,steps:[{type:`array`,data:[4,1,2,1,2],highlights:[],pointers:[],desc:`Find the number that appears only once`},{type:`array`,data:[4,1,2,1,2],highlights:[0],pointers:[],desc:`result = 0 XOR 4 = 4`,vars:{result:4}},{type:`array`,data:[4,1,2,1,2],highlights:[1],pointers:[],desc:`result = 4 XOR 1 = 5`,vars:{result:5}},{type:`array`,data:[4,1,2,1,2],highlights:[2],pointers:[],desc:`result = 5 XOR 2 = 7`,vars:{result:7}},{type:`array`,data:[4,1,2,1,2],highlights:[3],pointers:[],desc:`result = 7 XOR 1 = 6 (1 cancels)`,vars:{result:6}},{type:`array`,data:[4,1,2,1,2],highlights:[4],pointers:[],desc:`result = 6 XOR 2 = 4 (2 cancels)`,vars:{result:4}},{type:`array`,data:[4,1,2,1,2],sorted:[0],pointers:[],desc:`Answer: 4 ✓ (all pairs cancelled)`,vars:{result:4}}]},"Summary Ranges":{title:`Summary Ranges`,pattern:`Linear Scan`,explanation:`Track start of each range. When next number isn't consecutive, close the current range.`,difficulty:`Easy`,steps:[{type:`array`,data:[0,1,2,4,5,7],highlights:[],pointers:[],desc:`Group consecutive numbers into ranges`},{type:`array`,data:[0,1,2,4,5,7],window:[0,1,2],pointers:[],desc:`0,1,2 are consecutive → range '0→2'`,vars:{ranges:`['0→2']`}},{type:`array`,data:[0,1,2,4,5,7],window:[3,4],pointers:[],desc:`4,5 are consecutive → range '4→5'`,vars:{ranges:`['0→2','4→5']`}},{type:`array`,data:[0,1,2,4,5,7],window:[5],pointers:[],desc:`7 alone → range '7'`,vars:{ranges:`['0→2','4→5','7']`}},{type:`array`,data:[0,1,2,4,5,7],sorted:[0,1,2,3,4,5],pointers:[],desc:`Answer: ['0→2','4→5','7'] ✓`}]},"First Missing Positive":{title:`First Missing Positive`,pattern:`Cyclic Sort / Index Mapping`,explanation:`Place each number at its correct index (num at index num-1). Then find first index where arr[i] != i+1.`,difficulty:`Hard`,steps:[{type:`array`,data:[3,4,-1,1],highlights:[],pointers:[],desc:`Find smallest missing positive integer`},{type:`array`,data:[-1,4,3,1],swaps:[0,2],pointers:[],desc:`Swap arr[0]=3 to index 2`,vars:{action:`3→idx2`}},{type:`array`,data:[-1,4,3,1],highlights:[0],pointers:[],desc:`arr[0]=-1, ignore negatives`},{type:`array`,data:[-1,1,3,4],swaps:[1,3],pointers:[],desc:`Swap arr[1]=4 to index 3`,vars:{action:`4→idx3`}},{type:`array`,data:[1,-1,3,4],swaps:[0,1],pointers:[],desc:`Swap arr[1]=1 to index 0`,vars:{action:`1→idx0`}},{type:`array`,data:[1,-1,3,4],highlights:[1],pointers:[{idx:1,label:`miss`,color:`var(--accent-red)`}],desc:`Check: arr[1]=-1 ≠ 2. Missing = 2! ✓`,vars:{result:2}}]},"Minimum Window Subsequence":{title:`Minimum Window Subsequence`,pattern:`Two Pointers / DP`,explanation:`Find shortest substring of S containing T as a subsequence. Use forward pass to find end, backward pass for start.`,difficulty:`Hard`,steps:[{type:`string`,data:`abcdebdde`,highlights:[],pointers:[],desc:`S='abcdebdde', T='bde'. Find min window containing T as subsequence.`},{type:`string`,data:`abcdebdde`,window:[1,2,3,4],pointers:[{idx:1,label:`b`,color:`var(--accent-blue)`},{idx:3,label:`d`,color:`var(--accent-orange)`},{idx:4,label:`e`,color:`var(--accent-green)`}],desc:`Found subsequence: 'bcde' (length 4)`},{type:`string`,data:`abcdebdde`,window:[5,6,7],pointers:[{idx:5,label:`b`,color:`var(--accent-blue)`},{idx:6,label:`d`,color:`var(--accent-orange)`},{idx:7,label:`e`,color:`var(--accent-green)`}],desc:`Found shorter: 'bde' (length 3)!`},{type:`string`,data:`abcdebdde`,sorted:[5,6,7],pointers:[],desc:`Answer: 'bde' (length 3) ✓`,vars:{result:`bde`}}]},"Subarrays with K Different Integers":{title:`Subarrays with K Different Integers`,pattern:`Sliding Window (At Most K trick)`,explanation:`Count subarrays with exactly K distinct = atMost(K) - atMost(K-1). Each atMost uses sliding window.`,difficulty:`Hard`,steps:[{type:`array`,data:[1,2,1,2,3],highlights:[],pointers:[],desc:`Count subarrays with exactly K=2 different integers`},{type:`info`,visual:`exactly(K) = atMost(K) - atMost(K-1)`,desc:`Key insight: exact = atMost(2) - atMost(1)`},{type:`array`,data:[1,2,1,2,3],window:[0,1],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:1,label:`R`,color:`var(--accent-green)`}],desc:`atMost(2): window has {1,2} → valid subarrays += 2`,vars:{atMost2:0}},{type:`array`,data:[1,2,1,2,3],window:[0,1,2,3],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:3,label:`R`,color:`var(--accent-green)`}],desc:`Expand window, still 2 distinct → count subarrays`,vars:{}},{type:`info`,visual:`atMost(2) = 12, atMost(1) = 5
exactly(2) = 12 - 5 = 7`,desc:`Answer: 7 subarrays with exactly 2 distinct ✓`,vars:{result:7}}]},"Trapping Rain Water":{title:`Trapping Rain Water`,pattern:`Two Pointers`,explanation:`Water at each position = min(left_max, right_max) - height. Use two pointers from both ends.`,difficulty:`Hard`,steps:[{type:`array`,data:[0,1,0,2,1,0,1,3,2,1,2,1],highlights:[],pointers:[],desc:`How much water can be trapped?`},{type:`array`,data:[0,1,0,2,1,0,1,3,2,1,2,1],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:11,label:`R`,color:`var(--accent-green)`}],desc:`Two pointers: left_max=0, right_max=0`,vars:{left_max:0,right_max:0,water:0}},{type:`array`,data:[0,1,0,2,1,0,1,3,2,1,2,1],highlights:[2],pointers:[{idx:2,label:`L`,color:`var(--accent-blue)`},{idx:11,label:`R`,color:`var(--accent-green)`}],desc:`At idx 2: left_max=1, height=0, water+=1-0=1`,vars:{left_max:1,water:1}},{type:`array`,data:[0,1,0,2,1,0,1,3,2,1,2,1],highlights:[4],pointers:[{idx:4,label:`L`,color:`var(--accent-blue)`},{idx:11,label:`R`,color:`var(--accent-green)`}],desc:`At idx 4: left_max=2, height=1, water+=2-1=1`,vars:{left_max:2,water:2}},{type:`array`,data:[0,1,0,2,1,0,1,3,2,1,2,1],highlights:[5],pointers:[{idx:5,label:`L`,color:`var(--accent-blue)`},{idx:11,label:`R`,color:`var(--accent-green)`}],desc:`At idx 5: left_max=2, height=0, water+=2-0=2`,vars:{left_max:2,water:4}},{type:`array`,data:[0,1,0,2,1,0,1,3,2,1,2,1],highlights:[9],pointers:[{idx:7,label:`L`,color:`var(--accent-blue)`},{idx:9,label:`R`,color:`var(--accent-green)`}],desc:`At idx 9: right_max=2, height=1, water+=2-1=1`,vars:{right_max:2,water:5}},{type:`array`,data:[0,1,0,2,1,0,1,3,2,1,2,1],sorted:[2,4,5,6,9],pointers:[],desc:`Total water trapped: 6 ✓`,vars:{result:6}}]},"3Sum":{title:`3Sum`,pattern:`Sort + Two Pointers`,explanation:`Sort array, fix one number, use two pointers on the rest to find pairs that sum to its negative.`,difficulty:`Medium`,steps:[{type:`array`,data:[-1,0,1,2,-1,-4],highlights:[],pointers:[],desc:`Find all triplets that sum to 0`},{type:`array`,data:[-4,-1,-1,0,1,2],highlights:[0,1,2,3,4,5],pointers:[],desc:`Sort first: [-4,-1,-1,0,1,2]`},{type:`array`,data:[-4,-1,-1,0,1,2],highlights:[1],pointers:[{idx:1,label:`fix`,color:`var(--accent-orange)`},{idx:2,label:`L`,color:`var(--accent-blue)`},{idx:5,label:`R`,color:`var(--accent-green)`}],desc:`Fix -1: find L+R = 1`,vars:{target:1}},{type:`array`,data:[-4,-1,-1,0,1,2],sorted:[1,3,5],pointers:[{idx:1,label:`fix`,color:`var(--accent-orange)`},{idx:3,label:`L`,color:`var(--accent-blue)`},{idx:5,label:`R`,color:`var(--accent-green)`}],desc:`Found! -1+0+2=0 → triplet [-1,0,2]`,vars:{triplet:`[-1,0,2]`}},{type:`array`,data:[-4,-1,-1,0,1,2],sorted:[1,4,5],pointers:[{idx:1,label:`fix`,color:`var(--accent-orange)`},{idx:4,label:`L`,color:`var(--accent-blue)`},{idx:5,label:`R`,color:`var(--accent-green)`}],desc:`Found! -1+(-1)+2=0 → triplet [-1,-1,2]`,vars:{triplet:`[-1,-1,2]`}},{type:`info`,visual:`Result: [[-1,-1,2], [-1,0,1]]`,desc:`Answer: [[-1,-1,2], [-1,0,1]] ✓`}]},"4Sum":{title:`4Sum`,pattern:`Sort + Two Pointers (Nested)`,explanation:`Fix two numbers with outer loops, then use two pointers for the remaining pair. Sort to skip duplicates.`,difficulty:`Medium`,steps:[{type:`array`,data:[1,0,-1,0,-2,2],highlights:[],pointers:[],desc:`Find all quadruplets summing to target=0`},{type:`array`,data:[-2,-1,0,0,1,2],highlights:[0,1,2,3,4,5],pointers:[],desc:`Sort: [-2,-1,0,0,1,2]`},{type:`array`,data:[-2,-1,0,0,1,2],highlights:[0,1],pointers:[{idx:0,label:`i`,color:`var(--accent-orange)`},{idx:1,label:`j`,color:`var(--accent-pink)`},{idx:2,label:`L`,color:`var(--accent-blue)`},{idx:5,label:`R`,color:`var(--accent-green)`}],desc:`Fix i=0,j=1: need L+R=3`,vars:{need:3}},{type:`array`,data:[-2,-1,0,0,1,2],sorted:[0,1,4,5],pointers:[],desc:`Found: [-2,-1,1,2] sums to 0!`,vars:{quad:`[-2,-1,1,2]`}},{type:`array`,data:[-2,-1,0,0,1,2],sorted:[0,2,3,5],pointers:[],desc:`Found: [-2,0,0,2] sums to 0!`,vars:{quad:`[-2,0,0,2]`}},{type:`info`,visual:`[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]`,desc:`Answer: 3 quadruplets found ✓`}]},"Best Time to Buy and Sell Stock II":{title:`Best Time to Buy and Sell Stock II`,pattern:`Greedy`,explanation:`Collect every upward price movement. If tomorrow is higher, buy today and sell tomorrow.`,difficulty:`Medium`,steps:[{type:`array`,data:[7,1,5,3,6,4],highlights:[],pointers:[],desc:`Multiple transactions allowed. Maximize total profit.`},{type:`array`,data:[7,1,5,3,6,4],highlights:[1,2],pointers:[],desc:`Buy at 1, sell at 5 → profit +4`,vars:{profit:4}},{type:`array`,data:[7,1,5,3,6,4],highlights:[3,4],pointers:[],desc:`Buy at 3, sell at 6 → profit +3`,vars:{profit:7}},{type:`array`,data:[7,1,5,3,6,4],sorted:[1,2,3,4],pointers:[],desc:`Total profit: 4+3 = 7 ✓`,vars:{result:7}}]},"Container With Most Water":{title:`Container With Most Water`,pattern:`Two Pointers`,explanation:`Start from both ends. Area = min(height[L], height[R]) * width. Move the shorter pointer inward.`,difficulty:`Medium`,steps:[{type:`array`,data:[1,8,6,2,5,4,8,3,7],highlights:[],pointers:[],desc:`Find two lines forming container with most water`},{type:`array`,data:[1,8,6,2,5,4,8,3,7],highlights:[0,8],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:8,label:`R`,color:`var(--accent-green)`}],desc:`area = min(1,7)*8 = 8`,vars:{area:8,max:8}},{type:`array`,data:[1,8,6,2,5,4,8,3,7],highlights:[1,8],pointers:[{idx:1,label:`L`,color:`var(--accent-blue)`},{idx:8,label:`R`,color:`var(--accent-green)`}],desc:`Move L (shorter). area = min(8,7)*7 = 49!`,vars:{area:49,max:49}},{type:`array`,data:[1,8,6,2,5,4,8,3,7],highlights:[1,7],pointers:[{idx:1,label:`L`,color:`var(--accent-blue)`},{idx:7,label:`R`,color:`var(--accent-green)`}],desc:`Move R. area = min(8,3)*6 = 18`,vars:{area:18,max:49}},{type:`array`,data:[1,8,6,2,5,4,8,3,7],sorted:[1,8],pointers:[],desc:`Answer: 49 (lines at index 1 and 8) ✓`,vars:{result:49}}]},"Find All Duplicates in an Array":{title:`Find All Duplicates in an Array`,pattern:`Index Marking`,explanation:`Use the array itself as a hash map. Mark visited indices by negating. If already negative, it's a duplicate.`,difficulty:`Medium`,steps:[{type:`array`,data:[4,3,2,7,8,2,3,1],highlights:[],pointers:[],desc:`Find all elements appearing twice (values 1..n)`},{type:`array`,data:[4,3,2,7,8,2,3,1],highlights:[0],pointers:[],desc:`val=4 → mark idx 3 as visited (negate)`,vars:{check:`idx 3`}},{type:`array`,data:[4,3,2,7,8,2,3,1],highlights:[5],swaps:[5],pointers:[],desc:`val=2 → idx 1 already negative! → 2 is duplicate!`,vars:{duplicates:`[2]`}},{type:`array`,data:[4,3,2,7,8,2,3,1],highlights:[6],swaps:[6],pointers:[],desc:`val=3 → idx 2 already negative! → 3 is duplicate!`,vars:{duplicates:`[2,3]`}},{type:`array`,data:[4,3,2,7,8,2,3,1],sorted:[5,6],pointers:[],desc:`Answer: [2, 3] ✓`,vars:{result:`[2,3]`}}]},"Find the Duplicate Number":{title:`Find the Duplicate Number`,pattern:`Floyd's Cycle Detection`,explanation:`Treat values as next-pointers. A duplicate creates a cycle. Use slow/fast pointers to find it.`,difficulty:`Medium`,steps:[{type:`array`,data:[1,3,4,2,2],highlights:[],pointers:[],desc:`Find duplicate without modifying array. O(1) space.`},{type:`info`,visual:`idx: 0→1→3→2→4→2→4→2...
Cycle at value 2!`,desc:`Values as pointers create a cycle at the duplicate`},{type:`array`,data:[1,3,4,2,2],highlights:[0,0],pointers:[{idx:0,label:`slow`,color:`var(--accent-blue)`},{idx:0,label:`fast`,color:`var(--accent-green)`}],desc:`Phase 1: slow=0, fast=0`},{type:`array`,data:[1,3,4,2,2],highlights:[3,2],pointers:[{idx:3,label:`slow`,color:`var(--accent-blue)`},{idx:2,label:`fast`,color:`var(--accent-green)`}],desc:`slow→1→3, fast→1→3→2→4. They meet!`,vars:{}},{type:`array`,data:[1,3,4,2,2],highlights:[4],pointers:[{idx:4,label:`meet`,color:`var(--accent-red)`}],desc:`Phase 2: reset one to start, move both by 1`},{type:`array`,data:[1,3,4,2,2],sorted:[3,4],pointers:[],desc:`They meet at 2. Answer: 2 ✓`,vars:{result:2}}]},"Frequency of the Most Frequent Element":{title:`Frequency of the Most Frequent Element`,pattern:`Sort + Sliding Window`,explanation:`Sort, then use sliding window. Window is valid if we can make all elements equal to the max using k operations.`,difficulty:`Medium`,steps:[{type:`array`,data:[1,2,4],highlights:[],pointers:[],desc:`k=5. Max frequency after at most k increments?`},{type:`array`,data:[1,2,4],highlights:[0,1,2],pointers:[],desc:`Sorted. Try making all elements = 4`},{type:`array`,data:[1,2,4],window:[0,1,2],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:2,label:`R`,color:`var(--accent-green)`}],desc:`Cost = 4*3 - (1+2+4) = 12-7 = 5 ≤ k. Valid!`,vars:{cost:5,freq:3}},{type:`array`,data:[1,2,4],sorted:[0,1,2],pointers:[],desc:`Answer: 3 (make all elements 4) ✓`,vars:{result:3}}]},"Fruit Into Baskets":{title:`Fruit Into Baskets`,pattern:`Sliding Window (At Most 2 Types)`,explanation:`Longest subarray with at most 2 distinct values. Classic sliding window with hash map.`,difficulty:`Medium`,steps:[{type:`array`,data:[1,2,1,2,3],highlights:[],pointers:[],desc:`Max fruits with 2 baskets (2 types allowed)`},{type:`array`,data:[1,2,1,2,3],window:[0,1,2,3],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:3,label:`R`,color:`var(--accent-green)`}],desc:`Window has types {1,2}, length=4`,vars:{types:`{1,2}`,max:4}},{type:`array`,data:[1,2,1,2,3],highlights:[4],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:4,label:`R`,color:`var(--accent-green)`}],desc:`Add 3: now 3 types! Shrink window from left`,vars:{types:`{1,2,3}`}},{type:`array`,data:[1,2,1,2,3],window:[3,4],pointers:[{idx:3,label:`L`,color:`var(--accent-blue)`},{idx:4,label:`R`,color:`var(--accent-green)`}],desc:`Shrink until ≤2 types: window=[2,3]`,vars:{types:`{2,3}`,max:4}},{type:`array`,data:[1,2,1,2,3],sorted:[0,1,2,3],pointers:[],desc:`Answer: 4 ✓`,vars:{result:4}}]},"Game of Life":{title:`Game of Life`,pattern:`In-Place State Encoding`,explanation:`Encode new state in unused bits. 2='was alive, now dead', 3='was dead, now alive'. Apply all at once.`,difficulty:`Medium`,steps:[{type:`matrix`,data:[[0,1,0],[0,0,1],[1,1,1],[0,0,0]],highlights:[],desc:`Apply Game of Life rules simultaneously`},{type:`matrix`,data:[[0,1,0],[0,0,1],[1,1,1],[0,0,0]],highlights:[[1,0],[1,1],[1,2]],desc:`Count live neighbors for each cell`},{type:`matrix`,data:[[0,0,0],[1,0,1],[0,1,1],[0,1,0]],highlights:[[0,1],[2,0]],desc:`Apply rules: underpopulation, survival, reproduction, overpopulation`},{type:`matrix`,data:[[0,0,0],[1,0,1],[0,1,1],[0,1,0]],highlights:[],desc:`Next generation computed ✓`}]},"Grumpy Bookstore Owner":{title:`Grumpy Bookstore Owner`,pattern:`Fixed Sliding Window`,explanation:`Always count non-grumpy customers. Slide window of size k to find where suppressing grumpiness adds the most.`,difficulty:`Medium`,steps:[{type:`array`,data:[1,0,1,2,1,1,7,5],highlights:[],pointers:[],desc:`customers, grumpy=[0,1,0,1,0,1,0,1], minutes=3`},{type:`array`,data:[1,0,1,2,1,1,7,5],window:[0,1,2],pointers:[],desc:`Window [0..2]: extra saved = 0 (grumpy minutes in window)`,vars:{base:10,extra:0}},{type:`array`,data:[1,0,1,2,1,1,7,5],window:[5,6,7],pointers:[],desc:`Window [5..7]: extra saved = 1+5 = 6 (best!)`,vars:{base:10,extra:6}},{type:`array`,data:[1,0,1,2,1,1,7,5],sorted:[5,6,7],pointers:[],desc:`Answer: 10 + 6 = 16 ✓`,vars:{result:16}}]},"Insert Interval":{title:`Insert Interval`,pattern:`Interval Merge`,explanation:`Add intervals before the new one, merge overlapping ones, add intervals after.`,difficulty:`Medium`,steps:[{type:`info`,visual:`intervals: [[1,3],[6,9]]
newInterval: [2,5]`,desc:`Insert [2,5] into sorted intervals`},{type:`array`,data:[`[1,3]`,`[2,5]`,`[6,9]`],highlights:[0,1],pointers:[],desc:`[1,3] overlaps [2,5] → merge to [1,5]`},{type:`array`,data:[`[1,5]`,`[6,9]`],highlights:[0],pointers:[],desc:`[1,5] doesn't overlap [6,9]. Done!`},{type:`array`,data:[`[1,5]`,`[6,9]`],sorted:[0,1],pointers:[],desc:`Answer: [[1,5],[6,9]] ✓`}]},"Jump Game":{title:`Jump Game`,pattern:`Greedy`,explanation:`Track the farthest index reachable. If current index exceeds farthest, we can't proceed.`,difficulty:`Medium`,steps:[{type:`array`,data:[2,3,1,1,4],highlights:[],pointers:[],desc:`Can we reach the last index?`},{type:`array`,data:[2,3,1,1,4],highlights:[0],pointers:[{idx:0,label:`i`,color:`var(--accent-blue)`}],desc:`i=0: farthest = max(0, 0+2) = 2`,vars:{farthest:2}},{type:`array`,data:[2,3,1,1,4],highlights:[1],pointers:[{idx:1,label:`i`,color:`var(--accent-blue)`}],desc:`i=1: farthest = max(2, 1+3) = 4`,vars:{farthest:4}},{type:`array`,data:[2,3,1,1,4],highlights:[2],pointers:[{idx:2,label:`i`,color:`var(--accent-blue)`}],desc:`i=2: farthest = max(4, 2+1) = 4`,vars:{farthest:4}},{type:`array`,data:[2,3,1,1,4],sorted:[0,1,2,3,4],pointers:[],desc:`farthest=4 ≥ last index(4). Yes! ✓`,vars:{result:!0}}]},"Jump Game II":{title:`Jump Game II`,pattern:`Greedy BFS`,explanation:`Think of it as BFS levels. Track current level end and farthest reachable. When hitting level end, jump.`,difficulty:`Medium`,steps:[{type:`array`,data:[2,3,1,1,4],highlights:[],pointers:[],desc:`Minimum jumps to reach end`},{type:`array`,data:[2,3,1,1,4],window:[0],pointers:[],desc:`Level 0: at index 0, can reach up to 2`,vars:{jumps:0,end:0,farthest:2}},{type:`array`,data:[2,3,1,1,4],window:[1,2],pointers:[],desc:`Level 1: indices 1-2, farthest = max(1+3,2+1) = 4`,vars:{jumps:1,end:2,farthest:4}},{type:`array`,data:[2,3,1,1,4],sorted:[3,4],pointers:[],desc:`farthest ≥ last index after 2 jumps ✓`,vars:{jumps:2,result:2}}]},"Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit":{title:`Longest Continuous Subarray With Absolute Diff ≤ Limit`,pattern:`Sliding Window + Monotonic Deques`,explanation:`Use two deques to track window min and max. Shrink when max-min > limit.`,difficulty:`Medium`,steps:[{type:`array`,data:[8,2,4,7],highlights:[],pointers:[],desc:`limit=4. Longest subarray where max-min ≤ 4`},{type:`array`,data:[8,2,4,7],window:[0],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:0,label:`R`,color:`var(--accent-green)`}],desc:`[8]: max-min = 0 ≤ 4 ✓`,vars:{len:1}},{type:`array`,data:[8,2,4,7],highlights:[0,1],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:1,label:`R`,color:`var(--accent-green)`}],desc:`[8,2]: max-min = 6 > 4 ✗ shrink!`,vars:{}},{type:`array`,data:[8,2,4,7],window:[1,2,3],pointers:[{idx:1,label:`L`,color:`var(--accent-blue)`},{idx:3,label:`R`,color:`var(--accent-green)`}],desc:`[2,4,7]: max-min = 5 > 4, shrink`,vars:{}},{type:`array`,data:[8,2,4,7],window:[2,3],pointers:[{idx:2,label:`L`,color:`var(--accent-blue)`},{idx:3,label:`R`,color:`var(--accent-green)`}],desc:`[4,7]: max-min = 3 ≤ 4 ✓ length=2`,vars:{max_len:2}},{type:`array`,data:[8,2,4,7],sorted:[2,3],pointers:[],desc:`Answer: 2 ✓`,vars:{result:2}}]},"Longest Subarray of 1s After Deleting One Element":{title:`Longest Subarray of 1s After Deleting One Element`,pattern:`Sliding Window`,explanation:`Allow at most one 0 in the window. Track longest window with ≤ 1 zero, subtract 1 (for the deletion).`,difficulty:`Medium`,steps:[{type:`array`,data:[1,1,0,1,1,1,0,1],highlights:[],pointers:[],desc:`Delete one element to get longest subarray of 1s`},{type:`array`,data:[1,1,0,1,1,1,0,1],window:[0,1,2,3,4,5],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:5,label:`R`,color:`var(--accent-green)`}],desc:`Window [0..5]: one 0, length-1=5`,vars:{zeros:1,max:5}},{type:`array`,data:[1,1,0,1,1,1,0,1],highlights:[6],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:6,label:`R`,color:`var(--accent-green)`}],desc:`Add idx 6 (0): two zeros! Shrink from left`,vars:{zeros:2}},{type:`array`,data:[1,1,0,1,1,1,0,1],window:[3,4,5,6,7],pointers:[{idx:3,label:`L`,color:`var(--accent-blue)`},{idx:7,label:`R`,color:`var(--accent-green)`}],desc:`Window [3..7]: one 0, length-1=4`,vars:{zeros:1,max:5}},{type:`array`,data:[1,1,0,1,1,1,0,1],sorted:[0,1,2,3,4,5],pointers:[],desc:`Answer: 5 ✓`,vars:{result:5}}]},"Longest Turbulent Subarray":{title:`Longest Turbulent Subarray`,pattern:`Sliding Window / DP`,explanation:`Track alternating comparisons (>,<,>,< or <,>,<,>). Reset when pattern breaks.`,difficulty:`Medium`,steps:[{type:`array`,data:[9,4,2,10,7,8,8,1,9],highlights:[],pointers:[],desc:`Find longest turbulent subarray (alternating < and >)`},{type:`array`,data:[9,4,2,10,7,8,8,1,9],window:[0,1,2,3,4,5],pointers:[],desc:`9>4>2<10>7<8: alternating! Length=6`,vars:{max:6}},{type:`array`,data:[9,4,2,10,7,8,8,1,9],highlights:[5,6],pointers:[],desc:`8==8: breaks pattern, reset`,vars:{max:6}},{type:`array`,data:[9,4,2,10,7,8,8,1,9],sorted:[0,1,2,3,4,5],pointers:[],desc:`Answer: 5 ✓ (subarray [4,2,10,7,8])`,vars:{result:5}}]},"Max Consecutive Ones III":{title:`Max Consecutive Ones III`,pattern:`Sliding Window`,explanation:`Longest subarray with at most k zeros. Expand right, shrink left when zeros exceed k.`,difficulty:`Medium`,steps:[{type:`array`,data:[1,1,1,0,0,0,1,1,1,1,0],highlights:[],pointers:[],desc:`k=2. Max consecutive 1s if we flip at most 2 zeros`},{type:`array`,data:[1,1,1,0,0,0,1,1,1,1,0],window:[0,1,2,3,4],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:4,label:`R`,color:`var(--accent-green)`}],desc:`Window has 2 zeros (k=2), length=5`,vars:{zeros:2,max:5}},{type:`array`,data:[1,1,1,0,0,0,1,1,1,1,0],window:[5,6,7,8,9,10],pointers:[{idx:5,label:`L`,color:`var(--accent-blue)`},{idx:10,label:`R`,color:`var(--accent-green)`}],desc:`Window [5..10]: 2 zeros, length=6!`,vars:{zeros:2,max:6}},{type:`array`,data:[1,1,1,0,0,0,1,1,1,1,0],sorted:[5,6,7,8,9,10],pointers:[],desc:`Answer: 6 ✓`,vars:{result:6}}]},"Max Points You Can Obtain from Cards":{title:`Max Points from Cards`,pattern:`Fixed Window (Inverse)`,explanation:`Taking k cards from ends = total minus a window of n-k from middle. Find min middle window.`,difficulty:`Medium`,steps:[{type:`array`,data:[1,2,3,4,5,6,1],highlights:[],pointers:[],desc:`Take k=3 cards from either end to maximize sum`},{type:`info`,visual:`total = 22
Find min sum window of size n-k = 4`,desc:`Inverse: minimize the unchosen middle window`},{type:`array`,data:[1,2,3,4,5,6,1],window:[0,1,2,3],pointers:[],desc:`Window [0..3]: sum=10`,vars:{window_sum:10,min:10}},{type:`array`,data:[1,2,3,4,5,6,1],window:[1,2,3,4],pointers:[],desc:`Window [1..4]: sum=14`,vars:{window_sum:14,min:10}},{type:`array`,data:[1,2,3,4,5,6,1],window:[2,3,4,5],pointers:[],desc:`Window [2..5]: sum=18`,vars:{window_sum:18,min:10}},{type:`array`,data:[1,2,3,4,5,6,1],window:[3,4,5,6],pointers:[],desc:`Window [3..6]: sum=16`,vars:{window_sum:16,min:10}},{type:`array`,data:[1,2,3,4,5,6,1],sorted:[4,5,6],pointers:[],desc:`Answer: 22-10 = 12 (take [5,6,1]) ✓`,vars:{result:12}}]},"Maximize the Confusion of an Exam":{title:`Maximize the Confusion of an Exam`,pattern:`Sliding Window`,explanation:`Same as 'max consecutive ones with k flips' but applied to T/F. Find longest substring with at most k changes.`,difficulty:`Medium`,steps:[{type:`string`,data:`TTFF`,highlights:[],pointers:[],desc:`k=2. Max consecutive same chars with at most k changes`},{type:`string`,data:`TTFF`,window:[0,1,2,3],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:3,label:`R`,color:`var(--accent-green)`}],desc:`Change 2 F→T: 'TTTT', length=4`,vars:{max:4}},{type:`string`,data:`TTFF`,sorted:[0,1,2,3],pointers:[],desc:`Answer: 4 ✓`,vars:{result:4}}]},"Maximum Area of Island":{title:`Maximum Area of Island`,pattern:`DFS/BFS on Grid`,explanation:`For each land cell, DFS to count connected land cells. Track maximum area.`,difficulty:`Medium`,steps:[{type:`matrix`,data:[[0,0,1,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],highlights:[],desc:`Find largest island (connected 1s)`},{type:`matrix`,data:[[0,0,1,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],highlights:[[0,2],[1,1],[1,2],[2,1],[2,2]],desc:`DFS from (0,2): found island of size 5`},{type:`matrix`,data:[[0,0,1,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],highlights:[[0,2],[1,1],[1,2],[2,1],[2,2]],desc:`Answer: 5 ✓`,vars:{result:5}}]},"Maximum Erasure Value":{title:`Maximum Erasure Value`,pattern:`Sliding Window + Hash Set`,explanation:`Longest subarray with all unique elements, maximizing sum. Shrink when duplicate found.`,difficulty:`Medium`,steps:[{type:`array`,data:[5,2,1,2,5,2,1,2,5],highlights:[],pointers:[],desc:`Max sum subarray with all unique elements`},{type:`array`,data:[5,2,1,2,5,2,1,2,5],window:[0,1,2],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:2,label:`R`,color:`var(--accent-green)`}],desc:`Window [5,2,1]: sum=8, all unique`,vars:{sum:8,max:8}},{type:`array`,data:[5,2,1,2,5,2,1,2,5],window:[0,1,2,3],highlights:[3],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:3,label:`R`,color:`var(--accent-green)`}],desc:`Add 2: duplicate! Shrink`,vars:{}},{type:`array`,data:[5,2,1,2,5,2,1,2,5],window:[2,3,4],pointers:[{idx:2,label:`L`,color:`var(--accent-blue)`},{idx:4,label:`R`,color:`var(--accent-green)`}],desc:`Window [1,2,5]: sum=8`,vars:{sum:8,max:8}},{type:`array`,data:[5,2,1,2,5,2,1,2,5],sorted:[0,1,2],pointers:[],desc:`Answer: 8 ✓`,vars:{result:8}}]},"Maximum Product Subarray":{title:`Maximum Product Subarray`,pattern:`DP (Track Min and Max)`,explanation:`A negative number can flip min to max. Track both running min and max product.`,difficulty:`Medium`,steps:[{type:`array`,data:[2,3,-2,4],highlights:[],pointers:[],desc:`Find contiguous subarray with largest product`},{type:`array`,data:[2,3,-2,4],highlights:[0],pointers:[],desc:`i=0: max_prod=2, min_prod=2`,vars:{max_p:2,min_p:2,result:2}},{type:`array`,data:[2,3,-2,4],highlights:[1],pointers:[],desc:`i=1: max_prod=6, min_prod=3`,vars:{max_p:6,min_p:3,result:6}},{type:`array`,data:[2,3,-2,4],highlights:[2],pointers:[],desc:`i=2: val=-2! max_prod=-2*3=-6(min), min_prod=-2*6=-12`,vars:{max_p:-2,min_p:-12,result:6}},{type:`array`,data:[2,3,-2,4],highlights:[3],pointers:[],desc:`i=3: max_prod=max(4,-8,-48)=4`,vars:{max_p:4,min_p:-48,result:6}},{type:`array`,data:[2,3,-2,4],sorted:[0,1],pointers:[],desc:`Answer: 6 (subarray [2,3]) ✓`,vars:{result:6}}]},"Maximum Subarray":{title:`Maximum Subarray`,pattern:`Kadane's Algorithm`,explanation:`At each position, either extend the current subarray or start a new one. Track global max.`,difficulty:`Medium`,steps:[{type:`array`,data:[-2,1,-3,4,-1,2,1,-5,4],highlights:[],pointers:[],desc:`Find contiguous subarray with largest sum`},{type:`array`,data:[-2,1,-3,4,-1,2,1,-5,4],highlights:[0],pointers:[],desc:`current=-2, max=-2`,vars:{current:-2,max:-2}},{type:`array`,data:[-2,1,-3,4,-1,2,1,-5,4],highlights:[1],pointers:[],desc:`current=max(1, -2+1)=1, max=1`,vars:{current:1,max:1}},{type:`array`,data:[-2,1,-3,4,-1,2,1,-5,4],highlights:[2],pointers:[],desc:`current=max(-3, 1-3)=-2`,vars:{current:-2,max:1}},{type:`array`,data:[-2,1,-3,4,-1,2,1,-5,4],highlights:[3],pointers:[],desc:`current=max(4, -2+4)=4`,vars:{current:4,max:4}},{type:`array`,data:[-2,1,-3,4,-1,2,1,-5,4],highlights:[4,5,6],pointers:[],desc:`Continue: 4-1+2+1=6, new max!`,vars:{current:6,max:6}},{type:`array`,data:[-2,1,-3,4,-1,2,1,-5,4],sorted:[3,4,5,6],pointers:[],desc:`Answer: 6 (subarray [4,-1,2,1]) ✓`,vars:{result:6}}]},"Minimum Size Subarray Sum":{title:`Minimum Size Subarray Sum`,pattern:`Sliding Window (Variable)`,explanation:`Expand right until sum ≥ target. Then shrink left while maintaining sum ≥ target. Track min length.`,difficulty:`Medium`,steps:[{type:`array`,data:[2,3,1,2,4,3],highlights:[],pointers:[],desc:`target=7. Find shortest subarray with sum ≥ 7`},{type:`array`,data:[2,3,1,2,4,3],window:[0,1,2,3],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:3,label:`R`,color:`var(--accent-green)`}],desc:`sum=8≥7, length=4. Try shrinking.`,vars:{sum:8,min:4}},{type:`array`,data:[2,3,1,2,4,3],window:[1,2,3,4],pointers:[{idx:1,label:`L`,color:`var(--accent-blue)`},{idx:4,label:`R`,color:`var(--accent-green)`}],desc:`sum=10≥7, length=4. Shrink.`,vars:{sum:10,min:4}},{type:`array`,data:[2,3,1,2,4,3],window:[3,4],pointers:[{idx:3,label:`L`,color:`var(--accent-blue)`},{idx:4,label:`R`,color:`var(--accent-green)`}],desc:`sum=6<7. Expand. Then [4,3]: sum=7≥7, length=2!`,vars:{sum:7,min:2}},{type:`array`,data:[2,3,1,2,4,3],sorted:[4,5],pointers:[],desc:`Answer: 2 (subarray [4,3]) ✓`,vars:{result:2}}]},"Next Permutation":{title:`Next Permutation`,pattern:`Array Manipulation`,explanation:`Find rightmost ascending pair, swap with next larger element from right, reverse the suffix.`,difficulty:`Medium`,steps:[{type:`array`,data:[1,2,3],highlights:[],pointers:[],desc:`Find next lexicographic permutation`},{type:`array`,data:[1,2,3],highlights:[1,2],pointers:[{idx:1,label:`i`,color:`var(--accent-blue)`}],desc:`Find rightmost ascending pair: arr[1]=2 < arr[2]=3`},{type:`array`,data:[1,3,2],swaps:[1,2],pointers:[],desc:`Swap 2 with next larger from right (3)`},{type:`array`,data:[1,3,2],sorted:[0,1,2],pointers:[],desc:`Answer: [1,3,2] ✓`}]},"Number of Islands":{title:`Number of Islands`,pattern:`DFS/BFS on Grid`,explanation:`Scan grid. When you find a '1', that's a new island — DFS to mark all connected land as visited.`,difficulty:`Medium`,steps:[{type:`matrix`,data:[[`1`,`1`,`0`,`0`],[`1`,`1`,`0`,`0`],[`0`,`0`,`1`,`0`],[`0`,`0`,`0`,`1`]],highlights:[],desc:`Count number of islands (groups of connected 1s)`},{type:`matrix`,data:[[`1`,`1`,`0`,`0`],[`1`,`1`,`0`,`0`],[`0`,`0`,`1`,`0`],[`0`,`0`,`0`,`1`]],highlights:[[0,0],[0,1],[1,0],[1,1]],desc:`Island 1: DFS from (0,0), marks 4 cells`,vars:{count:1}},{type:`matrix`,data:[[`1`,`1`,`0`,`0`],[`1`,`1`,`0`,`0`],[`0`,`0`,`1`,`0`],[`0`,`0`,`0`,`1`]],highlights:[[2,2]],desc:`Island 2: single cell at (2,2)`,vars:{count:2}},{type:`matrix`,data:[[`1`,`1`,`0`,`0`],[`1`,`1`,`0`,`0`],[`0`,`0`,`1`,`0`],[`0`,`0`,`0`,`1`]],highlights:[[3,3]],desc:`Island 3: single cell at (3,3)`,vars:{count:3}},{type:`info`,visual:`3 islands found`,desc:`Answer: 3 ✓`,vars:{result:3}}]},"Number of Sub-arrays of Size K and Average >= Threshold":{title:`Subarrays Size K Avg >= Threshold`,pattern:`Fixed Sliding Window`,explanation:`Slide window of size k, count windows where sum >= threshold * k.`,difficulty:`Medium`,steps:[{type:`array`,data:[2,2,2,2,5,5,5,8],highlights:[],pointers:[],desc:`k=3, threshold=4. Count subarrays with avg≥4`},{type:`array`,data:[2,2,2,2,5,5,5,8],window:[0,1,2],pointers:[],desc:`avg=2 < 4`,vars:{count:0}},{type:`array`,data:[2,2,2,2,5,5,5,8],window:[4,5,6],pointers:[],desc:`avg=5 ≥ 4 ✓`,vars:{count:1}},{type:`array`,data:[2,2,2,2,5,5,5,8],window:[5,6,7],pointers:[],desc:`avg=6 ≥ 4 ✓`,vars:{count:3}},{type:`array`,data:[2,2,2,2,5,5,5,8],sorted:[3,4,5,6,7],pointers:[],desc:`Answer: 3 ✓`,vars:{result:3}}]},"Product of Array Except Self":{title:`Product of Array Except Self`,pattern:`Prefix/Suffix Products`,explanation:`result[i] = product of all elements left of i × product of all elements right of i. Two passes.`,difficulty:`Medium`,steps:[{type:`array`,data:[1,2,3,4],highlights:[],pointers:[],desc:`Output[i] = product of all elements except arr[i]`},{type:`twoarray`,data1:[1,2,3,4],data2:[1,1,2,6],highlights1:[],highlights2:[0,1,2,3],label1:`Input`,label2:`Left products`,desc:`Left pass: prefix products [1, 1, 2, 6]`},{type:`twoarray`,data1:[1,2,3,4],data2:[24,12,4,1],highlights1:[],highlights2:[0,1,2,3],label1:`Input`,label2:`Right products`,desc:`Right pass: suffix products [24, 12, 4, 1]`},{type:`twoarray`,data1:[1,2,3,4],data2:[24,12,8,6],highlights1:[],highlights2:[0,1,2,3],label1:`Input`,label2:`Result (L×R)`,desc:`Multiply: [1×24, 1×12, 2×4, 6×1] = [24,12,8,6] ✓`}]},"Rotate Array":{title:`Rotate Array`,pattern:`Three Reverses`,explanation:`To rotate right by k: reverse whole array, reverse first k, reverse rest. O(1) space.`,difficulty:`Medium`,steps:[{type:`array`,data:[1,2,3,4,5,6,7],highlights:[],pointers:[],desc:`Rotate right by k=3`},{type:`array`,data:[7,6,5,4,3,2,1],highlights:[0,1,2,3,4,5,6],pointers:[],desc:`Step 1: Reverse all → [7,6,5,4,3,2,1]`},{type:`array`,data:[5,6,7,4,3,2,1],highlights:[0,1,2],pointers:[],desc:`Step 2: Reverse first k=3 → [5,6,7,...]`},{type:`array`,data:[5,6,7,1,2,3,4],highlights:[3,4,5,6],pointers:[],desc:`Step 3: Reverse rest → [5,6,7,1,2,3,4] ✓`}]},"Rotate Image":{title:`Rotate Image`,pattern:`Transpose + Reverse Rows`,explanation:`Rotate 90° clockwise = transpose matrix + reverse each row. In-place.`,difficulty:`Medium`,steps:[{type:`matrix`,data:[[1,2,3],[4,5,6],[7,8,9]],highlights:[],desc:`Rotate 90° clockwise in-place`},{type:`matrix`,data:[[1,4,7],[2,5,8],[3,6,9]],highlights:[[0,1],[0,2],[1,2]],desc:`Transpose: swap across diagonal`},{type:`matrix`,data:[[7,4,1],[8,5,2],[9,6,3]],highlights:[[0,0],[0,2],[1,0],[1,2],[2,0],[2,2]],desc:`Reverse each row → rotated! ✓`}]},"Set Matrix Zeroes":{title:`Set Matrix Zeroes`,pattern:`In-Place Marking`,explanation:`Use first row/column as markers. Mark which rows/cols need zeroing, then apply.`,difficulty:`Medium`,steps:[{type:`matrix`,data:[[1,1,1],[1,0,1],[1,1,1]],highlights:[],desc:`If cell is 0, set entire row and column to 0`},{type:`matrix`,data:[[1,1,1],[1,0,1],[1,1,1]],highlights:[[1,1]],desc:`Found 0 at (1,1) → mark row 1, col 1`},{type:`matrix`,data:[[1,0,1],[0,0,0],[1,0,1]],highlights:[[0,1],[1,0],[1,1],[1,2],[2,1]],desc:`Zero out row 1 and column 1 ✓`}]},"Spiral Matrix":{title:`Spiral Matrix`,pattern:`Boundary Simulation`,explanation:`Maintain top/bottom/left/right boundaries. Traverse right→down→left→up, shrinking boundaries.`,difficulty:`Medium`,steps:[{type:`matrix`,data:[[1,2,3],[4,5,6],[7,8,9]],highlights:[],desc:`Return elements in spiral order`},{type:`matrix`,data:[[1,2,3],[4,5,6],[7,8,9]],highlights:[[0,0],[0,1],[0,2]],desc:`Go right: [1,2,3]`},{type:`matrix`,data:[[1,2,3],[4,5,6],[7,8,9]],highlights:[[1,2],[2,2]],desc:`Go down: [6,9]`},{type:`matrix`,data:[[1,2,3],[4,5,6],[7,8,9]],highlights:[[2,1],[2,0]],desc:`Go left: [8,7]`},{type:`matrix`,data:[[1,2,3],[4,5,6],[7,8,9]],highlights:[[1,0]],desc:`Go up: [4]`},{type:`matrix`,data:[[1,2,3],[4,5,6],[7,8,9]],highlights:[[1,1]],desc:`Center: [5]. Done! [1,2,3,6,9,8,7,4,5] ✓`}]},"Two Sum II - Input Array Is Sorted":{title:`Two Sum II - Sorted`,pattern:`Two Pointers`,explanation:`Array is sorted. Start pointers at ends. If sum too small, move left right. If too big, move right left.`,difficulty:`Medium`,steps:[{type:`array`,data:[2,7,11,15],highlights:[],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:3,label:`R`,color:`var(--accent-green)`}],desc:`target=9. Find two numbers summing to 9.`},{type:`array`,data:[2,7,11,15],highlights:[0,3],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:3,label:`R`,color:`var(--accent-green)`}],desc:`2+15=17 > 9, move R left`,vars:{sum:17}},{type:`array`,data:[2,7,11,15],highlights:[0,2],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:2,label:`R`,color:`var(--accent-green)`}],desc:`2+11=13 > 9, move R left`,vars:{sum:13}},{type:`array`,data:[2,7,11,15],highlights:[0,1],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:1,label:`R`,color:`var(--accent-green)`}],desc:`2+7=9 == target! Found! ✓`,vars:{sum:9,result:`[1,2]`}}]}},Vm={"Add Binary":{title:`Add Binary`,pattern:`Right-to-Left Addition`,explanation:`Add binary strings from right to left, carrying over 1s just like decimal addition.`,difficulty:`Easy`,steps:[{type:`string`,data:`1 1 0 + 1`,highlights:[],pointers:[],desc:`a='11', b='1'. Add binary strings.`},{type:`string`,data:`  1 1 0`,highlights:[2],pointers:[],desc:`Position 0: 0+1=1, carry=0`,vars:{carry:0}},{type:`string`,data:`  1 1 0`,highlights:[1],pointers:[],desc:`Position 1: 1+0=1, carry=0`,vars:{carry:0}},{type:`string`,data:`  1 0 0`,highlights:[0],pointers:[],desc:`Position 2: 1+0=1, carry=0`,vars:{carry:0}},{type:`info`,visual:`Result: '100'`,desc:`Answer: '100' ✓`,vars:{result:`100`}}]},"First Unique Character in a String":{title:`First Unique Character`,pattern:`Frequency Count`,explanation:`Count character frequencies, then find first char with count 1.`,difficulty:`Easy`,steps:[{type:`string`,data:`leetcode`,highlights:[],pointers:[],desc:`Find first non-repeating character`},{type:`hashmap`,data:[{key:`l`,value:1},{key:`e`,value:3},{key:`t`,value:1},{key:`c`,value:1},{key:`o`,value:1},{key:`d`,value:1}],highlights:[],desc:`Count frequencies`},{type:`string`,data:`leetcode`,highlights:[0],pointers:[{idx:0,label:`✓`,color:`var(--accent-green)`}],desc:`'l' has count 1 → first unique! Index 0 ✓`,vars:{result:0}}]},"Implement strStr()":{title:`Implement strStr()`,pattern:`Sliding Window / KMP`,explanation:`Find first occurrence of needle in haystack. Slide needle along haystack comparing characters.`,difficulty:`Easy`,steps:[{type:`string`,data:`hello`,highlights:[],pointers:[],desc:`haystack='hello', needle='ll'`},{type:`string`,data:`hello`,window:[0,1],pointers:[],desc:`Compare 'he' vs 'll' → no match`},{type:`string`,data:`hello`,window:[1,2],pointers:[],desc:`Compare 'el' vs 'll' → no match`},{type:`string`,data:`hello`,window:[2,3],highlights:[2,3],pointers:[],desc:`Compare 'll' vs 'll' → MATCH! Index=2 ✓`,vars:{result:2}}]},"Is Subsequence":{title:`Is Subsequence`,pattern:`Two Pointers`,explanation:`Use one pointer for each string. Advance t-pointer always, advance s-pointer only on match.`,difficulty:`Easy`,steps:[{type:`string`,data:`ahbgdc`,highlights:[],pointers:[],desc:`Is 'abc' a subsequence of 'ahbgdc'?`},{type:`string`,data:`ahbgdc`,highlights:[0],pointers:[{idx:0,label:`✓a`,color:`var(--accent-green)`}],desc:`Found 'a' at index 0`,vars:{matched:`a`}},{type:`string`,data:`ahbgdc`,highlights:[2],pointers:[{idx:2,label:`✓b`,color:`var(--accent-green)`}],desc:`Found 'b' at index 2`,vars:{matched:`ab`}},{type:`string`,data:`ahbgdc`,highlights:[5],pointers:[{idx:5,label:`✓c`,color:`var(--accent-green)`}],desc:`Found 'c' at index 5. All matched! ✓`,vars:{result:!0}}]},"Longest Common Prefix":{title:`Longest Common Prefix`,pattern:`Vertical Scan`,explanation:`Compare characters at same position across all strings. Stop at first mismatch.`,difficulty:`Easy`,steps:[{type:`info`,visual:`["flower","flow","flight"]`,desc:`Find longest common prefix`},{type:`string`,data:`flower`,highlights:[0],pointers:[{idx:0,label:`col`,color:`var(--accent-blue)`}],desc:`Col 0: f,f,f → all match`,vars:{prefix:`f`}},{type:`string`,data:`flower`,highlights:[1],pointers:[{idx:1,label:`col`,color:`var(--accent-blue)`}],desc:`Col 1: l,l,l → all match`,vars:{prefix:`fl`}},{type:`string`,data:`flower`,highlights:[2],pointers:[{idx:2,label:`col`,color:`var(--accent-red)`}],desc:`Col 2: o,o,i → mismatch! Stop.`,vars:{prefix:`fl`}},{type:`info`,visual:`Result: 'fl'`,desc:`Answer: 'fl' ✓`,vars:{result:`fl`}}]},"Reverse String":{title:`Reverse String`,pattern:`Two Pointers`,explanation:`Swap characters from both ends moving inward until pointers meet.`,difficulty:`Easy`,steps:[{type:`string`,data:`hello`,highlights:[],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:4,label:`R`,color:`var(--accent-green)`}],desc:`Reverse in-place using two pointers`},{type:`string`,data:`oellh`,highlights:[0,4],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:4,label:`R`,color:`var(--accent-green)`}],desc:`Swap h↔o`},{type:`string`,data:`olleh`,highlights:[1,3],pointers:[{idx:1,label:`L`,color:`var(--accent-blue)`},{idx:3,label:`R`,color:`var(--accent-green)`}],desc:`Swap e↔l`},{type:`string`,data:`olleh`,highlights:[0,1,2,3,4],pointers:[],desc:`Done! 'olleh' ✓`}]},"Reverse Vowels of a String":{title:`Reverse Vowels`,pattern:`Two Pointers`,explanation:`Two pointers from ends, skip non-vowels, swap vowels when both found.`,difficulty:`Easy`,steps:[{type:`string`,data:`hello`,highlights:[],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:4,label:`R`,color:`var(--accent-green)`}],desc:`Reverse only vowels: 'hello'`},{type:`string`,data:`hello`,highlights:[1,4],pointers:[{idx:1,label:`L`,color:`var(--accent-blue)`},{idx:4,label:`R`,color:`var(--accent-green)`}],desc:`Found vowels: e(1) and o(4). Swap!`},{type:`string`,data:`holle`,highlights:[0,1,2,3,4],pointers:[],desc:`Result: 'holle' ✓`}]},"Roman to Integer":{title:`Roman to Integer`,pattern:`Greedy Scan`,explanation:`Scan right-to-left. If current < next, subtract it; otherwise add it.`,difficulty:`Easy`,steps:[{type:`string`,data:`MCMXCIV`,highlights:[],pointers:[],desc:`Convert Roman numeral to integer`},{type:`string`,data:`MCMXCIV`,highlights:[0],pointers:[],desc:`M=1000, add`,vars:{result:1e3}},{type:`string`,data:`MCMXCIV`,highlights:[1],pointers:[],desc:`C=100 < M=1000, subtract 100`,vars:{result:900}},{type:`string`,data:`MCMXCIV`,highlights:[2],pointers:[],desc:`M=1000, add`,vars:{result:1900}},{type:`string`,data:`MCMXCIV`,highlights:[3],pointers:[],desc:`X=10 < C=100, subtract`,vars:{result:1890}},{type:`string`,data:`MCMXCIV`,highlights:[4],pointers:[],desc:`C=100, add`,vars:{result:1990}},{type:`string`,data:`MCMXCIV`,highlights:[5],pointers:[],desc:`I=1 < V=5, subtract`,vars:{result:1989}},{type:`string`,data:`MCMXCIV`,highlights:[6],pointers:[],desc:`V=5, add → 1994 ✓`,vars:{result:1994}}]},"Student Attendance Record I":{title:`Student Attendance Record I`,pattern:`Linear Scan`,explanation:`Count A's (must be <2) and check for 3+ consecutive L's.`,difficulty:`Easy`,steps:[{type:`string`,data:`PPALLP`,highlights:[],pointers:[],desc:`Check: <2 A's AND no 3+ consecutive L's`},{type:`string`,data:`PPALLP`,highlights:[2],pointers:[],desc:`Found A at index 2 (count=1 < 2, OK)`,vars:{a_count:1,consec_l:0}},{type:`string`,data:`PPALLP`,highlights:[3,4],pointers:[],desc:`L,L consecutive (count=2 < 3, OK)`,vars:{a_count:1,consec_l:2}},{type:`string`,data:`PPALLP`,highlights:[5],pointers:[],desc:`P resets L count. Result: true ✓`,vars:{result:!0}}]},"Valid Palindrome":{title:`Valid Palindrome`,pattern:`Two Pointers`,explanation:`Skip non-alphanumeric, compare lowercase chars from both ends.`,difficulty:`Easy`,steps:[{type:`string`,data:`A man, a plan, a canal: Panama`,highlights:[],pointers:[],desc:`Ignore non-alphanumeric, check if palindrome`},{type:`string`,data:`amanaplanacanalpanama`,highlights:[],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:20,label:`R`,color:`var(--accent-green)`}],desc:`Clean: 'amanaplanacanalpanama'`},{type:`string`,data:`amanaplanacanalpanama`,highlights:[0,20],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:20,label:`R`,color:`var(--accent-green)`}],desc:`'a'=='a' ✓, move inward`},{type:`string`,data:`amanaplanacanalpanama`,highlights:[9,10],pointers:[{idx:9,label:`L`,color:`var(--accent-blue)`},{idx:10,label:`R`,color:`var(--accent-green)`}],desc:`All pairs match! It IS a palindrome ✓`,vars:{result:!0}}]},"Valid Palindrome II":{title:`Valid Palindrome II`,pattern:`Two Pointers + Skip`,explanation:`Normal palindrome check. On mismatch, try skipping left OR right character.`,difficulty:`Easy`,steps:[{type:`string`,data:`abca`,highlights:[],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:3,label:`R`,color:`var(--accent-green)`}],desc:`Can we make palindrome by removing at most 1 char?`},{type:`string`,data:`abca`,highlights:[1,2],pointers:[{idx:1,label:`L`,color:`var(--accent-blue)`},{idx:2,label:`R`,color:`var(--accent-green)`}],desc:`a==a ✓. Now b≠c. Try skip left(b) or right(c)`},{type:`string`,data:`abca`,highlights:[2,2],pointers:[],desc:`Skip left: check 'ca'→no. Skip right: check 'bc'→no. Try 'a' ✓`},{type:`info`,visual:`Remove 'b' → 'aca' is palindrome!`,desc:`Answer: true ✓`,vars:{result:!0}}]},"Edit Distance":{title:`Edit Distance`,pattern:`2D Dynamic Programming`,explanation:`dp[i][j] = min operations to convert word1[:i] to word2[:j]. Three choices: insert, delete, replace.`,difficulty:`Hard`,steps:[{type:`info`,visual:`word1='horse', word2='ros'`,desc:`Min edits to convert 'horse' → 'ros'`},{type:`matrix`,data:[[``,`r`,`o`,`s`],[`h`,1,1,1],[`o`,1,1,2],[`r`,1,2,2],[`s`,2,2,2],[`e`,2,2,3]],highlights:[[5,3]],desc:`DP table filled. dp[5][3] = 3 operations`},{type:`info`,visual:`horse → rorse (replace h→r)
rorse → rose (delete r)
rose → ros (delete e)`,desc:`Answer: 3 operations ✓`,vars:{result:3}}]},"Minimum Window Substring":{title:`Minimum Window Substring`,pattern:`Sliding Window + Hash Map`,explanation:`Expand right to include all chars of t. Then shrink left to find minimum window.`,difficulty:`Hard`,steps:[{type:`string`,data:`ADOBECODEBANC`,highlights:[],pointers:[],desc:`s='ADOBECODEBANC', t='ABC'. Find min window containing all of t.`},{type:`string`,data:`ADOBECODEBANC`,window:[0,1,2,3,4,5],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:5,label:`R`,color:`var(--accent-green)`}],desc:`'ADOBEC' contains A,B,C! Length=6`,vars:{min:6}},{type:`string`,data:`ADOBECODEBANC`,window:[9,10,11,12],pointers:[{idx:9,label:`L`,color:`var(--accent-blue)`},{idx:12,label:`R`,color:`var(--accent-green)`}],desc:`'BANC' contains A,B,C! Length=4`,vars:{min:4}},{type:`string`,data:`ADOBECODEBANC`,sorted:[9,10,11,12],pointers:[],desc:`Answer: 'BANC' (length 4) ✓`,vars:{result:`BANC`}}]},"Regular Expression Matching":{title:`Regular Expression Matching`,pattern:`2D DP / Recursion`,explanation:`'.' matches any char. '*' means zero or more of previous. Use DP table.`,difficulty:`Hard`,steps:[{type:`info`,visual:`s='aab', p='c*a*b'`,desc:`Does pattern match entire string?`},{type:`info`,visual:`c* = zero c's ✓
a* = two a's ✓
b = one b ✓`,desc:`c*→'', a*→'aa', b→'b' matches 'aab'`},{type:`info`,visual:`Result: True`,desc:`Answer: true ✓`,vars:{result:!0}}]},"Substring with Concatenation of All Words":{title:`Substring with Concatenation of All Words`,pattern:`Sliding Window + Word Map`,explanation:`Slide a window of total word length, check if it contains exact word frequencies.`,difficulty:`Hard`,steps:[{type:`string`,data:`barfoothefoobarman`,highlights:[],pointers:[],desc:`words=['foo','bar']. Find all starting indices.`},{type:`string`,data:`barfoothefoobarman`,window:[0,1,2,3,4,5],pointers:[],desc:`'barfoo': has 'bar'+'foo' ✓ Index 0!`,vars:{found:[0]}},{type:`string`,data:`barfoothefoobarman`,window:[9,10,11,12,13,14],pointers:[],desc:`'foobar': has 'foo'+'bar' ✓ Index 9!`,vars:{found:[0,9]}},{type:`info`,visual:`Result: [0, 9]`,desc:`Answer: [0, 9] ✓`,vars:{result:`[0,9]`}}]},"Wildcard Matching":{title:`Wildcard Matching`,pattern:`DP / Greedy`,explanation:`'?' matches one char, '*' matches any sequence. Use DP or greedy backtracking.`,difficulty:`Hard`,steps:[{type:`info`,visual:`s='adceb', p='*a*b'`,desc:`Does wildcard pattern match string?`},{type:`string`,data:`adceb`,highlights:[0,4],pointers:[],desc:`*→'', a→'a', *→'dce', b→'b'. Match!`},{type:`info`,visual:`Result: True`,desc:`Answer: true ✓`,vars:{result:!0}}]},"Bulls and Cows":{title:`Bulls and Cows`,pattern:`Frequency Count`,explanation:`Bulls = exact position matches. Cows = correct digit, wrong position (use frequency count).`,difficulty:`Medium`,steps:[{type:`string`,data:`1807`,highlights:[],pointers:[],desc:`secret='1807', guess='7810'`},{type:`string`,data:`1807`,highlights:[1],pointers:[{idx:1,label:`bull`,color:`var(--accent-green)`}],desc:`Position 1: 8==8 → 1 bull`,vars:{bulls:1}},{type:`info`,visual:`Remaining: 1_07 vs 7_10
Matched digits in wrong spots: 0,1 → 2 cows`,desc:`2 cows (0 and 1 present but wrong position)`},{type:`info`,visual:`Result: '1A2B'`,desc:`Answer: '1A2B' (1 bull, 2 cows) ✓`,vars:{result:`1A2B`}}]},"Check Inclusion":{title:`Check Inclusion`,pattern:`Sliding Window + Frequency`,explanation:`Slide window of size len(s1) over s2. Compare character frequencies.`,difficulty:`Medium`,steps:[{type:`string`,data:`eidbaooo`,highlights:[],pointers:[],desc:`s1='ab', s2='eidbaooo'. Is permutation of s1 in s2?`},{type:`string`,data:`eidbaooo`,window:[2,3],pointers:[],desc:`'db': freq doesn't match 'ab'`},{type:`string`,data:`eidbaooo`,window:[3,4],highlights:[3,4],pointers:[],desc:`'ba': freq matches 'ab'! ✓`,vars:{result:!0}}]},"Compare Version Numbers":{title:`Compare Version Numbers`,pattern:`Split + Compare`,explanation:`Split by '.', compare each revision level as integers.`,difficulty:`Medium`,steps:[{type:`info`,visual:`v1='1.01', v2='1.001'`,desc:`Compare version numbers`},{type:`info`,visual:`Split: [1,01] vs [1,001]
Compare: 1==1, 1==1`,desc:`All equal → return 0 ✓`,vars:{result:0}}]},"Count Occurrences of Anagram":{title:`Count Anagram Occurrences`,pattern:`Sliding Window + Freq Match`,explanation:`Slide window of pattern length, count windows where frequencies match pattern.`,difficulty:`Medium`,steps:[{type:`string`,data:`cbaebabacd`,highlights:[],pointers:[],desc:`pattern='abc'. Count anagram occurrences.`},{type:`string`,data:`cbaebabacd`,window:[0,1,2],highlights:[0,1,2],pointers:[],desc:`'cba' is anagram of 'abc' ✓`,vars:{count:1}},{type:`string`,data:`cbaebabacd`,window:[6,7,8],highlights:[6,7,8],pointers:[],desc:`'bac' is anagram of 'abc' ✓`,vars:{count:2}},{type:`info`,visual:`Result: 2`,desc:`Answer: 2 ✓`,vars:{result:2}}]},"Count and Say":{title:`Count and Say`,pattern:`String Simulation`,explanation:`Each term describes the previous: count consecutive same digits.`,difficulty:`Medium`,steps:[{type:`info`,visual:`1 → '1'
'1' → '11' (one 1)
'11' → '21' (two 1s)
'21' → '1211' (one 2, one 1)`,desc:`Build sequence by describing previous term`},{type:`string`,data:`1211`,highlights:[],pointers:[],desc:`n=4: '1211' (one 2, one 1, one 1)`,vars:{result:`1211`}}]},"Decode Ways":{title:`Decode Ways`,pattern:`1D Dynamic Programming`,explanation:`dp[i] = ways to decode s[:i]. Check if last 1 or 2 digits form valid letters (1-26).`,difficulty:`Medium`,steps:[{type:`string`,data:`226`,highlights:[],pointers:[],desc:`How many ways to decode? (1=A, 2=B, ..., 26=Z)`},{type:`string`,data:`226`,highlights:[0],pointers:[],desc:`'2'→B: dp[1]=1`,vars:{dp:`[1,1,_,_]`}},{type:`string`,data:`226`,highlights:[0,1],pointers:[],desc:`'22'→BB or V: dp[2]=2`,vars:{dp:`[1,1,2,_]`}},{type:`string`,data:`226`,highlights:[0,1,2],pointers:[],desc:`'226': '2-2-6'(BBF),'22-6'(VF),'2-26'(BZ): dp[3]=3`,vars:{dp:`[1,1,2,3]`}},{type:`info`,visual:`Result: 3`,desc:`Answer: 3 ways ✓`,vars:{result:3}}]},"Encode and Decode Strings":{title:`Encode and Decode Strings`,pattern:`Length Prefix`,explanation:`Encode each string as 'length#string'. Decode by reading length, then extracting that many chars.`,difficulty:`Medium`,steps:[{type:`info`,visual:`Input: ["hello","world"]
Encode: "5#hello5#world"`,desc:`Encode list of strings into single string`},{type:`info`,visual:`Decode: read 5→"hello", read 5→"world"`,desc:`Decode back to original list ✓`}]},"Find All Anagrams in a String":{title:`Find All Anagrams`,pattern:`Sliding Window`,explanation:`Slide window of len(p) over s. Use frequency array to check anagram match.`,difficulty:`Medium`,steps:[{type:`string`,data:`cbaebabacd`,highlights:[],pointers:[],desc:`s='cbaebabacd', p='abc'. Find all anagram start indices.`},{type:`string`,data:`cbaebabacd`,window:[0,1,2],highlights:[0,1,2],pointers:[],desc:`'cba' matches freq of 'abc' ✓ Index 0`,vars:{result:[0]}},{type:`string`,data:`cbaebabacd`,window:[6,7,8],highlights:[6,7,8],pointers:[],desc:`'bac' matches freq of 'abc' ✓ Index 6`,vars:{result:[0,6]}},{type:`info`,visual:`Result: [0, 6]`,desc:`Answer: [0, 6] ✓`}]},"Generate Parentheses":{title:`Generate Parentheses`,pattern:`Backtracking`,explanation:`Build valid combos: add '(' if open<n, add ')' if close<open. Recurse.`,difficulty:`Medium`,steps:[{type:`info`,visual:`n=3. Generate all valid parentheses combinations.`,desc:`Use backtracking with open/close counts`},{type:`stack`,data:[`(`,`(`,`(`,`)`,`)`,`)`],highlights:[0,1,2],desc:`Build: '((()))' — always valid if close≤open≤n`},{type:`info`,visual:`["((()))","(()())","(())()","()(())","()()()"]`,desc:`Answer: 5 combinations for n=3 ✓`,vars:{count:5}}]},"Get Equal Substrings Within Budget":{title:`Get Equal Substrings Within Budget`,pattern:`Sliding Window`,explanation:`Cost to change s[i]→t[i] is |s[i]-t[i]|. Find longest window with total cost ≤ maxCost.`,difficulty:`Medium`,steps:[{type:`string`,data:`abcd`,highlights:[],pointers:[],desc:`s='abcd',t='bcdf',maxCost=3`},{type:`array`,data:[1,1,1,2],highlights:[],pointers:[],desc:`Costs: |a-b|=1, |b-c|=1, |c-d|=1, |d-f|=2`},{type:`array`,data:[1,1,1,2],window:[0,1,2],pointers:[],desc:`Window [0..2]: cost=3 ≤ 3, length=3!`,vars:{cost:3,max:3}},{type:`info`,visual:`Result: 3`,desc:`Answer: 3 ✓`,vars:{result:3}}]},"Integer to Roman":{title:`Integer to Roman`,pattern:`Greedy (Largest First)`,explanation:`Greedily subtract largest Roman value that fits, append its symbol.`,difficulty:`Medium`,steps:[{type:`info`,visual:`num=1994
Values: M=1000, CM=900, D=500, CD=400, C=100, XC=90...`,desc:`Convert integer to Roman numeral`},{type:`info`,visual:`1994 - 1000 = 994 → 'M'
994 - 900 = 94 → 'CM'
94 - 90 = 4 → 'XC'
4 - 4 = 0 → 'IV'`,desc:`Answer: 'MCMXCIV' ✓`,vars:{result:`MCMXCIV`}}]},"Letter Combinations of a Phone Number":{title:`Letter Combinations of Phone`,pattern:`Backtracking / BFS`,explanation:`Map each digit to letters. Generate all combinations by choosing one letter per digit.`,difficulty:`Medium`,steps:[{type:`info`,visual:`digits='23'
2→'abc', 3→'def'`,desc:`Generate all letter combinations`},{type:`info`,visual:`Choose from 'abc': a,b,c
For each, choose from 'def': d,e,f`,desc:`3×3 = 9 combinations`},{type:`info`,visual:`["ad","ae","af","bd","be","bf","cd","ce","cf"]`,desc:`Answer: 9 combinations ✓`,vars:{count:9}}]},"Longest Palindromic Substring":{title:`Longest Palindromic Substring`,pattern:`Expand Around Center`,explanation:`For each center (char or between chars), expand outward while palindrome. Track longest.`,difficulty:`Medium`,steps:[{type:`string`,data:`babad`,highlights:[],pointers:[],desc:`Find longest palindromic substring`},{type:`string`,data:`babad`,highlights:[0],pointers:[{idx:0,label:`center`,color:`var(--accent-orange)`}],desc:`Center at 0: 'b' (length 1)`},{type:`string`,data:`babad`,window:[0,1,2],pointers:[{idx:1,label:`center`,color:`var(--accent-orange)`}],desc:`Center at 1: expand 'bab' (length 3)!`,vars:{longest:`bab`}},{type:`string`,data:`babad`,window:[1,2,3],pointers:[{idx:2,label:`center`,color:`var(--accent-orange)`}],desc:`Center at 2: expand 'aba' (length 3)`,vars:{longest:`bab`}},{type:`string`,data:`babad`,sorted:[0,1,2],pointers:[],desc:`Answer: 'bab' (or 'aba') ✓`,vars:{result:`bab`}}]},"Longest Repeating Character Replacement":{title:`Longest Repeating Char Replacement`,pattern:`Sliding Window`,explanation:`Window is valid if (length - maxFreq) ≤ k. Expand right, shrink left when invalid.`,difficulty:`Medium`,steps:[{type:`string`,data:`AABABBA`,highlights:[],pointers:[],desc:`k=1. Longest substring after at most 1 replacement.`},{type:`string`,data:`AABABBA`,window:[0,1,2,3],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:3,label:`R`,color:`var(--accent-green)`}],desc:`'AABA': maxFreq=3(A), changes=1≤k ✓ len=4`,vars:{max:4}},{type:`string`,data:`AABABBA`,window:[3,4,5,6],pointers:[{idx:3,label:`L`,color:`var(--accent-blue)`},{idx:6,label:`R`,color:`var(--accent-green)`}],desc:`'ABBA': maxFreq=2, changes=2>k. Shrink.`,vars:{max:4}},{type:`info`,visual:`Result: 4`,desc:`Answer: 4 ✓`,vars:{result:4}}]},"Longest Substring Without Repeating Characters":{title:`Longest Substring No Repeat`,pattern:`Sliding Window + Hash Set`,explanation:`Expand right, adding chars to set. On duplicate, shrink from left until removed.`,difficulty:`Medium`,steps:[{type:`string`,data:`abcabcbb`,highlights:[],pointers:[],desc:`Find longest substring with all unique chars`},{type:`string`,data:`abcabcbb`,window:[0,1,2],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:2,label:`R`,color:`var(--accent-green)`}],desc:`'abc': all unique, length=3`,vars:{max:3}},{type:`string`,data:`abcabcbb`,highlights:[3],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:3,label:`R`,color:`var(--accent-green)`}],desc:`Add 'a': duplicate! Shrink left past 'a'`},{type:`string`,data:`abcabcbb`,window:[1,2,3],pointers:[{idx:1,label:`L`,color:`var(--accent-blue)`},{idx:3,label:`R`,color:`var(--accent-green)`}],desc:`'bca': unique, length=3`,vars:{max:3}},{type:`info`,visual:`Result: 3 ('abc')`,desc:`Answer: 3 ✓`,vars:{result:3}}]},"Longest Word in Dictionary":{title:`Longest Word in Dictionary`,pattern:`Trie / Sort + Hash Set`,explanation:`Sort words. A word can be built if all its prefixes exist. Track longest.`,difficulty:`Medium`,steps:[{type:`info`,visual:`["w","wo","wor","worl","world"]`,desc:`Find longest word buildable one char at a time`},{type:`info`,visual:`w ✓ (in set)
wo ✓ (w exists)
wor ✓ (wo exists)
worl ✓
world ✓`,desc:`Each prefix exists → 'world' buildable`},{type:`info`,visual:`Result: 'world'`,desc:`Answer: 'world' ✓`,vars:{result:`world`}}]},"Minimum Number of Flips to Make Binary String Alternating":{title:`Min Flips for Alternating`,pattern:`Sliding Window on Doubled String`,explanation:`Double the string, slide window of size n. Count mismatches for both target patterns.`,difficulty:`Medium`,steps:[{type:`string`,data:`111000`,highlights:[],pointers:[],desc:`Circular rotation + flip to make alternating`},{type:`info`,visual:`Double: '111000111000'
Slide window of 6, count flips for '010101' and '101010'`,desc:`Try all rotations efficiently`},{type:`info`,visual:`Best window needs 2 flips`,desc:`Answer: 2 ✓`,vars:{result:2}}]},"Multiply Strings":{title:`Multiply Strings`,pattern:`Grade School Multiplication`,explanation:`Multiply digit by digit, accumulate products at correct positions in result array.`,difficulty:`Medium`,steps:[{type:`info`,visual:`num1='123', num2='456'`,desc:`Multiply without using built-in big integer`},{type:`info`,visual:`3×6=18, 3×5=15, 3×4=12
2×6=12, 2×5=10, 2×4=8
1×6=6, 1×5=5, 1×4=4`,desc:`Digit-by-digit multiplication, position i+j`},{type:`array`,data:[0,5,6,0,8,8],highlights:[0,1,2,3,4,5],pointers:[],desc:`Result array after all products: 56088`},{type:`info`,visual:`Result: '56088'`,desc:`Answer: '56088' ✓`,vars:{result:`56088`}}]},"Number of Substrings Containing All Three Characters":{title:`Substrings With All Three Chars`,pattern:`Sliding Window`,explanation:`Shrink window from left when all a,b,c present. Count valid substrings.`,difficulty:`Medium`,steps:[{type:`string`,data:`abcabc`,highlights:[],pointers:[],desc:`Count substrings containing at least one a, b, and c`},{type:`string`,data:`abcabc`,window:[0,1,2],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:2,label:`R`,color:`var(--accent-green)`}],desc:`'abc' has all 3! Substrings from here: 4`,vars:{count:4}},{type:`string`,data:`abcabc`,window:[1,2,3],pointers:[{idx:1,label:`L`,color:`var(--accent-blue)`},{idx:3,label:`R`,color:`var(--accent-green)`}],desc:`'bca' has all 3! Substrings: +3`,vars:{count:7}},{type:`info`,visual:`Result: 10`,desc:`Answer: 10 ✓`,vars:{result:10}}]},"Palindrome Partitioning":{title:`Palindrome Partitioning`,pattern:`Backtracking + DP`,explanation:`Try all partitions. For each prefix that's a palindrome, recurse on remainder.`,difficulty:`Medium`,steps:[{type:`string`,data:`aab`,highlights:[],pointers:[],desc:`Partition into all possible palindrome substrings`},{type:`info`,visual:`Try: "a"|"a"|"b" → all palindromes ✓
Try: "aa"|"b" → both palindromes ✓
Try: "aab" → not palindrome ✗`,desc:`Check all partitions via backtracking`},{type:`info`,visual:`Result: [["a","a","b"],["aa","b"]]`,desc:`Answer: 2 valid partitions ✓`}]},"Palindromic Substrings":{title:`Palindromic Substrings`,pattern:`Expand Around Center`,explanation:`For each center point, expand outward counting palindromes. n single + (n-1) pair centers.`,difficulty:`Medium`,steps:[{type:`string`,data:`aaa`,highlights:[],pointers:[],desc:`Count all palindromic substrings`},{type:`string`,data:`aaa`,highlights:[0],pointers:[{idx:0,label:`c`,color:`var(--accent-orange)`}],desc:`Center 0: 'a' → 1 palindrome`,vars:{count:1}},{type:`string`,data:`aaa`,highlights:[0,1,2],pointers:[{idx:1,label:`c`,color:`var(--accent-orange)`}],desc:`Center 1: 'a','aaa' → +2`,vars:{count:3}},{type:`string`,data:`aaa`,window:[0,1],pointers:[],desc:`Between 0-1: 'aa' → +1`,vars:{count:5}},{type:`info`,visual:`Total: 6 palindromic substrings`,desc:`Answer: 6 ✓ (a,a,a,aa,aa,aaa)`,vars:{result:6}}]},"Permutation in String":{title:`Permutation in String`,pattern:`Sliding Window + Frequency`,explanation:`Same as Check Inclusion — slide window of len(s1), compare freq arrays.`,difficulty:`Medium`,steps:[{type:`string`,data:`eidbaooo`,highlights:[],pointers:[],desc:`s1='ab'. Is any permutation of s1 a substring of s2?`},{type:`string`,data:`eidbaooo`,window:[3,4],highlights:[3,4],pointers:[],desc:`Window 'ba': same freq as 'ab' ✓`,vars:{result:!0}}]},"Reorganize String":{title:`Reorganize String`,pattern:`Greedy + Max Heap`,explanation:`Always place the most frequent character next. Use heap to pick greedily.`,difficulty:`Medium`,steps:[{type:`string`,data:`aab`,highlights:[],pointers:[],desc:`Rearrange so no two adjacent are same`},{type:`info`,visual:`Freq: a=2, b=1
Place most frequent first: a_a
Fill gaps: aba`,desc:`Greedy: alternate most frequent`},{type:`string`,data:`aba`,highlights:[0,1,2],pointers:[],desc:`Answer: 'aba' ✓`,vars:{result:`aba`}}]},"Repeated DNA Sequences":{title:`Repeated DNA Sequences`,pattern:`Hash Set + Sliding Window`,explanation:`Slide window of size 10. Use set to track seen sequences, second set for repeated.`,difficulty:`Medium`,steps:[{type:`string`,data:`AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT`,highlights:[],pointers:[],desc:`Find 10-letter sequences occurring more than once`},{type:`string`,data:`AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT`,window:[0,1,2,3,4,5,6,7,8,9],pointers:[],desc:`'AAAAACCCCC' → add to seen`,vars:{seen:1}},{type:`string`,data:`AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT`,window:[5,6,7,8,9,10,11,12,13,14],pointers:[],desc:`'CCCCCAAAAA' → add to seen`},{type:`info`,visual:`Repeated: ["AAAAACCCCC","CCCCCAAAAA"]`,desc:`Answer: 2 repeated sequences ✓`}]},"Restore IP Addresses":{title:`Restore IP Addresses`,pattern:`Backtracking`,explanation:`Try placing dots at valid positions. Each segment must be 0-255 with no leading zeros.`,difficulty:`Medium`,steps:[{type:`string`,data:`25525511135`,highlights:[],pointers:[],desc:`Insert 3 dots to form valid IP addresses`},{type:`info`,visual:`"255.255.11.135" ✓
"255.255.111.35" ✓`,desc:`Backtrack: try 1-3 digit segments, validate 0-255`},{type:`info`,visual:`Result: ["255.255.11.135","255.255.111.35"]`,desc:`Answer: 2 valid IPs ✓`,vars:{count:2}}]},"Reverse Integer":{title:`Reverse Integer`,pattern:`Math (Mod/Divide)`,explanation:`Extract digits from right with %10, build reversed number. Check overflow.`,difficulty:`Medium`,steps:[{type:`info`,visual:`x = 123`,desc:`Reverse digits of integer`},{type:`info`,visual:`123 % 10 = 3, rev = 3
12 % 10 = 2, rev = 32
1 % 10 = 1, rev = 321`,desc:`Extract digits right-to-left, build result`},{type:`info`,visual:`Result: 321`,desc:`Answer: 321 ✓ (check: within 32-bit range)`,vars:{result:321}}]},"Reverse Words in a String":{title:`Reverse Words in a String`,pattern:`Split + Reverse`,explanation:`Split by whitespace, reverse the list of words, join with single space.`,difficulty:`Medium`,steps:[{type:`info`,visual:`"  the sky  is blue  "`,desc:`Reverse word order, trim extra spaces`},{type:`info`,visual:`Split: ["the","sky","is","blue"]
Reverse: ["blue","is","sky","the"]`,desc:`Split, reverse, join`},{type:`info`,visual:`Result: "blue is sky the"`,desc:`Answer: 'blue is sky the' ✓`,vars:{result:`blue is sky the`}}]},"String to Integer (atoi)":{title:`String to Integer (atoi)`,pattern:`State Machine / Linear Scan`,explanation:`Skip whitespace, handle sign, read digits until non-digit. Clamp to 32-bit range.`,difficulty:`Medium`,steps:[{type:`string`,data:`   -42abc`,highlights:[],pointers:[],desc:`Parse integer from string with edge cases`},{type:`string`,data:`   -42abc`,window:[0,1,2],pointers:[],desc:`Skip whitespace`,vars:{}},{type:`string`,data:`   -42abc`,highlights:[3],pointers:[{idx:3,label:`sign`,color:`var(--accent-orange)`}],desc:`Read sign: negative`,vars:{sign:-1}},{type:`string`,data:`   -42abc`,highlights:[4,5],pointers:[],desc:`Read digits: '42'`,vars:{num:42}},{type:`string`,data:`   -42abc`,highlights:[6],pointers:[{idx:6,label:`stop`,color:`var(--accent-red)`}],desc:`Non-digit 'a': stop. Result: -42`,vars:{result:-42}}]},"Word Break":{title:`Word Break`,pattern:`Dynamic Programming`,explanation:`dp[i] = true if s[:i] can be segmented. For each i, check all possible last words.`,difficulty:`Medium`,steps:[{type:`string`,data:`leetcode`,highlights:[],pointers:[],desc:`wordDict=['leet','code']. Can we segment?`},{type:`string`,data:`leetcode`,window:[0,1,2,3],pointers:[],desc:`s[0:4]='leet' in dict! dp[4]=true`,vars:{dp:`[T,_,_,_,T,_,_,_,_]`}},{type:`string`,data:`leetcode`,window:[4,5,6,7],pointers:[],desc:`s[4:8]='code' in dict AND dp[4]=true! dp[8]=true`,vars:{dp:`[T,_,_,_,T,_,_,_,T]`}},{type:`info`,visual:`dp[8] = True`,desc:`Answer: true ✓ ('leet'+'code')`,vars:{result:!0}}]},"Word Search":{title:`Word Search`,pattern:`DFS Backtracking on Grid`,explanation:`From each cell matching first letter, DFS in 4 directions marking visited.`,difficulty:`Medium`,steps:[{type:`matrix`,data:[[`A`,`B`,`C`,`E`],[`S`,`F`,`C`,`S`],[`A`,`D`,`E`,`E`]],highlights:[],desc:`Find 'ABCCED' in grid`},{type:`matrix`,data:[[`A`,`B`,`C`,`E`],[`S`,`F`,`C`,`S`],[`A`,`D`,`E`,`E`]],highlights:[[0,0],[0,1],[0,2],[1,2],[2,2],[2,1]],desc:`Path: A→B→C→C→E→D ✓`},{type:`info`,visual:`Result: True`,desc:`Answer: true ✓`,vars:{result:!0}}]},"ZigZag Conversion":{title:`ZigZag Conversion`,pattern:`Row Simulation`,explanation:`Assign chars to rows in zigzag pattern. Concatenate all rows.`,difficulty:`Medium`,steps:[{type:`info`,visual:`s='PAYPALISHIRING', numRows=3
P   A   H   N
A P L S I I G
Y   I   R`,desc:`Place characters in zigzag pattern`},{type:`info`,visual:`Read row by row: PAHNAPLSIIGYIR`,desc:`Answer: 'PAHNAPLSIIGYIR' ✓`,vars:{result:`PAHNAPLSIIGYIR`}}]}},Hm={"Contains Duplicate II":{title:`Contains Duplicate II`,pattern:`Sliding Window + Hash Map`,explanation:`Keep a set of values in a window of size k. If duplicate found within window, return true.`,difficulty:`Easy`,steps:[{type:`array`,data:[1,2,3,1],highlights:[],pointers:[],desc:`k=3. Any duplicate within distance k?`},{type:`array`,data:[1,2,3,1],highlights:[0,3],pointers:[],desc:`nums[0]=nums[3]=1, distance=3 ≤ k ✓`,vars:{result:!0}}]},"Count Good Pairs":{title:`Count Good Pairs`,pattern:`Frequency Count`,explanation:`For each number, count how many times we've seen it before. Each previous occurrence forms a good pair.`,difficulty:`Easy`,steps:[{type:`array`,data:[1,2,3,1,1,3],highlights:[],pointers:[],desc:`Count pairs (i,j) where nums[i]==nums[j] and i<j`},{type:`array`,data:[1,2,3,1,1,3],highlights:[0,3],pointers:[],desc:`See 1 again (count=1): +1 pair`,vars:{pairs:1}},{type:`array`,data:[1,2,3,1,1,3],highlights:[0,3,4],pointers:[],desc:`See 1 again (count=2): +2 pairs`,vars:{pairs:3}},{type:`array`,data:[1,2,3,1,1,3],highlights:[2,5],pointers:[],desc:`See 3 again (count=1): +1 pair`,vars:{pairs:4}},{type:`info`,visual:`Result: 4`,desc:`Answer: 4 ✓`,vars:{result:4}}]},"Design HashMap":{title:`Design HashMap`,pattern:`Array of Buckets + Chaining`,explanation:`Hash key to bucket index. Handle collisions with linked list in each bucket.`,difficulty:`Easy`,steps:[{type:`hashmap`,data:[],highlights:[],desc:`Implement put, get, remove operations`},{type:`hashmap`,data:[{key:1,value:1}],highlights:[0],desc:`put(1,1): hash(1)=bucket, store {1:1}`},{type:`hashmap`,data:[{key:1,value:1},{key:2,value:2}],highlights:[1],desc:`put(2,2): store {2:2}`},{type:`hashmap`,data:[{key:1,value:1},{key:2,value:2}],highlights:[0],desc:`get(1) → 1 ✓, get(3) → -1 (not found)`},{type:`hashmap`,data:[{key:1,value:1}],highlights:[],desc:`remove(2): delete key 2 ✓`}]},"Design HashSet":{title:`Design HashSet`,pattern:`Array of Buckets`,explanation:`Similar to HashMap but only stores keys. Use hash function to determine bucket.`,difficulty:`Easy`,steps:[{type:`hashmap`,data:[],highlights:[],desc:`Implement add, remove, contains`},{type:`hashmap`,data:[{key:1,value:`✓`},{key:2,value:`✓`}],highlights:[0,1],desc:`add(1), add(2)`},{type:`hashmap`,data:[{key:1,value:`✓`},{key:2,value:`✓`}],highlights:[0],desc:`contains(1)→true, contains(3)→false`},{type:`hashmap`,data:[{key:1,value:`✓`}],highlights:[],desc:`remove(2), contains(2)→false ✓`}]},"Find Common Characters":{title:`Find Common Characters`,pattern:`Intersection of Frequency Arrays`,explanation:`For each string, count frequencies. Take minimum frequency for each char across all strings.`,difficulty:`Easy`,steps:[{type:`info`,visual:`["bella","label","roller"]`,desc:`Find characters common to all strings (with repetition)`},{type:`info`,visual:`bella: {b:1,e:1,l:2,a:1}
label: {l:2,a:1,b:1,e:1}
roller: {r:2,o:1,l:2,e:1}`,desc:`Count frequencies per string`},{type:`info`,visual:`min: e=1, l=2
Result: ['e','l','l']`,desc:`Answer: ['e','l','l'] ✓`}]},"Happy Number":{title:`Happy Number`,pattern:`Cycle Detection (Floyd's)`,explanation:`Sum of squares of digits. If reaches 1, happy. If cycles, not happy. Use fast/slow pointers.`,difficulty:`Easy`,steps:[{type:`info`,visual:`n=19`,desc:`Is 19 a happy number? Sum of squared digits repeatedly.`},{type:`info`,visual:`19 → 1²+9² = 82
82 → 64+4 = 68
68 → 36+64 = 100
100 → 1+0+0 = 1 ✓`,desc:`Reached 1! It's happy! ✓`,vars:{result:!0}}]},"Intersection of Two Arrays":{title:`Intersection of Two Arrays`,pattern:`Set Intersection`,explanation:`Convert both to sets. Return their intersection.`,difficulty:`Easy`,steps:[{type:`twoarray`,data1:[1,2,2,1],data2:[2,2],highlights1:[],highlights2:[],label1:`nums1`,label2:`nums2`,desc:`Find common elements (unique)`},{type:`info`,visual:`set1={1,2}, set2={2}
Intersection: {2}`,desc:`Answer: [2] ✓`,vars:{result:`[2]`}}]},"Intersection of Two Arrays II":{title:`Intersection of Two Arrays II`,pattern:`Frequency Count`,explanation:`Count frequencies of each array. Take min count for each number.`,difficulty:`Easy`,steps:[{type:`twoarray`,data1:[1,2,2,1],data2:[2,2],highlights1:[],highlights2:[],label1:`nums1`,label2:`nums2`,desc:`Find intersection with duplicates`},{type:`info`,visual:`freq1: {1:2, 2:2}
freq2: {2:2}
min: {2:2}`,desc:`Answer: [2,2] ✓`,vars:{result:`[2,2]`}}]},"Isomorphic Strings":{title:`Isomorphic Strings`,pattern:`Two Hash Maps (Bijection)`,explanation:`Map each char in s to char in t and vice versa. If mapping conflicts, not isomorphic.`,difficulty:`Easy`,steps:[{type:`string`,data:`egg`,highlights:[],pointers:[],desc:`Is 'egg' isomorphic to 'add'?`},{type:`hashmap`,data:[{key:`e`,value:`a`},{key:`g`,value:`d`}],highlights:[0,1],desc:`Mapping: e→a, g→d. Consistent!`},{type:`info`,visual:`'egg' → 'add': e→a, g→d, g→d ✓`,desc:`Answer: true ✓`,vars:{result:!0}}]},"Number of Good Pairs":{title:`Number of Good Pairs`,pattern:`Frequency Count`,explanation:`Same as Count Good Pairs. For each element seen k times, it contributes k*(k-1)/2 pairs.`,difficulty:`Easy`,steps:[{type:`array`,data:[1,2,3,1,1,3],highlights:[],pointers:[],desc:`Count (i,j) pairs where nums[i]==nums[j], i<j`},{type:`info`,visual:`1 appears 3 times: C(3,2)=3 pairs
3 appears 2 times: C(2,2)=1 pair
Total: 4`,desc:`Answer: 4 ✓`,vars:{result:4}}]},"Ransom Note":{title:`Ransom Note`,pattern:`Frequency Count`,explanation:`Count chars in magazine. Check if all chars in ransom note are available.`,difficulty:`Easy`,steps:[{type:`info`,visual:`ransomNote='aa', magazine='aab'`,desc:`Can we construct ransom note from magazine letters?`},{type:`hashmap`,data:[{key:`a`,value:`2/2`},{key:`b`,value:`0/1`}],highlights:[0],desc:`Need 2 a's, have 2. Need 0 b's. Sufficient!`},{type:`info`,visual:`Result: True`,desc:`Answer: true ✓`,vars:{result:!0}}]},"Two Sum":{title:`Two Sum`,pattern:`Hash Map Complement`,explanation:`For each number, check if (target - num) exists in hash map. If yes, return indices.`,difficulty:`Easy`,steps:[{type:`array`,data:[2,7,11,15],highlights:[],pointers:[],desc:`target=9. Find two indices that sum to 9.`},{type:`array`,data:[2,7,11,15],highlights:[0],pointers:[],desc:`num=2, need 7. Not in map. Store {2:0}`,vars:{map:`{2:0}`}},{type:`array`,data:[2,7,11,15],highlights:[1],pointers:[],desc:`num=7, need 2. Found in map at idx 0!`,vars:{map:`{2:0}`}},{type:`array`,data:[2,7,11,15],sorted:[0,1],pointers:[],desc:`Answer: [0, 1] ✓`,vars:{result:`[0,1]`}}]},"Unique Email Addresses":{title:`Unique Email Addresses`,pattern:`String Processing + Set`,explanation:`Process each email: ignore dots and text after '+' in local name. Count unique.`,difficulty:`Easy`,steps:[{type:`info`,visual:`"a.b@example.com" → "ab@example.com"
"a+b@example.com" → "a@example.com"`,desc:`Normalize emails and count unique`},{type:`info`,visual:`Add normalized emails to set
Set size = unique count`,desc:`Answer: count of unique addresses ✓`}]},"Valid Anagram":{title:`Valid Anagram`,pattern:`Frequency Count (Array)`,explanation:`Count char frequencies for both strings. If identical, they're anagrams.`,difficulty:`Easy`,steps:[{type:`string`,data:`anagram`,highlights:[],pointers:[],desc:`Is 'anagram' an anagram of 'nagaram'?`},{type:`info`,visual:`Count 'anagram': {a:3,n:1,g:1,r:1,m:1}
Count 'nagaram': {a:3,n:1,g:1,r:1,m:1}`,desc:`Frequencies match!`},{type:`info`,visual:`Result: True`,desc:`Answer: true ✓`,vars:{result:!0}}]},"Word Pattern":{title:`Word Pattern`,pattern:`Bijection (Two Maps)`,explanation:`Map each pattern char to a word and each word to a pattern char. Check consistency.`,difficulty:`Easy`,steps:[{type:`info`,visual:`pattern='abba', s='dog cat cat dog'`,desc:`Does pattern match word sequence?`},{type:`hashmap`,data:[{key:`a`,value:`dog`},{key:`b`,value:`cat`}],highlights:[0,1],desc:`a→dog, b→cat. Check: a→dog ✓, b→cat ✓`},{type:`info`,visual:`Consistent bijection: true`,desc:`Answer: true ✓`,vars:{result:!0}}]},"Contains Duplicate III":{title:`Contains Duplicate III`,pattern:`Bucket Sort / SortedList`,explanation:`Divide into buckets of size t+1. Numbers in same/adjacent buckets may satisfy condition.`,difficulty:`Hard`,steps:[{type:`array`,data:[1,5,9,1,5,9],highlights:[],pointers:[],desc:`indexDiff=2, valueDiff=3. Any pair within range?`},{type:`info`,visual:`Bucket size = valueDiff+1 = 4
Buckets: {0:[1], 1:[5,9]}
Check same/adjacent buckets within index window`,desc:`Use bucket technique for O(n) solution`},{type:`info`,visual:`Result: False (no valid pair)`,desc:`Answer: false ✓`,vars:{result:!1}}]},"4Sum II":{title:`4Sum II`,pattern:`Hash Map (Divide in Two)`,explanation:`Compute all A[i]+B[j] sums in a map. For each C[k]+D[l], check if -(C+D) exists.`,difficulty:`Medium`,steps:[{type:`info`,visual:`A=[1,2], B=[-2,-1], C=[-1,2], D=[0,2]`,desc:`Count tuples where A[i]+B[j]+C[k]+D[l]=0`},{type:`hashmap`,data:[{key:`-1`,value:1},{key:`0`,value:2},{key:`1`,value:1}],highlights:[],desc:`Map of A+B sums: {-1:1, 0:2, 1:1}`},{type:`info`,visual:`C+D pairs: -1,1,2,4
Look for negatives in map:
-(-1)=1 ✓, -(1)=-1 ✓`,desc:`Answer: 2 tuples ✓`,vars:{result:2}}]},"Brick Wall":{title:`Brick Wall`,pattern:`Hash Map (Gap Counting)`,explanation:`Count gap positions across all rows. Most common gap = fewest bricks crossed.`,difficulty:`Medium`,steps:[{type:`info`,visual:`Wall with bricks of varying widths
Gaps at positions where rows end (not edges)`,desc:`Find line crossing fewest bricks`},{type:`hashmap`,data:[{key:`pos 2`,value:3},{key:`pos 3`,value:2},{key:`pos 4`,value:1}],highlights:[0],desc:`Position 2 has most gaps (3). Cross rows-3 bricks.`},{type:`info`,visual:`Result: totalRows - maxGaps`,desc:`Answer: minimum bricks crossed ✓`}]},"Continuous Subarray Sum":{title:`Continuous Subarray Sum`,pattern:`Prefix Sum + Modulo`,explanation:`If prefix_sum[j] % k == prefix_sum[i] % k, then sum(i..j) is divisible by k.`,difficulty:`Medium`,steps:[{type:`array`,data:[23,2,4,6,7],highlights:[],pointers:[],desc:`k=6. Any subarray (len≥2) with sum multiple of 6?`},{type:`array`,data:[23,2,4,6,7],highlights:[0],pointers:[],desc:`prefix%6: 23%6=5. Store {5:0}`,vars:{map:`{0:-1,5:0}`}},{type:`array`,data:[23,2,4,6,7],highlights:[1],pointers:[],desc:`prefix=25, 25%6=1. Store {1:1}`,vars:{map:`{0:-1,5:0,1:1}`}},{type:`array`,data:[23,2,4,6,7],highlights:[2],pointers:[],desc:`prefix=29, 29%6=5. 5 seen at idx 0! gap=2≥2 ✓`,vars:{found:!0}},{type:`info`,visual:`sum(23,2,4)=29, not div by 6. But sum(2,4)=6 ✓`,desc:`Answer: true (subarray [2,4]) ✓`,vars:{result:!0}}]},"Find Duplicate File in System":{title:`Find Duplicate File in System`,pattern:`Hash Map (Content Key)`,explanation:`Group files by content. Files with same content are duplicates.`,difficulty:`Medium`,steps:[{type:`info`,visual:`"root/a 1.txt(abc) 2.txt(def)"
"root/b 3.txt(abc)"`,desc:`Group files with same content`},{type:`hashmap`,data:[{key:`abc`,value:`[root/a/1.txt, root/b/3.txt]`},{key:`def`,value:`[root/a/2.txt]`}],highlights:[0],desc:`Files with content 'abc' are duplicates`},{type:`info`,visual:`Result: [["root/a/1.txt","root/b/3.txt"]]`,desc:`Answer: 1 group of duplicates ✓`}]},"Group Anagrams":{title:`Group Anagrams`,pattern:`Hash Map (Sorted Key)`,explanation:`Sort each word to create a canonical form. Group words with same sorted form.`,difficulty:`Medium`,steps:[{type:`info`,visual:`["eat","tea","tan","ate","nat","bat"]`,desc:`Group words that are anagrams of each other`},{type:`hashmap`,data:[{key:`aet`,value:`["eat","tea","ate"]`},{key:`ant`,value:`["tan","nat"]`},{key:`abt`,value:`["bat"]`}],highlights:[0,1,2],desc:`Sort each word as key, group values`},{type:`info`,visual:`Result: [["eat","tea","ate"],["tan","nat"],["bat"]]`,desc:`Answer: 3 groups ✓`,vars:{groups:3}}]},"Insert Delete GetRandom O(1)":{title:`Insert Delete GetRandom O(1)`,pattern:`Hash Map + Array`,explanation:`Array for O(1) random access. Map stores value→index. Swap with last on delete.`,difficulty:`Medium`,steps:[{type:`info`,visual:`Operations: insert, remove, getRandom — all O(1)`,desc:`Need both fast lookup AND random access`},{type:`twoarray`,data1:[1,2,3],data2:[],highlights1:[],highlights2:[],label1:`Array`,label2:`Map: {1:0, 2:1, 3:2}`,desc:`Array for random, map for O(1) lookup`},{type:`info`,visual:`Remove 2: swap with last (3), pop.
Array: [1,3], Map: {1:0, 3:1}`,desc:`Swap-with-last trick keeps O(1) delete ✓`}]},"LRU Cache":{title:`LRU Cache`,pattern:`Hash Map + Doubly Linked List`,explanation:`Map gives O(1) lookup. Doubly linked list tracks usage order. Move to front on access.`,difficulty:`Medium`,steps:[{type:`info`,visual:`capacity=2`,desc:`Implement Least Recently Used cache`},{type:`hashmap`,data:[{key:1,value:1}],highlights:[0],desc:`put(1,1): cache = {1:1}`},{type:`hashmap`,data:[{key:1,value:1},{key:2,value:2}],highlights:[1],desc:`put(2,2): cache = {1:1, 2:2}`},{type:`hashmap`,data:[{key:1,value:1},{key:2,value:2}],highlights:[0],desc:`get(1)→1: move key 1 to front (most recent)`},{type:`hashmap`,data:[{key:1,value:1},{key:3,value:3}],highlights:[1],desc:`put(3,3): evict LRU (key 2)! cache = {1:1, 3:3}`},{type:`info`,visual:`get(2) → -1 (evicted!)`,desc:`Key 2 was evicted as LRU ✓`}]},"Longest Consecutive Sequence":{title:`Longest Consecutive Sequence`,pattern:`Hash Set`,explanation:`Put all in set. For each sequence start (num-1 not in set), count consecutive numbers.`,difficulty:`Medium`,steps:[{type:`array`,data:[100,4,200,1,3,2],highlights:[],pointers:[],desc:`Find longest consecutive sequence. Must be O(n).`},{type:`info`,visual:`Set: {100,4,200,1,3,2}
Sequence starts: where num-1 NOT in set`,desc:`Only start counting from sequence beginnings`},{type:`array`,data:[100,4,200,1,3,2],highlights:[3,5,1,0],pointers:[],desc:`Start at 1: 1→2→3→4 (length 4!)`,vars:{max:4}},{type:`info`,visual:`Result: 4 (sequence: 1,2,3,4)`,desc:`Answer: 4 ✓`,vars:{result:4}}]},"Maximum Size Subarray Sum Equals k":{title:`Max Subarray Sum = k`,pattern:`Prefix Sum + Hash Map`,explanation:`Store prefix sums. If prefix[j]-prefix[i]=k, subarray (i,j] sums to k. Find longest.`,difficulty:`Medium`,steps:[{type:`array`,data:[1,-1,5,-2,3],highlights:[],pointers:[],desc:`k=3. Find longest subarray summing to 3.`},{type:`array`,data:[1,-1,5,-2,3],highlights:[0,1,2,3],pointers:[],desc:`prefix sums: [1,0,5,3,6]. prefix[3]=3=k → length 4!`,vars:{max_len:4}},{type:`info`,visual:`Result: 4 (subarray [1,-1,5,-2])`,desc:`Answer: 4 ✓`,vars:{result:4}}]},"Subarray Sum Divisible by K":{title:`Subarray Sum Divisible by K`,pattern:`Prefix Sum + Modulo + Count`,explanation:`Same remainder means subarray between is divisible by K. Count pairs with same remainder.`,difficulty:`Medium`,steps:[{type:`array`,data:[4,5,0,-2,-3,1],highlights:[],pointers:[],desc:`k=5. Count subarrays with sum divisible by 5.`},{type:`info`,visual:`Prefix mods: [4,4,4,2,4,0]
Count remainders: {0:2, 4:4, 2:1}
Pairs: C(2,2)+C(4,2)+C(1,2) = 1+6+0 = 7`,desc:`Answer: 7 ✓`,vars:{result:7}}]},"Subarray Sum Equals K":{title:`Subarray Sum Equals K`,pattern:`Prefix Sum + Hash Map`,explanation:`Count prefix sums. If prefix[j]-prefix[i]=k, count it. Use map for O(1) lookup.`,difficulty:`Medium`,steps:[{type:`array`,data:[1,1,1],highlights:[],pointers:[],desc:`k=2. Count subarrays summing to 2.`},{type:`array`,data:[1,1,1],highlights:[0],pointers:[],desc:`prefix=1, need prefix-k=-1: not in map`,vars:{count:0,map:`{0:1}`}},{type:`array`,data:[1,1,1],highlights:[1],pointers:[],desc:`prefix=2, need 0: found! count++`,vars:{count:1,map:`{0:1,1:1}`}},{type:`array`,data:[1,1,1],highlights:[2],pointers:[],desc:`prefix=3, need 1: found! count++`,vars:{count:2,map:`{0:1,1:1,2:1}`}},{type:`info`,visual:`Result: 2`,desc:`Answer: 2 ([1,1] at idx 0-1 and 1-2) ✓`,vars:{result:2}}]},"Top K Frequent Elements":{title:`Top K Frequent Elements`,pattern:`Hash Map + Heap/Bucket Sort`,explanation:`Count frequencies, then get top k using heap or bucket sort.`,difficulty:`Medium`,steps:[{type:`array`,data:[1,1,1,2,2,3],highlights:[],pointers:[],desc:`k=2. Find 2 most frequent elements.`},{type:`hashmap`,data:[{key:`1`,value:3},{key:`2`,value:2},{key:`3`,value:1}],highlights:[0,1],desc:`Frequencies: {1:3, 2:2, 3:1}. Top 2: [1, 2]`},{type:`info`,visual:`Result: [1, 2]`,desc:`Answer: [1, 2] ✓`,vars:{result:`[1,2]`}}]}},Um={"Binary Search":{title:`Binary Search`,pattern:`Divide and Conquer`,explanation:`Check middle element. If target, done. If smaller, search right half. If larger, search left.`,difficulty:`Easy`,steps:[{type:`array`,data:[-1,0,3,5,9,12],highlights:[],pointers:[],desc:`target=9. Search sorted array.`},{type:`array`,data:[-1,0,3,5,9,12],highlights:[2],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:2,label:`M`,color:`var(--accent-orange)`},{idx:5,label:`R`,color:`var(--accent-green)`}],desc:`mid=2: arr[2]=3 < 9, search right`,vars:{}},{type:`array`,data:[-1,0,3,5,9,12],highlights:[4],pointers:[{idx:3,label:`L`,color:`var(--accent-blue)`},{idx:4,label:`M`,color:`var(--accent-orange)`},{idx:5,label:`R`,color:`var(--accent-green)`}],desc:`mid=4: arr[4]=9 == target! Found! ✓`,vars:{result:4}}]},"First Bad Version":{title:`First Bad Version`,pattern:`Binary Search (Boundary)`,explanation:`Binary search for the transition point from good to bad.`,difficulty:`Easy`,steps:[{type:`array`,data:[`G`,`G`,`G`,`B`,`B`],highlights:[],pointers:[],desc:`n=5, first bad version=4`},{type:`array`,data:[`G`,`G`,`G`,`B`,`B`],highlights:[2],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:2,label:`M`,color:`var(--accent-orange)`},{idx:4,label:`R`,color:`var(--accent-green)`}],desc:`mid=3: good → search right`},{type:`array`,data:[`G`,`G`,`G`,`B`,`B`],highlights:[3],pointers:[{idx:3,label:`L=M`,color:`var(--accent-orange)`},{idx:4,label:`R`,color:`var(--accent-green)`}],desc:`mid=4: bad → search left. L=R=4 → answer!`,vars:{result:4}}]},"Guess Number Higher or Lower":{title:`Guess Number`,pattern:`Binary Search`,explanation:`Classic binary search. API tells you higher/lower/equal.`,difficulty:`Easy`,steps:[{type:`info`,visual:`n=10, pick=6`,desc:`Guess number 1-10 with higher/lower hints`},{type:`array`,data:[1,2,3,4,5,6,7,8,9,10],highlights:[4],pointers:[{idx:4,label:`guess`,color:`var(--accent-orange)`}],desc:`Guess 5: 'higher' → search 6-10`},{type:`array`,data:[1,2,3,4,5,6,7,8,9,10],highlights:[7],pointers:[{idx:7,label:`guess`,color:`var(--accent-orange)`}],desc:`Guess 8: 'lower' → search 6-7`},{type:`array`,data:[1,2,3,4,5,6,7,8,9,10],highlights:[5],pointers:[{idx:5,label:`✓`,color:`var(--accent-green)`}],desc:`Guess 6: correct! ✓`,vars:{result:6}}]},"Merge Sorted Array":{title:`Merge Sorted Array`,pattern:`Three Pointers (Back to Front)`,explanation:`Fill from the back of nums1. Compare last elements of both arrays.`,difficulty:`Easy`,steps:[{type:`twoarray`,data1:[1,2,3,0,0,0],data2:[2,5,6],highlights1:[],highlights2:[],label1:`nums1`,label2:`nums2`,desc:`Merge nums2 into nums1 (has extra space)`},{type:`array`,data:[1,2,3,0,0,6],highlights:[5],pointers:[{idx:2,label:`p1`,color:`var(--accent-blue)`},{idx:5,label:`w`,color:`var(--accent-orange)`}],desc:`Compare 3 vs 6: place 6 at end`},{type:`array`,data:[1,2,3,0,5,6],highlights:[4],pointers:[{idx:2,label:`p1`,color:`var(--accent-blue)`},{idx:4,label:`w`,color:`var(--accent-orange)`}],desc:`Compare 3 vs 5: place 5`},{type:`array`,data:[1,2,2,3,5,6],sorted:[0,1,2,3,4,5],pointers:[],desc:`Final: [1,2,2,3,5,6] ✓`}]},"Sqrt(x)":{title:`Sqrt(x)`,pattern:`Binary Search`,explanation:`Binary search for largest k where k*k ≤ x.`,difficulty:`Easy`,steps:[{type:`info`,visual:`x=8. Find floor(sqrt(8)).`,desc:`Binary search between 1 and 8`},{type:`info`,visual:`mid=4: 4²=16 > 8 → search left
mid=2: 2²=4 ≤ 8 → ans=2, search right
mid=3: 3²=9 > 8 → search left`,desc:`Narrow down to 2`},{type:`info`,visual:`Result: 2 (since 2²=4 ≤ 8 < 9=3²)`,desc:`Answer: 2 ✓`,vars:{result:2}}]},"Valid Perfect Square":{title:`Valid Perfect Square`,pattern:`Binary Search`,explanation:`Binary search for k where k*k == num.`,difficulty:`Easy`,steps:[{type:`info`,visual:`num=16`,desc:`Is 16 a perfect square?`},{type:`info`,visual:`Binary search: mid=8 → 64>16
mid=4 → 16==16 ✓`,desc:`Answer: true (4²=16) ✓`,vars:{result:!0}}]},"Count of Smaller Numbers After Self":{title:`Count Smaller After Self`,pattern:`Merge Sort (Count Inversions)`,explanation:`During merge sort, count how many elements from right subarray are placed before left elements.`,difficulty:`Hard`,steps:[{type:`array`,data:[5,2,6,1],highlights:[],pointers:[],desc:`For each element, count smaller elements to its right`},{type:`info`,visual:`Merge sort with inversion counting:
[5,2,6,1] → [5,2] [6,1]
→ [2,5] [1,6] (count inversions during merge)`,desc:`Modified merge sort tracks right-to-left movements`},{type:`array`,data:[2,1,1,0],sorted:[0,1,2,3],pointers:[],desc:`Answer: [2,1,1,0] ✓ (5 has 2 smaller, 2 has 1, 6 has 1, 1 has 0)`}]},"Find Median from Data Stream":{title:`Find Median from Data Stream`,pattern:`Two Heaps (Max + Min)`,explanation:`Max-heap for lower half, min-heap for upper half. Median is at the tops.`,difficulty:`Hard`,steps:[{type:`info`,visual:`addNum(1): maxHeap=[1], minHeap=[]
addNum(2): maxHeap=[1], minHeap=[2]`,desc:`Balance two heaps`},{type:`info`,visual:`Median = (1+2)/2 = 1.5`,desc:`Even count: average of two tops`,vars:{median:1.5}},{type:`info`,visual:`addNum(3): maxHeap=[1,2], minHeap=[3]
Median = top of maxHeap = 2`,desc:`Odd count: top of larger heap = 2 ✓`,vars:{median:2}}]},"Median of Two Sorted Arrays":{title:`Median of Two Sorted Arrays`,pattern:`Binary Search on Partition`,explanation:`Binary search for correct partition in shorter array. O(log(min(m,n))).`,difficulty:`Hard`,steps:[{type:`twoarray`,data1:[1,3],data2:[2],highlights1:[],highlights2:[],label1:`nums1`,label2:`nums2`,desc:`Find median of merged sorted arrays in O(log n)`},{type:`info`,visual:`Partition nums1 at 1: left=[1], right=[3]
Partition nums2 at 1: left=[2], right=[]
1≤2 and 2≤3 ✓ Valid partition!`,desc:`Binary search for correct partition`},{type:`info`,visual:`Merged length=3 (odd)
Median = max(left sides) = max(1,2) = 2`,desc:`Answer: 2.0 ✓`,vars:{result:2}}]},"Car Fleet":{title:`Car Fleet`,pattern:`Sort + Stack/Greedy`,explanation:`Sort by position desc. If car behind arrives at or before car ahead, they fleet together.`,difficulty:`Medium`,steps:[{type:`info`,visual:`target=12, pos=[10,8,0,5,3], speed=[2,4,1,1,3]`,desc:`Cars that catch up form a fleet`},{type:`info`,visual:`Sort by position desc:
pos=10, time=(12-10)/2=1.0
pos=8, time=(12-8)/4=1.0 ≤ 1.0 → joins fleet
pos=5, time=7.0 → new fleet`,desc:`Count cars that DON'T catch the one ahead`},{type:`info`,visual:`Result: 3 fleets`,desc:`Answer: 3 ✓`,vars:{result:3}}]},"Find Minimum in Rotated Sorted Array":{title:`Find Min in Rotated Array`,pattern:`Binary Search`,explanation:`If arr[mid] > arr[right], min is in right half. Otherwise, min is in left half (or at mid).`,difficulty:`Medium`,steps:[{type:`array`,data:[3,4,5,1,2],highlights:[],pointers:[{idx:0,label:`L`,color:`var(--accent-blue)`},{idx:4,label:`R`,color:`var(--accent-green)`}],desc:`Find minimum in rotated sorted array`},{type:`array`,data:[3,4,5,1,2],highlights:[2],pointers:[{idx:2,label:`M`,color:`var(--accent-orange)`}],desc:`mid=2: arr[2]=5 > arr[4]=2 → min in right half`},{type:`array`,data:[3,4,5,1,2],highlights:[3],pointers:[{idx:3,label:`M`,color:`var(--accent-green)`}],desc:`mid=3: arr[3]=1 ≤ arr[4]=2 → min at or left of mid`},{type:`array`,data:[3,4,5,1,2],sorted:[3],pointers:[],desc:`Answer: 1 ✓`,vars:{result:1}}]},"Find Peak Element":{title:`Find Peak Element`,pattern:`Binary Search`,explanation:`If arr[mid] < arr[mid+1], peak exists in right half. Otherwise in left half.`,difficulty:`Medium`,steps:[{type:`array`,data:[1,2,3,1],highlights:[],pointers:[],desc:`Find any peak element (greater than neighbors)`},{type:`array`,data:[1,2,3,1],highlights:[1],pointers:[{idx:1,label:`M`,color:`var(--accent-orange)`}],desc:`mid=1: arr[1]=2 < arr[2]=3 → peak is right`},{type:`array`,data:[1,2,3,1],highlights:[2],pointers:[{idx:2,label:`peak`,color:`var(--accent-green)`}],desc:`mid=2: arr[2]=3 > arr[3]=1. Peak found! ✓`,vars:{result:2}}]},"H-Index":{title:`H-Index`,pattern:`Sort + Linear Scan`,explanation:`Sort citations desc. H-index is largest h where h papers have ≥ h citations.`,difficulty:`Medium`,steps:[{type:`array`,data:[3,0,6,1,5],highlights:[],pointers:[],desc:`Find h-index`},{type:`array`,data:[6,5,3,1,0],highlights:[0,1,2,3,4],pointers:[],desc:`Sort desc: [6,5,3,1,0]`},{type:`array`,data:[6,5,3,1,0],highlights:[0,1,2],pointers:[{idx:2,label:`h=3`,color:`var(--accent-green)`}],desc:`3 papers with ≥3 citations each. h=3 ✓`,vars:{result:3}}]},"K Closest Points to Origin":{title:`K Closest Points`,pattern:`Max Heap / Quickselect`,explanation:`Maintain max-heap of size k. Or use quickselect for O(n) average.`,difficulty:`Medium`,steps:[{type:`info`,visual:`points=[[1,3],[-2,2]], k=1`,desc:`Find k closest points to origin (0,0)`},{type:`info`,visual:`Distances: [1,3]→√10, [-2,2]→√8
√8 < √10 → [-2,2] is closer`,desc:`Compare squared distances to avoid sqrt`},{type:`info`,visual:`Result: [[-2,2]]`,desc:`Answer: [[-2,2]] ✓`,vars:{result:`[[-2,2]]`}}]},"Kth Largest Element in an Array":{title:`Kth Largest Element`,pattern:`Quickselect / Min Heap`,explanation:`Quickselect: partition like quicksort, but only recurse into the half containing kth position.`,difficulty:`Medium`,steps:[{type:`array`,data:[3,2,1,5,6,4],highlights:[],pointers:[],desc:`k=2. Find 2nd largest element.`},{type:`array`,data:[3,2,1,5,6,4],highlights:[4],pointers:[{idx:4,label:`pivot`,color:`var(--accent-purple)`}],desc:`Quickselect: pivot=6, position=5 (0-indexed)`},{type:`array`,data:[3,2,1,4,5,6],highlights:[4],pointers:[{idx:4,label:`pivot`,color:`var(--accent-purple)`}],desc:`Pivot=5 at position 4. k=2 → need pos 4. Found!`},{type:`array`,data:[3,2,1,4,5,6],sorted:[4],pointers:[],desc:`Answer: 5 ✓`,vars:{result:5}}]},"Kth Smallest Element in a Sorted Matrix":{title:`Kth Smallest in Matrix`,pattern:`Binary Search on Value`,explanation:`Binary search on value range. For each mid, count elements ≤ mid in matrix.`,difficulty:`Medium`,steps:[{type:`matrix`,data:[[1,5,9],[10,11,13],[12,13,15]],highlights:[],desc:`k=8. Find 8th smallest element.`},{type:`info`,visual:`Range [1,15]. mid=8: count≤8 is 2 (<8)
mid=12: count≤12 is 6 (<8)
mid=13: count≤13 is 8 (≥8) → answer in [13,13]`,desc:`Binary search on value, count using matrix property`},{type:`info`,visual:`Result: 13`,desc:`Answer: 13 ✓`,vars:{result:13}}]},"Largest Number":{title:`Largest Number`,pattern:`Custom Sort Comparator`,explanation:`Sort numbers by comparing ''+a+b vs ''+b+a. Largest concatenation first.`,difficulty:`Medium`,steps:[{type:`array`,data:[3,30,34,5,9],highlights:[],pointers:[],desc:`Arrange to form largest number`},{type:`info`,visual:`Compare: '330' vs '303' → 3 before 30
'534' vs '345' → 5 before 34
Sort: 9,5,34,3,30`,desc:`Custom comparator: a+b vs b+a`},{type:`info`,visual:`Result: "9534330"`,desc:`Answer: '9534330' ✓`,vars:{result:`9534330`}}]},"Meeting Rooms II":{title:`Meeting Rooms II`,pattern:`Sort + Min Heap / Sweep Line`,explanation:`Sort by start. Use min-heap tracking end times. If new start < min end, need new room.`,difficulty:`Medium`,steps:[{type:`info`,visual:`intervals: [[0,30],[5,10],[15,20]]`,desc:`Min meeting rooms needed at peak`},{type:`info`,visual:`Sort by start: [0,30],[5,10],[15,20]
t=0: room 1 (ends 30)
t=5: 5<30, room 2 (ends 10)
t=15: 15>10, reuse room 2`,desc:`Track rooms with heap of end times`},{type:`info`,visual:`Max rooms at once: 2`,desc:`Answer: 2 ✓`,vars:{result:2}}]},"Merge Intervals":{title:`Merge Intervals`,pattern:`Sort + Linear Merge`,explanation:`Sort by start. If current overlaps previous, merge. Otherwise add new interval.`,difficulty:`Medium`,steps:[{type:`info`,visual:`[[1,3],[2,6],[8,10],[15,18]]`,desc:`Merge overlapping intervals`},{type:`info`,visual:`[1,3]+[2,6] overlap → [1,6]
[1,6]+[8,10] no overlap → keep both
[8,10]+[15,18] no overlap → keep both`,desc:`Merge when start ≤ prev end`},{type:`info`,visual:`Result: [[1,6],[8,10],[15,18]]`,desc:`Answer: [[1,6],[8,10],[15,18]] ✓`}]},"Minimum Number of Arrows to Burst Balloons":{title:`Min Arrows to Burst Balloons`,pattern:`Sort + Greedy (Interval Scheduling)`,explanation:`Sort by end. Shoot at each balloon's end — bursts all overlapping.`,difficulty:`Medium`,steps:[{type:`info`,visual:`balloons: [[10,16],[2,8],[1,6],[7,12]]`,desc:`Minimum arrows to burst all balloons`},{type:`info`,visual:`Sort by end: [1,6],[2,8],[7,12],[10,16]
Arrow at 6: bursts [1,6],[2,8]
Arrow at 12: bursts [7,12],[10,16]`,desc:`Greedy: shoot at end of earliest-ending balloon`},{type:`info`,visual:`Result: 2 arrows`,desc:`Answer: 2 ✓`,vars:{result:2}}]},"Non-overlapping Intervals":{title:`Non-overlapping Intervals`,pattern:`Sort + Greedy`,explanation:`Sort by end time. Keep intervals that don't overlap. Count removals.`,difficulty:`Medium`,steps:[{type:`info`,visual:`[[1,2],[2,3],[3,4],[1,3]]`,desc:`Min removals to eliminate all overlaps`},{type:`info`,visual:`Sort by end: [1,2],[2,3],[1,3],[3,4]
Keep [1,2] (end=2)
Keep [2,3] (start≥2)
Skip [1,3] (start<2) → REMOVE
Keep [3,4] (start≥3)`,desc:`Greedy: keep earliest-ending non-overlapping`},{type:`info`,visual:`Result: 1 removal`,desc:`Answer: 1 ✓`,vars:{result:1}}]},"Search a 2D Matrix":{title:`Search a 2D Matrix`,pattern:`Binary Search (Treat as 1D)`,explanation:`Matrix is sorted left-to-right, top-to-bottom continuously. Treat as flattened sorted array.`,difficulty:`Medium`,steps:[{type:`matrix`,data:[[1,3,5,7],[10,11,16,20],[23,30,34,60]],highlights:[],desc:`target=3. Binary search in matrix.`},{type:`info`,visual:`Treat as 1D array of 12 elements
mid=5 → row=5/4=1, col=5%4=1 → val=11 > 3
Search left half`,desc:`Map 1D index to 2D: row=idx/cols, col=idx%cols`},{type:`matrix`,data:[[1,3,5,7],[10,11,16,20],[23,30,34,60]],highlights:[[0,1]],desc:`Found 3 at (0,1) ✓`,vars:{result:!0}}]},"Search a 2D Matrix II":{title:`Search a 2D Matrix II`,pattern:`Staircase Search`,explanation:`Start at top-right. If target < current, go left. If target > current, go down.`,difficulty:`Medium`,steps:[{type:`matrix`,data:[[1,4,7],[2,5,8],[3,6,9]],highlights:[],desc:`target=5. Each row and column is sorted.`},{type:`matrix`,data:[[1,4,7],[2,5,8],[3,6,9]],highlights:[[0,2]],desc:`Start top-right: 7 > 5 → go left`},{type:`matrix`,data:[[1,4,7],[2,5,8],[3,6,9]],highlights:[[0,1]],desc:`4 < 5 → go down`},{type:`matrix`,data:[[1,4,7],[2,5,8],[3,6,9]],highlights:[[1,1]],desc:`5 == 5 → Found! ✓`,vars:{result:!0}}]},"Search in Rotated Sorted Array":{title:`Search in Rotated Sorted Array`,pattern:`Modified Binary Search`,explanation:`One half is always sorted. Check if target is in sorted half, otherwise search other half.`,difficulty:`Medium`,steps:[{type:`array`,data:[4,5,6,7,0,1,2],highlights:[],pointers:[],desc:`target=0. Array rotated at some pivot.`},{type:`array`,data:[4,5,6,7,0,1,2],highlights:[3],pointers:[{idx:3,label:`M`,color:`var(--accent-orange)`}],desc:`mid=3(7). Left [4,5,6,7] sorted. 0 not in [4,7] → search right`},{type:`array`,data:[4,5,6,7,0,1,2],highlights:[5],pointers:[{idx:5,label:`M`,color:`var(--accent-orange)`}],desc:`mid=5(1). Right [1,2] sorted. 0 not in [1,2] → search left`},{type:`array`,data:[4,5,6,7,0,1,2],sorted:[4],pointers:[],desc:`Found 0 at index 4 ✓`,vars:{result:4}}]},"Search in Rotated Sorted Array II":{title:`Search in Rotated Array II`,pattern:`Modified Binary Search (with Duplicates)`,explanation:`Same as above but skip duplicates when arr[left]==arr[mid]==arr[right].`,difficulty:`Medium`,steps:[{type:`array`,data:[2,5,6,0,0,1,2],highlights:[],pointers:[],desc:`target=0. May contain duplicates.`},{type:`info`,visual:`When nums[L]==nums[M]==nums[R],
can't determine which half is sorted.
Shrink: L++, R--`,desc:`Handle duplicates by shrinking bounds`},{type:`array`,data:[2,5,6,0,0,1,2],sorted:[3],pointers:[],desc:`Found 0 at index 3 ✓`,vars:{result:!0}}]},"Sort Colors":{title:`Sort Colors (Dutch Flag)`,pattern:`Three Pointers`,explanation:`Pointer for 0s (left), 2s (right), current. Swap 0s left, 2s right, skip 1s.`,difficulty:`Medium`,steps:[{type:`array`,data:[2,0,2,1,1,0],highlights:[],pointers:[{idx:0,label:`lo`,color:`var(--accent-blue)`},{idx:0,label:`mid`,color:`var(--accent-orange)`},{idx:5,label:`hi`,color:`var(--accent-green)`}],desc:`Sort [2,0,2,1,1,0] using 3-way partition`},{type:`array`,data:[0,0,2,1,1,2],swaps:[0,5],pointers:[{idx:0,label:`lo`,color:`var(--accent-blue)`},{idx:2,label:`mid`,color:`var(--accent-orange)`},{idx:4,label:`hi`,color:`var(--accent-green)`}],desc:`Swap 2→right, 0→left`},{type:`array`,data:[0,0,1,1,2,2],sorted:[0,1,2,3,4,5],pointers:[],desc:`Sorted: [0,0,1,1,2,2] ✓`}]},"Sort List":{title:`Sort List`,pattern:`Merge Sort (Linked List)`,explanation:`Split list in half (slow/fast pointers), sort each half, merge.`,difficulty:`Medium`,steps:[{type:`array`,data:[4,2,1,3],highlights:[],pointers:[],desc:`Sort linked list in O(n log n)`},{type:`info`,visual:`Split: [4,2] [1,3]
Split: [4][2] [1][3]
Merge: [2,4] [1,3]
Merge: [1,2,3,4]`,desc:`Merge sort: split by slow/fast, merge sorted halves`},{type:`array`,data:[1,2,3,4],sorted:[0,1,2,3],pointers:[],desc:`Sorted: [1,2,3,4] ✓`}]},"Task Scheduler":{title:`Task Scheduler`,pattern:`Greedy + Math`,explanation:`Most frequent task determines min time. Gaps filled by other tasks.`,difficulty:`Medium`,steps:[{type:`info`,visual:`tasks=["A","A","A","B","B","B"], n=2`,desc:`Schedule with cooldown n between same tasks`},{type:`info`,visual:`A _ _ A _ _ A
A B _ A B _ A B
Min intervals = (maxFreq-1)*(n+1) + countMax`,desc:`Formula: (3-1)*(2+1) + 2 = 8`},{type:`info`,visual:`Result: 8`,desc:`Answer: 8 intervals ✓`,vars:{result:8}}]},"Wiggle Sort II":{title:`Wiggle Sort II`,pattern:`Sort + Interleave`,explanation:`Sort, split into halves. Interleave: smaller at even indices, larger at odd indices (reversed).`,difficulty:`Medium`,steps:[{type:`array`,data:[1,5,1,1,6,4],highlights:[],pointers:[],desc:`Rearrange so nums[0]<nums[1]>nums[2]<nums[3]...`},{type:`array`,data:[1,1,1,4,5,6],highlights:[0,1,2,3,4,5],pointers:[],desc:`Sort: [1,1,1,4,5,6]. Split: small=[1,1,1], large=[4,5,6]`},{type:`array`,data:[1,6,1,5,1,4],sorted:[0,1,2,3,4,5],pointers:[],desc:`Interleave reversed: [1,6,1,5,1,4] ✓ (zigzag!)`}]}},Wm={"Backspace String Compare":{title:`Backspace String Compare`,pattern:`Stack / Two Pointer (Reverse)`,explanation:`Process each string with a stack: push chars, pop on '#'. Compare final results.`,difficulty:`Easy`,steps:[{type:`string`,data:`ab#c`,highlights:[],pointers:[],desc:`s='ab#c', t='ad#c'. Compare after backspaces.`},{type:`stack`,data:[`c`,`a`],highlights:[],desc:`Process 'ab#c': push a,b → # pops b → push c. Stack: [a,c]`},{type:`stack`,data:[`c`,`a`],highlights:[],desc:`Process 'ad#c': push a,d → # pops d → push c. Stack: [a,c]`},{type:`info`,visual:`Both produce 'ac'. Equal!`,desc:`Answer: true ✓`,vars:{result:!0}}]},"Implement Queue using Stacks":{title:`Queue using Two Stacks`,pattern:`Two Stacks (Lazy Transfer)`,explanation:`Push to stack1. On pop/peek, if stack2 empty, transfer all from stack1 to stack2.`,difficulty:`Easy`,steps:[{type:`info`,visual:`Use 2 stacks to simulate FIFO queue`,desc:`push stack reverses order; pop stack gives FIFO`},{type:`stack`,data:[3,2,1],highlights:[],desc:`Push 1,2,3: pushStack = [3,2,1]`},{type:`stack`,data:[1,2,3],highlights:[0],desc:`Pop: transfer to popStack = [1,2,3]. Pop 1 (FIFO!) ✓`},{type:`info`,visual:`peek()→2, pop()→2, pop()→3`,desc:`Amortized O(1) per operation ✓`}]},"Implement Stack using Queues":{title:`Stack using Queues`,pattern:`Single Queue (Rotate)`,explanation:`On push, add element then rotate queue so new element is at front.`,difficulty:`Easy`,steps:[{type:`queue`,data:[3,2,1],highlights:[0],desc:`Push 1,2,3. After each push, rotate so newest is front.`},{type:`info`,visual:`push(1): q=[1]
push(2): q=[2,1] (rotate 1 to back)
push(3): q=[3,2,1] (rotate 2 elements)`,desc:`Rotate queue after each push for LIFO order`},{type:`queue`,data:[2,1],highlights:[0],desc:`pop()→3, now front is 2. LIFO order ✓`}]},"Moving Average from Data Stream":{title:`Moving Average`,pattern:`Queue (Fixed Window)`,explanation:`Keep a queue of last k elements. On new element, add to sum, remove oldest if over size.`,difficulty:`Easy`,steps:[{type:`queue`,data:[1],highlights:[],desc:`size=3. next(1): sum=1, avg=1.0`},{type:`queue`,data:[1,10],highlights:[],desc:`next(10): sum=11, avg=5.5`},{type:`queue`,data:[1,10,3],highlights:[],desc:`next(3): sum=14, avg=4.67`},{type:`queue`,data:[10,3,5],highlights:[],desc:`next(5): remove 1, sum=18, avg=6.0 ✓`}]},"Next Greater Element I":{title:`Next Greater Element I`,pattern:`Monotonic Stack + Hash Map`,explanation:`Use decreasing stack on nums2. When we pop, the current element is the 'next greater'.`,difficulty:`Easy`,steps:[{type:`array`,data:[1,3,4,2],highlights:[],pointers:[],desc:`nums1=[4,1,2], nums2=[1,3,4,2]. Find next greater in nums2.`},{type:`stack`,data:[1],highlights:[],desc:`Push 1. Stack: [1]`},{type:`stack`,data:[3],highlights:[],desc:`3>1: pop 1, nextGreater[1]=3. Push 3.`},{type:`stack`,data:[4],highlights:[],desc:`4>3: pop 3, nextGreater[3]=4. Push 4.`},{type:`info`,visual:`nextGreater: {1:3, 3:4, 4:-1, 2:-1}
Answer for [4,1,2]: [-1,3,-1]`,desc:`Answer: [-1,3,-1] ✓`}]},"Number of Recent Calls":{title:`Number of Recent Calls`,pattern:`Queue`,explanation:`Keep timestamps in queue. On new ping, add it, then remove all timestamps older than t-3000.`,difficulty:`Easy`,steps:[{type:`queue`,data:[1],highlights:[],desc:`ping(1): queue=[1], count=1`},{type:`queue`,data:[1,100],highlights:[],desc:`ping(100): queue=[1,100], count=2`},{type:`queue`,data:[1,100,3001],highlights:[],desc:`ping(3001): queue=[1,100,3001], count=3`},{type:`queue`,data:[3001,3002],highlights:[],desc:`ping(3002): remove <2, queue=[3001,3002], count=2 ✓`}]},"Remove All Adjacent Duplicates in String":{title:`Remove Adjacent Duplicates`,pattern:`Stack`,explanation:`Push chars to stack. If top equals current char, pop instead of pushing.`,difficulty:`Easy`,steps:[{type:`string`,data:`abbaca`,highlights:[],pointers:[],desc:`Remove adjacent duplicates repeatedly`},{type:`stack`,data:[`a`],highlights:[],desc:`Push 'a'`},{type:`stack`,data:[],highlights:[],desc:`'b','b' adjacent → cancel! Pop both.`},{type:`stack`,data:[`c`,`a`],highlights:[],desc:`Push 'a','c'. Then 'a': top='c'≠'a', push.`},{type:`info`,visual:`Result: "ca"`,desc:`Answer: 'ca' ✓`,vars:{result:`ca`}}]},"Valid Parentheses":{title:`Valid Parentheses`,pattern:`Stack`,explanation:`Push opening brackets. On closing, check if top matches. Stack must be empty at end.`,difficulty:`Easy`,steps:[{type:`string`,data:`({[]})`,highlights:[],pointers:[],desc:`Check if brackets are valid`},{type:`stack`,data:[`(`],highlights:[],desc:`Push '('`},{type:`stack`,data:[`{`,`(`],highlights:[],desc:`Push '{'`},{type:`stack`,data:[`[`,`{`,`(`],highlights:[],desc:`Push '['`},{type:`stack`,data:[`{`,`(`],highlights:[],desc:`']' matches '[' → pop!`},{type:`stack`,data:[`(`],highlights:[],desc:`'}' matches '{' → pop!`},{type:`stack`,data:[],highlights:[],desc:`')' matches '(' → pop! Stack empty = Valid ✓`,vars:{result:!0}}]},"Basic Calculator":{title:`Basic Calculator`,pattern:`Stack + Recursion`,explanation:`Use stack for sign tracking. Handle parentheses by pushing current result/sign.`,difficulty:`Hard`,steps:[{type:`string`,data:`(1+(4+5+2)-3)`,highlights:[],pointers:[],desc:`Evaluate expression with +, -, ( )`},{type:`stack`,data:[`+1`,`+1`],highlights:[],desc:`Enter (: push result=0, sign=+1`},{type:`info`,visual:`1 + (4+5+2) - 3
= 1 + 11 - 3 = 9`,desc:`Process inside-out`},{type:`info`,visual:`Result: 9`,desc:`Answer: 9 ✓`,vars:{result:9}}]},"Largest Rectangle in Histogram":{title:`Largest Rectangle in Histogram`,pattern:`Monotonic Stack`,explanation:`Maintain increasing stack of indices. On shorter bar, pop and calculate area with popped bar as height.`,difficulty:`Hard`,steps:[{type:`bars`,data:[2,1,5,6,2,3],highlights:[],sorted:[],desc:`Find largest rectangle in histogram`},{type:`bars`,data:[2,1,5,6,2,3],highlights:[2,3],sorted:[],desc:`Stack: increasing heights. At bar 4(h=2), pop 6 and 5.`},{type:`info`,visual:`Pop h=6: width=1, area=6
Pop h=5: width=2, area=10 ← max!`,desc:`Calculate area when popping: h × (right-left-1)`},{type:`bars`,data:[2,1,5,6,2,3],highlights:[2,3],sorted:[2,3],desc:`Answer: 10 (5×2 rectangle) ✓`,vars:{result:10}}]},"Maximal Rectangle":{title:`Maximal Rectangle`,pattern:`Histogram per Row + Monotonic Stack`,explanation:`Build histogram heights row by row. Apply largest-rectangle-in-histogram for each row.`,difficulty:`Hard`,steps:[{type:`matrix`,data:[[`1`,`0`,`1`,`0`,`0`],[`1`,`0`,`1`,`1`,`1`],[`1`,`1`,`1`,`1`,`1`]],highlights:[],desc:`Find largest rectangle of 1s`},{type:`info`,visual:`Row 0 histogram: [1,0,1,0,0]
Row 1 histogram: [2,0,2,1,1]
Row 2 histogram: [3,1,3,2,2]`,desc:`Build histogram heights per row`},{type:`bars`,data:[3,1,3,2,2],highlights:[2,3,4],sorted:[],desc:`Row 2: largest rect in [3,1,3,2,2] = 6 (2×3)`},{type:`info`,visual:`Result: 6`,desc:`Answer: 6 ✓`,vars:{result:6}}]},"Sliding Window Maximum":{title:`Sliding Window Maximum`,pattern:`Monotonic Deque`,explanation:`Maintain decreasing deque. Front is always the max. Remove front if outside window.`,difficulty:`Hard`,steps:[{type:`array`,data:[1,3,-1,-3,5,3,6,7],highlights:[],pointers:[],desc:`k=3. Find max in each window.`},{type:`array`,data:[1,3,-1,-3,5,3,6,7],window:[0,1,2],pointers:[],desc:`Window [1,3,-1]: max=3`,vars:{result:`[3]`}},{type:`array`,data:[1,3,-1,-3,5,3,6,7],window:[1,2,3],pointers:[],desc:`Window [3,-1,-3]: max=3`,vars:{result:`[3,3]`}},{type:`array`,data:[1,3,-1,-3,5,3,6,7],window:[2,3,4],pointers:[],desc:`Window [-1,-3,5]: max=5`,vars:{result:`[3,3,5]`}},{type:`info`,visual:`Result: [3,3,5,5,6,7]`,desc:`Answer: [3,3,5,5,6,7] ✓`}]},"Asteroid Collision":{title:`Asteroid Collision`,pattern:`Stack`,explanation:`Process left-to-right. Positive go right, negative go left. Use stack for rightward asteroids.`,difficulty:`Medium`,steps:[{type:`array`,data:[5,10,-5],highlights:[],pointers:[],desc:`Positive=right, negative=left. What survives?`},{type:`stack`,data:[5,10],highlights:[],desc:`Push 5, 10 (going right)`},{type:`stack`,data:[5,10],highlights:[0],desc:`-5 hits 10: |-5|<10, -5 destroyed. Stack unchanged.`},{type:`info`,visual:`Result: [5, 10]`,desc:`Answer: [5, 10] ✓ (-5 destroyed)`}]},"Basic Calculator II":{title:`Basic Calculator II`,pattern:`Stack (Operator Precedence)`,explanation:`Process * and / immediately (higher precedence). Push +/- terms to stack, sum at end.`,difficulty:`Medium`,steps:[{type:`string`,data:`3+2*2`,highlights:[],pointers:[],desc:`Evaluate 3+2*2 (no parentheses)`},{type:`stack`,data:[3],highlights:[],desc:`Push 3`},{type:`stack`,data:[4,3],highlights:[],desc:`Op=*, compute 2*2=4, push 4`},{type:`info`,visual:`Stack: [3, 4]
Sum: 3+4 = 7`,desc:`Answer: 7 ✓`,vars:{result:7}}]},"Build an Array With Stack Operations":{title:`Build Array with Stack Ops`,pattern:`Stack Simulation`,explanation:`Read stream 1..n. Push each, pop if not in target.`,difficulty:`Medium`,steps:[{type:`array`,data:[1,3],highlights:[],pointers:[],desc:`target=[1,3], n=3. Build using Push/Pop only.`},{type:`info`,visual:`Stream 1: Push (need 1) ✓
Stream 2: Push, Pop (skip 2)
Stream 3: Push (need 3) ✓`,desc:`Answer: ['Push','Push','Pop','Push'] ✓`}]},"Daily Temperatures":{title:`Daily Temperatures`,pattern:`Monotonic Stack (Decreasing)`,explanation:`Stack of indices with decreasing temps. When warmer day found, pop and record the gap.`,difficulty:`Medium`,steps:[{type:`array`,data:[73,74,75,71,69,72,76,73],highlights:[],pointers:[],desc:`Days until warmer temperature`},{type:`array`,data:[73,74,75,71,69,72,76,73],highlights:[0],pointers:[],desc:`Push idx 0(73)`},{type:`array`,data:[73,74,75,71,69,72,76,73],highlights:[1],pointers:[],desc:`74>73: pop idx 0, answer[0]=1-0=1`,vars:{answer:`[1,...]`}},{type:`array`,data:[73,74,75,71,69,72,76,73],highlights:[5],pointers:[],desc:`72>69: pop idx 4, answer[4]=5-4=1. 72>71: pop idx 3, answer[3]=5-3=2`},{type:`array`,data:[1,1,4,2,1,1,0,0],sorted:[0,1,2,3,4,5,6,7],pointers:[],desc:`Answer: [1,1,4,2,1,1,0,0] ✓`}]},"Decode String":{title:`Decode String`,pattern:`Stack (Nested Encoding)`,explanation:`Push current string and multiplier when hitting '['. On ']', pop and repeat.`,difficulty:`Medium`,steps:[{type:`string`,data:`3[a2[c]]`,highlights:[],pointers:[],desc:`Decode: repeat inner strings`},{type:`stack`,data:[`3`,`[`],highlights:[],desc:`num=3, push to stack on '['`},{type:`info`,visual:`Inner: 2[c] → "cc"
Outer: 3[a + "cc"] → 3["acc"] → "accaccacc"`,desc:`Process inside-out`},{type:`info`,visual:`Result: "accaccacc"`,desc:`Answer: 'accaccacc' ✓`,vars:{result:`accaccacc`}}]},"Design Browser History":{title:`Browser History`,pattern:`Two Stacks / Array + Pointer`,explanation:`Array with current index. Back goes left, forward goes right, visit clears forward.`,difficulty:`Medium`,steps:[{type:`array`,data:[`home`,`google`,`fb`,`yt`],highlights:[3],pointers:[{idx:3,label:`curr`,color:`var(--accent-blue)`}],desc:`Visit: home→google→fb→youtube`},{type:`array`,data:[`home`,`google`,`fb`,`yt`],highlights:[1],pointers:[{idx:1,label:`curr`,color:`var(--accent-blue)`}],desc:`back(2): move 2 steps back → google`},{type:`array`,data:[`home`,`google`,`fb`,`yt`],highlights:[2],pointers:[{idx:2,label:`curr`,color:`var(--accent-blue)`}],desc:`forward(1): move 1 step forward → fb ✓`}]},"Design Circular Deque":{title:`Circular Deque`,pattern:`Array + Two Pointers (Modular)`,explanation:`Use circular array with front/rear pointers. Modular arithmetic for wrapping.`,difficulty:`Medium`,steps:[{type:`info`,visual:`Circular buffer with front and rear pointers`,desc:`insertFront, insertLast, deleteFront, deleteLast`},{type:`queue`,data:[1,2,3],highlights:[0,2],desc:`Front=1, Rear=3. All operations O(1).`},{type:`info`,visual:`Modular indexing: (ptr + 1) % capacity`,desc:`Wrap-around using modulo ✓`}]},"Design Circular Queue":{title:`Circular Queue`,pattern:`Array + Modular Arithmetic`,explanation:`Fixed array with head pointer and count. enQueue/deQueue adjust pointers with modulo.`,difficulty:`Medium`,steps:[{type:`queue`,data:[],highlights:[],desc:`Capacity=3. Implement FIFO with circular array.`},{type:`queue`,data:[1,2,3],highlights:[0],desc:`enQueue(1,2,3): full!`},{type:`queue`,data:[2,3],highlights:[0],desc:`deQueue: remove front(1). head moves forward modulo size.`},{type:`info`,visual:`isFull/isEmpty check using count vs capacity`,desc:`O(1) all operations ✓`}]},"Evaluate Reverse Polish Notation":{title:`Evaluate RPN`,pattern:`Stack`,explanation:`Push numbers. On operator, pop two, compute, push result.`,difficulty:`Medium`,steps:[{type:`array`,data:[`2`,`1`,`+`,`3`,`*`],highlights:[],pointers:[],desc:`Evaluate: (2+1)*3`},{type:`stack`,data:[2,1],highlights:[],desc:`Push 2, 1`},{type:`stack`,data:[3],highlights:[],desc:`'+': pop 1,2 → 2+1=3, push 3`},{type:`stack`,data:[3,3],highlights:[],desc:`Push 3`},{type:`stack`,data:[9],highlights:[],desc:`'*': pop 3,3 → 3*3=9, push 9 ✓`,vars:{result:9}}]},"Flatten Nested List Iterator":{title:`Flatten Nested List`,pattern:`Stack (Recursive Flatten)`,explanation:`Use stack to flatten nested structure lazily. Push elements in reverse order.`,difficulty:`Medium`,steps:[{type:`info`,visual:`Input: [[1,1],2,[1,1]]`,desc:`Implement iterator that flattens nested lists`},{type:`stack`,data:[`[1,1]`,2,`[1,1]`],highlights:[],desc:`Push in reverse to stack`},{type:`info`,visual:`On next(): if top is list, expand it
next()→1,1,2,1,1`,desc:`Lazily flatten: expand lists when needed ✓`}]},"Maximum Width Ramp":{title:`Maximum Width Ramp`,pattern:`Monotonic Stack (Decreasing) + Right Scan`,explanation:`Build decreasing stack of indices from left. Then scan from right to find widest valid pair.`,difficulty:`Medium`,steps:[{type:`array`,data:[6,0,8,2,1,5],highlights:[],pointers:[],desc:`Find max j-i where A[i]≤A[j]`},{type:`array`,data:[6,0,8,2,1,5],highlights:[0,1],pointers:[],desc:`Decreasing stack of potential i's: [0(6), 1(0)]`},{type:`array`,data:[6,0,8,2,1,5],highlights:[1,5],pointers:[],desc:`Scan right: idx5(5)≥idx1(0) → width=5-1=4!`,vars:{max:4}},{type:`info`,visual:`Result: 4`,desc:`Answer: 4 ✓`,vars:{result:4}}]},"Min Stack":{title:`Min Stack`,pattern:`Two Stacks (Value + Min)`,explanation:`Maintain second stack/variable tracking minimum at each level.`,difficulty:`Medium`,steps:[{type:`stack`,data:[-2,0,-3],highlights:[2],desc:`push(-2), push(0), push(-3). getMin()=-3`},{type:`stack`,data:[-2,0],highlights:[0],desc:`pop(-3). getMin()=-2`},{type:`info`,visual:`Each push also records min so far. O(1) getMin!`,desc:`Min tracked at each stack level ✓`}]},"Next Greater Element II":{title:`Next Greater Element II (Circular)`,pattern:`Monotonic Stack + Circular`,explanation:`Process array twice (simulating circular). Use decreasing stack.`,difficulty:`Medium`,steps:[{type:`array`,data:[1,2,1],highlights:[],pointers:[],desc:`Circular array. Next greater for each element.`},{type:`info`,visual:`Process [1,2,1,1,2,1] (doubled)
1→2, 2→-1(no greater), 1→2(circular!)`,desc:`Double the array to handle wrap-around`},{type:`info`,visual:`Result: [2,-1,2]`,desc:`Answer: [2,-1,2] ✓`}]},"Online Stock Span":{title:`Online Stock Span`,pattern:`Monotonic Stack (Decreasing)`,explanation:`Stack stores (price, span). Pop while current ≥ top, accumulate their spans.`,difficulty:`Medium`,steps:[{type:`array`,data:[100,80,60,70,60,75,85],highlights:[],pointers:[],desc:`For each day, count consecutive days with price ≤ today`},{type:`info`,visual:`Day 6(85): pop 75(span 4), pop 80(span 1)
span = 1+4+1 = 6`,desc:`Stack accumulates spans of popped elements`},{type:`info`,visual:`Spans: [1,1,1,2,1,4,6]`,desc:`Answer includes span 6 for price 85 ✓`}]},"Remove K Digits":{title:`Remove K Digits`,pattern:`Monotonic Stack (Greedy)`,explanation:`Maintain increasing stack. Pop when current digit is smaller (removes larger leading digits).`,difficulty:`Medium`,steps:[{type:`string`,data:`1432219`,highlights:[],pointers:[],desc:`k=3. Remove 3 digits to minimize number.`},{type:`stack`,data:[`1`],highlights:[],desc:`Push 1`},{type:`stack`,data:[`1`,`4`],highlights:[],desc:`Push 4`},{type:`stack`,data:[`1`,`2`],highlights:[],desc:`3<4: pop 4 (k=2). 3<nothing, push 3. Then 2<3: pop 3(k=1). Push 2.`},{type:`info`,visual:`Stack: "1219" → remove one more → "1219"[:-1]? No, keep leftmost.
Result: "1219"`,desc:`Answer: '1219' ✓`,vars:{result:`1219`}}]},"Score of Parentheses":{title:`Score of Parentheses`,pattern:`Stack (Score Tracking)`,explanation:`() = 1, (A) = 2*A, AB = A+B. Use stack to track scores at each nesting level.`,difficulty:`Medium`,steps:[{type:`string`,data:`(()(()))`,highlights:[],pointers:[],desc:`Score: ()=1, (A)=2A, AB=A+B`},{type:`stack`,data:[0],highlights:[],desc:`Start with score 0`},{type:`info`,visual:`( → push 0
( → push 0
) → score = max(2*0, 1) = 1, add to prev
...`,desc:`Track nested scores via stack`},{type:`info`,visual:`Result: 6`,desc:`Answer: 6 ✓ (2*(1+2*1) = 6)`,vars:{result:6}}]},"Simplify Path":{title:`Simplify Path`,pattern:`Stack + Split`,explanation:`Split by '/'. Push directory names. Pop on '..'. Ignore '.' and empty.`,difficulty:`Medium`,steps:[{type:`info`,visual:`"/a/./b/../../c/"`,desc:`Simplify Unix path`},{type:`stack`,data:[`a`],highlights:[],desc:`Push 'a'`},{type:`stack`,data:[`a`],highlights:[],desc:`'.' → ignore (current dir)`},{type:`stack`,data:[`a`,`b`],highlights:[],desc:`Push 'b'`},{type:`stack`,data:[`a`],highlights:[],desc:`'..' → pop 'b' (go up)`},{type:`stack`,data:[],highlights:[],desc:`'..' → pop 'a' (go up)`},{type:`stack`,data:[`c`],highlights:[],desc:`Push 'c'. Result: '/c' ✓`,vars:{result:`/c`}}]}};function Gm(e,t){switch(e){case`lists`:return Bm[t]||null;case`strings`:return Vm[t]||null;case`dictionaries`:return Hm[t]||null;case`sorting`:return Um[t]||null;case`stacks-queues`:return Wm[t]||null;default:return null}}function Km({problems:e,topic:t,count:n}){let[r,i]=(0,w.useState)(`all`),{toggle:a,isSolved:o,count:s}=jm(),c=r===`all`?e:e.filter(e=>e.difficulty.toLowerCase()===r),l=e.filter(e=>o(e.name)).length;return(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(Mm,{solved:l,total:e.length,label:`Progress`}),(0,Y.jsx)(zm,{}),(0,Y.jsxs)(`div`,{className:`ps-filters`,children:[(0,Y.jsxs)(`button`,{className:`ps-filter ${r===`all`?`active`:``}`,onClick:()=>i(`all`),children:[`All (`,e.length,`)`]}),(0,Y.jsxs)(`button`,{className:`ps-filter ${r===`easy`?`active`:``}`,onClick:()=>i(`easy`),children:[`Easy (`,e.filter(e=>e.difficulty===`Easy`).length,`)`]}),(0,Y.jsxs)(`button`,{className:`ps-filter ${r===`medium`?`active`:``}`,onClick:()=>i(`medium`),children:[`Medium (`,e.filter(e=>e.difficulty===`Medium`).length,`)`]}),(0,Y.jsxs)(`button`,{className:`ps-filter ${r===`hard`?`active`:``}`,onClick:()=>i(`hard`),children:[`Hard (`,e.filter(e=>e.difficulty===`Hard`).length,`)`]})]}),(0,Y.jsx)(`p`,{style:{fontSize:`0.78rem`,color:`var(--text-muted)`,margin:`0.5rem 0 1rem`},children:`Click any problem to see animation + 3 solutions (Brute → Better → Optimal). Check ✓ to mark solved.`}),(0,Y.jsx)(`div`,{className:`ps-list`,children:c.map(e=>(0,Y.jsx)(km,{problem:e,animation:Gm(t,e.name),isSolved:o(e.name),onToggleSolved:()=>a(e.name)},e.name))}),(0,Y.jsx)(`style`,{children:`
        .ps-filters {
          display: flex;
          gap: 0.4rem;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
        }
        .ps-filter {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.35rem 0.8rem;
          border-radius: 16px;
          cursor: pointer;
          font-size: 0.78rem;
          font-weight: 500;
          transition: all 0.2s;
        }
        .ps-filter:hover { border-color: var(--accent-purple); color: var(--text-primary); }
        .ps-filter.active { background: rgba(124,58,237,0.12); border-color: var(--accent-purple); color: var(--accent-purple); }
        .ps-list {
          display: flex;
          flex-direction: column;
        }
      `})]})}function qm(){let[e,t]=(0,w.useState)([64,34,25,12,22,11,90]),[n,r]=(0,w.useState)([]),[i,a]=(0,w.useState)([]),[o,s]=(0,w.useState)([]),[c,l]=(0,w.useState)([]),[u,d]=(0,w.useState)([]),[f,p]=(0,w.useState)(!1),[m,h]=(0,w.useState)(1),[g,_]=(0,w.useState)(0),[v,y]=(0,w.useState)([]),[b,x]=(0,w.useState)(``),[S,C]=(0,w.useState)(`two-pointer`),ee=(0,w.useRef)(null),T=(0,w.useCallback)(e=>{let t=[],n=0,r=e.length-1;for(t.push({highlight:[],compare:[],sorted:[],pointers:[{index:n,name:`L`,color:`var(--accent-blue)`},{index:r,name:`R`,color:`var(--accent-green)`}],swap:[],desc:`Two pointers: L at start, R at end`});n<r;)t.push({highlight:[n,r],compare:[],sorted:[],pointers:[{index:n,name:`L`,color:`var(--accent-blue)`},{index:r,name:`R`,color:`var(--accent-green)`}],swap:[],desc:`Comparing arr[${n}]=${e[n]} and arr[${r}]=${e[r]}`}),n++,r--,t.push({highlight:[],compare:[],sorted:[],pointers:[{index:n,name:`L`,color:`var(--accent-blue)`},{index:r,name:`R`,color:`var(--accent-green)`}],swap:[],desc:`Move pointers inward`});return t.push({highlight:Array.from({length:e.length},(e,t)=>t),compare:[],sorted:Array.from({length:e.length},(e,t)=>t),pointers:[],swap:[],desc:`Done! Pointers have met.`}),t},[]),te=(0,w.useCallback)(e=>{let t=[];t.push({highlight:[],compare:[],sorted:[],pointers:[],swap:[],desc:`Sliding window of size 3`});for(let n=0;n<=e.length-3;n++){let r=Array.from({length:3},(e,t)=>n+t),i=r.reduce((t,n)=>t+e[n],0);t.push({highlight:r,compare:[],sorted:[],pointers:[{index:n,name:`start`,color:`var(--accent-blue)`},{index:n+3-1,name:`end`,color:`var(--accent-green)`}],swap:[],desc:`Window [${n}..${n+3-1}], sum = ${i}`})}return t.push({highlight:[],compare:[],sorted:Array.from({length:e.length},(e,t)=>t),pointers:[],swap:[],desc:`Sliding window complete!`}),t},[]),ne=(0,w.useCallback)((e,t)=>t===`sliding-window`?te(e):T(e),[T,te]);(0,w.useEffect)(()=>{y(ne(e,S)),_(0)},[e,S,ne]),(0,w.useEffect)(()=>(f&&v.length>0&&(ee.current=setInterval(()=>{_(e=>e>=v.length-1?(p(!1),e):e+1)},1e3/m)),()=>clearInterval(ee.current)),[f,m,v.length]);let re=v[g]||{highlight:[],compare:[],sorted:[],pointers:[],swap:[]};return(0,Y.jsxs)(`div`,{children:[(0,Y.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,marginBottom:`1rem`},children:[(0,Y.jsx)(`button`,{className:`mode-btn ${S===`two-pointer`?`active`:``}`,onClick:()=>C(`two-pointer`),children:`Two Pointer`}),(0,Y.jsx)(`button`,{className:`mode-btn ${S===`sliding-window`?`active`:``}`,onClick:()=>C(`sliding-window`),children:`Sliding Window`})]}),(0,Y.jsx)(_p,{isPlaying:f,onPlay:()=>p(!0),onPause:()=>p(!1),onStepForward:()=>_(Math.min(g+1,v.length-1)),onStepBackward:()=>_(Math.max(g-1,0)),onReset:()=>{_(0),p(!1)},speed:m,onSpeedChange:h,currentStep:g,totalSteps:v.length,customInput:b,onCustomInputChange:x,onCustomInputSubmit:()=>{let e=b.split(`,`).map(Number).filter(e=>!isNaN(e));e.length>0&&(t(e),_(0),p(!1))},inputPlaceholder:`Enter numbers (comma-separated)`}),(0,Y.jsxs)(`div`,{className:`visualizer-container`,children:[(0,Y.jsx)(vp,{array:e,highlightIndices:re.highlight,compareIndices:re.compare,sortedIndices:re.sorted,pointers:re.pointers,swapIndices:re.swap}),(0,Y.jsx)(`div`,{style:{textAlign:`center`,fontFamily:`var(--font-mono)`,fontSize:`0.85rem`,color:`var(--accent-cyan)`,marginTop:`1rem`},children:re.desc})]})]})}function Jm(){return(0,Y.jsxs)(Q.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4},children:[(0,Y.jsx)(`h1`,{children:`Lists (Arrays)`}),(0,Y.jsx)(`p`,{style:{fontSize:`1.1rem`,color:`var(--text-secondary)`},children:`The most fundamental data structure in programming. Lists store ordered collections of items — and they show up in almost every coding interview.`}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`📖 Theory`})}),(0,Y.jsx)(`h3`,{children:`What is a List?`}),(0,Y.jsxs)(`p`,{children:[`A list (or array) is like a row of numbered boxes. Each box holds one item, and you can find any box instantly by its number (called an "index"). In Python, lists are written with square brackets: `,(0,Y.jsx)(`code`,{children:`[1, 2, 3]`}),`.`]}),(0,Y.jsx)(`h3`,{children:`Why Lists Matter in Interviews`}),(0,Y.jsx)(`p`,{children:`Lists are the #1 most common data structure in coding interviews. You'll use them in almost every problem — whether you're searching, sorting, or tracking data. Most interview problems that involve sequences of numbers, characters, or objects will use lists.`}),(0,Y.jsx)(`h3`,{children:`Key Operations & Time Complexity`}),(0,Y.jsx)(`p`,{children:`Time complexity tells you how fast an operation is as your data grows. Think of it as a speed rating:`}),(0,Y.jsxs)(`ul`,{style:{color:`var(--text-secondary)`,paddingLeft:`1.5rem`,lineHeight:`2`},children:[(0,Y.jsxs)(`li`,{children:[(0,Y.jsx)(`strong`,{children:`Access by index`}),` — `,(0,Y.jsx)(`code`,{children:`O(1)`}),` — instant, like looking at box #5 directly`]}),(0,Y.jsxs)(`li`,{children:[(0,Y.jsx)(`strong`,{children:`Append to end`}),` — `,(0,Y.jsx)(`code`,{children:`O(1)`}),` — just add a new box at the end`]}),(0,Y.jsxs)(`li`,{children:[(0,Y.jsx)(`strong`,{children:`Insert/delete at start or middle`}),` — `,(0,Y.jsx)(`code`,{children:`O(n)`}),` — you have to shift all other boxes over`]}),(0,Y.jsxs)(`li`,{children:[(0,Y.jsx)(`strong`,{children:`Search for a value`}),` — `,(0,Y.jsx)(`code`,{children:`O(n)`}),` — worst case, check every box`]}),(0,Y.jsxs)(`li`,{children:[(0,Y.jsx)(`strong`,{children:`Sort`}),` — `,(0,Y.jsx)(`code`,{children:`O(n log n)`}),` — Python's built-in sort is very efficient`]})]}),(0,Y.jsx)(`h3`,{children:`Common Patterns`}),(0,Y.jsxs)(`p`,{children:[(0,Y.jsx)(`strong`,{children:`Two Pointers:`}),` Use two variables (often called "left" and "right") that move toward each other or in the same direction. Great for problems involving pairs or sorted arrays.`]}),(0,Y.jsxs)(`p`,{children:[(0,Y.jsx)(`strong`,{children:`Sliding Window:`}),` Keep a "window" of elements and slide it across the array. Perfect for problems asking about subarrays of a certain size or condition.`]}),(0,Y.jsxs)(`p`,{children:[(0,Y.jsx)(`strong`,{children:`Prefix Sum:`}),` Build a running total array so you can quickly find the sum of any subarray. Turns O(n) subarray sum queries into O(1).`]})]}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`📋 Cheat Sheet`})}),(0,Y.jsxs)(`div`,{className:`cheat-grid`,children:[(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`arr.append(x)`}),(0,Y.jsx)(`p`,{children:`Add x to the end of the list`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`arr.pop()`}),(0,Y.jsx)(`p`,{children:`Remove and return the last item`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`arr.pop(i)`}),(0,Y.jsx)(`p`,{children:`Remove and return item at index i`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`arr.insert(i, x)`}),(0,Y.jsx)(`p`,{children:`Insert x at position i (shifts others right)`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`arr.remove(x)`}),(0,Y.jsx)(`p`,{children:`Remove first occurrence of x`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`arr.sort()`}),(0,Y.jsx)(`p`,{children:`Sort the list in-place (modifies original)`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`sorted(arr)`}),(0,Y.jsx)(`p`,{children:`Return a new sorted list (original unchanged)`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`arr[::-1]`}),(0,Y.jsx)(`p`,{children:`Reverse the list using slicing`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`arr[start:end]`}),(0,Y.jsx)(`p`,{children:`Get a slice from start to end-1`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`len(arr)`}),(0,Y.jsx)(`p`,{children:`Get the number of items`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`[x for x in arr if x > 0]`}),(0,Y.jsx)(`p`,{children:`List comprehension — filter and transform`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`enumerate(arr)`}),(0,Y.jsx)(`p`,{children:`Loop with both index and value`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`zip(arr1, arr2)`}),(0,Y.jsx)(`p`,{children:`Pair up items from two lists`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`arr.index(x)`}),(0,Y.jsx)(`p`,{children:`Find index of first occurrence of x`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`x in arr`}),(0,Y.jsx)(`p`,{children:`Check if x exists in the list — O(n)`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`arr.extend(other)`}),(0,Y.jsx)(`p`,{children:`Add all items from another list to the end`})]})]})]}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`💻 Code Examples`})}),(0,Y.jsx)(gm,{title:`Two Pointer Pattern — Finding a pair that sums to target`,code:`def two_sum_sorted(arr, target):
    """Find two numbers in a sorted array that add up to target."""
    left, right = 0, len(arr) - 1

    while left < right:
        current_sum = arr[left] + arr[right]

        if current_sum == target:
            return [left, right]  # Found it!
        elif current_sum < target:
            left += 1   # Need bigger sum, move left pointer right
        else:
            right -= 1  # Need smaller sum, move right pointer left

    return []  # No pair found

# Example
print(two_sum_sorted([1, 3, 5, 7, 9], 8))  # [1, 3] → arr[1]+arr[3] = 3+5 = 8`}),(0,Y.jsx)(gm,{title:`Sliding Window — Maximum sum subarray of size k`,code:`def max_sum_subarray(arr, k):
    """Find the maximum sum of any k consecutive elements."""
    # First window
    window_sum = sum(arr[:k])
    max_sum = window_sum

    # Slide the window: add new element, remove old element
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, window_sum)

    return max_sum

# Example
print(max_sum_subarray([2, 1, 5, 1, 3, 2], 3))  # 9 (subarray [5, 1, 3])`}),(0,Y.jsx)(gm,{title:`Prefix Sum — Range sum queries in O(1)`,code:`def build_prefix_sum(arr):
    """Build prefix sum array for O(1) range sum queries."""
    prefix = [0] * (len(arr) + 1)
    for i in range(len(arr)):
        prefix[i + 1] = prefix[i] + arr[i]
    return prefix

def range_sum(prefix, left, right):
    """Get sum of arr[left..right] in O(1)."""
    return prefix[right + 1] - prefix[left]

# Example
arr = [3, 1, 4, 1, 5, 9]
prefix = build_prefix_sum(arr)
print(range_sum(prefix, 1, 4))  # 11 (sum of [1, 4, 1, 5])`})]}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`🎬 Visualizer`})}),(0,Y.jsx)(`p`,{children:`Watch how two-pointer and sliding window techniques work on arrays. Use custom input to try your own data!`}),(0,Y.jsx)(qm,{})]}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`💡 Interview Tips`})}),(0,Y.jsxs)(`div`,{className:`tip-card`,children:[(0,Y.jsx)(`h4`,{children:`Two Pointer Pattern`}),(0,Y.jsx)(`p`,{children:`Use when the array is sorted and you need to find pairs, triplets, or subarrays. Start with one pointer at each end and move them based on your condition. This turns O(n²) brute force into O(n).`})]}),(0,Y.jsxs)(`div`,{className:`tip-card`,children:[(0,Y.jsx)(`h4`,{children:`Sliding Window Pattern`}),(0,Y.jsx)(`p`,{children:`Use when you need the best/longest/shortest subarray meeting some condition. Expand the window by moving the right pointer, shrink it by moving the left pointer. Keeps track of the "current state" efficiently.`})]}),(0,Y.jsxs)(`div`,{className:`tip-card`,children:[(0,Y.jsx)(`h4`,{children:`In-place Modification`}),(0,Y.jsx)(`p`,{children:`Many interview problems ask you to modify an array "in-place" (without extra space). Use swap operations and careful pointer management. The "remove duplicates from sorted array" pattern is a classic example.`})]}),(0,Y.jsxs)(`div`,{className:`tip-card`,children:[(0,Y.jsx)(`h4`,{children:`Common Mistakes`}),(0,Y.jsx)(`p`,{children:`Off-by-one errors with indices. Forgetting that Python slicing is exclusive on the right (arr[0:3] gives indices 0,1,2). Modifying a list while iterating over it (use a copy or iterate backwards).`})]}),(0,Y.jsxs)(`div`,{className:`tip-card`,children:[(0,Y.jsx)(`h4`,{children:`When to Choose Lists Over Other Structures`}),(0,Y.jsx)(`p`,{children:`Use a list when you need ordered data, index-based access, or when the problem involves sequences/subarrays. If you need fast lookups by value, consider a set or dictionary instead.`})]})]}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`🎯 LeetCode Problems (55)`})}),(0,Y.jsx)(Km,{problems:Nm,topic:`lists`,count:55})]}),(0,Y.jsx)(`style`,{children:`
        .mode-btn {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.5rem 1rem;
          border-radius: var(--radius);
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 500;
          transition: var(--transition);
        }
        .mode-btn:hover { border-color: var(--accent-blue); color: var(--text-primary); }
        .mode-btn.active { background: rgba(88,166,255,0.1); border-color: var(--accent-blue); color: var(--accent-blue); }
      `})]})}function Ym(){let[e,t]=(0,w.useState)(`abcabcbb`),[n,r]=(0,w.useState)([]),[i,a]=(0,w.useState)([]),[o,s]=(0,w.useState)(!1),[c,l]=(0,w.useState)(1),[u,d]=(0,w.useState)(0),[f,p]=(0,w.useState)([]),[m,h]=(0,w.useState)(``),[g,_]=(0,w.useState)(`palindrome`),v=(0,w.useRef)(null),y=(0,w.useCallback)(e=>{let t=[],n=0,r=e.length-1;for(t.push({highlight:[],pointers:[{index:n,name:`L`,color:`var(--accent-blue)`},{index:r,name:`R`,color:`var(--accent-green)`}],desc:`Check if string is a palindrome: compare from both ends`});n<r;){if(e[n]===e[r])t.push({highlight:[n,r],pointers:[{index:n,name:`L`,color:`var(--accent-blue)`},{index:r,name:`R`,color:`var(--accent-green)`}],desc:`'${e[n]}' == '${e[r]}' ✓ Match!`});else{t.push({highlight:[n,r],pointers:[{index:n,name:`L`,color:`var(--accent-red)`},{index:r,name:`R`,color:`var(--accent-red)`}],desc:`'${e[n]}' != '${e[r]}' ✗ Not a palindrome!`});break}n++,r--}return n>=r&&t.push({highlight:Array.from({length:e.length},(e,t)=>t),pointers:[],desc:`It IS a palindrome! All characters matched.`}),t},[]),b=(0,w.useCallback)(e=>{let t=[],n=new Set,r=0,i=0,a=0;t.push({highlight:[],pointers:[],desc:`Find longest substring without repeating characters`});for(let o=0;o<e.length;o++){for(;n.has(e[o]);)n.delete(e[r]),r++;n.add(e[o]);let s=Array.from({length:o-r+1},(e,t)=>r+t);o-r+1>i&&(i=o-r+1,a=r),t.push({highlight:s,pointers:[{index:r,name:`L`,color:`var(--accent-blue)`},{index:o,name:`R`,color:`var(--accent-green)`}],desc:`Window: "${e.slice(r,o+1)}" (length ${o-r+1}), max so far: ${i}`})}let o=Array.from({length:i},(e,t)=>a+t);return t.push({highlight:o,pointers:[],desc:`Done! Longest substring: "${e.slice(a,a+i)}" (length ${i})`}),t},[]),x=(0,w.useCallback)((e,t)=>t===`sliding-window`?b(e):y(e),[y,b]);(0,w.useEffect)(()=>{p(x(e,g)),d(0)},[e,g,x]),(0,w.useEffect)(()=>(o&&f.length>0&&(v.current=setInterval(()=>{d(e=>e>=f.length-1?(s(!1),e):e+1)},1e3/c)),()=>clearInterval(v.current)),[o,c,f.length]);let S=f[u]||{highlight:[],pointers:[],desc:``},C=e.split(``);return(0,Y.jsxs)(`div`,{children:[(0,Y.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,marginBottom:`1rem`},children:[(0,Y.jsx)(`button`,{className:`mode-btn ${g===`palindrome`?`active`:``}`,onClick:()=>_(`palindrome`),children:`Palindrome Check`}),(0,Y.jsx)(`button`,{className:`mode-btn ${g===`sliding-window`?`active`:``}`,onClick:()=>_(`sliding-window`),children:`Longest Unique Substring`})]}),(0,Y.jsx)(_p,{isPlaying:o,onPlay:()=>s(!0),onPause:()=>s(!1),onStepForward:()=>d(Math.min(u+1,f.length-1)),onStepBackward:()=>d(Math.max(u-1,0)),onReset:()=>{d(0),s(!1)},speed:c,onSpeedChange:l,currentStep:u,totalSteps:f.length,customInput:m,onCustomInputChange:h,onCustomInputSubmit:()=>{m.trim()&&(t(m.trim()),d(0),s(!1))},inputPlaceholder:`Enter a string`}),(0,Y.jsxs)(`div`,{className:`visualizer-container`,children:[(0,Y.jsx)(vp,{array:C,highlightIndices:S.highlight,pointers:S.pointers}),(0,Y.jsx)(`div`,{style:{textAlign:`center`,fontFamily:`var(--font-mono)`,fontSize:`0.85rem`,color:`var(--accent-cyan)`,marginTop:`1rem`},children:S.desc})]})]})}function Xm(){return(0,Y.jsxs)(Q.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4},children:[(0,Y.jsx)(`h1`,{children:`Strings`}),(0,Y.jsx)(`p`,{style:{fontSize:`1.1rem`,color:`var(--text-secondary)`},children:`Strings are sequences of characters. They look simple, but string problems in interviews test pattern matching, two-pointer techniques, and sliding window — some of the trickiest patterns to master.`}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`📖 Theory`})}),(0,Y.jsx)(`h3`,{children:`What is a String?`}),(0,Y.jsxs)(`p`,{children:[`A string is a sequence of characters — letters, numbers, symbols, or spaces. In Python, strings are `,(0,Y.jsx)(`strong`,{children:`immutable`}),`, meaning once you create one, you can't change individual characters. You have to create a new string instead.`]}),(0,Y.jsx)(`h3`,{children:`Why Strings Matter in Interviews`}),(0,Y.jsx)(`p`,{children:`String problems test your ability to work with sequences efficiently. They combine array techniques (two pointers, sliding window) with character-specific tricks (ASCII values, frequency counting). About 25% of interview questions involve strings.`}),(0,Y.jsx)(`h3`,{children:`Key Facts About Python Strings`}),(0,Y.jsxs)(`ul`,{style:{color:`var(--text-secondary)`,paddingLeft:`1.5rem`,lineHeight:`2`},children:[(0,Y.jsxs)(`li`,{children:[(0,Y.jsx)(`strong`,{children:`Immutable`}),` — you can't do `,(0,Y.jsx)(`code`,{children:`s[0] = 'x'`}),`. Convert to list first: `,(0,Y.jsx)(`code`,{children:`list(s)`})]}),(0,Y.jsxs)(`li`,{children:[(0,Y.jsx)(`strong`,{children:`Indexing`}),` — `,(0,Y.jsx)(`code`,{children:`s[0]`}),` is first char, `,(0,Y.jsx)(`code`,{children:`s[-1]`}),` is last char`]}),(0,Y.jsxs)(`li`,{children:[(0,Y.jsx)(`strong`,{children:`Slicing`}),` — `,(0,Y.jsx)(`code`,{children:`s[1:4]`}),` gives characters at index 1, 2, 3`]}),(0,Y.jsxs)(`li`,{children:[(0,Y.jsx)(`strong`,{children:`Concatenation`}),` — `,(0,Y.jsx)(`code`,{children:`s1 + s2`}),` creates a new string (O(n) each time!)`]}),(0,Y.jsxs)(`li`,{children:[(0,Y.jsx)(`strong`,{children:`Comparison`}),` — strings compare character by character (lexicographic order)`]})]}),(0,Y.jsx)(`h3`,{children:`Time Complexity Traps`}),(0,Y.jsxs)(`p`,{children:[`Building strings by concatenation (`,(0,Y.jsx)(`code`,{children:`s += char`}),`) in a loop is O(n²) because each concatenation creates a new string. Instead, collect characters in a list and `,(0,Y.jsx)(`code`,{children:`"".join(list)`}),` at the end — this is O(n).`]})]}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`📋 Cheat Sheet`})}),(0,Y.jsxs)(`div`,{className:`cheat-grid`,children:[(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`s.split(sep)`}),(0,Y.jsx)(`p`,{children:`Split string into list by separator`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`sep.join(list)`}),(0,Y.jsx)(`p`,{children:`Join list items into one string with separator`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`s.strip()`}),(0,Y.jsx)(`p`,{children:`Remove leading/trailing whitespace`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`s.lower() / s.upper()`}),(0,Y.jsx)(`p`,{children:`Convert to lowercase / uppercase`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`s.replace(old, new)`}),(0,Y.jsx)(`p`,{children:`Replace all occurrences of old with new`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`s.find(sub)`}),(0,Y.jsx)(`p`,{children:`Find index of substring (-1 if not found)`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`s.startswith(prefix)`}),(0,Y.jsx)(`p`,{children:`Check if string starts with prefix`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`s.isalpha() / s.isdigit()`}),(0,Y.jsx)(`p`,{children:`Check if all chars are letters / digits`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`s.isalnum()`}),(0,Y.jsx)(`p`,{children:`Check if all characters are alphanumeric`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`s[::-1]`}),(0,Y.jsx)(`p`,{children:`Reverse the string`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`ord(c) / chr(n)`}),(0,Y.jsx)(`p`,{children:`Character ↔ ASCII number conversion`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`f"text {var}"`}),(0,Y.jsx)(`p`,{children:`F-string: embed variables in strings`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`s.count(sub)`}),(0,Y.jsx)(`p`,{children:`Count occurrences of substring`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`s.zfill(width)`}),(0,Y.jsx)(`p`,{children:`Pad with zeros on the left`})]})]})]}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`💻 Code Examples`})}),(0,Y.jsx)(gm,{title:`Palindrome Check — Two Pointer`,code:`def is_palindrome(s):
    """Check if a string reads the same forwards and backwards."""
    # Clean the string: only keep letters/numbers, lowercase
    cleaned = ''.join(c.lower() for c in s if c.isalnum())

    left, right = 0, len(cleaned) - 1
    while left < right:
        if cleaned[left] != cleaned[right]:
            return False
        left += 1
        right -= 1
    return True

# Example
print(is_palindrome("A man, a plan, a canal: Panama"))  # True`}),(0,Y.jsx)(gm,{title:`Longest Substring Without Repeating Characters`,code:`def longest_unique_substring(s):
    """Find length of longest substring with all unique characters."""
    char_set = set()
    left = 0
    max_length = 0

    for right in range(len(s)):
        # Shrink window until no duplicate
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1

        char_set.add(s[right])
        max_length = max(max_length, right - left + 1)

    return max_length

# Example
print(longest_unique_substring("abcabcbb"))  # 3 ("abc")`}),(0,Y.jsx)(gm,{title:`Anagram Check using Frequency Count`,code:`from collections import Counter

def is_anagram(s, t):
    """Check if t is an anagram of s (same characters, different order)."""
    return Counter(s) == Counter(t)

# Or manually:
def is_anagram_manual(s, t):
    if len(s) != len(t):
        return False
    count = [0] * 26  # 26 lowercase letters
    for c in s:
        count[ord(c) - ord('a')] += 1
    for c in t:
        count[ord(c) - ord('a')] -= 1
    return all(x == 0 for x in count)

print(is_anagram("listen", "silent"))  # True`})]}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`🎬 Visualizer`})}),(0,Y.jsx)(`p`,{children:`Watch palindrome checking and sliding window techniques work on strings character by character!`}),(0,Y.jsx)(Ym,{})]}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`💡 Interview Tips`})}),(0,Y.jsxs)(`div`,{className:`tip-card`,children:[(0,Y.jsx)(`h4`,{children:`String Building — Avoid += in Loops`}),(0,Y.jsxs)(`p`,{children:[`Never build strings with `,(0,Y.jsx)(`code`,{children:`s += char`}),` in a loop. Each concatenation creates a brand new string object. Use a list to collect characters, then `,(0,Y.jsx)(`code`,{children:`"".join(chars)`}),` at the end. This changes O(n²) to O(n).`]})]}),(0,Y.jsxs)(`div`,{className:`tip-card`,children:[(0,Y.jsx)(`h4`,{children:`Sliding Window for Substrings`}),(0,Y.jsx)(`p`,{children:`When looking for substrings with specific properties (all unique chars, containing all required chars, etc.), use a sliding window with a hash map/set to track the current window's contents.`})]}),(0,Y.jsxs)(`div`,{className:`tip-card`,children:[(0,Y.jsx)(`h4`,{children:`Frequency Arrays vs Hash Maps`}),(0,Y.jsxs)(`p`,{children:[`If you only deal with lowercase letters, use a fixed array of size 26 instead of a hash map. It's faster and shows the interviewer you understand the constraint. `,(0,Y.jsx)(`code`,{children:`count[ord(c) - ord('a')]`})]})]}),(0,Y.jsxs)(`div`,{className:`tip-card`,children:[(0,Y.jsx)(`h4`,{children:`Common Mistakes`}),(0,Y.jsxs)(`p`,{children:[`Forgetting strings are immutable in Python. Not handling edge cases (empty string, single character). Using `,(0,Y.jsx)(`code`,{children:`==`}),` correctly vs `,(0,Y.jsx)(`code`,{children:`is`}),` for string comparison. Not considering uppercase vs lowercase.`]})]})]}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`🎯 LeetCode Problems (47)`})}),(0,Y.jsx)(Km,{problems:Pm,topic:`strings`,count:47})]}),(0,Y.jsx)(`style`,{children:`
        .mode-btn {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.5rem 1rem;
          border-radius: var(--radius);
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 500;
          transition: var(--transition);
        }
        .mode-btn:hover { border-color: var(--accent-blue); color: var(--text-primary); }
        .mode-btn.active { background: rgba(88,166,255,0.1); border-color: var(--accent-blue); color: var(--accent-blue); }
      `})]})}function Zm({buckets:e,highlightBucket:t,operation:n,mode:r=`bucket`}){return r===`simple`?(0,Y.jsxs)(`div`,{className:`hashmap-visualizer`,children:[(0,Y.jsx)(`div`,{className:`simple-map`,children:(0,Y.jsx)(_d,{children:e.map((e,n)=>(0,Y.jsxs)(Q.div,{className:`map-entry ${t===n?`highlighted`:``}`,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},children:[(0,Y.jsx)(`span`,{className:`entry-key`,children:e.key}),(0,Y.jsx)(`span`,{className:`entry-arrow`,children:`→`}),(0,Y.jsx)(`span`,{className:`entry-value`,children:e.value})]},e.key||n))})}),n&&(0,Y.jsx)(Q.div,{className:`hash-operation`,initial:{opacity:0},animate:{opacity:1},children:n},n),(0,Y.jsx)(`style`,{children:`
          .hashmap-visualizer {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2rem;
          }

          .simple-map {
            display: flex;
            flex-direction: column;
            gap: 6px;
            min-width: 250px;
          }

          .map-entry {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            background: var(--bg-tertiary);
            border: 1px solid var(--border-color);
            border-radius: 6px;
            padding: 0.6rem 1rem;
            font-family: var(--font-mono);
            font-size: 0.85rem;
            transition: var(--transition);
          }

          .map-entry.highlighted {
            border-color: var(--accent-blue);
            background: rgba(88, 166, 255, 0.1);
          }

          .entry-key {
            color: var(--accent-cyan);
            font-weight: 600;
            min-width: 60px;
          }

          .entry-arrow {
            color: var(--text-muted);
          }

          .entry-value {
            color: var(--accent-green);
          }

          .hash-operation {
            margin-top: 1rem;
            font-family: var(--font-mono);
            font-size: 0.8rem;
            color: var(--accent-orange);
            background: rgba(210, 153, 34, 0.1);
            padding: 0.4rem 1rem;
            border-radius: var(--radius);
          }
        `})]}):(0,Y.jsxs)(`div`,{className:`hashmap-visualizer`,children:[(0,Y.jsx)(`div`,{className:`bucket-view`,children:e.map((e,n)=>(0,Y.jsxs)(`div`,{className:`bucket-row ${t===n?`bucket-active`:``}`,children:[(0,Y.jsx)(`div`,{className:`bucket-index`,children:n}),(0,Y.jsxs)(`div`,{className:`bucket-slot`,children:[(0,Y.jsx)(_d,{children:e.items.map((t,n)=>(0,Y.jsxs)(Q.div,{className:`bucket-item`,initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},children:[(0,Y.jsx)(`span`,{className:`bi-key`,children:t.key}),(0,Y.jsx)(`span`,{className:`bi-sep`,children:`:`}),(0,Y.jsx)(`span`,{className:`bi-val`,children:t.value}),n<e.items.length-1&&(0,Y.jsx)(`span`,{className:`bi-chain`,children:`→`})]},t.key))}),e.items.length===0&&(0,Y.jsx)(`span`,{className:`bucket-empty`,children:`∅`})]})]},n))}),n&&(0,Y.jsx)(Q.div,{className:`hash-operation`,initial:{opacity:0},animate:{opacity:1},children:n},n),(0,Y.jsx)(`style`,{children:`
        .hashmap-visualizer {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
        }

        .bucket-view {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 350px;
        }

        .bucket-row {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.3rem 0;
          border-radius: 4px;
          transition: var(--transition);
        }

        .bucket-row.bucket-active {
          background: rgba(88, 166, 255, 0.05);
        }

        .bucket-index {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          flex-shrink: 0;
        }

        .bucket-active .bucket-index {
          border-color: var(--accent-blue);
          color: var(--accent-blue);
        }

        .bucket-slot {
          display: flex;
          align-items: center;
          gap: 4px;
          flex: 1;
          min-height: 34px;
          border: 1px dashed var(--border-color);
          border-radius: 4px;
          padding: 0.3rem 0.6rem;
        }

        .bucket-active .bucket-slot {
          border-color: var(--accent-blue);
          border-style: solid;
        }

        .bucket-item {
          display: flex;
          align-items: center;
          gap: 3px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 0.3rem 0.6rem;
          font-family: var(--font-mono);
          font-size: 0.8rem;
        }

        .bi-key { color: var(--accent-cyan); font-weight: 600; }
        .bi-sep { color: var(--text-muted); }
        .bi-val { color: var(--accent-green); }
        .bi-chain { color: var(--accent-orange); margin: 0 4px; }

        .bucket-empty {
          color: var(--text-muted);
          font-size: 0.8rem;
        }

        .hash-operation {
          margin-top: 1rem;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent-orange);
          background: rgba(210, 153, 34, 0.1);
          padding: 0.4rem 1rem;
          border-radius: var(--radius);
        }
      `})]})}function Qm(){let[e,t]=(0,w.useState)(!1),[n,r]=(0,w.useState)(1),[i,a]=(0,w.useState)(0),[o,s]=(0,w.useState)([]),[c,l]=(0,w.useState)(``),[u,d]=(0,w.useState)(`bucket`),f=(0,w.useRef)(null),p=e=>{let t=0,n=String(e);for(let e=0;e<n.length;e++)t=(t*31+n.charCodeAt(e))%7;return t},m=(0,w.useCallback)(()=>{let e=[{key:`apple`,value:5},{key:`banana`,value:3},{key:`cherry`,value:8},{key:`date`,value:2},{key:`grape`,value:7}],t=[],n=Array.from({length:7},()=>({items:[]}));t.push({buckets:JSON.parse(JSON.stringify(n)),highlight:-1,operation:`Empty hash table with 7 buckets`});for(let r of e){let e=p(r.key);n[e].items.push(r),t.push({buckets:JSON.parse(JSON.stringify(n)),highlight:e,operation:`hash("${r.key}") = ${e} → Insert {${r.key}: ${r.value}} into bucket ${e}`})}return t.push({buckets:JSON.parse(JSON.stringify(n)),highlight:-1,operation:`All items inserted! Notice how collisions chain in the same bucket.`}),t},[]),h=(0,w.useCallback)(()=>{let e=[],t=[],n=[{key:`name`,value:`"Alice"`},{key:`age`,value:`25`},{key:`city`,value:`"NYC"`},{key:`job`,value:`"Engineer"`}];e.push({entries:[],highlight:-1,operation:`Empty dictionary: {}`});for(let r=0;r<n.length;r++)t.push(n[r]),e.push({entries:[...t],highlight:r,operation:`d["${n[r].key}"] = ${n[r].value}`});e.push({entries:[...t],highlight:1,operation:`d["age"] → 25 (O(1) lookup!)`});let r=t.filter(e=>e.key!==`city`);return e.push({entries:r,highlight:-1,operation:`del d["city"] — removed!`}),e},[]);(0,w.useEffect)(()=>{s(u===`bucket`?m():h()),a(0)},[u,m,h]),(0,w.useEffect)(()=>(e&&o.length>0&&(f.current=setInterval(()=>{a(e=>e>=o.length-1?(t(!1),e):e+1)},1200/n)),()=>clearInterval(f.current)),[e,n,o.length]);let g=o[i]||{};return(0,Y.jsxs)(`div`,{children:[(0,Y.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,marginBottom:`1rem`},children:[(0,Y.jsx)(`button`,{className:`mode-btn ${u===`bucket`?`active`:``}`,onClick:()=>d(`bucket`),children:`Hash Buckets (Internal)`}),(0,Y.jsx)(`button`,{className:`mode-btn ${u===`simple`?`active`:``}`,onClick:()=>d(`simple`),children:`Key-Value View`})]}),(0,Y.jsx)(_p,{isPlaying:e,onPlay:()=>t(!0),onPause:()=>t(!1),onStepForward:()=>a(Math.min(i+1,o.length-1)),onStepBackward:()=>a(Math.max(i-1,0)),onReset:()=>{a(0),t(!1)},speed:n,onSpeedChange:r,currentStep:i,totalSteps:o.length,customInput:c,onCustomInputChange:l,onCustomInputSubmit:()=>{a(0),t(!1)},inputPlaceholder:`Enter key:value pairs (e.g. a:1,b:2,c:3)`}),(0,Y.jsx)(`div`,{className:`visualizer-container`,children:u===`bucket`?(0,Y.jsx)(Zm,{buckets:g.buckets||Array.from({length:7},()=>({items:[]})),highlightBucket:g.highlight,operation:g.operation,mode:`bucket`}):(0,Y.jsx)(Zm,{buckets:g.entries||[],highlightBucket:g.highlight,operation:g.operation,mode:`simple`})})]})}function $m(){return(0,Y.jsxs)(Q.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4},children:[(0,Y.jsx)(`h1`,{children:`Dictionaries (Hash Maps)`}),(0,Y.jsx)(`p`,{style:{fontSize:`1.1rem`,color:`var(--text-secondary)`},children:`Dictionaries give you instant lookups. They map keys to values, and finding any value takes O(1) time on average — making them the go-to tool for counting, grouping, and caching.`}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`📖 Theory`})}),(0,Y.jsx)(`h3`,{children:`What is a Dictionary?`}),(0,Y.jsxs)(`p`,{children:[`A dictionary (also called a hash map or hash table) stores key-value pairs. Think of it like a real dictionary: you look up a word (the key) and get its definition (the value). In Python, it's written as `,(0,Y.jsx)(`code`,{children:`{"apple": 5, "banana": 3}`}),`.`]}),(0,Y.jsx)(`h3`,{children:`How Hashing Works (Simple Explanation)`}),(0,Y.jsx)(`p`,{children:`When you add a key, Python runs it through a "hash function" — a formula that converts the key into a number. That number tells Python which "bucket" (storage slot) to put the value in. When you look up that key later, Python runs the same formula, jumps straight to the right bucket, and returns the value. That's why lookups are so fast!`}),(0,Y.jsx)(`h3`,{children:`Collisions`}),(0,Y.jsx)(`p`,{children:`Sometimes two different keys hash to the same bucket number. This is called a "collision." Python handles this by chaining — storing multiple items in the same bucket as a linked list. This is rare with a good hash function, but it's why worst-case lookup is O(n) instead of O(1).`}),(0,Y.jsx)(`h3`,{children:`Time Complexity`}),(0,Y.jsxs)(`ul`,{style:{color:`var(--text-secondary)`,paddingLeft:`1.5rem`,lineHeight:`2`},children:[(0,Y.jsxs)(`li`,{children:[(0,Y.jsx)(`strong`,{children:`Insert / Lookup / Delete`}),` — `,(0,Y.jsx)(`code`,{children:`O(1)`}),` average — near-instant!`]}),(0,Y.jsxs)(`li`,{children:[(0,Y.jsx)(`strong`,{children:`Iterate all items`}),` — `,(0,Y.jsx)(`code`,{children:`O(n)`}),` — must visit every pair`]}),(0,Y.jsxs)(`li`,{children:[(0,Y.jsx)(`strong`,{children:`Space`}),` — `,(0,Y.jsx)(`code`,{children:`O(n)`}),` — stores all key-value pairs`]})]})]}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`📋 Cheat Sheet`})}),(0,Y.jsxs)(`div`,{className:`cheat-grid`,children:[(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`d[key] = value`}),(0,Y.jsx)(`p`,{children:`Set a key-value pair`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`d.get(key, default)`}),(0,Y.jsx)(`p`,{children:`Get value (returns default if key missing, instead of error)`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`d.keys()`}),(0,Y.jsx)(`p`,{children:`Get all keys`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`d.values()`}),(0,Y.jsx)(`p`,{children:`Get all values`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`d.items()`}),(0,Y.jsx)(`p`,{children:`Get all (key, value) pairs — great for looping`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`key in d`}),(0,Y.jsx)(`p`,{children:`Check if key exists — O(1)`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`del d[key]`}),(0,Y.jsx)(`p`,{children:`Remove a key-value pair`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`d.setdefault(key, val)`}),(0,Y.jsx)(`p`,{children:`Get value if exists, else set to val and return it`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`collections.Counter(list)`}),(0,Y.jsx)(`p`,{children:`Count occurrences of each item`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`collections.defaultdict(int)`}),(0,Y.jsx)(`p`,{children:`Dict that auto-creates missing keys with default value`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`d.pop(key)`}),(0,Y.jsx)(`p`,{children:`Remove and return value for key`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`d.update(other)`}),(0,Y.jsx)(`p`,{children:`Merge another dict into this one`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`{k: v for k, v in ...}`}),(0,Y.jsx)(`p`,{children:`Dictionary comprehension`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`len(d)`}),(0,Y.jsx)(`p`,{children:`Number of key-value pairs`})]})]})]}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`💻 Code Examples`})}),(0,Y.jsx)(gm,{title:`Two Sum — Classic Hash Map Pattern`,code:`def two_sum(nums, target):
    """Find indices of two numbers that add up to target."""
    seen = {}  # value → index

    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i

    return []

# Example: target=9, nums=[2, 7, 11, 15]
# Step 1: seen={2:0}, looking for 7 → not found
# Step 2: seen={2:0, 7:1}, looking for 2 → found at index 0!
print(two_sum([2, 7, 11, 15], 9))  # [0, 1]`}),(0,Y.jsx)(gm,{title:`Group Anagrams — Sorting as Hash Key`,code:`from collections import defaultdict

def group_anagrams(strs):
    """Group words that are anagrams of each other."""
    groups = defaultdict(list)

    for word in strs:
        # Sort the word to create a "signature"
        # All anagrams have the same sorted form
        key = tuple(sorted(word))
        groups[key].append(word)

    return list(groups.values())

# Example
words = ["eat", "tea", "tan", "ate", "nat", "bat"]
print(group_anagrams(words))
# [["eat","tea","ate"], ["tan","nat"], ["bat"]]`}),(0,Y.jsx)(gm,{title:`Frequency Counting with Counter`,code:`from collections import Counter

def top_k_frequent(nums, k):
    """Find the k most frequent elements."""
    count = Counter(nums)  # {element: frequency}
    # most_common returns [(element, count), ...] sorted by frequency
    return [elem for elem, freq in count.most_common(k)]

# Example
print(top_k_frequent([1,1,1,2,2,3], 2))  # [1, 2]`})]}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`🎬 Visualizer`})}),(0,Y.jsx)(`p`,{children:`Watch how hash maps work internally! See hashing, bucket placement, and collisions in real-time.`}),(0,Y.jsx)(Qm,{})]}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`💡 Interview Tips`})}),(0,Y.jsxs)(`div`,{className:`tip-card`,children:[(0,Y.jsx)(`h4`,{children:`The "Complement" Pattern`}),(0,Y.jsx)(`p`,{children:`Many problems ask "find two things that satisfy X." Store what you've seen so far in a dict, and for each new element, check if its "complement" (the thing you need) is already in the dict. This is the Two Sum pattern — it works for many variations.`})]}),(0,Y.jsxs)(`div`,{className:`tip-card`,children:[(0,Y.jsx)(`h4`,{children:`Frequency Counting`}),(0,Y.jsxs)(`p`,{children:[`When a problem involves counting occurrences, duplicates, or "most/least frequent," immediately think `,(0,Y.jsx)(`code`,{children:`Counter`}),` or a frequency dict. It's the fastest way to aggregate data.`]})]}),(0,Y.jsxs)(`div`,{className:`tip-card`,children:[(0,Y.jsx)(`h4`,{children:`Using Dict as a Cache`}),(0,Y.jsx)(`p`,{children:`If you're computing the same thing multiple times (recursion, overlapping subproblems), store results in a dict. This is memoization — it can turn exponential solutions into polynomial ones.`})]}),(0,Y.jsxs)(`div`,{className:`tip-card`,children:[(0,Y.jsx)(`h4`,{children:`Common Mistakes`}),(0,Y.jsxs)(`p`,{children:[`Using a list as a dict key (lists aren't hashable — use tuples instead). Forgetting `,(0,Y.jsx)(`code`,{children:`d[key]`}),` raises KeyError if key is missing (use `,(0,Y.jsx)(`code`,{children:`d.get(key, default)`}),`). Not considering that dict iteration order is insertion order in Python 3.7+.`]})]}),(0,Y.jsxs)(`div`,{className:`tip-card`,children:[(0,Y.jsx)(`h4`,{children:`When to Choose Dict Over List`}),(0,Y.jsx)(`p`,{children:`Use a dict when you need fast lookups by some key, counting, or mapping relationships. Use a list when you need ordered access by index or when the data is naturally sequential.`})]})]}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`🎯 LeetCode Problems (28)`})}),(0,Y.jsx)(Km,{problems:Fm,topic:`dictionaries`,count:28})]}),(0,Y.jsx)(`style`,{children:`
        .mode-btn {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.5rem 1rem;
          border-radius: var(--radius);
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 500;
          transition: var(--transition);
        }
        .mode-btn:hover { border-color: var(--accent-blue); color: var(--text-primary); }
        .mode-btn.active { background: rgba(88,166,255,0.1); border-color: var(--accent-blue); color: var(--accent-blue); }
      `})]})}function eh({array:e,highlightIndices:t=[],compareIndices:n=[],sortedIndices:r=[],swapIndices:i=[],pivotIndex:a=-1,maxVal:o}){let s=o||Math.max(...e,1),c=e=>e===a?`var(--accent-purple)`:i.includes(e)?`var(--accent-red)`:n.includes(e)?`var(--accent-orange)`:t.includes(e)?`var(--accent-blue)`:r.includes(e)?`var(--accent-green)`:`var(--accent-cyan)`;return(0,Y.jsxs)(`div`,{className:`sorting-visualizer`,children:[(0,Y.jsx)(`div`,{className:`bars-container`,children:e.map((e,t)=>(0,Y.jsxs)(`div`,{className:`bar-wrapper`,children:[(0,Y.jsx)(Q.div,{className:`bar`,animate:{height:`${e/s*250}px`,backgroundColor:c(t)},transition:{type:`spring`,stiffness:300,damping:25}}),(0,Y.jsx)(`span`,{className:`bar-value`,children:e})]},t))}),(0,Y.jsxs)(`div`,{className:`legend`,children:[(0,Y.jsxs)(`span`,{className:`legend-item`,children:[(0,Y.jsx)(`span`,{className:`legend-dot`,style:{background:`var(--accent-orange)`}}),` Comparing`]}),(0,Y.jsxs)(`span`,{className:`legend-item`,children:[(0,Y.jsx)(`span`,{className:`legend-dot`,style:{background:`var(--accent-red)`}}),` Swapping`]}),(0,Y.jsxs)(`span`,{className:`legend-item`,children:[(0,Y.jsx)(`span`,{className:`legend-dot`,style:{background:`var(--accent-green)`}}),` Sorted`]}),(0,Y.jsxs)(`span`,{className:`legend-item`,children:[(0,Y.jsx)(`span`,{className:`legend-dot`,style:{background:`var(--accent-purple)`}}),` Pivot`]})]}),(0,Y.jsx)(`style`,{children:`
        .sorting-visualizer {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem 1rem;
        }

        .bars-container {
          display: flex;
          align-items: flex-end;
          gap: 3px;
          min-height: 280px;
          padding: 1rem;
          border: 1px solid var(--border-color);
          border-radius: var(--radius);
          background: var(--bg-primary);
          width: 100%;
          justify-content: center;
        }

        .bar-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .bar {
          width: 32px;
          min-width: 20px;
          border-radius: 4px 4px 0 0;
          transition: background-color 0.2s;
        }

        .bar-value {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--text-muted);
        }

        .legend {
          display: flex;
          gap: 1.2rem;
          margin-top: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
      `})]})}function th(){let[e,t]=(0,w.useState)([64,34,25,12,22,11,90]),[n,r]=(0,w.useState)(!1),[i,a]=(0,w.useState)(1),[o,s]=(0,w.useState)(0),[c,l]=(0,w.useState)([]),[u,d]=(0,w.useState)(``),[f,p]=(0,w.useState)(`bubble`),m=(0,w.useRef)(null),h=(0,w.useCallback)(e=>{let t=[],n=[...e],r=new Set;t.push({array:[...n],compare:[],swap:[],sorted:[],desc:`Bubble Sort: repeatedly swap adjacent elements if in wrong order`});for(let e=0;e<n.length;e++){for(let i=0;i<n.length-e-1;i++)t.push({array:[...n],compare:[i,i+1],swap:[],sorted:[...r],desc:`Compare arr[${i}]=${n[i]} and arr[${i+1}]=${n[i+1]}`}),n[i]>n[i+1]&&([n[i],n[i+1]]=[n[i+1],n[i]],t.push({array:[...n],compare:[],swap:[i,i+1],sorted:[...r],desc:`Swap! ${n[i+1]} > ${n[i]} → swapped`}));r.add(n.length-e-1)}return t.push({array:[...n],compare:[],swap:[],sorted:Array.from({length:n.length},(e,t)=>t),desc:`Sorted! Bubble sort complete.`}),t},[]),g=(0,w.useCallback)(e=>{let t=[],n=[...e],r=new Set;t.push({array:[...n],compare:[],swap:[],sorted:[],desc:`Selection Sort: find the minimum and place it at the front`});for(let e=0;e<n.length;e++){let i=e;for(let a=e+1;a<n.length;a++)t.push({array:[...n],compare:[i,a],swap:[],sorted:[...r],desc:`Finding minimum: comparing arr[${i}]=${n[i]} with arr[${a}]=${n[a]}`}),n[a]<n[i]&&(i=a);i!==e&&([n[e],n[i]]=[n[i],n[e]],t.push({array:[...n],compare:[],swap:[e,i],sorted:[...r],desc:`Swap arr[${e}] and arr[${i}] — place minimum at position ${e}`})),r.add(e)}return t.push({array:[...n],compare:[],swap:[],sorted:Array.from({length:n.length},(e,t)=>t),desc:`Sorted! Selection sort complete.`}),t},[]),_=(0,w.useCallback)(e=>{let t=[],n=[...e],r=new Set([0]);t.push({array:[...n],compare:[],swap:[],sorted:[0],desc:`Insertion Sort: build sorted portion one element at a time`});for(let e=1;e<n.length;e++){let i=e;for(t.push({array:[...n],compare:[i],swap:[],sorted:[...r],desc:`Insert arr[${e}]=${n[e]} into sorted portion`});i>0&&n[i]<n[i-1];)[n[i],n[i-1]]=[n[i-1],n[i]],t.push({array:[...n],compare:[],swap:[i,i-1],sorted:[...r],desc:`Shift: swap arr[${i}] and arr[${i-1}]`}),i--;r.add(e)}return t.push({array:[...n],compare:[],swap:[],sorted:Array.from({length:n.length},(e,t)=>t),desc:`Sorted! Insertion sort complete.`}),t},[]),v=(0,w.useCallback)(e=>{let t=[],n=[...e],r=new Set;t.push({array:[...n],compare:[],swap:[],sorted:[],pivot:-1,desc:`Quick Sort: pick a pivot and partition around it`});function i(e,a){if(e>=a){e===a&&r.add(e);return}let o=n[a];t.push({array:[...n],compare:[],swap:[],sorted:[...r],pivot:a,desc:`Pivot = arr[${a}] = ${o}`});let s=e;for(let i=e;i<a;i++)t.push({array:[...n],compare:[i,a],swap:[],sorted:[...r],pivot:a,desc:`Compare arr[${i}]=${n[i]} with pivot ${o}`}),n[i]<o&&([n[s],n[i]]=[n[i],n[s]],s!==i&&t.push({array:[...n],compare:[],swap:[s,i],sorted:[...r],pivot:a,desc:`${n[i]} < ${o}, swap to position ${s}`}),s++);[n[s],n[a]]=[n[a],n[s]],t.push({array:[...n],compare:[],swap:[s,a],sorted:[...r],pivot:s,desc:`Place pivot at position ${s}`}),r.add(s),i(e,s-1),i(s+1,a)}return i(0,n.length-1),t.push({array:[...n],compare:[],swap:[],sorted:Array.from({length:n.length},(e,t)=>t),pivot:-1,desc:`Sorted! Quick sort complete.`}),t},[]),y=(0,w.useCallback)(e=>{let t=[],n=[...e].sort((e,t)=>e-t),r=n[Math.floor(n.length/3)],i=0,a=n.length-1;for(t.push({array:n,compare:[],swap:[],sorted:Array.from({length:n.length},(e,t)=>t),desc:`Binary Search: find ${r} in sorted array`});i<=a;){let e=Math.floor((i+a)/2);if(t.push({array:n,compare:[e],swap:[],sorted:Array.from({length:n.length},(e,t)=>t),highlight:Array.from({length:a-i+1},(e,t)=>i+t),desc:`Check middle: arr[${e}]=${n[e]}, searching in [${i}..${a}]`}),n[e]===r){t.push({array:n,compare:[],swap:[e],sorted:Array.from({length:n.length},(e,t)=>t),desc:`Found! arr[${e}] = ${r} ✓`});break}n[e]<r?(i=e+1,t.push({array:n,compare:[],swap:[],sorted:Array.from({length:n.length},(e,t)=>t),desc:`${n[e]} < ${r}, search right half`})):(a=e-1,t.push({array:n,compare:[],swap:[],sorted:Array.from({length:n.length},(e,t)=>t),desc:`${n[e]} > ${r}, search left half`}))}return t},[]),b=(0,w.useCallback)((e,t)=>{switch(t){case`selection`:return g(e);case`insertion`:return _(e);case`quick`:return v(e);case`binary-search`:return y(e);default:return h(e)}},[h,g,_,v,y]);(0,w.useEffect)(()=>{l(b(e,f)),s(0)},[e,f,b]),(0,w.useEffect)(()=>(n&&c.length>0&&(m.current=setInterval(()=>{s(e=>e>=c.length-1?(r(!1),e):e+1)},800/i)),()=>clearInterval(m.current)),[n,i,c.length]);let x=c[o]||{array:e,compare:[],swap:[],sorted:[],desc:``};return(0,Y.jsxs)(`div`,{children:[(0,Y.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,marginBottom:`1rem`,flexWrap:`wrap`},children:[(0,Y.jsx)(`button`,{className:`mode-btn ${f===`bubble`?`active`:``}`,onClick:()=>p(`bubble`),children:`Bubble Sort`}),(0,Y.jsx)(`button`,{className:`mode-btn ${f===`selection`?`active`:``}`,onClick:()=>p(`selection`),children:`Selection Sort`}),(0,Y.jsx)(`button`,{className:`mode-btn ${f===`insertion`?`active`:``}`,onClick:()=>p(`insertion`),children:`Insertion Sort`}),(0,Y.jsx)(`button`,{className:`mode-btn ${f===`quick`?`active`:``}`,onClick:()=>p(`quick`),children:`Quick Sort`}),(0,Y.jsx)(`button`,{className:`mode-btn ${f===`binary-search`?`active`:``}`,onClick:()=>p(`binary-search`),children:`Binary Search`})]}),(0,Y.jsx)(_p,{isPlaying:n,onPlay:()=>r(!0),onPause:()=>r(!1),onStepForward:()=>s(Math.min(o+1,c.length-1)),onStepBackward:()=>s(Math.max(o-1,0)),onReset:()=>{s(0),r(!1)},speed:i,onSpeedChange:a,currentStep:o,totalSteps:c.length,customInput:u,onCustomInputChange:d,onCustomInputSubmit:()=>{let e=u.split(`,`).map(Number).filter(e=>!isNaN(e));e.length>0&&(t(e),s(0),r(!1))},inputPlaceholder:`Enter numbers (comma-separated)`}),(0,Y.jsxs)(`div`,{className:`visualizer-container`,children:[(0,Y.jsx)(eh,{array:x.array,compareIndices:x.compare,swapIndices:x.swap,sortedIndices:x.sorted||[],pivotIndex:x.pivot,highlightIndices:x.highlight||[]}),(0,Y.jsx)(`div`,{style:{textAlign:`center`,fontFamily:`var(--font-mono)`,fontSize:`0.85rem`,color:`var(--accent-cyan)`,marginTop:`1rem`},children:x.desc})]})]})}function nh(){return(0,Y.jsxs)(Q.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4},children:[(0,Y.jsx)(`h1`,{children:`Sorting & Searching`}),(0,Y.jsx)(`p`,{style:{fontSize:`1.1rem`,color:`var(--text-secondary)`},children:`Sorting organizes data so you can find things faster. Searching finds specific items efficiently. Together, they form the backbone of almost every algorithm — and interviewers love asking about them.`}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`📖 Theory`})}),(0,Y.jsx)(`h3`,{children:`Why Sorting & Searching?`}),(0,Y.jsx)(`p`,{children:`Sorting makes searching faster. Once data is sorted, you can use binary search to find any item in O(log n) time instead of O(n). Many interview problems become much simpler once you sort the input first.`}),(0,Y.jsx)(`h3`,{children:`Sorting Algorithms Comparison`}),(0,Y.jsxs)(`ul`,{style:{color:`var(--text-secondary)`,paddingLeft:`1.5rem`,lineHeight:`2.2`},children:[(0,Y.jsxs)(`li`,{children:[(0,Y.jsx)(`strong`,{children:`Bubble Sort`}),` — O(n²) — swap adjacent elements repeatedly. Simple but slow. Rarely used in practice.`]}),(0,Y.jsxs)(`li`,{children:[(0,Y.jsx)(`strong`,{children:`Selection Sort`}),` — O(n²) — find minimum, place it at front, repeat. Also slow, but does fewer swaps.`]}),(0,Y.jsxs)(`li`,{children:[(0,Y.jsx)(`strong`,{children:`Insertion Sort`}),` — O(n²) average, O(n) best — builds sorted portion one element at a time. Fast for nearly-sorted data.`]}),(0,Y.jsxs)(`li`,{children:[(0,Y.jsx)(`strong`,{children:`Merge Sort`}),` — O(n log n) — divide array in half, sort each half, merge them. Always O(n log n) but uses O(n) extra space.`]}),(0,Y.jsxs)(`li`,{children:[(0,Y.jsx)(`strong`,{children:`Quick Sort`}),` — O(n log n) average — pick a pivot, partition elements around it, recurse. Fastest in practice for most data.`]}),(0,Y.jsxs)(`li`,{children:[(0,Y.jsx)(`strong`,{children:`Heap Sort`}),` — O(n log n) — uses a heap data structure. O(1) extra space but cache-unfriendly.`]})]}),(0,Y.jsx)(`h3`,{children:`Binary Search — The Key Insight`}),(0,Y.jsx)(`p`,{children:`Binary search works by cutting the search space in half each step. Start with the middle element. If it's your target, you're done. If it's too small, search the right half. If it's too big, search the left half. This gives you O(log n) — finding an item in a billion elements takes only ~30 steps!`})]}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`📋 Cheat Sheet`})}),(0,Y.jsxs)(`div`,{className:`cheat-grid`,children:[(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`arr.sort()`}),(0,Y.jsx)(`p`,{children:`Sort list in-place (ascending). Uses Timsort — O(n log n)`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`sorted(arr)`}),(0,Y.jsx)(`p`,{children:`Return new sorted list (original unchanged)`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`arr.sort(key=lambda x: x[1])`}),(0,Y.jsx)(`p`,{children:`Sort by custom key (e.g., second element of tuples)`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`arr.sort(reverse=True)`}),(0,Y.jsx)(`p`,{children:`Sort in descending order`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`bisect.bisect_left(arr, x)`}),(0,Y.jsx)(`p`,{children:`Find insertion point for x in sorted arr (left side)`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`bisect.insort(arr, x)`}),(0,Y.jsx)(`p`,{children:`Insert x into sorted arr maintaining order`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`heapq.heapify(arr)`}),(0,Y.jsx)(`p`,{children:`Turn list into a min-heap in O(n)`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`heapq.heappush(h, x)`}),(0,Y.jsx)(`p`,{children:`Push x onto heap — O(log n)`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`heapq.heappop(h)`}),(0,Y.jsx)(`p`,{children:`Pop smallest item from heap — O(log n)`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`heapq.nlargest(k, arr)`}),(0,Y.jsx)(`p`,{children:`Get k largest elements — O(n log k)`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`min(arr) / max(arr)`}),(0,Y.jsx)(`p`,{children:`Find min/max — O(n) linear scan`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`sorted(arr, key=len)`}),(0,Y.jsx)(`p`,{children:`Sort strings by length`})]})]})]}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`💻 Code Examples`})}),(0,Y.jsx)(gm,{title:`Binary Search — Standard Template`,code:`def binary_search(arr, target):
    """Find target in sorted array. Return index or -1."""
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return mid         # Found it!
        elif arr[mid] < target:
            left = mid + 1     # Target is in right half
        else:
            right = mid - 1    # Target is in left half

    return -1  # Not found

# Example
arr = [1, 3, 5, 7, 9, 11, 13]
print(binary_search(arr, 7))   # 3 (index of 7)`}),(0,Y.jsx)(gm,{title:`Merge Intervals — Sort + Sweep`,code:`def merge_intervals(intervals):
    """Merge overlapping intervals."""
    intervals.sort(key=lambda x: x[0])  # Sort by start time
    merged = [intervals[0]]

    for start, end in intervals[1:]:
        if start <= merged[-1][1]:  # Overlaps with last merged
            merged[-1][1] = max(merged[-1][1], end)  # Extend
        else:
            merged.append([start, end])  # No overlap, add new

    return merged

# Example
print(merge_intervals([[1,3],[2,6],[8,10],[15,18]]))
# [[1,6],[8,10],[15,18]]`}),(0,Y.jsx)(gm,{title:`Kth Largest Element using Heap`,code:`import heapq

def kth_largest(nums, k):
    """Find the kth largest element efficiently."""
    # Use a min-heap of size k
    # The top of the heap will be the kth largest
    heap = nums[:k]
    heapq.heapify(heap)

    for num in nums[k:]:
        if num > heap[0]:  # Bigger than smallest in heap
            heapq.heapreplace(heap, num)  # Remove min, add num

    return heap[0]  # kth largest

# Example
print(kth_largest([3,2,1,5,6,4], 2))  # 5`})]}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`🎬 Visualizer`})}),(0,Y.jsx)(`p`,{children:`Watch sorting algorithms work step-by-step! Compare how Bubble, Selection, Insertion, and Quick Sort organize data differently.`}),(0,Y.jsx)(th,{})]}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`💡 Interview Tips`})}),(0,Y.jsxs)(`div`,{className:`tip-card`,children:[(0,Y.jsx)(`h4`,{children:`When to Sort First`}),(0,Y.jsx)(`p`,{children:`If a problem involves finding pairs, detecting overlaps, or needs elements "in order," sorting the input first often simplifies the solution dramatically. Sorting costs O(n log n) but can reduce the rest from O(n²) to O(n).`})]}),(0,Y.jsxs)(`div`,{className:`tip-card`,children:[(0,Y.jsx)(`h4`,{children:`Binary Search Template`}),(0,Y.jsx)(`p`,{children:`Most binary search problems follow the same pattern: define a condition, and find the boundary where the condition switches from false to true. Practice the template until it's automatic: while left <= right, check mid, adjust left or right.`})]}),(0,Y.jsxs)(`div`,{className:`tip-card`,children:[(0,Y.jsx)(`h4`,{children:`Heap for "K-th" Problems`}),(0,Y.jsx)(`p`,{children:`Any problem asking for "kth largest," "kth smallest," "top k elements," or "median" — think heap immediately. A min-heap of size k gives you the kth largest in O(n log k) time.`})]}),(0,Y.jsxs)(`div`,{className:`tip-card`,children:[(0,Y.jsx)(`h4`,{children:`Common Mistakes`}),(0,Y.jsx)(`p`,{children:`Off-by-one in binary search (use <= not < for inclusive bounds). Forgetting that Python's heapq is a min-heap (negate values for max-heap). Not handling duplicates in binary search (bisect_left vs bisect_right).`})]})]}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`🎯 LeetCode Problems (29)`})}),(0,Y.jsx)(Km,{problems:Im,topic:`sorting`,count:29})]}),(0,Y.jsx)(`style`,{children:`
        .mode-btn {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.5rem 1rem;
          border-radius: var(--radius);
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 500;
          transition: var(--transition);
        }
        .mode-btn:hover { border-color: var(--accent-blue); color: var(--text-primary); }
        .mode-btn.active { background: rgba(88,166,255,0.1); border-color: var(--accent-blue); color: var(--accent-blue); }
      `})]})}function rh({items:e,operation:t,isQueue:n=!1,label:r=``}){return(0,Y.jsxs)(`div`,{className:`stack-visualizer`,children:[r&&(0,Y.jsx)(`div`,{className:`stack-label`,children:r}),(0,Y.jsxs)(`div`,{className:`stack-container ${n?`queue-mode`:``}`,children:[(0,Y.jsx)(`div`,{className:`stack-header`,children:n?`← Front`:`← Top`}),(0,Y.jsxs)(`div`,{className:`stack-items ${n?`horizontal`:``}`,children:[(0,Y.jsx)(_d,{children:e.map((t,r)=>(0,Y.jsx)(Q.div,{className:`stack-item ${r===0&&!n?`top-item`:``} ${r===0&&n?`front-item`:``} ${r===e.length-1&&n?`rear-item`:``}`,initial:{opacity:0,x:n?50:0,y:n?0:-30,scale:.8},animate:{opacity:1,x:0,y:0,scale:1},exit:{opacity:0,x:n?-50:0,y:n?0:-30,scale:.8},transition:{type:`spring`,stiffness:300,damping:25},children:(0,Y.jsx)(`span`,{className:`item-value`,children:t.value})},t.id||r))}),e.length===0&&(0,Y.jsx)(`div`,{className:`empty-message`,children:`Empty`})]}),(0,Y.jsx)(`div`,{className:`stack-footer`,children:n?`Rear →`:`Bottom →`})]}),t&&(0,Y.jsx)(Q.div,{className:`operation-indicator`,initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:t},t),(0,Y.jsx)(`style`,{children:`
        .stack-visualizer {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
        }

        .stack-label {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }

        .stack-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 120px;
        }

        .queue-mode {
          flex-direction: row;
          min-width: auto;
        }

        .stack-header, .stack-footer {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-muted);
          padding: 0.3rem 0;
        }

        .stack-items {
          display: flex;
          flex-direction: column;
          gap: 4px;
          border: 2px solid var(--border-color);
          border-radius: var(--radius);
          padding: 0.5rem;
          min-height: 200px;
          min-width: 100px;
          justify-content: flex-end;
        }

        .stack-items.horizontal {
          flex-direction: row;
          min-height: auto;
          min-width: 200px;
          align-items: center;
          justify-content: flex-start;
        }

        .stack-item {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 0.6rem 1.2rem;
          text-align: center;
          font-family: var(--font-mono);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .top-item, .front-item {
          background: rgba(88, 166, 255, 0.15);
          border-color: var(--accent-blue);
          color: var(--accent-blue);
        }

        .rear-item {
          background: rgba(63, 185, 80, 0.15);
          border-color: var(--accent-green);
          color: var(--accent-green);
        }

        .empty-message {
          color: var(--text-muted);
          font-size: 0.8rem;
          font-style: italic;
          padding: 2rem 0;
        }

        .operation-indicator {
          margin-top: 1rem;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--accent-orange);
          background: rgba(210, 153, 34, 0.1);
          padding: 0.4rem 1rem;
          border-radius: var(--radius);
          border: 1px solid rgba(210, 153, 34, 0.3);
        }
      `})]})}function ih(){let[e,t]=(0,w.useState)(!1),[n,r]=(0,w.useState)(1),[i,a]=(0,w.useState)(0),[o,s]=(0,w.useState)([]),[c,l]=(0,w.useState)(``),[u,d]=(0,w.useState)(`stack`),f=(0,w.useRef)(null),p=(0,w.useCallback)(()=>{let e=[],t=[],n=0;e.push({items:[],operation:`Empty stack — Last In, First Out (LIFO)`,isQueue:!1});for(let r of[10,20,30,40])t=[{value:r,id:n++},...t],e.push({items:[...t],operation:`push(${r}) — added to top`,isQueue:!1});let r=t[0].value;t=t.slice(1),e.push({items:[...t],operation:`pop() → ${r} — removed from top`,isQueue:!1});let i=t[0].value;return t=t.slice(1),e.push({items:[...t],operation:`pop() → ${i} — removed from top`,isQueue:!1}),t=[{value:50,id:n++},...t],e.push({items:[...t],operation:`push(50) — added to top`,isQueue:!1}),e.push({items:[...t],operation:`peek() → ${t[0].value} — look at top without removing`,isQueue:!1}),e},[]),m=(0,w.useCallback)(()=>{let e=[],t=[],n=0;e.push({items:[],operation:`Empty queue — First In, First Out (FIFO)`,isQueue:!0});for(let r of[`A`,`B`,`C`,`D`])t=[...t,{value:r,id:n++}],e.push({items:[...t],operation:`enqueue("${r}") — added to rear`,isQueue:!0});let r=t[0].value;t=t.slice(1),e.push({items:[...t],operation:`dequeue() → "${r}" — removed from front`,isQueue:!0});let i=t[0].value;return t=t.slice(1),e.push({items:[...t],operation:`dequeue() → "${i}" — removed from front`,isQueue:!0}),t=[...t,{value:`E`,id:n++}],e.push({items:[...t],operation:`enqueue("E") — added to rear`,isQueue:!0}),e.push({items:[...t],operation:`front() → "${t[0].value}" — peek at front`,isQueue:!0}),e},[]),h=(0,w.useCallback)(()=>{let e=[],t=`({[]})`,n=[],r=0;e.push({items:[],operation:`Validate: "${t}" — use stack for matching brackets`,isQueue:!1});let i={")":`(`,"]":`[`,"}":`{`};for(let a=0;a<6;a++){let o=t[a];`({[`.includes(o)?(n=[{value:o,id:r++},...n],e.push({items:[...n],operation:`Push '${o}' — opening bracket at index ${a}`,isQueue:!1})):n.length>0&&n[0].value===i[o]&&(n=n.slice(1),e.push({items:[...n],operation:`Pop '${i[o]}' — matches '${o}' at index ${a} ✓`,isQueue:!1}))}return e.push({items:[...n],operation:n.length===0?`Stack empty → Valid! ✓ All brackets matched`:`Stack not empty → Invalid! ✗`,isQueue:!1}),e},[]),g=(0,w.useCallback)(e=>{switch(e){case`queue`:return m();case`parentheses`:return h();default:return p()}},[p,m,h]);(0,w.useEffect)(()=>{s(g(u)),a(0)},[u,g]),(0,w.useEffect)(()=>(e&&o.length>0&&(f.current=setInterval(()=>{a(e=>e>=o.length-1?(t(!1),e):e+1)},1200/n)),()=>clearInterval(f.current)),[e,n,o.length]);let _=o[i]||{items:[],operation:``,isQueue:!1};return(0,Y.jsxs)(`div`,{children:[(0,Y.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,marginBottom:`1rem`,flexWrap:`wrap`},children:[(0,Y.jsx)(`button`,{className:`mode-btn ${u===`stack`?`active`:``}`,onClick:()=>d(`stack`),children:`Stack (LIFO)`}),(0,Y.jsx)(`button`,{className:`mode-btn ${u===`queue`?`active`:``}`,onClick:()=>d(`queue`),children:`Queue (FIFO)`}),(0,Y.jsx)(`button`,{className:`mode-btn ${u===`parentheses`?`active`:``}`,onClick:()=>d(`parentheses`),children:`Valid Parentheses`})]}),(0,Y.jsx)(_p,{isPlaying:e,onPlay:()=>t(!0),onPause:()=>t(!1),onStepForward:()=>a(Math.min(i+1,o.length-1)),onStepBackward:()=>a(Math.max(i-1,0)),onReset:()=>{a(0),t(!1)},speed:n,onSpeedChange:r,currentStep:i,totalSteps:o.length,customInput:c,onCustomInputChange:l,onCustomInputSubmit:()=>{a(0),t(!1)},inputPlaceholder:u===`parentheses`?`Enter brackets e.g. ({[]})`:`Enter values (comma-separated)`}),(0,Y.jsx)(`div`,{className:`visualizer-container`,children:(0,Y.jsx)(rh,{items:_.items,operation:_.operation,isQueue:_.isQueue})})]})}function ah(){return(0,Y.jsxs)(Q.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4},children:[(0,Y.jsx)(`h1`,{children:`Stacks & Queues`}),(0,Y.jsx)(`p`,{style:{fontSize:`1.1rem`,color:`var(--text-secondary)`},children:`Stacks and queues control the order you process things. A stack processes the newest item first (like a stack of plates). A queue processes the oldest item first (like a line at a store).`}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`📖 Theory`})}),(0,Y.jsx)(`h3`,{children:`Stack — Last In, First Out (LIFO)`}),(0,Y.jsx)(`p`,{children:`Imagine a stack of plates: you always take from the top and add to the top. The last plate you put on is the first one you take off. That's LIFO — Last In, First Out.`}),(0,Y.jsx)(`p`,{children:`In programming, stacks are used for: undo operations, function call tracking, expression evaluation, and backtracking algorithms.`}),(0,Y.jsx)(`h3`,{children:`Queue — First In, First Out (FIFO)`}),(0,Y.jsx)(`p`,{children:`Imagine a line at a coffee shop: the first person in line gets served first. That's FIFO — First In, First Out.`}),(0,Y.jsx)(`p`,{children:`In programming, queues are used for: BFS (breadth-first search), task scheduling, buffering, and any "process in order" scenarios.`}),(0,Y.jsx)(`h3`,{children:`Time Complexity`}),(0,Y.jsxs)(`ul`,{style:{color:`var(--text-secondary)`,paddingLeft:`1.5rem`,lineHeight:`2`},children:[(0,Y.jsxs)(`li`,{children:[(0,Y.jsx)(`strong`,{children:`Push/Enqueue`}),` — `,(0,Y.jsx)(`code`,{children:`O(1)`}),` — add to top/rear instantly`]}),(0,Y.jsxs)(`li`,{children:[(0,Y.jsx)(`strong`,{children:`Pop/Dequeue`}),` — `,(0,Y.jsx)(`code`,{children:`O(1)`}),` — remove from top/front instantly`]}),(0,Y.jsxs)(`li`,{children:[(0,Y.jsx)(`strong`,{children:`Peek`}),` — `,(0,Y.jsx)(`code`,{children:`O(1)`}),` — look at top/front without removing`]}),(0,Y.jsxs)(`li`,{children:[(0,Y.jsx)(`strong`,{children:`Search`}),` — `,(0,Y.jsx)(`code`,{children:`O(n)`}),` — must check each element`]})]}),(0,Y.jsx)(`h3`,{children:`Monotonic Stack — Advanced Pattern`}),(0,Y.jsx)(`p`,{children:`A monotonic stack keeps its elements in sorted order (either always increasing or always decreasing). When you add a new element, you pop off everything that violates the order. This pattern solves "next greater element," "daily temperatures," and "largest rectangle" problems in O(n).`})]}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`📋 Cheat Sheet`})}),(0,Y.jsxs)(`div`,{className:`cheat-grid`,children:[(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`stack = []`}),(0,Y.jsx)(`p`,{children:`Create a stack using a regular list`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`stack.append(x)`}),(0,Y.jsx)(`p`,{children:`Push x onto top of stack — O(1)`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`stack.pop()`}),(0,Y.jsx)(`p`,{children:`Pop and return top element — O(1)`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`stack[-1]`}),(0,Y.jsx)(`p`,{children:`Peek at top without removing`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`len(stack) == 0`}),(0,Y.jsx)(`p`,{children:`Check if stack is empty`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`from collections import deque`}),(0,Y.jsx)(`p`,{children:`Import deque for efficient queue`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`q = deque()`}),(0,Y.jsx)(`p`,{children:`Create a queue`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`q.append(x)`}),(0,Y.jsx)(`p`,{children:`Enqueue — add to rear — O(1)`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`q.popleft()`}),(0,Y.jsx)(`p`,{children:`Dequeue — remove from front — O(1)`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`q[0]`}),(0,Y.jsx)(`p`,{children:`Peek at front of queue`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`q.appendleft(x)`}),(0,Y.jsx)(`p`,{children:`Add to front (useful for deque)`})]}),(0,Y.jsxs)(`div`,{className:`cheat-item`,children:[(0,Y.jsx)(`code`,{children:`from queue import Queue`}),(0,Y.jsx)(`p`,{children:`Thread-safe queue (for concurrency)`})]})]})]}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`💻 Code Examples`})}),(0,Y.jsx)(gm,{title:`Valid Parentheses — Classic Stack Problem`,code:`def is_valid_parentheses(s):
    """Check if brackets are properly matched and nested."""
    stack = []
    matching = {')': '(', ']': '[', '}': '{'}

    for char in s:
        if char in '({[':
            stack.append(char)  # Push opening brackets
        elif char in ')}]':
            if not stack or stack[-1] != matching[char]:
                return False  # No match or stack empty
            stack.pop()  # Pop matching opening bracket

    return len(stack) == 0  # Stack should be empty

# Examples
print(is_valid_parentheses("({[]})"))  # True
print(is_valid_parentheses("([)]"))    # False`}),(0,Y.jsx)(gm,{title:`Daily Temperatures — Monotonic Stack`,code:`def daily_temperatures(temps):
    """For each day, find how many days until a warmer temperature."""
    n = len(temps)
    result = [0] * n
    stack = []  # Stack of indices (decreasing temperatures)

    for i in range(n):
        # Pop all days that are colder than today
        while stack and temps[i] > temps[stack[-1]]:
            prev_day = stack.pop()
            result[prev_day] = i - prev_day  # Days to wait
        stack.append(i)

    return result

# Example: [73,74,75,71,69,72,76,73]
# Result:  [1, 1, 4, 2, 1, 1, 0, 0]
print(daily_temperatures([73,74,75,71,69,72,76,73]))`}),(0,Y.jsx)(gm,{title:`BFS with Queue — Level Order Traversal`,code:`from collections import deque

def bfs_level_order(graph, start):
    """Breadth-first search using a queue."""
    visited = set([start])
    queue = deque([start])
    levels = []

    while queue:
        level_size = len(queue)
        current_level = []

        for _ in range(level_size):
            node = queue.popleft()  # Process front of queue
            current_level.append(node)

            for neighbor in graph.get(node, []):
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)  # Add to rear

        levels.append(current_level)

    return levels

# Example graph
graph = {'A': ['B','C'], 'B': ['D','E'], 'C': ['F'], 'D': [], 'E': [], 'F': []}
print(bfs_level_order(graph, 'A'))  # [['A'], ['B','C'], ['D','E','F']]`})]}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`🎬 Visualizer`})}),(0,Y.jsx)(`p`,{children:`Watch push/pop operations on a stack, enqueue/dequeue on a queue, and see how parentheses matching uses a stack in real-time!`}),(0,Y.jsx)(ih,{})]}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`💡 Interview Tips`})}),(0,Y.jsxs)(`div`,{className:`tip-card`,children:[(0,Y.jsx)(`h4`,{children:`When to Use a Stack`}),(0,Y.jsx)(`p`,{children:`Matching/nesting problems (parentheses, HTML tags). "Next greater/smaller element" problems. Undo functionality. Expression evaluation. DFS (depth-first search). Anything where you process the most recent item first.`})]}),(0,Y.jsxs)(`div`,{className:`tip-card`,children:[(0,Y.jsx)(`h4`,{children:`When to Use a Queue`}),(0,Y.jsx)(`p`,{children:`BFS (breadth-first search). Level-order processing. Task scheduling in order. Sliding window maximum (with deque). Any "process in the order received" scenario.`})]}),(0,Y.jsxs)(`div`,{className:`tip-card`,children:[(0,Y.jsx)(`h4`,{children:`Monotonic Stack Pattern`}),(0,Y.jsx)(`p`,{children:`When you need the "next greater element" or "previous smaller element" for every item in an array, use a monotonic stack. It processes all elements in O(n) total — each element is pushed and popped at most once.`})]}),(0,Y.jsxs)(`div`,{className:`tip-card`,children:[(0,Y.jsx)(`h4`,{children:`Common Mistakes`}),(0,Y.jsxs)(`p`,{children:[`Popping from an empty stack (always check `,(0,Y.jsx)(`code`,{children:`if stack:`}),` first). Using `,(0,Y.jsx)(`code`,{children:`list.pop(0)`}),` for a queue (that's O(n) — use `,(0,Y.jsx)(`code`,{children:`deque.popleft()`}),` for O(1)). Forgetting to check the stack at the end (leftover items often mean invalid input).`]})]}),(0,Y.jsxs)(`div`,{className:`tip-card`,children:[(0,Y.jsx)(`h4`,{children:`Stack vs Queue Decision`}),(0,Y.jsx)(`p`,{children:`Ask yourself: "Do I need the most RECENT item (stack/DFS) or the OLDEST item (queue/BFS)?" That single question usually tells you which to use.`})]})]}),(0,Y.jsxs)(`section`,{className:`section`,children:[(0,Y.jsx)(`div`,{className:`section-title`,children:(0,Y.jsx)(`h2`,{children:`🎯 LeetCode Problems (29)`})}),(0,Y.jsx)(Km,{problems:Lm,topic:`stacks-queues`,count:29})]}),(0,Y.jsx)(`style`,{children:`
        .mode-btn {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.5rem 1rem;
          border-radius: var(--radius);
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 500;
          transition: var(--transition);
        }
        .mode-btn:hover { border-color: var(--accent-blue); color: var(--text-primary); }
        .mode-btn.active { background: rgba(88,166,255,0.1); border-color: var(--accent-blue); color: var(--accent-blue); }
      `})]})}function oh(){return(0,Y.jsx)(kn,{children:(0,Y.jsxs)(`div`,{className:`app-layout`,children:[(0,Y.jsx)(mp,{}),(0,Y.jsx)(`main`,{className:`main-content`,children:(0,Y.jsxs)(Wt,{children:[(0,Y.jsx)(Ht,{path:`/`,element:(0,Y.jsx)(gp,{})}),(0,Y.jsx)(Ht,{path:`/lists`,element:(0,Y.jsx)(Jm,{})}),(0,Y.jsx)(Ht,{path:`/strings`,element:(0,Y.jsx)(Xm,{})}),(0,Y.jsx)(Ht,{path:`/dictionaries`,element:(0,Y.jsx)($m,{})}),(0,Y.jsx)(Ht,{path:`/sorting-searching`,element:(0,Y.jsx)(nh,{})}),(0,Y.jsx)(Ht,{path:`/stacks-queues`,element:(0,Y.jsx)(ah,{})})]})})]})})}(0,fp.createRoot)(document.getElementById(`root`)).render((0,Y.jsx)(w.StrictMode,{children:(0,Y.jsx)(oh,{})}));